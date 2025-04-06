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
    "HpUkfVk1RKZ1qDc2Xup7nthQHtC9sDVLkhgpi9tJEBmJvbeGtkZdH6k5ffjzt2Xqg3mnhAR3TaHrcEai3gzwjdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P87sPYiPqnm7NDK1EgrGUjNzm3u2Ch2YEESBqit4eroo7b4zbHaxY9TWZCLkn2QU8QoSUtXhmLevTABfYaWVKLQ",
  "key1": "41W1yKioWceaZAQ82m5r2s795rVFAXFmW3bKBVw1R5T2DxdA4ic1MxXCWm7JLfszLB7fC8hmFRAgoAtYNN2Epdyj",
  "key2": "GdSpHGxAX5EJorxjCw98Pc3bRdr1oQGJeHWYLHubpky5a22cKgNB7iJbevu6gwX7j1VdzSAdGsL1jKdGTq893Ju",
  "key3": "2pxFSzKE52gtqmXnpEiRUmecU4rNauEW9i6YbWzGHXUaukqACY1FXR1dRFrwJNKb8AtJMrSsHuyRH8QVJKpF8o3r",
  "key4": "5GgxCaJjN4iRytvyvfzvJHXKvRr9b8dtcgQkURBEEorqs34ESSQAcV4YuCDesbgSM4pTUu2HXT5axgidW2wnLBuG",
  "key5": "4eM5zkrWnvV2xVZpJWGLuARTFieeNepp7HhvtxPcZRoRhHRSsT8ErJhZfqRoxKqUH2FdHkn1bjJGSGBL94PmZ7sC",
  "key6": "3Wzrvza6YD3BTCr6Q5vc4FXbukhYMBn55SitH2f5oLgDdh3frdDNNehWXiZaZ48CTPpCUd7vtwfDKXSVC8Ho1jHc",
  "key7": "5e9yLxKxZHoJu5in7dDSXmiynf24JMAuNwDKQUMVkLHGtaTU6zK32Qmh9HbjtSwHzeB6qqb9Yfq8NrfMihuYFy1U",
  "key8": "2zPh8EVVTaa6RDXikAYLGzcBvJ1oHkmreC9vneWeCroBEqWCpLVn3YmYb1nU7esSRyzGfAUnELDcgVYpiKKwgVR3",
  "key9": "4zkFkEbZKjYArJ1QpVqwt7NMfsAM9Y1z8DuM2xevdkdRQ2KDCxH5wd2tbPexo9p22QBvGvLHt16LmNfHUVpJ885h",
  "key10": "4BBnXXJdk6qi84b8XF2oNU1ftEL5LPmXNFdsbtLTp1c8w6EdVSfSj9zXxmAcjucpniRpcK66jDc3KKGpKPTtaJLp",
  "key11": "4pKpzu58wFhBDzFxfX2VPvmfj2z6zmFJ9ifjQr4XdKWRvSpmUBaB5q2Pkm2y2U8GoGgTu1iuFKAHutpMV32aKEUo",
  "key12": "2vAbBMtB5o1GQP6thzHmzhpt7ZWjtLXk4haJSqTukx8ou2jYu95tbtHLqfB2PbaCs7VoasQ8cfbie5ea5JsXpBqX",
  "key13": "5t596Rhmaaxqwp2sGFwRjcsT3f9qCrai9f6J14fPfHDdpydHB3HibXZL4nKdHAmmWpsTGEUSnMBYZ5gqXCcCL1x2",
  "key14": "5b75i5kcdyKpxut1ikBdtNcgf3A3mHcZKtgdKxAjVBKbgsHrP6p8TjHaXHikj5hKgaoeh5ScKLaUyx9G12NxQrGC",
  "key15": "592fkRWv1zXEBNbrDDsYDvk1PzkMcL1tJq9zGTvmLX5F1XoZUM6h1LGZGDLDkw3A8TRJhE9jw4dfppxd6daNBiGb",
  "key16": "4n2zfpZb4mao3KBM3aT2E8kDQAF1iNPMjqm7XNFa4L99ezLU4G57CDLpcyA8nbigk4rNbQYbc9UDP8Bg57TxAUa7",
  "key17": "65Vo3Sjcu8oFmD3vwtAcQe1ttbt2Hr8avw841ctkFX6tobJvs6dNz7cmV5yrTxf8e9PdhrKCi6Hv5pLfqXdz9N6L",
  "key18": "4Lgzb4h2VhVtNXVU8JDY6s9fGmDTYFs5cS2MZ7Uz3yiqkSAyqSMSUQNX6xFbR1e6a4KxWhrBMiHRKRXeLLPMjASY",
  "key19": "4sSZCoY5A7EKQr5EdoZx1ghB7yEdtX5t6Jz3SDhzDSkN7sCFReYPMaEGWrNUBYy3838uuncawv2AqPYH8xu4DdU6",
  "key20": "3zyEMTtQC8bauC4aMi1kSLSBWLPydfCjgphdNkSAhpnJw77cMAYGPBUW6vRxPpJ5RDKLJKBjPu5BwLzkKVK6hDra",
  "key21": "2Vk24KPVECPxcdoaMR9dv8V1gZjhZQny7vM1xwcEXm4UGFEnYKcpbqMEPpV7ryDbWTmhR4oCmRfQDDTurzsKgGj4",
  "key22": "3XH1U5jQPGz7SwtsgdtGd6347bz1mxjd6AVoZFkQsvHpyKL2ixK8x6Ge1LF28MEnqwSmtPoBXUbXbGbYCXMBNdQM",
  "key23": "2RHrYLVtvDF2iywaYnbeGb4Z5WhE61CQ2rJiEYezUhgUidxCdjXf3M6nNCb8KxF5XSo1H123FD7Cxpw4qzYJsesU",
  "key24": "3iU8qFXE3sn9mTtF9Uk8QFxwGbE8XrgAGGqUUC7PAwCXEHembCj35eReqXtubsjEiTRHSFk3gqo14RtTjxbTSY3F",
  "key25": "pv8LzV1UWyULPqp1m4gPJArSBnEKzgMB1EUCgCPoCbNp3wKJJGJxrsy7bi1XGEGMSFqQnSygJjB7VK6aSUPbJPy",
  "key26": "5cSUSa4xNqHqxxthPQA1i3LtacWs9Q4L5KRphFYkgdPMEAF95VNhjWivJHSz1XArTvRQToeHm4Bg325n5xcSxTBz",
  "key27": "3L8zwBqKFgNhZXB1AgyEjwC6gzHXLPZ92D1RiAKZqJrioiNLGx8jpj9FtoPgtNhq6GxVCadmKXtU8a8iBS5wUCgB",
  "key28": "2gcrc9Js7RhuUKWKSvoJNowbBfyC5QTFAnFstyPPEaahbxQMADiGmHof14JxYQPhY1xXDZRjKAp2Zjy7juUiRG2P",
  "key29": "3gHVuXGxhwaob6Uya3JZAM3s5dFRJA9eXkNB3KZdvZPtxQkD6GA8maPW36WNAxchXoQvMzah2fsKofDnE46KNRDL",
  "key30": "57T526AzE4QD9Ur5zjCuLUp1G7jV3CYzrh6vG8TEjN7kAnXMDBUcNK2xncgAjJe6xLzpRzuBG4qTFbBTrWLpzzLg",
  "key31": "2exJ6KU2nkNuBRms7HK9FvQxwYvCxQgQrczSWUMv33t8L9mGuzN9pZ1sXajrWn5u34XZT3mwAdDs3TTj47DfgHY3",
  "key32": "4kny5dBbABAYZScnBr1kceC81W5XEuypG84QZyuMWiMDvt4JnMVB2PC7hvJHaTd2uPVjk1rrWQdu6WS52tSvssfx",
  "key33": "4wcKsqdWgAqkNJAv45mzGehkGzEYRnZHZYeEUuva5kgKdMP3TmTXX5hSWxKrAY5rQZiQCwoyFT4fp2X8SctPZwwt",
  "key34": "3WSb53DpwsrYiVAVtPMUT4baRFezKG7HMMsh8UX4YcLck1YTpMTVhUFJjXZ2Hztu7jkjgcPBrEKays3QUKK9Xi2d",
  "key35": "2gLQPhEZNwdZVR5UDv16zGGfkTiWLZWAZjW1aDpdK7t7EUtQPQgYkEUP6KsX1c2AYkXdQQgs6WibRi6NyFKs8AzY",
  "key36": "L2KUtaafhH3Gs9vGMcXaWUM4abGovKTDgFvvDZxwxGA3MZTxRoNRricVp9kZJkPr2TyttxNzc5DzJwN1TCoji4Z",
  "key37": "2djcadHR8RS2tPPMdXx1fkAdoVWBeMNytpcE7vqKZLn424DXmDgF97Qz1XFzY4CPjWDXh3kEPZgWa5sM5hvoxZ8b",
  "key38": "2Jm7Byw48tT8dFFxJWDdCJ1gMA2homiNBL638LQBjWdXnjGKrAwVUH34aF9GUkHtgX3Au9JxGC1bifrBRx4CELNw",
  "key39": "4G9N6yhXSLNmFPRq4hTn6EqPEvrq3hDe9nRffJb75YEMR6f77a4VxZRfeRqSFdYwtwDqB34SPq5DhhJnL35CgaEd"
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
