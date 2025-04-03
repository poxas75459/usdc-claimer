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
    "2umeYKP2U97ueRLwKGtsDbyo6Mu5JvJoiL9eRRuTQdLTFYHL43epgbQgEVrcTMkVJ9SsmX7nSvBkwGMqZWt5mAkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8hC8hdMqLPPpmVNLr1yE9BXZxqNvt4TJb4k3Uw44kncpyoYUHo3Q8Uqwsc7aKTUiuNpejn7Rr4Cg471NeN5X772",
  "key1": "3srAdesrXh9KjJcJKNhMXfHhZWZbKdunu4b1NuvFVR2Eun4K8qMKQAUN74C1wEHnzB9xUxMDSojRxuX3tTr3syV1",
  "key2": "7goZoWfd5QyAS3dM1EwTQy1KG1sLQxh5z2KZdrNaKgSn7FXVeRCsWatzkqjxBL2KeHUVxSrnuwKkWUSQHYtswJC",
  "key3": "5LMdfLTMo6NcfmXjEMb8mpkbr9cLtk1KUHxHaCHexpcgwmy8pvJ7rQQn12PweVaQhA9AV9ZKXjstquxU624rQPZf",
  "key4": "VNqm1wZ53se6CNxB1J7M73UGqmTTudFmUkiJxyk3xALeooG3h4CjNf95SKNWzpebG1VRRQpgfpq9aH3dBsrz2HF",
  "key5": "TePpoa6a4Ta4gcQkJNX6dXPcr4ibaS2xSt78h8GBto3sPZ3pMD7gNo5paAPAVGMkHced2KkHPD6NSQkNSyJisJF",
  "key6": "2mbfn8gpTBXKxLGVCfesZsyto5kJRLFbWgGkGy4zJBsFN5c6LDoiDpqoyfpuRNFmhiji7P2pBg9SWPraivvpJGfd",
  "key7": "4Tpy12w21g6sc9TRzhqBb9sAoCd4kysjAi74kPY2R8EGdJVvkdC97NKf4LXebTBzmL7yHYeMzpFUphKLnSu5E8yr",
  "key8": "4T9itRss6JDnBWS4L4MRueikTC5hbSMLgkYaKtdZFoqzA6xBohXzb3CHiM5DNrV3F9zmUT2mQfsjGfCJMadMUoYk",
  "key9": "56Kk2nksk5FcjkiA2gtywxbswhR4jM4REQez2VTdLeNCzJURjRqWysZqnoKhc7PyHoxWS3jgJjNHZSz97WYiPjcT",
  "key10": "U86o3BBTM7nUKzrZeazj2q5ASGBPoACCZW3aWBHj4ckBwQ3DHYfgczNUF9GHmhDNEbmFtQtpaicDv6VgJnMpZSj",
  "key11": "39P3aW4ktHXeUjxGPVwxoczHnKYiMunvJPz2F9jECTB8FoWiRcFqQKKYCR2GLRvbLKGsUrcDMXds5zTbtSKm8ppX",
  "key12": "5LzhunVv1xT6rVbUVhqc99J47BKf4mwbNSkPujxaeyDnrry1wGkdPa3UMYAG8hBYtMy7XRAV3a2xKV4Rwoe8MSwy",
  "key13": "4fUBCu2vdAjFEaTkomGTUChSaKd5m5VBJUjMvKaz7DPsfjbEvZVVHXEF5TQihzPXtkjhuahVYMbik8pRwZH9VVUa",
  "key14": "2xn41VLv5jiTk8hFEXRKsfUfYo5wTLtZJWy9zNZr8QVQipqbppx3kf7uAper1LKCbNze73cDsibbVVTSNWKkmPMc",
  "key15": "2KSYbckwfuypL25DuPhvJNVT7rZiZbhSFDVfYMvCC9DyFtfgrKjN61h8XRN3rrXaHzD3KSSFGgchshxW5HDU8YKB",
  "key16": "3sbNz3CLSZeq3FkZ9HuJpnmDy5tBxn6a19VpdA8gBxoMGt23H5t9a4RUGgU5io9CVxVifUWXhZndGZaKWrqk8Lhq",
  "key17": "3kv2qdR7gxFPXG2agF8zWhTh9Gdxn9Q65zHe588GtneCJJzbptXEeLFbam2aMnigdEWwzovKpQ4wocfA6f7nTAy",
  "key18": "4Z3LVHNZVsc2xTYT34WfHR34Nq7LqWaxXE3nmbXdJwv5u6WKfigXANcWNL4M5HUA5QYMqNEySZjHvT8x6sjPXNbY",
  "key19": "4YrZ6LtsrQw9EPioUw6fHu2qzyPFL4MtALYnvXTPwZEjPNsdvv4Ak6NbuM3S9BerRSmbdFZVjvGXGTJdeiGVbg9T",
  "key20": "3iuaLkXoeS4yZoYqiucCgdjRpt5cpKRPag8pfwNsXGXWVVvXVkbfoXFxQMfy6kZ4dZfGFbRJBv6MhYTJWsi2jGGz",
  "key21": "5mnA8wvrNEmjjLoAA8hgtmax8EKLWSJBc9uEhfoVjKf51QkpvSjUwPtBt6qMGppbqufbLZ2R2jKyamzyntVCHnCR",
  "key22": "yZVA1Nknz7g8RjYdDbTqfcG912ySnqCHT4TpQ1rLrd3fzHRfwfcwdoYC2YVXAqLVN67tRXPL9YVpDb6dHM1TiUR",
  "key23": "SHVHycLxcvHTr2xDXMrsz5knBzHWoT2e5abZ1rJEVEozoAniBVyhm73Z5fpwKmqWyPvdrcTnR3ALWr3tDuhiqHH",
  "key24": "4mPcDgemMvMJdw3ZqoJSoNR1GvRU4XhV2GHDj9ii2fd24SZN3Zw34CjkPsMEEUgYcAqe9Amd6XL3PQtEBsBTVd44",
  "key25": "5XahCi5puWKrH8ZgJPLoEVW2rokQC53sHzRZRkEwMP6idSc26dApL1M3q2J3Ympji3YpHDnVw9f6LZwUVBEa48Bx",
  "key26": "2xyoV86n8cdALsP3uHkrxQxxDFCtzRQWrgydrd5tbehdjZR7d7rd895eVfUs9H5KRcH9q8QMFuvk4tPYbRhofumb",
  "key27": "56qCwJCgjZtWNvVVRcAmRHJXSusKaCypt3Xy9rqq7t1cKmuSYA2nNvF4guTaMyWLadhWgAKeJ3jpZGN9BRK73gx9",
  "key28": "XHgXaRmvUjMg5PgziQ8cpSzfcPKwsG5idXnfMu5MAiMvA25gwuKAVGUSACEGYk6N3LFJw8jC68pZk3JvMc7qW65",
  "key29": "3jFnzcNe9sS9UCux8vydZAxBwiksG6RTPeeemwCQHJh9jKJGYSHyKawvZG2B1gXY6RXJYuab1ku4kw68bLTjjf1R",
  "key30": "39wjkBx2HH1xSjoKDdu2N59g1yWU9YE4WDuq32JNxabqpqawKGJRKijWSy45tD8vG6Lm521F9Tgof86tfQFQoa3d",
  "key31": "4DhFHfHUU6rwgjm7E1k58f6xPgZjVwNvNfC4aaN2eqrcDb5FdZPg9cvTaakkFmaFy5XiiwgMN9GwUMUNVLTFq9GH",
  "key32": "4tLBXaSHUxFhwFssStDpZ2uuAbvWn9N5b2QLUEMSzDHnEJWRaRPv3EvhzgEm725ao3iebEHqjKhHvKia9EZt6c78",
  "key33": "3WZbVv3C4xfqeJkWL5hTdkftA1FbkDqShhtctnyfHtiH95Pm9EtA13JLY6dqGoNtz7HF1GsUqw6jGmLAihVnSSkK",
  "key34": "63HyRHAaQTS9GThRwCgxxerAQYBp8f9HKxW5NxGmYKm1HLuhpdFyzqppoyLayacG9QXe9inEYV8vVN1xQHLb6hzu",
  "key35": "4Ys2tWGcCZocSYE1KroQYSExB2CTgme1CreQReJQYYiyYCWSP1dgrqA1h4rtMPYh2GVsg5hrDAiz4uM4oboJNidS",
  "key36": "saGpWftt81hS5SAgYzf3wG4X8kEJgYyQhb1ascLqkgC2joHbJJEtDx5LHxcYKFzreZsoLSjRxTgezFqbP1BtVaj",
  "key37": "5zSpoHZwWJu3wpBoN7oR8Fxw1EFR3363caeQ7nkQEM1LYnspZqg4sa2Zucia31cdpzwndxQboYWhtvCuRxw1McH6",
  "key38": "EZGAX4mSKHtnYxH2xZaKhrtzDaQz4CuH1fekdBroDMh48QPmmQUzqiJm58DWDNVDXSjR9qcVkYtpb5gz9urH1Jb",
  "key39": "hW9Ybgep7cPeAAjVLib8BTXR3XNAHwQNgg4S4q2v4Ht8dtoiRLejhTaZZryoPrshDYUEGemXm3u5UcnWpSUr5vV"
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
