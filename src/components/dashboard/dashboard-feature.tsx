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
    "5mQcugHBzvi4FYxC9z5h57keA4SHgTQoKcgS1ViGPomHT4chu7HmQNmPBrHNxodhXnYYF1eBH91DzRVpTcGQzNUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23tC9ntVDfA9ZrVqL5dosRkw78xFt5kkRXTH2Phk1fv9DQBAsTuXgdUxn3zBVBjJYzcCqrPZVZAvt6292N6SgcuD",
  "key1": "x5PKf8AY92XrReMzLWbTAAC6TrqbRT2HSrnstV9QryWPYP2WFfQPuePfdtAdSgJopCpLFZNutxu4J4kXhPPPRhr",
  "key2": "3fqAp1VHCKz2SiYTs29R4NVdY44V6e93mi6bEWozfSJxoNzhX2hD6kWkrhWYYFjLTPMQpqtyXMu26WiKEiLwVRTV",
  "key3": "iDrnr3wsSC3WG9CQEfFdMsVsSb3co8LDHUgFD3TZem5Vamg2ysMc1RRY3sjupnAjnYMqFz8Ts7dn8spv2wKW1Z5",
  "key4": "8bbfiYde4VDRGPGQuPBgo1QZgpAQ95BnoXw4m5VUKhxTE6yX57QtjjGL4ywfc1FESFcoeyT77RGDRx9WCN9YPDU",
  "key5": "3iG8pGSZB62TQiRThCoW7b5Mbugx1EneCZ6DL2THgB2NKDi8nPXv2YM1zQKcdP7wd5G1feFPUh3Wsi1nm1bAyxQW",
  "key6": "SDhAbhvqiXKF57L2dKp6DvPbg9AQJwjKEyA3U4hw4tDMzcLvvrd61nr8qScNArwwTVznWEd4VRj7Ww5YvYLsbp7",
  "key7": "42z8PY64EkaEXErdLQSTm7xWzaoLrjBa7azGxQkYWrkfFEXA1iE4ZFhkcGLXRykiJgUas4oQxC4vFPJQiFqZnUFd",
  "key8": "5ra2kESpTjMjtQGQguqZZTE87yxmnVwgKcxuwAYj5zYQa3Cwz7VchhJ72dHPKGBiZSKDTWHan9wd9uzGqmToHQUr",
  "key9": "54XijzpKrzg3vArVrS2jZRQM2LT9CAxHLXVGhLNznukisdSMpeoSe7FUo21JW5dcDKWdCzrCTzkoLezhYZqxPRWP",
  "key10": "2s3yKUEkXUdxk4Q976G7TuG1yAyyRe7G8XGir2oGm1c3SanBskHWqdzhVGBgE33Hvzr8KvAv6zpFvRXs7R9qytd",
  "key11": "4RND7zZyxc8dmYs2kdYX7RiXYSUrzrWjEqJgon9BiPeDe6bHHSBuvrcukRP649iwnXYpasYnjKJJje8qVj1nzNCP",
  "key12": "3JnrNc6yhwvxL5MGagxhSw4BekEXEopEvi3ahsKvimwj6PkkVxhcBu84CfnSQcYezBNB2t9jPjyaipmEgFdrsfZc",
  "key13": "5nXpUTkak4W97GkwPWopQ1XZ6NUuRNTFYYNrV5wvCVPV1P5Mc2G6tS1U4ySaTkKt9HtYzxmed8FLqWZ6c9nJM6Kx",
  "key14": "AHpws1fiMkChP1NqDPewoGygbNx12e3c2QUePnG5vSvrkLDz8vYaTpZpNAoL744iAvHhUuv1ptvn7WFLQQC7bZ4",
  "key15": "626C6EnHGg2b13vuiX73pRbVMGBz72DgwLqTXZpUAcxTkeX2RQ5mPjXChBrZ6yUAvTawp2pcsC6yfuYF6RwmA2n6",
  "key16": "2C3kAJKtq9Yc5zJfK149zkHpBiW9VJAoTEGCw47n99tQcH43N7i93mMpNPaebpVx2ZKdpbTC8pBUQB8HczMumZPJ",
  "key17": "4ZkryMeMm9Qp6495vK2o5HRnw7Xbj7HtK4xgjh5gCgNSxyuD6VzVV8Y3tUZg2tpFf4vqXTtXddiuAET2RikRDULE",
  "key18": "3Gd9QAVmgZ2ESVQKuJZecjCuXjvuT3uYXuEdxai2aRDhEZwjVf3wCLJ2MxA5mTYNBorc4TambAPcoVMNhheuKrxc",
  "key19": "4X6DPtnNMnRY5EB1Avp9irSF6cGBB5TuTef2M7oD9djbmEtVozsyuawvxjr7nmGf6etzo2k8uXScs1zLEpYgE7NB",
  "key20": "4jM7UL8JE7Xa7X8SJTwLQwEeLuc5jVmDtiyDRezWX4Sxo2ki61BTVRKMaAPrqBfhtLygCFiMiEbk5GABCFuy5TL1",
  "key21": "RpAbmtizYbdCkjejTWzAVQbjd9tREwZjVxHZ1BRW2HBTzLVzZTrWkoDFsfQajX1UVmAwyr4dy2xidy1S5cYY6D3",
  "key22": "4tckQ2W6rxC8GPKev4RdxSmMceB4kJwpQdSa1NvGn1Jk9wRNr6Dg733yzdMdCapxNPpftCWvK29mKSW92GK8UsR4",
  "key23": "2yutmTXV9NjwD6WMbf9gXH55kGt4k5b9a635pc1fLYcR3G39YXFnWR5g1SwbcivkcQmKZtKo6MW22KZPL1RjCucG",
  "key24": "2izQaSNhY4Y1oFiMnRzvSYoGczJsFC5tRsLMnyVeysXFrFyH3tBXwNwaBMp2tTrZ18NP3cLCTZ4LsxAhLG6APt96",
  "key25": "2TzzFHeVnqrDqgE2fWvfDnis5uQ1Us5ekhYXmWbxKGU6Z8symhn1TocBAcqFath37GeSvfuUNx3T6svyhaLzJZ2n",
  "key26": "L6GoJSujcuadSY2Uj9j7n9w7jXvc4BHjR9Xaj2hAhXqvf94Lq9hXE2FN221XaVMfojdTUm8FTAUWJZ4SnrZQhzA",
  "key27": "54TXZHdfabcru21gavZvAyGaRwD12od7tVJH76foCYwS4jFxrJZR15WaBmZ4PaHT35PtZTa7hKavGhmLXV83NjmC",
  "key28": "5He3oLvdrwdtztvBvxM8Yi1iT9pv2xQqjpMNmR5tBu2HewQtsSgq1ioaJrtk8mTnXQYZDtZYwtMASSMmFP2YjPFT",
  "key29": "5oXrQER2DaaMbvqw9y7wW4MggWA6LuzJhFmPQWSVNbyRKGwqLnXB3aQTkaCg5LKAbj3JJooEguQHVuamHZyE8Ctm",
  "key30": "3Rnzri8VRbuYJ1LT3kNW8gJ3UKg8eaWZtW6gY7SGKZxLBNnZ19ZAXpQpHEE1RFPfYafA8EpwZ3TiamA6FBygjbyL",
  "key31": "5y2aASYVRjXbSLiYsR8XQApsrsfvDm1cRPecVn5K3g3s7X6tJB2RnY1nT3fNhTvhxFTT3UTvWHN2T8igj2WveHbe",
  "key32": "3LEf3aiKi9u4YZ1hiBjKeeWExCa3FRMks7ZSXRRzzewrc3VGKUbyQLrYviHw7fArRQg1e42PdgQpmzgURH7LLTgB"
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
