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
    "3F2tZKC49JmUxvqjH96Ziqi4zXiSMjv8Vz5mqWCfauqqnEfUWinCqRDTKECp2Tx6LG6zPeKQXiANJsMgo64KHND3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XswR3Zgbf4SupV9B4NAGcSgvnHr7R6h4wAP3X5Gsdn7k4uvjtxr227wS5fpgFk5QTxfyCxeDxwzPVgMCHF2BEXm",
  "key1": "2Sbx5DZNgGL6o4n5wHLWhczJhmuvt4p3rqXqAygkfszZBaQWGELewk893BRBWyNuBVEQzUichJWtqJ8duh3UwfHj",
  "key2": "4d5QPbS36MQzKvJeKSXWyCEYEduJF6PB1S21Kmbmw6Ufo2KTf4nBF4CteaQ3UYBsAYdw88jkrLgDw9AMxed5H4bx",
  "key3": "5FpapBAVLx1JWRiZFAZDDbnPD57qCjVXesDfYqo84jaaFGJUgp5SNCBTWZ4hrBAxpfHyiQmbxnYehBBiDQwGC6sT",
  "key4": "4gYGRrLjPF21mx3WpoJ5jdn8QTMHLpbYqvUBBp3GdWuPUfFNHB1Jw2pKFhHzsPGqp33EZJgUnjvHYaxgU4b4j5oh",
  "key5": "3eiCip81YtkQJwvkFdeBEat9pUzecPMhQerkMv52gJHPywce3YSGqvEZagS7bGxRLfpSsnNw6EbCKhwSwpfSJdve",
  "key6": "2FMdEH9osdDR4TrTREQFqYWUEHTCA8yJ7xV3c4H9a92HN1jcuu7Lat1KqNAbjx8ZWrBUGPKakhBoCmsXQuNeXCbX",
  "key7": "3kQppn2dXpktRBAXYPaPExrZmtd6Jv7uKogPSYY7xSGDidrarhmuqxwEqiv4rngC9gvMjNzdYSKKhesQh2ErPuZJ",
  "key8": "45CUvHffmwNr75e98RvtjrSWq7qRTEqTiyhuaxzh6Whq8booraJhyKMZ94x4JDv61DURrXCTGLMifFxeKZeY66SP",
  "key9": "5ww365Rj9wqo3QJUipEzKCFPDfhteiu6AwT998bdS1jpU5r3urKfC7uebmPPQPuG8VzAEgZBGHresvgtsTd852DV",
  "key10": "61KsJLdPGj9Knh6D4GErE4sGt2FXLroyCnqeiq7Gocdeh1ckmDCgZsbLMpCiSdhpJhWVeubvzu6qTMmupCxLoW6F",
  "key11": "3SMr2LKppd3DikuMHFieJzVN4LKbAfhCwrc2XSc9rwYmDbWavRTPKwjHCppHwEkWeBahsLwWCZCsb8xh2ZsJo8Cq",
  "key12": "5bFwsjhRiTZVS9pq9VYUhg8bQoEQhYk6sZn7cFnVMU4KcutBGpF6vjpazq1uPpbU2Yo8t4RVtCAQh3RgXHLjVWrT",
  "key13": "3iqxcBdD5KottXbT5jum4iyfi4VzdmkSWn9vnsSCW6wYZCdLzeuYP7Pd4MgrSK67TzeaCQKFvZfz39xwqZwahcec",
  "key14": "45bhXeZW2cTszujfcbRTNrWVihsyL67Dw597saC8TmNt1a4brxNGm1ZTqTG82rSALzLF7FnUPtxbFP8mi19f8B8E",
  "key15": "HVqjj1VXr2XmkgPwE1utNpthhExeozKTKB3YtVrdQncirjKGt6YSNn9MnW3GNkPibc7cv3nkt3weiawzg5AgHNg",
  "key16": "5Mc6NAYYFfHMJjquwRKDVX5dS2PA2f67mHqhqtLSsg7wvFQ7wknKqtGTyiF1fX1RCexbG9AUTQZai8gLLk1okMUv",
  "key17": "5dFptKbnH76Z7V94MCeEHQDGMYnjefHEvsaXhyKYWufGfZVXH6YNewusFGRt23QsgrxcxaZxpkrRQtuuTnWpRyi4",
  "key18": "3dRyWo8PvtEEJR4Kh9Npc1nGZ1pcJ91m1ujjwG4aJwZuFXw19w7G2nsLtvt11duP7jRLtCnC8PTMGRnp9e7vsUQ9",
  "key19": "5RhtTsQ4scjA3RJyJArdz9gEZniaCrFUBPMSDwG14nZ8x41qTAsBVrL71WAYuPkjxy2KYVU5Uhzfgz6fF68Mj5HA",
  "key20": "2oU8bwgMDcK1Av7XjyoQJVFqaQ1mKLGiPZjhnKDx23WixfmgYAf56tErCmi75KPR5iMr2NofTBwmtUv7EWEeWfcT",
  "key21": "3ZDomUk45iEEQhgm4KG4LqhmFfPmPkx7YsvJX4LsiKT54HZK3E7AeRX1wn2Vg3BhAJsnHrXv8dCuCFgreLUNkVCY",
  "key22": "4S6wrsHaJWnzsVTxZQNDmv5YcRMsPSg6YgA12zm8wAXyfZUhomaqdXh2x7o13ZGsZXwZKWT1xGBQw2dQw6N7uqZe",
  "key23": "25rNGEaAiTXPdD6LxakXeujhN2h9NerT5WtCGDVhq4pD4LSEitL96yUX1SqC2JhxreyCGnawobXsMZYn7wbTcZox",
  "key24": "4kW5PDNeeQjoez6XV6ewiZQ4eEPjJFLerfuBZq9TL9WGScuq7AmtxcaoUmuDm4iai7AM1oTYdH4ywhtoWeQcPxeo",
  "key25": "4suJy9pHBwHQtPv7BfWb8nARxeh1pSCDMj7ZQpN81EQSRJEDGiRjxg6UaCeZXXoo4Z3TLcmhde5JgDrAzqFjhHBT",
  "key26": "5uiZ3w8CqUALb2sSDkiybwGUWXENNd3KuMAMJU4ydjdS64wMUMeCYZdYBZ4s2UKYv1NuSN3eBVBZqKEcYaKrZWM8",
  "key27": "5QNjSMWCHTSbxsbaMvchVjE2UigeMB2QN5Ed3eJueahYv9zDWVHp7GSFX54152XhjLpSowNz72VBKgTxmrUZdDHL",
  "key28": "4PBYTDmVQvscaZWkALYjPaBkxYQpdBajqSoLuY3dNgXKFF7xB2rpUwtEp5TPpmZwsCxRBgBT8KefM9bEBzypEDo8"
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
