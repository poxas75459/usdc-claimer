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
    "t4NoDspRjVLrRty657SCxhJtrUNU4m98YiWoYLTvYgyXiyHkGwGFX2MAiGSqMhpTzwcPpDdnWQST7YDtzhDFRJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZD8pcApxP3a5u2JSSyYgCJCskqbiEkMqRCKfL7G8d1QrHGAjhrLaUj7PARejK5cdqy2hMMFwEuPRYgLr4cQAiw9",
  "key1": "2h3mCusQU9jvYrksctFu94Ho6A9BqzkMn7id2pvCYeepKW1RgZLPY3bqsRRunRjEnnUce8mzxrkD8bpzzFM8wfAX",
  "key2": "4fpECfUt6NY8aj2YYe9uscMPEKzCEm6TZ5qTXxpHGkM6wHuBRK6hUiVx88PdsWVgLQ4P6QYD3u4wYE8LxLaGEnZM",
  "key3": "4VCrptWvnqyzbmN83MTc1pTUPXUX1bn7tmrxGCNxneAfqeckpK5gbmcSMrUE6AaYwofMmowwGdeeQxKF2H5xuteF",
  "key4": "LpnU648y2wgFSEqHxph4apQtJrfxs6emJTCuuquJYdoAfBChj5oH8etyaxzpfkDDhzg8KJVitRkx6X59LJGtjcJ",
  "key5": "vS8XvPc9LccJgQP7FpZRufJi3Ni37mKEvE2NEK9353f7ftgVzbMyenXcaHkfQmo3Gd3iJcowkLn65xvrxSZphQq",
  "key6": "2mKhpft5mQ4t94B3D7uHW52bFzkcRSTmSdhMbL3DzxjfQZwxJ6NeePksb4NmFLJmXKRLBU5dVmjjXdiMCUFPTeHN",
  "key7": "2Ga4yFu4Z3zCTZ3ejyqm6toAvc5Y6bnXq3JXDHDpCUXTNQLqpZNfndyAG5vg7WWBd9aGbhHstZ7tjjrymJsa4nrC",
  "key8": "5GWU9QatbBGeNphyjCBuEALMFAUG7jXQGPrh9zPeyK7Ex7utThrU6xNJtYqrpEDhFvo6DpX9LtfkAA74eZ2P4xss",
  "key9": "51UGJfMqDvHV3eFCjFZWXX64xNC9Ktb664LgC16T3qmXhWuGHqVg49g2NTNAfUD9ZLi3VxDp9gSFbdLqrNJxXeLF",
  "key10": "52KTn31V6QDiesuHyyYKzCY3rLi2cFdqyU5ye67NeKoJt1h3xxu9PKYx5jsViyEAfPBVRUUXMs76ZYtZUaCG3Wx4",
  "key11": "2KCYUrr2VfajPHvcfZFTWZmgTW5wnNXoPPaxgWyGSYET523Z6wSPYfYiufALWtZEPGNVw4ytvW74MZPQAmbTpngu",
  "key12": "3FCqr5L6HCUHMtfo6EN7quoQo6kkMTxM66actMWaNMWjMAqUY8RK6qhfGM7LzxTaCXUnpovomrF4XpmTfY1N6v8z",
  "key13": "26YaXBis61nFRXnLLULFkhxhEnsPdeNvjawYdwjgCrjB6AMAkpDzWMpomEW4tUt42djYufCigHXBhRVYuwKbHFQz",
  "key14": "2dBDXXDvMoeSSmcKberjm1Y9bCobpKHvFGEfrypvtABrQdHZAhsgFs7YHxnYd4bjxhdnzTDXo7zBffCr96jAc1hv",
  "key15": "bsn9qGrvEsPaSb28vGRtRGnFCoSKpgKfegEWXnaHdJEKBBEwaEhEYC7md3jzpTTRbPY2LsECmmQuSHb6cy2zP5L",
  "key16": "4jBbZpXkdXdp5VR6cPPpUpG9q4a2JMej3aUBu1JfJtyzYLWdxTiPEBpzUetBTrqSUBdB9GtZVBsEZG2qSRwbbysd",
  "key17": "4ah9yNFeHYNpFpCE3WiaNvHbEwLU9eSxWUFof2mFQ47zxAj5SGqRqNhe3sdiz625zoJmVuW9C3T2Wkb46CSTf9Yf",
  "key18": "3brzmcdHo6yNakjPgwNyBSGphFrvnvxH4HNfJCi3zbU4bgehvkyPFGBcfxDaPCnHTiYGCtWvoGajYtBsrzF8yxkB",
  "key19": "3AfbGCnoMY7uKXVsdzxJHMKgp1BjoteiTmcTjvHZt4Nn9eNxSmDvRRPGRkERTys9LNr8H6RQh5uYStuztK9SM4iS",
  "key20": "5KDHhMguvMRVnKxtiLmXfnyukEapneKDTiKX1KzqzpVtt9kzF6pnn8PHrUAKcrRhbkKwBapLi2oLDxZ8LWWuj6T7",
  "key21": "3SK7PfMDWpHQiiCahgCciSWsoegz1AmZhFvbpvNhhFM7xZum4Mr8F6FC3THeyh3WyyFmScdUWVqGPbD7Q1kZ7nUV",
  "key22": "2YDkasRHjGrFxrbVv3xJTY5d2fi3Vu2D9a66Y4ep4MGK86q38N3s5MY4wRYKAt68cKMVpmCV3LunqacHuciFJUe",
  "key23": "5CgxTH7FjMf5sQrgvq9jmowGPoocP6oiEgHRc2VAiDKm6yiXkrSm6b4KLx4FBXyvvNAHQxCPbheKjC4RHZHJ2BdH",
  "key24": "fJEaV5VLUH8cG2ek8GfnekVxp3sPpapGmg5c1G5Kp2BH79JzfD4tPawKaXi9H2ftpoHdogoMxecTradjr4GFzcN",
  "key25": "63KGD94QoNQKUj9v4DmfJbwWcHny17XyuhARiVYu2nAsNq32ajGQZZRWUivCVxEdcLixNjU6xXMRTrvSx6VfteKb",
  "key26": "5DqerpFBrwu3wGrLEYoq5Gu57orXV2bGcsnKD4MJrGDsNmiFJLfEgpeYwmTmYELbFF2nRYz12Q7oLpZ6uHEf8Cth",
  "key27": "2EbergZZNtx2KM3yeD5t6KRqGXPgtDNJ3MPUuBzqwiJm9WeYo47iGDFqwuGWGHGSyCCsyfSrKEFHUDkZh8ZHzkKs",
  "key28": "XzjEWujRnZqCstTF9jgFCcjCjMh4p7dUjYCBXvfvAfueUvRTqp352QekAb4GmQnn2sn4xGfLaHXFHitvCxkqBab",
  "key29": "UBY4xrumcxFHmvyACmoUVmHai1SawiB1vN7TAwcxHZZiBG2yvwJEayLwVwfuysZj5TA2ZEBPB7nTC9g3kimsNts",
  "key30": "r5tnMTgjUFJzSqUSNu1Vw6W2uWL7XHsFXqUUkjsHSfoCnPudrkomeN5DJVriYYshW1Hf8d4kuDqj6K2bNVWbWZ8",
  "key31": "4xu6dpb8etKZ5hXFLWSEJkDG97z7AMNMh3zdFrwc7t6GUkAFYVv3PohuqifuD9dCknpi5zewDf18Kau5bvHQTasu",
  "key32": "4tyrKVzFd9A1ixdbTjzoZN6au6UvqZKEF5Lfa9PooBmXzQg36wAygHN5avmeaxRY917Ws1gY1befPdYdoNi2pgsa",
  "key33": "4ZSD68R7qXeAeJCpR9UYSWMubxJCsgAMYnAjnwZEyyvAELph3k5PBKy1nAr1LiTZdWDF4iw23Z7NckQVq378GsHC",
  "key34": "3YtNAPje1hGM3bCNT6ybuB7mLt2igT8MCLuC4sQifv8Pz3irQPxDZbaJw6Kg6PEbzGgnkeuFq87wUjwkRu1K9cjz",
  "key35": "41M3AVGe5fvmBBQyfHMW273H517hdqaHFhyoxFGWuNA5DzF2DfTuFLH1NVGLkLLt9B8dTg6SRPxecSEnMMEjTooe",
  "key36": "5T41cG23sXNco12CQMuVJeMDPtWyQvnuS3idzYZdp6NWzxGsdJCuoZ6Q7BJ6cgh3F7q3Y1VR6wHTeqkshP3v78qS",
  "key37": "4JXwDtP4d26GLQyhMCXoMG78jitMHqa2wAZwWSYKM32jaUPAN8tDJWnvUKAJcJYF8jndxdy29QLa7YXggJtPYJXJ",
  "key38": "gevQX2MwJ5HU9NYKkc9DapcY3PHRrorJtMiiLBXXgi6JuWKJy4NcH5BAbSVf5PJUV6tGUYMHUNuLmQ9CSRs4gn1",
  "key39": "47zod5C5jxKxo16sD8zZkNZ26EmXrhaNUSTgNn1akPBFL5GRpYkv31XsnH1DrK7Vq5beGz6HcLQo1QPiRLaPerma",
  "key40": "5m72s8zbPS5ETGwdPvUU6PS3FKqEN3AGZMSMUKw25zT135hXEpFg3cQTZTumgnGQ7S2RLhhHJw2HpM23FpbPZEPV",
  "key41": "5GgjzBH8awqq1JYRWjoxFCwVKiiWW5zZXjjtPZ7gk3fFosPpyu6KEa1QFnyUgQztUZLVU3jJRAnLgYJBs1Wn3xVE",
  "key42": "3Cjsua38bCMTY8qaT7U5eop6VNbnoMcPHZN8ktZ6XcQvstynSWG3Pc7HEsGrETVTLuqT2wnTvZ3rqZnL6qMsMT1L",
  "key43": "4Zu8eSsPENpHjoFYGKxDWioTZrg3zVe4p6y5KcLqArGjUWEyebaotp93jp7rwgedtGnfBME297CG2CmynEqFJSgy"
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
