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
    "5ewZvBZn2VgFxXkWwK82hnC2GxXBVbCgLhaR3ZRZjBr7N37o85jnsziegZzJQwMuFW5yJioaEHTHnXpxXL4YEB5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mt4RqLg2FBf5KSiq5HQz4Kce1UZgjhoUKCah5E7QCwsnw4v9FTwiLafJbAXJqDiAkdBbxyjvsJhaPm4wv78ufSN",
  "key1": "5UusFCN4SrpL6tqz5X8YQAT8Eu357BaKDwJbQ51KyjqEtggn191rfM5Kd8snfHtDZgRuMP351cmXiPBYFF69nk9g",
  "key2": "3qEmJWY88iyeMsJ8qSmB5ejaZynxW1zmh8xVVyR828U3P3Lxv8Xd9dZ6jgjE39bgUPLjRDyed94rHefMQjZSjqpW",
  "key3": "3RKFrW3kdSbC8NaKfAnX194FxGtECBQx6WX1QJBgCuqpnbtNPXBG5QYXyjBXPCiTavm6QF65Y48Xc5bLZZi9pfyk",
  "key4": "4B8kNokpindx7QhLsHASvXUWmJZ6zoKZUDoUDSjhoiZQpviWNeSu6UzqvMVLhnd2oqSxqHNb4K2uHAjfd6feiQkU",
  "key5": "5pvtLpG3Y9Eq9rEFBs2bWxcwW7TgCRaHSDvF7QRLqPWGWo9ahA5EHEzz9YF9XqGW1J8vDYmtb1EN2J9Dai5bYb5d",
  "key6": "3xEf2aGytjLFcKMqv2co5wJymF8o49LVgmNKc5ZezUpvyHYvPVJ67ewpuBUBo1xjhHc9yqRbLw7uYFHp3EnZMbXH",
  "key7": "5yiwPXR9Dkd52sssRzkCv8qBiGwKh2KXrcZ3ngDyZh2a5NMzvADtreCvn4RArFYnqk3rgjrXU3ZGNUQiqZisgBnx",
  "key8": "3ZEpcasEbWS6zKihQX9BwhX4tD4wzUQLvtWzoiATNj4UaEYpahBPbgG5yheeC7PkPCCT9F1AkakNRHTb6nMtM7Mn",
  "key9": "UToc1TedTGhabyKJTYCtJMjeqQXwLFcYVdDry1nFCuaXX9YZssm541PmEN9xQ8wmBbwAzeSaXA7DXcAFHXzM4yu",
  "key10": "5X82KpUnSpz1cH2B2AVbntSWPfRSMfeQFb6wh5ynTP7K7RfZ5yJt92bTWwWcMT4Ve1zSsqv5cc1k74XQCMZpL9Fo",
  "key11": "3yRiSPHjRMBX7Vtx5DRp3FzDvKA7XCnxPN6vZcvTkwPsXru5NV7RzWvX63BRqMPmTWtYXuLrDVob3fzmXdmtmYG5",
  "key12": "3BcoACMzjNq93YZfUMzr6jVcwyyXNjdX5GCZJVi3damTqBqc9kpxLYSVyvp8Uw5hwHDPM9x7ZD6vBahB92CfFD7q",
  "key13": "3Gd1YF3VVBWxnMy9RnxHbrzgSZKeYXNYyVJjqfjwFVDExqd86kXEtBT3fFprd1snEr7wDHE5t53thGiSZHQQUrsK",
  "key14": "3CdJEtbjAMMauLB6AKMA8h13UiGUWFrkVX9Rr1afnbXueaQD9d83rRrr5zbZw5R2cTJSh7sUUgdgzPRk49XvB58R",
  "key15": "3K5LbqNnW5srwcJF4jivALYdGHjTa4GErv5ijgwr6S7kmrSmJQpHULFCxPPfBhu7kot1GshgUUw3ijT8vPxKQB3M",
  "key16": "4YrR6QCJofqQcbmjYMX9pV5MfaK991RhHPA4LBpSz2YSQJCCtczmuFGh5rFky7JkUwMJpcGrAX3YiQacXeBdgKef",
  "key17": "3BHDFzFMiF8pvbDiaQUzq5QigQepcPcyjo1F1jpDHSiG1dQLiYEPEbaSD7BXRkcGmcLnHEC4q3GsAFYGAKx93wg3",
  "key18": "5ThkVFULaZF2iyjUnhUVGjUtagQkDFhSNc2GkwUgqfgnVUGAfG3MwZsrPcNjteHeowDQNjGWoZsnTrQw9dDwyGWN",
  "key19": "iXWcq8Wy1tBvhgzC5zurKVcnUyrBcgJ5BqvqbphdwkzzY28o3ZVpo4Hm1vxLwiZSpDojR3Gp26V1v9yVKBWs7LZ",
  "key20": "5kuUVXYYnpcJPkZ66oP6q3dwHYTbzorNXNkwmSQsvunvWGT34NmkpChz1yFUkTtAC8UJNbF1ZVcWVzwrWKQHu5n1",
  "key21": "4wAawHgyN3o4PzZKCfnDgZuyTQV7bndWJLxsSGS75d3j3T6WJe9zaakpH4xCFBFAozcFTcWhiqKe43ZR1QiQMRm7",
  "key22": "4Pd4NppBgJuooWyQCw2ZELm2i7JF6p2yNoHp6ZDuixo3p7EUXN457B7Z54xrCtPW6MUwP9c1RMaJvH2HzBRtzKkp",
  "key23": "2HHHjD6zz5bizqtZSy9EFGpspkBqpL73ZpeJNRJX5kDQhusHg47q6UXztvBJFvqQzspi6o6Kpi9vUXEFo9rGsMpq",
  "key24": "4zbSbnZs9M5Vs4LVaGYhmcQjE39odhqdHNRzhzo9K763971bLdUAA7H8HpaYtEUhGSoAa29hBpWH66QZxtkbsVKS",
  "key25": "2CsNfnfm2b6uzCC5sXEPKjnkBHgj113MktTk3Wdwow8JKDy1zJstH9Fo7EvMqy51qpJhMTTM3a9kZxUy8PKEPvQm",
  "key26": "2WPyuw9SsiARe7Xuem8xNsrC4cxGwwPQSnRbhsnNjUMmXvYX8QHUxirUXoPKp51Yqb38ikZBfEmCoxCWnnBsUAq",
  "key27": "3KMYMDYcFoGTGGBCq5M7bVafWtWAP3rwUCJk7qLRzxNnUfAzfVkJvebCiuc2xXdKA1QJzoJKD5rufdopcQXpg38h",
  "key28": "2o4QUFEDHmgPsEQ4ZEu4ftFHbQiwMRyres1NK7HHJPZmF2L75yhDoZWNpFnHDB61ngHrWnEyfzzeotFW3QujGWCZ",
  "key29": "41y7kpjxfU8dtCGPpiVP5v1HSw9XmPDL3yfQ2AVrG47hKyEtkZ5N8jtC5t26fQzpBym9xV9KXyb1sacCUHAi6AXR",
  "key30": "YGrFpcgn3PK6c8NipAXnHGxiWB4heWsbtZaqrmMU9xrpJFvHARNckQK5iZk69RfJHKP3uxC2ADmnuwvxgQa4vqU",
  "key31": "4SCNWgjcfmcsNh4mbgM5Sm7UaxFjybyMqUU5EFH2J5GUUBMytB7Y4AqRKnDF8erpKjXSDd7FxDuwGDohLoHTHAC8",
  "key32": "5qdXEHA1ufRL1JTUgnCdkNDz5BQLPjFNKDmS13PzKYTbko5g668Nu5yChQgKX9ZiXL7Wtboz9KQqNXNJ8oJ5Cv7Z",
  "key33": "3bSZEvhyCZbMHuTvSBCctrTy7xjroyAfdbDpMq6UToN5jr14CqRrasyBgaX8kRqXXmuEjjZjjEFWyYwiTvirT8sM",
  "key34": "61yqXE6GzehNwLhuZNhiTdDpomSDan1GwR8Pvcx3nXnSWAYRSCchggyfgC99o2zFoqaV5mW7RihRGR3eMSp4KUyb",
  "key35": "QammqaTfgKssp3v2UsJKLJE6EG3f3tn8CDfZEhEVPTWmFSBpaef4XfakkmJrg71ZWrpHVius8eTC3zXeNs9Up2P",
  "key36": "5DZHPbVGqowUqMsmck38ALqXrXM8yXMoUx67RdjL2dxiSskrdJwLCtr5n6XHd1YZ2AGqZu6ZFmgpbtVhH2RaX2rS",
  "key37": "2YsmwcMMus29aF13jJHQDWEP6SZzVFTiLf6q9SX2Vjmc5byim775Qz2p6S7VHQnFYrWXVWQbtuDbBLRUK5dsVU57"
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
