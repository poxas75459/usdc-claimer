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
    "2bRbiCGt2UVWKixfL7YoMMjiEC2gi5rd91Fjj1rS5vSU6mRrFK7P1vM9jpLPeRzdSaEj4Xs9d4nqBSYZfKLc6LTC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26YNx3psDAacCDvaCTyWkY27MMYcyE4VNxrQ9KhnASGwivYsEcCo4s4eDViwMLxN3AVWBree2AiG2vWfch1LJYGe",
  "key1": "2ehYvN3isEPkLRt5vRKALhaAJTK6VUWeaxL66yRzqNGwqqAzXGgaxWQgQMd2TnW9BxUEoK8mKecfzBhU1ezv8ikf",
  "key2": "3aK1avEmekx3eNNAWH2L1HoKDAu8yT52yT4AhTtQB5WWwxG6i38gdakqsC2rFvzQMxD9s8v5Ar7y1J2XMEiiwzZb",
  "key3": "275RYxBe1YNyFJAwNY2Zx6rh4u5i78ZW2P1qmdYPEL8kSBKAAJFbr74eJM6DFhkCEfbVNwEVyL48TT6fAPCphHyJ",
  "key4": "5RxbutXjsh1i854Bu34omzqDTkCoyoukjg2Lz3kMjH3P7vp6fHN5V2pZZoQ6ZJQK4e3tGA6WZbCCD2qTKFaMFwze",
  "key5": "3SWmViR6nrgrvjUWRewYECLBovkGPj4bxvCaJVfsqrDreyFT8odeGXbwyYtpAtxLsVRnUQgAAaH16zAGtZvpzWCa",
  "key6": "4nSG13Pdtt4dDcx9YXAGedTuUqhJZdWWcjojvcuosiiwLhUjjWiH369v1adxSbHs9HBq69KywpxWMupSM8Xt2ziZ",
  "key7": "3ZU4TxTzQLBxMLzbsCY9kbtXe4wW68ku54bc3goGnfaA5SJc72i4ppE76FZm1D6afpT3KimXEeqKm7iB9GRtbBRX",
  "key8": "2pA8vMnr9vAJpGMLrqUQi4RSdJCXzqkm3DSXNXA9xnK4QKNcXnMWGbHZVspCXz2wUrbV3SJq7v4n1QNfSjGFonV9",
  "key9": "5ajx3RruYfrsdRuRrZPns4bQySoVRFiLNxj1naz7WTUoMu9CcunX3fvGsonS7avRWG2AvQhfrL86r5GWQuSK4Bv4",
  "key10": "2oKMKB69VTAhVKiM8utKfQAKzzo9Au8rY3bbWJWzTDLZMGKceVmndGh3vi732hgYEbNUD3sWdn7846pvWgRP2FAE",
  "key11": "4dQSjHPxyut6632gPWmSrFbkdXJt7Bh2mScvu7VpU8o15qnVzpzSoSxhfKuUyhjThYuGMffXfaE9kk54rZV34xyJ",
  "key12": "3NBv3uS1Trr5oMHhjbUtfo4i4FP1C63DndTqaM6r2m7wpz9uMqdhzdHsz2AxAYHtg1Z38VMNH8U5oYuRa9EToL2a",
  "key13": "4kTTX6nxRv5zmZZ9GZYMAHq1dbWRfbMZXh5NwGSrDQwrc6eBVouAznhGzdPnWx59JHksPibEyTgiaHZahsohiqjN",
  "key14": "4hGr3zJEHepPzdEVYicmXvX97cQ2fM6RCmTyp1D4UkdPkAeBFfR87sfR7pLaVvHeWCkpkboD4hHzpmA5TiC5LiUp",
  "key15": "z3ZP1wFtr8K6kPzsjHMTkDEQubHMSS81FjLbRMTHuNnJYodhxFzfE2DV5RvqMwPNtzB8ZZi92T9LXc7F454zBQE",
  "key16": "5dv28QFuwdDumFXPSbYHeQWnQYsXshVYZKDG7BCqBBXam18eYs9vbhXMkHSSHQJDB9DorN697Dse6ouV36z8aviz",
  "key17": "4Znt7BRqALjzXqM24RGGbaYm4oTkF7qPv1mR6PfnRWxmXZBrjbbNS9D1tj2vGUssZa3g1SEwVTrMHrUfdnZgRTHi",
  "key18": "3pvcS7TTAPh8EnFh8HA82cuG1ujcprXa3sffVJjJg8wRa8BrWnBYCRdQ46uA6LigiHMofVY3dwm7fRMxL2MgEeQZ",
  "key19": "Cdk9DTk66WEufSjcdh5yupFoPMjh9cRWNryDaHFaMQnsFbsj7di3vcjUx79fYWgYaaGBqB4kFLobEa7T1nnmxQU",
  "key20": "4mutoRyJVem18bC82JxASkTJCwdb5UpJkoFvpuL57Y7Md4Up1NrWbiupnfngzksygeYjAHc7nU2NratMhVWFZU2Z",
  "key21": "ijAKYE5ihFSrJmcVJZX9BEKrdo8KGT3H7Gx5AtW6eSeTj9HHzw54bswkDBpKcXzCcWh1QoP2oXF7pteqmqZfuD5",
  "key22": "5nGxnFumARboxpr2UqVZ2VCxuY4z6StfCRooKMj1iFLuSxwLptsbCRjzvDSXWmGDNnAmNxcfoFHx8Wo5eoJ5DaAL",
  "key23": "5eFfHuPdNp1EBEknA3ofzKTZ2W1B7egzu6obWY1MxFhrK31HJR6xmqDczFK4Ph4TW4p9jS8EqRodCUcR4ByQmxtt",
  "key24": "127Jbv8cCwYYZ4pvn6LVhzScQR3FETCLnfsZ4C1wA3WMmgWVJesvdeeq38iPqmqRAA8HdW9FdfM15VFWZ3A5vEKy",
  "key25": "4r2ri21F6wwjhF3MNTXL8AK6tZfA6e4aVTqpiLSJ7rDXN6h2ihUGMGtgadw6RWdonQbBRPtCHq4m868gsHwNwjMz",
  "key26": "5E3nuKEoNXAVV7vmCLM5i6Qyc1BqtmeBKiL4C6XCDcZKn8U4a3gYP4YCv3ZjVzVoPiaEgyjLhXEyhi9Kc7Zai5My",
  "key27": "2QhxXaaWpow8JqavpPEqVpJLMpAaBNfjFhtU9F5wjEJbvsBuwjPvRR2tkrDoqWQNwvpjjhocXf9sx8mLsetDXLGo",
  "key28": "3hzLUb6QqQMybJ2VsD3JJz5t8fJrsjsvuUKmjF7P1YWfeXWFsevDa97mxFgpXnodsbo2AfZDzc8VAPfSc5DRvUfR",
  "key29": "4wotdhoj6Z8h8GQeQH2bMF1BPc3oY34VCqBDAuuW7y7q8zhcbkBcMtfoUQeGhX38sbaZDfA2qkjZXfBDLzirVNWB",
  "key30": "5ndRg3pSzYwjYAKdCye2bnx47Ktkg3cHs2utmuoNnodv3RV1Zi4UNrxhACr2BEiLMeUGjBBWetrxuVegmxzszHeW",
  "key31": "65S4Aqi9LqwHYPKiQu8m5V6ddRDMLoRTBvRfHRDCdGWg8dvNWeC9ZZLv6FVjfTocX4zXEPboQ3DLfXezinU2DVDX",
  "key32": "2wHzXaC9As5bpNd5E4YwtuSvHEC3ruHmkeArc6KnhwMVxs9bgeKZqXrHcWj9T1QhYFi9DZc5Cb7omiWikyhdGJfN",
  "key33": "2st59BzHCgPM5VsGYdjZd4fwNAfLYWnMwK9ecjfnKmfRPiw4pxvaYtAE1oEcfDNGz5M36n1jqn7csguj3TYsUfcS",
  "key34": "58Ln6YFUzVxurUFAP8CwXB5BMDxgKJHGAv9Do3687FptSSX4WukyRmF4iYE4g3vQj453J6MtWLZFRbWuTL1rU438",
  "key35": "nRxLjqHjEak5pxkUavpqVf1BJaYJriFA6rd32bTsShUMZ18zEHZEMJfkYXxYYxaQ5ucnppji2Hep1EKZBov7Xis",
  "key36": "3Lyr7PXAyFBPcULJDZoPjgQbCWBa6iCVzXKeCanWC5Xk4SQM5WYeBcGJMZPyDzCRD6oSEdNvfkBc2HfYNJY1MuDe",
  "key37": "4YZbJN6DMWkaEtetBCSqNQsv8paEGAnWVuHZQj1AGV42SzgVi7abJyZAa3KYVY3G9B2j8VuMCZtYdWzdwAZM8oC8",
  "key38": "3gAX59MiUGqwYdjBCoXPUK2JDnCpyTp3b1ZqSSFP8bDHqhtiJBAEPrhaTonh3ys6f5cT22Dg2tTMgHNJzdbgeW63",
  "key39": "24TXtEFTrF2oEk94zMgymA3eVmwZCjifq1zj61YxGZwv3d1wMMfCx718RXW6YujvRiU7npYAH5nneifAPECpRwWX"
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
