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
    "3Y8VK2QqFDRqbUUM3RiKCSzUAHTkteu9zAcWcdK84pWambzgjm3NMGWN2ZXd9dz5FLyPAqEfHKcNYZhNteB3ickK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gfZGeqpixFCjDBkjfFpEW9NWQknfU94SUKUkY7cXr6mqD2T7sn8tzBXV1TrvGd1PCJnQjRLc454d96FmCLJz5mc",
  "key1": "2wLRLkuWGTJDqityVEo4wpyQuoj9qdGJ7KzwGtHt3bhLEW2yhwiWpGAFsvT9xQxR1xq8tcRKtpAAwywGxM5ttPt3",
  "key2": "4yXbBBDf5afbu5tQnMSEtwyov31ZhqZHafRWZnvRYXEh19RkbsFCJA9nc9putdeKz4WGV6a8NiBV8brfyqQhWsQn",
  "key3": "3bGjJZa13Ja9p6DAFNG5XQFrYPpTBaMSXcTXY6DPXNaQfvCReYLZ4QrteonyfWvrbjH9nrCcuKPXRD3Ppjfmp15H",
  "key4": "233tqJUNfJfpEMzuwyMDgbBJ9txSrkSx3sFH1RLF4izKYPk6qv7uVAYPp5WYsLW1vZdwb8HrQceWJRxqwA8nYzLp",
  "key5": "5LS61kcnzW5MEcGH2tQhRRsAs3yCAbk3ABEu8RwmhmivnfXBnTQpxzrig4MD1cmqFQVmH8bqmdPKoUnLHZH4QvdL",
  "key6": "4s98Un5qhBTdjWj4WsiU5xNBGbEw1L1YXPd8XcBBqupjw7PK2wvD9BNQjX1esiDoEmaY62Fksfzao5nGQDPvfuWJ",
  "key7": "4ntf9e6vXAfVSh8yeNzMuW5B7vwA5UW2eT67FqHjLugpCRhZgukSM5A9htXeZBZ81MTjQJSJNjsSVyD5yr75ohUv",
  "key8": "27XuSmo3HH9gx2yvPfRmQuiL4H1fyMHYCnL24TQKR93UHk9KSnbLWFRLajFEj5mJiQ84ab9X8LpWX7yk5ZzYDVeZ",
  "key9": "2NTwEmQosuhK1UicXQvzeNfiwdv2bZjRwTxg1QSmMSg7JJxKdjXqUTsdtUSdMsDJjDcLmpG7hErQBCd3XUcm9JpD",
  "key10": "5i7pjjvjwkk3G6VMVXbrm3TMb6RQBgg9D31py8MaixWYn79MTP7RvFaBC3vTw1m4WAx4mvRkJdPsJqHWotEfGuhS",
  "key11": "VqoeSufhVaaWwsZaVMamfpacRpzd6yTvFAw6wePBv9CVZD63zD5eBw9CRUqm4NutTrU8tcuudfZcHSvYSHs1m9d",
  "key12": "5uYRmHmaCNd3FDWkQ6y9PZbZF633AD8hArqqkVwz2BYgnYhbd6LKGr6c363Ynto6JXSyREJfrgAN2RGLSUnhjCbz",
  "key13": "5FPSTRsDZUY9yBLMuvWmL3N4eBptobhmMZ3wXc7YnKhY7zkKdw9eCcwccxbYt3zWp5rLjShihkznHiekGGTLCqmE",
  "key14": "29VbCPPFJoK6vdCpeSxz8gFjKFgnGyH8kGuNbegKQ6cU9rDhyQr6Dk7wjboEkqGJXzXzbRvUAmRW8NpjqGZk9yjK",
  "key15": "38SN4qgQ5iNr7tXsRTeJiH9JfYjBEFy2peFWFMRkdXL57yby2XoT4bEoakyywbHZgJC7jpFuZD4EZFkT3ZHtSerp",
  "key16": "4Gr1BhhKC5wGV7JujN6CnbzW7sR6n1nzNgVKzKnUmfyVzyXmqcjziszqsoNHqNSNYEfA85e3ZwiWS5fkHzSZ5PWF",
  "key17": "4p6as6RYntsZiUTuov9kWMmtkowSXSyhu8kC9ZJPP2PtNVNSk8bDzbffiEjjGxX3uy1WtkZiu2qHBrjMqqYs2kMY",
  "key18": "RBXHhimBwzTKeh6E3t4uP8vvfYDUkHKC481yFBzFKivRGHkSzxqAfuKj1EVjo8rBUHQQvPLUjaynUMmThi5X1XE",
  "key19": "5pN4ZwWAdRumPEw3fnnfbtLGYnLu7KfGKRu7zptf1LypTH6h1EsiiktwcTjshonbZgjwc6wQrE2b4hjqsT24SsLe",
  "key20": "3iZcNaeb9QeT7juxFZSuEU3rJ1VDzwdYVdi3JSsmCwRhugc9agNW7usyUGXqrbnw282khnUZPwSA8dhk1m2DpeDn",
  "key21": "3KEKj24xJdxSR6C5RyL2uS58gHmf3H7sP9zgrGxJU7NQazHnRdzYUbTCqsmvXdrMoByuZvLyE79MY7XE94sE2oAy",
  "key22": "4GcxrS8bxCNq7zKWz8sT5ngtGsohcGHvEButR1Zt52wFVYrmYPcTpFFQbH1nyxTknci2BmU1wodrWQ63NuuDq1RF",
  "key23": "2TXQ4xq46KbaJaQegmh1VgKh1kKgL2x3RmYZXMwrJn5U67Goae9raHbJkE8kEVP3Hjj4d4u2bvnJqHDTnS1cLkex",
  "key24": "2KVwuupC575J8ony8dwf5L5KM3MmKfVyLRnEC4t8kcpLhB91bXd7ZktJUEWXs6Pv1h2pNvcusvJdXPSMFmwJtgAu",
  "key25": "xTQwUwVKMsQtG7jFVGkjJDqPjPqcckrfDGewnDshGfUuw9QXwvFfwV4Z7mex2e1AvATewzqd4McMa9KpuWeUpH9",
  "key26": "WRTJDU8UBUYdpLCHFJwvcDkGR9AcpTy2eq76zad8xC4FVwpxanB9XkqGouPCi31wTGSbDQBtHhw2PVaEtWMgN8m",
  "key27": "GHiZunzCfppSxw7mMCbnCq3GZXs5F2HznzSKe84zgHkthSXvpLBGSyKuNNXks6Xwf6Fw51nzPLuKscSCmimxGM5",
  "key28": "5ZuE1K4okZLuSBEhqq9ndURr38dPky2VMwDRcjjyLL7BeBSS1Zmi8CUGzuZreznWaZsUHbtBFfSm3yFg9KdYresH",
  "key29": "4RR5GucC69X8xPLY8esxzMtxXPAq9p5pCLTD6nthxpdoy463QnwzZ2qASDGErj2tk3rpDJwQGBp5RKSEt9XaDKWG",
  "key30": "XwkxbxamXoKehiescBxB1NXeAUKcssz9Q7Sne9YHq7WXJs3LsXeDgjhkxYhNygwhgLYYsenvVsUu6McZhVoMaKg",
  "key31": "42cQnQcS6T13p7N1WBePrE6GwDzJ4Pi9K4Cq1eWZGikpC4Fbq5gras1FjnZ9pxr4KjY6WEYKG3EEo9ng62JCqSxw",
  "key32": "2rhWr7vKhhmNaaQYDzR1BcLnsVH3Yxvh8LG4jXRhKVdu1ubuY2MoLvucDmzenf5W8E4ee8xn2AvAEGhXS4XJjkpJ",
  "key33": "5y9SSFKfYydTN2rcBcEJWX3XTMBcgBWb4fvScgTyYJaa9VAUDdimbKr3oKxdNTwR6G9a2cpWdoctQJQ5E2YegpAw",
  "key34": "5Nf8oHAx6STS7tMPa9md47fgygeTpdprLTihnLHovaanNrfdhJCVMmVE8jteY7Xa1hHNcRa8XvxGwgvvLQ2zB1M9",
  "key35": "5fdMna24JGd5G9gdDrkZP22ANW83gRgNZaySswXoaeD2Uhiv1dE1hYk7HXv6qvMLacz6YW63p5kpk2c9iW7T9Fmm",
  "key36": "4tLBwe2m8FSaNKb5uWNVqZM7auNUrMVfxDkxjMskhJrMHhHRL5bLxkQhqyJchhwKvjeGL1n7kKrnrSuViaoqC18E",
  "key37": "4L5vDkjkqu8RAi6z2KVHzL4rx8hRqGeNbYKn1NvErZRagG9cBfiQwY7C2piJDgNteJx9zWD8xY6bM3TAFy2yziPS",
  "key38": "5YFXHWMeeX1MddxXWNBn98rheSxMNBFdSsXVqvTUCt4UFFRkiUApPNjDjaYgQXEod32okdpj1gWRcDf1nyzCk6zv",
  "key39": "5FgP5tTNk9PKKGQJjV1NZnLXLHzk8TLH8iLEwVQW219anXg3skWWmwqfNW92BqpHchiqppJ2Zg4KbJSowAKMCGHU",
  "key40": "64F6DD6yY7ZLVXw6kn9Bp2uamgT9HWibQu6nNoD2WgVb3ycJMLodfpidHLkfY6CGQT9Vfxvsx2FkSgKGhbNcqdUk",
  "key41": "4YcqciaRyD3ZocXJCoEa33SuhC3KkQgkz7VPZmtMV5H2EeXFhJgedm2BphnE4NzJyPJhkVYyZCSTjvxnwopSGEWy",
  "key42": "668bZbAFqnh2NwhQ1EGrLA4NBbbbUgH4oFhKtxumB5TQwXHUdQPkfS8T7Wgqrg8ZybrYVZr1XjisCYV9nHQzRDrv",
  "key43": "5VD492F71Qsb34NTe9hdVmbk8wPa8sMUUNjWCnfWUsbmUu5kRdVoP4p2bqYP1ZJdXu4VWxEMumYFoSthuiPacMUB",
  "key44": "2bYU81V8k8oFLW8aKG3BRYnE8ukn3XZn94Sc1GTQ7JhssKtC7hvqM9b6ykpFKruxcfmEGWheHzmaPSqmAXeUgUSr",
  "key45": "638yoNvMJio3T4DgkqefMxaMCAnDyNQ4MgDCgpdm5LaUfw6H7ZV5T42mg1TkWGpm593HWEyXRpa7A892ZxR6MXKA",
  "key46": "nmkZn3p3WkcWv1UqRua8LgnhBadApnNEyk3P2bXKoeskVVrNWnR1m8z8YEf5JErME2WWxS1zQt5u4TcU5tJcKDD",
  "key47": "2sczgR79JKhpjQvMez58AS2r8CaJP5VXYE179oy9U6mdsqfuU5k8ayDBreXKBi6zCMxzVjZ4KwMnyKtmsaaxscAo",
  "key48": "3pgAqveGX6HSG7sGijGLteP3CRMaXN12zELoY7PgzSgskSrx5VGPJXkf9u7s7bM47MrzTHUwem2KdeK1aryrGV3P",
  "key49": "3zXJbjnQPTzQ5L6Nnne5Ahdbd9yL9JgEpq4R9wCKT48CR1cLpFq67XsV65g5MKp1NVbgrJ6Wiv6tRw9LbuQd56cP"
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
