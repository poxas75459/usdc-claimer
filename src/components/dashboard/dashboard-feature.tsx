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
    "WDefSsdbdn3v1CQMWzi1smeA2JMHrcNsbL3d5fGJ52RzgZ8RLVkEGk9ak5yPp783CCRiNDtshrqEa6eUM9GqNRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9gPrEFCrosRbdKKPPWUhRoPtkn5devU3ZdBC1DtBXdotP3zoWsJ2AYmAEYU1shZu9xJd31TqfZfwmx7mGF9nj2",
  "key1": "2iWt2xBMvJtZ2pBxMgAsvsRb9cdcbum56UfM4JdKa1uUtPd4sCeprrFoHC4LCDvYXDHdefJuZ4J7pnremJxNrh48",
  "key2": "3qcnB2LajrKx662uGgBBCNyKJCLMW1wZTe4jbx5CTAQRM4DJumCnb1eGdvvVngoaxwWiQZyeqFjRGkDFYBDPej1F",
  "key3": "5ZKmCgzUiA5dBoHEMkGZft8oogYBpCHtMCvwmEQnVqzjarLYnjRfSU88SdgKY8M6XrKZsVgKWTAcscrL42qEDXb5",
  "key4": "38msTm1MiuNHbEqqKNt4NwEt7q1wkB9AADHjrivDaPHmeTX5g6QMiBVcKtSJicLiwcbzr5GbP7ziG2BE2Qos9bii",
  "key5": "2ZoeVKBDYmWBUPeTRXuaWrn35YyLWDWqPgdYZnrrbPPn8MHP6RyoNf9xeau98ajwPP7WKmxVFdCWF1YTbSBoPLTU",
  "key6": "QB8oNTPtSJJTSqNdeYNN2NVMAfBYW5wAHKGxeoK4WWP4EiNHNtBGYPzyAH8m3oMtFE1Axsmh5Ch4NKDM7JkxCRT",
  "key7": "4dJNQAUe9mqApeXmTgVyTSrVTRPHJPdtvCCJHUukWjgix3gAU57whNRp7iGzvqxBC9CpvxZdmhhYgW4uUfSmKn3",
  "key8": "66DdwTtYSJZYSeGrvS9Qc18JsWZmMHbi6EZYDUXxhzi4yNZo37geK3ZzjHJqjYtZJEecRSp2ANPHgw4MSVrPUvkC",
  "key9": "4fvgJCiaSBDqnsLxb47vF644Rs4C3adMGticE7NaQFJ7u2Pb5aiBoYduxjjWfrVp3QxwYN6hhYPuwNpCaodW8DbJ",
  "key10": "4fouFQytegm356PAeXscdRWBBZ1rUGmYm7oEa4As87maAFf6VPEjbqRByUgxTL4WNowcmiHaXbjkdcdH5avBqhqH",
  "key11": "32KoZYaNax67AXZDqWGiifKuJ25wkXmjBw2e1chpoVDE4rEeM7mqVzuZnksivEQYopEMBC4ypexwJezVB1ZJ2hn9",
  "key12": "62mtfs7yTmUqSWX3K9d9Y5bfqND1NUgrSVAANucEMG6o6M2rsZBL1sNnKEYAUBMgVNGWWeCBzKuGARBqCYLuCvYF",
  "key13": "2k5A3EZiP3cWcTotAUtVhN1oCnLtDzTBRhC8d1oapMDLcfjx8R4mLWRdY9beNwVottbgPRJvgMTi6ssbPeXUKB3L",
  "key14": "57B8b1YxTE77p82KJgqkouCFT1F9Whw6hEa2rNfbDPoTp7DM5APfpfkTu7L1qpmbeJ1kSQDzphhEw7wyYvCAgqiT",
  "key15": "4fqWrDGiC6Lq6911HaBgvVwuygUg5aEKWibiFTAvA6q8WtmwMhpQZbW9Fx7ZxnvtMMPvado4JQe4xtRKv3ZPKSNb",
  "key16": "4tyePfs7t9SddfiEYCUtoo3m7Nr2a8y11ad652moKNCuErfodaa91ZnfjEwQG2Rafpwww9ggevmJ2kMWZmKVxQAm",
  "key17": "5m6YhdrBB8tHos7KXpueyFJiYWQ1h44U7Vr98rBAE3u3nABMbrf5AhEmpjg2uUk97zSggGyMLTsdtJArhLup7Hsd",
  "key18": "5vxkKPzEtn42PTccL7mTFQ49osKCc3YSuzcSHmrmRaTSvKYuJXWM6vrpdxyA9q94nQLxk9gmoZkuqbZcpm7TVPFD",
  "key19": "5KTpUu2yD4QuEaTMK9NcwWtdTHxhAR9rL5Qp7USSmHFjhU5pnSe8v3U7gpQEJPgih1jJj9AnJoCgaPrQdGxEyYhx",
  "key20": "4gWAf4Mid2Sva3qtF1DNEBssNdz92DB5bweFoh8H3ijz3JppoXao8Ei3RZ3vWjsrdWjKww4xGHf4yecC9SrmreTQ",
  "key21": "5KAbrowBkCNhq1KQuH55dpVhkAzFkQEQnoerXBZ3geYr5JuHcXDaQmXas4G59uzwFaYSgrZAseC78n6YHycuJZMf",
  "key22": "M4n4ByehsNS8UH7A8ZKrMRwzSyJiPXVVK3FwS3PwasyB1y7mkxuGLJxd7tfHyFquJja6UVjGmsUYoCvqULjCZuF",
  "key23": "2eLykcszK1uCjL1Ax4TadX2bjou4jzHUdsW914zngrsDkHieFuo8sretCyG7WJwpPDLBRKvL6aHqtGRgLfckTPXT",
  "key24": "5oKZWXrtJSFTy7ydjpUX9AxBwYVuAKnf7amAZ6gm51dFBHxdeRSN5gPmuSxizMjn4gedfesqvVVH2hyNhb8quZUk"
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
