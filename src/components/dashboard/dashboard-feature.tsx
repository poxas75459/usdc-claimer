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
    "2KD1Nq1qirw6Fn8GkRZgxGnDsFzi66LAahe4JumdCGx96dzgP2zWkQ2VkvdUFs4DSKhaNdgHHiQ2fD9Vx8Dq5Lrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMqB6txGR5LdvNtQPHj19zdbF2dgpcXYncWmUArr1UETdxYnTS12c3YL8fLPwS33nGRUqbuk19kKwwRE2UUkhRM",
  "key1": "3rw5a7gJSDBXnmVKsWFt5cs9pwYG9zfUGaRnHMw4uSyaBpPVbZfr11qe2wSx49ujNxVtNtmJEePsdRkRPjQFxP1k",
  "key2": "hJs7aMNcQ1TDcjToqgBcouFNNCnQwRdHDkpCEBxxCizDPyMFS6Nes3DjVnMbewXtx7Ff5ay5nVuxp7w4PgCB2F1",
  "key3": "5dMf8DtMxzFG4bfgeaUaWDE4i5SYgTeSk84AQ9qWvKuwvcRWLMJY37Q5ZEMMSURyVraG79Sm8xkYVNq9Y4HvwS2G",
  "key4": "dMANTP1HXC5tvZvHoWb7GVCr2EhPLuFcBgj169Yhq4sd4axPR4sXmWL79GCMJ244amZ3hM3VT8ZTCaJLj2q5Tsq",
  "key5": "5xhAffdK1XJtoXggZqEUf1BLdJtY9BnRNWwH6V9r8QJCqomcx18GpiaFsWgjz7hfiAJjEECzUgHSsPWKX2xq8Azf",
  "key6": "4LjsXsG82Ef85bJayhs5t3peDksDMr6NhaFdrkYcWxMkhqWnvFSzoi2RQTrhgRqUzhfLaksEgVqhFfTxcFK2Xzwc",
  "key7": "4h5YQ972z3A6ehTKjKBdxt9fcumqUp5kJ9wEdW6vDCLZoqCgDD5r7aatn1MS5qzT5KmfHNGxQiQ2oeum1P1FQgqF",
  "key8": "2CtQEjnCKFsyCr4cwve5RR99g8pDZCZrTbzvzYbB5Gep6Bh2U7eemJnZHkEjKEmWvtxwnixXEVhSrcbccDPjsUms",
  "key9": "5nGxik6acdh3Tio6Czy9G5UqNRmFn9MjhReSXJ9rPn46eEuzjvHbddAwGaZkwKDLtAXXuovVSiaJQnjVmPr158Qq",
  "key10": "5KU99ikUAZfKVZtri27XwspXMBM7nVHBP5MZAe1yKerRMYUQerR8qxpZ3je9MuwKggFLomMUzh39SH2W7E74Yvih",
  "key11": "52JpXPCrNvg9WadXNyUDQcpywG1kxnb8qCqXNnv9RUMjcUcbMb8Y7V2GDiXUbKLFyaTVqRvzbFpA4XW7kHpXW7Q3",
  "key12": "3CH6UXWCmBizDNuk32qMdnh36Kf6KdpsKqTFKLaj9utjTpDXWoJ6EAaA86Kh5chkkiB1S9n4XVAub58VRkizUcb7",
  "key13": "5vGJ17vDVSeH3WVyg879wCryBMRCCvS3w9b1pq85rEohDnfgRdg4vgFTviBycbtpCWL1Dmy6F5VWJXWtbGw34Ajq",
  "key14": "4jFqcaZnJ72Q8GYLUUwPDHdmc3E8r6JsWpAqqRDPuGhxhQUSu5dA9ycCBaer6Qvj6f3ZN3QS5R4ZNGpuci7numCv",
  "key15": "5GuMvHw3stbuqAEYvaknLMZguuQmaLqzhD4F5b6MevW2PmaGi8TwzYw1X2D3fvxdu52n1KcLgTSpWcwKHXKzg3Sw",
  "key16": "3ZJJ3E323BQFxEN5zV6PoDeGxMJVC3U2AEGyHMVzCMqMdcBuUf1ziZtCppfFnXfygH7fDH5D9aVAg7yimXhnrRdK",
  "key17": "4sosagoh8tHawJiZSQNa8r9dno6f7ELnhtFemMrRq4zJqDqgXQTwr9UiuR2xhXYhyoXjuoAhZ4AjTSh3YoQaPAp1",
  "key18": "3EYcEGM6n2t7BzcQivzhhLKHNLNiKohAjCeKVDthFD9cSd4Pti5zjkbbZxiPZ8P5oLQYm4zmAyFKxPazTQo8Bzev",
  "key19": "3nkzEPhF2oGm57JUfszu8g79L9brEjjdnjNVZ2LPmKmRGHXtLPTVDS2G3d8weX8Nd4ceZBJHDnWfnWEKSb8RQf8s",
  "key20": "33M6ybEUYnzjQRWtrGoE4j6ABoS4oK5EBUwVaBxrUhAUcJ3RjFKWkyAx6ufQWvQz2CVmtNFihSPKXNTBoytSPHzi",
  "key21": "3xbjVQktHCCxFpKdZoE9AjAacHxif4Q8c6BTgEDfZJjN25BuQjWxERzw6KqQ7rVX6GmwLUdUUSCDY7f3LXSAyVQC",
  "key22": "5FTrgqc7veWnxgSSRyqRvLNcP7yaGai3e2eCK2KKByibqhaCGkm7fywokzu6RYCjBguSSK3G1TrDBRnfB1MQ1zs8",
  "key23": "2BTfJ1rQaGFNTHBfYFZv6zZmf5TvqW5zDjK2btFjfLp5SpKrsDRM5wSXxpeD5ekMq51geyczjSWpUED4gv8medE7",
  "key24": "p7FnWo3svx8YzPdNyEEFVgAE2jbsKg2Xez3tzeoVJmC1WWwgzUvUjKMNwr9xnXTSf1SHCz8CHu4SQMPTA5S2n2j",
  "key25": "5BB2GajAdWtMMfEVo1bnGJjsgiqQTCSiDJUPVHs8h9McmFJKhfHewBN4om76Bx3MeEH3LadSxgLTFsLVeKruUHV8",
  "key26": "38tRRTFGowfS9QffHvU6Gwzqe3b9hvXzB7v7sYnFJV11xHD2XYADW3qj1Km8aNA2Mg9cRjqodAzDtPo1cFA2N4YR",
  "key27": "4T9NdRP2V6mPBYwoQN7ZpRFMxADfzJC69kbPmU1NoGyYoDfsoDXH52LFMqinWiopk1x6nSBa9eGS4dtqn3zgqnqK",
  "key28": "4pG1fa1xZfm2xCqH4brZHJgnFeB93Rzpee8bnd6uWNMooEwB5bQQVT5HwQgzH9rYvKt9d6n4kom4ud9rQdfy7EvW",
  "key29": "dWnoAAn1FAagEnV9a8eczNFSEbZQTB4nMhXJgBniHb9totcowQtJL8ZKzvVoQkn6P41VaNAhT3LE5dtJgik3jYS",
  "key30": "4aofCTV797qb3GchkRxspNKLRPVtxJQ6tHT3vFPJV39BwE95fjdKzS2Brw4swJxQ4ebr8woNLNnRprRrNQ9ja2xp",
  "key31": "yz28sV5GxsSarEyxPpeJoC5E9QzJPsJ9MV4NTge9GHjSha6peLHAzDYkQP2Fn57evQ32T8ngyzgn11aPcCVtc9W",
  "key32": "4ghtETphzyn9RccSmM5xrKnwGoct8oYboYURshr8xE6Fgjk3ZNK8H2c6ne4z83t6csZQNf8pPxJWWTsVG8VKbnuY",
  "key33": "4AfYpjAEs1BCofF5Nubo6DPSWHAqY3WrqxNmnfYckAhx9Dff7vR2XzLWEaUxC4Hr6FGFdu7ZLpB1rUPUjRw5U1cg",
  "key34": "4t18bzs9CqLXbjyUYU3StJcCuibkR46rREuP3DQahuJBKcyQ3nkg9MNWqhEQPQQAFFuhEH9EcNtFmB9XrNCDaR46",
  "key35": "4kTa1w2Yq8ErtChwwaYsbgCSanivn4Sm1AefvBtqqb97q5run5EviVmjPwHiuq7rjb4UtSBqxqgPRy2bHovKtUFA",
  "key36": "2gRDtLhVXUPf25UzoTzZgxgFfD7So1TD4T2KBGyo15xf3w9mjHjicaNUErCDa4k3Twx1nr6Z7onr25vuihTzuzED",
  "key37": "5d6CCukByehvBHWCSHiLCogGESD4vS8D57EcU6Kpvu27JHeoPiTtToEfZNzpJJGKscrUW3VVz3yjbbDgpTud6VrS"
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
