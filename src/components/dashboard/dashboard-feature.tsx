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
    "JvXSRSxGjCqYg54TTuJQbmrPm8S8MkNDDfPzqqNL5sHbuABFfLnfoMpcquKTxxLkYmbBwNzUvRijxnaXDGdZ9eF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pYeLSsxV4cjcRt6KNGTfdYaRaHBsaig1F8gvTeMHwTAURwVpr9tWntp6JN5xpxRJxxE3CdbF3WJEEBKmqGRd7cr",
  "key1": "4cRMJVcxBgky4aYP6nGH36EiNL3Vnyt79YvVxXHXzWRSQfGDoMkq1F9m49fn1W8x8EGzdmvpJCcNGDfdoq9BwhKf",
  "key2": "2g26roBPcL9FjvTAHG26JPobJs4tFXdjCrAQj19Z9VfkxPBgUuKtCALoDkQqqFHL8CfQqQN8RV3Xz5rFRco8Nhbo",
  "key3": "3uKFyZJpwPCqzn4Y4nXk3KEi6GLZzHR4RgVcAsYZT7vpEThnDQFgsBcCPcDtNmazspxGudYpdvMK4R2MQjgXM1fV",
  "key4": "umXauZ5dRMUadGeJDsctECr1c7AkoaAALxMQF6boSbFaHGg8JaBk4t12fcnZTQ5QgMKniwcFT2dC7VEmCrPZ2dG",
  "key5": "2VtdYP9vo6VKMhuCdeds9vtQg3yT8EJu4Bme1M961P9PVxVgDpkVa845he3PhjrtsgMg5mSH399aPoCGEem1Yau1",
  "key6": "58v141PjrKqATwQ9VuVKqz8dhewBS8Pk5BQGW9qBmFy4CACWSRrv1YBc6acfKeUxjmX9cu4VYoFoJBRVn2MePyCC",
  "key7": "62UZNcyP7Y68KrqRkDs9e6BDJCJBq5hwDMP91HsSiT6qzoYvH2njKSbUmz38Eg9TajDy6EKEdMqQr4PTwH2wFcx",
  "key8": "4ZLe3YGYtYAEGVQdNzALGsDisr8gDAM4GXSt7v2uKVLq83KY7LyouGQqk7nNXxAfDxCcf7qypvfHy5zp7HgkH62n",
  "key9": "oTR8hmCJmGMb1qeFgbqJzq4b3MFX7syeUKh8oUosJkZFhRDzQ9QdH8XWdGmS3XKw96eWV8FyjB1XMTP3hBYE67G",
  "key10": "3RChK1416gyWxxAN7gbjaEp2zAySEvrq2e1NydsYKTxSinz4mxeZHRD8MSNeBfvnCZXrPJyYBJq82iSdSQGKjM8E",
  "key11": "3b85VSSAQU2XEahgmd9PDRRBwBKYrpSzGeN3wUC7qKJfVKwNN5ghnc7eyMn4MMg9vtknU9AAiQYvdGLo1b37Ukps",
  "key12": "5EcAztsam4WjptSoD6DmZ9c2RCh4fKqZms7u8RneHP8SDwoFokKcxCjuW76m9ZHZ7i78vN3D46uwUss8oqtyCcjv",
  "key13": "32EccVKwyqLiup3CqhGvFC6CKYNc7QRLtBqLZKuZ8c8oVPSHqyVES6rdMErYKc9bG8aWYiCqFo1tu8bwno4W4DUR",
  "key14": "2ffksBZdC1JR8qo43hhsyAKck6vJXE4oGLw84aojYW8V7zrusEsQnmEEK96poFGcjNM7Jw8f7bHPp5bhPbYnEzzr",
  "key15": "2q9GkW3K3gnL27QwCjL3DRZpVVMHR4fuSKVuyNRWfJZf92KFJibp9DqYvt3j3aNFoECymkexkhkueFTVnR7coou3",
  "key16": "4WuLndResCU8Hva8EScsj9B4biEmLjmFBz6iRnBHE515npKFnGbcFxsGu66CvF5wZ3YePcBh9cBiHD8oT8s7CFu5",
  "key17": "2DBRvJt7xsgSzHRNHzp4Ue9RHWVhK8D5HCDqgCcG1HzW3XoH85srsB3JfDXWRL1PHVUXe2qDytjWZXioUttgLvq2",
  "key18": "63kMUYvCcBjz814XwGq2aZEdFEFzQgDPkipx6svUC2JvC44gUaR9TjezJHpVcuCka49ppnePrrv5RKdHrR1QkRtM",
  "key19": "2Muo8197nkMuWbukS5oHGCzeipZRe8QvLEmUE6bNa3YPDv3D5FVK2Jm1aVF8k6bgtYwhRdbLgnwpkmxAffPQReZf",
  "key20": "itUTVTycXXqYajQ6dNUqRB9HpJZei6H66DsUfNSdT1gFKvFfR1DpiKJhwMUFUcktcjLSQGJRmYFVjZM3VnTWCyG",
  "key21": "3SE6agvh8phgaMNcpzJo4QzFMwSzQSupt6X85UEwJdQgf3T2prSyvZ8PKW53ab6NHQSGcZsWiasxaSic1cyBGDqe",
  "key22": "39eZo3rodk1qk671JjgCkQ8LhhUSj1pTJ3nH63AgvhzS87MWRqobZiFEijoPdMMP25hUfmF6uSywwmtSTd4SQdNA",
  "key23": "3YNvifNZ6r37VpYMPnYEqg7Y1hFP1fWAAc24XdDAsM8hHFLbmfePEVW9gKLsc3H8y5XTcDB8nAUT5B8kgc2DiTUe",
  "key24": "3aPdEFQAnuwzNV1BKDqkh3oT7FSRPAiVxWXeCGukkfHyZSpmpRyHJWoyjDSjXDVMYroWP4Pg2tn86p2o7A4tYpxw",
  "key25": "2Xazj4i13AruheKqcWLVUHHnrTZgVCb8Pm55yvoEHujx7Fpnus4QY46rKoVHUN2bQk8kFLGGu4bebBGDodyF9paq",
  "key26": "4xryVEyaDDKReThV3QSfBmJzmvESWPFPd2BpeMu9ELWGjYncCkMUDXK31hHRyVXTKBqacT2udp9q5sU8DB41qGKJ",
  "key27": "4KseZuQQRjDVxuQsXKT7XNyMhnMvZcc4BGBKWx7BZGd4AYxTvZZ1yBEew9u8BpXM7ewQvJNPCnHXKZJHPpjExaVB",
  "key28": "4no5dfiDUpco1KNc3uXU6yypUHSDCy3wypE8ozhgVDjGknSesW3YxPQaQJvMLNHv3gRPNXRp8XkGUS9a6nm3Q8pd",
  "key29": "4NGVXRF24aHnCQaD5WqXN7d5WwvYuRk8ELXtJ5hnRXeFeDJHrdhMWfvFuA9T4VNV1xdwcan2o8GJsMB4oPTSejv8"
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
