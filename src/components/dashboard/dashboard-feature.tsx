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
    "5ykg3z5T9mxA9HRRD9B18RXp2vfr9pubNVgyvoVCAJMMgS9aFLkEgTQQtc87dSmvoiR2vLE26DcVBCZZBAoQFeST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u4FY7T8pyiuQSwv5vsxWrWm9QM9EkNWm94tAHfE6uT19YR1BL1d2Gc2sJXhcBoJrAB7a4vNeXhmjTzkDJSDvdx1",
  "key1": "5Tss5TJ2AfsxBdBBDVuXkGR42bDJBJb37wRfr7Qp9if8Zq1vG6cgqPXnJAq3wb2iD3rnsu6UKsmaXgXrtdbgEDGM",
  "key2": "3us1ii47UBRy9goj7bSnZwm4AwYWYW8aFBitr2VzvfwyBL55JGKuxVuGYprZYFpzN4AV2Z8rkA6Dz9JNdCoRMkdS",
  "key3": "4ji7n2nnyWuJAHUuD7JBw3xXt9K7qbg17VeRidFrcihcX5pEs4XKhAReBoYWonPQt6r9igAZPrNZocvH2WgjhPj6",
  "key4": "48oo6BqLK8dc8n4JiVR3AeG2mm4eHkX5bey46cRxuQsrQmAn493du2qSHAPWCGRnc2qPAVJ5dbcbz2sn7JG6DHv6",
  "key5": "22b3xMLgb9tHD64wgAApCDSUhCZ6f3rbxGMgbdsWFdNvH1re2arrpNyvUDoEb9kcJi53P7yuNiB9F6j2SSNHb6Nf",
  "key6": "56aTHUE1oh2gDEqYocNpksSjyRMSDsdf4FhNkVqeK8p9n3nFidqWPQNZXydABt4iJbf68SnZaQsqyLZFJDi3ssWc",
  "key7": "4aZtAzxe6b4XrQjETNUv5xcRDkBKsL6GYtzcchnVTp23GwHNN9GCpkADJio5vSzdnV1AvPVtxEmQqiyi4mWczAgq",
  "key8": "571GspDLgBvV4WKxmqNmAAP6YsCLzitnjhnedmz5AvHsNybvmHDURZhuc3rMJ4AmxSK7ydcZBKeZeoSoBp2Nx4Ys",
  "key9": "37XcDCEPyfe8NVYDEQjNEmndMrUgDwTwDBZgUd5WYfXvDFuWv7gmQ93chSpSoKjqFzBbjTC8QwcWMJYQpTMbTRVA",
  "key10": "2Yi5ffs37dcjwQsrDKKvzuyA2FUn5Zux8aX6PdFwDeJsZ44tT7dFEr1f8zEWbARYfBusRVex12kmvCCvRicb8mKa",
  "key11": "4w8b5TFspM35dZUbCGmAX7x7LMihaJmUBFAv39QVoxoMZ4uobV47hqey8DNWcfNi97qAX7yUE1vw1dsCVNidVZvF",
  "key12": "3Pd2jPfxmzKAUEMPbDqKfmBYWeCWm7A2YhpQDq7ufBoM3NQxfojRm2mTKdmbZNTokf9ACboWmPVKgLK1vUzxhqZU",
  "key13": "36e51xjNwp1dpgfHsLe28GpFGTCS4GaY28jUqH9pAFWADV8gxb29HYrHF9mqeJvAe9fVu2NKtXBkNiWh3ctfDjQx",
  "key14": "PhUj8MvTRPfvasWwiD4hiSjSPB2HgLaeCAfAGMqNXowZNdapoQPW1q49Gb435Eujav2duMbD6XpoTWL2gxBB2Yr",
  "key15": "4dFowJGUGsranHKSvoeR6uTE2nFutjH6ZswJF2N7gqSDW6QxQXx5tDWb34kZ6xPAvEmcJp72fn8FTCPAeVd7P7m4",
  "key16": "2jEYGWtEmtM5gYZekZLHdBmxAWXihnNeJX6q9eDtgpsVUqbCwoaGiWRcpYyE3Nyocd5skkRtNCqvQD9GCV5BKqiW",
  "key17": "3dYAKHACMj5WkyoL2RtDHU5suSSzK7JwH8nNXhKjtEQKP3LqM18jiGXYc9Z3qzuCxJtYMdyK4thy44UMBZcDsgwz",
  "key18": "2oJMSZe1zRED9JvHKRr3fdGdgHNPy1pRro7CV2WKBqxGn5QyWT8guMcaRP18U6tojT7qK7x9eC2ww2oosGZHRS7F",
  "key19": "amCmZ9Vo8Tz1CqYzY6ZHy7URdoVgBMzBUiKvNacMzgMHiEyzaWcVLA9Tf91LFe31hn21ZJoJCHLEBLKYe8cHpU2",
  "key20": "3mYenTr8pvm2vPdiq5UVCCThcen8noQFvpBBZghrYGkY2NKj5sdbUDJkq2hwgtod782zhbYiWS4WH3f2xGsvZebM",
  "key21": "24X6NLxZswaMSjK9BUk27pjPNrqNLB2sESq2pa1EmwovH8zfBwDRyFSR3a7FXtHJDM3KKhHTZnTgWAoRis9dTjQV",
  "key22": "2GCtYeYtXUzLqNB5HPvyEpPg8QDqTiU3uCnKwBrf9B4F1yYs7cY8NbTVxFyxeBLcNN6TW9ezMhbJuM6Q2aU5HcPS",
  "key23": "2nqQSNqEJacPffT7zAhevJJLgDyTE6WCUX8rX7LcP5nbQDaXUCmWVatK8sbewRvszEuyZtxkKdRW2cLYYzZueNyH",
  "key24": "T9M5zEswP4quA6bvPWrHPZ2UiU6uh25UvHVxQczuZhjpYHJN9fFGUQGsrNpEJgToRPqEmVBX1tdiboqK8PpkXKm",
  "key25": "5wjyTcoSbA7QTGFbsA5k1V6V5FcuZawXSSwuTTfsGgEbizX9pd6SUokXtXoJmR7Hw5BHS6pq5bKHbSd8bPRHnXFm",
  "key26": "48Szo4kgnenrJyyrckeqrkJZYMVepF82ajiJ8sL94JH3vQXs153giA63pTrhxNU5nHxkrT3FwdrWKMFvf5avaqGo",
  "key27": "4iveLU42SV3SxdWxiggpzqU5DKE1j2KXwb5xHqYcBjoChsGcvF9Dqf1RH8xtjEwA8akBehibjBuaWY1ewyR1mfX1",
  "key28": "2XJGt8Jf6ejpifMUXRmNDSBnReDYbG44LAxnUST1BSndNTUSQ3PmGvZDsP7Y8iBARGCUfrErGNgBeJcDzYSSJbfD",
  "key29": "41P6hFZ7HFrqHLZpH8YZgGJVgr6boPC2ctUghkpQd8PVxKttkEJHydJQsd34Anijxou4RW2Av1NJMnNzX4kamHF6",
  "key30": "KG6Dgk3PvkpdQrK3AtHNXxr29NcLhgUraVspmS7xmLkecfxk93RbUkp8a5tHD3GAyFKWoJqseb6JEP4i4dzHmcZ",
  "key31": "inevk99rydArEeqsGmS4oyju1NFhnV3U7TFvF6aHiGEKRFjYYz6HdRQXuNbbwjzYiyFftYyx4Nq65jRQueaQg2V",
  "key32": "pmE3f5gyEEHXazVHKveByvSpwysUc4MCEta4yk8GHqMcqDyUkyeyKcgZbynvKebSs3YYiGBbqGkfp22MsspraWL",
  "key33": "pUGNjmVqkhFasrfuKscEZDsbtLawGDxcdcXjfzHHeYuwSnnTz44LZ4gCVpATd5wufe25paiizvoEwGoyxQVVhRC",
  "key34": "2faKRUNRRWunE6kypWGbPqBr9yShqyhesAwt4kGzhPHsbNu4HEPRC7JmUn4ksmTYPVPqKqqkmbDFV8GgVytYvwNX",
  "key35": "3itrXXaKwXsbxstnVZMC74Tk2cMTW1nQLjsprUnHZxiRbCHvrZMUpotzmsFAtLActKBRHnwaxNFrHfyQwZfdLwmL",
  "key36": "3ncCcdh97WRMmSbqc2GmHHrYDozFzjE9VFV8RHT5MszuxY4J4yPDkWMaXBxhim4QmG2ksjtophQxzPgm2Em1nkEc",
  "key37": "3m44KJGKTKg1gFJ4qhXrJLxHVVWtguedGQ9wVESU3DCkudBhmcB7CUFd4PntijXSPnzvmtZnYQy11zm9o8tXKsh",
  "key38": "36wEhF8ftQpvkfHDzrToTrPF3rCBqafXMxEbU7yW1noNKYWcdF2xm26h9ZGLEY4xXQukcrTL7Ebm1SmCt2XczsWZ",
  "key39": "4rd8YgJPJuHi2doW9cnKo8wPsbKBe2MN3i88kvWK6XT5n4eNAyaHXgGnPAscSoQUycmzAs7N44T5bpAtdEszRE14",
  "key40": "5FmfBUxoEXXgQDweQ8cphsaXqcFXwrabcnWdavbVqHjYk23DhXXXpnesFdkbK5cDWqove2YJ8UDacLcLeu4X6ZYe",
  "key41": "4vvkTVRJ5evYiKNBEvffgcyScKBue5arTgTSNvSKKqEKEmBHJDBQ1CkWS3a6WzegjtimYJDzpzijFnBkSqV5Beb4",
  "key42": "yFrHhcjybRzxEye64pNJzKVmcaguN93kUUnQFqd1iwW5fmzbzfaubcypseb6f8yVyeQqVaZe7BWiMjNqTxwKRps",
  "key43": "3yGDrNqDGMeWAUXvA2BBWfh591jtGnT1mhTVf1fYXBBzrJhyXkCYRuhncvC7u5zwTSqwyUfyvqTBoiDZdAGYzBhE",
  "key44": "5Etom7DtiC2CVmK92tpG3cYnUcgdVbUYqekbfwkn3V6xbdW6GdxtqRr4ZKFwH6tPEFDXrnrqrofV6PbnMf9y25un",
  "key45": "1LSmQ6YhNYK3pAzyRT7r1pB5JAKxEa6rD5HRsisA5tvQ9VCR9DewaowttAkUzJt1d4M2ep5awYFwcA8yBk7q6AH",
  "key46": "4VUxN6oPB3eehRBnHHx2BLymWVYf89xnrthYQiRfHXTwDBmAqM3FJhBX8faNJsQZaAdW51HG5V9r2Kf7mGSaycCr"
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
