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
    "51PrWsLbq2L3jvUBhK5AdAbRpy93L5DDijSZkaHPVhRStjSsjgkfQn1SdLPN23a8kGj3wsyVsHBZWZ5s4wvudsQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uLYfF684RyvNk8gtG8Fq2YyoM4RWjs6yfXsmaMMx6QaeGQAkm6bJpVjePmBjgwxYXNYqu6rF5X4bpxBxg2QTRq9",
  "key1": "b7VygnUzRjVbXt6AHcQrNhakjFahqzdzLFy1kMCrLDjUyfcuoJ1fBtpbaNfwYgnxyGzZQDrpvhSo5T7Aado4umZ",
  "key2": "5eAMfgVF5hkDdYWS7t5a2SMbpsPSRWLVr3oxngF9nJx8tENWXfi1Nkgvtrmuo5TsDotKHTewswRd4PhYEi4wK824",
  "key3": "3RRosfRT9BEPGeYkDPbsMx6CUh1xXMSWxVY3ZYtCssmvYT8mwS7CaVq6nZDjaRFUEsgnSAk56BFU8tmpuDWBFt9Y",
  "key4": "JHA7ed4j3ycZWxtCzffmWG5eEYg5kgEs82nYAeN9a9tPfJqN4mZDTKcC5unf5BXhfzTMao48mdzQCKkAYAaVoiG",
  "key5": "Tk6X32djeFeRXRjCJavL4jXa84sAVAx1cW9quz2yZqkYx6EFngLU5XN26Pb8tL2JMVPC9YvDkgGVJpVF6ZkC98D",
  "key6": "65gCz9V3xvyv3pWLsuvbuBWM1wYtaga4ErhjXuar3iLqPaCTvXvGHG9QDVJXFiA8mqsQZN5KzezimjVJFWBPcKYA",
  "key7": "2U75szaoeaQXFp3bF6kb1wWfAfi2hHBUCV2oo8VQmTQB3Dia52YemtK2NaQJtaDAxrH3v896iyQrRs6NC1Hb2F1f",
  "key8": "5YoAZCqyRTCKLwXU5L5Eew4EansLmNgNwM8q7yNtRKMzqZd4ZtxMXaGDdztEszJZ6Q5FsSpSEtAaVF7rMxR13MLr",
  "key9": "3KNcVbib7mj1uDsgcWYS4Hu8MFkpz5jTepV1yMcPASVe5t9H2Xo6prMUdcmZDs2cnVRJNPkKT354WUEFqL4vr5jM",
  "key10": "pcdRuWDk8ReibKK1LpXKM5o4rFSctLKvo2toDF43yQH4RqEuvvkRn5razpsJwVQkS3Zr4JWxPGCEwzXLhpN1PPX",
  "key11": "43UeXZCKpdKqwJDUbuJtS9aneVPnJGXq4MJnGVR5VBMB3FoM7EsAVD2QXsrtQ78P66oWcYBuqSdR2tpc9QNkmTyZ",
  "key12": "4GqmMqkVQ62GXNrcT3zDZzEGFJ51L2mQVfbRDNncM7zHyoAYe1erG49tWNp3wfcPX6bnMCJsXNt23xseU2Ebqois",
  "key13": "5sU6epQhyRk9UaP6rfQZfkMz2VqrA3FgwVqqrSBe4XtnELgv6BowMgchcP1XjzTnoL1VbFGibcsJrNdZp6k2Avf4",
  "key14": "5AYP1g12p1bKt79SDSaJZhYGvs5WLtkgh1bQeVkhU4VbC34J3mXjPqyYoHgirYpaxxsJVZhcZGi2Pf1BsDmkiQbN",
  "key15": "58uXBJ848SddokVpwQCZjJnGW9WwrPfN9BMEro6yPkWTuqc4uHhNLyJ5VjMZs5Vs4ikcrDvqmZq4E7UVwMzAWqc2",
  "key16": "9TWF3d4oJqjRzJuu2CDEfnKPRiSqBYyfMKQoRL4JQmB5We9CpYPdjw1YfZwqa8vf2mo9HYxEAWE6BDmzthHtRBs",
  "key17": "3H8UReasf1e6LDvmJNkeHtDNCnDsiNGg5HagzWt9MDkTXRpYqL4oWvkBEWZgDTtKk1Z2oLfcA8gZAWWvaqjFi5j5",
  "key18": "5WEV7urfY2a6Y5sqCA5H3wtdvmK37uApncdrrCxXHU4aUWPn7Sd6JEUPsJpqmRiPC9wb6x4rnNRQYtCYVVcm6e8i",
  "key19": "2AqqdhZMLXSF1M7cQNKB87RFfGpEDkWiad5wS5FkbefQ3euvcbBdC2yCcUA1fa2ZQhvMunFfa2DL1sLu7pQVFYHz",
  "key20": "2mnCZ7bqm9cwqKonYx3AgrLpKPgUY9rwt8NkTbxi8XVdFzmJiUfbYV9avuwXR25RFhfiB2hRp6cz6exQMFFn5MpG",
  "key21": "5xY1imprLtXyECkCwk9RMSkPzAe25DCGEXsG3ZY7ngJE4GMkP1U4p66LkdFK8Gsg7KJG6ce7HVysqrbTsT95RXUa",
  "key22": "2mrBYGnbpEFVeND7EXLBP4PP9EA9HMBoEi9D3QejWEPUTboaGheg1f2H7X8r9mRxMYXcdyj65nPotM88BsR22NG7",
  "key23": "45bayiVBg9ik29QHj57acveTDtS8eA7xV2T95AkFtKGh7HzmAukMQ6NG8v5arA3jnR7EvPchytVrBPGUkxpTRUYm",
  "key24": "5RC2EBeN2Y6icJwRpNKFXhpWkPBPUPJtZY5SvGiMPaFw13CjvTKSLYpXg4sMB7Nx4tsTxLQpCEX9y5U1SB2JcMYn",
  "key25": "2icR8sgEEoxp9NbeTqkW1BQJipLy4uswaBWXvw1iP1uu2qurBDVFd5hRazGiBgvy43xMDiMJt5UuC5zSqT11vpNj",
  "key26": "3G7mhCefQef3gXTj4t5QFEKmh9WMsXKCf3cGyt1tQU6H81jdU9i4mfmgEKyZTJ1S9sgcor1shHXp8KHU1sKBbnog",
  "key27": "42uJkKUAghsxdXtGJnE1UgchZ2PaAbio3oJCxb6tAQ6Q3RQhQZNsQqosYncEwiPRPB9K3WaSYmpoHSZjFRJHWnNs",
  "key28": "2WQ2xiKpRvtzLDwdhorgAGaDhgYBYugFQghLwcw2SVVdZefLyX7LG66rxWYDFwiJ5aEo6N2vcGasRnLfz4bcjJPu",
  "key29": "4GQujbRPHhxutkCB8mXNNpiuKd4aGK5U1SiLXzvWfi6G2zSyEPzznNxPuVtuhyvtda2T6QHVWL8oEq1pgXGN5MT7"
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
