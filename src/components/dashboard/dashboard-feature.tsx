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
    "63SkEmdoppxXABJ8KBpN5nJLS39hUjbhBpBsUkP8nHTbsf9DBWRndGZf8uuGCtU5ZjgZNzePBb3Va6YBK8m3XEZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23CjEoLiDgMXaFrjQdL58UdbDg158iYvY9DNnd3KKAcWQDTyTt1SoGdH3zMY4F2rVYqcLwLDDKsCFhDS73AcBM6i",
  "key1": "3kkF2vLxcJKFv9MRNQqFHgzE83giKvitWUd1zszTvHJFsyWY5fZYoL1cVu1fuN5pQTooMEfXqMz4hotrEhEQGRrd",
  "key2": "3kDJLwhuRmnaJtcsJjT1pV7Jn1s2s6mMjR9eY4uDpf8HSmtbTnGYemnZt3q16nK43e9gcNh89qUk91b7etH3wcRz",
  "key3": "VjLZGf1SMECdmwDHVV2nxKRtcDNwWT1G6oV7K39ugXmc77aM8TdWUmgCyceJZA3QsEes6WGEAikBhBQv5RX7EAV",
  "key4": "4AnPhqzpyTFHZkaERXqZN2DmecsiAdPp2UBxfCbCnWJzdxNdi8SFkxpQJZU2ZP7qorqiBuQMwqxi7GjhewzwEyiy",
  "key5": "22hVkPu6vFWuwkZrwatMTRiZWCU2rbhZcxyBauKckdmVULUeR9i3eYhdun4K3yqyL66h26QLy5e5TgWgmvniP2W1",
  "key6": "5ctsoB5mfb4PTDAzqgqFFtbiT8w8QmCffCXrAoBETPqsS6JQ8id3ojjAGNajwAhGE1jPqXDJ5TRVx2JHsCTRDUAn",
  "key7": "2RywuSuzqJchQqo84azt1nKpCsbj7W2DrkbAXKYJVYhkUy7HvM98dbkZRKUgGmP2wUHLkohoAZjpNWhsHA4XcfTV",
  "key8": "5wcSD297Z5DkTiT4WTHW945x7PyxfUVL16YBBrmgQsV2gKC6TCFxUb3h7KJwKmxY6bQwDS7DH7ojaZZuJUn8anV6",
  "key9": "w8KMp8ibt8TN1StqnvaLKbXY2cef7wzBG3DjriBgXvDz6S1hDTzY8CJjG1X7GqcEHt8ddSFmegqiuafjN38w4yo",
  "key10": "3GqoDfkxK8F8xTBw7SgcGh7svU5QkaiMV5dAmQRWvKKNdJgNCjLiGGY1ZDCsBPjpYGWuN1Kb7opFqE4xeUYTMqZ7",
  "key11": "rGt8m81fYhPBWDzdFiAXMEFu3C3ksT4CqSbqELbhSupZSbSe8cF39F2WbYhtXPQ7JLSdQMYrCraqrjmbGXjpM2v",
  "key12": "ibtLVGw5Y6mfvHm1NJ9C3FrRuGNsg8nEuaKuJaJGWHzT9D2FpYWBRTEC53MbLFB1sPGsrZd5A4785izQyE48D1W",
  "key13": "286R7xEexGhN1td3k34pyPCwMBxiumQwm4K9LY8Zh5QfENPc19rBSqARkrV9MedJSj8BwgApVhSxyvVCjh1QVJbz",
  "key14": "37ReJSRJtqADGeaPZPcvzu58M2qRBPssB13YVqNSEHgtPgn9Lzj35dXW2ZUBkQQZyqtR3ZxnBbquqUh9SFRsaiyn",
  "key15": "3WnKKife6Pzom5zzeCix87ktn1tpwcqWxFXM5Bvq83ZQ8cDduUx6M98khRkoKMgQZVfbBK3qPYyoGymhFnBWXgJN",
  "key16": "a2M6debNEo4zdrBEmFb3hTmSj2A3HfpksSewtwnfAVmNUDTdggKtTGYigafHmqrLrD9ediVkDy5SwDd4RvnbPop",
  "key17": "2A6NS5sSzMvY2hbPriTM3DB2QFBkZJMgr1rYrUv1cgfPos5QYX6YkTiSxZPFroJ44LdtHaRNv3xTuWZ7fSxCmVLU",
  "key18": "5zbEeQWjfeka8Cke22pFNFQYe3ZRa3R7bFaxawzQZdxavpiMASeNiDZW2yVSFuUCEer2bnq8KaHbU6m5vkaqWULV",
  "key19": "3JFqxneBUzQrySYMzeYz9ndtrfjJarMcY9xhRVe69o3rfgWhMtwXVwhMY1pRkDguis3NjauaKxJtzkdjseENLH2S",
  "key20": "3j7kfGx17yh4Xp9smcF9H8A2vMCgvm2vFo2FBF4oGcnmM9qS1fjgWTpxZrRAFkBFMHA93hg51FYNHeEi8ikn3Jna",
  "key21": "5hH98CCUzCqknnXntCNFRX1mEc71quLDAtYi8WYFgZAcx9AhxJMioZo4ifhynMUYXEtbcDdCPm8TYpmDdsCny9Fp",
  "key22": "3EnZC8jB3r54K3r1zovxVAg2LGMuhooDVq9vPj4QgcqUp4pyiRp3xisNrnG9hyGhqYFhqda2eAdJuRU3dom8bbzC",
  "key23": "2uzJQSEfcFoCKpiUzfksyE1MEfXhsSjiZzD2AtTDWHwFb7iQJiRAKtkujxxbygq6SCxh7epBEXB61aknr9arUrGh",
  "key24": "5wtrgSFmfvHPmwjBhJw3uHHnx4DHkPSwT5oywdBSszjGUY7Mx3GEkzXEWTotcASJEvjz1s7ReSwFKZC5p1PZuqay",
  "key25": "YBHjHspJEXEHiufrBFyo1rKiK6Wu7NnbVateVXmSj2FzivqdozNsenvhPN6KL43ZoMJtznXZqgayBrRGJChpRcu",
  "key26": "29mQCe8hY5KRPP7j2XxK7xxkk1TxPoqCZVTWQvWbY2xdMyXAUFwfGJDV3CMXv6du3hg8geRUNMn15vFyzLh9nnsP",
  "key27": "3FQZ5ANbAtY23nRu5UuwEgbjjc6Tt4qBX1fqst32PzpecBheUtXBfVW9etfws7Vhyw3ri9gHiEw3dtYekw2JLAEV",
  "key28": "4hw8dXUkaNXYQz9mzU2jG5yBNmxd2AsdjJFqo9PrcNZ3cXRRUrDBsKYPceGJQmmtJHCajxNM1Jidg7KfdMd2aTeH",
  "key29": "9WMDnwJpCm3PUn8FJW3mCtd6KYyxBVLNeUngXBfMjCSqFPJf734cLYr48vmicC5q4eQ8UpB1AHqhMgnuaqAtTRM",
  "key30": "2UikAyK5NiUSmrwH34uqhCs9RHjPvwwKsozMDFmYKGtXkkjXH1nyQ4zTXcPDWSRyLU1vGM74he5YaBPFwNWtzpUo",
  "key31": "4tMjjthtNCLRpjhtx6nFk4w1UcbUSvkfFg8DBMSujxBHDhHdVA8G4zV7VCTiZusTpaCtSnxzL3CZoNGPRcmJpRsd",
  "key32": "3bcSDGruwDpSZ6M2QnfaLAV3dpwLz9j9SfDf4ZyG4JCkbtt6h858fnJKKdrq86wk3EzheNoB3aPaxS2N4AJrWMVJ",
  "key33": "5VFQKqLes86P9bScrVuU3UfNte4rFbjqGgSPjS3TuwNaQ9DVkTpPwvM1JLpZ15YHHfguMpHyLJDhFWQEbbrunnnZ",
  "key34": "2q7Pxtjqjd6vr6tZkqdRBdAW69eWEC11f6TknF1gWGqSPhXQdZS46HHDuthVhFn9KGux7d7fXL9e5Me7ojjTYLRU",
  "key35": "4We3NphbqXnvyv8YKSxdFdvoscd2VoSYCRgwJprpESPST7Gza4dEwAqvr8BEmxLmBnXbNk9WP8771GzzRjVmfh4S",
  "key36": "345pav7Ntn4aEPPkrEZea6FDSuoDPXdvAQpD6YawN6kp3Noq3A2SowUjKNoXAeu7EiJiwNAXQpW2aFGTHKKdjvXN",
  "key37": "3ed87G6hQFhtDFLKEWBKodMY29nJtr3jDEiaxUpS9fVhJLNjJxQic6hWiYeAsisfMjUk17JhDYnYBorvc8DWRLAh",
  "key38": "UzoBuVbWyjqx2vGTPsqAduRtKgXzuEYwxN9JN3xALn5YyKaedTbJQN89iPVkDp1wA7bkrnYMpBe6aec9r679nyB",
  "key39": "3z6K53tnqrksauJzuHcx7wwEb35uZ7ijNrNzEyxN5eUA5mHLq6kVhA4WguzfKLH2tqwJWpjbT9RbhDt8EDwoQhuG",
  "key40": "2uZQEhFiiNGe6JAmHUoQ8qT48SwbTv4gShKMmcqvBPjgXeQwMvaLatPRCUyshztZhRRoCNXowtEum95W4TuH5Yxp",
  "key41": "2s8DAvczGrpzpafpr8jRUEBUhXJDEbM9L3DGofLcNnNbwrZR3UBn9fhNsHxoAwivEHserkAkVBnhxTwBF5GY5pQu",
  "key42": "4SHGmjeorNwrMqVQKvR9P5e74Ee8qbC5HEPtbumKicG5fMce7nVvCfuUGBzmnjeYkp6PEKuz1nvkRfrjRWBFGWkQ",
  "key43": "gVpjVx5ayXqFNeiLJUh3eDYmNjvJGHGJteZopkomsjcv1a4Y7wwvv1fNvLyQSFWBoEqU1fz5Ci6fBXfy61Tc2uy",
  "key44": "289aKXatXWh3YmZTFT8tPKrLwGy8UrMUUimndjk6fPHP7cZo5Bh3auxLdjZVgzLo7CAXYMD4sbYdwgKyuMohsLqu"
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
