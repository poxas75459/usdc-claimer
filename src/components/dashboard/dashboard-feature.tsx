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
    "47rFJQMG5V2cv2Kh4vZWqqi1V13bMYteby1vb22qw6rc4N6XhEZRPTM5t5yjc8epfBzo9cJafKqRtWcB7TyqTqii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43x3Gr9f6fC1hcQ1SeFH64L4kPiVjs3pFrz7yKreXjq4i12SDWCfy3Qid4SRHcKXaeHRDf26DajFfWh4sv8RCkkp",
  "key1": "xS5QjWsaw4ZzsDhMzC1dnvqZn5W1RFYSFmZD9JfUCVeWRbKBbCUszDDKnBFKR8gSE57GotT7G21nMUCpZZ6QXS1",
  "key2": "4Pe7Z2MvhFowCnaAvRReWfpTpbLTB6X1F7pKtY6MBhLPnZibHHqCZUQJpqUaXP3H9NA8bwUsr5Jq9wGqPDHzayzQ",
  "key3": "63NyCyzF2crNkDFBzTJH85oKYyYRG96FrHJxtDaBPhMfoPWxjbSHgsFRSEAsZHjN6WzJAmnd6pt89YC7GvnM89Hc",
  "key4": "3ad1XEJ1EUaX7u5pkdcKtWuyd45d9eJmZUiew1D6SJF3v8Z7gL4veF19S98mFiRY4iNdhDSYDn8KgAvr2DB7UBjX",
  "key5": "6EaABtHdaoU7VRjeXGhiZq8uERuj4sRDvbpYNuwHkEsiQGYGUuXhqSRxeMbGnVf4GAaTbThnHXe9cFTt9j3PjqL",
  "key6": "27J2T8f4gjepQXAT8GNjtjMVryJ39x3WCRerp4mcW6KmwKSWcWUgrynrWT1FDy6AFRisWHdkiH8HEQhx5ddUBT3D",
  "key7": "3m3waVDFxnEpPtS6ma4PVxqVXPhz7PEW9qqxuH8DbxdcFXrtMhvqJL3QU9J5kTJWNHCBghrgpx88t6uzawhSgXF7",
  "key8": "9FuvASu2FN7xr96gCjpTK2XvEm3Dig5hu5sM21ge3Ao7DHy8sZtrKpvaQav3oigkjjabqGer2obZnQicAzh7CxF",
  "key9": "5LpEitTZknbc3MNuoL9VrnSjLw3FDB8SAuWq3aDT47e5JhPhXsCDcaXSmERV4jhHrsU7sNAYWrmrcQWFeJnsXjxw",
  "key10": "2io4ekTEPQBwYzQtG3gCXAbkU9icJxP9fprG5hes2nNqwfAM1AgvvNBkAVhY2EzLfJbQUZKHfi7TGq84ePHvajUE",
  "key11": "firx2bc422UXVGBpTpjAKfYhcteW17UxH2PV8vA4x97YQsKJmpVPdyL8xY5R8TV1HjoLWuVYhQXfmGE7WSfALX5",
  "key12": "4WHtMiWjMjgKqRrsv6hd6S2sD22C1TfaU8Y16FLqxBFzBEdBdzMnxqEbE3yvHFSssVP8yiNsP2MQmPrmwaAs1nNi",
  "key13": "2PqrRWgujRsLqYXTmGHi1K292ogdtsdxhbrFVxJ5HVXGxJzd4d57hEqKQSCgWjnbFLWPaS8PNM6cMfcm2uTDhDtt",
  "key14": "51cwYRT1oDDfTwLPXfsMWNRxwYZHmYcj2SvGaD8YveFRkaDjkbYfig9BRFQFt4jPDLpwGAp84EW49ZjtYX2VtZH7",
  "key15": "2LRCpJBNaJuijcmXLnCPveDaYKSfmPXMvHeARn2f2RbTzVfGJFgvMgAanXf4p88CnuPZYgusqCYnX9TzjZmzzGc4",
  "key16": "Dyfz6wU8HyQ1VfnyjCneuBj2T6rqzSDXERwnPsWLHKpv2oy3K1uJxYFMdq3mbyJVB5iGtgaGC43k5RXquTBuTeM",
  "key17": "365NGEAQRnpmQArwV4LjG8LCntcW1kuZSABf1v2dp2jS79VXEvAiEqHCDANtQDjFxQje1ePHxrX9UTSW6vr2F1Yq",
  "key18": "3hJHfw3VGMjRRVPQrvULSmGdpKofvTz8iEbf4LyKBXm1yLwGmLnFMDU91z9jjRQDM1TxWNNqZEh2ngSyTchHnGJp",
  "key19": "4RpknpoWuSeAcRFwKDcqW8nuMj7GNPB1idff6HcHfgTaHK6x7GRxrTkP1x6D6A7SHeA5sG9x781DL35GdyZcAFKV",
  "key20": "5p7ujM7WRadV4zerUAa4SKuBLf8T7FendX7pcTwcQrZZBsxjSTt5V6PGJGjN5kaGomuxurNKkucQpF9oWHCUZhp4",
  "key21": "3mBRVcRJt4EEBswVcbybp8J7aoM8wj88XXAqwFmPucPnUanrGrBkXnWUouL9wn4mzxbCf9zJURxt3bv8px1zggPD",
  "key22": "2a2XJPU5gAuEU82krFBBmaq3JEGHs3M7NqCNhsfbDXeop7RwN3mKsJhC69APpWHx7JP7mg3s1CKge8asjr2qhNFZ",
  "key23": "5CzEj1SQmywywCDc8HRW3rBntYdemLBed111DM8Q5DGhQRAFVwM1kkAq7BevMXNPc4cTGZRENfShMxoG298SHU4d",
  "key24": "5BJi4DDNESinAi4i98WiQZUYhzTUNyxoWYUiTca2paqLyLzL9nuH5PpkaSyvEVycBQpbvUfcrZdsWQYWPdMLQnpj",
  "key25": "2qBjs1rfWnimWUiMCLFSj53PdVeVMKVTvVhx16HygwQj8oy8uWLLrmpvsSjxjEZwtEyHEE7YnTKU1w5bG1HjBqVs",
  "key26": "5HFDZsHttfVAZ96bNca8w2pTCyWNpe6rp8pGTF6zxkkLpCNk5VjGmiguEG7u32JcWf8UFZHF8TrP3jPp5BVcuZYX",
  "key27": "4PGwnFhEGQDBL8jMmde4oKm1Uxa8yVccwSE4YpLMEGbB7L8SY5jN8PPoL87rT2vu7t58F69kr4Kk617BEQSejB6q",
  "key28": "3H6Lq4nmYuLF12wHWXUpNDQuK89dF4L2Ex2DK59yaRxHBpQfJv5Vce9JGGzdHJ5ChrG5DByz6VgrQyf7E8eDtEeR",
  "key29": "3ADfKrtU1yU3g2bQwW6rXRJoumjhKLewzR8BD7ho276sMXLNChChXCnMeaHyhpmSHsry2Jbaodmu4Ldqt6kQMf99",
  "key30": "2iwNcjSDrSMrohkWidW8DgMZWbN1Ri9h52KdYpqf9Evj9xCA39PqqkcnXmRaKdVJUjKzyFAY1QCFTZyVSqH9Y7ZN",
  "key31": "5vHiMH4VDLqnJCUKCQDQXuUuMzRAzWJnB3LSPHRiQj4HVhegybYGVkAraVP5cqKWZLRN8bSEYqE9Wre5FSqxS2Tt",
  "key32": "2cqY7svrestEjW8n3iqxWF9rKQhitsHqB59X9Tw45QiWxXi8ZR5pUqcCToMU9hzZMXfqTHGrziVeUowyDTmBdjfr",
  "key33": "5fqtkrSRkXyQtPavdNe3H1n3Yqw7uvGAYv4c5efgprzrd6NTD2VNZqWiACsd7TjfYKr29DPfnExdQjGorHPxECtf",
  "key34": "4rezfJher2Jbnn8Fz2VZ7yjdYM4MVF4o6fQ7FUaQfyPyFcZ4po3v5Ut6CfRRziCTSo4wFmAKKs4cYrYBbzMSFze",
  "key35": "2K7p1wdJ5jQHkc8Che4twTjP4exjmbThF9Qsw52KSBRFqw4FotwADr3rdydpgr3hMEozgz9bpNeuwEav91S264cA",
  "key36": "2NbaTcGY4bgyk91Bj89QSzWtNG9MxzPxYG8wzeYPLbiQLEpAjZ7TxEPPKEG8ZPFRvnmfXr6mB6hnqxxD6J9wNM6Y",
  "key37": "457gusxtYDpuG9QfufQX2eAijyNNGnm9ArJrLtXQvCGsxKnuKKVtZF7FWQm51PCM6Ca2G1wvEe4BvtH7oFH2sBn1"
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
