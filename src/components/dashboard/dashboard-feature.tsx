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
    "65YVuYdL6K2xVb6Ar6ofPSchurNywgdaZCtXTK12KGiNWdq2KykyAMebw34mfRfrntFKW7RitrZreRD46AT6JmDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P3rDtfVYzpAiPH59zyHDUZhFpXTfFWpfRVpSdHDaWZjRVhX5XFYCyRtDwtfccntfUGQXYuEFmjAntWkb4AXe5pE",
  "key1": "4XxnhsFAyzSiwbFKpfnKpKTzyKYvYz5ucjLey4BG2DVs3Jx4HceuJFTnCTAog7GkpjPAkChBrctXqoJ225Xi2d2i",
  "key2": "7bhJYT8VKKVwvU59SSUgCb4EanNPqLAe5JEJkpCDHWfprtsCRZYLdTqkDMcGUL8EQkW4fxabEAKRb7UdsQXPJRb",
  "key3": "63oCS2b7j7jD2zXm8Zv4yTiYBTXazWDhPairgSC8D45JL8QkvkjPVhBAzuQJt8RPAqZy4Wfczmm7ZXGvvhzzk9mX",
  "key4": "3Y9UrxHCjzSMyS4Lsc43eb8mUeg3K4X8BqCmCsrdrodEPEXtVqb6BkGDbq8W2sKKqC9w4ea2izpDPHjq6jt3sXoF",
  "key5": "2xVSiwW68LsV9E2za1jMFzVhtMj9BjNtGyLWu3S1w95usrCMY1vsKFcUb54ufhwM36wWQRLqP72uPtHXTwYCPfcj",
  "key6": "3mtkkmyWvJiDHKrxLh1R6UGLhW93DUFmYBABQ2prNyKDSiyGZagKCRkQYyBSDd6QUFoUCaA98QKeQCYJv1gFZNtn",
  "key7": "2XVGmHKeDieCwMTxC4Tf2bYdyNSp2iJgsCtabGi4QmqVeJu4EkimhzQtYq7yJ64FaB82g3zSbCnB9TcopGFFmVWe",
  "key8": "2wQN3jDewJDxnAntjHcqQW3iXHBn9AwamRX44CfpgTceNGix6LYhFXzS2at9qNM6UhxiXDVvEM1aedrmeSH3MjiV",
  "key9": "51ySiozyfffGrfc8K235ogCiHWNieZnvWc4EKF9jLEJzPFQX1psct82Wyj8RTwwVgdaMKozJwuidk32j53uVNQqJ",
  "key10": "ihHbnotDN2sJsUDZhfgEFLwmDcPNSyFgzj39jiEpUnZykQ78a87eygiqbom2qjyX6YZVNfBbkhoFaC5HnAUxhyZ",
  "key11": "JiqRfgZgMDzFmS89Z3zqEUCnKvME94MzYLQQF3DKKqRgn3NjkjwM1D6jLEdwedayxqn9XuSt4PgdBreJDgo5XWk",
  "key12": "3XWew1KUV48TT5c9f33HEF4sEup7j1VJgMA7BQpzA8miDX94GzgMhC1NagqfVaHUPAMZpYQdJzPYUga9BRhmf62a",
  "key13": "2eZvfxhgaaUiFPZJFXuT7xGjBy3Ec5fmjaoQxdxFkvzabhUv4QfVgyh6Yj4Seh7MMZhq5evtcXSFVenSpfDsjbmv",
  "key14": "5oy7f59wMq21jP4kkvyoAPCbKgkaRzsXbhRYoDiryWmwW81tjKi7Fds7hdLFdqA74qTa9w7TNAgjYWxNqpsCfsx7",
  "key15": "4Ys9mKz4XiSJ8BKPVnEWyNjb59kQX2UpGhnNkgFiL4nkJzMLsAdbsc3b1Asa5bs7nnYhzh1pbcjJnStg549CzvQM",
  "key16": "4LsmcWr241JHbyPpiWcGZFBkEQNKqdmNnprzyACBrXn3SQv6ovC2PThkc3VY1Lcvq1StPzPrVvVDzmkw816cKfYq",
  "key17": "35oLBSDDYVb5GMEhVAZw7mQsb5KJnp6WiHhA6EKqe1wmdkS8VBdMVHESsr3ffCNC2BDL6pDQVsw9vZkwg2UTtdFg",
  "key18": "3EJZRojbGdwzUmxuDL86UAtA6ipsvrutdF5GTmYHuvqCrvWZLAc7bqSySJunKQNAxjRCdog9ns8NFcobWhZuLVFc",
  "key19": "5ofkHW7mhwTRsYAnRnLTjNmo4ekXWmGcB4KvXtCS6pkScBu1eaHs99oeRTbfjYWGEorGuyhhB5hfifvRG8Zufmjf",
  "key20": "D8pYbuSzJV6D9w4EhtTHbqXUHwnQ2vkhwNrBkin93oQvDzVwuBwD2xAowRMtd8bfizmYtP76bcmoy2prr2WJkVm",
  "key21": "46smA41w93e57famKpjj2WKA92wr8WkeYcx5RrHDeWrDKjUqKyGHTqtQr8xUxxqHnQTdFd1yLDf87ZEYPXkP3BM8",
  "key22": "65iyc5UL88B4FXHRcmkEvSLnZEuMVh8w4ikBkPTWYCNm1aDT6VXT2SafkQoLmCdybeWLWrFmLzjBirYBVcAabAK7",
  "key23": "dM9yhQeYNKsnE2EEWbktqTNFPtvrhxHRTsLECTDzK3pnb5R6195q44uKD2zPhV3d3tk7AHMLoCxScGEYVFPVwEt",
  "key24": "3oU15a9ADDyhZT8hGKVSggZvVJ3Qqk48pSxzZU2DQpyyNCm33qJC1WNZQfs7ZSAGxyx2qmiJV4woDW7YKXDNec3g",
  "key25": "2hFN53MsMEe4fNXy7qpYFFaLsBMJdn1gTK72XN7ebHxiePooxTG8HaXccQkEN8qoR5LtbYgz4TRRzpoKEcDwgQwV",
  "key26": "rLdpbiyoG7ENgqiTs1bUYwLoTYZeiXgiYsg9a5Qg9EwyVKMKNV8brbaUUfAWNCVcudXeVmtGUgrGdn7ncDwc4Qm",
  "key27": "4p2Ns5ufmQ3vYfj5EDJkZp1mcScJtRYHbjxFQpCvRENsZyDZJViYfN7RRb32FEk14RaNAtse3RKSBNdqjmyW4v32",
  "key28": "tuS4R9v2VuHVQWJGT3jJ3RkshfxrdeW4wfJ8CzeBJaHoYkJ14eM5dgHgjVNPftfQaw8ebmtz9t8xEs2sv4RsUUk",
  "key29": "29nvk5PGm25HUtvtnXemtEaQ4D34c33aiQgTvaQnWW1ufW4Q7W855nmmMvLjXcTkEnSHYntT1Jtq73aXGeXV65XP",
  "key30": "3XqMK4HfoyXdZzzRrCxCQ2WWrE4CyNiURoQBJ5snCwCrZZ7KHWLEQWPuGKv5RrAKAJRE6L7eUMSYqMsrU1ZrCx5e",
  "key31": "3ndn3RSdF5o2yGHjpU16pXavSuZ76HfSZWNet6bbotbUUXQe17HYB43hfNXfHMEMb6L1oUZVv95GcoS6TPm9GD4b",
  "key32": "5VCBsLGQZFRwnvRrM2kPCRKCx1oSR9jgVE9f294uwJ7nwHRjuACgF8c2WvQGmJ4Dn3sKewns49U2j55UhjEDqxLM",
  "key33": "4Kid9mX3vUeGybtkYgiAYYVNXSZ1tSMf1cyx3LqUNVb3DjBSGYTVmHTWS7LTB7rLC7wLu1y7NZAJ9XYr2nyo1Jt5",
  "key34": "3Ap1bWGFkhdTCFXpLdt8mchnzg7ugcc6YF1kmJuZsQTxYfHRtpHwCKWKFDV1ccCy9pw1ZqEMhhNWenrE7wEwYSmD",
  "key35": "3QisaPQJ6RR9Q3ZP8xXUCoyJB2Zk8xZVny21izLXUxTU3KoQEC77uxc5QRgLUpNmpkx7NV7chHT9WdrG4YKZh6Up",
  "key36": "3JuRdfBcGG5abdVLkMCF1DAqwUDYuxpVUsEFroFQLgZvfsyAu2gGpbuFh6sP1nenst6LHguUgcexwKToHdH35DnV",
  "key37": "3yW5cZqPtRYC79Nb9T3bcSpNcABScAq7C31L41Qvtwa5wrgZD2o9sxV2hEsCqVxANoEdjDLuihZWtwi46dmk4pDq",
  "key38": "5Wkh2EnhveVkBP72198gDmBYcAi8o12sbVafk3kMT68MXvansMAZuGi1UeFdQszD5GYMjm6RHcB1zBNdzuuCjMdS",
  "key39": "3yt3su2fwMfb3A9nhJv1LTtVApWj7SHqaBNEKX7PkjY2yncmJgMP7dy98Fm2ZkaDTHZXavyLPJeXQpxU9uxp6uzK",
  "key40": "2r8cugWPfe7hN3yyWSNJDL7rVGx9WEAaeXP94WFUPi2qxnf9LXax3wVVYdiqfZe77k1BnLX7pzsrt2cjmvSkaqGg",
  "key41": "3DirMR2FRStvxmS9LSuWotq2tAQZRn149zc3cZMapWpShAf9KAyqPWdhNBKGudv7E3GshgdgCaLXGMTmdhhkbGnT",
  "key42": "3oTCrBhccHuic6rfu2CRyF5T59aoSZuEXDq16KizfAkd8k3BLmuFPuimwMvW8AqmvkSnM8yecnt6L54msEHEvYqg",
  "key43": "4yd7mikdwavFKTJrQ3S3TaGUzhuHorPSmT6w69EUDcTHwtja3S1S4r8bbMj1CxCJgmh6F9ztyQ8cvPtTZhQNY9n1",
  "key44": "2xUgRWHyMKHojLsYehf6pAV7d3bmhgW1XPGzshrEg5v7hXFnAE36fCdeF3Y8qvfUhWUVcm7GmRumNZByUykVmYGT",
  "key45": "4QPgNV6BpiAZdrWmhCgKSMUGdbBgTFBwzmqGUBoJWxGRHr65erVwpyz3BPhzgj1y7nVcCQPPAtFFgkTft1gLNCzc",
  "key46": "4UHZove9F92dysshLsqCuBAPfv57mSYtJEjS2HrSYX7uagvCctju96wvcryMxXvRTDtMmja5YFpCNyZKPT6D87dx",
  "key47": "2pqy2F23BFzYtCbsGFjooTLe66GyuH6zxRzgSGyKK2mKVzbLhuWz7wqdr2QTyU7LqunCwMx479rUZharR1LWC2pu"
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
