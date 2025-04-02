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
    "5UpjUqW4UoW6U7YyJQ3yXXsg2U99Kj28PLQHLSqD55tHqo87QNPE72ogmYpvWZiSC3GqRHNbNdRFZbjtpJi6xzdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFCKG2MVsB2HbrvzzNN99hajp3u5ThsmvKKZe2j2SxKtHwYV6k3xUv1N12tyFdxvJCy2iqor8SjyD86TCM9WbX2",
  "key1": "5rVY5QRmhasUwp8Wb59PXqv2adg9UNDYbbwxbQ5Ca6HjzqdMPzu51PYi28zCvUuUo4PNw7Zz2tkConYJ8qy9iLKR",
  "key2": "4tDhk8htbo6U915kWFpoh8GDKk39QWvG5NDiqwbiNjiYCnsQ8DXoSGxrDDaBBoEJXbR7QQxQxEFLrc57WEJbM2F5",
  "key3": "4GabpCJf6tFbnSQoBnmnGunJQQ2aaCuS6DtzrZZqa7i4XpETGd4RYw3EnEbDXZkkVqQznHhqc1rdr1hwFpSULe4K",
  "key4": "3bXiZLuxzDBuuxJjnVHtooHLBAgtRX13K9GnV3YYSqCKgLVx82wPPVnJLfbrYxn7LnYVMe1hn1A6rBYKwX5j58m1",
  "key5": "3bXcsmTf1KwnZZLoNjvtd8iuHJ7ygzqqPDL7iYek4sj9L7wHVTxz346wTyvmZi65YL6VpH8JnFaZohAYaQdCDUE8",
  "key6": "3xrFztRo794gyfRXiCDg64iSLowvfr7pW7j8ehdkEmiVBHf5uGPTiGUXBG5h34TKiCS27xFrL9c5sGLCZ7YNdru6",
  "key7": "pdQvhM83872au7qfBhy5o2WvBGdFnyjjk83GCkbazZEUTwNueBZTknUBft47kqe9GvAis8x8Pxv9pdZRmXBpqEX",
  "key8": "5kiNs8cH9RnsVfYDxENxUM263f84MDsjNhxsCzB7qkMZpPzCKnB8U3QCz4UcvGDcHr6JdMFbANshqxZK5xR1QyD4",
  "key9": "58X2uCsBaEBmqT8mQocHMWNkVzhtP35sTvTmQ3MTYVwq9NAWX5AFtu3dcqWdAKzKoHdxjmjz8BszrULTSEPcsrxW",
  "key10": "hKkDUYieQdXzf1nuHMDxhn4DPhCtYb4poFzprBf4Tirthh7msrevDipKzVCZD5i5AhAkeqHVKMSJrMVEZ1LB8xN",
  "key11": "GE67KQXhB29LApFWaDv1PeDzsKXbvcyESg2zW6yzWHAejzxXFrNyy549eNq2yc971ueFGEmPFntaZGVaqUarzRt",
  "key12": "5tFshXDnN9CZd6yEXUUH8CSApDrpSEQfnEDgMuEqk3PkqomaF3MZ64piYHjb9pyiS2raNZ16C5MwfJWSYLNrMCpQ",
  "key13": "57o1DyfWy11szZiFHTLxkoDWp2McdMtf1fJDXqETcRoD5o5Q84WKDtErSANyapxXCcjkuATQcLSGi3d7kotBWsCP",
  "key14": "enrK4N19CMGQpC98GW3PsSkcL6LQq4nBS144qX1rGd2TjsEowREkJg2JL3vMrdrEG89fQkGri5eUCY6AsnyTZtA",
  "key15": "62v3qvUa2Q5vJ2ab3pevkV6ukKs1SCaRhrJhUo79dRxYn8dGVtKGWXmq6fYFrpAWsbB2Ft7hkbPUBVKWMXNQmvLD",
  "key16": "eePHz471MH9oT9MeQSfJofjofrRgncN7r8kGR3au7FHPQQqVBwBJvEW523PBkwY6Sd6nNczbnCwwMkcL4hTg7Rh",
  "key17": "2pjy2sK8Tyu2cjXmU6RMTfZP3jpf4VMhTYJfFqhhsHA75EwNxmQC8imWczLYHn9EbpeiETnsTWcr8S1RSgBxDPY3",
  "key18": "3hdg8V1nZzbnkZx1Tu9UnzKK7zyf3KyyQJ3rZoi5bD2aH3eNeoUWm6Bj3AiKmHcrzn5yWogq263B99pKkL5dNhQ8",
  "key19": "52nMpY1QsH7qmnFuVqnXJwoTZeWs2YpyW7cSjXDfuNyGejgAmcvWpVxKHagZ2hXkbbHetNvDMadTUMDcxxDkPTsr",
  "key20": "32Qb7YzYeWP14sqLYji8JAKn8Qmm6TKyQK3d3mpzV9sMxQodUbV4YyjpAWkqJZf5F97dzRWNmoqpS5uSg7vRQyTq",
  "key21": "rS1Gi6oRVoGLaCemMB4XVxGVnqjy2TTecDSQeHpu8WSRdw9GHMatf3NMGXJrdQ5mUryGVQhXKJ8d1RDafgukdML",
  "key22": "4Zk9zfRwaVxtSTds8Up6yza4Xzqj68BXGu1ZYiPfxxbM4aMtyoiJqFCE5qYyhiMz9y195xi3ixdb11LRMmGv5jU1",
  "key23": "24xZPUzmAHZrnQ6xTxHnpsUVHZL8HKf4vfzGbT2sYUfJpPq1k1SWHqhUQjrmKtXR1TvnbYpdeFwQoSBXsRUih4Mk",
  "key24": "56RgUCUWXrLGZXMBkdYo43yKuErqW3q8YDPE5oqbX4GE8YAQN3iMgtWnWdtm8RzciSsYNm57MoBXoe2eTJMA28C5",
  "key25": "VrqjGoQ53W9jUoGrmEj6Fum81V7PhTKS7rdNCPcdXmakgPHKxPYVdH2UNi8ck7zicXqUuSFUET57Aky1FdwPJ6N",
  "key26": "5xGT5sivyEtLFg3T9wHBEzDpU6EzHfgP2HpaTxWBy3XGdGWfCCGbkpbZTBzcd56fUWyVpSVdrmb1ENFL1vyYJVSG",
  "key27": "396FXJs2S1iJKg2kevXv75AK1xSUeF71aLTq2Yzmi2jP1nkgiW9WB71ei4Ee4xCSv9pns9G9FqPNLgm2KCi1irTK",
  "key28": "2XCWEX4wAoX7oJhhyMUedHBneMkH1SnB2ofEYy3T983sooVHdpjWyf9VFufra7kL1hT2HZgKser7wFdPpGHopeaF",
  "key29": "4riwz8d9J2ywHR8jEjhfRm9gNKSuN1RHG6Joyus8fPXsRjGTp6E8XezP3Sgwwv7rjgzPEpiC67YFESqne3WnDhRt",
  "key30": "2Fvw31aX1Wp6HjgXznvKP3S19EVYDZ4hWYhyhpTjS6jKaeRX6oPDfivNcxJ9MUhC2wYLGuwKGkJLkwajN8qbpADF",
  "key31": "3pPCfov1kM7GdFQMyF5K8U6xtnsqyR63N9tYECzmQWfdP6AqNqBVFv8zBCpPY8kH3mNtSFphB6nQ35ZT5iDbkTQK",
  "key32": "5BcqrseJakoQcUtHyccw5kJHxUCM1ECsNFYK1Sr8SuC2QKCVX2HfKtSSice6RZHP8Z55tpKJvmpW4eFbCwifyhg7",
  "key33": "4mmwdWPWHS1DCpEDXJMsFowJePjvANDuz6bjAnorHSaRuXYM7ufacFqToYAo7LTT19fdXELHjfR7Qjq6wZtP6vEw"
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
