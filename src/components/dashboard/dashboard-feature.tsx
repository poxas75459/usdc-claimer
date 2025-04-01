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
    "3Lx7199LoFZyGtFvzXTGHzzGTP6i2GLFRzXgttJt8EnLuBsFvpT5zZ4Yen6urariuybd2AaYdE3FnysK9irZyeQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q4t89it9W5MVj1ABqqeMnKJFe48TBTD42u882gYfxQ6nb5fWJsePKbU2q11Q2WSqUH44Kh43tMkajmiExQws4fa",
  "key1": "2FsLT69VXfrpvwS11zvWgQG4Zhieukuk42J5LACr7ki13FxsTnct7zq7cC3GcUnzpqvGd19UpWi9SKqBnDMdssCc",
  "key2": "5Ji5btspegrQRB5A3pAWnQE6rQqnyPbCgCNNAGVUob7RjkQqbwJ6bQmBT6UeCdgk2uwJ1DqwpiNdovytBdCx31XC",
  "key3": "4LzdLXFnqq12gNovndtJUCnZNCCQzFehgsYDYVFM87AjLu8nCmyUnTUg5GTzfE7CENvhFZvBhWh9dPaza9o1bCUg",
  "key4": "5z9GHgn524JhduV3JS1XgM1Wh6b1sqQwqEQvY1aPxfErrfQV4QqGA8HawWMQ3eH9Y8mSvRnQhBzCtikXfjtHPf8N",
  "key5": "59gMMMMQo5ButJF2AYfF5dsfwzWAFapG2GBeYTNsKnuZ6BmW1LVhMJC6n4eyHq7XSxoddcDkoBwG8swsoWTBnjKD",
  "key6": "3hTpYcrNVL2YX1QFsKP6uJytdSznppkMoazu69JPCbj3o3ynrMYy3v8AwKyPrfXe32mZ7SMBTDrP8qmvMfdHCSio",
  "key7": "2oV4uewLqEH4826hUcZwnWtTKNvoDKN1p6YYjMwsDaZTm6PDM2mEn8VemYZt5usksgX1yyD1oikMzV3AuNMNYPr2",
  "key8": "ehQCyrC3WHnMSTJ8XvTU2KDHQXRDhvKN647LBaTsiAKke2j3NbPmh6pmrMT3545u9tbvjHe9FaUTz3asTvV62j4",
  "key9": "TNMAkJjjtq8voRd6kSUYSmFfrkwDUevn3h7FMvr3st4p5zRyZNvpq4DpRShoPmDoJpv2LLBuu9AAgwXeh8E7kn4",
  "key10": "22rscDPTkZdpGMLQCVgKhPXrojgrA6Gm72CVMuNtAGBv51KLgBHeUW6hJF45vQ1cvsFbk5itzG7Z4AvUTAEeevXq",
  "key11": "3J62D4kkzytDDeryAZBUyUQiCz1ZQ3AgRUH6xR9BSvmMqdqBMFSnqTW7AKMdPCUfD4KSD6fWvpxY3i1hY9YxRi9m",
  "key12": "4ivbwVBQvDb73aun6V7iZD8JBM84ZaLZMmSSM99JKyd9Hxgx2i29719pdRC4zZfrzBV4JBSELD1SHJsNTuAM9b4x",
  "key13": "3PQEEpwdkFoUU1GNVa5MJzTAUSadyUjX3CND1rTKep7HYMbK8f8xaocC3ACvic21vpL8wpdGo8TQdQvgo3JWsUA3",
  "key14": "rBt2xchPwsTUi6GmbCSaiUbXKj5JCQNaaA5MeaK6iDZDZ4YeM3VgTd6tYb73QS7nJrYPWoeKE83rWivYonRThbB",
  "key15": "4dDrqURfRzYRjfH1Py3vh7RPxM59zZdJF8Ht9rGwfNnpND9R6ms6JbtvRkXD3sPotzJnU9RzLzKJCRF7vtoSNAjK",
  "key16": "4nuTLyGRNrwNDfeddgN3BggkPQWcYj6xo5JN1NPVLUFmNxyUJN4cWk798kdDDGq4EwksmuCNxGWFeCY7fq2u8XsL",
  "key17": "3zWVD4JzFiAejmT6HAKUGE7vonEKc8AmBdZUoLS8MfzYWnewdEzVk7uzM2mGSUqoQ7gWRCDXWJ8pLdHmUZJSwK5j",
  "key18": "n7DwU748VtrYLEk1VHULF5gsGmFstDhChTFKy3Qj38wXdTugHTgzbvszX58mQxJhoPP1KqgmwZ68RpZEDbT54mm",
  "key19": "2Xifib9y5MsN91hWBUA3gAGF48AZ4cSb8FhbGY9xJDf3nYujaWkKwEQAttmmF2vA4TWR9R7c6h1DfXB5qwou7jh",
  "key20": "vUXkNSaNGpUVjMUgjithRiFFdjAf9TLN9K8pCDLvwB4QaS47qxR7FHetqzkRpvHuYoktbRrcemnZrfqWLLn3KHt",
  "key21": "2F4Qh3ihNHK8iLig6Yqp8nu588c4aEHxMpAeaco9SHcRGm5Sx2WmaewK47gEpx3YLLdrCkNxkraksTmaouSLRrP",
  "key22": "5g63tRpfzC9AJdh7cxeoJFdVwb6ejjxoDjVsj27knt1xqbBc5BBqbPiUJFPeWMpgADChmW9F1UDuT11E3pvXHCNM",
  "key23": "5qZWZVy1noC3afjrcoRueF6rkkDyRmAnXjMJoPALKA9UjAZaJ6x5TnLHtEBu1GLvNE86iism5VYBFNrfyB5NCbqq",
  "key24": "26m392hjPJ9AoW3nbTiNdhiKG2QoPQAz5CyyBKWdBHUBEy1tqDM3xPSMbRrUBYnuae2fDEEei6JvrZZbb78wiWir",
  "key25": "5HbSV2PAsmurTf9fNJBVRdNeq5XSFFtkm1QYCGt6GHGYdjx1y879CXbZL8r14rSQWKpN39VDamL3dumv55A8ECC2",
  "key26": "fdKPH1z924GJ8Z2g16yBqxXMsCuFjeG9gVNYvaDwaEFZHWvG7bETD4b41cRWq8E3zTvMU4Sn615CyCQsjJkRtyd",
  "key27": "4RoEzhrpcSVBN52uRGPc9kkiQJs65Uc8pt7k8SEeYa3XgbBpV8L9zXYgW3VXoaQgi73UTgcb9yxHh5vXr5Z2GGL2",
  "key28": "6NyPf5o6MyPbTWJBTi7GE8XugfHgoniQHfvQiFTugRF3MJR2ovnDs7jJC4hT9eHQLJ6uVkhkY82avt9L1c5xPgf"
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
