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
    "2NUGqxfz4G82qcGJyvbmhpyyVb9uxUurBRASW63wXxWBuMJDhAm48nx7AHMmYkQmmjJyoLK9Ay58YDFyDo2Cyzhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vWJvp3hbtHL5MVYqZJJ75rGEcMLJvyfQBEVwxgAbEPiugw5S57sDghNhjjgYXjugmbENKus1wEeNsJMfMsHi8DQ",
  "key1": "3e8rTPQRxwshn2AiXL8PCbk7ccB1HKmJxqQJSRCoEL9re2A22kFt6n8QqCmNj341maUJby9Wv7PZTxXSwSGMWBVF",
  "key2": "jJVeNmVsYH1VLH2tGMGWoJkB6AMm1q3mPFTceXWbP55KZ3hWjNzC6GzeqFUhkL89Y199avC3TeBKiA2v57eN9iR",
  "key3": "2fDPDETSMLzsWceKHtmEZZ5N6AvqM7cgTyDdwFm9AAxCoCQJf2jNCdUrZrRqQ9TwMw9gW7U1j3iHsZ442CHqffhL",
  "key4": "47NwLSwDaY39wyBuHmvVgkfLi7zyHYBWmg6QAK8J21fA2TQNbbqRYb9wyFJhn2pZX3ppZdDogwYWnkpMZFdnnHkU",
  "key5": "5FCmLaBp6tp3KZgfVHNuX8afoqjLnbAVirkpBW5oLLVbtFmucRuEVJqescCr2nZCzyNDC67r5wgufM4VBz6vkQKM",
  "key6": "3vczA5tFMavdfAHgixjZ2HtW3seZmMWURRVmYsrCz24S3pKy7SPBHugfyFM7a3FvvBXXrmx9HGtcLx9uGSAwSrcV",
  "key7": "7y9wjPHodip6aY68FfgxGkPX38Q5NN7DYYYzicsU84tY9YVjSXckKV578t8ReuNzrbiMaJ87rtJx6CSZJFYhmQH",
  "key8": "4HDwdZxcJxN8moMEFgFLeLU4PCmZUrASugLtKJ4ioQqfRNE7pyAwLJyqzDMfzFxWkV43xQCpeCRupPpWpLLVeevR",
  "key9": "5J4qYp1fBDjX55Y6L4Rp6QHpsr7QVw4oeC7FmaoELm2sgxUcJ964nGtvdPJGMBrKwSFYVC8NnvDyMjGuttA9f4X4",
  "key10": "43HYnThd4jXuZt3AugvbQMKUzVnt8ruMj4hvGXdiR71yyeymKp7jTtUXJcfbVzVYr4jrWyN1ekx1NZsKXMm6Q7RZ",
  "key11": "3q4K1L6hfkrsV28ayEUCtt8jSVB1opBsS78WSgt2HHpZjoXH48we8xPaurgNQzBhybzWfE1NcSaa3c2CCeZ19E2M",
  "key12": "Dz3c5v2jTzr5ejBVgFKEjATgmCC1V7fBJ24AyfSovxAWpmma4WLF5vtpUUW5SJBXJAiuWJmV3dYKa1FZ71LAbNX",
  "key13": "2fm92dtUXkwg5tQAaQP1wNDXPD1g73fbRJ5Z1MhNdHwALRSEyao8Y17qhrb4gemGAmN3DJct2E49pLpLGr5TW49w",
  "key14": "2bsFNtkK7RWBA7TsQuvrHPPH4SD1G9rQDs8gMKv9GJ7iEkHaDXnZAb7Ryh419mSzMoGmKWnxHhzCUeRsN9CCiQwo",
  "key15": "3FCNJtGbfRvnsFxTbvbdFsEZEMUKgYcL2sRTuSnFBBGgACUjNLSg2GWaRCe6UFhJfnDExZRsimNkrd1f5sJgC45H",
  "key16": "2RGVf6g9aJxKYGXxc47CnzHdaCQwUEuJXaSMoVPAD2TtDFh3yKV2yXdUSFNv5TnYMZb6Cas6KPbvKVmbmzmQCSQ9",
  "key17": "3wsgdc5hnVsJRnrABJxZvn7Ze1QiRnXefpeawzRJMoZWALXrCtCuPAZMY1TLuBiBV16yP4brE1zbTMk3Rqq1YaWE",
  "key18": "4DLnc1tweqmEFYaX4JjVwiCAh9ehNtNtNqvmxUbUbtPcTiufLmKo6nusHZqPqhKZCgLk1oz8WSox4xykfG8Ww1Ds",
  "key19": "376LzShsHQvS9XTvP7LhXTouVbK9mtGsY8GF8ycrZFbGZLb8HMqWAjr8UQqX5EzQDakHjs4dyUe7cQeVWrqL3tF2",
  "key20": "3UWd1cdNGZj3t8cJyW5SY8wQTxcq75RkSk7XnJUKzY5tW4KEYNRzWvnLw8p4XA7k862o8HkpmpxUJ3s46DYD3PWh",
  "key21": "GVwT5Y1gJxgSJhPv7V9LhEk6VSggN6KnnpnaZgAqZVMUmejEpxV9fcmJLZxnUmodBjDuYv6HFRaCK1QmmUt7371",
  "key22": "QKmMS8rkkZyEvEA3wn1LvYjQXjDsvJ5R8r7UjBbnE59p6iHovowFYFfLr8D9FngY8wLmRjE3Jnky1eKE1PPKgv6",
  "key23": "3PLexq4t1MBXUPQFQvLKR6H2jo61uAbeLjQ5q8j5vtQSTbY1gkQJKFwYzrdy7eNmgGugZrftDs2vKyL7Psuh9Zz5",
  "key24": "4DgAUC3jbwXgebe8bAwmb6TTrFcUmqztgLd83XNhqwawXPXcisgBg3RXMazGeAeE4az22FU9yRc7ekf46uZEeDkY",
  "key25": "4LTQbmC2ADkkBcwSqQ8rSsfz5NqAyArqWmP2sqKzBMKJp5VsPBwXUa91XE5NnVss92zZfRowpC4E9x97kdpXfwPn",
  "key26": "RaWh5vqzFdidvVshkogqX9aGnyJGrPL55YGEAXvmpu7XXGRcFYxDVRBL9gZ59wB819RsXkyKQsMsFfYr27Q1R4f"
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
