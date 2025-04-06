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
    "irnFkdWXX2pL6B7p1BArKwmgSGiBjWDy13wP1xtyUtfGJ6Rn4wpW4A49eT7Ci4ZYMaAjFbniUJ24ydo8KNFJz2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dhz5WVAawBwEeb8fX9cAqtWpnPKSPEu3jLGcJMEQsW4cosTTKyTdrVx9DiCgD79KpeYuFxmtQep5x2duskYaGpi",
  "key1": "acZ4c9gQG6yVhe7uJKraFtix7JvTpbDdWnoWHr5aRd89r5YEzwukarDFKtgzkbXygeGnfnMWYkaTVC6Cz6f7q7d",
  "key2": "3BLdrkM6MBFmrQrBRQVZLUnXLxDfYA7VQKyDCwk22vz4f7TvZwh7W88XarHLnk8teK8Ty5mkGJQGtk2Tk4S7gBq6",
  "key3": "3rQjLGumtj2ZrepbWKgyiTneDxxcRhgcTy46VN8MXYHrK5vFKCKRtKNApSznyDwpFUgLdoQBcBZHcAS5rQP7mTUC",
  "key4": "2B9hMF1BrS3WNRo9QgUL7uUQfscvszkqGxjuL4A4BwmpPBRJCGPy5Bfhro6nQeiFHbrLuYg34BomyajHBxmiyaLL",
  "key5": "2hCgZm8DSvLt6BQ7ffph5Sfb188uujYk7uKvtXt3r5D1MZ4ZsS6emBpwXZs2ThqPzMqsEzjLiVHQ1BTKt37xEKe1",
  "key6": "2tUe21DCqqsPHFVbkUTkjwp5dFBwN5vyY8DeEY5cB22yXc1qhyp3aUJStvB3hwMkJ1qRZsaN1eheZHQsfdUz6WnN",
  "key7": "2xBjHyk3zi8eRgHA8tZf9Nf6ugKTWixQWfGsLBcRchy3fdKLFv1AHvtBF3L2GHCoegSU3hj5ChfAZyPWdspevsZ5",
  "key8": "2k7kCp2EV2xfbSWS4pLmMvzWx3wCGpeXkNSRp7GJvTG5CczyGw5gKx1qymozDXetrfhhwjcR4hogHC6VvrBqwuiY",
  "key9": "4qUZGdZB5EkWq1NTDnrW2HQG2p7j15MdLoFdR5XBAWwUwFr6DngeN1xULMF9uU8RE4KoM8n86VNEhJbap2Engz3U",
  "key10": "4fT45k4ChQRzkLf2HVmpTPgfHcryNpHjFfXTqfsc8KVjqUuoJEAvzYFGkdHJ8HDue8VQBzvS7EU3owzuJPTFXMYa",
  "key11": "h7U7MrrmDmhqzJm3xoaCo3DqmjFGR25ATgYvLGxUYDHPMKQgdRXGV2rcTJxaAJYHkgcNJvrhKHJX73bLee6BDcB",
  "key12": "4nPAxeNEyNL379BCkxLfubGvsmNuPEhyHSsYAhdkBHwHJeXBJ88qQ3jn761NshoiNRVvT7MCSVNgFETg7Qefw3CG",
  "key13": "4nqXJfucrG6J6FZyadwicw2c1HtyXLZamijUbcVwaZnSJ5jd5A3QGM1MeBQmjfH7uZ69FUduJNicpVKMvhKADTLq",
  "key14": "e478CjifHJRtPrJgQzcFgmm17eQVbmcS1QSad9jL4Jk9n9BuMdtxJ6iaUyPUZ1QskhF8qkjZTEgJ6i7oRobdkiS",
  "key15": "VpdS3mLjL3GAS11A2hyYgcqkwsjqmUwmJv7ehisE5xqvabXU9hYzmNa2aSmJi5J3WjjWdxjyFBDXsSLvLUo45rc",
  "key16": "3gbm1BpXp4fhVNYEYVqMaRYZQutp79UBdVYArhNjDDR2BFxE7aaoCZ5UMwodQDJHeVwpbdicNshSPBJygGE4aoJq",
  "key17": "2TKNxyBaFQVH6ir71mhZT1TEE5Cu8gBFBV8gR791ituuCeVQWfChkhpxcaAXhcLYKbD9txDnA9B8CaHjLUYMnCfc",
  "key18": "bUKHSVneWJNVEcp222Yroq4FBEpuaGbhGSwx1VjxB7KSHj2DugeLttfzugouaKRsmhZPDR1mD7fRv4McPq5rTsZ",
  "key19": "eF1V5o9LkMfWUp7qPNJ7ghFXG7u1kJ75wUG4jpwRVcQvPrTrKif6EN8s2FJJrAHvpbJuAsyuQEYwr5xwSbwCXcN",
  "key20": "39HwwGHouFp13ErsWNE4HxqkDih3a2h744xeS236JdNNhzE6HXp9e9BJFWSNUbsCowC585wMwRs592bToAJJMdNc",
  "key21": "2jyxnHoDgsdGHVHWFrAfnbsHgurCJRCvbGRauHLZeKS6Z2wc5EuJXYqGvcH7NSoFdrhj58txSzt5wgLUbKq1wjaQ",
  "key22": "4UDFeQzLZnspxFB3Hx5LoqgbJsr6FDJJuPDt3c8ZAdSoFmLVB1A77WFEDfXouE1y4rTwKFjLev6bKX73QMUtqGbb",
  "key23": "9iV9WJxJHwagZRZ2hKP2E8x9ydM388ja8K6XGvQXvKBfED7d5ZPyYXvVuxAK5JiXRtwKYqtwEKZNfeEKgcHK4dH",
  "key24": "4vbfYAkQyCpRHHbL9HmDi6xg13PZmNgW2hfnvhGGpqP6rxHEooHMNeGECcDvrCfSWEQ74UBpij2mDDU9BAeaKdWu",
  "key25": "5oJaYe7eUmGy7pyhUR4auLAXigjAyDc6HW8BWSJmGge3UABgPBHp8SStDaTuAp6a79iwkJyx8kBriesp8Jz5G4EP"
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
