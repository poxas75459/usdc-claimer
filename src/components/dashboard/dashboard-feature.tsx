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
    "5ScKzGTjZPnfj66pYEZ41RG4TvejJeqCt5WBpZrJgC5LxULmAe6EgeJN1C6HnNdoKgbBTekcgZxQCGyGMAfo4uwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EYXF7Ci4hiwWjr3ueR39NntaSKgpWZEqBVaHJKq7nqco5KdwYdJsfo8xSjCFnpiDLK5CmThGbq3s6Sci74kxg9N",
  "key1": "DJobTreVU3GCedjdPotKyLmrVgVakU14BbPRkVBsMYujkRhTUNXHGUjq7Z3BUBchY9TPvkuaR227bxHBhMKcS8B",
  "key2": "2moiYNPb2Wg8rHtBo3w3iuSqz4smCrJ3S4hHuhpjbCUsFzRoX29Urbqq8EYVsYJtZwoCywWn7XaZGX1t8BH76sBF",
  "key3": "3GXrKPxVNFf5x9kPrFhRs1fVNBctUUmWBQc9WMFJUWNsww8rhUiGzUYpfjTwbVhY9sebkwjR6qRzcDeq72hqvknr",
  "key4": "2BEQPeKumW5wmJaNRigZSjxpKJaWCNwLpqQTbJCRqnB2PAPEt1LHxTSVNaaQKJDD1w6PL2pRuwxcfhHPWB2ayKW5",
  "key5": "FiexfeoDt81axU5ADmdCubK72LWDNo2HX6kizf7QKJYKbok9hmhQ6o5cWDkAwfKXdwYf7trHhSrMkZ1EkC9GvDX",
  "key6": "5Tb5XKaumeoCJYjBsuxftpxp6ycmMR5pkZdXHZRjn4puuhKk4UCTgg6JNcu9Qifn3fUebrWB3gpZ8kWLSFSFYZyZ",
  "key7": "5tcYR37t71movhT7tTaQbTWi4HccVvFtbL3VW8QmTByBxSu6aRDB5fSEJKDwu2rkTbKxKvSWZAxeKBKEHu2oYgvr",
  "key8": "4LJcF4GLAaMwKi2yMyN3DLgS1dmNvwvx7pyLpGGPkUMcfyf1qiihXMtJhJhcpx5uWwPXfKvyHCxnR34LrKq2oUJo",
  "key9": "5WMQu3fGz7kXvbAK5qbpVaiqMHab9pbHdhySoCkvwhXvrCUgyHPXnPU8tPc5XXkot16NVsifNQHjQ71JzP9rdx1J",
  "key10": "5ZbW9x57NGm4iUbaUQ7M9sLfKbsjZVFq3LP9rLNfSiiE3Xt5VdFqTtB4ydQbhzgvsPJUmBpPGx5zn4drbn6upXG3",
  "key11": "PZkeaz4WkxyEb2X7xZcusgCRSDG3K7cTFDH2BiHqVyT3RjBvngM287guJb2pB67oN9LVAanCUgtXDJCGWwKU57k",
  "key12": "2ZUv4SwYvsm6CBXmEvS4519fQefrU3CeJC676JBqQLaFjh17Co9Coavvs8uyBYDzstnXuPmQiMyLfoc4V1oWxwjT",
  "key13": "4nYBz2rxW4zVCZR4ytg7yP5ZXC5Uc6Rnqh8przgsmqo5R2WL24wArftBG8UVMFVuBZpHtEsMzuZ36pB95fySKvuK",
  "key14": "3CyKJRV4sWUSDPBboHBm7Fn4gMN2jTK79yzb8tq4f8i7D8PFLCXT7oab4oRUqAiJqU5BBJzKVZT8nD36FdJAR6bL",
  "key15": "2s2Vr2LaRFSGWCLdaLApe4dwurgJhaHcD7MmdegxryKqWzCkjhHAryPnbqkyTEb29TbukRawxtNWS1s4h5C9n88s",
  "key16": "3SqJFFi144PEfbctprU19Ba5AYLKuDWLCxYPwW4nuhPQ8sXf6ydEYSvUXxkdqisYcAPh2SA3U4zqf35R7vmJnQjn",
  "key17": "3nwzSKAgYTkcki8ekQUMxJgf987JsEMDskYTRTxiBpa7Bmmd3hWpvRnCXL8raeGBwsEMoMHHq7RAdMacmsvk1W6w",
  "key18": "67HWJG2Fz3pfTsAFuhQQ3wgHtvq7zC1vsiFzMPGFmQsDDEhuvjaoAzCuCxfv7ZuEkP72tFAgvKtybeGS7KfFASSp",
  "key19": "smK5XoRybDW7u5wn634279vJ5aG1ZeSMqXyc3tBM5SgyFpoiK1BF14wpFo1LgS392YgSt9TwAay1TicirdXDUxD",
  "key20": "2t6Vw1zJQ845nVce7ZoyeRbfjuo2JKrta3eULYWw2tMNoyWsBCCbuDYL5onutQuRwtj81T5V8ziiz1CXZbvwX53P",
  "key21": "61xG5CpbumyQsCPetrCDoQPv7M67J5mEZraDdxgascTyiNg9g1XmuDZeqjg3PApgwFcx8jRQEy7AjLoT9Q3PuPjV",
  "key22": "3CSjQkvmqFcGmNBNoCWXzAzDsUuovMzfxmoD94DB6vE7d6sShqtPuEEJT9zj8Ex9GGUVHQ6Uy9mw1yQ6uP3LarQN",
  "key23": "3rd4t5Mv4KDJt79o9VzsgpRFWxXUjdLUkfMoXjXeUoh5WD4xmcfH42GE26nDnGgnf33oHX8M6kQNEjvK3Autk1Ev",
  "key24": "2aVQuL1x5qMbXY6NdYRq5WfS6znLHekVo1HXz1p6vE8KPvt7i7DpH6nXvserDgcip1NMeGKVva7Rzj8BArDU9UEY",
  "key25": "3FpUCHwbKYFPoMJLpEm3pxb2TVYCqU4kULrLqcSXBAkCoNhXybgj2tCsDmVHyeXEUY8DU6ykG4EMvWCszJoqJ5MD",
  "key26": "2X6AdRWeyPq4F5QRJn122TzFq4zftYc3H8MhjwyyYJN9y14Gm1XwiQjQA4ZZVgEUzawN8TCze5JRkDu1bxZ3RdoB",
  "key27": "fa4gUpkuQodJSqjkf4j8wLUrGTPJZfpEuLAMokU7F6Qj3BzxBfcSziRGABteo5a7qc9Bt8qddiqtWWrFM87cqqr",
  "key28": "3Z4y594Vk2cpdUigqxgg4xyxsiurXVzSKHVTXsHnThypYNL3vzxVLbay5ZXxeGbnyGqrV6ZUMaoC89BkKt8ENL1K",
  "key29": "24eMgyZJyEw7fCh1WUiu3oEpXfiWUrWyuHWULRcmgXnGY9gLkmtNLMmg3WiQf8WgNVCDhY6q7kMmHQfyram39qUq",
  "key30": "2QqP5UhsnvP2xhm1r71e6F4FatPZgHxKXgTm1VDPPkf7EAA2hUPBviPsTaN8zctDW3Bk7mbQzeURQHNpWxX2XXCP",
  "key31": "hnp74NVW5J6wvUE9YgHdpLoS2ajcCvc85WPqshEhLeHKS5Z1bJmhC3wCeSCngSQs5EhZ5rLdXJc7uRabuggQxc2",
  "key32": "5Pd9vzpqw2cC4wGUQwKSqsREpgXujy8eY2xZrgsF6awXSj7dmMFSjF3mDMGtsBRRzNAMA2q3bveLZcKRF84ABZsd",
  "key33": "25Fpzk9Mq6pF3hB3Rhpyy6x5kd3DQg3RZVnvXi4fumGpsTzQRM5fevbn7Gz5g2aPb5uGCAecF6uuCpKLUo7epv4Q",
  "key34": "5d7yrZG7dcfaDjTF2UyRHHzvWSpxgNkVwU6PhxXosj2HVBHnM8LVKNVGeD2XuiizgcPe2ok5x7XixJTekPHUoLom",
  "key35": "4v8TC6KnRswxpmKH7mCBQxYsK2R5GQgJkP9vYm6zNbLpAfWSF5tQwh6Skrb1swD9gDYedhbra5Fog8CZMNkKp9c5",
  "key36": "2fvmN9Y88QrFaus1NB6yLMxcivdJh7nyHeAC3yrJftjfJYePvWaBG2acTyqQs2Km8xvSGXdvM82v6votuq8tSXtR"
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
