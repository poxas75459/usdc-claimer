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
    "4PVY3S5KkjV3u9Sw4hTkiFsnVJ4Zy7tJw4Hg6MEcdhfyKrva7DH7Lz5cwQ4WRbZrxc9Eeig5HxiiKSQXtHycrHpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DViCmPDpVeS6FrT1DKJJfWddzQoqBVZ3dWFSSRPrQSM2TMscoYC1kvWtaF5AMJhN8BEww6qzKKhWVERksBabh61",
  "key1": "4MYhFydxtBAGSrFxtqq45fPqi6kSE8GuyiKLD14TiuCR5qm9LsGvbRer3ELFpvoDRWrcd5jTAkM7HnBjHHGuQy8d",
  "key2": "57cVVxNYvR4NZRFaeTCPBzjsQGb8tmMkrqS4EiMXY5SZtEGBZMr6xxNGtq4qzhir5m7TdJ6kaLPVypfB38nudiEx",
  "key3": "5czgbd37zDjnpZvQgoqH2zBBJGUvPmUzQPYHYhft12MaEEtHNpLH1GCFv38qVYFSn4tX7qXnKHo4cYhZdiTLadjc",
  "key4": "3NEWFJzxggtfyFMTq4oiuhSkR6A789d9pSyYCGaU6Ag1kx8ABMHMqsuMTjZMRVwqEcyTE9ukv4Db2teRnNtENS7k",
  "key5": "4AdSQP7eHQwRxQxYJsFS9CCasXazTtD8bdZxkuAz3PSpqw4U6UFaEUztR6DBea3dPm7oQPTVVgB75C1uveyexjDf",
  "key6": "4EoFB1vwuxb6DYX2SmbUgkNgnTt8rfpZ8o3xJygQJAuToQNyqwfGnv3VWqY5Aqj58CUeqcp2zfYLHgEoXrfMEMa5",
  "key7": "cccvHRGnHiJuR1GvwwtFCFcc9wQxB899EeNHJKrNTMS3KarCg8dnGJ6C1HjEdFgaB4SSw7m2B4E2DuC2PRNnfYy",
  "key8": "5gMcD6Nrm5o5C5YjrJanUtQGK1A3hJtjP1Kn8vvjj2YyXBzzVCpxvQ1gW3t9mYYYvXFDN29UcKwsP6dqzjNtPPRb",
  "key9": "3SXk47uWa9UyjX4Q2zR4uXXhFJde6qVK69EhD7b3KJ6jFxFVvjTxvrU4k3DtDahtKsXwFjr1sjcBv1ETTJKCbGjh",
  "key10": "4cmfTkmFEEvuTjuQVCm1qxUzuyyAqTvunjyxhcxJW3zjdYTJY6UiL2YAoV3JwkpXrag9kyWjvD6vvVDMc7u1Un8D",
  "key11": "sxsfx9h3PxAKf6obLcWEcU93WeVWUvJ6zSC1T9PX1rg3onPPCZCpg7uJqJ5sRiqmQCebMvUdofmxN7p2cnk9YcA",
  "key12": "4M33izpaqr2sdwu8w7hsyG31RzQUS5EozrNUgjzUZz7vVGjACaW5FigRTcepVBiK2cdt5izQGxXeVYMwegmAGaxx",
  "key13": "2Yabi4cf492WjTtw1Hk44b77bcMW2McbjoFAvM9C45cbxQVVniUTANxzBk4waRtwpHGoiSeLCLEHwpHZk3UXsPyt",
  "key14": "39sv913yPG7oAVnAVYmmHEbpira8XjCDqQkJPJMFz5T3PNntitNBeYTPFJ5YQo7csM3oezn1USyVzY5nqU43ybXw",
  "key15": "4xVTeWGUnFcLdufLHCSdiDLNmmcLAy9jDaKjZCKQJUVBwHdtKrTtytjvnJSuVi7C3tC3vfrboa9n9j9oT2WzY217",
  "key16": "5RLd5bmcaPstcpFQvrhJMfYgWAHedBGuDyBMbkCZiuJancpwAC8fUAeuo9UR5hwDLCo7r4N2LkPzYExvUxqRxMJM",
  "key17": "5SPzy2Ywc79tBYHgV34UdBqD337dKpMRMEenDSNJ3RQwLbU8bNiXt7esWFCC8xYERxJ6EzigCuJMcJX3zAhrqpJX",
  "key18": "RwvRQvybJCu9vqR92AhLpUSFvbMBbZAqPYXdrM3rajQ2u78Y7nsRNAkzvWWPGxGWuLmxfugTQfrPNfUbZgZzU4t",
  "key19": "NJ9D4s81F919P58kMaKsbYSwYG5hVD25feD14ehoJaEnKYXsbXmpbWmEULeQGJWHxuU58zSxJhpxKyvjyw2sMkw",
  "key20": "4R2cpS6kbvytg4aSNruB6dZuDr7dGM8nRKpdyvAiu6JTJBN5U5qEabUEE37fAyDGCoxoxdmy7wfXKS1ghefYfj1K",
  "key21": "357cJ9tiLo5vNTfK2CRXKvsaToLryi5FZ5xrWspGyKcFbCTmmirEME7vthwA7wKLz3g83eCLtLipBMsANZgBAdVc",
  "key22": "253pAyJhDCj3LmVSEihge9WeWAYLRMy2hqt5B5TM1kot3MQLuwJruVkDWH5VYsVH2ZoMfSk1bCsRRzcWeJSZq4Qj",
  "key23": "3EcqwcaRHnuQkk5W8j82uV98FMd2u5h2saGV4zGZ9DTXAaztH68s6uhg8WoxWiSmq5GCFwwsTnxG79tcccC3ZaBr",
  "key24": "zW7mCyY3fj1CeWqz27tANn2PGbJ7RrGSensuBkt7D9KyRzM4Ntqfob5WP1bFmhWXntzTbzC5ubS38mnJPyZzPKA",
  "key25": "5BTehNes89hfwEVGAMN745gCCzQUtKNnGKmo6WT7Pb1KNHAJnhWuh4XKRvj2oLRQ5xDs2RXjheM9BYcT3v826kHx",
  "key26": "4ZY2rP8tehcz5PMWqHBxWG9nDp3oe5BjVpt9w2F17pbbGP1WFEhQXvqHg41iTrYYn9sNMM7TD1Z8WSfd9y8auFtA",
  "key27": "5kzLGEzTsgeBURhkKDzWjRWg2b5EQHF2irAmkL2GGhXzkLZiSqgGm9zR6jKusKVeprvyPF4o77sAggq6fH4RN8je",
  "key28": "5v37PBvoPudD4vEWBuyTJRwPYAKpWKWzDSxi85YEMsUwBpFRCR1FFpJsSk8tHKar1LQweKvttrvziFoPigtVdHSA",
  "key29": "41f1J7nNK9KUUMLHjuwiVzYdXdV8t9cTTbmT7udUdXhN3uYZuWHY1PNhrxLDE7gN9tUREnAkBKdzXUvE3RPUiNZb",
  "key30": "xJa5WgieQsbyiG1GGqfKZYmzKeHuPA29K82gBHGRXZhLnTjPybwnwHw9UDwbSMBvTgAktz141fYAzgggnrByrnD",
  "key31": "2Xkan4HX7EZMy2RJrfEr6y3HubpXDPbEq82CkW9cAppWNf4qwsNkeFPUVxmUj9UEJV6EWpk5N4YBP9r1eZsgR3Ey",
  "key32": "UG6txc1KGX3DtQCEqEQYU98iBMz8kNAJUdLdHX1vso9yPj5LTyEYmGDvnVQDgDcGKbrHotrefs2bsnxQFmkGZMR",
  "key33": "4sJN9gpgthfaaRQxdECQViBuM3LhYgRRuKkh4jCF5F5T2zk1ePKJZQzqZMoEwhbu4wgUAJYsE5DeiCFZhUcqjZTF",
  "key34": "4w2JeHyA7ohwEYWE3JsGUzihEnSw6EsWCLQfABeU3R8ap2wpS9VA5cNTUmKVvdxZh3Gz11TtvU66P9S44weYxzMq",
  "key35": "epvkPYCWqFbbbeNHAcn5qmV6iEFyk8FrAXRYnSVUEArJqjGvcB5GpHAwXiqpD4VT58vrFe4bjhE6NMD7VcQ4bkt",
  "key36": "455hzrqS7xun1jWJzU7Uyqg9jyEZ15TAoApWq9NfkS8Ddrr4gySEoCC8cstf1GLX4UAW1mJdpGn75TS5QEpLvtF9",
  "key37": "5nYbjju2MSRSvqwwNHPmcgsKRnFZAde3x8M6MZzBHkDRvpB8gkUK9GfoU4YRA17FQyELX6pDqieYKbLJeAnr1smu",
  "key38": "4WpK8dehmGQZsbsqpXgk3rmnZVGVmSpfKyrsnczvcTLBASJYmJmALJrEfsJqSkFDAevtfVWv92Yrq1mb9yiAQhg1",
  "key39": "RgPy75BbZecyoJ5yCmYS4XT7ZpSXbgvhm9G8oF7kcMUxrq1LS8k78G5a4jrafbah38gf5HgwLPgaBmGV5vxg7jj",
  "key40": "h8HzYApWaPsZbTeKd5cbvHmLUc4Cs5m2RnnkqmFpmkNiLERua2HAwKtfgrQoYN18eDFicwUoFzEMeoEZUXA3san"
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
