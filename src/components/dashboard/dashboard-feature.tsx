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
    "52uoiafeRkLAB6tCo9KTsCmNJyHpdjrxnAkE1knPq28eFJ5U7BdE3rZfksGDKqREgvYQf7sGGQXYsRVCMmvrFJXq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v1mdu56TPuQ3qziRnWhDfngtM9GMRAREbX2DJ5zV9FFtdCYdujMWJWH2dvUDMWxzBNQCzHr1MPtUDYYvgZJbWhv",
  "key1": "nDgMPd8YEvXJYgmjGhyTVzhLuxSd63nWFhsiNDGiK1XhrygopqeCTtd8KRAsHsi8YR2ZDTunu2TFVGNZ99cgB8x",
  "key2": "rZkJZUgoeGdSSu9NCFDLApigMfwueXJx6CbC4koLuE4uVREhShGR4EqMQS846kkLLJNh3EjqQrbFCaVEgg8YoWG",
  "key3": "2JxMVxkM2o3k3N8WJEp7RJovEoACwUCf538ntDkp1t1Rc3xVSqZabQm4in86Zwaq7roPv3T2KkpTTngzfHdQhmmC",
  "key4": "3dw9qGGVDX74MnwXhz8Utbj3Lh7RqUwZpWfCTZP1WgAQMKrMVJFD1p8cgQdL4sk7YvSnEzonjP3Vb5bhaSW9yeBZ",
  "key5": "5VXWxg82woZYUfmVQmPZmov9jLecqab4jsqHXoXCFHNokTUW7zk9yG1nofpbkhe22qiGdW88fgBPWbXdqJU2Rvf3",
  "key6": "62FMZWf2mkSGz9kFfSHHCWVZdcfqxT9tsB4UspK98FTeoY98QXkhXqTw2dNbsdAxsynfRtGfCkNYasugpE3wk1Z1",
  "key7": "4aZVgx6Sx8nAzdTt1qkANixASETXXJkCG8e4XwzfY64wMcmY2PgYq1oTjF7MMqKS2pcNNgVzZE5JCsv8JweQidQi",
  "key8": "2ZYfhUSWAkUikw6pCE6urP3JGcnzknSANbJZM7pesCWW3SG3VAYT9GdHAzaYx6SXFhGgdZvfHMDm2ymwDJxHgk3p",
  "key9": "3mG89UggwmzcuHvrxSaUxBQhFLi31iuRiQH15nnCkmDGTqN16QYdoLkvkyhTToFGG8QFrbFVtyAnapZoMVERDmaA",
  "key10": "27MeuCV2pPAwY2C9v538r7maHj96ybUzrMXbz7GzjKiBuBeqjMwHPQ1GhZa2i7597E7JXQZz88i4JPf1SDn5UT6U",
  "key11": "5shWv6WBiwEZXb51mVGWk2ddUb3CH1CDBnzSfWsQqd1amKRNq4nCQoXXUXR3atVt9LU6K9hqsJb1jKmfYcjkQN2e",
  "key12": "2Le7eU4QwSRsa8SP11uCqDT9ThWmidDafdUpMfSXVuVLfYW9E2BK6LL2HwPDHZXANHF8v2cXcpWMoFaxtMBTBMzT",
  "key13": "89FXcgego3moJwvurgAb3dsJhJ3qRSP5J7Lgq9wPSCrbgXyEtu8xPV1YJYH9xqAcysLeMwbFWaR9NqRpjEcSL8b",
  "key14": "2r3z8HQu4nTaQcSZ1XUvrftQtErn2Y6SqVRtgSi5w4n5CePRbXDFsoYZsqJnseqxdZjKgMUozBh6xY967TRbXjt8",
  "key15": "ktjBbuBM721wAu6Jn5Bpkjr4R1F63vxRCikspnDbZxFx5yQ8e6wn6StPoV1RSo3c4CiKEz3JV5s4zsWhBshFEow",
  "key16": "3172GcsHuf4MqWN4RUVfx3Ed75eHWbiJvpo9sSCNniuTbojjH1yujXSq58bFdxSmVty3yiGhbSj6Ae4PYGytJinJ",
  "key17": "qaKRN7AG4Yta8XiLsMZBnpvNHWVoe46hGjm2nyXuAiuaUYiEFoCL1BaaShDf1qhaBNFXyqmzX3ceH1PXJMRxsEW",
  "key18": "2Dq7D36y5thqq5GgzhfdDWMtXcDX49zdm46FLkUYbUJQiBRg88WBsZKsUzqZC2pzy7WhufhEEgK9nXqKaiTWNRtq",
  "key19": "p7SXtp9ehQVUMdrTKjSvmeeMS3cFGx6xHHTCW4rKPcjjjEafupr4a9x599xVa7ghWNmNDBvG4GsXDLDGwiW6XFy",
  "key20": "eTNbq3XT9x8AREDPwuan8wzzgvxoL3xfKAifZaxbhF4SEmBgGzcH7M2Fr1i7goPu1zdJZM9xbRmK8H8Qv1Qym4Z",
  "key21": "5xGBvPeuM3TJAtAR6uK6ta5w5PUCw835FaXFBF3WbXg1q9qF4xxkkTUpwhsC2NgGzuR78YjbKU7fhu2MUGDwg8YU",
  "key22": "4TxPVhXERam85rmKdxY41Y8yF7cNzG7TLyehB2aT3DXYbX2ZbwtDyKMS8Sfo4CPzSMnT12iy4SoRGGmsd2899V4Z",
  "key23": "2SpajW8pB3kMbvUd5E9csdSUPzhMPWmYLEBCPkmpvvjA3L7kN4vKsB3pDxekSmX4T8ZYf4E8XwU77NCAVrtienL4",
  "key24": "2zNLQcdwhSGDQ7JFdw819y9LbfMCFPJ8kFUtSRkjjZURW7RyMrB9GgfbrKniWhmkbTURexY6LrhPd1q33NAJgMe1",
  "key25": "4s3Avpt9c2XM5QPnkrcoup3Hz7iy1oj73zckySAsG9s56yQtKNT7amtr5iQkyGtSkp7HWL31nNH3P2swStBRR7fC",
  "key26": "2CvRXwqBFgfz6zTCGHKHwxUXhbYix5GgcFDkQ3mSE17cLqRe3vtENYkaAXuiQh7x1FAzdBCd5eJvPeSWg9Rdh7Wf",
  "key27": "3C4kq8KwU4tR51Bfu83k7qkNvdnZexrz8b5ZZmFsAgNPaSo6knbXw27S78Z1Jo5YndG9DEnnMbpUuKxarxBBBj66",
  "key28": "2xWZngRa9rVCcD5Mq1fihjfRLnGAfcBFFLiuC7VcJ5NCqkVvXLJnLLktQoFXKgkR3fWBtPTPMHjDfip4RYhbgpKr",
  "key29": "2Q6DwTSNkuNxp7qRqy1gZbBDtL5PY9wEEGvZ8bpLKxuLVfXJQ1s1CVERoADGsH1gm3x5ySPbSaLE7Sdsh3mcGwNq",
  "key30": "5efoNYnnyfpoBk5xnrk2YYUgMByRq19L8Agi4z91ZKqMVXYLostg7bUbctN2yrPovoBMd5KTyUqPLf7QZ5AzmrTt",
  "key31": "9aSFSLNr4JCTPvJ4eXThxs3GKAV42kVGWQXYLQD3fWxjtk9A2cCKRgxBGpJkUtP6qnqkcs8vyeYi2ZzrjuKWSKq",
  "key32": "4QJRvcoLsKkDDgkpjMURS6nXRHFAFKtrrmbgXFMkGRb6uMgBNC7pNdvfZFJEgwpbLnV7KZkcBJWeiEVCnAtxBCcd",
  "key33": "5FZfkj2gpKAQfAUfbwCYoYvgZ51PLcCoio7eGnZt1iHSp12D6qbPAJLcFBgFLYDR9pfE1pyn5YFVZKFn3AH4Mjn8",
  "key34": "4zDMSzSD7gBHP5A1TkQW3C3vzSALAP1DALHySHEeymBTB1RHjiRSMFY5kPvnavh6qRHiTMMM6Cfub6nkhjdp4ZKf"
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
