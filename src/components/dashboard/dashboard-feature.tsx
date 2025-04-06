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
    "5pe52u1YWUAYH3YWKTnH5RQb8o7sG4Yfg5rz3FYgjrU2ZmnYbDrrYAcSx3HNEkGGN7CkzZQouTRn23U4QTXye9wE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZumZHgsbxv6qyP3V31At7sM7aNwgGH1RRtwmZmMaubiCW1EQ7yrp95k47i1h3KTgmKHa33wqE1LXv8Gi9CgiJeY",
  "key1": "2bU9uNkAygnsjr4a7S8qZSm8gab89mdKMfPZFp1hjmUuwkAtvwDjdrKCnTjEYULguAQbVUUZ2HZixbR4kGXrpJAx",
  "key2": "zjTkM2TjTb2nAxek77R3iNc9uHGKX14AGnSbnu5dntDDLX2KBHhj8sNHhZjKqmuXowuapit3WaWfkifeykm7fDu",
  "key3": "2AWUTKLExzLXRogUWoeupmeupnzs1TyWPBQ6S4tm363YgYNhfz1gMLC2rUeRSWpiHJsAEvnzY8ZUhrS7PDEoyM3S",
  "key4": "4PeZRqGatQHKjqtnouCEYoBvj2dxQwXPoBRuRQWtQ6Xck9CTK86vSHXyjPzBjDJEiHuSP9994Md89Jet4EYL1Sgb",
  "key5": "xXp3aoRhkMoud3NdWkaFvwZ5swShwgmauna8U2bdo27hWNFgNyMQiPJy9QisVpmoBPYP4myuS9gR4AY4XfLxAxB",
  "key6": "2CK4j1qd4r7hkzxmewyZ56MwBi22Aqszq8EJ4fatBZdDPB7VqxchuCFSQpcm7krsxEMaWpqFN4GxZYcvs2aVSpJh",
  "key7": "5HbF8pJYzhNQHf5RwbJ7pj1t91L9WV9hmdMm7utttyounKGYYWMdheV4hUvvSzpQeRoDbCAD5N4zMBzn69pB44Yi",
  "key8": "54Uhdc4cvVPSCttxMTfGcxJuvqTGCUKkDPi2yX3KL4TtTabacZRF2HRaZ22h4CKYujMvdoENryQHmXA9iu2fopzz",
  "key9": "4WPLJdBX5W2kotMvmQT1UTwtNrr3Vx1aE7vqbac2vUBh86J6iP9S9CYm8rEzx1QvR2ibgNH9J8Xb3UqGQTXDLm1F",
  "key10": "LZJVh5udNtyT78tdxTG4P6PDJP7oX5qtAdPgPWNsb4uUq9jrFawXfDLfVDm82hn9ktjThsVa3kqZkGb84mmGh3q",
  "key11": "8aNPZZpnwuoXtcn5z4YJHHxZ4xey17ak2VRmGwMrxUwK759ANPYKBXxDrmXD7Ju8e6RdgBiaMR6ZiAkvDC7B4vK",
  "key12": "5Z53gmHrchKxGACAcTmqa6e3TQiTTz2jHSroE4sYJgN9mnLq9YGkvtQaqXTp9HQtWgsksaq2u1XzdCAKNiGZYwka",
  "key13": "2xtFPDDzqXbwFa7PeXmqLA7YabR2BiRsnmnLpN8dYViuDLK7u21fU5dYWcmVYYAPbnsQudsTEZToHTzsh9T4BGGm",
  "key14": "4KjyCX2EcmbHr61EtiM6Pta9mDzkwp9rcBdH52fPdQcLgr41VJgzstjSFSus8oJCZ7U4Ehiup7nsF5dJPLVvhyBP",
  "key15": "2jCx77qqDSeWjYRr2z8ZzMMFskVVswd61YEKz5AZajZE49hCYgTTRBawB8fGcKbEhTfLWt6YvpE1wQMjCZgYozpk",
  "key16": "5ZYsdg8dkjovSswGeZSzQybznmb2c93DQDD8XDjNfcpzYQ6RbtSrRsjvCD9vRYrywQQrTLeX5uwsW96Wscn1qDvG",
  "key17": "dZiHRxPD5Nc3bjP6EwSydgihz55znAC4fpgTVjVcaCgaD84qYaYDMnHWqsZXocq5y4n3qTt1D8mqTszNsEpDn3F",
  "key18": "4qr1YooZcbNMcKzAmANGnxBY11pDZmv7xdJ6ry26p4DWUd3NoGNqeFNKjtBqEE7HxFVAUq2NX5SwQ9JfnRjR5n7f",
  "key19": "2umEv388iQy7nfCbbxMdJ69iCyEj8WrYWMLAXnFtupfCsXSS6YEAcKgLg6SZRK47BBo43GzfyektCCoJ5AH4fr44",
  "key20": "32y6a2wiGTmTkSXbY9T6DLSFBtbypjrGVwNq3Z5MYxHnJ9MsdSSqTHPkhH9zSMVrNdhHJCmVuXaZmqsVkAYGTngZ",
  "key21": "3cGZBXnMVWCtFNwCkTB52UHnRpMhhBwjKAAtsCNkUhaoh82FkHKVa2ohzN7mhZ2odhszKKFH8sPwbmDB4gjAR2hG",
  "key22": "4hLH1QZEVaCYj3MmsG5D1o1SRKgf1AJpasyne4Pc45vkH4SSS5EFMJwrsj2PY4Afe1mKvxV4yMnb1ANCnJTftEd7",
  "key23": "5m1kBWdpPfSqZEZ2L6fYEhaZpkBnpz6zqtfjtG8PQLabNyoeJFahgE8duynLPUESXtom2gW7WPZd6cTYi337AyeH",
  "key24": "EqNY1HQD47G18JQkduR7CrLpRjpqvszM4sKj9hddn8aP2MKUgqH45odatsdsd4PdnWpMaSCzCrPLSmrqXNuw8AJ",
  "key25": "3ZkuSekuns3EcxDenj8EDrSWUZygEnQvBhhuer9pgL6dZkFkUPLNjsHcqvGbahGWYoBGZqD7eXsYu9vmmUS7Wqb2",
  "key26": "5PJpQYCaiVDWuyXfByfhsWcif8xcuGUL5sdoTNcuAaFrL2pEKL5tGPVcrgwXZu4upZqEtpPtDmZWEzrf5J5eMNZf",
  "key27": "23rDG1SWXknXaisHEwFTjvGKXmv9kvYhNDEixybVvn3xj7bPmito6sUALEGa3hZcYd947A88Vgn5UsSfb11zCVYC",
  "key28": "3yV9cTJWuc2gcWC8GntmsDZibxNxPmr1BMECQSyZDNPQLPQdxZs9b6iNgFMCzgT9ZqH6zi8s6dFCp53kZwArPwMw",
  "key29": "bsbY3azJhnwAdi87GZaxFM13PFxqfP6ojTFSZsbgSdT7kFFemowDUoxn9k7wb2xMysgxuFaABZotebSdtztN4t6",
  "key30": "577FeBdUcbvidJZcdV7A7CvcdyRtA6EP43f4yh6JBBVYqC3TZ8451WLRqdJkenddY9cnv2WfTCvedV8FannbAMk4",
  "key31": "3LMtU6EXQ5pB9Uj65wo4hNJhKqzhjV6whaC3A94fVtRCCpFFg3AzD7MXLAP6GDkGBQBrinmQRY5ApwAkdK78UCNb",
  "key32": "56hYRD9DTJsGRkXjEKuAU3y7LwmmtU985gS6YanLkU7MSLcxh63JzRrhuNokphK74DEUNcGuc5k8CGT4WB8VoteH",
  "key33": "2UiFkMoH3e3Zawvxw1VJmXWHByjU769YF4vG7tz1fh6aZPBkjncdZFuFME4C98UCt2HubiGQK7siAAqCo9GvTSPt",
  "key34": "5HZjqp5TeWPrvxJFkzcSerBtyJE6nC937YiChizKVXJ9tLkGN7xQxfxQAQvxWjiL59Eih1ezkVoH5Z2MqBtniFFq",
  "key35": "5D9AJMJgGtc9iwxsJPdRRUCfeLzZx1ikzi7aZNbyDNHLKuZ5x2vCStFDcSNQZyDCYgeGNkKvscTkYUbxFUoaa8f2",
  "key36": "57WC3adfXbh2zmJqFANKTq65mEfFmvKcGrS7TvFApqwJuRmQPHoLqGStX7v8phpc5KpAcdDGmRPirYC2P78duzb4",
  "key37": "5L2bQBADDs1aXuSYWrBVkE4ZkCmkA5hWviJBo4hDzVQZfgYvmAhKjLmLydZRs9AhzNXcLTu1RqWu5Uaqa4Wsvofs",
  "key38": "5CLFyFEvvR2RrCb91fyHYQPc7Nqh476sVKekZeCqNY7cJpfw7E6vnaTUtPZ9TTtJ427g9jam6nFzgxfSGStpYLJN",
  "key39": "n5EnJabzd1YphtAdPeCtLiwbEfJ5Ac4Pn7yvYima1rvE8Eba8SfXPq3HyYuA36e4eUj2DYUdH1QeTcAPXgxLSZf",
  "key40": "3u3foT4825whmXhCwqAwUW2dvvGXm9hUApJfB6DFwJDbFVYvpG5TZ4cSgRgE5PaC76Gf3ojPLsbT5DQtGo6nBKqM",
  "key41": "27Mw8Rd9izMZqM2RpiMbZumKNTfuPHhMUNBTVWo2AhMwWnieASGRMiGR5XPdmc6YRkvA8tbyoYkCR4mQQipLLAoa",
  "key42": "5VRYRZA8tXqjLehSpTEthLJKDXVYfE3EBKaewmr7DuiR6YecnkZqJdu9ydE4iARUX9MRUc1tZ8q2vApwzuXRTxZg",
  "key43": "4Dn4SnGpJX2CfdmHEQz6LneP8CiSPJk68CLPPpzZ9n4jE3AQCAcwqgderwXE9F9EH8JJMGhRhdTkhT8WBVYGv31a",
  "key44": "2GyJig1WAGTzKznLXU1Zs1CZXauUM4d4mQUB1AndpRZFRpfgh22LoCGMU4Py8ubQ2jUZDCjwekCjtZakEto25cH4"
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
