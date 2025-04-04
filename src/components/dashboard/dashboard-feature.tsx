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
    "2RF85j6VhBDsSgJN7S8vcj1Tx77jV5Rbh45bZTcLqErfdxZGo2pB3KvRfeDgFiz9C9dBLJF5vnPR8nwA3xxHdVjn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "553HZR1mtHNvbV6cTfZcWd2vQCY61j5VM2jhCUPaS79tNHWsWAapw92Zurv1wsbbc3r3vDGsZsYLEJQtX3P5okUK",
  "key1": "5aLfiRtFkK9bvqnoLEbcQaAavf3kAzk7hHXeZ45p3dzQHZNk4PCsnFKBg8PLqn49VM8gM1HNDzUP2WeCCUQwhznj",
  "key2": "2FgsrAr7BjRUNGxxNNdVd9e8ZrYj71GGpkRL1cYd9gJeJzNiqBW2vNHBHUSDWUMPaPGJ7MzdjvW4Mhp3CrAyBy7B",
  "key3": "47o2gik3W4L9rC16mUeqHXf7AADzSvb4e4WQDCggVoYm5RtGZu6zJ5LCi2QbV7Ym3QZJVkMYL49TPKsKmpGTQfPv",
  "key4": "3iGLbmRKFVCZ5WVWybN7Qsm6c7JrYWng3rEoHCQyPAfgQVC9ABTPvdaEZAYhfi7JYxrSEFf4ehVK8erM9hSV53Y8",
  "key5": "4qUh28yKyniKYpz5TzCFR5h7ja2CMX2rHmKTnMwyyzFphE7eibk6eE1cawFvHLwMVdkcx9czTLx9ufpD2qGcq1ss",
  "key6": "41qPVdJA5HXsZsPGg4QMg2PSqhDhgo6QXU8HBcJpkHJkmnc7PRN13iwkMZ9xvZy1J6buwqdLfu5PnGj3zCqMyZV7",
  "key7": "2nPjXEEdWAAnLHBYSdrytAkWsef72m547Q7Fnimu2akso5HuKUzomCw2UsoKNoRmRwtAoMkGr6GnJ15M8eaz7rnF",
  "key8": "3dAaX9Mvu7vbwfLTAtNLQo9N2Zaq5B3o1UDYCa9iEcfs1PGgLsA47ckL3gY6KVVRpdbqNdBZf4cMdBUr8tYFBN7q",
  "key9": "R1Um73Zi9QMvmQwXX1iJomNNKjzxJa63dLRMSu2pfgcJiTkKRjVzbUN952ngZYh1Dh5FEy2YHY7X3auQVsN3QMc",
  "key10": "2xKYNNMHgM8pH6iLWJNxoCR9GVmqPEU86kiRMD1z6SFX7t7QfiLsMvDU6YLEivQXLvnHdpKUvoEqt1ApuRDGgBrU",
  "key11": "2m5PEdjqTRjfwF9AAbbAwssGJY5Pv4FGf2dt8YQ2yZ8dETbnCbUkb1pToJC7SrwsrTkqAWeHqYhReVF97NcC8vqt",
  "key12": "7dXzFqpVHrGAWQP98XXK7BeULCfXNt4jFWir1grTTsotAr1f3qfFM7vAznXU4T5WB7s4kp5gao4sDzXc7D6DTQa",
  "key13": "4R1XxgWurNdS35k3kgKzqign4sjKsfTAo1ya51pWbixYXBtYS8JnS7QnWBhLy1hbon3u75LTsrrA6XPrXVFXW6R2",
  "key14": "4snhwYqcreyEnLcXwotEfzEbKrdiZC9RpBgRDwq9FWUmsSAtXHAtyXc3nGQgm1epFCZsgKFaTKssP3LA7YmfSaBa",
  "key15": "2ePVtYZ77x6Gqis2QzdJpqKvrUk8y9io5XFFogH8xsVne5oskNScTgkJTyFjTUHsrS9eAvQSoMgqBy5844wKVDic",
  "key16": "5Bcf1r9dEotZrhbPGEGPmHMsKFbz5aYPByRGefp7ZZNwu9Rctp2xydS9ipxWZibeRKJtY49UvuBpnyDbBBihp3F4",
  "key17": "3j3N7j6kcVk5tgAm2xRvcgBAkvM8Fyr8nBAFg7W6euVFyLwvc5Jbq9FgGocH64uLL9hGNmhpXSs38XjKkMK9XR9S",
  "key18": "58V4VVMyQvuGHEjXxmyFkvcmMaxsvuaHoApFooKmKtxFLboUGdEpTtXVodXP1Z6udoq8XjcHHcHkphwsBRwZSGGR",
  "key19": "5NXej9YrT7BLpkPAB7eZRSfZnK4E7oF3BLs8FDKYwVB9YWFkdYmSfyYSZyFcJ9nUwqf5HfvdwYnpwuCKZR7gDBAp",
  "key20": "3SZgiVBfjShu5JWqXU4G9tQNaK4esn3kpcGV6wiMcapktSWvGbr8wVBj36dgFRG6A6Mfad5CyTRoSEcxM742mjgm",
  "key21": "364F1doYjWT7v9auX5mLNaT2YYHX1bsyxbCn4VcDcT5QdYzreEdpVsZTpZFLS8EJ37a5JbJkoSKDJAxQK1pPCZYh",
  "key22": "4EUZkroZLP9Euo1THv5aUtMZTwtuHJSzLnwKL8Z8idN18vajE6nfFKqvfFEhQS6zkxbFaj5JH6wpqA5MU6M49V1i",
  "key23": "2UWhcSZkFrYeenE2N2AE7QvoV8gWJdpadaHLFv2YauD56tCYsyUVWGkjStH9mdkdYaEsrrz5nv2eaHpmc16F294r",
  "key24": "4DigQtkW7WWLsYyf7Mc6yZe5mPWnVfBBfhsVUNwTn2WG8Y14RdvoCyQ2VQS736CYYQ91s2j57Yuvt442qdHXQDMp",
  "key25": "4XbGqBHpTMVCGVJX7xg7Yah7YngUnBLtbZd2VJwQfg7Xu4f5xsBAQpJQKwCaxseYowZJ3nimzSwxu5SFNspReAHo",
  "key26": "2hp6W3BotBpDPdGWdtqGpnUdjCE63qEDC8awn44U7D6pqBJw38WhMHs4Me6Y91Y3nmJFJzShgLnKKdeiK6TnqJTu",
  "key27": "4H2tHHgHd5zWXfCGkLzFL5kWDqxz9AjJTVqKZvMSq7TKX8jQhkySUCx8Ga15nR9og1WxgcEwHWoGi9Q8QQSjNjKu",
  "key28": "2AKNs7Su8MT7huZ7XGraQJ761s8KzVwHb19X98gqq9tbXaMGqRNJPq4j1wbyCGdWm1UiovXSjhwvhznDBxZNYhrh",
  "key29": "28xAN81Kh72Y2MNdHTdG52h5hyotyMZu6EE4zyawXbhrw1JRSvS1tcHZ332FpXz2LALa6M5T2BgFotmEbm6SKLLk",
  "key30": "4fis7cCvFV3qsYesqUAbkCmecpwnA4d2rBuMGPNpPTKBjjPVDqb2By61vYwDzPhmDpjnaKMzg6XDyucQ9Tpk6wWp",
  "key31": "2S11hSd2Tjup5s5pqd52XhnC7ey4Bcy2cQt73ELnoQYt4gFaqAz78devDkTd6ua2VGk7AdzDQpK8diFL2WX6eGwS"
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
