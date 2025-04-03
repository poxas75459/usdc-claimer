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
    "UYHc6opSavmuhv4mhHv4pZ1MRCQswGEjVacj2411Q83CF6mScXqWwjhJVGhtWisKDx8U6NP1iFmxjw5A5K1bWsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nKKm7pBYLu4T8X5WLNq6QwBJYxvY96kDuLVgz1rwo1Wg5iiS8afJZ5XNmsemRJ2r25Q5oFd5MGHVks4GGbPR4CR",
  "key1": "5rdFq4cnBdLQAwb7wrG5wozdr1emgyr4JaNinWhLvtKQHgDXZwpJcfgLjZsFFTWpUYANifUB8dYYdEsa872DL4yd",
  "key2": "52VSxLCrhcSCgxC7sPLwKAys8aXkQtuZWNMvEEBf6woaLcMB8SB4oBQLTmxseFTiDqgHCBEXUMwAF28JYGM9RAEZ",
  "key3": "3efUtkge9ppGhcWCqBqSTjuQdDnGEr5KsnVJLe8XbCDdoeW7q4raSkgdr97Xp3ErRZF3ek9WktMjFLGZ1nkZHC5V",
  "key4": "meosHEEPw3oDfWBNboKBzEeFAVYha6LTDHrHAx1naknvV5mqm4LoHob7rrRKwYVsZDSkpQXw2yrcfv2hMNLJMXM",
  "key5": "4gEayxkhFJeo3wFPLWMD73xDfpWZL5h4LQWwtB8bSTnVoFMUaHYREKgosP4vAGFGqGAprU75w76jNHfau6UekaNk",
  "key6": "3kqHTzwZmaKp2UYcmjKS7ippCYCxx68BiLUJjDAdVGBs6qhSkHjZU54FV5ctniuqvSKFhbmqXEtUi2MSuJRWbTGv",
  "key7": "5TG4CkpTBGVC2STtvDHVPZMqSMg6EpEa5Bzqhg7BQNp1yfyTHpe9VLjphrS451Rikttaej3MXwdSowTz5uWjk3pQ",
  "key8": "4iUYXFMq9JYnnGGzW5UH8bWpzr6CddZD2bDNufrm8XfWXqqDX4BEVQv2o1umjctbUpBx1b5QeqbDV1tvB34uTtpR",
  "key9": "5uKxBPN6dYcGhWF2rommugs75bfwjwCykwtYtAJvad1iGAWLERYUpaQDQute8iPrjVWRSqDqmuvHzfQZDR9Vtjoy",
  "key10": "EkmSZSdUTYnaVekSpg4ZkkLPhCLDVYJz33c4bxxK3Dx5ez4SW6WjLPrUxAQcqsjM1R7CH8ZKQZLuAfV9i2yGTEA",
  "key11": "2bcaCongBwS6nyoDzjC6rLbWe9kwfXTjsbQXMQNexbKJSYuNZhHentJk5KsQr1F8BbHmqeAmBWwzUSsk9j3BSEpW",
  "key12": "5N3wFALGPL4qPbXZzRWYnCLDSw4dPj5JDBxMvLBpgFb4QqyourH24CmdMRM2EMv2EKwzhgDPXekcmE1zYJxqV53j",
  "key13": "36RGamfMBJyCXUoz42NwDSj2cnjM6LfaUkBbr5neQkMM1CMmr4EgmZKVDrQV24JKC8hjonLhuZgbwJXqGdXhCjry",
  "key14": "26oJeMXhZadPGhstndN2dctoPC7jiwETxZDoaz7w25SJ8kMNJJewbZ1mbBVxvqfJndXEQG3eYVjDBEr9kcfZ3HfP",
  "key15": "3AERH3aAVGGhGuBY6swunBGpidrpBYYezcPzeseeuwJzxHn6sujyrMJ189scBSiAtgq1wqZLjCz2QLifsK9To92a",
  "key16": "3mHnEETeaT7hB9DcQQmZnEzc3diaztKxY2Hx5KWidaSWpMZFwqQeGVWSd3wraCcEgRy7rnEPyg845GUaxpD67U5X",
  "key17": "5zSmDpsMubKXdeP1jrzroGk6ALr8DjkVCJzCPxQac8FpNH9mLgh3kuE3YcBwv7Ve48LMXord9nAWrwCDUNFuPChj",
  "key18": "SoVLZKMZ426ccnzDFTohi6Yzwh7FqFutnPTAAvdHjDDpBV7zCehLTqLcQPJKWS6yiwca5YZwZVhtgBTQEFh5fGE",
  "key19": "3ei6posYNhsq2YWugdbPgZwTtm3wg2WBobBfbHckW4Yc9jYehdWBhpGiBYdxefsDi9WyUPGdjX1ZH9dWxGzjfxu8",
  "key20": "upuiVszhy9yT8tBpvuPKvWUZ6hT3VLTy8NMm7ySwojrVC2vKzPbv4upSs4VBnteu2RxSMz5J9WLBu4XC1Rn6F56",
  "key21": "2YprdG4u9Waq9bd8TUEg9Mn1FanGCpnVdHUoyH3epcNpMe5xXZLPQqQiCEb52XcKWsE3oqMQ1tGcDnoQvFc3F7Hy",
  "key22": "43VwhfraNQrnFscpVYMun5w4RVRhi2erAKBSk1GNYiQATZuWuhNsBXD3vNvtUt1G2qg6avy1hPcBrXLixTRpKBFy",
  "key23": "5NhJtkhjnLfFe73qXqcTx2uRKf8zzN61r7cAx28zQddqAchtCwrN3VCtCQ5tNYoYs8xw6GUD16YdyAD4cTwngFrh",
  "key24": "3Grho2sEw4oy8cJCkHJZ7ZhgVKxWZqNrSBGkqK9uBYBsdisAWDzoBDmTPtPxv6pAwLsRDDsdwyb2JC65THWBiWj6",
  "key25": "3RWgQzfnBRBxRJLk681pMYk5pmHjBnDXTVL4DyuxzS8dWac4Exo79kDd1ZQ5mSXgRfA1sxrXU6adfx4B9nkMpjhL",
  "key26": "24hkuWN49vtAPYsDisUbE3qnM5AFCJUQ1E3KeWw2w6yYwkkxpRgroa48hRgyHsZKJhBVPP6bZwz52DEP8hYAJwfU",
  "key27": "451LXMskM7bigpbLLXv65UF4BoU2fSRyt6k4nJDdcXpKSPXF3xAmzjtL8p1CLiuxRSz5Qw9WbmD5MbBiSNcFgbrf",
  "key28": "3mwExTtGYAhdeVbY4NdbhucQMefDHW5w3c3MCPWjGV3vXtd2BiPRM2Fqzr1Y7wMagPksRkSVHa3i8t22zFF2Mk1Q",
  "key29": "4Q7L9GMeJ7bNEGo78GNqVbf5FDeBfycFj6sntDWZJ9Aikpf3GyyZBZcVAvPq6sNJKKHoAncj4PC4XDnSsCBUAJ1Q",
  "key30": "5wykH96oGQHwbgMgpnGq5vSFFjen2cdx882bk7cQU2kDtVdnhmQ5KaYz17iXdzsjrSm8NTMDKD8BoKXo4qmEvJaw",
  "key31": "3pFAJ3MxDpfXyEKCb1XpjMEWAqJGr7YfCTrYY6La73QDwY5MnUbSe1RQ3kWKCRWUp8d9MBtxhieNK2m1dwquSAK6",
  "key32": "2jYoXteNaARvcAVp17WcDgWpNEBMCGtGCJP6Mi1iL75hpeLk63HqLKeUSdmwZ5BaoKNK1FQnQ2eqvEAcPH22cMPt",
  "key33": "3MEWMr52tMdtre6VfcExkFg7bA1ad5HiTqkRCLCeKtkPxV9uWje3MVNCe5dBr8Ydtn541nVJmDEjmQjfYe4DCx3i"
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
