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
    "5bNQpUfB6NhFAhuWY875d2HCq79b1h2Pju1RLEYyhsuGjnAEf1Uu1CXq1YuF5nGtZ4Yc4hNWGPNQ25sWfdhJLx4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uHgw7jm54sDNANf6P2BJDjmRxCLzVSYf9KLK3TJSQAxUPjXFM37NTsuGzWqCTooDevPc57gdbaB5GpV3Uhrh7GU",
  "key1": "23Co9K3PHUbkysJereMUtaLHn6X13cMXwGeMg2GNCNJXfHhuioqq6ry3pGiM5J7KiWALp6M7PzFLsxwdPg683Gjk",
  "key2": "2C26FEkoaSpHYhFck44EXP1rQ9ejPU6REEPNBM93G6jgaoDTTpJwPL8mBa68nhjdCCmNbrJJssRVoQ9uBkMLc4yR",
  "key3": "2r62KpFBqbKWm6S6dbNSYgLzt3GpaaoWH2ofVZhiw81RKMQsGK3vJ1qJN662GQ1Gz2trGK4e4gDgaV1PRJXe3SHK",
  "key4": "YMDYWnC4sTmW3u3ZD4Ciqw6PCyg5hfxpnpVEGvi9MU471Lc6K6XbQadtRGRxFGsexyRQme7aT25Gsv7vYYKBPGa",
  "key5": "5qipXWuKb2gFLXh6dYUy8BZekjBxtbv2cMukoXrKYUNabEnXWq7XuARqe14DEimjFnUoDj1LT51yyfCxNE99PfSu",
  "key6": "43kbvtJtnpgDLM6NnSmzQkugSVXZPsrBXUBj1yejhtpvqVGQYtukWZv94cBCwWdVZ7TcbSJf1Qqmg3vcD5D2PDcm",
  "key7": "26G66KczULNVn9YEVmFiy9zvrbCYwHASeXbSXgVFZoXf9UpScbgUoMsWUkNBRGW6X4RWrXQu2czKtXkY2vd753Pz",
  "key8": "eQSp7Zk8QrB7FirB3Zoa6awXA2PpBzZAYqGCaWdaEjQodeuVYTv9RFVbuZwGxt4Mm25uaZfMMb9zB9tVYvt2Abd",
  "key9": "vdceNvP81YV1xKp1H1F4df45oekrTWx7BLpFqzmkjCaGQp9dgr9x9it3q3ifFW354snUbZyVoNcyAV85LZnTYfh",
  "key10": "2y2HFB5bhcR2jLYTEXFPGyqAfgboTFAyoc1cP7kZUbZ4P7PENxLV6MMT6Y17gfrnS7prk8cyEwWbHqWNT3gb3J5d",
  "key11": "FapRjofnWPbS4Vru6byrGewopz3KvE4wDxtmZ4zNF9JNt561edt2VoFM9XDZ52rtAgpRcucpra9rAcE4dLWURcN",
  "key12": "5wYrzb8PCkkemf4sMsfHw1JwvktJTjE1S8m8vWexRC7f67L2HWY4tjmeZaiviZJ2WbtoAcMeyLeupXA56R2XHYXo",
  "key13": "2huVR8RTSx4ewpDXkjdqdAsfuGBLXEujvxt4kJiKjLUZBoS3RdL5nAx9caZt4vBqq88hiiku4DNZQTXtqZLVRxek",
  "key14": "4u8W3pp9rjhwEbAktVh4QnoMPFgtiBjkR4BH7WWwv3Lyu7eVtv62AkLcwftdGU9vMdjeX8bWfrMJJHwGESxmUJ4N",
  "key15": "4JcoqsPskgFkcGAZyzpzjVqYsp2gAW1ey7nnbeNFWJZ7hXAQJUTgKXrSeBzR2q8VWoysCnVhPVCaXMpcuWpQPHhq",
  "key16": "3cyytBVB54z7Sftjv6S7Pw53JyLhzoGqxehTB1ygD885xMiF5SWXdUteUkrwvvf8sG1FPrcpXBD5x4wkvDN32dAJ",
  "key17": "4BuvW3k5Ru7AkbFRd4dNEkpp9ZefMK4M37hC4oBWySoDUsEmvmgyCuHY7vtTPA8nR8VoiYpW2s98itqC3iMmWo2k",
  "key18": "2np4LSFqNaoVYCKsLor6P9gS55hwLQr6d3spuRvZz2ueUic5wEi3RLHSqGZDW3Hw79RH9UDPg3avgAQyJ38Ew9ZV",
  "key19": "3NEWzAPfYQMqn96fXRHbV2mD9X9XP5wxYksQigxhUwATQh5CLGFKjDBMkSyZjKy9Qp8U9n1hScdXX3b9eJCXKX1M",
  "key20": "MMFt6jRG9vFurb8rhRa9i4jf14gHAoctsqGpnqYDWnHtJm4N7TYgt7CAcckorYbELTZKpqesmhsCKXu9KHnq2xf",
  "key21": "3zELNEj4GPyuCbeKcnQjw8TGnKwgnu6ixaWjuWjvPnbR7ReL5UBDAZQ1Liy4jbdC2ef9bvkK274j65zZj4TxRG1n",
  "key22": "4yAjcdYthokTYpmDeU4QiG3XRAKKvkRfnHChhEWynTNZ2y6izFskotgbUChS6S2GG84z2WnTEhBtLxLn5BNf5XH9",
  "key23": "5TBi7eqcyV5KGoidpsoGMPN28xoHkbqZuRnVBW3Y5DKk4rw41NtNPoA6LdVJH8NYLQMSd7rsV9GcBE9H9B4SXjXH",
  "key24": "2qYNvbYCd1uxvqxv48B6HpAeLL5A7b3L2o3dwhnERZeUshBHHgCyHviJcz5nRYg9LXxc6sHPn4SMVL22XdKtm4zq",
  "key25": "4ynTUKWund1SEXeAC5yGujspqqgEaszLFRPU9svB3q4Mz1GK79Y4VYoqxPQeZC3dQjXy786g1QhGzv9wDvxgvoUq",
  "key26": "4HNM93GjRAFaZo7N21XZzFMQhMTmTMz762DHsDCckXJMzAE66ZenKWCJtyEB5LpZnRj9SEhjW2VZE7hyTfgxM988",
  "key27": "3RiHxV9r9jWMpbjKEoXuVLhnK7EZprr3fbuAu8Q7FpggJNa11VRmdkGFnQcemc1fE9WgmkBsjwtVc22Wpj3JTqGy",
  "key28": "663EnX1x4JTzcSmRZVMwzHvMLK4a4H6X5BZGFgeb5LrFMfwycPmgQVpLyDyN6JDMPBGVP8JqMUSKnQigWUjR68Uv"
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
