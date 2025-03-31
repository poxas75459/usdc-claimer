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
    "4aTkwbALj5SBnwcpPbXoivcUabc6JHwckCrhuyk6pxUarHQwQcpsvWVFXKaUavHzyHfYy1NB7QiVsWPEiEQnNXwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cMyxdqBAeqhcYtBtMhyrghAWEzhTUNaQa31ucenedqA4NA8cqVPqKiwEjc9rfD8CNP1SzxwTSemxUx5o7T9RRG3",
  "key1": "XAJR7gzRp8dM5zobZmH11jMxR9595fWC4RczSQui2X2Lg2tPieXiYz2sqyR86NMMTNhJuE5yFccEXp75a59J8CM",
  "key2": "z4w7Vqxdk2mu1bZ4uMAfwFeJ59pqxddCXGnXnEhx1dthyXcdkjHiqLL2NJT1xfm9NVziVqf3ktN2w6yNT3s2gDF",
  "key3": "3JvVraQg6BPufE3eRbns2vdAmok8FbCnGeqAVpMHqjGmUHn8gGSy9Mrw5ny3z9ecAtJawxBpoWoavfYtkR3CN6hg",
  "key4": "2LYM7nC7Gk5j2Zi4Hy8KPbpGqQ8CsBKzSDQFu9t1zYKboSU1C7cTz1LEbU4ZoeCiV3M4Y3svxwv2sV5kA9yezaEx",
  "key5": "2iXm74yRF4ypn6FeiAJCCXs86fBSQkRN8zA6nqir6UhdptfWnAEFWhXjyx6njfiRtvdHHkCZXFD3GfhfxsoWnKo1",
  "key6": "uthB8rUntbr3bsBCqitMuihGhVNzEEBb41XmYTLzoDjRjEZsXATqUvXmxAgkhqinDMCEH6z13E7buNdYJ6odwMK",
  "key7": "2TLhHziY8snqA1y8Z2bR9enDHPrbrGiBR2cbwfVGXz6pVxqug67HHPRp2GneP4RUTwAQzYxcRmfwgPdEf9iRVwmH",
  "key8": "3j92HA7cZjuWqYzCgUXiTiuGnnS3AaJpe8dL4wegb4LyYgqwtZ3DABnq6X3Zsn31Yei8Gk3P9vEkGA6HbD4fYJU9",
  "key9": "2Du4UgAwPg4Fsn13h2okNqhpdVdZfSBFE7xD4HUG93EA1P2sPmH7GwH7fuFop13TWwhRxzggJRAahX96ukmKnhwQ",
  "key10": "4HvjzjUWpwfb6VPZvRh5wWSx2ZyNR4EJ1yJKDmxoDvVtYzU7q9gZN7FWbLHqci1xBfGmgvAahNLpgUgz37Jxhwez",
  "key11": "2MyaSTx1XnuAAzdy65YFhW97qQakrwmxuictdSTQVGUTqz8QMZbiPmRiY59ECcRi7ukq6CXf7SHZ9BAXWXCFfnqb",
  "key12": "efwQFq2k87deSy9u8xwbmz7pV9pxQQH25EnHq11awQ7biC5F5Y2bbPhtttUMtfPBooCKLaZRdVFKpbupvJervy1",
  "key13": "3TFE9icgraBZMGTNw585reyC5WAF9JwkyAuYDHqPLCTzgG7ChMXmxoH5BnywVpdv8WDMovdeMsfLYN1PoBMwyoa7",
  "key14": "2mXbfUXf62iDYxaxFZt2Ss7eMJ4MFTMLUHGTUywqBWKxZ8Ee9KR7SLES2Dkmo5vdbcDr1ik7jkh6ensTEsBLwsjg",
  "key15": "3MQrUiT1FhZYJKkXYQnpFd8Atd5HSkT5XcjkipT4fpcXcgAYXeSjQAVmcxEEsF7KqoTBfk8zZkBi458hywR8ppbY",
  "key16": "qvL8RPa1iBvkb8Tar2me8QKhsUYLQemydgMeMWZx3YxXyeTpknAHW8oJrfonMVmE5mNAKWSbUF2fEYQCQiKpvGt",
  "key17": "5txwj77WwfkXdjQrUxfnZ7HUWjCtEV4AiiutHj38UjkfjEMv4f82m2qrSp3R5cNRejuXpkxUgTJ6m58g9s47eN4",
  "key18": "2TqWchPCfv2cVCnQvyUUntrn73ca3b6wYnHTTiiqSDNFb6DMnn2omoyZREBeGacULBVRZxw9ReYwZ7VUQxKdoiB5",
  "key19": "5MvUWAawv6Wcj7sJq7TFidBfpycJs6gcsGQbZoKmEmnamqgoGXRqDGMogD8FxQVR1erAmMrUcpBzWwMdQaRBragS",
  "key20": "4579cRR1NBLiSm9BARCcK3PP1qm31ypSgYPHYHopgDzr5Wn2jrwCFvsHm8jDF5zgW91YDXDxyYGG1N75qDWCmbK6",
  "key21": "3rKqgvWoHRTjaqM9tVSVw6DNQnouMVGttGrxS2cuyjenAxiFhyEmdP6ALPd4i9Yr5bqhcd2RnDn1vubq9yS4psyL",
  "key22": "UfGoiSrNKhpMUVwtUJo9G7WwZiWT2t2owNSW7BiasDC9yRQSPGMNxp7KMqh1DiubozYWCEbcJrejvRARGr4QPta",
  "key23": "5xErdVSzDzxv7f5xEFnDTJYHaygDfc6SXmJStegRXSGGwTsgY2BSWt3uB95AE9NtQkytuP5oXu4XfPn2PjJiuKQL",
  "key24": "49PQYQFM6SQAqoB1Cs4ysyqdCJt7fat9qY5XUYqGYagH6zVrMN41z9uMscY5sznwNcQ9RpynyBvzxTT5Ro5PkgR5",
  "key25": "33sJoMvsgJzE6hqB4tTb1h4ATw4HahpjDvXNuD15M7NfCnMxyMLi51GHUpUawSAKQGr1NNrEV5FLHaFEDeuecVNi",
  "key26": "23gQv3eCKNM5AjyjKBFt7LpyXUT1NmSCRWUZA774QZ4rySNA9x3ZjEmSeLEQMBbAex7jWDz38bM7mu96jTaLQroi"
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
