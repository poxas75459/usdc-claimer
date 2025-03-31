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
    "55h6qK3Q6L9eBwhG3v7TKbnrbpdqvB9aXrYxZCDkxMtt2hRx2Ff3prhdnctuCPyEP3E7jbGqBdkpMRskjen2DAWV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G58szAca2gNf9ZyKjXoTeTnFXTxxvoMTncBTQJCGK2sSmmpbDRh3y2mJqebT8nbbwv5dDb7m5hThWYwqojnEqGa",
  "key1": "NSMNkA5nuBCsVgMvE2HVq6mi7TBRfwUobzRFz6iJRg5w8TSjqNyaXW7yXLud4q2C5bprKKrqErnkztAEaih6XbP",
  "key2": "4FiYN3xUbDGwvnRTbT8KyNebx6eVms9ZFzAWwi9d1Kkz3XYiN321mq2actzERAyHgv6aj8hm8kTzcrWkp5No9txa",
  "key3": "3onmeMf8su2jD1LzYMHtJCHeE2f4FTeGzwbTJbpeKe36svhDXd2dNjnkoYU78N5ka7jJWnFcGeK4JrbVQt6xMtM8",
  "key4": "3NaoRqwXT5frUZTzLWHy3KgBN7QwrFDK5JHEigrYooMhU9X836ts3osvyb6LYLSnRT1HigN8ntCNuRptjiENZSjR",
  "key5": "4ZVkzwVq2Ls4Gzsqj1KsTeNrxjrgkvspHGNejiodrkb8MV2akpeWpSNtkdqxheZYhBCWdg4Jb69Ehk8zpdUCH3v2",
  "key6": "3ufi9SZ5fQuTbSDdshweGsc5oxREN6udzoW4A8QWGhfDUjALdzooS8RGABpsGPAAZ4A87HU7r3D3DVegoCtEcoBx",
  "key7": "3zQnKKUWpJJh3kKPtMZB8D7Ps8434rVcZAhsKEjV5Xr3nZTrg8YZz9xAbwpB6SQiTTPweU1WX9MowjyLd6yQ8LX6",
  "key8": "3ki6YvjAVhyK3zgBjhf56uB6PEU1MvFFGoCCheMjzqoLRn6hYDMA4Vj4Chy35vxnFujN5D4tJ1UEWBxs75Dy5wb4",
  "key9": "2hrw4mHzK1r9tjX6AqQKLF1hYEJWDev2kbHFUiUaX8AkD4BuKhApSnxv4Q6yPEeBjTWq3CjfU7JCN8xBJqzsvKQt",
  "key10": "4bpLiMEPTnFxCXRxfEqN7nFny6Dj7VysEe31mytvywuhTAmgaEU6Fi6KF2gQDkZZTwWD4RiwwLVf1T7TtMafV9TS",
  "key11": "3WYXcrXV54TJUi1cXRRwVWGtANr5mnijwsZKhDs94C56bmNMo9mKupCaCX3777YmPCmm1D1gQAdQKzxrFkYMmZbq",
  "key12": "b4vmPWNHfTo5SbwUtKFq5ts4iVc9XZyJaAbQafy1cmSZiKxzPoHL9NKCLB6NCUHXVMnpyrMhubiCux46YA24uU5",
  "key13": "tb9mVAzLwMBrkjBCMLJUHJJsDSP3EjNFAAJaPPkVxHeXJ8aDsHwtaXhRcKdtfXXsBCHXPJNPrgZUWMtFoa2zWXa",
  "key14": "5HqMBtxMQxLFJ35i2CeyYY57Ji4LoDcvJXehaPWz1EsBSgPHa2K2s3Hphmok4YtGAzWRghGoEYqGU8CQQv9cBjSv",
  "key15": "5nPM9zgtrzDQ6AjaGaBw8nbPyxJ66YgWbTFWx2LGWEEcqxGbPAC8UTny4ZpgxfQLp566CXc7Cmb1e5cjAhxPv7HM",
  "key16": "4q2Tc9PWWnL58EfWMo2rwP2QUXJ5fHHTxfUDMRqNye7mxPVVpjsFn9Z6CDaFKxFGWwu8uJT2g1ncZyaZmopVCmxQ",
  "key17": "4t9CsSK1nCpqUcnzRdjBvuFvR56gugzGzuRVJzEBNb2r64pbFuYvUdrjvr92u7wGYKGwJ5unq5JJeVJt5Ex9ihsk",
  "key18": "5GrDq2CZC7Hkqh2FTGEbbetrqEvA4G7MKZuNqU8XZ7E3Xg882QoyjuWvtc9uSNbRECTwM9t7Q82i2Xq8LQw19eHS",
  "key19": "31b6cSKDBMf3MxawP9onD3MoDH2HVV9uvDz7H7uREk1R5f8bVB3yuE7v1RAt6sEKmCBZvAX2ouUtE2hmNFQxb1vq",
  "key20": "T6pE4v8YrLYm8FYkxWvKCZnuqhaRpTjA114xBMSQ8Zc1qN4AxhZYHEGTLuuUsnrN7XVFi4c4WYtPsqVfAk32Li1",
  "key21": "26GBCRgD5PnZsg4jLpKpWnocTDvUErMTaSpiK2Yzsr5LNWN4CDeYHYy4GBNYg4VGjoHA6JpeRM4zcHB4NudM76Cy",
  "key22": "4kUJsqtJefkZbze3QohXi8fSYvLsHXP3AgaWTpbJnjYudkv87DTQNBjcyW2GGo1YDXcCLAAL1wuKVqnCK1xugTiM",
  "key23": "3nGmcYvuNbCSHUGJ4K9q8ZzU1cts9aT3mnSg8ZtTBfnUEqkEypErGmXVaHi33yYtDrhifkbrcjuQDmfcM19zL2t",
  "key24": "4Fx2LXjJNXcWaFyJCMD4XXcSPbyTqyCLnCUL8EydV9cuQ1UByv7dQf2hHtB61bZiM9GXHZnYRkrvpj6QywR4fWtH"
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
