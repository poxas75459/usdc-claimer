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
    "4aHDno86LfnPH9JHeByZVJ2ZEDZ2DK8EDj5ub159N3SKv1dsKqrEkUvdis5TndXzez9Lfkyks69kfJUabrPQ64kH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MrUpdHMx6n1k5oh5XEJvcbxqcLD4DMxHe3mWirxnNdnbmhyXsU1gLABgCBrpRkCrfFnzRWeH2hpYRFvTaiggGgu",
  "key1": "2jmDFUygZYbCkL7ozCHCPvvtsHFVAmvLjDk3uZ2gEStHYWo1A9t36NqmCFSjnAEdoC4ahd4qpFVDjh2VJukHiPK1",
  "key2": "5swYezSPJyXz66xwjKcgUfVmBgHjgXZxbE5azYhtR24UE6QTpqT3JJ88GzCrFm3BmKtioyvetik39EY2kruo2yTE",
  "key3": "L9GPErqBW3jekfFBChVXBHBruix69cKyqWQaMqeiEbefRGKbGF5K4KhZHdVqPiKJ8JrvVNnZk6oCzVkk6KM3yRL",
  "key4": "U5KiiT632mrxH8xfthvCAsJE725ccGTZsQuHh3tx91ZQSsE539TwKKzRq3WuaSdz2gvnSxtJ7zbSkcK33FNHN2t",
  "key5": "495TNanU5sMfuB7VHvpLtWykkhEXmFmPPxFac4hyTG9Sd1SpE2qSo6hvHMC3GWobimHSR7c8MuaLxBZgfXynt323",
  "key6": "4AwUq1iouStcYRoUK9edFR6fBjZkoZumeZ8JxPPXeQ1yrBsbuq6FXbjcdx1RQ61dMwTfh4fWbdHSC88nnzua5Hvn",
  "key7": "3z63FMy3jU2S6qkPHMzWhenmj35cEGBbh4zQTxagi1ibk4Fz9CfDKww2R1xKNDVkcnQpeqxwkVN9CR5Bi9XKUUsZ",
  "key8": "3igPMUPmQNaMWwLkDhZobS5NF4vi97NDT9y8GXwgMZF74vLRxTe6tyRYQbMTzH4VSvpz5thhXBNJeQmCZRDX9Ei1",
  "key9": "5RXAQhyEXSUR6hWNmFAR1LqeFwNtfoAA8SzDd79RS4KmgCmutH2W6zEPN9bBZJMeUtZsmcHdZyYkhvw4USWyUV4j",
  "key10": "5MGehWLnu98S84c5ijq93kHZ76vACmPTuGqCupRY2NoJLp8TWoHf2JZdW47efhyfhhNWCVwhAJv8F9kzdaBddKfA",
  "key11": "hapkamvKoEwPqea3yDvHvjuXkYXYDBk8Fywfu9HDuWsVji684TJo7GUczB1tMbXNeKPLC2Ha8NQnCKxDU8bdjMS",
  "key12": "5qUKqixw5msCk4irGXDnMo5rEBeSCiAw6Z5BvYSCk9sDPWYh1BxFU1qCJtPQUVfFkew74EefzQ7CgTTrAiRHmADL",
  "key13": "3wKYkAzMu9F75GPLRmb8fvZXYDavt4BediVY2kaqPoC7RBm7oRu39rTpvsBtRyURhmnpXTBnUnHQHxbdzTjDH73h",
  "key14": "48y5RKeihbfGN4L5sEjYNbbGvT95XoTdpkUE8gryDGveQeeyzRgUQXEheisk6v6p95ZZp5JJz8LidZz9YuBsMaih",
  "key15": "4mHZ7YqJggKsp1tJjpZYjc1bkUxz1JDeHt4bHP5EUaBxf7DAcnBifyUY4B7fLLn63fk89kNwUtJZCukX1E66NcsH",
  "key16": "5Wo85bHFgGKAvGDKM2zX2JXWS4Sy74Zr4d4KAbvdP2RxFp36rMZHL2oGV9gooJzZfBVEE11G4cMgnMH3jSetk4sH",
  "key17": "38pPb9ddesZEBQuWK6jo18kdN59BGVA2kpwwT1SYRExN6B126rDnDxux2Y7i6EDR3kfkQNnnt78HQzwD2kqFNaWz",
  "key18": "3sAQfzFGtFX7KedEH5Mq4FmbW7JT3ngbzi59nqCQRNa5imWRvb7f5xxwAczUBG5GveeCpWje177darGd8o5wswTS",
  "key19": "5bZLyAQQj2EVJuYNZ5TW5rKP1gC1icLSAjEDSP4zQjio6PZa434EqxrYpVzpBDndYR72GcjuTB5AFsUshyCFrKr7",
  "key20": "38N2h8DP4Ueyh7Mn4rh8kwZbsncAJ8Tmcw8X62oAoXKMRMU1ddTbWwf5SogY9vyzjw5xi2qpVgR3U7zDtwygpTAG",
  "key21": "4FW5bW2aCQrKVwcj2pdmL3K6VJZydBfWeLtMNjEypoGYU6MGhypsiycjxzzJHbSUXnz1cU9ERpFR8UN5pSau7E57",
  "key22": "7F8WtPQDDcyDb8Pnt6WnYtQNrTsxYTxY9DFmdB4MBWvaRv5VEwDHCrQPz2sAJSYvF9W6FgJPY7dvyEVLQ4AGF4Q",
  "key23": "4PDadx98FVf2m25i7dCPfBMyKFzuCMHmM3M6DipQFkHYcmyjxtTrdJ6FbnmfzLCZTwExGwEgqs9cVyhgSVpGZCX8",
  "key24": "4qNn8vMM8ZYq6XGkNFhSCL566ZufJrpyZFznxyVXQa1A5rx6G3wZV6KfUWtaK4RT1CruFnysk3oReEFJGLf3fpgk",
  "key25": "5TZk2yG6gjSuE8Kd76qr9jq9hMJcnkTyqvYRpNisvCSmGRwaHzqokvR5t63pV3WEoAc1XiRy6xXRZGXcZr1HCL6V",
  "key26": "2rdjntsXoUdchHkJ6Fke1qSWAq5W3HreKzP9q1tv1riJ6ssvTgctxQ6HfsNjt6MAXRAGGY5AcRwyvqdGcUbz9BXJ",
  "key27": "55uYzQmkD4F17UYVm2uvYFoYaHeCTk6TcdyLFMUjDtYr9qhSYLUPyb8gAak7LXyP7Nc4x2ZnHXbdscofWEsYyDjp",
  "key28": "2dXaf8vmTQrJdgfuzEuzD3Lt8BwJcCZfWmg6n7Xqefr8P9mBFF5MbGRYhr4c2yJi1thof5Vw1gor7oSUfd7bY2pb",
  "key29": "xbhuiXKrgfBGF6Dqn7eyRb3PVbjmsRrcHdQf9KVuoHJpo6Hxq32V5B3Sjtwqypt3gHUgKH7yujFZwv9jagDPxuK",
  "key30": "5CEpneJNuPkNScJzRhjEDu5ofjFscQScQEcJtci9j5ZWx3LRFVcotApLNm8we22vuyKfmEoexB4FucDBCE4j6po1",
  "key31": "EYgNqdQTcu1NiU971ywLTPbCUqxcX3zssBo7Uckg4MmgQpcnPjwxK79zAPqqQyiHPPhomcwBJFMGazGk3zdAG2m",
  "key32": "2rfxADi5vdUWK9tz3s8UuCTMJ8kiU4RUFG4UTkEEA4DhPHsaWQUepbSX3GCz3xnF5MsnR7rJjYxgeUvF8bDuYyL7",
  "key33": "2N1emp1TKgpmfLXNJfLax1hv1kzRUQcLCcNZqhgEfAt12QnKMXAfqr3EYk9oyr4po7saGiwEBnW9crj95mL7bfmd",
  "key34": "4FqmHNd2R7k6yALSrUJRPob1rmuy9oBrrPmmTA5wGc3SywAwYhFay7kwspDaW5WbRwVj1fFz4SJye9EGFZf9Fw3J",
  "key35": "291xEx4QsbdQVaoLZ9CUjJw8UhrnH8oejXTJZUvcrdPLG6nLdE1DtzyEPdKhYR3esDtAF1hFubcw79PntUkM8mk2",
  "key36": "2wY8YLFTJy2LEutXCeh7LeEj9bDu1aQj9to8r5C3e5RNLpZM5FNmwffcAL7tLs7pEpp3jZQ89btAHTYPpVBLhYjF",
  "key37": "5E4QVVKzVN1dNXAK8xzEPWYP5WXgKmU2SE6HWx1zN4nZHkwh7doSL95NnDZ9AZCheoNhm94doy65pQdjT5HGYRxr",
  "key38": "3qfdVxmEh768WVRjBAuDNDUYnBzsphA7h8QKPHBgDxMS675EEojnd2UVHDYEycYsZYwRiMSXFPRUkRC2VB6YYm4Y",
  "key39": "3X5WnAyRNjVqPza1vgnkd1YqNLe6ofPN7YtbRLwFwkWieDrtRo1wwZGvkqAP9dLvbcfMabJEEnA2mxFUfzpr5UwY",
  "key40": "5M9GgVqvCdxm1op3cQEpVHGqrTTfAyd5U5513uJzHZPXidhZgrG4EgnrCmhKB7vksiGFUdp6zC4MnCSp7imS8s6P",
  "key41": "2DjGP44v52kHSsbpLUAQkoRMF1vm9iV4aFdzE86pYH42XjKW2jsnkwe6G8nu6TcuGiouDEF2L8KgzcTnh6Ae1fHh",
  "key42": "33nVhgqSsLXzxPvkqnyapxiFZ6RodvozVKpo4PE91pLNJVwV2M96dBp1dCv7DxwhXkYfHskkrcMduqeHjuzJyCwe",
  "key43": "3dGUJW6zGUWyGfKbrsXXv68L3EaLAD21MKCFn7fPQ1UTBMS6WbTyJreDcghxdJa32stXZg9bDP5AF1ULQQxtq6Yt",
  "key44": "3bLN6uRDBZ5MEDMDbqaz9T1JuucGouJ7rYfykmXPtXmnk7wK4gUyNNKyYHtARm5NRKfmQKF2jFAg1DJ4tjzo3EKT",
  "key45": "28d3sdyMtNTSTBiJbSjKUjQnWUNDYhkdVP7xjSMBc2NoiFcnAjaggqUDAvuwxK5wsH3eeSbUPxRciypvAkobKi5Y",
  "key46": "2q25scSuboSV269zGCae2ymsZrG4RLB8y9fNiSHcHNwizJdKQ7nCNYXeVj99jzLBTeq8AtVj8iMG9iDwGq3hxWf5",
  "key47": "2i1UkuPnJvC2PQCXCGAp2PhyxTkL32fCdupNykNJ7LhmQC3rXY5YtYXZ81dJVmtEZphVqxxiUB8dkGfr9K3PJ7qQ"
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
