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
    "4gfznh8HS1P7BUtWQ3VTUUYrSz7Cma5hcKKpZFPM26z9B49VPN45tRRGDw5bBnhvPkKmnsHkBsNRTMCTGbZqtXWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZYJE2tq7Em8zHijFyYt6sYhQXXUQPjTgBxp1LJnJz2rVd8KGXJBEgsm6qPntPBRf7iLqUgVCX6W8tLMYyQxkA2E",
  "key1": "2wpMAVowz7J353YzxJk9sTYuhrNeiDamtEsvcMGVP8LwjrK8bKFUu2JNScwS6xzNDhxmyRDrBNPVr3ZhsC4PvF1q",
  "key2": "4zdif1n6nECZwqYmeSeBxk6onUMGvJPpBH3wJpX2uyRdmNbN81hMmpzUaJBr4A24vejMonuHyJkRoTypQx3oiv58",
  "key3": "xEdtLiQMAJ278LzH1824USfypYXjsBj4JWSpF5ZVdLzpvXCZW4uauNaB2q8pXSb3auVNHU6u3iXDe2dNXPgPQap",
  "key4": "5rKmaUcQjehYJByJDGXLimquXet4VerTyX9LC2XU7jJqZf79tginF47qWgPSJPN1hpiStUTbTq6DQncQigcyyYup",
  "key5": "pAgWERSd33o9iVorwXGycE1wmywD2wFUHPgGyBM4hirQfjWssZ81emq1D1iQehbEAH7whHSTv2MGqC4PB8xHP94",
  "key6": "GjtJ3NmgEV5awVvFyqfnyvH2jL7R8PFZXG9haVDipGRHQ7fsFjxo82p5xbpYqgh3YD5UgwfQHTwXeoW4DYu4VnB",
  "key7": "3dy8Pe2UCWk6Xt612Bt6ZwnzYgTXymty62b6QGz6pRURHtPrbK7S2kaPXHfsPZPcDSz6CvejJz7pf2eJr2wtWXzR",
  "key8": "QdiCkUH7iRTa7kRLJeShNPbScGAyiBr6qfhopRRKoqvJ2ZgnWLqQzaUFpqMkQQ1gYMXnSLZuGeFz5gDyiwNKnjJ",
  "key9": "2a5Z7yTKRV38sQnxdipMs9xaaYKaed7QYupzu8rUgBCyx9AGTqfafnYWYbtbkhnrQBdBwHueiTQsxoVgDu2wWxxP",
  "key10": "23szAWj9eAozhhWJ89pk41NWoYjL6jhcNyxGCNfr8cVwN4EsayA4zGQYs2fRBgeBxYsEWtrPqNG6A2ADK4V2wafD",
  "key11": "3s6BidRbmfUmNqiSUCECe2GcqBcku77XQMXihfoVyFZb3J37n6F2tEuMr3bWk6Vq11CsKLuMccXrBLBoYe3iivNS",
  "key12": "QeKY5xfHnFnhsF8Rnu8k5NTrz8Qcp9wTXpvy8jJbYCWGVQyKg4fst8YiPRavKVXbnMN67ERu5wihoVWicP4eYi5",
  "key13": "2JEb9tZQHovYjA8otjC67RvvdV2wEr7JjMwV5ZRDB8dnZtdaaEv1FHPmRMEfJ8KsXX4bDNW5qoAWGVSTkpNubiFg",
  "key14": "3iTp61YG6MrLgFxP8dwELhnw14XbSih2YGMKQNJLt2CnvLpCbYPjGry2zMvkni7T8aURr25X9t2WNhdPzjovQdZS",
  "key15": "4AhMvy7qTQnzBvrfQynJSDuDDCSYcHTcwgY9zfgSTCTLUmYGSwn6xKQxgsyBVvYvrnw3Pt2BNmnKG4cqezoqdqXR",
  "key16": "2d5FpiHf9aYLZPH3caKZEuoo3KNAnh51bbmRQT98nBPXFgm6gjv8NLiMTuc3SmzzeF6sFzHGvTtpp3hBUea7d2qB",
  "key17": "4PFUvJbFHCwV9rWGftTFr7CQXJTZcn3vtDtL818LTZf2vogTnQm4HcvqS9j1J5w4XJEuqG8MYyaiSYEVgpSjj3Kf",
  "key18": "4BRHrrZbarXKCyUb67m3BJwdX946rLDfrnue9dwjvqwLrgDr4VxbtmvBQDPuxU2pXa63sEoz7sKYxoJ7XkytJinC",
  "key19": "5eUJLb7cUiDErnJ6xYLJut5R4rJiCi33xUV3K1ucUkcne9Nr1HRj2NFYMe84tv7T7CBNqTb6MojfGzLWU242cKEE",
  "key20": "fbTts2RCF2LRdii84qcuY1GvJ72kMg4xSVjnACTg5trAFRbYP9ECXGsmpYCHqHCjSPhzhHTMqU4bDAtUbf8KqM2",
  "key21": "4YEmMaGkqCHAyboAT64ZsGUk2fJVY5jacvXNnqmQLoWZTBU56cJChk8V2fxq8PbaMqJ42ixovFqoVLZqW3zyx1pw",
  "key22": "2JQ29k611ZobdGeN8HMXv6zyo3m95XCu7UjDhW4ZEG2AXwrg3e3JTU5UZ3TRRfw94EqXzdjBeAeZRHNg6ZnX8yuo",
  "key23": "23FrZu3j2GVqXpwLVc1qZLfCfuXMbbKrpReXKGKrcSxzgcfGQm1xS2ur6BBgZzoDAoZq6HYG3TvYM7XDN3LMoPs1",
  "key24": "4X3kceR5sVnWVwEQJ4uWs69KYNvHoeoqoXE4ewsGd8Egjh9FVYnUvG8TT83ZYJQHR7amptPa9ZpgqWS8bEWZvSAD",
  "key25": "2J5k6fn67Cdo5ZTNtLUxuriS3mctBL7ab39smn3SNU9mMefqqEXeBqBHD9t3HgHys8QydfbFEizc1XL9MHgVan2V",
  "key26": "5oUeFKkKDPKyee8LJVGX9XjL2MJdEgM79GZPhaRV6QarfM7ud9jMvsEEdDsf2oRTioc7SSJr6GQfUTd4YbDejKWH",
  "key27": "2gy8GTwDUmFEa3kwdT4QMaZPUszAdX3YKjusN75U46Mn5BfXuZLosq9zPVkga8y6VGzCQALDiqpj16AKPzY5dX2P",
  "key28": "VaqvzZD9ZWRaP7cbqUZFwH6AT1YseF6S85KZqCzCr8krnisSfKC5EsZjfViUUZpffyiEvpXp52gwxBApeJQKacT",
  "key29": "3FQxojzMKMUBBxQzMFikxXDmdsnMinUePfbX7bKg7jg2YQezSTy5L4cg3SQPy1poe4aLaQurayNbLjExgn3UviE5",
  "key30": "4oHxNgULfxaCi22HXLxmidRWCtnNTwy8uSpQzRgeRgSuXJfb9UHnKrTSHtDFJMjj1UDsPqgVFxn9ZFYvKPmnuxaq",
  "key31": "BXwdi9G5uyBesLW4dirEpfhRFhvD9dssZhiMHD1xemLP1MQYCzFYEqWN2staSvAhfiQMQE3hwbZQiJHjGyq3cJv"
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
