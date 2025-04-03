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
    "37A7DG6rpRFyHbxGP1pxyuni2htP5LrF4wrYJJvDxKWRKpg65Tt5RoxMGjZZRC5nPQB4GYcJY6UdG5StJAGjKmTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4umV1Xq8yK7hH6ohkscbD1CCF8cZJKbpJ1ZZQpdy1pGxDcb3LBxvXmg8sRtSUjnbbHRNRdfcKHw7iWicgcV4Thc7",
  "key1": "hLTMR7ZNiPsh3GX5ueRjiiCDZ4JBhwa9YHuzA8qH2pKvPUiTeq2FoaZwQ1cmQe5dYHFpYpx2FYQXCmuipQYLsMz",
  "key2": "4kiJaaGY8FRG2SMpUQ7N6LDU9UZKkBuDf9RoMVreTRBjccVqTGXb3wFyo55ZPGqcg3G13jN9tAYe4FXL4JLSeRC6",
  "key3": "3RfHudxLzmzHvvN4i3XUzc9Rbs7eECCLN4hUEEYMGfAZyhJdxxdJkDVanxa53fd69pjjQjdbVSDD3dMiTyAyhVo6",
  "key4": "5UV7R3h9S5cWJiTHD7kRd5E24SY4qm1STg5KJp5WpphxH8i4Hs7eDhzECFWxBXZ59nWZ5BaSqt77DRpAj5RCfvKq",
  "key5": "5YFqnraS8awRM6XTMxHEzcRm3bDzLtWxKJBktTBcHB7ETMPSJKBKwUy4PQCAdLNfEbPYm6t3jEe3acX9Mrpq8wPJ",
  "key6": "T5Nwa3r31dEk76KK5iebmrfvBHbTLxM1yqDEn77jdPW4kkMdiH8SAtuKUuYjK4i8SEsYrzY6rSgbBEo8uGWrhR5",
  "key7": "1HMwHbRFWzk6NNfCQY1tT1fmCgMDzXBWyeNbHsug1FPR51UzQ36Vo1fph1oj2Wv5Lg2c8V7LgTjZBaR5RxEgGNj",
  "key8": "o1dhcWZ5CFbezpTpQcuNjTZjwSFez8h6gNrWfjyNKsbqbY56uC5YrPG9kV2sYDaKxBFPD6Dqr9as8bW3hzWqg5j",
  "key9": "ff7VM3nmhasQaGcVcZ7aRWN72KvP4Djw9qVVNo7MrCEuBm71xA96GRW3QABhmdBViAiz3URMuRhgx5qFp4Am5r7",
  "key10": "3CHeqYAkXd3ez7jLkp5swYUJKdM8SkoLpRYbTuVNPjun6XgBLTMiKFkNvufS2vD1MhMVcHWNf6uvx9sruHhiwBzq",
  "key11": "5TgNveLpmeqTiERMS8WsW8AnvR7TAvw7BUVEKEjT7orDdr882M9RqhxRXpsTnK5Kb3Rj3ATLuk5fgJqEsS27LT1F",
  "key12": "5jumd4zUFjPfxAscm6WZSqr9zumLMkaVxTB2rBqSTgzBcWwFMzq2fhAChFrtKC8mhjQXSpNhsQNmJZSSqVSESfnu",
  "key13": "25hsXQmVip5qtZrFpB4Vg6jQ89FJ55p7oMiYfG5q4SYgLNHFygEFfVBfGdWacDETq9Cac5PWE8ay2GLSzAi4kyu7",
  "key14": "3o5KptqmhiXUxKa2nnf9Qgfo265JQd7sU1mX8xpFgvrkJQUeeLjBVW5nefD1g3crL3Q3SH2JRtZ4h1XCJKgEsuos",
  "key15": "U5CgCyku37HrJiTsfQ5RJeZ55MECJdQhhW7MyvN4JA3TALitLxce6Nyn8ATckRUbuXVqxgfaQZiHh25RUSpV9sg",
  "key16": "62LF24sv5UsVnZcDNhkbrySLGANrLKTKPKejqgV2XNto53KfVx6XL4UrbRkEXLxNg67fG9jHXWuNwwZzxnWurnm5",
  "key17": "3YL4M4AgGvfiLiZGcLAGCaevU7LtW9hfWnSH3T9pYabycY8m1wEwkUgMbbVwesKwVAYt99S4toV7hM1jPJvRBovM",
  "key18": "2VMmDU8s92DJHr2enBVZEVKNC1g1gTgkWMDJa2NXobvGjV1jg4BT9gBDzYHGrqbowuh2DMQQbMuc795JnWHnutRU",
  "key19": "4q3sQGqqwfaogE6NzRZHh6UUxtQNNBaVh7jUkgHRMTCcYpuEdVTaVNuKrEfK7PQMqUCBcwmzsJ1PiE1wiuMXoFAa",
  "key20": "RKcnsNDQ7crMWH6s4pu6eb7ymGkiDNLpSwtcPXq6xG1wcfDoixLDifxLgekWLs1odpzrkuQ6D4NJFNJs9LdTRLM",
  "key21": "2wAh4BPESfViJsfiVegCr9XTbPH2YPxsqAuQBfDBcbbfQr1P39bYBZouCMvPveDcKgg5tGgZ5oPSWJbpVAKLoBPp",
  "key22": "3Zukxubqu1CsokEDgtDwZLeWVJzJm7J3JhWB7BFbHRyAHMP8ZgcYj2nyBE5cBCwa4JHyiqyTS9bwJub5mW2iqyEF",
  "key23": "ZCLkCEvGojSj9YJeVs8r5M8gR3dndpwZFAbAggRoe4WniVzyrJwAhJeozN5GVjuFa3t6E8gj6kNB9ye6sM25m9u",
  "key24": "3cVZHQ148fNCXBRvFkvTb5wEz3cGH256NZ9uWLBzG9u9ri5kzCxrdqdveNe1XDYBcYGZAk63oxU8zN6AwLGG923j",
  "key25": "2DujBdmhrTKLLC4p3gfXrSrBvqstzNngN8eGDWUZVmiHVRR6C8dE7WPL57eqKpc6UZTDA6Zg5RnRMx9kQdZ8GT7B",
  "key26": "48KkzK7sAgnQrufPKGjsesLcFboWHYY64bD42tZ75HTuAF4ZptfcdL9pmiPuQiHmJsXKcBgsj7VpzHwQK9VS7UG7",
  "key27": "2185yqXFG9hZFaSyALP6BdFEk7WDYtvfb1ksjthr91amhNMehWSkZzXKWLCBxF2n9jAXWXPCrLxQsNaUYd1RWaVk",
  "key28": "35Xv5RwkzVToNv3zxKR8ZTfADHRsyUG8ib3PVgxdBVhApHU8xPoEGcH2Y4ERgPCdpAEE1YKHc9St7HHLXKz2Rq6Z",
  "key29": "N7Aaat8DXUt5JDhQxSw5St8JNH3F1kBQz3WBZBC2MNkXoWmKrtYrMCdhtrLnnK6Vrv9JA7xqfWWBLCvqZNNVvL1",
  "key30": "2d7Ch7yEVU1Fn8DNNFvNzBVNPXWiQev2po9g61eHJbXhRyhEphS5aWPkyqRinnTxiCTcQ4MWxVjQ3itE7v4u5uhv",
  "key31": "2hLtFYvP5qWgtBnchHdYVH7GUm1Ct8pm4VL5MKz9CfY6Bx6DATEL4VjqHebiyrM6CbhBEy5e4BVnbEG5Nwvt6kxR"
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
