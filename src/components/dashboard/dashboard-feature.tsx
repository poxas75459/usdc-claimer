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
    "6dLCLpMHSnGde34HkCxnfUiMPG3x9vkALYbU4jfqhDTpqopsLGbKfQSH9r7VRRTsirvqGXJoD5qM2k55wgx3boe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27RXATHHTBgq1KFS1adXdS9UmNKdj7e8tqGa7qm4676EHohVMGQbsDKPtvPJ4ojPHZmViwLA2hALjLgZ4Ro9MKWB",
  "key1": "4sa6oDLVefQgaczkL5cnLreMEU9UH47VxyQDPy4ayhxeG9mJMFCNPJidgm7XqSzscqgfnwySY8sqej32UdWww4ir",
  "key2": "58SvRTmnarNPN41hfqhTvMHHULrcpPjoc8NKcfoAnDQcbFKs9UwniMBrM3adScaHYvCSzJ8iSNhsj4XFchh1Vvje",
  "key3": "4xp9zN2MkZ2Dq6y69a1j4KNHiEM8zyXQMRhBm566Txw3mzRk5gYDudw4iH1PwcszdAKEMespUvWBVdZVU4HTNbQo",
  "key4": "3M4FXJxGtFg7R8KjBgCHpeBAg1WTmtMk1z4D8cEXTCdVQi7VzmYZ2iKFcc91ZeNY3GmcBsiwX67sQAM41RPuskuv",
  "key5": "2jQHceDV5XRPMciFHLywQERYQpAn4BkEWoFtChD3PfL4Qa3bsmvHUUXToppGLF4sfTNXEaKDN7YzqiFgEbBC1E4X",
  "key6": "5xW5oBGGgXhqGjUsXkLJvk2oGH5N3DNk3gexjXEMqyvtapWmwAow9YR5QRU6Z6muXX7i4sHkvvfo3aXva2rrp9ZF",
  "key7": "37VXxYQwTyrkAdr4P6mTGEKzcrUEJwqMkq6zwh5ashKt6crEW2j5QAkQVw3HQLc1v8xJ2ywLPwVzVnbDsAmyzecT",
  "key8": "DprnigkUjMYQm7pHrw2cHq7LgedDT7jfXKod3Gq254dgekEngYXrEAwX5Stmn3j4dZWFPee49Dc5Hn7WhqgkeHj",
  "key9": "5eorD2PPKz5Usgh253WiQHAucsowDd4EMxhY69uEXnKwzihQMfWGLX1uBGoRAundfqitgyYtu5P8ViSwsyLra3cx",
  "key10": "52hyrSS3KbpjkwmVzpn2ZYFLovbp7qm8ffYUKShnAXqBxWwEwaF8bfWd2VSr5CTmX2aDdNhAdgzZbeuGYa3rZk2H",
  "key11": "3xuSm3m1VZKbmXB2kxfU3FjKp13nnzhBKeHU1F6sMRAb4GMjr6DqXF8vk9wfRx83m7cATU9wN33hYkfGP32uuyMt",
  "key12": "2TVakjXfh9KBECDtkkY8vzbRnCufza5BWSvUfUSJec3czL1tTVcbkT1eNqESMLSLjG3L8t7KWFiBwg7bCcgCEUGo",
  "key13": "2dBjhgMyxdUKybuztp92rdqiXVx5btx3ji2TGZo1SgEGbqU32bFJRMP2RSjBjVWHLLpBCeUsMomBxwKAFgAYHBSy",
  "key14": "3GyaEAxnLJsg1UVwLBDYzHB7kwVQFfb4w1VGGNNA8VosroVkDNJ7esLSqCBn6S2fM7KDVX6cjdLzh48qwg99i3wu",
  "key15": "4LV6tzHsvh9BmUL1jB6C7Rt58DKgqeFh9MnvCVcg8WZhL4znJg9QFba8CXishs24f2dZwdG1RRYHicxipZpykAE6",
  "key16": "kYYkP75QKYoGykzS1yzq5npGUc42jaa23BQuk5iKDqchHhAvssdMPx9RD81gNvGvVsM7ArXuUPPYWEtU7CQHgid",
  "key17": "3wvYnVa7mxx99CrtwHYQvjCHrMC9kLr5Z1QmRK8FPDX9aQW4UoxykvDniDvkDwzTxUC8srS1wS21WzLK7GV46bc5",
  "key18": "4J9K7htmTqSQNQwbXERhqTa8rJk785U5cE8NnwtmppwLgmuR6X4Xeeo6M3VzWcvho628HnLF1fpfXGwYvwKqe7bf",
  "key19": "5CRk3BaSNcybpz8CYXZkYBnbywPgWcs3JSsiwsothi2rjWZXAEAnaevSSZDDVhcPKswiKkMh8M39bWRW4N94mH6A",
  "key20": "3c51iuwKH4chycT6r89Waxf5ocJBcjFrxz5uXznwEnSskRRs6ZaQqM1UsHG2EsaUrfCHAoEbDepvHR8ayBHXPomy",
  "key21": "CkFP2SHXmJRsMreBLBF9pBkzbjJeUEasVUCYaxJWj8QMyKPLfdyMPyKn8hJh9NcHsS2uaRTP4Bp6jcpKQoHwX1z",
  "key22": "ReAjtLD7Dq77wCiNsKS46tbUykPmqPzbfSNkFpS9yv7w17D6WErpmWvMQ5FUggFsPJa8YfB2jgx9v6LoLKtUze1",
  "key23": "AentCrxRFtL4zcmPiTBPEKXh7DJ8qKthWTRYcSjEmnGRm9SiJ4xkx2SX8qfpRpMRcVJkGugZZLWUB8xX1K6BwkY",
  "key24": "2SG7ZUNqEmpUSt9REKXcqazgfBzarkxKKoQEGCzPtzv4fehEc1VjjXmzD8SfaZibBFn6Kt9ZFBciBH6KUtHVUXB9",
  "key25": "5E9ogJW5NqD8ZZ2ePpKHpEhtW5USRsXH9FyATc575a6dBbBpBpYQqezMBNvp3fS9VGkwNiBXz3ew17UGUjwV6F12",
  "key26": "4JfoNrm56mjgaHTpcA9NhPQGfjSBHXxGvRNcxFSjELSpEz7RB33nYpEG1ehiN5NLTNMfvckaxgtCAUsFospNUPHV",
  "key27": "5SHSgjArVZo4xEwpvJUb2j66un35KUGqRbUYJfRV36MRJDd8jo3kgWsQD7nFhbe1QPdrSMZKsa8RTSZ2auHC3bdd",
  "key28": "3pW59dAFJHRvBpvUf8dxtbvr9rQXBrb1HdqZMAKxxHm4BvZ6Bjd3PRTJY3hD5gSbqzimssvW1zH8n4BptQzoDewE",
  "key29": "JHyydPLZPDMN37oLbwz7PMmUM84Q4QGKerJMb3kKzWpbMNzLb57EYqp3eBEyW7c4xCmycHabktBhzSwnFUgzdHH",
  "key30": "37iZZVNFQQNvQ1R1Jsf9atNWRCoQtr4JxEkhMRfKux5JHrDZT82RvxH2XaaezdBYg2ywJHCA935QjpTJjbJZd7Nk",
  "key31": "5qnKcFRAY6CUzC6eajApVEL4snb2ebkLRFde5AbihtQhD7LY1BdcNxrfKMgWzLtGGa3exZHaRcdRDvna7b7pzrP9",
  "key32": "2zGyS5EgWQAERd2M16QUZdDFAJy1tc1rm5KBA3AuphcbmVtzWy15XMDJTqpiJi71iKMBUCw686yAZLVqVePZGKWY",
  "key33": "3oawiQvxsCVjourX86E5jq8bNBjzHr7hEBtuEEM4u1ZReF9VsfcSWsXBHqGk3bqQ8UyE5NiwfF42V2SZ11RvPouX",
  "key34": "1SbiFHqMR7gNmSrH4xYyD4PhTjFkBjaxiYouqKNfXKStX27qGqBjs63kbjt1xudnjB4CebmDF1dPUgshANFwFko",
  "key35": "2LJWjwS56BgWNTqPKgcVE3kKCMG7RQHWMHjZszPAYLa1WDDz842G9EwgvQqdeA2LmDgAjm62GtfUhG6m59dLFkhM",
  "key36": "3yJk821ofbXdqE4VWbeemE275F4cL2ss2avUnvSxbTPrSBKCyMjii6iRfozQ3ZznbJGv6Si8fqfTRPqLsNQDj51q",
  "key37": "4P6mJWbgDthDkbsQoEUJcjHiD3yM88AZBWwPbWpsecZuDy62VdzF9dDdhV4CdX1rw1Rf1qwpRw96f8XwnpCpobGG",
  "key38": "33wcpJybUwWFTJYTpz3ZXuMtbWyEKpo5KkQjvduHxjGpdZYNy91papk6WUgEvsjVHFP3ZqomQxtj2hLinq5Ryxfm",
  "key39": "3swx61a7rRdPi5mHRHTpj5WcnZT8n2rxH37RreTgrE2ymT8G18tUM9vSHAdjgof7aHMw2kcWeezHHYS29G6NFTJ7",
  "key40": "4mCZQzbEETMR3TfcsGuc3eeaRwMf8fm5b7EfzLAiqgTj5csmrDDSPMNFgAZYcuTehaRtnwRLUv3dAMTRagE1uuTw",
  "key41": "4sao2YkhLiNevKRjkGh1ERFXUw67RFNPCpib9Jc9nDb5B27zwM5Ayq4vBLt9HEJ5Gc8KKqgFLBhXx3b672gSYuGn"
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
