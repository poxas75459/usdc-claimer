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
    "tKPNsYBuBcWKi9BjgmY6CWwWx2GDkZQCPRswgAjZ9xHYMVyR1Vwxtc9TNLKNZnSnFLZAcheUVHceLqRKjKensxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRsYqHC7m6UoPn34Ea5heLEYCFSKkqYDLD9t9PVY18yvk6kiPn1i8oEi1dZb5R6NrKzTh5Pnvmj6ofjQLynXrG5",
  "key1": "31MKgjzBAmaeTSmUGYqDHUR9iSfxBUUdaD1EhnbrbXtgneMbEQLmb9eERjhYfmyVS5rrXscE2SDqaxnBnrsrDg8k",
  "key2": "2AbaiedpnXcDNXjn6Qp7aahn45gZCDPt3sMThHh6A6XUgL4kypvA8BZ7WZoFsj9u7JFBF4B7uUjyoLtz3oJxjABt",
  "key3": "3yEtfyvqR9dknsmFZBvPmLGfEs4AHxLJXS3cFoNVyaqPidaPD8TzxYHKZkAU3SEvtPK2nXbxjmqFVxr9SQUJMxrh",
  "key4": "4HAegEHgFJZYjuBcwj5UDuHnMyDdo7B5SyPTJRFB7ihQiWfqiXYHSZ9epUtkNNcswpBnY5bfmGK8hhspBQWEEoF9",
  "key5": "37Sz3xur2hbH8fdQAFvhuMiiESwo1FvFsY3S2iHRTWpxdghhJAd955cCpRvzXUAvJAHhy6Ny4NQ75fjXKQzi1uWi",
  "key6": "nYrM1zEXGHH8R5NQDbUAAcj7kJMAnjnuc9beqoV6LogUK3FEFfYcts4i2Xv4BSeLRtvxv3J5iGkcs2BRR64B2tU",
  "key7": "duka52yGqsA2h8P9QKVpqkw3BZtArSvfhPFJr9SFnEaQFF5umeZ77m6QCwnhsfwgS1wh2y6NqPbC4C8WhKwuXsY",
  "key8": "3guop6gvfSD1Rq99o6Q9JsAGFxWfG6tRx8ZEV74i2UYzrHMTgEw5P7UPrVMBV8oxzf4zN9ToTipZhiG53VqM87vd",
  "key9": "3KYxdKzPoJxwpKpMkQEZSWusixwDRoheJfwujGbGSkiHWynyUcaARnxg7W6ZaVrguXtnz3hhJYFXSQKwSzJ28jSf",
  "key10": "tXtxEnjVYb6a1HHx4579btdrZkgYjMEgtjmv5XGL3n5vgcjHd7rcvZrP47jcrPJT2JZH52cTmmaFkXp7tnNoGVp",
  "key11": "D5ca8y9aHmgUdzEwSkA4XmHkY3geeyPrbrW25bNvejJ92ywhKR6pTnNeDKcdsk8AmkcHbL49YnQ2MtxjMA7SpbS",
  "key12": "5frnNCQUjQhK7qTqEjTorQrCJFMuK6voi6jfr88UEHsaM39kN89TDcGqkoGJ7UR8QW5iWzmYcK9Vw6Rubm6XUuHy",
  "key13": "GpLEhFaNRtiuv4C7a9MPEvbMhJsw4Q6mqHGukVHEm38c7nVAoGPkMEc8hHvohfoX1QqCLnnTtvPC1ATgK6Jr5Bt",
  "key14": "5hdHNaXnnGfUhkdTunEmLDSewaT8Rp1SGSWTG78wTh4rmVqDvtQHYfw8yYj5FquZowcLm4bt4Sa3C8UwUrmX5dzY",
  "key15": "4tt3fDnJNDdtn2cKTdHceEhHsYtXm5mX5QmTR2Q6iRAnXxzx2ewu3zULXgbzqUDWTdRYNuLYfjyGrAxZjmh9cAce",
  "key16": "5QZYLq2mj8LJyTMAWYCv3mfpgWG4mx1f2abyTWcWiNDYm7xkvAucRMnbQQSLMgsds52Q6TeujEKMzEJBVKj1ZGnK",
  "key17": "Kfk68L2VR3pxG61nTsqia4EiPWEhuxnyYc5rDeki8PQxfiDj5vkz7xbrFjBJeWv6WVFiodNWqMqoseNAYPmnjbt",
  "key18": "4Xtr3XvSzhReRrxPrgFn7VvaX6QAJb4FXzCVKV3FF7WJMu7gbk5w5jnExi9HWpei2SSW6Fm8CqCZVyGiQtzQnhSZ",
  "key19": "kmbDVpb8nC5jY3oAYW3VavhtK1yWbKJCmuqVSsYWyuSQvYmoyBQrjE7pNLuiKpPsawEZ8vdkrifyj3B7XAxb3Ha",
  "key20": "oQ9xcRLteJGsfiM6Eoz577TmfChTDCaMv1L7ZQhHaWiqjjcWkQVfNhzZUuzFcqkfXjwQ4RYwhCxwRqhByjmA1Bg",
  "key21": "49axKBiDRYf1g4UFzKLg27Kj4sFn9HCjJ48eyQEB8me6GUX5fVnTqBagrSjjtrysRJ7XAFMaydUeXvyKFSjqFita",
  "key22": "4PnWCcusxCVgZ1LdwTH6uvXLG5jjuiikvfqqGLunaFHXXUZ4EszgXZ8coDUM4VceLDXFpgpCYxgD1xXj5iT9fr3e",
  "key23": "4robLR8YNFToDAyaxkcSgJD1rjwUoMxvMpyvtZZoc1ng1i374xKAxWY3VvbqvFcLHh8645rrWYN3i1J37mYmjrgd",
  "key24": "34DkoyfX4Tbg9zuHuRQUcisgqZU5CWQBPLJJZPMktU8i82TiTVu2fdPndK8Az4mH3brStLkMggErDAMqdiGKR6Za",
  "key25": "4PKAbdnay66mj8hoEkvwdS5gNQKDsczJBJQksnQb2akrkcaMakTwNyFYXd2JNcHWW4R455tStmojnF6MAHCdbzJ1",
  "key26": "4Nee8XaxcFFgdgAiE7yUdFWb3vrSewxhU3zbLc4KR6vJu5SghbFaep9Znvqc8bDdrmVcx4panG85Tm7UmkpidX9u",
  "key27": "2kqe1P8kCbCBJ5mqZaLTAZWJpzzxdZ4UVH1t9qdWwCqf32KJVGmsznD2svBrSPqUhSPk6fLehx5hNhYVn4Pk4BuL",
  "key28": "4TRNwQhwXaix15DXKq1LZfjFFuXjuiUM8uWsUD2biWue1BKLtJBQu7duhm1YDtpPwX8CaT1mvLVvgkhPwCK9eoGY",
  "key29": "4RukoAaE8tzhkR58xkdCBeD1Tu1ZuhdcT3ks9zEuy62HTnrVTJiqik9WUX5mdp6dK4G5qD1gbnHUxnaoAZYwkCQk",
  "key30": "5FoPdKNk1DXZrRRkXBCTgfuwWX2jb9Fx4Bk2PuzGBWnZN7pse3QM52tEJ9sfH9uEwPrAZgMUR6RfQmcQVv6R6mVD",
  "key31": "5aGRX59EN331PQXMSJNa8rgv6qyEmsLGrYqpjwXReJWWxErNhedohiiTTSonYHEC6UG2i78yqxKPbTNZhRx1LJj3",
  "key32": "2neck9p8pcpCju2hW5bbW6PhWHwzqNrmeLe837EMcecQ5ameqg2CkbtDniY3Nv5D2CZYCNU8W549EyFrgZEntKfL",
  "key33": "CRaSQBufAvySdcvkM6LfADyif215vLNC3TrhYUprRZjchMpUU4xaAGdNhndhTAabsxXuZQB2FLb5DEXf3s2uf9j",
  "key34": "5KpyDgzQVxAHaKYWmDJJvg24g897SfXtKvFsKU3GrCaEpc3cw9PFMj4DocqGGMTVqaJfoGgMsmisuKRkeJrrUjgs",
  "key35": "4DFhHKQgs97Z1RcZC6g5ZG6ahx8q3CuEaUU3vPQfqcg6fDHQ1hVb1GQasQwoAYZkvr2gUDDXNQsatczEuBuBfD94",
  "key36": "2puhD3YzZ8STJwhWL94NY61FLjTtFUvdjSV5Rsz6c514QrZnTpqxhyBqqP6iFTev31XkgVpGzZVTWv9bpo3GZ6p",
  "key37": "3PLkcWXmu7W5Co28d2RxtTXGTNhYKAvdW7yqhR3MXUQ7eoj8jBS2SACjCVtzsLdFR5ryNP4ZuYKL4cFene6GKbgU",
  "key38": "4EfpHDZT5SmNvvm5F3uf8qwoQBTD7m2cRYkK9wR9fvHeBE95WJn51koZw3kmSmh9NFRRUdnTAiChFgNKHEBQ872z"
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
