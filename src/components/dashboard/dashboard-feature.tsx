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
    "2SQrBfyYBUogD7EseKumvcs926rXde19hXBqz9ikM9W3g4gMiXUoqQm8cRwjZQv1TFoj6NuCR99PJpEsuXh8Ny5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EKHPSwuuo35bQUttvH9bSUVz12etXu73t8Cdda3uCUAqU28vwLFAq9XZY8xxzZoaq1qyLLrzWULroELFqE9fpTz",
  "key1": "3jFzkCQ4yaWiU3viDaiKLiVbCkqcusNa1kAJ7ztvpyRWKpRei9PQYv82CyAo4op1TzprwKA221Pzf7fNNJ7k6SuP",
  "key2": "YKLAGxgLxAUksaq856A83BiYoVD288FxKbU9JYerkd4AP13UCtkBX9GUdQ1rFt6FoMUkFwXmDzt64hsV4z2VbM3",
  "key3": "4YjEBgovGdvYQUb3sXEqjTB7N1NjNqhkDtsL6Y8AzPTrn4Atpi2skdv2en5j6vpsfrmbMLctADXZpZndH337aQfN",
  "key4": "26qiWPh2dqugH8oxsxcHjznktYJu3z4hiVjATn4PDNpVNU1WUhRi6BqyKyDPCpLfbLGiutCZVwdRUmw8pdSDTo5Q",
  "key5": "5JMbhvY3x9Csja68UqaYeZjCCqEz2iABrRo98pQ9X6n41QSYDPpkXXtzpX6yF9xEr13kiKY56gqFUbxTzrxuvYHZ",
  "key6": "4qiaFQ765eTK8HSi8GdHyDfqQ8Vpd1HNH1pqio9zPRA864z7oxVUHhVmjKUauDyUapmF8dgXPDwhABioWs6Yt72x",
  "key7": "3qDmPSF4cwD4kY4sS1FtKzeoV8rJ8QrCQvHubDkQKNXTu4ABRQiyqxo2EBzvVrLNKuF6GE3tPJq5DJzSYYbFi9QM",
  "key8": "5Sk4T59HmvRiA1nuiQr8kGif251ebrTM1eXGywPuL1tS4mcjTkXkWLCjVU1UXPiHSnGiHw8c6ytu91NbNQcrHYnh",
  "key9": "33gJYKkPhrrDkxBw2kRykMjnNLUjkZcbRVGNJwAmndvTkBhwN6naAKfUpPMTzq5kpYWvrmArHv4Qu8RAGZTX7TTP",
  "key10": "Pr7cSuDXem7UcJDPkHFaCPsiCFuNd4Mutz6K8q2eo5FtwRTQsKBN5FeY11Wk68uqhqQQwwtfnnM7xJBs2kVJGGA",
  "key11": "58ebANXXL3kTn1WM2eQdT7Lsi34ZhPkk9rS5QEpuoqoaPMxjHxEyxtVm1ncuieiUEp5xirJzUV24bXEf6J3e4L55",
  "key12": "B358vud6fKpLS3Z8MejJky78sXbhDVvpZL9b3pSEepyUBu1fZCoF9BXMj6671rM2ejU4hGHZSTcfVeX8pSfvxmP",
  "key13": "4VV91tJ5k99z8d5WZGJvXCgZbN3uxGB9obHC98HQ5TZFq5L156FhfCR3vCP2K6giGrXa4YgFjFCihugCKKtbEozY",
  "key14": "3dmYWCdsgXrCJa32X4eJLPMQn1sbSfj3NVuqynT8VfrN4zvLTWiJQtxjWTmiiLuhyYwh33WDa4KeEgtiWV222a7y",
  "key15": "655b7ZekUDtK3BT7Dk6tTuwACYjKeKQsHi5rSQzurME7MoPR6Yn2Wc5dhKYeTzXZBqyvKkzoDnkw74W83uTvYR7a",
  "key16": "5EL2KnEtWKzj9XiPCaiHzas1gGCsLAJCe61s8Gp8N3ScgCZckSWkYnyLyLHB4Vs1aoMDzm6BbMzDAMvpbCfooM7c",
  "key17": "4MyK4GGubae913L6tJmco2d9x2UErV7Na3TWnKKznR7LRJr4aExrNNbb1oVoWkrAN3UbTuKHeW6Pej9tQWdyBsLS",
  "key18": "4YNUDY3r233PKiyWPmL8x19hGjEwRpZFZjgVftT2FmMaYRHdHoMzwxmzktx3xpTBPupjNMxvgvWYyiVPW8SgF1ZZ",
  "key19": "3M7ZaZHra9Af7CdHqarQh5uoGXbwz6mdXhoi2tcc4eaAL8eBryax5vBYQBnS367CzGmxtYcM9rDTQsCJ7qduTZ7N",
  "key20": "5TnZ5qBjtzAnvSR4XMQJymXdoN4DeyxwoMfTyxT8HcXUVUZk32CNCSc1sUgGwYAUkGYnjt8eqUQtz5mve3oCVPno",
  "key21": "3ocBasekNwhjo4s5tGNtWEEihr5iiR7cNLTWps7yrgJN2DX2tcUXrqmUBDku6rod8arwRFSF9QQMCqHRMyW1wwne",
  "key22": "4NYimT7To3qBsWvnUFGjzxzMZRaVmpWtkMkmgL9AzJoCD11M4zwuytdj7YpWcMiEx8BLs6ij2wLALQMBLjzPqags",
  "key23": "4KL55d5cFZj3mcr2JKrZqD2sVURWKXEkD1ga3Y7DAcCpYKnKWiifVoMrmT5dX5J1TczZ6bYJooxHzJNzwX37S2KU",
  "key24": "43tiEhotDsi87VT12k6c6MuAxdZHVAfnd8T3qUx8hbNCsXoYMC6srBWvbuAhrv1Y1G7k386XDosRAaV4eoyiSBwq",
  "key25": "2v2yiHUNQT5JjYw2Yv8iV9ixv9cmhXsrRYi9hKKsMZXtxYA8vPukUoujNyApFNtfRa5ReHajE6JmXueJbKz3SyjE",
  "key26": "5GEs3tBt8x6KtUXxPwnVJd3XQZsn2KuFCrzHqAhWjucEiYJKewixzsfwwFDEUYEYiCu4bFWJEBQFVoZ7a7iLwRFa",
  "key27": "4VWvMeRcpMvYbGKQs1A8S8V4rHysiRUSpyGKA3615EaNs6t9AB6K88cUPsk1iX6nKxsDGW7wUmpFbCWiiiMkX2Xj",
  "key28": "xkJqMPbApTanenFzBVV4EPiaFzvCfQtdiSTRoXyKE2EF2c1ntxE4ijgbD6KwwdwYrrk14S9kMXkC3ZTn2J1oHnU",
  "key29": "5fNR6Z1Cx8iamzVj9o99PtEHKGZQZStM7U8DckyiffRGWTUbuXN4fBeiYNUq41NyBACh22Yi5uzR9shh5GBF72er",
  "key30": "HHVMPgWBBPV2G9uGR7JCHJF3akbknd48EZZrFh4BvEDVGypSqkKPUL18y4RphznkKxBjhGLYALjoupcFmnKSwHh",
  "key31": "3SYQQSVfT3EjS8JV3tvLV5csNZDAzmunALpBW7Raz4E3oYvQVTGt1VssaVMbSHEC8NULpxijCgYTSdeqeuHFvbdN",
  "key32": "4F1o66AUG3oYpyZdpxUsKxER1NDUpHtpnxRdPrfVxMDPLKv99RTeCowsbE5GWuo66J42VKum6YNZaPbYszdwJN54",
  "key33": "2vEUiZ9ohsvg8TRmnctD4s7P3spv6DDWJbMebxUpK8QFu5EQBrZARrw35APky1nUZNNJVkNumwyMzpYcVCmFs6BH",
  "key34": "5NaQQMs31EJe4ySn8y5cTCaRZNgTxnWJyMFpq8wLA664DPGJajmP81uVNLFhxmpZvAeCFdz2hjW6F6LWJ5rjCPfm",
  "key35": "2dApS53o2Jc83y5X14vnp7o3YKq3SaEkGKz5rEQ2r9VC2GEh3TFHZ5zu6sPrPfAUP8cYMCA6z2TvgMXiWo8UCLzQ",
  "key36": "5DnGTY9ZDaqERzv3d9HMa5gZmwoEKQ47KPSyR7SXooagtypaJyg8SH4Rys529TXQsUoL4wB8nvmRb1Ynerb8BM43",
  "key37": "5j26Tj1iUr1f2Bf9bTv9fkoT9SqXBYDJAqnZx25pbNJPg4DjvikedMBTdgjiVHXdEru1s6aXVfCMXcKFeFAgFdbF",
  "key38": "GJMDoYKnQw68VX9hbodbfuzKwwWuU2LwxpxsT6ecdUCN9PR87f9fYSDtidBr7eWwJmyXnc19Adw55ufbXQGTLJH",
  "key39": "5PxDTJU6gNc26swVLCukrfttb417fA8S9YN4ifYanUHGLkanUJXnpv6rXynPNqhuaNsJ2WULLe3LQPGomi6GfSD1",
  "key40": "5CVorZ1FLJdTpead9JmoLgbPcFwDp11tVpYTNigRCZXs6sWDq57knYkVF5hy1suq4fuSUFvxjeuaudXETBLNoHH2",
  "key41": "ZxJFihP2fhYwZyxzoHDu1AUA9ZUxG3wdJbrHgFt83NXxmGcrTNpJGdWcououUuA9T8VQ6PhwtMJjNgWdXag5ta9"
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
