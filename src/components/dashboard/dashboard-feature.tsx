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
    "3t3aQvqwxBtc2gsKkp1WXJ1GD6qpL6LCQoben2GM4aJtZQtmd5Vrt96rrMPLUGEjJkDkQajMmmeDD3J1RV1MwyGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NHnV6BSxXz1PEcQd68zBs7J1hAByQxhDSB5C7zeoZcczo8Tsr6RwTMePY4TpuPqQHDETZ7uxNiaeW9GKtjvGMpe",
  "key1": "LC6Vm1Cg4hsPu8REsKeAyHc6p2cTyEvKWzViKZdSRMYizbD3AYi4yhxAMY4RPrTcKVEc9GeiZPWixDZ3ZpnCp9Y",
  "key2": "5W4bHz3EPTVieK8zY2MtbR2wbpke6TCcLK4SBSv65MfeUYkCRbJxwC8Q5jEAWH4CYS9hXXDGQrBNxg7u5yexfr5h",
  "key3": "5uWYCVPuSYjb9WPJFaCBs4KBKg8f45qYGToPJxM1yAuogGa9vZPTWiR1ML7SQhNgi6Jn7mg91kNzV7R5Bt1Xnz2Y",
  "key4": "4N2YELMkEMN9f1H5ogNaLthD7L4BmNtgh43BwhFkNz1DdZhB8Xv1pTFvEioFepxZHoEum6eYxkHf9QEBw9AzTeda",
  "key5": "3mkZR1GDkQGx6vk6Bf8YKj5tv2cVGtREjXTyufiBT5S1sgu8WKqmqum7QTv4i4pGtSprPC4Pwvi5dK7ofSVfT1Rk",
  "key6": "2QD6E5pFDmDmvETateHH2YGVfTcxgHZm8bVwZ27NkrBFUvKxZ1w1UhCCzjW9jyFGFEXPo6Pd68hW5Us2iBU6etRe",
  "key7": "5aFESfTA14tdRnfATFErm94gPUNACyP7dRGZkA5o2uxYPXKHde4aNG2PBxtThQYuTeQjrg5jXJXT2VLdFbVeLs3t",
  "key8": "36GTbwDL7kU5USMQ1VwSJApSDUCJnX2ta3CBx2JtGtvfSxdp9KnXPy2ZU6iErwSnGYhtiDMCBFNXYyj1F3XgxJDK",
  "key9": "42jjk2G1qFTYqcqmuJ5BXuGLoJ4jfKFAkNwY9NzFhx8K65NXCwYrLCyj8P1XTCeFeMCA2nUCJTgfcNSPcu6hjQUM",
  "key10": "3PtBvxyfg3iM1voK58t2KaC5G9BYFiWk5NsjfwmdwVMD4wAuqS1iT7CuCXfitzUTiNx5zgEYnZQapRXTzxfPvChx",
  "key11": "3etFT9tqLXwtaPa7Ye4bVWVMknwP4MpffFTRJkBvoUzeDji2RurgxH5PzSe9Jqvaa5bJwLAFEg6c32UL9iYtA3eC",
  "key12": "3m7doPepzv3fzHaFxBnmyDnwjXDUupGtiH4X6kxnR1k5CcUugCG2kn3pUGU6BEmhJw66weY6nd9xxaPSP1o1LDJW",
  "key13": "5kYSdcdSLpUknnpynSyPmUyqBp1ojAu3hno5gBG6Ridtx9EQ3YM6gVu94bqPAoys125iXrNAuttwp6kXM4kNaUhH",
  "key14": "2FK9hQJ3WLCMskpn2fQyewiW8F7C5PSEU6XwxZvShfKoojboueM3FyhXX8ZaqhGLGt7YkHvUjgujxmHV3bTdicz",
  "key15": "AxR5gGyggwRBZP1Zc9Pm1QgCnGywKW553Z4tfE9iK4Hh49JMzHTWBZaVRGDYWqdC75zs51Gh582uyjK22cvtp99",
  "key16": "4YMCrnU5NPQYKxUrBuBCrWS4gneAt9pBr4BrJ2oFsAadrNtz7XYe6nQGN86wv5tG23nqngD249m9YzVHdJCLFjKv",
  "key17": "5NMA6cNujw9YfxpoBMF9xnTQMsx14dqufzajm383TWbrGiiydRVEDARjRG8R2g8mNDzQAFDm79m7UQo9v6Uam9RT",
  "key18": "2t2dGWqJBqrqPeFnN3VEvZ7viRwx71LQmmXHjpfRHJTAq9DbPHyWhDbAsJpf2E5wFVLTx9FaQz7wE23PfZykwX6a",
  "key19": "5V9SCosojoGYznRgPu3QbEQnbj3ERvXmAv5UrPMRtYGqm8nxishKhrD9fSqNURimnQHRndUUWVyiqeWE5fobjEu4",
  "key20": "4NfWQv6bTegYAEPm3QcB1jCEwr3cKHS8bGsSt1C5KV9uEqb7AczmmQbPNY2U5kU8t8gH5py4BBhDiTpBj6eQMS2u",
  "key21": "FXTo3JWm6aiNaEg41rfoaH3udZmCzHuoiwnegudYnvX4XPvnLW1dTTX513kna3bhFxJj7nAyoceHsRrPL12UoKC",
  "key22": "4xK7gN9UYFAFvjk6sXkpSDe6ka3c19YebMWCnFbWRPoFa1YPZiu5dn5awxNwD6qXvbbve2iuv7nKx3VufH7aJTAp",
  "key23": "4RoEeAUezUMJsXMk8eBn385Di3efAGed4RwdxfZZZPJ5S7TaPqymYEFpMpXLSbB93vE9QyLsnE8GGCgf9S9rqPfW",
  "key24": "4PeBs9myjjGCMrP44W9iqowp7ZoUgYz9xEiFBkAc2u5ozCo8Qho7s52LBv2DgCEJfA42K1NuNmp1MSD2Bd4urtdT",
  "key25": "jDYeAQfAwVdiHvR2FeVT2pAKyzh2sLuHZTNUYZV5cmWQYUs4G7mqKS4t5TwW4ek2Tkcujw2k2zSeccE64AeRRut",
  "key26": "31Ur8F7Wf4gYzErNKxvjN8he2pLhU3K8DC62Jypszc2sD1pesHTRKC8HKkPVHWM5UJKTRHBbkmAjZPLtvGcwNs7T",
  "key27": "3f3N2v9FJLAbh7QZPikkKPfhgjWL2AyEweRkD5oqm6jC6UPCiH97G3QwCqvaAty6U5gaYfXYnZHNWhEjm5tCe3t9",
  "key28": "3oBAJuVWbUJYMqdiLnj2cfQRppdnXwRFiCjKoqbw1XEoD7FQPfCMa8LyrbdqWuTSPrax97sJ36U72gX6ec5p2yUt",
  "key29": "5JckpShsUwJ8ZQtcTw2P8YytFwAuqjF619vkGscrKQKqtBDRgjFx7PF8dQiHFnftButTMXWdAYebv9Pweisg4oYj",
  "key30": "3yEg61SodF7W17YDFBZshf3YTqtZRMCLAWm6mgcCCPQV4iVsVKGs8wrZbcrK639gEo88nYvUJfS2iDkwCWzqUbK4",
  "key31": "26h6MQBiCPQYWQmwLTzBDiSbYPB5tXsFRBoijYD7srQ3wKS9o4u7j2nLG8ucCF4Fe5vCX6PxA8YZywd5qkPGpSWo",
  "key32": "3vvirajnoVPX7s4P1BrnoijA1vu7cFvGbQdXg3yADkcfHqh6P5GUf6RrVL8rarP9UVPSdZzFJkyNoLP2rry8A5L6",
  "key33": "4dqdJ3h1JGe3Sz77PcuYDCB8cZizvY8xcFndipMRy2tZfjQW2tE8roX5AGZfmLDKrcvVKM353d3npHigNzjDjuFA",
  "key34": "5zTd7JbukeverSG271nB1VerYzEA2vLjBNSMFj2x5a8RMCEim4PLSN1XkcUZ4qTm3gYJjqhVnhzT49x8wqDRtvxx",
  "key35": "5ha4HYKUJuuQ4z51C2uNLtPZW4DBYM2iDMDgShNSdxorxSvu8kdimSQ3EBkyJXG2twXzVsLEStKiQYSzQGGRPaHG",
  "key36": "4Xj8zTFUaN4FLqwKXjc8PTKyzrt9dTfQXzSmJtpZzGjTzpGMHAExq1WaNDcufKqCXVxmr3jrFBoagdUndvcVX4MY",
  "key37": "2dRjkxpXJKQdGKASxcjzfKSAU49kskewqWUPe1NXdM6MUP6XNDKQyTJkwiCMd9ijFYwRBw3mZ3Mum76weodPZw92",
  "key38": "5uGqRg6TP847d7ruAvt4PQkLkmKsEpyK321aNLaMSberUuhoiGN1SZGQtZ9TmWd8SopwDPhKMm6tm35WCR6NKQXp",
  "key39": "4vV7qaszSAPrtogPN63biRam5fW7EW51NCu46X16eLw3dkhzaUg24g6ywvRR1zdx1tbgkYN1pqsSfewgNX2AJpw5",
  "key40": "4T5yk3ffF5p1bMwKDp712EXkaxygiYJcSdwwG3nAkFYcWQ1SHNahdeusrHMkPJdmiDg9sfCLTcYZ9jd8EzpRzT5n",
  "key41": "2GeJCHoHTTtEKyivVneoL6FLp7jj5ts9J4HsbJpDuQP8a9a9km7vSP9LWmxoguVGt1j56YtvZQrkLksU7XYSixFc",
  "key42": "62sSeqW8eeBUAENxqB9ooyoanvv2oihC4A722NZRjpuD4ArttkQNPsBCK24hFbS7VsJFhNiccB1eut9RWkNJ6T3U",
  "key43": "i2qM3H5FqCmkqiPrvZjn1fz1UAyY7crEav2DPK3uq5HVm87PYjxJhmUpUUTkgVJ5nCzwt6tVq78GxrMpsYpNaF7",
  "key44": "4AyoqqnKywfg57rSYKgzv21JHyhEGP8WMqxCZjeoKSUudeJx8nyv7JkpQqd2kMVaUVoepQPEYX7wKCooXLf6G2oL",
  "key45": "pkAPF6rjdkXYEq34po5Vi9gSU5xesMiMPiYPybAurJ63bkUyhXp79USeynk8SWsxoJdDGAWiEnZaYSTiAZvXoME",
  "key46": "4679NEAVE5aLTTSA9PjvfGKsB5cbDVFLXXqQN613wyaW7DrdUcgLN1z9DzDCnro3yyBDoTjUq6U525wgZArv48Ea",
  "key47": "2KX2GrbBbW45HvgD88qv2SNSkfF3YC4DP3Uey5N5JKBX7YLccdDsaQ8WeX1x4FXpSEhaT19eh2LEd8SajeC29HFS",
  "key48": "5pfTu5iwkcSEi4uCgCUuaTFHQ24feXhdAqawsvDPC4EosMJyz6uXX8oPfjvfF5STW7LiY9vEawk4P9rdTBSZJvgL"
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
