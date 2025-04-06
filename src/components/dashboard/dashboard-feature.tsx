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
    "TiMaw9rEZ8cGLnyMjsygiZhcjpdq2YR1EH3ucrwH2bjdKsvDzByHX9iXQ9G9nRqRgH1Z3Us5UVnPUJALddVWsjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v3Pg77toaMCTpRf6DLZfg8z8roG72A74GjzvDKVkWUGoMxWCQ9PYT8CbEaEAD81zmwpdqZADkwNgNZ5UA7dfMZd",
  "key1": "3LepvpRJNeLv1N3amWUHsTJ5ydtzcsvmDf4SKAq1Uo6CbmQVPjsx92VQyayCqwKaZP9jUZY2x6wXfzDvUiEi32h1",
  "key2": "5SgypvQhd5sm3E4n6DLnyWvbHAk8kuq3DPGTTRYKbmZAYCtDTDmxDXMptbg5EDPyV6cj3RbeF1fJ9u8oJbJzmXMX",
  "key3": "U2cEs7XWEKuNNqWCs79cuLgKyP1FQkSG4kzfuARZGHAwayLHCTzX8qaKQXJQJU81A7zSYo5JXFbQZVDwdjyvxLi",
  "key4": "2GUBkUkcNz4doDgk8Nw2qTBJZuZDGGKCmG3sPSKDMrbHcQWuBPVhQs8XmQ2T2NhpYP2PE8i9uuFugdjVA2zFPd2q",
  "key5": "67ocd5AmH2tX2KoF4HjgbntcZ3sb8N1uMmkStTdE1oDLtHnpcTNAH8ZPFbBaZqzQWJc3KqbYsURVW9mUri1j9LLF",
  "key6": "4cqDcxrkJEd7As3HKWT3cSi1wWC8FUPHWmLbPkr3PPvpem5TDbgrQMx5RQP4BfSjxuPSTtfpDirDtoSf78svbFPJ",
  "key7": "f1KbdWkE3jvtexMf7zLg3WxWsZhXgV5nbtJwMxE3BT9FiWEieUxXJP59NuYxhDuNifyofLVHLuzUpTdUcbx16nC",
  "key8": "5xa9TsRbrK876KsfhdoFV54skSTx9YGNPkUgLFqCFNUW8tx99b8BjQdiT69fyuPbCHm6FqVvAv4rbCLtsutBp66e",
  "key9": "2fUSdtVngHjwP45zKGPvE3V2yJHKG3uL9aBbbRjqdGWk47Brhwk2EiVFa985K8pkd8KtfwfCYaPTtH67Lpspg38U",
  "key10": "4RNWdzzjTD15YuGSKPTVSx2BUUL2FiderxJAnqejBZU1MjdbF31DyLydsqW1XG3Gk5UhPtYMRapwZ9P13Bq9hMkX",
  "key11": "2E9AvqaFoaJYYjfPE3TeyhBVUaNxqkr3FBtsRSLzugpYS8M6THmvtutQbNxHtBEbB62BmELmHSjXhfJtrN3Gi4d4",
  "key12": "5AAE2Np4gJPcAYMfjcHRfvxkmKBuziEbfhXVYdVBd3tuD4ijGLw5YtSau8CSB7ib5nJcSDrWrdFn8pQNx8AgabCS",
  "key13": "4QShK5zCA7RqCBNSQ3spfXWVRoZSAYwHWJtBvKFx6ePKSjAyM1PhDWc9xZMyePB1unWmuobdtDfoFWQ8sE9s9AZe",
  "key14": "46e6RnKgQZGmSfmU8L7rNCJthVK2QSqvxVrLW6JSeHb8Zs1Z61fUfP9XRZfUUduo2nZruQu2EXAhvV26ayfsJ2Je",
  "key15": "3Gay2tLFU7w6TfkohM8U9rNDma8VEUdjcx89kB5PDWmG8gwudHrHjai3e5c7jewZ77rhcXfXWHkgkWsNEnYee9cU",
  "key16": "2YEDp9cEoC3EtdKiART6uNXGDRBChcofNeF1ASA5i8DTgiDTQarGMNfuqJrKNTdy477hwiBbgyTTyGgavnJMjygb",
  "key17": "1E4xsU3oBRdssDmEGnqoW17KQ9mqUv6y7zSVYtoZA1nn7R7daJCDntBPTQMJ5GFHwfRQyDXxpxzaFXDbtHXgm23",
  "key18": "63s2Mnfh11Ctm6UXHT2xr7CmSWxZZbzDzhUZ1Ui9tyCwucsRuVu4RNpBPzG4oazHE5B5yUndcUN85ZZWLNv5YGqD",
  "key19": "45APYgTbpRgRVXWXtbjSxTsetXVqykLNK76qRVqt7k6nEsawGyoX5dMHvvWpMqH3X4sRN8L5R4466y7AGyGNJZXu",
  "key20": "pg7kZUisBwk2CcLLVPtzQrFTETm3n6LFXZYw8FHzPKpYe4ELG7pqvRydqoLqEHHTpPjnAaThMpPG9KSjZM1oPNa",
  "key21": "54QwneLMViqsHH1dgYqSxXv1HA7yqTJUBajHnNZ4CYAZ3vsazsSszXPHgZYRMdG9MbA8jsYBkzzwGnNKEkhHyzVn",
  "key22": "a9yu4rgmJ3n1iD71zvMmwLavjmXz1o5dBJ8ErmfCzf9SdRLV5zLDUpqd5Ms2vCCFNnkhufm7osKRpi2gQeV34BJ",
  "key23": "431aRfpE1mx7rhZBqRPrxxdwzxJYqt739eeQe5w43v8A2X6UqCjBcvGo9eavdBZPwjTjL8bep6qqSJG3fEzPUkQ1",
  "key24": "TqbQusQ2wKstfbnmcrXbaisdgu8DS6uPfBjE7vyDTuJqfdDMgo9Z8teAB8fZsps55gnBMUUVRnGiNJ39GkcWQ7F",
  "key25": "ubtkuF8PznX3hPujUswCwHDMpL7W633oN7DAcV3hTU3xGtGDkAqiJnBD77E1cGDrunHdPv2GFBgmqbyWcZhq8ZA",
  "key26": "5sJjWLjUyeFRXeuEurvmXhHpeKh72rEErhxFe5QK2BZXEnxRqHB5n2Bxr7FERY7bLWYMxhpeJ5Az65oV2eVmQXkv",
  "key27": "58YHPy3kDdjApjVw7Mc3ujNw5cz3bHLU9hZC1vszh14cQAepChdaXJhmnPLbaD7yqGV9Y3CizXorHyr9LZt78Boc",
  "key28": "4iFatSJdMvgY9Tha4Ri2Cnp1HASQwMfDojM544KJJxUrCpwUWDU7k9CUB7aBRa36opMp2YMdgAQdCaPg4xVC2rHA",
  "key29": "3dY1LC9gsjP3iFqfaHifTizVYdwWGhDdjkHZn2Jyw92mujgYTy4g546ijvJ5EHZb1wPAj7m8e98YjERUmBzUuaAo",
  "key30": "3P3kv9bWhv9peBwyP9bRkWaRtS2fef6QK9eGck5geurmasjkMnRdZqyEErBwetS47FezpNGx7JWvWjxCbx4y7cr9",
  "key31": "5bUc4dW1M8WAyA76MEcsSuHBKEzEAeBbjtouuMJ98T3dcdLBJ1edYpXiHq1DfRpcggUSLcbWpcnAt2CgcJCU2k7C",
  "key32": "2oXQJtTpJyCNH1XhCp4bi5onoRRRWYE58WNZcRTRdC8SJyBggXohP59c93DRb2Y2g1gfAKAHELTDqifnPpTmWEcL",
  "key33": "uRQrf2GpWGXttkq2b6eC6qfHXAS4TtTeqpXkHd99Fyv82AY5tPhPbgKt1LDNAfkgTkW3hAzvFbsUZenMnFJhpMR",
  "key34": "2AzLQGSVDsP2jZ6dCWBpSbSCL2s881YMqiXNfPzZNSK2amEQZ9ka4u54k2vmgtepP2KSNtFe6bYx6HdWsoYG3ATs",
  "key35": "5j4TWt5vWpRHXrD8Zj1mGvhCFknjC7q9he9bcqUB6wgsCf1ZJWvPVL5YPrVVFmqHPpEtrSdUhJqkikZNDrGjfyEC",
  "key36": "3wVqSUWiVDkjy2NcMtBzBnu4jJ1Xk18P7XaNHNjbCzdQMWTNWxyD3dfw5NdVgHPtViEebiR3x53DUCBdF51BPzCY",
  "key37": "JLvsGCfm6vVKX6SGxH8iQuh36QdKmdmVFMJCtnhCzvQyzNG5Yj1fVGjxxFdjNz6x8Bjm7DBVcEZLNzvTGyR3PW3",
  "key38": "3KmAvD3BUEpDaTgXciH4pfbqgvUzz6MQWX7eKXwJc3fKQwxB6hJfTfrX8hLsgXKs4gAUtZLA4rH7EhEFvY1ccb4n",
  "key39": "5vKH3jtjhxKhZ4LWbiWN7j6f9pyjKxUvSPZM7DpyzJHFySQPtoz4iZwDoDRm7fzHEVpZe6aG7hq3JuSuBmfPS2Pq",
  "key40": "54jhFqSq6HQvYCUQacxprdN88EbDNmWzK4m4Gu8sKJcBSdmc1oGhyAh7HCnCAducTQD2voByKHYXmzZZ8igkdHQ4",
  "key41": "3151DR1294y9uRtQDGW4sNoERSJe5Htf7U9xByhhs8EMeb2Ab6FDCD5hJZYycE7ntjavv8D4rsPXcGJmkfbSj9np",
  "key42": "2Fo74MgJGa6NtnwFwUzCMszx5oCLk99ndCWo4eWFxfJPszA8ZD3dqpAMm8prmtZxmykrVQS4yP7CQDLP8dARvez8",
  "key43": "ZbubH1smX7nn5aEiDDSChx2PEP776CvoVpiRXM8ixx2Ve4oZhrDbPZ6SihMLLWV8yaSupFjpSmJNxD5artaSJvD",
  "key44": "3QMSwVmVZxaVAYx9rJcu8RKnKXHhahNMXiV7heKB6QfRbmTJ1DeBuB7vUXrrYi9GNrexVXcpdTMkikRTs55yrR5u",
  "key45": "2Wpb5urYGHsoPr3C2w3T4Nkp6fvNdJk8Rzp961ETGiUD6JR782GWT1qDecXbLZSqqH45dq6JCAga7wsBK9g2P7QT",
  "key46": "64TRdP3KuAMvNGGTmjTnbhHgPUdr3KXhAuSC5rSp8BRSNCYknnLV28gWzwMjfEiiNGJFk5NyJZzZtJhFFdf58DWk",
  "key47": "49V846py5g7vDEn6usULWt7hvTSDrQ5ygVk8ngtDnpD2aHXcMoTGh6QfKpY2ceqiz6wUti9YwsgMQmGgGmhT6Fmj",
  "key48": "5W42JSoRAE8uk5YbKyJqaAdcB6To32CnSBbAt72YbEoMR6JVYzcjjxq6pwj4qJAbFi1DxRhiqth8iEXgiChBPQHh"
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
