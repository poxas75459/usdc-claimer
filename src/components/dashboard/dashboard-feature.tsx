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
    "pWoegCrp8QKuwR58Ya8Mjra7PPjjG13Sctmmay5n6Z12ccRKkSkDaibgBWX8tHXFqUyh728QJnkUREi7FhG8SvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rKpNJShe8y2y7fyBs2nM8a5FB8QTGjynGdG75c5RoxkCjawsHjHkvKiHXfCq6A6VjTYN8JuGX65AyAUKqNHKWr9",
  "key1": "4W3Y491MxNBJuMuNoNCCAp7uowhJ6g665oQfxsTYKgRVEh4AyPgNHZrSwybP2AVySTwXv3SJzGyLgpgviQtjsuHG",
  "key2": "28CLPgsBkFzeyFXXmWZMYmK953R7xwywQa2zpbxkRwiUNDLmqx4a1BFTi45QjqEJNpBpCDL5WqxbGxzacA2tNERG",
  "key3": "4e9r7QLrwvJGELrg5QTkYFdyxk3dN2h8gVDMrzzX93atMn2Wo43GP2iRKwHTKVGSGS1RmZ6t4eVA2LiZQFUxD6RS",
  "key4": "4grPiM8b5dvzQBoy4TEnrHsDbFKA8WScqKByQd7EJEb9ZG3gpSSrxLBuZJNZsE2qZeK7RoZc34B1awi9JbvmwD6x",
  "key5": "4BGQYBorKUNBiW5mKzxVUvwtNjSGggrLPUpWrC1WR4148M2zXAZmf4jLZqTuVpFWfxsdq1X3FvxcEoQGMrusBuae",
  "key6": "2p2sBGFq67jSvDoPxwD4WG3JKtjqHRZLvhW6ydoukJYuue8oGjy3dS9sGLoxqodjdEKS4FPEYSScnVgckGzFPbuz",
  "key7": "47BoRyBnpYLd2A9J187mkyRkAUhBTdqRhL2iNsfWCu6wugqD5h7MCc1tpGSfEqhqHXE9yFL4ktEfn4gbXDg74SAb",
  "key8": "tBYVEbaqzYXVCFyVfcXcWVh4Ya1M7imv8BJAS3KrqcP1Go7dnf5B6tG7QxYoKQ7cSYKWMor9N9c4d4f3LkbfqPc",
  "key9": "64cavKD3yRv25JcCBAB3nau6pJqpcL87STpzy1r3R9z3sewipFKMW1kUDUN1Z6uNzdrSbREJVemhzrp1R7oH2hby",
  "key10": "5kXWd9BQX8Zmgm5U6jnZ96Kra7RAYtT1dEZeCP2aYHaYh2hv9UaGp6y6g5HCR1XHrxCfTKeqePk4uw5vT9ZSsHWm",
  "key11": "3GXoChUaTugubjtJ1AthLPFJPabi3FGMkdUPgRwDenRo87EvkDyPsmJbdZZnPou3QxMMvoYdWjAtJ6srGkogQc2J",
  "key12": "5Nv25FAEFWAHFoEJxLDErbU6dFpLtu32zNv3LWtHkxDke6frez1kEwaUfJBg7i5xdVpbH6fqYMbw7NdiSGAq8TGS",
  "key13": "2yzm3DXctbcn4mQaQNqRoLE539ygUtL3qsGPpcBVXrV4MGEj541GB5pTQXAPy5URuRdL7aYtoxYJrqV5fVya6RAZ",
  "key14": "4FcS2t1mvRzNLe3jUdvPRayAXoByhhZTQTp8u4Dd66nJA2pBAmMZBwKhKvtZrJofL8Xsog1f6ZzBqdyYkN73v9a5",
  "key15": "3PmnAJSFFAGQvzq64SWNkYYgaAvJ1Yotok1vshfsxSfcLeHAA6PCVajH7GcAhvjTqbt5ii3bVC9ST9wQZph79yaA",
  "key16": "5WTDMzLGb3gqvVrkSfoqAN7rJ4UvuanGqXTbR2mR2X9ppE4pd7ab2g8zRHzzHmPAMGvpmEYEgKcCSqAZKWEYTJrc",
  "key17": "5zPyQaMKTdwPKrvJDMewtKQWkPQ2oo291aCPb4a29Hyn2atz3aUiUGxzcQuipnLbzQJPvJz3pSsoERXvJeHwusnP",
  "key18": "4wKKY2vgKP1Csp1cuYE2NvMtbv96vjbYa83M1yKezDtB41oxdKBZw6G1EUcMb9VGNg9dfF6Ws9i3QDSjQDpdGR7M",
  "key19": "4yKFAiVi259JCmoBQrkHA5iPFKij2g1Ga2JaVpyUpQ4Xf4TJ45XhDMAHL3Ve4w4aneGxHtfVudcPfa8zV9ctB9Us",
  "key20": "4WsYwokBUbpyrijHYHZNkP2pR5jqVLeHfLwyupZgLCv79J8cBXNcoCjNQhQvonVqBRAbPTNuUnFPpSkPZTGDiLf3",
  "key21": "ryx6mnTViwnnr4UB2PTavqpqnMtEh4kfFL1R1Hoj3FMSTMqBu83ynECacr4B73ZeCJvFk2uBz2uYthje4Nqvefx",
  "key22": "5bcQzCGHuEi6FqPohgh7cSZLKviPuV2Vhuy3mNXnRWavNTtxoYeLWagFUheeTrDZG47cwx9Nhf7X9Go93J6945Y5",
  "key23": "43zUvRR6hGA7spY7VKMTvdU1EjYTj4gmDPgtrQ3jT7SAe2w9V7iCrZQhoRivCQtQSK5xdknmRx6Yke8DvoCPMQxH",
  "key24": "4HEGvTS8zhhmTWxQq6KDHnykJ6zFBTXMN1nSiUWLYgN5vwdaBNUYj9XGaXSs9gwyod9qKsZXjJMkwDrqa3rTtzin",
  "key25": "4Awy3mX89bb87Vq8nn5dduw6ZiZeNoCGzQVuPKAjCw7pHcEa1r7nomgPR9cB9wd4b3BHmwrfsBgeeE88pwRdXind",
  "key26": "3h5TjcacXk4J81NMmD3MKAN3kN1nDaWmijeaXJpSWEthuoaem5yg6uass2bAncrsdLgRWFMVu14VGPXE1YKwGn5S"
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
