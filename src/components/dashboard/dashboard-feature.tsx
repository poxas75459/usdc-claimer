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
    "3yvm9Rv3MZbRAdSoy8FnsbcpDEAoA6PuQ5jERBt3jHAFNe8TVTZru3qjbmNfmr9pCjYgd3aQSWePn7EjWeThTYqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ryvxZ2TdDC2aJqQ1uQxt86b3XuSwKqjuEVBQDojFLBGeR2umVw9bCxyAkFzpPnfun9conawy5XAEooyGbh337pw",
  "key1": "snoPHhJcPbWJmg7AP9VaYBEzvJU4Z5DW88qEcT86Sxx9TQDAKufjLihTLygqBTQZuGAAxpZzGi5Z3ZCu3xgeSBB",
  "key2": "6EuUJWQF7Ks8b2UcoEv1f6QuoektTqbqz6Fs44RRU7mfnC5bxohv4VjAoNRhWux7qBMrhsF4M4jaKcxTik4nRTG",
  "key3": "2s84B5JKxbbT3xb1yrbRoM8mtHvXt5UUyrioAqyixTZGSXiyRu7XG189kTHPAHeaqEK5szuygrfhUMSb3YRzgXU",
  "key4": "34FyPSatrsBbkkPLUfyx6gXehYJFYZDt4nBxDw5mYX8eXcng1GRRt8NZW6fKjRUXB4kg5XhzTsEzQi58cgvt4qjT",
  "key5": "vAKDGCsWvyYg5g7nGXcKpxTamEdrPwqE8rNzoeJN7x3TB76PaBLBkzvXYX8X2EX3LuFpMBN5ujXuYaMrK66vUqj",
  "key6": "5qY6wbQe1HR5eET5g3gB84szVc1nbX89uKXmTQQdzRV7LpawG7MrwksBn4kK1cQvvcA6gH3sG1VwCyQ4dkMAL3cf",
  "key7": "4B4EVndYKrAH6uUrF584e9KLdUH1x6RYdq3aRDpoeoyUJnjBXn4QLRRxjfrSsMjpMkpyWJn7KwgoZYNLuh6JqXVk",
  "key8": "2QxTgiXNyMr8rNf7h36gLjcUD2U8B7UhHYMSwvxE6bAQZv9hQhETEUKGMe1jFxXxoBCzDHk3NmS6hQRnT7vsYEBV",
  "key9": "54DQgU7fCqKvQARjWJnrPCAmucDGtPZJRCk4PpEsQf7DmWJyh3EXqoM3kLMUb9iUY93V6PbH9xaH2rZRGa5wk1gv",
  "key10": "5zyKsAQPMqq1Yw27EDMrgdDctkwEqmfhRczzMBXENjKd8AFZVErzJyBs6mcFvhBLKm653AxquYcEFrqxdLpR16SV",
  "key11": "562sxbohK5ZPzQJQxr4oJHzEH1qjhvfzW9AAYsRVtXTTDR2dVVGAQrwBp2AeFxozErDQEZGhMGuYhxz1Uq3aCWyj",
  "key12": "4zgAhLYnfyXCeDGAQ35PZfWNwNbpKjWVtDHGjreHNMKZrbJZnXhH4B1V1Pgv2fqg8yzMJ5bh1eKnzDJofiELNPvQ",
  "key13": "2c2QZQNkkoGvaAAQFnkDY5hjM4AF5bsJ6MtFcnX5i6JMLLohrkoN8yEFAMFC4W6hg8RyXmzAatZakga43spmHzyx",
  "key14": "4Y8894WbUENtHZwrNbG5hHyHqiKQwjjkcBjx5GKsakwSjw1a9h2AKb137SqHj56PgSc9VFZDG2z4MGavqz3AjxA5",
  "key15": "2aphxfETiYcwoHTZBUnsnmg26VDrHXgi5AFc6d4HF3vvawETE2rEuAGhBbfw28zCVDWXQakWzMa5MUCsRCjsMd4h",
  "key16": "4aqDF4ZZP33oSfNXx8ufTrYR1iMMsmmc5r2966w8JZb7WMX5b1B5nSc5eaT3xdzZCW7CjrMppzwBAx8DVqF2zPCZ",
  "key17": "29NBUwGMGqkxXL31HeCtZYeYYTXErd1KZ3HPNDfbeLiRMAMVjbE2RhUqn24MtojkdxBJMV19wKhixgyNFGikwWP2",
  "key18": "hiEHofzptLZqHtXFKuLFHQHiwsbbQj6axVU4uxtBz8CUhh81pmpHG6wp58V8CHjwonty54TAo6cFACGvZK6BtXe",
  "key19": "4rwLbJmL3c117eHfSVBdPMxy9jUHbAkTZ2ituzTgFjjjCN4oKkGhjvtnfJrXAgQdBxyjGCMz5ieLD5CjrtKJdi6o",
  "key20": "37oFVFzUdn8CKHAphLkiMQLJMbxzw55o2Tpq5wv3ky6GqwpHK8DRNkQjwt6MLEutvoVDJx5NcPCGhfW5RGUzGtv2",
  "key21": "4dKG8dRQVGpFunhB8uyMc4SAo7Y3V3EzrKei6jGQMdT7o6U5CjCc9vp5A4j6hczBPd73k2ZnwihBcxLsBVmL1SeF",
  "key22": "4hGL1zbKULDoiAPzrmwDYkwm3T3L3QVjLCtUJ7YuPUv8VJGam7wqGq1msXDHtKGKyLyHsshMxKXL5uZPQWU8cD5L",
  "key23": "47z28a65iiE9Zv26zBC38MtTxJyR8TkGpvwB3VfWN76j8SjRRbTKhsbpnM1kNyr33DSmYUHZvePNSSeYneGNqRP3",
  "key24": "4swgpMxTXFBVUZspb7HogZbxJdiFgekSEQ7Y7f3TrMLpaDms25KGTuHD83bzznVG4cVCnMGAi9ChTCd7FcBUJasX",
  "key25": "MD4CmapsSusDuK8hdg7CmjVmSg3XKTAs4DQPyP8MGGJz9Tg9zg852gVcberi5AFsNNZh9qWEztCermc8DY3MDst",
  "key26": "5PqUzsZkY5LP6U6N7BmUb4HefbQC3PdMf5ovEHJBEYFiK2Anz2LjjgJwxEoNzoXwi5wFAwZwpdCcfBP4tCpvhMCS"
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
