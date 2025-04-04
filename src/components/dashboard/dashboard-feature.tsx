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
    "4mNEG1mbDKBAkxWwwAEKZudv2MGJnWh8d8naTGxLVgeebGJ9wGnaNzkBEtnSepq8bzttodT1SeZoEhDv4nugD7hK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65E8nuebA7228nbwvvNkufAaurRDQd7okvVTuKH1zWuqD4zMHWb2foL8MJQsX9u2GVX1szAyj35bBn8kWNV8yeyk",
  "key1": "3CDfFenyMSYeJpqKfmY7WWnzYX5kGNrbCwPiGALLuTbvFvD2zeB7uLsdpx51TWm66vkVpNoj6UavqoWDtLYueD1y",
  "key2": "4BYDteJ72SXz9h2FkK1hABJUJ1tvseLstFfSGdNLg1DxSqABgKTZ3T4JhiqrUz3iSFCbu1DLMn2cNAWQ8yW9yFFN",
  "key3": "3W1nR9vVSNZC89Do2SgKJfVkVHDjuq5NNRoC4rnS7w1u3Jza1mr1bfTHsnc8Yoo4U49ia5xCakAkRL9jsqM5KkP2",
  "key4": "3wZ6uP7UWjAa1YUY1pjVhvniE688kP7a1ix2Bwb5DCcwgxynU21pDmFTThfpHH6JatmgD4SKwD7MG4ieK3A3Tk3n",
  "key5": "4Yf5a41YyDUMUtDCfgWQoW53DqrF5v3EnyCoKPjEmF1sR8TFDTzy8DRxZoRMbSWPydLZpWPZK77to9ENQ65DqEn5",
  "key6": "2hVfejPEQqw2fatWhWRVvHUmmTLZheANgf1HyChxZyCMsq4XJrKVtWdjc1GG15pGasVYfUu5fipRWNnFZ2GrszGz",
  "key7": "4nCPbPVwhRX81PuhkJmbrT7dokNYBiEigSnv4RL3empFavje1tsaQqnYACwVEF2dciBVhvbD4vLYurYTrGRwD5Yb",
  "key8": "49q7VXBk3k8siU3G7XRdrX79i1jSkH5781LZbSPturaWtqKs4YEFXXjos2kHgfYKpJfGpzzAZqWhV4xrujuxQebL",
  "key9": "E6XeybdxKfsPvvmC65DdTkAq71hfBzcC2pK55xrbWsGziovsiYj8B7CR33TUz2oPJLMRVyEXs64oAhy63x3xins",
  "key10": "2PsfxGSb9i1qrXvQgNgJUF4XgfiwYodkYfyAWKZ8VmzeusbaBPynqS7YbwVKFFRwwaQM6V9YLUcVeFBLeyQNy8zB",
  "key11": "42uuxScUixWtYd8FikBJCMbwwZx1w2AMdKTMAB5j8kz4KvbxtcBuRU5iBfP5WbbRyh75vtchB3WCn39ARCWg6kd3",
  "key12": "3gsJpBY7CPAZpWpesMxSyj4cJK7oHmba3CujSb5agk4F4X3bFQLsNs6RXUnHyGvpPo6rVwcxFk5QDXBM7u5Qyy3o",
  "key13": "2gkMe6ygFCAUjmCt5hPLxKMVC43PFjGiqdEfrymWR5xiiJn6UKHARniUL35nm2Q5fsErXspDucEw4FJUDy6kaAq8",
  "key14": "3v3vFTWPpBtPJwdPVnyvrED6U3o52TfQcKoyxXRJXm1513PTn1VaGTsZJRTcKgW2PRZ67SZLLtwGSUdjwjnASw25",
  "key15": "36MsVJAEk91TX4xp8q2waeFZqEwjL2BoyuKtxB5Ssp3HEc2jUxCfBbcn7u48RMUP1EPRBQT9KAH8rmS3wanyVgWm",
  "key16": "5wcAKatkEBKUi8MndBhzcjcptifxSPJYg2G6tvS7p1qGCc4UrFxQxppmQbVm3HiFSAfAxukMeivu63UxxT5giZKy",
  "key17": "4PVwCn3ssmpCDDubxfwQCeBs16aRRVpoQcJoyKxbYPSKJQPfdRbd6bhr9ETysPBCJ56Jq6YLNwhL9h2H9VgFWwxA",
  "key18": "5c2NXzjhNCSLBnGbooXSoWnpMX1iXzAXNbfj6X3JNayC51oLQWnM8gM3NTaDURH62p6D3biU5AKxdbW8wjSCx2KN",
  "key19": "4eHdZ2zWJyniYQyD5DXUM3RJhYLSa9NXZjNgC5Wagv9cShREKyEyZ795squAeG7pFGzqr47RiCGyzKr7NX7j6Ar7",
  "key20": "5VsvWdYLz5ZKwMjRrpbroRvgdz2K7EbXZJ9V1VZ2fdXcTqTTfRmzM9i6HtFatxCY1thnFe7PaUK7vBx5YTVgRgrH",
  "key21": "47yCLnWKxJMi9iKpXSh617AgwCPUU643aX2kzCRPrmLgryBgQg7b6XRDDnSeLPUwhmD2szEDXssVznSyxHm8ciE1",
  "key22": "5AxfUaLHBajUX92d6GpeWStFWfU2atqjNEHYb6gAxFjhyaVtaBhuMSHacPhxa7S9C4xah7fQx7EvX8Qss9dDEapF",
  "key23": "5UfzQXhjEcLNaPi7LpQevK1n8bSaFASP4YZUYBoiaTUMcXaAThqWSuUp348cTPHzu4aJ7gp776urEv8UU2ipoPvW",
  "key24": "iEMxYp8ir46ByCMopXVKKvcAEPUX3XPX4m3uftNMW8rBsyJxkx6AHyXzVAYyNR6TBbUpUvFkMYwP3x4mWkyn5DT",
  "key25": "182YM1QNyomCaTcjweFnFVdPERX4sM3pRyVwFEX7SwxDTCEQm69C2pggLj7VorohwTPq4cNnsQ6VxysbL5Agtvo",
  "key26": "pbNCyPddVXQrK7bbJmz3ovRcJfZJ16na5ewhuKWdMgExkyHMSTupAMF3QAM3vEw5dcTo81UMYoSLi5R8Y513ya1",
  "key27": "5N3vt5xbgkZ8oQwn1zYpMFP3FCtqiSNeoQgPkNe2yVGtVHS8DkXxxy5qr1mpbkprpJ8B26HvpT3GAi9GPRepagAd",
  "key28": "csxFAZSfvDH3LVV2qL13QtxtxioegcEgJF2CW7hWxurdqDGTJ3Yp1N1qGVR899g1j74LgiKYJ4VqFidv8UcSAxs",
  "key29": "XQGchY7NRDGAK49jJapHjd5N7vNJoxKoVoa3jn6xYWuaW7CK2wBVcYscZt3Zco9NJ9CxmWfAEvyU8UeGG48Zcf3",
  "key30": "3VjDWRn99WE8pBsf8Xm4ejVwo1a9DVhSzHgw4S2YaNQsar4mf4N3cdG9rkspCwAafupdfZigcTsPh1eFz7GKFQKs",
  "key31": "2Pe3ohPTifMrG7N2PLp2mmYyBmzNs3ae5pkaW75f3jKHYN8SVpUJRm6vUyd52iSZ7A5xfqVGXwVLmBK4GNFqtUsQ",
  "key32": "2BXfMh4K3EbnbtZTu9bfa1jE41hLEPmU6ksHzpUCgGJJRc2tmMY4Bbdr3nNaEBmtfTm1ZZCFKFirTsqyxUkVqxgy",
  "key33": "4Acz1BM36iGMEX9uSTVhkEmYZA4PKz4uZukf4dGxF7wV6AL8K9KcNQetszgu7EkpnFoxFc78MBtPMZQbi8Cq9SMV",
  "key34": "4MAQ4QJBreovJTEGUr7EU6WWn2KcJuYxgMjT4sw2jkn5hsWwirNqCik7JAAykJSDKzfhyKJxWnZMT87GBwYERhqv",
  "key35": "2eCpoqYu3FQ1jVnVkJEQ7hmrD59Un2GqcYe8pjWeWC8cdJXS2xeCXu7CgaQk13jQ7qCocGBLu7M1NEvkhs8LviAE",
  "key36": "5DK8gMcwk67W2mXVEDtEau32YyQ3YCynPxyR8xF8dGYfstF9GWqnW4NXJWaehTc1y2VnhnBkvgXKNtuXUbPgBDc3",
  "key37": "FYegf3FGJP4qTsULGrtDYcriwk6Javduqhp6GwSikvxNXTy5uCq8HMJW8P9yePUXyQmSH1rwYRb7W82S4UAUCuG",
  "key38": "4aJJHPfDPH9uhUv4PAb4XRoWC8i9JmMFVCaEY4WBaQ8sC74z684ssKAGYLwgumteN5Zs4yTqMGQV4T7hMZGVdK4u",
  "key39": "gjm6Lz3nLLuEAi1y6Hc2dDtcWv2zBG5zvRnLccoG4uPK2o6yp4MQSGZvHkDuUL3zkUUEZj2pvoaz6EeKVW5GcpG",
  "key40": "5buMNPCyrQCbSkg6ChkKXxey8WHy93atx1RHw8TX8bjQWi4M4SYpYbp8VRtt2V1Csx9np2FjWQ8jYYBbXApU4zjp"
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
