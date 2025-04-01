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
    "59gTkHek8k2V49K9iXvSNjUAZJVHMna68kqeE4jkfQUVxBbeuVV4NuuCqbCXo4xZeCMuqej6UWUb1wFZM938vZyr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itt86nXzCfBLM8ZStFNcpdX543cziRpZygWiKWPHS6GnNEKD6o24iEv2hdXHta7rrHLv96TVMLt8MHnUti7ENCR",
  "key1": "3voCnEM4sq8m1kqnST2hpK8fqSP5WiF3yhn1481QPXQSw7MpCsFoNJ7hBwWJQwqHK4XKuZcd1wUj2FR8vtChgann",
  "key2": "3YswuDT3egfVnhx1J1hjEqzPJcAnmcFQVLKMMvphdHuRtxaSg5k6KqsYGnp2BQKZdXy26MssKzBWBuUhJPRsXrY5",
  "key3": "4LjJkSqf7Z7czsYGDYCdRmAJAwEUdwGcWfpYGTtzxoj7426EdNx1ghQ3ah1ZZz7PeKysK4WooSyt4VLchfMyPBju",
  "key4": "4i196xBGfaHveU29WAwmtJsRQabPWJoczFKkpqvbXgBQEPZaPbv5HtepPznpH6Z3cNWZ1w9DJaHqj7iJqU15REYU",
  "key5": "46LabUUc132vK1Pb74xYGcpft3cdoEFmFfivw2qPxd3sthDhTtAF5W8oXJb9a2t6xMQipYPpCTb6NsVk84bn3RHV",
  "key6": "cipR6ovmAo2vAqtuQtQRZazLY2xeQJxJH4SzJBhJRJx3n9D1zQgDff7SgqqxG61hcvesxYGqiDtnHt99SirV1eN",
  "key7": "2kkQfj4QrLbovMBKU6SF8xMqBGQSEBWm8ESz8kMhQ2mJLecjEgxLkdkvaDcb4KzL9gbeJc3MkdmGPVQbhkTSf2LP",
  "key8": "5gMptxh2RqXPwfGH4dy1nM7ZUZ1A12Af7B28U1RptqWHacdeNJiqNwe89URbQoa4bhnPuaN51BLmMBVkbhigGGLn",
  "key9": "2yq8pHgtMizr2hcYY9fhsHtH91zs3oGd2Hhv1Amm5avXrWGZjcvYftzDdBm4FDEY1rhbArroFR7w4XzyDJThz98w",
  "key10": "36XHkxw9nepipzE88NPZaPL6WgKKH1q7HY7etyhtCpJCqot8rSvgJYbjtDbwpn1nHKy2C2TVBRxgNC9zan8jm7Ao",
  "key11": "5JK998ScDjsage4fyZDtmvMEHF3wKFB6dM8pRUXa1TaT2dZfETbeSiA1FKNKS3bpRQxUFF3vZDPVxD89aSYi7uyx",
  "key12": "3PQAJt35tG6ST8wEZ3kptkGTtCbWTBLJALzACTVcVaxVJBzJ1Ntog39QyBqKun19rwUSrwDK7WnRsgjFHCZPB414",
  "key13": "51oVgjAeeo1JZRgPUdSHGzHJapfymRy4SqZ514y8HMxMhN3SAmRFcvNRCavH1YxrFHkrB5UVWqdvr9DHRhNzYkyi",
  "key14": "4oVZHMTgdn7Jb82RNM5yXRktHc5EKe2NE3s5TXbx9SVyD86DgnxVgnxi19eFEZB6o7N8B4XB1TpB5m1tFQHARaNy",
  "key15": "h5HVcjXdYzeXeao4ViZZW2C9zQPVfTBftjXX8fMay2ZoNFgoiPkx9GARSJHT8JmEdarCx74XcCV9EEFjmNmEg7M",
  "key16": "2g9QJYetKY1swDSPN84rhUaAwYZKgytWrgsN3vuR8URkqeAuDHTD4tRNDhEj8Xw3QiuKeNJmQpbuRWt7B7KYtyLy",
  "key17": "1if6LFGczdZsyqjcedtbVfzLNwj8kMbk2U9DkWJyJgkw2xjpVhc9k97J5RccTEzs4CeDQwfin6839ZpoCpEDruK",
  "key18": "1Q7KUZesn1ab7rfHYkoGczbUGhvJxSugwA1aMwprtVTZXkMHSGhFSFjh8YJUgLJM9fEzYYJWYbFvgVjPi4ebxVa",
  "key19": "3834hH9Cdg3hQdCS4ux1XMJ9JDYos6BryxyyMphetstyv8Ngj6byRkXa9t7b8gUouMBy1f2FVG9WibDjRd2hm7gv",
  "key20": "wrDAtpss4JhtLyefEytGkV83ntzAgbYYfnmvVi45QNnKeBLurKJ4vSNM5qR8TBx1kVnQkokgos7489SSWMcJscc",
  "key21": "2bczvJ45KYF9dfyypizp9xRxU3NR4dEfBacLv5oYtHqMFumJTKfz2rxWjSRcPrSgzAJySH3iNoJJEJ9S8D7Dt8Md",
  "key22": "4QQWTk43Ce8Bqi2gTZweTYi3CquyoYKLjb2frRyE3G42gYawybKQwnJaxMstpKNzkNDuMovzumvoi3Sdi6eDUJox",
  "key23": "edtKxxSirdqeJGYFxxAejrTkdkDK2ttWU2wc6GASRUrm9MzpWjkkpp6uADY2TnzWVLz7EpghxPbdzrdtd1z59TP",
  "key24": "56PcueYRc88gdkrGpyAKGHyBGdD5eGjyQ1SDuw2EnUNWM9AqUG4hgWb5JWKyCutKvrUuLNq9M1rCtgRzMGpJP8za",
  "key25": "R6awRtJTgXEo5cyHcKFBwmGyiQpFGvenmViTURKkw72QHjFRVbmSoZKZdjBnZxSUxn1R5c1i4ZkTjLjXMJXe4g1",
  "key26": "51ZdgAnCzX1piREdFZKimLpAwEe4t9Cgdp56bxs2e3bVfGXbc6re8K2n8bpJFdb4Y3poFMmDp5RGZRq8ouE6mWsi",
  "key27": "3MERS2R5vQGgN5VqLUSck5pLjGUhK9tGypcv6iJff3h6BuPei3P6hV8zZZwsbpQTSY4125t9RAdN1BZULFUk96xi"
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
