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
    "48f7jhxt6U3eAGp1Q9UuCF6Dar9CCvgyLevSLmNmgVsdVUpVBrHvv2jusz4rAKvJVrwUQZkY6HBFSSWE9UzKXaVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TnBLX4KDqACDadkLBvv1uj5h4XQMun1mHjrVx6AFqVXq6adeUJHhKjsYb5AE2BQM2sjN2aW491QngXt2fV55yy9",
  "key1": "5zAGtwvhjT2EvSLpC4zVDyKrfCbXNPpcfdiWKXWtXAV7k5H2VHkQJVgirqm7yiU8jkWw7x2JJ3H1nDG8Uf7WW2vD",
  "key2": "SHtGtz1JrTERDRtJkkcPeQ6K2YXkSTJrovwsKuwDbGsoDGkMPg9idrPJBxKMmqTayJeXqu4Tem6tpA8XsqPk1ng",
  "key3": "3WEyEouTpjopZv3K7JDkV1XfzthgxR9f9DLNMVwVZJjuf1K9437imSyGcz8vYSpFvnH2Z61SaeUoWQLtbKhe1aCn",
  "key4": "MttA7HpaZmhZ12v4xq1YXqvBpgMq1kBjvmpLhH49wkQFH8unYnHHvD7UnC7siSKvuVw9JRRz3jmpz91eMeQE3P6",
  "key5": "29MB8NVYVAR9k5eS3SggxmhAVfx422vF57mqyNagdn7quB48efQpWhjHfbwmuJ8Yr1oQWmbWB7CfpshEBjp6jTvT",
  "key6": "5AFRceWMqFoeSUbdYj8EiXzEto8eStbn2cEh5krQc27YfqvNMuBJYmfrT1nFDdYdxaKBWKCsce87rTefD3FvJSgo",
  "key7": "2XjpFi84fCzHzEbTnVH3zbcqEiUpQCZytZABJhzws8yB7AgJZ16NR7ubxV36531DL7DngMHbm9HwCd7uBE2rECCJ",
  "key8": "5gxgvkdy1HuqCXu22W2M7syu7jJTbtmKBt3uhSvbMKMpxHgzPoSQDGmkMuZd4t75TDW1WBAPKzHiBCqgXVW55Rep",
  "key9": "635kJnru6R31roCJPp9nSghtu8ucGLiTRzbPjDznb2nx6ZLYZAw5EC43jDXfitcwoi2hA536okKBy6ShwKndnijc",
  "key10": "4dsPDuSbxhTgzrGdVciTxbjaidYWrqsyjV2QZx8XzxhStUxjxEEnJLzwMVQnvA8iLfiRkUzYeWF2z65QameS3ueN",
  "key11": "42JGRQdfFqeNo5oWmTN45Z7SAo3ixxzydjCy8UTEAHv1cvgpyWsVx3YGgX4yzWQbxkzPCVanu7cQCXKBHx4UtMKx",
  "key12": "58doFjo4nC1hNP5HEKbxmgXTGJo4EWBtV27sQcbcG5NNd7gNm7PrXUuBYWfTHJJpESwhqPypiAbvEWi5kSNdnJgX",
  "key13": "31MHjp2FjSpAeSrjAYi9PYTUPX3q9LB5UJD4nCkL4YLuf5GQ5it4KoBtpcWGmtJG94jxs68TxCNEead8GbU7sGN4",
  "key14": "CoCHMv5qKDzAqwGwiZS7YtkefDwDQaiaKs9pb6B4NLzXKb3mGkfzUMm53wWB2sYUAZVJsumjna9Yk1n6fC4RDkF",
  "key15": "522EEiqDo11aFUzQ9LZADTeKpSASDGuCSiHTaGGJCATEFxvdavvUbndygmXJMGCWkhU8s4ANqAPTXsrGAmSNxhNu",
  "key16": "3MUATPrqWTEPLXYptrjM4o3FU8hVLGUBGJ6HTcsZyGKrrmBMXT5drgdSNQaLyjYLBQpANP4B9jfqc2wDXFkaLvta",
  "key17": "296KuuvbmovmtPogrDxJ8eF5TG8TqwGRbXkct2Rkoq4QjgVYj5UkQFW9Hzcs56vrVgJkX3dhfDzg5fPEpMrhMAXe",
  "key18": "3w7RbMwTswCsAeV9HYhztBxDeHaF6aE3hYa8BDXcVWY2v2XWdJaQe8MQoiZmZkk6EYu9c2EUqDunHc9e9x4cNK3m",
  "key19": "5aS8RQaEKfHEURNx54GtqzSbMwQ8uT9fn2n2cv4xxzLD8ZLoWNFyyXJ3cyPN5vpJ2CFS2PoHm8Jaqz8opSyBuHPm",
  "key20": "5RSiogaXZipQWU2tmWUtmEnA8wrQvjPr86eMm2ueL4thtq1jZpDKk3pJXS3DR2rKFzHgNPYhDNSsKUPjJUZpQYqA",
  "key21": "5CRCtiLPAAj4djADCebQUovmME5UmkENrrYoLx5iHDzajd9A2XGLzAg4GQGa7JU9RcAMbfZFSWstXNqajG1fCyuF",
  "key22": "4hvro74Nng2GqZH7qNJ9QkEBz2JGZzNDTV9kcHiwe4rjqpacJJLa9mJEWNMYywgw6oqP23CKW3RfAA2xzpzDqZut",
  "key23": "4ZeCZJXQq5j3REq4ynaAGWnmU6qZ5g7d5P2dQgt8zP1ufJ3MLDoaQ1T2TG9WJVD4RucyHrWbaV5bNZbXmjCh6ac5",
  "key24": "4w4soKqhjKozEVMrN23ML9eoAXFukDsUKcUkAgxnpjsZgLKP5XpABLXZBfetPLC4AFhpoWqLrGbUdLDVxhGYewcQ",
  "key25": "4nxgsUNcg9qEhFyoa3816oBkLtbPgb1kx6sgR4ReiZqhQ7QVCgZrdaLxutCdzAzFJyns8YM2LTtYt5djzUgCDg8d",
  "key26": "4wNiG7sTWWNei4DmfkwSh3TUwPxK29kRhBB7ja5UUrmhmJiDLjSZAi45oMK2sjNJMrE9H3Cu5X9wiJ6yBZBRfCF2",
  "key27": "EdjsLSBRPRtgLT4dipd2dR4243JgQQNJurnHMsWiBTWgBMmEK1NGfGTwvqcNLTBpYJphMfsH3Du1nydSt5RbKaR",
  "key28": "22dPJUGU2zNsx9NVJRdZt13xpVSxPdSwyBj74QCsikUAb4X4L5HryCdh2QUL7BEZvBCdULn2yRFhh6W4uCqdbdLV",
  "key29": "2Ef5shuhxK7SBc8ZcgL3iD1KV2BEXMmxwLMcHmK8T2p2zWRF9oGETijrQkqTfA86y5amad41yxePpxPafxScSMUr",
  "key30": "58txmYmRH4qKZ9TmX1FZXZtK8aYPqfg73iS2hf81jbFevUCWg3iZmsaasoXr7muVn1Q3nNneYWQYP2ASbY4NAPdi",
  "key31": "3NdfGX37gVSfWQk4EK4ZHmCjWP7Qco2pzkD4t5SoQ8y1DhTMRg56YhCLCaVGpZzgP9s4dqcDTPGruGwHrvuWv14E",
  "key32": "QiTpLm1AKtzvnpVN8mAyxyeLSZExrXjwcaDDK8UhzHx9J4A5o7g7RgDwi7a1pbrRpZUTH714RpzHqski1aUefn2",
  "key33": "2xMjMAQjDxvzqdeQ1a7NVQRgNssn5DPdZuHuWJHZZ15N4Pptwe9QTzG2PXAve41VSJMj16LuiwV2YDfZnG3ejVJY",
  "key34": "5CSWYyX5SNyKEuxgAJ1vFVHX43EirQ6fG46oC3VPKoNWyKdSMB5AEPAQb3V4mh7MonuA2xqBzt4F1gMgMAGsUDwg",
  "key35": "3C3LbGtcgcTC3waxnnmbARGKnb4Av8pvQWxqUs2wfoV3g89sEBgz3m643XaeAuHoyLdbX6pCCPaKBceA5f9S8DEt",
  "key36": "2KSUmVhTysRu7nCGctargyEE9eiki6iy3xc1BLvUp4Br1Un8u7NbTKYHzMJMzXRwKY3AxoXh76iMZTnomCFEkxkr",
  "key37": "5ptCq1DFHwPT9oyNirw6epQoP2v4RvAQ4KuPLtGCQZbiZ7b1LvKP6hYbjRUKHjQqEh89mWAMuKQoVKSNgDMbgbpv",
  "key38": "2YWmSRUY2s8VVBFSc3RdY3xgjEhWcuwVPwWEobC8KzDeoG1oSdpWVd75krp4as9tfLwrvnnt52C1ih9t8QPAjvTM",
  "key39": "33j6zMczuA7e1kankHjsuFBCFtx6MzWCZccstC2zt4FSuMeXHpURBz6ozHLwhvP86RdyQT9JM76fBTFGxPoUwGTn",
  "key40": "2Uji3vur7pDkwH2398sWfG2Ys24zpHpbTkk2o4TvuzQLA2s1gyiubKdFJQHzUzn5BXtCkKTfXnNK24KLq711D21x",
  "key41": "4rZB6f85WRj3ktbX6Jpwreys2QrGmgY3oWp3kDZRvuJmVqZbkhhsofyyeQqtSKYMdTAYPziqVTZ2tUP4b1SUU2Aq",
  "key42": "55rhaGtLApSDKNGbq1tuEq77TwbQ3j25XuLURvGFM6jdCiFVW8yvsRdYS9KsQG9NkSS6tzEJ4jtcToEHFwqUzyoh",
  "key43": "5nbmZJ9abbPVGz4tebETWhwvjZ5SQHDwDex6jUYUjM6rmxBHLiydvT1kJvMkWanu9TRU7eLe4KugcsHKmKLxycnb",
  "key44": "47kyCCsoPiZyZzaJ4GtisHeqctRcJKbvaT6RfXHuF78yj4RfLsbBguX79baC2mkdj1mSH8nMfhyR8JP998LCryiS",
  "key45": "5HTgMxbWG3JH854jfgrmExdBt237VqsST4L4eAV72tDouzMaR3vnk79tHeQdm8crHYkR2LH3FTT3VDY5Q9US6rTn"
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
