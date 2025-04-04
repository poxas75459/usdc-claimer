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
    "4sHZ6poGdVHZF3DK8CL5BTVmgsSiWsxkWi3sJ86EfL8iQiEM2i44HNTSUbE5HF1k5PuFKDnXLEt6FL5XFY7c9Ck3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "316CChJmWvuBkm4Ph6WS6hBuaF9LHpMsRhwVwVsfG71LM3BfzV179JieCH8mnU35oLVtTcfh9wUDe6yKRj2k4Qqq",
  "key1": "2gyKJVX1unMTW3dph9sF6Hw5AEHpVWqpQiPz8wob9DYEDQU5ART4jrpwPNQoLcgzGDj3DUzmGS2va3mM5QSPub44",
  "key2": "48fTUyKGehzjV9zgoRCh2WV8ZpUcCGc73CMqsjShRYxceEwgNBj4jy418PC3fQ4Y9ccSDhu2yXrQSroDpxPtD2FJ",
  "key3": "2yW25NkKSaho9not39yQtCUEpEUz2JGvFZPseBePDCMQQgDhZariLthvkXqoBeBzUwi1hVHjYpme1GdzEKH3ShB8",
  "key4": "4LnfzM7DKxGSDtHvxKDNffcZmrwN4zLm17CNbMPAX9SUz6EjedWchHzgGPYbVts2ZnzjZqFwMpK4WmsaoczBxSwh",
  "key5": "hmKT6gpaRhdQAbfKM8b8CB339GG2w6hm82SxWqctwkfLBY4fynRwAcUYAcRJrPHjzt2ps4utvWNGJPPfnZWGcbo",
  "key6": "4fjdBrLNLijy4mH4bgsmnYvh2QXsZYaCdQKPjSLPN1kDCn1y8LwTxXAcbkgMAp4nhdF1oB5vsRqxu8i79tqktZfM",
  "key7": "22gnngPTLyBJWCC3hf9PTgEVDLyXbeMieEohp9M8GD1ibv6vUKeN67TaMyEWmDzjTmgXCb8RyDnrAddmYLX9bJ9z",
  "key8": "TsCBzqpswDeR19AXXQHCRrvQcW9afjS3C4H8cSNGhcGsAQCZVihWiBJsZMFjNJdiHEoSTkHnwDRzsQUdrYwbwn5",
  "key9": "2KhwTnMHeydnWccTbKVswy1fRMBQFi7hVKamiMfb3wbfdmhi6NpvyKr94J5f4foCcvWdoAZGJJDwV2CiEVcdEU2g",
  "key10": "4ZG2QaZKuJvTdZ4a1WbgbiwwvXi7TF6pJqxSEqkMzfg7fb7eGCBWKD4apGj3MMHp2fLm41YL1vUdrTaLrUhwBea7",
  "key11": "4syuWjGYLNhUBwHGcbRm6KK1VresYVjdVog4CTqKL1sQ74CM3rAVe9TumZTogXF1MNijohtLcg4x4uRL8XLGH7Bm",
  "key12": "5tHTW9W4t5WiGyCt6buBUQXpsTQX7hhXRoNkT8mth4vFSvoXm5cyxm8dA2DfPBByLrPben2ntVp5ymcMLJM5CSgh",
  "key13": "5U2P7JxT7QvshuwKBnjkCDZPmLe5mV2iSaXAzBkb7fXQQwkDnmSdLfckeLqvEAWWRsCXPgnF3ZajNpp5zJEEAkTd",
  "key14": "562BsgmoP9QJrPTnybAR5d5xd1hH9H9hovB9X2aoexgMBMsPUCtaigC7nijvdFZnBseuUSMzQevjWJLqsSNpuzK9",
  "key15": "2HmiTYDV6CxxsutyQsxGxpTZxrooyZ7DKix9tWoraRxtHzcFuhYwYCYbLTh3j4ujTHCKaFx4MEkdUDayHiGodvmk",
  "key16": "3bCbQxXpKDV4FAk3jKsnewyTRLUbyYoBXj7VBNNwJgNNkYx8wqSvoQ6rkLG7zCZci92tLuagVziCUK2YHhTT8rGt",
  "key17": "4QJ1Xp8PmSQQrTTfEiXDx5ZCi37nce29AdgiGgKrHAiUjSqcY2ppt9RMkRdBvNdt4CAezc3mnfGmH9prT5q8H1q5",
  "key18": "56oL3NJ3pLsbWY3RksLPRZS3NLpQRUbyVaVE6kJaPWskHPtkiQyCupX3bRPBxmKuGKbktJpFsUHun1JKHkjKaAJF",
  "key19": "4sLAecpyFv4meipmiCewWotvTuPQzbEModqFkEbcg8aTe7Y2XtePkWPgPV3VLztejS2kycEL2yJsTfJT2iNoy68c",
  "key20": "4PN85yjqqqxe5cqM4468zhyqF9ZujRERuwkW32H6wcGKR6PspSSfSaZCh4mF8469o94SZpEHkZjL9XJEbqrpsC8Q",
  "key21": "4Jj7P718WFTahoLmEnieazywZRDmf963zyy5mia1BJbUSWWZaWtq5T4mWA4aTS8fcQWpnngjoQ1QBsJgE539rWVz",
  "key22": "prFTsrw23zHteerFteZCYn1CybrQzDXSKgv33br5AnPfjbcmndUSUswDct2FLaBX3tJcZP8D1G8B7xfgreCRUmi",
  "key23": "5Bk7iA2wkMT9CrFbLtZuJqrv2gX6CSx4jjsEoeAv8DLch6TdP7MBRmi6YxsP3FD9ERaT41Qz6gys2f3z4TgVY1kv",
  "key24": "vs6MGJKGufGrcWMke2PZwBiGixYCFPQLUz72XoaVr2ZGYaVeQdqFmRi8zfznXMR9TenEkaawN7ms1v6GZzC6t9L",
  "key25": "3E6jJAg8DyoMoCRKTwiu3TY86LztGxYhnsPP7BQvhTRZdHF95HYSBvbqBeZyMdP4bx8tWfKF2bvTVrSLuCsU26fj",
  "key26": "5WMBuYDF83jZ5sv1QQYucHyD3x6Gnb7QTEKhQgLnxrvYRf85qMkWJCzJUDhk7GFEqU7niNkQWR4DEqWa313NUNcX",
  "key27": "5BDXBv8CSUen8wmntCpzxsRCbfsxNKmcmtYxuPH9fNepGb7nSg2KeWrw3DCbawPeneThYCbg8wf5JWTUvRs2spmX",
  "key28": "247nMe44GmUsg8Sj6ub6pNPNVtoReeGqm9nBRmYXC6JbPNkz2PGPWKXqbT1jTpUVF86V3Cu6R95VtKNdSSYLf2p6",
  "key29": "2cQXWSJdwxuYHqDWtto4ShnUx4VE2BjGSLVZdakhLp1cwdJQJMBFkSCWs193GVNj9CTH9QRqcmvRRgW6Qq4ZzjVU",
  "key30": "3rDVthx3SXNvZCyxZ4Er4BC2fuDtAqVh6n9jHJqvx9fhzdSqjxxwPW4m9x2D4Mfn3dUKJ7CZXEE8CThh6fyHPD9t",
  "key31": "akJzxDieD71E1rZFNkz2F9oWDDLP9eTUFdzTyxdr9L1YXaA2728Z5rNyRhttSrMncNWU3D656SsbNmiNTvTs65G",
  "key32": "3gEVCnTnfDWGDTXSkxnsbKYekYUEE9a6m88s8KvrEE9BCUbBYvNKTT2ycTRKsPoApiuGyN6ZA1FfS6hEmnyMsqTZ",
  "key33": "2etikEVBG6xmLe1J6fp8jSjhwAEbkrYmd6AKq1JHjk8sLHv1oyDiYH8H5yBg8htzabqWJUzdcLyyDH8Uj5KQWsnf",
  "key34": "5BYZjktjK3idK1afK2s8ww8oPpKFGXcGbTeL9nvCoUFnAPJ2asL3gaRqvE8eYdvQ6EvjabhoeAUvNtt98QzR83jh",
  "key35": "4F4EXB5ej8unGCz6qBChsBeySiGHS7Jvi1CMP2q7uJi7AofQLfV9LA7eQQApZbxjzR4sqRf4DU9KEAfMDPH8hnoC",
  "key36": "izavxEMEuAJV5XFfSHSJfT4eeSrk3i8SsiJuMumVd2VzgaDUdpzZ9uyrXNMNwBqHv3FJxSx58H2LLJjdaZxNJgB",
  "key37": "5hdwxJ4SthnKnjMFucEZU4TeMuf7hKQJweqmtvUZRah7nuHsVQKoDJ11pTRxubFhZDzK3fxkdYw31ANMrGXcmww1"
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
