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
    "41Pej6cxt674PtsLZdJJiA2YuaydWU8eFbFhSRGBexzTRc2BG2TtAC1rdeWmWGffbk5pUKshrqnnnvQGTNHHj8af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hsas8wMNXRtpgrbibqotQCQM3KsnJimhVQdw2Zs4zyDA9LzAms3rFxjnQshXoamuFCnb1gopgwSWusUdnexMDUe",
  "key1": "3shuEkjhGyN1FbwetNAVomUYf76ztsLNFjwvsbBC3h9dFTnYGNCnKZnezxRBKu98464CHgoHuEohUbekXdfcPWfP",
  "key2": "2yTab415TJ3XvonKV5DT2GKk6wKDzfq5ghAGLLEV2TcGThzzdk14kpye5hCvaCg4ui6FedFf9NpCzEGjJQ8hkr32",
  "key3": "3QUb5sWrjLvu48CRy7iuN3FofB5u66VHaAbXGzxys7EicFX9xWn8dvG5JGiVWHgczie1LTQ3oXLQ5hpJm7ogDz74",
  "key4": "vMzyH55guJZRbuB2tZjihuVGuBV5T9guj52AFYmPfRwS44P8xoX7H3HZbA1id8SrPPDRAsvCXa3zVbFdrLaKRGj",
  "key5": "mWswmfe2vQ5mHwB23Qq8ARwh3ibU94yK8hKbWU5Hggye1vXNRptq436TbJ6QoxcuFbgjUR9CDP5J142wuRajGQY",
  "key6": "2xH9vwwHoWfoPaSwMee434PQA6aob3Du5o6UX94hmB9DToCSqtk4AGWW2dBQerw7KfFKtBTLu5ZvvwcS5yB7z3Ly",
  "key7": "543mjXCYTcGXc3s32D5zhixHYuguRDGkVM3RjQANAd9hsQXQ9EpBwZgRQwepfxcc7MrZe1ST9VgR9gJz9YUC3gX",
  "key8": "UWB8H1UhawadGfXQLZBMpsAU49PDB7qFXZn8KDhyZfjq7VJkQsgPzm4Eb2B83yVA5nN2SBxqevov78sGxMNGVGs",
  "key9": "5sesaf56T3N9ksoVYGcKjEWuWygKR6mnA3h9cjkDgExVWJhJ7TzXAQu68nK5Htg2wNi2VJPrBgn128wcMGvrTcrU",
  "key10": "659J77Mz38nVxSWyp9PnzWng8oLAmHf3aPEXSTAWC1bCmYtBu3HoYqgG3tZB6eX2amjvQZxLBMSMNQxVavYv4q2s",
  "key11": "5mAZJAvnqg86yWNTGuZZSteyshXF8DDRHMJHF6XUAqDnK6YVbv2v5chi8x2ZXrxS3i1NEik32udWBAPmeqjskeCC",
  "key12": "3euaUpU4gjFNpMyuvyhixhvdgrmLuHpybV3Av4AkKRMgnqFxLeJpC5xUqjUrJdr2Yuk5CoxLArGUf4JcsBSkmnTf",
  "key13": "4VqkN1e7DCKcSfsJkmb82REDx8USerLCXohnSyZi3yGchc4bdX5PaSWDSo7anc2aHr1p3m8wKWt1JWEhDS13EBjG",
  "key14": "3hbLwqcACtuDcGxuvTuAvp33feEy7WyK9QsRaMwF8bd1jUet9mFntWk8fLLFdpnwkztmduXkzTK1qwuaD8QxVNQ4",
  "key15": "5tbs87ogVPptR1Xh4W9pQWPCiwPspZAvfSSjZ2xdPo1m3VMW6xqA6ZwtFH3pd2AdaDT5SSyt8yzcCFMaibFVVB1d",
  "key16": "3CpixTNqjULCBVQ4DSWjrh2qqq4pau1nNoB26BSn8Dy8pX1MAFUdsdtgQP5vgpEQmxM2neHCqu1NT3sncgvdjjBg",
  "key17": "2PAeoxfgP5edZLfwAeHyED3pxPL4sWtLktWQnqRHZvxKABQGYzqcKZiZ8GXCkyp2kcbtXGqy42ctB6hfooPda9EX",
  "key18": "5rb7fHXJtLd6oQ4iZi91K6rRXD1KET5HErPwn7LmiPdJhcGcYRfVhivnCrGASEHN8ja2fayD7BzZntQGXePEGMnJ",
  "key19": "2d77VwGWA8xVC5E8jeWXpFCN8Sg9fjuWiYVwSuQcUdmG5yazRuYt7qgU1DkxsF3VLcu25PBew1fSED7fQsttyHGv",
  "key20": "4maoBEvXqdFcG3BqJ2irjYGK5sk2hDxCbT4Wje8KoGooVYUXJQ1xCsUStCfz7ZrDdcESsqxwtpuh8J5wNsTr9nUB",
  "key21": "28orLAMAq8V3CNbBFGupNHPMvknHM9HAKxvsN8UuVRYMTTKGiQF5hoWdPNKKQ1QucxUAXvZiYGFi2VmcnL6F8CDc",
  "key22": "3CtQv2HbRszNV87D5mwpBM14vAEEshHLFNTFbjT3HwMGK1BW5G81hHdADNUyV3b3Cjmz3zPuSFvWYxr9NTfu8NVL",
  "key23": "4zJAvA8GbQPAwrdYw3Hqva1jL6qxQUQ3JadYgZZVMR25RekHCoRuRgdBLY5pCyJ4bCUKmyhPzEpMim699nuyK1kM",
  "key24": "3ZC5LL5s3oXPpoKWmyM3e23Gc73iVYCvGdTmU6afuD8f3YBnum377WidrmDh53iEx5NxEvkug5oJ9Uh5ToyiUtQ1",
  "key25": "3uC2jid3AD6nWS8xakPviB9yUftrCF4NzX1h9EJ5eemCywdR9zQHDni2H1NiFDHwaT6Q8J1XGSDodvEtiRmcWiy",
  "key26": "2gEybHyPwPxHdtmnKbyuVapRicNG2otoFC561kiS8bPkt6aEaLgGQQ2w4F6e2pYMCtWfUrNSqBHgtaYZxaCabAqV",
  "key27": "4ZkMWuDp7gqE1F7Yt9vn711hFLTpcv9wiTkmMGzAWRdLtxdbQ4p8mM7nseP6wkrDEGTTRbvVNmWpXmhG2YtYgB1u",
  "key28": "3QDDkAPdEGgax11PHP7Le6mJEPcSdVy8xX6s9uMBswwPBvUEpRB9Mpzq1cD6oouWVTcc2CvyvucLkVLpR9DaCVV4",
  "key29": "5heUu5b3ej2UATfYE9ceorGFfhYzsPfnbhi7sNPm9kiMZQacTByMDT9TLuTiapdPFq1WRBfaX2vaUmE4xF5e55Qg",
  "key30": "2X1mGabBUiKKwjxsiAUGDHAPEjKRK8XcvEhvuDDMzpYR1bKoxx4cg6nxZ3eQpPTbGFsErGgGiAgpSTyqG4AkW9DC",
  "key31": "hwLuQ8L62Y7hrkK4JMwt34ie2ZABZvJFxtruBtiFkrTyCGTGpvRQp2B7omZRCGA1CSzPUh3xCA4ra4Vou4wi9K2",
  "key32": "3ZdcDzdSs5bnyS4wrLb23WU6ZfvoJD3A2x45v64PBzfvxT3gKWHSEuBsA68gAYNuCPneQefDThDLRfGQVK67nWHi",
  "key33": "4W8G2nKerTuHqapvjuc4dbXP3CBDejqD9q8kHzZ8TNAH2j7DhahAgkj3PfVw8vpYFvpHBAgVg5tfSmCwLqJfbui1",
  "key34": "2KkYDZqKWpcNX8rdr4DHnccz1si6jxTdkGnnqFJgKhHNH3nY4hBh9d6PG4vmyXV8kbT7tJehr6dgiMN7iNd3exkS",
  "key35": "3xvbVKhrhmiK1y48Mvp6hTGDVuGj6cHzKgjFHFKvZo3DMPeJoyCXf8PfuZYRkSFU4Mgs4ayyRjXiUVX7UZ89FQSK",
  "key36": "4tsPhkWAYFZ76vsZ2Sj1HNJpmmrHK9xbbrVZAyoMxP1AG75xC1akGHr29X4LGxLyKx4YVHuHs1Ag18NMWJpCEtmF",
  "key37": "2KbrCSQ4Y4PrbMqJ9a3P3NqsAVTdySmYFvf6Jxm66XRexjxRqzPzPn14hsSqX6GYtVUiputUfJs7sL5PoU5FKwnS"
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
