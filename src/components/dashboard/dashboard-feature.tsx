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
    "3fwb2JbWejuqPg8bsdpRiFpwp4xVgcfxaYkRKkNTzxz3bLFnCCgsjw7Hoc2Ueata6rnYfjatbTB4hNqTPH1ArRjY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eLXqoKCdQazBvxF4FUDH5BdnYTbV3sC469iZpBZmj6dLsQ8yumNn1TCC5vUjPBWSMN46FgxhVvxQQFUUFTGeVJJ",
  "key1": "3hojxRVyAjjMrQ18yyvVDCTS4KM9kJJBs431aCCLrx3P89R7FzCUKTXW5aieZz4pmqQC4ZU1SioBYiUZNzXwZNNv",
  "key2": "2isTwPoFHkpNgDwFGLfa6ax3K6T2qvxYfg7ow6mHQFWVEaHaGjeRZpAyvz59Wj9f35VspN9pAx4v1zGuy56UnpQq",
  "key3": "3Lnmzda4ghv8mhbE4h28X1Gi1R2jP1ygkTjf21QsgDwbGNyGos6RUqqT39utyv23B6NeEudroDnbxpzALcq7ViP1",
  "key4": "2DiKzunbshc5pCDdiRMkjZuYqpUhLibaU4E5n1vovf9nPTbwbg8Q8qhoNyBi18BfDW4zpFB89MDNewHWJA8kdWBN",
  "key5": "3kwTSWPHyL74tyMhrNjzaQRfVJcQamSecQeVR4VLCZKu36aXBqBfhkrw9ZYxRMAaN2EedgABL9aFhxbJawJBuLC",
  "key6": "4eV9H8Kpqcsg65qHFDXr5Yzh2xkxDn4M1vZW2fY96F1xU1RTaRCgkDRMc2ZCqAcqAFuB9tQhYN7d6775wrU7p4qW",
  "key7": "253mNSWHpHEyADBHGXYex9LnhqXeP9EzdAJ4pXRdkrYm6KDN4huByKg6cBvpDdaHD6wfDni6DwyPw5DbuUsPTN4e",
  "key8": "4PxyqS7zuNDFux7L8uBfgZSw5ZNe4ziNXmfPfp1k5T6mi2jyKyYaV2somAqXcyzcQsRvyuNdSMEAgjieyegwC18H",
  "key9": "d3RkPaWQukQux57vJzsA9UcG9DqpMwfA5LnrG2g4oiC8vLsSU9W8Kacm4smfEHkhorZopTrLErc7JBqM6zBJfhi",
  "key10": "257UUhQdNvkz5urEmdVMWWL6nPXH9Q6xJCxcGonNqRseMiPPzKYtq4HAgavGagrZ6c1VeY2GSFDvk81sJ5PnEucH",
  "key11": "536iL8TzYKjbF2fbrPycWG92LBhmyGVBrvDPUTTFs3i4TMr1hZoRtukYH2cfAvnhTbceqFvm3frdG3vWmZqR3Y5b",
  "key12": "33dcfpeXSBsv2kffn2BkNikBBkNMYhzj2K9Zh3PzPTvDtXqPDTJ5Ac6f8TTakSJAGG6mz34T2pSxUtgKHZ1AbthA",
  "key13": "62a2yn2MEzpThoazfjBpeycExtP5Nmaa6VtAUVuvWLJGFc2N1J86JxZKE1CwHTdU4VwiZfAtngXLz2SQ3EVuB6st",
  "key14": "4H2GHu71oSCxY8fC5PkKeMtAA8AKrrQGEt3AZmAXzBtpia2rXgphDjPvqzVsAkScWbnCd1q4Y43tg2QACRdhKdn4",
  "key15": "g7CzXgH59UEx9hVzARu56uTn5Pco1TxuStBqUbrzEiufSETb6Fht8DP5uGDgSQt8qq3ArnLQL1uniBiZZndaqj3",
  "key16": "66pxzb4Px55KXDGapXEFoWR4Bny7sVM2Q7UH1jB8jwdoHripwNzJos4xkCS8cFfhU4c2RfhrGb6JgmpkskTm3DfL",
  "key17": "hwXQzmPm19hBa6wMb7FND2B8wCxYyzkHHQmWTcuW7NpiQfw9VcKRH6bRDfRicrQnhNK2aSFba3HVwaTM9jVdmsM",
  "key18": "4CpKs85i6TpbQZZC1U4CKEoiwbAcKeR7P2bAuXgVYBre8VTbAviU8Yzg3nMnnJUURXuuLv4LZs31SuyY9J7jiPY6",
  "key19": "KySrikNubV3LXnCVaPGeSnv6vZoNPVfbhkeT3TBwjkLu2Z59Cg37UojmhNuY1GafGnL7cQfqHAgfyC1eNxY4L5c",
  "key20": "Pjin2swuApeRkcQRpCM57mxjzZe9JuDNTBuMhrP1ciGbF6SbBQrVWNbYBmMukB4nm1A64b9pvDu9iwL3kD7CJtV",
  "key21": "2qbZ1Vg4ysFkE7sFVDXm7Rw9XxXKFzGz59UdSWWwTZuib1ARBarVbLxBzx7A27P3KCs6eEFkYA441ewEYM12MUxT",
  "key22": "95zEV4sFisagV4qa23JmGx3Xf6iMD7zoiENMTYMHr9x32m4cqGNB9nfiFLPDMBwEovPYUJwCUEh5Zdj5SXTq1AQ",
  "key23": "2HDDTdyQ9egzq8XzkotKaNei9gcjbjd2u9t6NdnYwanZ8HvCwXkdUMKBW5NpYEtzp885o11QkADM9D1WaHdzmqo3",
  "key24": "29qYyBmzNwpNjgaE72KrRaEreZMSK8Va4jAEFfDCZhUNCJ6Na7mr5hSgoDSzsmqNte4dVAFL8WzEReLGBhfQGg6u",
  "key25": "nGL2PecZRqeEfB1CUiq4QnZT9xjswV7TSDySSPkSdDPJhw7PeipT9tAE4BgWYgoLPnuKGJmQMkGLXps4QW5vVyM",
  "key26": "4pWV78E6mivxXgT7Ncr3PwVQdawFKXeh1D7daJEQN5crwF4etMYbHXs3SZ2MD8FV5PBsRkKrec5SYUWBtj1rEJiZ",
  "key27": "65WCHtgwMyMCJN4udmAbVHDwpm1ZYjSVXUyQQwAbQWa9bMKzU8L7tNXvV8FaNHsxgfDKFKg1fYdzG25aJa7L1Wqs",
  "key28": "3ModLqug1S64kbuu7EmobGxnnBpi2ANjPiKvkh9BTJ41DdUZyEgr2qQDCufuVJxLj39r6vXmbEDex4ofd2xzfkGT",
  "key29": "fSdFAdUoUfSFoXfacYWWmy7KCNXS88KgumRwKJNKPKJdSsh4QvtXyN9fWxeM99DotN6DsovTAKuK5ZNReXWWmHa",
  "key30": "4hNVyYMJiiCmFR1jRCVXk8UmYSfYq4hGbaS7EkSWs2FWKGzhTS11L3x2aozd4bz95aUARb8f8VfEEdPf5xiafpR7",
  "key31": "27ETa2z3Kf1kXA97QxvcVukqkApuJtSri81ZpEr879dHays4PEufZBmRRQQ1sXi26orjS3drgSc4HqtpeW9crnwN",
  "key32": "5gfQNB4YgzUP6RzM678U79S8ireFc8r7ACDs9vpARQMY3ZGFtQZ3uFJB566bMpfGhSizpCboRFxDvR4p6gvzSuG3",
  "key33": "4GFm5Q3hA8UwQxk92FBGMTr7joCXY4gSXszhkkdX7RYkRbJ18ECR5JXMVsxyyqcg1Ehf8g4dWuzo7PiKGiGJqWnd",
  "key34": "2t4BWEKAY1ywnVoDArYPUCRcM9X2SfB5tgpFwNLqEt6GefS8Pzw228pnaBhmfMgmKxq2pCNQ3mDQ9pXNua6tqNYm",
  "key35": "BwtsBg3rEJQqYHeh5cRuG8hK8zZpdHrvXTbpbArCckaT7FMPm5bVh6dBMuBCUdYNL9KrpfZZEK4jQmRrgvmqjWk",
  "key36": "4NegDtJov37iZRWXLgyrUYgTai8x5oot4c1U6psbjBYGiCFQ7oMu3BbNg6Jp7GGTaJwbNVTPvFYzt8rYXyJ7MaoM",
  "key37": "4z7zuukqCHSAdrV4pnPTeXoS86KCpPRaYXdrSJKyNwSmHQDNsQACo2TAHcSQYdYWAUDcbHLpHKC4TtBpd5GVVCQR",
  "key38": "Fw3rXzaknyZtCmS4xYBUD86pedRdhF7BjGZarYidkG3Avhz3LKYus5ReCr4AXeK74w5MZ4eJT1KBCPQbGVrED3n",
  "key39": "4zujMtom1XN5VfzCyosp1sBaHa5NgTSuH7pBmMShX2xV5Rk6uZQCJ3oqeq75EdG2Qqwri8ZxTTi5hbP7NCHgdmJq",
  "key40": "17u5iFHasdVMiiGtwtWRqmjdJepeBmEsXRx7aPgSTeLB2TEQkEqMKT3DhGhsAHr5D6AmyCfCTHwM3z3fdUdyCTE",
  "key41": "gpPi2aUa7EXxpTqopiDSXaBQxdPjeqNdVuwy6fd2sE3xa5hthAaSudbtMKVyhwh94Mm3TpVjpvcYgwocKtFzKtj",
  "key42": "5eTbiXTFi9uXc1gQ6C3uj32grYNpg8voZmGF7Reni5BBarqpvBQWQ2YtzT7JmkYk4ef5Lz3fWiPwy7uv7Zw6jL8L",
  "key43": "39ACGo91NVH83CQFuE1Z8RHM9J3wNsa9FcmcGt6A8CoDPbpHS36cwxejzc8dSezNtWoTWA5WS5gXCjiUqU1bqtLV",
  "key44": "37PwcdcQ6uDMLLBHYdfcvGFzTL7CuAZvBYztFw9AbgqAdU9SwcEc4XfBUBKWV9Xuc2H4AeBAQgoodtAvvajJEfTN",
  "key45": "64f1WopSHPdkbCJqNdT8f52gTroDgXYxhr3ZwNbp4woV87WopzCGNZjZnQPfY76iYGxBv1VmafMyYz1vnuxX6MrK",
  "key46": "4VyB8e2KpCA17XUHQT3XaKVT1bH2Dvv5nw8PNPk8N2kmsKR6cySCnmqcwNL53kWUsTSp1GYbrMyfWG9J9HsGMyjo"
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
