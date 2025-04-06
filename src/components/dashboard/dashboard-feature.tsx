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
    "2j95odDoPRPfvfqFzEYSCrXFDruYYJVfuYpa84ozgDZAbwkJ2jB2uDHd6ZnXb7CnCvZghFV4PddbdR34xVukRvBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63PNupsy9TLvfX4Q4uMk6D25wJjrkwfjkHNqb7wdpfGHJSuCB2ururpdCEqv7QoPtdkf8o9XLhSBB2wUC27kMV52",
  "key1": "4J1MGsnHBQ6wVdd4wyqcCXoMSMfM3rDobcgY9ZxoRVMZSbFgAhgwtSvwGntcuQoqenHC8ogaMG8U9ocGX9dBXG7a",
  "key2": "3YYBnUscGK9mznZ7AjGQygXi2v61hNmTnMh34SNNpXZfEAQEDYR9W8AjHDUesTCCuX3NhN7x28E2wFTfEAaMq3aS",
  "key3": "2sK2gqZWo3gq7djUZ7mxGJH2vjDymtdu8Gzzb21BzejC3bDPjPpvX6oNgvn88UhaPKJJskwryg2sq1D2GS9eH2tr",
  "key4": "37uhm1iyFHDBHD8qoTbhdH9ZUKubhMDvKizfgRfcheBthurn75tsp6Mhc6QQ28snjLfxigVB6MwTMt9gEN4ecoWk",
  "key5": "4SN2VmjFvHng5ik7ByUMwPmvWDyU3nYm8gA2ZZCThipY7K1gpXmQfLk2jXEqKcEfQxTZNqhCxaVVjJYVTmBJHx4p",
  "key6": "5GPY9ycFWcVWDkULp7Za5fH4vp3p6fRp9bV55msWKqLimbSB6mooMSTMRrUFVJWckb9j4u9j8E7cmt1ry4sJFbNL",
  "key7": "34pBWk4fZWTkJD9m5eGPEZacEz7ffetLk4C2ZDZg3Jd5wUeXQpBAYjZTq3TgxDbNjR8L4jqa9VM6feYX1xUQfP3g",
  "key8": "4pdpaqFS8br7gqksofg2iVHw2C8KZ74xosg8hmbcQtg5zor23kM6NpPFe46d1ZMYQQf2QbZrbaLzgfzeUeA4se4z",
  "key9": "3gmJtFYsQa7bxtVYhH3qaKDMd9TQ7CgidFUr7QzCbCkb5C28XmtM9YLYUVEKDHovLqRjJugFSMs2CdzPGy7M6wfF",
  "key10": "5usHENfVA2EdfGeTG64hd4YPzo9fVe5hsgytSCSbN6hvQf5a4PowC9wkSdfZZWHNrqKZdyBFnCMyKPR9DkCbaqia",
  "key11": "5m5vbjsWCsrZtNN8sYFPuzTvPU5EQfhz7SQffT8StNYCGFQhk98xvNECG2DFoSnEnor8Ss15oBHQEojSNZxaS2t7",
  "key12": "5zrv1S8mGy8ZnLc7PTXR7eFHWJx6fZnDvBvvB8bnYMcSdQVDDy1LriURdMdVG5SHByZNcEvFVjP6Ktdrz3BA7FKD",
  "key13": "4usC1vSfuJCmzMe6txLjYWLGJpeP1KCB5QXT2NWEgGiumySSn7mxnpbtcB17CRMHWDWp6vLcbPCD2wM4PjCTc49q",
  "key14": "4dP9U9TwHr5V9AxuqJtRjxHAo5MFZHKybBU2W2qbJFkPw7fAZSWTbK73yFaJbM3JAdQgVcZxHcgrztBmcFMUNttU",
  "key15": "3DFSGG1o77kXnX9oE6jPPxCDjGBCEuu7XaKx18aRRWwGQrsGiBWwzqTxktU5N6aa7epAuPeUG7n38ptoZ2unw4Wp",
  "key16": "5VtPVELzvgKa6xWY5R2HW4uaWEnLz5Mt3aHRDw4JnNzoShZYc9bFxMxSg8PPLVkYoPNUuMWPhYoZpmQWM3hPZzuR",
  "key17": "oVRxq7MiX58QzmgyxBTWMJqaSGZSddgUguUBCcAtCzmmxmzuP9Hno4uoJNRHMyTBdz8t9yM2YkMRrEHkVQHqC52",
  "key18": "3bydNLHhdd1EqnxDtb38DrvTWgGTHgLYCRunSWXiXzCj6SCNLWqE6aEnFgGCavp7BA3kJ1NEqd6cwJrA6jX3Yn63",
  "key19": "2Vas3QhMsuQo8QBS8nkc1GiMQh9mZfgFSTRZUirUJLn9926bwJcnhQKD7FhRQMJUmg6Ywu4zJDiqU1e37DYctjmB",
  "key20": "4K7QyLoyHZ8qTFQKymm8TdRi1nePjnDaYmcYEGwDQQUA7KEibn5KAwpnQ5CbWRYqXRmjfPnMFjt5F8DRK6GQXKF5",
  "key21": "2nEY7kDREW48nKvS9is8h9Dr1JovUtoNEHQtAfy5q99czVsPMpHHRDrtKwcdQo4B3kJJyMDqkyGTAZfNxqdMyXVD",
  "key22": "5YYeniipaLzXiWBucYrAzENZRvguHBzTFJDTcyYMyK8BNFWAPjaqUEVdr5C8b7KmG4gf3mxUxMBYyp4f3trPW342",
  "key23": "5dCqaKPe9RtfhPGRkSUN8cirUVi81JvhBBesV3qSAJb6k2Sjn9P1V7tDbP8Szup1VexRY1Y4oE52wKevgUm3rM3V",
  "key24": "66aLafQqXHEowGexuuDxUnvaH9uVi5mPELX8cLQC6NMGQp3WPMez8phCRgGxf5jtaVmnKff8uHjRiKFY4ASVpd2t",
  "key25": "4rNAiLxoQywY5ZkTAEcaqbYJ6rMbML5muFMGF57eNQTBmTs4cCss1SoCNrC1XTQ8bUQgQrvTuMJT7XWKSShpDkGK",
  "key26": "zWqnNgbJsM3V4UsSWraE3oJHCfGk4h6Rsji56zxd1V12TayCiBZh8wfsvJbYh6HXCyB4PYjnJqjHsVMT1PiWzGR",
  "key27": "5AX8fp2J9xkhKmuHGASF77QE7xvdbjkhfqae97DHgLu8PiUFthezU69T3RALWyaTX4wAuVeEgBdftGn941EbM3D1",
  "key28": "3hm1h98R3An6LKtXzjzM2ZA2bvFmh7KBZh317dsqF3Fc1KUEmnHYK7aUiXR9RxAuRQADKGmU1kJZQaQWKRVLJQsR",
  "key29": "5HKTwktt5ZVCK6dSNt9PKzXt3PwB7SZ8Qzq3ojkqSxnbAkC6SbRoDUqyfjJFr8sd6SnrDcaNRXr2J5goyotwFqs5",
  "key30": "MqqMGucEuQJPbc9xkhwtWFXhwAjvLuN967QYmu8rbPYUSQ7zwnxwYuSTm9WRhjN5s75r2x4ppyZUkTFSKPXDHZ8",
  "key31": "oTTm92JCvk4XWp6ZDL7XoH5waqMFy4d6mrTKou1YprpB8xZUWBtuZiCBMuY1UJyrfS6Y6Q3qiChtzfsn52jX6MU",
  "key32": "55XQF2Fw9nYnXoHfHh8rKw23QoxyEzfbA573KHQ398bzHdchcG6C1bt6vHVAsTeN8hmHALbgH8H4dwg6GX2w8N42",
  "key33": "42Q4HEfvWATyJXeESkKzDQuA7oTTc4tP8DUzBwVSkkK3G9rnH7zGGhK6wMrMZAhq59U9cPqneayPQvYCHyztbBau"
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
