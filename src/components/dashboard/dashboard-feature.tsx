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
    "3GtBDoUbw8jhpQ5yyUsqbsf4ASGCqF7DyHYQZjS6c7cpiTYMxkvXq6pTdx5xJp1vbBjzeK64k5evix8UwfJNCS6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FfWF7f29QKobK2GmKAS7KMABjXBA4kAbtEU5bPd2ByscWKdes73ZsDFk49wfPnJTM9FuMfLj5DPMugP2xpRERV1",
  "key1": "4dL9326KyrrcuoWQPYDVj9g5x58qx9poDUJcVoE6vtNMWTjinuiBaQfMTngYpdvRoeBXN7DFeeehpRxmdf1tL5fV",
  "key2": "3F6ReX9Bh1UNqTBRNiXFM2iwAZhJbEQ2cKHLy6jNu6SU5fqLHY9TYcXgBrccYJioBKEQmTiqyZS6jhqrVhWT1NY",
  "key3": "5SmedqZUDQ4dQKp4eoE6Se3gawzCR25wuGzGTeo4QmTRSQcwNViwNfBZjRUbWY21KxhyroYXjPLYynSanmdbC7xj",
  "key4": "26p3YAiiWm6V7owhictAsbjb3tCmVwjc4arrkCg4NVcHJu15KQAM82yTz59yVrEqiq3zYny6mUn1MR88TsvmjhCN",
  "key5": "4B7EC2md99sPeHPt5ZqGhZeaxR2qYZQs8gyy7bnEVqMpjerwMJuChSaTkkg3U9fXgNZupdifrMftKqamm2Tk4RcP",
  "key6": "61ZK57DSGsVGecaqiTwMS3beYBMjzwnu4GgqRZ6h5RB2gubwhFvJjCTdTa6GtqUHsiJaiSfx4ydr5mHJKgyNGvT5",
  "key7": "5Y6AQA6JXh181qtbiDPgEqnTcPtyrSeDVXex5ELQTSvGVcyrt6esV1YmYT8iFD9guzHVYNn9rabdfZieiMnG7AW1",
  "key8": "3wncjAfeKAG47xZMnWdNqwfKHnxJTYvoWufAU5zQeeQMJhyXUMcb6zUnKydMzf6Xj3tufGuvtPrQSfZG7LhZ4rMy",
  "key9": "3LAmbnYk4FbGHAMxYu1ozAPa8MzQ1YAEPEE677C7GP9rrqmaEh8Z8Emfpu2eQxfzY1fe3gktpFSFa2DPm6JHBCto",
  "key10": "64kQKwzrzsPMZiMYotWhJEc5dGArDgztwqHgkRtLyjno259NpQsZjazS7AMjNyao6Yj3zJfEF2HRzP3yiJaMUKEG",
  "key11": "3XUo4KzWdFp2XNDTXvipdStwdccUncmUSr2JvBdnYQVKsy2NpumDb5XsGz3Lzwso6y7mQdyvHV4eufsA76PaY7Cu",
  "key12": "4jQ91YjvqbFZoh9pgaGWYzda6FtaYc8byZFenSZdCW6K4Ew5qPJJEPF58DFtvXYDpCsubcg3GrKfzd7xEVZipo6v",
  "key13": "vZdMQAYU5sibvRDSKgNwwKEvYvbHrajdh5GDXvUnfk3mtvrj9LbDbWrRQhtPA9E8D8qq7FPkAeYgcUxHdQstkMX",
  "key14": "wEGGtt4RpUq6qZLhVN7TA11SGZ3U4zxNNSfepfA2DhzNTWcjT3RX8AP8H25bxvGuAxVYHMewTpocym26LuFdefP",
  "key15": "4wFiKD7b7pDu6LgQ9CcM8zPN3cU515nH46beG6T4p2QTwQj3sxDUGmFhwtMakm3qvDzvcnjSF9Kkmhi2WQasu6Wy",
  "key16": "2DzqzbDQTkBYT3CgVjL8htZqnVZqcXwQR9oPNgJqA5aDFEFgzh9D3NcHxm5tVMkyMqT8b6ReAh7uW7jviaDQMAF4",
  "key17": "45yt2S96z1cJkhdgc6W2RPNedkXGPErvJ6NiDUwz8dFzdrC1jxwYDvjARpx3Wc1GbwLL3kxJN8bLmkBi94DVQ5Vw",
  "key18": "4vPPR2mkkrx4TB8atW2pyvJAqXAEBQJtMq7EzrNwHoanFQB2iZBikfGSSvUzVh7joen1ynTspGHiXATo89x5SKsJ",
  "key19": "27JFWkCprzwgbZFQ1p9TsRR8rmM2bMo78TDNtYu2EWNAMYgZBtgKW3ccrcJuVd5RpRdHchHGQHnb9LLzkYjafxh1",
  "key20": "3177A7VoicAjMsw5QXeiBM2o9C7NGHT8NR4wswmGqyqqwNsNPr8fqaAASVfNRzP87jmT9qzMiR154NfwiHkQ2FNX",
  "key21": "iUsxUoroNY68SwECALCp3Bs1s3GujwWpgHCQ7ArdXwkEirxrZSoHYAZM1gbgp9nV343S8TAKQEJQfNAEBnfFzu5",
  "key22": "5YwjGrgbcLhVUfFY1UGkY7tXETBgDQEG7ZaAhG9pPSdKqamdN6oSdL6N1EeHhkUf2jS9DqVxRwtNdCvhdLTGyT7F",
  "key23": "4ETJMoKYcuBEw4vyCq5Ag1iy3MkLHpSXzfp6tmw3aJhaVKMLzZcWKQFoPE2KZ7WdygxBx6cx8z8No5TWz4gEwE8y",
  "key24": "5SD4dXXiBqexXuPVA9nWWr2BSrYniRN5x7mVuCu7LWfumG4mx9sjBESKpfZ6JBtP3QQMsFJoMUJir92pniuZdJ1Y",
  "key25": "2dt8QnpoYykomn2FFxZqnYkHDbowjJBaF9e59TTn5Et5CU8YsEGtUSkNjrTAFAxKHpNjRuP3Yvq4YD3DEzduSKBw",
  "key26": "VyE5wKrsxY6WZ3fnJddF8qX4jvhmGMrBFyoRajrpLigJYn82VeZ4M4J1Y3ghpqWPdNnCzYUCCYrUJow2U2nkJUt",
  "key27": "277gvxZt8Ku3kXXKx4js8fRbAMY7vRLw54nTG71E9oLs5baMYkjyav7mfYdwk7dLo1yCHaLvj3Tzj44pGgs8eZsa",
  "key28": "3HhkKF7ys3dTBRjGus13uw6fYbwbiqT49UhFkodE7cu9k7uj19V33FmtRKGfnikJbWa9tRYNmCR6zu3bzHL1QRbr",
  "key29": "3NcMHATbbCuywXuP8Ym4MxWssKDCZ9anSopU5qAJ3AmZUAyTqjKi3pDouRBocALcJm92h4c4pS1RPqJ78SypCcVq",
  "key30": "tzogKPUzVzyBouvXYRE1vRUH6mukq41GLR1zN8pw9yU5SwFjdeoGD9LQHnyK5JEC9MDgqGdvRFRV77sz7bEPoRt",
  "key31": "k4BD43kj3qYfuiJCfbB151iEpTgZwge9tqdK2MtDu3H6AQeZdzNUv3QpSS5nFSgCuevZcCBorm8jCTwWmkou5uf",
  "key32": "2x8kesRghzwx63VN7PTcxuQRFf26sfZAxg83SrPpPwNwtATZQrQ94pgXnVbAYtsVAKbF372Rf5EqKPzAVR98dBnF",
  "key33": "4MzhtL1hnr1PZNputMD7AgjBpXZ7ToQWtHLfS96eb3huR2GmtsuY6EnxGNpGW6TMtuTxor776kzaTPqoMiVizWTG",
  "key34": "4Nctn5SEqqHffvHm1grEdffc828dgqeKTSMy8i7Bft5WQ1McRcXSwos6NJk1LwKH2TkvWfPJCpB53LC2rEjF61Mt",
  "key35": "2qx6PcLpHWEyKEjHdpxjkV6FnAcqNpwFNyRoDCMy8qLgH14hxbJzfoVEiuyP5c2STnnwYE5tLL6m1unhJucEf8y9",
  "key36": "5dnxMGA3DtipFanHhboEvuCqcFqSuSGJCoMiT5fbXbx6A8ENeTk9fwUzPTpfPNQDiSY1gHVsSXUt6pa3LA2Bc2gw",
  "key37": "4ybuc8ywTw5545rJGrqU7UvTq7CfwtJd6awZFRgt5pVTJvKx2YWWmGwbvYhj9xxaYH1wTYR22Wgje3M5tWz7uNEt",
  "key38": "2918LTgdpKg9rbhBDx9x6RRg5g6fjaedQwsZqwHgyopCjEC9r7FopiCvgU4k7EPfZ1pEa9aLwSwbrqgMsKjhKHcW",
  "key39": "47JfpekX1FhvVFBiuZMrbaFu4cDKAMykpHbY5EywLzqvMnKML1DUZHurGY3Mewo8e5bNLY21cXQ8xVCG8xXjeJ9e",
  "key40": "2D9nf44ZCj9wo4Gct7iCwBC4c9M9T9Ud4TUn7hDqTKBgJeoAKfB8QsZKSPZ6uV4LRH5xuDhr7btAxBcRhuKopd8S",
  "key41": "67n5gFvDpqctwiYjNCru9vBL2V2Yv77YzDGLzA55oJRFzKqE7PmbbdgrFJApYrvZpUFy79DGDo45WRkcbGxmXoGx",
  "key42": "k3UEu9pCjMtNcXSAs6i7LNNkP46r7BwTx7WFjtF6V1UGDeXsUwgjDdCCck1ebF7U4PmtZcebRWGgAMcBwtoHke8",
  "key43": "2G3e7YAb8Xm117Es9UvaSfQAY7BXjnR7JxGQNYzsQ1eYcHB1J6Q2ChVT8mCDA5sq7MaQvucPjTBW7vbiVYg21pCf",
  "key44": "b1RkoKGFQ49MThnVZYsqHEMLpmnRnKaaXuzyrciQSDGXy1HxoRQpTjvKGBK4aphcax1bwv2spfTZDDm36BosySd",
  "key45": "3ZbGk24LQ8ViRcMrq7WSncEM2NPckbBMyLRseRA1tXRppgCeCVyUYvdwxkdq5QpZ8gTQMBMyXaJpL1EsZRDVaoVu",
  "key46": "3rYPRnNy6ZaMDMvcEjuVShHJXZxJFD4yNxvTLuGEuuokmaDCcs1e3FDPGWRg9wFiHNyH4kfFVrSDucEDBvJK1rPF",
  "key47": "5tkYNKdC4qHoQwMGnpPGkQ1xn6BgVc6MCbATgBag1mbU5RnNSdg9X4mbpQ4LkrdGq5czaV4ciRjJLdPrxt8JY6rr",
  "key48": "3ovgWND6bcghRtsRyU8FQXsfonu4jDLs8Qj8Kxm7Tx5oQnHJ9fK2TJyJKkxAVr9NGeezX1gwEaKwtWbbUy3MNend",
  "key49": "2zwBcQddh1vHbLZRPfmoxUdiFgAFsf3EnVhC9hqoi4pMcx9BxdUR6bshmuB2qF4B6BCPQSRavfYBA2t3sFVAhh2h"
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
