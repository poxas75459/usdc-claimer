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
    "2TYFxhe54XRiDyU7GHWx4zcqqYRJrw3a7nrtnh8xREeGSnipQcp1414hJcAvHNa9jfoFFXrSSZQZyUfqKpyeMGz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DxSHDr5RFpKuswDYMiESXXhQw9DKiqbufeXKdz9BNjXfXUpJsx2UF6SUskM8oFiYRusJLhkapDxFHiZr5GdJJ2N",
  "key1": "5sMzeGFAyY2gavqEjReqhudEzwAgyjoHVNQNoHPGSePMVzh1duXoJB1cN6EiY6HfHEUheRhheD3i56cnrpgzMieA",
  "key2": "4ANGRBAucMz7uhRopWr6KPVj61eshqsk9iRUKrjhBQpcprkx7D9sDKYVVeDM1coDVJH5dQiesxvkRQmAwBjTLJYe",
  "key3": "6DWwdKPJFczLjqGT41GKupkHKVPWUdPTmYhZ747aGVrKtv9piyBKuFpEF8RRj4gem37VqYoveHXnnsnHPdxBL8A",
  "key4": "34LKqpdyxoMGQfA5wU5Ytf7w9hvx4aizJbARN2nYGqqvR1VSG3qd1TQs1G2sDw4Yx9ZUYia7otnzZnho4sYnBeyV",
  "key5": "2YLBnaP2HjwuNiy6CQeFbETxT4wPkAQWeMexEAWGphkdkhNHGqykYm575TyBs1x5yhsj8dx8SHy3ewPmBrE1hdHh",
  "key6": "2xAPmgqwQcxeoW4ZAFEhmev8P8TGCC63RZXK4f9tQogbnWJFAaZzVnyF1JQKvnAQT67NNTkCEjkY58Qt5eFgtzKG",
  "key7": "2dmJwDLWRayHSQP2uSbaMkjHvh8xGjGXFGScvpG45G7aaq8VfT6vYmp2PooVv4otkkm61U9j48dhTo2e9tc2g19S",
  "key8": "g4JCfGv2BfXMxSs6gE7Hmp7KLzKkaXJ5TnfVNBYbiFUuDFynFEYXZS7FjB7yxRzgeHY47ngZZu7v98zYd7ZU6jL",
  "key9": "6djLSNftNDcbnKxuPc1uJ8Ef6pnaoQNcVnCGiz5MBi85xtD4W98or5JkXVANcQSb8TXk3cbryyqFs7LXfrnrsFe",
  "key10": "3zpXYTZ3Qim5eNAXQySwws2GKWBewSGdeos8pNHsGTfNeBiabQk2Y4vu9FnN4263Ni827xFLhx3zadVzDEmaZXpg",
  "key11": "Tvrp8L25TCWeEuLn7pc4f2dP8Paq3WAGVHAUyWFMypHRdzS1YmHpqNTWgrim5haXjxVLMhT4DosdUopvseLNizt",
  "key12": "2ZaAFx4wnwq2oWNK7giCBGTV56QFc6h2KKETboqHoBna1qGkbmTYw6jMV2yb9bGdUvbREcpsUnbtF3NHhx4fm6gM",
  "key13": "5Ruy3vy9Da3nhoQu13jCwPQBnM7oVYD136dr6aMP2juFGTMwhssxDZmrF4BAqh9Vat8GcVN7EAWEQd5njaHh3365",
  "key14": "42DASkxszctK5qge18Pjzh3Vb2FVPWowYMBQ3zHXeeqBBGyKs9iyREP9jo91KPtSjJFJUveGJcyLHpSSwgvnQvd3",
  "key15": "4YcjEs3gXnotM3vdqkvGXj2Sk9sWHSLUjpmCZuNFsZX3igK4pCbWh9dD77qaX6w4U7qXmg6hXqpxbDtKx8VU4rBA",
  "key16": "2hAyggV66JgNYGrVpiEsj2BDuVvSrzCJtctM1uFYViM7AXeryNCXZKu4dy4yHWdRcpJy1fGrJCmGv2HMTRfD9k7q",
  "key17": "L2bpekfREhMePWXdUut3RcNKqUaPuUWC2xzvvqX7ih8uHLAzEweUhm6wM1cSn9T4x75wk1NZ5FCqDptRcFCH95t",
  "key18": "2m5EncEjU7bF8PXNtQ9sefaLFxMGfsiioQ6atFYn6BWbmrzJoSHN9YyHq6VdrghsYC5ptBfu2c1YrfWCLhWkeeDW",
  "key19": "2U5DjuMKyGHkkzy6ErN4TqPEcNJZyHXM5XJxW6bT927k885WymmhhyjCAaSvmR2AbnB6UZQBtS3ifvYwEfxFQrg1",
  "key20": "2xL1hnnvvHtMRH8gjQjdgVDjQxGcEqsuwKhSTkQuUSJiFyNE7Qzbhw8QwYTj3Hw54qqAATmdtiCmja85xtPJatuX",
  "key21": "boVHgxFGAT66DhuMpLXppGxiqCYsCUqnntte8ibDz7FT9uHzQJygtSCfPPcYVUSw3wxLgt8guEmXLD4We172w8Y",
  "key22": "NKHfMSQo2d9SLphWHxJ3nvXTwwDVXFxjmEAEJtZvVmh2oRiXefhd9sEBE2mB6ipUqQMuYb7Taw7fk9WbLNUZM4h",
  "key23": "4ZepdzGUp3GqDanEJeRwiY2qjxJnmxkc6HeLG38fsX6QdmeRLLuNmq9neL6gyb7JqDmGTg7CnXEi6VwLvgmyXJsu",
  "key24": "5LaaKpXQthVvJY9z83gVGMznoWrj1zie3JDfLZzvUACbjAttPzWCffimEcLsJmvJMmYuf2y3fcygLy2vswL7R2Uz",
  "key25": "5orZmPBMsmszTQkngfd2hRvHm3QtUaYW2f4kPCh5W5XBXybzryHfSenMd26eZ7fSBCTQwN2PFZ2mFs3DhwBQgfzd",
  "key26": "Zi3Q8TT7Ykv48ANgr9uz7KjgvuF3FF3J4Hp6GjKttGDrrmW9m2D8qnnR6vfctqM2bVcVSo4uYjJ3XXL1DPhBnjK",
  "key27": "5uJAonvgKf1NoDJziJN1BPmefpHDdTkrazEWVCX1diK9cDhmGDNh5iV16UR2NrCFYkywqDQa7rtNn3afthKHsmmB",
  "key28": "2LvziHKESvCASpQkSZ9xeCAp4wj9HJHLVjS1DQhRk2wEBtoAptLMdiFjQwByQhAgB9UKMuWQJkUTMdaKfemJaNeR",
  "key29": "3Zw9cQunr3wF41QJHJ44TL4dCCbjwbzFiNspsRZo7pDo7XkW35uT3f6Ps3ZkqV7fbzvASGdq8jP9Lkxy5LAgRvwX",
  "key30": "53yQH78FBPFRgLyf6oyvgvyNVAcYPGNAKmpPUarBqqFASSpmih3HVJfEVRGkyLPohf8RnEH13PR4o8RoTB8e4sGC",
  "key31": "42ZEUeBi4PAyhZb9cktNPG4yTbvF19BMU5fM4mXb7ZyszNhHG782YEYYicamiWuAGkNciJVYPY4CxFUJ3jMBDL4n",
  "key32": "37HnobH9TWhkFZT1DFdvLAXnW5NTXX7idXLDq5awz2oUQ3eGW8knQ5R12az8PLgWJLYMLh9nMpJkU3Xqy6BwRphq",
  "key33": "3oKaR5qhZhHhg2xVX3FXFj87zM5P7MwfquWaK3QenC9sso3QQLPZdpPQq5mJvEW4w8hZZXgHzR7aYj39hjHhqrsD",
  "key34": "3wxNJhXj3T8xERpiyiHF7N5rNHBdCfSmHRXttiKiTFZmweUVkRmjdVTscaYKXz9ygTrXUCa3eorNiFh5hVJo2YnA",
  "key35": "pGSRQzDqrhnrJ7Yzu4N55KVXQKwrRjM55Sva6R4xd8wnRff8pUjkc9mZf1Zf4kGiFzsDx4Vh4dudMCKWoXTixRy",
  "key36": "4a1GrXc9CBfC8Jn7KjNuXBqWvt4X2xaJ13SbDNWANmfvkmt9h5AUHAz9hp9up7QcJkm443nXMzXPhxXaT5BEz9VQ",
  "key37": "kjbwVvsW57YMmjkBehbSXbv7GyAj8Gba15f1X8fWZPdCcAzdYpiSzhkwdbhSAZKPgdXHZNnnRrySj3jieCk5mtu",
  "key38": "5n9SfDrKpdpBQHbzTYZ2UUbaBVnHzKyso1Kq2pAvKHwwyzjshwEVV2aqJVSUzBdu4cpH1Wvucewbr5x2ZZ4cE84T",
  "key39": "24M6hKGacs7ydBsACiQXo8g6eqzaYxaQcRqS5kMDA4SB2TYxPHCXa2FRSfuvEmZevYSYXmcU6BC3n94Efte2TmYa",
  "key40": "fr9Cwwc6YMCWRKtJ7f2QAw5bv3khw1nV4zPK5FF7ovhQpWS9MtxRsFwEnjScoZuMfXXyHcMtLZn2VUNk6MjrAbZ",
  "key41": "sEhTpWCEydQQW175JL6EuE8QSnBWJKASUmu393tv5iVWRSsP2v64jtcmXDmCLQAPV55HGZg3QzzPXnXn4ggth2h",
  "key42": "3Bwf7KWT2svKaVz9QXJRkfrNS5jABJ1FXkQNRkSmtVmsXnZUA5mUpmEcxcyGj4QvZDQm9WCYdhPGD9ZpkiX28NLa",
  "key43": "Y4GLuatGhfethcYNzX5Hc4eSP6jeUrhuH1dPnssCVZRrvPq5DfxtvWw5kptiuu7tQkGAD5Yfg3fRAjuvTbQdC1Y",
  "key44": "2bMTc6nNpY1z3JjDyZzZzQXiSUnd4wQaZ94yhU7X5tTityeX1bRYY1Afq3YV39B2zDPgszKQeZky75CL1DRr8Eyg",
  "key45": "5JQS4WMuk9F5CMAoz4pNegSUex8qSMNMVQGc414UzM4EgZPnxYotDzM9YSUZ2NeQL3cqSVUSzgCmcCXW3biyuEXv"
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
