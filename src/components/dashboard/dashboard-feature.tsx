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
    "3CdW2hVmtcVuTpkCusNkxzjoVgwaUsxyuqseaSB69cHrhbtjVzWtEVEM5V1x1iumoRzCY7di23kcsATzahqhbMzn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tJLRwKgfh75Yp9oakZLrb4qrWwXqXzXC1yWJBaZTDf7qzA4KSoiaHPSZiFUq1LkhpNdWeC1bSNTTMCRanKPYEyb",
  "key1": "4DF7oZ8oyaActtodKKyTX25XCET3aznGcA3njvkWX8sVpCbK4LuVHSbCTjamUZJWzE8XYgbA3kdHF4TdyVHSfc3A",
  "key2": "2Z1ZJJ9S6H6FULmTN3gevTRrrToY8YDGPksApMyBQeSWq6DPpLENWD5S4AQYSYPRH9AneUkw3y8FMLPz1s32S4KM",
  "key3": "3BoeZYv1VPxgF4RWRmvVPJSuGgXfDK9WuzLv2tW8mnF4qXPDNPLrATWuH2myeFhNWV7jsSNN5gp8SLLYAQ3De2jq",
  "key4": "3tS4kA64VXyWwiPETT97s1vrBVD3wCkvy8zvnRiKvcNfJC48YZJNXe6sKTF7RMjbySnLQFwGKrnoJr7sBGKBv3u1",
  "key5": "LiZdEAbaUhr2Wt5me7mCUax1szvyGsY7WuCoMYzd4By74PBzN6HBLbqDxd1WqgTVjJtLgTnR4CanU6rdzSfjfCj",
  "key6": "2rCdYKZhu3tZSAodHmrpoXErRkvdY3P1kUyFJBWib4Z4aVpuyvxRpBQPxDjkNoYr5eJt6hbQWdCcabTnHFrLfHGn",
  "key7": "2ZGhKJcUyjUArwUnHaigtAmQ8feZqihPoMEAyspyJb2S5NYjRb821EhYEwa1NXkyJaxJytyCt8SCCMG3uHSxqCcy",
  "key8": "hvyazLa3WxkfrFpRcc1RX6yXB3nRQMrFd8Uo7pVyB1kV8EEk3uqTm4cYwrqRwJfCLURHVWxaz5Bz19RUqxazdAJ",
  "key9": "4PKRAYobmhaeqViak6ayQnqjRVxomnpCW86aNYSdeGuUGEG2A7vxecudg5mkP5WK3xvK6T4wFo6FpsgvaX7nkXZu",
  "key10": "5rN2fNY9PV7mKbASjnuMM3qrHWynio8ui5EePr7qvqxGZpi8gytRQCumusZxeGAkyktrTSvce5Xu7L3uKg2LSHLc",
  "key11": "3jxvoyoi8kTJUSyxoNqndzieaALpRJY1bhbJ7XSJhrsAuknNAPicoFqf4tcrcgthGCG39fFWbqoAWyMTzTE4fAsB",
  "key12": "5X5FJapmDncHS7NPooze351qkBTKeTezEYWatUvbiL1j9cyh8jzawemAQhSvNppUvnZ3xpXHoCYqxEvEAi3CSNhW",
  "key13": "4NKtuqufhSLGFxi33tN469WuHnBvoftKYB1Cx9hhCsjRRP8uM4XXV2BiPkMLJN8cUXRBizyAnwXRZj9SrX4MRYua",
  "key14": "3RTRrU4PTieyr3L7sMEfFx9VTiq5D5VGVytPmh2KzUMZxnDmbzw95jFDaZnQna7ZEqcYnUFJ34F293X1U1KbqdXs",
  "key15": "vnMdeMfm9fr7nBCFvxDkehmnaeePauhRH1EkbcbiRHmS3SwMHEAgvtd93aXwGXucjDGFJkC3t3yWeeX5DuDftwN",
  "key16": "4CbeCzCx4oZYPEukssmqhak37nBQvCjbVmPxbFoZWMLYLTHei9tSAwzGXd8v88Vy4xgik3bJJBz9dg7BAbySoBYH",
  "key17": "2ePqd3rWQKWPCnc5JEZfvx6ep4B7mshwqSj1TRrtH1USE8hA8WZSnTNcBzV9JcAhzzoQdMPDjqWh3nR2TQE2Ehdw",
  "key18": "4YqQCTcb87JkbaBNH8iSDcXnhg6w31Qd8TnTAx451ZWYnnoMBoYj98qsqLvDgXHTmxH6DZUqEJKig7UerDr7nkK3",
  "key19": "3FRsMqdRC2XYDhthqzFG5R7hCMTUKFSq4rxeDu8QE652VJ4xeCC2jJh6RWZ1eusUWNhuVfxpWQaqKFLpCYThaEwB",
  "key20": "3x6Sinyy5NKx14squv9QYkEQ5NfS2sQkeuEQpQNosdzU7eB5PsuzG2wAzAq8WVwp6MuDs1rYesL5opG8GGNCdAqM",
  "key21": "tzSXS9fnLe6ngZPHLxg7qoXnoAuFm8frQDp2i2LzQCGuAyuQe9VHzGB6BRXDtTh4jRY25qkcDScTBRbTTY1nSEk",
  "key22": "38jZ1E8d76jpXF2vmoQzJtDJWnEV3vBf5QNdrMCGVLtdUH65wQT1GmpoUD7Y4b2VJ8zNTZoUH1hbdFRmmH5mVViN",
  "key23": "1nAjyYyeafCanbjRuvUFXVNEjn9v9VEpFHeoCcuxpTAJ5HSWLoQFVTfW25K16kxeCQ3X7edMNFLWeGy2xUijxeY",
  "key24": "2Axyw8E5dg9k17tmAtr2pALM5rkTsRTxUaEUkZvsDXoXvCjUPWYPemceCAkFtY2jn8nWQGWrFwvaR7uwWyRNqXYf"
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
