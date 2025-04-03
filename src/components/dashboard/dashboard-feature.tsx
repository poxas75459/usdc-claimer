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
    "4Ja1cdRDn6LwX4Qnr5rFFMwzPtxs5APQDYTKoWdgCgysQVKCgxYasC5XwHZLRD3VJ8zuZUHk3zKAUauiwrMWTvVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h6h9zWZgoRGLmLDeB2j5cZ5pV96bB92UiYJXpQ5RdZ6BodFipFnhxzc4yfMnkazqqqDMH5JW9CdXyJzzePPrwvz",
  "key1": "2PX5TkBD2jivXENAzi1k6DKLoWyLhvV4DAg4MDjgYhgKAL54w8QxBSK9iiM8Jc16K6w8osMYkEZsiDdGnhhUqqSW",
  "key2": "4khwxWDr9EUvVaS2D6ZWQ37XQQ2b6bWXiUdgqaZQLJZubegVvbrc6QSMMhCWYEruMe48QkCuLn44Vq1wYHfYr3jJ",
  "key3": "4LghsUnrhPUXtZz3ME3Lax1LCCK1CtKwQKmqAvsmuWTN2DGEKuG4diwEL5tNJ5XrUU7jyGdWidxcJnXdtPbpQeN5",
  "key4": "2L439hvb4bfEeBhtYkvN3k7hQ8aGNLodL9Ta3Nov5u6BtS6FWZujzJNtcADP129EP5sKqqQstuR8PGsL6HdukkeB",
  "key5": "5NrJA4McZMV7A8bTEF1tXpkKpwwB1gV8W5AdgtMsysKwiM8YtjwZV1aZFAcM432BvpXpK9LjGWQwGuKCuK2cABGj",
  "key6": "4QsJ8MJ1jCctUKcVpDn2HeRfMgt1BnqPDw7zcSCgXjhjnSr8GYYJYQes7H6pM2q4FW5ckwaP4prmfEUHqXcEzkyy",
  "key7": "4ApVrj2BCLzd7ywBRqohdRPyWk8ukFs2tETae1CsZJdJ2UVCJCYppFKmqRiRHntFe6uVoQXopKj72hQgrAQtSxdv",
  "key8": "3bSdXxx7gF1QD2yEcT62frp9XmrL5h7g3qdc1SXBD6LpRJsnLPmYxKBYk4YytVDgDaDQExz5gxtMM8HZyyKwaXpQ",
  "key9": "jvbX5kuxMMp8w4dqDn3NUfVpYQdpf5XMPFR3HiQeqNd56dbLeAjTMxztPQGyg9tTPKArkxCh7igsCieEcGVs4Hb",
  "key10": "5QUh4ixjzZcJEgyUpGKuF9r8eE7j1ZaeDoR8d2c8YvL3f1PFvRUw4cJ7Dqb9K4H6KkD6jKidH9Xj8z6eKjr4Wsdm",
  "key11": "JdMdZqTX4S8AudBoG1vDmeGgGHXjfKw7yPKjme6YxHzi7e21rbvsZ9FgPQaa9wALSu7972ntc4Y5dhQoMXNhudg",
  "key12": "2Wh4dcz9wvarn3Q7pTtxXCywg7u5w22XdyE3RDWryW5iqCdiLqBo2NUGx9M35QozaraEekKm522sBgnEmkf7c6hs",
  "key13": "2kUQdr8WDaue5vJNtxefxnxShCey7CQmsJrJEQDbceeTwmwL2kEMpsg7Ss94iZ6qsVDNf2FYewArhj5ZqhJcqdBo",
  "key14": "5KuUdjdbpk1rCKjotqjdJojoeym6obdsbLSQVdRCq9Q9xChT7Dnwf4kNqAmcLQrvsqrJkGh6nPuVkdbxpPYe9FDf",
  "key15": "2nGnJGte5UjtChXZeisPteUcnU3JabfgFLiqFUaDDTnwXt6nADN5MYZ3Qk4KWYShCYGMK65dpHECqjsvmN77qonh",
  "key16": "33bzkJyGhasj1Xc1s9VxfctqwHYpbKsJXhvjBfdAzLCg1NuyrZKfyKGnHymdLBoF8bKAqaSgJm9WQcLz1mwJnQ57",
  "key17": "5HqqXrDnstGPdoUuNHSEyH1zxSdPvLWMDCpWRTABGDwfgEcQJbyUxHbVnSBKjWADP1gFd6WqHw4Evzf3FEUL3uD1",
  "key18": "2vVGsbMoqRyjRVRgJRGJm5W7nHnVwHcMdKCneb4YtMjzEtXxV637dbzbSaKywq6tn6KM5vGTiXSjiGbSUn9s7tpi",
  "key19": "5rakBKZozEuPsPakRnWwZXTNo1BRGw571uqHd4MDd7FGYh4PozrgpcV7gevBshyzrjBA8RzfkcjREpe6UtZjMy9o",
  "key20": "3fqdtuPVo5QkLh5GVVk9kJtMrbC9CVnw6wTt81tZVNWXuEn8225dQb87vYXaZMkVrR9vhDm5f27h9Fxu8HwdUgDS",
  "key21": "551aNJAnqRQnGk4kmf3S9Yp4WSWHUS91443Nj7HjNEp5L5zrRGUU4nM5DS2S8wtuZ9sHg4ZsNAwCFjPpNi19SNkZ",
  "key22": "26TGLnhJk9rfUUp4KZACQApPr56B2vyHQcax1muM4NL4K7wB59HArxdm8kQrcheq46Xv69B6K1ZddK5GtteQBzzi",
  "key23": "4aDhMLZLLDijafmYyV6w2EiiDwvFJyNmATVXvBnvP5GoZrJbw7nQ3tnpzoENXbcQfBdEZ5WNjJrrcF2jraPM3J5x",
  "key24": "3dVaPPGcgj8ofZGCc4hYBKhk4XWuCDK7jDiMRQTBjiFzfCQcCJgjF2PgHmy9EidRVbDetycbxGVxvKwSWBTpmVfc",
  "key25": "53TvbQvGEWeyQyNYmgp7ggPGNigLm4KLCmDauiJuEtsAv29i7Ht99K2jQEx3kesqmkCE64JeXQ5t3UoD3NEnHgi5",
  "key26": "3dn7ors1yBDkF2yywCEYgs58PZP6KR8ZHYnyzuGuqkYYFi7jWGZmKnGTVPHGpzgiutzTMqxpdxJTRYR4JUZdptZx",
  "key27": "5cNc9HuRy3dsdRygEt68g7GNGKya5NWqxZDimh9xUFqULYJcgkz6kzQWqtgoXBcUro1oNgu4BSxhVyuaXbUo2z6x",
  "key28": "wkEfuMefvdxZC4i5jvxHVo8oEAxghZ32om5uHrRmbr8bShDL1ub99Vd8rni4j3hQumT27knoQEkXi7LxqMdHbhw",
  "key29": "njrT4bXBt1RCtAVkvfo9fNLwtxai98KGyYYJeFBVTK8zNVRUWqRpGFPBvRzyTdzDpXqQbPUBFp5KggUSyzaLBHN",
  "key30": "mBCnQ9CowrxW2R3XZic9ZCHRUaZjs8mLBNErRtXYztn9HAKbt6hPjuCbZT9VR5H6TQ9egW17yJBW2vuieRQLdkJ",
  "key31": "5P45yAgs4722wrEwHecX7nbzPQMR9i77H33ELzSF42yWocHsFdAow5tRTn2aFgmM8ecuvfN6TY2VaYn6mRjWBAxN",
  "key32": "63Ty4ViWirYoZjT6pRaFDwYomJh7i3RS6DcwBwo7FYiCKaEFjJNwCL5YtvhCM8xdyUaCa1AHB13Npyx8oBZBAN1V",
  "key33": "oDVM7Zv5msDXL1665d9LGTLVx7DSHpRC1rvfcWgE9VnqwYc6UKbmZkxUZbKaE8rti2kgFVGdbhD2PHGTE2ocNLc",
  "key34": "39nBgi2SbnxweQhcu3wv4AxL7yGdazh4fDsLAX3tpirKynZY6VKZHPdvEafqVJqSqCM7p5E5PQWrocGkymRmZEvJ",
  "key35": "5sNYqpG2C1PEwRN5uPcZiX1Su5aTBV4nmkiVfurmXWarJkbrFNqdiex5DKCXVWArnW1fTD1MpqCfzqGLrgxKmqH2",
  "key36": "25wGM7gnC3dBKHyxS9zkydazGS4CVvsxV4NpBK9ZD6AZru4Njuas1h4EnipexTfKqECHVZDAr4sFdFzjBJWuMv92",
  "key37": "5wEUAPRRVbFcrHE71sq3h9DutMVwvCTPQ3QBZaWFrtpVgcE2GK4FRneXYvejmQ4UJay5VYuEF7YpS3pu1maEWnKs",
  "key38": "KvwhbxuHu9qRhyJduVkDN5Th2Kj9VBFjs4bRyD8Wc3wcC4GD1RtNrjKZy6QKhy9gemGcWYAjkyqbJU6MM1uF4fj",
  "key39": "3MvSrdqNy2bysdtyY8txiXjPtd7j8ZpJeP1fDe5QM67titqwnVEpXQRM7uj3a3NRG4zbr5Up7mheg3sU6S28fgKM",
  "key40": "3iaNS7SxigjAcCdJPEZDUC79m6vUHXPJT9M1achz6G3EVeBFp526b1x8MVggY37kj8hxHAcn1kiwopKHGUKy4Zka",
  "key41": "4xTvVgqpaUSy4Zarr5UJXTBZwPaHqaqwyugYd52j3W26FwNLnU3qxeeME51kmUAVvYVnXmvwnWhD1n5V1dtZqjXy",
  "key42": "3KSmiwBxqrCeVNVxEZnAmzDZapTpteae8kNKmrc6ViKrXYn8QtCs1XTDwNfzuwuvENKD7ctpLLiDYH4Av3uhKqBx",
  "key43": "2YuwNp6x8SPv15677m2B7TYVYPnuBNwe6fSN78jNBMLjkgLc5wECctARaUQXEjHxqaNusR7beztQEAcmnVhkKhGn",
  "key44": "33ZNsqPutiCXvfyCvbfnDdQYotqePoDx97H9yGA9yHGuHLh18AgRLznYuvbcfzg1QWzyTQgfqww5zr2RmU7wEYbc"
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
