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
    "4sah71MKRqV7xLACgxwi4t1BrW1rzvyftUJEiVWNHvwyrMUfX3a4J9b3ofdczrUTqXNSrNMgo769hHTFF2CTvPJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hnmeSYfZHyBiLDhrZ61zkPyXqSobFq8HiASn8ZL8kK7kkr9shuMz7PGGxAerV3uCyD25S1HHqHiaXo5LTeitK7Y",
  "key1": "3EpojQgJL4jvYGyTQnJkXDJDqotCzgyDstWb6mBPfUnanbe985VUwpL3nTTwVujZv4VVL5eFrmfgTMX5dhNbPTLt",
  "key2": "4VojLDVP3VV1kZLEeRnxhNPKCgqmidSCjTazdUjUR57FreazDeA6uSz2Nh99bRAog3YZ4mHNUvU92UBj5cJe8XqW",
  "key3": "4FFCgV2gga57k5XxzF2mRMtrNfuZSDzL9cUzEJ7gnqFvJaEVx3Yc2iYNVkcyWEb6hRSTWhFhjPx49UGRZxXAgwJv",
  "key4": "5MYmp2kdTEBQWs8XSUYnNVzmJvGKuVvPhTT7RGYMjPorPcRBwo7PMuB2JNodLyp7JP6yn6BZFi31vtbGAz5dceYs",
  "key5": "2PZg9giMQccDvo4d3utbztzSmK4gpSNUQh59RhGC5dE9iHVwQGALWZG1fjQTmQnMMpBQJVaNyWqWKEoytP4LH275",
  "key6": "4EPahomYU3EmgmQ8DnWeZPt7Yy1HRdA3ucHxCuuyvsKV1M5Hm4UGuRCqiirj4ZY94D4KktfVrU9ioQPUyPTyv4X2",
  "key7": "3GmvMXwiiasTCtoEkbfwb7729hXAMUEKUQfXCPAjZeWHp4rfNxAfJgZYgCkLo3m3CutE1w6Kb9MBSX8yPo2HZWn9",
  "key8": "2MjCEvBFmdM2tA4gWVWopVtThxP2V8P9gEUGXWBMQE6Szs3GPpD2ZjgQSWVMinViQwaYXMJQFJUtZdkpwSFw8vRH",
  "key9": "64XihbFxobyd4kt12Jz4VyLSuFgE6smwTHSD7gA8Rg1EALvDfc4JF4jwD4Z4vvBQUtd9gwkKABa9zpsmuJ4Du3Am",
  "key10": "ZGvxKXjh4ShKxRnaoHQVayQdbBkiaTzYSSBCt5NNsuc9wikzh4SfZnVXV6u6WXksUpqFvhXrsnb8EuqwkLk8wp1",
  "key11": "3zuUAmbCp68i3pUXqQYowMbRo1uHi3AgkPDEwU9kWgmMUbJjobPufNoCjqzEHaEtSqmpwNDWkr2zZjKaGheZNowY",
  "key12": "4rtg1b3TkiHD45rBM3ycHUN9LR3t7ojX21KMpkA1PVQQPVavKTudrhVNU6hwXhkeH9po3m8aSczdSEbsYoJ4KrRS",
  "key13": "3QSZVJdPeVu8QJ9fYZPP5usw9ukGqfUE5tRSg4VZ6kzR4h8hQbT8P6d7kiFrsQbfFruPCFuyTghcgduF6mzBbt52",
  "key14": "2b38rDrSxnnh6igLdEzaeUnsqRPDkgRsAxoarUBz2TsSQKZNXXRg3ZmyrHCChTfuiU9KBAm83JB39YJhEbn4yBKo",
  "key15": "3FDPyZ9h4cRvtuXKKNSp5c8A16UwaAKvF8wWu7koA4bjiXVEjHDGZpqNsbhHbNuRxeo1JNQT1FM64No68Y1Pt3gk",
  "key16": "3HEho23jnduV24VRKmuvhVfVzg192jSc7FNtgEsMGknZT59emUPpzfcWZKsAdn1P35jcbbJr3Zh4x3Cse3iRyRuJ",
  "key17": "Ykub3YT9io3YMktW27NMXG5QqsV4ZgY9KpCU8ihAtkxmXHBFb17m88FrSzfU7vEGtSYttRjXS1ff2fTgfravb7q",
  "key18": "3wYdHFMF49n6c1uycdFYpdi8mqVPbjwq6LN2sTnzAWx8kgmL81a43j6hNFnB8MF1Zo28kRwJbsijihqXWetvJtD8",
  "key19": "67ajpdNxgt9m5JRfoNUqn4L26oWeKtq8SHRfoQEmmt2MH2M1A63VgsDCJg9SMvcbhc6x7Z66LAQf9vYRnjJ2SFej",
  "key20": "381udxr9DMn97zRnYPwnRrtN1HNBLbrCYccHZsAuuB36812r35PETFFQktxPA8tbDG9iTHyPMy2gJVXUAZWSySQL",
  "key21": "2XXr6jhWqyRY1gjg9iLDi3pHdo8KcAyZUW7hw553sViFquapQSkisMjkXF6cugVDnhXLRfjbXtFDcfUN3BfBnyD",
  "key22": "5G6GQn3os8jbs6ozqG53bL5yG5iCDkcX2sMepjfZZ4bHkMA4mM92cAg92oZykTpf2ZDw1PDNPfMR84Y9Aku735yE",
  "key23": "4yhn4i3h7K5DsdFm7cyct8FEdjHEhSQUuihsLc3LwHqviLjyBUA7rdtsxSzxNPq2mHg2geFskACRyCedNNfADied",
  "key24": "4H6vhFHXTKmod6Mv81TVB75SkkLhAbhqDwRzgUQmv4A8yG4DVkWaai43Rb8BNMCTx9udB48Sw5PKckhSB47VDb4r",
  "key25": "3B2SzJ4mPBNE2TxBferMZgw1mB3WD6z93X9YKBMcgSwn7rSQMAbTp3ovKeJ2b5EHeHctX21tvknL7VP3xQVz66K1",
  "key26": "2ZsbkkKCkrET637qEQbEBbUX2UBQSfvgvEQkjDfjXBRCDVcSJQ1AjSikahHJmFPURQgghYoeMWTM5XJqCkdCgCrj",
  "key27": "2XZc8RBFCU8KxoEXRZoKmRJY8Gx5Qji489YwH1qpZ3ry9AXzGNq1TcbPk7yYcJQwtmCcrPbebtHAP1QAGv4iAWB1",
  "key28": "54WyXwgznttVhmBorjAw66BbmpX8gd3A1kN6QpzBCYHL1bGsd9JyjVwwykm5xEKjrAYgnu67kuhiH28TutjGG9V7",
  "key29": "zeCQ6WFF8HXiwmWks7vAkEAXt3zgkhREBYTCfq6DBNTGpHUY3u5ntmay1iThXhWgggi8yyD6rAWJvzbwWkfnTh5",
  "key30": "2hCPedydnCiN4Fz2XY4VhvdVdo87mrLaM8q2dCEgP1bKDtdT6hD9ufhgxynGoHeobfFr4jEpJwwyNV4PFJKALoXB",
  "key31": "4uvWBifRNv3T3AXSXgmngc5T3bEFE9BKyv97Km7CFK7QHcCx7HSoEZQr23HAN8KePHMWzdF2sQoau6LiE1ESp6Px",
  "key32": "63zmXrib59FK5UWGoD9ZdTpLLd87tcb2LjTemBGWcgFYx1qQHvsNTqhmPoBeMWQeYG6ATmmLnRwoN9kPkVJkMVUt",
  "key33": "3Tb9uGKAuenYB8QcUnMRZLbwYpGRzaBEbPNbohgw3J6XrMqzmnEK4EdzWjXq9fiYK7S4dGonUhzm5q928GV6e8x3",
  "key34": "5Cnofcy96MRoV2NtDpexfs9Gh6ybTXk5hepz5Xyb9Bm8VANfMf3REeBe2qBwr9GQjHetjKKRhR7PutAUtkji6bBy",
  "key35": "4o7Ln58rcrex5rtxgb8uME9rh8P2o2LYTJ2NYfQL23CVJxMFMtBbYriL3A6yFARPcEj2QeY8DsmpAdJaQiqiYGLq",
  "key36": "656bYfVr57VfgywdkKDZVrPJyzVwi1n7V5e8W1VMdEA6f8VsGwwZSfznmyxr98tREy51HuR8qAXm4pQM5AJDNjXy"
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
