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
    "2uAP5AWmfgNV1Npb98NpB7VUTzwXcCdSzV14x8dCzet1HvkoBWtD9vLMHv9Aqt2tBrBaPzi5vd8VTw9PxTJVQYUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wDBbSywdapNKPLnxeyHw7dGJnwH6u2JM1KQu4Qxv9pLXCyBu1ZyHN2QuE4atanqVvbieWNwafaopEEnpDgqRfuv",
  "key1": "44qiPJq316kBMbm7fDdyhvyq8qdsNz9MYbwNopmvVLkMmQUSHk48ttaQoXaFPrhsa7FfFzzS8MdLzyA4ZK7w2rFx",
  "key2": "4snqJSHGrbdHDwkdLj26C2qkLaQjJbyTmZKwYDb2py3m42x7B2GtQxfjgmB2a5UuJfaEys13Ziqaxuh9vw67NSK9",
  "key3": "4mw21E6QTPDZ6D6EBDcuB7T9r2EGtmrdJUuwYrcFeZu7bbHWF7mWM7r5YurG2BR5SoNmYbSfoLiQk94UnEBdSrZD",
  "key4": "3RNqV1L6L2kzhzUGuPBLtpbkJq3Zd3mWFmRekESda2fFnXrcovGSeN4ExHVAGQXUPXKEHZ7D3BBWQbKuXXUsuYQ9",
  "key5": "44hSGRa3jU9Lyw3r1oMciFceXjgFHBRxpZ76UVrQ6gF5NnKiV23hhUtTxBAwFhLyWcoYmpK7ehn2tYxLbVZpJcQn",
  "key6": "44spFCyKRr7rTm2MwXezmxVpt1RWrwaytJ9HJH4hMtLruh92Vhc6kE2y4D94zR4d5NTNXFi7GzW6GNymwZHQLdJk",
  "key7": "3ZwZn2btEVKYSgH47vRagPwgBtd4rgNygX4NfEGWCY8arsxmJRoMqJ2Sh6Y969mqNCQsWsqwYHK1LQzbYrHqJ8Gu",
  "key8": "4M5EX4adnkewK4UdqXCDxgDFzbiv7YQhkroitCUgoFF4dHbGrCgCK5x67zbz33mREbwS1wJf5bYQnaJc1jZsGjoS",
  "key9": "3TUNP1kmciwDzcE1VjEa4SUeh4bA7TCNoHJTrYaSgBLKD9NEKFVvnBicYCyuLYHj5Xkp8R5Bcha5TWkMEazVh53J",
  "key10": "5m1pbU1DYAydi1PNLhGcuwxnj2BCvaKiGw1bB3cF5pU97xAuZpHKCtV5Lc9i8HsMsRdGPxgThs1cVtJvYtYBiap3",
  "key11": "4SVcx4yUcAfMuYxYPCjvis3gWksg2k4nhYw9dpS4RjnD5DJzcrqXdtjhTquwwpEVcuWtrPPfRpMdUEZQLiSGQ84G",
  "key12": "3Mvwb8MsCt9KsqBr64zi3Kco5dzWewUzf2koZ3XZkxbQXiUVCTbm3Akko6X63CSGEo4LxnfeuBLfjAXDokvQ3d8G",
  "key13": "484hCJ93N5YNvwFMeqvxkkqX64w2W7gcuYx4DMpMEUNVdWCQDe6DCUr3ZRa54Jo6MR3Hca8kufimxSSNJ5cfAEaB",
  "key14": "3TTFbz8euAGqfnPUeBRXAn3H7mgeC7rhp3U2CLuSR4GKHBfAS4qFCPTvNTWdjXqsNcCARytF53ruDMfEmBH2XbDc",
  "key15": "EmFcmfPd84M4JG3Pmwe3zyqLg7LmY9wz5bf9AZeo8D68HbXHtYvPciiBWpdipyEZTSQxwBbE8CWMY8bjKPUr4ks",
  "key16": "3Vgv4PyF5epczPe1dbV8yACoaBfy7h8q3kdPUx7MCkTqU4iYGZdsUXLviwQzLWLPRmbroghiPYw61e1kRNpsFfz",
  "key17": "4BvbqvDuVR8H6UruoGTT67f3crYkUU1LQSWEsCx7yVNJ524jMWLCWcemRUpoC2Tj39Z2DK2igTioisfbkUxKd1Hy",
  "key18": "4RpPuWE6hW6P3np2jFZmsPYeTed1K3TxUBLajoLimUUup3usNf2w96QXPtxfK6p9Q6Fnx2VAu2rE6hw6qDDZoXgB",
  "key19": "hwTw1wdcG35BHL1WWEa14Uke9qkKwvoLUBxntnvDcgY77YicFeCPUaqQNboTxEAzPPfjiv5GjHz7mPwzqSBzWVc",
  "key20": "668EvsuVhQ1KXJnLRtrDCCCsyfBfBuYQo7GAfGFrSYrDWcMrwewVMabeU9mfUJyJLi99w3i43xDTuzdd2HgcxXZw",
  "key21": "7hYU81vEr72nMyLsvsWtkRvT2WRnYnkHzt41GEANmkEtaQZsztqPdrcbgrkhkjGjtVppwgA9r6MqEs5k2rXamQw",
  "key22": "4sK66ST9FVTEY1T6f6Kr8rJox7N2Kfv2DHYde15rqpALDu4AEfWxLmMidWh1VvXPvtFH9UkpafvX2PPVLJjNAa2f",
  "key23": "x4ca48p8PeCXdfCyq2uXw9yNs6hNTSUiZ32WfWuLqaxXEwE1PD1fbJMHTBiodWEdUJazaTU1M926GTBneaytMf1",
  "key24": "3ZYVyDopaDVboxvCBNqePDzZkny1QWXAc5ePPDYgmXStH986eeTNhihxnbi7oTp2hCD9iABu5p2npz3XqPTPwZ53",
  "key25": "2j7Ty9cvPh8bbpvzFD8Vfg6jYAZUwvzvCCiEJPe5vXNjMiUYV7ExsiwpMazpsYVr4RTNupgr2rtg9vej3tuLHGJi",
  "key26": "4dp1yL1oTr8DzytRWua8DAV8ZzhcL1MmFT5zFmAjBqLXwtvxvReUubdAdw9rMq98gdaxjLYj9PqgN79QaA7zih3J",
  "key27": "5HxF6avzLFgd6TnjvsVhseR6yta8bS9Y4dZkG5uYpFPd3jBKycACnfTKQ3barFYRtLBsYhA5ePNABR7ajseR6Qfi",
  "key28": "3CjdkEtbWZs5KAUXyMN4Dp76n7TMgP6rV1qQbfHRQM2EGNRm3Jzu61AxyPmThjUNcZaN47t4VvBss6i46e7rdiG",
  "key29": "4cQbo89uXbmn7W4kgqt1doD9217WprWn7TXCvmA2UPQLXF9tWahWnsHmrAartPnyKXoKbaiVBdb3jnsicPbwMmcX",
  "key30": "4VKmBwormf62BJFb4zJgh4hcKrzn8hPscTjUr2j5bYpPDH5BwaoUuc2acrNoBL5jswZqN4NwKSHw6MjtG1J4KbD",
  "key31": "41L4jUyv5U5zFR1MnQBeuE1N25okwGQd35Jxkij5KGF4mLusk66fD5w3LBFYvpUN6CKK5Cemok8xHW1TNCEWmE9F",
  "key32": "12AFWb73kR8J3PeUqaLg9hhV6FQTq1iyBMBCendRBeunKzFdKj8vtAeq2AvyKhSq2dBLW7fJ8jUGVrEWp7hRqavF",
  "key33": "5XHg7pGWco1qJamcwhHSizj3TijymjPNXXX3z2AWSrGdyBU1fSpGtgNgrhGd8AgospDKAjK2dNVBZ645MUsoqcq1",
  "key34": "gBskRn5ZULDJVdZ6uQrenKVkV4HP5jxVYXq6PrxrQJzBMYgcWSrFG6RENYgsYb6khn75Vu2khHaAXsXCgrjcpwe"
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
