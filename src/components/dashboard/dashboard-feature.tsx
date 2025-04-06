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
    "2XzrM8Fm8gPHKma2EaxzNWjcgC865ShB3JnFXqiPQQi4ddP7MyrVbQsZkqspaJvN87MCjiGGDQRyntar8PjQnV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHVuv7cwP2X3ySvQSUVJV7DjutnhurtNMKTwe5S16QFihGTtZgkL12F1bQDffJXuJgnKX5GVSyC6x9A36ZZN67s",
  "key1": "4KYe5wPGQJu8bH33LMsx8pZEfwMDgff6vugrs4Ne6ex26Ydea4jNoyjpu3uGwAafc5pxk1UAAM7jMtEhrpu6UTXQ",
  "key2": "35k81M4bor1hD4EuVTJxY7VYcFFKD1HnmgVN88yvEhbZ6CRgnn4npMGvqb5ebMYwGWQe45qGryimVa2SEeNAQYxu",
  "key3": "5k229zHhr4ZRoGfEqVNd2FVMkjpzQGzoY6fQRGaUdPBPtnag6wurp7Dy82K7SCs6H3DNaprs4PW4kEjbeRXi6SSy",
  "key4": "4m8E46i8URzHWHmCmfsKGNXGzJyBcQiiq9ifB6Wf22ohHAtdw3Z3NwVMimpgQv1m4ehHS8zMQ391jLiQiHW5TDaU",
  "key5": "3uKLq5PX9aUT6Z9JtxVAvYMXsjphueyuBbBihK9HSJfyMk82oN7CjgXSkiMcWhe7tHRMv1uVWnodJvJCzqjyxcLK",
  "key6": "3SdsJov4QtX6MsQ2WNHWM6ENbBdRQr6ptSu82B4dEn6t8Lo5aZG2LdmbFKQfT9GMJMsgQsSizuSFPBAYcqnw7y9q",
  "key7": "2KDxZCqkj317q1NfgGQuTgdeLiuja9EFGd6WPpShiWfPrD3wDnU6GWpYKtt2NcUMX3L4ueeEHLGZmCytUFx31tLA",
  "key8": "29gFEtWP92F3yP4Jvd1qdVxAEs9uD6pNXmrJVbYYMAjVVeFnRG3XbfiM7V1J6TF7pAjG6hzncjzDLbYSu7AMbRLK",
  "key9": "3g5EvCevgprQbVMchACtyjbV17iaN3m9Vjb4LhdZ1zTfcPsttU9bKBnpX5r2s4FogKrRHrUkiB5ZhTrBM3GBBT6g",
  "key10": "2ThFe5RMK3SmDvdiWkAgeuxDZFVYkas3HYTEgBGdSbfszfqcpHwDiuz257nG3XtLT5zfq5jBfQHvEnregVDLTS4X",
  "key11": "54S7sJ414eRsB2jzsYkHtdQwnL5VavmKVzCVAA7Hh26wwspx7Pw9tiFuKi5JagkKcmW1JQTXQuPQys5DRiyca1Lx",
  "key12": "5KQkuLWV42iAuAqMu9td5UNu2RVD67TVuMU29nc9hRDGSGSCCYn9dmtgjLxj13fbpQe5h6veqDgTH31FrLVAUdrn",
  "key13": "2LRWb35HjRpuKjRpoyjKSNDw7mmZo4eXLHa76zqMhvwyEh18t9tWCBYL7qpE8BRF2LLoZfx18yQneBSyz8KusRB4",
  "key14": "RiE8RtAxmEYuwdqbtGSujcq9dAimFSMGTNaZwfvdLa991yjG8HFAVaDs7vpVDLohaipGaRaZNicypHmpiADTU4u",
  "key15": "4CuaXD4kEMqUZ639a6LgJDufaPUCEoe9VueNECxsqFfvH5LGd3Y2U8iMDY1eHu7BpehBwsA9KfPsHXrWiVnZhwox",
  "key16": "5cCx259DAmuGwagQJuq7DcvgV9TiPvHUxWtchEQFxJihmVXKrvKp78NH53GR2XUh934AgHFypvrumvJ3tZyAgz8M",
  "key17": "3XmxxC8tH4B81YVgVsfVivcatAFq4SAFUMJ8xek7vZfYw9oQc1TGzXwH57kXRKgogQ3gBJurXisfmaSvxcGRhfxQ",
  "key18": "3urudjd7WVdzK4UhnaptZ6UBWbin75YQkA3Bh87RRG7zSEuFpWYf35Lh5U48uY4ct2yoJQtnN9HJNZQzUgzBb8B3",
  "key19": "2xTZxo9qhWXuRcBtvRSbQL9EaRTCxmuyH1vEiGT6fYQVVWVuKaQQrAokRJ9t6jGCfT3HcE2UrHbeg3H8EXbdidik",
  "key20": "2NgcyvGxuHEDuqPGXxe17ZnpYM5dJFJFd8nr24q2J3WWfhdKWqmfdXgRG86eyjDZKGUb9Fmh7WoPwjemaxEvtigb",
  "key21": "v2ECaT4uDDWZaeyKtNwyEgSncXsWsjMMg14j3gWntij4LP3yxLwhXrMN8LSohLNomNKfRgeKAJ7LSmc4H4EoBBV",
  "key22": "47bEdAxK78my7qVUYyWMEG76SLdSmbBr2mUQc4cRg2uceh71sku3JhswDKftHURc2xSAwr6QJCMEKSnGGTcA4PDA",
  "key23": "c73bmjxgdMSBJxaF5Ykvz4AAr4fbrba4sHB6NXh1BKv1EQaBpK3JaK4enEof2burgPnoTNLFFHkYYkJQeFZA3zz",
  "key24": "4FZkepSjN4y4NScru5GdHb1m6R6vK6KTCitNEmHzunPdCEF2fMAyjYaGr7qGvekEz2Jd1e1oHzNqDm44Fk4CeJiF",
  "key25": "3NRet6RkHdBLrByV6eYmWuy1rcGBBFMmpykReDdyhVGGG6uuTMpWg2p4TaEXFPWuLapNt2sNZrWgNvMxK6ZDf42e",
  "key26": "5KFWL1qBXjJP8PWeoBPeHNjHpSu6Z6Ysm2AYHVf2wKrZzFAqQh597kB7s49FjvA1G1qErT1VvKL7huth79ZYHMbN",
  "key27": "3tV3LWR7y8Qjm9pTgnNtU6MxqmJqSr36Xq3hWd6vA3bk11v3dzaNQvoUvr5UsAycqFgwfRWHJn2sQLGimcXiLVFw",
  "key28": "3dq9Rn2oHUQRv7VrzBpEPHn3XHXkmc84tbXh5yX34WdKa8eugfTrMmmvZ1vEwxsbvYqYoBBR7EMvzp3fxGhvwhAQ",
  "key29": "7UWfrXC6GcBvyqwqiuANUhe6VhNjNd5rshBDktG2JCdodqw3pkhrSE2aGLk7xYmcGawRUCkGJTxKMQbL9fXzS5C",
  "key30": "3xAWmKiQexkhk5zjoe79dr5zAFWdddrM3oWMCdjNA9bJz8TDk4GkKssQGqfg7k2nkDxuzdtfe29pRDhaybo1Hi71",
  "key31": "2QwBzuDQ23NnD7iFsF3YSbw2ekqUanAkRDh9LHJvkxmfeeozLFYPk6uWWH5L87drPTAqi5mkYbqyf4JtzcNWiAK1",
  "key32": "5pT9sPqQ6JTj25BYTaYkgULDfNmPsEqx7gd5duPQLjSeTvbigKmywmya1fyxwgqDeMvSpi7GNeaGFFcqmMCrvjrk",
  "key33": "394rhV9EkdXA5Y2s4VBKqT4YoaixoTsWRCK4ZHx7URysGCTw3wqF5U5xJ3XJdnE9eymsCXVmTgQCgDvwKkMfgQAo",
  "key34": "5mzr4WvhiVjhdkfyQf46icwQChh4cAvXWVGnn1oncphfRWpqeuEkeESe7kCXFxms7Qk3K3kx2MP227BTbWnPAGhf",
  "key35": "5j8Uzc1A4Uxvok8LcM6w32Xfvj7fuPMhJ6aWZwwwK2skChXixwgFtBfzGDx1P5rQc25Pv8aubsGpVMj12iiiYAJd",
  "key36": "3iVWfnZYf1wNDLQdmNR4MgLpQRfqDgQ2J3GLvSSqbm7p1nBGqrnRDWd64E46osb8bvfWy5K69LkCjC9JrQfgBzao",
  "key37": "PQGSfW8nhhBykU2BzyVKUiCYrqLdQAtYFqdQoRVrnLuY9CXRC1b2cuFw9exwieqkEBdjhthPnJTse7YWRJGSdKe",
  "key38": "3cMC6by3SnmQF32Yu8TgzqXFWWS1Nhakgr248KCrXyZXfYV33kQom58Mc7DVoMivnSZ64MszXSBoNq1cxrkgPY29",
  "key39": "4E21kfnoEA7KnYijDsUZ1GRyL1dUDrLhVufNHodjjaoyhd5YU8LDQB9oD93cs1YZNECAPRZ1oKL8qBDMTYEgwQLr",
  "key40": "rsMdGzw9kqF4u6m8W3pE7kdP3bqWokBN7QKsvapiQ9SNiDzqrwzKo2NbN9VDVkManY8hPfhgjNb4FiNzhmpzJMq",
  "key41": "5XPfeEtteVWSbCEy8qnbBLyHmgENN1qv7NqAxVWdkC9SStomu1m4589eV1XnVcsGz7EvmCP1md7cFY9BsyxFrBct",
  "key42": "2ZdKoTuNeLGSvGRGtSzKqeKhJS7QPFhqr13rUK59T9ZarnG9ya45wMvQPeDq6yXJ3e8yRK44LUh3bq68Uu5eoSgr"
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
