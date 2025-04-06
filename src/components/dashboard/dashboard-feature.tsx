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
    "44j6M6A8QoKpFj1nXJxJ8sDpnoitM9VEQVBBb83YfJftkj7Uy8pWwDXru6ib1zkbzEjF9WjyNkxKnWJVt8T5ixFr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43faAB7Lm517dmeWgHn8jNkDb6uqvDPSXA3UuPdHJSqfit2xEcJwiuWwHuVt63VZkPhSLNz9qeV3qx3baF3hDvtS",
  "key1": "41XGAUD3ymbkmbNDt2ZNvU339NKGziLakR8us36aDBHaekmQNVfH816seppWKTnxgDcFmiExeavkbez9C8sjUyoY",
  "key2": "D8UzjHftgffDL6RKRFQrM1i27dHKrReenoifdCvFg3x5V26hG2fzsu2V8t1MXSAvAnn4zCpvJ4UaKW4htfuYvTy",
  "key3": "3xHecQG7fWz5iRpC4hBmqPhRD52w5sKG8vtM8QcfyaTQYjysV7enPDjGtfsn4z2jbc4Qy5UmfFB6KmwwDJcNm4Hn",
  "key4": "YmExn2kbojupJbMuWVi6o8QU1wt4pEXTzt2nymJnAHGs5bKwswqgzvtxszEHugUzqS4XuEEJKUmL1N8Hf1S6kf6",
  "key5": "3h5u22pK2ncYpC11QyE2iqGPqdhzGugPZxYxsnjeKyG3rrc6p4FRAXVRn9Z1FtuB5KE2n7cmdQAv76uiuN2FX7Hs",
  "key6": "37oRJCveHi2pJe2AxZmxsrpr5snAZFoW3g7vNrNuxWEZLXv1HBeWqy4R6L3BSy6jok8ifsvGJHp9hWSBMuDmC8T5",
  "key7": "STsBQHAZKdzfKKVUnN16kNq6rBuQS93uo6wztHrJraDeRRTPNwCXkoW9LEcFTnskpEKF7BW4xqJkQESqwuXdPLr",
  "key8": "2APBakrkGmMjNs37mUT2dnBNVb8PgtW3YRZfeaVfFFR73PZ9t4mW3JAAh4UEhcdX1q8gxM1rAGysVL6Mvqk6BXcd",
  "key9": "2eDfVDkmQTqkvqg94ZGPt6fMJvhv6dr12QLEBwKsSrQkHbfTMThhvfKpAmTa6YG7G9hJ5Zpy8Y3NybsTnCMwZQpa",
  "key10": "3yMvuyakJ1uzTdJDxheUNnB2z3QDJhSYvNetcPATAreAuKNYQzgsW8HXfZBkpauWTkzDAJvBg8Lyc1R2hfnW9TBK",
  "key11": "5QUuHRAyNrURwNYKm8SLHbt8uJvKRshNfgBfHCDgKaZ8gCa5LT7TnABegSjvT3sQ3rZ5ctbsGvRfkgUJvE3ntjMZ",
  "key12": "eQrdNMUVcpDvrZqvgsStW8wrrMu8Y5Jm4xBCVnAjk3ywc2gAcih4hQmYWycELw4CRYyxuHMX37h8qBUWDzYgeEs",
  "key13": "3yBSQd58rVGyPMwKfvSKUTNQJB5rgBC93h5YyKLM2UUwFh42aprUfimKQMc7eScuDEq3deFGAE2fpuTYWncUWoXi",
  "key14": "zo5EifirD7ZLZ8tZ2UBYJGnp2FAqfPvUunJwBfpKdmekTxZGQ8aA2GTbRLoQenLzheKkfeTqmfwEudE1wDfX7sj",
  "key15": "45RuR2vzrxFZxVDGxn1ez9ZXH7LmYxbtPRoyP1tKMsp7SNaG4gPqMzWa9Kc2gdu8kSM9LsM3DTrT2U2ouBAjQx2b",
  "key16": "28J2Y3oeT6jJ8ChSPQ8NNkGk8YrrRVpkcKyb3WX4FfBwrQwDgXbGF1EWK83KyD1a5vvAWvWVtcveZZzrtHPN87AR",
  "key17": "ugt6uv7XDWezSSAZKCBxu53w1mSdAof881bzYwKFxfq7abqDZNvXQZqzgpahsnyCZ4uBUAv2DFm1kbsCzBN1XBW",
  "key18": "5WDrqVLw8o57zEjTxhyirfnNb1d5uLs1j8MAjJGtPdEEy4y68w5oDAYQ5UCxT3XFcd18nQyYk64gZdsN14ye6a4G",
  "key19": "5RQb8RwLiG4RvVX74GCGNe7zPmFZPEBmoGWPBV1paVqkRYh3AcBoxR3vnHiS8rZbkdf7CGehRxaBFq5ZzKSBNYKq",
  "key20": "475KNto7b2SjCrKDctEJ5sPx9U78BXDJz6vg2X4mmGBdhcpBwY329Z478LLsuPaLihTGsvTZ1yRAhKhe8rqyQ6S5",
  "key21": "2AFSdccrBEydsbS2BNw1EY1vnKSuSnNxgZ7nP7gq7scFhLUPXPfgNMHWMnBtTWp9uCUd7YWra63HPZ7n82DNdCjE",
  "key22": "2a8sZfXqjh4ewzBrK4j9AGoUJ7595Um2JZfhP64dheeMhugbRKdQ8iJ1GKokg2ZAf3e74c32kxR33iXqxNMUHD2N",
  "key23": "3FzD84Ech6a2JRn1qR39D49m3ZRJDQ41gcyBjhL2oZ3ExVwsKxsrmeXRoJwJBmp1RYDveDoGK2Pc8X8ZodM2zxPX",
  "key24": "4gd8C6My2zLMzvFrjDrrzQVNUFP4cJ2XAi26YjJWeJwpyHASmE9dnZBAggjeqCCbUaBtYd44ixWXaEv9n5kmHgcd",
  "key25": "5ceTbx5XR3gvdFhEzXwAUXvEgve7aWcH8HXo5avBbdQ5bDMKnwnvUx4eoe7rXoRDrSr2m4ZxtcWdC4Sw6msQE8tE",
  "key26": "LMmGiZHKHXPp4BssSpGfKMs7kF3wkE1pRewKaXikqaJ76v7QzBReH8Y7DuDM2aXYFFKBhK1fz9gbumjgokCQJQH",
  "key27": "3WE7VYsGkSBVr1CUUEQe3UP4PrkCBcYM5yDmqDC8XEdPjWNdN2QjfvjS6bb1cLNyoEEa7LmRW4QdBoPcUgUjYmTA",
  "key28": "2f8o3h8GVXGFMDvWa4Ubn6nPEk1Vf8nEXrHnZt9GkDhn2Q8yCRvn4PpcL2LGB7STeSiVkYNwsRWW6GCxxwuJVubN",
  "key29": "cvGGq87BadYiRRkqCUi51sxmh7orZ2XB6GWCgu9EE3GknDgvGuB8iSxtBnmStcf7f5us8k6K1Rxw2bRFcpsBvaW",
  "key30": "3X7a7cJX46U8cKTifLLXZi4rDwHingMVKm6JnTnexYScxoUknLEUZoXCodegvnQkrca9cBih9MJFJFkQRfDsq9Ej",
  "key31": "5XU4kBDMcXCWV8dTokW4R41ejU9X8pgGGpoLrnXNxb5XNiaiGPvXsaoskCko5jeoVLoh3H5EURBy92AtBK3XGkiP",
  "key32": "3XHZnbaYJPQti7TP96HJ29DRuVDjDqPwGRUZqjNU5FEPNuwGs9St33bkbh8m2ye4RaVmqDvieL1Nvzp9pE7q4fnh",
  "key33": "5cQTfhQxaXqrzvQpMcGkFiYn3cANZd7kDwijRMLt1FQzsCtxNoaVaz14Kdz1DkPszr3TvxLcTF6zPg1swktCBs6c",
  "key34": "2hgJ8r8AcUHSnypcU3Cr4UAnagfEsef1YDe9Ht265ZCQH8KjSuf1joshXkUpy9yFsMbKeCBTg8cL7QtwKfp3HYwW",
  "key35": "2nhrfW3xQi6v933EoSeZLs8gkCqKWw9zUdCSfXuNj8LUczRSez8NFy1rSLY5BMyEf8TJgfc47TH92h2qZ158N6WU",
  "key36": "zSsUP2Cg8Xe1MXpgGUroSXA9qJTkvicW1XAaGNNN1Q6dtnvSdVzSBhvJe2g3vkszirYCyDdjWpH6Gpw49rs9ig7",
  "key37": "5toimAfsWzphmoMih5UoZoY6mUZBgjvxXKT44h7USAMPF7aoNehZ9L1WXE2RtaLE1uQsMSpm6qjQ4x5zLHRzS9zg",
  "key38": "4NyiUw13KH5XuZjkHhzFU38tVo3eRFN8nUCReLxMjvrTDNN8cQnNZfR39KyPkEiavLeGp58YmGKqXo7AHnyVAYLR",
  "key39": "3yq2f4UyNqJWirVuSwPAJ4nXEs43qBh5Pj8dg3dpnbjrBgSAcLxvK1vu7NV8H3uWd7dF6HZT8gFkuS7JjjnGK9aX",
  "key40": "42H885c4b8ay27HXwkpCnAw87sRcvaEhaRpJCzuWMXzYxAetU2oLprrMh7Eo4hVCnhiW7ctsna1CrVkLyzUp3kYd",
  "key41": "2VcmD3q4dvUQxEm3vqBwkHgm1ftQsLAULJqexA5BfzWuL6k5juePLcmBBhAJDaXguHK4UcZiNjCoqdtaRa6Z1yZp",
  "key42": "4u7PA9P6HFWCwU4ZcYC6v74jcFKQo8rah3DN43vbPazDx9xmFoKwvkm9RFZRppoT6jy73wJ6fdausYpqjWFe1uop",
  "key43": "2UfF9sCNn7U1nz8rNUaQjErSthhH7BFywo7BZPsGLq4bD1H2io9i5cpEPnun3iRV9SUn6wHKQ4LkJaKjV1w6xk84",
  "key44": "37ZxUKijRPh6XUniVnbX4vfYpV7JHa7gxLnsCseo3hM7tGJyYXt8bYuU5tJchwaTV2YAcZCPULGSaRbPigK3r2e7",
  "key45": "5DKNPodRBhFTEzX3hFFJjcH6pJMhtuJtHALWu1EzKueoGNNFYeRG36gMrRXRYoCohjJW6nhbryr8m1HKVVftfkN1",
  "key46": "58cGRUGBSKc1PGwknKdgjhpNCvWpDwCWPez9hMirwceHYaWC593rmyB3uH58NXAAbX2dYM6MmWBD7FWFLa1EzEqS",
  "key47": "326BZQk1yXZEGyM7XjaVJqceSG8Moapsj6727RcvDvWePWE8vjUZRhbEQiYqf4XjCiGUkwxK8NAw6DR6VLfscY9G",
  "key48": "3jZnp95T1sUtAWd45u7nwqdjBJV9m3aUQuw6MUUxQvsLivRVBQqnXZbJk3dKHG2HHKgLxe4oX1qd3pE27MWq5YhN"
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
