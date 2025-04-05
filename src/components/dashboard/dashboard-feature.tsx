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
    "v8XQrC4EoDEQrGnd1vjs3iMYr5ZinytwTor1bCG1Uob7QNYZPH9wijLVsBPKqCzEtfSh5Fz7ZYzVjKNUbeaqrsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66yeRDNFV2gBkqyPMWfNUaR3aW3kdCFTmdECBUfNLjtk1ncXLLNRbSkFgWYwAHrqi3PV8G7RApaGJ1jJNTBmaZ5k",
  "key1": "6oti5ZXTcU9yU6x4vvL1dZCt34GsV8bEqRNmXGbBAzq3hH7gH6uHV7bDbi3VVdpdBa4mexCEchMgqcNPyfdLStS",
  "key2": "4Bmq2Kw2noQgfR4waHdiL3ba8GGuJpChoR2gdgUisr4b2cy38kUUDT8uNA4S1M6xWfpbRQgHZkD5z5prA5zn9VmY",
  "key3": "4UY3XbAMEjHKiKB9FZzgtwpVs7K3BKsgamsGVBBgi8gwg1EYtFibCZ35UiaP12tf8oUmGTUaUYyjrikcv2iYFnDw",
  "key4": "Msyfsp6CJtDLudsw2B1fg9h14e4vsJgaSBTNX7ngLtqXX5zreZtNcsRVdHrmJU1TJie8jbnKBufox49CmkLe3Wm",
  "key5": "2D82X6Akzhm2NT47YKp3ZsL9WKCMcEomkkauTEGWYxwXMbVvsW8kvzZAErenGDz3LABDszRubLGU5KZ6D3pTvdXb",
  "key6": "48rbSb8TQLZPpd796pFss3Xg5iBySqYGxX7t2dr1nyZTpYhVihAwnAMnPqLcTdk63BKChPvskHbeK7JUQi34uSHN",
  "key7": "4bwuMLTGpQ7pNE5UACgbqWQWQSB45wWv1W3Pruar3bDfbH2afgxGpcD3SXDtcL13J9Dp6TmFmvBnCuu8XR3UHqrj",
  "key8": "2rfhEfuroTgxc2pkJkBmrPzLs2Ew7hCtCnpxD5TDXQDiTzkVG3mLTLm9jZCbAnugMikrxy1SN2h4P882ZqpwG5C4",
  "key9": "29x4wwswmyG4k1Kp2S9yoJGtaZ8d4LnQuidtYLpTFADUN1JpG3MUheS47uPXP6PWWrq5F3iYVCFe1MB7SfpJWQVm",
  "key10": "5smAJEHwDi1qE16aPKq3P8qV3HqNmqKoKjCLtcM1Zeu3gURMCeshpdykyVZAVx7Z6i4zGxiP92efotqTDwHgmY43",
  "key11": "2xBQLdGo5BbscwrhyX7odS7wA8MZAmHSiuiu64xyE66JtpbKiXZ5NvnD5E2MzRkqx7BsckCygaRQnCBy5DYbVMAs",
  "key12": "5q6Vj4rsmX2i3L7hAhbd6FJ1FfzNKDhmQi2iLTUgViEakasspMgtNTwJdeU3GMLGdU6UffUUC1G1L7XEmqBFvSWD",
  "key13": "4sNxaE4nSJsJdH2dWfb8s5vuhNAS9eDRmJdbnKBn8J4wJGeNmTP72zToPohY7mCqioxgGLLey3KmJ4CnCQeRwoXP",
  "key14": "ZBfhGPKFiDDkpzqdnqBcCuZaGdjeMXhqWHxR1d9qyUMA9gtGaz1HvrajhrA1ko1ANwwCdYixFzR4ARLc34D4Les",
  "key15": "2BTBmQnk1VRNEKyNQe3qDDRjz8tZYVSgicckCuCtLGsRwnz6H97DAye7YPUk6PjzT9dgshwdNnUohb3JLsNrF9zP",
  "key16": "38WujWHNtgZ22BVJiiRBK4hbPeB36x2Ms5PKNiseXYG78gH9NtJguE3z7rVs2AbqSgp1pgdWhBfmwd1pHj4ssDcm",
  "key17": "56AumgoUntFC4qhtND8vV5XAf2Vi3gv9xZZPmtTxHSyxvVbkEWxJNq7N6g85Mdc4z36KxQhLViz2zhFveaJr5hig",
  "key18": "3xoPokpFVT4vDxJyGGEz1zxuxUyXEMvwXEZW1uEYHZJ4CqzviYZHXaGwcGthqFsXPYFWVprzzDuSX3Ewr5oaVryB",
  "key19": "4YKTRABiJmetzBuMftJQn14SNcVwDN9w9yFyA3ZuVJBdrg3FEKSXPChbzXUQWPb3vLbk8CQMGiRH7Pz5jqNbkeAg",
  "key20": "QwQprfnpxLJVCeZyw7UENDMHzwpUfEcZw7FvbbkFYou2fnrYf2VhYUhcYQCMWPkF4TiRnAqLgYADZDbdwg4Tjxg",
  "key21": "4cAHi8T8khAMJ4fq8vM4eyVymF6c5rpV7yb5ncVsVptz8eAa1VR9nz3E7qU28dmB8xEbLDAsNpRDEE1ScDn66CVD",
  "key22": "5JsQZuBdb7DC7g347sTqb59JeRcRZR7mapBx8vHi3njKs8hHwAVwht13KvTysonRT7Ezsba5bQrfL9oDRcPLKdqf",
  "key23": "3KCXqDs2iR4iQxLXfyhqP1561urQXArGBRtePV7v9x2PHwBHawqmZTb4uVFdFhLpqH82QMqg5ZD9mbNAPwtuHzP",
  "key24": "DXN3yVjnr8SzKoE6tKfkM6fH2gUVrCTDtjFqbeRvZhVPwBWFUS1zkjExWiZEVLHguodAbzxrop4gDtyypQhK9dg",
  "key25": "4oXZvCFbt6yzi8pAojd7mzZy9guGNqR7jCSGrRhj9yAGEiVccmPQSQ9xkY1Wy31Hgsmhb6nDQ12eJLfEJB3h4axg",
  "key26": "4GNDN4h56ztnYtSkroQFyat99EdfazeVjZwZKFAgPV4sGaB6tYFNpXi5YLNVB2DcQAY4FKpb15WU49iWcLxXMKSg",
  "key27": "37TUdcnJ17kmnrjeeNfGTi9D4aVdCfqsuBnW2uhNn1gfiJiQZF4FMBfBX9i8LhgFevMfMqEk5oN1N8wVTHCX5Y96",
  "key28": "3QE2NBJbRd3eW6r1pskKv7oDMvGfuzA3kfRV5YHYCTLXXWFFY9CN85adiCyeHMq4a8gHGTGuzDmWWzHSg6Z5ai6S",
  "key29": "26UEnUiFqrjcgZniaJrtZaFghhhkJoYEAXgv6fyN8BR2AZbWjdkJY5rP3VcivgWTMy2fSczxqfBEvwKkej85QodV",
  "key30": "4QpshVTgwhFc9Qng7ZdCkcYVoAs5AoQu6mQvgsdxJYc4aQ8cRZsZBXPzofrj3R54JfTEupfRaq6H4LkebQJuKbef",
  "key31": "45NtZNAg7jvgJVGDqoZEBGi9wpMy3sZqRCcSWfEinagWaxBAAs9zaCjuE98eMc4cmEs38xk3BQzwJbCvxWSEKemi",
  "key32": "3QFGT9qU2PhfxjfDMUQHRjgWLPuE9Vnbvj8a5JkF9BevWErPMNr4sod5JT7pW2N4pNJwGLJD7a3fdi2fD9Fu3kLr",
  "key33": "E8NA7tFkbdRA25Ga73U98niGfV76wrn5WiU9Bz3eJ5kqD83MG7HxMsVgFHQ3S4FGSGh6nf1ZAxzTVF3SVxR5jkp",
  "key34": "AaYAEJnSn4UBchREVRXJok7PPXtchEJ3DNvnTrUPSn9gM5euyCxzCK9TTbo1i5oq1waWisP7RjX28n9sjNRqE6P",
  "key35": "4f9WFENXDqXhEvJA31a2Qt1bGmKN3ReBFziJtotqiAhmnjLWYBnzMe1Tka2mfiknwjjvwx2e84L7vbmbgM5Agw4o",
  "key36": "2NDmDY6LfnbzAr5mTi7NnjgAkDX2UCy4HVkA1dqq9hPTxL2bSh9W1gzYYtSBVNCCzqQ85QMEUPeSwP7V4ufXVwWa",
  "key37": "4zKXNtsMc5HJmWQ5ybfNkaiWG4WB3UDZd9Wp3hAdS2aYWagRixzktnZRVgXJRJA4mWmxWsJ4RBwAFsGGu4KvfJWA"
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
