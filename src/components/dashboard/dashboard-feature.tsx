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
    "2hk8w1yzRrSK8jofErKtKZfzfixcwzqni96Uq8hqpvJ9EATCDHXEELZPyWVUhHsbvb57h3Sne37WLbbs3rowT8es"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TtAuoDoZdCrLs9EXf8tdMCX3F1DzoN2qEPrVJAmMNb6uL8qkE5FqnBJoZJ2ysjxTYzbTA16VHcBsyKia346UTrZ",
  "key1": "5MGB4TTWCg8uaVQy165Nz2yzB1gLf8FDqvKPxQ39fDsHTi8NppPSyVUtW6TV5U8mHfLWPgBuR58EsEVQghdUY6Bx",
  "key2": "5CxeDygh9Gn5AtjqnL797oXkU8be9vbc7e3PHME2oWf3ANLDEZ1XzmNXhzzazArdJv9nHGfEMMpgY73M4UDwpRvf",
  "key3": "2VMh1suMw4u2Nz2GKSpvdaBjX94gPkqD7Y2etgeUNC9mhgdnWfchR8m9a8JTU12imtsn9cXNrk4PYZVexKW88LZ3",
  "key4": "4aZQ1FtoWV2dNwwUHuJhW2S63ijK2mq5K566o7onBEKqm49Kz7PgFUWFFjVY9oTcw1bG29pvFfyq4ZmfwShMcHiG",
  "key5": "3ZfFAncsmLTMqzFzyu92wGJ1S6ZWqed3sXmQ1oz53Muv2rBAZkLXp3aDzPKEaboqgWjRGjorxujiSE9bN4mFKuhF",
  "key6": "4tcQg2JfBqH3fPypmiGJnBbtzw8CTJRHgghVBtuVopgGjA7KrMD78WoSubTQ8CAF4XvJb3zCXYUbtfUAS1XtCLKS",
  "key7": "4FtX8yDz1gZ6iGJcigjD7cB9muc1NucQT73Ta9WAxVjWbuXBcaQKRh1vavrUkZAN4XhNRbuSRhkQQ5Sk2MyHG33t",
  "key8": "4eMthc4jiyTF2jTmmZzTxx5a1KGRwvPjnW21WAbu1fc49mqoPMghNEfULbt1kKMyHUYpBadD337fjW5WBCMAzyE6",
  "key9": "5gQVmMJPNWe6QaWGwZqiqBpWN291tpxN66KK9CXddcmc6kjWiPgHa1JU6WxYZmtTTxu8ySn2ZXQwDWzYKQQtqtCP",
  "key10": "3NHvYFx3xppJdbjDignWeJ212FjxCNj3NSsjrZmdi3bKgmhPmbTHcaXpmTU5KCSayfK2p2u7KujckF7tUWKnchFk",
  "key11": "3seMwFCnSg2ynwhZtJLynL79HUj18v1pJQYqUPELhNp5H4xwAodnHWQreYjV3FGsB9oPwQ5muGDtkNp1PBAw8YXD",
  "key12": "2gBCy8Fz4xyx13t3mgQ25Yjwh38cEqekLctqyFXVciXNxnqpag13Bv8xKM69eAbeGxsB7BCVxtqfYXLpkRgmf1rP",
  "key13": "5gKzhcSs6bwFjE8aCshwCAEKjnB2AavBh8fPekfEx67q3VC9TuWicnpaTMBtarPYcvjGEKp43F4eJ2sa4nTR9eU",
  "key14": "3RvjYrpirsQt24K82uBRthM9DhhykxsG7pjyb7LyA85kxwaDnVKfWNudUj7mwQuNnQwUtKVhHaApmhCUCE7oSBuT",
  "key15": "bvbR938yZBLJvfYaLpKcjY5bsS86h9pRkHeABhhiQhMk9TEPH1YLGW9Whg2Dxxa2eoRm7FaQRwmt3Mk8PuktiNe",
  "key16": "3Qy8nC58jWewbpxEPKY5ubPCF12ppG92rrZgAkHnyYjhw7xPWRARrAahSm4SaPoMK2AgqpKJizKeGQypgouUo1Tn",
  "key17": "49hrpdYBy3ioLTbso1t528SCqVbcUFGoSxrhhHAeWJNnPQUZngXtfiPgCisWiBEMr3aeQWZHpQGgoWFkP7oDP16p",
  "key18": "2YJXByYxsjaZ2h1qi9Bsq6wyb4efNVjNJNzk6fpcppDSZVZ7uKgCXnuBSmqxXPV8PdF2KzWSN9CpTCXWG6xteRmK",
  "key19": "2jBMWQm8bLBQr274DWxby54wozDXzZzE2dNSStDQ88XrdefFy6SfFtwEQFb8Qe16EKPCseSndEuVofaauisVyuvY",
  "key20": "qUgxpeJgsGc1nwbhq5iGNcsmnMQtgnkrGr3BDFJWZxKneoAFJJnEVicpBtWWxo37Z2aPjgmyEJM51n2PRCdvgx6",
  "key21": "5Pb8MVCJHhsuigLtzmrRdFtexXGu1oJBpASyQSR5MeYKZsiZz5jrozkbd9jLebyws8q1FG4sjMYJYJXTarxdmTUE",
  "key22": "3zoHkAdFFnDKRPhfyCmkT5kjdDrNLLt1KHBeU5VrXGRogii642qaZU77JpuTJroT4ZjDeP4B37VWU2kTJ9wfVy4L",
  "key23": "5ai7o3WGATXTUCWx1Fkp721gmCfsFns7WwQHirj5rFiT3uK168aqKFXAfpf1q9bsC8v4pRceS7WNAxdSfcepYBNF",
  "key24": "joVVdjDjFGkkXrSGZzZEaUZnCsP6finR9LVHhNGHuVKJuYmz6yCVq8yTvt9vmoJncyjFsJQyrxx5ZdUPgT92CAC",
  "key25": "41DhfLkqNmUkTkgDe2YBCWyWmd6fpWDVJXSpDnUUaZG24r8z3b1PH8ERf4yjfEe8mY4Jf9t9ksBtzUs3vjsSGUqd",
  "key26": "31x1HNxipLiSzZmGyyrdGbdZrJ9xFK1jKh2pWeuKPrVHFSZ1NqqKpNQUP1FzYqZLzj2zRUJ6Uu4R4m121q4E228w",
  "key27": "5TuvMf8i6nXMrVH4KB96D9wPQbQLdxB3FpMPH41QfQZUazCcMYBjfJzH18KZxvVWVDEkAhUComyQ5F9yXtcFbnfG",
  "key28": "5sXr8X3NNKGMTjY4bgjQXwcvWtNXauXzPfbv86uactueVcbJMtSEqUKzHST3ccBpaKoVAauqPrY7AwAwmp6Fzmke",
  "key29": "42LjskokmQD56YTm8vdYy1yC2P7QwVUsw7fsgiBPDhXEpVzUYcfUuBtCwv38xWHFQ8eik2t1SjJ2hhet6GqtSzVb",
  "key30": "3AmP8VdRojuNQ23i5SKgUaDKbQz9Jjm4MM6uWefTkgBeWoKro7QoUKVMiLQiqHFxtHTUJQibCqQZuYsg6hTyF8Lq",
  "key31": "5PVgn4bVKci5Q13gq6wnxCcNtJBUoAp4rfyUTZB8E7ASQxDQbbpC2n2ChRuMwzpQh6NxFj9FDCZeSdTYJqhMAnFC",
  "key32": "2njMLVMcmduvCFkGQh7Q56PUGWYG8Ys22nYxwCVa49M9Cx1j2tRRncUtHQdyU6E95kpmwR1fSskNktgHAkwC18PS",
  "key33": "caGVPEafPhr3yds1wRrZuHhr6dAW2yjJwyTwsQ7xu54eSVwPXihHhMCybRBNZAyw7cTYLv4YdpwBSpfFZyNMWcA",
  "key34": "WKwfgfT9kzFxiL48Tdyz5XDwcmGX94qe6tQ7n5sGwvi2wS2AJoRhbvuJnfY8eKpdaWP8dzMg45cN5RVCMFKKjty",
  "key35": "3yRFxHFkbbqsSo8rhK599G8wetWsJpJmofUSdz3u9JRgFc4xzZXe7AB1Cn8DhUVSXesR2YhqzDLLRKL9CELoG2Pe",
  "key36": "hbLH5pN75fvHs336QMgyQ2g4YpErJu6GDWS9hoVHxHgiwHVwEpiaBn54uATpSYdV5pEWf2ytz62SXKhFyCm7sDR",
  "key37": "2R5REVvuxeB5kZw73QEqN15RPomATmRmE6iJG8cJy3UhFR6pnKzqqFGWCip51ajZvueoEfP7VBiPSYRTh39aSdbd",
  "key38": "2Tk6RsTi8EGJcgxLjRWbuF1vwbTfdapqawuNbg9NTS7MobJMNt6VhjL7BpRXqu8Sk9qwUW2h2gjJyJsxgHzJtoK1",
  "key39": "595QSUQiMysCnrYF3gaZfajQGrHsAADgi2ANvpmd6rJL6NZTFgorA18jtQZxN9MqHkXES7j37Qa4SFGyrZXk352d",
  "key40": "2s9nCmqbQTdUfRaph5cxz5Mr7LL7dGrg31H17pd6yGRDc1n4L6CqbjG2NgpQrqXYwkQX5e9wRLxyuWRTX6LeK2oi",
  "key41": "QyA81WfvTe1sDfkBzeB9bjViqJQKWWo3121CyeP91oKTVe6KPpTDvZCuaTvwWbjkQhxnKzEhvPGu7tVU3PLKr5P",
  "key42": "z74YaxXPBN7LDSjJkLF9Wa8usjb8zzdzW92eRshzdNzWCvYr8bs8cihDmooA2yAUp4DhXzSvhdtEMCozVSj82WE",
  "key43": "3qnvM43RgUBnRPvdVsjr54WMbCrWSJziFjJGjqa6T3rMGTaVn1cfCBatSRGciJAG4xGMgiLkytG4o5emXD7HYBb7",
  "key44": "5jZNCaZ7CJTUycdQ53msKLjFoymW6ncwvKqi1WyoVMvofBvccB9Ri3DL6gygAp3CQZkrXqtmrRLUWQhacot9UDkc",
  "key45": "42NnBkG725mVsQiwiH5yfqe1W14X56etfDsisqwDdtJFZ8YiVTvBLpBWwSekbqoSCYKw1iUwTVfK8UAzY6TvSBae",
  "key46": "jEdqgrUKoEFs2zKzeLUmfQzKGSEeMf3JKVSka48dL9pAk1a65uVWuGdLY7ZiPcej29aHsf1pdj4u5gx1AVjBH9W",
  "key47": "65996Cpwmyk39PC7KJNFnUNcDFp7aPagcJujwhYwXPM3DLc8mwyQbojwcuEjWq3EMDL5QhsYxZ3VdGfoBpKsvM6p"
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
