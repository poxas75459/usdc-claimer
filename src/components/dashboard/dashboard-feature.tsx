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
    "2rrTSauAD7fFKQpVLG5Csbv6x4MNK23HbT28vv69JAMsgqwpzqpKWLPoBYPCDasLQVwhWUMxRw5LKJSsDh3Gjc2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B4QRmQkLaBguRUwAhpcFaTYnti5WQ9x27SK5kuLBVT2X5eb4zG7XD1P8wHKh2jfeynnSUdbdzXeFumUyvcq8b9T",
  "key1": "5WAhFev4468ywc2iTh8iQNivLsYeF2JhVNh3N7dKZkLGigKfK1QFoZkSXL5eTWNig2L5BUgeAtcY3Zzp7gaqbL8y",
  "key2": "2su1vZRWxBBHWmunV7yqcLUGDWH7PbNYbXtDTRt54n7cpY44Sv4XdyW6Mp4mxiDWc9WW44FrAELmXGnzqS9N3rNN",
  "key3": "55HEZwbeHnZsmVMP58debBGzDZpDgsQELp4aibFG9jzQzeKGTt8xtcBiHZD29v59K9SFE6dXgVRcRzuy8UtzVhGi",
  "key4": "UX6VcJS4gwWbDn5dh5STYFR8rZpBmf9VGmsQgFhZbZCEqTrdxbw8Kw7hhoSqeem14FmD1WYevq417UBGEcvEUPG",
  "key5": "5rtQ4f4UwSB1ZYsLDWh3bcrvmWdT7yEzdBJF8Y1FMhhpjLTMrCTGdLeotQs6ng6hAuafskFffw38L6RtYfKbasEa",
  "key6": "3AmJZghkbFu2DBNpbGmC2iuc5Xv4pPLyEyuqeGm9rgsBvgge1AY6e6sEhv6TUWmg6udzdtPTBZHFLsgH4G3wFTeL",
  "key7": "2HXTPVmGBxtrKY1JzU6QDNFFTuvXix8ParfrmJ5x6nEdmuBhW1bupR1ftYUoBdnoeMBnocVkrxci88mUAeFNd5dY",
  "key8": "3LhJyV3Tr3kQ7xTdXC5j2iWbRPEqVEEqrM7oegEAqUqRLZLhFrsA59coBc8GCzxZmz6P9m96vV2FuGzdnnLoQV4v",
  "key9": "27t47kdCNDDDbXQPHeLkVeGSr6ficjz2EzX8WVExvJVMPZN5d1Q2DenNroiUmomeqoWQWuT8YEYnde7tKEopWtsH",
  "key10": "3jvAsaemiVyQp3Ypj1gGniQtW8itdJiVNSoc4CfpHcJCkVea79AkmhmT36npew6C5En2Xc6F98Gu2LJzYNJA5kyG",
  "key11": "N1AX3Ac2hwMcxWsjfKNWjXoyAFPLzPhMZMeS5SRGSfK5Gaubw7SKcsBFQGXn4GzWpCYJkQ4Q9rmWC7sHDm4nSEq",
  "key12": "3uYzUpoEuZJYsfCXtPmwfG54foDUFgqMvKUveyD8TWnfZN2jUPXwKnp8GgfEvCkXXcnYJXu7vL4avXNreVg2C2Ch",
  "key13": "38mvZDhNpxnwxQYzeB3zr86T1e9NLevWvd3khyv3J2BTu8sJ1MpaddGyZX3wuqaBFnn7GzXehpjTuLCtoFBH4DaM",
  "key14": "jz1rF3qdUco6ymKXeshyikPz3JK8uTBdrpPzTYD1m95E3NmrWVxUCB3eQNVRcXoHPYQ9xtymkBLxLxRapvU1oVj",
  "key15": "4SZK51GgcmUmB5i9ZHce9eANHcMpbT1hcANw3pDHLENPYooDv8QEv9GFBvG6ntVBoVJHybZFdWGnymzkjJv1ShWV",
  "key16": "3x8SveaW3UBc3i4HfDk7kz9Jhp9xguKDDiwapuMgvFzAq1Xho9V8tVq6YXBK92NDztsJq1LwS2kBdxcnocy89CGa",
  "key17": "3vFsxNGi72GdCQdbJTKmme3SuJypUUBeskfBoSndmS1Tii7jJYNQrZCWt6FgqtVoPQoSY5edBXR7AWbtgLGsjMXF",
  "key18": "5SvXvMzUkCYuA9hmpiK6B9Qs9J9WfbkJLzG9rxA81jdYBHY78tZ47FM99Dq5yHMrGyBMjHSv3V6sS96ZKTY8JBkd",
  "key19": "3hL7cC1iACfoaBYhdabW9w6XpuLMAsVCCxMCLwUexhkSj5a4oYcDMScnuc1MNHVt6U7pVa9qb16BWadir7HTXvsK",
  "key20": "4j5k4af35CEiDnSF28ja1KG1y1fZDFG9fHqzrBAaznNkV1TjToNzwMXmcM6CZn29BTXhqZvbKbuxSg11oKBNkGbS",
  "key21": "3gn4eApzyv6WCoGVa3mBhQD5HdNeRZ9W6DTf3WrSiFnCGihBJV68EkEMtUgfHDTsrmp1DZdTo5poo3MfYaX8s7ef",
  "key22": "5AqScB2Za1XgZadVaE3uu7dpxLaAyJdGyM4v1xK4gvXNst3ZswscUJ6QtrB456gZpQJiA7zMV4bM7hScjcuMkFrZ",
  "key23": "4Zk1KPAfw67tL3g5wmp4HG6xFYDxDp5bsGtrF6sRYyRUkzoezCUqPep3wtvG1FFcvM14v9YZDU9u2pTSk8WGq9eB",
  "key24": "4htALmCRLkySYUTh16vw8Uf8mNuW4g4bjTjqLc1vXWgKSahQUYHVnyHQcjN2W5CMUSNMvKhrXoxnaKKkoSnKFk4a",
  "key25": "5mnvJMBduaFCcJFmXG39wFmBnnurGUhVWNeEtwcELQaBh8MtLEM6GkS3XEh6tGbEbDMqMuMCJEF41jrRWadYYsTE",
  "key26": "5YRx6JdvN9zfH9R78SPqiB9cypiG8M4hQs9ZWEXcvDi2R18XG4uraKVoVx5Vya9g5JQMsQM2dtUc4hUj9cX1NP3V",
  "key27": "45G2WeiTygzDxd55pDMm3EXmFWmh4mPZWLy5j3uf3D8bxNWTMxBv7kwiG4voSYv8ApZT3gKH5uyutyeUGKtetPoA",
  "key28": "3EYGGV6vP6k5QRtvqoQW1jLnwypTTz3McuKREwtZ2on61wDSHdcreeNUvEzEqHV1qGjyBv4yeNQZzEaNFigcZjaz",
  "key29": "4pSjXwEcDJRzuYCFmZBaD6vBjgZ2baBx74q9iszt8aQsE7hxynYMNPZmCAU5YrWKhEGYw3n7Ei3BkePEtkpL76Ez",
  "key30": "4fpw4LNnwshRe61ZExWowt3ASzmAT94h7dPJD6g6ha7ifMuZB4PpmJ4isbfki3KKujAgaDGd6KPBW3BTTi111v3v",
  "key31": "jbieAMT7G5b1D3TriGNP3WEv7QP3aN19ajG35ypyiY4KAAWe2cjphjUcdPE7rZFXhAxNskrz49eV7jwa8gM1CPH",
  "key32": "5ny8foSykQLezAAromHNcuAmP9uFQ6auyWjij7rULfyz9C5n5YTXaV97MUT8a6tFSMFkDnym1Wei1Jj71BUJLNKo",
  "key33": "2VtNj81BANiLaLqyaoGBttAfArubz9DQC5ptyYoJJ7jLJedyBUTBGn4eA63aDvZzgNbgPzuAV7PtH3U3ema9U3vB",
  "key34": "4H6iSGKZU6P5KmFaeRpHfwxEFh599i7i2mnhyp8M3jjkAMgsPXgD22EZkfxuvdB3gzizqF7d6cPssaetu6qPWjR5",
  "key35": "66949dJozwSMAvepCmgKmYedGLXvxT9bgTWTF8b8qVKEW4KUh99Dv88brMnBNXVwhDE63JATHayaSY9HFvFpCQin",
  "key36": "fynMFSERKtb4E7rqF5hyFmKywmsu7hxdwTXrLP8d4CKgbqSG4yy8zzSK9nrBz9VsdWhdYctDzKNH6kgqePk41GU",
  "key37": "3gubvUSi5gUfiMBhatTZjAJSMTdjr1Q9sGvkDX8r4VAum8k51R4oBUN8Lqe7utv6sZKT4R7mDHWBGfEZs9dndPdo",
  "key38": "2pS4SyPQF6Evd45nsCd7kpV9wqKb8ZCSy57CBAGfWb3yLKxEJeCFVT3jmX98bMEfCW7fBLHK92NQvMD5DDeSF7Xu",
  "key39": "5xyp8ZiYnaAtaJQ9bkMYmScXaQwCdWC4P6DCy9LKfuAXMdHWMoiuJoMkQLGR5gLsHQTxVyzWx5d4hkNXm6Ciyxf",
  "key40": "2D9rEYS5LPYFPZUYGq5qeQ1E8xdbDrzmMMJdjTnDfFkvfN2QbH7xaP8VZgRjdrwgHpqUkaNeouWrkrS6AY65z66Y"
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
