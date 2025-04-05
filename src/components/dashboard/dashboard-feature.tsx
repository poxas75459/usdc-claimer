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
    "38foZpMYLyMvj4XMRAd3GEAyvNYyS9WiUx6zU3FgBbG7qGN9WUXtGz9LLcQSkthYLitZcGEjnsTWGLN9j6aXwhsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8rY6Ku9j5w4e5n7X3mWQk7XdbQvS3ov5ZvMq89HmRM4YiwggGkV51ja4Ad1Cw1i35T4nD5dcsQdPQ3nTx9Gsmzc",
  "key1": "3EFtpGL3PtonHxoNkZzXj6GZQTHCFXobQJchooQCvo3VA9SZei1DTZqt6BabBSeMr7Dfcqp2QNgvyKdcijGh3ZXm",
  "key2": "4QvwA3PgGk7DVUAkMtjNaq6B3pS3kw1EcpYekVoSdtTr8qVgjmqfiLhYzmEHZLXSdzmfyD7NTSPaFni2veXgBfwc",
  "key3": "3stXMvdmBPtMTyG7Q7RXUU4GQEzLQ3CKeiy7FpNukKk8JoBeQEJBenA1hjbS3JUGrK6FrQZ9CU8xicgMmfXCSZzX",
  "key4": "hwRqkhSrYWKTjMSYbA8R4akA5UvJA5ZetMHwxtMvtaFR6b83gEb6STCF1acGjuXfmjacy8sy3oct8RaKr3pnYaS",
  "key5": "459ceibMycTDuCgqfVmhLyt1LganQDAkChdRWm825ecxkhhH6H4hadYdDqLcUmTkCMxfmvfF2ZPAffWuU8UcXh8M",
  "key6": "UrkS8UaKo5PDXdZyMRg2s4TcBd7xii3JzV1fWobe9KDU2xyKDdkAtEKn3em3duCVeCFWkmXWxpf6r5kkUZrLeGi",
  "key7": "3uKYYuma4kWMymv7YLk6KYmykbATtgUedTv9fWhLaPDmN4oWjMqu2ck2Fn7x5qetbtJCUUHtXfsCxRK5EGjvdba9",
  "key8": "5a9sZ384sChdJD9hYwJe55Hg52yyCAK62ro6dwh8n7S3j598dn48KyciiRdXYnuVoVmc4QFrSaW8524CQRqt1Uee",
  "key9": "3V8vLsx9PDZP5kZCH7w3hBBVQrMVBptBamXoPViiycQrbSZhQZTPa3TXpd9fQb75i7i6Eku5Ct78jZnUL12NPP6v",
  "key10": "3T7Xm5DDW7RTqGjugCxaBYHo9w6M7vdkGAkp4A2vdNna547ZJzcS1iFCG4b5czwogU4Lzhd3mzVoCgFomi1U9MD7",
  "key11": "2NaEU5E2MUzpFLdq2SvVTRJ1nHe4GUioduY6xq7UCWiVd6sXGqJ8g5PCEUQJEJKRsfsnF67MLHv8xLPxFqmR2VVU",
  "key12": "mnHmQs3s5aHufU1qbj219EC6ABcFELfxNyKj5u5ryayfZ7XF3RNiBsZnspWWE5pZUx44oFV6V6pUd4LwnB2q8mx",
  "key13": "3NBWb6BHM1DT36e61u8zRws8tvfH3BrS1wn2GhtEwyovVLhemXJZT9mAjNoA7HU3N7b16h9uFA5KpxNLQz5atmzC",
  "key14": "PMYJt2bw9BQQWfVpqzoLg7bqZDd6u6VSLXYxTFeu8W5jefpkvZHFzvADZ8DoQGjYghno6YziV2AFhNRyVSXCzV6",
  "key15": "64bgojYp56WeDyBmifN3grC6pAzyRMFCveagtTMToZDTXFyrqVUoqxFK22EKuxnsu5zLLrsBBBM5btaqHuS3kvkp",
  "key16": "iGBaS5755DpFQuTZzFx5JAMbpR6TUoododtpW9hDVQbrazL3mzJsjguNZkEduxjNHbjE4mSY4ybmj5LZr7Uto56",
  "key17": "3VS42xJDa35pLBLjLMJRzhgknALTZi5hKKMt66qiTCk7QKKSjdupq1GcjchwATYXWtgNokUqpyR2ogY9KRuFU3Rf",
  "key18": "4Z7AeL9poZXz4Qzxyf3WXH2AifkPLCSXJqCoTWJLr5BQkeQdqkqYyXiR3EY4NdPL5rR9RPfvfr8xUavhLBLT96WN",
  "key19": "5MHBRuJgtoJbcWqXiks73A6ogvn4qJmsN4qGBZ15Kt7EXiuhi6FU24Su2BWST5hk7VGXT57NK7q13kNEnL8b2p6f",
  "key20": "FxvtVQC8ZyL9yojvkawDqQ8EEcjhDV3uDkaRkPLjTpm4123dwwk7DA8cMUTc5chzqq8Pbccp5EcqsFuNuJEXGBd",
  "key21": "4sxfJAyNVDbGFNG3HxsCxRNKhB5tXTbqGk5E6Hfar1CCHe6hiTkW6RGpTv5eDrCziGTBhNu8er53uvwr353b4mdL",
  "key22": "5nA8Y9iNZqeXLV9iyfMLngu6ogaSY7Vyg492y2NTVJptBTX4QJN8s6Vj6MUXHPNtKwWkaDn7SVdK5yRKVt3TJNgH",
  "key23": "FyMUUvHNWvhFygU5kAyf5kHatk6QZDnLjast6YKcvXhaWVtGpxmtwm5ebjgcbHCi1rFBys9PfsBLNJQBhyPhuzY",
  "key24": "77VtK77759P3zoz18M6xo41EYXBJokXVKAQePeZaHgskARnPjBSCqepwmpVuJbm9DGw4f3weHWNViUPdHfxTMDT",
  "key25": "4ri6y6b1Ab2ssv81TJSJsNqEKUy2LdD9SGxwC6ZCo8sugrgPa2Aba6sJPAfY2VKevP44PsSmbtueQd6wmP3LH8CQ",
  "key26": "mu2KP5pXgx4yctxNE2sna3jX8jp2tC5jTDU83GHVLRvasAa8VHosZ5yiFeFM3NgnrCkYJqXgVgsRU5hUt4x3zFy",
  "key27": "3g5rsbDcZWSn2XPKdRFw4j689buj7Akvs3ySircJGf4iYqL4bMm7feFeEvjuoYAVPRWNZDSh56aDa3nBXbuzQjYj",
  "key28": "4Sp3iPUQhBtj2eSo4K4B9s8ZXpRoVn1kwctKySEjgr9sdRk16QZ5YddAJiz5NZuFTCT3MjJmR9k8bfoqzfsGfNYh",
  "key29": "3mU6uJNLszfVoh1pyZx6c2pS39351HeMNEVm64nLSAVMjECdJ6TyFd29ReHsYoY3bYP8KkBJ225J6A1kVQbtKJms",
  "key30": "2mTjVzMKkUZ5nXABVQ2qaGyhEHTnKu2rmYFBpGKjwTrhr6bpkJQXhTbJgfD2vHiiV5QExKqUGaeQs3aLawvk59uL",
  "key31": "JvdbMj3ietmEbTHJuKiXuNSzfgo5QqBjPhcC3x8K1BmDyrmMGYZLtVyVCyPQNk1hJUH9xZCo7LtLcycLpaK6eEd",
  "key32": "5xY8L5FRkvie4XpFLn2wtVS6ZeCcZcnAvqwex8Nz68echMrkMY42Fv56o7LfF4FLcC57TM2yCvEYUMmquHRzRXLg",
  "key33": "A312Q4XZc9U8PB9FuDKXupDG2w4CnnvsDTvXYFacBQiFSy9EzZJxmoGvsgT72rwKhY6L3M54EBPynn1EupyDGAh",
  "key34": "2HmRKDw5gvDmCvYhEBL9bFNduFok5wuGZ688MHcoRridwwQd8nEjhBjThUZNcA5h6rcwMTPmzCCUz3xo2sBKNG1U",
  "key35": "4rAW4BsGvXbzSpRNYzAkicPmgkfofz6AyU4BhGrFkrHtFY9DpRszYUxDwuZedtYqEbSkEzSvcqxGy9j6bAqj9JF3",
  "key36": "CBz3UQ84PEN7N7N5BnZBNfKDPVgQDP5y1nvH5XPGZzXQtyB9nLpfBNXRs5jESxRrkFUsxh5PZQKDcaoZRb7897b",
  "key37": "4YyC9WXxu2byW7fUNrcTxEFBHexVb3TLxXNq8oNgCmWSg8kgLHoNGCQ8ZJgAJD79ZG94PDA285FQ4CDGj4NHZezE",
  "key38": "2XV91ScWiKRd8MA1metg6LPMxkFivqvnb4nHgWBM6hq123hxTLZVFxszQktbwHnVRy4bLeEhjBGJnGTnNhFWigy2",
  "key39": "52M2huVRhzzu6nQeUL9mkpxSsau5jdRGp41GphxLgM9kX9577793ydLEUjGWi1M7LsDbQfbHt5KLkhMwJ2Fnvap2",
  "key40": "5ArFPLrjdeGaHCHY9RQ1pDBRLARmdJJXoLZJbC9Sg67tk4KbXbRcFmmqdAXaJjG1ZXZx1eRn9KhuqcLZkV6bTsBs",
  "key41": "62JD7xizqvpqUahJeU3Fs5SFjmHaTKmeJb2EM8T3E6GM6edEvAscZgmK343bwRhG9UazyTdSzpGeJQNb1kB9QFow",
  "key42": "27usJXM4NtTejacygVnD8B6ZiA5xqQRj9nEMvgxMDcJA5DzgGBjPdvNdMv4dczBS9iDBkNiCMkpwzggVpqpaq9Wf",
  "key43": "25RtoFuqDbV9PP2YJ2JBr8RL8n84EaxgyotysRsSEYL9dmcK4sfEqcUpuQrnHJnYnPEYh7ReES3K76Yis9XpY6cs",
  "key44": "UVnDxtyGc41QJX6PrybXcSMbUt8bZaduMoMxXGnvD2UwdbjRqS7AiH6B8v39dCjmP3jGfymaMhMBKE82sEG8YPv",
  "key45": "28bpEZXGDB32DYioCxUS3sizKUB1CeD7jDtsWH1y2FigVNvj8hrm538mWqSGCo1N7mA8raCwf3nccZXfQSgF4NDC",
  "key46": "5m7BdVhXkDJ2956tAAW5nNTWPnwhSa2Z73xXxn8uJNmszUwwYbRQj89pzpM3gWXSjCdjAyQ9K7aNG2uB5SsjJuUo",
  "key47": "4YGm8ZV6xGVhUdZiz9MxG2uXghXccwHgMjGkT9QofTSiETQakeWChtxSHw9B87ePUivmZPBz3mJWDJskFYYFg18B"
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
