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
    "5rTFT529TPt3R5z91876sLf7XpHsQyfw2mD9o4wvMTE5BQMq2KHn7xKcnFdJWgp8xCbBBUuM1RK5EFmsdb5bKjGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBme2RvQHc4HvUijFz5wyUVdHWrRNTYJ77U2BaeWN4ep2g8b6t5tFNZ5dft4Qz5hYnko6PLKeJYcvim4EWWFiDV",
  "key1": "5LtVdnHL5eSKejHjm9zfLLPG7H1kgAmgs8vzSEXAiQHdVofXhCwGfB9ZSg6q7VtyQxYULPvYzjtxXMFT8TB8Rc2o",
  "key2": "4EHnD6QLdFmvuU9bbCCHJcj4yD2x9A3SieKr7oRkrXdtRvf4TKRrp7BYMcFrTiwJLjKgt2SexCakDN1ZfJ1d7Epa",
  "key3": "5QFLRmjmpg58m6VnUbRE4MwCEsmcCUD6hH3wQ4YDknycrZd2AzKfZ1ZaNxjz4YzM8ZwT6EEmSgRLZ6zSJY5dc1Mm",
  "key4": "PC6qqQoZ4V6wWFH2EBrgQU8UscFcgtBt5RBQcHFsCpRogSu7DkHSChETRCGjRV9Qdk1MbcWYFVFkXCrExqWJ5b5",
  "key5": "2q2ZGy8TaB6SY2EStG6PN55gAXtjHiHkdJht1PXx8W9z4P8znd9nkoCPNChkoMXq3H6dTXfWj98Em7ut2rhfwiHQ",
  "key6": "3tsau9NFLWfa8fvTouRc1qDPEZFPLEccJP7H4TEvPdsf9qSN7CADyYWSgLibBhdFpncZBQAwLykNKCLPat5JvQcB",
  "key7": "2nsMJ2oNm531NdzY6q2yAK3BgnBCAnuRcpQr1d6beNwnCk1a5ZYYvuqHHP42vmcaQCWHpM3EVSqh1U2KULfUMHqE",
  "key8": "GGQQReF6bMbn9f5eGZypsJuPnqAerrM9RwjSgaNB8P9nt7c1zbP6wRJzeYwhB8UGSctMA7YhSGCeLoRgZ6TQEUR",
  "key9": "645LMSG9FQawz5GakViegDuV3AEWucumnesfY7aau3BedzBkJQP942EJC7z5Lsr1suvjCm6mxuqLqSWu6e672vnf",
  "key10": "5a1buHPaZBHsQny4QqLrErvsEL2PdoiXBUb6n8kDZ7Nh9ywATbDzqXUN53t8WBCX2pUFQ47Yxiyqj9HQ3SiPaLm3",
  "key11": "4Pk6ikyUqjVtUgXJnHegMJiqUBjdJg5JKagkSfwMAuP4PnLSTUT9kA4qfRBZF896WmUz8wxx8F1NX7Ca84jxYWva",
  "key12": "2PuiERWMhEPs7ceWpqxhSboTJ7kco6KDaKtv7SGd31ZNUf4DSLsbuNZt6XQgPspdNUEwrWar6tUmRc1y8ecZGVZq",
  "key13": "5RyoeKtgsVtrY6nRsxo3QZ66nxhAwHwDHB21pWpTYrG4THJoFrDqPScUiSJjDPzv9SA2y9LiWbyia9TUyDbtHbPQ",
  "key14": "4F2ae7CXw4rh7df4ze8qm7hbrVFpLEWvUFC7HNHaTqhxem6UtgkXLSdj2fQDzfxKxnkVBxFuXW6E3GdaEFSosmB3",
  "key15": "5wBJkzS8gWSauAHFeTXPmBANd33FXtGqy2Y2GqqDkDuzd3oon1aMY6RU1wiHCNdi2YgGBqFrCgyte54zyBjHkVRf",
  "key16": "3UfVQfNksRPNkKZuBEJcwaRijDGbDVaTAFvWtDYCR9H5FJaKytFWTFxnBsW2TVAt3EyUSwJ51uwyeGSQLWEwEDhp",
  "key17": "5vQ7xGiFZnsMDJvANug6CFPfAPaN8K7EhAsoUij7g37L1jvYUoEPCcuF2iF4H14a2zSFpb88gsf1RtyRNi6kJP88",
  "key18": "5mjrVrpqjR8LHWv5UbcCC9BC5Q2FvWjE4kT2fnfKQFtGUGrR9xGr45jsjSx9Th5STJCwWrQdWWKuY6rbBuj4EAAa",
  "key19": "2b8QN2EqwgQ9Z17xg5qFyGj8edBKvAg7LrBWCBG9788nUV2tCdQGme9EiSqHExc5nixX1Q8TkKzwDP2hTtm2wjSF",
  "key20": "3BCEspEFCwvTUyvwp3qCba8sfEyFyrMaPxJT76EBBNKbg44KHLLf5oAKme1YW9nEVnzM8Dxpnnq1iUi8Cmb7QPcZ",
  "key21": "2pfWy5wRtWEb9YcaotLPvGqxDLXE1d4oMf1fPYXcbZKUv3xbndz5kTnQ3ABTj9yP5TMAa8Woeeugf4axGigL1oaF",
  "key22": "4CGkozva6ZbzX8QhXg5uauysStAYEz1KSSXjn7vNAUiYb25a4TPy7RCcrdFFe98Y1wiSqDbxt1aa1eSy8LYhxEtU",
  "key23": "3jEsHdXV7ZSdZxKcuYjbsGzVTW7HHetyMnQPjZXKJAyBhw1JpcudnRnt3SZzxgGh3T95LEW1TWKrr4fbEBHNTWad",
  "key24": "2gopsPV4Twkzf5vWoMKjGDY26XDs8BtMmHAUqL8D8qpszYDHGYYro3nBKTqwxhYG2fiXha3Znaqz5h2ZvZ9ahybS",
  "key25": "LAq4CBUZzVg9is1aCKeZLXrqGSmCJJC4KCHwkTY76qoStz9UjNDcbF8ZYpKLpmm74DzPc1RCt2MHXpM9BH2vW9M",
  "key26": "3nSd6uPxc3DiKaNBnvNcquX8c4UHnENQfj7f5Bcw1mDUgHYVFVND9FrzcMsRwRG9gx4gkr9zCvs6B8LcSZeFzkRN",
  "key27": "4ASJQr4Rp9m53ZiUa66r8YpMbPhMs6LZqVuGgXWEcffdUTVCowtQax2BXBbuDhPJQwBp16WNxnYr6Ub5onsY5isa",
  "key28": "3jtNzPMXAJDsKsXNRKM382YN5zhC1VMhRPQb6HY7HtJf9auGHXTrCF4xnFm8S38DWBXgfT2rGTBu665Aa2MZLgRu",
  "key29": "36AGf3MRAgLX14hZcuRcxC4CxoYDhZXBZF2TDnmNjunyY85EAbV4YKYU9St7JD7p8GtWC3uNvWjMxPFSUZUJVgG4",
  "key30": "4euQtRp5Tx9o9UFM8AEouqFJWApTktntFwsVjG16KtiGzY2Lux5qu7WC8h6BuC7uhxeSNyxQQM7kcbdCi8DMWKNu",
  "key31": "3P33kjGcniHhxzgc4DV7xVqzK1PXVfKsEv15XZmKkgtJQQxZRtnQ72e5XH1PFNMrtvGzCCcKJcjsWU34TrprvXgf",
  "key32": "2dkJFKoDFHSiJXCQKzn5S7TPS4YkrA5CrxCRY4Ya71i7kUmutVokqzqB6WkvJbDz4kZshhvTpw2QUMaWhrMY9gKw",
  "key33": "ngCCgGXFpCTjzpRdL2GjzyzNYRrXQuQfg9AsuWNCELQuxeWEhVZGBk1ijK9PJzY91nAL3QKmTgqQoBKwkt1NL47",
  "key34": "49CTXqptYzossymZKd2jhhhxpzMP3XnwDt2VYFV9NSVePdjrehmaKg3Hd1vwE1tNugUwVwFTa33nFEtyUA8R6cP2",
  "key35": "1rkQbouCVC43HFm2uu8qK8BcRDt2QQ4wiERm7ZA1dtEsHpUsFCBB6pZae5rAYEasvoQTkjWeVKXgn9Us4h4AnLo",
  "key36": "3oJeWCETMtfiPQJB7TD6TfuB66uNPkPLLYBNpD86ub64eXaBHnQtE28R4cexUwTQyC9mJiHBnE6EREn4tB2rw1bn",
  "key37": "2ujHj5bSDsxwQWP8mEjXKKHjNEJMP4owc64T1jBdrRzQoZSkiPY9ZVzWnomaWFAKZErx4wecczGK9NrteQUqHbT8",
  "key38": "3TChNXuShZDJmpwT6o7a8srYPgcscJpgo6R46X6Nrx2HAEBiTgmVoqBptirjh8me8qH9Tty66nEo9oqavhzJWiAN",
  "key39": "24Bc7co2itDTxkSWaPJXFpppnY5zJC1TC85GdQ7pcYJDRLqAWqozxAPSiozorGJwhHHaxRxkcJz2YLdZ9R8eo9tQ",
  "key40": "rWJ4g1QVMSbx96KohAiQ2hWJdWYUcCc56uvW2ZfUyxD7qN61MPsNer7vJW4FAtXrJPYrT59SjhwpstfZ3y9tccU",
  "key41": "mU8A4LSZr1uBEGiSGemMrASb3D1ccxBXjoxqyVLRE87HHk4gb8VXwcQzJhBpkR3MSR8hDYXGhizkmPQ84kbfzUd",
  "key42": "4XdD74HyDsW4egSMAjZZN1r8YcFssumLm73eSzusMWPtT3h6ppamb24irMdk4BWdbdjh1TN92byZ29xYeXL3XxTs"
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
