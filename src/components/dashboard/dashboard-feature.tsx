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
    "4c2JsNZNJeuGSh8ifXdkfuMW8EodDv3iuiYmTPYCbJ57QwuHz3dvPVePRBVreu7RPtciX94GozGufLkocq1mvVGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tVGMzjf1eAhnQ1STX5jtdPQM4DJgk9hsyf5t2sFi2dSbmBKMXypFJYu9E1ESiNHVZ3EgnSdAAvnaxYf2GkisCwo",
  "key1": "5B3fnsxhDYXzDXypZcNuQ9XECPYMof2nf8XzP2YHETUymodaYQSNb7my5AGSekw9p2wkjzTdLzoHWmWv7SMfe2bU",
  "key2": "2ZUjXCdeYZTotM8HNJ1byTk8GZayzbUSVpEKEuwWmoczXGmz5mBEzkJHTmZsvd8HXiy36W2HjUwAm2qCXHzM8JRE",
  "key3": "4eYc7PN1QxuA6xGP9VvxV2QLrh3Dj5MYBYa5z3XRebALHjN5dzMW949gHekZqHuVVAY8rjhsBMrFzouMq645xfPT",
  "key4": "26rRe7Aq376EshVfpJ1eHEb9JL4gazmJEJzWG2Ls4BMN7RbdByDmgfu1YMeNRxZkVNZ4CxW1yXbgczYgRoqnzxZ7",
  "key5": "y1FbAS4oBJtgoR7i4THJGvG776vASUuTLnUKWuve2bVBj7N3se38X9ckp4RKdqGY1KfGK238gZ5pZttTDthNZxq",
  "key6": "32L2KsSYphghbqqvmrwiUB67aCqSyTTFW9GUSeEAesFFxBonC4jrkuoHFew8usWeGCJTb1Nq1vD7BkLiT8M7x4hn",
  "key7": "2S1Vy4EyB48dz3wv5A1xbN1dGZjcdUJ6hq7KwiEVdHQoHjGFuU5SJQHLbKW7M5rvYpv21ApENK6mDwXdzt4RYgvj",
  "key8": "3YvB13RGcjVNxJZQDTdpTJbgPhV76D9jqZVtcL5n3iWcnbQD2G5MQmc4ekxxDKLkrgp8kfZyxJhZufD8o7jrVj82",
  "key9": "4eLZ1ziTyZJSh9pWt3kpNN8HCFWv7tJn1dHHx2faxHgogGwNb5m2oYqt9755BhVjsAEStgAE9WecbnBxa9HtSApi",
  "key10": "3B33XSsUNYhRzCSY1P5vbYaFvaiQNwwav5Eck6XQDFYEex15nWFhJ8nTdZbNdzpw4wjkT6MD7jBm5pFFFSPdH9qF",
  "key11": "4BGg4DaJNhcj5XezubNTy7oNwkUwBRAVfkRyqpbR1WNMyzniW2EYXEYqsxsg1jEA7Man1AWEX3521aJgjwmErJkr",
  "key12": "5neMkgZvQxbc4mCz4DddHHD2GfwQnUndL1Wm6qcHphFWsdVzp1Wu7uoQQgJXXkFs3jPfBHivKiLXBkb8SeKwZ4iK",
  "key13": "M94JAe9cQZomVxxxppKsaKEUXRHk9vs31ZEcru674qoschLYngwazkf3DFWGsLzgV6NAfMsM1TgvVW1ZvyKimAx",
  "key14": "24Xfif4XeYvip4ya7H5f4fa5wwZgm1DKY1MxEnt3hToW9th9qD5v1vjCfqjGc2ZrN22YTsj2UtpgrLXsbWUandJx",
  "key15": "5n8b3C79j3a8GhT81nxgVn6HD6vCtbjuwQenPGYP55kLemSw85PamiHRFJpxJhQ75DZ7fv2omSa6zfM3rSEQbD4h",
  "key16": "ddPB1MRQq1Rp33Q7HhToPEfX7KBxKwKAhyHj2u4yspPaoog5ZiPs7es9K3T3c81k6Ncbyo4DTec5NnK8D9cb6Qu",
  "key17": "AsH8MYx3QhZYhXUdPmybc1CKWr93kXA5WRoR3AMvUMLqi7Syjk3WnbFcjgVvoWhEATVM97WzZCqYSamxmQicx6c",
  "key18": "3eeR44BzunLXPDbBhZ629UwsU54CMGednpT4eVhN78xUG3Cic1R1zyteaSvzvFUVnucwc9ZBPf7gk3wnEvfoEKUa",
  "key19": "3f4c3Kx4kMndWSzzpGNpTgHqAFgs7e7YJsaPSTJ1nCFS7ZvX1eGktEyJyrg7vnhxtkU6ouaKFRuELWA6MDKoGcLQ",
  "key20": "uG7ok71BPzMb7N7A7onXdWRdCxoBp5eLjApRRMZHdqnRNtQcmQzpVerWCKDFFsAi7JXD5wxg5e19WA2aYk25bpv",
  "key21": "4G28WJPZxP2xTYt1Wsuw13VjFztM4XDq3QEhsqE5gzRexpuxPbQnbnChLnWedoHMU9ohU21zwYfq6VrE8XBbxSRn",
  "key22": "3YeF6DUNTwiaaU581YmcVEUyP9CbXmKKMY8LFRWYw8YyUXUUi3rEeJPz6waBjuwcsxPMu8oDeVHJn4H35FjNmhfz",
  "key23": "4vZVK9MJh3FiRNKVSPuRbHqNoCxTwgPV6ZdETFBFgh9EkQ9Zj2mYvpT889XYakvWa4U9H8E6xBcVC5LsPVDStqmy",
  "key24": "4hN5g2Q35MbEd5BJHoreERNYbb4As3QnfnLERkPdYnf6i2feAr62x8xoAvzzz5erXzXhJxW8Fh7vXkvX3Hc91gEj",
  "key25": "65mZvedW146qvipGXEFwHSXWViehHvEkweKnBH1xJnSed3JrASaZD3W78xpJ8WPYVw9VVB16XGwHq3Ut8cRu1cg3",
  "key26": "BYhYFqVEz3QRaCEkezyPdBwPUg8epMR6EiFoX6H2ArppgQ8BGDVbJTfjWno6CDXSRxXq8Du8Wc25f7xb3qFeZ1e",
  "key27": "25CbtvMunNvzyzremryC8deioY12EzbkcMtzFFsoGh1Wvpx7ujitmTmUpZfBGFgce9n3hvjFoiPuVyDZFr4gE8YE",
  "key28": "3tduWDhuJrfQxjApM16eeMgEjPLfLACiSooDCsVZMbdsWfFfpMAVPWY4XuavKSC27XEjUnZcsx5pyq317qXdJFpQ",
  "key29": "3sVcA4K3XngxrVX2MMm9NBBxEQ37phpA2Ux1WBGx3Yw8hBH4uaCKnjJds6AN5ALy4JqdYtMdfd8BMpaHAyzw8sFP",
  "key30": "DH9u4RSo7HryZPEGqBAYzFKvpsyUkb7GbaDEYAz8oJPPmHJF99z23PCiX4qHcNsQ5yxMCWwdv4fym4HUW5fC29n",
  "key31": "4juYDQLPoxkXvFrvaXzpSszhU2DMiRMSoQ2PB4mbQ1CD94LkQbBsoUEtMTHQtsbdRzc57Chur7d3ZBUy2SjD6FG7"
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
