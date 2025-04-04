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
    "4m33dFEvK9Tw7q2PVcJD3iA4DrE3LTVEXVgf1944kUmWRCsKZZN6XiLFSzvjYsuR4Hgz3vbn1i8G9vVHz53HakcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZsCAomCtJrwvHisn6F7s5cW4bLVe6gzWwHLk8dCk7BmWpXnBq9f36BuxPrGXs6WbAqZB4pbnYCEFz5JPHgihqjy",
  "key1": "5QtLhvENp3hh6QVhN91UXMuhdT9RTmAVYhG1vRxJrmM1W1w6eDMcL4rFr2tSA9H1oRhfmgQ61NUwbmUitNnUw5H9",
  "key2": "5CFfxqq78bnLvU2jaQKh2xzjtdZv5UdDY2uxZhGX9AtZwdqucVLz6oxRRM8G6HzDrYmYnMKgUTvgnUXbP14RMXpF",
  "key3": "3o3KR4SdePLgcKhRK4k34iMC2V7MybvG9ZYUbXJJnNCpeDGuePCnH5iavspcWLc38RMYLwx1e7fEdfL5dkVzJTME",
  "key4": "2V8mwwFENaBRj49ziTo8UXinm3M53XVBiCMy9Fu644HbNNthbKkjLVZQfp1aPHjQQWQfB4vgqMi3YQ4cfysEapGT",
  "key5": "5v2FQK5Qf9o8AwvYsHRS2Mq8hnZzriLZmgYHzVYMoNQMcvLqsS99Ty39RMjyp4T9y2SaqhtYdj3V5Sz3X2ympiU1",
  "key6": "4PLUk4zBm8SCLAEP7zPC9v4UPCUxgqynqvZ5bfVTcbAdPYSVfxL7H1nyCDp3UpifQj6Rar4gJXP6TxSQNqbuviTw",
  "key7": "2MtxxbvUiPvWvqoir3SzFLyUSdLtzfWiKmtka611jurnWdxy1g4ipihq2NKW2hE7utK1iggBi9K9zAQMvaV6UYUz",
  "key8": "2peApFxtV4iYSEWy9rfCMvZ1fxT8dLvGkv3a3HJ8dyLB6W4fF4At81fZaZm5GKfcYgx1Ddyi2Pej4gX4tXwZGtUJ",
  "key9": "48EnHmpHvEx6NvG9dGC6a329x4D9phiNxEGYudr2jKh9PHAsX5NXLdoCfyhknP3pfzqUD1fpqfbm7sxDPSHCS4NX",
  "key10": "ZahGWARbkkMSXz3SyHziXKtsqjDeJbNiBisEV5VHyfjzZLp2qUUrK1jbF8wjQ65FfWZSmAc4TT17up9DXy36UrZ",
  "key11": "2CS9d9FuyKrMXChtU6i9tfTmHfwy1b2tDKxUXAFJVWDZ3gGyEAipYMWeFFtwhgyaBAYYs2YshvxxTVB5euMZR5Nb",
  "key12": "4GQoHNh6gjiiUUkJbVxHy1jk4ZvHioJQ1YeLdyQSp33kX2CdGBGNaBmAfv7v992K8xYFE8PTKBomMDd7qiT2FiE9",
  "key13": "5xCPG9QKoc6rjKdjRJ5GcUPvsdE3sKLgkrrGuR4V7k5enQaYXuVMMTtz8BSwEKUSgRgAQ6vC9sQ4nVWxGNGu5nah",
  "key14": "4mLbUg8Y4qVoKNX6ms9LLpJoRUDXR5wvynf2EhnFjwbgrM16f47mktCkykLfpYT8DfZtS88zupoiLEtNqCxSG2WN",
  "key15": "41LzrgpQpx7h6wKqzH2HG7P5mjXJP66VQ7NxCMT3TW55Se2vSSEHuZwPAjN2jG5tsbqNJNHQcnUmnN66XogE9M3",
  "key16": "9gYiMkfHjSC3WQGSei5BhX26Zdx7SFhrEF1r3hvC1B3aLS5Gw6LRiG5qSroTVwmUghvVUtRVHmCyVXVzKTptgbn",
  "key17": "4ty1sHrWBmgfkn186gWMasKU2RocfKDa2iUkVebEUvsevxQZx8t7kDRMuuCMZdY44W26N6ZaFroNgE6mVeLzGGrA",
  "key18": "5LM9x1yA9xauseb6u4if5nMkv8wMybHoSxjUcBvKfEUCMmzu7E2XStiP5vhkF166bAvBK9mMG4Y6WjxMCLgpLjPu",
  "key19": "2FNfv3EijWwxpNVKFgWPTLA4YXBng4yE6yqr8HSC7sxmQBBGpcjifcFSHy9rsD2ok3Xx9vgE3JQY3e1btzJFk19J",
  "key20": "4aCvGRFrZ9zHvuSvfATkT7PyWnxM74YuaRfbECv2juodMxo5pwfAq9sFdLvBzpjSBvcueLQskUc3UewFRBfkLGx2",
  "key21": "3xLDdJ2wQ8iwfCm6pYaGvcS4UNuRuQrex3btJf3K2pfWMTD1BvDYV8iRN1M5p7AksEXr6T9XYoMaMdKrpvxs76Hq",
  "key22": "59F3PCZVDd8f9pYwU5zJz4rffzeMTNJMVV7XRpnGeYraZyKuc8BKyeq5ZVcoUo5J7zQMcpUDNsb47JrvxjaS39te",
  "key23": "9mFfYfYPD5Qwjsdg2wf1XPbSUgFZ5yKuD1bUNtoGx9xk1Pxs2jveuuUHXLmrN9ebtr2XRFNXdFwQSDoKQvWBST5",
  "key24": "GzshsSJxCTUoQAFZ8hpB6oaRiwJZ8iRPRp1Bsj8T3f6EuqpWQsNrzGVDvrkuJbcgHhkaSKcNKytY7JWCyzokLj5",
  "key25": "4HHd3w1kDMxJtvwNNScUu1qyUhLp17wAHrUhpzqXWGLsa3qhpWMmrf7UeJbGMhpsbHYoBVAqLaezfB37vgoHsk4g",
  "key26": "2vKm1g7zA4LzhftdLRZ6MSuK5H5jJzsW928mJ1tMGisM615T72ftVAk319oSPPjqhAPzMUTcgN3BidS8BmhUvZVJ",
  "key27": "aH4XTGa5NnvNZn3zN1YSLXNp581aMNc5DGGtS27hV5dMFTxBaGR8k6KL5U6W6Tr95oQztWFVEQtTwRuuncMNj26",
  "key28": "3ZLmzeiMa4GgSGPie3LJ39EDLxLr4TKv5Jt7VTEb2WxFrofAWyFXt1CLxK3pmn5V4Hz8tuni4vJFyvs7fWCh7Esm",
  "key29": "2hf5x6o4PDbFhMywwq9bRyLsi7RTuuswimddANzpBp9bnNWqVHtRWgVGrR1rTwsixCs6WgBhweTkeLSBZfft7YNS",
  "key30": "9ze7axLCZUg8ySmVucJFTymHzuGmUTJ7vo8h6wdezR2zuswAT39QYTFjLrgnz3WuKjZepHftrqVBMSVeTgC1siN",
  "key31": "4cEee9RyVH6mRMoeS7uyMfJGdPkAQebFwNLqvATqxG61GMB96cBa9jcLzmHXwj9yxEDULRyyJNTFxFW8BWgr5fyQ",
  "key32": "2igX48rCX6Zu448s1iL9z1hAkJ7nVjbAQicCzP6ypLq3SvQh2mW8faUkxUrQYTUUyDTSnasaa9FFCyiUwqMaDBNg",
  "key33": "2XCnCgAh2D7CWgkH9gceGBTHrBkDxBwaAmNLkQrWDR6Q5j5r3eMYXMmunkMGQSjsrFzc4vov6kC3WGWRbU4XCVJd",
  "key34": "5aTVxqa6N8ZE36mtiSyJ4v1KBGcd9tzBY8ytcX8xzRnXgJj52gxU8SUXwqtajxoDcotoxjM8VbmogBizUNYK6cZj",
  "key35": "xTcabd46BCC74wq67CWRMtFjF9EtcZ9XArArMy3kvZeddT4NhqfwV1ArfWAWhhv31Wfb3wh82kUNVG3HWNiUhHd",
  "key36": "3yvr3u7g8JtLdxe6wKBu9L4gJpUQE4ocAmMVN7Wej4c2KmZYUeWGNQpRjqM6CCt9ccmkwjKgVZu7g8j8nA5jSMK",
  "key37": "2obf8xNWtGdodsi54UkmT9YEbaukohz5QfeminLjwZ9Hu9ocokAi7AuzJvYFHWTqvGPyRruPxfNhy8kNAUdSJFbe"
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
