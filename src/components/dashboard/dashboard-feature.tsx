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
    "2jo3efgvvmSkVkM2Qk35vbiPKdLKUd5SYF5MByTMCX6sY6Y7aUF5MynC9qQEuYK76WdbgFNR95tmLvU9hEoj1VkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BGL139hqHj8hpA3QkY7JL4Vbciu2Jv4dLckWqpThrpE5hckeRsz7zxo6RyWECcjAzx742gb8NQV9YB8LagGFn6h",
  "key1": "4HVv7hMSMipG7spKmsr9FTomrZdDPVNt3SYPobZChYLPHw3DjxEZe1ZubiFj8GBWo5XwwHf81wAL4ZC99hUnhjUk",
  "key2": "4GAfP38ifXujBcyMY72KaBAJGyb9jfqb9K5fx8LdV8xME52UAff425KGhRr7PaQPGxg742iQG5nXH3tUX7HWfVna",
  "key3": "35XRXtsPHJhgRV57qgsyCGR3VzsfeoGDvHyAWmQahRRTWbMsg7XeTyyk5Hj4ei8TioJ8KKE2BPmJ18DFvmmFPXJA",
  "key4": "Pcw2jqPTLRsd5rj3Q4UsNpuHLH9vuKYisnvJydL99GuCbLfh14t8C7aebKSmN27Tjapj61HG9TLMXSaSjUrvXzb",
  "key5": "2yXLZNoH6mYY7CeEw28aJFPUwZLEJM9WLBAyPQw8qSE5znZUqtipPYaorbRbC2hQzc7NQ1qCswbm1b8dob6GTgKh",
  "key6": "67TVJitW7Kb3NwRxxHPznwbs8pvqwJ94Dr7o4C9UK4BnY6ABaPeXFwemP73H1yTXdkzC2NwMp1r9ZLB7zoBTMAsj",
  "key7": "4q6jEXz4UJjLkskAp4XToJQpSbZXdV2Snjkk992vbUb2Hp2BdDuEtXdC2CZHYurR2exY3EMxXsneDdhdpL7ysggV",
  "key8": "29o55mzYCNRLkcgJV6wnWqD7TPftuRgCzxSPB7TFdiRRJMjYL8hRBRfUhagVFC3qmBTSogRKvCBhkWBSMpcsBYEU",
  "key9": "3DDbnAWc4FF5Yu8H6WwTKPp6TWbsAHNNWTcKGaJb4sffL2vMe1Z2FvGddkqYeppsrmkbaLWSU7JbhirA3MPdmKKR",
  "key10": "bghn5WJc3fnrSATSgSTE5tsXQqKKeYMVbag8XXmKiD4vXvAbAF9MN5Ten9efwpK6a1j4mgcQraJ2dvTcF1UajZL",
  "key11": "dhnh4FYFsM8Gy3DKCV5sCgDY2M6si1TEjMLMSZHJyFbKoEsnpNuTLDo7byAeKWCdNn1KkJnjzC3PK4L9Ttq7Qth",
  "key12": "5sTwSuL3cd8XFYQQrfe4Rha9AYmY3dmSJ2JjWVPgHf6fMw8R8awGvkSMnCxUJ7UcaJzbToP2oCzfLQDsQDCKx7sn",
  "key13": "46Z8XPcVmyq6cW1b37JxTBWiZcU3vK18qwTr297n4GCQikxzPN4BREcz4TFXjN5kvja7pyj383Wujcvx6rCLezRQ",
  "key14": "2YM5HaY7gMBtT3QTf4Hbnhyhm88LoQG6eBJQBLUaPMorGbXvan4qzfWaxex3bSvnodvHH6qcSkGV2Mv93xdg9X27",
  "key15": "unuJoNy8CsYhmX8cQef38aemUXxnHSA5cxnC8ZuhC6CfaczWxaERxGGaCzTPa3zG2DB8ErmPpYSKdbRPy8XRwF6",
  "key16": "7wpGW5GNkauy2D3kFUMg5P8pX3ex8VA9NP5jgLgagDDMh3yp4CoabGBYbzRbvbGVFKq7NsT5wBRRuzFuP1WgUdm",
  "key17": "2D1v6djC3v9AUGNcNGGJzP1Xhn3f6S5zV65ESx6WNL9ZXDpugUJ8hEvUDYtoFw5xRtjbrYqhuYEKWE3LQijhMZZF",
  "key18": "KRxBrQxqBTapkD8j1inbn5Q1aCyCDKEFRvKiJu3eqvA1AvTugdB4MASVGyiTnzyXqLiHcu6r2DVN5qpvVoaxzzj",
  "key19": "667A94dvLmKNxLrbiLRM2b23TE6VW8yHxxQsiogY2EfQswSJphLsjwp3Xey76cDPmWX6HVBvwmDJcRRLgxeVoBn6",
  "key20": "3G2GUvYBzXQVbMmEYVvmvjwQoiik2m3hnr5P9W3svDRGf6M1w1YMbedwwHjstxHYg4wdzMyu7MFHPS8h3QrKQUho",
  "key21": "2bmon6fimW22rTrE4m7QSZLaHxQADJRiS3rH2gezaBkJ1owaDWTNVQvXsmBs1cfoW8Z9mpLwEzcxootAiczYcecf",
  "key22": "2T3br16qJXndNAXbZKpUkovPjx2SXmf8HEDFEAupRaqGERLg4GpfnBgzDM8eYDru2WVE2xPFL2VaDduYCSoo43wq",
  "key23": "5w6WPnpJSf72WMzYNU3go3mrb3KoGAhCquacjj4PQ3qTdftLAS3RT5QwFwumBZbVJ941sEUfS7peRCZa282oPPcY",
  "key24": "4VhDCPdSyM9tPVgejZFHi2CVRaGHQKTqDqPnnCcA3LS9eQCX1jeX8M1zstE2pWMhK1AcepGsXzpqHmzjySSRAyb",
  "key25": "5d7VSwauvx9FUqgxrZwxJ3iABFZqVTY4FMwLWzg6mFp99iRwsXtAVTWkvCLaQU2BFpzeLzXChowjXCNM3h8waabR",
  "key26": "3Gv6KH25dP9KUFehXgUrST3u339ZtQBbLt71M9VfyQwoxh6zLqD83LhWRN29iLwNsR7vgm5FfxoVS5qcjLRNLwoY",
  "key27": "NEgcutEYca7TsMpcyHkXedYBsjV1Tchn69YkNrWFbaGNn6yjnur5sKh5BQtcEXdcVNk8epyGo8CyHZci26aRgxw",
  "key28": "4mNVu2Acef2W79mGcs9jFrgbkHbEuKEYqSwmrmYDLciaLLwY9BpNVjjk9c6FDFE4Cb3J8AcXzFdRtef2ixE5xa2W",
  "key29": "2J5b3CUUGh2w2Y63S5q9bBvVGCTWsnxsxwNDehW2artQ8Jg36MjrdRPgcP75mNkGMEZ7WgSdRsHi5PFuKKErJspj",
  "key30": "3vTh3Vot5J3KEZpnKF3YVAVBW2Q6fzvf742zPGrG6SgZtEsCmBhQx1wSxp5sLxpHQHnQcZZ76vsL6D3zjDe8tvof",
  "key31": "3pKDoVQADwRVoLdyGVY1bR9JFzK2JJqwPEtHfwaHD3FNnq9DtL5Dw6vZaqADowa8aJyaTo6BqkpUMUeAro91dfYT",
  "key32": "3KhP6J8Pno5Qf6zG3yCmYgeVmWWWmsVptrM14JtRHrhWhJ7zMUdf5j72pmyqZ27YruWbyMMNpUiA1yD1tNzhY7Hq",
  "key33": "21Rrb2nsGGNUAGfDuBcvXbKKMpKS1AoH9YJeNLcfimhFhvAyxzyayxHr2K9XobL7Nva9RVVihbSzbvATRzutjymc",
  "key34": "2QAgXd836HVKutAwJpk9xKSpeXQen44vbBmwYxkKy3qtjVhxkGp8yaWKWya1cVe4gXNVoHc7vrDHdhUM8stnjCu7",
  "key35": "2C8a5dV5H8j2NtzUnusjV4e3h9v83sEw8538HMyVCqP4jbTHBoaeoKe6dU4bCUK4gnXCmExDdVD4UQXnCMfvRZsR",
  "key36": "2aFHVuWdhyWD5uiXUUEfVtwXq4SUAHRtgdUkKcWTHyPsCrpTmdnbBJTZUY9KWL3JxM2Dhfk9PM4uzz1ggmdb8Rtw",
  "key37": "5qVex3MsRsVnTf994Sf8Eym2NEfdQA5BzufUwePKykb7Wzp2R6thCLxzm6bsWSb6QbRJwGyy7KFr2wKCJJruCD5W",
  "key38": "2iGVnxKSob2GRfX7Q21Nv36ov12PHcSdiMLggP6ZBN3jVjLssdoDEh4iioUPv2NJq1yNHQKQzw3zkdBDrfZU9oKo",
  "key39": "5hm5fbc1MH66R2KM8iig3FBsEUrvPMgjyADqZ2hZwYNJNBNudyoj7E6nkYMgG2RfvRZSfxX5Ku8vSeLhz9YVmAJt",
  "key40": "4fxLkt54Qgw6XjrxpEEfXNgqJHfFVsfbEh15aiJkTuGqXy2Crh3gqr5ZWW1kgr7YsnVae2Nwmzry7EYK9az839Pk"
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
