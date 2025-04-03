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
    "4vK3XQVPVMQqyYXjgD367NAmLQ8NfX1qNED1S7DkteyUfnrD1F39JcEGBeEemcT8Nuw7Jhrm2nGvVag5XVhtAHge"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUFbG9z9frLYsGV1EugZrfJu2w8KxPx3c4T389ouqrWUvK85r4bgykaGbEz2da4kWdJZQqezwJ5YhzPmfPU1kpt",
  "key1": "5qSQWDzmYN3KCk9sjjSWALCsPvfUeVxrZiSD86avoPbGbskw4yxdeVq7SxapLwbc1NgKSHMt1JGVtnH5PGeEh1gX",
  "key2": "2wQfjPtxFckaNyqRShfA53EcRqe4Cx6uDzYgpxSnJutJ772ego2xqCKTyM791epVh3LNsR5NgxWU2yshdy6fjQYg",
  "key3": "2TthazXci2dxme4F9B41XQ1KjtgQvRsuJKGxmzUtjWs9hen5YvSF4HNev3JrrWVrWzYCYHGmMf7eY1zE94uZTtL7",
  "key4": "4bygTYZetXUPQBFJBXkkkBUkZ1LPreBsDWvondUhVEd3KAE4YXtWsjm1YsfGTY8NdbS2ejGrLUdG8YiFE6NVjSht",
  "key5": "378auLuS9Z9Su4tZ63fdn4XzFtZtYGbqJ36CV7sv1n3UQSPE2qiJBX5tHHKRssDms6u9hME6VTLTi6hiZBPxTMBW",
  "key6": "4WktE35UnL3JpSkB2dPVUKwUotsUbQGpqbNqwS5WCGGob8TJmbVxbreQE3JxVEjyC852S9fupPCeV6EtJwaE3p4r",
  "key7": "24s1o7eJDtb7SupFAL6oU7pyF4frkybU5d2iWBn3ottCr7fn3a8XZxA72gejPoaRvZUUNhCWpMzexHkMR2JtvCSj",
  "key8": "5GsCSpdo1SEp7s9Wn8WCHRj73t6v6rjEU7cUPe5c8ye6AXijqaer7kd8FNVC2Sj1sidMgRBVQvgaTq7H9SfgBDaC",
  "key9": "5Qjx14GCq8rCsQNswAi9uzKKz6tbdQuo8XyTCsaJigbXCCLUu5rHDFiSQuN8c3XmHL4cPgtFvo6KvGa1FbeeLCQP",
  "key10": "5otcNrdXnAjhRz3wmZFXKfTgKpFRKphJjHEMZNukBGa3BuVfWW3XXaixMjNMH82Z7GSVCDjbEhHixCNyDehuiifZ",
  "key11": "5rfB2kDawdH3JavNMbjY8hgnvnLRyT56MnTZchY24mpep9nXAPXivTsE5QptU6H17oPBEHKPCecXVHcbvFjwdzRY",
  "key12": "3b9hCNHASFmVY2ckuQSKLMRt9BYzB9bAaiWL7iq6CJQ6wq3Pp2rGjjLmNdwykLz8YKMUbHGKGRkqBhWcwAbam8a5",
  "key13": "3iFMLQjXb9aCwzDd4zzHtCFE259LrwDd4TvgvuZHDzTb7c3PW3jd2h21bEKwLspuqLsb8keorxaw5dQPfrAMUBJJ",
  "key14": "56QWboALxttukwX98kW2YYrrFCikCt6gaiwwHxapfwdwCpcbNj1nxxBHfKP89puquhenTDsWtQ9GpJqGHvLXQ1UE",
  "key15": "J5z3PuDqWH9YePuKJPTBzMnL3RvyJuMPBWtU4bY7PX8evqMA1jJmnzRBB5q4NGnJe6jLJL5cNMixiNAt9n1fTBn",
  "key16": "3n5gLQ9DCHWPYXpoBQycRK3YtHrLGhaepTkjtGmVQPs87dV9Q4uU1GtQ4S93VQgjcqbRfHxfsZ6JTErw9Ua99jWT",
  "key17": "4i2a2AUoBV49WjspyaX86WddDPrGxEM8dQMsAmRDUMX8uVbkGRr6UmXY5P5RTpp1hufAZ9PZSrEph3irgDeg7oW3",
  "key18": "2MhsZsRQz2Gj7mUXZD7JQJvbmB5XzSByNN7XQLy4r3pEwV6JjjTpQ1T312h71Y9uXNVqLmKZyRsBtwo63egJeHdL",
  "key19": "yDQpQnHsUzRSirXdB3JbNwwr4M2aWzrMH8nPAqfKsU3h4JkKjrshNHvDmpevPHPXJWtLNLsAjKfjd5ecsVHTScB",
  "key20": "sAhqFdCYv6m5byruhd5rQxwWzA33kcYYotvqiuMDZ1WSKo7t6rE38NQWSt4u4nwh77KtJKWtXWQGubMfHwFtkcQ",
  "key21": "3L2N3kzARcngc3oCohfMkBP5rHqsxed6g9ZpgtUriXSZu6f3te4QFNS68C1VUPEu6fAjw6kSZtjnqX2K8bi1KeWi",
  "key22": "2NWnkoqtYH9E8uU2KrhhYSvhpYJyxQLi6dw8vf6dbpBjSyZ1Hh9ridWFwYqrdYiuoBg7UAu8YE1cTemtJ9yM1aQL",
  "key23": "4YLQ9mMSPajH4itnijGW1E6YDov64reYQYxTPTU1zDTQLA5EZ2TM9DrjUxR2HhNAt4y6SdajX6HqYrWKYGyaXDuZ",
  "key24": "3HLUTBdM141ZNxKahUCb9aHPXpU5gan2BH42oGpzKE27Sa5miTbQhceKHKdTH5d8texf6SacDBnE3kZMPvCZwmQH",
  "key25": "352Ch118RKXwEnrEeT6QSwgxubMx3ANgCkZfNvv7keqmcMAoD8aojR3TmjMPfWvmpaMP5HMHDkVHJVry441MfQk4",
  "key26": "R7DUguYZ6ULi6JbdG2Yn9AU2iti6Ff9pfLskkCjAPLKvSvghSbnXMCVHKVUAdJ4jbHDLgHXmXciw5mRDGRAXrnB",
  "key27": "4ceAmTSKEHeGBn4PFHKiptY1Q1RNcHSgcZqWieRnHVYYBPvUUnmFQCLdPNT94KwmT65y5UiJYA7uuBMywRrM7sVJ",
  "key28": "47hPXffAAVHanHxTJcRMT8gNQLFJKyQrXViSyvgghPHdk76x4GJi3Ftf5cf6TbGT1hkLqBy2aJH8XdJtHDZLgYLy",
  "key29": "2aHy7wapjGbznv97M3ZwzydJnrT4buFmZJF1BhnuSCCKyCx2GWySCwvuhn6ujf8hYswHHEV54DpjRH8uqkaKeDyP",
  "key30": "3BtgRRS43uouEStKa7njjkgXa31T1bG6vBQPgqw2C8UouFKtia53RGM3BfGPqPgL1CSRrrwprpXj5V79KhLjfZZh",
  "key31": "2HXQyrruRwBKjWcgMgaVZQNNLLE7MxyiDk2LryCBzX8G5U3tNZKjUUNYXC9VqWosvovm7dkfVbsmUDVRBwxqpGE4",
  "key32": "3aBti95m9FtbtPsFFpSx4vm3LwN5XQdGqaAcWJtawarR8qdZAse2rKSKqguV1GVx7eXQKxh32TgEKjBA4L8Tbk72",
  "key33": "h8C36HUGmVcqhmrjK2huBZaqszGSRHoinZTdB5kKLA8GhhD6C5kryyq91Tmro6XjSgSBEQNYjJZefp3UrkUERvp",
  "key34": "6QzBZapQVf2m57aFDvTEtQLQbfKSNpX6SFNXGFWevLnbjhAp4jXcP5tba6SkHHCjQ5PGZFPRTCXu4wQR1q1DaGG",
  "key35": "4iADTxTFAMGCJK5vtefSKFFAJdbu3y2RDPgXydyM6Fgnw8YUNLtivQ4W9acXyoJeJWun8iY74bKz6rHFBMSDxbrd",
  "key36": "2iyFqCcYpvRW7HTNWdsqCQUGf5KG8RDKP5BUx6ZGxMwA7eNqX9rDS9z3GjShg1Jg1CvVxA1yZqaCDvnpACCZsRc9",
  "key37": "5HgctxDyGoZgYq9w7BBTAGGR4o5cbc9dnTVvCmedvtq3paBTTrMzRZNUQomjQ4CQ2pkbE5TeoEdCXEcai24VcMF6",
  "key38": "2rpVMrShkx39XCoPCa1CXQ7WmCdt6to8ifdXMVC6YVdFHcW1Maawm1QmBabeoxM7NKuDjwX5v672ZTpm8exe6uUN",
  "key39": "5WPhhr5Wpdy1B1NsXwwgz35vSmPwT1AhyV1wLGBLfnPUA7H1YVV1B2MLEB2H7jTTL8dhwVAyfngndPXzW7JhjfkW",
  "key40": "37MPs4MGMNcmFf9uywuwzcaYJpWhfAsBnsiyvdB2L8ug78qbqj1VCrbPQmcMN4CFfWoTDT5Zo3EuBrh44Wcn7s4u",
  "key41": "EDezVgHY3bzWT3yqP3qunEFGp1VnwFrE6YqtsqSS43aAJcWayjhsrTcnccja18M1u6aCrnqs3w4CKjLV87j7aZH",
  "key42": "WtAw58BRQQuCasxuVfKcA9XGDjvVnsP5SuzczX7ACXe8iQZSCQw8GxSMN5zSdZg73AWZackPgrheSqxCyEqsEZU",
  "key43": "2haCaXzfjc8aG6dW9cx7s456LSWFRPfwJmBDTKzVbAfXMpizDqr2obzsK2kXmiPFLHsNgckLAiaeTdRXYbgg9H9h",
  "key44": "5XdAKHwtGaVNqm1bwMMFg7H26VYHznY6sK7C818c13V25yp6qQdM6gtWkbUVcCoTc47cnE1eNBGKiQLcz4cRsrqX"
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
