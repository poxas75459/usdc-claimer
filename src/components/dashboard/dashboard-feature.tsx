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
    "3RHYFcTwvMkAs5zt24cyBZeY5Du1CXfCn3D38U9yNLC89DQz9uN7gevsYCBYyLWGmWkST5cQhdoxBZYPS1mTYXJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26KkYMVVXCkTAZiFMfGaYqjf2DHbpechhzK4H7733XEaefF31VZpSriVrdfDhaLTDfBuFmzVU8KViVK4GEahAije",
  "key1": "2jQiL6a79MaPnZeCk46HHUNqgHFFCrypR1iY1xwTLBCgbeTVwT8QHCz71VhsYxGDWkG8HyEyCpvF4xrG2uFK7KWm",
  "key2": "HbEEVyPGBt5pi9MXmqnP3HurtZZ8NKEAG24wszqpwzXoRYKADKy4ihnGnxNNVMJr1LTPS4mNzHbdjBGm9vvWshw",
  "key3": "67P7DseXWWLQQ4xDFNvoSXcWNefefn4xNsEsqvb4t4PckpTDLT8W6nQ6gxhAfd8HxMe8Q4nBfx1WzNoaEyWrECun",
  "key4": "4SZaGczrAF89yxrbr6rNPkwMLao36UgNTz2eXZUpV6TznwXZakDyz7JUarGRq3rRuyLFDij41bA4UqWH23Ceu2a1",
  "key5": "3Z3q9e3vjGaSJmQRbKJmHaeehCrUxd8X3fV82My4yUUhs3fA6R9WCrBEuSkY2cXDexLaW9Qc5esNefrQc4yriGXr",
  "key6": "5vvPFfyAgorGQH171YJ2csfAVWjWM3bDdbxJNWWd31C9tmLnvNEB8ZvzQ3kPkWVCrNLvuHfhUZBERU1oxx2qWEzz",
  "key7": "4PMXVAntNyMbrW7ynKwkJgz2eyfvKtwDPSS3ssW6snnxFTuPDLUjyGB844MK5mMzh7KSfytS1UE2dsfwyjyi6ZGe",
  "key8": "ZDUCvwgDQ6jcRnYzofR9MAH46wv2PoKbDexMtz1tTpLX3X1W6D7TPjckFvFbRCxmumFVPqyBLw1LaUy71xACz6M",
  "key9": "3Gg9HqeSLsMJnMX1VX7cVPzF97VhjwCato88wRs2PhbZoxBEQDGuuhb5VmSfvGNbNvSqxaxaGCckQqVbzd46djuH",
  "key10": "zwvGrzqruRcqZ3mFKiLcNSmkCuycMx2TPqshhSw1QBeasGBoL3y6iwQAXxXg2uervte4sVwzdvUYxZC3AQpy4ZC",
  "key11": "2JcYqFRoJWk34uS3YEHnjaStFWCNuQRs6n6XN1mouTCa8hBam2x2KFLTtTu9hZ4227fAAWHLqmo1xHYnYMQ8Ec5L",
  "key12": "4ydFDnQNW674CVEFWYC9BtC9dd9jA9R3gLxfpybHBBEqrHng5g7N9A9wUuVLuDFRPdFQyttxNV6b2J1dHbm7syEH",
  "key13": "5A32ggS71dH2MUd121xT9FvqgTME9QKKANCZ3axBhd8PVnaLsjWtC6r5NxkuUrYRQXdJJE7VNdAEihWE7C2oXJfU",
  "key14": "4rF8zu442zXN4p6rguwzBnU6SJRowz7zvehv8JEQs9pNAWpF84AXa6QQxKYUXjffyoYhbaf7KTe3ViaodAU1enfA",
  "key15": "2KyRYQAjQz1kGa5NSt7CbNumcrUVwAnhrSg34EkofmM53bz2mdmwxX2STc3armh2yzwbfpPK7bFgGwFN1HxUTbTA",
  "key16": "kGuDN4fPVwFG99NQywdsNyzW49qSgEQmeUhjE5mZpfS4zfrk8UAohZei2fLzetBSS8Vj2YeR6nRfQ8aBUPAr3tH",
  "key17": "3YP7SFytyw7frvzFnkgNdqXmSKCNQr4qmNnd7v2MHvv6yAuJ4qmHRb9Yrs4SAYeffPY5jfWkJJpWYcahqikmpN8k",
  "key18": "2mDXHRkLF5u8jSkioULCD6Pe1X5ehRGGxFJNNqTS9s1tVTEoQTXuooeJ9MZBpTu8As61fi12Vccvmks1miVyjHR1",
  "key19": "hvzsf85qkjaRuzejusXg47omcjMfHyY6y5KC22BphQCCrcTh3AXsrxC1B6Wcu6xYs7DnvmnFL5CQGGuN7gyzHYM",
  "key20": "HfmrsGPrxNHcEFQYooibax7AnxLSVBjU5DzAJz5HEAkVu2Zt7h4mdLDPiJLKNi4re1RtjsLEV61xTPEvKCoLpoC",
  "key21": "1qMXPWHkXJ3dDZEXjBhC42yMsSDVcwPVZpfTfAGrrijAiKqNJFXCeqQFAqAneG6AsnYUvdL9YKa4oMbBSEwyzYg",
  "key22": "5oZyq6aZcFh11cUGnTfEfHb7oD39734DMuWbRfEjWaENp5i84tZfghGVodCD7vRWsHe5vN22iocU5LgE27huQV5F",
  "key23": "38XfdxECTUkvd2JAgsEaY2nR6QbRnu13pobyJfyE9jee4bhQmjoeL3X9mj8L1SRyaEqtbsWhDkjB5k5tK1p6zH8K",
  "key24": "4NryR6bF8ecr1xwyWMb5Ly4kzN8chz95DapbL14A6wWjdCvLmym56W3dp62krzSrp6T3Rg8ir94cetaF72jtiSwn",
  "key25": "j2xNYB4p2jmw5P1QuSCGHSHn8Uq82yEyaB4Q2WrnD8CpwdjPs2VUj9sZ4ESE3XCiW7trU45wvnd4yD8uHxTu6Qj",
  "key26": "5W2LtY7enRrbJ4nikjV3wbMG5diLKSqRuU6PVG2NEh3sjNwm3vgNTnc5hT5a2ETmEw213o5qMzRuJNCP2LBvJubq",
  "key27": "25dY1GDS2UJkLc4qPs7LVpAsEdQBB4s7t2odsKMZv9T3fj25jfWWNDaMG7Nah5aPTdjZBFRTw3HG6ueHwTAf9Jyf",
  "key28": "55Jhn3vDNFUwk7D1Z9BjBSNR5XNkK4mzVAZst3dpj7aYwhGzcBsSvPftZi7bt5gLV68cKY4THTc6nRQVwL34JZ9Z",
  "key29": "3uXKb8Lf3VVtJmenYrwpkthJvk1Gjhe2s5gGNUiBcUk3vydsUvL8fchRooiZMFeqDhvXXWqyxcfz9r86q8qkhBfd",
  "key30": "3w7GuPoDt5ZQPnxhpzL4cGLBWo2TFAH6EQfEAdeM8XEuTKtR54zeXJ6hikkGBNCdxxNgYYkyofJEdN3zjRL3NQuL",
  "key31": "2javrigkqsfhkXVevPNmFLP7a4PUPyMnCVe1avWFHmPHWCQKr11cMCnYnNvXwT3nDCjR6uHTSw4ZdMt97ctK9LLL",
  "key32": "2dnx1NdbgPgffMiKCUutEFSx2k7F4QV8pHTZDNkueP1DGqfTDcvcunypjdJcZogHTSYQRQebFsoezVTP9W15pEuA",
  "key33": "Zc9q5Ya6uNXt8jiZtYt4wGgfyXPWzT2shzvwwi93hvxfaEPhbQprzjnTNqJEhn8h5qQdQYVgmixzUjhgK7eir2M",
  "key34": "XXFcFCTm6hGjifPmEfFD2ySNGsGTHN6XXbSQiiWojAoqsHbQ6ZEdLg5v9ACi7Vs5rqWe4MkTS8qmxmdj1w8bXM2",
  "key35": "q4vArSguCUuvtjYs3Rpxi9hdUMnHd7Lus1xktsNvnLJzwhTo97tXg4UN23UTdYYDEz8azTn3Gzq1LoUwe9aGBeg",
  "key36": "5hodPbpJrNqtpZ63KGbgX877Z9hYz3EWJgEnkzWoFnBxUfjZq6tuJgJZriMTC8YCvhkLvbDpwKGnhLFHPcmCNzE6",
  "key37": "Lia72YpkC71hSqJpcoX7M61fqcj1ML2MRvtJcue96NvCd6aMtb5YnqKcsjFKMhZsMchX8g8BN6S35HATt4rpsF2",
  "key38": "3qZHsp1AQHeetb9pVA1YWNS3jUzBWkA7y2b8ANPyaA6jHKDGk6iE2ESHrYHEhAaQxiStdsB3E13q5za2TkdxQhL5",
  "key39": "52w3gd1esFTNYQKqHRXqpoRiwrMBnC2KDEUAa5NEBi1UoHGjggjvGQv2ggVc7SRV5bf1jxvLaCRcWtYpc7rgiZHb",
  "key40": "57DhMcpzoZYhAFNDEku8wUHZcu5zg9teGKhK9WPPdMiAghZPYPS6xDLXPq2ZdEY5Fs9aMrxFX81SU2bwqG4DKB7X",
  "key41": "25UkdYvVPQ97GUb8FXUyF1MFqMeCwmnGxb3dDr75U2ndewp1BfGkjA6VUzAjYJCinjV5tq7LjX2gEG7o5WHEp6h9"
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
