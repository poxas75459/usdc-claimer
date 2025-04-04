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
    "3AV1BfKa9tA6oc3GjvDjBLLFuJcwuRBShQvcFx1zyscF8BsUverNAkP1DPvhtLeuPdgYrjDqEUbQiok3DRgQzvqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Rex58793rWWMBLCEQorLU3NQX4rWdM1eemy9wcx9NCKA8zHJkCWZf1bJ9CoDW78AbidLgjm2Hz65UkDZrAULjR4",
  "key1": "2V8QejiUsuGUmpiWjbrwTSiimVFu8pMzk25yx258W2q9zq1zJbMxhDLSnhBP52Ums9ZQ24GaidvE8XUJ8TwRkhfC",
  "key2": "4ppXhCkkTP3CXkqUXDRRnWp13ZDjEytXQXGFUotr1JamRRPY7V57eMyfBjEEVuPtqT6qpQsmMMT2sg5wCxydnBK9",
  "key3": "3QJ2PRFkD9MTqyrKvVTxEyS4SmXVz11rz755RAMZ3tUKwTQSaLC8BhTEQHMxZSzM25VavNypxsZTbnZ7ccQxQY1G",
  "key4": "kHR3QRbWTnYwJqfEbdduUrxVngZdy9defXrkTcCZFqQubx9WPwbG9PEdPYm9Exztm4CrxSbH2rWuwt6F7L3CTqZ",
  "key5": "5oZH4nBXEkqpU3U4rCDjcEE4hR8rm8b11mQqKeBVwqKLxHbuT8VgRKDgvtJSwuAAU6J22fXMJBpSSzjNhMrVJPtg",
  "key6": "5vVqpTLj7oNAmsA7EKWEBxvsaeBjf9rDD2T8VLDQ3fGc8TJmkT4WyYXBFSYsFJAzPcVA6CSy1Rffn1qjnkdTPxxw",
  "key7": "4AdbH2s38TJkTfNa4LksX7kaV9HQdHFNKPCXneLawKtAkpno4xVEaVcbCuFatdoszrxQ8PdUMX9d4h8j3vSioFTu",
  "key8": "3PzAtpzbrDgRMhJ7R1uuRHpWKaL9otYW8LQLXDcRVxgNo1kgpSKgSb9cAyonZfULwybaxbEQyAZ65SynvXbZXgmu",
  "key9": "3pt5RfXLBPxZ34zqTm9QNfHgqhbY3e1YC5dECBzajHS1fwmnfBGT4sR9PrTtPs8TQjuV1Gktqp465Ta5ckzDKRBY",
  "key10": "2mxZ21s2sJ1hbQRGx5ZsLqDmRnzGNFx6VvYNHrkC3q1N22yMqbGGmLQMWHcVwXWaN7YQNS1q46hy5278giyDrzwn",
  "key11": "Q1rr4UJJxHC2mXXz4dPHpg4A7X2bhRX7tdpBVsxHXa7wH9TmJVbJVKjxFjGwdsj4fBaiFQwL8YFZpfnpsS2z39f",
  "key12": "5VVSxiNZ7KH1Gc3x73mRJT8YxeoBRKuVWErbtZK9HBiQFyiPiHisbpEiEyZ9cemcur3NwTzHE2G3o2uMrJ9iV3VL",
  "key13": "3QTmgxV5TsKqAiEx6i1cyX99PnvFMrMgEfaEMzFVuySZi2Py1MqHwYyetNwbZC2DinWKaMRbg6WBoBT8EhFRLjdV",
  "key14": "3hMKVgysj3BM27aYczR8zxAWFgiZEkPSwaboVzHJJvZAs9cDFY8q9CrCnvNUPghL3VKJNfWgwaM4hbTDLDdS3hou",
  "key15": "3YszNwggpBtrYhLQKYaBvUKPcxtZKHGUd66apQ9ARaEuefMt2hF77QbGuQDWgS9k3kA1dr3tEFnXCXnor4y5cv5t",
  "key16": "2WUYeUXtqBjMpumL4zhtKvs33ZWJZiwhQmcysbePzgSzWWFg7sDWpciJrusJ7hj7u8KHtd3mPQT5MFMdDML2wGYL",
  "key17": "2ZgCm16uX4Rv7phcDkxg3gqbaCN7qNj8HXQQE9yzE68Ceq8YsfE5UCM1ZYN4EJxswqNZhtiuDAwSb9gYfNoZe8f4",
  "key18": "2PBJf7nZFHHFFx2SYbahB9vAiPrkngawAeoiQzE3c8YwGortbqnnk9is96q1MeZtGM1BjRX6GcazHNroNswz5in6",
  "key19": "4WMXJP7rThqcXVits4N3j6msaSL9UmFKwzutdadHgAwuvn7a6yiCGmp1faZfatYHL4Fp5xVXLWVWMuzbRBaLXzGK",
  "key20": "2qgWa3jTjpKrMKYXy1gpqrMLTQWTnqxMc7TWFn1m2yEAF2CjGZwS7HjonpdWMniVA8xqJMxJGTwMANuH3e2tU2sT",
  "key21": "5EZMAbG3umK7TseWL4Gi9k6dXzHVJw43kcZsVxBNMEzrB4HkSy9hdToVGEuc7LuPafp2azR6w2R1b82fpZj5fixN",
  "key22": "4fx3XGSa2PzMpFoKh2NF1HvWL73ufneTNox5vqtdZLGa5gqemssXKUrZTgaDQsfBBBVX4tnHHALZB6be89u7xZF7",
  "key23": "tAXdSRh9r17uQKK9zEzTPVEwpwLGDJnDnMmekTqFvHDuZajPppzp3B7LRBj3WiJz3FK7kDz5sKLk343qFo45d9y",
  "key24": "3X7Nf1xk3BkpHJT26iNW1au4jFkptHwtqpRJ2cAKx6NwEyMqG66oBaCHxhFkkP4EFzA7fDfiwmsssDqaeNvnrDo5",
  "key25": "hLTWk8V5yYd56ePkjuBp1zdJA1BzRZuUkTncjGrHVepFm8fyN3xodi1vSwaUcFun6tG8JYHt6mwb1hV3iWmd1h4",
  "key26": "54Egi4Tm96z7vXa4ic3MR59RxMZtBwoWoUzLFYz5Sw2fDyEYfgabQFd6RybQAR8DfGzhyKS3gTGaDyT5GR2xLoP7",
  "key27": "2EfGdvXrh82msaXbQTSn3Q8ioFH25jXaxPKihZRWVdpPUW6bZY8v6mGAv2YBjpoZfy4ucWMZM1u6jYbqNW3QLj8r",
  "key28": "2X5EKJLWjuBe77MhEBfdx88FchhS8WkGFKt3tSSb3egXf2JGZWwmUV7P4hC4oxrYMMuY18EuXjn4xr3JuEmiGfZt",
  "key29": "3g1R4Ah2poAMVWXwJ6MNv6PVQGYNwVeWLXYCMtszp9cAuLcUjuQAwzqy6ricinf7z1Mt15k6Qya1kdeiVKadiaLP",
  "key30": "47rGpviiP8hLBkeefTNamkFYyBtSmwgwAxfU2Yd8wvKX7Q3nsm7h3zoGvu16dPmH6AfXpkREiEawE5fETts9CLWZ",
  "key31": "4GPtV5hVCx2sVC4TbcteSW5A2b6hV63tftAaDo9kcCePbNunq1D9tBtp1t4JP2RH95Makc1oiUK2QgcAUNBewiD7",
  "key32": "571RiZaK3hDhhfBnt22Sh3D7jgb9GpAtJhxZBAsb6yBY717yAm7MEbXbHZbc6JYEJeSWP2F6vvYJLTJYmpo5WCtk",
  "key33": "6SSRj7L1Jb49hiJ4AfXyt2rQBiRM7PUu3xrUMMYdUQHCW52GKH8DgjEspHL71x1xkbT7E7hhBBpB3WJzN76T7a5",
  "key34": "2DpbGTRz48xPLkxwG2SmF1Q9A18AxVXTs8jXz1ieXdqMbtKq6b8y3o3yjSfmfzfLpE7JUmuKC8rcLDXJ985feaXb",
  "key35": "ZCvFGiyHwpFFbT9tgV9SCF4shVkBH75xVbzH4EXq5xZYvJLW19UBBQ1uZTni5LTe8jbeRaFRcjJBL1xFqvB9BaZ",
  "key36": "2hpXFdaGurdyRvFp5a7c8bnjWgpbcSnajSabQvLmdmSVqcm6tWew3cmNLtmXakD7vnLnHff536pdape4CWEmwXqz"
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
