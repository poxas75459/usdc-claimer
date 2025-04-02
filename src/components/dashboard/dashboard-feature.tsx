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
    "2ZJt3B7ydPYcdMLCtkLWzTHmBV5EC84KTrndHPErRAo6JbsiyDctMM1PMV7SSmkMfVyxfJzpMKDpZW1jRGcA4qh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BJeupw3kNTjSvpxYqEHR6ptsc7NrfSJAGa82dVWS4K1CnwdPZWiLPLfANsyHqZBfa6objBrMXFbm9PqSFgkqfDp",
  "key1": "4KrXrCXhD4EG5vn2cu3zZbvehYZN2p3i3paZYxQakqrhAcwc71a6fUg6YxNNdWvVihY9fkiPaFSMYGy9b7UowkG8",
  "key2": "34TTa7ThLdC8NkN11rmWLHxpyj5a4QtGQG9wv3AF1YnAXBSMp35cu7YA8EdxwFkGoKJDxHS9v1JMoH1p9zizhAUC",
  "key3": "25q57LzjUwTZRtDDevci6mmn5y9skumH9iM4qKTUnNQyLSeQVFaEFuwKS5bscHc3gqeZVds96sHMcQNT6z16pnMx",
  "key4": "4EDdULnd6HoRUZr2Vhq9MauQymob2WP98KrgPaYUkMZNsKHPGDHTRVZCkd4jEMZXSds7gzjEKguKC1exAgzwTxJS",
  "key5": "Ktt5HEfgQBYbpKqjR5gczDshRUuhxhLmvTZS7ko188mv1j32zXJ1fTbfb8AswWNjGHfse9Z3d8gwDeUHTEyRAsJ",
  "key6": "L1rqiACSHGGas2zFLzdDnFyKgRDk9py2bvnN712oSPcVvJNbM1gmgtABUPXhfCYpTg1JqD2gm91t1HYhffEKxp4",
  "key7": "2XEWtofnBp7nuTt6kqKhfzoVKESaNUWYJpyt1JpkLZo6J8duL1C3dPi5rRh5esXgNRkQfaLJrH1DuQdDu4y42k5Z",
  "key8": "3bpBs2pKBmeyCAYMvGCn5JTNG3yZeFppHwrtKyCL4G6LLrEEe4yJuJGSNHdyQKLsYgipXkZM9VQFY8pqSW4pcQFD",
  "key9": "SjLG8moKPDg39GWmXyakvvNLFCRLufri3h81aeksnN5gjzjVPgCptgKk9oXh5ip7fSCbJKhiATdky2tGb29mfsW",
  "key10": "4jYsjohbWx53cHgBPcDRYGY5t6oyQ2eG8M88UtQK66X4fxvL7HFrrmwLs9PX6ces9RyrXGQNF6xSqcY7A1Gk1Pxq",
  "key11": "4snCzAPyZGE3cSADUrBPxVFFvNSet8DLaa11Nzw8icsQwH2F7BF4wcywbLbBoZLL8kG7m7GnusVNvDnmJAry1Ath",
  "key12": "3UNk9VJooJCPKtNboKcsixtxPLZ6BtQJAix9EozmxM89CMUjHKaxKbTTTMAWT1oZtZViZ4SsWhrvqsRmBZbEuTDP",
  "key13": "3WL5Q11vrqbsDXXvTMtjoAQGg9gaoBkBCn7h4fPL8MatXvuipNyuQBFCwqmHweDKqQR8iKCCEmUJQstG2nPckyCN",
  "key14": "4rwjfQQYZsPsMaTVFRQgXWNnsQ8rFMT95wU93zYGVsgLtYeapn9zJEysi7t3Yh9zMFXh16Tm6VLXpBQ9G88oeTv3",
  "key15": "4KBp4yeMbv1jMJ3LSDMKfNdXwcviFsmBv1MfsKkLdchvcEzsJom1oSbg55k7vF5Fq42Kcms21sbUsWFYubq8CtUJ",
  "key16": "dQUC6taJ9d5szWFuGrtMhBVr5aXnZ5r8Qu7LqreSE3UfdnESqu5qcnF8dX4YbTonzqT15hKqJxduLzLJFweyW5n",
  "key17": "4AKKBj2Mczvfu8DZZRXfdQoLVQtk3GgayxdghV7EmMd1gYH9xca7cG3bgzZLRdKQkft56PYoc7ZaCFJ8euJovLrE",
  "key18": "3bG7YyB5QVPnULsiR4stoZWntBCCH7xw7SHaMttzLpGCJgSAoBKvTwwgVc9pwuxu8n2BBtborXHtcbeX12ndSUVF",
  "key19": "2WgmyY8AbwHV6ud1QtBJ4qQQ24Z2Q2Z6Rs5Q3CcGE5SMpoQkbvL1pkxhWb1zfz2REMn8NfsBznET4x2g3wVtLgyf",
  "key20": "4ra5bpDwRxB6zs8r2UDucEWphHZuYJF4p2qNBWuAs5AJfDj1qztXQt9z6N31txaKMb8wV4he1KzxZzLXgDBhLADv",
  "key21": "2PAy5yX3y3NuwP488uBhunh5QZ5gFHyj4AutgvzZvmyMSrzzKwUyCuwCddA7bK5z7bz9zK8h3tLr9f3B2SJPbpBM",
  "key22": "3wY6ZGbEdrxHs2v9QWukMMux7Ts3HAdj1VguUewKDydgpV8VYgJn81xiqTv3NeeF6ptKJq4vcHowKY96TZdMknMh",
  "key23": "5magMdfG4BRUcxX4JY9xchEcxGWcKtp8hNqv6x5D2hqRy9Bu6UQU3aDKM5QcgRTw2hGniSiNpJWKbxhqkQV2gFAB",
  "key24": "iB8VMXNWTGKaBNKwWA8k51Vap9bmhKB1o9uYCaRhUR3bCJZXtpmQAa5Gnk1MAocqdSdU61YWXP2DnTK9xknaeQw",
  "key25": "23w7NDWxdmMRUiSfhzmHh3nJUH67B8LAPaS3VuvfUxCxPQs1TNWGrooSkqv6AxLr5AaF84Zzzb1VUoEk47D1oit7",
  "key26": "GDVN1p6QxrtvfsgrcTtmcw16VXzWGoWxJcmgMpMkMAr297AhosVNz8mgYhxProKJw3zu6RMrG4R8w3AdtDeFr3a",
  "key27": "bX9Jw9oiZwdUwTbUQ1nw92FawvXmTsvdrceDbBnNArF7Tvj96weP2xn9KR52MtP4Gsd2isAL4z1rhX83RDRkHzQ",
  "key28": "2pMUxDxKrb9XR6srtA1CdMowD8UGeD9ADtVd1CfzjTCNxFfxfR2RtncMAHaa9cBGGhkyv6WZqYkkpv8kC1dNQGYf",
  "key29": "4LSEppF2pESX8LbMgCBBrywkn6fwsB2bbRupsEQFABzDgwmKr6HbMM4QuaYZEvQrB3HK4n9EwQ95iBfUgKdeBEmU",
  "key30": "37XYWb9zaSSmBwRoVr4Cp1iUY9GJr5rvJySgL26jr6aQJ9rCmtnHLXanvznVJLAw7URtRfZNsotqQyUMHY8W5EPB",
  "key31": "2qF9iNRcNonErDu4gDvGwi3AuJV3j7QvBb9ZVC8pjHj6GnQLE56XmsVndsJ4nEiisKrUsBYrUMCda3GSCHdvsgKX",
  "key32": "51uC9WUGS18uAmdFV6ePhR5feNcqgRtJ9wkTwZ7VvyHm1q4BDtGp8H8GKWYon781n8YF8qN8fAwrCxX7Biaf1f4Z",
  "key33": "44g8jwpTTs7ZsdaWSb8vJPNPzT94YH9sDtNRPNqR3qNttaxaEGRreJJBoDhpueJKfTV1HY71DNSGZ8hTyCo7MPTj",
  "key34": "5x6dqyRnsVoaeXsp4dLgsg8vwr6EFaSD4Xxj3fY2xH8LyowB3A96yLoAwvbLQkr5quPtQ1RJwsNgSshCvpP6BLiB",
  "key35": "5VfWNgv7DwtybTLfcHmCuxbn3dcaccGLvGGD3FFg9TBndqWoLvzdr37dvH7hQa6iXZvS8n8CsFXZGB1LPhoo1twW",
  "key36": "2euqMg16r6mzBAN5cfcauAYe9jdN2Z2os1ciWzTpYHZLJvLZpWK1BrDD6eDWvBxCZaE4afVWFruPLrsXrADdCdWC",
  "key37": "29h8daSp2okv7EB2K5FvePEcvWkWwsHAeQEmjbUWmB4DWTfWy5uZ1GF3GzJHCoboSDrCrY63v8DyRT5qzatMXmqW",
  "key38": "2wiAz3BBFYTjppMqfeVTJjytTxPg29UpyiZsH6mXt7UbkmNzwUSKx7AghRwoZ4rzR2x8WvZ9pTM5Mm7jHrKu8pQg",
  "key39": "4zrRmZBV552Q8hyeT68P5yBVNTRxuuDRa3pTBB5fwLj1H5p4oXNQZTNx4augxb3sXC62b9JogQx2VVDMmXCH4WKG",
  "key40": "5NcGrRPRjjUApgpjbaiuDLsQR7j9QaZ9sRn8t4rHqYZHEn5MJhRHyrzzUPGJXuuGSCTfpB9AaCsboPKng8hFVohQ",
  "key41": "VMq3Tmw2VtGSQgBUVVUBoWThWoGQBFxKwWiarW6HkQfHaDyVV5akVMfXyV1KwueshXTavyuQcJPGKHwtbsjZPF1",
  "key42": "2hybj31h1DJsrdQqdrnfjC7Kvw9LaLwEmaZnUKy1Fz3L8ggPDkUUf6BM7q8EZW3W7EutsP7EmvHspn2H8T1J7dVG",
  "key43": "2jrL33rjsJ2kEe3vQb7hLsbze8K1BD6ZrsB31r117vKAUFuygLMrPDhVgyjRnAvaVaxzfFonNTXHEqY4jt49afZu",
  "key44": "2diNCbjYVHfjC9AyWP8Shy3mUCheyhtbexWM1d2EAGqwi5JHxAr9F7zFNVC1HyXsfbcPu5ffhxs3BTH7uTFzbsVw",
  "key45": "4sVke43LPKAf2HFUYe3B1ANnBdYztcipZQ7qsfacPr474qx8oYkqbbykZcyTA76proKw3bMh4UpP7uGPnJhQ1p9y",
  "key46": "2nwGjbk6XwDLYVGb4sCasq9AWJTydZLvhmgvH9UtzzqLBeYT6gQpPzJxqC1iZDYsu2wSoiPJmjuoGnzDwg3b9scR",
  "key47": "2yuQCEUEQGR5T3cW5MdSWH8nFy6jb494JQtvfFRgedfcvTKe35SnA8r4YNv2q6Fmo77wA673kt4MXE6KD4cErWru",
  "key48": "65Luwo2nFp2M2YfBwp6MLMrW7Wj4imqTJhfwSMTgdLgg1RrLTfcwVipkfCWg9GzQxhDPdjTWWbr7pbhA5aFbt8FB"
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
