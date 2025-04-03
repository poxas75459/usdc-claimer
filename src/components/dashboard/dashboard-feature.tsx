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
    "3me1uujBCY9LLToQzV86QHcyx9f8wA9wj3kYFf5FJRqdhaS8eo9TzYK89BP7P3v5qiZKJxBA2j6rxDrSfqyaTgvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CWdYEN6ymkBwmTJknANDtkuXTb4PVwZzk1tYdqZ39zXNwgc4TtoMioRbp6qCLtNkVJPiz2ji55Gdyktvaf2eykB",
  "key1": "3gDVU9ZprX4SxMhuzmz2y7hi8Z7uvjgdnNgwE4vNfGeEzXqaZgDwgyf18DmKHPaiqZSzHqEe6fpMeqwmgMgav6kJ",
  "key2": "5AXmB2Hb8xrhEcNhQrKYNi6ZomWRhGfUqL1Sm3b9FGvKe48PLgMbpQqnNVGkcBqoGhv9KK45fDnXMLNpxKGQ3NvB",
  "key3": "2JhbHxfqaLcJp2JncqXMCKx6eJCB7T2tBhKnqBEbUA4w5BAKsS7nbH6ACewrBCjyC5ZekNxy4Xb9uxSBEMz6muG7",
  "key4": "4cSpuxvnLDQ7vtR1nwG1KouipR3iSJw6JQJceFhENyprSsgiLMKswnWHezJqSuPVByjH44ShLegJBR1ewVDtapmT",
  "key5": "3cZNmU4yVWqAykcMa5Wc8k1BKwSqn7RCnK9o72BCmMKkyH3aU5E2aT4L6iPWVT78VVbLhA5DLsgMB3tfsaGC2cmP",
  "key6": "4kNseE4Fs1bGsNuScgdcGW7q9gsxMNnq7XtW3ArbDuGtS2HQBJ1adrFTRHYfJBaUvMjqS3fwawYoNb4RoJTPnbSv",
  "key7": "2VAVuNLH8Gz52ygUHMLzCjsgm9eXvbBvmhoic71DjGLAxf8rTvTWfyj4xKMK4YBK53Ecikx48Dt94cGXBnoQnUS7",
  "key8": "3nTxtASYn6BKLMSP2WYyK8M9S9nt4T5YAiAciH4mzLWkTtsYxFPh9YSpBarCFSTbvXeNeJSkZRS7Zdm6WnzW3C3T",
  "key9": "5XPsHkGt7pLeFfseGM8bt2Lq497hbXddgyJXmdk1jZ1cQnsqkq366Gsx2aMgKypMqojdx7KYJPyxT1sbvuAVJCBN",
  "key10": "2cAuChrpwAgbfkpqCu953XzHnAvWuh7xhx9qQYi7YxeehAjd18tfYXr2nHML15MCN9VAZ8dkrnuMCcMr4zMTMWKu",
  "key11": "3BZNBiL7epuhYXvM62YNV3agG9zmmz3N12DzmtURJBaMUjJVmaneK9EPjQMutPbez9WWE3K3erL7nq9tKM2F7UR1",
  "key12": "5Dd1e8iMaCcFdzLvv5XLR6ZCo37XUbURa8dGHGW6fNxzQeChRejQbtHA3boq68Ccw6B5fRpD5nSxQFzFXAEo2oXE",
  "key13": "3hY7Bihw6mtV5zQFS4wp2uiubCrAL4xV3GJQcWDKcgti83ZySYL7QqrrATxbvwM2nXrJpkWRjAW9DbJ1TkDFADjD",
  "key14": "2CqVMDEYJczTW2szAhnMQewoGFq8daLEhHBxQrN6fCdSAaLqGomBBHQ7Grs4oQSZKG3gBMY9GqXnuRaedqDX6D6L",
  "key15": "5HtS8HG35xE4toBiEAuJF3ye5V6Eks6S3t5Raa9z84HsVe6yHX5Z1Q2muRwv95o7bW6xTruC8vprcwE1EcM7L1Qb",
  "key16": "23H7pSASuuwemCajwLsRm5Pd3V8mg68SXr5Q2udQ3CsuPVKhtrSs5ofqm8Kia8WBNBojgYqUnVKt8WnZNvPLbo4M",
  "key17": "5nAKMKiaxdRxe1E4zZYz8iEvSmLySC5BB8FLNzjhy444Mr3gB4dQHUq11881GJSTCuMDanxVdfeycCrbwMTTtMUB",
  "key18": "2EYzkELw1zSTGhUVkbhGaFwGU5hUgPYRQVCdT34VShJizHGKTjEsqyxe6fK8n6cHCR61LUz7hjKjHAhX8628ZSF8",
  "key19": "4G6Q8xCYW8rPt8yrLB2asJYPWwi5JTR3o59gggAEbryMCuWkhNmot1GLMMN31a9o7J792Zn8bgKJmCW67XpRWNrJ",
  "key20": "3cpdgPQoLfrDFofnS4nBiZcjVWM9hWmNw8Sv6AG5E3H6DTRLUfsPRbJ1AxSjMPYAf4VWSvfogVD7t8KWzwUUBWwR",
  "key21": "3AH67A2NEddZqvGgZG2X9VjmveCGAK4UsWV5tLHmyxQpR14LNgvaUa5j5KgfJYrGjx9AEkgTsiCvYVm687ifk2tN",
  "key22": "21uZ9gLqHSKjoQMb7YEtkY2LDgAE85hPPxnCfPyRQyWRKaDu5oX3EgqwUUqj9X67Z9vvaUVt7Vfq22xKeeqLjqJp",
  "key23": "2NjhVPK5m3aTYZqgjyZpyq2fJJinaRLf1K6DaeCkFijLriwoGmvoKrzLPRsxStXPCBfJaBhyfh3wMjLTHRhGWa53",
  "key24": "ofhwmUtNraPg6vrGwCyvGLeUeFka1iwvMu1YXXWNPaqxh4TaNnm7PebsK2bGFwD9JRxfz9GdViYBgjRpqSXHy4a",
  "key25": "642Fwwv29zj5MqmnfcNuhBqU86AeU4ae7FrJJRQhYvfSAkJWZhDt35h1M43wLEGByAZDZ4NUQVHYpbguRM4FQcMz",
  "key26": "2Y87caFdwLcMMsXvcjHMBkjNxXLE5y6cab7uCktjtnmewuk54xFNk89Tfm7ZHfvJcBPd9BJDUfMDCF6ybZa7Vek",
  "key27": "bidvdQSiDt3mPWi5nbhdA6Dtmsrtcc7mi2tczvDD2oTsLQXqBgPgmH7z1HBNLDJq9etkvjUAfMtZz9ittpC6Kyv",
  "key28": "5DFRWkkuAbmFt3PvmhpxD2TGXj2zzDnejN7tE1pCGmM5SzRVpMsaLWWKuF3quKjsCwudZLZBTSkMoNqWwhYhyVWi",
  "key29": "4YZ98VHj1Yt3oBxxpfJLfEpQ1LUFD5V4ZEpRpDtAkKwd68fMJvvYGr167PbeUeaR1QJnzsgBDPpXBMFKjwgWquuv",
  "key30": "5sCCgVW8xHw75CJzpySAcG335HSWu6rahDjyKrtdWaQE2ebE46HUQYfpDGWDTeUVURXBfz9Pt786TZm12vPPkmZ8"
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
