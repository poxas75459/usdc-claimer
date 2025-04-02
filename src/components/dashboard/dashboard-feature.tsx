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
    "2fsE4hqoXceYCUuvnmMFZeLobYPqgK14pMcbhUQkoxN2mjmp2CiXg5ceKnpKNKd6qBfTSEUwuP6wXVWmfHwDJb6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C9DCLXCr2JXMxioejjRQgFhfjyJs9HwFSw78WqfVuDnyHTktXPDeoTk8eVJGcpFicCwLEi7vftvT7Pm1WTyo8mD",
  "key1": "3ztWWGeT45MT9QWbNPLao4g1feHNkx7UvKHiM9V4rWiR338FUkzoM3QENZhvLivKaVchbTRW6bmsq3bWGs2PKANd",
  "key2": "3uSq7AJcMRe1VsHbQ5fpzVv2SVuMRwr61nXfVxiJMLwxWrdaXZmuAVKHtxcXKnq5hLAYUn91aocx7nkamfyjQzJ7",
  "key3": "5jiD4wU3jRD1qEUNvsQKmcg36XcPYGqbXVY3jiyEh7C5pUnqAkfy7xtwYHY67KdAxw7x7sbWFjFitk4xBbuhz3bM",
  "key4": "3ZEsv1Cef73NkpBFGHjizUTuXyXUcwnEq847g8HGmFegCAopocbkRY7Ew6sv34iy92MbHh7jKzWGfyQ2if3LREMv",
  "key5": "5eRYXC26WUP7azu8AfnZhFnrmdpCjAZAXGsyzxh9UuFbDLA2kmYiqA15yU7XiDPnHK78JreiAG7RS3TdfqjJY13k",
  "key6": "5bGgqj1gX3u8N37f6xHg9Mif5gvLWtTyS23ktL3b7irzKStFd6ojKr4iJLxNzCoaFK31bfgtRyJzurBXvCo4G3od",
  "key7": "63n5J2zKXk5ax8Ne3M27YGKWoEcJVHgWNruyamqcvxkFNTv64GB8tthGpqPBzqY71bKQoxnS2zHsaVeq5FhXFeWz",
  "key8": "2HfCyzcZHxPmW9x2NBRHP6sUWsx24MroERbhujb2UyCEZ6XFaUxiQFFVHGT3aKys8nwuRRPBCXsWSgqkvMtbtdCP",
  "key9": "3XJery8Ksm7KZRUfk6KdLRcygT7njcvBiDjjKH9Q7Y1CoF6Yy7fdLBUyhnQCJXdpy2CHGEBnGXwCKYY2zFTiogrp",
  "key10": "p9EC4M1TTJRMLeYfQS9UjcF4nYLA6AkweU4X83bVTgvfJCoWis3yc5HLeRANqfa8mGqGD67Dg8JmcbrNsCD5qZW",
  "key11": "5ttdjPgSDUU5gKYAxF73MtLhA2PJKZdiW52gLE3zdd9NFfsVnprankGzsdSUX3YVMuQu8RkpsPmxZULSbC1s9xaJ",
  "key12": "99AsQRz4dop8FjcoeLV9k8Bb1gkz6YHB1kvQdYJAZzdrudDhAAXsVjAJpPmnQRKFDQrXWKg15ah15n3zMaaW32A",
  "key13": "3GDoc9pdjS4MKgcmnzaM2rqEr6ELgpiAFS5KU9gWVRX5AiG7eumqQ4mK8F116ZY49hDex8dsxc2Eb6CuykK3th89",
  "key14": "2RyYEJhgPou9iaeQfSvc6mgVZ393jKT1SoMQ6Nr4ocHziYwDjUiRzATToZNEAGKzWq4WvNQLkPJMRwEFqugyvUzG",
  "key15": "4vfW36kX7AnVXMwTvZGGARc1RFCr7Cfhq8zjctFvPdhBJVb1BNguAr1CQokJg2RTYsYNAnvq4o8C5hsYm3WNMtS",
  "key16": "65i8Lfjy7fzacnwQTGxvcqu4Yb1pBcqyJfipZV9UTyNBVmTaRrPtjgE5rtphooEVHZnYMRiGYVJc6xPyCV6wadHD",
  "key17": "39QXSRTBDFpE1WBu8epyLcBzH2CwLqkPRrm9yNjxPhgEx2A2ct8agAuAe5XkXiQQjuwxDd3VyNjzhfPcue6Wm6EC",
  "key18": "3E7AhrRCAzxm4bZPPbyNTdvKQn33yQaNZm8WC2jNWtRRrQbxR4nUGLhUN9jYbYHzjAhJJXmrAxZe6r4dFVxHfrgk",
  "key19": "5JmyrbK2bXFpDM1GTAg1T3wgTdKNADdCQa3EugPiGUgUVakQ1FYmYnny5kUdS9XpGni9psnZMapPzgk2U9r5Pb1g",
  "key20": "4sab7BqBnSaQhsfxeTQYG35mqmCy8VVuJHErJywqg74jtrjgSWCqUTeZkhqQQyeAki1EdRUAwAf4J9434gRQ1zH8",
  "key21": "3SZvouzAxiRDuez3GGC5sPckqZuKX1yYPmKkswcCLCv6cKQUe3iAYwwZNpQMLB6xdS6vpiSfVpKCJNXjRpWNkJi9",
  "key22": "4evzm9Q94wmEstoWt42YKAJUqsVyvLyDJv1ee8ztzYpzssBbQr6vRnSgTcwQAUprQ23SvLGDL76r12yd8p3xXa78",
  "key23": "44evLkJTcZxTqBh3gHYTuQjmuDMUUuxtKbW73EX9Fp99kRQs9CywUaHzS2THakFhGsHK3EDheXEdb2Aeht8jhTzT",
  "key24": "35LKzgnfikGEDd54AVR77wkuG7Yq3UbFCQsDX3XiExsQfbPUkeFRvMWFmpjNvj61bHWpcnSDUwWMPhyokksJ2Rb2",
  "key25": "592bJ8PKHHZQGGfugsw3YzHJuWgqQSu6PNkDbv79dTPwHiopoqghSPo4ubCc7xR14xP1X327iqvzws2yo5CdRCmv",
  "key26": "5Wfi3XHe97Cy2Sqog4Wbn2nkhmxvpY5uMsygQobEFWADy7XkuKdWDaFbuwbPNfiJETgWH4RDnmWTQsu8B5q2D2Le",
  "key27": "4QmiDhZ7KDWERj7TRhMyaxJohBPnqz69G8bEkRJmSwSoUmC8PapTJz11Lmq2BqiFDs2QzyVet98gEcSUoD3DpcoU",
  "key28": "4H92emwSAf2i22hDHNbTQzFs4Mmb8FdAEN7s42tRuwJe8rbSwtMz54Wo8Jgt5cMiBu6jZEhPAASZTivcZVV8qNfn",
  "key29": "5Tj7Dfsv2sZ2orXR3HktT6byMaU9SEiERCMDpuuXFHYeA3G58zMtmd8KnTGgwsxr2w2BDDuTZ4YiwJ6MhV9q5WZ2",
  "key30": "3wb71KUsCct8Se6JeKhtCNEd6xyoeQtc23s3W9kTTWnxUhvgCvAxYDubUfWVMzVVxnwLBGsBbNEW7hXkcgD7BRJD",
  "key31": "51zwXBThBAmKsq4dr8BGsY3Pd9nSpAsXWnPEQzHqsNoVFTXgPrPfGW27j6EkDAXS8KVTVJxe8N77SYRnuxZvNBvj",
  "key32": "HFibzJQ1VEXy1tXSTGEBjnEHisoLFai7rmMjJwoik3sTBudCVjDrBWwmovMmTyy6bjRXPioFADx9ggCHJzT2Zvz",
  "key33": "5TfVEmq5Edb5DGfpWNSheove6hKxVLMj5PLyb1bmhe3N8mhSUXLRKuPCbtJkFuxbi7FDDk1MHZR6Uzj5PNPnkU5g",
  "key34": "ivDwKmKqC2GF3ZcxR7i3XgWj8VFfGNHkMMNZct7nW868Vdm8iqD4GixHgCiYtjwEyYJDRLdzq79q58DJpYwxbzz",
  "key35": "4woWMZWpYCaXBEJafbaLzFr6TTuhb4un3KfvJrpriEKLBjdNfNz9upidvKaKgbrP5Spk7H3gXq8z57tUnhVkubMd",
  "key36": "ifYzc8zSRm3rc96W7jzznFJwLrnRqgTDoZW5WdXUJExbLZrseGxouUy5w6c1LwpAKWfi5fyfBGyyT3fB2mhLcnc",
  "key37": "3C3cKLrDgQs3zkNqAiN7MwW5Wm1dPFxT7sFjYW2PSG1vkMZpZSeCsrXtq7bQ6D7WwB6NWTugka92bnVmSJfDfmdT",
  "key38": "2a7rs8KZQfrwCSnYSmMS4NVVihzx1oBwNHVnnFs2Cyfh6FwEhgB6cjfyUueNY5ZRdbL9bamYVQH5Wdnrmmca7KQt",
  "key39": "4S4YyuDYc49Udf8toTVpRLZi2sUnoMaLVbYHmRyoAFAWrtFhaGJLnJXsEpz7prijMtVYJUWcW3SXetKK7kM41BQ8",
  "key40": "36DjNfmzbU5EFTrkS2UXZ9DdxMka2jDQE1gHHJz87iUaxAGjb3mBnCjc9onsWBHynTPa4sqEWzDbMQxq6kn3vAPQ",
  "key41": "5CYUVkXFoJjkdo8TpsuyyYJkkqXpJbAS58vtUDmQJhVBQvgM9ZpE3kLf2CKnsR9Xp1v7bZ5tWk8eKZ8NwrosJQWP",
  "key42": "4BWjPK2MfhqXKW5hyA7y4W7cA3C3KJ3Lwpr1avKVmjfY2JfQ6g1fWEwyWWFs1xBzq7egCW9iwcqRY7hernKN3uQJ"
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
