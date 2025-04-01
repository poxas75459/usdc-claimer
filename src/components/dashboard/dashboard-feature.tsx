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
    "3kmPF5PRiBweHWb5DtSytdddyrE22bkfnohZbx81hWX9aectSgLanYkH3uUr345YT6SoxxeochZGp8Y8xy5Xh7v2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g7y7ZjeAk6UhXih1CQB99nnLZco2MEzwFjDv82CCPhhL9yCeKa1n94rX93vAM61X6tRLQYTQoZSLVWF5NCipHKY",
  "key1": "4oFgnWjTiXyqAvYm86K36c4thUTirkzmxtjy3Zn4ARBatzsWKmfsGe3LjnnAPREnX7dBkGmfMHWXkx9Jg9NTMRqe",
  "key2": "ombpymQf6YUSCLE3pPThXd95yLzLdwHySSob17Jxdd7BdRYZchMW1aAYGY2qQqf2FRR3Mon8JWADUoqzsim2yxb",
  "key3": "2s4p6SHCCccLJge7LfyR5tAquc76XPWGwjhhvwhp9xBib1C9SrHW55HoD917t4uwZxcZDYGL5zHcQojiFcca6Unw",
  "key4": "4mvE2v5t2bLY5DGXjdVUX1CXPcPGnit1iSgBKpyJY9p5zjWEVRYeiYxrRR7GocHpgLtiRhqrFDGuirkCBNhiNjLh",
  "key5": "4wAqfbmgYLr2A3fHoSmzu4gnmXh3bLQomDUkZomPGkCn3Gsauo3WTbckVCj2EYEYF9F45x7FszbnCRLbQbJu6TtR",
  "key6": "2YFEzGewqoNV7Zvb2mwdbU5ouiCJuJtGBNMWDeqACELiiDFoLnTEzpaqywa1CfXSgSCyTQqGhpL27WV25yhAxCVB",
  "key7": "3a2PMVEUFJWPqHVrnEUujxHA1bYU1ZGaHQN75dHBVjnFrzT5wvF9nFe5X4oegfSHQrDebfsAzzDfKowHQo7X964",
  "key8": "XQWUuwaQaUn1cjCo1wPmMD4SKdSiq4ugTYnpHinRJ2nJT5CndTiAt6A76F3mYGLoNALhGnQyYrxCTNFf9voq9t9",
  "key9": "2t2sKAib5gTGxVtHhDTwuXmvHgCL69ErqjffV9XP21xK3381mZ7VV1sD8a7kUTX6wVHyiq6FtYKXJs9wAFBxsNmw",
  "key10": "384DhY4rLEi94kDBZmXmZPFBHcB3k3NDk5P1UAguNMpyoN5hCepA4kk1EAFHWCzDxgN9LX3szMphSbqqwk74K2c9",
  "key11": "2GLqaffEstrcVD746SLguV3qD6VizKdwzduSsguVSuh7Lxe2f7QNUxhwchUXDfTUYNFRq396ya92Kr5HYUXtGnkN",
  "key12": "4cmedVLsG9xvacicVkRe6auAbNYshq8vnzioF8dg8cM6K1HZNtVfvFngKM91hr6ym7ZEb5F6foTrhSC3cfAncyj1",
  "key13": "26sXpGokdJZDRasiD4bHWNg9VTCMFzChygtTe14EhD1t1kFL6CL7XS7hxfQVVHmxuKPJvU43VsRn9njqnpFdwgbQ",
  "key14": "JE2DHpEDkUcLMm2sNB1RcjF1vRmuSiuxFx7RshSAHcibdGDwYXD3gvPvGVfreQ9fnktHeRkuAfBrrqW9eqS2nY8",
  "key15": "5K2HR4V6vq1YiZwZzUFAB1qDLsCpxUZWc1AvbDjhZqQjiPG8o2Yf8jwm9Hs1NAksv89avxD8vrhjahpQyuh6d4p4",
  "key16": "4XJk9oUTx4kCZhDR7JQJtppjJDfetkcV7ixprWr3JA6BKL7cCPTqnPqCeRJZPUm8J6V3SSkNANtwFE9iWospdc9T",
  "key17": "48cbFbpTQiYoMJV9E6HYgecHXtXXmvcrQZXrrwk8wspeRFC1RmHfzEMm2a9NcVehuZWrPYp1h87mKh7tuGL4C88R",
  "key18": "2GrjiYrLvcs3dU8Ezfc1okgKNM9NnRBQsASshcfUWyqfQbDgvcyuAayiLU1zCGkEkD772Mn8AHQyAfYJJ1eae7Wg",
  "key19": "3FQ34gLEubMT5VbcBGBHjXSKPduPyr54JJB1LqWt3oUaqq8LRfSnhXE89hFnu6Jb9fzjdjkfYKvwFDiFCyoKxTB2",
  "key20": "3h51MLXv13kXWphNxMZzmw31sG6SbzB3T6qzLr1xhBwxZDCwVgQLqBJdjD9ui3J5D7UERb1admnsUkq6p3UmnsKb",
  "key21": "MBEZQdfRwsuftxpgBjwX2t2aQx23Gesbh3f9iZD1rmkbt7yqe8dVofaS7zsU6Lyzf7xmTmTvNS2sgp3fsvNBm5h",
  "key22": "4mNmmBJiu5eJWwdLAQ6KKwYr7UFx74hS6KCHYVkzhfcoqfpSFkWFwSWxywcMTxcHxpHLJu5ht3dPcZqnytTabV81",
  "key23": "jpmEt2F1Q2ccfj5nHmt9TL734LPZAbgqqeqmD2ZNYMBVT2fWgNt37e2FN1QYH5oxumQk7TA6owLYTCgcJM873Ru",
  "key24": "5pXMB8ZZea6Trba7zHqHKeF6Ye4VCdW5w9J4YK6jKQxqFCnPc9tq2qvaCJp2piyzV5p8173KUMacv65X5Xr158sL",
  "key25": "W3QTpyzvBkotJr8oaL6N4bHSxgKnNYW7SwtF7cRPAWZLFi8ngMFdvnv47fQZcpCHPGtv6WD2LoVBAaXHJmECeQR",
  "key26": "9XbMYUa1fgVNqJ3BfWCfgMm7z29CMc8vPyT5ivbQN2B6svNWqqZUrhokpyRuR3UfaPbd51Z1doQcGoxB4AA62CB",
  "key27": "2aaBRi6PVbi9uiHPRQw65nn5CVWntRmV4A2W2haNgSftq6VoxF8bqYbyNEnhPSp8uudJGCwizm4EGyC943iDyfzW",
  "key28": "4yM9vnG8FJ3hC7pZS3QFkkyz7d72ZbE6dbJT6XA9QyqiXsSSaDcX4s1Ks3XXsKVDqweWNdqDdPwpHknXd99KvMJA",
  "key29": "2hmiKZFfjgfJYfdsgveLTqzDAjhss38MnFKAZ6Y5kqPKyqAbR1CcPZrQG1bpD2TEBtxx4HG8kQDBJxJKgbwbPGr7",
  "key30": "4YR1xFD3nX5ztGYzVujb3YSnx47pqEmQgy6Xp2skxb8NB8HoEFYWZQ2MKRP6GkeSZJX3YzYzovGSA2kvC9UKGaMZ",
  "key31": "46gDDeHwk3ZsLwZHPy6yrrPKBQN4p62SRRYaGxHtgKtLFcoKbUpS3E1BhfC2cPyn1SjJthy5gff3ujBSCCwdryJp",
  "key32": "2nwWg8dEcZZLPLx9nKj8YYy1NzPeFDvtBY6rJjCgMcfara7BytzxQudkjJH4jDBahxoDonY67gaBPSr42g1JWCME",
  "key33": "5JYSans9JCjmGdZcj56GEa61hyejexnnemmdXv1sDZUcosWd9BbhGMu1rz5q5tH7DdiFeSnzeHHphh3ZHFWFZ54Q",
  "key34": "3PV6qkAzscfGVeaVvPZjfFXi4do9ZYT3hpZtAkxyaXMBuVaTVpmQDMPF8SjjJP8Uj2wb3idEeUYBsMrg19Ykznrg",
  "key35": "BERa99HUTYwoXSKEqU4UHv9jZe11aoMT3vE6HaK79gYF3rb1igMrm3KJ4E6syUMRkS2qAQ7mReUYLT17GtueLeF",
  "key36": "4pbJfGjzCNoboaF3UUkfZXamsjqAtTT7JP4nhL5pZFFKrrHUTpbvg2e6W1HZR9mqq8PdDgtpCQXKhLYoU7chwKKM",
  "key37": "4mnMNVJNskMemTybENSEFsJ2LYg1meWcqAB3ouUNTq4FLMHaoZGsvPRF7T2ZjuptjWKsYkqSRrfio3FikWcetfxf",
  "key38": "JA94tsj7ivNc7a4CrFRdfHAXjcsWJL9ooC6j9evCYddYRkmEhzTKP8VKBNUFhd5SSnf3y7oMqb5wFTjxEQohfUQ",
  "key39": "3Vtegfy21nqehzcfTmSNeCmGhuAHXeQFQs9HfbH3RxaBxpwt2LSTbzfGBTTipEQWRDCdLeb5dJVyyJgBPycDvHLF",
  "key40": "3VSawLYCCtP4UuwX6oJvm2xVmJynkWQQWB81tpTp5kVNZTiX8q7sqqgMEQUs6eapEQyViEEzPQ2NR2YNto3wsXox",
  "key41": "GYYMX5UgDk1BZVFbpSvpVA4vopc571SjSr4b2cLgvYPcmDpoA8ih6DEL3DUDyP8ERfv41WJyiqKYee1uoZRPCdX"
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
