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
    "4hYC54LPdbSbxBoMhYEPfkVDmU5xzsabHBrrv58Wgq1vc2xiN5E9QvyKBukjiMshGY47Cpdjr8m91j5ooU7Zo6Tw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wpfny6a4fbSEYw5FspwAKSAsaPDkPR7Q35P54zLE4WfURohnc7xbm75x9P8HyfT5yWVS1pepYoxhzefr3gTxJLU",
  "key1": "czqDrxnhheoVeNNYHfwLx46pQYnovARMh8QuYM74riDEv4QcReJsAU243dNTCvNybyYXUKJdwt5QGz4mJSQCscS",
  "key2": "2LkuekFvtQVDWpMaEad6hKPpfmLincyy4ZdYoYvNLeey2vDpFgWbSHfjTfpN8yafskZsN12sMAVMk8E1pyEZBjDy",
  "key3": "2ubAwqEptMu6u6gn36u7ZNHNtTJGX8VU5rGHWZzt4AV5VaNRHkZ4xfDA6WqgfkWYeV33oaVJK4dpG32SWMdTd2rG",
  "key4": "JTv1SVtmbZ3XymNTVPjXW1gb8npQL7q6jyzCxL1hzotMoZujfbNqdTqigcWwhRXPPH2SLhFn5yrrPPhKFZ5aF8Y",
  "key5": "4E5y9dzQ1hhDEN8ayRvNabirxCJe2Ut2YTdXdqqCA7A1HRZmaW4xqwq2TUyJKrpFuyKQMRThUahkoB3gRrLgAuiq",
  "key6": "nEaLmWPb2sLRkc4U9LdzQKDQYBpm82LRXEG4B1TY81QAqBE1sJWLxKZa59iF8TenxiFW3tfXieLmxKdYUuCXpYZ",
  "key7": "4pLNjrwCjd8BEhS5B4HJ4hBrxGNUa6qpmgNDmW2942jWwXNaxun6tsgLjBDLVgeywghYrfwwms3EAZVuKUcenDi1",
  "key8": "3ajJPF3xeqM7P1ZiC5AVYniuWwNTTcb77pH43EmkuBVeFP82SwcKigsDqh17a7R8hm7br6Zx9gh9VqxRikKtXasv",
  "key9": "5xuC9iZBzao917u9nDrpAv8k3mchtL1rb1Du9qx1r6ZgE9GKrmwaY4GCrBcFWkmsSCuhak1SkTyfsuudWSwhgzjn",
  "key10": "Rm7M8T8QMpBozY7cd1fuT6RxuWzson6n7w1X1Se23aCD6i9Ee9SQphcfPuQLRDSuUkEdMXvn7F7FMdqcgGuGVfn",
  "key11": "4m7bBZg7kaF1bxi45fEhoWdePWWgAgtz2x427En6TtHgc9jUhrt4uxX8sqXgkihqLFZCFeWD6gMXHxwwuR3a3ykG",
  "key12": "aEFcbQG8PwgPVzJRCEgpbryBXwdtXQnCtLzKqNcDvNMvMk8BJubARvVH5e2a5WbyQ71g64s4kuDeWDNydLnz2Ya",
  "key13": "15yiyihYzuK43YoKg6FPGT53jAFUWzrQTuvXhyRU8xkq1VP9BfCWmqwQdeb1GugzDwRTm7DZtyenVpndFeDjPyE",
  "key14": "5G3hXBcpQT8kYuW7THUN3kppRh2ZvKCdpHnH6sCpQnxWPziUx9GtXjGHQMVr685VQfm7T8bSsRSPy4bS1mXNwGKh",
  "key15": "3pts6urhPVcLBe64h8CtRkUi7SbeudDv56CiTj3HxoxuPU25nSfjuUoPVMEE3xBfrnodpABpW8adjFrQ7dMbvAMv",
  "key16": "L8HbDuoAFkbTbLMHBx1m4f38pjKV1b8mShXZ3VEapTCMJe2aDa9nAiNNx4i8SojZRZ4GHbZK3k4xBDiRLxNr1PV",
  "key17": "4jHCn4ucm2wTKHS1sKPNcePiqvDPEbBJXrAo84zdepEqnVVucsmcFczMK4B296ZXgMJBF6etGs3qYNrQhVGr1rk3",
  "key18": "3t5sZ6z9DC6es5pvz8iMLJ2EduwJ1rZXCDE7a8pa5j6WTPCboyZeYbFGY8JaQD8mjAmPNUd3jcE977vZ8FmbcHLN",
  "key19": "4uwAbKbTYmf9anb3aoTQwLs53NkzgBZ6trKaWDS84Qkh9dFqkd9neHpkhVTfmfogvqaf27FeCTSpBN7Szi4hvKV8",
  "key20": "3PdPxSfLSJW7GxAgTgdS4qyvNGNkGg8MA6keiwpTbBpGiz68dXc6rmZoEVW1oGDFbhPc4GFnTtKNj8GEg2ix2Uir",
  "key21": "4UJNDR7SnD7326QHToAoViiPtzznGQC9J1awNrkPCrU2dxUEPm6ozFyLfirVDv2YWHBXT5AZ7ijyy6JSJNdwfQte",
  "key22": "4TZKHsPPLHT3X1uF85MeTZXydJ5Vjq2QMjuwdm7cb7GiCbufoSq2ca2fN6MqziQoimQ3tJuThTLhJ1jtsmESEcMt",
  "key23": "4JbAdV3g6i35f9sTnBhnmqobC9NssL9cgitMCwc3xG5WEaWadgaXWYfqGherrojR7wQ79K9ZUg3uMAK3cvvReE3T",
  "key24": "4sVakNYmqoL6ifUi8E7gu5PCvZTcBKrXDu8nPcNmPXgyrgFWgu9YYfnuMUKLFc2Hi1EWnfxAWVQzS2ty457CqGbp",
  "key25": "4JwdV2YMaf1rTD2JAb5GVD7KwXShUcCdGr35VmHJEdcNM2PZfKbBeXpNeDr4pyZcLkhiU7aeeFzCTrQNJjkQ4yFZ",
  "key26": "5MuAi9DrZ4g9c4FmtMxCAEjqAsD4na6Z18avGGME18XaD43q4AJMJgiwf5k3dqXtVd7CojnZ1bRg2QjJ1tUMgUkj",
  "key27": "3RgmppNRzdM5avkkBioX6VZXhpC7oHn6o4iYdZ5TigYJCtoSaHWmb69tvizDieQZVfNxqPUfRW17qctKCLyUc23n",
  "key28": "3ddozsbRPPW4J41vwJaQKRv4p4yWUDnCMGsB86A84KFA4BbQQRNvJnRKpGnKbq6VNH2EuqJfNCSNCGN7cbyrig8s",
  "key29": "hKBR1mNmF8Hah7nmaDFGdoH3Y74nCDdHmi1TkapqKXxQY3r4RBt6dSJxPRVqWb2hBb4wQf83vvQSGShjW9yjW5L",
  "key30": "3B9MiitvkJcxHzsKG2D9NY2AYZ26ES4dofGxpkfMLS1ejBVUqvJjWL7cn8y3XHMTcoHVHDvE7y7UM8VCg18Rj8rm",
  "key31": "2vLDXdqMUpunM5NRBhdoFRrqtwGtmhfFbun8gwxp1J4CGQQ6XJ6BjeWKFQthJeC4VYxpAKNcGmAvC1rvcm7L2VjD",
  "key32": "3StBpdvHa8hJWzMhskPv4JdKy7bM2XFuWAqf9e32Mu14r1HRLPykbNfhZjTs1VQeQ5bayTKpLEJpLGvQpDUXfnPt",
  "key33": "38eK8JcsNTNzGekk73iSL9wSdb8Y9BWLhNbKvY4WNm8ENRpcD2T6B21TRo79d6ouAGSPp23r7csNdBzDYFGeVP6k",
  "key34": "4T7gGLBJTsEbqAkeZUqAXUT285YsMYRPfFHkk2s2SMfLGdsz826vE1T7PdHPzSJNEp6vcX7tHpzqsKMHqDnmb4t7",
  "key35": "3ETHFyNb9FZWUW4jiiP5XRZEoLadgNjKcSi65j5oQZV89jANJuE4Bqdswf6FuPSLEuQvQYDasYJoZWnzaq4mQorx",
  "key36": "55GVXo76MPw4DBhLVfgmFjkQ4NQP79yzEor354qo2VDwg3iL1QjjLAGr6vnSxk2euUWBK3GwWUzv8LAF1XWJmzG8",
  "key37": "5NaUU5T4RSmu4UgbenDr2Z9QfHoif8sJCDwUPhFiUJGpzcfRD7J9EH8T9pnSqHM6FquoXHJ1E5jgVN33EYF4unBt",
  "key38": "4vZBAfqRt1bqjJ1fXS6KUzyeqrfsanMKsWSTsU1fnqHSxAKY8JV2RXskqHDaqSL8QVXJy9Soj75P3ceyRQ4y3Aaa",
  "key39": "37DbMP3JKNvzEqkbLq69Txt8GU4R7RdyVkFGEUsZs63XBAcdW5HfdUw1ereztqspvLts9Xi3TKfLF141pAn13a2Y",
  "key40": "Ma31SaWjTPDGjHGCprynN3z7jjzwGmMrLZwvbQ9zkCZ5YYgt1ZGUJSsCXYLVQQKcrrWvAbVpRVQALQSzMRB9cz6"
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
