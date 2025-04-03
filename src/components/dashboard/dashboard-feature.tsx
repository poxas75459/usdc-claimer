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
    "41FTuT4srtiqTcRfedfS2Witu4szNWH5rx5WBC4LA9tvKHe9ffyzvw2unMQSmt6U2TySqZaysheAczmMWiMPpyu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6e44WzT8j6DE3DCi9mgA8dMWPtsRCtQtmXmTbtH2Umda14YvkvgYvrJYLdcuPXJTTcaedoqZL55rs6BpjKceomH",
  "key1": "2aDJpF32atwy13WTQWpr7GgNA757xakdqXNgQ6S64sARwFAURr6m4sHKt872kbdpFKvtfwyXRng2wfdftYFfGrsS",
  "key2": "gvWbCRrcGyccsQbqukgTdsZ1PLJ73SoezzUzwHqNiYd4yeWsH5VfGwCdHkdRXqCh9Ybo8VRakk6GpSLF9EkYGjU",
  "key3": "4xfKPpvMFSSJ9Kxdpbrcyr7bCNzvEayo5qd3FKugrwZkKUGEeaHgWmuMqLTeyPNyHjr8ogeY9VmD9Khv9eZ4y5Z8",
  "key4": "2Hw6FiQTyuPhfg1nXmMr9YTXMwHt7tjg1sZZ3ukpyqn9k3out1neG99HYcznQinQADMZktkaAkrDPXHKMp2rATVm",
  "key5": "9MR1UyAU9QF797eqYLXC4cqdfVVi97pkZHnhNmjKRUKVJPH9oC4hiohpLL67XJwxhYWKcVztfbyBLmNsGDqKQYB",
  "key6": "541FGoaPfm5vafCvShH7NRDk9iRQRK7rwLVxc3WKGBt22vGXXn4EMkixs85FkgthbyPTmqbNisedd7jHgMN2XpGx",
  "key7": "36dMTfSx4Pvuu3jCHy67bfUxGkG34FCQdrU69DRyL7fwKXbyonv4RMb1BZ7eL5jLvr64jCWM1QPorA7BjdD3DygJ",
  "key8": "bFLzzo3ZP12CUvR7xdZAVQ3kHAoqohozwwsMBVMtZ5b6JaeLbNX2ffTBmSRVqrBUqQ9yQYc4TKE3mssvBtGKXNJ",
  "key9": "5bHjViku8rWfp6seL1w6Koz1ETSzWT7dL8NAQTcRuAqZQj3t1TK8KVigRy8uPN6xd3yj14N5zq6YxTvjDP47uhd5",
  "key10": "39nwL9GheLfHZhLvGsQj5tnxGUc91igr767rubD7byttVQtLN41LX8zmxXv1T5TLdqWZUyXzmML1Ej8pGh2chWHW",
  "key11": "Y8rScMrfmV7zjV3xVFbrHAgXiKzXibEcPMfdHtNXr1WQfRZsb1gsNGUyHYaPioA74QGsr5jtRkaC9PgLCN8WFRw",
  "key12": "4P8yeN7eMT3t8uTNKx1Rzx1cdLSPDogDrngVBLS6jWeUNKqCiDjpFGHkU2fM7hJu2XNzcRzQCvcpbRAPXHRCG1XY",
  "key13": "2QDuTq31SnfJEQwqDet863AXitbXfaJw6pcSXNT64QqHVVkhey3vC6rdJ5x18H6gZHLnkTBB7tbPvjyXT1ATi6YV",
  "key14": "2GcZiyKefmQG6tz5BDZTaJ4wyN8RqXE5QRHj515khxd1CEVCwcMSUWU2mDWpYhuBj4fKw2LHtiTBERZVecJjE91E",
  "key15": "2sWuR52y7Mvp22mPA9ALhqXeYG92VmGfo3LUp2nrH8PBDuFz91uAzsJQns1FUUYybDcMaEVArz4vnj4tAKYwHCx",
  "key16": "3WZQ7dRVhuF8nFCyLRA7nUv6pYxGq5eRTEH6LWXrDY5sF9q82yyPbfBVc5KqGZ72Efc9dWP6Gkx44jud1xqK3Rc3",
  "key17": "5H87uSzibd26Go5sXzRn6RgTGHH1s2iq5xoMxGstuL21bJ9beFozQCQA7yRZpWGT3Z28nBY1dB1YgyS5rR3n4S2",
  "key18": "a9uhmnzg8QuDcFv4USRPhmpJxpQQEGhs9mezihhXmTyLTSypMpXpb7t16kyGTEXbVxDcjAzv2RosZ9aM9kd28B9",
  "key19": "2rFfknvSXd4BHk56RX8PNkUSJnpcZ4jkwavV6N3kyVFm3CV3sSXd2MDKw55pzg7tChnzsQ8f3jB3vpkPK2hv6ZK1",
  "key20": "5Tqb9w4aJiTbRwEX3SDTH22hbSC43qngZbKRACvS93AGcYngLCXbrAACo9rX8di993i2DSPuhmMHbL8r1yVe1GzR",
  "key21": "3LUw3PVCCoPjuwzxNBoTAjYEjwWgdEZAUN6S22S4PgXDWY7vit6rXFJeUW6YGFU51wfXZQPN1Js8G4J7BAafM3py",
  "key22": "4PHBpuH9XEBrPRkUN1ZSGM5Cj7R5TvQYjTWrRkAzmjd1ehfkRWACgeDUCZRsYwazFfzTHiV7p4UMegN1kXdi1Pd7",
  "key23": "2qYwEV32iARmYdTnG6j7H7G6J7k9g8xb4LSppygZC1W8sVge2A4G5ZConZ2US93efDYEWiRuUi2be4yf2PibqaeU",
  "key24": "2HgQk6FL9QeUQWzRi53fJ5DShaDXQaRteznH9H2fQQJtcyZb27CQNQ489SmJUR6em7sQg38ghMVGLV5Z1HFmQ76b",
  "key25": "5BUbUzDWgzCTSkCD8CnA7WYz9Xo2FJymainZRFtZmojhPLbBja3qxJbCpK8T3ERtsY9PcBFLSChUJYUkaAKATZsj",
  "key26": "5rgs1gnZJ3WxVUpTxZtsu6h9cgLNeHCvwVxRZdW4iwjBNAu5RxpczNX8D6q1cKz4xFd3296avu7Ar5awjBdg5Wq2",
  "key27": "5FSdtbr13TAmi9DErAFmgUeaeFfoKspd8mZR4DXgmTukunNcjtcgDtQxX2Fk4X35xs6TppKHUWMaQBT85PCn7MLN",
  "key28": "3qVksYP8ttRffEH4LosCCh5H3AJmdHswkUvF34WXMNBykCBSPse288mVZgbuKjMdvzYT4EEGzMnpggWyUs5JsPqt",
  "key29": "5rXfGWvB9oBfU1GeNSmnzixRuUT6xZjgXWF14go1t1ucJ1NyN8AUKEmeNNHJmnpqzchXM3tGTrvju46U3A1opeoh",
  "key30": "5ZvPvx38ouchRitd6MJfJbcfvz8gPXx35eSyHu4xuvbBByUMW64kph79TSpLS7HQpvqZSo97wCAg2Zjsb6qNKZGA",
  "key31": "3apzCJJmdmJfTkMgpUvvNZaaQXWQehh15Vfdt6VBLDaa5zeEE1xP6hyDaLgzZ4PUUiQVSynDoYn6AvDHKyY9iXbk",
  "key32": "4M9JVokRxmrfsaL5WFsGyocZmzYRPh8Tx12ozRFwojerLVDhvgZUtEsTrp8u8PtER5JRd89nEj67jCoaxgVCMMRZ",
  "key33": "3b531A5nCsQAcUKuzW9Vi8d3rMpKwsrvPe7GpCg97f2QojFtw96sMRFzZx4h7zBbzLB4CRDdgwKRc6zJRBDqniag",
  "key34": "3t4f3zKuNhFHH7PVWMthw7Cv6dJTYuTBPNmLipACnmmMXBJQdW5kwbNE53PRLLNWrQXrxVvY3buCUn4tUaoFbV5p",
  "key35": "3MBVEfiBreQXutRLuVDdhdCy4BA3KPzYnqYtz2ksTEE1sYhtKAQHjtf3bZRmmPzjQgtRhujjEDaHXoLbvqcfEH4F",
  "key36": "3JmToujko1RQKDxUh93Zpf51Rt9UNxhgSAkiF1EEt96pjRt1ZToMABKoMq8B4k2dzw7smZq2PFQ2WiCgHS5ddANW",
  "key37": "52q3bZrAGibUbwyrmRd6rYrwbTnLM51a1jhogumbq9yfhB8uNTcrwySA8NoWVB8LUETTGjCD5b1JcSj3CVicYNt9",
  "key38": "5ZNechvihfhaxFE8h5LfR4son7aY9rcK16G8Ew6Jpr7bKXoZFui94HxQ68gxYpHGUoVUbHYWe7vh3zYo9iTr9Ctm",
  "key39": "bjvesqXvoquDjb8WREBfziPMBNQvB1M2FNqoPuPqdM7ieorpm9vSz59wDFJ1e33FhJL8ccttCMiHanP6FKfUvWV",
  "key40": "2UuwEc1Frxfbu5cMxcvvSiXK8FjZHLta923r8MaxcbmavebqKUNwLvdpfovU6eT3DZWJshh6dxDFG96Peq95sZ3Z"
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
