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
    "2TdBTBGCKtijJexE7Q3uSgQRG6qvKoKLaboiXyxeDub8qTTdLokJpnqvUeFGGR93hdoXfEUtEZJp6DeXzuyphBos"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32uKirgA98eU66EQV7pX7jcRHqgJgqxzWkWQnYvb5fYK3dgXGX5mUmUPCAA4rS1zdrVZY9KyyXshA1R9wUL3tkG6",
  "key1": "3JnuvRZGGxMdn78PWYXTWpi41Nac3BXBrANurY6ssC83zzpUfSJv95Xi1FJoT5LScye9tzvqHNEZb1DL44nduTAT",
  "key2": "xyv68KstJ4JnhsYwB5n2uJzRUyYgDKZgLBa27HCQRiXanZdyg8GwWg1tyggRWkAdCExszSkXWqPen2N2iiEiGXt",
  "key3": "4ditogy9VW3vsTq7yAnnKoJZtRD28oysQF1LjAuCdvxvzDp1WCNuz9wFvy31k7YszVPJp8aaofnfM8KzHWSVdCLU",
  "key4": "5usPPZAPdM2jCtbJ5hPchJ8vLxvnJPhS8QDXvVbCRVbw8hNTv9h9cwd5Fx1xoN2GkDRy5zWoWnZBTFQGSQfw8QHE",
  "key5": "4DYfKK1HiMBxyCfTob8bA26T544mXQNpyY6Qvph34MMHM23LLggVjbt5TWD2qgogvZ9FsKpnZzbdc6piFaqALogX",
  "key6": "4wBjPCfdyQQPhXSiFoFxk4FSq1ZpxEF5WmgtFEnD8YPBDR1KZxPCHMRJGrCpcqg6NoepJGtHzXyoi3TW9w5aZ7G",
  "key7": "5j8cdDheezGokSF1QaPYgtt4ZUdDsaiaVK6BueAkNkmr5xc69D9vkeYbPPeBkVmkMLen1uQRJhL82uZK6yBT6JFz",
  "key8": "FS9GH9taKvdipFDtq9ByqrDZ6RpPnhmF2EiM2BEQ4qjH4Z7qxB9hdPXYyERWZpv3bxnD1pypZtLNgkViqXRYLfF",
  "key9": "5Bexc3XHqTzMgeiFVRf7yU7V6EJxSMTUju5cpCbiCXgrgjmD61QZVP2Jtoo8xbe87cQRCq9RRiPmo8j8x1DGyjPm",
  "key10": "Sq2ArvX9g3kHWD71NYTZddqSBAn3cXWSxpbGYWdddR521uozbihhPhZoZFvDiwfucbQ4xA4tTTV4FMS78mNkrqi",
  "key11": "7tUBaCKgmPQFq8tSTZNJrKHybZm5vu2amDgYV2zXp6h4XkfFqJfvJ63WKX8bRG4jc86suixC7yP3dgHu92dnrLX",
  "key12": "4p2ybaGzivVmYzGYEi6MqqGXch6fRPf11sNDUXcRwx4fCZLXxvQ1syjS6KwKU6fzAVskm9QYAxWjHpbAusEQKTis",
  "key13": "QvZX7sQCipahSVdTweqRM5ymDZmMVa6Rco2HGHHYkHWxmYwACAYR8EpdJwfjbq2Jbfaq4sotc5QqzN4z5kH6e2u",
  "key14": "2wGWoFfjtkNmEj3zxSpLmgTs8y6bXZyr65ocEtyvWjjPpFt7vByEAFjEQx63iBDPyiVP3qGBqf6qwepqRrTD9THG",
  "key15": "m8zFfeHc6MnjLDP9g1qFt8zPL7aAZR7GXxoaF8c3VrficnywxCcqfvao9EU4kExkV9iMDQDRgoxgfWdyxp5GqRA",
  "key16": "23AURzbmTxbNKj3TBwBF9RUt9BY362X9cEEr3Cy4NpNfsSqNnyhWwy8YtbZPoPV7Vt11ZR8MVSp2X4jCTe1BoyAc",
  "key17": "5uYAE4DUEqUGHKAZ7CBXinZ8aZpPZeZPs31TWHMyzBusH35Q48M9YrE5At8Zaggfo7PQpBPxoj2kYr8r3Afh5SQg",
  "key18": "5rQWaPdASJfyRT1LVKNdzARgQXvxK3mnoZHDBw3h9Xrh5iJeMjas7vEaq1nMGMYqWun8pD4hGHjVBawgigKmqeZd",
  "key19": "2d4APH9KHBfLNFUhzzvVbPMqNpaar1CxGvX8eXWC4RuGqWcxRdNuLWJPu5RYUkmFBzPhX5z6N41dtTmLqaeNkiDc",
  "key20": "5HTmUWf1YBtBQVg7VPw26pepjYF1x6nEzdVDGkgt9HdAfzt7gbW3dtnYsHyxUHbXxmB73HA59wpf6MwHhDNpPTqt",
  "key21": "2JbH1pC5XzuwxQkrJ7mst6wY2CoBZDtpZHWLCY3fmXuTqEdSifYvcobL712mCxRL2h2xFCgMi2AJZnkSD96jiL4S",
  "key22": "xht7vHgoqQbmNftGdmWtZBPBUeVyejCFUwo2zQZ62hULERUTAvZw3mDBpjtjLp9GXX6Z73Sct3J7g74VUeQCFge",
  "key23": "4vYwSGvXFKJWxytpt4XujBR3rZGwuje9svQX6dEndKbJhcmsPSEHybpg5qLFs6vur1EsuWfoq1mYR8AXb1uKeSsy",
  "key24": "3Z7U3EhkR3B3GmhUSDKtkWLjhwSW7YBVRSGStSuYDjfdK9V6H5qVR8nY9naaqtACXxUBZpLEJVS3ZRzfDJY1pbuR",
  "key25": "2bHxXtRyTP1Ru3j1H7T8yWPg69Jnr4BXnyjSiwVWYRFMe1puVpkN1yZG5XZF71g2ViadeveyhcfAxCQ1zLha89A4",
  "key26": "2AjghoSftwRiEAAFjz6pHctqni77VPN1Lmtz3L2XrZ7BqFJ6VGLQQfEGTfieSeUC8ah1AfpXBjgY9RphGMhpZXhc",
  "key27": "43rycko1NGnwdSsmqbvWQvnsKmekpMZtiviDFiAFK2r6AA1Kyyex9vuQVNhWLGje8VMfCxbhAW2sAmw2RQeakczE",
  "key28": "3vNLX9vjjEDgczVghMNQRzKwGbksX2zn6Jn8J7CdMYonTfJAZs4ckbsBfTRitCcp5Srg8QfhFwoJh1bZmwHT2jLf",
  "key29": "38B5PHyhxPohBGUnyzytChfbCakeHxRmDSEuBtUMkA7eX9ozAcv3oKVBkSivjFj5cPegBoR2tYc4cTrcmg1PXfWY",
  "key30": "DVUStHjoo45xP2zMPCcarUCuu2i6p67N3B2x2NhYu2LtBFf6FaGYhA8D8Lqn58DQ8QqUAJdtA9y2Y9RYnD9qEJ7",
  "key31": "dKi1YMZeyjTBDh91cc7iFZEqfHifD5v22BgP5VN4YeDEAj3FNUNTbkiWrujakAxPVibMFVb2JKwf9rqxnKvfMH4",
  "key32": "35v1pShMPPFPYHhFJdb4cX9TTv9sn4bvVBXvL6oJMS1rpgypAwt7T4JhbUBV5CV7uFG9mcurPTS3RgqKLiSkiCPq",
  "key33": "51wBvasC73U8y4z6KnCPzdXUVAmHs7To9ufLwJ9ZqT2TRpGCFmsh6w7kpDAUS6uvf2WqTuaGcnNi2h27kewLHnhv",
  "key34": "4AtXi6obYBERHoGyxrmmQhwRHDkGjYiA4zj24BA5rsHd1UofTVevq6D8KbB9SeMKtGqWbWwxMc7TM9V6fk45Xcpf",
  "key35": "3QPF6LKdVqzXv91kwDuvqc6ZdrJivZs8MAhDmYni13BB8UNuQqipJKR85A3sZ2wRT4E3LMfc9oWDMDL4Lwck69ec",
  "key36": "HWvXz5eXj3Wuq9pyAMxvs5ngjSAoMARfqyMYP7aqwXTiHiZWmCn7wKxvpdQFbRXua3eaqAUwNZv8VWgb5iQWQ8a",
  "key37": "62QznwMsKxvpCoarwwnNHSB6HLo3kDeixUPEv1gzAGfNfyrX3LXZrZrjFmqDAyt7yzexEyzHjMH8rEsdQYQx118L",
  "key38": "KGdEaGzQ5YVv5K2wVnVdgyA8AxmXN26A2VLUcanouszYWsKrafKfgftJ5q658S7us7c1EU3WSehYWmS959HPGT4"
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
