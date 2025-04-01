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
    "4BsUdkN9JSx2raZYCKKCa79WRNt3Yw17hWwEfrMsorquzDYPY3qJpcuKMgNdT3pZRg7wFqpd9eCr8J4nBisHEHch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F5oWERMFLQgGqQExGNqesqmRzMBvF4vov2krsm6FhfC1gxTYpY1WEUZvfiDZ4s3hBKHcg1cqiMQhwogeN3zQZPZ",
  "key1": "5AbpR65MaYJFgkiebphynYTxSkTvHRfLtgmYC8nQJvFc5XvAXnwAK7tWhqin56nDPsrDmbJH2edbxZam5KdtiWDr",
  "key2": "3TBKPxqbBoUU2Y5VFpEg58EPH21DueySP5ApHLAFRX2iVVYcwvSrxyB5BSY83ni7srfreXYLizSYbYp1L5xrPhbX",
  "key3": "24JXkVxgYT7nVNQD2WD941P9gEcMGgKKyGMxokFy5ze9rqH6nKeJPeqZFNQwBfjMp77qc2itc4qfZ8nwR1ZYvFak",
  "key4": "5E2n91wovLkqXSUqTwvAuXd4Xx2DaBaW1nx5ZGeeH4tstYN7zeVhNg5NDWWHKEKD9B7uXwFuLU4Q28dqeDwMKUFW",
  "key5": "4YHJLd6Guy9jbmXFS1HBnMAcb8zTiGqKBLvB2jmUt4t3NZdefGAiba9xA9RQGVVg4pPbBoVCyiPKkkiAgLCJHk93",
  "key6": "3eBgRaxPnbmeUbEjUUN15TsbKhBbmDaTdc6Yo3LYh3nUbPbUWBE2LmAHqRniWNAYno8D38udswVjdFDn73K1yDEj",
  "key7": "43rZoKzZMRAcTqTiJzTALvVh6k6JWC76tbVeWNKLf6St5y81NZGKLhtsnP7g6bH6uGDKohSPTSD6VrvHXX6fdSBK",
  "key8": "5azLwmDBpX4GVD7WyvCw24jta9rKNzCpFFaHiGo4uoXiBwPJD9DxJpTF8nCXEA1Z1qVaC6vfgSEZHHa4xnzCbzXE",
  "key9": "3zgGMF63qzgWAR3hTPBy3cLjyJAeqoutAWtmbDtjX1nHyAUMAWXHQcZTAUSAHgEsd6TRvMi2TGocbYabJeoo6tPQ",
  "key10": "4d7erS6xht6VA36DH84m8aYMqzdz8wRD5dc94ikCJTfF3EsZVrYn77R5giaqo2KXhjj119eoCq1ZZGzQqoLUk8e8",
  "key11": "2qwrG82cBuCUcpPPF4TMjGy7GpQBgmmu7ryb3kKhCFXG1rYDitB4fStuZuMLB2gsxQgGKzeN8KC7ocBRArfHLqNd",
  "key12": "2YSCsywLMdsduXFiEPkS6U3AJqpwe4tRJuKHmusW2Xz1e5wX8k5vsXjNbxt5VHNWtTMvQqoqWndJ8z7VXXHc3Ss4",
  "key13": "7riyeU4CaBVxgLtCntAck1E4RtKSJmurjYQoXdXd75RQHiNL3JpDcFWGNTSzk82i2bqYSE6d6SuvdfAxCNbkRVA",
  "key14": "3435T2Gk59AFFZuuXzifvUdcxwNLVqpAMj3QRKGH2pZM5FtGhjx6QBKANz5WmVXjfJk5cgNysPRp7LbjmENkdaQ7",
  "key15": "2nkfLsM81KGfv42ejy1qX76eCgWLi16C46PJMpffSSk9vSdxLjQfL195xr4xcWUAYEiXHAYE1zVe7poycSthzW75",
  "key16": "5VDKgXnnCQ8CWdaUUvRQVUVPuqS9gT4RisTXR1QKM5CKVoWXhLTDcS7oFD9sE4MmXcRK6nt4ETJdVyesxS8gArsf",
  "key17": "4bvGU6sv1oPsWQkcsi6JjutwcpbaD9uVsFK7NSMV9hNbddSJRzZBPeZF5iC7jVowy1ZrxgZvQkmptA1KAocJ4Fco",
  "key18": "5UNMuX2DMUxJvPVYZLvsbpcAymS4yYdwWeEqXyzYsGamRwrX7Mhtcp2QvQ9UHDyMio3oSNkvVv5SF5THKivPBuKT",
  "key19": "2p3vUEdg5dVnRGEPqooYaATLqUTPHVgCNZC9RwQ9YyJXNp7ALYqicFUoZFeckFEaYpFCfCpH542AmagTCzPjQq5b",
  "key20": "5qVbNcRBvzutPsroYVAfihi3sj17MCMpmNAhaTEGEHZSPFNZSrAxeakvquTkNAsGPfJLYsPrRYeenuQTT265jZ8e",
  "key21": "3dN1ey6j7AKzdgc4tJr89wTRW36wZiAGz37wD4pG3JV3A6nni78AiNGBVHbchBkH97TZbiWJx8SMGbwR1djkNetw",
  "key22": "4jNMrUXopFrifXk3i4mP8QPfVtJZyb2eaqptHiWRbEuXrRzq6LddJyAm62uN33sc8rpkQ66pnxARyJCeTcWzre6z",
  "key23": "3bFCecuQtAnC8SS3BLWTqsmBbEbggRPFk8NDhgDa3W6qeBLeZJcTA7DXbm28MMKx16hwEUXQ9J6SFsDRhCqXvsyK",
  "key24": "3Zh84RbH6jp6wLeAL5YWRxFViJqWtZBGKU2YA4tZTFzi2vMxDSqfzNM2ztRbzcJin11i9ibGLTk2aVp7Z6aCoy74",
  "key25": "3AYeBiJ1sMtAftZi58G7baNVZjCzCvEqpVDmEs8eQYJLVroC6VEugGiHf7sUqUwtFT11PSv75fUn1mcfotabAkHX",
  "key26": "4XZZtbK4yAp8cCXEok9Lw7Nnax9JxLgPsc5TSMXA41DpCdN9i1UyWUShuqBHq2GgMmPruoDWfDiordSmnZi7VXj6",
  "key27": "xDH6A4cnmzPssFZjonApS3LU7vXCdezEPHX1e9uP3o1VB2m1LdL3tpCQcTXViwkyM9tNUmt12eyn4RvwMcu9iPX"
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
