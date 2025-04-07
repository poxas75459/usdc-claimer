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
    "4yZZPYZdyQbkDX4Skqs64n69X3B6s45nez4xbkoWb62vFXgVS7YF7ZeRd1Ko3JuiRUn7sXj26ZUuuqZnyoDQ35xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uPsDfwSVQ5BqLQCPFiLBMY5jMoKvXxxJ8bdA7zfJT38PR7KyAh5jHFqMYXrHHUNifw7nsMXW23co2fQzf4VCAra",
  "key1": "5Vpxsvjza1vfUnQYy4bf7A5o3o97mWHyjGAdFaRtSg93yQiQscEpurMsC8qzgStir67qYBgkCTACUuGXbKh2uyr8",
  "key2": "4GZiLsdYbMiGNpAypcvTR2iLukMr8kL7pSfUMDbFuL23TZyq4iHTAoPMAzNJr4am57ZYb5j4vcRPXosThomPU94k",
  "key3": "CFp3v1WZrY3jotN6WC3KuUKbWUKS6C8T3TNoB2ujfyH6TX6tBL9F4ZGncqmssTXPmuj58h7hMeFGxX91otPoKmL",
  "key4": "534xduF5fPy8f3rUXsUkDWREZBrbzoPWZh7MCqs8GiPtRwtkwMLTq6btWXKmsLf9F9EoiyZodXnTcBV3La4VK8oW",
  "key5": "5GmrVvh9E3iL91cLbCgw9KC2gchKNPaHeGmrUisE4s5DN82kW8riHoDufQ9Nnba2VSafaEu1EVPHPdXGMTGTHzpB",
  "key6": "5HL7XHgWZSRDvxFVLKWrMuJYjQghbPR7E6Db4mZEbCfY7aqFJ6zMrCPfDAWmAdc8iePvJkPxDY81VxeidYJ2LSSM",
  "key7": "3MreAu7sjidbc2xS358tzZc2Qs9ERn5PTEDMJXmtXN1Ajqmd4QvcRN4i1Gds6qVMU6XqzxNCataUywwfkJnGZ13e",
  "key8": "5EMbpAa7vNn2gD9CsGfuDZHUjHsQYN7bVFigYayhFaU7YJ1BEEaxTSQuLjKWse5CtRHBvBuAJJ84qysQaGY5yCQc",
  "key9": "2cMoy3whLShCoZYSiN82EiJNB5QeGfuAMc93Wkmpcfp47DFZAypzBX1xVhMT4rGwzj8DomaAhiAPp5Yb3zy9MycP",
  "key10": "2yVFMdN4uMqLjS5WSnGdX1upzBqxTSUUMsoE193TrjhyD6uiT9tYqmww6MtptJXNmoZndfrb5JtNyET4vCSHyZkX",
  "key11": "2C613u3NyXYbP9peR1E8zcXjsFD3vft1aDc8EThaFwFazPBJ3xCsyQLbERDKoTjPoxkyeWpC9tToUVN4S8TsKzjM",
  "key12": "5HMwFkmqkAsV831hh18wtSnLT1iFePNy473rZpB7GwzonZTkvZCBrg26Pxk4hNzycLzhXeT6WybgNRYBYCaScYsd",
  "key13": "4tV4hzMEG5nXGjAjsoqtWT52S9BBZ83yEKGaCTdnWawc81HWpwf5WUoLKNtDBrNF3SrUabe8STfdvMhGNHqjf14G",
  "key14": "4rdjVUYXWof8YWV6LqpQCQ8W6PrLrM6Xu3mHjU7ubBT7nNtwLk8jx6dA9t4qVYqTie11yTmzHQQXqWuyN4yv5Q7v",
  "key15": "UFAFpvM1JrZnT5FA7KvWzssH91x99HgD989ZVrrcowTuBoU3sJjzm4eJUp33fJXBdy78s24ykMnxwQtA4RXNykb",
  "key16": "3p2e5R81X5qDFeuwXkWrQfeKpkzWW4QTeiR1z6dxRNaKt6RfSQtbmqvrw5nsQy8k8gG3z4y3SAE3LtaerRUjv9KS",
  "key17": "2TXmjGD6qtMh25bva96i1XV3Wf7tjs9Th5kmaoz69TgB17zPu5bAgNqofvac6agbtxkHpoF3sHPsJNtxKRX6E46x",
  "key18": "4iWzitU9HzCT8yRggMpDR2EFo8VTuGsCGsLUJeiHRSxAR5KtPiPZw894eeBEKgZJ17SZF8ydwT58QR5aPmkVUSPE",
  "key19": "2VzcLSyGxtdtwvvAa4ZHKHNHYaYnbZmpC28EpiwHcuUjcLUhZyr26aHU7JcRnivHA4rQoM4T3vjYFjSWAHPTfni5",
  "key20": "4Gi4Myaiuv1TrRK2BVqyE9Y1jv5FesCHB4yjnafY7qAL24Y77XiYJwTGTTog1yvgwRgYGYaVEwaJUGMb2Hu2JxZ",
  "key21": "51whJ86wqnQr8E3H3EcBJW2FE8W5Rn3h7f3GwUrU68ukTqV7M3EcqKFKoWxzEK8xVUaJVozHw3ms5rvbNNjEaccu",
  "key22": "3bLwxPohcChino4Q8LKGsN6behds4YwKJsxNijCgJDKtfUHJk4FsxUQVoEhDuYaBSu3nRRjQbC1bSKmmbMSQXCc5",
  "key23": "2ZSAMYvygPdoSK7RSoEqnuLhgnTsp7ohUUufsG27VmSNexP2EDh4FRRhqYnk7eB76h1piRbm4SwGUG33zbDnaHSu",
  "key24": "6dERZPGb8Q5ZAgREmYF4n2ybSLixBFHGZvCnjYXQeGrs8trXw2zNiMELM6A2NV51Vx4X92Mn72ggwb1ELvvRGpM",
  "key25": "ZnWATd2xoc2WyhxEsbd9Hz8pnQUMmA7B7az2DqtBtRxxzaGKbirM2SHQag1tWYcwaGdRHmdWh5g4mFcy7egHK1F",
  "key26": "61EdF96w1B5a7SrDrfWKsaxKe3y8ypNtiMdFXz11wh6v1YYSTmfz2fWdtd5WBo3jh22k4bXiRoA5tZAksszPJrL7",
  "key27": "3QVZFV4LpqActMUz5mscEPu4NJKdSqxJpvoxZ3k9zVfN9qfNq4VFLarTzC91qDFNuEG96FNj2JeZGsiAp4D4qTSE",
  "key28": "2b5gnDyUVAEJsgGPDTXdz87m3ZptKB4jdJoHKFwGsLCYcZ9Cv3emm2tt7e8bmvS9xR41KhbkPMJ2X93twhJJ63zE",
  "key29": "3wztuFFJhxhgQcHFxBSGbKCwPTojehRBdAyhtHH5MCA62vV3saTJjispGNe6jVy4bmUKnpJPTZ4rR7htUnQHTqEZ",
  "key30": "2tgHGtVu657wLKHDPxoD7fCi6UaUWxwnQmfMCPP6d2R6jn1b3PWcezjoXYDmhLgMqwYT5c3i1gntQhvkt4r2M954",
  "key31": "39bEeraMUD6eGndAdusVpmdRdZV3mCuSQ7vawpzbDpq9a1kZ5be697vMjQoJySLazx4cXxMcpqXbs1RvhgYCAc9P",
  "key32": "37RNYVQbkjgfCP5R4f4FcxLYQ2Q1Rifbx6Rbav2PqX52Zcw7M4p3mWJ7uhpVPAoexCuk8sbmQLyyQyHNwv5BkdHX",
  "key33": "41JX7kuMsJ8LxpFi6vDzNdPx9PZtmhkfuf7RrHKwbLks88mjbtfFBx69kZHE7faMEY2RET9FPnZxB9aP91kg3KUj",
  "key34": "2FrnvXf3kNFmXbGWYDz2KezrT1eLW2nKQithL1hW7GuajqYV1ouKoa9BF4jSW5XGz7PfoB9PPf9MXmaVYjwQNVAG",
  "key35": "dNs7hDqV94SytoNRg1Yh5YW3BaPcWxA7LMiCKawLoc2kPRB1rUMxJoEbVqNVGdS4zoVNByuWx8aFAsLJSVHsFkz",
  "key36": "3ZXdTR4iFZLejSGEj2JYwPnfLuNBr8TFd89Ab8qxqr1RfyQhDpHAFbQK6EMpK9tWaDN8ScKVchNkHM8R9BAykjLp",
  "key37": "BWGZwAr8pVhSCYRxC2R7L9X7Cbo9gQPKNfqegi6MnGGe4wN55y2uYXp6XAaKtSM3AAXWY2s5RoMUANG77tMzSed",
  "key38": "31nMhQgYTYStEeQU1Qf4x2wGxzo4BD62zTnB23nmPujPnGJ2ZiKwZVm33o45XSck9e4J5xVzJHsnMfD3KvqDJcgF"
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
