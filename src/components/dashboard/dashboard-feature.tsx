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
    "1dDiAiuXkhiHzUDJm7f6965rcUZjzXLNSDf22DFYUTYovkVTiJTWG1RMXFgFf85FfdjD6QshAYSw6Zg5KTEyuCE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djP2JfGQCwRZYyVEfeb5xt3CaxDUA4JLzHxHBCPNFxgjATbSfWFsLASsGJCdwU2WgPLBGJoHhgFzZn6sEma69Hq",
  "key1": "3R4znR2Hd4BxGpcYSRzSGxqKRwN158fjimuXHb7qsKDdFWpBQHxMa47zSazcyXiQuTFWAMUmnbzY3XyC1XTuvTFd",
  "key2": "3ZHc7JyGvHr6mNXPPNznbxUXrP7dDP16Zj2iarHWcLp9FEUPAxWYE4fVviiQAWUYcjwDrCGCMQSAkh7EFatQsWA5",
  "key3": "2xDzKL7h8ivKRwR1TKG8QCcSzaWh2HsorCtWvmz8mXdQfZj5xEG3Swf246cbRgAZ2cPskwsUDHDVuW6Xwryk2EzE",
  "key4": "2DhFjHDYN4JtZa6jEXf5d5U5zSX7msXbwySRpuJqYwnqVkv2h9LctPqdAPnG7UFdUK57FC9pLavV1ecyakE3Z2qo",
  "key5": "2L83grM8VKmDVqdgv9XXSgQdZVGM9aM21BaK8Nd8ig7PYiBrA3N7Z13gehCEJDUyDbZAksQFBxRhLmCatKhkFvHC",
  "key6": "ZV5eaSHLGkcZcKFZkkTVdMC6FfNS6eNGTq19npDMBNMDxoMuWcBRQqN6d3MuHGiH8xe6Vjs1nDKo8cARqFhpDou",
  "key7": "2Lg4L4RnswsuNaGE8mtw4k9tciqBMy8xBZCTutkAUfQ5xG2ux3pCinadDXdDkJsXQCGfv4thzuqzbHuKMwTXL8Ho",
  "key8": "2MN1DgSnFsE9yE8H4gDhRVraV4qGt8LfsvwjjWwjbA1zrkjyAnNxgTr5yQgoYCXaEasGmzQRvXUKtrBGkVCDyJzp",
  "key9": "4pyKhEJ4A4rwpBYy8xwK3B53gxUVpRfsvLEW8sm8MQAbUVsnf9uFTChsByXVWh2eCmJ4D3j7x42L4GHLxqNPYLK4",
  "key10": "4f7NKZZxitXSLRKJUSjL5FV7SYmjsg8KfhpwLeR9DbnywrtxhoMTDSTkKBR4D8caQyWqPYvaXmvcHoC3b5pJwR1u",
  "key11": "3fjho3848eux5aJoDwCGrAcbLgE2iGuvkXezSDHya9kDzaEGgemJi4wxCfqAjJFxLHtQKp9ZoDYfHd826nTo8fiN",
  "key12": "5wfHD1WtWnYZoa1CHm4DsQ4C3WC5x7QQhDzgjEDgxuzUkBx6bL1mej4T5Hyp6gja9NrDgyFsCwGsAkNY2JtLy3i4",
  "key13": "54sjUsJJ4bXmLy3ZT6ndLk4YRpYtD5H4bNYdPZdTPebaTTmZoYZydZEC7NykDj8GM1GPknyMByUVQDAYWTS5dnFf",
  "key14": "4CS6pVE5no7MnYGPvtCyC91gUgvnaH6sZaTycnKB51qFAMQjqycNU2vq3tvuCX5iNHFnqW5MCQKciavw7KTuNr5C",
  "key15": "3JTV56sEQSakLpTforSnFwC1LiCeoZ5M6KEVc6nu2fYiJPMdQ5SauafCWpfQxQSwvnBVDE7YLUDCNirGqDqaGD4Q",
  "key16": "4txJqmfw9v6MS3a1mvDhmk6QwGXcDqfqi1b7urTRg2uaqCeFYN6Z3VByYyuCsFbohTdue5sL82ji91tq2vGFF88z",
  "key17": "44haJvfpncvSTjBkXg3XAu3qJYqNq8EoaANAPgpQRFUY7sFffyGNmvQh3fgZerbKso3JuQeRkDE4HN8DEiRmqpdF",
  "key18": "4AQADMHDnjap7vh3UNjeSWeB6PPJXWvJeMovgBqau57kwATpS1R7NvvJw1YUEgNuURiRQh8BzaWueN93Z82JMxBK",
  "key19": "3eGhPz8o7ipLJf4sL6uzyE4vBm8kFwhkdjWfTwn8qDKm4DWgYzNkSCDdAKfpLuaFFkAunvpVpM9v5rV5sTvVEksz",
  "key20": "5xvxgpACJiQwLxBM5iXCiCa3UVjjHwrT5s3ob1cMBD1kDoFWFtjNCJgBRoAF1L2BiGd2MkwfaLcKCmnPUCkQiw7i",
  "key21": "43hykv6wVAa3qLUxh8wjV4tetRhxqJyBbFckFUtAks1u2CcbXbMj3c3mJ3hC4eA8gT3uLUZCGT9PtUXTQgn6EAgF",
  "key22": "4qfTPivv1o43ESqYw9SUjmjsLLBPghsqrvNbxyfVzL7yGA2zkCtJ5RC4U2qXx7CfH2dnKEojf1snviwGw8LRzxVM",
  "key23": "5EMJfjCpXWZk5mdZuWW24DnKEsSuTiPdDwSSthB6N263Ak3tP1Y2Q5ddJWSV1qcRhn6YiFTvHMqq1Tex3a1qeX6b",
  "key24": "2Y5Qj1SzKRJMyVt6vvyxYPAUoY9dd5rYeNLJVTtC2ohQ7o52v98nLJfczfh3HwhRoKFTwQE7kTLz588eMDifjzq6",
  "key25": "4sFHEdc5BSabM1ey6HEircaJJHSx4kFZar8tPbonKnHdBwGjdXXRXGSpEi5kaApr981FsZKMC9ipLa917xDchvsi",
  "key26": "2RaBhd8xAAHWc6bg8uPCBvE8MDkBgdWtBGvRD3YnJVpVXWcEmA2RaErrNSjao1ijdVp5RDZpdHMqXxs5yWe81ze4",
  "key27": "3uSzfSQx4bhTLa3UWxJbR5mf6qFnY8xYK6FR5cUCoD87a7Cp5gVPQRg95PK3MHSPWE2tJS42Bz3LVUfUSE9xqDuU",
  "key28": "2ZcJLQ3XLWHyjKFejqpWrhapu27qmounaumCsNeAvGMhSZdstcFkSJuVNnYuWerVA1Hi7NTEqYi8862kud3AJDU2",
  "key29": "63rQh38fcYUXoE8YJwcZjRfpyyYj5tzrZBjq57KoCHDUmQTW7x89sTQDWknEygwij5vGpvdnhMhrXCVi5EfT42wy",
  "key30": "5tfDj2xRmTQWaheijU6B43fGY177jViVZ4iWx3fUtmgZGKbCAQ16S4rWqbjGhHNxVtyJgUW2skbVbJjjqE5eDkwK",
  "key31": "4a7URTCDZATu56dJHnR4U525kURjB9k8VLVDjaQAxopFjEKAGoKhdkFDkcpJxYoEDoffaJgieREwzyH28p5rLtEU"
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
