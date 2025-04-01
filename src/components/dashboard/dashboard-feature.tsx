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
    "n7voc8rTTzDTSb8M9tFBLrZFwXRFaiVqFnzVJWNhz5Yc5oDfqzUuPUigH9phJCUUHEvBnRWUaUs5cXRKG9P65m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CnuLcgpnkaFUbPhfzsHFH5crh7qYe9FiegChCkNp472EjYxcaEzbnYBvxWEmXtkj56mZMLvLFEhMRSwF3Qdrd2b",
  "key1": "5Z1rcPAo3C47r46XGQCNtGmqPxRoFLPKnSJcbuTcc6fNvkgahEci4Prokb8YHL2xiVGzhD8ATDVxJbGmZ7BCYhr1",
  "key2": "5AdfL4jjkJNRcWWbFtCPUV7gQbpX1zTQdDUBw2y7eYhpYXwMAwC5DVsPSTfUE88Tvd7QXWAkWqrxqwEHJrgepvG7",
  "key3": "TXoMh7ifhzPSuYaA7RDUF1GwQT4A5fJW2PtMa5jcbDA8BZTBGhFqKGdpanvxEGxhLPP2NnTouqUm6czxcMNsseR",
  "key4": "66yaXaoH8t3kxDiBZzZTND94gNnUq2LS4f4CLr1DgSz19fMKtehBS6gdphTDunjqJHyvkq3pK3JMGTeC6pGg6iCR",
  "key5": "5Zf4emfVZRBsx8G8T8iupXZebnP66nZRVpBDP74fPwAV842CnAhF29nVP1PLdnm1ehgHfheD25MNpvQmxJouMpmN",
  "key6": "3BQKCWucrJgzNHnXiFyFR2DvzejmfszMLSaVtRcDdMzgSu1PHyhTHahjskBfQt5UUfeRVCduQkea82HbrpSqEYLR",
  "key7": "4nEqEuNcbFMqM5RNA4V1C5a9GyXJHkmzUo3qUbWsi1iAhmpJw1BM1jRE4XcWkLCVKdoWoV9rMww6gU75FEsbT59y",
  "key8": "3iKM2jp9Xnh8kuL6UCR6uv23WCgESsMJT4EFVQfS6XugPyNBLaafyZiEAhiSUBjFHnSKJQTL6YaJG2nAYFndBRyU",
  "key9": "3uy8yMas7GZfqqyw9zS3q7wSuy8nnakQPwsonryK8ZgYsAtnECBwSx9n1LeZhmTcnw2gv6ie2awbj4A1AjKMDycY",
  "key10": "5HqemekuL3JjtDGnkGubbS4xYRH5oDJnzLmHd87RgGLPKZC74VyKQfYuJYwg13g7Eqiho87vR63Lrvq5qyGdMire",
  "key11": "5cVearUHm33HytLnqohntoqWtL6fDkcub7jZAm2M2nKyv4Pfn5kfdoA8svgBbDrFn82Je4KjbKadvqnrsLHUTuUd",
  "key12": "218Jv3P1bB3EBAKt7ToNxQpFupRa31VKdJVdEmVB36cbiSpqJqkhnSiVTRFkMPtjbwrvY2bstAeVPDWV9h4XgnTG",
  "key13": "3f2vKwc3gjmots5u4YPjBLAfqvETAzuLGvNbD2hYFKthv6DkuHkBhsJnuFiubKT33uGG4GUCZh2sj54Z3Hg2Gor8",
  "key14": "2QgPytnK4SY6tcBoo4HA65MVVfn64bNLEj1u3kVbK2B2a7zZ8ozMg8fWDp86eSNnFGWBNYQe9paeZLzBBH4zN2Gx",
  "key15": "2Wk98Ad8PMgqR1aT4HSxE4YVBLs9zGvPfbxi1o8ByvndmNBhjyfjKHbhiUrg8aqJwJqQH5thZmUo18syFpmjDSw7",
  "key16": "4dRVJGPYBBuNk8K89m3XzPFQ3f9e1oBQFfjbKTGkAELUdwgucQS8xDssffTC5coMZWydRxYZ5dhfWSiLCat3Zv7T",
  "key17": "3bN9NWU6EmBp8A35BWeZxtW6qaWhFeTVa1xHcRQZRBjxMbRRzLdwSAhRFff86ffpqQr5iEAiwsF3p4Byvnzy4HQw",
  "key18": "3kBa2VjWC5vs7GARtv55Xym1QWZqPHzJ1sg3D4ij1R48r97RVCUJ17QDh6A97vayEfN5TH8NpEgtfs2NZdUpqW9B",
  "key19": "3EdP7UfDW9GzVTZtJuELXpW6d2nEeuKJ5NroDogfGNPDh5hAtBXG6CVLyUa42LxFj8QWErTFuu3YwZVMYDtNnQ3j",
  "key20": "4xjDJSPSZzbbaXNC9L1aV5RM9hKbzmkGiY4yjGEtPbYNvTV9LUyVKmEjeG7MMaT53scnhCsgXatZuZHt9UdhGkBx",
  "key21": "3xZvrwbyzAvT7BHuanV5nF9H1e8zn5yaUsmMm9eLies7t3Q2ve6S2XWHpasVDKtEYY5q7F5zyn19YvXG1XDC9RPL",
  "key22": "3FNBXSF5ySiUH1YAvkBfBR3ZPjsSbci3hMs9gMC4SPrmoiBEb3vVvBtHMyTK7stYFx5C6KMfN4NMbTHKgbJ2Mf61",
  "key23": "3AKvhPr7PVJZQiHB9eQdY9Hw2RhgnicEFad1Sd46sZgu8H2cwxdJWNRfmvyRhhyURB1JRwXkwf2G3rMWThTQPwbR",
  "key24": "4LV4xBeX3YhpybweQFS2JHrjGZLaXM6WdD8496AcV1AgLY24YSHavP6jgC8oVN57HodmJ2DEd67Mr4G1Dj7CMooM",
  "key25": "24aX4PEEDkB1XtmjPQaiVxTuYJBEMacsz7YDK8uwptXJZ4ugZBqi1xun2Vv49rrZWn6ZxWxBrBpWwjB2wYfxitLH",
  "key26": "4fAPpqmYS93HYHpxR1gCbh3hHvo67YQVCSZY3abAnV6X9zW3HS2vbPkQMMbYj9hYvVJthnERKj1VGGonKULSv57N",
  "key27": "TADZo3nnfEBenvciKYiH13NvWbVbwQvcP3JmMG6q1wxL3kLvbgRDnTdaUeX7jYhhv25r7oZgkt9PDnCybr5jfNT",
  "key28": "RzV2cJj5dmyYouK1pcBJNeN1tmr7BcAmt63qJvPdBbViW4WPHpocrHUUXoKtRiDbSYHrNjFYmaMqQssHzzAbMXa",
  "key29": "5cZRFi7eWny4anuvSbtSMJvUtPEopUq4kMLUEQCjXZVGY57bfbT3ggzrnosVDVXAMiSeV5sZwwYwvexBzXurH58z",
  "key30": "2oFvx1Bsw9NkB3jcmEXoHHyZwgLgvqYVQ3gnTt2Z98vqbio4ux4VBKFMeFPeyc5DQcLgRsk9FrZjZXyFwqCiVDcb",
  "key31": "2FS97oUajBxpPW8Vnrg899BEq3ZP9S6GVuEmpRNauqg5yf6tJ6qWUxtD9dTJbw5M5wz6Pf624TVvgQhnKYDEMmNa",
  "key32": "4X38bJnuXo1ie2h792GbYzueTSuh2XAghsft9esQfKYa46gM24g3qiM6EAvamAaP4SdZRcyC1eurMYcPpH6CAj2n",
  "key33": "47VuUMeCDbqs83PErbDtKuyqWBEXQuPmY5cvA7mfRwXGA9TA6xwvaXMzERuiiGsQXVvvP2ghC9KbLyqck5WBXefE",
  "key34": "i85ztp2B4pFYQ2JXGuq5UXVBroL2WovWfgxNP8MkaFMwMh8c897wemfUPNdJ4xaYZ1AG6d1siVDKpdffH5me7kR",
  "key35": "5WocFNkkTorzxGWEbzib9oaM9s9anUN6TiABdkHDKDbS5CnyLoQ3YMsYrK9qyy1bfsj82XX8iqgSu3LowQpozoSZ",
  "key36": "41vAJ5tTwzFdHZGzueb8BUJ3yxEzaverPUwaJtV3spQKDGQZ1EvdTtj4vofLMb9zQv7CcCU8zFJKcA4bWxAVCn3X",
  "key37": "5D6xsd6oMe3histxrMT7V14AihPnF2CzSH3XgPNF64v2X7CZmKhdev8D1EkrDXCUtH69ZFjrTDrAck4x5xz5Ee45",
  "key38": "2jxiXyURfwHtTwisfgm5ARhyK4NXB3Yc7BwrRkjBbemTPuGZFdDiDbShaJKsAxB5ZSJPBZfYYeenNQRuoduwvAcm",
  "key39": "5pim9D6Ax5cmcHFNMJZQ8oVMXed5XVDfLRisVbujeWkEhCqZHd2Zbt4SFGvoQ1M8s1bdBZvLGdbRugtJbuH5wznQ",
  "key40": "23qnK64YW7ZnsdsCpyBojAFZ222Q4t5yMiv89v41w2iLNHey9YGJPFBtTVtmf6r5qXy1Sb4fPPByLPg2WajSxDW7",
  "key41": "gobKDmjfQdNSXPi5gdFt7hTe5DhQBTuGSVscWfHMmWSpjLC2HMouJK3fTXAdBUyXtmu6GGqD5PZsSgfxi4W9onL",
  "key42": "5Tnef9Xb17tzeyZFH6B3HGfKEHKUBQujNjMeWwzwGXmPSv3n5M93AYbvLqMEKFFzCXJSioJTR2e7a2447A6vJ7x",
  "key43": "3eRMdodukCeMhnaVd6xkCP69NnJgWAR5WLqdW57GF1XJ4fsYiry9KukFceFf91VepgRC7PDYiTpFvkJCsTF4rxXD"
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
