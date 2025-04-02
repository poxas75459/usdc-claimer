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
    "saRNcsRpiYNFfFgxpvhrPZsUAbmU4KRKYBxNeCWHBCkf3BQwYGLYus89b4QNvNXoqmJVYCN4BaERdWvL9XuMS6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b9KzKuVdNFqWA4avE78eYcxSntKV2ddPy3WDBABdxuamvE9AkBj4gU25ZdCedss4MCktQLxbqybUY4gM2Cy4Y2C",
  "key1": "3Qu6khg2jUhQXBS7LyA9mibJYJ8zs69FrmNMLL6KSU5eQ8ehZF53YxhxEUeAwfTzCtYEujMh5cXMBNk2SJBTwq3j",
  "key2": "55AngU9NEABV8X3ZFRv8tCAeeVAeKX2jpAxMw6PbWcuUVdxTYN6zEBkXgNVHHgpJLALSoKxQ9vC8RbbpQTQEyida",
  "key3": "3RNLg1XTTXVaSax5Nm2XtBMiDvwL9bnxNck8xXp5jFpZEipnfwUnxkaNFRaqxvuXfpfX4cB57LNFMi2jWUuCYtdi",
  "key4": "4qP1Zu7Q9C5i8YXGTYkWrsgjDPMKHUVGgypbB49fsY2aU2aWkNMaTMvC5hC8WSAy7LwjjmQcJ4N8e2K2ZtRtTfg8",
  "key5": "TraWefkRxLUXvRubWo24ztrx3FeDjmaXo7es9iagiT163WGv12sMry5Pr8h7PZd6LvnuvMKQn4PeR5hjErZTJan",
  "key6": "2xnbNY6fLFPGqCPbbNtanxb7Ufv8zjjEibWvMrBQKBkMgNmQCbjUSwvU1fNi9cXKAqV1KRcpPtaYzy2hdZrrgP6U",
  "key7": "2n2C5S7aJen8JBNtgz1ozkxpRaphNmsYBVs99nNMzXDQvTPY2ZCSPe9HTmEgXJH8AhcKtPXQ7Fzk7smiMSDxzLnX",
  "key8": "62oxdVfEApecrZeGCyN4EqC8pYhKXCA3wfigmSipqjKHCDCYyGSRYRM5b2Bzmb1K3dC7TspBKkjWq7cGdT5TRVNw",
  "key9": "4xj1xk542DJbdZZpRjLw8t5he1Uq5hsdF1oGcVDEtLJHB3GQpoCnfkcEUp6rrFY8VCfvAoADFx1AwB7H8c7wLpgr",
  "key10": "pV18sK6cqjhyNacVxQ8x7n24wx7wHEcVp2yZYhCaiwAZ9qHx5DhbqakRNXjxfZMPkxNYV7fN94YxVHw9UBLzZEu",
  "key11": "52xeywwrk8dePthJcyBzp1RQzPv9uC5FC6pxm8tnkTJj3z7r6YTwk4ndwZVF7sFuAbrav1C7eVwQH5uKUs9VpZSA",
  "key12": "3wnaB4SgpXxM5spWMvkmvcvUoYxncbEEwG5EvNniWude2AuTSa8g5sP8UhcaHDsrx3T9k8PL3th6V7wsNRRb1dzy",
  "key13": "4VTudy81d86DGeRXhxziN5A1GvW95ksJ1M1NCX9E5LcXXZn6jKxHVJeRs29eajrkVXosCHahuc4QkBnq1QBGjCyR",
  "key14": "3fpKhM3B6kKUTkkCGqNqiSSchKHWSNVzn4msWKtqq6hfMYwRRHfKgiN2DRq9KNtWA7oRzfRAgo6DbDR8YTMviLc7",
  "key15": "3ortv5xRnt1hVQ4gm3iRBJU8K7318DjMuJKK3GKkJsqZYZdH6KdnLqD1iKUS4QagkkG9bMYEE4Qx4vBnnoZbhDdC",
  "key16": "5s4WRLw1eNTWeHYHSDu3MnJHCdeEpEtmLrpgGjwkUFu9ST92orSUeyxGeWTjQBr8HGUBEZZQJvGvKcRaiovGhtfs",
  "key17": "5Ah4Lisj8u9sVB1zVjJW9JryvsYW9qSG9vW8rPLCpZLqwNWJdQRw7vsHoWDj3CCGTyAxH9BiTaixxoAvwGEDRnwq",
  "key18": "3ACfgzbMmLG4DLgd6jVJzVUpEjbddagZGpTZkxCHV6yTkjtXnPCdWt1xn1CNtChYcNbkaDe6W5uFXWNtQNLikrLt",
  "key19": "Azs6Q8KQ6UQ3WFEXUJMY3SHXPEFWb7UrT8yp5LV1xxcgxzUALoHHBtb51jiStFLW4EUbRuY1DjTMitgQaYmXNHj",
  "key20": "32zekbXd8WJDvyn1HSjoM4S5V9BozGo4AJBMnsdaU9ZJ8k7Mn1WwD2kQijVeDZJRo2snvT2j4qHff85WtUmynahm",
  "key21": "2WsgVv7xdHwHdDWtTXUbmANi2sj4wri2AwSMDp1JmFqqPUC29VysRhyA6omcaSnnohRVhD7WwefSu6jqJS4g7y5X",
  "key22": "4C9yT8qkzq8UKYPo2ASGSTsMgXD8gwdp6tMwkdN9XaJGGs56v8Xv6Trx1qbq932KAkoGcyrnSSydnD4yJwFarPCF",
  "key23": "5VYsvNb3xfELCRJcDrnMNyBJjWmRXdDvQjBqLhi7iSYnYNAWYPgEhBugCGxrLJSAVeyNBVdQ1d6PMYftwzwJzEGt",
  "key24": "3fSpgezTbGScwV4rmUbqKRRy9FKoGjjrMD2kFehMsaphBnYUVxjJHriwLJuDKZhPAcLdNyzaE96WUQRfP5zwuQWk",
  "key25": "24hNVTNgZHUSE3QNe6M8ox34T5m2izEYSPZ1kuGjzWSxke5c1xeRXzhmU5mTYJKvsenYVKbVgiqLEe3D4MxLcYLi",
  "key26": "62nyrLXPeui9q6xNo25uBtYeHE7WVzQVzELhrEjokueEuc3C8A31Cos9k1YVNWCuTx3xHvftJhKZiCWXrLw6RUvc",
  "key27": "5XESDqXQQwGYBbfZEVmUNop5LQZxHC2n7gTREQQfjMHw8Cuva4s2CdADh5Aff7MEXrzsNVLbVKvcbhtfZKAQWouc",
  "key28": "1h6dGD1VDmiTEe1nBV1kDW6uMKeb1G2PNhppXpmZDpAnYJhVox3XiJqEEX8NHfeYbN8SdJJjuQXpBBGXy4dfiSZ",
  "key29": "2rDh1QPtXPiZuSpbgVaGVRmfcQpmwZ27eubS4371e8jitt3dPJCJF6n7zrETkxAcfbQt5AaetQhkXinqXUy8GzpH",
  "key30": "wvn7CDQ7MtBE16tYxHFAfk5oWe89KjWb42g4HVTq32D4kZYtPCwVnk4bsFRFZbf8PMwdq5HWwJjpbhBakqpEMDN",
  "key31": "4sb1kL1L3KTAxbhEKYihKtJJRSdu4vGrfGVZnGySFuVCMcEgjTbijYXu3fMVwfZPiC8zE5npvSYrUQoYWFg9JDd",
  "key32": "3GUvHVW7VN7q7QDtzaMyKxvAyqnasKvbFKRspjvy14HBrQJc4MG6rfGz8h9dArpsPcen7s1Y5YM4SRPfPDi9onGd",
  "key33": "5Vx3bKy43qxgeTMuHgTj8krdShuiBpww3dDnNcvxj86hSmPRAaTM3G1opdtfgLUNiHo9WrrJE3AnRWcw3a8TdUCn",
  "key34": "348viyBXxrqfZwMQRxEEVjB9j5CWqt1fCgUeUjGFfruvJii8SgL1RDxFUV9apfmqW6A8opagLYbC5zKw3P3DksUk",
  "key35": "45KF3BK2WJ6fAKtKovdbtJ4ejF1beMDBUQL6jYrckm7LtWwwzirgyWWrYcukWL4fJXon2i43SawxK7N1MUS1PM4n",
  "key36": "TxvS5XQkVyP8qKDv7azpQa8wgP9J4MrhFfxms8rVgJbS1CotGsyHsY8iQKKUdGwuBdW3gNtLJ4zXDvffzEhokLH",
  "key37": "5cPxYWhFFyMaaA7ujyHiUgY6Whkk1N5CHDwUUDFAGEw8JUGmBB5bEov2rnWhZ7Kf8wR5Qk5zSKr3FVpDUzySnVe",
  "key38": "5sqkZoJEnKfVb9CEnFzjz3tDtPdxrwoofgh1yEMXAdgwUxCsY1FffmTGgmqVK5NgyjKXPkvpGsYcEUM1EwDZkjWy",
  "key39": "uMxqJyVGimcDKid95Y9TSxki5UVdNwb79SgcDrMgEkPnhHKgqJMefT4XycDHKzpBGb3Lgf6cPR8smGp4mFFkScR",
  "key40": "3FRJFP9HgRQWjT23PeAoqQqhXXL4vTA3p9LUd3Cdtq1ejwmVUVgrQ9vEygVCWBhZet38VzajvV2vGgLGv82n7yRo"
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
