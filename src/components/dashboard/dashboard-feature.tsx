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
    "3eXJeDZkmBF4RGrKbzmdQxHDvM4U453bmSa7QjJsowqjfUUuGvnZ4s1W85J17xViwZ7DNEa2k7hNywN4Mt5Wk6Z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32yxo32G1yHhrDJFTxFSedagjoHjJbf7GabBTVhnXstMJmqs5gePEmCmigdKftBjWhfT2X9GwB8dYvRhNSDBkhxg",
  "key1": "45e5fSQv5vMA6bXH4XmvMrJZpHZHRsSxTFNGrUmfHH2wWrE2UBk2TBmMJ8dkKnQEYCy8mTXxwLGQEGyC7rXhPkZs",
  "key2": "3auMk76vKFmp2Ud8HSp7eavR1SVjRPXod528i8n4ruwaGv5nbWYyr2WwASezBq7xnX4B3txGFHSXvYLFR7bsdL8P",
  "key3": "3BtucHmWSAHrcLwpbzo4BxYaJ5Ei4Gt6a8f7W4wVewjnCJe1wJ6HPAM5LShyPw4D5DXLrrqcmxptFMXvcsvGAJtQ",
  "key4": "4L7pvLFQd2ffZVUwEt1GV9CJUNGGZ4GVB5mdU39ML6uqiL8MHHv9y9CNJ6RfqvACj8KP9NnDtaHbS9CQrbAwaDWG",
  "key5": "54mfZ4aXkWFfSBmvqtGZyjom1JjZZYvJTWeKpnaNomzRCwufRPyKbzC8suVfkjjQs6sMi1N6Pi7gWUK2jZ3nU2ho",
  "key6": "2yyuuTpeX8CNbGBryftcCj5WihZgjaNGpJK63DNZjvF5mod77T2bHTWFuQLFekaoVTwC5UdZJjJc9xbt53kFQqZz",
  "key7": "2YKf7DGUjk7qdLvCFenfgjg784mgSpee342eHyy5HneTFF7z1ZpZ8cdiF1RHxFWKhgsirdH2F6tXBCvtFncs9ny1",
  "key8": "67VZ4twcCS4nvPcJY2KaDtzLkcbrCfCYVsqoukPp2JJVBaX8nyL3nPCw4DjFe54qHt3pEKUBRs4CnoN8Ed8TSqfL",
  "key9": "5H7x4q5AcM9aCNVLY7u1TniKAbBw42bEW9g6H1vLWAC5FYetgi1gBpjCHJ7JfE3414i4X1XfTE1hKKj4yMkCZVPQ",
  "key10": "4h5KLqB2TtTm2pFTC2MDfyp6YMaecUgvT1XhY8sSPMgW4XtWXEGpWLtXWWWLhE8FckZy7gSU9gexM9R94Zk9Npma",
  "key11": "3pjXoUCD8D1hwx7S5NqWu4ycyx4X1kAcxFZrKqfsTsxetER3GFryLjKddn3hDNFWfmmabrxswgMgZ8PS8UZf8z8s",
  "key12": "38PV39SFkxyn3ydhv7Xo5C5kAX5oo99DxEd72QcZ51Jj8ypB1bJLuAoWHDCPw4Er25Dds3q794mcDuehNUmssMUD",
  "key13": "47fdTGZHqWReLq9QMsYrhVK6DLki2uyWXnoPjzC2sPuMjAZG4NJ3vjYLPLLtM5oeeUbTMV5P4FczL788UzSYfvaE",
  "key14": "3M45bJVd9Buunz9RYsahG7b2Wsg5GV6SLYHJfdRkaCkVyU6hGFvH9TwpmXrFSCufss86DBzQmkx96VkLHxV3v8qT",
  "key15": "37YvBmd4TC6n2Hm3bY5wR45dFeFb7RHXLZhpLkgghDw8o5zTknHhRU84UVdFg4ddnq8disfvh4WfmQZr6EGcR7N9",
  "key16": "3SLa85i2KgJwaKC4pPwH56sXX6ZanZLETBqRNG7PYrsJ8N9D2xdS6mnSdmLrsD3528xPWkkMHKQTwVzKuo8Hk9La",
  "key17": "xHrnJg8XeBSmvNbKNdAYse9K2NT2MrnNPuRtjKoV2wruXBQDyihX5y8Hoau7XT5eQr2EwLdFMRUVowPAygTv7RG",
  "key18": "JEvwoacy4CguuBMiAPj1wzg1JN8Mk7Qn7WUcvYzN4MG6JBYnvCasoziGNaEyZWL57bkaAWAAvcexP96RPnCfL4B",
  "key19": "3vC9qh53jCH8eMNBDgXWxwoLPHDgKzU3rshYb3J4LMkAXeMEFmAf3JeM2TvdcV94VUP4oG4s1FdNYuaSBt14q8AD",
  "key20": "5oPh6hLkte5K7nt4saJYzsT7e3KQqKdgQ7KDNy9ZQCgZgC36nrycpZbzVxygEnAeUkyPHCS2FgytYXHELAFWAt3U",
  "key21": "3W11ejuZo989Jf9roVCiB3mTH1CPuukkzJoZSar4Avv4Jqz2u7DrRMbyfLRboms3FEQcTvgJiAoVSZC7PxcV8tpj",
  "key22": "3KGYssUwPDwYVAeFNYeBGFeBbJbLGargXrNpYRUTUrvvNtNL7aaycCPBE7aG54efQgYQNJ4TKr3HhJuEksveAcm7",
  "key23": "Mkocy5ekgGdAZcY5w8BorjE8xeWufKcqUwixnEAwBh8BTzyo3mBtcS55BU2pE93Ah5EWVxL8v1nvu1ZwbeBNFGX",
  "key24": "3q1ScrVnTtUn6iLMeMsmfNEmDTttDWAzbRFYbyzTConGt1W7AG1xjbZFZjxR1xHKLd4omcQ6iST8tGqsB3nTgB7K",
  "key25": "7wioyjVdeojiD37nqvQFBMKXWUWamCgcAdmLePoF5917H4kgDJN7C3LADAsiGEDpHGfhQRmcGjPRorKEAsabEuD",
  "key26": "3Ma81uLD4xD2qhznTVmD9oxUnyECyhRRdPmREfGZMtYgbWvMSTPYCY9TyZj14K8bgLj1mgfKgXTWoV195Zpmn9RZ",
  "key27": "429kaPHFtTucyLej7Gh7NbvBviQ5kmD7hDeqPyRJ3T9BgNMZoDEkt66zAzwMQ9kR8nE9mVFrydXtpjZ5QtEvKSUe",
  "key28": "2Ajxo5oiTPvAgKH3wGrGbsN7jBeRQdRK2H5i212NGwaFtX6eTqHh2L3QVLhHcC7Z9cbjvndhsP1tdou1poakJffg",
  "key29": "4WGYr8vA1Ce4g8FzGafHLAVga3qsxk5Xrzqm5Vjp1B3GhEj5bRfVz2gvbGG8UaJDmKL9QztKWo51Rf6E8Tf9B4xj",
  "key30": "3TAWopfBFsSapRcC8twmczYdRMjMm7ViiGaF7vBg7YpXJ8qerNDzb9ngzAuMxakMtQsYHLfZA2otNkRJjJoKSNwM",
  "key31": "4LT8CRj6ryu6cVgLBt5Z88hstU251YtPL7KDFkffGNnSRdyJDdP4n2M4VCwxswAwvZmxod8MGsgNmfjpDTLSBehu",
  "key32": "2g8582mGZaTYXraDRcc49ffv8munUhZhLcx9fPDvmJFoEFuhbjw3TxqLJVC7W8EXeN2j1zQii4EhbJ2GTLdXbymQ",
  "key33": "5DbSGdma9fYb8734AnhNt33F3gVsBhWbcVd9di9xDQSjoLthTJXDJ8QM9togZhygUn3znMVBBWY3mpebdk4iAmoa",
  "key34": "2FwyCBiorkXi5BZVhaxm32RdnagyLL6UZ8y3SZDvT1Mm6djwV2w6XZEmHC6pdNWooQ24bdQyBqoXJSpETHmgo4bj",
  "key35": "2FiQjAapRNBLWGeZGQAF6n5DmipntAiu7AQmudPLvyHwQhw636r5M7qH23oiPhC1jRRevi4BEYkG6C4GN5xrziDL",
  "key36": "23ZXEYswMxJm6nZcPZaZEPRYJBQMaiSuHL9UzB9x8njERWHN95HBrsWXNHEnJUG6WykZi1ynSHNjQZoDkdSMUj5Q",
  "key37": "3RnCySw76wCe3AWRyuwU4mM8Vb3q6d1oh5RYLDz4F21bLQkeqTPdy6VXoPB5rFZVvs3ThLmZjxr1Xw3jMqDRPALZ",
  "key38": "2QiAi9kho4okk7pCDx5HyxCHdYj3899QXSfT63PH8wJAYCzTmirXTSZmHtzRCJqEpZGRyt2oBWDvCikfHyGWPhc7"
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
