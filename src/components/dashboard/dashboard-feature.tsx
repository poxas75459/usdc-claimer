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
    "4T6dFgVsjobtRJETY8MVMe85MA3rtDg3Yejj8AbUUrRPhquViHJk3n4FFiwNZzgkGWzbVHFxkA6NTGpmyBsUoKoy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21x2SjWrjUsja9SGcERzhfXjfeDvpSwACNGFT6CqYcQnfRRAsE5p5HxaabBTQFb57NZ9vrxn6XZXVDZ8PAaETdd6",
  "key1": "3pdHEaKB7nsYW9SkDcJfn6fa2VLG8RCTFowJb6NjMTuwTcE6zgqgwN9bowc3pZCGxjX6n9ZHhk9wGcRHwEE1jEbf",
  "key2": "4fEu46fRgfAf2AzsSjKrBhguYmJm4YDLfrQbyYPkvHNQqYAeRf1mLsemMdMAmhpWihMYTW3JHxpguRKMyb8Md5Nx",
  "key3": "5vVBtecajAEsCXhdPmKUWCZ3v3oPLu9uznHgaLYnZEPUc2hLUiag9W2XCrFxMucSx2SADoftz37EAgvxKjGnHrZv",
  "key4": "46nHhmMfsLf2K6AHFcmzjyKvd6Jsajkr4C6B3TRcotjbrxMJGNiG6WXjqS9JFHjys59DPSrcECvJsCyF2xfgFHd2",
  "key5": "28wKb5nVkKnpEkpTFDY9MNQdpZk39yE9EJhCsi3FpiNzw8iETzmN3ZzKzuMuoWyzB45UhxTSG4oXVtUyqrKu5YUf",
  "key6": "22FvheAYQAdoJqW2ZUtLVy3uJqwwXufv1TUVdM4zgyxR3AwKfTXqx77AAgiNs7RM2zkc2r44RJZsnTMdcCK4catc",
  "key7": "4NbRqnH1qTQKo4zceeDpSa7boKHoftAyuBsE32s5dy57rNVSpdzGEX8L3Xnm327zcM1DGPeLygJn45h7YKC3mGM3",
  "key8": "XV7faH3GUZbeCuMo4stDHYce6ghfaNUN7WKBqY9JNmjrBCwZgm54ooJ4Ujx9rhAp23dE9CdU5viBGvd7tYusvNA",
  "key9": "2Jnay3Fn4CAYJar2BuUC9VVkcuRugVwmjkrTxsTLJGQ9LFghPzDf3sLgJZsPJKBRNcd4tw43BPsMmL6X6CnH9ckh",
  "key10": "2xhic1VXskgFdCs2eay5gBierPiiE1q8iYB2fgMDowHy1WVsUN7h2TLSnFHV3YJJHYKyuUHQauEPLvDdthaT2XM2",
  "key11": "59EcM2LU8ShXY5HMX2LzAv6U2kCBkzxdfTEGjkyVXf8c1vHE2MfrPbstPm6P9UTwirzpUV6Do6zf5WGMLX9S6tRW",
  "key12": "2RXm4A1FdEPaEbSKrpMCMfW2Cx92We2HR1sp2qcCUdLiv9ySAy3vRCTY7HBCKp2awGtHmMbdDRhbawELNb4ia8f9",
  "key13": "5aYAJpXhgEhcEPwL3j94NNX6M21vBoVJAEPhD9fNKqrhSDqFBktH7RtU1RnJUFFCvyt3hofXaK6McigU8zAwCtFc",
  "key14": "XgmyyWvTsRZFo86curyWU24qWRZStDWhzTPkaqrPWWUQR95co57HKKrg7YTvAVQ2kksrefdf4yYvmS2o7nmFv8A",
  "key15": "Wyz86E28s4REp4cYS8HpeGLmfikrd2yextB2NQecpSeDoFfEeMLKeLrFY6ndBg19X6H1gwo9XRCrKrbXDSYKzJu",
  "key16": "3x6a74eCAsWTuMu2SP2mWn19ocoEok8yDxervPav7Q7Da9FSLeG1ZztHGw9v9WaDxY1KvDoEBrCzdndkBzt78m4T",
  "key17": "46FLikWLinu7G41EDQRS9JgTR1N78VbHjoQLQqsJYDzmZBgthhGedajLEPjwd5UtHFP8pH8VyqFAzUYU1uMqT3g2",
  "key18": "7zhCLgLJYuoNxEGDzPRxbhSznjqYjbsxAN7DZLGXxmjfZ11k8BGxHttf7FTCp8X5hy6iYh9iYqxVFccmXqeJUGt",
  "key19": "9mKnrHuQiQ7v5Ka7FhjBcFgVvTCuuh6BFu3DtjhMv9x3aVJAbVJC4HvywMdRMhkARUuShzzv8jqxqH6iPJzUzHu",
  "key20": "2QRyfVLYHWYNVFzDZjyCGsLSAkQuCPwuza9dJrYrQ6Baf23FqvXNvVDEuK2LjdpCMoinJerLGigKcrmG1kMsgi5C",
  "key21": "2imrNiKoCnY1sS6W3ggmuk3GQLjFiEJBHwh4jJNMjTsvfvLyyi2EpdXgkC3f2duFQd9aSFkfbvvmUMemJjf1LyFR",
  "key22": "5LkccbErZeb4LW3YXZAL75xex76x4fXvWnmNz97QR83eFkVU1qYadLEe7n1UGEB4FAZ8nmb5j6FNbcZDHhnmt8ke",
  "key23": "4VxMTHACHCfPhoEXmxtL41oht56ABoCG7sLksKAGMJHWYtSiyn7DNfWd3LNtvXehb1wGy9pVdJudiq4K9TAwhPb6",
  "key24": "3C4wwbn6nVcbmJTgokDqdbrxkNTNxkcL99c9vmMZjpbN8TTuSLBhcnALTpnUjgbFkPpADELDTumMHmvxVPa3ntqx",
  "key25": "2iTMpmjnqeVWkV7RwbmKHGNmDjiRa8SHGzxRRarEzYaHTSNVzFyrkY3TvGnoi77o3gJrW7rvmBBJyUVGsp57hjHL",
  "key26": "51myjgJ7m4Vgq5jrCBGPW6uZ7hfzQJt5SW2NkhXKE58SXQWDUqAnNnLrSFKDWnZCNmh2xuHd6MUyUhsLLBytdL8V",
  "key27": "kjQwigJNsR9V9sUaxSVmzgZqdDovTZ2WydNrsgzpZXe2jo7LxTDHefo7pNsXA9HAiDXo4naedDLLXMdLQSZuoUh",
  "key28": "4hzJ7ezPR5C5Rai2vYgEU7dbLz1qKVfF6mtgFmBtSEPp72XCHM1J67b6nho4vVrQXPKWo61DCyfirxXGMrDcswFn",
  "key29": "EqZ92FLkuo8F4t8WkLZv69Gw7irrFgGV8T1fBJgjqrVvEffXwPgKELFdmjReg3aW8TKMuGNZKMpGg1cyCqkKTD4",
  "key30": "2tCFtxfwmXnNSswrK3RLK2Z4Nmw1EQTuNiUsd3bqGN32YjGihSefESLBnsJj37HwhPSE1nna4gp4Lp3gxs64U73n",
  "key31": "618v1CNsVcekzshnpHJkWHTRyRBfVETEjoHfHXy9P6PHh1J86xCMVhus9AmmowyLEJ5vFTVt7DSUKyYARk4s5Wg4",
  "key32": "368yT3M3tbkU84aswJgFfD3hEvbr5TjPaR65zvdLBZzY6Pm6FKkU8MuTAyXXfRSbdpt624EH1BR3QAsTtGAv9obS",
  "key33": "V1x4gvrwcaJRx1hcSf33wNUiUfNEsrsc6KwjGsU1iB9vHHXrfj7sz5ZaVCymjBwCPEV28jGBAeYyQ5X9aFw83Ts",
  "key34": "dz8iVNyvJ1JENwTVJ53UcxFEzJqusuELiGExsczozRqzWs5hkaTuZG9xh228Jvu6YHezNSuFBK7stB1T4bqn1tJ",
  "key35": "2tNnmZbuQSZKWnCXhkxBA9QbKCJY3xe9oUET6kh8crrtHnyG53cArdFrtfo8TLAKTARHFkpRmLSMZm6SSykpo9M2",
  "key36": "2qEYWuo1naHMs35NG8inQYnYCKih4RQ1BrsfaWmpawQVhuTwEVo7dPZDj3fGZsmnYLCQxh4zfhTXiGLGt1Y1bX9s",
  "key37": "4m1suyw2WBVPXfkYqgDXSZV5Z9vSYQcmt3h46QbyxLit9BMnxBJHQvqYR143C8dWYBYL2Nrkb3pfirFkYXnqDMhy",
  "key38": "4nWCTRWfCKWEQ5NeJ5cQ5q7mPsLpTKbmRDiD4ay7gdGBQbhyapsGNN5DfSUEStSncY1VEz9fViPCC1J4dpeKD4zv",
  "key39": "4yyHzwPNdf54xbgmBCyLnVfKvWU3Fg5vfp7smWi49dumXmYXjF2w2FsoyN5RarusDD8uZLYayUERzMkJmTv1MJ8y",
  "key40": "3A6wv7DEu7MFvQAjLpMkozUJnGDokSoerSHKh1Lp71oFqSi7sSgSEfMUopRMQUKY4QDEMkq5yaSom1FnpQNx4DnX",
  "key41": "5BF7pToxicUhkFVV8C1GzJ8WsvP5K7UWL9ob3YxmovBfQzb1kPYpBxNn7eRRE7Bm9Whux7fNgu5xFurWeodBixcz",
  "key42": "34erQAnms42dbU4rePVVMCCMpvcih9FpYZ1n5s71U7hx8xmFXkWqn6w2X2auBydsxeknCqwX3BYCrZXXgHSNVGbK",
  "key43": "5p7SXubSiQCYYeN1L4f4i7KMXTiQfSEwciNf6ZoF8DTjnVyg6FMqrReiiu9xRmpcYFAs3nML8keUodpMU9bN9ELw",
  "key44": "3qMBHbKFtCwPU2zw3HMcBJ6SgNQoJjwrLm8Cu5xgE2dLB2WBLhy3DaDTZyXixpGwEw3xBVFbsQNMe2BzY8HB2aNT",
  "key45": "4T2UokBsYj6vSEcGZQpXY8T9fuK2ZJh3EzemN1xJ1PiKAY67qSZEwVSmiMSAgKc8pYm31pjh9p6ngQ9GbZUSK4w5",
  "key46": "4K2MYfUoiJQqdvv92LN9XwJZU9L4SqNJArFafyfqpPtUEyh1o9rHAy2LV4Ma8eUeSMerpqnPD1U64RGFHCpr9wWT"
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
