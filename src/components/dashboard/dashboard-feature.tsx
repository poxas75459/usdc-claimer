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
    "4ehmd9UqWz1gA1gXPRJDoEfTmZGQC4tUedtjHMh3SA2LPhcXUmUMfpz3JWDAnJ64keZtbGcCj88zbxTHaNNFQi3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43RQrAWPa9a6oiNj4xL4cMqVTijEEb8kzz3CcbP2eQXWZhovyq7FfgsC1w9v5rAKEF9FYhoBsTYn4KSRgTsSka6B",
  "key1": "hHAHiRCXMiUBi9gHVukLAGtzFVbb2dMG5PXBnMvYQoPTzmd4rF3ipUekpPPUtEKr6ebJagfB4Bcomma7VmvMvrs",
  "key2": "297uUs5r6grBLdXeCFwfp5h9TpL1Qd5kzQvW5WsCBQqJgG6S48mLjaX5q2kqcsqPYZZbUwX7orUiuq2bZnr2t6Yp",
  "key3": "3gKLAQTVcDSTKP7Vmf2D1BmSkd3qjDR3o5srXV43ut7uMKPrHPyBAogEjarVcnqoqx7uS7Q5MZz9zLEPD6mEDaUB",
  "key4": "5yk3HdUq2X2c2w4j1i6sYmrYwezgk2nY29yCV9Ci9Ji6UCAqichujsbWvxwB3aWvFj3nahtr1vQMNY3GTXSDUmkp",
  "key5": "64SgsCXghWNcC9HHWL95RWzUP8hNMGA8JMWpKxDbQN5tCNoipuNefNo9KQEKWAUxy9VpQRMLHuzurF7uBktUSFMT",
  "key6": "21ux55j2pPRxKCMLuggQVUzPcYmQXLH9tAr6xVsTZaWXUgzHWL5xVeSeb6PDm9STajJwjfTTeSFfV3z4sWcMDjSH",
  "key7": "3RxTSZvQyxoGa1uyX5o47c22z2DGcw7Xz1TxA6hDa6hf3TVsaDtKnD1meZrjWNmhhn6NM9j688dc5yMAQARSYSHj",
  "key8": "3THbsiom5wcc2NXXGGvsBrGciMpQYbGu8i5KbkQfExFpozfxP1nQnJikoXdesg6oWEnceatMT8VC2jqFS1R66c44",
  "key9": "ewFpB9HLw9NfSYY9ZDGJ6EMY4e62mEsVoozGP6EzX24TSSudertzFU4FzsPmBuJNv7uWJREaxsBuqR9yjRUNd7J",
  "key10": "2Uw2CnKDxrqhbpXTmt1XNrdYksRednMieU9oknqoJhjrPwfhfjRRYB6L6pQo9yWvhpoLNXizTv3iWtVvh7YxWxKp",
  "key11": "TNQrQk7HPZ6SQvCocnQFismF8VEpjPPzvRxDcYSSe2ToRrC96JtTn2tgN1ZKhLHZH3F7FHYqF4aTV5ysRgounag",
  "key12": "Pjd9oNU6tXZcgw5HaVBRkD51z7CqW83LjsQHW4RtHdMfHdaxzypStu8jFoehXTxinEivjTN7tPoidkPtRg6jQQy",
  "key13": "ECQHYkneUVzVZ1V4vquAaPxtFJGWNHEE8kWg3WkuoMpiHzVeXdhyVQfqThs8VoWhm9fkC2D5w2wrUczY6gcgr4M",
  "key14": "LRDQ7JnHcgBCkftV9u1vVTgMFdwH2NKaLTjfUtFN8g8S3CpNs9Lbjq4ndLiEfqL1DFQu6ZenMMTQiiswvBwQr4P",
  "key15": "4hRMDHUEQug3Lr9Q6VAaoToVJHPxuCM2R1ABNz91xeULWg3doqQ9f8NeDKdhgTMADeruqUdr4U4ELqin6VtRsoBJ",
  "key16": "4tuhDzb7zYka5C8FTHMLCnzHCZWxuiEKjm8VFrPPAwWSQNEZ5WXED8BfktfCYPnMXy3S4vA1kv1pDBcaEFEUQzfP",
  "key17": "3ndSEPDeR39yau13jgociddff6Xawb4RMDkn7AWPmGfkpoouiNA8L2kS8gVjbPFguKV91EmA2opPxJ674CnEVqzh",
  "key18": "62jit1CzjCjjyKE31nz72DPysUVNdPyut7qbshLiFxAHW9t14dZa9jdJeHMwretWQTydm5x8cFpPvrcLQhLYeYRv",
  "key19": "3uqDvdRDofWEpnRi4PP5sZFiGBfLcyP8KWL15LvAXeopo6Taxm3CQ4JQuZDnLoRsxKr8eRXZHK1gfNYhj3aa6jN7",
  "key20": "2E2wokrSV7rXDvWUP9TcKgJLAQ7Mbk4GYkEijLfRKX32JXUbsGYnS5iKzCeP6rZ1fRgaJdUV1CrfQk37DJvXQkmg",
  "key21": "55NkUyBS1E68iStJNCiU6m296Rk3vJzaMzmA5cqB7NPzRw4JSJSgGSbNpmCtoDWnTk2ezJv2vK1euRrg9QhvxEWB",
  "key22": "38R8rkFaPkhFpvXSvhpu33gTtDvRKUXVzGAWidVts1nt6U8vvLgWdrNmkUYv2eCWRy2qdS1aZnPATwCM2KCu4zQu",
  "key23": "5gzFxgVVg1EPWfbLi7JTjiWs8X7Q2vjkKPLont93S24D4xvSAaDXqoJT6RNBG5EidUrcTgXZPXmiMGKQeyEjqoG4",
  "key24": "3oPvMpDfNvpJFUCotuGqAeGqNNYcmXDi5efUtJU5FP2CRRmpNbbiHwe9MnAwxoi7aZVVAmbESL211swFBG7zhKtj",
  "key25": "3CC5XJYodr621G8zBStMfEvoqe5PdEYpUvao3Wf1hmYawwEjGguzJHXULnN2BcGJCy4WZsCMxtubS7XBdM7Medbs",
  "key26": "5UpYkzXUeTxK6iNoobo1ikfpRyfDhgpWYJvSy18rRWnXr7kVRs6W1YL4ni89voyccNF4bHBbCGpxr9w9SAXP86dB",
  "key27": "huxzWmtdcY6PhxZs2nvPjvqfBWWj4q9vw6tiJ9kia6w7rfGRctdLs8E1d3DCb8tVNhcy3AYRow39cupMjB1vmUU",
  "key28": "L3hPv76KmF41uXTXetCNggy15gRriEb9Amycyjq52SPoKbvAjYmYU7SpVFpBUbL3aWW6yhers4D3uATb4mZo5Td",
  "key29": "2fDsBmnpCVBTGxqzPK763EJmhkfeqGEmnrs2u82ybGoyx3PMonQpsfc4dEtfpPEwLHk6LdAYX28yvJk6xYUjAUcG",
  "key30": "2Vn2DsL6CeuMdvjFrhhAjyVbpTa51ijMY1Raj4zVsvBTKVEPZv7xiQPugUtg5KVn5iTPQCC1xjLjTqBZnrBVQ5yZ",
  "key31": "4VeghXWnsC1ptdHYbXggv4XhpMWURw41cZBi665wRXpX2cw1XpagnGP3pNVjjRix6av8PzW4LvyLaY3EqofWvdsB",
  "key32": "32widjaNUf5K2zGmmpkVYzhmYf9xvP4xnKED8fZ63CtSWpZ41M4DsZFCATHpyNN5XteWzskNP6DBs356wWXUemde",
  "key33": "E8ZCNHB2cTsfv6n3eqPFk3j3QmQP55wVhoN5qfmFF7mvgBuVRAakS6iBY1Yb28dNvg9d9Z58x4Qj2PAS3VsLUoM"
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
