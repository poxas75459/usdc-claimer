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
    "of8UT7hG3w6omj5vxvEdPm9KrsQYgP1sJUkHT7XcYjmLo3sW9urs9Pvi8KfeGgE3r6J5Tqr6KMDdr5cU6QfE1Jm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jQYUZQjwELfnZEu3dzDGHayiVxHfYjiXTW59WMgd8LmGM2LX21RarcRMjSSyCr4xg3wXB77VhSeUxJz4nuQCuBw",
  "key1": "3NTiWdoXeBJFuRzP61b9p86ZqZhqiRmiTz5PYiGydgTTbNd3KTRMy9hzrsHkSaiDJiXWvpNm9f4y5tnn39FQRe6b",
  "key2": "4CWdvGpNPut8zHSiQoKJNaccZnjTnJubmKrfWzBCWSghGBfiALTV6kTj6R1hYD6ZS7XGVoo9aYRpCmmUUbnHkTAP",
  "key3": "5cTMMf7VATWXBiuHkFjr5bNn9p5mVGzhidCaCuBeXT7Fjjfd16wvwqnYyjkVcvVh4fHhXaDf3t4ZvQFFBXQbeAFQ",
  "key4": "uAGipEmGCi58Kq7U7dyNsyt2YJmYXxJFrYGF5YMPknQzRyJSib6kkNctzbxwLuUhw8MiaVoVNpuK8Wkuhc1Nh3V",
  "key5": "K7QcET97MNZoeHNArzr4itbKpH5hfDmrikArW4YkPpF8ijp8b9HCHPjZXb2jp3uNiLUxkiX9bPuv7cmGE3hLJB7",
  "key6": "2X3B8mzrBGMcxpe2ksepZE664nZ5m5Li3ev8aE5GYAC4i1ZGpyU2SBDmVkVZs7EoRGCjpgD3BkkvMxZd5wFwe68V",
  "key7": "4jAwScL8fFegvVKGmcDmE5sGTt263w3Ts1Li2a8nyRDKPAtFzdeqDJ2wNQtE15r4zDwUDKpiBtEN9rZQZRN3Lkgi",
  "key8": "2HvGM83X3Sdxg8DpFRwj1STK2WE6eoYjdq3kuaYJPDc1ZHMaJL1s8yeLjhRgSz8yyN1e1JqL459ucbgtVwzJ6DSb",
  "key9": "JJM7qsWc2K6xHvT5pCos2EATKDxWHJ7kg5kwVA4jzWqBpL7GmiXzqTXEBTwrkdPitDus9UZ1n2SBhYQLpMTS8DJ",
  "key10": "5EqqN7pRqFFgSwr95LDkyeSesRGzR5b6a2gDWVWm4aSHXpTuPHL8f4kKWqQaEDZDYHMyXzHvbCSY27mYVTfBY5qd",
  "key11": "3unR7RupP25gTpKM6zZGTmjo52cg2jnNPvQ72PPKBEiUQGaHc4BVQiqn9PxvyQoW2nqaTfuz2WH6TvqsFNFP7UHA",
  "key12": "24F4tcDabhcmbqLWtvTv9Z3fEN9x7RzuC8f3ZgsJgnzFvQKkzspe38BiurStKPZTZft9zZY1AGm7hKj3ABeKvfTb",
  "key13": "26YfQ8d9wW79Kba5XBHVhStnKeiwbgrS3GvuL4GLQHX78cHuAmtvMV7nijUW9c3e655ELePzAJYVQQiYm3wbL5rV",
  "key14": "3qYxTpLVFQkkjjKd8jCxduai2ayYFMJgNqDMhpX3Poebq1vL4cCa5Ty8dTFbC25xzNzwv5C4ZsWrspSCwVLj641c",
  "key15": "rWfhrBaeWXxenxbjX6KG7PggLBPPikSYAoe3MagiRfzWoDgsQzNyvK6AFzkL9K7yegkNfvofVfkvAMRDwJWF1nq",
  "key16": "66USP9jvXgQrXKVYLacvde5aHvaw4RQxCyorGw3rHWYhkgSJcgLkbGRGZGq1DCJwoosmcXzc22BJ2ETFZf4n6kCd",
  "key17": "3TS8tmEWs4vFABGEVestGMd1mthC4ghx2DmQrV7QPrd5KZGsHgb2dPGhQtApVoL646wvHWknyZd4YeMHwYy8cWjh",
  "key18": "3xQZTseffw71432E2JdddsoF1uhPGQjCC8yVg7MXMZpWgZhR4oKUaTTg2qoq3yiELgBJ5Xfy34bEYMsrTYVqwb4R",
  "key19": "66BCktCYtPTPJGvPvctTUfHtev5sMvB6vmA8f7mYb6QZ423wthE2UhyhPJSEdD2VXu5L7r3vNPQ1MSg2VEjMYfv1",
  "key20": "4ZWRg1syhynBqUwL2i8WU4mmYw9kJNx8bwac7PuUW9a7JUm9VCeCYBEvYQ1uAmgF4AH5ffTj7djvUfdGQYxijMsk",
  "key21": "65DTv2mLxcn3nKLzdUB8DYnVaJvTT5RrLQHZ7hRwSjtYxeoKcVo2CsD6CG6n5DV297pceWv7dVJnsZCknf4bfoJp",
  "key22": "41CyhMcUX3ES3779qCdkT96WHGrNAhvuL8gnAnUUKK2sPPe9p2FqCu9Tjt7e4mz2m8D7QNNRKiW1BXHem8RLCoH5",
  "key23": "HzWbTtT1aed4Qn6AXMDB3KoHHyjrioGnGDy2bHM2rJ1nGnvWNRFXGotHNTyHadxH1mQGnsVdDVR5rDiyGt6RLgW",
  "key24": "2dz24LTYwheY9uafhJf3ewYnSWGkXeoxLtuPeNs74vbF8ynUguxJaQMGdEodURsWXeGwTLk9Y2PxrKv8rNBeX6tD",
  "key25": "Ua85qCNPNyXjEfuinE4bq5u2ErHtb3s92UJ3MVrNgXvuLMkwmaYcFNTiJkQ6V6p6REsYEtLj9zhPSrZx9Y1Zwih",
  "key26": "3aPW6KyeEnkdovdnpkxvBmS5rTh2ZC7WHaxCRYZYrFarq5iCXuUx2YkJ4LCy1En6fGHQVNZwAT1hivbzxeeXA7Cw"
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
