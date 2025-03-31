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
    "3gYGdfVA91gJwbXQSsGDrQBYiqqBaYC828UZqf5oBq5nkp7ZDfV95J92hBTfqptB9vnpjoX2vffC5SWKZT3wAJaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p3GYS5BpocyCGq5fuJpAreMbSHrDuKYAgtz6VHqYXFsRDStSRv6XDi6WGVr355fs8GepCu8WrZhS3YoVebwqVPF",
  "key1": "4K4stM2N51fUJXNqKU7BfwUoGV1vHeaHDYSEkhSnPgieWpiEc3w93CdfE9x5kWNgJwvogEYiZrhbReVSxpoGMhi1",
  "key2": "5YPrLnffmgFLHcaoKLmj19zXS2JkGaR6vGYnYgYSYhfMmqHho67bpxexbgzfo4s55qU3LzuJQ1NM43Hv57pYi5Qx",
  "key3": "4q8Qc25rTmUBt8rPGyPmUiku5sy6waZCZvSTvEewwtnzFxqvnE3wiUpDQ8p7Fv46Nfnm25Xo1MZfWe5d7D1rPo8m",
  "key4": "MM1tXembZUJKasfviNeGpwvPEGcqiNdojNjESBKF9P6UKE5RiU4up7dp5NnDFxjQccFczD157s1aWi42DPw5pMm",
  "key5": "XUVyMbQYpiyQCeZ4PfFp5SpUEtdL5UXQUrpB1LqmkT85D5APWhCsX5JfJzt9qn2awFzanXSLcyUfU5QrPBwZMv5",
  "key6": "5pWWj9XJz4GnUFFQYGcGPTpi7GHpgM7GaT4pGnM7KENsetuC9dU1wS3iErMTtYk6JKKVSCUX39Gh8hx6gu8ddbo7",
  "key7": "3n7hVZjgs8yfi6jyrzYwawo8NokJJGxfeKuwn4NnJzQf9cp5A3QnyK18nVJ5aRkcaBntyrBAWg5yWtk6AJSuQhc2",
  "key8": "3S3C4zucrLFHvw2Eu5UKqKTHfXWw7v9Gmm8jncEmphabK1KCLZJzT2dCkHuRS9ptjkAaLtwtsFZnp85vWN9FEAQC",
  "key9": "59htEX3DwL2qG8KtdaErKcTE69w6ZWRN2W5Qz863DJLvE1nm1j6xqSLZWpMEcmEpgqn1Sjc6EqF6eVzCkZfopB5n",
  "key10": "3UuhKHmTUhD5Kbuz76bboEuq8XKWZ94huekdA8nP6cABDMTGLicCEHoxL4dZAmzbdkynQFwYV4Gf1PL3QN94zSaw",
  "key11": "3NKbKByP6it9Wet4HuuevLfizjosH91tRr9cTW3NtUE5T3AG3JZnrRAd5de2gJmxYrXgqmoQSx3crDQKmhGdicQ2",
  "key12": "3UfgewvicNHgBuTTbjFLX8GJiNBQbn4nqbiP1gxQt6udtL2jMZyQuQFQ8QHF5Gofh5EZhXQYCvRHZh3F7V7yj9aq",
  "key13": "4nuj2dweoVPeTGSyEs5LBU9cUbkChUdZLmZxtFsoRg6phikPr3wnhgqXjNxWdVpCjCTt8kk6zooyD2Ht5LanKGbi",
  "key14": "5NiKFYDnnKr48Rc6yVj3qeGk3yiyQ9GVMvHi4en2qxJtKGGwNRf9ymPHpaDYimCg5KBZxxmWFA2bmrquDcpWEW3q",
  "key15": "Kb6vDAurEkpDcAGj4DsmNswHACA48VFSHMkupCBcijeejvVX92GaLi2KMAsNB3um8vHgcwv8uBt4fKNmLQ63wgM",
  "key16": "B5CQg8GtpimuBDJuxEMxXyEQ8kvuGuiSokChkhNwHsNZNtGxgx8U62VXihzGBLPN2pkEAZDotWg6YKAiWnoo5Nz",
  "key17": "4gqfXYRe5JDyN2ZGeCnZ57TDpGEMYC8PfkdV7Pk4aikRBGiKk1phAZzFbpGeQ9iMSZXKxJ2D2EWqAZDetj521EWd",
  "key18": "64ytKkB7vMEfK8CVQTQmyfGNWC1SVPQeroq3GTXzAWRxzJEV7Uqq817ACTJB1tF96HjrrmdYDw8Lb6uWD43ysiVh",
  "key19": "2uXmyrjm5vt7Yf6KBSdua6ouA6NmWDmBwQVCAiKJCvW8JPwaBP4HK9LW9Eo8MFSJ7nkFAJo3MmYfoRbJTTrz2pht",
  "key20": "3z96jk9gjxdZoxxxZ4pwrdZXv6ML12VCRmGM2rkePQXQDY7DUsiX3tdZyMgzJfF2YAPzGp291Strzb7G8SQfth95",
  "key21": "5iw8EfUq4prZR9mWLLLsrD3MjVK9R5Fm4pCWT755BUNoDLj2TApLrmrxXyD6Ux5kENJcXdpnScGaj9JrwEorvut6",
  "key22": "49M7rNHKoVtbaSMQQCUKUs8gWUQm5NA1k7CbiFYuUgKgit77oFXHBkMr9duMLSs6XRG7QCKneouHjJXGpMDqhr9M",
  "key23": "2F9c2r2PQbb7YWrp2FrWDe6R4Yz84WYi7sG81iRpa7xD9vuUUKi1dev25AFbbZYbPZyM4RvYY5CQD5hVzt6XCUCA",
  "key24": "2BphKRqNh7hiXmHVVKLgFVnuhC52VmcvG4TRQ5eo5vBqRK8xyamPs7ptZs1jmgetiiwf9KTV5oEiHCWGWnMkPygB",
  "key25": "XJ4RxFig9SmQybMa38qMJUXyzvSosG4evnEzKwU6RfRmMy4xrCe5NLoMKDtCZoGh9TKTFPuCqX4ssVpZFUzPUZW",
  "key26": "42b9BbHxoveH4iGnFieHrsjcSrcAMrcXMVDbgSKqQZkn24X31TmJLJ3Cy285RbFhjyGyUV6AR9WCwxE2BD5NRAL6",
  "key27": "53ZvkpyQohfV8J6wNr7PWaGEyAZnZKkKxPdHrdzx4UohsrM9P4uZQafjb2R4c2wDfas1E4RUPpmMEewKzM7QXHCa",
  "key28": "rEsH4dAmcPzs2WFMmTrioCTo8jxqj1ysPS7XmvJtnpYjNCFPjFivfxDGVMT6sinzib8oZJhM4auxpB8pYqRTbx8",
  "key29": "5xCxik69e4741hG6nskFBUHQefo12uzvqx8DivHSnmGUFoYHCFU7dJgyRDhiMJ8bRhW1SrYE6YhaE9gGMLdQJpzf"
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
