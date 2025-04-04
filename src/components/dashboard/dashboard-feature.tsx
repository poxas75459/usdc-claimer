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
    "5Ds1kVYC3MtJc3BVVknMxdeQYuGpC9M4kYqpdxxTPnX8cTcfD51wsLCn8zaLqrV7n1CMB7EnBPpUvFKx7Vr3mu8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W9bYPDFeUDbX2jQ8Uo5ivPgFEXpHXPPQC7WqenaVyqXps34zqnFp34tpUzfjbK81VJZVY6EJKYgxb8Jii1WyBfz",
  "key1": "5mfRTF6pdLZEmAsgMnnFnGq1SRpMU4PEqMxMMLhhencHFCPy859zSKLvv8yPhjM2p1jScXDRCSep6cnPBa4GXUpk",
  "key2": "2VEdmbj8Dt3T6GSt5Se2b1wRYo4QTGRmWhexbnMYo6QHDJc8fufiviaenpPuLcFJz7RuT2PAxHGwMnEMxwf3YCAN",
  "key3": "5DomYdapATS11dQhLRmbnJwrdc4nA9DdmdSwAMofCV3HrngFrRSjpRVNQP1S64rQnUfhtaj7KvsEfKTGvMBpYkHc",
  "key4": "3KgWEXTcDjpFHSJLQzJGxDKp7KWK2ewhWJjxDWg6HJ4DZ8sVCJJTkVKhwerxR6awqf9nEgs8uRu36JtnL5tHiG7W",
  "key5": "2WfGSYbhTzC19zCH3Qo4cad8Vv3cs5vVMGpxiNoSxrWzVLJJVnHPsvr5R1qpBjem84YGPT2AFgXepsp6RGoNpb18",
  "key6": "5WBXFENB5A3bXZig9HHWv794HYCwWaZpHme4krq1teFqcvLSciZkvgRfKoWXYAxcWhJAp3LSL4KbYi5K5W2G2y9j",
  "key7": "4UUqkA6WFaTCZz4mJ6VaP9yWip6RsgMWpLpWn9ARpgZ2fAJ2y7mvkrhr75H5Fh2JrgHTF71L8Wz11BaJty4LqUPD",
  "key8": "3eCmbqmzZ5qcWMHpyQsrwWg66mzXPLz9dKon68qHj6cjN3aV9r5XTQ5VrNZUW8h8xPaUNvQLiunWnSLNsHmCkJe3",
  "key9": "21fu3WTwSj1pTRiFx7MV7akjBQFnJpCqZeb4dXLEoExp6uYyRmvGjogjowjUqCmc2nR3v9DLcG2WPutwbc9oXTSB",
  "key10": "5aWJZA3dE1zRGafq3SaSMJgFUxWG8DLUxmeXspcEqQvbubq2iBRCZTeASJWACtzKZQTvfZMRnYFY9CzMVSCTXP31",
  "key11": "tj4XPh1UvsxHLfGoMuvcAhM83NsuU1zMH7235etGNRoTj8nssCAvLuuEqzR3P7QKQuErhjdp9jde2pa2wsKopn9",
  "key12": "2kfeaLj1MAL2RKNnVstrRVyuvJ35E39nA3xmZLbdw9Mg4YPMXGccpYWPyoj2E9qiijTURTnFzYqQ73xsExG4c3rG",
  "key13": "3YXa2JJ4KVi5mXbwBezD7T5HFPzKHiu6tj5LWA8M5f1UJFQUwtb7tfFns4riAH4ZTS6fQZZqhYHXchNSCgV5WxEP",
  "key14": "5eSoU9jrENFApT47VMDMCjgkZQvvYVsLTqD4DjAD7MAv7P9PNmrmKHPxqwxVM8Yz77rt1baudyt6viVU4fK1Rrdh",
  "key15": "5nBwXGHuZsTE4QYpA72ZQ61F9KUXK6zVMJGYFx5iJD2VdHQsVri1CyNKcNcHYnQYohRcmqGpr1gVYSZ2YuQ25WTE",
  "key16": "5D9HEm64HdmSbHZ2TjexLLkNTjfDogwAgaNrV6YHsEWvmQwzBXiK85CRs8y9gZkxwMbUhWA7WAEhYsWFw8xM8Eyn",
  "key17": "3YoBGuMBXKxJASSnxALDvdZZ5A8EtbUhN6vVBYRZMdY3W7f48VRG2Gk65ei1giZYYDKqRE3a5JhgqKnBx342MDAJ",
  "key18": "5F6W9huKTfa4CWxudR3iQnkivwmPWXVmABzN648q1kZJY62xLph4rCsXRShP4GtU2uhZ6BeskJKkrauRkf4f7W3M",
  "key19": "L4SD6SgPvdSvCtCMCs2ju8ECvbqR2NMsUxN3ZEj73ApEe6P9Qwm59CnZiAPtH5KVcdmUWQTUoEhFP6hfqA8LPHS",
  "key20": "477T7YeRq74VjjE8aDkCpgbJ3FcNu2ty7GdxDKx2LxmdgnbXsMsjgrPmZfJ16dFR3VsvBwMM6dERhbth6iLfX9sD",
  "key21": "2eybDYoqQ36Txi9peqw4p1gmtvqSdFW1pdhADyxLhQxg3hoN55gzf8RhLJJxZ8vfUx6jGd96GryhVUu1v9uytu49",
  "key22": "FzFK4xUCJcfyJmDyHWqPPLm51922vFVpsNp4itG4xGjgVNhg3QwbQpiZVbAHzyas7JEVMdFukyVAiir7XfsjfC3",
  "key23": "XsBJEstz39ZtVq3EP55xNATJXkT2M7rnafRbvXkw2dmQFYTLGPaKYiSyoAMVKZJtX35yrT5QCkjNFqmJjBRDRKW",
  "key24": "4TRhpregaUcsvCJ8W2y82WSg5in6L4s9FqYHFjMsV9WrCJERyF4hMTPUmrJbT8gmSmBA8hjpm6oq3PMJUnEvMv48",
  "key25": "4fN5hPGphk8pXqdt182DBNXyqxB7aJvUSHiCTMriYmHNdYvPPxmiDPzG96Q6cGeaMottdBU6nGieymjbqKLfYyUi",
  "key26": "2DsDouK9neAP8aZEhbQGopfyV325QSWpw2M5wabyB7CiqYQ1cPKsmQpSKmiSDS6NaLoqyEXRsc1fR5KtQ5SwVYLY",
  "key27": "3SqCjKvkgoqmD3PyTvGapRTkuVAV8bS4QVvNJkNVpsdgAPbx27ur6yZsgkuwjQF5CjqE7PNYCuMN1zoNL4ZJtfZx",
  "key28": "3EFyhwYwesY7xxRhL44CRK3esEAhmnDnjLbQfK4njALXFKztxH2DNPD18NnqhJv5RMJgNsNW9H6ikjDiAUsxm4Un"
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
