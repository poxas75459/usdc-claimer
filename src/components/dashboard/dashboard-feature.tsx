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
    "4oTADmxLeYHkLBSwyWPiB4c4QpWqB9QG4S8MjeU593WYa1FhAZewJ4DMsJqnKegjFazkukKBH2H9Ay6PKs2b33Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29NDR6Cam28Lw48V3EhQCz5f2yyd4AQjjrgJacy592qitZkvMnAmZSP3jRaUbmydZP2UQJQdT26X58HRgcTXxN8w",
  "key1": "2qGoPNPNHintmU7Dy9DQQkohupknEZoVRzkRie8bbtDncCVrNi6JwvVvkfGNgK6EEzhV2DQqZr4FK2MiKMGUn2UD",
  "key2": "3jDV4dKzLHqM6VkRcf3ArfodJ9fhhYJKMZsTjCuF5cr3wZFCar9iP9bigUMKXopy6EkC6JeauuyaTYr9rDZoBwRN",
  "key3": "5EC2mpptesmtnwJtthS4M4rHTFegG2bf8FQzE1wd6vgpHDAHpdS5MezcwijBQzpMBq5LLx1Acqxk6kgyqn45ntcV",
  "key4": "Vx63At183JM2shd5Kvg3CT8Be7dhFNEhKSAXdXuVZMsNgZtrq8ezh1XTgfFHct31cP186Ze5qXpdj87b7cD8ddG",
  "key5": "hPwMd1yCFFNN37u1nFbtRgG3B2WsGEknGCNTWk37nsaT8rRk1SEPecTT9swSswsbYEM2aFLe3vvhcSBEfcgGaXp",
  "key6": "JW1wkCSZCVsF67WN79sLUt3c2euKqurvMGokQGMY57uWmP9BPua1oZyLRKeGBYhrRPaQ1Hpd4kLjC2CpQhvi9uY",
  "key7": "3bp9J95ep9VRt4ZompegNpqaGdZxzbFePcSUupnzdyVB9E6Y4Mm7dTs9k7dAu9rzeqzv9ugfXkETuGZSYq6maAdP",
  "key8": "5Va6a17TFUgJXv3iWUfAySaLMeeie9RPT4jdXVFzgjBxQc2esqNS9byz5cgsJq6GVTjtxSZfygjTLW47S35kvsPL",
  "key9": "615oWRmB6ogCwzs88nDHkHXwF5PBu1CkrRnUmBKidqh5VHyqmcWQFnAa1hzgs9jxzsvi4Jk5aExJSXPyRPDfdJRZ",
  "key10": "4c7M5ixBtvLGUic4DpwpuheBUaKVaZKzUPnKjy7UrWiEaZKbDk3T6vY692AWTnTaxMotVV3s7gY5NNjxRazoXyUi",
  "key11": "4bcTYtxjUynDgVWoVudPennQaABT68yguWk83wokZhByJqA5Zaa1PMavTirXPeemoPsuQ35cmKQs1C2HPRwPfQYC",
  "key12": "38ny3wrh5ASqfGrAhqu7giDfpmNFoV5DSbxZpBMx3fDsGCx7c5mhVXYPHEz4BRVoZWPe6mp3pEnGUjPsg6D84ZYb",
  "key13": "2FL6L1Qhr5cZVMHC2JBrEsidZDxPjiMMyqFGDzxxKZZQNHtLTq6yXdArmGBZZDcvDcwKwx1iDv3TeFeH6HDut86r",
  "key14": "DyHnK2xX6D2ZYSdLeAjAzaLf2wTTXaaHWkRbZmB5gQdiAFnxGFRx4y3nvWqyDsTPkMpBcDrMCq4ZAXPQSzQ6eNu",
  "key15": "4uWPonbpKYPQmELVZ3iPfuWwtsvsgYg9rj96VMtBo4FjVRLkLKEkNYKcewJLyGPVs4zZaxqJaZ1c7eJUbQTLVSwM",
  "key16": "4JGvEfxBhcLWhZ6pir24zXc95yyZHb5xfytdtDeN7erKYn96mTHPVdo5Y5zX8aACJFBEJk98hidHuiCbQBnGLDpj",
  "key17": "XWCSqimad1ZxPb3dZu2cunJq4haxMquwvdZRUfHgQmLjGFCmHSTAnEipuTbw6B5Zjv8df1Q2L2g56fWMYh8qEto",
  "key18": "4rUYxeM1P1DviUUeb8kg9kYzCqbiqdUBNxaxyQdNY4SkM6bjS28rxHyTUtNsWUEZFod3xSjQLL6EJCQFq7BBKyq2",
  "key19": "4p8GZzLZXg4fURPDc7YYELAszdHJ2DmgC9fSuGDBbq3ZQX5FczXyP2uDyv9c9Me1WJfP8mXWRgVixQjFXe4xJqwC",
  "key20": "2Q2dNrf6Z3Kmm7FL3qL2y6nAxFkKZrGG2znobmqsEqN1J82z49fcoXSCQtUF3bgogSGuuwxhMVvwpizChMZWZbuT",
  "key21": "4vbrhLFn2zdLSA21U83DdmYtxYARTvCn7DEdh9gDsco5T1WW9vtDKQeJ9RjDHYDiX6Vn3R5iXWk3YqDZVjSApofL",
  "key22": "4kjsyBK2BRwuGqvngLGZ1bJFFzycv4en4o4PHsE8UHhTELquaecbSRBQckDHN8kFbakHU9TgtrgAhbBXLTD81GjP",
  "key23": "3puLNpRGSNCLQVMSgpPRrRMekk1sNx5x6GbD21TacSDBuiW2t7M4cjs25rHkQ4e1JBVWnRNjfByw1a11jviN9YzG",
  "key24": "3kVuYhrBqNT299dbkQk2HFPDo7U6iHBmk4UkS9Jz7pAKhoX3qHk8Fqqb3EzgN1eGAc11p79QGcgPuPjAaPXDFBRi",
  "key25": "5nwAtjUuXAbFQYJTwCtuiMsM818ng6p6Hvv4drMPLYpeNJF7yNRy9ttYPfsRuM9WKsdKiworGHFsSk3qifQasvV9",
  "key26": "GP53hyj63gJLtTBqD5NZQ3tfiLCmKxp4vYAuskQh8gQUpQ5x2Ux65jcw81u5hPjcapVQ2uS9XLLXoUhyLu2FMXh",
  "key27": "3zhRkGFqcUNH8UXeXqAFmXeBmd9tquh9HqWzR1ivvNoyLDioqvdGVhw3hzuJG9ydmJMSvpJDntDD8r2GiHUHvgVB",
  "key28": "2AbfAWenBD99RXqQo5UDBUH2m4gneGUW1CtsyDy9PLyLg2uq2Ea4Dgg2tLVcg88apHm5jEX9op6DqMkZPeeEJ6a6",
  "key29": "5PRCUftA31gv5cJ9Q7cvxYCxeencvf5EFyDAPaWuamjWGkFs4s2H7wbXTnDqUaBmBBiaXPfbfkLeti87Af1vWqeP",
  "key30": "5XmbfRfN4Rfc79Go4h5XkeabnRKBKgBnSSQGgi5Ank5jQxAdHfrKGF1FxrjNLFwh7FiTk8KWySbkwCUdVgKkGaA",
  "key31": "GeeAJRAzaaZteKZwyjQZCUGnxNBCzYf4Jqss8EhoYqgmvkntXsjscyVKxDgQLv77oHy5pVn27svaoK36fZm1BRV",
  "key32": "5sVEtWaKfkChoERRpyUAyufShfPoLAun9C7Z4SMLpj6bsXQFuxrTQRXGcdBjnwfUmHRPr6RVbzAd8KNgJhySrZ2G",
  "key33": "3ppd5diYEbPYHUKtzCnPpDW5A3QNd7WGpt3MdWF1uA2EjhyH9jFabweRzM6p3iSVWRQAxSC2yJaAdjhskyT8TMLe",
  "key34": "5JsSYYH2vhoQkKTnG9hWt8ZAjaTuJTqs2WhBB772ZeHkThZRPDEvzZ97BXU3uio8NJhbrK6cKLgNB231hta2SdUB",
  "key35": "2yxsLLtcDccuPov3mKKkHdEn9rkLRr8k4geSxcAgXqUrLqts4SKtEHXzmVpP5x2ahX6BwUzCDEQDXxqVGnJJPU52",
  "key36": "UBtyCEM6JiEyNAyNdD2pFRNamWALmWUtbkacQz6VCg12eGUQhoUsV8Jgwh6b4PXpXxnSp9vDrL1HZ3aTGfmGN5f",
  "key37": "2kgkwxz67JnF73DrkGwv6NikNsjAfhCtHFFLj5SCyaRPuMR2uXt5M6gNK6g6DkeoyJvG38n4J7kXG5C2BiouJkGK",
  "key38": "25YDXoTahnXQgFhFTAyi4qymVnGneui91WMdGt4AYbYRpbtEitjb8YpWY1gYbbkYzt4HjyPQi8MFNGgrtTuqKVbW",
  "key39": "4XDd59L49pBZSgHkMxosup4xN4qh4kkAoTFpSP61QUBToibLaHt3sqg4km6e5M7Wguhv7ETEWd59ou9ZRAnuhqS7",
  "key40": "5wP7Yxabzd6TqmR7VPa3ePj5j7Vq7R9eAqcRsGwkoxrsvqTQT5rFVCTVeYdTVfvuWAAQAbTou48cNsDhXJgM2Hpb",
  "key41": "2GAPUzRGrpGtJq85m1xsLAun1H3qPpGdUUGB4Xoy84KiyBJkfAZGKKuR9z7cmX7QgAqTymdmk5kMZAdywkgN4TNa",
  "key42": "5xEd3doZWMVdrT41oWT2djuW8gLqNPmnHSvfansvSPonMzz1RQyzirtiJS7WkGFMUS6KAAPXGQtbaC6u4kFard6A",
  "key43": "2Zd51YeDJNs82kGdA1fzeTMcB6GRT271kiRPb4zmedAnAV62vW88WJeoMzRYRRhmfCN1g6aJREKuuL5iqXy6Ntbr",
  "key44": "413Z7U1mQdznToMaRKosrQWxpfdDHqep31NhPWDY2mxf2HkK7KsKCQNc6N8B5GVfvk7KrMKvD1XxxGX558QB6KwN",
  "key45": "jkVSqVW2KSARh7QpHXojzUEAtTjT5o3CHLPpzzttzq55GyEyvvuMCj2sPiZvrHLkMrMVNNqSYtQDwWuPUJtaD4D",
  "key46": "4ELpZA7X4qhFUQ5NML6cHQV2hHbA5on2eaJi5EAb1TaDU7nMcFqgcz6CjbyGVyXudznMYvZPuQwmiP9FNfT6rz8j"
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
