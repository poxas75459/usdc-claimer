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
    "2ZggmJLLR48hoLHhzuFMWXcGAm5SGK2kF6JLfFCvS1YmpKbLPPsRicxod3CoySw57Hgq7163LgmTXUkBCZeVRnxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fL14HmGwwXkaTtkNndFr9YhpjDVbWcWLecPrFPgfGzbAiSWfHzuV5jqEgrZFA5fTjCdDjDrgVU8bpWNSQgG7Yto",
  "key1": "wVGjapVWuadJHSyQgQMsEderw4Aae5Ue5SqXoQajpFcwonzWXSBDZTGuJAbhizszwf9HuLmswmAGCEC1YfPAG6f",
  "key2": "574G5tu9SZWTVbyAgHQ2Dnz3oXcB9qAZzxh35u2Fidj69TsfSUpxYbahL26xwDhurd7pM7cYfW7cNnxPSENo5YUF",
  "key3": "5SJpA2zvWMLMQo8JKdu3Li4xFHpn4YvVmVJCkFE3nrYm6om5A8cgqt2gUUY437xmJPCW2ZDXHRZBMP1guwHxLbMJ",
  "key4": "3s1fTsKenGdYWz2V3n3uA22DiwxxmYKFWhg4yZ2B79u291miKgy2ApoB9W32rnCW4cFb45FkEWc2nnCYBZSS1udM",
  "key5": "495mDp6F2KwxAFojLTmGtiWshDpf4tfHAth6NeUPdvUGE1pG6t59wUurreHL3SgXk1MZa4KUxB5zx5TqVgBJz5Kt",
  "key6": "2Q2DmYGbk9Q6J9rHYM1xDc2sSzVXmvJDdeTYTe2DrSZAZjKoHYSJSs4hq5TaGhZdFSCR8BKRhSVxV4g5bzQhBkQ8",
  "key7": "oLcA2A3JpnBGYNeccXSjQonkNPLYR44vV5JA6izmvm5uUHdrNDgVM8HJZdHNVYqePuRwY41W4ibRv62iAAzQjyw",
  "key8": "KqwHNqMrXX1FiAFjYQYEsWyRkWzWMbcnaKu49VgG7Sdr2BHiUhqHH6YgVJAqMpuSPyA67KaDamtH6BdzDMdmUv7",
  "key9": "3CA9moor1GPrY42hexV9GzuMvkioRoexAP3rjeP49C8awudupCTTuMea3F56RQpFbP8qU5XtCKQDPWi5kaLBg7nx",
  "key10": "ZcT1d5Pc4UiM6o5c36Gw2f12GutSFJbGaByRjarZqh32KavGnX7MXFwvkCve6vTUXBSTEPeYHSSsRkofV27ZCEA",
  "key11": "2bQ27w7uXpLcdqivVu7izRxtY4HYkbyC9fZu5iVG6WReaDwyPPktpBwjRon1LuQoEDP7vHUy9q9Q6yL6V7K7wj6H",
  "key12": "4YXPyNgpGeqKSkicMntBQZZcy2YuFQPTi59cgeMbV7yjccfhGByPhx9U4Qnd3oJZXeyKfGGRYSpKyw7CkoV7RGxj",
  "key13": "5S94RijPjQeHHCVAWAC97zq28WKv5pGgVk7EMZqe7HvCUWEj2LCRzwpf7y8uhqdEEnb6rkrb7iqpR9gNdpqNheGJ",
  "key14": "4M6rjKXW16mTicJ7CBn7RQCiWXyoyPEEANhP5JPRz6BKKJeMLV1DUS8tn2ZaUMsesq5tAQQZJNxYhtRvcuj5DkCL",
  "key15": "5sYd14XU3BaWYFg85FpbW9sVuvHipJBqetDY2mfgMpTbsMgcc759Vh5AyFYK4T1CFyfCcSzLyDSyDYzaeohArFy6",
  "key16": "27cP5tbEVbGdSB3EpkUnbuVCBvgvzQiKQhoxA4cKUvxBxQPtui6C4B1pJtucmLjFQu4BVGSwKBUtd9PFdS9rWCvo",
  "key17": "5BBA9NUJwQKZZNTwtCs6hTam1WMpm6Q4WE6btQffR5RCJcecZFqsfY6GUzwsoiQsfzhGas2U5MHw1DbfEMMcAn69",
  "key18": "4JnCEbGc296fYVCehG93ETaTSC3wYeLWS9HieTzRRtdX8kHXPytUedt1ozqTbRnra7oiNWGzx7rs1BsfEUggJE2c",
  "key19": "EBLDCc5Cd2nkiEKZGaqnN7MC6N3MfzsJmHychLdsLS6PBPGBMnqeSTdFw6YAbmXuF7PhEjhzmgKkqwqQKPnptsh",
  "key20": "xMZVpbkuy4SnDLcqY6RwXv5YzQaa7p4XVPrBTHJb2FbvGYkDbWGk6fmAeEyYYjahP4k1JEhJASrJrnYZW4ZFXPt",
  "key21": "4PWdnJk1hbZtxBQb4sU7zhe2tACJKeLf2ktYCpgp1X9ivps6ysnFHea17V5oTK2rGcj6XyqU9JnK96A99aREivZG",
  "key22": "22qHTX4Gce5kwJhBDbrtnXkcTrtMgtCbFbQU2vqBVZLJ3w9Sih8Hp2Qh3MK1uxLWFYoKqJPQycLVSCP5VBqaJNKy",
  "key23": "5V6bGZ4PeMrqeogXnLDTTEUyyh93ZLy33HuCsB47Yi3zeYpc8SLUPfKmQuUyTdEV5qmowvbpBaZYkebsbh1gAqQz",
  "key24": "5zhNuwYt1ni54Ms1bMaL7wYGTdkWmtyYKjEtViiX3u8MDqPwmrqmjBaU92edWddjXVeuPz6PCHQ6JfKMoAymTwct",
  "key25": "3xrRBPACUDA6yQzJQ5yAoRtjFHBPnVVn9PnY8YvEk6ff5EDGx5rKW8dsPN5ikAuyUQpR96YsmTaP6iR8HiiqacXw",
  "key26": "2dVtb2UGxj2ThNHJL9jGdZBWDZYK9Ddz5QXM7DfWyFgE8AY13dgYMPRf2qsV9khf6uPGWoUYxVhPPbwHLrQvjgya",
  "key27": "5Eso7K1so6o9v8yXfvr5HgtinK2JRsRQHLJYApGd3QNZ43FkvubM6wcDgLuPBiDnmDSRBshTnHJCHcxBLJTYQtMW",
  "key28": "5YFchPmk4zj8hiYhXd3YpUPeLteSXsVtfG2yNRwYcMUPPff8sigHJ3vmj5ADxZC3Nk4LkVHbmWc6zRhXjxtaRSAw",
  "key29": "csJsQdefQ3ibXtMWTSf13M3c4zhai2MJwyM9Zd1DivE2HZsb1N54hMt1qBWUTV1ts1pzLj6nVSQWXwEJdSjvWSW",
  "key30": "3KBeQS7mhhgVNyqzXPsWCwXdvZHgwArZbZphhWWqGy2g4tm3XggWw9AifQLpfq88Dnf94YV6Q2cB6PZX3NS7ubGT",
  "key31": "5DCeYHuZfdtwNR95YaeXBeg7P5jatBz7roCyKDXgFCqshB6woWezDgcwtPwP8kwRBuCab3TxiJpgnLahEWVFJBVm",
  "key32": "4d2kGBQ4EXgKGv5UdfrJoxu5aAWdEuDGDWvWehiYphfY6TaM2pHdVC2oZSqvkXsq4E4RZkG7STmTmymX7kS8NwXK",
  "key33": "55mfytJQYR7nKGmXRjZEXEwpSQmDA9FMrjpFcYR6jwRL1zQv9TqDDWoKAtaf82eNhhgx2codFJPCz6B4wof2U3iv",
  "key34": "53C2BGxUBdUnyEPifoYEi8WiuWHfT3yAYbQenhwRXooGTR62N1KEaonbWsgsqwLSWjbBaYTb4eaX8sSpmH5s7RGa",
  "key35": "3DhehANQuWyZHNxTiaq6YjicLtmMqTv3i1xB4tE1Pv2jH9gYiR5WTXSvjyre3BAB4KE5XFkKhXSYsHommw1F8ap",
  "key36": "3ZHb3y9asZYhUnWPDW7C5gPCPywhC1PxzWHdYBLTHm2Us5Eiv5uC4a6BbGhhnWbM2vmR8nV9uJ5Qa3MwJSavABfz",
  "key37": "5fH8Aqu6JZQMgHxh2MjKfe6auteSdz8fp3MvDJj5cFCjtLkgdCtMggYaEEEw7dGciTZiWmKwKgqh9ro8uDh6STqj",
  "key38": "4qgMnbMyGgq6kRPBKCAH3TpqXyNDCX9dZDWgRHXL7Rq8ZBpTSyRoGzVRC1KJQAPRsmqbJv4DGFy2RwK7LNDB9gZs",
  "key39": "dLh23MBMTcmQwPNwoooJGoipQpdzRHFh7kjmft9u6RpBm1PGHrGKDw3D67qMT2m343Kzd7p8YNj8q1XTqBDGBbJ",
  "key40": "3ai9dJ87YZYffkL2dSL1aAyNyYhjrax7RxCZWMDfFWzEEsL72B7cx33a7hczVBUfxDJTyYdhX42HfbeaDN6kQhjS",
  "key41": "xvEEpu7H4LXY5cpSSyKfP4SPugv8VKnJguK4Sd5K4ZvS73Uo8G8XPGqRmkH8R57SGC9mSPvLYeVmKcSSvCMzvD4",
  "key42": "5AbAgFqkLvS5zyose59t1PvF58A6H5yhwYZ5R4Xr5nyGD7Hm8hymU6cycmbRjf5h6uvvc5oh3GdFDdKxBR2RenjZ",
  "key43": "2gsfZrbMG2TaNKpHpndKkRFymEgyFhH1AYnD2t69NxwFZbVsTdw9HaHWmUace7TTkiZQ47aihm1drmQoEjYvfgpc",
  "key44": "2aiUhWKppJhh8muPgkhKJEn979ng233rPJSMDEYTTbWfvDSwRw6Kgtg4JUR8dtrRxVYyEMYhViikaTASmY3C2LGw",
  "key45": "4s7Q4QzCbvbokriJ9qoxLBqxQcibpEfKfRcjrfBjrVH3vgZXaDdRagZjJoQ7jQRJiP6sTBNBtMmoVp3CJwJ1pnj",
  "key46": "3F1eFRuAb8LYuY25nBfJwvo1NSMBurUW9F8xVN4c8e1myFobTzr8gVxoHMk5kahdZyKaHMBfT4ouREuK5xPbrZss"
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
