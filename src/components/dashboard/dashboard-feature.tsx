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
    "42MG2T4x2TKiUJb92dUg9bYhQEdXnZBXfZW6nq25fYLuhv812RH5MZWcEYYrpXPkTNoPxsPzLfWQLxEaAewRTP6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47TBapHPEook8UwtoeGmMYj7EeRX9ZkWZkABeJcTr6X6dCbzaAAQeRs8z9ZfXGCRNMZJjxQygcb9YNWxTT4sZe1H",
  "key1": "4RyhnVf1WkKntfcR3AQ1F2VPoxDVp8Wfz8hcMmbpKaaLutxkV2uST4WNdBjDBCp5zSYZeFDwVTFBVy118KyDhwXG",
  "key2": "5YBWk44d5y8Su6QJ2khua2zQ21GoMptZ1Nb4afqT4GxJ8Uy8KgqPs4eFSWmVCFHbvDFX21oM3PF7toh1omdwQPKF",
  "key3": "3voUYrkk9vXKNsBB5YCcd8a7VtBTeejggozxFQwEU8VKfmnH6ozivWXjpShEf1DZbyb5r4zvSHrRwU5b6LyLREN5",
  "key4": "3YQ1CUCtUhZ5at3GSqJx83NQfYpKJedfWd1PoCz3i2M13vApY4XEa1ysKJbgMWiSQaKWi6ayDKedtjCL2KynTuuN",
  "key5": "67PMJzvpnFmCy1FUj7jAXEG4VQYFjCX31KK4D97mtCufSpZrqh6ec3MXy2mqtaozH4RTcx97kzNq95k39s44yZPv",
  "key6": "2moz16eAbptLD3JWTor9aeBhWQbSCnLHJtkvL9ojB4fFnrgJPz1vN4SQuPHYSB2dXRVeEFdC6StvPzRmToLCBQ9v",
  "key7": "DV8EVnEPEsJCrLX1dzV8iUeGkMBmaMqvCf4v4qRqvPk43P97RsZbXSHxfCjArD3f67zqDaKaBmszFwDrnYGJ147",
  "key8": "HpvTz9CyMp6UVwYEQVH1wcAEung6j3BpzWxENFoD1CEagmqyodBao6dVZDwkN1jWpUaLYgLKE5iANS9qfc36ywU",
  "key9": "1ACRBxatD6mTaNZQwMjXX3QkW4BVGdyucwXsDpvH4FZMkAqvUkamesKTyptwa3bauAMo6LSQrfgDVEBKKiPaEAX",
  "key10": "YnVDVa9XmQcSEwbqqeUBgdqCjPvEqdtYA68HA8K6BTQMeS2n2AxtbRdsAtGjfcfdiw3S28po4LLPuzAq7GtquHq",
  "key11": "5gaWtA342KkFJ3kn6o52wbcBeQr1ciSandp5ZykqDCY5LkRNi1yZyxeWnniNPWZ16QZmpxUk2F5xjCae9SFfenao",
  "key12": "4PDWDuMEAcRKjmZNHiNaBbf7HYd5X8fcm7p4BQ7s9X7nYssV7kSdoKjPwKBfCQXuPzcxVZLoYmgywsQH58TEoV6a",
  "key13": "wB4ndtTCHcW1BW4RCpMUuDnX1LaACmecoV6UW8fUFtHUWxX9Vqvu8s2wwT5FL6eDxsTwic6Gj1vXRoRwbAKmUsu",
  "key14": "2L3kgQPXWRUB71HNcVtE9PK22nHJrMQPhPkXCkPhsuCC2icnh95KEHoydk9Km4bmN3zxkPxbRZzxriHPshUF2c71",
  "key15": "4eW5YdAWjRqcJVK3dgJCMa56QwpKPmuKiWEMV4d8Xhb6u7y3E1frUxqBGANd54fJQSYnajEtwPKGK5AavySfGWYA",
  "key16": "3cDeSixsQkMXSWsGanQ9um3W43Cyv2aJpWbssEKrbUrSwWQjimDRromWxd8X7Xfp7MozhPtp7QuNnKaXvqxr5MLs",
  "key17": "5GZfmoBnparDDiXn3F3Wdso3dVdys2PrnxtB9XxSjH7tBpeB32ZQ4R92a7V4SuFmgja5nLeFqMXN8tYwtsLREQry",
  "key18": "66pdcgNAr7K2LZ6cLpMPCBv56dL7M3ztC9H9Z3DG2o4bqszV7U89H51cDA9ABpux22mDECJZgiobjBpC9D9zqqJU",
  "key19": "vmsxHJUET1RWbxQ88Jw86nkVfAxrAe4BC76Kqrk4ZXXQeQXrvGPrz2zmvrHnWnXDvgcsKQU5MVJnxM1NsSA8BiE",
  "key20": "BbbwPBKsUCx5iPPW44btmfXdRoXCe2c7p4K5BpT6LosKzL5SbgVUPnUvwk3rVrNCRJu1wsucysH8Z4pg5YbDwWV",
  "key21": "647fzrWgdN6PBMbc3cbXsqnFMy7263nUvsErk2jqXe9HsMvvKkjCgjTBdhp5RdVSCQHKt14LwWY5ELdUH9devhT5",
  "key22": "4ofX9upNPQPJPnHofxhgowJaFCFqioN62ChGvAsc3riB3wwDe7wit6Jo1aDTwAwZYwFdkDhvnUsH8XVmHtDL2B15",
  "key23": "56EjqFkDqXXDWCAxkpt7GUM1o1pCuqZk83XobN7bTSSYFAymKEhkpSbTHovgcBdpvP5QkewPa9B9KGwuBL9pyJJ1",
  "key24": "26ekeFMW14PatyvpwwgXeYsigXEe7cUj8sF1USksqanQ4atgYdTr1hjGV3adq4L7VrroWaWP1qR1Q9zQWDfGtGBT",
  "key25": "5mPqnpPEPZwQ4vzWzRbo7vbZBVKnmeQmsCxXXML2i9CNquovvi2hrnMwahWNmCKR5dZoyzgS2TMxwYNyPCVgKYBy",
  "key26": "2aTG5VovHMaPfZYvHLnpasJTz5aJuUAPr8XNQPiYWcTU8uLhhLsq2pKxSUS3oxZGSw7CJ8mYaXANKLbhfSTRZu17",
  "key27": "5YiT5gSRsArwbw6B33WVXQWP1GzBBZvomcyKrsbMLUnfMuDUVCCCJQCLUNbpozdkXzZdJo9jCmvACQH1fTMrVeG8",
  "key28": "4Hz5C5D6cnnbpE5SqwVRahFy75bPD4PzUghyho9mj9rgt6CFqX7JyUhgP9sXkUCFiFMQi41X3owsgtNmAHNHbRXj",
  "key29": "4VEPyNXgaUzBivMnV2gLZ8h5gtEQAx1zxNBiSt1hoCCwDqqc68P9QCNB3aWvBSrFiSJF1njzthxKVPE9KzULhNuX",
  "key30": "5rG6v6sqzzDZVUSGpyowrWrSJ2CHdWY1ZWUp8BmT8LSnk3oY5eLYVXJqVyFnRVRpeSUutriwicHDQf95JYhW2bRx",
  "key31": "V4BpSX8Z38HuuHZ5zmXhhcg37phtGyAsk8Y1sDcD1eVPfhbgPZCBxkRqVYF7BzNQTUX19G8njEvfa8zEaGX89a6",
  "key32": "4JHCuMP5aqzJwNKsTgvD1MWNiCVB7KZXmnrPk36aKaHeYqqSfsTPixcyMBgR48cHbAj7TwraGjMpuh5UKx9gsRTy",
  "key33": "5jZSswnqSiDD6Qp5Gk67xp5zacDKcDJEMqndvpGbAm6k9YsVU8nkKHdmAZBjgzxEzNhDsPziaEnAMxrKWbtwSoek",
  "key34": "3u9fhA4vr3QRYfXf9Bs5k9aF1AJbr1mf3UnZtrrXYiXtGXxA6RiUY4pGXudvrJgkSmv4e83VWnnojYGndsqbmAPH",
  "key35": "4gmw2wDQuWYGsHYLsL3e1zTcMYzfq7b4WcFbAy8KnVVN31wswf7xGaFsYv37zK1XnUs81iUa4jhb12mdDxE4CiXp",
  "key36": "2CjLLeTfmvJkib1STzJumLTamK6zhEizuXc2FPQ19rKbTcMxzhKnXnYbVsNKekZx3u51DesLHz4gxcvf7obkbJt2",
  "key37": "27tUpVW6SxERr3BFMCyo9zqhY4aC5xvMMMMhUjfvdCU57r56XRwQFuMgtnwVHzdJVMKH4i118aT2ZTfBb7EsQ4x4",
  "key38": "3o4roMe3GYqdkXQsvDdyCgxjXkjJkqJN3ggEM1G68z8F19GhNBFnKxZ9A6AtfPAPEYSCEmRWboeTBhNbSuAwGcv9",
  "key39": "2eQhhmt7yEauNv98qzDrRZDLjrU7DwALznegFvpk4VfKrAtLbzPz8rRqK5QprHK5RPsPKchYauynSq2zCNmkwTQ7"
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
