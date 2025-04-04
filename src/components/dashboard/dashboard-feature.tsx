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
    "5753U9MB2Zw6Xgoex2eCnx1gV7idixoNwqhkJCQ7oGG8dmoLfims5B5vmQTLR2ZmUuuft9aLNpjFYbUWU5P2BC7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbpXoqSgnMAJnfuNjMZTDqopsVByU9ymi1vUCyLBKdGuKngGHYLdE6HCjCkDNPbjkhSmZCjT7N4GFrnAN7PqtcP",
  "key1": "2PYfF8xvhgS7vDnJJoxWc4J2NJu4qXwSCHgwdjqqEgYwcNR2iJhGqgRVMphsiJ5CPVuoBGZHV4sMaiuRJosHESEY",
  "key2": "3E7VwujEK4EnnZvHkGiFkvxnLrKVBM3HQ3H4zYvxbmCCHJejximPgwms1tgNGTnBDbag47e4uMzch3TvzJzPLfRF",
  "key3": "3rnKUvwscYgGwUpkenQLKbDu8EhkTUnXPiQYXoVLVJ5xBX8fErEBdSb4zAqKZA9xWb9rsy5MCsgjVY4GVVEs2Yoa",
  "key4": "Vu3SEpq4kGNLNeDXx9zjLxcd7CPqky7zEALZPCLw7FJxqqHYWrivkKnMbJKyABfQNaL6BUgmXznLdqzsBqYRdAN",
  "key5": "3k8MQivs94NYFJmEy4BVYaMuwkdM6hsqyWFnz9voLEE2VSZcAzLZ9domX2R3CJwaroLQ97AMJNuBY99HzdnFeBuF",
  "key6": "8h9WSSW9yPNhtyFkafqML1En86i74dZaTafmsynqYpzkooapBfqsZu443zcPiJqpmTog1CZ7Z2NErxqT7VTDH3i",
  "key7": "3jgK5aae5ByXVDTVFt4sxEugE7Ve52MG95jw2F7Nk66BUXyC4ShM6KA2CPBbZ3UbTW8KttDai7KsLrzATE1wafQZ",
  "key8": "EEXkQnemvCZtkNwbB5tDHKZNzk1XmyNzYAjwvKE4UTyT97EGU97WGStsU4CZojuinSTtWdSpWoBAMJssPFTjKbc",
  "key9": "5ZGpSfAY8Angu5hdNNApKszGYUxQJoz1WGjocv6NxjJEdSfs8HN6z1TgXWLrZqHBe2bZEQy3Ycttxxt3J63WhanP",
  "key10": "3WF9Atcunmy2E6J1DN248gmzbpznYK6s11ZiMcHvDLUNuTut8SSBqtGaTQiarrs46Q7cTx1nLKSPSEpUreT5optp",
  "key11": "2ziyjo4wGLFxNKWy6oFf8cAiuAfdGVyRwjQBwFkkRVmRH14XGQ3hg9YaF8eU7JC4YFqQJoHKe4jZLEWDhewEzAD6",
  "key12": "2rH9KWabSWhNFC1N38sDDdDvVv7iGf1QSHDjnUv8WSUEvy7GjeV9M31hkanKwmjq5QLBVuvt2CTFgjTdKqRDjhHh",
  "key13": "5ZqM38yjDmL9nmstXB89ZYzNhw1N2NEeJPutZXew6JBdgKZGeLDhwVoc38mkWXvRBgFRT6UKpEMyh96wVCWntna8",
  "key14": "4C866R7yTitjVPcpjZJpXiX1N4VfHNCvz2FhgEuHq9UZqqdbNSBVQkA2fNm6yAavweRUUBej9SFU79J2dqR335fp",
  "key15": "2TNcpUAYzcde7V8VjQQsckQNijvwAknre78z2PmUDiNnCBszVMa9L7kgGkJJbu1GExpE35wwgPKVr8YZ4uUnimU",
  "key16": "2BJhZuwFz2yLsS37sTRfjkWZCnYnybMc8yXUPp2otFwnhSLmBSajsk8ivWhYdg5hYeBMzcnsZcfLmxwhkQurFEde",
  "key17": "2x6nMSdnWgGyMUKSgvq6x8p96RyQYZ3jEUYVJxYB2c6ucnpToHwgnsipWQdkCk4T5hXCEvDL4nCQq72jUXcLuRYm",
  "key18": "3h3NJ2gxSisKB1UVG5VvfpfzCfSyDRR6czw7eW4Lsm4s5PRgQtFhXP6mnHrp6AsB5HLEseDvawSZqWDad67tmYk9",
  "key19": "5RyAah2dzM63xLWSSMJY4YcN9vemVP8EPVfPxydiLub4jgsj9EPDRrLHYKStzNa1FthyXouzr2zvhX6GfhTiKB9i",
  "key20": "622aN9j7avufGafVQra22gRsewRkVf4rUxho1NpNB3BLDgdbdyGqUw9fmX4yTgB47hViuLHr1wtLx4Y6Z9eKm3r7",
  "key21": "5TrFPYeKSQ59Sng7ACcVPevLGTtzUfsX7UUyWaMoK9Hj14FyJ3FmK8z6p4N5z3dpgUepzmtp1gYNm8w8Ba6TaeJG",
  "key22": "2TsvotJ3zYxHRXQkqxEQzw6mrpLwmD8xWWQR4LQWumBCN5cHuSFMS2Rcvw9k7zuDTCgL9PfMZ1xqc8EU4LVC2tWq",
  "key23": "5YduP9Ecrzb7fEPJc3maG8GP9hKeRpDvzzhCXTcZb4HdnWhz478kiSxBVVEMryoL3hSrmfTy4ZRZ5Vx4yE9YMwW4",
  "key24": "35KWCKwNVH3zMu6MVwrqcoXPGbeE7hUnimeC5Mk4AumhXDgkxnXvjn99JmFMaV9MF5ZiRxVvjWxJPk6mUhAB7Zx3"
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
