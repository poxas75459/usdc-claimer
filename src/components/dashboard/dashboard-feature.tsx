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
    "52ak5LhXmqA35VvczoHfpkjSNYm1fDzZUzjkgR7Hx5s8ZzPbVaWyGtWhfALmsqrvvtRutmpdfmkAFqUeiX6fCTQa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sV3UiNBYgXcBnmxYqEkk9USL7qLKdqCQ588R4QiJhZKs9ECA9XadBW8kMremacQQWRKkCwTCFgFi34F1jgQzM2u",
  "key1": "3rUaFxUe7DDANUmBYK4CgSP3bKfzNHdvYoR1CunFqF93VbpoyLbS5G9ph5BmDZMwdpvGtCwMu5QNSZdpNYP5mixb",
  "key2": "ePMHBTAyMdHWSJ7ZiqfLuFdUg2DpWhEzJa38wHd3vaJc9UhEn7hsaHTeFWhnvYSZdQfaNdPtRpxCQU5zExnPqfK",
  "key3": "4eYpqK5UjpbkHfPfnEJM8XLCFUqbQUwA9de2Xaz5N4qhnjsk8BFc2VXbgj5T8W9PDmfhPu8eHwzqvw3GX3jr17o4",
  "key4": "2GPXatjeyssaZoynGqiQ4ddaNXRzWBUbnZ7VA7aDLP2D6VU8rGWSzY9o5q5bzUGpDzgT6MFSSPKXgYPUAVR7hgBG",
  "key5": "46dz2fDhTgG6v9TBntqMNnrVcgVJfFpJDBaRv1rqU2etUnLzYrzQYKVokWH7uoNvQbbKPsiFhyxqGfHEZqSdwGb6",
  "key6": "521mTNYbf5ySuh88mUHcWMAYPWjHPoBSqcGTW2AQ2gRgsfJUuegPDzPqSfwYqTVpFxSsENxv7ss8Sj6ucGXdpBJi",
  "key7": "3ZkixWysK2j7UB8MKB6aB58sFhK64kWQeeY6pds5K9iAtgZMNFjqAesQADmnqXuJgvay8HMiVXqzWnRi2EzJbpem",
  "key8": "5WPeBdHsf6knesY7QXvkHxFxPuYdSBkLzDLM7neHQVYJUxx4Bx1tahGCQupyUmGdgmq1Lcskategcara5RZN6ybi",
  "key9": "w7X5C6by8Qd7jM9MeUpy26qUj4SBcDNokcuM8BAwpTvcnqJBu72Zj1GkJ4DaY1hEzfnxZ5kZpMG1k2AioLm5CAj",
  "key10": "4kgiE7Wbp9dVR4JJKpFBhCYCY5GQCRZo4L4A69M1k1Z6fVQMYPYZqrinELtCmCpk3kuS62bVcPANyTL93L4dWAs3",
  "key11": "67o5rCs8KBg7f5ujMTHG7g3K1XMWNK6EvZaJzpLJ3EjPmq9Urab6XYE5TaNV6dLCoRaXxzKiPFbsg3YVMRMmM5BY",
  "key12": "3gnR3xj3Nw1S1DLNr6oGHd79gC9VnQ93x7r4p2NVYh4zjoqj9wf4CmsxL1t6oKtz9XtKwrosLpy3oBKicrJYNBGD",
  "key13": "5tv3X9hgGkrEwVYpUHhwenLRw1sYdfPCzGQ62Fam9QHdhSTfWzW4sQmALyxBZhPNvkJNd4jUzomB6FdNaz9yrrJf",
  "key14": "35w1pUcTtkUzDz7eA6XLZQQ6YvLhCPHBqrgSzLNYFaqdvJJCq7oiLFst6fV7pNBekfcbnKvgkG4D9TpBFSkWJQVk",
  "key15": "5hwpb4im6jAxZ34kcXCnHcueKEFiEpqodZg8coqkhgawGWgwR3hCspq3VENqjuTG8YwtGHu93Hq5Qt4kmziC51fw",
  "key16": "4h4Pa5sibagL1VBMz8eKY7RpjT22EbDGim6jNAzk7avfygjD42Lpp634GXLzhRwYchizA5apWjYXztTJhNNtFDdN",
  "key17": "3ZxzxGYAYdFSEpGrSBErM54zzYyrmcJP97PKbzHVuwmyKAhKirGDrDcv3ZU6RcAxP3CjZyDyxTCusZMmdJFHhShX",
  "key18": "361rnetL9R7JtnifusN1cjCDCzMPUUbqeSfW23fHrxz7R1kzoLZjXZrNpenpreJoPzEJmtS96P2RpZn9P8woQ9RB",
  "key19": "3pwENY3rkDmPCJfNyDUVujgkREPnajBhyHQZBXgkuhCb6odBuqT9SyJ9fboABNP3LT61W6Z5BQaTR3PdxoQWmYcX",
  "key20": "5mekam7LDqAibtNMXbNHdphmiotWTDZPCH7AYRv1BSVkXtXKcUm7t25YTEiigx6BtaJEAZNpRJmSsCZgCUKsxpoX",
  "key21": "5CtYn1dmiGZ9TZs8KYHkUYAir2xPZPtoEB5nHptPDe4o4THo9Cs9nNLvM2wSTkiJZKbWKK62XGXonBZHkwebzD4b",
  "key22": "2WVKaNQ2DnrDpENwyQVnPnrA6GGiU9Kp5rQ193MRVHExSXnXa3fpbmYWanmNuYe5Pdzd4j7VVkshrLYFepZ4BHxz",
  "key23": "5MPBKa9u3TxXYobNhpZgqY15xpztePydwng7D8Uxrz7oYwy1BYkPeqSsbSD1HubBkVfxXuJCpDSVNaGFqezgFgDP",
  "key24": "4CcYdApiWdfFd2xVuHDSWwFLAMMHT57srufcJ2fr5R9x2sAiKART8pD7M4AQfYuFUVQHU2uRv3LFkwRdFGdxqQH1",
  "key25": "4A4RHWC5rfk2EU2eUnx92qgy49KRc7GwHxVQz4okvcfN5HVXpNSdSAo78i6SQXxzw6SmwhyRcocm2wbGr68vuizP",
  "key26": "5aciZAk4r2K5nzTyrpbt5ZqQyXFS6zLkHJBE2PSV2HiYWULw9DB1Q9kqsqhVm5mVCEoxbRBVmiLBNBCv6UXjTbvd",
  "key27": "5euBchca4qmzPNhAxc6iffZZUpccUCUsTpybfVgri5uLKJPWaYGmgy24vyAPetyqCT76nPEFLEHdTadfJmdEQZHU",
  "key28": "3iHdvuDuqqiN8qv9uhtYqfvLYkoGBk6yp2MwMFeSW1JWt8d4KPRqM2MYn12n6PEwGcbW9CjuEH9bzUTX6Lezehk1",
  "key29": "64tyKUXgif3GpDRnRv2cteJ5QzKA9Wqa5x1TndyXuG719wj4DgMGXZrBv17MJLmfm6hifVkWgTh38cLxgsFKjPJt",
  "key30": "4EuLHNz5sKLnCZEkrTjmDPf2XLLn14dkHWVUMQ9AhtgCJHJymdq4iHvc5UsiwQrcsWGKa9yoKU6sX55TzfDTmu9E",
  "key31": "4cHwfNiPfyGpx9qrQSCio58M9KdPzFLhUtjdr2secVgZ5h25cBwmjnaCiipADRbETUYseTdAF7ja6SEY8iuJdr6o",
  "key32": "VNFxtwYz6j9RFm4aLmenATsppVTQeTRpk9snjpsF1jeqN4GZ88s8A8tVuMTUzm9ipNQcKEbaY3gyq1tZr1KuJMk",
  "key33": "58fTnqCjSX23oWAHne2wjYjWmAUzefnYGB8VgZtmMqfVCW1GvNT4sQiP4xLGZQC84FCYqfsZwn3om61Z2EJ8NkUs",
  "key34": "4eLWVpjbaSWqmH833DS7fCP5TutgbLPwfuWosK7JKXjGmgbAq8pAXVk2K89DTesrXeKvyegVRuZ8qf6yoJB7kGrk",
  "key35": "5Umg64zXzZc379GPLSCQLg9oQVCs8yPNdm3TdViek3pFchiRGeR85r667b2YWeQdiheCPwkEBvz3GEQAqhSiemrv",
  "key36": "4AnrXtLzEEcjx6rWgmEcvoo5z1YnpjCS62f8JKZRwUEodk82prWE1WNxm57g61RpgMRfnCPKuWcnZHmjHbCN4R7d",
  "key37": "5mUn63fJQnQTo5Mq76rfWghARk8m6NKst3jVWkEid3sNEUAYrRgY9LL1DYx8BE3jxSxu7GFCUWRHvTL4aNxDonwm",
  "key38": "59hzWerP2d3NZSrKfBqXStVVdaXjGBarrM8Cb8GQ9wtcPrJe1uEnEXrmvTiGGMdJsvimtqvYA8NcTv81fxNkXu1g",
  "key39": "4jNaGm4EHtcwZg3ZuHnPKB8jpiGL8vkXjdof2CyYJAJ6wAY69wSR5s5wdpuSyYbumCf8yWTXzUJSLKsxuQyBsHrQ",
  "key40": "4DeaVKnGmUTLr3hVFFUvoeKwr4HdujPrdDc9DchrTBJp6WZNo3N3t6fi9u2VxB6rA7XR4VjMKe866HQVfhqsSnYT",
  "key41": "67TuT8W99bvHMcoHRFkLUvRVoSnXF3HQXd9QWCjAmG2eNdEpNMPjjd8s9qWeFZbvnxs27PRxBvr3F25GfKaPg4Zp",
  "key42": "4KAoNkiMt17gFFKJGPT8ohxGE7nHeSUwkEJM8jTqzHeAHBtz78rds1niu9rYXqM3NLRh1Kzap82nTbaDG7HLqcbV",
  "key43": "5cTK8BRSQXiNcaALFbwzsvEGhUdRcT2vp7F4iGJpgGRFpesbAZSahoeZue6FTkYNYAg51Aj2yKue3spEeL742BEb",
  "key44": "4E5zXd2RGzctWvFqZByF2RDcyZvuid2abAm7CP3wzatmYNG7q2aPhJptn7Vwj2nRvYfWxNgRW52v55nR2XTnvTQj",
  "key45": "4bZumEaTnKedHftXVWQAjKNz77FrNPHCPVHcFWnh2XaGFfTP1Sw9WCeyG1xetGTr7HHSKhvaeVmkZMhKLKr3Hgkw",
  "key46": "nR26LSf2gkxpjsHWWzaSAPQJFWP3E34DVAcZdv6LX6yrZcqgQNRPMdGTrjGzBuNFH6M3bZfnjdY4bVH5SqrtETz",
  "key47": "4qAe7oHqqKzNUY5Y7M4x8CgWjdnnSe2UuGm4hK7LDysj93CJvAuktUDJrUud2SKVeH1nbmJ29Ty7ncLrjFUoKguk",
  "key48": "2FFuVG8DfdeKPNMsjWAuNLPBqKuftRvFdswTdUA1RHw3AvACafqzNVJEmKRt88EWht9f6uh9ezHAzJRqcrjjK6a6"
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
