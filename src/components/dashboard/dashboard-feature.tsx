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
    "28SsoPPP1X93oEYrDbV4qCiJ5sSvuNDAd4vXXA8HiBNQ9jszkx9UzFAMBWeh81qhvWcbCMakoXJAUDbUKraFXMoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67XtqQp6n9ivcRQWpH7tLn3aJtC8k5QF8872F62EGi9PDyZ6XmBhVhLs6Fhc6F1j1uxwYD6R5k3JMNNjXsxyjpzX",
  "key1": "3ohfJgdMMeZYmRx2ATvWZemdyY42ynUzQ8zBvAih7k8qAW77zstWBWcw12WMUuiPfmTHDwAppccnVnwEvW4cJ5SJ",
  "key2": "wZSHBFGgHoZAQgT1ihUG1JTnudz8ZJDL69dHmcQ7YWTeCmoHQHkVxqqgKRD92arJTMyzZA3d2o2Y8JmkqtxgWzr",
  "key3": "5sWNgha2GeBxtXC5zmz3D66ipKq5rgCF5u6Ze7FGGE98KiwWmUCNVUo7hAktFtu9N49ssfLDPaDMbR6S2YvpxdaY",
  "key4": "4X1CoGpAf46nGkuoLkycB1Wq2hJc13QL8V4LHK8qYkHqXsVsyuszz2ZCDU3Y6Sa5eNnnwBxeGfotxAnN8zMxpg32",
  "key5": "wNSZeeK88VKZbgwgUJsfesuCYkyPHjUsHpEu5siJf8JiEnW4VqSdto5wRWuPD9cdRU9wNL58dUMu9CxJoM1Abwb",
  "key6": "3cRJwBFxPDjQTteA4kRSngJ6CUTWze4znsExsaFi1CUaWQZ8hLhbJjobXamo1Bosdn8s7wnMeJab55rPeaHDjhRu",
  "key7": "3awm3nSKyc2HzPYPhse1JnuGtRrkDE3Phf65fvT34vYgs4BhWZQrS2vVZ9vWbGsRwtbMTrxnSRgdeB2jFCzxKm6j",
  "key8": "EtmcbisRHtrJBu6kRU5eLjxBVzVZvdKPa64Yn9MPZiVzH6RNiVvBCwEATfrPUQVL4RTxN9FfUUPvHMJgSY4ApNB",
  "key9": "4qBp7ScgUnc5TUQHvJCDZHUVNpSquhax8APynBmkMqLnzJQkhU6w3RgDBQqAUbcLqivbyiRoNTAYkhVdHfyouQ4r",
  "key10": "2VHitfH6zzJGUeYAxGrYRqoMez4un6VmcaHQmh95ncCmRSEXfxH8QbbjEKs45rs7pYQ7oPXaJKZGWnaqB8N2BgTx",
  "key11": "3TKXThtRfCtj6t1bkkMoEYtf3oMNTz4DqRyj9uPGVt3x7pQ9Lq3Wcx6j2uWsJfXm4RexVaiJdWhN76hLKJzDBNPv",
  "key12": "4pkrsAJUmnrJPiKnN7Snvn6325m1d2YRYozkgdwcrsdoPo5g791SjzAnuJhAr1M49umGh3fwNsfNHjZvJuDyj5Vk",
  "key13": "5tXXJHdQ8ViUNih4MSiqoYWs6qzRhQLvQ7WLoHZkCkBt9yRdfgMetUNqbEbpVe9mi12pDo65Ek2oSFcFbZ6dhKbQ",
  "key14": "2uxvLzBeqn9LcZCEiVPeM6mnM4ASNWrFhWN6VoKQXagJPpJo5xbH92WXZbjAYymHUjPCgnjppLvCqCQ9jprdGmMg",
  "key15": "4CknJpuvrrqwUyZZspoMGCoaqh9u8an9kzP4DMfpCHxXmvhF69MFc9hqntGxgFGKLNb8ZiHT2KMXF6rFvtGMihnS",
  "key16": "3vj7728vZg8z1ivK6SG7eKkXK2Uxje24jpZa2RcDEALnodXzNgN55p6UbULKeBLjEA2Qr5zjvorg1sWK5v2MGp6B",
  "key17": "LHYGEUNARSjLwY1hFhontBHpmphJJRUrngKZp6mN6P6cNyQByuC85NGaAr7KWKzNFSN1tHTmvwf3fJEmp6CHEmx",
  "key18": "3DNpx2DxYsTFvjSRvwofDz23TZ9bDSgciAs3auJEQco4sFyL3E3pmvwULRxe4vib9KG7zn5mpQr8eNmipWEjB49d",
  "key19": "2FxD4UQqBAAj5W3DRcS9XqVD6SdFJwgdyoDNSCm34adPR9oRC27ZpSxjCaHmgkcgTskGBeRDEKQ9ytXcg7E5mWFP",
  "key20": "uaQwKBreKCoqYBhoXwirvwgBthEELJ9gaYVEU9FZJdE74gXP5CsUdzp4jqdz8srLxkd65mhqgu2XNcDb2FYVvZd",
  "key21": "3WCEsJthHECS5DGyNanztEs5339XocdnfqVohtUNvLegWhwPGdhdrye17Zj8nWAkRbqE4oK4aeFeuK8riAb3d6Wb",
  "key22": "2wNj99TGW2Y5gqGo4YxpyLxWcg65X4axmLtZjwyKLkrjxydAwHve6MSudWbvUJaUJ3pf7KMr79maefFvuqw5JBBf",
  "key23": "337KKRpFCixHRCuB6JXqasGmdDdQEPwzGaHSVjqatnFdeDKr1dincMEnTPvWc1sDpqdCXB6wsaFUhByYnG2jYtTp",
  "key24": "5HtjZ3k1NVboNpbQKS757pqz3FLJgMKta6anR57W7ErZzWWAbuQh66N1HyHkdxJZPmYNBm2dmh4w8TyLKrZCizcD",
  "key25": "5co1YtpjVnYP2mJNKSXsS1xxZyw8RUgbbwSQaeLJfebmnbRwYCwtaJ2DaKcJG4K3aeRWurMUVcZkzEhKv2BVrhfe",
  "key26": "2xmhsPS8nAaxAqepNZfWbPn78LAnqttvwE462F7RzbJ2K7xY24L4vtTBP1ruhToorCMcooWPKNqL1N9y93dFU3rF",
  "key27": "4csDNJ2Lw92XKYEs51588UK5T5TjNmPkEMARhLC8F54fmg1kN5DEEZFboP3anSRMXjQe2QQDQ7MZVZNVEwcHAzdg",
  "key28": "4uBP2rmDFci16sYtiR4ed1VxJNgWmogA6Vb3aVvxFr1QTEA2g1kgRAYEhq5ZUw8aRhSak7NgC9JnpUKTwe2iMkjn",
  "key29": "ds3LT1RRM1VJRx7sQJzUCiq3xGEGCNLYAfgLoZH4zPLjV8zSECtUYbWPUkv8q66jchBU6gTiKn5BFjchyBT7SYF",
  "key30": "5ottwTsJ7hq3SsSLTg73NaNjWbfXjsL6hpkkfabmjmKVbFqQAZpeqPUdzwrMbgxH6Q7umWScDzsGHzTDwCX7NDf3",
  "key31": "4Aby2hQcVtJjrzu3EvnNhu6uvvK6pdV94RTJnB4zprWpx35BpymUTRvRyfTWYRUg6TosFeeTzqeocKLTd9pJfhqM",
  "key32": "66WNe4DFkc7pPN6amsB6AtqgkYsUHAHq2a8d2LR6V39qrCzbfJ7bWi8HEoQhsPzPFEkgqJGypHcNqvUiBVsdD7Fs",
  "key33": "4KdVMKgPsKYmmEohCX1QC9R3Qhaejfk6M3qGZfe9Wc8R492vgFrhNT1gUvzFVZNgDxp9Ut8cKUtsTnumjdmvjZNW",
  "key34": "4WZkDo7m3wfRS2MuAvaL4LUe5zE7rKVHXLuQznicQJTE7tpTLLE4pQmwEwiZFME1RACSQrQAMuPMCjdSNqm7ekXs",
  "key35": "3gkC1qT8NpMycAWjxaqPvVbKn6V1VZRg69CHYEtU7B3yAV8q3PQbrAxKZgCRDd7qGGyFEe776vkQBMsBqSAAhBdR",
  "key36": "5N6YkM4dPtnTedMbnsE6azuiBFARTyAKAzUyYdRjzkCGiDziFZyVR3ggvZvhEyz5CW2xa6tdRRk8MWMCRL2ZNczM",
  "key37": "4yT5jNjio3Edxg96dFpTR8CWo9yeiReaRATcqWdPPgGbmq6afq7T3NhdFdG6cjgXhoCsCY7eyNX7vZyvN7qW8aAk"
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
