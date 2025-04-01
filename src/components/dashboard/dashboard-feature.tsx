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
    "3qx7pvNURzV3K34JkpCymx7YxLHKfnR6K1LFdSCNZqvwcq9CvkdidB3Nj9QpbsQ1hmtdrwNb4jPmLwLPgoGgz9Hx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZMmVrP53Voiyv1Png2Q7C4GLbEFwk1nEzvhyFKM8oiEYWaxVKNbiVdUx1rynGZkee2cdhK7qsXuAHWVbBP4KDo",
  "key1": "4GuQyWu13hj5Xpe862ieZAAxVz5znaMTig7Htpk3qwmbQqmDNCy7osU8hMQuQu7uSp8pKAToP4Mf29RPoAx2k3op",
  "key2": "wdGjWhTshoSux4tTubdYshmNzdHjBe8h9nKQdDixEtHpC6SzsBEm3LVra9jt3bwyF26cChDCLrpL6fzmoDs24iR",
  "key3": "3GkZXG6ozevsimYyxFLPPj5JDurbrVANbN8DHj8MJsdzVu7aUrrdXW8kk9HvDnj3NakTXCsuxmMCqeW57fc3Avse",
  "key4": "h9g5KaYiEeDV2NJ8eYntU4rJLXQsGvoHnecyYUrTmuXYS3L8HSUrJyB5U3Ebfr9kYT1NeaBjZapFfe96s1Vac8F",
  "key5": "4DVrXBUrT3PGH77b1sWukdfM9iMHyXwS6K5mTZbmDDY2LApRhuGAJ9xGYiyidVqsuea1266PiY16asjqnAbBVZHt",
  "key6": "4x7S5REuXUnWYMXNK1Fp5SkiZm7KM51SAo7NUDvr1F6wvU86n7dPJWhwmsVo7mSsRYNBgQjMCKLY81LCwDTKswgT",
  "key7": "5v8WBTj6oWrBBWoavwftQwfDeTo2ZxgGY2ZnaqS9XQyB32G7u9u8VU8Vj5owZw7prTeA8y8poPDDp4iHZGsJXx1X",
  "key8": "tqsFqHU5k4c6zvgAvBQ2DxRsV7ejkGmMA8rmfBC2vbjTBg4GvSxyabyYtKwXkfXEZ9G4gRpYroXvnZogmRdWroD",
  "key9": "zCVd5zhXeY4LFvACcrgigJvUpG9xTqhXFFXswwRuw7QBzJ9cDpnvJMH6tAf2nzu6TjJncJMv9yVBuhMt3fVVNHi",
  "key10": "4mvbk2rALD8Z2jmYheu74LyoZBGwbkRpjWcfo2DBqKVvmF7RHAB4Fm3zh2UZX4iVGX1pjtCRGJGKQsnWcoBXEtzH",
  "key11": "4PkX82NjTRut3BfhMQnKNdLhKaxWiX63AFXxofYXk8ntEWVa3C8BCUXqms5uNQgGVwVWS6ZuNAVBDpmS58da89zx",
  "key12": "2ccXH44ojkJTPEUu4Q4mFkXikyxSKQaSLpfvWgxhMxEcYn8xBP64dCKacQtkxtQ9Fm7fkjeco9HX9kYczrd5ApLw",
  "key13": "66UUjRzmJEYymAyFaefHFBfxKY1YFuHSZ6zraWSH4SXtq7LmfdxhEHzYDRCLULUY3AfyGsPvhSnYy8iiJNSfbeZM",
  "key14": "2kULved79S4ULT7K3TFWzRT9WkpqPnrzv6hB7Bp4uot3zzKeQeLbvnG79JE17Nv6tsRbEFbBTiAkLbEqY1hL1d7g",
  "key15": "cMWWQjei7n3YoxiqV4U8K22NFduhcvFCsWroaeMKoeLL1sJPBKEfhiC8qudeCP8UX7UzNDVtixj69QrUt8Xcyox",
  "key16": "5kT3WtjRWF86PCxW7gjnX8SJc6B9ryNTL52phNWMJGqCUgpGho7mUxgNhE1d5mdmFbnbrLGpF8ogVKaGX2M61qmC",
  "key17": "5UpHto4Da11qW8NqJoj9seBXSj7mBth9ft7Lr95jAoFZ6RzktzXB64hKb914yeoUvj3vKQ1KXHhDY6vuLzCVbLoJ",
  "key18": "3tWzWQqUH8N6Tue8HehAxFjcQbuCs17trM8rg5VwCeFQ2AknipRGjN8kxDWAjLUAHd5Lz7fLnCeeiooh6wTVm4Zv",
  "key19": "X1xmLL44zAZ44tYfbh4UnXbUaYZzffLQ95kcod1WkVqpF2degBkvFWeiaisi6inpryfw1memMnVyShBViF2Wkk2",
  "key20": "2HFb87PuakCCuR9ThSQJdnc27vuAbsUCLHSwFgk8KJahFGNFivuW7PS3WJBhJ3EQ5zJrWry7EQTBvUjPm7tkE6xp",
  "key21": "rCJES5Sh54g8sDFUwF6uHdragtDuDnD2JjK9Nd8VzuaMWhQ9yRpJnGWQrrYabYZz73DCRmS6khQhbr43RivgrMq",
  "key22": "4ehmdckUaP7PkNu8MCrysvgdAqHAA35USJKUKQNikDaaskdruvhVjkUyGYkxjJG2pa3CxFdijZsSjVUr1CAKw7wh",
  "key23": "4nEAByBXJUdCm9wHvze53ZizTxtqkDjH23RkbDmM7zzzVepfyBTyus8iEnFTnxGUZFFmLYaXgtvrJyWZSfWjREg4",
  "key24": "4d6bTZTCAeefNErBAeRMa69nJrVSA3k3fVyw5cwK66twwGE2NtzCawW6qbjaZE2Hmcs8zToDLge2vU9RWmq6C8tc",
  "key25": "41odKJpbHwUjCE2Hz3xaggfWvL25xnfAnpNXJzz3wwtKYZtD1FXkPikZRXMo8qRjrpPxFcL2QH6qkEuEiZoxw56Y",
  "key26": "5zpNjaMddNmnkpZnWGPYvuFjU67UUs4FsmvW6vdzCJ83K7JT6rUey8fnhLtNZ564brwbTVxXafjH3tTx6HFqYScq",
  "key27": "5pi4BvV1Vr4L8xh946q75SKC6ZA5nfnMsYdC9mWKXGG9RD3NmePTF9ThYmv3pd84ARxwHf6uR2HBfqEKDBAmMXTE",
  "key28": "3huf4J7HrUGw76YVaietfpAN4HTp1CWRfs7sSoTaciQB2V8m6moiMLEHitnAnFBCmFj2N8f81kHj4BmGUugz5Cwd",
  "key29": "5fP616eTqoMu4iRnJtVLdcxY3DMxLYGHnBFHFGuYwyzcj8XQVb9Lq7aQhLDC6hFeducN6iLb6rvhyvPcgtdnVCvo",
  "key30": "4U7KhQUfJtfxnghBeHwqY95b2A1Zt74cFYzReRu4WgTPtED3J2UXcoNL4zvNcHw8S75RbF3QHKQN6fTyXhUx98f6",
  "key31": "4uLmU8iSaXgD5h5oZBjr9hdfhpL7GjcH1icCwNfNbv4Po7BbuRGwgcozZQsxwANQvV8wTaoHuFRcvo3GBi2ApPBx",
  "key32": "3dgzpf4RWGpYLM2gp6k9vhCBcW9DPvBSAQQeBiUThPvLhWc1iE8Wvb4ZjFejUx46UBWXibXNrcVMmPyA5EjzTJap",
  "key33": "55iQkAiif5jARioFcPbr13EkM2Qy7PAACWxHutvnMoAHT4yoLFPfZ2Bq3PsEsCKV7aqcJHJ2kUACRqvzdqFd7LhF",
  "key34": "2EJUSD9HapsQoJ4568RffhkB4JEEhZy5XztP7Kus8SGh5bZD7wsfxyAgNe4zVPcDVYfqJbPkm9NBXi3JW8TCFNgg",
  "key35": "5ow6udBWDhCbzQv4rm1RCgNRDzc3v3eGdfUMtVnvurMVRyi9S6da5bmuJW5cLnEwGSgNf4A8igjzVzzKppDBHMFN",
  "key36": "2NDRPTdbaFeYZH9hnEUWnojRVSs6arX86HCk2CUadPQ8NuSzeAs28qNDAkDuJkqAUmLUHoWwmgDu6QknACbihZbN",
  "key37": "2JCWnja948uYaHUMgNyo2x1Gu9rtAN5tE4savEQysDs3vKrDcYjoVFkpGdnSMeXUpNc3J9XhJV2MarXXAmdimyXK",
  "key38": "2RktimYkJW4sYruf6uRB5SRMYQN58v2XDLkwMbL3MQe74uhsMv2SpnocUJjaGDcEpXX733ALHzuXt7DPfY9x2n9z",
  "key39": "4ktsWeEUfvXjYFSoWYGdj3oiyC9dXAx1gS8zKZvfNekceZ7y8EVgYKtYPi7ZBpNtmfzinr2Zj5ycef8fBjdGTaz2",
  "key40": "2bpLweNhFVnAvDLu7yvinGUTKxfkjnMSLApJWEafUyRWFQXd76K9CAKnGqQg1tWg6DCeoKiMCZvK7qTnRHrc2TYA",
  "key41": "3L51CoGopkksHP8Zy8d6VGLHQhKbLTH1itR6vk78fi7LAsKuUPt4Dmy2AQJf7u2afYn4xm18M1x2ZDTQKcdrQ7Lx",
  "key42": "2wMnnni8cLvqyyuymo4W2Qh9J6cPc9uXe4Yj1uqPA3qbf7nG1DPAwtus236i94PS6672rusSWfPGeERWdTZhuCZg"
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
