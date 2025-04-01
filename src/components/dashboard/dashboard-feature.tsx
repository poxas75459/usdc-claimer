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
    "pVh4nptVraDqjydT1MpXWYDVqssQCDN9ASr4FU1HCtwTzmZeYjcNQYr4zBwfAyFTPD6RkGLeS7ZFTs3KRh5Wfak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VBRahQxTGt3renQZVJ96A2DqDRRtyEU34CkxrbAUovGdktP9cVtCboHGykXWwbV7gbYJfXNoXkKux3PfcYtxTo4",
  "key1": "2uUrT5AkHCj26eNuQNB5N88xzy1s5b3iZjcRjcEh4yC2sE8wA2ySiZBvSyTGH91iBs8z5JET6s5CHJwon3EpiCoT",
  "key2": "3H4BHSBXbbJXqYEqkM2w81ouBfZRWXXZXxVajHnaPsCyks2f2pXw73VVZVzt1we9FYV8UDwZhZWp5eeJ5KoeKfSr",
  "key3": "37gVWtPg5MTEz4FF4S3RMjCA2hxyE2h2inzkqpEfkQVaZ6oJBj9pSUod73PZJXKja7JMFo7UXXtwpxWWVnp89wAX",
  "key4": "2CUxfBXSsDnMdQ7aMaPAQPRGLwUVa7agq6C9H1odRU7J1uEyChik2inUxdc827wSmNRKDwjSXPe1pPUZDnZPupB",
  "key5": "4hdjCQ6y9nxm16tkwMyyGGn1yXnmkSfCWVspFiJBLkEnM92fsTvQcGtDGiaobmEbz4hwEL7yWZjFkt9P5X4WCu6e",
  "key6": "4Sq3na6YUN1vTuhFqUB3Qf4YgbdJtzQxz6RTKMQ8pzKM7Nkq9gk3CCjrJ4pWo72hsbf51XQ4kyeydTBrRFX8zPDu",
  "key7": "4CJYyXZsqshYRZDaiALskrSrazARae7HG5dKMe4BbnQMRbyPVdcWgLzSvtsySjfF25RzuetrHXpHPv7dkRHxJNEj",
  "key8": "55XzNg7Z7PtPx2amALRN2DnJsM8G5HGz3MNmUWVkD2cFYhSeMC5XWn3ELYy3CHHotFWqD1TXkXMB3r1Ay5vHLbSk",
  "key9": "ecGXyjwoUnHBES8jSc55zcyVTtTBvr84rUJXxZh8Ue5EYqpc4jTLBj7ixeAoVXtqEM4WoLEeypzgkKdAQiSFTmT",
  "key10": "62M4LiERrH1oamAnqBBpzrVaV5QjpngyY3UuFyTWRz83t2bHMSVqkCwAp3khVD71r1Th3FLQ3zppGUZwpT2kxoH2",
  "key11": "3LvxwvNkswHgwvjcufEnvzjsjzZCBJHi5QtuC5AR95y31J2wTG7v6sJVVTYCq1M3XH6wor6aZ9fiHL7ypXubftHE",
  "key12": "3FcA5G34RCKfxFC22fcEcaKCM1kx86Rzv7yZEkVfLEQaTk5ashPBv61z6UKGi4ARQMfreVKFShLMgv2WJuQwQAqZ",
  "key13": "3xcpRYsG9zVqHEeuxkskgU2wJMwUitRGenSr3iFjW48Zz5w6B4eEWNagyfmGTch6szo4JvBGoS9z5YHRctkow41m",
  "key14": "2BdQMkvALxgDZTAaT4G9EBgCfdEQVJpQwFfNKsYESsmreSip7oWsQLuLdJKBw7hnEL8ZfjxEfDqHSTfkdYkm7oZn",
  "key15": "2V5uMbooBR5uobi5opNqr71ENfQQKJ8csgoervPKKeCLqhssMJcMsSn26FfH4jtUQJa96inPLquhzHC1yyzdaVEE",
  "key16": "5dBFVR7bvDf8gcnrrB82HpAsyFmTvrX59qHe1hcQsyWxYzfHTtHC4cG2zqcwEVFwYo4ysUh3VjeKLoeQrKrimGPu",
  "key17": "XB2UyU1KMwdhX3xq3m2oMrtmh5joGysxGEx6ya6eHwX2X8tYJP78PnkZjLTm8TkugUBMhVg4ervG51BU7BqTrZR",
  "key18": "VMkGuMQAznrrbmftNdRWG2pQmcvWPL11Uf2A4MDp8gGnWrvCWgAGgZqPkk21QqxEbzGKzRLZZaZ9WMN5kGGTxpg",
  "key19": "44RvxpJrXpupmx2CB4LLLCw3oKxWE68j2pdtHsR6fBdoRbqBfATngdpu23hhhbeJYZuQbeQrkvEPDKAgqUWPTKtm",
  "key20": "2XHs4f8KBUksNmKbm1aHwSrJFzVzqRVe2cSP6B1yh8z8G1vLQQqhWyPbFB7k4t3SksoQQ9nghFd1PtwFDBymFFLc",
  "key21": "3V86kHDspswm6XHdgbzd1oL8JUwRuxrw7DefmpiN85NjFe1oJX6YA6QSQzfNAdx1mmPFyJeTj77CarLWXYonVDQJ",
  "key22": "3keFPyYS4BJspunxk1EmFNztbWTruqwXQHXSfq8p8WKB4aumYw83svS5E8MWJT8BoD92cRjYSsTbDr1c6aqmfFtb",
  "key23": "a8AMpJzypsNNnaREV5T5sVGSkqVCxCSSWCYeu4tiinn1DFf131DyM4NavLp6hvH6YzsQ68wCz941rV1MBAkCAYB",
  "key24": "Rn3iRE7vx5hsvBGnkEqWZY5APV2VpD2MtHErTKgMKKbfjkibFu7SyorfahzWzdAmkDNcaDUx279k2NPAqktxTGM",
  "key25": "4NhprX4Qv3xohRHgc6Jxzu9yofBUq2mnBWGuS4o1E3Fbq5iXUVA3ZyHoF1xgnyQ2XamWBitNFNNgPhqHV7GGpKv3",
  "key26": "3eYgLs2XEcK2WmG3YwAkUxpQUHZWXG8isunMZU82pgVZ6WN2jP8w3Meep8RAtf3FmKRBKKGQiHBx7D3ZrAnHH4qy",
  "key27": "2S82xZhFbGTQp4DQk8wU9avfaAWfzKTwE2XTdBmHjVkAiwCC6gvLeynYQL8FcRMMqHqQxeT5JZkn4qzkLgtCAWmL",
  "key28": "pSYrpctPJoyx77VoKUYGwUvPjS5WrWcdLhmj2CKvKTiyWaADnjF5sM3JS9GAJ6MA7Ms68FcdMRJK7sNBQN4y1nE",
  "key29": "KPtBPMWL4BKTyJjusfgzEdzposCbFwDdF3H5TwBG2cPvaWoipALQrY5kDskk9xMW3FCVef6DFqng15ApJyVKg4h",
  "key30": "3VqdvbUzsH6JgDoG1GcBH4BLWBAhn5QnizfGZewiHpGmBNnXtfZzKsB2TRxCDiMBz8V8VEu2r69RWxr6CDkHPWq3",
  "key31": "4uufBgcX7A4Rj7EpLzqjty3uAHu8b4YjgqftePX3GWTrNVSi2m6PQFMcwnV3aoXT5stzsqzeC9qW1RTGQ1TppSQx",
  "key32": "2YMvX5wYuNxdsiMeihaLJocQayc1xE1KqkL2beVCBwagV8Kp5BhzaMk37mfs4G6NyCRyrcazv78QxwW6wPwAy5tL",
  "key33": "4dcYErUhTesfZZcREyAGsG7q3vhDvEjK2UxBBcMT9zWUCkXPDNNBmPa4NUwbg1iCG9e87gRtL1E4i2GuP5PzPPJC",
  "key34": "4vctA47skGh3JaMNZCvnWwBN5982PSUcL5AQ2V4cGxdTbXohMwA1WzAAZjb4aE7tg9GKnr66TXzr4bcirVzsEEqa",
  "key35": "3EsGpWe8x96Xnf5Z1WyzYcQCB7Ym48tNRKapgChLZVXnD5r4DqDsysGgFvAnWRo8ZjmrD8FDi6WNifCoHWzuh27b",
  "key36": "BfbDzQPsxPV51cteTw8LTyuUFKfQzfAonCnjG5u5ai8NWCDm3ADNZEy2cpRh1evVrkxwbSoLMeNh47jUEJWAFFG",
  "key37": "5MfZNdr18LvCgdvacyeinaGHUwz9Ke2J2xqCCpDHaMqRgLyPQtDWJ3skZKrQsaPEBL3oPjLEt9T2vvpuaXkTM1kp",
  "key38": "5RHNBv1FRe87vAB7Wf9L8Z1pjmdYNyyY2G2aJzkDZFpeH2tHSNVhQNMK66Ls4gUGG6EZtvzsfDaHNXHGe2Z5PmFy",
  "key39": "63bQ4ztzdnou3jXJ1UQWJCAzZxeSMUDqWhE9WwhcCqDC7JfpqedqJ466DLU8VLUH76uzuJaeJ7X4sG9diuFFDd4d",
  "key40": "4Qm3LtPxCsgkG9jz2n7oVdgE4FHVMeezv31jhwvEjj1cxNTnVMsJz4ppk9p9kCzm4NAhm4f8xmrMF579SkeBssAA",
  "key41": "4TzVb8j1PyJLTYdm96huhtJhfiUASUS2vfodwCo6V8HePRhPfo99sreJSjcPDrDPwrf18kPCbWoqZe25ht1Mefz5",
  "key42": "nq1DCB2n6iHV6hWzDc6aFiA8CNXuP3youJNa4KmMxdpcDXKrYEECgrS7uYDUDv1Hbfz46rwaEfdvaZM1PZng9mJ",
  "key43": "3cvRFKTmEnK72bnpYbtzJXtBZRUjP7ZkqkhwiURspK6v5C81fCdxmHVjR2U5Ujj8iW6JwaWt8R6aTMGzkh5zaVEZ",
  "key44": "67o91NsmacqbX8uWGyrv3m9oDub6H1rzNo7xsLmbt2zKJeMMLvNVnmP31W5mNwtkftLBxjk11JL86y3eWiCKhnxW",
  "key45": "2BqVQQrpJ9etqRcKFqZEAND2mn9jPsoYWMnc14cjeetfM9TW1S9LAyWNG2Z9Pa8YTrgx7jGZg7dKpdTZM4v6ZRF6",
  "key46": "zQSwfJgMVd4ZixNVfUxoHJqAUfjRSGmQFfXQ4AuiPYVZP685ZSkBadWaGygmb1f6DQrf1XUrntHGqynB3adaSLC"
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
