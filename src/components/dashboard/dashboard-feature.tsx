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
    "36uNXBXnDAFkjhRWbXF82TS9Dt67Lx798TpCKvN9swif3G7tEz7ku7Xd9u92nqb6hGh4eF6qY87W4yLD5gkaSQEB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zrERNx9oGbxoTCpxevcR25KaR3zTKPqMTpb5mA3RTHNnrYtkUHMmP9b6rFQYxHPbnysR9pWEchDMKhyhhSBd1TY",
  "key1": "Wiyv9s1MDL2MFMP48veJaPx14rkmqNpkbqbsDeeZysEuWzCnTSXNedb2aUnC6XNQxBoiU86FyNEX5PW9awwhptK",
  "key2": "5ju6X9pcqUzfvH87CbJwkp2fHYrTUrTDmZ4BFcEZVqakfh3Kw5omPFGNM9gcah1KcB7WEomSAZxofjY53Zh46PFb",
  "key3": "533itQjAKun59dshXuvUZK7sj5jGG9eeKFwWsZG2UX9b32SGuPJCxpTY1MgtFKHs2WT9QvXi3PK94Uq1dp8qgFmy",
  "key4": "zHmXgBNteCM1ApAAmAPKP9epFLu8wWA44sb23Udjw4W1sHhsc89MCN8ujDq64yCSfysfAKBBe3t64b7CnLUTWq5",
  "key5": "vtuVNKoe7FybPCeUowxnBDPMnYaV7nfUvoebrqr6hMXY1F9FYRiiusgqus5VDFsNxCDnKb2d4c7Mi5V9bxehxd3",
  "key6": "3dozYpZ5DEwhhzEroWtk42t8eYftQEXZ6aGiT1qbLsSVH32QmxStK9cnF5ucgw73WkXBRjVDmfbLkUjpcsHiezyx",
  "key7": "U2puwtUqh9bWkJY5Z6iVwzYMFZTgn4ZPEg9MVqaqEGhkzSF64wzM77sFhD9kKHrY63cD4FLUdtDrq4F7id1EzET",
  "key8": "3Y14xZWNMrjenxKdd9ru4yWMQWbsk8ovVzZdyJSNxRb1yL8qsip7A1eBtmLa5bjvtUhikaiXwBniL2taLekP1KqU",
  "key9": "4gov8mAJJ4cUeby1wrT5SrQxyDNCi574FDggNLM8UcSgppSJYLybBpxjLAmdpRAuMK9N9F5WQ8bVwURiyzgPNY99",
  "key10": "3TiGG7x2Vw4HDpN2NDeULu8s7e5YDpqWCEhAL3eQEspq21mHcRbwCuWemf26pxcPhVXuA3fGkkmvcu6UShANyxUd",
  "key11": "2A9G1mVoQa1dWtNZ6M8n4TkRWSAZJLchZyERxYFdbrAN11QfWDFquRQXtoAoDnAHiew6kRfpyFkD7uwFcUPSSGQ4",
  "key12": "56HxvBdqDQDj5sV2tUNHUvD4phDmen67N8qwYiDMHaiyWGL5bhDDdssUbvRjDjC9SeTCJweTZwNgEfaYpB9aHV1Z",
  "key13": "C1A7VeFALRh3GVMShaXKqHuYsPAbZrVGDGP5xGmFiZ71gUYL5AGs9YtnhecK7Qpmyrs8XLKtNotxR1TDRJGrTCk",
  "key14": "5oTEwybmXRdK2zMN5BZEe3ADoGf8v3PZcKm4VNZdas5yGmqCDfYJ9YfcDynUVbbfRcNEeSLpU2PP7RZf6HprfcfN",
  "key15": "3oh4vYwzKRmMmwxKMQKDt6wfWRtqntEiNb1HZksRnqmddBaxPFnzDbTAHmSjoTW5PaMhTTkrCcoC15dVECyhSQ8j",
  "key16": "4ukw2u4wXsntvAqccoUUecCVzqDSHLWYu39uZ5sPngWvH3puQNRUUgiqNgn98b47yFRuPScRodwVGXJtgCHhgAGx",
  "key17": "3E3SjLgv1zVXRrPpWF2KtDok8qagvTm9bQrc5RmD18k2suH4EBuUQDDAN863fZaz7yqz8Gzth4smEhS2XfUW3yeB",
  "key18": "2YJ9XP3Dv7Xa2WWi3ApKoafqwZLyu6ar1HQXJ7b1FhkieEes7SG5dK57HKL4duDJY6XZ9b1gfrLVzxFHg2dVUCzn",
  "key19": "s35Rx1wLXY2LyY1nqs9iz9f9aHkD4exbnk36XztV7CGN9VgHTGe7TvZGY4AthM8pJcLhC5BPzDmTFuiShMYZ6qv",
  "key20": "54psCrMgxmMHdaXzsocQ3QvJTXojcUYgBLED9vDmTtU6VHaxf88m4XkASufGVXvEnBWUWZJdMGd4FrpPHWqKep3j",
  "key21": "4D3BZ3ZhGE7wViQPqdpRRfkNiLRWsjxY23KRG6uhU8i8H8QQmg1q54JiXwBo5ULiFtziCvWqn2ANiLKvWKhoiSZs",
  "key22": "4TkpSLPA2V7d7wnR5epkRgBksdwB75oPwoo41ch8k5RRAVf6hUt6xQARmDBqwjY7UDzyJSdSaMXYLsd5GFPv3NCW",
  "key23": "2VppwiR4WPFAwMJTuGSXtsaJXCdFoZDMTp235dkozynaBoUPDwFDth2dVu2tf47bv2JKXbiE6EeeN4ZutTyUTacA",
  "key24": "5zNWKrjeKBkjeZjeqe7Wzjf4T5KC9cmtgQKFkDXstwfuaUC5boM7DPLx99sTB5YpmNAwwdQy8RbyQwCXUPB6GX2D",
  "key25": "7kvdWb3jBn9rwajHmNqwH1pYE4y847SLjFgFankJ9wrcDqTWnDb5NqJMnqk5r74N75W4amM9Xq8dRHH796bqFS1"
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
