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
    "316uxudqSm7UEYMnHZzs4zxA9EYXsLrdjnPHhHAT5BCPsy69bZwEPZCuZYwURjr7mq6vgbuAzQHBG1DiM4Mv4Uze"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rRZL7ahqr1xDgcvmSDD2hXnbCAnjNRtbvxho7ovmxer27XTxDhAz4oo58JU8EwSvRq2XRKJ7BGsgERkKHakQb5B",
  "key1": "3d7aNixS3C2G8jCAdhGfQwNXsRUGdfxjb6m5BeHXBRqYmy8weY3wUkUfK2aM4fanggCH4QomZ5t6BRzj5js1NG2L",
  "key2": "2pvUg8enYfL7PdgAfJ2E5W6jvYzWvxAVQqnaYymUgNgQQemjXYnnwNvMRXoGrogX7vzgR7wN8DhQNRnDKs4wn236",
  "key3": "4zq7tJq3aK1jDeENNd9GCE3s3VGfHSNrAfHX4aRfHddHAXQaMDPn5Nri5EH5bbXsR2NEegNLPa1xmnRk6Gf9AVG",
  "key4": "aUt6dKwFUCPrfy41NVtgXizfob7LQDsEPCsP7VtkRdvtF1RUAbz31xoHiPUpP4n3xk4r47GUyuZZJ68fV7XT5xe",
  "key5": "3wyA4dmFcCN8Qg8doC52KzSzyej3MVfQjF4qR8wxPAJoqq8f44DuKTinCtdQBjm5F6MkhsZ6ZEeYMD2ujQQK6aiM",
  "key6": "3oLtJUjYUK9G47BXpHGTP8xMgCWPLtvEpNnaMGNhYUkACJdajmwp3F7GTjtW2GMfTmnbUXsgm9N8k45ycNfHoWCL",
  "key7": "21LM52qi9s9qL9No2tWo4efxvgFEXPEXAhmUcAPvaupnYudyfZ7c7DdcopvVbiN5tUyHxbta4nmuiCivum3hgdqH",
  "key8": "3vZxLAS9EC9EDXi5xxL9E4GW5JsmeeidLF7C34yLChofd7sWUvzK7fg4uF13dwV2fTvpxMwGNqkhXR3UGiWanCky",
  "key9": "4srRkCbbTYSbrb1wiKW8SDG5Lnts7xrTY82M1MVfHgL3WqK6P2rodpqayqXxsxD743ge7bigjyRBFfwgkxdE5tWw",
  "key10": "5mDQ613gjL3qatRDknxBZCyrzfw98jrPBtVJEmbvcxm3NpBiT9zyMTKbDLuKoqQSbvQpzzKo2jt7swDwQmzPpyh7",
  "key11": "5kYV9S67Wvc4E8gnfakJp8i1o6sUyVGfM69eie7cf9h2xfaKBZz1NZBF4wVZfm3j3KRuRZ5pCdbQiHcLfjYkPrFP",
  "key12": "2RqQQY5yWmiqjsr695JY7urBQDv5MsHmp6toSSsYJxerYY15EWXfue93vb59yR6Aoehwtqvk1KUXJKg838paLr7R",
  "key13": "5nv49KHzdaxpyTVjAB6rs9tiPbgCLvf6GYEAUPAjsm3qEfrY3uikDjpAkMBKMpxvPeAN1Wd3k95zPXr5L8eFtUHy",
  "key14": "2vLJCVFfzvWWTxPeomtERwejw1jtSGyUvgVVgYxBpTAAMNtdcK8ySgycgJX7k77oAEey7VuzvRRqk4h3XZ7NSbnz",
  "key15": "5DD3VRdBo2mz9Musg8tnAJfHWT9VP7suoJMA5Nb2dyhwnbnD7Eo2FKHbG1B4f6UXgdKm8VA2EtHAL9S3D7KwrZra",
  "key16": "3nC4akdW3dq9hCN1vk6VKtoUvjoPyyGTJM3Za78KKDuKP55LZCU5jMCGUgdCCM5QSHU3WqXGAzepnwS8qxLJx7J6",
  "key17": "5sEAAY8GEwZX5Uhs96yovVH8LiZBps6s5a1MoDBUzsVA5FTrNcdvHkbasAsAdPo5zpbbDy9LbHBX4ycTVsiEcYfm",
  "key18": "4hk14Y8HDcvKZFz6aFXQZAN1syEvCSSZwhRhabyU47EUCBHoxGooLAQof7PAYE5k4UsASkNwEhFfPSci3B5Amis7",
  "key19": "2diakzFbQZTQP3nGioBtpbG1srbm9nUexeD5vPRUgcS2sHuauyPHZDwwkt7c31RGoEfNB8uQ4W3fZDWKBpyPAczK",
  "key20": "39n1PapeTgT8rfHd8NfYrDfyd5yq7PTxmgCETrqg9mn4si2Uow2ruQKHdTA4ACVzrWCjpKk4vbciJQeC4vLd5Yce",
  "key21": "24kqK43HLbHBjXyt1mZCUsvmwRBzHRmprfJYGmzVvSEkA4HhkpqCDANZTYVYAooaGVvxrQhpawdKwpah9mWpAVUp",
  "key22": "K6zAr9Bn9xZXcSZ3aWfUBnDyz5KMMXxtHm6oWfArGALJzt7bfMZbxCP4PPkNF2y7WpTZjMgtvWhHu5NtRbL3RMV",
  "key23": "5NCaq9urxdeoFWKaUj6dM6DHB7mBCmDVP3WhqnZzfM6yrMh2DSnB8EjseTufuUixr7RBW8nYUVpz7DYW8GFJRXFg",
  "key24": "4FM6GaVvoa4F3WoC8Uamu8LL1YCQhy5cqjit1u2TbduN9ZZJWG9yPEC55QF87wPsLbbxn8XxCz2Kg3MWk9vNNRnu",
  "key25": "4ee3n69nJqcJyxZ1uUk9SpoKu5BM3VnH951PNE5NCSWMUDfC87CnUMQADYBvNsTdWJWRSBv9WAcakN3p4QeCaRCo",
  "key26": "64NtMAsA9B95EyrwkfXFvv7ABFi3e7t6j6q5AUbzoXpRbswCpRYi3waYnuc7DfMkAAgAozx4fgbtVpRFvmpubHFi",
  "key27": "2k3zbjsTs8m2b11PMWmGAiHfGxyAhMrs6RE6N779fR75g31gg2xk7j8SM4o3G2C1XFD5KDKhhr3ped1dMxbLf8MR",
  "key28": "2UhS6t1ZkgLHCMhfK5D63GV7cfbeyGZGa9d8jo59nBhHd825juYXAH72JEPvSrZ532npySE4yqHAnswS1tyAh4Wq",
  "key29": "53p25ajfkyH5wHaAdeLwKBsWxfH8wsxMNQ4S9ta3rMuyYGZPFMT4HWpFxBzdA8MVzh2LwuPXEnpwJ7Sq4veq88ek",
  "key30": "2kFJHkDivXqscyCHVTLKRFfgj8D8oJXJSDQNx1T4Jk1xSTDXS2fsfW4QcCUQhv137fyF1Hjz1RWfiQqQNhmVqFJW",
  "key31": "2SQeEBVpFvPCq2bHZETGHdP3B5S2VdqzowUxbK5EmBKq8BF8BuiuX3VmYeG214xTo3kGQ6P4KW8ncMZaAED7AFpi",
  "key32": "2hZUqwGhjCj6YNcuQsQEQKvC7mAdGxVdzfL2VoveQsBgUvW4qF8EWdurbqfEmChqzr1BzRJD821AscgzKxDZ8A7w",
  "key33": "4gndLmCFMjCifJ2UYLAsZy6nMHjopbRVuxtcjg1xEE3Bf1HZ2CqaoTbAru5idavudUppWrD8rP6UPzq3KFFvRwLv",
  "key34": "3wo5CL6yabkgar8PMRwBRrSDjkLPfm7xAEuHCS3wGMd6y9y1EDocd4VbUHrN1axCxgfT1c6CtQZAD5qxGJoAEXZg",
  "key35": "2MrCKPoCiUwW1VJh3a5XmbtMin3hGxFDgm1hiTPm2dLPWxeT6BqfQuwCtzwZvB2JHTx3pJ638MDLUAiwaQ1QjNGV",
  "key36": "5kau1UGWVJ5dEpiSVeVKhLtw8Z5muWXxP9GZzefnpcY6RaT9SHe8aU4LgFs9AFFRrY1hrgudYsKS74qMm64HMsoE",
  "key37": "2HR1VLqULYn12pieG9Fuop1fhMFeAiyGMAjBuZH75MdT1nWs65dETgab35T7KoCv6qQt9wK7mFMdsjBux2adoXo6",
  "key38": "3fWbMaNXZcxEKADDA6gyL4y5L4zdXp6E4vW8uNweHhFxsVXnwz9LGFkRenZf2e4c5tfQUnT3LuMhqPq3TXtqi5Mw"
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
