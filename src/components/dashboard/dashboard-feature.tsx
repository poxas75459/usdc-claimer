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
    "4EhvnvcY2aX4CjuFiBJiCGcNtuxNB8QE8SpsNkZF9U4hArnFFLfchbqCUc4c89bPmSGDTqFoQFZP472m5KfstvMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zDQVgpL3fEUejhc9xet7EH6NPf8KyxdaUG2Rtwq2nKgjybhtteBfquLKmY5vjdC6p3EhafoLxQNmzscSCeS3578",
  "key1": "2uUEYjTXNd5YkJbEeobNN1S8SPdLiDM633UkFbME5pN3kywA97dizS3FoX2irMJNXb73pganvxQqxkdQQNWhtD1D",
  "key2": "ieDCrT77kgL2oaxDofYvoUW9n7SqARXLPiw8Kuhw48M71zArHkxfkRtnrN8g4REjpCS33d9BWMZuvtHiJsLxF9z",
  "key3": "5SP3dSu3UtJqE3vccTN4ygrwQPYe38oGD4PNUagR3r8SRkXxALXxgKrYnbHPh4t4UxGbxnUGNFXdbYcyBShKhMyX",
  "key4": "2eh2nVTaGKLKASNbABJ9dYDMZhRxUHUE29dTfYQMuuVPe1DTh1fviEAGkVhwFHFf1LqnpP9BSnsXQjYUgNXeGR3J",
  "key5": "Myp9kRh7LiwUYTLNLHAShkv5ptPjLUtw4bAeKLjqBb8zFasAk4PLbDBebRiUJM4BB1YywXtUyiRRp8zV1EpssuM",
  "key6": "2XgkQxfRy9FuT5FGmiF9reF4xWdUTnyhJvge9Aeas3NY3fjZgqPEPe9yic1GFBYeyB7pMRBV3chbJTPwTpZH5NjQ",
  "key7": "5iKZadvnDgHPftKtSTZSYw9EGVTuv7ZMVZQY2qCHvduVytWF588amZjT75vgcBgt7h2ioPTSrWaQowkMcQnhWyoX",
  "key8": "5CS4uo8n2PQR1aY6wYRF9fRU4NxtTML1V7NjzmucVzSMij4bRDJnt1P5zufTdFpZpijWUyZCNJUsvzwP1bpd4hRK",
  "key9": "hspEGczWLdoQnrD6ycC8sxzfFosbHA8UXcZdRStL7ytdpHu7g1We1DrcLs8ci4ttA22rVNceyvxHMn7qwUa6etN",
  "key10": "4H7xapkHHUKk6NcnjivtfXKvXVo8iGfMBX9QZNsxP7KD5cuNs8fKcf8SVLAJ4YKp6AmREHGeuAyN8FezGRFsA7AF",
  "key11": "2kUJoNirKst6a6WgcRFh3osR1GEdrusSRphLLNucxQk12v1E2npAtr4GjtSpuczZi6fFhtxhzq3vQohxZpqbdmXY",
  "key12": "4WnGsjSpWdfh15LZWHBbeh9pFoQrjwKaLgc38CnJGqm898CVstHx9sEDdXk7HfWfofhyojfmPYyG12Zxek5UpDbY",
  "key13": "b7TCp56f8tsNmG7f2cVtfpVEAHQM5HmcMj7vMEEgRvYbDYtekmKfmZ9pxufTi9aKsrn5GmaNRUcf5qqUX4PMtni",
  "key14": "PQsp4y27ctxg1DFAP1YtmMMZqsSnSzFDfx7odYWS4Mcn7vgD2xiXYrhCRQvGhyZoZJuDHPST7WfvYjf62ArVPh9",
  "key15": "3sUMbQBsNr1pNzCsHXBZhTPHQwEMDtVhZSxCt7UYmgoFyqRczwD7pH3BJGyrEQUruFXPy7z8yDjXsZiZXtRqSA21",
  "key16": "3qi3dLqsZncbUecv6xF2Fa4QvTPo4AMfhtegzC1jktmErHJ4RcYSKBgKkrEC7dXx6DLYgVoRpsvq2VMAPegwPmXR",
  "key17": "PbXL94zTn1s4tuKnxHnqoVsAQfRWkmYyScU5tgqA99e67RK562HocpUFiCPzK4xN6pDXTPcmufo6BRXrmo8ipLN",
  "key18": "5VLr5n7dbhyXWGzEz3Wqm9w2EYprFY6ESe9RNFbaf3UcKTVapte3r6c9mqPXrmS9WHLY3natTJhad8G9vXKhpXdY",
  "key19": "2dTE3Nqpmz9kUP72dr2QAYzEPAAip8QozL2RHWbn7Ndmxb6bspgNbmSJjvwSJjBLFjjdtoq2pjzTfMEAu6FQBmBx",
  "key20": "ok3xpyUVShgirkexZqSUHWRXoFddznpoDyW8G62YH3GPx5adWdbUbfG9gCyKKyfzJ9Xq6izXamph6B7V7aiBzQc",
  "key21": "5YThqu5r3ecVVNa7tpwDKt3D3wN6XP5mjktcEixmFduncmJnqb4FSyPrLj2vM9q97vYLd4FyJePmsdym7782jFfE",
  "key22": "2f47X8VJmhc7EYWZYFL5zMoonwYLNWMTDbe4izHgHWLNJVhwMhDfGTuHeTixWn29WhUU24esGWjywQDUGCuzoUrg",
  "key23": "BCu8sj5VLGKvScVzdoVrM7ZQkrMEtdRbeTf9isUXkij1eh6VxE1XoUVwTbnDRxztBHSTRxrZF9n5QbP9urv3xQE",
  "key24": "3vzRGJosyPxvDU8c4NUBeCYraHQeHKjG2PwZ8oLQPPSGK7wveLd5W4HQ4j8xxYz17Nshf7oCL61BLzhxpJ58NvwE",
  "key25": "5ySZSG4Ja7ae3q1DRc1shAPMviGw92GW7NrzfspVm6qNyKrxPw2kmGkGitKKuAuhh1Vq9XgC541dCKSbnkaPwf3A",
  "key26": "3HNTFK7qLLyWD8hoWrgQnBfvDYeuX44oXm1uikU9Uem1gsSjuJeqBf9v59Jnk4F2xTY5sFqkTTayZjXGoxMeMUFY",
  "key27": "4sdbU5E18TwGJ2UPqBx76pksSmvPYGwg93jouFV3mkGTwAqJ3BDLRuBgPUBV4yyFnDWCBguzye5Q9NYk9RXYJ6J9",
  "key28": "4YHG8N1Tfc8kYM1dykcssD8n6XRPpCD9JpPWKrAZUzcYjDEqEp8Pko8mi8Js4nKhV6bZn61ixkpBv4TU9AqpzdUj",
  "key29": "5m6RjeP1Pfm45fq63fqWaaQfQ7hCunbvK7xKEkFXGrmcURgRJzGKvU7GviNBcAoSkQKuUKLDVHPZAu7J6CJiru19",
  "key30": "4ZEKsADbXuaYf2s94g464fvky7WhkSweedR2GhuwoWJGbABSeWoywd9dVZtBSsyRzL1XjWKLnShpHc3BesajJ9aQ",
  "key31": "3yR4EJV7WC7DqeFnYFUA96vf1WApjFzxsUeqy5R4phCy5zFg9N1zmCw1WyZcFjsDJKjaUXBMVD9Rkjo2qweaJvEu",
  "key32": "3zYbDYJkjbkCnrQDYM58NQGRM38PTFrr5P1nLvVzLL12Hj2kg2wXRqFJXWdZJzACEUFs1bQVBQ7hB2F3hb8CJLT5",
  "key33": "2uAHx5q2cuYmT22Y2TpiN1F8WnUHmXQ7NXDqBjnnYMiXimSeHgoBArrFxgWn5YtnK54RS6VQaoXom7MdZfeAPJYR",
  "key34": "2jwCcd2xAiMfvUkzW4fuVo3JQvF3AJZ8eM1kWAwWZ6BjfAjLP3gD7LQY26DD1T5HhrWSVEYQzy2ojudjV7VmRX2j",
  "key35": "4am8y31pgVyMZ2K5xwPn8enek5XjCeF59Fee1Rsj3LaBui3EeyFCVzxxnmjPyS1cE4cAvfdsLDsEPrPzuzmssTz4",
  "key36": "4NaVfkBKeBCiouJw6ttQSW3tgL9E575pU4cbFYH7vJ5BmPWZXhVpdTnagwA6uabmvTGf1LM7v2irZbHQRcQkkTyw",
  "key37": "22ugPBPLQ6m9a9Y2jeuLaDfNC3CBsC9QTJ6wZCUKEHyJ287Ag4QuZAB9SAnLaRA8Q8MjHxhBAyqgmpgfZUNWv4sM",
  "key38": "2454XpZhFmuio8e7txZ6MURQF2pUUUy69whf7omSzSz1sEvR7QadGxGXyptHuzngCypuW12gaYVzf3GhbaNSxLSL",
  "key39": "2ju9fwTZ32DGV7X9S6td8QsmDrYekactYFP9Fq3YMfxG7QchDWy8TwGv7mSFqKX9EeLKPYg34CZRsUsm6x1bgmHQ"
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
