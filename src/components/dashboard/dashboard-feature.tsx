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
    "2xaMz3MZudoKN5SJL2u7CudhnYNQvgwS9FzJUgqmT8PQoXiMboJehpbNefSEXEhc9DGseEoMdcSUg7M28tmDNwum"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vY8aV8iMv4ApRLr9irWeLzmypSgFWdpoU249qGm2sJ8JPxa1RGSjMVX3jWbRyVDpefdNZCmaCjZeyvr5ZzDhjab",
  "key1": "RNMhe94Zjd9FVekRyUb82EkogCdxh6KDfPVsyc6nhHXEjHZyFukL67qUw5EKRALj7EE6QPxzGi55SpXxtc9FaJ5",
  "key2": "5PftiY4JdtUjzhGJWnpRWM2SV4pGUGyTqeb9pMW5WBmopV9Kcfuo2sVkHNXCM4mrZrfu3iPJuHiQ7UxU2umt3qZC",
  "key3": "ANjysuRKGPcWSn8JS4ycJ2CpRZ13m6xzWnDS6jpdRLNdsU7yW3ywX4tRjUGtKnRa4kX7DQawVTC9wChbPvTD9ex",
  "key4": "3T8R2bU137r2mxCd7Qr97KyaH52KooBDbQ1XKUv6gBTBULbnpyYpqwxNvhXKiB2cAhw5iuwBJBz3mbWjVsb6S5xR",
  "key5": "2HT4LgjZthEk9s49qrtCLqSt1MoxKXkfhXE5qxQEGWYC3KNhJiBnmw3UhDtJoGkLdsT4zmKw5n6HLvCPzxaJQNnY",
  "key6": "42eGQ7SwspjMNfPJwb8vLBJ4H3Q1FbtdoPBm7GZRKJjdRJQPt7qydyLcXVGHxREKg4f7Yg3SwNRTatGngxjnEzwV",
  "key7": "6DZ4xmmK3AY3jr1JwNb5W88yd6csyMyNTJaLQQrAvA7eLwMRPN8smqPGpJDQMF7Fo3i3f4MUg7CEFHUyyrP7wrD",
  "key8": "63P2CNRui3jgAs66njoQUjUMmy4DhRpX1rD6ffd42V4nSQNjo9ic4nxA5AyFX5ezSjgJNAsyzsvmfH3Rp5WD1chE",
  "key9": "Fg4aV7TUWMVwLXKQLq9a3CMVJX4LwbKZhnTESws5PdkjdE4JRNcokEK1nM1Yk3uTeKpFLNZKsaesrJd43uvBYxu",
  "key10": "3ZkpzSDSMu4ndtPkeXGUL5XYm5UV5bcHASLvEMserMQMAycAsHdJRJwdvBJGRaia2932Xu9qhsxL7fXG8xSuMKp4",
  "key11": "4aU9PgVWdsLsosT6VJYfoSHNxuqoHpKeQVFmtrLGBj5SNGeu2W5AFfCbutcYLzTKJMXhMy25u6BBjqf5RSnFutaK",
  "key12": "G4i3U1rr4xShaTJEhtL79eHeXXkmr17DS58GryMu7NKxmDtkawveCihFpL3mnDy2rWH4atuzhDgPp2T3tN85cct",
  "key13": "4YBaCcjoag4Ypp8iQPzpmt2rpNxkrZSMQZy1YnjHPt8phFvgapB7kfCjLyWxpwKSv9zqu3NQYLkWbvUJEt8JUD2E",
  "key14": "2ngSGDzE5bGqhRycTntpHMXHVtDobpPD6rEZV6B4hxcZeoDX9YaoHjNFLuQnaC4gJ3wmmXjJuvNEws3VmWpNGAeT",
  "key15": "5aQMxWPwUCK7wdjapdg6qQ5hoEtEcnZkkHfQSkYETNjDrpYGPKBQB9TLY87puWAFewSqmtoFB9RNmYTXF92pJ2L6",
  "key16": "5kRrqeASpoPg1jRyqZVM9ib958YAAqyoe6wJvbdXK8rM69jFveUgnrZxhs5X6W6uBc5wJyCdhKR6WnyXppgPGzz7",
  "key17": "5L5hgkQgAU3VcaE1QCZqkh7BAJFvAfnEcXMYLsv1cWJp72ykfHDdoGZNL7jV25uQaYi9hgvnQ8w5iCdxE2SUaFZm",
  "key18": "3j8WmtDTonv2AncE9Dkg5WA1DuKechvjGVAucmgdcupV2aU3TEHT1JtXFPTwPF4fWEtDB5b7mehb89wMdN3s6sf5",
  "key19": "2yhLgSAswiCQwkUAz42mWAWb2gLRrTVGXuhah3ud4aPs1zQ3YdZp1RTFNS6T3fBjo3X8qEhUQKkfkUhMsE9u9oH2",
  "key20": "2Rpoi8372vVRAcyN6ytno1LNWAvpZGr5ikMXYMH1CczckcPAj6CfjaE5cN62e5E57puRBmDjxNm2rJ3hfzcqYCHB",
  "key21": "2Uf4LWWUHkc7FLn2y5FAxqf1WacmnbEYKaQd6JP4tx4oNKSxp69idBMiAq4xpVjDnL7fNBT85X9SzFBdAExZmiou",
  "key22": "44T3zQCHdtUQsRYRAaQnLBNsJtJPDCuAtJ5HN7ZvKdpawnQQUn9Lpg7C8dBuSqRicy7UYBNMtaVxhDViErYPjzcs",
  "key23": "57R3rEmWtRhkpLFchoycNwJ5pCvxWouuWSeya5zTYJC3SBUXVfGDANyx7yUx32dLFYmtUkN1J4LZrmQh2JaHzGtw",
  "key24": "yaHdYUJ8XSRodr712dWXtA5X2J4SmFdGcZyyHEWbf5vLEpHVwX6MtcVF6iumM5pAGWRRV3wWjxB5yuD7XuP73Ag",
  "key25": "2C4iKKovWCRQUH5V58JPK6rUmuttu9bXYeyh3LA4JFxefM6F7wD4EnXK9woTLzXjJ8BRD34vK84EnjL645bUD8Vv",
  "key26": "4qUxC6FwytSJyrzq9qxk2on8majUG7MzGZrBFNdQPEhS4n17Mt9rWQmfugynu6p4bg8KNNQBKFFWKiVgfJWVREHa",
  "key27": "3cBgoxPJzcjE7m5QwxEBWvEwJPn88EYTzDpGsE8ibFW7Xbv3UWUnxM4FzdGEKuUvVie2sSvbb58hKsgiLucZJgqj",
  "key28": "3ckQAvk5jTLfarWpK29i7zonLSsZYaZWAofqyX2ipr4uLZtXHKCP5WedEWprHxFZiU2FLJ2b7hBYBLFzwh3qzAgv",
  "key29": "2o8Y1HogddoDci1ZP5d4ENuQoH1akR2pb6EpCfm1xPhDfR9wnB2xBwakvX9GJA9vYrgUqaGx33h9a94yWQcaf5KM",
  "key30": "5XWPFvXWaujSa6Vq6k4eCAG1eqUMPmPuNJi6GJe9cAh9KQEfWsUZB5m8YfbnmCh8DUE2AAoJ4VtG5nF337NYhoP4",
  "key31": "48ovAKTdM5hBVh3YwTPg59sLFbvJnSTGgHEeoiuCiXqiMEjVGjLQTAWgPKmP3UF9RgnHX869amu16YixbfLFQYnv",
  "key32": "2TfiyDr9X7cuLKaQNG6mozjXEMKRo7XVdFJE1ouLFu3EJ1iFyu81qagFpihdv2xqHxHWRYU7ZKspDmu2YHzNhirs",
  "key33": "VunQE5coJ8fW9Hj48k6nEvxVknLwDG3LgK3vhRgfMJTMwTCtuZ5DUPHTzdhubJrH65WFfXcyNPrP95L1DhLunQx",
  "key34": "4cmnWdAkiTk5fDcTMj5seQMVQUTYn91Q1BuPx4E2yTSRP46iQwmC3KhFkBpeXae1puG66dQCkd3n9jyUW1Q5QbFN",
  "key35": "3D4uRtXgbmLLDSvth8TG37Sdwdc5Hwc7aKNcMv41mAxne7qdhYuNQ2qxE4KoWm9tntBFhWHq2swvHMJxQjBmEBkb",
  "key36": "5S7d9WaoYisSoxTNEcdkTt5qSo6E4dVTqWrq4WxfmWjGFXeV4Ws6ZpGM9VQzr7vooPr6RALYgoFMMB9i2GCJaopA",
  "key37": "NgKzWfxJDdCANTYRCESSADsf53iRrttVEXBQ7mkCnaJdMWFNpT6q3BVRhnSVsU5VdPBJxYb3eqyjYwF3c5hTg88",
  "key38": "4SEFDNjzqkX3q8B9uQFemNjcN4FCU9K27mvv2Do8zJRwfG5BT8MMrenfBzMqY7rVnUvXGb2ccmXrJbWyNKSKy3yx",
  "key39": "4mp4h9NoMXAU2omT78v9L9Lkeanp7gW9m1xhCswkqkh7MXfhjkQNJguN7EyuuNxa2x9SfHEF9gb4hvzRpPep2c5L",
  "key40": "6v7dE8Pn7DRbNFgY7gyHSLtDZytE42haRoKySPz9d7iB2hgLCp2FiZRZovfHYA48DVhuP1ZeMaLsNmQ9WU5TAsi",
  "key41": "3dR4tmPgXTAYYgZshsQEUiqkYbyPKTF1y3iMk3kAXdrPYy1re12k2zaizZ34hdUv9NzExAQWBzW3WGMu3TvaNAw8",
  "key42": "44crD8QVa1x1FfpdqFasnLzhjFGJc54AAbuUQmoyUMhmsic8tjcRXGG7WkzPnuVNWsbjHt74mbJpixBLDkDKGkq2",
  "key43": "55j6MR1uiKrdMQXKdtsoQAr4MR4RrNRg8Rw5hMYWUGVFEXd7Y52L2Bk9yxMJhroUV8Ny6u2EHcm6NSrMWSJ84vUA",
  "key44": "o71DXUrQEGGTx1WrgoAou21GwUmLyGSTzhxsaoxbP3xX7s2wroXh8txJ5v5ckrvGJRBw2AgEwHgBgrYajDcWZZa",
  "key45": "ygV4nD8BAdu356JrM7N1RNquyGt63mE45gwoiK9Ex7BrenrAb4s9AcE5pShdo47kWhv2QiimaDjK7FGWpYiLbDj",
  "key46": "3G6KGHzasWRCxnZXwxDBxAu4GtLLjJpJxZqHdbbWyConcaCfBivtFMWjMXvq9uxCNsbbasWz76qcSm3MiLNpZPaS",
  "key47": "nvZiqMPjEJU6HqbqJmqG6SQtcynrphbo311go52r6wuCb48cAfjLoezThSTtLRv95gBEE5TGibSnpkgQ51MAnRC"
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
