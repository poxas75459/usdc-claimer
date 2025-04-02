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
    "3J3VjGPZPtk4dh8jjvVC3Z9rqs7hx5dWKqGqwyVP2QJroD4muhtLKBPdSqnguSEEGb6BVV9PuPvWo9kN4b1jH2VT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dCYA7fcZ1z57ZxsvNHEGHVYPedc8Fz6xEiTbfTrzcfP2TeikjKkgGMh87eSzBQwrX9Vmbf5Lbdc3ShRNYW58VF",
  "key1": "5HvXTd6KZqjZTA69u7kwdxbd3HNNqeAGHct9G3DaiScEZXprHXhPsJ3Wk4kawb5gvkoXpu8VKZFbEiA98ovfr1tX",
  "key2": "24Nh6VkG7wy9kquioNXQDpFV4KCNeQzriNxDuHCzaK9bg8g16U6P9etwe35oXqubkYCNRjcWb1TzYcshz2Au3wXm",
  "key3": "4UUZCEb1aTzgYGyWtR1pXQjrBFvi1XYkDJwMbZj78HdVRL4Qbg5JuY8mqEPu6PGmzqXGhZuj4QAWJ82xTuYSVdXg",
  "key4": "3F9v856XNLRAUKL1htuXSLyPBHiiJfMDozU6GPcr36rpxi5xyRw1NWLt5Ns1p3E7tu3sWTcFwng7bDNiBSQpPkqn",
  "key5": "2RxTEP2fFxUQbKd228XtQ5y7xg6aXbRqKRNcWqZtkbLneYzese1JdUTSp4HafJTWUJcTsuPdWXxfg5XuFEq55xQe",
  "key6": "7X4PRLqd8V7qJLw5482StnHfU1sGCL1aZzhJPEuaLZhYhoA3PMeeZjBGzrqyoJmHzRDw96io7kodYZHgvi9MsWY",
  "key7": "41iEr3oiDTNH67wUv8nvE88FGTNgZQYF3dZ6s9sTApr4468cC4ELqFBVSUBsQcRBbAC9AMPfeKcvsfg5JrpTRaGB",
  "key8": "34Hs8StPYEDxDs9SsqGVUurNp3RzbtSi8q2NKZsA7Sv6ohLEfco6YJn69k5oBYzEn4XSw1zBjp9n8pPTaMsznmZQ",
  "key9": "4XJuckJ5M7B92oJe3suXF8XMdCYEWm1E5TKBt2z91B442tJ9DjBLSVXjfYa1nPX3A9p5nwepr6zex3JLwJjnCHHv",
  "key10": "5Wp5FqcA1jEGH6aXCFddqHHasrXymtfUhfeFLXvwSzJbJdRk5YzD2mW8SegRxnGj8QZfDdVmG7uPfgKjEgT9JNMR",
  "key11": "qDYWg2Nrv6Re2Cgwi2EQenSgbxgJwBtuZmD9dLwLPAYcmGVNNGK6N981XChfVApwnAttR5VqRyiPw3N3z2bVyFH",
  "key12": "gznK5Wk2BYth2bGRwZjALvYCMjgh31nBRbgZrYV1FrgpnKUSCUq8QvNLRpfci9zLKG6GsSfxX4H8kk6VRUr9Un6",
  "key13": "52uyNPMkdfQEt3Ky5rStEsxCMS5iHsmMLRrikvWUpbAeTzJxQjivbGRRAX7FQGUvwrQGJWWD3szcwrNez8859w8z",
  "key14": "5mvGaLyDTW3nCZE4296jVNBN149bsQz779FMErRcm6Hv55Ss6sQibkF3jMzMq6yvf8hx9UUkGQTQCkPdjEhxMmUV",
  "key15": "4TqQ8JsjkFzNRWzY9ZE2cLsdiRVgrutakcb6ywCUuWmpv5TqtfvyxG5u3G14XX4ZZhdCP5HDTPzUJ1oRQPCbmvQN",
  "key16": "KmMzK5AjM7cTFVb9Aka8A5B42SqosLQhrrdZgXRPBEx2X2tacNHPBWYk9iqipxPHdhyYeBiPw4Lf5YeaF8xuDEt",
  "key17": "4kCHju8nZ1j14TXeNGXF3WQ7C93jZUV2BHkZ43U1w7giv2u9jwMrn6wmUKPNRzP2e1dyoSjpiEhD45AhmMb5udEd",
  "key18": "3NSw677jR6gyZX75ADPFvUihAR233SRNLyfp2o9fytWB2rRPZcmgxQuoeUDBh8N2aKWQTtz1y8pzU51ducsFVpsJ",
  "key19": "3ZC7BsZpxYzC6LVcE5FVY8s7yGm6gupiLwP9k2Ba7FXGibnpk4rbvDzZWqfuVudpT6KrcgdPv7A44uRRe9MXBYup",
  "key20": "2o3N2nZUakbX2NN9Ys9gUYgiSpvkFCM2HPAi6VqhJrTwxqGjrW8K2uiLgL5Axes72dCGeqU7efLYnPpd9faM6nRp",
  "key21": "2TfTdDvf6GSwRX4vM7qiPUN18SyEhHiUtTPX366cbvpGVjt8SJ8MWtTGCb69uQAXWJe5WiEr3WC3xfW8Vi8Gwknb",
  "key22": "5r7ZZRQJ7AM3wKC1ji3f9EYDxsk74LSdUiAQiWVHyE3vtXXMYanfo3XBQ3NwK6DxyjfUzdidDc8oaAgJAd16bTp3",
  "key23": "5dXRMF76JG7NFkZEYExTnVynffT6siojqRz7EBXZbPbY5koabLArC7xGt9Jqq48AbWNUND2chHE5MY5Np9uGCVaG",
  "key24": "5SxCaqP13q11coLTGQGpP867znFmMfQ6Kd5jao51ZGMA1a8Y4o7PJpjuVa9S98hNQAdBALzsiqMm1ipThHHRKrTJ",
  "key25": "5proEHdKNsYHBCPsxENHdJAvsNc5pu3fpBEWYAegW3ptnKKbxeMJcHvNEnWYS8HfJbBEY1mXNCzFRgtvdrcWa59D",
  "key26": "3qCXHHc3sKBGyeSLpkYZ3aektMRgUWr7n89yiAE6iMsYm6nZKwJVCe4tZrZBKMYhByi2HoJNzy5DHtKSLVhtPBPW",
  "key27": "3enuh6M3LgeKi2mN2ti6gaRdvA55KXc9DccJtWS5xRz6d4rGuQTGngevWuAdEu6W9zFLHrdjtYjWXzq5V93w5xtS",
  "key28": "2X4kxy5TuJD1gjXNor679pNLnVJXuZEkGEgAGeFPoAtpN41tuCGBygppSFP5Ry57FM5oLWb9j6dmF7Lgz9jKhu3F",
  "key29": "2NWj5p2ZEDAX9Jz7zx9VfsjSWdNYBiXkwEnLrgK4DifQAqiQoabejay4KD5fNrABiPy3Jf5Mox2vXyARebo51P5j",
  "key30": "2ER7qQFAkzrgk7s84onkwuhLEcv1C1Br98W3woHPnC9HuokSJHkyicYcMS6CYXpo1PQ3fZc7Agc75Pm9yai17AeE",
  "key31": "4NRnVUZH2z1nAweGjXZSHs5Z7AiNL7dCSahfSUP82hhnVx6ugMBaNp1wzopppBQGyjXkLZw2wP3d3VhH6MVWCj9T",
  "key32": "2tp5TLkdHWJNrARNpaTALoViYxqrZ4LEemkqki3kaBaMKniiNUbHLGxRfquuYVNi5RunNVZeYF9cY1ShoAfo5ruG",
  "key33": "2ZNYMeSo4Ba6bfB2TsbfxYtrxxihzwqBwEk8AkzJBUfnCu9sPyiyeK7wNUr2JpFwPgF4iVjPo1WcVrtYitQCVnA1"
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
