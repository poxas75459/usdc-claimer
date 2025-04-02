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
    "4jz3vqvG4ktburK7Yt9W6Ca4ZShzPFXyXeQuJJkAURRnnvMsrdkWk66hmL62Fuvh1ktiMTDoiHjPp4cXY84DYVdS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gv8yUkyZU43kAVGmxN4Tsnttd4bvrVyoGLKaxgvSoDLiv45S8ZzgHbLk447GXSS8peqRtFtVLY8dU2BAR64uXC3",
  "key1": "2d8wJPzbneohnZfFtmtxhcRSwgf9sBR2gcp8fRwzGbGfHoUFGWGn3Z3k6f8Cj8KY2Z9UhQPbLupEM2KNrbWnxsDh",
  "key2": "4KkAxjdidFizU2MLRxfzcUJ6bepbyZP5ftdEN33qADGA8fZKhoeW4KjPhjb763VjrEbDZxw7WAckYXvQfeXkCeEK",
  "key3": "2nhwgYLS919NQGVnMu9x8GJdFg9wpsWy2F9wqFEq8G7GiZxsHPWRmjZYvHorxpJv5GHgUUzmEpwqCRDd3qE5yoB5",
  "key4": "2AJKvLKShhV7PDABj2SXSPjBXUVVqbrinozdiQkb2pgV3Qoo2LEYaQHzVjEXFGuN84vH6pdyRT2QmYj1q9fWGpPf",
  "key5": "yFiqocyKhQ7o3borWctZBcPd12dDTcJji3QnxQh4zZ3j8zTjquxMDVaWbXR1BpYhKKbPuoyxJtRrwNHTPeFtQBm",
  "key6": "3yNgnMDsLaZfKKuZ8DH4t9XpCekv9nAQACcutYexUDTimrZGC7YHi9L6MDR6gfNUkM7SsLrz9rZSVb3wMGxPRJeE",
  "key7": "4G5DW5Tt4mC7UxE7W8Ekez82AqR9RrZ88JLBwrMB3b6xeYyC6diDTkxB9Jdbi6rbJjCbcA47w39zHUe7pRgsKPFK",
  "key8": "2qVr5xXkqJd4zfz9gTtFmwkLRbaGh1d7q8JYJK2DoCu5jaQSm6utnbVRmpgNog14MvQqHux5jpkAbMsHkLn1ZxrS",
  "key9": "3u3ebYHDdxdj5nLR9f4vEyH9qPdhJ2hhpQ2xowcSyDQ5sXy6j3LMJDfq2dT7aFjNeLZ4zPz9ukag2stkNXAjC499",
  "key10": "5avUJ5hnwJUpzwaM6ZaedzVMRSaop4i5UGyoRoqKGXe2TYYr1XwdmcjEKcPNA2DTzwyGqv5ewLntBNApYuJAcKtd",
  "key11": "gY1rfgws1hYeuBkrgKeCnsAdRtDsphpLDnrHmF1MKhfARVSu6aGo7yGrNMb5Hi4ZzZiBR3p9Pc8Sp6CBQVDxcuR",
  "key12": "2bi26NGCcSwP4YcqexTCZ7KLmHWnSpqCkmoLo23DEMPx5umdJoRLerysQjLCUSXAyDeYqf9UyaezdosCdqtXSd3H",
  "key13": "59cxPjfMy5zM3aD5A6D1nPdYwQpdpSZ29kwXB4uLPwCtuXmASDMjoqhkA9NSjNybCvXP4Qsj72NLTfYYiU4e7SY8",
  "key14": "kBzn6B9xJMRPC61mAgcjwqbd9rDK1yUXGwa2JaEtu5tYuHQSEkdV5HaahDHyzCpVDrH4QSy757XXcMzwCvnsxfV",
  "key15": "4HRBD18YVv6NgEyCexGAmQMomG4kjuPgJu8x76F15uDzNx7dVocbqo7mQoxKSnaH8fQ9vCLmten6RS1r46ErruvC",
  "key16": "wjjMh4HycwXimSS8FKh96rNrXRcQrCF6XHwRSjdvCLEWK1V7nfDdbf32GeuSDr3WtYSZt3zCjV9TAgnw3fCHVcX",
  "key17": "3SAiFmDujNtjr38VqByPdqyktUECSqAAJALP6rGJKGYVvs7gLC9QCAmunHUPrsteASgrfBni8HTxMzcaA77CjH61",
  "key18": "jMBNLTf65cp5gBdb4SMxyV72v7pRdwD4qJKo6Pg6r98zxXAeFPZXBC2fbSkAKfz5GfPR53n9XXnPwBaqSjezTCT",
  "key19": "z363Qbq4YJd8mhY9Sc7dgnHkPWDuxNohGae3wG2KVSTmYV5ywZogsPLeX8zZJsYhRhVDKucyjxVMCVicQRkzY9y",
  "key20": "3HztjDL56ssjtiGwv5hp21hp3oXbAXLGskTrUpMssVaXmnUb5aZxr8G2X4zig8FG8eM6v5A5aQ6E23GuJbicithS",
  "key21": "5TfLfvDJXe4qYnCf8ZYxEfTTn2t3RM2JL1fJ6z7FaCVmBCk7z7c9dhqHSYvFrekh9mXW8ZodZTjmBh1M8ovkpWrQ",
  "key22": "5yYrGP37VtbCnYLENDWeQwwo6cFDLnfCdVtNeQ82EMC8xWzBXuVbMUnxP8iJikcRRxojykzHx8Hse3GqAuYEQ1YT",
  "key23": "5kQLao1PcDgceZaPBNZa7ruNHM94rjFC4m5JuNXt3uuGqVhK9DERdNp7ec1oVQ5Vq3WR6E8qaioisawsF69Hb4k1",
  "key24": "2sqnLWccjzJHETQcBQ6oPca8L5UMkXzX6hXXC177FwZZj1hpMejeRCMvFZn1Po3xe14fmtVhWF6jEYEbbdTQXifU"
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
