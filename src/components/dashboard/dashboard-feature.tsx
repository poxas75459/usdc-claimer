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
    "27XFnwmyv65pyzQjtcSQcef3ukCH5BPDcH4oGSLMeHVnjhZGxLGxaK212hpbPNJLvLm5CdgHdJvLzJb7gEozWZfU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wSX4mqx6WXdD78uN1CfDoZb3rdWz7FH8BBhctntkwZ6T8HSGR7jSbEhwV2icXL232GPjb3EhATyB1QUjRQRqVdL",
  "key1": "TBw9gsf1n8Bsg6LjgYbvgk6cLi9zY93zLVgSuVQaMkfG9LAiHsx19si6pyMJFSTU8w3tnCNLQr7FVi43sw9nepu",
  "key2": "G1KiyuAaRbp8RzVKm9TK92C5TGEk41pAUdPZUWVbvmCJUAyZMq16TJjJskwYRCKnq7J3ZbiehMo7NDvRAWqu5b4",
  "key3": "4n3fvhkRovzJimA8HoGDzH6MQV69ukj7x1RBCAhPb46p7iYXMBz5KxzuXUxiGj3AFQSd1w6LjA3qGG8kKDn4CvTS",
  "key4": "MuKscpXqZ7QmXx8MuSJjeBnR7YvKTuBSC5BHquLsoZmWQ9XmjS8BzKUdG5QvCEtiP4K8f8Bx82Q7oB3CxbM7biV",
  "key5": "3Bz4UD5xRuEwnfCcu7tfpbRjCY4EkUQeuWSqszYMcYK8PKxZAKUJ7PyGMzZ87WYzqtgHYokmrHVkvF3L9EbUfAuH",
  "key6": "3khmYWv4D833eYSnjLrdHU3V9cvYuHyDfrjrERJu93brwxgtUhfuVqj2EhVssiux46i54LoAe1AA2AizLvJpWBvy",
  "key7": "5WwJwmC6BBF3LoUTq8G8R6Mk8p3qAM4YzbaoC8bv6o2kYEaDzskTak3UKDDWhmFZEPZkmtuzDpoQ1ccPRDCFgYA2",
  "key8": "4g8EaHVo8nhB6sTumEAh4nN9WVXAbRbaJts44AtzVqc6u7DC5fyBqFtAtJoyVJGrU4ro6chLnH9yP5TjGaBn6Cn8",
  "key9": "3RK5sEwCDQh64M2XizJ26iMBpz6dW53UCg9cupsKxCz4CcMRgzUu2YuyQjGbGx7UbbRsKnpeFsDfuboPMQJZhRXo",
  "key10": "35wA9Qt9pKRuk91i1Vv9nfSbabyVbwhpBfedz8G9FEuP7kTGympwYpvBcV8mS6N6A8NSHYmQsqNABa7e9ocwZ1Kj",
  "key11": "3ei3moaXHDcwUWDgWp8A1CVM5EJuUYDzKsSU1dyNLjjHaskSwN8FmaVhcHpaXzq8Kddnr3RbTfUPDNA9FEEbioM7",
  "key12": "56kjWjNCqJ5F2WtNUsGLqz4zfSb5q3SrcH8CArcPhLZ6kMQA1HFBdmBBSeAdYn8PCM3eSGFpqDwvxoB6sk6CtYWx",
  "key13": "586X3NRx6Hm3EYJMtKfS8uc8CSNnb5Q6yyRbSKHnEQ3a2PRpJrgfmSyc2yn5D6KfvEzHedf5fnDG2s5jfoyY1LpL",
  "key14": "3QRya9K1hjy9CSLpTBANsWGQNKCPNFnoVcLZzz4xgiNBJhtEui7Re2JR7PywKcoGax4gSUCyytUrjkcf4ceRTXso",
  "key15": "YUM8L6rEDjB3QLWRyDejAW1rG5iNGxHYYs8a8hWmfCkcp4hcWCHqL5fHoKmZ6SSWPz9tkPhnNopnGEkrXqjP5WH",
  "key16": "jXqV9m3B1p85gXwJniJGmk4EyrVEgKnSRPfeLUNUoQkUWwSkR6qDCiuyvLLPwdoKsst8LEqCx2u2uZBc2puZ3kK",
  "key17": "smAJWFVk4moFn7YUBRvwpvRU69XNAJTQZXvR8fNa3yWJSWJrJTvEfNQdthaJn9mQZu8UArmvksrXxbJ7YNRjFwv",
  "key18": "24deC75oqVbXR4rohaHS7aK8mNTn793MQrsoqBg5YA9PuAG5KpET47n7Bcc4Ybcd9kDYJnvVgwxRu5HhguVhp214",
  "key19": "1MdWhMphD5CrYf3RLzZCNPH9xjXQ9DizbFfaePfVBoFD5Ts9vFqZHJtX72r8ppgKL4EoTSbje9PYtBZZ4comTas",
  "key20": "E8R3LWTgpn8vrnzer9iK7GdXHngvxSiUd3eRcX57opyBvdzdQgZJWpi3NpPUXY2suwo9oGr1oQ9qLoZS7twqbuJ",
  "key21": "2fN3GV8meyx9nJw2UBcrf3b69j9GcZaYwf9eSWknNYjBNrjdVBCK9Q2HwiyyyssrRJgxLMBC936ycugGTbN2xW1P",
  "key22": "5UTLfDuBCksCt99e6mKubSPHksXWjKXSjRuwpMN9zQE2szeX3XtAGcrqaWTDfjKM34XEMUcvxijrsHsDiJ2KnnZK",
  "key23": "32vSkxhSxc1ad3cxkCqh5UbhjWjHjjjURSkZpqTzzEWyWHurLaQYWkJC3wPmUozybqnrP1fnabc1HTQMhaBe9AeU",
  "key24": "4aJ1ZgvBunNQcQ9KstwMkn4tuth4ruSYiEXGPnoQu5k5xSG8aKYThQoWkPkPr5kcG5LMfrinztU8NPRB8ZLGfRJH",
  "key25": "3xcFtA1MpPHrCXhneh4thMX2aWnGuT2xKyqJfHYrKrC3gL1WBftDoiVwhgRqTTDoCMy3VpczqJNUZ9Y2MVJGaqvm",
  "key26": "2MUTGMEcC73mKSZr7N8R7rv16jMyjKrt5VESZqeuoisT1AHYK9QP4DiQazUYgi6f1HT1u6SadENwJPpcgZgsr4U6",
  "key27": "8X8anzTyXkq7SE7sSCDKYkeDyvwAReaNQYDQEJkKEomU5NhuGaXz8QhtTMbetoWiaAFg7txmEnb3zWuh4hnKNKV",
  "key28": "5uEXbuSSHKEmBc5AbzAWzFCqHzsM12KoSDfPRQFakdV1LWEsr1SJhpLjAJLScQkC87oS1GY8L3qp24kMyXVw82b3",
  "key29": "LB7Bw2CXWdYkb738za3HwmbsQkCfjmv47zuwVujsCEVyD2yNn3V6pFVA3hYuTXpTm87RKzHbqjWXRkKM7Fsw2jb",
  "key30": "3auJKGgJAABhKVAVXspgxvxC1jJ86WjDX5m6knHvDQ1SnqqVkD49xgGa5e1GLfg1G9oifV5tgYxG7eeMNWmRj4LB",
  "key31": "2fDBaGJWyqLkjT9jgrF7NGyUE5JKvJzT3sw2hmpMjGqLiL3vebaqQNyu9DfWG74Zm6WCcfer9zSRq7r4qYZGN21k",
  "key32": "24NzsugAH7kzRDmosyArRjBP4aNyvn2vr9iMuWgc4vCN8xbaozExBwfJrykzBHFY3VPFg39W4MNsvMmELAfZ69yy",
  "key33": "26Js8tRsDgEKzRWudnsBG4UySj7WMX7uch41PfVSn6PJjj6uXVXdgA1QTLWSdkR6nMsi8KWMFCNKdmeB1fHM8swr",
  "key34": "4bG7ZeVtTPmmaCBuruYFX87t2mme1cdwuKk5EnttmvU7cLCq9YVwQEAiZSy2RkdsVdAENZUHdvPJAtj1Ji1osdry",
  "key35": "2qp3pLTPpqUNrquz17ZduboekuuYpERxw8zCz7CZmyMzwXUkGUAFEDzExs3cByX5F4WSnuCDNF3Ueee6z7WCSxdn",
  "key36": "2w8gi4L1E4BEXFRgM51j9AeNHoFiVMcg9pf9cZp1CAsZR57utyEAUGMGRUb4ZL4pjHVw3goweEDw42ut7j9HQW93",
  "key37": "4ehsnrL7TGd3LgjQVQSo3uKFsUebhH4Dp1CrZgMBxyhntF225VPqsSMzCde7yiRQArnM3QHYnHA1LaS6yoX4Ph52",
  "key38": "4YKFAJJFBK5vb67QPXrWX6uL2DRZYtgeBh2Z4AgWvpGbCMRFVpx7g7V92inc7umtG27GxTjtSNVDuFeMMuYnvc5s",
  "key39": "4rLcWr3b1xeoPixnTmqvDUqhYJCw6R32QojNAxeftVUug1i4MRHBBQv7qeTWdxBbs8JfqkAXvDQNWgbiReCeyzov",
  "key40": "32BRH8GFYLPwGng9VNqq2LoTA9TuhUBQ1X7FndyC8VTiDPcccyQdtoNjcZzdDhbDdamtdXTa1bM7PF8qAy4KbgGn",
  "key41": "3NtX9bMzYfkupEozhLu686am8h39mVwaZ8ZKTPAcbbA7KbrkyH1QnRhdrgErtDCnVGJHvufRPumpnQQRJGqe66gC",
  "key42": "619W3atCRyH1z3M8YQN8vj5qATLWippykv9sR3PVfw3ADqsYUEn4zDX9CSdBKn3mKp1MiXfp9xRBw5V6LnU3bfRf"
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
