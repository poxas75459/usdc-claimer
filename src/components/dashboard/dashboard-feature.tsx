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
    "5pA5G11Pkx4wR5vAY7TTB343hGftfa71VxEKp86xUAjRWXAVnmk7XAMV32wUA9Qe6wF2Lvbwe623hczBAcMQMEEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FGMhbmCwcwsbT7ztDqS53sTz4FB39Kj9m4HF3fMnpNze5wBsHBwy4v7CFTh18psFi63fEn2ED2irFYHpTfzPraR",
  "key1": "3Jtu18Hh1JcWypvjn64YvtRPTawdNVni8TfRxKPMzhBn4KZ3DGuhweeabCsQBkx33uRgnaaRknMYAJB5ncT6QBaA",
  "key2": "k9NnXNfzvoHDKvFNY79Tr7kHRBhaTYJEgwrWmyh4v4AfQuaA7TCwgZMPEz2EAo2xZfupsAiivfCVuuHjjdtRCY5",
  "key3": "2S3m7LcwkySCSCqvgLmHiiz1x2dTMYWpAhXwt5aqwMtZnnqtn3nkuzNaj4HsBvWyn83mFmyfSKtWVthnwUUoaqN",
  "key4": "2otxK6NFqNFTzEHzRRGLryn1xXdN6PLL55F3qLKHqW7JX3hi8EcA91tgtynorcTF5K6gvc43zMkFrM54yASDZqYa",
  "key5": "38tNaa9ZuueALzekovrq1FREjJXxT6CwdhSrtPSmZLzUZXHZu1zcwMV1MFYFh2taSb5MVLz7x9ecxEgMrxarmwFj",
  "key6": "4JoBB76Fu2gg5pot5oP9wfYcbMP15TZWVCWxhuXHwM3Rzd7Ahv9HT9b1LomDmp842Lg3jEJJ4naMCdyBDdozEBMA",
  "key7": "Td4QGKbChrPydkjoQt7TVawqUgqRXqaTya8nq2fRE8cnoyHhQBZEbuH4d983ojx73BUdk5irmA7sWXnXb8C7kPV",
  "key8": "2Nyk6ooSnsJ5WpBfUiiMMX8fJbJy2s4efp3VkPwjQT8fqvgJbnDUJJ82Jf5sLqS2CMyjQHRouHwJpnLgAN7dRgXQ",
  "key9": "513qxJbr7z8tNYwRMZ2zQQ5rce1E9o82NAQm8MCCsuHVN65k97gvTHP8jFXanHLXyP8SL99Cgjm2Xss4Prcq1EjU",
  "key10": "3y3BXViF8ZbgLVEZ8ahtbpP323uiYcuaT66JkYyHndysGLrQES2fcAzrPXXgLSLZYdBi5S3gXSE5R2toFA2TCoRg",
  "key11": "5JAUjur1AzQWQUGfyZjCoUqGqr2NoMJq46To5e7p1HsnvBzGFqUU66LNYHANtecaGATxdT15jFwYabJuRgZuefBW",
  "key12": "3NbxFR5jehnSUoQSG8vR7LqYN7EB9VF9vvVCvFWiHUp8qMtXsQpC523X7KCVA4VnJaQAjHnpzfedv6mai8Sh5uJ8",
  "key13": "5pThwbe8NyFH1eyLKjkR7gQfoBkM8t9KfgnF8LRmxnV1CyAFw86Kv8whK545N6b8xhLMnBDWsUGxiKYbrSQaxqJ5",
  "key14": "uWjuEm9ZqFtherJTPpbZbuEwpb2uw7mVo7WMvj1i5HdoAfsicUYRkgYnzqYY315FMfSwtdaAem5Mz64PMsRhANR",
  "key15": "2WfeDLPE5AJE2WdY5qBRL6jh3K3pd32FK9jQm4ivy4pZy1p9rSVsyy6qiBAW6PaQj9jVpFgXmRiF8h3Pj6Yhy9Gg",
  "key16": "23zHACtJzu9VFN7yphiRvVCyNGt8QHDEg3ijJ6v85G7r2uu2L8pZzWHtUpzgnhFp56ABUM2eHvTFUWwst1heiPGh",
  "key17": "4HMRf2MjQVzXexDfF1kEagghZyZRdpekiJFrN3FiSzhLv6bxqztb3A4kdL2jCagBtn8mw1jzmk8exNZhsy81y1Pw",
  "key18": "3aBVsymQGU3U9M4viGktXsNdsnRA1BGwfKRmeuVjV3Z6UdikBXSUBjMppxpfjS689iaJPhFCxsXpyda1pEUsPo9h",
  "key19": "2LuPvJrs9poGwZz1nkq8esD1vC13phrppeZF8fbJF93Gv1J6ie5gqKLSwDbZ5bRJy8iy2M2MJx7SCvjQtx9svakF",
  "key20": "gKQiKdeqXvMH4976wnQL7TvL4nYaMHptPBCTaM6QZf5fmZGNncgqFHp5czEiJ4oryjVG1dWrQy4qYsU73AaveqX",
  "key21": "2XQn9sbKkqGFPbWePVYtmEJx1dirFUX1G7eMdhXCZawteBGa3gXH7h6ictPkkvwT4UbgFL5fTshkjHqcSzrHKeQc",
  "key22": "jtB1Bcn3dRg5qbca2fPvJLm1sUfr65iCxzvBFiWiPbbPUjnjhxBm5bS7DXSZn2UWQ9xk6Sk5hzHWwyqNbkSh6KT",
  "key23": "4f7imJNdwomE1pUFVjnJv7u4HWoGXqxHA1mbhDaKZNHQE2Y5eFwXKzWARKJkSRghSJbUFz3JGB3Z1XnLYr31Q7un",
  "key24": "3jvK3nUXadhfzCTRE1f4GBWQq3c6kqo7X7i2HdY2aKHCgfVGGUtietKNX8xyP3dGh1MamXSuUnKKFhYJUQhf1zez",
  "key25": "4KbsqBaQ19qJZVWHLCq2XuLtdLVbogrVLmdgBukdCoZFiojhm4LVeJ7gpSDb9ZLBkBmTfMkDSqhDxHhtNDXMai5w",
  "key26": "2WnxmEXTnksLJxghkzzUZo1EpjCoiEYvQRGpYHPvkfLoc83RFMHkS1E8N7KdWpWCNfwciwWgk18kkB43FBu2veck",
  "key27": "4Fub8sRPLjHGTNCvJRtjyKqDpaBLAP35PrWWWGEyBC8gLw8JKu5EPVp7ud1TfCvf5dD6H5crjL2XyEsD8GGrDrMk",
  "key28": "2MZnYNkZiAfzGxjSq3MVgAgaaYBHJCPxVGsBUJwP1VnGevusstDRqGk9q8kH6K7Sf8cJnaJzSyeo1VCmP68ob2Hi",
  "key29": "4XeBLwdoLWZGaHodGs8nm2Bs4yiVXqaJewnazE1bZt4PbSpRkr78AuGrhJvdpyBtNC4kErNnGvEakg8CLS7WCix9",
  "key30": "4M6VMgdRtFhdt9GA19hYubWsV8JctfAGSSF8GPUaUJTxpnj5L4vPZxEy1ZQSN9xxdfPjKvFS1Z4ESJmmNoJVCTz3",
  "key31": "65qssYrbXxXbMWEVMrecx4xYLw5yzGuhXuq1hG4Qk9kkLeTXoSMmzwpet4fEhUvoPQojQEhQgjWM5AZo9YF41EoL",
  "key32": "443TcDNgwGRvRyH6Ayp6yc3nzxfKBN8BH6b6rn3Sjyeq1fBoME4J1XB2dvEzXjqehj2fHqB69oHSeVqDiTDA4w7",
  "key33": "39iAM2YqYp8GKbLQ8JBTVG8xnXQMMGPeQezKLDyUqho3Td4QhcaaXqF9n1vyrJw5QzoXQQD9dHDhB8BvmApJnXog",
  "key34": "4NmYhgL2TT9qTK1GZ1tvkfHHy4WubjCpa1FjLetvhk7cFUYs4gFDM7YiZ1mMV8eGmc5Q5iDFdoHr7enyMFopoG8P",
  "key35": "2ZYVHaSfgsGcnegdhYGy1DJm2R2qcSTHrMA2HH8wCbm3QBLBeSNYvsiKebhX4u2sZGA8eSCBHBZvJPTNSqfnzMfL",
  "key36": "4ijPxczXvovSkmy3PjRWqwMb1wos8orVEaB44r6uVrmyAmb7QEZfVRi1kaiKXPA3RJor83KYHT7nbQ7wSyagXKy3",
  "key37": "4bYRM7JbUvpUH2B6PKXvM9U5B8NmRkERzgn9AzkwTRfaBr2wruhUERSDvwR3u1MmfLGw2qnCADKTBLDEfZL5KEUZ",
  "key38": "3DoGQczx8onPKeghwx9WqiijRi7U8X31EBBgxKczcd7diCTbh7Dt7NaDNfnM8VzMsKCq3csYpPU7d5vXpR4XRotL",
  "key39": "5TdgpcjqTrpR28a9EYpeWFha755TKnHFpwvQ8Zu8ZGst8xgdwoAE3i3DbEESmTtaSBdahLMTtuHL6BBFvjBAbwzD",
  "key40": "3Vuf4HwnWu3aCMznj7c4g9M8H3fcoWx9iue5WiR6nGFNUzwW5nPZDqYk2wFGPfn5whxKPagvs8ktuWaLkYEhVHsm"
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
