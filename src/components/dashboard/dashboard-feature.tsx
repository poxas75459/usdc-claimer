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
    "bq5YqecrV5QHEAC5a8xXy3TJCPqsqJKrTiWTHzjncrC7WaTsYPJZEck7UyeVWAoVqAepS59VVCJHJVPngbfYDNm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VpEBX6i2yRmyt4JaGyTQECUxg5KNQQxSSUmPCNwVesaVF9z4YFCycx5cPTAXPSyQjbDjrfWkU7JuTuke5RNy4cR",
  "key1": "SBvJX1a3odrzeYV2CJMPHpUWcVzxKsqPY1XkcyoCZ5fQKku9h6aCSS4Qgek4P7qCaLAvYEJckiKK89mzpFiud1b",
  "key2": "3hgJ2gz3C8mg8bHu3JjV4U4Mxo9JAkzB8FaBsWeCyibyCFMACQMkomcowPe5KbBUGhtuzqPDS1L7fVbBCqpqt84d",
  "key3": "3u51rNEmdYuQ5J6SY2uVF4amvyzedxYKYqJnEYMpcD63fFfjoAR58x3mWRgsAuvAjK89HwNUCSzL2peFbXTDyHyQ",
  "key4": "5JN4VhqeMY1rvgv4Z6Ahi9vfWobj7WTHj5oST4Aw3YxP6Qy5kiF24TpvddexeZQqPF8EMUMveiA8usjRnVmrDTTW",
  "key5": "qnLQm4sDCEf3wDWHbCpCNRSFwMg39fr8YQ1z5sFB6TgYAtqaSRoiUxbxsGN7NA8Adhm8srZi3sS4NrfivWuMavc",
  "key6": "4VRP5K7d8i1YU2qZt6yL74CYs3XPZUyvH39dvNTKggWitqQbdd1VgZbEtTbYWJYtFymThW8Y5DqogRnZU4tEd2kn",
  "key7": "4air5LsRYQrY7AnBVpakXNjrkCUAVmVypCxA4wAo5hjFXTUyqLTFCqDL2jEEJD8Lme5Mix4SW3bUwKV1v8qm44yj",
  "key8": "KLK7QSXtSt3XokTWm9n18ARCTeX9EJkA94BtbL7oqYkcywf7LX3LpUU2rnH4okMn29uewtXFBC8cGarTJz9PjKA",
  "key9": "nUTUL42eMZ7LQ9HALBk3FxtS2ukC5JwbxqTFc3mcEvHie8WKaSBtY5iPj8WGEPgBEqgPNQiYs1394PhBd7xRWKp",
  "key10": "53FLfXKwMu8rmXvjGQxHZoyqzvPgn1UTp2DwWpNhvMGTSkFevXPY7Qa4txPuM2AQyWbnJVLFNU1XsciNoacJf1em",
  "key11": "2QtstFvDojopm5LoqKv64AavjWF9ZmiKRDB7MmZJ9LSFbc5gkqsUQiTqAKzJRm8SptWvwZi9YCU39jvT5TxpC3hW",
  "key12": "2dtPU1ja1McPrabMt1skKTYVBC9n91GnV5NBrNWSMLAGzx5QgjFoczzRKnP2Ny7bemNmJZWw8n2MMyxGiN7aJg4D",
  "key13": "3CCRfJwFPkjmzpnJecNjJuSKQ75nxgSw5btDspksXHkFUnTkeumCyU4buQPj368UuSPeL4FFRP2YWyEAERF6YDND",
  "key14": "9Xr2JV4wrBkKneEe2VB738fanQRrdFK2yT5bHsU4n6yAa9cCdujcJABLA2mM6qYFPJpeq2ssepFPdc3A5YunxVE",
  "key15": "3E4eMbnrBxV5NyE6dbjr3iwJSnnTrSLydvcQPyL2RbofM576dHNrRRiasi74vSkF2vY9YakaeByo267PfKk9PFh6",
  "key16": "5uW3LYBnB1gj29wWsn483eMGFKJYHYbURuz8gdZuY9kQDneWTFg6qLbPpaSsHJTW4MpwMa2MUTQHuJfuAHBuimwe",
  "key17": "2yEccg4khMikpdKMditEkMvHkSLiFeE9dt4pKD1C82opDHp41hug1K6DHjbmas4nv975NKoJniM8f3LzA7MY9TdQ",
  "key18": "2JyKuVo7cczgpGctFPi59DTo7DikCEQDmEKpF6zdTWD6h8SmzFg6jKGmxjUMUxxytGTjpHKJWbHWgKkKa77EYkcX",
  "key19": "3jujeASCPk4y7U6HXjBTLUHYr25tAhq4ddqhm5yEfZS55re5FRGCe55Ezj9vjHpvv52uMai5DKngQuvfW67znnAt",
  "key20": "5mLdbCtssG93w45PSmX3ekqRNBLySSqkUXaT9HzdUX9B9fJ6wnw8afeXgFnBSiW4jhmmYeg5DKnKMgVC9j9E5Vng",
  "key21": "3dGaTAi93jSpHrHw4fwa75yNTBf2uAnHWFUiZwAvJpZhPgFFapH5ED6cepwmCxXDhK4yB6uEri4Yt5hyicVQVEBc",
  "key22": "5kM86j1V31dohHtMq6Eo2TD4HJUvMxoFgYWuoQCDCAhbg4enL3rsV96YX5ChnnYp6rvfbai7yhhhFKcFA6pYcvRa",
  "key23": "2Bta6jVx6gLNiQCf7t8kVnY6R9qTasZEHGjsWYAf5czvJXpHmdYE15bVECrkKg1tHSFLuLPqhy4oBABZJ6fxvbWV",
  "key24": "49RdVjfj2tzwrbezDkUraYTJ2m6155FpHyei5Ftbo9NvX7jUXd3WVZgLZvr1N6kUJAaGxBe4bN2xWiNoKqzzdLP9",
  "key25": "MKjcpFyGUXaPErPeYWxTNyMTmMQLPFVsHzMU3KnDk7bNK7VV9UtWpVq4vuFHCTzy5cLGoB8LL5EtSJJrgJoehTh",
  "key26": "wtCfyFMapzou2NQLYgEosoQox5LiwYcgHQ4mYuo49ZYdVDCkbBWnNffkQporu75e3XcMkDJJf8xwXzEdzRPgjUe"
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
