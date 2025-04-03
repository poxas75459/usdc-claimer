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
    "41sUxp3cf6xgbSX3pn4CwQi51m6JNrmkENCLZCgqbQd4QnT6dTpMnMtN4cdR3JtPRAAtEQA3PFYPuwsqfktKgCvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sf6ZyaTCXpAcB2cH6sz9icBUBXFvRgbcg9rnybXQ5f9Psu1YGVUNvXPMvfNKPLi9Rg7ZPWKNtCnmBPJqdMuwGPq",
  "key1": "5e6BretcjVmbfGDkLKcJKg4CEfi6f6DKUMqggqCkUuGYH9ivi95wPno9MhKZmveqrUpBR8PjGnnx6bNwjCThC8jX",
  "key2": "4d4cShu6NLGqPT3i4YVqWpfWehyikFU47Ds4SFACBMJr5J3hZUdaeB4WKz13XWcvycvcZ8VPNueavfGm82iNYtFv",
  "key3": "2E6GtNX3sTkMUxrLrEZEzjQPZ3q7J8ZS2RLKsreJq5sEobZhnFMYDvMPr2TBmp5PP9XSr5BLqeHfg7Y8evSp5ax9",
  "key4": "22NhTV19ZQuTNJmZzPQEEQGBKYocMt2ia7ZKCkbCqnY5V1yZ9cumJGdDPBymwXnR6mR9hrhTi441HrUdWhUwA7je",
  "key5": "97UXvYYEDvZKuBHMQvY21WtdRW8KNkScyHDSdtSYbydrHEQJ4kBsUwnX19dpkijJ5mcYL21KPtK5TEbmA2juZcA",
  "key6": "CBQ7poDVvVxiNpAnzSnsrBawWbgggDYdvLEj4A6fx1BLC1r8dqNtk17rbKCgxJNafGHYqsiwYTSynj1MAyTND5g",
  "key7": "556en5Jhu4STJYdADDG3bviKiymkDUxGn4SEXjWWQzSPqWrDae331ikWJXheizMzQ8yQDf71Yu5UP7eY5mhVxBt4",
  "key8": "2tNvu1vCcgS6euRwabwiS9caqVZiE2yEDjxVSN2Fyz9guKuMcZHxq5d6PBE83BtEVziUWM3eG3p8apMPvSCJ1Kk5",
  "key9": "4jL4f4Qq2SEsnCFVpZnSBqqUJDD428mLUh4VDdk5emz7Wg9ok8yzhogikFbxRoxjxuQg1nTKZEwHnSC1FXJcdsRG",
  "key10": "591LQWR9CgBmPoSpHSyCnUjpabYNBth4XSA7QnmnzAFEGmPBmCFewjUcrJjsPFJZG4LzV3oHoywwGpHR8V3wrVKU",
  "key11": "5FvWxAqrPDuEbR2qbp4Q3GB2e43e5Wg6ZbeGJXminCKePvSWCKi211LZg1zQbC5FsWyj7GTW8UVhgKsYh6MeB7k9",
  "key12": "3MaxXy3Vb6jjBpuhv7XaPXLjLgjmmKTM8fJa7Q8wVBchhtPLwhonTEDxCmU62DhKL9SHkSCWi7woZrV5tpqfaKxJ",
  "key13": "356z3cYr1Qh9byAVFBnjV4vuFp1LDinfGoUFB4CyWZisrgvabWbiGbDZobZx6PriYwDkRSsHAPFB1cHKhuhK1wPW",
  "key14": "of9qdtVMcmRCiudLdj6oxUKX5GFVuu6Wnbb7fBUTBb3CCiZ5W31d6TT1iNsQLJnJJvnuTPNSAaHmHEdRBBEeepv",
  "key15": "4oJusqjJdFJJTSJhrbrgpKaL9R2QDBM8ffTfnhXNQXu4EpMaho1Up5LNDkr4jKr1EJusAZdvuuppex9oqn74jKhu",
  "key16": "rhy9UMF9X9RpopvUhttbwZeNyJU76mC48zQehXDcyeVFdg6Mdgr6UcaTWJavihCBS3mSw2oHxASzVRoV4bBqu5z",
  "key17": "qKSuMDwdouZdyXszJB42HvLUX4WiKjfCfMMFepuHdXUJ8CEP69xWH3aREomeU9uejYm75sy9o4YZX4ToLzeoHhh",
  "key18": "3Vvs2FEx4HosNokUiDtaiPqDrwNbtzMBwrHaoqV12nXjqeEnPEz9qjV4m5VNbGp8sboj99kK3XhgoGDBLTBczueG",
  "key19": "2eKjGLJjBJUUc985axt9CxtCUXehGMZvkmxNPobFGEdEth2Ljd1mGHwBwNjESMyLHjR9BRCzmWNZ1c7dsApFUZ66",
  "key20": "5psKddU7MftP5uapzux2JoBBEbyD17LvreVMhrU96frT7A3hp6P3dvoKHbbCnbFzhZ1WTWybxJxPJij62ajxSsP4",
  "key21": "ddhc4Jm6q1eS5BejMdZyHKZALkvoyUZkjSmZucWknmbQ5QGwb4i5YNnfWH3LU7BGbaMFJjxsq2RQLR3stoBHiT5",
  "key22": "4BH1ME1yux7zf5PePUMHYwmHSoTG1CPUWmAnkhVsYnwacWZAhgX23D5GGnQUNPvm4YNzJMpcwuVxuTNFiS5YumR",
  "key23": "36JxQhS5WvvnUeDVv79j9v6roc9tuF9vWr5np2J4peMWnoJfPhBU7gvvH1vGiJgG4Tahu932sBtrMnEDVv72r9K8",
  "key24": "p8Mx3CiZ3az3Hz55VZ3GAmfGpqnndroES2TpejTwJYo8Pxm6z4LmjfoaFWXjeDroftHQRGB2kbwYj6xPtdcRBtw",
  "key25": "3CyZ1AZLZ7bySXxUQxWf2Kdg4eJsDj1CR4oo4C3JhKCfZdAcGpChk3paY7CVjPdv9WjQYCUiTs1vKe1BymxkRsbr",
  "key26": "2egAVYQcYkbZKKiys2wD7jhnmFWjpzwUoLjxgpcW2B34T1bRfDfcsbWB78BSpxoy8qXoysJY1hqU82aEKonKYBVJ",
  "key27": "2hPrFjjato2K5aERmAU9N9QuPbxtCqT1KPmTRWLDaf74A7GhCEoHovrYAi4QPhVPoRGWbsQdazbjw6sHctkRQD3S",
  "key28": "4HKwXq88zf5gZcQVotP5hnbwj8Mnb7eTvpHe6Rd1QhwWauSqybtrC3zT6W4aL3onZgNjad6uJfqWK2XvRCZ3qtGp",
  "key29": "3tqk215RpyaaZbMcquzjQLZ4Hj3e8EBjLXq5wL28RnoC8ukZZ1aDYxaTxNKWbgnhoiP1JGJ3kmWvztAFZT76Co5Z",
  "key30": "XfWQJiqNbo3gSDKWCFk7W2prHFv6WAWFkD7yyHbVx6U66KdG3BWibM3oQo7tSudz1mV9rcYes9roFnJjG8nvaxy",
  "key31": "PRrGG1YmGjQ8NTnRpEQqiEHKQDq5ThByRn76a9LEg2qpTrJMnkmjaj78iVCSgp3nVRoxArH1EP3px1rCbumPwy4",
  "key32": "5tGEG7KyTSmEq4b6tdZwuzVsBbLxmCdwjyEvtmTVK2f3Bos7VF3yWDX8xt9SjGs5377rw2Q18EGdYEw4Bc6YXsGf",
  "key33": "5omTz31JBiRdnej2FVRBPWSmKvavAk7djvxK63Rw9W4PTCcfS8x1kRb1qf6rdYPM4fgHoEv6ZS58TJKLtXyABqSu",
  "key34": "n5pKpMLNVkW5wu9dfhyN57MPHhnQYxYQXz6VfvQQtWo8sNZMDc2WbtPgbz641Ee6YFTWpyepFiQFRbB8KNeHVeY",
  "key35": "5s4Jcxqb4E7r8prGQGjryUAvWkeBpM83x4jZcpVJgKSZzkcGsHvzXrGJWRL6UnRdyvgstCkeeeru3LVv6C84R5Kt",
  "key36": "5wGW2eqWLj1adaxvT9s4w2ECaj1N4hCi3TzYiTT4WD1XkVwWL3C33FzD3YTJqBM8Jp1ac4oZyCPEm9QkJWVxAu58",
  "key37": "5vVDzDWwCgsAoYoMbg4Yp2pbXLpijenbzTxfYdPXUW8AVWuY3R2YvvhMRuSLSf6pc8doXwtNVAzkYsRiXktzwWrm",
  "key38": "2GqXc3VYoZ3ZKm7TaLbRSwLBni9gqvergzSfbuW4xrvcA2et1mdKJ8aq63k84NUFwLmCZkdFxsq1dm42FsKRtsHb",
  "key39": "upbDVTZZD2yoTJsyVcaHHJDeVvsGburFdxoqaAtNmSiE8JzfeeCmyXmtX8xr4jfrvT4kdfgZDqGwaJNLp5oRxxt",
  "key40": "52qnaZiVjkb7NdTSx1bjhsW4ER1T6KBqKPqgaFP5K18Dm2ovjqpsY3M2cYmWeUKt8uUanbqikM2bUNueUSrWvb48",
  "key41": "Q9ZBx5Z6AnTnyLoMTGVkcQ4aLJcnFp2c25TPFebVDFUsosgJoXLz5UcvBFey4PTRwgbUrXbXFvEHWLNHCr1apqb",
  "key42": "PDi6WRML6GZ8HNYW7ozuWUYndmooq3LMfn16dEJES15Cyo2ngdfugkHwkNN4s8H5ooXHjeeVL6t7T9D6BtLZ3vd",
  "key43": "4SyFQaUyg85eddGyLaCVrEpwzi5XJw2UCHq1tBogeArrAYXB8PNJdaLV1ShKN8UrLXG1TZhN9CZ72ou4NxgRCn3o",
  "key44": "3FnBxxU6jTrVkcEyCGoCLddXScLdLdpQN38BkGRbV3ddcZZKkBEDSyfs95FVk1gPLJ2Mtz1tQRtA7v22CxWiEHNQ",
  "key45": "n5RPDezfW5n2UcJ6nkg6XbX8CRsqLxXJs2mA7837H5P2SGmbNUC6uQWA1iwsLtGgPumfDEoSHkJpVEwef5wH9gt",
  "key46": "3LpBe4dvqBWCa5K7SwhNAkjZhokRaQFtXw2kzmmDGQEcQnU5utoA3ZQxoGV89fifEMbFy8QgbmBKvBnjLam9ziNc",
  "key47": "383rTuWqi4sjSAQjbbWitm4e1mqhZbLXQE2Zc1Z4v3tuxhVhWHJbLdWw2oQqZZESH56swTn5REiYppg1YCRbBCVf",
  "key48": "2yoqZc953JamQQYESMf7xxVe7MS8CzdUAhk5wrFxrKrjCCqDYjXDyeH6dYufDWR5EuPCJAVKUY3kL7NDobfMi1Dk"
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
