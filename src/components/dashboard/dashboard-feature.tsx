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
    "5Ad3By7pXeDCh6wf1eHPKQGkSVLCSMxjwnqWsrBqJpo3oq8xkidsXTwsDn1zky2regte926Five4CisuvmfG7tzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7n2EDL5ymnboU2JZykrbbrBrx81ong93aTWtooaMbsoyC5A8qssEewP9AQVhexpzEkwHCZFuieA86uYn55keTVz",
  "key1": "595X5YrCh4HdSoHz2nn2pUZLJMsdomuxQgBV1t8XHViG7zxWSC1JbZ3WiRE2Hvn5aAF2U6U24eg7xemuVBZ73sqM",
  "key2": "4UaDSy6NCNoM6nPq2RmmbtbSjmzEizYqYHfEH8bcdsEuBDB9W6kN3o9dh3RZm7zwgupyubn12mg2w3mrFC1f69pF",
  "key3": "354HjTKjVDVCHmGBSxf3jG1hqtvNjj1DKnFfHfsW7iz3cHjzkLPBovq75a14kWUsYVrE8V2YWb5tu6RDL1hx9M3L",
  "key4": "RkEzYZq477qCTJbgNYUS6AbK34NszUmkusj3SdNrEKGyz5hV2ti4if9tM26wPKqCuJsMXyeTacEAf6d1upVBPnH",
  "key5": "5E8U87RD4cbs4UVx9dcteaAAhfsRWsqrkPtqFk7a4yNTdvvsfavFwYASzEkkBqLn6pGoawwhmho3h8MC3db2UUE3",
  "key6": "22pjv1RburTVeXVKSaCbymrdHtDRcoJTEPQ6rtLLyZFsY9xfmrowYbBjSytuz9Yyf46ydB7PocLmgQFgdmndPEj8",
  "key7": "4ndxumaPnGUewsf2yAFgQPXuWw9pzWvFEvjrYegU8aWobBh7U4QD5p4EA3VojRzdAsdEc3NZ2BAWAxRswt2UBCnY",
  "key8": "c7JLS3ufhiQvFWmTKZ5GMmivZTZC9XBjhe2WCwcGruZUv93gYF8Nn8XSxe6utTgGrjbsW5YSiWCXux647zHmaah",
  "key9": "3u4uotRE1W3pdww74bq6RYzX8jbP9tQcrrvTo1tJT4LNPnBiv1hb1X1pFYB58LPYGJjDsKBQ7B1UpWLRUwbwAMp6",
  "key10": "5fUiizwNx6V2HgFyNJ1zXE8NKU7BALDHEvJ8r4MBpqzErepUzq67JNU3dmpFbH2bKaB2u9Dgqgee2YAN9nTFtYo7",
  "key11": "5grTdCrM5FAugQoyYj7N7BjJwR38dWWHchXtMDZjXddNyKbZjksXDyB3R6JNiSKQwV8zaQA3Z3VhGCWxhLfmcEqU",
  "key12": "2xCBksEFFisueb9vgZuuxVYq11SVR1WwDJs4VJuLnHqLq8BamAz8QKEPdtt68HaCsZgM4iGSeGvqnXF2AFCwWnif",
  "key13": "3vQW9j9a15JsxFjwC7nhq69shMNrrAdtZtwqpw1QDC4ukYvmoQb7FNTp3nGT2fDTFnCYVQYBuv35PL4QMJ2AH8hf",
  "key14": "3VLckANUv9FxbiwVy8tfDePtRa3XYHGqYaT587HDbbbjhfaPV2YNHpKLtiNrgPu5RzULvZj3CkGnSUkhn9gcC1LG",
  "key15": "5WmiQ74ryo5HohQfeJatpxbW1HSe9ijfwSmdVTqvqqdNLD6wFuFRPQHPY7Mf9ojgFsmZV5iTjsnecqRrsVxfPQkV",
  "key16": "zfpZAPGrWihvZcA9KuwEifa4k5GL44wcbBYuvyVbihVXw3pq8R7f2eJBkDyLNv9fAWLS73QYkgn824y3LxaoxRq",
  "key17": "5MfuMn917DQSqFLmfKsriafvu3Xuqv1qnnXH72qSFco5CgmEpFSgZ5ucHfWCBna8oKqp3XjNy6SHxhFZvznYRAJU",
  "key18": "2NwLPLyrQK79t2C4iSg78ASD2dPgNQdczu3grCw3dT9prXc51jHZgmkBRnvb5S7BYUH2McCJ9SZ4a1TWjLMa9ycZ",
  "key19": "3Q4ftritfhpy73aDYkjP6XEg5UnmrKBr25K9tQ2yXtE386TJ9qr53WaWXXKtoHjJiyYPTr3M1KxxD3k93gWWuaX",
  "key20": "2tyBnuk7izGeK1h7gJd44vAyXjA6nTfWu8CsUh473fWinGFeqJiw8eY5cQfZtjZ4GZejpfwJV5rqxL2LkKGHNfGg",
  "key21": "22wWf8fiEYz8KhP7KN5G9GYEQ5NU8PSgEtQtZTxmspt3MiZfBiwnH4LXFqdWuWeTf5nSM6rvaAMr1rFxszkko8GC",
  "key22": "5SggvS2PU36h8rumsy1GcbTTk6CdPjaPdFF4s51ZGbUQcnq6mFaabRXoX7E3Zcab1kfHqKbgNNmpw6n91vc9b7nJ",
  "key23": "44nLnGL4Vabd1QE66hAG6GZ5yrPCtcJgzcAWCr9oPiW5w8KkaBYhR8kpKzmaEPixwGd6quaTDh9L4R3njCXUq5hj",
  "key24": "vTvaReq7AVTaoXtNM49LjT4t3MmvKHN411eBQX7ELzAKyVdAA4qpHhwhzausyJ9nBjzzVWySk2EpY2Lj2NWvKMQ",
  "key25": "5vTTkK6MaKSEY84sWWBb1UmcX2YztXmGaHjvg4agmgNPT7wDbNWJ2v5uC3TEwrmjpd4BGx1icsAWoTXSYEAH8LgK",
  "key26": "2wBwYdUERYhbneEDuP16ydybpgmQtuyjqAge2m87yLoUzoYBD6yeejZk8bBAKJHCA2ZBVQtYb16Rw1YQsXqFr3qk",
  "key27": "2JsSqThnhrYiTs9WuwEhHNiAasnfkkRqMm9yCrtVmXsrNsHU7vnDFuEBNZfhNNxSxEaNRe5jBcgaGT2RbPugCaVF",
  "key28": "35NBPS4fkBDdrA4yrdt3NKimqX3P7dMcq4YVHu3wB73JqobUULgxQD9ktyvCK41E6HFvp5Pna34TPCJmqksxk3Bo",
  "key29": "2aYjMC4satyBrjpYd37BX8kkGW4ujsaPAvfaeyUNu6GTxAigZRUy8m7v8Z4LrKESCrbtYZfdmJkiFZ7hYj6k5ZhE",
  "key30": "4KnkF3nfYNdCtDhimYhwnkVXj2WzzgLqmFF7gxcKWj9yqs3hPXBaB1vG2YJC7UNxMwj4Njz4WRhSs6WgRmjoV9cH",
  "key31": "4cuZgKrVALdvqu4UuCp5jRLZW6bKe1GMpUAgSu95dR2JE4uidYjaR5NsixfHJxRgCT81gJPygRNrj137LwX6YJLf",
  "key32": "3XJx1QznMs4oUGbqtNUNhDAq8M3gwAY4Fku3kTZGF9ywkjgC3gRUYPkLNfpChSsTvHsKL21JThnFEWAAZdqgYdrN",
  "key33": "3WPLnVC3PoQcJGDBcKoSub4sSQjSHVny7TZZ36Xe3rhzdVooU881T9ZpbazT8W5mUJUTQPErh5wWJPSDhhJuuLXU",
  "key34": "4fLGRq5oPnKEZWWmVqUXM6fbj9yR6XScjcxM8bcVLAF9fL8geniyaB3X788oyM69FackdySYfKqMp87kiF41KNZc",
  "key35": "5v76Ac1C39EaBmqmfK5QrrMHMym3KcSWUVzPQ1X2WdY29gr93ipStkoKLKrGxhR2XHFi3UT9SNBxs5LWxJ7eQQHz",
  "key36": "4XdXFa7EhYLjEiWYGXC1tS71utUHPhpDsA2GCbL1dJSKDWfvRdgLAUk7v2eKerq3MExkz5W5vY8QaCYwxeLgot9V",
  "key37": "61aUkX6sM5hGQwzWpykG8h7Zwa3NpmhR8ob6HpPyyf6X9JSE2kArgu4kuq7e31nxodhqhNsgJaPUp2i7AYGRDH5n",
  "key38": "ErupuQt8PGktq7hVh6acrLWNvgVtxoCSfjQz3xGh1rPZapurU7uZAjV3BYScCTRqdoubQr5y1Mb3ygqf1B4L77f",
  "key39": "uy9MkEimMT2zR44T8UVKeDfM9yRLyqHJiyZTYGZpHP25F79F3zGCD91wcPjWRh9As6TPWpBZYiiNU6Hwgy7RVB6",
  "key40": "W2PTjc8NJvFkW9gFSeHeKGKL5a1QrzuFUHRJsmCXvWqvZoxXEo9U723wk4XTketCnPieAZjUZHeKg83R4F7UBXr",
  "key41": "4aLCX56A9bBpSjzXjCfVmu6rUi1iyfPR4ufTXbhNXPzSVaCg1Bvbtqzzh5Dv4xQCZadZNmhQwjts7SwxAhJYtted",
  "key42": "mN6tnYYbJXzJuX5n5jrVmEm4p1ipUBYYAWP46HJcn4WwdYcFYUNERJUYf7Ba75ccePB1VQCVcQiZ2ZEBAQzYB6n",
  "key43": "3ckS2WQKtx364yJxbBwfipH2ZsqPjZXwZMcfrrvpBH3vop4CunZQUhoUXYuKKGVboTFe2M9CvoaZL7RrUBZGbz1u",
  "key44": "5NaQQeTGeonDG7ofRp32JkhSdoKxFxD8pbwLmtvwBNWLMZutYXiJNE91v1FHQExfW697CFSpQu3AkW8vPCkvLNRR",
  "key45": "4AxDfhsKV15UiwBnRFtmVYs5uWwgqGHVxXPscemEENDF9d8p16eCY8Be5PiqbMRhxaYtUe1Vj4PLnKcnUD2An57U",
  "key46": "3SkdF19YePhef3Su9w7CPXiPYqtis3UTAdRPHJYQ5Jt1ELKiodcjfCKM1HQNNSvZnqH5b4JtbLKBVgb8jphYQdF8"
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
