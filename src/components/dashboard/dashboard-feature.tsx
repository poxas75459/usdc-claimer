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
    "gat4yiwSjSMFYgciv3XPSDfz2dirnfUuWyZvRkbLGtsKpeV8jvMFzrdi9aWsTCfkGeKRGWTD6oZ3HW6gEK9tcLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zXqAUbUmbeXvWG2DFz1jrdrf6xoK38mA5Mu1VbqK48p2Xf4eWmXmyR4YvUuRfTUcB6XXnqjJgipcpConz4pgez7",
  "key1": "3UQsnNEfpSBrWDH5GVvYv7hqjw8WaEu2VjrnoYsQmL3bD9PSkHSGyEBbzrrHYWZnsACC7tX5oirmuwf488LZNrQF",
  "key2": "BiRsYRg7QHvdDVaAnELJtuJFmyok9JZCbGaf7zzN24Q42u2Xy3RNir2nzyPbL6HKT5cMjVoGeo3PgBu1M91gQXg",
  "key3": "3bP4f3p99eKD74LVYFCpHuZJKppvNmq1fK3WXyhpc7FMxVjJyWcNRCnLfMq55Ha7Rk3PhMeBceoDZd3Mqq6y6NiB",
  "key4": "8Y3dzbLUC4F6GPDndemL2aLv254ovkrmmqBPEaoNRNa32F6juYdMxJ3MXWWFvuXXXpGQQXeCA1M22oATdJNTzDF",
  "key5": "gA7oe2HCrnPnd5SnTwqzqpbfxtLRoUCYK8K86dCeZxY6cbTGgxE7C7uFBGrdTcoY2BPymA85oMLjmUNGkGDNrXX",
  "key6": "2RmdU2X69K9ZNWGhPa3weqFm36QtyAsZudZfjbXM3SPea2SsyQ6sgVEYtWL5cjKsLScZWsZpjRtpbPcHyyht2inL",
  "key7": "QT9cYHmWQkGpkW7JULNTbbsfcMhixjJSqf1wi8499ygYBcmHZKyFoKZNEaHhiXL73oy5iLEFgbZGpmrc7hvfuTA",
  "key8": "4cW9uPUqsDiX6bh8UfwWx4Sj9dxp1mybM3LnrUVY5THVTHRhvD8S3kEMzksKtjRcsY2QT4t6kgVfmVt3s8b5MaNj",
  "key9": "5AJCQe943Z1z7WM4VjRrg1s7Kp7Nm3VjnpzkyXYm2LLb8hTCB3sMBFEckGjepUQ4RdSamJHWyz7ZKTnohjdfFmEF",
  "key10": "5T9Nq5kKiycFTRR6agJFwThFuWvUtUiiLg6AcNcCW4R6EAnJFwFz3UekesTUYKnqxFsV6YqjPwXjm4KjwrGRQbaC",
  "key11": "21sY15w1P3KfwKQXFFrsaWufVnVMaioy51rfKKASe2sjGGWyib7tYuWF4kY54Qmq9gFp28QS2zfHS6oEWoRLtoAx",
  "key12": "hLa4gBmFtqSfDcCDutR3PKbwS5wLjixZCspBuyjBRqzoAkHdymf4NFDsp9mjWwXQ6HKnKs3TNELxfB3YXq3YCz9",
  "key13": "5bnqsmKbwYREShZrY7RBpdd3svJ6Ccyg1fwHzXpgLaGVkuFWGudz9D4dkQXQNsw3j6awJyW2tRCi3ZmVQscXDp5z",
  "key14": "2jzMGayvEZxLVzkvWR4cEPj7LeJFciAPepw13JD129rmYH3D4wZkmC7yWGWXrXUKShQjD8PCkheHY6PtrsFBVKuR",
  "key15": "44R8N8JH9YTmcgjEVdJuNG45qgWNu5qCTwE16ovHxhZhyKikSHLrybLNCPMSSkPFKn6tZpg4GN31VcfbdtR9nDpb",
  "key16": "5RNmZyoofxh7Hez8Rxt2eDDDpRiTadUcwjYCci3vzPYrguexD83WNMA1aM7X2Yihvksdhu8A9Le87p5WBgTTayfU",
  "key17": "sjmA7z2vzgaPvxtq2hHf24j4CfM8k25i616tMqqfxRozqbt5b9UJ5tRWAqsp3BsaMCf6Hb1mFZ3KsHyJpF6YuM7",
  "key18": "3smzEd56f6DWu71bw71BzKjeyJyzMdCAdnSUuJ5UBf23iUibs7JQkhjCtRhiyPL2ZSwC3GmBNLbn4wVPoFSTK6CV",
  "key19": "58HL1aZUP28TEHyoTAhxmpMtk7CEm8gk6mUfowvZXThhW6zaUz6hxZhYFXVNM8TuggkZLTkdwXMVDYAXtgZJkK6Q",
  "key20": "3Bf3h3XMZ5ZWtDyR6WWQFri9QLE4T5jn3gRwZP1BfqyDHMUW8JJHaj7dUjA1Gkyh5VnwEZp4AXNYQBiXt6jekg5Y",
  "key21": "4kJnDD8CY3LoNkFP7Nxx3maLTUbwAZZgEqXhUSVw5k1VibU3dXiV5TXmFskyBUKt2wckMbQUVhwd3oAGFyk3JZD5",
  "key22": "3ja2GgKsc295kUqSiGRFJ1UPWcZtnffcHaKciYirfGyAfacbgr14BaBRe24v1RBLcYq8nzjkwn3wZR4u3hqKw2MY",
  "key23": "5ZrZTCnuBiNnHHkybs82zXC4EnkHHoNbPR89fEZmJvn2LMGxawjbV7upupzthbRDhhmnUJUyVT9hk4iS2eULpE55",
  "key24": "2EGRE2VxTPedJpftqDDM43RbcLkquL4qtjmDhBTBrty7RWdxiSyTbrx8FW1EHUMxSUSmJWRWdqkEQt4Nz79NRS2S",
  "key25": "2qob8SKALPDXLRwGDa9qFQgvAds5Tzup3Fg4KL1p9PXH3cPfzP2fVwCbaV9HQZG52tqsqdXCJ8FpF76VQJsDgftk",
  "key26": "59c79GEwF7xT9Rj8pg7ENuqbz3CPNeKuZPp5os41mNJLVnNipzYMJxZPEdyrKpWAGn5taYqDDPWuhooQyEjfbjRt",
  "key27": "5frmu7etLM5mLE1M9yYzd3VLbVr8yYhVH92k5M4HwXE7sKq4GEfriVCi9Z87awWgP1sntSbU6XstEiwfi6iPSVCK",
  "key28": "8m9LKnfW9iapFVRqEsxMnfwWimCKAuv1N3tgeUk81SKvqqaZHzv8MqFL4DX8PKi5iAc4S93fDWbJ1AsMJuUkXPu",
  "key29": "5Mdd7TiiBGJRaordFqSn6Y1JbCpnq2547MfkKK8ntXX5TpoRYh7waYSktVMMaDtrRWafPi6SUfSC7TQQc4m5cXSX"
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
