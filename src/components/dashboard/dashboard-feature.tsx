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
    "2UMUfHcHeTzJ84rjGwVoJtw27fmL4GBVgZAhyXCJXKH1PpSU2ExYgoNPsT79fGAA5Vy5QNHdmeH8m2YLCXpYMM8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QRYmpbd6gNbv7PwNDfK8aneEQxGJYZRQe1V8SbaCqi71DUZa7QHKULf61TSYJJ2TqCDYsdVRKTW27NEgEXmViqn",
  "key1": "r51Nf7WjsTzMB3PW7TbBngKkHzbnAvCKBhJ5qgrNGPJLcby9rJVdBBgi1VcKiNVbjzAHUHp6PE9hH3PCfCzfwom",
  "key2": "3PKdoieRf2WTVPZxxX9rMVBwNnBCbrygXX9wkVRrqyQ7F2ox8HT11QyNDpFK3Y72XxXqu7ckMZGvuyt5h15i5g5v",
  "key3": "5xRnN5MzAjPW39Kw5EwANK324DxSaX9Q9mModTuyRjfc7S8PZu1Nz26WpNVvzUGWbX1V4HKhxT8hNj2f16qenouz",
  "key4": "5EnsyJkmGuwLNxHuTxCwcjGR85Uc5sxWZhSVakv3qVEuBYzkGNR1KFFLCeXuSgmBPEAVMY9xYQmu6WcXXn9FM95v",
  "key5": "ZDNgPQJEcFR569wnqDJsgBkpiRcfMJTA8pS77tjN6Hi2623YdivsxZ3NrbTq5X8kTytuejEqg9tuq2jiRFSsN4e",
  "key6": "5AFrtGrdjXaJyaSewjkRkqHv4dCKbfx6UnKLPkReGXYkFy1gg6cHAfZNd4FpiZgeBvphRsDH2b5wkFLpihz5aHVn",
  "key7": "4KunqrrPRcZDkQcCjE1CzgtLV6BUeBnyChq9YS5PeigsJcLpiDW55rwaVstV2HFczST3vdHTRVVkTkkmkMH9Diej",
  "key8": "4FwVZshmCmkxHZCmpyxgbNCMSJEKqKURmZm2n6FimGvdf19S8Qvy8j8F7n9Za3uwjoqzMyqJLxZZqRFsmVJjUteZ",
  "key9": "62DiDBpgcjwXjt41R9vwuJm5jFBpgiMFyr8fpBBNN4Z3tKv6FcYdi7ZUZr8WTirMH9dDQgqh7a5mJtBLRJW7dZo6",
  "key10": "2eqXqwo7KAt6yNgZ6LfcD4925TvATx8Mat1bJf3VGEkcWMPCtbZm5DCpS42297AvdFGR3LdHrUTK8xUY1VFquY8j",
  "key11": "3pdvZEUo51vv15tHbtHWLMzsxhkrf5qP8smWH91Zaegg1gWhz8rS1vqKrok4hxXcF9bBAaYK9Fbu8CccAPejMYnE",
  "key12": "bKUBGEtXLhXZk1PsgFkbmMFeRKVgVFrdK2jrukMpxHFwSChbmNmifkc5NpeXHCtuK1WXpCFfgSB9vbb4y1DvXr3",
  "key13": "2iMb1yGRaDhQRQrCqQmtaBTgDBLBg3ge3madcZHgzaUyysqq8qj1XTumc47fWDQR9CTu7A1nSqD3qgyBym1uZYkZ",
  "key14": "RVah8Yxx8uY9FvpHKbbGQWfng5geCHsxJtNUr33AY8aHU2ypgmJJTi85pM4SYgr1tTH7dRXx4N2yxeEYpdUHyCg",
  "key15": "46LBqYsH9o8fSrTuKkmcRzNa8viRLwsjgADA8KRDm5VTpR7Pqi8un7V6rhGk7fmaJj5BoaoDky1twMmrsXdtFWdU",
  "key16": "4G8aDgfcyi6shLsD8C815hFAsQ12kBqRdaju4f6afsJV7kiGvMknNT2LQ5q5YJYsaeiSRwGjE9Le15rf1hrpWhNW",
  "key17": "4WpnczPJycG5XQ7UjcJpGSTqZypVNZAFf1Ay93t1hGXa9qCN57sBEd8XxR8o3waihzNYM9QGyW93omzkB8r3awHU",
  "key18": "5aueBUUeiFRcFm5mTgXZSFt5kerj5LyhZGQkpy11uh7NcbWUgtJhZ296g7fnp5Ekuj3ykQ69Cw2Wz2BatAjk6ZEM",
  "key19": "EHMHUSrKR7gVT3rBxbKpeWpb9ZSNrLbJ5KTYF3y2iRVxwYvMFm9eZg52RxnVZN3n1Mm95i9Lq5hU4M3D4sgR7pM",
  "key20": "ov1K4qvuzeYFK2QdLUvftZBp3Lrq8cwRH2BXj5v9AtyTBfY1G7RCSJd43uiAXCnJbkwB1Vqv21JioEM2VmeC5Yc",
  "key21": "mHQY74RS43nBwLhLo7L6iQ8RkNtbcGAh6nTVz2z4s85GWSUGwtr9LVftvaFWArnXZMeFdYW11kYoUXtQ6jiiPoV",
  "key22": "jXriBXhqmFVWGkfVMUwcrKhdfjaNrKuMSqMCBTr2xCinTvg2jKCkJY1y21FPGZRTg6XuxoByXdSzW9BL9UaGJH1",
  "key23": "5DKiYwkwBQDFSuXeksm2cFbMz1nx87jA5mRDfi4g7WRakoFkaLjFJodRDmJURxdkYbiwjERezyGXybFRfPRh2Gc2",
  "key24": "3WXw2KSip2MJphvBNB4eAPeEpAXzwxekVk1VDEUqp5YQmcB3UGWVQUXtw7BeSBMB1bz8dyFR8fiD89LW9bgBhTWa",
  "key25": "4JtbH5q4aBsPF2rZxHvgxtpaS8oBW7xYeC5Sxbm39NdvZqQRbbmMoqGRqqnrbDxM4Njk5mJCSBrQMZ3aQi2tAAzr",
  "key26": "5qrqdVaGSh7mhhyxeGRtgjYjJF5vLc94Ntct4Gv3cd8Z1mniyZ8T2dg5ACrnH4NawPmYbd4F5eDgP9y8AaJL6YPC",
  "key27": "2fKNbwRipVEaARadu8zSmhMMCYkRXK8bKFGXNsQuqHqVDumQpShwc3R2eUUpVMV8i4iVuZuJBmCP8LdpVjFeRKuE",
  "key28": "5rmGCMgcoJehK7d22Zt2zDhZ1s9hS7LiSkebxT6nZkj6m3f7TbbcKp81EEaKQmWivxvHawhXCbnbgEz9JtzrLTCN",
  "key29": "3bZdHaqM2qfc4LDVUZ1ywBzH3zcmgNMvsamf45qjHv7qzd4XsHU4LoeNWUW88vnYbbWzjfiHtgy5yyJUDKZuLxLL",
  "key30": "4E7FEd6HaAqhjxioeSrEuCTAvkyk3hFFy9om2BaLM58hSdURBo8v9LDrnN9ve1qeq42AwGQbEjiv1uVCdY4YURGm",
  "key31": "4Ax7H5amTnESeZRaoQPRo2wMGgZLUPUgKrvECRtv3TnnyPkpV6UzM7drMEvnthjzghJSWuAVCdhBwBDxPucx9MRu",
  "key32": "3CgkLxMcFr9YpQAahZfdACz7YHBVL7e2Ua5P3oyWSZCop5D9PdStPRbEbNU6EfetTs89ct9Wzp7gtn5LatAG8q68",
  "key33": "55sBohB5UbL3HT8FN3NUJ9VPiqLzq8iBcEVGCBydYA5a5izeWwCs4J5KAwi2G42sYtxvHosbhnSVMK7tDM8YeXET",
  "key34": "28CBAvKYvYjZcZTSYHXcAi2hjFkSALA821UaevF8PsPVXmnfNiVnbwRkpnPHaAzptE38JXw2dzU8JQXyZ2Ui1sFQ",
  "key35": "2PrhDwvyEwBRLucUemUoxchbsNBvMcVRgGRsPwj28htzuB8fzMPiMMhw7wdJgyfJz3z8huvGbSymM7f89brjCS17",
  "key36": "3yk5CQYirt4jhhHkiYt8d71adNRqjU94XB4AcjWJ9HaETH2XMgGx74c6XVizvKYrytKmawELQHCitJzT5nRhQmPM",
  "key37": "3mCQid9TgnFmE6WwwDqkXEu9ZCERhzn5yJAmox5AQVYQkAcZrs7do6ruQemwg3UrKPdJynuSiFJzWLmDsixrVD8B",
  "key38": "3DCRvedfocaGuD1TD6jdgAfYPP32K1f6KUttQpgCWESPA73ggXwnTdzYFFYUshKLp9n53x7RiTPHW8HiexUP16PF",
  "key39": "5cNeYEVBb7SFJimkPHrV63fwq4r2eYck16AyhqbpzEtNiiyrBaLNVYbtx5JRherhiF4cVvXTjmbswdhtPCxevSfD",
  "key40": "4f5b6f114YBXT2R2uRLRqVoqyrkihg9ScW7GFRb1wi3xYG1voUqnN43n7uRP8FQGtkR4xWGQNdTQeJAq457jcX4L"
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
