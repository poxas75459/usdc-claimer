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
    "5TJVzxLXH9GHBrp24C7sDjrSdpX79yHAuwupnU3rrNJWuqG7cjWjtCRBZGLtHvj7scTiy2LPQ34CYatugU1jYVui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q9BhQEazHVuZmZKvwVcAgk1SgrFW7uGpQYEBNdSc1waDC3WuGDDR1kAYQAh5tUFu3oLDZ341cry12J1VFCdhP2g",
  "key1": "4F69nQp8gz7tiXvSwYLpFaBSNC2fFxdLsKA7pQPa8gU9Ft45qdxCVnDgkWorvxVX1fxfomNKNC6HfyQVfE6ssdbv",
  "key2": "5dNAB1iYbK9G1isQ2AJHUVYPnbev3FBJja9xZZqNfLokVSRh7uYcQntXPP361mpL6eRGCHkXCCR7eRF78W4tWGJQ",
  "key3": "dQ66LJUVke17js5qN48pCLjuBoDVBkmKdXydNAGhkdDw8saXNpKDSxbFQ9Zaks3KjAu11Cnks1TThULfZmFVkCz",
  "key4": "4zoSWEeFMbnshD98k1tswRgmra9BabanfhC4eYykYT485D8ewV9BMoZUfzrM25mxvZ7LnP7AmHbjJXvEzabm6SAv",
  "key5": "58ddAau43YMbb6RheYtfYxpcDauo8QoBaVVX9PhMxMEB5XTaKCNjxN1NWZ2v4d5EYuj8km1FdjEo8cKPGHtFcnpN",
  "key6": "i7RTeRuv2JzayLoEH5hD8dfVgZXwRJKBhNiWbs9AJQNCMSgh5KuwSXYCDj6Xs9kJr887XaHug3AxNBvCsjPiNwn",
  "key7": "5k6T5RjYn15JnrvjDv9bdii3NENRakSJjoJRahL4QUNo5JXjdiAPwyswAyLSnAi8T9qe7xjsBDw3M36jXSewPx5Y",
  "key8": "4rHkg8M7hUPZet2e8Hwq8QcixYmetc6Fp9KrCgeX5hjrqthTkWYCfsAfafv65u3hZW56QEShHURkePtQBxwChp2Q",
  "key9": "2DGc5nNg2WyhEetbPqVSUuTNTh2PYmeX4n3qTYqoe5XqNDLtdgENRye1u34e52J1AymQs7x9aK4zz646o96W9PJL",
  "key10": "4qSCpWurBJ6PN8VWL9XA3Z7N4xZLrzHgfoYmQSCEnEgc9HkZPmPHSNcM4xy9HpMiZjeudxwT1ruQFmhD6ceQCc84",
  "key11": "3a7Df1jHdUJRTH6cBqGoRYTc4mbC9b1N1GacyExGCxJ7S9D9WcuYypeZoB8s7EQ29ZGBTMnycfMwZomjvytyNyxm",
  "key12": "3uS9BEQqFhpkduo3cvLrXo8FCMhM6NPoWw8mAuVoAExuD9f3pP4kdRSHggj11qCN2Y21a3JM1131X2DjVXCp5TWR",
  "key13": "27QYZ29H24dzusrcWxuXjNtqh4npt1S6TkzQXaiodkieJyKNusf1q1WaPTuEX4Rn6ThjooYujJvMr8be1GZCepwC",
  "key14": "G6fpBYAJk52LLRqKHbVKiCNyZwm1NshL8vTt8HBc4PAKPdb4ABK3Y6LY52YSg4AV5icTbuPaZBcC8CaXN38B5qc",
  "key15": "3yXpe9WFxUJ3gMqnWRxjnNETMMUhvCxg5XAHjPDkEtYu8Zz1AFNZwFqDvCeh9uESu6jtHCfbMKdRcmvpH6rbsLHx",
  "key16": "LZb68TjfPmi4Ngf6qoRavSTsp68R5UrxyzW8kQ57WXN2nRvPECvkAhDBLyzGUwdwirYRHmdmvsLQF76rofbAZbC",
  "key17": "4QTx4dpuKEGRYSvysH5UanFKfVNgpetvy1JHiVwmHEzt7HfFLHUKpBg7HnfxmrCzUYF7vDkYLEkJV41vzofdkgF1",
  "key18": "5v1esbHaq9yCE7EcKPaMq24ZdJRDeQmYcEXCRfy42g7gbSBUKHduEsPFGBsKYUymQ3XbiykEXqDup9KDkU2Cxy28",
  "key19": "4cm4m9h2M91PmxJP5uxFw1BBVvt2VmW5MnXugyQc8gJb8EsgB3kdeFkcNQoNUaXGFpmkbvTQjxqpX5XFYngL9dCb",
  "key20": "43p9Gccynv7amFmnsM2wd3tcKFQMoVE7bWfuM7PbLZNCXU1okEwBZdZwWKZdosjBv5QKMMXo7bHUxEkkqkwuQwSU",
  "key21": "23vEAgmiKjxHiFGsJQc354z7MNrQ2jesQM2CHPZ5XRwuELbStoVY3MeQYsYCdn52ANUuZe4oh2Q57kLNKxpXLVKh",
  "key22": "3Fq3Czc5M6SN4x7126q1T5dgpGgELm3PMdZrH8ta28FasAWK4ZLJU4Z22NiTxdUKDnWcP6QFQ9enjoVu7HsJVq5t",
  "key23": "3ETLwFV1Uf43xvqLnmV5nFibDbXzDKd5ThdTRLbod3ZUrjuZRBsCi8UXXjNmDACKBtBf6qFT1F2B6XsuJSgRe4rf",
  "key24": "4mJjeBW3oVSEsNH7MzsrmH4x98pYNbkgxUSN1mc1mRY5osuARLR3WvAsNErfyXyQPti4US4FfmKRFafvK4PieJ7d",
  "key25": "2amo96bfNpsg9MpJC42wnaWVGRFYi5znECAHqbRM6ZtNAVoiQ9P6PnhPaBV4oZ3Pbhp2SpMaKPq2mriyf3KWcXBh",
  "key26": "2a7KKFm72RBG1wxsayJuqt9TPHpiWRMzgL31iVx8rRrbSoj2rGXVCtMFxje89W1pYKevZKzAbvCboNMZrLRUZeE",
  "key27": "AaFCcQUQaD1E5QVwXiZ9XxBKYA1GjFun6ZC1azzaZsEGyjGyvVDEeYrFd9o4hiVdThjiQghdZDeXcoptkUf9Bd3",
  "key28": "2oPA8GeATGu7ThYpuRsunEcRTve1h1NVCso5DysnQt4ZVv1hzWGmnt62571ddDPw591mrgVDqoPcKgBqyDxJaYE9",
  "key29": "4eEg9fbHLYNm8RJiDTW2urvGHsAFzSKJuHmvvpM8JwWaUNGfkErMivBAL5u8SJHMwEE3UpLehCKoCXYjbpAHism8",
  "key30": "3nTBVucmWkdM9a6d4v2Jeujv76dsKUNBKA3mjcAAZbTZUC1z26GLToo5Kub9D2BeatvZZiipCu7LPtU5JNppGacN",
  "key31": "5gEXSid1krosxuGFWTNaVMknGwCDgpTS6ZrLdRQZRuF1zDSjMZULPdU63x2rY2SVKrWd2scaKJXDqTs76SHR1FX7",
  "key32": "64hnnrjduL71paiKvCodcAm5WqEAo1cpYx41JEwo7xo1TmHE3XvBKbRs7WAUfEvroxTE3512F3tn6jN4i1GEH5vw",
  "key33": "4Rj3gnwjjo3R49TrcuXZ5jzUWjqeeSSPU6JmaUgZCzkZBAzGcmqEghvZZwfH5QYXwewvAa6QWofixmtYDxipiu9X",
  "key34": "5gPpx7r4iHzrycw8ofpVX8UQqUh8KjS2owKEbXMPDjnuxGz5g7sVVpSYkZo5aYAofBnNoZGdW4cqdBVSyn8KcziY",
  "key35": "4Jx4gSYbKaLjVNaef9dmfUJLNL6SS21bqW9yk8QwQaGGZz1ZmpJ7wQXmHKYDACaphpDKzASvq9MsQ4UvLokvzpHd",
  "key36": "5bHMPuXjcmDmL3WyjbvanZYMDN2fkQffcKvFj45DkhjT7Y335YVQVdgmovxPUPk73pEkMXnbAkWAP8Rj33aegq8y",
  "key37": "2g8UepRTR9eygobSMsaDAJ4gUrvNNnNHFtjJaXr8UkoYknShdHQtRKHM9rDqFD1RVgqLTpYbYoRUSzcuEWhLh78v",
  "key38": "3HQcw5koWNbaYUm9mCZiBpqPKZX2XHBYvyERVJM6yX1c6AfEgfsbDu2EUwU876BFArkFF8sMHuMsC3DPMT9mHFGp",
  "key39": "5oxFU48eRB5JNmxKG7crbWE4FvzG4SpLJoKnaQDoiTDVR5ERbRhsqqm5rcwWY7y35wiE9E6eCUCyok96aJnADuPf",
  "key40": "3ZES1jAocRNscTsyMnsxVzV1Pc21rmNnDLiSPeKsSSzz6FQFPBvscwyNFh2WHEzk8wqGDNuDdGL6tJidjDhg4WUb",
  "key41": "25cU8gwBHsWE2fRxjESaHwxC5mA9Brrm7ZAvYH8JdDtU5TcG4xcFFH8oz5q6YdE4FZkKJz5Be8B7J7qpaMb4SCd7",
  "key42": "61g7YecZdGeiGZLS3oe566x6wwUMqzjZfam3wSXCEUWfoK1kHbvvTvRYvejd4EcxiVugcN1QGsrBwxfhTJHAW7QW",
  "key43": "dhGMb3Qpy6P47rMahb1SuBMNViX35Xt5Pqe2QhWRpcjm8K9hapi5vCPwqfQaNnY7m3LJiQC5CWLq8JCruozP2Kf"
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
