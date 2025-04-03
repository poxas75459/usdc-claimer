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
    "2JUCCwubdr7w9fRX4cZJFt4G5pkXge2by9NLMBwpHhRukhJ6rW8prETWFvYicuHgYxR8yWbYBtHBBU4NExccEz8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pdew3iXwKNZnyh9PYkiDPEZNA3Tdt4LqmvREEyvfejb7Bcabrm9U4MNxETuzSALG4RcgYLH5t5T7yLhnJ7FMY4d",
  "key1": "3V8MdctMZD3wq4oe8VEKTWU7KzS33g25ryzKuWxxSE74FjCnooQ6X4cuNQ7tCpc8iB3CHxEAEENyKBWjFazyVBDL",
  "key2": "3HhSr16CpKyGLeWaKmnWr4hPYkHS58hgobNQqM6Xm3BCNVk6eTDswvMXALL1qpphwBADD2WfhipcbhJDjyfVpA8n",
  "key3": "g7AsVGDrAMEZrG2CVkeLAeTcLKk5BAPpLDhwaHwcYkwBTKNoTT1LsniADwVU7jDTuNm7aA6JVDVSAnQAnTdgu5x",
  "key4": "2NAsJbBdd1tW5BhnDW2h6A7RFTnBwyUMQfFG9P7zXJ17R1J3FfqFL13gyvD59BSrCjyWwkPYzoFnkfT5tm3ChfgH",
  "key5": "33kVajHokQxrk4KUMNXyRDmRbgJZDfgbsNcbbJzqttaUg69wgurTqfdaav2tZKhNVPcaHx4fxzdMKUMtNk9h685h",
  "key6": "4og5qhGNAppo1JB3TZS8gJotrMftb5b5jCpSGSzkL89gVZGm8Ysd9iGkhuyKX7x72svxHTCABXBUyaJvK2GTferc",
  "key7": "43GL3WAThBBNKfcUsBT6Yo9cRHqYSGEbDk5WmB3dmqGBGH9HtuMb63tEVRKPuNLkoKyoqk4GMeqjk7DW2t9QrxZK",
  "key8": "QCqQYBMbBxNVtiPoiz61Fs4JGbMgZb2aAVfBuH7AZxFGgv92mWjBLsFZZBPKA2jNouz8osCAJ3uv7oNwfg1yM7K",
  "key9": "b7cPuDabs6vrs9YD6eA5bWWWNZ82PyxEsTf9cT7YNFsfVeQ53JUaCt45JNrMYVVpr9C1vfNg6JSkVsXRDUD9iVn",
  "key10": "4viyB9q4XKndRjykFXWYfCwVdCnBn7uKLz3nzqx613JQx2uovb7fHYtFqHPhA5pjm1n61tHst8LNuFhFs4vrZnZ8",
  "key11": "67YZXMv7d8XMKwF1YWjGu2UUDGQ1fQ7ZMN2VYKBKaUQeZQeaN9S9q1Az88wxnikQsuL4EQCWvLYY5JNmucYQs28f",
  "key12": "3Kopv284gdsEuwC5YTreGLpr318zPfXeh6rnTJJ6N6t9ZHSCqUA6Fdc3fvjFu93DX7or9Uu1nHXj1KMA6AmhKj9J",
  "key13": "4A3Fg4gsgJZUoyqeoNQfbegbHn7KvdFv4DhVCdA7VpVMbKALUtnYf2thEi6H92FHEXBpxX2PC4rQDJ6JaL7Y9Wh9",
  "key14": "K3bJrMUMrTkxaDBwTG7ozi9xjjagWMMQdS2wKF9Lu5xcrKQMfW3e4gdLCZVTaZggSjeZdK289HBGzrxHqWK12h6",
  "key15": "4jTx38MLQEtEWtSVAzdMd4yYnVEuDyq4AjXBktxFqneFXZXkLLDaGNErkReqCzMWxLXwpZCXvosGJ95SicSLsLJ",
  "key16": "2KiBoZ7jUt8THgUbGfLbw65MWaVLxWDGWGasq5qGqCKvpzJGiUpM1meNCP8pCmzawheKKfdkGhpjBeychkUnVovD",
  "key17": "aLQQpr7gBiQLifYJ4iJ5GXaGWdwXne7nk2jAZ3LnPjVndyNbyRbnjDrQxhdX3Vgc7XD6NWk1sNvQkzhG9jMWrQa",
  "key18": "5gVKohWGAx8ayBWaCvjzTaFkV1KRaRmuNPq5LTpNZFjdt27J3AnJSW1N3z5prgr3iZUWoNyaEKPq7enYt3s8SQRD",
  "key19": "23gECsdhRhyS7b5XmJam1TBL1LkYrohZddss8VZmnCVxYtjRfkoSbKp78UUPZXMYJ8JmAvxij1tKEYZ1kf2Tx3T9",
  "key20": "4AKg4ADfNyHUXXKLB8E9vCgbLCnCZDYuwzSCAusW9gVZsBYyGq1FC8dte8hDhp5gYcwBSDahw3eycFp1pTeX7Arn",
  "key21": "fR8njYmH4BznB3XZSGKiE5DdThG7NbYQFtjV9QRtvNJXJNkUj6kYtugy86iHq8vFDz6Qsjd1Pt3JPmxkvPN5wnH",
  "key22": "gZR7hCKEV48E7c11KCHYHaNPMHG4uDdFc7NWDYDef3CZuAK115UuPGqjbyDz1CxuhKmDkaacrRZvoWaqpKmzn42",
  "key23": "5Z8YEU6aNdUPAAXBFa4PTn2mXXDGmYA6b9DV5yqXMkcnAKWJQawTeWVyw81LSyuCDNgT92btHayKYFbbU7revz2G",
  "key24": "cApWPYV5iXrYGURepXweqdzpWp2xsR2hdx7aCk1TdNeGQNLHUYhDKqJ2nERf4HHBQsyv3JVU8B67TxCV9KWPQwd",
  "key25": "3jRvKhFaKuPqUwxPpXTSUBRkNG2viBrNfBNK9d1LVyWJKRRGAYeZEjYuQdpR18LZGurCna7q4WU6qphwDsi4YKbW",
  "key26": "Etm18P6ZULu48EomDwbXjjK8N6gd5WaL7Dcb5jo3vbPHB2GBzTRSn6LGkJ31VEkiSrbARrSNUikyLq851B1UCMf",
  "key27": "SCdVvv1VNALd1BwwSB1rCTbikdwTEkjecAMsTeqMJxZjUg8kJss42zxPKJEzuBhGr4W2xku7hacfZjngRfCPU6j",
  "key28": "n1vjChzeDTcaj9vn37c73GPeUaphYosL8R4XtK5qAoGLouZNeSb9dopeVUEdJcn5NwaCVAZGRuSQFyVBfdTbBiK",
  "key29": "dFLShtzPqti5cHJsoCw24Mxk57Tf5un62HtbDZ7G4oXLUVpa4emzQk6Hky114oYiTji7zdzGRST2BrHRwB6uNYg",
  "key30": "4aCGYMSro1R28rjdHoow5X4RjDPNWgrw1KHz1DVHtXGGkgppQUjUKRuequJsSYuPsBth2hRebGQsWXRit3H2aJGh",
  "key31": "2pZAzjDDB5vcAAPmKQtH4ehy7T93CyDiHw43aaCoQ63NxkoBzSrz1yKoRSym2yUq7KHX4yNJ4sDmthkrEKVFzJUD",
  "key32": "xFsCQQ1UUQYGcNdw7zoYdtH3sfYgnMJM4o7PA8QrDZXFaLjfZdUGpfYyZpBRGBSDFmFG6RSGpeSfR3cfzT4c4Vu",
  "key33": "67k9x6Yys4S9jCUA5UByihnkHbKwE4SCPdVXFbLkUb4MarXLhyTZfmkQaUN9LEfSWCVVjCVqdPVUEM1wCtmZ6wyW",
  "key34": "4Md7F4Jer65MF9J989diQA8kwTgrBm2AYGp3dyiuh3bZdyjNbNXe9d8VXdvzTaiF5Jh7aMTLiWKD2Kzy411sUzuW",
  "key35": "WeZEQNKKV68MBpr56pQAcxErBQ6NLHTkXiN4k6s2p5T3ARthQ9bk9wT56Q8hh4TMoAm3HzCBjaZWUP6dgRqc3kP",
  "key36": "3Sy5ehN5MMmH4V7Z4erKK8E5mWsWG1t7wuuhg9ZqCpHbgaw7qyUfMM9AP3m1EHqPhoNs6zwXutVgQjfVYvSG2SRW",
  "key37": "5g5sKUG44CxLrcQGzwoNquKX5GfWXMASVVz4TwkYuV5y1yTcs62uWdQLHXv8PJfj9xnoQFYSyuwU674MBCy6pq8o",
  "key38": "3xZkVQhfWoLRTd5SJCozhp9ntRzMMybJAotMvSp4FfioxHGqQVyxGs2q8Bqq476CsJHpAW14gKBtg9sPQ8aAhRvR",
  "key39": "5muobMmo6XHJmaEgtg6YkfGxRkubVczRDUoNWM4DVkWJk1Dp89kjP5bTmRPz1JkUhFwkZNJpJQN53sfzuZ1YRhUu",
  "key40": "65PaaQWowfV17K13LqVCrA8LWqGbD2JEDsstMeNQnYfkWhnNXu1WmpkwpV5hS4pYSwsMEpzxRnmRcxSYzk8J1Rs3",
  "key41": "3M6gFH9fzQjNm78KaFfhhjYvfb1Bmo1bH4a74DfHt91DJW725TYWfQudhFgN4Yo2jgb4F53kRkjbPtCgD2qK1SEf",
  "key42": "2RMfMQqHMoYbWMzhTGuHsgEFbf8kXGEQG1Sg4XMGverUPtux3mifdz2K5ZCKxCVGx5oV4zmxCKhW1vnciNHyA8Sw"
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
