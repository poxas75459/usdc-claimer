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
    "qzTpCAmPbTvrB2wN3HxWMBPRwqpzgmwWphvzGbwwTDkFav9YzfUz7k6YALDZiorhooiGZD4aygfrMBL4cvVuYPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d9oQ3tHPBobUTr7LRtnWZzdPCRpyCEkT9zPpcLSg5fDJoKV5DAg7sAe4bNDiHiFabDMBAp7EiKnRSjAN7KivyAG",
  "key1": "eUHRL7MxiAtWKzEg4gDF7dtXrxqc7j2pa7PxSqERtHH8aWroxU9jPsvBQdV9iApEismdxjzbfyBeRM7nnM4geqQ",
  "key2": "3khhRsYRfF53hrBStMtZKs9HCrg6haYw8hkq8XvtL7dCnB2WgYVRBkcgJM1NkJGdgwh1UPATHQdwejfZpfsf3XK4",
  "key3": "5sXUoipzpBVyc2qJUtKPn3AngYWAPN13TsruqqYiHnAvNUxMwvakDcxYv6iAytkMBK9cXobQkEGFFbVxAeXJhXbj",
  "key4": "Gf7mY8v4YSQLpVevshh24CnuByR55X23FZyTUKisahDQ5sEQH6w1NcuKAcsLLzMVBDsTbz7MmBmJg1mCNh7DvU4",
  "key5": "2xuRsKxrDsUMAzafU3eSqni29hdJXnMcRFunNUiqLVTUzUfwtoBb4so4UWq2HQjxjAsKqdo7WRoRoJRvFj8wc96T",
  "key6": "54as78SuZuj5reznZtKPGbcpp6YKrH7eUv6oHB8dhGnBWJcReyT9XH9Y1rQNq56fm1vgsHUtkDYzgTunkerTHCF",
  "key7": "2GT5nt5BbqjyghjfLbDh25yGWsnBxgxwqc6LXNYGzKA723QC6VHHmeLf36txGQFxnnrj59YFqw51rfnhSsKXNjx7",
  "key8": "5gaFsU6LF2Qfb3MkzABoY7KWenUuELxvdzRHuG49GgCMh9SoKtFKKRyZ2Enptqyu9Ruc98BZG6Dtp8xouHT4YMGt",
  "key9": "Q1Bb4tHu5B7GP1CLKbTKZwgK2wi8ymCM2AgRuidFvqep8E9SoJbYdPYF39sqBTJqggaUF71BpBYzjpratCSDQJY",
  "key10": "5FTRJKKDDVsXhPfsjMV6BYfkEXF2jCZEoRVwbaX6Ku1XCu2KRhVx24LZQjAzhXcicpNbjotvzFLE7b1bWiJCE9CF",
  "key11": "4rqfRrYNtkygGX2zmZUemZKE9fevYBqkBGPVgBusc9Ac1ZSS5rYcRDvKUkR3KPzqVggBxBjHgYWeXtSUT6UJpyvh",
  "key12": "3DFjbnmbFnYspQKwLtYPt3PUk369Bh5jBv7J6ni9UV7EqBapjdHaJxpBWsVxdDDiJ1UfGg5UU6c1qu65GYFQynZv",
  "key13": "25FAVNcJJogZQUnpA5eGvtRbRhcEHTHE8kAb7AhHgdncMGasatAPDnozyX6UExgGGZ4sjdnaFeTgQiFDTAUy1cEC",
  "key14": "35GLcCVF7MqQ1GhK6MyHu45RWPdGosg9f5gX49vzivCqqDG8iyAcYKhK1Zc7v8NqErrN4f5MYw1eBbvANKKc858t",
  "key15": "2uFETXPkZoxFHiNrU1BMENW5m32bczcHKd8VFzCQPNeM83SDdju6KGZB2n62yib9GLdQjJFmF2MViVLaptkgoD6K",
  "key16": "FXrVZf5ERpKmDi1WLgAX7CiKUbTm9rHdeSaZD5fufSeqX32CnzSBTxuh6A7FqLjAnm1r4KggPPeqqaVYUACsa1H",
  "key17": "PrNQFqeTkTWWmWcunMRA3g3ABQ9gH5YJCgpdriqcyCeGL78B4ntsw9brDecqcPdwuQQ3xigUxQ6mZ184XQRJPfY",
  "key18": "4kbtJV9QXzkMJ4DU1Da8QV3TxysndpQ7rpPf4wLLViziKnB2NoxsS811yCG3RCtiu2AiaycJjBr6ZH2vFQfbJJbg",
  "key19": "3AwvduN4SCwjeSHtEndZ8oDuuoQo381bK7E6BQPox48jKVg4WzUX2LPpUp7wfXWT2FjtQSXXp1LLRBXVKA3fLW2b",
  "key20": "SD3xkDNkXvTbEKsLWpid1PpNVXaUGXv9ushaKsLCGuzdGzBjkXs6ovP7Qvabvr3ixHf5CtJMc9JTy1VC2LcKSpZ",
  "key21": "4RmCurXtk8BJ9TBzUVFXMqTPvDp1B7g5K9WQ1fGGDjs6dgrHVFnyUnFave5HxKrCqeeezwTnvjo8suD9TsHfGYwA",
  "key22": "2rcf9a6iQG4rhD35eEDfpYjityCw8xsd2rxLA1dn6pTagj5gjJomePWgGAcwziSrEbBjegC8yBK6fpDnRDbS9vhp",
  "key23": "5xjVE5ceLUFqPd4j3y1RYiXGZWwPSayBEoYKnp4j4L7J31w3DXFSTWdAQ3XLpNhieUd6ZxY6myVyWRSaoLGfvmDq",
  "key24": "3f8xdttpa4YG48igRQbtYSZPDH9T3JuXDR95H6KXr3imdX5TKKX2Hc7aZCTXafMeL133cGhvDUPdQbx6iNW1VbqF",
  "key25": "658gE4iWTr6LmR9kVyGxdhkcWMtGBNsvmi5F2HXC8YMRXFAGxHRicRQeqA4wkqYokxxGWdXkerQUR5JyqHmqMK6c",
  "key26": "5PJhcL5jG8zFDvHrHB4yGVKBpW6Ut9ZfsvLAFi2pWWZKdc1XJRqrNtPtYzjRRdcsq9r9ny2q7THWXvh267veVZKP",
  "key27": "CJPFwC71VXFobxKgQbhz1jXW2eaEXfPkfnoRmEeYagCe8KRbWi23S2QG2EP1cLm8f6wDZCrCToqnvCN9GStpDKZ",
  "key28": "21jX3CXwQRNDoRQtJ9cNpAN2e5QC47WBZdt3FwX4J26AjfUvMTk2X2o5ZDgWWpr6V1dfjJcd95npb6e5arei6Ay8",
  "key29": "5ko3M76DuwYnFcAfHWzGZ7i8WCSQa3ckZwsH25bLBqK2iyQ6NCiUcRxaCCg7RxRwwq3e3c2SHzhamXgXBguLitig",
  "key30": "5untDFYUWppSLwi3vWaNruvUZLqTNMqXuXNA7WNRg7HvRWHAq9ZrooacwdwbmBe42xxinB2xMo4Exe9hfASoWnqG",
  "key31": "2Ko87HEhQWvvYstoqooUpjZzZ2HE2adCj6t6RnBDaCzuZLy7QwZv4eHUag4r4YMTpAs9eM1BmSpwTNyC8judk1nV",
  "key32": "zd3wSdUxce8MojHrdsREPsoYybentdc241JFyBjRUgZs8n8bGMokAt81iSDsbADPbkJKshU1nDu7NX7vabWe7Dj",
  "key33": "5qX8xsvuEGht7v8tiCpUFyaE7iM3arF98Y9DrZR33HYdGzUj5wFZLf6qrZGmhaeaSr45necYFDeKzeV1UnVsyiY1",
  "key34": "4bQsP8e1xPazrgZjragZaLqTL3HQcr4C5C37Xu1FJ3SRZJeTY78DCrocnRtDYpeMJuutiwjAXVd2G4fnmNQDTuEJ",
  "key35": "5G78qEHNVxdPRB11Dvxo26FV4JR35wikdRQenbmfXnqdQXRvnFJKzFDfVJ71sJ2vKhwkn6xALpQFn8DDiaUtoepL",
  "key36": "3hwxpWNK8KqJr4FNzeYD1xAQAK2Ks6HahuCxStn9f3eLdscaJ3ZZoyhxNXRV1YBwmKugqAx3cgSqZi9N6MT7Acda",
  "key37": "3sG2oc3m1yJfkedjZRs8dR4PnyapARAoszgw6NghAPSB2UhTjSNCTQQCmGALAwfQSgUJnnfSFViXtxgbsCFhN7GW",
  "key38": "3irikww2xjB2fkiwGD6o2zQzCXedhNWxWgEsZa1rqPdWaU8mhmXrJFcysVthC6FM5xVZsXUh5LfkpxUGp7sqKpTn",
  "key39": "4ATk1LJpRGZYdC3MWYkKjMeoXpsxRtMkA9GqdojQGj34KquRxGAVXBvquzaRZVHFGipGAdop8uzNQ6mrR1wxMN93",
  "key40": "2pW58cUfo9hNZEQoKi7hUBYpVMxntN1wvEaktWaGSjFizXS4ocyJKyv8qCFevVFqKyN1zXxLmguW6rD8tyF1CvHo",
  "key41": "33U9cKDGpVf1ijeLGjp2pzRVZn6T1HNgiueu7aoaXwnnHEtqqAwPoNDWjcc3HRspKeUk7zAqEvQZJjde5dd1uH7j",
  "key42": "4wAhxgvqZ3HsAoFt2r7mXmYdmDTHbZXfjAq8inxXFZANafJntN42VFYpoEvZuKugFZJaNjdoC7ty2cwYRxtzoFZb",
  "key43": "58gaug7XFDHMmLCZVTpVNLvi9xUJHsDQgJUVyg472LaggTvDju7CYwCcKnDnxdNAwckZaXLvnXpo4XdjM4U9uRPf",
  "key44": "5HQmTDZn5Egt876w2veJgzkyZHFr941B9t5m3j2RAhz8kzxUGNToZ92UowxcJNvkuQ2sFaqtbszRzHJybdw7sKtW",
  "key45": "4qoaTfARt5qJ1zYjVfXsQukrh4eA7kYzySy8dw4FC2oaaZEzzgx2c6eWqiEMVgJeRRRWVEWz1a2ANtt9t4E1tHST",
  "key46": "2UTPEQ2YNECdb4KXEGctkj5AsEHVcZAKeWiDYNrCTKsuHNzKxKsxdF1qFXruA5c3DCSwGbPAWTn75mzEnQorDRAd"
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
