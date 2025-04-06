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
    "uKveUAy4MGZFL8eYbfZ1UeotpPXkt2FK2AX5zzbufx9B4Ez6xWMoYC7bM35wGqKdmoBvvq9EQQjBJBLiHq5eGua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66JXhFMRnPFEw5f2MveGQPV8J7E2h8yN4RFEnq8yoVTdRUfrjfryG3wBQd3t8ZziYcbvgU6jVg17Q2ykvCpZ7GC3",
  "key1": "5fJtfB8tRvefg6fMqbXsW6pV7XkyPb9hS1yHB76ntz3JyZhgHkyca7nTav7ExsbKaEo6QnPuXhgfGSD9Lkx38AuT",
  "key2": "4giDjA3qNjikP9tANT1ZVm9cbXDRkCaMvUk7aXY5fDaLWpxeUT7pB5Rp3b5no9V6thaJwAv8Rvo3CcskoQWaxSHW",
  "key3": "3YaDeSr1iR7V3Y2gPuC2ehbfjcrkTwnfmkYP5AWezasBCPAegwfcM8ZaTYP5f3g5SbUHcL4AH9kVfxDbsgv1FDma",
  "key4": "vpFqXYmXaXENRp8orMqnAhYrMdBzvQWg66SVDPihWAH3FJSiTDFHwLJsG3h6HiAEE5NeC5B2dkNmBuqGpGZVfEk",
  "key5": "3rSotTJD8x4Q3j6t8X6265kYp1fbQHvCXLcps3g42HMnaT8CPHX7RzAjTYYTAMoQtDo9Cszui7sfATegcV9G7HjQ",
  "key6": "5APbgHXJanS8aDqnSMruiCgjNK3fQ48yHFmzWJe5LaaU3VXjSkB8Y5N6Hd8bc6pSK4kngHZFygZpC3PJQyTAL3wt",
  "key7": "WXEQM9qmWjkpEDV6KoSHdE883xCjMDYRiPsyyimwqWdWJVPwZJp7KLm5uBTTRRTqfE7C8upoqonWKBY5ZEyeEGy",
  "key8": "65LJnhWf31ez89ptUGaiwyyz8DqX9xEf1bLKo3srWpM4ieCx3KmBCbSbn9Zgposig7MQVW66D3Bs9ouvdtZ5fJEc",
  "key9": "3tYuR8UPYm9TTpTU4Q1huQ25ahrQ6xMqUw4sAifJ7LbHzk2SAcy3PUCdjFKvtKEdzNF1t1qVWgpJv1yhr7xsMtSs",
  "key10": "2bE9txqnrTRLpaUovy7xm74YMzoFbjByNSr5xFLEacS9VebEhEF8ykNxv8Jcr49db5dk9WwyLozTcwrKSkfkJR2t",
  "key11": "3MPAx1AiAkRZDNiUVsPedhQiqvHs7wn99tY8yeMQvcN1gjsCxb9vMHk1VbF4pA6whFqqoGTWqCboLXgE9nq7ECqM",
  "key12": "5bD5PJDCA3tsgwW1D2YLwvR1K9WZ25wdP6JMHhxSa459L1C8FbAhJhbN4rWY6ZQirQhtnL9KZWjVd8Z89h2jMd1t",
  "key13": "38XuuqfGhUTLbCeZGig9byzxRGVdbEZArGp5CWJmpPwCEiRSTzrkiFnRcYvYtk627ayBwmw1gMTuuEvLyC9yHKGW",
  "key14": "3tvEqLnma6pCxZXnCH5GDVybdKSoibZDZ4PkogYd1q1zdf72UfPvThWv3eANFkVtYEYwSMHLQ9ZxYWRpTjNQgNX9",
  "key15": "2ZhKtbyoVs6KUJfC3NnJrLmHhFS4qtcBWyCaxMGKbxJ75F9ieDfcwV7hQXi3M8GzZRdHjX6WLLnuA9bv4mqBAVDh",
  "key16": "4ouupbWU7ZboARKhcMjgGGbi7CHDcH1fEtpifk1h3v4KD5w7RirRMSk4x34AUF88QDEwRhDJihMcfzA77YcMxouj",
  "key17": "4SUVQniKSgdEx6UkB7Wgrpim8agJU8PR1JLNojJqzeZrH8SGmkEcpGrgASnhsGkvVEXXYTPfLKSVxVpRimKYFDuH",
  "key18": "2FefBrT9s7uLBLxHqoztXVNGHfg2RRBr5faYtoaFQ85noUV1GcxnutuCk76AZHncccjBYcm732AnMeSqRrMeBNAw",
  "key19": "2X9Dcq4BNGb1waVi8crJptkafKjqg62rYqrum3Vh5Z33mDGZVGyicFUMCUTktsFccZ8ZmMNku8hSWCNfdK5xMVnn",
  "key20": "64Xx11XqYuXBaczted6qJ53M4HubKXNkMRnDCBE2qL8SuSkfNVZKjZAwHD6FPfbWQUEZExjwGYvyztmHy1aPH5N5",
  "key21": "3QcBeAnTHM56dFZd8hftKZN4PdgqqpWpUTi88At6Tb51aQBaRjrgraKbTKsN9Rvo5zoXZSXCvjvRhZPoNzrU1Gnx",
  "key22": "2g3otQaZTW58nBtasb165pjjxY1Kzt3Q3gJ48RqRCiMc8eXnLmncMKR5okoLcuR4wV9ggvPUsfpjHnyyLogCbmHM",
  "key23": "5qfqgj4AqRnZrZNiHpUKFiRcduiusB22qBCx8V1jRSPJHQK4P3k9uov57SG8q11X2EVaZ9nPML59pRKvBYhesaBs",
  "key24": "5LqSqKEhqXy7ykCZk4N7PJX4HCX7znSBMr9GHrJVN6yWcxzLQ46ZY5KGdbJMjeedAusRUpjgXMVcL15VyBpMmin",
  "key25": "54RMSGiTs5ZzFDQcGDfbcBZNYmSr5n7Q7JkZZ8wW2mTmsWUfHK1SRy4rq4c2T61BP3p2oF2y5GVPyQPx2QohVpy9",
  "key26": "4Aq5u2EDbt4RxTRPXsoWSiyk6ho3k8dQMZV1KnBHUm3YkeNKcXoc6XBnK7jTp22aCyMXZf4EmMhCLX2j2W41MMMo",
  "key27": "9Du2TT4i1GkpKoUgZ8wfZfng9fAAwGXBjkzgcwsjfmAGsKnS7PgqqB1yEAsPDPXZ1zn33CTxeQn6LkCH76f8uij",
  "key28": "p54hoZ3WF9FVh4RZEq2MN674aDQamF7eNrA7EyUUJf64UNJDuJophoGGbyo4Xe1Lk1VWnzwvinVBKKKQNwKStkY"
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
