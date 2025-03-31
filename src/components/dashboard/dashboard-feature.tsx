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
    "5b5A7xXSxvZEGdVwkbYm6Myjzkro1qCk63BnUEQsEJqtG2Tj6o5vVHS2rFdhYhXvLPzqzU9hKDEn29SvDiwXYbRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oMQQGX4GoCqdz8z8Z37M5gkuYsF46rPuM4PHKvUWjC2tsXP9HsRCpokuWowEPcup4ohehgg5NteeLRFxmKd53uR",
  "key1": "3cCTTWSwXQGbgPMHuKEyMcNe8wHxGrpnTGKZjDbjg571tx4mGYXo7MtcWWKP4TkiKvc6rDCRXrWC1piomr9CjP7f",
  "key2": "4mMigjiQfH1ULgjDpjejKrzEX1rWyyAryPXJNTvKWZQ9Fbg5snZZEYJETUkDaFLfZpVuMGrp5tDxg2vLRwJJTtcQ",
  "key3": "2jgvzDbyfXHVVaR66Xhmofe6799EB5kZm2PaDVtinehexSgP8JddjqbhgxgTQPPYzC6HyKKFMVWw55J8UTycwfbK",
  "key4": "4Jd3CeLykYkTEgujQuKhuL8oWjXyYFHrfVp8TVETC2yTXLFjc1ZtuHhTEmfagaRcdxLeLcW5vhqTfDuzAtPT4smw",
  "key5": "5T7zCLp8b7tcdpHXkDedf3WC9GsYtYXXGCZnTcPnMQDC1BNkcpkVMJHK9fN43ZpHB6JmM35Uv88AcpQ4EW5FyDzp",
  "key6": "3YdPnPV3kUcQXdSQ6BYfL6JonJ8rKDvkpEUTZT2CTcr2k8toTXRsJoVgYsqveAJcei8JvVCnju14x3kRp1RrUfwc",
  "key7": "3zTf7gEXL1JdT1DwVQ1NEMT22AmXbvpTiozc6a9RQrPgtkwnRATKfbb6gh4nCSAxrTdKNFRmGgEopesVWyMjBDbe",
  "key8": "48eGDRddmWHwsQxPiab9c3hK7ppeGCXFAKMRsfvYu1Z6URCiZY7PoZfcBdfvaZXsnovRYECzUkmjwvtfZ5bo4yWF",
  "key9": "3j3LzpuquibgEyfSva2zN8mrQSiFc9eWD4t3aEQyyvru8fPVA35ss95keVwSxFjzjWqAf73GmyksTEqaCStsYFUS",
  "key10": "2zEK8EmEJhkjjBq7DgTbuYmE12SXdmEmDfYfxZTdyNaELcQFZdidJ2DWnAPJ72DYAVj9k3YUPtiUFYb8curr9o5P",
  "key11": "2X2ZR2d8gXEC1WvdCrzH6RowHiNYAoF1Nxvo4NtMAF9PvN2KhjuRZP64VwU3xRdxYrzNjdYAEgCbGRuCiGXA7jx5",
  "key12": "39QVmzRjgcP3uDtzHKsmMU3x7PXtfZK9jmBRevrJZd9Hn3dwTVFfk4RNH4gz5ra1QPGBRtcKhtgKGoNowP9SBNAZ",
  "key13": "3jxwGo4feb3yUCTRaDUZyhJVbtVcf1qAzmKsHwS648C85xpjb4DshPJTbhuLn9VnMhA7SeUqBPro4c4Tkh94yQYF",
  "key14": "4Ea3S1FKzK9pkgfTvYbguVU5whsNHJWyAbkE9A4LdAh28GgPF4ivFujxh1x4L8ir15aDTbY1bH98oS6AgCEPL7YQ",
  "key15": "518XBVuPh3hQVxTzw2xz6U3UkMByh5NszA5yF5kg9xM8YMi2yoDhcb93ovxKbtuCXgw3LP1Ue8deaSeTunyA9DeV",
  "key16": "4ydCvbp5CJEXtQJy67F626LJVdwdrgN7HUMzMDfF19hHXQeSc8Dt32vcUszRRNQE5pWt1gXF82PiSDqbyQ2vi4Pw",
  "key17": "5oCYSLfBsczFDjpYH61xM5qLXVBXATr3i892KGCuGFK5rKQYkMgAk2xBLjojAymJ37jTJA5aEiZ64ZV88Zrn7J13",
  "key18": "5efMShaS778N6TajxHrAnYpoZz1CrUusV2X845v1YktDDAsx6bNc5WpHDesbUFgzp3BwX4BfZimfgbbhRfNpDTdG",
  "key19": "Qsps4M2KZhthvH596zjNvaz8E5sXaKoy9gFhj3wHFTvmkzewNVG12oThs4PBP12qDdgMbkbSTW5tGVpnYFaSGzb",
  "key20": "5gkyonQcUykyDoDF1Afia4snQbBoBqcasRffAZGqKAE1pH7p2UyxGxsnq2EDmAKP6MUNKoTERtKMQ5Grkm2DgKfD",
  "key21": "2xQ9WzYbZVnEQ3h1AvqSRANc4nod1nRhnUNoYMRMk4erkEdnTJzfURry7QMepKXFoTCA5RuuofD85Tg698hQa4dT",
  "key22": "53WTUZGhtWq6F9krC4kqjnM5biZGyu9mQKJ69oj15En6JbpgEuWi65jpK4a5Cj118o8uA9ycnBc7PQuo6Euxj7kQ",
  "key23": "4zmuiFk85LdL1pf2Ydwzy74KkUxUty1BcY2CeEiEpLnGCAMRDbx7bxLLt9W6pqGHkWnX58nntuFw44bxdd64VkN9",
  "key24": "2cbc8YdXYoYf4nB4BdNZDQdiq87DHwLBoFoQ6EhzMteZkh4ngExEMQPTQAEhjLHFcW6sZFmTmHRYvwpoPeiiiy3H",
  "key25": "4bTMp6kdMPRtWDh7jWFWcoKRty3sW4BjG3LvxdGp5P9SpGZSKHjriZA1oL6TBqLmyygMayGMS6YCLk8FpMxE3yvV",
  "key26": "3rnM5fc2HVLUKf7qdS3efEduGasnfce4JjdswFZ6KNGnJfN8ZpgDCs4Aa4ZrS5szprrW2EVFEhH7yYv2W7R8Aoad",
  "key27": "7tCsTvT46CZ55R5HocBwMd1AZFFxKHNj9UMjUxnZCkPUax1hV44R57MYnDWG8PaSf3SUbwryZCyXCY7LaPBu93Z",
  "key28": "4VMrjdJpBoE8x9Ay6c6Jere4Y3sRFyqx2vmMta7voAYiX3xWnQCUbY72SzRkytAoAzLY7KpSQTbVrRLENKJaRQ61",
  "key29": "5gWVmwepsvoMtz6vCrSi5AE5bXrDSqEYmbi67ARX6y4b4o4UYnwsqPz7THMLBQucLLvFikxKxjmeNMwihmsNUvg3",
  "key30": "3w59BGxwzBQwL2ZKB5jSNz3zCpfjz7wh9SQv7ikykbNehTGDeAF1xQPGhkHHfWRVDvkcwVSMNiZzYce9Ro9hBeJF",
  "key31": "65qstvzMjTcr2m5xmLSUX4RBBwRenPvWuNKBCXotQ1NhvV2wzzorbXLVLvVGFU6Wgwhz7XvuVKVqBiUmEvgWpoBc",
  "key32": "3Z1EFSwDq9ekFCvWirxF7zVuJbq2PCvjWMMhsWFXaXgC4PeUW5dQvupD27RA3X6wmH4W3VbnmakrKKB2XdKqrRce",
  "key33": "hvSRitd9i5CzvTDbrNdMdRHFLCyCUgNyrW7tA2ZUB3VmWyVfAJLPQb8K4wrKKzkd5VP6eXpV3HfqokVkfVQ8bpX",
  "key34": "34XHdCr67uXurDC3kP8Le3zskSCZcLG1g2rd89frpVnsXAPedkDKm1uXuFr1NsMH2sz4w5RtbB6yiL32x2MgXTGS",
  "key35": "35zChdVgQE4j4jZDFfPo59CoLKzHtpdqQmfQbHfSTG1XsUyE2P8PHqCCSKfmSBTGpC9SBWjUhSj3f6rSVFiZMKot",
  "key36": "5vvJsGy6AWzx28juma8bqS3nRBpNvvd5NDVnbgB98q4NNvSyxVniwCrASYs9fKogSxKiQodfAkm36FCwa5ZEyYJa",
  "key37": "vGCEE2giiWMw7NokeTufJcxDn9WBzbhtnvJVbMLps2EFGuqfrmk9Wj1VubVuH6yYd6Lb2YHpso6z4JWaUQdjzVe",
  "key38": "3tSk56YSmRBtQGJbQoezGp8uUm3CLgLtDUqQta2ShLs5HSYYgJazELka7cWUDXwi8ACSywFu2mDKzTHF68brktqC"
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
