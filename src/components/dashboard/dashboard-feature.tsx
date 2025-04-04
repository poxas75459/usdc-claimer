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
    "2KXEfo1UAsV8EXdKqR44Ev1rxLZknPrbpaVamEkg72MkMyZffo1hxcNwhqLeD6M4M9ctdPmRAP3ZaD6YUEexyy6C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X6eYpSnYWqPztqVLz4Bzt4xYBxtaF9bM4M2Ju55M12gC5i3d8viXwbHjfY8PAW83Fkx67RMHBNHgAdLGo5tqvro",
  "key1": "39gd9ebUFJuNgXhDKKAPmT23LrcUGFAiamNrFp4Jco2dj5GGu2y6iWLQEkMXkzR7DLxRo7ibL5E15UxBqffWV84q",
  "key2": "26eKCiQVDmMSdCoTFFTbJ8XCxTz89fDvzuuvDNfR5R4SaZ8meSStyhutCpa6kirPFRMD5BgXZq8ERK9BUB2BToSF",
  "key3": "4v7UHvjvnzNN6gkpFDqjExzdiXf98wK8dN1E9nqCsSaUPJ1fDE4rKgJswXK72BgjKmGzroTLgj73VHjkDQBq9PaF",
  "key4": "5mSGFjHxdnpU4WjWixGwykTU3RL6TG4PqxYkhKqfFkdmqC9DyraHbv4X4ss8pobx7ec6gSfCMKaoNQ4imT9q9Cgf",
  "key5": "4fZ3GyRnFc7UAygpS9zYNmVdoG9YzLbWVSWgRWdJ4bVNG7RQ7hbt7MynWNUeiP695PCLcFZc89simdPYmK1UXxNT",
  "key6": "FNx8rrR8ApkmRnMLBznSqQy9GuRLR8d35KVgmkyaCgXM43Uf3YUMropuPctYDKkkcrCVyPGgEFHWZpqb5ZzkMR8",
  "key7": "yFLycJvJSv8sNXBXJFrdqCpioaGm9MQ52MkBZf6hDaXYGvAvmVpJ8nN7EKm42UQy6tgsNq7xYybjJA7YHWj2ogK",
  "key8": "3dTm7pcHbxtRMiGGqYmgcrwdM9fUYjfMNSm1hSiqKJWtFDSbFjWEjivihxyzoy8v3xqQXwsvKbmGsJzysCtyA1Dv",
  "key9": "PYD6PAFNDs86zFFsf3ecDAxcJMVzdsseYghWSYPvQfVa9eEFBQAEHwzCWSaYWeyMDjFXGszmBRBQcSdJ18F5nmC",
  "key10": "2Rk5jmRhrtS3ZR2dbMPxAFnT8DgD5YJjQQ869gscDaYpk7zXPstSP4YizvijvdgkFwByF6di4RGYo3WfRcoA4k7a",
  "key11": "tFcWWqWP4v34VSsF7ECjyRPgfSoJCtzA5HZpF7c5KpY9AnEfQm6ZgNXAy6boXqdpEHq76cBnUDw7Nd1RJkR5N47",
  "key12": "4DQvZFh9Subt6eao4yNu8x5M2845m7QHXyKWxt9pXKde5EaWtZSE9bdfRYMShgQ3gKoHke7EFZgxnR9qMprZHMDt",
  "key13": "4ykXoru7DwhZDCERS7icfYfbxrcjzNFcCUF724iz6oAwKC8HayZnQhHoPA7BSE7H5cdmUjdxwrDquXH5EEjxwrUy",
  "key14": "3yVSAsLQ3TaH8M5DqALbVXcmKCLHbmzNLuGV1KYd4W9oLkVZW9jH55qAHhEfnJ4ZJCLV6VPwXWdCYYPY6QoZ6nWK",
  "key15": "5VQmrEvW5Ua3LpwrHjmd2A3xxCodJKYSgPPZqu5JXthMWN151XwtBCsbJB4kPCSDKE4ajRyMoMiRsj5uYsMnUQLL",
  "key16": "3a17sfRNHMXN77NAXjEUqzdCL94jrV6neHYcwDyppD3FHexLtM87h2RC92D4EbKpfWrFxVzoL5J2hRECcJMMCWue",
  "key17": "2k3fQANiGyAET9Tdoevb9p84utuKCr87Zp9QPtYgnty3veu9z8StZ2mZUB5ifRZUAfgMfBVU71baRPNWAaoQ1ht7",
  "key18": "3oaTCXyvp7MKGzvbE9mMvWGN27USciZZYz6qBRShN2kUXsJPumhFfGo9QQVZb5184N2DLSq9Txz9g3fGA3eb8rhX",
  "key19": "4J46h1gCmmq9GvL9UQi8B5RpP3QLiRtyu1V7kdTPuJqjF4dhjthF5QheezZ87nnBHHKGBsuHCac7xMNcnyrGGkbG",
  "key20": "5tEGnPVJYndFeLHUmVi71v9kBh3JdGRsBHaaFWyi8beyd1pc1bEmBB5Qdsm16jKkPB4fGv6t88UvB1AJDKE3J7uW",
  "key21": "61nuuk8HNayrADgc11Cu8L5Bm1MhUx4U7KEPdfBCBvXRaJ8FDXJtNbGoRU7Qq8SH2kyDPrqYyzuxVSkGCvBhZJjE",
  "key22": "5sQbVWHSgKcw4T97yZLuPt6TNCvsCpnHG8CwWLobeP5nk26aq9EgqDWLauTL9vT4K138S6mPqKDDVwaWYjzgrLzJ",
  "key23": "5W5sRSPd1QePcw1QFcryhomUy9WEZnGQFWvTa65iyDhdvhY92LrATBXKU1Q5EjrDDfGJ8E9mqBuLxrgSWVPrZgGG",
  "key24": "3rcgCpXRZton8ZtXUReL5Kz13oAzAqtG8zBiNSxnd7c67H9vxY4YSqcC3CaD8TmoCgMwkdrXyp8X6Jbv82rktTzX",
  "key25": "wbG4SQQzhzGibvsgU8vsKa8wiPi3jrbmyWwnQiabN9GLhjzjSPjfLKTJSQ7oUMT9LZoNtZj6pji5BFGqPLqfaAy",
  "key26": "5eHAFyMbJoME8S3QQEwazAFYB6sHXXW7c6nzQJizedNtsnXtxaHpo1PxLA58cZk1NtkArw8SK7UTrYb78tfY8kdy",
  "key27": "2N9E5YYWnorWPaNjtM8C9twDsd8JTqxoFWLvPdMs53HPvZqjV8TJTtsch4HMr6dgngZZR1g5CGWHXKddxPhTutP2",
  "key28": "3Z4YGp6CZvfv6zgc5RzBBda6xfKZnPthrbp4W4qS1nETXAupup6RcKa8KwU3uv17NTv8MAn8kYyV3nw4cbpMx7Fg",
  "key29": "3Bn684yzfbrmtZDZpk8f3EiEThb1MS2m4PbVDLqevDW3sLHoebAwXy4i55Co334CdJie6Hiob5WDhSB54pwAfP2U",
  "key30": "Goq8xUZqi6zMrVxc31fBerGuxowiUmAcPNRhDYDFYGow6ZFNgv9q4mMnXwMufupE8jpBGnsXPP1fUkLegxH2rvE",
  "key31": "4sPfrgA4Tow4wdPwoVcSiAJHh4H9WSNXcPTgZedEmEUByVjfeYdDnBCoYrTKKNX35z48PWqx9WXtUiLjNAzHYAfk",
  "key32": "H7bLYPDshNxdvBmuHgyNTghCaNzYVoumts6icuhe1xL2i7Q6N6aXSSmLEnbSRpExwTaWbAxqS2oGVUzqVABfegM",
  "key33": "5EaTHY72KdFdz9nh6uCgVcFBXm3DhTymPD5w6BYMRYkhj9SQTjuDcDPYr5HYKHDycHQdBaD7WuqUwGS2WFy4Wf6P",
  "key34": "3VTv2rdogVnPjhUkm5XrSW2M6Rf7dFp3zZrnTpYTbATuHSdcWxgtTYprwKJFVHDWUGsSZwzoLGk3aX5XonuaNFVi",
  "key35": "azXpriEdNwaSWVf7UUZXzy3B8fEPunwGhxr8hdBAca5MvMoCWS2YgCr5FbFEyZoa1hNMvSUPZGKebHzPsjRK6am",
  "key36": "U3SdntgvbYJXyJxh8fhdp7xYfcEDutDWeJQYtHyYe4xkJLmGPNGJCu5sCPsL2424EApGv7V5pXA2Gntkrzx2hJy",
  "key37": "5zk8YvveMwZBiPReae47MdvgY83UGKss6xwsYTN6hvVddtQubqC6E8QZZxhJiNRUEzfVvFW7ew9F7ibzGaADZ1Fr",
  "key38": "4MR7kjUXqC4RQPBW77rMLKnGYH4SUTsgFyujb43SgqSQUfkqpsbG8anvH5zwyiE8Qjor59iTYnUZMFCQ6VCbbaZz",
  "key39": "29rtsr8LaEKAw7TNx9ksaDYN45PAQfQqZ8GxAkAtPw2mMJdQXYJawzKXXX8XDREcQmTvPiLXXkmiHJKcsK4dp7bH",
  "key40": "6QtETGwWRCCuzNkmDJ9bJPRLf5TuJNMXN7tmfNoGeZRToQ6SeZfb5KihU7PgnJojpLA42CrPeXPceM1DV5ixHzP",
  "key41": "2VyYqyEEAstLJbyNqEZF3wFUYTCUKMeETZayrirBKMwGCCoTscoFxTJd97g2SSE3oST46xTtL4552nGkFAzFacjk",
  "key42": "4AXxnttg4BXdQhiVQuo7JuEVT8Bc9PNLY55EEvLA2AjtW5iNB3p49uR6yXQbPU5ws3KGRnTQ3hEmjorcznGsqH1r",
  "key43": "62YiPsrjYaxD7wKQrbBdfuhZnDEzVknpJ3YdghEYLn1ftC2v1zSzFVHAfwPnLVT1AbYXcFfZCDukaht6NR6eN75Z",
  "key44": "56WjJS9Eu4ojEDa8TbTNd3TXWoVEnFiqx9u8v31NzQ6xtFH6L8pCMCsDnFpRniSZPNYk6Mw9wvpadSSmZYfeXUHD",
  "key45": "ZpaC47vQEbvBd8Ecy9R9YutRdTxEWvG5H3cYLLZptBSZ59Qq2Kp6GuNMxhHVKPH2cBPdL4h1B7kjES7RKSyHG2o",
  "key46": "24fNpQbYj1XnRPgPBz655PTdxRrn1XJJhFEKbCnJJJxc8CGUEPB5QujSPdLr8gmGPyGtFaNUkure7NCrNL7BviNK"
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
