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
    "3KBdThEXedojZi7dUiccvYR8ZN4CtwZLvMapu6RT1zE8ZDa5NmPTfZf8Q5iyaHD2Z4tDSQVXRsNPoqy3Fc1HJevd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tyKCL2dL2PbwbgoghvqsUebc4w3PvA9of11sHK3q1TS27rqu3KDvr3QDa6VJ56Lyw9hN48PDpZgGheXUVBRo4rf",
  "key1": "YsLnpDnA4xTTUpFqTaKMvHv9qyN2c9CAw31pEPV9RHQNYX3fBs36NpvbVCCe2Px9KTXG9Bpcji4ZjAeCNoGyn4n",
  "key2": "27ExFyuhGFi1adePBHJNs1zi73JWTy4vpgDW3CfRfrTRyA4aKdGjfLai2zEkimdVdtjkoqC6JKUwmCq6HKjfPPG7",
  "key3": "6188WCL2gG9rkTy7hW4cidhY2KgBqVYDn1ghvytQrnNZMqUmU8wgpwEGbdVa8KoXPWMM9QYFf6KjhjqGo9Gnjkup",
  "key4": "S1bPhqT82ahxfDWhYMJFzyyRtw95CZoQYUBGaTJdAdWHPjtUBqsRn9rxStgav2JPBwzUJFhMfNekXp2gk417yND",
  "key5": "4KaV6xBJKpUjKz5L9NVUFJGHPH8ZwbNWKwfxxQmmoiwzNh2UDGhcKWB47Qy1LLEAHTiCjGn7DTN2c8X8vK1VR9W5",
  "key6": "4QH9d8d9jPBUtJgNjd2XCERUhNWD2xmUWGxYGx9aJ2nApzEkKqaVGFvoJtMTbacSHYkAwo9cdFQZ5WB2XapAAPbH",
  "key7": "47MjgMMu3b9y6PKXMjhmFkN6ZmQT5oZXAeBGJeVZJMTQR2rMDGDKcXUXSf4qM15ypByaeAQkdGjs7ZHtpJZAXubK",
  "key8": "2JwjtbCmSVNB2BX1oBZSNUY85k2y11RANmmqGcYuf4KqXXhBN1bYjryEPe8tmb82bxGVByCohftpjhABrXL6PnaA",
  "key9": "5NT2qxbm2WMSYthpBpRu1cj763KjPayprNV4gWMXtx9sFh6Npn55mDEdAML1MV9oWqNvpoNJfJFv9L3b2fPWFdZT",
  "key10": "438YA3SssByoJUPsHxXPqRsr2TPrcMrsYqZrR93E4wjCU5oj4YhzG9A7RbqMkKoWjR7c2vMMYv7WwUrfkZNvboTJ",
  "key11": "295UV9o4N8aBTS8j91yfwu3Uzj1Vv13ZjZBCZpBgoGdHSmLCxii6gWDdBDopWsvkv2PVmTLmDK4gqv13YeAdKpuF",
  "key12": "4VgD5Km655iQ49YrxipXYTZjkAzdxhgvU2PtQVcoCpQUCFFPzCeawTptehQXsrV4TMTkDAW3jM6fgCUPveLCNsNP",
  "key13": "4Gmu7bJFCJpoff9SqMn2pRkTtxtWR7pHywUhwPuAnE82GKKfJ4wvtgnmP3BoaQ1d2GUTwSqhcqYas4rHDEU5XgYv",
  "key14": "4PFn4tsUNfwCK1b2NTtetXLqva7jaRfgnki57puT9vgtc7RFP2ttzp1o9quVpZt3YBkXY4LPr29gEKLziWmB7tq9",
  "key15": "3YNcgVo1unvhLip6NKEq1oLencK7ZDdGoffhLK2hK7kBmUKVaZVfYWZC2f2H4fePHefoT4PZHA7HN9XPH1mnnJPz",
  "key16": "3uRsp18QCKv52WR2FzZu7GTJYckubDZYr6muigAsXWFNmTeiBFdVWAp4X33Z2CAreq3FCMPVUq4M21Krrjzhv6ZY",
  "key17": "4YZnFCBuzPP5MoeHo496T5iAAxD6gs2bpVYmZm19mvZBMmqb877UAX6DVTN8pVT5Bvb3F831xcGU23sBZgbcQv5Y",
  "key18": "51CjDJBGKYbZ14KDjUCSjbQqWVCQkJ5kEpYJR22kez81cS4M65ogmvAuMUxjcCuUrMgFCodWWmXiVEmyRRtmUBi9",
  "key19": "UjkZrRJkg75v1DyrCsYT4fndbafKQeh2A49zt74mdcoZPmMBQhWck5rEQxLdJm7ireFZiwUu7HHEYRo2eUhbLmD",
  "key20": "3VcEbMZxsCmD7SaQhJE8ncCjsMxGE5pjHT5VmCUsGLtRSzo4vy5Tj21uifGVqekzNE1kxJQU7E7JQGqzVuTNiyVq",
  "key21": "3PYVnzGMRre2w529nAEJkfvKMrZLY6qobv72KapPP4znLY6XeqrRiE9tq3KRYqUL8poiPTR6auy1yebHrw9v1QqP",
  "key22": "rCS4teRRGyQKVJsbocowJKf1nqsxfdvZkcqYPfy5SLYrvs7hsgkbCXju7THTpGxByvec6JvNwFZjN1n5kRVcNyN",
  "key23": "538L9AH85fMAunTAGiMMwk4ogUbrWQcLzF7MwHWfvHtWV6ffH4wRzrELLTovMvnfaTntv4tbYJVftHugyyPNB6ZA",
  "key24": "57o9tiM3fR73rQtHkbSi3UMUbsxod9BP5ydLk1BUFf3sHcXddnKQg8sNphBfFWTjtjJqUvD8hGEZhRnqkuAun66h",
  "key25": "1Wx8JfEyZXdk1UcS9pkZ12WrkfC3Hm2HvNxMehATE4MnVzgho5wL4XRHfpjnb7TmzfcxJgvWx7psAAL28ScfNuv",
  "key26": "hSGPsBNXLGRDPx74ow8bdh6xRA2c8NtF87QC2or7iJiTQKceHZGFgSUeY6fHF1kGUDVg657tbyv8kASUKxuz1Sq",
  "key27": "oyT8aV6W2veQE1AsdHSrSs1z8VABRDDaeje9XZRxQPt1PTm5mKghmB6dkCzwi8ezLQgck5PfW7rWdHu6ZrqEaxf"
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
