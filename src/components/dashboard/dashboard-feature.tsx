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
    "5QZ6KmkTxmJ21txSvfqQFrP3NEmgFfjdSEYezdWWKHBafN9EsWPnS3jEk9jnjTe2K4ZNye6YHfDAxNhP9mAKF583"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpy6dkV3ibtamfqs9LvLoPqGHitJP9YrfiPFsgnv37KzasRZF8YcSPdicJ1wD7Nn7PDXRpk7pbnc2YceNSR9ha2",
  "key1": "SxxoPFUwdVb2K1fTnpjvFjNw16NMzhz1SwsFwCBEhGGPPiAUCDFL5g4sZzKRgqHsHTq95tFvZViXBzm9iZWhqSn",
  "key2": "itWyyMy7YbzNTWs1dJkdCCWU87XZLzX7wFTGS7Za1qKAxS5rzrFqhtu37UDCpcy5GXQiadL6uNf1yzSEHibCyhD",
  "key3": "2PxbFmeMNzVWZvxJDZUquNKh5pfrUCSU1TgJ21SkdxU54isQCKA5aFoTr4CDjSNbyFdhjFzQkc4tYY5ip62tKsKM",
  "key4": "2QVf9rxhSdbxVRYv276GHvwn8BNFz1H2wEGDBPYVMHGpAFqRy76uQNmozEoyCoP72A3pzwEUE1HmaXjgxEbZim5C",
  "key5": "uCD8hEf5Lno3aWr8tASv82D9s7ZeM7jHGGetQxLRqscBa9z3grpn6J2B53i2UebG2w6BVSymETD1ceZUieJVXg6",
  "key6": "M9383JkF6T9Cjk2DMXnGcFtcXTmfYQSdpYw2bmzAwm8rY5SspLdgjmdwECxFLCr7Djz9voZcbEDRtyzf4KxURSZ",
  "key7": "3yvSSezFhjETX8dv1iSRsRPRhYctAawfDrYNTiNYX47qq9gQ4q9rVSCejnRLfG4hMGe2mZBnAejmiT61XGhu5tsw",
  "key8": "4Q3srdKD7wiSL8kdgzyd6U9K7pgcUt4QY7cJPt3pQjEtq9LwdfdQG2aqUcBuDiYb7wnEPq6Ywt7EpHgwqCkuhivv",
  "key9": "3hJTtrX9w1CaAnyEZfke1akZBqVvLE73tSr9BbWEqL1wgktnWhE3jG9RFppuLr4k7T9LN123cgi99Qs2HtM2Ay32",
  "key10": "5tU3xhSPsHrFpQXtWeWDwZUqYrma3w4NanxwfHsRRQ1vBYZfxYuxjRQGgZua2zbMHWug2M6ogU65jV2YPHYuNhCN",
  "key11": "4K8aT8nYUi2mKPq6awWv6AFWi6B9MB52SBSYRFsS63eCqMKszSpTRMizgLUw6HNs3oE1W59RJAqU6S2qdYCznQWf",
  "key12": "YwR75h64wgoYw1qwJbvo3Nv3RAp8ras6jYHvSeG1HFcs2eQtm7e4hKwepSh8NX16JEJ1JpByAtviTa8wVWkAc1D",
  "key13": "jiqSZyBzpbQLeENwQDKzAYheNYS1AVRrGpPLXTTxUxbpmnNxh1oLMTwzuN9SSMoQx7o2ewDEK8AKHwRFu5VvQm6",
  "key14": "3knqAEmfAmL9YfDmkVL8XMwnKvKDZYY94skXRj5N4U22KZ6JSwtBQBbteWBMiDuLapUCxvvomKcZDSJJZWoTf8zz",
  "key15": "64LsqGrTkSwRDLm3WFxrWhrGozUh1w9aKUcLv6KBUjQ9w5YqW7e9kCvjamu5QJfrjotsQYdEBTx4A47X8gPZA45Q",
  "key16": "2dueb9J8RtwUZGfhge8sazKANbzzgVS6GePYRVB5x6EwZajKyn9QxtPX4pVf8qfWDYani3tCTfWKMbJ9b2MrVYyz",
  "key17": "3mKgrSk1bu6uUoxMaDSJZdJ1aW46JHX456jNAukx9nJfoFUAH5yfA1VuJowZuWNi8iGMi9xDc41BVY1Yj93ehx1E",
  "key18": "3tEPMb88E1AFqtTq9aMeJHAnDGU9yYcMCWsAE3yfsNcuAidUzJZt3gv1k5a3kDAWAD468AAP1e9NkftBKhHdzmSA",
  "key19": "28MKbFmEvUeF8aJV7FYnjaoQbNaruthy7uDUSNdm91ozsEcACsweN2c8CEoD93GuSRHLcgLNSE82RSRXZyZdZTa1",
  "key20": "5Nr2vBZL7Fy5hzt2W6qZJHgRePoHGXeNeNmewHyiw8YDPVMq2y44fev8a4m3UA3J3HAwyRTcgoQY6n4numdXA1J9",
  "key21": "8aCqNtRGeJNuUn6mTaDuZScwNAqWGRyozLTBh8HuPTJjjFXKTCaL88WaxD8hiyyHknaTxv73hp6RwpDTK4QNnoA",
  "key22": "3F44mnzoCqaATvCp1MY7forDcgBNfpqvqYVsyg4YsphFuzLfsegRWzrFGst2maw27gmruffmGTDzEofRyhKmhGa1",
  "key23": "2UP5kyNFTFQqwchGEbWKRhY7J1upBMaWVhShzDVsMYdfZhvf5W5fvLUWh5ifyvmXi2XHGjBM6QBRw7fJCwfBSdZm",
  "key24": "35irn2MPpS6JdX2HC2NGoa37N95pe47gfiGjdH7WVAhyjUNTvuC2fKEnEhYv5hcbwa3bKZ83vRn5J45BNqcHV738",
  "key25": "3kieJGdmR6JpEv8inkmW2dPUrje7M99vBVW7nLSnkNFpUWeVgxxuCaPAHtUJbwKsq8J54avpN4mTjCqPRX4c8TUC",
  "key26": "5GdTiGw8kgWyPeiUZgv5HbcbNQCGecAwrtsmTMd78Fht4qXHdEQdkYGS3resRFwjrmtFqCHHhu7izasAacg4TdCD",
  "key27": "53UiUrC9kGsnwNCNYqqup4rLKKtvmW5FJ3RV65Pu4m15vKnALuepBGVtSHfg9WuzL6fDxbMDW54dPXFKB5gNxQom",
  "key28": "4cij217Lzz1H7hrodq4TgdcQorfrmieL5dZdhgS5R4qRuJBKxpNnqjtXMaujBLpTi6rVRqrbZmrZwALoP6TxvNJx"
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
