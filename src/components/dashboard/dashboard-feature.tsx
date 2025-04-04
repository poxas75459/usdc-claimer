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
    "Sycsw9GVjg4GeUkZ4FLbpacMFkz7uj9g4K4hZMjjmtcHoy6UcmQjqAAEhxU8nBMYywhSyjnJBCe97kmeePLc6F7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YDvTquPos8gZcEzNLSgi3e2duh1B8MDEM53xjfQoZYDtHSXeN6i4ZpSazHJLxN4QoBguCexAxj7n3LEVJUuaLSt",
  "key1": "67McGL4tzrXrTR9syJYZ7MUyanWXaQhJiQNsL49urKDBMM4TbDHJniHsQ3VPQ1YHsLdTj8gSkYhzvBBgMTZqeeqL",
  "key2": "57JpddjawBgvM449DB68jwh8Jf8wAzRdsKxvQPX8maBHXNueqNLWcjDnhMz3DvmfFhLaCY3dQzYZFS21qj6ULr2Q",
  "key3": "51Yav6z74BpeRNoQ1zRTsFe5wRKgC2eajYtcdUcnZnxbYpXeNyEZ1Rkt9TehiRPS8dRfrhCxo8c7JcQcLotShWHj",
  "key4": "2Ew3Ltn9Q7M9DhE6NdffioNCeY9fLF1FbQKUdKM5Ut3Xnsr5PTkUYNhvX645DoC4DbmMpjKCcKAjrdmsMK8kLjj8",
  "key5": "23AKLnRk1TecR2QSq654ydRSkZeYWoAZRr2RkTR4G1FCrZSEELLu6ePPPs92PA4iqAs86Zw8gPvGGGCEipAt5fuQ",
  "key6": "41ychUZTNyKzrhVXsEsTubRsjQnwirUjz5X18nuhWeotifFfVs7hR1rBszWKo5zyEnUsBb8JcnHhmxiV7J6EDH3Z",
  "key7": "2qiTyPsWx5NsrwUDfLJxE6QevGoozckcXu9Lov95YWgBG57WGK6soQP1guE6VT3KB1ygDKDhhRmNJFWBaYvEa9x6",
  "key8": "4DbrBMpQDC84bpcoGnZZ2AiC8x6qQDjNnYrQbMDEgtW8odEZ6A92AKrHfP8uBLKwEPrhNTXbx9H86XHzuRYu9CTc",
  "key9": "5MZCsfX6euKq93LVR362MbJotGGj8k2FmpKhu4AyUeYgQD4D8pbZHZaiv8FAPkiMUX6KrEb2aKBN3TNhwhxKZjvm",
  "key10": "9SnFPLnRjKXKhqbEPRAXp8fAvU9V2WVxzm8iqMztfzDG4eKJUWw5gwmRR8cTXcDiarDyjpetWWpLsT5D9EWFLTH",
  "key11": "2oBNyAKGn3GmSf1yussZotf9croSwSNdsTG7Y3FXXZEN35FkAy5mKJRDncWCCzrPhfebooqywsbJPuaD1jcTuVGy",
  "key12": "5bWPkogi92GbnMJXTbKfTd7KAu2Y1psQ2JLhFuQQmoPQW39gPc9NKM2y6XHPYJ1VZdw1tABcMXeCnxhsY1KD5oPS",
  "key13": "2KUcqwbktiHeA8NmWFpJHxowK1NEaJXDda81euwZkF1H2DATV8Vveuh2rsMXkvWDWywwaYvmyiXCUbQhwUyUvp3x",
  "key14": "32enDXw92RBCAhkUAL4UJKZsJ6ShyVMhLK9QoMm4xkZWGtNJZH5VwPP8HeBGjW4oREBVse1pQ9188zxKGtFMWJuN",
  "key15": "5EEtCF7kpUHqLDVsAfXbqLVYcrbpWQiDdFjWk2Eo9wviyjooQpE2eJEtiNSi4ZtmcYj2ZsPzcxdRPnsCT6zhXYcV",
  "key16": "7PhxX1PV1CdnLVGgWRBkE8WWzmyQpSzTU2KENFzE4vYo1WajfzXb8tgKTJWroN1cTzqYhZcHWPVjF8ar3dWWqFe",
  "key17": "cFDNb6gwrrU19iE1ACXTFeG5AskwgdmaxGBhYDMHqxXVwEfnjPTJde8TWXzwvsYKMTXvv6QWnxknZaz88SUWZpV",
  "key18": "MESSXi5XJEuhE1dAwkwCedHHwfy4Mzpgn2wfDQbFQN9vLyKSvZQt1PB8hRiJTHVXxsGSe31sX4Hya7h1psj2MG6",
  "key19": "3eEFCU7cn48mN96PBnY48AUz2cmK6n7yozoN4xEnB6wYUqCnuZZ2yGjvfrCEk1GpThg3penWr7vMpLp1S9pkBVXG",
  "key20": "3QDwNRLZVP5qUhLtN1koT4zbQKT7z33ZbA5BuDQnozWp6b5hkZvDUmuAPeenvCvWMVxizzhbmBVxgkPwHtcTidTo",
  "key21": "291y54TS9mHzLTvWdaRceDt23hwqH5GFPYU4UeK1oUre7PsFDi23FUxU3wTTh4UsC8NNE8XtcHxpTtR1J6bGGCpD",
  "key22": "4aRjMtJaA99dxgzow5uW3AxZvJoxXuwTueiMQA1iw23966ULNrbTBUuMZWCcYV8fLQHjMYa5rzrBuQ6zaZTkDnv5",
  "key23": "44xU1Wyri2yQMZEMXfSPZL76QBz8HhZfWiVVKLqZYWzadFoeP58SRJ92A1SEE8cbeUUGDmSigRmmUenoGqgw9dwX",
  "key24": "4hgrQatLEFC89faKLE2fN2K3Fjo49FdUe2QkqM1cn8HGZAvmz79U3PJoC9haimUu4DZxwW5xcB8GLcZxDCtbKb2m",
  "key25": "44V5TNpwthuDujS5c15TAoh6Rwnq8coMVLYh4ayc1pnac3ShxSnq3SqTRasaAHwQg5eEXaaE2kECc1syX4WUHA4b",
  "key26": "3sY9xS7Nu49deFNtkuRsbnDu2vj1DUnuXPDTXCv2GZGnfVSsdypnHmQUaLGN4mxVajpQGsAjXZmFDSznLa9VMEtg",
  "key27": "4ePuDkXLXgNYArai9Z4tMXuZp7V5TBcBYhNbWxmQVTLzmiJyk1BVwCdWDsgb2pPPDHLhLc23yhhdraaqjEUBvUJb",
  "key28": "54hB8s2JfnuqBGm3s7ZNMkaYneZp8HLM2rUvsxfR3PZdPw3AxdmKD1v5ZExK8qE2eCjMTUSk9bMKkgkpfAnvBs5V",
  "key29": "31jEsXg36fy4STABRv6K2VP7HDVqAat1GLq4uwtaLsKDbKYB6B1ecdAt5qJWDsziEyfgSiESaFTGmhxL9XGKkSQS",
  "key30": "3ZWGWPbWurbJq6n5JALRV5tksVgWkep5o4CjQSam3JZCNKoikhyahiuF69CAM9Dm8mAE1846EF2WEMxsDMbWHq3R",
  "key31": "2tyQajjhbxVYqUBezBJYU4Z85AoyS3QmebuRRuRLazjJkJ2kXgD1kTYq3teNqqbFRCnWyehLjMELH36e3XZoeVz7",
  "key32": "3pkP9Wo5shHdXKcCMYoM81TPzD8vERMz4zYf8gXkY4yjDFy1oRZG7cmc1N1HgqbizgeYQJ9izNS9FtNi5TLQS66P",
  "key33": "641WKA92xEJDDqAviiDgFNd58EuuD5sV1HZ2MREgFwZyotzCTPqEH3mmQT2BaftXkAbFkNer4PWiZhkMM5afccYS",
  "key34": "5oBUzDYtWMSC2yf7aE1Fq2RiKzLFQHETMVAe4NHEbmbruQMrprjgJz8rMkirnbph2YbctgsBXwaLdEopKTUyCqCd",
  "key35": "3dk3X5SDpr1YBTEroDzWMQtwyZTv1FWvqGTTbk8jFLno6MvRanUC2HKmWjyTxY8vDEnqd9u4yoCn6BuQBUxtf4gm",
  "key36": "2NuC2xjT3uKoDoZx8HQh1DJNHXE3THr4gpj58DST23SPe5sS9ZK7dBqSB48mdwaWadcA748PEFLHa85AvfgZG4uW",
  "key37": "5p6rvikRZzRumgXHsJdmh6GEmSkfeVncPCXiQ6AChRWSsyKTVWrji2dsbVJhQCzvNwhH6REGB3SEsrz7gMVGCdnY",
  "key38": "3gwfmdqHazWWzTommT6okEBESPc7Z6NJUivh8sk7R3ufQd4P8fE2F96TS9uD6DkGwP3TH4jrgrMrvxhd9VmZp7ib",
  "key39": "4k15hQ9vUcEBWjYt5aSfWGvprNXMvgSL3QeGKdCu5XKARZn5CiweAFW9k5qMtMEUgWrR1KuDmqC3pEw57wuERTN8",
  "key40": "4jdEPr586pwczxE2tjwGwMUuAqeXGgs42VDK8XM1j7pxxuTyx4Kccb5EDxejmD7H3aZ2xFQVrNiEyWD5xLQuvwBU",
  "key41": "4b6dVZ3gTyGVR5zykEqgvtNvJ9ppmf96aWceVbBBezG3guoaX6u3QirATbmXQdc1k2ztjevY2CyFyZj7RULkjSXK",
  "key42": "5WL1eNWihd5pL18gDtjVQ5b8UKRAny6nSVvGBhX4CdS6F1cfMhwhswXHVZEBSSq4eVvrCnV5QM5L64tKTgofx4gr",
  "key43": "3191t7kLLu8VtoA8UzTM5BR6r5bmqV1owzHdMujfZwuzthrYSJK3Wq6EZNTJx4vimMPMmbFMxY3f8JxbMj3SbvVW",
  "key44": "5spDhRgGptEHKfKzndWvZwkiECMLAVNU3914fcA5SsfJ4QCLUja2rynV5jKxEheYZuhTQqFjUXnvp7oNxCwyZMs",
  "key45": "5tS4LDN68DMQMMdDEKLeHnS1ZDvvj7XJMNSitqmk2WeAWYQLzL8ZpRvw6hw6XfeVccbFpC2Qu9gRyPPqGP85XnLH"
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
