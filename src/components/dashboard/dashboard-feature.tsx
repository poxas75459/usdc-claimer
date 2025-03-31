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
    "2XsALSdtP5zxvJrYHYX2v8QjeM88mCzwKhSjDj722JR7jwbbdFEe9jCrCdAjHS1gb1yD5NwyGg5CgWi4pSQCLJAK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qTPF3PZLwBRdPkBgXibkcZ8qWVnkhuSG52Z3mbwdZ4gKKD4sfbXSVtFkNwVvAA429u4rARnAvEVt6CQnjtTUqQ1",
  "key1": "5NrcvCw44t61jJt76WHZLkY4s9BJKX2854PmxTbuJ3HoqXKVUs9wFNmqbStcJrR73bSGzxdspdeo1aXcwXcVoq7C",
  "key2": "2qTC5V7Lgni96aBvP48zmvYfZmdqtw6zLLzrsY8NHaiD3QD8mwPefGdJC8Jb5aWhYEQ1ZSYs4FqrbUrD5cnj9aLb",
  "key3": "5e4yMP9kU9SrQaBXCohMiXD6yHVe2xTppWuNLbsGyvLJ1M96YiEVR2Fi6F2q2DmRHDk8YqW6x3ToUsGiJs1L25Ka",
  "key4": "2pBqbqSrAbxdQbVZb5NUEV15Fc1VNuRsFw8hE2uNf4H9TTquUiyqiEZsG1rjmVviCYY3d8GRYTABuyfS9CDTJu7A",
  "key5": "2PfCnCLtGErdydFhtVNCaAFdCrGSBbM4eLGeTMfusJgVvwUbkkAr3D9MDmUypGxfxi4AAudUGPFC59d4vUbZ9AgC",
  "key6": "49ZdUJVSJpSUH8zgEvZzmA8aTiNsfrdJ2XBbKKNZDuNLdvBufXLJscgBFDssmbhHwhj9RZoFQgWKEH9srAGnfviL",
  "key7": "5PQ6RFHmKsrUpD2oqnfkN46s2xMWFm1dEiL4apncKX9x8CL7NeHtz8L4Kz3L27PBwaZs1a2WxXAVhMvBvVz9tL6d",
  "key8": "2Ajd9nenAHEKPCqF3mP7kQqS4kxazAggCiNgmKtXTVxyg2aNJ2nxnmQwz3b8hoAJJJKpjxbdhtSDPTa2ZSmJFYHL",
  "key9": "29H5EMNbXL4GRjw2jWK92F3LhxA9QLPH9A3MMtdh7hfHmiY5pbDW5syo9RsuvPtcJSL2xXi5L3JxadKPoVxrhpEg",
  "key10": "596tVHQb6bHX2iBp7PVM16oafwPNNMV86yhyXu4fYw35pYeJKgLw9L9UK4v3dA5WfGaPudJZ53vfXHmBHLqMLKYe",
  "key11": "2BdJG56juNDWqeDvRf9CPptpkaSCkBAVHErYvqJtrUXGzQS9MX6aFvkPa2iLtZR93aJbJkYkYxsYWY2HPqza8eUi",
  "key12": "2hLjKYoEU2eZNqA87nNnV9hyh8ydaZHrEzx9XXTDmbjundYrfptgL5G4GoLmB9wQXcnaz3A8hBucLoGLBr5VSmti",
  "key13": "4gDmPXa7usPyb2UDJefBGrtFKD1x1zncHSAm2egrJfZa5EcDH1a8GM5htrQGg8THBkAqiCmjXfAkB7Yzv9fkNxXY",
  "key14": "5rmxekqm93YPAtjiHmG8K9z1FZ37n4U9FqmBCtzFT8rarwp5fEM2w5bXc457awjt4H1mU33kY1WPh4ctscL4hmoq",
  "key15": "5tejynThNR9bTSYAReAimx4LEwjaN2YQjmtAC6FUcGWxe36oRTxHWD1je2fZ2587VndPRNvtVPK6ui5BmmSjFuJo",
  "key16": "5CZmNRBx9DYQsQF6LeNNuEex2qdNJYBUNvGBZihQyoETNgLsMP1hStcr9rRQCqUh2JktEwTcZUwEgyf5Gb1b8NGf",
  "key17": "4fNdMNWYXxzFChGnxpy8RTmibFkdToaC7144PNLNH6fz1K2PEx4o82J5oaer3e6yoZvVRhD36YPhJ4RsrE4TzHid",
  "key18": "4ByyxzexetqUamL2abFf9kxatDJsJBGZykbGkD519Vxpu7NDbRu1rC9LGrbuAN1Q4xBuTYsvLsYfQrMrXxcCgaqc",
  "key19": "DGMTBtjAvPJUeUE7oUwVsHVMQ1Tt1PZzhn1tKAUMcUkg4VJshxzaidN2CNNyVM8RuCCamRAgDwMtBPZN5hTAgb9",
  "key20": "2FXnM3WK1GgFyfYjTA2do6Cycft1q6UDPCNSRrFRVspwArkmufZyM76WXhaa9ipQh1Qd4mGxhWYcvckFKtVan71x",
  "key21": "2aEmvGqLu1pW21ej6o9UL4uBZc7zt8WbJPJuuLKR4p98ZfY98M2VEQ5K4zWofdoVVb8Z5GNZXWJnsua2rRKHPUEE",
  "key22": "dZM9oyT3ZxRVYjEV4bZqTdhSw8nWEpraVVUWdPmZRXeD2SGpYY1FyRXTNe7q8uz6txra2GvuHDTxFHwhVmDemee",
  "key23": "29mqDPTk6HwXezJBtMQKcuRhnuZGYVnfGup3kPE8DuCSa7zBjZhWnpAZtmrsLMoAcjCp9dKQNUUa1fX5qHUrHToX",
  "key24": "5osowsEFFSnMNtE85HjcjYojhHbcvEvQs271Mi8ckMmPtpdxUerwS4upfHxkbog1rMqqPKEaUAzFdL5hiiPk2A6r",
  "key25": "4ct6oQncX4RYZRDLVhX8HQaKQJ8qGvyjPxqDRZaHhfJ4T3t9jhj4BwkzCRVufUGE6dHKNLLXy8K4FySLXuKUf6FL",
  "key26": "634gd6UNobSUDPQCBQV4z7yY5otLkzjJ1dNcmYAXVhiUt8aEocuafGX7nhfovNa2ETBniSAUiv19u134YgFCWbsn",
  "key27": "5RHFgr5FRoxkjfNaM8jfQmUXpY8oW1GPyUtUn4pZnBDG36D6rgUiJgEN3JW54NTEwmckM7zQpNM8y4U1J3Xrx1ot",
  "key28": "3EcVuCyn6e6ydFLPDioPPJNAFfPtt5B3rkLfNh2DDVvMYjGCDkQ6JCYg1x7G4aJfemR4zB18CzoFpMRxF2P2XKfx",
  "key29": "oNr43cCo7jxvAvijQuThvccs85CYbBMBrfP8AZZnbVjm5awGmVGq6bWkVLBzTgPta5o7Ank7Qrhvf2tb3z5ddqg",
  "key30": "5KUn9i7dpN46DSU7dmECufZQwZiHsk3ewFmQ9Erbe77hAAPTdUAcu7ZuM3GYt8PQy9VsMQg8iiAHCEia5V7TakAC",
  "key31": "29ymkC673ZSSoBF3dKqZE5TnvbgqsfCEvWbXfPYpAEV2oVmSgrPFBQcJfbMUZUSe8uRFqKnMNsRKXfatabBT4iXP",
  "key32": "2cYJzaqyrcvY1To3v3LPxmNQfUS7sEWLwXrXUF6111T7mWNDnMF96x3XDnFEDtaeG1p7q9WkiittHNCaLVNbPJWg",
  "key33": "4Je2dADV2M6NGBvGZZE7N6hzRE4q47cFBsPSf3iXKYPcm7pgAtVsHuWhK3HggeiPicvk1pLNfy6S9JWb9NLBYrcK",
  "key34": "4WEP8rWfPzVrKh5PB6q5ujgrS1kq2HrqSFkDPrybB3oxmSuQF7CGwxneHongRiiS1gQBkRsMksbH7npv5fZVrZ4B",
  "key35": "61bvtPH5niMCp6gaL4gpsYPwQUnqbKbcXZwazsKnUw1NVJekbc2SKdUVTnm8p8NwYEbE8bngEKxNtKcFxHpVUGMz",
  "key36": "44NCMWbphtL9WWx25DDCcxcS9fjHZwM1TZR4BKBs5wFwoDrWRgFq91QVxqC9rkg3zBDUhCsXVXLQwVwNLPw6bg2B",
  "key37": "3m3aZKLmuBRG49TPA3pzyRUK7dBPLwKiFo2aGN5NSgggrHeDg7wegQ6f6p7FGFuDAJP3DNdbfx14snBnNqP4uwH4",
  "key38": "kXGNWxtpZP58Ei8uUkdApvddT4NtC7aL4pxCzo1fJq7yp3v9LgyoM6G3JJJZPLXHHZAJjK5LPdGQNP5RUwvp78w",
  "key39": "5qhDvYg1JoJAhUcFx7BS5XtBaft2RjTYDbR5EvncvRY5yiopptzDXYVnHmX48X1hDA2M243zyzRddu5qDc248gvx",
  "key40": "4C31RyANMXG3xwWyV7Q3u6ptZXqTvq4FWuCcMHTzVEv2cWGpRnEkNt94znNjF4U1c3DbKY75wqNifrRdogcA1q4C",
  "key41": "5HwFCAGyJyLe7PRfJBsQdJpGNdCQL4m5zVX5E7L3LTT9mT1syHrDan9xQrLksgnGLt8rXBjaY2MSVxvzy5v3yDFw",
  "key42": "49NZUjSKTvH39aHJBZ8y1Li2K42S5QjiA6L961MWcytvU9KTzARJCdDZzr6EWCLqoLwv7RG6P18MtMt9kTfZ3T42",
  "key43": "S3X6gCnjWyAYFWPoQHDMBzRpjDTzf5Gy7AJB1oumRkYaa6Ptf1th8FVqLPmuZdWQWEXFZo3SJT3RRxF8VmBQvNm",
  "key44": "5EW7Y1qARJ7nuanBgyqhYvvBAdVbdnXsyquPB7YXwPaRL1xnk6ZWN7vbD2tyTK45E9DYqfZEGTy6nipS5KpeiWVS",
  "key45": "4d36Mmw28gcsRagzaRSe1p6eG7KkRNgg61gy2HjA9jPzmMdGH7XpsUzoCEGi4yAGL9QN7v2yBP3GQDQjEiqrb4yi",
  "key46": "9zBDctogxJnbLcy2yyh8RQGMJNSmTEnwUQ9YLLBjxdhSrc4kpVJHL8UcjcX6uDDmYir4JwYAanjwmD2rDxJoQtv",
  "key47": "3qXrAo34yZfZ5eExEXSdZUDZRhLLUySiURaJobkHHydkxo2NpnVyL8maXeZbRZDPqkWDf552y8eFgqz597tbiWPd"
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
