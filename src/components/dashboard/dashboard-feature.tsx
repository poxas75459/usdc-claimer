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
    "5ZdTp6KYe23QJm3Qj5zjgHwf3ZEH5TPU9peYHzfG757qe4X8pExTXDdRtVnCwmRxmC4mLEcTRNx8pWbEa8XzxDh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5foQESoin2tZY5DpQYSrPzRbCWeXidqkT4fhtecW3Lpv2hxMzhHyGpd98aiP3mGzzdVuBWEDYHnxxkhabVShwja3",
  "key1": "4xXeBARnKTmcNDLvB1TqeFqafwo7zHWoTHrNECdGVqv6SwoiLFUrj2uJ6VAj84wMSo3fhPtGVKtYNBuuki7ybXZA",
  "key2": "4rd3idwwdGE52EpcdrNTygubjdSz3eK99h7bYaijNPbsMEkzFfV237X2DHBaLz8pYN8ZrZHzuA8q65ifusNwqYqz",
  "key3": "5TGq9e4V5h7QeUGRWTSCEiJHy7jb6g4nyX2N1mVEzRvx86HMoLce48fZrh634d3NRRnPqgeoReb5axyw1CRS7nuk",
  "key4": "5sgN77VdUuWUA9Q7E3emUJbrEW4xJNnqjDNsBMGrQ1wcZLp1A3hgWG7stUGrTQ9nXwg9LNs6hmdfS7v91DJ3QBg4",
  "key5": "qfjyrFK5QmEXokhhG3ExqdWXZaKYbYNKPksgbYUFSe2Px6MFAUqQ2xBpom8FNcCk5M5RCa5Hyhrfcwb6BDuAcMy",
  "key6": "2iGec927WeE8uy3dpnT7UctH2U9yVEQfJWQk6C19syc6desHasnYU15qa7QtqznYWJxmzBbee1eSe1wXnQaYrYz2",
  "key7": "61ypuBKBPs6YDcG3RmGtRpB4jLTZGRwvgkiRp5AAJrV5Qy3owzUEh9Ej8aikrA5WuMkBSA89ksiZ3V6t6x5tBbWr",
  "key8": "4E1USme1DszwhUmo5m71wbLLSzpkj6qcGgYtVmcsYZ6N2hQLnwv9XXXNTZBRch6MtB8rghemS32QRXAHxDJo1wBb",
  "key9": "58rZVUvez7r9o1QPNCRsL6s72861afKGQpVFHGMwZPGQcV2gZA4G6eBAfwJ6TWhcSqUgxb4iamJsVXyq3Dio55TS",
  "key10": "2zuigQ1ZW9ZwSvf7yWAC99wUuHKf4FFUE2KXFLaWABka7mXBAywvdMCbjc9RnWSneXDa6wFH3squSRYYBzbFa1tg",
  "key11": "3MjKZFX7wDM4M7okdg4MKW99aaQiYPTKMsUg6gKo7k5JYtSnzNRU4ejMx1Nx3WfHgNMYRHLKZUF9yMkuE1KuHyZZ",
  "key12": "QuedEoEj3Eprvh5Ef1cirGQ3i2Hna5ztbCzutRLpTqiU1RXjs1iyHUHJr7b5MDS8ocepeA7vjiLwC59ykQnYsQr",
  "key13": "4MDaxrcTh1JJVKmP24vjmiVwY6V41ASb11qwVkbJabwmhVnNgb2So92UAUHLW5jq42P8Vae8TgDqNJh3gHkfC1m7",
  "key14": "d3otZX7Zw5Pt3v1KiFxemAoBaRQa9Y6KgHwvGWWVohionpF2dur2bR6xzDmBiYFbA2TRGaMzEGirJRGsB5Nstup",
  "key15": "2KZBh4DE6Cbjtb2cjPbeQ1hQcs6fckquDL4d9MEDt8fvSfEWbKBy9fDsrTTFdstm1YtzAyamPrTXG8di7ieJn7AL",
  "key16": "3kE4Yv6oyvv16u4aUtLYbfi6vfwazcJGLL3MxMhqpreAtmiddt1Nc5Ew1BUvayLNCwq45rbXLGVnjWJnrTtLeA43",
  "key17": "61gUqfGMTgeickiE2WWsMRXsNnPdd6cSTLMEGYPDmPYz1bXuCSDgd7YC42SWRHjmeLzpw72pPj8gChTaWmpq4v4F",
  "key18": "QBcoXboVqyf5HUcfvG3Z8fRnZJ6NmmjHD47yPZYgQVha36AQeP9dKM8ygjCUS1WkixgGFMFPDwX94K4tEQKqt27",
  "key19": "2yNFkxgvsMCowc68327WMELqx1y3AZDn4CuU1ZGLJzwruvJqUN8Mz2RsMzepZsHWAtwasrZPter3cHD63A1hH6pm",
  "key20": "618GG8yV51wtbC3M69fMPSZ35QnLz3gYvhmFEzyCS6Pmg9g1bWUwUb8paJY8RpH4R6TYDsXiFVPPoAmLqS9Dn6b7",
  "key21": "33Lj97fqiQgsmkdg6P1FpMpSUwrKNViD8vf8qk2n4ffFWK6vQb7BhiLtt7JB36ddNUhKqHZgwUSR9d8xH6ZUCVrp",
  "key22": "kNAn1EVAYUdNkhjo8chaCkMy4uh1EPodsF2wuNGWtNZ1AsH4i7YLtK4SMrE5LHkw6kysiTpSEhdipiJBaN4oDKV",
  "key23": "1t9RVwxYSDAEHkvnEHoUrVsbwiWzgepB1HRo2AEeeLuiNYMM5RQKT2zhyMbffJnvbUiULgBCNYA5Q1YC2VCYhLG",
  "key24": "3PZ2q1T3Q2Qi6pNqEpjAG9RzbeZkscBJ6ZjmWrgmHheBu9Vj3DK8YPmochY3xxga3AeRVosPVsRJRXKZJDp6xTV5",
  "key25": "5BVF8eMaudTzjxNSUFtThRiSqbqHrcjoePfESsxfs5FZE2MVqyeJMM539YZT6sH6S1QwC5jdw3xgtGjUcM9t5tPD",
  "key26": "3V1B1ErrzGcTyE4QmomG6KQexu7pcvyexSvNzfJcwz8U9jX7FjcLYuXh4uYvS9jzS4QReZtJsffvFrXCRJJAhJqV",
  "key27": "4joaTMapZRrPiC9RYFNvh4iUtXP3DZ8y265hsn7ypiAtg6AM5PewoZZgo6GSBFMemRp5RLUWeTTxZmvM924hcKen",
  "key28": "4DEBdKbDMDP12vHt8NxFTxNxpp9AdBMpRjyp82JQFbLuWXMt1YJyWJ9eGPcbkEECaZXsjejKB5HC26cXLBsqyeUv",
  "key29": "49jizg2kRaFrJKxRog2EaDmFNXSKsRE2AhgktUAVBWB8ZsiRyprP7QxAQQHBqAJnFxDiTpxbkjv8Q3DxbfJzBm7G",
  "key30": "4B3mewcRF9oYD29jFeW4UNLwHJbFYji8DZ1n94Thw3YumNHQFoSFH7bhbBsHP7b7yhnVARkDmYQLuGFh19tYPtfh",
  "key31": "5iAw7Lfd6sB5TvVUs4DaxuRKCuWxmoVswewR9oZPAZLuiM87s9nR2KB6ETgyzZHX8BW12ufFQKD1u4bdNAthshmF",
  "key32": "2rtBqDL4CoU3uV2Qeyj5dgHJ7J49QgdTUL7CwTbg1TYpY2U8MYhZGRvFCEP1rKdsSxscFskNvcwqi2etEPxCNXUG",
  "key33": "2piF3ZfCEq9emUX1G7XywxmM9qiXUEvuPjhCgi8RAij5nCSfkPUho5Wmgb81bjxwe7mF217wnrUZ9nQrxzUwuV5c",
  "key34": "e7GxpxiGx41b2KsxWN4qu7DgmYPGqWgLnxZAD29ufnMQBKS6M4XjMGNo41PmQbNkxDBiZrinrCKUupfbMTapNty",
  "key35": "5iyZgUkdwj4vyCLX1S2TrG9kDM5t3AuBC3kLdj9dVCUsRd5UooyiF2h3k69FTc6Qm2RfrCqsmCWRKUtdy5z4WY4V",
  "key36": "2DHLvTMb7Wr5F1mPqA3pjRVWbHZm5nCRPgbp3EhvxwvRzxcgeXfbSiaFauX2gXCa9ucviU1jNjY55BM4zfFFgR9r",
  "key37": "8xcNPeAmUUiVQ1uDZafu4JgKENqrWyu4qYQRHVLES49wrtTuzDEpX1DRuWGRGBvtZs3uuP7sCibTcLUpL7PesiV",
  "key38": "gEvSNxULCUWkdo6mBz4hkzp1A3tyYUcVTt1MGA3cdmryWaDRyFrRd8MjRRrYHu6UKMD5Ce1EoLta9EJ4QUDnJaB",
  "key39": "RnD3U1PCUDRCmVyivWSTPBYoqGPXDbgCni6CrHWUwxu1pJoeZZjBsafd9qtHeqEtpgGx3T8wXgvKebEiBQA4TvT",
  "key40": "54xGc9tdqh8NmT6zueLJ8Nt1iywjoZbiXN7PvKQ6DaQgV5reQoWmgRiA77Eeb6HNpwduEpd2yQW66jn7Hi9jkUAd",
  "key41": "FwP2vwaCERYUacuCgS5UTgCgFFdVr8u1DUNBmiNTCbX7iupQWjsZHBuMfRCUjJchR6Sxjii3UY8KipyuEb3j8Xd",
  "key42": "47sqfipJYww8i6jfgSJZ8JbLMaBcjsJUBX3tgQmJApcipXDktupC2uPxboTbGT96eJC8e8JWiGK97ffCPqqe9Fai",
  "key43": "3u4uSjbTZC2su2mqkgwHpoixC9Z6Kt4xcXBNUdg4nyZfdzQ6X8ERre3hTGWDFHVdyu9KEEzMqqAQtWaSsTuGpnzD",
  "key44": "qQAdLsx2FNG9upS7maJdq8YNgW1hrqZSbDWWf1owz6nLAXmjhVC1jMZXv4maec6Cd8NVg5CivBH9u33S1aJUG6v",
  "key45": "4j69xwZvn9y8E5HkdKjPVGAYzECL8roFu9v9i6aqysaeYLvrCY81oGArfZcFVQhkhcLaWv5WJoGywfNffp9MgyHs",
  "key46": "52DVXLKnr5sHDtAVc6Rvv9zt1WUMmgC5QNiBFWTuYjMKtvUdioZ2tDB5pwpYpb9CZTtqby4icuM8ewM4MgTydJiZ",
  "key47": "zuiaJXq2jg5txUUy77YcZ7vzo1NtmEeZgnQZn46hpXaPtggK6ZyHCpsUvBDjwvLUVBLAbAQgUGMQoijrijbkshG",
  "key48": "2AMRDRtUQupjfYXSdorjNsAxfLCYajxDB4ttepm8qe8zDHKgZSbGLj7TVDSdmKyNSqkG6eHQ62ZKchG68u7idrij",
  "key49": "3hFr6WLiax8wrsVkuVFSvwouMThq18CAwrsEJbX48AU6RmA3Rqtsxe62vP93wUw7YWgxfZhXBnUNg79EcsgqBzVW"
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
