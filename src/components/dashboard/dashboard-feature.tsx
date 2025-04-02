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
    "566wqPeSo7QJ5aNFDZKCC42fCJHtMdy75NEhEKTkdsXz7atVjH9qVKBMrCriUJDiMUABrgQZBgErEN67taXpK68r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PB9WP247knUBpzez8JKFCXURua3zcTvNjzPojjHdCixYVZTfRLo1LEkvSBjK3Mz4DCHoMWi1qVAG1Bm8Ds2kwDi",
  "key1": "5F9PrCs8pvyqahpdUnVqeegZ2QNVHhkovTToJTnCy2DaDRMWA3GbHCTwAy9RE2xSwxgom5SoYuBrbde4MsjTQrYk",
  "key2": "41fLy77ThJtSsqzG81Cg7NYK5a7sKja4HvwUp73fr64ChMV2BtgUa2iQA549Y5gcTzpvfumbiYyqixc3zUcb8Vuv",
  "key3": "2JWAWbRLW8aztXvkPbd2xrrouimLe3kv85FXnCyuuTXZMbKG1TiKmXLGTDcHnQAmzSyHVVxgLZzZj355UHFp81kp",
  "key4": "5kPAHxf62HoPULzqZxkN8WuRorxWgtRYCAbwkadmtYFGPVToKyfkkSpjfqtCKMnJT3458gLGyHrSQMbYuzYCzm8s",
  "key5": "PBMC8adg12hTnjGpnWXLyXVZMq1zCCBHnGoy1wUEvZcodpdvGy2LnGSPp8AsPaMHZT592jFaXqVxcvnkScUG1i4",
  "key6": "4uewpxpYtRQdstWn8wzroWa8AuxHxtPC8wPoDki2atYVwPFohFoKiJ7g9EzaT265wpnEdyFPsnEasGcyhbfUc7b2",
  "key7": "28yAPeeS3HCVR7AX9yExUrk8hNvc3Pi62hYZVU1UZddLacotZMMunA3StYU71otYRskKYRKXF3jY1XaKCtxnV9Lk",
  "key8": "44e2WdZD688xYL5VfcSxndXZ2mLhrzb2e9YQNp5WPiAFVsMNGzqe6RAS8uZAMpvJGGcWwogjDev7vYwD3aVkaAG1",
  "key9": "5oENiVb7MWkhmEFb7g4ZLrebNqykP2tZzhn2H2q7mqYQUgsrVcuEgXWQ75w5tiac4Xw63v3NtuaPsUgbWvBKnmv1",
  "key10": "2mQWM6UWzmYnHNrGebhhdLmcVQnFqbCLAbsgvpnU23QuynG2q4H8usG91o8sqSnniqFY8TBzyyDWwH9t7a68yyX",
  "key11": "sT2gsjvgKP3W24U2eGr7PtZKYfqqVqmKsCPs5H1qgfCy7eFPpaopQ2ih9JmmYRCE4J4w9BdihXYTy6xfwoJTAHX",
  "key12": "2aJTaLzfPRKsXxNPa9nkfuVPYenVxshhPfCpHtak5oFySP8SwgaCEZX6mAfiqBDJK6BwBfmszaeQFxa2FGQsneaJ",
  "key13": "4izBgiBVNdfPmorPBCb3D84mB6BxrcJP7Kh5KEMfhvLYvs5zeLpMTQBxQcFfi6dMKXhghrkTUUtmacgZ7oVSskit",
  "key14": "47kmTYcsuFABVxzLkSU1SvCDzTmMtb7gRdg4GAVc7Y1mXWG3qw26JUs93WxMRChVzndgbJau4zaMwtppQsCtqMi7",
  "key15": "5YNUtXjXJCspqjDpx5iXqLR1Eg9RiFagMXwa4chiT9NAujtwQRx6cbYkSfFf9R6caEYBcjaMHwewF58xmtpA4fkw",
  "key16": "uA3Sn6Aiym4oe1e8gBRY72wstYj7UYiSSNKuY4o4jZiGfUEJgWnnLGTpN8RiB2xbRekSrbp216v9Nd9Mde5CbFJ",
  "key17": "3u62yd9ZyXq3eo5XvZfGR4qi578UfDLjtVrRwEsv628MLtRNCuSogZicrsKtJfGuaj6rVCQVfkD7TKceKr5t2VX7",
  "key18": "4H6tB7gct1GUSKgnmSs7MxA7Zd7wjhp3DX4go6moqZD4NNsJEm3d1DBDJ9QDn8Hc1N9Ei8G31ZCDmTLKJsQZHcwM",
  "key19": "cQTF8faVMmA1hja2Fp4Auzc58yXpFCMGatREn3a1QkjsWnvxejzC9H86HdbcW6CKjdqEqfntzy9NCj6kTVmGgFP",
  "key20": "2dJ7LEwVPq5rhHKDqmhi3psQRRUCgWjMNKeSCU4rHGXcG7fQWs3kKs2Qh8gHEEJDswZeAU6dXVKW9U6TQKQPJqv7",
  "key21": "5ou8AXZNqaUKLuKtnY74amZGpAY3XeCzRXyFMVhhnn3ajJhpwU2uyQZpSnnpYZRg88r1xABKPwrwPd8hZ5bbzJbx",
  "key22": "4MdJNm4JpPuCFB2q35b28MbrofYGfrHTdzouSURQRZTGP68uWoFDRc28RkxjyxUsoLSA6T5UatLA5s2LoMTQGjHf",
  "key23": "48xATMDF38bWGWHGsnjtBrF9eQ2PPGQj9keEcE5DVqG85LpLwytNdWQZTPqPLUF13T8SbRVHRDZGe62h6r1oDrSq",
  "key24": "5ocCwVc86go1XF3Naq9qiFjtTD4ZssSQmkfYRbGQ7apUthZwagcuytuYzzbtTjo1bRhCMvN1DuBJRLgPvc63385K",
  "key25": "4ZEZzNEAP1B6HxZAJRRZsoQx7Jj7fefo6YQJ2AiReUk9vp4uX5pTBCBNvR16EK9MkKUcVwN9NU8ZXAmCNz6GevPU",
  "key26": "2FtUADk1yM7ScH3GhMfWBncfeAbYNeNQCUqGPH8au2Swo1ypvkYU6rq36juQsLsTgwGJRiz7WXwnggcgMPahCF8k",
  "key27": "21HEn31z4FJgdEqBiEBdFzFQBfdJUCgJT7TLCdKxFDDs7ZsDcTQM1PE92LDQNaMt4iVSrCVx56CghvkuyCn6N6nH",
  "key28": "5F28qNsp4L6ruv67oUwfcNKbZP2A4fBvQvHMFAMAsGwiWVUcdR4ayGdUzeT2wHpH87hUMAnZc1Thc23MkCb2sDv4",
  "key29": "3DrwHbx8jdFG4EPdarEErpjPpaGTAcX4YD5kQtRZbvgJtYGzppR1n1Ed7YdDFC6rZfHaTBUQAus6Uf8YU5sfZ1Ez",
  "key30": "4HZgN8Bhfc8Fh5pAC9GocF3aDnWpaWXDhxDi7WhhMdwia6hmCFwWSjLfNPnRdnD2y1ukf9rqxCyGoT6NMbrxDaNF",
  "key31": "5vwoN1jgRJmkKENuq2iXWRUkT57NpHo8CrbKNmkvfZvcyY5d7DSFBdZfBdpSCCXLYu9RnhC1eenzvMjr83dBEFit"
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
