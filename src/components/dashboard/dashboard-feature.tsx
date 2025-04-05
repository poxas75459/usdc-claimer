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
    "t4HQiRVxe7VQFqcBmNFHNZDEbvdxuLNAudhzjdRFKCamnGcZrF3FDN4aPAn9WSide32CSsQCmBj2B2D14P8sRYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZyhCjBsYzvpkbLvpriFeq9JVij5mKzCnXSWbbRSdRYFh3VEfZP1kTs5UE1Gs3Qtt2a24K5J2Zsvn38wqJ7hzVUA",
  "key1": "2PqenyweqTAYDajbHCsAzx1cGeHv2RTkspWEFfZkdJFXsGE74WSgEt2KtfGrg6FxHGLR1S4YQDJqJxuNt9HhB465",
  "key2": "2GRFUJuJtLSQSbZEYGwbLtKnwqJBM2JcqkKxEG5GfjrLgWcfQFxJpxhAhVBw3ukcrrsdY1MsLzKNedoQPMrrfPYx",
  "key3": "3c2jnjFubL8ZLKREkjLf3j92LgBRE2khn2JppSVk3CfMcYNMbGsb8CWReMnva3RZohfHVK1emrAnMbgfZxjxwK9H",
  "key4": "3rsvyMvdpMjyWaZtEftLvzS8ttjn1UMFacoYtzr7fuWkKhmyQrBYXcQcw1DnMpga7hua9mJ8D8Z99WC5y886iBzV",
  "key5": "59tX3GYW9DQnuR6JBTJVosST9c4YMno5a9LnnqznZcrfL9U9vLNf7RZkiGKZTESziDdBYM1NpG4XY769v3eTJJoe",
  "key6": "4yRgZvkihbFTYM1T6NrbRc37M1pCn7aghffFJAMmApY2HsqbH3tkq6yqtDNZ8LxP5TiG4ctWZajKbMqEs5vtyq4t",
  "key7": "91pkvvxVKeQT8D34PJHRXnfvM4aLMUJqDbTM41gEeZrZUBkwqnjh1wmdhkMGoyqd2ft9LTHjbTRUhFFLorG4Dh3",
  "key8": "3RufCd1YtwtydsBfLbkgJLAdVsBy7p83XRJKELChpGXHqCTtDMDM4qCsaKTvHfeVtmYyxpNC42BpwhWXtmrY4SLU",
  "key9": "5yQusQcoUsopMWsVWLMCU88VYBX1Yonf9ym7HcR5TAHT2eRmm8dxbAPxwbUYp3qUZ98Msqa6UU7y8MJnymde6NQH",
  "key10": "3ys2Y43ukkqvR1j2efjryeukvAZh3waaoXepqRf5g1U3fcGsN45jeUy7pzgfcsUXco6QqvY59LbpYCdRThPSRjLS",
  "key11": "52Z8ddWvfvGPyGyKyzjw5dtonPJqo9VPSfVuUhe1kbAyKdumGbGSx2Aqu8aWGXeiujwKaemEwnpo4AHZZspZoPtR",
  "key12": "3RxH5g9GiJHcHPW8GbUBGMEqqtZ7FN9ibhVKwfPUHhzM6woQUexZcZGmxcAuQmiZdcswZazXouXBxXGC4hDLPB2K",
  "key13": "vC1Zj8zpeFEy7ACgYXMoGmu7g7jqET3227VmMPQ9AsNCju86ZJvLaBPYTB43CLKE8gFdPAyTKgnMBTK61n8cTHD",
  "key14": "2dNaAQsKMEgnYecbbBJcmXoF5Dg9pvSH1XVAQSYNxkGCpkCp4NHEW79zAr2Ny2SrDP9gTpkqe2X1rA7eeuj3yUq3",
  "key15": "4nHLDvdVHbXtwfWJtu4zS5rTUXJStvbRMqHuHDzuKF5GKMMLiCPZHc7jyiKKJzWLwabT5Erou37mDZvtVWv2YeTv",
  "key16": "4vQ4KKodJvgCaAcKNh58vVK1yi9Kpo5ZPovttZgKpR7KJEPp1BHYCYXfn4WDFCiSo19iDQSYtJ9YeHbqtjpVaznV",
  "key17": "3zFpFJYSFyxrMGpu7XTG9fsZLuuSEQyWea6Hgas7MRZ48SpGpwrwn1M732n65uyHT9PpFKy8oA6zRer7R29Ki5C4",
  "key18": "3dfobxbDSibjTY4GZUHdrJisAkTqX3pPrCkynYReCx9dhagiRm57Aw6yXPGtsy9y7tcmzZoqNHJwWShHVReATjBh",
  "key19": "5Vp42W2ZYFzEee5NHxeJhvXp3YzHLC9psy1cALnFVDeamHekGvSmMBk56yfhiR71mXFeFRT4hNZV9qq22CBeNksu",
  "key20": "4uYxDTSraugSpebpibGGUnGxibvyAjnu94Wvdfbp1QygMH3P6Y33JxqbDEoB1ePYcG82Eoa7oUMLrY58LbY8jTgK",
  "key21": "Hw6mzqvzjwzCmfKhqKq4bPXLQrqFY3sbmNnKKh2dqjVKJQ2RKqUhgxC9bp1mLQfxZvA8oFiQzhRP6W9NZvHFH1g",
  "key22": "3y2m2QXtdi6tvjAZ1LgrFcwqhWztuopqAGQYgZQF8BKASqWbJejszXMe6nJF9GFbofiG8eH2dtyYSzDpe7VUJHcM",
  "key23": "4Tp7U8Aceke47o4xfKhR2snwZE7RYJTVQyXjT7cu64rGkR4VkD8NL1Wg5UqsrrdsVk8ZS6xLwYqU8GyjSaNDMd4h",
  "key24": "3ePekc7oUSiXDYrDiPCkeJPjKCguR28chArmc3KixYYAQeLe1Cw2WQHMjtmsXJP5f8zGZwubAV1C14Um9yx1zrmq",
  "key25": "3PMZHmhZ9VVod71dh7kqggdWRTjCnS4wmNsUN6MgFJArCKRSumimdoqdCYroGmZvJu5HAZetyMiYzodqKRV7WHNF",
  "key26": "21E1HzqBVkUbsE9dVTxWfWhmcDrfVMDuoPJJQeb1Rhz5b1F6q1xPveNTY8rXT1ZWXsUhdQUPSWjwLufpSpyoND5V",
  "key27": "275RSjdJpdPn5uhpuTfMyG7x7qsm9cJn2ZtEaVrhm1w7qoVsJ7gMk6i4Fj4cH2FaS2xyWpztCNDZmmP2pH3ii8id",
  "key28": "pV1r1kdWphyZrtBKb9VFAGTbMfw8rDeKTg1BdNsG7dQdCJzQGXMnDiNh2aVq9GyXTE5CCjJ4tFPmhz8nZM4QtyL",
  "key29": "5NsGFVoX9rwgQ7ZwNyZk3nkBCSFYNywQu5vZ6WVYj9givFtyYccGznswCEDG6SaX6eVsgcnRBVfRasdvMYJtBVDz",
  "key30": "deJa7Jt5JswJLrAxHqRXVQTirSJHyisz4GxtSZGstrjCKQir9oF3VhuqnoP1jah4NEaV3mDrJ7bBBc3kuFNeRrk",
  "key31": "2Bwukyat9ykf9ZMpbonzupYLoC4ydohyTAynfGHXD6wct1SuqFKx9vyrxK1GLJMjXrD9jEaZEhGKsZwJy76zmGdB",
  "key32": "5uLdNxEAze9F9PTeST2ZRZiJznYaXvdzQhDt4axC31wxVUmaFtrt4UvyMTKFGizvvGaPVyLbthXNfLbW9qHLuKNy",
  "key33": "dYh725xZcidCh32mPEJdE9rbhgZXm7UDYimyagr522NdHK7QheduJan8augLa69kBmt8KCt76F1dFLh2zDMt2fp",
  "key34": "5NEsu3ipZT5L7rDo2et5bdpxAatLPEhffgsUXHV4EkHbZxhXFqe7Gj7gDPHJ57GWgod5D92XkBQUVza8nRXYk1mf",
  "key35": "4fK56r7CNo5S19X94EmpzKqHvNvvymNmHLfRNEnNDQKdjaVqsrotnAXZnEddRwCJdzMDmNLpNJo8EkgHnMd7LHDi",
  "key36": "5BrdeRhwaBxAz2MSmxqDD7uF6tCfCeuiJJUCncmYBcmW6pBMJQu7Ke3RUNAjzBYWVUjNngB6vXp5uvjBM8tFVEtz",
  "key37": "5e4F9PMPgM3RP4Q3W5APVYKyj5s4K2urbvcBWYTniQoRGBwBLGuwB5kdPZVC7AM6pspnNR6gbJVnHHyYAnvpT5cL",
  "key38": "3bS4tgp9TkkgVqfpUaEQMGmUkZ6TWqMcNNcNqkcCovvWK54c39KdobNhzQ9e4qELD97LkjuPAasYWwKGWxnMJ7g5",
  "key39": "4bVEfgBF5QLSBe9x1BpcH524fkDwLCGXXHN6xVATDwphenJzHJLoHW9prjyU6N4Zkn5kkhPgXs3EarXTcaDWXvBQ",
  "key40": "SzU5dcsugKZKH6FKZ5ptq5y2KXM399pVHNi31Fu3MqAkqUKhtFr5DS4adVdjRhtdCuu6gGB1Af36nmpdCGfCnRe"
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
