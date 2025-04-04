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
    "35hJh2FwK3SzPbHcpcdVYrGH9VjFoHtEPs6GtpFwmBwyzBiPmySEDMa7XbhaSZCs1axhK92EKCsrt3nXPtb7WfAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kfPFtvw2F6jXcneoeMJpQkrKjHUiVBHtJFasiQc4W5LK6jPoikWfFTpVtfqxH8rvTTgRQ8DxVN2PABsuCJd44yj",
  "key1": "63kjuTKUyKpzcTTiE53heSUUGiTYMCfi1g6PVCMjeaRz382Axk862itZ85qyv2vAHH6DsT7coR9AQ7NEPE5dr9qi",
  "key2": "5kcMfLheSucD9JyJ1Z19QJiHt4R1S8Xas2bzg5MFVaya5b6yPWfCBk2aYzgxZh2HfnWCLf64TXHjm1rqyGENpDCR",
  "key3": "3hqHqLhMcDWuRPqX7wK1tyG4aufk3z5d36NzntNqyEZJsh3ydc3kMhGDkZ6BpmnjkJSkCYrVVtfoqMYPEtzm7qLk",
  "key4": "Vd2hZDhCH9Ke2ZjQaRCc1cQEcVQTQGJJ9siR2mtDbDcunDMvT73binbZkj4LrN1HrbwHyTnGhAbKWr1h7KCRC9M",
  "key5": "f3HkKS1U7t65tczrpzBVHgv7nhJo83rDoYA3j2uFynPq7E3sHVeaZ71gdXVyAqniGUKcUQbc9EnVEgHLuCGSW3m",
  "key6": "4bAC5EgQSZb4FxwxpJAuXNMebm2zuJag74vj5e8bAb8Duip4R8ZHfMnckZEvE5nt9WpCbHNRLZY6b8sNRGaKP2C1",
  "key7": "uzLS8hNd5P2TRrKfWV5i49cJrJQKXgjTCZpyiKr13dMeA8L3P4ZjF91hZdCZf26JLJrJzpBNhjEcb8xPNvXYcAT",
  "key8": "4RLZzFNt9nFukKdBzmiHi2DhqaEJtPn73paGJvjgEZSHzeXGnu4YsEZTsJLMRtLZLv9pjXwu95d41yMiEAemokJg",
  "key9": "2YF5R3V4Zg2ANm4pbGzswQA7DEAyNEdHifSAcAqYB2KgCw2NzmVrNDN2hghKtBnKrqXd6jSRNBHZk2tz459xnSSr",
  "key10": "3F1GeLGk7ikXnTsp1n1XEGbRhwKwznUSFT6XP7uioZMfWrHQFY49pQ2HXVseZ7J8ACwu7K1zv1FWNjBLpHLuomYf",
  "key11": "9AYcB6ekWvri62WbjJbFVSd2stgcjRFQaD4kXQYukvYctRiqNCN4dakok4qzQMEwWhp2vZAUhnTfccz4w94mnUg",
  "key12": "2gbbDXrUrjuyuU5rVqBsv8xJBSyAt9dZ4wPHyn7qHioS1hs2iKpepwqdzYZ5UyjdoXRx7YPPCSgBvMZH8q9njp5j",
  "key13": "4NnVEt3QJw9raJmxrkSGjHkqW7nwrzLMz518cq3Dgt1c39iKfoRGFNTrmwzWehZ3EXvKCGTAWKtCLwaJ1cWEzirZ",
  "key14": "4Lfruy9KveE4KzijUfwokfHRvMmVtxcz6ThrXuHnFn2tpuBkcyJgcGSY9JQom21yUSMiZEfit31kjAuV7yWqnCgn",
  "key15": "3aAkwXWG9Rcu2indUrzhVAjAuiQDmc7DHG3CcgqJCwkgrBGvHYb4uZaBPqW6fXTUsK8SdhLpx3zUBGWzvTNvqJ9z",
  "key16": "38bDjcJLA9ATJh78UWsvutuGsw65QQtBneqzHcFsZATwfDJi6aWDRfxUjzzkozq7UtQeLF6jZKiokCiVbanG7JbF",
  "key17": "4FBSemNpW6zQkQh8KRwiNhpaBSP3RoqA7LrMZx3eoTdZoBWv3AVFFKJnyPTA4i9s6YXWiGhXpktwcGtKfWMg33MZ",
  "key18": "4UpvkD7JiTscATyHP97C33cSQt5h2ZR8qu8H94ZEnsdnwTceNaR175ErSrCbgVa5z5PveNWf6UvE9GBhcWAkBiK3",
  "key19": "2gbJWnhcv3BVwNkLM8vhupRoMWa3PCVC7jsFNnFQUuwnhs9SiapskRRftnFHNzoCDVRiiMyWgA5uHiXEurMzy9LP",
  "key20": "2dZX8KvQQbQQqaWLuXZuTv5mMtMoKbJrwoGKPcUBrvdUcTtjVFe1gQRyG867csmtMP8uRSAafti9aED2AacbWXiU",
  "key21": "4G2vyb8JParrJcpgRhm3K8Y4Yu2BtmYb7hazHWXYH7RadCRbiBur6Tm482wDyCJweGxtmEhW6XvTxfrQB1j53p8c",
  "key22": "5fgXU7QccVNfrUNjPrhD1ebpDZ9e1z3dGGXUKQ2yKqMMxUzDPQC8t3R2zQ1WamfUW4rprDFKiiPpsqAwdZtJ67Nc",
  "key23": "45uq5ZMAw9HW3hPztAxwyrkdMHi91gvxdEni4ABoUsDG3ESoV5pFwugq9mHkQ1Gwe1uDsBCnHRaRVqpCRNS18hEX",
  "key24": "EBZZqvt8Z18e1gcXtKSQqmnjjdiuMTb6rQFfbKbevoQkyv6sJvhbphSm9mnQeo51Km1KZ49S36BvQ324qHEZ8vp",
  "key25": "345dKSBG75cgmWktsga3dMEibSGUcVXKd7zY31H6UTJCRDoxT2rkY2h4G4PdUHot1PjBNe8VVusF2pJwiae6HPU9",
  "key26": "3hd8WFsf2krKKq9eehDB9KPBe875dJTNKmRcYAowW3TjfDVtbMtSTaf4QyUN2KaaEYpFS6y8exCJw6r3GtMPipwQ",
  "key27": "4XAbDN7ELbWUwSwHHN3j5nknDRybQhb7XvGwfd2k1RLNYexhyp1Mzh9wMVdie7jcbhWEXKxd6TDkByoYG1NYUKio",
  "key28": "3kq2Ugqb2BuztyT5UtW2GiTNX45FHTDGsEKfq3DjxwWtsCy1EfBTe8Lt2Mw15R6Pd5TDXzSVu5rrmBuX8TgqgNzT",
  "key29": "3xgLdxefZLxQQdvJsD4vtQrfBAoU6CEUbEvLo4bDgTL5NtaQwTUnL9gu3R9JKnWo17ZzxVikpvVx32gcnnskuYoL"
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
