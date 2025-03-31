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
    "2sWgLjQEfxA9qFHrgq2ZyyFp7ucy2CXVWXL4zkJA7snkr93dnrYU3MszHAhBWUS8GZ6hJVKWpjrDiH1PUoTWBoju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35iQjTAUHn9o4gkw4BYyBK2sP9GdiULbNiRrtCHB65d7nTkLR3wabJAJJfgZpkF6WJF83WtRfg3wkXoPJuoBaubP",
  "key1": "jatf498ARNpxD3RR1Ju9Xj3iqDe8y2Wp8v5JvK4RwJmGHwj6BKUDwbDJugFFs1bd7TnJkp4juEZKNQCzKUNrXcT",
  "key2": "5jSVSQ5SqvfmY95HgknzTtgtd3NS5woTCQ9Re1moRj9iVZnX3C3hBuLjrpnQZG2bpNp2VPjHMcHLcYRrqsmRxBvd",
  "key3": "2jAT9vNiEsxCXNQbjYj7uA7RajCpjYWEnm1PSuHraRrVs1xsYLNrYmpkHn79bXqm8NUQhungMVLmUehmkJupG7bV",
  "key4": "42EvHhdVemLPhceMzuzG4mcoTmjkZoxrvU528bC4ct1npoT1jc3SdZPxz5Kd2mGFCXapjEZFmvpUQhzYvRo8cB7v",
  "key5": "5tbcsTHL42v9HjszZEEir4CCx1BbR1BPy4KqNpgGTCkGSWfsBWZ8o2j3otHMCZyt5PNKqgy75EGZ7gEpAvFEkEAJ",
  "key6": "mfdxnPcd1ECujxGg8Qsu4x61pPY5zhrZ3d89T7AZkFoi7ZLS1gL5DAzDQuC4cD6N3rnJhtMNCD6wb2paVWtr8uo",
  "key7": "44hFGfGk7WgQMb1WLziLKtwAfStxtdCcb7SXaqnFb5b7zxnnviPrMSfTwCVKS5ykfjYPH2kJYUn5Dscw5Z9h3BTC",
  "key8": "48UrfsLZvqRNdvwmxS3fvfs457R4SLXDU5NLseuQUYMZHRf2h37LeVaxFTcJ5yvPpxwGeeWD6hvPfHR8W44NBhWd",
  "key9": "5q4e6QFnrjxS2eQDvkPKx3uV8EZWm55XguLMiyMzhfrz4y8TmFX4682xYSsk8US8pFjhgUQ5K1ioUomNdXQvet9e",
  "key10": "LdnMgtqSyhrP3LLVoyj1BmbiFw3PsXLuGAmsSJbR4qWR8HhHKDS7dBmnosQzbhc3mrJyycGsTN2HXr4fDzf3PCq",
  "key11": "3Ayax62qZBeMyQuiRtCPMQgY5qybdtrgF29CHbfnRxTpZPT4kWcxKSU8feAiB8KCUPVPmG7g4XA1KWJCioVyQbgN",
  "key12": "4gWnwDZBmfBxJwgrJaRLbJ91TgahzFYMvKXrPFJKknrfYnozJvXqvbuNhyd3146EXY4jAJnSLyJNourJjBUB3MMD",
  "key13": "2etyjbgCxKZeqMz2f8QxcZ9MXkioNL3QCBvUeEjc9hitSe4V5WsWuZcKK11kVHZfGwrJ1hkAinsyFcNF9CkihPV6",
  "key14": "5LXxSbxrfHAPDb9uKwvh2qpLvAwy8oyaj4a4yQ6WjqwsXmtPxzZK9f2qzu2fSCGbHfxZ5RyLvc5ifHdu4CB2dyJ8",
  "key15": "4gwpTYP1yTS6GDQFYFnjsMbGG9TKZEFmg1YUE8s38ym9pzyzuetK8WCCGoJxKGZoJRKuHNVFQQGM3WhE16k6UDR9",
  "key16": "WS6mJRiF8PTtLTvWC1WDs4U8Zp5ecbTeQriRniUvtmvfSpsxoRwdgtSxt5dJEBwbUMiHx3p6fAZN9KqVuicFSBE",
  "key17": "5XqQqJ5R1sFYZgYgume5YqCGhbVn8JcuPK3a4PGscUy3bjeppTxJUPVsLZ2AkLaLfzZazKXyXVBSrxVd5qUErRWX",
  "key18": "2Dkg7HRgK9fVX6nRaf1J7nBKjuW7YvgXtqeCGGMCY9xg3r5cuSdBthirQgdb1uraNFZfiTY9wfG5YgztDhCSbHFm",
  "key19": "mx3m5eecT8ryZuhtxHivYma3q4uauKnvr4yZHcBKYowHu4LXZQzvjYjZAhqSVoei4mhwTCBv2epSsYT7rVQkNdN",
  "key20": "3XwaDhTR4cavwRY2vmWjbXdcZ1zkdaTy7oEESWrDaWaX34dSktXrCmnA2ycTQ5DitJR4TfjYjyDu9MWegWa2kFNP",
  "key21": "5BvtVihvX4cemRXwC4o7grLi6sNW2s6AEYmpEv4qiWXfegCYRwne26zFh1vkVukm1tLp1yuwtBV2z3q2F658F5EM",
  "key22": "2QfZKvzwnbyrP4ox7zvwf9hcTp9Ua5c4yxmnPG3mse6zZaSanQLL8yheWtdAmTyueZhSmBUSyfCmQznpX2Cm18p3",
  "key23": "3owaufiNfkadNhPiQvTMUE3N7xtL83kuVmeDJs5eo6oRTQbqyNFaEwEJz9yCYZR8nUZNhTGZuQX9U563JzyzZese",
  "key24": "2fPBBNXvbqxZDK8ejGRfKZ72LGJyUsaikPdm4yMKDB94KcKmHP8FBsooM4oNaDZ4K2tsYfncrdX3sczmonPZEUet",
  "key25": "5TMWYR1E3sGx4Rj5hieHqqNSSngap119d4XoQQjN53LLDd6uXdtfJeZzACCVY7ugwoSxQFubmWkgzmJpm17kVjBQ",
  "key26": "5PFcWhNELDdYjGVXoNuciaFHmsAFt7N2pQ6yBuFtGUUCzc7kHMHQaYnPdtzKAEoLcnR3xs4WpWC5L11DnPH2uzVi",
  "key27": "5Tj6Awz2aceez5wiEvyv1YmRMVJZ8os4HMc2UDCC2PCLRf7DTxSPY1Ech1YGR57UNHwcZbRAszLDWs81d374cEAL",
  "key28": "4ehBH3RrSSeFGUjxaNMbqv8AVa2HXz4hdUxo2T9sMfJhFkwpVZVCFxqBasoXw1KmGzQKqzTU7brvkdcxRw5z6Tbv",
  "key29": "5rYx8p7SNBSL5S5cZEvgQWz8sJhGDF6VPxmVFd4T3E7i2E5ukx34NWRdCJ9Edxrkxhz9wVtVeSr3VjY4Q8ZjiKR1",
  "key30": "3gPaDC9YwDU9VfeochQ3PLVni8jfhGehWaGqg8V5Bn7KCVBi2wHbhL6mNNg4BVwy4ghdzKYjF1g2KYLq7v4GrjMe",
  "key31": "3g2LiXYP4pwUoPaG1WmhixgqHU4VYGpdrHypwo3x1k2VKRpXzTnW5fmG2LUhXkH1HmScq87JxgqCNiGrxVpWciiE",
  "key32": "3PDkuY2N6QL4VAsMbSqfW5Er2Zg7yrig5nxvd3fVjNZjVkU4DJ8jHoAfxv5EGEC47L7vGq1WgzuhxHRAFkf8mkv2",
  "key33": "4rom3qXRhJJSbwPP5rPrjetHtQSEWnYNggW6PKfM7SzBmxA8SCSJj6z9FKeB18Fq75kjtoPsQjYLMxyREBVm2REV",
  "key34": "3LuBnjQVNBqfDg8KTZgbvnWB4xeCThakVZvjeSTNawDfGD9fopPUU9o1LwvQaphxy8n9WLVdHfxvyA9uJMw2CiRC",
  "key35": "5vcoKdqQZiRn9rXKfnky4xBciihT48pYPgDG9y5B8cbVxw4CT7x7DC6TM9K8A6B5H2AykTLnPpTK8FKgFhDdPBW",
  "key36": "4nTyw5YPMLE5eS1Y9R6g7htBZ8YKG3tiz2cij29GyLEDHKyEduU8neFoijJUth3PiAECvA716gP44scnnudwHZYe",
  "key37": "3Kx4EfoAMyTNN8RPuczqUUiiayBEtwsGY3uJchJTt2hFrny3dmneh3AHJmhGsado8Ea7YwmJaYK4ziZKxgMSUzrL",
  "key38": "Ujq5MWsdCPets6m6kLyDoNhHtWi3wNesguUKmHV6fSLzGnQrtCN5faS5hV9ETCfqg3xdLfg89SQL2eidVWPou4K",
  "key39": "5kacEtaPZYCXhBuRLKuD9fKAXTqZzyS1A4Hh36EHyV9c2yZB1WUcitAJd3zLFkk3T8mYEqPykexyGFANkzJXxoVR",
  "key40": "5eN7cdzEjocA957GpSvqhfyjB9juFPNTKbuGyg7ooNbawfEVRsVtqUS5Vumkz9BFPGBoU37fKcVVfmvCJctf6gTp",
  "key41": "WKPNegD5EhCN5U5JJAWGcgmJoRZmgZUEx2rqK7XGhPa4WRU29WRGuJr9Rx1UWgDjwUHLrctPimzM5jz35pEBSnZ",
  "key42": "nAGJ9r5JhJV9f3Ufqef8QWx6A2vhTFez3KEGxnxXVGt4cQtxP4mtxD8WZGZ4xAjE9g2Y16YFiMtgtJ9c2QXfTQ4",
  "key43": "28tqediwTLyxWqAZWGM8zmQgtJtC6Ji2Ws7v1FnaJGWc1mK8bHWJ2YcgGveMBxByvRd81J7SmK1RvodU5Zr8pWrj",
  "key44": "5ceSmaSJH17PhoUyb5P7zj86UDX6XsrKxq3whnajpqK14R6CSsVgT5EAHq3h33R9ZMsxLRPULJ5dJxH4zEamcrLP",
  "key45": "38ZFH4s6ue13BBxXpFYGf8YyD3eVGLDLfGWLqGkRozsxK8XmWh7e7gV3GWvL5rSehE7UysMA3rGfsV4FoUaskxXA",
  "key46": "3pdJ1Dhk4Ci1qihiWDmwU8ooPauPXa2xCUiuotiVsRd7iyx8G9jMUX2X1DoneDmfM13QNBTrXZscBsdPjzK4yQkd",
  "key47": "55m114EKMNoMQuFx96Ro7Sr2XRFEwQMAFwkz41MdZChnmr3Ww1gESxVcLJGuMAh1WbUCfvcRQsAUydYZQ7cUQGNd",
  "key48": "5mnXjYuxik64vf45Sfax4tpRsFFBggrPdTKAMCjV798XMrke3sD4gEi8eKjfE4RY8vhgKmq9ZLpxeLNxVcVDU4vX",
  "key49": "4YtJPErmM657YBs7XTW6YagAFXSKaonWkhWFYKQX6JVTWjMfh67y8B7HSj7pK6ipbjhoQt6NxqSEsHGjd3Wsz8Pi"
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
