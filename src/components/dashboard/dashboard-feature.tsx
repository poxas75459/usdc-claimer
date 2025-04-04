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
    "43oWJt956qfRoZxc9ektZNJq3Dh6z1uaSUQtMMgULfgKqahhSUs6vUAWwX4d22TFfz1GVfp4Q2znnAyZPTcbynmj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HH3FYkDsc73iqaHW1UKg7j21JEKi1F8wDNwyC3nS79aARrtn9uJmfanYASXGGjHT3CkTSjETV6L6Bh8mfVT5bDT",
  "key1": "4kdnEh25uU5cHzo4YJwjq8ymffNpTnGBpr38ujcjNY1i43MacFmc8XiEEdLDxS195FUebtkLzFAsTkqfaG8PENmd",
  "key2": "4NuWuEThrbQBR3TZ4n7JGrmNPvgkUKW4H7ZS4ZPCMZyDurWrRw4bbrdwFfXypLRaKXGea6wVzAo5ymMdLGR9SyrD",
  "key3": "2fwAfLSfExV8MMwBSgkr9TFvWmvc7G9m8awyXp65Q6gtRAfTJhefJoKeDqAiUD2cdpxXsvd5CEEEVcSsKvyBvASY",
  "key4": "56uGu8HiXB9cv7GQXWLJs37LCYWTE4iBgyLh5tdPfR6LsSmiYjapqgAHAiPVvxZi66SrZcDW7gDB76CeUVuarJL2",
  "key5": "3D4QdyjVCtFSPFSooXiwW7uJBbNyWeQaT277bTmfyQLPdjiHuCLyjiTsTqB6qZgTKarLnwu1M8QYpSW91ckAzVCR",
  "key6": "43mRMyN6aLKJXkSz2LWTGAHgAqWjd3BAshHQvmXs4XYx9yja9mRFR28B5M5VBpgF5ThAY2M5Uc53mQp7uR1yLKt",
  "key7": "2rrrtFF796kX87VCSn3FztWd5478C9WWjswgHRAu9UoXgPBcSbjE9TD9G3G6NMvABTTkofv7waRHoNuYMRDVLRfn",
  "key8": "8SrTt3jDoFt4XWyhCcZpL7vebL4pfnLSMYo9wfQWiveYWmaNjSWejmFXN2X1FZHBmMhcXzYDMe9C3jHzQHCSeQz",
  "key9": "2pp6jbUyD7xLSH29NWaUwvyNGuW4r2XxxtfTZwus7ZopqMGKdgLTqngVekLjAJgFbUw6r9ABjuHHYUNJ7qsnuzV1",
  "key10": "5mu3bCDa7637367s4EiyMUoCzMyqeEDnHA3VVQHevuRoYEGwJDeAhh8kKDGx5nVCf7GYsM6KxRwxxkjDAkLwiKZr",
  "key11": "3Q4BstZJUKYh7NUG6Kb2y7NfhLVLi7KzNY5xYrbnwTku64CJPGAk6NFdUHhHRkzXQUkDCg4zD2odTaWUFrxKux9Z",
  "key12": "4kqcTQXQounnM8GKdopzuN5aEjs5vwAkJSRo2a3u7MiZLA4FkmgkQ7aAjpmdcaE6EJZe5YGLXjQXc6hEcPoPcDgR",
  "key13": "Bd8H1UNCsfyj9Fw2WRYsh9nTwQNwYcvF3jP7LabJDU47XG324sccb27mWzubcbw9BP23McgJpNgyfuGVJRfYjS1",
  "key14": "2WkvKWznQgHb8HZ3Y6Uq9hbGNzJwdP1hEBu2jnNhaJABb8w4R2YsN2zVBddzKrykzpMEAnYxAy2cnFjykYQo5QDd",
  "key15": "23r6JgLs65Lt4yCN6FvwoZEc6SdfzrjkX8u9jji8iZHUugLcdguESfnpo1Jt4nu99Zhj1egkayoVtcDeDpfsmzMf",
  "key16": "3HsSBkeZ95af2KJTA14EPpWsNboz2QZVFdgsndqZsLo7GEeXu7QwSwKbuS4YcWuhAPXkTBGHthYiqc3ToaFUmfNr",
  "key17": "23oyACkTD5dRTdZ4H3whankjfYMYFYuk5irGVMJ18uRBRiexbCXmyArfVovoYe1762SV3ifTYd8TQp2bcKhiR4yY",
  "key18": "H2qTVLMdJAzvXTufNywkk5dayZBczxNVZskEBcAVTF1ytGnGCX47sWTWNYY7D3xrsSqWFDx164U6425AX2xVqxD",
  "key19": "2BNhRszzTjrvmHiJKwgvpgCbNWWktnHnGiyv1H3JFT6UBXKp9xnwpTwPEvXomyrhGP1HEthVuMsRAWUFQErmLpe6",
  "key20": "4adEEhiV2U5opcT6aTcRFxC3Vgg4QtUajXc8B88upn2JnfiFMKbamdpg3UduMT6tpJc8x52ThDpbwUYn8U3isNxb",
  "key21": "2HduKivN2z4tdbusZyATxamebyGhRnRLX5RqV79ZJarjMnymdKBXj6KpU82xHBf7e4RhMREzntHt8aTvBPwmrJYV",
  "key22": "8Mwxpc1C7M5t5sg67t4H2xHTbgUyNRdUCyPmACR7VwkSt79UdN2fERs7UT9F2qrx1UejyjfUhsa4sfVRcmukKpW",
  "key23": "4Cxkw5AmahcZh6rdDDMPL3UWSZaqZA84fi1Q2Hxqwv8u53Xr7RixjY4Z8z3DrTUTFsW9b79BpUkmD8aHQpWk4sxc",
  "key24": "2ejUbemMCi5AhkajdZZZJXLD9EnJizMFbEXS36BTgqGnMWe2Zx94J5K1LqoML49tmgZ8N1a55mQpLmnjwp6cnXFj",
  "key25": "5sHvMUr1ss2uAmeTgp32q3vpdiXeaB9PUcCuMNvk6uysGH3h7JYUmCKLRU7fwcjn56hJ8KeUCBTQnKvZaCP3ZaGV",
  "key26": "2gNyJURda6anWxxSkGvtfG956MqcogqY78CvLAc4vvXYSeTKwkvb9TCky23PCqdcBqedHGoTKuNGmVbu8Fyunz38",
  "key27": "24RAcRxQeohNUEqL5vG92QWCwKsgsm6SrjicSWvAv5kSrdaDoqUUz81BQmbxfPSNoySuhJzZGdyy2vNVNPfeSiyK",
  "key28": "A9jS8y4SzEqc8kWGJ7vbpbo4Ark9fZ7Go8vjin6NhGcX2SEM5rSod8jQQnZ33pYCe1sMzaRWtdqBTUFLT6Hvz2Y",
  "key29": "5AiQ5M5vSVBnkFDj3xz9hmQ8ApW7bsvSkBVzs7Aasz4rMAmaESnCJzJrQGGJoNodteJvDh4CXHXW2wfzsCGiiZzm",
  "key30": "5KDT9XhHrRqmQE12eexbkQMacWgYbhXzrtNMPHnURcjizUN4aGyBsTQY2uQ98EnDYdNSxTXuCEHTef7YrPyGFQKA",
  "key31": "4eNityzkxyqL6XMFEjnJEsQdKvQ364GkKacPUDVvuVKRYRoBifwiGWmEBvz8A6oBP4ceNEHoQaVPYaYzRmZ7w9Qj",
  "key32": "5K27DMSpvEboxYZqZHA3XtbXytyHWQGoAKKwo5KxBQhZUav8D5p5UUtmxs8SaGpsuQmCpWi78XN8CdwkjwwWDkq",
  "key33": "3wxBDPmjXxgpfxF4A6Fm7gSEpMV4iFVVDTd2kgP4NQopJ52t4ZzNwRwUzg8oDRZ7pBGZJSUQL4pk8WVb3AFchKoL",
  "key34": "44Wupu3KXD1LgZ3yQWvYmNb7o5hCQ6bnttejrvMuCHKtAP933XEXZH9ziMnQ2iwsTfTEAu6JZALYvtQDoJaVmduC",
  "key35": "2bsWBYUQLrMUMs4UiE1eY3P9pGK8VcmbzXcYTniV6ZcamHHGkDT98Gw4Sf5pc64cPhDvamomrGdK7U3UNEJFRDre",
  "key36": "uXvswN5s8mMgHNJpgKUhqnNhohboMEN43kiq9E81vQnu6M2kfWmDgskssz6Z9zu5vjXGzokYojMmWQNbg8EhVwj",
  "key37": "3aaWa9KqBprSrQrPBNXwvd8FEuFeECsEMKUebKFAWw6jwB9Qn4VWf9UHiNgVFdsuZHn7UYFMA133ydQXWH6rwA4j",
  "key38": "4onRxjyRBr4XMk94piyriUNDUvCjmBG2MWYnZP5UdNXZ5KVrWNgafL6qPiy3rmGs4YZG4uBZQS4y47uQ93DFsz5k",
  "key39": "5SXpheDjJZ46g6zeP1rX2nrEPJv4J8vWyx4gR1AGT96tfeZuDkL6TYDF32vJ3whrCEvRJfhweaoSUvLq5za6FBM4",
  "key40": "5uNfEppz3Bd1EeLT6XXMhni1osMYAb6pHXZnGQpzcvAJ2sSJqBCkJVRfYh79X447xrFhdKiKbUaYEKFzt5AecuWS"
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
