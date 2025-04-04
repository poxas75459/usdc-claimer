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
    "ckP1j2Gym1VbjLYK5MHQHA1y1q3KH3wPN92w5SFazt7kdJwetv6iVvYQqNgh7Nd12hSfxUBCmAXCqH8EvMvXtuM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GrnCY5avpDxvGLaH5CkAkRbqt73ZY8BToksN8rUbDGKs5jxJBAzQx4Y8vdqCUMHykCRJ3nyDHzmEu2KYTruPVad",
  "key1": "3sGzJggKtfb2t6sDf31ixXawDYH3gRzo2VKLVKjGepSKDoZMSriJorx4njVQx3uyE2TW3T5bHR5phbNFwknhqer7",
  "key2": "VkTGTP3qC6wyXhH4p6VzxEscMV5ghgTBLrdrWyCvaJy3aDHwHompXqr4t6BrCtXtcMnmxp5Xqg1dHBsMWCc3ySi",
  "key3": "48JT8ZRT2sSJAcVn8MLPhs4C97JC4VhN8wYXqehHAMzQpUexH2XW1GbX262NEroJcMFwTR3k4qRtFWrKMBcGombW",
  "key4": "2FrKPhbZAVFGu8xdhZiy7EVRht2VZ5SDRxxhdiL1YLSKJBcSBNFuhc4HJrcY971mt1a7457pJJZ3RvrJXuieFWdn",
  "key5": "4S4BmWkW3cuY5jCvu1dGDjqcsmgzUVH85gX5Jn3zvZdX3g3KrCxUzF4t5BN7ctGpRUEsDG5EtKm6xJ8BDaxxVmKX",
  "key6": "2wNfSigghvW3QmhsSHAJd9MQbKikSTxmr4TxSu7TFSjupKyQuWBdJvRpCJjp9cUJdmZXBaWUqo2pa7ifj1Nw6zmk",
  "key7": "3aHCAE9HER9Wa2XEPkCZQ6vAv9SyriS1gpv14MnoPKdd3FCu79hczmQTiCE9XPNMNBTjQTzhRTdb54swvycykD47",
  "key8": "L8YUmvWhRRu6zLmQUXjWdU85w2M5bGUMUpC2ceGWV1CpMF9qJEmRoFAfJX9DE5A8wkB2qfjmHB2yzfA7MBpBq1V",
  "key9": "262VQ7cey3N5CFdagzgQYAeMe29JFDhzrkTyBoJTxeiyVuBYcKaYuY4AegHZGcf4D71sQrP3wM8s7jVVSDuYmHUN",
  "key10": "3tBHDPMtz7dJytuWK1MfNFranXir6nyWH4omAUn6dmXhD1tx65xLR3GzpgCqDMnoYw8zPqb3BK9cjpy3DNVLUjC8",
  "key11": "2Q6r8Rme4a25x7JuchsDcaHuRi4ypkpQY91tNmznnnL4bZ9h5EJfXZTw6SLHqzTvd4AMbiUtrebJhFjFk9WdvrTK",
  "key12": "oDraM3HceQ1pfUuznCe1QcJFEmXY7TxUQCe94sziVAKHuPEXJsGpvhoFkz8c8HvapEmqCFptNTEUDkfHM14GS4K",
  "key13": "5YKUJ8JrFAcNfGfdBnu3QnU87ZvxpotTKB59eMJmAscutunRuKDhwdueFnHTDiQV1p8nsFjf9MK5gh5vSC2ffnZ2",
  "key14": "65Nctio5ssYsTDNMpzHVHNbh8TWQJdCs46D4er5ptQgJU5Z7gVLnB3fa5oWoQTxKmnYdRv2DMnFoHcJXdtJk9AnK",
  "key15": "2WQSEGHKY45qKs7ddY5FLf1FpY16SRJdrtQyqS5H9297Kq3TJsZoZimrnvnWHCkroopnoWRNLHJgnXHyAadE3s4n",
  "key16": "XahKXxW8FBaiaaCMZHTmsDiCURfZgJXQNrSL2BxTBF2T8aKTJoUXxUD5KFYi6p5gY4BpcMCg8feBCHGb4JTXQWt",
  "key17": "4aJ6bgXagcbqHeAbBcP4i6ftvfpyP7T5UroGcKJJ9H2P2wwvjAMjVppkmrG1Ama6xudA4kc9yb3dbn4ZsqToTxUV",
  "key18": "2CXbgGMTBd4VKrTn9r9SFeeKA8Nouik5B7QSisZT3RDYKXn1Qxs5xBeZuCr4qvuaYUZn2PMZrUhaCjALJFoCAPhn",
  "key19": "2JghLPsmNQxg74mQhybkY7PYBx8K1NGqVTKXLNUkjGGJASWmkV7dbQWb9M9AcnzYgdMhYY3LzkyRdbJx3angxLEN",
  "key20": "3kTFs7tyWgzrwShNHzbZFZXvMPqE7riC9G36DxBvtW6ELauxTdTTeL6HxLtYdf5YRW96Y7YLTU6vsULd8Hk6j92e",
  "key21": "4tEEpTBQEYAaAy37LUabnDo3RsqNqxxhaVuhzgT7pwLt6yneCx3NoUhYYUjfREQVgVN8PKi9LPArDXjd5B6b7TSZ",
  "key22": "55RUPLQ69grneRgRF6jmLqVFwWH5auWduAm8c5xHVDBUsmWXFRTQzEM1yiW5Ax13pfQcGTcnKLsjQmUZTCtj7f7V",
  "key23": "z4Yu191EYLUu2PciMtdvxHf8eUeu29YjTFPMtCDFizknJwoCrDfcijbz32SfeXfxPnFJu2xdaKxAv6vRg2f6GCu",
  "key24": "muj6JkBSuerNLy3MMV73fpS1YjbXZrdQJNZqibygASgwuLBixhrvCTg3cjJceBgVqFqLn3YrYpyJFvHJceBJEWe",
  "key25": "62QYb8uMfachSD1ssia3wY6LUpWjP4DAe6D46bnQn8QmwsnTUSMoK6vEwYLZt89MFQURCD5fpVbN4Uy6yyBUwkEe",
  "key26": "58mXJv247TFwAzPbaFQ8D52fbySCVvRxq8TzfZskQEZDrwZC4qCau2aPgCToHGEDaEAeRcLXCvnPEevh44CYnvUR",
  "key27": "3WkLteRSKNzV7Hyxk1Gz5dtd76k3L3y9TQXMMe3VMZMqWnDaB6TcfhsRQzhQqzzBMEUuLiD6f9QP6M16FPbYQTv",
  "key28": "gPpEWS7JGbaUDherDZnAn5T32g1f3K1A4g98Uv94PVTTGdYNpaFXnbwJojmbG5orCZjpzJNbunj2G4gEt97g127",
  "key29": "3objjCA3MwqeV7k59jsp8Q5hpEffV7j6mXvJe1QzRzzymYffprvKmHtiryxYLosNsnjorKk61P7Sr9y8TUJNpU66",
  "key30": "2Sez9U627yvpG5ADcKDuHJP6t4uWMoHPeZn61vsR98Wq8LH1UPGMcFhEDQjCBkBSioVYKW5e1qgewcF5zf2UeDzn",
  "key31": "2Zzwhs2UfGjzaZzkh8iQWsjbTp6WZXZvZUBJvkrgzUyuytxM5bfH2a8pter65dMTserkBX6rNY66cAWCgsAJ5ksD",
  "key32": "io281zUxyfSBPR6YiSsx62j9vYYNtzWYFgQ5dFAshx7H4DK35pR3sTuUfPLDz4nnJYXfquCLrg2dhzx4Bkez2oQ",
  "key33": "5oXe1WjKg3aiuFonTT3eSxH8YA15ZEU9PctKvJWvNW4TkUkX3qx42eQy3r2eKA1GPCzzQeBwLKkHnGXmztL4i5Sh",
  "key34": "UHDbo9xMtufqWidft7woprJ6XDGQ6482kUZZ4HDzVMn1s4zdztceD7j2agSeAAVP3PH1fQLnjtZu91scMBw39GZ",
  "key35": "28ctGiZeeF5vxiTpT8kuSyepk8fPNiYjjksaU2SmidETc46mYfZd4Gps58mivUKNPzoLdVrV4RuJ76T3SVvxfZn3",
  "key36": "3YeBoBpTwGsNY6wHnTsvk5wbxuJP3nDh3fZ8TvL8HzWx2JLgA9CWHhBzW3V9jR1WTDbh8irXEoNSkfAZbFxuSR9h",
  "key37": "3Yk8M1qk693s2KmsbH1Rqsgzv1uSwZzSdRZpC1N7FjYqzZWEafCW7oBVNZFvq5pdfQKAMXzyMnzyNX65oPxaJX4w",
  "key38": "Xc6PKGTRD8oNeKrjAZ3K1RwreQVpTPrC6AGyexNtVQpYCaF8Lc8H7rw2BfUN5vZp5GoPKEzoDQSosaGYx8DRLF2",
  "key39": "2vessuKTtH8QFp5L72wBTmrvW3sUNh4LT2EX3YeiFQaiJBP5s3H3bsrm69dH2zGowRuduLVKCXfNNa8v8xfuLj3U",
  "key40": "3tziUJHvAFdWU1t9y5dV6zq39vFZ1WEH5StWQAMkckgcqsbPBqZEwg8JDjEwjoKstgMUBHGyn9BhnTJbJrJj5ioN",
  "key41": "5kwMq5P1pT3T84Y38Vybwwa5wZvJUrukzPtKia1F2SfGcpE3z7pTjh83UjB9GbLbsWgTKGqTGCKTi1Q8moQQtGMe",
  "key42": "5ZJVqUfzySnxdX4yXuG1p5MUkhUap2cdGdMXSSsXzwFBUT1HwpXzAFJjiLvcZcHsMeuzyEfcNMbuSL2KJeNTWCcW",
  "key43": "5oSasPCXEYYNLdcFFNJQKmYSnqYLmFakrF7PPkRcb9wuTcy4Chvpxn44V76tFZLS9GZSmmWbW82qNwBK7bGATZMC",
  "key44": "3hdNDvm1yaeGSCWwAjQ15sFhWCrggjQXAYKVg9qBopozYyL1JhVAp21FfsWUwGcAjayx2sPUcqYDdZ3QcD2YFsfD",
  "key45": "4BdA2wJsjdVey76wEg7e9r9G52mMpo1DMeib6txHjHnT8M8nq6hcwM9CpFqiKXaXPvbZoEkFor1j8sVjypj4c49L",
  "key46": "53JS9KSS9w12YpuZEMyqPS6LzDXq478H7KnaVpoj2hoECHYPZCQSMrZ39NpYujGWx3QmmsbyasTLU1JirK993fmm",
  "key47": "2kgTHcZPTeMojvT7HbfWssDC9MMEtzAmCRcYRvpM2iF53XSrY2JTuH7qAw9ac6kqmmi2D7tducM116pNmVkSSWHT"
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
