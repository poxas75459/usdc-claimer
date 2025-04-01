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
    "42P4muPigwHeoi9TxjqFUG3hD77DmRV7suRwQmtaXhMMiAMXhi1xkKXJB8xJA1Y9H8YZaW8tLiK5sHyXBrD8TVJB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QfyxRaMMNWKDRozMGMxrWKiTBBNWKvHcd7TfCDCGciy3RtNsPKqELa9QUPgHSdzTqDBTY1PRt42XtseC2i6X3UG",
  "key1": "EB8yTE2xPFfx8oMXU2ofB4JWGX6nTafn2x8TEBRwZMKizFrWLSM4Er23gm4EazTiTUhbSf33MKF82J9ListCJnp",
  "key2": "4CBXHzvfHGsr8Yxf1KbEQjEDXjid148mfSvXoHBxatPnWUZZQNRa46u7wchHMHkgh3Hz51zYYw7JGAdwEUhtK7rP",
  "key3": "4GoBJg2ZRbFRzY3NorFoUXc5YVQwuV6N4iBpiXUNMTQDVEGFF5dJCx2RjZUFRGKdZLZHMT1vQMpeLQuCkf7zcC2K",
  "key4": "jp1fQBLohiUUoXgw9tw9hAQmZLX7eD6S99KJqGcvVJ9EDmFmNdq26Kz7jL3F6pYg1zKuRaaieUGhcEQyJFEFyfQ",
  "key5": "4fsNuiuE3sL8yakk6xdkFKbLmprYpSmQvrv1KvNcoDvgzfKnPdWTuAy37qahQJMkBTDcM5EmfMF8KWwuD6wMFHSd",
  "key6": "mXJFstdB2Rnk8DmKAKqbKVktgoqjm4S8vE9kLDn12UNwyXwKn3KVXbT5RhscBydfVP5wrPd5C6Dzf9WbQ7NWYZH",
  "key7": "QDSXrmKzJNkKsG1tz3bL5w5tEqi8T6mVvPNdiVWEvqrDW6DXTJr7BmD2KD2aXY3vyZqQbKgZEn1MtHk3ugYt8WS",
  "key8": "3qdJ6YmFSWHQjQxGKN9FXByFfGXyezQwjNKrN5f3CkiYxSng668YFV3HzyCEY7oWp8cC1kaLqgD4AXMCXN1viML3",
  "key9": "4xB3S6612mRzf2n9q3nsgCjRkF3X63krfndhSmcH4MMHKSz5KYZXRd8g67PK2e5wJLEPwejiJesdkhTWMBReDytF",
  "key10": "5ammN8LTeNchrjjVT4a4DK8pELnho2ToJnbBSNF6ze6iqKxpwKZanobdMV5AkTPY32pxnVkPVEPgrURZ5ZCeJSvJ",
  "key11": "3Lms5kZtogRSwQBqNZycJoGrbUq8T7woKTzEedTu3vXc2CEEdAHdXfNUdHWFWiwuhviytSGgJMgJTWBoWKbRdN9s",
  "key12": "29hPYJdgQFJekmkjHdNsBvjYVFEfpCvwRUM7dwvABwqSfPLN62EvPawfXbNkz6MHRpj8Z3LigqzxV5MVjcdAgtN5",
  "key13": "a8o4C9GaejTPqNHveogSEF4tNF3rWYiJZn2zKFLY8oVqkYNoaXoWC9pqoesBkwjgdcTm8CfXXqSfehXxvT78xw6",
  "key14": "4zJQgBpAZfdHxvqoFfc3mDKzNnKtL2tbs1QRG3hDbkHncnDi5vss32scwXYYJCcXyrUdPhdeNAtaJKyzy4RKSvKP",
  "key15": "4yCvw4o1xJHQyRQE3NWA43i8f4v4TdZLZ4QcFuFxYnoRZRxN5qLdkBcmeu29CcFDYnDzujVUScywawgUQCWVQYg5",
  "key16": "4oorcW5oGfdNffQCQPPJKCNuYoapXb5sDETr7wNr9CiYjs6xQ1sey3QgAMkZadEuoH57J91aZpPoPf8ApeR4gfXp",
  "key17": "XaiNYz9sFXfUpwp62cwkpXz34JVU67WTGGzgzEJ6i4uc91ZF1ZbcUm9aeTsv8jVDUJ9wW9SKsBDqpffh7su5xJj",
  "key18": "51rCGQUvdy7ZQDfBpk6pEEau5GRxkMDEib4k35S4WuztqQdRv8GyZDvh2vkS2MUdtQeXQNRPaY43JroMV6ZVaALr",
  "key19": "4iFtuqa5WCNV3AVH7cLNUmGzdGoDAvdXKo9mSaiyrgv5G2AUuPNigXGW9fuj4FymtTfurAB8FgUNc2b8WhrJUhQb",
  "key20": "3TynSCyzLbScKePPXnDqgTcCPUYHskWzLr2badqn1uwJe5Xrvgyz7LzxuDnAJRuZYqREW3zyfTkXKXfyv6SjoqUN",
  "key21": "79aGv88mq9nHiyYaCu2WzefKWPt4FrHpPyYEdsNyrtyPpkQjXUv53JhGjCycMHtQLcfaQ4rwiHNXWYykkUZsZPL",
  "key22": "288v3Nh78Pk94spk2yd9PHte2g74T2Vmhu6eBAeuPsG6NQUguvYCc8ud6ZN17WeoGvrUmru2dz6zwfKaZuUzVEpG",
  "key23": "437oytmJ7ztaBMLMi16kU2i41piGFNCmp5iqGWvf4z57osiSFz7dj9YbtRHb3SJ87iUuzj73B19WoNT3H2wXNNL3",
  "key24": "qJFhRwz5C9KsxrEAYjJi4mWVnJ9m6du4mncjH6M8BYyDDYRZAuKhphWdUhhAB7GcBUFyb5nS9w2ZiTyN5HBrWJz",
  "key25": "3QizDwZJVA8mumDXZSVcMxnydZo52CTHviDx1zUJRptoQykKyYVf6ZobMqaYdLHPQk4DXsbYYmC5CmRjFSHgEyEG",
  "key26": "4vLcjcMGWjF2JRCNDqZSk19vNhiDEMGhXv7v7PQv1vHXbeg45LehfVWsDf3qdEB3mHgpANjWXN7mZUEbPiFh7ehT",
  "key27": "Hnjxrh8DaMd5W8f7WNzHoXomjy763v6HNhBJJAGNZZDMs97fxr46SS8xRRhWVHVJZPSN7ehq6LYpDvqSRXsGeou",
  "key28": "4DvGo32SmZizefMVhJNatBsDWtVVWNqNiT1LoHu163wvon2JNYhsZzUdmtqZihmNydqrMDU8Zhu4EbVJgpHLioa4",
  "key29": "B5AUPMosAbY4iDD6iM1UTtQesaHqmnKFvk7NjLeA2A1hePNuaiZDtDidh7fXLq49S71bAo1rJpNVrTM9uQgbSJu",
  "key30": "3VQgezf8mWxBiCKd8CCD4asJf71Z66hpq92h6enxmmRNVSjyAPJzgko3Q1bkHUALooBvpzhXkzpaUdjfdxR2LEQa",
  "key31": "5jaTV97T7RDoAy5zSyyATrYxit34zy6KAywduw5erK5ymgBeCEB5qyREZ8RLkWo31Aue9YgY6opfdoFU853rkE6Y",
  "key32": "3MKTG2TvA2h2JcJfHVVnpG91HGoHhgphmKe14229QE7PUzXUEP9m5E4YHW5sLeLAwh1wRRpRUfuEHF8HHgGkaAgn",
  "key33": "4syxZY1QzJXhfJHdrTz6zSVxdLjpmtJZ6q2RsHCwA9gNLxXmYX8vEgHoqQSumfPTphuHRyPXV8uapAK9uBLPbtgy",
  "key34": "2ZRdfXXEotchT6ZhvLLUF9ZUCXX9uCN2LBCvwPhvSoNrYmd32uY2PMGSq12w3pRLAeHWhBd6dVd4TKisqcp7bnDo"
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
