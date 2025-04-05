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
    "5SFRoiDNMSJkzfEaQVYN7sVP4NYUHnYKnM69MQD4oAb9ccW8yWjjfaTCbLdPEwGsh3eQmYfspND17uVUJ8EN8XMS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uz8YbRS3mMjkGKfZ63GPWQdtsqa8khBFLM4rBdv3jNZJqaVqXrYuz9qptVoVjDG8xYp9C4zns3xxWqzeMeyXmGd",
  "key1": "4VqhqacuKVikGPHACnDx4qLZg4DHBxnFwryRSTeT68sHi3uaqvAuviNbvYfYqjetG7fLGcwp3PTqGgMfJJVtSgLT",
  "key2": "3zpyPtX4DUQF64H6B3L8XvUk4NmY2VWr5h1DokwMBeWBVCvMNFqT1FLthbvBr51aYQWTPJdTEyRPArS3DPuNRHES",
  "key3": "X6GfQvogKQ1yEi5RX4pQ59YMPLRXEkbuUs1Mtv8dsvJC78vtquE4NkwgBaesbtSy4C7YUESySq3zFYdnxrcMiSY",
  "key4": "3AFgA4HGY8rjsbBVUCBGXvPFrgNtUafqDmGGfBPAfSDKUgUKpS4K7LLKfPwDTfNKPDZ199yhvp3fEbodczHU1XCY",
  "key5": "5rihkWzEbGLVrq4YFuUZ9kxzFdVG1SYCo3xw7pTk332FcwZ5nRhXoVj5c5n5aLXTSZUAubMqvg81XMx8qYbjMmZR",
  "key6": "2qb2pmWcpo5WxRvTkDDD8mo8vPg8Cb1AEmufvzzk6adn4JGFCfvvXrgF63z9W1ZHXJ9ug3rTQ8PmoiNgSaTVVxHs",
  "key7": "2uUDPUaHjEj8HheEedB6dg6vdGxt6fRwupoCbgfCqpLnTRnQhmLAopLZtwYsFhk9EBRqwd4Wscv5xP5TT25hNCav",
  "key8": "5yxiKwT1o7amJGD4sGdeTzrpsBPq6itK3YXkSzkHkgaFVhtSCiRQ4KSNmcimPPRGANhVNuN5phzrUYpT2UePMUPD",
  "key9": "4D8Hk2W9cxAwz2iYLhLt5JXqGsbL3PWCzguc3mmfqgJRWVJ3HhwhKLow8327W4pr58vBKSZqndN1BGsDchLS8mtp",
  "key10": "4dX5AcWJBkBsrV8xDu6b8tdzeZ6yV3zVaD3N24zfWNUrJxsYgoBvo7jZSDS1tsjdHjKs9YDHpjhjA1NRKcHsmU6Y",
  "key11": "dH7KJViQ9fGHvX4jKtJwCvpNECy2QrpaHWLyj8eYELxBLxJ2dLDQv28Fp1SZZQGFcNDcqL67epuxtUfrjJoRX7M",
  "key12": "4JMo3KTYN86jMe6t2EzEuzggP4SSGwmtj2mqeqj23bkwyWEkH4esfvBCfbUGnESYJZFSyrqQorJzDKPK41bKnv7r",
  "key13": "5zr4KCu9nfer7qTBzseAu4dw98gfHCpqakgFt9ga6yr8ryZNHegq7KjNufNj1fEakMVsdJCaQVX7M252yD8PLN27",
  "key14": "WzoU9AMNbKgo2rzKnhx2JxFGMeRNeCcgZMJJpMCt1SQjS9Rd92ww1KuuczfcqadDr4CJtitvtGwzdLXvRPPiyka",
  "key15": "4Vc2MZU54RzS5CBqfWRjpPVLCFS6PQSoMkcZWVjgpAZyWFXXkfr2WiRqY3NZtph7xG2HAY433foNupqLv8s3QQ1T",
  "key16": "5cjNG2hPsUk8vzXD89YfnvmirXpeeyjQHbstVEQQNubFH8KnBkXRNJek8xd4TZM1DeqD8BJUPrKhpLyEJ1gHLvCR",
  "key17": "Yk7bsYG6fieHmr2bWtFwCkkXVXTY9kjHXdfppsHNzJ8Mctgo9rsryEGpSUKLprUNP6hEtkUAi8qrgoJMM5THpuJ",
  "key18": "75MutHPT8MyLjx1dFBME126dAEk5gbvWQKpzdZ7ZUXDEXJuPpDjsnrnDLu8xJLqv7ZZ3cWAYp8C7kYkyX4ACrxg",
  "key19": "5KXJ9jWyVK7UW7XzykXG1kBCGuy4ib772v1ZuaUXFqtFv71oxVXm3ny5LPbsBD8tJuP3cM618vE2bch7m4nDPy8u",
  "key20": "46vZfrE5pUymiMAw2UxsF4a3XV3zC7ebnUVdLW7EAfuedpscMpgxVtaUHtrSPme8pypRrvCX8VURKXQgM3XYkRgx",
  "key21": "4gHyjWGUZ4eueRnsMBMfCg7MJqsLGJD8kH3p9XyGEghLKgPNV4aTMf36rWXkXC82D7GDEBYem8b7fkAdvP58tAb8",
  "key22": "4ZWt227GSWeazHYvLWb6xxATnC8cG3AFfkYH12T2BzActriDSKqVZZkgYnrkMwoLnFKt2DhZpe2hNwHCww1SCKSq",
  "key23": "4J11sdG5hamMdyZF4h7XQ93gqjfCv7VpPygqQxJATsJgNCRHyL3rxArtXRXG4ELNr66Atje6Dcn76uEgcBjbEFmY",
  "key24": "4G4e43UcQHcxpYFpkfn1xAkX5LpVg9mwQwP8X2gD1h9DNUinYUihXMhdP6Z6oniyJNgKidJm8dCjkZLoaUrmqsEH",
  "key25": "4vejmN9PNZZdU7CvA5Upgv88LbKZ4gENJuSiWPKkrk1geWwJGo1nUjecnW4fMGu4GxrtNvh1AqZFrwrrs5f6iHaL",
  "key26": "jL84qg2rBBfMdwtmhCpfEShQEi38sHq38T8eDrS5DV7W9D6KZ5cwQbiLWPE5Ad4SDtT2rV7gusuPW5sUq6FbxXZ",
  "key27": "3phWc1ebWzbrvQSxsSVwDfd1hxSqV7bw9hRGjnEKxcmUM7mTpWvD1Xk3EShoBFGKePxi4PSUxX4khwkvjRh6bMuP",
  "key28": "45KKa7WEciLXt6y9Ks5Rh4fMPcfDAN7d7iQBXBQX8xZAo7Sz1PrCVbwno5pxaRQpbETD23B2xQjHrudf45eT4xGN",
  "key29": "3QabEfWQdh8qhmutQ2N2Q9V6rLCyNRaqtT2HPTmppcj1x3s113oMokRePMLfB1sFPbeCqFNZBmEjRtzvUY2cD3s6",
  "key30": "2TcsdpPnRPHyymtpToudYnQTJXuq8E6EFJSwwxBC12uKptH2rBNkN3CbFUPojBdjBzmHFZiAmrkrP33x8aPhvpYA",
  "key31": "42QAuibWYd4buSFKbnj3B7B697JHfyaxmHG135DJYrmjrrNDMLfDzFVGu54yC1dD4voJQk1MFhiqJrquECaYsXUY",
  "key32": "64BL6z8GjKT5CHiFV8xY148XxcuNYDtzXv1xgTAYNPY8zYyZs8ky9Z8PPP177tdzGJ6PtFzmmN1iRWSvJbKwArJ6",
  "key33": "62QrPVSZ2VCWcmpR4GTtX8N2j5Q3KPg2qKMWq8Zny9h1K9vfbza6YJAUHyta54aUL7sT1kRfSHQ8reWqtSYPPzia",
  "key34": "2QdrXbGj5VfFhYWmXFtv5VeSL5xtSsEKsAu1xWBzdBUE4qWw3nSpDA7mP8Xn46hmM4YrVpJppTNg7RH5yZWWe2W",
  "key35": "2qTqnguB7gRLWQXmPD8YEpUgVQpKti8oCW9322jnNqQvnp9yG3xPvEdyLW4DshSKuR2QmSWjRC74wmQJyZPioLBC",
  "key36": "4QfjhDUpQT65jsS4Z8nhWPpdEpvpz6h2Vh3yvq6DW6bB6WjLQj8GfpHmvzuXcJNbfq11iEyZZxGZSHZzRXVrxRcZ",
  "key37": "5STNa3tK1aeLMZ1aaNEeawwM3LqNiQKXmc2EJhj4Xwse6aar5DJnZ5agHMw2qQD8uBcqXdjMuUWneCvA2kAMAz9a",
  "key38": "3VqnSo6ziCmqH1cPMebhy8q6yMTipnE96S9kHBY8j6esvrJchSPyzCRJxBE7FaicquNj15yNCeVNxXWUDMhWKeG8"
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
