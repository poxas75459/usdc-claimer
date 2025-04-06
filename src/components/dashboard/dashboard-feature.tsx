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
    "3SFTQxbQYTsB6aaS7ACgopzvxfEj5N3RKSBrTB3QQYpb7DiYL8kGXzimukgFc5stigXvbJFiPuy5dQ2do2CoH1iU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RJpNqoytkmFcbutSUzwELUsJcjrTBARJWTC81k2eaj7hSARREA5g7HViKoNYVMJcT7YYpvraXcPvWi8iNJhKim",
  "key1": "wa1JMUnK9JyfTstZs5h5Z8QDhcsUEsxmAutZgVoV3LwxanhgzjDJSUs181nb4MNgmfmE3brAmjDPEbFhyWmP8Ln",
  "key2": "3qQUJbAgEmQpk54SCL6eEjZqvngbMPimEoFhuPECXZgBiw8KuD4aTAZntyKqwMatteXLWoNW7fhsHEdY2W4Dfe52",
  "key3": "5DG1a5rd5XMHRbNhGg6H5usjoVeqk8oHpRB9BsKUG5DJNMfRXsrhoxqDifrZSjjqWRR5fFCYC34EuU8LXm1fbzcN",
  "key4": "2yVCYaxKa9KNaUrxP8cqc5pfJixt5otHMPYiqtSmxWxaEzSLQQFYYBeAc86ba1kHcREYFYbzbA6mAMxV4GZfNsXW",
  "key5": "3sGwigGajq7P9BuN1njGr5ser6R2vxKJw21z9sX8X4EjMd5EWwAre1pg4udj185KvNEKsXDrQ426MnjYDFktESAh",
  "key6": "5u3Mq3cKNFSk6wnB9KM2hn9utehwsX2GNn97TRfvg1KQGEbReKW69qZ8H7Pi2fmKHdRvwEKyakKYhYhDnbHBn6Ev",
  "key7": "2N9AQneUjr5v5Li6FHzPkEJWXLjGeeN3NXaf2HPiC8vAZY9CPXNPH6wMkwDqTwosZhUfEpEPFPT1tATmrwkPchbR",
  "key8": "26uH28t4tkZeanVHAjMbe65CBeewEQtYhYD6WJQV6d2nKokPSwZoo1QuCvtX9cubWuaCErdTbqbrPXGbUTS54gNY",
  "key9": "2b8H8DWkzB2usynUmkpqs9w5shA9aqhrGqHhHLZcyBYksn1HPGhtiZXYb9ZFGJiGpBoW9KtyeeKjabCGTDFHNwEZ",
  "key10": "tccDf2mSHatsU17DjxAWwhp6JjYayTToTpPPArnZ6ZGFyq1LdSLkAyxsKPN7TzQ3ia164dow1XtG9EJDhcpUbUx",
  "key11": "2WWPGqjPzKA8i38ZMysz4TJusiT9Cj33iN6Wy7DBcVrbLCQAyPJbAzKnwHShDrd8NHDmbeZBjbRvghnkH4t5EzPC",
  "key12": "38qoDyYCkiZoZdDuFETbrieCVUbUtoNWRbbTDsP2RFfRFxgFiZ1VXF2KKCHoHizjKqE5MJ1ZbmAAubi1xjxxzQA2",
  "key13": "4VLvQC6a1p6PMGbf7KJxJHNhakbb5BrzgCoRWbpT2y81LZqqV3SR7VCNfsssktq9HQcMaobaVZRqVygNkyGK1KMP",
  "key14": "5Dt5N3zjx88GgB6r6FTNyS4MC6aw5uAMfnoRAekbSvMB6KGVjKELzkBaYnBc9N32x7DG1D5NjUGgTDEddiRMR14w",
  "key15": "52UhHFSSQoBn1JFP7xztPYG7M9kipyhQjmbVFMxnejHwJmrPawPeTku1W23bF8tPZb9rAz9MZPbf6UuGMhpBdUoA",
  "key16": "WC6u2wkxLNWuFWtYZgoMSebnomZQQWLeU8geBmZhSDhpFSkjGpETQDFhF7gtNArs8R48txRDdAXDoyDc6znku8W",
  "key17": "58ZmUxrSpWuNJMLqJNs7gRSaDL3wYmRZr9kLUz26Rd9EnTQ7LHSnZCpVzCFhzr8HeV9U2bBkANU2uuQhFATsua2j",
  "key18": "3usnNiGGQswLWyL8KTadn3vPhf6aRTcGQHv5A3Z7LweM4ek8AgE33upvkGsKEBB6GFM4wnPFNg34sMBndkP6RWzN",
  "key19": "4RVVSqb4hcFrMg7fg5XuM9aZJ7q1SDnnJaWqcc5WtdR9DqJQBad9amJSJs62LLL5d57YWEpy5FBeyoNXABCSvTVv",
  "key20": "3pcUY8P5eqPcvZ5XsfZz4dgvJXBhrMFqvJWaP6iYxKBDuTnE414pDDdSifi26gHAC3Y3zbaAQFDYwt1691QsXgbJ",
  "key21": "2PaBa4eVw8Xj96nQuzSa9bN6gb7V7SwXCX9cbRU9oi4Z32rrPsZa6ooPUQNdQzreRtQRvixo5n8M8cqjhaC2ePac",
  "key22": "4mYgCk4LSA3TGAXQsKYVWHhwKsGamVqa8YXSpMm8waj9AtXnNkhuh65Zyei9UDUwwkRQ3mA1WhTHLYkHFZ7nA8A6",
  "key23": "4Q83rNbKJ6o3462A86Ac1BcgMdHJ7rQcVsTgrkP9XiyMn7whebeV1meFhzRaEbnysvGZkHXLBp5xwSMWzUxtGUJy",
  "key24": "3LFCUiJqgQSs2voW5Kqz8j4zPqSzUcG33zJowNqcyc2i488AvUmzECXtpRtJM7mgLxXpnCxtvSsiQz8MD4FsXkZE",
  "key25": "VnUhduFeoAVGtim9DfWWSqwUHASGhzgWvkcDc85nh8Ye1ArKMrKNpSegcU6FbYoPSNCoz2utYmwVQ9EJXruYEvE",
  "key26": "5aSW18xy75y3NRmyfBtd7FVLcbPVaxeiqkKAh6XAtxXf6msmeVyM2WaG9chFRs45kWGtjdJmVgYe7rh7hvLb9gH9",
  "key27": "doE1UuyW4qB2Esy8HzuLek4Vre5d4sayhRFVQsTFpqkA2QnC5KrF4VfyPBovoFPezyByyqTmHAnbivc3nKCgCoe",
  "key28": "3aSiyrmm4cA899QWt1FZHm9ZpebzxT9PJn4Wuyru36K9K21freNesWfxTVZ7PcyAjsZhPq1b6Wo3iakxghpP6FPq",
  "key29": "42Twyams7BRg2Zqhsy8FntYZMQ4r8uVEDN7wK8PYKxNnavFtcihTHgkHyPCH9wvyhPDsDaFJyutapMtiidDpZWXF",
  "key30": "3vtwUvEbc347R18T3PiuuxVkVeK43eSYPQBfZfCAywezqVy9nNDFSvzvLKBdyQvX37uAUw4sC6xNxvua35CkRGN7",
  "key31": "2XUhLwHnoPSXJx1REUMA8bTuAZcoS737dBrExTC3pdkozd9EJRxPag7QmbjNcGKzf53KVtQxTinVK5PiSvQNaJgz",
  "key32": "44vPx6hQtNNEJiqQFyTyWTF2jEoQrbkXZ6jhkWUNwzeAPYNkLAsrCYA1i2VJj166D2qVJSPCVqXB95vWuv8FcXi7",
  "key33": "2rW4MtNVshE9WZGw15ENbMWxfRPMrjff4EsaPbxGksFRkQaxAuBbGQ1A4BAcBeKxhfBcyp72eLjTbPUpi1qTqmyZ",
  "key34": "3EfNsbZ1e6iukpDDkiCEMAwEGdBozLY2NwbMiRPfJovK8ecezoWpTjDT1yqLtMawhCKqSukZsBf3xuNSgxf9e7cv"
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
