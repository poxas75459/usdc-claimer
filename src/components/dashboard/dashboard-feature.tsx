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
    "3H4ZACEFy2VRmLgrdgy2Sm8S8nrhuAkt1fNwivwTHeWQYNKMCfiRB59PN3sN8BEfmwPPvEGoJTnEr7R1Ct5kocuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gXyRDYLmivrdQnhy9T4S1NXyCXVrRYjHZvqj9a1RybePmWxj1y5BEJrsYeUTQqyYESycfCusSAQMZaziDUnBvjT",
  "key1": "4H9HDtxVCiQQeRHhyf9ib5EXAgZ4wzpnAXAM87CRSspdwLTQYf1v2ZudPSYgeyRNydRe6tT84FxiTAEtGhfSN13Y",
  "key2": "5iDSKSjA1Mp3ep9SUuVn7Cdw2nQRCTZaVtL8PEHXEmAHBrdvzNQmUQBZS6ukjFuupAajaGYCf1dRq89yh9XpXfBb",
  "key3": "5ZggtY8vn9GYAus8NoqF8fu5RKiPiQoMGv28rwG8han4425yEQJXWxLaf2x18ZDojvHt931pEKtofodGGG1HdEdS",
  "key4": "3K4hMq5eYPDYtdUsb4d7dnbQmU4QYQUbhYz3PLe1zG2U2Jkw7pCjDd3yz8nJDtpv9z5GSaLL7zELuiQCupBi5ja4",
  "key5": "23M6XUCYy21nxti7rqF6Sp5XLfY2AzRcP2ivsnQd1iLZpCMDpaBTmnS1tRMKw1FriKuBgN77t6dtQFYCbRu8kHvy",
  "key6": "4kszzVJpBe1kLD4H7Te9R8RtXaw5xxocD6WVdSaeGynLVRRSdbMeLSukA6iN7utCKNxwvkqu4VJbR2mkSTb7SXXs",
  "key7": "2gJGd9Pkqk7fWFsKG3NbB1jUie1JATLnCQ8odXgSYVD8fWJQviiVeDmFqVK4DNQmPXw1WN5dJo5NPMFXi7NQRQf3",
  "key8": "5HgyZ3jVQ7hYJ11m5prVqhKKkggmMcgZMwHLMX4DrR4xsopThjAosrxtzqaLoq9pmjcPpJ6TseyG9pVmKkTrP1mt",
  "key9": "3rnoh8YsUogSUA5DtgAziFnDFCVUnvkP4uwujTNGHWKPrLgyXzYUW5f8npLKdbTbm1kj9DVgipwdAVuzqAajysxw",
  "key10": "5rmhUrAJTgXCiuHSJBycCHfHwM3DiqM9JCm8nQPFrDzkBbGMyivED1GAxaaA11wFvp5ZB5Ha8j6oooiMYgW9C8GV",
  "key11": "4SHaZbvUWv7KMzAxK2DfjfLu2P7zquyvqMtikYiV9AgnzrojrkdX7P3KsREiQ5ozJPDMgGSa88q5wzCNYJMSkpLH",
  "key12": "HyZW6pJFLZiiSSDQEKU5jPneGJKH4mhJagcb5qhU82X4NZC5tiqyGWYGMuAmyqjKbHcS2C2fH2fjYkxH55LW6Mb",
  "key13": "2mPUHhKm3hNkhMwnPkAaGw1aJxN9YMzWNmpHTNyHLtmiatfboAerzdjw5kQGPmRWM4HhvpehoA4FyT58gMZ7oFhM",
  "key14": "BZjnH2xC1QAji6fMRdfBUCg9pJkxdVHKwcgcwBFYcxq3nGBdjhYCGMWwzPF1MnxdDxKxG1zV2JkBiYAyarkzxyZ",
  "key15": "3K6fwNnLMv9DmE3PXisT8BKV9t42C4eVo8djVxUCARoNxKchuAeoTxCGpwgTUYVyzd9MWu47PG2GAwQhTskQThU9",
  "key16": "41jDbWT1b7HYfT7KXkrL13ARbnsPNhVqxjYPy8VeKKQoVpJr6FCUBNhTT3mrA2jJmu8wy1YPk2TmYEbWFy9ujpTM",
  "key17": "9CaFdYwDHWQJEG43HNUBbpwv5NxKtBA18HLqrqThs5gttDZsyosjY8WjFWw6bt5ArYiKjMcftmKsDaWpiadY4zP",
  "key18": "4JgRZLDpDueoNjWMQa3TRLfjzdMoiYSX6XiXkJkbxs8tbnkgfYHpjjRg6ezqiYV1N7uq4NKrpnmjMmz5mUNYnnjZ",
  "key19": "37jukv1znz3WNxucPFpBF4WqyVwtBD4KMZoP4oQ52LcLPiKXW8JERRbE71p3DUFzaM9ep7hdUamkXjsGdZP7SdUr",
  "key20": "z2tkVcYzRWBZdGMpuQuwvNnpAVeB8J3sUGxd5QSbTspCXXgAzGJybzkqwqqwDXnpRbMoq5TTg5kyoJy8zbUtRrw",
  "key21": "4z5PEK5JEceJ9X6Dqa6NtNMcLWDbXqSj8GCX8ZHfyVyXCc4UBLxh3FMxCaY1wjpfP8hZmwfaU9B1UKrk9Gshf3Qx",
  "key22": "YptqVinV3xojemrYh9tU6jpPsuVaMnEQZavNwFZAdgUPnmmDuLWsvzxKPDFD1EF7DnFGxsW8eR7FK96VbjEcSL7",
  "key23": "4bKykUxphrZDkBFwgkqw6Xu81fEymW5i8KbUQbgckWfr4Wv24wp4vcn23ikauQeWvJET82n8oDziggoHq46hPWzG",
  "key24": "3eg1pm6PPGscNujvBfMG5UbxtSu2Fesn875eJykWnVXiV9yH6ThKFz3uHsimYjYHP2AYjTKkKrfjCiHV8kH4hZUz",
  "key25": "7TDz7BM37isjLysJrtkRHb1oo9eTPJtacR561axjfCF8ydj5cJob5e4fkjbizrcakzxMn4K3HLeKcMUwtRjX1o6",
  "key26": "4SFkUxAEgsNyK5fVhhwK4hv8Do8EGfxBRweuGVSFrE6gNbo9EF2engKumoeNBQvAtCaHtn3Z6WbRTd1brSAThorR",
  "key27": "mZhcsQZLqbEyWdcDL6ZkG9fD4rC8ijwjsEbWQXGfjpF86FqqdCXQfyQU9LBhTQiXmtiipjLX4CZ8CSZoVKtNJ8Z",
  "key28": "5ir97j3mV6CRowyFcH6GCjTPSLgEEUSTJZiPK6pCdPuTZ8oYWyeDdDURmsXar3yreRWpVmvnmziWRSLcnBjd4B26",
  "key29": "yvUre9dAZT3poDtqnSum3WsQp7PmFqQCcu48Uym8vtG6sr5EJNtzPPtfLM43eXFHztBxdLgHVU6okrHY47yKc6c",
  "key30": "4wSJNqz9yKfERT7kNdHnRfAwpj2cQeLWtgntjoifdKgsqAAY6ADZuuDvNxQ3nNo7u6RWjcXnfD2fapfCabPLpunu",
  "key31": "2wv5iq6EfBvFCpHwEwjwZh1ZSjiykVqm8XTA2D1y6akuPVwDgfRHgSb17sDGrD7m2fT3jni22U81VV5dqnw3hSGU"
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
