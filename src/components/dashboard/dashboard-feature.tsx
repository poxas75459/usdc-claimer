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
    "R6cVBkiSNJ1j8kitCEDv1jvvRc31rJnk1URL9G3aJXAcKssraWoaUBB2ZHAatEaLmuDZDanKtc9PiFxE8SnrC2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51FMRuBB2t5BEZ1XazFiNuaoafAnQybEHx1VPakCjnc7JyKVhC7FhX3Mw1DQR35ZwqiCYftEV9261igiSSgEJT9X",
  "key1": "5iPqfTBSaPjvXS7YKJvJQZWfWp3W3EkpbGjgeorBbf6HUV6oaRPAQ317PDocwpWnn8NN4MLQBs6mXhDyuS6wQKkn",
  "key2": "5CDkVSUC747PfpccxooWsoHmtkHi8k1bqAqRrJCqb34esvuYeyhaSepoi41zJDWaZtVot8MJGM3QwW6zT2fPctEC",
  "key3": "25yhQafTpLMYYZ9ZCGYwgDxmZxpHgRKDZcb85676EXX2dNFNu5CKMznAzEV1HxSipK7BT7rCR8DzDQH6og8ouxcs",
  "key4": "4VxQCW7aVjzCqjUQR7BLNV1i2TiVQiUoXs1DFNYkJuLTBWKfeA3LbdWNt66ThXMk4Qt1623EucnhV4csiaXreoQk",
  "key5": "3kbVoaESkhgxReaPefoozvAwTKCcKTyBXC6mC9EXr8E15HTNUjKoSjgRhYLdRPN5BJ8HrvBuGTUH7dQdttQrwY8r",
  "key6": "5ZoSMttVwPXRbqhD41M63EUvYawiquU5axz3gMhTsub6aLozH6LGzTE1ix6CBYyqmz8S9K4rquNqZ2PDaw86zRfz",
  "key7": "5KricSULAuKhWExc7WciuLDEPj2Lfkaa9KKMUKsXVGFyBpjMyRsnm9n779MYX3M3fRcExNMzwFdPKnpbx9Jqr6f7",
  "key8": "3Ab3gaDQSuGMooerQrnJM92fKGU5hGaB74vwVMwuMRTTLqk5e1MiRJpnsPhmrWoHZxpoXzhJquhFBMXADmWqxukb",
  "key9": "JTaBYCMs5mmvzZLzH2HJVMiXjxYanyRxKK3jEFJEi5MmncuP4nsc8HPFFsBmRnmRvaAY15Yyz57mnqerZsnCHx4",
  "key10": "3E9zYYHUBawxtDoPzhfj69MQGUpS1FFYYUkNcAq9aVoRWofqWFnpuLYZe8DPW1S5ZiFPNshN6ZH4zGDhwvCgetne",
  "key11": "3vJjL3xYe4KCHjRQz9JWUqLXYdnQtopymbSwfJa8hpvt939qtf2DKZoYkA9VZfCSmGwXVMAKnsJGWeBkUx516gov",
  "key12": "3DEFiJJEYiKyG9bz1e3cvsW4dWfhnBT4LYQDcf9t9hSZBqWYvHmCwYBSL5eCRBY89SNaCeXKwTTe1Ldd3pcaqNV1",
  "key13": "4J6FBodPRrzq4Ep5FWpoK4WZU6aa9WonqQ5hkE1Vy2UcS262Wyw3zytgo5qwWAKWrP1BqCZnMNQa3KhKbphZqufP",
  "key14": "4pjyUsHHziQkGLxA4xRrNNuLgVsjyNpKcnGdCYdwtoy6t7HSPAiyoFyKPCbuYSdqPgmFBZ2mfiJos1ukGtg3r25r",
  "key15": "2LiLvbwPSGAaDd2tnhNMqM4iR88n6qHsZDmTjjP9PrxNpN38wdSzw9DzoVW2hTQZHiUeBP1XBK5zR9um4NqZyvBQ",
  "key16": "2TMydbR1LwrEjGCkiBLPgHEQVZzL8K8thFCr2CJSAswAfsWuTokRs3pdEdpU6C6pc25MzH98DPeTJjiikGmjsRNA",
  "key17": "4Yk5FXZpTsLUCzRMGsF6CSjYnHpPJPdmYH4QDSWJ6ofQ2vFuBAKUdR7PafhySFKUM3EcMukVgWbhpkkmFTKuu2Qm",
  "key18": "3Z2DeA6ShAyhZ5JMyTSDKZDK9NT6V4BeudjFX9neV58wd3M4RcT2wxUDAVkKkjW8WiV9Pwft5MqhWKLmYaA38Zni",
  "key19": "5P4BGhVhALNcMSVMwLp85CNWuftYFPVMHYiaW1EMf2NtECVZrTZS6w5KB57uNjQDPR3H6Ue4FUtz5trqYYkHML1T",
  "key20": "5mHwUXKvjvrQQBPRxdsQfNiKYrhtoqaXq3atKvu2HVYkLs1LBrW2EnDjurtSvDoL2WY9V3PgNkkY3HPApj96LLBA",
  "key21": "5o77PeUB51KD4je6rcebzQW7Wsg7jN8WaysyGLQ9w6cQMDLEmVuESRT9p3TmAhKxuLiWsW9eS3FZLsthGRzk2kzD",
  "key22": "42iiRvZkYrcis6GbCgZUo8ZAEz8U47PmK7SkUjKTbJK9djeJKv61UHY8pf7EWz491pvenkxokj4Ys8nnK7j7C9Ws",
  "key23": "44nxWbJE8HRJYi8f7juuVhuQqVMC5yaAoCbiCZVgtKbFGhBxdKU3oBqKeNS5Gti7829xEou66RtHBhADdiTL7nvU",
  "key24": "2DH2RFMGapvuCM6ivpbudiFCKbi42b7XFcNgg4g1saKa8VjbB7wtTHBSz1PMGTzNEb6ZURnTWiVfZ8LeoaD7Qyiq",
  "key25": "26MdJKJVAB5a1UJiaRbBfJaWdZer1rT5sg4XoDwjgYBwdZTKdxDTqEzVwiJj2RJ5q6HthNMWnjyiDs7sW4288Ecz",
  "key26": "5xeEHZZDD9do21vAzGVuXHhJV1kFqPb7YrSGP6kT46AWrypYAmTqvnnX2zHjJCEiTNPL2eGisUonaynFQJUEtjPV",
  "key27": "4azvgYWXADjqvHkaWH6cuaN7DypxpjM5tPSzUwu6HH4QnskF8YaTYMR8PWK5FCJjeDMaZinbdoh4udBMF5tJ2udu",
  "key28": "2fbBRJdCsommRywtDHu3FbyQVDDZhrfFWf9uc49Ffv7JoXrGVjZd2BBjRFPiFkn67UE819pVS6Gm3qANR16j4baA",
  "key29": "5roQWeX5xxrdGBUuiS71JoNxpKVkdgSUDqQGoywxBnDboDCfedkWd3g6Zr1nL7YcUX7ZmpEFPytravF6Ducwiy29",
  "key30": "2zG1iDqUjPxiV95VjdZDZAoQNaCPAsn5pyxWhyKHWuR87kYx62x5pKB6qGA5qixPAimW6Ldxbqi1BursYSZTe9oN",
  "key31": "5joRKpR4mridux4vqQRu1RmwrjfHm649Uv7GCEcd2Hu6bqvbeJsw4BEFya85tqwBcUrJ1itW64q5xk7J7kiYbYU2",
  "key32": "5EFSs34EV9fEcBjvukMYbGZqAwFnYyWvXh5AQXFku6qN9jBuSUpULZ2UVVUT44vZmNx2Vdvp28M27nkeZBSHxKcJ",
  "key33": "4V4pTrGbF3tP38KXHF5wPLyg1m71ytsDGWvzDxvGVXHH7KSgWdreBNYLPXTfZmSgKHXNi9FTM6FdyfbHySztzWhV",
  "key34": "41AaPt7x3GNgxf4NgrxLNGfZGWsAbXATpPWjnMGjVky3mvtX4FsbDsyqj6CEZvQwHgvXpAoLKY6FLAKxDhbkZfPR",
  "key35": "xWk8uwFygvuzddG1r23cQCPSRH59nFPCMJGak9uDtSqefwwgiAH8cyuYoGdKQUGzqihPcXecB7rmKYTpwiDGHbq",
  "key36": "5zjrLMw39kpK9BtjMJZ288R9kDnb41dybZFzfB5nVcfdALXkzDhJC9nve3QGrCMgQVHSRkghir2am1g2MfG9uZLA",
  "key37": "2y4EPseafPvmgJ5bWGm96wrV465geYuKNrz4WCZwat2rRvWDj7LhdwTGZcJEexXoeonwoSmEekL3dT7S6DtdJyZE",
  "key38": "3QriyTBLudFJ4kKhwXkVXghXFugm2SGkVVbjcYfpSgaQv3qupW3QWTf8G2iZuNsdP2GH1ejExKYaJksQC3tkPMFq",
  "key39": "41fp2FnXko37Y4aQcA4mDBqg4rQ3tdx3sDL682N15HHPVUJLwLkDe9KHkakdg8ERfmM1TjD72zGbNomhXpD6RY5m",
  "key40": "58Y1fxYNK8w2DtD1qFcKtmW4suSYzrJPzajXJ9pAaoLW3nynNXZeoGgiUu7SPLiBkZ5J3CgPpz627DLr8JbDjvxa"
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
