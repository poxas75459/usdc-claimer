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
    "22kwzrZZtCLn3QZAtyB6ckeaHRTPU3Ka3a4bLaN24HK5BNhb7T6V3eyGNuQY2LuapNrNxmpDFU4qhNqd425RYWMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9HFUhwmv5YX9AXY996ehfK4RDA6CJN4AqvxrniTVgukrDxJHMg3tZL6c2gJg7jKDtWrsSuTkyRFNmNWwvnee9s",
  "key1": "64edTvwopim7Z9Gbew1oXYsu6UJYfYZHZVphaLYG7M3HPGoXhzZRfp6M2RaTTHMvWnKFy5gxbHm1D5SwWwMj8YSB",
  "key2": "3Jqm1HfVYw34eNFeAuVFu7xNckrx1zA4t65RqG5hSpGMMu9DDXxwxchUcBbdWtfpmMAPRoRdUj2ZquLZa5mgNwoD",
  "key3": "3ZNNQSLyzSnPuWQ47x2YbEt5QH9tL8CNvGQum8Zs1RJ5yDECroR8iYoY75YQFKDAuorYbbf3fSB3vL7RuZT6ZGr2",
  "key4": "x261v5WRDDpE91qsMrjt1QPTvg1FEdQEKA3AXgYJtsnZwdsijvxALrUYrJ885uBYj3rVszWJvdGhAzj59rbGVXN",
  "key5": "ea7rkcsY2k5hgjQZbv7tpBiPq9Nq3jYmWq9Q3jLECPwUaQaKrimZue9xjZu7M4RN7aD1oGMA4knWe19hVbDXvHL",
  "key6": "57U3weWJhaHZgv2gsscJkr4TVXUGsEgbYbcsvYuH8RQukV4dBuxyDmmMiCPQq2inUkeytnTS1A4Q9TLcfBjphWnV",
  "key7": "2qTgYDKMexxnziZSkhz5eUcUBoiVxTgSYzyETnF5cDKXD3LCmrbNZgiUC1gsmq4jDkj5qi1DDBkQK2rARM1eixMP",
  "key8": "5soTmr4kJ1BR8ySWLnK41cpy7dCyBtByFcEdJ99eSHaxLYiyAxZDsf8pF8jYTqiiQsng7VrAsSQWPHxDUziEiW9s",
  "key9": "42Mseyk777Ze7SJ3WkkJja7CSQjXB11jsqNS38Ph9yYaUdipuTMzgdYuvARyo5UHhfbpPrm6owrVpqFR7vRJfwat",
  "key10": "2ccY8PmwjrtxPSSaQGEQ3ftEDgBMLUyADY9PPfcxGcAVUyZ5YsbT2jKQJg7YbN6HSJQqxNnDmSPMKvwwU8D82ipf",
  "key11": "35RaWR9Guuxc1qTj7wwn25LbZKGPaDZa9K4N6UV2UkE1Xrebj9iZcqGTMCkHpSoWvmhX4ceSViXnzH5pM8FBs8f1",
  "key12": "27XWTRpk3Bm2ndJDYJwC5jjA4V9ek14moZkpH9ZPDVBLKsziKTv5GGRWwUBz9khsuMJvcrDRpKoibmTob1H2CBsX",
  "key13": "4omeHfumQKyr2agMDYEmN9RmobPE59AX2rrcybFwJ3nnomNQufZdzLJ7bhfaaVM1Qo1gkTnQKdkLubR1wiCoPzeZ",
  "key14": "4t3dcs8vPL7g3rFjwtGRZCqS6fjbC4aP4DaX9Zvv67iYrp7ijwoncWT6FseZsnjKhV8Ek8kfVP94S333brREmfnK",
  "key15": "5ir9LgBpTQG3xhTdfnJ7Zq8got79m7UYergWux7Lja3MZTcA56FRBKBgiUB2ystw3M7AMgV8pvMQfgxpFTokrb7y",
  "key16": "3Q7PiFtR95ik1r4cbHPvksgNy2FCEyhFxux6kPUHq9BDw9T2oUV8ABvsGcqTDa5zwd72PjQ5fQ1LEsL3SQXotqKd",
  "key17": "ycWo4qS7K3r2h8sxFQFgLR4pMALF7ETgHtatjVkGmSYBpnWnkP6rqXPRaH7GYSLiHmcA5thDknumczx7d9dpUAe",
  "key18": "5txH5htV9fWfr9FydWA9ao8qiYiRR59R6S6mjUZAN5JHL7JuWwarhtJHzDdJgdompxz6VfB5vd4NFVt91ag836hV",
  "key19": "4TZvh7HKvwqpLUpbSDKZ7n7GMVCtQ52ykL3RxUt8KZFcmT5EfyFFU6mvxPK7K6MJT4mt6iC5jpJceqMd1kkAVnLw",
  "key20": "3fBHBv5kECJjb5kNdNvq8G5QDLpogieJUBz8djxxDQYcew4ujT1suYweSbWfak8CQfseMqAKuxXdLpp8gh3hrwz5",
  "key21": "2a3kPGvtHVqzgVx8ccqgMrnz4Ge9upBSCVJQCygPBdjiqjMRka7dJS7yYLpWULLj2ZQGKS6Mp6MXoydpRkWtkkBf",
  "key22": "5FAvk6hjRkb4hgSpRWxBpS3vzxyQuDnRiRWzus4HfhA8NDyQZaePeLvSLjhts5LkaeVGgyCh4b2bzB9NJPmZMc7B",
  "key23": "54oBbSTtuFEaomBpkhAJ5xFTUcNiQW3VUF6KeU9hemqA7RZTcvgLk1L2wYuuQ8i5Cy1AqBcUXwzJhiBUEjyizo8G",
  "key24": "okJepjR6Kapb9XPQmVbqZJCXwQ2E3hmd87MjFvC9SZxqvhfXahte5kUHASsb3ezzFouX4bAwnyhyVuTChmkUwSE",
  "key25": "5Bv3gqjoCt53a5yRTxY5AHURDmeVBjN9s1C9fJcG6eBRhvDPbwyx66ntDKFPFYRwdnzHSP469LLLiDbFCcPe6Z7u",
  "key26": "3XkDfxLXyUF12roEeT2prDNf7nzHA9RUhKS95uJqYQQo1pN2YXMY8rFaMmUDQ81GFmRyNgVWcnRXbwc2jh47SmDa"
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
