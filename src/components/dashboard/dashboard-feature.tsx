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
    "5vteV1Zy9oB2a4c3UR1y566YmhARpzZj9JLLVsS9WJ3RfeufegKY8bzdEdFLcfpetJSDkSH53iFrAKsSDkEQni4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DyhRw2PSTW5kPEH6zAzNzr9VG91eX2pDpYutWKBMV57FofdMcM5VidPogjkAFFfgQbhce6Jdk2wm1CJGNunWEQy",
  "key1": "51ESYCYbJB49R7AdfQFAW9aqv6xW5PeZyzfTL2ZvbJZPQivM9DovK3qMjkv1xgdCXJ3UeyzM3rpZfhLmXhGDUoxd",
  "key2": "4JQD5P7tYViARLPJkZR4d3SE39TVFnsv6VGKW1fgmtetmWKLByEwGJvmpgA9h1NydGsakTsKkJ9xjjS1sAhTg5PA",
  "key3": "5Pqk4ET64T6Ekf2q4HnY2VAwSdcRVDFCLdUXusEAogGak5YzziGTaxj5NJtJKrP7aPBwDuibeVxjXfCDr8vm6ntb",
  "key4": "2UbEmdjWFr8PVciNxQmGayp1cyPBPLFdcrUeDsYsyiNPBDnLPfuHy6UkmCevqQhvUXZA8MUT8EMidMM1YYRiuBhZ",
  "key5": "3P4CprYAsMpTBMzf1PinD52HNDsKnEKokPxLJg7j4TNqNfMUxhwhmUoEZwzjaSn4igdzJThYE2SdBZhkcaPMEbLx",
  "key6": "3nnLhhDefhpQ7wDf56WEDppSVTSQgNp4yVV6QcAqWQ56k42t16XNTDTTfjHw7SYHM6AFLYqAu81iuWxcmkgHnRW6",
  "key7": "5Q5xegHU5Cq5K9489G76sNBL5kfEtDSdQPWNzvk4UpGK4caTms5T2VuPVXtfPJAojrEQaHAbT3E82dJbQXP2CB1q",
  "key8": "4BW1ztzoQnTT7UUjbToxRhSSVAxUUrnr8jDP7YwijfooVavTZDVkhBVNqLgcLvbgmXBo5J7NZyGSNcbHBZYR81G2",
  "key9": "3X9g4jBdVf5MsAG1ZJLWniZ9VuWTB67pFM78GeQYV7AbbXCp9hAmS87jr6fgQFxhfTnsp7xM85eBbogq9aiBQzey",
  "key10": "3v2QuKsC11TbhYG76J3QqLhc5VjuASsGroNArMdcETxEkPsyf6gXfAMRcgMV9B2Xnbbd3avhMUDJ7kKcVM5a7R4U",
  "key11": "27dFPQGqXzBkHFYbTRVHkzs978JvfYYxU1qibTSQEszgtSdmwdxJQrqUBajbg4sip19FkHGW3KJMvTbSCrwERhzp",
  "key12": "3Rq9kdFUCWCRdoY4AsjGcf2uvZciSvRVYgjjtChWH82ZFLaHdJzZRGcERvEsWcVHhaLmfpuGMQKspMp6jDk5LVHE",
  "key13": "bScQo1YbBbbVsGTcfnYJLGyyjdFJykHKmyBWDvnKuEvUXZDDBp4b9CfBfF3Ba45DXPoJCLa4NZV6YEfzsCXGdoZ",
  "key14": "3ESvF4kJgSsGRURwj4zsH9hj7QEQ36iBrnom5N2r681yc2orgUTj4cFCaA1ctFAEsJD6zc3xse82cJH8JNiXDvsk",
  "key15": "8frG5NY5Xi8FSxgxg12PtYQUNzJnPpnbwNLkt8nF3944eThp7DMEsP2Q3KH9UXNhC8TL8RwnZD7s3oLDkv2P7N3",
  "key16": "54rvzifK4PCwDzQvYeuHFp5Z7PopkkT5DMTmzHaSGNtqHKhLT5aoddeeXEMzNTTZo4UvfopUL4H3eupLzaghu5ih",
  "key17": "32QybypM8JEJWdtdsLG2oPcRhPta4JytaN2FWxAf4bHNWt5m9S667jZPrWWysUZ5LSZsFEedLw6wvB6sbZWhRUBH",
  "key18": "RtoasNCRbXTXbh5VfvbjwLxzhV8okZzNjk6MdttLMqWMu39gdyQiKPQs3wAFTosCcc7rUKiSq5LRDXGUnfBQhtT",
  "key19": "3z2iKgPEE5RqVkP225EgRuFCgYCEq3iqLCXtAwVJMrcDpbMq4reEexvrFA6SKPnhgVNS611pjtjPyRyASmyLZZPs",
  "key20": "5KYVscDjgiXX6owoGPgXwGin9jfUwAUKNAvyCzA6Pd1PX6R53uTeFXv2eJNMjfnmMrEXD9UmfB6iNw2ZVKQfvsya",
  "key21": "9w698iBdP9crZ5qg45sjnJhsW1D92d4qqQdp5D1kVihj4KwuUFtwVEBkGFkx9XBBmB4WvtdVuJ1hvcbgMs6vkd4",
  "key22": "5NKXcDXfBiHRvEak8EDTQK1KnozMos7ACNPjWzc4cCK8VyrDkh1DQR9yCkbfCHmkk5hgrYt93iYppjDe7tzexmXf",
  "key23": "2jYbRaPzjrbE9sXPyaaGK3M1pHtP7FY7VxXBfGTougGYnGS76g2DfQmGFHfJ17RJbWeux8TwdrUH48w4PACXFB43",
  "key24": "oWSG2c5W3DQ8XNWu1Na3BNuKwy3WkrA7tXtq2wdjvGVh4hPvPcTnxb1NFuRhaa8W35E7HQi6M14BF3wXHNzvAsm",
  "key25": "5jxQBLRdy9hwmK5j2RWeMTMN2iVTePPccHh8MibypLQEcx3aPFUwBon1SHgsyVcCbENG4GfVeK5ZfU4HDk3yWJzL",
  "key26": "2V76ppPFRSbhgxUJm3H4EaY5dpHaQbwdnD4NQf9hHKR658oCHVLrHcwWSnhvDZFKDfq3SeDY9xpcTMq3ZBwPyznY",
  "key27": "4TGZg6hLL2nRYxjZyMiCVPhsdzrEtqA2944vTqq8JGVKiTWa4jGAE847rpE6bBwzyqqXdmmK7RZdn1EWKFVySqft",
  "key28": "3FH4kgh2mwKLvGDseczuJgeBDYAJtvZT84wzP5iBZex4Wfae9CDdoUVmHjdNZo1j5b6rRePu2i8LCMLNQro2XV8U",
  "key29": "41NWAHS1kYYWs6ZiUtX9PbvwoAuwMqPcYEW4mcL4YajTqFW5L44aSyNDhEBZsSh5FzYWzVz2co6Hv3D12w4qYuyr",
  "key30": "2VMWjuEQEM7D2gme7usM6GeDPYzx92d1ExkBznKihwoJJ9XKZ5x8YhY8kQ6nryHnasYYz6extZvXvwqKXTdD5XKR",
  "key31": "3frLbz9N6Z58fDsg1piPkzLb6wfBtybYjm8AgMee9bdKzcwci6za1sY2Pi2M7Aud3sUZ5NEhxpSF5goLWZ2Lhvr6",
  "key32": "1YWQUazRVdEkzUY1gcmpMSMrEd3aHuukPavo58yQezXVArmedcgWmDxBWJtYz6ZDYfeFmpt93fDpW6bFc2rWNpC",
  "key33": "49EXxScxjWWXScN6Yv71VVhSsYH9qKKmaWJj276FakBV1tSDLg2NV5irUJXafy2BDz1bVHcUcsGejENTcvEKbTe7",
  "key34": "2iK98RNcczgcAVd266fds1tn7TmXD6tioH8ejVtZfpbhrBsQHvn1FDqAKmZkjEH2S5pPywnRUFdD7DCEQ9jqKi8Q",
  "key35": "sLwFaxi37FP7227xxAaK8ymsaF2sz1ptmfVmwwnB1eeSb9c9eUNg7kRiwXkjD2oVrsoFVKP5WejSffKWDpyDh3W",
  "key36": "5eY9FePWDMXqfb1D98yXfwgEg3YeG9dbgMmi5JqrAigZKaMEn7c2F6o3MmCm2gX79QzSkjYGhNXezffwQVxDiLWk",
  "key37": "5tKq1gZRgv4T9Tr7iBvXxTLKgwjkFG6kkimczQTg8D7B65CBTuyvErbqmdYPBQdJpQKv8Yb2incpW67xqbqFN5h5",
  "key38": "23zmUWJwTx5qhudEuKsp3qAjkfH4wGzCQQL6G6YAYYqiMXFdLKKXcV6bwV5vUCMvzQx6CwN7Ano9ptxiw5VuBH1F",
  "key39": "FeWdPrcPUzMrZRbfFSxuoHqyjctTEbHN5hyepxS2CHF6nphrGx5bSVdovXPeBiQv2rrEJKgBRq7wDYr828UQmDL",
  "key40": "3NuyDK2ofCR2jQ9zxSQsW3vyvm3VX9jZSuW75tkqDD1pjcm3QLgHsEMNcGdJY7n22LieTNYoxoRXepsnP5aWy7LY",
  "key41": "UZ9HgBts9DMkBnoB6xAHRTNYv4SzHDU2NfYMjbxZgk2K9ysFmLcirKaMe64Pmh579qbMubMcGtU6NhUKK6n44ya",
  "key42": "42Wabpo8LMffbjaaGxrkEvvp7AzTV5qBV41nuYknrsrdtpywAP4L1XLWe87pFvoiTBu1NoYv6Qc2TLymDG5qnCtM",
  "key43": "4wyHzqRYXLp27XTmRVxca1ABhg4TNoWBXedjJfzQSC5ya325Mms7GqwoLddim5n1u2d17mmrJxZeth2sU1c4AqZi",
  "key44": "3J5rJRnroKhMZkw1v44HkxwsgubVeiLU5ExwVGRDuBMWPaFCXPLuYDm2r8KEfTFN7T2z5gvouPfR2a2KoqXoo1R6",
  "key45": "3zsCV9cyXbtxcGdbG27TyizkgU4osDRBvyHUZG4Tez8N1sUeN6B2vABVjY6zFfrbszv139pbdqVxMB8AVDZBGbee",
  "key46": "28pNm99o41qmBvE14EPFcwsZqhFtUNxyMCUwbykoSdWBL2kxtaxNKFKiLWNMTSz5nEDmpVZDpZk6gFKpR1jXNrYS",
  "key47": "5dtabnZzoYFwjKVnsYkMXFj2BRxVxShcu9ryxSQ6WkBgmhZH6wYhJbkDP6i54WpH4zZKHZ511tskgoDHAnhnzgs4",
  "key48": "47oBTeGatXTh2FtUYMURokmRRSQZoN24zFTeU3Ecd4RxQAbsGgyY3zRdimQ1z6YpiESSkG227mDXJsRM29bPpPYy"
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
