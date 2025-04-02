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
    "Dfq6uypD6GH2oFBezSHLA7CPbZzwuwvVwa97DkuPyFDtTgCp1B7DTLhM6qdtVEYrR6U4FYYnr8hTRAW5ZRaAFFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t9uP9GBZzVjDpzaxvAgdZRiC1WScksbu8FNTLb2uDTE3hrpWmptd6hgdS4cf5cQdAvEvYrEHBRHbhAP7YnCaTkf",
  "key1": "t8gt44zESm356dGuyTGbLWu2RqgY7AP48b4yoSM8v7XpFnNxYvpN7xE1vbxZJrWhePjJLU5mpy1ivEeySdWNufw",
  "key2": "4gxwxwzpo8PVJAYTePmNWGJfeBWpbsDmmvtsLaeY5qjoJD3X1H7PWGt6CC1yPvqH5rhqTp8iPkZ5nJpLViFFHdmd",
  "key3": "43XbbHoQCsRRELV7cyMCYYKWzKvuPGA4SP77GC8i8cxnd1rmT9bBXh6ouXBMzVYPw2n3V3aNPgJkJswuKs33T7cZ",
  "key4": "2sS7muBoRU7rCet7c27VeHw8VpkkbCZL8dMhzKeprWYfvcthR1qokqkUEKKFP3VL8p1C9TRG2utwZcNB5gtHDdHe",
  "key5": "4QMBGN68eCKZQznJd239dPKgkuVXNgBmD5zeFDSNhSmc8BkWrY28YEnmnup8MmA6Q6CNe2KbeFRtCxb4wErH3BD7",
  "key6": "rDjRytgAV1RHWVWjoSnXBRSKRHArx4TsYxZxKDFRrjLuizwAXA26X41UcCDrRRPxTF6ztMCjsfjYETFCQHqQS3R",
  "key7": "3j1kvpSLN5RjFzgFjptqrC9MpXFzFKEL3By5iaqKBGqRCFocE891y5YVcHkomvsPWwFaqijBSK9cWft9Vj4UDy1i",
  "key8": "51396aNubA9QhpfQPyQ7jhJqHvFDNZieNeiVEEUuDa4iyuYdX3be6xCz6mg6qvDx2yNCypjcCEdmkaXmrX1kwRY7",
  "key9": "5psHeFUvwddVnEfBF8zhSRzvuEkjia91jRdh33DtEsEkSXQu5J6jFvCditMMNB5ThtBwWurf3hL2Bc4cDyXEz7ND",
  "key10": "2Z5nSxXc5fYcgDZ5KfJvcrPhk1Cbzh8U1SzKdaxvPqbvfFMNXDGCMLU2bYvHzC4CRQQyviNDuQEmPrhfzcAMjejr",
  "key11": "RmXH42aCtabavQiz9Tca666Pn22tTdUheDLLiEdNqi6wWn8VKZokyJ7r44zf3SiLRpwz29TLRfbSNHTDYd5LS7G",
  "key12": "3AEbbN1dKUMtHSpXZo6Y9azzkiv6soxMbPcbpjQeMfoPQ8BCdRkZrvHfKJhwkaUsiCSHMAd7B17M6Uxi2QF6Js4F",
  "key13": "2emoQAy38vKWDPsa1jXjYkptoc5FD25mKxB211Z5BK7c3dUHRCopHMZSdtGG5BmtPjCVLyrnaynxy7cFCXYnJUMD",
  "key14": "4hLqhB9HXxv6ySHmrmqDpBoikaTk6yPiqahHTnBSbCJtqJNRSXmCccF7vFtgrNu2fXjSoSeL5itJashziKs3UUkb",
  "key15": "2Cwuczqytq3Ru8uVoaMsYhoZCEvn4vgVw1PTZ9waX7j21L1kJPNv2Jq7kEpFWSfPFs2PHcWawCoLey3oMWbymbZH",
  "key16": "5inaP5oYyhdikiUjY4TMyNoDLz4VFm1o4xQQ33S19dfnBxdvB1NwVyDEvNhP36zRVZxPPEofLAC8do4gcUaufbJ",
  "key17": "4Hs33wRnz3Z1k83m8hkyxSuXbNmJSd1SvvAEoF6wRv4Pt8fgSxUXGywHXcZoNGLp9sRySz2SLsJkFFLuDcenaiyT",
  "key18": "5XByeE1NpQv3YWEQpPw8dXuKEjyacwqcMPajpaBZUZUAfh1oneZfBRY1pgb5X8gkM9WKuSecLYxLkAifBmi4NFLL",
  "key19": "21sC4dYKfnMrqbCLr5kxPLkECsGXBRsWB4b3ofErVQJBJ5X3HhRzJx1mrk8nVmEdEewdShZjnJ4Tgya47WZbspoc",
  "key20": "2i2RvsCCwhe2a6N1EM9kCqNNGpJAWxmRp8SuLHeDifC8SL3LMnA49fLTCao6t3fg9Hd1sH77KaoCnCy334s6yso8",
  "key21": "4n5cxayGVHw3KVvCmRnU393ZZCd7FasBMtMP1LcBAe4d6C5X5q2xQKxcrv3iLPr7DaEYavJv9YmdkwpFED6Q1kpB",
  "key22": "2APXWuJiTL4Thqxzk2baeqmDczJdrGrTuHJatBnnyiyXbybvTAHMuqua1afCjDZY9jZ7CTyyoFtrEvByzGqoDFfH",
  "key23": "fettKDTvJDL1M1zz9oPSVJo7z9nQBiHMoZ3j2FXZvDnp83krrq7dPh4ZqwfMNHBuNKhfmRu1dsi8yfd3WmCiiyS",
  "key24": "39eAaXSo5tyJVLryJtCBJsALEb6vMStGQZP7x5NtDgGdYHgoMyukrhgAsdfYYYu7ngkYxsxuuDpwHa8ei1NuED6W",
  "key25": "48wSvdRJ4wpHgpWDQ1FhXm3AmZVbU9q6MAiBDbBdwRELiVE23XuaCZkpG5tkYwiU8JLiTfL5h7AjJCtiFJFXqW3f",
  "key26": "4L7gHdUPJ6ZRiCoxjW6MCEhnjJE1rH6nwA4nP4PgpCToz7zVfY8gZCKBC7eJtcJk5nsQYdFgbHtHWyXLk2R5T9yz",
  "key27": "66s3os9Ewk1sGhmeizso8Vk663qpztbBQhJ2dW99Q4ad1SdpCMHqUBVaDTC22tB1n66r7Y6Lz9H6Ga54Mw8Ff63o",
  "key28": "4dmk6DBj788xa5weiL7cBhqdchPrab64B1tZfeMkcVmih9cx4b72t1uMwzaYyNorSRBW9vtiHJQ8xx42Lsc1RpsR",
  "key29": "3wLTe1knitn35co36YecJzPV2r3GEWQhrfBKhcnVy2qMg8k42EeemjmMGHy69H9ZyQLjDhXHWVLhDbgzb8AxJzbm",
  "key30": "4croHYoGhjvR6Jiar9X9TZN8u2NDw8pQ2yWKJb8JT9jH3G32F4AzjWkQRtQ3qjgbuxC8D3dhpyeEQgx2v4fUAkAK",
  "key31": "57QdX12WpHMc4RVtYMVAyKFqfJ8XAKgmNANA8jhEyf2FcZsuuTtinfuCDNyb1GKo7AEUJCsmBKwcrcDfvAfRBDBb",
  "key32": "PSvD4css7HwwgRaaP9T5iNKyt2WroSHBw6AbV3aXVmiethCvPcxrThaxdpfmTLmT2qjy8yAymn9fc4zD748t3hR",
  "key33": "5AzHb52h8XnE8bSdvV16bGTZN41uf4yfekNHHvci2tVFKZvATbCVhWHoQerjPJYFcCmLmYxWrM3rMr69KMtdQg9t",
  "key34": "4xHpowXnganLMCBqyFs5KpGGjbQ8EKoXrTLveNERua2hRFF8gZxLJSu6VHYZMDt7DskZWUiys611gGJXc2BwygkE",
  "key35": "3DiWoQ2Q3nYpmkuvobhcN1zqDMkSMqFxqMv5ox1UGfPJzPEWbR9UkVBg7GZ29ukfPJxiZbVdydLKfEsULaBC2sMr",
  "key36": "L8avTYWfrfRveY5zK2Hwapvrb1z6FCJkro4FUi19ZukYi5vAPHFmjvZc7tktf1p4NZ6YrkAyXLMeifpMCfWYx49",
  "key37": "5KsjxGF9d26tTmytDvnJDsdZ8gF3tzH6W2PPcBYCBVdV6Fb3De7Z34mDUKwUX89JbVdBtuoYLfYtsD24MFBHdxbv",
  "key38": "aEB9pjcon5KPudquEvVXKKo7Zxi6sQ4CqUZRvt52Lu3kbCac2wdHavtr4Q4X6jMyKyTcGb2WGQ2RxvzJXmiV6uf",
  "key39": "2affMSy4JERCiRf8e8a7Q9J2UpYPXMkPgQS5wLHscexX8b6raK3DpN7SwjUzsDPTkJM6bSLHCJC6FcTnd8Aby4Ds",
  "key40": "2GqPDdWcJJvFYbEp5B5iQjQVbFsiY2dF5sjEQSZoTCPgBQFDZBfZT5TrkYnZMyrWR6sKdYTtfkxafiyZbpCc3okd"
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
