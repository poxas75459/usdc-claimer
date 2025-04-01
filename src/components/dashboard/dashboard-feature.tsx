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
    "48FE1aU2xbF5tMSMt9GpWD5RdnopxbfRArM8Q4ZG5D6ntpychWipnprzHDBx5yFG92SbceYfPeq14Ao5Pw4LjgZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65ksLm62FAF3gcVNdaAHkmtUY6t7AGMZhc2LM43DJYrYUtW6TV9jec9Y9cJE2K1rZ8mEn9wY4U2oUBrRKN4ikYRe",
  "key1": "6noFXUsoxysHkdsxHEBWtHhr7dVywgmNmD5oYU4kWhGRYZA7CdF2tbDQK7G59muzVw1nXaQ4mETGBss2vHqF8W6",
  "key2": "2mCa2CC2ZK8rkDPD5qZRSbA799eqRS8Wh6nJFA2WpEw4eoqYQwYx8YUDzKmAas4Vkti5oM7VvFtFM6FPjyB9i2Ha",
  "key3": "2ptWGU69NK731PirajY4Kh52wvUUBJ1Yrg7MirECdSEUKfdV5LQkKecsmLz4JyjWnou11d5UUHy2qBDR6MRXmRKX",
  "key4": "2CrfMPFiqMVx5nrB7hwupEk894BAdqe4qkXoTHpsTdnZ3zHCWePZEPsujoHSsLXUK2f1kV2Knirm6peZ3JtxZUWL",
  "key5": "Gimea1WsPdMhxwBhi1YGf4oLCB6JRUgUD8vaSyyBeQxuBhWU6zR99xKoGbv8R9szPG98Uy8w8DAYLH7231GUKn9",
  "key6": "2o66fd2RRozKpVdFfjxdxWuQpDbdyGZGi8vBsnCVBw6UHopf2KsaLAtAkvMUHrxAyRx8PmvfSFS29LytAEYwcUih",
  "key7": "33vFTGAtTPRX2t8UW1DCRe7DdXbhaJgxtBWEgd3Pu9QVhJexzpoppZQgVSebfUvzq5ZDLh2rXRmkExqRJrxcDwFp",
  "key8": "5hZXTcxe3u1NQQxbafL5qYuJovH8BsA3hGZUEtng2dEL1Gk1QczrS72Jx9Nt6irHgZ58ux91sV3ZFvJmQ8yEcfBz",
  "key9": "5TTcAFYxRCuCHBgmvhZ4Qei1dCU8Rmv8WR3RcyuKYT8XNCzwUvBVinakjifA4fdC9MfhXnXJyBKm3L6wXt6f5Kny",
  "key10": "4gbtD1djaWFJXr1qFKPDh1qVyqinZXxwN6Ck2HP3PXZCadAhjKwD8SMpjp8QytCqdQbTtjqLDnHd7q9Pdte67WmW",
  "key11": "3M9Vue1QFtR3UXZXsUusWg1cCbyEoDxoAgb19C8BPCoG2VFd823yKwFLgEAWMbPNwNUtqjm9E9Cxu1eJojLmV8d4",
  "key12": "z9zEysrPsLRqgqoucGWcPGSpjCvyLT4HRiq7x4sWTiCYdTvrysAaNvuNc5R4Yoow9GuzLePewNtCXfddUMfcid5",
  "key13": "4bTo4EZjPcQRjJaJpdmS7YN58yyCaUDwRspUmUt6ZtNy5FCGknHHtwRsfUR3QMdHzQtDcUHuKTFjPAoEr6nptTnv",
  "key14": "Qb3A2TXvQ9AVEUwr4D6rqXQAUvptffTfosMphuqUDEQAsqRQnxHXnYKvtqrqQnKfcDGvA5ZfnkegofQ8TfzkKuW",
  "key15": "WEQ2V3yWgYixkNQA1SLijPRPRSYFBRa5NaKDfDuEFP98N615buy6Yexw33gBAwgeqVDmmLSMF9Co26jd7CRAobU",
  "key16": "3HjWBS2W1Ef7a8ER3XS1CmXCxNSJz7Yuwqygsritf9qR7vtPGd4qso6iTSw1aFWyEBxrbbVPMApyPrv9zVuY81ej",
  "key17": "3kfRBKWeQshr2g6CgRtZ2GoNrkg3jddf87cocMKeL2PNANAAyvPX1yJdR2vJy9FZCSWwSKV4qQSvJeXkJw4ApRGH",
  "key18": "3EiouvFnjVJ1y2qj3K1yQoYJoXMtRR9TZsLpbXeGor9EdSUaoAuStKvsCisaSkMYtYLcDTMpydmVhVAUJKn7PcP1",
  "key19": "2fJcDU7Dv46r58XEXVNZtt3j4gQsvMpqzNM54Bsja9wt8xt2oCbKqDUPHnW7SFJXEc6ray6VYGNQMkq9Fa2aTBid",
  "key20": "3Ptuy5uRtXsHaEBB1cgE2PCLtvkwgAm9ghTsCSjdwnfxyx6MYpziR4Zm9yghUyYdS7F9drBiTor7QwqBtwYM8jTr",
  "key21": "5RbK5AMihL3Yr4bneNTAucgHqyTgJTzpX5ayj7phHyJJ8id3kfrbreHmVWgTNW8rLZoFYjnTxFT6daQamGwEvWxh",
  "key22": "3eykRGUrstPj3dKJq7HCPiy95me2qc7TW8Yj6V3rXc59AzV1sziuR7n5vfw8HedAnQNf73PwAHvJRTYvV5GmVyq9",
  "key23": "29NrQFDtXPt19X2qdk66syx9DoC2GBU8QRcBEG1zy4JntUuXQLmPgTAXDpb8J5MJCgFQKnGvwKGY31FTNQ7Fb79o",
  "key24": "5HzFGtwiDyJayLpoU2wREDH3SdvfU2C715375aMgXWa3NeKv7uRvdqYiErG7Whzcz1MgCmGc4uwTn6ceVvYeupjh",
  "key25": "5PK5g36ynYGQYFFAvE6T6U9fsEHTeotYYPLXMYQx3Luv7upo6XE7W1Q48a886J9f3d3UigcXrSD7oWN4PeFvuzE7",
  "key26": "2MVFTeYmQa8UbZFv1m4Rvq1waizZmttSc7eEBjbM5EReTSHQqEF4Kv7c6DzAJ5KD8gfWRnS1bTwj6RXznUKS75Me",
  "key27": "4GWPRRmVCai63CPCM8gfdUf1UmERvL8TSJQvtysCtyiyQjXnWu39jLMLwaDL3QjevWGWJHVrEtGbMjyXTBqWVcWs",
  "key28": "2A5EP5g9BwVa7Mq6doZxZyVzNMw4xensqkc6BWWATLZxywi1yP6baNnLRgNdpRdTKnuALznqkwDjaozPV3os5ozf",
  "key29": "2Tsb8iXM9yRWE5ksD5Q29vDFhLQNQkLk3FHZUMGem1yoWCqrrFyZ2piLakDo2caN4KnGqvhx41CTXxA5Y572J4ES",
  "key30": "2DSeZsLNPWqjz4USPp4MuJixbUqdczpSdg8EMAYSTktsdY1JTEt4FpyJvKYyduJk6tat8QGoi26bEeioD4AEiden",
  "key31": "65H7Aj8tjS3q3sUpJ9uFhcxH2GJzn5sJrzYo6v3uPVwGN8s4HhWbPUHXf29c1oiBreiYYcVf5Be69qJHFJHUgNah",
  "key32": "2YrTYRBS5crQbijWcnPTqG94a34yQ4cR9cXKQkf66V2DQQeFwkreU1vF6D9WL2uj791AKHrFrBiHUbCamx6WrY9c",
  "key33": "SUpWU71ztVhDgc9jHBvxzHvjBU4zxUeuyNsGujJuRdepsmqYm8MYgBrvDNVW7RTe3Jk9oNMDdzSMQiFLAhKds8q"
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
