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
    "4VGPkbdZ3H76EeaxWm2fxrALcux5vizg5BWTCfNjgrwkWSfkTRLDKvXPNNyxM5kdu5oENtEMRWhjVQKY4LbQzJM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCsjqcav8pZKKQUEUuN7LP9SGxxxZgEcNSfjETm8QpfztDhrzFhMKqDW1d9SHDgWyn1wg4KV4D39qmjCVF8wE54",
  "key1": "34PamAR9to4jKAT6VfRf4g5ZqPyUCsEriWwJVH5Z18P5cFhTtXm6QGTSgfBoJsCJSu76wwsMRwwL12BoSFaVfXih",
  "key2": "3ebWeZhhvP5vEFwdw6gHCGUiP4w6ikYTJJ8Sg5xP5rAmxJS2QeV3BGBiiL1hvzQUsBZkqh2Ft3mJ933Ut9K7DQ3V",
  "key3": "HVeVJRH1AA9HQQywBX9T4hKJFPLvUeQrTHf9wCB4uECkMJDhcgMKKx6RisDeTaZSUeD4sgyX3rn8z7nLgBTQ8fb",
  "key4": "4m2hbXrPkR1AAzXpoj45UK3t4TgXBGF9vvUPNCYcANeBCet3QUTDa88z9N7ff8qXNh72oLjbMNi7TVzE6Lp78Mzm",
  "key5": "4Uck57fvu1AVhcgrofCNWyTYSogbbMM7QfhYhJwFPnJenN5udYaXuML276foy82q5zUqbxgXrC2qAUg92hyt1wV5",
  "key6": "31oo1o4CovRWv5maauMgmsb1vgEFZKfiuXc2n3oWUMS5Wi7STLtoUUH4ptMChrPSwUsrGSNU4qL7G8jiFH91G5Dr",
  "key7": "PU4J8e2Vt87m1W7gw9XWUKBdzJC9tfvczqwHsb7N1uVy7fP6vzK8rJmQ27UhkQKeTx2Y3iE7v33aNucCex9eN7v",
  "key8": "37Ta6ebQc8UUAFybsq4ZxYuHGvGGK9BazrVqvPuHG4HmaVTuC2fdNjpUjjPVAeoogR6acnD5NqynakHyg7sELx5G",
  "key9": "3KoyUCv5E5Yp8P7bGWzc1c1JZxa2zwEicmKp8LjConRJwErczr5wxCc4szinye6AiqBNivjXTZBW4ACoBwQf5Dwv",
  "key10": "5iCoUL9ujtVuntnFwvdnRGANeKToFa9vhzZJKjY6882oYzJgx51f2ML1R9NSKdNTqMMvA9xtArSsmjbTcLPs8PLN",
  "key11": "4eau7bZijKSQXRGhk7Wt5PTxGZx9RRkTM7kr6kVsUUoFds3Xw7ipZyi5gWGDg5GqAdMrSThgZKk7JxKaKDYC3DYV",
  "key12": "5ibeqFfa36spD9wFwhdeYCNGbk2szSiANdU19ipuyaYo9SyELb9Y9Pxi12qKzEVdTGwmCNFLkvxRWcLgcErwFQyk",
  "key13": "3wjtzJnpvnMd6g6gPkM5yKzUaQV3Fnvo2EM8oULqK7waTJCqB6SZL19rNAoGiX9z51CWAMpjKru9kvtY5U3k1n2A",
  "key14": "3esJ9tRWdzjuAhCYqAiLWYhZGYkJc1Jjnu1P32ryhhp26ACk5abcFx4MKmX7McnbTHmwP5QMT7QqfbtA4Ds9LvKp",
  "key15": "3C3yYLqbMD2PRhLbGvqhm8Maq4eXadqiHaNBbFx3RgqrQG3war3HNh2dbgiHCqm1PLBeuKgbVcsRivkNxoBkVFXP",
  "key16": "49Gs6sFfyAvpSxWs5BVojyoTEBVC7yrqG49faR8tmmSE8bsqkFLuRFK3goVbchYhMgyAexgR7iq7eeGART4qSuE6",
  "key17": "4wbVsCoHbGy4b2GxywxFv2dDL39RtN6wZ8KBGew3PwSjzbDuP4oACWXvUaxKjDDmQt6Rt6Zcp3SVCepk8fcZbAh7",
  "key18": "54ikaRfHrMStEFms6SVnR4qz7kvwsHxfhEF3Psxti2Dt6rWfAyoWcUfiStYEFZZbY18zc9phr5E1o8q2Qtk4h6B9",
  "key19": "55pwSsDSbouxPSGr1S3LN1kGVkYXJaLpL64uDZvBEA5cCWjym92gv2PEdjn71B1uZA5kmgk5vypoxPMdpxEieZio",
  "key20": "QGkWux9MFCCcSqbstkDe8bZV9StHA1QgxTMfyYqZz1MYwhrFndcmHnsKDkUHbCrvKJL28PfZ1cFh7QE5kJr8qs4",
  "key21": "3CSu4vqK4iLjz8sLDDDiUdWryFj8j8ysjqfmgBfq4q2sskvdcKMzEhzsuDTUbNfb8bzLdXUuhzpmVyjaCkKiyo9D",
  "key22": "vHxMBRePLw2e2DJFoj2rZenGSuagbivoin4UVhmVsfh4rFwVWuZywfTdcr8jvnN467x4bPHnSkEwpmepZzJG2AA",
  "key23": "3CRV8wCowTXP6jtcLaNp3hfGtCLVb7aFKkaUoVKRkXLfGmc3vVsqfamnpzvo5HtbPNAaNr88MYqaPN2G9QcoXFkT",
  "key24": "5WUNeK6jXjx3MWwJP9cD3t5CpTnDByqd9s4vjiX9TF8Jx867A6vJqBiqzWAdL4fYen1qusZ5EZSVGYE6u42NycJp",
  "key25": "32CfymcNiWj6HWCAoAkA4NPQoym4KqDqcgfwNSumEp1ufbQNF5BbSuQMAosWyCBPaBQeLQebFPXz8pudspSgCQGm",
  "key26": "BuPskdxixmhFZmqkrQoBDNUXKSqjsQT93J5kyrGFdcgfb5bq6WNReAHZC8uWju4ciCfyp3qA8XKG26rWZ1envNz",
  "key27": "3r9mziPvsKD2VStkotMWjr3nNNfEAMxcspg4rXXSTD76KtDpKndyEHyoH5Vnemp9nQe4X1qu1NaN7RRSWjxY2YUb",
  "key28": "24p61cg8KfY45EVQeBJBUWgxFWonq62zkZciSBQ9iDsKSxjBikLgmZ4vhe6SAbhZfgeuSU1QHoZNET6f4GWPC2tJ",
  "key29": "4fwy6oLhL2PehRem5qokLLqi3VfWeZx3F4gQzcfACKAgeSLzupaoz9SLsH54XoTQCBWvfNuvUj47K2xDnfuhhii7",
  "key30": "5dG4KC8UqyWEFMuJuJCAKjy6xANEdQKGXT9kqey9mSvANi3dCSZWk8oiFnQkSk1F6o8KXGLJRD14oud22VcHrMbQ",
  "key31": "22hrB3mHNKqqRMvm17n6E1U9kZTay2t9gQMTFmkPAfJdWwxPRqgsi74jDVoxAv8mGFBhWnJNNfGx5yFL191Kk2n6",
  "key32": "576ez5o8ZJXcGpF4SgyEcn4p4v8pUbFE9mBkzgpDb1MDVnpKgKuHsiWbbPemEC7URdFaujM8A5nJhiE4hpGmShc6",
  "key33": "3rZq6Cj67ieCAAQ2R4sWQDMeF5KxDaXyJ4QPYDP8gRNYUkQ3AELHHMD2dMCT3kgu8aDFKnJ4ZhZLkLDwz3zBmdYk",
  "key34": "4SBDz28QXiNXBoCtLnSc6Bi1XKoYs4VRuNqqDY5HNqEeLqhkQNdy84TtHP7FQXKciexwovmcrYXu4qZsot7AJnV5",
  "key35": "5xa5ojVztD4TSiYLCxTPmUBVBPSdStuRCn1CQzaYVut7EJKNjaPwnZHtNMwuhmEAwQTHvjKQTDoGJHpdd1yERhwe",
  "key36": "28W9W6VhGk7n7Qk1w951XwJvA9Fx2oWyGCV6wTH2FBtFzMv94vE6WeXm3hVyvVtF6iupSRaw4PWLQ3igVJegCH6J",
  "key37": "2ssPMBFZUn6temUgiVR6y9bn6iZS6zSZ7AQv6SrXLJDvuts88PEHyoUoP9pDsGi6VUpJefJW8bVG9REKFvunsbsq",
  "key38": "3ddWJV1E1a2F42ctTQAQYyanEfwwjHZtqvGwxLTtwZnmwoNJaQyAKpCQ8iLxNugCgjhuyNCFqu9FX6DnXxaYRrvN",
  "key39": "2xFn6WPxmtQ7Vw5MzkSF4UXCJPfjPxjKqRgdwrELKHbVfJheBuw1npqtndEhvT6EksndFcWQDKGsUuFW2krVbp2h",
  "key40": "5wKtLd7H9UnUrPJ6hKfTs8d71G8kbnDoai91XTq1TrAnU9StSWLfMkfkfgyatYhUi7wDAVFm7KneCuh1pJuiYbQG",
  "key41": "2KKbxcFWaoEgDVWMDSeH73VpsnrBH89kAj5QBq4sxcZfR52HisQP63dsapZNmFLmPTjwQaWPyxfDgGG53P2mdNhb",
  "key42": "3SGuDbJvSfP8qsWCFXNfodg7BbFYP55WwSHCJWFrmetSMs3tUofz4nYoRvEExLPBBpHd6zMLHT6L2mgxKmdTfwFW",
  "key43": "3ZYaM8pkebj8if7Xd25Fdq17isPdywcdtGLLZ6C9dbHka9uRpa8zsPLJXZqyKVAwMvtY8xEvf5JSdoGUa4Xr98ri"
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
