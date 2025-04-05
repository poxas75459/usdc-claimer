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
    "3KH8MjXUTZ6doxvVLkp7rh5yjWZkiKLnCsvVvBButuwpcKYxdaJynuteuxXpbTb7H3LSJC6a9zEPLkRPRrbb65db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DBEC1DKxwCCe2au22kuNToZwPrEdmkcSFdBDy9Hb1vpXeP4VjpgCdhxddy1CKF3D63tjp8tL8XByK7xLgCd4cGz",
  "key1": "4pEqmQA99NQJbJd3HuWDT5xRUTB7eYuQug7onhcKB2ZATkwgER5T7vqVJxRJt9CHa3U3jRVCi7NavgsRbMsiKieR",
  "key2": "3jjn7QSKMpke3QPsr4wSdMYu2WnGkSFwPcvabigSfSDsbgNbvQxGsGRCHuerQZ4EkhwR2G9G7FMDg6hbmFGbKbxa",
  "key3": "3rH2f7wtc2uqZ7yo6qRDW3NgfryW9taHAhdo5cDNRkkkfPhuJNbGp3sqGTVN7fji2ekJiRPEXKTWFTTSMyfS4JoM",
  "key4": "5ktA98eykULP6iMAPFtFubnDLjdYtakBaeQudjKLU3XKA76sBCA53P3S5PpGRnpxBzCKkfTcQbcs9Pe517YzYUFT",
  "key5": "5htSWnxt7e6SQ1Lom7kCJf8MmyGiPT961bd5Bo9CJwiHeMqPRxcTn41dfVUgXXzLBfp9ju4RwhwYD4vFWjURsvjh",
  "key6": "7t8U5M8baqE8fgmmmZiZFrEF2idqfJfTp2b932J6RAb6Ejkju6ZmLQktdxrLnNrBuMNeqoo6JGVqGQxgcUbtweV",
  "key7": "LaVRtsNgp4SpZLFGwYofpPkurDyLAHXPen1ktfoSYwcycgoogekPB61RHMUc3B1Vwjx8TAx4X5vPU1Uisa9Xu3o",
  "key8": "3r6PVECxZPkJP6J86UqLBtf5ZiLHFu9T9qQkKqkck58akcjFkv83JqHCAZYyS4hGzFR79CsEUyNkgfPv2TxiHnQt",
  "key9": "3iNAM9kz64VcZXiGYCSZwcTeJgrCjHwJeVSUqkc8BsWRgn6tGgSeyfWym5s5kMUT8ykxYyiG7wn5AZUCq5KxksTz",
  "key10": "2RRyncTnoGYmfC1uLrfaqpaYYU1p58DthPWCUYcRKkaorWoLZYieunzDF7a2fGtUcWUKrAuuDfGjfEG9q5sPtiU4",
  "key11": "5XPncerqbiBV1YUg7Namxjt8T257mKSc1zpTGjG3wqzpSc5EV5JxJ2gB514gjz5Vquncoj2f7tuw97BsnR8mMFyR",
  "key12": "LpmGP28EHnbcvq5YyZNKNHMBqs9xqw5gLFvtKrUjZBtxN4VcB2mV4SF9b4KBEiaeDkM8NREV8sXndiUV8zyiuSp",
  "key13": "4VfgcsZHiU882hfe11oyTapUgL5xhDBtJgBYD8TUXJ4K7Xha3MjB6zshnf3R46yy3y75sBUXH4pa6Ryv9X38sSib",
  "key14": "HpRirTgFCrDqbWq8MgfvotBG8h1Ty1m8mEJnfU8Q3fbuzjAkxZf3gbeBjG6QvcZXciC43tpYu7acuHLd29HsySC",
  "key15": "5tqyG9dBdnbpZbPUxst25RnmjSn3GxCSwu6qsPyL3UgjEwyWZYFDJJDpprroRKqz8NsX9FiQmDwbz3D6HpoCZfez",
  "key16": "a2F7EQCqsbcA5jAFc5ctZzqrWUAhoEHb7HP5Lj3r5d3VNtbLUC3JBEShNnSLbFGGoo5VBEMqdFbvZxbBrGwhUtX",
  "key17": "3Koiy1YoyJrYfj4vPYqCrEkNBgVMdpm2ffxYvH68dGHdk7x9e25kd1wPxJxCEEsX714GXsEtjP9EPKnB1kQquKvG",
  "key18": "63xc3dVstuFuEWWtC43vkD37zPYuJ9A7dDT4FUTy1VKoJUF2AnMYPncoN3FZ7ZH9Xtb7nkdsQp1kdE9iuQTCWkMf",
  "key19": "2Yk3fqkSuurwKaUCsdKQHEB2LEgZZJG9BTbH974sbzfDh2vtdFGmT7BFUuR3FwM64JqcM1ndsgACBoGdka3oFnVk",
  "key20": "5ppjSKoLGVEdnXB9Ss2rUcs2fyXUihCQ1Pwmwr8Y9oLE52QdqhDtPBtruqqLnKnVpjwspkjT6dkt1pconWHNT4J9",
  "key21": "2pWsnXmoyiMhJ5YQ9nkCxpipvExPDhGgw58sprxYGaBMD3zrVW5kfqysYv6cwRrwcKFJfC95FRg8kyERfbLXzGG1",
  "key22": "2dCTKur3HZgRmatr2q4sBwLdeSEtAjdbQsLzTZLpms1oLDsftZXqkL9d8ExH8GKMG7Jcw1jypTk6sNyKv9FbWVXv",
  "key23": "5938FjQ6YGRYugagRegYGVmZvNm55BGxkW9wXnWmBoQLyc5WKjXvAASsavoBBtfNVDWvQuCcjjPuU4gVaXwLzcY6",
  "key24": "ieoSGeQxV7uSGCip1iUaijZLrHMzt6QUTUanjLSQCDqKBDezDX7U1qgQfUYP8eCubSMD8L5igkeKM2pefi8JaR5",
  "key25": "3o7q5ELyEkynoMm4SsYveWwGNDpzbh2VMYuqaLSv2LRrTSMNBJP9TJ6uY5QTkxUk8wGyB1X41TXF5m1NG6dS4LmU"
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
