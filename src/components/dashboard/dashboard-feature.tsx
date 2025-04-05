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
    "56Kno5itkbAk97fjdZEBvpFvcYiSWwqqGw2CNGoRpDLMATPQaad8Cxw5f2dKc2JYXBZUzb9nAAxDidrZ6dkv3Stt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ndUoyX6Kg9HcQXtWb2MyZtE3cutV6UZoz5EmQ9Po3aHi3YPpRCkYT5ZkMc2WGZE4L88jMU9MLnjPJZ9o6iXBZn",
  "key1": "eivVxpC1oos5hgf7rEwmKW5NTrchnfR4uqtzozFZb9b7kMEe9Y73UzooNFA4RHv78qmKHbvFFhAN49n3Jpi9U4j",
  "key2": "av1H1pwLm7SoPN9W5KS4VRUNgG4mXdbwSM6dRmzUbeap8Xf5gaNM8kmkHHRHztVVe81eny38VqWGdF5gnt2bRFJ",
  "key3": "Etymyejc9eGftLCcz1HBevTx1omsN9PnHe9xB14H5GvfoNikC5dGxpPyCPjiQvxSD9WYGadrSjjGXAT9xxKRJG6",
  "key4": "369k74Vf6JW1KHN5B8VRAJkKAsgUJ5PEmXuvJsbxfXhMHr5Wxv7jWfXXVQKstwU2YfWKiNkF4bxizBYtGFWxAftp",
  "key5": "2aqGtpexSGCGFuvDpqf5xkPDGKv38g2GoVap99zkVxQA5vydtvMMKPyLtDGnAG7GgMhZjoat3pAQEjHqXCo2yWEf",
  "key6": "5DRrtLCiKeZ2XDY1W8Ds9tQvFVsj2hPPCZk24vGSWKoUdJ83fhrLnmhadHG5ZrRu2Tizvp4XpMT3Z9QeQnHDmjR7",
  "key7": "n5fms8jgMTH7UREgxGk4q4yur6UEJtZVnRy4nKgamaGbSxN3KmiyeCSGQ2xKr8YiXxzk6PVtbEgyVXTDKSTybXv",
  "key8": "5MVCSSyeygLyrDZEWPCJG1tJvZie42rxBmrECmqa1TWpSWVB6rWoSQe6extdHhphexdVoKNuxEHps4HYxQG7JM58",
  "key9": "vW1kJ5zvxdBpBMxZHuiPhcCeQheaYZHp3bDZMqkURxm2HwSC8qP5yvKST1Y8jJWnzM5zcBGE4LjDbp7s6HBfbXw",
  "key10": "4b1YR13T32QfeTuoUQj4EzyhCQMiPZVJL2hPk6baKXC5V24Rgh6nn1hSWzfLcxyqtDdDj4AxTYN9TeCwC7qf2ry3",
  "key11": "nEtphaDtgNDpR243ttj8uVHiCQW6uN1pD3LtL1usstepxUAE4ALaoGRMMmU12gu45yn8shMSmtHDHBiWyf6dnTk",
  "key12": "3h6yL8c2Ni4aUzBPiTXDDwqywzfG5cZD7vbpgj947iMMr8RiXf3Jsf65MWv3xX9kXy5rawwyX83HJtDPSvK8bQHM",
  "key13": "B1wBFpb2tvKsSoYgkj8iQBe7Db6c1TtfmQzSAda2tVx3anpbjLbCs21faBoM7WsW6aBNEQATHvHNeZCpBGVNd8D",
  "key14": "ydsSDFbJQyQDY1dy3TT6JfVoEBBfzLwkNqTC25J7Q7ZdyQ8AdJjRZ8W5e2nWZj3Bd8kaBzuVcWju6Xcm8Hbi3Ry",
  "key15": "4a5mCRq7r3pXG4jQM4L6ngoAbdt6hG9jFvFwVGu9kY17mbCy3aZU3FvCpjcerdTV8v69GDRNSRzNHm6nQMVhNtMm",
  "key16": "5QN4xQvPk8WW5xMDM2ZjXC4EK4tzypJvMXFef87iim3VscLiSu1WREphYQeAozkHM3xmPwvhY3UxLXEbdZZhu5nj",
  "key17": "41mFmduMFZDagmEFd87MHBtseTzuCtr6Bi5jDrwNbC9vYKDEkcJDWf7fnKvRfUbZbKcsNSzy2fhobyLxxR3SRr4m",
  "key18": "3So9tjhpJRzYJSgk7M6tZRCdwX6EBVAMhbbUK8h67LfTWn8wFD6tF6z6ynMx1fM1Bto1qSkQxmAnJF3oHJqZw3Qe",
  "key19": "2TYhrAcARwHW7gMDbvb3Kv2pWdssrcxQJpSbdoZfh73oNvQvzMweZ82F6zH1wQrP6yAYM5RvxdjuM6uNCtP3D2RV",
  "key20": "d9z6jZ4ML4RpnvgtWuuMjgYt2LxPZGiREU1Je8wBNp5ba3d717qvNgC17KbJgqptzXT9M4p85uuuFKGu8AEFxVv",
  "key21": "2vUQ9o3jxAJRf5ZmoYFFKY1NeJDCH6qgqjSbNPpoqH4rs1ET73Mm1htiFtkEXx2WEKutc3fJdN9YC3hin91NjtwN",
  "key22": "2MxCmhmMNCauaozT5KoshpzV7jaGS8m2YRnEbkWxBcFdYFv7mxHwJkPdyZd994odmnyz65JDspJCPduFJTRvj6Ru",
  "key23": "3NUHjyEVKK8f6ioEgi82BWcUJBSjXuM8A3oihXMJiXiraEy8NNnTAFwbKjomgtRNdhMDvPKoZQ7nuNaYwZyHacwb",
  "key24": "1r5GUNUhMtvYC75v5NhNgZvsvA24bLTexCv3HrYdDB8sEyp2EYyX5Uyf7Fc2Q8329odJ7MgvHMdPTkgUaBGZQpR",
  "key25": "3RcVgDEu7RHNXEeW8mADkBU7ArRqpZvM5by2t9Se495riQaHXdsqGM9RMgtF1AABd7GMYdaj5U9pDBsScFwJErkW",
  "key26": "4EgpCVGeCQ6UfqzpNSEBgBJZSayuTjQvYLEv6UtxL1JGijsm5FykxcinpD3kpmK68kk8Cny4FP8cxDQy5WswepXi",
  "key27": "3sMNfEhbw43MiSHvkaZZd2TP2A4RRCtt4GfPZG1mVsWzaVd2L9YzCpnYRXXX1i7C5XWuFLyTwgBm9FssK2usiMFK",
  "key28": "473MMR5gUjUaZ8JrPRPuYyQeMHikVbebjZy93c7vT3F7Wz1DaPePoPHJLFaMNKw9XLMfa6vFQMn9UjPyma3nre8m",
  "key29": "29Umm6AbC5x4RTqfKYFVBRPqAJvDCcMnv4bYGSw2YKQT7oQm7bxg4nZ4a4XAr2kjE1h2wm1bDyKJLhUKRnvS3Enf"
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
