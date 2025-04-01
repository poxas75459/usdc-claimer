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
    "31CtzV1a3YDzAzXnoQgSS5HHJ43jVK1ezEGGHaoGJcdUNgUtnZMXVULDZoBnNfV3ww8fTeJWngs3xX9MojjEmJpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FP7eZ7LRTVp58kySdJ8UKvXb6nPHR7tRzgrR6S4Y2ChEUUyv35c1bqEGgjsoh1MZdgsHFvNX6j6Z1Bve8kMVxjw",
  "key1": "2R1gPYyhmbGRRHXWpK65pmQJF4Uf4i1scfjXAG4JraW1kN4ujYkWuVUr9DE28ky2NTA1rz2u7CvsME5AX6kayic1",
  "key2": "4hdGkSyzUe7Tt9s8atPKQy4T4M7HpTvQ12b4gb3D3a8YJkKmwj4pUcBFg5WkCZkjC5FXrkc7Ujhnvpc9CTCLfcHN",
  "key3": "2fhTgBnzZnKSLDNcUKr6ogsqbSdY2GUUYcWTxqYRjHrmqze95AUw1E7YPt3Yocvi35EZ51T8GWnPhahUf95aVxaa",
  "key4": "44suNbM6YBvHPqyCeVynE5pZAnWcDBNXZrDtYq4xGhjRspQyECzVW97n6XKrJvySAYgyKMAkjud712zJppK72GEJ",
  "key5": "65Su39We3iCY1C9tgD8TAvewHL7rjPtznNN77o4syJZjDsxYD8E1oRMiB4V1gaWPvo7XJpq6So7ByAfUuUKEsj1f",
  "key6": "32xTfGKfzNwLtLjMbhMq3tz69442d1zBaLhDgsNbPvNdHhWPspmz1UTwLGnSbP4ixtKisBgAz7LbuRCXPm8cXbnU",
  "key7": "3DJhyBuHWfTwbAZGtPzuc7wLLJH6ZiRizvLqBrhurkYkVHBmngmpEKqhYJdZcqE1xAWp8xrz7ucsrGDuabbePnRF",
  "key8": "46VrnqbB4wRLEZrbh7NGd2iPKjhM6L6a8nwzyQiJoyRHSExQxWsjyJK7jXW9ZqBLFUQe2H8yZrsTLNHXutGjKzyw",
  "key9": "4TbJ5gbbrNBmMQhrS7NbynZ836Np4irDUh8Mpt22EadJN2MhSWr8WV9YPFbxjSN4c1butNctxsLLPjbPjsYHQb9L",
  "key10": "jGguaZybQBHuEcfqCa2GJM9fQGz94dQbY9ULK9BbpnvabpKXxw8qUCfjRJWHauysw7TY2xe3EK9Wq2R57SALgQY",
  "key11": "3C35zeGdSE7s6XTBPc2pCpJ4BD4PU5RADnuW4DPcAYtBbyZCRiYD1jU2wEXAuxXdAgrmKe3pVUEt625qFpzTa7Co",
  "key12": "52Vw9qng74H2D8NHG7jy5CiLkkN3CHgrjjBUp4P77CoDbgz9ugrfrQk7SueCoKme9VGDi9XyLBhzZdUYUHwQMVMj",
  "key13": "51HtQr9X8QkUHfRfDYEh9PSqLxUeno5PUXoUMBzy5HQPoFrUofCJozpdnxTu5VdV5xLDFTfyg93iWxAo5Z4aoSg5",
  "key14": "3uLVjnnJnPx9YBHLfCQD2pjP6nyBTN5TytTnfWfREcRrXe3RARnHF6pGsKwWvFegNNdJ3vig41Bgyd1zC4CmBoQM",
  "key15": "658A88WF2kUecPiMev3T2vTMTyii7C5qX99vtj8nkBisdUcqB4FUFsLJBwDoavor5RTMmxE3qxYUoEedkeRnbRf8",
  "key16": "5MrYfhAbS7BeDwLv9W2hbSEVHygq3YYXEnMQtyCMT2kFjToiqYpJY42sdLHPhqhFNocBFJKLrVBnZfoDYY4RYaL7",
  "key17": "5GSkqe4eXjpfqAHMDi58JbgacdUAHoSWNTAWaeLXbGaAaNutdA9arY1W78PeA8itRTLEuLht3GwgMS2TcL53jYxQ",
  "key18": "YMvK4TxefcHgi4iiWZUZhrL25ToHmRsL16fp7gHHAzcqoxdPj6By34ZiCHdGkazPsxHgRRSrhsphobTaWp8Rxyp",
  "key19": "3x7G81QbSpw5fQJkxqEKbAmUbDzeMQWaQxhqg6GkrebSNnb1EBzCjM2awph6z3ycnkpFvio7bLCxGn9Zo1QQdCZS",
  "key20": "4t168KTD8eU9jqo9EnAGDkPv4vWmbTpz24T6Mi14A1D6zfocp79xKeNEX6En3t3mSQu8QTBaqbBYrJ1fenN32mMC",
  "key21": "AFosqfRR28S3Zf7VKb4sWQWSpZFRThASybMMYjKYVcN8rMLQpUvzWQeHvD2UpYpuWt4iZktfYTgucQEaMh9Mov5",
  "key22": "ooAKyU3VoSxfNbUyokqGo2WtN2WETDoCginuA7hujkRyWiTsqMUFc6Agahvw6y8UeSgHXPmKyBYynMD2i3bXNzK",
  "key23": "42c4nBrS4y7ui8AdchEFg81CRn9BfxFV33K7ggBobojK9KwZzZxsdKo2FqDBJiZR5ZG1EX6mwh1YWNw5npMoj9Lj",
  "key24": "45LSPteGUUaAWKq4C9o5sp8V6cyHUgboGP24eK8LB1nC6CM7QjuXwC5Eefi4N3vyM45tit2bhNzME6GbaGkgEk8F",
  "key25": "5o4fBPaYQn2NU5nMMuTbrfwnLF62jWWDKXtoLUS57cdcRAxMh4MqvBroV7kc3KUFTXZAPLyVnndictMncDJ4JFhe",
  "key26": "65XZnP3Xhxu7GG8SGDq6pW6ibL5dc2zXFzv4rkqeZuwDfVGyzU73SDArfiHC4rSg6ymxnMwmfAcm6jbygUcaLUFM",
  "key27": "5AURTzXEgpioCaTYisapVi9bLWj2FWmPzH5NNUZsZf4EuFrrQoN2cirdyzZR5gqiWu7Ws7RCXQnUpisbmA2jsxUN",
  "key28": "3qD48n5dnDJkNZQbyQfUeC7BeW7PxcuwuuKsBWMWCu4qXGyppaBUmSDqcEcDpr3cLkJDHimckd3dxd1xiDA6AkZB",
  "key29": "868Ph5h6GZrtHJ5VwzMSLEYRguMd5fcAWo8VftxvzSkkGJZNHeCZmWvFweK5i7d6CTbVjNfBTK5sJvmRNQ1Z9YJ",
  "key30": "4harVYuA593ngobN2tRb67uZFrYZM3xqfoT3hk8P2HBW4xztruFYSU9uhkZje5guZLgzisu43kYg4FH1jXnphP8X",
  "key31": "Y38K3muKtKz8UXbLKLy7kpb5UopxiPCWoysUZa9cR72BTYPkj82dS3U4PVPh4bqsy9dBxKoVBxyCvocQkYMQ3V8",
  "key32": "5bL4AT4GgZYYtA9EuJJY52bSA78cHf4wiyBwxHURvnmk238Vq9SJR2viBREXAnqw2Uw4RjcHm5PCEFxMp95KHvSM",
  "key33": "4nbb8YhudMM8KdQ1tGJMPnkoqBBFAk2nCbBhDMpbitgrD2i3AnhsQ5Dec8cRdDKbiKSSgrEGPwBio6s955WCP2c9",
  "key34": "4Wzien8Qfaw9zqnc6zkqytJMqwf7eDGKRKYEvbriFtFKNZm5Qzs8sTp15KYXAuJkCTJ9WGDRvUQVxnW7dSTUS9SF",
  "key35": "2NfGDp4YJq2Nut9bSN2YfypT7wMjr7VzVT1CYLNbhkT7xdQ8kcAHn5ebdsDd56Nb8nEGaLHEC8LfTi2deBnuMD4p",
  "key36": "3Qke5PXytYmmUJsZUMBavaC1yMTnhJe2nE6jCic7HuURnmti41FdgTKFJW9ixfR7u9h6oMX8VBaQtriFMwrQNFzT",
  "key37": "26iPzWoN1Qw9RQL2dZWUXpKUU6h7wx4me3jmsTogxTHd6TFJH8sS7DH2pSj9LAH4sUsABDtiWXMJvrzSa8DaX9d6",
  "key38": "55XW2fZrz8p5CHp9722yuTxEn65972FdwkEsPFrdMGnHj3mXZPdxMfawS7K5tfPSb5a5GJjMNWjdcRkCJWhQuD5S",
  "key39": "5pkLHAdGQv2mmbdV7PHgr6YaF9EhX7q2bg8KNPhgHcQZTB59mUA99T3EqoWMfkVLhpAXviKSgXRZ5qzkayfyCdbs",
  "key40": "4QouCvUw3xMyvk3BBbakpUsXps9QhJN3fBMa889wTpXScU1EafRR8WpPdSjWpwnVhBdAH7DLnuuTjvsd6zQnQu1G",
  "key41": "5oYdTj3dehadjq7YU1w6pTD9W4LpHJAxzFdYcGbTmLVZts6CAZ9TxeN3hZiGYhVaAg6Eu59oCg7Lz7uaSdtSBSRC",
  "key42": "25uxhFEmPD5eWGviVte6zrNZ91D1vSSMseX69X698wvhidhvNG9XrkcrgKBqEjnLccAryxriTXxGvenwdTdckWob",
  "key43": "4GUQbTAWH2XX7qYHfSvZxFvbbfCkv6N7wrGU82D2LAKAy2gKWhLGX63LtRdBWrPNmYoeEwSNDszm382gerZYqyd8",
  "key44": "wqe5F2oMEQq8gM4QQCsuoTVSTYPmtN98wZJxit6S2ioUqJQNyru4M9eFAdv3yg8c6WqHh881RwgTPpTSAHnorNk",
  "key45": "66wRZFTifEKsmBxQTdp6CHzQAQcHqPcGpx8mkosnAPVnVMiTQkJhjKa22KdrZbL3a6PHCjoLGYopXJjusmmfssam",
  "key46": "537qKgKgRiJfzGa7zzHQ34BgXuZ4fYzCkbDWpw1zvSPifpEvvHQtW7RC9NPAMxbe2Pug7qxUVPmcPjNzF9wVwJNc",
  "key47": "3aYrn4NvyizqRMn15dCHbic4GA8HtzrUEo9Aog6xhZjm2Fu89EnVzJ33pwZh8EnLPMMLmTntJdBoRhwjsuxxas4y"
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
