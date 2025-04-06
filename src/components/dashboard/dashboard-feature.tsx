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
    "YBTfCGxdnzJYPNptgt7wLyau9jYqJUgkpo1DFgTobUCxsJeMreSDVcJncVds7mMWsHrijEFdkawAubQ25vUTXSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ti8PK3Pfsz5DGSDPDHathaFd8BF87Dove5MGH5WgBHLEUopuFSCsaMVckEn66RpBwfprW4c6VcN2THkBW4e24nT",
  "key1": "576eEzBFvyp1tQGUjQRskgYGjQ7s1EJWoTPoBhgUfHEtGbZ55Ya5Wyv9GT4ycQCNskw7UHRLAmoysMopzfjDBFto",
  "key2": "5q7FbMsN6jg2PzHxuf12rA921yMetuhm7Bz8FSXxyvsrsg7JTHo2faCyjbBcnHeHyrRQRKj7AHGp6gFabaezPdkp",
  "key3": "2DWVKUMRfe3y4ZtLUdqpf9J4tBrqv3fHJKKUtKTN9QzP87F3AXwnqYu28sL3GYze3ur8VUYFC1RcqaDY7WhnUbPM",
  "key4": "2Y5kY1EiWVPgEwcvr8vcu6h6F8o7gy3TVpHukwXYX4kLAUez1HXikbPNCsqjz89DdKoU74hkDFMV9dfFVAjZ662d",
  "key5": "3RUSiU9nxRycV6ZRmcGtxtUDGPLE7KcGFUc1geWHWGddfTBS99kryrpsc6fS7jDUkaircURzbXoSd73rCuV2KwGr",
  "key6": "KoWXbpnNh7CTFn1AhxqiXqcbmjDgzRdQqtStnzB8ryVAo1U7Q6aDk2uzuJdX37ahK8Z1uvmHQ68YT1VQjotzKZL",
  "key7": "2ceVbKs1ZfbpRAC84EmXwbGQnyj5WCYPNvxtUar5d8yoi5mJ9jvGwX2eLVwgehXCrnreBsLv3S1A2UTaC6GoET9e",
  "key8": "4qN1Y78zH7HbPc1BYFQU96ECPYs3gRMJoArHk383GD6oQFVBx9CdeuX44P8zyGWPhjxPrSaLWQK3JAk9qRfwkuBm",
  "key9": "3qTS6U826QHBctr14jGHRBFoh5rgfqi1EbXcT3J2yfNAJEDMPmniCZHKBt1r5YoxQeQcR46zoYipKC3Mb4MkkmCE",
  "key10": "QtWH5bMeCzvULnSvsEq6RR35ihdmpLrxqxMXJYgBg1DBV8VhZKcrzGhbyVf6KjnAtUBAcmQhVEDjNRmWMRnusNs",
  "key11": "j63GeGYrnJBn1irLr6TDbiXxCqGiDYJW2chkZNYRNYTjwizVKgntDs3QPAGa9maXgFtSU9f3JgJKm6L5DA1QQ9z",
  "key12": "KmoMQcykRjcTArMQXMMVQ9XJpmmviWa7UZFBBjm3Sk2L6atSRDGkxHSpP3VqraGNQHCp3it4oGF5gfMnvXc7oQo",
  "key13": "59Vvroa3hvRwgbGeMbdL6msrWNQbMwWe585taVeVvYpR3gzLfJNJWcQCrJUcb6teMVh2RuuvMbq1Ff2RJJneee7o",
  "key14": "2vS7mWaYch3yvt45JCUxZE3XtEs5Q8K5dzNm8Kfscd8m8xge2SE4iqweKAsrQJ4916gG6bkf5USwG7bwfLpFFCRn",
  "key15": "3qxGzcoCzWNgWwUkaUM3rMqpA5kUnAD6Th7oqN8yXuwhZAuetCPSFfzLvg1wWHeeYY3yiUyKqGxnYDLDQf8M9Kni",
  "key16": "5c8nUbQPvHwVGZSWrMWXr6wuVcrm23CSqqSKiuK6wGsE6N39ZEX7RKZq7H4jG5y2RKGzVt9ZTUJ2spLhcHfetEow",
  "key17": "nLXJVaAQEs6RqCH3x7wbfRENT6jGQEJitJviA8QmSvMsjX4k9SwhKG1y2RM4XQYeokzhFwX6BHEurqcgkgsL4a4",
  "key18": "49MaV3MLa8f57JFTkkp4rUpBJmCDXUdFFQHP8NpB5psTzXB2KL19YU6tfF3ttm3soSDy3FwXfVjfHA7rkLfTCVme",
  "key19": "2P3qqnxUC843vyw3QUxwVfb81NqDa7Bz8XvnKxWuX9wGYjkbzqBucJXHSctPKQvCP34FKYRLdifrFP2uG23LizNn",
  "key20": "5DgMPVDCrFqGTNAPhX5wykHsdqiKQnQQRYH4spZADoNwqSYwp4tBZj6ywUz3zyCEP9cxPEgaPmBq18TY8Ag2xyae",
  "key21": "5DdDQgFmk1chsd6o46ye7Q2Vy6K1x8WakEqQqSUAUBAnTrwotzW31nPxJEWEsBDsqr8kA2dVtffSYT688zNx4V5K",
  "key22": "2Z9gsa6XsMfPqnGGdFDyATHdpSsde8xkNdCdfQm5QtGV3JZgojDMLwHTYxNbyofvdVzTZY34BjnuNa8hToS34NRw",
  "key23": "5yyn23RJthR6xi9yGA1roZqAu1oXFnSMnk2ck3zYtjVvRiddz9Yr6g2JGvufJkuAEkMxxZovxeVK1a5Y4DgJHVdV",
  "key24": "2F7NF5hK5eVvsu7owyo8v7ee5S37DTUMoLELXqmgPR9oMSwYxHkydQCYNxDnbuZMJDNUgAx52b8YPcpVgbepBHUX"
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
