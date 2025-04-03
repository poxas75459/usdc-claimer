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
    "1RoA77b51broMEc8BWqX4EMrbB8jcJ8pxMEmDz6zqpBj2H9KChvXkLcp3U7JTdsNohDnq7NL8p4UZFffaDn1Jy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SE6ArFWXhPM1D8rbES5ehhnhbCfMvEX8HGMKERCe9irEwHemzNo4ssxeUUo3mYS7Cg2QGfpnXEQHTMU8Df3CgwW",
  "key1": "5sWzMSn9GPVCKGZGxZSiuH6v2YbzdtHxjXez1867DQBUGPGLgfdExvLz38V6ZsoLSLZ6Exp4dEF5KwCi1Tc4P5eS",
  "key2": "41knpNBcGNQpWkLa8LtDKh7R2UgrXA9BkztDj7veFGsqjodbcjxgQkdkzZTgnMAscvdGAVJQ9Ug331b4CkYHJH16",
  "key3": "x9eosdM1QxKhA1ZVXgMqA9JD2pGaJCEZZWNUozuaDoz4pgMYoRe66iPqnDWA7fyzUmNvHedZUCEndgHW5CCAmwF",
  "key4": "dBeBGp5XPgYZw1g25LU6KnBwVHnP93c8F73EVAt9v8gR1dRUuY6AR5c1ZMJEAbczKG5w2JTpRJAUmsPsEKvqvvT",
  "key5": "3ivAPMhf3djvY9MU5ZDwBNSdE3RxKNACUz4hqMvuRTZoXS8CR4ymKCWJDAtEq1Ef72j7GBJ9yM2H2FWJZhdjwfQ5",
  "key6": "3NddeSqAVbcYbK97q3JHVdbqAdwF2NYPNaxknDzCuU98PPPSgnq4oBqKB8TLD6CnEjAtdMDmyXEdJc9AA1G5kK4z",
  "key7": "2p1r2CotvmXRYYKwkvu2pB6zSQivWQjx1PCDFrtc5hQbPU6FDHgbPBodsHJCAT4eJZuWf9G7USYnCGVEFerJUush",
  "key8": "4r65RUP8Zoej2aoKFn1s493dw1XM69MK9GCRZLsTPmyR4MetSJuYTRqQTMnwRqUAfw8rUm5brW1LkS2pL3fSvEs6",
  "key9": "FcajEknwf2mzYsZSBkmqiSLM3mutYrZv5rgp8mSYeMy9Tv5JpdNuUneN1Hy8MAYrMRxdjjKo4quChS8492zbktP",
  "key10": "2aSgV4rHPR9X8pZd66K7TDZYoTJHT21AGC56b7P65ETpJcBrzT1SUisppc3oj3QvYz7nJrNBNYPBiYLTAWSQ6ePN",
  "key11": "2oehZSsNV4eJRiZEeuUbmsqwt1uct38ER7S4dWZfZkwBy5A6hqdSEGLHMQsC5a1yd1GEsCvB3BwmRVXyYU16Jh35",
  "key12": "47RhhM9bUFBmgKJSkZcxfG28A8efWC9n3W4EnBontdKQSzQeuQ4wDwM69bVH4JYHHdDzdgXHaGFUESo9nb8Xxt5V",
  "key13": "3egchDef1vxvs3CX5svK8bx7VUjV27D7YhY1pUu8rxEWp1HPoegNomY1f7WUq5w8xdJeB4yPhBnL7M2bJiUqDAuq",
  "key14": "2qySgYq5xnnFmxmNwGRNGtShExSqAtT1FLDiNaPoE7y8T7UnVMYsqthsXhhkomhboyWnZwhs9vrwfSciNNyCvPWq",
  "key15": "3a3XY9XbkfPkqM23fcXgj3J9SqF8yWmQryHKxEV9L6nFdKE2WFXuyBQFVg3oDFE6yYSiyvVSwAHFQaDqREuLD1YC",
  "key16": "3owj9YW5Xa5zLXCGX4X7kBKCpMDsa49GPHrwbRYWG3BgWaNY8EVHomNT26wuUsHarx1bHYoup1nXXYKoWhtPYoon",
  "key17": "329Nd4guCfsno3NN1ErD3quvXi2aTwPaUc3JsV3NcdEgR4bmUWRDquHBPqif89qQnJvj1UYqY6x6Dsw2bvVG8dSd",
  "key18": "4tcQnAzj7ETs7iM3rjsh8kD7k6Pp6Yc1SNvT2gq4UYpUXntBJd1sYpzfBcpQ8S37zeab8ds8i5S7cj7oNPQ8SkEr",
  "key19": "5tUxZGu92kGtS2HbCzQ3snjYiGdJZezUuri2Rd5TirpZ48JLhiXkGciK6c35j3xNhdRtSXLfema2Lgeb6GRMo7zJ",
  "key20": "5x5ympiPgZ3dHyXRt7sBTQE6KA338ZZbj5QFsdHyGC4S5vC53TY4Tb32ogc7PybBZWwaEaGWgY6GJNQcihPdmpu3",
  "key21": "62zEmotVnvT3Y4D9AFkcMs1vYhCBSCS1bR6Zqq5yh6VgCHQSMyDUVYReBZm1qYFGVwGUVgshVPXiop5rSFcryVWN",
  "key22": "5SH4GcHJLLKR5Qva4pEzGhAbpXuJrooVBXqY5Ae3qhxE66gFPCqZiYtzUKmHnwvpSAnPSNPCdKqNi1YixaqfPj2A",
  "key23": "65MVFmi3vKX4heHu38Ebk1uLBspZycGnGDjQUrjBitctjaQNU4LkDGBkzumijpqVV37wxL4eiymkhBXb616bitT9",
  "key24": "4jZm9kkTxqDePob17HrMKfFkMaHQend177nbtFJLiv4m4vNCDtgQAyb6J8Wvz8Nk4x1Wz7RnBBUGweYxhTFX2LDD",
  "key25": "3dVvmtZAKUThqWajKTPhGqtCZ8rzhr3Aw72Q7mTD5Jvi3DGi2ShyBctSnQN2jfgDzV8Aza1FWwJHyn1PJt3RVQpN",
  "key26": "416xEsyuZRErEgbgJtrS1JhtBNbxN7PU3m67uMGPy5TWuRGiQAXVcBtAT3VAqkCSEDZvRzYj2nERxs1U155Drfje",
  "key27": "3Tj5rDrhLJWhVSJS7vJZPjZd9RtuW6Xe7D7s8thJh1yNqp8tiY9g3NDj7MekFNYHWFvNBxrT9dG19FPMdyNfMaCF",
  "key28": "4QZGXVRH1wh1ziqyY8oJiWyzrt297fuQRFdXRKVt5zKAhmti92nhDP1ErzpHLP9muCTRKbaGFPHwhEbs6rdDRvFG",
  "key29": "5ffEt1VK4wjwsocwuwGSPyGjHGb2Smh2Hymtx5izAKWjjwkeXKoVfSanV6ovB13NJx3tAmBcyKtdD6ppzv3yf3eF"
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
