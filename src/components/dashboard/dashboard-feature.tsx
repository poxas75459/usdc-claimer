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
    "62tGbdopRdGG6dccixHCGiMadiqqDEya34YVkqTMPDL7otVKYACKdVR2x2eCDUi6RgrhmB9Ypcc1S9TkQnEneEEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTrWPBKWm8BTByXqdzHV4eHuJYrFXbrqqdKdXMn2x2xFDY5UzqwVxgr86F91M3u3uAQ5fdsyMFsqQ17u5pZ5rFW",
  "key1": "4cwpRQDY1MAKX4XiqrpGS8N8WaTdPaU7x9DMVvbCh3wgksS5dHnYtGbKcEAkzdTDpcfgRxDkZgSQN7AaCCHdnMNE",
  "key2": "21HLe4BeSgwjMpdHBnoL3JW8qVF7rsF6Fag8aUJiML3mDXYTy9b951wUJGLFwM8L1rhPYPNcEpkRYCWAwxyVMbcU",
  "key3": "2nfzdrKigQEv5kQgrpESMgWU4UYKvTsN4tFNzpKiLrx5Py9KGws3muengqBdpfW5QdriWQoeMkgHXGWoKiaMAhv4",
  "key4": "4BLdAunr5G4v8iAcNhr9h7UVNvD6PGS7fXa7ewLzrd7RVQeBzjudibkXcTZVE12paaRr3pxErgMvGKvcjLQDz5ux",
  "key5": "42ausX7yyEden3Lf8XgJHLoP4MP43fsrzjrNn2LYuogQe1KKAbV2cRA8yNks1eAXkrmTQHvX5B4pKjEPQkcqb96u",
  "key6": "4rne91jDRPT33uHc4SdWNV1MVLiBgoMt8ErhkLYTzkL2smBzbLtaaddRzXwBLrTEqCuJyfcigZ6pcMXVh6kMsXKp",
  "key7": "3sdCxMewsULDNNgEevyjJ3Pe7XCChngZueBEeW2H9u9quoLVJNUoG9yHyAvZxaNG3nKWTfLbKesD3o7BDrL8CiEE",
  "key8": "5XRTnCyL6xhGNiUr3YjvEn4T8RHG2UrUtuSNQGZZBB8RZxYm8tzo7vrQpPLvvnnzTLXrA18G3mJVyfDJzzUce2uo",
  "key9": "2WKTjbFi8KDia3bm2GCnNrt7dfAqRPgeaYPR9EiT9mkxegMti5cCRCs9aQE1qF2F1ozvGjAhMTCzjtdDMvn4zAaL",
  "key10": "36uiJsyReWtkbocDMuZky6uYC3rV5dSU1EPME3u4kPu6MmU9iE1QTviCtWoAGrNaZvEP8Lbxc29F7b1airHNnzfo",
  "key11": "29YWnU714PExG7Tm4TZ7xbTC1eNN4uQatV61yKoBqy8oWjvZAopKwVQuM6h28Mc1Y41PhwFjSgL27NY3cVfFTkj4",
  "key12": "4EzQ9x6H1z4wG8sMqNwz9XXKXL2zZ9LvNsNnxSP8MtNKmFeFLskozkkXpeu29N6QAotBWEX34gAvv7HRyp1dB6Gq",
  "key13": "3bvnu6qnfYXu93hEPK84twnCwWcg5W56UaaMyifDoZD8Wkm7fdwHc7Db68mLztDrs2mQMD7tqrSWCWk8y8PNvc2K",
  "key14": "4ceLWkJXdNSDd48b6BLnKQkRM4mgbUywSzoWq6gCkGFR1kmNsPfofZnV3Hok1ZZh9XybwUaMTzwomp3Xk21xiCKE",
  "key15": "4vJ8vTTMNujRseNCS5WEZVywaq7DJ2z34aapVyE5xdTfxMVrs7MrAWA9nu8bG5xyyZb6dJ9QtLjFDmjsUs3QtPB6",
  "key16": "2ftw2DZeKUmKt8NvxqEKzhxsUrpuKcSqsgGJUPFH9bqKxu8qXYBUZ2ArACizoMCBJLdNsVdpyy4i2cC751PToCwf",
  "key17": "5k7N8tjbarhHT5BorZVNbFzCYaDweUwpQ1RSP1iYn4CHboXWUti9zfob8mCYBxSR1LjnwKQNSNuELCqkUiTB4V86",
  "key18": "2r4Wr21LK2xLabKNBy7ZNMkptSFhiiuGXBg6H1tqQKYpEQRj4frGs69QybUcKWYN5LsHiFbNjs4bjFvxKDV7WQCb",
  "key19": "AYNKJXJTCu3qdVUAoN1o3rWv4281tQVkYetn6P5eDPFXBKKYKjg8M5G31HSKJRcihigtUczPJaxGUox38bcJ1WN",
  "key20": "drTzyr35Y1A8qAFyPhckVD3DnzkSf82Yru4Y5dQHTm7ADmhTSxV4hpe1gKmsS92QqL914SXTyVcQPDabtC5vWDf",
  "key21": "4JFvA2hQCKVv2bsFu4EUjXMQm7J3BMtpTa4fyCgxjMD2PGkJ15N2XtpqEjPP7Bh1u3kP5XAReEASUE3Edzx6kQXF",
  "key22": "53V18NZxknVUTpzeVRY1Go6x4pRSkbkfuWjksEBwEGSZim5waAguP9P8Hh8Ge21GcbqnthKk6jmcSQjUaS1k22m3",
  "key23": "2wa4JUMJPyHZatKPPLiRPqUvpqBFouyBNvxdkLqVekeMhD552KkW3sFvtDJXyM6WyYqibZWnXwioYWsrwM2zw8a3",
  "key24": "63idFPr6arKqMnWxXRHUar5Fwu1wNLomfU62L1ContTMxURgJURcCaqWNCTsWTcaejCXVGnabSsfWgYptncpkhuC",
  "key25": "37vV1GajCN2Z88G6kvNgbBuLJxofhYnnTZngqeMRuduJhWc6uWzY9yq6LY1x4znjipW3HX2KkVBRLcmArEkt5Se2",
  "key26": "3A6FrXGeaPyjVbu3XoEbwgbb65jwU11aVFW9pG2Va8x4iAqLdaDom86H2UZiDNbbQLvSbK87PQi9a8sDfmhzbL1e",
  "key27": "4nGDkUrtFReTzYti1X3PBDXyHiPSgvBgKsnDzVDZz2M8WaYRnrssmue3fhdzPSWaDyevdcdRGWSNHuyjWAGhVCQ3",
  "key28": "Q8Dmc8K7Rb3btDa9XJQEFmhCFGz7pDhLMWTP7E6WPkBNwTx82BGTZY75guRh7D8DLFjYBFLMuimcAqbkXUSXP7V",
  "key29": "2Gu5Fi6tQmzbRmvxGR6jDdbewCKMhhKvSTTXoSUfn4PgfEvSHGzLAgRGXum6hkmByG6uv8fLcVMHcq49hXCiCuiq",
  "key30": "3CfDpbdCXfs4UPVygmJwLSeqiPdEhcF6aYUkE8bNznW1DYDWVo117CtJUH9zBjdek7wqmcDxxALvX1oEYvbc2hgq",
  "key31": "4CW7bCJv5NjRcNgPMxbW8EQ3qdFyr5BVS5nTsnDvkbeg5zPEi5o7JHvP1sD8Z24HXNDhxydAZjcYwYGkyv2xsaEV",
  "key32": "4xyeP9iLL5F9hWMyTQehXTjAKnTEZboWuKU9SB1HQwi3aLZCFswY3EvBcrhvGGtGd2Qc5FjP35ErA1pyKYn8wAH1",
  "key33": "VANskJUej3EXHXzGJ6TTnYQzs3Y1q8VxAL81aoj57FCRwQSt8NUViZGLYAbKFYm1QVhHcxdcZfbsaztehcctxyt",
  "key34": "58aTjmADEpcFMFSWA2GQRh8G3hnFwdLUgvEni6MGV1BEj1dqdUxQcuzChDGL2TXyM8eXivgyY5XzrSGhmhnFVXm3",
  "key35": "2mjAtG5iQwx9vwGk2fhMpavgqqhrXR6Z2fQ9jVz2ed7Ztw6tH6KuSBrQNiKsChNvtTDQWSppdR6pznm6VCMai6jJ",
  "key36": "ahvdYiSxmRsz42EhM6j1ZCzW1xGCsBWLSn5GAHPPucb3oT2gayZtVTRxKW38dpzFiA7fqDWiTYNCFSe37K8BDzs",
  "key37": "5fni7jqvjufbvf3vGeGHJ63PAHFP3biTwfY7ieZNNP4Bdu57ufZz6YGc9ZH7Wr1RPXCCMx98PLNTp8KrQLacGJiP",
  "key38": "4KW7w7UbqBoT9Vnid31KyqzZXNaiZVe7AmR9z1X5hVDaHK5i3TQqobrgmogN9oCpqVH8P7QL7NFbfrBHdcr2Ss9Y",
  "key39": "3nuDjMjMn3zTr6JDBFw64mfFqx8ioJtzfEXisU8mVg14P3zx3W1wMH4TtfnbcWfpvAp4Xi9ZWCn1DJrzJCcbMe2i",
  "key40": "aRQNCbNyXk22GJBif1NwFHEW4Q5deXjQf7p24B4Cn2UcJFMjpg9AacBZwhYPFvu3kaD49etuZc91D6ctc5BEicn",
  "key41": "2EHMtGvpVZpmj1A1pEpXF7ntNYZv8bwsgvK3KbcKshntjCW3R8QqGxfashECnDuMLsxZ4bkXUkNtfEffzytwUE9b",
  "key42": "3NK73XJi3dUNTi8BcsvkFFnjH3kfyAknynSz49ieA1fhiZBfpJEcJBixNwJSfJWHcqf4YT5eJYxkTCY8rwfZH7u8",
  "key43": "5vzGDtmb2xnHcCoh42Sd1hpe1sLc7VeAw7twrNPtGfywyLmDejXqheiJkfu9cp24viczFU5cQEE7F7p2A9uXxE5h",
  "key44": "4iQcRqV4KRmddLZzCVFfKDCi7my3sy1GyFwXzkpvZ6nBtbwFPAzCpokPo7Y3tN2QjL1iWy7e4kuxDoquqZc28dya"
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
