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
    "3cr6RMQC2JdQ2UW2vZN5deXhLT9o9cgTBpbL8bznX5k42d2dxfhZE9pPqPWirMkmFAQojdJpJAYouq6T9cCee781"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DBcR8KTu2dY8PX4TVciw7x5rqLTCTb9jxdVUgFpqs9QX82rVXALDKwxX4EaEA36SfJBMbCHFiHEdpVSa35vMTrW",
  "key1": "567qK69a76k464ejjXQ7Zw6LGqAZvdrFcjYpji27Bq2t5z8unqkkKQxyCgMEFqidRVR1Mc1B5xR9oyh6nskXKUp7",
  "key2": "65RTEjrX2jAxGkp7ytbxxx2auLVRupPg9QHEtLnFwhxsCTHzCFNSrofhLjCSBDLBdeARcA2NdjWSfQJYkaeBzua3",
  "key3": "4nBfosfJfvENiXghVUDsstvwijyL4pMscA9XUDEwfSP7LYt8B2RTLR2fLRzxP3NVeTwbEMLp98Fe1nDEwRRP4a8T",
  "key4": "2safUCb6A7qoApj8RZYjEXULrTeJeEPQwRHXS4ntAb4k8BhiqGEkxk6UDYba4aviTbzzghogjiWxzHZGy8dYXV5C",
  "key5": "3RCBvLUr9WAWQDqyvFpWNyuexgHMXRjMDCsx5mHdMKJS4mANz4Fme9z78YP7iiigF4hsPhzhPCALRw4D2uj5SV2Y",
  "key6": "3bSG7mnFS4cnS7XkJ5FSEhSjguwkTXtmbcvWsHcr71ZDmZyKNJMYZFNLVFKMNVzghxkSpi4qDjKVRGvQVvec2sxe",
  "key7": "54BvXHoCqKGAxz7VHnbrw6aA5yo7198auyek4cqe8ZkjUpw52WkGnv9Hp2qQQv1yYasjQdTQansNGdVdSMN3AeBt",
  "key8": "MeotQXvQ2VQwaX4BCUwZFthu9LhvvgZij8mTfJxd1tYYsd9L8ungBEYRioRCxwqRroCR37RZGn6MP8XdPiiHb2Y",
  "key9": "5tUsz7qsydu7LrsvdrQGisC5ZrPuEBrpFHSNWTd4TrYqNcprmQjZSpQzi2W6vauaY4rxdKVnXJ5Z6cxF6RX15P13",
  "key10": "dYcGDjDfrJTLxDYmcxTQZVng9BaMt41nWb5k34qkd68wKGbKjPoLm2HU9H7R8QE4fHWSTbdftCwt5g55aHfrNGV",
  "key11": "4KZ4fQQuHjC9Q1bV5Zz5k8mVSCuWLs9EBsg53Ko9NngT3LEYi2NsorXHQuhJxwRVAB9yKemXT1PRpMDsiL8MsC76",
  "key12": "66o9yLFK7yPec836vBR4PhzeRRNSX96McGaKT2soyt5depxXfoqsf1oW1c98auY4HVVc3hsMAE8oe5eWAMrKHq8S",
  "key13": "2Zb6hXdURSEQV6aDUhvomFnCXzFycSkNa8pv5KgCCk5vVx7RFRqdSGXaoNZoxhuLRaYdpiJpe24kSZ1UTXEeeY7",
  "key14": "4ExFgNFtUVUqA5HuETnZoxrnNRZnM7tcrXT23zuirzvvM83hh7zxdDTh3CnqqdJ3QHdjj6hrVPmnPetgMPkHgVsp",
  "key15": "5XqFtvxMqYuGRg99mSGBez5sUwvtsfPjCqecVsXepeGeDUhx7KzUfkS3HfEEqLEaAP1G1tEcKUxNrRi1ud9mkmEG",
  "key16": "5JR3S8G6kmsWmHKSp7mdJYWdXb3Z94e5tL86gkUDkWGBbWfwUweLPGs6zbujufWtUrECEzNiV6KTRBH1RQoqj1nR",
  "key17": "5q8ikVbma8iqnT4xqkKGX2R49HrM9cAB7FzUAbr6fBkmB3qwGVAAR1BkDqqh1ynLU2c5RHGX1DkDChwLzxGZfmgw",
  "key18": "3acGm7DpPUQX6iU8Wg23pYkrD7rxc99sGjxAi3upkFqEr46rz8eFUdQF1PvDpQpFLYo6LxPFX6iuq2qqcLtRQ4Dc",
  "key19": "46QGzpRSB97qABFeCRLCtBspykiMTC1puErzGk5jXkCAzfxezQnqHKnDPAxwFTj97UfGP3mVp25xDbr3ijDrQcPJ",
  "key20": "2uTRA4e5KvTmcphZz9qUXMCGmS39hUVSiS6MWbvrmszjoyGxwvhXqEbxqsidpA6EouaeBFYoVm8LFsXtjdo6TCMC",
  "key21": "4dnDoMAGrW8Tx7ihqgddL2m9cPESLSb7QPANnMD4vHMfdc1m8CpWeqbczQof53msiGWtzH74BkZrTSUTT3NKE8m2",
  "key22": "4t4FkCFpRMYSUqh6kQ6N7NrBxsGKd9ybSBnqtdg9MhvriFdRsxBqqVi3jMKNNMFiDCxnW6qFLx7EmUb8yYp2Asae",
  "key23": "3WsQ3Yd4Qzk6FtwkCtSW8r37XpfyaGFrhJhjMV1rpX3Pt5hoZqCJcdRcPpkjjX24fdY74NrC1kNiNi2cdoWa9xHd",
  "key24": "4EgzUxcnySatY83JCS9F2XWGZoYrpwkwdaUzxNRnxMgMSFZgKCmWQyqWyBLqF1KC6nTrv6hYhnaQBCGEACZaVpZk",
  "key25": "5vWQVvp66DkECjsZiPVovxMGcYzcvr5ZJMakNa9QkEEe7x3avG1U8VoaNTPNGc5eqicrPpupALBuGTBrKVoNVCCK",
  "key26": "4wSDvpVSSoGN3jp1eBZbTQhKBrR8NB1KK6DtuUDLm91Tgt5Q3vcmFaZDGMB2sCGQsBD2v3CH5EmiLX8V8vEmXuyF",
  "key27": "FnHxYdbXSnhkxqu7zTBVGBRLrfHanNCxx2t2P9zvpoTRAZgemmbfnPAA3snieUNfo3gA2v13fVoyiCMAa4fHS7o",
  "key28": "4R7odQbzJyx7DQsHGM2m6a8LFivfgToGuiTqorVPA2SnEpbz56DDuMjApBFpHboYJDupEkgqnjUfBP81w7BVmE2y",
  "key29": "5UXuR9KrAGVexRAAMxwQVpcaZLaRxnSzcs5hEkXHn3DvRbRB5QHT7hR7ZsiAWepdKYwegEaxiRyb3scYdByNgH9n",
  "key30": "5b4NsrvrwUwuCP5pdjS79mvoqnzdm6Tjiisvxe7w1X671CG6r4UD1Ka8RazKYEQrVNyxegAJ8QXBZjvd5GTvhJA2",
  "key31": "7pHffvJpRXLejcUuL7vn2T4B7QVn8STGbM2NBtFwWk9H2Qc4tyd2tX8Qqx53Ngy59ofud9FMq3VNVwZsaddiEAS",
  "key32": "27Pf8fjCW5LyjDfbUJhw2qjocZgx4H8PjaGZvoexWcjmQA3yAwExnfv4knFtMiXFtfdR7aYcoT72Qo7CVaJrvP8x",
  "key33": "5t92fdQWGYn6JtBTR4BAnUYDwE4B5hE6LCNAssYKM9nPChAU66rWXe4Ub4jYj4jK1qmFdnWJTU1GZi7kPzo9Gq1e",
  "key34": "58snSgVGsg4LRjUkTjoidqudeeqtfX9JUv2HvGBh7F7LSCYiHRSaFuyiT8R55RhVrYFK9DF7fRbGRUfLj87D1hah",
  "key35": "4bFSc1Df1XAJ1TE3yDHq4XS2fsbQxoqbiTFnFTsodtPtTb71MsQJPGrYkLEKBPFzU7QvyhgrTLE7trCqxtCvQMkp",
  "key36": "5UKSU6Tt66eiKrdESsUrLKCLQfLZscP1BRc9YUwaPFM88o177fiqs2LQ7i9Di5R1uNSatVDLkF8B5VueVRbDh7LH"
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
