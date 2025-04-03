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
    "5MM8pHSY59GePc3WFWrSF4MSPFLmoZxCFpoYa358kxh8iRowxQgHQkbbxfK59bY4UQ9SBFSNpo8tFuvi2ujGYS5z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bahPCtom5jLRQE9oUacCF3uK7KuVYEHrxECtcXu71mEP9RruVeAtV2caeYogDVRxTMpQcgMUXdJ6P4xKiiG67wL",
  "key1": "2hXJ64EWYdJQ8cBbXPLmLMzZ5zkDBhnLenjZ2VH6TctzRhD2657o63doSgaDuzpBUGpXniJ8mm4rXK5gYeZ4GvWk",
  "key2": "4GkgTLNVsToa7DEcrjT2oiUbB1ECJ3ihzTFumX36BL8RKN7YeQXA4egavAxw8HEn4dTTSJLHnqdZmGUgbGDxSbAb",
  "key3": "2EJAMe7HkHAU4w1ankyoTr1MXUyNV3NhwRFv5crubjgF7Xz1KyjRhTgwXxby949mNm4GnzSh1pNnzyE5vjJqZTqj",
  "key4": "2f925sX1EJdE4efhTxfmf47zk9cq6BKYCvohMCSZXFNhmQy4S51sEpUmkjkzxQNzGhdovzP9SmbhYDTEVLxSmbH2",
  "key5": "2ZFm7GDpCbmKMQU6prXkHzk63wGUZgQvkXrnq5manFLmeaA2jHHLHRVf9S2pH6526WuHcCy6jUrg5HUvzV2ppgZ6",
  "key6": "qUVMR1GXwzWXKvi3BhavrCYTzTPCD7nZZRXVpo2vVTnfRZ1x86tRxPJT7odsNiM7oFNHUj3H2otsWAisnVnAkL3",
  "key7": "2WRk1xg4MkhSmv7j3Xop8L82tEe2k46V5LDgN6BzGSpdpC9pjesJ1Sq5iTQrd27hwhEx3Kz9TcaNbVPvMXX3ySMU",
  "key8": "2jiY6oLXQTc5cuvCcPrn4zP8kfq5iDYSgummTYm4oN8Sc3gB5WzXPVCvVnK2oMyF7Xs1PyXUpr57DxBzp8kd7C9p",
  "key9": "5pbkAGFN98Wmn36mKgDuHK1L2ocC3QdfTP8oKvp1ePsMfURo4zLuUMts75BRXfdJL8mZRoeB56RHWfrUMiq9oaYN",
  "key10": "3PVMqY1KgWgLXyrb8ZPHzD6gyVQKoiNegnegwL8WYWDV2kZ4YiydtTnDNjKB1epdfwMVBr7WGYG6fY2XkvcytSMz",
  "key11": "63zsrFHL3cEBUohcjw6CGUrXLEddkuHu8gXkj3pqTM35sPgDKWpet3hTcVTwYfqiYHVjYTMszx1BiuP6TS9Strx3",
  "key12": "ccGxE8n2c1q6HB8Pkftxnw2t8MABYkfLCq8trKaEAeUZ38Jc3AXrfYPauPqXo9UgzWPwN5nM2zkmC5dHcnjJ48G",
  "key13": "9VeS8oSHpVqweFQDUGvnMTE8EQ2vKsfkVcvSWkAnwznssGuv6QJSaJbuobzF7ZL53KYeLnSd8mHvTTQWW5FVyRM",
  "key14": "tr3up7prLEPWie7XdxBNEx68ywjoQ99cZbuFPSzKDMzRHtqdQu5ngLJ6TJi2tgyo1DbsBirwwWq79aQ1nNGQqgv",
  "key15": "4GVzSsvyME9c3UjCqbmCQELuJ5v9PgDTRuKP6zRuedpyavaVs8M8FXu5uWjRf8vRzz6FDTKHL5K8vbyKR6o65PWd",
  "key16": "HE6xubtpwfdma7bvbdKbrxLMzjzBj4aMTSxmxU96oNVmAGh5qCxG7483gxseK9TgYVMeXSqvSeGRtPT7wj7rgiA",
  "key17": "CPwx2fyEMF7emnZY6jrUgtpP8rLpocrNUGaK6GUmXtL9Ac54RTWnMGFzBg2XcN3NUNwr153uoDbb3FfBvoWsdg3",
  "key18": "aQ9QxFdQp1DmrfFqFK6AEXxfUprQcA6NfLGAko5V3cp6ct3jko94S7bK7SbiB8j3f9hfvUsJfepeMV3ZsEnGPu9",
  "key19": "3c7RTZDCzbTywY4EV9afgG2t1DcwPpbmK6F33tCCwBFbQ4jhGYUShQU33TfVuNYzRPbuRhE5jkHrep26WJRbvT7i",
  "key20": "5NjKkd3d6m7nfUNNwB3U7WCxTMnnjhrbmXxrjaDERnbfnrkPwaVsZ6VBCKDW1CaSynaJCE6McYoK85rJA4MUMn9z",
  "key21": "3KP13aAFRg4JdyN1HutRSYp4yKS27W8yyt6gLkNWt9353VVXJSPxZbXwJXQxFzYeNDoVqYCs68UzConex1cUGRBV",
  "key22": "51Vhoz6jne1SwERXx6vGSFxoTS8xdiZvusatNgA2sifywhbgaKfPMjMwYvVCt6dcGd6KRy3LLRQ4RcnhhzjmK1xX",
  "key23": "29iyVsZAsA68wB54fFvR8TEpyHtGfLyvDBXAtD1Ay4YLeq8tm5geQss7FzJYu76iocDwLhcsG8PhThxreVuddk8g",
  "key24": "3vfHeBy5S6ckzUAP77ZGv3C4uPkeyLMe9k6Hm4FpWtGhiwo6wkr9JJhTcs4GWUyiNDq1g5AebMEu31jW9ByxrmsU"
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
