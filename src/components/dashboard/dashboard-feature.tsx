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
    "4r5V16t3WXNR2RtSe9bsWMrCxuTLpAWZxCgRXJwUme7dgs6UBrjwuQtNWzEQUp6PKtYnkNefoaj2qPhMmhBoEeeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YnaYk1UnaWHwBfDhVwnDEiadqCNKziCoVvNW1h3iPhiry1HRSzdJJqrp9QxDf7eaif2K7LXQYQEsAVJGnEGZbYs",
  "key1": "2ZVJPWrLvmv9Jt8KbPQDqWEb82pM8CDyjExU8PHFZuiDCUQtySqhu5hm8xCbioH5Kvae4ThAUwQuRv9huiNsGJiR",
  "key2": "43E1McU69i5edYmu5tVG6GiMdWSgEzDFGQ4SPMxwUnGWrHreKUyYfLp7Rp7N9a6dX3X82aTMftNVSTRUgja16PBM",
  "key3": "5nU4fCvHBKuuNJQv3YDJRfWBLFUmHq7kh8t4vrBT936BgxrzPLXhTCByQPiD9jmpZXq7prxLptDpUueE8v7R3WP",
  "key4": "KVqNyb5yXySYYvEFovaEAcM3HaaAj2xVr3DkJvHv19CsKp3UjDbSs26se6sTyuvc7SvRfQLivVZySANPV9Fo9Ho",
  "key5": "2siYztobZD6TKDqZ49D14HJ2WcvaUPt98KppLS8kqBkN1wcB9SVLnR5LZ3hNxumD9LavWoeERqg3E8duvwKHFgPw",
  "key6": "4cpVErQSogm29uNh58bqH7kgiKP5feFK9gGCfwVpJejbUFESqCp2YNrQCub8xjZtm3FL7J4EtXpqmHaaC9QdFKo3",
  "key7": "3WaYFQLHE5mxdfzcSN7vhF2XNXdA4U5bMhEMqxrtPLMivpPAibED2BN8CWTvdYf3UJGT8DTz6rhdRekFQ5TQQY3v",
  "key8": "4zZMpxinUkp4Xse5YtGfavKuSJx7Zgn1EbyK1Mzw1ndCDcWS6g8G3gBRXZfeYmdkgG7ygKrQhqE8SXX97B9XSieg",
  "key9": "NbeQfiPXQESvvHyS1EGcRmscyr1wpBjLDjtQ2QtT9FzqdivtKq79fvxSS75gB5EvBbHNGB7GKXMX1cffT7wkRTt",
  "key10": "33YPEWNGyvuaJg5iuZoKk2Tue9RepvjzDJ5TP3F9tMKw6iTz5F2zhzU9Tr6q5hA7JzPyx1eYRMtgc7bji1XqQbiS",
  "key11": "2KwEwiuT2gqFoEJeNzE3Zzw7zYia6S1ua3Kx9EuhNQjSPpwvji2SRTN9hfBGk9H7ewabNJmPWC59j7GzokzYXgKC",
  "key12": "66v2ThcBssb5cXypFdfhZ4df971WQ9kXiMpF5tYykMiV1k1K55mZVUkdQXqZK45rdNjvLko4tjn68t1GM6kLnBTy",
  "key13": "3BkDdwCoNJNRobPDq1AvhTRDkW912EBweJQwTPGgHpGQD4UYDaFgWEdjuQNcjLfMpwDLvb41pWYu7Z3XFQ6rtonC",
  "key14": "3wfi4GHaKn4dKVpNTyrTAPvYjGqWU69CFLHte89XhgxdaZMDx5WCR5GWoRZrUhGFCkJXypGUaoZLWXxZW2VqdaMJ",
  "key15": "54Pj1XNbmCj8jebPGwXK6vhmDMWnMV8e3um5Ubi1a1k6aRpSKJiRYmdy32yuMSFBwGoX5JVCo3sTyfZN1q8rduPt",
  "key16": "2cmYUF6MRKLGzQ6gKD6MiuabgM4C6EAaopRo4borACimNsfhgFnirHiHLsWsgGeWJ7dLCoLAo5AY62TDptRYEpzb",
  "key17": "2EY13vd4PZ1as4zqNYb35DEhTyf1qyUrgAPCNq1Cp1zZ3iyd7FP3oeAk9YutbmLEExzEwWYnorTJxdyqb6whapiB",
  "key18": "5dNigZ76ndSrnmBSLizGg3DLddSFaUWsajzvUDfC5NZY7s2VaMh6iKoNkH7AtrcuWMCbkcSfYSQfmiCupouhpviL",
  "key19": "Xd5DnjVByAEGDXTpBdfW6cFGyAuy9zkd4CPr8QUF392WNtHkiJsj19pTXKC4zXBMVFq3zKDXS66cjdZmj1mCuoM",
  "key20": "64GZiet8MQgzqQYHgrmruAJq25AJXWRUf73aQ2RqED9JZWaDMjGpE4b4pbY3ts6rZe5Z2C7DXAKc4MuHG1zQ3Jhn",
  "key21": "4GmpArNG57RT9wfXfbW1vFo46irfk8ciB24JPCiWu13ZYhbbnrxhKLGSYAUzT7sfDTUG8NWWwD7FgT53mNhWqBRz",
  "key22": "z65rdNJZEKSvBoaSPB3Vu3bLYMTq8g2p4DTwZx7VxYztSixSmobWkMd22NV5ZM4bAGpqoYwxhP3AkBK4E8DqqWG",
  "key23": "3PeV2GzAJ2NzcDKKuXoqrBtXVcEgQQeQmDEUF6Q64Pw37w5ZgKtNXUxUWSLsWfsG68T4nSYq54sntJPwYbzuiqd",
  "key24": "4jwg9XZJytoLDoVzvTnT9bVmXeiKLGHNYtXVgVAejAvDaETbQrCnHsEMAZC86zosd5mFSz77qNFN79zfk4ry9VoN",
  "key25": "43enVa6hvqjmcLLSuzbiQeYEL1jkFGoPECJhZ1dJYLG4hEcB5YB4aSTHLZLCrTpjWLen7oYE61YygSD7HnHVqcRk",
  "key26": "3T8izipmSrdeKwQaEQhEnKYpBTh7gAcd21PYVnkoVQjUVT2PsZ4JP4msNQ1xt8jg9bVR5c5mR3kR5kVdbsgb5sfW",
  "key27": "5JQBrHi9vhDzCNFejY3zAtonnd31Z9m7NwHa6rUECTpmE4PaRUoYHCkWFJrvcxCad9hJUJJTW6XrNevtx7xjSLWF",
  "key28": "4e2J85shvG7UpHwRCQ6G9upcsTVXLYz5VRqFiZYMJ1KfXFc4zHfGVVXuW2TXz7NbBP1qmqXR6w6mn1pKPXkGtGdH",
  "key29": "434MeZ1zv5vJwDnFcVEnx8W935YsZh2iWVjbapkcXqkypzpmYwGXqbWQdLnGwn3yPLKGwEW3KSZPTveepxuyq3Y2",
  "key30": "5JjQ89pnkoRhPdv2tUMn8PLcYN7pDahiiyW7oNeLBSucL3AxpJPK5qwmbZnouhciMK2EXKVzc8h4BkzUtGDYPJ9t",
  "key31": "dU9azmSfgkNf9yMdbTEXHGKZNuoYH2pKAcynkMzxFfhkh6CQpoTvjhjHhqcV7haQKtaEyv9U3Z6SaMGoU1weqSb",
  "key32": "3GsepRMSzmZhZkbGxRD2Xndp7HxZQaBkG19mVPgQb2vsandFnQujy3dJCaSw45NvuwASdBTMwtstQ4MBnumnVsAx",
  "key33": "23DmRcxKqRkbayZnpBs66NKUvTb3mbi2bUuxxaLahTPSuE3KN5wDSyZQw5eKJF53RQpb2XpLU6ZGG1wQwdvEbN9z",
  "key34": "5MDBz28mtiGHvYLC9vVQjnYFSEf9MxC1tRDcxEh4xBH9gofowGDzauA9nkXB49odd1KfGQ6wY9aQ99gRKbuZhit7",
  "key35": "5Pus5StVA3Hc29g9zTtTxxqcTEfH78aagdENkQGVRh1rhNJyQK957iPGxNZzXXNWy3NX1mmxE2zgCxmDpnoSoZfD",
  "key36": "wLtFffqC353qwuaFrQLLPc6yF5RK3T2rQuVkQ8Sucj4ZTUA5kCszHYW491j2pimgaQrhCDMTduWwZYsP9ueX4as",
  "key37": "3HmsafjNFE4xiiKa39eg3tje2BbT8M2rYcyhxM1iUFaKGLhdpto67zioCZ3gSXBuQ1WvdTUr1VfRfMUJdA15mS2a",
  "key38": "2tivy1Y8F4sjm9ufMoS2xY2aeR9NKo95dZhP5F6A8iVKtapXhqHm2e1iDzJLpZCz8ZhSmzPSyt6Z38X6X2umuAPz",
  "key39": "3o1kpUk5dUUkP6bMYiLmwYqMXXmY3TfhjRgWAtfXU1XdxYCQmaME3ypKt5Bm4xV5qNNgt4kacpECYcTGZyzTL8WD",
  "key40": "3jJdPWe1T2JKtwis9JZsBPzeK7bdJ4roAd5eLANcpaAasihpG3gxr2w3MuDUT5yJRdhqFjmv68Rbq9kPyNtYrwD3"
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
