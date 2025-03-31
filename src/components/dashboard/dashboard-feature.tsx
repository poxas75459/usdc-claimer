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
    "3yiBTtij7vbynUGgJ2v7RY5tZsFWELYCo4a1gxKyU2xcobo5eZnJjTo5WPQS56zHBzHMSNg7BcRr14Zun8pAKnBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42uEhGFpvpoG2zjzM6omEEJrk5qFvoGiRusgd5wr1MwzMNtyp8YYWRLZ4QjkPusF5XGiA69YtZ2EkhXkhHtnfxst",
  "key1": "3WovCwm7JQ84BdFki8bhi63d5dQ1G3vJRviHojKAUkKncHb88JqpM46vPqZdWYazyqq2WVWgxozPX8HGsJr8Hm1j",
  "key2": "HsWhokUmnQHiAuKnM55468cAcJZjPHhUi5JHTVsyrSTouC9NSanYi6cs1Utv8XyGDheTyZBeWHs6BQBwj79CufR",
  "key3": "4Xb1krfSBtbNYaZNDcfsyiKDzZGwE42VNq2TseDfLHjgwcTPobwxd7Hup9AA8NMKvoNHpVQEU2WY733wL9W5rvLd",
  "key4": "2nLxDtXA1RBJbSj8hAxADpNdAwKRnqZzX6zDykKRHZdSUMDUFPbDXBS95SWbfn8rAkcMBaRehDVLyTsWgWVS6MAo",
  "key5": "2PJbZwEbGRvdqGVg4cTaHjgxyHgHu3pcYAG6nV6HbyKCankniUJRthKqJLKTaegoEc4E54QYhCwomQZwPSY7PfNV",
  "key6": "2Zx4kBne2rUJNVSADvPcVgRNy3D2URorBLdcB7hasmBd498FP6c9EPnXy5YV8reANxcNrGtH8wkUc3A6RTcV8eoh",
  "key7": "CnFQLRQBzsB7LWcb3uQ3xELhY4i8MwiZUxd6MoX3B8uzD2egWzYwXdUSKbo3gmo8Uq3ZRpBbxuaQ2yx1sFgqpUP",
  "key8": "HRP3aqZLB9ZLer53RCJ6qHxs8Ai15SMTTg4aSWfYezRNPd1p1xcHxiCAW7F8bJDjEwy7QHUTXWWHM84jM8Qbz3X",
  "key9": "4ymnUHEMPdPhHrcdJFfSFSy64jLEdzvjaiiXd56xpGFgbaTBmz4Gao2M8FqFRMwwEtQ3PiVsejeJTx6Tg3osfoyk",
  "key10": "dvXcxQUcUykPQE5eHM6dNS7Jz2pRnNiBySRDP7mxTDHDUfaStbJbjvh2QCAceUBf5ARDUbfQXiwn2Ay9gWdbpAP",
  "key11": "4XWBxiAPa7QQseB1HifxWSH61h2MCFPx9MreAVEyT8SLDMAP2W4e1SCA85bvirt1Ka1P7UHBfHQKUaaH3gd7iaJ1",
  "key12": "3DthpBv83HKkt99fohin6W9ugj4dgG5Pbp7hCvgZZ3brH4PQfrpKNU3o4KamET2hWy1NY4U7KhphbiN4NgNS3oWA",
  "key13": "3ZnzH328a4BhcSN7rvt6FvfdhyYgVUFr2Wf2nscybCBibQR538CvTLhjJfHzasWStxSUUoX2CXzvsJGibkoarWSh",
  "key14": "P9L2XYxsvQhbW8HCzqsCQ2pQA6KhMSrkwLcToeni5RieKbBWHu5E1FMcxbghLyJNxiCZkXk8LGgag7wtjt3fdUW",
  "key15": "3GpUH8QDKCTpASbEPLntvfyE3jBVY9F8aVTYhUvUN7cFaiP7DhUMca34TqnwUwCN8qroLaZjBVM2jg24bouqqXUk",
  "key16": "2bmMWbyAQnyyg8L5Gha4BBzhXzD7bM9DAC6imWCZw7JXt3e9NPpzp4To7vJQKu5dFSsrHWs98K9hRvzEc9qsV4Uf",
  "key17": "2JEcoEKrCu3wcwfrDPXG4R7Yb2B97hU5dZW5WxViy1D2BxEyssWnxNwkVWc1Mm7xESAXu2XEPR7kFkGRj95GBM4s",
  "key18": "3DLG1ZoKzi2DPqLQa3WBnuRmhBQVgNUfe4pe4Nt74CgWwmqfgsCt9TYAzitzXFk7mMdMPJE1JmcazDhGKp58FkBu",
  "key19": "3AZxFsBktmmS2knNHmQDZxN9RK7AWZVHzNxMTYw4jfTdK9TKvt2PqDoRGAbjmBABL64tLiFmZxgrPdFL5RzvNfA9",
  "key20": "2HCVeBoces6S4bcKmdSF2t7rp5c1xhvaDVevEnTdBAw2Key6WWayySzpXsaHgge8PyqArewrN2sHAj2EoY9ndikg",
  "key21": "4kcdseQ5xwQJn8J9TXFBerNxFt2qREk7tE5DipNntfMqwkWqocrjiv4762CG9gw1M5Gos4Nu8i5FW2RVBEDHJspH",
  "key22": "29f9bG7wT9U4LjBPGeAzoUiU4bmToAgeFoa5Lmpkuskj1eZ9bxSm76hyDrqExQ6ujV5pAodUt6QYwwx7kkxsGWYP",
  "key23": "492nmXeJ49xbV46C6msxdqeKLmHXrNhN9ofHXAiPB5bU3P75aBggJbeYABj41yxq5GAx5fPcdq1fdGzrf7fhYYMz",
  "key24": "4UcmaWwmncB4ibEofprfs4suZ3bzLMoPn2C9mya8ABNdUM3N3Ls1V8xwQP4z6xESD9bTNMiicYFmoRWyW4sdajun",
  "key25": "VmVJjz5j9eJKPyfN3CxKxvQUoBEALwfvwS1zMooa5iGrBr3unNj36PM6xS6UQaZMRkKwxnHHnQT9FAC6oBJQR2v",
  "key26": "4gjDMZQhPdYEWyMp9i4Cr5947Lzx2H3Hi3LwqhpqbvRLj3edvDppNqCHCMJgfxswURG815MgXzJonRb73bawgXsG",
  "key27": "3WnR5VF3mkBqtNaah2xyLhqReNgcn2hSRL7KFDVsRzf7rXGC5XZwbhst5a3M6kYwB3oZZKvqekBrX6vZFLNZdFvD",
  "key28": "23Zw1u4XobJT5c7APpGCraQfqrcGz4LMNyp2gGKTzrbYPBsdMBTkwVmm2NcznHzLa1nfEn622yRcYuaMhvVQTdxS",
  "key29": "61LJeA1NuQu5cdAzFuTEpJEfFa1EboNWWGBMQ1Y6euny2tu8FYtqagZAEJ51pfpk3Kz8CsrqkStnB345PZXHrhJC",
  "key30": "3GowETJ2LWPSQ1sa3oD6ahv6jT9zNapJwHQoowRcP9AvRuemiT3n8X6jDMBmoaECcASkv2SUjL2vbZT9Tr1Siqfv",
  "key31": "2UkkrSkfa7vNQAHGpYMdK8rkVzqkaJPogVYrfxSoZMFFY5ExMZe5WgQ5kRLs8DPyAoR9pJc2TAioq4UnWN7FMikc",
  "key32": "3CM1MpgMHzjtb2N2GGyt5aBWo756fqzHWpbKxhZByXgmdNKpTwLF1i3Qf2HoSPAvCSUGC7SUsUKcSfMeP6XXFB91",
  "key33": "5gBoFt9fNe3dVxurCnuXa3g7PKfkV81Mi1fFzPZwWVRZfzuDKgH1fgtgUGnTSD3axWxWsBVDjh1HDPtBSqrruADt",
  "key34": "2WCL3XDW8RrYpXroqgwNpo7WNo9sQ8d7JkzqrSpmGcYpivBYBbf15gqMUZwegV2nUtMUFVRVSBX6mvxE6J8qsmpQ",
  "key35": "3HjtCfMrjTq4fuJDeUobYRqZKKNaTenXgyQywmcWSiU3Us2JysnNUDhPddxH6wBtvfz22qZSc67X8S4fVhmSsdex",
  "key36": "3b3rVHA9qh7GTywkxNGqaJTgsFGj6WhBwtYjb2ncneLa7m8DdLhkpU1jvJmKkoQqVSwJaU8bok3RLxi9pTStpjoA",
  "key37": "3uAFTYBJ7wNLzJhaZx4KPLe7e2whX2qgPzHMsx75YcBpuFyonrvPN5cSiK2kYXC2MP5k1eMsTtgwjtDj8cht9KMq",
  "key38": "2o5JPRhwAgGPzBbZ7CMWz7zqQt7GSPsUZ9mbiuJirLycw175g9VACraR3gwNnX5qFSsRPi9TQB21RR55Ua3WD3Bz",
  "key39": "4YHqhhym8U2Koa1TrsMhLzuaqakebs2VbnQMWeHmNc55yeAM6SyhkqH7vX5u8y5TYvrL9tynsR9cmrBzr6gSz9SD",
  "key40": "AM79pygDddnK7XmNBPQ8oeKUdQnUgs53waBDhprjuBgmNLjaw9RwCfN3B87SWhx4Mx7N4YQjoCYE5EMPabiMSum",
  "key41": "5FVyh6nSvphbPyXnMep2dfxWfgVU6W6dm1dapKf4oEJobGpbDejkc3XQw2pb3uXkEY5SVMwWyJbbAKVeW5wEmnhd",
  "key42": "5SZffKnUz7MDNAwN2d9sfzGVY6H7YWNKQA6mZpY8izowdQHj5WvnihEjFbhGDq8MkaiAGc1yVPg7AZuB9mFK3uKX",
  "key43": "5x4okhgvHat9XZGZZMLMfuGcWivvxybLodhLR8AEjDocGzVLGMigSzRX35qcQ3VmRW7thNDpdwov6CPyyFbPW8Vu",
  "key44": "57YyW6AjnuYNdAgwtwFZTSp9djp6ayryh3mTsrzGB1WKpWvpsCcht4CQHseKsHUAFK2GnLwxuwgk146emep5NRpN",
  "key45": "BPafoFJpdazr8zUEaLLAtYenXUakR21hKs87TKyTUHKBCz3szLBC9kM7UCxHn6EsueoSG4DYfFA6neiSjbWs8xy",
  "key46": "3SKJCaitkGN5yq7MGZJeUTYvmXYRPwaeZpHsJmw9Nfefy4txWQ8TNkQWZ8tBjjwuEzkQfegbU87ATi4R6GB1Nh5h",
  "key47": "67NHycNmzYU7D9GBRyXyzu2DErvzepcv6qgrTgpWve4b3VvzoLb8Y15517Kv8AEHMJYKXY6mKuDwYwCHtxJDa7Nt",
  "key48": "38v5GxJAwQFGVjDxPFGt7FJWGwmLPeG1b4VFw5y6PXToww1enP5ea7G5pBG1UpojkZyVYuLQ53SQPdTDVKGgPx15"
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
