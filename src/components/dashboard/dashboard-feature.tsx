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
    "5YUf2Pw61u1SnpDCG6qoEc6qyiEBdxgJrmp4bBRqa8w7Z8wtZNfu9PSpwBu86ncNvzLgSQTWR3STi4eXsanRAMLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YEZ69YtcVKT3oHUy7JVxTfeGfJxzoP7KvmPvtiyx7e1sX5u2dGAWHK3tyk8aYer9QKoTz5R6t2EcegB9QKBiLYU",
  "key1": "21d7CuUbKHtKVp3EYgrVHcqfp6Vn6sZ3HmTpMbpqhFw5EBtSoh88kvqDU1RAVvJpif8MZH7Rq3XZH59GYmWNkT3Y",
  "key2": "4DrMwy7UF1Ljf3koKmkeTJrm9RgeCi6R7BSQeTwp2rFeLtv9ZrBCwbCkgUkq5uc3Rb1fNENswTGNdyqxUnApeeN",
  "key3": "52s4Pfr6HySbqzrmVtE2wnfoZXmbnDquLGf4GRcu3hwYYZ7BaJMF78ZHzkT5uQV17G68cJFQyNH57gSnsW9Y3sUz",
  "key4": "4edaQEJjRrFhVcfRqcfVf6rQKTFeuUpKdR6LeGFy4fHiRpkWZvcJGYaC6C63a4MmMFTyVcqE3f7jtPEtpFeYvnQc",
  "key5": "3muojrnRGVihP66bDgi5GDJCp1Fn2WoA3dpFVazWffUcZEJeQY8tEodHMHTi53jRjYdwv1br68igCcZa5PNAxVip",
  "key6": "2VALE2zuEa3KWKCQdhjcvGYszS8JacGM1dGrmLdULdFMrMaPYbivUWTMgnr1z617ycCoRqqKZ3x2Mr8JReKjYu3o",
  "key7": "4EC5cWnvE5BAx8myeeWZMPkvtca9pXXBV8AsF3x85JJxZ1pFsRT52rEnhprS1ri3tX5Z58LbfPkHG6dLDs4VUvmL",
  "key8": "4TcY3Bi83Ak2XYe2vP8SKxQG6MVfRkEizMUyVsTa51fjjLPnyWNHJ24U3C4RimA8ATw21YkYhnZrkAcoyZXnnnDv",
  "key9": "thE6mJGwewG22CwiyaWdZPt5sXoZEA7Lb5uTHBspZ7CPueUqgBFSZJCTq88dc1mkzyCZcSYWADzjf2RkcXNhGMK",
  "key10": "3uZmifiiXCQU9WHnuZJE1NFmLSkNJxGi8GFbd56CNuNLiBuHhPz4faUYD16PfCbstUM2zJpKdonGgRNT2ovhnbJB",
  "key11": "3E2ie5KBs2wHzKJhwiAZy4dRyv1WoewKKsJUEAHyRKuKqqEz7VY33pK7WcYV82hS3TmMifTFRk3iaNW2Q4UnYW17",
  "key12": "2bgnLQtwuMB1cdFz6rxuLCWt49PfQRwc3SukU2AyoJBb67z8p1J4LEKdvEAVGFWNrR2yqFX1GvzcTDuXzbbPsVHa",
  "key13": "2WkgdwDL1CQ6sj7h46Cmk5RQBRvLUrMZyW1mBLGrbx76jF2cxLaib9iKbby2tr2iMnE6wg4Hk8gAKVpf1nqYUjUW",
  "key14": "4sDKdvvMoyk6sNLByRPAVJpZu3pRTu6cP7J2XNfS8dT7scfioNffuh1ZnKqFoxxHiH4Lf73mdJo1tdR9hKZXqT7g",
  "key15": "27AunuHS9zj685xhRxfsoBwrFANuXUBs9AeK6Xn12PBYahEhtD4b9WrsrDM8yKQRPMEoLyJfDeAPPL7Vwxi6aWxn",
  "key16": "2Db3cka5A51jRHsJDCKS9LRDBp4gJNN9QBNCmDm4SmYk1aPxwMnxTRHAH8vrmMpg5htCHu6Qzzv88s3EYLczesrz",
  "key17": "4Mt5bL4sQMa7cK6PwCLuS8STZVD4jUGMXuzRfhoR9eJfSD9Qfp117bBvx4RM89K5VHh1gtZrPGixEtaHLvEUk6Mf",
  "key18": "33jcjKztusEnGP1wX32gqTxbCcWdoLS7JP1AnyVTrVZBYZcfbng5R3Z7HRMCVQwtzcJwTkF8o36QaowMCjnBZUAp",
  "key19": "5Zg6NHpvfu7AKNcVfuSgqgQdHxD8wGUDJPiWdrpczzcEvBSGeEffbh2mgh161akwfWUu4Teb13ckwyWRaCBz8dW3",
  "key20": "5VdHLcodFpSNzdCBQco6wW8PcrBDcL84F9eB1pBgZ17aH5QzSJuTGxVQa5gcsY7XkRikpXvyQxsD3fnAYHVjKh5X",
  "key21": "8baApQcQCaZ1HQZPRpbgL21ei2y6iTQmuuXr1xKHRCHYS7LQsHJSPY2cdXAnRwJC4rv3GRSY8RzGD4RgAWubf18",
  "key22": "5csg54hnEb35acZoC4xb42PD6NMCygSDNNeC5yDa9PrEGwq64T1XDFDGhYcdZRVRFfTcXSZ6Wavx25owsjCw8Yb1",
  "key23": "5AozVATKXeLXt3ZwiULtJPtKsiUq2LAsbGw9zXwn2jTD5wvRkV2QAUhkEdiTfgYjGzCp5QqL59PaqrQG1xKggZuY",
  "key24": "3a3RtJTn5eBEauLmF4Hu473ogeRLsurjNF8HKK5gwSg2MZbuBeVZPAqjSiMWrWKaeWwGUF4PLVVcaTt6WkpyLK1V",
  "key25": "3pP4aVexjniJhXA2XGR46Hd6yYmXJJxBrr4cGLxLNcutfPvTsizq6CtmcQoEZ1fJvLSx3WYaqR8r3gKNkXK5pyEF",
  "key26": "2m11wkh4PyeCRTfVwA2egFmtJmCTstCypHDad5NCwKY9fVrhCHW7sGCFWT8LfxhMZ3oVsJUCg56BrtzQ37K9oT1H",
  "key27": "5kb6V9LfC63ig5vwsjYgJmwKfyhZgDrGYhnah3HyxJbSkxAGe7hoPKq6vWvctTaU1ZojS6wYTPUVVhPeadzvPJAf"
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
