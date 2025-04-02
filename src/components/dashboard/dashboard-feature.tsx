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
    "5bNcT3X4nR7H6nGaHKTvkQcSqpcpvVUCio3JRFqTcnGQFWF1b5CRSpKVrbbvH8pUp1zsLV68vpyX3bovhcJCQN2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XTRGCYrpNo3Cg2nVAV4gbs2YN3prkRJturo6V3gHT6rQ6bdutGsfRh1mvYSzB1Bp8DUkD5waxvueMsQCNA515fk",
  "key1": "2BowknEptFzyjGhtxCHoik1WqE34ZMP79q5BJPMxKH7sMupd5h6qEdWVtnwqXjZZnGqv4GgvMg2zQCKW427SVpxT",
  "key2": "3aE9G7UA9oyRBbPNND8XpVEHRxfPDGUAdBuE7KBBsXLGZApcAJUUkCafboMa8uEDWUMqHS8cmFUeXqz5HQiXr3LX",
  "key3": "4ZyM2FRAqycXApCTbiAcEPWVT9cSDtvA9S19SoqG6hS6NtKjHokeKmMYEfVMFV7yEDz3StxacnBXn9F6xpFQuErS",
  "key4": "2s9TBoZwpSGBmPZ6Nh1yj2YvykoMtCr9SBji3fhSDR9g842nv8q2hiBuUKWo1a3u85nLzxhYc2u4rj4Ui8QtQkBv",
  "key5": "fgMKeRJEYivPPCSd7Y6GxVP3oTrnWNr8A8JqHw4FY8Aj6yHnzfUNszqaaV4ZqK1Yp5UUe1QWzP9Tg9SSsKzA2EH",
  "key6": "3XV6e1AZc3bQzyYmEQgF9gbJJeVy8wvNTAdme3WviZqi6uYu9Gq745WTm7dXob1f2mXr5t9gyeohiRgbrEhxNnD7",
  "key7": "47U6vUQAJfrgrcf2qFuqNcx5qcHMgdk8837Tr3GQLpDhHyEEyk7kTsUt21tUizgcrC2SmUuQPSvbeYpBsnVv7gDR",
  "key8": "2dh8cZnYeXbXYm6k3M4tBz3oyYQ9J9npGCG8fLHsqgvTvbE5YmFaEy95kbtdkDo7TJmLu4GK2Ne57435mbNFzQwG",
  "key9": "2H3Hb66FjtKKaMzPCdiyTYKANBxbJCXyFhQekvWjNvoaRwux8sJXhf4waZfwTM2hfHR19hNwo3vpMAdB1N1qKRAg",
  "key10": "3vKa2RAGASw7H1NNdJLmgDNA4jHiXgyzCi1MaUJkTRvfXQ2FZ8F4CNVEedF5JQ8VLXAbNVcJHYNtZA3XdCBVfuBs",
  "key11": "PGti1wA46ynQq8CFpwv21vGzdmoRwNAYWsZbUcYXkKqGpWpKvJ8ej77GBWWjTNKTNVLHUmwFVwrL3rQdfH1v76p",
  "key12": "2VSiLQG4QEtV8yhzu3WEyQqVeDQzJeN3MUJjGkSyNeBaqW898gS1TsjyRyj85STFJp1T9qv4JtRhLsiP95JuiY1x",
  "key13": "5BDzY6AAQ2fYLTZSiyNHMxy8TNc9bHSDHPuVPAJgjHP49hQnktk8b2rFZ33sL44xZitrmtvFhTaaMuiksLbJqGFL",
  "key14": "2eu6ARKJEJb2hXbmY25oCcrZithH5DQ2c2tEN533tU7hi8p6Fzx3ehbZ2DvXFoQCtp9SrwqqxA7FxFeYsKhoukpc",
  "key15": "395S8NZwqqA6EHrQsHUPigNQqfFRsSgGudTwdamQnKc5XSQNZ917dLL5ZWP9xEe9pLqWD3xEk2Fo2d2GdhswnWPh",
  "key16": "47HQGV84iAPX4hbg5duY8c5yXi12uMWuN5gTBt8ycP1SrJdTspEaCfny6uNmVKYyBwNJ8MAZLK66i2nkii2toHoa",
  "key17": "uvpEP214gDCb8MutnvqL1uZBA8gfdNJ8XSvZG2Q1fQtkRLHCgdscevgFpTw652dyYCS27UEbPZE5cGvSmJE9Dnj",
  "key18": "KJFE7EyDEFzDLmofkVMmBALXbgmLRvVfoq4kjvVsAGs1ZN6KagRJxALqy5Txd3PJjMEPFTK5J56fPGnti3kV1UJ",
  "key19": "3rg8EgAjDmXu1wvtvFoCLvpnd744veuwAsX2mDcRpjexYKsaMZXGxpyH3UVEhaU6dgDPkVEnbpSv2nwU3JXzwCwD",
  "key20": "51Z5babU69fvxycy565fAQBReiYvBAgzpGJXbhbzSPirN1WTTBF3GnrBDX7R5mRaqc9Nv3G7bNpncew4hQGZe5tT",
  "key21": "2KTENwwbgGjjizRmaqyi1Q4skTNskAGshKX8jZxjaSCyFiZnMPev42KVq1PQ716hg6C43HYx8FN4E3TAHn9TTJeS",
  "key22": "4cSNwJr5J97RqLEyPz5vHbbkH3aqL22LcvJqTAj6poCc7cXyFuaKfYLFozCucXtgYvCyvfkdW7Nj77o94FU7S2Bq",
  "key23": "5SZ8uUN6Xoimt9sjHBmXvHnh9DLxqg2Hos25wgmA8d48J7J8YGXg8QSnArBhMKP98coo25M4bAPK7Dhsaab1QfD",
  "key24": "5ZUYvic8PDNAvF5s9qZC6mxRLyGgzaGmKusx1G68APnkZbFH1zVZUUmeE6WFeZ4KQjHX3VmzyF3BujRhuDCRq2jR",
  "key25": "5pYJRH5yU2U1Z4yvQcC9kBEqnJMzF3jtJ6pdRXwXXtTCRh9tEMrjq3jjpL9zZnooHvYvFok4fabQQyLVYf7qnTs3",
  "key26": "5BrqaSSKLr6grXZ5YQ62FcD6ynNfrG4FxN9oP2rgPX8jWTrCGm9bhAtNcnQgX2F5tijNq4eyjVLViB8smziaZVL1",
  "key27": "4pewbPveGwzrMeuvavj2v7crpmRN7tC4tXXfUZzEzZnHCFzWBcdCZZ87AUMYxtZKwn5GvuYnDt93pmPAJfQXdB5j",
  "key28": "3VDD26LDPazVn2jeAgu4L4Rb8fCLYESo4sG58hKPsfASckP8HM5S369EoLcjMH38ub6LSZqJ1PRPbT3nMKbKhzCc",
  "key29": "5SwYhiKcYsuzJDBzVcsn76DPMW2cCt8o3tsVLABEP5EmpfBJckBQwnu9x4FuoYr5beGCchqizmhNZFgg1Ba8iwah",
  "key30": "3bzU3bLHTH9d1Cv9KKnccBYJrx8CUTtX56SWZMRPcVgtAKFUaKw9X7HcyuG5De1XPEz1t7L14kENEah1VYbHfDKq",
  "key31": "eT3hmCaKMkNYC3qD2EWicg5gj8cJFZcMmYXXuQdy8x7U5G9QRNn656aykRxc1RaWiekTv642UGCNiQW42Trd95S",
  "key32": "4YRVPjPwXxrxK6WwWNKTY29SAn8NQYPveqrUhuh3xv5CXBKWBEoqUML7JFPWBeR1hqNM9XJoy9Re6YMtcrnftsMb",
  "key33": "3MbsBsmDinM427PjW54ex6u8achT9SDxNfzBj6hBP7f1vPDX8V8yTMwZutfmh6dQZuPm4zaVb22c8jskDURcacC1",
  "key34": "624b324rvpvBoCQ8XEjcpyGHFvrQPqcvcpcAzBEidi7VofDphZ3dLetUz6u5jtMmLcx9ymSsjJDzc7nx89rqP4JM",
  "key35": "4rNuRm2vw2h7HbN2C6UAMMZ8wyuMiMBFE67MTV1Sa5g1CHxo9phnrWZCuh3hxDJxD5mRMhXAMHjKi7rmjL7Lq81s",
  "key36": "2K5HBgxbJ8gcby6XsxgMMddpMr1Pzs1yV22xfXBdpDp4UuX2gYBX9HuLrDjwFU3BUCSACa83URFZDgj8A6eNbJu8",
  "key37": "4p2H3PxFPZdpKcbsFfsQ7re65PBwhRE8ivKqMgQ5fyit8boLhfLyhUBEBPMyaSziyQZBDh5fkUyfKf3cFa4qcbNy",
  "key38": "S87TK229gDVdgPq9S7rXfGZQBVNn7b5kNU933xqgnPbr3BwJPNwAcG6gqaGVitCWAfNveHnVBvoXat6ik8FjpzW",
  "key39": "4HLauoXDxzke4a2deRcYMWTiqj1ioQrpreBYRyDxtDkN8WvCKB3hpSPKHooRgDs2LYHub1nYfM9oYavaQbwonziU",
  "key40": "gF6Z4iFXdQxshREHWFvWwpF3EQGsQkJhXk3XR8vc8LSSAYg3XyB8toQcdwi6LvvT77Vux2iK5Wx9GSYyccQhoKK",
  "key41": "4vsFuHRc29oTX7WW6NKJsHCDEnndq8RoKKVcBQgeLdGPu5H6bFB7NQFmT6tyG4JH9c5tpKeAwyaAhAVJpZou5Xrv",
  "key42": "24nP2UCKsjGqbMzuaEQXZXisar7F5WTt7ZTSK8oBBMDYL6fPH9zhpuuNwummR3Jik8kXrbBJnLQdqwYw9vgZmDQF",
  "key43": "2QrUCPYVtpvC5ttGRiWtjh7i8HrN7T7MxiHzaCA71U1zH2DZdhjvr6vPQRCHBE9T1kiHiDRRDUU2LLS9egb4zufg",
  "key44": "5EUU9jZVxNTKV6Y3zD5xSAtE5rkoxYVdydH2MFJEY7XDeZDhuRiBgCGUD6TmFG6xZBBw47nN9WHZ8o34RQDGhbJY",
  "key45": "2bhcpn2X4GVAa7Y6ufDM4P1RGk8LAYpzG4gq3oNukzFzQAgioiM5hjTwfdJX23GBbjDunuju34jgDe6Vtm9Mb89H",
  "key46": "58EEy8zVtfxDbP6qew2rnu1U9NyWATSfzBz5AtpZbcB9EZeoUi7Bg9PDriwn3e3epNRyPQFZnBjJLiRRwTXao4kC",
  "key47": "2WhxKNaiRf6Xpk1PFpnuwKwx2jySGLcHwPMziqN9ujdZKBQp8WTH2LC5ePDZTnDHYzepGXR5qCFoPgyKr6Gt8Q6H",
  "key48": "2EEKuMWP5DbEfE6dhUn5hcy9YPSqkYXjHMb3qfQep9PLxiXZ9bUg5en4NiyUQNPqwjMaHj6JvpVmeDd37BJvdP6R"
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
