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
    "37jG8jnuFNv1C6MENMe19M618L9cZKtBn3e9nrHJ5JdpES1M7xUN7ACdvKBXNhczhLRXZBk2PDy9duDu1XjnG4Lx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VUZjG7ta3RVXvZJUbKTgUognduRiLtgufNsHedrxA1P1oSjn79v5ajjhLPCjgB7JXvPZUSWuHxcHuiEQ27Ta8Nx",
  "key1": "6eZzNAdrbD2Ww8s27jJg8UfjwCeDCyUyr9mNNhjfWQyVtyM8uYAZNLkRmHBHKSm5b3hhmKqmbZrNXHKmKYJi1wN",
  "key2": "3YsetfpYsGTcFLafBXKcVuqXgbk4puJ2R4paXpLVHcS8Z332cQoYdw7DuDpWiJTZkmCvqWuuM2iJZiWjRiD2V63D",
  "key3": "nkDv1Jc4yvrJNdLp3hXQR7XQccsBXjs7v6sybtDPy6fhxiWxzeTFdR4iiv5p1KnzgHLRMLA1wPbv9zMTttnT5ye",
  "key4": "5uiGS846zgD4wvf5AMLQrLx1kqwG1GYN5QvRu3PG7oy5treeGAnD3TTSHg93HQT5eYG8VqLpvWYvb2aa5RUA5Rea",
  "key5": "2MpZrhN1kdgu7krTkYRsXLJ9BYDukvq3gdtrx9FWPx6sgNLKgqZgdEWDcfT3oTwKcQBfc2BF9wqUTUsBCYM1Eape",
  "key6": "2tNtyBCBNKHbePXQ5hssahBgADXG6onw566bxf9U6iCr1kHWxHNJ24czUaqUhe7KQVJgmNSrx3bLYp78UkgZuUai",
  "key7": "HYdqRdpCqyd9fX5R6nmyx4G6ZyeWsupv8nyewWx61BQGiGqgE5Jq838B5Spd1bKNnACTqtdeDZfc1vpeC1p9ec6",
  "key8": "2CP2fqUozgqfh262YMm1FaDLa4kT1T45wbBJZH4yJEguLtuqKEZquvysmLBYYHzwKxDqiX6hqhPQvwHGGdDvtNaN",
  "key9": "3GNJyuz7rPVnWTkoFWoqaKGZT6WUiRuz52ZmKjPvfawwfTXmX1bLB6UhH1jaJpGssYS4RPRmXwR5FPTDFuduD6Fn",
  "key10": "21bFgzBfrQiqETqLBFCXbHLwq2eTEQCoogjDjPXmBn3JAsWMBrZup9cVsfopXJ4KMXF35b324ehsY7mwhvkWxiJE",
  "key11": "3h4oMuuwL9sfQ2xq5HKpPSHSHX9Qev6k8wvRnLEGwQ2cFZNi3PtQWrqP56hZsyykgt9CfyiCpQKAizSienvE94iZ",
  "key12": "2oGKx9KcXwYjvGDSZWzXk5RFhn7U1VUFVpjgTyN1Wf6y3g4xQrqHVfNM67ES1c4odFMNW1To1Bbb9Q6RKT8af4Ab",
  "key13": "VmNivwwQjHvLiFDH835ZVejS3a5VcV6ay5Fz8n8vG9Xgj5oJQFmqdEtomSvWMzxJgLFQBoYxkdBTt4bVpow7cMP",
  "key14": "41mbpG96sa73UmjmfJ3ntjoYEFHFqRbcwFxPytL1AQkHEYA6kpJ8DaXmxqG1ABVHbpYKP2374JUQnGSEhrn2oBPa",
  "key15": "3WekTmWwkebxB5EJWWiBEHyU3G9po1ya4QXAuMC5MnrQMiqiPzUn4gKiYhxmoByBP9DgNbiWNEb4tvsEQPUaCzvw",
  "key16": "2bGkMQkXxVPeeoHkCfesY7G6PXAs5yNRybKzqpUZdZTVRqFVifJZ2EZj7m4mnvvufqVLKQYXJBpvYaFpqafy71c4",
  "key17": "teNPtPvwEicpybBfu853rc9keYFtc1aE2kvMSnM55P1RLwN1BxPGc2FXtzW4bWoYm4wnjCyJM6t1VRCJgAYgKmW",
  "key18": "2rRtkAgceu52TbFEeHbGdTJSVmCDcEraHXrQqQaBx7sD84SV6KJHzLohtDbV6Yaa5gvoEdq6mBn5BY4CiTskZYWT",
  "key19": "4JSpvbUC1j6X28LCHmC7cpUv8tRZaAFF77GaHGVSwrpfjxTmwjqUdrEcrUqopRLs7w4zFkNS5f4B2qtQsCEMF6TT",
  "key20": "32wit1yRcrwgAAzhKMcaRBGSbwK82ujCnJ8RSADhjjtjBDLRaKZMuT6FkWeTrMLsj1bJdPbDZWcowVDJdMd3n36M",
  "key21": "R5GYSu8FeeKfhr68hwdPKm5ejoSbaNBtuznBBiJzn6fasPzv8gkmXoSVE9pDCF2T5CAmBYf3SUoohyns9Xkig24",
  "key22": "5w3LSYaWQXVD3WNp1rBUmFpuPDW9YndufZSHVuQkocPKL7T83gnWPa65LoTcBWxzoC3hK76YLjcoA29dkufinMVE",
  "key23": "2hPtTjn6nWfLb8YfJ3zSw2s1yrqcueE2JjjCXLwdeDHQ7wDoGQ3Ka29mHt9EWzdPJYgfGXzjN6kPSwdSWiYKTe2y",
  "key24": "25eLURaPP8JPWQ1HXwJPrjjvgUDXkqXhLKGEXfcVTzjW2opLRenZgBRGT99UX7LD54TgTf1GpWZxVbEosnutn7tJ",
  "key25": "5PSEkx7GysQS3H7HR3VESGNsgoGTSrXF2nzPfznLyHKPZDAPLs1LSZwMMyj2AZhFjCZWBV5DsuRYvRWj1o8Ek1g8",
  "key26": "2MQH5EsTLThND5wkVdZY5DhKnHrvY44GBcyQsPYULJNRpXaMbBfFY1pvk5oS4fHsXs138uK7GMNKzf5NUYeKLjQc",
  "key27": "56G7Dg1Uz4a1ns9FBkcUgaMVhZYecgThSXgm2sFwqFE5rSezyJ4QUqX61vemGJe8HYeosK6eKfZEKFjpdZ5hE759",
  "key28": "f1Hv9axm4onPaCFeXy11SjPmj8gMxNEmDbuLhtpBssKLjXjzUQRqMbrJ6FWPwkjZKNZ1d1scqZAg6ZuJMxg6hSF",
  "key29": "4D9pYCTva1dAfggnrYg7bJnh4ZxpU3HfrLSFkUK2VhRdBcCnoiv7MZsCEYYLyWPZZtcojfNwMU76MJMnneLXoVmV"
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
