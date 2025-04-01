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
    "4BztaHkbUkArjKoWrTznJaR4h86r9fHr4oSWiKqeZNCo9YE1NQZJuxQ7pT5ZbGvr27Ab4qQ1n7xkLYR9pLRH2to4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yvgggtb8GHtfwSAx9BCapdoPFqJaGPqMHPRRDES9zBdeSrz4tdg3oRmpBBUbXaZoG9QFZivbh3f6yBUw3pnVznv",
  "key1": "iHhCYXsHhgY5U3LaVqutr47SMtgq77Z1E4jNkLBMP5HnzHPgimpdLzMPGLd2YjBUi3Phc2GAqEKS75jF4BbbxQv",
  "key2": "3Mzsb2vjVYHUHAid9o8RKvJPKPjgAmwSvCCGEnSX8XE24nt9KhSDeinCegAnR6dzbHBWQzCA4QUm6hLoRc5n5uo1",
  "key3": "51KiuxuEAqKRm8fjREibZXF5qYitt5rmmX2AUWmLkL7SMHYJJVDmYCG3cJDHYsketesC8bQdmLq65m483Nzva4P4",
  "key4": "M1cAyVwsXu6E57jqHHHUc3bpaVnAK93x5PGUcWsQUL9S5kArALGxRgqRmoA7YQSLcnMfPjE2zuJ2DRM2bd1Fjvb",
  "key5": "BzC2udNWdGXuyLUQXnThmXhpMhbSRkwEzjrtwtsbdunYxNUyWauqcdcKMx4PVYsYUAHvcE3pvwSTMmf17RQGU5U",
  "key6": "4GgbQgCVVX9f7dwtoP2ndPTQHS3zfvZjVQnAiRdiRDff4C4tqTi1k93NqX6tvXyehwukBtHfeCaGQbKkPpefgWHN",
  "key7": "3b8Yu3EZHweYARrMj2GPGWmv3iz1pZmmYphEyVquZ83g9HmQHGnSfgPTRYuUXgQLxEDVEfo7LwGDCBfyQgSBEgo5",
  "key8": "34qG98xYkFsYaRzD45kfkrpuY9aoAMf1p8f7ukMwGnVmZ886H9MTVTfJzmJtRH4ALhnhBaYn4pJd85i2H5T2bkuu",
  "key9": "NeEUhBjNHCFgce8vb3aNiiw2zRtJ26JhjL8V2wYGWzjLkcjoq7kg33CoPTZFGS9a6QNhrV3qurNYGwG5ucsdGw4",
  "key10": "67HkUA2EH5b4yURcVr8h7oNeQaTXb3p6evFyusNyXSh43NNkfJ4AM4tsiDGMbCfG1GSZaA8RjcJfJbCQmxHsXYMX",
  "key11": "5DC3knoS6ZHY2X5XPLh4cSmDkyeVBJDNRm6Ts2m6qYkNBHewX17GNpLfLRqAQiKWFe8tQ1smj5WMdPmfobK48R8e",
  "key12": "4iSqX4Max8vZouaoH2CKQKMxjPibF5d7GW1gCQMxGCi9JbR7h6FVNT14bv8jgAb7n1AW2vzXqJryjYa9XDVte4sG",
  "key13": "2tEB5nZRAptCWyn4xzMpBZoPVfb4f7DX6JCAEukmuFNMCGKoBK7FXUXE2EBN1HSScE7miiAZ5vUjAwCd5mUp3Ukg",
  "key14": "5ffcv3McxvQjM4MisQuMgFA8gPrApHNQXdAUmkChzSpgWNTntu6xTh4kV8Axo2tWf984fF4y5w1rncwxAm6oMRLs",
  "key15": "62RZzSnC88YVubxXKS3haAztJ6XH6uknHuQuR88Dpvr6v6C2UZeRJt8TL3vXerpniiD3TsGtgnNXG3y5qRDvEdsZ",
  "key16": "46eGCMdxkRJbuMPBUqPvbWzopXu3GgzWbnpp1Y4RFPWtX3fxnnjzfY8eFGNBzF61Xnx5P7mDjC7ybJh3iGR1sq6H",
  "key17": "2s5CNVqHVajGnPSR7mVCG8am2LN81pHZzDm7L9aF4oao8PYoQcPqxiATgUiS7V61BjRTiFsN8qD9Gei5iwiGhzkx",
  "key18": "5jpFsRQgboMCdgEeazuwyVgSek3QNjqLyCn9QNsmNkSDHm4FSkfXWYdv3EbeQNn1ow31rJVPLx386WYB1rUrAwxW",
  "key19": "gyJApZ2m3a3ZZj4B9bWiRKbv4qT1mdD93xYVpcpLexTFKvvke53bWNC5BKngohr4XdW9cT3wjrKK63BYMhVTPmm",
  "key20": "3AC9SA2rGfjv748KyDbWHrUFBWTYmbfhBd7u1NdeXqV9ykmUJNtz8Jmda4SeWjZY1MoEJsvBBVkLEHfmm6vo95u7",
  "key21": "4cZEE7uvBZbsxQwhUpyEBNMUj2ohU4h84aLXn8PP7mxXQpj4Uy26Fu87UxEpf848HUJb9URRBVa9XZTE74GCuhzg",
  "key22": "2sBGeoL1j7j8oZZChT4taJGoUJ8k1nsE2zcWBbcxW3mtid9peRcTjAM4Qdad82wJ91xTFhSZNSUhoRFH9KG8m7GR",
  "key23": "eHnjdE9q95K7mTZ644wFv8jLuBFkSH8Y2zoEBaBUMc2xbjiZzKz67gTV5pdRaADe4UzQ8HeG9FZUJJqZRZgdi1Z",
  "key24": "4XRPdThhP96UgDH1iftTWJxLkPiMQDHamPgQ8QzGAGCJ51m87sdNNPSHC26MADR9cMxyteXCjc9rgDyRMpFBfaiw",
  "key25": "4BNpa6dK1UoNUFZUkmJxNt6uMHDh78E1KPGyyXYFJw5f86gM7PfDX53SahnuWLHXZew99ENvYKbFWjSoDwbhnqj7",
  "key26": "2CVAPD4QBXtSnSKb9LJbs4q81rHKiVdCU3dXP9ycqKUYUX6EBoqoK9GyjgBPVLDAE1LL2jxzw1ChE2kLAxQx3s4B",
  "key27": "hJutvPN9KMxMNm1nQVKcD17qCZG39bqRK9YnHJ5oKrDSZ25csNTbD71oVGPy3XMGReNcRmqBvzQqQNY77hqKH5H",
  "key28": "2EkQGn78QvjDi7Scyw8VwJi1TxdRc7E9AbNn83dA1UY2U6dx2Kwmj2fANheX3XrWnvHbUEmko5GpGMdzuahKhnC2",
  "key29": "2WETdFpXnYdpMmTCcV3zkbMc5uYAXQvJS2XkbpSg6kKBpxGx44n7yfqVRPEySyb9kBjNZR2wSu5zzhbYkEvdM92X",
  "key30": "3xwt2pfCPPugBENhxJ8dG4vcdj3pM9g26K4PTGc9j35EAizsux3E7Ue21XE4S9PygQDVnymnRR7Tag2c9yVsKm5u",
  "key31": "22sFGDsbxDebikzH3NuPqtQYreWFANEXdq5rcnu86PTH8NMAWMJibiK3jRFuY5bhhiY7xDMZnUQgMQzjrf4Lpta9",
  "key32": "WtZk2s3a17ZZq6SHRgkXeXDGcimLw1FY3msaktXFfrnCS2BeAHj7P2xocAkbisLb3G1i9HMYrEfPVDmCEJLMWh2",
  "key33": "3Bg5ScXkMNQ9Fftu3UrfsrkyFMBF2EtyzZMpNzojWzDVnmksrcaxiPDDpK3NVGiQH2aneR49MtzZXW5wgYjRMFHm",
  "key34": "xyvJUouTTP4idVHhnSqxiQ3g6JrjobjaA9pNcoEMEsUjdmuosw6r4HrfWTPwjFSaWdAgYqhMFmYMyzAXk3QwHai",
  "key35": "oHXF4WwHZktaQ731PYtqwbXegg4ZuUixeFow54PAEAKtoAJs5tQXUbtLvUzPEDP4KAc37wH1iyRcD6DZFffQpuU",
  "key36": "5jXjNsBWzWz7qPk6qB9d2j3zpzLbxP9cmBfmtJr4q1oLrpJq6XcfLf3Ge1HGHG4amipDZQPdZx3fJw7GXvX8UcGn",
  "key37": "iCHPqU4LSw6GYeWvQ21SGhytVQyVvswkHd3ux4V3Y2KC6LfnDTva9LBPPgBu6K497r2vKxYJ3hv6rUgB7i8VuJ7",
  "key38": "3qNYaZ6fPPbmiWS3hEvirn6AY32tzdzEZBtj9c6AiGPCLjh6KRa2oxqdi4tEhwXVni8NSJ78vMbJMkJuxCZUzQ5C",
  "key39": "2ARrvBpyqEaHL8wuxNZizszxDt28BdMci8pjKpyaWm1ZjpTN9S1obkbmRBE52y4i6M18uPQfL9NQD8LF9P5Sk6Bi",
  "key40": "5gy54w47jB1yixq4B2Vc7N2PBMNXiZ8xECzRYKNL6uY988mwrbFaDYYX91eEZcVtd4oytBiXzu8rLDFVwMeN4dMw",
  "key41": "5inChYGGKyewTrfz8DBuUmxsZGnbqLHo2ykV3mJ1cHTsSoiTDXSpXx2VokP2JePCCjyotHaQGnSMSnDUfbGScay5",
  "key42": "2LN8xJ5P8CXRW16rvSvYgi2XiA8xojqJKSX6UXKdr6vs1i4qtBkCRWQZvaEc5Vo4ZwJDitjpqSdvpsPTyG1wV2GT",
  "key43": "4wrtxiik3kkBxt4ZAJvmcVyG8Lex1muxfH5XMAgePrpu1naywBNzVZbbf3TY7C2q84vgShoXHZcobLLknvzEPqHA",
  "key44": "2a1Cs4Mxip8B6ssVvCdVCf9nek7Ea5rxLjRcc62wg7oiK4YrqXsvsf2zgSsfPii82dpRvKB4Vbcfero4vZjSFLzo",
  "key45": "EbciLMimNr5v8GXbkrbZq6f7BKdE8ozcqxKA1iERahHLhQRyAYEYEXnUJitZwjQFZaDWeyq7knUyGVrDKWkNHgF"
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
