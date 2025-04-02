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
    "4hPoeHrtAS4bxCxRKWq3FapFyUTRP3L19UiYC4avpzQftTeeTiTvzajgxzn1xm1XtmeVfuzW5HZaE3Ytyq4XFQFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v1wFZsx8UGhCNVos91RSfCCEzmjDGGCxJYL5BbCcQ5kfHZhf81wTcf4TQqh4sqH66nQTQG3jFQwJzZU2i47ZGKk",
  "key1": "42D4bYtw3sKrysQ7gXmztSkdM63LUHoSs2VoMxqkN4ZL7wN8bdZFRL5a73KqCbR8MFymQZdLYZZD1rJKY3Zs5jgB",
  "key2": "4FKHtkMcZ47rrSmw5cgjPgUzN4agQXUvD5ZyLFJEHWTNJreZWqiHmn8U6o3ftFdQzTDsY5GFYY213t7NW7ATeKDe",
  "key3": "qaw45CYzgDkFVJyFmtMaZuZGUKNnt5hKouMkXvA2vSYvhKjsqJRRM6Bm5giKxUbuE7fhpT3Qmo4J1zK3Y3L9xTM",
  "key4": "QQ3Cr58zqDaooPRwGteLqxyUdqNKaT6Qy6sq1238XiiGTwowmUazKqqLCxHPrRYzw8p64yMnhWZDdcmxXWyKudD",
  "key5": "3C5H6dPobPNJ6eFuXy8DLbQrgHCrMUn3i89c1UrpaesYkxJZdPScgLLLCvSDPLk14HPkhM6J41PP7ndVqMPuai5d",
  "key6": "2fWvUfQUdbVn6GtXbQjSX6aKGtZvs8NhiEXtFx6zaSEk2ZbtU55kCEd463DXvmZZHNSUa91mV4uCk47Nr3EpD9LT",
  "key7": "25tBR9MBf4E9xpX4jygAikRjuQSux3fBVeX7279RY98iad5iDCQuAahLLpXuGhxBZCqiTyizcT7Yxq34u1yTuhJU",
  "key8": "2JZM5dyEGdtvVVEnNCjYhfrusnjwBxE9HvZWcX3pYoKtW34qFUvnAqzMmRhgKKsSmUyP4gwGthWpS9YJM7QuSo8F",
  "key9": "2m9uWQu8DHHe5ooUZvbVKAzf2xMQCiZbBXB1fXyvvkqfQjeX8PMk6fQ12qFJBfSmaFzYfEG1jWP2hYgNH92LLgdF",
  "key10": "2Wj8fVejbtJFegimPUtULkDz3ZoveJY8HpLqrBUHiREEEW1gm8B8gvXdn1QLr3UpBTP6jhWzKGp3xe3Ee3HofoZj",
  "key11": "3spf214vPXtXwS23VexcAxysHjZ6Mp7q1LeXTSzqSi5iCpB52JszpWwZ4AZRKPoPuR7RgT2RTeyNUjoUagv2fQyo",
  "key12": "2utzP4cjQ3wMt4foSr1E6hfQXVYKkHsThrB9poiDHyFxyF2ULxNoUmNhMaE5UzMRp7PqAsnWFpGakfNng2CzKZpg",
  "key13": "4T2zBHDeWkUUSPUSw6MYMjLyaexMLPtd6CLouosRQnE4qsnBvUjUgWFWY7ufcRd5S6C33XiNxwdnXBp36vKsoaJi",
  "key14": "2ZL4uPh91XGTGPuhNhNTtGidVKCpQddRB1vWSfnhv3yCkeb66E7vZSmjUX2g6w1qZdFJZXGUqXFGqaUnAEQ8yADC",
  "key15": "3mWj9h2NswnV6qVTTvt9QauwT9bEFmMic6RfwNApod1cbx4xkvLtVL5yavhfSNQ8ivHs44fWRWacd24cdiUkaxL1",
  "key16": "4crYXRqMwrg521JPLRD3Qa3m4pA5CLSGu7WXCb1kwQNA3ExhMkSqDLQdW22KtU7jfHZ3ZGqCCzisZw8cbzumuKqd",
  "key17": "44HtbQMNR65efhQmAeQzE7h2y5VLFJrXGtaA2gGsXn9PcGhxw71uB2JhgqEV6zftTVGbREYkp35WRByFqkhozzEn",
  "key18": "2GmRX5RkpeQEJk1ZhsLau8w7a16uP6yPtfkhwaSLzZ956HugZcVEVdD3Uqh5RPLQDQW3QxgWhUbEqZgT9HGArWnH",
  "key19": "5fDPbvnh8eEHVpuFpKtdHb4oMbie2LwVpPZJfMiRmn2YCp1zdV4gRqcaTTn14Uc3ayYFGFcHGd1M3FfhUJCdwNfk",
  "key20": "3HXTRkohXBjrErquvhtkvZZKrSYcLkM2Tk2BpFauZRBd2uXRT8V7bWoYyLZBySmZXz2SxiELaUf4sFpgg1jfy47g",
  "key21": "5PBztm6Jn2sm1jgJ1SEbjEzt24URWuNtS352SX7ANCbtUtGwouudWuFfchNfdiEfmSMNwGyJdEmnCQXc7Q5pogwg",
  "key22": "4u8zgGwvedm7NkM6vHoAk5fET6tqqoJara7ucFFa3meX2Cr1eey7WLZPoJz5a41po532bH3NPyw9b1RGegdyJGv5",
  "key23": "4WKe7iqcBWG3xm9rM8jMhkhhL2cCpbGPWfxbvPy2ZzAnkJfRR6rqAvKRe2LGQ46RqjkGMej3TgobfFtDByqEU2Ep",
  "key24": "3QTGWPPYokwhB8uqtrSZsvGBC3gmVhbaPxkddS4D5RQc8z1cURywLSEdUzdYgv9Uj4FFsnLCUr7gLuwYq988qCwG",
  "key25": "42rGBJ9vE5Fd1PSjfMb8sy54bw5yLCNCsb2kqh43AXYAzoEeDqeWb7RMG4EtN1GGs5BnSk5LHMTXmschpsKZjWTs",
  "key26": "2avMCY34NiVoBozNWtiqKuYDgzSQnCbW5yNYAhkfsyAghLDaUNREqGKoCyfy8i9HgKPGk6ZkPH8s4c63xdzyauqp",
  "key27": "121uLiuEjFDqTkk2FCE59DW2KJJ6zyeQ5qRHRw9Vy658ccviyLzVnpU6rakPsNApZPD1rhE2JFepQP23UVs7GKi7",
  "key28": "5hHruBjWtRR1Z3HYRicnDNY4kj8YfYu8cs84QHSajrpoypS3U9P8ixfam3t5VPB9UHB7Fs1TZKdbVGNnbQd9iic9"
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
