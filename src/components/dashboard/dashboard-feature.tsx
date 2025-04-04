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
    "4smEsUYipaJd9eWfsiJgcPqxbRfa1DfB6XZgqbntoE6bL6YSBGQ5NW9HEutXmCp9wQvLFyDKcy49iSHnokuLTHS1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RJTwmmzh9rktm4crZT8S6tQzLDT7amQVzQzv7itqGbhLudLh5ivMhTgH6vCGVvikEYn4MjkH999Hp93fYTYDF3P",
  "key1": "44g8XCS9ak7yYEYMSZJw3pUVqEYjhoiQCEj38kPNvN36LpHTXE6pKo45JXGJFmhDJ6eNQHqgpuRZr8VLxJjdoRox",
  "key2": "NZbjTALuscoRHFQJW9gMH5kQZYNzpBP4qYkZxXk7DTm5PPKj69AbkzSXR2XHjHsKZQo21ZhLYxdPaMCk7LCFaRR",
  "key3": "jdMCSGnqN5D8jQaNTWe1MrSUws4qpU7dKz2Z5cbJboUMQuVXzFSmqd9C2RdFCEPTepU8nACQ62bWyMPkajT5sW4",
  "key4": "3EQfHuDrWVAudpFgy6fMwNBU5Ja4oKc7EB5VybzwA4Df7SZZymdCabyjDQqPANLHzP7DHBAE1VMuqP1YfHb7KXuF",
  "key5": "M7SgWYUDPaAxFTeLrY6JhiZLVztqra2cKiTCPsF3Rs3rNYMZpaexm5vwC4TFhDAy6DiWSihtkYuJ7rbvqytbwyu",
  "key6": "3Vt6Uj4enZhKmv5W5qRJGbuXBW71m2Aff2rDHL43ucppXFc6UbsZ7nQLtWFjGXL2EqPCqhy6LnrXD3qtQKAMxir6",
  "key7": "4PSeZrysnGd2vsSAvT4jyc3P7eF8ihf2LJ16AQBSpRrun6ksnqf82m3wGVMk5QthwxLcZsUityf8BULU5TqjBGFR",
  "key8": "WaFq1AMN4EDTG9P51MNTSLgxKp38orY75cpf4re72ZGiAH7mSYvczCTXVS3c7Qs27yKH9fpYAXLBkq2GvR5xNbz",
  "key9": "4SHzcKDeKhc5BaS7b2qHBZZ6v2iuHb3X9RamcX2Sh6jzJHHoNNyTtuTQKLeRCUbdh8ZwTUnjQdEBt7mcTGd3xCMZ",
  "key10": "59W1efo4KbTfNHBvsKFoY4ZVx4fXa76VUG8iFv4jDakMfPzvJKx2WWXf91oYy6osuvJNRxo7MR17PxUZrBmZnLHU",
  "key11": "4jyidN6jjwmVc4jr4zaQQXXb2chLLMjpGZ6ypEz9iJwtqshHDjsi57siz8W3yrgwxvR5pbjFU9yQbbMj7rGzSxRP",
  "key12": "3NSD65GeYHPkqsWoykvAShUw6aSpXQd1ezMH7rFCi8aUWJAW9vUF3RhGn3PkuXohxNxvQuAmT32BFrTegA6rh9Gb",
  "key13": "2KqYT3z2Waq3yVc3rkCsCS2zyXhhZxrSfV9v9JyDW5ctwdFgqNztUo38T9y8kdbvgHJPQnUVhL5bg3ZPwxnJVjmp",
  "key14": "3ca692UvHTWBSs4AGiJbZNsz5zr7eavymLpUZTZGfm82F4u5SmULVW7ukWHtot1rDxZWq9cpCaLHMezqR5fqFApq",
  "key15": "4ihtkcYmuEKspDc4Lu1k69eMXN5yRpqELaKparjwJUPk8LLgqGH9RUnkY4TfEez5kL81hLshusydQY7G1dtR49ox",
  "key16": "3r2WgVHupnEgwRUQuaGksYePxpStgWohAXAGrJB6dtSByRGGSMQMMkrMTjM7fM1kuFcAojeXGCVejP9F2WjzSTfJ",
  "key17": "5feyKZbMfeoNCvvYeb4iTvA3bktTchYarCGFPdycQSzmc6vNH6LpHM7uutqCzGpbRZe7siCXaQBwVkwm1MVoxghh",
  "key18": "JNnnwCGLmF1CnBZsxPPUxkeQqo6nMrurjnX9EJmScCmMUNRdsfGp9kH2s9mHgMZ9EfM2ArzkYp7w7Y6zdHowLPU",
  "key19": "2ddNR1bL7HQbZcnadMivQA8fTHnEhWoWbc4EUQDmnfiQHaw2yeayPC6SbR7CNtcsJYw7Cdza6t88gdRLDecjzZEk",
  "key20": "no15BV6YbQ1pmTn1p76aBDZG1wkBkEe5qvR56pfbuiE14nQVHVkoq1zVYgxva3NRZDPFwpyTjZgyMwurkgn4xkh",
  "key21": "2vv3P7xMaYAgB8w4wZh2y1nuaBYwUdzkEWowDNAhkMSSrxRVVUGG6QvxkYDAc5xXeWEmgB5LqhK85hUZ3aKYTcrs",
  "key22": "bYs3tYBJT9wmGAnBURzMV8tXjZDEbxBVTwYG3ypt8Abvqo9ksyCrvd756Qu8jKRPcm2C1ho2ik5NTMgP8WXeVvG",
  "key23": "51JB3SVeQTxBhAti5ispk1XoYN32H4soMGWkgZ4DxcvySSBEdoKuZroDVF4eDzUz3Bm7q49CXTn5tr6Kh8abh7Dz",
  "key24": "4YtjWahj5USfJVPfA7JM5NaQsLvudSiEQtvWUmttjWZqR4ibD7T67WCKapLZppzh3BRiQyaa8GBgKYXSXN1786Hf",
  "key25": "54Ht6e4azhFu7CrXzZXjM3XyDxixFoZnSwinZ28WJg1jxJ1KmnwHCHJbnnFvaqECwGZYbEDuVVeWw7wT7GKNShR2",
  "key26": "tCJejUV8sXXcJm4vz5UxWufuyMk3Hfc2rRLaDvVGHpntdgPe8V46amMTN6wX63RS8iakLYrH68fLhnzJwNSWvbw",
  "key27": "4tW6GzDWQ8ffeZnvq1nu81LS2rWyneWwKchNQqufcugjH6VXiZ4QBScu25WnKV8RERo83HFPxHuVyd7jF8YXBsVe",
  "key28": "3E1D8AuS4AMVGBQBf37swVgtzi8ACCCTmmb9waBfbYs9r16kYAkhqytJPWp4bxGBurHRJEuHRCAPrihxrMqAJHoE",
  "key29": "29wruVUMkUDXmEN3bMx6StdgmAyKhTEB1A4ubdUkHpTucUDSUkCiAfa5neGfn6RBaX31U2Gp4oBnMyHZA3c884wi",
  "key30": "5RFsEL48p28L1q5VNmE3NNfhvvgXbeTUnopUGt89s9xzpKt3Zo7XNQhEgLRmSmKuojrgCxDuQ7Lx35dhFW95J4XX",
  "key31": "3HPxZPs5ufdhLMM8jUjvZQ92zSzouLJtJgyDxi8XrTANaWZizVeEPFBkfsxXfsLG8ofZ6Xo8H27j51cF1i7KBY7n",
  "key32": "53UJcjqLXouCc4DjPHvccTXC5GNNrtjeTEpee2CnLMz3BP8s9kWgZpSTYBor9xtUGxj5Yp1sLZJanDVMDmCkptDS",
  "key33": "36gKMk7V7kfwNyZRuDWKNa9CASntGcEhMZhXk4m3u3iukjYJ9P34Nja2YZa5gyAjzPN3BSYc8k9sNxeoaJeW8m7g",
  "key34": "uhSci2f2YMfyzjLmska6wqwtYbPrvQf5wShrc8soTCAET9LnPonuoDmscxqHjAUw5bxue2dcG2ys5zNa2MQZQTg",
  "key35": "4iTeaMMcJgTTcmPYhMPH27w1U1FNiiqYvZH2sBaQkMdNdgEBo2eLYcVcQpEHE6sA4LJbmaZmUtaAworpgULvQTKp",
  "key36": "3JgML1hwygy4wqEMX8ngWX1Yfqd1QNsoqVFLY5jzw9rmsvPmvwgZU74YnLVdPGobzywub6DT5RQsCyMcBmEhUPEi",
  "key37": "2kUTFRohQchF6BG6hhfeqxXFFuhMfkDRnynvBUc8xGvvDFzfjH3DWVZveYHJrG4iWeCNiPhQVHqTgEu7spmA86Vi"
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
