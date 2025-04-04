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
    "4g4zAVeknZf2XEFJFvpzaJ7b558jm5BS6jJ482RPkbGQGtvdXuBXEy2RN8rR8Qje7ACf4TgRpNSSg4ZKkWqc5krm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tCyL1c1BgJHWd6hBzsimACC6x4RLvmK3G5QUhUzoPW4pTxf8FMseKGVjuXABxKdqfdMG2cpenEB93JaPAyYSXRD",
  "key1": "5BwcS66uLDY15pmgssxfz34HDP6Xa8BkeypAPxshUoJvXs9gwv7uxE6Mew8Q7fipPANDUHxvi4UYSNKsCMcuYnfq",
  "key2": "4xqcecjBAx7YJvc3DtSaLvo26jrJBimaLt5QepqnvPun1dGCXactuhM3466dm9mqeqFH19SR4unSXk9ZjGYi9ABQ",
  "key3": "3LmL69vtKJKsjqSG6UVbxZr1mdSpjwA5guCiHp5pRauVFz1jSPNc7e4JRc7hJvAvqHXtpDVMhU2SAcrPXaptGQfn",
  "key4": "21eq8WqQLhS9AZYFS3QG1GKo5JBK4JeT17vAS7zKssyVc6tC1JcMm34VEGEpGZJRLDGSQyBgJUZ6DRfLbnV6kCWx",
  "key5": "65TWwNDnePD1YEk7Gt46RFVtZQ2UwsPXwx81gvbpBa6RQCRyzcbJSZtp9UpwZyUE8QXrcUYFupPbbdfQfUeX4ooH",
  "key6": "5jNxjFRzbkY58ZkD177GX3rAHx7Jf75arbEesDhzozRJZPcde2CSNgxNwiicoiF53BexLiXJV8MjcVnkTsUADmpk",
  "key7": "5m8BBVJSV8niMxuUYwoHbTxw8stsk9ZtouNfHQ1irL2NcQ34UocDyAdwrHGVsFTUGwiBjf28NRGT1QHpdkB2uHhS",
  "key8": "FAYT3qJPbzKHNbmK4kGEoSf3CTnqbAecaX362VdV561LfFuhz53V2bzjQDAwEiiYgB4dr2z7Q3UVnV5rF9rgXcg",
  "key9": "63bJnJrza3kkfFD4mfvHCvTWe1VHUcL2dNdTXQaYpXPKvuVPPHLeJD2VxescFxpTs9AS71xmmoKUF69o2awhfZcu",
  "key10": "3pArUT3cFk3MVPrhtvbigWYwQLWkyphG5JgcxtwiVWwuVUEwyvuNJTKfRsyhhjBYw6h9iCxqW5xk7cgknfRZrDPF",
  "key11": "QpE5auxLJ4dt61rGx8DYvPSkkgKXtCc7nYHZnxoUKUrVY5VweMo3rUCgGp9cK9QHe8Ci3uDoBuxXXtEnH9ytmSQ",
  "key12": "4zZZCQGwpENGhEx9FxYYcaYpMgoNYfxas7cpmZ17YcyQu6Ve6dA8MvhCzdUrNrTKSTh9kLhZqXzJtC9NJjrWoS1z",
  "key13": "5pqtMdzHAVjbjEEoNaVmYrR8fXLUE6KmJL5saw9QyfoP43gLj8T7zcmn4RBnva7p2NxZqPBXfM4tyCmDbCL75xM7",
  "key14": "3jb5dvr1RLL4msGGVxjdAf97mc7weWdKi4fHfxzM9pnFByyMLG89nZet8RPxmtGcAE1noQ4f9XwigBzin6vjMEQC",
  "key15": "3P1rV3CqFGAggj3eeF8MVvHkaUTXKGzaz6yv91v4vvso9FpLkM8hdQ26KFdxehiiFu2WfBUJ9KkLyQr8UKrYq39G",
  "key16": "4xwUa6UUT2QDi7W6Gcd57qAEyvycrK7GoNEGg2JL7xsiY5Y6nzXrQxWpr4SCznNEr8pcZQg5NRPyr8LFxg7uHYZ3",
  "key17": "CLFaYL4FEEgEttFrUnkZYCdUkuCcdxmfkNia41JH1Fmi4HDJHiwdoe42T8UsaSHYSkuYk7abSLEUJWTn5tQ3sfF",
  "key18": "ZXLYQepNpRDtYqL9uLwoWYtNoqwWKTh4LZ51vLGTRBw84CN2pvWRrYg9ZHHkiiwgatApzzNbUM5RGEW1UftBGY6",
  "key19": "3HZqBtNX7a7yXa5W7L5PiqkESs5dUstuR6uqw1hDbZYLGBr8wP83batemn4MNAZZG6J7HufjgnBRdvVLpc9Ziovs",
  "key20": "3j7Fa7s5hRdTx8qUzX1eyiSviybhvUcqX4nRNwQPjN1PbfsDnSxwv88tQac9fPV6EDcD4d1Zky44EEeS8Zh8QUDP",
  "key21": "3kUuGRCxbrSHq3uxQnB3styZvWF476S2pn1iSBHabX1RLhSUJMrnpVoYprUWbKd1SEHhPsZvbiJzfjo1ukPvAnTe",
  "key22": "5p4sygmzPxGXLxkTMaBPyoKikH8oxtgCnLs1RaTXSF5UwLZu5y6rZpMCgkoS3zPvZsovuAacx6tWno3WnjxgxjFw",
  "key23": "5M5hUoXL8fTVVpcefifGHf4YX2i74pCCEivHGegQQ6WmMDSDWhwoe6Q1a2rqtDEQKWbuWcjUd6LuZkTsvNqtWfH9",
  "key24": "2GaZ5jXXHY53GjAQjqTcAaiwdr266uCDB27YNDWN5s6VtheEfuEqcHbACbhjGVeeZn8MuTk9Lg8T4VCDpe4MqCMx",
  "key25": "2smdfPZu9CJUJks5qmeotw6JgfGsqp1a24NjKGwbk1cFzdpmeuXpWzmGE7STkiFyZ7eHniSdSUetkjGZHXMw192M",
  "key26": "hPzcQyH7tQUjgPk9vFSQku8MTVpN8wkPo5g1N6JruKfDLWfGVkyVzFgaPmN9htWtzWDBhvvnKZQJzvAjrqZWBzn",
  "key27": "36EGGxp3yzYuvmsF5zacedfXDoS4aUjpsL52KcbSwPK29GbYy7pocFrrF5iaYBXxPZFzw5ZXbZfrokY9eTdkbh7n",
  "key28": "Z3m34MQxkyeNLgnRPNLGFFayWHnVrKWzJeTqLkdpiay75dsa3yeQKqQUHGNbBESRXejLCFtZEpYgrWcSEmVAEGm",
  "key29": "2kXq8JT2aFGRxj5GJfwn5cgQ7S4oS193yS7GCfC7e89zrjXhzZwuR2mkyovjZKSpZzFTBAgobyfDVn7VNAQ7dTxX",
  "key30": "23JrV5VidkzTsAgPwDGDBHfrqkN5ekbTCsm8fLoWZFFQGhJ3Xu4SgwCpY9HDaTGafsB8q65ceSSm5LRnaDUUrTPC",
  "key31": "2sdnnFcvEJouKZ2pK9QNwHksQYBx65Aj72uEgPmCt84j9zASBcimTMzP9QtRKRijbFQCyz5sCJ5MRUHC28LLL5Nr",
  "key32": "2Vh7PKhqvgDazJLBymQWxTmWQb4XS7fVW5br9i3ckUu8phY7fobVgRHGwZewuMcRPvpKx2WBeyJnAKqArTizJshn",
  "key33": "45xWqFeY3CpCNPpdd5z5LEPwfCJuQs69KUEc3pLD3jNRVJ6dDA5XqVabLwCmgSAtkfK1gCcyTGzEcnk7tbKRtXxV",
  "key34": "56Ndd6AQ29gB9uPXGD3Ga36GhiEtipcYsmncXQ1DnvMgN7gwvFY7w9urAqu94M7x8222ncDgdbdUcQ5f4PFnwzkE",
  "key35": "2XyQhQLxJ84n5dcfpQ4QZcjXgFNEEgSBi5x7c8o5YnHzpQXYuGGn5WQGpJqDx8D4W4jjhbhfhkpB6aVKjV43994M",
  "key36": "2qiBxpZKhReMX4XkJzZ1DLDkZf9QpWBXiqERLRMvTtdKhiqFQ71YQ52ajKZEmC7yyuYsLXpcXSwozn2vvU18kwmx",
  "key37": "41XUKeWGFLKqAqREiMibcLdUqsTc7H37YZcoUb9WfRS44bj6aBMH8mrjLFwee4A4BbJTRLihSQ9VzC2mQvybnChX",
  "key38": "2o85GUJCsAwnfcJb4HnGxGruRn6eKqDWJu1KTCHMUSmZHyCPNt21SbXRA4wK2WemC8tedGBPg8hNUF6bBZSPiUp8",
  "key39": "gUQtVbVJGQrEKGmtUEdXshtiheBxH3jiX99nbBzJFRNEW7RmP7iwsLDoVsSgAujZEMAF82NU7fWyCJNwtJymPXq",
  "key40": "44oDHqGZtDdFbVUiBhN5pATZwWXYidiYY3YHjhkQPuKV3rMVruhKA2sUtGLqXrGDcBW8bWmoL85NzatS9SdGRJhV"
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
