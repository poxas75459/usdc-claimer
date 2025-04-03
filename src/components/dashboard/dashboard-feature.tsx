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
    "2vm77pXSTrhwYodCMpxw76kZpkUJxWCMSKc44KUnzihxfukYqfwSQFDRpYgwTsxByfeZdeJmWih6e28545frvqZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kPKkyrq1WUswrS82daZ1jiBmf1uuq9sTXbv6SBFq3m7ZcKzrRtVkcevMawKgbq5MijvJE8KUspfqGMggtduKyYe",
  "key1": "C17erMCW5Gf4aj4VgpLVN6VsXr57zrctdtgr35FnwQ1Bid5U3E91hkxftmr4r3nQRUnVEhqRdCpU9L5saR6FjAr",
  "key2": "59m3JYMUamujtggwEjpcYeaF1hvdr2igZVt7Zx35M77piin91PqxPAbqdk6NnLT3JH2862xCpVT6Gpo37mHLtG9i",
  "key3": "d6g6JN28xbpjbnu4HoLf36aZm8CiivJDDEBfKmiDWeA44AKjPBiZtrpsZY4nJyisyMe5TQ7mAvZmeWEDxFTuU5M",
  "key4": "3XN1oYApxWvfP17HYKWpnHULKS7wqf5HGcT6rRommbSakCemjWKK6P9MmPCrqgDdE34CzDCh8WzGSX2NatNuXnfe",
  "key5": "33kEGj1pDrngBhH2hBkYwiFMEXSc9gEahrR6MusdMCRgvvuLKCou8c8wKDUtjBxr7BUu8wiebAgpDVqTDvfigppM",
  "key6": "3kykBncTnnEuFrR2Ve5ZTQjJYweiZg9zVnhtu519eECRTFinRGsaBGmcb2jP4QBdDATbJApcbMrDP4YkDZKb3VJi",
  "key7": "H5x4XBEA4yG9MqEmJbur5QfHC1fEC69vZGwBnbjt8eJTM4sjYtEn9Nd3fQ2XnSEgb8SwT6gtHtjZecZQD5wcvxx",
  "key8": "2KCJ6QsEn19BGwAeiuLMyibyDPrYp12F8kRwNsBDTJFjNJ4piuBCM32fryabo76sFBBCN4QLttQ23QoNy1eeAT92",
  "key9": "5v28EGCQuHwaMJZHNm94HrkiutrYndmacBa2iK4weUe8DtfSoc924RNSkbEPZvN6s1SBLwbadotPQ89ShBo6goCn",
  "key10": "5bWTYYBkFPM2QMFMGmbKeA1G1mtecLvxK2JxFcgQVDgDp4gyYooBB4oTNW3kPi7ds3zruAcf5t8Mx5Sn6WP55obK",
  "key11": "3Yn1hjVfxcoDjYssPzoahXx5z2536R5GSvf7p4StNaakoabx8TVRdHeza1onYeQnMCmAy6jjHQ9kcBBobcB7kRpg",
  "key12": "u2qvmb8TadNEiUhZPeYzFCZdPoBczARuBdUdegA3rnMn7TzWFZLvZsmcUqHHkcgJrHCBRXqXGtbmrtbsw2kqYsZ",
  "key13": "2mCDrC2BJ37R9AxeGz6zQE2Kj4Sqkx8wF5wStFrrPCnP6UmmQyaVFJCH75AejphattmsEbUMh9JrB3WxViLK8dDa",
  "key14": "4hUNj1LUioa1jAMzxfGG5s6rhtNpWNEhBn3As5dJUZVb6TWiYCPsQDsrskYQgav945qMdaE7SL4gEHMwWwa3A7ho",
  "key15": "4SfcSn5xv5Grr295qB3DyRc5d3oYiw8bQ3EoLui2RmqfZxxpNHhEnsY1uE6r9n3W1HjYyxTd1Eu9ZDuNQjcfFWoa",
  "key16": "3qiMs5xcdq2fYzZVRSGXA5UzuKLAr32y7duizauquWCTYUxdnxzUaZJv7EHJvn6q3vEaeBjYVHfPujXEP9VBiHFU",
  "key17": "2zk3QVERy1JKX6EDeHZSJ8Vs1WW6RKMfR8JG1hEV25QcjnN6CiVmcff3WTGzbLPA3iAc5EsCPS8MHdLSgd1k4s1P",
  "key18": "4ysRrZ4c7yySPeis2wGSuNgapDUPdNdWkKHhpSBXSt7yQ7bfgAtYbcH1gQyXWgo9uM2gtc9AaR4hJVr1BY6auJUB",
  "key19": "3SJTND5gPHjhtxgaC7kxmogVopf89GF7bJScWZxQV8mUYdV3mFj28njc1AC6NangJagA9kdyUYJ3NgedsRLBg4wA",
  "key20": "3uZtFFkVVNk65STxZgYKXXQckvnxLf5dK8Ssnu1kxnyLEhce5oCTtTma2AVnZK3rwwKgxMBj1ZZdtHYsW1aS23sM",
  "key21": "4WvmA8z9ogZm6SQgGt7YFFt1woso2GBTupvSFvB9y2E13rfcJhYum2Exr5UDhiARS8inQBzjJr265EPTwYkcKjLC",
  "key22": "xVnrY3d5Sw5jkQtrv5qgJRkuZdAoTPs7ZnvdrbyCkqmu8eqBAFRuvMSt1kfPBqFJpw1eQwDdPn8n31WQYNSenNx",
  "key23": "4P8scG2PCJZMj6WQhP5pEMAFsnnTxFQtdpmhg28JagweRuQT1oNCukHL8VFNSG8yrW9t4KCxgEEXCkqKq15RDrp6",
  "key24": "2VTV6ABUTXSmCrVMgJWJqosYaVegfCzHFt2QwFB6vYwjsMhjX1FHyu3yZCWs8EhhKaRfyADENb4rYBXQNBgHQm8w",
  "key25": "2mTRo3iB9kmkonyCpweqkA5g5LGtjZzMoCnWLCt1URx9WiSUsfdtP4HGevnky1PAUU7CGk8VDVJosyLUURf13dyv",
  "key26": "2PJ9LupnV9h5cmGX94xvJvQK1JkZmcek2ZWC3hAwskoZqmffYcYgprfQh7PmhpUheGudzjvv2kVLFJBN99d1PxV2",
  "key27": "VUWW9nGV7eqFuhnQWEK1vzdi1RXZqjmgAWFfUaAKkBWGjVZtgTvaAk99eBNBdwSPWEuD3GZUfodVg6nKLphmS9q",
  "key28": "5jNjYdpGKpM2aLqtxyMf455oFumANUPYcCZ7rivZHvpsQbbToWfnjRR5mACdhPUsDsbNuw8gJ4LGd6u1tDh2BFHS",
  "key29": "vn4cee54HDCjSC2DyxfTHVQsrYUfKGNuVm86khoxuxnLtLCCEx2fYLpEYFokLNGRnSx7G1wReJBjKPeax6RubgS",
  "key30": "4u7eEPhA5J1tUJKDonNzGaiBqW8Mck9PhkF136RehFhNFYDYixrDPQH6zXd3A2gK9ZU9Ft1rz59U814ukbo2xVmE",
  "key31": "5FrU9H7kAUV4iKtugBbiDcarwokBDETCeMDZyn7mkakeD6qH1NCPFd86v3RPkgjc32DayeYP3sPrqCYc7YEuXJqK",
  "key32": "2XkZMtxjcpeDfALE4LSeFZR9fzhpXPtA4gbszFquG1mS69FfHiziB6Qc7FPy6j7zWpH6u9rxgEBmXiW4QveT9arM",
  "key33": "2MBaWyHA9yeX6m3bzwLidupYeNsuBK1R2yQ1XP77niPS6dUjdzd6uE4o2nvr3b77s7bjAcAgDHYuFG1YXCcwUwFp",
  "key34": "22hfv9v1vmxGiR97h3FBdow7Vu3LBanSHrU1c75vFHtmLTYQEkBcwjd7HJPDmqSmfFQMXTBxzssXmKqwaL53Bcxj",
  "key35": "4yQHgCb4aD4mFNT7xRExnEUNy5K866NAWyL4GWFgYhUSFEVNCgLNCfwEaSVK5DX9njTtVhY6m6ZL7mTkBfKvdfA5",
  "key36": "tXsnHbgfAkEzo1G1Q977PAHoqSuDj4w8MxyYMwo6Q2czew1zFoWHN9QneKkYBTP5JqvnyxKhbxKHWNYhqq9o9k7",
  "key37": "63bsyGc8hRaJCmVGYgjnsF4RmvbfrU4W3JXh4iLhzjPVSFYatMapGJ3cLHRcrbCTZ124zB6xeVvWcjvB7u97QuBM",
  "key38": "4wCtkvfgwUFs1iT2zNUcKdrrafMpHyCyEMBKgMKT8okbL9vywvKNuEufUvxqo1XKv7RDDFJJHUYeYSJ2sPA3Kxks",
  "key39": "5asXbYUozybrgRWJH7TjVqp88xvawkhsSY7Lr7eAGLdGPY5BBeUQEx52vgyMdj3xDarVEAqvinhkjKNxrM1zgciU",
  "key40": "ckhrmp9MH8suQKHYQnaTWsNEZyGSQxpLGVNftqizMhWvaDBYmVJ31ZmGnxLgdmDA8LeSr7sn8KViBYMB9n8Mx3m"
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
