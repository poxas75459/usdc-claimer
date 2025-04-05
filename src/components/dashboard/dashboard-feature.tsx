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
    "4X3viSFobj1jtcqs71ieL1Uw4AtiT6DZNnM3bh9eyvUN8rKVjATn5bpYh97w5Q9fRKKSSee1S5i9Sm2q3PmZX5ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2SYNGTJwpFnwkLB4m69HHhaYX2us1eqbaU5whxBJNwDxXxXbXyjWXCHFuCXDiQFMHeQbprcaKUPQ2i9qNo2J4N",
  "key1": "SxdbkAsDGmLRrFJKwEVnzzWuis2chKvwWTSz6rMexqe7rM86tnC996fixz9GSSw2HSm7KjLAzhUDCBnF7xKJV4z",
  "key2": "59ExCsMwmJ7gvo67ZU8zCHKN5b5YrcCAnnATpBsaFLQM9t6h1yytTeLVJgB2U89PhFz47MhQbNBvo7rnDaSatuCM",
  "key3": "9gYiu4za1fVr4wkLJmsYUrPR7hsM3Xs2KvaPPm2NfC4aeULFfogNXAbPpVFwk2LWno9CaCCHF879tQFRdXmjawb",
  "key4": "3DjmnXFbk6dyqZDa4wfwCdn82f4cp9pFQq952CqeX9inpiJAZpJuUFfSXHWa2SwLThSjAJZ2cysLC7e9ySUEwpub",
  "key5": "4fgspSMfoKYrXu69kbYKGcL39z4abyGmBJ1r6VG2r9fzdweN2suudKxiKKGm3t5MX9uHTQ7Rynqy4fZ9d9CTndgt",
  "key6": "5sMKASHjyXjNdzq3zMnMiuvTVU369iy2EYNAzEwAtLtoYZzCg7J6VC8RqWM3ZtGPjDqJYSLEg7frmVP22CvLmZZc",
  "key7": "SHU6YKwXgs6LU6ru3RMb1kznvzv21PD9oLStn7suJrBmqacrj9giz4JeN8mvkvYYKyqageqi6XRGWMVhNqk7RXN",
  "key8": "4BQaDA45NmTPQuamo1xfB9n5fEp1KFSRVxjhd37e5ZGtmvf3XjfyqfDcCga8ZHeuG3nUHSzeVzWazh1z2socqjEj",
  "key9": "5cDTD4X38ZiiJW1VbRSCTkGpGVUNfnkDx5gHn8Y6gq9a9tYfNMktqruYYXHMLLGaVLEeduPAcCpu4kBc7f3aTYJ",
  "key10": "3kC6GR459pZqJSgYfpxz2zgkuHjS7ppAHwBBN7fwPFqp8qpzaAdqiMfA1cuW983ngGN9cduTnkT3jhjjGp4GWMAm",
  "key11": "28vUZjvyruZogih3bH5FTJH3ccua8r3zgGM34tEPGXfS1ocDFD6x4H8Jo7C5vD8DGp5Lc1e5rHXctwrV3Yx3HZrS",
  "key12": "4HbXXai11BJ3o692rdr2VQ74rbeqvqeCqAFFuvUvbJSArQaQCR4TkCyfkQVmjz7hHyfLjEW47iPTSkx1EJ68opjz",
  "key13": "5g7W6zCeGwf4s1c4tVrFNGWnXvyw3YuAW5d7MRuxV2wgsJhecXabb2rUbzkkUWZUjG8STbdnbG1SMymNfMUAN1TQ",
  "key14": "2zypBM4R8wnCxpWSD5Vk5PoLhiMbZgtg1MyctX69hq4X1kV4sehoTQqLzdCmqvRm3BhYe91U32EoKQirDuMzfuTz",
  "key15": "2eprDDkUJLZFtw1avj8enZAFd4roVj7DfZMY1u4mNiamdpgSJmxbZBtR8vNzVU7vL51JtUL4knyX11EPXS7rWVRz",
  "key16": "2MTrXvMcCYcKhAjMdaUYcvUaVg2W2ap8KWrUD3JMiB52Ao9tgMxuF57Xt6PuASzSMheK7webfdPRvmqZsnJy9ZR5",
  "key17": "2ZKCRHpZukqgc1MFPwjtmf3tXgyzN4aR3xYaMhSpxvgLNePmsYrWC6hMdMNVKYmse5U4VdwxESVThkPDQrVSHqr2",
  "key18": "GBs3i2R9TKUxp3scBZees9G9XxtvPZGQdvrEciQLwMxkS74D4jVb7yUgfNYLaYyBGHRwkgqcrYCiv8YdHp9jDTR",
  "key19": "e79DEETepsBtLMFo34Za7zP6QyZkdbMZumSQLu3ZLHYGQMuf82NEJHiEBmD97LwaNAmepAEaHUUzn1FwDdqhTeE",
  "key20": "3zLe2xg7PgWYrHFYtmDP2z8WcGSZ2bLSRPvPGLSxrfsLyKBPHU8tWyrpTxhstgpNS2za3Va5iM8sUK9cTuhVzSe8",
  "key21": "5UnKqYQdYE8norEkhbn1FYeiBZeKchrx6eSSyZqzRN64BmAPqyLvK6VnzR29o3bniKonoxc58Z822VvhGqeMdVZf",
  "key22": "3ny67vUM62zXUVhvuL94n3CbFA8Gbob9F4DE2KZgosx38uQoHpRC6JsiLHigBfVKwAnfiaio6nkkVzVhVScBDKpm",
  "key23": "4zFQnCuRMidvLngYQTBeZzbJjFZt99ZZk7GpsmnnQPNqAQnHrK7uSnf2JXuaPHE3ctFS6FHKzuJpvSmp2891QtPo",
  "key24": "3YCK3Wf1RDj16ChFuehW1dnKs3svRJNQYmV1ntMBnjWZoUaDgjBpx5pdYP2wnPrhVnoJUQwS3tTTbXApno9cxe6t",
  "key25": "5H1FNNcbLf43vLx6EQZDZyF5kUPBgUW5FNSFob2KAdueM7DbQvQEU2To2BFsKdGYuTmSodfNAPE8jNjNKzhKWipR",
  "key26": "5WRq4vghSNPXVNd5M7XVigY9KH8qu6W7DdZEXtfrP1ptTQDMQnLrivSoDKKFKXfbBfuVnUueTCpquFeH9Cnhndd",
  "key27": "5KDLf7DibiwfYfXZ5ANMLCUQbRcw5RkzM4LNL8v78a7FCV1om2kVJkafhkrF8ZxZJaLCsmqJUd6P1Fd4AJ46z1zm",
  "key28": "2znkbjruSa7gqJ45xkcBmn6wiRPMZdm76pxZC3hPCK9yhJP3r1WQx2Jh8YaixvzgjvKJAD2sfqC654LvsQwqyPtT",
  "key29": "3YiDhMQVVgv1MvmnqZswHUM5hrgjRXqddAZQZ1DMLB5FidjXSqihpVXfPEee5PaeNkdM22waK4wFUHhnFfSJZmyZ",
  "key30": "3z2qFwAJNPgVHVqRdP2CNpcteLQipggWq1z3rMasjxVQyLCUm7jdidYDxCLUzuDBYK8m466dMFfQn4Byp5dxYmvJ",
  "key31": "2P5WtAnbtbmt5c6QV5maMDRdHNXvP5fgujEYnsTy63WsmLqo4L1t37SHH1jwnGuu1EuQxYUUfaYu8151SP33GgFe",
  "key32": "4zJqJ3HGtssfKPMztesDWHgJTC9xAPC3HTkBhVz5pFuZ4dfZHFRd1mzw6KMD1Fhdk8m5d6NwRrCpBvv6HzYnh6x4",
  "key33": "3j5mJoZz98Rva4hinGTwuaW2YuhbiyFymobKMGhDzeUUS7YAvkZHxUCgLisSczbQG5in4MhNL2dyrqqhaZyxpbxK"
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
