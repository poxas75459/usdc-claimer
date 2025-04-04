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
    "3swcMyJGcBjimA59ZfEYUmX6ec4E5mNMVnebiFdXkDLJrgZC81hUteoFcJjpUrSvi1y6QqUppQJyyd7yp7J1PHiy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tnD5Jig4cowosnRCejTm4wNUGroJV3Nz8Hy2gU5JeYbsYgkk57hvgTxTWG9RhqzJQqV3jxZLncmEGQGskHxJVYh",
  "key1": "UuoomVyU3eLvEs6XFDh4X7DoRCJfZtuMbCbxnAjkQNagFb5fgMhTb4FTEdyJxPpAtenpA4tCceqUaPNK5xgPhCg",
  "key2": "4YXXezNFkHDrnyhdxvjkcz3K3qwPEbn4ECEt76jryGic5fW9ZnXKgyDUYHhyB5baETEvwfho8HG4HeTuBxjkQ8cM",
  "key3": "4ADBDnRMtyPDqb82BdeNMAJvvudKQoZqdbSNHhG1eH1P4MGEBqNAYzBgW4L9va9gS9bAYyVvZdrYDkwC55Jz4Zo",
  "key4": "5jUGQSySGaafmdsteUmvWAgUA6i2QPFQD7MJb9VVmay8TUAoRP8fDagrtWhmqCX8r4dS9n9NjZVzzjwhDwxDrDer",
  "key5": "To9Uph3CU2R34j9Gkq6tPXpRQJVDr8Rja87iPY8Py1wKRfG6GbPSLe7WBVivXeHseer1aJL6wBK3S1K1ZsEhruM",
  "key6": "kcDdYgawuj5UypFEGqmwbj1yT2jUQSmirUmPZZoQZuq13tuAnaTQX87bHmYUcKSTtfbCfmiXsCN1ScGwbhsWKyj",
  "key7": "5thfXFEiHQwdwFPz53dQpCM7WC2LjVno6UGuGXj1ELFieenUJdDxf8ZL7b4dKfsZG2a1M5516y9HfT4yQtDQBV8F",
  "key8": "3BtMNWDb3kJecTVk3LNM5as7qojhqgUqKAz3ftHvfL5NYnZzU2ENnd8d6A1ak4TKcUWtR5qZNsALTMgwGAew39d8",
  "key9": "4KzHiTGLGUeZKhpRk4yjD5pSwRUMHYEWDvHihrM3b2PnA4GQ8ALbT9tPHQ1acN8gTASvJpQZvKLwRMnpFSWVZq3P",
  "key10": "48C7cMp6e1ZZBCqoBnfRPmpQNRVCGQzLak32eWDWjD7HUJFQd6pKK4zVH4DYwERn2r35RDmZk7J56TtYoBxpQWcw",
  "key11": "46boFRsTnLarPZR8rNBMZdoFMkar1juASvJbuX47JgaKFYuXrsSpjMsspLcmxPCWg41mZZWH4Rmg3tB9NHYKiy62",
  "key12": "5mbwNe3j9P73cdj65RP4tpwLH8ejynn8KSU71rSxfkUBb43XQ2izLnBzLv8EkL9AEw46GzgEoYMVM9ug4jGXDwuV",
  "key13": "4EwqeEh8P6GuDuHChrX23bmqSmG6jBCTfNrE6Vb2vmx8HEmLMMcyhkBsc6HZw7perXhWHdr25MkYHYYc9asG9PkE",
  "key14": "4RHcM6AoBrVbnxnFfM5yMbnm3Mxchr5rtFX2hAUT44PArTiDUENb56zcWk2QjWNh4d5XfQY39u321gt7NMC2MGD9",
  "key15": "3SatdW2TUNmATCvR1ShiPnzRKbuK1YCn3MnfaNy9syHaPXKbVTZ5VZiwrfgLDPz5SZqMEqwQLfXLcpeMw5xjzZBa",
  "key16": "4awF9a2DrkSoCAHUpAM4JsFSt9e7rv2XzGd8Z4q4L9dwy7W6ivnzngvAvNM1A1hqi2V2QoF5YUnrATDq9haSzRVp",
  "key17": "3fUWvvsS6aW5UqgJ7ZmQ9o6Yg8GL4H4iRL4DyGejgapRmfycytEKHA19j1GxDG4VSYBoXDJJdWBKtR24dVTgsV2W",
  "key18": "2x83LAGqtGBodQSK4RYxe3xdrMKFAufrj2hdPdMXHqgz1TmnLU8vXRtoTfbipyCHfqYWEksa1TeVpzS3HUvLCB4Z",
  "key19": "3AV53TxGEwgw96mty3AcTx8KQs9Uj1KFJLybYauFxqJcrwjuJJTh5hZbAhFxjEuVE3jbVP4qsJUKjhKYuxQznSMu",
  "key20": "21Ta3nazyoQdnJ5zfY1CLud1wZYnRyHM8z3Ff1QZGSMDHyB6q87yy6mffyQB5u61ggUxc7nGynopfTdaAWz6wHUG",
  "key21": "QnZpcbHkGDrA8ZBcZpoLW5ccZWMNUaLKp2xkZSuzEQba7y6quuP3UYQmQ9sc4YTeZKY6dZ84G9ykD23SGdZnBh6",
  "key22": "3f6igZogKQy2RyCB5fgXpuJHNZySvMp2ndM4pUjSawjK1qPZWxKW9BtL3EEJ3GBZtjLr8BxnrBUJHNSNF3yQkiZ3",
  "key23": "2VtJG9V53szAecssaRYgjCJsi7qeuYxJKgWr8yfVgzuvjFSh5RzYSHK22NfMAw3bKYAS9bPWEw6LD7eyv88jJts5",
  "key24": "5QffcPpENVUMBpBYrjYFEhM53pHcbNvWaaujDramP5DeNfgqBFe7s9AsgmNJXhy4nxwENdvW5E99XKXqxXeEjobU",
  "key25": "5drv8fMroWTjP3dXM9cDMrkrdEMsanwwa7kEN88T3Bun2uREpSWQqTW5mtXYy248zZeRUHSb5bui5JpiVxNZMwJW",
  "key26": "4gKPGHB9peQQgi1b8PbCEy8hyssFxvNV2X8XgG7DiktpkFrhDurgAUW6NfvWcwKSeoFEB23tmdXf2ziLL5mX1aJb",
  "key27": "2aGavvPLCuxKDSkfVmbAJHt87bh48wND4MkDg515xnYGyTfuzYMLbamfHbGpv2dqbmPKTXE8C8Bgd977mGA1Lqet",
  "key28": "2aFiPWMTr7Uhtx94kNh1n2FogKSFSriuTVF7iDdxy4vHmwmLvyqreuoWDSwC38awnF9EVsELYwA1fKbxwkfMmoD2",
  "key29": "4SwaRUdBiy89ibCc4URLFLG85bHipawvnywYzTGBh2dQ4N2CPmhvFYPquGmkLnJtmit5ZsfctfsTMoPp5rvCq48w",
  "key30": "2v1fDmxxDtXv1ABcraKG5eEQ2JQqFEXsZm3WdicX3Y4v66zoLbtuZ2PGq19yGV297BoswcWDxDVyzunELKaZmkke",
  "key31": "2pbxT6Jy582sGGXZ666wrkwRGSXY8iRqCnU9uhFHvBbZGLhcQUYwNNTiwzcwZfAqkx823mtQU11owjGCGzG4atHJ",
  "key32": "2Mi2UPLLELL3cnG332zXNxbb54JPDaYduRbPqDR4ZoDNuG1WzmTMMcWxGZSeg7uo2RbeSEhJbde8SMRYQAB9SfjC",
  "key33": "644kvBpFhbnJaq48DgSNcTVZBVwE5Mv6FF8R4M3qhZFFb594xrZiYdBJsbjebceYxZ4V1yZEhCVH8h9rG1e5Lfsf",
  "key34": "5fdTiaCgZTWMDH7rAqSAL5QdTER182iTQHrYkmguYS2wy2T9ydEwGegMtbSK54BvyEp9LdovacwtuhVjpombombD",
  "key35": "66t1W8hW3ksfdSMLesB3xrnVknrrcsk8Jq4pELrJHd975tvqVxyuKFQx5my2LDtNjJxks7HFNoDWz6eV79km9q3p",
  "key36": "64LURRZ9vBx3oS94r1BMrQivetanUGJ15Zo1BPQDCfttk1K1h6e2ft9XkGxFkQDuwAFduZhyDAXTQF2no2tY5FDB",
  "key37": "2TvMqyJWz1PTeNfzdQ8QnQkt3h1zBNAMTEsEMNrBVeJGJW9Bpj3an9LZpUT2MNDkYiw9KKr4sKAADszjHDhrW8qn",
  "key38": "u1r6HMkVr9WA14ucppd5kpiV8Fnj51cckXU23FDJW1Tc7TVfcTP5hCmL5NYxMBweuSgkLDZSNJk5vVbmHzg7pXx",
  "key39": "2EmhFM2iZusKG7B3gKA5rmhvD287JDXrYBtnFdsxLbgE9RdbARSvdWKp5mGQpyXyoPt9a8KWSS5NXBAugdgFxH5e"
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
