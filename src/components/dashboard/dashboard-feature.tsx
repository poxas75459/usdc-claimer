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
    "4ME1tUq7F5xADzHxPqTq7PZqLpJYd4GKewFgBRgbR6G3whrYjJiZu4pr2zEmjxXTDrnqPTmWY1yhEapRuLQyryJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D4xBD6LL1CSb1jZQdYMz8fhMtAn3QvXELyL6vNJBtPxZvLHavFke8YPQDGoaqqEA2LawbKhKLfRSwDYnpyw2tNH",
  "key1": "Zh2nvXoEj3VumARrDjtyWGG9HQCpjxoYQ9SJvi95kRBhduEUwedoyP3JmvyAsiVpMTCFQn1d3eEMiieZhNP6Woa",
  "key2": "3daryA7aGXxn9ya5bazvqYZ1gCeMidpfcM3FGmJp7yviUnvg1TKyP38NMpGc2LfVsFi9RzAkGhKecQkr53SpSJHk",
  "key3": "52avpp3VfxDdRDqHvfLPMRB2MLQe5pAAQ6jN3GLMHzHaU9ESv87a7CqZkj9FYiWwkMN2vgLjCCGihDLrw7ESUAtw",
  "key4": "3vDMRmYNkinpcykaC8uwb3TNJyyMn5m4nagYAJMTJkepy5gXNxU99qsp6DGfSWwFJiiQPkfDLrnr69t4qW6NuXwG",
  "key5": "4ej7qRLWQDe5tydfrVEzYhuhLRKEors6HheFEK9hK6Bs2ufQEDRv2N8LNSn63PYw2wknYjBnZi4C3TnG2Lh3cswq",
  "key6": "KqoQ65cHQzeonBBmbVCcvSRH8DNCUNSzxmMMhL1BD9rftoSoTzCLf5mVTC1FzLn1ehvqWjbaYPKSazdwBEtGcRb",
  "key7": "wNDsSzEEb5Rrp85CqR3AkmBUkoUa2FA61xTkNeNezYYisHiHzuHrVd2SUZy1NVVcw5hExdexUrc1DhDyYK33n2o",
  "key8": "36wqPPvsh9p3xH3nTBfmHYq2EU2MKM6q3M8A9ffhpVJtf7RerbQQQxxULyYBnAdG1k8cbKzFzQcXkQTksBbN7aX8",
  "key9": "5nhjgj7xuEYoch5hhPtkZBucHokMaN6SbYFGVHzBaL7ZvaH1bym3u9zgjnpksopMxW5LARbK7smaEjGZBa4jYpMd",
  "key10": "49Q3yUpDbcXUmivcJnZjvHRNJptG51Ms3gNoPMvC3nMaEvcsf8fSR1eDvtJuw7sKiAugHv5Exsk6rgnWeumQtkFv",
  "key11": "347xBig7jJN713M77Drc3gJaJJVHKavj2Rrebf2oSgfq5FjAGsb44Y9nhmQoy9gLGEn1gKKP3QR923oU2G3tm6Up",
  "key12": "5j6vxKP5VYkDxSFSyHSP6pTXbVxfP5ruYEUMvupHHv1gbTh1r6PQDyFqYrxzma9qLPWymAWxsoNPXCtvW2DJTCp8",
  "key13": "zkDzCxv2y8epTvpGnJzqfNr7ZHdRG65benyUfduQHj7hsWyiDQsKKxigsW6CrNoNsKLz1jnrmTgUjhc2aQrNArZ",
  "key14": "5MAYCVnyoMsCyg4pKgyKit7Jm4SPBcFbHYB4sQiX5dkzRHVZqirCfVudE1ZpHsdjWYSHEG8fLn6Ub2PPHtAW8fUk",
  "key15": "Hq2zzYf3ry77WB4v4FBMH1D2zA5MEiHgpQqPELM4XvbTNbWyaoU4oCCqRedY4xjpHJ2uVZe8LnRSh5EmbhLZdga",
  "key16": "2cJqejQJg9T29osdY57bGsgFbTrmRQwdkhHyPi84Z1QS3DgU8jdvAP3StY7UrD8w58neor5LiseRy48ZAGs2xHrg",
  "key17": "wHrqszhJyfDyCXthXKEs4SXvMn34iQTCqikGSFV4W1zqV2qKFqEgyXjcwuZUxPWXs68XJ4XeanmyunGpx8udxTo",
  "key18": "hjJd9saGfbX7LZUqoZLVdwKEPPzZRwoiPHYMKzJYomiszQaoW1wxYnajM16sFkwSVwJWF6Gf2DRLuAkFo6cF2m7",
  "key19": "3HiqV5BJqei783cQCMyx5rEbBSN12PbW4FgpjZiErY6YW9mJKk7UAum745Ai7AxgFyA4XDHpGotPuLAkTooPzipK",
  "key20": "4SqNtZZbZjcGtRhzpHtDJ6778vwsCpsJRd33qDKsYmiSgtYuQVu6rZr3Dg2hnwnUG4WMKmYkQdHpsnNYEHTyLc7r",
  "key21": "2tfpLJoi7DZgDbPZrgSqMNUjVTvv3XZwDkRK8WpfgjGPF5ABACroxoB7NTMacEzE3NSusFMQe3fVm1xgYKDK6vQi",
  "key22": "26Y7mnqdUyCWXxYynSr4yH97Zhh4nQsQv4xqg4FDxfmttQhCLgxEUPbtWmE5p82XQJjSDqVS7sUxDk82C2w3MVjJ",
  "key23": "2cxwjFgQvqVwiTHiFuWBf9mTaFDhSiVUVWavuTuNrykU6YHLtckht8K4qvu4WY8n1k1iWDMtR54sEi5ADioEGZzH",
  "key24": "7Pru8dqsm39wcUE5yKLuMXf5Ld2AA8a8Q6HgdJJmV8odshqZEQSa25pbiDXgKNU7wnnE7AVQUkUmHorepP8FD7K",
  "key25": "3xDmmbknurf2tsHsJZdYCUjcbjshBxhZmgCs5gkmTYcf5QsRU1HjuZjWgpSJLo73g2HW1ojh6vsZunnrubTi8Sdd",
  "key26": "pCEYfmxo7EPn5WTSP1PAX7W3M4hjjFUNLNfCkvV6WC72XoANfTnPUyQRYq4RqQEMudRQ2uPtGEKQfUg3QGJfk2X",
  "key27": "5WmC6Y7HzTBmAHp8sDFjCNeMjuH5p5vPWrfFLJXZmah9ReNpwpRarscbFg6zEeSaz3MeYXzjZsz1Wrhm5oMBUQio",
  "key28": "5aq5WLDin1pfkg9EXAPoo3X5AAtab6YJyw5vVckmVkNyWkcxfrTUJPGgFUZTVMnAieJaTCZUNuG6xMXadroWPVpu",
  "key29": "4AfszisZfHv3ZWPeCnt1RPhGXsWbFJLPYehFWesYKGvJGpsy61rcjSMdZtuvWreYGVmv5FMihKTZ8Ub6FbKDiMQB",
  "key30": "3SVvTyr8D6TMyifuA7XgSX9KxWd1K35sVzbd1SfN7Lb3JzAdGJ3HgnxPEnYkvNSxxedqcYfPyA5ETg84ViWhogGG",
  "key31": "59ou3MewimS2ctzcYtvocHAxH3tDZxXd6y9VES5FqAxUCHnWaDphY2eScNqQirpgsfwD8SKDAunfyzPT9E24wTps",
  "key32": "2WcXKFvR4q6UwAZ8JRTSQFfKirzzT1KhfgDn74KpP29QPyHYRNo2Q5YpRHyp6TsrRkeF1R7ZQ53AktY9U6WTVcqF"
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
