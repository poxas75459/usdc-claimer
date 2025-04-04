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
    "3pCs9rKTGwDYNnhpfTJJpQt71s3M5ktPuTKJqTMk5QPuaGuWwcGNgZrirebMg7dPCqsrh7zAJGNyyP5UNxupwguq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H2mSESFuBp8Feg7TFiVBArQncPLK7Uf5K1s7nU7xMgt2fGNcVytiRDJT8qk55esB2HQKmGic6wzuMFqWDdP9oR6",
  "key1": "2YahRV3ZJ6XfdbAD36ChiqsvTSQFUrsDSrnUTGGwcKQv1y4eH79oNdQUnJCuAWQk1PvcBgVjgzixPmTJVrWf2gUp",
  "key2": "j6b4s4a5HHW4hPPHSBRunPp4vX7E8QANvDVcT67Z6SYScJpjwUMjdMur6i2XqAM2JNRZkHKnCFDzoVCu7hRxGYt",
  "key3": "QTAJ8iWsfpFBPWkEpwUY637V7iPySEAMfMjPtC25V1uhs4CBJegCWfaEkoe8fVu8JyeVB9LDStcWLHjaZsjjPFY",
  "key4": "61xmf52hJmZ3db2SU5MfjNVCa7e6xCUSmWhBuRzVk2vRa9HZwgA53siTqwQYpR5EWEy6EMCEnaKCzrML5aEKM4Dv",
  "key5": "4beAyq5Y6RMyA9C74C4pPA23qrqgxN4tLMdMkEfVQWb9FoyCd1UyjWLGuCPEN56WAbEkNazmCWpjMdbP173FMXka",
  "key6": "2UFvqYLTtbdfKU5CG4H6n8T4xJSoWcx1u3wWayPdC9LhSQg6CGrYSmhAz3aGDEK4naSEScj7n3eNe4DQL7veowPG",
  "key7": "3iEARqbwmAAwToYABP6SQVuFdf8oku6jbixLK8i7G1aqXoBzvvGKnoLARizd8x3gE31TxnuuNydxBwNCSS7Vb7re",
  "key8": "2Xap24DfX4Vh3ffAit8cJMU9345ikAftrS7672riJn58e1NdkXBNHBuB6hDqJSaDF2mw999WkAvFrCRezrZEvP32",
  "key9": "3kNm4gPPxPqR5wXQSyUdRM8Ax1j5i2C7RPh9JUz2kKWD7rANF5KrXxENxW7Zf2CEUnPfmXnmVA2xMvTrCMMAU43G",
  "key10": "4WbyGtY76xRaR2xVnJCsbkZNkKY7Y38W94CtTuLxUf8CLP4AvX2osTMFCw4qH54uDfoa3a2MJn5C9w7DeywTejE6",
  "key11": "671KeQnG3UbyUW1SjK3JKZHY5aDUt5hkVMUu3pBoc59Sp5iS9vvHhErTbjS66ZRFwrSvFXE51Tbb9S2RmaG2QnLK",
  "key12": "z3u3Hinkw9kkYZvMbCyrjuusHxQBjBKtSVhcC7xtZum4hGDtsYnWe4RKEcxLRXSsYufoAtBV8DDLirDZXLRK6ES",
  "key13": "sVVnKeThMPr9PXSqBV4DgBRBYjaPXKfH37mwd6KBb9hXxv56jY8mnrhWokLzPYnbB2UpQ5MYKt5FwPPEmuNtxkC",
  "key14": "3H5EEH9tfkFaCrUxJCVgXGCA1iyXnwWNBkWTHKQNrgUm5ueoQXkhfaGJDPGBBDMNgBtTXDf6Z42auVozHXbdyUu9",
  "key15": "3q2bG8Se4685obUBnMXYqTLRFBxKxPYznnKE43WN2LBkoAkkRAKzMvStfGcLiqavVUUtjNo4PNT9eNMJ86HFmwxw",
  "key16": "2b8nwUDKQZuHwBLGJskDeD7RPgY1A6emvATc3Cptr2pAMiHdsfsFCHdJwydGo9qsRAX5MNHV8E6zqC8e4d7v53Aw",
  "key17": "42qxtskwAWLsNGmDszWyPtQJFmG3GF7DgRGxc5YE7sKNZCTRpAwct7YCv8VjXd3tbRdhnjsEanKD2Z9pKkb5dXgd",
  "key18": "27Dc2Zo7nKKHUcHyoLz4GJjLvs8euKLYqVqJungwjYCFgG4LLGKVJhh72yoKGXFkdGtjtaRqwbasUJDk7rRNZzKX",
  "key19": "5cx2gtZeFhVrYnwB3PaVBjkBQEMdHY3LxPG3wnJKksBzXjYKZej1UTqG8zazfPvyW6Sac2gdf5zU2ttgj8kGRjf",
  "key20": "5PqxPLjXL3fkbvTxu5zFLAPaVuppGRo4AzNWmHiYHe8sG9qSaEvbmre5qWRi3i6NVxJjjADda75hQQsSy7k1s8Vm",
  "key21": "6bWZFmZGpEQtoRivwHf76qbyTKnrv4woURqHFSbpUYnj1RxnLFQf416rpd5GK6mbkxYQmybeZem3MsDJqjLP9K6",
  "key22": "4a9KDCLtki5JHvKWv5QVDdyHKvzcNQuJxCXpSMz1a85KGT6NAhm8wygGbHBr8Vcc6kzozt4hh97ERHnQWWguKerN",
  "key23": "VejPiGsJ7HJa4gaCo4i85Bi5jCkrFTehe58fGEj3kW8a3ECFeatunLbSPiDNUk78XU1T9dmhAskEsQMihxwLRU2",
  "key24": "4pJDBFiGufx7ihrgd4R8FqKnKdtYqfgXijjSTLuCu2bPCpJJSWdCEiMEbMNrsLHdjHLmeKxEtEWWRBfwfGaZPWJj",
  "key25": "51Lzk6RLogntxbv6ScaqUTyZEYidmsog6uBqNM7beHX6RCiYLZq16RgtCvQrPMG9TcUiRstbTEsDbNkiRSpLWJTD",
  "key26": "5TjifnuhcyCnsEezggmYnmS2NkZ2wnsFnJBGDmgQmYiu1DCewFKiQGVd4e9zhoYeoxSAytpABaF3D1MAqG9kApHB",
  "key27": "CTaRUfoJdHxb8pktTDpa1pvpLvQ3Fyv8Qo21KB5opGLnsuQCQEk6JrK6Q5diEcn7amRaXRaEhRQfFCkmWB9MEPs",
  "key28": "S5oc6MTCq3hooXABikmx7EGH4m87XdH6q38t6moCGwbR8TiTxfUspCjuDs42YwCfFSwPjFrC8tTWrCUJq4g7f1Z",
  "key29": "5xXsT5fEn1KbavGeFhUZaGVNLEAuRVU15bsdZLdDPMg4A6JWW6xJ4ceJuXiUrY7i8HdAYijYqbt3UUEveeiFyZCu",
  "key30": "2dLvNabKVFbWHkHoxX83a7bmzDpWBJjfvH859yHLobRkV7mnvXBxEViPkQk6B5pmNNCC3KGxRxAa9E2Rnd5NrPHf",
  "key31": "3PqYuVrdrH9RFi8wZFqPsp8viDef14auW4QvscenPQYBDTJArYssMh4ofpvcCsmy1scHBA32m4B1fog2cY4BXoYB",
  "key32": "2ErefTSJYwxYmUeV9iApp5d5SENBh7vMpDMemyvH7xswTKHmK83WiVHxnGmhjwCavNkGEj1GxXdVTuDjmPknMij5",
  "key33": "41NdUJ81SnCDQPse3rw4u6LKh2K7zBusYorQ2F46JQH4bVScJWwyicGN7uHEnW54rqWx9w9kgxwAvx62p1FxbJT2",
  "key34": "3QJTrAWp6AFjfEHwG6Wm6ov5xvFG6rWE7tykZm2FzNDHVNSQFSADdPC9721ANssAEZiLEZsQWJe6QxX5YNuBeJAr",
  "key35": "35JRL7EdAXroxMZV15VLG87sRPWGefMF9DfnwmmGP8hXuBfwsn63MFMtvinY6sTb3qPmyRQrQDDVLpXTaCrwDkJh",
  "key36": "2goNfjTaCaQnDqCwuL77wzDMw21M2Ci5zRcXevc5ysFW67VKgWVxd6LqCXF9HRvgspdN1kHsdqpeHk1RoKmobCa2",
  "key37": "3DnnWZZWs91osCSnWLRFac3ePnZDUrXcA5zhAEq2TFvuzynGVxUeVgv6xGS4j4imKYC1BDhx5yDL5ovxbtAixvNN",
  "key38": "4Z7YLvBuYChVS1kLGXivHNZs4Ucwap72VwDEgNqEgAFFUfEo7DvdSTFo55JVeEz64EkTDLsLPnjuPUDgCtLDi8xk",
  "key39": "453scv7wLBLB5YUy5kwtV9FzG5ab1fWU2fAckkzGm7khkhbZvwEEsQBKdjQgArYB4SnwXbNx3XpjgpiLK2n6DW2R",
  "key40": "62MCr6LnJjSfG9rfx4a6P7PiViq3tTjyNEmywUfUCkpTtNXagcuKVGWnXex2EgeXevoiceATQhEnf3Rq9zumVVb4",
  "key41": "3wFcQu7afdxNd8UKki8WSsJjarK4dnPDbGcGQZFm2zU9655rTZPbwHEM4mSSbsMNBWSaRyA7V9KXFF5YssrffoFp"
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
