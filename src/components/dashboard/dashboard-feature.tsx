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
    "5FicVZeu7Bv3CN1J6u2T7BkT4bzspYTe5B497ZYpo4ijB8F6qPDMoBmrELbCK3ouL8vnhuFR49fbFT8GnXHAQiCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "umaw5NjoVkE1g81H6eX9v5rqrnoaMUi3LKVWAfx9Ucj9AXtGGAZPZ6ZEN93BGD2Ezzv8qnZtrtgMhxSFD1MHFLb",
  "key1": "jQ1FbjgNbuYbdZ1ZrzyABJXejrGSDi6mk72cM4CmWGjpoYcMNLDfyYLqUKUDTwnvWRgU361QJL3KbueqvtE5Sty",
  "key2": "5rd44SA45opkHN6FuY4BxbaPzCDTDTKLXj3Q1HP6NtX5a9K5CHskPaipe26ggmyYUSDZwC9fUHawwtKhLxvEET2P",
  "key3": "4qybLDWk1McCsPtX82BmfnLewzbCfgcRtBr4XvmVur45zUFYtaUMm66Kgow8jvusyrVymSV7Q5Hj43TS8p3AwAKa",
  "key4": "4jYZrQBksqteFGogYfr9TDcqYLRxj22HgVpoH9qYFSkZzpnBnhD7oKsZ3RNU9G1LwyyGKqaGHfPWGpM7z4efb5jR",
  "key5": "2asFqTeLWtuT3Gj9WHbGpRa7ob3zFV56j95dTZF5gfcktikmT3ZAmjfLLLTFw4Px7oQcYExWfddAWVeMJa7xumZz",
  "key6": "4EbVYiSWnuwyUZDiqmH3tEJa3qHQNwjhLNCDmMG12xDZn6p4kb6L7gDqtPAWFiBdZcVWwiNX4jC2YzGk6pvZzaS6",
  "key7": "45BeEMQCjS4tcr43cgzJRNQ6PNucZZGXDcG8okTgXWt4DGqZudu5nNqCXPdACfzAo1zAvn9p28uUdmzXicZ65LUu",
  "key8": "3mubp5eBh1mqFq1YwYhswWRkH2THw2fJoHzDJqVobKBLtJyJhLMYQqj7oZmtUbzAiLmCduFJsrTLtAAfL31wjMTX",
  "key9": "247AwDXWrfDauWA8MfeKQMVasY125bvAxrf6dGzmZBRabFPg52xUBSNRfPs62a6faaZ6A5oiVKWt5UdFBBTHemxc",
  "key10": "3xL1hKRob7abWhCyxgqJeXmwexCxYXrM3d1Lb9gZXsaN3hxkUufJZpjbpV6ri6qVK94Dd2pgVWLfnvTFCEZHBJTJ",
  "key11": "3V6tas99fzGiAE3EtKBRdJedWjzynavCVLZQCkTzGjmL8jcA58ibudahjZmLsrgst9qho62dT9iRyCVG75nB21pH",
  "key12": "34xAeKfLLZeVLKmivrVgEZrRjvXAib89xzYcyBYCDbysgvfDfGKNbbyfkv83P65QEiLm42vSvCGYkGgLMGehXQv1",
  "key13": "4q5z1t55xLTZPbncgZJ2fN6CG9MTJAjcTWhNG6uYNaxsaME9CzG67Pj3TmFu5httf1DRj4mAB9TrEcAepKGiKPkX",
  "key14": "3rMGupVAFzvzMUVj7w71vZ2vnk25zCARhiKjBkXrxpbNiDLqWaJFtBeD8HWSJNiTBBMP1ax3xWAin3nDMAnGMroF",
  "key15": "5HgwgPdFAQ93Yk3L3bVZKBG3rkUaNqygsQpq6XzP5pPPjkTwsTcyLfpFZjogvQDyhnmmE2fhvbDp3L7go6xrY6Qx",
  "key16": "3MVYpmLgTPhbAodAoxxVqRCk6j7pVrqNBLuAwDXxLYgMi4orzwNiEYLsua8rGsMuvaMjnu1LWUM7i6joPE4x6vfR",
  "key17": "pjizm1ceadGK2ftYZB6iNVwnZ5bKfZgP3fQf9DsqgM3Ap36BU8gfuauTi5L2UznvUhU1wNUkdcBeTN2NgTgYEiH",
  "key18": "NvBeUcf8tYjzeBifisenhKDuYcA769bVMV19EKPp5WJt8np8LXBqEpcca5h5WKZiMtyDeVVmbhbN5gD6cuBr4Nb",
  "key19": "3HaUiHF2MJYKnuA93Vtg9Kzs4FzgTqPydYnLGSz3vFibLkCVS65tXn6Gt7yDsykvSHQaENiCgovC3c8EjeiHn1d8",
  "key20": "q85j8wQe4NmsuvXRCZ9Q4rnVAeX9yU8fbEs15Gn22iYePJ7UyZhyRUfW6Jbhct1kxDmidyxETsV78nz4MZcwVgD",
  "key21": "injCP8oyFWUquouMvYL2sVfSKZh1KaQ9UPyY9TawAFEi1NCaoJcqWDjLtpceEzuNCtvqKxvALyz5QEWorV6bib7",
  "key22": "5eFoCPGxZuvhx9eVVDGrRg9ZTM5JconjR63s9gXNHHPhcmipRxKNibw7Q286e63GxKBj8sB4csHPF7FdVa9pmqKh",
  "key23": "4e5qXYSzKTvRZXaLE8S25sJQnGR8PTZP8MqyRonWWLv5ZATUSrX9ejHkBfsSEsGi3vjEH7R3MQgpeAwxHew55vGs",
  "key24": "3UqSomtHfkzSvrqmeVyk3Kav2zRAQdXmR4HNrVhLCPLZhfDu8Hrq8wQKq7W8eZg8hnC2SY1ChQqt4RKUcAohnVbG",
  "key25": "5Ko1JUMKyYhZRcQ1R5VwSsMTaqkihrSrygCcu8ybrqMUdi17PKNSz1TYf8C9E99DKvSMFSDRWauNYkKQF12kP7x4",
  "key26": "5PWx59fXbkBdmuVgLDzciDMc8bFM8SRWEcWHrmicjFLs78Gz6TiSwir8GY2XXz3G7zbS9itwyxadKQ7Yvr6RJioR",
  "key27": "3FCKJcUH2qe28GxMy7yRZQhXMZi8mzYnYZ52CH9hmWkdqYLwLT8ukVoSsgGrZAgW1ziNoTm74Tab9jcsqjVxnpU8",
  "key28": "2YWwfvfCkbzDKMVtUDFjG1UBGfCnP6JcymLu5AbSJCFnZr7DBDcuGh4kqfaVBcKQqJxtZueDhyDTU2fmUhDapC8J",
  "key29": "4o8sbnbZWyNoaJU7ZPvR3A5PNGoYop4LkCfj2tiddFN9QkyvjY1umzHyibtPbcfPkKHUqxcBCo6nvu7tUfXsbLZ4",
  "key30": "3GonVQA28S5PfRUN8pZs5Z2rs4fQf54ucxTvw2pKTPwhkW9r3bZWgpux7qBbvvL5MCCq2HrTHQ81o6sBwHKifsno",
  "key31": "2HQhw2zBd67AZhxCj4nhSMAq4TvPWmUzpTseGmNf4gf7Gj35KnGi28yT3KWGBqdvFVGQ94h4Vafos6TREmxeavEt",
  "key32": "5eZeN52NUg5NWMDjT4YPvfifCWdh8wBEsjaiDjzCfZiXpBYo5kw5rZ8kC1dngGFQiXGeUkxNFwsUmu8vaRkpNAVP",
  "key33": "2B2mL9iqPX4HWvYX3kVhPccBh1bCo83pF8Yyx1yCnbNm7oAB9CeGCthSVikTea1QVXYYy2J6TKS7aYJBtCocKhNK",
  "key34": "63y1A3bkdNRikiaWk6s7SSBmmjPaR3DFZhfc6eeUcZrwXJH4Rg8JJesX7K8C4f5EAhCNA14cW7YFE6AbZYHgDChV",
  "key35": "21KFQppA3Eo68vbvT9RpXd1QM5vj75GQBWGSg3LRVPkPNbJNVuD8WDkjcDniBLruDWXM8wJz7zZnTaLLkx4h24oa",
  "key36": "QB1hTS25nwgF8AtJMQaMVTfiA9azSS1mzEweCB3fUmTZwxxyPX4etz55fd3PeWXPMK1sfdbrxZtSEZBUfWTnh7u",
  "key37": "KB15Z2XxedWy1NpgsvxYo4k38cwTQYwajGNbBao1xNbvhnGK3MR6CuJQPd7UCw9BvS2GA5b3meTy69tJwFwPxus",
  "key38": "2AAWm3Wj8e3zJnLiQCuEhugAkDtXXQnTq4vzZYkCER9Uo6i8x5RwyYYBBJVtv2GfMsgMNpMk8wxm2tHfhDAYnPkW",
  "key39": "ZCcbtw4fv2kHwTCTRNVZ5PS7FnMvYP5Gb71vfFfPE1ntN5Cmw3g3AdwuL3KE9V67yCD5KC2upcW68Gvy27d2EAH",
  "key40": "2My9hdXcL7qjxZX6ywo2j2ZzY7pcULMw9LruNYtH9mYGVBDe7kus7qoRcouFN79Sx9Muvq3d1J2yPNYiyHnwrYDm",
  "key41": "4qUtNMTeLNfjDhsC6KevV9X3CsN8eimn8eJg1CT22ErqKsFMBZPEFcz9givUJSCPCfWazfze1wGo9kvib4wfLbk1",
  "key42": "5GkkcbVR6fyeSehGwm7RdzfZtLabKUYXNgE27hYismVV1bxjUGNbnRQJfi3vmGfeyBfrSVXepJaEdYZJN8PeQGvH",
  "key43": "2CUyj6ACnH2mBTa6PPnF2H7tFzLhPh5enQ1yJeoC9uqDvP3rrKxEmEGE8my4m6Hq336XkARd75YF2d8yEL6ad625",
  "key44": "5yKnX6vLafq8dwyXnfyTrATLv4QstJF1MZebU8qBj9WxK7KwEGa32qSovsrHniQYSYtwr1VyykFouhLUJuujgWKZ",
  "key45": "8mcvWAeaiNn5JyB2C1cCHzGSyC8icj2y8VHpytRQjyuvVpC3Wf3SfPd8E4NHyG4UDGSj6sBPYiDi4hDNMMCj2G5",
  "key46": "41CTTNdmvCQ29rnstVU7RJPvVTz9Jb9i34WDakoULD4XK2WavT2qKe9ApWJjQh7NcpoZim7r1MSQBNhAGDnExntp"
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
