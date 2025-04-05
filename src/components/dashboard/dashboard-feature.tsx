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
    "3znGwkhmkb6cyhhunoXRZcxfdi62nqKBg5ULt8Gr4VeW2HM3GFehu3CVjCowNGUJBvjotJf29sAqXhiwYdJP4VZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZbKR9TxYXy9pdKE2TraXDMUwPe4TwPP6NjiTmKLRXiYnwNscpG8eWTCYUYfTZBavs7vgd6EFQ5nHtFG9gJNeq2",
  "key1": "4ahSW2FE3B7zP5bX7usG1SyhDNiruSo4Z6Pnz7H6eDgsYzXCrHAc8wZPZuJy2SWdN4aLzJjS3Xh3M4t5gCGrYGz3",
  "key2": "5pL6xCR1qjh62tMcn3bS2xoGMkrXvE9ovxEoUzwJ9LNwD5hB3qaqjigFCqpAZsrUaxJZZo5WKST7mVTJ6tDub3Jg",
  "key3": "46gEVrjrkSy8yAp8FKbP2hN3UAadj9T932gD3BXcgiHAAfjw46j1fcgCqpTJMSScfeUasBY3AzWL7BCFqDsSvo6D",
  "key4": "3b4Xc9fywjMYLWHushnWvzLydX2iALkuFkXRVH9fMq1Q6KErrLWrx5jK29bc6k14DZfHZm2Lc98ZHpJZmuwyu2dj",
  "key5": "5ARb3oWvJESuzKAHkeYSJCTbQbr7b4Ag3HrVQute6faibeZ3LjuJLVvXXMhoa3RUESvt5Dd8mVggLev2b6QG7FZb",
  "key6": "4R17v9a1o9QfzwJfdq4UspuUCirigcLarGdP1dHYSYG2jkmcLcL7wpJRcsPGwFTWiCEnvbAjnszZo3fVWD84WVqg",
  "key7": "3MThBEyhjT2MjWjY4q7ZgV5GdvWwZeo8K2bhenTdZ5GF9gYbQtJcF2q3xVAYWz1hpAziqi6cp6BKZUXxi793TNvm",
  "key8": "4m8BffbUiUjFkX6wNZRdJQXekLQkCDaSKfefEQWiSvtsjsTdgh611m8euzDwG3vPMG4i6DEMohd1yRdYxy7HnxbA",
  "key9": "26DwSFvg4rKprDqv1iFbFstygh5awB2UtCd6QeMZTQgcWwpH75jJi5WTrW3AMukGEHkdMo9BtnjEMuYt9L4yS5ig",
  "key10": "4jZRRjNBhnbbVK6CDPsW7a4JeaG2Y1qU8cD9g5HhveKpocoL8YHpr3A9TFw3ipgpKdPmKp7PFTyYJzqjDW82BhGQ",
  "key11": "4cpk49a4CXHA1rhxp78WPfQEWctDXTrbiihmKjCzQkvj61sk3FMm6LhvWRZu8DTqT3eiUGyZ3S5nMw34GeuVRwmo",
  "key12": "2DPCXzHjQJyqkRKTdWEuwrv5srvxcCGwa8SPyA2EFTxRJVPAcfG2hW5apWfnjH7cRMLPDjQ8CaPr4avmC26jLkkQ",
  "key13": "4vytFHrJXugpEXwhij7mSGz15gbtuAoFPqzP2Aw1vJF75mqsqxSkatsQHV5M8MBmcbUrJB2EHHNPU1sQ37135J9D",
  "key14": "fev6npUk3ZQdVhLhzYvCzG8BwQ1GTFFTM9niB5uB3an1mAsxg8QprTvjX51zKfixMh8yMVhcwdbwXjYrV24VXHv",
  "key15": "3jqXcgt313QqVoCgiwN7uhCGouuyRzd2vtXgvSAkAi2xeh6JQsMZq4tBrpihyzfL5sAWVGSoTuZddaKdzAEkj2TW",
  "key16": "U8699XykVewYmEhbQAuLAtRkTLnZdowzK5Z5uotMmQ4fUr2cERtwUPYvUU4WjhBKBJAKbxmhm79HwvtuZFS65NG",
  "key17": "4cjDgKT5ZgkdXAtizifiVD4a5qMLocTuVymfDhZn9rwCxgsRbRS5cBuZihnpvymDAP3ZJy2oNWEj1vPDLiBTMr2E",
  "key18": "22kXu6NP3ttubQ5aHKR59C27msM4vep6ekCaKhnWPt1dNENm9NDBsmCgSjfv6GxXqMFKbTwMYcadLaPq8DxHEmcX",
  "key19": "2gqkURvk5ZajGe4uxpxE5DLKjCqTQg6ib9WvzW6H8RqVkxMUaWexC4i2zXiWAUUj7JKk9iKfj7EjaZpfzZddJRhU",
  "key20": "56muSCrDvenfssB4Un6ZbX9cjbZ5LwovQY6fB7McTepxFYE8LgsfjocoPFbXXQwEeYpFeGR6MtyLYYF2KouUMWdh",
  "key21": "1icYR6dK8vEqH2qcbZPzHgigLVKboKW3sB9QjaeiVeAHtCiKKkrZx28ayPf1kaaAV8YALxGzf3XaX1ntjK9kY3N",
  "key22": "5TgCeAdPUf9rF7pwnm3Bn7LWTTYmEfAjve4SQuAfvqE2WQpt86yNc99FtQPBHYvDbPJJprN6RfeYXGoduLjRP2PR",
  "key23": "2Pz4goBkVTEdgm7RfdrKGsyNWDRYiewA8aPsSVBHz2P4jvS2XRzFu64GkAkxF9ozKDtSvCTjAHHbwbCGTQPK3vRQ",
  "key24": "5d5jfxRkdLbCx4Sxnptn7zDcNPFUGYHX3K2Xvx1x161aVn49e3o5YvxB1WE6Kbrds377HVWcLLLapVbZR3WLq1F9",
  "key25": "5fSX37PD5ZTULahahTLNTeUXdVDeyReWc2kvCFFA9WBXJWrLuJszgnMiaWzVzaR7jRcFE6WdEB8zny7mAkHmnyt6",
  "key26": "5nHEn7mRUVoW1HFXRW5qHDNuSaqEYyo4nakneDWki6G3YBhWMFD9cUWitLzsA18H6CqDJUgQv2kd8Go66NThcFvC",
  "key27": "5g3bmmxDyetRt5r3eUixbxV8aKAgbUbCznnuAPi5SekGfwQiZZyAvMjC5McSAUMRcEfyTKf2WyfyQnbYJ5Mu5u5Q",
  "key28": "5aBcDRMMh3iYVZrRgsYeJ6t2svUfKFBmF8nnWZH5vnmhaNe9EDtPzNPL4SQXsuTvqT9173myJ4M75R3gDe9h7614",
  "key29": "2ZhFAdsgSVQfTphv8j5w5GUHTRXFttxCpe3aSc1JC6Z4HLSeW3TBptDqPRpkWpHooRtVWjqwGAC86u9x2tegEmAk",
  "key30": "2ihigCFvCBYwraJijXt2N2TmYBJRvtGuHbbRJDoptBHtVMNFaCYGhm3XFvdHRSyBoAW5m2rUjDTtKUuDuhvD4mbD",
  "key31": "3pWT23Wa8vH5ArUT77vYVwMLLdCvRsvGvf5pZzKRU6RW8fy4pP4tck7YtZtc2SDq3ofts75Md8JtVpbiRhAxTDzu",
  "key32": "2VbgkH2SJM1hUVxf5ZGbnrSUdxk61wA3jksjM5oTuVgTFUiieh3njQQXD9ZBNfzYiccQXznwPc1HR8Anm1RzaFMT",
  "key33": "4fcFiSQ5fG7xfv9QLx6ysK7UUxwJkS6hQwUqH7iKR7qCPLTz5HPNvC1irTS8QzrE4pWB4G5NRuFRm74ox6ajLQxW",
  "key34": "4tj8jdkbHoLoFcjmppYWon9McBFZUDUM4hRtLmvmAoJFBp7JMt2UfLfTKTtGbmRU2foxfgPU6XzcTVFvmL27JGSp",
  "key35": "GUWfAvTjP58ANs4iUiwUTTHC1Ja5PooQFhvkWKyvhAc1RSSntwbvVowU34jzsx95VZGcnsmaN5sjMGNCt66iFTj",
  "key36": "sQZbXBdESSD1ScyGfNCBjML2BwgTqRJo42aDtpNiNnqzaDtskyej6amTtRkrYn12HGrbp9PH4bm7zZx7BzBgS1m",
  "key37": "63qBdMw9XrTdCnZHGPa5tuBpEh7c76rrKH1f3zUavwsXXgkWKnmQG1Uv39nLS7vrbPHej327Qqf6V4U7GNma7mpy",
  "key38": "3xtHsqjQp37CadCJdgZ9JTHpFAGBGDrccFpPJMR4kKEnRm1hBYBSDMkbTQU8kaL7eFB6uQ7kEGEzpGxVwD7oejBK",
  "key39": "4ZzTMAMaCBcdr994ovxh4i6X8tQQysdTrHP9zHSUmSKk87XprgC32K7J4CUWUQbufhcCxoBY8Dziou6ywHT59uNb",
  "key40": "4DLRXJWEuE41U2GTb8NczyTTfzqgA89JkBPXR4mRqQFEdnZchmtJYJW75wjmF117DScJWVrkxQUtUrFsdsFqTCCi",
  "key41": "4JW9vFqkPXEy4yRj4aCiSV5UN8UzN69hwgeT164aM4SCWGHHjjfbUDA7tPYJgauFAXmdTSy5Jr8NYS2zk114vZFB",
  "key42": "4aNP9nSHFLeUVqZk5C4M2ct4NXa9iU7ZjaQm5S6ZXF4QxLjm3nHLeZDj7ou8Yag3aBpgogJjiiqdKeKVVBHpDJdk",
  "key43": "3TjYgKVVWvRuSv2xNP1opYqukAEh5wYx89GpjeSVrpcyB3RKZQdWvdpgQEsdmM9nNBC6W2KEvWZgj6RXWFUrDcYU",
  "key44": "4uQNn8Bv8jnrLptBEFfJVdsdrJJdhunRqKrxua7XDU6X9x8QquHYCXfa2kL8CgDVnHF4fuzt857jdgtbWNACEVi",
  "key45": "DrNWoRSsLoPJxyAY9KR5AMfAEmfgq4QqMbagc6y2gG5Ti5jXxrYJm7xXBFBhpyH8kNNi8FTQydr1sFsoQkSbQVh",
  "key46": "2Y7bGL3D3mVVqRmqm8hs6Qfb5iyUrngemYzAetbfnBsYou7UuBrnaKiCiBtjAKLUsYmdAinLEBWFubcRadGHfTwG",
  "key47": "3VaftdNWRT2dX7Pv8jJjYBRxcGWagxvMcFWBEcBepuPg8CAqfBKSxKxbk42PogFSsmJbqYQ8AFznQtnwDmE1yJr2",
  "key48": "2rmTzSpwkDbFnU6aJd4D38GstfrSQrNLV4BPupPPcoDj3YKA2utecBoTyefkPSnJ21mDMvHoCMQdW1P2NeQgthWQ",
  "key49": "3NYhaU2qBLLWKKnV5qFNgFi2RwdzLuMCh1eUqecrmSWEMkV4yLi9bFcXJX1jWHcFkguVVuJUgevqiovTCS7JXi6Y"
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
