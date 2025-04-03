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
    "4Vjpocs2yrpBBg8Exxrnhptf5ifZtbD1srMk6xfx8GcnzzcHM37u1uHoycaAyE2HdveXHjy5MvRKiEBpL4J178eK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CTEJHFaGXgig9NW3nRTDGu6BNkXRFCY7Pn2jste8TAgcyjhKBoRDTtoxYMwejWFYQtWhKvkgSE9dFfEx953W8mQ",
  "key1": "5uqubuJ1tzEF6QDJL2M3rn4Wm694v7QDLtcd6RCBUHDbdX8EdfNkMhobk4x5ipAGrwHo1N7B6qagNdX1ab6jcpYq",
  "key2": "pZs5c97ajmK2bKnh7ngkoFxLyn9yy6R36hTn1gSezdFzzXCs8iDAtjRGXz2rs9mLMt8V4jgr7NNePGYeMtPv5am",
  "key3": "5BeSJhz59gAigpJm21byn6YRmu9ugT7BfikEBiLm8NcyxivE1pYuac4qjhhsUZome5z1vRrCCF4dwA5kLpXCU3kV",
  "key4": "f9Zp4J9K1rBpac4r8TNDTNwHmodihVNatrCRWVPo1W47SuF1jmKKDgGg6HPJVZhDiZnfkXdt6ScZaFSSgLuzrNY",
  "key5": "2nK9LE6Z3JqsxS9hqchwjTxHfsXb8oPPhzDqU99cYsiWTwYcxYp58y1rndFkEC3GbF6drg6EA62gMpYRLzkM7wo1",
  "key6": "2vAyUSaTioErDdfqaNt97Z6gZGjdM2dHt8rSTPiyZ6enyt1jMzEtK8HMm6LzfojyrtZhu1gWW7rv9iVS3362rhU9",
  "key7": "2YixsFaBKyAbp4zFy9v3WNyuiikyzWyFiaiiiNgYZ14n2aXJ4kt9yh9p55np2Nq4cAsvKitsZ1A1FHr7XunQVKL7",
  "key8": "3fRE7ndrPEcnVXkGqducgx6Byj9mAViUygj7xcWqVV1BaN7NAkcnymSfv9gb2o72z8NkrTNYPE2J2euUVGXb1Dy4",
  "key9": "4qhbXMu7CvKfmJa9wAE5HF6EwyJA4aEFd6L14MtEukh1fsG9MS24Nc6myU2jAqgNxfC54hvQ88gcuVvN5f6E6LMY",
  "key10": "4euSvNvwHeZNgkditEpL1EqVqV5NhhWnzGScxDiJSMvrVjBdUH9XWDMQr2G7bPbjPV4dzEMHC9c7SF54XLNsPH5G",
  "key11": "Q7mTBzp49NKEyCtxKzz8xMNAQRvDkhtbQZxS6tG4fm96UcpCrmAsiKCv4wQXqp25we942Q786NjM9gHvZvf8eGC",
  "key12": "4w9btG2NNqnf3MFZ1fjN5WbLX9LaYKvAHwgAq8u8i8atD8irJ26cfa3PFuZsVMnrHoMH1c1waEh7fLxqRPZetb2L",
  "key13": "2nncMb8FKJ5G16tGy8m7pEgqtz6x2FKFaM85oaoNs97tStPjZ8BJ25QWzPvRTD6HDXvZ9d42sdduyGyutKuWfPPJ",
  "key14": "5sEv5b6GqL5gyhN49KrESh9SoKH9QFKHaFJGtPQ72kBhBU8qEpw3azpZbpovjJjspa8P5yyc8qBumzhA1LUAxFmX",
  "key15": "3xYxp1gP1CbHZHvPyGd5pYk2hsjzqxoUyx4kZZ6D5dE5d32TBU1w8Rhxnj45y7g5YGR5hKPeEWruf8Spbq8ZCWXf",
  "key16": "2zfNCbctmMsM1PGjAtbfAEM3Rxycw4oow1HwKFvMogHVPTj5UYy38ctKCoubNiR511xgvYkX3ppxmPNdFup5MNtp",
  "key17": "4CP2xn7AaMvGeNbiFUxkoPL7DvRXZY4ajbui5GNCJ3yAQFy9c33ArjU6k1BL8HmHbeq7mEvRSuUQqmnLTGaAj8f1",
  "key18": "2jMGFRKyQoTcmbmuApA94qaYckfGBcuZHruZzsdWeqUb5WiKepXWtgoDTBAecpocMZJAcezhFs5pVhvGD2tv2uqb",
  "key19": "2Hrvdh5PzDMQBBANc8Kwi4U2uFDGwqcwVHyQDFA6tHzS7LaxYjKEHyhYcuS2zfR6Hk83gqem4BjvW8KYVmsnGnYZ",
  "key20": "2yqzm1e5wxExpyCfHGVFbJyxugu3gZwUvYRMREF7kDafPjN4XEdjrgq7QoMhZzTg4Kg4B7CrxxUgR6ZjtbH3G3QF",
  "key21": "63adpAGdFnVdhxYXJuUryWLt1YBKFo5NFkAXvk7jxCpyNFjSV4fpjH48HuXftEpqUTZmzGH6F3Y62FWC9uRiCGDa",
  "key22": "SmxfsSbAfRoiWHEx1bCJcu5tZN6JN8woxr3kJohQqipZbT7Fkcsb5N6z7BBmLesivexzUaYNv8ZoxnfUBgHPu2A",
  "key23": "5uz2ryRMrC3QxZEkBjqaNkuWVM5GmgUrEJET9dZCpVPDEUxFUFUHatBoYGEL34LzE69qgCRyG7jo39A7Cc3jgFqe",
  "key24": "3q8uT5wdUuvi4sLfoEWpiUcKDc64cq3jVqZbMAxQWPLUSLQaN4WrvChann5FUqQ2je8mZbQETwbNCHNu3cjWpMPj",
  "key25": "5CFuE8rP91oq3LkT4DMz1WJzwoWgcxGjxthMiDVcjbdj7gwrRrS4mhDD5KiSx2Q9oas8zXF7iaBXn7QzxKXmDmub"
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
