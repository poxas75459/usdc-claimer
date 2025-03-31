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
    "iCT27PwpiPpS3d9FPZSh22FBxF3uYZdVeTjGVajfRtTS2Vn45bmtHkA7SRKb25st3CY8yEQg9kfgnzT25UyBQDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54bz5WuJzH917XaXzf2BRfrijXfG3Rti3GEqNzqSD6YXWbt5p4R9z58VDiX9hmGtjoR1gr2ZBDvXybECDRoM4V5v",
  "key1": "4CG31X3QdGhdiTutyneCJVfrK2ZzzmNFPkt9rC76tRs7fWfudSxFLjNFT1kZgeg84o2AfrKoA7LhTnP9b7T7QKjD",
  "key2": "595Cm7DZZTz3CTKC56nepu2Qng3K3SHpTjBEmGXUC3jeHkDtY9bWW48poaz1ndYBzawH8sJ9FG98gEwuQtmBxdj9",
  "key3": "28VZwwzhm6dk3iLS6bpWdxfrs9E3UJTQBgRHRwwDYZyKJtjSii7dtSvLTXJwerrJxYSkzvXpUMCLKC3bjLEBFtVm",
  "key4": "rUBaXoBYC294jjZ95pnnKCtCKFZNueo8wrvUVjuVJxBfH2RC2bd3HnNomNfgUe7ybYogec2cW2dCtShZUgY3gkj",
  "key5": "2hHfaueAVJFScqvH2ewJ9P7146jmxQKtEgGai3omcUiP1F9RNbJcskn4Z2CxGjBrEi8ZvP4H9C3AJuoBqz1QrSWJ",
  "key6": "4s6BGR6j4NVzJD7mLegR7V349NvMQjJkkt8swKhW9fnTjC1CkkCcEhkkPXMh6HWTQWTLBskE7z4cEmmEDXaLx8ge",
  "key7": "611ZMKbFDcdLhyPxs6rtEqxzNjbwfcH3zwoDHZx451eh6settMD7FJmvwdzkrKmxQaQMszNs6d1jx1Bqh5FSinqW",
  "key8": "4JfLcdrp2XXTPj29b7Ey6jTvQ247uGG9UiEj3Da2A69oamu8cDPe5A13xj6LfCC2yEAzwkau6RPnGUYakSuDRBPk",
  "key9": "36GfGhdmQyQiAnsLHZbQPbgc7XnBYwYtR1gF6QVBB1fcJ8VzCL1WS6t91vDXuZtHAdwmoii1SvQuzyuGiWJjRrtr",
  "key10": "AmZJQxr1CxsuYGqZcxa7Bnq6aQuKqMBAek5AHudYnWSH1Z1E7tDFKS1vN3Smf7N18rMJxjTk8UUZUFbMSBirrrf",
  "key11": "4JsGDRD2BbDUokQCxdDzwp4uMQaohnjUUTjce668kpg8VoGbnfYyU5Ek7rxQhK7d3CwSEFFT5dU37pZkamU3M8ak",
  "key12": "3RCXehcuNxpELa2AohvZNiVVX3cjYyGZqJeAxYYrdo8dkE2hzwoGADVXD84hR4EtCX6T3Gq75vee6LUAzyuirBPc",
  "key13": "4bEpecmsdArK6ReNq1EvyFExcRSHcWuduo4GvpRU4F5hHkJtUNn6gn7qM3Ac9iTAvZ5hgrCG68fhvB1WF6PppMU9",
  "key14": "3n7RExK2kshNVcWsX88kBJV6ZJDHa1YPxUK3q5Zhf89NFUYFEkZMwp7SvVDYNV81Q3yLcJjxofaKwUedMKfNdk2E",
  "key15": "35CA92ZmE2Sccckko6XM1ofA5EJxgzuRCyaUFApBxnB8bnzaqsHbMk21CUZJLQMPQKVZ1qeReqHBp6tKjFayokCn",
  "key16": "5ttPNycjeXdf7oFmbZN8urfU76XJwCg8G4jQUCJXPoH6L8q1r2PHN7CWbCgndV1a99xWcFases9vqnKjLi5zcjxt",
  "key17": "5VkoSD3tYuzV5BmHM6v7eke6szTbvXdRLWdu46aHkxb2FmDAhN3C7fhu2z8oNyuo8FwefUyBK44oeqpavXR4GSfz",
  "key18": "2sZTdQHCDP9XM7ezq7LGFxrioRc4vgzMmjBFUJycAQid5aJ32fauy54TL4St56kpvAJQqftjfPcgc6qx6XmYLG6B",
  "key19": "4sGGN7yJHHfeqie2LMaSdXdVF8fDcgwTzhfr4TXMMoN5dnvLc4eNWQFhGjyct4Q8VeuhjrB88UZLSzHG6mGHugAB",
  "key20": "5E5PVfujmxzkVigG6vEe3MShuqpWb4a1bYy3WHXWvWrW3JqS8CmBxHFHwmLqqK5ZnMhKULLdkMLCe19zMxWwAc98",
  "key21": "66KUygaju9LpYvYYfJtUmj61Ehq3xDd5JeXN8AUgKft9wTbB1RUc35Nz1PR8kGffEq8TUmxN6GwubNEt2Bx9rmYx",
  "key22": "ZGSSVrbn84QyLY1ieVXdFt8xnemJfdRDph3E7zpQjBYeoHc3ZB3oCnDDr4pwDP7RT6rkkqmKR8Mec4qkDKS1EHa",
  "key23": "t6jm742gbVNzRHGyExvH49o4y17s3njyWjNCAwHFKYmxB9vbfG7WVtfRWHWV1BhiW7287iNQ1SgcMbHTvqBfEuz",
  "key24": "4QkLaafJGUJr21VQzb2bEarXBXaLEqBNhDjDZHMBM8Z6VbdffVSWswUs17TwTWchGHcnZ3xqQPCHhoUEgsx97mBC",
  "key25": "3LynCu4m71svTBC3j5yRPaMnUH9NmMnqFxaJGiAnzKL5VPDsu4LgHX6UE4rqNiAf3NuCLyNhZ6LiQRXVoWKFbWNR",
  "key26": "5ictmucLYBjRzFf4BzgKyMBGx6HPx5Hz6vQD6nLPwg8Q5wSvqwJaM2QiEA3HU9HwtbDTS7Y1foWWduxSBJwXRZdH",
  "key27": "RX5XWBemnV4N84fZzQx9xcgTRQtFrPReNiD1gk1h3pNoW3XdzbhMFN5MRtjdq3JAiuhRtKcATPrMHJA8QDS4kHQ",
  "key28": "3zTaXY5NJ32yC2J35YDi2nqveyrHNSWENDp25NSFJN4an1W1HNeS4PrUVoPinnMMF9zFfmeCNGxEkpQkhG2JeEPh",
  "key29": "4s1svtHdrEQZng5Bqs2X725hTJPSZtCDL3hXWTZVkMXbf7NjENzKoUJ8znb84J497DA8bZFPWdnwLuLiQ95x1Yse",
  "key30": "4GX9ABMDg6fEV5HCS2Mi6NV3QuEQU43K5L7upibkGLRtyV6epfZDXitXWkn5CscJUjR9WzD5wvSfFy3mSuEVwQU8",
  "key31": "rTn5S3ha6KDQzrvcvJCekbu92jrqSbY523ok9yjAnEbgf4X4nUVi4fzBcSgucEzHah7Jiz9p3Ww87RVAQNt9dcn",
  "key32": "5tpxv7wEupbRGRUE4dpUF7pE3khSjbtjvEUafhFHGT6WoapPPq3NvAGJhvHJegnKEmc4D3MsnUowyW9L9wHiK98T",
  "key33": "3bNopksiHtfASH9NJe6wTeXgWb1U7XDLp256XggKa9s9T2xFNeZSBDtJwctPr8MQQ2qa696oaGAzYedWEA1oV3kS",
  "key34": "5UJ7gxZJAoJcD2F9Q2JpQi47F81K2G82ExuskwhVnqENd9zWJSvrcmaFiDN8tdSPtEKnaQZsPV7y1wbAHLsSQeY2",
  "key35": "Z5Wq4brCFkSATtwNoydvzKJayEc52kawYkTq4zc6YeT9uN7fNoeFqjaxJbBsrQHAupV6WjrRmmqaGfg8wZt662U",
  "key36": "2GVoHXiESvjeMHwzsoDuU7MHGPqFJhwkZZN2RFD1LY892dgGM7v3QsFY9sc9SZohSSoK8tUH3wpy8pGuMsLCCGJh",
  "key37": "5jrJRTQvnGh8sb97x5yHCwVQnVQ6qyL6EuiXwBR78GHvJg1KxQygm9EzDtYf6UXjQfyJy4VQXe5AUZTPc2BiyEDz",
  "key38": "2FQGLdtFAYPDTfoX4PyCm7pEj469wNCoZCuEdvjesvVPyutbw5daXZ8KuZ8tDhqYpLtS9t1jrHNGv1CHvjbfNCZ3",
  "key39": "41qSYzZoJ9i86QPoSU8KY5HZC5Dng8mUPavGoR7F5Uo56h7TTqrX2F2NvB1qkPfKwmDHbSvirFFnAN19qmPAMtiu",
  "key40": "2A6EqPnSD5SfmfbS4MqxtxDMe5MsPSVD7Jj3onX1ghbGTKXan9o5VE66tJrYveR3FTBbeEuM7u7RnPLfM2qNyAsT",
  "key41": "rruPojSzpvo6HAjTf2opChoFtaX7fjncxxNoYg27cYwA5ceaXsSjhW1K1ek3VRRqPiLstrYYg3nvKPzt7ksw5jP",
  "key42": "f7q5Ku5bomoH4GY83Vj6AErx48jdXh4xhn8GJsXt11JbRxLP8FV3EDqHddTbmqELAt7ZUCN6qV6ftz5kPCyQSYM"
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
