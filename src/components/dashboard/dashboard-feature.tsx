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
    "2Es9Bw26WUWmc68fmQnZnHdee5fxZUYVTTTGuXxnUR8JYCJAozTuRgvBoERraVpqjCppHaw4xrgqBJ724MEYcxnP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fJcjjgrLzcFRzBAj1ayNVHz1f9iXE7MyrkgjgoUiSxKpY7SAFpBufTtb8TUtt5TgUHeXWdCVqs1GEkPf5b5PsYH",
  "key1": "594dZ5y7RvjZWVTvaQRhSKNumrqdpaHF86DtDADBEf1Dt75MmKvrwLKvapb2tptwTXfmanhVFi7dcCCsFtNQhv8P",
  "key2": "m31D9gNWV8WeoaSdBjA2WGKBsqJ3JEZtVTJ77ARzBDbd45KZnXUXAP9KmhUkgwU9i1y5uGSQM2YhyMjgELk9jBR",
  "key3": "3c9ZZXLb5W7jHN5KZ8whHbrb8PnVKvaWKayQBV5M94jkZcHKAx7SRE8bepzMPsUETDXvWrTqYnkvgWoP7ra8JLNf",
  "key4": "3bL3wZvZPDk3KYZNFmBvVhx1u41KwijQH4NomA5EXTtdFnv2CrV3oP8DM6Rv2FeKsv8YEysF4bTDAiZFLHNgXJqo",
  "key5": "jKJi2tSekc1RC2nTTifzCD1L7hnCwHARpMgKFs3HmXVjtBhvVxh6GPQ4b1a9FvxHMj5Xv6AXEbVax2Bc9U7EEYc",
  "key6": "5Z5xok7Whr9uFQAJ3sVfEG96YgG9scSDifF76PrkdzVp6qSW1FPk1o8zHNQJWdErvCB8wZ7co43rJ1ey5ajmF7Qx",
  "key7": "5j1WaCGVo7Nsg7x9SQ6Bc2k9b5bsQFXFPZQEpqg85SyyvM5EuaKdSuBoTEodCKPmE9ZSdYqdob8HkGS8Ptcgw9VF",
  "key8": "4mq2wceZ5MEjPZrAUSRmVKC9mfqUpc5Tju1KwcnuLbw5cE2ycBTHv1WooGfhFGqCpdUndwntt6NPqUXiAYm77XrA",
  "key9": "5GuioHY9qJuG9eDXpAawy71q1aSgrvH97GWLq8ismYzEQpMsbY3xCG55WML3XAhpakfAAVqdxhzFjBXDbz4UGbLP",
  "key10": "22CmrrXT6MBWgeA36nEndbuNgiprSP76L6WCTw1YNH2gTL6rm2GGEvx7TXkaBqht1zMM6VBtPDT3rdeWRFQ1Wyp1",
  "key11": "3KX3czKWme6SgNSapTq7QxmWcQXcLj8Jpyev5LGCgADzucjkvsTjcu1Tr6WTVHpW9BhpLMthxjQBHtbDs5CvNNV9",
  "key12": "4sQvDUzrKgZugFRpRg5Bo3Bcix74ZyPnChEZryPxDP6uuhW2jWe1DYN96tyhDeyPqvvyDqqdWCbcwVmr3TUdRzCs",
  "key13": "bt6poebPDnwpa4DHCdjH2rotVUfUD6AyjPDHp6ipygrp4PQV4NJtL6b5QWJ3C49psK6wWq18guhuBsAgMXprwUX",
  "key14": "2X6qCer6XCPbwaVyTWq9T4rdRVMLUMyENY9qZmq6igQANMEcuJMJcBiJ9vCvNMc6Kjf9gM4DdLBPWnd6Xz2evmL4",
  "key15": "5A24nKqDPbRDtcWuh3frmkrYoGGwKRoLhXqWRaMC1jv3KwBXeWjS7YQSYGFaXoWh9uACGrUs5DzN9irappSTnuNz",
  "key16": "3PBcgRFXetianC7RhrGJmLSyV6P9Q5GVjVoHbwhf2M7DGhoioiwRKbfKcRsPSfhENrHiKkbzM3e5otZWLjmYrm3p",
  "key17": "4Wd4cJjkUqohtF62DcJ2wmguS54pqt7Z5qyAXsFEuPbsxvQtmdTkVAfCwS9uxRo82Nx5PkCKFnqsZzmh4Zsw8RSS",
  "key18": "2xQFr11xYo2u7nfnLzh8z3uEtbUKgzbfxK9uTFUKwVeEaX2VBBqqQdpkjmZZVqZQtxRboJAQBh2MRH5Ug2vWQNF9",
  "key19": "2VuVS5bnc8ZmsHDAxXWxD1Azz8u6RKP8VSaafGghs6jR8uLNMRD7TDvjyaw9Lba4kWZh76CWp9xyjdyNjVugApGQ",
  "key20": "2gPrc5eQq34c7Bu2CEJc6u9Ng3hwgcBceuV5pTYNzSqbhgXH16wM4yyQ8F24fQ4yzejHmkfCUyKtGx36Gp2HAzZm",
  "key21": "5hU4mHYD3m54D8P88TFMMCd95jyAkR1UKQg2MaoLBkouoLxUMewSeWBYWq2iP6ge7YmXBkGnbFgf6WFaXsgoEBy2",
  "key22": "5omuFVFKwLL3nqbQetuq85YRWTBJi2wRhuiQoAVouCQguZMxzWovD5o1orud7sy5LG65qNkZAHzAtedWFh8929Ck",
  "key23": "4gkAaNSXj7kVUBqThT8wuydgpJphKFPndk6u2MQcMYvZHa7mtkyBPdYDkaWwN6kJKTZmVLgpk9kW5ic2b1F32vGQ",
  "key24": "33uL76xDW46ETH5NVutH7xZsRZwsH8n9RRhNsXeGymgjiHEufiJBqJnU2FnPznGnZn8Boyzg6j3mLh6597wjmi7o",
  "key25": "52bRuLN7qb2nfjsWb7gCAiVYiHF7qBCLRURSMN1ySYun6NT8Mvb99Ev7uoKGgtQdxjGqJPyTXCVVTyvuXDbnbqS2"
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
