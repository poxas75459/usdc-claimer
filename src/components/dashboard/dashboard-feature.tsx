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
    "4BfsuGUaAtDNy1bsxih93TR7oEMaqoxdcnks1RxwCE5PQPQ5zhJSf5wRUDGLDL5DYDs1dVcVDwEeriHwZDkuLh9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a1Uwgantco6LgQSrtXhQhZGLgixovNeL6Bu7oZcoGwPniocwHU4Hg4TxJYFV8gbdPNR8VBfwt8osofXLZDsjFN9",
  "key1": "3avuKuddkXEKwFmG3iMXCQq1sHLTuEmCDGu9feTksRHCbvFcjXhFNdYTN3X5tZd8M4KajV4p5PhebJTFXJixru43",
  "key2": "55g49L8qj8rmfgXz9hhZBZnHuUmt9Zh1QHf7srJwfNhUkonsqMyEGzkrNpXTnm9m2dvzxFgr6j2zpGstYk72Kfcs",
  "key3": "4t2JtEZrgqKVTWXKtcS5TgfCKwR4B8UGw6STtn18sbZf79iYYGAyBK1PEcQJTwsThN8sXLLGiZUrUZNsNaxz3CEK",
  "key4": "3CoNSoeG21qyNogP3tWNV2CuGybTxQzm6nuU7jWx41bjDZD2pBgtsKJ1UNBpqAB1WF6D388nHauWpBfJwPiMPxH6",
  "key5": "67dpsUw3pwpnLqhn3ntcoNeJbGXsoG6DTFUpoviAE9LHTW7a9Gh53uBvPR3j8mYLYeEsXcdAFmzVnb7CUkwTD9uU",
  "key6": "42cqBKZV21jEWYJeBGLnxqRyxwBX9A4w9CysdbxFCR5NJg1X3qxzs4PFNeXpEmYZrrV3b7edhBGR3pJ9tZGh9aZw",
  "key7": "3EiANAmpwVwF633qVod1oNhXAgC62nWy8N23YKaRkUhffq1dwVwNsL3RTViV9g9wVhJC8HjqbLaobJijXLecGvWZ",
  "key8": "22PUnE3u44jpsTS2Jmn2xkoxYWcrPpxErqJ3MaoeLFNogqyQbz3t9KQGZb9SxwyGX9XRCjLheTNjnt7GVFz4anV9",
  "key9": "5b3MMUGeRJnW3rs9DmEnan8JwhDMcA7i77mmT1tLtarx8Dg7jtSr49QQ44oFyN5ACxv6Q9hnk5Y9URJYzM4dyxuH",
  "key10": "FDmgM4vn9dhoh1K8P5h5JTw2pn1m8zamoPKSuxGjpKoxArS87m3P6Ur3sRxuSaJ6jB6vaS8ddFCjtaTojGMMqJq",
  "key11": "28h1cNGaJpWP7r4BSoWAtzLLJ3yN5HJWVnugWVrGXCAieJcYBzG1J2tuJ3ZMjUr5yq9MGHa4pNoPRGDsuMzKQVWp",
  "key12": "dhLqsuW476oyktQPJDRuZn7v2DbnhSexM9HucNrPfWnFXRBdRKJHv6ktZMkGb5ik3m8MtEfddxyYDaCYDLyirRV",
  "key13": "2GxT1u6a8z1FMqwTkbBWRwHqGjPSaa711xbETdMJmkSVmyk7ihAEGmdwG3AsKUn3iiKFN3ALLsJdbMtgfMsWUV3B",
  "key14": "c4guWoC4GHZpuozpszGdCo3FxbgcK2SFREDH3Huga7D8EHA3te9AVs9xn6dePos2CDMMivbEsRxZ1KXLngmgynu",
  "key15": "4MK3EmqXCXXgZbMXoS8ud2QFCZ49edNrn35t8RY3p5aZvnFN7HUABWV2VMqra3xRMCrK72cEydaDSWQEiptJ5yLh",
  "key16": "4NzDsVY8k15FvnKdiPeLikSEn214m8bmBiaWbywrJ6cVE5ndXfExAX9L1nbp82yz4pHorMNVcgm5Ds314aQBxKSN",
  "key17": "e7qQsVHcFPQpDB4rzjYn9wiFvGzhAosEaXZzVsmPzrCBJ9eQrJjaxTTjAbUjiR9ANX4pyWWykkLNCRS76VcWuAR",
  "key18": "3MkkFvSAVWbGX56CjmYjAd1ADkXyapLh5uTNr5bvKZBh6hRHcSS86kTmycb6o7cjxzccC7xagqCmm2ExU3s3DFgb",
  "key19": "5Rn7wBQJ3AurQVSMgdmicrY1WkSbXDZKYE1C1ZiAPTQNHRdgB6DabhidbjER4ntj3oreAEbFioVta5J9GLPvAxQu",
  "key20": "5UQW4XrVs3xnKSAnmjJwUJpfYsi1ZiC6WgZPjfuoo3tGU8sALe6hursujSSY17VaULQ78VXNZu3EKusS1jUgNSdf",
  "key21": "2gHmBsmLoQGtuNGJXNsLGqG6PheD3pjRu2c89P11CtSBMPZXV8CsCrYq96RFNBwjq17x9oK9fPqMfMXtABLPCpUT",
  "key22": "2yQtTKsRkGPPHSHwaitrebrZp3bCN4YBGKX7RiXSt2sUEtVXXyE1spFPgCBaMsUP777udjumfA9asirLyYJZc8N6",
  "key23": "2EYaw7GzsD2byM5Lr32SNai3WyxEHM2MWq93NzrNZTcAyvhiUJ71Bki8LuybNKXnxDvVgkrFsqysQUBPR4bqmdMn",
  "key24": "VfWiavTQYWDyWV1Cb6k5UA4bGSgtv4RUBPXUQ32LM37G1S1kQjEsdxhKXYDtgeUw6o3b8sjbsyjVmK4ooRYrrjn",
  "key25": "qRT6M5F5NyHemMG5L3bYsWAtTAhq7wpfkvRiyJR6JB4aYhBoYr6aU89nxd6X91ahEafWkPdbtjNaPLBziTkPdhL",
  "key26": "2x8EEHUEQcWwKsz9X74CDGTfvmEKbFrtyypMELJ3yxkayJhwjVHAPHZS1gVZj43A9xLuhm2v7ddR7hd3UBEQmPrQ",
  "key27": "3UiEwKiqoMRo8P1bPQ8yFgb2QeuEQP2Ai3pETWVYxY8MXsLjdhcYCMz68MyoQ3dLMRmEbTpxHhZFZppzVNHXC3n6",
  "key28": "2454wzjJPjn8WdwCJER5fYKAjbhvJ2Y85mxHaWps3n342HFPBTpSXzpgY126X2w3ScDHufwYiwgFUejVLATfhP5T",
  "key29": "5Kwor5PSMkErNoyJiXhNNihnW1mbYkUmqQMFr6Z5Gb5apsWoWt8BaYXsF5r3bafnNU1iQEb3eLMCzrwrZJzN6oua",
  "key30": "3DoopDJHecp2tQb3aY4vHoZ7ADWWBNsFptTQ5r4XnohTNneVuS7bBqc8UgD7tKux43WFYZh91aDdLQfexSxUfWCF",
  "key31": "5tVJkwKDLoBKaRFnM44bubv2ivrsqGRVDS6uy8YZbkkgqLyQNCMotrWoYV1LQhYmbHF278XNNwKYf7XnqhfAtQef",
  "key32": "5nP9vG6av41JTDJdVjFAriZQHNfnH7VC31Upk3zjdj9z3yYS78LfRd42zaQscw8qnoCFgjEqQ1tWYhWbvhdiVPZS",
  "key33": "36G4vjePxxo8HbqBqcyZzEfE4B9BR3ARNtWVeZBvRXDgC6ZDq2UaYpFusfg7qPiUcapKkEHVneQHyShnUWg82dwG",
  "key34": "AC1Z6vyEyz1cw7cRrJ4UByuJLVdArtvwPj1eTYWXaTH6B938aZLBJf1YpBcougWRwXH4Ei3v1deTxmhBmaXSN9R",
  "key35": "4qzeCZ7ctAhEWaJi5CpoMbxjK3WpdecdTRimkz1sAYJwjhZYpLCtS16FBggg9qxXgSKJG89bEyEt599JoR4y3UE9",
  "key36": "ZKXF6uup8LuL5466qBMGrjyYdX8ectE5oXG9wVz1ijnz6c5pDBpzbPiqKuTwnxxKmMTDuDQPPT4QLw5gxd3baeP",
  "key37": "2GWyr9GH96GDtkWnHojCEqnRKR4Y9FnqwqXD9kB6zENXZGcPM5353wzS1uQoS1w5DgX8SmLWhPZwHB1yzWTwhC8L",
  "key38": "2CRnrhqVg64WnGV14UUQyHBuctJhoyaWho9dEPBm7GD7ZLEF89AC4398ArVh6NkHmuDqaYuX3S5dXSkYbEF5FFuP",
  "key39": "3eBAwR5ZkEvgkNxWquEyiLWthY2moDVQHQRS2fD3YJ95SsDdX3SF3CxiGvd8G7oK2sbahye8XS7spGvdaoSBCiTS",
  "key40": "2VVjWVqsbrJ7KVyaD29GS8e4ETVhUUSGvFB7PTfbcNcBtFNBW1q3V5eHbotC25ZDi7VUS9rx6NDerkNSneKbWWXN",
  "key41": "7SdTvCMrfCkoBvyFxUREBpaCWbMtC3CykKbTXMTeEgBusVR9fhN3VZEAeRi9H3HAXwPzHN16SCSvgD4qZfA63pa",
  "key42": "3iAh7NtKsHKakaUNPhcPjkFjYZzCcVrcYJnfyypNsgRiSJaZQZXuLX58xbphWzgnLhMGqv7kQHXPMrCG4sS2oZ5Q",
  "key43": "2J9sirQDx5Ap7hSbFqT7BCxLcAA1qUCmgBPSyet72DngJRQ9YHq7pJs8UQn9Vcv6PJZxwdPVeXeQ6c3PUgqSzMvH",
  "key44": "5FduPoXgcbeHYVWhP3ANTJkgfVqDm9xYkhdNnqF1qBWu2dttFS9ovW56kvT4xXn6GiQPAvLnfqUAq4ZBvPUDRyLG",
  "key45": "5eRCFuHCLqQVY26vSYzsKB96wmT4NzSJrSqmkd3aJwLSx368iUPuTHy8ARvB4DfRuN1ZH9Kf9dce7rKdQsGPCNkA",
  "key46": "3spRb29cbQRpBZfZPrBxTWWK2eriWBA3V9PLeMufgQnRtcbyjX3GUbr435hqpGJmQxTzmLLo52VwNxa3v4MLupYS"
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
