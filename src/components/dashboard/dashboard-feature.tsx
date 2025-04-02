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
    "2p71P1i9rnxYRfyX68DiuwAKvrkrTQtjL4NfVRQdKQcWwQAXqzSTzqSPJzBQHMLdv3gJ5G97wWmSkdfhEKPEr4RQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FhNfLBpVywiaxub2xsA4wXZfzVvcw33XLmy1ZvpYYKxbcYvDGoWj8VJjT3cA6w5wkqFniATF15DqSViGD5ZD8D6",
  "key1": "yaqCgq3K2spLMfTMv7mAouXz4b7YiZDTmAm9SdY1iYoFHhn49DpfosK2j4rHbbajhjdad1gDPHDFaMPqEBFi5do",
  "key2": "4mjiBi6Pngupfty9stonkZQmh6cCAQz1ho6FkAnV8P6WufyDW2s2Q2QQEg7aQ4bYhRnMa7CK5okd2rriA7EbJ9Ga",
  "key3": "4zGga4PjMYjMkJYqb32XBzxJpCPzmi5KrJdsFRcgR8SbcCu2EUGpewJ7J7u1xP6c4TR5fvGGYuAcAciB6wzXr2z7",
  "key4": "2cYGEFPHVEp3J1DpJG4cYGGskwEtK2KmhhCy141mDSFSJ3TA4QfafFqtBwzZkqjfKzYE9EPsgUgr1d1bexNgNXwV",
  "key5": "2v1weYynscBXMqHzi6TMuCW8WfE2FUY6UmtsxChTkmu1oUrXtddR755vHKaXpn9ySahDR7ysCjt3YAR7C6evNPGb",
  "key6": "Y2iJe2jjJLQ9uNQxbETEoGUdKQQDoYvjSEE8PkKM5zZeXguHiss274NSSY8X2o5Ktc8BszwvP2sQkSudbBDEhBx",
  "key7": "3w4RD3G8LUQYeHUYBGzAGrZfacxfoPsmYEgLKb77wWJRzZc8ka7pZddLQGeFxPha6jkLq6VvC8Pvusc2X5bYytph",
  "key8": "JMLmg4YLU6N21MSxBrp2kYfYEz3BWG3JW4zzktTv5JGWLUkDVgBXsKtHCkr45e5f86coZJesPTHMc1jtVoE1dPa",
  "key9": "54Qt9mqRWQqnjt9pdieJiYzkwob5UkVo6jSEnVxpAyo9jrxz7JhVckd6etxhiw6KUFMR8LqnVRyLFbzxH5AQ6ryb",
  "key10": "mYGPvJXiw8EyrEC4inXfT9KMSrW8ZJjfCcpn29sp9aPGuCPsq6n43jMRRfQaRQHdPWDti1SwfZ5D54y7Jgfi9Z9",
  "key11": "3yA6rA4aCgDgW4aNYFhhiahK4r14UqfrMVcqh6LJUf1r9K2RoSGZbxhtWKPcVt1LXKW6ZPTMi6GqcT88Puq4HZFM",
  "key12": "WdwMrWYrCVPkw6kt5QQz49x624K8AmuTGDYdXMPbx1BwshfKqQNcoEFwbqtaKC8jdvFy3fNTcKAsqB8YqFxD7YW",
  "key13": "5fQPwonqZbmn62dmkDGp5NCMaZUizt25dcp7mqwcVa9Ek8LhQTUtWoVzfs8tyRLB55gbs1we3NbHeeQk8vC86efD",
  "key14": "4jS2Z2PcNBQDtEdmhcaVvn6M3upxd4xxdLbmNXdPfP2ayXXvpxUBeS6c6KcfjrWfcrUqhVMX9AZJXQwxwPyVjqep",
  "key15": "4wZde8cXf8fpnc33BfrCs69LZC7Vpe74ArXFYUfp1BFxcpUHhftVRPrb4HmSUtcooz5tPPjFM3KahSkTd8QUqnKA",
  "key16": "HDdihuJVpziroDGCMwhT846VZNRNND3Rhaq6ftEufjPfCr9pUYPgPcXJiEAPkjZUkZ4v9hYo3KqDvcTMKyY8pz3",
  "key17": "5pRSrSiAS8peX36NJ2AJNCAk1KcPCqAXujAtfyWVGSpPA4AES7XZEcEPUfGqc41iGZquN7XtmXS6kzPGpXVesqcs",
  "key18": "4Y14ejMsYfwFWjBTvkk7TqPSJwiJb7g3MHDj2hwqppUoxUX1HVTUf3YYZECav1ZtAMz26xFV3YpVjdgjLBY8MzxA",
  "key19": "3EeWL6QDYvJjg4QUix256ohYSDJjUMr8CSYNcjbBTxqHAZQ87peJU9YwTKwM2B9nzrfb8wWZjAXjUe41Y44RoVAM",
  "key20": "32tGUUrsCZrDs85EvcJkf5KwdhD6WhF2X4UaNqV3fzBqtd83QCdi1WqFkqbcWn5Bm3eJhahhyCWz5dw5ECDtfpXp",
  "key21": "21xYmn3iYdJaskEyE51Tz2Bqy8qiAUuVqim7iwpWUdWxcDn3rB3K2ncMpDpvRJkA7g7WL7vMNYTZakBUrKz4KMxQ",
  "key22": "wv8BPtRdoEPM7zAKGjKpHTtscqpWq6FmxR7zsjstTsjimo24PSX8YC8d7F1csWQaabp6H8tWF8hMf7FWxUuvDWB",
  "key23": "4cb6wxGnz3UGyERiRFPa63iF2mZJ7AvtPhWp9WbB3HVDb921suU6Wa4eNqfFyKSUXGHR4P3tda1KGQ31ZVZwuWWh",
  "key24": "23DS9pDtSmkcReXpbGCDWAVXSyLa5vE6EsMFSQ55Ffok1pdYVpx4Xkh3zTZ9QT1B6zSrh9XRXeZvFisjLPtsr5b3",
  "key25": "ZZzBKFbLyK6nHMe3S5XxFpJ24H268duXCm2GTFaBZEnFyLbEpYG3VcFDdRNdwfB7nnsEE7d3UwZ14GG51T8d84K",
  "key26": "2mMhVJrJ4U4NQJL4DrkJ36zsTGavXuBBQjghEcNUiHTKJ8TM1xLrDgkiT2ZN1o3pxRePvFPK9sUf2AMGCtveer3W",
  "key27": "33uFKJxwe2QGQYgoyS7jxTz3bbgQKn8acPTvbs9TUNPa646edDXnuPEbZVjJGnZbXTk2FHPrTDdJxEeYNKajEGA3",
  "key28": "jP6ok6PQD9WEfewuvsi3dGknScqzgbpQhAg3YGQYU5CSUjaEKJN8kJzzoQkpdJBQ47dYJCMRGFYRAZ3sQzsYGBG",
  "key29": "4oQE6PqGrVT93gCuVHA3oePMjWVAZWHcL5GdLVKFBwRvPzAnmUCGgL1MvFNQR4DRwkNjBN5nXu16LGgzJcRCYxfq",
  "key30": "5oECVVh5eUKz54FfUD2rY47GBRSbwFnxh1iVhzxLvWxv7G616KjNVF87m4Ahmy2Ycor84viDGbwHqiBUmfKM9mJ6",
  "key31": "2YYLPoF9aejutm6noUFM14t9XEQbAxPmZ6P4PMTf4Pm6KNCKFX9WPs9HLi2AonoUttE6mVUsxF18ZM5aSBfaHh1J",
  "key32": "QPMEZ4UxRV1kpf9gchAUzUTb9Qerqeq1XiR5UHCf9y4JvFn5bLb59eo2ML7KR3D7CnYCtM6bZEXcDnS4MzPNgyk",
  "key33": "2vVZNzuHFbT4FuNcPWGnXPJTFJ11UfdRy5wVvVAbNTp2LfzpvXDmap7mrmZjRtJPEZ8WptZyF92Cb82UXFMJHJXk",
  "key34": "4JzXf7r7MgJ9M8Y9dLvTU6zKvKhGafWw7Feb4rsnqyXF8MRxiQG7tHp9GPA6ctYBeKxZhM4PREXJ5LMA2duAm9Ng",
  "key35": "5DN4yej4xPfBVkLUkwJPP5iHRqEXiSTjnVvAWEnedCkc6RuLNPf7EjC8wVbuqxd7TgpSHPYPgHasdep1snFtbR5p",
  "key36": "5iLD8WsBXbojiByBydL39jF3wvXJAAx9gNbni33pFP9o9RbdAK2NPyz7X4RRUER7KP2JBBsSP2ALL1Gora8G8nSq",
  "key37": "2cPd6dcfQ3d38fBgEcefqn5qsB5frx46Mtk8DGZxB3hwtJTW2jBV2vHkCEUoNtCamfNFKNfXvtwhJdBWMhnJLXaP",
  "key38": "wav2hGwj5yYaK9vP6UyZ3kVnkvckZco8vA8MK5Tp9PMEoCKZmym87GduRn4Mqq2SLunzxq5jBuURzLzzx4Zq6vK",
  "key39": "2CeVwnYDFnYcnm2m4ha9w1D5ezQXs17DjmCe2TqphWn3U8vvykgDiNoa9jhHgMCynGF6nPPrdYK3DX7QWmWhhseK",
  "key40": "4DhHQPwdBqMTbYvdWMk6ypy9cQj2H25xFQHiRq8Ndp5V2ht3mzp39FfuoF6jJ9K74ngJDM1DAoPpZyA8DbUdoNCf"
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
