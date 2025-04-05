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
    "5suXtDGXVevy3SDW2EhTBCHwgTrznYBCg3Qi6gozPQUptH6NX2jjHkxgNky7aHZSPoZE4brZGLNP4unfzSYkYmGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFwEkB89MTSbj4GuhKUTQA2kBkEK8Sk9HJ5kRSMLcGxyD38WYnaC8RUdyZFNvCx25thFagK2syFS8CeW1fP39jz",
  "key1": "2XVNn1PuGHtL6rJKC5M6pHC76X5DgkwUKto4n6EQqic3d2qatJBZwwHPpSKYMnnCMgEkj54trCEHafLmyqLmDhss",
  "key2": "5KEiG4hrMjaQBAhkBq7qwugvv7w5EJPDbUzBA1hT1uSExF8eE8KxpAaMzUkhJuc49Qua8FkH7XWebNkkRrcT9Ks1",
  "key3": "5SV3JAYA9QKGdDxbiat5YBvbjyGfgtfZbCtxVwNfoaFpgTdXGz4xT1eiQbL3WxG9zZwWjj2fEq9aXgnNSLdCxSmL",
  "key4": "4CuAWA4Xso11bcb8hxPBPdAqJ2KLL45vWuss8FuHhBawyGfKYc5V1pthbDJk9fM9P8TbNDKrkKwqo9JJ1SymALrX",
  "key5": "5Fd4Ux7fodW7ypGu4gnqQuBtgHAD9ZobdbMtgNZMjSvW6w9cWs5ifTUZunofpSo8zXTqNVeSkNsMwmYuA99XayPP",
  "key6": "67p3QTAstRC4DX76qbRneFmy7441aeKLbvGxfDZHQ8yhAuA5cJkfyzKuYzK9xtAsevtVFwawCU2f3ti8PLxjuJHf",
  "key7": "3EEkUxNZjD7DS32GYYdpjMZre6QnZWayuGxRzNC1jQWuUsvih6CjAb5euyxVxmZDZ6P7GbH5xgFb3rqptCGtbXWr",
  "key8": "4hnJG5MSaPLrYAj8hJx6pKwRaufhYuyhKBi8GW1b5F8CXQJ2G2Vn1VQrA7u2AUdugkDrGKQDuR55Fy1G7Mi2fW6w",
  "key9": "2wC13SLA85pt6JHXXPPiYxHe1tqdqxQ9VnqExHQicNzRtyGLSGG44ccPNku5qS94MbgKyL2dtUixKcgKfBfCfmfC",
  "key10": "2x1E2vNLk9svtWWwdWx52kRr8kuBLQjkLvWCniZa4d7Bb63hMnfb23yx3UEJvf14oKJtirAMxT7vzWXqkorHCJVS",
  "key11": "3MWAzex4tubTx1xzJsd5f9A2H4o9nU3YLKtn37f5uZWPciq5xV89wAYmcycArTCtQhaDQrrPkTAjSZHxdz65Qs1c",
  "key12": "4eXhRjqkHEbbUF7wpFv2qZT3ztQQfVoVgr1fGDYjrFX8K2hF3ZaAvWxTu6iK4gnChKTQhoJeGCxv9FrYxh2ERBTL",
  "key13": "2gGsUWqMjcoFJxzihDvyPPEHCW8w18hvmcLeYxKqujSGUFF5yasA4cATTCHvdhC3rzVu75xpMAaQ6Cr2ZRAMhv9H",
  "key14": "g788oFPhyLVgFk7BNghSSgJ8BoSH9SWEuwrh8MeYS3s8qdjqvc8UxQqyxNCsEt5Rve5JpqzHhkQaeRkkL7u2aqk",
  "key15": "CGrF2Vw38pCpRvQuhinV2cy6c8zELa5EXz4ovkEXftZ2f3Mjf6BiDgja57W2QhbGFE6K4oDvUs3Bp3SYS67phpa",
  "key16": "2zwZC55gasRSKGLANtFEzL2Ph65R864siBHFogZkQZtY8quHbcoe6A7defbBYriy5Qrj4Lc4RE9FjRNtyA4GV5ey",
  "key17": "3hnKpSayDPbXH1QYqnd2j9At68RHXjCWXtXj2JQkRWP3KvkXZpHkTQkCzgpqDNEa3GXSGPkrP6deq1FJweuf7ogJ",
  "key18": "5J6fyWdH2FaQAeVCPFpQiL3k7rV4yuvvbyioApWKiWPZo4JV7yHH2uwCHj8DfEGL6kufUWURtTty6UWknzCmJ4Uc",
  "key19": "x8g8aAcQ3s3LtjNNbsk84XZumb1nfntZH7NdfhKkXaZX58V6axrhPQjrasGbLmF7QmWCf2KahzE66KyHCcVrMPB",
  "key20": "67M2gwpMkcYRpt9EBN1ZiMGDzptZu19L8M3QHfpZEQT5vL1xDuXdMFCC13oQXhDQoJFmrrYnaRbXqprhY7yo91va",
  "key21": "3DZffRDpVrFey4mfXeCCzjfvz8S3g3nd2dsUQtA6HkkSxrS655z66EzrJezXgiD5FWVdrQJWcFC2BmJAeYmj4ULD",
  "key22": "3M4Z3BsNfXFWw2YF3uQchCENBLJZ4afb1RVdRsPHVV4s8Crb59g1EnPFTtfXmwyhzRteoTAhNJK1YDwkKwg8A6r6",
  "key23": "2Vv2GxXKvKCPdTn8aBmvvHV4wQvSKR5KYwqqUd9K9SVLaWDhSwiiwrDZ7rbggGH6y6HFLhui1CqricTtZqMHMXjG",
  "key24": "fQbGi1F1Vg8WGJ276BUdRJgCQyPZngdCpte8tiagVpmib2C9Q3hTeavmaemRoAYEJ3a4UR6FMheSkg9hrTju7Bu",
  "key25": "28JB35w61QyJyWHcks3vwmVnuRHd3kZnCNzueAxRvfZLDtSTaXgh4NRPtaLJh8bCbrZvrJTbaRLXe2diwurndQKo",
  "key26": "3gNa22XZ1bZDEhLsDvEa93Fka8V9A5Loh98Lf6Nn9azchkXU788Lx9mC48iUVWUHqUcG5jF74fxKvogVuGuT4XZE",
  "key27": "43R7gDgfkKJ5sPKWA9PK6EsvZvw9JxtxKqURfNTzL2izbF779ErXMBvdmfADDDjS953ZNt6Jz8odDPLPqnRSWtte",
  "key28": "5cxivooMKqL9etLKdkZSzPejFKZcWCnf81AvqcUVa8Ckt7TeGsdREvfgHf3a4syxK9Bo8CfhdJBdHtRGrVzzKick",
  "key29": "2TkVV8cAQapVDXmpfKo69PTZRP9JPBE6uAutED2yHkQgB9J6LGxpBUAuKguvepAyk6NBiah9vinJrBxurLkP9SZ3",
  "key30": "3hCE6sBR9ezaKh7Fu3sXV6nGGBQwejbgnrkW37mQmwtj3gRNsA3U2eJRw54jPWGJo6uAnsZRCtxZoRawB9ET9WMi",
  "key31": "3okKLnuJhVCVPT7EqbKCksMiepqtfYV9pxZvtjSisGJaejEQdWb6jLPnXfUgtjsUhL4xNyxRsgqV2s7QemPVkcCw",
  "key32": "2MLhtbNy2zcLkMe38KPPE7bmBueGmHcBRBAowaXjnPMuU2MQJyicpRXCXJy8T5RqbyYxgse55Ysj7sRsgKG1SHeD",
  "key33": "xFtg1tVSLWPUDM8pZv54emNr5xEDrLJL5JTquULFYz34sq11SdGRB963Uv5wec9iKYzPKhpNoyjqikq7SswaJgj",
  "key34": "3CekPFaJbvRcGdcbwBVSMsuLsnyJBDLTk9DuzuyqqGAfBmD2vfaeTMLW8cVKJunqzmLfYxgUHGrejX9Sn95e4jSk",
  "key35": "4vWELaQcAW53Wn4FPLDWCZuZtNbqxWaS9mEZFWKv54g2FTDG4cuRR8kLCjne1s9gWNUtKaPTr5tDyen55JcHr9MP",
  "key36": "3R8hd7B4vVN83qdP7NqqBvU3EKx2KeWv9iH8Dc5wPXi4MPzh711fL5dVcrPkfTqouKagRFLygHdsNCb4aXmuHnf2",
  "key37": "54ThLz3FaLFhxJWeMEhuoKvA6knj7B3fATbyW6jKxNuj8yaKJx3d76FtYvhGpe14vm8VEmDfi453WRZig9QJrw9x",
  "key38": "4Jm6t3v7zoRyvsMRd3u6dVz3AHZ33wcH9yyiwnWSzdymzE33PSYvABNbtPo42orKBNamdf6aM1r5Xk4z7G3z9Jye",
  "key39": "44n5bBBNNpTqNGTa6pfGsUr4sDozdTVoWeM6dmudZuMqzTLZjmSGhjgdcmQBBaqgGCVUAsxoCZb73udgmkR5454a",
  "key40": "TGnyjvGVPnqd2F8G1yXLtb6uXnq7RCHBPoMhgMU6CSewfyUdJ7GQ8PZhTm1e39onbQgEPHZeYmi61iwWg8PZG3R",
  "key41": "2sY9mKnAUcbGWmJg2gMAKPTUcTCvQqd4yi5ihxEZSP1wSC7z77wtVS71oms11PHoCFJt1in53cqYYM6oscyKjmq",
  "key42": "2KmAZwDx6bBoxdFxuzigjV5c1p649GEDf27xkqMzLeYa8HTf6XXsH7DkZ8PVEgCW83KmJ1dXcqAnYngfFGGMYgUR",
  "key43": "3gaj5r69t9npriphMLUW4eAALB2n8wrYEVwjHVANYWkcYuioZraZjnSzdGeam1p3LuvxDN8rTWjZhHLMqdMbZ3BR",
  "key44": "2uiPS4NwecWGLNFXVWsmjas4BPh44ApzBCxjYxJvsQ8UCQSvPYBzf2BHB1gisy6nCg78o92gGTzPbULs8gzvVadw",
  "key45": "48f1W19woT5P5bUCptg24FeZLhzYR3wdrGX8FCCTwgctUxqTyXawuescsaDe2p7NnGmG9Sk8GfM919t57aV9KCdW",
  "key46": "9DXx9ftdtXiDkueYjuDyqc4iNQ5XMPAE1DQgtk5Tj1HKZWpbNzv3wPF6vadsn2rjnmEwpMrEzsy1BvJsA6qneQQ",
  "key47": "5WpZSyQpHn6pKCSJ6xf9TE9nb5W8KomG5ZQSeEMkekNRbTmyrN1PzZHuafKJ6uLvCTUrz3kDTcSM65swzNFUw85r",
  "key48": "4T6H6MMxxSavuUSCXGBdcZWYGvkidYXhz2rymNY7pUT5jPxGdFgd4GL5DfE25HMo7H8sZL1Q9RFs4UcfQ1ghQxGw",
  "key49": "2wnGL1x39qoMLFoJqGHoLqB1zGAu6TAmVqp4TpugFo6HrnQSDT1YfnDdiR5FiJU6Msj4tKuz7zAphdRYB8AUTenj"
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
