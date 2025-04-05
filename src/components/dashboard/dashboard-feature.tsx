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
    "39bYXias2W3SWT96GLcGmhbYqMf1gvzoaC1F4jn1WRkHzj2svTBRxfaUe8Awqjh3eGRez9NrWm5s8Mi5pDP7E9RP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "it2Nu336MJEZcxp9PC4jcjrtMMASVm13ipyG8UCTgaXrZdcp8GyRLEhQZdwi6n6dHPZ5e7KtzJTvABQEU81WyfA",
  "key1": "3dJkU3BddPcRQE4oUyHfjg9fQLif4MMKGoofzRBUvAaPKdfEUrPyonUUFG5F9pisHXKxH6Lubj54br52R3hpeszG",
  "key2": "MK2evk9jGLjkMTk5W8rvpYiR9VvZGB9naTaguvPogKKFdWg433v6iaQWmZk72Xb1mjNuvNsZ2xEPUuYmEgPRRS9",
  "key3": "3WbQGwNBJ4Xv3vcMFoCn2otMemkPPq9ghKTnYc5DDLsLcRb6A2CvSRLeZDApGgYjZ1o6MLgWQkUBW7k6XEtc6EXd",
  "key4": "iSJJc4qUmn7MRzyKrur14F9BWhnFYENC5ni4k4MJwXiVeZDgJ9U9v57UrNn6oTQY3zvfh96pk2p7haKuVFuQnfN",
  "key5": "4xJAuXSgeMpnDFgiiDgtv6bPUTH3oso52K8WGvXZ2mb4YsTh3UUEpgiq2XaHZbDBz9pbNybUjhUbspwoqDXns1yY",
  "key6": "2fw6STEsn3iWchNK67jjB16FaTrUfjXuybN4dpyFCqTCys3cC3apWphZ5roEXngYraDTLrGrqyKGdTaabgDovMiN",
  "key7": "36wjfo1cjU61jHk5eZoPijipyqBm7HGGmZvoWs7YkxJuUGcHrry7kM2mr3HsanDdZiApX2ycicbgQg2itPjgg4rd",
  "key8": "42VUC73bNb8xLcVKdcdPLm4mczFg4nQaiwRjZ95rkB2nLQJZZnaD5ttSGYMtTCX1id8bhdRcKmpPDf77rzWsiN6m",
  "key9": "4UyBn6FCGV1tbig1UXGUns2AoLF3VidYiRotKiko9NkJxadb1vBYJ7Wg4LuidjNtcPKdwzVF9BdQ1MjsA8Eq6BoD",
  "key10": "4NegQshyTEastviFfXpccx8wTfsqyifEbPk8QysBsJ9StXtoMGe4swcAdVd1nhgKT4j29xXNbHxfvLEtT4LfPrP6",
  "key11": "5EbxGfQXczMAyxjWQ8HyKBc5WkKA6hdZyr6ofdJJQ3AGkgNSEHeywC5mpSRS96a5o5CsFG9wibBU5SnrykJNngdC",
  "key12": "5PdRBfSLMUQXqeBjYRdfeVHATfH1QJfBgWHbs7zwWiTLsda1HWNGr3J2rfWgyEypPJdLQ6xFDuf64k7cz7KJQWkg",
  "key13": "4bakPQUk4Jwkhw4VTA6Yx2EwVkTv9kgsMajXSoG9iWXbVC8wdC8PP7epnTLCfZx4Z2oedhZiaYJfku3Sa4rYsvQW",
  "key14": "RxumeLpYpTPb5PiQuWz5WvVsncyAMJUfPv9uhkqYcbG9vgnwky3ST2xATy7v9tdmPajXPK2JFN52b3Z9g4MTAei",
  "key15": "4s14zboW3avUYovVtYE8rNUpqkGg6FMQv3Gg6Ak8rLhqMn1Q4V3fLkCvvVgAUmVpH6yX2ScLSKPvSJ3PgTUG1Gu9",
  "key16": "J39MA9SB5tuCNeTKmXGM2nCZ4C1e8xmArJUp6Cv15cA59ULak9vKHEXEmtq45uk1PVA3ZeSEU6uGg7Tf3iWKncd",
  "key17": "5w5nouQUdES3vA7DrddpPgNV3W8aeZ9vPN7z9eGyYn4iJKU7Qn1eNYK77h7bwpxuNm5S6nyLDvcmXsHa1ouxgxQX",
  "key18": "38nKEqyPbdEdNa5MK8t44ihzge9av4NAtjpqih2pR7FKBrvVj5FFHBBURJvMsxUcqACnbxz1sR4G5SxdRHH3uHVx",
  "key19": "3eRQtcyUp3P8R5Y26FP14SnX1bKCeAi1CD6N5JF2gnpUatmcKTfyZuoZeA8ksmkpZcSn3JyifWJhNWfatzYT7552",
  "key20": "3qMWVHVvAsrDhgCKVVL6dsmhPsZMzq871AdUTazciHeKBMuDwWXHTqH1h1avJ5kiqt6SH9Nz6wNr9bU57W2Ykbvw",
  "key21": "5AzTkfGGQLH4b8DsUKto5hqhWCGu4sqBWsHmYx1UesKBS3TaLn1pJrJxTC672k7RBJfLavaM93XZhNs54P5qjTng",
  "key22": "2bnhhLiVmNyTnucnf7GXzuhZM2nJq8rf5YD32TMu5vrirDFRd3n1W17ByK8C5tYFf5C3LcnBfztBtGpLZzKvcMCD",
  "key23": "5fV7z5TFxa3NMDsiFhFitHyw8XcqaQdmPQeDGgNCigWSebgbJTdHkC9s6VyDahF4o4vW8bTHVV2SxHMTmPsPf1Vd",
  "key24": "3BZVnsTKxhJAooQCGn3wwepdbDmSrsoPxNcYrbfYS9WWDhXYub9jo2CzMEwegx26HrVA8ysikBWQECUfrjvpyMKT",
  "key25": "5ZNXWN7oxGSNmc6gnMiX1JVMMnU6R1pLih9YaXQZUZ1KK2t6H4zHwFDwt9iYqVyug6woiRdoBRVuFyJuxKkwWwa1",
  "key26": "3azaN9mBuVxobNWiTdQNgSDL4uGjcvyxoHoyjmBEEg2TUsm4eA1X2Kwe4xCCtRysyHbqeiWePkdsoiLNSZgGYLJK",
  "key27": "3nnRXDET5fGsuBjdxWvc5wzcXus6cpUcpvDsfqLLJefz2NG2z3MQqz2y8wjjSiacF5z6jb9YQxC7MvsupTsMYSLf",
  "key28": "3kNwV8TCcCsqFMd8WMyi9jQGnhgB9zgu6Kychkc1SunFnYstW6wJHYJfmd4fpQf4JUfjxYiqomiyfwjCHmirxfv3",
  "key29": "3ezAJ24FWTctpG27t5oFAx2K6nWrjtqDeQP6gx66c76GWLmukvsZFU9aC6HpCX7piUyx3TvCKegZHw3VuAMFYZwG",
  "key30": "FgA1ZKeqw56ZxKHygiwHXzRAbn9smLLT6FM5hoYpzDZZSyUmALtqGpzzaVKZyVRXvRX2AqZMbCrqhA6nW2FYWGj",
  "key31": "2rNrBQ12mCbrGRMBL8tjE4QFWfJM3ADPiuTNJXQpfQJfc1ncjN8qBF9yUSc9izk2qXYbQHp34jaXoA8Tbhop6Rj3",
  "key32": "37SpQaitcdHeFhRKiLinJauazkSjHgjLf3Gvhh2ifqDDg8q3QfQgWnvjZG91CHPDGBaHduuUyf4B1KeuUgvtSwwZ",
  "key33": "4KKDcCZrmjYAaC3SmEgD5hABqEsF3MjeksvASjgtYnPXiHyfNyWz8v6HTjvYH5ZctozJnumWQyqUE6nZpRXnqvgN",
  "key34": "2qTcfcFRpqrPnDZFR28ipicfjsaZEcfaDHpUfimsio6qA5KuPcWnJ3XJSyQnEQhjvtGT4k8EW9NweDNCgWNLNM2E",
  "key35": "4wAq9ypGzQkJ3rSgh2AffvGCVCd6eMmGynjLsVeukPaGdRrxKaAGEf88v72nT5FejaLvfsFv2YQz6Q9xnC6dYyx7"
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
