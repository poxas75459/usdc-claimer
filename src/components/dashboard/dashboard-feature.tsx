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
    "2Fgepd6tmWncbfb1NZfhJVoWPidTt8EEGL5eHrnV2BFbimTaTwQGeHnG5VUma2cEQtrZLusT9YjzdKuwuGkfxTnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nv8vv1jwfWGsnDgyMKjxPBfkrdNhQAb4pXfDo98bR1yKMtah3ZGWFmm3p1pEnRDNkDSwvcEGEChKBMh4GkLEZ4V",
  "key1": "2v7hQW9TF5hkduoSLAM4r2mcomRfCkTTR9YkmGk8uGwHFd3D5ybcxTjpcY5eGb9yXUyt4K3xJwTdtt8F6Re6gkth",
  "key2": "5ZxNvKUvTcaQqrn75P4G9LRnYwVQfwJvRqsHjqmYXhkjirJTZK1vM7uVUE8VxZjqFJRt1rqrjt6pxp1Lb9gv2WmU",
  "key3": "4d7cKF5AjW4gU936KNJkrWY63F6XR41fV3LuiDwTMheyoaoERYfBRqBqt4oJD1bcZGX4nBrRBbnQEoK6YXWHbeFm",
  "key4": "2szXRZjmwAWRxJ8DLsKf1ckDUzMq9KLD8iLTp7Lb7Re9deNrTm8GAyUNXKFMzzZnuF75XvDpyrJW5myHWKXE1v5v",
  "key5": "4q6V3JLxgCTTyTEDknUNTLVQcmewJEQyj3N6j71UjPtc5Dvw41RmRDCC6FNboBH7Bb6GDs3mq8dguR1MRFWJC4FZ",
  "key6": "3TQ1NXoAH91mD5eoFqBgAQVWJEnGVykrGzNEERHmf8vEJNJhsWToRdQYCJHAVP4f4iK1rPk4mPnyUyT3xVicf9Dw",
  "key7": "55t75ZnJ3exMNqnJfNoXwd1ZmGSyHqQakDc5zL22yEqdBsrDec9wMhdedWeuW8zuhkbCNzVCeinVECb1uh3VQAEV",
  "key8": "3kzUcTuhqSuvnYSDtDGQCoduFRZ6eVZqsU2787S1WBX9w2pwguqUyEcxjpQ3haRD5D4jhB8pVFbPzC8zyax4Z6rH",
  "key9": "39YnJxmK89vjN32YaWoFxqtdVSrh7aRozhttwFDrSoH4foBccFkY8PPgWg8WSys2EYc7HFE7vwDBBnxXZy9qNiTF",
  "key10": "2eNkCNEWmU9Wu6FxJ2fUWWefsYtzW5YNqEHC1TpHRLuHUdDDezq7tfZn8D64TJBGTTKefnybU5VhgxFdCZZv3Zaf",
  "key11": "2rPwDPuRrZ1PV5FTsToJUNihW8FcnGQwDVjSuEELs4UyqSb94YSpYpSFvjWZWA8N1qys3CQ9xJkCY4mVBcYmMyXu",
  "key12": "4UREwGTRxAGQStRDRffm3vhaRwYkhZ8dEisGM7kMXHdRcYyGNvTLEeXQSnvauGo53kXC1WKDRRfJK8yffr6eJGx3",
  "key13": "57k22QZ7pVT52Xv2a19t2Db5aH6o5Ver368jVEYJZ6G1oqYNffagGexCA15FXGPM9gMkRaA7vK8UdwmoWQJV7kgb",
  "key14": "RZ3aHsm85UfMMTzhsGgc72wZnWGcUhgm1tUYdYT7CjcGao3jHumJrR3tNVw1zVWGciQh9r2WCpEpM42TqUQZrLr",
  "key15": "2EHmehxtCX2rXGqWF52yyFh654KA6yG4d97fZhdHTWcCjAr2gAHCeQ2ynkYyNxNNe7hWFid5ZKbSPHmig6UcE28z",
  "key16": "3YwPhrWNuBi6JYEsYnUHPbRfmM2cG7wMtGoyCyH1j9prKXn1p2yzmbG3Gn5x3tuME54VgmQBucPBvjxmArWn85cD",
  "key17": "3sRR25Ps3EA38QTj9NREJ1VGVVJ2aHcNtguimS9NEZQ9eKfSbL4zWSMjDZoYaqAVd8dVK5pwJYUygur73UXCKGny",
  "key18": "5YMRRFZBqV718Wh9fhTHVsoxPMCMDHA4pN6KDcq6vk7cMngiEcbmsvx8LDXCHkqYCE1HA3kAgp5cxA2LR7RANYX8",
  "key19": "6AZ8bkpmzvbgkU2qbhDe6D6gofCyFpMkFnkwhdbLVnuKYdMsBz8wEGX7C4HcAyqAGZcjVorKTQdd6UqfpMvfkjK",
  "key20": "3YvYQnxGGWUvdtUnpH2c19d2fXsEMKeT6PCnJvBarYc9F1vsEq9PEwfK3Esww5a9AKqM5RViQxp7TcDkU8fvc9d9",
  "key21": "4BshCxpGpdJvNsKrTk8kTVDuZj4hxkMTeYrajctpAXD8hAcCtZ2hiMDzZNV5qcfPFirvFRDGRTU2ELFyspFpHWiT",
  "key22": "2gomyU6T5j18DuT7fHtGDcUN2CD5Lh3oaUnNZegjHPT3HomVxYGzygXovp8YTH1Vm99699hqGUF5C77AkJRBMV6q",
  "key23": "25K8PsqKYaG7MRhuPyQnEVgVckhT9GTE9CX82RDar51ukVj8jJoKAKoDpSh79ZcdPCecfxPnvQZeEmcyNBb932Hr",
  "key24": "2CpAoHdUojTrWbNmJxigE4Hi3Eg3CyrjAZXXRY6NiHhJHyvLxYcA5AeS3JVrc9mTDYYf7atPPnTNz4sV3QeAKHeY",
  "key25": "96hTJvr5Re73kFsyq6pd1qnJdjsviLJfSYE9mnTmiigRfYZrqgYM7BDZHp7JNqodHxuZc6FFi4PKZjaQSEkvsHf",
  "key26": "3REbXsoWrVqwa7NSn71ndu7URBFNQADAHPd6W7fwd4DipexAM9BWq7XWZJ1zvkYDorzXNa3GYnfKk9Z5fz3upmA3",
  "key27": "3NBVGScgax7tp5vvzzpbtDdBtbRBhFtsE5HcANAS6iZRg94E8dZ7xkfPtbaKWAGjCqWrHWV3BVkowYSZZhGUMA5q",
  "key28": "4g1oSaV4aX9pMuCcc5g96q7KzVfP67tXvpoj4hN5TCdCPigDsJw3apyN7DxQEe9fTrBSfCQQD6nwC5bLkvWn5gmj",
  "key29": "5nHdHFXTAmGSfGBSPrMiv1LTouGz2BKFfcDxyT6hJySqQmqkwZTyzNmBkddSqsxUEqHxVWYJoQ6jdorsRTNwLQuJ",
  "key30": "5u7eAGA7EbMZ6ekBmFZh7Yv82W4Ypa5DdooA1kM434VKaRrbnu3Gd6KiiQHzgVpwspXwXgrafPcipMjj7Qxz78HU",
  "key31": "2eLEx5MvxYqTuxmGPnxDDvcQLEqMpdNUC4NBb7HfxXus1sSx7ypkACMc9mPo1k9w36NJhxFTMmnLwvypBeCZpQTf",
  "key32": "2VpHzYBr675aujmUE9YDndvuNoKB6e1CKZwmBVbD5gqHD1DKWUP1HKe9H76x48BwVWxVeFrxf5MegGybp4hUW4zW",
  "key33": "34oA2JCSbvohV93nL1Fxx5PAJ93xLxxRfEZN2jpb3nEeDaVXC8HFNxoGrYG31YLLDkqJMLAmVc8w6J5H6tnaAKt8",
  "key34": "PKU1onK7FoQY3rFuy2nFjRaYipXk7MqHdwBsFqiBti8GcLMmFSbMfv4q7kCPphxieyD6eijvFMFEKxrLyDjzSBe",
  "key35": "44nNhmzQKnZnyUD83DTUQk3KjMGj1XDvthpcBkgGVrdhNyi9jGd5Sr9nU29uVgwkr3AJomVFUMdYU2k3Tuhe1Y5q",
  "key36": "rbHS3gQEVVr1PwmaavLRpLBeY2fg1r7B4VHhYzKM4tQbxvwmDWkbCyef93G6kpp5xxNSPPEhVbfGZCVxXz9X33z",
  "key37": "P5drywNAy2mrPkUHCEnLQPtArSNHn5bGCx9ahCRAf7XCZnnLiDgEqrSN6CEsP8kpAN5LgcQyHmDRAWgZ5zEutwq",
  "key38": "2Ef8X4CKqmcQseSWhcVZJhd9ea2fFBTvtfuLxo9dTwMjGpn3jDN2GEt4TUw8o5EQwF1wR1PvMbFUSgimL6gHsz7i",
  "key39": "4hXhFUfdV524F4fNw5xARtHvpFvZpocSnxT9Kf78z5s8QpZmWSJkDG5FfJaFVi5G9M71tQWJ8DrpfJcmPiJt2Dit",
  "key40": "3JEXdmtjhYJM4dtJpasnWYVrAXChvaGXfwsnZvcSkHEPuKqmkWorhHggvyNxbaHgUZ6dBFeByZavUquYgn1BRygi",
  "key41": "4KfVpbvU5yKKPgqBpgnkz5UF75qtgqsSC5rYetcTxCQ4SCm8TxXmz48ChEHGYpwgVDtVovsoRkf2uRS2eSRnoSVu",
  "key42": "5y8StcAptmi1rWT4Q58GTSrb6MUQQV53KxyX3wopwuGeZcp4X5FK9kQ3617igQXxtxH7daZjk3PH3hf45sr3eHLd",
  "key43": "4BBeyWG9MYxkw8uQZVKB9mk4yR7qujqkVvQ29wK6Mi9NVzsRjmacUxgSrarQQMpjq3EZNSvYs349tuKW2eZ4B9oB",
  "key44": "ow1cMfukwAYy4DbeZo4TCDN2zouteJj5VJWEKVcDxzWXAkySvDSkBufk5ByhqRN1d3jnVKcc3ecyzqYd8gBeXkp",
  "key45": "756BTcjynv3ofqgzGJYnDQXyuyCpvXYmQ7NSxi4G9JucfJpuRFnBMtMfm2t2SUu8UoYZx2Ehh7bVJekJYdeqciD",
  "key46": "2oLeyKL9GfbjbUZWqyWKknt9pAJa32WdfQB2pcfxwZYmtBiKyGNwryF64Qam1YQveWqTB5iuEqYdkEMtLBqTWhN3",
  "key47": "3Axg4osP3enGVgJFCWhNLJ2DayX2v6TpMhNvzcz9Rh3eFMMDoLqmFVum2spMWZpKd23XwvG4GMYb1GcVdjAdhY8S",
  "key48": "5n5rYGF6KsnURhnzYXofHvWRRHzWdv9n7r6d6Evz28EAxZ5XHib44RCw3hVnnKwPsQHCTFH2id9fWc1LPhrmNVSY"
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
