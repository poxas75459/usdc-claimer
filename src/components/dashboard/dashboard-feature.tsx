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
    "L9KEe9u9uBht1Yt7Jb95pbY7KgX9QxchSPQ6prgTf5gz2ZASgtT15qUbNy7W8GbFw3adhiKQkdN1xej6JHDLfsn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eaZVsVFrvA72pEUt5VFk9o3AJLYy3VRFB3uRQSH8qJJJ1mV95PBTFoevWaFmie9TtsAGUDMeRMLQuGXMW9ZY2Sa",
  "key1": "66sresYEy3UtPjR3aXLwBzorPzvT167r3AwSBrtzpeQMaeYyVW1jHmqGkcHcfPMxi6pcxpmh84xJ69bN53wZd12A",
  "key2": "3oSUVsPSAVbw2rvHGC8zgBRDVinjtjvyZk9qFiHbbrV2iGm5cY2xK7nLZ2xN5JmY4prMbgpCX4YNNewM4sUB2GVh",
  "key3": "24b8vQvxFJE4rjLpBFcYQFEiQBpVscWguofuMCMx3LRUayTgPAJfrUEiExAQazHMtwPwRKdNjSt1qfPvqFef8vFE",
  "key4": "46TspJQRfszeJVR1zjrEYZG4Ak7a6cvnAMMtHYJXbkZhkbUrVmbGb4Cqa7caXY3nnxqYv8We1PaPzYKWp4tm96WF",
  "key5": "cvYTuj6RwBEjfQMBqb33FCVPe7yQ7i9Bt4ZTX6yZZn4CT7FbqXxxiZn9T7MAq4JeaP6au1hydDDT5jYRKtcXbKw",
  "key6": "wW1f4HLz5nLC9vSa4RitnGDbQHUkGnLBbbZtUWhPUBhmfnBVCRBJXJEMYKxUDhX1h8fifcm4AQPHserAUPhW9FR",
  "key7": "2QJ3JRZZJ5qy7oXdX1DWK7CjA3Yf7pd91tWKHGkmj4v8QHruukh6nUzRvUN1v8kjgvytQWpPvdWSEMRUYGy3jbJA",
  "key8": "5zt23m5bG2yJr7YpYbpmxbDaMgc7DaHMjJsJroSW14BjF5HRNmJR4QA2fHuVP8ssy52ndLRmELH86kcADRpH2DZJ",
  "key9": "5smEgswBUUx4xyMfkYUVEwX2pzZVmsKMXTxLg9inFG9s4kJChkB8fGsBe5kqy932arBtkp31WdZYCqLzAnPU4V6X",
  "key10": "5uSakzkpo9ZJNVZis3TmDzDYHNhBPq4RVjNoEhocHe4DLV67cVcuMYKh5HrnopLMhA4MWEJmw7ZgujR5kA5kCqJs",
  "key11": "34xbYxA3ZmAP2hQ2wTPweB1xAvHdLcT2aAQTosvixfyCsnF1kGgrNt2y3Jxtm3wQFYpZAfWAbAqMpwPVH1qP1H7R",
  "key12": "wLxXY54YDmQkdTcUvirc12a7uceYA1WwLHLaxHixkgVi7cTwah7JtDfd2yKGxBEsLXRkvnSS749c8DoN3D3iib3",
  "key13": "4LWDumRokbNoyaWqCZsLih5koadQv3kpP8ZKUhJ2SSkfZSYvq66jM9GA6WUKDwkGwKrMqrXwhdJKNYe15zfV7Dbm",
  "key14": "4hSVKF5aLjBLrCYuCtZjqaFoiwnbvodGGh7QXHWpCrcKUC3yb7Hguos7hSvfmYx9UKpo232mWZWSXC2e2TWPk16E",
  "key15": "e314CrTSYomQAtN19zp9tMqC7F1ya27B1ikQmpMF6xkwDrn178d7ViZfXyVuBmySaNFjNF5ceA1eRLu7bBsVgwP",
  "key16": "9PwP9p8AFTJzZ7BRmhU9nsEgVgkRTLqNdEwBR5Kfki7Txap3fhFLY1wQ7ciLRiMaacY54A4wAmzHLeoeMXcrVUQ",
  "key17": "5ce9cjSxd7f9ESyzuWZFY4vu6gRF6oMpPrWJgxwv9J37W1ZYPC2gSYgAnge656xMpAwsvnWGnt4SgnQ4APe1t8nu",
  "key18": "326VpHnU7hhJWEwq3yaGCwj2s9mGBAKTPDK4bYxkhUQnFivjcXePUBZTerwAmMbyyoMM6gFLS1T2Y96K9iAgvJwL",
  "key19": "523C3wt3hn5o757PUWsM1LVtUxtaLYvFX6rqa9rWBVdgorSXqG8ZVfwtyasGTCFqtCBU62VpXcz3wyYVqfmSxWgC",
  "key20": "ocHTWjEow99yADaA4vpSUadd8DiFUBSPNUHCYNSTCSZ2K9yiwp8NvLWfVJAZKfGMeVucJSDzQfdeZkZ8T2YGJmC",
  "key21": "3GAY6waP1dgTHJtoSmU9topLVDNMtiEj8ob3S4BWg4tQhLMYdYDgBaSQAtBVURSAAZcjmP4NAUzYGiLRUk7a7XEf",
  "key22": "2rQ2gAkjG77Lctad9TcrpCU7NEKWve7Aq746ghUvHdNmMVUbC6amxxauUTYCCi2vQ7AMsFrAndzeTg88NsAHk3Am",
  "key23": "4VuowYeWho7zDLqCTxEaELGJkmJpVn6rFPtp7bP9dq9eDQZ4mMAgEFrQ4FvbEvPAYiJ4zw2zhs1zpmKKHVCJaPfZ",
  "key24": "3SMdo1HDaU78CqcRPQP1ixPuKYrSJdptx5fmtkc4yxXtycha6TRL6Q8j6yXDsmigGXpqusyQyvkMEYtLUbJDYnSq",
  "key25": "4DgVWxg599FYwZh2ypVT4BCu1ecWYrT5GLtVQsCh3fhzA7xydjVFYdUMDQAssZkGWfwgtmbvTGaZbMy295YUTeva",
  "key26": "5SZELV512zQEZir7URX6EZxijVa5e2RUvmBNMoXPPfRsU9kSxXrqdPVRG2z7V7UQmd5D6j9pD5RE4V9mkaNjTVKb",
  "key27": "2gbf7FNiqPSi78WvZqCh8o4NNsXMaaiumdgoauhjjhN3moDEc2VNn3zdAqH6ECKLkkDqeMwiN4WA5kYGLB4H89Et",
  "key28": "5kyZVHw5qLuosBEAVuTYYHmU2uXyuA69sCdZWGTKPiiLXednNzFVLrwExya9PyqHpuZ1J5kwpxhTyjaDsZPDw8dU",
  "key29": "5rSnwjWRywQkpJLcXZwxn6iHVMbgeuSgkVMmHkm2RXkUbvYLXwavmxmMiFQpjsyh8BVQgoj8JofnQBj3anxfe5WB",
  "key30": "2zN4cisjYhkz3zZHAP8PyctS82s1YQ9yXoEFYHnNReDZwPtYNdWWBTXRkpcGVXvsiJRwi4JbnpKDaTnV7BPU3Awn",
  "key31": "5earRpRR6NSR1RxPkNype8BQsuBRAuBZq8R5xHbfDid852wdRdZiNdPMkHVk15uFX5JaYSoC74Q9McW37si6LzCF",
  "key32": "2g9VV1UtUCt2dsRfF64tEmLNqdwSZhB7qz4scUxsshDAcWfPmL8cxfE2a4Arzt91B6RwK5PjidY98tnCAbxn1KCZ",
  "key33": "4G7k4eS9tfrckP3doD1as4VobtAZ1d9243TDaVhg8hzWZEvu9SxzCUZHLLrfJPrk1DKUvEnjMHhFGrgTACeMuitL",
  "key34": "5C5i1nCt1XWYHCS3EoeLqFiNCvSnj5GugJTrCSkqfgL4WiAFf2Rc4ikGcFmu7ZAJif44mkhGnVftZfH3siy5emZ4",
  "key35": "5CowCPLyxL3hdQVZdk6fWaExn4p4bYTh8XAoeyTKua4LKtswRcwEnM4CtiZEUkZQREuFfLAPqGoRpWZnACatpLGg"
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
