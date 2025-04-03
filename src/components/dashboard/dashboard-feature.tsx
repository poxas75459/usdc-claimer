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
    "4jYLym6fx9zvn1rVtMPQJSteAKvWcfPavqnAHVxVzGvv76gvHuMfsWhNxAbRwKmvLxwRqkAeQo6riKM5vCPMSCAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPcWwKkQpG3r8VeHyTrqTzaEWjo1h8BDRcJanDjesSRzuoJE3ib2BhePKJ5E21zBEN3goobNWYYqWe8h11JCcvE",
  "key1": "63mTgBohB6eGac1Spx8hjWKMtRu2wrS82bBRYwGiSE18UUiDo5TkaqSp5rsrqg3SveQGE89p39UFMCnknL8kfhmd",
  "key2": "5Swb7k1WSUcTRxk54BmUdmZPn3Vetk82x4wX7bZZCfD5zWJ9Bq2ucZmtDzmvgtakeY3MbmkbrZyUVSPMHM1evenm",
  "key3": "4qrizLAhKtC2KkwwpLM88ZqEA7mk9bLvj7KG6JtRcHLkNg3ouS6AXuB74Zp4WuDbhk2WTdymbcsv4Cyi9aQ7zdZB",
  "key4": "5sJW2LGJDWc2UhtSE8tHhr6QBE1aJtHEabzaWNTPtB8iJedjn3prXZ4tTvUNFzbt5cgdyt1Swx1am6Uh1kPXLgnR",
  "key5": "3jnWdE1SQHunyJdJS3EEs64duaDgZHV9Lb2u9dXFeCmdisDxv4B4Wz3VdmpYAeEFKbxtx3mcnNUxYUXcbVLeY5TQ",
  "key6": "4djo9HgKymL2TAcXBHZRw5mcMiTo5FxEkc9njMz2T39ULqjPSpVzaxYXC8wCaDsBpedBxQNeZ2ZfCDoHxZ4UKGBY",
  "key7": "2iFoDXpeNBjnWYj6MpbEsvGK6GRsEH1BKSETpZJAgJQbAKfeBDG3keoBYcNwSRyoa9yZz2sZstD153fr1pH2aFYM",
  "key8": "Z12KHGq1eVAz1Da5dvwBiXWDUyjwFPp2ZmBPsipJkX27bkeoVxkfMeTyQXZ9GvZWMmSnb7FTYAUK9CRw7a89D9B",
  "key9": "4SxgZCdN7mrxsdWC7GKs77ZRsVG7NCrfHf5VHN7XMUSBzryD7wA38FHonoH7cqnPpTzdg2wArKNiBiB4UUC7a8ax",
  "key10": "4gYTdgxdWZknBdeJwswVXbJDxwc1MNygFJ9nrma31ijXRCCepUn4yaZnnAwycWmH3nKurwWiaY3oyzK83Uqn5Xfz",
  "key11": "hTpgcyeArbWWLW1Ve3uhVy3XUqzAdnnkk1DbyFFvScFuWznxJgFR9BJxyvQVbcqoYCrKfeySFXfW5GBPhHMjRgr",
  "key12": "2LtkR6nhSm5ZigrQu9otGSvUDVW7HkZqaSxXwj7LK4ksXmPtBT2gs6JiUoQia2Wwmdf5LcXnYf8udPVyttr76D4s",
  "key13": "5VJGwYUn64okLwTSkU9kcZCF24tr6Q8fAjorGP1FuGpH78wBco7ivbTgxgaXGv6iuTj2mCWG4X6osqwd8Us88EUw",
  "key14": "5LQtMvYVnTEgLao3wpNb4uujoVFZmqGX2BSByL4YHUFUQqkfscyyMwDTYQT35UVk1uj4wph1j7T3nb51tdxVUWr3",
  "key15": "3K7gXCBnVdf6RavTFJtM67SMpzVb2y7Aqkuj9U6FDhxABu9Rhxd4pMD9A9juNL9ZrX7zjxJ1mE5a5igS4yhRHQ7t",
  "key16": "2xdkHbB7dkGNr9A5BQgye2jhNzfc5RVkiwdoimMmorvEQmyyf8FBdS9qQh7tAbQD6u1wrKQU89vBAg4tyY61Re7d",
  "key17": "3HtGGJ7G6WpTQHbfRRLMmYDAL72P7xjAkuwg1R5vmTgx2h6MjNiZPKnUUMP9zK5T8p6CJFQstpgNLxzz4BqyjzzM",
  "key18": "55PWAWDHDAM8zFNhMVktVh8CH2aRkzreBJ781r4nNEfg8dooKpcQLwaQQGZVDSbNimh5bQAEUEHtjBofxtdpH1gL",
  "key19": "3zuPL6vsMLZ7zqXmiiCtYD23ojEcKPupMKdvGL2fNAqNscry1XEaJMo2hikCZs4nXHriPaKbFedKZ9FVRbWrCrd5",
  "key20": "3bKuQvLUJayZ9L1fL8SGcxBnm5orSrdhrvrEXHUpFvvAXuhhnmwW29nM3uhRMDBY8iyVsu1v1YeCSSPcnu8uMrnE",
  "key21": "4q3d8Gm3ELGXFfhQ5Kq9byTYsara17D2Ub3X6MX3JCrpA4TB7WP6z3PirywhsZVsPzGXtWsjqiNhJ4adpc34euVN",
  "key22": "4sRXNePCTUGQv613uRoEJQXadrBTgKAVZyi7vWqoDJRmxmsYMj9CVQfdG1GYopBpy8wo2TSm7rhq2L5rNV1DdG7c",
  "key23": "52jgyHmKx82uryVfu8Z2XsS7yTGossCmk1c2hpfYzumZsrQoFweVdmsqdme7PQqaxbNjhFVwNegQrqBivCivsv6f",
  "key24": "4axmwubLj6ETU3uLTeP7R7rRKy7iDoGkXifnnRKD7K1RAhKRtVukkE8rRj917nejhhyHQTgw7K1kvCtZzuafa1Cm",
  "key25": "5JaHJTqZCprnV64sCt7PbnqGBwXWo6GEHJ7F1xaJyqU4G3bvgHZFryjCfY8Swd9bgRbwpsnh2GE4UXicZz3Z2J2G",
  "key26": "3vMRUSfdFLjZbbyTXC1v2LMTJ4bK6sC4Bb2aVtaiZNxCcTcmM5FBuxd8ZxqPWXrZfTxYaExRX8mTK9L35gF4Zupn",
  "key27": "44XXB4gUCbMWho55KLxXdZ1xU6VnUrRfGt5gBTFg5RVYHNpuXHYr9EBwDZvapkMoArjeeeSpcBiJyRU4fvUrVetq",
  "key28": "j5gjGVmMF1w8HpfwagcRa232Rn3awG4hXZ1JEdBh3d4ToLHfkMGot1vTVTp4J1UnGu3S4AihdrSqgt1jaEhfvF2",
  "key29": "3Tf9uYnSBxV6HvbQnxzfvCrKF5gGSv5ajcLwYJvYnUcgYEHXRn4DKUHugkr5pwfBJhSfkTwh1BG2dPwED6JGx1GK",
  "key30": "2nmb78jfbYrK1Ge1tzGYMhcXA4rpnnwCBUR7KSi1bS6PVBMzSDejCq22T3zG5WnRoZvnwTfof3xfR7UH3TxsVnER",
  "key31": "4E8abWQtfdSseXPAr2FEweRmHsxF56yuRgZL5qT1cx88UmijYVrMcqy24GTRVmhXuUs4YmF9b2sFbGHWudERTmxW",
  "key32": "Cy4YPBSYYZoMhEXwnoQnTdKeuSn4oGF7qVzpK8jTMKXTxMhYZG9rZJ43yebNX2CzW1aSLnQVZMUhvcF1AmJkNci",
  "key33": "KXK7BgHgAqZhzThDtbCHj3bJFZnZwWtWJ7fpRFWpsBukD9HeQ4KDXBKyRjXqSiNm7ZEGGC7YAMzgJtvhNA1z4kD",
  "key34": "xfSvN2XTg4aR4mjt42mXWGyjycE8Jd4pWtGdWDq33LvaRPUVimyCtFatLb5YCcSVRKbGuVNWG3NRVnvqGBAqtbW",
  "key35": "4WMWD6sBFUurh389rd5QwQowjrg6qut1Jrz5YQwkWCTMAsNGsQ2HFSSChQUZmFRjwXX3w6C9SNFfzgZfC4V5VFNm",
  "key36": "R54qN7JZHx2q8Lxe7bzo7RnPhHYNm6BWbpfouB2oeB3d3QcygMwaWnX4aPg9eEQS2LHasUUM4XkdZH4NiLDkrwd",
  "key37": "5g6FtM7ee5QQQxwCrkMF4vrXa5hzsg8EBQcvUQEsoNhd1pwY6Wj9WH2TbF1Z726Rfti1dgz3ucZKqaKH7qTqzUXi",
  "key38": "4G1i5DySLGhZUCDFADtMZiGuAZtG3inPUcWeFX9GksDBYYKerqJELdiYqg1f9HpVa4dyfKYfjjX2ZF8vt42HHBLW",
  "key39": "4dSeLQRyhUdpGVwXPsa2ihHsAqoqe8vkR78NhCVLSXudyU75XwuXwTgBccqbjMbkWU3WnCQWS95RJ3s2wHcfnByX",
  "key40": "5ttKuo3VbpD1t8PWLyugFFHRbB7Scn7gKFpzoEwgYJJxKgQBnboo7QfYhKUwZNWLu1oRroanA7D9wHYKRStN95Eh",
  "key41": "2YbVcQZVUYViLegbkE3jyxFEpd8RDQdPVmd4zvyYFQamdkTsevxXSmGn7TgWwZMRsDqkLBmFSoopTtS1pTR47VKM",
  "key42": "2vjcxnxPMS2yzh331WLsLSEYgHDzuxm6YRD4ZALJVWumxDjqkHAmyghLYwxtgYb6Tqg8JBy65tge14bbwyELeJmu",
  "key43": "3KT6HJ4c65oAqggxZfZmBL2iZUg5qJLjdUWbTTMeWDNY9TdMggXvcjNoDZdx3YWsxG3tGt1qRWtDH4BsULSJsut5"
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
