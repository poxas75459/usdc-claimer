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
    "3DNVb8GDGjaSSZtPoVTVA7KcWG2GcGs5csrVt8J7zFACtk2YAhZq9cCvCX385qVFLgj1m3XKyKNpVrfidQ14vRMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5H9mpPFAfkdJ8Hnzx9eNcgSTC8x7pqRBzcNoWS6QRRrmvTVBKgRjK2ZuJrvmuxHYFhaZPwBJUx13nmYHRGRpNfcH",
  "key1": "316ztsS9BPmTHxpcDPS4hRxoC2Ykhswr7rMqbxQYRg1avRhCkiknGXu6xEXPCgW4pwBSjnmEet1xkv7nnxZE6syU",
  "key2": "2SQEmWGfhgg3ZznM9zghyrPgS5E5qF2GvUafjvHkj2hwXMKXRC5sQj8CcfYxUPjZ4qrJCSFvrf42pqXgY9djQHRy",
  "key3": "2vjp5zQczpdtxLCf7h2tEWbxXwvR551W2dkNW88HqM6nbSzmUhkJaGZJDNNE32Bu8JKNkQ3SiYVmwX1hVjqNJoAf",
  "key4": "66Gu2AyycaiMjdcN6mrCH2hAkfLWtQhkPN9RVxsvQ2LP5BJ6Znvq3uATUihwoLHnUGacX5UDvCiDAMpuEuBBCKhB",
  "key5": "5azRdTd5nxLsCJMYGJUopRSPDnWtVFNx2bmoEaqWKswW1TDaNE3Tw2GGcRk3fp3ffLMPzQqrqZiXF64Jnq8usarv",
  "key6": "3Snhy1Q1hwAxiL4Tbo9bwrfzXmGzhjxLFVVHMt4cP4uKyk4pkudSa6DJBNuBLqemyytg87ARSFfSxv6zjXGABpKt",
  "key7": "2UdYjBHKFmDo7hmibU1zAy3X49fgZdZ7qtkDJycRDUcNi9XkphgMCHuMqjA6Hw7p6rGLLMjtpuneigDJ2QTwMs4d",
  "key8": "5fxFVzFSfvmZ14Up6tFN5KbPmUVxB4irwCwfinNnmvrj6DzLpAPgXSTVM1BpnjwnwfuiZ9j4U8JLzBPZw9JqUQKd",
  "key9": "4zA4yjNh5PLisD3tx8V5niaiETMK7a34Wu7sgYk4XqC4yEWNR1V3uQCaK86cf62ZQ3QzbpUpEDN7rBwYekcKY1br",
  "key10": "4KWvfE2G2g1TUPrwMJTY9j2UkREkCUhmF7QjmmZqWMDyCwGRV7wLw8fkGUadLd8TWzizW2pySRCDayBpNpSGrZVH",
  "key11": "4HdCuStGtzEYQXoenHdGZovcDiie9VN81Q8dbLJEyiuPXujibS6WdtKzqHT7UAf1hyXSTX5nBEyfZBs93DhJVrVx",
  "key12": "486orLtnmN64CrTHszQkFqhaogx2GPVMH1bCEXe1x9H7entQ9Z4dR5jiNubFCZ9vje4CfnYdkxTiq4ajXYDnrpSu",
  "key13": "2qRhvK7uV87eWEbPa2rvQHR8yz4Kd3axgjkG3t2vtm19jCMqAKzF9zMtsRLLJN7QRa7MjVbFZXUSAPx8ecSEasCs",
  "key14": "3g9PGNcTHjofjsgGcZDyuay24DhkXQdx13D7badLfzs3RLM3kR49RSGeDEgYZSdV54iH3H95yvPK6m7LpmZXdfZP",
  "key15": "3GYXpUJo7J1y3FZfiWJP4G4gEtcZmj3bHXMYaE8jWRbicbPzV3d4BEvDwrzE6LAKzdoSRahBiQcWUC4BZWuw51hs",
  "key16": "5ofNncSjquxK22Qx6msa9CCchWVTTRekVpdd7UTPJJHKRoMA6GVqjn8GSjGnAtqbvHtSPFAtgt4Ft6DCKcMma4hS",
  "key17": "5PFGP4us8CQPqMKu27TAwqwqT5becUSovTaJSa63WBn9v21diN3Pt58LXcks2RfCqBymBDAZFD4bHZB3Y3UsMibZ",
  "key18": "Tv2qYDJQmUvoWrwDyvd6ubcmEaaALFRmacdKEPEvSursco8v3X1qGvE9kyk5w3BnS8kv8UQPGPkNPhubXLZpPtZ",
  "key19": "3v17W1LhDbzVyQuWjtW5DHUh98EKM2tPfRWkYPzSGYQQnv3HN7TseUNxQVNBDyRrG5oWYVTNWGbTvYokbPZC5Nck",
  "key20": "3VecWiXnCrdDEEn1upPTjekuSDon4Sg4nWX4C6Tzj64hUCnaWd3zrtv8U87GzP5vf1FkSoZjqheQjtSUh4g4Yk6y",
  "key21": "3Cxc9fLacVmVZ3qUzUYdxvdzXYHQ2ufyB4TEbJ15e2uDWc8wBzHKZjUzNs2EdP4rC3MkX5gKiszGZxzXa1ReFdFa",
  "key22": "3BVHHErpX8rnVYALksJ9QiETFJqnHbTTBBWgoFsQCKHPe1P7GTfA6TDeFCvMJLGnUXYwyjeiiHn2n2rxAgDCWjcm",
  "key23": "fKBFt2oVwow8b9TUyaa2ybkKeG8DHY6SJ1AyetuYbM8b4Dg1HfzpquQJ2yHRFnhMRQVoGiJ9H8nKoFQVKm6LYdv",
  "key24": "3oFuFZDf7kLZym815NfZsH8xtrDyR2TqCH6tkP22BqWKjQ95pLu4SBDpf1JxEmPkMuRYNZ2AMMG8oJnZC7a7s735",
  "key25": "4ZhA831CsRgN2XXMMiRjsG4uxyDp6U3LVqwkVBgsTo3cqCMdvUVU5kvbadWauT35P56AWfiwGX2v4MctdEKEkeYu",
  "key26": "6KxFCJiLp7Evi9jr2s34aiBnJ4FAvT5ATtR62PfWzUwk6ozRfhoJoaNSTrT2fCqwgih4EDXbM1XrxtUWccyCdwD",
  "key27": "4sQfm1i8MpcytWpoNC3AsnD91JFJcXQWepnnhtc48SRNAWCqCr6JhMyQg1MiHAyN6Fh3Yqw4AP2w2pMP2zEj1LSB",
  "key28": "3xt1UpZXjEMzjLpjDMFchHRNqphSvyRuZBKPSSDeoE1BLZKnNXYiqsqDMYonbCNPxm95QR8ocRgbXHWk18j92bzW",
  "key29": "4ngEPz6T5PisZVtXSnfZEFtFsAuUcu3ZEZszzGtt4FtzTBcLG1DDfBbMkTfz35nab9PqK7yf2Vt7bGptahkRNVqa",
  "key30": "4N3FfFxZRQ9aQzcdLUYpGbEoyfEt6WRCcSeLRrnC9J1HVArd3DkkCNhr2jHEWk9jmiVUU95Mhhu6TkkZtk7cgvDo",
  "key31": "5gYPZ2xPdyaima7g26KGksKVigYe3mpeSyC8vJvwL5M2DTNxwHFBTfrVSmsHoZdMRPfqZBHYQs8ENS6usUxEVjuK",
  "key32": "4TEyGP5sLVnsdzGwgkLpVgYjgBeYG2cotnznzJoXzTAMm8Evnz2jFM7TvwYsxd6u9HoKQcd4vJNjHsyZnWHUTRS9",
  "key33": "3vWgMH66gXMATuWWJ5V7bTefa9XvPiSUGiks5WdvBLYjNr2X1niK9PjnGv7KeVjKWuUTjcZScyqULXbRsf4bpFZQ",
  "key34": "DLLcK9RAh3xoCR1uUxX2zgLuNKbjZ1pChRDk6KWFtikKaduRAxvh3hjMuNnjF8QoYf5aAcTXwyenNSvcRSci8ZV",
  "key35": "2e7RzoTwmzDj2CPCgjsLz7gjHBYtX6WbVx2PnNcy3moKayZfshAk8XSq2nrkm9QiuTAHx39JooEUwv44zTbmMvew",
  "key36": "3nBaniEh6Cz8kjHqRETs5ZCQ1RKFCSu4PecdHntT3FyTi3KybaQjctDK9LgtWkjjMJgBdoeyVvKaU4yfSrH3vpSg",
  "key37": "4rm6b63hbwhokcNKt2xsqtPjfG6TYhGjCx3FE9B48uqRRy3AxRaNcFScTZxQFg8VtSQ3duL5FA6hhzbJpeqHk3sD",
  "key38": "367mQuCtPMehuYKzGbcGatANEmidE8xMGh6Y8ub63ruMqtQdhPeA5ditP5C37J8xhGzjZxZGuUaef24DswosMGLZ",
  "key39": "kMrhvmW4qTfUoLUTX4FJ6TjvTPB4Nfx3sFfetX3CQskGdD3StXBd6fVg4P5KGxqPRx13rw61C5zjnFG4RZdnjxd",
  "key40": "5TddkHSq4EUMKVksJGKuNt68vCphFnLDwwe2xzMJGJtkz2YqEB7T1MFdjCZ58e6NTR2mwu481LV4cbfTXPX38ELX",
  "key41": "3nfqYKrJk1TtZowmbSi2ghY1ovLajie8mdqxcT6ZDVATJWR1u9zLSgbxs7dmKm8iKJG9Jk1d2Ns1e4G3jRWURM5m",
  "key42": "3MQd3p6QdpTMr4murn2LjWYwMv7EZef5isdoTSi7ukACFnXNbsKVfgnvF3SfgguxiDYweomiceiZvMLd6JgTfPmz",
  "key43": "4y4h9bwxv7Xu5UTrFuYc7onCDMbvyqRaoDY6EVUX1F6xJ1zSDo6ZqnGjuPfpca3hNEE2PgLdZMcx3bejxRuDUn1V",
  "key44": "e6jD3ypF7v1xJg7HRKRhLaMYQschW3Up3ACJXj4935AqVHHDdwvNuwkoi3T8LgwhBiSQkf5vfEYzKtUn6PpopSo",
  "key45": "HoPeuYXxcqr3zK5SNUC1ZjEpHLdfRGW4RsYTXSbpHpvmF2PFaRpGBjQJVuAtUFujBAsANL3wrLT9nxJ1UdsMbG5",
  "key46": "59sNS4kRCD5FJLHmyLBUmV6xSAiBVfp2WAHCXucsFBabxKrX3ZxWXDnxZXYz7rXzprjLioaxJ3ut5uB4qboJF5uV",
  "key47": "ittuHZkMoLAmcYYSMvLmRo2Z652yNBFXYqE75wC6kwkhvEx8wX6q1L5r67GtwVdxVQLmd8NF2P97Lkx2NViYfBE"
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
