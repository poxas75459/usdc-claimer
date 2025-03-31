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
    "8MGvVPE4WMfj5sHiH7ginL6xZY9v1gaohY8Q2VouuZvxHLNthqVB5LsAcBkmjCZVqsLSJg5KSngbeLD6b3eC8TF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A9qF3xJdUMNaqoRZr7fAhbZGVR9xenbNhBLYR2Vbqgyk6mNiY7SXL6YdPJKsEJ5FgxeiNMBnzSDE2cM5xa4S2Ad",
  "key1": "46GQHvPnhpXFdqZkWqPzGqtJDhsJ1LhVfLEzRWJX8UL7VHvd9sJpF4i3ZhszWbPp4sgz4w3PJEP3KAbma9jYZhu3",
  "key2": "2GMGUQj7BvdzXziECJTp5bL7syEHAf8CwNw2kGJz1j4cTkBamzjNXVi2UJ4jTU2USZR5ubWh3Cj93FCGuVBpiWB",
  "key3": "3bGnCKZeaqE7QMtw6SkLphVcC8N33hMTZ1TLKZnq5X4N4zmG4p2HKkx6rJKeqouXGPfQfMY1Bv7PWyZWdjbHcKjN",
  "key4": "4REZTPpv57ADnEFvcvxpdwWJUxhvCDbQD3M2nNCqQtamPFGAuHUrspsw2AN3RmbVNjLfwj9TiqfQ459dFBkEyXZM",
  "key5": "3EjMHnw2hdfiEsf2LKTobQ3Qg5oevoXeEhq2VJyt3hLyqH7sS7W9eMeyXUK7xeAWDdkZRkpYith2JHZtsjkp5tHo",
  "key6": "4fqn7vmCgTU2UYuiPtjTrdU7AMBTSrK4245aGwRTiqFY7fU2PzbSCtCBBn7N749xS1UGJgpWD8chA3CBKkD3ogEv",
  "key7": "3G3KoveuhWPzECLQepN2Z4NQdHJVaAaVemxXijHEttz9TzBsWb5N5qD2bAkZY3HDiZxpo2JJ9DhZswU8BjWwGCV7",
  "key8": "aLcs3htzXMh8GCfwEoWmvFfacmnXLUACefyoAEJhetj851HXYp8QzKEDLGnS5kPqAMwEfPfxgwjQYxjj2WYTMwL",
  "key9": "5GeWGNJe5pr7T66npYhCn5JfhMDvmYyqR7yZU6UfwjZUc12R8XGye529LjqHBubAxTgSR4WmNoWA48uufkV1HStY",
  "key10": "48Ug9vcoEBjuga8xHrxXmuPYJq8SSt6vfcPVZqkGwUo9aKLzmFD3rbYT2zN49HCRK4rTXXe94qHmiLCYyEhF7wxi",
  "key11": "45YmEvhvcWGUPpPkoFMJgtUz2x2uz9Qbp2jgHLpyxZ8o5D2Q3q4kRpDcCwW5QgAbFUUDcVj3if1jeecNpkDFr7AM",
  "key12": "44R15yAoYzYYtASqXimRgZymU2GEDjYnDj4C2bvuNPaQJWa2qFraEcQE5kDfoCpVDrWtHg37pUZLmM4fpYcwPtZE",
  "key13": "ipbwMji2fuJ3cQCkuQw28xA892pK4UciUF6ksJBWpWfBi1V9qD4ETPPXa6BoL76krWoHYtASJxqPLQSNVu8keTj",
  "key14": "4mc7W83r368bThKzv4RcvZc2aAgwcwjQ5e7FeMeZVFdBCAammELUYbcXrhCnewztz1ev7yNBGYdfZbKVPzK8omKS",
  "key15": "4kWWuWSxk2wPFfnu8zK4x116yeLyGH9hmF8RGCDoNWaNkLTZCPxbTWcovUJCcewKqRTDtjjZ44ZE6nbiKxLdckDy",
  "key16": "5FK8MLpBMKiR6LPT6BYLFb6es2FJGhfTE6BDzNkNvWd3QcMSFTUieZ35swGFestP79aVL1eUijQtzmfxWYce3Cbm",
  "key17": "2GUtZrFUxBSzS7D6VykXh47iLn5afTzY8GYMW537YkRHt2gqLxXVyzM2M2KN59DuE25Z9x1HRDSPs53ux36VZmxA",
  "key18": "3ixPkAAxKYbnYit2bq5qW5PyMS7XgQJNdr9h7i45JiWKjqmh1bo57awt5GB9emx7Y6kk1iJpH97niepP7Q6L6BqC",
  "key19": "64GXaaQJgsrS9Niz421eTQs5qUDUCxejrUNuB6Yd1ZZKZKzF3VjPeY4j3FCbcZzD3x3PUxxp8JcneFpTgM85A8C3",
  "key20": "zhJVqzzr9hQcKzCDe8T91swf1im5ppN7f6KUvCo1b3AcKBNDk1UDrAYcQeNJLDY21NcuEatHmDFA7unNrpp66tx",
  "key21": "2N28dogLx6mHo5abku8YMdFJqu6TznYahNeuaXF2FqQh4mgCphJcjbg58VocndLjxAuyhEdP2niwnWVFkBmmLoLX",
  "key22": "2qCRENHnbcFCmfS4Txj1LB97BVp4gsx1usXmM45rzdj68mCQ82MJ2XaPNjguuxkkPfyYNs1zagY6YnFPxAcAzerD",
  "key23": "3WMMuXoiLcppXzGjniDgapi7ahx3issYgB4sGt84DgH7oq95wmsECcAKHqur8gaGdoqGxYpT9Vh87GZPYx3Uucxt",
  "key24": "2rausgaFjC9LonSJvxXNvgHbjMfqWdysBCGcJv8ZDyB66uvrNqWRUixGag7d7kQ1ZVPbxwXeYavyjqRJCPQ8m7uM",
  "key25": "2NHrnDRDpmxrUmJoRi3UVwFbPUcjKRcgi57meNX3FZaBEN6MmVnbZQEDuHoX7qVzrtLGsWDSgKxBcTs6UK5vrzw4",
  "key26": "4sx4nXPgJodstS3mAsjbvwSw1f2crdDW58GuEP3vqrVD8sjNz8H7vi56UtX8pY4BpJCHJcFQQkm7kE9jBZGoMqPF",
  "key27": "3q89KE4DCCQ6JAM3Ys6fJAC1yJomgLKU43BgTDkZcrkNjVFi5hDU3g7fgHsCMBBCgFxJiogSm2gKjuDXhP2kpNTy",
  "key28": "4nGPiyS3MXxELakXZqmo5n5mGPnFiFt2QSA5fPvPvK12W1uYghdof9zh2QVZ5DqrkKNRwb9SttkiahefveEMaa5y",
  "key29": "3zaRQP7Md8hNt5GifBixcNtJXkAhpGpAnPsQoVZd5immbdijCf1NvH1wLLVTgQFtLB7cWYCrSshaLcmff5M26gEJ",
  "key30": "4Xq1bQBXSGHyVqt8PRYYeUZQmabmySJtRtQZSfF5Zit3pyTPbEstGuKbDNwv6iN5SFNCin2KJRaTaG64Q2KjaZcg",
  "key31": "2Ht4Cyuq69xDSRanNdzx8daF4eM9fpZvhrRuM9PzMCWMym1ofzeBVBYxB2xuXvoEdtXf3pTacfPtHzia6ZLK4oop",
  "key32": "KBmjVdkUVFHRGtznQb4uCBZuF6nbX2t6gdpcRbzHQMPBNimNkenyJyCLjQ88nX7gmGsESWGj3m9FBMqqeg1u56Y",
  "key33": "b8tZpEiQLmFirabtUQsyugEe3aNZkwm1de35HvagbgMTtVy16YVm8LEAspcfphXHJ6HVzGNbXykfBktasss7dUX",
  "key34": "4YEQaqA5vG9HzPjesJk3T6jgJSoYJY78L93xd38SnUePwwCRKpSLN6xtBWvsLuwtG6VPUpTuwkcXG8QNwcdgyNWP",
  "key35": "3wBhJSat6ruVeGST1NdhCmVRhFgN2rjLsMiwjduhetTcJkv74cMFe1XvLiH5zJHNSVDGjTALSuacXSgbNZrb6Z2v",
  "key36": "umjVWPJ5mViLqKYq2xK7M7tM2SwbnMrxCwoN75Q2mwuM1YbJqsV14YCSZj7Pp6XjGVahpXeCS6f1GWaVtGL5GSv",
  "key37": "3WC8BeoDiobMSSmBAMqrRZXFCA3J8b1q9bi14wmXdJ1K1RqZR1rHCTmZErSpwmbQNT5GApbhwMuXxyXtUJjEc8RN",
  "key38": "2yC39wQu9dwqK6siLxiz9HGKSmNBwXGgZGX6JKtnbo9PhuhaKCeVnN7md26ZWArELzEX29TvBt6ZRKHm4UQyfTgj",
  "key39": "5BxMeaqAs6rr3kCZjeFQDAYEY2Dp1fkmyZUPHcv15vFKwbDxL2Ppxjou4cAuWVmS7w8qBPv5qwPuTaeVm5UJzHJ4",
  "key40": "GXWE4FPhSezhANTerrxzfgs1aS4MVpjg5spnDkTEuVQdWeq33XZdKouiZKt6twJk4BWLQVvcUXN2kGLx5aUWcXw",
  "key41": "4e8qcE2ov2UU82B4pA7HhnrPRDRjpUWCtwvQccU7miSyTNVRLjhaYLLf7CABk71Rhe3XYH5MbNmSNGqf8A1xr3yM",
  "key42": "5aHHHZkTGNJp1ZjGW1WarvwqmoGgtnbpLgwtjfNZ2qhUwZbS3Ks2mgQWdLMmzkhRCENtFnLEzWmYQS4iGDBG5jU4",
  "key43": "23L9JMc9k4h96oKeg4m1rTp5fjbLpwg9cuqiXb2H8UXV2Agy6aZfqcfwt8fH2VtVLYpnJ8ZVobgmczGiLD7NZaA1",
  "key44": "5vP5Tsv9gquyVnuV8gptdPBDdauQpYCU7s7BMYoqBJroXC6hxhEyaZbzhAvzkTStGQu9f3bpUx89Ejjq4oGfocfg",
  "key45": "3NsyYyAXdAY5UPFw9fH9xZ8pk9eXCjHyWbSNZcQfjMBP53z1KThLWKRHycsnQkmtpW8k6KagcnpDLHfxxAuMTytx",
  "key46": "VBRekRvqSGyH8HxNCT9e461WngfTRxVjVSYjoaXkUvPnHXvENRqQEMkTdCqtbgnuE2bXKNELpwqyw9Fmuy7CGDR",
  "key47": "ouAmfazrtnC6gQA8fEo8JkZgjQRPcxLkvL9WunBqbvZ2iD3gQnpHN1bKGW4y3sj5vYExMfAjoyWuzrLNcPBfYtN",
  "key48": "4aM4u8z4cdA1t8DeropT9CFFnvNoV3JaMpPWqczash4GzpShTnfdigYnB9oRStErNV18TBNen69Huscm69AxBw9H"
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
