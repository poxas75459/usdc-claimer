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
    "38M5KJBythr2pc9ZsS6Qn3iPXsKFLC6cXp8TQGmm2HLxAPJ2r9NZzn2njnUNukpbqdafz4iR1DMHxhSCvUFKbhFR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1j2NVmvGEk14sx6ph5yhpJBJJA2oNudSxYJYgMndgcf7kZ7J2GjVh3tsvi4Q32LiTD1q94hDkAW9KuQeeopyvy9",
  "key1": "3uAsyrZLBcWPaWuQ4ivadWxxNnxuB3kZmRC6iCUeewpo9f7dsfaFhf1DLhSCCaVaKLmNwGz6X3Rw7F2wfd4rtm5J",
  "key2": "Cg9SqistfDA4xAByyUm7gJh8cURT1WPRW4maWjpot9LiEdWfDzQmDZAcbaFmqV7CvYmjBsSvuYWrXdjmsgLt1vp",
  "key3": "4Q6ne6mYWFxpNYmMzg68h7EvLGbhkSRtujfHxHexgtKB9XNqZ1qf9kc3y5jNvJpqfjCdfhUwQj7uo3Lqi1XHuUyZ",
  "key4": "vu8ShQVK8ZNyAgaRt7SfLgSg7m8WaFhUYcUQZKwfkCfSiRbLu2GpPNmS2VG7qoCQopVMKo3i7AjKkrDYJxtfgME",
  "key5": "fem22jTDMd8f2BR8soc8rLYVHtfGw9P3TLaJBRSenEjq3Y8LHFzyNc6bRnzpSd6zsoAt7jfYq8sLUDJjU2KDc6w",
  "key6": "4LzuroAPbEgeHhHGDzafpZEYT55YZFHkxBCaL4HVLwCu57RQGmJx5qaNzkTvEDcNishbcitLd6Ufdyn2paP3vBsZ",
  "key7": "2yLiHsbY1appQ151jyRL1wPDJSUdR3Yx8ktVc7CVSq7cU5FG9FpdBxB2Z8eXxAtMGt5TWMBd6UpZHAczhvksTCsT",
  "key8": "4aovd8oiYgBNCQ7PCH9H7RZsXM7DctX51XrDVggA4rf4pzHgBzCGLwsY8h2T1UCAPYxPWDJ8P2fFe8C58AhYi4EJ",
  "key9": "DqffY9FJfB5RZta9LEuMREesQQ6pU8XRmgNFaiQ1mrcosjUtPMABCTDuarYHJxS3hWYj8BE3TSmSjrsCDBZQYcX",
  "key10": "2SFLLFoAJoRJirkqhfomJZfNfsX8HVHSgXfdwwFLkvMzvH1hKhGfqm3mTcrWFbcraPA5ycZfrFRVSVdTDH3kgF4U",
  "key11": "5VywNZaHiqVKHeLYgpav5kB5CzW6ad4mXEWurXrq9ZfKKMwSKBKdzrrcH3LrcPeHfDTH2fuFgcaEQtpoLj1YZz1k",
  "key12": "32889x2jGrRR3zonGn9Z81yfE8cSxqmrcN3kGi8L8sJau1Twv8uPqzdkCS158JfdjnFS1ANXdWSTC4uDZtQ74G37",
  "key13": "4rdDM7PrFZajHqXbyiQQrcvqs4kXcuSvgcXkWGVRJj2PmkGtEShaqNs7th62FJWkqS2HvrSqoJJp2TvbuA1mj66E",
  "key14": "2kfaCcNCxHVXgqRAdNr8VEnk1TMUPjy2h1FP97KwHJh5jM5HTirTVYk2aMTLwPJBMeZEXrxxYN2Hm7a3U2gpNCES",
  "key15": "2ZMFbbGHVJ5umLMHdAHF9Xhi3g6V59XPVwfddaNePSxNraCFauP2JD7PuFPkiUcTSstYMwsCxZ2DYtd3PW3Ztfmh",
  "key16": "oV8fznwUswKYfRqPDcBWMztRHgthJqeDk6abiofK3YujzfYeK8u8deTEi6iFfDYQavM77xbMfBrVWZgT7CoBQa5",
  "key17": "3J96QSJ1vwYTRquWWeT6H79ymRKRRNSBwLs63LBWc5eVGL9W8LAoBhh1tKqcQU2n3PUDJSEsN1Cagh5En3Xd8nPW",
  "key18": "yfNHx9nMdouKUmWwDjzUfb1PNpPq4CiPGQeTCjegXkmuiKjcq8EXpH5PbpmdmuFnJZMDy2id3PESpKLp2i5upp5",
  "key19": "3NkSK22k81qRqgcbpbCkWjTG3gMqk4hzeh6TKWgxU4pJWrLTJQwddZrdwUppp1vui7MDenD1stzDsTGoEuWrJ31H",
  "key20": "4mNqFuvunB99eZtQxFDUskewD1B22kirv36vQ3nBk9hwySmCicco33fuwU15qaeNvQYz52aiyRKe8dRBv3mWXZnc",
  "key21": "5GNP2VKx5aALhT34z7CaVjeScXmRmGCxbEG5pDRheCxEX8fM82npSeAXLSiQwMcTCWyunatnYYW839nSJmniB7Xg",
  "key22": "3eaVJg36ZQo9eTKTpcy7Tmu38nzTbqiEmnkceGhadnLwd8sDgu1k4GMubvQNfb4v5iJmp12b3pgYqaB7GW8oAtvt",
  "key23": "2kfyVQ3TJuNdkoEkAnsXzLrVtUGjxhdxskEWMzw3Q7yLcQrjpm8qYZ4Xz2sw6XWi81BU1zsdL4zxtULxSjGNrhwm",
  "key24": "4HDmxVKiUCEBYatVC5NBcrnhEpTUASKnnRgfJgbMwRbX9iP3AnGCHQqviA5uBSXtUADcvERBoWuKv2iAAhMeD3E1",
  "key25": "ub3SXxqk1jU9NpYoJ54UCcyyxjFPzj92B75jZGYcB6eBbPk2zQmJQDBuCTactZdcKnKTNB1vncHqG7ofP6ig7BY",
  "key26": "4EumgwUKUMh8AyhbpGoJbSrBAUNsc9ok4ozxartpjexVLqpW9c4c782NCVnp5eqhJcxnEtjSBY45Y53KVZzUyb4k",
  "key27": "5xTzHBL4AF4z29eW4BPVUnPTUQApToY33Lf2ZZ6MrsLs1WBSQawFf12Go35vDpjp5u7VbY2b2uVRgzD67stMrciW",
  "key28": "2TCmCqvHMqzGcMhC2nkAEBGJB8zspAK3KHjE8W8WRh8k74NEW8kJXYWgZ1U8DszUqqf19yppjT2p37sgqbRHnjKi",
  "key29": "2iVapS36mwQvxjZtbhbqZ1P8EHZngiMrUKDnMSA71dnnsi6juEVM8GFmfc2wXRD9Bd1ghHPZXVTZ5cZmXgaDnaSS",
  "key30": "27tHR2fjnhhZyhG6e1fJobT19Gq71N7fMcpcdwMrQvs7WMfZDS4eDmbJjJwL5gDsa9hXv4cVtutJezvXf75yjR2f",
  "key31": "3Ayj6uFhH8gmGRmgGaczCxLr9g5BW1PVQ2bmxT2WaELRWEReuCq1L61Miawq4uhNjoGjCqbsrXnCbqfERy3KMPFR",
  "key32": "PYpaxtVyJLTm92wooE4tc8z6LhPjiM71EWGc8HoJfEMsmuzz6Tkq7vGhtK3jYz2WdatZFW3QS8QkjdFRsD87GvS",
  "key33": "5QF55yvLoaAbVDUT2EwgGEw6S5M1ioK57jCJEiFqXEiSSQCAwAM25HsUqLUpGiwdWmEYdL4pFczjfb4RTFobNZ9A",
  "key34": "3dPaFjKa4DpNiSoyXn6nsbuwGWQoXuVWgfdkVUs1RMtEaeLb72ZUbSdfaydhw24Usf9iN3Rs3xH3KK5XsGbsvVKw",
  "key35": "4rGorJeGd5tSe8CLgkisSkotBoPCgGPCkWgFS29PY6JDZe7dVEcuWrmjRbfKPUipFffyxrv3Vn3yNmBmc7yfeWpd",
  "key36": "3tC1RBgsU6v2AqbDeExbHeFN5iPpnYxMV7CDrcbA7gvHU3mhfYB5rvecQEfwxfGNEqgvpcT7kQMQCCWWC38ZN7U6",
  "key37": "Ka8nW9GrbzhJx2XTFuNdSAK1FHxUTefgC2QDGqUC3VYWMBRbqKnzmzqQqdsrsmBdBkVJMheVpfP6TkpKM3AFcqa",
  "key38": "3vLG46tH1j9x9jmPE47M2AqcDFWPJQqMfzKJBNdhVdVgxoy4iyyH9TZ8W9A1r35HssPmXgfWMBpBZarnHJCHd4vW",
  "key39": "2VYftSmGYuZc2eBtc1wfU3RBUGwXiMr1uupu8axJFVa7FpZDyvjWRUBAou2GqRt6e6gWrFBEY3jdzRBQZp7Rap6Z",
  "key40": "4GTvnUUKRYZxqSUatKUAaDYp1FGao1xNfXT7YTZLVdBQB4doowcRPAwxPrRNorQhQ15Ge2zTJL4JfayoUaWaeh4b",
  "key41": "4P2eSrqeHSAYZrYVHPYBh2yFfabqY4FWezT4CxDgAv7AGPKdjVWLfgsB9jPxbTmAXSpvBqCDEhQr66Puqv4ELm1b",
  "key42": "3UsmBAnzFoVMDPuRMCmSsihwk3dh1fdhixttcbWnHkYgXvHkRxn8jakPmRDZ6M3NhNDv5CXyLU3QUQwxqZLvX9ED",
  "key43": "SZokq1iWCM3ocBnuKUi5wqnTgDMZCVUiAkhLeciuNxmeXcRviUbAj5ocGWfPQAZ3WfW8qevGtAwDpyoUTGvMHVF"
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
