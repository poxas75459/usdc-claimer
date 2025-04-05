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
    "3AWGyP1hxzsq91CRNT8Qnj6LY5kazLHwMo3EaiqwWB37cS5hoUQWNDH3SMPKWRZJ9K2DCn1hb9mB73Vf55pxrysn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39hYb4phoP2CKdoZrwCCrR3ThQbneoYLzot4ahZiywFCxKgKMCC45ihQvAh8ZS7ysLTBG8mbGzJKZoAQDfDDZpaW",
  "key1": "439sxreCCiiTpxPzsrpzWeCURthWjS2JHMNDaSXv1zzZHdc1Y93RX38FL5Y5149yW9Gmkjttcc3cuN1DUcKrgwCk",
  "key2": "4dcL2hkWcYoRL4VzwRhr7p54ugQZPmasT2n1c3aJihDuJnQBLngPwNX4GEaa6R4C78ehfz2in9kxNjENAedEJY6U",
  "key3": "4csXJq7TwpPLT5T9vcZMrUtjvZ3Twhzqv9C3dF8Dj5zszPegACVCfwUSV2gjaDQW7bBtfNi91PuGR4oxfNufbJTW",
  "key4": "2jt86UFJ9VWv5GwAtHPRMDyYFxr1fWewY74qAVjmhCFaqwY2gcEmmGHyBhzQtBA1zcR8P2zzq4anrZxzrGQ8J7Kb",
  "key5": "3gAL6uqaNnu6PMdQjEHHau9DvEcDwcx5ysRtpge7PiuWRry2iZbpykvngrt2yMSVB5fupArdarAHNWCNVdQXXZ4h",
  "key6": "25U8N63knRMpzYUzbS41kdenGpQbQiHqwn73fKkt9o7Dy1csk45HoGp622MNjY8xTaECtMZUQNX39t2wi3axJ9bT",
  "key7": "35g3wD8zEg5168g3kfQSPchFpuScvB5uytW4j8J1H4uys8PDawqGUYau9p4NHoRebMU1Sgr4TPqKj9pqxR6yQEfD",
  "key8": "4oi7G5BYKBMAYqDKDjy76T7YFa5WjgAJKnBi141zw1k9m26x7K6NzNcZs8QdyCRCfywAt4g9k5uSMYKAdGQNviMg",
  "key9": "5vJWoWErVWyJfLEHQrtHGKjV5EJmGFtrs7TJnb3UcFDGYHCEMbszCetvr3na7asb9GfdpvLQ1JnZcc5K54xDSG2",
  "key10": "23mrghi1EPDe8XkfMB6HsVq8xUotxfz6NGYXys9ftmsWpaSGS9LBmKcrv32tp1oK4dBaGksnj1iosSt1CbPqhjKq",
  "key11": "JnNw7J9ogZ9jDD6PwamUuiqxEC8CrmHkNNLfFToFV6w1p9oScdUtQ6NeUkBpiaHccEu8L7E166DH42NxQ79rSmT",
  "key12": "4957aCumryMdjkswUHqJhhgzKAbmrFXfpycGpVxgJ1zH5Em7Kqbe9FBH3zHtutGcV8EddLuS8nuoPTFwxqdtKbW7",
  "key13": "2uaKr7CX9bZmYCA5Gm5uAahbpWkYw6ULYp5VoYhpvdizELs4wrNbY1KbniC7iPqjocH6LuvoZzxXFc2L5SDLgM6j",
  "key14": "5FSkmHaKhQsVkNtsnJd7BHa2HpPyWGuuTBXSxiWgh5e4nAJVPs423dHPoHgtzr5yDfuoMqD6azzCy4mJxHRVEPcc",
  "key15": "4iuXhBT1pnmHw67Ws1EYbF8nWhBHtDgfWYFhv93CorV1E9JKqaUFknWpD4W2Xa2wZo6i23sS6Lb7qqDCqmqxB8JK",
  "key16": "3uzXy2rLD8sDZe2N9HNFyjj9mbigJhqTVQFcqFzHLbNdYg6euYLBh9ftXJMJoNWBv3TBmAhQC2bt1V5jyrPsEroY",
  "key17": "2wuVp5Lfb5rD4R7NiNZ2wB8xhPvJPUkpEHRaM9ZBtqiqGEj1Xdky4HWYB7eUwW3kpLqaNgS8i6BR13o4nXamW119",
  "key18": "mt6a2t65NDKrJVcLyiYziQCkDRKKycxzNnxbtK7kBZPFVxz4ULHcxH2txjufYDrbNFmMP8VNKhQRyiwfzb71RAq",
  "key19": "39Q1uAUE8eFbqXmenp4sDqmt2YVW5MRcx4P7h78ZEnhgJd7jYFhCXzFD37xHr9WJG5Z1PPznNvM6Xydr5WXsVDkE",
  "key20": "3EAdXXkEKif8E6A7fxaPM6qLE51xMrzStR69Xs1sNkaxSMHSupkr3hRQiGigAzGr1bTVuLMzWB3sTvnkTLW6FchZ",
  "key21": "5DvcdHSzyyYrnMhCGLNeVoaMDtLkwK3vFWyWGMH59NhKeM7khxTPiNKgYCmMPZe8uGzR4PwrzNcLc6NhcbFhYvNe",
  "key22": "21vGzWFbKMun8g9EtEmJAEVzpSaxbAe94685mmTmwRQSnBnBXg64Fd26KW4HNA89Um2fekJD4maQUkfYVmYAd6wp",
  "key23": "o7gmMiW1JTa8EzdqHvFCdAVXGV4fe5scYp4UAcj2bLxWBMh7d5jnMiNfp7zJodtykWtTRGeG1xV6wL7Pbb5EEi7",
  "key24": "Nj44ZYmjVTcDTceP6SP3tZSTFGt61FbTw2ReQucEdVKRt4HAnrhGn2mpVsKeQGaPxczcQT2rq8Co6NrD4QY3Xre",
  "key25": "ZgETz5wj8TJGLguXb9EN7BpKPPryihio7UwGXZGq3Ah6HrouLLHmzu21gcF4Dan6hosrifFYjkPRHJuSb3C5v2c",
  "key26": "2fYiz2qP22x33mm6YxqGtL6k1uaLxdHVj7HnEhUbB5m1JXL6o1iFCuP1vCaYXpw1FUEqvn54KzoPsZAkFwz36yt",
  "key27": "5n2759sYYuU4bq9T8j2DpYrTb7WiiuwQ7aUrpb3uQPmgsuWkTT2CeTuDuDwdwb8XsNkb5HjRYQxGAhZha6dbDpwJ",
  "key28": "5xMeYXqwWaCZad8uzwd2Y2RQr9Mf4UuSzG8VyG7XW5HWCddxaYKSJFAzRpMzvWesMUvck4VgCqfqER2KqtguVWxY",
  "key29": "2iPvTYotzn8LMQ8HFRVmaU73syqhdeEjEJz1Y3y812MgG1crr7v7EYVcUjZBT57LjSccktxfpDRb12ZqRiU6Sycg",
  "key30": "4i383w3xKPbP7NJxHLRQ6uCoRZgdu8Hhuiq5ELWB6PnFCs2yNsuoB95PhnsC9czt1eSC4hK5Nfq3rDdFpnnXDVGY",
  "key31": "4TZfDt48atjHu1TJHCVkVp3YUYJvw74DH3HKfhGmyQ5V1KrPfFsJRnKVwYrArunTpfKWeHKztW1bjqRhZzTryyHn",
  "key32": "2Ecv43SGq5EbddkLvWr8FzV4SYWVe12nWpJcFDq2mLwCrBRYeGtPnQKcRGvhKYL12UtowuyjiuG74JPSeBfpx2Lo",
  "key33": "2WjBPXTBvuokzeV8totRfdhjTQn6hnyNs6DDgTU9irm4WsaUSXz5JSz3Tcrkfv44T6Kxa3NGCSKJUharZWyUzPA6",
  "key34": "3mbsdHymokBAdZAPbULa8omA8mjB8dGExHiPVAsr7JUjNgCRayCJNmeYAfr4PJs2JGypC1znuJZEe5LH4J1pcBc",
  "key35": "2jXVpvafnhp54HSDLeTLvujZ6NraKmxazRCVMKKhDd5kPzUDN1GSMXnjJ64xeTGd5Ua5ZodVePtyEDEJbFZoiuc",
  "key36": "5ASsGDQMehRUvo2NQmMazEFB2j68Q4vPrqHL2dLcshAhcpdmMPUJbjBD6JA9TuS9WQsZ9BbobbJFKC7C9AXSqzoA",
  "key37": "5gkk85fVB8Lzn6hVkAxxfojm8tSnrUVtXA7bkTtxJgp2VLjTEMdfmoo99uDfiUhFnQnbXrRHiy6pZuSJHgcpTbrr",
  "key38": "7F4Us1PshATkumhV83A44KYg1jA9cN9Yw7uSUjQjKW3teQzVssVb6X8zhjTqjvqaensgy59BG3etAMAneiLp2vN",
  "key39": "4sBkdE1oGSKTUPJfXMd7y11sGSyCUAaZ7ejvJKCH6Bo8kBMyjwXkjBcWEarPFJKwTCQKq7MRpcRG2qs3Cn8tDy4c",
  "key40": "2UZwsUZa1sHAAv12FkJF8UHwxN4AD94ETxZTRc8BnBYw3EtFY5x9BUh2wq9a5bk4XcCb59fZiV7ECEnwEt8XAQi2",
  "key41": "2EeLN3MFQd9RUeDsCRqfaTsUQYZJHHaBdxiyKsY4qpkSdY5F85fkpJhWe6fpdwRtw5SMFKxJw7ksat3oW5C9v9aW"
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
