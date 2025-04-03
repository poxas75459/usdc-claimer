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
    "2BekzWBFQSX5L2SAxiZ19mV7w85JTbqVs56NDqzGpbQTR52t6vd14g8NjzJK7XUN4HJhSNVvBFDo1pELWf5XdAvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W6fsNK7nWJg1cSrK7AFiyKtX1tA2w91tWsdNRzr1ynuaTeqSmpp6xjBwv5nTk54aMdvCMK6gadGaFkpKwGt5FLw",
  "key1": "23JbrkQ53yFhqnyms3HXWvHMd4BWotqBwqCaUEYbac2bkFc9YooFi7xhUEtpsRsijJ7x9wNT5gbvhu9ZNaALUDdV",
  "key2": "5RU5bsjwp4UAy85zwFTpMwkv8FzFDXGp8uui44ryhXxtjdCZgvtmLngZCbzZLSRM2v5RUsNzJ41rsPNEeBEd1zqE",
  "key3": "2j3BLTzup3oCobnr52tBtyVLdDpAZyzWsWt1S3TZ5RtjQpj7RJVh1TLF1Nm1XdG3wVSnnGKvECsV8ddJk6BEndwp",
  "key4": "GmRKzL6s6GaTbuQ3akS5478aPYuYDYC3qaCEFGMS3zpF9vuRr8vpHPfvrhKG1SZBvXghKVsWUvAb1fry3pPzMEL",
  "key5": "64ySoGM8vYBgfCPCvuS3ybCsuwMp6FyYnETB7cTb6rWzyeyVNj39ShSfz2CuA8NBMbv4sZaCHvTJpKs1FKHvyK3y",
  "key6": "uq7dYtFaj4avvMva8egbh7fE34sAfs7RvpHSAcrff5brDoPiVSgJ6BLFV4Hnc7nfsNTLkk6rgYaRxgfGwtaRMcs",
  "key7": "4yUWthDEULYV4eEdSwStJgdU6uVmEBkJ1RN2rpQ7Cssa6BBnRipUUcSetFnp7j5DMQUZuhy68eWUgZHgyt1memyB",
  "key8": "5vFvyAUAHbzSQt5o1z1qeRJu6YQ26sMxbcEGvnbTMTcGMeoDPAUKogPSzxUaEQqh6r6xvMVoGtp7CPB2sieKoA1y",
  "key9": "2L11XfCqQ9eEXvSqjih6hmCAfnco71M6pnZ6273DLjGkoaAMRtx85MfT2CoAEzoFFWPkXw4pgPcnfuAf7auQ4a3C",
  "key10": "5nasNzp1aSAB1p89F6UxFZLhJa6Qbja1p5bwJcFXSuV2iU9f4oMbWAaeSvU5MLX1dYPWs2TsmkVSsWEne6HmuqAo",
  "key11": "3mgD1A3dHX8CsQFpDKftA68RQe3XA1bX39vixUVd3vH4sooa4WcSkA9wpKpc6m4PW1BZiwPSCc4whd8iaz3e5Z87",
  "key12": "5MRwZUKfoj8mimibh9XkixKbiMoSJPRwp7GpTmNenam43HU7Kqhxhh8yHnApF8AZ3yjNn1PLs414zqKbpes2fzrG",
  "key13": "372nPDMagfb8uqRA6TbRWLMcgjq1nEwCpmghkNVCzRFZqu5JyDfCfMDFTSYj65s5m4utu9dkimYYhWLWFtGWcq5v",
  "key14": "2ybAsyau9yJvdjuPoV4aMzPUeGZPKvHzNnwP7VxMzTdqGpiSDTNHbmt7LzxNXnArCLJGv95q2JaTQGfAVgivQt9i",
  "key15": "92oyRLE6sxn87ABYGuhvC61ADcjvgjVbRNDxEbsS4ktGbQw838hJoNsoQi7xAmJ1d3GEN5if2V27t9hA3hFRbdv",
  "key16": "5bxQZynk3ZyM2ekHWpraab1LA7tVJC2wmgjpSTcqi9epvs7LggA42qGxVGWopYRBGBaEttPSAgBoj4gbFunxDkpd",
  "key17": "4qwGjuaZBd2APTGv44CzAfHokj4Lbwj72HWcsnEy9wN8zryfghFKazKxTmq8HB9Zdo4cxRSafyHJiYF4KMQ42Enz",
  "key18": "3WzEBPiMbw8gM6oKU7BhWxtqxTfsJfdLDtZEkyQScJ1VREigSWBFVAp8FmJX9zvGMSeRqXxq5M9mCjc8pjp26Yds",
  "key19": "4xpxuFV4TNZcZcibVzAzg8kSkF3wHV7bqrsEDVmj34VmE1pep6TnPMHxCtpGcZYRXSmMA4NByWExAoWrjN3nDRwc",
  "key20": "Re8VXWXdvjmQgi7gXf5gipVd5cxHyDaM6Wv68PpouVK2Zqa2LxviZ69Z3B5dUP3pbodPfiGxZdmnNrcxJJnVrbR",
  "key21": "58mHsojzpcprvVjR4JbNh1LRwh6BfMgEh6ygVeXTCSdKocRd1op9wtYmE2ZadkRT4kErjKv48LEtmEVssoGV8L4y",
  "key22": "2BQ6Rc3xWq9r4BUTq4Qe2QjSSdgPUitMvcDmLy1A7XjzX1Fam4KgtErtLXxfyfczDdbfcUMuDY1HFAjsHWGRK69N",
  "key23": "327crNAXuJUKsw2oqS5Rwyo1ha3fr4Ue1WUW24UJUN3k17wqu6MSmkhJ72zQtNNHobiAtioEydqrNjsMBSnL27VA",
  "key24": "2ymAsojvT5aQA7rNPY7AbWLCXDkxEwYo7uzNTvQmzArKiN7zcxDknQQigNSCoe65MTFnaaRzJCyYk2jGhy3cCyup",
  "key25": "2AWQp1kyEovs1HmHgE6eAwcEmRLN5mXRkQY7bULV6uxzhMmAzqv9s8idZE38woUEnhqdL88CrmurdDeG75dshUQW",
  "key26": "4pi5YfUjbJpMAPuDqwEDK8cn1doQr7MGm2DLruwvnvoxQYvC4gpEfEx47JaftvTp2iUkntoVZ1snCQvpiPjhsLNu",
  "key27": "3vAWfYUWSZSbQvEKdQDE7QqdsybDoug5oS662Xjw4622e8Zh5nu3TTw3TuLJYQpTUdSQuxdkDTR8GqtEMXZHyUCg",
  "key28": "61QT18G43Vywc1HVJuwj5Nx3KZRYtWCjX4h7SFYB5snR8BWe82c3884LVB7ktL3hN1Xj7kVqF9cWhFD1zRDsLUw2",
  "key29": "5jA8T5JZ4GgyPAwMy8GQZG2uayyHBk2qkA6gZY8cpeK6yTrtZvo7sFE3E9aGL469EqRBHvGx9YbCpAhtTeFaqDuf",
  "key30": "5ia37e25m6wPmeQDxTxpfJ7gYEWr7nTiZ1ekZpD4NEWRYgi2pwMWUbewUgV3cGHjE72b7orUsey4gVAg31GC7wXP",
  "key31": "5dV7TSYtKYSq9V3BTnqE9CMetDvqJsZSDFUiMJhNhCLHjRNppRiqrTAU4jqVfdfAtCuHX32TxxnzE7VMU8gLey6E",
  "key32": "RFKXjmCLBGKhT1S7dL8C2SjayjmHNCoSBuo3oEAiRigdTyVM2vbpuj62xhrpCK4wYeRhyB6YTsXZuYR7CC2hF8U",
  "key33": "5PCMfZg4G6TPn2w8vvDqCsrLXqwhuxWdbjwWsb2vqf8hTHcqCBP18vtFzhEjeRsAj9D5C4QYzhCWxVv4B3xR94zf",
  "key34": "4wm3rtqRvsAzpaUGfM5L8tQDkLKLk6rzZvz7iSbFJdcwpGPJj2Y6GRMUWGyWKn93ahVaEzGAn8KiKqNVAmYsaWg5",
  "key35": "5jSdRFXBvLHzKQ5qrD58UfKpB6XFRo21w6BBcLkb6CnQNXLP32NdLPp8HMRGAU91715Q97tZTt9cyb4dAQ3Y5Unk",
  "key36": "K97AfJK1PUuAbwPTCB9Z2wgNpKsyMYm1X8rddZ2mEvQTmSheBd3kJkr8dAkjsmgVugEXRMSAmr8DttP31jt7tSd",
  "key37": "5Mp4a81z2uijhGeRA3kjMYmGPSRxYnTSW2PGJFWFrvga8j3XRcwgBMb9yvqpsp4FQCF4aYinDFuqUCqaaRANmVmU"
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
