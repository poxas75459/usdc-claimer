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
    "3SFCpFQitzUEuFZBZAvsotCEjihN7xJ5PwjPDutzUq98fKmVzFEtJJJAwFh6j7CpAmRnAEuGrxNd6ntK3odkzUzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j9s4Q91EkLwV993b2pDLWxBqigQoD8FbXVDe3BwHja5M43VdrVZnLdySn1qNvUFNu3dYWyA1vAsmskkkKQ2B1a7",
  "key1": "3XjXjKDNc7Z2PCGEkrtQTe1gz7cbMrRv9tXthFfcwVQUe2izPt6iHJHKzuC7LHR4QtFBz4mMjfXQfWwdDtXVxBUh",
  "key2": "5k61HCahgNM36SgbuYz3XLaJE2j98ZZUSmLnc8Gz6A2YMCz7CKKdJetf2JAgaaAnGpaDeXJA5j5jXpmmc8a9ABGz",
  "key3": "3W2grGscjVLfuwEfXvUWQxTA5HSZcB8bWxocDkf9K87gJjUG9Eqy3rotte8B3L9qKmYFpGi28P6MeoKaq4PFr8ay",
  "key4": "4TZMMxfSgAWyaR955HMRYquWM2YCLmFomuxoALLqujquFYiqu6NJqJ4QbBGyhYTB6aprfoCmJfhVjkH2mRdWyFYA",
  "key5": "3orekCjJPmF4H6DJEWqppxSX9BWkTkAan7EBW6GC45n65coWhP9Kt1MwofaqSj88L4AoPH8DZ97BVdEAN4JSWQWe",
  "key6": "61cxxj4t3NfwsM9UZMksEm2StsURnCH6gHuN1hGbi8mPGs5EPKv6N1zec7Pmd7yU3nbJBRFcsxnqVW4Su1qCya18",
  "key7": "53UHhLsKap8gFMPt1MotanyMYvmnoMupUxzDKK2CZWaUJLtwQATQESf2BCnqcoCmoUqVd5JVRd2vRyTEshZD1jDx",
  "key8": "4z63A88B1ahSDLKAXeSApavm2epUMB9FLBVNP1jcYdkcskFR5hw3MSVfBULKLJogt6E3Wood1Q4M4h7eWwZ5WoDR",
  "key9": "4mht36wJqSGKBshThLpPqCFNyrMC8W9ftFuN7EQYWzJd2Tdb3w3K5FgWFk3hRQ3Y6vMocmZffnjuPXYm9TJqnUVS",
  "key10": "RU5bqQ1JzrYahmAHW21zQpEQXT4G69CcDPHdkzukqa3RZjpsZxZFBvWHpSDxNHkkeQEwLqr8Gr36hAVSFk2F9ap",
  "key11": "4EMATS89Cyui1fzMvx3iDsgU4THJ6KXCWvN5qfLgqY8iyvA34cKAYd4Wy8EUv1Gnoxpp82pDvNWDbAHCyrD6Psmd",
  "key12": "FsYvmZ1DfD53qeoWPoKz1hCdTJoBPvQoUGu7jrXdjwjBxAs75oF7iKAFyP6fFhjD11yU3rXCWAsV2o2Kxk5KptD",
  "key13": "4AAHKcCo8WgHzSA8DNYrjDZC2VvT26Ctt1er8URRk159An1tw33oYYTi8sqBJXwu5rNHsmmeTpBxYkmH74iQ3vcG",
  "key14": "5DSfk6RxiQZGm3ffxJAMu5bSaQKNn4H5tWzwwUhGn7Lu78u52RSe8BLaog4965d8Zcbz6AL4WyknzhoDtgiuoDY4",
  "key15": "2c8cTMKVrDjNjcFTYLN7sAkBniXD2iJ4p5ssQEN3FmJFmvicbfhjLwHX5Xegz8PUt4s3pRYh7kwbtfN99ZJymWiN",
  "key16": "4oAMkaXeodKA91JxBDh2tY2Q5Gxi1S87ST4Fue7yd58hqW9AUv9KmfcsdSfvG2bppVdHrCNxbb96fWaZDb1gmNxi",
  "key17": "2ay4Xh15SiNNEU8qCvWdzuygfzz6fm5366kJqz6AmciKyUUmusA6zVqSErc3cSMEQahc46R4jytjk9MXrNjPy7pQ",
  "key18": "5hETHmG1Wjbou2dod8aMM5DWzseugxZVxFnXS4AN9J5NqjEXNGJe6wmfFy674d8Un5EwJDwLY2fGwTHM3apSNPAD",
  "key19": "2x5CUZD9Vokd5d8c33hs5iCWRqDi6xk6K5323y2QuZ5amp7VcsaDXHUyxYcfXTcX7ccUhaDf8LZKrZvdossruwBr",
  "key20": "26YvQZqmQGHxJPVnoBvM9iJDQqQ4REcpEFzBYHywhz8Yu1rx2qP7viNXMbZpHKxHKbyG2fdg9Ds87iNtsEvWMA55",
  "key21": "2knHpwN3i5kQWbGPUCUMDpugjFLMSVQCazxRnDCbdBcShjJPeeEJp8jaYCa7KzwoGTtR7PNTju3c7VYeiYHvvDps",
  "key22": "3B95N7fmvEe9xN1gbGzYNy2CuTq3NKQvhookNZtebuGbGWLkxXwLyXjzrpCRGDbB8F1v6AMFDrnYa7omtCrjAiBY",
  "key23": "3DKKk54PsN7PE7Kmzh1GMVSGqY6LyfrYpdrHhNKRwhY1LBnfi4zsbfuA5vSjP96WZSBzoqyxtvCV4YjoEKjrGZ1W",
  "key24": "f2PueaqYGhr4PVKh8pck7KYyj74KTK4nRfrwvCxXYgwYGxZpp2FfV84tymJiZvovxSTp2tGAUNcwzV3Uby8BMXJ",
  "key25": "4fnRV3koxuyc7BmtijaKYZxQfw37WzWb8fRWGCdyR7Shbb4jgm7U7FjPwz1Wemro7Q1Qbi6jQiYsHWejbAPp3xra",
  "key26": "2yX65vuztA7muAryM8rTaUY89ccEPRXvHK5YduBmJAfvQa4aj6ymAmtnpu68Q61oG2BiySUUYSYSbighWkmNJCYD",
  "key27": "FjjFpz3cEJb1NYwoNFqxN2XPY1yw29gJBFsjnghrp2br9RJw4p1tN7vtGaXA4yknCMs2cQRn3Mbcnu6kP6fkenH",
  "key28": "225pXvBvHHymBnyDJJufaXg5Sho6XjUPQNqCY8xSM869AkAL7cpRaGxJayQXLcYAqMQTxBt7a2VC5rZu1BNihUBw",
  "key29": "2ttyP2yZWqcGQchyquYGJqL49bmhkYWyQiSwSwnKKrFD68rrCfdhpFwJzEX1iTd8r5eQaKRSqjSeRZmSvykPpQXF",
  "key30": "C3Hrekv7JcpcsQ6bKprzQQ13cEtcJbAt39HNCmpjN3sTRa1ayHcP9U2zXZ1XKJLF7RUPyjRzhQEvJ11usz6PF3X",
  "key31": "5PWye1y8TRWf1p5hGHwo3m8wbAEWVwJtMLyAhz9wD1xuzTPrYU5RBk6GokwTY9qww6w8eH66GrnMSCixD42Zhtx3",
  "key32": "3oB9kck92iJzpyCPeJwbsT4ed5RLBrg7mTscfaaDYhp7d6h9ULqV7s93TsWpYVvtkNyRCgW5yyLH2f5mnRLAyBVd",
  "key33": "2PV3CSJsAg3uBsjGFwNkRqNuDrC6GR5NEk5YQCWixkSLXH9KuJjDiAGaNYw3vVcFwB4f6xJ72zvQLPXZjzantfun"
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
