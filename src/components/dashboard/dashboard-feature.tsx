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
    "rPjFmnWFbp7vtDg6gqporH47XzPrDQrgPds7YZ1w6f4TrYmt4hmxnHjshyPZTPPEvxJSJqkmZ2jqbkQqK5GuzxJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JN6DWDUJM4k7VFuRNrxszDbYvsJSZqMhkuZvVMVCKYAvNuiVnwKVwZqCVGuK53Fhz9qLELjCZsrWnNJkhdUzcrH",
  "key1": "5h72jmSEWYm8UKnJSBNzYZh2ZopEnRosjKJu3CkH6wEEbcR68kB4rGGHGceQMjZd612NHMms9iwocN4rPaN6uHct",
  "key2": "qTEX7qyrutR3FfRnZiehF1Mxxi2Z61JDJ1ASzuGDnYaTooxJFQidSn4hrr2KGCuGhbtxjpXSJ21bWBhLmLU5tPq",
  "key3": "3ukHSjGTWXoad93bsMBGKc1zKTchduK8XAB3MwcK4nuNSfi6yyb8KS2zpqANfDLa5Lux6Ck7koV2cxdz2gyo8Fq6",
  "key4": "2pVCzYCk9CRhbYA7jNMKg92Vrq7xYoaHQNhaAEQVMNGYcXJb7H31W74s8VpNHoPHj46tpQMx1cPknESBBTwSym1m",
  "key5": "4dr5s7QxHH2YxPtPhkUoBEZZdcHH8dv5dTuqoaBfdEg66pYN8YXmzUb6fSgNbUhvzJ7nsrJ2WRWmFFAPY814osy3",
  "key6": "3ibkxvDDrATAfkB5cHyLTbsbdHZCcDwbtDMKtf9vAyvzUNZwoHz6TymmM7H4G3oTtteQi67KW1ryxfGBmMNrMYkN",
  "key7": "4oB3XUJ4nzThxKdPRiPA2PBLjFvX7yNv36dmQNVvXpubCfGHQtnTiEBLri5wge3aSP9Kx3zHEUniN3sHzsPSjYSj",
  "key8": "3TxGbXed2Ss29ewDMY5shyWjidqtYxEPCtR4VU6cMsTaB32RSaJjbFBrrrd8oXoqC6qKkD85uPdiZJ4RAPDEi4nF",
  "key9": "5YZD4EUttf1TkRnVQtcNmrqEEu8MsB2CWgEprqBa6a98JimuzekyaKuLuQzfV9vhLCypFoEBaKT6WWVCBp52yEAS",
  "key10": "2QzLFW7hk9K3KUYHjn9EUEU1mZyPMocJvWtdZ5xGsUhFpSQdUbpkT6Sk3avY4ZBbGtZLTfqcb1pBLoVNaeDeYgr5",
  "key11": "65QLJLBzeGcnPTHGuwtYG4E7JAedSNY2z6RZ4vDeuPYKSRU33pD7KT5jsnNhpYSa6x5dt8AgttYgb4MXiMTCurZ2",
  "key12": "oCFqpep8oXNsprq1NFZNX5yHgvJGhTWdu2PkuNHDpPEzv6okifTjyVssPH2psaQC6JKvrX21yThRuMD5aJxqkyF",
  "key13": "4gZukiyMBceRG38N8ZUj3xgppcXb77NLBkthVJpdfCvxVGy1ngSCWnMuQXEfuh8yjdK88UfXoRc18qQ9ziAYFBE8",
  "key14": "4SmhLBfeHUXgVGyFV9RNFkfFb6vfLxpYDbyNx6iU1iRyLGcVM6rNecb6fsZ8rfa5LwJBgzStT85S73ka1Ny53J98",
  "key15": "9w8XsJiDaQMM6Pa966v6K44nkhyWvSGzsCWwrAtXzrBUywK6Z2kMR9s6mJ4DVeHH28MLPYLtxqvaRUVyGz4ULRB",
  "key16": "GaUmiLzbvC52AXFbjQBszXtm1dNZHMkji159SXNmvo1Uzwb7f2V59WnSPx1eTs6QqhGfi1gDQyPJd1iu2fxdEsA",
  "key17": "2PGaVy4jNDzXoXkwjCTwdycppH2j1MMbcNMkjm8cShhtFwM2FvqNxyLynA6ejVkDafpZRMee5anKZUzZ26nt6u8m",
  "key18": "9f4C74KqguQS17sGAg8winG7tChjuUKg2BbsMpiHDrArqvqBwczs7Ej7QmrDpBfX2WzEd7YghjCAM1w5kLtdGtf",
  "key19": "5Dvh5Zb6S2TquoHtHhYGzP8PvDtkaqhJo1Bhoyad8vrbzP6oZUxeTgw88rgbxE9hLLYjQTDj9LrPeDbQ88wvBuv7",
  "key20": "yFYe3MYkxiR13KiqCTAiBw3YDgxoc5EvnxeLgTMxnYRrhF9g72PtTWKviGSNhTj15nYcMypUKyYP31ri1xMw5Aw",
  "key21": "2MU5yi5Ln5epR6gKheoojNYkcc2684MJ6Cs3MuFeFvpe3n8PzjpY4yFrGrH13PjvFgErYKhjLNGVEFytnp2sSpHp",
  "key22": "5YAUJok2QZA6uiDfUDgoQPP3qyJA4Z8XtNGp4w7mWVkQPxQBr7mkQEnbSt1yPpG2JSytSewcR3jLDDm1WEuod1Pj",
  "key23": "5WGqWtJWj1jX5nuuVmmt547ZLiS8GMmE9mgCFEV6pPqn9Pubd7pcZgcaPo5NPuMJ39WDtFw7ft3rLS3ivLM7JkAi",
  "key24": "3HV6d8q55G7GXj443EstAAd1VsAYGhUaquUzsiuPZJBD8UopXhgozUJVAoE8MFJSKDaG8c4DKstp7LXKvjjby7um",
  "key25": "4WTjcnR4QahSeSPvNAuQg9MapoNia7j2Si1GJNXzceVu2RX5SA3tGtsKaffHy9XxtEb8i8HaFEx6g64HTbrPgJ4D",
  "key26": "5K2wkUv8tv5sWupr9KjueojVCRa7WfNaQ1BFLJejR596h6HFUysrcRFH6Yid8WbXKwVMD6LgF6qEXSj11P7RyJcw",
  "key27": "B44BqHLuvQfqArZLhx2Uop5xJvtHT8oEqQhwWDKkXfyaQ5JHEPiyJ9uk7dmfQP71yM98yEbDDJoF61UAuq9fQJy",
  "key28": "2rV1cHHKxSZybi6N4APKJbe41P7ZHXZx9HgKHriwJWmhvX6bsPeBUAaAm2CtgyXBSeuE2P7Ju9oJHghNuznF3asX",
  "key29": "5bZh6frsrpidsf1WWVzFmsug4jpLdjboN2yKoNESPzyykyAcBkUEVb9jTMqYzGvj6xk18pnV227ERx62cKknEbqL",
  "key30": "4iksiwG2HnG7WTfHpW9GUET4NLAvczpQbwh6RRvz3FT9GPVcsAViKnCkGbjcaK5inoBurosUiCqJ5V29kxxpMCNG",
  "key31": "2gEQH9bGGWweE1T69QauqqU7VDNrJP7nF3XXEA8sEa2LZkVQaeo7ArWCQsLpR7wrA24eRwKZE4eiYYJjUk5wXHmf",
  "key32": "37jz6VR8b8yPFaPZTd5Vv1PaMCh3x271MjpcJzCtL1Tbu96FiEsAwt9Dfjiq2HFmA7SPmhYv7n3LhVYRj2ZUUMTY",
  "key33": "4Ek3ChkfCcRwDrnqmW5M1B2dk2qBBXSGFuTw8Sr1uerH4bkm6Z1Wsyen8cq1cZcRGijhibG2UBkWukKZV7RaAKMd",
  "key34": "4x6yPSZf5w7BjHymTM6ZZNPvQUJPAvZrvJtABqz54S86y7yXnjDC8H5YdGAtkM4SCmdf5wgLN4UrPbwyChzmYu8S",
  "key35": "5KqvxeM7rfZKxHMTrbicxaHT6LxAP8CrjYdPLNwseNAdj7KNfgdCxdxexJeTefxFBnuoXw5tgjHuq9oSb5rdok2n",
  "key36": "TEtVss6EtZD5y7PwaJUXzSvhcu6PRomFreZbUtQcmBEHh9taSpSmBUGedXbBD2uGbHfJK5GmunfUYVHoqgTPSbb",
  "key37": "31tRSYPweMpVj4sJgbwiXSPNnNVUC7SmK9cS1vNVRVC4JcUFHn35RjaqnkULLJzhJpLSAqHxFKhyUF1xxadzQgvn",
  "key38": "5F6puDJfqjUv1jaVAXxz5K55LmcvHGFem5bRrsFYrESgmibNTyd56qb63fHQUSm54tXyc5UQpr76fdKGbrHNNMAr",
  "key39": "29voj7uj2SwBtM51Qxw45oWPEodgiQNJxh8aqFz2eGHgMcV4b5qnczRSBE6zit2RpNwsbUY92hTWSk79nibe44Yd",
  "key40": "3KWxrsfYNaqCypGszg4oqHTjPMLTQWJqULWy1DmisTJn5xJJnSGVPZ4G8qEaKbDhunJ9A9zquD9Ru4Y9KhR1XpSu"
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
