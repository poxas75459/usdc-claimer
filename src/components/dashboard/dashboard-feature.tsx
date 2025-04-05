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
    "3rD19GhjNcrxwpgRJLdnjGCpuCkdS1VW9kG6tnfLLD5RZ2kj32GhdBuiiVSTA68BqsGajYqHqCyfmaYBiejT3Czt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kx1qPd3vmbA9VRNcrdyBFcns7y74nPHAaei1P1VY7YTnCdSJaZjbWiPcMroSfLtPqX2tuQNjwWucZpRH68GmVti",
  "key1": "4fF1sjkGMVXVsE2pj7DnfprjiPtArLQ5DuWd3vCLR7fb3PQjRdq2mRUUmJZPRsJcrAVa5jaSfU6N62pk9t57vX46",
  "key2": "4XuhepbhmMPFKZn1QVGY6cBCLmJykrFYLcRqSGhupKpiRDhDZ7LZ5fSdmrY4EqbbR2ReSUpJ8Asiekd3iL4fjTFm",
  "key3": "2Vn9SNnbyXSs6GZhsYnx7qfF2d6TBdqueGcWuJeEjAotsgbQ9gNWV2jg7eqg2BghU6VWKgVVytS63JLE6mijE9Yt",
  "key4": "3pshyd81jQD57cnA81633hyF19gUC8kRGBGa43tNXNFkBDwsuCDXkUayYhExt4y5V4kTqa4Xw9EapZT5Rf7KqS5w",
  "key5": "hoVyqRF5exbeNuXWPknekLzWnLs66xAc6BGZMWzTagR1pwwb4NRo24e9BYqbMtm9M8DMKrGtPEixnUDouuqf2Bd",
  "key6": "4LKzyghuvzLEwD4yTKZcdfZHKEyYu7JczWFH8ttz9YQE7TrWpeVTUuCpUerrYByxyg2R25hp1privu6MmQyWLHmn",
  "key7": "4MdjYtsz3PyiEH4dMyQWUinczJuW745LzL2q19S6db253GpAnidq6mcf9su53cjTfvVwLJxDDxjA4mmQ9xduib6L",
  "key8": "4RqZfD9VWyZzXq3yAon3hjn4JeUqdcmjU6BSPYnoNeECRUuF5UVntHUuFR7M5W9sjGdFg8LTMmFR1Mt3HQuJYGdg",
  "key9": "3zhDorFtudvcXMmtfan8YvR1SPL2axNDz1WfdjXKt3pKqibwvXLKA3FAgoTdWcMJzXRzbAUmfuxxikj4oZoVzgJi",
  "key10": "2kUBG7J8LneJqY6wknkTifuvbtK2kgy3N2unGn5u1CzyP8ZrYVkBUVapgdbVYxzEATawthRtVW7KXUdBXEWmbwq7",
  "key11": "gb5mZ8NgfEbo8nj6vdjDiPwFickTwNQsvAyFSV6EzemJRHYWSbquXGPKCBPz8rqdPhASngauD1ToWPb9r6niyK6",
  "key12": "4aQ4Sbn3TcZttstW2iBPGDkQxBgL6FDHENiueAwQz4mB7zoyb6v3ZDn1R9Mbg9iLwee3q8NdWZhEUugexogfaVNV",
  "key13": "t6YhnfshhGMGyWhATAmgUYodmrerCR2NDwSCLv4ET6cCyNqCZ8SX7LNMnYys1SfgE7eML7advkmKLdFwSa6rzRV",
  "key14": "3u77ga9XhKu9zdU6Ebkisy6RGDBe5cjhiQeVbNqvHdnD7HrFxxUN7shjQAMsYpbxag5PUqaZwrDJgCos464evNyi",
  "key15": "5KYHHanSUY3CvCoDZ9MDfGM3pq4zwm9kPWNHgQb8jkiPKZ3gr9t3AGcqxzdQkMGfaeXRroYnobkQP1FfywjiA9c1",
  "key16": "5c9TzdTm2zLJNCpQysADLG3yhufgBnTq3krdBUS818BfDj2qPp4Mpz5VnwVQ9rkwRbznBD7bgWBCVTNHaghzcYLC",
  "key17": "14CHXhZp5XDrqVsyUM8o1kBPp4kxw6iEUxC5DtMH17xqL1Bh8oaJiqd8vCb7KXCwxcPb3hoJEuUYPfb5XFzVFeq",
  "key18": "2mJzdwLtPyZwFYncqeTJSiNoKtGrt478SEvyH18EjnGm3r2RGbDa8tos7qz1qyEarQjRSt9FJZUfY8ivhPhR2vaQ",
  "key19": "2cZZY8Sf8JhNNUs3uxxbDBJXt38BBHBvoToujGLCY6Yq4pEXKpaJ1mgAM1QK3kCG11D6NFQkMaPjbnNJKdEWGqDC",
  "key20": "41dPHysq9UrMcJwxBjs6FShw3a2HY7bAtYpgvpbG6VdBSwZKfCEZJGMsow9grndANUx9bEhgpy7n41Wt53wYUnW6",
  "key21": "5JzqLS4TFssbwk6kqzkxjqY5897bBCfeETTxuPkDVmu9f4QaLHmTzGzFqGVfN9AhmxAVd2RKev5LkLPXMCm8Zhda",
  "key22": "4Kuux2FcCuHJyQyjq9FJwfJZMD9gQLkVpGqc36MXm1mkqSdgzQSVeNPBzyETsAEPBSxfcioe1CVkgwoNHYVVdnQr",
  "key23": "4C7UN4Xcoz8BsqMS1Maic61Ds5kGJtYyoUPMizNK9c75JPc3bf9JVPG91DuG9Uh15VKr2xLFUE5NwDfabanxGbR1",
  "key24": "5hSizgv1jYtLErZhHzyuZHtz3Ah1oJ9uazXdoRQ3gf5qP7BsQn2U3ZcrFmV8AoX5HS2efF2BaQChaLYXZvjfeuuN",
  "key25": "38z4sJeq2bDgdAFwngdkHrZkHhY5z3mNQVkRvWeTzifAPsa3DdjcrCGQUSowcTu6m6ZvYRXZFvxWwktQj8k5du4F",
  "key26": "32BgtyKqxsk81CM8EkN3zSskuoFfDEXWJowSK7Cv8UGptJDqYkCA7dcUPrEf8C1x5nseBr6JCMudMrxrYeuXbUiJ",
  "key27": "wveVKkjod7RTEXLNyWP8mU8Co5bJDuNnNHwSXwHdcfU13Vbsbkt9QZqkwJudB2ZFPASgi2iBUzM9GHs1Fhq9uVw",
  "key28": "21YB5m1tf6FV4hiRGbm7Rkiroj4eAm277ZYPr6X139nqa32CZiksDqn4Uy4ioPNfGeu3MT133yy8NsfD5goEAV8g",
  "key29": "Mr8z9B17RP7Q2mzfn7P3nQDYCcozHpp3xgt4qRasSNkfv8Ud5GW1SYmtHCTfsJ7GJEDfyWTVvf6Zgt8PrqWKbXC",
  "key30": "2FebEy4PKGtcxZoZNku7v572NWFXUGgsBAzUyy6hkP686joDVzobydweoqcZtjLvkUJH8L2GsMxizfKZZXyDwAgb",
  "key31": "22K8RjUowwgkDBp9eYR9nZyzaNjwVhR4h9vhjWxYiDXwMQfSwd8U3TUvQY8GoRq5RuiNW2u834Hs325tG4eog2Qd",
  "key32": "3KwcTdv8eiwDjLdDRsjJYCv9ZDfaUJxVyAQiMkzC7KTUtcU7xcnEahDXLaistEzgZgnuv6f3WWvAphzoecUa2bYy",
  "key33": "2fsfQNw7DEQZy5ahD5iismmdw3mcMgWqCW5Z4xavfrupd6xJbd3MpVbfzqX1naJbDTUSwBPJsdTRGnz7vWre2tgk",
  "key34": "4Fk6GifozYUBzymHNeniRZsNu6GHWGo9DYzfuEGz2qw27qkVqqgCSTb9XwKpt2YdgZAR99GgNPpdxjEmQHC7UrBD",
  "key35": "5Fq66CXBEs5ncwwWBY19PjTwZK3HLeiD6kw88Ly37hbid63tsscQBZ2WyHDaZwC9iQjC2QTRAgYKkKetg7q3VA9s",
  "key36": "3vynKrvtGznHyKFp32sds3aSP4giiG4oNWozWXkL3aNpQstLx3oYxWBDFUr8FzeVTSf7cXygJvhMnsGXVrUkH5HT",
  "key37": "5Z8QExHuWcnwtT7qHSVseN8kuLh2QzGP6gx9vdPaWy8VZ8zVuwuAXB8tmiJxHcocukpLYAqwS5f47ub7mpRtNk9b",
  "key38": "EPubFnYwPTvaw2N5aArHrWuhLwtvgq5YZNxJnXbWRKXtLPAGHQMK5duUpxZV1LZE5BcAQYrWxcF2uSj3312Y8CJ",
  "key39": "5p8DqSnuuQjrDfnp9DkHqhyjKU6rCPRaUEB67TQsURpa4bg9Wnk7nbW4z2h5iDwSv1veUacNjv659wsUyBjx18Na",
  "key40": "4ZY73cy52HkJ7GHuJfZRvjGfRvHpVBcmShFrLavJqzxh3dyJ2DLBUCVbHT5G3cXX1BcsWwgKUgcbQVTEE3Q73uxk",
  "key41": "3YC39GT4yj7dhdbMFipLRSqeCtUCjRN7xdPRt6w5mrhQBkRbbCAK4sVtMGXLSZ9VbgxDGfm35tW6PS7aqsg6baSg"
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
