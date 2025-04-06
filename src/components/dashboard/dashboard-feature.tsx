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
    "495c3NDvBg1RAPLP5GnRe56wKrB8LMzTeLzNmwhGSQQsCdApW1uEDArf3XhxEm6HhXu7H6vHkDZXQPtJEwBbGbBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGnvKDSnQmbAkNA6RbMS1fRDQSgskqbCT7jLSdcG8dvjm2a1iQ3o69VrN9Nap8XCVZt2XH2wLv3cBBrkKPhHYHK",
  "key1": "2gLtpDHpxLVTVFyNQiEhMgvMe3P3WRh5B1YcNfJqLWpbLYrF99X353h8r2eo9SAerLHNHNXcP5wsdM5UvzZYKyQ7",
  "key2": "3T37o3rXa3Y37yvih2a2iDV3jStwukSK7PyKK2S5yw52efACSn7ajyYC9Lpxo3nMQEpf9Se84eW4Bs5o6TPxYJk8",
  "key3": "2Q8AeKh8CFbxQeBvY9yx3mKwWYy6LiFAtynAZMHCPyvKKh5P5jE51c99TwZJMfRYRNP3KjNePAkKYeKG8STzJGAi",
  "key4": "4Y52z4sAi27XwRMrGa6hnNzcjppHTHErfMEHnrhmre2E6BQxacwX6jcxm5gyjFTFEmHc44N3W43mtcyV3bETV5oX",
  "key5": "cJHna8v1vXYF1Z1gBXrkJQWduUzfdK4UTmVRhANampEkcQV1Yg4fDxzxP4WtjGtkhTvkugqi8GbZFGDsmeafXRQ",
  "key6": "2c8YZUzKXwzjacDY9gk3HjrLFWGGfZPcFss9umgV9H3bbNveCgdM7h1CsdSwrwQ5aRG536ePjTYPcRE68Ry7XQGE",
  "key7": "2eCiQzEJtq965wuGNve2BjSUVoF8EJwfsFyoWNv4vaa8wn1ucmgz6hc4nVhpdJDXUSiXn9GbYMjkqrRQjQ3WZKe1",
  "key8": "4m98DvXwbFK8RkLxKVHRnSMDxMunMak1arnUyUr8czXFy61Cgo3kVNv4yVc24cikXPVTTgaWcv64HuyvjWuRVh6B",
  "key9": "4WVGvR6hqpn6JNdtGVE3gX6gzKCEgduyBqJWRczsZZTgWwRwNNqtSJ8pQ6XfF6sZRWM5bSuvv24B7Ek8K1EcoVBz",
  "key10": "4DmS82GjZvKT3xBFW4TRnmp6Jypm9CVyf6DAQncPTw73Ua3PNWSMjWsSBdmzGaXLMcyUj2AM9xM9UxQua6ERKxDi",
  "key11": "25ermgNqRxpTQsdhWdHUYV7JqzqgH6TJW4QxTUP9282Ta1NXrs9W9ZwHFgoqFLF34XZNGYeHVSZ8chyvz5w5Nh5r",
  "key12": "XHSAtGUA57jgbzyziymCGr4P8jKekE6F6VGa7c7DLNNYZSBQqGGsjELetLy3PSSKeHVAiHXpPMN434exFWBh9xE",
  "key13": "4bPpxkkZwSCoVjcDt8rhky7hBGLtUtdqqRLA5oDGGCNMQvoMRRwbx8qMDYwwPhxDcMMUeWnPFLpWGXxPZoa7qdXW",
  "key14": "2Qj8TjFkWt6V9s9ruucWq9dFBy6s4u1uzch3ndyeNG3xCGopxwzv3i2LK7JYMwE613NPZJXgM9wicrhiVdNWKbo5",
  "key15": "5wpAyVN8JVXe2to7gmYi5BUJHeoiAQATATAZ9iCuKkcgqGMW5LELfY9WxzVqBA7Ghu8KFDcswJvECaAiS3Pk27QK",
  "key16": "5S6CeDryfGKWs4KzPkxAVgKg6gwsKuVvgfXXgMYKbnmEpbxzrMT3WcvZ7CSmUBt7zFZDRYjHxHJeeTq9G2CXQFbW",
  "key17": "5GpiKks7FAxkDu4LX5NDP11UhWYZbB6PjqZxcZCkqhrJDr5ymAhhsou9gYJ52JVEK6jy3xVF1mk4wZUV576gDn9m",
  "key18": "3zXmK4V43XboR89KLnQJyQKacy3pjzx6KvrEWpoLMoJ95v1xSvm962D3NmnZnpwpw715LMKfXnYA5K6AFGodt7Ei",
  "key19": "oZTfeAuLsYswwGXzv7DaYyQ5LJaVfWKVdWvynZdQkPrWJZzZf4D4LTpVUy8nt7sDbeM7SSni9QsqMH5NXBhuTqG",
  "key20": "2idHtKsozh3AgtSyC5Xj1XMY2uXx3Lye9ogAPDnYFY8SvWee5avkru8mTCH8fAbLyN6cEv6PWJs4HaiA8rwGnWeD",
  "key21": "2AdAo8rqNbAABYwWBBWrSHv6Q4CSDtWsx5YyXhZbb323YLX1SUjRX4zdnT4r6RuwqmP1CjycoxDPeVkJXSquWrot",
  "key22": "MVcFt8n2K8eveqAsKfvfuKA3qSPJxhvRjN5TcAaUELwRhX97FzK1jy9jqZe4VkTctYLQh3qWEzR84uWVYYCK787",
  "key23": "zLGGc53Y6K9Q4SfegzzKqdiZ9FgsvRgF6JBthZvgpv57NVaEhxP7VZFhtiSJeWhYtHEQxFnB64t6c5ygpyNVpqa",
  "key24": "3FcrJ5hi3sVhZ5ypq97GQpsvEYUaf9Ape9y5X3P27x2kvcEAh86ELmE9BxYwn9RfHppFJbeutvZ8dQWq7o8SHyRF",
  "key25": "p2aF7N5PqnN3BAKc6F3DAguxfXCkFALwB48Wt8LuHbRUM1WVJjEZsia3tnusSbwfpDxPz9BxKsEsSTJAMWBsXjG",
  "key26": "5GvD6z15VpuwapdxNtacpB38gS4jYYYC5oTgw46h4eVTs24dLJH5fWmaG6d2bYLdy9pwKmUosYh3L6oFtRALMaLo",
  "key27": "3YCqBMJXDzzegdL4yN255qCEexuWFG2eaku5xrmQLjVBD8UumcgyVp8BW5JLmefSjZdPEAXhY8cYzkqjAJR7Z35L",
  "key28": "JTaFrE2Fyny2Br8QDpdLrT9AUJ95WPYsB8uFnT4y2kXbAup3XvpjPrxF9KyL91YYJBGASsqoAeK79NiuMn7e4KT",
  "key29": "3fnMEL4DMjwNWraV7rJeTBKtcaZGsYAmizomTZWGBRs4nC2KSHEiBpG3zhaKEbP27eGXQ87J4o5QukeXUNTpDniC",
  "key30": "32UxP1ZgeK6EYRRnD1EriJaQLtsPRv3SmFKa56bgBieAX8cwHxV4W5MCfJxtZnrkCipRZQFuaoUJ1dXoMd7ANeEt",
  "key31": "zeWKffUmDSuK7JpHdGNVRFWZn5wbSqMG88tpNbbrVJ3VR6ZuvvAeH5YKH5GcY17ULa7WSGAhHCAMGCKBXxWfbeb",
  "key32": "2qUxrSFHTaiszMir4hHxLfYSmbc2PSGXw8RT8pw7oZgJSQYv5D5WZ4Rb8wATVV6URK5FKASfermaHuXeEj8ugcZq",
  "key33": "4QZHE7u19yJ4gnrPLUR6yKyacCre3jWkHwEFGh717DBV6CuZE5LTPf3LWAeLaYifU4A5wFLWQqGb8rtfRuSw4K3w",
  "key34": "5d5LSJgqgi3Fv74BsWomNHGpZyozZjfYhnggo8JBmNTHTn7kN7e7kMrPuwdunsLVZN6jiUqw4NuaTjzjYPubciyA",
  "key35": "3ydkbjz5oCuXh5QX8tcLsd8wTRUC61WDFT5rvckkDe77TvCFQMTraWuErMtcPUtWuj4cs1Yd57qkC8fCusLWo6o9",
  "key36": "42AmCMdFhYfWPuLij8fawprJzAR6BQ58jaCXu8PyjihVJTRSSqsygb57m5DRWYHqGYBj1qKTenYGo5wZo79R6WFs",
  "key37": "3PDgCKzhTmmzwDBdr8xMsgwXZhsQNaw8teDo7aD7a9bNvpjQGndfYjWvBHa211z8UjDjhCunKXLpaii2ismM2w99",
  "key38": "5DSau4KnhoRB7sFfgmp5DnAWbQoNQq4HSPPxFaUJG2mfUAVWoy7Rv5DLL1yycDy7muELVf56b26hKHsaVXU3BYiP",
  "key39": "Vz8zh467iwyChASZrsnfWWzSsK9eChbEov3cX7Gn1sfR6nDt6eXfrCNGTB9VhAcwxTzK8RoNkCHtP7qk7QdgC32"
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
