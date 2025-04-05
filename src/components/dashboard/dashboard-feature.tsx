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
    "5JRBRmnVDWaKtiEZyqcXCXN5Mmu9kye95tbufTtH6WnJX1CyVm92mnhWtJVKG9SZMUL4QmtrLHtiYuCN32j7cMe9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gxzJFMMsbP5gY3HtYwKyccnakUdMLXuADmpg4Q4nEBv6cKrdk2EquYXNp5LYrEPrmo4dPCv897pyFtdVxckHRyn",
  "key1": "34icndgUKmhsPdx11FgijSGbcQKnqxhP5VNJYKhkkTQgnLRTQv3GXuaSJWPgD7FqoJyHSY1SBo1xu6bF9HMXEwZz",
  "key2": "3FTb7ZBQE1zhrNYu92TZGYpm2yBPdGGhWsvfmDmLMFpAMWv36fQmTFrcaoVs69FedyEMqxPfxbYdR7mtc9yHLUy6",
  "key3": "2qjbWRwg8QDyWRZQWbvMRcG3xMyZZYChjuaY2ukLrv6HLwEF9KQRCg2bvUVmrfQnJfwtCVpiWdumHaE9uyXqAVZE",
  "key4": "42LeUWRUrWwjausk7T4EWn83hhGWxPUNYZUse2Q5CsmVhgQM1tt2Yb5nrMebcaoHZ5Y29DC8b68vHTCSugBVGZQw",
  "key5": "4XAbeEuRmw2Sm8WdkLABzYa6hexN55ujiC6BWsaSP7T7tfbSud3JKrm8Jv6ZRh6nkDpmBF1N357vMWGjtEDmGEYz",
  "key6": "64xqER19NqqpZVuE4LNczuPftBCqyb36mdg6BeW8GcETrDmQtN41tb3UJ6asTuUzYJQaa87N3yYY7f4ccP9kchhh",
  "key7": "un5BbLH5PmQNorqZL7A6HLBJXLqxSrG1g5HhTT4RPqgJKC7gTMLNN9D9MNByWHMZ3YpV9QwjESmUTQXVDSduaxo",
  "key8": "q9wVJnzSvKRWFKsE5azqAqN5tMnxcbzWuVYWwr9xUTwfMEtZ3LjyKkDaAriBNrNwEq2BnirJZ5wbm3o57v9z94W",
  "key9": "3X4jbwUYytkWS5cx1dPkTymQuuZHHjSdeqHq5dFGC6bvUS43F59i9Y7SUWsVsKJcbFTKNDHe3TjJtbTWsVeLX3Ds",
  "key10": "2CCVU5Qs1bXYLUL6ugrKd2iq1FLmHJwvutbfRTXtQVKDefdspGGXdqHg7Yjrb4LQU2aFBtbDijmXjN8wsRycN15H",
  "key11": "6NKWuhdkavuXNoqDwXuPNZaKGRLxXWoeDxF67LUA73ZRCU3vNqmWqVASFbn9DpWZvhKNyyBR4DV74YEebgSRjKG",
  "key12": "2uiz3PLvyaiJDepdBH56HywUKD1LFYfDCWmyEQBv5pMHZd5zRQ4rd476wat51sXCUYccTMyGFTm6UB47yf29M4tz",
  "key13": "jChneqWkhQrhyTqbgSRAEdRp8BJ8K3H1AzeinGR33nNkUqPaB5sLytPk91vBN5wzfdWchZ3tgZTMKW1o15DR1T6",
  "key14": "3yQtCt3QBhc5rJ1Giy6sGNid3GKBmZ7AbbtcG6Ui9gCTTA47oWmEYCCRdRShJSQ6UF1PoyEEMLx7bUsJ6iv3rtD7",
  "key15": "3Uzp2W2KmWsrVSNWwsmo2UPvkAFtwMhNypdRRNrA5EYagw5khfosZT46VUc21wWjHH6KnNSnM7FFKjWYLm5YKzBA",
  "key16": "BsSpiUmFQHJ51y5SfaiWuDP6onAzHUvCT4s5xJoFwBBHvRz66AgPXy7867pG9sp5pZvA51duywCHVs5cgCi5thd",
  "key17": "43LG8pEZPnwuhkR4Z7H1LyBYF2d9qFQKRrPtdcw2v4grGedNTiHnhooovmPnyXEutGrwQcys29orftarCUzvLpZr",
  "key18": "5WrSWnEHL5woH7hu4x3aaDmxu9XEGxKtJ7UrQw5caW2hNNyy7ZuDz4XcTxDzAdz57ko1LQ8W9HhiG3VwyhUtRYtK",
  "key19": "4uv25poCbmYVXg2hWX9vdZVESLUvpfHSmW8BCea8sq6QB1XrrxoWJ5vYD778Qh7mRP7zYb8i7AhrtSd1P3iMjcTF",
  "key20": "4yvxZC7dDFg4ZW3VNKQnUDY6dVa2tE2RFZ3rMKofwJmADYWuUEhfkp1aZEVgDXFFV9EsDbjNeca1qezyPv8Gipo8",
  "key21": "34s6Xv4FXH1CjCRqQa2Ypfno6ULga7tzMFLPFAhbkHcWnEyihYZM5Sms69iAjohjHkAT347xfnbpi59yGjQCD3Yw",
  "key22": "Rg7QmXgsrnXGQswWkfXzhsHQvMF8SxVePnp3ML7NFFfqaXxpff8UfrWX2v4RTLWxTEXTwM9XoNPZNPgRKBne2xq",
  "key23": "4iwK8SNCB8xhbftrBcRetYsuSgx1XWvQnKjZgQQgAwzWFGm1S26Ght1yPkjppsf2NaA1fQowHr3dxrA5hzFdg6JJ",
  "key24": "3yxXgZCMJ6s1R4dD46N3oXs9q7H1y39C4bQLvfWNBs3S6Aw13uuKiHyA6KbLuJL8JJdjPaGFs4EEt4EuCXJfcChP",
  "key25": "28BrxBTScJQQviUJY1AxrdLyGbnJq5cq1vHCeYQpTUaEFM2J8h13K8Y4pomFEUsvWATc1D8PELK7xzr2WFZ5eUbp",
  "key26": "26uuFds3c5EEWnaLLPQHVG7D1YMa2g1Yu77vV3VQDx9N5KidghpW4aaX9oJpKgEN8J8qQQG4m7d2Ro8shPgAAc2B",
  "key27": "oQba8Vfm6JUnaM4ru3iHzJHd8PzyUwJGVoPk9QZVGWqJUW2gqYJYFgxbS2wqPvaZpKSDjAsHiyokJRNrGbKvLp6",
  "key28": "RgJtkLUBxbiLL9oeXgAN24bKCFTRsqvjuEPqdggnjeuqLCPd9e3NW1G8aXT1HvSuj7bpZQWAennrYhk4x9FjJ7A",
  "key29": "8v54jptLAF5AgwSTs2fvJSppTenrBPq7cM7P7xYyMo6HJLs5EkGYs3Xzpv37PNBgYSdpSRSzdg85Voy8L2veBrF",
  "key30": "2sHg3R9FioGkyn4abv8abytq9hexZkYkJBKYV9tk2oWXyAerd4GSnGmRtQ3r4gLzo7yJsma5zdSgiFVWHNgi1Xq8",
  "key31": "3hSoUjTTGoB7ErpHeFrSujBAWHistdrJeofUo6vjf3wTkXqEiQDGG8v2Q9QUVUnUp2eKzNBxfc7fZhuTHtGpZcG5",
  "key32": "3pjvf8Rk6uKWFFy82febfpNpLvGxnSf1Vsp2SEt5K8976ryesiHJCpHBaBv8mQxrzmeYkSF3xSAP3CEN5wra4DzH",
  "key33": "4cAgvc4C2wwNDNC96XU2RmbHqSsAnv58xUVonTkc7Fzq2NKVhmeg7jyPqEca3ijBL6xAobdyBMMZhU5JVETdL91w",
  "key34": "5Zd4FD4iZRhg539wYEaxwVmTK8wZCVoZVAMdyGfZDYmyhc4Gp3JPd4urPL1TxmFADPoMe61q1DsHZN4PuBu4cRwt",
  "key35": "2wtXLsJoK5qukNNdcorNXT4XsNAJGGy1xS3g1i5mdd56PwqXVX93z7ed27BiwbSP3w5PakS3oRsG8vMqWdD2CvBr",
  "key36": "HLfRGyfCixGvnJKNEQxnxNRE38VqgXWwE6mSiTueFWxZLTuZLkyLL5woyxcGTjEyG7WUevXSh7t3fTuaGahCRqm",
  "key37": "64De6b1hWahVT8svPcJ4knin7nVJnW2qxF6xynpWAHWkrqDA2hnooqaGJNeYDRSnhFJxAkuwPR99shpoAJR2wj6p",
  "key38": "32zLWD3j2dSCVJCFBUsFh1zdiww1CLfd2qv2rfFtvwWSBLqqL4fbDAkzW83JU2ytErBseUkvX75s4R2qsouZ5fUs",
  "key39": "3VURoHGtmcvCiKnWvFE22RJFvTaFnrCNPvmNa4HLZ44zgJu2fo3TtWAfNNMDdpbLjJwRVvu1JNu9DKhCkYNGGoar",
  "key40": "iyb7dPXhPxkdQ41v8aGLkoGZvxvSRpuFrKXEv1whZF792Gec4qHd6N2x6kf7Dsv5tQRbPwhbd77NmwcJmQcVckk",
  "key41": "ArEkfUTWWuiDVucPwLTky87vEaYiH1DiAWBABKEB7zE1ZDhMDaVV9ffWzNS8PEJG3NXe9bBU19Eq7a1h81J4KZb",
  "key42": "z3DWupuBGqvLkGXpna3fd6i1Qc5TA3nBT1A7hycyUJe1Wzg65FpviocjbNWnKNCTavERKCDDttL5gEcZgD32oub",
  "key43": "5vKCwsK52KDjmM5hZepGQBPXZJgLL22JqFLYd1gxpbwRcff4ZBMhm8UWzuUrxk7Vf2q6aUnkhN9wght4LjgnicxG"
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
