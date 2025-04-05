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
    "21q8QnZzh9jm6opYjaeN5QuxmoJYvxqdT5ZLf2RMArmWcDKw8t5etZbzfZS69B4RvrZoqAEk6FhzWZqX3w7TAfau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8KyuJpDw1DixHi1HCJxQbGjmWEcmVfrvwrUawwbXnDsgDvL7nkBJu6wVQQNSqjeBdtz6TCBedY31TWyb5MG7Sb1",
  "key1": "31cgQV3tord47RGK7gsHRkWQSoQCUx5uDG68fvzkZUgMTXD5V1h1UXBqo2svRpFZ6DZZRcxUbSukp6bfWkEpY9MA",
  "key2": "4VQLQ2cpwKjFeViTfMUqZxhRMB1hm3pMrvMN7tCSmAdbx5SZXUoctPhpz57UFiPXjAXdSMVThRejuPDa6UFTk1LT",
  "key3": "4CoqDxrY9cuGSToSAACTwUCS1kCNXamvkQt6YYDpe41vaoF3NpJyRvmHBCtXuRoR2tWPr4KtM8DvSsj4sHgGwXXS",
  "key4": "3ZUKJB2yybj1j6xXj5p6v6DGMqyCWeHE4xWKaCjAskH5KkLLro5WgvYMHYiVQaHZ88Fuqqtsa1DTzmpTpmuLKrQo",
  "key5": "3vwtCwgWEH7A7RmtMeNe7mL4Fgpt657fCLxtSoJRtGiRdPkNb61nMwVFZrWbP8NoBQtdLPnNtCfhCkmqxrWy6rT7",
  "key6": "33tNCKNDz2BXP1dNL4Ziqj1cgMrUYf6DsxicHprM4koMNJ9yxST76AEe1wsFz4gmYbx43LrTqvj13FLNy15yZ1Wm",
  "key7": "3muza7XFKRpbuD75fCpZeLWCtciFgXZQHGoYqy4j69FkptPHe9pCXLzUtjXhV4JZyhnKjgYBueQaYKoEPvDS7Qkr",
  "key8": "2xa2shCpU6k6NsyZAMTss37WCXhPEwvAMNibCG43QBiSWPsozammDXapo29VdMt5uZJsZoTGvVEenQ4ji3Wap5R9",
  "key9": "5KmssfeYEbsQKpU5zzqauar8VBwydGSwmRVzrpEFf4pKRAAZ6Xv9Y8HMpqTiySwJeiHfj2fEhJqRgqrYPdgxEFmT",
  "key10": "NWDsTrP1GgnX7w7FTUMkHzB7CMHEYe1C4QBNHWKizgiGjAnYqUSgS4K7bTEwvzqMF2pk4c3wRBbLxxEhGdajLrn",
  "key11": "m7AyWitDaMwEtj5xMpffBWNb37PWPPaAFQfVv2XKsqFteKZQQy76WvW94BLczQKzrZRGRCCnhTp6Fx19hSfM9s5",
  "key12": "4VKnJZrZKe9YnvfmnqQxuHHhcU4Wt32tT4aifdNnUFrKx34RbEDAwTxpoyJaBisPXqg8Xy7BP49vbxNSViGTtmdu",
  "key13": "2hQ7BfXpM8JWstSMgEXru5ofhEjQ2cvhxof2izLbnKg8mC6S2CsLsMhwfRxR7pmqXGHbVXY4s5EwRfdqyuRJwPDu",
  "key14": "4Psk5SeiQf88tE5Ed8TWmeGJd8G7CBqBUxRT73DaVfmXhTdXMvkfpVF2U3QXFZ1S4zBPqVkVtu1L7Gx7EajvrZ9E",
  "key15": "22T8mzfoAEBSeq2XxntojUu35VwyM9AawSKAgBKCeicfLBGZu9MtztFLVG6XzBDNKnzeTaqXkiypjQ2muLhetVDZ",
  "key16": "4b2Ps99KXVvedPWEeoFYKq2iXHZ79Fd6yVgVCgrKziS7T5K5QasUW3CXkuY1sm2L7izobYzRkcjfX9w8vCPgtnR1",
  "key17": "5kx5Uc4SRLengNn6aPMeHKy5nHQechKH5ijeDxmQXCMXrYF2txvhezWWCKmhtBHh9sxtJrgDoFFD8hH9BXAY7gNm",
  "key18": "NHsSiXUDrm3AqPTeDf3KVNcDXUP2P9XoMGbfTVQBzc67PKKpWVxQX3xV3ypednvTusNqtPEb9yHg3cBrpeELh22",
  "key19": "2mEUTUc6yHF1Ur9EFmyMEh4xgEoJySmxkiE3fP8yPH6GWQhJs1Y9C6XNH6WgrH6SmbLejqUmv4g68qL78CTpU1ey",
  "key20": "NdrM5Cmczyqrb4VQvG6Fq5H3KiyHp6ErtyY6NTyQPq2cJ4ZXam979z3qM466XtcHfx5VfsinB7g1GWa2sYQtBdV",
  "key21": "T2pLWRTWm8zNRiHtqRixYByR4TX9zEpa4tZCGwhqcUPiwWozTBbpJ67iRecMAv9kqMyWZbZg7PcYxeAXhPhA5zm",
  "key22": "VcVq3BRUx2oi9eAdpur5adcTKwhhkJSgsFafMpd3NEoncvRswxB1qPv1mDaHBy17qsHAjMAezwkrCbGvPf6D8HW",
  "key23": "63FDVWXUgk5oQSChc2Se4W8wPqXyKQYokZoax42AsaKg1RSR8dTpSPKpYKvrPutpHfuDiE81RWFKwVAYJaZA5A8e",
  "key24": "56G2Q8L5aXZqXC5waiBNwC8eAVgT2kk9dEPkjjUvrcaLpCEYyfjtwwp1SG55o42zUjATv5pRFwGVh3PQ7MV13hU2",
  "key25": "5XkizBFP1QrPjH7oMHpsZQ439jvyK2yWHL6cQJXDzNX4iu4CqX4Di4rryA7ukiRY4iar54GihHNVkcAKpzduRaeE",
  "key26": "3PgwU5JqrpWKscyypYLpYmCRLuqBomt4e3v7axeQQcgA9cJPSXDZ4Wdf5Q44mojfM4Uj8TAc9jG3u29adtD7RBwq",
  "key27": "3ptxaPQXTqBE83GaZ3ZDKe1KkStrqgcSsc4LLmdm1MBuECxpodbmdmPuaiDYKuLXsyxsw8tW6tvXVqEL9wyYhScc",
  "key28": "4zSPX1PMWcauwkgvduvgVKXjtkspLJH3dkH44tPapcQCLhUGKkKpm8XWCxqRoDX6tfi9wFr84WiXnyq2vhywbVcY",
  "key29": "6wVAwuvRcVtSqxxEpivrkFTPkkdaidRyVGEiVnvXQyQRMmwGbKZNhzWP2wur9fY5UC3Y8MUZncAd4zU9fpEkX7Z",
  "key30": "e6sYbhwpyyna9VLiCcwtUALy5wASZpGXnDtK7sqKePBZLQ7eJxNZmWkG42ANHCeeiLomNNjiKV4i24AjbyYHh6X",
  "key31": "3gzuDmaM9FoMizwESEejGuAYvdt5NHaApE56J8pt7XzxhnLjnhxdEgL7NLSp8j6m86Ka48yubtweZpT59JJTnrgo",
  "key32": "meLjShnhprzk4A7kLo5vCtm6gmDN5qd4DqFedGCdK7draVrwaGc2beSAF49fKH58aYEwGjoB6FbzgwHQEtKA1aS"
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
