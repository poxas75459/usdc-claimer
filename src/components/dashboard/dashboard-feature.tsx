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
    "3Kxk4F7Lt8rAVyFcHvPoL72PUBTXxNqqheBuR7GeHjJuGTekG1GDRidz3EcRStoDLtzUUdsZAe9HQQHe3L4mTWJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "16c6xi4zuHLP6BzpZTWfz82wCk6T4ww9ikuEoGvhHkBdbABe1L16XPwVYwEYNbsRpBL8KgnbthD9aYJePuKoTe6",
  "key1": "4hB8k8SnGz4fmYRZxH1svueqiaCrN8a4LAzkQSLuxWVHC9hjVHyt9uiHHBBEvrsFtTGmjmFmMwxVHhXago6F2yhq",
  "key2": "64Ps4vAfsDHbBfCbPnhuVeCD1JTKy73ctMD5GStfC19KFJMUYuNybBrJCH9RRg1taTqi5FeSV1urtPdcpyusebeU",
  "key3": "4FP3RrJyBfgsp69jTtfQJjbrz1BbzkA3WxLrp8mGk9ucRoF4z66NmRWXAFj7YEBLT94QmJUVTEK3cPyYRa5dz3Bv",
  "key4": "66BzMuAGB8CXnggdKDH5Lz3UQVTSMgKPSN6hdrxdjzBHALgHjiphyVW9BURRxn6avTPjqZuueMhgXgJmyx3Yzafx",
  "key5": "5YkwRvNd9retYQ3EFBt3iXyE9GXwn1pcoT98mFzn4bfyv7b1HY2gyqsDh9v3JrgL68wRgMaqdPNDRSHhzofr49qx",
  "key6": "4HdxbFV7QDZtFodKzB6H2sA5tFjT1tGKJ6SuPNpfcy7GRo4MjLBHkqaYMUosk3mRkyzk59MitS6vT2KRMHHQcDVa",
  "key7": "5BGGKCgYRY8BY2GnBGwX65PZZSvxsvR734W8Y2aLRkLvo3ckpeeuwgRrKciNUqRPZzibk4G3WojsPCSo8LGZAnbm",
  "key8": "37zYPc3cBXbQdGsaBA7Rz3yUnRAAc1zgsS7GHWHn7pAPE2TXgB9X9tm7SpnKVfzbNvg8tzmKoSAE5obaDd47Vv4m",
  "key9": "5PYqYz9BKp1UESQAhusFJvPeDd6vB8Cymd9SXgEhi2qB48oSxbeKCfFNEzP52odbDi7eKS4sw2Vz3wuD9nNWFLJv",
  "key10": "2DZjWmKVE8yEDZ7NeJEefWRz9E5it4zf54zXgRz82a3wTsM5nnrJ1XdtKjgeDMhwSLFhayAdiBNPgNhr2Mp6HmXF",
  "key11": "Jtfc7NCdM9ebdd3z9AbP5mdvrN3t99dhEhEuKdwGYh7CYUp5wT6aq9q81QJJNTLYLHwKttrFDGr4Mmp62LnuJpt",
  "key12": "tq25UBRdnKBsFAgUpkcLeWmV6n2WGEqjZDJdqK9o2r7FSqnJGFee4ZFYZfsoF3hNqgF9WAdauucsWdSjPZgmvKx",
  "key13": "2XB6oEGrvdXpV23K7QQkKAYXnrrAebDd4VE9cNZPfWiTcCGCw2Xqks2HJpE5ygdTJTeq44VqH9dDjPojEx3z44Ui",
  "key14": "3JyqxpJbY9YxxWRBfaFTJaVhonxiad5rv1GH1Ab4xaHNTqhrH6xcZFHqy8tPXPXsBMwtKM5YsHQN2xywyf2cznyc",
  "key15": "3VwG7KvVnAH7Gu9tsDdmQKtj4WXkX6a2RuwkHsnNgD1wCJrAUYr8qZeirivnoZseSNRbe2wuYpxCBBeE38JyF9V9",
  "key16": "4g8o6FaLiA2r8qSmvjbUbFXGjPfAm6NF342EsxnSaUDQoftgSnafTosnfBFpNxyxBnMuhVWXxeKDzh5MMfEWNYXX",
  "key17": "3kYdubLKtXa7Gj1oYqD5ZwHBLeWgc7iGMTMxeW5U5prSwRyBNrDsmdex5k4A7CE6Dv5pCVJo2EEHZEfnc3gRsSZn",
  "key18": "37YQ9XXAwNeC6HyNyVereX52FDrBj5Z9T693ZMYNzNsQZANYSbppbLC3y4KAdBoExCCVgvDCfYuU4WtuJTfNVYvV",
  "key19": "US2Y4AQq85v9o26Z18Q7RnVWy86DmxVZSqtphDr9fJkoGiYeGqpmwpTnQgyeJxS7JaWv9ym8q4fbHZzxsPb9gLd",
  "key20": "3ivmJCjEeQg8p446JtS91kRNo2343D3tfFKNg3djtCUknYzfUnoDWb76Edy8dxzh4xxsotvW2SqcG8MqDp1bqtxK",
  "key21": "4q6bjZ4neAa7eQ66Qge9Nda2iUknwc1vA8gHpovDehi1oLHS1k7HQrUd59F13KuZKJGLdKZATTobxdxooBVkeFBx",
  "key22": "4Q37W7i1CM2SKUZD4oFgFQWWBohWPRhDnbgR5BNXpkAw1mgvoGDs3K9dVuTP7Wx4yMnwauyqcAKEHhWGowcvYEqu",
  "key23": "2ZkFJFqPRVxcqrdeUBYm6YNNuJ5Tr95wxwiAfkPKiNwWbU4sMf1LdsmvnBj4YLFgzAcEwDmWcjracViorx2K97g4",
  "key24": "29sAu8j24YsgDtmpCQ1JQ42qcmVSFy1tTUQEP6XGLDcfbT5GpWALk8fSmVTzeycUiyJU4jyTDT9aZDgCSpJX7it7",
  "key25": "2VcqzpCMRTfaiaZB63iDPRbEPZVHAQK6i3x25R2NG3ze2BjNY9uMckutk9jvyPHhRQUhMSVTaE3Ab3hR1q5VhgVq",
  "key26": "3eLE6BAcUwm4xUYRG41zsDpcPA2jR58GwYmR726EsTe5es6pcDNav1MXbxjLYxjUZDUuEUTUmoKznfYKF1CVnhA",
  "key27": "3Lai8YpFrKRYSTCCLok68ShBi4mB3EpHBBgLtBweQNGHcpjk5tPgu8xrBLtuooWeaM3ksX3wQZ6kE9cGap1mkWCE",
  "key28": "63RezeWxXUwpw8NS4p9kHivELQY28H7xmGri9RMZavHCgfUwbkh9eg8wbYKQjokNAwhPG1RPxWgkT8Pu1H1ytToY",
  "key29": "2qwDkoiAai6ztNbCjmvm7VAXAs9mMBHyvaEY8nCmvH8RksVBBr1XCtmda1P3Xe8pjteYSi41zqqczN4c6eamM7eB",
  "key30": "4Yi61F7s3FQEnHrD3eUV4F943UQ3CdSmAGQb4dbyS7RTPR2rgZ31CJCshZGRzHBmSJjRD8E7c9VmxgDvbXG3yypk",
  "key31": "4uwrtiATGFuDqhmSUhXPV4po6LXVmMYPYvHJpsEBGUz4hDpXmHrm6N11yaZR8oekmw4xUdvJcD7ZLqJz6RrYDkFR",
  "key32": "3HoYVsVF78B2Bmh3eRYYxcQhnHWNrMxFvqgQMiakMGqQSbHavZp3oGovp4vTWaUAFfzHRuV7tzevKm1AMFETk1ce",
  "key33": "5tUfteo4fRGjKbf2xzhW7MJqXKdEcnVU3MEYBcovT63dTAz89Secp31LPVsC6wiaJZEjYHyQWeCHL9AXj8K1mNza",
  "key34": "38qQauJy5b1QohuHcGUbynzLuB6BT2WiXDTkt4UgPp5c3vN9T5d7Bh7b93LPH23WSA73kc2GBEvd9MsSMdxN2NpL",
  "key35": "272pvGFNeJTe3jaBJpcvC15K9xn4zcdKSwd6ZBtcFsQmccYWwbqMbETmVNxQRFYrYAun13p9sDATpuVB7ppwDso1",
  "key36": "3gacJJbnofAkWteVApc7HFmFobrG7NZgLc2iasQubyqEWRRMHTQGWbhmFFj4wyyQpmVjNDUpssHQm9zwP81owpx2",
  "key37": "3yrkeq8NfBsxDdUSUnD6fYqXC2YywMb69nhauJwtpYLbKZgYoEKFAg6BZFWbdvwCB9xx8pKnEquBTNxSnDsYvjEn"
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
