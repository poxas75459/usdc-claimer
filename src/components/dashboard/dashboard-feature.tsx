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
    "2mkPmc457G2RtTcbxiewF1oz1uwKV6tsRjhNevqLF8tE6jZG1YdgBxu8b3SyAVADW4B2K6nykKFMxw4fHzdYwT4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fAG9F88UtX7E5cJ3MsddQpVBxyz2FgPCvbpEyhfiJrzqXzZ5WmSUssH9gSw3S5KHY5VLdu4ybU9SfqJyBpnCh2j",
  "key1": "2bgpXiwAdtB3qaAZYBztm5jU7sJQ3unww9hYoDzCsJ8uGCf2NMqQagcf5KWyHyX8EgqjzZN7tmLq3HkvUyWiqkzX",
  "key2": "3QCQamiG8qDBM2KM65APUMh3RxuDvRDuqYvxksPowc6QDJH4V9komN9zxTcbdajN7od4sGVdZNugBnhvKoiJt7ap",
  "key3": "3dqujfSipvLK2whtGenxUQu796FK7Ad3jCPUfpHZdJsjuCXQ19KcP3vS7iuHPn6zTKj2BQpieFsp58crsMbUvdMu",
  "key4": "5ZkzjFbRRYfgZJxwgioh2YFMKxXpZRGCejnJSyahSmRxgNWHAWA71vZyooUXY72Fm8pQEa6XyZssAoRpVTQiVLsp",
  "key5": "3SVkZWWGRs27gfyAsnZQGQqhfbpLdmCAYBsHjUa1R9uR5GtxfKRw2kJh9ig4uHc26AZwasRd4oHrkrH8Q3SJCi8t",
  "key6": "TnvVgQvn2J9YQy1ceMMd5VJt1ueHdBQogvwEwmSkn9tQUM78UwBJks9xogt4DiDJf5Dxg1Y2ABfdG4YrwvZEnfS",
  "key7": "4EgEXehBjJjJx7fBUMcak7Lbp5QE25YaJ8mbvCN3yxUS7LPareXmAxy2w2n3boRJdT8CvxMXJnFzogRtLiFExYnK",
  "key8": "4yEjq4jUuR1SgEssta59dyWNcTwb4iRvyoppt168n7kb9nZJAomvd6pYN6AVSi1PdmayGpXUFrw8x2WMMTvEdVms",
  "key9": "3AB1SQtLpaeVdkkMwbMX9hHPUKMbqYxFgM7ktsy26TZNeHTBfeDw9DYaaoNS9UVc6YrH5cEWjiBEWh4WzqFaCL6A",
  "key10": "37ccGGhcxhzqA26cKdM2vYLmdCmxu3jppwbehGrLtno9tCuwL5Usj2gGsUDHon2G2jJjLnZZpUX8mmKMaqHLTr62",
  "key11": "3inpMEoURsdHAKJq1Mx3WL4V9AhsNT7RBKgfpzuzBrUT4A9Vppq7rWk1YF1quAq6HqrVdnXbSX8ox9ex315BGJuu",
  "key12": "4zBtSKhN7xZjgnWb3Peema4duWRhn2HiTpB6Rtxtyy1tzi2fYgnVTHKAamzXDQH7sb4LfSfK34a85jT93L3bBJRS",
  "key13": "2CrnMsa4wxJdoBcdVscNGz8Uis4amnMaHpKy2q6JYR5vGcEo3eaaWLYuECvkeF93yRWwcuQkiNAEZv82y3d5cV3C",
  "key14": "3hNRnZgWjRA95gWbvAxPHqTJ9rni5Q9YvhzrWXvt2J1UkovFwRRTnR8LCYKGi2Nt1EMxT4inqe77F1ymCi2GXHSD",
  "key15": "4g1eLhFZJFkJxaGtfHxZU1Kw6ntga94k61XZXDs7zTqQVyChrHVoTxCAeqUrSRUPtEC7GBuWRUuP3CoVuiPBKKut",
  "key16": "5K27TrtczvNvrKKyEwwAypcnxHUrZTeTJAoYB7BbG4SiMLdGmry4rKWHvMXHPz5VjEv4kyiW1DKADLpggAVEUUr3",
  "key17": "5G7QTZqtDantgxgHibmzfuTDH8CANps7pC7xaLgRZohFjXJSTzqwbd5mD4goVL3jdWBdXQmdnfBN8m2aX5T73eUB",
  "key18": "3ry15a3S6NFLa1wvShGnSu7jscsgQuEQK3TccN4Yq1DQs9PgPcPep8MjUihXksZJvA69u9NN96G2tH12nExkiBwj",
  "key19": "4JCtvbBZhwfmgSdEnVAFSnUsJEGWKQ4L8v17TM4yVV12MjSu1jBg9FCcRGcQDwWN2oRJeqBVmLoP3b4rBQQtSrCF",
  "key20": "rSH7Pnk5EjSXARcrS3XptKEjSsRTBhzwxNhPJFQm5f2y2XT4njoGoM9i7QSqiKv9skM7FaLd55STWPGgxcm5NhK",
  "key21": "geuuqN4vMg29dzR5HWA36tD5pUFzuUanPb3Fq2nngAmtyGgj8xwLUHrgRh2nuZGdL3NK5DmrLjkqLxAFFSj2yUd",
  "key22": "yyqkM6qMLWdvqRsDvetqKcgukKEXzSGHLx6FpookGWk63Ld9ZY21pXCqYfAmaapkyWBTHZ9iSRxnF5SdZfHtxxi",
  "key23": "5qsotjvBh4TJpGoPGVExsHXxUzp8opGtXzs7QcFNATxyLLSP7sD6yKMiR2BCWYeQntHn9PsbRAjaJUC3nTf1x7fe",
  "key24": "5pUbMiQCsm1APyD7eevggkE8ZntN3eASwaKqDfJv6MwowBiQJLK779N6sx45qRKnWABuuqH4AUbShNAWUcvA1iy7",
  "key25": "LyWoF6UfFSJ31T2HSsvkPdckWmpJ5kUjRwt19wDZjdnzb1PDFj4mQpH9rCiWkGZW7Px84N1d4ZqY53rfcpgAfmZ",
  "key26": "29TDsWuDvTWv1pLg9XR1NUs1cnEyKcyraQ3TzyBYnXBdFsjeeVuhRizeCt8VWTkNpyue2cKiMetzPKAPJqZT375v",
  "key27": "2uFAZbV7MLq1frJNLBYHCFpyPTR7Zuuy6iPtCipuhA6pGf5iHHXQjbyVDuBFQdPSCwZBC9TrtagTtMbwUR7WNQ7x",
  "key28": "3PKXWiXZwyuE5oL5mWJt2yxVfWg3yiDHdExs6koXrMUzrAnfioqSbkoEmFsaHk53TUbz8Ly2UEZgEa4EdT58rbED",
  "key29": "4b4vZaxJKnpS4YJLcfNea55Y3rZVsjhCi6sB3AbX6hfN262MN44tU141wjKZJmWyMVig5JUhnH91b5GvXWRYRdzf",
  "key30": "2mBZkTxGHnXr59dY6kk8JNR5GrkkgpZypU9yXC7kkpru9RtjRW7Ni1WLaetmnEQt2VWd8KnNfBaxP3o8TzhonYLx",
  "key31": "2MBcrmV5Swc1AHPwJFZF1q4KVdUWqg16xjnPqPRrBjF6RYaMyjyYpTT9yatt7UJpp6sbFGd51TinqepDTZA4mHc2",
  "key32": "4GqMX4T4UiWeSFKs2mXiDuFwWVEwx13zzBetRVyLLSfrHzEJXhiLLsVga2qufFfx2foGVq2ZgSEL4xQdJSFhuba4",
  "key33": "3DA8NkqomptaeBzznLFEkT1PPA3cVJ8hZa5kGCvRRQ9pumStAj19gd7UQHNNSs84S5JRRozqoczBkicGtSEybmwN",
  "key34": "3g5x6KyV2kYqXsjxzWUSeXLSBRsn57n5NELkAqRPnQotVWPtSTcBsJseaQGqtzzvdcsN6G5zsoCNQkpp9Pu1VPXw",
  "key35": "5WRyxjvQe8a7yDqvSa1XaM7Hyu85c9pgmHKoyHS5hgKeUiEHdov8AJJB6ijpwbJNWVLx351FM8bpSzEj2ctXg5Tn",
  "key36": "5grvTzRYJAseGLZ6hfTAwhJzmMPXPQFF5VmtiZWM6FQzXJMHt3jtZJXnJxcHByqvLjAzvDtVy2VzNvPnWWUSbFXG",
  "key37": "3EdFZg3PBydWiEqVNX4Sv618W2vdBSNMYciE7rtezpq6sggxy7JoEGU4q53PcrwykHBEvfZFhQU426D3ad2HHTWA",
  "key38": "5vSmotjW8K4qEGergnDmDKZzMgu6fUXhiUgk4nBymH6YMB7VNizvXKVKqYs3rNyiZqYg2jbj2C39bj4a9DAVAHmv",
  "key39": "5gpVNDzMWYRK2GHQ7kbZNUaXmjoCQRwsZ6UPMTv18tQGed2dJBNdujNocvUetpjhEkUzSmiA4qYoRsRFMpGfd7mo",
  "key40": "5tM7rfcy2mWAz2aUzsAy4A6eXf265WvebyXH2FThRqjkKATj715jzjzgnBjNQq55J8tnoF1Y7ZT3iKRVHfHgdCaD",
  "key41": "3BzTdyFuDSgWxrWk5y46ciikHynrgLP38cQKFWmECGVrL5KwrR724nkfoSeMQK83rLPqu5xbs746pwE3Q79u7tY8",
  "key42": "2u2T1S1AgymLMLYScvoSKw3LVkRmu2LKfYrAQ54moFZ1k2bqA5gcqNDBhmdGHvVPM1CZRt5Gris2rt3wVoLcZRzh",
  "key43": "2JbE4brwaKfL2uLfXYXkwnX6XQwyP13F29UxB34ysvAGLkGPXNs7h87W3T71NjkuPgNWrJ9pB5FgHDBeB3833Cbo",
  "key44": "2Bwb2Fh3td1fxHzdEiRqRrYCbyJzpVgYNAi962noQGYoqxnt7B9ZseQoweGezqgCJQY439dV1797FYWfKQRkJ5Ai",
  "key45": "2CJSZfkofEbcgjSbPju2FzPEtnJHq43tJgH3nJXbkPa5taKiDUwsgg1WWHXSgeCq6jatYmhx7zQXVf9fJhaGh96i",
  "key46": "53XTmedRHVLC9ub7mHHiC8srwVwca5cCEPQgYKaFwF1xqQVCCFtSVNpThXevFV6fXnYgTNzV1FuFaCu6RNmM7Jik",
  "key47": "3BjfG45R7YKTAeJwJxNNDjMVLyAL8P5farqf5ViUbWEn3nj7MLVdX8Lx5b24pD5tkUwFoAnBUovZXjNyG6ou5xJ7"
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
