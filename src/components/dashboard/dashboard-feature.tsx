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
    "3rc25th2vxYDNCwdMTW7RPVu6q79fv7iNncCkeCvLGbrriU3oEzyGyfx1e9bDdLHvE9vnhuMoM3z8pcsahXmdusc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66FQc8eUZXV6JB6NqnWTREwF3g2Q91P9VREMMKFoc7zEDy5gQ5Cv4e6XcuDeTisxpU7Acn6hjVuHatxzf7MaHQLv",
  "key1": "3o8Px3iApHvE4gcbdZJeHLPCmsSm8pgA5f2xg6SWrN8jWiU3VTx7iv4xb9Ae8NP5qEEsFgib6FH9aZV31LsAsEAa",
  "key2": "5CxgVGsPjJ6UQb7W87ezuLegho6BFC6GCoZC3ejpmZcNJaUr68kR2z9HJu2gee6RPdic9ApvEcrxMQ28sv7u6z7G",
  "key3": "2AE1zFRG2zTVpUANg57j5RnKMv761JssM4KhYVvSBohp5GQiBaJKgxFVnNgVDggRTCuc4KLBHasJm4u4kSpMQA6k",
  "key4": "2zYYuSzkX1DjrSMBXLt1CzayAUMncSBdqp1w1EmUVSJ9ygKA7UVMtvfotp8NnRptDC3btefrF95nAkqtY7JmMYNq",
  "key5": "3EvcojQLBcvNL9f88o7LZkTt8B8yYMBmVxxxhVmJBKnAdMqmefSYPgpC5rGpqz7aQ7BTEMD1EqiNYLU1xryJBTGb",
  "key6": "27LE7CMQFENYn5kCkgw4o7aHqN6eKPsT85Jt1xdPEQG4k2DhuSzYzXN7r8mvfnHiahigCdL7QqhVHeivPo7GXjQm",
  "key7": "2xmauyFUgANQUWvB8TDfLrwxZ4T1yN5WNwinzweW61Mc5jZ3pQaQsUkFVJJHo1QeTqcbH1txBbwjLWea9jq48S9J",
  "key8": "4az5PpX3oVYq6yHNKvp1VDSZCptXttBkZmZQVYLEx3PHPN7QySCEsRCzE931imYHLxYgxS9Z2jm2NHMkB27mF25z",
  "key9": "61PmTP4orJcLhUwUV6FcmbcpsoomzgSxc6beWRSHjgesiPfDCJYWbjpbdaGhGYWJM5mpYtgk2ZrSiSQNdAvtU8H3",
  "key10": "TeNDB6kizSUid2xiJWXnu9ZankaXjeRoXdDpbDM3tYpEsBRvLghEXqsQ33uaF1coMhybFvkqvvDsx3CLoTJSS6u",
  "key11": "61ncaZWTYXx7frjD55pUVpEARMK28ipQphv3bDi7BJ2bjJPs2Pr5iQqjjTiw3ZaeL11SLcxDoSAt6EmcgaCNEqsC",
  "key12": "5hbcYQc2vuYytSmyuMmQ2eoTLFQ33Kj8wNntZsnm5WF7YWXNHu1ENaiDSc8YDGZ5xLSSrvVxxrD5eqwTXqCe3LmX",
  "key13": "22F3niZ5cYY9kv7ykof1FxYG419tvVReoYTijJ1bWRYe5sRL4HSRXKJNBXoWYH6v5ui8cjv6EG6r855LyaSp4aLZ",
  "key14": "AAx7DC2s9Wwj9QRvCjE9zY3PexgpdYMkrrgFUmQEefJ5yCyaeeLsZti6rMB8apCUoEGZqThquBnJZQyQfVV59w8",
  "key15": "3kkvD4vE7ieCju7UT58uicfgFwFw85WxJzv2oDebHNCfgA31a9id6NwZFLJxokfYWH713Y5PrmiELZSamd5C5H1R",
  "key16": "3RZPUP2bgctvZxSh7n9JJyFVdrUtdF9GbXFqXvbiCwXgSVio7NCodBsXhF9n4KpAhKzKwNMB4Y3uayk19Yh8C5xs",
  "key17": "2S4erugKk8c6rYSQyqu41o4K9WmeAqNr7KUMjDGyzsHe2XKqVXxLnF8ziT1LECaZhfC3CcAVyH5AqXrc23KfYMsD",
  "key18": "5iKRKHrNkbGUSgeuKq1i6kykbJwQhq3ZYaNPN1HG6JG93sLg8VBE8fZCtGGumA2V5VZGDr9UKh1UceG9w1GDXqAN",
  "key19": "3MbFXy28b7cuYaxCjjroyRUYPRoLXNr2wxm9UBDA6ob1jan7kNALjxQDiQcfSxoCzVnqMMw9mNUrqN2de8F5anYN",
  "key20": "4utaiD1GNWyhdC7q9qRKdXiYCeuH2bhhSivyumSHVuDkvw66T6Jn2wfyNVv58MWbeXe4GMpPGA4S2YWRtxVVJgap",
  "key21": "4d5iBSWrg35UX8rGAjrfxDKbTSqgT5rKqacKtA8nC7bzLBxsWwe6SsYBQtCH5beQidegRKcG6qXcPJvSxg3pZZDq",
  "key22": "5fEWQzi1VG6r6MNFwqcMS9bks4RptuzH8uiP8AjcJAr7tU42jG6eetwj371gjvf34AJaALyNXDRh2DvCeVWv4SWc",
  "key23": "3tBmok8yiAsgJq6PvnKmmuQJZcL8HCqrqR9MuhEpXRjrPB3vH2FrAYrKd4DiSDJxrbt8LNK5W7gfkKwN4yWuWwLN",
  "key24": "YAkZ5uQ3bkf8MXFZQ5enwKcdFnmh2cqauEK4maJ5QfheGAGT28Xd7VbjEbQb89LBFN4PqEHEmv6onbRPuL94RaK",
  "key25": "42xcHMrP4u6ZTa2wnWUfY8sfgcECArVmcQ67Z8DzgVYa97PTK3uFWWfxgqEhTtme19M8P4kxtWXf2wSXWBGfaJxV",
  "key26": "2kE7z6LwGUPPDcm6iFeMzizCrkzSZB2EZc6T7Q6VajTFZ46jpTJBgL3iyVXbCZX4ucFpdSc4bCyUxCHQL9aULvRB",
  "key27": "4evanMTUFxxsLbpecdhpDcQUcWMUqDFsdn1fNj1DAVDSAnGfnfmPeB7QhBnJDaz2qyfN3eaWQUZVeGdTwFoMVxxM",
  "key28": "628PL51EE2D8c4CAEgyVLdX8gtu28pFZNozUTwRZpZzjHw62dDy5CxL7UTnWbx4eL2ik2duLXZ7WSgc9VsvRobav",
  "key29": "3T2qmGGUz7L7Vq3NmfshFK7MykDscryJsvfJo56ZkaZ5nfTSjwocCyrvMZgzrBfNDJe5tEBWewpbU3Zmu4S32v6L",
  "key30": "5tRF2FLgrMZjgK2WFMRnGqqx83Js1Y2fBnXAGuzYKgJhpw9nZwXEHYtrVmvPA2Hana9MNho34XbhgVanV6dx47MJ",
  "key31": "5Q59eTkKHaR2tYSHtcL5L9p49N9hoH41cWArGLx16sqpELHuUGFPjAwGoAovuDcmMMktP3PheAPdH42yaEFms4tq",
  "key32": "3RszDs5Eyak44FTRGkQCHNFRWRyyvg39Vsw8Sq3fbZ8frZTLFgbRqxYvjXtGwcwGhsb6BzLWD1r5mDr1L85ZFuBn",
  "key33": "26YBCjrsrZ7drg4MzSeNup2JvkR1u4VUeqgmthqK33dj69aMDDao5AXkMMtQRNmAuB37kPgXXxksnUxqPnBRxMV5",
  "key34": "4erYpeUvVbDLxb6ZsPpJ3u1j1VSgVtgeEr1LX1XcHKJxinPst1RC5d9Nntu9n2uK1nguXX5G4X5dKnwP8tvNUmai",
  "key35": "5d8pMFdjvZ2PiiRa66eP3jm24zjuYhgE3wckJy7sKbCTMqjAxLbxhFy2hPfB3vmzjzTU57rdhRLKREovTmHXi7DR",
  "key36": "2J5MTJjcsrnnLmH9vLnBh6J5VaEfbVQYMP9u9ZbUnn3xhwp7vcjYgWN8FMF2khcySRwNYJLu5Bpj9VrzYLKQpRUW"
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
