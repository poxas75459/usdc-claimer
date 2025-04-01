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
    "5nxNBEpJuFrKZRRqdvz8nmFF4bfUjMvSShH2dUa8jTJCYiMGiQSawLro4TEkxLoJcvFWzyQPyQibubyRxk1ChYC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E6Pay3xNidunZiKqVfcQozDAi6vKAnBtnD13ZddT4Hah8dZEhSz9dN12YkdUGX97zTNAWxS74ZeorkhpoBC7eF6",
  "key1": "4jDgPoevToHy1uQayyWEPKtnAbdqgnJjdQr3BBaPweMY9TJd3fZrJUt6wVDz8w23xCFQKhZ4YASS6am3apxLtAC6",
  "key2": "4sqzfQobzTUm91y84uRGhJfRdVSkyCj6jSmg9ytWqLNa9ocqTtLqcMD4KxQ5bnFpE8V5o4Ch6wu1QjwzuKNk52AV",
  "key3": "3XM7uWYPhjXFJwYqESFsB9ZjFXVyZtPiPaooDATz5mjUQPDTEMw6gYCKxctC9ySuFJGBWYJx9b7u2AuL6gRVDcV1",
  "key4": "5XRvyAyG4nYyULg1zMjfPZBcT2ciJUGaRiwigVdtwE8q7CDtsvVqERJx6pEV9uEsBvHV9wwwxbYFRbvygY9PW57u",
  "key5": "QfU2TraXniMb1BBFy7fPGPrRpZkZ6Ht3yt4UB8MGF5V3yZngnQfkAR7HbxyZwKyVBf3c9JCsL8eiXhqWiabxn5t",
  "key6": "g9kCoEg8ZeHNZK78T3L26kXuQdkbkpzLtYZ8daosCcBCdn5hxaKxCB9eXYg1eDvbPq3b8JK1wqG55SsXW6GWHdk",
  "key7": "3T1oc2KRcKD8fCXDHLhDqVtBGyY2mR4xWRaV1jBHFrzLeYrxJgwArsETu2PxtBuX64TLmuZkvcAdG6cjtae1dsYi",
  "key8": "4NqKNWbLCJP7uixFiaGrEq6b8aZv92rrH4fJRyxUuXkiP747wjjnNYdFu9EvX57NCpVV8qovmN7nqNdaXicSiZZt",
  "key9": "5JpPg82BLHrfgG4eDjWpEQkAweSxVVPxJCgXhz1ptAcbYhnrxUfEh8CQRCTLPrGJ619BqjruZnWaEypq3m3Wv4nb",
  "key10": "k2uEQ582U7nCDfH1posrwiCtrg1PF8rYhjekgocLzPaqAaWmzwjtJYYB67kdDn6ff5i4PZYgt9oEqvN1XaEgj7n",
  "key11": "4yqj2V8HukGoFtg4YaAQ7ittrhi9AYbUWcfZDLzB6Crwsw2HN7dkJfSqgRMKydvqEd6VpFNbm6U4AGnrSCRmGQ4i",
  "key12": "5dWP2oghyy8JHAyFCrSpeznkAY4brWWxEfJ5Ls2dcePGPPmTpSFfUr3jXDXFDL93jLrZUJEYLFBwqidpep1ubwDM",
  "key13": "3zZ7hvw5i4MRvjZkCJ3FUZ2KQ8EHjSq5MeqfbhEfZgzVYAnrVURdGCmr5LjpPHjf1yWNQTAGNjUULAPey3u3jZ7V",
  "key14": "2n4gfCMZq871zLzomxg6bSFuwWq2CGmFTVwBDVb9sC6ygSNMfVzNkN2DShNeBgs3g71KK1aC7BQuKBUesasw6t7e",
  "key15": "4pk8cUFJdPCfpBUBHAHYdBomU2HZ5146sDpKfD1ReHhnw4iHi1V8Z5GTcwYsY7kMEy9RaGemPV5bREm2ifEnu3Zh",
  "key16": "5qddBgagjympnjrF5MPms2YcdpVaU63QGkAopAo2Bd4xD5AtJYRM126YFvEbbMVg9RrN6ZwanF7QPu4ZHrJq9Hhu",
  "key17": "AxzYovKLS1cmvo51GrUsReu9oHnUqhebBzavg2uGTugW7d77xiSUrTq2CpBq4Pc4Mzx1tMN34PqKR8TA8Vi6GTn",
  "key18": "5SGNpM44EEaYCj5Mmh7kL21TzddSGYhyJcUxGpkME16knJwQ9hLpgrPb4tBfscr6gvVWV4pR9ntVWekhL35aCxeK",
  "key19": "3PTnJXfSLqb5F74jMiSsp5XtUJfgidf8jSfzq6iUbxvj5gW9pquNdcCniT9z9URqKzRfwKNsqQrNkjKVj6tcxp78",
  "key20": "4GTZsTrRtsen2qhZNNKfQeZBkarHQj44nnfgzyBeYVxHc2RAmeMriDtTa9mPhzfijH7JcdKm314rNLfLVFM1Vci9",
  "key21": "3bQKrpKwwU1ZGhxxhAvu9yeGrsnBWYivXKfpvb2dzdGDLQmdxCh3tSW8YcD14aBXLV4VnbSd66HKNKsdmCLcGK7Q",
  "key22": "4rXNojkXXZC6ga9LXr88yFPKE1q6AvNB12drgei7MAkoB2WdmmHRojvmr5LRxDbXEfTvV3Uxing1CP4TGaVX6gV6",
  "key23": "4Sd8t3S81P4R4itNoDwPshDBNt3NDzttLJgjdVKFqeEAWCrrAUnmaMuS85UpGtsWKapQQtCQ7d8cJfgEjHnQYPe1",
  "key24": "5kEsQsFs4ZkfSyxbGU5FGADzDhbBgMTpyw1Af1fbGbZJNjvAc16p4pVtgxMtXVkBRXs3w6ZeB4tUkGYzhcBqt46Z",
  "key25": "DtRWmQQw6MM1CdkchBn7B7UhF1JQrJnx38ByFNQTG1wiFn3BNtGWGHsoyKKRXnMaA9txFTKLPEvupsU56x5G6WS",
  "key26": "4a7mhkrB89WgpxgBUM7JYxd6oq8n3W5Kgh4NdyqFhk2U7rcqCbJCiP8MQfAZp6k245NtpvyMuxtwVTyRmXmcWatT",
  "key27": "3NVZBwx7oKXAXPap986qzwaKrWeYLiU4WsrXGQgBnzzrQiWU64S9gQ7igEKwaCHnMTpiEgiFFDi3ev7oJVSXnTLj",
  "key28": "3vNQFxtH7Dk8deiEThRaZciHk3BVsQag5JFr84Hgk17myNTuh9oMvNddSriVSpUxz8VqVMaVd1oSEYdV7WtcRZ3a",
  "key29": "2gymUcHnGCtdt4Uc23k3rbPeLncMKou1We2p71qkWJ6Xe5VUALFq48NaUTWasaPkqeT6mSrYqRVGvks4LEppcaVD",
  "key30": "2hFDLUwvCeSBh445pyPxUG5e53hyHJRXMhNSDnkXYT2nUAyUQBC6RjjD5Jn3TRRirKjUqNhn15Q72JkMsUbBDorT",
  "key31": "2iZ6A4y2RoSUKpp7V3211trsKjsYpJGBerNp2T5urrH3DHe65G3E8soUd7qXAvf5qgzZ9H5DUbj7dxNfFEan2x6G",
  "key32": "4YnAg6952FenvdQz81RcSq8u3hSJv6PDdNuAhSrZVyiVdzTvgSAN6ArBsLKMpe3w7DYWw6iuvcG5KUWctiuBoDyN",
  "key33": "3pj1JRAtp7hLJVV8DntZ9PopAMA2BkBku5Kdo3H8PUFpfYUMzmv5mq2suWmYqAiEs2sofozvjUsENKLAMRzpu47A",
  "key34": "25C3TCTFv4CUTJJbsCBr8dAQW4i32uGiuvs1Tj9PKjYMt5snLybXWSk5UzMzxi89NeiJxNaK79qfNQNCHCv4qbJq",
  "key35": "4pM3CyESKW1aEh2NKuPK7w9y1z1ZRDXQHXHp7kanxHwGuaTiwgQsk3jpDeXcfb1wM6eV9dZACrDpfn7aVdHDq9ad",
  "key36": "27GUQRcPPnVBxy9QttQuQ51YA1osBQcM8Vw4uumFzd5uvPvpaDjAjWTT5LhEEbm4t4zfzK6anCsENCdJJPCGPF9t",
  "key37": "3yksnDCiBVWjVoGjnLrw9htwyrnyc7nDUdqkB45FeXgj3ETmygzs7qDpvkWQHnFfUQVyQn1kwBhdfEYWXRYYiDpm",
  "key38": "4QU4ogQJfnmgZfiiDNumiRadfeZUSBXLJF9kbaKjsQ4FqbGRZaFCL7Aow5FjcrkZQmZRfNNhBpyPM1pTeH64yZ7P",
  "key39": "34uTSEXnWCVt9FYf6Fffr9benCt49KeQsctjRFpub2DVzEsYmzV7iPaFsKEPYisFXWuMCzrp9V13tmWTnZkbxfNq",
  "key40": "uZi6iTUxpZcQiR31mFYdDAuoPyT9bNseehjKrt1g63sChQ1KRDp647vx5cuLgj16Ts32LiN89ht4Bm7XncgNZYG",
  "key41": "3BVV4NfHNAgVKBz32JFnMPhPWF7rCst2MnMyxyPhTKjehQVAqXpTCdnFHWcntokkLURJ7DseeLW5WaPaB34FLSu2"
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
