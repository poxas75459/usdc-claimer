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
    "61Sqv5eV3YKmRBsa38nvGHKVzUL8LSU3EkijS9runXDrT2FosvhvpRjv243QALiRAbtgdR8Qq4txQfteEtfR3SyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xS298sZnxcM8GKSCaNBtSZfXFEY1QZLKEB63hhtatq8pJ9q7zvqwSV54Bh4mUw1ZEkakz7gAZkWFBWLVtvonSnS",
  "key1": "5EhxMvicFqq8X9NudfC2KCudtjCHmaMiwmjJoLii6vCMEVuLK9dzEm2w1iCv7kkGkeoRyAeyzVaYcteY3er5i4xE",
  "key2": "45HRWdXjX1i6aWqqebgnG27kzaRddZgbNQo3kRrBFJXxFtgM1AywD4VjxwEA5rZRVuRuogvJty5jVmCZrC4Vw6Hr",
  "key3": "4tsiJexDu8WopaNyYVwxxJnaRuGPhd1febsARSqfNga6XTsLPQ4ivRajPwHfQfBwaDqxy2iQWx4hnux7eWUQ7QpF",
  "key4": "5iPsjDnRHHybH8eud2sKDMCVf8dLty6Gzr4jx3LicFYs2NmMny5utUPR2L2mXpfqRasCVJdFgXbLYYjpQfj1s3T9",
  "key5": "3BJME3Ft2XcQ1aV2AcC2u7XrUMhp4veHvGXair5mDGshxsuyAAgkzunETKL9AgLy9z5Mw653fLxXp5pY5pTCJjbQ",
  "key6": "3DE3WbcdHz7tiBvdhdGMEqWxzB9E9E9bShQNaXpbyZysJyA1RGF5kkT3r65dizgfNqQRSFjgAvLNLg3Z99Kj4E3h",
  "key7": "9Lr1ug4GugFQrLH1kcsxaTN2ZdZfWNPwvjagB1uAwBjsX5k5E4FzfTSK3jd7AaJrpYuUzCfERp9LL6BDW5vSwSR",
  "key8": "5PpixAL9W9ncrVN5tBzoomCQ39Bu8xmSjuFWwMA471v5DGAQtaV5pEHx5G8MPceWjVNh9ZAQ8CexpuacQ4XgvXQ1",
  "key9": "3YpW9RQTJsPgncEBrkkQLiX5sBjCyRtxTY2TyxfqGfr3sRZvLZfjz1qoQKQSbRN5YwZeq2SqT9keCXHiq72CnjNS",
  "key10": "k95XbumQrC9zaSs2QaL2HmCWmoUUeuJxG6YHMyfW6indN1DUBwcswNMxjqGFhyQcXDtUj6VwafcnPZmMPCUKUfx",
  "key11": "2RhUrsSR7MF1jfp9mBMkRfX2XgK7zehkmnuSGpCBgqpWnndmZcQLDFCQZUFvyAd5pGcfcAgWM5K4caRFrg8rYQUc",
  "key12": "664WTfzw6UHeKHKkDbvFdcGg51BprpCwyBKxjdhA8ZbbPFdmmtGEA28ijTjqkxvvYPYmZGdyxdnWdVVZXB7rUExd",
  "key13": "4UeokHb5YBW2dCbB3F2k8coHHy52wfwKM28Wa85b6KFLqThZrgWxsiutiBwLvNwC9DRUfvTYcPjwnAL8UcwCBoSA",
  "key14": "39EYunapiHi7wgVzY2jX78fWZuHuk77wqhZMm6THEDsPiZ1vnNh75EGipsztFmWuwdRdGc3nivym92wNiHybf9ob",
  "key15": "54ou73o325DCZ2AHrbirXewDY8EGKPiyoTCadaFHu4FBvBZjGAbiKGJ3ecuY2NRxourj4J26J3SarnPz1tQv3WxC",
  "key16": "2t9ZauxfE3pHfBgZ7SH89UW32rvpP6ELnCknNhfVnsxYXBiESntomeZD9PUyCcbUsC2DLRWK6d7c9t79ebbjLNMt",
  "key17": "4SApiC2SvBX2G6WoRF6x6pBDdmMkegb8xbPGQTKZQYE82aULJRE47XD6EnhqkrKzq9QrhEoJhxfrNiiGaRgHRNyp",
  "key18": "2ZnVGEjWWbiuu3P8GFZkC3mgdmvHbT1xTpBxmstP6St4tr5aBcmNJVVcB24fhe1CxL8iJFnuNQUEjocNjnbnswMD",
  "key19": "5iWHH4arag8AmD5Fy1Eff1huv9dY662NkXpDCYNGXYg4EknSKx9xLUH55WrdyGZta79fUJg9ms7DzwJL4SwfUAHZ",
  "key20": "2P4ask4V2bbpXTfxy1ASv98765snhkBuZQkD6aqwGH54juXiwXxsntP2MqLnVXdtXyoiLciNcoz4c4KeLrqNKFjC",
  "key21": "5rgsmqwag6R4C3RnVoos8PgGGG27SBqwkQYAGja4pz1Gs1yDCoSiEcZeoiyeUx5KHWVpXwYzpwqfAFLTLPgYuyGF",
  "key22": "264esDgZGGk27kMBm49qCeRbam3KySmsAPkBBEgCyT8wbiApMVa6UrsMN6oSNTjsbnVvujYQnCUjYwmDqYdgu9fh",
  "key23": "BWB4WTgGjKxobPpxT54KxhFHc62ATwUdkcfmZ81ThXJhWAvV1MxaMjwX1RVSQGR31ZThNGtcWTcQSVypoQHiHaw",
  "key24": "4eAaKQwDUSGZVKWbjmq9VnNEjVkT7M2SVy1XdrsCBGxF6vtg28h8vNxiS1zU5CuwKZpbF6T5WaQBY2PnS7jwu8bc",
  "key25": "3KDpxLVWtN8GSDTx9dW3nKG56LCfydkrb9a1TKivXYpT1AaESnJxRtcvfKHtCjwh4x7Jnshto18CALrX3zEEm5hC",
  "key26": "58EJ2RMqg7cUiHVCGfgS2f7eVNyxhie2UqTGYbakgDHMR5SAeffhG2wgVH12faVhb76dz6BJfNrnKXXAqKarwa9N",
  "key27": "3ohfLZ7HLbw8cpb5nqh9153uufaHwbfzBMLxNBfmWG1aaLgeDEPeP1jgR9VaHWDyzSjYKqE79f2AzACwfetyXEri",
  "key28": "3NV4Dghut3jy9CHdjwNU8t34EEGiTpznA4DyfQM7wrhLTQDwaTcUNFyZQakb1i9khziTjXQLm9WmPfQi7gBo5Z1n",
  "key29": "3ojs3dBraG6KtNtF1FtSJZuQxc9RvUsZwM6AGTPExLq2h6WTwhBzbD71vCungg7H379qTHLwfzJguAFp8yXDPCJQ",
  "key30": "dtWZAhdAncuRN7my9Cx8TYtFSgdTMmjbeiu3Z2y1vWvkFGWAKVvrKPeKuKrngDUJkgMp5Qo124AV8xCM83nuwd4",
  "key31": "46khwFiNNgx41F3KNDptkCbT4tZwS9FKE6mJVbv3bGKwUZ9LQk11RLcfvRWZQfKfxUzQKnA6jUEViiUcLjJXjQzX",
  "key32": "7MME2HMU9mCJ8BCzYLRjXxCRcxc6nSBEp1wTCe4kPATFfgrsLTkCaVBDezugwQyFG5chxycpNQbyLgYHy3K2fdm",
  "key33": "4DJKTELnFqnRaTjVNUcwAiyYKZZ56sURnhtZzoVhKR77oR2DFNipGfmoatup86r4aQWzn4iUnfZyJdz7DNcPmrLv",
  "key34": "4RyDvMPF1PYb48TJoetdk1vNGHvybxUnQ6JjsdJtgotybfLmVteSGve3QQv4XkuuKBgT979rzhUBjHS4SLasq4Qt",
  "key35": "3VWRaVadMRogz2rknkhZpTAND3btA3UsdMs7Z1pLcMnnBykZ4sAXy9Hi2fVk99ga1k8BeRfCMyfvdqZ3g6QAbdF6",
  "key36": "WFieJNn6pNsonERJMkDGdwNd1XvhgrdXXP7RfYqzq5bx6FFN33jNk7z2eHatbbBsrWL9mzwW4CjeNhyCABXK5Am",
  "key37": "4Zi9XJv2gQF2gbhLD3vT9P8JZRa3hqGseHuk9cEB4ARhsgSuZe454WPAr1WR8vvdpFPtrjtDXSHDxsP9iBJ9jZLd",
  "key38": "4WoMBdVce7371iTmN3WHunGV575W92zGMrcRJDNYaaUVJbACQ1EzkdcVzhQ3EMVUUJ3T3fqQuVB6P8YywYYSQnD8",
  "key39": "5VrZFJ3Rt1JmctQs1BMoRf8UrC5UYFWHuRMLm4WAqsqfsarneSjEtubQ2YQxEjHQdMmPvG7VX3BRfCcpSRXohxoW",
  "key40": "3cPbhxnmVoN4HA2iCwFDZcgnUQCoT4NRSjmVCozCEAnanyE1CTCi1mpCppuAThHrDHVdFnbvvAiHQVdaKd3hfmdS",
  "key41": "2VF9szmBE8WWMmGWa2NQdaNGvnfsxC8wbGQvecUAQBoAb4wWWxYG7SeLY1HD4K8o4gphjo6YrecQRqw2zJsaRrjs",
  "key42": "33q7mLGfN9yYCVvoYpWs75izTH7YefVQjTwEPpHQg4Er5tD4BU35cVHxGMfbytVAAcMQAbVkzRJ79xDMisex1RHp"
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
