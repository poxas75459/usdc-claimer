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
    "ftNeWdexyiTjYiPL22CPmbsns8EifwWdVmAQfkk846CgJbj3Yf9ZTCtA33YmNsB4NUnVTqMghdJhh7ijL3ghKSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8YPvRm8QYQ2VHziaKi6EjVZFbQQ6DCfas4uAsJs3kAKe8GHZAYB9kQv5UWoR8sz3YgsG2rYVtQrAW326VT2Qoqo",
  "key1": "4VaJc57FVY2V5LvAHLDToRoxe22TQQBhTCVDmiyVhG8gbMdgP8aMNEH2Xy4M5D5JiBBhNcDtGDgqRiNSJK5GVNZs",
  "key2": "2LRVrFniMYMkb4vwGtXuMwKB9TWwD6QGHiuLfGAtgiLVToyaYp4xvRHSGLLfvs77ZmXNdgUwpTbXLTTxMFor1cuQ",
  "key3": "vegw12rSCwKutj92aGfZAPtbtbpnD9FXAMdiGsgdKfCbYixZKLTPdvwyVW97oM8bWqX9GcqZf4Gh8Mw7PMGHBNj",
  "key4": "5NDEP8ehiRz66zVGzzaCcbRnFBF3n3LppqGhAQhwzwtqM1adp7vTjiDtFfJ6Q5kjvXqRduH7akAjfFT3EeRfFq9t",
  "key5": "UF8iZhh4UUioi41xXHmcfLRZJ7Wh7526kc8YEwsKLjg6bjs5eKsVHKbSw7mjFG6iZhEjyEuv7z5D7vH2ik5Pfio",
  "key6": "54B99CE178fKiMPfC5TcZjdzEoVL7nV5f7pQSE5htfN5zDZyLbiK3B6mzaPtr3F5nJeUAdYtShqZYkFy9DmfNQxk",
  "key7": "5kxftvpyV36WnwU8AkhxgkV7yMcrHjHw7ZQYksTbZMjPsAVf3SLm9JjnJxCXMSMcepk1Q3xEmz39J8i85r7Ew6yZ",
  "key8": "2ZTx2vPgqyGKtsj8pWhiPfXmKR14YkENx31wCUbe6NzbwVcR3pYUSjDGdormkLk2ME3nMU3gLkSmxQN1vrAmreKa",
  "key9": "5TouDWfDK6sMH1acWu91ditS5a734iXtUc26w3pzVCicQRvdn1k3W2SUfM5ZANnQfTwNmWThXH4LnafgpxjsG5X6",
  "key10": "2ToBbJLZmA8JTNNotXdxe4iwMD7ADmHwzeHd9DZFb5sYhEq4weTUYLVievDHg1kUKYAi8Pr5wSeJ96BEKC977LjG",
  "key11": "RixF4WTtzSmXUSj9FBgqCXC4C6K8w1wsMKTiq4MLXbCt4wFNsVi64siQq3WHjSHMB3nJ5BsWSq2LN8HETzNfFXY",
  "key12": "54NXznVUDseBjEfqHjygah57T7vrdTwzbrpeJuWo3jeevTfY9za4jDMPUTaH16B9xqEQSaCdSHPb8Tcnh337dcWt",
  "key13": "2kkWd7tkBbV6ioGQ4E2aGqibrJ5U5cf7tNhwdxz8KrMAsuALFjEiE36AmjaujJSiwXdDoiCwNrzhmtEZw7njttaM",
  "key14": "5vdsCkpHcCEAS4FTH5HsByv62krfAy3uZQecbeRZDJprt29CfyWg1ZgF7W3pzw4Z17Cd6VkqCzPNBcvtKxgPxPwC",
  "key15": "2mH6o1b81kMeyPmg9a1mbGR7tSSsKjAT5jmZuyH7P79pW651ZfkXVcE1iph6HZkknJcteFHKBomXoZosDBNsVWKU",
  "key16": "24nS6g9KCShdzescThyFSsj9EGcnbiSoLbjGoXd1Gvjv1ubCxhxdnGHo8RaDt6esqooyeUiFfqzs93BqKoGPv2ni",
  "key17": "3o22kcxKNDj63dkH8zZCJFzWEwg4YhAXGGdYy3J9ZicAi3fPtopg9gSXzrst4SqABPpqSgZR1UWPrRrNEhwboKdH",
  "key18": "3Q3J3rQeqkibECTBrdXLk2JJ4pCzyijsnSH66y49K9VfefKkFUZu4CcjnB2xukcWgkMrkR53Qqg5d6ZvVC4nn8a2",
  "key19": "sLB2JQ9uR9BgRtj688f2sfnSdVjEJooXnNf2ZEbj8LhrVZj3SewYe2k71mFNtJ8owhiy3KQkvs5fFR7scJTDStA",
  "key20": "gnVJJHyfrcifoXAva6crexkF7jmvHsm9g3rdcNjJzHNAS58BDsrSRpmTsmputsvuJCbuhVh5jhAkUDydYvxZHrx",
  "key21": "2LhNvxp6HnHvHKWgANjdRcu2kbykrdXvyH86bsd4z3HkEKForKyMKfkD7QgiLdzPqUhUvcrTPs2tEnTBxsZDAMmv",
  "key22": "3umzbhfRECmhtJMqb3ugKEkhUiXFM1QS4C6DMTmJrSm1yHxqSDkd8aDmQpxNNebF61P9n9NsLBo9PZWwwcEi3wZM",
  "key23": "2HrM7jog17AnzjGLcHNzqwLLbhh3JpWzTdvne5ENE6sk4gNX9YcGEC2iwfAyKgj8dUScbRShjpHbPNZhdBC16dC7",
  "key24": "3LzfWpHCt5tNCerPzfujqhikx8K5Vsb4GqjqnM7FzEdhkGEnBdNWcpLBQSX4KEKoeWZxMZHbeeAtSw5qz5QKs2QU",
  "key25": "5DGUNd9R3eUVSiDt7rVYMrA1xvqRXkQ5MS7rwB15yPqH7GnMtyGWiNpHjj7Ws1Si4cgHYdUzNr1cgM7rWXksz1F8",
  "key26": "3muxNW1ERw5poe8UqktSHtipQu6xkW7uC7T56DAgSAB4sGDRftRsS4vpyq8hStKPPnvG7Zkgkk49NxbSbSs3mdZ6",
  "key27": "CeZsca2Ec3Ye3LWFNpGhyyZBjiWt87Dfyt4ZBGyVjndAEL7MgVasFJ1K6ETMjsSZ24ir9cG5QKnNLwsvmRXgp7z",
  "key28": "4AJ9GMwgPoVUwaGPw2fPhpXebpwvGnvQxivJSnkfeHeGLtU7UCzNNn1QVE1Hnfy6YAkeffZPHQRsLztAAiQK7fYU",
  "key29": "2zUKhXKytyx4NbvjNFFqjRSEuBo6NujPh9wN831tGb7RYUpuNxTnLEMA5Se59ryk7qx31f75HMB81i6hSxtyjrSA",
  "key30": "3fN6mFsZ1ez6sZYN1YUZ2s8Q3ThMKzyeB9PMq8jsCMMv6kWfEANQ8JoWvTE3JvFQjYBwiZMUd6fsVa7mftdnvroM",
  "key31": "1yJJTmsrjMxvHDUvUbYq7yKTuYdoYgkq2BFbM9FAByc9iLd4i6zTVifpCegdUjULtxwMX9ox2JJroXjYeuXpp34",
  "key32": "49RVRSXnaz4UQrEJ8fgd3yuvMBtSXvvekv7P9mARHVZnhKciWfGxFdj2bciLm65eqTVQjmo9bxWVpj28cdUwTVQ",
  "key33": "5nCXCmKXsmvaW861zZ6H2BCM9iQdwej6ocg7DvGrw35GhD8UFqtqEJufmxVe8s7tvsp1FyRp1ty3AocjiCAo64oT",
  "key34": "iCyeDjjpPoJd4P9Kr8p75f72th2jNT9grY9vi8G8egFs51ZRaTQPNUJHGz3JwGM4dhiJu3j6rjMDS76eLYQSSbS"
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
