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
    "4nswku7Reukc5RR8vct3ReP3Y8Xd539XR5RH61MYekt5hJeotSpD8YVFTsQviwPsUJsrUGp4Mq6hcevSmTgNXYHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XEebhkaQXaCQmywGhy6ye1kyTnptQcn7nSDyCntZznzHgKJ7971mGQmKY7YFHgDZGc1Q7t2aa6dfkMsXG4F1nnu",
  "key1": "4kYJC2ii9wAQKq9nXA2mHMcB12meUHsog2Xw9UDa2ZftEbxjRMdzHXp5ksrhsvcjWmBSg2ribmbdieUNK84sovnJ",
  "key2": "4rm7xiziCCugVfKZTVcbThHPcTc67713wvNf6w5qECBtXYboCS8CWnqSEGGejiz7keKReLsMU5U1KeBGpdG4cSS2",
  "key3": "5hDYBJbRjPcbFmtRtKXuvGXFLB7QW9x5DwWyNYNh3tJkXshorqQjrzwDbWiXa2waPnXCx7Lqjm4ZqNwE5GR2mUb4",
  "key4": "Mwmm36nQYcM7VapZhSuq1A9NZ5QKoHYiGpNnyxkRPz3AB18x8dB2TF5dKnmH5KjzYY6PkUnHJwEUSzeogBLuP2T",
  "key5": "2BZzwxovGeUjUmfDSqJxj37FhJuS8aoyz3KonzM6L1NWNJyKmNTon7Px5GiUbyM5wRVv8AXoxu43ABbRcEvHzvi7",
  "key6": "4W9S5RedN9S8B21AbmL3rtgttuQ2tBFZX8nApkiqtDrtfRzE4Fe26PanNWJd219uEGek1VNqtyrQWBG2gPgoAYsT",
  "key7": "3SMjawtjBZ75LjdgwUzzRgtnYJ8DkVxza6F2GCCRCesm1xC2kuu8pMVP5kdp5gnnHtBNKMp2S7xktuafYn5vgSs8",
  "key8": "i3j15Y6hCPhK87ft8UKkYCy5x9GNXTnPiKqRzgbfTQ2WFDAFVej9mshaikT43pdM8bFqz5aEe5vTH2ZPVPyosWP",
  "key9": "ogKZbf8giYZNXqWWU2hwiZpAmtRwFxexYNT7ByLDF6pBbLTCoccfyfm1fRfwi8na8YVbgWLYPGkujr1R7zfzZmo",
  "key10": "3vj3ZVaLkZVPA8qzCRnff6uDqzvjv3BKj92eaFLeA2ZYf5ADRcKvpVbbPGKRoQTgQkdfqDqJkeKXF7Lm1Ty7SPtA",
  "key11": "5DJgXCQPDgd9WtNyFxVjgTacG9rRmdmMETC4wqs7RPmnxKDVTdjuSPk9akpTqAEdvSsUY9uzAWhX7oXwURoVwt3A",
  "key12": "4nqQCb6voCQzJekQgqADkCWfGuvzAmcBPyk9fohEQhAeg7CFSNHaE9A4cDRSCUgjxbaJmpjz3apCeXFT8jZDZbXS",
  "key13": "4tAYatwf56qbYLJ4roaX8q2gwo2dypSCfc1TxZ7vWTRMFLWEhUosZsdQ3FTebJtGhm3D2x7efxY6Gtm2afsqnEVP",
  "key14": "4prteJvXEVi5wFa8hAnf7sFRwaumu3nMb4bc1DQJNxTJvFncyw2yPgCEs77jSA6dQaRsN75aDXVNecV8JVYNrN1L",
  "key15": "xYfVqfzrZR3TSxwp3GGx8okC8gr6zR66Lkq5Uk3VFkuMkd9doueKH4UZtSQHKWzVkAX7kho9PjjTxERrwE16jCm",
  "key16": "DmDcXx48A9sLe7Z4pyoYhvz7GYhFj2KV9wai8ZP7nCzFdr75Ub5ca1T5E8SZuk5Y4VrsTX36kWdTEizv4YmEVhu",
  "key17": "RQR2yyTyvxV2CaX9K14siQa8MqSHt9ZwVC7e9gKTwHiQjK5zoTeGGa2nMrUzHmLak2s3GxANN18sZv7XxVHipi3",
  "key18": "3qCW2iERtUsK1VcoaYvU4QVs3AKHrbL6iVnGHF8YRWdsCzDJSgqg5WMkr1nQFWpaamEfN1Jepa7UDzpRCU945tDR",
  "key19": "4HvLmX2Zn2KyDqjAgE3U7C3BGp5EhY94tWataHXuoYmWUk9UgP6YfEnNCX9fNPKKRowF7RHzF4hDaC98k4p7mAS1",
  "key20": "418it9UbgAqbu3Sh6Nd84w7UENH8UEXWitKVDUEunhPdA1fw6Mrexx2hfuC52Y3c5QT9vnQTrfFkRaeRvuPPLcVV",
  "key21": "4PkwVp9Sb1q7cJRfd5YW5TXyYw6cajhgu9QJmgduntq36BZJXyWhYZnryPd2nxjhgnn2MA2WMBk1GCjQFofUEBGL",
  "key22": "5FxasrYb21uhCK6YWq3t9SqSX7SXPemPj2vjKxbvLHxQdqNrxrjZLjf74k6T2DmvpCiWxwySdUjNkDsJBZuZE6HU",
  "key23": "3qq9b7AbefJoV41KsKqMRRDyD6koi5MCGhV8NLzZcAY5udifLCx6DAKhErSuASGv1mu7K9mQKLqeDCGcDcQfWrTq",
  "key24": "37Ns55WkxLfhDPKok5pxfpxdy51RKHnqwGyGYdVJZqvFeRbqY1jL4rd2KGXvPKCerd57Y2k9AZz9ZiFvPnMJ3QWF",
  "key25": "3wC13TLUNUWFp2WatinLXDVY7vw7AoQ15SPUEFrJirCLUgs4YkBP5frPKsaeoM2xoxAKaidfYs4Sqi4qJ3qNAegu",
  "key26": "2ssjX7y4SJKzj3KW8TRpWFD7nPdjm3ynxT2z5xVcxzSBafiXL7yMDK8Ygsq8XiGMtXjZ4FwrqY4nJ6mK4BMJoZLe",
  "key27": "4YmAP8ifYZLcYY2FHyX65jVKecXxB6NhnMzWc71BTdFKMnMj2tbUNdQKp4nmjctqYB74JF1XNiTw4Wj3tZt1bufW",
  "key28": "5kHmirBh9G14aPSjFzwEMGU4s7tKsAwrvQDop7tEpo4grevy4Tf8Lk7T7AyiYZWtvmV9azv95rXmJmfQBa9b3PNs",
  "key29": "2BAKK8cAJJjjf737nNV2wmTi155AqVZAsrYfysE2mtUJCpmVEBQPwcQVzQXJUnCwVndZeCTpbazhaXz7Yu94v38K",
  "key30": "396zYUmWL45XtsRV6YCLM1BcbmuP4X2WEZCgDrBNKCDBDqmcpJ2u6LwMjFuN18uUjdMBM4aSJq4gwQbYXR5mv1HD",
  "key31": "dGFoTRXyoq5LPr5Yy9mx7itrjH6gpxs2KT63tLwBz4MHcG6c5h882SxN66ADHurw7Z9Rupi8KxDVpBpzdcRgZ35",
  "key32": "4rVHZhbdgDWoRoZV8WX63mu26fxTc94rfrMYXrgcCt5iRaKHh3ZWujByix6aYDciTEuJAL9X82e6cEfAiLUD9YWk",
  "key33": "xn1hFUXzyhLMpat1Nx1TmYTJw5PaUSSi3gWEgpKwvUqJRYBbMmdSJKeMNWZp5QZjHJ5x6ptV15dQhCzouUozAqQ",
  "key34": "4wJv29yG9GBJc7hCyuAKayXFuXBEtKhEmEESWPCQfRNgqkN3GX1c9iw4ZGQdNo7yiKk73Mco6GW1jsiMVBg4FgPK",
  "key35": "3z4YEXVmi7z4sV5eaAHUzUHAMFnoUc7KcDzSfDrgSftX41bSTWgVYbq4riGXhBwZX5iTzbcLb2dsX1sz88Mf7XdW"
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
