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
    "4UXndQ4tEqZpUkmMY76R6UiPNHvpsS1kV2bwXj37Q8DtAJZhLvQctbE8HjeyeQ1SwTokBZLa4aniD8hYcqmkwUhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zNq1kt4xcDW9LQwHv4jiiCqgeycM3VA9fm4TLpQGTyQFiPdcTCgv42eetLVQS84GqQYq7GeHExuLiotNdpPvwDp",
  "key1": "K48GpvkhhVAXzRu4tJGCUAc5drvEpxRaMqZ2ofxf9fjMLp43osZKdPJ83At9isFvjYQVMc3dJxd9VU7M7DvNeU3",
  "key2": "2dNcZ6M8Vtim2GtsT5QF8oDXNvCjmhyQSDPL5d2h7ts62h68o6NnvCZwZfdLtDNCv7sAUDYYsvj42iwVSz4kDrmz",
  "key3": "62LVWEjPJupRev9UoTjZiDnbm2sKXiyidQXXN1Xetq7SyFeyLR7SQyKBfYuetmEpNLPw78LDTbKHkUBdHL2G3RNt",
  "key4": "5LJSQN5RfpRPgGyMTiAEzwgn4GAE5Wv6mNbzt7BZ2HB1X4vyfe3Y5jCoqriougi1aCANN6KD8BapYM6a3vyQaUN7",
  "key5": "2zKoNozRW7fnUxG76ho5Y3yq2SFn6s9VbvkeQ9UJRnqHqEywUxXnkLqrAVUL1f7FMzmN2ys8Ri129WE9y29spmAL",
  "key6": "2LAo82wAhTf1mHkPP7C7mv1r2AtyzAwfF1Wzwf3f2U8VRJmBkCtoarATxeEe5K9BMnzKXfz7zm37tTxjYoEYXHDW",
  "key7": "5micXcAgAHYaMJZvX9U9YTxA9PA5XvfEt7D6GQPkCixB2SDzAyignx9KEwVczQdMZxTDx8MAtjkNvjh8MGUPA45u",
  "key8": "3CRXhYrXDfvubb1qab7Cb7ZqZ4cmAvKNsnZtgWDzQAz4FDVyMR4nvycfVaefm2f4cYzByuaZkBNZM2uJVTFMncwn",
  "key9": "51sRebtFJf17VDhL546P71yaUmSm7MbxnDrSdLTdhuroW9G6fM6Ve6hbUufTcQyifEaQQdqGC8gxK2yjd7yKVmYP",
  "key10": "3u1XiuajJNpk3KzVc3p1DRXwxwzfknRmVUyKbC62Pn7hhEKj23fo3YSEAnNicRiQtzdF8peu1X8Txawxbr2hy3Vy",
  "key11": "4oqL2io1jFp6uWQAdHiFpfyESMbrswpJJ3UiTSmfQJuxhM7d17JTGc5eyg1sMWE292UY1RjX3cGDVWCwq9PQkpCi",
  "key12": "2yC2gYpVfBkG19p6A59KCPXGC3AWYMLU9rxYSHDbPy7nsX7ViH6YzGQqsF12T9saCc7aLRR8iXKMhL8NQB9BpHPe",
  "key13": "3E3xeEbsanpZj8MN4yqGHgoQD49QyCbiRSQJoq7Wvna7aeT33Gbj7up2RxdVmw3WNkAT3KW6yV9HESPNWoizE4vM",
  "key14": "gaNiqV6ya3LHuAKRqGsoMJgjs12z9989UCPes1cmQrGwGB5fVmh8qyECdJEpvbsbnrSGsMo7yubWmmGwfUj9Aym",
  "key15": "gxR4yeb9M4jDh9Q6WmQbEBrAywKLdHRJqnjgQdd7byTSsJtMCCaXntFJXuQiMaswUMkmBhqVSQjFhjTAURGSD4Z",
  "key16": "5bG4y18ZRimPEoTNcFGa3MbTRQMRiMYNdgc4axUj5ArZT3iX8b4H97Ny6h5XHtYLj49yZjY949ymimBEf7ovNgxZ",
  "key17": "2ynG5PuYDr7XGFSt1uUX2kA17866q4QLpKzgDmRavWC2h2GedDjdmrF1nAdeoTVSCtFvon9wmpcnXFT6rfjiZxnL",
  "key18": "3Z3evUM6T5B6fKTg2LvqUqwwpDvvDBBQcTVsC4GmJyMS4fe6RxX2R1f2gR7x9izRgwYHAkRLVQx6qSZ5bXmRVdiP",
  "key19": "2NBhZVc58t4Wp5WQwUukYiYuGB86uTk1kygwyNSnjayvRBQER7d74iR4kay2ACwnfo35EQc5vNujEseYHiEj6JWz",
  "key20": "2WpgpWNScizSvRr6K4cXJna7SGjqkKKbtPRUz9p4MvzNUUAtHqcnCxkKzfqRHzxmDLxwJXvXMnCckxFA6QumrHTv",
  "key21": "5tbspJLZCtDE3bcP3ZnfDGPf7Veyd4Ka3tjnDcbPcngUUYsMjcgpJJY9zZ8VZ7RQodxzapTq1TTgox1VRzW3j7XP",
  "key22": "35G7HJ7AM5Lye2XQuVg37Lq1rq2G1f7SybiEmJD3odxCJMmXi9K89BEMueK6tW55Zh6zqQ5BHn3jvfRxZAC9ByHK",
  "key23": "4YNnoZFrBRP2rBmDt492raMg1eqt4tE7PfaLYbErNByAbcxDjnidiqMyMBycZYjcoj48jzYLvpdgQo1FeUfFSzeb",
  "key24": "2z4RyoR4mmgVfkfAAQihMhySqCv61FPLsgkQt6gFRXdWYw88CESH92c1rtV9zyndFWguquYSFA3FdizfZiGhjEj9",
  "key25": "h8urN2ZuRS4VizjGuTK1ko9AWcK8qT8A2nxXYmnyWFVTdrccQ8UpwqAggfy1jSUEYqNzea1jMAn2bgKCgDFm1Ko",
  "key26": "h5RGeYRqBS4CaMuVXWWHsQ8DmDrQspgtLDNzwyTuwiEdwYqDBrJFfYH68renNXDum1ycQrpZ2mjzUjyfe8rkpRW",
  "key27": "29BykAXWkDkwitzdc6pWRBfa5CRrw6gGLEP3MFH2KDYF11muYHCmjTpfqGwvsAx44fuc9A1J2UhCAeZkzEnFiYoj",
  "key28": "eJ5KZ2q3o5UesJmeH8sumH9bh4n7n8GA4hKknzoVFgnF2DFH9MNKbJSbNkdk2zE3xKtA7civjW6ftNYEy8nqcDx",
  "key29": "5T55EXJVtTuymZ1Mr9GZ1BJzGkGiXRB3kfGB5iuKiNN4m6DJtBpd5Jx8T8oMrPj71V2RJhrcyF1YhzWsCoo24Y2s",
  "key30": "64uoXA9zwoRFHQyat12xLG6EBhS62dw4Nhy5DYWywfbPCB8JnrV5s9Nt84oggJsVBmVX8RiMTW4iNcbYv6BgvztD",
  "key31": "2u85UUbotVJNPA7kBjzv4vzj28bWi6acR6es1bg5mtRPFWG4VV3kEDyZdTq1c9QBiiD2ST94Gn6iiCfAVXB6JMRa",
  "key32": "t1XWYHLFZ3LdYqYj5ee6NCm3pK4oqr3x4s4uUVTbQZP3RYFwBXqPQykpVu4a8N95yK7FW6FufyC1p4c2ZMn3qZN",
  "key33": "3eRACB875256rnYQQnqVCmkjCjdhqxbEvJAXg9q9UoWMiLQr81tt9HB15cEK3JbJTtsNNd69BC6EnAUwHbKeDUQC",
  "key34": "49Dfd6mimyiWewtJ4k5Qr1Wu2WWPhq6bvSz4exriMe3uk99YdkAm4jmNi3Lz23WwPboMo6ADBcsKCjLPK2MKgA5K",
  "key35": "3Bui8Hpz7xHrJ17BK1QytXUXjzKjBRxRKcz3on93bDUZmENAVXgv2Y8tLczEidMRasEGXM58KSvcM6XFoC9vQb2E",
  "key36": "62byLcYhWMs987wRwsTWk9XQdQfxt2RfQcQbUgSn3J7o26nW9kmTB7edVGaPFV4Rnui4Z1t5PaztL6rfS3BXtPez",
  "key37": "ATe5KPvVNGMKvRZ8BS5EQpdXSdr2SWEQhnCewcLAEk87H9T1DZSkDNnvscNRfCW6QmzBQxGncKSWc3prmac7q9r",
  "key38": "qp4aieGgaeamDnimCTb6wevEwXrLJPVPzZQ17kJcrhdUDCXAxiXdJdqyJzNe1EB8vNVS874Yb7ehSaHdbjn7tjc",
  "key39": "3RjAC1PEEnVVWLVoHAzJCzAFK37wSEDM8EvASP3uDxavWcvgwZNkiFDksWDjRhYtGkYwejh9ks6Rh5TTPaU2CD8N",
  "key40": "4fu4pXMkjLrZkopBH3s6dZwdniBVWJGPh9YjVj6qXVGsikXkEDpCZxWMLGmtooYwwAARdiwHULUjoL5ZE3FYJ4oA",
  "key41": "EvhBSA9i9Ctep78a4xk5kQitjhncKkZv8jP4aX52otop72ZNGruvNfbDkKPnw9EBf8JMVWbLZXpYMiPAceLbeHR",
  "key42": "4oWbcWCQqoLGwKdHJ7ug4ooKrVsXAgAcCKUYX1xiSj4t4s2vCQSS6gHUoNypMBndM7NWy8noiiJi2rzdZQHHZWJW",
  "key43": "4nuRLs8T9jD4Gqxhzjrv9LC6kc2Nzx28xtjvVJm8FRzuV8YiMsZjyERtRvBVbaSMwZ8TdZzMc5GUeXBbvJMYE3Ms",
  "key44": "2wPbYBqbGBvQcUu3JevWcqLYTt69SnLtRGiWsweKxR6kXq9HYYgQY9sy6VK6b2WAc6H7ckrSb9KHDkqqdZ1oK1FL",
  "key45": "4xnAsPmfArvXBTKDroHn9hXnpBuG2dgmP8G4rWsHhTgK8mxmR6gxoPdrBoewozAjUtXT4RRGJUEGeEncHesrFo4Z",
  "key46": "5CsiKQ4fMeWUXwUUuAcQsJM3qf1FogpkZdvEm9QVVkQMRxzic49TNieG88p4mR6hep47EXWswtt9XoMSv58mKMxe",
  "key47": "4KkKLVdHC4nDvHkBemqupzfC7PvXvcf9xmZhE9tF9w8Fi9CUo1w1uRzkUPovXZMrtGn7FYEUmCxgrqCCSJvMnvXp"
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
