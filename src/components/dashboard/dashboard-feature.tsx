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
    "5p5zsUt4RwAH5mJwLzdXfqaeLcFv2g5BvnY2CVfBcqWCLCoGmJhnGKg6HS1udQJ9s5UfkD9j4nfxf8NvxapbEXaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJ1TKCrexQx4UQMC4Fv8KSDvBoeus8pLF2bQiTCqeP7upQ4EKcU5JevKqZ1fLHQ1VsHZrcbYo2iwgecoGYKNzLm",
  "key1": "2CigXReY5KcVpyVurpaPmYXCwQxPyqvn8JmqMr4QZnFSR1rsJ1iSMWmk8LfBMUHtNiJB71pUvheBz2dhqb5eCSMc",
  "key2": "bbuCubsAS44H9RYviVguSe3yYCWf8NyEpNuYgcV1WsitvTfsUGwR91u5fLUFfFAwYNWjxB9Ckjk2xTqdTLLBobo",
  "key3": "4Pr6LCa5yxRaQykokreJzS23wfeKHTdnZWGY1ABpWgq1X993MFuNg1j4hMPDFac6MxAA1bYvLdWKsDpDkFjCyRBv",
  "key4": "4wheN5KX7NuBH9H7gXfDtcss56mRw1GcAaKamxzVKNcoi343w8VLNMAzFjhxA8y9M4uVjdL5vHyyN7AgzPFnPLFC",
  "key5": "2cS9oS29XvK7bz9GpZzMWL3noWC536pjhgn9rBuycCBZnE2YYfj1zEZPDhmTb1bW2VRRQDMY2qDsvGRtgrx4C2c3",
  "key6": "44hySuFSUoYbC116EviY2qNDHKGDmtMSym85F7avYYxSc52eBpsdRxZ2wF23q69PWaUGhgo2g4QPQz3U8UYomr2Y",
  "key7": "5FZJrsuqTVsnXUWmLum5snESr34sthPeGCHvcE7TyCCvn1ZojkUPujK3Zv48hr5NHYf9wtVfK5RFeQy3PHwz7iFG",
  "key8": "4FMd4hFSUaBqpCqX295izV2gwwnaGfnd2GcA7T63CoGYVhohPrrt1AdsU1AwN37xhFijxq4s2RZ6weXzhww2uhZj",
  "key9": "2UfieRPYjXGawE9fMbWuuLrHU4Gr8TzqBNtX7E4udGNLi2cTeNDKybjxfJMfZ4X6aLE9Qz6N5VygRua55cNni3Hx",
  "key10": "3UYo41ECtyh7uKcJuH4Qxmsb4AGqgc1ZZnUxbXKHPi2BoDb88xZ4Ys3tV4Y9MoJpgJkXAqLa1srGw8ZuWEf5RMC5",
  "key11": "3qbS26xLKevuqQzM6LT1LaMaht1BbEW2hx4ymyiqkRBC73TMAqqdiszTkKv5n7vkoDAqg1nVdrUQmDnZnCcEh8Vp",
  "key12": "26sF5rkvvgAZQgWus9uwZ97Xvqv2s1GMbZbHbbe7hWcJDKAdZud6UqBnz3Avi6dsehbs8eBXAREBE9XxBhWt9BWC",
  "key13": "3VaqA2eQkY7B1HmkRYP6H8Rut3x8ZK46UmuUe3WSWAZ1iNvDnDoxCs6eM2D1qBZ1JTZ5tTr69Z5yC3rurCRFo2n5",
  "key14": "5LscjozLMXL6qVEMBrWMp7ogZksoTpnHmXSX64HoxV9gniGhdDSb4TfMUDg2CjTsiNKgMocuPBstvbXwSu1QHXet",
  "key15": "4jQNixtN4CNLvibohh2X2AZ9m5m1KoFzd5srkL8FB2x3CmAiH16mgwqMSC3St425YdKkLkY8iyMoVKJ7DVHD4A7U",
  "key16": "WarnuwH135cLA8AWQRsdCDnad1SQNVyUobg1xUJqYBGt5b9E389HiKJdnjfWcwTHHUzxV33bPcqdECwBXrtUWqo",
  "key17": "4byKHxNUZdyjqSL83Wjk2LyaBcPvc9zzzD9oDqMutHbihe8fK1vqixiKFhrBmXLwaXitP1GB4szfcctbGHHnNBjB",
  "key18": "2twovdB8QTcikBuEb6iuHHHR1f3ogAge7NLwLaNATL8T8pHq9jQaPy1ee9qs7VJiga2Ms1quWxNyZUMyv34ttnMu",
  "key19": "2Wcjhyhr31CdS2GVfZBPni62NviqgSBwKtouJXDqy2VNQvBtRtNjw4rKre9GWJL6oLo4MYWAJPbLNyX78D9hNtz9",
  "key20": "7qSY95j8mq16rHxAQKiV29Xr5ZNAarQ5FwSozw6Q8H2qw61tdQJDPR1jdGUfHY4N3mEx1VjmXb9FxCG495ZuuX7",
  "key21": "61qJLyJQxavtNWGoXEXXbfLXc6eW53wPQU8tHpZAaaRUqS3a7yu3UKwzSMMwgA3bLFseJNqUvu8e8ESi6MjPRoUD",
  "key22": "4CXCTnhHWTNbmChmRTQgtdo29HBmKEVJQPBeG452zYk6DQg4pcLFm4sHLbLz3rr4qBNhwapzmaEPM2TBT8gkYW8j",
  "key23": "2BEMrj7DhXKcb91E6Vni4q5LLgkrrW7gtGe744WYQ9wEFw8sNQmKWNQ5NYz3vPpqLCTtNVLL8TKG4Qii1cLPdBca",
  "key24": "35dKgob6YFkRLVZnCXZUJE8nkb5eSA3uVPiigJM6d14F6duLQZDsB1pXN7yVxbUJMLeUCrj7vsDLxecBSCxfY3ke",
  "key25": "5Xy8j4Rau1LZWc4LNnFT8wouvEr3xEBS6dYEHSWmyWuouGuq65FCnvnSs6pNz9x4w3FANajdgpuNywnbWGVYo8c3",
  "key26": "3AgM3zNGyiAVetrW49R4ZBQPZkMnooc2v8ZLV4VEXy9aiugojoTD48kQ9crmCbsWRZ1iNyu4pt9DGEtxshYwFYbX",
  "key27": "UNUuuqWZ6b9X6rTSJ4XhYS8irV13934ZjkyfoFe49urRYX5UGj5F3yKFBi4XSbtNciSrTfrRiWx2hnjobqM1fZB",
  "key28": "48rAjMJCkJQgN6d3z6Koye2uKAA8ymHYNR2mBmi4fJFbUHVugHEWE1nekHoFcznYBeZjLHBCWQzyeUY1nwdCYT3e",
  "key29": "4xUs4JA7Pr5cHMHfJoP3NsLjMC1ccHicvjwxrXpuC6KX4MJwSSh12PND9rdFtYrm9sw7hSaZXHm2WgVCURcnqUhD",
  "key30": "4P3ZUqEGnA9YPeNhymtmD3VE6d97KQuikRD3sWJDZA7dtmE54MmXTQkc4Z4NfG6FQQZMLBaWpn8AjwHXdA1NicZJ",
  "key31": "4ufRTwvN6UHipV9FkBHbJB8b9gKe9MNMBmzyoTT3WHzAw6b8vNXPJQ1pSmhaeYZuQF2pNscr5QxLqCGGGDJCdRjw",
  "key32": "4Tafk8SbewB18za7Ag2vvFWzSFMPZnQ5aSn1ZKfBd9v67wNm22XRhErD7cAzCRvk4s5H35fpG8Np1vLr2F6JK6AX",
  "key33": "3DQzsqJfW8ewzW3PAuphnHtRvQ3g5YTaWmfPEBJKXa1QQxNsHoiZyVFg5shRF4YWm4WDNRmynqRGrkKt3uXJS3ms",
  "key34": "21NEyd5w82geezuSLKXB5rWnToAGWFx5JLAiGqQigUyPx6duvP3HAqYX86ac6SwW6NdruQA2hVQJtfrgFhcCvn2F",
  "key35": "2PtGfLiBuPCY9bBopKQeqT937FpkD58pstBdKZYkjo9oW7HBLJBLBFAfsc1vPuUM9LWfy9TXH54wANQ1R45aygoM",
  "key36": "325cGJ7FbhoAgLiLMTAyPsQoeKBCnjXYURY5cEtYGDcBVAMJZRj8YDFUoZSVS4noKVtBWvjSz48XutqNx7395F5W",
  "key37": "61PLpWwNbXDmaofrwCuewbujPMXvjpv3khKWPAWpwdRXo2fBcSYNpMdztsUTUJU7DmRwmgHcC29YtF6jA1Dad5pV",
  "key38": "4WUSK1763X28i7n9pDbJs893YKbRMjGEqCcnHo72GzbVaTqNiHL57x53XmoQR98XqgwWdwAHawAqv4N1AdMENPGP",
  "key39": "4WAhgBX9qAqQbjp1mBzN4r6G6QHcvSTFejbcF1ZrNEKrpYoozbCm9r9HxV9XZrjjk8rgQhgRBfd1FDFsJEji5YBh",
  "key40": "qLFBNnfNqQFYyswp2JBnPxUMq2qNCDZFTdZ1PerLTWeAoCbrJd4rrz7rGiaNhgtkWfACewqXtAefqYR3ZyioyfD"
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
