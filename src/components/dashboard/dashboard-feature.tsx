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
    "3Ttrmr4HkCkPEH85Ur7ENsp5SJcFyuK7pzWyTfvdDiZ8bA6xyf6nKFmaU2aNdbvsySRkBNZVjHhHeA7MmQTUSVDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67UwCyxTbUbs57zmvomis7CkUrKv3hvbtUKT7TnTJv7ijWnNRvMzEYiSw99j3XuLKTX6PCJx27UhLP2hRU5aN4Cn",
  "key1": "jsbGeAev78GvLZYgXZCSU7G9BwbC7CZ5o1UeMT9aDvXM1Z7Ku2N6t5Q5oZWQzDmFSMJ1o6NGLRpZsftADmhccUb",
  "key2": "2UxrNU3d9LXqmSJXVjN6FyHaKRvk3PagkgU5jEt6CujQQjzWgMjyzcaaEftGicAc8etjDjwXNXdUcdpfM1kkJaxR",
  "key3": "4QneEf5yYQz8hbpj9yxoRnnLkiyAiM6fsdP3Lzhpo6MSbAmR3Hugud6d6RBPVPgQzZFDQ3acULSHsL4LMxMAjQM6",
  "key4": "4ZXKxntiirxTBsm3kLwNb9PKUZP3UUXaEtV1TCQhsSxphSBeJoRDamm7XkqmLez9DNYRhQsRZsMVro82Ua4LbQP3",
  "key5": "4mSUtknFW6maw7tQEx2QAfCCrXQ3HnrneGnoEj9z2LbdaeakZmjKx8pNdPTfwi2BX4Z4dWoaQJZzsReqgiTXB5eS",
  "key6": "2Y9mqbUtBdW21Eu53y9CsapqonKSXGEp93cN57FdMKVg3UP1SR5BZEP6kvw5m1bYRBXzAnLaktMa6NyJqPqA1f2B",
  "key7": "5Qpo4Z1zfBTbqokrgP2Y6syGw5nVSKXSsKMy14xvCV5CsfMUdMsm3wwVGXMooNvBtWBuxyEgNR16QftMafRV1XNF",
  "key8": "4HATqYShHD9zbhysN67uLL9Fhcbv9Y7UgaAV98qpMXUrLLGVno7R73CxZ8qNxtNcp2viHqUvv9kkFayZ3UWLUVYN",
  "key9": "3y5WDVgEXpTbet1B1HV4yaMEH3ym8fgaTstNgP7kzkqDWag1uxtr3Qkyas32JJj12wxz5rYffdV5drwiqFy7a5Ef",
  "key10": "8wkZsjbSRQFVzdraiDzNzCpJjBytEA9ohGMrkWyukUBh69veMg8F5NriqSwQxv8KrLfGsaTnUA8q4LqEVe4SBbN",
  "key11": "2SwmAJp1hLVeXXoVUGujH5VQoDXjWSam4VR2deRHGAJzMRU8dgsBCXMGgc3XVhfn4cpg3UG2sNBbfm8TDNmYRDZh",
  "key12": "5GfAR1tjLYwemgzth5FNtwxQS29izoSGY9gZVYmviwAbFeYh4aWh2BJMpoG13yAb1YeRsdEhJuYSZutVawgk5ksd",
  "key13": "6BaxnPAnxCkpwrh8LBghG9x7mmPndR4s4v1UvZXFAJaCBEqyomxyrJCqcQ2PmSUry4RWWAnb4oem4YP9xErCvq4",
  "key14": "2T95o23ygdKP5pvuRpBQ3Qkyk3pzGt6AnFN9TM2HeKwrdAw5u1StqEkUWRY8YzUGcj8hCAKDCg6q6Him8kwhLCoT",
  "key15": "GbvZu5BYhqKgpP2KWNJ5u8wjU9HCiPgbMvnS6WCYxH2mNMTSBvxTV3hrwy8foVW5AwqpUx5zY3QvNY1WPwajx5R",
  "key16": "4PqFCu2iWQPruaZ2F8S9MS3rYoXBZ8TrzxczAF3bMHD1AkZeBsjvqiehq4GzBbxUL7uRtv528UEgSFgnyw3TWzDA",
  "key17": "3Ydzt3Guax6zM3ArUt2fb32p5v1oDa23nUe59K8qpBHdEdPPwjwneMCiA7tFjDyKzZiVRuVSNf4DDNY9bpp628Ne",
  "key18": "3V7SW5z2xYHcNj1ppTwzPiwYBFgqGASe7jYJGR86AxR6RS9qwQ32JVKTEk5s8RVTRLvBjY7sBqGrEUQwvkQqCkQk",
  "key19": "aSJ6FxU5Y4mHGJv59QKCseAaQsa2DdJPiMm8MYCKcaJkhy7CTynLVVrnaWRdBuaJxUeZViFgBuvbSPX1EKCkANZ",
  "key20": "2jMSu7pwRF2njC9cnsaDt4B4axd98ZFdg6CPsx6QZhVPyCigkJkewpuizyWPEakTmU9te8ttDYxnwX5rHQenK6hQ",
  "key21": "4zocvjiJuZzR8TmfrWrhdNvM7w1kyvVJHRw1kBePYxpeGubPTt6fBXyFtxwQckv35tEKFGoqvmrAqFhZKiCvLQoZ",
  "key22": "HaZhXFFDpT8dYKrukf97i6xW3N1QhYfVymjXS53jk2FLRK296p1TDu9G1jqm38KC8MMvAzuFc9U7w3VpbfriWwR",
  "key23": "Yx9oieGRj6u1ygpEp6ZKcfvcFkbGFqWWgHmiBdZwPf9NEMBPhVK5nxCBGwVyYZEt7JMwsYRiZtCMawrTdRaGx3D",
  "key24": "4hecgg6SUP2D5AFSZjvC8X9JuoW1SYdNNipvk3TwjpZLqEQSGRUbSt9H7C5aqYwaS12Sa71k9MSZgo5drvKRZVo8",
  "key25": "6qYMa99gvnLC9fhgkQAzRjq5zGMuMhLNhrtZknk7TfLd2iGsD7RyCARyuxvg65om972m2uPJvPAXjmiprMXqW1i",
  "key26": "4621yMgUuBhk8TTCKP2W4CG5pgqW6YgT5PGwu2oSfxVramkqFuhQzsp2Km5bDtWQHArVhbsN7nA6CrGs97VGK63m",
  "key27": "4QtoXj5tEqbu6UuWXatGGh1dwg4UZb5t9trcvktPMEtNDADXG9GXFcyXnfjq5mL5MZVJRnZF2HCiDEQudNNm3Z6m",
  "key28": "2GscytJCZhQXFP99u9ZbbRHmnktt6ExJM9mh1mN5UgQqx1oj48uPDP9cRJrgdcLvznTEFYnrrxp5u7YxifrsY4UF",
  "key29": "2rdawEGm65MmBKHeNSeatZ27eiFMyXBxEgXFH6EhCWDxryV561doThMy9fuJNigyTo2q4x2gcLEDgfA6TqkbfPo3",
  "key30": "36byurbNn9x7EVSQtjs3MdZSVrEwtWejB5bdmYjW9A54JdAYC4mnHrFhUGp9MU1WNvzR3EaqaN2ZqshapsweZG8i",
  "key31": "4f4CZQ8nyGg1u3kYCDo6qKN9WKDYCpBkPMjJPusfYpqE1vuMTWh3KJcaXvAVXfQNWiUnKG1g3xCXhNXXLXP5q6Sz",
  "key32": "27L3HHgjZG3wtLJ49hxLHQvb7jEoj15FYV5t7FidQV38WVD1iGfBwHG9zg36XTvFGXrRv1hucJyGmwgCd78nmrtz",
  "key33": "5h2LKKocDuSSo1ZhQ9cJVHkzigy3o6gEd1xJygyFwDJoficptiRQfAkzCgmg4Zo6EgaznDugt3yyCP8DUNTDJXiA"
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
