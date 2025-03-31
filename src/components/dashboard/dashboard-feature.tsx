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
    "5QQG8mm3ATfH6r1fdorhR6yqjVkx9ufL1dCe81cxiz4y6avK52uTdc7ekXpqLq8TMSt7jr6iN2vgenaNwnepw91Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38Lhwd3zsFfChY39k3Dst7nCFYgcBxVdnWRWRSXrfiRCZ6en8Yz91vNg4vwD9VaYcZg8MRwr6pdF7xNw1wefGdtW",
  "key1": "5aYdJroxcX1LNEfHfseqjrueyi7pexp5xazCNeAnuD91S1fUsNarYUj52jLRabwCtHFitozC9N7aJn8y6HEtxY7a",
  "key2": "5x2hejLgLVuizC5aBrh38uUS7Jstfz2jdJWaETFCqbs49qd72wyFmrLD4BykpePCC5KKC4j94w8VckDXXGLzZjnd",
  "key3": "8qp3dHNUVvENMhoEGYSEBePszG6Qdgxm7qh5kXBoR2pCD4J3f7WTrBDWwcttR9eeN4UUQQkJbwHpLDTGohcThg4",
  "key4": "26A1y8fT1zw1YnwQ51kdKGqwNoSRZpwEfkxZQacpMwsyePwior8tJU8Ev8PxHnoVkAKfNqPzdDJUfnVtjqXwzJa1",
  "key5": "3was52GfYZdh4HbKuuxAruGG4XpB1wnFe9vVXpABTvYAxdmS92m8UuutoWXDcuXVLA8JegfgbRGVNakTyhQvCQaE",
  "key6": "45EzxEF1L53e7P4qKtfgBNaU5bLKoToN7S3Pcm4z1q5BhHRWf36gTLwwLgBdroqBYkDygoN6fPTBz2w1MhuChKWM",
  "key7": "bLiiRkg7iVvNrzsN6BzhMMauFGX7DAQi1kWeTifLZEwkRWad6aPekrtNm9s5wDrqyHuznCtQcW3umMkcHo2h4m7",
  "key8": "4E7tC44anx8iYTGv7qGqJS2J1DyHjBQWKNAxkecc7AUegocXUyvnqmkAVphoTAmnWTwYpVgCGnN2p2hmCtn1uiCr",
  "key9": "2EBfJ6FVj8RqbQvUozdusziPUnjcMScDs5giw7Tx3vmM4VXASVhdpjt45apipiL176TnwQzMe9e4MHk41um6UXUJ",
  "key10": "4X934idMcCMfRiFMir5nmSqb7SFWvtvgAhTck7ytCq5mH1BmzveDKaKJLBy6oqNyDGZ1LStAsj9tPfCYLjTWSWd5",
  "key11": "5kQPUXzVoJSSShCstLMe7cXE6bjXoHzprR6VPbSYBLCPYtmuX4Mnre1ujfDKmGsEFTm4k7gLBCcsXBLk3FdKd4TG",
  "key12": "4i1NBTgCvzJHE6XoPYoDFnxybS1zaHZU9bw1FG8DY4i5kEa4t3HRH9w8yoa67sW5xvKCh6sdjbFPShcdpzg5Te2g",
  "key13": "2r3kHR1wJWmy1SFSXRTZEs4AmvjEAjp648XrAvoheHcN6yvzUmzGgvMdKaqZLQJLtzCb9hoaN9dhUpYcpaNRnzmK",
  "key14": "3e7epxjbe6d54jiKdBXezPAxruxiouuRoPSVeB7nc642pUFnWe1jSvF3A6s7iXmnQjA1ab44oqABG2JUEDVDqXxG",
  "key15": "51YY1AF5s684CPtBukNSbpkrgaTrX2Y1QrAHQtvzbGFMayvXayUMbbxT4NA97yMVQ3G1ov7W74qFdgUTgmjrZPjD",
  "key16": "34LrL3sAZabSuU3vNnb7k22iQSuzJmgoUeu5Ji4BnfMXtiPFhHHqxnbL4epV53TTvU5nszBdGATuZMSr4fhCuwwU",
  "key17": "46jmNrS6CXi9BQga3Lb2J4FmUBt4Gd8R5huP1ds3QaMqaNDPXSoyfMmBbMF5bobFJ7z3yYc93ztQEMVEgLii7Tpq",
  "key18": "3vift5PshiURDZcLqJzdfBkhNwiXcsyTjroYrDfytepnK41nbsiZxPsBVwBBGkuuAQPEyVMPFMVxFvAzB6vpw8Gk",
  "key19": "5KvNF6uRRjwLLdfBFKMDSPDTGvTcZrwpLF77e3mtQT6QoESTW2soqFmfmXiVTSsd5H7PraPWeNTWuThcyfxLt8E9",
  "key20": "47J1CnR33JiRUWwi4FaYC6fNfCVgiNcGBwGUiXR2Py9uegoQ8zN8qCorxfJqkVvwwcF2HMEmizbYF9TLhFqw3sys",
  "key21": "HWdhp6RmDp2KV9UydJPVZXZD71a8KDCVH9f8N6e8JkSDktLg8c2XyfDBRLN5RKoQjWd1Xt6rA2GgrJLVZhxM155",
  "key22": "5MXMPqKr1ezi6gddgGMewAec7zGgoFMZDPXByRuCcwRRsTz6Lsepa7rw1HRqbktY9PYKHWQk9GJarDbyc7LZeGfa",
  "key23": "2XfkxB1RMnWx1f3MwGYDZGMc2omjAu63kgnQSmcmqh1yCTYiXoEjxLhQ5Rc7ij7WbPAYg4moG6NoEzU9jWdZ67w",
  "key24": "5VTXmTPb7equzPMTQYRwY7vyiTdBXJ7EKQky2eHLm3K1KCxUGmvmsXhC1MZAgzgJRamL1itr3dJ3kBmzjuRTfgf8",
  "key25": "3DfvYVPFPpnDiq9SaGAQKJGDaCQUDzyuqRVxQxrz3K6Puf8ut3AmGWRu1dCXDwDAtJRP3zmTBXKa7HDm2G23cc5h",
  "key26": "3EgGNrXyVJ84QfSnhJCotRHcwKY38Mzhah4Guh1XqS9XN9ECjQVpmRhZyCsDhWK2iKdNVHzYs8XSVk1AsQneC5mj",
  "key27": "GjVpjz8m2tLqyCa8RHJDg4sWUs3uAfjZuzqW7Uqc2yw6HiCduXJNGGhjjnX7HiiLkzygZDT1oTaGm4fvkyYj6mB",
  "key28": "3BRN6yPyJApJnyQ6pf5Ek6HC5p3jQ87eNygHQ3MuDJibq5tkVLzSiKE3Q7fsiSvUd4sTpkN1xywk53ogso6bu63X",
  "key29": "3qYYTFygKeyLKie87pnCDkisQBJHKTMnigAAeFW77PpLC1vZw8WcoMX7PbMQb4LXsvSQNDEvwpxKKAK8bcfUe9S3",
  "key30": "3BGTAXiAmHdXSSX5gzT4U51ff3Ej1nMoW8HN51Jyr18cYVxoXBgT7Jresm9zjges7pSg2jgUQdZop9i7i4RF6x9f",
  "key31": "2vdEzEVQm22yNK3k23WEkBvJNvtqi9mpbxGHnSzaTNiLhKpXJK8eFm21bMAa6rPpCPrgPEaETZwSv8CuVKwTsyZE",
  "key32": "2LkrXjobPLdhPxVMLi1oWnrgetkB7Jzeonid7xVfqyPmvdMW4tGrPhprBCkTAwKH4u9c1n4JZLQrvwv4ciZpWpAD",
  "key33": "3jqarBjep1ny9m5K93TmiE7kLguJzP8NwiD9KmpVj5nvJjvTLFPbPC2yYi8fw4havrURyZM8mFfNiVEDrGneKg3t",
  "key34": "5he9VUaXsz8uHDkvVUnyrdvhhS17ErA6oP3yLWQDhSqv4mp3wRLfaH3vrPQEdu9xm97cpKhw1mM6kiPu88kyqtXv",
  "key35": "3HY2AZzwmCm7z9Uzo8qm4D7xztSSMR5qUt1nnCkX2GdpKXim5smzJhfWfq8sD4qHjAvGGvKhY99gnrSnDTDfV3gC",
  "key36": "3A1RhokdZAUo6mLfQbm1ZH3HiS3WbaCjeegaYDd9ASKyf16DEG4FYxP8ME8EbEwCTQGNZEEFNrKeR5aZ9v6aigyd",
  "key37": "5345yM3U7i2165EtEGRmXHjLCAFHsjTDYTFnPQzHpjJLuTDn9RoyzTgCCgtZJZrMhWFwo9rjKdKDJasgReAZ9zSh",
  "key38": "4iSvwiVe6e3eRgXksxR7W42AZicW7TFdUsHREcz7CRjmmcygucRsxztTmaq2NeJrnEMLcqzEqkh5kqQh98HeZbM4",
  "key39": "2siRkF3nzMLkTy2dQN47fhZjTJX5CX9CjF9U9CtVEoGsAnoNHYFmXbXJakjyZbUVLhJTQT9W4EKkitKGpsMs6H1s",
  "key40": "4RD9SsXqoUrjC7b1FA5BYpd4Y725wWJpbwenXun7eu6Xtqv23jLg8KtBZeNF9fBsC52CrV1KExBEyWFdTgt5HcUX",
  "key41": "mnBawKWptqyGipjPPm84SkyeWDMyrbrBBveBBY9ubBi4pWVuT74rxr8jdT8D4DvGYcnmAA5pUHBbgUo8wBFwQyG",
  "key42": "2dxppw7bzPVB2eJuSsomFLJQiPgH7rRJ4km31YFL4g9MJSwtCJfWzTzWLujmV9eCpjxmuZGbryE4fUm8PYRALThD",
  "key43": "22vpP2vLLQZMqtvgmUqjUyFpRyae8hMkpW76jbwvGZgSiax1XNVPmUi7mDs6wD87YiisoVadJ9hwaPhaKMMuv2J4",
  "key44": "Xapfy7hLz1hrbB9DxxduZBgr9UsnjDyrsFdmHSu5A57u9XtvdMi3fyCk4SJ2A6Vjk8pYPhrkidiNrVVmZ2tEwk8",
  "key45": "a9wZAgEP7nJwh9QtYu1ZjtDnUccgaYodo2KR1ByFKfZm12V5MZJCykEKR2pc8qA6owjhHoBojUGWCG9GTDVgwXi",
  "key46": "5KLBwXAeVxUYv4DtvTKGdBqcykgGSGhPbduVsn4gp8RmvkNns8DufUB3s54jpECh9yxtsvM1vQDWccwkmSxTBJ3H",
  "key47": "4urGyz2z4ibchRyySi6wC1NVLSqvvUh8BQRjBUZjJtA21dPQ9kqMCv4XgHzo9Czki9H9TnDyxdVLCscz4T9p9F4W"
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
