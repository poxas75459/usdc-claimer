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
    "3jHt1urYmgiwHhdgvu6R7nbHa596eVWdb4xdsh7XvdJ1h8gYF4xcymZVtLH5e17JfbD837uFepo2XNA1Y6N4ZK7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ww8wrxAAdMesgcFFLaA9KnxiWZsn6jiYkhJrXuBtV185NaFFu5Gz1Q3S9iy3Q9zqXjaQxMNe3unFBVeTv6sJJ8j",
  "key1": "3gzcQ8JiJWe3tg8zqTpkchYEJhfLxzhE9aDhL9jUbA1WTcBDBVew9iYft5F8RMvokgkrQgmw6vRhtNgb3NJLCw3k",
  "key2": "58QY2EY5tSt9N63t239vDM2QAW5UTZJtesbBFnaA5Rcb99VesQhGSNmjqXQm2PUnsjCDCrpRHhWXTgsQAPGU1cso",
  "key3": "32WU747vACfyBCHbrzgaQFdqtNXFhqyPAuLW19a9ug5FRV1NL4rduCqeEu9o1eikchmx3AHe3dojWEErKePT2uwy",
  "key4": "4kF8vF3BwD8XbMUf3uCGcdGyfg3VYWELYSFa9BneVHe3M8GMFFb7zs1ff4kNyqPikXos8S3cCj5viwVHYeo863Nn",
  "key5": "4zu1N4vWJyfmurzhL7hWMMLJF1rHMaQXR6wAqz8zvLUtuddcdCA3hmC5a5mh3M1VTqP5fawT3rdLvXEXygV4rtT3",
  "key6": "73R5kLrYyucC6QFBsrXiRqY6DUzMzpEqqsQAkQKNFyFaQBZFWnvA7eU1e1Ba8BP2eyfhN8NDY2KkNjwq57gZLgu",
  "key7": "2cwyc43JGsNxYbeJVVfZDLn5AG5LLWJjrfgzTc7KfzeAnfzrjcEP6DDraNKHqT7ta99Wr84FRSamBK4kQZGgJ5U8",
  "key8": "2AeEUFUgZmr9eWmTHVE17t3m9XZEuceT3cDh8dGzMXsTaVBXnuEezimMBUF1xjB3Q6vLcLUqaM9Xzq2X1RUivWXF",
  "key9": "gq1QhknnSiuaRUydajqVnuepceNq2DxKbMicHfqZswqcETfR6tkCDNZWx9njG2vdChGjTPoqHWtCUco8bsm8U4V",
  "key10": "5nJseHjAzj4Ps2gcARGJLPeTNnprLYH3E8rccDhQKUFxwKacAsviCtTDx19uf2mGEo5Mw69sntpAK2JcGWNKFYjr",
  "key11": "4P4PybgtYsa1Ju1jDV7AjufhibgYoXa2dpzkaEdE3fRWUkQUWAFnwhokJUYjoSnHQkDCaBKGRRDKNHKpadLfEu3D",
  "key12": "2FbKFQBthUg5XqTFsMxNx2o1GgWkocRVJL2sdHR5pysxAacCxEu16xW3bbJePdLQYGKxK5SeMmVRbJAZwvzfNaUc",
  "key13": "CX7bmsEuK8iH1ppJwkKgRmu8inv5oU7dz3gqyqquwkrz95sKtB5eDPct6PEUxEWJu4uraMiCT8QQnBLf4pqp54r",
  "key14": "MQZZvhKi91FH1Q9uLmLM6B3qhuFZqP4xFannbGprbByxCFfLtWK69gVbtRNp7rFLHwvN12p39vSSaFcbnAnttvV",
  "key15": "xo5BGTBQgaApPbDPeLNps6zdnLoUCkekL5NBFpKsenTDCx5MMMgevY5wWeM7f45LtUyEqkWCm9pBmXtt1oX7B29",
  "key16": "49BQWz9A729F4MaUiB5E2i1pZM6cThLP8TVhJUH7teRW9sMXeHSN8GyjqHoA18UCuM1kbmQUmtxU23tyQ49fnkT2",
  "key17": "3LN67Hi12vvubUndnHbQS4E8kZNfFpNZETF2SXC3io6viaKDFyBXmSmf4HcUmD2hQvLWbNrt1ZpAQBqynGc7Qg8h",
  "key18": "5TRyHBUeKebzjHPTmoTY8iyBobG8VDmQQnwq1XYAUWkXmPMaTvsjhVFCjCsVBTAKbhdoVxabirsdHXjJe5sPRXsW",
  "key19": "AW8U3nk2fyUzQjwArChbTUXsFj7bFkkERvYQP17mBFgZmDyhdmqd3zzM8S5GUMgARRfN9sTBTmeBmMz6AykeY7C",
  "key20": "4MAvd4sxVw6s3dTCPQrgHU2LLNT2hmP1wJrfP1HrBThJocU8Zz2Yn5hMk9n3WBP4XYJbJMCQ5KsFMiZ9Fs3zHCsG",
  "key21": "2k6c4DPvcq8NynyV4t6FMvqb1t8eChpcaPXbYvhB7qUzg8yBQ9bpTrKHs9EhaKiBHCCfnmbo6ZkbzMBhm9nk78rW",
  "key22": "4azDbziqC5EGvym1T9vhe5v1piPRfZk2P7oKpzgbu9Bwpo43xtydMKpamKhHsVBUDCSMiN5Eo29C47sy3M82Y4x5",
  "key23": "29aZ9afzU4rcEJ5ruRjFbjB4u1CRVaexgjthR5zQuQt12HZZeDyPgm6hDpJz46YM6MRx9hJub5Q5JGdr5SqM3edN",
  "key24": "4v1hWec8vNWox61ei6sXWX5ZngN4yKPNsECzkJTfmKgDNqtj6wwqbygBZ9hVocFG3CRj3CKjBCw5qFCAunmr73Ax",
  "key25": "4Xw57SYQLBS7yYpWYwNrqHpsWSzzZFGwwfXBqfbWros1E1CLmmkLDJWh9ur1JsXR8cap26HpLAXS1yvQCf4QEzy6",
  "key26": "2aFdLCBZMi46TYATBFLfu3J5T4eNoss4Yg2cuGaaH8yPnJxRiT7JWiuLVHikZEmiFMJy3i8zJjsk77uFpmwDozzj",
  "key27": "4rXjmKHNqnk4f2AULvXKV4j4MQYi8Ddy3KQwnTZd2ZSQZc6Pnu9jCThNAj7fGvdTUanB9cwraAggGwuHnvbhuP2",
  "key28": "4BEeqe7KVn8j2v1ngTC4pYfmwu7eeBQ45HSQ2WsMe2bom15v8KcPyFqAr3Xippo7iCZ6euJr5WY5LPCSPPky8tfN",
  "key29": "5MHGBYJoYrxz1XdBSc6cTkjGSACA58WpHw8XPoPojmMbzwFN4NyM4LA7YoX57wsgor685j5SV6WAoq254GW6o5WY",
  "key30": "2Azp5n4MVajDwofqCQtoQdAjSaxhj7sFMfa3fU98yfWeEEoPDY5rkVRUM4NguAa7wLBnMvCBzdj4oqR5V29ase7A",
  "key31": "2sEYcKAj9x7antgXuiZViYpgyYQPWByQgWatkKydQYK1cTGFVxLW7qh1XHoYzHNirw9MSk18ABvSEuPJuWjKFqjD",
  "key32": "5HLWVP1jK7fyq2bqvhFMPnWwibU227eaVqwYaYNEgn2LTDeFcZwnfVGPUB4mmriVFxqsWq8wxGRz5vs9o4c7CHHb",
  "key33": "3Du9EkHPaouKQDAismHBhUAvM9tNXwDMxH1pR1dgDMeRnfRHAiKK3kiDe7ucPCje5zzaWD1E4QwUTb4u97EpVtxy",
  "key34": "41vQssFLHaD4b5jGGCBtoKYzQJfM9V8CarJA27YYLfGtbGL6LEVgztxdNCWaCpXsgqKGVdJZr5ypoetgMVugwD3d",
  "key35": "VqAqxm8CionkrAQvnkkCyix3KxF7xUrKorNHca1UAFDLzfTEtYNYYuC2ZCRUkk41yc4NZgxCJYKqPKSbhmbXBjx",
  "key36": "5p2cDgRLYHfJvxnzMKNEdHMZUnDZqC7mQKevaT7HuU5QhWqeEEpWbAbsj7o4Y5Q7AWBqreeTp8eK9kbe3URoJDBm",
  "key37": "4Pp4rj81RDZRtf2mLL8E9eeovJ9WzkPhTGdtwZa3ToGD8quELuzjeQVNNEe92v9Zyk5jH24G6VPbREWsQhVK6Wqm",
  "key38": "3JLSaptYfexiDS17MRC82oF4ByCpdAyyya8ueVxmfmYzhnJkvr4bsPTKsPnMEcKzQUNWBaTmhZArH4FXNGF2gM7K"
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
