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
    "E27JM1gYWQdFdEB9499bX9ZLwkRcKjAXKj3nPNaPvJ6gaRRaB7H2pzrQQzstPspqaBAFZi9BKSJbR9LpVYdGb7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sddzgNZFEv6Nx2opfEk5oLSLjWrTpnKimBWULNMzM1NstvjBv3WfX1wzYFrVMQvFFhTe2sbqdn51Nj6mVfgKQ4c",
  "key1": "3mXTKLTgy5T1PjV4J8ZrmL7u7FvkibvntEAQa9GbsaDGQQmyrS5jbwHXzFLBHZHAWj7NSW9pa8sNmiPipyG65Ab",
  "key2": "2nn6qm4w9B4J7HxuTqKvjsVrpjS4Yc8WpabmfMJCCDZ7dBK7wc12JSJFsSgybDyPKgNLhyeyT6852KnxPsURGBVV",
  "key3": "4au5Hi46spUmwU5B6quM2yCCepaykHQo2Xhyg7KQX1BMBErY6CrtfNEfqo4ksU4wytg4QQz5Snp2bh1A8idxxS1b",
  "key4": "46jvm625ZA4dDSN5BjBokxapYcDi1xcGXzRNrD6y9kxbqFkzpPkvbwnUdcqct8wMTBQded5e1huoywG2vwbAfGkF",
  "key5": "3uKKLYQUmkBv5ebpW6wEL1Anw2WP3Fgy1WoDmgAXKAThc3bFD2oYarXMw6H8DZVevtpWvid9KYADhaTmWRAvi3am",
  "key6": "EjiveGqNs56BDyACYkyEpt3xu1WdZk47m59wxwurtBko6kZ8AebmxrR1zuefKXfMRHKafGDpTSDav9MsnKWumpH",
  "key7": "4TYfBFat3hM4rtyhwRHa5xKwerP4Eo6FktMwwGLG2hVWybR4mpb4iZt6FUhnqhrzxmYMC2LtJdVyTCoXwscTDWT6",
  "key8": "5RNvsighy5jCEPxbrd7AYDj1M1xQfPHoXyouG9RijNpVEj4fU1E5vhpTGyaj8KkFfPAX828g3syL5AV4U7AvtykL",
  "key9": "3SHgfw11v9aZDWG2cqGcokVBJbyuBW3gtH175tCsskVufwSFUnDxJpoFdmzxgTwgLPL3X1fFVCyGeWCBaf49iAXN",
  "key10": "3r1eLjLdJoSeBYvNwRBPoHrbBPyiaAR3vVQsxYNUiv9zTEH9a2w4HWdfnSYTw2XVRWZwDHsonVJvc6acHQC2Ljwu",
  "key11": "NAKWemevDtGTXHZWmE2TX5HkzsLws54Adu5CJbdqMXVdVejouC9Ng8tNb55TUYQvWkfRFQ39qLKihxMZBKuom1L",
  "key12": "5yGDaE94d6B3FQpBACGLWRfrEANksiv1TA9FB8ouCoqmwUw8HeqT8XPJfG1bi5eMPCG958HEwGk2D615umqcEt9C",
  "key13": "41a7n1jCKWh9FtZH6JZkaL5bfp3j4KN93fLRU8ydv3N7g3KizdmHH8zRe3DnAM2jGUBNvYZsT1Bky7Tb1Fh5k1ng",
  "key14": "3FnwPy5HGEjRNqtZZDkamkzxjvZVCRAkD9QVWXjmkHDbABq3QWyWDGncR6fXNSfzmRUJcq8Zt1BLcWDoz6ttLcyn",
  "key15": "5Ew7JUDna7xCWSsCMG9QoB172vXkgXtx3Nk4eSo6fEECTVFwuy7ao7YnQ898LDKphnpErSpL83cocN2NaSKzNsh9",
  "key16": "26A1uUumQUrEVDGNn7Xsj7QqJfQ217EJV55jwmPabsiTgL4Sv2BHeLkpvqiavcMB9U4B9AbkDUc24YM9AVhEhx4j",
  "key17": "5jjDfpywo69v2ocpEdmWyGfPwhJQQiJjZMdbDe1t1ne3HWT4px6vtQmNUvrek4QAHbnzYGoimXQoxeSwhwPiq5gF",
  "key18": "5TnLwBFyVXguf1E4QypEWqfd13F4E9uap4FJRN9AferhBtPce4ajLP9QSL6NwJrYYxnRmEcKVepRB5ydkjmA7uXA",
  "key19": "5zhtuakwHPYAKcZxbN67sz548x9P5woXUrjfbrHJSfUG8YfXZ5VQpfJNNawdn8LXWtKSXTXrDwrmJ2MqYXfidKLP",
  "key20": "3VKBV2rnH1MF1RUNBgJSF9vpFrTs2B1fsMQJq5cKzjZEqSsnuKRNUm1Eu25aHvst5Gzqr2PVLtguEjV4VWpcLWQ5",
  "key21": "R8HN2jDEsAvfuXGPtpn2ETkdwESjnkYLa1cbKngwdSgBzSkszjwMwro3hDB9drY5rghmYiA2MsboMPEKTKPvSi8",
  "key22": "2HVCRVzfoWvA61TDjkxiuHe8BYf2MPsqG6VkrLyTyCQmuA2TSgZQ6hkm9GkaavEp19fjhduACGb5FyTsJkYixYXL",
  "key23": "4yJkZE5ZaChjfjd22FCePzHnGckzEhFfYKrhXf63UvLmDhYLZbKBY7EKV4rNG9bsadPLpWctLenHfguT7gpiizuQ",
  "key24": "5UKGKzAa4KQ9uEpPHbM2M6YYmgCJZUfmBnMgCnitcxrsgjUheMVBUncnCxHb5DzJq1qz7LxDdmojPXbDzh2HaKRV",
  "key25": "xYXeRg3tJyXq5mEjcHbqXM34SQSNVqYYPHZaim1jmB2p7qttdVtPLbi3dhwXc2VYuK92Cpq1vFxbcN1MiWDGPUQ",
  "key26": "4WAN881WGnb8MWGFd6RhS8mo8BfRPpBABHAmHLMhDKYQsTz6iN4BvcbeuzWb4CkGxDrmf1o5FsXK2nbH7tUMQX7t"
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
