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
    "2Pn3HpN2RgDw4ySvByqGat3Bq38UvNLJYMA4KHiuKNqtCMbnqYprc8CQiGRL9K5nCA3Ve8Ccw5FJbkDGT39tVY6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kNbe5xsgMc6bnbzm534G6WGfYULoDBbetw5MjfsUCNwetGNqyRMAUgfE5hwr5iJEvWzuyrU7Jut5WwuA5zW6kf1",
  "key1": "4NNpknGoJX3ffEqpuTETnZsvcJhuZMorQoWERY6dJHj3CwfiPufKDPC2Ydp2Q8XhYUbHNxYiXcbC7w2KC4dnd3NJ",
  "key2": "4MoJQcaDLFmQvcwFJpQr4yjynSCsMNwvA1DzvzqpJjJZC7WFg6m6ryaczsuvv2Rm7jhUucmDYQviYLYDFKi4CTmm",
  "key3": "2QthhrMGiZUTwAC4uWoT4ZY5c1xd6SM5x5E7H9UbZnuXZ8oJZd5TZxuXXsXbgJ3CEP5vfLYAg4E5L3GnVVC8awuh",
  "key4": "ei9SaG2eXp7wDNgsWorMdJBwMQ73Kht1RDSgnhWTBDvp7HvoPB9o7snwZuxKDcrzYhWXrcRejFoq9PR3vsgGCjp",
  "key5": "5YpBd2g9BWbyya5vEzSwVqNKc2p2zuPNPRjESCNVMeLJUvhwGYNoW8ugx6yDwWyRtqVQ6iGLjvGsmjryse79TZC5",
  "key6": "2WXoQ2YHVCfGLXpEVcAsjPqC1KC2iWQF2DNzc5f9fYvA52HrD8EiT66tyqYHgiK9B1CRMnrYHENUNxf82H5RGeHw",
  "key7": "2sBGAVReZters3uVf8KyfZ2ypzYWHmc2L1BgXyKP8eKphdbLPK7dvRm2RSmDkD2fgeTKP3axadi1H3NTuSsNkJg3",
  "key8": "5LUQU5DMeHk8nQR4csbV96acqSs4BacaY77KFp1L6HGH6T3kwYUHdsmMc3DgLREu5xtVweuJLRNsTxbwwxH8DSSQ",
  "key9": "3BbE1JoxkqDiS5aVESYkXSnWiLq4KJmdw8hSbz8ATFYiUHwfpBZqQu6maPLbhKN2UscKAQvMg2WasfrZr87R7dq3",
  "key10": "2zK6gwz3Jqd467Fc6XmQy2cNoAQjsKZP3vKRGWWRJ314mBkDpUo4sXBhzChmnL27MsKpGzWkJT8rbp6W62BpBLmC",
  "key11": "5sMCUHXu7GkdJZjTSFUx6vWrVH3dMpsiqyY3UViUR1Ai9HSDzsPC6roPEiSfc21FED4hhvh3PEU6RRGtbfyspgS5",
  "key12": "5TEQ3iCHzXMXPVfCvhxFb83vTrCF9LhiGV84hZ5wtcHW9TdJzuLiU13HoxvwkhsxfgSwaXNd6BJLVpF5xJLJygBF",
  "key13": "j5xtMdcaoWLr8wpesvD4qd9WZUzmtHYiZoxcGNaNQQcpawVYTyoBZg8fgS31tXDwx1SLVMvUCsG65AVRoqoJX4Y",
  "key14": "4FsA7jZBDUCzHaFi4RrAPB7RgwG7A6hjQcG24ok3a8KRU7R16Sj37qa6BLHFWy5roKfJQW1sYmdzrfC3kwYHZgvG",
  "key15": "3uXutNnxqUkAXVXFCPoPzCSjqRybMNkTNWjFaN1nR4GR45y7EgsHEjKTBML5hVGn7Qeaxc4ySNDrWgtWvpjb49rm",
  "key16": "61b2fDYe9drDgE1EbmC5evB5b1RmiEZdWX3trCZ9tDfbo1jrRtWi2vDQYvTMKkv6DAY8jXw8bHRdeiFsCP51k34J",
  "key17": "63NqBb9LVxAbC6e3LYb8so5TWT9Ri2ZczYLR272QAwEwx8MPep8EfM2a7tRJ6n5DjriELdv4eBs9ohs8uJFHY9cy",
  "key18": "3pfNN3fvfsf1X972UcJs7Uw17zTPUJhbiRCwb5RVbH7kcqn6nquxmwAhYEPQSgGWMuEMu1CLj91VV7eaUBwVXQX2",
  "key19": "3q3mwAiz3YWrNmNFGJEUPGvEBqVCA3VUcQPuDfCFKBSz44k3dQCDNV3oMRU7nsWgYnreZU62GmcirfbWeXtk7gYD",
  "key20": "4HGtGCLaEit7Qnpro8GVVqZ5V4aBfUJ6TSReu1Y8iPMU6Y7cZu8WK3qvBAaj5XfBBL8xTFvYpuCV7NLcZvoELFSb",
  "key21": "Ha1MoDw23wq3AGX3uvieiQSjUht5YJi5bwLqyBrCDwX9xdsPdVhh92At9y2Xur3JV1BbztccJFNJFeAEYWaBgvM",
  "key22": "4uH1xRJAd94vUB4kF6xqUAHuPHCxhrtfsE8LVNwkYfwMhvtCqWXpTDSBxwBFdH4o3J6qDgdQ1qPoU5Fv3qxknDyV",
  "key23": "5veJyBh1i9NorrgmoNxEBV487mtJWPwrqUqzNCfFmCaGGoDV2NheaZPRgM6r1uQMaZy4ZdmtDh9xRSNd5r76dZNL",
  "key24": "2zvq4mcm7rUzXX1pgth3YTapxAMK4URBhrWR8HyAAMWEFk5xauFPzt2UgRpFoLoDtxfjqJLH1rP6DmGxdAL7Z6rk",
  "key25": "2Bx29NyLSDzUjz7FTfZL6FaAoFWXmGndL7EFtgLFPbmXqhdPSiu7oAwwvzRzkfbHBYhyxz7iAfo4ywFR8cp9tEW",
  "key26": "3nEgRBN4qsRiynT4vpKPmfxwJb5P5we32ghYgLnRzJwEh1vUw2jW9dCn7iEKwV961M8kr7BPiVF5ES7kT4tavK5R",
  "key27": "4hZTZE9bZBVQBd28PMkNsPzRSRu1vVDodaNkYdhazFFPH9xwwbb1rUkTvqydoKoYWpuEALbugvHEpTzoUexB9G5r",
  "key28": "3v3D2zFEG7ShYtFZd7KUYyZT2xdZEeFAdn9JZRm9haMbKvLYDzQwwKcodcJPnCXDwEbh6BfdLxHzGuS8ASdsKCBr",
  "key29": "JaYhXob6S7527LKiKMyHjv6a9ZoHMWQCxZ6k8cCBbM4k5XDBL95Dyez771sJuTRrWaksEG8eYvb4jg6KmsbjeDM",
  "key30": "2VLoxLYSQvMQWbfXnacZgvkvij3rfTNPCKyryaHPVKgyLPJYqWd3dAbrdCkN9H6GUB1Z6nUvjv8XrPUth3k34sjW",
  "key31": "jcK1bQFaSCxd1j7HHzy5Kh6ojV5f7vY92rxc2RnDJcdj9eSnkhnMh8KuAgVe7CqAytCniD4EHfF7YVcH3mrFBX6",
  "key32": "2XBsHGPdhouvqXF6HRSg189kvttUwhecociprM1AjJDH6HAs96UsuPj9xLypRW84prB1b5evseapsSqeZ5h7gyTf",
  "key33": "66HAVGP3aaNQj9REovruFLnPzVJZfu3ns29VRuc4qnMY9jmZkAa8MPttkAFL5XiRegeH9RsamZr4R8eGyAXeLiqj",
  "key34": "8WotRuZfz7JbrEcJgncScGjSVgbjsS6Y5A6tBv3aj1GsuRihjFFd3BpVRHEBb59Y6QrcTiJPfwEyFm85T5UfX8u",
  "key35": "2ZQGSFy67QNYSk4Bqg8p5oDB34CEjF2Smaq92KMmYJrhC69VLYMJDCbF7KxF1dJJeA8tRzvVYCGFeVVvdHm7gerR",
  "key36": "25XAy6ghhyvA7zEJeGJT9AS9nVVoAd8qhaeDaVCT8cNfFNmnJ8r9qcRy9Xo5DjooRXEjTSMbw24x7zCHA4F8Dyop",
  "key37": "58Vz9T3ueULQ9FwgL8hKeuxLea9yUsysH1UnWvrdE5uH3um2rzQPdgCLFtVqHUuVFaSrLpJJyHuMzGicW86wGF98",
  "key38": "5pe2dr72KM9MXsspH4D8FYGHKLZrKrLS94vgAsPwYp9viQzxVNxhct2Rz8HPQYPe4Ktu3jRYWyKtxJN695117oaG",
  "key39": "5QYdAYUp6tyZC867DD2rckgNzLcB5VUAMRWHJYH7DosWdtp9Tp6qT4Qj9ho7vd4ATLpmmHAZmRyHj2NTHXo4Cb3u",
  "key40": "wHpPoHzshgRXWLQxSb637Lx4Yek2Et3in55wSUM4oBwsNJY59uVraxSPteXfqASa1Q5MSBGNjbXrUQ7ze4wJ1Xt",
  "key41": "2xZxpbUqC4P3HEUgGw3yn6CbbDYV8ZsTq2E79cyKwHixdx4A5Dx8VY61jzWE5QGLbNRQCbyVE5u6cmDd2FBaC68S",
  "key42": "5LxzQYBXK5gMXUAas88DsncV71fzDzCN8rj6D7ird6Rzvd5ZMoHVRFFR4RvgifyH7gf7kCaxQii6WLXAZ5L9k8RQ",
  "key43": "3aMQow3TJif9rAihB5Vq21mt3LpwLEMjEVvdREwCnYnpLix261SBeuXgjKwrhML9NdEr1D1j1hobxF7suHmquzGD",
  "key44": "2AALvL6XLqT9nEBPLzyr3TGWzAs8xKvocvFQWnYXrivtAuB1s3wUGoZ1PSrkiuuaMbSbLxDNDPMT4s3K129fnSKS",
  "key45": "gmbVjjTTtjbZjUjJQSqV5GRpZEABYRDYTX3ndU2KPM9bywYm3u5AAMg24DhLvbomQpuys16YEEJUA8gNtqEkkmB",
  "key46": "5j1RwFAskZAM8WxRxuWJmfaNWU8rdy9ubBLq55B5eJXt8R5WVENYB922GsNnibxnienBGBAaYiFBpUFsWUBCz1zt",
  "key47": "5amHdFNKHyL99pvYBYNtsy4XLPubyrKvsvSojk57oM27QjrGnrNoGhWGXkucb6Q9TufeQG9pyiUy1eJ2tyvwA4Eb"
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
