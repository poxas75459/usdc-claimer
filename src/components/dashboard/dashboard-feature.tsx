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
    "3vXanqXrTen9SNF6KVFex563D5BmgxCCUqffVQUFa9nQURfDtGfASSJLkjzRq7eYh4LTnV6g8jBG5HPswArRde5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23zHaV66Qn9jrN3efD2RDW7ZbPhFNDcbVDNFbhzBVa2Vqk7hvEkDBqgxVa2nzpLjsu3qrqHkPSB8niRWnoRzf8Z5",
  "key1": "Xp995pBdqGNmahG9oZcDgLFh9HRS2MPTZ5bem16VvzDfWYTzMFgZ4cSYoHVQX43jnU1gu78sbCdBCVZmctnngjY",
  "key2": "5Zx64QYrGEfHBiFeRoypRkEPPzNjo1wyWCMBFCaoELbyE3PZtmkD6SJVV8MFH96S8fKLo2SnuxgC6t7TTsbYuMqG",
  "key3": "3s1P4n2iiKwcuUQPuH9pEsBiXxcvUj2o1ergKVLwHjFSy51oVYfnMdUxvByqrZZTudQbQWvB4jRRwrn4xDbWjjcf",
  "key4": "4hdSGPxuZbnarQdD3pajKVaEaSNa4urtC9WGLbrKt51bsCFKpkEkc8bMgDxq7sPHeottBMtd9YCReYpfRcC5sQdz",
  "key5": "4DqXJFVgSZXd9zK2dNk8bNtDNBZGHi4nyYxXmPii7az5PQzCNBv5xLZUtTCEnM6pG2CdLAkJbCqr2jZ7yyQ3Qjpb",
  "key6": "4j1oJwcMdr5rCPyZkSUF6z33zpBo5jyzuPtz46Cm8arK3qjCkHnczzSNZ2atWVAA49Jnjcbgyc7cY5QfAqAVSBpF",
  "key7": "3ZoJKWqqxxwDfCgg3Pyg2pqWCCD5sU1Bjen5HmGrXkAjxbsnqZX1oVKqEagbMzmEdRpMZUYjeM4r1pycxLUZUHvU",
  "key8": "5gMLMjuzQ4F6ZRsGwTz2RHGAYyRp1QYHEaDFUKN5ZRpzTCq3Ke57yx5dKXDXeMxy7879STLVLwmam1PiDe5iEpPK",
  "key9": "2Xg9fNoQzcvUHZZWHX1K9zNWebkBHCVtzQpA4PVncq9DUHi1A9JVXL9iewYTibQRJdMJnbg1twGeuDErfkbSU5Rq",
  "key10": "312eJE1mzVjH9LUHR3vSjsq9dKqr5H65MHmBFz8UABggRTyvbwWmrhDpgS7WcaAyvaN9ytp4Z9oH1ekUcvRs6W6U",
  "key11": "ZC4Ef2w3C9bwuzPVot1HLQqY4FYR5kM1Q2mKb8u3QSvrZKXSQkPZ4EoibTwX7zvJHSkZrL2knw9FoiremeEs6eH",
  "key12": "52yZjetZFm2svUHypTDeS6NFmX2foewzUdDAyKFtqbVQ9kds8q2upA8BgZVSUSgXcywDsL2e6kJ3jtLDG2VN9f42",
  "key13": "3AR4ZUiXCAXk9KpGV7gEnxEkgb7WYgrjhfKtcwihMVhfVGXunS9moTQMFkABFDPn8md1e52wwMR4ZcQF8sRE8RZ6",
  "key14": "36wbKju8hBCaooKEZqp671Chat7jwSYQdd9JGaoJKqEmJQZ2q8pQ9yJhpZCPRrFT6bGxwbVCmppnnDeG8s8EQkpm",
  "key15": "5tdSnz4EJqUeu6YkZkRLPwC8eRwubfqCEqYqLfrTrNhVb5DGutgiifdWM8KnnQxdkyDqqBsRf1JxQzNM87sRzJ2y",
  "key16": "oQzpADooNbe8JRo2osytGTKo9hFfcZjHeFu9Bs1X8DzRARjSrYhxFjfQ7tEuc947ysMjDwhw48m2H7FvgxGZvsP",
  "key17": "5iT9QNZUy1DdoByBCKiG79GYAH566wc782K7jPysLa6kqzmgUjhroXyb6vdgDFi9vPkLgBCVj1bMTeBUTUpnNhSE",
  "key18": "38MrjAPXfNCZozGpTA1Re9wxSeekny1WpHKGK9qkJDAsuzsC7nQvzAKphDF2PoXG4rGL7Xu7WZP8HNK36wWBGFRW",
  "key19": "2xDvwWuYh36dXwaGkA2DYKnDoTyRddadEppurMUPUPr4YnwhWvK7XGDkQes1tG6dQAzx9Tjxc39qQcC8FwyRCVGg",
  "key20": "2K4M8BgCb4iTip7E26xXsKrWYYdjUGyh2xwfjn1T7FBb2nKirK4tWpkeEvHyVmEMVtsFLwqBt5Rub9gEa2bT2VP9",
  "key21": "47bBf6QQhbeGLJATnz5MVjXWn1XDAFckA1c4mXBhy2vvKGjLPCRxGBXL3NZVKjq3Z87aRXXDTri6Fb7z4H6PaMME",
  "key22": "AZHYKgqwdyWru6Ed2GFj3tiWuUTWD7miQxpS8N1DjydkB1KYLeG7xURuFQdF8kE5vuomLsMC2fb46euRNmtUdmf",
  "key23": "eYrEbN8az7ab8cAbH5oHsEymnvsVFFsFMLkKAFojBcX4BJ3QLsKFfJp4tVdFaFzRTHm14f52YtBQ6vwM2fdKNQp",
  "key24": "4uwesRur7UPFSd6C3bMbeH7eszAccfZc58NRbmAgjvPgPDqwZyJyqzid89sLNg4HUKpvLeEgCnGCmkEwZRKgbbGn",
  "key25": "5YW87WVsttcaH7y53AEFLX3GnX1onqLqRZGonDjQ2VZUmuHtJmLNXNX4tUp65bc3c3WuR5icdhCLKX4Lc1ys5TPY",
  "key26": "3nG9uD3qagTooHfDtrnza5tcw5QRiZf6wDY1s5BgJeXMX9woPEhTy8ReMKxSXXNnkdsSMVFn158mS6bPcpTrtm6K",
  "key27": "tspQPaFP47C5f9BAhL4wuAykvZi55wWiXHVKwaai1eJv2BJNdBCszwmnjMnavNQUncb2RYa94H1T4SQpyfjv5Ys",
  "key28": "3DuGT8TpcmggtdWyXCPYwfuytScMV8VZSnJ5SXoYKVGxrTok5wZXnqpvEVfSUDE4tcmmjdKmuVz1bjF8DvPEqQqn",
  "key29": "5PmUhds6EKLT78MWfENU9fRrPpur32yYpTTd1qAHU4Dfk9nHevcCU2v2qn291G76tdH2jQgLgNJdaBsAR2L5sGPh",
  "key30": "42Vxi23qnynqJaYj9YfnXRcF1EzreTMPfWagsT4169vxStHJC4xupvHjjcYTMmYLPzcS4JFKUBoi9kYDo4GbJEdF",
  "key31": "TgusH4MTcuYqpHfrdJ2U45o93Q1JHvzLnmETnEnqBDhE376z7gTtLf3S3AGGt2vhGMZqW3dg8Xx8cvmym4SPfAn"
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
