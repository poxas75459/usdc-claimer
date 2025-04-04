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
    "2WVPR1uG7SKxMpRZi2MGdMQXdeJ6DTVDQsFJB5ijwvX9uf3d3MQQDrXkTwry46f1WjHzt9q2KiXgn6CAdkbVtPcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEybKZjUDUcp1NbYiobBkr4Tc81TjJxqBvMFcMXE5LUhwse19xxU46xbLP2aESNcR4zZhPLRZx7fTMH8PaUna9z",
  "key1": "2pjDURC4WRYGDC2Xg4Q8dH9b8PpQdFefzGWhbn7zmkNvYyrfxtcfKARfP3yG6D57zkiAvtuGhGai8obedNVM7byQ",
  "key2": "5bxfPiiL9FLBTDCobuXfEfpdMetAHz4RqDhtDzzTdjXHJhgeEg8jghaKZK2GeFU8JmxqqR8asXD4JRtEgyq3Wfv5",
  "key3": "3iRvqhLaVH9XHRABErfsqbiYPjASsMyZ842QSdhdmaajMapMmDqn8cXT2ju328vr1tRXcZnr5zPp4towAoe8Lbyy",
  "key4": "5nyv4NQuAT2Pr1QYZeesB7mkfMRfU1RFvxX3R13dXdMTdhLzoFEsZKSvAKPhNRbTC2Xi92wbKAmU7fqbNkJyuCXd",
  "key5": "bUaYMYY3CK7V4mnV4thNU43yAEeu1fprnuSpc2ZnfgsenhkuWsDiz5RwiC5TmdwiqZpaCXq1b5upSGJD8KtwjRY",
  "key6": "59zV6aLhULKxRkkNi3SYKNgkoKXejrAJ2dwE2u4rEMmcQucY5cLiQpDXk7r4vGV5ri8CULHj7rUkBfE8mffH3M6C",
  "key7": "5NSMtgitm8dfzUzwFwJQNxf8ZZkYqbhYao4KNtai5wHNH5EoJz86LjLvpEj4bHNoMWPAj9JQZk4M658EA58SiG2u",
  "key8": "gHhvGJwcNX7yM3N2PcZg4gev4FirBM9LBh4Ek2uU2q6jj99VaRG6rqXtyPDcM41Zz25KyKNv3Nfka7kQA2frRGU",
  "key9": "4MJix8atiuZW1TGx2tsVRxRrnqezCGXZscvFiaRxwSHYF82weDkBt9sLP95v8AwnETe3YENNNW32HqmSGrS1FcQT",
  "key10": "35g1BYFP2QgHk9JiSX9Y2GnsQyegtcQ7QsqaCySicPWyYqs274Jv17Ky7bsWdpjfXeQx1DNAKTZirSArPcVbVXDd",
  "key11": "3yhSgzLTrHfqxKQ6VTFxddV5hs68Q96iqXR3R7HFh2gduwwxE6VTnLn4qSZkyMWFgNE17YTCRpFSS1BtvPBbkGtf",
  "key12": "5bjwHu59An2viyRtFy6Wy7i2RTi8WFemKcEnaD4pEfMm89xfmuykCLRDoUjeoiwFC7xVSjQ9Dm2dqNjxN4q88YP5",
  "key13": "3marnc1swwx6zhzc7zUju2sCY3TLiXb5pBAD5q3obL3ZbP6onNt58WX3uAQwzFYeem2cyqgUvG5hQGpnbEQHhicG",
  "key14": "bGFHAQH9dTzN8VWYsamwY4hUSGdwrKoB97mvo53SxDZTp5VNmePVKMQBZxnsKibhuUjwDqvoB3sR3ZVxRHhND4H",
  "key15": "SDMFn8QqEzSWVwUgWXbMoJbQhURS9tBpdnVtS3WvGsFjsMkgQnK1TSreGPPfynXHnQ2o9VX8qdP5LYhAbj5qH1G",
  "key16": "349ZfGVadLfpCgj317fo6eyADPWVokgWGidmyREopYv162jRBkrg9GwgfMszpFg3GG2pmDBdX6PfMSBEaGQrqfF8",
  "key17": "4LPmMKM9ZoErCEqxSDxd1nJojovAPgBvmi2JtNNbXS3Rg2TpoHWaL6WNsop39T2PfMU351xw578vz1WznvFkft7u",
  "key18": "5dJWkaHzo1AhiFq4QRdiMyFggXhJbd1fzpKJHF2yDtXeuTcWD668njQawvy7oLN6NC6KWSSB786FX3qQdn2t6S4z",
  "key19": "5cbCd5szkopw8BjYnL291we9Zw4nLBGQuWKCwosNZALTwpET7nGCjZHwVTfc7bXcRgYjcNEP23cajLXgp6uqcTRr",
  "key20": "3nFtmXBpbZ4t2BL3eCTHkLUqYvZMMqQ1eko3m5r3yZhr6254J6xC8HiiXwbrdkh7Xi6C88fhR2NsrJPFT8RsB2Um",
  "key21": "4Kq8wi3mbgE2iTuKPPARsJz1P2LQ2L13VtdXLV6wUw5AQsQ8sckp7aSZ3o9CvM2mgZLTuHvH6heqFRBh69ruYJNG",
  "key22": "BN9wgTquSpAFDkbxi6Ac1iRRfiTKPFVB48i2vK1CYnziaU3cCUsHazVE9KpZZQHbC8KVPh6tsH15gjaaYRuHjua",
  "key23": "2cjRaK8iYdxmSSca4W77YpkrgYADQPif73MpZNhkttTdZ7LivWgio7sjCCu9WPu8nCCSoLYMwWX8Yc6qJE7zhjxq",
  "key24": "2z32kLsPFPEdGFo5RwfvhGZcXry3Zan9G73D8qphy4zqAKurSjAKYpqUDvovZubXoDHWveUHtaLgDvbt1aRnByve",
  "key25": "toePBWeQNdQg6NsfP3KDFbwZvG1F8rC284aqWjJxHPQMyGE7SQDt8QbdWs1UUHPf9gdiC7f4J9SyB5cJZghRKzH",
  "key26": "656tyrk1dHhnMYFUzMBzJahgWgP4cBrQ8yarfawNgL3bbBLE9QVqErwvTqEDaNSfJJr6jHuipqX1XmDKd9jcDPSF",
  "key27": "3vnzkV6NRfRj98B3zspe8VHDMTfPRAneHSsHXHqHAD9R3sEpXmPByCyXnEnKQ5juS5J6z2wZ3axo8dZBbNeKjEfU",
  "key28": "47qs6Cr7kMC9GJt34yXPHxYFewhayYJya6WeDtYUDMifAgEi6vtB6qHNwY1nRsvMPruj5js9Ypit5MSiW5Kf8PSG",
  "key29": "vsUe73pwHcK2bRNuwdnJf92ebaPyukPWyrMCYs2CaoyCWD8srEU2wah1oWzcoCJuU6zgu7HCbFJZR1rWCtTMcHs",
  "key30": "3YBQ2dwkrKtmacZR5e1JkyEAWRxHRdJ121qCDQG9NA6KM3fR8gL6f49Qe3dMerQSLfQMp4JQ5BRVtKDQdZWgq7Cq",
  "key31": "2oAVwPthjTZ5xzgQ3M5kqVUmPp6jQDTrH2wzaCrSUWESpquKiw7itPw681sQdqbr3xVzzVUDTeNsJvFzLrLoDBNs",
  "key32": "51pynWqCS6yMpaggZTeNKHkp8APcCszpto1zjCKC1KbqWmMhNodfL6RU9ZCQd5PjhhFoHWixPjCUJQC6WKJJF23D",
  "key33": "2DRLgzCre6G49HA2ducqvSmd5Go65xW4LcJG4zeLKFAXxRaNsJ316s1f7DCS3ea6kCnHUfG5LN4X5zNLLXKHfwzj",
  "key34": "3RZbWE5zoD8g5ieh9Y5ymTNx6DKSBTpguNBNW6zdovf6UNB8JsTnMKT6pXDCVYa2VgVk3r7jDJUV9XvQHTmfgYes",
  "key35": "sFBRjjCrRU7EMdKfgzNwTggcmjrF1hLLfDEyAKv1wvnzCrpHTvK1zMQLZkYp8JXpBNEbpRvvgT5MZaR2juQTeT6",
  "key36": "5wyUJ2Haa9PVVZduTwRBvDQ2Z7YhfSFVPXCnCW3QTy6irwQhGHJEfu4mphexPHhmDiUJQKZZZH5DRJYu3UtpdFjW",
  "key37": "2mUsX1XcYuASTgiwSMhbNNNPhkHpp88QNVGBeDQipjZ3J1kACqTg4cDsrSTpwuetBacnpiHwEQdgKcV4dQiRK4Pt",
  "key38": "UxVAUWKrDjVGp2PQFohJrPca5PejYbXcJt356rvWUhPB56LBKwj19HJC1KxfEuu5hB6WwVE7MYVNPPVk9mnyX81"
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
