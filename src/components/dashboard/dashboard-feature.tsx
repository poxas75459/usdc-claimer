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
    "3mGSapkwZ66PGn9gFfMr2Q7MWgwfXQsu4X1tK24HVhhnCmVDTG87bQDwMas3JJ1ta5dZ8zUGeN4eVZbhEpqAaSQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EoJ7ZsC2nQ6RZa4eW3heXFFNXBZbJZTQVgN6DgAhKnJndEMoNGBEgwGpENee56m914sUJbk1rMLbBPp9HQ4roqE",
  "key1": "2i5ZHrPwUbHot4nPduDqg2AcjZFPzwBCWpcSFUcJ4wuZHpyzeed6PCPcUAi65WQjGscVRk7Brw9s3T9MkjcPGL8o",
  "key2": "3Y6NC5VwGGmiHLKmQR7pF7VyCsGQTi332MiH8WeGXHG1sMCBvM5JdzCYM7YmzZGdWA1MUTPsHkhPW4y6TA1AEDgV",
  "key3": "4cuStJy9JGePwKCgoAbjbfhmkUXbSrdXmhtuTvTP3Vk6mZEcuMLvz3iK8Awve1D4kAGhtyBkXzZrLMYb4Rer9Yd1",
  "key4": "3Empbt1dyJa9oAGJfCmTroKJCS1ZzdzWb9doskaorvyGZMcCHnnCRQCGWWj2soTrFeYtWw9Hd8uzj38KKXiJVWnx",
  "key5": "NSThs26HKsZfBtY9S3NGkRDmvCWVum5dguPQ6bfreLjiyRGbCaz5ftHLRqFBLnJwMD5QfuaNBuSrhm7fpEk2RU2",
  "key6": "5azVgpCNK2okXKofxqoxJisEjFot1h7qgMAc7A9Kqg5yaeZ6nTM9ikVxYsqBB16s5XEpMxL451ggGTGBNCTXaLWm",
  "key7": "3VTCo5tuW5CuRbNsW61dLaGpBEPQN5UJPwZ7Mu5HcBrQb9Y1XE2SBMmTfobMonnomNhcyCXp173XST9ks2FRWaKq",
  "key8": "5FGvYjmdJGCPSbBztPWS4or3VfhCGVbtVAHEKCLucpyUrkHr76bzHXJj8cAdqKpVAbtxVgp2Y8ra2FLbB26aA2Rs",
  "key9": "2FM8VNKAGQE1KY8AjmCBqwVK7s4GUNg5JwunBLPdaAaWW5EbamtUGm8qetcqQgFWgxwvf7ogQVGcGFzpkt28nmyT",
  "key10": "22XkHTCwyKrGxquU7ZT7dRzo4GVBY7yCiCd6m2SCxtAczHbFH6T3WL1ft6nK4mWyFuHMZj1Z22VvrZ79yKi4AQqx",
  "key11": "2HhYgTcpesbyGXD1qPNY97tMNxoyaBUbYfZHhSyM5siC9KqKMFKcURuqM5VxYovcSevtKAGWygWX1UbZhZywp3ro",
  "key12": "4zX745g6StRbzroZB1EFgGnmZuZ7cyqGFU3Y2K22NbbE2P14mYD187Nqiv2GZNfYEL9x5ZS5w4bwufKFs9jn56f2",
  "key13": "4hTiqFWZrUy7dLYz5sHC5gJu1NCHaJ4CcSqDVU1Bx2jwp3aSEDSPjLksQtDa14D1Gmwk8PZmqmzkbybW5zsRfHUV",
  "key14": "3C6U2rpVRJvxyf8uMHwk5xWYnjyyTaviADPVKoTp7XzJnCLTqtNajzSBfpcQKUo1RP9ypsyJw7GAnP4sxvzSJjAq",
  "key15": "2UvAC8PKMTeE8KCFxpAwJyYuXAbxFivN63PksPhz7aXq22JfEjJ1Ye811MmTotKCGiH7yLJhKja2dJeFKs921WD2",
  "key16": "275f8Pi3AH4apG64KC8pguYJLD5SREbXjbFmCCmvhYAD5zYbqTeqNX5bJD1nSCAUHAAT623hW1mJaXbfgmpREFym",
  "key17": "26BSUCfJrQaFC2vyL747XZxppdnWytfF5PGcfHzEsPAYktkz8yVEFhSRzbjAGHHJWnTStoDvuuAT9UFYzYC9TgJv",
  "key18": "29KBzZ1GJe4xxM6zeZZd8NFF3ycehjZCGbhPPLBWqEQkuGFZ71m6nBmui7BoVTNxP1GmSy75XfUHzq9gd7vLhzvk",
  "key19": "5xEB5HbSfe266bYA5MpJUV9cxirrTXbkfBEK5w6ELtr9DhVPSAsp6Gbi94wkRDEU4RX5cP4FWq2VsTMHayTVPAbp",
  "key20": "22T3PWxTK7kJSLBTTGo3RHUUpYtonB8QwJarkv7C8wG5R8F7fmpXNt6yDr6p3PUQXiKJaSstdyw1rSiZiquw2ywb",
  "key21": "2Bqguft49MoSvvir7aCTwPSAWeGABJHmkWZ37rJjfX8pJo4JZ5g1D9UrEuHkFz5wHxX8owUBTKXJDfXgG7hDoXFc",
  "key22": "2YyGkXYVwhrQER1SdmXFoVbE1v7VGMG81AvC2v9ewU5i59S6SPUUZUTmrBKswQWF1yK7BfAkBMTLo3qoTGFS3kLZ",
  "key23": "21MhUQPE1H2wcfY4WD5wPeFDPukCJFFcF31pj8Xyz3jzaXo1gPJr4FF3CQMTSxpZgtHJXzGCjVnVjVw4E9zUFpPn",
  "key24": "492LPTjV2DB8z8GSeKkJmv9vUqknbSCF3HxYq6CxvuN8yCPnfxDdgbaTvUYcwfWmTTAkfqFhHvHbGdUUC9mTXDzM",
  "key25": "eBgSX3VoSY7KfxmqgStX7AUB6NLUZu8HQntjggcFStwc6GbUQNz9VMxbB6w1eDU7FP9Pw3arpS2RcA3GhrGV2Pd",
  "key26": "5GGVcK4niFUwWn9uMAaKWvcSQcg4pU7JiPZqyNZjSGh5E93LrR4xnW6YVv43PmPv6Z77fDUPaGxjc6zYY2khKcEL",
  "key27": "hxcztXRX4Lp6UrFMPnDCb7UrqtAvYsrKexyTggFyP2pysQ3skcz6oVDf9B6U4tk6kK4kP8hP5fB2jyqVZYJSr14",
  "key28": "4C2LpD6LgkA9mGrpAiXgETGNNBzZpwCzfYKPf5gWhxD4nAfn5eaoqTN7tKEujtFib4zSThnCw3Pfc4uThKCSgFBF",
  "key29": "5FX5JeciChJvgEsYPirdK2Q9URKSxGZniJYoHqFBm6U6E5M9zEfLQuLHVHUVujFikppjvdyMFgJQBBicGJJsrKnH",
  "key30": "27LZ6Fo6be7ZHWkqS9gFfBAqC18UH8eD8rzoxkf2UTzjBjrHmT8ufyuanLGhVwpw4xYnijyYJa5AgqvWELsGtQpq",
  "key31": "KmujbMbTX5Z3MZUtL3Qm5ZYJ8BKywyHLRFEWXhtbK6qP5XUbYdA1yUXxrh7jz6B9yoP3r31vocaXMWbyRUu283u",
  "key32": "5HuCMBzGp9rMwwzAAB3fmXAqYsa3feBifh1eSdkhFNYYNGKALvEmcGQYPm8bGzygGr8ngwWmkAwMceePp3UokX3v",
  "key33": "5AEStSVMok3ZiMNjrTWpjfNSi2CybrQtUTbGsetEQT7pVP5LJamxsJvpfNRfk76pTs3yfbFThCoudepjxq5yCfVM",
  "key34": "4ZF2sUouw3bsTFnZorjfEDkVHiYUQ3mP2DZNoSSajrjqCWRjxr32y2Px4koXFTyVJiZAcLuVFrYgwCz4oUVhDipQ"
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
