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
    "4U5z3mbpEoXmeFHxqzZs5t2RyagfyX1BtDMXreb3bpzA82bUM9iz3Wv5gezNNQbkSn7pY1G5mQ1EDP8tQtQERr1g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iqWtWU8CYFwURh817FHrL8pizyYRaNGYvcWST9Sf8cxLgS4gq8m4cNz9Z54FfBkKxk7tmzoaFNPsBSXjWn39emG",
  "key1": "2HinesZ4a26QX6ahLdLYp3T9s3o5vU4jangLPN1iD37EXbk5wgdkbHL7gaJThGXPhwSUxokWtHRy62wLZLFtpoZJ",
  "key2": "3Jxe3TmmqReJjY8wLeJ5vQYUdchvuSiY1cYStGiKhqNb966LLpBnHA8h8nKuou4ZgZCbKvTJpJY92hE4FbaAzQrz",
  "key3": "3JLVBAoEQGkpgBmWwHUFjMcm4HuN8xV1fmoS21RoGv5moA8MWrm8srwn1E3YxoB2uDYXNZ6F8AM5RC51Xdm9zcAv",
  "key4": "28ePguEpKbi5wAbaQQkFAwQHtYCx5w2vGbhiEcPmDnEyqSjuApqnBYoVcZMWbQdUtjWVhjGRv4KGj9xZjawMqrJ4",
  "key5": "8C6yWtwexyDUMZXwiFeLiy4Xi34RZVF9Wm9uFbqaF2K5DvnJcM8VpkRw9XUfnZ3dwU43WLGbkBSJV49ND4A3YBm",
  "key6": "3bqNp6HJuo6oir8fgPtTakCaMKwxkHpA2xHKBP4Q2trUCbepEpsJWphBxhQ9udMhceDctcwy7zn4EPgp2mneJNiW",
  "key7": "3EBhvYv7VQtGyVYGGJDfcap3dnsAdcFPRjojAPtQY8qAwvoMnmXN9Z9LsY21uTeaKU9AJDQeRgtZAT1M2G4X4ajJ",
  "key8": "59YT17UTPTcKJpwP9SjV3qQwDghsrJTyUzNFwXcf5bx5Vwn8n1btF6rKhdjCUz15e7s7QCeAZRRcZthXJ69R6xng",
  "key9": "xKExNURrJEkPmrPhuwrGqcQsyqsBEcvEJVa6guRL97AcEqU2vDGCWgzmaywfrFynJoeU7dnBRA6zzKNFbP52YbL",
  "key10": "4Q7BvfXBkeyzuvrUKA35U8Cvnkb58CDuCUYbmg6YZ5ebThkzoEuUwYpCn8niN47GjhieoFocxJb4exKxeBBNTxY7",
  "key11": "24Fb9RLuUemjwBYKxU4xxcLy8okeQK1XGQpnUqGAPn4UnpgaLqiwRXzAdnpqarMKSeuE9MGBg4A2ve6cxmZW1fX5",
  "key12": "fx7uTtnvDwwepFk1Krxqr6cLuWf9F8DAPFvSAmHKmA2tgVHdXm41DFr53B5xcKUp4t5D2dYNKGuZg4BhmPusdP1",
  "key13": "3WviEy1mRCCoqHPHWYDpbwuHCS8mGtiweRwovKivVXLRdFuqMhstZdtKyorKwHtD6im5Wkrk7v4aab71nty9cjfi",
  "key14": "4mSJJrNXyj1UYAPrG2Jmbkk9FBG1GMV5QMvD9CppjJk1hToMgeAyaRAaAf8wzq22c1JCDz7njnXVc5PLMWuKgGmC",
  "key15": "f4DWwRgWJqTAGwNjuW76D8mcAPBTAXyGNXwsNoXBnTsdNxDqmQU31bixy1tpDiP5pxfbXa8vn9kk1KowNt9439Y",
  "key16": "4HDRFk2VRhWZjrq7Md7RaMtDJ9SfgHdnNHqVhKtdm525esdjug7TeyS4rmF13BCpwjRgjsG9CYpFyviJkQKLSNv8",
  "key17": "5xATed9s8agVbheCcnVXnERfZNQCtw5sfWYzqzUZKJ7ygMQh86A7TP8EaUwVWpWksWdLKeqCZXmDVnrqiywGTG4o",
  "key18": "2JvMf9SWHHbp29cDJ6CBPg95aVFhAongVbUJk2N66SiELwBb9QBq9fFMDMgTmpCfWh3HkKDELYadAzt76wvChKLs",
  "key19": "4NwsLHvwLZVHiHUQwHhU2hbHeHzkiqSot1ew8qzqycKZPnAitWEoSD17VXmHgxQAaNGX4UYTLuKHFw2CN34JLTp9",
  "key20": "2Ap7s3AXyYJ8RV1cHR84NkB8C3jwrg1My6xoz5Ya4Q2VXJhkENFJZGMugBk11SMygtZtXcS8jYErHYo4TMhtdYyP",
  "key21": "2DCCqoLgX1mepkzqjBekcXskoKB3dBVN9YQbRt5XdcEGTR1vbMnitPzqb2RJqLLV7oYX3jGxJmrCbiu62FCR8NrW",
  "key22": "3nnnLYndM4E5gKGMaZVUzRfSdgB3GtR4Fev9zVcKh3uSQRoU626P6LWK92ngumDU1dCBtbp5F1bNjq64f2ZUpm6B",
  "key23": "u5zF2kYfMBZBTvsZ65GyVH8QLR5qVj68QREKzzC8ECEmaFTFKqsdyztrqTb7rVqdCgS9FcYkiYVcBxGshajKFn7",
  "key24": "5CDt6DWWhz4MbH66WdWCMSKfaLuir94KW8VfEQvhWqwWFxRVEgouFNnQvHWQaQDYNWS8USWZdamspSHC9ji5ie6s",
  "key25": "5v3XSkTW6PkhcuaiUNZ76vrfySGNfes1TUD128kQpUSLhkRFmrgGK9kNZKTrgEiwKrqLdPPnxyaGSAg4hkbZgQ84",
  "key26": "55ySurJQpYKqdv7hmQsdUtGoyHsF2AH7HqBgGs4GynXFRcmXDgMgJ5FWmACRr2t191Zo1r256fac89sZd7AimnDt"
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
