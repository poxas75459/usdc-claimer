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
    "3UHuKZJnfZAAyXnUfigtRVX9BgKYk9Ehe8Tv7PcVUecwWpGKPrKV7eMQe9de1LtzShAmegMftMQcPqXAtMm8YwGs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Lt9YVEr9nY4LAntN71bjyqKf6a6r5651N2i27jCdSusAtvPiN6unmzB4CC8Kdub7guG3ER9SCqEbGMzQByVA6Z",
  "key1": "4nNjpmwhoqKeS3AGP7F4GsBS7EWS5aT2eXUiLt65RhRPiW3WwQu55UCRJ1jrBru7QWYEgQv9buDpYmQvyMy3zkjs",
  "key2": "5UDgGCDaEXzbqfLA2kJi6g9tRJNFxfcJ8aMiMgXWFAWdR9ZcGsPVFCu9aKTgzAju6wGSJt23ufsFbxFgD6ANueYC",
  "key3": "3HeG12eMW1c43yUHbiEcwq8yEQbqEhVGT7UmGqWLFS7iJFYpM9R5nEaSK7Y7E9Z6g3KkHenMs185epD1RM4yMd7F",
  "key4": "57aTwUcT27BSbp9oiE2AdshEikzBg8yrpiFJKaKEyDx6c4aUQdGwg2fe5LnzTxgYpCEyS9UDJ4bT5QNsstdigsCM",
  "key5": "41MZmaCoZbRpKwnMQ3qqkbtqM8DEu4xdMqSvgoLJJbrtQGms2m85tag5D3X6Nr5FvffgvzFoFcUgN4UNoHaF3Tht",
  "key6": "3s6AYPEznefyRQArPHdLfLNtGDbewsxdY5ia3Rf18yMVzQ5puWtg6rZuR5eRvJcu7PWYHMzxPr57kRGD91dKaHqt",
  "key7": "2zW7t4dzmansrgAF99hHvSZhWSwDi78ToczFM2Qd3cgs5iL7CjKwwh4m7tdDXspB7msJUgA7peCtHsu2VkdH2eDi",
  "key8": "646trPbmvy2nV7b9WbxkxSa3W4STrq2sdPsfbzj4ixdpZS6XgKTig4NJucBoqkJ8ieVhgm6bnCcctCBkuMe1mqix",
  "key9": "2kT8PJqNn44P7yXUC8Wv9ZgTTNUp4N6Udag7qHBaW4sU3hjysPg4uurHHjs7d66FwLNghnpw4frfY93PoHSujZj1",
  "key10": "3tFk1pWANjDGcWASjLfvhkuhTM9w1X7WB3NbEohyy24gYh6CRXif3qhBWYg67GRz32vsnuxZSwS3qQmVBx3jiX17",
  "key11": "fjnEvsgpBgyK4wSJcNRne7DsABTC6dvSzP1YmYCmMXiE2Zyrx1RAwUyVrFYiGAhHUw6EUcWB4gDXrhMNZjXBwnk",
  "key12": "29MPnE3E3rw4SsvUUQixW1q2HnjTGciJPWhyQ7Sjj6raYAbUbHS4v1JU1SkWkGAvasMH5HB55HMWtdSvmroa9hJs",
  "key13": "32TJGPGmpcU9okJ8AZuPm11vEpudr82GfqjjG7VxwcibK6yun6kUaUZnEXDifrVQvzvLjDYSVLWZHYn7wJ7P4XE",
  "key14": "3fDmA2aFJvoGRujYCA2kYti3A76S8oX57svp8N3F8hQjTfwhrqqAw6jKzaRnbh1KjcQw3KcafqsN3KMxNq6BfEGP",
  "key15": "3jZPRpCMbnQ2T1KRv6cNyUNirLsBAnMdPB2idcwRYMZDifQj5sVfJgyG6zk2L4gVgdpZ5ZuekUSNkXoexFeSsZoy",
  "key16": "2vyYYuUJt9qDMjbNMkgoJ177MHKXV61GvrC2ZVho9fyD8KjFc6WqkShBmRGMx8hg4ZzEnaNQchUCXwANpfpLzfsN",
  "key17": "3hcMqzmpBnomUBkQjHpYi3USjgnBWY6TRBzpHsGmxwQoZSDSwtAoSx47B5fqFVN8LXGJQy7rBLoBnMcssi9uY2r3",
  "key18": "3raC5byeCzzJKQECate1F4DnSKnJHZ6YXSSgFfpWKjzMYXTCPcFoocwgZ7NZjJMPG9yydd5miz13iTv5QdXpBgta",
  "key19": "2GuPUKMnd2pQsqfbnCvVwSRezvc1aydmqe6QCejXytw1aYD5kicb7zQfTpKXov6FDxj4Fzb3L1wKuLV5fCfrehj8",
  "key20": "4km8HPBgM2nNasmjW5ozGVPpcrDXYJF6eZsHbM683ri9hq5Er3uM8EjCUoYqxtFuSu8L3sGgGy1XwZKgQ6uHnPci",
  "key21": "4nRv1ic4McFzqYHPMGaqKiGDpksP4FhiQSq3F1DHj76HGzE8Q14h1TeHr3UiqcfEAZYZVevHawJ4Je54DFWjLyDx",
  "key22": "noLSfox1wEc6SxXF4zm8PnnjonyHXQzEGWPWc5VSj1EM3PyLU2w6Kdmbb4EViMMmfoHF4ydnddTKJ2nd21Kvx6G",
  "key23": "QsWmkUEHKyjLrMcvfwtAePTND2cYMVNPE8QXR1rWwMdqN3WY2jD4q5GzmBeQo8krWbAHEiuFdYnMYLtvC46Gi74",
  "key24": "5ML4YHykjjJ1WYf2jF8Gxo69bxZRtshL3bufyBe15r3sutT6rCi2zf17ioqTnsM4JCW6bbE34kLh1ZBHkeyzGKpN",
  "key25": "3NaPchcxx8aqgEJ6giNzSRGHk3MUGovPH6oXuhWUeDzaf6GnkkqJv7Em3VGXxocRVZoFWWHXGbPUL2b9bqxJi985",
  "key26": "5fkoFfnwweabJUJVi178VKZrxFAg4L6z82BpHLKahUwNUaxuYw55egqU6NPTNz1HnDeetAqkFRNU3HyQVdDY4YGd",
  "key27": "o6dyGUxdmzGFnUr28vZtfuGFqie9XLBh88cQPwNUNowCiiq3YmjSZmUSWBmcQY56VJdz5Sw2VkgBJPGKuQx297K",
  "key28": "36xTyt3yfx2sCAx3cptzeA2tk5RZbvFVwrkFJ5fJn6eXEtja4RkMaU71TTjGRh6Mb5NxX7A9iAURuzN8JyegRANE",
  "key29": "3ZBvGVNeeqeHRNtZfc7GX8myDdYou3eawm5u7QWev8eqKXBW7kZEtmSihu11mDf1XokV5PP9LZem26ueZ2CdTNk1",
  "key30": "4ZvVQ5cdwjGKihtVsKRg2Z8F3jUWJaEWjhJp8Pn3J7rzLZfo6UHDLr9fnp9zHn8m9p4ByXyUWVyvi3XEHuvdyHAA",
  "key31": "2BHLfcC4NE9XHseqbc4zvja38m6nuibumDsG1o4cKivGHAN57J7xEALnUnHx2cqQ8UaWjZsAXb1ZmgPKnetJxikJ",
  "key32": "24zRLnSpgyQpSJzFFmEDtBsNi8z57Z4t6BafVwvPaAjU75yKJfVWQFgt1H8ynwefcW7LChVSNQ1abEKVPQn3qZAW",
  "key33": "5soBSTZMu6PRs7QxtZGKDEYJVyZDhLZ1w7pZguNK2uu7qT7hLDXX82F9WH7JMbY6J7BLeFTsPobC3h1jjkj3iUp5",
  "key34": "28FJ7iJ83NRAa5c4QC2sQqDy6To6WFTr9GtRnnSirHteS8NEjsJFu1DGjtxv8cXCohDPjHQD5CnddmhUAXtFW9qC",
  "key35": "5ykjgsN3iQybD2Aic4e9MKLz24JU7iGQ7pBznC3J478ZHVm6Pd4sXFkeR5eXqhnxg3Dv9yn6xmnCBfrcMD8cMymn",
  "key36": "jonHwZs5d4wbmZEkoWcGi8PLvdZbN13iRcYNb7DocU8CBGE1aNwKNeKmytuZFdtPFfuNNMTM6Px6suD5GK5RXF7",
  "key37": "4wNQsPeSiBPhyPQPncJuR2MT9A8uBdY9mZEq27ciEKe7Dmh7eqKMvNEQZLcfS8X7crdzcuby2QDAPaaXd5kASMQ8",
  "key38": "4Q4vwTd3gyn4BZGTaSGKqvya8bproPg3Lm2Fit3FBQrsz1E4d7ZCjCJqK7RRtaMjcir7Xu3KM1uF6oqx1YWeqPyK",
  "key39": "4EHwzUvWEAhSv2snY7pAjLaJa7rSYkuuLAxqQ1ygYjoujuiwVpwfiBHGFqpfANQR6zyPoxayga3dce3p6yvPkBGR",
  "key40": "3edMRUqKUhnRYcycrcBFP2iEaP1A1Pcr4zc2iPbMCXUQW6UZ2ahp53sRnWZM3tLXb4ip1suoxouqJaXgwBeji4cg",
  "key41": "3ccYouW9XBwBiPVRyUqbGDFZCL4pyFiGX8LSt1pF8pu3CEKGJ79kRBaCMgE9X3CuF7ooqRALUGj2Nz8ZLjXR7nrB",
  "key42": "3HPsHeArTjcKoixJuq4FcR3RckvDby9nTZbMJcDHJ1M9f7n965pc3q9SyB8fjsju9TJubKkYxRym2McKtdj898kS",
  "key43": "3Z61CkVaFxz4A83SudkhUNahM6jWtxRgCojmNUxxG9ErzvunY6f1hq5iAgTHzEZxREe2rUHZBu9vKQhwayep3SjD",
  "key44": "4pHD23dKYGGyqATUpjtTqHKBgAdD7bg34u2k6hzPUWM1JQMmrxmBLALtBVBK3GrE7GGBoPvZXRBFWr7jYbEMyo2v"
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
