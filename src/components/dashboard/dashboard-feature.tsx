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
    "36iCruSNp2vNyQwrq3JnRbrN7uu9S2Mb1N4csssT6QPbLnPr6HSzohwvQU7c7Ca2hs2eFwVnA2mbpwdbuxktUHtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "352DZrXGZR3dmGbS3pJDTMmkjVgujFQnEUc8mthsuhAH8ZoU7cra7Wpe6avQezP3x746FNCmp3sEhjf97BpqZ5Zj",
  "key1": "3t8vYvBVy421QBwAkHuRtv5ALvDtJem7iZ8tRYacL3TBTvLo4WurZ8GcEdiskRhk4J8mk55dHrfLB2VbjofqaXmp",
  "key2": "3HXmu6bzpMysjJovJ8WBtyU4L1KA8BYenAvPrGH3pMK91GVLXQLH4HNXrGsoUej1wuz9om6T2utexF8dY4p2RPBU",
  "key3": "4gqBndWJ7mG9JXvt5beHMsYirg38pgWoyKzeZEScwod9Bub3BaXFnEkACbJKRv6gg7JSFmzag2AfZ7AdvGMBLpar",
  "key4": "2L9wyf6SNUywb5Qo1RmUodUeqHm7kKGi3pcAWLCFh7CxpZqQ8kyrJRnnheLjDZWLDHEnuhfejwRmCFAGceHkFk2x",
  "key5": "43MoU4KypqGrxXXgeVEgouzYjdBwGgqQPAWMF78vGspBvUvTZtYCKqxsGhsg6yirZhRyKe3SA1aN182DVoDBBZKF",
  "key6": "3y1Sn3zw9qnk2ZcjhgZ4a9AHz4TvnJFFM2JsVYFT1yaq1u1bNSy9DBSB4T5bi7ZAbcJp6ojjLHwwkEMVZfKifp7K",
  "key7": "GCKmZbjQ677tDPph9NSxPqMzFipYQmvyqPtJFowYmJLjVXtsmP3aJ756a6ANMP7N7x12Xte4mtRfyg4XZPjdYz3",
  "key8": "239KZw4dUc3Tjip8fHgri6phkRa9bVbNdric5aTMxvjg41es3PMoN66YzioZh28VHsGcgQKxFLaBcBHNTkqyaRGt",
  "key9": "3CVMwUQ7MXPyTA4mPB6DNvNonK4JjT6bv8R1Ccfmym67JiLZDdgCjDzA9Rz1NkaFhs77m97ao6j97GF6VexMapNB",
  "key10": "zAY2HaRmqaGcnKykhB8QgMabhB5pj8hQiLQrHYN4fkCiaGEbZBijWvPAzXmDUaFUgqStKE3V3EX6m7VbMhxaHuE",
  "key11": "5XUGPEwqnCZBC2tZPjvmgx77EXCyFV22cdX7Lii9QeKPvV7PgbVus584db7MZJZDPcnT4RnTG9764jFbwbAM9brT",
  "key12": "4cCKV7YD9ZZPKBx85QnuRS9wK5fCFvCkZ378xN4QsDQKzQhYnQfx8yPE2M9BvL27nQbMThX5yhxfhfWUqPfgeETQ",
  "key13": "KVmNoS7Yse8axcMRGjvPuEbh7boJq9Ri7MTkPYpcXxXwS7BkYC9jxMS3vbexsyc3zfWcqZCcJyYm8nNWYEqLcFG",
  "key14": "5e8iQGJNXQ6SDs9v7TXZ8VyA7DdsnsYsMHmzShtGjS2efhBj9xvP6XHPooVEXy7CY5StZ3Wd3Z8s1TvwqPiz5oYp",
  "key15": "5uMnGZmGQTLp37FEwGagdjibDfBhdzbDc66j7VVJGFub5wDUh8MnuJGH9AqAB8dJFgN86hhgq7NnCKt4966DvQQv",
  "key16": "3gAoeeiPvA1aBZuCpiQDHSBppifdWm95BPyybaz9U4LnNwRvVcuhWH7zoWZd825CdTf26Qz5zBaNNCUvscpPqZsK",
  "key17": "2NFXCqS8nfCwVAEUKFZfxQVZTHqTGFbdhFWf5yTW5Zye48XZMMAW3Qmr7LLC6QTCex2oekfCUUjWPymhnrFKPQhv",
  "key18": "3xw3WJ4qcpcsQHybHJ2mqQdEzYFb3kqxhbq9nZbCvv9xb7Eisn3eJcLsWmmZT4KfADdng7GJgR3n22SnJA8QEYNR",
  "key19": "f1FgiMJMaeXHazkiVkBGtYqLzkPEdaWEDfqaSGQCDvvt7q6DX2GGA3cb9h5vKrSmQwh1cng4aDAEVVpnSuKJuLA",
  "key20": "5Jk8VFAtCDDq3mxvbBewjjCWksEQ9A9uVKat6MkYoQfc47ks3NFHeEUbTDS3hi5dCh5LCzoBsFi48unVcMKuhhRK",
  "key21": "2f3RPb1FUpazu9E85qji2dy3MRqHvscxvRs7eN16ByvgKfLh2Lryix1x2UaiUxfKUKy1xsxvGdBvjuBUAuvNhU5c",
  "key22": "62wR6fc5edeP6nkHnszUvpJsEUqR4ekuEe2yrmd2WSMPrnuyiBBZK3uozL5pPHmUWP2wBo1a6DAW4PVmeC2sAtPN",
  "key23": "WrqkEQJs9r2TdJ9edyewqwARjxBuLSWpnUybteviFjmud1T3hsdPerJWKDdMcjbSNUUBhmcEhi9Y1Dmqe1wfCe5",
  "key24": "F5FLbEf7Cwad5v9XAgBSXiA8TyVrnWBV9xwhxsGqbLAL5eBuPzWrFbXnrxYZXfxBaJPR1NgNaggaCwa8vYJ8jj5",
  "key25": "2eaDThFNvPCYFPnrTm17zxaYYFRD4eHTFsEjzsWux2Q7Cgd8rj8J4dxo9yrjSsM5rS5BcYKYBzLpPXfSJz1Dw2r8",
  "key26": "67jQT5rHpfGDGZnvudix8fzs5TnDkHXzS2knHBXUZmewsySiBdjG1thKnQHvhqEG8N8DVmMNZX1oXoxhamejDfrZ",
  "key27": "4MNjcWrA6UnmNvR7G2tBCm7Js33xdQtLYH6WVu8AY5vDGQJLP4ca7HT7om9JhPNtnKMcqruFWJtvq63pYVyoc5Vp",
  "key28": "WZxrV84Hd1gtpuh3pZzzzLaWiQqJzQnbmm9oS8oQcMBsZEePt5jpVrE7zEAgtaqFWJfEpvwhu3x3p5xNpN4gTZY",
  "key29": "d6JQg35MZPSnVjaoWbgWU6SQMCJTENjUR1yENdwoCu1CuEGPnWnMfqgaWCmrVo6Jqve3MHMCmXnKNk3SFh8Z48K",
  "key30": "3gih86N3tquDcVKs1Qniooqigj77GMDD4N3KTx3CpBMnBML63ZY6XxoUbqp2W9SaQ3EhmK6FsVsKQvP3fh5b68Hi",
  "key31": "5sN3P9DDuinTMKkvzN9ts66YaeNTdeYSZKRDRCoM9wwqgpWUD5kFzj1b5YtfH7am9unVzCbJ6Xc3AjjQMbY1feCn",
  "key32": "2KL5CYvYeZZ3aUnJuwQoRWF2F9eSnYNznGYvkHgRyoxAJbBNxagBKrah1S5aFYVQjDLCdjCAQ5mwnXNiEnc4BPjX",
  "key33": "5miSUHs4RYMgBBWVc41cyJeC646HFihaXhBPQhbTkS1CTpHe16iQGswheCJ4pofyYQWBpHRAH74gAK1Hhq4vJhJa",
  "key34": "5k72b7xbYfw39sSzdTALyJzxbov8QQdMAoVpyr7Ut5jjh3g6NEuwXsRcpk73DqH11Gf72RCenTTrWNLHxa1jJveJ"
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
