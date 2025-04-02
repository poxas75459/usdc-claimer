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
    "5CebHnSCcNjh1QP5q5PgANGwBLGjf16vGuePD7G1kGp4DBEN1WNfKtpLiZZ4jwnPNLdjdzNx26UPqgM7qF9h9Kpg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MhRMd8XT6KtBBekyKdSn9fGqeaw3EAaQ1WsZfYby9yZxAZ9ZTs7zveyzF9eBENb2RkswXH7Hw6V4w2UhP5HVMdf",
  "key1": "53Wecum3g1L9GeNYaQLy7kAtAzVWna5CoMJ3HfvVkDSZsry1EfFL9TRMN98R7mN53jeCBX5HPw7FVsCYjysyWsHC",
  "key2": "27kUVUWoLq9RjGwwrkbXS3cvgc5enc8DKiKUXpbS1osSMXgE4AyzQEVQiTQ3JKTT8ndwnA9yuCh56Nd8wqkU9xD4",
  "key3": "GErY9hbFbC5UPpn6N8bDNTzrAwKHvZD7bATvdLZ8t8HjGZEEBYpEkXVJ8brxsMzrPxa6QU1bkUbUzyce3BeDUix",
  "key4": "4KaGnKRA3aTUTP5LEnC6txDQgtksD6FJq1hENA6AWkXBrroDmC9MbH5CnVDWTeb4GYfECLkuVssDWDNREUZ25vR3",
  "key5": "5mZEih2fmjH1oBymnqkTrkxkqn6a9vL81LshKZ82rbxxaEa3GFqyLGnBqA3ffzuBQnjkZfrwnAh3zWhgjqrfpjMV",
  "key6": "341VWoUZpdU8vV5TKJTSSWHqzsob7yCkBU5t8CamCvYJACpkDyGgEopfsgaM8xQueRzPNPrEtJJGEnyC26VaxiGx",
  "key7": "4egmManhHtAcqhUFtk8yV9nBeuL4rAUai1AQ4ueXrD34Q4XjaVXBFVGN2Bbrhm2ssRCTbtCLD5V78auN3E3tHdoK",
  "key8": "3jVmtLMuhcSsSdZ1t3w8Yuv5QkzcDtwn7pww9rzxhaNMDMRG2yzFEQyVKjgbUhKH2PHgC4i4ZqWr12wYAQTzdxYw",
  "key9": "4iAC5d3eroXf2WQ6g63afCk2LatUjghntp4ifUuXwAJEokAv7uTREJPE5BHTcEHintshFcMsr3vwzKvqxnn3RxEU",
  "key10": "3V7URirmFip9myR2fp6FsFyk6SbVju1rToTZDDAemj62GzqvGhR9dzUzsTAFPtaRpqCehJbz5FZ3fD1ZvPzazL9w",
  "key11": "4v9ehKPWfFCmcn4bjZRbsC9XNEmTFUS4Zr96QqqNJuqZ6EixSAppBPYQGaiYu1kP7v4UuKw3rbSejydnK8duGteJ",
  "key12": "3nptqW5LrFXGhyp9MtpsiHvX2pv7WbqP1CcXRbENKwF5si8DPVY3wErhvYa3V4RHN4C2epaHScRv8fxwBju57nKQ",
  "key13": "4UXhS9UYd7uYPzw3wWknUzr23Brzwj46pU7MreMeznYVTaeaBK6eGGEbNXNAcfVZWu3wGUh6NzVfTzFJA99vSESz",
  "key14": "jH7ehh2JWLABh8zWctpTupkCxwXf7q2XKATRvDMS19VChZvvgdpSq2AwfmdTsh9725a7i6Jgx3Sf6DwQVpviV64",
  "key15": "3UHiTrK1mS5QNcGqPgtxHDGusUKZyPq4Sf112ge6SsSEhK6YmT8uFgP9nrDvBoXsrKo5CQ2oH6VZUeCgTFuMadnv",
  "key16": "5oEzj4HEq84F4auywiYzudCjYVmePbCP6v3yAE6UqnZP24FSBCutqrLdNVJc8ZHNZSHHXDjcENzDqqgdJ7okso3y",
  "key17": "2LdgUdZ71Zte2xag22ApYaXRCpNxn598KWhLMA4fukg93zrjkfUSbvb9CPzudCaummSprwK2uyCY7AwqTWp43FZY",
  "key18": "2rTgZQEmB5gKGYSWdHAZ5euHUMDv5WrBWbz3dJVhhJ3aruUY4Y6ytq1M5P7EPFXL8GdvwCAWCQd6mkwY6pTgV2x7",
  "key19": "4vwF24NNePRvaf9j8BfuicYXte1HsrQkk5wLdKqSeP5qHWUsTNdgnPYXosspMZcMt44HjFRCnDoRU1dvEVxuscmJ",
  "key20": "5p2Pz389mxHdKGWZnEfHGW2sqPUhoqSnWHtt3mETEjGjbuADBP42EznyrBrpGbUHmHX4rz9kJ2uQ5Up945ZxvB8B",
  "key21": "2ZJmL2JdCSjcwMbUGedhEntWDWYB59X8umRyDyf3L56eu41UQ4wWoPTncu2GwedsVR9whobmNpwKx4tRTBrU4yGi",
  "key22": "2yGBUvCGMXbEp8SbMSDRYKDisUQnovWHa2tKGeKe5xnPHFeTJCusBawZnCTpdym5bwn6bqXci65RepRB6hSdh44F",
  "key23": "5jpcKVtpgqNPvoL25LGejzCa46Aj89tMsSGT31vUmMcDv1FHPkwCXTYYZzzSNcTR1r7xigWfD9gH5vzwJeGobSZS",
  "key24": "5Kgad9c3GS67C8R22wRtRFHACqBcLkFVrY3fgV5dAWM6jqBzBcSkpzqrH5HKaCE4b9pnG9faBDpuNYvA1q8hzv86",
  "key25": "5Ka2Sc9nUzzEKXQQjo9Up7ypCCHJPDMgknxt9d9abZrMG6MmfPcgdshrXbjtPx4YUEGexomYNSUHMMmhdQEThfRC",
  "key26": "2HvBVCVGYUeFpzqd7ZdPPsXFH2JSxhhQpv1kdQBkAfCkxXew6pziVmwRWDsTjt37nuw3CzmvokPzBGBteBVmDD9R",
  "key27": "5UMrfgvGhH1Q7en3aRWXBPzZ6WtZpqrCA9to8bYEQdFZuJMb6z42hjnf6i7PHvCEvtaKvAL5apRR3gwYb9ZyKrG3",
  "key28": "2QesPNzwAggyPu3tiPgNEwVfoPgyc2k4huXgAKKtqdxTCg2q6rjFspMncyTm8CPybe6oTKuVafhb3JAtpYdJPP5U",
  "key29": "axY8X3Cod2dQA1cHQigrPfnGcYK2okwSQuwwDRdGNsyGg3SxxfNtyiKXbXuBnPxxYPnxsXggLjiReCyi3mPdby6",
  "key30": "Nupa4nAv1xrScZitic2isCqigRDw1TsSMtku5fLvPeaZqkMuDHF4QFL72dSkqy58ZcggaUYeTm7kQC14VwtyySY",
  "key31": "cTo6bchJCcLiDfvgFb7URUh6Rw6653mTs1QGHKFCYpsowiv6b4Lz96UHBDDK6qXYthMHAkBtS8K6FeGf7QZY7be",
  "key32": "c9DCM156NeVEWXqWNvjQTzHp24RSSYSEwAdMpfHY6QkE2NYwDqVDd9y855uAviC5iUXH9f26fAXijDWUFr28Rwx",
  "key33": "4sFm3tEf7iMDFML5idXML267w5DfgRYHWVAHSMmuyDs68zjR85BK3Wgzhgsuvz8HVDTby8gjS3aYcKfXobwQWwn5",
  "key34": "2BDERCmM5XHfUYPbHC7Bbv8mZ3FS8gD52qojXb35oV51ZGJAWQZTmBjfYSX5BCu6FxX12FCfB7mbByyG9Lp3KtX9",
  "key35": "5yCjqvQTQgjpMwQ8kX82ELHHXqGGD9qsAEEKQuqrihyUu3WWeeC31eN8R3CEzAT8DjYVkt9h85K9JUFvH3GvG1ff",
  "key36": "2RRsPkw3MUmuHeqPCmWFfSFpdBQtzg9E5mjNwVdNMNgEmJTyPsAagYUUVTiWmBcmXhQXf4JRhVfA7sTG8FrzQCV4",
  "key37": "5v5DW5hncQF7V3Fo9FjCNaYAVsdr8Ujh1B28Q2NbmLDrq4HjgtsdPucuD84EkD6zWRkuD1D9soAiTWX4wUrrTpFB",
  "key38": "XLhXUKgkLHK8D5FhAiSXvwCp6gqckRDijPd38EnjqtQr5KrTSzURW2AjDtD66zxFJNDE27HT3ZyJzKwF9B7Ksa2",
  "key39": "5wWYeKZenKfXzjnpS7jP5MRM9mFMwKb4RfJ9w78LVrCwcVBxXANPsovmBrMdeaGuKaiMTe3JfNksUVW6TbFfzLQB",
  "key40": "DvJprtVyLQmNRxhq9iHdT3kuAgdKKxTDuaKBAEd8CL7aqDDmBcjnNeJoUG8L3QzY95vpvL5yDv9EN89576Ryjic",
  "key41": "35ANNB9h7JzNwfRVwLqad4fmxoMw8XocU7DsoZeeAB6sLtW2ny1GLAnYqpPszJghdU8hRFkZ8qJHvSDdbbhECh5A",
  "key42": "4UYUXtXbJABH3jGBacqsFZ6z4dWD4DQToh7vDfi2esMUozxxDutZJG9GvJmRS2sy51riX6xghQcTKN8cAZSrkeFJ",
  "key43": "5ao5HNUYgV9Adp23egj3F3qMoUcZwmkiryGbU9r6qDcDFVAgEN6xpnyCp2HPwwVkG9EQNUmTcfMwqq2uV54Nw3TX"
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
