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
    "4m5hYC8uRJA4FYLcoHQN4qFthnT4tGfubgVgjKGgV21C8u5FF3tXKrTsvaTakkAWsfWJYC9qaRwt5Pq2JfL3GgcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDdbQZzkiqMmiHYVpzKzp5EPPdvnB2g5yyFJ1Esti7ysff4v66YimC8FKCvHDDUuW9GM2M4WWANqLvYaEt4eumi",
  "key1": "2qVuw8nLMAygQFPGz2rcsXFZTN4vSMDWuqwS8T7qqTqibQRbWLbX9PHa94mucWstDQmbQz3yqCG7cu1SK6jd54XE",
  "key2": "4Y71Uu4QArbXPdgVeYW2d5Javpzo6WwW6M6paY14GCpEYzKmhup856imapV6BdcYkTqWGBTC5xacQn6FLVsya7J4",
  "key3": "3Aa9kz7s74Yb5LRpYoi9Pxi9G8ex23TrzVmGruVFhSPEaiJC1dHUnHhsxfEMBU9NrwCgUJS7YFguFWUBGGjgezg9",
  "key4": "5rC7UCVA5cV5oW7DQjkG8dsshEbmQXirogucaijbqmbogkjNZ4xpSTT9uRpfFk2gP6WJmRVGKmbAti5zMpwfRwT6",
  "key5": "66GmYofPi269te4P65yNE3JgX2FEzNw5jtYydkxAz99gJujMtqvFrTgvbLjLwWVabHyxMQC7MC662sadjtEUxViM",
  "key6": "5XDajiHHRoTUHxmJZGgJHq7KCqBtXsi1j3tbR8usRj5D9uRzdUeqqSUKJhJ3i1CLqn8gBYfgYs4rwYq7qGSC5218",
  "key7": "4agJ6wmxfxRx5t75c8XLAyyqwQAnY1QHRERj2rRz4pAUMLZUzFrK6MJo7PrjCgdCFhK5yzuHrheTU7BNtKwRNZhU",
  "key8": "2bCapC3Tm3PxK14oqnAzLiqH6i17KzQ19oCyBnSVb7LW8Gjw6YQJPuKzc6VTB2hzgAhsBjnDkJF6KeezaNNfAVWm",
  "key9": "52bxAMdocH9KvRDdwhptkgeiXnPMBwg6XqdmcLnMoH5kSs71fkHtAxGX5fqxS7Dif3Pp7BqE8EESvoSJoALWRLMW",
  "key10": "3gDKsJMp5W1FZiCjY3NUgqgkA1TF7Mpb9qzE6MRQJpfqabAcbgQszxo611R9ctxqumHjiSgEi5kDz43WbzFUgn15",
  "key11": "42BCagUvq8GrPqQYG47aeLpcrDUUqQwxij3P7dqtRoyH4WqZUoAhdNEMVGEkUKA3YNgeXu33DSf89HqfTX9hZvE6",
  "key12": "4GHKCwh55LJafKgxwHhZtJfRto3x6pdAvXT8cyGf84J6WkanNZJqfzRyVRLSTGyqLsiLcw5tG7dRgBqrDYTqshxi",
  "key13": "5abnCCSvrrExwpkjpPCPn3EiiJSyhW1oU3s28WRyz7WEwzBMCc6DQdJbkHwBoHqSUDMaGXwBip6E4N7wo4a1qRsM",
  "key14": "5y1fMythfs2wNYTZmRJ8MniT5qXQgo17LT68hsmG1iERes3cVeGSBZcoYdnLLHuuanNoFJvdbbrbeG1kr3fqELcY",
  "key15": "3Uz2ozaWJHRSUUFcdF3wLHUnVnhcfuAwG3uSMWWn5Lgr4TYcFQisj9KXLAT95EfvHF8ncUUvrqj49iTpyA6rT3V5",
  "key16": "4BtJhMFHjStFrdMLeUL7R1Uhcv1wfww2Dr4TwCwuiXd6mzcYvvPhKfjDKWzwh48rSjjzzpqC1SD9xv1WiZzHhypx",
  "key17": "J94dGCUVhQdQk6jLWq1UZU9fLd3Gs8Sz6cF8ou4ytajzeYaXfC5NdAbJKGztwrZi5H8pecz28pkHL6T1cgDNt1x",
  "key18": "5RWSZ1d2ypcF3qGtQkg884WrLuaJm7a4VfAr769RHSnuxiCtf76d4mFq6YvJd5P3ku3Eqmk2Af6NG1Ejv5yzfNin",
  "key19": "2dBd5FzvjyCaNVaCRtYHvSBUSSfCQj4rPgrxiDuPMTtsWniYE1Xwj8gUB3gFr1kNWWotmfUzPxyc5mH4ERNz9ryW",
  "key20": "2ZDf8HYddYL26zB1zJSkeNLgcqSuZLAHozJxSgMbEptdW9kF4vVGVsW42BGeL58CF4LS69GYmRQDZbVv1XwnRoAV",
  "key21": "51oS8v8m7rem8LnppENJAfHUWm7GYKyYAbh5oY9kTZp1EFLLrTZJnpYDkn9FTTC6FZ5MmuBRLEhd5R9MpSS1pWvT",
  "key22": "3AmZyJiWbsyjeKWEmLjSRbkjECRX1Ta9sT5g7mxXsXR6ry5xTsDAeqsfFUK6Je6datxDvs7ATHM3vhJGeB4FC6Bk",
  "key23": "3JWcMk2zPPJgmde3w7Hv3MXxYcjsUmzRhAC2FB9qnibeHgYRycwnuRBVdE5ChL27866NawfCNyKB6cozqDMMEfs2",
  "key24": "41LGDmSdGRo1CSg1XDP7qfHfJtxQwu4SHKH4AUgXQdYtsvgyzjpadsW5nR3QtDVDcGUahQvHdLSGokXsatWgFGg9",
  "key25": "HT6a3LZdZpnsVCFpM5Ns5r2CJXmzrEGEuVLNpJgtnWNvedh6XbkKsiMsjWeE2BWg41xsDG66pYBCDByPDFwUnhK",
  "key26": "3iafvqdqme5S3GFgt9Wy7GR6bNHGN1pZLzfor82GQw2CZeKBGZQvQJwKZN9ZoDx6VXtAoaiYH96JysNVw883AGH3",
  "key27": "3HyHavCDfxopsXd2opjfMhRHpLTcnkWVXZepppvZGGFhtoUe9wx3H7W9wmUq8SLVnSvHZQEqch2LZ7W6Yur7xcMB",
  "key28": "2QN7hVwX54MFyT1RJpCrFJWdqRNY3NAfttb7KifdT5GEBTj1pzZiUWNg6YQq15x5BY6dgtmHY39zRQo41HFSJbhV",
  "key29": "3JSy69fpNkLYQf4MGwmGg425ZVnjMrN5gjn9WB3dPTVyNDNwt9dU9ZZRGQ2buGJLjaJ1ev171P9hzz4pyQnyR6Ly",
  "key30": "4aNb6qtVpBq1dSSa6MNmMmyGBH8NUetGYCbRGKYtPTeP31jqYFJRQaaMXDWYCCq1WgFvdgp3MDk1X4jnQ8GQd1Zr",
  "key31": "3DdYvHw7d7HEQGFTV2EMi36rV21dkEMyTTrcHrjV49mmEYvKSMJato4iiTQdtgx8J2g1n23af6XR26phFA1Yh1VA",
  "key32": "2J2GDgyLo8KaYUGpGKCej94jVTEd13X9LmT5aAU1ok5Brzn1rDaLV9iESuckMpJ2dMxyVaQJG9tjbyhefN1P8Z1x",
  "key33": "5qQANzrC7a9dDFvZ1QxpkRvNs8Wsc5dKbW1VVSW2J5iVxM5uch4MjscKKcTcyoDCZTt5zoE13RmJD4ta2aQYi22K",
  "key34": "55TH54p4JwAnRj744meJPUBLtvFyejvLoA8K59bL86HCbKSWvGpQA86jm7Aj2831XY3N5J597XNzuFVeXjfWJSAK",
  "key35": "2e1wHjNNfhbV4ou3o2od2NW8zMFgprzwtskguPuFKh7F5BtCuUD4Uvx48DrJqZDJB7KaceUZbcCzr53JVXYJ7RYr",
  "key36": "4jwoVGoNtpheCSLWRDGpBT7HHBkGEBgoKZCtDMuynF9F4gUzCWAG6f7SER3SJVTpWEogLTDW75eWgQXq77MpDmde"
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
