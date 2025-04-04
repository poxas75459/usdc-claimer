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
    "47pKTFX7jD84E55MUa8zajMLWREcadBpL3EpwYWzUeKvNQR5LNb39uZFy6Q8xY1KuxwEQB7SQzhqzLjqNjbcDqvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fbwespZ2VWXAj5vXhvZY9jsV89sZjY1f1vuNa7Kxs7YbMKYq3ZiXuq22u4ah5Gf2BQWThWpi9X8AN83r1ZYppKi",
  "key1": "3SWwgjQ3omS9edz3oUnByb1XzsBMH7ru1WEVbUXFW3r8G3WdLCjwSuvmgsYQCyyCGsaViDAmM729xX8zoVEfznof",
  "key2": "5UbhRg9Z9jmoff5tkjAb1GTEHxZeWNYsdFcCUytQbC9GeYpVB5sucMaxX3Zs9cB6ov7MsUsoAXAtv5YNezaFf7n8",
  "key3": "5eQzZAzqmyxAPkgrxTFucm1VNR9w8oUy1oFf6XmWGUpJfivaouCgYuKAxKR3dfoFCGNjtYcbYNqDKAJxqmAP5oqk",
  "key4": "LjWrUVwFDqq57LZaG4fiAugEs1685CoeUaMVRoiNe5DMtRdFd6HNtUiasf4e27B1p9qXMNHNDS6NnMAWGTSFP1q",
  "key5": "3VZqF59mg4VPCeGoGs25K4PsMUBimzaApy1UKXo7GhfnJ8Ly8w4b1qbAehiHQb4hCsg7tSBY5SSPfJJAdCjoRMNU",
  "key6": "CzaohSUXdcK5VaJTVUMQAUFSh1Dg3dfCQivGfLyA8nekF1iwaBAoP3EwyhEUo9vJZ9rfivyUMtooGDvDA8LZS6i",
  "key7": "ciBPowUpjZ5C5oT83SKhyx4Qdkg3gcgYqDkgC1qtkPh4kDED6sxSEuf7dNGAno1PLcw3L1AntKPwkasgwff7yxD",
  "key8": "4kFPW9CDFZg2izEGSGVU9rSdTVKT7znJk649ZzYyNaWmL2bJP9s3r245QCnQ99yx86XRRsEY9zQKfZ3Pkvuc3d5E",
  "key9": "2ZGwftgSKyao54yfeXg7QwXiYTaKjr7B4k2fyuf71gwwcbToDqJc36LkUDaWxTkoVF49pr55PXdKRambVFEzFRg1",
  "key10": "2bw4ekuKoFKMqFjaneRMRvkHn27wNBFseJ2NbM2UebfQ8TSuEuDRqUwmML1XbGSahwFFRfuRernFxxah1SQqZ4hj",
  "key11": "5vzYi3i3LvnyHAP5a7BeJ7WGceFiQDXquhdh9avjkDADRS9B3Vkknij4dQQsekbSPGh71PjGVUvjLH2edqfHVuju",
  "key12": "3RBucbFNSmp7RfFV8G4HkxX9KGQCBCEjx21CbNYvevkDou654Xy7xWRZTn3ZpSXYgcGLuUbLKhREmHXqvcVPSDeH",
  "key13": "25Sq5oyhxYNMCbSwCEiC6wXwHzsp1J3YZc57qL6SVPHvuenCfmh94JmYcaiUBpsKYqTR1WZCHEhPHFQ6sAHz4oQj",
  "key14": "4LL7N2vfkPMoZGVV3bhRxs3kYHs9t5SKpGdmDa7U1sM2PSJqz9CiKDHCt8rvr6WrA2AhrsN5kwCEgsx9jyLf5Wuc",
  "key15": "389VEtEsafsH9h8U18CzvjhrxJ7Ut6iNDXhqW7qkG5attpKhaRr51J7f6hBfFnynLwn7PSiqTYiPRkPhDSm9x4rm",
  "key16": "33eQqB93jBn4uKGMVX9t7PPP8aFWbCTTMSsXzcpoxF7J95nFYtNSpsJBBorvGE7sYtdGbijtbBoBqGAAjA28Ga1U",
  "key17": "2oPS1nrP558ApLCze8NtMqdfYCPbZRQ2rZZBREicLvtPubHqN41oAmAcgxKq4yrHgHCvc9NT2WCpWUg8ZpnUqnTe",
  "key18": "51dis6mmCRYfHKSrwCQa8DtviZwwtRrFHAiKP9fyRnYm1EstJNUykvZ7PPL1AYP1xNaHbSjLuB4VkGexLSudtX1z",
  "key19": "5srQNTDorfQ8u8816RrSzxtFszycLpzg6M3vqAjPb4TxX3Pj9HH3gi3Ev7YBdAfRFcGZQHSvwk8d7jiWWBtJ623F",
  "key20": "39a3TFjW24emkmC5W3S35sUhu2jeE43jwcgc3uFZs25PCyMZ538yhsqYiAcjVRZxtwgCn7KUqEV6qRyT5DEcBfUJ",
  "key21": "5pacaoZKBeRFM691o63e7MK6LZUaD55tkFWqDVtsC26yqhNSh2FULQ54D6bNL6qnGdyrTTyzMjkmr8qJU5L3C7gj",
  "key22": "5LPW6U45i8eCi6gHxMjsudWW9UbBzmbTS7CWe1og5QzBa5RUXEYZUXzGtKLMiPSbAdUpvD5R1P21wVEbD4DgWSgC",
  "key23": "hm79MfdcABq7SdxiCH3kX8wtrmx2GsTsanGe8oEUjyLp7ddBm6pvCtqPSxsevsAgNnVArraYdVBaLZdQRfW6o4d",
  "key24": "5pnbDrxMCmGG1zFGAVNc5PMPq51AoHLmessmA8cQi31GE9RUz8jYazG5N1mWKmCvKotSK8PgYdjetSwfektari7q",
  "key25": "4wt8cX1hvNcPyawsSV4SXBHK2vnSp7NJmfpUiZrMWcMo6zoLixivGUiDu2tAyRtqcPk8eh9VuUjAECvMYLGMsqNN",
  "key26": "33sU8Z2kfmHEnPFJRnHqT2M512v23MGTefAppxLUMK4z9ndxKSQ1drWde6FAR6B7XMb1itwfVGQhGwjyb7rhtKHr",
  "key27": "N14zBcQWrVkpazkkVvFbiJhBjorZSC2dVd9SjCrrQZ3kuxrPpjBGkYrEQ5uwu7DThcuGMqKwPGeL78g898f3rAc",
  "key28": "2dViJAWMQDvF9Gu2HEQcTtFv72ZYCcNC7XmoBVmBCfvt8GJD3KvxtpdCfhLivF4KT78e9gAm8KFPcqbviVWZDGYk",
  "key29": "22u2pAsdwTFRkcTVUNre6Z5evVqe1P9UjgarWbnKMF9jR1AW2UKE5cZQ2DD9GsPzxe4aMggBPJnVVrCt88wJ6wQB",
  "key30": "5UZQAB1fhonPHCcUb8BVome1iazu9MB86iSLxRK2reC9sCXnjCAR7gocSSfdAVXzAVu7z5NfonLuVH4SEfh1kWBt",
  "key31": "rQgpQVrkyoJ2qfZDJ87G9nY9V4obt73WW1Ce8frmJQqLA6V6YUn2SqpNryhsX9RRQwkenTfBXJ2s85oQqWU2PPS",
  "key32": "3MNXpvWe772guGh73U1YNN8UDhjEMhxmHRDBFD6S3X5JGyJST8a4cT2dSYva8xad8ZbR3Q3tA27xHFYnJmLiKbrR",
  "key33": "2pJsSBqGTg1468XY5DgwQsczxCfwipJczu9HGU6qjLpchQNBK7Cphd5TvoBk82DaiZns2cCRaKS1U2WyYyVRtTjp",
  "key34": "5HuPhGtzfaK6HU19QittXonAz8aqzxp36qmhuMBJtZ9ETnpCjE8Fsdj7vnfTykWYnQkBLXY1htTo2insESByTXrC",
  "key35": "598c6Lq1voZLQiJKp74oW7oN1Qqge4igwXz8kTp5f254jgYke4oZ9zjyV9Gz6Rqtg73cEwEwK2VonkxSXqXAx268",
  "key36": "4dF5brohWFTXEDRV8QWpCmvgDuKrRwuEJRAxLE7reNthGBmPB3pfFeAAJgiMJ3xTBu3ANa738i9LqiWVBHumpdUV"
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
