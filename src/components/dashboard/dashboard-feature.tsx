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
    "2N9KHU4J8QpqrietskxhXV1w8sBq55xpGTSW8pAi9nfHuVesZtqPZBxywH16tn5uo9bMskrJSLzB3pytHgGybQUN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33ka6qmCbB2cpVkfsHKRkL6WD1rFs1hhEce8jy5cVP4ZdhTsmcj6FYnw7Cxo1hEwj8ZkEGK9SWazgZkYjH6YvboF",
  "key1": "5mTzGQXWKbdKHVKeJfan7Tp8EuHUujnLEjoYgkTUTtuJtSf4ST7wsG9Cq9g4oCRTV3qSLeEDgbjLPgA29MfqhNEq",
  "key2": "M1ogRLyRWLc4huNLZDvsxdXue9zufP4dSCufWXd7hr5beWromueife9xtNicT6ZqNfztPMbZHwPxZwAdo72CtVh",
  "key3": "UJGEY3LoAvLtRLkWMZydgtHCCAKNJzFmAVpibQjiHZjQVTK2EEW9B3QTR9iBUhqtpAs7vvHRE51kPMViS7AZ8aK",
  "key4": "8UoJdf6yx3aNPXFx7uNqycQfCQZZCbkuU81GwhCwo3yncrYepYjV7Hj2zGEKnNkiS9CusQ6urUvA4QnG6NDVkv7",
  "key5": "3EZs1iDTej3XvMgCKaQw5KaiRgEyjWmkEErm4V4ZrnH1WuxPP9Kubfnm8HaFNVSvwb5kWdaWN6E3r85a7xL7RuV6",
  "key6": "45NRwrEDmtR4zxc374PwgPo9kb7B1TV4VbHjyQpFhvqiNHLLFRBZbby9VJUC2H12SN8deN9ZbgUjrg1HYAeSkd5T",
  "key7": "51AvVNL7ymr4puVKsztsjfYU4CJin5iS4KUjXPDuFobc7YdDczpRAM6SS9wvziVFffsFgnsQEqc4EpVPCi48GrDe",
  "key8": "2x5gwgPgMhszAkL2GpACjyf15CL4nz2zaKxn3dsKv4RJd4685EraEECfNX4HL4wv1r6QSFK5VgcKYZoVJWbyQmR8",
  "key9": "3upMBz8qamjJZuMWkHmo1b6FJQmEV8NSRn8kdKs9Y114hbwYQibyxJkGKv6QpYvcZwFro6TxGqDR7EtNVwytjs7R",
  "key10": "AjXG69UDi6L4CrYjdLp2Ch9yA3DTH4jBhrchWn7Ap9mJfwvLekuosfVeFwzkq3xAn4XSNricEwTQtBZCKdo1wBF",
  "key11": "4L2DD5dMwPnBCp66ufC54wVF8WxZF4EFSVCrgr8UJ7s2woNem1wVZzo2M5V1trRkBJ57AcDugUFUj2zxPg82TRLf",
  "key12": "ewVUB7yiHjqRBARzAtWb46BbuTu6zh7Ntk9JHGHYhT796TELtvuijMPkT3GJk4FRSfVDrV8zpy5B2v157U8fKnL",
  "key13": "3Z8KN95pPZx7EYpsa2GKfBpmt2E7pHHTWmHwu66RVMTya3PuSDmki7UK1wBHn4SLz8XPieCMspW38YrLsbfrPvmC",
  "key14": "38iodcvkdYzdkmwETvMyvSEb12YLGHy5Jt5DLC4kHBwoMfQLGDgHMiyJkzawCpDLASMJnQdR4P6F7tYEQDFNh4cC",
  "key15": "5pggohBtL6Kc52YBeYPiTTfKgHfVapjBXWn8M3yYQAH9YZ7jU6xCzBmikqKJpTX5siLvJ9Uch8TqHbYqwJEAD1s5",
  "key16": "2Rgrin5FV1v5s7cbb2dT58m9BfAbNj9QM9qU7H1EKLTNTkq7FXMpBcdtkNFgc9TiVaXusBoueQFeuZh1BpE4U95S",
  "key17": "4w6tafmxi8k2FDw5fsQYGnsQ5QWTHG2JVH4E8M5a1tUJvLdgX8doJj1R7wBpTMEou4safgxF4rnAz8Vpz4QKb4t9",
  "key18": "4QvCSsaWbECXuFGbuyfNC9cnn4dHDRquvzdJmBmarVYmZ83kB6QsetaDh51Nqo5WG7uoq3jnHeE97gBj6ZADcXFA",
  "key19": "2ppqUufqPAhEEM274iHYAgrfq5x37sqYW1oGbwBRU1tnBgNJJEYDKRyyTt8rXa1LPbBzhARXX5zqAVnfndYZFV3U",
  "key20": "3Kctgko8w6NENxe6Zz8HyYWaUrUwTCbHQPMvnDHvn2rduycK7iaovucFUgqzZAnQoqdoudAtFTyAM2HTwLVU3AfG",
  "key21": "1EPzb9N49VNynK8RwtnbZL3rQs1M5iZnQWhWUyrvumEPona12o8yNCqUhp2oVZWLD4LqrpAzbpkJbjFVHU32DFE",
  "key22": "5jNR7DZ9C8N5AtL5mYRRpPm21LVV1QcfYbrVVBdxbo2DLEDQkApAqZCPNaJcFujPwohCUQtFNTE9965sEfrVvws8",
  "key23": "2oqBSFZGprdpHf8xZK7BZKRC9J959trb5A5RsTYX1tQ3utRWVerBDWekZChGSy7UCnomyWztMzhw1Fk1R2Ytp2fj",
  "key24": "2MPL6uVfpTJ7ghwrYDPBADGL71ie2fcUTnnFNmTTY9TmrYmqykNE8Jxe1bPtke5aB7sRNPJE2pTsUAhkebd9nTKz",
  "key25": "2StpjFjLJqNS2sQQkXvVjzqthH8aDz4JYYPixR8EL2mYHEtyNMEM5PBoHgyZsQzA7ydj4SiKzfwy7t7o3uUAUxcy",
  "key26": "cfXFpJLJSNSGkB5SmRJwwPSLYVcnSuDx6BcsfmjeVxhCRq36rMFSS3GkSrjttCkCF4jEXYEKHM7wLAHexSaehXe",
  "key27": "57hhwpvVYpCHziZKB1n5LqDozgskED8A4C1LFGashNmsRHKbN3WBth4CTX79XvRLh3HKqteLQMYa9gMTJzN8xCC6",
  "key28": "5b5h3yMjjG1m4xvmFxcqdFZnJA2ifUNfnG7aWT2GoxX7HyrBb7AtpV2hmSuXwHErek1YacfzkQ7dm4sLstvnH3Vb",
  "key29": "2pPHMUKoswmKXB7UiW1dZdvkxn6k6hDgXvpqB3ULhakCd4gAZphJeXUFPfKVJpzCgDSRQEURD3XnaRjXyXxmRhmE",
  "key30": "2XB58u4XBmzWCVCXcmw1zE4NVDGbA1M3XJ9bF3aSGwicWYJF2TChezqCDqFFFjHtHBQrsXr1xaaQNarRN6uaitj6",
  "key31": "4fjxwwh1UQvvXzYc9JYwn1cuzGAiZUbiHqmMUGW8hXr1ujqPmyZNKqdpRqjeQkDVvgBuM8pqNXTY4yg36xjzk1Rk",
  "key32": "qnLkEAvXLsKsu11KDCb4naBv3xhD5QNZywGLgphZAXJn1GNAjWeE9YouHED9Fsb4i7jssiTvgdEyBWCpYWR8CMp",
  "key33": "25ocv6ZJdXAtSAuyRT5hm6yASz7rsEm5fr9WHzHYsQHiYzmtbvg77YcceJq9DXHR4YjXnq69pQRhrtMMfKUSa3yZ",
  "key34": "3CkdakJNfq4bwaNrbvBn32dqUKuxaRziZHy8x2fpqf2nyGcSn7KqCSqbiaziKbbMi8wYkDUkmEepyMWGyD8TbUix",
  "key35": "9jZHxVBAWggseUpdS9Tw9yz4SBQvhZg3DGrfgDrdNuVHYnkDDVKmPTWFU4J7WG1CdABzCGjcTELAhLgzsatJbJF",
  "key36": "B9RCfiHmTTonyBpuW59KAieTyt2wuJZ7C17BTsBMp3AyZBTdHFbdH9gz4z5NwCYmrVyvGvRET5fg1Z6W5R5kHFg",
  "key37": "Q5hAu7NjXLo442VRV5Qpzpt9fB67Fd1HTQxMnejJVVLG5ngjEY55Hdavcdwa1EYrCKeQU9azTpLtdmqug1RUQ8F",
  "key38": "5oxvdBGdMnMBeccnJjGWx97CfniLUTQJdEh6iFd1H7QW8DekVWps6EtmsBhDAxcTD7mpW4VVwTYQQLNWC89vEBKz",
  "key39": "515P9mYCuHnQDpFDtcPUcGCfYEvVZKXqSKYdrtJvh3QtYNHFumYSJEcQvXNRpLST86FMyUxgumXGit7LJJ9grmWQ",
  "key40": "2EbFK7E3k4hRnwnBMYdKZsSSddM6wDLMQ87ZtqwE9Qr1u1mUvrtTuZk82YFHGANKfZNR7H6pf4VFPX5mYtKMEQNC",
  "key41": "4LiwgEbuvqpMXn2eHp4KTdxwLyTnbvCkkCDovS4ENTPvdcW7WdocnLwRgiasDvHXSgA7G2X9r2xddH1WUU3Wvax",
  "key42": "5NtB8MT3LRR7pcriixpgZ2SkMzZmUhBgzkuMBgXntyXCn9sWYTc5E2CWMDDRg95QMhdEUmBUbY6TeJM2RM6WRum1",
  "key43": "3vPD8xy8wsQKbA98DW5x4ysDPLz3qVTdR18P4rRGWEDJRM1m9FBjBrHRkGCDKXnjvxF2hFftnGst1XcpDZhDZ1Xj",
  "key44": "57spRXXMhmY1HD91ffWsjTusBm98J22nKjpGj59WRHXGqVg2qimErb3KxJhFQs8pPCsPMxz49jcCmJBB95Yh68zR",
  "key45": "4iSU1HE4QJDKbsZf8Kw4CWqRWDFphbRvdC6L7Z9DJ7M4ooykpTp8DFqWRYxWGJ8hVHqxdv73FeDAMJVyhWgXpynQ",
  "key46": "2Rg96pLCeVYSajXpWb6B1vG5dxhJYX6QJc9ndXVqZwsrAdef2sqj6wzR93RGBGJLY8Um2R8L2R4wG1c85mSfUPRN"
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
