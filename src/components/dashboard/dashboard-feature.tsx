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
    "2Eim6nvcgYhY59gE6fZQeEpeX4xq2DXgzprDEzJhJEKK1wSoNG1QnGPz8aZsDWF29apuTdjeqYXKZqmNNU5DPowT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MLmxK3FZ4fToQK4WGcbEob6bCWMNL3CLdwwAaPZQh2YxK14vt4TuahHEFrPipPrYxJtWvaiALYTYxCw8GB8k9QU",
  "key1": "4AAV4xsdAb51rmQy9BpcPDafN2GcdS5gp3wQQ25u4ZvTA8mjmqiRAhiqFi5Ze47KUnGfjN83WhcfWFRz7PMpqAFt",
  "key2": "5sTm7PqxddTAE6ZSqUCLZwnNmyhYCptGBLh3ncH4f6zNHuk4ngSQEdRfPuuFeTxq4NyfPRifnXQ57paFHcmbreuZ",
  "key3": "2VhQNt2dkNatjMC9qAZPJRanuPKA4WXr2uKNpVpa4TeLLWZ8xfezk3HtfTMRy7xme9Y9dpxm5Qys5qV2x3v2pheB",
  "key4": "56Wru1i1iRi67xgLptUFPgBtwPf95SnUyDSLS4Q447AVW5Div6DtEyefgSHtCU1jZSgqB2R8k2pcZax6wpELc4eC",
  "key5": "sXvp2b8M593fthNEh3XBUrbNiLNdB5x2zskzr4g8kBKPZCjdvgvnD11Qy2V2UdN7YEFeQZd9WYExDJnSTrHKciC",
  "key6": "2XAhrLFskhiL165cF5g8peTm3T4cUdJwKYAm2qEnKRmAHrShuH4AzqSAm7gVK8jUSprt5LtEXifGrxi9tLi8aUrb",
  "key7": "4bA2J4QC1uuJ9bYEb6GXCFrBnqpdfZzM3Zz6LmweERFHU1VjgLtz31SSJyhqyH2YzkBwW2KN9yKg7Ww2ieNJNmhT",
  "key8": "3fkbByzhj8VbqhXRFHt9hoKmZwiAizWtWn6YDN8N2o7oE1tgNsmrDtV56VoTjvKEYG32SSEYi8Ygk1K8mpJVdhg9",
  "key9": "5K1XnB9TbgjxbSWxsrTa7toJM3Bj9i4xCcpirBq2vmCBZM5FScdMwVNwNu3ZNWa6wyLEuJ5Zqjymi6qLeYXBnYut",
  "key10": "3n8Zp4zWX5r8gqDpEjhHV6TjjK47je7vV35qCod4sf1eFxcZfQmotjZBTyN4tr6BmmrPT2iFHzdzFCQj6hzJ579n",
  "key11": "5fa3QomEx5BLAA9akcLR7kkgWkyaw85ARstR4Y9Hh4mTH4RxsLbv2SX4jUqnVnBB5KmPxvPwgonvJBVVX5v9MYdc",
  "key12": "5HGSpDMQbU5MRFoV6iVefy736Lz5yc2rdQQe6AoFNtaxEdbzUC3TadWVK7XXbB2Geh5AfDzMeJf73mJHcxGkp6JK",
  "key13": "9pxnBmE3kLqrPAQHsh5VZ5P6eezokPiEYujKd4Uwt7s2TDyFA9pKmTR1zXY9Cgf9g7P1YqPquygWB91jb4iMkwH",
  "key14": "5g4HRi9xGHPADKeL6hV8i85oHmnhnHvAcNxnixmkecnd2zsb9imSpEXnSdHHH1MsUQrkCavBSD6PqAN93rEvpTyX",
  "key15": "3jeRNLkEoPjwJu9xNeoTV1VZFLE3toqKwjhW3hwn4t9mWHHNqyFWVcbxpzWHvcMEBZtraBafQhZhvXkR8JEpJDtk",
  "key16": "4dPn8m9CisyDpzZWyogJFdZHNJ1QNJxyBwq6ufFR3MoorYVkFPKHRXo3YsEuwKpNA172hWKH7ekBrXCWAwp1hzeP",
  "key17": "644hcuVq9gpeYt1BnFmv6g6BAb3ioAiU1jAuhAoj97ANyseY4DfbNxwgApq7kgXMyvY5QrRGqyKk69gZ6PZgfFqi",
  "key18": "25kMDpmX9np8jxhL8LkrmLbe1f68dSE7GDgqDfw1sjTLoWEpakpwm47wibCZddoyGKoPVod9viVV4uTwykbMykbs",
  "key19": "9FBor8qVjsoeK14duDJaqdfLnjLaWGNeX1Wn2PySbWK1c5NST2g83e8DEfr6UxD7uay6rTU7s9VaNoJPRPHujCK",
  "key20": "3jkiPzPY96cUviCut5nz1WJYDj6txi1fRzpAa5XH485DTC3otut6dHM3Mt8tC8Jgc4ZgPUU486Z4hznEvCi7CeaZ",
  "key21": "Me9Ti6mg7hmFzUu4GkVV7z9SRfoHZvEHz4KDFM7ZxMWHtihe9nBWoV7FJwdKJQioEPV5wYcCk3BUeoaZCMUPzwC",
  "key22": "5Red4xWNTAg1faqF3icVPD2CBCrbwYajjCM5cmovh5Q4PdXZvMck4CMJxsPLB225jzUvqWKEhc5hQNVH2BA6SKgc",
  "key23": "34qDwr7rqDqZGYsh2eYUCyNtaGyUibHrsvHeFYpPgTi6DwReZRGdoeVZRXKEXKRw61fGKQV173azEHMKzg3qgaEG",
  "key24": "3ggfhf4EsFzqaMbrnBBoPbv8qetJs9AinhkdwCfxgEqE4GKrCTjwhPrdFJjRk5TvbRyznHaSyeNsPHyneb7FEEan",
  "key25": "58bc1Q5ut8wSLL7zNC1QnApn58bJwDfNyPSMS9PFhrPitaPoA48TtU5etetHS3HqRGkJao5PUBEVo7syyUkHgYqp",
  "key26": "5ZHaSbQqfjKYrBSTSuohXfLpQ8VKMcL7FufgLjTSG3npeGzNV9YTBmMiu2DGpC59RDh2u9FRDH6vpfuKLboD31RZ",
  "key27": "4Nig3V5ACPtgBgdABGLrzYRKLTjeBF8SyVRDRmE8TsTm3ezTWyw8yu4GcXfRf5Hp9w1tsknmHEd1NZMyebcPdn9j",
  "key28": "5QbaerTvi8LfAGuYirJiBk2wKvC2bkgoQSfNo1147uv37wc3su9oYDhMP2uXTyMppkr1KipThCvuMLxsom71Zayo",
  "key29": "21tZ9nhQHkFiTJ2FsXcs5WUst1NnxLvnCLUhymeLs9Vd1eJWLT9VyX3LNwfqMb2FBthLVe5xovqvterEGJpcDvi8",
  "key30": "3tsFeo1b11LgifJ45RPrB4cvpLKxAAZgKNy8xv45CMPdG8mCKbpkkEYahk2Bvp7WENFQZ7Rta8vqF5yA8yB3nmVT",
  "key31": "3Y12Ugx9jhDWodYJGJseJ7WALjc8z8B7xXms6ithhWykL9xZZbeQxBjG76c9VwEkLSA98hAwpiVrvgeQKhvcmS7P",
  "key32": "4CZetZg2k1v22a7AyKmyeziVEWtAbWG7SKwpfEqMF3wjoyxjsA4f4cH6NAjm9GEyg1zLPVY8NVMZnBWGq3XBYptt",
  "key33": "mCCKDZajUrbbc175YAXW96kZiV9zDj7swHZVXhSbe2VNAQa3Uq4SwPz5BodW48yQri1bxbVXTnCnqnh5BMT6uxc",
  "key34": "65QiUvjZnJCwSRmpZ59ASs2tGh6yhpooSE5DF59EDJxKUSNVMqp571NWu7R3qMCpNWbMFb7Bhc9ctbZhYfUQTJsc",
  "key35": "44caG6YDiweZF8GoyXz8bUPgZAcsbpqHmhF2XEW5accj9oGkH8pbL64PbJP5SrPR92AeeocVDyTfUrzYFX98f8sJ",
  "key36": "NoGAqwvDFcvXGcoX4wDToPbDGxu8z1W8tVNwuYDCeBK8SBiDoufZs2UdSE1ogePaQ9rpefBJGPfc3duHogMDGi1",
  "key37": "3xtmqMgzPWY4mbFrjjuSeU7yYMxCPziT3tvVTFPtGQjhA38Ced5z3BSQCFNdbvQFivHujcHhsF4QtGpJZELjt8MQ",
  "key38": "5EdqJVUeP1d3vAHW175EtxoPP4t7htCU9giiKCaRzyFDXBtq5HpZj1M63dXUrvyECaKC1gotTDnXpdH88mGyRJi3",
  "key39": "2NrnWkLwWaTEHGERM1FLv8hwvgZKAPDYfHmJKREgxrBreZmuRQ3ayZYRBqgTDJWXXUAeecTa1VDjPRswXS2egGft",
  "key40": "2srrKHVFzsLRzN4JxcWEqoQywpJ9QGwU3GyZatMn2mKWZdv3he9LwLG8b5462thEozRwUsjmFVSJ6YZbxfPZYez8",
  "key41": "58atrmmXLinvSAeaqYmhSxJ7YF7k2yPj6HyGGXX2vUjKcQdajU15ou6XCsPk5ZAswM61osbMqqQbtA3NRNt2iDRy",
  "key42": "4HFR2ThiF7qPgZZVBEa1vjVPRgkiDeBwypAJ5KJU1EKEcLcdh53xDSRSKYdwyLPNXL3US73aJyT3MVGAbrbAFNF5",
  "key43": "2DSyUC19CthpfywCbvsU1KHwNybvTbAW8LS7vftbg9wgkMDtLiyzVeLGherR4MMEsuqXvevKuzsm5MKeMBBDgjzt",
  "key44": "3oXhPBi1rfzN1bKtuXawg5XAbzQxoSpF36rAj4z3mTgSvNUoi82LgXVtVhhPL9aGpg8wTQmmfSafKYd6C1VWKF4G",
  "key45": "438BbgzCRwCFnV3nck2pKfwpd3YhGH77Mw2vEWpmxktBA3jpwP8jwS1YpBtW7BQtMRFcmYaShmH63UwVDiFfvQju",
  "key46": "2MhKn2cvt2cWLfnimzHEdtdsBmyrinAH6D8eyURKCDjajxHjmrcZNg96GMLKVaWu7dYGAsrXRnioUJ6XnNM7UDEX",
  "key47": "4sFxQfEG12mLCPJ34ho6oG7oNj155damhxdjmMaoNAkpvE1cVDNeUo8mSbFdvHfyUP33bSAb9rZtf5GXafoqq9ZT",
  "key48": "3wC5hPZu883eyGd2nQtMPm2xwtc5rZVzzVEgXqpLUSeApDmGrtLg1SUsY4cL1r8458QbXjEVMATjxaDCeMmMpWv6",
  "key49": "2D4kgx7VkNz4XZwLu5Boh7o3911KHxWdH3vCqEjiU4g77Ex5w8mZoghpuns7XU5shg3ACi1bXqYEFwSW6NuA3go1"
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
