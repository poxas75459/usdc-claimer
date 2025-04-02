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
    "2U2zB8QYDScThVzMEZkrw7uBJerU9kUPcGBgSNp7LgGe5iedJigQQvwzZ7J1Bq8uGhQNZ4Sfq7utzD8nRKqvrGEx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqW4VRFrTYU4vytv7ibBx2BPq52DKrR15B48KdATgXY6GqbpEPpVRE5rJgULt1UD1LtrNrqQ9ghuMnNjDYuToGX",
  "key1": "4a18gtUjUdrNJ8E4YvMB1UuUnJRiEV63vZNWMfsE8L28CWUGoDAs6TFNJKVs5Bp7j6njXR6hC5Q6VdfW4XzH5thN",
  "key2": "pEnZTLTWKTzGNBih4wJUsRfEuPQ7M9wnvjmqxm3Q423uUwYxLJKaCHFVrQ2F9ovjSmvte9t5ErtyQfKXM2GkFZR",
  "key3": "xDH3b2p3qHQ6hsaqcoh3NFqTrx9XjE5hNhdjTTLXbmGCXbzgdCNf5jMkKSEBP3ixGceKDy8gwUgbQYy7xGQGDyd",
  "key4": "txsJE6y99Kqc38VjZi3oYxfUh6R5ZXYvqw7EbckNSypGeVDRVgUsro5vonM2TytfDGXdP1B5JckZMZ1vTXmAzfD",
  "key5": "2kg5pVNyzBCxcJCgs7LufqScuNiJJ6CiVAS5DjQcNCCLr3XFFrLKdLrFWTSvkGVG9QQbW1pjv4GnEnBU6ZDEgVDg",
  "key6": "5Cy4Kuqta71XQ4tL2o3PzEhvYXLmnRAtQPU1Nir5S92KxCp3ozMCc43anAMfDnNe2KptR4UEsjS9xzyFVfE8q4bi",
  "key7": "59WvSEv79AHmiiEZkJMUjh5EUhAMoL5DSNZBFg7c5F4wFjkx8dH9SiBBrQWi5qrcFwW4yDzKgKBPYJEKXJPcCMdt",
  "key8": "bcmsQm4K5fkroN471yo5nJ3LddHUZKhEJGQrfXNFGq6qMNSHiDWRqfdszgyNQXnjamFUqo5E4QY2Vr1JemsMKdA",
  "key9": "4n4wbHtevZm1bKvUkhXbzeK4SCkkHJFtaHzXbos2ji4ZafAnxZLZDwBN7SLWRb5ykxcUg5Wv5wpUYA8RrSEwFGT1",
  "key10": "3dmzQn3cpbNDcdhpUsMYoNe2mYac42tu1cicvgpC5e8BrNbgwsATDbdvaD8jk5k2xhQxBpPU3WA3g3czXrPvi9FB",
  "key11": "5TqXJM1ffvVCVDQvdo3wJxC7eqZFBBNGmEDp6XYt3WtQSMVgbyiiFF45GvbDZKYnrEKzVZhwwUVCAy2AK1Mdzju6",
  "key12": "uVCmKuMEa5XAVTorvh7LjLFNcAJTR4qdUqWRjkZhJPVg9q4UZ8HajT5KZd9Cb6uM9ZtQhLqY1m8SA7dwWFzmphv",
  "key13": "bDnCbTRduXd7AuswddbckmnNiTejJMgyrWovrqNE5qUS9uhZz6NVKrFAadeb8UZC5tdo2ys1J9RLDi2Eqdm2cmv",
  "key14": "5m1ceM6okBKbGMxwe4435TdzsnAgM5CHHbUF7wKymgU5GNjmEwQ8Ep7PKcByaHumdon4tJVSsEaaFjd1jjj4PdSu",
  "key15": "2QLot5Ui4n9x3MD8xobW2kSa22CpCpqZRGQtoKot1KxMZ8G39f5jFi3AZU7eXawjXhuHtZeV3pwvJPL5V7VokFZw",
  "key16": "3QQrUVEduD1RZyjYJjLTG58LpEiBQPdPcR3nC8obULpnf8n8Nx9h4gFHPvasBsLDjkPjQHnRrStAHA1CFzgv779d",
  "key17": "XcpC1rJhLtSGAAf2JzUZ89a7w2x4tbcDc9GdioJUW5VLcZ7g4V9p8Te5xNsGx4RJ2i9MbgYCFqoy57ZK3ifyq8S",
  "key18": "2gQt6hbcHZ2icDERBSuNtCZPRqCt4vZJGVKEU1kNxqb9fsubmkoqxeuBz5yvhvUM9LYwocGRaAtm4b65YGReCHps",
  "key19": "fWJM6rcVRr7exJ3jZcRFkTjWzk7gRWHrVBsb5N1XBngMhViQecyPZoowuorfiGWoQNga9JKzq9UgyU8mLDXZKX5",
  "key20": "3FaBYZegL99ipYhS6yWMeuG4C9mYz25tVxq8HDj1SrhtXKcbKqtkLQmG3xY1Y8TATxQdoQgbZHbDvH3AuaQJrwbu",
  "key21": "2g17H7LBzaDd7no3S3MED4VA6HHAxkhHCnN1MRkVD9HP37BYkpDzr9sfSZYXE2wfgmGMixXkQYasxMMUph2bKArU",
  "key22": "GsFx53hM96qkyDbJQwqzFxuBMQ9LHaqx2Gmmb5X6RYhLfEL2f9gnERnf74ZNt2PPzTc6kvnnvw99Ymg6Kv7HWXt",
  "key23": "HwnbLSwaLP7YqpMmNnRWYhoZYNFDFY5wtwheboiVWqiHj3wAHYtNYW1eWtwS2PE71eQxghXs2thboJYcSgss2XP",
  "key24": "o9wognidt1gL6M1PTp8dT2RAPGQ2TV8oF4DCTxqijnqZEnq5GQuigG2LP3cqpGKYn22MdPRciGWkzQeAfosws1j",
  "key25": "5wxFArBRaGbVwKsL48fXui5GPhMX82uWRVDBSq2BvQUqoXGuxz88rD6cX19C8Pm2gPEDZH6Gh1SjFkjirZWbeDR",
  "key26": "4FBMMqiuo1DiueLceXSW5obhr8Y9RqociAkFYLEt48cEpKGxDJqPquKVFAsGDCPRn6WibwbAFCr55eNHDYK9n6jW",
  "key27": "2b1wGrh5T4zFp9CQK8WapnRwXxLUDTEsFh213Ki86VpasqiH8b4MQA31PQzY9MAQVQTSdZ5wWoAqihdqgMFYg1uW",
  "key28": "8z6bmAxCFdSVgBt5J26xEe14WMeiPL59igpQUVuZHgNE8D6wmXGvuR7Pyva9YRQiA874PrqS6GraaT2Ceytd6g2",
  "key29": "Bm8auMexYam42vQSef4g8CgQt88ihSpccRtXBNS21h5Km9kcxckmBxtLqTtc29QAjiq5LeTSJ1YNFTLbvhfAo19",
  "key30": "2FXZWSb3eiHPRZ3L1NtKp4hfHSzmKkRqfUVMt8WFx4L2cyzRXN61fL4shz824uQi9B4AHQHURFyBdyUnSUQwUp9Z",
  "key31": "2WLnAadKxA6QNnRgC3Yp1ZTcmes2n8ZdiZLBysQZ4fw875H3LPL8jSPbi5rai12T6adgh9L4k1ZMVybSCiSXjQZK",
  "key32": "3R1pY6wSVHSsQAo5uxCU1WdeDaqhqtyaCcvqG7AEQgxgGrXukYnNfVNx7bzS9AsDvmjCnUe6zm4APrgT93kToDTk",
  "key33": "4VHuchDmeTk9bKPSThqa3kwSSjFq2utfg6uQv2NaUHuCCeWK5VDFPXSRvF1jgHbkEsyVpSZ7NSiZ4hQ8eBvXhzi9",
  "key34": "62JBJSfz88dBS3yf3FBCrPUMj2dFqxiowCAKCzmMCN85oghswYJLpJ4gZupwNV4mpTkLZA8zTos8kQxtMxz1uhKj",
  "key35": "59PTH1TxSDdBDZ8ohv9V8Hmsn5uT2QCQcDHm6gkmc4aC4GpJ7jjzokwVzpp3FrWUqpnkrLGutye42wSoag4BXEs8",
  "key36": "31zrRSMkjkWZ2VRbWYD4QY5Zw64tvZxZrHv17D6eeppxXkhY1ivorkXxpYQ5KLAR82BsakFJPwwbBYCzevcDtzNv"
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
