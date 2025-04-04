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
    "5huqrT1tdKnP9W6kCdg4gLZgjc4SWBnbSLFBtW6WRFWzB25EwDhgrStyYrH7CyUbTPfVDcoTC6me3y2ayMvD8Pq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ysahCgkM46JXhRuTPQZqRsRfNxoY9hV2hYph6C52wobH7zqewtM5hGmKVWbxU6jdxnSbsNv12mqjRp8zXD4eimf",
  "key1": "37MiwfRHtAzqeAaxp4oWuP9y4yb31HatztFmBQGTMdPrQxG4SeUiE1MyM7v97BHDFaz6YTBmzuQwFJDswz9r8VmV",
  "key2": "3LNA6SPNQS5yPUKerQccK5fmwmwGWnu6w6Yq7z8ow6EQsvqGGVTmfE48o8kRJ5q5daAJgNTJUAxYERLwVPSAQeyd",
  "key3": "3GPkLMUSHvZ42uTAMKcTMKji8Q3BrMd9BN1fJq2LucBUG6e8dw7Wt2ExJCAo6cb7jmR1B2kWVHxc3TGKQK4nscpW",
  "key4": "3ZMtiSitMqtFd7U1BAxaArD8NVW47PWbB8Bhi7ZJFFbG5dwCUDUa9Hws6PaYtMQtFgvnKyamsWo6BZdkJACAr5xA",
  "key5": "2XKsXtwg5N9BMMbMiMJpWcACZdtg3Yc4TSZPALNXmhUcLQBJqyBpx4VFdbqkQBGsgsEFmgAHu1q3wyUCy2ymurbf",
  "key6": "28MzdeqCRnHEFvFEJDhjuX4MBeim1RvFBCnnnzwTXpFnZM57qTpHnm1X7ep9AVY5dBRQXHobenqRn5595DUbsBLA",
  "key7": "4dMfJ34XTLUZH1gk3YRzVDHmhsQSqw5dueqZmryP517qLa3nPK1KTuCECK8G1DiCzXmqiTrnW4Gk3zhXj5bMNpdt",
  "key8": "4AbwtvatxUf57Ldydyopp9wjhfCzh9Fi86u8ptp7XKoJMmg2u37D1aRBWneJTVEHA634XTigJwis9C1Tu4dnJiYP",
  "key9": "5pyM6V1vvqhXen8qLPLfKJTPwgmphoMgU9euuXuhS441bL8M64VsQUiHrXenzN4roUiNm2VQ46DuQwBgzWEXzPeR",
  "key10": "2uUCRsD7WCvqyBCwBZYSEoCupfJcCPudTqt9ditBPrFatnpvu7YpQwk1MoCwufRVuc2R8unaYH5gqi54GMNSHrS2",
  "key11": "2LhSRQdKV73VYf4YG3p8g3aUkDfc2haRgTRs22ZQComTzVXMdnd6dVcYG3C8y6nqwK7s4xzZG5gEHtjCxi87QqeQ",
  "key12": "x9RrbVxdvxfsXdhjQsRkH1oq7Zw4veRxdLCqc2kFZg2imhj8GtvXyEPKR9vggUjEwZFNx1C22yH9bHSfx1uz2sU",
  "key13": "2V8bie4kBBVJ2PUYy3kSa1T7C3kk8xhVw5vc2J19pSiZCg1qhAqAYSKRS5XgzPArBoVKaggZWkXjFRFmoK7MrZoi",
  "key14": "58uPKy5LXGA2rwj1sWeFK5NoUdcQrhr2gpJmS7yoJ6MLeJkbkb1jsWmsjvRdtymx8bjgWm3GbNcnZMsMdWkxUsbK",
  "key15": "tnPvrbHUnorEQSXSBPHBqGp2fZKPFdNHbA1pYweCMDSGb6aThXykLHjgfKdgarJxnfCiJ7myCUwF4VagEv5mohQ",
  "key16": "21dirMAUEy6soNusByXSCGQSqwK1zWj2SV9u9sCZgPtbjDC5UUPbFPUZWHZpHAqKn3Q5WduHHQujRbMND2hkmg2o",
  "key17": "3MNcV8m5ZTNvGzSnKsiPwpatYQk6i4SMWHSmdXGMzWZwgX7ZrZY1LpAccbFSX2fMeWiC6nuFGiDn2pQHzpap1Nnr",
  "key18": "5U2wX8Zjy8KyvKiozdWdZR2ZRRFuvGNhzqjEYiEMXsLYmMcVfPD2wHcLb3vpPJqdNuu8uqDcAqMkpUnqUTaJyri1",
  "key19": "5pJUUprbdqNYBDizHgQd3wXCWfJJPMXNUgJNt3TYfm2DCcp6L7gPsdKGKrQPbyXM73H2Dxcxry1L8eq1QZs5Qwyz",
  "key20": "21GumPWMhfSc9XYU7yPBEoZQ6xEFH4PnGrPKLuiEbsFioU85Kqu5PAKKHcNjwAMUPsiEXAHN2cXqdxQ8rjZLm77B",
  "key21": "3LPHVRQdFFhvBPZB54XQvEcZB9rMermmPit5jnMjCesLWHc2BT749ULshB8AC5Q9ZdwEPUqrnG9maxbWdFQsurcR",
  "key22": "5Ky4KVX6gq32WwGkjQZKQLMBhZeaLidSZ84xpiDMMs7mmnjGARDv1bZob1L29rBBU8nwKom4eLQeyq67dRucvkEe",
  "key23": "5kehiaB6ARzUBzXUmv7mtNNiUTQAQGTyp8x6zoZxRDncD7zrfaSKUbQPpthyWdwBZPduaeHZMqmeK286qRmZ7p7k",
  "key24": "1AMHn5Tem58QiK7iN6d8sT5v78ep1mQpLzTvFsWgi4eeuv4XXipT8tbczhzM2r9Crv5cCtjbMDQaMRQCFf6rqWD"
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
