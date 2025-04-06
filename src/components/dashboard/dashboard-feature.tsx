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
    "49aqi33D92jA36yN6TZQoEXS5fTdUmah3tK2ZnWJ3rdBnWTXUH1y8S3GjU5N3vmXjzRi9oXQvvZi1bSpE4ZkNKzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NBRTrwq3tcUZzqErFUmJHP4dzKfuWeL4Vm874B1Y2txkNrp6Gp5ksQqZJ5551UFHPPgxdShd91GddvV8NiKHm9y",
  "key1": "225TxDBqYXairQBPWGmkqbQ4KDWM7N8mC7EeAgAHyjhfe1exHRFWAu126nEt4prMXRsjNPokK1vKtJ4vFK219D1t",
  "key2": "2gvniJjNjtrySx6tZbyZGrxok6Vb76MLgAigus2JV739yvqXvk2p5CAHJSnUF5aoEMC8Jo27J664LCFAEStNj2xj",
  "key3": "4fQgkFVUzs5UitScq9bYDijdEfhZncUvF75GnPF7bLcV4dLcK7cuyyC23bxL8RAcczLK4GX5S9ARPGrg53G6GCQx",
  "key4": "utm9AXhEUMmGXXHA51UpxaFZwQabNM2bQYGNpb6KxbxH4q1s4FAdD71Cdv4x5iSURb9MVd8EhsvBPi3hMaLV47w",
  "key5": "reBHnGVz97yE8wKDvZ9g4D1WQKDNwqE4iuBfnciAvLAvF5W74x24cVSsRcVKJyTSJPbMcrRTdGijAQc5NbWSyXq",
  "key6": "2865WbTDSpLs1M1u2pshpKrJLfLc9YnsByeofYVq4buu2cHr7TQ73emNTqedzDzV4M412NxwrQvR216iCXAFqQJW",
  "key7": "4iTmvpYcxnqq5GoLvdvwujhdYzP46Jd3GCRmwZaxXXzAkLbL9i3fyDqsAqxQmCiSj9d6ucCmeo7Gq4RYES8YzqWd",
  "key8": "5nnVFruaxEjcs84g9dUWG62hKiVXQ4EgknVF5j6HP6LFKMcmS66EdXR7GCTPA44pxMnantaX8erpkPx7Nq1YLPh4",
  "key9": "5nFu9QWQu3EDXMBeMhTKWrb4S2kWHRgD3kuddvWzJ78UobdAAUkbnvwy8JarCvArKomHSujwGa3LTJ22F6WUqR1d",
  "key10": "4ZN9YHCEc9997TkUWe5bP5QQ765uTxaQdDJR16eNVC2PeaBPLnfwSQwNA6vHJMcuAuArWLWDNZADVCeKXikT7QuA",
  "key11": "5cRmNZj8Ptyqi6ZWSzvcvpNZ7Qb9PtfX62egJeepdx9eYMWan7i9HbVYT1KjZ19T8NBYZnxNepwCHx83diCzwmDt",
  "key12": "2FaYzFbdLqnUFJpLf3WDTYhkFct9f7V2xY5wTY6WwUzpQ4bBg2sTSYoqYBBYz6Tnz8LftJtXq7caJ8KjnVTf8mvn",
  "key13": "29sCqoVYbPovPNiDz5GiFDZTgRG15SAVrKJgKKrxySrCva1niYCvgBNReMX1JNY76KVsZGR2PjRYnXcfcPYnGUTL",
  "key14": "4Zh58sFCobamqpEZh1WdcRJ4iZz6SPeUT6vRQiMjhK5bhyTQME2jPCdFFcpaZ677RSv2w18VxqQ5BKmVAJpD4rkw",
  "key15": "4Fv8H4SgpJAdah7DdeqqP49xo7yiRpkmCUWWuKzfSY1R7B5PsRLy9YMNPZNQaZPKmrtZJeNoGTXhYRL2LBpnVtGd",
  "key16": "BaLtEmVvq6PBPr3Y2fs1xkLDVQVsnTnbp3u1zWwvaTWQEfjiYDwwyASRyAnfg1S1ADmsmER4Asx48PLCygsHdfQ",
  "key17": "2YAAJYsDyXkLWXLA48rN49NLAXCRBTpKDqH8vW5vanvB2eDKioqHWpQKADJH149vahiZYmjSTUBVf1XKQNLrJmdG",
  "key18": "43GYMxCBvxn4JzeVrkTpKkXs2nePpqKFSKTDPWBbGbXsyVUqWjKovCrzJvjkbgioKtvLWarWSWrnXwzBfots1wF4",
  "key19": "Zjq8mvFdaSjgMzemKH5nW7MmoebEuV4NJ59yKjth5yuvS5hYJ5pReS8vGEyrXQ46EEyp1NEeHQ7fg8d6AKdfGWF",
  "key20": "5iWW4K68JjXHEiHzLU13EbNY5U1scKgAA2w36H3exSK4gCmhgESiAJHG3ypxNYgKbXom2XAtz1rTKZU2UzcxTRTa",
  "key21": "4TskLNjvox5BKtmRtSfvNytyzb5JpjovvNKhqFQHrQ4o5bTSXNjYjQkA62XHSVRoEVZNrEH4BVqhEUB71uxfznvb",
  "key22": "36YJ53eU461nVRieGW74gQhu9aFcK9wpDFqJV5TGeG63M5qiuYetV9bXmqCeFAWFUgNrxt2KVW5abNgPTYXQhB7s",
  "key23": "4aErmDjGwzSPqNp3bUessGJibR4NBjSzGKAxU9L7mM2uvxJZsvRa4XHbsPVmEkYhrQr2WCeCPvGrJDnbYjf2Et6P",
  "key24": "49mHfXAKZ7dYvUJ4mqiDvEz1Xc2HzDnqQnckkzztW6BnqB7wWxuRvz53EF8wPhpDki3bq7C83Fehz6PtvajquyxM",
  "key25": "4JjTwBBdAT63cc67w2mAf56TAG6jmsw99CTWHJNwHELn9XbPMWZe8k5jHTCaXhZGiCEudCtyj52C64GfmYJagxRo",
  "key26": "25igbkr9JKLehZkXojeW2aCJixnQ7KfW2veSd6GgFPNuLVFC8AMzXqHb1rfHZrrsnAochj8xDhvLJFKufgPxECjv",
  "key27": "3m2nZyqigqZJiiLQyAY9z2n9M4Nnnjyvuwc8uT5vUffMoqcDJBFA26dNxae2v5zoQN4KFcQ5LNmHgdBYUMhtZcgB",
  "key28": "3Xe9mpnuCDT67U6UHam24rk9K5RzCWJrWdykKBNW6sXFMCnUwHJQECesFTDM8DVXJZFVb38TxEVq3F9pgFYbnNNv",
  "key29": "22fqAXZsTbzS6MHfHEzw7xH8vnSEYumcrnKZh7i3kCpzFDfHCQTqBjqeuJi1ghwHiT9EEPuq4z3JwmgPz4fEpxmM",
  "key30": "oJ6hx23DY4SZmkGrSfgMYiqB8jAJUziFyiX9yQUTuk35ZsUxv3Vr25yciwz4EbU8oCFdgiMGMCjXf6TfktgXo76",
  "key31": "5gVvQa6wGeUmhCGgFeJT9CYrktDmHQNGw8NjwQTnwfhanCKW37AzxfU6BDvjrKuJvHaVkXgs8jxygmHokGockqSH",
  "key32": "3aCMKQgMB9tcyzxNdR8D5Y53f2GwtrqWMzEwXJpjNKxVPaxqcfm5MSiBmy5t7u8BQNGQSDXDf9oTPTEr1mRNxQSA",
  "key33": "635ZaamzVuCAfpR7nanWEvqwLrEnaXqrL1pG9FvQmSmFXjrXQVb4tJj131iVtja8RJXAjVJLpQ3hnDYq2si2raVy",
  "key34": "5DeUgDqEvPgGkaY8rYaNJxt94ocwbT4UxmYzcXwwmC4ESHygEn75auTK5iqgjsvkrdg7TcqB7GLKdDT7ECLqTSve"
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
