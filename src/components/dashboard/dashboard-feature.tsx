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
    "JDY8qKqjuRKDjQ44EJ5yf2UM3kv6gPaLp5g8xovX12hKQcD5kosmQfNTDkU3kytUQA3EepVysCraa5gaXLs6H9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fPLuNGwWZde6y8dh7EpQTVXeA3PokKQg1ArRvuACxyueHixHojyfi8Kzbt6hHwhHMFm4JcrvtuaaFzUwYe8vhMS",
  "key1": "5aDtBeaxY37mRkSG69qKv6xtQeJ1PoWxDFat8SrUfyYxABMVUDXyCU3mD3E74m7s9JYEgGSAsU3oFwY72bbz3fmA",
  "key2": "3wyX98hHsdMAXtW2ftC5svHRXiohTCrjdAjy2Pzbzx3yywZrvFsbGLrt3p999qJZVKr1VWXrs8g6NfLjW1z44aS9",
  "key3": "2V383hhP5HLEwwGkYv1vMdHXfFpsx1z5oHLedU4XzP2QGa9rqwhMSU38erJ9CEbgScb6ACky49mnMhJfbw61dynv",
  "key4": "5WPLM7KWMKvpdunMdVzbFtwrZfLwPmRSAS7yW5nNp9QrsRkJiDwcFcWkwsHMTSrTiuiufWwjcsfRmdP5NzqtZcWa",
  "key5": "5DuWNYPw3XvAT8rFKhG8i2Nh1t7twHb3nHMUktiL2eL4ywUwxt8Q8Ydui5CESW38ZGh5pPbjyqspJrgvAUBbgLxp",
  "key6": "4R4JhKcgs9yNqB8eaH8DhSBrJXKweguFC2idQTMVuFkNpjHsXEyGbNJzMMo52zQaMk5GxQNa4NEJ7HCQVXHYWEFZ",
  "key7": "4mmAKYvA3mg6NXDYDqc5ne3BKGz9Fjc384262UNY1rZrpCWcnuy5632PWhMhHARakVrW8mCrhYKLBS1cx1JXLysj",
  "key8": "4wP6zdWRyXzb8quuZDqp1q9grSr8PjYEvpqmfv3xcArmbCLKA55Vv16HeobNSr6i43DzxfHgCRZ3sndkypakHtwG",
  "key9": "3GqCAoBZaW8uZgRsE4qubeCDJRX9k6obUfUVgnnfovoCmqZxTTWQF5FHVGVHWtmuBXLrccr5s2W2f3Fu4eiu5RBm",
  "key10": "D6NkEzgkn12EX8E41DWeTgfteXVgQBbnHRDhdgkeGpqmZEWs83c4vbrfvdeuF1syUz1QMGdui2K4GfZtMu3inUx",
  "key11": "4Yqrgte4RaNQoTBUaUNsV8SZf1nKUooUb9syy1GCV3kUw5HQPYwgwXw9STzUy5yqfrpM3svoozLvH587ypnCQtW",
  "key12": "5EHDfzebrvD79KoFhLgRAKWi1AydtfQL4Y1uBRtzUfnDaDPpqYnsELDMatBCGVVAxn3aczPkHY4nnR5X7ayXG9nL",
  "key13": "5kFWR1twRDgxcfBVoeQUYanbsf3rEDpYCLK8EondKVgZx83DHbQh9KdDp2RuQ2aWy5FnPSo3i9sByH6F7BgEpuif",
  "key14": "35eRu8wPHa9v41PCEWy28wUFVF5uj1JnGFcKrdv4s6k64bB4carCCHWSt4tEqvc5gfZe8iVmN4EfJqHjQVrz66Yt",
  "key15": "5wCUDZEum7yrPWusJUWLGGoQetVzAU1FBGsUxNuBvcxifdcvXAA1Ar9harWtSJARWrmmAggb1FrCUZ9S39ueNRsJ",
  "key16": "27SNhEHa8gZuV6d6T8CKfkd3837PS8ii43xyAjkv8jsm9PPuXVTudJsKXwpVisfqktYuwgRCz2et5yAy7EBoHwwF",
  "key17": "3UqkcFCXGd1NF4Ca8xf29XMHnJ8rJXbXi6F6xzEveDcUYvopgjY3WL3nEZsosi81mXeiSgrfTi3A8pdhAPgk7fyc",
  "key18": "2kv97YftNjb7cXGPzCMQLhazp7MBzBprWE31sjXM9nAbusrHET4s1ysaRSQ6iGSFEoHEzK5oupMwqfCk4cSbA5Pb",
  "key19": "3TRQkyveJ8UNaCPjzmKhqGz4BhfP4nn3MT8bNKbUVKZVnMP2SNxobg6vHwUxY6Shrn9ES5yMLfLfeW5NJ2m5ypyj",
  "key20": "3i4TYoGGMoeTR9ceAUwj4MEAuHgaskpKZKsBoQHQibSxjmmb7hBkGsQg6oFFp6pVhC6Ym23jfpvUypr6HKJqXuip",
  "key21": "5FFoY6ZiPH9u11X5N4GXwcugs9wNJAjzKKQaeqLYECuTYNone6GGsLkR6Yw12VJ8uPsQEsp9udqcFxzU5Y9urR1Y",
  "key22": "5uncd2eJHmfAm8hUKsDfgP1QtnJWufWT51JfRnrfyAzwByZAKjoA9byhNvFHjEQT7CFq2296rQPAaMFXVULnFbn4",
  "key23": "5aBDhaEr1yaxhhTa3KgCjUJfnUoXQCHqSCQ9wRhLc9FWFd4mfh82KkAUdHz727hXfjy5U6BC8FM4H1b1c4roQpmf",
  "key24": "kbQkKYM2whjV2Yq6eQAUweoy1YiggrBEKukRJZmbYj7Nao3mXY9CnxQ6AZnXV2dhFRHC7xMqJtHGbTqHttVG5J5",
  "key25": "2rgLLbv5mH9US3xGsJ75q2NkWcAT5TiLryHsG6PMioc4z33xhEZYvV2mznBCmSGTJYGyZ2usf8ENuY28T3sxtR18",
  "key26": "jtmDEyJ9GgFKDFsZz6VNNYKr3GQe5Mm5bF19e2TtAW3r8tuFWUQTewNNjWDArMSTA7wEPv9h5LQLMTgLiQVsV5B",
  "key27": "5ob6HFJNHg899UArWu9US96FmAcr9A3UMeq95b1nv3hnb5UmHQyMtJwjbu8o3kuumEKY28Bt7kZo8wrTZ3FiXwDo",
  "key28": "jM16eMFxUTRDpMzp4uRD86Yqj8h6TYcKSpCDHWF27gUYTJcziEYXSCG2vGQxa4iJJBPaBaVQz1yM7uyvsaeEP6A",
  "key29": "3P18hdbCc6SCEQd5aXC6ZbdUNfFk8ESnAVqmjBkZXyV1GCCMVanvD4gnFQuAfsThfyGXSSuZE1AT2KJzZYkHo5VV",
  "key30": "3GYknskUd9WQoXsU3RrUxqzRsHe49ZTqm6kMLckf82xcccuSaz1LnoRVCaYwsD1WaHDjgKxY6YMHdii4ksYkMqvQ",
  "key31": "56opcgLQXoppNsWgkRTLYYraP32S6c1chERLGmv5aNSS8TwTxtw576fW5dXeMjLnYB4ceTrbE7S9pTxb5of2Mint",
  "key32": "2vHAbBTb2mmdH6i7wUkBg3QVLMe2EQk7YYvUAmr5zSnPXxfj55oS3gRLuHyJR9H5oG39VMRW3Ksvk7mYgnufmgUE",
  "key33": "tBjS95iZ4srRXyocjzcajTYkcscE1pT4ojKmZabswPhC6EtEttxzbXSUbMMzWm3HciVLrz1LJn5bUJFnCL9EPfU",
  "key34": "3dntKvbBVJc6r8JdfZgJJR2RuDwsbqwsraQWLQ2fSjvrs1f6J18H5tw5smJWLV1isJwUrNgqZKqEo91oLx9Rezdk",
  "key35": "5eK1N6CksEtxn1vdbcBWERLkbvhKoNVKxZ8FjXeZycDicGUJM6yRUxeLQ6561vwnwPHMtxAjWE5hLttjFACkTMQo"
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
