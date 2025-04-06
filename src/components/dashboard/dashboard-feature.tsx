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
    "sJWYeauEy5b3nb8pNzvYAuSHR6KHqWBKFkvtCHrxHAzaUzHbvGdfFKkSMGKBcB5GcrG3pkLHeauSqGSVD9xWqCZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2Vm8anusq4CeXwrJgWznTiLa6VWCHWxWDuiFtAiWrkndWaL3u99gj82o1tuHGTF4raKSaP5AEEtzdaiLW6Kudg",
  "key1": "29GWjhYm5wd8xgYVeC1Jgj4VEDEbvGjoZhdXKLWfyarS3AdBjhfq1FRomtPRKzem1JRyKQ5JxCs3S2LTFEoRjhfB",
  "key2": "3qAHmVvgLQd1QqfA88UcLQKJAwwvCppBAXfPUENtWWzFYfZ27Ji15aTvRjUeCriJoxHg6AQ9jcRBGMNJpAr7vR6a",
  "key3": "2iwU9DDLxBbVVJX5HMNw1QtVJHxdxQoLQdvMyFrZvSYKLnVbgNGsfspPoMmZEbQfcgrf46bmpU9Nv3aRNdNCbWxB",
  "key4": "3sV57r62Hbmfpj7Uos4tctrP6HZEKqWSF6PEwWeKhwqd5pqikgqTGeZq72eQDApuNNBQFbJWVRVAG5gRruMce2rk",
  "key5": "5ggS7ucxd5yhoMN5XwuXcH1UbhVDWSwPRgggqm4GTrvpHMvJVbjsYD6dFTxCbPiNdBivWZxbAMSfygpqzNHzYGRb",
  "key6": "r3psG4HGGLir3VpSrb8VhKE6C1tCwpSjTwWBvKKPnD6KfD6oCsb6eskTnU3S3JsKNoPBbSyNTzfickNq2nsRYPE",
  "key7": "5Sk8saDyii47P1rXbFuNrVz62V7SXye4z4PLAzchek7nEzM96gGuHBi8NHrXDRzhHRatZKGtDHS2Q8cv6FejFsnt",
  "key8": "QBv4RB2zQ5zkiHj5n4XjGuDD3dZEFiSZZcdVrFar4SXUzjwzCTHwnjhBpBJH55phBS2SMD39xZSUR258oj6fzL1",
  "key9": "pThzbJ4WyAh9JCR7AMzteVL2C2iLpLQgUrrQkwPN3Z87vKywvfSToYx7zSxMERniTfq29gzhTVb9TcpwapbJbwa",
  "key10": "2rkfGATFdgfEPZb58oSJfDVfi1SBp9badrzaKHn5iAv1FpNhgCexw3xaPHLKic1Zifcsa54Z3dmeuoWSHAbQACTA",
  "key11": "5ihvy8rjFTCDbaY4RK9qNcdGjNsFhhH9RUhCrizj7tyupZc235gnBNKfaKa6dwbLg5RFb6mxc6fbWHKay3hcjJ5j",
  "key12": "qukTQ2K4J1LCjiKbUqLoVhECU6PK69g4sQdUn5TebVSrgET7fMYF8BVh1xsTPQ4EuGFFUCrasECZLg9yyX6HKK8",
  "key13": "2We148rLnWshHyozbcLcUZ1g4WB9LL4623q91tgZKCcNugCqKTsphE43dcooJbjgyEFf62igzbH3BJc8mXhhD6Gr",
  "key14": "bL1N7m3QwPTP2Gj3yvxegkNbfZFtcFnLddV2s4H58x4Yc3exVYkyrwUuesGXYdLZda96GdmztAkRhd7iNjjcqKq",
  "key15": "4djfuvRE4e1YP852bGAgAk1svRrooERS2DZDh5R5f3ac3FV9UenUxz4JvCLmcQ9RizzoGi48JA6nAnToyeLSprUN",
  "key16": "4rKeACA4AtxP2vBt4s76fK16x9yPhoFuJaMmPEfRo9aZz9gLoZvie6y7HhRZoCrY3kpVWYTcoigVUq9jLrKc3dez",
  "key17": "3fCRFRGuPp8rCC6RSm1XDy5hL7NP1qGBuyHy2EudUynypfjVdUCdU15dapqDnPPkwtjzEWgbXYMUzuQpuM6b6M9i",
  "key18": "496rkiywWQUViZQzMK1QtswM4Ye5humA8jDUNtYWUkeQ4rk1go9JjuANu9v6C8j9XAB34F7SRykUeMLq4aRD8bbx",
  "key19": "2euf37u2gF8EFTgrzgQnww17ENN2JvBW1e4qtsze8Z4tajprG2ZyfJ3ibx9sDi56dNMsopfjcuCo1cghLeMBUSWD",
  "key20": "3mN2PLMv3LHkxZgWeCjxuCHzDmND6W9XsJ1Eq9bBL87bFiytSjQWsdwQoNfvASwJFntB51PDGDGQWDVoEmXnzQT6",
  "key21": "sy7MEWK6FXZ4tv5egLt7yL4i7H3E6tevsMdwbFSUf47SdQT1Dt3mduj3bALFk22B5DWRGkhsf3ob16ZpuZyr1by",
  "key22": "4YdqvUzHR9uFZGsUNh19qE4uyof4VvcXDhfz7hpB8QDFTW4d2zRKCce431XkwUv38nYqFL9JMb6Xz4QrP7Uy23Q",
  "key23": "3Menau2KDXkaZ6Hs2oWXpbM7aWDE93BJKgwK7GKL6KZT1V6zvwzXqWDRfNiHNiQgS1AG8fRkGV5hm9EEMkABzPaJ",
  "key24": "2MABBcrxRybhNaM9MmSy5Sc87yHg3BjYvreQTBp5KZmnnQP7YPSqHAE8JCbW6djeNqe8J7WZuqUadkCkGp2vrEbL",
  "key25": "7hchYTjAPAuuEqpKDcPRfuQgfmY5JCeGNMcbC2YS65qRfPS6HxbEBa3PADKfX3pQSpsf3VJS6oMuU9y56yqkaha",
  "key26": "8gr2ZbHKHsRGiBiqiPxRTfDaMuTTxJJLHgjHoZ8W9W572PdoZGMQUbNTsz8aFg4121ctVbVoAht72SHpbjp2ULS",
  "key27": "3gtWXWDp8ymhYx2QJqJTFRVoquFGLouydQqZkPTabH3vuwkaCyJQ5tPJpgpQzLP5KA5D7bCuzJGdpzHATHtXTC81",
  "key28": "2DHmq65TBck7WpoxGoDkeZgaDotRDvAbJtcfqEq3Tp3jaZDs4DdSWtrKiuxrdkqXn6gruu5UWXQ1YcGzMSqXGHND",
  "key29": "23ZcmFp9aEWXVvCmfs8eRUCgN7uY4FGwhkKBpF6zUGkihngVULHC2CyvkWCAz8kf6UpJASSR4rWxFP2NZzEN1hHb",
  "key30": "3ch2c2cwXATui4iyifZmFFFhLeFSpPeJdpKmHJavE8CrAgb8RTne7m7CDdCXDjJxbSonVmQoShgzobKNVmUuYQuW",
  "key31": "dubsPESAQgXNnPr9u8xEudygMjL2zMkwxWqFFYU9qmeb3Yu6E9876n5WtfP3rXy7gzCjpBt7pF5qsj6CRwTBsXz",
  "key32": "4Aez1npYvo3nTZbzcywJoS18gFuSApByk8r4aVrrBcbB42XauV9cVAZHXzj2L5Xw1eBW19EgDSzESeiPSWRUf67w",
  "key33": "5weSRpGH5LvScikxvxuspAxp222LWXJ8KBxnTbfizvz2iWjByU32gsiDQHNnc2gk4Bg5rqJuLJnSJitJuu5bNh8y",
  "key34": "2P3HwsVwyg8nc52yWKX8GLjud7RqSqpDXu6LUXkai1Eowaw6WLwxCSmMtUw5LtyU1f7TEzMx7iDSWnB7dUXNHJiY",
  "key35": "4tcg3PdFJjeg3LXJLQvU97fDbDHhRxPqRYvhUAqoBsFryUjWuBz4SVvE8vffYkVBP7xrm9XNNTDXtt9LTkgrp4ko",
  "key36": "3hLwk6UzeTcXiiUQFm84Pm27nfWyTs6CgJBies23v3MHVUoQLMuk4YEQLHSefYci7rCKMmt1kj8YC4qmV9NYiG2H",
  "key37": "4Cz5UtG6MnjsRwvBmDqqz2qKMB9rgFUjZXC2ZmXhSYmLDgJE7EZe2e7bckfjGT5jDUKpCAG1FyBdF7JURnbj1TU9",
  "key38": "5Ymsq6efVyopHm8kjzn1MoM7vTJFr3rFgYuzW83T228StnKaQc5oggFMLGrpzsXRufmSC6rYYbhu4QvuDszdikCp",
  "key39": "4QhkebDspLx48dGYK6wET1wBCHJwCDoo4iPu9CcdSgnNTeuAC9jtN6QRhyQJTbceZaSZW8ujzj9hRUB2ZCWg3Mo6",
  "key40": "3jnp4uiTRMj13iKtUffqfoiq9LZ3zAbUgvSteTVgFLMYY6w1h2W3YyFtoZzV2hmvmsoCU4W9c1cb7JBKRW8bdnQ1",
  "key41": "Yd9oqkhc3MTv3ZrTwGSXqtAjKSkfZxXbBebu549j5hTH58iRyrBuui6EeqKchTjRdR4T9xo1D4XL7gmiCKq84a6",
  "key42": "2YtckoA5kwQCW7tUi4MgoMt3UNNCSjx4QDD8fv9nnzwSkLh8wNheTtv9prZ4Dpajqj73vxkCbqcQozsZ4WbYCsWd",
  "key43": "5MKaLSNp4LpiyrhDQPfxVJ4jevw5NFBXaU8hn6579UyaFeXY8Upap3iMVBtcGs4znJbx8HNtQELNdfEGH9djjSdG",
  "key44": "5s8vHXg6Pp7hTsPRSqEwEpMUi6dgkzRdijY2oZzDLtiKNFtnkePTByxkRYVNfRqXFN2Gmc5o3cp7t8rCV154wyCq",
  "key45": "5Eus3bf1jYv2GK961PDgAUYHW5Ev9SmB2hHSzZrRhbr3qXSXvBNtpFZWX8Jm6FVaog6gN7v7C3zSVgNQ4JWTDDme",
  "key46": "3btZkwtK1GYKkWYwKG1kL7jNEqG8VMtLjJZ2Ya6VAGuzoocnETi7hT7RsUowT6WhpXKeNfxpeZdvjqCMvMHSBDP2",
  "key47": "4Y7kR8FSj5Rh57cAGy2pCAKv9g1QLKnjTEju781nXtcA717BbKFKqLoa5MdhUFwGcM9bfATn8tb7ySTFGm9uf3BZ"
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
