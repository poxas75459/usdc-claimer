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
    "4PDezPPdd7QpF5sQ8czh3Vnyj7GNErXVmKRdhijehehNLLqq1v87js9VAxNJsR8KRNCKZGWiw16Nyk4qTscfFPcw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uDJxwjQ6fZL3XuV9ThJKv2qd7QiTDr96e5U2TEWtG4hFvBziAa9jCtauqKsFGX4r2Pjnin7LXGZiZUgcZocZEez",
  "key1": "2HgTi4DBbBjfixv7BE79DudJymRAszHXDMNp5DGrSeGASFBgCmH5bv3NANNwbBY4V1ACJZDzQQudeCnyG9sogkLo",
  "key2": "i1gZckdaTL5FbVtx9m7wvF5GgtSnnZMyntvGfe8K3cYAnDpGug1pmu2pxskZNKd4BKwMW1dXgYVsv7DT3P1JrMr",
  "key3": "66Af3Ez1qVmnyqA6Jai4FfKQjyE1FyPcWSBLmagS7KdZToNutg4E6QkUgHTKKNpHUuN5nx1L3H3zXDZKzaeUEWxN",
  "key4": "3HGLzEypLz3tZQWpoJY5V6qMDPYG93QRLkjVpasijiWGUcCGv3D5Hww8z8wWEbQ7ugVG1LTwfpN4y9o9EKQaGfZU",
  "key5": "2DNPKQu4gvdvtfv3xBYzVW5CPfEzZt6jsVNgjMsQyDUbp4eXoVm3z3suTkcEDoZ4MbwUUUNgQCR6c7nTvb4MsBBz",
  "key6": "28SrJDdxGKiHFk5bmPvBHETrM1pRwuGV5x2Limsukz8huZUdpKx8V3UwJ29Lngt1dAiRddRBk5Hrjepehn4DQo1a",
  "key7": "ogtL8EsRGaq6XuAdUZNNBiUPE32wtRvXhnw8w9cbpeg7MhxoqG8waDeKQWB7oMumezrrZGsBjuqMQfia4K1iaJd",
  "key8": "3j1GKHRA59wqjFy9stWFf7SbqZzuxTHvgStyWTqqTrQhPv5KWwxVz1SHm1zu3d58dP5VqQzeFQrDMPcTuwdHwEdv",
  "key9": "ZTNW9Bpt4PjktmUmq334kQdKF1k7fwp1qmNT7Dz1341qyzhMKf3Yy5Ho8hMEKCYpNoHX7q9Ezp1PECMErrcEuUH",
  "key10": "25AmY3F1V2WwdEjjWBV3kzysC48TtsXUfTzsG2FFQVYrNqW5WSbEbQ29M4CrKxJmJinRvvAmsEXkXMZe2mGhZVja",
  "key11": "q1H9WSDXku6fVUayrCBWXPfdTgXSbpNZTUXrNG7XcdhWF7PeRNWTraAxEiGAWn7U2NkzoAtwwKD2sfe9km6fM4a",
  "key12": "3AoTtKLeYSiC5oXbmzTsd4EMzUK1ayJ8Hs2GqfyFfmrEJHexkNNdXbBt9xNFmt6Abqz8gd68qJMhSCGSUfu4vGd1",
  "key13": "3SkkaFGY55gSDAGyjDfgSMgkTSnVqVoSom6vGCfz5jcEyLVTFu5TKfLtSwJ7sAibP15effoAYkH2mdwdqXbnNz71",
  "key14": "2c1GYGSMKrnYB3PhUnT7MEagbsgBZjBGx2Ebc3doNgNzHV4wPrJAwEYUr583wBkFZdTPX8LZfEgKk3JxjDaJUfsB",
  "key15": "5iK93xADoB25aKQnDucfTRzh7rSgCttpaD4iutNQ9qMQ1doFHQVtZEzbLJGy6QiskJeUVA7zThPHsjh52jjzjvmy",
  "key16": "4SmgeG9neShZ7dSC8EpaUXz898Tje173EnPwG1QEVe3jXNYbGrhTimo7SeWM4QtASfnwcZt2tuz9vaXgga5CYQWs",
  "key17": "r6ajmKU6MFt7S81PcQwjigMYxWzd6TBu2antiCQdzADCT7aG8HKcDk8Qi477tHajP6Ciy4DnbN97VaZApJmXQC5",
  "key18": "3pSEC9jT6sX9hSUXWeZGu9SjhE6msPoiV4arDqpL3BepoCL26Es7xdff26HzNaLQgxPEUubQtMRxUusvkA67uxUU",
  "key19": "k8nx7X6BNAUUnp6SsfP3z41FizW5xEJtmfVF9XUVvgWb7kzdMnThLQZ4RWtf5JYPxoqo67AmVems3pfMrBPGE2Z",
  "key20": "2jSEGCQtBYh6BfDD1K9ihJ62w5J7CHMQiT4n7baCY1upt6UPeMwdyvCB9MJBMEoLntkBJRxAcPM1SaCqdeX3WjAY",
  "key21": "4taRZgKQbPhoBFooQzyfDGM2fYMaQegdT7r2Y2ZGkzSUMQWT1WhtpFhsoom9Lbc9ChmHNzcSQTtKiN9VXvnxw3Ep",
  "key22": "m24ERhhqYE7gPpeHykqMsx4m1amjdkSMVspWH1QB4sUMZGLfSzRJq2ATbKvNtYf25vYgbBUaTyn3HgK5XabWvgA",
  "key23": "3xjjdwP1ugSeZPi2XvGrHHMu4LZAvDuTuKpWtysN3MfAdbdEsVxcF1978Vbdgk6eT3U1fGEVnpi1un4syeiiqw9h",
  "key24": "4SJoVs8VkWvM4petM8hVWHLzbJwT5j8QMC4ZDNQW3NCbKyggmKaXqV36PYR3LRJcYjCmpSoxziQKQbFtGSDYFqEe",
  "key25": "7XNoDoAScLGNTR8dAUiazknkY35c3dm7JsSaHSM9AfABinBabq3CEK3B9vHYR9Pp8kJdaia6GksuAxgXwGVD8Yr",
  "key26": "2ey23FLw5D53MH4KPudLBtwPD5bGjwKZrVzJfU82JnKFJmUsR9oKt1GcEWRwtG72TBSLXbyDZCi6zgkw5Zj2HFc",
  "key27": "5GDZc8sKiBebH6vLmX8yUsSqUTRdRE39MQVmgUU5FxFmvRxGeHTGRHSeCaGvbkqeordQWjSNKn7sDde7EMECp5L6",
  "key28": "2BG8Hjjk4QYLcBzSHAyQy7A8K2kxvYezRC6CxV2V4RCQDVBEKsdngfoFTUNUK7s8e4QeCbLj8XZM9C1Rhum7FZis",
  "key29": "EAkNnxtsGvoWpHorp8smVopgG3kRnahfDS7jESSF4XY78sQPcXic4Vn88HkcDT2ugZjBoPGs95TumtKbxN9emC5",
  "key30": "KNpw6fCUxWhp3Lohy72aEeeo1vAhHtBtgFYDyYfzj5LjasVSotGJnrvWSpTVqrQZfhMC4ug4eXcmXz9NaoWya4p"
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
