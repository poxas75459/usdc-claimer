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
    "zbitXPU8tmVjRTk86ewDgBcBgBvHBMvscHrT5UrNMoNwLQDXWwqKmQyrxL3iJu1BmNyvBDaJ9CE4vPtZbFS66Fn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jQXdrWgZHxxfqFF52mzMVA3DAssaomZYfDuzXchw3NMzUN3pVy28tjnZThsCVNwHa4EMPa47fv878moJhjnPeYo",
  "key1": "3qDugTCgq2QdbXHnS3KkFNezt4bpscrdTCvg64q1wtApzZNu7rLMqE3XowxQpfRLV11RaWwnuPUkCwiRj2WkxVR8",
  "key2": "54kKdYG8Su4E4SgkCsReTSA4R3QwApw3PxXQG4FoUhJoXUUpaooafxpA97M2BkkcqcpBes4e678uiVQa8UxcfGi6",
  "key3": "5CFCYC96bRi4MavYENf3PCbg6pTCyMpmBUE3qTrH2pvnkbra37PwZKTH7XBxze5WpXJcJVHjvrsRtcAKAGeWGioT",
  "key4": "2k8AUe7hGz9MticeL99N97K5SrUrx1opfmnLUfShLmQwSWDuFZVZTJQBDEuW71pBd1ABWazndzABd951BfREKHr2",
  "key5": "4XSKCngYqY9j45HoPYtmQtvfsPQTb5tYRUfUZyz2qudDSPwNcpRnDU2VdXVTdhvEiJ7tCAtvmteqseaLBfyB9zoi",
  "key6": "4kWpkmjJP2j5SQATWWTPyAMpPDSJnvxV5gD6V1jBRX8mDJ72p7ySVrJwBFY71cWS2GQka3YFXA96JkSQyZThte6H",
  "key7": "3GYzpMRZAnbBzRZBnyWRuRW2DEBVxu7o8LKK3XfJdFCPfydCqGXE23jzpxP1oo1X5NSstDWhvFwUfqrAj1tzvspj",
  "key8": "31X8AqGaWn72hnRHCmk7Z8AD3xM4Dni8o8g391QcNCHFSQEdTQNiJfC5cDZANqLMSKqQcWVrYyUD5ajxoHyoiR4x",
  "key9": "3gwy3gwBAqdQSB2oJnGnknBWP16TFxt7U52pm9cgvLMtmT9bhGBHZPFMZYi3o9BWEaiNFyPzN8yu9zHfZRTBzM8E",
  "key10": "5JZP63sDMyKt333kKnpz4u72pb5uGjLMYMjfvZhRpXR1kcu8DeSmEoDxsVygwT16qknRJuxSw3wUMbWScut61atH",
  "key11": "3MYg1SAJcWHgHcGX1QaJAER3jQsPcssYd1S2p4FEsUUnpW4DwK8dBpPXJjYWvGA9NVTwZkf2XuBas6GfPUHBxskc",
  "key12": "5SDedziKn8oHBN83bs8x6x9BWuwqDJ4ZbpzCVDMqZDcFkkyMHRW3NXC8YYUm6zV2njg8SD96rKa6dyu79CmqW1Qm",
  "key13": "3Qt2zcna1e8hnpuqcD4nFcAxMkVdcrhYRQkfF3QZJ2KbAbyHQ8osTnRJeoBReq7Tth1AyjwUwroGoTdq16sPK6hs",
  "key14": "3266vvH9GZTyRgGyyRbRi6mEWVFb9WpwsmHnf568osqta3msR3g3DedMCf2hhr6eQ1GnCaHLHCwdVCh9FXmRRzi7",
  "key15": "5e8ZgqwaWWLmP6fiZvwBYSxDkHQm1Zt9AmWByjEsb4ALi1Hb8FD2biWJ3kryWdXQtTwzdKpqLAnoennn64e5GErH",
  "key16": "4CvnGjSQbFWRkz9vHtbUimczvGL78fuzms7hYmhBt2NY5HbnRtMveBTjqccCu32FpETtsqsSw2wrin8kjy4gJbry",
  "key17": "4SJKDjxkSw9cujWesoEJQXZ7eppKqNjJsFKYxQpfdWZMKLbbUAV5qMLCrYbnwsBYMSBKLzkpRfYuxDsVi19x9NXx",
  "key18": "2HPXypiEv7WvC1QUkwCWXaLz8YSRm83n7CwTaCKj54UAGRGfRoApV9SeQZkLMYwrz6BsGzEKQaJQYMdBav85fQ9h",
  "key19": "3csHv9jGUcRMf6JdZY3ji1rgmVpQwzUUhpFxioSqtyuHeGY7T4hHU9HgrhXVpiuYvZ8Y2f5AGENbKKZBKiWWsJ2C",
  "key20": "2eETf2jAGQebvytYjSzm4mqrRLTpsSSbMUJpWiziRLxXMkR3HzDSN3UN5ij7tFafLpUFKn2gUJig4qy6qpYXpBjo",
  "key21": "4TuWJa2Mk6Tz3Cji4gmq8Na8qXLHMFZgVijFYr3VxKJRdDLXCXwvotkTc2yYwJzd5DRywZkM64M4ZRfVAsuKdHEw",
  "key22": "63MzEjofC4BQUF27Y4sqsjttpqnM5Fi7XgWScdKDV2hwNtCjZRnWNDeNnnPDGC33pzaHCBJgYWsQ8Ujm31yQ4vYW",
  "key23": "2uvLzZ8sD3yjyiGCijsJgSN7woiZZHaBVZtpcF6nmvN3SQYqYqQ2ns2JNCgNPm6o5x9qG1jPe7cjRpQ72h6ByNCp",
  "key24": "5511JbR8r9zjDPzpJ98ZXn7ZGggSWQJo458F28VNB4ti98dsH7nYmgXERSUNzfdfqrBgYNjCZYbdZh9BxeXea2LD"
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
