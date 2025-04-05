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
    "v6JiwqBCDhXhKyMajWn2TscjPtQhxGdx79Cwf9DoMrKtRj3kq3prkd8EySxqiivVUXzK7tyUbKoKvqreoKHJG91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oCeTihxR85Mnnrne81rN1JJfr3qXiVVYaMU3tVHmL3J5qqGjAC2cTVG1YProtBV34L1We2vLxb5vRNUHWDNG57H",
  "key1": "UgLTTgF7DntSmnP8qrYJWu1SxBesgsXuFcJeNRK4Uw8V1fJUo9pmXwv9ke51aqQ3Dwyk24kksNJqT4vqJomocTg",
  "key2": "2HMJ8bsvcFHa7yJAxMuxkMqd7PzKYt7dMugCT3oMXWaypAddkRQcb5f7H2wJZvb7xiu4JBVuHki2HXFnu3XMmnbj",
  "key3": "gubEfLyPVmPkH3p4BDm1Bhzwn5BxUTeEZRQs5PiVfo9PeLetAzpSv48G1GrsKorcsJDhcZ6uLbVjrh4PJf7o23M",
  "key4": "rbRCAXhsq3yEDbnWURv2wAeKWS2pjciKDceFZDCfq3CbbHhGh1MFshujpM4Y1UTSbJ6W9e8W2KRTyJXbz2zfcwm",
  "key5": "5UTnAnzpP3PT8ckB13DPziTFb7yvghUudbWpujnXT8KscakUUYU3To9BudNik35R48buKDDrmVeaubLPUHnc5z6r",
  "key6": "3Tv3fgqxerVxH3LgqonHDR6DaiDAPYvJVXqZ5dum3DbKgwtwFBQLfX4hHcagYSWX3g7KzyE9geBw5FW2HVF74sLT",
  "key7": "4vFiYvbzk5ZxwHVYirWLtz6rDDm2VC7gW3gHJy6DjfT6cnvaVYWD6TgsHvtHwW7tqFzMzxmwCF5Q5Pdu1GSiA2iM",
  "key8": "L8qGmijpfkJZ2c2sNpzUdc8XD9VY9LA2jiggf1t9i7gEP7p6hJ62zZE1s5GHqnk3D7vWaq9eb55jkbh6hZg2u9a",
  "key9": "4byNM3JpTJHv4KugZFkqtq8uSpLP2h3a617CGVvDVhLY7cE5g2ur5uHxcRrMCsN1AWJqXWCBMY4X3shivEeLbHrT",
  "key10": "VUNAJkq5jYnJ1B8ctT61vaSphfUwoVSFkhak1nvFwpJ7K49tbMHd9SoxupEe1EfKEoxPVk8txNS3dtPeZEdro5D",
  "key11": "51kaS2DRTSHDuSiYzEGsG2d2d8gdu3yHyMJ9M8Vn6t3BrhfNcxFr77rTd8Mh29biSAaJsVpJBV9u6i966CK8ep6M",
  "key12": "5fu3x5Nykn5FtUpy5ybN8EXU5MMqHGkPqfnUmadQAWht4BYN7eCwSP1WUGnQWsXAcRTvn9ndUasM9by4Ubka9adj",
  "key13": "2dPdCumADHwhRbUK2QBFZ63wW4SHpnm97YekMvLwmPWyE4sL5a2CJHUiKqqhUku3jwAGfYmhPEE6TW5WULcQGpGe",
  "key14": "5L2QFMZ5ASmUV9NK58fRJUHRgg3EiCK8aC7Vbu3x3QCFd7Y7DrUSKe5AMJMXoRTjYVZtFB4aye93xhe6rFf7PgSS",
  "key15": "57SjwQRPavnjhWmK9Zrt1KGsqSqbYLj9hhQKYiu1joj52Fi3WjABqdaZDz2qWAPRwbZsJdUqPMtsUszg5DTRMBtK",
  "key16": "UKGQePN9zhbRidksdheaqZvEmXo4PPdXppULatc1TTnvj4ncWUthRAEeThyRn1JJBDScZcscEP2iHgk29d9GTTv",
  "key17": "57jJurypiBzNTeiAanwWwwLqix2VHyFBrYbg9Wt5ECFsC9NrthxgjQvSDUSC5r99QLQjKMy7Qc3kxF66GEwANM8k",
  "key18": "2EVLKnpQ9i1D6kwSWMMz4d2mN987KSuENpdx4RPrX5x5uYzoMJpDR7xNwsY8wzJyfqRFS31oAagUhLxSzxXgpaET",
  "key19": "4XR8YZXjtLgaLyt1uvAprHaJybKzdQJJ6dfREwWeybF6c4jFWHJ5o1XCcHBWs4nWqBbMfPcce2SHudK3jaAqfWuB",
  "key20": "4AkaozymGGup4dWMucREddFvRJ6c7zjegbiiBsS7K7gzumN3iynK1yVU28HuQBoo6oZj2DeNeeDhUVRTPhUDg7Pt",
  "key21": "54cnhNGYp3q7Dy5M7F2SHHWCtKhFdremjbJjvbzmjZSEjH6YiMiD9EVyAPbQFoPiBCLGZ6ZneTsSC7zi6s5nLULK",
  "key22": "4Rr8e1MayRWg4tjxFNcQwj7Eoz2JgvM5xmEbxy6RbSqeEuXwLvXN2DE537ETX8zC8AFLZgbbS57dFj7gBe2rWfD5",
  "key23": "5HioNM8URNwuVE5AK2YdqFkLjZG9XSQnmg2qfzWY75nMBuYHKZVvCiC3LpiHZa15hXt3hFk82Kr2cjwSrwcTN8xb",
  "key24": "2bDBEdNaBoWPaM45VnCWBsVMgc1h8yKHTBcKBPVRWXR6A2xrhuqy7837waeVYEbmYwjRa3K7zgW1w6zrve3knvp9",
  "key25": "5JDZqa9rDaBcmFENU9TdfngyBgPRzCt9jsfoonDgzc35QhRfK6EhxKv7Z217aNQ4GTDETJST6CLYDz6MSkeguFiD",
  "key26": "iGcKsYYV2Fku2hVNERUa1zZxEgXW1Jmdeh9q4XxpMZvm7YtAe3QwNwBLsbcihkTGYpGxaMFE7rxozrCpqXnADoH",
  "key27": "3QhSqft94LPmiC9EZSaNEiGKQaACPnN8MEMMTQyj3JfcuvuuSPghiG9aKncWNz1xdwnFtvRD6gUq2iW428QbM2aK",
  "key28": "5XyMz11N1wnPU2A1nVHmeWks3c25D3YjNL7xHwaWbY45JffigMdoqT4F6PYvh4Lq48zFv7Fd9cHzSL4QXpVmgNYJ",
  "key29": "2kSvBUzojs6PhEoTbh2TG9AeA4FxAWRe63QKWG7bZikhYANPfKwjgzjgF2EsyQnEQqN6feSikGthKQMLue3pHawx",
  "key30": "QZVVHjDFf9JXCEVoDGy3wE8mppKx7UPQV9q5fBwPCKKyyVwd7EisJFo46H3Tu77CTibEwmZLjMswzdepQcH3sb9",
  "key31": "4N6E7r62edRGrAXAh8cyJLiMNykMYTgqvuy7teS5nTH6A47ZgZmoekfvptW8s71voosPvS7M3A1L6TNjain4temZ",
  "key32": "kxqABhiD84qFZ9MQwFcCmknUWWxKJHBbQmhKuuCzDmn9k72UKFWfkJctdRzVg3HKJceM2v7DahTVFejpXgSBqgs",
  "key33": "eRMuTMP7HJdN4i5NCV3nKjxo6Mt5EFYr37rt2cyxcT7Y26CPf3BZkyWpDK45dWaNux6yeQFS1CYDgVLhpY8rn8Y",
  "key34": "4DWY2tnjrQYe15h1GaFcUtiKHi7HuZZAXm4pDTgAxZuw89RN2sLbQ2gH4NMVbA12VN7RUAHG7F7qzTKqtLHhrGEt",
  "key35": "2GjtW2x4kK39hBmkZjVBHMN8RYCW8G9Wz935GpFFou2P7vsQzSQ3MwP7xmjDjuDbPawNfsVivf8ZQC6PpYaQGPgn",
  "key36": "Gb5ZviK32vRCgZDp84mq5wJF3s5BAZ7XzdbQGKQ9qDrcdVwnZnPRze4jKTZhkKub7Bte6cjiQf8uwUYWwcdfMEU",
  "key37": "qUnJcKt2LXWAQYoWDHz5ZPLeHdFdSY1kNd7hmkZPnSgNGX9WsP16PDUcTCRUJqvN8KQbJqMmffY6hhkroiLu19f",
  "key38": "5KhMqkQDLb3kW8ANacBveqrFFZnmPyF7ct6RkV36xEXyNoc3zwiGA6Ee3dtXceRAxiHk5bJe5VDeUSBGeu7CfUm8",
  "key39": "3x9ND6dE8vKyzEYDnfo7Gin98osxbCWyy1n5YJ5pAXy9Qhg1E184hNQCyN9e7BbUAPToeZQrDmTTWCuJpFthciAv",
  "key40": "3K2y9aE1XG2dGvpPKLm3JZy1NbkFw33jaQMaFVvx9WQvGFqtrfuQ3dRtw3Fm9w46JU3EfzSWLZ8DbM4mU29YE1XV",
  "key41": "5gtjJBJExTitGXqWrFWxtcrhpzXqVbvUAMThReCigUWc2wfKyV25rv8u9NriTey7T9q6Don6tz8oGrMCEQfd6ftY",
  "key42": "4R2LHdy2yhzYFAU3Vn22ofUfB8r9MJ7wS7pJFGqFHBMH73zCahzjpfNgMozZmsmECQ5p8caWWJksr1ner6H4u6D6",
  "key43": "3gA3e3J9vH7Pnhjv2mUnveky8AecFJFFrmkCsmYrW4x83Ewc4vNoMKMFvS7XGnfkuYzqrEXvbYjoz7TZCabqEpAg",
  "key44": "5C51Zkh38zMh4QLi9za3jQ1cPZA276XMMXyEcUdK8aQW2kjh9NPrCsb9EiRbV6V92axhTkc9ntTcwfeeWX89Y5ee",
  "key45": "52roKFaSJcxApX2VTtsPKFrfDRmsZddVzUmd9qJp82um8eMLzmfduWCEBT6bUyMozqS3dUndZja1GZFXQKNDaxK5"
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
