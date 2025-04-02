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
    "3zpo7rL9iNnGDBGVEFQS7qFMN7Ua5DvV6AFhrdeB3Pugc4GQ4JF7xJ25JbEsbXFu9ojcr1RrrZn8i9b8kAaLjUsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dK2rAdjXbPhwAYMRo32QSuFuMLVy8mrQVsjpCaYXaPvFPMWmXm4zi7ZmFTfwCsf2m3Preu9LxspExG7GuZHzGZd",
  "key1": "3xHNGyUkDf611R9aAsmX5SXUVKsH8oprRDpuEuM4cwMLwTY7fuhtJBVAEHzr9N9KpRRAq9uD5wLb29RTSnx4ASPZ",
  "key2": "jt2DjuCim5ousj4eDZx7SkzwWYqr6gm5pj1AfqdKciLqj2jvB8AaMAHRnawLJu8JpCdyDv2mdS37yDbMnrBnQrp",
  "key3": "5Wc95bFGNfCK8H1CCWVqmKsjQGjUAG4LtQ9TyjWrss77gNTAkV6ddgSXkjMJP1oXbVG41QiJsLdzpHnRzLpbHTBA",
  "key4": "5ksyhtrjc1fGnPw8WoWcHkf4p8fkZxo8KYomY6o8vvQvhrJgZTcpbqDVomyUdmJGGAzviohPhhd74X8a921VRJ3K",
  "key5": "v8rRHkE1puVGTqGw7xvV8yn55PgE7Erzb3qb4xjiwo7BvyPdno56dMTJ1Gn7eL5JVjHTxDLwyioy7ET3nHF5YVF",
  "key6": "3xMNuKvNXwDh2ZzUhFU5XC4f5BbyWpzecSdA2FWu8Tgk6KExsoTDyp1erQ6atfxoVYbB2nnHS5hjBda1aGa3WW3d",
  "key7": "5ztQDwWuVWseJx9t953m2dk1SXbQbBS6yQLPHQ2DRM4QLZehorvTdKSr2YitJducZUAQdxBGNiQ1q1drNCAmSnPt",
  "key8": "3WapwCUBPWpkyHJVCUwanZFpyb2hMkb9LbTmwHErXtYA1wGGbJSStX71NWCvbSSPRe56GGMCVnWsdVw7KRZzV2DP",
  "key9": "3E2Vkn6zHSsiXSH9vQV29T9Z2rGwFbPzoiXSWqQ8gqC6MXC9JvS2SN4S2aKy981bMfQ4SbuCgjjXa6qTMDdJrMb6",
  "key10": "5R6EdaQHB5wvAS2j6w8dXRJuDH5cVD9nG71XxbipwjUCRgsrSFVguHQEFUdzSDUQyHU79Kh7LBDzoYEaGdNBpycZ",
  "key11": "p833P3WRAwz96zFAw1Lz1n7EXqwSrwim1tbnv5NSga5xJbZeUQaJfvk1jhcPbpYcHJHYisWgKzLyE8AVSpL1bwR",
  "key12": "4rpj6PrX9UD9epzxwcNKQJUuX8CVjw4KAkZEse82EHuHufAixsd98ViwC4FvWvSqXJAUgmuYefJPVnxjaC9pqeuX",
  "key13": "4crgHZ7A4R8s3sjK5J4AqMLj25wYgDvdnqBJNr5EKjYR95BMq4BZ91jXNMaQAFCuikpoZtLj9AUHq76RBXkh8eQj",
  "key14": "65va3k6g7wixpZ4cp7bLqeWrDA7ghp5acJVcRDaQTFtJiXYrcwt9ZSuWU3P6nRdiFRjj71mHQQjtxjZWqFnBWVAe",
  "key15": "4bWVMtRNMzXA3zhGGcxZ1iGRonL4W8iiKAw4t8YiNnmUrLYtShLBSBFQfHHjJ9TS3cje2VjmMNuZsCmMkxdR9pkP",
  "key16": "3RcEVtLAAeNVB2xVWgRvEH3QmTWeLnagqhWxCzKAxHuHV8FuhvFyZsi1e4HNvgrWPdNDg6gwhRudsBAu7XYVvbvo",
  "key17": "55nwaUKZ6Kw86xR2uMHMfYm9DuZxzirtu96SbZMRhX4gVMivr9JhsxtZoG9KpWSSQ5WnwXNCeRJdF2xNSqpFhBff",
  "key18": "2KjDWKzVzEsBkrPrtcde4HBkYmT1r9JSj2mNSeZ4QV3iMJgzoZEMuRSMMF56DD8q9fpFWBAa9dnksSvGuqA54Bn4",
  "key19": "65Pc53HKSrJom5W2anZwMQKxAxjiDKbAjNra1qC5cfK9cpg8LycD9hCgdQyzaU6z6JNjjNgeLmPw9xJit9XvDtQF",
  "key20": "33g3vNxVkFCt5CaxVUzgJhScF93y8DdzXSmMvMkHY9Pcqy33NM93adHJAmRNA8xJiozosyN9yMqBxAut1USRevj",
  "key21": "2TJjvc62J9yxKPBknXGhrsdYWU21uMTQhyoTuLcUA7uzUnq1HYzRXWrCHeFKH5rm2GfUwCLWJquWgSCb2nhgoLZ9",
  "key22": "4StkohJbjzHS34ZLbEJEyq6gFCQTtwG5fKKMCqi3rpiP7jtbWt9AxAbBJGHDtcvDysngtw33ZJii9VHivJfbGsVJ",
  "key23": "5YofY1zP6fhqmFzNPb3ZSsSQ5N2daz1xUDyCuuAZFEfC8D2rG3RHpwR4HwTSCSmzH47cHuEAvgcZ6ampVqM5cigQ",
  "key24": "4zfqTbmAABu6cswwA8qqsTozc7WYLn5h9Bk4Fi9wBHemFu3Phry57C8Vk8Sv2nEXDMzpUp3LDLToY1ZYZqhZ4AV1",
  "key25": "3aQ6Gz6SVHkjgcKactcksEgEAcy89vsufmmWtQK7Joqo9GNu4VteJUXbpWwcBMsyJbxgq4ajYfBrNeYPEqwEByaY",
  "key26": "57UA8az4hdyi4J9R8Xkq9JFQQHBpA85HbJkod7FEk2guBkT87NeCryUg8Uej9SbVekGd5Zk3BEeDHSfa6sGRELVp",
  "key27": "uHacamVdyfnJ4FViFad7xK3kqqsw2VYQ8eoBhecpBWQhCBJLD6YbdfioMCiYPgNfKYnX9B2xGwL6ax95SQgCPEe",
  "key28": "3bfyQjr9iqUThhV8DrTL1aDEbt9n33uPC2zDmbiv5kmQcn3WVjjr4hjf28n3Ma2jb9LmeW6VH5xgnNGie9R9esqh",
  "key29": "35v427FRU8poRkL4x8FSm7yWfRAp22rVhPkK9DCuahxgBezThN3LLUjJSrNfP8k82fpvbqqWp33LHfGKrxABdrSY",
  "key30": "s7P9f1BCT3B3XcREjU4CSxF5LY7kmbGPf38q63d6AZg4URVNZJacaD9FGxUwNdXHZKRnavktBufSpirpkuAegf2",
  "key31": "c4ZpuVN943TiMnira3ockvqhDNVeU5cic4ipJGoR8ww3FceQSfM4WKJKCFbVYzRnLWjRcZ8YWtzP44LfeHJjdqS",
  "key32": "4SE38fLbBZswu41odVmDCSiwwqEGyUXvv51KmzqLmbB9GZUk4XeRwoK75s1mjQ6LCqjpKMsFB26qA8qrJqaQQqZt",
  "key33": "4xUhUuThPUQwJzZ6YAy2CqPTkmm8EmHKpd9oY2ogL1BbHBd6WCxuX7zViR1krpupjCfoG5wvfvV4RGgERudvUWs6",
  "key34": "3zZ4KnefYQvQMHhhWs7xZ4zfdVkY1paJ5JNgcqVfhiKm7V7dGhapTyBHP8SQn7opqgQjhHP7poV7B1XZKycKW95t",
  "key35": "3A46x5592dWmutVXGP6TF1yEgAagHgUwAnZad7mxgTQ9urjpbv651SHjUrhtzwwk6oH3mBvvVwEdidup9cU4K4SS",
  "key36": "2sDfT3SJhmwmKUc5imgG6j5vURqgHZ8J5yU5AHfBRpTorYSWhcGoVNcA6R343tdsYDFRCZVwWhZvdNoEQKJwLHvT",
  "key37": "2yPPtczwAu4chTUt5T2dC4oa3qgzkVRizXe3RhAnfbbWS51N1y8Ngj8UHgbcjEzfymWtV7HHwvXafUy5FzXmDi8i",
  "key38": "5L1BEgB1vyij8148x3B9Tx2iRUVdsa3QK9xg82q8J53pQ4SqrL5ppfqBnvbGYJHXDH1WbrPm2zVJyQe73vSuqEsx",
  "key39": "VDjfwpg6UheyPMiGNyLGu9SjBJjx6qCE1pSRTEMQyWiyyWdTfpUhLCYJ93zeu6gCuCHvbGupZPPkLwDHgqoSgQU",
  "key40": "2R7qUvYq89bYUNhHaa2hfgj5wHit7Myj8JWaae957QeihiqE85fuTqKP67G9GokPGqTbkv1qmmKUaPcrWa4gvxsz",
  "key41": "3qKatfr3sU4ex88hosKn5gbVpABtDiegmbLfdooawM1MyJ3ddntzL64EMXmXAws7S25XXrdfhu8NQPJ8jaWw9DHa",
  "key42": "4BVLqjuFiGaffCqDb1qVLzj8gJsiCG2uZGcKHmfGTrUN4xgP4phk6yNAzvbEXGFb8o2CpGNa3cmNH7xL2yJ8JiJP",
  "key43": "GPZngC98zzmTHMN1U9dFaoSbjh6rjPNY9L1aZw3siamATohcthM4nUsXuPogf4CxtLq5vfPRtKcFYKxN3FsTL7R",
  "key44": "5VPzic47ky3QH41xvu3jnTDUCjd1eWmEkXoDeVm5XybWJdmLinL828NktH3omj12xqSCztfXuQ6S6VijK3Cte5dQ",
  "key45": "5HT52wwgn4tXCGXsszhNQVDc87rgZMsdCoWHosxKQ4xJ6dhMNfYYhUQK9ky96trwgxhkRBYsT5hh3TwuxJ6cmnkj"
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
