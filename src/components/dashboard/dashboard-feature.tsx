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
    "PBEVjEKzcXSR7DfeGuGM6JitsHn9RwG7J73Qq5JhqvqVsyysrd9uTrrZpjRAmWFUvm9qP5rMJTnPquUmKiEf4vC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gwJmBGbHW1hSxH4uC3iAUibtFrWkoA2GNDdV9LRNdoitLVEJBvQozE7FujjA4QiKo9zyAhq81bfsTwDKJnXRW2M",
  "key1": "3Sikofzg5Bg43omkV9y1aiBpCiAvUpPs9Q9tuPzRQfJJznLEnm4zp3DCGouLVnDMgt5gjNqvxHMajXTjtLW52hGJ",
  "key2": "j4GN41YaSiNmzjq1SrvzTzd8qDtk2xur5rAhQJ5isMaWJFQBzn5SjnHMTcjuVTyrq6Qy3HGvEUseAuX5e2mrjeQ",
  "key3": "4qHAN6e2WzLp3ju22fcj6YXiBNPEf6HAgJ89Y5ANvxidi7QqzeKXh5kbYzuD5sp2PvXy2dS62stptzmd34Dp534g",
  "key4": "2KX4zMUaXmXvpvqhiTccwWMp8tCXhsfobTPXtcRGSHDGUziWjmmKuyTYRz9i9iZVTFdn5mYW4ipF7xc51qXuDHkT",
  "key5": "5sT1gavELc3SgtiMH6tAuNMMp3SNQa17j8dCzSX9LU8tYz4Rd2w2V8xYcpv44KZb61TYsdi3N5peDSPN6ZunChDt",
  "key6": "oN7ZFDjpp1mKhRFjuRP6sBVeEE49qavEKM8x4jTTJ5VEfnJpNjQxsbrUodXsx5iWH2HSb6DJXcHd25Hb5CRFvMn",
  "key7": "rK7MdmKsvRNNzcnFM7UP2FGdrQh3adg2bwk3WTtgKcZZhJiE8HgUpx1xBY1611ucWVKQak2nXr3iaQKtfTstnr3",
  "key8": "62dKirUeRQGTSMMPDysXBitY6eMm1UWM98UsCPXXRzdy5isusZB44qfLcCDJTgZsxoFrLo1JMfznB3gaXMqpkQxG",
  "key9": "5dGsikPJ1Synm46xcnXQecGqx3B53H723tWHDZXvx3iTC4G8yffd96DwuNQNVHmUKCnUUMb2k6weiQzft6ifzZTZ",
  "key10": "cA2nGQoVHC23MGjhK3cfra39qQjPFqqXrAymBbcwUfrdaUQddLosF9v79Er1FjW2dfVe3h3CBkANw3gLNwV4u8q",
  "key11": "5t68q9WKY68Y3vcDdddAczQMksP8bgE5pHcXpfx1N9BTcpU623yRbGwAWXSD5F56AWS1E7SfnLojfRZ56sga2BRt",
  "key12": "LNZhCAtcuZhwjiCSL7YonoCXHP2jJmQWFUm3FTmRMc6K8vJHBjQAAuXxSeJ2amSRwTYGFfRanb1Lo9vuu7qGA27",
  "key13": "2LwR5idWnZz3eigjuuH1hCaMUsPh6HRVGcGEoENZMpefWGivdsjs9j3qi5FtnFRXXNZBfvmZ27Hrc7oXa7aUp93y",
  "key14": "5nMYDejt8yxUGYyAJpxjvj1CyddEj4fNbWJDUUwRhmjZy49eREzvZM98u3HoAwFCXLuN4nbQJVgo7PjPf2KuT3Xf",
  "key15": "4AfJWKAXAd5UwPNhoJuJpHSHwSniFHWmbYR64vUESpw1A2ABkpzjN4dJKrHuHihXFwS6JsmCVuiVVj3uVCBNwStL",
  "key16": "ANausy8iAKgMeGVSn9QiPpmWrsAfgyufsfVdHazvPsCNUeaCLiLUnC64npZRF7V2KKigXPMqimAacs7hwSfZGhL",
  "key17": "2NUptL1rdbEpdj88z2nkzUZDw62twbxpc7ppzH1a528rRjnMCHjFQWsTs9M2Y3PhWTgH24xmKFAzsyfATsiYrB4c",
  "key18": "3a7G3x3K3R59PqGsH6cLa1x8m56321eU5J42YRLbnMwpTXPVLgNiNDnAzfDz2yHxDPyiSmgMPfq49nmGX3pD5ZSX",
  "key19": "4BqdEzKejp8VTjZ4eU26okJbVbuzCo2ekMdqJ3qKJBMdeGb3vry4vfpVvsNnaRq2LAzxD4xhJNQdVWYL91s3wXVo",
  "key20": "3Pt8cv6vuDfVXKi61mKGNXD1VmWuuMNRdoFQ5CSyyaRvpatG3wv1ssrKhJqKUE19YSWWXpvRb8D25qa4Eo2sjdDT",
  "key21": "3E3boGjAS4z7hDzyVyXSgyZYsFnTWQTzPs7NCnoJ6rWEbonjiMcJxvzAe2FbUMxWvFyzxxwT8mxR6Ks91bsmc2vZ",
  "key22": "547jWKs5c8bJjCC5yme7TqiyQdaMfpLi2zsy5jV3ezExGXTU7cE8F1Le4V1A1SgHWxa6AppoXQK5pA1FoVW1rrC8",
  "key23": "4TYKrHhf9Y9vtyZr3tvatLfhnJhHKdq2kcFFWfbWV8UKXktVywmnCD91cSbrzyER5bMkeaA8jnrnNSpWKxPbTjyQ",
  "key24": "3ZvUEppqeQAprShU9X7QW4YFXXgTktmfqZCLKPvDENb2n9D5kyE5Fr97CbKMzz8rWtwa8yBxHiL4rPj142oDasP4",
  "key25": "5wLhSdGAR9zfJUJfNUsfYBYoAPSo5VBJvUASAaZaD39pszPXn1ocvRpLkQiVFuavmzyiyhoHcWRJq9qp9Ntztm71",
  "key26": "655tB4rhGcrZULe2xvCwEJzPsULXSPMYMtzYeqgNgCA2soFcgAxyuQeoD6pZTkdmEqg3oQ6cPpVtnhBfns4qfpUc",
  "key27": "MQNiFfMfEzbwApkGdFecZyjs1kS75Z9vEqNuw7XXaargJXmuk9vks4AdPu5QLRmNp4KJvwvLCSAJkfnzwDsHMH7",
  "key28": "4jxnSBdAAMCVSTQ4WT8mSQGbW2hwXoKxgHdT9DMf6RpBMWZabx44RGvnPWqBVPWnkNJ2SgTZ19CQpYiBVF1LNRDn",
  "key29": "vRRGFJvsTvxpWhcAyJnyKsmockTMewTb2MWbYTxrBwr5YdWKTL66ZCK89bCCkCBSLCTwoyosdYbJycJL7pA2Mj5",
  "key30": "4whbQbKx9rUzipwSxebRmESwE9HmFL2sAFbqAnxEZAJpYcFErT6NiVieDC1nRZweyhUY11foW4Ne4p7c5qdA7hpu",
  "key31": "3pJgktQjZwMiedjswBtVyzFwwim39nh5Mfz1xyqYuNri5oWx4L8MjGV7zm4gLZ2b6KGiWNjUy3tr5DxkzzAGBQgv",
  "key32": "5hYEspD6UW6YjQBmosyRNmFCKhB55bfMXASBM2zg5Fz5aoENjzw2k5uQPMhuKdqKPMK5kAHq69FZyjGECXnhKHJ6",
  "key33": "4wBMxss7smpUGHcDXMxXuEg97mkwdg7f5wStWxkkYauU1uUzTCsMEmUotvt1UBRLXEc7JtcttT4NTTzvKp7NE4RC",
  "key34": "5g4faXCHeCeccfiFdtiXyQV85Yb4UKUVJR8EvhDKtPvgzNgNa5Arjs5WyTTUAWGpbSBdbzjUR8mxYJCtb9UodALb",
  "key35": "2VTMSRm1KeiNpnSTJUMGuzaCjK5LBHxqAk6NuSc3XhZRxExn7Ng9aYCU3B6kAiQmrzQwuTq2m32Rfa4P3Gxbv83T",
  "key36": "5XF61fL3FL8z6rGzYeHL5zFDvQFBsGQcsdBP7StHrX5qtiWnFFhHSxTBHPUGkoWjcyH5cihfjVvyiS76QuDYS29h",
  "key37": "5eYF2pro1WkHjUJXQFzoZn6zn4mbfyFUe2RgdoRgFYxmNBm1BakdHKRkmmMQ2fixfkzGxkuN4RPLcYqJ2wU4eK6A",
  "key38": "2bE5TSKq3rJuWj7kF6rDTq1YjT4erRCmGXkrXJ5MsFe8JRYmWiFjX3d8fA5gBFws6K7tJ75HgATJ5gEQ2SZhpW9W",
  "key39": "65hUSurt1MwRaBCcSGtzyG1RJWAsbZak7bQVik3QGPNBUFGq17sPUE2UUkcFrBMmYPzmkJJ7MbijVj2dyJU45YMy",
  "key40": "67SHyQq6BayBWMhy2aJo2fSnyHcKzFBHQcCx9w3meZNnsP38QbD3CGpUqAvyNSau9FQFMpbAm3FWkuiJXSbB3WYD"
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
