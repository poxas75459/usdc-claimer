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
    "ummLcgqDNFNN7U6G3GCVW3SSqkZfdXaD5MLk5zmwPF5EStkmdTE4U6kMRUoomS2BJnrvZg6JjmHjtCKutM7Joqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63s34RhT2m5ttU7y6iUyd3zq4PrME16JuPAN9zKUkyX6oBAnQj7J8z8XuYgfXhNH8PxHGvCv68bimTEMByos29Pr",
  "key1": "RkY7voZ5Qkc82Jpoh1bKHBeVfw54w8pZVtLEPNXsvFZVZnHhyteK9SjgNdLopxqs26eWsLuqAUmEig9TmRd7Tm3",
  "key2": "UjuDgxyJpQejEzQTQ34qMCiKUK4zHZCGK9guJQthqzjedvMsMVvDBWm7ToR7t87JN5NNuCSMTcTrQJj1iAUfmpt",
  "key3": "2pk6FgaAhuu3ybZgsQcP66q97r6kPPDgq8dxAuLiqjqBsC7GScUyky3hWuqXFFNdtRCP9bBjgDLannUh1gBdCkex",
  "key4": "2X7cfNr7JG6CLRVukbyAva2gwnyDQSXbmXYGpwbNoa6wD54VCMZL6vhBmrk4bwMkK44rSuhiGhNBrM6X46omXVUt",
  "key5": "3x6oisJzEyzYGQXPefGUMAPwSc56y6fFKXSQiNH8Hhcr7YXnRUdRWK7FPLsS2T9mENekwz5GkEgUuaVagNZ7q3hf",
  "key6": "5BNeJicsGicR5jjoca9DDQwUhgcMUs63JLQCc8PF977Q3QW7DdK1EaDpCN8zq4LZ6TS2NcdmeXpJoc6g6Sj4RL7i",
  "key7": "3gCzfL5BNgZ86M7HXBZpt69x862S6GJTaUMphFw9RRCzNQmXXDVLzFAZtmcnTuwagUx9WcLe9C73budFnpPmVrr3",
  "key8": "3NHQvbNL53CftgXTZPa7acJyCUgfqxVmtFbzQqERo3GZtk4nPom3H6y5f5FKJ9aoy3D4Qz2eiw2yHhRdq8BfSAZ3",
  "key9": "2HeMXpt3XRo8CqZHgPxjdzD8pp5Xv26UpqvSZo33vfQHLyYDxaHfxzC9F4vwhbr7HyKUQEZ9LEcWkdLj1HWLQZH5",
  "key10": "4Sqpd92NvmjSXt4SLkWDSaDNF7PbmQWLH6FPVmzBXy8Ky5r6jGEACk4PFL7htmcb75WcrfSX3krgF7Achv8AmZgB",
  "key11": "4HHUkGgHECgAzs2SyP1gKFYSNrm8X3vnzXp3qLG5zz9U2dnwAicX9CxoSobD3CEhWDpdMgkgjjLuZ1hc62vAoe1A",
  "key12": "53k3pf1jX1FVanCjG9PamxHqaJsFhuRXVbFY1vbYwxM8QvBbPk5yTD32dvrXQsuyc1gQ6VXKUCzh9TXAnbNVf3d7",
  "key13": "5Cacev5MGGyWr8oAnqe9KvagAwRViXS3rT2m5jMF6A6CjCHBckgVgBTwBZqvsdhBRejPffLBtmP8anmfrAnhBATr",
  "key14": "57TDeFEGPrXsw3CxUiBCxFBq3tu2meiVMcjqJEPG925KyfsgqtVM4FShwpGCRUCYcRCncPvDZey8sgBqSrqXZF5m",
  "key15": "2dUeU4MyXrfYatRbmvqWLbwFyis1wqrnixF1ZtW7x4oaZFJUHSTZzKEAohe3SRzZHsdr3opeHjqgqobdU5CfRagK",
  "key16": "2FbiPxiBXvaJhjqhDQgJWdiSPh1QaXmw7iRQnSuFsAESBrVyVUEZfYh2yLrMFvELwuB21Wh6axdRiLNH9CgpidbP",
  "key17": "67Qaajw8jTpgLtmWzppS4GR36yPyGwB3pjrKJ3vaeq88LdJgN9SErzbnpjj64ToT3ZVT8DnNdwA6mDk9hdTKh9Rf",
  "key18": "2VU31RLynEJCAMnt8GK499yBnDaiCUMHGSocNWMBaEWX3cdJdAMpMhmhAZDMPVE498P28ze7k7vDYNFbsZvx6rDz",
  "key19": "2UyFaYczxH8wrdxwGVt49n2mbCcRmbAWQKASXKGKnRxj1JxpxPsYWCG4Jw7WXXZkEgVSfWJksYKYT9SyUGGepMF2",
  "key20": "4pwwcoxPAivWr41ZrtC5UFwPE28NGNSbJNF9vu9fkiEXWmRr1PVn3sMUx2iqv8wYW29ipHHGpvBQ7bu3djXzUTSf",
  "key21": "4dFowzYjVUGF967x5dMyEUhsFniNiJiwrLvSa4NmTZVUsAogymPNcD2H3vCqmcYBAoiLjkycTcvsK4yue3wKFtte",
  "key22": "5QAWdnVbqQY9Uz75U9x3qiyQYgidcyR6TZ2AU2msBQAsY6pNPJQXmmgz3z559ftWhVjwZTV3AjQU8TiamBkiKrVF",
  "key23": "3DSGmEZfhBfha9w5fGxkPCe8CXeRGkFBvELqtCwAbn6uy6nDUsZnrcXPc4zHCaUSFo6PdKbGhzQcsr92SpP7QeRY",
  "key24": "5ausyYqqeSvFR5gSLHwY5pm9XB7LxZvpgpk9FL9ndZpq6gVSu6dPkV6FvTy4r8MAJMpYDzMJj9TieG4jN1cmpgJX",
  "key25": "43DrSGmiNnrBek5qwNUEF1hz7yXTHHVkVUNCAUT9snAtj2rXbcPqdwprePvFNypk8pJuywtW4khUmqhudXf4uG7f",
  "key26": "4XcNxWYt7ubJsu6rsQ2txjVEbtHPsWPAufUGBQsBKEYkg1uALVpq6X38vuRTnHhxBX7wYn6oT63xA21fhW3HNXH8",
  "key27": "eKjoAteSiojrUiGxargkdMiA1ipD4WM5K67XZs1KfWPBNMjs9tE8yRELQJ9ZkzgEu2vJcH9Lq9MHQ1jMteN6Zn3",
  "key28": "3yYgkzPB6xJiVo4z61qzBxmnzoeK3aEJvXh5FvGfFBDpMbYBHPpKvhtx7e7rh1yMv92M6RD1Mn6hjiq9ZMHntSJS"
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
