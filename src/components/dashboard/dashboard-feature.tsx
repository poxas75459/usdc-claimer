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
    "4oRdbXKReiAspKmS4drMducCRYk66nMrimc3y3zSFLhY8fdqe5sXgocShtg2szQzFuqU5no2NKxadwmwktJu1NkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n5vnc2ZfRKS9iuEfkzxsJMuhBJLPNwaaatNmZTMckd7uyfimew7cLZEX1Coyui4ctGR7ZPMwVodUiEZWyzJ1YD6",
  "key1": "2tPqsvxmbrF5LnzUcrsDMs6UyrsKXHhHVyQJBHqnXNnPTevhyyc93fBRGESejsS1wbzFw7TDG5XAxYZJWUxpiXZ",
  "key2": "5pKAkZPwJ4Uh7jYNB9YFdcYfu6HXfrtFGQnLgRvrZ6eVLHqhPeNJ13mVQuMRipw2btqherKMsjooPG1pQNVg1V2A",
  "key3": "2cKVfWXJFrzBdoGvQmCnUVkk6wRyFgrK4r7KDvrPkGZP12Y4yxW6jafZmuPsy4a71mYBK97CdRn2KQ8ApVMcrKxk",
  "key4": "3HEpGH9LVGq1e9k61Gcr6JuuN5Zmt5GrVbBQouSVM2XSbfPcxRUWWEodWJSDwQzTexWTbgrAhKsuQ1qUKjj8NK2g",
  "key5": "4vbeYt8HwVNbcKbXqLkxQepBJfLPhc72RNR1SyVVgQjtECigZYADv45pnb2sjS1si6RzJArMmjVFBLqpnPewH9NH",
  "key6": "3YKP7hozj6azp3cKh3LVCMtFtp3csNDh2vKgdzUKEUvrqMN5bWkCkSGnrGatYeEwaJd5ssm7oD2cuppi4bpZeCCR",
  "key7": "33ctQnXAuTtZMjcroXYve6obAu4toZ9tX4y6jnbgoETgDjU5QH4KYbdNJ2fWg7HZDxu28d4TAVGBAAKynWPmhyi1",
  "key8": "yM6h3nKnS1EWVynniq5VGKpriPpZ9Gm84rY4DN7mZteNfMa9mwfnVrtjduwz5sVdUDGnJZT2TVf92xPqrUuhoAD",
  "key9": "4drn1dNjRbrEL3KqouWBpepAPAXVWpM9ib1nhdpKKVn2FbqPPkX5RZB8AXA46vHifWLwKDPaJEH4YngZZBStS956",
  "key10": "3Ke2EAX2KiLm1C3MU5XbEUzZtg8EbWe78GMtE3ggtNGhJXmgEWedx4sRNBFBWigf1hkiQsjas8XJeRYw5thfujfb",
  "key11": "22B8J6LJDZ3yDnM7Ps4bMzh5MGoeYycjuZgHXQjBpyXZFSiJat6byzXstChuqcdCMLC19nQRD4MGkvu7GaaWM9E7",
  "key12": "5eXCucjn33o6gq5ZpQWvjmDsHCvMPZotvgRK3Kt5v23pYzGPqVY4MBazzH54dpKnqvBiMDh2yxfTtg5UTELB5tdh",
  "key13": "4CNLjSrE8KGUGpVLoRPJSKiMSA8ZsjYNN4zTk6oct4AeHZsnD3FfiMuqgsd2XpqcEuGWLcFWXBpEVjy6BnotJvpq",
  "key14": "3ikGgDoHgc62vZZsT1uzgJmHU48LiCGZVqMUE54L1Ewq356JHa5zmpgF3v32WxeZ6uiZnK14FkPnD4fzKV7RMT3D",
  "key15": "5xRGv5znDBSkrtJ3uyJyRZNf3oDTkHtPYahGLSo2FWSEqeNGmucRjNAdq6iLyBeJC8YtvBVTJkzzux4k2WyLqP49",
  "key16": "3vAXTcj62oqr4S5yQvpE5EwaoZiYVBVSCSeQbRzVC7Uy8vw8Vhb2CqUKgrHDKrT3pWTs8QZSACBtQr4v4eKpKY8D",
  "key17": "35TwKinwPXWVKEAzLAh9gjzmLiiFsXbWT4YWB9UdvUzQmEy7shYziaHuDJBvxdM3tkcwxfLx7soKJA6rVw1sWJgN",
  "key18": "5wvmTjdjmLeu7kTrqTCoMo9jVLdyUk7siZgm1ZjSMB9VCTmYRJMqTmJUaEqfnUWj3vwnrSe15CnYLMZf94h743Pj",
  "key19": "63uSrMPLgQ7RsebQNxpeS2Vcn8QUijrmwt8mb3E3LRN9Th1LUnFmPRoMxnVkUQe18U5DkHKdXJKpBGqwmkeDGeBn",
  "key20": "3tqHtZcjVnwempHLRZMucWdK8VbAag9YRqdevNSYSyvPb4ZtTu2t82AD4tvvjJYvdAsjufUbaSysc3gTGyPzfKqR",
  "key21": "4uKHjRFMZk7XZj6579UY314VLk4nStDXQNK5jvn5pmsmdMg42YsgVgqn7ugk5xPJgPdWddjzLtJVJkJ9b7obB3M8",
  "key22": "5qGdDUYceRGiT73Cj7V2HXZy8ZbrJobKV8EopnhvTx6t1ixiaE58zXdscdxCa8F3yPRUSFhgGoKEr3UQ5b1iMLqC",
  "key23": "UUeDUJC8UTHuAJ7sTwVhwmJE6UGhfCtk9owBoqokZAvXkMYrydMsV1W9ySEbCHnGC58hjV73PssqUQ6nFc63tKg",
  "key24": "yipquyGZYsqmZezXvEVDu8AscixLCvhFndq9GX6RCqadsoFYgtz9EsnZ1xQsmTCsLYVyf6sJnLLwskSGVb5EmLF",
  "key25": "5wrKMzW18yjjfPUncQ2dU31eJ388xHjNL4gGYKvQCt4NCumZ1iNU8y7c2ugSiCSBS8x1CwBytxM58HAR68BdvdvT",
  "key26": "5mDKcLmmQEDPuoXfydAKufsdwaK6SFQwe6r1pgN1ZKWgD41Jx4D7hqY422cpJheVnghVZWBPocPSL9yWQmEpkv9",
  "key27": "5uLwREgDQJnYwj1YgEP2sQac8ztWUz2v49w8gHDkcgp29b5QeyFtnzrWrhXGqQtjvYx19uQnx6mpfstyq1jEmR1X",
  "key28": "4FPtA6KE6x9tjRmhmyCokWFrbWZVqQrCQK8j6eBAxbFtgQT8ah8vDr1SbHfX5DuqnCrrknZGTWEGDQLgMXJm7Cp",
  "key29": "2rYfyHdxkMSzCzZe7V1bS925rJUS7jFfxQZEAEdsvUosCWbyxmWkc566XBq6gMh8z9TyLiLe3sktr7kADAF3P2f9",
  "key30": "4xat5B26eEyqYQrg1AHF4csCLD5ixwWLzSG5AQJBjK54TbCxzBv1e8nBH3LQKoMGNb9hiVj4jpMsXV48esYwfvt9",
  "key31": "7oCiHTsGkLQiAMd8YwbmBNUtXGe99Rnd7GDdEzGfZVLBMVCDU8TM8k5iKxqD9mhtKiFC7LhTATnRWPEqgJ7Ybua",
  "key32": "4giAVLdwNyAcqYMF1nx36kSnMsHfjrdiyTBmeo6pbukoeAoVnCw6dazXepCyAGNq7L93MT1ALnsen68hwWJuaHMx",
  "key33": "5kxF8ZbRHpvAMS17MT7k138Lb1LQAmkERH5BY3Un5wStgcHnoYAiyo4PLRHTZYfbFuC2C2yJJhgLmhHAb4X5a6TK",
  "key34": "4Q7mHFaUsRdswws8rVrgzbZZE4TxG64dUBUvwXDabE9Z3rJjd8tTeuZmZLmPMwHMXWfh71DqWwCnov487Gz9Mm51",
  "key35": "2KWVFvD554u9PEXxwfMYdpqhLY655Pqgre2JXKHbjFHbSNSDQG2pAHC8G2rT7Xr8YkqZvonkD2fqMkvgNauyVZ5j",
  "key36": "4erkAGjeBgwhsx4C6NSVoh1KdTdirCtdAJSovvd2scXVod7aTV3895ng4doFG88ba9Pe8H38Bd6zLW8MxY4BRGTn"
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
