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
    "48YhbA9nD5tdbjrncTDSSjfeSCtNqf1cDHk3xV8fYQ1JE3ke58J86R2K5jDxYNLqVqfMJJMEtDYZMgNeHqvuafkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cjEHPUfXicp4rycaxgxWy8idVY7YQEtzk4kWZp2nJ21C5dfHpyKVhUcgfwUezPiGXJyLxwRzPuot4ohEw8BzFsJ",
  "key1": "yBqvBREBJhhqBRBCact2SoGPLAx7KPxxZ2JosHLdzKPPBoxk4oibK87H39JpU4AzJcJ7FaBwRwSXiZhHRVnKsH6",
  "key2": "65jKQhVy75jns5rF1ngpxTGisJF8RZy9GHh3z791GeWXWVm3uCRU6d4UAtpCQY3pq9vKBWWh7WMSwDa9HkBc1B9C",
  "key3": "4bcNCD1yaUMiHoKBotC6JeHANz4ZumuDK4a97zbSAFtd6dBFDuRsb1q4R8P9o3fWmtBVnLMwSpkraQ4WP3DVBYxz",
  "key4": "5rRp2u5n4Uvoudi1Z71icEqvHaUMm3wBdhP9aytRstEeB7RTkxeH6A2jTwD7kJtgTyhSamuXWUx4vkZ79qcrN2pG",
  "key5": "4hAPMpF7G7JDdHbdhy5KgRSEXBdWZJKoSAm83VGB693JXmQQ2JydVpDokGpj2ShhxuhGmhouRhtZJQGZRwacFxgy",
  "key6": "3QYioHemQshRs4ivDoUGU3E2wERwTxt6AS7x3YuPyT8igaEjqnKUpuB7NkkYqckaMFeaohfC1MLhv8PLSDwRSNGQ",
  "key7": "BybFKK7crDv9rRFHoFXxZtVWSft3tkCr36DYYd1hxGkhNZRQcS8GjqkbH19xtJRcFM6naaKJk3MpTUzDtT52XWi",
  "key8": "4oRFfJAfkAtCVR3VWgDNQdUDpjSjqT9VdnXV8f55mPh28nUrh8Ytmgzh6uzeKNpAUW4VqhKjEoYiyEMiawMXspPt",
  "key9": "2H811CcKFEHwx3b8VKaYBdmnqca164vce1KkkCRJNnTthbfWNJshR3ZrziAo3bGvxW66JraR9DPzPUE9dVUKCcgr",
  "key10": "5cP8ZyUh21HWWJDTXhjXdiRpmQyNzPm68My1WCeWBfSN6MJo1U3X7ggQnPbBfM3JviwDU63iftpL4rFGEdusPsjR",
  "key11": "3jVyzZjsxRt693agXYgE9kv9cvypPmY4a3S5KZ3n3fQbe2VgUqfHuH42b57Da8FhECEdoJ6pa67paHkzskwtfqWe",
  "key12": "4PZkxW9Am5yZWkouwyX962qiY9c3MZ3Jp2MZVcJxgbzmjXUDpNNW7ftLC3JZ4UNB8sUmDJwgp3gEaEHP8vkCyKdQ",
  "key13": "3P6c8ZPARUjpVxRWJdBiaHy7qyvrffTLyrZPNWt3Lw2RSRk6dkaU2Gn237AgNjkMQgx16bPqS3iyDCVkv921WZGJ",
  "key14": "3BoahFSM14eQysMyx5Dw8wtHA4uXJV9hJbseiomstu7LRJ1PAcyJsM2kxCiLxD76z32XcUJqAT2hHy2H8o6Kdn4n",
  "key15": "4NWJdisSxsgBdQEXfAgrgaveaQaNo9RkUxMLLf8eVniDCz9dwAmuzCW9Hf5zwXrArsfry69hsu3xLzSS1TRYsqmA",
  "key16": "5TAjcF7n3ETaEK6obtoNEqxNpduyBXZ7LZyPvBc9byjh1x2qAUSbxAbgh4tV1uLLS5a66UioSaCwVHqGHaUcbe1i",
  "key17": "5Wba2YX9nkPGPoCXqi4pJeZDxKHiixBuBNA53nTzcxhcXqphgCrjx98ezmuz7jPA7wACoY4rYzUNC3tugzdtiFLQ",
  "key18": "49gSj9Ff7v2fUmAvqcsgmcVeVnnj65hPcwowEPnXgRU5NsGfMwTUbkLzM1XxUnKBaajA96iGY7cpxBZ43MemGAaD",
  "key19": "4JjYFPvZyUMvxXaaytb2TzdHNn9K8PfceisjTFiXVxD2DdrxnsaSc5NNLw2F5DQwjvpdMh2r1zSygt7qNknA2v4N",
  "key20": "2hnmSMxmrCp4du7Upvp33qDdSFJDaiV2d4SA1XyrBjXC3Ehop5rFUwPopREsPgFVKGt1pGjcyJVc4g62zdr3cqEA",
  "key21": "2ZcaAmmswChaAt9bUv3dtF54MvJrGSrreEdKUHT73vYC5haiJaMEtGA7g9HnQAhZwmjzvhdpXMjy4H19Fbj2oahr",
  "key22": "PRsfpdQLi2maFJXegZLQz1KktDYTVwGc4zsvk44wuzE6ToFLWmLhiCciLrndkA89i5LAjURKRWkUBnQ67edAzAi",
  "key23": "3yGnwindX6MZstLqb4NhRXSDRzcLAhFDEPwEnQJeDFdS7YFLpwTHV9cVNGiG1C6ctsQdFcpDNQ3qMZwRkfL1dWGE",
  "key24": "3d694xjvCzDmFrUyFx9z3NhL7dV3iQpAYspoZpGzCwAeP2y1QPdJFsRjoweC6VvpuBrzgPJbs5x6yYXdutw73Lwu",
  "key25": "38BXdN45EbQNDEiPd2dVrJGBXbkdKMx5m4xFKkQqGpXJuDsCzs61Kp8BmdneckpLEZY9UhnaLzYWCxNm1sAoRUTp",
  "key26": "66Q9CX33KXwUpcxxeqVRSjDs3KhFSQBPkX4avBBV3M1zyFcWhxst3z7stgPk96sPFHj2uqbF7oJz68qD8Cd6s7Vi",
  "key27": "DgzguoCvkfS6WJF8mNWSWv3qdz2AxDDrnKFFr5Stc1JhaZQatRsQg9yng3YF1GYjY7Rm298DLFLcH2XZuCsWoLx",
  "key28": "4U75rCHW1zfwLq7YDhQbgYVGR7pkgnxQJrKaogFnkirHiEXoAWBWtWXdLC8SHQ2PyCVFFbuHwhzHzuucjWm1HXkT",
  "key29": "2TC5kT81puBHnMWnQHBz5Pd9X5ZndeopYW98yHG8ixQkKGqjr785Ve8jTRDqtmbtWTR46DtdtaxyfCW53N4adVPx",
  "key30": "59R6usXcbcoLvrRbPuWj25iGdpFkFbHcm21rCA5D96QSr2kPvFPM4a6VhherQSqf2KyZJVHLmVXBff2UzvWV9ESZ",
  "key31": "2xTaexadPXRS7NkxpTZJTAWobrRX66LHX4fTeaRykoYiF4wZ6wMCoH7p5eWqRrhPm84gwnhYkFds4Te4psv6swFB",
  "key32": "wyZ5KgAy9gUKFUC6Go4NxSr1FUMbL1oHvYbqEbWPXmXrYggTEAnS4tojphT14fNAD6JF8haA3SpD4KDsbWxcYkw",
  "key33": "2TYNhZs9p1eHHpLL6o9RgQDXeNjPvXpNkwP23roxwsNpFrhuv7o8eqt9PPeTsMnTj7nkie228a8yoYqq4UnCjisV",
  "key34": "5QcVP1NbvjRdB6wifnkG7e63Nv5vFWLKB8x9M1AuuFjiSRwApe8FE8uGzPewtbdhAgMNNqYPQKVdd7SSx9PhsHdg",
  "key35": "58vUG8yiRTTx9e9F74bWX1J8pTcmaE5VWR8GbuXeuxmDmxTeNE6Mb7idJM5MB3LA4LQNEGjXrNsxKphtfuU1xZzd"
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
