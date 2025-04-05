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
    "673jzin5MheKqNgkozPmCf3BEogeHEw5hFDspyoRZAVwdKqCyw6nb22fQxHMHmB7L7M2WkbfaWgtmgezGQj8kVCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41kTgvVTzK2xmTx5r9rYeaAn7YptjVprK3E7JhqJV8Fh5MSDfH2AtwS4wxZm7MUjathUqEZXnV6t76Hz4SMg7n4w",
  "key1": "5tbw7WVJRMD5sFz4i4WSNggHGboFbYawqziN8SHG4Y7o5C8rHTAHdzRcMeo91Wikhe7Roft72PLgWx8dg8LsLBA5",
  "key2": "2N69ko96iHSmtvEG9g8jkLPcmG8HdCb6fMKYT3KXA4EpFRGypihtzdZu7oTQHsmy7tS7f1HPEcaatKrMt37GABef",
  "key3": "FUPkxfFAVrUGLEa53f5z86FAh9zKinazjdGYYk6JTHtztQdLzs15LFJeyE6x7JfC4jRvW11Yr1Qv9RzPFaxahcA",
  "key4": "BA8bMZRYfYwdrQ4vctyBR51nK9uaJ9zXJe7KozZHQzojbkxDCRvVRAP4kkJ82bSkxiEYUQ7yJTUxXW2QSur9eiX",
  "key5": "3RSZec8NDRoRBaAcPXazeimFCjKwU13LQTYDUe2a8CMUZaEivX7yHHvPiSLmLMpYgCm1xgMNQ4JhNWM493c6RvNR",
  "key6": "3LvZCJEwumYW845YnzdTUFoprqv3Fad7fBeTpeZ2hYEwABBri2sfut693MJiuVhUdWf3xGX6fRoYVTnQgMt3i6VS",
  "key7": "4EZQp3iG8sZ8CW32fLiE53AoYLrFmj3HtgAK1Rv51KP6RTyJfb9ABhVpvcbqKmHB5tWLdhQhs43ZjBzeAujtSRkq",
  "key8": "5yKL2idqhWg9ffQA8mWjmMcT8yLR3cdE4TEgAdtXeXABLerCFNQBcAMu2UfsHdEVLqLXAg3yvBPiwPBNNzrUywP8",
  "key9": "5JkFuZH621Yrcg1tSHjAzG7qYrFjVhDCVeRG1jUAJpQ9QakqUsaeMgHAs9F4bCZoPpYxCkU6PxEAoPBbVXYCrVtY",
  "key10": "2rBc78zYtSS4sDu4ZwLKdfZqdUbrbe4Y1zuTQwXWRD6BD9zXK4omnM6Etp7chxmAJ8HR1UyBswudyqsMauM6p8dN",
  "key11": "3VKPVi9ydCWgzxPGPdpVi6Nwt411D6catbKh6Sb4jfFpuVr9FVkQZa2w5VmxvyyhDYE7FhGF97hAujqJm2bXzJ7r",
  "key12": "3FuGPYZddQbZr7hDGVhDS9taCWh6pj34EP183vvfha2kZntabwbwuKSAGCbHKJFQYS47V4vAZ1oDQ9hzKUeeWqhd",
  "key13": "2nVezRhHhcDamPYhHtTXuYriZZ1iRub7jaeH4vEZjjiQZDiYttUfvCe1GU3TyVTUPr48FKGofwrNbRG9cENK8RsW",
  "key14": "KyXUa78ZyddwqSAV3fmmiSGsGzPUZDpkz5Us6BxdiUE4sMpgKKgNv6TUKiMgJWKP7BRSg25P6iHnRSnHRmABwXt",
  "key15": "5jy6heWuJZHhpnSeZF1hey8tPzBh5UifKYPt2kLLQf5sXmcQGciMwLr33kabs5N3Hc3xLE2sGqevgEfp5hoLDYBp",
  "key16": "5atYZkbWxsHt8mUHGpuxy4gALT82gkN71n7RRJ7QEcHaCvRJFQF5ZSx3Yj5JGAMe8xqAzNxr3YgAygg1DSMjMbK4",
  "key17": "5ceyTsqi6KpeYFtMCVgubKpKSqB9tgyXKESydnP2m4FQAyrDyDXAX2BydPQa386jffUFfbwk78q3sjfhqNPXEnmE",
  "key18": "5jALFNwBtvriwtFv3v5qHKwq6HjX2ACsVyCZgW9h7coRwmyU66wJmBJDtk7gndE2GtRpqsjEkBfBtiS3nco7zn9m",
  "key19": "41jWhRFXdD665zVkHiEaWCUNshWb2Vh1f3eVoNBrxDdyNwDCekKt6todXA8LnZALCaE6S7o3Cza3gRMww8uPaXNZ",
  "key20": "BJjzuaPGZTZBdN22Mw75UtLEh5xxdHnHjU1GQY74k7xyg3XV1iG7VFBbsneGzhUE6ys8Bvqx9r5xjR6EZg632VY",
  "key21": "LDaVmas6zgowsqrZxAHJx5U4kkuzMqRXG6KWj7LxBwkHnBxf4oPiF5UBBiKyF1kZjdQNZdnM8HCJqcqobbeAnAh",
  "key22": "4Gz2DZh4KUPywgF8fRydDeBZzKkmrh9qnBKKnDCZSNgyah4JrqDbiNchRafJVLRwwXqn6yTf5tJtjqBb4Vwmi75c",
  "key23": "5gzzAM5cdNfT5Y1TJRZS42QDE7JqYngFZ1uEcgUDt8Ma6bivQmnTJTAQFDEgyrKfasWPheN6ZaDqueVgx9CPxxwf",
  "key24": "4aRK3QQDDpvULC2UbPLmT9VyudAworDkDXo7tpXBcd4zY4VRZEhsCmLpSDAQSak4x25mUyfVoHsbgmxEwypJP283",
  "key25": "eNN8vjxvxAJDb2VZFSj5nwnXjVrJM5eXgbXKSYaF3bHTZuVQFFHoMbrwDHJFGwKhz2MAWfFvDwxEwJ37SAg8Jt8",
  "key26": "24xeZ5o48quqNZjPQLCaVNduDsYTQUbBYFQXqWqYT5oJvscTb9VVhyEvGLKxjwxggR8pnj3aFJh6fxD7Dm6hHL6e",
  "key27": "xCw9siUFSgSDvAqFzAKde15fWUauJqSV72QFQzrc6ZTFooYHBUrUJT13epmErPz1JWeAsZsUndogL3SRn5nx1Dr",
  "key28": "ecJ6yGy5ewfpJDKTsJ9TavGGXaQFhecC3Wh9w4XEwe1LAgQBi5NZfUVTeVoDryCS37RAoraEMnVmXuK39TUabLc",
  "key29": "5kB4Yuau55YBNxZcZ8gFsJvxUvNcUEXuBvLdhkj4dwujBKZcuaEyP651rAyJuSj7S1uw3YbvV2FJJMnXwKApmNyV",
  "key30": "4zWwED6HFV3mTsoB7vRCPiy6D7AVW5zkFYZAFBVwb13Ey4mXLgQzZhVH46LnppzDzmgb1Ta2Bt2aYB1xwyUzMY5x",
  "key31": "5L2ppZBXmyCGG8BRyoDcaPduusSLmgeaNv5qUtgj8oNDVdDigSQt93tuqjAxhEiXQJjTb7nkj66byu1ZfPcAVWoJ",
  "key32": "38SCTVjfEt5vb95d1AhQh6CivLtidYraQFbdGY2arZcpdLCEUL9uye9miAaSvQZytpzZsyoGoyhezZCZq55dMgmF",
  "key33": "4gXFYtV6P61FfgwaXu6ZRgpxpZtgM2gsPUu9Y6btZ6ntKv3Muffuzgo6SSXD9nknoopp3NUcixXx2UU1gmXEYPCu",
  "key34": "52puHzmMF4hQJ2tArVdG5YNGQwnaPh2pjmdrUs8Fic7ofrNvDwnLtoswvaX5L9dKhvPzAShmstksbM6PH85QbAze",
  "key35": "2YapUiRyKpTRhHPAbUXyhdHRkmVjViZG5ioF6crsuRCztMh2PgAewGMxev5mJVTJfsMfmvqpVzGLiC1fRuRsV37G",
  "key36": "4KaBhfsMgqt1PDWyMvcae5nZHhHs6S63qdBnTZsShcmS46NBUw6kQPamtjCdUo7Z4srvcYD1kJRZ2HXV8vx3HFtT",
  "key37": "EJNjiT4NN6Ysk2LAZMa1sEzNY48ccyYhU4hUVa4Crxbfhx38TGbSQRXPcAgMxnMBPqjPEtugq8MyJZ37v2XApoQ",
  "key38": "3YjauaQBSDTsrVYbVzHoqynjztW5Z2SP7QvzwPPZm1UeuCzuhg9aQF28K8WsAyUgeq3cZu1XgKNHwMUSZQDmy5Ej",
  "key39": "4azMzjjLATMG4XKoa9hv7UzQxn8TapYf5G4bQ4jr8UR7uoxPexTvkZB9Hag5mrmWArmR2BzyaNEoTqGk2CND35zG",
  "key40": "36qDnZRdrDE9iiCcc9Lk6Fy3m7RzTAn5QfJDxDd9z95Ht5zx75fqPAaYqD3mDGg9HAviMfoeEwZ6HENNUQ5YKE2p",
  "key41": "5xv9KvvHtXzUBVLvy3g1c4F86Fnma4id5kushGfQFJuW3Vkr5K5bJT5saKGTVzbuXXF8bHyFgFcvFKfvs2tn2NvV",
  "key42": "4TJM6KZBBxDLHu6gfY6SCMVBkqTXSsn5ZR8feQhCFXxa12tiCfGzrsqxGtCU2fRKcpPLjNzCjF2b7Tk33r6wRUBS",
  "key43": "1QNrzrDhwBdPAh6mAtGyAbFypbaWz67HGhHmdDALwCTB7m2Gazo5ELds25WdgGz61rVB1GRp6wjLr4Ev6PnZHX",
  "key44": "5SznHGvLp3sCdJda42n5JoSQ3b3a2B8QoZiMAsQ4sxTpZhhH8KrWp2hHbUAUfJ5ZTt7uFffAp7omvtCbFQx5U5uq"
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
