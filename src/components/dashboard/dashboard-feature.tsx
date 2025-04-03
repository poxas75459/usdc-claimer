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
    "5zzing3t3x1GzMDqnEfNVVE4C4LMeBUwexAUo2dG3AX7SMXxJfA3fCaMNVt3VnauRpQmTr1TDPYb4xoqE1XrHuk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42wCWQYw7GhiRWDxz9334259814wCCgc7YjvxbGXcrhWGqs671ii3hAT78V3JGhnEN9YMpnjVVQzBiLuRKsnFFAt",
  "key1": "2qHKqGugyTNGfsHd8DQXwW4XwVNTbSiKbfGnaN9zetmJpH4Zmkqqfu1fT6CCssnKPDtsH3pEpqPrYJSphB7JdVRG",
  "key2": "61nKu3ac9WZcMeQXHTzTaQE3abM77G2aqNGCm2SRpWdqJEg3Cp653o6WdErLhQHcz3zfntUsWa2c1g787Hz4kywi",
  "key3": "4ywsN6T1gQ2uR54nQ839eQ82kxerdqvUYrGVZoYFTpMaBL7ZDB8sG1pLTaJcVevHKciiQXWqs44pRKQM4oZxrR5m",
  "key4": "5Bq9ASEV4UuzFnqHH5wmwZLCWeEBtfAvCWssRHHNW3EzchkroctBQ39RLfQJAh6aEHDg31uDbSJvN7cNy1i9DGEp",
  "key5": "3oNpZWfyGkhvCEqou6324aiSVDPreTHj32dZzEGy2iB3tzYDcxQQyDsBG5ecDtwh3wMWiB6DHVWfDrf8fpyE37G7",
  "key6": "3Yv8z1jKKgqHiZE614NyiesE55wkjM7cpYdp5nsZEstvjRpKEyb9L6erqcdWHJbR86BCzV9kG8rcRcfQ4Tn9bXBr",
  "key7": "3FBPZRwCus8fAEtmRAa4kfQ9yJyiMcbMs5XUqj8y2zYwDYYjJpwWj8szkyP6NYVnpaiV98LvjUHRfVfhUBTrzNzn",
  "key8": "3Qha7y8RUBgpsNQ2GnAErXgL2nVkUhH1N5BkZXrSSvGz5vowur3GCKdYr1ZfMpTgwXxphRYBo72nqzEjvLnXHEQX",
  "key9": "4RHanitveyhrdREhZadHxWYxLckS4iTDCHZ4cs3ZDBRsBfDassdkkRufU81K7bUMcNocTQveVui81U2c7QRXpnAd",
  "key10": "2wMM2rF6zU57YB3peHVsTd3WLd8Ns33x2pyJsDmRkZHqppWN8yY1nJL5AsmXxFkoXXhjGMCaHNijXFMBf6iqYq33",
  "key11": "3iNXt3ZhPbtKrvYGnaoYfJh4abS8oCUFvQArh7QrkGTWagzw46Q5Hc8X7vRG2anfhHe7GaMzTRL9CQzK23aQCU2z",
  "key12": "2nrj5F54rcMknEQ5TQB5Srw69rJJjyHaRtEm3C9CXVoNG4uSkFw7V7jnxks4XMzhJx5KsVHT9x4cTkuT6ME8FiZo",
  "key13": "28eGK4kQvXsY2S2UPYsTAbDK45YkYYciW4A1TZ1phmoTg9zziNk6Ae3WdcAK7DUtS9cPtmyk1pPnLuK5BXEM79oA",
  "key14": "2fPpUicQVDDpGU8d18gSTmXtyK5P6oju65crs8yMUbxAnELWsTudoPnuhu1D96LwTmnssrncj3umwa9DDHHYaiGg",
  "key15": "2rvEA2mNRfaLuDuX9H7XCooiUw8ejX4BhffzN4BwzhxohDCuqedztVt42VAFJDpL8EdvqresvovHfCkA55ksAH88",
  "key16": "5GhFnX6vmoMi5NV2t7SETTmQ1Kvk2ZGAm1Vx7BThi4mE4K8xrbXTMgC1cGu18TUwnVvetzJa8v6cvc9tXNCKk1oj",
  "key17": "3UKo4XHmENMeb8HBtWgbY2TEPUZwXPxJaccL4iXBwMCJ4XGuDZJgyJW5Zaxmfr6GxK2DsLhksykkqMf1FSm1nUFo",
  "key18": "2mrG5D7sc8YYrCgCduPiBvyjXcEtDn3vhwH1NpTpKEJh7xeosnTpRzsPghC6VaqRQwfC9Xq3YWCNHCUgDC2hCNYV",
  "key19": "4cHsTySNfhPKqWQ2AW3McHS45QebCz7LcVfzFwQ9CR4bDGo3VcZoc35zWsaYskKvfKyJw4q2atX5VgSfuQEKwpCX",
  "key20": "eWfMZNXsPUSRoEqkZNb9h5Rns1tWDwe39X67StsMVhCSgQUx21i3dyZcYbWgq5AjBofpYhxHYNjGbU6ac9w35Dp",
  "key21": "5scKAS3jsai3kD99Tt2dhbhSr1pjngDg3x4e4YZbfM27T6evGB4GUHEpRi6xE4sx2zFmLUsEfbK8eDkfLS3uU1JT",
  "key22": "35aSePEjUKs68pjgFieeZnYYdvwFrnnHN5o7YdJMH8dXxfwYpBdMGtrTCDgy3D6ykc6388aFcLYkohWz6fENKTgs",
  "key23": "5YmyZmxXj95MCdvAS2SF3eYmxfWkrCHKdEnBRoU62GnrZqgc8Xb5WgXFFaupURdjDGhRu5uScKgncdmb81w2Jid1",
  "key24": "3yky1NcdBW43vSz6TFQPJf1bgQQqPXiY7R6fuMjx8UVRKBNXPhJDuSsuo2W1FMce4oVuv4BFFGSDJnyXfbx5f3Jt"
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
