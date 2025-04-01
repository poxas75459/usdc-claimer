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
    "5u2TtPsaPCszUhEASJFK7TQd8Pj3Pw4A9QMzQYJM1EiA8Gyy28akpjzbgjDPo32BytGUTgEsohiSVVQni9idZiai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wVy8cBfhH5Ago5NFWD3gPKMWZ1oZaS59Kf19AHLm1PJCDG8boxeuEzqq9oxg1i3FdzrJQEswcfhvMCCoRtRnvTh",
  "key1": "4vu8KfijZuH7Su91MVKDvZntiYBLmYFQvRfqBRZNCQb9uXJNcnCByMRddCzC3JAgaeEDQdN9L49ZDVL9vbBJf88A",
  "key2": "2fHL63ucKXbJ3hP2HBDeGcVnUz4YYVAijM7znUL9edRATJBh4v5CrbqkkEpHuYP3oBimUEUbuYAwLc9bQKaQwXNP",
  "key3": "57m3hd23J383jRvLw4akfk89cHNbon6n5ZDhi9QujcvVVGiegheU2dvi6Drc31xqB7Ckjrfm9FqebzNp8Tijjt35",
  "key4": "RZiH9mguWbvcygq9PSKAtUFgLpLTBgiZJxwgLQZg2iPb17fCsdbkCr1MrDvcUzSAUubVUrrPcypgXyX9ZvKi4gu",
  "key5": "2TbM5GMQuwVs3BVQ66g7CUavgUvb69aJAQpwskC7dUAvWJQDRYCy3Px1C2rRcfZKNno8r99MZXkFivoh8wVbRgtd",
  "key6": "4sF8p1iN4EC9WLrSXpypMSXqbvvPfmwWv8FzX3o6SaupaiCgZPdg52TZvwCpPjZHkFGxf2xw3VNmhoeJQQcxsUPf",
  "key7": "5rEE6uHhabkqfP3J8X7EqpRs8DgR3PupTUrfL3e5ELtiCALV6fXJxgFPBTQkc1Gh3GyvqS2JsxxJWJi74XTCGGF1",
  "key8": "4wswtqCrBhRqwwvQAbs2xS5Xz77MpHaE9Rgg7x6gLrd6BDrZYCUgey7Wku5NaYgyXp2XiksjEugxhnnuy9nXTGUh",
  "key9": "2gFfg357HpnTL2vgYFG5cNo6MBrRzJxnd2aJjWFV2VoSnkR7ifjBfbwBxnByR3bqgX32jNaPSaLf4g9TFQd9EEjr",
  "key10": "3U727L2nSZzCVX1LTpsJBXH98tqvv6uPaH9yGi1gWvEiMZTuGNT7DxZoVEMPLFDSQGBHrkqV4PUnx26i3jsa8LkW",
  "key11": "5DS2hzUqjm4PNez9qNqGUoBpYfSxnLp4NuNL9xg2yk9T6YFgrQEjndStE6hKSJgbqe47QauyAry2yWQDAUAagHZR",
  "key12": "5GHjnMRj74SmY5o1cMBNCroBhpcbb79xFHPUyiR48mPieLSpu5TTm46ary9hmxWMKhuHA2aEg2Qy9jXJB4iCbH3o",
  "key13": "25ZX88ZgN3ru3uWzHgx7ZB98mBmghPvk7smDf5rdzapN3ydqCHgG1FwP2xvketU4CW3C6dh2XUA11q4NDzhRdYnH",
  "key14": "3cyGcwSLgyLExwAGiqfQEnL2YX2zuqfZV39m6czawnAg4CePf9WPd8HJtxeq12oSms8ftPDFWakpUizjoyDNJQUF",
  "key15": "3X7VLL5tKL1ABYw4bFua1WcknYBdQkEhMmDigaP9zFhUgUtgM6YNmEn9prgkpmcwCYDVxtgUyn9MBXVFoeNrPHSY",
  "key16": "TdwyroExRry3wbjUEQ8m5uHLAFbvj37BVLPEFc9VmeUMbW5U6kcZuTUEtH3UHXBcDET35kTSoTECGWDVgXSxWkD",
  "key17": "5hht2v6FybafgLFDMNXF8KTdpMVupkxVDNB5vVubGiWMK5G7ejHqfLDnPbdaY2xSg4SkAuyEhyru4aRG8a3dP9sL",
  "key18": "5zES3WJoGGt3wuY3BPLukEzokt4LqRDGmgaBzPF1YUozJKKrqkm6Gq6P6E6kqszrkJ3fkrNgyPP976JA4XJDX9ip",
  "key19": "mp7FYCaobHTy6pWgRYnLwLiKZHxtupSSewF9oy2UmzNyN8rXAbdoutJbtiWqW6nT3giUP8pWoptNiVDnQDmS3gm",
  "key20": "kshmPNc6gtFvN6bfsfQ4mkPJ9i5zTejotxUyrcHgAYBP2bvcfwpudqPsaTbzpSAkLRgL5xZmKJ3gr9SzyPc7aT5",
  "key21": "2GV2AihTR5RLWUq8X23mmdDVQZmGdAM87SYTxJmomGYXmBbKr8vALkEmEej5c3oC9LECXdZBnCtb8jvAdXh2F6Pu",
  "key22": "4PaH3E8GeuGcUbWgRwGZmhyty4bsDWoa8DKAD3MsgHTzfBovKgMNrLdHYutvzfyg4LjNhe5XxEnv2QV6Txv2bkin",
  "key23": "47mEGaLtBqZsdpqgi7BRKDQnG43YprHaNncPpwQBn15pKnoyipLgmoV8YLWQ8dqFsEqWLFyXafSzELHNt19MdU58",
  "key24": "4mFJtJ3HP1k3EniRNKCTfADPumqNV1tw6EwriXpRgrksXGF1YtijwioM12djXsGRcDZfCNCEiWGXaaK44vQtKFRE",
  "key25": "4NosYPUw5cJRUtcMq2AfJwp7Yee7ovAenxAoaJnbQLCY9BvSav491uSCEkHRXJ3NqGwNHyUug343p7b9kJShejYT",
  "key26": "1WjURZmBQkgt7Q3YzNt8BK952BjXFxRNAegQPbDge92bC6y9Rk5UmFsxim6gZhscJCS9bniS4divwtZPG42X5iN"
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
