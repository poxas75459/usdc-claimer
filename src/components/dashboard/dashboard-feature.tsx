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
    "4ppgVvYc24QmBBtPS6zct3mVPyikv5fDsCsQ3NYSirgdT64ZJpGdHHNZTB5a9MRuAKE5k2hJCHN566YxH3E6Cksz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42K68RZyxzfHMg51waawPC4cZRcm8YYKzKEcCeqtGSrm5guKmfE2mXHv94W9iQ64aKFcYKBeiCJwi8W74ZJQBjJC",
  "key1": "2EDrLmEpqz597K4HziwY6J5AMREYvtBjGoL8bXRQsyn7H6mc9j2QQ92Jsx7S26dXeZV2iGLFd4bcz2KxaRefcugg",
  "key2": "5h4R1xa4hucCeB6YFDVPdHTF553vgaw2aqq47Tk3RGwgvGxFQwNAAE6PET7Qpw1YF93GjJGSwT34Z8311UT1NqEQ",
  "key3": "2mkFfjH5nkGxQqMnPV1hGkyZaDaTB8UHLpzifjSv9ymgn1E5yP1yWxrSECuctFmMASoNSR95LXNNmGdAaGZTfwwT",
  "key4": "3zfBiNPv1UXH578U1j2EZE7EJjShom17qFP574uXoP4wF8rc7pGjBdcUq1WQiBMRUPS7bZeV6MJ8bGP4auXTTXfB",
  "key5": "SPAptyvkDef9nRAPKVEK7A9TAf6wwdcDThPogBBZ6jm8f5RUD5w4LcFKexPFQ82bv3x53zXrEF4eNEkc8GLNeNG",
  "key6": "3LRcBR9FpTvRFvTLJkHTpKZANcdEafTmjjqTDUL9B45SJenYyWHQ8XLVUEVsx45sMBYGnxByntK93oxwaYYcRSbV",
  "key7": "571Laoy41jfir9ptxhD1svh2Fv4qdRhj2z47GcHusxAkkYoTVD8nnoBFLUuVQ9padRJpcDPsQauPm3cDa86nR8sa",
  "key8": "4e165HRfh8xsMy7etAuYKS6nbis2ypmD1RSt86A5sVqVJANxKCmaxRUdcMouoTAgQBWv6kMMkw65TgR5QCV3kUs6",
  "key9": "Qh45HVs7S9ZawmmiCXRTbjj8iFhtUCekFtpfBhgRvHt4pWtG3EQNUk7VRfNvTXWvfwFUVJibZrNYdDnyyaC4yUj",
  "key10": "121wiXnHY85x5iYRkx68DnAPrjZUg5gWtvVtqDzXqv7pk1CDZq5FdN9HvEUHGu68cJK92cjF7BurYRjBkZG878A2",
  "key11": "2f2EGjF3im6RVwBu7vLHBJLji3kHSMuL326ntHZpfyFnPkVr8LryJ98cW2kNxj7o5dKKsdW7V9b7apVf9JGr54cw",
  "key12": "65PsEwA8hkohWrQqaniHhiPzzGnx5LaYXwLqYYNGBWnFUXqz7KYcjrL4jCQETsBQdcb6m4W1uXdgd96PFLUsKDL1",
  "key13": "3yFPFZQbtJ6pDrGZEUngd9R1bDqe4DsG6UgsAXDGDsck4fKTSXg32AvA1aCNKgJetY6oCYYjihBCKz6U2ZZAsTz7",
  "key14": "Shgx5H42GQ7BcNjCKQLgwvkTiii8ER2dmZ23du7YSve9TsdkCfLpQhy9rZoudP9GssGcFiVkLmBzVpajGhhVa2J",
  "key15": "2o4fsqkGFkStM5CCsbvoGvhzcNU3JdXbaNRdS9uCZLAvyKcBmJxctjGUjQnyMjLS28Sahrou9uhN2NR9RNjrCUE",
  "key16": "2AVgFc9t118tAhurhKKszrgu2pk9qEqLa9jbZ82SeS5V5CD3wyAb8w8KtkhWBxqPJDmMTtbr6n4zHwrWHX2amCce",
  "key17": "64BqyRWqQ4BTqSeUEv9z9CyDeLWF5v7ZwJoiuGcZpqZ8D5PDvPS4J3mbCTqKnUFFft7MRpQB5CtsdXN15tdbFG9R",
  "key18": "5ZHjvEvQjsAH78ee9qdaoD4LfUScAqpVgsic6eUAf1Ta8EAGzkP8Db2nLqgQBDag6dujWKAshEQ2wVzA9LBAfjDt",
  "key19": "3L54T4MCGE5r2NPsFJPfwbEoZuksoQz34Mgoa4Z8iqaSesDJ9KZb5zwQbBa1ns4X3fbPPRhY6SgxoM69oVt4xZ7f",
  "key20": "ScoBgp5vU3GjJQvxWHCSV1mTrJVWiCr7e5BQXauaEe3tF2Gxdscvqb4qKVorgaoNgn9jnHSbks92Gpx6VeV2TWi",
  "key21": "4UL4KYsq7APSeCoinmGkXFCsYc86opDfPAPsbWseJWdg21FG2rsRxJhmqH7LtaG24YrRoaKRcqkw4TSe9KfqwsSv",
  "key22": "2JQZYBTNWT8H57XdVqkqZ3QL7T2P8f1SwwPS5taCTwU9QERYHe15kad6bFUQhrLbFCQCVGqFnh7PHk1ztHUp4Tt4",
  "key23": "3HQ8uTeNScShiJsF3m8z1sVpwk7jjpsqmPNyM1gWaQJ7BthNG89W4j8gX2r9VcqxQT2xV3fmJcoWBgL1fvtfw3nE",
  "key24": "bgNp6uo64xNvaZ1YhAaqZfrgRokTszf6ZC2KkJwBYwgMGzcuL2KkbZdouVb6v1ePQL14zecTd62Jzi4gJGGScsK",
  "key25": "DbtnWr4WKiZkfunwTVrph8XfKMZ6RJEftF86xw6vrXnenzAZ5QifjKuq4wjpycHwhfs1r6msQ15t9mEu5TwYFa8",
  "key26": "5g7B6itPsq4m6g5ZJGC7kaumyY9pp1CqvdKCB5yejnzb7mGEKGLZFtPvBm8JWk1R8GVFzHxYJUBWcugGRmE1qGqa",
  "key27": "5vtgoSwiPHHzg7SumGtcN3kBmavuZVqSVReQPC3t5ZdYSjb7wyH9BWTeoxyg98YnMTPeTEzSUXxEEak4rUZdDQnc",
  "key28": "2xV6DV4DsCWdcoCCxT4AbTSvQraiduW5pp1m6r2ANAx3rYvVoY2BtjSSGSBfTKRxuM68kNYgovVHJopLYs1MdA8t",
  "key29": "5kbARvc9zcBLaENRVnu9Fn6eSFCVBvqUQEqdrcDzxVimLmjgHktSThrSMipitRqCs3CgLfqJXySC525q9jQ1CQ4s",
  "key30": "36E4PQQ4R42xt8b4q5n7SrQ46MqN9vdawHEx6wcRxXUe5R3DDXsx7BpteAX7PN5rvEunhSEGXv2WbWWio5gTR88J",
  "key31": "5b4zGTDXp9x9ZA9CQovgLCLcBbCYdrD6B9DHfUCvYkcUqgEDot9rJyzwN3XPeomviw9NmxAVPkX9daoj3crXhy6d",
  "key32": "4K8TepnZFTr9R1X43KTGCADUR6xJ6oQyAdYXC4ZpmcwHD6TgJdK8vYYj4mKtx98WozF2wkAgzsdxEJDE7yaC5DKS",
  "key33": "3M3ynU61TnupTgTMNtkUJyYZ6nD3LwzJkpndmqSgHG8Qn5NRErqfYtnedYySYvWQf32zUK9hTe7be7iSBHkPrzaf",
  "key34": "5FeYBhnbBEVizMdDaWiVWutDdEDmQGwFEkhUMiu45K9atT8yogQPAUbCDr2JRDCoPnRwTP4b5mvYYB4d8nztEGLZ",
  "key35": "sHEpfM6oT6rZUxBXypq84T6UqvwUbLu66UdFoQBpAzV5oD5FqykkidzwqLPZwhYMYmDjAhjQ71DTfidxBWYcYPV",
  "key36": "55utBPPx5ZpihjqhkhCgDYMEUBYVQFYL5HhdGhTDp9ScYfNsZNe6MSjrSUaVTJ7Wr2iFeDGn6yaeLLbpho1RbVyS",
  "key37": "3KZDBTSfMMARBHqhWkHVuMiqSkTu8VxyhZY1owkLtUDgRMcGyYFB4LV72PSRtZcddy6dmTZaqz8o3xEXyeLQLpjH",
  "key38": "5xGxztyNgmzkPjTzVgoDNVBM5abStyxhmL7e1mM9pGG1V364jtqFmyRg9WwthGvFdoJpnHPxS6cmwZpobxcC6TrY",
  "key39": "5DN9yo6vCFmeQiYSfmLXjHqHpcQJ9invNAzpJPFfTwhz9Y3dgfcC5GyvRXWXMz181jJUummKZsZtEsaw3jCrZ9m5",
  "key40": "4Hzru9fLBjdNazx9u6ES1XjrDeE9EspvKcBc7vJjXssMWNrKGZWUQHEKJDCcJFRXfiVfyA4m3Mppx7woYzydckhx",
  "key41": "5Jpf39eD5NabTffZzJZspJ6pQaoMJBMRvHW6apdZH2SUsiuSJQ1H8F7SKeyNWjDWu34cgrVqeTp3Whfv59znCLm1"
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
