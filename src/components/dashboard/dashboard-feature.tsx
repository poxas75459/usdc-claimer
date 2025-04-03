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
    "5qRVe73inGfvPBPzs5aezqHEpBRFJXpWB8m6zdy7R4q3EcHqRsU6yNsdi72Y1XzghuzghE7Hq2AbYxjUcHodr5kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PXqbL8cUX8eSVVfTmoBiPZKKQ9Uosxrtmecvsw2kUoKfob1soJf49kc6xPV6pxECe1ZERpFTw44JEgYBhau2JrP",
  "key1": "36CpnV8ZknHjk811ksUvPxWA2ihiQtgqinRzkow1ZqjU19Y4qJYFensHf4mJV9Uoz81RrCYXShf6Y7ZQZ6vpkZwz",
  "key2": "2xFPnm7n6gWNfEoaAdJ72R2bWJaxDAMd5C8g9epY4W8EMdZnQK51ARAqZTbEqjFJnAbgBh14zj7jASy6C8aVhDhH",
  "key3": "5SBmDw4Ti2PA14KMMkYh1nsjStf6ywEmjJZWFjwphtPyGFcZBxsTrLETB4cG2KpbQjqmBYuLp6r6xvXfFFHg69go",
  "key4": "2458maQ7j3iq6WYFPttufd5nYMxNGZYG4vwWRqBJgerd7dXBZAJrjqt6Q5vLQGaYuHgw35mpG3iEGBkdzigiqo5w",
  "key5": "3Pis7qTbkcXDWd5g3zAy8h9vytEnmhXpauBzwBdxPksEbYRdEFfVTAKDGv2qU4sZuenHudh5MbnrpX44QFZ84mig",
  "key6": "44dWXuB7eiQNMwzbdExsKGLrA9AGLEqnPVB71HBSAHUrDL3WEnkKaVLSYt8NLYahznY4v3gWwNNy5xU1HJQRAruW",
  "key7": "5V2sRmhyrpWZVo6rAG1DMUvBp2W7w42oBvGFmahVpxatGJYXpHFNQ2UBSqSwk6v6v9WL5YxW9oq8SRNQZcAhBq3t",
  "key8": "3w5ArCV1QBSfH9T9KFZHzgxygX2uFCopDfBdmrQpTpKkMyPStRY8ZjmjP7LS1nTJmXFX6H91MTeW69ALE2q2nLRx",
  "key9": "5xqZUUNPvXYDvBzWn4myYzhz8dX1NC2e1yL5ZCNEk8oDJibe6xcauK9h1Wrnq4kjDZ9zAqxMRS6aRRabHbBTCHHv",
  "key10": "4rvURcyq9JmaiWjidjQD4aT9JFRmJERhaAXHKBXiLMz65kwTazUkCAyncdhrK52DhDzc3buU3CuGmrq81wWh7JFD",
  "key11": "3vqzsi5ev4pFwh11ZXT7uB7oKGFed3RqdfYSPWVowkYFjjzCpwnfyXokvo2defWhMCJigYK9T8ajwbhmhov4GxRK",
  "key12": "3ghgegZNbA445MocqqwFixu4zD6g74rCwVzx6piEbFjFevofWmqi6q3EdztSqDYhVQdhvc54NhsCiWqB8wvKTy81",
  "key13": "5qeBNUTAbDjr55Q1uWkMvhvTDcBEEJKW84DKnrxyP87gqZLCBfHzLSuuPyDCAPLpKQrNroBpq1nKtcz3DAJ8DExL",
  "key14": "37xStHsdofYnhn6X6oPgNJhofV4z6QJ5q5phE6BuMpPjGb8kB3prDZoeEnXwT4e5LhvMt5r5sSk2pYVG1hgU99GD",
  "key15": "2tFzrxJ36x7juS3JegAmFy9QTi9ydVUKgrucvhdFocypgTubJb6TfTCrrucVWLgbC9G9nghdhiNxmtg142H9WAmM",
  "key16": "3YYaioBY9xQe3Fw8qEeNjW1pefDWsbTyVEstPvDnhEUPDSGxAPxc6fQN2tAg8ZbfL3XA4put8zeYUfJNnJA3GgqQ",
  "key17": "2qSmPCqUk99Kekan4pfWiX2htMa6rk9ya6rnRPdnesxYTbhpBZAFT26SgxkzD6j5bzMxsUyeXPw2cyyWmnnMpsVL",
  "key18": "5Gwp6uVQtBQNxj2vttmGTuYvnoarmLEfbdYinXSuCcTrzoRs6APHRDvgVeEgZprCc3eu6z2p2o5r9XdzAbcifBMx",
  "key19": "4CsaRKpUKTPySmPCAQqJFKFAQLPhHrHGHP7s8etvK8NyuGZwGmGLkRbkaySBsmneYHHU6rgAGGbH6y6M3AVraAjU",
  "key20": "5Z1r4ADDf8mX3qZmhwk3CSges4gCMb5MLmYahtzhJWFNTYn64GBEQEDXi2nT3EMyD6ftaVPW7PtFu1eKjgC8SFu6",
  "key21": "4ZaUAH2NfqYP1A3tiVyMC3wnxZJgQz2TfbpQb3TCjMAx1haeuPfwCbvVKZwmLHdHnhg3KjUwVDPDjhum5SQTnKfi",
  "key22": "5LaubGuyB7PpMo6i3tFsz3St7ygSYv6nqutAUWHHfdZGT743tYARZxnxJUcgSQfEJHqmDpiVSKDNDzFd91VdBVWm",
  "key23": "5sraGee5JovkN7i9GTpXyjKFT4RAoH7H782Znq4j6PA5NUsbBHpZHuWcR2RR33eSR3m7zc6nU7rPgENP9BuAaTSq",
  "key24": "44YM8wN8ztrcpLVLrrpnVswcFCCgZBPbHuvhFkbcZVLgBoW32JAy1a5UX2dDQzMcsQKuQ5wxS43UoftAeDJj1KkL",
  "key25": "3TrNskoEAkVXqW22AgDhsjcF2sdAa9Y7TEW68B4v5vMTV2dTjJ4Lt2taDhPMos3fhgMYrffmh1Pd1RswHgcqqcpz",
  "key26": "5jKdDwtoS7MWw7upw8up7bG3rc6d2THa4KC7AegSMDxeZEtohpB1d7D4f9iEiiBBg2adXfWegkr5G67ErMhLcPbQ",
  "key27": "kyw8ZHG8xesvjSBMGjibTiG3pTbztTJJVDBBjtzs4ZYrwbZ5LZZYzZegDvuRuR7sBtxkAmY1HF38fvNg81V1ca2",
  "key28": "5B37c5p28hfDaNtBnxjU2xeaNjoa5eXsvi4fvHcYgomEj6NMCs4J2HdTyspMSVMqrWW9AVxGhMxdbRCra2YE9seb",
  "key29": "5BUXGHsymMsQ3g91j58kom4hFrpibdpXJn1oHBPJRLBNJikVrf8BbcTEcpiC53RM6qfXGa2ggRG89De1poMTvGsF",
  "key30": "5taUx486BVd3FXdc7AQUeVDeFXjzMP84LfcvNNX8NfPvD7shU5x1hx4YW7f2QAMYqQWF5dBUKpP6d36rvZjL4QUv"
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
