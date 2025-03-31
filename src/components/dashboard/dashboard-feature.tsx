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
    "yRKyUVTRqHurkmffjDGwPbbWJPV6bq1JM4NL7Qtdt9KpJmtDSHXqHLVKfeftQDJsRBFfgSmhBUxk2ZJqMGQHvrW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19gzp44hRErhTioje2h7WcWao62HHCmNeTrW219usN5gowyGAf6K5UWmbygryAd9o5pjDHRf16HSiiNePegXgZH",
  "key1": "5XJWUzwXVpSE9xsB6SepZ2oHetaqNaomprMpweqxF45gv2XgZKtkJV2n1vQuUvHiHf4TaZndx9FXLHiAHmAzCcis",
  "key2": "exR2C3myDTxBFTjSrGmyswoqGrT4JeRYa6JcjHcMRr5Jafe3FAdDZPAwyoGbLpkRANZFbFPYTjJrkhiLAmaAm19",
  "key3": "3ezeNPsx9xhP3x1DS4P4S5JcUdWMn6YYX5nTmwpL9VNJsfHAcm2SEdqfWNNufQKvKHvf1L2Gwf9pVKmshBDHDQ6M",
  "key4": "62T9rY3pPbEySGiAcdagAw9eeBdf9HRZ2AHAo9KVF3XtGgBsNTrhfnptStdFdh3Jbz7DbqxHyAviuTHPD4nfH3nm",
  "key5": "3geqHghbeTrtUvjWSdxUNYa8jT6ukniZTAsGRN72UYvqUJjr2xQThj144xCcUecG3LbGccVwx9291QZxM5LwKwjM",
  "key6": "3BCbmjRuZWuTXWQEFDEj1Kmyys2eGPtWK68nqiG2gJCeT3Jdx8gLMJmMrWG9ruQryXRiCN7uY4s6MNiGF5oT5F3e",
  "key7": "Qas5SJMe2DjAsixx91F31u3PLtUM8EsTZwmXX2PrzMxwAUqGT3XRskg3EprpJKGLJPskjuW5XjMoEvujYkbGHz8",
  "key8": "61wmQtikRpWBCYevUFAUSLBaUew9CYjd7JdGqu65TG8VrmreyipZgUVnLGP8qzzFVN7qk5qYRCYybZSQS1NM6Zme",
  "key9": "3ETqiQ6XQq3QQfD4cbVLFRyN74iPrHgMMxWUuHSNfCQocBHu529phjFCW6nrNYhVEWrK67tEZPKWwsWB6GUJ5sMK",
  "key10": "3ty8xfrBFnAnuSwWNNqBBkHgcwoRqtokDpNKhhiPvCuqcRdJ93ZTt23xmU43DU2PSFy78F2zPF9k84WF9fu7NUnj",
  "key11": "588pXZMGmRMHuaFLrdjZfXjoXHMwNqH1pCVuHxfNmkzjr6xfMHFqAezK7aetL2R9yqKCQRoqq8Ndf6wsogeBfU4g",
  "key12": "3FMjDfEb9pUzjRQqwhRYLdo5Jk4yqkyWUNKQkhoLSCxSFZWZ2WajbqintfWreBBAuf9LMCaUbEwW6w3sT462UimP",
  "key13": "5ZQXQYu9PMevV7xMHuxnik5cgMcXnXfySK5d8upC4GjeGXE4k8NW6Re8KpHdQt2ZyJTpY9tFg2Z12e9notX7HfGp",
  "key14": "2UsqAt7Ynnvu3swgG7mVCHbgQAR1MdB2CRKquAJQ3PgNYrWC9q1SJEdcfA8jY4hPQVvTicbnruMGMdT1aG59NTjq",
  "key15": "DeyMEr2RpeQ37UafCCpYugbAGPWbG4DyYBHhQ7ZrrAYFetrBv9Hc6QyUCuZTn1nDtRDnY8Mtr3sDEepB6wxwmEt",
  "key16": "3xcMaBBkDQsdHvpxNXBBF2if2TvCyDkykoiSNTa8pSZfgmeLpqJzgy5Uy8wxPYQ558sN5VMFHcZ4WW5bJxgcD1e6",
  "key17": "2UFJGqHN7pwggb4MqLMgtNKAKMaQc7ar9o4QnKRhXg6BiEsrSkdg6aAGpeJLhKa7JtMRJsVycXwbpmzqiw1YR65m",
  "key18": "4ari93AKxGgJn7u7U91vLy4KnDq4gDgkmuCpmjDJwV6JFurjWQWW4adfXC3VafjLZ5jgtXpBU32pPhnEegEMthdx",
  "key19": "58aqbY2o9NSLmCznnAiFkJ1oBaUjkWZE2W4KpKFrtxH9dm77b6zgYVdgDhXDuJNGnC9MAgDrPWKGqvprGmYPja5i",
  "key20": "64QPf3TRwj8Ak9nKWRPvnDMDjmhqPQdD1jsZ2eQgThsMQTHHKkTfzwzk4guDmyhYFyobjkFevGQsCWErQpTyi6q9",
  "key21": "3Y4xu3hLbZ73rNgjYkNSVcssV9G6CW9Q2ijenKqKCr2APro4DRWKKrJYGK8m5bXNThmsVdiwV92FGkqFQ3kDq2ch",
  "key22": "2VYntQWUmQPavn56G5QRB37LnYfSaTGe6KPRFJEBzpSjVaDpikNRCBWiv4DxMzXnNpWGGkXdcjwQznQjWNb557re",
  "key23": "EodcbK27n7xfpfYMMHkKko1CwGcrka3FeXkHgyCaZRP1YapcDXQ981ReaqsW1h5wWojmF43ohWDFEcveMUhMXyS",
  "key24": "3nEnCo14Vj793Y5yZNUY55EGux1HnAEkM2z8oC4jBUaqzByDVZ6hgYEwy8pWHAdiXPkcCiovN4BS4kQgMBiFFYEN",
  "key25": "MKJVyNCnfVKbL9DSs2yKVpTAvmEYiBhkU5Tc36BHFCsEZjqRVY3KtofKma74gtet64KE9zRFWUFWKErVDt2u4z4",
  "key26": "5MYHRDyoYDuPS7ZcuUPjoBScL1QAZgbUvSZBwmWunz9TsTwALQ6jCh6mUsoEGB51cZ1DqnRrUmWVYCWxDE3WN9Qg",
  "key27": "oYHtprDnWDYgWvCEAVzbbj2pVmvdd7oRnEG3iqDQyG9mKwdLFvWTcjKMFFgT3hWyH3yihVLzDB7gS32zY3kA8NU",
  "key28": "3RhKwdpPXP9xRmQKBaE2Y9UxKtb7mHW9jFoBquBaCi4kUmnXSUBVF6Nn7gmzJqoXXjNs8ADHVFRY8Y2PxW9rRjAc",
  "key29": "2XPZNt8odLW2ddykyaQ7ELvQLSB39eCCRj1tB8SjkfVVS88PMWnbUzKBxzeePE5uJxmbJ8MvK3XUnpjn8B8ZkCNo",
  "key30": "5uukSmjk4Jdf1bca8NcYrn6tzbnYp4KvsdcWHKkopd3u4HmJE1jmsWBndJoP1K7n1tNAiraF5SbsuNbhsmJzSW9X",
  "key31": "3Psm8Gy2NiD2ecQFxuoCXLAsfucBaf7rUGFeJzG2J2gCT2JfjKC2XvnNPZ5K4SD54fZHnb9VPJYfMWzPKyT4dhC"
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
