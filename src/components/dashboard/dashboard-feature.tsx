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
    "2meuugpVUk1EajzwvHBTJtnPDmhrJmrkWX8j6Xp1e982nSc5DHehxW7sdoMRrvTGmev9kRrEw1uUzzT81sXhgiG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PefbY7FjssQprqrqVeYj8bYN2sWm6K4n33JaFHF8pxVNyVdyjNPZb65n85RTb1bnBTcrYTisa7UsEv6HsJ46Jku",
  "key1": "355z9qtynEPzAiLwMPcCoB5Fw5p4xUqsJhHSDbNmjDwqSTxdQpjdSzPUVf1k5ov4J3RN1ex9Gze7VbcVhaoo5Jsh",
  "key2": "2c4Yp8QoeySZ6AKtdpjMgvFrwLcZub77TBZcYgB7gmKMKgpfzzS4ErvJzFbsVk4CYFcMjZwmQp2LaBfKp5ncf1a4",
  "key3": "3s7ZyGYsP7KxTZFcdUEKCNsLgYMHKuZ36BW8epGZ1w3gEQgp6MH5hek5jBUEP8cckkUBW7Gfthj3xBFUH2Vtv5dE",
  "key4": "3S5rWVvUYcRGmzq6qGdsJjFb7AFJKHdKUfLodMqCJ9csKM2WEjjTzAsnHgsnx9m85zN4fH3V54A5uzec5FZ2BhP4",
  "key5": "2BdoDrSFRSnc6w6qQmixwkffCFTue2BTViMcbdq2Nqg6D8txx89w3GDHc5Knuw4MERcSHxbgaVG3RdrK56i3FYpU",
  "key6": "we4K7vyWAtYM1d4u5Vx9EAbJTqo5ZkWodqt9F9g2jWbsZXuqfB9a3md8Wz1zL9hxTXgAbUGHnQ1ARpEPLw5tthE",
  "key7": "3zGvx2SG1wKAQPRTvFHtcQRydoB7pDuEA2Z6EUjvTHEvdQEAZCHEQ7dFArWPqN1qkUZuNEzpEaYKqjDmNsJi2gy4",
  "key8": "2RLhQMTupeLLCfHKQUaKmpCz7tqwbUZ7FenaDjhUvERUvRPRUvEd7qazh1iBLHZ82qzkRP1XtYNSdMpcjJeQvM5i",
  "key9": "5jY53bJ4bZF2G3bksbC94aVvPaauGkUgtcbSfn6nmsruRPpzDYDfUYes2wBYZro8aN3PwYep5v8U4X8b8WmZdz9i",
  "key10": "5t58HKtDXY9NVcDJ5FwpLtWwtE4TatS4Z1kGP4wnUXMi7pRCCovQRDzHEMARBkxN8YD2nsbVwTy51v2duw1WRH25",
  "key11": "4HHYo3yFGN74xWMNTopp6R8h9kbhQFcSZmAFrAGPu5rKBhSsDgDYHN6gidb7ymZ8o87KKfoh2DY4bLUdj8o51f1v",
  "key12": "2RwTQvPp1iZ7QCWdpbAzcmNvTbWz8dSSLetYgzcSvSgWYTqcQVNorD4hMm6BYncMVapbBW5Ehm2PhgeLURYcE7e8",
  "key13": "9mR7YQoxifseKncjXuFx7Y83VsuARQmAynEfLgC5aHLaX1SEZceSGgjzeC922AUsNM9VyqR6eBCw5eB3pUsqJs6",
  "key14": "3aUHFLhwUqiCnizWUoT8SRLEUBm396baPMvzENbGehta3yJK7NwUPZyT8vjscnsWaWihaGAZg6TzamMvmLWUn76y",
  "key15": "4d9hbMdSzfWYuU8TQsHrX5JR3BCPTzg6TNXCcVDsNWodfBpNLeN3nhyJMixnFvBS5xMMxavQrxS3KDkiWWprNm2Z",
  "key16": "kpdnW3U6NoyvdjibPqh23iFuZKhBC3Fry7cPb54d7KAWNjZrxas9D42vD22eZokMRPPqHcAmHSqyaCvus8Jxhpj",
  "key17": "24BfiBHGXSmBD4ev2yRL7b7wsTZjMuVd5T2a1k2kAL89VEj5zZD5uMTY3MipCR8qLwi8TY6cKgX55zaw1pYR2Lr5",
  "key18": "4c2Mdd67jGFMuTR9rcbnSv55HBDafKuw53Csi7VKUxZUbSjGQ21Qzgu4Dkg23LruSqL7FhYyCFMYAsgeRFNzeVbi",
  "key19": "2kxst9g1MyYFCQXsSnt1LesdA5jnewQ5sZU74bmhLTf5iz6QvW7L9MFiWWWoN52JxtwRntgCG6SJraK7HRhqv6ym",
  "key20": "5qQ9mBc5VFGQqvV8pRiW89ai12r6Z1iyJxRDw83MJ33mXqG3DLyGnprqyf8RsVa73iYKvRXSY6qcfBk7N7Md7r38",
  "key21": "3pFAiri4rBskaz1iKwmzHYYrNGLjPCmiBRzkTaCjSQivMLWKNAZu8LscSbpjvZHMyeB2eo9KfnY41PKc2MRpSH1M",
  "key22": "2vASb4XZM2EA3EtwQZqbw8HggPKNmQKbA1CUJNxhsBckFxXAPGKmvss7uoHrgbbHKbbr2Rp5u8DyDEL1nFvdhpMd",
  "key23": "3r7ovLPwkTG8ykYcJuHimXSdsmmk48MzDai2ZnkCBAKDUSaA526i7AJvBDXi87wFsEGCtpC9LTCD7k7mGAxUwcwb",
  "key24": "qfWheQbafmYwCEz6X8dSHd43a3TwKjo4WM5Zi6ab6vB95e4dDwKhGcmqBQUfDWngpT3HBtyUbPxER2fRinQaCCH",
  "key25": "3ubi3TGV9hURSehZLeGXsijsgRJJgzhB4Y7fM51ghn6RcpTtsgmZutiYkhqfDJLtScfWRSDeje4WS45LcHtyj1c6",
  "key26": "2CkCrteYYB4tiMSNNogayazr1PnJWcq9kEuxfeha9xfFQBTcubDy5PvTZ5sKhkQzHoqFJYDiyxUNnmDNrb2CQMUd",
  "key27": "v4Gfa3BcYCprpVVu4Tt7WTxCfDjSq1fP2VKFaU3a4pQJiAsrtrasqTSZKsdSbBTmT1U16nQSGJgLBhjuZXzvep7",
  "key28": "47Ns3RDj94Me6LfDfHbTiFFx36bwFGZRDBENKnUc6SDhxhGYrAU4nK4GovFWUUYF9b8Rc2dniDPYyJ1ohxF2QCzA",
  "key29": "LyLLMoxQvBX1nj1UyGxuUGcPLTBZwwgAnBBbXGLCXQWNGmJwdBEzGTWYHXxz8ZHB4u1oMEyEQEY9WSECY6tDYhZ",
  "key30": "5zY6CbD6whmzP7nYMo5KSFSx6MiMo8QDgMi8yqmRkniNQghoS1dwMTpgwGCstMvBgL1G6cM4eQKLBa35EPb1Rkap",
  "key31": "K2tfYAvhQuDhowFhBE5SquptrjN6XkZYhESrKC3V8nV5dHnKWpZU2xBC9tsLVq8zvMAo4ehnvip2d5ESHMsYhvN",
  "key32": "66ZHEW9tqJG4YGnhmkjbJQgiN8vsUgogXrWaZB9auXjUzE5A8p3mULTg2PjY5tAktdisAC6rSo4ne22Jo5cJpb4h",
  "key33": "2W3UgXwzUQyf5fUXGBYPtsoz2qbfwhZWp263QBHyFZNX97P4x7HbEYEEu7hHxhkxzooSAZPGxQ8sL6JpeZwvcYxj",
  "key34": "esRBqm4agfr4ktf3tRe193emUtPBpVPZZUfWmMg67ybPfSAc7D2EaGj9KUdm3fo3GmFFWLxKbVqegp932x6hrJU",
  "key35": "4vdpz2MPCbzELPsoQ5rXQ4UMsN1Uu578cbnrMrBQzaDGZE3aoyzQouQwTswZiockMktWNcakHVsCxFphPdHVDMf6",
  "key36": "3XfGsVPrjcnDFPqQdaLvKQt39GhTVJ957TYWbijD9mJ6eKCRViFrY13UwGq7WH6hCVFDi2EByu8mr3CSxi1xfEvu",
  "key37": "2gK1LDSURph3BF99zGLrPhfMmvsUnHjZjMXY6NtbFPYFvN7DHAwBzpybMGqvihizMVHGrooJTjo946CudwVhDgwU",
  "key38": "MtNo2jsCapn8S6fkmzt1BCHCuVM9tHYUbopLHf31fzkxaDDhzp25ZkSREeNvR7E2Ad5rYTsS5TpyRRYhvt1jRE6",
  "key39": "3y8PQJpoAenLdjcPqeV2rntpRo2hkRBqNuwdS1NV414KkAnAnWCR4sukN3s6CkfwAMk6ZFTLXJvVjhy2EpWbJDRx",
  "key40": "5otrBbFN4i6ehdL2U9wDnf2FszDSBMawytjj5rbXYPcvdZ3FUGxkzJt7mpe8ojQvKYzuzHNss92zRSRftu6264Pm",
  "key41": "4hauiahMBgJxCfZerP6v69mVtLRKJoQRG5eu9of4wYo1LPPsXmSKXuPjiCWo6cUqMuNKhHcFd6wMR7gNkcEFbYp6",
  "key42": "58EocHCLsYA42CvdfTEqxjfhskiyob2ZUDEfXVSwYeMLLNAkZjcgzMwWQFFmKPhurqSE2Sh6kQ4A5h5s5fipj2ki",
  "key43": "i2ETYwBZg6yqckZiai5ZhDJua3VmjVoCnYsrGR5WoDLqzXPoU9pg6VqhvKvusALgrqeukkz6SL7r35hMyBwzGsH",
  "key44": "2MszocjBbGW744ALjUNZhd3xv9N3PFAyRDF9HhcNqDmhV2KDsGRnRuYqHJkTqRs92mZfPHn5LEFJWkjSGQSKdjJ",
  "key45": "4vycx9QNK8T565tTgrt6KCenRGgmBxiXXJh8g4hUuCEqCSQ5P98YaujJaZnCtUSNsC58dsXJvUpQPMrxxLgcux5G",
  "key46": "2uv15yG7usCfys8dQguUJJCrUu5ZpDxsovXSd2KdMQ4pKaHB2rnebyCNd8SMkqkpi7TaXwAKQRHFdQ4y4YaEKAhq",
  "key47": "3GKXgJE61JxB4pn43LivtYWTFCRSRuou1NKRqc24KGAfX9KFkfTuuiKdSDfnhdVir1EXCgXvYYTPxkoLwnFpkiAn",
  "key48": "5nGCfq7H9Sb4GHd5YwDePJrFr88Tj45BMChDPTNPfahFAs6SMn1DNMgSoE3yihHQpb8NwYsauGMGZ1q5r5AL6iCC"
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
