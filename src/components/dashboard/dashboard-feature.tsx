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
    "3r55EvAe46tt7zFqJ49nCMGjQthW4so99yfY8uzuepzUw2gAS2RvzZJK5JkysTqvHMwLrjWekKdWv6JdXCYz1EV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EVCja8WKf1j8tbBrUekBShce52gH2cGZY9hvgsPz9wTwCdwvhUHRTFhEX8uUWd6sxo6j6EFNrRjAorWExHmuxTC",
  "key1": "4guZZtc3rAZQV2MjHtQkbZ2L8cwViB97eARfjRh5X1VTUNLV6RT3axyzXkrrCKj6yyeHt8Wi28DamLuTxJ9mfp58",
  "key2": "34vGShv3W4LYzDTRcfPAeLGgVAhiR4dy9St8vm1zBGnU8bdf1UFjpHQisgeCFEYqzyGgWc5EvHaC5hjErLSWxgwG",
  "key3": "3zZeQWAEPqBS52w9sG1Q5ew5SHkJujrkWTW3zFwPULJNVS9Bh2jkpBUHgktp4ghUJXykm9md5UhXF5KmxX6vLJbE",
  "key4": "ZQwq6MvUhgV1DKTJsq3YSVJ5iEgpKyymUm3Z3HvBNk3YRUhx6Evpva2XX1GZuiDR2dB6pvorrLU6GDWCEQamEP6",
  "key5": "5omrBEA9rXwHBz6ZP5mcEhPKUSzNZU73PzVGJiZP1RkUhjBHi6QBmjpK6eftWV3egBBKJmLV9qmefrdBG5NqcPt3",
  "key6": "tqRCSs1kbyquBuDGUGiRaKpm3tuwAk6sJa8tr7tvzCThpa1x7WN6XgRV3xHsgoR22c2KbQDxE52cBUHNxTHf5KV",
  "key7": "34Xk92eEEbGGZr6pZQ5S1mRpqZysZsToV58rJz1FwqfQnHqV1UTWZAe2MXv17fArFFRiSfkNGWLfEU4sqZw36pVz",
  "key8": "3YH8kGFHUnJZN91DCUGW4GwCeQPj4oxTTEEFsYYQUF81c1dHk76jaEGp3PsxwXrWZhMN37eDz9uySHBENh8uoSYX",
  "key9": "2GTvGKKKze6KokEYRwcu7D91zk2wXCy7rHQncyuiVqWp2iEoYGyb9ezjb4oMfe5vhx5bRF2t5BuypSfdw4ydD1gC",
  "key10": "2FwRTEeKF4DHqSSr8tixAqBjYgV5LKvgFf9pvYQj8rLmVkEgHwF3W8v1zDbDLkuTU6vgRj2RFfwxZy4QhgNuUQbv",
  "key11": "2hX1vZ7u31dxKsmwkMtuHUHfYopmPzNg33GBwC59GnvpVoAULsHHHYt8fmn89PLw5i7G2nHW1NgvDqQ9SwJBxf4M",
  "key12": "3MaTWbheoepiHTWvr4DXnboDw3jGpM9o2gK9KBeuzzCyjUUUrvZ4HdG6DW8Bb2fpu2NN3DX7yy9gQL7VNYu4p9Po",
  "key13": "3eBccb9t53i8ZwF7vZs7nraLmtiV9wCSmrksyfULYhaVPAh9UGZY5TJaPJQgdnZmBotT4ruZC4AJJxmPFmwsYWdi",
  "key14": "5WPdMgLu2iQkrfqkkz2V815pM9onnnbb5CEaoTT15aXmH1AQrHWDC6mXkeu5zp69GqcPF1aE6tmjvRX3TJfzwGYm",
  "key15": "4eF4KfFUHzFHDwLLmTjNrapxnajaehpkKSihqnJsRTtQJyVdZrfH4MPr11sJ18hfsTn4MSRJLW1upupvRWJvNa29",
  "key16": "2CVVpHZJZySy24af8N7muRS4z8ntNFdiMtWZ36jdSMXcStsYzX4Hj7ozbtTmrb7FPKxBcXJYfAXjX2AtebEUwBBt",
  "key17": "5GgjixaVAzE1SWHWkELei62wB5qSfgtyzc6UJgJDnMoLgDDQUskRQX8eBRPvg68nodW7KTrUoiTbkkizrNmecraU",
  "key18": "49WhMW3vMrFzckbGmJwupBN5o9VEyPBc8MR8WCXZVakXMNFZgWmaRWpUgPXJKjzWMtRiCuRksu1h1KWFDyuQ3Ejp",
  "key19": "4S8jaRRRupRpxmAHvd6us1eYbBxdejbjCyy62bed1kzWv8GtZaXBSB9Z9tuMRnbtBdawFj8LmzXn1u5Z5d1zooPE",
  "key20": "247rJhauWYGEmUcjg4BcPg8FKppsxoMtoi44bLYycVwpg3535nMU4VX2a14MRiswwaeyi7CZNzX1C3yErrJjPtbb",
  "key21": "4gWYB1kqzTeB6tueFVpiBfWxo7CcxbLi1yEcAcL3wd8LVSpBBx1oC4fPX8qHtCBiy3oVNFHtLsZaT4NMZSGpnx4o",
  "key22": "4VM5z5prhuW94nKTjKjiZaQx7YDkquYHFj9bYkFLVAEWV75EfnVaLJeX4kPM9XUwsSXWp6T993FppDanjVR7eia8",
  "key23": "25mnmSyB857mx2eVC6bhgQru7wQ7ibVcEKygAPLmohqBwmJyT1uEgGKGcMQt2wBaTP91BBpjVt3YmM8xGkS8S6aE",
  "key24": "4ygmR6zMGGrnJgvjQqNneoTnjB5nFkV6hFD37DajbUdrq4YnM7Z6sc6RYdcsySQaodgnTjCNFjpjKsuTeWrDoupt",
  "key25": "2HT4yBwHXLFgXqGwYfsVmw998cUCcvhZJ4hmHPeQkRfCnokH8BGi1vUB7mQaUkcQTNDQB1dJncuWoZHiSSqHthJJ",
  "key26": "2Q2izj2921eH1xwkbTSYmT1d27zpkjrkK458Wa2TKEVy3GbEkLFmCxEYWs2Krd1tSfnu3HGMCUpqjaSJ3RzDodk",
  "key27": "3Add5B9CqCqYdcDeJpzmKuoPoXwsmnpW3s61p7CEVSM3t7zB3wCyWGAnWC6c934Kn4kJo7X1V2q51cJ2QfgMpBej",
  "key28": "4eG197hQoieHjLRNSPDjYZnF51qJtngcTCuc5Wcv63bRU2ZE9dDDiVxQ2RfWpesKdv9namKGFPh1Fqgj6qjpK46H",
  "key29": "PiaXh583Fo8rvmT7avmyTXR75u9eX18Qyo7ZeENsVrdqBJ3y6HtQuVS2jKvtuguohWCBo5LxmUXF5Yr3RutHVQu",
  "key30": "3Ux51JWu9ZMbCpnVLHTeX7kSPgLMFz9rpVKr2LzCDaFriEe5igu1WPnMA1QcowU9xMfbvCQJisdEBCCdnpTjG6uf",
  "key31": "ybV2HJccnV4v7nhDcBhNAPchSyF4yj4n2H23FYrSPemvmiEK5bSQD2s52RyV3B9Pb5E78PRf55RYxWy7t33kHz3",
  "key32": "as3s65MkC7HFjgUvX6ZtQeJd6d6PA6avQLv27AyQg2ecVqbHJt9A26JBoqZdMQBshAJzoohvKEThzqNz2YsaS7k",
  "key33": "3WhFWxq55KP7afv9H1eQJe2Q9mizrKs6L8gch2A1XtNwUJoxwuSHxgHsvhpJn9ko7G37azLypti993ap5QM94h8r",
  "key34": "45nPnCAhMxcySs8mc6rPABi5bnQRfgzsqdEezzMn2rG7VAtJS1tEM5BX2JzzXDZGsTiLPMjNRFdW9LQ9toNYaDHc",
  "key35": "2BPKvPrmEXGxioTyhNoZgtt4kAGLk87LCs25rq2gid3d1p9xzt9hbEzX5Qf165NUCVzXRTsD5UmUSrpE27EruF2P",
  "key36": "34Ze4v4zrjgGrP7663ejAY2ziCju9j9RNEWYf5PmCbeSfmg14Ab7qAvxsQjBd2DUeYwk5zu9rvmr2ASx4bCAerqg",
  "key37": "3u89L2dKuBrsqrHrcASV1G2S6eQ5tpqRKS7WptxkJMLGmpJix1u9h3znohSyM29VQqgkT57hDsZYou1N4YANaa6R",
  "key38": "vHCAfuY7RxxUatC9PZJE1e9914CbEzvvHw9kocUJVDVjcN4rfQ8EDNGBjBW7JNowMdfcXDUiVpNgehfNDsfGKFg",
  "key39": "61iymGjJMq96LwMkzwwrpuaDAJaYVQgVZVZeH5fZaKFu8uExJb5uTFMgFTq7J6aZ7McYx36yrwU71FVsgVKxfMPr",
  "key40": "2Laum31SC2AbJbSww2WiggxHm3izNhSDxBSdK8Cto6WQhhDndVDVrGN1bM44wrqejoCpeXcdtUxgYcnGcR5biEUt",
  "key41": "CekdBWXPvSuKJxTzWY3H8p1Ngn7qaaR5CzGUXbzdQ5JVPhGBPZwUpWyGJcWDU32P6jVYw9hd9esdpJqpe2KDjse",
  "key42": "2eeh7xtXGMcUcBghkZTpSXBV9fS7hp2t65rdGrzhkrRquCeyveX5h6v1aetUawQGceCHUx9s3ieq311Fxb3UYHp8",
  "key43": "58yb5eE3aF5XkzspQCAZCw77zMniLH3tHaqPy7vqv3YfQ5ZDrz7XyatmBXxMGn5jGvXvWYnDQpQjg7NNJXfZRVDx",
  "key44": "5fQfig4oLy9PZc4vyYthZinNRCgc9xXwKiniH3d1aUXvC6FAShYAEXQ66Uuhopp1DjvahPgXXKGWCB4HziXaVUK6",
  "key45": "4qmUtyY2DPJfNtD3Ra7sBLUTydDHEUbYfses4KhdEgiYSrQk89iqo9S3rShTtSxvHaMWAMvxpJAT3WhAggBBd9T5",
  "key46": "RcEx8AqAS6SkP5ivWhGijr5WTPw4pyZCbz258ZNKFUQHEE8jQRxPLGJJrrNbFsF8KMd2h32681AEFgcwXqPMpP7",
  "key47": "3r8rc3rqYsrsEfQpXFgzU1cRBCpC6KNf1Jtve4RJVBruETVKy2oUGvoviWL8nDPtsnkMBppVhhy4g4gCNajUtDLh"
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
