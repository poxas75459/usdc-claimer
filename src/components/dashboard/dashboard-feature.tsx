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
    "4wTnCSMPnpex249yNEcYQmtA94FhA7N8pQtrRzXyz9cH5HXz7c9m1vCBBAwEqUJyfZz87affL9eFwF4WbK3ebwvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PikCWHYjARMnPVHrBGmScs4yurjSW6tLt3uN2VVt1Rb3rZ89jhvmG6hsu4S34FGVUB9ZQbFWJTKgrUGTLc9eRvD",
  "key1": "2LqWda5z5A4SURcnDmaYQUEUrjis5HtzKsYePRVyeJcsTq9eP1bC9YiCBj8RCyyaeWtqkez21jDPewf8bYDuL7b",
  "key2": "4c6guU7fnETeunB5rH533GaiDtosUzjy3o4SBEyjXu7AJgEd2ZUgXvPhsikZN9Cqd9AC3MbYH6fcNBXs3P2zyH4Z",
  "key3": "4YNs3uyTi6ZSAGQrVEokY3yMKdAAJrsJigS4a5KNKngBi2SEmavzHf1jgfuwhM5WJZMUQNeRz7Kzg6TnAsU29jCi",
  "key4": "54Zp3UQQo5sfnBKuWNK4jkNrqxwfZqvou3aYhkPRa93ZyHCFiyuTj2gT9nc7RK9o1UemCRUpTx5evt7sXMoWmUT",
  "key5": "5YPXdn7m8sWQdKA8iXmJmZdMwc96Y3eFUo52SrsC3Tm2XUR8FipBaYkexK8TL9cUpL9Fm5kCCxb5ayGzaZvpuKDZ",
  "key6": "yK7ZZ5kxowKqMdpVLRk2eJu6b3DYeSpeK82hoikNqqdKZwTVEwa5QEGZBXNGJhuWQfhmjwvSb6LefmA4QiqxKNW",
  "key7": "4Lc38pVHsm6i3qUFz6JZvnVMuHiH8ReViQ4HyA5o5AvFApqX5KxaVEXsqh9FGPnwnZ8N6MnaTDTuByPYigvvKEua",
  "key8": "4J5bnbm7QUyWRZvo69H2xD4vY7yN5fPPA6astRJRTFuNFnuBa2jjo6vDuxnrV3VRuKYyLDZZQ5w3vihU7ugRopUi",
  "key9": "45u6SewJy2t2tLwK9E2R6RvWY27J6res1T3Cq5aSpoMHrKp2Ci1iuV9DVanzuQ2mbQ2kdAcv9uJUSjaUDwBPiZD",
  "key10": "FCj5AQcPxwfLboievRLpfRUgk7yMd3y5b9xvUQLR1nYoC5E7vVZw7Uj476gstz3ywq8RNy6xaRUr5HnB1FcKjx5",
  "key11": "3qczXtH8AGLGgYMYyuGPFiBF3D7fATUgpCMvqpmAgjocF1JKi58XoL66CSKCfFV5bfDnD724pKVx7PRvQEMbaAH",
  "key12": "5fkHeks4fJ9tgDPLkkFbjXQCmfXpUnjCooxSkFgc6H6jXtm6PuvEjjVnGv6LhhCBhG816ZdLxTVpJhGrWuRnbaei",
  "key13": "5AL7QMmbjcs2ad8ybL7kj4XQevxUh6MBjZWUDM1WP1Gydh4uQ563swTiQa5EiEYHqHohnzvpRcGBH4UmRHESWYQv",
  "key14": "viY1Sx2BWRTxN2JeD2URdzHAYop4ijQRAzuiCDEpZdAtxGV8LMhT7RFHUhuGL7pBj1bqAH1gGUpmKQaDDKmu4fz",
  "key15": "2kQXpoJSZVXB5B8FGqraLPQrbrFHWAHLbpPdmEWP8rv1s1VnSwH7YYEXfKoNWXsW3x4xwQcEngPR1byfDDsC2EB3",
  "key16": "4xNDHTpeqWkqmaGYPa4YeWBeAYewjbRMZK3fdf5gfenTFrb32miHTVL86LWnyj5zNrWKxMr8NBMqjQ1EFHVjxqtQ",
  "key17": "2GBZ2hEYSyrE5zrHJsXUddFS5Pj6NF5C2qzJqDYbHoiK3SpKnsveWjRbPVTCNp7cUvZKQjxNQDjca1VQyEkcx2fK",
  "key18": "8Z54Mk99iKzwRY4WeAXojDgjNqoYBHuqNJFWDT8NnPFauDnDXgfffjgVMF2utUb1hTQoFUgivZpEhwhLEiHXqpi",
  "key19": "yPQoF7ZftvidZJjdikDc3ZhZHMYuG65Q9YTi3CSEfnpMzzuSk5GQwNAbuSHU3pRzygC5do9DWFCrbAkHbDbAE2D",
  "key20": "4vRDpjkW8Ge88tx8vH9Bn5YasCMjcRzMRVuQZeyhdma72n79R57ahQuKBRbf1gtm3Xpahi8kuRSFkh7fnX9hU6gi",
  "key21": "33iVLRC4HCsBJCfx5yfpqjnmQQBNf8we8QG6qGBhAPKSe6xxTW8x6GQFZ1MLbPXjSwnJefX6NNK5F1koXkDBezPF",
  "key22": "SVGeFAYAdVnjRWmUyTvKMsq4JJ3ovDF8gkJQ5NhNxsSjPGMUi8Q5RaJwD5K2MfgVwtwMpY7P67sQq3HC3oKM5vv",
  "key23": "4uDDvGSEzQiR5axiSCyhJd6fUbkCk2XDMqVx8aEFeoungdg9Jub8Zd5wJv63udRnbVwzD1bvMfrTaRsNdyXAXmHd",
  "key24": "3u8tyntzVD66HDKNZK8EJBMsdb3TXErfHvqM2aCsDqDW6srH9oSr5pK5XrcrRB7EMosdSiCqbKbo3kbKx8SREiUq",
  "key25": "2PhS4r8bK55FNt8KNu71xJp4cnCdkPsG3McyyH9K3xT9ZitJdAmR3y8QKak65jQNwDCGxyKQHRWUueAyBqRqbaRk",
  "key26": "4BNfPdzVVLRpXEhARkoCXBGpwHgT9AcVoeS348prG1oiMskhpQMp5HZ8Hxsbq9862mBBATz1EBoSmhGyfAF2xEm",
  "key27": "3sLLcD3ZUY8TF5urPkJPcb4GopaubocxejVf9mamiBinQwte6cBYe4oYsYSEvzFiVHN1zvQgZAnceBFwkAoJDuTb",
  "key28": "2ubc7xbmMMqKMZq9MwMxS5CRHsNd7mbUvojiS6kWktXBEUjdQVgeaybf5WZoFZm1wskhapCPsmHHeoQ1cQRjYrzU",
  "key29": "4V8YTE96BqrXwZUJHFf898bJ5s7FGoXbkWcaoBeE4ZgcTd9g2tp4FDk868hi71vSMDBSZoLEvkZc4pm55bQ945Et",
  "key30": "3zMdQAtyVHoJn8jTc7EqDGUFMjGVwnaiYi8MiNGPXpCNtrbq66r9mWgepw1Usz6mf9vsK1oQzh7SxgoD1gKnEkAj",
  "key31": "35a2XskdxQ3zwvVYLv19kasafzZLo1N7o1bGEZMmxvLB3NCzSmeVMgtuQofoiyUb8qL4jpdywHt5pYpJ7GbM2bZv",
  "key32": "3vmpq5FB2UtkEcf9tv9j2RcjiQEa1kVJ6KanuqwdfwyU8Drfp5PvhcmXFDGoW79ndCBsmMbYP2LBNu8zfjtzbVVj",
  "key33": "26kbMT4DnZuzEHRkPVwbcUtyFTjNw1xuPVUcYxyVZDHt8BWR2oWzemjVcfP2sKF49ByMnQAXJWrenmqvTFPptKgv",
  "key34": "3PeBkxLDnNkMnoyUiPiJEAqve3M5MEenKKZpLhrnm8oPv8fURn3oZBhx1tFv8kHeKXktHqe4WgKxwyvaHcTeBezN",
  "key35": "5mx1A2YXNRCT93vfSjbqsyCz6K4cSMER8G3WZsTKFhhnv3BxbyaZf1E1nFP2bs14bYctMVqzPfqoKDxNnFq7JpJF"
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
