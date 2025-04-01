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
    "57UGhuZmWQsNsagp73uQKmNbvAVcRyoVj5qB3HgSRdjKUy26JCiypVqx7DZ1bmHV4tpp6bkMbt49puzvoQrUSdxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cu7wk7nJ9sRWU6efSajyFqmDHdmx8NgRXRDHM2J7S92kNAeNLcrRov3UfrV9azWZXcjN3QLBgFqyFuBHmjS4oxq",
  "key1": "5YtRmTXGKyo8BCnh7q2zSEeW3mp9Z2e5UWgu4Xe7UkDQnPfqwFm6rX3pxYr3XfKUMHh3B4My3Yeo9VHDVaYBhKtM",
  "key2": "3GtNnnGKWJNzJC3yb19iLLB3v2QkJ6x7F8R79bAnPUav8hGDxxohhNucUWT3Mi1S9c3GXdBHHQtAADgXH9yoXibt",
  "key3": "EsXFFFXFmmYjQdvU64N7qsh3q3EzWVMQWqp4DZyMQ9ieVJ6Npaz6ahJ839yLUQuBLhLhBotXYDfKqv21q6UGnjB",
  "key4": "522Gd41mpGgg7nYteJ4r7DNbMdZJ7bW4TY7jqR65msH9JkUrU66MrVYfJmgcpdccLvL7dv7CwR7cqo9HijTdfVZP",
  "key5": "3NT6zyzAAQbEKDswGW4NJj8YUrJa5UPZUAovFN75q5js3f9VuuH5U9dJEecRmDmtQTj6SeJ66cnDn3zsv45f8ceP",
  "key6": "MhwVfMFP7Uu5cRFjJXqYhEctc17GEMwJBB1rRyKaRp8RCsirsRdb1fWcfpAswxChsH6UAFUZ5amvfS2jDT9ZAzE",
  "key7": "2Xjtp1xVSgT5bPbJmWjRGjMVVD4mw3JPbjXzyB7wwkSpPQNUy7cUyangFmYgy8qoqKZifXdRx3v7q3bxt2SLNJRR",
  "key8": "6nbdanppzfYajRdvs8zwkpGecwiTShWD7nyf4dEFbn3zfKB7H4WSLzwETWEwVY2yR8seHYjK2VB5dEuE7cniWfr",
  "key9": "ZMq1i1hA7hthZexeB3MhWDmXGhaAAURdvmy22eJXNRkLtCVuicrtkEH7qrRj5U5bcNUHowgMVHJuFQWmRkg4a2G",
  "key10": "2uxgzk3AsZ319WDWvD4vdPRSgspQE8Mi4yRMDU1CTUjvPx9ekFsjyEH7pqxJsKgaakbsqapTsBhoSynuvtKeirhd",
  "key11": "3YuKhhkv5cJyrdYmsExTYaDGwEzeVqpzNXGdCyLdgQQgwtTZaCjxrHLF23ZnRWRRrTcQUQFGYMvAdVi4aFJHauvr",
  "key12": "5hgzNYkMBYEKWfnGKcMS3kvgtBjoekijMmgbmAkc8Cu7cqHMq6rrTf45vdYGJ4piVsnTCsQTwo7WDdbi3knsNLnJ",
  "key13": "CicrBJYc9161bCDJadwMgaUhZyciwCYbA1ZjBsmDEbh8nJMaCfXUYF2sherp6NeEqqKYeLnCywVFPGaoRevyNo9",
  "key14": "25fKBgUZVJEdVBZJz14RTqk4ttsBmgtPChCAeZUTbQqos5VA1gSFu5iZRTRAyCRPbZVpVf4gURhBBujYcxczcoWH",
  "key15": "2FowSF7w8o8ZwWA5QjeBfnysYK7cy1gRx4GwtsViY6d6wLoqbgPi3WdXmyFfK4bZLDFS3S8AMFW4LrJhHMEjSDR3",
  "key16": "oCssXWaQ3UAT4VeZh4HjFALpQMWSqFnM3kuYXetZeFAP9ds9Xyo7cyaojij8AWU6GYEv7ZahokHst7Ny3ZdeAfn",
  "key17": "5T6DnU4KLA4X8LLCnHWs41XSKGy38PCSwXt5HzmzJrRhMCv8faRb1qtXYuMAn1WFjTk54pHLZbs7stniBoQvfZcU",
  "key18": "3SxekZusjTebBtZGAkeoRfMKRFsnAsNMDmFMMzoZpnVvVVeuTCYcShg7BMV3ktvQSN5XePCP6HBmtyxB6oc74q6i",
  "key19": "3UiWoYDxJaJvagqbnK15r7w1XqxYumGzBzgbYZtQtA7BvN5RPao4WdkBAq4r2q3sM4dCCoPtkxd5i2EvtZeK9PvA",
  "key20": "468Wz4zZEtj6wh3E32Sbxxnh5RUACeUfjccfnA2vSJig1hW6bKmjragFEPRgRTBmLKx45ztfkpo8hhrzvhTkGjLR",
  "key21": "g32mtSYJNsvzqRqgEtvca6hNZ7yzh9fq61eVet2xSBBJdBpXkqAeTfRkkT6PGHTprCCme5EprGFjWoQbqCvaMPg",
  "key22": "4Z48H6sedt73DyD8vBHmP9mLNjxS9eSwEaXEDmpzyJNFxLLNsRocoysXuSUw9u43dhJvBMSEs2rk1dZKjw4LdgCf",
  "key23": "3TD4AaG6BLa4gsv1wdr4gsRtvRnnr3bc5oDM4c737Sh63DLTwQeyS3xxcSzjEvghqov9EY4LPkumDDLZbLQSDbHt",
  "key24": "MuRGY4GAyEXsM3d8nG5qWXrmoCFndyFjKBwEBCj224XTMXsiLZbUALQzZQRjEqQMUDdbf4J7VApiVBz9N8gjMCe",
  "key25": "2u32pXmp6JnSHVZmHnaSCUnp98Va5BUdR3QwvgiFTa5gmc5XQcxZQ8YXi2vkdmK8jCz1UHSzF1SC8xTJGCikdaH",
  "key26": "3aNmrU5sQCZPdVuu5g98e2roqroYUNH19TiArJchvmnWsL2ciMwi8nhFFn5JNpzcatVN4ovZWXTnpAAzUSZbGjyW",
  "key27": "4NTEgkL5EiX3n7nj1eH4c5MSNADRvJX1g18XXgANa1VXfKchnnmhudDPXun9EkxPoSsRUUqWipMVaqbu9txH44EY",
  "key28": "3veSoFt1kC2y2KLRmx4vdd5XiqSG2bfZNPnkiBiHZbkSsgrqcQFHVcho8A7aKVf9SFTrCeJ2dbJEYrKKoDRtMMHF",
  "key29": "9nuNvHFEzUBr6yRvnfnhv47cTRw2NmNoWH5YCfogGmQSuWwpoBgneRWWLV3R3iCzgkzCMiY4AihnPqJhRvtMg6g",
  "key30": "4iqmhBGXwNFUBr9GxXT5Dy6Ku4H2HfJeTeJxo8wdBveTbsrHyNApdMSXwPUKxEH7ckhkF2M8YinBcKu1JNA4snyj",
  "key31": "4FpxZkMAEfhnXTH1Y9gLNmP9fcYWE2QK75dqiwir6nMzcKNwcB1dP5Gjsn5sJHSzmSjthqvgWrCCzgXuha2nKHSC",
  "key32": "mLMQbjT9TcYxvNFi1YiEzqu1fMoyzWvVmAjgsXnrjii4NJGSP7hMyCHhLxZMWLvU9FH6mUNEzTtJTCZqW6EVfSm",
  "key33": "2tTqE7DSospQJpnPX2Pjkik9UyJMdnxAXUQkFcNw1CLvMWQQC8HtkDoLYwN5wuEjRiXCwyrBUXdotkjJEuCgw5cW",
  "key34": "5sjGF4xHgSyxXtiAXDTsGaRjPqYakUbyoioaY3azUj2LqdTnCtcWdiowed2Gq7JfVw9KffHZXcocR2pHb6VH2zNo"
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
