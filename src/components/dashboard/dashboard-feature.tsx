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
    "39Zdr542VpLZXmCDMLQGbQE6QFCcXUjRmabnKgLrAzsqf6x1m4hDiS42ggX8t7wi5iauKtB96ALGBoYvzoUNZCWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LHDCZb2knZsLc8wyjmPePzjfTTJnAzhACEh4HqNgNbhiZHFV7c7gyvb6V34LuRKATUjk6Z7m4rNZqj3Qp8wa5qn",
  "key1": "5McwtnH5pSWABitjUhC8kttxwcNeW9ZUgobZTmSk1oZm1k3T9JEGXPUUCN4czwccqVYWK8n1ZWmgo1KxNpcBY85i",
  "key2": "3QGQc5ijXRpaN8woYfKKA6e5GqFAa7vR3RMAedUywe584UtQxiRSBAaBHvvBNpkUMS231gSkDPmBRj1mRfyVTACR",
  "key3": "3eTFGyw8A31EvHxKAK64rTCNAA9BLot9Seeffe38bUkbpYmFp1SHWcL8xNFK7iKzngoWcs18r6qcLiVSSgSgEVc6",
  "key4": "41VUy5kceCBdRoCQy5Jv5kxK1wU87w5X5BnHaJhg51CdfzLvDitoFUFxw4uuPzcnyEegZHeFVv7Yakm9DMn5FikG",
  "key5": "48QkTZJBrv8ZiNdSeKdBFb27SxXmPLxbvYGRAofn5uYdYVkraT35PvZdNx6jf6Eh3n3nBLf8vGLGrH9Ag5KwC6Ya",
  "key6": "4CX5KAdFu1LSurViuCJJkkSuwBHyyHu7qU9RhiMo9G63p6w4Z2Qb7YmTELYWxLBL4TetrcU9Qe7XEFe7Py7MPAjB",
  "key7": "6p5CgMG8m9XUvxgwpsm1VLAXVS9Wav6BcnJL3bbnXtqw2do8Ae29SEXNX6FQjnaonx86J1rHwgXGnEYpJwmnZHK",
  "key8": "56Wb2495tWaT9t8KvcHfkYAKCWmQYSxzzHZjeEBdCNqAFhWF2HsEAd4rVC7HtPCvMGuJSmrN553hpLUHCN6LHn5X",
  "key9": "3zqeZqDMUyr6goVVx8Z2aKMBoyjkh2ckjK75vVdbgB38NX8WnBsYt2MBhAGymY8L7webU44JGB1rSYEh6QT22T5U",
  "key10": "jeDMosh8J2YugupjCrP1irWhW1Ro7JSt5MiQA3aFLYyC9S3WgbDueJVa9doczNM9MtNcDyTqxNzWh1fB2sM2Gwu",
  "key11": "3PaHv4NKnMD1hmHYgioRMo8tCxg6rCVfrrM7MZ9P1jwYp2AFYPmnVw2JCj2SQ4RivaDMLVAT4Ap12B6BRZALQb34",
  "key12": "546AYBtL77fENV9PiUyxhxBcPj1XggyPrjN4NYUpaKrkZ8XR37CSNUNvXWFUmn9MJZLk9ABCdEo3zjkWiSTUqSww",
  "key13": "3As4qyWiJp9XYFx42ocDv9CBLUWtKMxLXM8sC2nvAYuPxLYqYe7LKknzSm8rnkkHg7t9epdyKUfKHgdEJohsaS1g",
  "key14": "5AZKDG74abUQygHwBqf42EdoySSss7ijARpWEpqfyTeaSoGQgpZTDYb682ciJDY7wUJ3haCeKdRhQhcKMBW8inp2",
  "key15": "45LCdRtasRpcX21FTtRqUbnTQ9AK5uUVYuFN2de2T5ijKHX2qcF7yZuruX3ccq57ixZRNiDiw6BAPnJas722Jxvm",
  "key16": "EjgFihAt3rB7wef4R61a55vaXbsEh6cuYrwvFVbdkv1tzZ9VratPYan2UV1A9gSe2p7RkDqZSJ1GxYv2GNexXk9",
  "key17": "5iVrhuMUuyzEq93WzahwFWFCxKTKveD5SPJ6PCGbWGNnHU9z5bw4M1LefEiFvXKeCoA8WYiYddKDRn4azdAq1Sn1",
  "key18": "64gavqLnfk6BV2af4k7LBkgrE7ujDxc6urLvv8WGy6c7sX3SWpE4Exkoe6hd93N9sRe6BrhVKn7khV7TDm2fVXdB",
  "key19": "5U8H4rh7R3ptYy1d8JyrqiwuWdUBh8ZKgUQ4QbKJLZKwtUi3UFM9spP18uaESqiXtCKRSPoCwp4ciSaYQmJQzstM",
  "key20": "3HbCjWDZVMQMGifdRHELUh2tfG7CbM75BJnsrwv3UL9kMC4YVB4g6TkCMAVoPsrvfJ5VREjSAWa1Zv6uAwT5o67p",
  "key21": "2Rpdn8UUMFSEABJBiCafy5MncU1aBh5LAYSgaEw58pBTr7NYxQb5qLMNvr85to4vhj3Tw2jPak6EkeDapYEQb42F",
  "key22": "5bGXcfR86WVtce1qZaz1okJD211mhoqs3rfxYkBsCBoZDfvF8y8gLoiGJCgqrZB56rHyMagDVjwLxdkh5x2uGw9a",
  "key23": "4Ch9WfwFPyizGhV1jNAKN7LyRa3L9A1rHNoX6RnoBKRUrRNkUfGfQfpmuR7Y1asQ88XD4dNDSzebBEnwLKuFry9q",
  "key24": "TQbrL4DBvMMJ3U49CpJzuWjesxhWvVGnszho9umCJM9cjWJdwJcLpUR6U9Ct1Po3hXH52SpDtaua8cSs6iu6RUw",
  "key25": "4UbzAkgZwmAuGrEH3gnMhjXbLpQFSrGsXJi7uTZ2aXUsjTVGCYYbgiVW93sB6mwp24GuXMMSWAcJjocZQ78bacJx",
  "key26": "5xoZ9UZ3c66y81ahA28zs6M42mGDfdkQHWv3gy4ePyfzueop2B2Zcbn4yJ9UF4ksyAPk3FEx7dSvBnzRZe8imwQU",
  "key27": "3CouKAuZLcptRpXFZmPt68BhxZNPujdBt3BThfSC1PJ3GSTyGEtvKznbszpZFShbMLTezvzhonFfWyMpQHMUYX74",
  "key28": "VcWnkPXnzXhYC5gdvSZyauiqLMt1NhqYK5eHXimMAQpger3TkQ95scbPEtuyeMv81XXc6twuTf6CWJGDCkRcdsY",
  "key29": "2pVz6Vv7ykuzEdwWQYcFKzqQb1VuY4WDNX5NqhXXb8VuMFq4LAUYEwmCViTsnYVNbZH9kupJVRVJJ7NqDPWLLXHP",
  "key30": "3ZTZ7iug5kKxCtnyKrz4WfXtFLY9qjmysnWat7gtJRxEF5bowTDCFzwUXLj1CvvHGZBRgMrXMKENB8qhX42HKCzV",
  "key31": "2mjm81BhEA66aBEKZEYe8JBHbv11iCM7zyYtywo6t8Q7Yh5s1YeZhc3fgsQUYuXdMgzykoS2JhRYJ1HFThzjngh1",
  "key32": "2FQL9AV7UywWCfzEVqQezcQbckDaQRpJBn5xgmeJVqDSPRDi7drt5ZgvYPwZG8DpCVaDdcTvvsAnQQ5Qw9eVCgaD",
  "key33": "4Xf2N8TGg6utiegRCNtNge2Fb1hDGiYX1C3Uj5HpUuWJ3aTvnrnFJVAEEpDXhJDwgii4ca8MWEfvRWWeiBQTc46x",
  "key34": "3oqZcC828q4M87E7X3ej6jHhgvy7xkmoaqLY4eCCz9ceV4uV363bNnRdhP4Y3GxPhDjhadzu87MkVijEDMtTytmB"
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
