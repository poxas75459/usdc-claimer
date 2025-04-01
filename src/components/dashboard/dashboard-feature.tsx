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
    "Qd3XXawYcub9Ab4vdAxMkgEC4QxFU3UZ8F4jma2Q7owW9QBGgmPSKtQhFQr4SH7HvYcjzq6PgR87VaebxbmRRF5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25kZf538NdANK6yKd9JncFahwErp3rJenm4dHuq7A5hpFxvkUTijaH3Z9156V122c6MHzqyJKP1AZFvNACfJAPjM",
  "key1": "4R3C68PPkEDYzNf1wqcbJ3F6qagUXWvWxSvrgoSRsCoR5eBYBmN8Tcp8Brd5YeLqqJSuKdFzSmtRDPiqM9jkaxv6",
  "key2": "4NaUHNVHA2cN3H8gNaD5mUH4edJYXBdn5tNgeCC6hSEVrD2cQ4nEM3KmzbQHVu3dXQHz8BPSNDGQQ18TTUF2G4AB",
  "key3": "4ZjxdcJXjqpv8MHPMLBDy3cdPBXSuTrhqrrgXhb2b5ySNPeekGJP72J9MJWya123sReiQq8bwK6fGvC3YpBVun6S",
  "key4": "j337rawywA7dHuBAzqC2y5Nq61YTw7WUXUEuDKK6Ew1JTCT8NmQEsxsRMnG2np1V4oRuFrwhvmgQwoRSvRh2anR",
  "key5": "4FNcShazZivXm2LvuSL4AGcmjcU3aPV5az9jA7bLk6AspMpFMSDKBXtH6EXqMFyLxk2VdP2GM1ZW5b86P5MHJK4u",
  "key6": "3cGSrc6gAV5YNPgpDJJUQeoomHiXurgvaWoR1GpT5ts7qq1Us7JcW18pogEgA78Qg3W75nSczr8aicZvnS4FvjDK",
  "key7": "52EemsK65B8eXLeu9jaH83BfS3DsA9rYcdjAQMttMdvK76ajFCbVoPp19C8Lf1bmJxym836WkPbHirAzyKjd8eqj",
  "key8": "4ZAnhr4iAxPTLHk56Q7iSuWfdzHPB8VX7Pp54ygSctdGnytvd5r6T9YFDMpWbhqrgvuQYGH4ByEmp4pq1zi581vB",
  "key9": "YdYfwYnFUHoZwsD3WTcwkbGqcXENdpMjWczxQPTcL85xmcuTBNi41eQTqGcUcWKTbmRbFp5utmH8vot8U1fofZH",
  "key10": "tEyTLYcmTG7wr8pFTTxdykN774EnkvynfAHFnC2BuKrqW1MBucgE6Uf8sP8DBiKxvUWszdygYJhdWX4yvRF7thP",
  "key11": "5SYb7acWZARz4cqpRjE94iC2aPRXP7ao5RE5F9s1ESSfqmGg9Bcbeahu4NvaPiyfhugSApERzGJwDKgGtqQFwPcH",
  "key12": "5boabVrmWpk3RrWgF83azKYAoTZiwWRQJnxqZZi8wJqMNdU1LLHK1FbtndZPNQigKZnFq2EN2L3xB8c8wRCAmtgD",
  "key13": "ECuerEKGhGirVGTiFn9REbRTYBv343j1XaQe1sKXjTHEmsrR4d6WEwLM7ttnMyzozCXMaQ1nwFdTARiXjy4r7AV",
  "key14": "3xicpmFf7XKsoYP5jZMwjCTdrLQ8QCK2G8zcpnFJiqKF8izHZH2WiW2BG9jjZddUHypcaLEp3eNKZAt25rXX7yZY",
  "key15": "2Ya3MzDcKB73UnNa3syXFJwZdWm8dv91zFv4VUEZhmFskxWhNkadBRLs9Vvyo6pUaTDdWcbE2Ew3qNWi4VsTVmGX",
  "key16": "5TtirfTmjtDqdjMae9EJRvxPWKjz7RyBUprYkjyWGtbNeN7UL2nT36gH8RUrccAJA1UhM9T8CqEakwZoWrwggCBa",
  "key17": "4XrZ6YkH9z5F5bJ1WDodkhnjUJfzmVEvLVevfHg892qv3T14MpVrtL3biuiJaXThqo3JLTCh5kqyuCj7FPC1qjNs",
  "key18": "4adUv9WFCUzEQqbj8REwS1vaWz6NE6fDt4HevKQiYpcC5aoJ3ekUtBZs4MJuc1vVnG69v9pZ88DzzMnsBX3J1kKi",
  "key19": "4zozAVSW347Qt1JqKygVJG4XyoxQ8oGDxkm3BjxUNfuXkY8M8h3bEVj2td12Sqrwc5W4sUqTDCZiDyQ48poRaj7A",
  "key20": "b9zPNAtkP3XvMBbhwLBwA3X54yLjCo9gir4BNS5FmEyLgo8RSqsQNiz9TXocsRQrbYLETMqUDK3oquQRtG7Xrco",
  "key21": "sDMaczdmQyNtnxdCTYuNXWJHE5wZLJH4onHh5hGvA4jT3hQFUtanqLzK5TMTvwcA7hVup2AsmEMUzmU7p9J7NGQ",
  "key22": "2LRCip4LafBLdpvhxkywvSUYwVtvLwrYMMnAhaqFDMxnf6apD3fMnkYMfMorujdoWuaLgaedtC6EFUPxDVssFqh",
  "key23": "nHZsXxYBv7rnaBPQa3ctFD1Z5fBrmBz6HbSFWWmcopyia9r4XpwRbqy8Aq9C8WkPLrZ5yeYxFPqxqUYtf2fpYrW",
  "key24": "3N9nHBCPQ5uRJmG5kB2FjxgyyhwbqaLB5pyxbdTuBeFQRs7iUiPADyQVfb65CSFxRwe8cgrecWCW9oPGTbbvLyVm",
  "key25": "3fjh3QxmkvjJdEMytyYVG3tbqMWM88NgEB79es1oWG15ZH8fthTp7YUtHNAK7kxdwwbn4YDd7nGpvuvFeSBEUXnA",
  "key26": "4KMiowSZoy79WfHT4UarZzwzSUJFY9kVEb2w5mX3k7GWwYrXJ77rYFjj9tcYEue6a7VpigwSg2ZqYYoYd9oVn3P4",
  "key27": "9k23gGGpZZVmFWHwf6u7JX8xuM8aFtk2CWuaM1oU55LpPMGWhfcyPgiHmkjhE6eaGcrnsX65bE1cEw9UyJ2itxR",
  "key28": "4mNreCqAEcpq6bZzV84132JC2NPfVUGWhwMfpPqsFjMrvW3CT6YTrLKyFdhQBBGbwuTxGkDDyF9co6cwhxCdtipt",
  "key29": "2UjNBaqHwrjuCYepDiicSyaDarcPzbAYecUUGiwpXkpH7p2pjyjv4fqYnQZobcLWx3DUqPYWxaZgdNo8BDK5UjhA",
  "key30": "4Z9T6nDkcSbRcYfZrQcqN5u1nGygQ792CHLwbn2AvkfjzgPmVpP7AX7Rg1K8rhFjqiwS5AKMbKsDu8Ubu5VPPNPB",
  "key31": "3w8Ntc2njMruz1T1DZGpavjy97QeWbdLmPaBG5Yfv18Pksc1QRdYMMgQCXfekTE5wVE5oEB7xqb2FEg98G3bKmxx",
  "key32": "5vfNQYQjmfTPbXBhz21hHYa5FkAo9ACzc8RNF8tHQJ8hhSz7BEg4jjT6epncXCHt5zhXafbUoihaJ2iJ37uu9WbF",
  "key33": "2mdH3SfMg2Hm1MYgNjwQ5KZHb6gEj4MVMfxwHdAb57Yy3ZWZWP2EBJViy9P5d6wZntcrJzoWEfRsBYmirTAHjAmQ",
  "key34": "qEZvYhRCs56vRHWmLtUQtUz7YwFousPDVVQyBDeEVEHtNae9Ymw4PnGwCEEVnohHfucP4EpnB58MMYkpsReM3n8",
  "key35": "43RMnjZscusGWpPudtLieh9ws8KjgT8UDsvQnVPT11W8AuWwCCkQEjXac5TBCJoGmNfs4p2tYFMVuRqvSQmTsgXA",
  "key36": "4s7mspGs9GH9SGytg8wnXbMTGRmNsobZBiB4BChtoQ6nkQNuRPjktcBHCcsssFxQjy4TdNKsAc7rxHpLL7hn9ePq",
  "key37": "8RyzHURyvt8cSByYMDs5wUahagdVvPMkzV9ibftPCqDKQezTxBGp2WkdKXoRNkjkmRnaHctumz2v6qMMrTKtTXB",
  "key38": "595QJU3to7gn62RGxmvsD3i9AwawNoS1Dpr6vow1TS6UfC42saqc3nsrKXG5RfEmDbHQHPLjJvo2rTgAqENbSoSY",
  "key39": "5ZebYydqJzKKV8kDy1agUhWoJc2beAp2LGDZpfZoVpzrYZAR9jiRh3Q6s1XYnjZG7wvbhvuhEXJ6FQfFHVYtExGf",
  "key40": "3EnUvDNmLzpTPs8XmuFqBxryKFVSCkSSgJe5U5ts7aTZUqKTcwsovEmiJfGcauNsTG9wCELvTK8652FGh7DJXNYC",
  "key41": "2f4hh2CTYdrzSsmmj8nXrVLzCnbQddA7TnCXNDh75JPHCgUBGjPWUw36mCuHYS4oXNBcC872HTaf5vK5nDBAyroo",
  "key42": "3KysyGxbwDwwxznSZ1cnBqDpSrWA74At7umDzSp5iMcvXEnUheubedQrJM37biaLTUHD1SkNuje348GrJLtQJmsk",
  "key43": "49EYuUoodJxpqWMWR56g8DweubifyiSyY5ENrsFwSZQwbpi8YPByQwvdSp5ztcoLgNfRqKtMc9ZtZ7KmbyVfGriv",
  "key44": "4kjvUFAgXgHM22AVsaonNvEiRSxpHHayEx6QPrwrVPVyHjEa2hWwici2g2zRbMWfuwmgKU4BC6JBE7yvwkJs3Jg8",
  "key45": "2iLSsupssuAPonU8T2E2H7QxEgQzdVywv2ZDLjMAauzD2GdrpMet9tWzTqBdZSwk9UJ7pDFq4ubfk4uF2zddPcHu"
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
