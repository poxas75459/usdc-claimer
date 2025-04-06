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
    "4i6MJDivscD3NvepNFuJ1J3KBnWGwznHyLv39eTDfynYr9JhfCWEcUMjnxcYK8agy4RhxWV9yaDPLgiD9DPhACdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64huF92cNAAJ4MD7Uf3WmF45LyReAKJjC1cRjPhRYfCEa6UsHVz8G6SvBfiC13gcpYKwSnPA5yfNavVSF7nATMKe",
  "key1": "5dx35Qo5Fu61JwaosCejpF7ssJtv59sGU42Xn8xgpNDYj6ouNfuhCExj5YxSvFBvKPLnTnG7mDSrLvYfF6LaVtae",
  "key2": "62rsgKX9UbrjfobERsKgEqvNHmAPQfNZPR8QpF2PTGkPW57dmfFtZmehywfosRiJduNQ8PmMrdRDZfncEAEmppNx",
  "key3": "5W98MQqaVjCwx1vFi8wDgBvpzQsr92xz47ZeYHzeiuFcao82HikNPRUrA99mGzQrauE6L1K93xVi4cvQ9xejh1cP",
  "key4": "g8QL3ZGokwQ3zVJVeYki5bgo6czpgKzh1tCYJgKUA1i2PdfzAdBDJVLUUESwTMfrf2VpLizGqsVf5tRNu5vhfGh",
  "key5": "4jdHNppZ5SQZ4uZT3jAMPQ8ndGZyU1amxhsvZc2SQTyJsaaJxzWDur8dVdzP9NiFcG1Uw79VtdbKFHFsQuvvBQAG",
  "key6": "Cs5XYaJMp4CuEs9q7qmNfVkLdY7cyySX8EoFtCi3cYFSEec5ZB8GsyTBCG1mHMJLMwgfqnxCoLQ5LMdRT86GMCG",
  "key7": "5qnKCjtTheXPTnGdPF39Xio7GmruvWjXbUqbcULdjEHu4Bj2QkpKCoyrJC7FKiuVdAdg2BBB1Tocwtd39doD1UUj",
  "key8": "4uEXzfmp9T6pPNqvXnGzWTZJboMcxr9ZTpkdqVTuCqA4kbZFF46FDBoRH6Z9TaewbUKRgW6bqHwH1o5JiqS6M6CG",
  "key9": "dW7phECY1T76uMAkJM1V12n2HNVzj7cssxxQucTxSbRKYtciUeoPS94pxUxbw14wveJqPzyAaAik9pcwmNjVR2Q",
  "key10": "3juiQiHxWVe2MvMxoAHTBYr1gwpdBgrNTYZShdrA39tvw85MFvf9gJMh3BXdsdxfVSkJ1xSPYjjSur4pkPjFpy3s",
  "key11": "3GKhLmuuJmVCwUievad7YwBnGP4vpFCH3jRkdaMYq4udJ5ZXZGj1DA1FXwhgppFJV7vm5WR32BPzkDQZXzjFAN2P",
  "key12": "2Wke6ffRgynx7aphgsuScb5CdfH9qH5hvQaDjfPEfv32wU5jqE7khTZGod9c42jkAPRZKsXCuu1F73i4TDp6HQ4v",
  "key13": "29CjauqqYYhwdVBCCffsimZKh7WcLg6L2VFKag7fZK9HaB87yuNbDULNkEcB9HuRJwXgTuek2FpzpYeq7TgELQ6c",
  "key14": "5GvBn3psEdCMTAc8X1QYm4v7989pguZAPCRPcF4cBVCHD7c1ehKEfPKyrV79vDpYzo1wtVhFZj7iEh3NJ3WQynnt",
  "key15": "3Wqs18LyXgjntq33PHFgZCimTEgDPm5jZ9aToB7Z6pU2tB5EPAp274iAKsbTxmtf5EQYzB4fLpZiJuxKwKcgRcHr",
  "key16": "2UnPkcMZpGx2FErgGmo4gzru58VxgyYjmNFdtNBv79oNJr4VN53uneT8RYGxwF31142NJ7wvEx7tbv1JVt4HwHX8",
  "key17": "4oA3KNhDWTuc5Ep2Zod1dEA7Vf6y67NtwXTaAKcGBghDGcGE328W7AShxz4cfjNaTGjf8PpQssU4jHX7qq6WBrBB",
  "key18": "5kZ2uyYKJMeVT415BFPP5xZiyKedeoj2aMZqonb9PzR7gUzCPvYUQJadQcAmzwaTS6iqxq5tgvrHmxhb9PSUFNnj",
  "key19": "BH7nb4mJvXrop54B39LEjJSVeX64xe2UGmPMajFFB8iGezYgsYLBWtUqEGfbiXVMeuPV7AF6gAERX1w9VUFjMCJ",
  "key20": "cpBcnjycGqEhngzWCPZLAPb33kg96XXZ4acN1V5a1deNYTDvJyLdnUhH1ugQNoFqJ8oR9WAVRQSetotAnbU51XG",
  "key21": "5LUQJiqgWaXAUDfzw37eYqRBmsxuRqNUqaYQ79mDGFotDE5beWC87YoskdHmekHWvuaUkhesU3QGEvxhDW5euW6F",
  "key22": "51Knn7aNZ6S4sfGLyZvw8Yc9CsQ65gMEUcuJAuwQZ6nUBq5xqKrSBi5pJkBk4oMQpDbopfU9BJRr8fGkFiPWDJCd",
  "key23": "3AD6Gcw1u9iML5b9ewgxPwAAiPG7YZnkLscK96zXEyxESKJM3NkWEpQDPn3LTfA9TKQqJT7xQ3MwsgW1mtNrbYb2",
  "key24": "2GfZV7WPATu6DwUKUgfYUSA9MGtv9pARFntJEdR9Pjc6KVtLXnEKB2VUUiUFXrras5HNohEp5AYdBWCdQh7E8cdS",
  "key25": "2dTD6X8dZ4rBHki3i94SdvtHjB8rSrhqfXzdNNRZi5AEVSgKSdwuMWFJC9JRsQ4eZCdqt3xvw138H7HERpTCA4bJ",
  "key26": "McQCEZh5YYLzZAGfF7AcKv8ntzL1W1AnFug4miVheYdxXcDVovsMpuj5Q4biw5T7wCzXFCLKDRe5R949q8r7Vef",
  "key27": "LeTZRFs9coyVuimnGsh9iSwrAvJvnRAc9LAXkjxt3avTQzPHVbN9VuswDWUprRxNczsUUG2m3HyujLHB888SZer",
  "key28": "43dqC7AHb5JspzPhLX4JBa11GX3j6wGSai3EQVCkzk3zEYa8hXFUXbNhhNjTqw3uyipxEa5Kztbp8qAYfkM9n54k",
  "key29": "owCKwHwppdJ45fzM8P2RyiDPT2rqPSHwn5uSJ21gcC9o2hnrJWGdfpvo75sHEuLNGima2npLNTrJuqdwDJK29RQ",
  "key30": "2zM9Hdz1tkULs6jqAnNqEhkzJUSXEQq8WQCh91XWptTyKkPH3AKksKZygfUnzZKsRwn9jwBidpPz4HtWLesWnxP",
  "key31": "37jJTFJ8r3UERW4JXAt39Pt8L44RGDyxg5KZUSQEo6fCWVfoBGvi378ptwDJRSaL9Ez5Mpcqs4wzToDAPG4CB2DT",
  "key32": "4VLJuaextYzDcHfRMg7g5ZtUVKgzszdfXJZhVRDnP4WGodctidiAnxTNWif4PkxRUUhZNJXKraQe9umt8qzNQna7",
  "key33": "2EBdJ3wszz6zpcWTC6k2hs84dzC9D5bL2BhaFmp7TmtiJVayeE36W5o2RDh79VFHiQpF7wEHiHc8B4NmqmR7y7Uv",
  "key34": "4T1GFWhwo1ZLRE5dZio9z7BFAokSUfWqBdB9PamebAatdxsSvMkhZAh8tfgrkeyka6AS97iGvBLGS5ikwjFTzuLw",
  "key35": "D3oLUushKspnrD3qxEJsJbudFbXHzHAMnqrcpmryfPb5GTF9MZXMvw74Rg4viNRLzrYvSiiWzPfiZAQh6DqJbts",
  "key36": "4sobDDxK4AuaNRLcCDSEW5fu6nCxsGPa8Mt92MKvY8yYoh82sj8tVQaLL57urnfpiMrDX9J6wh1cFcYyvucfDbwK",
  "key37": "9enjTzKtcaveo1jMgaeBfdjz7e3JebaBu7EHo3ra7XF28X1B55qNCpcjdHmK7BWXPanTiLGEpQiLDgtfQ8kBWcB",
  "key38": "3KPw24HSfGCHhW1NLTFt8E9j5UjWs1WFHjhsuXekcmcUvmEQGbDra7vb5WCnHrxTzLtYHZpmkbFtFNNAoCfZngnx",
  "key39": "AcUmeN7DXEBCJYcm7ER8AkcXKvuaxvf7tgxfZe6NY6FEH1mLJdAGCDX4ppn4BtAuvjj8KHi42eYomdC9NNzoHVy",
  "key40": "44eShauBPx6cyPNoHZixShu7iQChzy14RRdNdMqA1YMtB4Qf89gK4AzNx3ykPiYiZyTkbD29UQ51rD3ozn7VUhQY",
  "key41": "3yFNroP3ydyip4vTs7jX8UQgaQ3hDanY98qmQodpVP1dMnEBWVyqkYXwubVmzSRmnBn4Pesp8NveD38hgBPnK9QA"
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
