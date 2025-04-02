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
    "57rPpTK4iDRBsvdTcKmhKpPBd2dhTmiAduXPrqxao5vsbHg2na1oxwbUEEAVsGRaWQzdvwbJ4R6jyyLxLqTy7UWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ve64cyWyxCTg9UgAQyu2ddNRftGjQQEeevjiPmb6Wqd82cpZA8c8eB3mv9NPSfaCo5h8mGuF62pFenn9tDMAHox",
  "key1": "5mKniBmZSuQiGEroMjKXXUC1gQxHTG9WtvRzCUFVPU6oRy4N7Be4G8ccV5hbzCJnA2wpPzCSQF2zzVvxwpeXNR4j",
  "key2": "5usDb64xEcvtMW7wy78CEjWHGfTvfymf3pnyhTjqhKroxomawLb53ntZGiC8fARs997jqc5xye5aCy6wYSthQMsT",
  "key3": "feMvW7DMMwDr2tE2ZDrXmDfNXZUYMZCP9dPw3cJvBd9gPE5W1hYSmjkSHCekx9wZcGm1eJgyrRpJ66QUY5kU6Xu",
  "key4": "5PGkBU9RUjaPjzxtE6M8caaXobAzfJKHc5g7RFbcRGoTBFSDfPBZ9RhZksEE65AJorCRE3a1UoxqzKuFDpruDApN",
  "key5": "5kxxSLmj44fcP1UPa1kytsbRPnM6aSywmndFTZ9fBXmojtpJzhS8fQjCZ2iW4UrePeqM9UQwcGxrfs2VdBFe3cBS",
  "key6": "2t1fsu1r4YGNnLCFgaV811cKbREyTENyZQWqH6sNNDTtXJFwiUc1ZsxEDmhpTN1dejzWXWhwA6Dvv3toCPZFcNfd",
  "key7": "5rTMAsXd9bynYfCzecFU5Va9krXMB2Xe9tKYuQhRcT9NiDPBhJmCdLizGj1KZnv65frQmR44jjWERwPLfeyq5sve",
  "key8": "2RGkoAoHmvQzZAGwUVTXGRhTmAWhFBZnJdCSs8kYiwqaWLih3xNaEnQEQqWUWXJFYkbG2Wth9HMyxS6AKXULC9Tn",
  "key9": "3XycYw6zUh2vmFEdowyvKFEVoQe5DKCYrvJ71VbB8fpxjedhWjB6yiFXn9e7tBddhm1TXd3PB5pUBJ1TxEGf6Fp1",
  "key10": "uS5Lqf2Ak1i3r7dJAKKreR8j89Hp2XJ3Y3fnh4xuhrehzdjnXJc4ktjX9gdKNko7Sfo3uxULsww3FWC9TRTZgbP",
  "key11": "2vsAojKGE1JccJyzDTzFUFWAf3esGWoYt1noXUnHuFF6dqPbyZgToFvYySX18gG8FRRhWJze8s9EnLBWfqwVzA8p",
  "key12": "5L14uTiesuRHpnj7m7b7cpM6zpUuQi6xVM1dbdLBrw3GKA95nsUhpzd7sS3cH3jJTQTwBM33S14NBuUDMuX5urBw",
  "key13": "2WMcpTRnHJkYYr84XwB9XWh8eJKH4AVS8CW43isTFqrSBuN3W7csgbdoBEEHb2z1WTicz1TbfuxMiWsWBXntmVRS",
  "key14": "2ZASxLM4UQ2LDe8EHbScg5pJwSkH1L4jh4YTqVKNtJVVNTYRocZ96YeSSCK33ATei5LfBodZ4agvUcU5fwowkGrK",
  "key15": "3xVcjMhryBR5BxdCn7JuaRMA7jxSs6xzMc6Fok1z9sjH9bk17HHH78YHqo5QsRuFMgoRAg7EuxvkPfT2cdwR57nR",
  "key16": "25Zp988mJPrYyNeHnny7P3MJD5xWA56YzUUo8Sbjoh8q5316sAN1VAmK4sxrbs6nq5CGaJwaCeMUJiXaX9VztLtn",
  "key17": "58KRchinRNZ2ZAeCAKzE6dRU1YCX9BFbLcAV4dkXFam2zhynySHnBeJAPSvqRoXc5s9KL8FUUvcCiUQ6GYCTEpKQ",
  "key18": "4Akjkv9K6vSxw6QwSFCzaHrDrix8gmBHwQFYCuzKzgfAJcpTot9uHB2Yp6Qtb21y5RkdU7YjKqivg4CQthzvuaeA",
  "key19": "2idEcdgxuu3osaGmWYmcDcZujHXuiQHx3Goop7vxtgnf7ZkR5XHqMgt3Zfxb7XkeuafMFrQEqDdgCuLfe3nDbyq7",
  "key20": "64oq3msddFc5MFN7zQgeSii2N8Uc7EEsyhpNS4LFbU2zeSe9thADpCJC3mMLrxwvYhfn9okWBTs4qGfrK8taE6jN",
  "key21": "4CyU7Ybk8ee1tvWV1VXXQ4BRcwFPCotY5ZVerTBF1pBMJMVKZUBPweDRPe5KYXUuxxFMwWq3NDPSCbYR5EwmxPqe",
  "key22": "5CXE1SoXZkN3zhRehfbPVTBpAujtLKEbhTq8Gdk5WvwJLtJBs6ns4BHSfNM7GJcoxvtdNp6romvYbGvkjgyEyQoT",
  "key23": "2JZqSyC2ovkRvnbNpb6AJsRmBKjPeN4xSKh57g1sjczFz7S9Ud6oeXz6zujkh48iNgQZ3RKwYCXdxjfDgftWFa9w",
  "key24": "2qb9AZKULBMg6BK1P8yBgmTvtcuVBnFwnJAXbVtNS5tNP4gyKJS8tVpXXKCaDQ8WRJx7bjfwC6hy5cnDFEZ1Qd3f",
  "key25": "2vQ97zDKFQZivXPwodH4XWQ4aVizsMjNWpJESeHCFTGT7W4x4x4MNPHiCDjig7tj375yBzuNZZJVqoDdPWGtNPb6",
  "key26": "5E6J2L8oeERoMysmiEucXtn3RLwfMfeBGVvhEUhV4mhM7vy85ReXjCCECuhq8DjWYSYoCZayYUEx2jjPCEgXkrzn",
  "key27": "4nSF3pR4cHhbJRMzhixPzqK9By7jhJpZ5sB1QwQbnuookMWMpp41MeZhtFszfL684sGNeVYuihD38hpyUVgwMzd5",
  "key28": "CcUhhmUg81wjdkhEie95ZeSbgWEEmPhU5h5gwHj83GgJotPZzff95wZFVdeQnuAPkTYttz8eYiiv2a8KywcwRj5",
  "key29": "2QFXEmk3hKq38AmibxpquqykVo5misVNCUbdQ3TkSZuRZ2UYZkQfiArmyRBLBr3DmJKsP3TuAaDFGPjpHV7r3xR7",
  "key30": "4WSpCRNdDdiDvtcPF1d278X3gcSTjYAowGdQRbJCExCMo4nFfDs2anJQzNs66FRJ88YToRiS71919vAUof35yJmm",
  "key31": "4MhTwCpCN5YMt9cYTgg4LQ56ny6ukYX9yGYrb9ebQmtCWtZQJJDDe4fh4rf6v2FvNgbxegBuMHAKA7eh39LLhX7e",
  "key32": "21pEfrstophkKrXuJxzQRHK3JjCgXuqtDSgHhifxaPFhErtBJVtWmkkGGHg9Fj9jCcijTuWB2XmNya2SvgXgpHvQ",
  "key33": "5s97fYoypS5FTc4knxaUEXTAGLqSpH6eZns5W4Fd47EpsJZYsHp3jMmA6PBuajp7uUnHQGUf8AGuNdhSZ7ErNdMC",
  "key34": "5j75LCDsCB6JEm1wexg4pSg44dRLtN7bCUTs6LQaZCekd7HNiBvcYQKcEimBwN2TWFjhtksbiD33TF1CvKKhWsNS",
  "key35": "2WHkNM7dcEVCG2J4qW67NCqdhG4NLDPHqv7Y4kvp44a6kimpNRTKk2H6ymCqY4Fttwsvqf7p4mDaPX2BFkSjoGcw",
  "key36": "2SbwCRhq9FSMFjSdd3URN8euVgdvsM63GCGwRR6FqTYfmCzeS1DqnayGKmGyc4qGGoDgUhvj9Kcw3Bo6NwLuiNam",
  "key37": "sK76Pix53kuiwn1eyWmY6wRf3oRKVxte16aD4nL7bw2s5Yh9s6CCXBRqRnRv4yhmZhzmzDRcokRyBcNtDo9rhzL",
  "key38": "2VEQhKt348T2Gfcdd3t7ZDPLs8WhX6EYGQBGD83irAe1UCesr9L4Pf5ihtS2MEeW44UkzrhHGnXhwvuHcQ4JQFDN",
  "key39": "64Qgc88jPkhVqWfxoRZAcTuuq9Umo2MKjv7gEWCVQb9st47JZwbosNceSviwomy5paPBwr3wLg8dPr3hrDkVbnoq",
  "key40": "3YSjs7HEQRQN2pHbHGeSwAsoDac4GYDmn81cZ1QRtzKdstfTp2mW7NLWg1Wh4bVg59SiQRurGr5iribiB3ZGWYbR",
  "key41": "39TCqiiHfV718pEv4VoXGN6qBuZ8ppCn5qhNgQDGXoydXyts39YgofE125MSncNxR1ffjxHBqBNK6UY6QANwH9Zp",
  "key42": "2vK29QsjYg1wk4W9Vi42PVX98gTRvkTtsmWreN3CnKHYfXkze8qNVxr3QbS7gTX7cBXtNzJ5HjadWsQsHKCJ4wET"
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
