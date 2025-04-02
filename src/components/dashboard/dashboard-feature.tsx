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
    "4rqDLCYXkrvVpK663DNpqYL48UnEndwKmundgGMeYRB7zZyzAJ6nMZuBSvahwb2Y56JJ16SrJbRoAij7rznMUGzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s5RgJLRKgUomTBmrP5m1vD6MwS66BimgkXcKs8159aSr6TM5iqRJLoKhCjRUE1qhs1k6cAcdB4v8h6T9J1TcDtU",
  "key1": "i8QdUjCbdkMXSkGTbMTUrKDD7gP6CWYZA52RhGEyBN3KMwHSAnpdJeV3szrUfHB82xLy5YHHdhjWRTZJPMP8mM6",
  "key2": "2eib2uHkbeCCb6EMaTrD9Cf3CaRgYnKLeJHJTCNXktWEb3CuJ79vrwus4tnEKxLYTRJrJXkN2fiAv2epUQtcbAwY",
  "key3": "5BcUFwxeiiWZrkQPje5Rgpcx6giWqCy4bhmb4XEmNyD9VhmiM5PRw6QrUrjgW7q5zLytkT1U78qt6pwzqfcYDV5n",
  "key4": "33Z3FLMfbX4DBEtKeA5j3E7ARHd2ApusDzMFWce4FQPvX5nf69Nr1mL5Y27P1KPktxWq6egPtNNxFeDipGivsirR",
  "key5": "43bZf31eKPfPxNC4pJ667HhyMTYmR3ipogMkPc5btwf6Z1PrBTjEcw6ftqpzgMhVGkbFdgMN1fBvuhndyKRFuzxt",
  "key6": "3QtnDkgQuDAYCevfyHLN8guRadmR9yFbmzsDELeTG8E5dNGwaUq9F6vcjFjsDbfuR5TndwbzdyeGtinao9No2DjK",
  "key7": "25QewCb6CMrV7oyJdEopa4E7egJp3fjwmbH3C7oKXq6qDtpoHEKJNG1DsGdDC7FWNjCFH55uY17iLQWtdkDLJ2FD",
  "key8": "2A6y2TFNojy6VdLb4SraAU9o8bWNHhBP2SKyBjvbyTJFj5bnYsDUzcghmRwAPAJYMbR2nYE4HRbMwVVv4Kf18VvS",
  "key9": "1W7HHAyfAan15MqeNzjWdXps77cB8bXWQUyEbzS6nnQp1Bd6CmetyVbeZAHWkrfkKS3dLMBDKYnHA59EzAYnh39",
  "key10": "5pZf7ZvqNAkDFhp77ZM6Ys9KyQ8f5gka9TFa1HrQZh1ijYfeM3aEen6PwuZYJTw5mEqQeCXnGSx1KYYFFBzXGP2o",
  "key11": "3CFfh5gsBfiuRJ9rf55qhfnHWMFnLGqMtHANUhsdRJKipDYo8RfMUaZuhtUoCnjEc3b7jgG73abEoemAWXsGZELr",
  "key12": "F4MPeaRniPKbAec7VXFZNiAMtrzmtzAeVncQEndeBy7AdfQ5u78LHNrpaUkHqJ9xn5ddo5LjBLGrkBxMb7tB165",
  "key13": "5TcXutmizDW3Nr1GQhHxc2NqdLuercA9ptAiVPwX3i9Esic6ez9jDEBsQaDqhBtq7EGxjqhpF4gUCFRtT8rEmg8u",
  "key14": "3BGXuHe2ajvzL8bKb1RaeJpT6229Li163g46SEnhTNigtaZfPebP1z4okjYtYJ86hEeFLD6BptDeMZnHttcVgWt9",
  "key15": "5DMYhFs9y9LY9Xfrh4ktFnuGTp52Xkf92ciEAFDx8fLFg8cVMeBnGAdByrEoYv721t2kD3f8VnrZsJFCqDHpDDDh",
  "key16": "4fPMF5f2aaziKaR3owDcPbPBJa5EkAfucRxaMjaJDHjJgYyV6huaCE5LHn32eKq1AsKXhyjUccZmjMLRt8kfMJWN",
  "key17": "3xqxjgQY1yEpAWbLKvWR2KwUcoYzRMuwepKfW35SvN315V82bYGr29cQvDqp3JnVrJ2UAh46G9DBgMQ9GNqgn5iC",
  "key18": "4fxdxAcdvMgwZiLb36BtaPmvXhsURsQhHdK8sCUN7hcRyx232uBF29G4nWx2tr98Qao1EUFnBFr7uMjT49mdjJmJ",
  "key19": "PGrGVDJL1uHpXoNRgpcSBPqtVsQsZPrB1GTknWwPEhmD58CQRZHiRegfuJyTomuXSZnHJcfHT5d3SNoB2tdw8rc",
  "key20": "3dckRd4yxsakfpMZa6Gxg5T1RVWGEth45yUqVfdZNoYSy4P1rryA8XYPXgNphe7Z36neEm6hugR42MraZJKeBZ1g",
  "key21": "3pA9ms8a5eC2MeDCJ3w26zvXzsSReheptRvQvuJtq498MTFWRBvhTMsGg76pnXMCg2TrAwfe6TJGkPccUFWiJ8JE",
  "key22": "5kvGh6gsxkSdVWb2GnX3mk74ez4a1azWxG3pEHyiYPXNYL7hn3ZKBenBSjjoU4J2EssBeMtbQUThpUkiQWBgLf3k",
  "key23": "2qb8gmJTy8FffSp3xHsWqPQc5AHLHVBCrC3VriYsUtRCd6yLW1RjEUQQiFfmz9ybNJkKCFhqBB1eGiDBkSsXuFLz",
  "key24": "6uLLMW4tfWhgkPiSLieg1cftFpQxm3RgVCnd1jMqYFjySupqdtJyKtCq9LsQhHbrdTYWte9rEqZ87Bgau5hSGKV",
  "key25": "5hEVg1npYhK7mjpFowaDvHgXinC4VMoJAboNqSCjuQTPMSg9PfAJfTcEUwbJ4u37DepFrzotd9icqatxSJLMFTgk"
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
