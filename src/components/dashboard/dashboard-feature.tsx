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
    "4WqUTknJcgtP33ZNqb24oZz5aw6GA34Jhjefr2bvR6idaX1coRiyxK4WzqdAa1FtLCyZTHYSSVn4XyecSjzcsom1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "je3ZmiB6zkrKCH1udm3Xd2m2ASFHTyFTF9AbcX3paQUZFTTk2VU4W4mCED4SJv5T1T4L8aAZLuhJW6rD6TR5Ueb",
  "key1": "5ko6RX7Q9rJHSWbVQTH2ndBAgyTEGp56DT8FN1EuphfLXgx1fLUnDYSeQcxTf56H296jgP9nVmC48hHF1L4Q48eL",
  "key2": "4BHWfPCPeZw2boKhEom122ZA7KVhjb6jv8UQfb9vJtUGJ9KZzAjR23AZmDSMcPjA7MS7bvARCR2J9a6D1w9EXU3D",
  "key3": "4U1r2uQoC2vSbUVAm6N2T7yGJAJTmpkKTzDnvJhkFBLUEDPAZgY3XCAnBWVeKeoPx7rXNegMU4QnNXnvJ3bXo7Qf",
  "key4": "5oYzsRcA99A8Ybzr2oocEAvNhF9y47wtz6AML7a9ZvQnvTJDKctsKfaBmwTJN385esWJeFWrZjrkMegcS4vVt9iw",
  "key5": "3BZnNA7QhBXaNQQST6UWiCmz7NW5t82v1SX9JWktWH38mgUMhCQxYBZvxCpPbH8z9PHYr75apkLQMe2Ra7Aj4RV9",
  "key6": "Zw4sL7idpjpbqdyffe6k9uFpuzFP9PJbgyM7zXGa5szpiPJFJXAfsjyJM2xfxz3Lmp26SwwYox4mencoiyU6fjn",
  "key7": "34HAiFHCSAaPZNXDH11jvM16DU9Y149TYDcKgeyFDPZtBXGbbXgeeLXjBkGVoBaMTj43czvXCMbhgCCoadqQHKHA",
  "key8": "42BLjKYmg24XPQaBPSyhgFhHAhYVCXSScLPEjq4dShJepnCJRJuCj7w8XjniSYrccH7h7PuRAv7iRwPcQrbpUNks",
  "key9": "b7Amxa4mkjzxbqrvjnG8n7Yd81VZZxnEsYGkdJxbGQr6NgKSSvp39i5uUUyEjwy6bVyvnppTry5ezUvxpmQEi94",
  "key10": "3msS24TMgs2XpNGiopoyx41xhrc9hGNErj2P3uXbNqgECcG9JHQ478A8p9Dme4uzrW7PNBrGtm9kxqBaAj6XqXFH",
  "key11": "kdQK35wfffFqzZA8jpKdHVKJpNsHotPW8LcWXPk2K1ydZLmYNNrLZMEGfYD2pQtebPXmUDoXr5d8q4ezTU6Y9rY",
  "key12": "2hVES8iSYFj1px1JVbZiJSAqWwRLuPmoPoEmA3JRy9XiwkYxPwY5nXd7fsTvomcZ87vLoX5B4dpsq3HRMQXc78QG",
  "key13": "3be3RcZVnVSHF2X6c8KT7bt56kChdBpKrrKePGEfu3hpbjLPXAu7wtULkigv4yVmqai9PCnYNDB5v27Ef17fEZKL",
  "key14": "21pkhuEnLEh69pxVQL3aacJEMi93QpHkMN5NB7jqPU43nMDWo1g1mY5RbD8Sgq78uiiaKHAb3XEgmUR3pSKF6Zm5",
  "key15": "5kcQnrMRvpbbGxUYfB3rRtKfd8arBzaEyLadVqeqApiYNjXoL6Qz1WpWv1U4NE8XQQ3rvugswCxn6bmhb3RTJLJB",
  "key16": "4PdggYKq9KkkpUpZgeCnPJ696mnzkg7RH1ASSipVnQUGwavdDxV73oU1DSDZ9h6E9qYiucjgLBkShXLEWyNTHUXw",
  "key17": "3s1bM6pcrnpHv4Tswmzwswzp7uJwcqCdEg2Mxcjw1X6RU5AWVxgwjityM3VXeCGxEGv3SmGseK45QGgGnZUcvFLN",
  "key18": "5dNMDhgffuXKhb84g7Z98uXNaFehyXj1kH9QTyYSPMfZXt3PH7SwsWHhe12SbAn1WKSiiTGUdHy8BXgbhk9TSbQU",
  "key19": "5cXJKghrZNrWF3eU42E87GXaQDkBzFPD9ZvcD6SAkWG567hqBenY8fVEyNWof5TpbUHVJAgRQouJoJFYNDQMgFEB",
  "key20": "63Ffq8rxZxCMXNU654nJt2mYACbXECT2qrsGHfNVHssNRJXTzmfDjhophqCsrPHaRfAWEcjvWDZ716y6SXq3Vcga",
  "key21": "2dm1eEsezfNRqyCzCaeaFp7r7DeDBKfoQMjQxBJW9yF5JTpLSMgRCjvDT3pUxtDqzB87KjZQABzWr7bQJrSpzgp2",
  "key22": "3hX1NCQuKUgz3pVmYrPYaC6JRY1Efjn1eatfuhhsMbKCKsAuHcAWxUZr1FfcbhBqxVtpmtXpjviNXSUe7u2PcUDb",
  "key23": "5kHXMj3z3Wzmwn6nAmfuLxNY4mbyovo5wdVZPW7th5ad8sasicZTqf4a3J87Xn69WRvKQsXu3QbQQ2VTcvtj3YHm",
  "key24": "3x22CTDxpXe7rKrUbMYVTQtSQ1mRTg8JGJbPLxbEWkFVShX3L5LapbLP164xd6xgxS2o9TLWobWUXgvnrxfCR9gj",
  "key25": "4zQWC2KTucrDr6XtwpxWYA2qE3qJVmZUaFm91uCmDERPvc6WFKHZyWfUbQgA7zgQHq9vhph6Adpd2o2wDj1LuN1N",
  "key26": "rspgP5NB5z4Cwmz7T2KctmPGnETh2rWMAeJcYRUc9h6JqLbNF7ZndW4EZKgKmGNz4kH1Twx5iuYAYKxxXYyQQrm",
  "key27": "enFS15fUcsy9g4798yMTpYNTKQz8ENLVAnYUZA1oGrMWzW5bmV4Uxh3Fnaa4sxjkZYfPCgtvABDMY2grgyK9TLG",
  "key28": "4hsErk4zf7m8cgm2NpjMuCa4fSGtNWU3FsXrhKaMQWfWLDjexERnTXt2NpcskpitKnvegnQKFBJUd7hae9CyLfdU"
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
