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
    "28BznjpQUNPXEX9c47BPje9Lb1GmUb5Nxiu82upjJCP6uNm3CzYNNry1Zs4PfZ9udW5ktCvTxduc1Quu9iQbxA8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QH4tkpgGWvR3oTL9GvBxRbUr5GSc4fAQRH7uWqgbX2rj2FoFYHbn8Es87aTHEMEZXbToNAVwfuAuiMfWq3NZCq7",
  "key1": "2vG4Fyc9cGNKWA7ho1t5hMJ7rM6sZ4kGq7uJ8sTMoneAYi6s8cAtyPafzbo7siYNcChBUh8uU7nkg75SHaoFAX7c",
  "key2": "4ox8GRH2CdwKYeEMK2WjcH9nPoNhWsvu6F3UdguwCYh4kSag14YDKWnnsxHb7rAFk1YWHrSWuK8fdBbLVMLoZzSU",
  "key3": "364fLctC47GF7MMvpFPNkPi4bgkk8zF56obyLgnrYHEpkkNhrxjiqjmoW7e3UrWUbSVxBF6m5AoMWkRjCct24PQq",
  "key4": "2R57oh5PfTZmNDQXXCYA4eikoFLirjKLXfmtpJnZpZ9Uy97mSWhkC2C2XJtgyGTB1dKLU4p56p59t5aB5HtEsSS7",
  "key5": "2HsDyzwNgYCVuk9mL4cWBaMTgmUMLwRs5Q5MJJxZvoGr8G1knsyq2RkDfvdbF68A6u2mLmKNwTbGhCUdRghJrj2K",
  "key6": "5VZrnKyTeqkwbfBrXj6dQzEPog92De4uCDb194PvAo6XtfUtNGo4sSJwHsV9kavcM9tvDHkcRnA64H9vExWrWiov",
  "key7": "W1RCCLiyggDa7aNm2cj5cb3LVAgaix46ri5JWsaoVrdGWdMCT62HbnY2YC9Zsmt2K5mtX2F74AuxEL9SeMJyyxn",
  "key8": "4W1Tezz8vjJJFe4JYpnMFHSBQMQCMr36QkbJp27hRAxucxJnMAcep8Jr9PfUPhGpNRMGmw44kQi8JXZh2iuscsQp",
  "key9": "3DSAuw31cX4henLDbhXBoRqomMd4XDos35wbsZUQ8Tz1P8U5wBF81pwWe9jGccYkGq2DpgN1v4EGpw4guaLaqwp7",
  "key10": "4Qfr15hziNZfvwwoMtpAUgWRPM3y21H3amyvvZ6xozBzdfP4XS4fi82bkxvDdbrHtRU9uatBoe9QwAt23qemPoZW",
  "key11": "63ictKCEY6VXP9oyr9uhXxzXFz1vW793sCucPK7qPJy4i8Yg27upaNfSUyD8KLbtAcK8Cmqa7RFCyXG8aoPWMqWX",
  "key12": "3TVpqmF6BwgoZn7GAs4erJx4M7BydBqck1fk5hi7PxSafJu2rLiZSVVVKe48xLQe77htS46LQPNC6WY4sEqayD4q",
  "key13": "3PFc7fXLBRo2EbBcTBWDgs5o7c3Cxfm6EBZBXFfcR9SBxjtj8hLrg2S4Jh4z8SWYFsm3RbQ1BbTHycjnNpYF6QdT",
  "key14": "5vxwiZ7euUR7CxMhmgAZ8RwNVSGswACKarFePSmN627MwjsnKW9jRfMSxg6iyEAtz9wU9hnSi3WBsMmTSogqhUwp",
  "key15": "2FUWXd5npDnKPJmMD9k1n5F2Tw36K7y9vJHGfMpj8vPrAV6TWSy295AzKpmkr4Ef7KXHTBuK1mVm77sAn65Yjf1M",
  "key16": "59VCfH21FTKxDeYSdaQc4umuNvx3WkBURUb5wzvsAkPCxWmK8ct1AnuHjZ2SFds16DrcXcz9g1Dpw1wy5PdK9x3x",
  "key17": "3E8aSwaMvkxzzf5wNzsZUPjK75N7NNNsDbXHCvwg34GJoq7F3BuzZxv585TREtCPnu9ze7pZWh6sieFL1BQuUQ6x",
  "key18": "4jwPJJpZti17XW1BJuFoQqPGrHELEfcGfVmdZjZzMoWE4pQsfhNPAKFjeNEDXcrgcRrvZe4qBmXMUjW3o3Yqohp9",
  "key19": "3ehyw8ECDU7RUWmUjMSKuo7h9UUaubQTPmnoi9ydtzMczTixr5nm69m4z6kE1ZHPk5y7VidH3T28frNdgRY6Hetm",
  "key20": "4NkX3pjPmgAVw3pZuDNHx7EzfTTeFTzvwdYx3cmjKFW6ntK6P2Xzca9CLgkWUYDpLpC1rcmvC6xFX5fDjLa67zCU",
  "key21": "36iUZX9YJ9FkKpeM6MZKFjStR96ux5C5EdTUNiVz1sFB4XyuYyXYaQ6QsnPP3XUbaKD9adicYehv9EMGfEtY6ZND",
  "key22": "3PNmW3oLCPGJgukC7UA37eN5x1sG1KcCt7GTHdCRfDZ9wX9HPoAoz9ccj9DecE6TLxL66zVXbykiXT8VkLrE7cwo",
  "key23": "2hUx62Je95oYsdcje2pxDdKjEhdoXdxHJhGXJ8jSFFekxMtuGtcpt8ngAQK3VwHnPRGL73JXtDZgpKwxR7V8i3Qt",
  "key24": "31u7s9GGERBTqat1FsFjcJ8znKnS6STBfD62eU5AwkHtiPxMnFzKCk63NFYfYVFdDiohTXzEXmJdALfsdKUjyDcf",
  "key25": "2owP82zXj6PPqd9CW2rP47gwLtqo7VJLsStAedUaaGTRBEyy1pq5dGQKfssbnUtezFSDPRgk5tMaCYKb1zr4aaMc",
  "key26": "3kE4MavJ7vcbVHRdj8LAjGnbeVERFvWQbzGSF3ZGgWwfdigHVV7qEwhJ8LBWgaFVd7Gbc6pSrVyCJuFNRoUT22kR",
  "key27": "25tqGbJ7q99PN3gPhFFm5VcLGjz74DkWSEmcS9bdQgeTKFmbHRbtcyCED8kAGUreEhiakSgkpK3iio37Aav3UyAp",
  "key28": "34YpApyXLoPxB3QGWrSrXJkpVDD2KN79HtKdYhpXhGun6SQihLoET34ByWC1egKEmvCFrsgXnr9EhSb3rbrfre7K",
  "key29": "5fqZTLaieuiQpgHQBtCKr5k5Bdh7E8acbEqKn8nFFAcXvK4kJcSPELXL7LerbUfzH6nMN3J3FRyDqSgKyNrH3nu1",
  "key30": "PyZ4WsCq2Q5CN8KtcSi5FXKTe3juTvTQ2zaa9itCf74Z15WZv9Q55HvLZVSv7YJKza8XDsJV6fmXZEpVsVzRNQS",
  "key31": "4hBFXhnuHJ6CHgswBLwRyNKbWcwJXBz8yVUNjWPTRQgoJjYjjK5mv9jFztYoutEBZwwHGcvwinMYL8Bcq5DnQySV",
  "key32": "3DSmobj7qhx4CRBGN9SaizWmRtP8N9qNA4RfM3DoTidhnkHWQ8PXByDwZc6F4qGz7fsgJRvHVBZsLF6w6LWuS5Pq",
  "key33": "4t9CZvgtpoDn25mCqcaeoRgdkM3xL9sSZX9FZbFigY9b1Qj9JX6PHqivXbTzFsQLRCKcGYLZa9w5jETtPn5NxtN1",
  "key34": "BbPCYH9dqmDb15BnBewVDfcPChgR2zx4SLZ4dvUHzn99ieGrNBS9amj1JZ8taLVNLCGbwRXJvoXUkqyb7bvWdLH",
  "key35": "4KykfZJYZ8sv1w8D2W2cGP1cA38VPpuVaxqJ1HAz6ySmosRXexAdxUcVkW5jiv2dqNiV73hYcRRbYMUudS477zht",
  "key36": "2MBE11MNDJfoDGi3t5yoMprcUsgGRjigZfRYesjcBqjYTeC69YxckRR9ovtVBerY7ZrRA6SGhSKRf1vMBs4Qd7oY",
  "key37": "3UKt6YPN7QnhjhiqTJvqba1DNx6fWBucwbYtbZnhbTQsSpfJgFjTkCraowKG6BQ33zNxR1Yw4Ymh2C1fTzcdGWLG",
  "key38": "5FGdJRLstaAxyqKkvAgQxLeW9EFiG9TBgB3VsM8Qhq1jtWUHrZmx4qPjdKVRa4jste6XTP6T9PXhrfmZaAfwEufb",
  "key39": "5VPBg4dwtirrTsx7ojcob33kN2DeFjNfYqM2q94MqXfAHAw8yjyfADfB74wC9DHniwPLR5PUs6hkBvVsAmAvqSvN",
  "key40": "4GZ9SAtbd2rP9AdMW4xVg19jshksMMW9xNVYwd2JDQrmCYevtcR6S4JZAQgBMs87bHR5uQKGiJwL66LHPZ1PmNV5",
  "key41": "oLU4TTzzEnwATR83D425fkjWC5yY8Jmh3X9yqF52ypxL74kqXrjieUNpY1foiXsGCuyjdg6N4c8Fe2g4C4NPDxd",
  "key42": "3ouoRLtF2Pr145ja7wMu9TvAQXU6spwgrACXNz3JmJLo3t1nR63zxXtH2SytHhAvuSSC9vGDG3cuoDBoKAEHspuL",
  "key43": "2a8hW96QnLDwWnQLWAPYdS6r6aCc5tSmfdqrY9dgqRA1CAsp9faXVoGHonb813X5NGjkX7SZ7YXSJDsMYTo7nVQZ",
  "key44": "u8G3YHkGJqtRY4NvV3QFo16eakATT78bbJ7tpuaN3pm7xpyoredVGDBJrUBn8o7hL9Tv2ar5zeQr4faups7r8Te",
  "key45": "wXGboupvi49YLus7eG1Pf2CyQsmB5PcdUHSmZnsSjMT8Rn3X3sKSmfxML7gft1Q6kRXY9shT1kNFe1WwNzGWxsr",
  "key46": "3jFcP5PmTitmT6skdXL74CvSrBAicpWcL2nXsU9KzjkGkQefYuNQffqbBdLW9JHJV2fW7LrxwGNxSN1AHbKyzEQk",
  "key47": "kPVER43cr3Dxc2wci8GyvBUUj8ewNiUdPe97LhwQqjr6o7xmbDC8WoU7qUrG1k9M9TX7i8VLjvX9Pu78KGjFEmK"
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
