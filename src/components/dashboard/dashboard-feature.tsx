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
    "FNcwDWGwii6zzniTvXX26AyAV9F7xrgrtHgmaKcMk5shLsDHaKPwu9AbGF9q373bmB32xeoou1utX663dwnvH3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bwsxhAnySQ1gjiz9sXpaw3n4SkgnPcAmtTpK97ewwZX1Zfxmt1RVfgwacAZK2brxCz3EUgZXjHuV6aXoF4UFy6B",
  "key1": "9J3S77f1WwjxszAsFDjBZjf4uvNrj8nct1bBvDPDEz9a3G6e7ns5j9z6b8mLEZUy8yEmSmjjH3NYNjP7SigquSF",
  "key2": "5zL2S9CJTknSZEs8JrvYub97D6yDQYTahPRUsKYBPodqXjrj5Qu3THqmiKEsVxPyvVR6g5dR4SgPQBe9xziq3Sok",
  "key3": "662yNtworfcRnnyn9cmDTSpmepe99rYKkmbrvvwdQii1v8SpYDehvmg6ySeN52J11WKZmfEaUmy5SKeR3HXeDd4K",
  "key4": "33x9vqZGT4EuBDa529Je4QnbXbbkVz8ASfYnFpp6PhKHuMZkgKzzcBYckxiZrCM5DWxqnnagzim6anac851S9aLq",
  "key5": "2iKeKEXN6yFRqY8zw4Na71FcH6ZuJjosMfnNWvFf1WAA5J7FBmRWTagj7EbT9vLrNu5fFL5q4z938LvdtYcJAduz",
  "key6": "d5eSEkEynqnjV4BPQTiC3a2GLSA47FCFyuKhWwVyf9ub58DzKXzhE3eg4NErjdsNuKwLhjpG8PQd9ycqvoCa6JR",
  "key7": "3uhE9fjS7vypRtEdHHR1gFeGwCN4GZ3gPfwnWePGA2KiJFLMcvZME419M3k7KVLHmSVAZb3CyZQxeedgyM7k8PP",
  "key8": "kwE2aE37hYkwWxLbsXAbkedFpft8eH4a62s4NCEXHyYK2b8PjssFEouMUuGc51K8xLHtfkEsASxJuWZBKK8Vx5u",
  "key9": "5mFiT6THbLXjQYJ7X6pM9NLRT1QeTeDLvcBUaHC8nQxkuCVN6PsDbqp3fHfz6eEMXkmyVdB5KfknuYPQjnaYstjx",
  "key10": "2RDpPNBnifSCAJmBQJuPwVAWVyVYSz9pUVb2AMqUVrBQNY4Z7rE7jVX5TGxSiX4CJxXsqDJqXdhwL1XbisPnue8G",
  "key11": "6rsH8x3zAHpUMUiXLCiGpFeZJYEb8KuxFtsAdfgSzG7XaiQQaegcX3YNHQhCtxjeYaSGWfKyDR2f8R56b1o1NPe",
  "key12": "2FSz6nP29UNbWPUwGFu99SMXuTYvb72SwJr674CEUSzZbBu1MY1nUNg5EMTrTAJMD9nFAiADmKw1Asq9W2gygVxC",
  "key13": "8bQWTfNqCkFPhNHabs7SWcsa85JpA6LQSYZBch3iUdayx7CJMqCCmDtA69pXANwrdHa8oU3HtZzMaKqXrxeB6WS",
  "key14": "3KpBrgwY6qeo6iMHLrFZq3Gj5Nc5CL8XSCexfkvSHqxghfien7wu7ePEyK3f64zDbTwtaNL6mAgBN2Ujy2N3ou6g",
  "key15": "5Uk1wLgkyMMogKhpfetTfP4tkXNTbr9KnsQ7j7TJRe3Y44GSiZ5dKFR2Tjs7ariNQRwBCk5BCdSNPGojt24SH3MH",
  "key16": "57Ui11iZbeQQuNesNNzHVmmRWNJCLDyJWVBHPWrmzyfY94DUgJtFTRajq93Xb5ffW5EfMA4T6qxwWiz3tJTuuKSv",
  "key17": "5ebkAWQBBBvYQvzUkJ1Rj43VxD26GszdKrJH8wMns9pmB6DTXfbcv3t9rH8qUDzZTDzK8n7XLQKKX6Sw2kktX4QH",
  "key18": "5fhnuMvNouAPaZQWPx6mBapQTdrpXxuX6wNxPdC3Xnux1Bb7a96oKnXFF6ai4kvomBkGmp3CXFx77cJQzvVcy17X",
  "key19": "3bmpLr888xt7GwR8X1qzjNiGv4HFj9FzmRS5zLvd98pdbje6aGu7CeMcV8XQZwiz39sQtYbr7ggYEjvqFSPAELH",
  "key20": "3HqKMx1ZixdAHhFgyXPuZhjNBo7DaVmHYDHfWCCuLZEGP9nBF2mooktJFRNNVer4czmNZAidXR3RFcsiH2WWKcvY",
  "key21": "55exvFNuvhXTguEGAT7d8Tdskzjta7kBXy1HSckZQj1w9cdw8Cxu1thbC9y9KNph6rh84iDeQfZZZxCvwGndUWcW",
  "key22": "jv7GCyKi4PwL6kUXpGKAkSiNYjQZBE3D6g6bum13r8FGjEAgGfUZg6ZYgxwrfhnz3xaork4eRYUuj2QGJ5ExiTk",
  "key23": "5NaSX1tfWGCkrjS6Zuk6wsnozBx2ZqA9AcVqGRgHdELex4GbFj8fCQ22RYoDzxfPFkmnicNmFufbEAWprkknL3ze",
  "key24": "4g2JqKFQUkEi5eUQCpj61y38eRxwFdshQkQsRwxD7zzDkVX3AjdoyBn32RwbRYUaufzHiPwYofooC2kkDKnHhggK",
  "key25": "3CtaK5aaa7Ru7JsUVLyb7PNjVKoWnjjmc9beycV3zDH8Z5zsAx4JxvCjZedrvtbVQnDjnVptkj1xoQJreGmLDCzK",
  "key26": "4KgMqq8ThyWXYaY4yTPZZGFbrJpoPVLmZN2Ud5xQizkMh9oNN4MwrK1c1uzDFbvoSNbX7bmg89EXJuJwD1UtW9Gr",
  "key27": "Kbq9CRbEnGvTvy1r1HLT9b3sVc7BQXqhbohhr7VHH5Nw7TGca6WTNxP4KFBnULkMpsFbYJxvvegWHJTcovTphh9",
  "key28": "5TT9BoNGQHu4ie8Fgk5UtGeWAf6qRdtLxSSpChnJX77Q6RZjggG9Na3yLuvfT9ymxXWQvt7XcRHC1uVpu7toWSxz",
  "key29": "4hah74aVEL9pd36ExtsjcDqxgJPBouyc2HYJeZUorgp675RZjFCFhLbQgAU6fBTBdx1kTPxYujjEyDXRPhsmPX3s",
  "key30": "3Q7dx6wE3SAkVbsL8Bgp2cuhg3qtyB3xXy4J4kHKK76y5F84RaDRNTogb4DzVdZ82QYAvZSgo22ykhkmchGFRcUC",
  "key31": "DsYPtxVtJVawnTNFtTfqE53zwco2GFtfEqrh7Q4REUjuDdKk6vV3KSroT5bxQ13vUDhiCrqiZx6M1xiGEtF5CGv"
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
