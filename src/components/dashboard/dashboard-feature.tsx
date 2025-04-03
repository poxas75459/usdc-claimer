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
    "45pt5T7spFm1AMtu7Lpoy2isZv95EdTXSBMsXjGBYDcePW3eWM1iBut5GrvRkHmziikWQ84pT45mnuvHVLCiv3dC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jm4SRCFA3tpoNPVPvCP1YE2Pm8HHkMvx7G8XKeZK9PCUyntVaaGzJ1gTJ14gxcu5XDXd5JUNfZWDPqt8wPcJcve",
  "key1": "53iVUqRoDuhVTW4vwbyy5cRrGkupj659jybqKxFq6BTc6JY6caiPRcfUS5Q3GXNw19xq5datoNTDn4PogbStGAWq",
  "key2": "57e5Zkqw2GBxKXoJbfP3wLZDJoUpTittpqGNho3ywdW1qxRvCgf4WyFrBS2GcwCDYUieS8t2iAqnzmuGgtZyzKj6",
  "key3": "4hiXVuF6hpXLJoWjP1sGgda39mfM6BBTtKWKiDWSXHjWt3S14Z9n9ydQrNMDNQkSwWDC3k88Lzo9QZFfaR1y3LNA",
  "key4": "3kikWwbLHQLUFLAyfbHLQDAZDkQRv6KSTsC71FcT74W3zhXVoD6tVfkms4ES2QZctNSXADwMAA82uQqjTBiSbXBe",
  "key5": "5R1ajLL51ti19REdGD7ryLrWPePyEpFVgDAByyxUd89zDsRuZ8iuQAL8ZgSJF22mPd6wr4aECgg2YArgyzsVrCYB",
  "key6": "5SJLWzjrG6LypvUY5BfDYC1Tmf1pgXhcy2taGTPwfHECpfomgMaUARnHDy7hGLfRstKAyPPrfMwDjd9NwiQpzbRj",
  "key7": "yf8tCepV7b57FNpShvSnWnFYeUeRAobRWHGMQzmbe6v8sNBRhyMfpAbjak8kHkCJpBN1nVf2bzgdYzvQ9gUrCfp",
  "key8": "5pjXFxQDVAFeRiBbHCHoGiaTR1m9oRaxSwVgDhbHXLGC1yiofAjuo7ZeMJFjHXUHUkvVjq47DarGSe1hnXWJVknD",
  "key9": "4VPHtPGuK9w7Mz8Q6dyZEv5og83iu6JBDeSyHbdWgQHgxMaQvuYs7kEF8JUPynxbWneNg4z7yvWKLDjACf537fnD",
  "key10": "2Mdd6RNsbETH1rBTdRiDj7RiJG8uqu54UFP3ZysgW6HQWhe54N3u6BoYAr1kYyGj5yeedibA1yzdFFLzcuT9oGbq",
  "key11": "3cgUgWNUAeX1MDdTTEU5FN4P97EQ2tRXSc6AdSapqzSzAVwQW2W5jyf9kq3GP7YKs5ABZx4uXiGxbd2yTKajfGwi",
  "key12": "32dVzYKjSnu6xhEeTXNUUuBvsVF1ym54tMHgeYTvrb2ZGXQQT6py7VoNR6QbfHvgYaYQRUHmE782HQzMZPYTfr3r",
  "key13": "4cPiKz4Fgh54Fj6ffFqNmUTz1zZbLLSqz9nJdkBWnBVRG47rcXJxe6FpTfXMpZchvF7LGp9hJNprUxhssWVAV2HL",
  "key14": "57v8hWoSv5iZzB1ZJite5xuUsF2s1ovkHujnydsdw6rGqyDvcpjoxCFQPyM4SvqSixMpH99HXJkzJvnXbRH3pcFo",
  "key15": "49R5jofspNC3cXL7BwH9o8UchBhFtmCtscRYg6iTAk1CfobHyPxo8CkQJj4aTcisd1xj6Z9QN9hPmaf9J4r3qEdi",
  "key16": "291vuLpqQj12B1bLoF3yCgcWbfMbw7F4TQizXQtKNMF4R3cJsKZDEi8ibtvx6uApEAwccxDVfc6PUiiw4QHDxVsn",
  "key17": "2Eo8SdxQCR7bftyZCV1RhbYV5rEYoCBiQaNn9LRUky6bRtWiQsFi4Du3PPHDeKVF3QoVLdf7k91GDpn2jYM1zc9o",
  "key18": "5LWaRNzWhcukYvKRwpgPn8rYmrg3DTHi8xeuSYrE7MJxywTPy18f9vANf1bH5a9TTovcHHWtjc89NQsRxuHhxonh",
  "key19": "5fTyqLxt8VMbb1dUHYvMYq6DL65Qh5354S5A7NK1QavwfHBc853WQ4Jc22kFRKYinLneXtsRmtTJKYgvarFdoAbX",
  "key20": "AKY8DEmFnusGnHfDsVjzM1YD7qjagoCrg9bhAqMvSJgq1iZnP9KgpynrUVHu9FRHfrKQmSnYaoFGdA4ykCPER1N",
  "key21": "3gRDa7FKv199BbHzKCivbAd41NJScv2DnSvYCZRKhiLfU9cpJWE1ZvaDztYToikoMTe5CMLLttLD1aJBdCrRE7Cz",
  "key22": "2YCiyVMd8shrYCvKM32ah9GDq82Bz3AMAbJPXAkqWFaZ7bFssVU8pTFBXvUwwJBNAqHvuGJijPu4sQrrUPA8Xtx4",
  "key23": "4gePF6AYPKNbQSJqwjKeRHuhjsXAg6mkdAWvfAxU4Y5iswbVa2p7g8kejdABLe9iPiWyQAjo2pLFZYFLRS1VvaX5",
  "key24": "4eD55ncHbrPUhzXhLUiWAuNzksC8JAicKzKeUTPwkKUbTVLnHC39PDTKt8bcfQbr57RJTLWPdc6LY1c1r8CnmTWt",
  "key25": "jrrknFjGYBQkSjcRPtEqkXnWrBNLw6gXNV1EoCVT9dQAfhijTEtfavsvx5ZVVvtjeQsbcACPkFBaQewjQV4ritn",
  "key26": "47rWHbF8x4GsKu2868F34L5J4BGEbemSUHTwbYC99UmWp9z5NPaWqLWHFXebUKdwNayeZr5RQ4oxm1P7uLsVHk7k",
  "key27": "3F98q37WmKpywPtcpi4zqyQijui9TWVzKUzsVFf6Zix7111qZjCFCA6TSkhrPRpHWtpjZjxohHJVSqab7jg5Ko6y",
  "key28": "2vJdm9nC2CHFfqYBMREFrMHZXiaLXZ23eszh2mnZdwPmPioUCm1mECMyQgi6NuregDzXqtF71722XSJ1TbVoPCe8",
  "key29": "k3BXLc822MgfX1qJkBfrdbMb2nNoMCBMZGY5u1vwPPkddtssdSxzLdbzstg8H4TqZZ9dEoMGuM3sN5sLjgWJQZE",
  "key30": "3i6GqmUPyTGr82TzFoKoMXSiFMmfutLR6syBRqV1BSii1D7TUHPG4Awa1ZNvtpdsp7iXn5n2iYHRqKyx1JGM7LDG",
  "key31": "2yw4QfRCntNWcEEsfBHJZfQqvyHT28epsqLPPETZ8wrpUdwGLRZsG4rTfzN4Aa5s1WfAUhctYfMjXoEC7JvgBxzY",
  "key32": "5RbvpqTUPkk5z1apRDBGJDaqwvX8fZbiXom5wKLnuEg1v11timw7AHdekux6TMyqG8sKKSGxdV2BJratxh87F9aC",
  "key33": "4Y1VQdNLaQhS3aZUey3Q7EzD1SyTLsdBKDyb9f3oGRYjidhAhkHxLXBdHv81TaUU3wpKb3PJkUcYrstRTrdKJ8mV",
  "key34": "2M4qL4S1RoQUmjGJCJTShVRs4TAZM8R7298fNCt3gvBcduj57DnPtdHr8GGbK4i35mJ3cxkP8jyMcxWERGfUqqZ7",
  "key35": "5XEeCLqGWx26VTmgkyUiZvAywHd6BWZEjCQwfr9519LzRm2AmCxfy6kYBdCKaW76T2An5qSHRMwiRuegWgpFQR12",
  "key36": "4kfrJEguGvt7rWnDYK9Lnb2ZPYHrgUgCHxjFfpPPqQ78nZw4tZ4fCSpGHjz4qWKKxgMKiVSgdeKZV2w7bPh2TKDY",
  "key37": "5zJf7A2oVz6DVr8cmGTTs7yqWQKZjnhUrqKkfNnEJc2GzuTQvJk9juGPTEj72Goit22sJphhsys94roxL54n7s6W",
  "key38": "2ULphUQCfpukwmSLrHe8y68HaQ4JqydBmvCBtsikgaVactjkCwVDa2dPxRtB2kr4PFVrZrJ4f2cvxK7jryddV28h",
  "key39": "4k5M4BZ9W6S1k9ZxEWBK87M23rdACDhWrVeySjrWrSjzF2rZfS3SaahbzTrrChDxvjfnsgAvVSrQNbv7GuYzMkuU"
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
