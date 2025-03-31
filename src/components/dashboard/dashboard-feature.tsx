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
    "4qCzmPBFZsPyfmPSrKxtNUt6A1qG8EbRCqgidkWaxjtAtWUZ4A9ggMXpQdnhjzFswnDHwj1pQFWzuDwBRNcLbAxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V9xXCbM7QVT99pN47YZ5tsqhRT4AJs28tx8YigwbksykQg1UaVf5QAWVfRTEnYuD1GN9MAQtvyfZexJF6BiMLet",
  "key1": "q63D1XA7kx87Rxbj3e7Fxq7SBfu8szq2u6AUV9hDwjR7rjypvuwNL5v94vK6gbzT8BcwBvKz3BPoKBiH8rEWkPA",
  "key2": "3JJ9taVioY1o1Fxxmy25qg9h5AvVRx9KrbgzXmDz8NWsjV86ugFCHmyh4VS1w5TjDkeqGy3YXoDGhDqxUaebskdP",
  "key3": "4z4U2nBUSXCp1YUcGnaheMG1w9evDfrpozzDMqzpPmwko8PBTKMwe6oCBUASxfH4nH5aWCCwLUz33Yz5PuF12Vje",
  "key4": "5yBMYvRnk15hrzi1E2wzMJNT9bFsP86v7TEHFWz5sc6XqAAENqm1GGvrHgwCnCyY68kfxyq2yHNqryiYDbH6CFe8",
  "key5": "3b6h3BxtLwQtdeDdus2SM2z4eycj6oAvUYmrcuHWXv9SPp33wkPgaJfSGx9SkXL6tvg1UMjP8hoLGKBjPu2mTgKF",
  "key6": "4EgXFGhK6w9zs4UX3oy8JfmdkRC8STmr7piPKrnx4DaT3cWvUPwwxrGEw8Qo7kn8QzJY2q7Gku1adpsdyhi4rhBY",
  "key7": "2Yz6kLQWrrzAequECZcjnNUAEA5psPMq52TGkmybdBLfbtEdy2hSdFySctbEcp7Gw3GmSUp4LofGZ2cW4VDpJovp",
  "key8": "5XVpgbt2VC9rJqMDNNaaXS5VboYAwps1YMe3ADbo82RZu2Jrrd9wU6dMNpJ1tcoaPrwxAoRj8rEun6ujSiLGsYoF",
  "key9": "3LmGiVXN33G1SgeJyxX3RkaYrzLeMLTJSP1jAsPEtnqnP6eZEHfzppwqDTXTSsqis2TQgjahpeAErKgq29k6kvsD",
  "key10": "2AN862PRynUR6Wt7aqfnPc2TPUb7RVL98QTBcd9aqEHzujJLo3X95cAzmCPMkAUutPDGPcmiHbKXu7EdxyCiEUxh",
  "key11": "5dFTxeB6m5zFBXk3Y4FNAtR2xqWLdidWiMfUc2GMW8rJu8rwDNienzwewKfu3tJF9iR6aJ65hNL1naxxjU3bRn6d",
  "key12": "4Tsb2Hp3Vr4J6PLkPS8HDvkA9FSz1GzrwWo7crS5nU4xmffkYp7YunkQAb7DQ7FG1JPu8MvkjrUNoyHpnzh2roLm",
  "key13": "3B9kvUwk9rihbn9w7d6uSgMJ1KV2NRWLXqLEWL1ahqt8tDbymQrBNSwpptFiBYSrvN1bM8Bfto8LJzJZwwHZkbMx",
  "key14": "kFa9b2rNqwF97FG3PgxR2fvEMEQCstkhA5PiwmCkTi6JwiDczpqktTVgdEZYiGBvrHZHRuBYY5PfXUR4Q1cN5oW",
  "key15": "57Zd5Zsd7eheqTHy2vLeN72v3tuWqN89TkQjq3BBpDt6o1DNAz1BGwY6GPdZgVFZCxiHyGeYbDUuRadpcSdf5KDb",
  "key16": "4KUiadAq1r7E4D1bsRZTAkUFoN8RoNmAFtoSAMw1z8HZhQ2oQJV6eaUdpPtL6A3ufrK6MbYJdP34pXPJmpEzpCTj",
  "key17": "58Qkz5MrVz1qQqezLt5L4otQG2LU6FvbKo2PtRe871seJGFu7znUCUSagxx4XrU6CZzLnrTSz7JE6YNM6Qo77rK",
  "key18": "4phu2xDMV2mZhJihsMsYvUbpwRvEzCS5H29wtphwPytGA5KJXf6p2bHu6vsttyM8bs3LuC7LngbmhD2QFCqyv8LP",
  "key19": "3TgjzCwqyWy8kdVf1eLQgN6CPips3ynX1dfgmDNTG4bPCNN5squ6GrGWMGf5Ugvv3VBSYdF7sr4u7c4jtL7PRLQu",
  "key20": "VsgWccq4V4yvkPJo7ZcgZjXqARwPvKXPXv4aSYbeySBRVa5w4DGASkXGam3Ckqd3VEZRYp4joibGYZusngo7z5K",
  "key21": "4uyUsoSKeMDdXQENhW88ubBRW92tXhdbBk1iCxtwoP6ujxaWq2W7owVfG1woUjfyZ9NhC62FoZoAKBEAYokoMNTi",
  "key22": "4tYeV6NfmFkREaozEC7hEwJDzW4SazxLYbYWXAqefPGy1nuMfevLrzi3HthU3xHmzkFLzUBua8HRdG5LtGnkJ3vn",
  "key23": "51iGGctEMtu8rC9EPUbMSfLkzQ243FnaxZdj4WwiUSzUibmv2R2nKdNaBLPfgNPkuVuzcQccbJFZ57JxqhcUuZPs",
  "key24": "5zLfTKZ2sywKmZi9QGTQjBPsnNvST6KiXGgbDYoh4pPm3UuAzQqbMhkGGqtzTbydKouv1n3LUTgmvnZvEeUYYwSP",
  "key25": "3UQUbgU5vnBpoz1CkF7C1CwVY8h9UTdcyBL1Q1QQpphyEFNrTuf5heoYCFsXYA17wmgquRKXhV6RX8nKnimQK22v",
  "key26": "eebuVfEPtuMWVJvdCWJaDqbUCJze6iUpouQyR23kvGGx8T2ZDNX8j5pYLuQedANUYbereL1pShXGWdMbUmj759D",
  "key27": "5EkXtQseZajRFXBekrxYoxvSZCgmifC4gaJn8i1uw6FENC82mggCvHVF1TN7vRgpXzg8oqaZzYs3cCkQ9pgM5mkt",
  "key28": "5qSC8BXpeDn7Xt46mdkQzwbckLjxkzKwUKHCUk6zHFmfs9BKm9f7zTMd2LpFJSRw3qRsbRFFaqosihWXNJXpHJmg",
  "key29": "5MJWpshW2pkzJGRjG3HNrhhCH98g1pHWoT58GCrFawfYUd7o3aeQcmMtyUzG9YrSuhsLQkZKrUka9zK7ncDnJUWw",
  "key30": "5ujcBhLkPJ9kyXSVYVRaLZRAYp9X5rEYeeTUfUWAHdmUZxZ1Dhis3TYcPTCAKR6rxA7oty8GXzbo9Y8784XGHSim",
  "key31": "3rzR67H8y4ywKHFpRm7gReVzcbXh82x8EzYtwBhppnEqGesg9yHTDC54qg4Z8Sq2L4RHAZFPS1nbP9QDtniUCG1T",
  "key32": "3F2tCPgLcjT7uBahsyV3PX1n1Q81KNi2BBeJaS7EntZu4Cs4j6LBU1ZzTwkz8HjcFXaVTwx1vWwMEz2CB8SjeLCb",
  "key33": "BjGUu63fW13fYUQ7YP8PrKRaDWm4yi8LbFiBcfpuvbHwT7Sb6Si9zCMU2V55pWzRnf4hJAo9NumaqWR1vxAEbqC",
  "key34": "5dDo72Lqy17qpT8hbrhFPe4i2ScYznzdq6V91J1ukiiqNSrrv3bgz4Gu2FeRRLsBKSnVakJWeWTtSgaVzGvH57xi",
  "key35": "2tLK5RnFPMxmyjkVH2HdQXGf8bcaLGYDHcUEUzQBeFbRmG6KCehSBbLP1pumNq7N5WJwNQNSMhiyFDsUM99zh234",
  "key36": "3ZMG7GuoAqEJb577PNkHEqdV7HJ6HBHvo2mMaJNzp6oR2arem2aWbHpBWWbe8Wydz7kr73quPGy5GW1FrR1BhKo1",
  "key37": "5M8BakkFEha9C3jLbFWM8K16CdJpmAZwCojSLsfoChouCPeNqAagfWYRwYYtQ1bidQykgBL3tbHD1zwKwUWUA66o",
  "key38": "3PsxfRZ7fvm2eu7rsAz6vCXmCeoxrfTQnS1mG8cWAL1bgWPerrbXwzbxGcUp74gqZpuiGMDMuLteb5FEzCuN9GUh",
  "key39": "4zP8mWGkrR6Ge1JrLfCKcKso2L1hnNvmtVFPxs7AwnWyzK4RJHzpV4MdvLEfQE3GdRYHDQLBgZsrFRU9fDNJBw8e",
  "key40": "5MGneHukBaAxTGUUrUCjUraL98N39jpkBh5NQzeJA1rF2d8usbUfhEz5sYvCWxeaq63eTpTy24eriRDUGj1kAqzP",
  "key41": "58sZnv6gKwSak1gd4PbYdSvCxDZyW6mMt5Cvx7ykXsEGUuon9uzZFhaHmZYB9kXr4XGYcZBRTaP8S6Qx4HzBiRue",
  "key42": "3fvRmkAUQjBP3txyDDZzGVzEiY5PiaRG9sCnkS7DcVnb75sazq1SKxau8kUyrRMAvkz7otinFJvKFTDBZ2Jsh9xg",
  "key43": "5q7rByzyinMBss58D2zP2T2ptYYXxfZRB3yYcQPpGXjsPvrKZcP5xEB31ccDjCSi6Axd4rzMCd6fKqpkCLQcSkG6",
  "key44": "4nACQXuDg3qWCUWqtPvseXSsK47QZQRtM3Xr1JiPfnmSJVMzdKoZ92HwUKomsD1dgYuViYFub5LW3Gu4o77MiB1e",
  "key45": "2mfiYkffqUjpBhmiAchzVE5b51Ssi7JZmqzDGBX9sn8hSToidr6mccgpBeSBUdCBwFHw9A21r5Qj9LXwfzvojFMx",
  "key46": "mys3VYgGER427RJr6nVgjjNkUqWuKCUDPmo6ZxuojTmiFh79Jq3JfuaUWWgTHFt7XNUbCuNVPbbS5YC3oHpxkyq"
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
