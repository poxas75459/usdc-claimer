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
    "r3TL7Z3G7EaQ1jSBqCpqCWXZy5NNPZFMoGL9MLWjvFnpJggexnss1stUUMLn6odD6HRTJ7Th8sfEZRL9aLQQ9xS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tP1GVSqgez4ohwNYJDbyLNDynbyUCqbRX6QnuxJC3YyRwtciRcu2ZxbYa8uH7L7BJg6zASb5YXNU2tDq27swgvR",
  "key1": "5F4i7nrU9nNY9Y5j9Lv4rxTMH6wwti5t3M3SurNPzVcaYjbFudwmYBEscMRj87avAuFUcb2rz9s8y7Kk11fD49YE",
  "key2": "zuXyzbhwQaVAXVyk2Mgpc3BXMBU8ozvgEnEja3zmH5C6Qsr1KQBJHchTfgkm1EeLgr8dv6C5Y8fUhyYf3Zs615D",
  "key3": "4vrUik3gfz7NAmBFivKH1PxE8EeZKzDAuKxfpofGaZqq3RNfq4avvvVtLSTwqBQgT99Xj7AuuBMKq4Ee4wtDTRsf",
  "key4": "3sRHvgsm67q9rhTQbSkhNd6hYz6e44HhynLc2uEpSBN35mwiRXWtn5wZ5iasPnwkJZ4WLikTUTtw3WsH6GfUUskk",
  "key5": "kVpczJEYKuti3ej7PBBdsPvscVgZh1D5nzEdwSzv5cM5D47Xc1mjF2oaYP8wewN4wos7npNpuc5XjHy3WZ6Zjk2",
  "key6": "2Z6nMx5RXWpkZrpeh5bzymK6N9wvfZaevVkn73NcNcPLJeTeqpo7nEUyav9E41Bkbr8SFCrpiKmFJaEf6JoeZXW2",
  "key7": "3zj3poE6wvCrkG6Nuf3mTQCrAfexCS5Cugh6D7oGAWq5L54XjHoWJNTLyoh3BR1DhbztNb6YQEiKWiFahLoVmG8s",
  "key8": "4VZPCmRkSL64rKLxFQdS4oo4bKnA2KjHEuesa7BCe8kA84uiQc5qNC3N1hrVSaHBHVt55hBto5pxD2UszqnQsHS8",
  "key9": "2YgYinNf7j1cSETEFNFXNfVHwk6tjkvTXmStbH7hwkxvTr6vj7NaXgNbt3rRwrEXZsjJkipG2ghMhr5oaPj9FCH1",
  "key10": "3deuokRhuQCPZHzo5QQPpSoHhMtRg4qWYDWwnrRxNEkJ9wbxenFSxRpwcgRNUCfU9wx82DcPvzUpXZBYtucZAHRY",
  "key11": "LsxbDhFbKRbs8XVJEs4wWFuNLcVtrdGGe4vY6vkeRiVzDgbjDFzNXAT9zuH5c9ngqu9ph81YhCiQDZLfKg8oS4C",
  "key12": "3bUNP2ans6VJ4y7Edz26TPzph1KfZD6cB1P9LR1FvLAgDVQkt5CWAerxhAVQ3RX6qkMcCvoA18NFjwU9ozvgDjku",
  "key13": "3XUbRXRi6oWZ2LUQcuVa7SXYa9it8JN4f465fC1yeeQX4vP48rNcusR2K3gis3JCmk4J7putTRQ1xLCVkJkMMTwK",
  "key14": "2K5oPRbzz1sN8ZE9GC56SGduERWnpGvUNwG917wFPyY4RfFzC5wAdu1mJEvmenBL7u4xsfu3c2zWHYDRMNB2yE4j",
  "key15": "5u3yehvz4GRciGTTQZChj5DJreHSaq2td8fFFFjBSAFNx5xgJoR5SSfLCoHkGna9G5sJryivFacdPqgDf7C2HemX",
  "key16": "2m25zAzB5NfVb3PKRotXdSp49jfCBTmym6qQasN3eTC4qKpmHameaShv5p3y4zhNwFJ87DUGt4Eb1ydu5DdGB7j3",
  "key17": "2Fu43RKxj6dUoZnz64FE3rSFprokctCGJDwfofK5qYP87NZvvFS65pvh2uPudoXpQrsXip17kieMFEwixLsbmfCL",
  "key18": "2R1Do9wzTEUDvqYCazB47mYJsE3ngMbddFeWxRWTCKscSgGwo8Eeh5uTDhGqD4Eouj6g7eTqShCtt5aihzrCzh8A",
  "key19": "37ydStBcLZ1ghdk8kzCKyvpCRXN7zsbcj9wytm49CVebAKKUbo1RijdMBagRbuNnVUtcASPDXfaye4sz2bExMx6Q",
  "key20": "tEq1EV2Bjnpyr2TMSuAY1wkYGAEwYTDQ8wiwGznqnUSswnEjfgp85tRoh2GQHxS3D4ChEQ2muye9HL4G3Lyso1W",
  "key21": "4H9xszxWL1gTC8pq42JqGhB6WxuK1fvNn1NcBKkfMPUJ57CMo5HygSE1GejiJpQQdya1pzaSLtQ5Kszij6nMhuBA",
  "key22": "EoaMzE4dVSF7aLsF1sV29o4g9tKhux6PL439GeuzSv3eZRFb9sNEsoekKCPmh1pgspGCvWMWJMYP36jvGRGKDxF",
  "key23": "zh8Sf1QjaucujPVumBRCZqh2gXhBZ4ML1Gf5hqzZBNMxeANf9tcHJ2XqbitYkoUrux87DEWZKfUjsx8R8AjZaHA",
  "key24": "tc9nnK3ScriSkfhUtDtYdTpHbQRNzy1jLDaLgWE32wNPT2CKqE1YLNFLMMLdpSk9UMgbo52MS4bBGcdV73vCtym",
  "key25": "9vActmRUdqYGB2A9WzB2A89jtL9iKRxKkJzyPsFDYeG5xqcmjE83WBTRvH9wyiaUxQsQuJKBoCibFZDHwAAaWGi",
  "key26": "29wvyb89zrq9yaHebbdmyEcjhPbcccRQD2VBRfhq7N4eKwKWZ9H4NBNcFfFKeFSi1jSn3eTufVfZsnp2quupQK2L",
  "key27": "3msyHi2tUmpuUNCeruvJKVWdG7vKu6YH325sAfFmpbU22sSzusAAZBoGSBgZs9KTdWJobDeh7vyyyxV2zTfRSBsA",
  "key28": "ppxbCBVjRsiDeh1ybHA8KQMXu5vjtx5Tpnh48KSTG3a7ZLrDaEwUJsAYMrP6z9o3z9UQeqjc8EtrZs3j4oTk8nJ",
  "key29": "pUdkyCfhGusHicayyhEUVfG12CSZJr5BchGiswvXyFN9vcxFxoP94Vmsn2zAPPTuszG1S4fNXtNUPZ2huLf4Mtf",
  "key30": "uscQB6Xf3UjLXSt4Fgdg8SxJV95nPEfbtHZA7xdXZrqkAmZ1LX7zBTpp9m576gk9tgfNCuQ392Jxiz7rbQkEcXX",
  "key31": "aVXjeGymdBZQZNsoqUjbSragrCgghJWMhc5kNY7qBP2Yq6qWEtPtfUoaHWmCMWLocf9MhwDnzYY8R3kgiCQjcHR",
  "key32": "5QzqUaA1zAgWNp161t4M4jY1GGHLT8SydFMhFd1oTad7n1CpAGtgNmaEdjaXpUzheoY4iF6A4SMLSnzpaMcHr873",
  "key33": "oxWQiG2kQoGLu42NGMe9RgpPjbjVjf7ozys3uVYxci8p1EAKG21JYoobqzB5BFkWAp9QVKUdLowBWAJSpgWxpnP",
  "key34": "5rfkQGvRQEg2MF2RVfBmgdHpa37jnXrXV23HprKuo2EmrUh2hZ95axgiXj99n68xYB6ubatCBxKaCGs96XJNg1Gd",
  "key35": "5wSxvxqvd5YQ1zp4htsLCv7nLYAHJHiLwcYtSgKYfMWNsheTe85sbCE7f1Mp4FmFhFnHRb6e3pb44j9YHh1FbChY",
  "key36": "5BS1ne7x9zVnEYpePQWK1Dazy29KedyCJd2Uy5z5NSzwYeumG4LbnyetNGdExa3jTupVbzHmzp29BKyksmoK39cF"
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
