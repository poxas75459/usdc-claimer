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
    "362G2tq5yW63FEQU3P2oV6Q8Zs5JrSeanPKvJjd3QnBeNKGQ4sRbmJqrDdSifUd7g2uQc95keuDyKWj6fCT6Laux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NKNmyoVjwmbqHk2JRH1qEC2uqTFzfw6H4EDjJZQEDxaJaa1dxgepLN9G2TYc2TMdir9WvDf3ddBQW8eYw8ibi9H",
  "key1": "3VU4Pw9f6bJX9WWQWbvhc3kNNNKKPYAdPcHfJ8Mse8jMZmcsfdc6LfpNFozKisfPSdQJ4e7b13qRuSe6heChPgCo",
  "key2": "3S9oTHBJq6GZbLY5HMWw1YGxWkLXCcpFoWNSpDMaCkHoTVjXFCa55cJ9rphECJpLJpUvaF9uiBbcv1sLVebV3GeU",
  "key3": "4peGzQJEXSQ86qTSbtmj3PC24WvuEbUkSG9cPzHRXuYpPe9F7VQVeAuS6esPU8qmc2vTPEGjd3UP46pvTFmwNeTS",
  "key4": "4PWSVoJW9zUsjYGgHQ2fEfo6omyYSbyJwve9xqDxS9NFnHaxUu4mqq4WexbKYHiYoB9dGuxDs9AA5UkUSAjS3CVN",
  "key5": "2i3s9vqZPrn2TpwFCscMYvDYEL17FH4E8LrwcwZeFapmPy377spK5N1hSxbgj6wuZ171mzk1YsfyxPC3Bz9NnQbQ",
  "key6": "2zWLABGo2d2uqs6yxXVgqReSeNkYMzeBHSiqoM9YwG3KiGxi5SDM4NsdkcArSUABSn8s4e6obhWiQyTsDkf9hUJt",
  "key7": "2uVE8wp1wqxYMnDQdDWQzKGyDfFi14CMpGqEhiPgb3Ur7UV8d1Q2GMFdmgtAP8UutyYa4PWuqGcV42jwpAcbkKdT",
  "key8": "G8hkfWJX8tGSFy7rdsYs48kUgX7X83QVaxpDrGA8LDx6KYzkSMM4Jap8siXNMaB8iRu3YiQUZiEU4cyibC8SiJL",
  "key9": "4j9drMMxRyez6qoH1cbCv4FRiNCNarZmAWNBWfqj5M5qA4PgE7t6NcEdv3LCVcmKARfmApSjS85YcGDyyUUDh2t8",
  "key10": "31ySf57oPhPWQEE41gsSzLvdfr4i2rVPdk3fbWXcGkkqBmpa75npSeQKq9REWTfmBr8E6Um4B3mnaGNYgzYAvtgb",
  "key11": "4r1AtrsQNDzN1a75swPVJcWYz9dFfbpzTfAgdjsFaPTJbTLLtWJEPfdFKVLccqegqsa4KGA2rMv8DKEdzgotVEeZ",
  "key12": "32raM9sXB7mJ2aWDpjg5qJWrJNAhYoQBm36RtpWE5gcPijiUD9HH1gQYsMoWosQZjV8YC6eoHf5RMCTKpqMyUM7N",
  "key13": "2FJJ5mECybqR1hcksTQG5fBUPRVCMrda1AsxwxZyP3g7NuRm2mv9rUStpsS1g3ewRF5m4XteHirnK1TQw9vCY1Ek",
  "key14": "5myyNDA4jrGz8ULB4FgU6fYSRD3WXPrhqKEkKw2hphsWHKxK6Q6xLdz94yoAfbbD7u8ibKpuos2qYeummmVgAUHC",
  "key15": "3oL8pGVoKnZg2dHpRxx69i181fQw5Do5nhUeL3z5maebH5G7cnXJB6efhFV4JA4LZjkpocsXtGt5pd3yBHTrXYgy",
  "key16": "2LvHC8QcMb13ShGHiAsvP5XLjn5EHYsDCXmZmTwGB57hF4pCENMkf8T1sDcT4HgxdnufzBpgRZ9xvquJoTpz7TNB",
  "key17": "4FXHuHsEpwW6SyY3dEz7BGcDfcD9hu1EivGdvjegH7k3GhrnAnqrRwVSVF872wkTLgwFz8sqt5VMKJeFPxszmBcU",
  "key18": "4irwp7gzir6VVFAw9nMtLVkhfXCHXfa6QxSXdPTkoAkJqZP6em6dsPUMbG3MHzPUa7WR1VW7jafKcyxU5igVnb1w",
  "key19": "tPUMUuHq9ufYyvjg9Gdf9QUBnyEejW3E2DuUuo3K4uNTvJHBHPmncknwaYibPXtjUEfv3jEiUQ6v2ukxMhsK62Q",
  "key20": "43wFV8pj3jmLaxW5gT5NH5wiJQSR7QjVtjNo6E8YsTAcyi1bJrks6wazeRMWxUS928ZG48dnL5vR589T592H3y5L",
  "key21": "4G7UTNPzQNsRPMQ6Dm9PhqVQ9SxDdiFFrSp1xiJow3wGDxcSSBJGvtVcgHfDYi1EK4fm4Z4afyC42R3wetMhaxXV",
  "key22": "5LrvK2ad97RwgSe5LDSR9tzTZb4cmdhwS5CUSJA5Hw17LEb4rFjkXLw3bRWhytqdjErcQA49bih6te8KHY5ytQYj",
  "key23": "4kzKJ6KfgYgWsLi69FY5Jenb5MAnKQrmvY2B9ZqCA6mVrqFNfNGRjaSJdikS7HJ37LJv4Jrxwb6gfeGXuiT5kUKQ",
  "key24": "4DSqyReFhL6aJXrwaPv1hafWvr6dMHWSx1yUuBZAhruSmVB9ux6oV8mgkiK1qLhEBS5Pc54zzupwzxJ8DF5kVTne",
  "key25": "5k5sTGoFcwBUmqwx1U12FNip1RbeeMyeebbqKms1i3CC8qBvHYdwRo87k7DzwtSwSVmoy6X8HddkTi13ybLngwqQ",
  "key26": "4V62cma5dfc5giL9VHEMSWyNFsXBhu8wtnhtPcB7f6rrV9roy7DDDC7ZrFhQXErpDazqjrVwgLQPrRTC6MVyg4Rh",
  "key27": "5VZ2dRjj5ABTBs3XLyaihyU9AcxxspmnALTt5ZF8R5bgU3r7tCLUxnEfiFKnqEBqsWKBYRVRHa4R4WMw7FYht95A",
  "key28": "5eSxrrd7GSzaSKQ2EPoQAmZtBnVngUb6BbWQrdwiwDgC1bwFWtkDBvyuzgtaiWYgWakBHh6iXwFov1C6bohAgHk1",
  "key29": "7mej3z6V8AwmPxSrNg7gWQSRtX1eNzFQG7tzohYNQpypUR3Lj7a93dRijpP2FUJsHgtodY4bzQoTfN6v7xr9avt",
  "key30": "29sSQZPm3kAofpKyKpfWzvdC4XnSUeXuwsYykkdZWBZTKWejGQeFEeNvwQpcT59QujYcPMCKdLqHwtTKWKFD2A3q",
  "key31": "4Jo7nprLAwndxjd6wVkBGsdjjof9Jb9ADZWyV8QtE8HqLCEpsPomg8DTZ5HPfEbREZNbhDHyzanobh4mh7WrZVJP",
  "key32": "3zyRF2y2AsDDu4F1qGbVuBhPR2FnAzrE8a6PS12sMbykjB3QrxYNbk6cx7Vy75h8N1dif1c9NSRUpH96sgYNd9on",
  "key33": "5koEkB2STg9cW6bXsYrifNfcsSjGfsBmn5AUik3Kn6kDPDKFH2FbRRfknVtG5B15D3LPW8GYmvaGcCP38jKowwCy",
  "key34": "5fj5AcVhTRCk44goztzTEB2ZDobcV5o3JV2NGFMaK46L6znCtLiwzXzvHTSBjLzXmrqjmjxjheCcDCt5eEE9qq84",
  "key35": "3CG5BbpTpiimT4XWLzxLB47DEpupFtoX6ASvN7LtnBdCHkqXT99yLiHmxUNaTbpTfMudkRA8LTBEooaxqAmTNaXQ",
  "key36": "3kCgL64DfoZMxtiaPVZaL4uoiAcDApzSWPFQjyvgvF9fr3g5hzUDtZstAXXYkMJL25mNZBZS22PtHFvaE4nCr6nK",
  "key37": "2oKdTRDgRcwA17fgt2uTZyJngWddXzstUvJARsTCUCfuJatHTyPZYQdVxivRbcGhEReQtZy68aBwcaW2QGoSPBYv",
  "key38": "5jxeTR29nF3mSKaNswQrZiC4V1eGoWvbjWG1AoZ4aJ9sE9JPe6mqqyX63Ettau41LcdoQXHqWyXwW4xkoedFLqha",
  "key39": "ywukDAfNWXvvcdhzT2UKWY8yoiS4c3jKpFjvEkcig5e35vxhza7QJ5j18zS3U5NcVWC9s8htKxJLvUaJcx3b5QH",
  "key40": "3EhY43bcDkM626xGsV95S1F9hReHVZi26EfcQo5LnGCidPLRjNtmt4eu9dpbZffs41yd1Pj33aSbMcrDQ8cK2T2E",
  "key41": "SGqks1AxfhKJ4BE5Dm5gWukwjLPSaUzeXAPCP59zLQtnc6EphVnCcqhUQ3ecugMCHfmQrebVJ6n9ALMgHGCcDa3",
  "key42": "3yNuhRPwp5rc8b3RGmfyhXQFNhVXZ2Jo2tKh4Wq3C1nVAfrBvoxCyK7yejVokoMecZxHPyVXtCmzTgEbR6aeEmYn",
  "key43": "37WR5XnGGj8rZLi1auNhBC7iAktxge2YXNkn1hLXfESBNqrHEtTDzQBA2TxoLkngRd3ZmsbAJ7emXgnHAW4n4EPH",
  "key44": "3oAZdreQcGjzfNYMCkn6jKxV4cSmBUsyCwiXgUzuExeL84myPecvKHD7Hukrx1AJ9pzL2JuNH1t5e8aZfjXtREoT",
  "key45": "4vRNj1agwzTbMfd6nsM2YQ2y2Ydtq9XVcAMswPq5KkpAAx8Jr9z4oR4fZMTaZX24CF5Wom22tQepcrUBfjmveENL",
  "key46": "677r66hVepHJbnqBRvfWer3ttzxftzSw7tVxkRFsFdmuYf3AvNt7CkZEGY7ozVRjsWwmexL7ta2XJZ3ZDzkxXaYA",
  "key47": "4pipv1pb2UkwpgrP9CyW9qhRAZZhKmDuB2sBmrXTkmBYaiAoRFfHZPNjp1317tP8QXVXPREynZiHhLa8De7UknhU",
  "key48": "5vSsqXfHJDmEDUGDskVomrXLhAAkeRmbHB1aDSte7oDCj3osC8fwfGGZw4FWunJF4BVpJEQqPHYKE6G9GHe8sMUo",
  "key49": "5W4ZsVMqzH3gevXpwSwz7pXVv7qgD7FnswA46fnjohUvrzgA4hLvFdrUcwHcWvMrnhz9iQ6GYYfkh1Ef74FAWN9c"
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
