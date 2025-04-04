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
    "25VQ8Yy3u3cYiwn2rYSVdTaiwCQcpsAZYjFUjm2Z4fRi2Aho2soHATEH9Vd7abkYQ77enqeq6MeJ7BufoW8uPbTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zb42T4MfLdUVkEFii9HgShFobV73S5YYA9QDw42qCrSCZZsc6Uc8XH4Duct3uj6hyWKSm3niZADeEsmtgLUYSGa",
  "key1": "41kApDFZ8xYxr1UyRb2AjnEwo9dw5WqrUNrKDDnXupMX78KUXQZx3MB2p5GWCyVSjgCx8SAu6uLjzeKUSdS6ecTq",
  "key2": "mBiogx7s7g41DmnKMfb8jdpj41GLCQykbibjuFr73uVJCbT2qWPw6M18FJ9Yz2PzBS29tfFkRJaWm4S5hXnJAxN",
  "key3": "3htQQ1RoTHv3qays2ZbcEHh4T91YKLdKPuEqBZySo7bKLVnBFbxhEq5YZvrHmXrk1wKUEwkxu872kqT75keZpi8r",
  "key4": "2JMrGiRFJdG52DzM72L4vSpX5p17kyn8kovvPZtyApePcQd9RN9aiPbzucRpwD9SQMhLZ5mgHNvDa1gYkSSh71oB",
  "key5": "2LHzDKJdLRdtnZngmB8knrrmax8jZgweHPGFs5xcSewzUHkYVdYRwAKrXjWffvy2qPS1ZaamUoAGgTX5xskSvJCn",
  "key6": "26SPsBYvQqdVFwwxpvtmLmqMMWwLui87pWeNnArX1TPvvNsnwDxsbXDy51TozBqk7cRfv6kLsqDo14fwRKJykC5a",
  "key7": "vQ9XZkwYvLaFKoBrYExZVoHitAX5hcQtXVbgv3g55CZ5nDzgvrHVxG8G149WdhDjzg9EK4DEMZeYh6WGduE8rLp",
  "key8": "BxSJm7h3irYb5uaYQFRMBBwvVALFyLErDcz8f3UTgKUYS79RXyNwD95AZ45vzbV2xqbRGJ3utYYB4pUWHvBTU3Z",
  "key9": "4UqceYXSqU3U2b9f9TJwhYaE1bZYn6zpxJRGT3e8k5bNMABGDhmFFhL7UQvYp8y2GWvPMKyzTeZfg6bq97gadseZ",
  "key10": "n7gUgtSmt7HZUB1ciZ5CPqTC2VJrw14hPvrMDqUcePwRLgPrEt4AGnTPr7UyJXnmmPc8bCexknT4xCPqxxo1Vn4",
  "key11": "3yz7oRrfEivSkkearrnXJW4FRxw65ct5PAtNYCLSWkZETMqHAWVDvqLBzZUdu56FSaCXMb3HNy6w1Q9z7vHJ3QYx",
  "key12": "4jftbCGDDpU6uiTVe1zaptQZXtVx63dkL6giCJgB5a9LbqBqtyuPT2JuzUA6j7hLkhyRHBngHzbhneUiVAE3bazm",
  "key13": "4j1bvd5QNsuzt9hSYByXmaJcafyNS3HSa5kfRCFnwj72Z5ChXRNc6iAMwszLCtbN8R2tC9kgR9kkjs23Ru5xrJsC",
  "key14": "25Zez7qnCz58wc6jd1pgipTL6oL8U3hPkD3a1YN23uSXMrcQQ7Pka9VZikwEjSRC2xkd6kcSV3mrCj9FDUbQS3EP",
  "key15": "2KK2CbUiAQfEsMFjMn1AgZju6u73XpyMEzFE4fpy6N75LtzCBXy9RKt6vTRGjWXfJdf7BbwdDSznD5j5Kr5Zsoid",
  "key16": "5iMGoieP72T6oSTPwAR1KwaGSmpS1ev2ry8fY6a5zyh968cUgm5yHztFnqFPoRW9525ej1rRuRfoqRmqaVHycC1D",
  "key17": "aBvEUfGjnHFxbpDr7UTrFEnEibAhh5scTLF5Sn6PR1q6ycC5iAtxZQDpwktH5zKsYkKdRg4jTyWK49YkzoPYVDZ",
  "key18": "5KTWLVsM3fVVHFWFkHSzjeSyyMeg19dpVXC3cRC56kPhaT2tFMauE2SSTZUFs2dihvpktvhAC367svSAfWEsdDha",
  "key19": "2RkYTjVF36Z4xd9KHpmLjSTHJv6GrBKhY1MURHdxJdqjHuj5LbLKXDNJFNGkM1PEMhRuzaYwNwYNqHtB7eZjpq8h",
  "key20": "5LVzHzTEmUkeYXiu9qckEwcbzLVNDPgBkysRjtCDk3CqfmuTY481uY7SCgKvWWrMBZrFkUFR8zXnFoDfN5GuhRR4",
  "key21": "5hW7j93cpRfG1piqEp3z7mgaHP65pqQaLwVTYjKrQACpx9WnBFEyajPo7i3XGAK9eoEmVbDKQcyGTVn7xoGjA9Wq",
  "key22": "5KGer37NYxkK8N7uUxP6WU42XRJYmi2JFu2z7iy3hPERuCLwuihD6yyUuxKNgNTL4mxcRmAm6pvMjdF8UTE6UCMJ",
  "key23": "SubDsY7CFsPzngRZF6terwKvcCbKFVwLxK7j7uNZ5MB94iwyb6WZvKFrNKQLgm9EViYqvRuVTZrkySbj6vssWKH",
  "key24": "jEPx82tzr2Siq1gaaXHc1CH2sEajUESN8pVnkdC7RmdP2Hg2TDnxpFWkYiFvZN5uJtDirgn2iKS33QQZrUy1rMd",
  "key25": "4HhFs3cCCctvenu35YjqSHPZe2ytpFMk37B8VSLGoy9ePB24zxL89HGcqcT8sgKH8RhncqoTxqXbgaZymJnZwCen",
  "key26": "ccvqFnxQ8mSXVvWgbUFJ8K8r2mu2y3AJ6aFuQPWvMiupLMfvjkSJ1UYgGrtme1VjfMsj3Ec6vp97c1bYGvySEkL",
  "key27": "2Lwr5JKqcdcg5g7Lb78AxZALVJMyPXsLC5ojA1CE8woLhqThFs4XJ9CCUbXZeair98rEExXmPispd1MMGaC4usx3",
  "key28": "59ScDxr1caqo6VJSWmJb45KHDAE27eg15h2e4nMN4RXGv8xbrzHAyrA73iudyjNxd1ErAimPnr119peAS1uaC991",
  "key29": "h53Zw2gurMywhQcJCaDJJZSa6PxocRUZie8eVHTQp7gioFHhQtEdHNsgsoLvGhzzkPdp49BMSQeNwLpk2oCuFzA"
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
