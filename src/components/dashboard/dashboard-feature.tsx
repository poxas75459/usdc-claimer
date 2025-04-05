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
    "4T39JjZ5VgySpQk4eSdX1DJdGZeQNN6zYsDLJSy2NnefkaN5XdaeTWqjsb9V2oYfmiGnGQvCi5WEpzjmEGrhrTXn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oRebjJjnJe2pnL99U2xvSYfvjiq9rovpTFjkrz4G4dzvqghei2tGpPJLQjSeMLEuuwaCTEsBuqWYDibbd6uuAkc",
  "key1": "4q1vKwdFBpHKVxb5NYGwDFUpFuB42CNv8rHoFSw9q71YRe9jf6s9HBp4NFmHE6bVQVC7RKQYr9Ag5Mc56RiKvtRG",
  "key2": "4HQnai6Ath7FVjhJTJg6c3c6nemNQuGC8sMshax7FAzQS7a8dPhA4P4zW1YRL8261FLXKu5UL9cvcFyBakfMGSVR",
  "key3": "u9teDP7BsVk7WtGDxd8xaT7NRFqvUB9Ca8GQNkG26jznJHQgLu5xhakrCyHxKqj39S9kAxYPrhgbzyWn7AxDbK8",
  "key4": "2SsTifW2HqXvnkkv2pC4mzpmAshoncYEE25so2oXx3ixi6JsRSP2QMb5oU8aozqSNKWiMHuMaMgzRApUfcvVDQq2",
  "key5": "3QL6PAaBxXRY4aBYqzksrfTo2HPx76tq39xQnMaR3NU8cp2wHhFHxQfgFL1pxjQ3NfKxHAk6JgBcdB5NnarPBWd8",
  "key6": "5WGWsLRwfa7CEpqEpJ8S8JbCQ2W1qhYtPGn9fmqc5V4TgvncZY4tcdd9xPBc2CRC12EvJCQWiQNzqWQq8mMSvV37",
  "key7": "3nyzWJCKZd3vWeo2Hz3Ui2rXmP23qSCfXAGHTNJRw3Dt1mB6AKg9L5tewWEqyU6Cjj7EyZ9A5ypBsoS8XMTGgct3",
  "key8": "4dXVUhGay3eDg8KRyv2RYPcskQdjdUVvBNoMh6GLFkHHEmSoc4S6i2a6316pQz1XipYF7kv66LsAjy75DFjLsA8G",
  "key9": "27zitdN2owmhVUJbDDWuAEkWkXLvAstnpcZ8ViNcwcw9QJ1Pbb1LSdZGjtkQYSQjGS3z7SyAZXWuMuv2ZBFVpo1D",
  "key10": "3CATwGAMPrvSAiXbTR77CGsXQB2vnuHVx6BNbQHzxevXg5WytsJFwaVLTKK48P7XX3k4obTK17ndhbwrHZW5J4H3",
  "key11": "4KSYTPcbWwmZCBjS4D2WJXpHbq4T3g3vUayHSo7pCuZJbdJATZZWugyuVHwPdX7WoXXBT8UbGyajouBL6qzPbYrx",
  "key12": "4MnqWgGuxS1zhCKPUcXMAWjr6rHsjNBBZqrDzG1aAu3YxSR9T7QBYptxHVgn2YaiNC4BKweMAZdQq8Un5WLWWdw8",
  "key13": "4UAAUNyXfhUqjn56LPxvvdWoPi6oq3DC13C48As1GtDzRXcnWngKygVcCVNdLYbNdZawNWqAFQkggHEMecpLV5Ub",
  "key14": "4FSYjb1Rt2j4MkaavzKManrMa7LMi3a4fxbpmauVnQsnXzCAGnAhTg83uDQjhpqMVcttG9T8cYzXfAEoXTbqFAJ3",
  "key15": "4nEaBPbcg8CN2GQGFrbBT5ugCN8LYviUC5sQBQkrfnxh96eiDTPrFHKuzPrWsoyJLDXX6MdJJs5Hin5bT3rtMEk2",
  "key16": "28JDHioCmjZwPuY3eKLYiTvuajAHVAJjHc6xoyAWf51CvtBThCsQtEaQCr8bXLF5SchMevF6iZmYkwbGiMy7pPf4",
  "key17": "4CG9RdyeGvamRzZQdxBvMaWVGbAtoymiMmxPobV2DXKTPPK6yWosWPKfYT7haByJSrgpHNQyMDgqbGq6PU6PL4Qt",
  "key18": "4xMwniDVoQ4msZjNkajp2vmHvyNdbxHWsM7WYyQoTddHqMRr9F1sVMz41S3YFSg4xS6hdtFT1ugufNaxjBu8m9QD",
  "key19": "2CWVtBSApdru9VNG7LdwKqgQyG14X6g2XJ9feM7wPjmhmJ5GYpdLgMj9bSpp3MFgasX5dSSwmwcZe81MTFvuT9aq",
  "key20": "2e39u2LW8zYdTxVddK9X91xzPjuDQ4q8QxUxBSG84LJj6xV7VfnfVtNQPGVsi95EhfLYAgt33z5uBnvRSU2k8c97",
  "key21": "2c2nxes4y2jXo53aAjzcFRQuWa5SBvt1okm899cZF4Sk6fmVrnVoc8Emq4dZRKYxjkea51fMFacEsM5Acxp1rHZF",
  "key22": "7n5UfsGRPa1KJQvhGmnzrj3Xh3XDqnwoFAQP7W1oqFA6hz9PuQ3zPF4pdkr92vnj7iw5ACVzSDCryJB3MeLmQju",
  "key23": "5Gm3gxV4BSgAEYYF7fHWpt9reG8Zmw1V9P2itoJqCm3mwB2uqwF2nT9n5AprgXqPrhJaWuDCZCf7KJsYAtNLv2WD",
  "key24": "21xiuGyvBZcDasjWomB3LkvSQGY1QVXEDEbqJiHe1kwbMyv9Geq5RKNgPkX6oiWB94DU6boEdNgYvwmyCREGnnLa",
  "key25": "4tzk6izx3Jdc4vgRCRam2Z7nnc8WuZdLaG6pcsCJoauffm1vcju5CHZsYouzT8a7sjn82LA14KzS3KaYAMNMcvmF",
  "key26": "4KWK7Z3VtkrbwCSa3FQuaBNxr4yDqsKHdD2Wx4S6s4EF85xKmUe3Mi5weVP4Me13VWULHfNmaJofgyhMoxPfR772",
  "key27": "3ZkZUhPvMuKrHrsEgnNS2yJM9wiUkeFto8RKqp1eArwydF13KGUJbT6bSoPyx2zn76i1ZMNiusYnFRt65SopLMEY",
  "key28": "2XEZhwsTKQHzffvdZDjh5AqN8P8ghuqcqTnT1tgRyhDdQzzAniDKLMKnMsZ4Wo3ZoveU7nKuzpoqRpr8hDHovohu",
  "key29": "49rW5GeE59hUJ4GDiEm1ndk28yNEbyw9WBhFz1YoSvLx1oQUQSxupmpJbyMAKb8UHj7VaGfvNbD9ENyNCXWc9ws7",
  "key30": "59fkyrmPSUCL7etz7jGpSQUW11LHxkwbghFRXjv8Knz4zKKg89frcA8MXDkDugot5RjjFWeSn2M5DKJkn7dyTtpP",
  "key31": "2D8vyWaVr1S2SMP5mMaKnYfoanmvnCv1ZKmg8NbYUMQACvdjJP9QsvhpSGgDL8NzhQdgb7j1hpPerpneGckeqL2Z",
  "key32": "3kq1iNFgiKX8LWSMJtQQ8y4C7b4Mq8ipCruL1mM3PPNdM96kMzpiwXVTQdfkeuMjhZwhHgS48kRHkT76h38Eg5GE",
  "key33": "4DBeX7R7RLwfaSycPKr3XPebZT4JnYSdtH5Nbk7SWdT6RT8SaFCw5CjBF1hqGWMRLXHJVpsaUSFYDcdHN3BajCuL",
  "key34": "59kXMS1RCDLspBVdDNMkRBtu2W7j7FCjDTEFQHE6dtHTszduWqVUJS6rGs3b76QpSVao3czC8XM2WDjfPBBtGMJo",
  "key35": "3jdcX45q5AVmxJGQCHuZVpAUvgrGH1JnYMJNLNkU6vUf2GaJ1x3ZkiwR1SSs3tBZ5ekZi8Timjk9PZGQM69WpoE3"
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
