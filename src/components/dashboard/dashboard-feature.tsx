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
    "2rBK93J1Gey3KUJXjREPAfEsEvapq5i7X98gJLybmekyJhEWFNJYSPBcxZAJKqUNp5M41ZE453Bma7n8i6btk9Dp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZyeiXvegPbRJa8cRoPv7qaavA7HTvpYezmY3y4ZAHAK7VqFZLWMiBEejfvaTEcJaEmMr8iu3cxd7vBvK6Jr2nrp",
  "key1": "498ZB3Mts4XEkLd9B4Pd1NvibpsAHaRfgq4kgh4FGkT4hwgfvhoxcMpfRJCmwVNEDSq8J1Y4E3dHdj5FnB3rSsrJ",
  "key2": "62iDxwu2oqXYV9y6UTgUGb5TdaDMnA71xFUHLnJ1PgACqs5N1MifmWxHbsMGJFxuRikxmbVumsVX8QEee1qnymqX",
  "key3": "5GDCyM4JCo16oiHogQsXgT5RDKdWSxf9anVccN9UtCSndWiBgdRNwpZeunknEpbTokaCmS6ACcbpY1BwTJjtEjN6",
  "key4": "WwFr3vivjpHTXYxU8Zs63uXBoycnhyQAmAG6z9R7NSdYMZBNRHFr9Q1rama9f5oMmNL7eE8wvPtwe33sjLs3U8p",
  "key5": "46TLm9DQ3bKgPtp8ZenmWBuBqXHUXXbCUBe3jMFooy7M5Fk9FAwfC6mtLKdNgzpLJmah2gEJQFCbwLU83V1YfzWU",
  "key6": "4VZQpTNYiYgGR4GmBc6afmsPPnyHEQVRjhHgLyyVzBLTQAaSirrRWbqmxPk6K7tUSHHQdN3FUAm5FqCcKVQMsArf",
  "key7": "5C7JZsBVBqQYwjADHseKyLCuoHuNdHVEoaxZUZWzqofCe2viEWHNnAbSgHbyAXkRUzcPBgbKW2d8x5csH46PiNY6",
  "key8": "5SYL8A816mnZtiaZFVJjrtrCF6TYxqsjPqxzDqSACt48jqZCgCMoMXM7HQYQqnzSDBqSP73guoz6PBN2CxLTCdL3",
  "key9": "2uGyFgzuAEczwQb7wn3mwU4wmh2eEY7oXcfg1CqQHHFgFVBpdcCd2x6xZ9VKA1Fhar1TqMa6Y6Jbp1QgQLGydXmf",
  "key10": "7j1rzScN8ck3Ayj8Gf2nV84H2Rt7E1K62p3rXrowj55Vpg6hLwYHki7fytSTiAEAtguZhCeKn9amVvRXV98dEN8",
  "key11": "a1SdqZmNqkpwnhLmWTsDRYL5CnV5bgG4dQPW1JWsXJr9ppMVLTt2rQXHdo2uND5pCs1sdQL3B9FVtzgYPbQ5a5z",
  "key12": "5YBVTrNjWHkZjvvP19Ucp9184R2BDnD4sF6LesctGKRaqpMBgngfu2K4DRQcuqw823gMevi4nGU9T7q53bRPKV3p",
  "key13": "2TeB3DYjW3szk8g7WAH3jX7JKzdLrL5ftXN11YposHSVucZJF9eZJrkP4jZoA1cZ8fkr8SdkAKEHJzWQFmdmyb9w",
  "key14": "441mVPVsEpwFwnay6QDNkJceXzmXyj6d8fvx1P8fMpPK7wduw6n24fezGjc67gCnMZDreadWeDs8NZw89UoppLzg",
  "key15": "2HwPCzmrmiVR1UEP7NeWLN8jki5Xya5mPnxEVrLxe7FzqKfQxy1QVi4hpUxzor1f141tsqXgX6V5aVY5D7Wf1oKo",
  "key16": "2bqnhCJWeyvpo9NqVkPFZAg8rEj6sqwAkbRdzqpubTgt9RUTBWXdsAPwDAZiAk7tyeycnmjSfw8fYQrYrjd3S2WM",
  "key17": "4yHR2Krf3v5E6pHbgZtEqceWbNsW9ivavw5uLkXHyjga5mSHKpGvpxuTJVASUem7FefUP1RtE2GpxtuUxzmh7myY",
  "key18": "E3LhBCwXGtVjhDLyXo6Su83r999FvxhJfVk3CjocVjBSt6eRJFn6dgNS5PvVL1SrKJe9Ag3NKt1WMvYzzR317qS",
  "key19": "4SoBAgLwTFxmn7kE4t37HyEYJP5niuQM6KZsvRUZsynvrPLoAZHbxPzozTBxnRZX2oa6Yzz6y8LFndALuEPSzJSo",
  "key20": "4EkArMkmgCNkvMqFYvU9wPBFrxYViCPuA7JP2tWPvKHgGiLWn3rsCZvaNh4ri4RSp17Z4eERDdexiu5VqvVzcWH",
  "key21": "5TKHRvNndaieeSXFCZS6FXYPt3rqabczHnow3hWdoJDoJKLMduauZZXvGsFzAhi3SN5sxBGkB2J3MnkFDAYVsDZ1",
  "key22": "3gQnHGoCwMjVMi4YmohoW7Z2a2hvDJuvSYoxmMHNc4rZ2X5DdrXtnCDoSBvMx1gEicKnyAMn3LtGwg86rah2F6Zu",
  "key23": "3WfJKt5aKdD7kvKJbnVk9eWm4Hys5FRAAaJYmBGNTKi1ZBwT5eHoNB5tjZ3X8yFYBjZhtiABCgix4ZWpCyLnm2S3",
  "key24": "ia2Wpi4eBQKKN1ZUEdM8rr16aCESxSUoM34JrLPHQx22qQSrEbSzwGLk1qoSNmW49Gj8353M6F8KsTkDsbScUr1",
  "key25": "5oNmya3YCcvJj4HA3W2cWe5UBwzrAQjVQj11Y3YJSZuRAD81j8DCVFyMMCAwKB5q4DL8E647am4gKuBocAb7g12k",
  "key26": "b373azDLvwB8WRRnjiCLWxzCi2hexWvnujmrnY9Xco4i3pvgjzSS6d6fSTCULc2kMUnWMNVZLoSzQFQUzRgCSa1",
  "key27": "31UPi1WSGJHAnHHpo3wsuRcBFKbUP6uRB6b9f2EKMi6oSs62yRFBgvFbDFetWLRR9uqvkd3By3Y5Tt8DiZfv5NQY",
  "key28": "2MgaqopaMfY5p7F4A5GWP6jXpMGo9yKJybXQWzYwT178YxbKUCvvQGPyXTDzzmGWezGcwRxam2tTDKJURscrczYZ",
  "key29": "3WHvycoepbMkAurb7oFsSxziEZbVi4tfaboiWA92JtapfgzNgdXyeZs9Fvcmmubkip8qPEZ98WzbqnpwKKGof2W9",
  "key30": "5RCTNEf3qz453syckCW11ThCio5DeiezFFXv5wNE2mi7gzowTg2YQpwUb6tsCKumYUGWPAAF8wWDNEbjFKc7fBVa",
  "key31": "5NjZnzcfDxSHDj26jgCiXNwdMaeJTe76zD55rH5xMbCi9YFuN9gU3HgagVBU4NHtBbXcx9bAyNxykHcBT9gjySKx",
  "key32": "7KW8unwQTmLBtfcYNgKdLXyakVhid1J1pJb527qn38xFVV7THxdC7qWkRo6JpcNEqfDjxYrYufHCyLNuCFNkFHb",
  "key33": "5dPut1GW5MKy1VtBhvdb1fPHUFxrmLL3H5tD9GS9bUVWCMz3GZ9KQHKaf4th2AKGw6N9dcBQZo9vbWZW6aSha1pA",
  "key34": "iz24mcLyTCzCnZEuynPErJEEy4Hj43JpZzETyrzPP8LTJkPVY2V88MqBb6dxdoU6JSrNYGV5vwPMiAhEPcdhPVq",
  "key35": "vA1BzooeC3dsgKS3tMBgxVUkKeoXmoHCtsH7WEzChHpZiA7PdLTX6zHhiWc3VkwPbadg3VLQiShpMCJm5iXraSp",
  "key36": "5Ydv2BLHpFGmm4oJasqNzDab4SuApthh5J71KtJgiMRnPng2XbFkHP2kgNo4xYmG92aGQKYtCQGsbLpFbWXxMA2d",
  "key37": "zJDpQYa5WWFt62LSwCxaUj1hrrXe8eMMKQKE27GDXACsDq8uTSqzBJZcy97gP1PsYz3ZdLYAuPi51Z9MsPiWvxP",
  "key38": "3VGV1xSsKCB3AffoXGHme7eksHMNYZLST76c1J8Gb3yRbtLBAmpR4fXrjg76oTpG2w235ACLHDYf8m7A1o8YE3r9",
  "key39": "5f8knFSxniHP9PDmWF6mE65GzAEFUY335WVnV7HaS1c2tXKaFMiMXnU9yTaqMb6n92UYcVGkuw8UoMwDF9huxKLS",
  "key40": "xgqBCpzcjKZhV59VCVrCJt2gpgc6xijJ4knJyPAsn8oEP86BtkqCr9zopkCGGZDCENxQxpUa83G5JRRbi2YiiTA",
  "key41": "JY18NJ9JY9VDrBP49EDHT78DBLoHqKRCSGSyuBLU1FBHPe18FoJpjeNdXtB2agrqKSGFZwmeftsSKu8b61yUPc3",
  "key42": "4am7ohTt1T7iyYCvPfeSsqDXZGh4WdB29m6k5jM29eWsarwPujPQnXsB4S8FtczwcqTNXx6dvbdN4mV3ZkHyhoSL",
  "key43": "4guGJo2hHHmyP4tZuK93vUYHYAoEPAUcP5Gza1wATodtJ9xi5cdRqfT6teJNfuRaB3VLnVv5QTV4eAL5QZV5mDKF",
  "key44": "582z2Buuz3dbVn8U39H8oFYCxk5bk2kmzJrGGreu3L9onnggP4sM1vLjxUx197aNcfvogz6xKVfTuKuR8svcjhmq",
  "key45": "u5V59daDwTXsw67Ep3zhB6HAy2Cdf1fdfjWAxd2geAVGaJQSPBeNXR9U5jS2MHmaeW3tr88xoKgXCRZPhk8Tokv",
  "key46": "6U44s1yEbkhjUsBpn5QYoW9KUpepfFMydryZrgbn8iQmpsXNyJfZBVk5Yq5tuLMLr8ApzS9rSPBDGgL6a1G54Dr"
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
