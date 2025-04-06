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
    "33ZXTH2qcqJT2pYxUTyrJ1ByUSWa9KP8S5qUHLNbr1vjJetUqD7HrBv3UYcror27bRpBXFXYqXt1KohECykugiiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uddkL352FZVs5kBXaXKzPFJTw3cK9rsdDYPY6NzrnNwbXAQVSwrQ2ugkcCK5mYwpzV4PW5uLofubaNnc3k2Ekg4",
  "key1": "4M9uNquxBRYj7AvF7u4d1oANUQaH2JebxfoVmv4Trsuz9HE2KGTFJYmFs85wX4EVZ1E9WkKxM3aNsG7ykmXityjF",
  "key2": "4Lcqw3NMotCx59bTa3k2nHXK434fxNrtumvn9WfxwSmFhDddw1fiZXwXmN9ax18TJBG9Z8pDNHKsnp8xVmwhB3KE",
  "key3": "41wWFw4tuhVQ4tpku63S2uwygVZZ9qfwDoBx7dYiq73MdBNsJhLobmwVJd4YYgnpTBX5hRRqBjtBLBbwazPumFRw",
  "key4": "5LRWYMHnj7iCZuEnTeBof9oG92EPePSTuE1WTzWRARRhraVwBx41sGE2Mpo5S7CLTvfapJXuqLQxkRxhWwNe2da8",
  "key5": "3GUbT6f9jQSx3K5gotjjvR7Sg7mc8TquJ77ATSw1gKRPPa6KqhqmiLkNCoFmBaMcMzhxX3FqpdhUpWVBekVA5izC",
  "key6": "sb4cf9YnT1QLAKjixi48KRgXWVXX1wHSa9XLUsvevbdvC2FRdGkbNHfQPXSfuXFqXr4wNtFF8k7Jnm2aADwci3o",
  "key7": "eQi4mZ7tt6QTqF4gf5EHqHYGZMrKachj8G3vekAtpjbNMNWBMamWBHJ5Y2Abn4T51HsihCLt23CdozVMh9UWGwX",
  "key8": "4kBoqXzHfiAqCfpZBBgGMKmGYU6vTvBCLy3MXNK27VpYwxJNVcaMaGuCmS2LiBXPYvCDY2fQCMwKP3pswtrTGp9G",
  "key9": "3GDxmAZpzLWktnfY4ge1XW8kNSz9duJtmcE5GMjZC3VeYDEn4GzAqqKScL9zLwuDqsNrBSzj3CRqaUfqqoAdaxHw",
  "key10": "2MYd6Zev8gNHPM2vpaT3PrMCQui7UacqHXgJJK2649RCgPqnBWUxN3ehL4z53qSDfYFM34kv641EEStkdcKDgNoy",
  "key11": "4Vh9tsTzLxaJNn6YEVw968UWnHhartsMC94itTNaKH7RHLPNQGmyWdsFZRA21DhRYQgRmoXR6sYhPxM9xVTPzMdx",
  "key12": "5auA1rSnZ71bAwJPLbJmpqT9MzCF14zgMHWJTtQ5stJsv2r7EYWtUVcgFGYTvKqM5ChNsMV5WGvxMguKXaEZKA9f",
  "key13": "3cSzvM9wH7poAZ2MNhL2jo5hQyA2yRfLPDsSDbxsQJQNaL9BwuNJweKN35VaRwD5UrgYZCF6ATyJocTJxYAnKH1d",
  "key14": "2argTBdc8D1ByLHJQGRiyMiofQHqn2X1niPUTtPMKYdPo9ZaEMMKJ6weUt1FdGMe9ihL6LwkxWb3Lupy7c8qMmzr",
  "key15": "49bqkSBbdz1JRv85uH9H1u4WPfzMS26MBJuj8VcPFxAbLosjnac7uC983NqjsYQrMUh28onYNSRYyaExPDHziZ27",
  "key16": "3o1kBqz3Wu2YpXFUfDSyn6p2BQsYhiR7VpehaMm94XYDXgBZvYBMukjPJDRPpGu1qPJ49FKcUnGa81kTaNaALt2X",
  "key17": "4wVgw87iiLVUVAuHhqdNrn3pcbc4FUc81QrW1wuRX6GytUmSQWJBTxypojW5yCKrHyNUiwD28Y4Y8JdvwfRyT4u4",
  "key18": "3QAaNFNLwWZPkoanSG865vhHDgikFQ8xEwUCHXFXKy26WvECbvxcvax7DvKAcKQ5fvrcuYYrQV5Mah6mU9U4Mwsp",
  "key19": "v2KZ4EJoCqVHaCxvCFiQdmgD9W26z4CaESSyxdDPEWkQSsXeNpbs7MGrXJBFJBqpUkETatu9aU5Uu3aHBrwpPRR",
  "key20": "28vMF3QebBHdwKU29yqtzN8PoBwSUZcd1KdeBpJPb3vymMfg9jdMEiKmSH5YdpQM5ee5Yq2KNy3XkFH2NGhByt5n",
  "key21": "3FPoQFVq41K3AhRwkziUDjFkhZQbuUgLZzQhV1uSgqkhdJc57csMATndJv9HZFEsobieUamrymCzTbVPbA3bg8GN",
  "key22": "5N7PLVfxAPob4mN6cS4iF31wUZFdfXqH5vmqUU8V3jDjjhvRzneNeL44wG99oTnFr2VztQjeFpSCNHsLEccCboHB",
  "key23": "3nzxfHau1Yvkp4QtbSn2BRQkGBeHxspCkwSXWuYP4qUxuhgV7fHbrAJ4U2aagtE3vX9YHTzfpBWcwXp5LRQk9T5B",
  "key24": "5hxAmt3mm3J1tCo6kpDeA1ctX7Kgh6Rg7qhbRjWHhj1hGQidpqoD9rRyBu6XAZZmiDkrAjc4EXqLrwmWXrCF7fps",
  "key25": "oqpaJhCWezHzjPDBnRteF5R18oNGkejuJp3R8z847YwR84oX7UBjEKdkjod89aFjodUCH4vaAmUPwy1saL8ZZDR",
  "key26": "4yvqtcGFEHyE94ytHoSMsYLff8wiYnQoz3fiFdXANpbuFbiEPMGSCnqFZ4hcU3F9yuWwhxzoqUyFjgDsqynZPbZD",
  "key27": "5pbNEBzYf6ncf2G3sVay1EZUECL5toNQkVuCs3zMTSCTYHWYgfW7Lcg9fgvXM3znMigGukZCr6HuCRwcbwrftZtQ",
  "key28": "4XDoGoR6HRuiFUZMBka1BUg86voTza5Hb6Ks6Py4xfkYzMieL8WJGvJcRcw5KE6dy6aEjXewzYyBjEhhepvTcFjo",
  "key29": "4Q3ZcEYdREftMSwHuRcr1zByTErrkbcgQuPYpBgYi752BsvMmCV2CrJSTNaiBcT511pJkMbZtz9CnXfQSqvBFVJo",
  "key30": "9ZzCPxWx36rUmhtcBWMUHvPozTtnyqKY3BSiSWZgYie9hB6pLEZMSUUuZ3PUfQi4sL526DHh2wTcY8JSMQsMdAs",
  "key31": "2dHp9ZiRaMCgECobbaYU3jjEsSzDpGFKRe6DWrWkf7PpgxTZyrbhK9Sg3gRgdzMTr5Lc9isqzTq6xXwmj9cWCBLt",
  "key32": "44mAHYZC7Riv1RvEoCmYYHpfVJ3gW2DJGJkpHyFYUkx5nDUPeiJW4M6JoSeSTrN7PEvjehqKjNi1kcMHW5FCqNo9",
  "key33": "5iH7sjcP6A6cftPnZKU5JF6YwdJNno9q26145E4XMSVxh1wAwqRuWQ7ca3sA9FYsr87r881DMKJfUMZtSSkJuHEx",
  "key34": "4fgmX88YcNs8v5a5tmvzu6pp8HoXcrsBgW359Uy1zeaa5uzzjBP1HSz6uQ9FvJkjCybVz83he5bFMMghSHvCzHBR",
  "key35": "4JDnJwPDBD9mkvZka91yvNvQ7LfbmxKgBgWR5nXf2QRKkyWDFuJj2Y15GExXPMsdVQppUm3KYcihTrG3xHm7Vpmx",
  "key36": "2dWWwXyasunTQpEN6a3HzAog7c6QJ9WvywnEaA1QyooAovkg8f4tGZdEU8Km1CA4uyJL8BMhUJ6TGiTdoDinrfsL",
  "key37": "3nVCzWtsoFQyrdEMbPGBXCNcprFPr2MqDLzxC5CxggUbsePZbRbEHkSff5NLUNj2ni2tb8NxFQXE3NZf4cWgNPGc",
  "key38": "53TupV7ugBXuhuxSoaa3sRAcE6zbMQDpte2WZyuUrZRzirzRXhBCa7tNnHptzB7jswA9cV991zTtkUVsLqouynjh",
  "key39": "4dEYFQALW5qHdRCFFb16WybeRDMULvF9KirFwDawC5xW9yoNNskWdQQ6pqhvEATPH1cV5TiU4RK1UGevX8Wxw7qq",
  "key40": "5tFXsAfctirjv6J1ySmYKzVdA9mvrjw7gVRDVMnKKVSrJNV4LRUHoURvkQS165MPKDFT3Lnjn88JqkvF8vPxv6UD",
  "key41": "46BrUaWZWR17is38aKrzUHsAESz83koybjuZZxJdtninx9ySKSJKnrrrz66D2kPi93n1MYEWCRrU4qmCmCVozfqL",
  "key42": "65uHYjZVUWqhT4w58SF9CcsVN2R2An3vmdEBxBjgY3oY4ybZUmj8wenPjsQzrSDv3Aqzb8CJHgPiBEtF2XGmnM4j",
  "key43": "3uCPomrwT7byNwscqvQias1Cf4xsACnpsZz1qQdhDXBJnLgJdZrLUVfJZGHs5sPJfRqVynS7WjV1kvN4jwfG9UTB",
  "key44": "2M9VxNbEjUtMTqwmoz15WStrSfBmFrKrmwevjJo5TQbMeXfUfysCvzydXgvGorYyA1dLwWrVoFiAuomVFG8ConcJ"
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
