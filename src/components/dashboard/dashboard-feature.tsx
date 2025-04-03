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
    "3DRcFUoTs3JMxU15mchfG6bzoms8Ezpv2VwC93iDj2NjLXX7xx7Si61AobiJ7mqhdCA2JsHqgYxAwoVohiw7SCcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HizNPYJHpdWGmCWu4phc9Mi79ghepoyT5MkmNKz9DuoQwgT3XFt3xYSxYNjztXYteNBnZxSb4QBYXyHu2wsx3rw",
  "key1": "2yzeR5PWFFrAQaxchybAPAdef444V13wDabqJTU2WH2LHJD9LDUYKAX18rCTK8KkVnbnwntL5Wcf74RXKGaBrtpV",
  "key2": "5RXUYxNTiaBnrXbE8kCKPP2vA68C8uhqeCoyFh2gTSmYrrz3kUC75FVVMDSS8j5atMC6NE2UptYXjgLxLuQCDdwT",
  "key3": "3gNTW7Pj9MePzUSwCvp5XPnTespGoKoUtVky2cpWhVtnfhWw5S41idiEQBUfbTuP8mN9gtdTXbzSk1tg38h3Ap5Z",
  "key4": "4xUM1PPpvCfk48gsoMuwhqRsGRjTFdpBgVMUYbBmrTeG1CdmV5zepvVB95qVx6dKThneeSqCpECgRSsciqCoZA1s",
  "key5": "43KLCgx49xot7WJtDoqPyBfoB2dpyCpcua3seA3JsP6SHjC4ZdLAwcHQfabNop3EwM2REC5QXnXmCzgL2sRSetbr",
  "key6": "2A6bgnBEcibCzLmBrwJfJqXSTuCUzsBRL3QCMzAs8NWinUVQuFKeFb1cd65tjowVXFZ3BZPzg4FMAi8hWuz4ohGe",
  "key7": "2HRiexXeHSdwe1HtbUmz2HAiiSw1viEPNXTeD9bm1uRGeHwBzARhVTontbtYgJxqnvFHJofLLoxyht2KtZyWA6rJ",
  "key8": "9FuKvN24QGngGPwZ7hF51eRiw9FMvVVYumX6WKfovwg2qjrnTePomDLUFFJ92CYMYwAgvCPpYz5K4jeoCH9YtWQ",
  "key9": "Duw9YCmSsTgVTtCNdwzC7gjAAM5ZmfXQP2eJ8V1yWsntxeTm6KacNpnSX6nghZps69ETxrfkm4kznH12RP9KAzn",
  "key10": "5b5My1FDJV2BnQSZ65YB6ydF85kFakpE5W4Wi7oACfgvWKEQttpVaRFVytWXrAEiLX3wVKz8TuLdvoAteJXGSQY5",
  "key11": "2GhHJSTCNc59xkVh7bqJgCw99YVMFpA9so5P1gpJ2t5eh6teBLp6dYpYKEiEzuKbrRpRmDcQjVxi2pXSwuHaFYPE",
  "key12": "3tA8oJkLU779fuaCuEnrHZSy7zisv9CQcyWbtBZxjKPnuB7q3fjekpu4nWp9Tbfh9eBNTZw9extosVZnTnk5euW8",
  "key13": "5RLzn1JTqe4eTVvGtmWEjNs9az2PKoLCo7GmVPWXCPDbv2znQ9BQGEi8mqS8TZC3JDTRmiU4Dn5tCMkXz3KHveaj",
  "key14": "4n9GvJzRi2bUhs35AR96QxZNK7a9EHKtWq2jLZsRoZqZ1d5ZGeFMGjY3CoiRuTwfDQybZZ4S5rGs9TbLvuYaWg43",
  "key15": "5cUFLfQV7wqRfuRqgyp8PzgZ176PMuG4CHLoJ5df8fCwZH2NHvWnEHKn2E9whrVjW2p9xZ4m2GSDzeipuq1iZevY",
  "key16": "2tLZ5D2mGWd1v78fyaEKpUTMN4ye6ds5jhqC2BnjBmSH94SEpELX7jTWyyaBhpijizkaWFAD6K18RKhWhuHetGb5",
  "key17": "2EwC6kFv5wpRSC7Xshq3NuxmR9BNzEUgCPrgBKGchgrjxJfeUGurs64vrMWnu9UQFBkryBb48UXQn3GMYVo82JjJ",
  "key18": "4BqKXqdKBBXUcdEcTQXEUvQyYoAvFnA3eQw8iNQQ9xSxwGu8TTRJ6UDgwEqj19oerQqd6aHgQvF9hzKcUM1b3Txf",
  "key19": "499RuGjMGbrQGhCDsxMbaUXRkSunhDDyAccUB1fEk5VHGefoHFb9uM8RkRZrLNYtkDerEFxVvszzuhfFPkBfeD9y",
  "key20": "5LrMbdkdoef3vYwfzuQET9uPk8RJPBrU4ibi9fXAL4cjKgxduppqpP2S9nkuYBiaLPtuaG6aWYjUpNxTrncieGWU",
  "key21": "4VmJNrVpLsudip8bqwx9i5YR1hiubS3rFE9ShSnTfNnAiKnjy8CJBuiPSrWkwE5CnjMUqGsFsACtBnPnLM2nTDaN",
  "key22": "Dip2nwvZqBG5ASAg5XYVy1JvaBQcvE9qcGQpEWGrFBrBLSbEVcKPQGtZG21peeGZvAZxncHV6jCbjm17brF9h3e",
  "key23": "4XY8oUaaLm722rF6e1y2MaJ3oSCG3bsNkBJTKbffAosNzkM5si8JdeCNQ5sxv2UrnyD6gbY8CccfJLYyhvaqCUwt",
  "key24": "4dpLX1ZrmqVq8QVhVN8M7RKAhtorsDjojxipiyVk1xo8LYPs4gvExrhXLonNVtZZRVVFJKzpe4cuxbrV7KymKHGw",
  "key25": "9r6r88LQkEEfYQKhW4zCbPGxmoiWpuDYDPT3JTGr9Jmhg9wkZsSaQ8iTwncBCF9oxwytcB2eGzRy1DLQ3pUCk2o",
  "key26": "4ZNf843Ajx9D1TRGJFWh1DP4hz2LMjRc8bvRuGuewSzm4VxtE81CYXua1sFPC7hdWjzumgau1txcHqLBggDio1Ff",
  "key27": "3T8S496hPR7j9imZPvLuEC67LdLbesqm2NiT3YW9A15TKPqYd1AXgTRrrxE8zvrjt1EQGGnzWvDjFXxbf63XpbC1",
  "key28": "U5uFYiT95jrdFTYLcXJo28QdNpyq1r9nPpxwUaDFzpbpnwuTeQfCSHjHHN8xuCYqqsSRN5SjapXXupmyB1Vqh7t",
  "key29": "4CJksiYwh1NDhBWwHnCHzJHnTrr1h3LXCkkSZHNrVmFE3vi4AjCQpWkqqhPXLtwKeohzDm54cWfpQWnfUnoLQbZH",
  "key30": "5aPjPBVKmrRAB4UEkiyUSjQ6Pa7pJAtpRMLq1hXLJ4KxpnLgGsk3Hmb4EARPX4TqSAm6vdtWgto3GunTVpunHnKs",
  "key31": "5jWE1Sz7ruoY4i5RhTiSLtzRySxUh5RKVqALPuSZ1QwEu1UpBrByFb4FsjkVCLMZ8P1e8MUWhFHFZLtuYAaepMCH",
  "key32": "zM1bM5U59e4dCTpTfQVPqk1dLkmjJtqgbH5B9CiRasLEroiZVGFSpfWivuhy8vWnLrHMSkQneskYjNfWGigTsBg",
  "key33": "5thipT49ou2PX1E6NPSz3XZDxr1wsiw4sFtSjZnoFiMoKkcF5dnhGuu13B4kYfVMJtrXbYf6vyr3GTTD4Jdweqqc",
  "key34": "3fAX1BSVfxAFJP8nPkZmkkpVRGkmXhsyGMj3YuQg9BEQS4TGZJ8uRvbRthcbHhaRd8YccpT9RRMLALCWkhesqhH",
  "key35": "3zwXbvSGpAX5t3dh77yDWQ1dfGQMPe4Y3HHMocuUq7s64HVZ2CVxUXsAAqi4o95KmZb4Abjm5KzingKNc1UycE4G",
  "key36": "5LTehvicXMgu1rgSosscGRzqh8ztEmPi69a1VPsm4M67FbkaounZfqpfTGLkh6tedE9W3jmE4KEVKgT4YpPJdYkV",
  "key37": "2ihiArA7N8rWXk5aTvETAqdaSPkcG7ng7Pf4bRBov6UfoaSxvVTymhSmPM7tcVSN4u9k3Xjy3gKkeZvrko2sMWDZ",
  "key38": "4NL8eFRexwdMYSYiWJ7jAMbPHFhoeGe1MxJB8ExotY3NfAq9u9x1Aa5rMHpkwknHiHDm48c75AbAVasJyASsiaUv",
  "key39": "4G4Btz77Pn8xws7PKHZjByRdairjJHAQu4KCJzuijbXWacAbeEgjSGUoT48ejZHovDhwYL4Ps7avxVXt2d1e87hZ",
  "key40": "45UEGPhodcwaCh6M3KorUCXEg8YpujWZ2YsrSX5f9b4BH77X9jxe6yxTtwyN13WM1gBqgbi1GGWjKgQYzjWUBWen",
  "key41": "5UqZdJTt3nPefx4q94frJuqHVAgBj53Aog7mdzBSunautoJqmd5zydRniVa2TWhxvxy7UuTKFu7yWLzLnzPZP4Yr",
  "key42": "uHc6regEBoQr1nwNm96jrVGuMikR1i4Pexvz4DBSUSV4qtcTZuoG9iW62ASDiKPGWrxZxwNvzp4C8vHhQNMmT6p",
  "key43": "2MXUi9pDnQE7oh6gNDhTmj6sMxRM2Uk19bZAaVyZ3Gc6Xvo9qx4XYy5A5cR2U5di5qMzWZSTQXTNQfddSGAUxHZC",
  "key44": "5RTZfC2AQW97emPjphgBsghKSQy1m9VsMgGoMNjgr4AD7XvGiKem1oyqPKGXPfwXuUdMCPBVJ935Fzcjkfi91G4K",
  "key45": "3LBCnch2foNRQp7QHyz38Ht7j95PzUWZZR82vjNjqfxUrjXdvEZUKidT9cf9DrfqDZrRiLT49EUjysYQzhMfkigw",
  "key46": "4moMj6fw571F6XRytjZCvTdQf79RQEUSSzA1UT6a5bBksfUZbvhdk8eeh6rjppqkokdpatDLMrmRGjDYm91sHmKv",
  "key47": "22i3cvttyuZePZkbK8WyqkdYuZZLs2C33bDofLjBw1z3kaBRi11L8hNhPs6H63VMuG8ZRJEVpkiUCbGESJtSq7bM",
  "key48": "if69CKufEpSmKoBkvd68nQLCCSqmNMBJqWqM13qoZzsZ3PLut8YgPTDSxoRgzbZSfyM117oDM8nMSM6RkAvchFy",
  "key49": "3tJbGA5WbCAf1ur84hpSAtzUE4cc41YsqPTwhXkDM7AhXj5zpdG7arzRMccdLiSRV9LUw6jt8McZDxHRebvrViXV"
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
