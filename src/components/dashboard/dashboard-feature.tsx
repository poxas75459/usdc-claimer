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
    "4yPujU1xUmE18wrF5jYgREHKQhjuVt6BJm1jrwEiwMbqo5WhTSt2vDB8HsfSdkAHvANRe5pf8DtuSmp8rPKLT4Rw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YxZ69niiRs4L1TVba8uGG1ARxriHBsXSfUb9A5CYieZkzQj1PDDjN5cxhBU59D6yQQkNNpLMX2ksV4VokGn8ArH",
  "key1": "4CGW2cAs9nbxuzUC1ckJiLvKuQq2SM2fvLQQJc7guocT5HkcdvYRRSr1ZfK5EWw1FmChQjhsHgKg4rBQ8HWwskXC",
  "key2": "2vajbcK8meGCHDmpZxWibHsVqGh6D8WjAGqn9mFUj9JvtDxZ56LBL2NJc7r12VU5jCRioA7bZuYyHKbUZKWZr9HR",
  "key3": "3A8XFibVjUTpJbCr2FeLGqjqvVpFZcxA9mRahdz3fk4HEZYh3H5mC9bq9Eq1k1KUdpbypChQCTLaWysTV896N4co",
  "key4": "2pY5RAEsmVEgaeBpHUx2d5HWDAGLd42VpDtGYuqNyBmSMu13EES5D7cCya7gFhSkojPpwPUFYrDSDYtwMDYijgYe",
  "key5": "2Ad68HpLejTpMLhqskDzRrDojN5KMmPvGP5EinZKXcE1eGbtvpeXDyhSgfF6yhsbtYjH36pt5ri6zeWiUHno2Q9Q",
  "key6": "3QraJxrs2xKE9DcHGf6VY5tmJE9qf8qVnWSWfBMKcx5Z4SySqUV8HpMAQeQFUcDykKkGjY3KDmHU2y7Eg8ynzvEm",
  "key7": "3uMwGAyFDXyDEcFSydUrLMd6NCCSPB5UgKBtvGPYW1zcbuLmH1NdJgiV9ueUroDpwjPhCbeEf5d3VNYU75mXaeuw",
  "key8": "5z1F2QQaaJgFDEdXCKM85xsenSCC2JyZHs1Unho1Y91CqcNAjcWhqFbigog466cf851eXypu1XQ1JQKc5Pi6FQgQ",
  "key9": "4Vpss19JDLyd5SbA8ouF2SGFtq5gmVPqJRYFyGp6Us3c332JuTPF2CYJJePnnWjmMzv3tfJNqyV2LoqUAosqBW4Z",
  "key10": "29HXcqAGkAsuTSeh7nnBK3gkU3MKhsib1ScRdy37yrRLvHN9uTetwbwhDQRgGa3jHcF6xidGCSxchXkynjJpnvey",
  "key11": "51pPHvpSnuab7VCq8hCXpJWiywheB7ATp6HREGxvcxMcwHBDCpFSLKxhvGE6YTDubUgkwfdrgMyhK6XhSE7k45sR",
  "key12": "4MZbVwz2FhP9MC7vt5BNen81wpeBrPe6GDHtwfqwoJg2aD6i1HcZ3xrRHaNfqga1nai3fbJCgmU6Ljpp8JzoWUkw",
  "key13": "33LpzmKze5r51siokkbmFuPzPo7h8GJZKkH2hyr8viwZUGjsKfy9hrow5VHBwpsKcXh4r7Ke3dM1QoCSvJBfFA8a",
  "key14": "wYNTL5vceu7EFyKd6rYpbUq7KFGNqGLQWnFHNssrqgygvU817bLCTeUpzL25B7qjdbDar1gExqdQFAiQJuQeBRh",
  "key15": "t8uKqDCxHukMXpBtu26Ui1tuszxwd1GdEWAYEMWHFrgUu58gA3DgCFPnLhUDtkFQJZJqcpXb4KQGZP53b3HctUm",
  "key16": "2BqGUiw7WaRcp5oewd6bads72TCy1BTgTvq2SpE7EVBtanDu1wpmaetGUMyaS2ou6fXk3Fy2WdoSYBjkE72h193u",
  "key17": "2HT9n9de8oD4APYrR9zzdQi9zZQ66JMp6EDLC81zhyk6Y7DzewCuR5SBK29UYZRYX2QUjkpRcGxQ4px7JKkFoas5",
  "key18": "2h5sH5GgKv8TyAfpyroJqsAmJs8Abh2JzUiSqCcQecDtvmkXRX8utCTjLpEjyjPHXj29xtvqRDPdEKWivFk2dV8s",
  "key19": "3fN9RXTPz2hpurVjC37Q6WWfvdHSocdRWgjUpNu8Uf3wTJ5TKt14xLWza1BqLX6t4XL78crHW3wDSk4iEDiSGXpJ",
  "key20": "64cvpm8bfbNTLaWHCBgHp3QQcxaw9yjGE6pAqaTgvsmgR2qw75Nhjpj5f3YvNmTXUc1gQqv2qx4mhS5j4Bmv5bge",
  "key21": "51TPWt8VEDLqJewvJKSHaiQjfondNxqp4yJKYHy3GrpQ7NeJ6bfrTprcBUihXi7Gr47u7EaGKYWXLEDig3U7zPsn",
  "key22": "ff5YFfV3eRmVYu4PCH5vYbVXuVRDhtFm89pq4JBfVBv643FnQPoZAzcFJGW9KmZpSdJ2aLtAPds5taxfwmbTtQa",
  "key23": "2A9di4ToBBcs4UpymeeNH5LLPEk3w9wh9eUhNvND2EMfvUPyZmGwcjwJkeF1cYTR8MySAT29Xwi5a2o9hEsMvVAs",
  "key24": "UuNR2dCDPgtWfmczAF6szx91kzZ4C8CnU3FAGDR4Cn4WzEbQy8DzF5nSBPvcMdhSqY8Z111KYNxAyCBp3d7kB2F",
  "key25": "295neXEc5TkLrDRutvHuMdCfnHzZFCY7VQ29HWpSRraLX82ajfQT3efNN6PpRUJkJohPHQe5yr9fD7LU1HEGv28c",
  "key26": "5i9RcBSFy2dNSkxYEPma5eKmMnvvUZoNysWXgRBqFLiDZkQhytxq3PwHkqfYDLeKCYgpGFPp6Q6AezvAzKjKF8yx",
  "key27": "5dkCvirG3rEtWP8sWsR17iP5GxvqMhZ9z7qyfcfV6sAE3q2cgiAKSRASn9XZT4H3fdG7B9sxpufCGDeRVtdZtpv6",
  "key28": "P4DsqfEF1GjqxfGcMHB5HvaZ9Ptm2TekBwYudGBiBDk7Ar66wB742cBrHGWKzca9qhpCLPxtrMCAKRJxyNU45kN",
  "key29": "dtiLE5LF8qC5hBHr6ovWRJgqqmzJuz1rdRhTic7L8tp5XBjRuL5FPbRUBqaU7UM4P8D6f5rL3bFUUpSYostXQfc",
  "key30": "61QXfRUHLAqxtbTrGofFCJXCs7QJoQZswdhDLyu4Qp8JNTAQqi6gx3eTfRAQxaU1wLLV6szWLGTTyU8Rvs2iMtar",
  "key31": "Vi5HbjHDBZULUwvp1NafcUmMPRycsnhRvNM6uvzhriMK3QsnY5xzzGUZVJ4SAwSm6ZE7fgjerQT7qCQdjwV2edV",
  "key32": "ZRQxNHwBAEprT9tZPgL9aTWzzxc68cDCqeboLZuev9BMgMmrGxG3H8qnMgRe2GodtPdFdyDtNhypwPgfQdq6Bi1",
  "key33": "2GnRpmKZCrKLMvFYJXXwHZ1uhLWtqP197W23NDQ7WV4t4qGFbRhqBEzuzmaqXNV6219rrTaN6wkjwiJ1kkCCsGZp",
  "key34": "2o5fEiRD85dxZuy6TpnsVukT4yK3HsdDji9igEXrzQ236uMrgKXNXnjSA61Xe4GQdYpKQSmSvSEvbHwLquQUBUYP"
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
