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
    "3CXT4LWe8FrDQ3YJ78cm72cYSmQrbbxT3GkBn8FcwBfxMJBwog2BnhAhXMmD8BVF881hqQkK9gHPCpfsALsjYfcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wyMPp6A9bWoVMVu1N3AVc2oqCEkdRzfFsj5Zk7ufz9exUK9KveHwHd7cV6RMnDx1vU3TxTfPMXtgE2dt39zPKzP",
  "key1": "oNRUeYtu7tTyJhELrA2qmMELPooKm1bXgpGysYxt43T2KiTFKxJWajnN1NGkMUZYNnsizaPgzapH7cvmTt9Dgom",
  "key2": "HTFXzCehieaBadfawtJdBgugc3riPs4wMcFqHsC6cTZY4d38cmryLxjo3r6XzkdZu5xkUV4VQyETz3cUepgEEYN",
  "key3": "4qhsysFgeBBwKxV8ZRV2XoyhkL3VhR8cf5rjJecDEuBFBvXeEm38hXQh2zXxFzsMEb43QUPhmWFqshcZEHdLt1ZP",
  "key4": "3mEfu7M6qJdKRpFH7V3VqcEaWuTa8GDx4FBwt4ScXNNMv4hsPQZLy81CSqThEioBJrsLjDCFhzLTzXo5fXVkH445",
  "key5": "5HepqGC4AzL2wj5v6ZW4SMRaKxFLeqsWi7raLGoyCaFHKxtbuGF6Jzg9ofFAZqkahrsSKH41jLfPZrkAPTNCyzXs",
  "key6": "2hgKiartEmYKqYzYx3cun9iFokQLzPgnE7ENEyL9bPzc9viDp5PAntUfVBoSy42poXEg6Z67kSYyfsTDTWtjYU1r",
  "key7": "65rQ7hedefwtcAFMos8ZEsLQEiVKwpH8JghPjDxwY4tUoQZGugLDwDCHeQXkaHD69G7T2xzaKkX1CJ7VgTazLhxc",
  "key8": "25Gq9EoywmjyVsouyDmyTZXv64kiYNjPW9Ak1VEN2zQneHocFXUQatNMUHqq5iNvj1oYVqfpYmanvbu8EYRZ73kP",
  "key9": "2bDmiFSHEphngw51Rkw9YHqPxnoagymUt4zuDDE3hFuHcwPhvmWPYu3XP5Rek25axuAXE3CTGSwxTT19xr9wSziR",
  "key10": "4Zd6otDscnPmYDUGTCXdGzuaRhKeyRQh8wf3jQqk8jYMv9B9MozFYBKQcZtCfFsgxpD4JTFBEQdRVHhfDV1pAMUa",
  "key11": "3QsPePWLfK8ZKx9RNuFhsPJsiKAtPH2XHk8GMQQgmNtTaN6CBivuayx3x8gHdrdXqe2gRhBBh6ACaRZhu7YceDWW",
  "key12": "5gaYnUFtBs5hvZ8GgY3syPgSQqugxuTaCwqW44eNTRByK1KPcQY4xjqoXS3WREtDVF2PwY6aM1uyD8XBfmDu4haF",
  "key13": "2aWLTZL95iF1vyFX5pWhVx4ciid6DKAXp8HZcPRoCzmnQyPjVzdrvrpGF6XhdtKwePKQECeZGsCSdnhViS2KiNfn",
  "key14": "3oiJxdAykufC6JgGQud2uA8QQXUFp3in1aYXuya6ePKMytTHAS2exCP7qFAjTh9JMtVZAzQ9tevCkwPvHCNAAioK",
  "key15": "ritD31dELwXr85Wi7rq9c8Jc2F5gmG3sFHsWgnif17ayQGgFRpYWMUxuTLZJdt8dwtpZjD8swfKTzc3duGrSaoB",
  "key16": "5dMA4txJfJdn7dfD6iD5HQeuhpo8jF6SSYNMDvsP9sXFzhJ6bVf83GsTXjqUNB7yTUxy7bGkBKUTi1h6ND2Nqzga",
  "key17": "2wntDw1RS6vKFsN6q9hoFps4VsfcD4v8zEtEFaHXBHTPg5w8J6icFuFoXNcLRNEmLzNttfytzo9VmjhKr8ZZMoVD",
  "key18": "NnYE3w5gttDTcuJoN3GDDaxcTx9UYwHUdDZgpgPq6ifrSNVMchbwa8eiqsQJ7yQbBwLdjVCJkPjTY4qVrMg586U",
  "key19": "5YHt9xozr41qV4yYtJtPqTPfyidPzyvfb5cU5yR2yXYiFKgSrWefeyYpEgMmYL4EbRJm2h7UQTuvGGB72ufTs5B9",
  "key20": "4skK45HYKnPR17axTUN9eE7sVfMPQ3foZ5QNMvQo8zj1WxvmchmBY2RJwH2x7ta8WKSDkqkXTeJxkf5GdhUPBTbo",
  "key21": "4Sv3W4AtqwQpMrRWGYYops2mCBW16DqmSumy9XxzkFovc42urhdMWu3k8GwaDf5UReeGzXrMacBB7VYYonBpw6u7",
  "key22": "4jvCKTgmFJxmUU3Xs7pBnzZNavrhBbg9obdHWvaFXQGHDo3QkFy9Uq6hEVUSExDwvBa3MK6kBwYUTQX3hXNTxrhP",
  "key23": "29LWB9DHvMs5nQDYoKBk799LEKZZVmQxGjpUCZxnK5MFya3tgAwRUeNzfyAN776fBD8revxqUtebPu8GMRKvWWoL",
  "key24": "4EwCUhmEB2AjrBNxFCmDbYCazGakNPCT2y35roWtQ3rb7qnF3kcYT1DDM6wd7M5QyQATwFoc7LwmocGsSos9Te1N",
  "key25": "2rzwLYsWrZHatN5BGzX7spsBysQrJTLjkKc3Lxqg2jx4VaNFSz7h44rbu7PuSXVgDGKfDwMDMT9yftdghMbCcFVt",
  "key26": "rmF5WmSGiEs6rdLAzsUCwrkfbzhJ8PbESxTsQP6F2rSsQnwbnCtjfrnavqFcWaunFVppaezkYBokKdthoYnUbeX",
  "key27": "4D8m3oypJNwsuzAomnrCb8hMxVL6g3PA7R3CWCZsubmdefT4jy7TMTdxtdV9b8uSd5MbyAiEst4NPDWw84Njjcjz",
  "key28": "4Bc1tDb3G1AqJCEtx1iyhurXbF5ja7SnDQjQa2mzMTnfNCiKPWCCQdqZR4FZxiBC4BJwijrRkYzW3sWQvPQ5oqAg",
  "key29": "2eXSS9YA6HFu5KLwjQQ7RbhRoqjuv7NWyqF8RPFiAkzijNYxTYapf7wRCXrpSzbExQs7YVEiqJC37p9k37tUvwzi",
  "key30": "4x83WvKy4Q6vkxv2snjBdEdjJkxCirBisB9LtD7pdGDncDBFH8ybpPwcZ7MnwSYUNNAvRbLCXsu49Nb7TA8TMXsq",
  "key31": "XgB2Dv6BhzywTkKRV8SrJgN4D7pDj2XN29QdmVfN4XMhfgZJyWEBPiHw45EesMcWKCwerh6TihaoLoH92GEaYXA",
  "key32": "LeohwhxqpNPAdGtULHXP3wvyGmy2ptExqUo9XPi4BnnYdhXS4LWHNAHCdGpVqFPxXmJy4RUfWKJRJJKxVURXwxj",
  "key33": "4F35Do5HZmqj37eRfV5vWj2qJTxaQE61oxe8ckvR2v7FYNby1JZNh6Z8wjL7PUkQZP4EzpXntGSn66mVTKfxis8a",
  "key34": "5t3qm5kimZcQd8trq7wZL6Myn4PErY4kHQVeMjJrGioamyqyGwKDM5LUUooDnqE1yps6TQ4edveJKd1nKJRfZB44",
  "key35": "3vyHx3K9L9LJD3fK4TWyJGWAxBF2vuqgHCfBfxAZdTkR9NDKq1f6Cq2dTPpjMmYzMFvTYK13GnafwQCjCJ9pUV9p",
  "key36": "2sc8Fb5xN3ReHH2a4Uc542q9G5iFQQGMdK7p749qUaGGVHnFhEajVtLsvH1TtiijswCjVw5zRd3rx9ZqHoAmJ7Ch",
  "key37": "2qt1RJrrHw7vZMq6LkE6w5hYNTRJj14ZUbXBcLRZXskJxukD8hmj3zeRmE8erWuPpbVvPPbHWjgi3pj8qVje5sMP"
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
