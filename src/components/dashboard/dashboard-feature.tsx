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
    "DFxC1hMp6NTvjB63MVMNd2fUBpVTmzKzyz7pMNFZuuEHsdNGTYwpK4kJ6BJSXCKvvdYL9mXp6vcB4575N6pMo71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2paubBqr1JEpVPmSuFP72iXypyhGkV5JLGqUJrd9M9DngnT2wXJTW1EEDFR2x6UA9VbRAb8gfk6iNdACzyKDbuar",
  "key1": "4n64Qmccn26ZQCfB48r1y7YbrMYScSdDYuSHKeVLLoxDHoPKCQSbroD7nDweY6rCH5S5S7RpcSJa6H7J8mg5eQX9",
  "key2": "5NBuxfDge6aoH18ecioefnCeXW18abeJRRE6rdXSri69yzfLUPYpKE2xDo8oc8VmwWnQ8yD6N5RAAh9Ak7uncMU9",
  "key3": "3JZ84XeTMf8S2zMwAjJPPsbLnshEDiQcV6Lu6VHx8GC3NAMZNeKkSKAkMZ8vhvFgrvw5HH1nWNNeLsKTnoeasYK8",
  "key4": "62j5SgyQ5PRSUCVoRkvf26Tjd9y4ccZx9nnV2UyrojJGn4avegoku7X4QiC1TcNj8J2SjbWUzQTyWgisrnWrzMqS",
  "key5": "5h8sEhENLWAkhqYLJvVjTrgdqWyokqz4Vn5ZevnUaUP58mVk7zMCfL3wNqxAgHz7edFo3onbApunMTnbEpeYoFuv",
  "key6": "3N3S5VxDurtU5vAEtJVV66KPgNHpEcsuVQ7AkCtrqdNaFrBZGkw6bnNejBgd1bKPppW8otTKHnhebK3wLvgpzBYZ",
  "key7": "4aD4grtJowahprg72xwdweCY4nWZsWfF7AkPXGFbE2pdFnmj4pFH3vXAW4cWPHhJ1KtJcXmCi4PbALzdDPCHSRzQ",
  "key8": "2qFwxcdA51pfHhE5gED2krJ7ybSEqG6Lq2ecM9hfwwFh77D1GufbdXaPqZSNyeG2tKyeKvKHPes7ksoRto2Fr8gs",
  "key9": "2813r9zLkcFRmWayquVqGBeXELsYVEEzCuUtjxQNxCN1UmUTTwjug6sBqrJP3QjMWXh3Row3zPrEKPTra1ESKL85",
  "key10": "PnPttv1ad7Tx1A48UTjNnSfdZ46NzyEooh46VujcUxzQDqmC1xGvgwj78FAdGtBXevJzDy46ZKrawv3Uy2HAPgr",
  "key11": "51at8byP4xFMHYEMkYaPdRAfE1ZUYL6CdQyLyqCxpL4sTjmDkVuxYGZ5N5b3ELCAUc6WVNQBcj6pNdNHdGvcZVE2",
  "key12": "2T1LaNm9LGTyYMhdenRZ3UBGoQDhs195bvR3vThkPNaKC2KDv5GbhHAqqFo8BxiDE7YwpPVvfHdjvogY2CL4MMTR",
  "key13": "4GgvGdS3CNT5owctksF5RADdAaamoZWksPfPAXZvhfZEP7faLEGSBeCdmEx96LuB6CwC3L1BhKhKrbELGPgfKzcs",
  "key14": "7rKRLk17muDdw68Qv3uVeoPkVp9DYE7pCLao36gkA1bt5BQPY9YtD4TuDP1fGC3dUreiLhZyQd2oNx3pC5PTEzW",
  "key15": "3kbwG4L49P2zFMS3VjHCXVBTfhuAAsJhhFHi1d6AxsQnTbKAsPHfs18egJUe5FMZqVDKZjNf4FeWJwX3xEUQ83iK",
  "key16": "3GTjU5bYUyjL8vHLzyjcR2FsF5VBESVeCUazCvfDWkwGNGS2GLWeWQuqHxDz4M8SuzPzEQkGKrqHRBcSeFyuU6W3",
  "key17": "53VHuCWyCRg9ESAedJV6cQSMfJ82cRSrxx1mPyw7M59nGApZmWNjyNKpxi1gNhFBR7Y1UoNQPBHvmkZY4PSrvKT3",
  "key18": "2SzYLFdjoeAgBJuecCUzPe6j8wTrDJSKSpFMkS4tkmKY4RjDyMJ7ipjpMkLrB5P9NBaKdXD8hz8nmHTawMYryxbB",
  "key19": "3JnDXup1RUYahZQp8PjFv6nWqXzjcDNpeRBmFcuKEbURYKqmx2qAtvPwyLv8QTgCMpCv5fMpM26wsq3q9BgN6mLr",
  "key20": "zU2ayfPHwWfeLtrtCh2NTLBguyH6C7eY3YYZQgcVjygqM4SPmY57r2tAPqgfwTLG9WT2hoXM19vVVKdZcKgD7nB",
  "key21": "2txp6VUJ92gUsYatF6mtKMKhxfSiCsqeKh9Qugm21vUeXPRG76FsEacwW5LPj2xRZXxfbEt6yFJCYBnxfFE2rHta",
  "key22": "5cetKLHaagWwSaC2gRrQFUbfKY6QYep1VDq32Jci3xQLiU9qNTcaXXp7E3sA2YtXaMDr4rjUbChwFcDxovaT9tHN",
  "key23": "5KG316yTcE8uBx6T1UzSr7zThyHgvLwLtuWVbE1zvU51bRdXnhsXaAYmqsbxrKFpgWuLKb7Aym4LZnZbD5ugvH6E",
  "key24": "47CAAn9CJofBPQYG6JUyAyUPCN9WG1euKGtZ7sLVAXx6KRs8taHRwNntCEQD3o2YjdQ81ZuWUjYjaJc8FPz2KfpK",
  "key25": "4rnw6DqYMSZ6VbFVk7fwM9wJC6Ksins5spfriVTUA7tQD1EFS4As9yinACrTrjvZAsTadwHFrukWYSPJGoGKUBvR",
  "key26": "25saxCfh1pzM41NAjTLiAdYvP5cd2ZZZBAJBPakLaMfdTKgGo5dZgsiXAraHmMyZ3p8odsvuEbhVw29XnU1Znhvk",
  "key27": "3qKgknErjRrwvM5TAAEcFLU3aAyNKQyGCSCkbpfu6zz6H4r8nevqvXJeqyZVM9DP2MPLr7nhTsQuZoi6S6dY6ZVh",
  "key28": "518UL13dVh63oBSfDzyF41ExKgCverwfzWzdRff83Bcey9SspiDYNDJ653PsXRQohNevBcsnh8AP5GeKKkgrkszZ",
  "key29": "3XkHrXkukK9rq1GviWdqzhzAw3wjzntHCdR4mP2UxTMVv9exYyxqNtEgSyMHZV8dGW7Tq9RDZCW1Kh23VBKpeqoi",
  "key30": "4XKEUyVusqHAsXNeJVbigmeSpCEhM5JQnSYNETVfk5gim3oXbPsVqDS9cA7Qs4E1y4BetKsUxr6SCaK4emhHT69e",
  "key31": "553ngfc3Rdr33mE495LK7JuYdtThfd6Nq41hkH1kGaAq87jndYwr3X3LVZryjGv5rjNLV9ky7kBQ5Y8eJfLFhTJS",
  "key32": "qJ4CDwP5hu5AF8LFB8fQAhsTHp3qnQW7MrnnzK1WTaAU8SPcB4GUS3t4J6WpqzERbS87sumf2i1EWGA4Xi4RWua",
  "key33": "4AYc4MKpD5a1bRny97DfyAkFa8NXtGvjbPuEb7JnMi3TYrvQZpyndzpXNZ1xnPUicbXx7aRQ1ytCtBH4UVWfyvod",
  "key34": "CS1MhCc3G8xocveoFhoseBjD8P2hJtyRYdSUvpCcSM7CQ3SyJMK2nuWHLPFX8RsQ79xHcyAyetYJ4NZ17qLZkj5",
  "key35": "5QG9WQPCyXLZh9wc5Cu2ZaU2BHvM5Lj5t7MwXxXS5cCDkR8TWXzfHfcVSgdyBhKritAnY3A4feRULijdLhxZiVos",
  "key36": "2avPFptLSmmmv3yMZtirUN7sFmsrKycPTVfnRvaQLrPT9pbFS18kGiv8g3t89AWodszGjnHwA9TkKWnHftJkSaQS",
  "key37": "UpRsucWkghB8DHP5ZRzgZTN7M1d6nJwv2gWH18KwgDtkuCiphheYA8uouz1g2AC3SK3jsnYKHEsj7AF5CatBTdc",
  "key38": "4KXzttY6Bbk4eAGJcrp711DE15mBGrReDn7r4XyLiBaSQyxyBC8juKEYqDK3GddMTxmFu5rKEfCaZBVTF7p1g279",
  "key39": "3ov8WGsDKaVTfXxcggjqiXPgX8dPLbj9zkz1yYh1KM74s659tkNHwU5yhyw36BE43CN8dcvHDaH6T5vHdmayQ36E",
  "key40": "3RM6QmWFfifek4PAjBMRLmBuRwfbRLroextxGnGcz73vccdK9mEMVzBWtVppuHRaCf5vEbqQU78BBnH2a7jHAbqW",
  "key41": "2ZyEmRXN6U5KgtZiQV3EnVQwSpa3RKWcb25rrJhCm6E5ABeYYXB2vzHpQfaAgZk3TfuWgzd9m9Cb2N3Wfp73u3gm",
  "key42": "5kF7EVEojvjw2WEgYngKfGZLZ7xYcprUcscDE3xipDXFryh9CcahMCgb7F4c9hsEy1qFijTwRS8UMpTL8evmswoV"
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
