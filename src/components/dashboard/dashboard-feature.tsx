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
    "NmwF77UemfzBUL1vjmTKx71ZjnsN6ivvqVHszk1mVufW66ekJF45CsrPF1NztL5hishdQX5CdJR1LgRNJupr7kQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hHK2Wro9mxGvWeb4p3hucH63pZVz4ieCEKwXuWYYUxRs1uQzpKcUkuvevxRHtrfaiJKPxP8z9fTaYkYKtgPChgE",
  "key1": "4bEYzvU1SN8852NnCXZGsqCYafW83GQzEqWxkfKJRoa8cL8C3JBwP2ZdBvHU3ivwv7o5u5YWSXddG1TTy1vXUuhd",
  "key2": "AnK6jTzC9bFDGKtr1iNCgHGHoGasT514TZv3xw7sWmwvXBNxpPoYhzFbFgiELwpWuYZ9NizKVFKzUiJNb7nbw7d",
  "key3": "1euqPbYszc9cHV8xkdavQ9qHsu2YBrbQgtYXB7eWMaELGbrKMKLDhdSBp4EarQHsjwm7XEYo9mnzwN3dzTirkXr",
  "key4": "4VEDuXvJ6Ets7khWLBPhhzK3pohn7GNTpzK5uJiNVGVqbgwP6UGFw8gUzLaWm8pugeWefhGQhwLrC95CeQsCGwFL",
  "key5": "5vHt5niazNdNL2KqpYTuxaaBB7jswbAyntZrmVC5pW45RBfMAUfnxv4AF3pkWHq5kReM5dKnNrhfu9rHTeg5ATjn",
  "key6": "w9eWAV2QoUrh3AsreQfuWVQZvpoiA24KGTVbiZuGqCmbjjd4EohhUMsmyh3iL8KDakwho7xwfqifd96HwcXKRZE",
  "key7": "4FDSrn4jy7ZfZGv4em9pJBncyDqT6DnnC78KALbgVFbcgWbsJYxRG7QaQfLXrjP8ZVFTRD7dxLhDNRHx2u5AMTSr",
  "key8": "3o9g1HoU2WZJgft3xY98Wje1UqCm5cHDMgyQFvHJqvsHz8GJBLTmHHQwPB5BkALSdB2ByuqrZwuG7PBNjveYvvyj",
  "key9": "4HMkAAwkJZS2qXLHpmqc98p9nKjUvacTHLC6b6vVGsBzMtLsgmYsab94NVW4rkAjK2KU8QADw2dS2esb7SXgEg6e",
  "key10": "5EW8v1W7o1vsNttM5Fc4goUjfBVpoB6gru4vScAUcupm4RNfgk8WbjwWyhLK6ffsRyV672dNZLVVn7c12yMjPeXV",
  "key11": "RL3wJCppkCQkav3bw81mrqsHAUKfGfXqzM6zpQY1VAn5sAAAyTCryx6vRKqGfo2A2SaZbrtEDkJK1qJ1DwMfsvH",
  "key12": "jNmx6E5Di8aNirXQUBbnbSJb4L9Mv1bGnCcKrSCEdVLGkHGkP2XoTz1zD1cidubY1ohWxR7E42iV9iE7ofmdUrV",
  "key13": "26CRNBzw4mr6VPbYzKR8gbpzDVB3wrRwzDcUKFtLqrv6Xrn6wsMCqNpkZ4W4546rLbp1Rzp8767vVpM2Rsd4yZoZ",
  "key14": "4wKVGRKQTdic1dmyAzKMY3RjBmbV3zABofB1VP9nyUgCsjdYhF6ecXoYvauN7ocUzmCKkwEpuPCM4LkZf5BwGApv",
  "key15": "3YtDamrh7DUYTePxbe3aJDQRkj9AB9qGV7hRQWg7iKaBAAWQQRSYzCeKBzFb58vqbRyEdPw8RPX3WnMeqLGwmKRm",
  "key16": "3CJqDpFUoHYXEEMMhL5QEn9yhWNjHW8y3uRjQPqi647RCoumPyh34jpzMf8ZsNiSDsUChkL4k3QT36QPw8ZU2zKe",
  "key17": "vGqX8jbB9RrdwUN3wpWEkGQWc93DPTyZV2JhDsRPNKC241GPbpQt2oybWzk7c85MmH4p4U1FGsojAEJMmLJ2zuS",
  "key18": "5QzZbgWZVdGgafJsQyXsHjTTmEMGFhGYBZeS2338EyL2tKKAfrtTBZzDQzcfGYJ9PExkB1CHYks8CEKQgrL9Jw6S",
  "key19": "3DuLzdX7k8R85zkeDdTRkGgyrKetJ6dNTYddDXn6DSMbsKUkLsujEUmZ8rs2Pa8vPj9yVQhLP192n9xPfiyv2VQM",
  "key20": "RmBC4YRGJUtuT8Xt3xb4mTixbgs9pveCSwXHdksm3b1jV1fntCe7BqecFwFCtHAKcPEhHw1Lsri5ZqXjjXy3fWH",
  "key21": "2wp5Vwh8AbMbPJdPgRrkB77vwyT343JSJTqAieqPQBSVKDEVhA94mLYPQVsGRRWLicBYBA3hGPE1BoaBVJ93nGqa",
  "key22": "2iSvH6rVK5rLBzAFHUphgDBJ41jNY5BxKMhwMrZ2Lp5Qr3TP1vqWgrRui9A7q5nCFTcfbGBjXD4VSB2piE3FQiMM",
  "key23": "8KScbYjNrMeMZaCoh6GwjMjR9BoRHjduutsb1xK4H9rcb3bSci3jFdyqQE1ANPZz1rSmpFSfWvbt5V6raHmcfXw",
  "key24": "2U6gXVcuiM468cqjdqhrRhMyMoqQHr4BLCN56kLATFMZZRtBtt1uH4iQ7XMoNag9cCKKCXwVU82kEfpBPDGoTQHD",
  "key25": "4dcyqjEtZwyW3R4JzwomKE8BXkBySXBHLMBXcqdNQMUipTs1FmmSizTx1211WxYnaV6BtVSCFKtDga5dERKVVWPq",
  "key26": "2KFEqzSWJYjZJUNu9JC2PgtExmzbXJMvXZ43GbVMkuZciGYPRSyxZD35Etu9rWFZGFtZxwhmgMtnfT4nP3PyVcVc",
  "key27": "micZMXPdCp6LWSaMgkjX4YEzwrrgHUzfmsRXM2XG7rVKDGX1nEw5FfKmuXL79dn3CLaaS48rEeNy13vqWDHvpVP",
  "key28": "GupXT8NFWVteeavCgfYaq67g1SBCCDVZP6eZr2Gm6wuES2e99SuwCpo8m4VEjvmPTubFrE8PTND1bGqysrY3JTc",
  "key29": "5tacmUZ29CaUKutkfJbx7doKiDc6ugrsF7hDkYKd1MS7jD4p2PjE7bRF3N8xwmYmQhGDSDkZnFyvFc8DhfLEwtXZ"
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
