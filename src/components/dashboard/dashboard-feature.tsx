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
    "QcBAQrTukjo8YBjVjDGstQ8wquACJHoX3RXkE6bNCpwRYeAHbHPoKDpiBrXqe6zz5fKy3Nj3vtE5GPWEZyMhNh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i6inSPF4DTQ1ej16VCtW4FTRTSFKqNq9C5eSaxc4k3kAE8iEQPGgu7nUyCL1jbJMK883cW13P8TDd9D796pWB5r",
  "key1": "62WPVWnFn1Wo9xmASsJoo9mgp7rjGqFsvFr6BoNwuDp2XXUZ6fuaATRgJA8RLqV2pxH5z8ckfywYTxpDAsQX5Vtz",
  "key2": "4dAizPgWqjTPikpFQAUeX8ypvNG6fAzmf9aSrca28MSpDoMhr1GvyWjWXPJXPrAkCFX8wW8TfA3cmZjfANJVTDLn",
  "key3": "3gWKbFrTuzcoDnvnfL95afGPo7rnEN54Y1VXtPPsBFLkn4jgG1gdWNAMTMkrFoGceiKSPFSopu7eckL4f4tNPQ4X",
  "key4": "3ipTDH4oiB354gibcWTWrkfdo6rsAHzEoEPwQmmmej5VvSkGpH9dTvrWuWrhcDFq6L5ekZN8PNMv9xoKM3GMUJf6",
  "key5": "5owpciBvcD6A4vaCP1zz2mjctZiD57jF5ZUGKkeSRY8hBxVTtnLAv1CBNi3s9sWnFEsDMNa2poHyZa3fH1S3wmBw",
  "key6": "44GwgU5bqAyD3wKcgDANN1AiDDqyhZ4xUcEqBc3RZPK5nBkBytzes92SuJ785obqpaXAJy8YXEiizyfUhmqjqNuu",
  "key7": "3WRyGZDidv6p5ZkNiSYiaui5SFdrXjtHV2kSmVAxnSBZPyDTCAjW2TDttVQQmnD4yxd3UW9CAdLGq5wMhGBtxYgK",
  "key8": "49mS6svoQVf7JCbDe8sKzmWiF2vbhWr2ShRURRDeCjZcVnWvqGkVgDuMXpyNTPqKBfVq7uqApXfaRQDvJttfFBjn",
  "key9": "59gE8pHJAvW4Vsajj3YHCna91YdahRYufVxpYsB14hioaHp1onyaqengFnZKrdJNEFxpWDs1ExrGy7y6x7JY6EGw",
  "key10": "5DmsoXKWMEtscYScQBP25pTfeUpQmXUmqaHf3N2KmZMacPCAfgwtu4yJMaZcrVyYSbS4DWRZJpPHLAamuT5suCiY",
  "key11": "5PfdasAX3y599bJXtdM36CbeFq7s2frW2SBf4qNnXqCgG2vP8H2tPWQ1LztY5imjPm1z6QKJkXv95PK8e9FDMd7z",
  "key12": "3AM7A2T9HszdyqVErXY4SLwyrpG5am2tNUtdMxAo1y6sesQYLnqSQcjTaHU3jRewcUL2rhL6AKA9Q9LnhBo717XH",
  "key13": "2NGsznkM9dE3RDJEg6cGJyCBrKjrFmXJuVmtZAYXNQoLrBy4p9z7NBDuzpH76R5KjuwxUK6J6LpEktadzGwr1Xb9",
  "key14": "2raMTtunxiPqUEuQxg2b5TwwzPtNaX6KL8hK5UM5oJ6urYGj1mvJCQ7itSJSp7icrm9b9zXtASD3rMoa7nh38ACq",
  "key15": "v33SpDEdy25v4AtD6QxvZaUvGU8vjBhVjhnW8m28XkHLJbgu3GgMa4umz4PvJYKKEhaFnRfnnf3XuaB14dnjxTx",
  "key16": "4Vng6LZXuNVN8ZNW5ssghCq8esQ1xZdd7u7Ku6M9F4mmNdd21WHfNEQkhAhtWdzok3NvxpfyhHEfMmu3ebqXUKSV",
  "key17": "2U5UongpvMybnonjd3c3bmA5zmEMLMZbW8DhHxrRp6FfJd5kcDPMsiNXdbrUWxtM1SgYcCZcUC43g5um5fDBZWg2",
  "key18": "5W2tc7R1UskuJ3FbWVJSE8BpUN6XdyZpv8Z32HrZDCYFRyCAB6mzJnXcje7cPTxp7xtJm7ukrQPuNUnKUhTuLC6d",
  "key19": "2ypXS7HaZdYshwNWLuqsfhSyQmVbpBykvFFumCb7e3XPgnK5c7Yqtzz2XSJbzpNFYMX924pbcYe2vXaSwWz6bJgE",
  "key20": "3ZB2iwY8uvRhZnnyiee5eV36PkjQJxWPdqS1EUbHQjASdrDuzVsuE2CtY75C9xrvzKKXpmZd5DZ1BjxVtwHW7W46",
  "key21": "ZfzFmbDMXM1JqLBN6VGUEcoL5f6UV4unvo6cMBf54pPaXt27N1pVU43Yndt9rXGnsTrzqy5fyYG8wsrm8erb3CH",
  "key22": "E72GsPYaZyvctLKmPL9UDsJ1rMfNxFQWQJJE7b4gwWELikSjAFfBroHB6sPo3YTwqGHgi6nVBatmKjkKycDWi2b",
  "key23": "3iVD1atsCGKxEQTw484bbUgHQD1kikYXyuAENgujURuXxVPDUXEzEGiyY1Y5JR6u21zUXBAuHUYCQFJ8eCsmfnB3",
  "key24": "3YrU9CD7Q1QdCAmXRN1QHyPZW8n1pL83kwUNvDLazwVX3NgrBTD1NgjXdFv2p2d8qPKsPCu2XYjKaeBSu82cYc6p",
  "key25": "4wray2eCserAYJakbmgW7B2m4fmZ8VVAK43E6cLdnxoW8STpRDWxswMsZ2j3RQmXqRHbxKLZcECW6ptvr7NTX36g",
  "key26": "2fTF6d2UcaUnMbFZWspnFuDXsUim6rBTbE1ioP93Qu1ZvyLcEYhmRaZdMLzKjCU4xJuEAtwCaFhN5Jmgh24RDdCw",
  "key27": "662pUCiSdYFNDkqTAREpXNnR99QHffTKXbiibPxKDZBoNEfVVG8iL1D9Kq3qSmKHDt4qeyY7jdZBJT97VE5vRV6i",
  "key28": "5s81gVu2T9rSCvDy9fVQRCHaYVnNqo74yypFo124UXEFpUum2Sq7bLFpspcfcc6gboVSXNaQv5PLjsW5sV6fGttW",
  "key29": "3TFu8uDNeN6x8gxebU3c7JYfJBUrvauaKvD1UPvB2NWwGg6i38UGehiMrtxXeA77zJ91jGKS27RMh3UgxZaHcdZi",
  "key30": "2bx4JVYbfxgPozrkuW5VmKZd517gBADwkWBM3XZpmeu9tFSkBKiebikVF7k1Z6eZT1SyH75beeEb2bZ3Pxhbgk9d",
  "key31": "BFcw1ViT9sfoPNVUssQsA4VbqiZAvJePZiPftQaLJL3ZgfU7DkzCDP7wZ3QxJqXno4iHoyeXvBaHXowC1QU4Vth",
  "key32": "tsKdtCaqKcGgoqyyyakQSqxu136oanT9p2F9Xtx9zUgQPLuvhiUAqZQvSutzHmunREDacfjaQU3fajizZQrQNXa",
  "key33": "4nc5TUeNYV1fcXG7tyAP6XSbdCZD4FokvTzPCWqjpeF3pE6RqaHpPT2FyYY5j1mAPPJubyW6XRhaXNTV6MNVzseK",
  "key34": "2ydp1vnT1Jz5QuGtR54MUFvZkGBzxczGH8S53SZMuDfikNXiVWYPcjgDah1y6AvjAR8MM9mpp5bNixoPZACsHRx4",
  "key35": "2ChsHGNEsU6STn2TeNJqTUYUN95HpAgyZkeKu3apQZTVacLre4BNrxpj9gvQMiBJwJGbFq2ishGyfv6QtDG5Gu5U",
  "key36": "26Z7ipPMzUCmP9iBBxjCjmfBYaJ6SPdRTk16ADLRTATNED7i2XRvQgine5xrifh4pv5LLS6BsPzNXXMBRKkZyos1",
  "key37": "3UDQw3NPW17czvQM1m7wh8UY5mrd3rwRaqALBWti8iSyZebJE52e7ps82RXfiEdSWqpXqtxGNdS6XT8bQfoheBDe",
  "key38": "5yCcMCE5bbspHztAR1e2KbKZnSjZ7hHqy9k34Df5feuAZFckhUVtj3sCbAzgXkNf2neiTTe9HVEXXPRRHC4bD3eH",
  "key39": "4ZfJD35DvyfV5zSBTzcDd2TY4j2UrFjCUrtVPukDeR6AnBtcthzEofWdTtWHUWDRJ84gRKpwtSDDrzM2qXx9QVWb",
  "key40": "4wkaxLA1ujQQaqRKQPUV9cSjEaAvFYzy3C7g2pZk87wFNU3h8mdTm9FH2oeZ82HRNo6D4yEmGVG8arrcAQJUTA6x",
  "key41": "3STRofaojTrLk8TSaWa8X9NPmCNGCDwMEaQRw7bBNCVT3yby82Zk3FEe4CmheianGZcdPFfU9XRFQbMztEFRn7fu",
  "key42": "tziETmszjAW6xMpud6HoBM4zq5rH9kZ65gZf7uqXUwEgQ6LYTK2MD7V4EP62b71Px6bMB9an1a4DgjCHxASf2B4",
  "key43": "3oWDNjSP2aijkZsYCHCbFbY88icQeJCxFzX5aTku6HVKKxE6kSo19XoVhQXFuLLZFCSoC6HdYRbeyGrNo6TwUuK",
  "key44": "64rMxFzkoDyR7kZhnZBz2g1PeELWefy2h85jkjkjvvJnWvdbpE49tZvxkDrB8jyt56HhFCxF4TJvmYjkZ5TeWxK1",
  "key45": "392fAWDKFnmAupPtAVcHWeJDQDp1UJrsDdDSzXSr2f8H3T3NFZRV3a2TuXTSPSuGn66ihCE28q29XJufq4ogQWEb",
  "key46": "3bXTGZboFpig1vKeXeaK2rDXxfcnkuaSQTNFpVvTuGZ2pin1fxkDKB5BkykALsU1um53bwih43PUCyqSDpdpK1tE",
  "key47": "2deYzrXoS91iwkk8FcbAHxkuoosgnqZT8mXFxqnFNYif2UPapTveAKw8ZNfyhY8TJGM95vv9Kp1Crrg6vT29mbfU"
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
