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
    "2GJGTHDV5SVFFDLGBbHGabR1B529LUq83sfL5wcSUNyg4AChhZnE8vDKicnrt5PPmeuz733NDDExZtrQuHJcqFAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JZbE3HdMJM2zqQyBTq1p6WVZYyqaV7PDJZBUNWuhHAJPtay5gPHfX7WmihKbs8uxdcxFUhU71eYxnV17hL4jt7C",
  "key1": "27SSEiuXbwC48PRMgJ2nm4Qp952zdnHzPqgKwBRBBr5DaAwqBkLweiFkwJfH8U6UcyxwYUmgKox8rGpSiBCXJWPy",
  "key2": "Xtu8Y3jyPUTMq6uLfByYzR4DjhiU2zocUJckdsGfEpZHaPkoGDuTh7fcvr53sEtSR1vkbSdrxaNTFuydEpfGR7q",
  "key3": "3Xcpcwc3JHs3aVfcWWQFbFNXYX7G8n7bR3JV2FTaQKZ3iA7Zq6vNG2wtkSn2RzWBmGeVuJy3iu24soTB9s5i2VNA",
  "key4": "2FtS2nV594o1QmV9FLN6whxJsRme6xhXHH6RdxgvRwisoyoyNgNJN3fssNUhZxrqayUyKSWPjvTN67bA87saxab7",
  "key5": "4R8oujxjozZxev7aWTjt5eLjkGXMGAcMsvkQgoxB8PmKjDm7UVSjwfPb28Yi9b6YnhsDJuzwiNQoqEu8U8ErirY6",
  "key6": "4yXeQVQiTqvPdFMF9HXWW3r4LwYrUhXJ6Z6pJpT5ubA935bGSwcoCRXgq3cT385qJFt7SBWmTLoEJronbkxH7iPJ",
  "key7": "5gpX2bo9eTk89uzYNs1XioiNyZYApjnax1PQXkrBLV7cYHZttCmEdbS8Qu84kWZJtPqMZ8tM1TUxfYkCfKQGbrqe",
  "key8": "34snr13ck25F2zQmX1cLujqjFt7mQJs38FAZce6HMJRMLMqR3ypMKSFUzTEKYoLVxWfVTEDw5aVVswhuKzcvsYAb",
  "key9": "MzLbi5yqEH4H4sDjiVquhQWtZ3qyM4nmiUoAH7WwKV9eXfETSXhSM9h2YC1NSTQTP3fCbYm7HGZmAEKjwbpXBEK",
  "key10": "5CiqeNik9Dw3T8pNG7cZa2WjPqFZLVdK2g34gq7m1rsPYt7njZKxhGymLBcvMLSNJ6WaDa2XmnmcBY9ESSbMNUWL",
  "key11": "e8EZgWzSy4KEaTfwLGB2TMbNWGqHk8o8iWk47nmdcLCJA1jvdPh6xVqWZP8SUXyn49isUcgMnCuEY1v6dvH7r2q",
  "key12": "Zs1jLd4mnAzGJW52hJxtjTKGLEMu6ks8VRaebXHCJzNY98KiLFpeRnN7gwJtkJPdK8wHo3u6HCH7hfzRB6yxgXh",
  "key13": "5JYhvncaqVmbwAfK7yTbZTJhCedxRpuAbFkCC6M4BfztVsgfo7BqJBntmYHHCKDPkQEKEyAxJjfGN4aFz4B2M2Rv",
  "key14": "2ZAZuVQLPrtsddRso4SkjobWebgSCcNjKBqtqQ5wDEqD4bwGp8z14H3zckJWVQVqdYmhUQe5u5HvFZKMGJFfPJ9f",
  "key15": "49gSkJEg2j5RdrCLcWpPZyVjYRMuabP5hzVWDYcsKdMcPjx9GQZwR5zHit18WKPNvzdsgPhjTeMCnStmzLsQeHxU",
  "key16": "63P8HSsCm6AtkWkKfLYncogooR4pHiyJcZUZD4nCTzAZmZ3YAgRria2Wik5aMdj3B8RMEqziAwb6BzyBxombro8p",
  "key17": "2JcMw1Z3eYKUwquX9kXcdfqxan4qmwqBEJwuCujEhpusoGnQnbxeNtL7iLnE6QUhUiUvm2VUsa4giZSNgEk4SACq",
  "key18": "5kgAC2qpDrmyu7ghwQxpe8ykNtozSQttZm41wtRK1n11fJz4qv6z469ajRvEUrMH4Ekaj3yqRC3nfUdb5gu4wHou",
  "key19": "28CCeFUeSM7USTsjMBGzgWPB1CHHoJARLWRS5gaHpVt2RLfbFHRT3TC46bmjQREtZaLLX6x3vuFzwGUZR7Xphsoq",
  "key20": "2KKxiKmHBptUPC56tGp4kwVyo7vykdzt6eXYrgTh1BAuT4rJPBmzFtnnRMnTjYt3yQjYBWRj4T3tg1XbdYRRcRdf",
  "key21": "My3aHChCLDeebszRdVyYxQqkawpppKMwmcfTbDU9b7XXs6z1Dv1pc1KYdZRL4LSEApM9D7LXpNCqLc2uAyEC9xG",
  "key22": "LC1ozPccCVJkEP73vpUJXgZ9qYyayUxj5v7dfAvf3We9YuhHEXkb1GjXtriei2SsuKaUvYE3QMV2PN8QTtiWBzE",
  "key23": "4VCks12q4ZivLCwEvT3STWfxijXroBUuYigyzot9HEwdoZWJLd1chE8TGrcxpwQ68qimm5AJnYhBNUP6GYya3jCq",
  "key24": "3HmttGbAHJnPJ8XKKGtKP1rJthAnVssEX1cVzAju9rFuEg2XMmu4HmoPv66fhYy3anu8vCKZNa56UnHr7T3fVFJJ",
  "key25": "SRNYDe7wQcYa13ojonc1jYYr9LKx7y541Pgu3HsPgJ175qPiFRXnbbcpSMtyQEgwSeq8JW2ugu5wujQWdtaLi9o",
  "key26": "r38g6BH7Udod1Vhdrk8oYU16GsC4rMxJppGNUxBc14JKPFcdmxZ6vb9gDgYzQyVVE6kaEc4dHzPi6TET6qfshjF",
  "key27": "3NbBW5y5uS44NEvTdj5rcGMwKpMZbKXN7JnciwyUTsb5Y7gMxzSRgnCfsgbcy1DLMFPLB2uSFDsgBcZvX9ZbDp3g",
  "key28": "JqBJfBqdBSyRPuQebzivGTXzciuf9zrh4uiHUbNU1s6T4ZDChFuYBkbMwzEzxb5Wn8r8nugqptrZAyEHUDnDHWc",
  "key29": "3sgtSVQX4B1A3D4EagFjiM1LYdrHC7huPQ5PRdAWnS8rvUrRPGQSrb9Zf2NrARArMSnVPdYNgum1qPUB2pYAPeUm",
  "key30": "4bhZMdYGmd1urxKZKtXhmsY2cburiXSj9qzyRsSbDtKHQuALaMWCZRzoqh8MmQ6WcY3oCniKsoQjhazPyMr8LT3Y",
  "key31": "25bSu32Pfm2ULjgw6UKivE1wZ827oqH8S8T9XMjRwJLHVRJBB6MESPjpEecgZGhnTzk7StZS4yMen3tvKXPZjEFE",
  "key32": "2hoyNik5GnCJYCHAH26pZHZeKEZN9YfJGTFZeYSn4Mjo72ugR9GihmokWzqdmUgwmj79H2vYkrBqBntU8czTJjxd",
  "key33": "2EgXKfQzF9gLbr2GiY73D6p1JcnbeAwo2RZvTRFCzypwuQz1qu8PK5nru52S9Rxcr4TTiXTuDDs5VozhB7299KLb",
  "key34": "cbDiA4EAXvncFrVuedeovvuaBPjdGnZBLjHs6zVJGueMKH1hAePo2EG1zSCGEYQZ3PrMjZTkwkw1hykyHpxLmtF",
  "key35": "2thiW44iY6dDTyYPZvehqT6mzBvRt16JRK1fKRVDwjzYrCsF33NL1DLdZLfh2P4f5MhkHZMg41XYiAPo4S4WX7V8",
  "key36": "27YET7gpvnp4osVkuR7nbXCeaqTsL5kCwkqCb5NZwgwJo1oG33iVF9jTKe2ea9oDuVYYemgjMXvaduWMJA8tLKN2",
  "key37": "5MUWwjSA9hZsRu7eWE4YgpRJB5VPbuVQ6Cm79iE2SdtbEdgX9Bk3jcTLVSHCfu4r6mUdc8zmoCGNaLjS1vwEsqdV",
  "key38": "3NCWUzwksAG9FA9a9EFHRd7SAbJhsoj9JCCBcJmByTxizwAQdkkQs6ymqnshoKfFZzCNNBYM4yYppbTgUy14iB2X",
  "key39": "CTagnGsqqhYWVannoDE2aTfmeagW1CPDCG4u7Uc9wFDaX2Aij2bZCCeQprWWQy7EAqePDLgv8gtn6eZicQrCexu",
  "key40": "46s7Z5E3X8KhrhVMcYDnZ2PvspVB8Sg6gn8KWu51VGJFBce8tL4YCV3pBv3juJYqFBacphudZEUybTHWweMhmS7V",
  "key41": "3EcYfc3es6D72PvsGjejwCD9jVncbxwN7CgXqxLPx2GXU77NwDm6Geis12R1QCNR8ovddCfQR2cTZmgMENKH2Jpn",
  "key42": "4wiwXhacJvyYRviZCJMmQth41QB9iAFh8nEMYSLJJ8z5CULWT4LJjTD6Ty4Z4NGgT6FFHeGdXJeScnmNm4CNs2kK",
  "key43": "5bRP88ybE4aifEmYyNGPYD1UodNx66L6KqJNca3hgUray9ucC81MzPzUnHTsUr5YQ3FAQVcVrD2Jq7PwC4QnMD1",
  "key44": "2RL9UuW1nMrEBuc27bXYeVsCR4eebor4MV3AFz12rxso8xZUqLcaCWQ9BheTn7u47sem51HPDmzMEKJLedyw55jG"
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
