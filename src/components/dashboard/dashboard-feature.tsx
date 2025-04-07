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
    "FdnS86ZAqmKAeAy4dL6yxWGssQnhuDjVF4LdKfgDdabUQsYAGs35iW8rdwHvyQeMBrJiGvo1fFcPnRBUZzvpAq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qHfBRaqSsGc1NPJfNVvKLgpmtW3gHtYrs7Ub4T3aGhjcHsuGG4HzDnxFxCUKggDonSvALWYRzENvmQhz16MD4Ft",
  "key1": "BgP8RFkokiyHjsDq1f3qwn1GPGVJ3MjniKsJhmXxaREPzFfCM8Ge5o6YEgvzHfk9Hw7vJsCEyGfeMp16kfFKhAm",
  "key2": "5UZcMwsqYntZ8qW59csnzpW58DXrweMAeXxi2akL8TxUP1GkZpqZsWc4cWqQ3nAX6hqccpZohLRDbL1qnUcWd8Mv",
  "key3": "4Vc8MKxCmJv8tR3RZXUjPDBKU56Foj6MVVwxLRy1xeMFT3qrcQMnBbtCU8zkmQsNRb1KPzPQ1ik4rNujgqJ9RB9x",
  "key4": "5yAbxnQcBYfPrKdBVX2VvDESAtPLQddwhEhUCFrvZURjGYZE5YkAtnTjpcrgebd1FmYLURbbAwjUnJiodnmut8HB",
  "key5": "5TqWboCodN8ixu7wf8aBoWvmknphd3PXYEsfwcBRaZkxUXD14Gbh9M7dnDJH5az7ZXFRarDQkgvmkM8ndCtkBKX8",
  "key6": "WFN8kGBhcMCwn1g1c7Mf3fdN1xFdAkBu7WW9GenTiVFvpgKJRi77GvJ1A1k8XEu5n8eW7YiG5kx9M88x1Y1wdq9",
  "key7": "b4iKtGKa23voYkuoyjurHTZDhJxRiWkhhmEfjCNE8DEu2EuTPk6xxMESUw4wMpf5wgidNq18FAkwiXKHDGXyLoW",
  "key8": "3ZaD2QRZ684wnCt35ctA5mXBzE89i7srDRjdNxPXokdmBwaQpDv5WTeDxU3r9FKgedQi8zjnsAsJmkxBAYj7J3TH",
  "key9": "3u3kkDErYeHY9MRRZjm28jsUcfXupH7iePcvNBVJD7E3wnryrCwsVtXPznDwtarZ5FCRiGjLzHypHjgEMeXxNTYP",
  "key10": "2gHMDMkPVUWDyukFmBmBp6WtunzdEBSagwP6qKxZkS6tQTq7U6XqNhQQ5nkSmE5zqEDuTMg6MsSPCsNX7AeD3fck",
  "key11": "795RcAS2NZrBaaFRHMbXj27XTVKYWAU9hX45nggdahpwjvFpE81Ht9imSVSGGjNrV82eqFw2DD9Me5i3oSwf4ew",
  "key12": "2jrPFNS24TFGgvuuYzuucEnqWWdgC1uMkH6eHkhqSCLfndEyxBH46AF9gXKxaLBXbw4k6pZsA3JnMagrCf5LqAng",
  "key13": "2c8WfY82GYfix8g1xyqVDNDmSfCGSvDsPGJzt3XVqkpkdqUGHEo6JN7ept3Xm9dJL1GhZ2XkMLrBpqCzkTciM4iL",
  "key14": "3Bv8hyW7g4nRaB6YJRgV2i73Z9sL6PkukYMgPvcufdabg1cjpEowRWw9rVZaaAQZcc9NqhWe7PVQVSszk6HRkuVz",
  "key15": "CmUeegEzt42Kd2GAvF2hJHaiofLFX34bEF2556Qu574UrXAtZt26hZ3aAqVzsvV7y83rw7vktdwUBNAQyJ9NMFP",
  "key16": "53w4oyzEyP5Z5obybMj2bt39px76gkW4u4Q8m45DYtZTDvjSCBTf8v5hAwNrdqinL1huqjVRcRwrTafw4zoET5aa",
  "key17": "65KhfrkXehY41gJjdE8KNkpe7pP63U3U2GUfByC2Vac7GeK9NHXqj1nJmjJ27ALcwNWZnAxLDttD18skcSzSrqSM",
  "key18": "4d1TaG6LQtaepXLbBowkMAUafCXfF4CViH6SMpnJuhQqyAEP3b1PhyrdGbwQydvkUZ9PaVqRwzijBtihK3wSXdXc",
  "key19": "GHp5bbQeWCcEH993DUYHBribeYGyeizscUFhLSyb1DUeAtHmEA9jUs3KQA7xgca9jWXQedHjouPmmbT1DTALaJf",
  "key20": "3aFNXHYbGUyTF6p9Q4cf13gJ4YBcMCoa7a9ahARAMoaahkMEzk4QJ2yG9hSgnkCFsR6gvvCZcTQ6kBHgg5rRRQv7",
  "key21": "3cksFk5rafKYZ3zibLRc82BA9jFJGBDtxnWq9pxzAojRnievUYNrtcV9KLwvcFHpL436nQ6VkxvvL7mWMmT8AMXu",
  "key22": "2FBApd1qSaB7iGfjxW4ZRkfahduYo3jBVXUBzef9WY8wC7J3Lh9SEZWELtFf1T8b2q8iBjKtiTMzqB6CjowajxVu",
  "key23": "2qHaC5Ct9jgSizZsguu8AJkJUCdj9z7xcHHC2dysy2KPb5owNYieJ6SAnJcMzTpR6hGuFwKCGoxULHRScCBWSSxn",
  "key24": "3Uo7r7xnN71t1xDnTNtTiqUJCrxpvDfeuMo2CANn9VoeeDZKne9BXkPKkcHNMAH1nE4WRsDTvhPwAvAH6QZFWLko",
  "key25": "2nx6gD8qvsoReRFc9xvch6vp4AVnLAk2uvcMjQLng3JRhhZg68DiFomFjptbjCTohSfbuw5bueDh98P16USAPTdD",
  "key26": "4WM3h6YmLbTatPZBJciQR4WMkcsuKAh5humx73F3itoazL8NxWpVQc73hxSeddRFboBj9Ri9GeY7Q1f2Zic2rchW",
  "key27": "2TDEK4VqQbsF6NS19HXNrhdGdxw1PdaGgkkEhQLiA3HsF8KbtdgQZmsPzoN2XwCmzEb86dpFxvcXSCBsn36bLH26",
  "key28": "jj5dENnQaDFzYpZYizVgwGjrz3nwhNZ1pEtVVyLETKN2RbToDuHz916faix67cnoF9cFsncV2XQ5ACsji9Qht8p",
  "key29": "2hNhHNnzdarFxaUThh9idee1opG6S9NhpVhEvsx8gcHXEWQ5A8EgVFpDGV7eQJZrWcrVcKwAbvjmEJ8BCNYTUJzi",
  "key30": "2f86aVd3ZeN2QeZBTMtn3xL3zmpT1MUNrbjt2sWQrfS9d87Sr9XWy1mPA9DVmikHHXokmdm6q6Y4ERxBjFzpHsVD",
  "key31": "2J6c8fZE7MRK8vcabEN6U5kQUHMkF1bcGjBgdX7f3fTsQ1rNp4jP6FBwAdTmu173PwWYwh9q123fYMY3EnqgWaSU",
  "key32": "3U9NWKtnpKH4tisKyVi9vBf8E213MCrLPEJzHVVtoJHfMQVxhCuxoaeiJn8uitJn1M7oPbyH1EUxvjAnxuvyvmeT",
  "key33": "MPMn9KvcprPFrjBUGvM6T9dWNDcmo92DNL3pc63cNLquC6ePGSRc3vJbePYybM3bcZxLA9qwFJXce4FwpebfkPz",
  "key34": "WjUJ44RHp5U4dGoUCMfbQ1ZYxyZrJ6C9RuvPFX2g4WZGGc4mr47kjN63JpFCjhzzPX5iTM8np5d3jhk53E8nNtj",
  "key35": "4MqcLjjKFfqW1j2ipPzLtM8vxgyf1dyx4gAi7FQqshUURW7aABkSQ3M4EdMNj5VQnz9RdrMiBHaZMfnzAnRZEc9d",
  "key36": "4X2csAtVwyNRao59wDNCeFx2gsD7Lw58XE7knzE8o6AEtWPHCL9EqGuQR7jmBbzCnkLw8Yt7k2ARMjpuudTmtwWc",
  "key37": "3V2JMYg4myySwvRkiuB6M4kouDq3C9rN8cDKDPHgTzhMQhdSdsZxiqzegAQQjqMEAncqzU2QtYtkM1kWfgWR5amb",
  "key38": "2pFkpKTJbevoc5h41vBiyLqeCcQmaBbvzPWZJKCTLN2cUTeQLCmZMbG31UnoLvgJYjVFWV1x1sHqakzHKuDg6HxZ",
  "key39": "3yGyKyJLq5qho6YGtZYRjZ2yQt48a3k2JGTNbS36Gesodr11Thzp6PyA7JHFpwaRrKNA2zNxmfTpnYUajtG9Z7ic",
  "key40": "gZsLm3tXcYZHrxFh7hYoYxexcjYmBCHHCUb9ETapXopNECHQDRbUWFDVBPmU9CqQmSNRLCKBUEvthcrkt9GMSBw",
  "key41": "4HYpp8tSBctjwPL2gpnpbrEMt3WDuDQs3e3j3F1RvitgqJjv4uJkWFTkj3cW2ZY7LF3bKbohggqk1aGkqxE16jPo",
  "key42": "5BRhoY7aEcRDruHa5jcsRTMvKtVQt1vj4PgHQmAVF6WYqJMezFYgC8yRkkFdfAkrod1fR6iS8qREUasdsPhV47Gi",
  "key43": "62AUK9n1kW663z6zzmKYYkKdbHDMD79bLyirKJMX8aMq9J9J5EM1GjHBnHx5j4nJBBNmJXymj5LhUXqaNNGEQZyp",
  "key44": "3MyX1LFUfbi9oJSRcCUBQ1edU3NNuqx3USaC6HXkTY62Yjtov3Bf3bHmJNnUg44KX4YXLBj8afeiM8pt7jV3g6iG",
  "key45": "3ZquGCfNTiA6mhygyRTe4hKYrwiHXeKwPYaNuS6iEUUMAiDqWhbm2pWGataMiLRww54JrqKC4XH9fHV4LWansmPk",
  "key46": "3Nn3RKuuC5NQmE5cAdJ5VG7S3NnkgbikHMPmfwT4JKexCvegkJcWDte649vGHJw8uCpKqZhJzpqHAyGHPM14oNRg",
  "key47": "3f8WzUjLAzgY5tLZYbk6mh1JZnjnrQgCEm5gh5w6Tmv6g5A5rfS4MnK5jfXmemkzfRLAwNvibK19iVydx2uvdNUo"
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
