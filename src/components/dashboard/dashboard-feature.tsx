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
    "42NeLLv4KQ66XEW1gVwK5CcQ5qXkJ1k9nudmSeaX66HRK4iFSLhsJ2pRZGTxGhbxTzmFzS29BmzjrUPAbQaX9Dxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2irnfzTM9L4Sv7wjXsicJXe9EHg9phtChLzmAZnxM2xqjbZYf27beQq2HRx6vgjFnbRWFAnT7dJSTcjGLm32PboD",
  "key1": "aNwmTioYDf8ZjnfQSD9Dvry4AeW8eKePZ8Vjgj3j9WKJ7apTfo3iQDCcDWZ7Nz1hJKUBGENcsr5upr9diDHQ69G",
  "key2": "3KgM16AepYBrx8c2ro9LMj7ovfDEzumf4sMFGLzy8ppPBQE2oqyS8idNzjjA72WXQgCeBHzNvNk2BYhGCQMHoJD6",
  "key3": "5brukp4DxmPcgqzx2gCBwDF6UJiUT1T9hHG55QhKGaWM8cqMxwSjEuBXBhA3y5EgeN1DoEnJxtkPZzrgnk1UKMkM",
  "key4": "3UchWwrk5JWVfkinY7p3rcRCNCkukX329S28Mr8EFp3XUKo66LHP1CrcqmwEUQYhn3kmiZCJVs5irgySrDdLGbRZ",
  "key5": "66UJfSm1arjpQZ1AFy1qpSg1ZrVBPGVqgi7DM1z871GQP7y8c3KFvtKamvpe9GSW9ZBzBFPnA8mnkL8wWaHEjm49",
  "key6": "24pP9x3gfK56RWYsBhymhgiouavxN1NaAzdR1vDJ4nbDyX3gKE8PHX568PwDDWkwqrFHUAjaYov23pFBKRXRuekR",
  "key7": "n5ctHMzoZLhmDumWrkZSdQMaX7efVH6GWNFNUZuTgjWd9aWHRtdRSqmUkZ79vgRY53of4pqUcpfRfxqBR6FhpYP",
  "key8": "2n7vppEaXqNBYA3aCKNGx2RcKJa6PXvuWASWq7HjCUv1LzgxDb8k1ZTStmnHtjmFwFohULdkaB76xFn4u5ZXX92d",
  "key9": "23HK5mugzzAoCiYiVPr4NgFEpYrg7782JdxME3s7p3gKriDzzSLuehnVtQQfKbTQ2etZj6LLFgaR7e5V7DWtEEgJ",
  "key10": "M5C2ZkhJcaaDccS1RY8BNqhRnA82sYUDrr5d6xmGeTCBp5w4vsiDNeQwXf21n1szbYV38Ytfo2czWbtjTVnN9Hj",
  "key11": "3BUyoMTvFhvg2J7qyXCZpB26Jhb6zWqfooqXPdNiQWx2krJkpnGBf8QJDknZuqqtRWXHNwzATK492YYECBeTiW6S",
  "key12": "PeyzR7xVXYgxgLFhY1k8RsgpsfGP94JPjKC1i6GFeSRT3oLJoAfnLwQofgNCD8AQt2VP63xCo6iqrKkZjwrdMut",
  "key13": "5RW6dV72Mz7HrWidzLY4qKffVeT2AKEUf7FF3nhaUE8VtfQegHM5iob76CtcExeTZa5A4uUJ3AbSdurynnzsssmE",
  "key14": "4krPjNhUk9PX6PkrUHawZuiGvV9M8a1KW61jB7pHhbV39YwSXhnbvvQwwXvUQhVEquWZvSJ88wxvwUVoja2KV289",
  "key15": "qbX8PvrHHDoin3dLSfD1xbUF7nSyi6Jznj8CTQjfpb8bgU5EF1ALngAmHuzy5eKtngY3eGVsUC2EyptSsMJ7qAB",
  "key16": "HLSXoG1qAVc4L9XN3JDeBprw4C9CYy7CvhbGDyRsa9k5VjP4dhdZTkrkb4Rq6iSxYNr7VJUQS8s1i3hjYTTNPrk",
  "key17": "5su6zd8SPxoMmqwJXwds7ziNVhLqN1nSvEQ2kxTtyiEnAdEJdYh5XvPAtsiSL5ZvrHpXWZcT1th74RTfwv1YmsWb",
  "key18": "239EidB37dYLu8xmbhkxoujeaMNVA82virAo42eTTa2rjfGKEnptak8rgXutjsvrqCGsCDyg2fEZ41gRu3Eeq7FS",
  "key19": "35ZQSgRn3WDM7FtRCpsxqwsohfzUsaLMqxFgwyjrWAj69sovampSUEgTmGMhLeNvCaB7BrQTM9fJ7QTsKEU59yQU",
  "key20": "aPUApMpnixuh6XPcRhCT7pEKMYaR1dqveRcr31tvPTYxAW4LEGgWjKLF6VLS9iab5CkJcKvLwbFZEswVNBtXTxy",
  "key21": "am1RfyoeBkK1HL1b5qKySHUhhXrZ3hUTGo6wu6HW7zD8m3G4PZmrEf7p9KRXNbKEpefsrcXy9BVL5riroUzPSoi",
  "key22": "36AxC6DbgJiNNWNGC5TEdLu553idh31VXiiXzfDsbJf9epZtMw7GjxePGqWyVMKLgaQkBC2AKgbU5o298a8UrTuL",
  "key23": "25DFQo2JwqS5cR2GbPictygbQPJvY5dygtm6X5BjtwDw2eo9sZ6V72DcLRWqX6zQ76Bm3pCSwyziwJkd8XkMPJDs",
  "key24": "3XH5LwVtZtgK25oqDxhwiN2HcWRDfRsPYJAS5NptTQq6R1tRmsKjeJ63MDYJiirC7dtKHzuGZvDCpmYrJyFYBXbV",
  "key25": "5vAMZbTMGpZwV5shqUBAkH5EP5o62ExJEwNhW9jutnEBKS8UfSzbwCDc5qL7TVfCzERjNm3Go9UsF3oQtBvW3Giv",
  "key26": "53gADidn8Wu7cYsXxUKQvGqkATccPYs6m9ZumR3KX95AK2zRdVcJzSv291YY9Y79StwZdx9G8ybZcGcmgQD8TFSw",
  "key27": "YpR1JteTHnsxZSERd9CW3HrNaqNwb6j3y6i7ktdxzDyjvpsFarxBnAdcARHT3k5Vbt7re9YyMq5ZDH7KdQkkXVk"
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
