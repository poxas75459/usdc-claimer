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
    "5jmUhpGmJTWj48TxSF9XFLUtmMPCifCTcDzVsVjvXHXvQqmdfnfH8GEha3pEXkyMMYoC9PR4BwCXXi5deTzs8HfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vEZXFxdVA4LwqaZNZwyvQ3Jwr6swAzWFrdfwaTJx7oLSBacKCTDjSR6DUHwD4xcSvQnCNkTShJqsTjq7Uejeiuh",
  "key1": "2jMEfGiAJCGSmWDkRqgon7wZCovmkGNPSgNf2jDzyWrQX9fo56NhJUiZ2MYUYeYHUDUBFxqmxSM3AdhYrMeDvAPy",
  "key2": "4sYzNsD7PAPLsm2ciapWqWAbh1qSgtz61195urSRLugPbYiDuniey9dwMfGNFefuGMHm27HuAJNtCjL8NrcSn79Z",
  "key3": "4sKFAFAgLpxQh92g5iBAbjH46aiwXH6j7iE3FQWieTbS9Gu3zxnb3cBqfMdkHSpxqbuW59GUFPfQDDVggan258KJ",
  "key4": "3gUUh57SdLxZRwsohYAmtCiiELteFn1geoH1zpyLrwMvLwjP5WfffFXZfpNSxF6J93R2FUe475wLiAYh3UYXLEaZ",
  "key5": "5rdUELR24qU5r8UcMCcPt1BVoYzsH9v3vNoTwo2GfhbPVNeQHmndAMTEmjd2XzfgaQKLfDfJMeGkvS7k4fMhVrxS",
  "key6": "4M6bftmuY1xFoLM8saNAKgNbRSoKN9QyPsTu7Rdf2R5YsRewMFW6yNg2HzpGZNGbsjBtrUbMyJ2788BTtBHVxUyC",
  "key7": "4bfPW3jS5Nd1GE3qw5Wigo27rX5AAeEEjSTUAYHRGFR7zTW5bg8muXhJ1VzTn8wsQEQUwe3xEc36emxPA1DXX6hK",
  "key8": "2iWnsY9HDyBCFxQVffxEZzHuyvSeY1mMsu1qyC8S73w1imGnaJd57KZXNMzQkUZF6hs7soFsshGaoaVKTqacZDxr",
  "key9": "BvLZBm1oi9fKGkf5FgDQvWfLy9b6BFKpsfKdFh7jUM6FtM4RFJBcYBT6kug9k4R3tgmyyWq6RCY9dZ2Dk2D5UNS",
  "key10": "VjGsXDqUk9EbDzRuuWi15UU5cKndYeeE8LNjVGN2x26RUoNDmnvAQtVRcX9kJ22P6VgV1MNaqWda46iNYJ2aX2X",
  "key11": "2hrV3YQgRXaogdw3VyNyrjQvYsPNHBBuxCWBqYjfupeiTvMyGjjCGzrAzCQAduvpFXQaST7UPfZxGyPsTBAC4DCz",
  "key12": "4ticcbTRM6aemHRLM75bbXzXw1CPvR9v4J2XYaLfLCnzRzmvhSyWsYbysdGJYzyADT6WJUNAUfL61oc6mX55C5uu",
  "key13": "Qy9LHDFAcrW5U8Fkh8qjAzzb3MP9ERTWQ9Bw9WzSqSTLzmzTzNkTSJZ6rve3Qpk4gAWEccTBSd9BN8fH6cMjLkZ",
  "key14": "2oj4LB39RpGgLSGfeLhygYgbWGYV4THL2jxhuYf9DHKvRxP9znyEVYSudJLUaLbp5qoi7YEXoZeNso35xyUE7gYF",
  "key15": "57dv6ZysQC85LBVK1zwKiw8Nk3d1ViNXWhoX79BM7egEbsq9yoCUvhycuta6ehzAvkoDT2D1vUS2bkBv3Hs9Bcac",
  "key16": "51AsWuAsWdizmr1AXAQNFQGSfHTzvvmxdjwE94r88JSuniqt7KgFEkBH8nkDBnbyWGjKp95NCLWbRTAk4R64i9Ce",
  "key17": "3eVY531wMf3vHNGSDd5j8tpaGrR2TP4gu6FJo6MwC1LSUUGjtMdaojf4LsqUy78p2x8HBHCcwbiA41hNj4TmxV4o",
  "key18": "43atujCcA4WbWMxrDfN4qLPFkxtw8NfF9dkGxUC1fz6S5h9RX3crTApwybkt4YNmiPGgEwVeMBoceYerzbV3kDVF",
  "key19": "5qoGucBEfMxm8xefQT9QHQf7wfRFVTvq4AAA5Q8YE1Kv4rYqjKD4dkjUpwEgznTDaGu4M1fdpLHRwfznmXpVaRtk",
  "key20": "3dVyza9dedPz7Pu227xr8Y8EJG7YGrmVs3LKgqZgnswnwD3YV22oF3c3tLbLkMuM6mfiduFgWQZ4qzjmjXMuZp9e",
  "key21": "4ybegCFRCqrGT9PjU4cUb3DhsMCGWz9MsJHVtJbkSpKVXqM3sWx75eg2BzqGmUMrZMFtuAY2Szz1K5KNHyKa5afs",
  "key22": "4YgZxmR7A58591sKRQPQWk1HGm3RgVm2ojto5gW9CyXrS33Ufnt1J28jK35V1NLnoKRBsZY1F1HUPKEyWaDgsb67",
  "key23": "3F9UwsgZoYPTaFk5mR4RGC1WXKkXDVUy2LmhMTVQAYidxmbjNgp8r7GWwxvFWk7eVyrMfnGNXjRPEAzJ8q89QcPX",
  "key24": "3xnHx7yP8XQmacwemukbviFAvKAPsx7KmaQcDaht2ndCJPq6MoUi4vCpScY1tdnZiCmaEE6j3apcm26q47exBexH",
  "key25": "1wP3NCV5hMEHYZjAWB4QjsfepoaqGu2cLsCpqtDibe9TMX2HGSWvnHMdrNybuyjdBJpr39fJiN8sUKFWWgHBhxe",
  "key26": "3VCEAHtYLBPSP1xeW4gFFi14G4CSLNbVySDwNvzk9m776hCLy7cvcTdswzHZosQ1sh4wPDGrbKYDNHYWt5KXw3jG",
  "key27": "4w6rDGWayT9ey7R6ovugAdXeGuL3FJFZTwCsnS8SEroFMsqsfoiTdwtW2yLXjjGC3Gjs9bPoFKwPdkVuTtJ51YNS",
  "key28": "mmHkW3muJiXNDtT7LkETgY72jc6D2ScpLLKBB2HgD4LznRfHJcxpRi8EhFz5sTNbfEmUJrEPDvk4n1pNMu5r1K8",
  "key29": "48op4dqwQqYP9kygkX5g24vXg13fnGSRbaiM6n6fQXv9pCQNCwuaJqgEN6mpjabWHXQAECmPbf4MRNBFP2D7AXCq",
  "key30": "2mv3smPQNu8sDE4edccDjGoJazgitavzVVUAEhrEcMNtZSYaUvC2F23H7Paj7sZoWTpYoat43231vMpGCnYGzqvG",
  "key31": "4JScue4uK96RUM1XTNRSp5NwahpttKNjdtZA4L5sNc6RFfCZuVVFFAWuoDqKmLJjpPnE767tHEAC4w3Npmcd8hpL"
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
