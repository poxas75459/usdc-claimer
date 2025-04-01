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
    "5ZX5FiraPmTXu3jSE66cKxTR3Jpg54yC5tyQk8JEgWt2kfMBeaVQDn9jmKVVpjBhPpFrxvGCw6dRsSGJjkWtuZ3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v2n2LT2R6JdPgQTWgtZQKYhdvTzoHsLMFZQgeXW9vin6i7Tw4W6VnwVFRLDMZHtmZSmXj9jZeoGxuc69ZtjmxSK",
  "key1": "HDSPHP6WzhuEU27dKhQxxBhiLLfagN58YoWxuCPCDgv25fUY8QUdjpYAfqg8g1uiVRCyxNJ6UuFRzMagf4b5DFA",
  "key2": "rTc2TtrYack44k19whKjt4oo68cMPHXVvVfFa8DCgYtV2NNRKw2GaZfJ3yXtnAXUu93g4JYg6QtdXwZsC59Ldij",
  "key3": "65cqzQmZ8ibc1sL4nrasY4qAC5y1C4RUegJAC6F1ZDBA6Ch3sV8n7CD37A5JJYLvkMw6kgdsBCrXwkxRDY2pwWqx",
  "key4": "5Ecf5KtX4SCpoH9NV6dwA2tyQ5r7kg3LUnmsSa8MsgvfB1gLFFWrYe5Ydnhnq1NECEcFv4L11dZhKTigceZU8a51",
  "key5": "2LfcPCUmkTAeiRYpqxASRWWxV8UtpGGqtremKCzH81UHxAvZKAChstsZTKaLbhLo6NL2p6jLJugACqaW5wq8GWnX",
  "key6": "3f1Uvt3B1qsTmhDHFXGjsPJe373x7YmcULEaxMA9PcuH9g292Wy1WQEyvybDuaJSpRymYe19HHUdRBrnagbPnJTK",
  "key7": "5pQjGDmwBvSMSGdy7g7aV8ej5WEMvNJuSbKPAmuDmac6jMzLYd18BaQVWFMQphXjqmrfvM6VyC8diWUDEXFWEbdj",
  "key8": "7j7bZQZwK6mksJr57wBWRVkNxeqQHFPbJmmePDPcU1tDBqjFwUEfWQHv8kGXivBADbeG6sTYdGRvQevehNYYhS7",
  "key9": "2TnvS6CqFoDTqsV24fSL415UK2GRA9dCybCCB3h4Mof4qt1QGwYm87TdBwwHpk5afxiEaSVeJ9K4fAg9SEyGaJoX",
  "key10": "5n8zg2xM8KkZBjwmbiqhwiBLrKqvN1eG5weXi1ch47ivZSWagdTSAtXNEcBSVfYgZdxjRVTfEg8HiQF4qf3Y3myF",
  "key11": "3X9SERhXiFJ2M6SkGCnEjyARMT5C6UKCnYFkNLShz7rTKHFnYHSDNyzdBBLWfn8rZW5DTo5UMjT9ZK9KoGoSHc6W",
  "key12": "5XAtw4RLL5BtScVMbhnkqqnLHtWzaiH4TEvUdTXbT34GktpVHypWH8CqnX5ANc2Z2oRbx1SLMvA41FgKMZDSrSFC",
  "key13": "4y8pDtpQXLqTn6HHdbn5sWoFC45hLLzWxsxGCB8zqzuQHaZW5Djp6NTHZKMcCKHYS4bs3DjYvS9GQUEQn13UjMSe",
  "key14": "5h74ywWmXRT5QputnX1KFxw5nyiwRDvX1bbHG21tUnYacxYpcQnqA1GWVK7LMJ1x8oGoqU4xrZtpKEMMavYLHdM7",
  "key15": "3BGiJMwFBUvjP7E1k7YenMghJnG6e6EZHoWXVjbfLJAwGtks8BUoemYd2PkekNWq1E9Jx4vry5LvofDoSHN7oHzy",
  "key16": "2v1PyMBkMBg4y4AhYh3fSLrgPtEAojxpTduvBL1P4pGiSWB8vAd1TreXatUgUACFqsGuy21gT6E1ugFQ3QvaP5Cx",
  "key17": "3U6TWk23n6BRUh98xGnhquCv4rd99FavZc7bjWSAmcGQC5Fgf5jP14qUT7nQ2gTgDR4mBMn5rBUKdWJHLXH9QhtH",
  "key18": "1b7GjBrMtuSg8HgBvQjyk7kmV3VNv8wT2Ty2CHqaym7Ps62jncaNyMKadRDqUhJKZKLSSG7s94NaKCTaUuhRfTN",
  "key19": "61cAZq6prQqGtoRHCtiNh2Zms25jDKK1vQu4iTz7vBHkuDPRQpyULQkDTfCFbUmPjs5tzG5tZCL94HSWord9WSTP",
  "key20": "5RvqW724jQWqMkTaS8htiWJfNpGJx2Ff7TnU6g5Kc4SsXjpuuaiRWevr6QsopnPTSoeCEj6AV7WGQR3okXPX1ih8",
  "key21": "CMd1AT5M9ibqSQEXGmhskWHUP2JtMhjDi7kvTQtoxSiCy2bvHkB8cUVxLbNSj7ecKccmXGG8X49tbfQrCxMRzPq",
  "key22": "2jvhK8f7mTtFtCLW7MKnVMirXsdPiKpPiy9MN8uZFw8W74Gi9CUAdCrTV8UFCir8uvdKEAVZKzZnxDX1WSWX1DLt",
  "key23": "2SZz1cRKd7yYJVtf9beoRmRGGP6AHKn8LB7RVBqiJ6qm1xzMwLLEnbQvgeS7MmeTKKQN8WDM51nGE2n8USTJUzfJ",
  "key24": "5cDAhriEfBmnLHCU9ALQUsd9aaMweP3rAVHPUN7ZsApQBDYN3BTf4s6WiatXH6UZk9PTqqkFC4xv7MDvdjub8afw",
  "key25": "4X1zG3GEhJCpm3LrK7a2s3yJmpsCvqTcq9mcbdb6i9m4cm3uyDW1vrurNPVLv25G3AEi6CSmhi8YMEzuCctHFicX",
  "key26": "3xXju92od4av8iqkGoE6YS49XXbJ1mETThm7Rb4sHmDLUQCfbc6Wz3Uh9UevaXqCQnVD95PjLxZWFSdj69iCBUTv",
  "key27": "2ia1dkUTunvfdpLt9UNp7QXL8xfdZ7LhhLDGQwdqH98nBmHLytxaTX8ziafwbVrkxX2hQLhwm1sjSA2eEUMkuuq",
  "key28": "3FNWXcjk2o9dS1jfdei6PFEHLLPqFSFPrSwsNAVFNvZGWsAbhmL5peMQk1Z1kwHPwbPRiEszgD9jEsNE3XBXisBz"
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
