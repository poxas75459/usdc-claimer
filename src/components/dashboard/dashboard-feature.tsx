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
    "2C4BuRCSCjkLcTvLpSy34sRFWUzjD2BBGwkCBeCMn89bvSY6Yy7yLTHDcejqYViCAumQMMHWTR5X2GM7j5j63doE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56stETCjbKavQk2YBocHdekXguC2k9w2dLjAnGNRR6pYehoqFu1J8iPzU1nqphMYwjgN19XgbjAftSSrbLXVT4XK",
  "key1": "3k78P1CcYe2RCfpXaYe5nhT4j1TwqFpftzGo4iXhtVF8BRTfLCYoobC1VQPQHEBnTeE4WwSzwGtxN99T5wjGN9VR",
  "key2": "3b4i6EzRoXJz9EqSvg51MeLnp83jHzSC6d4HehLveFxi9NyJ4N3DTws218nhVP7p9Go4JXomW2EN56vZpX5sis7H",
  "key3": "32iZ7LJAoVewEqcgEyTJ8FkQDZqMV2gUDVbktzTqmD1Pk6gYyP9S2CZfRmLn53E33hkUeKCU37FdijUoHkZyremB",
  "key4": "5XFnfhZUjQSqET4FzNgsexLh39VVACbeqpnbDkHxMqu7FqphQerk8KBcCNDwPCCSEqdYnWSof3gxrfFFpWKmFYa3",
  "key5": "sk1Zw7FxxWmma2ZoxGJ3zTiWTQsfYHbRh6nBbFcUxTsdkdZyJywa9LJ1qivSB95qix75A9PYtLVo11qiPioC37i",
  "key6": "SBoL6m22wW9SrfSSp5GHkDpY8kW6qXFvKAfjmTp4c7us89WWQf4L3gDXAa8yNfBiRWWBzM7VDXyJm6vnc2nXDeP",
  "key7": "5EfzbBNzKCwu792yQ9pc7mpLTjp54N42u7xnoak9HiUQUqBjXwt8bjy6QV794BjqshFAJ5goRe3k9gQD7sEJ99Zn",
  "key8": "2FGZmtveN2hLsuYnUvvKfKa41bwUX3wvgsMGtTtBjgUL553zZVXYXgxLUPAm43NwscHQDABEh7Y8DZENxmgErTKP",
  "key9": "qznRVkR21yF6kjCVtcsmeR7aQ1rtvLC5yKf1TChzjXbv7Tm3wBwGF6ZoDfA3jWX8BtVVgYShwLLrthsNkqJWgVt",
  "key10": "Y3urw4nQ4Sz6cM71ED9ZXJ1AEC1pj87rWGvqQEH9jqcAjH4mxsFWsG8SJyTgaDZ8ex9okjJAbzbFN6HxVyGxsE5",
  "key11": "3EFxT8kQdwMphmHWFWZKYfzDb9fiMJJjLfk6x86gZ5t77JHZbxjxHBhqt7M85e2iyxjwH6Dvr7PB1VS3i1FinoyN",
  "key12": "5p5aREXkDYyFxngWERTbbgVxHh1otDSnzeYryGmPsSuddXRYAeSbpqHyt6A1Cn4q7pDt3LMhhz8nvEg9juwk9oV6",
  "key13": "4JnLm2ZEBQzn7Ru78hRWNGeJigmXU9nWcwXwgXAdTs66RDBqvdcjaDSQcYPGe7yrnN5HCZMhvWrCzoxtF8xBDTXt",
  "key14": "47FzNBu8Q5SWffC5pJkfe489fFrdG1Ha5htYoQ3u92P1eYDpXAwnRA7ofKJdn7ZKy4VcJqe83iWT5ZEbaQzxCZAY",
  "key15": "547kR4j844yyfUaYXoFWYPsLFhvoJyrHJ9osSraQhjKP857BcE6MAB2MJTk3QL1ab2xRW5XfYKA46sVCFs9NJMi4",
  "key16": "EePqe18oGqo4y5oN7F2t42EHfFmHsTJ8iMERwQgQjAvfWVTw9mJqcdqSF1V42NtsPWLFsXu5dL3QfyvpBFn2Rtf",
  "key17": "2nhqNvSJHUziAUB8RsMwHTNd9TETHJMTwdkKQdAgbjvWuEyW12BMY7NRosKpBrL3xcX2Vw3FBLjEqiQ8fUZjeZYf",
  "key18": "3qbMcXan2qArbPYHsDMsyNUjnHEAQxcrhVtM5NAMATMDrMcaNpxjZnDrvGbpPurqkUezmcrU2PyCjDF7t1Sv5vZM",
  "key19": "uBqUwYMBDwxYThGwhbKFVC2Ftfgc2FD5nuYGYf6QB4NcAMQzCUZmmtZxmDJgC5JYEyR5dAs64U9XDY6Nc8vGCds",
  "key20": "2cF4mrdr6CiBqCq3D9qVqZYu1ACYPHJnhBUqrx8MubZGxCtszvLf42xUKyswrq99wkeD7niPAH2ZeyhLc28zc3Yr",
  "key21": "2QsLRXt4GsXhAPPyk2MShB4R27xVwWTEHuAET6p4zMTfCbac6TvafqvXUZTH9C1bk4u95zzJxGT9ynnqoHFepHiY",
  "key22": "32EtBBp2nixXG6qgCsLtqQnCGxotzKhDNS8gr1kKfxps8xJcCsguG4Y1Vs1wqvWHB2EFvQXNgHhNQWYzUwJhDBxH",
  "key23": "45qmoJ58jGVoRGiyGih3KW3CkN5Q2ffKti8LbWttNDMCX6P3PSnkKTqcEfsY1LsENdGYS9aj2kFNQ3dgnvYg8jZM",
  "key24": "3bFwhVXMgo2mFGwxTmjfgtNaCt96FkTLmZFo3s2f3YwNjEkwdiT68iy9idtfciVzEkTiKHTyfNVybh9tUvpUwvU6",
  "key25": "57ma2grqQhmNXoLdfJ5LstN2sRM48keHnTunMAfizz4hDvYnUVpMUuiojguGAwYrydkSzVEyDFdu7gAN1YtsBkhn",
  "key26": "yc5D8wAP52hooEEvGbeZEvSc1rqTWWsUgbncUXTeWqetPNASMsWtn5KyebBDxhJZtP1rYdf1hTwu3WXWuUkod7J",
  "key27": "66ieJQbdrjXqZqpmFETniDgUaEuXv1mC7auwKjGC8bLo9wCL1xjsEvQUSHPhqarxBrSSKjKrfPnX3jENRvoj84cy",
  "key28": "4yH7g2UeGd6GiLfpqu2PqhzP5UE6Tpkjw4uFG626nC5rqGwoWRyyQ9CCAQksb7uPpvQgxwJpeuZdQQXXVhS6eQv5",
  "key29": "2nhf2ioY7oFibW5Zv5R9N1XmtDb1BiydB2qwgTCpcSyk9KWtdMy8C2nf8LKxBEZVABy5eK1GwdmT7jWPZXdPATX5",
  "key30": "3KVg1z7SNB1cPELdXuim1wPfX5PBXzCM1qzqphjeAEn4yRePiGVQQ7Fj3MnqvAXYZCPNCt2UVBUoA6xzLA3cJwxx",
  "key31": "UsLJgi15y1GTGLtcZSRY3rrQ5Vp1BMfXAdmY6hpUKRhu3n4v4iTsh6YHWRp2xEMDLrHE6EcKAMjhGPTdJYcNMkx",
  "key32": "2EHzE2PtWT4rhnrPvPhGA6zZskzdN4HiV7Nc6QSzUXHxNS7rmakAGeTXK4brJzZ5LGKNTRYRgsXScLsiE65Y1HVi",
  "key33": "2xNm1K6C7cgPCnLLYgTAD8GUaNrMy9APjJCyZPCtfZPN6EnRxGo8GScNZhSvKKtt2yXmyzK1rm4dkLV4uaWCvmXZ",
  "key34": "2B1z5W8Mf8dyWbCCup9oV4nQCFzNbztFgkGSYxcqmcbSyQ7JAywVvpMbFq7tnBYsZi2kGsWALyA3oekbZLnxRP5T",
  "key35": "5xAR5L26V5LddhbXKUH4g8dQD8e32oHJhGzXhq1vXsvAtof9up9oLG6mysrgGGdvj6vmMHQjHLgPHv1SJsHtikK7",
  "key36": "XGXAG5YdUoQkVH4sB4hpdu1GqZvw1DEcNaG1iACrbDoBVk3mXZrWssJN2D31csLn85g8VeERoTwTZzFazHodhwh",
  "key37": "4pYsJTXSqrKJBDdk9jPHEbLMd2HMD5ckfFSfMt25uDGcxuqjZHhagNfV1Z3EHZsRhbF429nPXQuzMzJFWtVxzCjy",
  "key38": "URKgqUkSyEfeGk4h8jA711KEr1Z6XYpgNT1XoCNaoTvHVBzvyBPQDx8WJteSZ7X48628ycBGGKQdoGJ4sqaYtds",
  "key39": "Qouppjoja6qcS5eQKB71TfmtjGBYAJgkUBP5pCySv7izqwC4qu3UgR3QqPj6nqVczDWufSSgCydeoHjT9FvWVWJ",
  "key40": "LyAuav18fDMaerFrhB4RdyvUpk77StCtdZk6Tpvz2A4djWdYhUNwYDZpza6cXGapCHM7w9aANBWn2rAJGKjWJ4F",
  "key41": "StPq5fFsbKDTZDneToaB5BnNQCNA5z1LbsHn7oMA95fqxzSY417RzRRxzLZJ1P7rYj7S8WyD838K9Kkmd2GwHFZ",
  "key42": "3uik9CDqtNo1cxVYi3JiyRaxcQj4NsS7JDpTFL5NBiad95ZDndfgyGkyq5UpbY1fVBMEPyyBYCormKtMmSw7SYHs",
  "key43": "2WhtpzBr4botqY88jQ3WHbpqsQsUguNgyBA2sFSFoNVdPowYnPK8LNb1EJop3EevUyDMeDgyAm4yXw4wR8Q9fuuH",
  "key44": "5H98rLKXudZbT63j6jo8LTBXJ9YZu9eiU23bhqz75ddQM5JBskUfr2cKSCnCf57CX1bwmjdzdpXnypT2YT5VbP4r",
  "key45": "4whi9ywKRucVSags1K4BDhzDh7owwPsTEad1pkhB7fXbvCymQELhBfcLYryLyUCoT6TQN9EZHr6gVfukJsMePMtp",
  "key46": "MR5QT3QwTLJoUGLZq5PMnzfb4roGSVNhKwhPHBq7ay6uikZkJs5mZjLy7Th7SPEQ4SVoe36KAFhRE21F2Ef17VS",
  "key47": "63LQ4fWXy3mDSzahDGF3PwWTpqXw6g3B2FFXkGEbVh99UiiwWVhfqgJeLUVZCrZLPFB3Ghz9KLayTpE14tiFevC5",
  "key48": "53PHr4Xw872GmNoFENm9X7unsWzzT6h3DuT6afTh5tSvjDyetrgv5KcbWvrs5nEWNknqzXUevAZXgGSJh3Rs5gm5"
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
