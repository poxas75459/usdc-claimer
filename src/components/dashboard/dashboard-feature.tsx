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
    "5DYWA9WjqSP1DugVLiSGAnQWw1PkG6PDkpKjFtYhdcz6cCfgRVJniFLFy8HujwgD9e78i2MXFfrSUuezAqfu62DG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uidSYK6gzvrTM8gk457pZFPAbn7Bjo6XVhMTnkdAdwBKi6DsYUVg3uLTm9eytkWzfmB8n1ssrFa1dnePEY8War6",
  "key1": "EdYzr6w4eLYMvcDXoLSajgxDK52vNrMkArzep13SB3CZmEnVVSY7YEyPvJT7nX7X411DknYkRmckU2H3NM6NeXx",
  "key2": "5Pi9HP9Knebry2bMYQnV5Ufz132tPifgbnPNgXELtjdDppq95g5gtgKd37bcbmYdpzCeVeCRyvKTv5PBfVvxdix",
  "key3": "5Ho19foYaWb1TPNKkwHcSYx4zmwHSyT65ovfXuCzNZXrebV1LKGB9Xv4duXksZFjRGjfoEphuLbyMUAgeU1ZofvR",
  "key4": "5tAMAPuFsbeGzTzFNu7bPjr14Kch4FDA9mAPiS7SgXZKvsjuxgkCHwjqmAVjGcPWGPQWjDr2NjttHkFV8PYxhoqs",
  "key5": "3XKc8D7TKy9cznW6aSGTfArvmCrhJv86PSPDcy4SrLm6KXtiYbj5MfVKrZSqbXqBX8M6hxTcqz4yZCJKPG6NG1Me",
  "key6": "4PqLzDT39r6rFxc6YYRxwZ2XkDtWL97mqUiEadSQgQy4BZT86XibcTNmPX6rNnGXZyAPiPqQXGPmMHP96Hwjb8ev",
  "key7": "4Bp8DoCAcAHLSh6j69ZCQ5cCXUS3o2joL39yA62XepMt5e6VzhF3GRiLyPRVUtjfJCwJT44WAGmN3uGbZ6Q9hhDW",
  "key8": "4nNTkmmm4szkqxTxvWm689z9XSf9GYwbMHG3qu3ZttjENioEp9zFVvKo3Q9VwS8qwMsygqUx6gUSYtonHH3FQLpH",
  "key9": "5RCgyCPByPZ8952GGUT1nPR1sikfByQGMp6v59ZpsENDsyPpEcj9RWs6EE4JEPQUkR1bb1cMynUQT9QNtR4uFF39",
  "key10": "2PTpZzhzwM8VzFzzXUaApNPHjHU3Nf7B33YkeQbx97wRDkwrtfWEYEoDf3AmYcBLiZ97XunWcJGewziMP6C622qR",
  "key11": "46yyZhxieEQNb5BQBbky8zELHMZfY5c7aWZxg3oie8DsYoESMUAXJ8ZpfKn8F49YvdiBmDboEAudH8yE3ot7pq5L",
  "key12": "58n7okzh4ggE9ppUGPdXm75LdrPREnLyY6763caPwWH3ogLVcoRrEKuZ1wWCDo4oioPyyNyacKDbouqh6QLQpr5q",
  "key13": "4Rb8ENDztfdVgwLx7VDT1pF2oexWeBUa9Z5DQQFhnAVjB3BB688D8TSBpzAniZDAtN7oMHHmFMGNuBToWKMPG6yW",
  "key14": "2knUTeKRCnHCMwaXzdMWL7iqgrLi4C92uurCWCSsiT5r9u1adKLpQZDsMqepn8TfWe7PWxoubVYq4tbMtecvaHQg",
  "key15": "2KVVRLR3RwgJmgCJjNQjzrJcpwWb91FaVuESMZPVbE5od2ux8oJceEiwZfe7E7Z7MTDXkwNEXLRLFsjg9W1AFr8e",
  "key16": "5araFA115v2GSwBKMdhW3GforS3MpJn8TrPsgvN678ueyMXothiEv8Vo3qnejRUYgqzTHUDvSGCUshRnsw8ehZ2N",
  "key17": "4bxUnb4RoLMRtJncgfn8AUXMEeTM1J1kGsD31vnTQKZFarAycabywGXL4SmDEz9vi6sfnax8BZD1arr7nh81y6W1",
  "key18": "2Lx9jdw8bngxVyV9iokA48eeFRgAAgrjk5Y2nHk911u88CHf1zGh5D4TGYs1nK7L9ZKSfYQ53ZhwKpdTYaA3e5Te",
  "key19": "2Uw6ubsHurBjbVGBs9rTEz3zeusHs67zEn75e8TNZLCYnwWUXaqdedZ4h6Bafqw6uEg8AwUdGb3B4uT58rkd7KpM",
  "key20": "43giBYA6WW7WrdFC3b5YjPmDXgGmVKA8BB1FdBdpFsBE26itnuAyMzM3M35Zh2zc4HdwJUNjDbXLa31PSBqYjXKe",
  "key21": "28W8XmxNn6pPMt6ry8oqa5TB2vD4bith3QMub7enHVteamY1Ya7vR6fenQ4ZsbfBFaFzjpChD89cZCZru9jJsCFt",
  "key22": "NhFaiio13Kc3JcjVEBzeuPxvsyEW8zMfZ9UX4FbBAEV5QGvBftAeRZBNHNMryG9djsoEThToHXua4cpu5E2Bbto",
  "key23": "3d4J1oowRQBfCSat9Z9WxBakh1aiXLjPt4mV7Bfq4yoVw6639seVXNMSJPYj8hoWdhHHsNt6gYaAjfWdJYrS74En",
  "key24": "46fAkwoVqpBQtQgTciojdosneKUcmYdRGfdsuDbBczBYWqtSr46Ma59pxDnLHRgdaRz5ixZqzoA91YDTZUfYjak2",
  "key25": "5vYM4zRGaB4pwRpy4u9JvAsy9fDcznd6FHALnVTfvTKd2VQrfG9cX3xA6MxLofRuJtcm23zABmMm2Sou4uF2A5Hy",
  "key26": "3eE2piyQuj4mns1aAZXas9whUEbFStJZhdsYGeA9r5XTZzX4nTTgHgbcKaZFzBMYmfFA41aCFsDBxtxW3v9PKprW",
  "key27": "tGBBJTk6B56xwu2nG3qh32djwAH16eAxZHed3LKBT6GiXX9k5CknFBWjkWZ5oE8DWsFYsrvxGUzhH2JPNvjDPP1",
  "key28": "54qH4NZr3zR1EpfG8zsG3Z7g7fRZfG1AKuQDUth6g1wNsUXygf7SR7xx8vqozXKq8Nr3ndNGGy5iWhmLTdyCUQHS",
  "key29": "3C7k1o6uidxZheJL8QtZj6gwXDWoQ3bnfEi83RKpmHR4Jt6Wbd4t5CygGATMU4b6dUDfqMGj2FjxDw7VpM4TJWjX",
  "key30": "384Tyf12TuEaAjW8z5NzpeLwoDU5wgn9smNFy6NPQe6x7Y341NVdy7GuCa3aVhj9pAgiub88rZxj9pEX5shJ1XW",
  "key31": "3ZZPJq1zZxT89GiaEVXv4N5S7Sbg8vpFYWjrvxCGFPt4DNVAXHM8TY5rfpBEykJWr12yqfU1VAebS36aciXmou17",
  "key32": "4QgSMv53amLu6fLTyacqn9kBCWuPJ8RvZxqJHx1FXnqkCgbZfUnztPaQY5n6LR2Vo5ZnFtPs8fsqnzb93AAHfwxG",
  "key33": "3mjD99SSk7ep1cHo5vok4sGXyZsT7wUgi6NckmTB5AbauRYPryDCXxQ68jPFeBfWZ2rJPpCgDjtfeLdjZBeW6zGd"
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
