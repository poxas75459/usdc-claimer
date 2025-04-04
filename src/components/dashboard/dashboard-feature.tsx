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
    "4CfMk75Gux2MMMwAEVJKpCjeJGn4ursWU5vQ161FmghNjqjCm56xuP2JXuCsMfvaLkZztvmTVqWHgVi7qrwT5fAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6cS3fJLae2Ai8mvutk58EpBn2PWDfEMu3VqmzLNkN9WRjpfRiu3ndUAG4gq21HiD8Xff1TyQoBJjY7AHfS4bZWu",
  "key1": "4CDuzpwTcb7pCy6vR8tSW4cgqgULKStEJCdMX8FobbWiJqwJqF2EZ675at5SEVs8XiT91nkwTn3MsLrsjZUDmYVj",
  "key2": "3oRwKmXVn9asBVmwqHv3wFbgSJB4A5ZA5c76L3UAzBFS6YpC5g6fXYTvGFhZ1ZXx1KSwnCh9epDrycETQS85MkAA",
  "key3": "4JgDwMiCS74m7DGhUAeBCQGs4N8bn9ec2MQPMT12qnrZZUHSfdwBqYHM1iFjcJ4B6ZCpE68WgrCsMJjt9xTENFTj",
  "key4": "5zjN13z5j346ypwHFPvH3X8w9s5rwE9qhXuWHDZvcQ91CEoQMVMKBVoSHmSYjbDnQtW7AGU1p44S9x23RM7g9EJU",
  "key5": "2N3PkyWzs1unjhigqh43WHLzGciSSdXngJHEQkuEpm4gYA5At32H5ZtzBMMzEoDsXd5UC3yukU57ydALPWHCoPVc",
  "key6": "zQpoTCKJuLwadKzYYfqHqfs7X1cgr6zCZaLhYUcHFjkXrvFGXH4uyifw8mpnrbmf9nWgWM231ypkBxoj5629amn",
  "key7": "2cgwWRr6Vgbe3cJMaJioRwXTSvmL798igdagAQjmywDTpMxYrDHfD6ioTA53Tv1oj1ynPiBHCcWgsZYCHWRgZG1C",
  "key8": "3wGJzcBgEacfznpDDUBKzZ3qjSGMLP4ACumcWGqGGCzR17J91XToggaH3zcuC6N4NbamZ7Nos1miGAikjNyRauJt",
  "key9": "5x1BAqsyiAVGYBFenot5KAFM78RQo2kQugAFnDrKgb6CaYWFL8WCLF1f7AzmU7jGyHYL3rFrhBGopVjSEsnBcfW5",
  "key10": "4b8oxAiUsUe83gHxWxe7c6QWrkpeirataUEoSg6A46eVvVsnLME9hb6emD1bgQTYp7RyAeJ5zHhdPg41ZSSVT7eS",
  "key11": "3iVCNuqueCsdmYg9WuQnV3WeXy9mRFTp1yX5D346QwxnaLEcJgQ2iLk3vE37usKaxBrh5fexi4L5buw2bZVQyEw",
  "key12": "5bYb9LzYhY44SoKr1C85HrB8kccs21vmdUDEBJ8y9DuBGwNhQBnVXSpjMRjW2fjktb4kDRdzvpeC8pkjozeadeKG",
  "key13": "3D4SgzChWme5bxzBk3LmGkYjumomfQV8LFmoTfFfmmEowRS53EqLbS2iNjpEqrfgmNSqZUhp3LRwL3o1w3h94yEw",
  "key14": "2j5FHzfqgfKJ1ANoNZxG5Li4kn9qLbdXmuY56eiAYLknwst1ih1XjyorwSL9G3DZUF41jAajUu4HhUF76x98eWcP",
  "key15": "5kDc7UqdiTUHQJxbpbB6gxCQXM8TVpkVsjS311g6FrLs3j4cwAaXmjss3ZsXGK4uymkx6GGX74KHcwYQy6vd2Q6m",
  "key16": "PJuL7xua99YRqo8rrjc1nkYCyTiFWf4b5jFUmW4Qi9aVab7bDsLpSTDpSiNW4uag9QRTgrN7d74jHcam68av26v",
  "key17": "xpDgaUU7TbNmjS8VTo6YLwxKyehDv9w3yfhTRgussVBHgcTAjfd6MxoSnEYTFHdRTvzxjSK7LCHFZcA3uHNvMuU",
  "key18": "3wpHdeawNEvASu7TghhGrvcYeb2ou4K2kbkHdW6TzFbQ7oXmoxvnzAbC1giJa2hKdhtgw7LUEMTzygmnsgjDNsgs",
  "key19": "381uii7zBxZWNpoXWfRq1nRxueqHHhAo3SayLijxuSmfsMiHv7XdVynXgCuNUCNQh2uavQw9dAZEzSvG6p26FmZ5",
  "key20": "2hRqpmYUf3vBisRFdguZ9ApDQwd7v4B5QE4TFBYnNGWP5fxvEhGPJFrMmRRfuFagu8qBZPa9MrRjMVyzBP1xRCxF",
  "key21": "22fzS8xW91sNTNEMh3eJR6LTAAhrVpoqij5LPSATZEDDJUNL58423xFGmCXQX7CEJLLb4vW1ZTkoHWMetx7AmX7y",
  "key22": "2T6TuvxnJjpvLfBFgxLc3MuaddDZhvMZTyj1WFaZ563ZVxuHNA1pdBPKZ3wzSqEBj3NmNm27PNZ4qmGqbWCjqvay",
  "key23": "62uHtghReFgNok57TawPpYrw3eLdUTC49wSBrGq65CG658Fmj4cQVVDf6RtazyzWusGDsh8qwrYQVAZPXkQVgprb",
  "key24": "2THgs3uxPJncdFuwbQBuATbTCQAJDPekgycuVHWbZbbRkBNc6rHcFcbbB9x2kQyhsA7MvTh2bd1vU5U8NYmuhu59",
  "key25": "DP9e32uiq1yM3YfXphekDfDHKdKgziXW3S3L5USNfnQQxwhqiKxx158K3bRhay1mhLHj9ZxnwFasWkrm36C7aug",
  "key26": "3tb49ou7gMCZo7YbCAh73homQho7qVufY2ftPxDxMqRaEoGK2ZSz2n152Jrbj1GpGUcQ1LgeZyX3ctZnUYcStQBo",
  "key27": "2podvaTRM91E95pYjWUWdFwi9Je63KtW61BgXjdQNYYRTZyqU1TsZbYevMAML8iShaj8JSCQmEyCq78p2XLkug7F",
  "key28": "231TmS3MdWoPpYy7KTM6nRyYq7cAz5NRnbpjwZ8NkrH5XGxGN9AJRPqaaDMNxuZCT8gHMoVaBhdpx8w8W1ftapzA",
  "key29": "3Bxqb5BEcDEyFVq7wnPZ7DEN3eLNwXRaEvTCmS3n4MzHLG1EwcoVDbk3mCKuXEbu9yFckqNNdQGDMut6nut8QyYL",
  "key30": "5pN5a1X9xy56t1uqtLLShVTHBXpEMRroreykiXE93Y1d6Uu8Cr7UUygDaYCp3hiMMxrSpwS8PQ7m5CQqmJmWjimJ",
  "key31": "3xsoZ2TLKN5MLenxwZgHFYiqAqG8DRKR4uvyLQeLdupYGPAd2d72SMKraEs2HUJn6ziPBWunTzc6MJ2s1kMLjDc7",
  "key32": "Yiee7nYmYSt8TdHR4T1ffowAs3ESSYpybWtLu35mpJrEnGQPYuWTwCuhTUkP39KHNvy3yLFScjWy4EJyiuCmAxD",
  "key33": "5JaZhua2rgQjq9kQaScABkYGt4yfz4SX9CVYJbawnB1s7eLqYqVL7i3gWvAHLn488MMvkMES4oUpJHWY3YASWUNK",
  "key34": "wLAyjFja9JsUHGAzy4xX948dc22mrFj6DTKKcHyKKDyzPb3iKc58rFfnQZTGXb2o7G7hMrspyJYhm3iHa9qkQsn",
  "key35": "3vWg7TvwScTfj5NPH4pPQiuLWMvRGXsrTd2jjeJYrUH7ggTozeLRUzFrYkwHoXYGfXfF8TbXcDNG2yBKhPztrbb",
  "key36": "34Z7hMK5CVUAmCQYhPHqQipWwmsWZEKDRM5V5rHfKfy5hzL3yTEPN7eDvkgtnXZ25MxFBhNRaCu3grJwDvAPJqmY",
  "key37": "4neT3jYqrDKMParCWFiu4dJigyhmRAk3DbouwgU9DXeVa2AnWhGW59ZLVLkAkgV5Jsosx1qaEKZhp5FyjWooikND",
  "key38": "teJVobU6rEzbk9sKWkGLJom1cfMXF4SpLP4GauP37w5jgwQFcdm1kiVptH54v7i7LvkgEfYfyPpmtJeNYaFWeVR",
  "key39": "2ddsQDeejtWTUX8ynD1kGyA3hXNS8f76tdotbmsidRTBspAHrSKYNCmoMzWPoxZCa3HwXhXFErroKJt1LiWe82FS",
  "key40": "4CGgi4DdpHTHViXtbAAhSUCeUMdNgao6M2g1pm7itxBqtEAYSAP7qfeunQ7qPUbkSzXbqzqRHDAq1kB2UANDMLPg",
  "key41": "4XzAgB7LT6d5WoamzLiT2UnaXtAMcioWDB8b5kjSMFxqB1CRUUrL1dCtsAubvgwFdDmfkuKsZ5sr6Qy9JDrJiFYF",
  "key42": "eeeA1obyvb8SeBx7w2phRxFXhRpCP2ZMT15ysNsoBaeB7bDxbTbTGtC2qxUizDLhhQYQa5x9H961vm3kyxgwdnf",
  "key43": "3s3kzjVEsDXNgxK4wcQT37dS5HadcbM3qNTHa2nN1dM9TG4nfrZ958nB7kz64CiWbRf1eBcqcfXMoYH1nXajrQe",
  "key44": "4vGH56PVpKCNQrU1SMugmhagHYGm2t4Lu7NG8VKn9fwJMAYznaSMYjaLFHzZW4paywT9wLdM7CinxiqxybYsUK7P"
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
