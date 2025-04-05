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
    "5gDDuxpT4KvKNvpHfmWyLfComhWcHmXxEUYqRFKbtFBSkCKAM7Jh6dqH9s6G4P7HAgYpNeyuhwtkwRicLwiGiYRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zBh8oBNciYa7dC2NdLaG5JhM2bQ2ypxRc87LY7yJTW5SuUKwe7FGkvZtkSEZk3r58no1XG7ZNwb6XbdRr7ZxVV6",
  "key1": "4ez8iSFFztF2mE3STspAmCrmYkbhDrhzkeZ2AbhvqokDUwcFjvKs5GmJtpdATizw9rouaLYLnsSE3vwshh17VEQE",
  "key2": "2kRGeDoJq17nWbxPt7bdBMskdHQXiaSk4pbW4DKtAaKsP7RQnAkhQixV8xuakkwDfWaPzWGghivkxojX5fBuSXUF",
  "key3": "3CijcHEdhBXQcdtePVwi1YztP6hFn6aH22fYPSccLRKpUdpAcnh4ZFwkjve6w6cXDXpTo8PgpuVXNHH3UKjsrdQ2",
  "key4": "4kj3542rAUq8Z3FDPEynuFUkRUfmrXCUpMSA9ULSQu26GEggTdSqHd5khqZkYcUE1cx3pdq7wSNKfjB8DDbPUUaJ",
  "key5": "5DRb1fAngjUGNz5ppW7xkVupDzXYVcuGa8VqDtwdMLzMXkZgJDXNRG4ia2hBFw1YvtBwqTUQBZhjrvs1T7MeUXdw",
  "key6": "2zXvXUy17z77yQHQAaUDL4HHQBcPmPvqj418kwNvkDU2n8SryKCBAkKbCNfahNq7XdBxFtt5EH2RVqi4UJMtYdK2",
  "key7": "3xeTLYpQsCH7L5r5EvMd5aZL2tVeSzup1yCgtpsfWGEBFicSbfFueR2W5L2sLdZfU3KC1nJhMnPHkMQJce6oAFc6",
  "key8": "3i5pa8RCACZJu3QZLCumCu2LfEfbN4yUXz8esHD4zUFpB2hAZxbnqphDvtcpymAkvHvCdcFQoQwfR9iLfd6APf3b",
  "key9": "jQyJvWqMetWn1PCE6DY5WB1XuwrMh7bmoX65QqHtQPa1TFH2BBTRjLGn7Lz94CfuZK4pPUCL4A14JWa4oJqhGZC",
  "key10": "5X5xLXLdHFMAJGNhgGH7wqtGGy5oD99KNdrMfK9MnrFwuX8XoVMGLBBLadUUeHrPRdzKs7pCCtC7BgZeshzxqRak",
  "key11": "55FEebkftUTp55Z4ZDb3JTC8NzxQ8mdZnVZHo57q2si6n9gnb6ngDCH2vSeaEh7LDU4ZpFPPFe2kjRapyuNzK2C6",
  "key12": "1sqcWqz2hvD94eqivb3ciV1F3rAZrphPqnVRvtj2iTr55W7pZbPswQgbWHspaBxm83D2bcekaC1MFCCKYc3PXQZ",
  "key13": "2o4ZehuuFMBYgcGUgCoidmVHgzW86djGUFLYBpAo56awT1TLSTX4LiMSgCRJmwKBLbsRqdAZmQ5fPwsS5YQzvvCm",
  "key14": "baLHk97SWhZ4Z8Z1KNrBqYZjpKnTRakd44ragqmqVWGhbLkMkHhX6LAZk7qd1rD2zWPd5ZkiLnU61ZVNfvjow1k",
  "key15": "4BmGC8bA7cp2PUb48XUv2jVtiyMnovX2QtCb9SRjCv4ynDj1BmvjRdZGCZPzeDkXJsKmkjUJ3cxn3eVRuB3LZ1Ng",
  "key16": "4LhQ32b1fN4enXYSQ9uG5XGKRLAgiMfMnttUMMuwhuiSXYWJajreC3mc2nRDGiV6mune9jVT2Za7w7iQp66WMmXS",
  "key17": "2m2aQx3sEymJnFvFkbn6kQ4QYDJpEZCMv441HQgN2S7KGSZYC7sCHhihKGiuDPR2A3D85TLmB6RHQ8e4E1tb8gwJ",
  "key18": "51qowVHKAS235zeShCxFiJwWCRTffYd7jvihGqquKHsZtT1ey8bWU79N1utpcek8Ay1uxY13Bipjt8wqAmZn2rq",
  "key19": "2HkcdQzJTH5z7R8twqGW2oxksUFWYbHrj1mst8UovTrohTUm6pjrvoHM3dZxUk3dvzwSyy4jcGKzk1KqqgtnHM5s",
  "key20": "3ok95yzbkaSfmYc55eQkQYfAU6igfoMJydFYd8ZsKhtZaKXWQTVPTiFBuPW1S87Ze4kgFs1XHMmMdK4c4w9reNrC",
  "key21": "2mDiWbHMUvhufvNrHAgqAXnfERxE1ga8oQXB7kFNEz9eKRmWeXtAAWN37FikKCVfvyzzvKsX6Suo5y78LXjr9LNZ",
  "key22": "5b4xEPtYDp3AZudAgUAA5FwzMJUaXNxs4fSAXizGs3tLKCVSQoJ6LThRT8La8r7Tv3y7NWu2foWgpXqgm3DeLbG4",
  "key23": "5a2HstQcEZmtKkPy2uAgL6eajgdBXgGr55bS9NjG2WbtVjkYnReGytJjCQjq7TkynNXXZRNe7mHjwGjinWfZuzGH",
  "key24": "5B3oLsa2rsJKQdKmAJdn5cSG3sF1hPo9wCmC3Dap5HXhpqDoppTbuVW9DN7T4i1Jrs1Lveg8HV4vRvrxfuXGmTrc",
  "key25": "5qpppS99wYzFHaBYMWhRN57aDbFMoVvtVwhfx7Pxk3LkPaSgmcwZ2XV2vkYVALvC4EvA2EpWYbcxMp1kqwocmeME",
  "key26": "MQK5uSt8FTa7pRgzeX572XetiXePk3rdufJvTZjJQSqCZ4irWUZVSykmwYGx36uMB6VZHGqqVt7RDmPzxYcjCoU",
  "key27": "2xEVKcyZdeFcRfAjL9A2zREVjoBVrYbUGwN5SRNJqUjLPb5APYhrirzBCrSqKAHFbyTjCq6x8VyTMX91mmHuN4gF",
  "key28": "4PB8iRTT3RYCjs3EncRNi9mQSsM4nJHPNPuwAiw4vUvUxzsj95ycTTMoBwgXtSjpDd2Fugwkph8Nv8yKDz2jyrX7",
  "key29": "25p6vJEMj4irZnsbt4tCTkfbaj7wHUiu2ncLgJ8SRTd4FhLYC4mub6eyAQT1FTPCYzBYbUhbew61DJLx8cBQckUx",
  "key30": "aq3kFdUJv2cPttYTTdMMEY5vDHDdjL5NjAUZx1vsFB9j5VvsBbUAhZ6bHXRx6TZTL3n8aGiweSsPDovvGxstiHC",
  "key31": "4cDvqcMiLrTo5vDQ5x2MZQgZ5xJYh376PGJGqkuLphjiXK5cr34ZdwUG43Z8A1ojM3gJkTcVo3p1rMUAnM7JHdB9",
  "key32": "5mNkDfUU3tyaWzsCcPK1WZ7L7zjKPxVsG9CzwN7TFSRfEF5tLt3mBQ1ff5o6VExry6JGQRNJvSWmPCjTv8F61WWf",
  "key33": "JMvAx6fxDCmZrgsLC1oxBr8owrHrpZe2Uhajk4DzG4kGJ8DHBQenT9yi1VFTAEgZB4xhM4fKQ4TGfzBDofvbtZx",
  "key34": "522tTvJPjCE1Dg9KsZvgxnNBTTsZ4BbA9HGXNrc7yWJNEogxZ4nDZQ6EsxJG9tW8wS7XctqnU95zXVWwZ7P3yN3r",
  "key35": "4NWjYov7cojKbiTYtLqHov454TCucrN8ZvwGa3rSXyTPFZCDVLt7XuHD5AD1v77MPsHY6TCmBNBFXhhedxyXPX2",
  "key36": "5XthAxVgPiBh4jk53xRGL2UoA5pBxmsuG7DfbSeoVxPF4mmzZNBMZvs7aZvDksN8AyNAwbR6TktXYSg2iHu94XHB",
  "key37": "3BR6Ma3izkdgr4TAnNimtyvPvULbh5vq1rHAAChy9UV8nQdQJ2ivc71TQDbjs1roN1YYpJDxLehhJ2P8LnAnKCPz",
  "key38": "2bXc65QFhPL8KeAruVzigrEscZmtEVK1D7VKpE13dVjHESg86jz9PyWd7Q7gVd6RqdHF2xSdp4uw4FMz5eGgtzoT",
  "key39": "zgzGgZc3CBMx3y9uxFHr3iwtoMUpDu3SPvZFh7NGvXKZJfp7Y6Wz7vbgGbTu34BEE6yZw3x8KmZcR2wG8qjsBk8"
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
