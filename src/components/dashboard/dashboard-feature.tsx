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
    "2Hvo8LipaVbgVTE5nFW7E2DUyGVSS3DAMyoSztSXV4M7uNd4J3x1ybL5qZEd1Y4XXthtwEq9JjyDoigdVZVmTzvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v13H2EcryJgXnJ7SjN5VJB6JKhgLsLyw7bd1CeGYQAKUZgVi1hjELJ6drGJN7TWKDqarDkbLPYmk2RVSCwW13rd",
  "key1": "4oKC79ocNubcfHnnqSt8eewjDv9AT3G9CjHoutnspyWtKYBHzpewG81xiDGpKzuwSsh6pgnAk8yc3SQT3LkWxDz6",
  "key2": "52V17FJFDpvWhvXtj9BN1yMmTQSYDFqqGndrBt87swArG4CEVYWNgGA7CA9mJyzc6QUxEWcZS7wmbKUxXUAucBpo",
  "key3": "4PVHd8kqjBAavWqPiPeC4mA36xCb3o3smKHbQT5j5jRN3ryMHjCoYfkQfhn5jUbxYNJYyiwo9sopqmB5DXd8T1AJ",
  "key4": "Gw7Sv6DhV62TzKevw6f4uBfQjTX6BfYo2DrjS3jwVb4fXdQpHW4Mp4JiJ54xRtQYjPuwvqVfbFwf4wLmyS6DRUu",
  "key5": "37Miorpfg2gYAXuGLZUfXkFht4xCrgjQL9yGALuknuKii1kSTHzWKjVp59mvUuSgUaQG85J48jFLErNq423TknrC",
  "key6": "2CaKpZQQ2APhD6m17UEeeahWkCPEa9vN5sjzG4iUpKVDKSy4BT6WP7rfZqigxwKhaG31KVRX49HEgAfCeAm74Gy9",
  "key7": "2AN64EzXF9mm4PCKYnjwq99JtdbZGnCXsmyK6GRYaMPviEUXKLCDtNDxiTPuqnPAF45zcih52komXSjFN9KpPzZM",
  "key8": "5cqfyo3t9bT3a1k8Vs9mR9ZCJNrRck2id1SwfVhJi7fn5aK6Gv8EbxWiW18GiexgiRhCvfaoFE5SbzX1c2dL7ahh",
  "key9": "4GaHJxfRsFMgc4YcVYghqYiUn4ycY9bWKxDfjHguxEJ6XksxWkhoxoTT7sXBn1oRze1XFv2MQST3iVkqWj8PF9zu",
  "key10": "3wkwMjJ1LBT6bUkeS9cnesADnRS886ppnLGjKuvVGFMgmYqV2NGZe9m9uCBBVTr4iLXeVuE75bnq1dyHMEmhypmB",
  "key11": "55zz69bZ14MbxR1XJNQpeQa3e1uHWeXsSqpnHzPUsf5jE6d5rpR4swoNKLC99skdw3jqYpxjJmzbhwY3DcAoYVUh",
  "key12": "2RBH6Bw4yT4mVybYUZ8XqBDtkqncDDT68TDxygstpDGs3QqP9BYXVY5w2eTZNUT9FWdszbeyk2ZQP7qpeuWA92tz",
  "key13": "3ToSADifwewYBgHnhZFhMFGW8QjXWrmNnxiQPrNCaGQhcRSHAPCYv69srMHEDF3y7gxZG5Y7gLS8SpV11g9px2QK",
  "key14": "KRhZeZCbNdciz4ZqzEabRmHJCNgCTfdUxLHAcCmFPJqFH4FDGrvgyf97htJvLznBombWUPKHhAryuZsk4NhVEec",
  "key15": "4yg34sbRFfwLrDz3AdQyW4DAYe8CWQHKGH9RmTwtEoFhNXtcLMC6dYoGtzCZcQP2pdHMWDJn3Uu8R5Euce19qmP1",
  "key16": "5UR4oWkZCmGDNGR3FQzrrHVxY5877eFsUs7Swr3ngVHs98by6sioA7H8wAHvm4PEE859Mh7875jXC3ic9R7mXvi9",
  "key17": "As6147GoeW3G6JXMq1L6YFYsj6YQqaVVCZ3mzrmzpKd7Gub3S3dawwArD8uvTLptx2PwP13s1JqP7X43XozmCMD",
  "key18": "5AzgEbN7qggm5Dk69be26HofPVdQn9hdXuw6ouGcfEF83zRqNG2MZXXbaLk2qXtgycJh8kABGxsiDDscfrnSY2wy",
  "key19": "3WqYUyZFJqqn1YmwSQyNjtWzzyCzig38oowFZSXp4PvFAQwWZ8NNDS7Th8NksqnZdKkvqrWNcsAXJboxGCcRBQw3",
  "key20": "3nXth3odFvKcWyzJoz9fEGiKY2uWfk2JLmdmdPH1keM5EZfXENXzthZbYaPkJtn5FUXP1Bz5mHwE9NgFsUPmoN1r",
  "key21": "3xfwCqr5aV5sL2b7C1PNtQXAeNPfUSuDZXx8MQR74Cgo2AZ3YRduroK8wBRLEfJ2g6pRaTrENHuHS883U5KcQHtS",
  "key22": "3nvx4RXJesUrWC92mUkGpiDcHxAs3GTwmNgNDPEwYB23yaJMmUr4yuvCU2ac93uBqqdapxU3ZZjfMmEN4xY4m7GQ",
  "key23": "45EjyWEZZi85fTp2AC3AcTyxLAUezkDusHnfKAqxvnNLqHpXSUU5NS8ZG7J8Si18mkWGXffyxAktPLujFUcuUx5x",
  "key24": "45iQgJS8SXJgsutw9BPG5LreQmQkUnCpkMJ8DmHQxqDpo3tFJrXgnP6J2NkdYjbkwYXSMoYcMUTAudvmHhixNL9u",
  "key25": "2FoEFxNunoZKdrwvsbWfamHxVNq5qxqS9syJxF2UzqCeQTT2YgnuiFXkPz7YwnMXFeRKLgYHgCF2uWebLSA3g2yF",
  "key26": "4jyu7PH1hFtUokdRkPZJmHtmN5MjiwGeUdSwRrb64vxuVLEnqQooDcQP5eyZpZqDZjvHNTxo6gLuXZ9sEFx8HW4k",
  "key27": "2TcasnyxFDczwEKHWSykmWv3gX2n21cPVKFq9bN8dPMMK9LdQH5aJ74BXxF5vgzmrPByMrJKDwMTP5x8hgNghuoG",
  "key28": "5Taim5NfDNv5cbMMFpJHScn7ojvLLNHWRTnYH5HRetc2nGVjLdhdJaHJVs4mvYVZqobs5kv7hU7MaznXRk8mszWW",
  "key29": "3TcAmkRV794A3iX52pNB5dXnP8QSsW9xDFvBgPU65hLZoWkK45rxYMd8ecsgCr6MWzxgdr3Zb1Rrk5bSJzjpUiLW",
  "key30": "wMd37m9cwhSWjNGFv7wAFSNQoQsrn7U7uCaKy9uFGGnGjNmYDPeqCsBYqu6Uy1JFrQZMWcBZYogGzK2KF3Lu2D2",
  "key31": "5aYcuFYtJnvKBDzUnCXTTozBF1jZMKD1rspKa3gBW2Aw31WmmfpJU4Th6hHefVx4gcA7gWbEqh6P8Q959f3YUDxC",
  "key32": "5mY6aWkfLymfttHgZgrE9TrLHiXSL7xgJ4otQv7eGtD7HBmLPw5Ngot6Dduz7bGF7w3YN7154oVu4MonCf1Hxv3h",
  "key33": "4bZNfHtBWN7dKnCrufiA2frfT5aaYKgZZ42wjwGNJhQMFLadNTZBY1KSgit7YEGFp7eUBntiKpyHSJh1K5UyuN7R",
  "key34": "671tPowLgvdae4w4Pace7c5E69RQ6jsuY7rXTFTAWx9BibPNEX8j7ycnJaAFFpo9KfpUPbg9j4k2py7MvpUotWvo",
  "key35": "2FvzTHgUBcwboNT2F8mpfJ5AoxhtueMEPrjVk8R2HqDfVN7zgBhPFoyoyX84Tz91dgAAQbLGhiXcDTebgC1nvyvc",
  "key36": "5ViJ8d7SC7sGqUZBwNwKJX1SvkQGNKm8qPtvhXyj4FP39ZwiZs3YjGgQwULTacPGCc899TQ9LVCQXDwTsKN7unD3",
  "key37": "WKwk5sj5udQAHvX26tzkPS3uCwrYBuxmjWz26yitRy6hFyYqPqUytxa8q1SV26PDmHjxpcSnXPEjqwkpHbi4DrB",
  "key38": "4mKow2yjG23orXtw5V4RqrULyN4jZC2RgrwZBmFMTznnVnj8CJApHgowKEWcegtUh3ZiUPpQqxc33SahP8QQ5dyQ",
  "key39": "5xoq18YS4MXFjcqxmtHzxTPLdTje7u1gkzqyEEh7S5zvCGUppnd4sZXa4wcPYnabih2PYFpGxCsHEj4bMG3adAzk",
  "key40": "48H8dPNCzn5aFmz6mHMB7vyfYuHWwMeP4S4kLodM4G6AxNDN9JPLsnGgjWYREVuNtFssYni8vQqvKS5mSrkEj7mG",
  "key41": "5Uh2y75pVHHFG9EM9CEG5jrb6PEsXzNzenHjkmcCEbu7LEL7GC2wDZM8okQhjUPtAMTj1ouW8KpLToMM5v9mVyCF",
  "key42": "3TXa3gT6payxXDWCY6ma9VRYUz8fWczWkcosHXjRZgX3CDUhvuEQYg7LcjE2DQ28KwFwpHGV1CNtm4TsA8F4P5r7"
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
