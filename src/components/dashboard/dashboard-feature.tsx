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
    "4ZxGHfj6riAnX7mgVbXfjUi7tkLZaWbqk7w8DX7t9HJKzjzgwVGuDWZMM93RWVxMEoccb1RRGhL8pPbaa8JRHSzm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32dtt9aMPaGT3XvCKB4wxr2CVtZbu6zLGHiQckRqwsXEQSs6Da8kfRHmrpLw43d6JFssChe3R6YDfxbLJRtF8Ybn",
  "key1": "FYjAZSBea2eyvMro4PHbHMQvmBrsxd6PgHxMitLu6wrZNnULwkXxBEKUmN57KXEHcm516RmH6Zr3eP2FwQeV79V",
  "key2": "r5VGm5fyTPttpVj2spcmMmXPZuPbKEN8wRTGvgsj5BZFRUKs5GLWrdWzTyDkRHsSSL8X6CfrrJ8a5t4CiS9HzSN",
  "key3": "5LgzHPwSNa6cxUjm12rghQnoyrf8k2tT5QKkVggkBEnisAiBy8C9obCL4Nzq1m3ffUw3LNt7NzyLdPDYwM4f2rnQ",
  "key4": "36KuVEXSnj861JjWGBcuK5YB2akHeiUvtPx8d1nfvHg1pUDc3Dc6yaRnTDnMaGFw69Dt17kSfvc8qtTFHzHRdCgk",
  "key5": "5BqehGfSsZQtY2NJhUGQUizqh5mD5oFyWqSnk8VxLd9dEtKPAmJMTv92toprtC46nuNkuadzN6A8LHP5tWqciNq7",
  "key6": "5zAJRHXkkaes216FYYTzspr3FQHFZVXLobGoPK2yM7LxA1CkfSsXo8uTKXF17xd1r4cTnZjLLYN2BX9Ssh5ow3AV",
  "key7": "5oz2aZQUhiNGGwvinHVcNkfvSZWygDCxwLacnsuJyZm6XidPSMccV3K3iv1mSyS3SsH4MUVXiu7oepAvaA7P3QPD",
  "key8": "5GwupFMw7UwcSf22QMHE6JhksMZrWbmLk9VmuTfeWK4fSYd6Rnt3xECb1Ru5P7mhyRYVP4kC13q4LdsxALe53hPs",
  "key9": "3FAGu7brJuZ5vVxiHDzE3VvE9D33FgjvoxC3fE3VqeE2i257KXcxQorKKAoqAD4RcE1cEFy6wc6mxFFp3U9TxK3X",
  "key10": "dRmBp1bGjrDNCRmng3mTGZw5htQQGsuYhbm6BqcWSznSZ4KNM6H5gS1kRuRdDAu1oxdXvXo5azWeeNLqmxkUVHU",
  "key11": "3rkpd3BWmdXLgSs8p6PfegNmrGRQMWg7dnjMaf45V1sQeqMrE7i1xmrmALdYCVDe77bf17rtYWJWY2VGh5THemLm",
  "key12": "udcBqpeaaHYuXCPvHbXs2yBTdAzuSRWijN4iK8d1AqzsaMTXz2fBk81Xx2Rs3GDZk5LpenaFf1y2wzWo1ieaVfA",
  "key13": "3AZbGbawwaY3bmSXNmEa84mwuZGrxm1i7t9YiQXFWB4efmPihPyXoS8HhPPGuYsJtW7ytx9Gqa7R2Azh6dBwwki2",
  "key14": "5tVtzzMKhfhy2CoudV8DKC3Hf8dhjstPK8ffg4K3fKC2aEkNCYS954FtqGXCrhzgnTPo4bo6pqotvJ1ucBjoiXSd",
  "key15": "49Ha9Vpg5e1EoouMorbPybb2MBEHJPrzMBxMrp21kyRteH9X1qFjgu91eq1zNKKtYmiM5wWdpk8BHQGCxJWoT521",
  "key16": "5Ja9P84Ha6a9otcVTZaBnUhBbT1QsWuMjofZ9Htu9HsKNf6F1py11zKTS6taHPHSPGdDDMGr9Rc1EcSeGp7JUpy1",
  "key17": "aHcHph7j7io5VUkc8oXjQfz38Ekowk4wowqVbgzU6ztp2zbRvhVidtbVFWkfkspwkxbGRmUBYxMsRFKu68dsFVt",
  "key18": "w4vjR4ztjyxi4AGs9HSskpxa2f1cCuf9AiRJpP8Z4jTSTUBHdXaXEsDwA8u9zd15jZmSRtBX8eiLn5t8Cc7ddVP",
  "key19": "2APkj7ELw4yoX6yBMLydDXr9UJcRVwTQv1T1MkT7qBvEeuQRp4WXwx7szHUxPzczZYuSmAfiLPCgotgvjubu9XAw",
  "key20": "27NW7y9LbMMnGMBpCSMzaMQCqH8oEoL7YwEq2mpfPwTFAdrgpfgWtMMMeNR9gz39r5BuopZuwhoPxNqwPKqBwQAB",
  "key21": "21YPE5Fhx1o25KHE44iHqBVehS9KBRdDGVNeUipyFkrWUJm92m8mC7ZUyaq2M4Pd4D1TVTEGHTr7wiJPLTpaeN15",
  "key22": "3wf6poSi1iqNZ8CX6znRewyXumWjBWaRL15fjJKXHmcsPyrkmQzxv5N6KWvUsv7qfbV7CTWneqk2uDn2nJPeG2q9",
  "key23": "2aRvPvbEyrFpmF56GUEmnEpB86FtDB28RKreRuyWkku129nHn6PaxSZi3rhTPCJKmwj1u1p89wLGSUutXwer2Skv",
  "key24": "5sDnpfyMprig4hPgrE1efpBZ7M79dJ2ZktSMEUK1cxY5ACZqSrfeeRSzRRKALpjkXeJ9XDzvTy1Uyvi53Zx3TFeo",
  "key25": "3m1GaQ4baaMJnRtAdrGuQk38DmtQADLARZv17BZtxnAbe2o1v5gkMdTBFGBCbvtWbSxfDWMh5K6TCad8dtaqFywA",
  "key26": "Vq8xdZVUvRcCAffe8u2pP6ug2fyLATocKfbpgAE7BKAhvMb8c7kuq4GKZJLKeRD1hSzCJPRbGHg87B6nj4P9P19",
  "key27": "2AmWi1fWgzinFWhou88GzQ3unSbf2MQLGawAC5zYwTRSQNEmRLVRqcvD1XPEXbGcMv3pYbqe3vixhotaCK9g4LcW",
  "key28": "h619RhCNQnXTepYeoLyqKmY4QkXiwJ6na467vV2G2xJzbGKbN8m8JcG9GMKLL88DFqx7FrhQGBZmFpErAUjQogY",
  "key29": "3C6DqsMfKTRzFw315aRe3nrFkTtHqvRYJpLt1yHQ27FL4FvRVZJqmNuGz8sHAZoz68QCnWgKwcVUSzTeiutaiqaG",
  "key30": "5rieLkKEqdSasZu1WBhMwrBDVePTM8bUUvy2dghd3nAnfYP1CAbCGn3uS5yygw38W8yuU3AK9zdNWUiminkAWEEh",
  "key31": "2u8S4AF7BsSUDtnQsGzPjjyiNGRWGMbZLZS8wCV5TCDpReTJGJYiSMJuAqeZL3z5kutb22eyZTqkdwgRE4neoH8K",
  "key32": "cTDXWdLPrRw6k5VbHkT4NNsL3hpiAhKypTWRho7VaXqCzqP2vaTnQJZGpc4z8SrUzibQafPBKDATgAUmg1C7KdJ",
  "key33": "2jhTP6i2xTESYmPB86hUuTD5kEQyW86vcErDNoRDcKAVU5NjVKusqApgsnKeMnefdt1hGEv6zALuZmHyp5WbLp7n",
  "key34": "2eKUW9LXrekwWQmyUzuwTKDyCV2tA7L1uSM5WQCw9wGXNAzUbQWwpaAauLodv4XmEzDLvj92qeTtwHESTdHYSHnH",
  "key35": "uGReJ3aZNLDZN5Wkd2m3DSAyhyjBJX9BVs1Pr2nao7NTbt6DsaxT1AjZ1ixF9gEuxgWPhHC4HLExfhXRLhcmqfa",
  "key36": "3yczAqPDPuHhH45zn28sFeukNCgxBXmRq6HGXxHMkbXxHSzJq6txGQZMrDc2XywR6pvvvf6qfK2JVn3YFrQ5E9Bd",
  "key37": "uVPJ5ALiUWKa1TX96vmMcXSf17gqyPvcLAm85E3Ee8gPRjBRgxVKAodmihovUqBmG1yP259Jndipg864BJLs4KU",
  "key38": "66nCkCfnTyq7LbCb59s5pBuSybWgNHR5bRnm3Eq4DMAuyBHycZqTQLXNFnoHMaVFdgnsdMUN3GTASRcG9XDDaFBL",
  "key39": "44R97DxJNE41G4CDSAsWEcGFtJmE4eo3J33vq2V2LAxwKDZuMSiM5mDK5m4LuUeTjrTes2v1r1NALQs37XNmpyYx",
  "key40": "4bLKETsjKFFXaFUSCtafzXY7gHyVBk1wvivFhmp5bjU6VfsR4XxmmSSYjZiNJxQABACmE4MvdsrbjWBh9THyeKXW"
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
