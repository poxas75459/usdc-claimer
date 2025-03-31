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
    "NLHZD8QgY3B2W976bpx2LAfMZ9zCN3YSSQjtDLwDdkmkUkj6rt2vdNYcdrXHcy1noK6opgXEDzjywP33MBvznfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nT2c1uxQdVAoz3V8Uqsdgw3Tt1mqQEq1LrRXgJFvU1GKNKBp8SnSaF6n7ycPuzXw4MwPfuqk1oPPLXijMUe5wDr",
  "key1": "4i2ywPyQpt62eXeyc69aEEwyWnFTjcGgmQ4u4voDKmHjY3zEfuxP7qT48pHvXFdXmKqSr9ndueFJwSz5vKv21wNq",
  "key2": "2jzsn7yGk3qkoQSm6AbnyFaggdNJNFKektM5eddMjN5JzeEvHoehqr6ykLytmwHxEuVQh7H61Qx2z7L62pnw3xby",
  "key3": "3pWiMLwY5nUoo5B99hukbcPf7ih3CoXzahZXqGD72EaBsHDrB91RS6Lao5mbMwtT3JrZjKgH9sS6xAvPRVV8TABS",
  "key4": "cQUyKhqodb8hdDSweuocbKeqoXREQkrcxKySEZb14wkiT7ekQdzan6UVNvYsHYtVMGUkhtw5TvYNaohfUBHVqkR",
  "key5": "Nyzgnif8KEzuT1PAHNSCZWDvQQBq4Lx2M86nGp5T8fanM5sCypi5UgZgQPtDMHdyi1Va7oxK7YEbtm1UZBitEd6",
  "key6": "WmAbGk85sJsVBDyRn9zLpy6smH4Pw1HWYD7P42EXgHnB8pGGYH6CUZRunrb1gsUGaEuDZ6hhyJzegwTDxxPJKs7",
  "key7": "5wgYLiEbj3hoqDxirW94f6mCVFpFGFefAVeTYKBvG5cWpsiNzZ3PQtVwBXGb2Bat9VVgC6Qt7gev4AHD9rf9C5zb",
  "key8": "5xkWNVzfm71Zgxzeg3EhX77D1WFoKRygn8SbiP4sFWoy6E9f8KUGHcxDWGbUG1YcX6tKNivNioZLdGMm3yrPhoJt",
  "key9": "59Nz9BcUa5eb89ZqYe6vSf9RXPaArzo3bkDvyE9Md8JhkPJAvFkrVFEez6GR6sNaA47Rrd8LFLUmSEFw2RgCzTEM",
  "key10": "vqn7we3r7DK7hwH7Mbi5TpUA27mwq81hgcrSc2QcY3KBvc8D6VXCWkb1hvxYZkdxHUPbMBjApEeZMgFv1Tw6voT",
  "key11": "3rAaJebCsDgs2AFEVcjRNDTC5i5RoNAeBZozxfmEiQvPezRaXapPhKh7evjRKjv6vKdizVmahEPv6JB6E9jLdr3y",
  "key12": "5PHGYH3VUh4oL18jXhuGyEKQcFjpsjLzAJixeMsxf8jAmD8cqLmDNG1QFzD7coVkeyx8J7uBZ3eaauXmFx7G5m4o",
  "key13": "67E2A7PjiCYDFbTFEBcdCMhEnA5fEKox5vTZnb1kTEmKQyWx9JLgCWqD8BEhBcxPpxRDNYpMpAyeskLDpUHBR1y8",
  "key14": "5yRYh8X7mDcu38hjEQfMnPza6JR6eYomVXFjvu9mSdXFrVz5HGW73U8hGCWL6taKBihdCrsBWtzQXN2ZCs1ASzBD",
  "key15": "3PQZk1nDMshSvKkEuNrYqxVEuRh6zAfh83cvEh5xtqzQKSaXRQi6HvTkZ6MfcMD3iJPWPdQaRupKyfE7q1pb1VLp",
  "key16": "5e3e722kK2r3hYpyhBRb1d5gjnL9Ke9vRfxzmtYTCocA3UUL7sF7Xkbi2Y46dZ6JAuvje1uuphY5DKRxkTYRKSk3",
  "key17": "47S62hTArSJphAG4GSqE4KnEmFePCabMcX5SQAovZe6YkKcEgMAH7u82Y58yLhYpzdcQSLxv9NjPiTibWJQMw3dZ",
  "key18": "pdWDonZV5uNHvVkZRrzAdd4XCDWJVxLZx58uK42KLznhttveXAvcqf9uGGbvfxyHJLHwKrW1zyrmxKmXdXNcsDd",
  "key19": "2QUFZsjiNBUn86GU9eFLudJHsdXvBr35iXy4psfk5AZ6QXSXd6VgFKUaqtc7xh6Ej8G6iWUgcYnCfJajHyzKKusn",
  "key20": "41zC5mTYhtemTSLHZhrfHSMPfoyUEqKg2k5HMFAqHaLsLk4BwEEddS8eMHsnwwWVViD3K2LPeJJYMsLJyGKso4EP",
  "key21": "3imw5Np7EF5BUmaCncETDbQwHgp3mGSeAAQRH783MqzwHdpqzK9mrX3oPKt3wie9MTSYBjsuipbMACDQmF5CQ2rF",
  "key22": "4mEfaqJpWg9Ey9qMMx7jqTePiVsm9N9nUPHffJQgw8BoJaJ4FLLFHgRJ7TrD5xYT4uCVTJ7KTxPzArZvQNqgZLJY",
  "key23": "5vb593i2G9QE8TEFjgEkAXK74KgL9J5PG6Lyc9g6tudzY4uUiq4afjWxmV3wM7xEFg4WB2vVvoTxMaHZcxt64JHo",
  "key24": "3cpkReMaYdEXRhF5cHxHFkhVmiCug3yRwdH4CNCJB6Y1HvP7ff6g9keSoWXdD1MsxPK7ZRe6X2tqqZSJF4ww8YG4",
  "key25": "5yHPUQwk66rrCwcy9z38MQpjJ4NkzvJzFvo3gH2Ga5A62jZBPNxG6KfF3mmgSbqfT5xFRmDp1FMxDqNPxeDzEXLM",
  "key26": "2hCn5KSTegGirHKWRp2umNewzGBrsejmZvAjvApwrHY2w35YAQiHduKrSf5GXpydc2r53LWNrL2KPESnBuTvgPDK",
  "key27": "3cdbzb5YAE6q5FPbyGxJstLc8JXugroKWVg1ZugKeLYxbwKEGkbtyeVNZbbtC8ED3U35iViLdJsDDGg4EdA5uFVS",
  "key28": "UYeeBWiLo75PZdDXZEpTnnRgc9fc26Lo3hwmBmEM7vTgQZyNiwLRJcbzT7PSvTae33h3VFMaEEzCyj5Dv4Ubcpi",
  "key29": "oGVHUvj4WR7rz9PLUdeD7gGye8VTD6kR7q3GxGuxTvopNH5FeRuy3rYtZ6CcicYscTDsbnjgfzvUJ4oMQGo6G49",
  "key30": "2d9A76iQGC9WiVZxPqLvaHwEAAw4rBLepm6EyGDgXVNLnt5hjG84z4RbDVsfMDvE27LoyBhVoXg8tbmNicvTTsaZ",
  "key31": "2vQQ8Kxbrgf3Zg3UZicdXncWr5kxcNaud7ib1e8KdLENGshTZkjNnob54T9hZB7e51wnFzDdZDofy9aAkmcxpbAb",
  "key32": "4s1RkrqmmLGm6UMUUwBhvM2fa8CvzLqhQkeCWa26QTVLw26bvDr8L3e5zqZCPwpqXJWuT7woSQhFrCHoyJ2Xagde",
  "key33": "5PXzZRAHSLfVsPzFUW1eKrA5gL5otXNv8xdaK8GBiTJ25cHwFE8DJgQVAkJ9Sj4xDsnWzjqD1kbyKyL9x3RMiZfc",
  "key34": "5FqWHFUqFXngSpZTNV1E5t6SeijzpRujkJQPcn2JhJEbScoE8LQyxt27xr5ArCe2JAy31zc1W2ztgwGA55YQUvT7",
  "key35": "4ZXMparWy98EtDbRb1ZVjaW528e544dDhS4NTUWKdcGKaPF7zkwcr5mAW8rcjVKL6dii3JRYi4cBYWgPpBV2fSMw",
  "key36": "2Q1psq2yhbnCPAS4GuRPfru4TqBSw1dniJj4U5nkd9MVRxbAbQVbrKgr3ucAMAbPSaig8xkGfjYNgUV54n3p8bn2",
  "key37": "48wnof1ioS7ouRZc7eSYPK32bWkcGgTcTUQM2U5y8GpL9hU9jeaiL6FcZVwbMPBArsFkYeL7uP3da6fae8QpLJT9",
  "key38": "4XErMj6Akf3WUwFPNKyMDhehDi3cPAUVKeBB1wgRL1KGE5rcGAT2WTmxFXhNi6xpEimEbZgpaEx8fkKpNjqoiEz8",
  "key39": "4pEHYZd8DboT99ViXJZqRNzG6ycWsgvuaMjPHUbFb8mzeXuPQ8dwtyR5eh8NCKFrE7gh67Q7viZy3HxHnr5hcUPm",
  "key40": "5KSPERUcDoKprB1nXZZLFvLSu2iCgniNSC5zhMgdVsf3uzd99dUZii7XBdR6f6Sje7zXwsLmECb7aHgGF8ULwaZn",
  "key41": "4oqK5VEL5pjLK8nbXCTfNqYP1g26UgGBNnjph1XcwxtpQoXeefNm6PWtdxwGY8Pgv5MNmbhPZZED8YoiNUsgAZ9P",
  "key42": "5Qivw5jawsLJxUudSxyN79PnbUgubK3NSxExeFojuHPWX6J6wgZQePZ7Rh1GQtVnCS5KdXKcBzxtZX3ttYLepiUW",
  "key43": "cUZTq4gSKugx3g4FFh14TiRZsDBUvV9C8ghu8yfgP1NbLBv8jjnEf7BQJhGd741BbPMgM4mPbqZBEym6YJXm9Nd",
  "key44": "5Yqfe4hH66rezET5xHjdqRHcsZDvM34uhE1ct5FQBAVuirM2DQbUHQkyaLhNDv3voe5kcs5JS9jsbtTafGTYoBqd"
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
