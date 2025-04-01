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
    "2gV4ZMCuH5tTbqV8thx6zWnYHJmUxk53HPXwnpZ2z4NcnHGqb5zTwNcCE5qZ8BWFAaLaVYyYfgeLN8Fqqz938Bci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yeFqvnz89dQDNN7y6YN7x7RuMw1khLKViqTjJK8u7gAVz2nz8RHJpvmDQ85AdM1WjyW3QBaSzbRjDtzkZSCRcBq",
  "key1": "3F3K5JHavzdYQWPeiwFJJYZwRbxXAxcn4szaa6xLyJQFQMVntqmB8Q5oXGEYPtUKQrMkGs8vRdnWD137XuTVWFQQ",
  "key2": "3yadiWstNnqB1As5K5uk7qNVRwkUtgqCzeGVqKeUovJQRW3KFEcEgABTzWQMgZTVJV14z7u5gNqU2nRVaX1mGDEj",
  "key3": "31sB1GXpvocwEPWpdbBHxk8FsJ5CbGYqoWLw7HihWiVdsYt3sPVA3Bft5kopcQkEGEnKRmGQk1DJCw1tgXGkie1q",
  "key4": "5yzNqyJXmbk3edUPdwx5cHZ23DrUJvGtPXvAXTH9FqzPuFTLtb2qhi76BAPraDcouUyffQUxbRkmUiWwfgYdMqdb",
  "key5": "65wLZk14Btn6udu28sL8Vqm4M72u1e97ZxBM7pJYbp4UKjMZL64sVSVQoXvDi3nx6mPaze8wdf7qcBzewsP9JxfC",
  "key6": "26EaNzAD6wqajQ2tf5fSGjT6CKtHHbf6GgiESXHGxs6WCx6oiEqwFrJxhquEfDK31cNqUU3Z4Wvn41t1HP4encGJ",
  "key7": "2k9SjTamqmcy4AztJkuzD1PjhQJkFADeBxtu8vK9QJkayeSnLZMKBgYDtkyHWjU2UDgeteLjYA94T7RYJoZJNsLt",
  "key8": "2CMvQZ4is8HCd74UoEsH1hRQheXDvREnoKr8CCwNeUPWgMGBmy2WZwsKxmAjxfca7XapdJWmt6WrJ5DQpKhHYjio",
  "key9": "3wfLqtTqBSWQEQVUTcXAQWDWZLEDBDSYftG6bJs7vrYWQQFBvp6cY1khUg3CsLgZgFxG5MNLpxtoZ6qXkgTkhkjy",
  "key10": "5hZcuKGp1owbd1GhXdvyHEyBMmE6oBMsPXPkJFRCVExUyxiEJRGKy1Vro8qXL4ZJZaK17WbjJPTQF3Vq7SdGtcwh",
  "key11": "5PkfWPXXa68BrVJ2Yxkig2MBxUUprVhwdh5SCya86X2ZbbMpZAJTxxMYVTgbAKVtkkB51pBi5GeABuTibeEX3sMY",
  "key12": "XhhSgjQ2fGK5oQStmnHKvRUYYoRcvWx7cfAisVyqc88cwLisK44qXk82jCPMo7fjoZA8vjwLuwoXwuLAyWvo8B8",
  "key13": "52We1e1qEsvSosuRVQGktwNB86mPmXQKpzoq1MHWmGQptEQ7GBfjSGxUXiv1eV3wr42dHHbEe7FKSK5rXk8VxvMj",
  "key14": "2uj1thC4iFA8EUem65Rh7FDM6a6wQraivu7ELWQKaWQAAgvkaQ4ReWzpQsJoVRPdpcCVzLV7kvZ1XWAq4Cp3HgNd",
  "key15": "4nZzUykRXzSwxo5FQ7XdSAK57pwoYdL8GBcx9emC1zxzuGuBorafpM91iTJx6HaTyyndkS2Q9Vt8zehh6DBUe2CK",
  "key16": "dWBC4wQEsm3PGbD1w4c9J3z9d4WMKfzws28yKQaXaSBEtJRYkz7FdNd8QqG1RjFtFZTkTkLFrEkonn8yLb4bN6w",
  "key17": "5wpysy2eyPwBPAPmcePfNkRXXb3HT4vA9ALpuH2sZmh7XUYLwquxDdezA6paah3M7WemonK2fEbDbHCpBiLdLf4P",
  "key18": "5XmxbF8JHWFL9uVEe2MqgrP9ix5H8DMjFNPLRuBfMhAQQEopxK2qfkVknXJJ4uCaDzXc1FKU2invFzkiKHWKfQEV",
  "key19": "3Jj5KW13q7BegsP97vC41NzMJLKuGjipvMQ8D1d7UvFcT95DJkTvh3xVaPgpLVnAy4sKg9JTqeFR8gcDTaq48MjU",
  "key20": "3tUeBmaVMMpvYYvp8fsxEChWB2nwUE7YcNrkLQzGFQibLq5Kw6kDQFxGPLhkGg3jxBrffYWcwHTvURoG7hkTypFH",
  "key21": "4ZWcuCn5b94xQS1rQdEiQnLvFupccbcKqQo7UtaoTTmYQwkXuazoTbiG1Z57K7mp8FQtXzVR2z4ZxSdNuMoWeJ1U",
  "key22": "3XS6iQcDVT4HWNkzaV9Pmiv1X213smDL1fLjTr2GQsLwstvKRhAduEXn72esrQBLSrrkfdiWFjtKyPWLWkqPYFoc",
  "key23": "2Wug7krdxTdhjUnNYAAquTWH4x5QeWZWd3k1MCczVu75iEQyA6jso4b6z1bcF6WwYNsX55v9rSrpAA3ex4TWdMd9",
  "key24": "3V2LUo63Gv3UtJmqWaMeJtkUGgkNwswto2iADGP1ESarqx9EvA5XBNUqePJ7Fh7RaJ9AY916n65Antr2YeLCUpjQ",
  "key25": "3HQu3kJRw4m6JwJDa9FnAbyK3QDps3EyTGbed5qgWTvKpAKJ4rno9KMWxi5F4DwK568LcfeZ654NYdxCAAyrA3LF",
  "key26": "2WfYfFuZhJAGbhLQGRvdJ9veUjpvG56gy7MVGn4o2mnbm6RvR4HM5scZBjDBaCNL1FUknzd8QsJ8t8WreV2yHoWD",
  "key27": "4utudsHwCWBJJvvEHGPgya2MKhrh49mC4taFGteAcLv6QKzP5jSHNaZjqEJvUpNUSQMqtE5ibsEixYtJWeHjVBrF",
  "key28": "36HdYVXgX9ceWLr8vAoevCb4QBE6efNrdVgA6gX1K2KjgeNNrtXw4btfty3Z7jWahrNr2h4abgbCYe975VpeKAbK",
  "key29": "3GSCq93GFR72dMsaBfgDgRXs2WracuJWRhXbeahtYhHCYGzD89zfwDA7Yk1JaRWBcDmEQ3rCUFx7m1MZuVcYNFG5",
  "key30": "9kdxQLW76zUmYnSrP56JZMUBhvXWpipyN6ro6KrQi8xvnodqPKpSDwGzDkjUkubDdbfweDxjA8Pw6175t2iVsDs",
  "key31": "3ytyZaK32xbBH5gcxCbZETFyAhsgUGR3XhLXEeGNqNJh2TYJUDEtUWSgy1jU4HRknvNCfQxTDfZyVwAFWy1zv453",
  "key32": "3JPinsTbErtcb62i11Y5dCWkvWFkZ3jGw5vYpbUuzse1fpkVHwfV8um7kmXww7F3NJjeeabsBuFZwbUWwMkoJXyH",
  "key33": "5jGVC9eRa1zwntE3gfWD8EZsNQZCV6KqRUscj4SWcLq3sEsNmYFgA7hj9DYRLu2VErrkujZPrBnT9jSzgQr7ojoB",
  "key34": "4DGZnxoxwyooBq6quK9SLw9GgM9tFD9YgZSJHG6mCJZAVEbaBmBdU6gwnzyHvb2AexMdT7iKsx541yuu6692KYzW",
  "key35": "w7GwiuFFJZpaeZwMKGAoLLHiseKtk94u9m6bKFGydvaW4sqcdA6kVkVnQXreazfuUB3wRCXPjnbAnQL8RtqGiDF",
  "key36": "sFP1wuk3U782g4jYJSnofc95Bd3Qx1nQrS8nYe3SLSnJLDgEJTKkAyYXLJU7xAxsNdVTEkJWtx358ujMSogZovS",
  "key37": "4Wb7HpsGjFTFJs5cqwhJkckLapKM6RquyJdouJ4Cs1NwZZqxAHiH5svUeo1CCXnzfsm16234ks8m5ezzkpS8NVLN",
  "key38": "4iib9Ava5KaY6JE2WMGgiyCBAsW1hocurJAd22eY2HqacUvjGDRk6Aba8n8DVvsmzqfeG9e7VwEcJGF1B9dmtbQm",
  "key39": "5n1cXA6wtskHCx28zNeqVUmDuzyXgBN7h8ZHUf5ZV2aSSRHnmWdmEnnmnei4xAkYTABUTxcZXf55DymeTNDTAfrv",
  "key40": "31MPNAdLEaKyTzXnUgtLbh3SSwrPHKRmx9wpuRKQXBTpFBmFNn1125CRg9EQaBnWq9zoA1Gbp9At2eH7z1k2vFo6",
  "key41": "4BYyhFhDvtvCuwkQb6fuvhMEFe1PK53DupmzVxdT9XeZSpbEv4eSNsa7xShcvPqJY8c3MYEaGUXeSBPxM4sAchPs"
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
