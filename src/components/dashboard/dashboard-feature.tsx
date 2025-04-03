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
    "46uXRsQFBbBv87XXDeuT3CpakeM7BgP1Es8j2fmp5nNzuzEMa7UMiKeYvCEkmopbjAAHefik9vceF4Dc49jeupN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FDExoy4Af154BnwfHXtN3qdLSQ4cXfYNRirYV4VFgFt1EqWL5nCjxqvSzifRPS9sc9AQ43Rf3wmGmgMX8PfrpX4",
  "key1": "2kmLbV9uxM345YypfNsV5ep7QNrEhkAhyMdnqQZ3DDH9cC19JzKZEEgPsijHeTRbpW2Hbodptfr6quWWs5eaqbyd",
  "key2": "5BBj536GRt3X61pivb6QfR7efk11U3LpyG4h9XkpytmPNKUaKoNhEGQNyeRNdbijryfiueURZqkwdTHGUPr36jDH",
  "key3": "5XkSH6PTxzBa3CjzkuvQCnTpE7ga2DEvBNXH8gk1izw4uEV1qG5BQpJPQN6g5bRvBPZLsCayeoGh8Dmij16iCTTx",
  "key4": "4LuN79Rjhbead5und36ddV1e4YDmBRDR43ETbieDAaMeeWBjKjFryMix4ArzJwCWLQKBH6JPX2gTWQFm1ctgjy1A",
  "key5": "2H6nmiDtEVV4zS7b1thtJvTcaudcW1CxnknKBLuhHED5za1gAgAhpExwQHFcVGHxfbYQm3Hyju6PHtLr7LfnbwSo",
  "key6": "45yNad1VeF36k8AUUxAYDi4e8f2N32NmwxE5PFpKT6UaUtQiNYZ2fo2MKFtnig8anfEsrwwpLsuBAo3qWkgC184E",
  "key7": "633iL5yqedfkKmts6691xJ7MkcqsNFW2n534p4NrLR8F7a86rYga5es443EVhGrTW8cyEdE6SkT5xfVYZcTKdQTx",
  "key8": "V6n1jAnYn53LcK1mTYgXXb1DDwn6T3VpbphVZR3gGiDivUBDH16S5tLgs9dYeYQtgvZjM93REdFrAA9bN2b4tkk",
  "key9": "2UC2yhDePyiVeZp8RNLoBWaoiLovo4Vioo6tu7cHBs1KrMZ2Qqi7enMewMhBRTtizvxUpV6S3TNcfQdnjrkjFbXX",
  "key10": "34qbvMK6tfjXJ52cK4s3HTRaarPURsrcdwqd31NEsTrddBdZa5fBxpiufkPtBb1oGtbTC4EUm7QvbaZMpXPq61pK",
  "key11": "5j5m4TFtgb7fCWfTYTWnBxhEJREBLXbSD7AEmhcBynjwmJUrztw8Qbqj7vAfkcPpgrTgxPuYJczRRRKRnWvL8aQp",
  "key12": "5YLX4ax8kqHNzygSqZwahXEhR64RCuQh3xEJZi5Sgd2YMjuD1y4UauF5Mh2L6cphuue3WUuxtzEtfdm9DmWK3DVs",
  "key13": "5qMiSmqEH883dJSJ4T1GirCeRiEwDF5sG2MVsoQy1vuzD1CEJ5LiLDnMFdGLvLPie1qAsNzdnxprq1Bb4Hz2YxWD",
  "key14": "2moYEptbyPXs61iaQo7byRP5hXjcyHiw65yvr34JUDmcZVN3bAm6Dez9Ebwny34CGFF1NUqCqqMkb6v7ojKRBQiv",
  "key15": "5FF6MFG32TE8uSphhFGuHzruwiMMFpHbJAY2P2wGnufgvJBewyg7FgnGMkJDXTHd4F9cNeTJrhxiqJJRFnpf8DQE",
  "key16": "2i1W5yB5EtEsWJQ8EZprMGb8g5g6584V8FkK9sxxaZM95JHi1hWGWPq5nvi2wpjXQ1HEZF9yKXvCkUq8rDcfhZio",
  "key17": "3ekDdd4xkEjQ9TRqQvKL4U998ByuHwVoo42Kbc3UBDU4SFb4FYJMRWgo83pwMSJwv7B4rF9kYtQAhZJ2HVwSmTCk",
  "key18": "LpeehazSFRLwyLZcnkjz2UXKLKvNsapSKXmT6mJjBweEE7kJWrMJGqcRYEStvgnJTTxyMkAUT8xhsK72L7K5r2F",
  "key19": "4rj5BhLJN3qzxhNBvy1ZmgXLx7HbcsLiwmdQJCNvrNHHeeYFgnzNfMyXXJ8UcL1RZYvGptos2ezjsdrDdDykxqjU",
  "key20": "HTmP5EGMPqa5YJ1xyJXbSGhXgBTbDLjAGqKNLkmN6tHL5H9i2pTzAbvkXukfwUpMTkpC3mcY5rDKfnHmgxMHFNA",
  "key21": "4ZzKkcGd8bU1ETmhbiJcvsXQptiQ8aUrsAZYfAC9yfnjZKAfcPmbYpAMSU7soP1hD9CJno2tmiQAtv2mpjSygjnP",
  "key22": "3kVE3w4aeURVAycVvn1ZFCFbjktL9YSPESsJHTKbg1jGuf7qYv2LbkFfsEVFbUQsmNTxVuiEVToWRPkwXUhBFQsF",
  "key23": "36u2wnDCvG4HMADvAzJsW91V6h7tTXTbZXmopkpJPubuefdkm4UFHFwTejnKRqMvWHMXmMfNFVLmhPJFQKCn4eXx",
  "key24": "59VY3inyrTwznqALeLtToLH81Bz3KFaZrDho6MXWFgVEyPKMKP85Jsjyk1AeXfN4k7ko8xsjLcj674NLFD9UXVfF",
  "key25": "XPEvHDHoTMhEywoVwo13UXyVWEN85nHZDcyM6oidBdBVKidPXRHGZZ6LR8gwKMwJjQoMYPnKy6HeryuRQUuGriu",
  "key26": "4WjLP2mYwadA3JHxsFsKiNTn3F4pm8ve6HpCQXkppjbWpnvVGd5s5duTdSSXS4VjEqMPES6iukpZwUgxvwGSX3pY"
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
