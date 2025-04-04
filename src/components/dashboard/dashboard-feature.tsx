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
    "4Gc5tWmWGYepjf8bk9wq7zwejx7Joi6cYMnfhehpKzK9H6nMrpAiaoajaxKE4QRT3XSaXnXbHpJLtfJTLdTjNCod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ywRv6C8MJJxnTT2m4jkuUmeGUqd2EDrob1Xt7RhHL8BX21bFJ2ZpKJmvNNU2CC3KVVpxfM6ggWnkbU7djKUyHU",
  "key1": "5F1mkSrHWxLyfvyoxXYRoXPU6TiuLLsVYCsSxPsTpo6MDK1PzCNzfvTmij96ca5EzATjSLzSuUDoihxCWminQQjo",
  "key2": "4qSiPN5kVSHKYiafFtQA5bmWUwmhYckMr6RtEvHmzPxxtDiXcaASBjSqeR47tiAWLULQqGKA5CRUeDuxtiUWMYav",
  "key3": "2Lu2ScLwvXiptac2M3M5cpkCfe5cy7XqFbSLNDLzuVPvJTxiNdkNAtSHvfmxZDmxwYPjhSAeTRajgusJdi1zZGuK",
  "key4": "JDMBuHvhPQvteFZXHzWwEHBKgEdEB5u6rY9D5YWRyprXLEnyh7d99pNxbWEc1NVhNGQjqk8dkgAs5EH3vPvbjh9",
  "key5": "4XzBkpG7KgkHmm1iYs7exa2mSMvhj2fEmvb9NQf52J6uWQ4nLE2jiQgSUNJXyNrxk4KsMYCffN637xUN9uACs138",
  "key6": "3RwsTBPaSDtcvH2RKXiq3iHpMxPhRQErwNsYF5BY1LWS99G7qYtE3PcAnA6dimnG8orZH1d7LAfyQ7saaQin9z46",
  "key7": "31wnsNnv3o29KkCTG2oPex2dtYHgVKJ12P2R3r5kpRVSjySWRNRCLx6TaTCcJeQBLQqwwq6pL4WzP9dh6kdTiJYE",
  "key8": "5EzFxmHozLWRHzWrEiEQXv3ZpBur9q1fkqtKLYCEtwCKrxSmuxWj4vASfwsCjztDiywRNceBbzMEU1fa6z5qLGqC",
  "key9": "5kaNRAKQqLvuxa32pKuSFDPwNnZhkd6qimZYHWnX4qcs2HW2KzdtDrc65CkqYVTWWs4QtK524bkFUPYEW447Yrxu",
  "key10": "5WH2PP3Hrzfmhi3BprYgwYHLCVA82QDYHG9Wqvq3Cf9ukpqJxzYVgn23eZxU6V7hxoVPbvHpFCJx4sDFSPeb23tw",
  "key11": "2BZk96ygapLCWyupkeyvWXpeS3pkwXVobLtZruPhF57nqvsD95Ayf2LAdpD1ePD8c3M2JKsXhpiqqntPaAukRjg1",
  "key12": "4Wxu1wNjPL96pDE4xUnqydBQCK5BWJvMRdRiLM8MbMQSLWxLNzcLksNgwqT7XCQueNNghsnHdtLEtcU4wSfGeijh",
  "key13": "5tUTViK2pZD1p1YL1GwDPLZ6Wn3xTwUkMX3GqNuzH6AnS61GJwxxi85g2E8dZHF8cDJyRd96ZCdYsWJhEQ2VbhEy",
  "key14": "4SECdSSUktxnAgGjPtefCS6fNVcMNsYzfFuzxd27xnmQXU8x98aTVTUVuMMq4vPRaPqK56t8Lgjn25zUocEQacWH",
  "key15": "4qnjURFTxLtoDPnHRH9LZ8evGcMNSn5aMfcL3FFzFQY5cR9WZXauB6wfhMAf1jpaKfr9Ec1MU1UGVRUTtgVVhqEm",
  "key16": "5qvLrgVAvkRuu2FtTeDweDDTUm96Dyhx2nJVx7nL2CLtTmWaSxg1AtYjxSjo8KxE1BJEChp6fPiU2WLhnw2TPppw",
  "key17": "24oQYYeNWC8BtCmLtWqxmMjC9iz1WzLWi1beSFRaLKPZyXfrk8Hsg8p1bpVzHrQbasiX1Gfr8BZ7HKwSw52Ch7BQ",
  "key18": "66cj4vohzeZSdoAKsLVSY4phSGoRAFiYuT8di5dqmGVB1fAfTQHULoxw4Bq12o68pQvUayPTYv99vRABKgQxKQ4x",
  "key19": "5yju7NLcq5VkJCh2STjb5ajYcRtwn4jY55ytauqzjWonmeArGTmc7XTAee7SeipoxVyR7fCJxeguTvrEimks5rXN",
  "key20": "2WySoC8zsGpETNPCcw79bjujxNnSKTzxgty7FUk9EC3creVvRWioScYkGRGUN1gYrpuZQR27DWGbNKi19wnD7PxK",
  "key21": "3wRVnKdQ4rLJcFviToZVuCYWWDZsZkSSsT4GCo17L5ZtqmD5hSqPRoA3xU5TWfRyS1EUoaiEefTAbt7yeef6zCR",
  "key22": "XwNDD1MZzxHGEfvwbyqauxtYJh4Nvmhnpb846c74vjN91ktyYMh38cn4RJFkQf5WF1vdf8iUAsSxPBA8oas7bBi",
  "key23": "48dXMkSYEa31ZiqecKuAe1CgAGptBZzcfoeSUrdKySZJAJcGRuXVE646vmrjvjThj3zAVSNw6qq7dKmXa6Gt8kHG",
  "key24": "3kZxhZ6rLbMUEzvHGeYbDfoTSoZUZ7xj4yg4eUkxo49HCvbNTmJuoj3m7oaATPAEWEtFCVtkvA4TJHPnkqx1DxM1",
  "key25": "33jpnja4YQTBpQWkbkG8PysRv7A396c9x2fuHjjw1v15ZC1JadiV4EmHGDjwK66aFoauhfy8Uj1Xkt9fzfwUvZjS",
  "key26": "2qhciZEdpf5SaGUGyaznQwech29gzrTXjfMYtCWnDtPxggxBr43oTru8NQmpKbaYTSJXi1saUxWXmHazv4eV4bAm",
  "key27": "5e3fxYSTbuAUPUknDrKr9CyfVZKbakeSrKHwJiNubn1Y9noiC4ydSYLjWpvSYVaAeKZWpNXDVjp9oA86vDwz9YXJ",
  "key28": "35VnHo3xY4aULXPVNZ4tK76qmQBkCr9eGMVerE4XNH8f2zEHw9BEP7dz3hnpoHVHd5ntE518aUUPFAY6aDiNHHXo",
  "key29": "3z9EPzY4aFU3HCQS1d4p4hvvp9GCJHuxQh63qE9EUMK7DhtiVC19RT649wV6zAH6NW4Jj28wntovLxVBqJiSddNP",
  "key30": "5WshxD7ZnoVw3U5bfpxySaF26zLAZtC6QrsXw4pWTQeugVSBXENh2qpCaF9guJq1xSY11iQF5WQnH9GkNAZMk7UH"
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
