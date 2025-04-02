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
    "3n5vKP9iHbL6CW71JGo8xRN5z17n22t9cMc9dcTPtdHsQG6vSLvHH5jJH4zbAdyDYjhvHAZk1BV5jor54Y6E4Vcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t6JTg34qB3bhDvTc8A3sEkaPyGdTfUunE6AqthJo6NDboY4FL3B9czxKYt75fv7CsZ7Ym1HTfFbcN9hPySfFAz3",
  "key1": "3srFqXjv5WHHwid1njH2zYgMLTsfvzzDtBqBJFXvg2a3EAjprqaNHoGuTekYhdF9CkAYQurXQuJxorrWgEc8Ua4J",
  "key2": "kBw6QhBLfLKZhHxghXj4gJcgYXmduuqMcfYU8xfZY8Fqtgn5RXbUwziwG1H1eqZuJe2RBSjiKDJzPhL43vqpevC",
  "key3": "31o6VzJ42UV7DEUgiyKo61449YZWjTAEqWWuBBVEwUNYo3WspYZ7g226shSKiQP2UdgYfyYoSARC98C9T9Lwf6YX",
  "key4": "kNR1AYkXVpqbMJkRJEicYAsz57MwzjXdWTuSVPXriWNGbUJCJigL3qKAvRPFAJ1nbhaBxU8PcKLUMVZiWNnW5TC",
  "key5": "5r7WHkYoVK13WJpyhuqLq6LBT4mnG4Gekq6UY1WGUqtp2ukj8vcZCoRYbCENoaiopKtwMBWHVPsbGpAVNciNwm2i",
  "key6": "4n4G4juGiJK1fbnxGWkkrg4MqfPtYaUreDFu9atNNqgqU7QSVmY2rS7FSM1cQBaxqk98gmoeXfrT9ZAerTexD1ma",
  "key7": "4EdtJgNMRZNA3su4Ki6jRu9WuqRJCVqY4VBhVJkUL4vaEKbhWJqcSqZuNzoZ1TLThgHJ4uQzy7AxAGfw6j6fwAX9",
  "key8": "5NpC2gzpYEfEoeLnXv7RMJ3GFpXPe8kp6BbjQVw9kwqhKpY9ohTsJPSwFvWoivt2Sz2vd7oeqGpiy8ekBw2N9iK1",
  "key9": "4W7BEu8FyhxeHGz4axB8wjReu86BfbBcoRGVLSQCSatt5i5CGX32biMLuMBsG1PvBwzgLi4y6yUQoDB75GfQDAgK",
  "key10": "ww1KFSDc2JwtJUeMr1WaazgFUNoeyVyyWcQUgujN2iaW8SneX2tMzFeg6hgJkw2eEA7yetbq1uHnnDxanZvBVTc",
  "key11": "4B9mJ3YyLEJDw53ckegAmtd31ifYqYupg6ojEm2uGtJKTZsbW2D3sXHDwQiWFyZQ45rVpY7xLpPviSbXaQkucZhn",
  "key12": "zvcdd98SNACz8yWbGkxUkm3PapQXUdkEvkRLYE5oWgS1SPt4TCkVRcJbFUY9fs3vueeqP91UmfNeom7DgbrBSwW",
  "key13": "5SDdtveGvChC3v8XLjaA9o1gzSDi3BzD3BCN5M6es3pqpZW2eMBn15croi5GCwn4ETq7o5AkLEjDN2vYYFzf4b9N",
  "key14": "2cZ1WZBNzmbXjAdCx2ccGD5CAFjjSD6x47q7qj16RmWnbLLpkV5c6cSQmyMF2xJNSB2RBJWpQ4ec8p7HjZud4mfj",
  "key15": "MNKzMV3QcMKKnQpqUrQ4kVQXi81eS4RLXmSBZZJafrY2vXhngi4KisABuHwzaHkf1kdiZMqL6Vb7VMEGhovbVe7",
  "key16": "2wztyqvQhMyfCz71SuNNMVGsbLPTs21221N9f8gx8crPSJkr5mZBfrNFASbE8fjS4mSgwyRHuZS1Ljgq262gK9G1",
  "key17": "5izt9Mnxi8yavsthZFYNFhr8KsUzu6qqmqifbZkvphEwCAJaHqox989Faxya9NomqFrA83rLJTFGqwC2zZAUQzAU",
  "key18": "25NfgbH8hXoYjZxfi4PJo6k4ViWXHK7Hibx4M4rad8Evq8U5jqn49KMrC1kLLSER8mfa4vqZ93kun6hnXUFU1DFS",
  "key19": "2h2mCmLXtU6VFwT9AC9xW2FSHJfsmVGZ8vr7FGDLr2o2M9gNmYYMtrUq5E2Mt41r9maKvVtrtGAih78weSu44Qeh",
  "key20": "3fJeFtirBfFFmqe3uh9otAwYiPCB1sLwgbPVC1SgN3tF4ALNDj597SjRMkPPQyiin89pQhhfPXJzJ7wEnXELyFxk",
  "key21": "5PUbiq3QgjBoMmCcQC8tnNLxn1JFZY7ujR3JQkJtuk6eqHu2eRcfh6AtKtVQJ3FkMzdJBVutfwWRcwkN13WZJp6u",
  "key22": "nESsyG3HzsH5AziFGqVSNoe77KhN5hDaX8WUDXGyETa3fv6yqo9b1tuqvARLuU6GvCKx2nJAECY8HBhDK7smwAR",
  "key23": "4AHhzM3Qktg5p4tERq6xcWpyHfxi14opoz7cWocCDzwHVKD7mN6WD8f66DiVdrektLmWMCwudPhKgGYPTCQhvrsn",
  "key24": "3CsQKAXTHADoU7gDMF9UEvt4GFJz3MyNCSRdg6A3Hy86jUdEepR3AK4ZCrExCvJx8usn6haX21hXpG7CpdcPKFqK",
  "key25": "5uubA4TjtSsLQ3umqk3LH6sxRhCKStoLYc6L6frtR4UQXHRVNs8ek6pZXbe6DiFvrN6k9WWtc8dhj3DaB8PGe5kf",
  "key26": "3efha8MJyv4SgSfcYA4FUu56tSJvb7uULUqmYGiZVFEMkbWiknNaThsgb5iJjiG5kCFPAgTmCGixthTAPSKvnNcW",
  "key27": "5DauufmmJRtvBZD8XSQFVyJsrSREnLTBxTCgJauvh35uBPwnANbXN7vEBYAjwre9h4d9VYb2V72bc4DKsYruU9e1",
  "key28": "5Dp3YRgibC43agYrJPR3Lhq8QuNj5emq9NpGiKHhPFQJm89spTsEf2eawMf4bhR3mAL5dKuom9efW7MRJgkLGGCp",
  "key29": "rtjaHXmgpmuy3f2BNWu1Tu6pthK9RQR3rSNsF5reYJUj5m4i9ewhK33R1VvF6DY2jQReFsqRuNGqwkiFP3WghSf",
  "key30": "4WAzEXzHRSn4nvQtHFEs9ryfMbZ8quBCWbaHgYBcGRUKCADkQwNwyrYtwCXK98dYVr8q9ZqMimphnP39cRwi9XnC"
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
