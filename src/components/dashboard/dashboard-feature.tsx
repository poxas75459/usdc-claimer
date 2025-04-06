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
    "4gyg5CotuKJyDTBG6trC2zs6Pb49FEGmK8v8WGqf3CFbPV38dee2HumghWJY7afZRLnzYSosM1YpaFRVhPZWimrc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48HfxvtoRQCYNktqV1DoQkW2iskRGTJPADesNRwiLdx5bcWLFW5xns44B94EUBHSQyEF4GsTNTSxitWnshwY5sai",
  "key1": "AbJcSib3emgQURUzq5jRUXzKxZ2JmyeukqojsasX68UqNpddb6qiAw5F3ERwpuT9DTXqRb5s6HtyPwD2rTuvkXo",
  "key2": "WAC9MM1MbFQAQsbi7bcPhVqjtJJyCzjsj7eVgHtsjvNSXXGEqDyWAVWvufneNp4deU8x8yccvLYzRue6d1tcn58",
  "key3": "4K7CJo73ohSeeXWDrKaLJExbubRuY7ptNXKLPmrrJXApkNK6bZRLK2fzBBDjfVje6Kjp3PAnz6mWMdh7cb5DmssE",
  "key4": "3t2xkRXYX5mswWSgHV376yBadSHKMTFsBRoJGT5hJ1q6ry7hKaLJ45H5G9i4M979KZuDGg4wQit1J4tmsxZHw5tt",
  "key5": "5pzckTckZrdmm55YroYrjzBy8HnerXpHkQcXmDHaYo1gWbc676MAApkz8g3H3m2FWdCsf1Hw8jwCYn3WE2ajjAdD",
  "key6": "2pp9cAGoHvuXQsJzR5ReYr54nGDJjupezWLbeUie4A8nQrzAFw55hRFwCAcnJ1sBZttcvZiTtZYYN7Z198bQK4LS",
  "key7": "2qTGhpiUBt6xengcHq75ZiLa7jtub44vfUQi12BidpJ8sFyjx4HGZxYGxon15T11nm8ZSw4UNQeHALmV7x3W21yt",
  "key8": "2hMpPD39buP8qGFrKGLv64VWy4McSWd6MDWeUDWV6owubNQut1HYxmyK53BMvsh312pzcJ4gUAQvdza2ZyQeLNhM",
  "key9": "HngAaxmo4F5PM45SPp4MWUSFMJTqggs2Pm65kscJhXzLYFx7KoV8VtPcU52Vm5tB2f53QvrR3cdVFK3Dmc48hxb",
  "key10": "SQJeRuHjLVmGhbvSgMeAe3f2KzsGVJ6p7Z8deVVnxZTwNKvkK3RoTAkJmQmwfiun8WKSzJYKrHcDMo1EoTWn6ta",
  "key11": "42BQcGambdKDo5gvsa4sVdN1jX7uEZD1Hif2fw4Ck2gty9tn3pa2j82ViZErx7Uc85m4ueVWTKFuone5bLaCToeW",
  "key12": "5fi9bL7gEXRYWYuvyHA9ZsxDT9W5NiBbBbJRgfZytDEPvonG2V6iQuJZMZqK1TfhVXiDqYdHzgU8vtbJ98SH5JND",
  "key13": "xXqGQ4NtGyY4wpZFK9g5hqryJJnEBgNEbocopD5QZGJ4DJXYfJRPGnHhLJfMTdian5u33wS96bZAUjNxZJeKf8w",
  "key14": "4r8D2uT47F33D7tfjyQ23cqwE23Aen1UMn4tYFQP7w6drHUPShQhx6x7V21ZUUY1DazJq9vU8sXQYMythX5UyKgv",
  "key15": "62eBf1kWSeCh2DdTDh3kB933hA6Wch5xtfrBsEbD3MGNLDX4G8NSSnMn2D9tCqwf4eaHUaTQVWjEV9Xu7GcwQEER",
  "key16": "53HfFi5txPtwPJFTwDz6NgRArKD24G2YZxUSMYfKisnUyfvW9NWftkTvoRKwdNiZNNnm9SRR7VjnzDA1fkhPgiWr",
  "key17": "2cKvm2gJsPkXMqix9rpbeEW9SLiKqy9yekoPKj4xPLA4qpsZRxArHX6cQZzMXCrfEvvjjz3f8BHfshmhPDQGZp8c",
  "key18": "4JMFCVdrBSivUZNgJT8ru2ULs3AyzbLQ4SBsZ35hFnEyBDBMsTMTUBGysJAuBggpjVh5QLoWNxfLgB3vxh7bxSE4",
  "key19": "32HnyX67ckMet2n9YYTDyTKxFJSqPmg1ZCsgAYLE3R6Ak4xpzeGHYcKjmNHPpPYr5Hc3HfTc1vv12nB4k3WmGbHj",
  "key20": "Y4N1eAcvz82XBVzKK3zRfwBKBMXRbgpNENJyfvqRmKsi8nr43nkT8sS9zVsKH18auyxLGviRfNaGVYwrJVJrGKg",
  "key21": "4VAEq781EDFHzJrKG1s1JkjtpJt7tohiiQbCg7NvLGavUdTPvfziDwq5j8yA9NF1ShNqUL5bC3qnEYiTMYqJ2FNV",
  "key22": "2216MghZtYutRZrjWT8gfvJYSthedzoPSuR4D7hyQNFpuXH2b17E3kwECwa8vEvAHWBdnAkKDy5w6JCGa2NrFUts",
  "key23": "5vb9UT6Z32xr51N1Zv5MmeszVqyE6AQR2WYZezadgbc52x89TYiYTLRTagtjK3iJgAJ1Em8TeGNTd93FrgWtrFAg",
  "key24": "2FtCjXibwgTh51QRPWD4isxXC4d3SBLyHhCS5kThQqSae3mjUTkHEW9zxdgxWAdc8m9rL4ky4MsCmECqUM6m2D6b",
  "key25": "57CxhY9CTimPCKYcFTWAEx7fmS9X7oYVTnwgsUkH4HhEUiMF5AGLbCWpPFQsCD3dC6uvKKhDT5vPj4yYuJTnPnzV",
  "key26": "3CVHVdDk1yZweF1qmVKVY9BHEqKza9B3inZ6AUhB2jmSpwEeuuHJjHrSWrbgkTPAYkBypho4nVnhasbKVL6jeUZw",
  "key27": "2Z6N9rXEmDzd2nsQEy1n5erCRua4EPk4HTsJM3krRpj7RzKQJeexTzEVY51DrAac59JZ7WsZHE3GoX9U2k4paQi8",
  "key28": "35N2MB1yQ6PXVJuk62FnF112e7gSbsFKJwNYDkhsZv415rCHJupog6BKEBEuKZCj3TwPTzWFs2zFbP5jejt9yLJ6",
  "key29": "4bEuCZQAZ99pM1s6n4Td1CsUTJKswUrWCnEmzJpyjkcmQ88mheAZ8EChkc65LRhJhnPELJvFo7ZjqZyz1Vb764fj",
  "key30": "2vfCddJccZL86kPJy5c3dNJEfVFxLMgUxsVwAHiNm5unCz1tPRzeZBT7Nt1tJHx1xqkfCwtV816XJXjh9vH8CdH9",
  "key31": "5PDdsxeFUh2jCH7NxD3ioVZqN6fYubmZhnkh7v83pbvKT4RQs4uW18F135HAtPdRjMdUxPbHzkEbkUt1dMyjGEGd",
  "key32": "28ps6kwzxJgs2r73mvjmJiJjU9d1DuV6Y8TzRJUjDQA1aLYwA2JirCbFVxuHKTpqrAiiX34jcHEdhL33oYi49xkD",
  "key33": "62sLE8G9PTKskxtxCh9nUs5hDvhpnt3fHBNTc7fseXC6z6txah8mU9Se71B8CGm3cgzgWRy2VTpdUnvVDfyRv1tt",
  "key34": "3ViNDREEUJS1YSDaNoBvWuhx32TxaS94hEAZ2BUGLEeNoHx1jhYPoGwEoCt7PE96JMnoddtYisWcFvBGWrmgr86m",
  "key35": "27Ds5ETdcd7ibdckLtpP5WRdsXqqrEq4NttU8aqpgB9mtGaG5jk2KotyiCj17iBwgW4mDuP856WeZa5pfXTkmNi6",
  "key36": "41ns4rqPBwbMSDvuYjbBkdbK95uKEmuKGofmjYjczHTKsbxLZ3xouXUBbj1UkHw1sQvxkJtTi57d4gUvxFpuHVuN",
  "key37": "5r5NF1xXnL4VLJmgW8f1q81yx69BZT5nwJMHBEFDRpQMmU88gp5kwPcq9rPr3S4yDG7DoNyKPpVvZft9BQHrT7g2"
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
