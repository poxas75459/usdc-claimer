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
    "31xft82tcXX96HvrS6J9tnrdRkqARQBktt86XbcVr773Pk5A1hWBU3P23iqdXcnbk8cCM1onxKjt64q94XgrDaxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nSrkqGGXxxeTBYfQCAsLSpTHHHip9xwHSBN4hSRhD55tbNN8DKJXigVV7DA7xoWj3Xm5s9DG9RXevUiWp2ZiCAx",
  "key1": "2PVUmcEC9Fx7zkLKvvtxRcQrFzDdRo9RZr4DvP6m5NuSKKRQDaF45bM76FwPiURK7j4Fu5sDfSRtv3c5UbEXMMyV",
  "key2": "EUSvcKEazQmtC3rZ1fSXhUpBvZJ8JUoCvLjGvPFHqgKWQiYKWqtxwH8Fm9E82uauNRB9ykd9RZ8xvxgrveHJ8rz",
  "key3": "62vBpAXbCgCKCDdCPzY1tYZqXbaBk8LMBzWMppgEDHwkKfsYhXHHosE9ZeLHVHPQa9JSmufxa5DWa1J52VHqf6Vs",
  "key4": "2Gcyun9rPcQ4Gnd66t9JezxhT2PxW2B9kGEwcn3UaVmCCuLHVULMFuAksZgiauTFEZFcKgonrEpqwKXEprDV37gM",
  "key5": "4pBqdHFYoXxgUmCTcuuqbNYBQCnztrUPHUiCbMcoj3Z2htXB1D4JhbcxEY5uZvRuAWnRL5gjNUuCAVDsefw6mGiw",
  "key6": "4fa1RTT1RiiLKUkdLHVTGjYqCThEmCVBc2bGkepm5LZdsi3wU3CpFDadiDaXQNrPqbhz1nJcRtQs7vk9dHZkGTrS",
  "key7": "27vfLbSKagmk57bFenk3ion5z6wbdPw9VrUF2GZxghHJv23VFKLS3m9rYFUFSwDyGGsYKsKHUaV9RPTvFxTAxw8Z",
  "key8": "3M8csvLgpB5Cc2BGWsivq8tzHsK2nAmmLqNm3zHJaeMCrzN1gx9Bwh8tWwHy6rxBSQuY81mNYCjWGYS7dYTi8ziy",
  "key9": "6caGkL2jjzjTLyc7Nd7cxrhf8ZhTa7oFkFmmMaTd1nMSDCtBR4CweFhJ74Hg912WRvYRpdkFxsK1fJTKQkMQR74",
  "key10": "653FHjGGAr93n6wG4YGxpHqPAuLChDTSVXyV4xSUL9MZSSqXy2EEJumtqvfWmRFBHWQYJNDkpdhvMDi2axusbWsb",
  "key11": "uQ2hQ5HQBdzZr7VpJocAVWD7MXeWYfbEAZkBLvdqvUZ8GRf9uwW4m7B6FSGDWeTMXd5cxCyR5iR1bQEF7mf2R3Y",
  "key12": "4iFCxhGjBL5XWeYxmV8ykbYFv7cvzuQiwx8pWQ6vefYQK8R6pBByNkV7k4cpai4KtsK7r3sjhte8CBuWYYEF27LR",
  "key13": "5tcAJVDmquC3QtkJAxCJ1SjjeP5KSVYUp22Suax3GuZZrbmG9AsqhrPamQMsMSAvh9qu9APTeqUEPHA5gj6gnqqJ",
  "key14": "EU8kqc6GfA2dF32htU4BPwAJdjV7dt8zGGiDCZuCUTKm7ZitBYVZjmLwVWNCaTxVb9FsdaEZdCySNj4odB6XkGr",
  "key15": "Z4exyHaPDafaFYjNbDMBWnxgHE64hniBRuiaKPt6p5zmqpMLogfSxFxoB53zD4T7Ht2kBKPUuB4Zvw6VPqwZoB3",
  "key16": "4iAeFYog8TFHUP62nKs6ryB4uFAsyDq1afvt5ckeQXsf3PnhHSMiTbuAnWxGuwyxQzHcxfT2H8zQZFdgLtzFRNtk",
  "key17": "3n8yZRsoSLjfjDBMndEPp8bSjWzuo8mPt7ENMM1kaksVA8Ry3KknuLHnQDGdAkyyUU96yiJCDKWi7cz3XRLKwQxd",
  "key18": "5iC6YSWGfRcNjdTFSL6qyTEGuy5Sv2exTHwZHScWnLXrYnuUASH2sDy3Ws9QydqAUjxt87knCFoe6j8LtxbPxtXF",
  "key19": "ugzW35Uca2v433s6rWor9sVoHE6qRNAvas3psCRgphJWBCCW7wU7D1cWsnbD9nP2ME3gFkBfBv4nSsmT9NM9NSm",
  "key20": "4fPDZcN9r2UKYc3oDGWahSJn4NQrwTMwEFmmHuqx1WwH5eHbWjseagkuhUij1gjQ9HFB6TQ5CS2dhV5wzKVUdzSX",
  "key21": "3Y69QGyDyKLhXT1XpvJ8LKyG6gGLSnHZnu9rDFgFmtro4PA51LuSfmv1XQwzzKwEwpzuwEgcZ9Z1aQtJCHJ5gZxM",
  "key22": "L2brNfWV8SV9pf4ZTMR8KDKVktidW85PK5G4uDNTdHjaQM9BNUwS3dT9uBuGfUqV3WuE9qRm7eiTsYpwa5szKcW",
  "key23": "2cLEx7kJqb4Gix8LFnpsmpSDxeDA7pLGUmkGXoobyTXaf59ugPMp3sFWfD77a3Q2cd3LAZHm2BN87ouR5sS3gaAz",
  "key24": "3N1d3pm64bcXNUWMVbDgZbT3wx23Ho7B8vD2k2whyKRrvJwh3fzbtyKCs9nKt7iSJ1ynsnjzNvJFpmKHgkBXW3H3",
  "key25": "4YEcgDwjReNcnAmBYx3AQgbuVT5XwfDo4iVwshYJePRQJBZieMwwdM6bHcc1hZocF62wkQ2cwnt6aqHpcR6YJazY",
  "key26": "4wQrDWM1iJcstWFjcisLsypxgvX29fsJeAo9sKzaD9rqHnVX2keo4QoNbPvE6jC8z6oQCTJGEFkgw2QkWWnTZ589",
  "key27": "5RaErt6J2EHLT6tNsAEMyeWTnihDLK9Q8hxtWgpfd2dUUAcCBbKxRVCEtcxru9A2nkJMarNHWuTC4iUsDHwgkKvU",
  "key28": "2MozfR4bSo8BMJkMzfyXG2cTMdXgaCF2R2K17B9trkmMDHvtgjC5ZApSiSYGRWgwcVpiruYprL2SU8mDqa7kLKCX",
  "key29": "29tVfNqvecj1q7fDYH3s6dxDnXfioKVg9sL81JbxxCa1KZFAQPAVTuDx5a4L8twzfmRirDTLFtWN5zvVUuNrN1VG",
  "key30": "2AtEx952cSYrbrPN6sf1X3efZwGMmNwUvcUqBc2GYaakeVmDVro5GTffgWuTamV4FPp1xBQxGewRL6KGRkQyTJsB",
  "key31": "33v2nqSbtAd2fwZZbKzA2V8LgaJb7wDmnJ9cSgnuHcNnaMv36ALhxtUKmRg3KKKT9B1fE4cCuANao9kXGzQE14if",
  "key32": "2M2vMELQB1AdBv5UnzyuwbxA4CKbKmoa2WaVTVzJn5PMmebBytnMvJ8yrkPrVJFg9hW4HkBABr9FgKnyfgUiNWin",
  "key33": "3McWDVUgXWvhcKh1pT5qbsacNUbRa5HiXoTRNZ1ym3L3CTZ4qgR3wWEhxizqq7R7NQmGEaebMv33r31M6swZtcAs",
  "key34": "5zaE6h7D2fuECgc7JkKdegccg6SZQvfXTQNk81ubXKVwZ1yQNaRZfswm7VycQTi5iuunhYcdw6bgBqun2uBcdCUC",
  "key35": "4mPfRjUQEWNBMaePKY6Gs97A2f4vPgBVNvxy89EaWas935dZDPSPVJnpLqD6EjkHf6BtKeNMbDSQeV6uSca3wWr5",
  "key36": "3q2jEwM9SLdN5br9Eifey4V2Y7XkVkuYT2e3ZGFZ3wdtTuXyGwhAVu5SpTTdx8FNsQjbYD3VrWG8KUDram8QjrJb",
  "key37": "3wSCJTpjGVZuVF5db1gscgYtZBQfKeUHAaxnvsm1FRudmkRuVpqfkxPAMQRTPcwRkkvLKk5CwdsdBuvyn71ngq2o",
  "key38": "31BMKV7n7J5MXf4wDjCQPccWJqUUHBpAyzvjRe9mFh5ujAdKD5etTJLzBr5heT3NG5pqDcxTEZ6P7h6GvseiYM1z",
  "key39": "4zwG2Sr5D1h1cfvEfTZHanuhyjKNUNVS7zCecpBwAbmhYhFDTN7yqbs2dBbee1nz4Rbw4hiR4pmv6JFyfQBvy6PE",
  "key40": "5TqFK9EtJG4KHGPkdBVLc7g17R62NdzyVqW3WZk5gdrY7G3zsuQ7wRExfd2ChBZ798VXihzYzLKaf6vNhpmNdusr",
  "key41": "4VBuvgGU3W3YEjoCt3iov4T1hyCZ8PNpCXEvtkS9TnkvYf2pHFevqg3JJoqzYCFXtGC3Dxvmy9SMnZkRBn8TmLsn",
  "key42": "2WGuyqfATXPG7euA15gjtetYAxPoKQv2s48qnCAT5M8c5NLnWVTHRVDVeCyS9gWAvAwD5tTquwmG9hTfaX3ijp2g",
  "key43": "AArpQARa86U3FCwnhoAPRN31tUEqUQVZP8W2jPueK9vAg3uE3yRPdpWASJfoa8Pharc2qSG5rX8XYTxZXDrPTuw",
  "key44": "38MYfmEJZdduLQT9pkcY35t375hP4E261BT58CTuYwV8txkwpouCYY3KKgiJQ5VB18Fmxa3JKmyCKiYnKBtcFdXw",
  "key45": "R15dDbnfEYi8adw54Zb8AStQL8hNiXZQ1WDvL8gHVtYr3zV38yYPNzKniz9kvEbRpoekQXB2siA92zssiwYDsVk",
  "key46": "4nw5ZUXhdV7L3ggcmEjgm7mdNi9eSMNuTSeZdqBZ128NHxhQsp13Aig4zAbrZQuYfze6dwcQxLfv22UKdi1AivfF",
  "key47": "3osZc177Yx8Pr9YEtVvEZxvh54FPpoN11rVeDZd2WHsfwrX4KT2pDySMTfyCUoibwxWoTwUyydWLb8ziVJsEs1Gp"
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
