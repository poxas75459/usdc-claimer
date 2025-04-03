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
    "GfTJPQVYSGY65TRFPaSQf2hyTkq1JSe3n5u9Kqt65odCQKGMH9kcee5BZzMKiFXDr8PKpKN9WXgxUumdU7MRggG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34xtEYwe6vXA7X7yyFFnx3V4LGnYPuU2sptk2QtnEKJAhMxaTiq3mNyLmqVGbADNryvS52Gj2u2r2dxH2XAwN7kN",
  "key1": "3SBKSW1DSwX1s5tjMS3ZGqE7YekmFCe6dJtchNgoTkntsiek6p4EYdMygjcbSXheypwNupQzuXiNAvADB382dydp",
  "key2": "2Fhx5dURGs9kMf1XJKtd2FWqhVVw9Uc9yELqB3zwEj7q3Mk4QKiiVbVb55E8BYcbYqFq2BqJ6A1WyFcmbgM9FiFG",
  "key3": "J1kug7x2gQHAyghHPwo2EwiVBvWeJkW51gdhYKcRZPLoF3LKTduDHLKQiSXB4rCMnqDTQvjADkmXEJhSJvpg3Vz",
  "key4": "28ftdpijAmw2xY2Xffkjvdo5QXUzo9D6gs9sC6m8wUPw1rfYQB8u6wvHZMQozKqnhGiUGFannCDdud6hcnwiFqsp",
  "key5": "2UYNEK7xMegpkaDjve3FLL8aoBupb9qvH5E2Eh3FqTJkGhhibPH4jcVREVef4zRtBizgqVrTgrBjpQJLwjfkwguh",
  "key6": "2KrQbT4VJyDUuvycthM5FBtek9dXeFq8PpoapkUeLogGfRgLuiZQBVLt9pCov7Q5oLrM92T396oRaVPnGxYPWGBv",
  "key7": "3Bd3e3gBBDZqoUYNu1T68UJHvBUMkHZi6UzfiexvywkBDRoBEni3NcoGSF8Jftn417AphKQTSXJjahNeMiCX2BeM",
  "key8": "2vydKmqXiMjbALj5BxqTikggn6xFzoRo4JAWCKWFfR5msBWHoVaFcdvqdMUEGu3PoejbWuZGR35rMTeHWnzFz4np",
  "key9": "4kcfP7ds1q1DMv4DsLEzabHXPf8YomzDrw2hWCCB3ZyvwwQEzwBcMC6fjrzoPsnCCMyK8vdsRiVt4jBsgHEvEFN6",
  "key10": "3dMACyj1LH3bd8TYDUxPYYYVHvEbMNxcUAPBQHjBZ9jXBVRxHMcA9sdXNK6otabjfS3XWS4YL3pMLkLf8yUABNxD",
  "key11": "WFm51PhMmgcbCpB3qhCZxH6hV9owiuqRbbCDVo19PpVvui1ns1C1m3VX6YqypyrhEWoF6X6rwjbgWRdQxMPzq2M",
  "key12": "QSTxMPypL5i5JfLEqgNM7J3bAoPRqxEvHz3A8m9MyxCMyKz7AwXpgitfktYQ7wdCcoF2CSERqGQ1MYGjdqTbfQa",
  "key13": "4N6uHM4wgunwWg7MbPsBNNKCXJHC5d6uJ5jgtEmTNg1oiCfj8jZdFxgfphvvpXPsYrhgDkxEWdFnQVnxkZiQzomv",
  "key14": "35xX2MZcqbkFCbaswkFqvduaqCQpTR6MAkryjA7XugoeYtCYaiCufsmdCGYbXFJKUoAjKAKJqBevgmddLgDTf8n4",
  "key15": "4KP9XMRQgfs4Vf569cSNdwT59S28hAByaCjBMUM4ao1dC9aNrcFMSAwH1XbriZ2ruh8xx53ydckaS4zTHW8T88fq",
  "key16": "5wonvnkk2yZ7aVLobPvgWfcFf5YxgavjJvFJEYmQ7ThVXwCP3zxQuywwWVoD5rCohNtkJJvqQseVDHCwdjNUR3ZF",
  "key17": "5aedKbgNkKAxuhuy2V6HzWuHB9bWA6pdZgMnU56F51Dbr1EWYWxUupQonWfbdzCR2TPS1sXzwE3V6LAjS4RgF1Bw",
  "key18": "3qMBPUFq24xndSduvfmoWT7BVHjjDyXixsE7QRiyfFBQkJs7NnX1rdWHgdgoNMRs2PVR9X1PpCJF4f6PqzmGPq98",
  "key19": "2qGjpPiGVDUbazQu8YemfqVzLeQW3mVCX3d3uhdxbUCBK71NEcHV9NSRqy3rCWhrDcKT3iUVMy8Kq9kLquEbqQZ3",
  "key20": "5YGrGzZ6tA3SHfzkmDMPkpdbE8JNMbcXoULMs9uBweXRLsrDoeH1v5iZAFWnYseyGr622nuw9sWwA93AUCUB56fW",
  "key21": "Tb8tnzT48br8qsG15fF12rchwmCWU9cWqEaCTFWd7n35foz1W3gxVz4vuFw26qFG53UK7sfgTNasbWxQG1JgfDb",
  "key22": "5CWpWGAUuNsN3FNhCuNTuBT2KNaMnDFyrcSgkGFZjruxA6Sb1bphvneWppqkxm1w9XZoy3tMbJQX7ctLrUybm8id",
  "key23": "5a6YHXxXkMPrmNYmVFFa3AKLRBZtMRehYoxtjtBjWftgFVXR4uAiJk5LToiHPmbwCGebMN1AT4Qs7pvwpgbJVSbz",
  "key24": "2cVTG82uFrcuT6qjo3nxvWiLXVzWEVPvr1zY6Eg3Yp7TdbGxbJVNX7CqH98nMuNCLeqnN6jDmGcc8vPqx9qTgBjB",
  "key25": "34r5Y9EZXiMtwrB2cG3LkfdfihgtSUsAczyPGUvKUcXVXLHXnJNCxiZBSzYrXwHH8ja22qR5Qbn9PEgj4stJBZAp",
  "key26": "2FqApYURv1BfuKFFezjMzmAa8ekrp1xFtSpP18c5EcA3LzsjgTcGczPqBirp7ij4w6oZxS2hn9LrGZdEEQt52YoV",
  "key27": "3oxZVC1uqemjUU3x7o2AFgKPZ91fmeQkR7njZ75VANfcEhYNbNi7BZU6QHXWbEiDxMaKBN2yhyaxZHm4FaULxgGL",
  "key28": "4EtKzEY4XnDCAxV6tTPzWJvEAxnKTY1K3iF5cmfYBmw7mwYt2gt52S2d42eAK5fyJBjeQtcJ5AEEg5dc8udcCLTp",
  "key29": "58Jm17LgtnvKLTEuvgF3u8SjWH21iHsGfJ1i8oSVvEEXtLtLXKAgjSVMgWUq9FqawS4pHTrZHjrmpdFnvWcQRhLG",
  "key30": "tD9q5Y4gvxf4i54wPNMcdrt9WaHZfEBdWz425URko8cDUe3DMBTwq5BmNVDkAHTzXogscLzXAK9iXUfsyrPKLNr",
  "key31": "pvKbtX1cWwSpaQ3xZoi2RVK1kn8ckRGHfBNcNWdnqxA6MJJMbZhin2N4mHoCnA736bwpf5HYvuVRKmh1ApJq7Bk",
  "key32": "eX9a86fBMQy9FwEYAq8gVVSGhGBdS8m5nLiKPfyict7ia7nvgWYagingQ3p9J16w2RhnP5fDZS7ArwVA1TfJwrg",
  "key33": "5b3NW1ifzqRJmWGXDE8jt65ZdgoKs5ELxkwuhGjLyYF75QKZPTvdf3wcoKrwjBW1Ldz3JW8MRc6F8p91uX7FGMjQ",
  "key34": "3wEAV9QHjwGZof7hCXMQDQB6fC11Wca6cWUhyFYB3AjQL1e8bYcRhtx7MDyqSWzdwiQdgubkN8VMPkPPQvT79caM",
  "key35": "5J6DLqHH3zDTBq6Ko9jFihmrtkmikSDRZr7CUvo8QADeSzBP1LwTng1M1S1c4xtf8n6j1T2zhTHKVoKE2So32uyU",
  "key36": "68dpfdkc8nmJvhaBZctPLpFT7YVFJRc8rgCAgKodVBLGYRbMMeDKyatzr3KmkiDPT4TXYVZHXPbT3ycqwFE2zoK",
  "key37": "5XSUnnAcdMkBaEVKJ8hgHndJgcMm4ZYJvYfukRBbVgpLszSETBae5cfYW1DogQ3nbtvRb42n2uuvfS8UDhuSrwHg",
  "key38": "2zRPqjAJHiay6G2KXAGGNHH83DAUG8kbpVQFXkaEwktYJq9P4zq2SVbnwExwEMmpBL94akqE5qcXbtRziWhAuH7k",
  "key39": "UumWJs8iQ4igFhcziMkP8MDkkzQGLWNnzsTjnbRUqWPsN6gQpmoVXqse6Uc1VxcwtzgitgjEmMczCwRzVY4wgFT",
  "key40": "2kXbpBufVWsHgD2kf31u1YjCw47VeVFh8VnJsFTd8uBcNqK9aUxj2HpyDyWsr8cVzktnZHHUzQds62Mg2nzWu4Ms",
  "key41": "XNKVVyWprNei4ZHzrruXZEh1JFWXkRBpBBKnvXJrBw3APgAWTjnQYK94ZtHAxevSzATZxK7fbo9fYnpk62rR3rh",
  "key42": "3kWnK46ggrh3ngTGeN8m2Pq4DzNKd1T33cf4G1DFUPHLBJZoZ93mhsf5thp6d6VfETVvSgouU2FcEZuB1pDKAbZz",
  "key43": "5upsBpc6tV5XBPEoCMvB1eRbvW6LCCoN6kTJgQxDJUjdamwn7EehT1xv5eLiumgXZTtCcDF7i74sys2w3aVnm1SP"
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
