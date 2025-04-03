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
    "58Moj8a1YdKmHCFT6tWJk5G2EfrMSX3LFSjaQEykBNLogfid6KStZUCcxqeWyecWsHkitxsWKgTnLVtCKdap6v7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LgV4UGvJe4fnxhNL49JTPvxbTjB5btzX7FKmU3Ngd5ZcvrSPCM6EY5KrDGQB1Y8NnEDn3waqtxvXGKYAKq6ETTW",
  "key1": "34Bsp5PM6jxfeENz6LzVdhHSqhLc9grxSeBZehs8AjBhek9hDnMFQb6BJnY6vXSansTfjCggzsXoxMHvQuLT4GeN",
  "key2": "nr9iQ5EMkfi3uYcpYVXLbgQbghhvFG6x1j5FNfp4UXkVu31WxZt7zcponpbAZhmwfLQf76YPZNAGxn5iZ5J4ynj",
  "key3": "2vUvtNaJ5oXvFmVwBnvjQ9oTWfnyUyGVhD68ia3c1fcuP9YeC16kn1RqisQhfrWZpeTCkgoTx99KBTv6NSFUZLhe",
  "key4": "3QQrDjmf9YPAYSbYPPYN5sUdcLhwgG6vgDo7Li8V9dNWmtEKmyrfFUKXHorZ2bvxMApwTcQh5vM5zvdW3Taqudpr",
  "key5": "2CkEyKcJcXvXDDD5cEyVpSmUGqKs1f2UDMDuk4AiC62p8MhJHfHR4DfYrQwZTViHvR8v9ydcGaX1SWNivnVpfuKA",
  "key6": "3VXsoGotdoPFTZeFxQYmj7CrmUTsgitiTfM4rR2f5VhAaibB3uSdVB6smkLsnqQtrXqeYhBE5HAuvL7p5reNT2Mb",
  "key7": "2KenY5hGmHMP3rXdMcVtsakCaLK4GKXJ7woaZRN1nnhsbJdRpvYo5SBLp2ZHX1qMDbwGCcf7pRYhsisDJoKRadFN",
  "key8": "2TLunH7keZtL1YLExbgyQ7qUUPyxNqoMxFPJGvu4kcefB5wNQykYE5FBEEeL46mTDcokkL5tC4AmfZoeUBD7En1k",
  "key9": "N8PbcubSfM1RuYvPVrNGY6dNs7FGnQvD4tzrQVbHafuz72x8zqsAPtGyQ12bNrEx9hjdzpxSigiy1ptKwVWg7PN",
  "key10": "3BGemriBe6eq5bQ6AijcJU11TxgfcCeyUcpTkmAtT3JtF7QpyywkFtgS1GKtRFtkvTcCfzoWiZePeJfNB5DZWcPC",
  "key11": "KRQnZCK3W2PgnWd9RE25tzinqx4E5RuzZfG4KQmoA2faKHHB7mHzncT8CDXU1jbbbUrpHwRz8rRiRv5c8CsmjeX",
  "key12": "3HeTXWKRBmEtoPG1KuYD6qhoP6oYM3iWr7NFeMqvuixMffpkwbgGuKUxgXqy39tf5re3oDetN6dq2jUxydBSRic2",
  "key13": "5y7ChZeQC4VQVHLw8sDtPtrQU5kxzWCcii2VLXFJPxxES5MrvXJoNJTsD65UJKYZW6pp8PvxcgjzaJ2AbBVbMme8",
  "key14": "5A9oZNKkEyQ9EUeTU4jvatjPCAu6Ra9GgaqX6ffz48VE7VVzL9qq4ed7xzQ1LpD7YnD3m33EiXEWyfssjEbprCx3",
  "key15": "4z38dxAc9Swwpi5okdXTgjBepvaKtwP8uBFnLkEVZKNUu6cRQ9YL1gmpRhHpL8PCzdv2Ye7YS91Azs9gaxERM2oT",
  "key16": "U1KhaWbUpFNwU8PuJcJgyQK4db3BU117qNui32MJfpc3ZYGizKiwT8btF7tvsGAm97r5AGgiuyjWVNQhzxHxahv",
  "key17": "Y3PGs977qPQJ3THwz23t9LMqxTyeJnKppRfoZWxiCkwQMdaSMDZYCDfamWRyfQHbjVoSAyVwGucEMEgrRJDMcKP",
  "key18": "47DPRJZhqd7M1FPAUZoajH76N4nJeYt3qMQym8YtPbtFVwnrLcD6JaksMRH7MJiVcmoXoM9XNAcH8u3cAMrcgaxt",
  "key19": "5Ztn9JnuTxFcCC7qmyghdYSCeDRSaoWV85CsDQkNZRYWgVusGhScjVcN8UWrBFLjiHpCmFrsnNAjNBh8DRwfoES6",
  "key20": "56L5ubheHrhzw1ueDvtp8Fard52bLZSDou98PwBmSF5kYKi5hHyUdYnJyETbK5jJWherxqvuJ1RQWyvnV2MQ3DYx",
  "key21": "5GKsEzPH9w9nxttoKGyDbPxtgTvkY2BZSUNzT8bbmgCFmkHGAYtC2QwyMPFNM4SavzxKdDQFvSsdwX9QdHKo4yhL",
  "key22": "GBpSLH7BvZHThcZkdmTeBiEb4E8rNoiUaZbDduVaFJbJD25mBNA1L3KYwVqutXsZ3Zyg4BBMcCAen3tKB5iPLUP",
  "key23": "P2rwiHD95oufT6bd3HeS33NcA2avyUd1pwEQDQGsrWaC75Gn2hKWUA7Ygb7H3oYM6H3bVrPkBHfAY7CCSD2kE5w",
  "key24": "nwpnV32zHmCt79NppDDkicdwjMXXUcdsp9jxsVMdBRyZ943C3vVU1bkwykwVCcC7xWpdqx64ANDrigZz13ncWCL",
  "key25": "3Hvc96wGHmBnoKESFS4SWemMSh9ZvtHm6RhRPYkACPqWL3XpyVjbnWTb8hyRgqyeNAUe3gydmfqVQruZ1V3YKYvR",
  "key26": "6VJpKB8Rzr8gWCLw2rLctxKm98BAgoe8QGBFQNvwvjLDXJhGCYHiRHxzK9LyfxwgHHAQo9ETmqw1tMD8dpjxsun",
  "key27": "48QoixjhaSKZJhne3QZXkTk7KsxHvYqtn7nr4Gkpefu5CEeiEPzB8aAJY43NknYX6gLsfLw8bAAbw5xH8yXtgPZG",
  "key28": "3sKLWgb6dBqhGF6uQPgJtvBrReUva1YcVXRodgofX6a3ZWNQgfYj6Hfup1tQAbiThByHCaT3LL1yEBu5K9GgDHut",
  "key29": "5FRM9TLdwru1CJASyHpMHc9uAW31o5veCL9EMnRqU94GuVgFmb5N1uQQUqMH9h6DKR1yce2RnubeHvGxpLM8ty65",
  "key30": "2T5vH3rvv1G7ebS59LYdUjZK1i7sqrNzgCZRBkLLobcwhVY1mh5xrD9w2b3MmEw1QjvfdScbRHKkmUqwiycrrdUx",
  "key31": "5w8JYwaueEJzuxq73NZYq1tC37MUTis3syWYSr9tEPSDxmA5deyAasWyQW24FGkj9HCcB2uZAoqucDvAuHN7czzw",
  "key32": "9T3TaDqXP26YM4wzdVb3Zai7oFf1fFuYeXjh5mirdmKeP9KPqccyfB6W113syE1jTX6d7N323hxaGWnQcn2Rj7W",
  "key33": "5EpQn2qUwD8Pm6toWA2ohWBTXs3FU86CHAKb6AqtonH17HWcvJS23QsEGKkmaBia6dUGoaiMTTfcYNnD9U4XJYGQ",
  "key34": "3UttTF26y5eCBm1BRJ2gJgC4BZ4bpa7VEXaf8g6hYUWfcsbFUvgY3YffKgft9gPxhaPQkxNE84AjXwm1vovA74yB",
  "key35": "3YEf7QQ8Tu3y6D5DcNVcUppfFmkYr73NUTnYE6wDXGUTbii1AwBhkUThjQdJrUSaSKC3x9GvLX4sQZPmjAZH8ar3",
  "key36": "6fwRw9NgRD7LpoojBGtAsZzyZ2EmNq8XcywdD4VEZoo7Nz9yEb9c468kWr92v6hYqWY8pmn8sfHNRR7dxkBi3Sk",
  "key37": "3K1DA5scz6iUYvzesjNy268XRAiKau6RnFi12Hy8CPRm5Fc63CyZgL9iEHVmKPJ3265rhVVfTRQiRy6BW6HhNmhm",
  "key38": "522rds7FqXSQN6W2apMiKXZ1myqRTRaz9F1WffkB6drZtVFZY8wuuuCHvp7wzRYgizHNArnvw2dA3oxoyVTX56ZP",
  "key39": "4oWdAqYNStFkLBMnpkYod7gLTjGHj76npyhFubJmmSoF2LMNSAuE73FS9ehP7MEcjmmNY5JWHKK8rezderx612qi",
  "key40": "543pv6SmZ6DVyLaBWThCMwLYaaYxvMYD78Z2JWjitFJa6VV9XjrtQbDr2xDQE6HPvdjpZHDFjNh7M2wBhuiibcmP",
  "key41": "3yho844792zYB67ZXzhrCLkfXkr2b2p14nV5BN19evsNGzV2Qk1bKU72uQg55SVdRp1Kc8Pg7Fa44PEXnaABJdKg",
  "key42": "4XmCuB5CLmvAR86qcuV32ZUCgNdgHbRnx2CfbtsztfvUwkDAMYSE8XmfUcTYqV7xt9WD42PWJCP7hDgicaVDqVuK",
  "key43": "bQvF5HVaSmY2Rw2Z8XnFnC2qj2YXwXuiFTdRU8sV7B4RBf5aXa3KDmb4hesrriYibFRT6WWxYZaGPDU9WpLXzs9"
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
