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
    "5imYQteDsDeDSwXhsCvgLj6UeAx47vGTejcdD757b4tXoqRYTbZyToGZYT5LK2hZrm2VbtA8J7brf58FAvdcgbbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pd8sg3fUZiCxvJZeQWKjUAHeQYok8Rs7gMXRP9quWq4yNS7gCCkj8PaqtX7GyzApZFTyofRPoyqE6QJHgp4ABmb",
  "key1": "g84z5WiheUjwPz2PjZzH2fUG4SB9fpN36ePr638GkBTHVhyJtRSqaivAA24YhqtWEht216q6BM6FKA4KievxQPT",
  "key2": "5Am7S6bYJWV5xFfzxDmqLxRdV1osQpoFCmkTzVV7iAFgva3WPiEQPHFCjLKCPfZjYmnYToi9WVxVLvoC5SbwTtHC",
  "key3": "61wHVDjV5SL62WDS7nqfWbBxMyAY9eRpBSPNea78cxsZcdAzCZT4wxfxHy823k1Rr6RyE3MuTXTM2atGbEBXQhj",
  "key4": "4EM4p7QewT3Nj2YHoejvK14YRTa1ma6T32g2e1vSTQ2FoAA6fzV6MVSoo8eG5LH2AtXZwKJAxbsjEK1n9svcQVVe",
  "key5": "2R8tVvajgvTf3gtwYw6qfomPeA7QjyCwyyMU16UTv4ZPvSqRKY6woodTnRGqrP845TUx4Tg5oVJQsWtjaDCuBpGD",
  "key6": "3TmVgLKgNdQ2n2VXyDJkRbj64PPW1oHQjiwyG6ZiURSjWyGY1E5k9hXkhJxxwPJon3XXLbULQopebALzJAhct9tS",
  "key7": "38QCdKegiPTqKLrPWZF26Q6m7Pmm65KYnGd9Dunp93aKamS8v1DSjN3Cs4AfJcWgRduE3zWf53hi6CGHwoqLDqZp",
  "key8": "3j5YnaYdZjF29Ki5hLrzAJQ3JSGKFBcuGma2cM7iMhJfPvDrkv7XA7Y1dzpa4EXSXKEwZQWF1s6b21w6pV1kptv5",
  "key9": "3PaT2nbJBVcqCjNrfp8B9Rjh7h2m4LmKo1H4ThLKSWukeXLikfssLeV7MzQru1Awm6VRB2sRwSEfLPpCDqQpyKUS",
  "key10": "38crknFc5AC2FZzz8XwJAMJ7PhxGuc9kpkdJTjqx1CVmQe2BU4XFyMJhryYHKUYY6kMcjWWhCoENC8gotiBVBXVL",
  "key11": "4ELy7Lri8F2kk4het1TGXL3cYMMGeaZgavPzYRiY7m2fAqVuRLvTXvgagNe1MQoBxRjedQEAxinXZeNLWfvHX3NW",
  "key12": "37cMdbkqiuiz5e8ZtHVRZL7VgsqSziEVjwubpqm8NEHYLXjNn3HyrhwHz4QCHo7wzgJRDPZZdJrdnouQsRZWLXKQ",
  "key13": "58T6UUERa8vaaYs8ENHHeHBVVX6dvqtnEyBaxHaYMXYNFFrwL3xMYLC9Xo8bJ7bnG6BeqjiJtnDtwTVdu9ZttJSh",
  "key14": "45w3nNC46h6CidBJGSob7erMoJpKHkA3vjgZhPyf53QbVvREbRwAXPFKnamxDKGHbwqPzJ2YfDY1dcvFwnTm4zZ",
  "key15": "4tZHgBE1jcMisTtaBwVNDrPZg7AaGt2pjaARnBSeTbqDp687Hn4zmHAB97838zK4b144Xg5LyW95v8H9ajo9TFjt",
  "key16": "46fo2nQ5YDy712jiNvePtodww3FzZqMPMfM7CY3QGuJqRpHRkNXu49EKaKhZtDmCckQ6Ycxzcve51MMQqrQfbk36",
  "key17": "Q3kkn364HjratyUyF6uPyL4x71Z8mFn4XdG2LQadGwCdktgHg1xV4uBd8VkA3bkr8pJ4L5SoJBxU7YKNhPFFuTa",
  "key18": "4vV4zpftoMfBCYqDK41QFjP9v9CKvbPFNwuDJPVgavtpwpKzNfZGfS1emzrYv474UVMe68dUDY7WWUZWpWFhtcDD",
  "key19": "2QVkdMrLZXqWzV48KJZHyuQkea16yWzQeJzw7SgXk1b2C1sbiKP6ofrYsL3ztyPxrXctuGvkyEbMsPxK6CdUfAaN",
  "key20": "EcmiQKrNoW4fPmabCDcrfU8GvXTBRqrSWyAa1vFPpRYBECpqngnChayJmNcuXGm3EfuFBihjw9uTwQF9zZ9VU4a",
  "key21": "2JmHkzcDUYuGk7Ca7kTuNpewfBPbj7cHmhG8jCYzsoWaVRLRt19DR6DGbcUvZDptEtXuyBWxk6dx8nwfZf4Fxo2f",
  "key22": "5cp5uaQjNTQsMWzj6wMigrwZYjUFdHJWypGw5vXaZm14Tg76uJKUAZSSrKQZ6HuHZQw7Br23YC4Qfz5J8opWh64Y",
  "key23": "BmPPwzgavLTa9dwvE3sgzVRhKsMmjeBjDwWTyqmgMrGLJ7et75dRyp9YCq64XYEWQWYaVi9GKEMxWYRMQeTUioH",
  "key24": "4iDtkZQp5ts7Rd4KyvG13QbBci9aPBZ4SBt1KPnJiiSfcS4q6C5k4K1q6hfJSB3GhpQx1FbjVxciwaQ9AsFsg598",
  "key25": "4LLMD17J2c8YYNHG9agZxyjjfwGpHe2r5xS7L8Tbqog97hCmyXF9V3Eb7j2GwxcRfVNARqtseBwSMd8T3qEpbCXU",
  "key26": "4iQNRNFKvVD5yUoGScFKc3PYZfVqc9SHsp3LY84xW9v98AuQz1PAtNZYzSX7ZFFwbAsFwQpryDxwu6ccm96hK37u",
  "key27": "wxn8MzaP89Xbrvzh1gz5oNonXQqswdhC2LiKSh5yb2C79AStgfwzrvCuCE9jaL9LQB1JvTF2WjuGBMPqyAahkYH",
  "key28": "2hFxoVucxkSaWEEkqX98d49QaZM4vucfnL9sBy7hvdqCaxPa3aNfaZEHNqi4EzpgpuusXeR4EAdKmHkqeXockQk4",
  "key29": "4mvVBLgn3sP8cF74vr3WmdYHF5wshGdDpyJPuYu1e6j4maTmXWqFD7xH9UmjSbvUQTGDPL4hHAaY3ofRzxRK4Qj7",
  "key30": "2cB4yjCWrGMNyUko6wrJrQJnFnzqZpzfr3H41ZeWWM2hGuGVb3ji1fYVeTp7gxfoFiM56JTTbJXgsdDbXFXq1nTx",
  "key31": "3EFgHrGwfXBhFsD1BeaAp3hCb7yTvru63dwh3tvKQY8XdE85wYERKBzGcWLRc1HpSALJ4DNgywawwhhvb9qhXBBi",
  "key32": "CCgq4BSZiVWVhS8gFNsp73MytCTwiQnK7cBY6r6rA84HXXTMPAKqsNk7rN1rrFgCmJUura3aQShsZdU4tLUsA5M",
  "key33": "2zzJ6GNvDr8YcxPm1V6cHc1gmD8LGJz8WZ7GrG1LhBntfw1YpCLzbdiN4SPovkQgH2TuZJ2wLtqN6hRjzPUWTP5J",
  "key34": "2zKaGAiTFjZich6Sj6382nutbLkpys78JNfVw7G2wXDGgLDKTUgX3DRHsEiaMmzUeW1V5UbSHKaUeM7HoCjfYDXP",
  "key35": "2NLYg6yt6nrCm5X7z8HHaWpHtr3EvBziuCXWyezh2Ss7XYS5eAMYJz12E5UCY1zv9jHAmGg6AEnW33EoF5zozeF6",
  "key36": "3JD7cGmRSVg3yAyLKnwRPf6YuTATtHTF1wsKuCKuc3Tq1YiVeJwfVkJJR5WjR35MuK3qGtpx6Gz8TE4qYMh2KUn7",
  "key37": "3iK5dwkwDrHDGoeLUsq6yHo9G9Gs3EPFohevmKNVyNzxMhPhHKztdtpG3bT2yxeVPbv9kqvyKGje9DCriegFkNu3",
  "key38": "5NZngddvfj9od4qeCVjMwwetv5yL4YtLcQTTx8Zadt55gNNdLP3PeZFxqeZb6xtc9hKnpNGY6QmmzGMwvPC5kqvi",
  "key39": "4BzY5Us6oGzATs3gvNYdZycvv2ugTu8mfCgK4G5YB3pnbFYYmvKgbJCXkDg4KXAYo8WHSnW69ZjabLi9FRwK2yhR",
  "key40": "ZzKNBrgUdc3CQLsYYhR4kBEEt2EMBiSL7jr8PjqCLY7LnGd2unuYHjDh96pcbJCj9vdFrgR3rR9Za86NjzxGv23",
  "key41": "53NaiwSguzduwcohRjdfWVo5cceZoX5iCVRGVTneaijc3t9oUPkBAsi2Z9rsmjJJyj2kAVJK72XGdsxjAgRjCWwp",
  "key42": "3mKjZig7wWG4BuNBzs7hGVCpJ4dubRTunckKDT6iY3xbP7SLaPr2phVqPQsiFukoJdyxVvvEFEFwxYBJJwemZomm",
  "key43": "3xPFqvSHRUApHnVeVvUgcqLa4ZyapjndzQTMXWwGyz51fg32Pd6gpSGZiBfhmobwCsmqZY7tXqA12SwrJ69M4pWD",
  "key44": "4mjPpjz1o16MasbiEsWcbGUJuPZtJx3hAYFyHacmHQqG8wQjngtKL1W6bfmNY6t9CJvYFEpPzmmTMCSHRbhwaxqq",
  "key45": "Xiok86Fq91py94p4wd957BEdkmmbU5X9VxTBQ5uut4n3tqxXtDpc2RCWy9SJDTaiGV3SYHjEBG4rwK5uFpvdooN"
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
