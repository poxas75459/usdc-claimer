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
    "5WdcG3C2a7jbWJAZNRhE2H1bxEH33xtMpo99tbh9Hv1o4EHLte95v3WXncs3LTwuE3s8AWJzayg3UFWJszqV9ZjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uuR1MT7DBUedNA3fFMhXLdgBh3Recu3FoLx7X3Cz1aKGBJPoLFbjfxqgi8nx3yxKHty45JB5vTFdpUmMwPcaS5f",
  "key1": "2AmqZPnFS8SGZiNGgELzBMhc4QEuE6RtvsiMcwE4CKPtDMHFJnhTT1g5CLyKphPyU5BN1TbjrRqxSon9fvGYRry3",
  "key2": "qwTxbnnTYr4bVyQBi7m2nYbibjPtsWRXTV8vzWJpvU64R9wZLg85XWFFgEfRTGbh81ma8aQ2HXbdKaYgg5dUKRz",
  "key3": "4Pjc89H1MJZ4YmQbBx1XCsiBBnQoGrq7U3irkHyKcxaRLvJeDvN9TCzcqp2wJJKKNgnNsFCtm7ZxkSva3w4TaU1E",
  "key4": "3ZtkKXZb2iVvQDwNRaiLZhC1jcKTi9jPWZkYWU9RKrJ7Wsn3y1aeBmQEXioHEusSCaM1ucU3m6Yrxww8YGHHf9og",
  "key5": "cDWbvk67PhGePf6mXsRaaQpKxhWunzWvnu5BZm9KMtyAWrhQ4J2isjhFVepyYHf2EfWJWNNRgfvEzpo37cabAp8",
  "key6": "p8kK5vd1Ebh8V8bZBgut4HBvuS6zdA2kTXSKp5pm3GBP6Qp4X6fVSP8Jtav289yAngFssBPYg38G2gAY9F2KFoK",
  "key7": "67pR54FYQkARabcDqfRuYBzvHk15FmjWsQytLxkEzkurF4nuyjdq5sHhPS5eYjSzVa7JCLg2ucjZwf72RjwKQpAc",
  "key8": "3JX4dG6UJbzTygeHTydBHjGY8s6LHkKmRGhn9Bq7bjyCc63iQANLtDtAyVxx7yTLEotAGko2zozD5cnGczrK7CfK",
  "key9": "3pCjTnvAqjPVNhTSFoQg4yefAmtR6xmkrrHLUdbWdzqfRQwCcBp55nMjQ9ej2zmD554WHvj83jUHbAoNBStvvfzY",
  "key10": "5JDj93fwYSpSN68gRcPCRXTpeduiWre6SLcTtPP5wTA34qervD78t24EhniCwbXb7XnCG9TS72s66h274cZs6fYc",
  "key11": "4V8xwrSy4YJWaUtg3rHVJjK7Whr6A9JgEVQwCZZY3fkeMGNgAMxCbDtNRb5DioMMdGxUkf4wFKvMrqVkBSC75Qk7",
  "key12": "2iwZHBDcQ13g4WBqzgio2MCiffbx93oKmXsumZpkntwc2spUdnenhfhVq2SsoK7ESx4QRo8722XGhmAHsB6fYSxp",
  "key13": "4jXbGZAuBrvbw5hEtsnENnQshLn6FjpNpEnRV6JLd6LNauqwUBMwCC27TDHfVN96ntStS8TRmiLZVvf8Q1Qve1zn",
  "key14": "2bT7axDSJJFbgZm3xW8KhUqWZWHBduVYXLQqPdVH2hMZ4mrm2s3mSpGZgucfBuAkgZ5kDHvzfq7nJikJ1ESsYvss",
  "key15": "2TxU9kQq6rF8uT149cRKzKjxACtW3nLHg3VUyEHADmeKChHrFqVRALTqxViXxrZ9aAa5fye8uhGXgbMv6hfPtkRA",
  "key16": "62xfmvGuXgs5qec7L4EX37Q8eMinbkFFofrMGxV3i2mZCBvv8rwTfenHRpTiJEwhgQBFeHLfh9djAUgiSN53s73q",
  "key17": "2mWUvTiNYYxGvrtbbUvrdtojARky9CYyhJHt3bRCv75UqNZEGi1bnpbLYTJ5QLegfcQ1SpsrxfecGEVB6owG95S5",
  "key18": "2GxorjnY32oJkGLPjkYFbsixCBdyrxKbFidkX5dAQC1Nk5YHdPRLAWbZ9yhV8X8GTb7vnrVrUxCh4q87o6gr4oTQ",
  "key19": "23GXnFv5CKMDyrqWvN1udF9FvkoQH3PqBgRQJAjWFFmMhrsHZmYNoDRUsy1UCns1Px5jkdYDVKWaurtcJv4rPFxF",
  "key20": "Wmpmm9zkSEBMkNs6nvtbb45bTVqzwmHRcRXTccA52DBQcxHZytWRxKKPhgrkv8T3KY1s2oNqN1mJXv1XGpMZzRR",
  "key21": "2x6pavsBV33wXwkapbZB1pqu6pvnqJaNgVxzzBQ5S9pGnr6UpCtkcY4GsAPWS64DMFQSLN6AiUPUCu5EB5aTdKsd",
  "key22": "2cmNPeg7UmhrnbVR3G6J8Bn9TyqbBhtu8zS4jn648gS4zMcetYGFiiWsPEUpP6MYCdavyHgURubcfMWmbphyJUju",
  "key23": "8JBqPToFdxdgtDRQUuCNP3ZYVXLYYoTGmeEg9EZ62z7JsnTkRG2XM7jQKH9pVjjSFPAhMLfp4Mnkuis4yarQC5T",
  "key24": "3KJQSvaZDa8cAJLrZKAiWED4rs3XZj1BFdLwbZaMwMNwERhSTnrKqHiPLuAcsHyXe3uBXn19FnVmM9ySj2epe18A",
  "key25": "413XCa1YDwC717vZE4Njnimb4VPSCL2DWgb2y9gKPawQybVPVx3fKLV7MKsYVYg1PEd8t8E7hs9vFvDREwPJZ8zj",
  "key26": "3BAnizTVPt7ntexwkUdFxkAzF56tx6ymChC1TERgur22KpfK5gpk8AzoJzLJ4wYCFAcJLP1Gt1cdYA2zDh7orT4f",
  "key27": "3YL4dL6mg1XVNMhGURezXHzgqDUrmKzmwxZBFz6yPweLrrS5356uLNJbqorevGXo6HBDWEEsWqQvjdwz6X1bn4UH",
  "key28": "ChngcFhNBnWwsWsmYyLgooTirxpuvoFugcqQs4mTu3bnmz55YodNjyqck25Fzxpvn9fFDryYMxCv1LbTQenr8Sc",
  "key29": "sNKABW4CLWCQBEeZ5PyXvGtD4jjmcz2p3jLyjS3wozryKdTc2nRfjm7Dkq3u3ZwBXdC7HMQaPZcUNr5iQEp4msT",
  "key30": "41SNKggVF9HiuauCDkCqX8V3P3ivqsJAN5QADhLq6wyrs1oe6TQfduTKhrxdWZ2kizN3naW9JhRNT2h7ywH1D3mK"
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
