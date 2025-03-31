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
    "5ExFMLK3HusqCJxjqmdqWozDL1yr3FJnZyvqkDzkYU5tv6G9kWbnZGUj3WqnWrQXWrSuyGcVCCQQntxerJYPCsT8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vD3r8HAn6CF66MAJhMoerZnFjbbb65k8dMMC4Tgup7KVt56HDpkyUEXx74GjiJKqxZwq7jJdBm8eBYoWef4X7Lp",
  "key1": "NNFqhzfUiuLeZfTYREueZPpYrLBvHrUzCzhqmc327b1Wg9utSa3ypMAKc9BZuNfrDvFgaCJYoS3Vm5uksZcGqmk",
  "key2": "cyq6b9kE5XbQ8ESPXnaFuJp1iTNcjtsywqR5tN6fhZHq5vKnXwHtvJQ5sU5fyLScS9Z1Ey1Rnm8hV3Tgbd3DmhH",
  "key3": "5TNsKXCUxfSR6XokfyPrLeLPTktd8s5tHVZekGT5GBHgqZwPApjVSzMF5Qb8WfbfrNZtTkweraKphDV3yjUWMKBK",
  "key4": "JWx8kv5ZVKGgtQpcPwxXgJvo5dFKckjow2hpojBHSnMgjaTaRu361hA9HdWTWKEjNYHRaK1ysAqjXY5t68JHuMF",
  "key5": "3ebVUbhm9wCg7PeaG3H3bHHivMg6T7jsW2Hy512wbGh4XQapK9w95wsk2YWiSwAvz66fTpgpWA4GGzHHgTyjQNeH",
  "key6": "2bAZZ2RZMK7NtMBjMyybEM7beJ1vtr3JYCkKYx5ooy4Rpt4BBAet3e8wNwCT5qhPYthjuEL695LavGCi5WL1hzpm",
  "key7": "iMEdbxnue56tnjRpj2nUxn66dYGL1jXa9terYNm1VLFXDgT6RHHJxfpPyx57EKrus5UdKaE8pch3eB6wR7Sy3gg",
  "key8": "5SR5JP4BidG1SEzNzQS3mTHtAMKkLTLWP2Xx535xCwunKKzS9L714H4DsVdTz3tS2cVmHM7pwCbJs1FHnHZyGmED",
  "key9": "bDXwX6is5jbd9ra2Yw8PrcZZVmCfJNaFW6FVeYypP4SfkQHDiUbUzGqFc7wxDcfnv5ugWVAbT1JW9yxGMRRBesk",
  "key10": "3M52fPRScHbRDt9akkJ8UTcduohonzCB7ri4hw8AZ8yoyiZ2sjXtUBt5tupZMa8h9zSXeg5aWqGGMwurJ1SUf6tN",
  "key11": "9o3vkJyuyuqsC2P64iXF9ttL5G7T1HuwjU1jy2axGb3AVFUyTXDBzm76hrUQKiqiQKfxzDB9WWXaizpgcvmDT71",
  "key12": "bcu7MNgBMgDaGsuQFZK4Puw7QfXwVykPje7CcgS43KGAN65iKNDzyo17tjCpvKB5FjzCMr3vQBdhnRGkutasmus",
  "key13": "67Q3WyoK2Na5q47K7RhyMXLH83GBjPmZqnEVrNc3irH57o55rCyBjvzgD3Lry5f365EBDLWxCgaQTErQzmDwGuY6",
  "key14": "55AiJt5bpU7i8s6HAsBCF27JykCY65zcoRZaMFTBfqME3PA3uKCza9RpdjyfbmScpCyUzSdNpFisFTj5u8uSrWJi",
  "key15": "5cjcQsv49FboiUdxx32iw9z7EasDaXHyJuu1wFymh2E8cVRB9qEAtsXPZkPu4JUQ47ZSsVHDZgkP15xTdJTeEm6C",
  "key16": "SpDYrQKzdB8pQsDAeFxm3scvqmdgVX7brjA6QZi5Rg3eF5jqQW6ZsTCYYNJy2BZVrs3p3RwLFikAkyJyxp2wxeo",
  "key17": "4Zu7iCrBbVkngf67V5RmddHuapUZKYWL2amykAwaGgSU2jBwrK3Jo9QyHGGEHNJoamG1HNdHwy5qgF3YsgNj5UDk",
  "key18": "3dNsxfZNNL5iJbGhkWzHR7fs9obXePqxyLYKeb1kthNiekgJErHo6QkqTfR8gE7X31axWyQ2oF6bd5tib7pqrhvm",
  "key19": "2QAfxPsebTm4CStWGJ5M7K9DQ8Frh5QR69uo6jP6mk9gtVDqc3dC1VmL2xvwD7QwswpD6e1vk6uQeG758WcrEXn8",
  "key20": "2EMNDDRmzhPL3kjNThnz1Etyd8KYFTutSggqzLKBNeesGrCK3vcjzkeLVozkzqDuwUsEniji2qkViTZ5pq5wi6mY",
  "key21": "4YSXdo8NGcePGSHDvLiGpAundBvsqVkpaikJAWUkZjS36dDPU8DxkCHr181nVcKDqurn5QeFgeERkMSzQQwudzuJ",
  "key22": "4kdeoTxRFR5RVBSznsmM7DfWp4r6mPmqyEuaNCwVhueuS8xe1sayfFRFwDNGnX5Y3CHVedhfMyCk5r3cdCkdjTi8",
  "key23": "52iyzP3NigTQzxc2bMqhr8QLLgQ9nZ9yKE8akJ3vbaoCGa529ZN8xZxcPamqeFT92q4yuXxyiN8vfsWrYiGpjMVb",
  "key24": "5iFeYWiiPeDTcZiN1Z8NPsmMB2BhzJKF4osKLwXaga8LS2ykwnFbdvjquZ2FLsvSyc3YCQCerzK58bK2ALwpdiAM",
  "key25": "4Nos2BRmTYd9au2WcktRk6qjk85edzAwATDb7qu5cjSoedy7tNzuDiJdkQWTZjDGQveUWXvtuPnNWDhobgaJxNoy",
  "key26": "5vetg67TV3tAS81p3yHRfwp4GwDj1dPd4npDSyhmoKMSYNGgMwhLQYLs8FQkKMTm34VraWQZZs99ZkJj1ncQ2o2s",
  "key27": "2sxL74RAgpfTTi2yhQNRACvTYXstYU4rRJDQiHbhe1D8j9H1Rcw18vrRgZGn88CFS4Lp2P6WXY2Bk7DHjTa5HH7M",
  "key28": "5a1LWE6QKiauezd44PrRpv7ENTfFrqaTRRXYN6Gik92yqSVfSS32drfBALGFKKaX9gcDXTviX7LCsmfTxM8CHfzM",
  "key29": "65TLFFQvCSobK6Xx2tgUgrGbxMgZHVQ2Zq6NNK2ZsXbLGYNssRuBsDRi3Vr2AMFKiNfwYJEGxsFpnEZNrRt5usY2",
  "key30": "4NVQSy1z6Hn113YE7HFNu7v4NfujBGz3SWeBPu4rVpXsTc3moTvq39CKNuXe9nyDHqNskchJU5LkTAf28xig31oJ",
  "key31": "4Pxb3ynxaNr7zCvtVN2cPVGupP155eAkRSyPUb2zpTTMz4qZ2veRPXunQWLoMkuhhGb9MMUUymfPanhdQ8pEVtwW",
  "key32": "4LdtPyHbGC9jj56Nk3E7ZWCFZpXbTHTL77tX4u2gkceJyRQQZiN5d7x33adB2La7jAJGCCUiS4tunK7Y8Z2j1TgC",
  "key33": "33X1tAZRZbDK76g7qDpTHw1Wz5hSd3Hv7QLGKYLCeKPcZJgRHuwonKqoCbteUpAMLiHmR3tkeiZqTzKE2LXuyk9A",
  "key34": "itDycq3ZfpTAPFMFRbWTxzMq1KoLhVf9PAsk2SzZPRZS2swyRZUKekSJdBU92jnxvkpm9A933KrCLwvjfmuiTEJ",
  "key35": "32AvaERBVjADQKgRqhwGYKudaPVWWHznJuHDywm7dkZZXjuYjSqWusX4oFtYWnV7S8rMct5HoKWuMc6gfG2vxzH8",
  "key36": "4vcVJDsSddJSe3hsYXTARURAUXYMHSXUxs9nZdkurGzKfP6KBcZbHhyYCMZn1zpeMHyp3DJgPVHYhZwGsMXf96d",
  "key37": "2Mfgn5P2txGMXEHKzGQ3cq3xWk6GAjDkNnVX3ztjWGRNJSs3hkuUiYjwNC1UZawGqfFCcfdaVPNUeTc6MwZQxmNN",
  "key38": "9TYBsFWJXYwLx5djzH3qSNKSZ89ZzpnUs78dmkJZ1nYHsbtcF8Q1vp2xjzZtdj4Tj4mRFk9pxTZkFQmXgvEW1sX",
  "key39": "WKHjEiF8qCg7aZWLGncQPgphHyJBVfQBK8Nnvqr1p8vCK9kNLMSw66kv7pHq1KfXqg5Qx1fkXdXwENMcENaJ6JF",
  "key40": "9hYcSTcXoreZ7iNyaCQeWgdscLsiMn8kQPm5EyoPXXNMKhhWUvNBkv8CDz6fmts58PsoSEc9x4sKPVFoPp7Sqi6",
  "key41": "2PHK9JZ3Wmkfr7p8a5M6yA8mV7M5WqvV4YzMppZm3VzEb7kE9gktZEhX6rstRAiu6CEYSTjTsndRXMfjzxYBQt8o",
  "key42": "67VDugfpNYL8Y2FpscXYs22eHdox3PsvA3DY3DFxAqfneYghJTAmkktDQE7pGYSkW4Gd5CtWvGJHowVmLdk9iGkZ",
  "key43": "2sKSQdLP1atMKeRGDrTFW6G3KY6BdcsDTgdL3T9EQkJNX3ogCm4Urm4uTNzTdrDWNt1vt9KiesqS3H1HMaB4x9zx",
  "key44": "2pprA2JTTmuX5v4qpe8TFeVtwANvSgC22iAPx2eqwHsyTMizwjFACnbtzLFkuCDMeoF6XELp8NUMFfubT1sAD9CR",
  "key45": "TztsfAgSTv3jjbzsRNRyqnX5g31dFf8xmyR4bH27nredv5tUYoxiPyWdEtqxVFiCqEEeRR77qf9aYUDVveGCsjA"
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
