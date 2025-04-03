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
    "3iQbaFxPW3a71RCVwTvPfKPAaZQwymWv4XcULNHLHcbjdHdLfcJDP2hszkm3qKwRgq3obce9vFqQsPio5Do9hXVo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ymwxttm7Z3nkgqXfqh79PHmpqUMCtKXFnhf718XKXkq9vRwDPk2JF2tA2vdzhvn3c32KC2cUhhdq8NgAE3P9F7n",
  "key1": "H8rizSfjpFpjVTT85Q4EUmUJMgQdytFUXLFNUny1ychpvZrbEKxUkFJfGUZZDj7ei3um8qX3ub5ofPgTA3YUwGs",
  "key2": "3PkCRRqihbejdavx3fPojhdZikvm1SCeKjyeQAhQyCeNx1g2sJkwx2S4u9MUjpCCh3psAGD3AzDfL4WsPAcWxUa1",
  "key3": "57smJ4sheec982M3NGab9B6CRe1FU4K9goNbZSZSmPuWWVpFvtUit1Y8UcWFEHd61cSEZuB7NzySbnjsq5yAYwiy",
  "key4": "4BBLxBJXeoQqeX1rZ9suhx3S51j7HTSmhYZ2PwUE8N7wrQvJ3xL2Vrk5GUnxGpm8q1XNrgJodFChUTR9PMuMFSXX",
  "key5": "2Vaj7NCWESTEikhF6k1fLAoCcBEXbLpfMsW2z98YeZP6jx9ATkb2cj1M6EaGWeCSCop8hVtdwjKSirdmhouf75YL",
  "key6": "3eSJjS9zgzXi5nQaqS81PQJztkoD875wEiZoTc1q1c752PjrYVfpfzXGnwkUjGxT41GjwbtzN6K3hfGgkBp4XchZ",
  "key7": "3vn1AAFZdQ7LAHehcHPhFkwqw6gbdTxh8ndfyMf8XUJaSiAGrFTc6DJkX6tL7qCStGSZqodofm2jJ99HhFcBJGqF",
  "key8": "37CVBXWG187C3caf2eeSPmfqjrrts5AWwkKYaLTMT7Hy7GMCqDnjDKfZdGrtsJXxKKD6D3VEeeqeSfnUzEtSKGRw",
  "key9": "2rH8ahACfRNaC26fBLDNyBv1afLgYqZWpjNyN8DzTLsvwt5hDaoLRGEaFuXHerFQamJhCcze6t7Zojft7uss72Y6",
  "key10": "4UKR7SYU5K16WARyDGg2vzaFSZkPzibCny3o79pWYNZ5vfie9q9GNDUHRfh8XWuGebCUdKBDXRNNfRcR1CcfrF9b",
  "key11": "44erPwGTsyzkB2txCjdEU6jZcc85wf1NNDiPbL4Y94HakrZQxEkADpGZVFUMjR56thvniBRNCB2Rm5WxEbwheEqP",
  "key12": "8a8daXNeeu7o7SPxkGnpXWLQ68ytFshX2egeGQTMGDxEWkNRH4DLJBxg8SuEcYQ5n1DwfcMEY85WjAMdeEe1UuB",
  "key13": "b1y6vY1ZdGdyNGf7kwGZRFQwwAGWwZvMCzbZphCEneKVbhKuTkkLFTJEgvWqkKaWkC6FSjaPDVApKdQMW9uK2dy",
  "key14": "2wqUrF6FnMwKtHLAFm329Ha56QAC8CodqHALWwscdpgY3C4zx52D7KHw4JAbNXwgZewCwoGXFXAeEVookeMJMDUy",
  "key15": "3kHNcUgxQQ9LLuKDWGcvKYKwpLRdwqWCR7WxXVUy2NFejHyGPu6GBHXkRkVfYBB4TYXG7ox7TLybLEAHWnqFD3FY",
  "key16": "4jE8b7CmWvbkNjhDA3cSN1jcxJdSvFiNYyDVFAvzUb2N7U8jtNvyTihzCjhxUo3mnZt2YKQt6qmzQzDymeCKZmRX",
  "key17": "4q67AxZ3FVs7FynYLXQfJG3pYyFdNh3ritoZgZVeebR82Mu9S2cgFjCspeVdaKf1zDE5QWWPXfatZEmLwcY93a4f",
  "key18": "3wna6qzcAhGRsFc8A8p5iKPcW4VNpcvath1ojfuYpfdqwMp248E7knFBBFpuanp6seTq59UuQyUcBvjwpEmnak2K",
  "key19": "5PaYxTKA38ConsSzjZbrWStugaJ9AgSLAArgWhsHc47CkebrY49b82EP6nXQZjc6tb5Ef7Z3pULqZKwyGh8m9z37",
  "key20": "iVtdehSWrkXxEX9KyCUpWtSm9JwdvsTg5csmRQktjMCQ8Qiyd4dUm831MhQeDULJUtz2WFFEDh7AnVHTH3DEm69",
  "key21": "5Qsxx67i5AyUKLsi3MsELvGsZ1cX26Jwvpj7VDnBDyEUvK4zZ8SyMN54Qus1yt11SP47hXWM1tfw1JAKvmd8sCzT",
  "key22": "29zVZaHnS5q4aum7Xiv3Y1KuL6J2NDAz88Lnhb7nEgCXZMvh3vFyRmurhTyZiDzQzgUN39kYCmBRpXGyDdA2vjFv",
  "key23": "nXoKicAWZRs9cwam7MSMvWurx1S4oY5q31VfiMG917ohXCnJrYsit3tGu1tK3yL2uLmjUbCnEAFHN6xCbQQGxvC",
  "key24": "4zLKf6sQwzWHB6zjPXMWngXAUmcaiTLpbtg54ZvVPhCSqcdQY4P2EQNgMn91ysMs1rjM67J2CnENV1vrLvHB7Uw1",
  "key25": "3jBcWv2h46p2kehAT2uJX6AptPLcAui2enE434t2EKuz9v5meBo3bJ34LLH8FRkZp9Xi43SwE9pEjxQqJ9xC9gzu",
  "key26": "4c3oUmKuWchghtszaJmZtxa9Rd148TkawpaaWbuSkRJuS7ZXBL4nZTZfUbNzDi33KRcTq1W5kNN3VeQEyWhsEcRe",
  "key27": "2BsmkpvH65V8pEo3tFcRzriKnVM6NSYBCqkaiPzNif7nKYXPhJTosWip2GxvL29xjVha7Z83127dxfTDXgd6ysbq",
  "key28": "xb66EoXb9WxBfeGpizx7wCcyGyHMKv2hCdwdmh4H1DkEkHmbVSeS1gKzYDDuds5UyPGcjiveccbybWUPHwJYWEB",
  "key29": "2AiE9HwLrke7javxhSRXkkdSiLXzk5wgvJSCPACtK6GpNqtLL5igBh3S98nqzYtY8h66qKUS4uAgEJhofLGafvdq",
  "key30": "mgjqeo5xQeY7bnuzfTwU7JMC8mUdibdKnpdaZpREGWjW1uedYqQ6xaq56Zor5aipA8rW3LkGx9uJyQDaBXhkVWc"
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
