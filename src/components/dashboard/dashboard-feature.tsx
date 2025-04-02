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
    "wGsrdebJ7FP5fUYx9qaQDvVa2jrmQMNT8L57z3QDgAaSj5QCNJ2cHoc9hWFDxjwjn9KaAX72pidU5oZFugcTL8x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44zShyL2MsZ2pXjpTMfWrPf8MsM7pZZN7Bu3NHJPuuzTKuUb5gxdAriKqchamAGoWSZmbnB5dRPXzyptuAtPDNVu",
  "key1": "4ZFvA3QPPjerR4Ec4FDhhWM9zFZqFnaC76qpGjBM2ARXcgamzCZfvpCzCMhcSb1tTuvFpwDFcseAGNMtgrSk7Dwo",
  "key2": "67htkSMGk2qAEZwwTgLnT2jyCcshHmXEwcXFUZLuVggPFjGDNSqKtiXvgNguHXkLd5WVmbXbRw95bVyugvA5zWXZ",
  "key3": "2EyPV9Uc1SWzBXNbS3sbHmo1ZSLS5o9Zoohsif9svJkhj8KvCcWKCq5xpRcc6veR3ftCSY3amfXcgYHEgWWrsDAi",
  "key4": "3jyb4dBwbaGwhqP1dpsFqWo967F6mH5cAD5WGPVfYeE9DnBJFH9gTRgzsNzUK3c9UWdFwtVXKy1hiaPwM1LhRzS7",
  "key5": "56bBGFxysLyn4vnG1R7DFvpnP7jrSf9hf8E6iiWRnqFwLtZwkqURsPUcHUb1R8hsLYmpTjbNrUnwFgHkoQTcvXoM",
  "key6": "5ZfghdYn2XwdMmXBTxsRzPCW7hGtZQ1Jd7Lb8wC6Ux1Wi4VbgFDXEh6sEoDTRXUQGCzxRrE7ZMDUF7rfaMbTTUCz",
  "key7": "4bcNiG1SGyhkvWnMiQyWbBfrqJiwGk1pTViHgH3RqogMF5DXSjdNAPBo9DBaZCPYzPGLm6uKxofLpKzqCEz3MKTd",
  "key8": "3HoNabp53gdTXDHaaaiEA7u52CLkcvL4pdBcp5qBGHxes9woD26mBqx84wU23GuMDBz4E1ToSZbgNeKmy7Ftsgme",
  "key9": "2PJAj3LyVyqBx37uJvfu2AMqSkYZpzwnYV8xPZEBvmPnbQZbXbFH31wBfa5Y4uwDc5V4dDSs13seFFzz2Nt9mCep",
  "key10": "4jdUQFhJZ1YMLNp5rGu6JTTRmWV8rzfvEFu9PgHFnn1ZQN9CMowyQjSzcvAuL1v3gJX1W9M95p7sci68jqPimBsZ",
  "key11": "2mtmPe8M74Ey2aiQuA2zryp996AaMFRhhwJMG27JhDsKZrEXJFGALuX7qBRKrYqF4GUtn5cdBzggYTqH524CHc1i",
  "key12": "Q5T5ruvf8jM3x3L6vx285bTFocyyfV3YS3N4qCNye6gpX1a4RNVxnvtezsNuG2zg1aJJXpSmdhWBviuWs51W9y5",
  "key13": "5h9JBjoJdd2vThAPbHmMb51NN7ZgwMLdSqeWu3hq68vq9x8uK949QQJmKBHKtHZb4Wf832jRhyNhJSfjisL8dWqH",
  "key14": "3q9x3XyqWgbfBfwZQyCtUeQb7VvtpSZshDCfCSFdSYqjLBYMKH3STPZttV4JHR5b2cbtRxa2pZoDBb3XMJuWA28t",
  "key15": "5obeBbzrGfa47PnhFE3K77L3jevSh4YJGa6gezMpaWjzceiULW6KSD9NsVW6GbT6fs7GbzccShWRKoh1tPgvSsz7",
  "key16": "2ENLhnie6cRquX8e2fbpErrBrRdaEfQPHf2zDy39katb16TQ7pcqPf4hRnYnX9YcL2gnZbbPzrG4prHyY98xuw1X",
  "key17": "3RVp9GmU7HjDEoVB5rErWg7uue5gqFxPwnx7VzikZQZ3pfofv5ZkCi8bkp9WAiQ2ay27Wd9Y81RNLAjGhgNRoRLu",
  "key18": "2bdwKKaPYJJwPfS5oqa88iYdomQ7PCUZtPfbC8MhHbzuGEsBZfLH1ix8nvQzi8mbX3HUxWG1mBEVU7LNTBr1G6dR",
  "key19": "4bbtGBfGFXTXZ5z3oorPBJdh44kwmxqrDczWtUbmt6z7KLFzQt3hf2s3bPhgvg6jZa28mZSKcW3fumPViGKG34Dv",
  "key20": "3kYnAKaCgG7GHEc1kkRxVhd9p8Kzfv4BNpYkSrYCME2qvj6mZCHJuuqvRBJKtFSxHx3qur3wVB9Hcx4BcsVLbWug",
  "key21": "4Ap5bXHSadkpN5Nqdi1n2w1vWYstd4TkTJChyrDkygKndiFzchkJVqoy9bKKFQkuNEj7gwsZVgmZDnfFdAARkH29",
  "key22": "3dvuBgKjpSfEx8C9RE7WQiA6qHokMmgksv3Kd72ziGB3kSBU1YmovTUjFAcixPNi9NpbBph2sQxXm4PyqG1WUUfe",
  "key23": "2pYVb9LqsMre6FJoznvYH4kVsfHf4zZeKJgCFFNerwjwrECuEH3qDAY1LDchU89BTwsGGtyyDSqDWXMigKBsZ62h",
  "key24": "4v4wfwzb73X28a17ncK3Ue2yVkYS3A8Uh4a7YNPTX1okhaWgtQS4oq47A2HYZErabcVxutKAAB9Dz8MPmi7UJ71T",
  "key25": "3VvAcS7sCv7QFe21n5eYjxhnXBuytZr552oABLgwKmZPagfgxKahesYnqBxht3TYXK1TDmh2iRgA343AoEvm5xSw",
  "key26": "3eb6ex611b8qEBZVYhJt1mNicFgLEeiJNcqYwSnw5ywdiNYAycStXs6HPWKFCcfSbjcMns7TfNkud28MuyKU6tUb",
  "key27": "4etvhRBfdFiNHMerdNDB5ozTuYSqYsJXupjTa2CB8umygj4zzpWTKkxptayXxnHxZ5M8j3Kjr4pqhGfCURyrTLZn",
  "key28": "4vbu5VhotvehifqRszWGsorAtGvvBAwQnHaPmNoy8daoYGM8nnkB2XXUcu2RwSz2vq1EmsFKFxRHdLNr4ZwC6sYm",
  "key29": "5NgYp2H1HhcmyVSNHZLawNB4qvyWxC4bnf4uUEKShdpRt9tCY8dm187JcdL7FY9XqqhXmVSux3gUbDTqH17CS4h6",
  "key30": "5YzrEq9PkkC31AYnWTF4hqNt4wWCRTA9kHzJMCjYG89wftPtG3FzCTW6cbnZCCkHBNBpyAHqQivLEpy3iLtV4Tmh",
  "key31": "3rGYp1o7pgbPFigmaLF2cs3e8yQdMXvKqWbpR7zXhgqgHw6DGwy7c2aMYEaY1jF3NZ3nVvPmZSnbeXMFquHMSwoH",
  "key32": "3GgaC742hrTPW6PFaSD3cV2gyWoyywxgJn9fTCQP7fKjpNEjqEuBgzJzE3e92nqT2h1ADuW4H58bzLw7oa3qfyKr",
  "key33": "HkSGdQqsEVdvEMjU3RMZn5kcHRxTKbkfdaujoPKDF29jikkSRyycqgkDPMWMnon7F1TJhE8ARTkFhpFq52kNcaV",
  "key34": "3yZLnEAhtUUWMQvRb2bVEYf54frcS714g4EbkRCWx4NRAA7zWctXYHkpPBuAszCk5gng86zb15Qn1iZ2m1T14nee"
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
