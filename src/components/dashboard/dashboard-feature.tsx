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
    "BgXrQaGyTYuMaujnsek2G1YNHjqUDJTtjNWouq898Wy6o2nPqnRn7q3ofcKfPRabgpPkYuRvvv9iou8uG6a1RCf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNQeMQw28eCwAaubdgMK76pouPXUUUD8qzsuadAaCwMXF3pFgzEApBZG8Lyh7buRmGmCnr7wHwq3cQUs4XL4dkE",
  "key1": "52eGYyz4uRVpfrrNzyHQ6SE4A6X6Pcij5zECk4x9wmNiJn8Mm4phjvQTHVcpsWnuMWPZisLgxGoZUc84fYPe8fss",
  "key2": "v2h151Cp6ogyhsp6N4vsDkPxhE8fmZCdKaT45HU7FMzvufK48joE7NFKdFifoKU7mTYqGVYPBFFvaQogFqwEidB",
  "key3": "36PdutMELQdQpj7Vikni2bXugwFjFMgB2wGhzT7whZCRzRiFgGe3vBtq4uuGWBcmxL4gWH89irFHvxRAGBzMAJgz",
  "key4": "ikey15J2DpJsAboksCng1u8kPhd9BiVJi9EykJSQmNYPErf35JBj376rVo6dQNrXsfNXukFTgZ4hpr9CaF1dkuE",
  "key5": "JJ7RhbiQboLFG2Hs59xMNTCib1VbXWHu7RJx1rcT6mu1rYxiJktE7P6ufLGNX5bhRs9NNoiLfVS9Eqw9wwQ5r8m",
  "key6": "2h4DX6vYfmHfFMVPNnpu5TbuRcY5Jb3JaYbPrASArohYJvwBu6sGpvXcTNT8tRuTeynWfa5n8djvC6BpeU7M3ruZ",
  "key7": "4vRVZU4DKPysfULrwL1BQWwGvqC1cEEivHRxoEJCQ98TLcFucUwUatjvcDUks9SoQWkYQLHPieBSZ4e7n8XMXcDh",
  "key8": "3zSZpDeNaurtfDAS2QwU7CcSU8GorCdXr7oT2EJxRRmBV6J6WZt9ysht3zscQYVnAxhu5G2uDxnk9DpG7Mx3RdJR",
  "key9": "4a59Ta1pcRg87Gq2L5sAR5yjW3nCm7JWhRCvGdXvZkKCnuiJqy6WFD3p1gFMaxCmQPjXTxXT52iCUgnCD8UKHrJz",
  "key10": "2vffqaQJPU9G9zgF7zdemiW2XhFLabgnzh9AxdgiYPjgnLVTSLQRfLid1mgxy8wcLiRzDb9cmpns1PPZXt284sZZ",
  "key11": "3Xvs2uQah1iJTcbKUC7RWsRCeiqn6QVieq95PpAturuJCFEpdzy5z1cU1YeQqrhPX44Tsum1DuAzKxbz3fmVejJ9",
  "key12": "5kmttMKGqysSQQQY7hbnRmvyj8kyKubb4FZhhtxXaYiWw1za524UFKztL5vdmw6YNiybrFbQpdShhuHEpWDjQVBV",
  "key13": "3Pw3AbSjAbVcemeNM7YM82msSrEVRdCszK5rBhzvzvj6E4b9HFvjdrP3BNEggCWdGq9uTtcwAGXUHNTQsUUampKn",
  "key14": "7wTyjCJKDpMS8Nb9cNBNZYP5ekTiXiKfuqza7V4z5Sc3wPAhf3yzBvNBUEt5n9R4H8jy6owynsWiim9q6wUyDN3",
  "key15": "2dz548jXqYosGwEcD8n4ouuqVpXyhwH1vrufyc8c8UX924SnD1wgDkdA6PMqSHFUnxRQCvxhVJZ4F5ZpSDrxuBbM",
  "key16": "4cXjXTdC6EfbidHtrh82ZQPj7CypeDXEbF96eNgpvT44fBQfxpfMc8VfAN4u18Esf6zKWjaxfdkZ7ZTepwhwWqvk",
  "key17": "5SXBgVJatnxw4vLPxaHPSZi6FF721kfyKE8qN2jZN8u8XpEGFbGBN83BdRBpBHaZJnNNGtQtuCb5F5BMPfndaLu4",
  "key18": "582JNNeASQXZ7GFd4Y5LwNvBhnLgYemBkM3X4A6J5ETTHTkSr1VSxnHqvdMz2WtADgvQ4AHKbBMwQbQVjmkdpQDS",
  "key19": "2rprrdMJvXwKWaxAFSoMJQ8XaW6uV4DC9wnafue1WeZNmiJ5nUeRK7EEnsB5qyp7tSuTiaC7W2Hnb1piku79525t",
  "key20": "3FYwzcRA2GcGkVvw7tGwydBnoAjbpc1kqpw4PkH3MTWfiCaFrPadYQmNHrVosqxm7578fSEoW97DDFbjwu3VaY2X",
  "key21": "3D5zFBs5idQZebwxgDn9fCMQDxT67G2wDcez4H6PVx92ftJHUDHzBcn83C7MigPVNJNca9CBzLea8grvVwCHR1U2",
  "key22": "4ZwZZFVMEmAXdAVQ6FBid6NubvbWU66UFpThS1EJUwvzAxcuUx5CMcmcQd7SQUSMzy3jjGFAgY9exBvLvjGoCxeu",
  "key23": "3XX3w1WqAWK82iDgxnVLHvv3uPc3K3pTScCfXBxoyEAtDmv3Dbo9FYZjFMkw2zgwrFnHfKF5FH9K2okEEbXCvSpr",
  "key24": "2sxeYrrJRipLfzUcvgojY61q1VgifsThCdBXp8mAm4rhPnXRmNT17FsZg6XJcGgj9NigLGe68hDcJAsyKg4oSDMX",
  "key25": "PaPviZ9rZeGxGwhLMuibkH9QULAbLDapfznK6ZBsxVWT7mzR6NTbu1fDx7m3RkdXHyW9kPC2wuu8p4pUcmmgPZp",
  "key26": "3wsRG7cPsRTCWAW88cJEbRpquCjmqP39YdMA6qn51nWaMgWyHU633LvXhAFCgXjfp9eb73Wqvw31pvDsRnp8UmbT",
  "key27": "5YAVGVYpPxaupH689SaKkGrnmBvWkgYUCo1W9gfjgocoD54avd2cFQ7BEdXjYxD5RK9TNNEgqjGAQDoRxhXydNcg",
  "key28": "59wzQcGg2aGSm2nTt7SLJNFpu8X25YpH9sYzQhvsAuEk1LCF5dMbDSpCdAqiswSd1hUTX2xfCq1ZY5Nm91iZCSrE",
  "key29": "nFrfCmCfbfkB5uPaKvNZqJXCX5t9BVzSGG6moTTBqKyFw2Uk226so4r7XDKmpCXZGWMtSp4CCmtaaqhrZLBRNyb",
  "key30": "528bvfH18HATX3ghmptx4bn2ij2zri5bMoTTRSaqA2TopHFThaJWWPT9LQFbMbLWcbBH2wUJuf1LTszxPXFxhiPe",
  "key31": "2Te2QgQc1KhyRYQcpXjpdkVW3QifeRvP71khu2iFv7jtAqn5Mzh2eCoo7ma23h4Qca6z1xPe2hez1FfuhTbMyDPN",
  "key32": "2Z7w6CyhpL65RBLQrmCPbFtyqY1P95o5Q365WqeyH9fZhiGXeSwPjy5LXpyyCVpDVo8iEJARjuvPYMfK2saRR7de",
  "key33": "e7LT3V5q1UoLgGaa4gwH6kxRprPjAenWnyNMyAMw5Qm6xqeekuQscqGtww3jw8gy5wRJRPugugmjxTW9CZcQVEv",
  "key34": "36rpzBQpQQ9GoMLyNyJDGw4ueWghNe6b49uRyN7mbNKpE4czX1vLncAhE1G3PH2FnhDmzhWf3eWZDoDpytAbfKbX",
  "key35": "41QikHM8MU9ZoacgwJPpXxW2uQXMfL1yHsk1wy3S4pv4x9JjmCf7Qb8UYJv9ggXLepadCskqkw3nSrMiM1QKVF9m",
  "key36": "uZRvEqagbWxHfuqM68PP4GeG6fbKqF8T7zzPa8zDVQsW9ZjMa3RuCUzHPrMEWTzPL7RHdoqM8C7pAiWUby2s7rF",
  "key37": "teeVzVYcN5kbFhYfrWQECCGuEzYr8RjLCJFNSTgn5zBKKkqUKrtZ5ah48Pv5sqMWX4ikcLDavGjNvwpdnwvBKs2",
  "key38": "jogWNzaaReYXiWb7SCFPonPqnu6dg4wKs7P7FxLfzzPFqtMtqG2ZNhqjCNPjj8DqaAY9oQwWyLuPE7nbe1iNkY1",
  "key39": "5Mjf4CtCSYaEoBjuuCQQquqzmYF9YVe4V9fB3Uih5fZWP1QETvsZyzkSP1P7pbWaUrrtKHcQNuHD4QEv8zq8Uy3s",
  "key40": "5KG5oxfngUE9qjpnTFN6ZAawGnJDb2EdtAoJg9uxMNWH49GL59hyJThynw2LxmAieRak4Q88S1q37H9MZSUdpNy6",
  "key41": "FobeeHgTY5dnBgmY4t9tzp36sPe8WVkXt5iHDvuxrBdg8muMgsrT7cgJySQPDsbXDeNcJdp7h98fPtKaeyiphVQ",
  "key42": "5LCLuuSYTDGn7ABEiV8srBxPKbhCa5bUThrYCkJ9aAVyMZ48PQLoLxK1NV1NeQNvk4RFstRjzueP7myCFTfgY3vq",
  "key43": "9amDQVTLKpnEuJtwxte6AGreLJT2cqqy6pqgVVEVnV4vXG54CWnimwY6yWf8AS8YfsqPmEzDwtxXXDUdq1vs91p",
  "key44": "siDMHzXeAdBMccy2sjpQWtE2dn5gWEEYGqukFUb7WPF6hLZ9SMnEixsGu7rdTdsddkv7FYRcpLDdPQmArHdJhrQ",
  "key45": "5x5SasG6mXLVg3WExY1FJp8ibDCPnvzU9uZocNKJLk775mhkE3eZAupNWeZSTXsgVhwrVVqxPxebispF4JfKJcus",
  "key46": "5mZx723dCK5NtDejwJs1mUWxR4bdYu5g5rSbFvY1sekRkzozcrR6m2vq83R1iwRRHMK81YgQGZPBjP7Ubxt5vEPy",
  "key47": "5DskhThEHQbmXbECZRXgbS3omHTJpwxcnErrxhXSauaXK4PhTgL9EVqkx7kUwtJ7FjYZjwHsRo4gqULPpSg2LFZ3"
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
