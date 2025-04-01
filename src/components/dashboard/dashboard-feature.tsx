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
    "4axpv99iZvDbrHBhq7HXPLeSPBHFiRyHg3Un7Whmigf35Qoe4jiAkYPVK2zcNt1hzkFdXyeZtXJkUPKaoFyQRxtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nB4EwyK7MoKiQ4Lk7pGAMX7EWCRkASfj2aKQyJohHN7KrjJd7kMYx8bCJuTxaWkPigxivLWeDQocT3GznfAABvP",
  "key1": "2JVo9MziCbiBna8eUz3G4K2Kwa1V8REFZHSJPifgdGd3ucbiSHwMDEAYiPikjGzR3MNFu9XxdDnEy4B8ddAZp2gc",
  "key2": "5ZpKnzC3CVUWY4X9mbS46RDT1jjihh74emWzarF2sRPyp81ymZ8DXDTvHLmvpZ9kddB1fJxrNrZCv7mthrWfDw7N",
  "key3": "26q72b72QmPwRog5qV6sdXvxwfemue1WxaQpkgNqWnkg1xrdts6594sMep68i54Ccviu6jjJSS4pRbfqxjQoH1bs",
  "key4": "guHFpq6HRpgFBFUt8fV9iLeER6jh5Lfn1bzgGHgKKBoo5iUHk5MA3AjACQtmeYvJ5cKNEmwA2ijgncar4SpkcjW",
  "key5": "1RDJdrWHkXdUNsBZt7rVrFqNqbKiJtuWBmRiDzvAfN5MH3cqtMCbMhfCG6iPLiQ8pWuBziAGCqcyt8Xnz1wUCaG",
  "key6": "8cU3je5pQwPgcM4Tjcq9dfLYXuEQuBpVfRveuU65kAYGfzFn2LG6mc1iD3EXsSmVYUzGnmQvdsTgVvcZsDzvM2y",
  "key7": "42qZfBMTMEReqLFwj1NGueGxYUrzDJ5ahJLZk4mZje6i7Q8VSAf9VbJEojuHfQcYNinQQy4bwbsFtv6VCFKS64DV",
  "key8": "3amW65y1zXj3h9t8MxLzRqkPhtsrkHapEdEBUfFSt1LyFAT13GaEtJUrqNKSiUbhrL1r2p4QXNst2yicLy4osfwW",
  "key9": "2fp7Mx7cDrLWGgn9DsLoZVJfMQ9GfCcfqMCBazTypfbx4C4mi8hikqb7syUN1FWLkd4vhyymSdTVm4z7pTanwHZ1",
  "key10": "379ypjADkzRDjQXTgG3unpP1dYPnB3GBPHtB1u61WCwPb7pEstSHQHcrs9QQ6KAbYTirJKnH1ujqYzdGiWBJT7aN",
  "key11": "37mwiaqEsuzbdZ8rmWj1gYAVo1iKz1UbnXmziWNmfjmZzfYps5YKD2NtRZQ7ZKxJHdQnbHrdUQf1W7T5gxNKuGqM",
  "key12": "5eGdfotUozBSrLyX9RsaVwoyw8DUE1acwQ9777gg72em8uYkLpAxfCcZyUfyxwov6Cc6JAWMaMoL5fTEQ6SRjB1i",
  "key13": "5JvS5PGUoMug4kfZGDTGTNGc2tgZB7EPiBdHHpPMd22nbXUmx6o35uw4SfL5oJhWX6Pyy8zMupauJq84fvvEAdty",
  "key14": "2n96zCxPFUHaiodaVUbKNvzXHebkDGd1tdb5ZfC7cVMt7Kz3QAg2PMMD48FRyTzDDuSfKVVeg9B5qEv6TT3Wh8G2",
  "key15": "jx1HUyXUjr6ewnEkdvqrFJ3JX9JgBNujak7zuDio7oDfCNRaKe9769LNTeaftpCyLBKjvyoCJLVLjpMPWUkhqAs",
  "key16": "5gMnEWQEuvEasgfNPH5nivV2Jc8K165Y2GocRGDmLoousmcqc3bLkU9Grkcsu42SC13iug3x4TqA2XCA3YEKypbX",
  "key17": "yYi1ZeWkMphH61nZ4kF9K6SqqE21fiFatEHStNPv9AdQrKbJPA9LNuJyc1AFad8JYTTNhtybRhScyThbEX4oTBP",
  "key18": "4obS6iUy7h3sVqydXA7wVFBF9iawdYpWFS8cjRU6nvTD76yn2KLh7ALmVYtxBudcHiTctCESHtHiijDRtx2Ps75K",
  "key19": "4bccJHGKJi9jny8UPRDs8gZfDzCNdQuYjqxx6dgQFNhpmNripkUxHySrR8cozPVWk7y3Q5sJaMKx3LrSgxqnxWnA",
  "key20": "3ucSybAQfCdhwR5zrBGFdDWHSQY9KTP6QjMExQBMpYRLVky6aer5kZBXtc7CfEin1UqkvQoP61anLYYjzZfDbdmh",
  "key21": "528vQUBCzHJPQqyVzHpAf34PWngY2xRbkkNmRSi2amSrN2SYxqPcScaQLnktqz4AB6K2gqdjnWRdKnKoQ6Mho9kQ",
  "key22": "4GDXoLpYbZkYU8DhD2HVH4Cvv2PeeJaCcDF7Nf6UF27UkjWHZY5tEgMCtsnGkfEWSBy2EgJYjNP1Srtoa8rC1jSf",
  "key23": "2J7V1WwA13WKXP1dDxKqsucxWZwGut7wvz4GA5YZa9ygCNSJZG6g4nyALdkK6Y9bmQgRaGqhNrUfpnYSDiNzSCE2",
  "key24": "2fvi2HHMdyjKV19WrKvq1KbYEtDUbwkhjk8ssabKbyaAqozCCLznKx3vck8fbW4D1n3SeFKr6uvtbViZwzZcmEtw",
  "key25": "2EkW1E6xSezUvA7aJbix4yK6n8p5tYFUnTSCA35ecPRAbXyuPadreE7LW2Ek62tkxzXC3Xmb3hSe6FuTmTyTctih",
  "key26": "4wzQTAKrCcDfDUVgNpYkMdAYLSwLUs9XayZrQKZN4ECgjLYYSaansAVoKPDYzXpQg4e4N2wTEB92J1YdcD2N2nGZ",
  "key27": "3gT6mKF6214BDLxQrF4JVBJyrNrhnUJhRXP1xHQhj5xmmMBiQaEDFcFFFT8QTKAXbbbgTZhTPjjRFGzB4S4SLtrn",
  "key28": "3Rotf43p7SEJha7ythDJFpgqQYSjU5k56gByGPwn1LLqMKEPzF7JVzE2eDtjxFMGpKAaUYyv99Wi4NcT6z2c5FxZ",
  "key29": "57kQYw4JmwLsroqcva1848yghEwXhpudPRJaUCWr9YgUkq4Pp67HB9mcWAXhuPwffDZRjMFzXWkr6dJYbr33hJJw",
  "key30": "wh9WsrR13TA92MiXWsMxyN9uHDKp7nzW7LMPakyYGr37PgzdE3sfq6gCa2QnBwtUmifYFtGuTpH6aZghyrGbvp5",
  "key31": "5eD1VAW6CXZY6sqdFva4x3zmQ42UeD8HGQmdtZr5k6XDymtH9twUaNcXYjqhpeBnUVDh3fZsSPCtsgNwTM2nhJaa",
  "key32": "597CgqYcBnfLxVG6yCp4PFghKNp1SgsaPWPJJDFo8JVxmfa51D8egaTPTv6XvnrQ2wTqmJ7q3Md2AfEqVt435419",
  "key33": "5zNUKy9FZKEiJ1aNoMAMB2YqhJzRFgjhSkpg4cJPtEBUPLFwL9LzATfMDRmUFRytRUqAL62Bc7Zp9cav92F2AGZX",
  "key34": "4RqvdgTesTHm4eRh3qZ8Ytfwak1hyVg939GoCLC3ANjAktL78eqTbuAkA2EJndZJTGonviiUto9vSJWUdnKFfKS2",
  "key35": "3zwnJanWt5PJWKvmXrnoX2aDxmTEVAjduR6xS9GyhiyUFge4aJ42Yz16ZtNHLCNL5ZRzotAur32ceV1d5MKqCevB",
  "key36": "4zRa9kCvc41um8f9dgEso7PpWqy9qxoyn6sam4jRsoSGnXBiKGmsj6zGUTQJpMtfgF68AknH2ZPhtnCaPi2ppDKc",
  "key37": "43jn8KwCtiECx3ipcUBSBChi5pbd3VhJxiQexnW4Q8py8K1GZNeDRYksgNNMYMiKmfiLzN2guk6ReXRMnjDpUQ8r",
  "key38": "5gmn6sZCtq7HFoAnTKiB6ncJTxevYKf4exyEFLWEbAvH99uaM4GhuUmzLSTv2KRywud5B8p9n4Y1YNWxvG76gLdR",
  "key39": "5j7iY71bJipWFHRb1sxwJTvegPkMfAGnGA1fSRrP8wHxWyEVvAC4hAZynnicyLTq6sovYWbivgJs2ior2dkNHSeC",
  "key40": "3oqWW5xJpeEF4byNCPkY3nRR7mZgCBKb1mg2Xuw1Nu88XUXhAFrDKSeQvcroyoKv529Y42JqLVARfiUaCzHjTvAy",
  "key41": "4qyWBHeiW3FBHxxG9PH1EsSNkcm4t14AmSoxXPYf5B7oajMw9kFvbkysD4zVQi2ZL5msPr9Js276z6twxMDpXMQS",
  "key42": "3SeYhFGHnSYodQAw8mSR5ZYsrHMwLWsQuSe1CfiK1pjB283RvakPJjJDsLUn9vMyJe3S7kzGtYFJLmayhZfpHW3i",
  "key43": "KGumUHS4epogh8mmBCPNpZtjn2LUmjuT9iFz4okmBVVThvPNwTcBxG7bkmaixhGCGpB9xt3iQQqpLnb1Hf62Qfy",
  "key44": "2Erh3zpLyq171qh8FBJejV4SYpPxcpJvhdpURx253XpKkqky2VWfdtggcLNn9DZ5ZgKSkEo1W2oZGnWLVv4vH43A",
  "key45": "2x54Csi9YsLKYSrs2GmxWzLskJLXxP5yz6sEiPd8SraXDxRY6tpdXkaRVaDbeD1q1ehbqR8DA58rzPVTgcMNBoKp"
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
