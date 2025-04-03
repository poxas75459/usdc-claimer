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
    "3jfLGZiqPt7ZogqisptsWB8E5vxuXzhxFvRawwApx7s5ea2tc7dm3Q8fw8Bg1aoyGUXjFzT3XMGWyxasL3XHNzuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pdx5JmXqaNn7r6HtxFBRp8ktehivPqmfyvXBn16ztyB9uDKLy7xUPphjy4bLXwcttMcSxUPpMGkX6perX94TC62",
  "key1": "5Y8ky4vci6tUzW1jq2EJ5wH7GmRMxfmBH2jM2c231wNyisrHMFjfh2wGHy4FUdgtjkqZrwwatfg9zh2kVyj5WK3b",
  "key2": "euoCvqWAZRXmXdUgBZ2dTNe2ahasv4einLJzGXkJCZdymv9hBSdcz2JC3SbQycR4vgDzEEXa19td8gPU6G2KKLS",
  "key3": "3WjSpWSP43TPopv7Q9Kb3Cwjr8etHKJ4au777F74dzQ9JRdtJcsJAWuX7PRQnyVh6R1Wbed7Ko7B9WWwkuNyL5BX",
  "key4": "26o54uavnQn4UGmTgfptKhU5wxhLxqUTG2hzDwCQdL4NkXQUKBP8Fz6Uf8YRCKYpj9tSgfSViJe8c6vutyioyBJx",
  "key5": "2pA7WXfzGDH1juBCa9n584LysmUascnCntMLWoTETaRDU6V16LQoo8xivLajXa1JYdniSRnTULjDanaEW2ZjCJz3",
  "key6": "3eRB4PYoDsAnfPR9PqEEA2xMfQdbt9xSb4p82agzubpypLdmt5UCDCPhJghj5J8wiQBBAvUpCncsVToidNsx4r5d",
  "key7": "2KcL3zybRyUo7m2wYawpWcP9YmKtqLmx6xQXU4MqPpuudeqb4mqHVx95XJ6UGqwwXodiX4dFUtJLy6vpYVGH19X2",
  "key8": "3YKEuHsAJWTAdCvR4Xk2RQB6NbXZrq4A2Kbmr5WoPdVDKLVRWFqau8qz5d6VFXv4oQAZJ3Rcvxg8pCGCqLa2EZLH",
  "key9": "5h6yq2PP5pRifJyx1Rh5gCgFcDspGYpCLGWy16c3ZX3syYcsKJeYDdfMnnmfufkoDBjoQuvNPM3qRHyuBtq8FkiQ",
  "key10": "4YU2aMMZtaHgfZCYMaW5f7KVBoipxWvgfUFqdsr7a4QAkx2AaTqh7VgFfwVjfmeNyr5HQCVgH7r7Ht7XiuTm2xnN",
  "key11": "5ehFr2Yy7WqSgcFUKYvkgxpk3DJPpYCnPibCVaXLEZ7TZJbNBGfvq48PvAQouWNnux6PnXv8Qqb1iGxUF1xHY4gg",
  "key12": "51UCJjh9qwhp7xqGtrJeLNgLXKJZG5YXX3d6zJmYYaMG7SDtgGd1MpXLxqJwuChbypCxmaCPwFrdLww1Mo6pN6qF",
  "key13": "4mVMBT2TrwdnXAHAjjQpqwTNfTRUjPC1ZADF5RFUmwQa2HhbPEZfpFkqQkqWXfMpuZkKcQMP5GSWp1KtiPn6jhjM",
  "key14": "4qS4TGppJ29BYvhK8tBgRmbsjgVfUMrAacMRN9YqCAB27MDaqJFRiaETKLUZBXPgAJ5eP8VUc8WoPgcRkHg6sPhP",
  "key15": "2crKXTBaizHkxHETokcY2fSSKySKWfLfEgUMyPGVGaFMZrqgxJyjDQeRfQwjKKWEdRtuNmLRcvy6pHwsphw4kHAJ",
  "key16": "5A4Ktc34ZQHWV3TQuiaBE4ae18FastSGB8WvCVzoB8gRmSVhYY1qwcG8WskmR6M8GEZKa7DuuDcRpQYHb1m2Sjcq",
  "key17": "64U24fCx8GUrUQAPzWtNZvP1c4nJ8oxW6VAAd7cNgMB2mquumLR3fQuLzZP1G9GqrWtHDE9wFt6hqUqGohRfmm74",
  "key18": "4NoK8oYKrSq1aJ3yxE6RZnXyPEFYewMrXhpNvfS1PJsRUWsJMiH8sEKqdjXkbzKYUUPTrZGC8vD5qW4fFvGsZkPM",
  "key19": "5mVUUS3ERCH4YCrQcusiXdGoWrG46nYCBRg67b6LtzGUZb8b4V58Vb4fD2ggak4dWcEFMk8E3fjPzumgKyBuc8q5",
  "key20": "SD1brrxNnztRBzu9ggUsk1mMQ4LW7foVkNyLwRUk8yU6VQWWakERqx7fHrnW1rbqEeVDpt2sJx2nT6Y9qt4Rmrg",
  "key21": "27tZ7Kf5Feq8z2wdXMmgrCZhE4YdPETLGNuu2svjexGFYLu2SJX8zz1ZCVcwqdKX8fKDKyaNa51pcY3zmvP6WnJs",
  "key22": "3truwb1ie6f9iqUoTNyJfQfS2qMKH2BrvPUYMwwHjJvEQ7WFvauRCmsAxSt9uL9VMfakhsVWXrHaqaQ54aE3s9FQ",
  "key23": "3BE1hqhzk56UTh3NAGoCf5eqEmkzw3fAWo4nZyDhr5q5FBXaXNjom8spnoT8jLyKUHMy5K3AEKu2NurHEAoQJhhc",
  "key24": "3KDFJyAQJAJg8sxQxQu9keH1YibPmLmDmMBZ96mBbrBGuaDRc1BJA5dr5Fqmq99GiMo4AESgyefj8uTfDTpj4PsF",
  "key25": "3mrZrgggLfjhwBnrzsdrw9xicMvrSsbkLccNvLe443vzXTHZosWa9qdRvYT7KNTjCg7z954uGXERLZRYJ1VrT4Tm",
  "key26": "5H58UkHSehexx3Loq2UmjJMP7nrxxB68PJRLTQY98sAqoGdyfQjbux2QvtKG4gvHctR74L9ja75UQTztLej6Yte4",
  "key27": "5LuGzzksbEygzgpXhw4Dks9GBi2ZmgATRyHW5Waeu3iLgp2nC9J8LjCZpGWsmH8ATPtq2LMZD7s6fwc7oRbahMkq",
  "key28": "G17fWM2NWCNUqWqidySZU3ojErZ5oZcAabpyercvhjjBFusRFMASnk2rnDrRAWEirhaiGwRfm2bFoa9Ry1eATeu",
  "key29": "Aj8hkHZJqmUYrsQCztuZDTqfr1jtrswEeFrFT81SJVr14DLKscZezhB7VfEhPympJdfZD9Ubmsd4f4J9daYUQZa",
  "key30": "3g5ft7woRLeUjfnwahp5jKGcsmkxM1VfugorDhrhtKqBrK4Tb34WYd1ND99DLPMo5F2Bu179HvrsrfQUqhfnt6rG",
  "key31": "4SpVrycq5iU752CGEparDUWLKLYpVodeqiqqvgrairENWTMvzNDNa1GCEhADpJvtVY5wLn2L1CXu8eVA6bNsAvqx"
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
