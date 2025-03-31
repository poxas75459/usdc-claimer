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
    "XwMxUPBKUd4gJHAs8kWYbViD5BHjpUSmfq7txudWYxTtDiXrvmDbJ2B2ToK6AAgAUe7hBfKGtXGKy6LWNVggGMb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VJrBLfiXEFQHKrs4TeEGMNmWwB5f2J3Houk6hCLKYehiQD5GAoJ2f7DbrvycjB468xp2ki8c8mbp7PS1eQG9JLo",
  "key1": "4Jw3RbMsa6ToUGn8qZupXXSx6d4HjsdiEtfYetmhfFi3GqVajaGVXUSdoM79Lb9ZHfGWpq1Ps66e3frfAN19k1PJ",
  "key2": "25hkpJXyETPh7TrfCfkg5VdNgAZCdCSeUcUy3Ej9F9TCHQ6g16Chm8k9iSmU2fU7EG7v8mt8Yhd8nMPNMyv9P7ce",
  "key3": "3xUyCfLVNFcgPVTFUtsUyf7jQkjU5EvM1zKQJKz6LtmEVucgndX3MZRkzbAb3eKaZBdr9B95ZaHH9TMLi2y1purX",
  "key4": "t8e1gDCec5jx1Lgu1JWxuDRogY59PrjvGZjXaVTtnFfCVoofMQ31827iQwTi1EG2wBUTGNmNFpfQgqo2CUmWnSg",
  "key5": "2AJJ6jtCkiRMFLDQFEHTwxd1KLPti58wtjYvF3ZEmoigYLxospYCZssCZrmSMgW49tCCoSLTNJFQHMHApxUSSeaD",
  "key6": "RpqModoBrRQXxGBfeTdzQMPA7u2LYMuonA28hQ8JSffMmVDCQBSQwLsRa3142frFg3MWqbKrFWuZUKBYEtP9zGc",
  "key7": "2icBJwhDc7kRx9dkGozXtmAEskrzrKuY4oZBw8iovr4bsin1kHAr9cFU2kmn1joYj75w8Nj7oGqWVGRQ5K1BwuYi",
  "key8": "35VAeiFJDwUZEKXiw7wsH6jLtktqsHebHUU1TJ73DBRfXbH5rpH4c2KVctgadzB4CQy2ZkgfANyoFnG515vvArCN",
  "key9": "2fCV5e867zzKfYV4jx2UVc91tWJ4vzDiQcYFm7Z87MaiQdrcvY6SXAWYTdUyECCEsVxJHUqja6bVVRy47FVvaX1R",
  "key10": "3vuHQn7PPsvyjanSQCNyYwpdLYyWFxmroAU3w3FDvAZZLATb1jcy5AC4Ud1jS2tQF2D2UagqoDEQXXnZGkwhqpGE",
  "key11": "5DGTUeEsUAGQvyr1k9aLyGmmr7xSz18t1anpggRuZzjkJmW4mcx5i7VzXB2j9PrxkVURCYQh54SXnxUWCigA12vE",
  "key12": "5WAchQFzSsvbSr8FLPx71arTa3pPDmuprX2NGHJk4dtN22z16H4z2ugqhSf91uJ8HvWEGJTYkrXQLNimq3WaoNSJ",
  "key13": "3pCFtJuCqacKT5PciiqNvorNS1FMszQagLqwhQ6JVDykqocCMVcfTppnqmJWjKeG5Y9dFJYS7HyW2mmE4R6dMmAS",
  "key14": "hPn1RMmtTJNpBwPqxZim2sSE1b6WtPsHDXhjAYjFxzyN5hpy9JuYHEhysHamUHoDnudrNYdKJUoSxuPg5HaxgNa",
  "key15": "517wKu2LZyDAARj9ZM1QTe3ZxpAf2ZNWVp5iQAKuhvSMvJiMuqYJ4T21yaTBnBP3arLWRxL9fsQFxjPYfdQaqAUz",
  "key16": "3JVdyRFzga53Q7C3b1nvimLdTkZSnNbqZRbVCQss4cgtga1f4jZoNpKztbpAr6pZ899jsMhhG2TsGHjNDtGsrKpH",
  "key17": "3S6rZ1XLZzZZUASV65gzbeggnnpRaNH3o1cEgjRDen6y7wLgn1LK7Gc3j7E5VxX67GErLKwoXjcHDUNaFApmwCrz",
  "key18": "4m3nbmJ7fCqS87Y4UpnTNRrJc4TLoaa3SDtj4PKqL5JW8RkwWyHemStdFnzdXJrJBfyK7PMHpTUTnB2W3DkJ895x",
  "key19": "5fbkCvQWrhidjq2EBejCnruQ2LJ1mG55rjbute42yxe2Paw4SDrXrb5119ZVT3ohqQ9YF4HF1NZcA18xMeMvjWAA",
  "key20": "3wUaF9yCz2wneYpdhWqjTVvMdXvnCQaDUDRVtXyeS4TVQKakb3nsG2d4nHSTScEkX9TGmrposqQU9ULyTx4GPEBq",
  "key21": "41sRrpuHMb4HAVgUBFRycJqTo54WSYTEjiXkJ787L6W9XjoNFw24MQyUsAuC1QRvY9ZqchMEDiyyxNNivYFy3J6s",
  "key22": "Cw2f4oLwuCS9wvpqMUcwhpV9Z7SjmVReLJntCX2jFHu3FHTwqLt8RNEbZYSchFjkJ7R8wSGZaAmHdMs4sEHAV88",
  "key23": "kK99rUzN7hTLnpLwieawMaa9SQEWt3Df9BN1sJv84rB1X2fNKDSQzuZWxNF81DZRtJ8JeaUukqsU1xSuhepiKnT",
  "key24": "D5dFhH1egq28i9XHmy4pyPoPyCBcvyinrbuDngscM2MPopDAWiWCs7C1df5FgwL3EUSMwpjBZneYiYhYxkGbMe3",
  "key25": "mmBawNB9Js3SmqAMzsdFfVTEyMh2FUmWyVjcbzTuEkCLVFyho7RFMpz5sSZX4GL2dUaTPx6V77UYVzvBmQzD6bG",
  "key26": "66NUmikwz7rBwaX99uMNYaSyQaebCsBBGk96NsrWPFcZyXkS8mT7z7DV1YUKuEqqrk8EWcq45yRz5aYQisKkYLgg",
  "key27": "FN2i8agqphctyt2w8Nee65FxrLJowMtShfcrH2rhyCTdpVPAMSErPw852J2UUymjgB3grWPA6ApV2oq4XxtERDL",
  "key28": "2hJqasn7opohznjjjvMaD4uRLN5zc2BRorUtJAYWQKLYzU5GNS4ZBkp4E3s3PPQpvBwEfziUnz8nXcQhiNTu3WtM",
  "key29": "4Z6fvgTxn9qnXQMYFLEUEzCm4JQqWJTyvbMS4b6JjtKeBTXGJ3TtLp5hF4ftZ48oPKi1BwFLJxupJa4Hxb5hgSH3",
  "key30": "4rpo4qYW4PksKMw47qZHr1e9t5o7aZpmHGuzt9nhgFtphUtQT2s2Mfx11SVmVPMhpWYJGafavVhEDkc1DZpB2zEJ",
  "key31": "4mQTQdaziDMtVWcW6zVDsRGApJVAvLCU49SSj6zwHqzHnGwmt1Lc1c17k6haRnLdVDsg2uPdiJzdpTKrh6g1a9tP",
  "key32": "5MQxaVL4ZWCkQHCsb3QkWFyb8jVjanpGshztwTYubTw36aMQJ22M4bXufjLCNmKfdLC375rzh6NbCZeCxq4FWs7u",
  "key33": "2qdkQogiz3xESeVNuqh7nuv6P5A6igNvg6LsnVvEdrGQ8eRdV2ikULktorUvrn2GdBjWBoVmG6s1jfxP7PGWK5FF",
  "key34": "3huUrBsPYGJQPAawZyMPtzDnuLENZs6VL2HH2frH8xpJJdybAYH2XhD4F9wsvvDQqNCBffXvphoFodKtBv3bDXT1",
  "key35": "5NTdGn9WkdMwKieaLTwxiAez1132xUp2AmaQcEKDMFpdQX5sbgdAXfetjiYFmPPNaBiJsQcs8QvwGYynXA6YiEMb",
  "key36": "565uKGK8DFd9W57tG4fvKYcN6X7Bw1vuJWb8wByAfCoDa3prpZEurL3mSB5xWtKzCu3X1c5q2uGvCseRaBFhsoyF",
  "key37": "y2RWT2QC7x8FRQnmYNXVa28Yk7L4JPQAQoyBFPZoYosG8JcA9EKfFWq2Y7cGq3x6awrXRCt5aNtm4kRpkWJPggv",
  "key38": "56JZ6big6n1NkNmRhgqLivBa5v7M5rV3QLDNFknWGbvq7uCcBEkhFVtJNjv4uNydcA8CeMQLXh2kDAJcEUMzViED",
  "key39": "4YPFU9Pv9Pt8TwiWZPuhookzNNkp9YXE3jUJNE8qHdCaHoUcHCFDg4eW6RBprFXWXY4r71LLBwBmaewYCD4ZxsGJ",
  "key40": "dgAN3K8AUNprC78Q7zzYSwtSxRQtEjxJuDobd2KQBjus5SbPyYi7kBiMYCwK6LcMuBpnoDv8cDXWAJuZaNj3Cd1",
  "key41": "5PvGDZreJoVg1p6yLPpeixA5vZL5h48AJ96Uym19SKpurdsGvxjUbVLXAAfNZtR44FCYQTo8ZKmY46qQFcrgKpk1",
  "key42": "Mx8LKAdYE48gpu6pXD4V5n4V5HcYmXTz2qhTFSV8coYKAfx3wmd1csRrMvED3q8kmo4seyQNuZTNvDc5uooXky2",
  "key43": "2p9VrS9UppSyqRJvXDTRe1QdLMv1g6C1KJujE1hHdcHmqPk8Abb5VNUQZ85L4syQ3dQSBTGsCcTcSNzADZLQ3JU",
  "key44": "4u5kvUEAWv5owzxdNkL9NM6GJtnRgiXAxWnWZi6Txi8h1eXirMDE2ir15SEHbgMuuCt7a6G9o3qBdKXbA3wx5j56",
  "key45": "2L1WoqMv9LuQz5Es6MZMYLMq75tGqZe5G7TuR3LiRiVx7zGL7q8fZFmq6ikKboifeXaxT1LNXAYUg6Zt3fRmUqCR"
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
