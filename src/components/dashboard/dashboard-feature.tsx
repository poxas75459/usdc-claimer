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
    "3VupRAKcakzAjvNcUVwmeKB3di8g2EjKGAYBTSVeWYAFejivfKmLDTGeb6KtF63DvSQXz7oa3An7RJPW5ZvAMBbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CLjLxAiKiCZwCF1UtwzzowcYpMxv7qJJGupU3aDmX6XAU84WoZtugGBNLDScNLYw4cBn3xhrpacGCzbJ2HGBe8m",
  "key1": "5a3wAEfPhwJCnnFyGxio5CJLBcYmhT4wYVvEVhEvJZm6V9YH11hHWXwaYMoUP3Vb7sFAqAaXGtaukWZq2aawYk9e",
  "key2": "4KDPUoDD27kP2jBV14mPqJ9zTsgc1PnZVDHPeWQD6S5R7DW3pShZW4vCfnHmpbp1kpTgoonubxM4evg71auSBHGc",
  "key3": "53VcEJ4eNCpVY2Vhq8XtRnvHrNtHaQpffNWfn1rrfdCrGgNhrpqe6XperEjvXYUmoUBGuA8697iyiLTcJiJ6zNEZ",
  "key4": "3EyDbrngsNMDu7LWJMn6u2fth1GfEtwzyhce3BdZFRAtSkYYjViwNoegHYUg3oVLQPdyLeD7EKz5yELerCeXqGNb",
  "key5": "2dJajJMy5tQ7RcYXeLNrSxC6d7dVLxbLG8H2sDDF7SmMSJLDuzGkMQGqPzBzhrMz2ysYHkiU1jR22r9cwGTHbTRu",
  "key6": "5Z9Q5y2wKC3LHzYZiYuseWAUULfBLczJTLtdQViVEVUJPjQSGEo7f2EjNReNPdBYXg5aNxuCbBewwwHn9MJY97jC",
  "key7": "2eig85MMpQLZHmgFfnr3TeiQ8f47sZswMZeQCEghZR1U8HUPY4AQxcFXniiGFpaTKgBP4LKUAYbC5K7kNuEykGqH",
  "key8": "3X92rYUgdgcKM44qP2FVxjGC2DsEWsv5ESv1MNuign6hRzD2VWYyE3QK47VbCRq8uMc9v2jDCPeyR7zPFyQLYyFr",
  "key9": "4C8D1agJtK8LuiiyDuo9agyS9im2DkF1PBgd5d93QtVDm35SV71D9Hh7n6ALzi8Gf44zJZaEHTQRjshwp1YwHmJE",
  "key10": "kjZYxWtCjLTXzh4gLtwEgP2z1TvEvqPbQHJ1ek5EMjD9s57FjvLMJnaM5vS9rCxNZsfUAvDpXCAes7S8wVsUxAh",
  "key11": "2SCZKRAoxUfVjomUDKU5vib8u3Cf5P4D94kmKjWAA7tjhuqUzu157CckwUvmHGmGRQmiNmD2GsQ8Cmk6xqsR8x64",
  "key12": "4znBfnX5V9DSibi3Qt7UhaU2ztcopceYWcHeMNtcE2bMhTqVcWL2jWjZ6FGET92G3awh1MPr2SsF8DLrkB3VghCa",
  "key13": "4Z1NyZpvEhoGtU38Ls3drZxEadDxdNC1gLT8LPzm7Png5tiV4NH2FoDYUKrjNNPZso6ubtHeEWD2wChn3cKDQom",
  "key14": "451sggzfvHi6gnE8vkhTiuqivgBwKpM6Sx9dGRUe96s3mkoRBLFy5ecE554RPx7LwgJdtTuJrSW4zhVNqNyz4MPt",
  "key15": "5hQLPHcmDUFshjTZzkGn54UzempswyqqhYVMGw5rntvFXTJ1pKmLYQqWCwvoKde4dZNNTMr1i69F7ofTqaeKj4V1",
  "key16": "5xirMK9wkCui73JV6qThhbb2nyessKNtDAYbHaF72uVm7MY44C8DsWMSpmrRioyD8pDR2mLhmapMMVEoLM842qA",
  "key17": "21Ys2HLyeaf9i8M6TNgXAiEQSKErYuQA4137FK4juUY2ry7CAVtzWX5kDiqAb8VuoZTpdsHRcMyTgeXEray4nUtP",
  "key18": "4MnpGW3jyBULy2pnGhFdPTsCaGMAdWXZ2c77WLU6E8xF9UkictDbj9ZGT5nFYTXLBNGAH25T5GR4eHxLzFtWxr96",
  "key19": "2ywBCJF759sE8NYAhP61YrG8qyE1Y9BUkrxoHBcJHMo7iSVShBrP3DyxFj5LiJbMch4ZKAbMCnzNEf3vfmx6WaDU",
  "key20": "4bUMFQkYBbhmeTvCp1dULcfy6Qzd9t1m5VY5VgAsXvxWwdn9P1w5Y9gTZViYycDvuLn6L1m98s8TBVSJ2eW8ZyQX",
  "key21": "4igWvxdQMTtWwWpFy9UVSrE1KE5wdo6XyrddkbfLekV3nuSurxH77FsPf6EXys6obZdkE2dKQEZfjBf8GVRzRYcJ",
  "key22": "3Yk3GDsvfgyfA1GNZ91E7J7hsY3Xfk5MF5VzcrCks3sJfmZGH5twovff8MVv46eHGUEYXAZ6zBm49NwF7iEUDPy4",
  "key23": "5X6UMGtspbzFDT5bLjh7bcRLMV1zQoW9DJSncmTCuSiTms8d32igYMXaUSmGYsPgvZdA44gHYKrazPn896QDTNJc",
  "key24": "3xgdu2U16xZGLgga7ua7GheQn571h8kdwiMKjWs4tFjDwURvcXgbr1KibUdjeyorr7YqyRRhgGbMgUPgcye4m9Qn",
  "key25": "pnbdxC2oRPDCp92YHWHrR2a5zzyUVNAtcUCNkcCALXetEK5FprX9V4LjRkjWgPGVApzCxV42EdgdgKiqNBnLstJ",
  "key26": "5BtAmfwyu2gM4ULmVhV7oB7Lvu8Dd5DXaNoCnGpRjWqCtu7cgLCwboqe7nVx3bUbPEBiWL3kmUEhfcmceMcgpKka",
  "key27": "45yi3i31NENi3GPNaXQtTMETAEhsddd8cbsqzb1XxeiVHMFomDsPq5VsvNHmZNijYb1d7D8Lxce9abJRDY37U9tz",
  "key28": "4cMi2VGfeHjUWsdiutYw3QNF6V8n8LcfaLq3NCo2WjjaF8NjuGhfdMGgzeYsjazkNmGvydoTbxaUwFp2vqAXfomo",
  "key29": "3axuiQpmBrLKkQXnNgtSBcGDmRswHiF5C89Yuc5bPLhVDgBFZAZJGK6Gp3ahN3KVbYP6ZLWDAdhNejMeeb6y9u2A",
  "key30": "3BuweauErsP84QSFVKGBRESashryEyBysX31L3BMFsAfQAipfXpPFBLpuH9dkFEAsiWtzru1W4xbzcKd1XM3R5mK",
  "key31": "5fFubViGiummoaYN8ab1yRQ2QKGtmZDrbyao3FCDLygHUNqNqp5uobdYFf4rMXVygFjaKuTRJsdMszTkA9ohMCAb",
  "key32": "2Xt8oLE1VfTyAJ3SGG2jtZjcGQBHtckNfENkFy8ddCcAQutcL58a18gJDd2eYpvszUP4agQpJ6kwhnQc4p2T4LWf",
  "key33": "5sRh99VgoZqjgHLid1X7qjNctvkzvWwPcxTuvTV3onyTjiefkSnmEBXCa34nuGFxP2n3auFaKkzVdUGZq33YxgiX",
  "key34": "ZjzWm49jFF4XJAAhGGTHfMy9UGnpwA6kXzNC1H5RMSjqDhT1XqsZQKAEt4XaeQMdWzbarPQaaDHEm7wf4Mdiq8s",
  "key35": "4DPvgyEHyY1f6ENrETu4PCFHv6RWMBT7rPQy42xXGNUMYsgHNRpgStmfonjQo6VJRGDBSqrzkwDyKBvkwGnm7wkj",
  "key36": "2GqUMg9rZjwZ7ZtwrWQKF3KdtfK7R2qFBd7bvTa72eLby6kjMwB65YgRM41YoSC6Ttuqpmn1Wq9yPHXzrnCtbUDv",
  "key37": "u5totBTsJRMREmd8q9uNzGdD8KcVb4qVgHFNRQW6a51az57HWQiCX3bqx35vni2sLjqrqgZWeSCWvBnDnfe1fn6"
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
