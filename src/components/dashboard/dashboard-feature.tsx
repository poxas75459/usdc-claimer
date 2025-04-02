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
    "21uHPpjnYM6sPZ6yK9LStdpeZR7z9gK1kp7o7piyaegv5gsKnUvqtThLJPjFjxmoctSwCP31Vuvs6akPoYswFnxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UnQPGL1vdDPa8Nr7SrHF5aFekRgiJLnqGKGTf29E5pFNbLmqAjFCzRV2NZHFxFQq49Hh7cNyyxCqa6dho3Rncok",
  "key1": "38R55VLj8Py59hT6igz3YKSa88w4LAarG17SWjW9GuMh8x6AvcqafPBQU5wS71RiwAamWzmMTZLQcRSFNES2SViM",
  "key2": "4XXkVPMUjiHt1LfToczUQMFLTwexz1tEGWei9xRWnzwScjrDNWJNmtwZriLs7xLXdEtwwDtxHmod4wSZS2Ub4Wae",
  "key3": "2NcnwfbZr12sp8Z8phAvG2gKEXGyhAUWh6zRxYKavcFi72YoBGTput46ChuE3qfCEKCudYg3kYbpCZrtBAkeHE7C",
  "key4": "2fpp2L6js4ZX8W9pj74Kn9YAeYZhL5aEoRKGr3J2Jub7HyYHK3UAphAAweSKsKfjjmakYYEspT5dqDdmmSXrtokV",
  "key5": "3W5y1cDuLDQnLGqAYCKd1Gr9Tm9NX66QPx46yjjuK6VXuArGQcwbiTpL2NxuwXGHsvma3wZVe3hkM3U57afBMDPX",
  "key6": "3rMv3JbMeCqgB4EN8PExDGNHqRCGT8h9djxN8xgmEagtsEBtittKHkUh9E9iaJTJQcbUJhutP2j3FJRgiAvZFaiw",
  "key7": "EKhCaZkaGGzRKg5EYqpNPoK2ZWkFMudNTVNJ8FZuVzHPYYGWYw5c7Hv9jrf4JAqFa7DRsWwdi9qauH4mn3FTEcn",
  "key8": "LrmC8u2EhzwoHFiaERnv4Hqqw8YZWG4mT6MTqd2eVgH8xXNiiFgkoRTxupVNRNvaSTKoDiDYTBVg9HtVJARPwzc",
  "key9": "5Jqd4E4j1Lutx6zA7xV5v4TAkgrUjQ17EuVeYrGMJsHWGCemDd1Q9gp7KkeyzkbwJjNPSira94CXxayb67vKaybk",
  "key10": "KyahP1EapQv9867Zam1JUS3GXtqhufu9Ua9DQfrnjgyziPPpv5jvpsw5FmRV7tfr86o6XEGDACYgVoFR2Er2FQo",
  "key11": "UipW9sKLKrYbqPazgVegWNL5xC9pquSwiddKBhHxcJBz2xBGhJ64aRiKBXySAJZYMaP5dbEnpDKH1oRMtyARzyf",
  "key12": "3mPgmgc7sZvD8mBTr2aQMcXXLrjbhzX8SQVQQxbCkV1bUD4RV6s2VVBTKkCtjS3m742mrYhjPeVJ6gx26gThb8S4",
  "key13": "wQHMca5XFXU59VLRH8ua4LfQQ7yCrxsV6rCMSht1pNPCEe7mXah856p8RmGe2Ldie85G4uECy4ibbkj7gBtHk2Z",
  "key14": "2P85nwFgzeqc93rHZxVeVtbmpAkcjoxKBYedQkhoFn98sF2he674hYUwN4HTeVT7NAdVfRvTnGQvmEXiYwa1Jxfm",
  "key15": "55rbQQ6Sfd5yyp1JW7vvRacb2shYTWVT7c4QRAiyDXNXJL7fgjpyga5ZB4JcN48SGLH27Hu1iYAML3FbBMNGBDuu",
  "key16": "3B7qhXX54DnnYnaVpTRxMq7qxFGv14uS5VPfdKrfjXNEYgopSGJx9yCK3tQNNdkGVkzBpYpZ8rvjMmFv8Aan9PwR",
  "key17": "2dHEaA6Ae8RjWSHCEXpDkzgCp46PTfjgs8azw7cqFptAZYdWiSy8Y8Bo4stHWqxVQvHQaKTMpea2GkQEjRbdW8kw",
  "key18": "28goJgZcvMbpPxisYaCLVQEPU1QVf6GSERVAcswpdHc6sM5nUwwe497k5RzMaU6VHJoHG2mWo8sGR4HpndQCyG9u",
  "key19": "37ciN6git93JLsAqxRgPJL9Z2ffxsNai2jEaqYb7vUek15axoBmW2V2JtWz9Wahc7SWh5aQPFABvzNcTPATy79QZ",
  "key20": "2worqBAhwgJVZ1D5NZLQXeupmjLPHGMAwU7GNQWTsVEnsun2uskdYfqUnSMKaUKXDWdGbDHq3yCJQBfMPpZwSQo6",
  "key21": "3ktRWmdH6FV3gxbhuLSdDSHdnTZBxw85JQCTzwVZWTU78DEUGmHihGV5BccNjhG1kRKKtRtRjBwrinfbmK7UsPcG",
  "key22": "3dgevqNMhvBTtA15NjdiKzY9x5JkLgs9DNp5GrjfFnBcj6t4M5sLvsAJMNyNJsCjang5MQrT8Bayh1bjpypAxWJ2",
  "key23": "4XYHWtfN9b1RX7YGMyRfvtWtjedjkhvm3fxjZ8u6G7oaPyw9Pgdhdo4sdkiAnV37AxXwJJPaY3aecgeSpP5ecKDV",
  "key24": "5cm4mUq3cRrGt1M89KhuzLCD7uQaYA8MpjZTC6uDRP4ocSXRJeZH6oHHXC8WexVQEUjNN3i9BKDF6Hwro91DHJKD"
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
