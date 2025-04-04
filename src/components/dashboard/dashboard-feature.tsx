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
    "5DjTGTj4XKQeEY7TcJyYTTschXWyFTM8c5LBTh5tbaYri13uNMtydtgD372mmkunBtp2yVmN4R9LHT9WetSrK3JZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tVmv7NmhNW26cqyXQpFVd9s9AfpbpukF9qZPL18aLr8KRYzDutKVzLdM7UB8nvF9NS5qzUrcEgSqtQYCn9UzhpV",
  "key1": "5bqEWz5PVLpUh1k6Cy3vS4UUopMm44hRaTY9W9jykA4W4iUaAySU5kptsQu18QMx1n3J11WZTDF4GPcpsGpKQPWT",
  "key2": "4yXLX1AwyZqmwf2Ek5mpjGR35KLQ5fsTFBULPxqVSq76w55AXdhvnLFdeLJfQvTRbYmVvKYzJi6gNpbp11dyuzuM",
  "key3": "2dimKFKX8bCrQB3GHb9GuMQYEBzCk7QFvM4DmY7xrgioaAWicJ9JN71NL16RFD6DKAUA9pCWa5EgErbw8JaQF5iW",
  "key4": "4Boq9x7XeVakfN4e9kXXNi8Shvt3WMjd1rjQQrpHjBx6CkHJtcmYjhzn5ueqjPCoDCZKnFAujRNmRvGSsZmX6nhk",
  "key5": "2W66BgCrdb7SKz7ewEXpqBnGw8auKKWkMbeUk3SdeYMs1wt6cnRvdd2MV2gL3ADAKtPvUS4m8LrsinGSRKid8rTh",
  "key6": "2FNTpFRYYC9GpR5N5EzS885JCTiDMto2HrWp4BKXDhdHoq5hgUvnT2RTjMES5FkPmfrMMk7rnkfQ9qb9H8v2vVK9",
  "key7": "5C2XQhkMyxhSJQvnvzMTtYWPLSTKEcMBPzSp9Vwm7KtGq9XThHtVBEYjbsGLf1obCDo2qAAwzHwSDkNdken6Y8G9",
  "key8": "zN2XErxmYbKENQvrkMBaAxhNBEKWHDBqM93CZLnYhgxqhz9K8Wn7a3UKnsz5FEMrUFihEkp7QNeA3bdkh35Q6Qw",
  "key9": "aNdzMrzNJANo3uTB75nKsnrDCc4bNz1s2yiMtEwpJ8JAA5KXonab2PAxxaQ5VgJqXQGhTwUEQHdiVxwEDXezuDs",
  "key10": "5gSf3QzX2ADAngEKDBdgevC1ZrSR4SV63nn3NwRBqak9L6y5UaFjeUMoiEAQstNYtcHErExR5xWCHNsqZijKSVpX",
  "key11": "53SFVRCPULQu2BL57xPajZTp4xEBPzSYL4MV5nZDUuTKN1LqctFr8drgJyDM3vwQKUDQfbgnNDWmZmTWkPHm664o",
  "key12": "3bgRcSuEqEniyfaqUwEW5yikMZjhNsEAJLutxA2Zr2zpw1BQnqv4orvLVYcGwhtcbo92Sz1m9GdRA8BakeNaNg6E",
  "key13": "32qxLdF54NyigEFcwTXgU7J5VrLrXEoZoULkBrUW6LmiNHmnqQdnAxbu3nW3ALpVEzJFJwEnKjJas1NmkYgxnMsH",
  "key14": "2daxeFYob6FdE2RArjSkd4cspAKZEDcSs6hZmvjycZia9Z29f6rDWhbtNmNwA7aWqnBNMUU8TkD51gqUqVek98Vi",
  "key15": "35JYomH8i2qKm8dpoHbnPveZAcY5ouukGTyy46uz5EiAwxx7fMp1RbkJFTry45ymEX7nvo935n9mS7aPXnu5EV2a",
  "key16": "2fWUxKyE3y8huRZPMveWJ7RVT8CYnRoigiFkGFAXMD86B2FkL6WKkhoKFSmkDaJ4QCyLYApk2DQBhCLKE7XhfA4C",
  "key17": "4vgKsat1LMQasPmA6V9hjVLXVkvQ6se9uHgFdHE7j9TjFhmBtThmMmMRJQKsBsXUd7Qm5iNXcx3BBT78B154PgP6",
  "key18": "iqKhqUACpVGJUrFX9ymo2SvzVx4fBWzdxbRZsJyQmuUAgNr85eZWcN5vuQPijCbkBs1djHQgUDRkg7iSk3nK7YX",
  "key19": "3fkeT321u5QYuw5HnMbVxXMS4mYPV39kmxNBdHVcceh8HQpxtqcP3aQTebdM8WdYvGUP4YJZEvXWZNvpbjfu2EfT",
  "key20": "2vkBzj4ybtS5DzB2PQEsxd3uNUAEBgaJCebxtY4mRxnxhtWFQbvkbf2b67W8f3v6huNyJkwfZeXJ9w3bCrdmauzx",
  "key21": "37SyRnUypgTGmVgSH51CWPzwHTEDT7GhLAtf8vPyuRcxaRKaFqUffeMdhnieDYYoQvXcRrTMsgRD1MMSKoUwuNir",
  "key22": "3y5gXMmY4LUfW2We6knM2JGDgiM5DywUse7LWWJm2mxWqWHsnUzjNupy5N4tc39Syo3jn4qpdHGkA94ZoAGRZVnX",
  "key23": "HBHeHpA4gq1Dr49JQQgobEWvnaA6iyxXU1zfRVYYsfXpUTakRTJSvujX8F3zpS4F9hcLoD1ehtZAueX72AR3bah",
  "key24": "51naNHhvxNJgf9wUbQ9PDthkUGbzYwGUCnE2VSveB3WQFYjSr3ViPKLdd5hbk2JBwD6B3owNSb9wyg8NqVecqVAA",
  "key25": "4D29tyyaHaHTCyrAmAV6gMe9x4VEm9TpuQzxeii5jaKktHcnuZwHHp4wn5JB7pLvZnaaiibUFzpFxgLoKPZKDMTP",
  "key26": "PjCu43oqMnQa9VuAgfEdxK8kLrW49KTy49eZhKHxoFRFqwpGCegoacdJjb6eicGUHkgB7QyZagaaMgQQ6FFceTK",
  "key27": "5BjbCrCiXsPT97S9PP2HaL3ikeTMRqJVSLYwKqMYWH7RNz974FH5zhafVpmWaYBiPhXgnpQQJutwmh73BuLpaccK",
  "key28": "LB7Cme4KaCLmu7fnprNurCUY8kKQyk8ZHE9dPG6CVyb66he2AFXDt7Yu1qzT15vKeqm1ytBELG8cTTQK6VyKQtV",
  "key29": "4xaufqMN9SbXUa9W85k2xc9tFbRLfCzAMnoD9VyfQWovHmu1DjhjNiAgS23png7HWgUmHcd9omRJQiqMjiF5Gab5",
  "key30": "4Psi7ncoSHAK7nt6yyuxhYquEZXYYAknuNG6CG5CbfcHx7PkGqFrgUCEcJuRoWwMMvGud3FcrgPs7tFUf4kdPuSB",
  "key31": "5wF8EbL1A42dRxMLCUcMwnhscZQXm9hXs9dzkgKe476Y5VmJupWnvHGSbPUhoFFnTq6ZNYctAwtb11u7qnVXBrez",
  "key32": "p8xCfNacY3cQ1wsoPWmnvyc8nAZYsmuSTapue5y74Gwe4gggsjKJoMjcLCUBBtqcdWjBq597eA3GSSfAxN4TBUh",
  "key33": "FpNA6JoQbTFAuiidJp1UQKD5gH8CeN4BvMJjKQ8NmtGcvv7khLAPcwdzc4EEjsNozNnHNNcC2RiqrCVfZjb4Yc9",
  "key34": "3iWCLrjaTw4e9Gz6GnB7rgLymzgLLbdaCqahdBTCvM1NmuVCsogE58oQyukhmwJnWMda2SWHjQJRci71T96EqCQZ",
  "key35": "5ke22fYqQMhVBTtyxDVbvP598xGtcp9em2pDq1FkikwVJ32JEh9smTZqjZgSvBsw39zawd83kzPXweVdbNPrvPHh",
  "key36": "24ETqdaf39GL8JV57U3hTdH5kQz3k7k4t6gVgPm1wDLsspMXkCP1kMWpYzmodFHEayTGgwtQZhL9McmRYnrvLij7",
  "key37": "3CfJmrSbDuzAheS3mVazbyWHQX6HU3VT5NDVCfdKA6boqVxNqUss7oY9Rj2PSyuS48oBmUS3H33TYpuV3XaBGJmC",
  "key38": "5xV28UQb3dchaN1oFJ1UGhz2jGc5oBe9HqKiXTZqYLKDL6dxDEDGpvWqcsLqUgvQKpsQ767G9srVJxBrYkx73K4c",
  "key39": "4ojAxz8H8f9UWb1aB3cQ6K38sSajn4WvLqB1zDnzgvbts6DbCSpb79S1j8kAJM6McjasgVgdpkPTvLnw5MRppDVn",
  "key40": "5PY4Q6pWWvekUBGEfZGNrwhsHEvNQQLXEgGc9X91p9KRfirCkkWiu2uBo4AV1cq642dkitkXuRpvsZW1iTgqstBz",
  "key41": "4yBRJ82vhf4QXzj3BsyaVfCjGB48PsprcU5EayxpiMwddRfGfPcnwcE5Bm5W8BQBWxbAbeAtAiFemNyNzWr32wLK"
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
