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
    "2EnuciBnvvhm8CEnDqizF7ujptDzcR62dGnrm2wa8r5G9jtpfADxedV3L1MYRtvDa3GGKUzwXZo8T81jDr9NQ8ue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dWb9CmqE5MyFjqazk2T7A2kLx4euhbVLMwkvVn4rAiLgS4nMZijvoFyQgM7FnpByWTtbiYs5bmYheUGRpRgmmm2",
  "key1": "472w8RnWPLXCAENpK8nxgmDvfxoAusyEDxad1EvW332HjGDo8vLSjG4cXQQQrUPBFFFPNHJG6cvvxi6f1pm7nwSE",
  "key2": "pwQ1T9cENvfoxyCfPHy8vC3tBrH6gpZuL9Q8SsjzhkrpnByTXkKV96sNSVjjH9why7DwMKQ4YRjnLiDfovDpnoJ",
  "key3": "4Snsz9BjucWh4xuMMnyDkWwkjz2vhjV8DM7VcBJbzV5nhwquaidKsb78LwzYTJ8JetQGzjL2sG6CqKe2jPL6aA3X",
  "key4": "3tUFtoDZakH2kMQfbyBPihZe1nxMJMEF3qDuuUWAPABGJy1NLvr6xPq1wSeVijDigtcUquADtwMjv1qQ27AbhZM7",
  "key5": "sSfRSpaxLBvs3spzDvJQpDX5h6NymhQkrro595TeMMMUYLFgF1YpGyki5WVaXCGV3b6vwFtrQqgvgeD3HwMksFd",
  "key6": "36Que75KrCrDxht4FPp4VTvhbuM8BTnyKSfcxitW5ns1TCcZF9onBzunhr3s5spmff6buYsxxo6Gm85455JwM231",
  "key7": "4NdTPgGaDjEGk5nSyQ2FyGYCjUWxqTwYw97GsNhxnjaEioaeco865Gfwdsh5P4REYRwZDt4u9uazJFpzcWELWvH",
  "key8": "34fFfP91xXThUbxo2aY3GJwn2kfLcc5UM1iFTh87d1sF8FWzKjPQQXKn3g6d7aR36x6AKHM3Rf1yaePvXe3QFNtN",
  "key9": "3Uk7XYvvkQV3VLAWH5Vxr6qq3YBhcZPWxSLnizsANyJgGy9e9xSqimmNHvZh2XHQCmkJxSUqGke8pS5X3mXeJHra",
  "key10": "4554tpJ73vC3addNTF15GpPnnmCm1cua3xkvVVfNHmYVbFDbDDXWPTHE2MPVEWJrb6CGeyLiL4MvFWwK4oznFFmQ",
  "key11": "3rrhChrsfeFE3FZa2XQQnmgHPfnvi8pXCDET28JWdAHAqaoCgd3xUsCrzFKbnjovgBJwrARVaygXKU836hB2GAn6",
  "key12": "3gXFGAKxFhpHpPemoi2LHZJy43oCGLsJMSvBca2gFPLN9wgoHJwRGVr6RM9EwkPfnGkD5EzkHJwpAEh7A3yXuXCC",
  "key13": "UrFxWU13WbYBmdFuPXkobo4tHX8MgBHYv2XHFhnCQDzgEfcmTEoW1y6NkjEAJkVyvodnsyXkz5En8schWdNnW6X",
  "key14": "32C5zVQjj5FEtn4b2UgYJrWrQ51jCYen2DE44zfhxtZuHQ97MZt4XrHrHBQPSAsni915hbtJJxwy4pUdX3ma86WP",
  "key15": "2RFoKuvhsvCLuPsbmaeTJ3SgEDNjaLUrQ6Zri5bhTgoDSDmcFgBUcM915q2gRBFvz9VCw2sTt9AG42pEFpfGA4B7",
  "key16": "3RfFpJ8VUek4mWKHSvMQzGxSkCY6T9XV9uJ5PNuiroT4rpB2k64deA3sAUpsEWZpL6emkvu7ddfnpq9mrgEdic7R",
  "key17": "62PxwqhWiYPmYrZyVfM2wBToTaEDbj5BjCr3oR1isPSepF8aoEw79q8EFcuGC9A3mdzQ46t7i8KkTzowRqBpgkkt",
  "key18": "4FUEm83eC9vtY9E7CFkRGvH3AxCKq1rh6qprf9bJ7KtjpPXYtaq1s8QENS1TgVJXCLuWP7E8t2EZnynQiZN5G92A",
  "key19": "bkHArYM8STGgRk47F4uNCP6UK2uqo3QHVeRwaB2MBkxaFyKnzFwy9bXiSJwRZhp6SdMx7YYXdNvytA6st7w2gSp",
  "key20": "XZfHU7ZudCuAQvm6mibBUWEDXvaz7K1FSersMHCmXkeCW2WGg4gkdKgU64okMXq7dBB2zDkcTKMemvevY8gvvak",
  "key21": "2jQoKzQc7vpjK2LE8s9XA7x2qrG1nAYmRtLxbF4E5RXpa6UTKpzFkqvWe9qF9hPStm8rPUdjEMSdQHrJFWAQYCvS",
  "key22": "2HGNvjX2AkHBe12To2ef7Y2sfE3KPgdG3b6m19BD7mFEz7SVWiPrgDNuD6BigYfAr8D6QaDSo7qGvqHeVPFCPN54",
  "key23": "4rxtQGXjEq1EgVXz7UtjAS3zyqV77ww1hTgeHETQ4Ya3FN32SNtWtAdAsHxxC4ePBFGPnKBezyEfLpuC1BgS7d6Q",
  "key24": "BgVK9qkm7z2yWQZEzD4QtaxtEnicoobKL56NVc5vGEVDUgLBUfoCTqqoYuJDdFfp8z7H5ogp9MNsTqpL97qAzHq"
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
