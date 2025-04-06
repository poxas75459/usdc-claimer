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
    "oJXqf4VEJ9ebY9yiTrX2vwFaa4AJGq9H9ssDy9z2CBpXsrsxgvSw69zRW2favuy5nMViTggmnKLS738ZToJ3A7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RitF9x7zLeKTDY4YJoMMHJ1FXCGsLV1rCZZggv8QnpUMVnVTJF6gxHS1P9cfexUbfL7A82AfhrVWuoiz1vukRAV",
  "key1": "5YuYfhndfXQGmWbvCrGU8AT5Zy8ucUfGfhfz1iyb7ZkgS6qUXg7PD74kLRrLT47VRYWuTPnhp4kp5hUv5XdEwCyJ",
  "key2": "5tQpNk269GSqFLirFK8Ap3BWFvwi8GjDwC83THhX3LEPRWFydYz3SKpXXMnNj3GMwnMdkPE2PbVYRQaFjJjJd1ty",
  "key3": "2sneqBf9pqYgvargQGFVk39vnJqUmJKMxdAjNN1H9xzkbo5FXpZYCA4WFAUWCkcAih2hcv1LfnfXsHu4q1ceaRVE",
  "key4": "3mtTEjduCEg1jkiXL7XbgJYhxSHqTkkMACKmtGg52GFnYVapbSt236MqLzr5PLJusTRnp3D76kkjhCL9A5x1Jf1U",
  "key5": "5gi7LfEjtyu4nHQoJ1YNm562etTh1Qa6x5SutNEYPor1SZJXLxwBcVCHKLRRZV9UdZNCP8th49iSTWsRktMtZxuS",
  "key6": "41cqM14XtHdeiQECUSiRXorMeUSYEmrT3Z3XFSHZ8oTFpj4QoTWz168nYaBqpVSp81gcZzBYTqn8h4VyQ7TRWAHJ",
  "key7": "65suHV6tfmX1kkTyKcQPy5Jozq5WnUxx7mxtvmcvERFiz8bFzZSnLxDP3EphNt9Yro8zkm5dKast287CRBynF2rZ",
  "key8": "3PBmSEmtcpmWQXqMf9kJbqofgrggPuBdm4A6iFWP7ZpmMqDct1KqkjKwz1HLEeX985KvniSo6pSXZ3V2WpCv9VfT",
  "key9": "98YqQT84uLctkwP7bDKtkXtjg8dZHKPovJShFnQhBcbbqyEDsf6FX9X42oujj2SpEzQPJn2NRVg4TaTK1TVVEcT",
  "key10": "JoukcV63KJaygwYctngcVc4mikV3dQ59fCBsVBx1ofCRqe2vu67LJaV32xEgjJNWw1RdScM6SSchYJhGWAr8pK8",
  "key11": "D1WqFpSUptGE8KB9iUj7MHtTFygNNbqn63eQsyDKYeiEUuUQAeMxzS2Bp61fxFVKZ4RUQQmhpNssGJqb135kdxE",
  "key12": "L83Bk6a2ZcwUrUW7Y15S1wkpeDZRS9ZenipPYFDDXqVogsN827GSrZTNjvuLtuUYgXnn9WNR3qWWtmdq1WSemgv",
  "key13": "JJ4uuz8HmjLwQBTYrLMphj6cncKAoYp6Aq4nrib8m2sVCrrshcPz1miFNszAqzpEyYN9VsUDk5TtLo8u8RdyPWH",
  "key14": "eguU4yNw6VTD1jLMqmoMrBTtvA52TH8rYbZmcr8TWQdXjV27f4ZU4dVK5PVpxRicwTYQoaG6vk3rhb66NPFw4t2",
  "key15": "U2SfqoqR2UpCUG7KY6rLpqtGfqcWVjrE3LJZSip91xZ1TA9BVz4AzkBEMLgzqXJnscvR8UWzfMctA3yc1iqJac5",
  "key16": "4CaqR8oMYs8DNrExRpvbVCMezGWJHcTtpYJiMyPhD5Zok1g5j3tsZQdbhQKnYSuA5tSJzeTpeg9VDkgFkgwQzLSg",
  "key17": "4cvQSiETp7i1La1Qq7Shz2EhWg8c6c8rEt3DjpEDwMMGhr1xe6uZYSBgfFT2uSiawbkqJE4Jr5S39ab8iGohAMgm",
  "key18": "4qcYNYaW34546cdxJ2BSeZ38HwGERSiJnZsGpvEe8U8EUbs31G1fstrHmuCwQgUmb7pEi8paE5BgLx95KH7abzL3",
  "key19": "5jKN9XNvzoJLnQdZibei57CdCNtQtk9ZtDS1nVCA13mQk8T4t9eL3jrvhNLTA6mTGuVMJSR37bt6Su7UJk8ih4Vt",
  "key20": "3CxHqfNszWjFZC7Qm7esFUfPLkdeG63ppt8cQZrNQz6ruRdvZTwNinhQ3Y1e1V9MBbufNeHpU6Uhjd84XEmS65uS",
  "key21": "4iJT7xwjwX7GUtTZq4eJsZ9zREipqw9gZzDWtZxB4tsezDFF5GLYV19DC81sQAhuvwbk8KwYHwHQtAsv1M3KNBHr",
  "key22": "5vRLS2qVtP5cQzk2aPqXEfFBz3PEXZS4W5BSqY4ZUauuv7CqyVRk8tNs67GnA4KhwvxaNCP3ENxmSpcauF17aiyQ",
  "key23": "2NeiNzdpQ3zMG3YSA59drCQPXWUad5RV8oK3huxLmM7zMJTqJRHUutBkFD2UYCcug6EmeSLBGtJhdUWsXpEVitpJ",
  "key24": "5aLLhKAU73RESRGiMm7G2ifjz8G3KJgKVxsPbs8Pgat3xxDTh5CDYbQ74sgZ5FMJmc4EMxjBJJkrfTWrk2Sdnc8m",
  "key25": "33HE9vVZiZBE3ZxW8448aTCGZ3ZvvrCcVxbeGq4esf8fUhChZPVvRbnGB2oBhdpP53KgTRjiitpHnv1LQ8VY2Jk6",
  "key26": "5LR4LGBUQbhnxzJoLT5tsmCZiyVxWrR1ggQK3yR6Cgh6g9YookjjXbxx13V3GJWBGoeU7SsxoHJseiLu7WhEDDnp",
  "key27": "26bJJZdfD4ToMC5E8XQhGvKGizLtkmMXWueH8JJwQjey9oJBw56PbfkHvhCQ4w8mWXrL2jL7M9f9LZWzGZBEwFeG",
  "key28": "22k7XeEsThasrcDdAPDmwLBrVED2AYpUXYi24mJY2THB1gyhxTv3z9Xw6hoq62QtK7VGPmHrUWkAQ2QUfkRZTDQ7",
  "key29": "3JxizePwqVKo3PV2nNgMmjN42mn6b4xUgsydvnrrGSTQb4MBAz2h2Wr4WHgXqF6u7bMKGV3djrDDvhqHBHvdGzBs",
  "key30": "LPVcmaEXyrmgPwFBQxFYFS8gmU7G1UqkeTCw83Yq4wNqaFcr1HZbb2DNNmAeZv2qquA2urbJFxBxHFgYe7sC73j",
  "key31": "2JEQNLKoBH83Mv5hPAobKAJUHMB2XabFrTHhJBHi54omv65DjDas81L2S2GSD7KiuRyD75Xh1DX8WXGE2g54H7Tc",
  "key32": "nLTUySNnPZSpPm77EsBWeYyXHq6XagyFnzA3tNR7hQy6PrzQAVUGxbMyB1yhJ7Pnv1691YKB215dp5wTxJgUm2H",
  "key33": "66cE4uwFqgUdaggYZaaM3PPpdXqi8nJG9MwwQji1hVVwJCy3mEkkf4XeVuX7ztrxu4nExqESYwwhH38H7LjcPYkE",
  "key34": "2ZCNyQsSkGGjSzhKsUxPLtTCq6prnojZBusv8UzLnVMdiUG5xMHMtdnEmt86UDzrLtKUHARHjRBDSvLCZJ9b6Pxh",
  "key35": "22wrxmNqT3zzYYubwAnZZ9uDUgZFv4ebgkiLNTJJuHdV4E2b32oJ6jLcwxK4FULUm8LPuaEHhf4jWfk6bhdaZCWo",
  "key36": "uPxZCVskyGXzURoQ25NpwimPdRKdNajxBma4LMuVxqTse8EANYW1YL9xKfSMoEEQJwHyuRfoKW2uwYcJvqdwwTH",
  "key37": "4Z5qWCz4hTHcyY4r9iCgJgLNgSoj8b6jDAYMfyFpMKALVakr4FMjhstSmnfVQuMroimT7aGguJMb12TFG8hCgtYZ",
  "key38": "4ou8jmWqckAr7RMAjxnx9sieN1iUBeRVm28qcnnj1x1RPJqrxKWfck9NsiA9E7NyxZWa8YgPLvQ7axadBtxztxHT",
  "key39": "4BefRqM44exB3vgHiVZKX4ECZyELpVGNgmUWspN7qstpTH2kbBPG3cxf2zwnoyURmVfV3rPmcCkQcjYKcTEiCnbe",
  "key40": "5xUwkNBXRQE8XmbwYpM94bVQBBaiUoSAFAoMocS74Cnek1si6if1T6GSUF7QtDZcAHYGPvxSUf8SktvWbDkwCGuS",
  "key41": "4fLDaXEwG4Ar7sa8jfWXVkyqAenfqiJEpooKFJQApjXZTMMsZwvMrmPaJrz3icXsHXGRDh6ehq4h6yuTzSBEYFM8",
  "key42": "2pKqj9LVAkhYRgy11JRq6BHdxhBUN3iWfof6YudT8jXPrF2mdRdqvhwiLTZQLQqLnxRFamZCqPvHWaL2KHPRV3Ry",
  "key43": "3DX8EKbghsfuM16Wd8cKdNo3GFzXCyTBq3b6QEYabtD9ymXg8BPihu56hMv7gKVWYUFpL8Sgy6Z6yMVHCGwjzgsy"
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
