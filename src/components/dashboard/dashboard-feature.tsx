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
    "3AqqZnQDr3XrWy6fztn2BegKX6guJVJtWoVd6abo6iFm3BbwYufCQLLaZZWKkBeNjBECmQPXXPhYPH2fJWfVEavx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66oXDf9LPbbSbM8HfZNao7dDPMHNBmC221G44HgDNFhACCNvJPuqxkgeNxQHMYu6MYUZViQ7fXtfkTCo6vUtrtuj",
  "key1": "62NmLXdbfDpb6GqyLd3fk8CrpHeEfYKCKgVMTENixbM3u77ymYUvvXNQmxa6nu52RLYPYukyjxoozAiiULT12Aeo",
  "key2": "2eEgEB2PR62SVfJ4Lpn6vDkUpXf8ajauBfNQtKSg2o1zyktivy3rZTxAiSvqrhtytsKho2T5twQPtmRHduyumWwd",
  "key3": "vmn7bSQQya3RfsrCjNgZFGDqZGKL219Ks7K6HcTe8nTBP2uHdsKm6vFjs3vMsP1cDRgL5CCiAKvV9vx1x15ngry",
  "key4": "3t2CA6P2Yg7h8NSa9iBYFcCLcYa4em1zQqGDJDFWVAgmuXuW8HQrGLnBNcMp8N2V6G9qLkCXcRvJ6mVpbR4nyNHb",
  "key5": "3ppQrpCb8HDi7AgR2ufZCrxEMLPZycqbcD9jp3MRndqb9kgFHmk2TdfBYR3AYyMUkoWvGttDsiT4BDHpAVip1ZRg",
  "key6": "5U46r5Tcb9xj4LqAAknzQ7gW4fPRpbt8aDpggHoC26RM8ZzjrpxVGPMHvqbkEhuJBaaUibEDo3kC2AXxv5B6E5GS",
  "key7": "2AWQUymQMPNeUNEkTFn4486Gs6FtHP7mjxAj9zJRosMSirJZz1LwRxJfhSvd8GKUpw67jMNU6avNzgmrbBpBmvbL",
  "key8": "3CQ4a1m2h2ADFRa65mumPjhd1LjKZ6BuezviFSHAMx7GxNXzPN98AL5rkFshQGAbvd5krwHfrHemSL3Kvak3A91B",
  "key9": "21T4XrcB6SQf1PE6bgd7tmHqhoPZaamiVpBShqctHdCPk1Fg4omW1Lqz4ojJxEqTNLdNwdXd8R9aBmTd42fyw4zq",
  "key10": "4Lmu181e8TMn9y4Pd4GAbHwa2Av69zrVmaBeYAdj7rL97QcFBzT6iD6j5DyUr7LLwQ1JXUcr1aPNfboFMkFB4xAw",
  "key11": "2pXawgFmRpRcu2DS1BhdPyBbCG6qHUTaeDFagRZonXV4R7snL3n6rBepxA2evSCcipQ8CSRz85658ukJ3YmJaLR6",
  "key12": "2DuMFH9DtxSrMqVLW8Z9rwBojkXegLzrGvpouESHjUaxG1Qc1PnqZce671UCYMRLFkZzwumztVP7CtNbzEGdarSq",
  "key13": "3rtfHe4Ug1WG8UNGhozSxRZzaxAs6TzDwZBTayb86YEtxu2vikm46Frs3T8u2PGVhNAXa5CrMoJfkATYivVrjvx2",
  "key14": "55KmmLZka4PGEsN7YhWA9RajFqoCmosg8kpMmgUMjDKD7ofpnVTdukByTMNKeiDyQCkg8DEiMxuGKdWB7ugqpqho",
  "key15": "2baSjDZrY9vdwtE6kF52HLLEcj5CTeADArDYBrvmWFgNPjG3F18wD9rQu8SGLiacHMDTMhTko2RyB46WiP4GnbRo",
  "key16": "272wJZFUrEmNcjk96YpEnjB6nHVdmXSkvXrKGndPBEGCmYhedtZzeiCPBkZVFRXfd46QJg9k4x924SSfZCG8c5qo",
  "key17": "5FxM7x8dAWwBCsa4rgE7m5RCpDQPt8Xc5nA7hXzWAX7wDHPU6b2QXmPrrTAHFXunjEwi3ZKmUMZfgYcVHEALwnVk",
  "key18": "3WbmHUFHoNXaUWpn5GsowEFrQKamabXrKNUEdXWXuUHBebcvCFtbeMTHLMWdktmbvjLP8j9HLDiJqjuQJjBHJtpg",
  "key19": "5xo2ojNTcibBkKvPfuzkagN8Qqz1XDbCxrFjBxZnecou4auKv1sX43ARbo4pY8P2S3RwvsM7f5J5RCDgHsjh8dPf",
  "key20": "2dn89EGtjpJ2sLQVH5Cwt64XESwsAQFv1Kw5oGKk8kqmGZbztZXa53LwheTJLWxERUTCDdtChmD84RQfwB5oDt89",
  "key21": "2XyttT9ARzgjTWSfqFxjNpuesa3FC58Trd9DmB1T8wBtzQrpF64R5T2vqHtsVU3jftJ1zJVvKTpcgNuouFGcx1Ga",
  "key22": "5ajwVaUB6Gqe471ZBzw9XYU6ySRrD9F6e9cnfaJbN4TQHhh1SYdA4Xdkh2ypdn18UPRtMAJyLAad1DjStVQ7GEaE",
  "key23": "1iaqezHKPNJvuHBp7iynJYHsPquHjmboo4414tQMboA2ks6Sudr5ivc926p9AabK5oHRKAZcyeN2N4Ftz6EUzjZ",
  "key24": "5KWseMoNEXYCYzTnSNFZyxNWJbXsdGiAcT9TdkeLaH2YBUJ9vcJpxqnR9T6RRjhwQJCUZEoktqAaTvVwRJPgVKde",
  "key25": "5uE9KscK7b6jVKkugBchyL4JV7dZrAS1FQZixJZ3bjoGQXM4JD3YanckCWakE9tSigMbvToCGccacmHCvB2KPjCx",
  "key26": "18aSRy7DKXLwxGVQKiCT24AaGZB87PEN9D2ZdZdWZKGyeagBtKjy5KsAHz98kc9ym8J4NKcGTMjF4KRci2eFPDg",
  "key27": "4dBzCeXhU9dK5WWfoxnS6QL197Wpjs43FQ8qFo8CpEN69MpEFmAoKzbyy1NsNmnJqR4TNA568hEqiwsxSudrsaK",
  "key28": "2AbedDCUkRStxcEgDzv6fr7p7RWZMpJoQaYjvBfdG9TDfPMP6dGsAF3BLhbcGDNai2FzQtiKgLA4gY5ZPuaXn4S",
  "key29": "5nwQf4yjER2wvvrw2mfnwSN56KXBpHMUMhLZay43vWR1xi56CSZXoZGe6WetHwq9Q1TdvDeq6XMftmyiGJC89zz6",
  "key30": "gPiZvF4TDD1JDQY1P2rvKwAtCuJvLv9xNtsgwfcHuDW9c7hat4rxdybxohmuYHVTCovQLfFW3wg2mbom7gNzFyZ",
  "key31": "3BynS6aLN1no8zVhjo4qrKBgCgcCDNTef7U32n6niy5PyCk2r5dSZ2dMLoeZGQ4x9qaFgutoqWEiWZji3DfVomL",
  "key32": "2adPowNAaMyDwjJD2y4CJXQKj3G999nNAsZFVkTWgDRkxyJFhgWZ2Cz8SzfNFaGzzhnqDAk9j78HSUJ7pt13qfZQ",
  "key33": "2c3yiAtrRqJjZTaGCX5vjvUUdUdmvgtracfKDZeHjz4vMRp68tWc6jWjm6skUnJQF7LL9LwHVMR7WcvEDBDVp7p3",
  "key34": "3bjz2muzmff1tHLowMRuwm9raMtgusoyz1GZmi4bSCAE66GRX5sfmRJBB7vt2SH6mLToJjQuL5pvu3qWJ4bRoKsc",
  "key35": "9vUJduJcnaqK6d1r4fvcTKhQbBxoviMQmZqko23bVgzTAAkUGyD4SvN5p2egJJFQET3SgWoXjpAN5uhvRiFfpGR",
  "key36": "24cgToxbs7Lzguzxkw2rLA4DtPWTnpVYQfjZRxTfPYsA79YPaRSB777nm7q7WJeSnX5cMUpUCymA1HzxfS3BqhMi",
  "key37": "QKFkjzZyzQeHFddZUdPPx6MzFBLcGQsJbtvC5UEciYMuCVbMHjDY9fSwu4HkyDHiigAM4JEgensZDfuEJhNTZNA",
  "key38": "5wKCsTxkMBS7omq5GRFV6UqorJFnbhfbK82mtEAFzsuPXP1DtrbYEibp8gWDMTYHdTSYA9MEeupYPFL5JcH5nT5e",
  "key39": "3mNyzBFyUM3K5db1BJBRwUH232XZMnurxqR5c3gNajKcDNR9wJQ2AtKRLb8GUnsshMyGfqKxEAfJx84yx36LVLeq",
  "key40": "3auZVoVEPRQtLrcCnzUoBH2Bjet8mrjqSMaBucD91PEfRg4KiigvkDAre22Q9fGZYywFvFi9BjbkrE5Dpxo1w6kh",
  "key41": "bRdpim9d2U49BViHXAaEycyQKQpKRjb5y7EHAeEJ4CcCRAU7eid73LrWcUiGjhiGyxf5gSjvminhyUKTjPMMMWi",
  "key42": "56uVWxtYzPgr9DBPPRZNfSxrguckj3UW6GAPZXwUsh9LYJV33En8eN9THbBc3SyCS9mcTomvm7NEHioGEqKzd1XG",
  "key43": "cLMhS4XJBWkALkUD23kdQ9FoHeVXjNkZ7nvy7scBFtfPnyN3A5EumzE2VeAjnjM3HNNe27imaCrH2KuU15TQY68",
  "key44": "4t13ibQMWN3bKNdhUcQJXwefntoqXqWzUDVdLtBJjBwwWpCpKAgG3ZkgajLgDFom4CJF7zzQ6e6Vqt8AyseTk85s",
  "key45": "7CJVRnGr5gFRycHFN8xECtb8RMHTXuD9SuJ8dPxaE8zbSZGERkgxu2x3WiW848ExRdsSypj4rzW8kmchKsfDcts"
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
