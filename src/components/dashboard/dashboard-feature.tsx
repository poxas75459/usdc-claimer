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
    "tJyLFFFDfXxLtoqso9DiL6b7VaYFBVL81CiXy7DWRvbX14jfECkhAn6RbtadDPj1HSwo7KF3FKdNK9e91DC9bv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49nbJeLYmMuYnuGqNAhcpEKDCivbWqUE9MvCXYuA4e7QYSuZ4NELE99cqJ5xMCXSVJ3yjNAMpsmvLRjKUyQMWfpX",
  "key1": "3R1iBiRc5akG6pU1p7yP4Sr4m9XvDfwuEUGoG2uTm5DwHjJGCxEFxHPysUaT2EjpVNWUj4ctRarKXVLJkm86sW6W",
  "key2": "2AbbTPX5fMJ2sKiASK4yUtSDfXt4iy8SXMNHDLvfbekdrEVcXqMiGkuSfUsAmhy4ujKRydCMbPQTAxLxsByMxM1K",
  "key3": "1CHx5FFJNFuCYN8HzyNdq1cBgc2DZiBWw1Qeef3VJH7xzhj9LPy8woH4KgY6ZMgd4s4HXxXA2UR15629ZGmSAqC",
  "key4": "3F9edA7TyqTKmDRoVh15prL3gyQg5uXMsQec88v7Z41z7Pk8tvCYb3JB9sL34DQcjM6Ak5DJyfpEFvhSY2wfzw3Q",
  "key5": "4UvZVY6uLfQtkg5rwVmxLNoU1s2bnxxAkcPd4H6xTuYPfnu64rgQfYUNwtocd5aScnSABPUXj4vJLNyCkYGZUxM3",
  "key6": "2VBGtovmomPNNeDkiWS6eTf2RCRahdPLbxmvVB5DWKb5JPyVvGgQnaQfYfp9UoGWKMZ2wVTwmyeaPDmbqAahbdo3",
  "key7": "s9AcqkqHYfAPBxCxZqzL9oBLnRc5cNYRL5bTt8EfuhqbxWY4PEmgPLJ3BqXeRKpbGSVMAZoLruHF5JoPhraVUP1",
  "key8": "3wnwBJFp4uffTdeXLE5uiCYZ76x1nQ9HTV4qMst7k4BxTuwFMKoK5fmyAHZQsUTBsZnAGDpJSy4Lp6NzsXYoPrAc",
  "key9": "rRLdQ9Hn7Bj4pGaomGzpPyvXBWQtgMTk4AprkoEJb6fHs1HdAFkFTRQzYbKoXhN71qMo9v3k94XxuqmytSKi3tz",
  "key10": "3jTVRyfsyrGPoTYnrtyoPvg2vwq96jaoW3pukmaLwMQ3B6HQyAxPLJ15n73ecPCVBxge9hgGEtd76MrTwpEZJjcj",
  "key11": "4Y3R3kt9vVZVuNpZ85TehBAMdLTxD5sQsF4DDfMQVZFk99ownYCPTKoPUZHN2aE2gVuJNBWY7qs3hu2rws2irYXv",
  "key12": "3tjezjqTXUHE3yUqB2ESQq9vpveybkwAdFbAvcc6aYKnh314ScGZHXd83iD51FN1T5MQ9H5dsVx6W1TaNLQuDg4e",
  "key13": "4t5uuD9no217Yrp99r3JZvfjfCdVqUhAgRH86J3Q2x7ZpuWrjhaHeQ4zAU4oV83yNwSV2Z4BBVvV6jQKJ9y3gtrA",
  "key14": "JqxNBkepYQ64nWoV8v6CNEum4KLCFBM2gyimuNoCfyNkgFvT9ETCkdysKjG7eLzKFEmKSGQCY7Hfhfai6jHpe23",
  "key15": "4pFChJ9W6cGvJFyknjnqShg8EUy3J6wXgq4wDjti5yNn9sb3j6dKj6CWqCRDjnseQxamo4QcpXPfFtXnCT8rLZKp",
  "key16": "U6882HSVgTdJSrvDQkg3mhvFp2nunEetMv7uMg7WnqRn2TZTMkj3qCveZo4dmhUUSDAn8xanAr2z4ovEWMcLuwm",
  "key17": "2Wyg1HL7VVJTxR3QHFEjjgRVZfaVi2Hq29dr4P8V5Xc5q1n8ZNARjNJhnQMQZvaLC32UVajwjaDfSYgp787ym1we",
  "key18": "2sY68miCCyiwYo5NgdQkjSGewT5WU3hck32aXhr4EeYxEFg2KL6uJsRB6BeyB2dsM6qXAEsL8ygywr6Ey2cLuoa7",
  "key19": "4HDG1iJVjdZJCcHpQWkEjYYNC3EK7LUJtkDEXXT1nggpu5TBBLdSbgNxTEVZ3wcMWPXRLanhq4vUczst23hkn5vq",
  "key20": "3feLZbw1B6TC2mi9WAZ4gbK4TjDeCgZin1pDowqUahMu671Lvp63cZh3cH5Hp3L7b8Wp9Zq5GoHiarfApfH7CQsG",
  "key21": "5SKvQn1wjq7CvbRBG4WbWei1ZiTxSt9CMEFKUnLqfXgAjFcCiiTZjY6SV8PKbU3CQPq4vZX6N4Xam5eAg4jfjnBr",
  "key22": "42Cb4oaAehYeN1e3UzUC8qyW4sPHrGmyuBmqbg8BnhRHY1LdJVW4ZCvq2x8Etdj7WtPG4DJ3Pk5TejB4foc9VUci",
  "key23": "2M77zpNp2WPcNysv2mTQh3UTRBJDP6n9BsWD5RedKUgLZ2e599A4mSPHB5fvYSn67BJuKFZnr589epPeqCtgK8hh",
  "key24": "4pg4PL8jo3zDzpvmQsTVEfzxWidhEQW8skDL29e1sJ9CkpBWvGujK7Licme7CGExJohhNS9HvAXCmMWws1sqNpHn",
  "key25": "29byjtja7VDsnHjgqEbnZGzXGYPLF4L7AcqnBiiCiQS6oiA6WoYbfnQiQMjDBrGN4wZE1N4GzSRQCfvt22owEa42",
  "key26": "1254Trh2g5aFpmNUB5FMm5auGSDm6pnBdb7R9uX2JiTx2dqfkg47E3RiyCVj1VbK1AFeoCbwxRWAzuTFgRZPBXbL",
  "key27": "DY5SgSKtdt4kGzXwJTJUkM7cw487ZWquSfoukNXBjU9Th28K9YzkdVEWTpKr7QUvppYTuqpEAF91oXf6j9wQqfT",
  "key28": "2h5SiA9hsxirZ6NU7fQhXAvk9VQ5vgdNjvqYpZGstmCHShYFSnDx8kLEydMxyC2WqCQpmuYi9tsgHVztodBXKFy3",
  "key29": "qpcdsyR1aJLBbQa4BjV6wm9nvQcBweSLbCa3Q1RLZzjzcqPaWX9P5ehc85i9Ng7p7rkmPuhsABFY9yb4WkSdWxy",
  "key30": "eS7DVjfqds9RrUSCGry9DbyDE42hBpdqoGRHpUF9xMs5TyBGaAAhYLU4MJXnGdyigSa6WujchcauWuGLm3PCbEa",
  "key31": "PQBC44BYprDn2jAkmvL5yA8fdrCVEihFBAfxGTa5ENY4ZSDSYzC5NCG5iZjBBBrMmiaTpSQFLhpSibDebB66rm5",
  "key32": "5oepSZS9s4oN2bJC7pbdNvn5nNJWVyubbg1k5vwCMNsHQt7k1qvE6vmh3RNNXjCoxJkwhraxPkoZUyPXnQuaZMD2",
  "key33": "3rfUxgMikJhR9rJuDLwJ1LDntCVbDTotaQrSW8aFZz6g8QmvMUrT2GK85rySWPWKZDVBpk7LAnhriRpP1Zzn5WLV"
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
