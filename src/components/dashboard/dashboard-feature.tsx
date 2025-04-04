/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4hBLVmikw3kGyNDQaDn7uTDczzJRJUZzaHnjLgJyjqbGuQqUoDcSbnSY3Ev2k6rRra1cKT3q4So1Q2PcFszgTVCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32L7ijgYCQFGLhHdN2cB3J9Fej3pY1eK27MtjEHNmDt9nuxktetMLq94ZR1yyjR8nbXNjCuYb21AcHZs2ZP6Yvgh",
  "key1": "3gRH9UxuyvZTzpQ9hHyc5xuCPtHRoyr1GgSW4XjzfhcFi5ktxRSzTMof9PPbdiJCJSCa2pU7AUPtBNmZd8r417us",
  "key2": "4UE14vBWpgQGxqpa3KXHygH6ihcyXqkUPfHZ88nqCqPoPCxS5qjNKQAt4vKgZrZe4ta1UQmzRWb95h1gRzaav7QK",
  "key3": "5MRBSxJjrsNPGbMdRh96wv1egJw7M1mZ9tj5xrcxViAyS5Xk4VUm1gPT9q5aoBwHgQR341UuvmyW9gki2CrTH635",
  "key4": "3hFjtyGX6ggA3iKdqGXQMs9Hu6RdBJhQqM2XZURCG4AxLeFc7fvH385ooFhzMastg6dyKSb9mQ8pBjhuASKZ8MvD",
  "key5": "UKVrMU5GRi6ecYKswk1XdgeMdg1wiNe68wxTswXyPTMN5v8uMFwfp1KDCqVdekBNwZWBBB78RDNr5R9yW1gcyNQ",
  "key6": "zr8cH4wBT6YB5S6S3otbij8wAeyK45vGE9BvaQ1g1jcmThVe5QJ9ZN7RpwXYqnuiEmk1bGAfntTFcq4GVujMzDT",
  "key7": "43VSnvYAS6mZK5cPzmfGvJ5Uwi8okMKAyY6HCEFB7L63YBaoyfNUb5hD6LSa5Qa8FoonuHxZGBSSyVE53aq1ZSTQ",
  "key8": "fVLB3UNJGtqwhaWdazpfyPCEXaKyUxuDFZoRb28hPR7Gr2TrvSjhShoRdFracBESTMVNszppBenecaXRLLwnzu9",
  "key9": "3ZujiGuMenxRGg7eKfY5zF9gjMmypPEor2ankPk8A9y6yF5LbMLSKfGaFStFWFAwyzZzCSSsa2E3iz1QNvFHopzx",
  "key10": "2DhxY7j1dZ9q1A8rXvw1JUbd6MLftQLofJjB5QawNY7ZunYkMuxhcWVixcLfPytqEhtXDrWQq78YDXqESnUHcNjd",
  "key11": "3Jvon38yD6N7GRJFiXq7Kpq7f4tmHPGWXPRxNSs3vHgY4WJHYpmxX3a4pcxEM2uLVF9iN3ygcEuWJEJxVgmj2ZFb",
  "key12": "3oJQAKHXuFty2g6dac138bWmhH1eT9VuzQv6BCsnFqginsRTs46RnZJnWs4B1fzPxaM97a5BGxBo7PgnzbZW4ENY",
  "key13": "ECiYMtqiwyuzDGe4pP2ecLzur3XRcMYzzWppzQ6tfypsjT41TMSRBnRnzJmwhnkpVYHrR8QnwcSEHpkNS145YYi",
  "key14": "3LD6GpViYhGYb52Zap7fgWRMvGRBGLhcRFG73hg3efqB9xwyyXCg3gCngjG2SWHv7SZLobJF6LursU5Gin2taALj",
  "key15": "z85L7o2vTn531Kf1dgrhVkAJpEp7RBhWzVJTQy7PBuncBGbCGjz41zz7i1VjDmyuDjYfb1CxfVpK4cb2gHNKdT8",
  "key16": "39YvTxhYcHjJ99eWAEXaS384EEK3A1etTFXZDzCZRAnLefLx6bqUHF3EcXdhcuVzejPqYt1R6evVWkCY81RX8Cra",
  "key17": "3VKFDtfe1ps5dhdYeGpZQyLiYubK78vG3yqfvBxCGHQWUedEnMuUnzhsvdeYUupEEYfmNmqyGgVE37BDbsgd2aUP",
  "key18": "4ggzEyk659ye2s1BBmXkNeA5moZPb9NoNaGK2WJRsETHe8RXYpocdCg2nufru6ukvepGhfFydMWbAJekUZsopkPN",
  "key19": "52gaLwjXAhpsbBAvTej4CSJpJpWFGY4XyXSMYzGRLEU8ej5taKsF8ZB1omshARvhjSoGNFCkViGXkqugmt7mbZpL",
  "key20": "YzNxEWvcPuDGZ3MoxEmR3EW1jQgV89odjMbCe26cuusuw3KuNDNsCYpaNqvCRVD6NMpMzaBEfov5iMNmE3g9YsB",
  "key21": "28B7XJp3z9B31M5M6qBRo5ipsWPkaLrMPw2DpbcHiWUAgpDuE8QTRY2X4ZjdWAgnbcPhMYBU11nB1sAougUfvTcm",
  "key22": "2fSk5EDMbiHpCbw5dgdiMaVMfs5KNg7oq9KNJWPXsd8MmqbMjaoJfmjMEU1g3McsDVNVemafUDAnH9SVfjvqhwFo",
  "key23": "4GfiQ1AvTMHLVzqst5fDVwzzzpgEwBxMZMQr2aF7FWnGdSqDzT811b62tX4TsaSBok521wMhwUWXNPRCi5EFRSUN",
  "key24": "4DmHrTBVdf4NFM1EWeWdakHPyZDoXqESwK9EzgYnxTjBRWL4LWTYi35uKxrzTDBygxsXX1JziZiwYAWKia9FpqXQ",
  "key25": "5zpS8DvZdiixg4xwHJiRHfVFFDCvseFmR4WRi6p4hXHeMhmNbxqbcgX73EdgWpfK5vDJyi48Msvk2Fjj8cpbg66X",
  "key26": "5pe54zUSStrSaAGKPtdSJYRFr1QfJxnrySbF26BufPE5Y6eN5wAgJDDiiWChBS7WkjZZNBtwUS9SSmKEhmKu29dC",
  "key27": "33aZ3rqMfVSFe3ZEkJSB6yCKiVwMXy7pp63NXJU8BmdxriGvQeUkN3rRikEyMgxnNgbNhHLYNz2wyuKxmN1P5yC7",
  "key28": "2av122uh8vUZV2k7qS97HP95oWcUS2PDbX3vXFfJhHVKNvExuKPEkjf63CZ79EBSVBsqCYfyhf3W7bodbhGWbsor",
  "key29": "45ZovxNWXyJxfbdseUsFByFJ8WWrQRrRNSXWZ1HQVWJYDze47vLZSUz9C8xuX9ehbSvF65yVT55rKZAZxAyFQQPJ",
  "key30": "5dGo5yo5d9crt9NdyyK2P6vb7CvzbwEM32vmyRYYQXhrqg7zKUYkJv95giAgkNsR1vNoiy2GHJeEjEHb76eCFGm7",
  "key31": "2je1xXictrqXB4rKKovPHUWXUNkmU3veRQ8jR5qMyghDYjk3EmUREe9mSfQ7LncaNZXoKY2pAJ3uksT36upVMtdV",
  "key32": "5vsRRdRa19M4XjWXr9JYnXsjb2koJ3no8LJLcCwAKkPDEyURZvpatmFcFj8UGRtAoyHXHKTvKc5fkXJNJHmBw1xw",
  "key33": "2FBTsgKzG1YuC3WB2VqAzNWjSaUCyboUqgsMHyc3m7mH6bgej63kZLrVDQ8v5X51gefvhpgMAVpeJ87co2p71QLR",
  "key34": "2ej4M1hku9tzdydGSgznXDf68HZvKkZJBD6MUdLctHYJ8EcWEtGL3nwm5EYsXUuYpdRo1aALtqwvU8zqX9xMH2Gy",
  "key35": "2WVDsD2HMpuaksM9bu4ssY7HJinsVmVDPF3WVr62xojvMeVeeEk5Kw5MuMX6EJbGhUgLLA6v8nVpY4S3RRto5JhM",
  "key36": "bVRKAKd9P2FXevaWNFqg1xt5BNYL5GRUkcU5oXwtMzFFJTgG9qF6M2YQf9DUpN7mhm2DndDNyoKAwS2sJWw3wPo",
  "key37": "36XcqvXPP6V9Aq13vCVr5XEXFLDGZud5srkKodGStDDoqm97ADJgJwovQe78EZc2xT2RGFbU9JBC3DT4LvxkevV6",
  "key38": "4j2GKmgYai9Q8vsK844Rb7nJtEZHozKeaR2KTExG9PzgHQ25iK1d9RcJ9RVubjU2Nw2vrvaFYJ5RPi5oDESLBuiw"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
