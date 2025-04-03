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
    "3Drm99SuuujaYqvYy6jUirm83H4b3QEHqYRdm7adhai4f6ZrbPgysAc6yM8Tua5hnTv5yMsktkPydapmv5UtWH6s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbBZY5KhZoQ8PgHcU5MF62KhxNtcvzEMrXRQzLw9mYk65HuawJGombQrQgYgjHz2ouo2XA36QJ19LG2VoeRDzNo",
  "key1": "5fWvgfLRNufgp5pSRxLmrCRAoV3JvwCYWgzbeqmHuCZTf8rKKokgCVamYi3WTtZDMXK2EWGm9RR27roz9Se9mUeS",
  "key2": "gfxWo65pzkYy3FfUaVLCyEGLTnVHZ7SQq9m4uy235hEneRv7z4pQKXt8tYxiQEyxMqkhGTqd5KgwS5VqqkhGh7j",
  "key3": "3QG3P4MRd22Vo187xQhXwZaA6XG8CixzuziTPLwVG4eKixmUGtxeP5GVvo4udVfdagyLsvYn576YdGNL21EdoMBV",
  "key4": "4L8tEe7x3jqLjZ5BE59ZCc4BhjHewAp2APJWnL5bi6b1NgsFw5zcwkSmgASisNNpaKcXiguwMnsySHE2WKfCJS94",
  "key5": "3PdNjnP3oN3q6FxmrgCgxCbkRhkWMVtyRNYWxNSD9c4tHvNm5admMETqgAr4fWeQLNxUALCZjoLd9dJmAaQUTUb2",
  "key6": "3cJjx6bwqX4ohQahk5Lr4o6dv9ettufMY9VHzAa4mVQ2uBicRXA8zzhKDbuzogoc6k2ADrZMr6NsSq1oFz4SZYYS",
  "key7": "5tH5Ah8Wor85AnGwWkjqyUHUSBaEMWs3DTokyV9mZUQbBaHEAq7FLyvYabvXu8acgZ7qsMbjqczKQaT5ttyUwh9W",
  "key8": "4HyxXKjpYijFmUJokEDwKyCxStLowQ1negubSrbkfdHuZz5SuBazBKJ61pJzutj9mKcgbbNgHUyFWfbPxH4Kv1kj",
  "key9": "2XnZuFjvSPxe3pdrF3YqABN5Pw8gPhr1HaWb6cH1yhHncvUtNz4akegPj2k7uLxqGKZArPZxSiAHwhcudDSijyAH",
  "key10": "41XS7cyu1utNqYniFXWi6UDK2wj52EBQUDEXxsj6Q7Vv7MLB1wBzpciuKQjruSQyZYSGvW5figySUdVxL2d5WEF2",
  "key11": "zisaoUZqdkUbihiEMkaSiRaNu2Wqh3UjHBL4U6yJGGXMF8M3v6mgqJSBTeT12TSCRg8WFgQfPtdHwqnEsVGTbAD",
  "key12": "4wjMRz7eYW8TgXj5oHSt75XTyPA6whxecDxjAkJUsrMH96B2wqXudbVezCRUWaaWsEzc1ChByKzcixGUQyB7eE3h",
  "key13": "2FYjYKxw4RH3hcdRoefs5fsWJhMMFuCeRkDi7WYaEvbjMw8CKDVu1DVawsFB68EcHq4UcMaGfRr3AM8xMwj92L18",
  "key14": "45sg3XhVA5UNNEdk9gF63VshZnmZ29ZausBeiwD1jVAv3gfmQRC8jJ9breYvgcp6aoQ4AQpyoZesrcyw8ZuC87G8",
  "key15": "3QwdeSsE7jPGzejfGRbRARwKB4fupCCt8ipuh6UEbKtUn4ALT2pahzUp5Gb8GRPvWfUSLfSZW6BJBBgQcs2nw9oe",
  "key16": "67MRqoJKuYhXGMBGPhUe9tu1ntpaxUaSKuGNDwyzoysoRmGviu5qz5XzBzKoXWqjbKVJc9rifnC6KidLGNcBSqYY",
  "key17": "5UvBysnecVByLubVZeBDZWGTunjaRxuiEZcPJt4UAtECLG6DqsU8LXaPhfksgQfB1MNnrS3CT8bsEE3gNtCEWKXp",
  "key18": "46bhKQeCtNX5PGbvLoKAJmPrm33VivQoZEtJgMzFUZRfqQQpwXKXQnwjJn8ixsxMpkxJnxxdKSpXj8eR92FTYqTE",
  "key19": "23JHxBhEDwaVeV5rJwaGuE57g82GxS2maiYifUeEpyetxRqETYFLMniU27gJkZV5ZzyTgrEXv8K7k1rFQaY2hPGs",
  "key20": "4Gr6a1M4i1GJj3ZJeCEb27ExSQ5jJNYqP7K4zopgrHoKHyRBL2LoXoBrKijtwyB141U5tG42HWGVfMPVr97hJ2qx",
  "key21": "2V9JAPpLTbfGsxJBysL9Nobq8PbFrKGCi8DgJuChqXmx2SJZVJ7TdfBxuYECFFpNTb5HDEf4CytmgbomTm9wR3pw",
  "key22": "5SqzNyDBhb4Bqp37D2bDuwQn95nrYK3qmacgGnQs76eH9vFvkUztqQFLhi5XJ2dwM594tB1aVPRrdWZ5TQg9e38M",
  "key23": "2Z3QQu8mYfjqVcy9N2paUWdhw55ZRvn74mKVwFPgfxchj319fu5FomN2U65biemLY6H9KjJJGyrXBiK2t3AiQQTn",
  "key24": "3EC5GBFLHXUDAh5Hx1VQULo1eJXvCQdgJWrbYUxdyXVBdmTKrHJTbE2ikURmcbJXJziAQgXcg5zV7KbfnQ6Jj6rr",
  "key25": "58QA8zWzJmqi4czNRaWa89BJXEFua9X3ypyinH5kZK5TcCagBC5nsdgnXSRzMU8jsogKnUq5PCisEVBVHd5LQueG",
  "key26": "3JsxxYjiqh7H27fGEoTsUMN1VxV98bZRyUG7Jn6f3BXEkZC2Wo778rsNSBotpVDTDFpMLNKSF8HgwcciT7e1cJGG",
  "key27": "nPMajCBzMVhvShpQCaSaS1GkYqvzZW3DVJfJ21Hgt2bBnvRiWYaRaB5G2LdLgYW2YAD71SfTrxooC3ffNuRShbe",
  "key28": "44MPsoB8gs8k6cKEUKhWA4rPPCUEaWMjraSMn1JLP4Y7CbjgCpfsVNb3Ldka8bYzJ7Hsi4bdjcQfar9WWJywZ873",
  "key29": "3MPbsH7NjKcydJj6E6VWxkZF3aGoJ3boAwAyQJSiiBp34bBWgDxR2P8qvPdFzRUF3GyPADAoRrHCPqpo8S3sGgUa",
  "key30": "5BZQy7y5okAHVGHfTpeqHmaqRfAcZR1Y2xFzQAB9bCQn2e7FWtNLWooBfWjotD4TZxwoNr9UJo7tQzA2tdJD3GxQ",
  "key31": "pWPBjaDn3brLqvKsj7tpb7kraPdnF2u3JYtZym3WTi6fpStn1gsbmPFJSGiQsQovAgiBecVcnbaiG6Z3JyYdVZk",
  "key32": "3TM8G68Bn51K8WVbGDtxMuRGFmWN8vbhskqRoZbfy2We7aPjz7hyhyv8zy728DMVYuriAEq73jBG6Ux1y6haB2Ui",
  "key33": "2jn9EtrjncJu2M9zANH6SB7H2eR3kchJ42cZCkd1GRuZT136nAMUtoMjPAmH5sckEhL2vpuWoDgXVGq3ivXbwWpy",
  "key34": "5T7Y8N2VZZKkzYoN1yG8WxLvzVe9LSWGsqNfx1Ao6RDy5N8mVTuu4yx7VtkgZSTdiiMcjVwgW7hHmdbv6wvjygWJ",
  "key35": "5AHuenuJFk6UXfstRSY96yxRVzFdHsdw2LMtCg654Bo3DT4toLuo3pnHEJGCXWX76MkdvHY4ue3LNusDFj2dD8Rs",
  "key36": "3T1RHEveTECf2KbvZz7pPMJRC2rRsQypg7D97skmVzU5qte7fKfSTNWY4Zt9duudmqtXXEmQ8cTruPEbhAuMKcDU",
  "key37": "4ymPmP1qWxvx8zJu2oMgwK5Hm2sHnRBqBFchhnUw36FxgwiyCSNjNA3s1bqT1YysNHPHMvytE7QjNyW4Vk9hpgtA",
  "key38": "5oH2PQK9N6UnsocPADnb6vj3VtaF1WWd9D3Xz24HpgvBma5jo4SoCMVYitQXA8WanfDcCu8YYVpUt8Q61PYoibCz"
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
