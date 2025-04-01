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
    "3D9AN2w1yg1rvHSLZSMKvBAvqqiuFSKY77PJbX3ckRen51K7xfG7S3m1JBnLGgFrfxwF2YZVVJezu1PyAHgwJ8qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YLuTU6LSftnDkHatDrzB7pvudLpEv2bAADjFzDPD5BthBytBHp3yxVdMoxSqpsNnGkUvSxCy78qnEhc9T7TPnKn",
  "key1": "27Ttr8RExDDKzgdKWCCPPBj6fQuTohQmPkcQJDUTW86bUkFkHvoSxpJ8QcXarJQpj7xRKwRRa2erpqxcmituHCNH",
  "key2": "4FrPMbcaVBTXagCZwzaSJBwtgdQS8MkmrHitFJQhNeo8RaAx2HX9yHkCKjwZY7yFLe9hM6dzcHeG7UVUffaUF2WX",
  "key3": "3RyKYkn6hHVDHbr2VQKbc8hyrcph3ohFf5fLWJLWdJkEV6tT9pvJN37onM7TWx1JBo8ZRKmyyTCc16pjeecoypK1",
  "key4": "2xN3KNrhen4WTh8Hkse8TGcBCFTsVfh8AcMFuWEZNKT5i7RSMXi7zJJC5vn8FQ7va545pc1Y7MnaLi5nQbNJoT57",
  "key5": "3eLtAv9ddBvEGPUB59inwEGtuxR3JWbbfpnUtpi6MEcMzjrCd7adFAAjgJf1rSYeSRSD6Mko59oNSNQTyz9ZSebm",
  "key6": "2tje2XQnnrSLvAtnEQQwjacAwanpQ4AUBPdyic2D8xX3yu2F3BgjYcAfG5uM1vGE1QorZvoTCjzA2e8uLRdGN81u",
  "key7": "59PUyvCNbhh6PJJR7bCtzDjWEpFhCF9v7TpxNTnThjcG6yYYcHZWqdh2UdUrbjZucSXcqwZBW41frLcj8fh8rwae",
  "key8": "rZz3uiMARp6iKEf8T4bMqWKeQR7CsG19RevCz1xYdNJfGt6ihZQJhMtFA5kqjPY1qBeZVfLUAuEuSKHEcNJRQSd",
  "key9": "63LhtmNqiNPJrfA5RL5iniQX7Bfv7kRNtaJoZDDpCTgJ9RUqAH84zf3e3umhzyGkqj2HbS6nLmssrcji3KUYQA8L",
  "key10": "8omz2uWTX198ehA8x7j6uKsjMaVVmGi8mvKuRRPB3udtbGBJNQ8egnoQLn2nueWBJana4ekw8cGiPBqypeGWs8p",
  "key11": "4eXEynDbyT1DLy62FkhaHEZmUsEpShR1WBmpHzP4NRrtWiZKsB3LZTngSqZMPByXypHbPZP2jEoeiQQHgJJQMH5",
  "key12": "4KtXeo1z2Poi8NostJ7SsRnK34nYX2TFrcmwZnMdksZA9zPPZbmjkqF7yzzU3QBFHFsA8tQfcyyb6CxusmDLwrhC",
  "key13": "3Z3tLK9B75tDfaKyoUr9HEF11NRSFWk7T4RXGJvs2KyqttNDYPZo8snLcUXvX3AB9W2SbtRdEopUes19wsqihQfT",
  "key14": "5BcXovgZ8mpwoQozrygZNRaEUsqgRbRSzqgGEEbgzYz1uazkJCjkrHa2KmXaq8GZn2fVxSAH7dKHcm1ZLuiDvsXp",
  "key15": "5VMHcPqmdKKZeGGPXJ5hKbYM8dp1G1WhjyKCZCHRY27qzBfh9V5dAJ8pywXFz5tzGmJGLEhtKR6t9tnBrBQCKAbh",
  "key16": "5MmJZQtLEM92S3tAHCBDHhfL3yPgWcdEZBpX5nHY8M4SwwvXetXfGjUa3H4ZYkZWghU1ukQDw8GSo3uLVhPy13FH",
  "key17": "2hcSk9oNDoZLLaAeSniUQpT8wxNdunELhunJqXTZjQ5EHm6sgz8dwgT3w6CWFqwhDMxHPxzepKepPPmRY87Gz4oh",
  "key18": "AmyNaPdRuJSup52TNaCSR7KxyWCAfwQSbrTM1GdahCHsXiBmh9DGbHJYYbKTNQ6c3b6mrhRuj1JD9ajqE7hNvsw",
  "key19": "2VPNwmkb1QzooHNnVPKjYYFdZ56AgMN4rYq7TBp6enyvFPc7CwpSHX5FpPcjBpz66M4HRXmwidsPv7CkhomMghiw",
  "key20": "3CQjNfdNKGoSiLd5KCUA3ARhPWoEJ1YuLqxEjBiP2A6hrKDJJVnVjayszUpnyPaQoJu8TeUTLcucY1mXL85EbHZ2",
  "key21": "5TvEtwxNtJFuWdxzdLSyQgb7FjazNeCvirtEiCYsw8HKRbtxdusUVmGMdRH55zSQHSp2WugAw3DCmoeFbpohSQ74",
  "key22": "3foXi3k9nF2gS7p1AQnoEEuZJqu6yvk5Bsxw9KkFoW6NDHvU5zQDm1EEWVUo5xqo8s9FtPQtAW6qpkZdZKZC1ybZ",
  "key23": "2ZFSCSLM8rpwAFmnWBuEoykEdry1wS8vvTdwkda9qhCDK8jJmD3GV1UeER5s8mseooxmDmDWJnfhLnpMq5r9AuWf",
  "key24": "5W97EbfS3bScQgtJBgPoPNfJNVMzjrrYMhC3Z2wJspoFstrXt76WJ1otzeSu6z5Am8AG7Axs5QaCiA8R88r6GCv4",
  "key25": "ARWEuzXbCj2CPLKjCQtN8x56szAyKC7Wtzg1n1wEqdkJeGLU9geop2zjvHiJyb3Sp6GfEPP1Vfj2KPuuog4KagN",
  "key26": "3FLfZZyya5Mw4KY9CdzUYT6bJQoySfFYCyCeXMe1qKCRwJSeH99NQ4XiGXH9hXKEajH8FbwNoobaeKBAUQisYUBi",
  "key27": "538mF2X21eQgaiWGntcpD6bDWXZ9n3Kej4yoggDZaSJbtkzRZjexbfqqmYKEobwHeGNKk7QydoeUSXG7T9jCDyuW",
  "key28": "5eyyHSK6zeB6M6xYwh47WRMHj9oy4upnVgeK7M52XUsjbujbKRdao3NDRSq29JJt6xxsZ6sb1NznHofJg93s6pUF",
  "key29": "HphLQYfts7iZ4ZdxbJXio9RR1UnDuqvTeriL9gSnugTVjiRhfm9vpj7PHCZyTJ9LzjyjgVXVd9eXm5oV1mxGntv",
  "key30": "4rMxvozKBxH67EUaks2JFqNRADPj7mPHfDUKgb2kNRyiB5Sb6cLQLEpDNwqpnUGMxf3yDhUUPtx7qbWvm4Qa3mDy",
  "key31": "4aEmzKDzQsTysQTpLfQUx7h6gDzR3vbcdRy6fXttdEjfNyVPZaUSi2orScEVPm3GrBX8FXKheNtjVrGoKDyfRUQq",
  "key32": "4m65v6EP3iEXeRFGaP8pXWnhP8fhhjjP42mDmTQ6bcBeQmUn6mPpoN1KtP5VAb7djwPb9XDsdyR5RkUkMeyD6kaG",
  "key33": "37FEHxK9s7UNBd6ApcR2u1LJ3UTUrAZwDYfcGfuN8nzqsfMQwAVbuw3BWWGaQkeJ4sooqcdM7tU3BxutFASgvdXr",
  "key34": "3rnaawRBoSQGumN3H4CBmzjtPMUwhSxn7wE5rgrWEP4FxX5GjYKG9kqZeLRLwxbPnhwQej4kYnmGB9NWQPgXCCmD",
  "key35": "yeM97BprvzreKfHZE5PzRqE5pXNnKG1TtFrjYqKaXJwMNo7kS9Fv1VBRcjsvHpbciM5TSvrYSafGogRZujadFwW",
  "key36": "3V25nKNxXuW3QLXDgLc2RKkQHbJvPNj4jqRkVh5TG9vitDfRYKoyLxArPKbJsm1b53Lh8KXhT7XmQqUjuZwfWQUK",
  "key37": "R6BDgZg4XR2JkEi3cDYpN6VMn52V7pc1yfNRB4qGjjZuSbTxVAGt5ixB3XkWU8JVKAS3SP734CQA3h6bMd1CFtt",
  "key38": "UGHBkdshnC9ndzfD2yXhSJMP9vNXt5PP1bUewWWVyu2T38wJzhMqAr7XcBeojLbTpdoh2vTHPEEGAduZcX7hzDY"
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
