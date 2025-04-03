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
    "Gp2NdeVhwjykCqi5ptQT7MD6iADN7FUuvt6EhaVDwatt9HeVKhjsFB3XrWYWosHvE7icgXKP1SiniTFnDJQJTsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55g36Geo5qWLcrGawmsb5ZyLe7akj2fei7sbvLDPyd8t3xVa8wXxE86W93EVeDNrqDqma4ydQwZNQXMLdpgjLfA5",
  "key1": "4ff2f3XrDetohBPfcmjGXTST5C4UMG573ssgBKgVfg6PNKaAuy6dAqYVrtg9afksRStJHenz8AnX7JUfWMJ2Jw3d",
  "key2": "26CrtvS8Q1pkotWX1rRAzEBoYtoY84eKZtpFPhwqBrn3XZH1CgRrD5yL2wQYvCQHifgS8wnKNZubdjDGND7YPQzZ",
  "key3": "53mD5UbAtwVwYjWmk9pC2Nbo5JCbQb94JAdGJ1vzjGU3LSdexibjxms96mJqCbKprtVce1as7UNLb6RSv5ZRafyp",
  "key4": "8ccMbrsvP8yoKc5ri2mAtKZDRkNtYeDMayM5cft3ySaPu8HAi7FutzREoM1eGeSRT6JC1MWpYZLvMDJgq5Sy9L1",
  "key5": "3LPkLbdC87pjQZj85bTMGvaf5gQcGHzJNLkKnjNJ3aVFqxPHyFU1oS5fd9zzxzSSmjHReWb1ttLFeWNjJBYdK36K",
  "key6": "4b19T9jCH1JLCRT9N1p3v5kd2q5XNY7bouVE5twdAjpsAry1xJsvRExkiRANSkiiA9cftr8vZxoWrJjtBZxvNwmr",
  "key7": "2HjUgxaMbvN36A28P3wvGPupaPiLdJhUVDrDzabLSFZKn4QE4WLvUc2ZsWJqHFT5h8pG6pYHS1Cj79uCm1SNN1nt",
  "key8": "4jAJMkGRDbyQy71PrrWZN1X1iywGJrYkAK4r9fbafzKmo5iS6yyfxQLAJzFjuUTjoRN5LvUgx9G2B74G2kFWVPfN",
  "key9": "4UZbwKPM1rcaydY5FR5aCL11pD23jgPaS3rh6iYT38w6xP6W932ubvv7mXwNMDzNJHCsZJrdtS4gf6QfNzJccvpZ",
  "key10": "3hpURmrBQVvEWHiquBBYDcWu7q1ckusXCKnds8kVypzCrvuMUnGiCG1CAnsxHFMQi6TrMsNBaV8tCKZxzpJc8nDY",
  "key11": "4BGA22NMhj4h8hR8rxgLygHBJDgPT3iYPu8Ak8Yz15xDtRyzGSeuyryeiMmLzoc53hotztrKuY3kanh2emJwNmq2",
  "key12": "5rf1UK1hcvu64QJJzJvj7EmRNizEFoK47RXDNQhCVLS9aBEZK4JbT3itMMUFhCaVNjJ73ub7gzrQbhj2AQEebxqa",
  "key13": "5KeaP6Mb1QEoaNDRfwuJN7X1XEbEZ5r56VQ2VZR8QAG58SVF2bN8SJo1XCwj65woT91qaaT4aVkhcxefXJTd3vk8",
  "key14": "4LzVPpyTN7Abv2dZMpYTRAinWa3cNEWLECWYpxpZAgrD1UEeuzeCzPnYTNXJrKnQv8z3qj7kvgSSodg1FJkia5yV",
  "key15": "edtLsx9sVBy6TZpY4BmFsKM9Ti9uniuA2VRpfEERB9KZq4vv6wHJ9dFho8R9LkAHBLS4NHKXMnXK7aRUvowyH5h",
  "key16": "5gCE4quqjtPvRoMPToKuZR9XAvRFvbs1hvq9WsLCDKm85tZ8jXzZLkGJY96iopk1zAt5cDKNdW9qNKqyBGok7ftk",
  "key17": "3ebM9k7DRSSKjZ1hSfzRTScfF8EYh2GunrgxFk6oUkkSSjAy8b5HqidTbvMQYrjdJfkyuBataPW7weLivJPKqJw8",
  "key18": "66xUbbaeVHSkom9raJaQrQdecRC8ykVnfWyg8vRq4NAF2ZySHn4Vvk1tUbPSAvpAKmav4LVK6iDY9r7mZv3Pf3ZF",
  "key19": "og2sBwUesV125VNnkLboG55M3Tk5kA3GT78Y7F4oA4SPm5ok7ww9dna1tEFsPEFAM3pCBPR8EYTom26trktf1CB",
  "key20": "49H99EyVbo6LtVpEDZicLWhdE3CbLxVoY2FUFbfrYmWzTr7pLks8p7btVFfwQjKyUKsJ72jx2PwmQUgNTie54Nz9",
  "key21": "4RF9Y6BEmm14isc9zoXbFRyErq8Ngx75JQMZgsPcPyQed6qGcYB8DvnwqbPbeEoQFCNFyDUrxgVounk3Ap6aw7Ru",
  "key22": "5AgkhEXYRkeTGbfjidTAK7sZJCrqSQmDC25Phwt6VugsGvwmg52fVHERpcBjRURy4ZyqAUBfV2t3SWwsyGXFcuat",
  "key23": "dXUi4EoMnyWdMfybQLD1cAEqBkva3RXviz58Xf1ybkJcHq5k7EyJ3GNPk3A2EXPa2qHMNyZhh7G5WeMfcXmB6B2",
  "key24": "4L9Zi5DS5cHaYN8MYswjUNT2TEg9GMS3oApiXAEUwWGrdD8kP4N7eQKdhnsF413LGJWxkT6gSpW9g745Yo5PiPPG",
  "key25": "5wyCB7fi4LUsN8dzPyZyXtG98p3BjVvYPeHTCCURoow7P2sTgfsKhnNF95vKSXng4LXR5214tpK3rgfA5Ue3Q3BC",
  "key26": "5fKaDzGad1dkuPiWM1KmzfuUUoSWWa8NCfLXE6jxrxzrn1vguc2sVnYEmNi3DstyCrZrktMnFTVnq2N3xp7GQLvr",
  "key27": "5CoSm7tF23NQyqHpVv5XvJCQohbRX2wwT2VWUNdzJCqwmXGztbe8BLbfJrVNVLPdpcWHBizqXJg3uDvypXupVZfF",
  "key28": "36oAfGjgiyAnm2GcLryhYsj3jQup3rD5bkFRnJKErhrxAtNEjszvTS4KBFoSvMc9VyzGTixBdZ49b78f4Hw71PdR",
  "key29": "5akQJcnQZyiwftevmGuvjV5SpiGayPKRokqqWp91JWsSGuWT8m6dvLpFGWT5dW8CuCqQVcxYa13LrUFqEKp2eRWh",
  "key30": "2ywHFnfoB5humbVk6akzohPdsEreNkebWsEAtSCjuhmVfbCxjKfA7tFT8iP7yZxD15DrFSz56EteA92jfQtbycTv",
  "key31": "5yUuVLe2w4U6iaGGHKN4QhiBsqt4kUbom5Xr7gpSuxFQcPqoZjtyDWHqH4w3S296PRHGyzhyhmq5r3GtECRU5LBD",
  "key32": "4r2ngq7Wi3cwAF2QiDFrbpMCaEwoMoaNoxACZLdc3hNNc47rRvDzn1cPzgRDECZrpYLZZ1BW5f1dcoQK6to4v3EX",
  "key33": "5QoaBnWubJSHYQHip1EkMUt21PyHrKhVSH8R2VR9bg6yXNc1b3yi3QkroaSfCsHHzfUwPA4pDCSHDY56qwCUd4X3",
  "key34": "2tLLRNgUZumtmHagrHrcb9TTJ7xU8fvcx8Ky2zoWztYissZFyuNukugAeQ9TTvWmgdpw6PtbXJVyiK78UbZwnWTP",
  "key35": "2KfNW3aje7JaQrEKTDddt27VyoJ5gv7McCpdK1rdMCe6kTSz9V5iePACMJurhYLqW6PHssXq433X6QN8afvzjF6H",
  "key36": "41XxNT6AwRJgKTpo4RZVVcF4BqTg5BVAmFw8crEnYvC8AY9p7Gjr4f4pxYXKZnNBTxj7fDYSDwTSm7nYsaoZqpVT",
  "key37": "45kv6JQFgAm5KV48mdffTSJhKXpX59PPrdqoP3ywAR3egfJc7m8VC3Y2wFv7K99a9UREf9gYKn9hU6VmLTiaSnA9",
  "key38": "3qwhSbVPh7YRkm5smsvJANaJYiVxcTSidhbrQyXY3HSaVdFNxAxqbkMKHdDmrVjq2VMRLNzy3NoGVQmvTD6mnL4d",
  "key39": "3gHUBz8N8hJHkw3GWwZXeqLvnPVSepVMy5gHL8q7RMr8DrZ29yk8Up3NuTqjAr58YZt7h3BRZoNxPfd5fMHDN2VJ",
  "key40": "57ipsaDoaLbZ2eHRhPJfj3XVMRPCBae5VYpUPePesBWukebiZPYc854t3krYWAmKJYLqE1iqBte3YKrepRJYMnCd",
  "key41": "67iTtF28EmZWNkfK5F6S6Zysubcn7DsVw1j5mWma4U6qkyfjqban9bL49bcPSyD9NyujUgoBpF8GeYmpzKBJmY7g",
  "key42": "33c9jCrKGegiZAvqg2vExZ87sAMnoBPDmVCn3JRE9dWF1ob6137TEbgyxECU7RjaFU1B7t6WYUqs7NocuyDcm7bU",
  "key43": "3eaoKSF8ntyzYVMvNrv2GDZfrKn5x8N7jvS4HKdLzDfyJj2PirViuysAMrGsknCbx3ZM6uXgM8382odYLVnbyz8A",
  "key44": "BNMRJQBENhr5yCjpYochhPzWovVsKwK7hB5Xj1RL6uh2MNp2uJ4NvhBEndiHuQW1yfuhpA8eMvjK1Zo5bLkvmGn",
  "key45": "eNHQnT8YQTzT4rK4RDabtokHRevQgEgeVRd8VTgjSCiX34bmr4baAN2bT8RvMUnCw94wJwgk7C3LJ8w1RZJfAns"
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
