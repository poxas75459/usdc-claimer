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
    "4JEsJwTyywNwSBYvzkvyhGbNNLic9eXeM8k5uihWfzkGfVcT3SKWELUT8WEc5RFzT8rvxL28eBHnrEgZLXVSAiVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SAUDJ5u1ZhEivHoUzN2rCBQyVi466AbGCWPGqb2H7voy62vbvJ8wTAKL9CVMBmJr5CfN2REFuLvTkiVmpdN9wQQ",
  "key1": "541whNXF1ef77F2cknDj9ezVjHgw7JFdSfJjUgPqTtk75mgHpruGZEcKLFiGLpmSQWmZmxKddEZP1CoEh1As63VW",
  "key2": "5DU4d4JG9Q9949gKninWwuAGjbxmQv5NbxD6juHeqoawC9kaSQELvpQb89GcFz6enZdGUqGBWwBL2bATV8k6dZsT",
  "key3": "4tKwXtjxkTv3gieNFuiqA13BBkYBwfzu69zo1WN5CKfVPU13jUjRkrqtc7ToSPXhjSDfs4Tq5uA4dJXTL1N3heh7",
  "key4": "kztRijNPzQKwZAbk6gSMK85tsoFK8f22pWFMoKjTBZteP8CrxwxZEeTaJbp5TuRchZyfP28WArEjRFh32zQuNFx",
  "key5": "21FNEVjHRmjrRq8Ez88QJRQaYL155BM2dvSJ3BiEBhqSYc7ENBarfRXUEpLk939N6bD1C9x7P3a2xmcV1Um78ivE",
  "key6": "Z3WwyCZ6PEcACZPtd4CeL4EYuNQQM7B8EiCwZECwk3zNCzBA7cTMvD98BSsBCc1VEhEWENMcYXXgFAYSMiBayv4",
  "key7": "553DzrG7PLbrwCsqjzrU2oNeJN4wGyMXQXZuWp4sdwZQpxfrnf3gXEDq1CZsaZAPhv3wNjyyEy9GDfAHFqL3d5rK",
  "key8": "3MT65kNQRaWiNpWkYBYR99QWhwtc22jKWdvHuXRze2sqn9ZrHSBMDChv3pB9Q9ejJKshPX7CFjoFW7AY2nXBL2N8",
  "key9": "2wkmSXcxVDUMsdGujocjPDiPAzK277JxyZiMasm6UZV94Q4Wt4yEi3UTyYD3YggWCiFyHZX1ZLYKcRAmxtPE3qan",
  "key10": "5gZhhHSHCzrCuxRTkXKcySEePcduG68gpdU4ecPPSpWmmTTWeqxc3jPUAaqv2wyxiTY68f2b6xT2z6eBrmF9YgYk",
  "key11": "4Uy3o5155ruXWpDXEo8gqLubJaMd8JEfa6jWw9aYy18wu6tG81hUCrf6SMmzBszEiprEi91LQw5i4qVF6PYH6nwn",
  "key12": "4mKGwGZpLzgwqXrmZD2GT9nZSpUT6VJAFugRgCxJ1coY5G9m63E5SYZPRpkA9vGtShxURa9KuJj4XSkhqK56G2jo",
  "key13": "55MrRyZfjQAnCuwRtSTszLiArqD85rgjdJwX48fVxx3FkjuRHYF36K3J74tjwqRd3TMGndiV9X7EtVCNdqDiaog6",
  "key14": "3wsjbaX1uS3VM72Q7P9YkU2t35gp3H2SMUmRQeH1oQKQvTt4Q1XSxz7yMrQRVEbeFtAMLhXWM2ozDrepzMVdzffY",
  "key15": "TNezQoLefkXBcDjrDMLY3dgvzD3sr8Cict5ZmwnnCLF6WQ14FGxCMSqu32PPcE3sVAHpGAL9btYTor5DotkotnN",
  "key16": "4Bfsa9DNZHTbZwqsTwit4uQwKsca8hcU1PETpJF7BA7HPoh3PQqYrXJThpbB2QJW9BNrKQGusu2YBxq6NsQmoqak",
  "key17": "cpmgPywziMWhqbJhop7FPsK3j3bQNJUB3SdxT13K2ABvd4dvL5LxhSpgsCyGvRrnTFp6USTimn8gwxbwHKeT25c",
  "key18": "3q5NuW6hRRddxyZB9MECu7R3Z1eM4vmuY5dSsK6HkW4pagXya2vRarpeaeJv5euCgg9jQT7V2QSAX1z5WCi1e45M",
  "key19": "hQoxdhDMvM9LbKPy6QVHa88tQG1xVbhYXXHaqskAGxgPApJBK5umXpgypNwxiocUz2bDtKYUbVumHTex7anwZwP",
  "key20": "3DMJCaFNbgdf8id3SyFqC2GAhrHhSLYBZGEju4x8Htr9EmfBnNmDoDaE4KHqT6GeoTsRsh5TFus6VFnt3stcUsii",
  "key21": "3ABD2s13yuUzrhyiswgTQoWTjo1oX4FLgUXZMimKs8aia1UtgrjagqVPAbo3hDh4pYutGnYgQxVUvt2Ys4qLcyW5",
  "key22": "23Dyro8Y8cjphiW5WGG7CGuzZwJFAm3cuDTGaYBm4E6SpBDduajszmocwSk6kg9RLAbfG5sgFkc6ofufZNDDiN6B",
  "key23": "5bYpTCHMYvrUhde4YqYb3p4GE6ofocXnwRCQApZkpJDqcRGC7ybGj4euRHc9SzfLjDozQLdcekQuZjbDCwXYi1qz",
  "key24": "4a5ZhGWsWQRqU38dXrZv4ZGmNvFpFpxRFKnqiDzTgwLqfTxq2DnZFZM3j6TShQLtbU4c6x2mk6Dxbx2mzFZ7zVFq",
  "key25": "pHrrYZ3Q7nW8CFKwnrU739o7it7rGgrNDFcQoeDo15FNhnZoEsvC8hapJtPjG2p8wAXz6oLGzh7N6tfhg67kcJS",
  "key26": "4ws2nb9qv6WFvvem2xTNBDpS2xes4UE5XY5gLK5Z7ucp26LicjbNMUQ16172YgZ9H2YbZJVAFoNSrZVWoAq3vt7V",
  "key27": "hhwHsTHs5wN14xZKE3uA31MGojZ4MQtRSszLCwAMu5YoPZqed2og2oJZ33hXv5HTiiRvS6oWgCxfFs4hmEGGbUq",
  "key28": "3GLfZAj61HfXoMfY2L6aCMzBRVz73ACXog1rMaFQR9bMnrDU2LsN3mao4vYbA8F5XP7aEW7njbSciBBTykNazbTh",
  "key29": "55MKwrtLN1AGQfXkgkRU1HYSCTwFUTUoSFeY1cnTcxD3pdPy1K9xchinfo4CnkzzXshGM3qYN6L6sNFhgZbeKb8",
  "key30": "5X3ab6rrHfwhgnL1ToZoCe8EJUhRNhtv2D3CkaA3edXz3CRndFG5MdaxR5AUnTtSviiwJeshqKrmQC56C6KqKqQw",
  "key31": "Ttb6V2hB3sAszGqSU7NkoTamk3mMnhWKynUH6pAU9uNC3kAwpBy81mZpgMK3g9LGWN8dWUCG3uvqkcu1v75Q4eW",
  "key32": "2JE3ZfYHJRhWjrG7KSqfsvY3cyCfFkoYtcVKMT2jsbwDSwAAeNfntXZyMSoSJf9TXS364Scdgn8rLpYr8rMRTjyJ",
  "key33": "322X6NDHuyxi1v53F6yG2G5m1b1U2h7DoLY5RBtiCPNftDRCLqL1wLiqHGyTR7ogkJcBhqFtZMqcotEJFjNuQHwq",
  "key34": "5cDtU3o7KQADSTBrfBnRDMLWxRd9DXFZgjo2w7MTaSCUhBEUmPsMczvnMBKYVoRkvLkANDYhTKm9N9jY73Z9kZUV",
  "key35": "2934o8LSB543586r3XK4wAQ9gy1oNst64ayLP84FUd4Kn9bGWaX5kmtGW31wvA6FeE1uELbyrbDjJqYiC9EzXTJu",
  "key36": "2xXM6vUjFJE2bAH7YYM1Qx9CXzcbskanWdWy6MmQVRoNHn9YkCDy36EoUgxgxcat4U4Qhg7dZicMxtuedYMKBHKq",
  "key37": "4x67GfGFhXe7omJAwR2r4eduYoYswiwfpZ6Sa9jAq71ze7W9ss4ghRSmcBKsXWn31quyJHEkmFVMwVa5qjRyrrz8",
  "key38": "5gwsnMzBeBD4cz81obE1Ccm5KEfw1zvZCaN3QWp89qjmaLK4GgeEkKbtESRJSBQn4e5RpfezcsDtC4fkxDyEKYEk",
  "key39": "3Q2yu4ie5myGTWRFH4WLuCYitsDLhAXxLXJfgbzQV8CrVjRFN8SqWiRXk2LZuvggY3f2RFJYDTackXkEygM7BHQs",
  "key40": "4cM9FK6fwwa9ck6gX2A5ExH8vHLgb4oqC4mAxjECEbc7X53zmxdwYvhMgRPbpZsANef3fx91ZCpRgm2MTDYtostD"
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
