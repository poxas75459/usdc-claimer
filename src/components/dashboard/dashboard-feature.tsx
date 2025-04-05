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
    "Ae2LvmoaxzHMAN6RVqEikHpyHGKAk4KLE33iMADAgAPoYVbPus3UaA6JhxtaWW8Y3c3pvVnEgfobeiexzX8Ra37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YWaiCNeH3VjE9YpjVF1f9pCB8gzem6VCEUkJqKbkUCChYkPte8cxM8jVV8KL92shKnTihHkaVb8hp2D8VC7ojM",
  "key1": "24bfZhvmZ7ZwhfuZFwRM91YXEqtBgFuEsMkZDN3MyqntVSmHjQNphWXagoFwTBKfiKuLYm6nxxvsBkYDDgusTfjU",
  "key2": "g3jC23WYS2sFxPXK3bXgXrXp7Xwq38QYoUYo87ReS5WEzNs3cNYuTEmqKSBu92kvfsVUd2kzCAdoMLhW5CDaVNq",
  "key3": "57HHSNVse1iY4BuzXBKjwbP6Hrq3LWsHyXy6pEcEhRNEAQ3HD1P5e7AA7SvPxqfxbkKvaq7TPXZuqSwCatFQQEhk",
  "key4": "3GZWV1b8SfX3eR4U484HMB1q4RiwZiFA8tF2W29BhDAuZVdw1HKT41MoDXBH5YULi9tJ64pw83NPLnd9cb4wKCBh",
  "key5": "5wZdhoYE8qShKaTRvhmRvccx5tiULo4GgEh1T4WRHryUuTaxqTozZT3PJYNEKremkcbWXVtj8AAsCNvGLwKKtQdm",
  "key6": "2eFTwGQxg4ZFB4dajCr1gMG2MoVTPH2aYkQprygLyZf5SrNFxNyZ7APC2sP2Udbix5Hf8PCYhoF92eWkzBgSdXhD",
  "key7": "B9ss4dZ7DVYqFdD4K9Q9njr99oEyiKdp9KBMPp7FRYH54tBVgugrQcErg4wDVjZtYXxjPSK8g7GMWCmGvq8w97P",
  "key8": "37cbUtCxsHtpUcGX5qyL58p462DfVTCUdaqW6HKdxXPCLsDDwM5xbQGSZ2koj24WAqBYnnC4kqfDy6qNAA1yoW83",
  "key9": "28xtfowPCXQ1HbV8SBdPGfVjUZhCmtbkQ5apqEWBru4P2Fg16dV4kFmN53Rpp5cWczjrwoBuPa6BZDMWYLitQRCN",
  "key10": "f4EzhDmGKsP1qjpduJ64KjxxRUkwr5ZkJUe15mzpuMbsZH1vB5cxRSnPdNyhWkc3vm7FNXDdgnJ8qRCApV1hVvh",
  "key11": "4rmGJSQRm6aLEP1GLNzZC5KJ5y3dVJDUNo1ARz7hubFeVxCkc5LSUtwpfK8YUoV5tPxanGDTYWYMeMNhZbcj5CY4",
  "key12": "2b8pu9pypBaN9xGiHbviTodHzXpqL8wBbvQG5QYvAYw7eErrDSdNxahdGFi3S5ogxkoJztQPT7bQnf7UGondDzf4",
  "key13": "2RMAv5aMAWFwpZsdbvTFfK8kUP3UReSYSu9Nb3jtJ62BFhrnYkU2aSzMcS6YEF62kT95SckbEckMiqE9kyjzjGAB",
  "key14": "2eNhDoHdVw7HvUQjaGZPFafCevvVYJAJgntrxmUVuJPvGhst6VkdupUdbcjUpU9zhaT6JAGzeB31srPL82DXSowX",
  "key15": "4zypz4MjAfhx8BrFTxPqFZKhtdMBxDUKBwvPWKWaruPvXNw7JzN562KMeJf6nJT6zkca7mTLkSnd86oV2zGLkXGs",
  "key16": "zPdtQPhuo9D4cW42pFj7FPSaBJksG2BGxLJgFrdbx5v35pZVPJPpzQHedr5gvNuJK2Ps27ffgMzJL8y5rVdJUfL",
  "key17": "D73K11zMHuUMpNWaMpKFrH7m4pYKcv8qfCP1hzhav8zduUvLjmja9BFRhfAVFiQWVtxySoFYVwHyRn48odpspFm",
  "key18": "5kvSRuKGbfkzgDszX7oPC7cMSLho9pfyGpAxeL6uC2Va9a9evvMDN9Ro542uPh1Bvdte8cvSCMNExvkcxzMyGG6g",
  "key19": "2gZxbkUitkysXfR5Xad767aHPFfCKqukXidpk4gnKKppRJ2NAMfr3vsDPNcnLS1MoQsaQKNevg1bz9zSSBBjagEK",
  "key20": "YZELhcXaa1F8sK99MJpUi9aHXo4zentmqoJ6yam3jpTaWEg61WV9oEQmjksy14rshMs3SuE4oQFnZjMJoVrbvc6",
  "key21": "3QAB2mpUkQgWZxtoVpywUxX894uZ4tPgVBgQHe2mxUfkBnaKXV5nqRC2BRSH7bBrD8Pg4vtoAy82jiYjwx7gUAHm",
  "key22": "5JtQ1VWv2EYb4RLE9rMfWUinkBetxU9csdtmE4RPya3t6SknGv6qaukR4PHcCg31rseZZxvej6xWSyNCQJLDGbPt",
  "key23": "3nfQT9U55sjrhJZtTLTjBfYGAVC8Qynf6TWp6tcqZypyuyqzMuufnC4rdC7Vf1Fhee4CBMsUut8PjR4skidwWU1z",
  "key24": "3fwLPLxjU2GNuEm3ctRGK7NLBNzUFEojAf8aFQ1aP4ZJe1dWA7udcnwsVyRL9u1Xop3vR5WD5RLZEeBW2V2ZVTLe",
  "key25": "xxXXCtAbE7sQHHpFF4ooQADZkxx6BqUn4XeYPeTu6zNDY1qXsZJYWVGTowEb21ZSn71KXbKHbwe2UJFVJvMN6qm",
  "key26": "4ye7iudskgxFt8R4MfqhnyZcjsbG5twe38zemuyFm57JZV9LPusf12G7zxjmu2Qvk6rbUv6mnRebWVZSunkkGaDg",
  "key27": "4ZyNe63CUw9jLCHDpyqMSpR34kuDwCbaaxz7bTqSSdbbCMwCkMVgZ7MWtuxJCzUBvPChrsaJr1xZvv3zvbKrKAGk",
  "key28": "4EvCkETrrSEkZkFiKsqHPsDrzsq3gL9TsCDX18qCniMQ7esfqFjFfxensWak7X4o8SczPGMaSHgRyp6oVEkAdt6j",
  "key29": "3A3otVvxXbtNxpAnMRuQzz3zBjcQteTATRwieuD3fSo1BQ4BdbDKzyk5fj3kc5jg3A9zjUDNm2gHuoPakwC4sWzE",
  "key30": "YkQ8Kio2hXMfeMHc6B1wQzhqQxMfGeWizLoWV9S5t7UT7Y9DS4ZY5rwyhHAwhda1BujRPso7UNYnA39muQByzbh",
  "key31": "2b6v9iA5eSh1nUvwkvZLyfieCkCEY24P6HKX3Rowc5vReXU1Cz4wzHav36YS8yzvuf64aaAWPqgLknvP3vsSJJAf",
  "key32": "3JK8e3Yy5w7HJbnWLaD2xSfMjxrRGswVPe8bCS53tD3g2jqzeXVQLg937TQM7gERyRQ4iEUyu6JiB8RHtWfrm2kv",
  "key33": "2FPthHXzUv8UhPv7xTzFhfL8twmgpL4wgncrZVF4KyzjvVgZuFCS8Nj3SDTefDsBoLQ1hefqMfqh4fXfnVfuehuV",
  "key34": "3JmpkAdkwh9X4jcmniFGXYu2p5jv7xVnWS24Snsharn44gLX3E1HWSo5M5Ci928H5x7Ev5SWsDAwVpmPdwmuuXCg",
  "key35": "4uGMoPuodQs32r7qsjcrNnsGuoQkTRewCWRUmjTe7zARDKjNH9xx3oLPrwGpPXXWV8516A2Vn3JjBfJQkcymgMgn",
  "key36": "2c6m2kmBPhYg2QeRd9RpKKDUJuyLW6ksYwuYRcHm58VCwex9NMXsqQAYALbxF7YXPz7rXujkooudu9fuqfzuAneo",
  "key37": "PXvDehjir2qqcuZ5GkYRAT9bzh8J7gWErK7vNWHKK2pMhwx7wmX4WYnzzV2z9AUKatoiDQpETd1BrVmcCbdnigY",
  "key38": "2JjroRpNi91uuhAJ8mkoQ45FyLwqAtcfVPjz3wJpo4xSYtaxiSx7V748jycQYi6aK2rcsi75htPx4yq8neAfxwQZ",
  "key39": "mzxKGA87xbVz6snqTBvnpjYX8e8r4hWCabMWAcB1j8CMYFr6vuNbxbrbDp7p2mEkZunwc5Y9X9FnCRmZdCfzjZ6",
  "key40": "2qjzZKBN5TA88MmpLz8erf5LTp1Jfh8bqxrDnV3BtKWprKmowpMPccHrJq4VfWgDksRBc736dwVoxxzpmunDstw9",
  "key41": "71mDVEuVkmwVa5aoUB4us1VK1tWt5FrAer3W7psRaBkzF2YFjJvJUnP16gEWa6UUrYAHZqFAZ74F9Fcsk2JWKwG",
  "key42": "2wm8oZwF6zzJZEUDWSBp9c3v3kQfykkrtgDHAhLdfNQZKNEd8PU7djfRBcSdqZzF7YoLs7cPJ5BY8PhNK6iAqxa7",
  "key43": "46ydiNsd5tvT79w67gLins7p7EKEcGg5nRb7C7BiQyog5U2dDfdYHu7VshxTxXdqjDM5dWFPHtppYyKChYfaNdyu"
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
