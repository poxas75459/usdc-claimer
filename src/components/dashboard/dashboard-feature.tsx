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
    "5RoSX667zY9UyjcnvdxU3rkotEkvGqjgivGFYLUGik9Zn9u2ZicBNyLzrYEmD89m5gFEMHE9o2azg3XNSXbCwMQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CK3WLTrddKLCF8XQo9Rrnb2r1j358sq4J6dDmd9eq8PNeGwrQjSiEVXPHCnBLAeh8mJiRnYszwURtB9Zn7N6Vmm",
  "key1": "5VrGY8UZAmFDnAhoxeKsgny94MPzN6YfcbAYGfHmwA7Zffm5HXREGBn8Vo5qesjWw2WrwkVyf4NHUV1fvZ9vRvX1",
  "key2": "ZLMWfPNheaRHeaAyTgHRHWRCEQJMAR1mrGNkPubTrmrXgkxvPrk8dkEzubnW6R6GeqBs4Mifcm6vauFCZF6V1ML",
  "key3": "57gr2igEJ7SzdHxF8MTJzJJvGTBkGy8zNrWjoZRHV21gySobsKwHMt217UdCEKdife6M16WC5zpHkmUPdMDPp7hJ",
  "key4": "5Zs6URsKMbKwXJonhio3PFZb48fV8KoBvEK4RjgCzm2uJgTkKLtoa3mXxNMr995hi3eRQ42DFqu76c62cimjdV15",
  "key5": "35SRTBmnT7YjrwX4TX6oWFgz7x2XUBpQF3ySzsxJiriN8AdVXsaTGAhoQzTe1gJcGd475Wdghq3mGsHz9dsHd9RX",
  "key6": "3QvL7EbsMVnbmcQFu9VcPPgonjNjbD63oWKrU1H1A7C9vGR5MWXE47wy9wp13VbZdXQgEBjFdV7bKrYzKMf6Rgaz",
  "key7": "r4bzLrzwpQvUeQ4fbTXbxAqGJoGU4CnKCRHQBPGCL2yGSLipvKU2bx9xR1KwnfpbyTmF1faGLifbxaed6rayGR5",
  "key8": "HgaV7gdWoqJY6gEEjDR8Rn3MRR2Cq1stvrzAJsdPPJnmmcWzsNVR9hN7aWvW8KA59vFBCahe3QNiQxBJZggwet8",
  "key9": "2gfdjYJFnrAoCb4kfRTfhLvYrsULUy32pk8TgkDbo2UzmJbWAnTA9bqvHx1B9iU3LMmz4iKQhuWXcngiyy11Fwyd",
  "key10": "4AQDBmmfWCcLLG4WAuJLJyNduYLFnKQLrK9THECyDTmYgnmfn8tkRjcj1GBksNtRVi3recsUCgpMvdr9CcYNk3P7",
  "key11": "PbJ5EfYnQ8Z5SJbQyQ4xdSTYUgYc5fb9TupfEbg7rstjkeixFvULFLkQQc544i4XecX8o1wNPTpnPzLmjZHSEUh",
  "key12": "4LeWmP7bHyjMiunSHW775mNdVp5wLQkWmUpdvAFFexiDEv8TVoDyjJTn9NFqcyxs6UGV86CXVPzZQF8C2BVDQuyB",
  "key13": "5o3hfSV2L5a6Z5wLDV368NQHHyTB5iN7aSJfa1dzggBLZow8iLDSLisnuEU1mZJHQZmtupknkxM3sivRiBSQSWTP",
  "key14": "RrX4n1KZFeYpwd8bJ1fMrNGMMdYFKwGS4ABo4vuBu4dry9Q2ZAa5VXXVG5bijT11D8GnzoGHXVzF3U923v4bwnC",
  "key15": "5Tgz5NSbkT6fifZ3kcNduiwdHJjfbeS9kNmRt9QkaFc3wq7tFCGaC4yZegATLPdHS4CW9LboP9ZisHDvXtPyBENN",
  "key16": "5v8W41iHvmJ6AANgVHgnWSz716qeh9vZR5LVzF6zEhaM1JzLezRed8JpoNoF7dLdHSAGAiqRuJ2dd1woYPCLpt39",
  "key17": "3KgNDseuuH4y4BhYo2oTHfEaxjkD5LL98j7SujvS3PSNTD67z7uhB66ZavJNcUutL1SiSzWzKqfmfeUJQvj5E36U",
  "key18": "4CPeXrM2SsSSHcqdreJbDMp8NELZxBiGpsnyxhKHAisnAfv7aW64XRWJ5z7gnNWZVhQDGAV9CqtVQcpEGf1oSTCc",
  "key19": "2ixq67QwP37Ka3oUMP1dLdSGkayXa6Q4wQcq2WFxxYN7pG6jz6HKCf5P7PEpkuwbhsGEca7VQir5TwNq8PVYVRDi",
  "key20": "q9NifwnK52noEffkEAa1g2EDaBB4uqvhbxnpJedZbk1A7eqV5CfrCFadWiLYJTF3wcgo75hzJVweLiLF5LJEYKo",
  "key21": "5YmXXExbyy6bcEwMRz9wJnoizcgpopZVr9sfFNGjKDeACwzoF6XVDiv5fSvZghakGvfznxC9XYDqyXNnFyVVcmRZ",
  "key22": "26G9EGYvZCejYXjUWb2yAh9m5coY66j7ExbVAnftBGakav39njvqmgmyEfs3FsWTvQAuYbz5Db1vbY6FCz3BhTCn",
  "key23": "45fzjr1jfP2YnPBDdVR2bjGjhkTWBcMRbB2zs7NMYuBp94JnrqMNv3RsQ7B8JZ67bvsZxhWu9FBWwJJV3trBxfBh",
  "key24": "67mie8eYXRBfKx21wQV6pgFLw8wA4MFxtYp8Ws2r6jT9ed22BequGuSn92wgXFT7CQrGkvfJiJg4ZNoGU7N72n8G",
  "key25": "53R3Qqj7q9Wn75N2aTdNgrwTs6YNQKWjtwqeWugayzoYKpQZWXPMPdbQYX42yyF8HvGcUtokQYrWokmALHPhyh1w",
  "key26": "2x7qJKErVBH8S3xeewVJ9p7CDp89TghQfq3cAAjtVv7N8urqC6yRj8wqJmf8zPCNL85XvrNLunPf2jmLHBKuUvaG",
  "key27": "3aPgELnecMJihxSupgTXR3qLLnLFkjzZ5Q9PcesQFcq6bpmkzhQ7X2N2HeCsrrppgLRaUzcmw3LChEmh2N4jCvGK",
  "key28": "4WWCwjiGYY1FVjQ5dKhdA1Kz9oRbPZoHZFLawbZpRWoHfr89Y358GZPcVDj45zZ3PwJAFeaaSfWvAEigXgdoYEXy",
  "key29": "4M7gBw2zf5jo4Uf9GvBbKx4Jb9WKaJpvxceem2LCJX15S943rwWfs3ot2R13BVgF6xMethcm3NhpT23o8jhKjd2f",
  "key30": "66pJceSgUsdiQhnz6Ggp5HMzvdN4QCaoLF33YuAfLrnRXzBkaTDxu7YaBtN8Cxe4NXfz8Sojsy9YcuKBuoxTKPPP",
  "key31": "5jvpnTwbhDSvQb96eEWp7H12v3wVrqSPekiDBtTAZMX8f5DS64Vuwcn7MFYudLRubqoLS8wsj6AoHwU7SbnxfipA",
  "key32": "3GH8UY1HETRYBYSfr2GQMPAs416Ru5rJfk4tLSRyG7zPMFgtQmXM6Y5hWZTgjaUqqK2S2rMbXPoh2WVF8YdJSGWU",
  "key33": "3yetiwaBmGmPFZqNRZEHc6nQGkvb5w2wdmbYahVbVyLGWV2cdAKBhRWWHLdXuC8FbThskb6Haxd9GwfV9GRRWxQY"
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
