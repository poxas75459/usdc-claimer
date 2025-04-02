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
    "31s2X8vL4oKq95j7uZ4AAC7NYkmWeHHy6iDVze3TmLDhdg88UvN26WkjpU9Tyft7vRXF1TDLN8jH5sgAzK5RwWRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ry8DbCPDEs8afTZ28j7JkPNfTQAzpVvKr1z4nvyuDh3wEaPzohK8KKDDP9qtTwsUsgjNT1Uujp1sgCwMfZBDkFe",
  "key1": "3eMcW6Lt14DYpb9b6Sa6TfEAxqk84supz9fVKSCwNL2oPsxWfHqbdk5ZR4iSnpCsU5kXLXmPMyUC4ruFrKjjKytY",
  "key2": "2YtJWRQHoGWwzRM8xd8gmUzqnc3Ff8HxcWJB6Yb7vvWUU67Nur3BZkYeXoH8uiDTrv7PaoY1BPY7N191z2qn9Qi6",
  "key3": "yodfXHtLWVAvbzAjbjwqP9DSx6nKHzqQG5Uf629mdsipcrpqAMeJC5PVMNHEMNK1rQewMjCKdb4tXZd8Trmgru5",
  "key4": "6G8KHmvsJ3rUBHD3aELm9s7WbeJibrY2ioYUhXn7Pic6SVSRkv3Qv4gBRniot6BFzyNtYqEy9syDR9qspu3pvUf",
  "key5": "5DTf1fxkRXo6U5ma6QEDehRe3pL1E33qFUGrzJAaReEH9q7rXWi77hoaXho71oa74rafbyduq67UEM9CJ5W8EXg9",
  "key6": "3GKaQ86VwgWKwY8KmJ9hWpEUFUDh4huxDJE7zqefeQYJoaVfaJBvTzKj2jxR1L1b7wi97ymEyUcgjyewt7ZNUxDF",
  "key7": "4TGj1fyaK9U7uroYoER1AyVEGkiQZZhDsnr9Weo8RLaWwcso2nxdSFibjexaXzf2EhkUpGRrWK7bgD6SKEg95PP6",
  "key8": "3QMMmBXZm5LWXe7uxqF5ZhFRQJxLYoz8kb4XXKQ2rRS3wwSMnoJVVrJGA55kyrZuf6gCGmMnhfXGLGdYVZK3DMFc",
  "key9": "5HYadqoQcD6ddpSuT8sirXgXs4K7z3aDKRhYbZaWcehULzSRrE7J6akc2UPqmS4pkL4RVJJvzFgKPyurGy1TubLp",
  "key10": "29ttVh2S3zhccYk4TcvpRfAKqA513Gr1QsvR4PmTQTSA3PDtSqqEWRGhiiZGfSSgeFwXnh4Hb6jLRYci59XVrHp4",
  "key11": "5XhrqX9biKMAHSwfWn29ztAe5uF5nYBitM3LUVC7XRBjdragkqQuYpKEdD29Tv1qSazRtsdjRkz9dncryGatSsBs",
  "key12": "2GcEPPxrgP6TgGDG7eah1FoJb858W48xTZg5YtG4eciGCSY95aFRuCHZ6Fsj9hnTH5QEhoMAQ1QqN6ZNXfDhJay5",
  "key13": "4BUBTXHXT5MradPFwdPdDrEJATKz6EaGFUxvmteFqdvEEPewfh3Pgvq23oNpzLyownG38UL5FjskhpvPsiFzff4P",
  "key14": "4SQAuuTD61jUFNcQpx2psq493YRRtXFkUNjcqrPvj5UFGBXwfXvEKnW343pz6oUApMeCRpExd7Dog26KxMhU7yma",
  "key15": "5ozxFKGoMhWNyquqSN6qzn1A8LMN3zE2Mvm2rt7XpsHJzm2ezMvkbzm4B4tQKDGcUGvbZUtMiz8eryQWJsHUqueZ",
  "key16": "5kpnxNf25wj3o4GRxVR58ionMrZZqezFju5zprwyrdEaiUMQwr7KHgEv6XYBogmjN7YYkzcfumwfgTiuQXD9KdQe",
  "key17": "8sz4wXzLALm1JnQq9WH7SampVY3RUVAg6tSRjmgb7FJmFrZbc8fjQzbMLkBgVhM16zCpGT82QXqMVQt9HVEUSHF",
  "key18": "4dcgJRrKKtbk7quhv1PM2rrBBDRQdhM8xCEscX5Ki45BFUtkocYD5D2EvDY6gXrKk2RUyZ368Bu27s49641xjGeV",
  "key19": "27Wx8hUkzvqoADYVqbpB3fB1Z1G2Rui5WmzV1ngnCrZJ7MnGkY3aKvbGGqsdw2pRfPkrozXL5arY4QVvqprFTwcB",
  "key20": "2mbtySwYvfLH8dg1VucvxG8VvN1msbBDY82QPZ1PehQ5XxAN3zd2gtUGT5VGJeRjLFQq6RxbVVKt4RUFVJ1tMz37",
  "key21": "LWF7xHwc42JS5NWkUX6ExgEkXh7Nut3ojH1kCrTLfo9Qry8UCpyn6FKynjbyJ6QQ464nEfCFUwQhPmdkJgcqPqw",
  "key22": "4NT1ZmK3QbKwr2sEV8k7rYdsYEwkrPVF9zAA9gnGGbBnmM9kqPE3uQbbd796ByupcFumGiBry86GBqytWSzYMUuN",
  "key23": "5jAnGUkN2x44m52sLDWWfapNGdh52TNGMksGFhxwzwanv6c45SVakS9PnE96rBhvQBmaeu1nj1QZkEudtb1S3cpT",
  "key24": "2xJ5q2rxZiwnycD2v6WK2RqFMfVDEUHbpyLcZR4NouyD63ZbYmcxQt2jZLPYdf1Ta2Mss8tbugDhidTjqR5DqD97",
  "key25": "4YqJdqDXQugy87FBDLV2rHdg9NGyLKrfSt8xR2TqD8LcsgSz2fdLwg7N7x6LcRcoCCy5xj9Y75KB3MqmXP3P4nQ3",
  "key26": "2Dc5Xdez3yU7spUEx4nMXKnj2Uw5hnfAzg8xYBVgk3SsHTUka3QsUwJxNQRAgiqsY2PDczuUyyn4cJVxoj9sx8dV",
  "key27": "478SpkUbiictKQj8wSQ4TcD7S119kENFprssRGuDmREArtAnfY8KFV6MG8eBXBDwWPmz7bEcD2MXEagCpKte52Vu",
  "key28": "2pmhAVnBpuUgAHbmG6YTKqLFXHht54S7YumW4iW47Qj1bNjKLUD9Mo6gT5oUHJN2HyMKpoyMsSbWbQtE6WyscL8h",
  "key29": "24e9XbKk91a42U4H9aJ92MTuQeLNPTexzKGKgt4A9MCagyHi6EwXAz9xj7wSo6iMof5mZoZUFdpXxFeZoqUaeqBy",
  "key30": "2x3XkEVroL47JJoSbiGt3wFvyhUXPKcBZw3ZpAbrYmjqgKEduaPcFrHM2utXZSDdyvG4EdHWpsAvtwqQnzHVFLoY",
  "key31": "5dNdKxoG7LEA3SUrd9toC16EyDGWWogWDGjkF52x5XZjjyCoQbV9pXZyRAC1TYviwYAUyQFZ8iDn2TFLz7kCB4MC",
  "key32": "3WMJVV9xMjGMFq6nMCvC9jxRk321BqRUUD7K4VDbwkvNtXDEknY44Zjx5zyMn5X8DyfaRAdjkneNtr5ynJKFaDwN",
  "key33": "5dm1NyaL9o1r2stDArMmZWx9Ehn32JFWrNR2UTntg1erJ9ruQweYbjq1Ma8m2VsUCVr9tMrx3Hz7rWMv5KsWLCab",
  "key34": "66V7HLUsaBwywp1sSnfWtoHwCgXvtUDXHFehSxu5AGnvMcfgQmV9P9PvQzPAH1Sj4kjZ42kfPQxcoG2WcWGoaqeq",
  "key35": "3DWCPEeEUBkYox5C3QCQbPGb4E4CGWwc4iHpRACFKS4Q3maHtQHmdsob4AovioCca7AGLHNHMn1dXUB3AcMpapPk",
  "key36": "3WBfQykCdAEBaz34ngLSipE57PKa5hzE9daMw5mbMDziciQzCHQNTgoxJi5KvwcUzcg7K3TByCEZcb9RrQsBKqJQ",
  "key37": "4CUfX1HpSrsoYaCQWsxRL21m4FjoUwGEv164b7wnvanidrDsurGfX8bHfAjQ7Gr7SxixvXxZ2fyKyeYWwnLnWaJq",
  "key38": "254fzxRPnnUJ6Snxej6jx5hPZvTFYTtrF5otnX5Xu27WJN1krjRBiuXAztViZAY8dMKGV4tKRg192z8PVTRqTDet",
  "key39": "ntJ37ozBajkiWwNbYqrWVtr3ECNkEGJ4Pp8Fxd6JiN6p2GeGmZaaeqQsXPB5ETDYKFiDZvhiqhFFANqDkebnm5q",
  "key40": "3ufH2AYd2zaSa9skSE71qYXHwxKJA9FkuepgC5mHL4xzFTboe8RRvrvmmP97WEziF2qeRsdtVsUGdCmn4xpXtAc3",
  "key41": "4F5jSFd4mCUDYt9CoWrxVLbvJsNAFFozBDcVzxhhioeC8KHeAMqeQFUwD1b39SCUdt38E9LrRkuUqyoSmwBdQkbL",
  "key42": "3PefenRgJ9uxUpk9Rk9ejtktL9nCsfQTPVh5RbT4ULVECuezFFXiFC7VanGM8WGbZcYgT9DhTJh1akd8KVNc35B6",
  "key43": "3oN9uicaDZEZ7CeM9su8vhG1NQMAFMKQU6PFiT1nFdnnmFSc6KHSAJjxRJbJe3p7qyaSP8WmVeM1ao1NuUxQe2jU"
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
