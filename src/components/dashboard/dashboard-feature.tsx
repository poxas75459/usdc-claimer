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
    "bCPv94X2FJHUBYm8GfzBgrubsKGj1ntvaq7vAGZM49rVfuat7HRmxUCXVqDSqhPc5dbPKCJABRRUKoyRvnzxgs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QhyBoYohh8h1xtdaUA5v7jpWroScRycaER7WYXeXHuEqv4Yq97QwN6L6TFwSFKoru4fNZCbG4VisY8c6jsJihLj",
  "key1": "5H8nuMnUUrMLBeyAfKQjRoTjdNjWbvwvppTJitwNL1KvLL5BjzSEhB4YMEMAsWNJtBuGEbJa5dApTT58w572e65x",
  "key2": "2nGrmsVxqZA5Pfg5i41e1mFBGepV1qx3Ek1Yf23wZt5ECe42gsV39znrJWcGwnoMwC1kbQEsaHagDG6ohKKiH1D3",
  "key3": "w3T14Es7qJ4qtgEcta69Za1mNFRv4c51bTaToF1NKce9Zn19New1xCaYx7fCJqcsSoTBsWRxe5nFfMYhWvQg54s",
  "key4": "5PSsEEdyZyPqqwBqhNkvTdawBwqhzXpEP74D5nzbGGD8f1M3PTVzuSVHEKKFJ5HxY65BHBRNtNxHTdyRbXKyZ1q1",
  "key5": "5HQLv1FiZCqwYz1xgG5ksm8ysdtzNzLFc2L4GGq51bwJju8BhZAzVeYUuBgQxk4rfV3W1L3YBrigzHqpkXoPCMVW",
  "key6": "5ntVLtYbfUnpTEAWxi9E9mn5yud5BbMDRKHsWELAYTsTTi3Enz3LKnyQByxU6G8ZdFVZTLxwQXTLpHbLai6xZJrT",
  "key7": "5jJAtoJcdoNhntUKTDPZVTXzcVc2j5tk2ajrVm2YQFwWJNo4GpXdfopSWVnwVDHhmHH5tgRHtR6KyH4vPUNKikdd",
  "key8": "5USsYHXxTKo9ehQ4wCcUBco6uCKYEtDwbWRryECYaPsfJ8mLCeGTk4oKKokyDdCaUai6kf9iz1Y43rWPkL4UtGd9",
  "key9": "4uQHbF1a2v9cJLbStHX3UTpjQeNehVrQakNTT8yrQfiFYNnjb3xaGB9vdnVyCVHcNFHS2f1kpHftWoaStXNSiQmG",
  "key10": "3UaYZnu1L946HENoQ646pFJ31ZEYzGGpQfZNcKmh9UePjnCVnrtm9J8Mzj8GdsRPrWd3JAqFz9sY7G5Tcza4mQnR",
  "key11": "rrfjAz3yhwk1DqNKtp2AKsqwc6QDctwu1vifVzSQhsBA7h7ZS8ZqeKXDYUrhW4pCrNUXqSdBQMn3HnxTqLmHobg",
  "key12": "4HMo56rAeHZeSFc6rBfkLwZdH5JRW54NJSJVBjQZ58Z8ww9aTo3DJpBC211TXZjrAqrqBy4ZZ5bcPXijHv7zymfv",
  "key13": "3SChwNjRSWa8t8wXNQiKZzy5AKd2uWJqknNyn8bR4NumBRSxqpsdreuv9gEtB1xjpF5bbyYhJNssd5Pfgw3tV4J4",
  "key14": "2ipGwXDuDrtHEnk1pFovhEzwj8W6JGT8DnZSLRP4oyu4moe7SE7WdZkUiWy8xPGxTHmEzQLow5CQDNyVrgx9QKr3",
  "key15": "2ov5qGb5nfT1jeqAnDeuaYDwkBDjrE3tvGEhazjuYZbRhpnFgVk1h4gYR58XeNY2TZKso6myTzuPKyykBjs4vPsU",
  "key16": "5eXAvUckB8m2t45mB46cUaWJwmrWXHD2HV1aAbE4CLcSUiqmoLH7nFj8qd2iymwMcbT4ngK1da7ehXvCQJbADXyA",
  "key17": "2MY9aBaX3BqyLX3b7KjbtBZsjLzGC61qKYqTWQ4rUKGNvqm9oBYJBAqttQ4Y1C3ZhAWqP5sDttHMaXWDUD5rTPTS",
  "key18": "5CjzYiCSNCiXuAZPDk7jB7v6t5Q7vG3qgJPFoWsqWrU8jBzUfD5BfcvnUkuNkakCpjXjcaoRwPcBrj6kAqrakP5a",
  "key19": "2PDs8P982L3cWYkt4ehfrRMjvLsEY4nFX4Q3EYPecfSPvyL2L6SeD8cLBkxb1RBp1eFVe1vFW4Ps3XYH7bT3FEXa",
  "key20": "5hx4YYL1CHhQShhXi3KNyVwZS1b1m88MJ85YQKdG6aLa6pSs5VNBptD9ugDhFBbyGGGAop3Qp7twuEpLTtZTWRqG",
  "key21": "4xPuZggLGyQVPr2NWiG11Pyjgei3X5UjxKP5QYWknSSpBYtXSKEZZBbDCg7tyRGS4ZbK2e3bUbsW1yt8c6uFXao",
  "key22": "2z65cHWhYfmNpo5eEDZ6jbcLxNC8nstPnBfZUFFMZEF2dBUywCogSHgTsNKrEn3CFMhaCvgsqvvgKk4EB3YAJdYn",
  "key23": "3S6WTAQAfxnsFETixfskSTQ8cNK4nmw6mn3Tj3kcmVbXVaofkvbH592unePYKZMuAQXmYjfE48J9EyCGCuKu7DAD",
  "key24": "2sgdDV7f178EDAknNgJmxf5eM48RpGRoMVvRzUNv1f1i44AjcYmnkxnmE6kAcStFmNH562faT6hrVRNCx8tNoUC",
  "key25": "5EmyRL5fjYJAoQov957x3ms55qrBU8q2eQoPvJ68wbQ4LJMAK9VkxaEh39WEZp2X8Lu6tZ4eF5QJTuSC9Ucb6PLb",
  "key26": "Acenj5tnp3gBw7hK4AjTYaDxM94s2Kn74RUZUs8RAyRxqJu1UjmqEMr2FsXYZdBKW6VZiqRQyR5Rbi2Pp3CKDaJ",
  "key27": "w9VALgMaBCrNxiRBFQeXHcgUx1MeiuofzbmD1C5ER69S6KgF8nb29rhkDk4mBqxocucMcMGaQDBg96WgKYS65Sz",
  "key28": "4Lbbcaor9k1aRy2YWNLyYsfEQ8zYBStdxmCdwjxgjWpd1mgHRsf8ks4VCdqi6PLjGTCUyaGBFE2Wh323DLxQC3fJ",
  "key29": "5vgj28665rDFsmGJgpsNPkoYX35Ywi2aqhQpKqtYg5Kfb3THuximfwNtoC6HKQCb3BHjZZqGVVoLb7KuRTihzmjt",
  "key30": "5W6idZbYUeVu9tS4k5DBLhM49EvW9GbDPiRm6Qh6HnbQyae2RVBrz6fEmuyS7DJwvc7u3NNADq6ksZWZ6CLTTQ44",
  "key31": "586MLjQ4fodnaSyAGWqTrTofVP7gvRPVNHLXRyoQ7Ux9XLokq9rsuiA5rDCHV3EcfPXHgTY9BYCvPRmKcWnCoZNq",
  "key32": "2ePCWYdG7TyP7VM4kH9gv69Wh5Uk6a7AQvnKr6TWS1A9gr7w3Jwj7EWLmdcca8FTQtuytCH7MWBQfPxwqjSNAYPK",
  "key33": "PfJKvnY3uB7B6KoiZeJvG2HsMH3csBFaTnTfMouSbJ8EVLBhxvw7Nxh1wprT7Znvxx9mFPBFAxcHtCvtHWZUJJA"
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
