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
    "RptVupKpQKkbHFwRgExZEu2Rb58wRQ2RPCJE7dghhQB2TdcSVqeZyB7naKYK4Uw7dciN5wo8QeP3AXRqgWnkqij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mMXLX9z2eDYXfSPLgRpZ9MmY1Y6y5h36WESmeJqap9BNn3EBpseL3zk99uVvVaTcFpWpcNTu5rRZfm2TNbsdg86",
  "key1": "3MNGVLwvfzaozEby5bHyRBRcDjXDdBbbqNsf2UVSJUgXNXEQ5wkU2e1KjUBdsFHNoLQ96K6n5WBSEALMZTogepBJ",
  "key2": "2Pw7HWFriTp6NoCNAxKu4XEAqgS1PGPqaxyqx8hVidV6GHtpjrvGneyVVwrmJBenDdhHMj6cB3ANa3A4ANzdBUc2",
  "key3": "2DG4HWHnJcLa1Nrtsb5uzwQJSpHdD5ZmA2GAQBFsYV5J2xDeyKxdjuWAd3XHEmhmyipT5iiyKmhYxVUgxRdD9QKm",
  "key4": "5xCYgPtXTgrkAtHai1EmzERmnxLv5gXArubPPcX45C9R9edqBrZoVq6TrUWLhRWpi1ZL7T5TH2tRjJaXbajQpt5n",
  "key5": "x6h3UpfU65iK5Ti7hB8iMdX4sqzZ7xwxGMqENyaWuDcFuGCzWsZd72yX987eZntHym4PjjeCwcvTD7zEPDEW6Am",
  "key6": "5FNT8iToxvGyrh4igTduWiGmJcLQc9LawVuiZXQkiFwMAu3Em1dBZs3zxJcKcMnU137UHUVz4YHtpmAxU33Zpsss",
  "key7": "3NhMGU8U2YeDMLRbREzzvyG2U54mX4y9mqqwS99ZvNX8Uccv43QYLfjNDT9em72JeAEbfEe5hXzWHPQ4KZer1be9",
  "key8": "CNXf52AifAxfKDJD61Hzbnx69erXPBeBFo1Tyg8sGYy2EwR14sPw1UWq7m2qHXF4aLw5w5RNBpuK3Ktpzv9oH1b",
  "key9": "3ts9NCzoc6dopj8SFBuLxDYQCh6gz1SsQRowAb4B3ijQ8Uv86uVRiC7tgCkXrByjxES8b3qTRNk8WHsoMcL5rjfs",
  "key10": "5jAoGz45EsuWSqUVsHvtGzdKUb2E2TnhdmCXKoGHeMgmDXQya37cYQ9Rxc87XkS6oKudtkZGoqBEJACzGYctPaBY",
  "key11": "5kZJZbTbTx3KGyq4KDpxzvUvPBqnBvftMV9D3M5YtSMWLPZxvu7BvSJQh6WSfVpQYiyNsRzhNaYsLvfLxXpNfzRU",
  "key12": "5GqXKNBU6LxngoeyXojDna1QuRS3f2YcyuM6xXdBCzSu8HmM9XqNbmgphpwCkghsVRJMBLQFg8JLYvVcFebS6ace",
  "key13": "4T1bJeAtrnYncifme1N95C5e3aPeKFhNMqxL31EQy5jHJ2vGdeeqndJ7UsgaJRXkAKJ7nBFwJ6zrPqV6XoMJuxY3",
  "key14": "2hBAvzPGG8fc1aYeZpdDt9Hxh28REcVayjFe8DHGTKgEvCG7cXv7RfRGynm2nLfzQqcwqrdWaP9ibYoCXL1NdnWA",
  "key15": "4YzuXbCJznGY6ikg4qKaAR4drJiv6Y1YKnWhJqTiRQ9mGkdxiBn6HeDZRsdTpexBi5va37Ffe6K7CWYimoLj2xTN",
  "key16": "2WvNvNk8TCVmujKGFH2wLPPdkoycn7s3jogFNKbKwBfk8fxJkNHh3FcEf67PmT1xNKRjGFkUjLE5QAmvqXBRjEVi",
  "key17": "4CoNtVG6aU4MCBCm7Xxd5CVazubwbzuAmUJkdouD7E1zdpSGTN6jGT1uTr79Ktzm2Ps8EpctaE61kSDj33oGTwhz",
  "key18": "2bYk5479cUHcocLRZS7Ro4s1MT1CfQ7ZsT57zJMHcEjdDrMyBDkuRdJWBnfktHRdf7h9K725uqsm9QpYKdTWrAQW",
  "key19": "4L6MkF5Jw74JGV5yyBcD1T2nwBnVQ1qXWRqJ4gA13bikiLvSBE8MqxQbCkw2V1MLRhhtqdC6JU9r6uKeKqV4GJ3n",
  "key20": "5LwBe38gU5G5eBe8rswT9b9qnQnRpRTo9QEBNtczc5UHEy4RwgVKYCMUxf48k8zEGxtcFBLEV74Aft1fPszHGhUs",
  "key21": "3mJNnmDgc3LAswfeoadRiEvKt7TaSPVpt8SN8Te4vahpNU3ygvnnxKT6ormQCvnaXv4oxhC3qMEyPNqqLJ8LueJV",
  "key22": "gcnFqbLiFNsFKpEhTgM5FcP3agiu5XrWTA6Q3J9RC1sUj69vzBSH6DSvbhN719zGCxusksJKWcDgjA3ZWBWMYvf",
  "key23": "4P2ki3LDesj9TToJasaQo5qx7eRL8xUffXufPDxNkWJtaxKqiCnRqSsEAGMXF3vwMbqfKkoWxSmCuNfooEFHFfJ2",
  "key24": "3CDieT1uFbXeZzNfp8CASu3VD2ExSXqCdCPZNJiUxZ7kBdRgDk57YFaSFsSKmmcBgeUqRBrVr3jAAS1HoW8sm6Sc",
  "key25": "5bfUiZN9tEVNfXjgZgW18vHidAoWbfavWHruWunFccsVJEbHbqd7g76Zu6peHudoppMtNpoccMfPwNV7GsKXj94P",
  "key26": "5tjGTAPhvcu6Q4prXXDnyYukx8DS7VaxHr75pCcvMfQvQd8Yu3PpB33MqXB49MAgptyd1ruLKK5hhvawzaWYcq8p",
  "key27": "58fM4QugYbbH3v1SWMne9KomvHnJe11Ky6T8MvABw4af7L7hzbUGXVciHeMFhXEHdy8xFhypvJKUkQSAwftuHd3J",
  "key28": "2ETw3d8mBtqzNDK8C27sMrp2x6AY6oUBj3zzJRvES9bpkvPJGesqqxDFZtsDj2zSeKWvhPjwtGp5w6aWi9tbo1zd",
  "key29": "PBB2jYAWrxS9yu6WbyDyV8DuDc6XJb97YW288EVpXg4DMUEyruSsYh9eeyy1PeDmiUDe8NtVApfNvuaRTDv9fvw",
  "key30": "4VaBQe5Ff5jv1UTkNaJhz9ikcumppdtPqMrRKqAf3XrDgLFqgCbsoFu7BwLLxWR3qBEpZAXCBHTsWiJLJzAC7EFG",
  "key31": "61GcHQwXMprfJwTa2AjDq6wt7pe7LPgdaBnHujHj8w2ZGaFopshXxnQWkXqnXdjWMbYNdGDDstXSWYALGRe6d7Ye",
  "key32": "3d6ZqYSvQDYGM16YJ3Vmb6V1AseVFhifhaiYqP2nbinnT5MZJtY6AtyghcqAXQMq3By1zfiUuqPAHiKTzQiUzcKn",
  "key33": "zRVRDHsW3RCTEQ2zbZyiSrHQV9rj7nUwyHCyupN1vAonNSZfMhnDMVQ75VeA5Nfghtwf2vDmzYxp5z2wQeypcTk",
  "key34": "3ZLRUdJ3PAZwX8sCmbg73qXgj9eUJkg3AbkGdhAcJ3LwUpiL7RVkcG6dviUMv1KoVbquBRJ25pSkwW4sYxdkc4AG",
  "key35": "4reGw8DBFT1Ls5KHCM5i2UeEmbN7oAq7kmP4QLLtGLbrKPh7es74ETLAgvfAua7UiRTeux9TCNy7ETiQ4iKEuJ6E",
  "key36": "5KCo3uTGM9px8fJLBsdqJjX38yquHjTMae7XuZTTNqoVtGu63fBL6g92ikLypYfNpJHNHpCTyAxHFxrkBFksfqz4",
  "key37": "sM7RVbLAuuyFtE4SkhpQwUFaZppaLJ7fvqeNiDMLkQWo2EN4AchLoC62zJ6KuEeLgSFNYzUHHcrHrFvBsjab12n",
  "key38": "H5PLsRxYfWhjjVLwXGwCon3jF7b1Xr62bWrKn8xhbhS2Uz7FTUTx847wovnr817d7wdP7wKyCoXygjC6K8aJxfk",
  "key39": "3n34HjgCC3xJs3qmoSMsr1mSYhoTPA4WEZLAbjcP2PQMam3kD21BhaWPvWV8YuhcWpbLv9vH7CL6AntXtrggDLBb",
  "key40": "2G7wSovX1JgNCpWGby1SVDVH2xjgJtndGq5qN5k4ffKvdHHa1GkaaeEc87RRYmEMCNHZ9pc9v9fUZNaYVcPr2WP6",
  "key41": "3KzySsv16u2X1Cnt2ntK9a3pwvstrkHvUsyusRjYDHNU9uxcPemhdWq8qCLvJPxfAHmUwRoDkZFfrbmE1bv8kS7i",
  "key42": "29Ng7zsbYEUdNudm4t8XKUxTRAR5UFqVcQCf5f7i9k83sWZzfaaUR8K4eW2pgkr6S8yVyKjH5iGjF4kwAYbDLKGY",
  "key43": "26dHAm3NYScdJv7kgiH6CKjGKfNiep2P1jhU7Ac9Fxf4fWFvjr32jCEH1GfnnnP2BKFpnPGv2TfPGM96X5SsZkiM",
  "key44": "2WTnZmeWQhmLFWTBL2XmWi9g2BFtywKTXRdegMCVxevT919wnfUYUjHWhhbXNZ2aNtfpTJ3SFhyCmzhgvZ1B9CV8",
  "key45": "47CKeaRJEmj1EQDicW7efPpaYkQSriWWSQCHR1CZL7cXywzzvbvZs3VhrtwyPHEXjkWTPijMYZiBFTCGc9CCxDNQ",
  "key46": "5A1miWkodzjXabdW1tLtfdSAfbfpeKeRcNbPCoWnuBqgorR95wPAQHzacHu5VdYtikdF3vYKk72y9FieLTCjnzto",
  "key47": "3c3CZ5oWgKtJiDNSsdSptBYYdaXtXxoHSZiipbLhCAgCeppoBUXnnY94oruX3Vdoribta6AKve87823yyEZ43HdL"
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
