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
    "53wvbofRsf8zrfcEG4X4xfpoegSE8DcBjHdDadthbHhw5EggBV92BGhi3vFhtxNesvPoZwaFjPxiinh9tG7Trc1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A9cqwA8jReWWBSDLveBFymRCqmwLxSpwHmpG16nZYLNPyTiENRjJHedJ7VqHMzu9SyepUXRqZaRTeazPxQvQ3Cn",
  "key1": "5TcfBKPPRy3NGZsbjBpPp3rzxHUssmxXFM8QtHh1cBxL6YAxskNsNBA8hwRcW18rRhUP2CxeZGDLkNUHog6ApHmE",
  "key2": "5QPvDgf2w43NpDiimt1wKqxcvXXh5YXUebQaucnL38RjTNJpXFWcBqPupJFXjVYAxdx84YaLhNikXVqy7twnec2j",
  "key3": "5y7Geidb75JPKyNKBfuphAPhGX4fv654tYyFi5mGt3EQLGRySnXh5opUs2LNHy7MV1US2N4e3qUGb4UyCpQQ5LuJ",
  "key4": "qoaFYmx7q4EPFzviSUVtUqdrNyKMMiQivj6MpC6WFCt1zpHRqsqdQAUETsGJ8zma6wq4pu1hFyUXZ1GSW8uCvCq",
  "key5": "3pCmaThgziAp9CTFZRrm4Rc5whUufrLm2McL3kyAHuHKstHU4uWPvq551DjXDXZgCoLKh5XFs41Eoi3b6zvQ8uLX",
  "key6": "3DoywDTQ19qfBoynpwhQvVbdGMDQo2iEmpbnmJ8ttMKcvGYgR69yCRNAGt2ADREozU7brCPZzTdRbWWwVV3RcVTM",
  "key7": "5SKEv5ChVSun7SdDoyPh24JVKY7CTTaE7yjJDBkEbZTfEi4cq11zNoCemvUVw78Yi3JnRfzto2VjazhtGrwDiCwT",
  "key8": "47duAmTioHUHYhDpHuRXREvoJka2ZGNLU8QPB8sjCJcUHz1SGzosJdv9JTiTedRAayggzFeJ4jXEoXBGcob9j97J",
  "key9": "2mMJpoJfggxzoq8g2pfiLZd7gowFUPqEzy6TCPQ3WkmVWnVW1VMxieHfBZZkhJMuDDnsn7ZMRJted8FsxLUqEC57",
  "key10": "5c3aYE2ahcABkyQjxAf7kcTMfcdri1kbcU81A7jyXTJ93UTFMF9PCWVMtoJqd2WReE5ra88soJiEAvbxj4tEpfNm",
  "key11": "2XngDmHZm6aA4Lw6bvwcxMvhh6TxYdUhxLyZq6jj8AyFUwyDaHhSmMWAEFntXcXgCNi3GAcxyW5n2WtJS7RBYUmL",
  "key12": "4FWowieCViVnpgnx9iegLUm7kSDk7KvarS75r7pPzxhiTdmHGHgFz69TKGzz9KBdELBwgRnAPGn78P2AtNQixv6b",
  "key13": "5gSStNuVt4gu65PmVwmonSPVT1mLBmqKGRWYRGJRJybS1d744NGvNNUTmRsQWqRByoY3HhAbv3X7CiEmGGcaZVfy",
  "key14": "2pHgnqETh8fHMhRZqApN832gSTaGsX1iZcoN3a4JtBFEaCyGbDsSMBRgxUe4nA4rm77RwxsrZg9DtGN7NzF2NcsY",
  "key15": "2ejECkLMgSufgLaTwC6ZexMZeC692nZDcRzn8FFq4UT7PYNEAKjY9fqUAiL8p6Bt5oFfWtarNprCMBrsNvtpHu5E",
  "key16": "5bL54fncUr24NFDhnwL2CJzTEWhq4emLtK6noZ4kRqby81VhTkQGPkknjGq4Q6UfUMMCS5F6hY56VrotYEsKuxPw",
  "key17": "vxByL7aisBgWuxUT1AfZqgEDuyVTFsA7voReUyrCwSr7yx3u9Djhr8E5xPSeYNPJtrBrZKNVoPjYKRrBBLuc4b5",
  "key18": "DY96RZhqJWNSUoTbnDKWaoHkT5myVHXVRMAE2N4223kC6LLVaxjeMFXYu7HKDWJVm3jnj3p7hZ8m8cpepK3cg1X",
  "key19": "wobizN4485FGRqLc3uL9KqdBpxXkZvg98BkHouqWbstTchQQ28FKHsr3o3EdGZWsmCFHE2z2TQao7fD31MAAgPT",
  "key20": "2bPgG2VFwtmmtEAehWEh5y3ejAnSCyGuHeU6XHKdGwbgPa7AVN6jLQmgr3VjAhxY6hfYS4AQ6q8R3sagBya87GW5",
  "key21": "3L4fq2BCdXJUAuyjr6GzMVKKXreqNBozC47CvUnVt6BVD38MMjHYDZcvUvdVwEyR5z7arwZHcpxtuHUASQxjEKHG",
  "key22": "2c8ZuDYUVPVp3HasPabtKwSJsKLuZEuAomchwXfZZyWUpxG5MftXFpArHqH7baum8T3GPjCafZ3jJu7Fk8ZXWZZ8",
  "key23": "57LHJqSpNKgH96UM6Q9Qf1pNiQKztp12DhGCpdUJqyW12eH5QMYVtrZcHKA3hrFDCVomTPVLkpSXNK2nWEvdhdGu",
  "key24": "2G9VoqLBBvRAaxa7huru4p3uafgiXCkYeeqmiLDe2sDNi8mcxJXp5DLCKdJcSJvyPRQXcJvqF3dwk4DXpGB92yb3",
  "key25": "5G3pPjx5ZDk47KcENttaCpHbHxbCvsz9PGpuUJsofvqPBhMsSj3TfdYSkurksUK6YVFGuLHGUDspHamzWPpoTvNk",
  "key26": "46wSsdDSLV81tXc2xWU967ijWkyPEY6hPvu53xmHMb5E2qVBbDdQN9dVj4jPtxHUZMgvJ99ombYund7CM8ii1oVu",
  "key27": "2Zdh7n9wRYFaTUMfYQcWuWryChiCCPQA4NnijFD6k23rKvC74tMWhZG5MKVBn6EeUtFkY8jMMFUSp6bYXZ2VyZmm",
  "key28": "2dsQm7HZXWDL48uE55rMhtF2GkvoWxD5fRicNmJZF5crj1giwQK8vWaR3PBG5nPco3kWrqMB69aXakisGgpSyrpW",
  "key29": "44wi7yLJBpvpJsajByWeAzpC1yeFysyqqPt6U2YMKazpXX6RB58AtEVXhu2zZKTJWYyVmBJxHZNj6zJfEZoa6gRu",
  "key30": "3aCPqomPatVbGeFveQvBoMvEAxm2hrtVKKAdjC5czjj457F4gHfjMeRWzqHsohu4ofWNeRizrNmXCAxVJPiB6Ckq",
  "key31": "65pR1oVNpTzMxFetJaNRfn4oLvQC49MPHDFEb7psagxFwKo74T7RFYgdEqL6iEgUj3JFCM8QaBcqkP95WTfsnn8T",
  "key32": "SvKyhq3r7xw5kXEzB3XZDEyif6QwxG7i8FHRFxrozY2hKF2eef2Arh7EBLULvHC4b8eanmaMP518zA2LBKSSWr6",
  "key33": "3rfHUVe6KeUbjFiQGXWCCzKCWKKuZbrrGrdVkozRi4QYnLX4naPHzXvdH4uLuTRbheMc68KCJZZiJQX8gp25iDJb",
  "key34": "57v4uSCyURDBH6AMDYSJqoPRRJkgSsinLFZYLzJfrSDPFwawNaUF9t8c6XGEqiwj7eJ5YqMPdpbpQ3vuWek9Uyw6",
  "key35": "2Gwe8FU9EyjLKzqry6eWGPxpmBAmXMsbzchyekdST5uQ6U63vcZTJVCk9yMjA2X6uukeb6m6y2yREddVhLEmsxwv",
  "key36": "3rKDbHCqd6LEwvXeYfnTTRYBuCeD6zRLApYNBUp9xJH3eaimHEDK7Z5hezM7RSP9UDSJPbDrktyE3cXx9avJseiW",
  "key37": "2RfDMzGW7CkwsBTymRQif4jhmNqPCDP4Gke44oEqynkXagdLjMGiTB9mtBNotGPPYhCCJdvANddZBTw7a8PvmtqJ",
  "key38": "5LTvvLf8LXTjBDzjUykhhrTV6N21RGXGvGwdPEP6RhQ4F3PijDkM1uhCrQQaCGUo74ZmbAoqDjwM1YfQVBNWPA9z",
  "key39": "GpgPvAcrFWMMPWeKH6LtnftyQXZDpXWMYN1NXRcVBAZ3TT7N526NGCWouWLjTEsXzcD2DC2Yph9ZroLFMo1ekeo",
  "key40": "9Zj7b16yFneVT3AEcXJLFAzU12ePgsji82DYHvrz9X2Pm89WNbShxa8gQrE5iUXkWK8u7BxaxtCMQ4DjDsgHk6h",
  "key41": "5JaGiUf8HUcAVPxJ21hFJxCMBVWpAwMqoAMAbXkdD9rUkE7PiEMbWx5ohXGNFy1xfqfzy19gZaZZCKR11mxtutPf",
  "key42": "25YaUz6VebQr6YxHeHK7MBEXUTGpwKHJv9pmUgVY1xNMHMgf83DyaPpXG99mqkxvasnwWQWjoa6nSusDo1ZZFw2T",
  "key43": "27Mv5Q4ReC8Poh4HaBj8yhSq5WFJuv4ztw1BF916UBuhResKwbbSh2CWJPm7Wv5YFFJRhCxWNUo7ySwqtYtzJ6mJ",
  "key44": "3sDV2shB1uDqWZFP4GHDEmmtr4ZZ3yC4yLQBCAznq8m72uh1Xnzrv2dyU7cBfga79bTBfwiiuzEL9wzZQihSBAnq",
  "key45": "2fkjQ9yo7BabjykMCYYu5ffNkXkjokpi7pd225KEhmRWo6Eca5p3vaXtRXhATHBa3xeohrX7XD2ehpzZ5DYwAFz2",
  "key46": "QWFzAkza1EJiDjjBrZeW9AhyJCb8XFKL5Fm7DrCkVCPcmz9FNtG3CYjFamCzBXFNaH9fnDfeQERZRtGgfjeXkk2",
  "key47": "5SSEDVY4aBQU6ykNxa8BYVFWcdHEikhx6TsCV7YbEjL8jNzFiYwZxQrRJW8tQoJeArAdVtgdSCXeaZZCLzAJqBd2",
  "key48": "5BgvDRPQi93rjPMFBQgSy63HEHfwhiX1GBq6mzo9x2Vxw1eBQc19daQoTHExmPtctpDSxfPuZEir8vgWWDWNZMY8"
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
