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
    "3VvhvRNvJDvj4fJiTzL9hv9wieymwv7gNbiyg1nDZSCxKb51sq5BMuAxeBRdXdXA5kDikwzxtPumu7EaKjKFQoJs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TKRoD5AKNqKk2por3wuvrYXGxd3C3YZkG8XtzCy9ApuWiw4uQiEkXX4zYzRUk13h7Xmgg3R1NhBnjwpK8jMif4f",
  "key1": "67kWafTgXyHyVhFa5barPNMWw8S67jC3kJADJdfzhZdWdnFedaA6V9FTfuCP9ZFMEni1b729aXnz8AqiS9RnB95E",
  "key2": "5uWFeeZnWmFmFy871GEgoD85FSD3xi3RbVWwjA2deToCSU71849scL7GTzBoLtU2PUC6tKinhzkKeVWwpzVUo7oW",
  "key3": "2zz7ACskNzew8gNCGshbaw78PeUKGLJGrheZS2QrZAegDmidwjoY41yXWy6JfWzTBBpqaC3om69xzE6RJUBcueg1",
  "key4": "5ZvfHwwm8NuP4ZBhyibDfSZtuR3muwns5XJMmUAi7rNfYwHah5M2aHAyBVzBnSiqBF32bWaQJndfYSzU8L4jNSxU",
  "key5": "4Ji7XLNAFCJJSy7vzUi628DE3hdzbR9m9czCiwqizAyEjbwiBXcj97uzMesAeRwKsweCJFjRyfe1UFnqSZkD7AUg",
  "key6": "iaUEEY7nHKpHQcowdbTyHcUbX9uRh1cE14fuif4D72RXUvUAyZLwjbHXTxw1NpHvV86LK99ACGXSmSomhciY5zb",
  "key7": "3obbzqoE6cYqaJfGyiAZrgDT7eENkFdiptm68GYiXWmdLqAp5oEAT51RBBdVdCnXioH9yWageYLHSMjL9Qhhnd4T",
  "key8": "2HxwP7xeAq2iJz4gVEMEQJUFL6cwGcrhizRdqnWv4nBP8eQHECR2m3rMhsdtA1jzcg2CqDKT5FETMj1wm47LsK28",
  "key9": "wpcxQLMUpbcaZo9PfuMSPZnmQoC9JfTQeQ9v15vxou5tUCPHgQCg45ciNo7vaVBTgKxmQvGLueZX83KbL6Bzhy9",
  "key10": "zxWMxkVrxBHeNcawJ64X2URJ45tq9byt6Dgb2eNVQdnv7njuuyCnNP3LhQLd63aeoLXC2vR1c6NvKF935ngBoPd",
  "key11": "3rufY3GRe3iAbJ9FU77eD9QrREaX7keQPdRoW87u9TMQUa59xjUgQ2Qnx1RBNukcASD5XiwvrjKPvPnUHMkgRxVT",
  "key12": "3m25CKJV6AtvgoKkumLPL7vbrZWVUP3c69G6vHTb9haX2ky3idR8mFYV5Fzgv4MoiosRbNMcKamRncthagRSjdsv",
  "key13": "vkuTBwdUQHoFQvZ1EFzvAuHb9STcZp2RsWiMM76m76SNXhD7iJnLBg7J24PhpqQdd9pw1wamMbrDtoKqiGqtFyv",
  "key14": "52jEjPihuMBrno2dTrzC2m4ekh8JdzZSxTXjXtMHy5dAucwNEMcmyuAqTP1YoHpSLi8mqw9RgptCvHJCMy4oudc3",
  "key15": "5wY1gW9NbfP6zJEjs5Hmog19eHLisRihTDYKrTXXGF8gb5Ax7Xh4KXCcrArFFSgFNMuFLfDKnTg6mjyNBMyj1oZV",
  "key16": "4Q4YUoeNn1acWiyBb4717eRd2vx2psJ5ct6XpaRuEfxaU2uJ4r3B85ry5C8wsuQxQ3FPjF9nCLEmfN4cBWj5BWm4",
  "key17": "oM2G2RSbsRX8dsGbiN268kKrxGC6MvNbC6j3Uffg4C5FZSy8AP7EGAwBe2UjSeanW58yAU44ayt58SjDrovU5xx",
  "key18": "3vBv6K1BFk6HwJ4CuNiMKGZeWeWQpburCf9mHTjyCbgtdA7Mcck7myKp8xwpoY8H6JECWwBE7UvhVXFsgEFkQDJr",
  "key19": "4c1zpLhDUesuBQd3fk8EDzSmQd3aUjbydah3PYiXM5oaY9BLrzfBcJpZvXWVatsoYfeBy1mAecGNiMW81N7JBfHo",
  "key20": "4VKvCwMtLJowtQ7vmZEgMrvYbKpDQTr4XsqY4hMP1LtdM4RHfCDga8CRrRwpJQsJ59brTUUo9VZSa4FPE9dLw1gr",
  "key21": "38zHAwNthjvmJ8gsPEoL2xbkDdWdsfnkdMkibFuWBwy5yBVhtRkiap7djDkR5Nb42nVR1PfAAJAK2aZLuCypM1FV",
  "key22": "4b7CkUbytTasmgqe48LjHpNGNsSoi4KHzsoS9fxXeXG5JmVGFWU7kpiVKGLsZEpHtFSnzDkD6q7iNUi8pPfH13wo",
  "key23": "3Wi2sssg3dMq4we6GQ7rPvRp35a9L4DFbyCWXckYXDxBA47oXymmKs5zTdKtj6gt3kmeCM6gMgtk8v45N8FsJ7od",
  "key24": "4pZrNYynM6WAbcWdZLUXjB8rL7t6sFW7dDXxT4Qm2XkcNN8TPMZzv7eQtnun9EKQxnxFtKDrjyqUo9GKSKgs9FDh",
  "key25": "4U5T63Lerg83koCp6uK2Ub9CCpWSNHKvZRhBtfu43n8uBbi2xmowt1gXCiBTiCicRQoXma97AsDhGwyPjcmXQ4oo",
  "key26": "2uXkvSaKgTCSQJu5NfFRMS8si5Vqu4SigeuqffNwyC1yPpDJ9FLeswA1pPk78c2Pd5qFLUjvWHrQHUMrPig8mmVn",
  "key27": "pVQFJMqBjaHRDE9LyStLrbDcFT2i9XezPGyR6GkPkACUSsZau6rpKLHJcFhiA2i3T1TF4t7Dob8Bb95cYPtRaDv",
  "key28": "4Rr8M28BqA84ssPsTsACHQxswKyikUyXfjYUjBvBp8vUtnYS1Tu1ob6aQDY4DnY3eATNYm2UsK54QNp9a4MFYefW",
  "key29": "4p29cn5CbkmXqBzp4yd1vZ9NkNY4H6gLK9xUZnpisig9Y5hsPa7vJ7uqQcL3GyGyKUaQ26eohx9PhrhuBqPPY39R",
  "key30": "3VPDKGRwFZ26Ua5xkz1v1bX2Hnp6FHCMvPuNEAWSxBVwzU3oAfvVTrD1M2mrMaBaESbE9mT2EWi53VHZDsPigWi6",
  "key31": "dh7oCP3suEXQJqkAeor7Hn1icvNTA2ESP2yTVFgGequknSwc1aE9jhnyxpFPwTxg1nNzdRXf2osGhcmRAuCRbje",
  "key32": "42iGfe5tc2VzyrNFhfBGqK2P4ET6QQjoKkdR2wrtoaePZDNT8Mja7oAPnGLs5zG4zKNzCLUBm26SpLvxYVJiBsda",
  "key33": "T93ejXcbCfdFWFGUopD7QQA9HRNCxzsGhbdcx7CC9EoqxHhcMZWp7y716Wqu2C5AZZ3Q5svtk2nWKnKBhBS6B2V",
  "key34": "3qNQs9uEMN77jkrkTXQVnyTUNcEj8UEPL7MgZHS1cPp4hzRb8xoJznQUQZ4zKxdPkH7giknC9NHfxZ3EkKDo8QZA",
  "key35": "8D5dP58aqE8kzaP7JVdp3Xe1oSXNFjQpdCd1Ws8K3FrAHHQuUnAZbecjFK68MJFXXysW5fyezhQew5WYg28vTwm",
  "key36": "5G4EJGHowPPZw8wJ5HGQUANRhNxF6MSXrvZD8MrA6Yk2RHuWMFxg6tBauM9KC2QEEAtS4EWxxcAWqkEdfVf27Q74",
  "key37": "4UwYmzNhxUwpMabypei9xE8Xbv7YMwHXXFv4LHWeHXC4XMuqZwXv7Fm53BexTzpeBQpXy3c9tm5woHywGWPG6v62",
  "key38": "5HzV6PYuhsijQ7F7gDEw4Jpi3Z9TnPtnjLhvujDXiTcQiQ8TocgzwsmGQbHvRDSA1VU746fqaXrSjFpJZ5JSTudi",
  "key39": "csmH4pHLvixsh2fwdzQGjrsC87uHJXH8RCeqSt9VmRhBn6do5vGw2KcQg9GYR6nupQS5ujJogXwzPVCGksTMLMu"
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
