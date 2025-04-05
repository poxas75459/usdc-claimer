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
    "3qtowBSntA67Dy7RQRdo4WGxKJcXpTjbS1wur49onMaYaG8Quff3q6ibGJpfTD3cfkPxvpyfYv4TukL7Dosxeozn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54HNJ1VkU19v79p7RktBr7ofbHxzPvDxNYCy2pChuX1hhU9JGRgxHDQeFjfWbE3roaTZW453GxGQC6NqXe66dKeX",
  "key1": "4A2TZVc6V4V8yRVqnz6bsr5qZmogHvAgsmZXUUjq63scb2t1qT3myeHyMZGT9uYXAbH7Yy9huZD4EY6WGkgoTfry",
  "key2": "pKwzX5Cz7XdDvh8za7B1n8ixdCK5VadWuitdM1F1EiXNzhBHRXbU54YxnhdprhwDbmHoMB8Sx6HUvH4sPuLFyfv",
  "key3": "3noqwRhZ7toQ2eBJB3B683j9fR68sBwySS4spqxcykHZoF4SaBn9iMj254QnEnTXtbEKFzmVzz4CRPgtcaPRpcXn",
  "key4": "23zJNV3qFEzXvgyFTuS4wVKGodshMXZZiTUcvfJQVDufdiS2axH7yccwpU47mnD8HuENxGX1eVHxfQVHKZT8eGhP",
  "key5": "2y7NbgamZkCv6sVgB1Wk8xyJFDEZhL42QnFzRvfqgm5c1yFzW7FmaiYt4aHB8wnnppj7geLu345ZETRZ8yjf4JoM",
  "key6": "3D6n3P3KCc7LXDsNDrYUDEyyM2dqLtngo7yFkZASx2nMnG718r8kN2EFyjZczyJ3VK6ZvVSVuzaAM4hiDcEuv89K",
  "key7": "4ZciQFdy5PHtdCnmGXV1S229gpJcFpEs2tH9iiWuzVFjwYMbFsh68Qh93xo8SosV56eGqvE7RkqCNLVdUs4QSHpn",
  "key8": "57624zhbi5WSTpit5JZiKiwh7dBozKAUgrgfUtnc7ZK7RXuADdJXQHuLZh5R3X5PryhUaRZzTMb1cF3uCx8k5CJu",
  "key9": "5NydQ5RKHSqA5mHUrVZMrWJs6HCN3mkVt9oiD64aC4qQqNXycjRHkdidvDizXSN9pPLC8XoWNUmR3H6oH2Z5GE4o",
  "key10": "3dAZ2M3rFvXA9ZLaaxXWYbZPiHkEyN4Wf83phmNDhD4rqP2RMZonJDhzGRnzEyNdcXYRA1xjsT37juxwNDZHYX7c",
  "key11": "3ozEkGvzmvtuB3qL1virquC3wh4FhsLpPvNZiTDpDRkfQ6CaaGcrFKMmjdD4ykc262VKzdRZfoVQyUUcysEp2NXM",
  "key12": "67AdgdeZs6gMjm6EjfS4oQsjQn625PsqSSY6eib3Pav9v8qj5ZkpbwSEEE1m5YyVPUoFrMWMvHEUpPXR5B4DfKUq",
  "key13": "2QVdWydHVyjZTAuyvak2ZRtejYCPSvj9o6UDjDkPWzWdPYZEkr8nWpW1jQJz2SHRtbTLK5e3jXjgEQ45wsvybVwe",
  "key14": "nagXkFrEfm37PWryDyWR4zBgQEuxSMo5YtRE7PNAsvZCpTqiTqD83ZiM3WuEa6FyDHY9Wwc66gjNvnV3YQiUigr",
  "key15": "Qtd8CQD7CdgLQzA45o7J2QjFj8AzthvdEYXGgsrKvwz43UqjP3mWTpwFGbF1Jh1MVmQx94JgtT7CEc88iHpjs5a",
  "key16": "3Uu5Fi32nam3ytgPWQ3SxG3tvjVB9rgHDaKektVWWiWEoVm1TEdPWtEbGkwtL9wV1otckaf78Z9kLfT4Ysr6mgzk",
  "key17": "35QY8chXwqwHvbZu3BFXMjfdhuRvWF6Sn2L4BwbJpFxcaBu7nWb3LiW5qSZ5fNfziJCYSr3XdhxrKeh8Zmz6enNi",
  "key18": "25QzSbdKxJyV3pNf1S53LTjhqrA2T6i8UvgPLQ3cXHfJUN4pzwp4irpN1caGsnythRTGSupzPCJW9qv4dLjBTXLD",
  "key19": "3neC7xr1MPQC5RQ5eGH8dLgMMJkkMzSzGJavKNoMVG67ktM5DWkJuC5SyoQRpixy2NVJBg9WjaKz6RAHcsVEQquX",
  "key20": "5voLYZgew8J1njYxN2jgea2kij3E5NW6PY1Qf2fU98jtrPoejiEdUgT1qaZzR17Caz5NtCYoJQthVFJE6nQUSEsP",
  "key21": "56GqKernpJT7n6BwRgPAzTAUHqMG1xAeWyqhARxG5oUR7vSiWMwgbjWYUXSoUf1oE81JiTzS95ZasP8khomzQm6K",
  "key22": "5GrVFPeKkThPpBQoakiJebStC2dw91GaQqKM1GpDqnGeiFXriaKuQ72tDmFahSXmqZuYCHytK1TdAbTbXZMSdL1c",
  "key23": "66rZwKD1wrDkQ1zGrnQbioBXNzv4W1ukKqzKupKNkWQ7tcZHx7y7era7dsffXjxQdd2xcsMdtrKQkxL8ikyzVUPM",
  "key24": "5iqvgttSbFjQpsLHSfntwoEgoAJ9dwbPQGfahMPcyHZD91LDVztHYKy9JUmvwXiTWwsccKunAVYCLiCmsZSXJrdV",
  "key25": "4p9bgSmb9h5C1m8uWZLPmWRW88KN5sS3YNfe2a5k9ztE3YbxcqFocCxmg5VhVdMtM27CgfBQUgGEqkjSnShWjP75",
  "key26": "5UnEvRiB1PaWSDZ4Xzv2CC9dydLyqEXU341yAyFzcGbUmPHbxoTcyjqUZUMeVvupWBiJAd1a2nVcxA4WTTAZtQcp"
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
