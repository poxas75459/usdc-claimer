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
    "2aNergCFFxm3or43fjPmqM6wWrGo5Vp3v5NvkcNYDMj4fm1twr5o88HhJnYx6yjnmHN5eSUdvk183oUpmKW8wkqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AmL68WD7zNMqpiPhncG7wSDb2D6hP8gKodfMD4LRREY9TgYFiASPdycLt82QbQvS8a8JCkRLmjLLECdbSEyk7HE",
  "key1": "5U1EsYeEZVWWiScv5kAjps6exQHvjhzeysJyHswDgNjTTWJoifci7aNjUKB6nbxDL3Q2h4tZV2ErzbXZYVmEJfwg",
  "key2": "3mQx5MEpy66spRhr4XDHUiWX4nubLYvjMSVFsA7NvR2zCUdAaZH5PbnPHtTaS4rYmJj9JnJGeQkFsRuBnd2K4UE4",
  "key3": "JefQGzUH1JMRfnYvEbmcGQERDvSxtwrBmCRZwoUW2G9DJk3YvVZLG78uWzaBzjg72sNptLYq31bB3snoAQmVVwj",
  "key4": "5NDpTgQ5R72nKCsAYMVFU67dv92vnnmezRHz42Hrd6c1x5Boe9JjNvG9EkQdFXquFWe1qZbx3MnUZqezKaVUYBbD",
  "key5": "3NhZHtgBwW4xFkdoBzvYc1o3x9Xwv3HVwZjUCcFXHXHKcx6TWd3pWuDoJKy9UdRbKKHU6K9QPbq1Mfe8GUbtyfWn",
  "key6": "5rp3tjGXDiV52YRLeLghdzdcGae2wzQmEhDa3wFbqF8AwhX6kuN7EwJFim3rj7dZTkv5NPzvHWtQ8Ku4mCPXw2vE",
  "key7": "4DFbpHT5LF2kSaWEpVwVWFA1RPkyhxsUD9a4UVSM9eXo3g9KzMyggrfkrWG1DoSN7h6aK4RPBSGxg1eMoDLccWXf",
  "key8": "5b7tUGRMxdEU4fT7KpPhNXcUNZrvAbAX9EYWWWjhsX7quss1emEV1ztgjNFn7SL8JG9iqVRvU3XhtZdnHXeDwa1U",
  "key9": "V92XZYz9R3mZHFrZRwdbqLtMmD5ooQNq7N1NG49PnEFZ3Cx1vtcBtzJci2z16XJMuvyHVMT12p188BnnVBFWbYg",
  "key10": "3rK3zFYdgHEwC6CAFKT1mvM4uBzRtpFjwFs2vXbLHtuUDKRks9BUSjU4oZLwETnYCDGJpyFaUFff4Y4hB23qskV2",
  "key11": "quyC1agc7LviD4cXNCv9uiMqT3xVmQuHsmTypHiT6u6TrKs7bRtU5QNPjrRYS62cvAHyfEAQBmKk6nqoYzodhaC",
  "key12": "T5TMmNzJrSHZKzrWFrVcFo3LLUyvmJL2eCq34LwpzksHrDY6qDWqUMks1RwFzxV19F3u5Kb3qXi3y1GH3En8nY9",
  "key13": "2KwLmr9ZhPtsuBv4Ug9nU8QBt8ve9GBSij25D1qNHtDB7aQDWZbDhLZrP8t3mwKcpuA6zLdhLrjtwb9VphMmxZ5u",
  "key14": "4YAkiBnRBops9T1RzyzH1AiXfUFAtsy1erdYvcgwaku7SA9NE2bSQemZnGkGHBYcauzap8u6wzPxTmxbaBfxSHTv",
  "key15": "3HEBQW4e9KmQpt4uiw7uhoyH24pQYFqLsbBAgJ6FtMENHniPb35PRi7GXPxHhzbxQEer4Jvrz6L1hBoUomZasD4k",
  "key16": "4KE11P5tYRiKNN3aGxrSzakpnNAkC7jVr4NZRBuiwdcbVCZhCtLbKgC79JgkjVrfuRhRrnXG1rKozzWsY2gq3vcJ",
  "key17": "67dv6by1Bc8Qzh4Vtf1tff9Eshap24rKynF89WwX9V9Lt1yjd7EpgfRaSeAqywHssAnDhPwTdmJMiycGLftCnYHc",
  "key18": "52wtyvfotvYg6ucCw6bYUzxcEzU8Aw5LLswdgCVHgbsdjWynEfATAjDbXyEfPAtjWghHxT6odEHkHZmP1A9ZF5tP",
  "key19": "2MeZ5P66rWfuTcTRxucHkWEXqovXiMytbbmjt1u9iYe9gnzkpUmanQNxkBg5zmdn6vQNgSopX3r3yDNX3ocWNgSH",
  "key20": "4naJCZrU2tpDvA2PWjnGuUDXAGYXqGW6mWpEp2DzRK6ChsfyvGFEC1hbdw7gT9HC6hbWYSVKC926fSTHKSp2SThv",
  "key21": "53BfMDhGDBaudgrd7nQz6fqPEd6GxTf6gd9y8ZWU6v4nPfVrUVjvJdNAit6r9s7MtCPd93mLHPMn2jxuJdFDZLEo",
  "key22": "4sHNsEsLkVnT8GnbcESm81H8HgT45M5KUkzkZMv6URH1V4nyQuTPRqJDZnvLZZPsysTE9aERmq53e3WY54oJdFoq",
  "key23": "39xo4PAbhgF89KcHRjRfa9WY9dDzt8oDDL53KwREm1BBAzm7k6uf14XCyDdLSKx7ZW6vU82MqwKK2Wb8VLSoYPzw",
  "key24": "2QagBvXFLDyBMZxoVsgsYoBcDvQqRggecWBaJh3UxNCXqZ8P1N6HiZZPE57RaM5qGawc6wPZf6RzwuWAgjMgEwfj",
  "key25": "uwgzrb1Vtun5XWFgXuv8iFdeGHDUb8GSC6iXsBu2UNE8DpuD7WPk1URn9BgYhB1rrjBNgu9njTSo8Yub1DVW2tb"
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
