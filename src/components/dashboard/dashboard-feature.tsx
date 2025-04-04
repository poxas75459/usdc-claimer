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
    "VMo7XKUKvwZenheDqRV69Wjnt6xwS9Qoovd1bX5jKfUWKssqHpwUSUjp2gEpcNbZF8NCM7zQHZJgWeBXBBWGV1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34u2punyc77C7uJUnbuPZF3M1RXoCRgUnEeb1xtibfhX3Qn4kVYVAXxzcYiWtkAEmgrqZUfL8CyBNwZfiFPfhWjH",
  "key1": "3dnrSjtxu25wfoaa8d8qW5QZHqHHuz2obwqUcmXaUe7kpeFLmL66XkHhgeKTqVJmmy51C6zNKfZ95LzhCavPSCH7",
  "key2": "4Upg6319HBQjynBGLr1C45z71X755VRsbFxGxPwdV4JJgXUNDdZPddVbf6rSsgSRjqCHDERec1wrWRtXn2UDufWN",
  "key3": "212hzXveaB9R7xN9gRt4u5N4RG6t9o4D8sVkfGMvS6RKdR2Ttmc2Mg4fetX7yBqFXPohqZEo78Xj8FZccM576jg6",
  "key4": "5KQVKe9rm4KaFRxi3oaprtm6qauyQqzYbZdfDmWw4naSH5XUaS6QkrAPkw4PezGbR4LR4rfuTMfDGCi5iYwBGnfK",
  "key5": "2B6WcVmte1mPWLaxH4mshcMmcV5metXXtNqnsZrQkS1GLGnHiNbkRAwjiGHxpzqb4KXvu36EErYcCs2VCg9a3HSx",
  "key6": "63oKyvJjEReRGYPZmGKNAtwnvAnNeLs6zkY2R7b5dKHviMDGUuc4m8cWqQrdmU57wVQrNAdFuC5MXsaJpP6fa82B",
  "key7": "3Fcc6AiUHu9DD8gHQkTWaCHLgbCFfEA2jdAeQ4p966BnTH3HH4u3v1DfeQNDzJFAu671uedEqvc4PU2wDbPPJ6P2",
  "key8": "2o34DwMAzXsPfXU7fMtXNWXvADw8AgnAy2KqJeV71RX9dKjB4huGzv81Y5Jq4CRzVGCLCWEWtTrEbX59HmxaDi3W",
  "key9": "3C3rPP5F4W6LSv3cZvftfdcNiPY3v4s7c1oJrP7AtdwxBJh9AaKPptpuY6LF94RKAfFP3dBzwSBTd9Z8Eo5ai2jG",
  "key10": "5Ni17jB3aenGg2o1HtZJURahDFADwMDPWJ1Up3rEBkMDg49EKVXMk7RWvimNYuxkExjnf3PR1awhWnn1z6twR8K7",
  "key11": "5Bn6nNWrLHpRboJC6UawEtpUmDaLfL1Gy6tYUXdPnhtyNsrNvFeSmdHMSZSTXzYAPhAWvhXUmG8jUHHDyxesQgs1",
  "key12": "ePxAisk7gju1uDRr8XALFhLkxQggWk5aNkHqYZHds4t3ukTJhjX9BPX7PsYVXGZZQYWC2xzwqsbxZgQxA6v82tn",
  "key13": "2fyLL6AmxuW2c77K8f52XYXfWDrNPMXYadBhN1NYnf5PKzFfn7JuoF2JKtw2E2ZRMEWDpnekMWYXTzYkFYjQcgr1",
  "key14": "3X8arWaCCL6dYC4ZzxjDhj4dKSntgXiZV7ucBKgX4f6Bj4rJ8oabNRZsQxSxa53nDiKpyMcedZ6v9ATZz7VJ4Y9B",
  "key15": "k26cdvNAaufGn8juN8hLTfrjrthC3qEpZPSsWjc6fgZpYCJ9hkWbA9AApn7kGiuetmyZLLthen8c88h84GfYTmv",
  "key16": "27iwe7hvGp5a8UeRx6vZTb4VAcMq5q4YEY3cGmYMyP9Eoyg1R7YKCej9j9tBws1Ecv2cavjzMJVqcFDdcQKDSTeE",
  "key17": "5Yipfdne57w1SpE45HvDTwGECE72qSAZGa26yQG7pA2WKt8gQvuzkWohqurdgc6HTwPFfX6LiZ65iFkTrxGiME4B",
  "key18": "T2wdLmAYUJyBnZAxFoNWbXrhm4CjGRXBYikQCQSqVWt3q9Fu3Wh3yanUKMwCAuX3ov5gL7YctR53u1JpgK9yXA7",
  "key19": "2zZqYqTQQMs2dhmGKGGPMAxZcZowpWvZ94S1HZTjtybFANMwHjh4j7QHYfU94582p7MM1kHhw5p1KWQNdsEbERMY",
  "key20": "5Kjeyv2R1jgLxRgRNJaJ8iFJqWwgCSNxgwU9NVtJzuEdeDqgzAeX4KUJVLnegvjoVQwSyppTtnUpSHppSjzksFfo",
  "key21": "3dmqPUnV3R2VwHCnsvsyXbULhTh1yfPfboCqHENd2LNKt4Q9DCzuNos9YZtc9X6a3KQFSuUh2pBajfVK1tWH7frh",
  "key22": "2vjCHEtPxrL3jr1BAK9ccKjew1eu97FkrDPDf4Pqbdx3V83mV4rMe595NtTAt65JquS75mhPxEHCNHK5Wu9HT3Tq",
  "key23": "337UWC971qK1Gws96LG7vDSeJ96GTGHpHE9teKbE7SBAHE7zUh3e4Dj5oBQqzNXTmSVKtnU9hreiKWyvTzaQC7WM",
  "key24": "4J6jWKT9Kgr1ao9Tcs8BonRb99BVaJkQa4Z99DqoSDdjgih3D5E2UAbjVPqx2hMKvH9yGaxfcTb1TE2w5euNt6A9",
  "key25": "5kaehDbrQBTVoYCvNE95n8ebbFWtxiCsV8YNMB6XdyG951Sy1arekKHbXTSoD7defgVsb82eBM3oB3dibH1D3Erx",
  "key26": "4j2rC9gqwYuGmHpY3YngdAhBBdhtX3SazeuhXpXDwsCyCGK2ppM3zrEa5evwxLDjYp1jrkDDwHZ5LPA1RRueBG6K"
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
