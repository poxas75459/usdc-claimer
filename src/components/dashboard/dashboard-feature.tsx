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
    "3RAtewezjseDbAyCp5N7RwuGHCYEgDxiVJnw3PPiH6eD7eKLbvJ2AemhMpjrgqHAcufCh7qQupGgGdgMzZCHSwoz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NW8d8RAmHEBQHW6q9chQbNCpfPTaqSdKuTftVP1HxqGwbUJT3Fq1yACTrctwDnyWtV7nVyWANbky35BhRrjA5fz",
  "key1": "23jZo94ATXaFi32mZiJayVrGFkqFdduZpccHvKT22Hp9fSZxExPcs9mEwxCNeSwAx1vymYYNKqm2YYKvaQLCBjii",
  "key2": "2ENM4Jx6diniDKS32nbHWytAsm9f6gge4cjU7R9JPZN4Ef4u2PEbL4xgWdErJCzPo3p5Segk16TzxWfYNkwU2sEN",
  "key3": "hzx2s1XfhuXEWWM2iUKaf2GD8Nf1FmAYRDJp1CuQW25mkVJFNEUVKTemncBnPmpXs733YAnszmnCLwpc6kJvBCa",
  "key4": "3rZrK51E2qWth5eFGNbtVn4oBoziGEdPe6rbM5LtZVoAMJgYqqsC4fgsvTbaJ6c6vdgHHLUTmpemGdiW3WSXLP68",
  "key5": "49egVz7vtfCpxPV9wUsdoszWf7R3V9kG6FWB7yLXpfCRbKvRbJ1gyefPhZpFFXug36QFEjicydmAAcN4JXZ5JnNZ",
  "key6": "67LyVHD831f76fGA5t2tMRSxD2JeDKBD6XzS6KjTSEJ9ebeWNEzLrXNZcfqYcndGSqAo1isj96Cqt4UWajP1uqYh",
  "key7": "3g3eiTaeZr82BRaf2nfJqrS8EaY515qz9UANoX92SV2SqQ2X5F6gAY48RQ4Zk3jLX9tPC6eQRzaJdRR7QwCsm77C",
  "key8": "teEwz2umeqKeiMnvxGWdy1fQdVt7zSgfzTVwpGNuZXWd6DQnegHk4cBjfsQPPz9HiGww7s5ajMqUpRhkVrRCp5J",
  "key9": "5zETcuck4rSddu3KAuMEv7Nxnkz8pwGPAZkp6cEt2WayyntbXb4SRzffc32v4q6KkLMF8gXcQJBFjaA3Vx4mx1zZ",
  "key10": "2qFupaCYTHsJKheiheQmXVpxamCvH1iLaV1hjw7zBrgQAf8oHQyypvWB7nVf7q4uvz8dRd66PUMbnqmysag87wDD",
  "key11": "rVXxQBU6Qu5M57wobdeog5DkY7cPrfUuE9ntYntm9uDpRt1ZJjwuLhRVpaMhxxWvSHk8VRbwAQLFh6zDDus1ssw",
  "key12": "5r5JgxYqGyAhpzA4tpnXba1CHVvbc6aaHRF1g9v7LpjSQ5HNA3Rn1udf4TctnqZF1Q7ZznFvgGkcyxht27JVbfAL",
  "key13": "yVCfXuzEubC4bhWm1J4jgeTrKjYRV3MFqJc3NEfe9GfdyvTrAbaW8M2b5TLRBYRZbKJ53shhT6rYbKNEKkkPnKW",
  "key14": "mhsLqD9D7xXdCRbUBgXXHHCzv2kfAVpUuVDYkDdeS5zqzRH9BC9bTvANE7bKFaCNEdKaGVbSSLsDE3DZvnGb1Fz",
  "key15": "7hQJ1LAnWcMiVh9KAhh7d2sfu5fPHet5ZB4bfPiZgmczF4DsPLy8hzKJvpXZAXibkLfY2XTWjDu38sSY3rbhBMV",
  "key16": "3ZhhZrghtwtYwkuP3DKPmcrYrDZGLgzysxRtfwuBXzsYFx3YdUTWSzUFNrGm4f1cF28rU9ZyyyEfRmoqzVDV5a8k",
  "key17": "2NPxK2VCHtTPxsU1y5vpnMS4g5835DxheadtFvR8hEo6Sf3WoFjtdKPU45hrd79LcYTac18PKCyxRb8UD1D1bAWg",
  "key18": "33yR6hACdpXgLLEB39YbRShZm1Xf1WovTQjTL6Wehz4f1WkchHqgzXKYzUUhQtnSBX1fAVy3SNjHL99wDubnwExY",
  "key19": "4ufC6wP5ZiUfaBtoR7MEHsv7qbYooxAhhL8LWTP7JwejbjU6sGwNfEYboJEkpmDU9dXBDY2Ehr4vvNyqcXM8LUk",
  "key20": "2tTeYDrWAGCfjN1Kg1AtZqYUayUoRe3trguM3NRqCr59wu2gKrkSGB4BZZW1p9m6jTqnqfxPyVi9Lnapx6yBXrYX",
  "key21": "2XkJEvgzUchrUxBRfm12o3oTRLDbJCsSvSpRnnP6DpXHg2yVkmsYy2i8SKV8PfeqA4U1pherCgq2VpkSXtHnp3Cb",
  "key22": "54dDUipf2zFGn6WJ6aEZYqoUdZgwbLBbRSKRsqXBPkHcMRx1ffXqeDpCKAba3dnMrdp5AXQ5n7KewiKgQBTdFUTj",
  "key23": "23MmojsZGx5CAZ4mGA7ffMRy3uAuZUCPzbcK9vxiMq9tKudbwXAX4SmqfpuXQmtPQLkCeQzSvBRiXBRoDKR3hMhr",
  "key24": "5qYbbuUBxvmgJgMN3y82fo9GToesm7vZWvhfj5CeeNTx2M5AypuT98Cc2rHDfX53xBz8nf5RwpNwXVYRDb14fiYA",
  "key25": "2E8K1i938Hw4fstbTrPUjvFK5kxVGyR1zS6uGiXoTc796tenctoqTpB7fsWb1H8jCtPwqniJchbCWMTse5C9nZXf",
  "key26": "2YitowwB2UKCHjez76bwu2y3u2PisbgiR4oTeoFdTRZno52KL6e1uMrRPM4duU7aW28tzaJEC3TSdAcaMCVmnYw3",
  "key27": "3P7xEnfaKp9N5sG8E24ExJoY3CKi9cAcRdWeR7GAf3LgFdJZiBpMS3jgb97RYwiPfQSBhFgyLj12LypGcgnLEicb",
  "key28": "27oKeshtb2rkmrNdAtb4hkdP4BPmegUvsECT3vNtJXw5tY9RtTKhpTkvBDSbPVutxt6GyZFvbCqYShEcTDWKMvd3",
  "key29": "4NYyUUTi3zsj6j9dAStw4AdMQihTpAj1YJBfnFwBN3zWANNwbL6BucjVYx9CGwE5F6yHew7txSZVSvw43woNnTg3",
  "key30": "JkC5G42Pp6cyjYsqgKwKyHqjSTpMmFobnoZBMY98KPuGzsuzrhsM7b21trc1G8yVhdCa2EDRFo9jtqEfG4auSRN",
  "key31": "dcV6WCUymqdk5yGWmATqQAf6TboTaP45mmkgmte9W7kQbCD61uykrR6d7CfJfJ3v3F7zzwPYohpsyzx3bDHRhSS",
  "key32": "2uqWUUYSZbcegpGimMAb6Jgs9ojpdkVYoJ7n5MmpSqfChWjyzq6y4AsTuX77bJvNV2keDRxAVeGSUSXEZuUjk7x9",
  "key33": "WSLviEL1NSusqTbfZj7UKLkfrcMT2fsxgVrZz6AvEvnfqoAiGSkBoc4j3qBksyX6Bz8dedFsCWC9y2m16BufaDF"
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
