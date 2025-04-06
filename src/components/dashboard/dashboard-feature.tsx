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
    "UPytyPC7Na9QyBXQTFWR771a9bokyfuhTbJB8oTmdjby5T7fybdjPoSgy7N3dDduvPVo5jzVZn7rgTxEG1uzX8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h994iXNUxD5UTzrstRhfEuKzAJvwNv7qVwD8Lzogt6aVqgH3eHXCHyKQZ1qZ73y5fYgdHcDGJXSZuDdr3MB5iq7",
  "key1": "248eRtQVXxLiEbJVt2eB7dNvBqEH85ompBFkzSZGJkPhPqgUfJe3m18LprQmHuFKajJdTpV2CRa683g7RrjeUq77",
  "key2": "TSx1pZLrWDUmQtr2v9T6BC1nLfmgxNVGu4iP2fvVSrHFXVSogCun6vrvJuiLAwiw5rZec5CeSCfcuET8i9zKX8F",
  "key3": "4CQ3wnZQtL5Ya8EZtVtdmDpz1oqUm4VmFuVPNGZ1iCM7cCnHiDEEoKLxEFdL1tCF1c8yb7y9r25U9d3sobouEpxx",
  "key4": "3XbbK3XbzEP4XnuQqn8KpDtKLW92bu3pEmWwykfoGNTbnp3gjVyWoaC19hMURn6HTCDEGMrwdP1XW181mPWKRt9V",
  "key5": "2FATzzGtGPtmToJ36Fne1aKTTZoendv8vVY7q2vPrrNgLcpcDNiaUjfHtWptyiCxMBMVejPw7wRYQbJeNcW8XhBH",
  "key6": "3na2nKu1dB5fw1rEQKFUTyL3NNx7x6rKYCQGBRpyrmYLagP8XL7t3De7kXMsmrwrh5eQRujprc9R6amWhVMYzpXJ",
  "key7": "5ExfLGkm1Gx5sVoXWkW6HdJ8etaed4yytgtmqdeJUaWbxKsbiLV3g9YNwTD3WmA9nYXmQSdYjGYSHQiUpMHrHQ64",
  "key8": "4TgYfZkrMMHtKYAb66KJMphayKsvYTEAd33AbAiHe9VS1RRqXGspRcQLfYPj3H7E5qX4cdgXgVmuoHVzTfqVbrWg",
  "key9": "3Wro8QjQwF6qeTCHmdP5DzkdF4bmNBUgcSUeyEYi8eTRfNnvZt4o1ELGrtfCHGwo4WorgHL3qYxXmehUfau7eeXT",
  "key10": "GKv4BnQxQ3pZR4dzYrkBLhXLe8HHFYzsjrNjD5nHdJowiC6X6XrCzSrm5eNNaMUwxD6NXyiE717PECHaLsKiKJh",
  "key11": "48brCpBp6ESQjuqNAbkYJ95Jo9QLSXTEDCZDKBUsYHHi1eMyXjWw8ySmEZeQGwWESc9QQQE7nwQ4BkHjQYDsetdd",
  "key12": "4ppxDLAPeAJPJDyE3cjAU4ziszUGAZeNbapoPykjsh3gtf2t8av7EQgduk8saMwUfQCRZNSR6tPnhPaLfrSvYDvE",
  "key13": "668sAyyaWnrbZk7gopfJgJToH9pSdphTBr72hAMAjg8cHq6ZKGDyvtq13QE5EQnspNaYuzX5aWWZRmPMSJ737yTt",
  "key14": "3C15QcSpRib2ifFDwmrQ3VGZy4VM3ms6BFD6xL944wyu529iTa7rGTy6orHSaUChdRy6GLEe9rKVSqu4P7BfvVnP",
  "key15": "5YkowidrZNX75pv9Tv8joh3zTTWfFa3pezLf5cG41tVKJDsVQVEpecbNwQGjTTbRxf1tGtaSjpusq2fe2GTFovkn",
  "key16": "4m7PeiU7oXHgcCLe24yUPPWrv5tqnwRfVxJxXCqvTDhRY2DNgjexxsrPpwByQKSWjoHFqwBD89YbA66EiwwJKhje",
  "key17": "2sCAyyWPSvSxKCEd4fKDvzvePro4WrYgG72mCzyifPaZtiQ11VcmGzYtoPjxMtKKtKt9mWmDWFTa2SSunJbmAuYQ",
  "key18": "5ySPJcVaNYtGam7sKae5SHZ9cjzttSshrtaQu52bff4jvi4BxC5TnbUWHfs5M3XwjTJLRW4pLKC8s2PoXcS8dQL1",
  "key19": "3YfqWhGNovMYmWEq31LYaabk1sBDc4XKBpDDUHxXMwyYzoicJH424hXmfuWoCjwPViNjKZgCiwBhi9pL54xwkbkj",
  "key20": "3epWE7Y91b6jbqDpD1Ptp54rP42jTzSgwjburZK9jiyB8jaKymtX2F3fKfEjvDSv2SnceyPSVoCuBqQhNvsp69y9",
  "key21": "35VaCBuRSRysgvSVfpdgED7Cr8S2JHAgxDQHKprtMfv6uGhVR7uJBYwMUA9hm2wSPaKZHrKDvE1kxFcSfkHkedUE",
  "key22": "3McEY1WXaGgWUxuQNJWtftWUTk8uCq2eaLc6qyiAdMWeejZ3jYcDq7DhvaUWBhB5C4LKaFZytiqgvjoJ6n3XTaUe",
  "key23": "2p6PzSKnVWfUchSKDDx2BZwJLkztmGRzgyHkxHwYijmx7wAFgXN21jf1zrRWSX98XYJ5AbeBq1RzEJEye22SrYY6",
  "key24": "4L5sKN1KXUJSnzhP7eBxMowJEFLaMdw2atYQtjMotkJ1uig9avXqdpFtWmnQpN9RA9UiQDdBuzNENeT75y82rvbi",
  "key25": "323ZjwnGiM8fcFk7VBbpzRTaVcY2Hir5oE9V4uN549E1zUNVLDKgJFW289biRWvbE6mu6VwFtnBQf7t8jPHWhYSe",
  "key26": "59GCVyChcg8o2N7LR9g9xFrtwC9yMzewho7q7dobW1qJhG2DWYQ1gcpp7TeA5yW8Gd1BPcHMEtfXpJCcWJk1Hus6",
  "key27": "2m2sX61x8Axtr8Si9SQLkKsLLSecG7PHPTPJ7DbnvkEst6px1TzA7szzjsQ16oEC2oMHV2vYZu8L4khL3pG2GXRd",
  "key28": "3FuvkWwcsi8WskBqnzT8zuAzrxqjpKxZFL1fgvRcF1zNT4xYBZBxH6mCa3LaJV38AMdPdvuBsSzCpRsAmstEfA88",
  "key29": "2Ltv8iAotueqtm1WmCHEqrpXeoB1L7oGrkNuYponLqUTjbxNLZsroGQ35HoFjW1CCFDbzTS5QHwPj5fu8BFY983d",
  "key30": "5iUPQMksosKjCfu554gP4ud8PwhvzSmeQYgYuLKPSqvSuygEEVp3KqPftcVwpBErNfnhWjDB6L4hvorqhXxwnyS6",
  "key31": "3tzL4NAFYwHijvK3tw1UxUkPKKFyXgGRPm83KemUkFD7gb7x35if2HVMWg51AoL7Z1XXgG3QhXApFT7B22oq5pLd",
  "key32": "5Mb9YzSN8nJbuS85pjsKrEgqRRcUKwtQ5DYotyRaR4LF394MVU6qd67XRDRYgfbnHA5Mvc7vX6fJirWLzF2S4Z2",
  "key33": "5kiFFp3yzntAntpUbwmMvp3JJL6zCaK8KYaS4GLYWAT5bN1FPUvUAgjMZ5DMGEg2mWtWJPaJn8hb6c5MsgP6x9wa",
  "key34": "53mojUCBLxbrecjWQfpQRNAm1uTMyctqKjsGzWYxZgL3HWxVdCqj2pHPyyQPWoXAjLAqcrZsUXSmWRitcG9f194D",
  "key35": "5jtKL7YUpErMT2yd3coeMWDsHxRoqiQue3p5SspH8NH1Dkrz4qgUmoPQdqDNZXEC2tw8vj4PdAHyF5XLTfBRebsJ",
  "key36": "4NnocwWvj2ZwVeGgwUuyEPWTSi4HBPUEK1Qtb3X4qGJrt5m8dCK8dx6KcmUfFK2uQhConi4dsWgwyeVdJKijLVut",
  "key37": "33Xk7Uuzg8JmC3DcaatWp8dt5pyvubmzcMoaxWuRGeRVgxDUMfSrNjR7p1SPrLsSD6R1Jsyn4T7vK5DSubJUFCtZ",
  "key38": "2yAzPtjyWBSDgarmzbn8SguAsb4jDfVubouD8muLmoKgW6YLoK9z137APpqwnrcZAmpDFoUFe6aQTCtEdDDgDVpk",
  "key39": "5N7SXT2xfjNBYmXgwrEgYFGECkMw7BpSuf9MzFu2FrHWzmcdoQazedYgY3n9AmC2AEVXYwm6wwkTzaapwazG71ha",
  "key40": "nmfMvYVd3QaBek4btXDjSsKUTp1HvHyWaxLwXWHLmU1Qi3cohy3NfDetfzHXfpdPj31iKLKRoXH99r4DAwRQT1W",
  "key41": "4JzCc6MoUFfstZxLQZ2zc5nAnGT2LoS2E1vHvFAYUag3zdn71AzXVEoV322HA1SG9nVGcBhDfJFyjW11H68TEAhB",
  "key42": "5ivyDgyTxWtZgU3RgEiUps1uxcKac9CHwhyt1ZmySHsA3VBd2VC3Wyeo52z6tt8f2kXkT4Nee1iQ6jayj9krFdUw",
  "key43": "4QMoETbLhcTVKorpa1srSZC8PUkkJjXBgtP3xF6RhuQ5sTVUZKvXMDYgzSCBtdmWCFB2LjW4h838Qr7wfSuiqbaX",
  "key44": "3h5YWW3b3YCKC6y5qdthVWHbWSDVKsDHaYt3GyC2HM1c6njHpvBY2ZxNwdTwvjkzhrM9pMqt9kW6hApxxVftXfEf",
  "key45": "4nNbTp86DJKx1oftN2hMDC4Hmfa3hERCoKwU6mk9ZdwNmws2bQZyPsuc4UguNTs26Mj1nWWKyo2iGFTj8qo7Th5o",
  "key46": "4wRcsXcMdNMmtnjU99f3ifTEnwR1cy7L69J5nVCvpqjxkMzNdazpCVh3huCLvEeih3hAJsZvFthpVkXNWbW7Zm1t",
  "key47": "5J6ZJLFQGmTJKGnK9q6uxptHVJ67d8FvqVDfXc6nJeyZ4P662yNmJeLZHuMLR6g1Kj9uYMci61hdXFf67mzaetNL",
  "key48": "4swFUQnYHKj2Jbr4HRwhi7pUhoRRk2wAiY7ik3yBLgurQvCaTjRGkj728XQAYB54mrHpNcYzVQ8XTQvQn2uMCFdG"
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
