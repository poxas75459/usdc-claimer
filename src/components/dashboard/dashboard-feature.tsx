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
    "5AXUQh9LfEVRjUPTZACmgYpPXQu1BGAjoNmPFX61XDcgmYdE1drTzLZzy6wrRWzqcR7S1ZzRmPMH9YnnYcxGci8o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uP1gYKoo11nrtYMpnresE6Bx894YJsTsA9KxLq35mHVm2KMpKXJ1Q11NejSqErxcAywhgiYvPLB4pwWsasW7J6U",
  "key1": "2k9EoLWtna92RkSKXsWfCoGFp7wypeHP4m1u2XBLoMRAiQzK4xDPTyocEqd6LzEeDqdSYUNrMVnkYGWZ9yKzeRYf",
  "key2": "3Aq5SGbdGnzRcF7TYYC8m6CJmcWP9e1gNpkyBM4yJAqcZLkF3Ke2jpmP75AUYaNVNd8wgUtPw8uWKyUUWJZBUNqY",
  "key3": "5EpdhbZAk52fJctnSXTgfM2qn3U2g5junN2AioguSASsyQ6jWJza8RWLqWXkTv8TvzAJcAKQVnBrVUqTQ8jyEiND",
  "key4": "3mCeQPeowMBM8B6eGnUNcdzoFd7esLKSzXLhzwvpPDEiA4JTmUzr78qfdm3M8Z1iS8u6h4iNxtgMAHNzt7uuzbHf",
  "key5": "34sA6VaSpfj6ZZ3fpeSg4zd3tEvVi3mDiFbVbQXMvcnV8XdLVhWx5kPeKj5yXUEzZuVHJZYSXhQrZRPNNqX5kyuR",
  "key6": "4JqWQWwVYBJt3yPS4GnsAfHSUXoHeqU4mwMA5SxGyP39yCFafBFjSqRtZoSVHEQhkWJiZQ8QY8niX3jfXDWrPC2V",
  "key7": "449S4WYwkGdxWPVPrbdq3Z1iDG2yg1wZJPuLHTu4zp4fko9baA1dy4RKnymjYmya82ihgYuaNxbyvSq6T1ppfyyr",
  "key8": "5u3Bjk3dWc9ctdMaGA1VEhULn6QgQQUgVmJUhKHMQwytNxLNJAXQrsdgm6tFvrngATYiffirV4tzb84rwuyBfyuc",
  "key9": "31T3GrtGTXHVzTLqC8ggFhiGB1vG18U31S2P6WLTiS1fHa96Ep95TPPdNoaTDfScwAMaSoLciChDb3CWVWuWk2kC",
  "key10": "1JdjmY4ceomdLLojyYj5gBxiqp9aB1aKiVjiAEWGD3vuiG59wRQA5w9Re9Ub48X6vbP72oCie2kPJKL5U3YtuTb",
  "key11": "5E4ydLJkkrgPbmyT86vKF8A2o8M8Z6mhkUVB1VRAQe5btrPAXmYVsQ4kPth45dhUDLJXRWj6NkxsJrA8GpjTw1FR",
  "key12": "3L6Rnss3tR4Cy8auqr6dttE5FJUbq3o2Eyc45KogeE5yW8QmysDCZC5BYzigwqGPz2wTBQoRfaKweqtbcstoyoqQ",
  "key13": "3psy5N9ZXVBmv7KgaTtz4fnU4nQGfJejDS8fJZnBUcinw26zh11mtmyK5MpQfhZU8MMrCuFMRPRat5LiyMZ4AFC",
  "key14": "3STVW9BTUjhDhMJMrS7caqCoZrvwEBHGoaD15AXi3YhVzGR1DobFqQpq8G7vZ7yU9xqiTrXoZ4i81AekmmyePgu8",
  "key15": "4YXt1tJhhp4d9B7HdV972tnN7fkhJGyj1ejWctovhAJuNrDi2HXCSfPuDNE7o53PKUhBXhaKVNerfiCbCmPwmPg1",
  "key16": "3N4VLFsU9SPE9zkViRCRyhvFmxxf2KLCZfkHYSeYWBVjxJXjofZHsZ2uWgq84UZSr2YXNjJt7TttPA5H3rBWNdqn",
  "key17": "xjSjPY4DTkumr6qxTDorwqXESUikfSEvXpN592cB1gYnBHGay8fS9KU2h35S3UdF1Mgbq9RtoqJ2Ca8EMaYBn4i",
  "key18": "3JUrprxdZZ8w6dtkidav9d35FAKM5j7anHwPRzQa1x9JsF3yVLe92wUWF18fwga5aigYCd1VEh3PHPt5xUkamooP",
  "key19": "4nNUi9nWaE8P3sJwmoF5Jd521bTotbKju36oWJVGZJmm1czgWwPXv8UVRCowBmUSFRM68gFEjMaXjLPoVWaNEi5Y",
  "key20": "pQcmrpgBe8Yc3x84umSBtaGWfTeiE4qJprqwkAfmSwX51kSxmvp9rNM7m5xgamwtT186YrgB91VmxyNKtzMsrcc",
  "key21": "2dSRBUMLohnJ2gf6TmUC4se6N57KWSUD5k5RuLuB2UkwyMF9WUE8fxq7iqAe4GwqpsbcZKx87xzPNtN5dXUCoGaZ",
  "key22": "rRkHXcZZBF5iXckYQ4h2T1rT4zUSMnFpPgiaa6SYxfiY5BgGghmjrphXXJVXM3bwpvA9PMPVxSaKhYDUBxPy8yk",
  "key23": "3tw7Rki4gN9de3eZdDFxom2hRnHWGkrzA7GPVwyy8UVCkjtBpr3xbLdyYttnMuY9LxofKCMRFYo8ioY1wQn1m6hg",
  "key24": "59RvfmhEJeraAduWETS7L8moysNqVQ4pnDB672aGzbQmezbQcZ9EkKTbYhykH3UUpiHbTuMHKgruZtCyUSdKiGdH",
  "key25": "5J8jW9LhnVGMrrK3SJm36JBuFb5ACZvCc5wx2aauWH2Xa2cRygCevegz6Mh5SZfaV6LbwvtgQoipbAWtKF65Xjfz",
  "key26": "4nw6PkF92ZQmrdN7PHk96rHwaP3Ma2gy1HQkoJrAs1byjZ8Mw6S3NYaBaFpdkBM2F3AEKXv7BmRikU5zbaFoMJ13",
  "key27": "3Rvj6Gy4CjX16pzvYcjvD7knYDhGgKu6tfuqf6on6Hz4FPD5RCy1U2qzdKv5QLhFkZpdhAGXSBgQMzAvGJgfpoiZ",
  "key28": "4cKEUYatsc3FPkx5iiJ9WSqYe85FZ3PV4nChosiJjgznneXppdnqdRr1BNZ2Bj6CckNjspdCJXwt9TizsbVwHrHb",
  "key29": "HzZ3dGHPRuw3BKayCncsoU4R1RuEsuVr1T9xsszqyi2ibuhnJ7K6oDZr7zKC7vwhe9roMkCbiAXTjEVQhRf2RDo",
  "key30": "31ZA8k1HenCFnL2YSrjB5sjyFW3zfnzV8KLkKi8BMoft9VBkw4BzgyK2WJLeU2rfAt8VT3taQbZJAxBCqrunBNTc",
  "key31": "3b2Bv2KWf6sEAT7dXWzs8yU5QeqcvrTL7EXTY5oCjFZaXGejb3acKypeSuc1WCvAcPusJ5siqF6Vd7z29w1maqPr",
  "key32": "5ZDgvhgDnKPnb2u9CwNCiEjVXfp3QB5FZ5f1Nncs9tcm7qMX1i6UT9coWKsdaaScXUycctxhaPLZonANDk1fmik2",
  "key33": "KiVJNVpSr4dFuziTDTuu9anHb3sZYh2yxTY8uPmqBPx3Dd6GQad91YLf2AuTSsb6DCWEJ8ziLJyCUsuU6VqSEGh"
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
