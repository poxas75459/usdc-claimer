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
    "ECjDk7YV95J34smma3vdHxBxB79DKwzYTf2TgV8eMiCtZnT3SD5Z4srXdx5aoynrsgWVt7Ao3o1EpsemVgeSqRA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EmfbefQC1Sau5qEP3H9cicLCSJAZBS2cvHM1JrfqTiR1zJ71AGhMFdE2rNWLWVPiZzg9v5KwtKBiqSDRQrHcK2c",
  "key1": "c6rE7Xx8BAXoZeVRbmGVhgSAm6vpwzrtHKuEd3kFHnBV9Uf89ouTS6JunUN29ggAqm4jiCxNYf58iPY5jKHyv9X",
  "key2": "2LUvfcGSqWjPyWDBh4sBSGQzCRdUxhAcUBQehpSd3Zbh6jd6oeMhRKD1qw3VKA3AX2JZWaFuBMzqFFbLiXPryVM6",
  "key3": "3SBEv58eWSWcHbjzYaBFVUqdGDHG8K2VfNGX1ABiMU4xCaDs2GnhW8TeFPKzQ7VDZoy1rdumbk5PUoDyoeoBmXA",
  "key4": "2fwkEjHjQjFSypMMxKrMMB7DEvQgUsGnCTTob5QAX7HVst1ctMfVhsuLV9JPQDShPeZhCz7gHsKjm8GQB5QCNYa5",
  "key5": "54QAP6NjQxLsvXWD65KV8TDzyep4Nh6xQNu4HG4kT1b72ztHYcLfWSqjYeJsNFSJfgb5es17N3cx674fn6dQXp8a",
  "key6": "1whvkyawUukXyEtQy1mL7HxG8DMcyHaK49EDf8rLhgJVchepCLUpgyd7EWhEFXuHwGpkEGohRRE4s2bFcbWhWXp",
  "key7": "5NYzU5VEMztuqaoxXVmPYcy3PnE2JnnudNopQrz9hapyL5YKgPDGV7TEke3YYGdnCDfe1MkLpeEBENqZhS59in2D",
  "key8": "3qPSK9GAexbM84E1fwrr8MgJyjy3QocLepz5BV9VNxUZeNkBwsHisjQN2ZDhEgAXhG2eUn3yFXwRXHEETgGyh6MY",
  "key9": "Wmh3Dm67wG3y1HbUvKJyQpto1EAzCgDyze6camURUHB4JUquoUUZqCTZ7irqUkkiqoby5s6ZDkgVgpo4vwR6k16",
  "key10": "5EWpDtFrUgm7TLE3sVbba9TMsrnf6n8fV4ceKGSPbv6SwyfkefgFzhbDCyy2Ri5aCn9becdQ6Apj5URPFYF15Zuu",
  "key11": "524A3osks8uSFgngJXiJNbDsBaUjJ191v5tkrX4MzS6ZquGZDkv3pvM7LcHQ3QCxTG4tQeD3pm4JPvYx5dQRiAMz",
  "key12": "2mhNnAiTqhQT9Qs7Rqq7tAhRA4j3KGPiHaeW4RseQPkVAPaw6bG3NcSXHnkqyeuMki2CH4qZk5njGxBYcT85ugsF",
  "key13": "DWSmfG57nABghcWaZDdMdz1dfFap16ZsnRuHVdvfNK4d1mZFdvyrFvguKFmSqWhajqGjggqUbErUsGKbsBQxcbg",
  "key14": "jDmoofd8Mvxh9btHcHsjmi9rmW5JEp3cYyC5Prho3otHRNvMCyuXaBMbcJN8P5h3sE9HZhkDGEzthmiEaCHqyES",
  "key15": "4c2pruVzyi84LLJNgBejjDg15GngkxFvoPRFuW1YFm1QrQNQ96V2XEmDr6NgsP3v9bR4xYF1J3XpKGkyDFDuCKX5",
  "key16": "4UxWkfZLAAbuR5oCCcnqXRPQKEBEKvbWea6ULKcRvc2B24bnEprwBBy6rFc4cCtQKnLZMK9ux7hewZQjw9wRoc8j",
  "key17": "4LFt5Y4muVovWycNex3HButAr6GQcbPbEoxwrKEVybSRyGAaCs9femJSpgvYBQNY3YK6CAU4daLUvARLVc82Ai8g",
  "key18": "j8epzWweBTZVCwB4yxe12WHfeEeLCZqtVdGA9mTi1ZCitHhgeq7PS5hm1MBJXG4u7QuoceykoPeeJb2JDZzqnhF",
  "key19": "5XG7ZMNFDo1MiGLDwr8sSs69hKw7gTEHTPKjB7jdE3Hd9yNFPmRaAYmdgDgc6jovV1qoy7ipL3FzoFvHERX95TT4",
  "key20": "nGhPW4je3CPxi7bdHtD7Sd6Ja9XoHNJBNeFteMAKiniCYSdgt3BqU2KuUp6XY2Xq5iAjcphmDTq1JtL6MqKitmJ",
  "key21": "gMkwXQs7smsxcYDCksZ9ASKUSeLm89umWz8NtdQKNqGPcgL9dWYQwES1aFPcQguZpc5iyVNp4P1d7ZWHKdjH3J5",
  "key22": "2oayA98JfJyiBRxU7bZVnY4act6ASKtkm2xcZhJ3CG1xeUWk6tqyhojsXmNoEFzkvhjmGLoeqHBjBj7ai9GWjoAR",
  "key23": "3RBtxrMgj6G8UKQV1Z3XzbFjJBAHTbmjVCwdGDu8eC4NpLbAeqLBurN8m38iaXjJA5Gf1XS35r6T76REWau1nsjx",
  "key24": "5L91V5KEYWeNsVi55X6Nmk6KyC2WMBXqQfBwX1xfMboaq4RZbH763K2mXxqRsaUPgG3ANxfiVF9haRkZ2cdEePP1",
  "key25": "2xevPDLoDBBi3m2P86nBH6fDDGMpUmT73NheD73Yu1o9jv8xhfzQyoLNQZtQG7Yr6xFDDPWxUMDiaz3twGm5XPYL",
  "key26": "5VPSA9btxF8rkRKp7rj7HT4MnK3YExAmLF7irScoKErLpGit4Y1p8E9YbZ2WoF2M2ndWGXtz4iqTkskh6mnXhdW6",
  "key27": "4Fi8PpkR7HUnd34xDUFqy29AKUH4ucJqRqQtHgE7hQXnKVeiavhhx9gRaRMCtviakLyWtiK7B2z5joaZJZvaqajV",
  "key28": "KdGQfyajh5SYRKCSe4xRBCne5VhZ4emt8EbhSqusFAtj4Si43b22kyY6LwzP11ob3HHgsRwSXmBoNRqVhWaReoC",
  "key29": "2XMQX1viCd4WMqhXasV8bibwJgcCEwB2QdpM837BDFbBq5dWnB9Kv1UQ7kFBzier4YHtnM7V6PTPx8gJoMUrsVQF",
  "key30": "326xJG9uKYtiTzqskgpvRy6pqk7YyK7Ub59TyK6LLWEphwdfpNW7GWZ1EEoskuSxLsU596KGsn8VLdsiTUgjQLgf",
  "key31": "24kkUvbYaj11feLt9MFZoK6v49js8pWx6rtfoXoGQDzTDhfij9foCQN1mWJ2fY2x39v89fveC459LdQsXmeEt6zC",
  "key32": "AcXKxjEjnDMa5Seq3dj2MCMgrGmozjPtL2bUMwCryXsbxQqB67FbpqGxtqv3fR3RUx6d4t4txETZF8d6CbYdiH4",
  "key33": "3prRi2iQ2vkasQ8BKeNbURhso14z14SCs54nzZbmESLkunheiUayATXU7PfDvV9rL4CKb2a9W66Lu3ZP8zgGMSio",
  "key34": "4zUZe3ujnuiFJiQKbTAA3kWqG5SZXfXesW4cGgTN7ni2K1Qpahkhhw1W78or9YSD7iGa59aCGCX4p9FT8e1FXpYK",
  "key35": "57HcNWjunhHVec3Dr6uvQBcVHzjPumukXz6Jgij6qwzdAzHEXWzeSoodJcsCfKD28bKtRje8AJbcRkYsFKzH2NSH",
  "key36": "53y1j1ayS4GcRu49EX5mqxy3TaPn2sqmT4By8oo5kRq5AxJTJhLXGzyMauiBcaDCyivLfzREuEzdiEgxaiEdGrYZ",
  "key37": "5QJzF8CT6yRU9FL2zMfEkwMoA5UYXtLF8WXqEUBybNvukq1UJmVv9LWz79fbU3fQJ4dn4NMVHqKmjvxyL1mCKJgX",
  "key38": "34xhTCVWcRtw1CwJAy149CqkDj81iSNWn3c1mSQULacTRYJMj9ahMrE9TszDKCkv2ybwBuRPiHvvtVUeK7yMYAT9",
  "key39": "2ho7NMVbTDGiCE6PGhV1AjNUFdiSjFK3sA9ti1DpWDpBrveFWg9csJttbus1tuLA1KgUPWb9ZNCQBQC2rr3gVGrC",
  "key40": "5c9DwYa7PDbxPJUeFz8ZuGWUo3iQzCYnxbcKcYFa2Ew2ei4S6mQxkwVfBUoro5eRWYwdApK2ayqrUfJL1RqGs5J1",
  "key41": "3bBV21jXQNYLN3LsZYdQ64TLSsMAcwvNWABK6x7fDzNNAhwSSg3UHeVEWyr3CYFPFT4bDMxZikdhLADYqKfUaZbF",
  "key42": "G3dLSWj9AwpTSLpGppTgszHjuVoYUuC81th1ri5MJLL6uwMFrFbBXvYgschHfU6NgnvS9pgDYg8hZmienh66fi1",
  "key43": "2GToXYrhxKKRDiqTfY5WYamB2pN6hsWQ8uTj8ewjfp2gW6w3duivis1GRgW9BLQVZrhXuPt3Ps7Jrg45A2YCKL3Z",
  "key44": "4aayFf1QqEX4Z43sQVu9iKDRX8LAbn5WXBfV1PXUM4ruVqTPVEGGKMi26SLDLsZsx8GDhMfU4ekHHw3Ta8U9QbEj",
  "key45": "5Gfxs8xDtZDDADzFJRtBhrrYUE7DR6GMEKjBoTdZxoba1Qbk1vRaUWw9bH5ata1ieS1KEPye3CQMQ9ibn6EyrmiU"
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
