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
    "5G8fkMGo9L3auYW9FrNLZYPYepSJGAvjuyyJbgJ4RX8Jk47NCpgd1gTWKTpGiv8aCUxVUq7ukjcq3qSskds4eyCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xbmKKvJ95qppQsPFwMCFUXFb7DJKD1TGSoMvV7PLUezntk6wGZftMrBj7g4dVNLD1N8AH6U8kVugbVZSpLpx3eR",
  "key1": "65nk3Va4ZH3Zn65gz9yVRqAuhzq52qaFxefdm4pRLD3qsGjXS4V57xaroEu1xhLhciQkWuFf9WkXF5qJdrzJ42RG",
  "key2": "3GyS246eAoujaondzDf5dyhpf4bg7wQnJY3aU5cew9FYsEeNGz94PW5bPrsUjuww7bMFkSksP1niD2oygZUz8BM9",
  "key3": "3h5QxN5hyP47J4HCPKB9cU8kkx3CskahPLCXVKfXJk5XnP6hgQRo1Y3AfVVbMRf5KRBBrDr1gJ2qUDWhXS7j5Qn9",
  "key4": "3cK9sHpR1A4khRXtefMRscnJNoSd8gHwkYf95VPMneuEUrgxmSLhg1QRHpCy8yskc87ep1aMZGf7NoSE9boKKgkt",
  "key5": "2ULUTq5npU7r1MKqUnQTVjGELu5MWhPB8GUnTed1LmPaP2iQQVT4ozF2LJdet8mpRpMoQyffH2wcy5wGLQFsTAqJ",
  "key6": "3EYeHBwXjKmZH5jK4eH78RgT6Smq7RQXg7L3s1YqU5PcZTd1KmnG3BJvCFLK67RNXiaZqipY9CrUYHrZEQiVQk3t",
  "key7": "2NdEo1DQ11kLYrcdzjhgALJe2S2GitDXnffJpfQJE6dRiQVjEmB8zLWqkuryxGdX9VqeXFiu9Fvezr8oL4W57mDU",
  "key8": "27tQPs3BVBqjj6nRVuA8JjkUMMaV6fdYGPoQxERqVJwG8EZ3VLfwYQA287bhUXRLWEkBF74HKhzWJPRgHdTaxuVr",
  "key9": "5axXiH1gH7ycxqLQeTTMZdpJJ2AFXh5W3GNvWhyfJzRLWW61tDS5F6H7ELE8NYNKwEgKrqDgu42SqkYasH4Xz7zN",
  "key10": "5DdF9rKhY1ZYa7gzw1h48dhqmzw6S5WYi6bUGta7zpg7tW7S7kQDKxX3LqTZTDq7bS1nmvpqFdeKYKDG312Lwpn1",
  "key11": "4iNkntRfpk6NihQ2uAEENUrML819VgG36QJeen5SmhS9SPSnsysrpMhz2beeSU4EqvWuyVz7hyPNyqF4fYSYVEX3",
  "key12": "3DUmD1HDD1K2x15r53uxXXMNU4xfMkBGtcCo8vgyCovoP3YZYzmJpKtqQVZirPSq55Ha9U8Dcot6rrPjf9iFeqrc",
  "key13": "3ccQ9z1dUBLi3R2TiBkK1SKaL6HRP6QNudK768vvJfjgEh3E6g2ixs6ecTk1TqB95VvNAQWynuxDorF3tRqPMZ38",
  "key14": "gRDP9NaxWm154yiTHXiaED6F1rYCXnF1LTjrr32YR8ZQE8zwBESkLPmNcT6UuAJHFp7qsSVwsytyvomkzT1YzRf",
  "key15": "5FYr1XP3tUdJ8GHnfZnhKKHKmawi8eNxTbLEbb7ZFNiAfKx9KYtXX9GnS4qLLj22NMyYGi2rtQ6Cfcdqt6C2cBfr",
  "key16": "2ZHPkBPYbo38bUwFz8gT9i6m8t1Z8DMEU72g1L4QWH1FnbfgPW4pfAM6dL8padQGRFKaT56jTm1Vkuk2DTQHDUrf",
  "key17": "5RKC7qUBQNkFmtmBBbzMF7u426ktFNCLWep3L2uFyZkRhBzedxfmUEQzskRLZQn8r87SpnQ9FinkkWEgSK2eDfgW",
  "key18": "3RSV91yea8pfKovndT7VpLXFmuqegG6EczQm7DnRrKcV3EiMiymraXUCHEVMpevMQvf8P33c23ey8yeajCRw2EnN",
  "key19": "4F9gm3FLNPqBqb65AaQYyNuacn3DUU6AkDrNc3Sz2kWZJr8ATxLmAnUDwBj4xasxDi7VgEesp2Av5Lsy7N2p2wjV",
  "key20": "2n2oyXUZKkVZSUgVirQdg2Vw3gwG3i2o3FmgZpvBMALEwYNvUWgv79csPKVD31gJ4MvEc1543Jhb4L428E8y5VCf",
  "key21": "4x5sXvUqG899PxNMqrbmUCmJ48VHReZdjqbdnVMKy1qitvsGx31BdvbJeXTtLqNuQZBffbycWJMXorRYdNX4SQSV",
  "key22": "5utb2piW52WGX2vpgfkFk4jPSxHTZURCoL588xLKwfDZcgHxuNohf6t7ZggNkYwqY4NyRchzDEGesabpfh2KxEGu",
  "key23": "2LU27rqsWUSj8SimiJia95isV6fhMMoZaZHEsJTVt1fY7zX1BUrWvmyYUVqsvkJsS8zzcEBSQqV2Gk8FR7i9J1Ua",
  "key24": "3mZ7b6xnioPu6sCL1CuqWvzSvwFJiuUyR4FR3q8JLvVMsjPYhNZRqos5CijDgUnx5eWXJ2F8g1RLgZ5RiXBAZ7Sd",
  "key25": "36xQyWCGfTZGAdXHHH8uFhcvhNENLBYa8zNHSyjcnBDjDkxQQHrwNGFhAswzopUhyj4Zrtg1LNHaP8GmPhiZnRKW",
  "key26": "3LKGkhj44JRmoHa9CSNXUzPwBp5935J5k5jPnJh76MVEE7w5DP2sYgVHbJMp7mF4ERbVmSCVr5fxjKQk11nw3yhU",
  "key27": "2vX3rCDRYS9Xcrk9eRHnPpZB4JW3k8PCuT59LLnhDAhpdK3qKRDT2UdWSwCDvMmuZNkNog4S8sgRXSqKRgTisr2y",
  "key28": "3h4NRNt67qD543vvLNoDNCiQmvXvTct2KX12HpreoFAAMSHYUhVfe4kSC9aUDUyywEW6JVeUd7Ek6oWVsPYhoTCk",
  "key29": "Mu3g4RFpcyKoet3V8cna3AR4jaugxJEDG11kmSDvC9pWjEtjXtvXc4QPo5C4uju9pvGFa3Um2jFd1RXQMZiXGi9",
  "key30": "4JC2Kfi7m4Yqhu9dHD8y8ajatqV8HFqtb1WJp7xNJcD9NWndYycYfaV387CgFPVpiH4mhDoyxgE6ZkmsfWg739LB",
  "key31": "5rTsZiS7GPSmfjxsEmnMxHAeb6KzvfpbaKyuShxG1dN1pqH2zwFyVgmuphXZaPbGrbW8rDdg342ujdTvFEqvboiu",
  "key32": "5JCjUy3gMmDH9dYBNKT6PwhJTGGdcpQV5zMUg83PWvbqLRY1Yw2kUd5jzmd4n4x6n6Rz4doLemAMLzBi6KFP2Jsc",
  "key33": "nPzg8ohbjqVjtmhnwNpnDygJBGSkqachiQ1bTYv6MCZWvBPEhnkqReQoVPTmpXSQk1Q4YoUCuVny83L5qbF4FUP",
  "key34": "NMfLPU1XHWGzBakVj7FGRCzeGS8TBgnybT6J8YS9wpeZGQxa2rMQ27E5xQ3GyV66Wha5WFGnuKpsnYPBsb7GWd7",
  "key35": "3HdFkWttSMNdYY7wuo19Sy7dxRY6VqM6QfHNYk7Br5JscWJULB7GE2J7UUduMzq2tec7y82QfT3E8k4weSoR6eRm",
  "key36": "yF9voKvKWZiiuLmxpMtUv1frcDZXDQUyU5ygwD9oNHAutqE3Gsfyt3wDDuWrxPcqQNur7xPneFsCSQ5ppt6EqBs",
  "key37": "3P8E5Lj6ZatRRXzFRvneEuaBJ1XxwMQtNkzqtKF3fRzmPKZdNH37esWSGyoid2U935hU3fQ9RtEX3cechyoJrn3X",
  "key38": "4PsPYUnAegCKkurMsxk3ajhM1yaiVQ2wEXdybHXCvy3VWCX8x7PyrNPcLdcELKEvaPkDLAEbUicWCDV1Bi7Gb9tu",
  "key39": "5EWwSCcT85hMEPQ1iTpUkJra4F4vAbuSwWtHgcTcAqFS2tyMHkWGnjZangHG9oMSVtXekg9pQU6fa4gBkshDKygC",
  "key40": "514nzp8EFwyEjsmDFUkqcPor4jkpbnapaJMrDGiyuA81VNKFHT2FhrHBYgH4oho7HUjYKc3hV7obZYXeVNu19ZUp",
  "key41": "4wUpwaRgefi2hBCaVhxtGBD1v5TPwJTYj1tuSFaHU9BxNS7uZQduoyZVVewzdXGrhLDqtsnMSnyH44W8jbfCungp",
  "key42": "4AwZ4ziPATiprLoQ4fovVa7drNmejYwxumZyQRoVHMdf2E6NJyxTpZi7LEMwb9psSRqciR45n6HFUiLBskrrtS2f",
  "key43": "393eXChMZc1ceWcGFqwp6QWm8W93Y1e9fUpGmJNdeFyCeoFGKx1UheDUNfsCVUqwWiCZys8hWqSw68U2V7VD6dHd",
  "key44": "64JXqG9y3wD8U4ht5fv6s7BxUa1yUr3MQb1YvZDKzzwgzvqxrg7KJdrMQTgkPQftyYjCWD7GPwuCnKdhLEdQnVXk",
  "key45": "3wa3PGCWMYCQHqnbun1fwDKE8q2Sp4xKcpbAVynczDPQhaZorFToM4yZzjTe5GE9AzUJRYEyBNUf5dRAnzYzfErB",
  "key46": "Hn3SgUf9Rx3wsbyJBFwKDP5L3wMT4zq5K81YSdupHHb9DX2frZyFvbnq1uu8CMtXsxEGV62cxRKc96VDJKZM98s"
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
