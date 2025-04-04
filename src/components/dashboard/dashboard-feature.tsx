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
    "3MaeQKmNLWhSpBrA8TVDWDyjshSs5e8FXhTLDycVKb6yokVhvo8U3WhjTUXLmtPsEU41pSGVS5Hkjv1MBxRh1o4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T1pg9mbHkuuHvz4a92ERvwuUhDg9H997gCYZCnDytfGo8HbgW7cDALmodF2PjKZ1URkyEqJ3pKtNXTF9FoCEidk",
  "key1": "atiYQMPU49AredJ6v4y33zVY6BTD3MzAA6RMGMoBsAtKW3P7ZpAMKKY6FJ64KsBa8NYCUpnN4UJCbk3qLypWiAB",
  "key2": "2GnY3TKazTV6huovAtLF5E8KxhhH5jYgBxwvJr5HZfz9XpMwDP7fwhzJh8fAnuypRrZ6o57aEwv8raE8oignsFDV",
  "key3": "4tjxHcFf27iLeNrUV4JY9eHLCztEUG6ZFPyJeTGZxz8YNFJrZZMD1HnLryKNKnRGMMQakhuC9EfQaFHqMkgLF87S",
  "key4": "3krPmfuc6tA81aPnAnRruCk26tRcek7zEUd8o2J5adgvCrZtxdHLMuucCZZhKgDpaK5Y7D6hMKw1beA8gWjyQgAS",
  "key5": "4QxTs4bWd8dWFfuXK53HxcbRoXKauXvuTwZPytD8KxmAS11ZXXxPcoE3znrNdEyRwmWVW2y4vjgkXEPBS8HHPAEs",
  "key6": "3SAimsc53ev3eSVzaHaKQgZMGAqTAULbbkjDtCNWvr2c6jpoZMEGQc66WsCfNTKiTYvMFBbC6GgaqkNVDkrEuiKu",
  "key7": "4a7p9ux3w69dvnqhzJqCUpmxa2EEbWJ9fUEjrG6jURCvJqG6DQYCqfyPX8xKmvRmKxC7sDjukg8a2yZmqjMjLt9j",
  "key8": "4YhxBrNsgutFy83JiEP2v2EPDg8hGam19iSDsKf9jdRQXidJKWvbZu9aVYfcxwm7eCSb3JgEnnPqSPEj5edYeKxM",
  "key9": "psspuFt6jPBQaVHCjU4vdhV3j5tMpTRia28cNtZi68HM72djfV2EiM5jXs118WMJUDoHjHzxG1BiXBg88XaUQWK",
  "key10": "3HBH8KDYUncu5yAeqmWjYSDmS5uB718zkM2TbtUFfEVyNPTDpAaucpmw6DShBh8NxHJiQCqQPyPowSQHUGdfm4rk",
  "key11": "2Kngj1oMzCJWbiKTaKc6NrffAqyextawSwZeL75w14QdhXbDtDnzHhawKVCzEakowEfpBiZKHxzdCkjL63zegzu",
  "key12": "3R9Jip2EAhCVGvxEhxsymRn8MVVfB7aJRRaNCitoiHD1dxiXj15HSbstqAaJkgM3xTkLdATiBZbcahdrGLvdBjqQ",
  "key13": "4H8ooLD5ENnt6PaKQ1bczJ48R7KrktKa1CsM9nAjasBtrMNtxpnLLyyVF8ZD93hbQJaSbNbLJnQXz666pVFMJBcP",
  "key14": "2JsTsGZ8bNpuMHqPjde8vBhNo1JXgxQeo2PsVw3B3ZvmFmBXNzZh6kXYGChQgLiUxRnuXyTma5DYz6wPogwPeEjR",
  "key15": "4iqCo3FPp7a8PCPtHARJbrUbAhxywmhnna62beso7Mhn9Xgnqq97vNndfnpfrcnbsxu2SiuFom6mVQo76UyTxdPn",
  "key16": "oUeW4NcYhQa1jCwhSQma6LFaf6393Kebqw2cgpHDzoQtHJuQT8xx1LudLRwEwwP4kHwwiUTfTBeBnkfukfJ9sGR",
  "key17": "pNEMhjbWet6UvDDGNCghrC9JHUQDB1B9h5oF58FZ8nkQCeLWacHc4ySqVy8DKkFZfxy39jLi2DEtz7fm7ggYjA7",
  "key18": "5cBhNWtjV9yMVuF8L22atTVuNmH38RduEKuf8ysegPYxH9fSGP9A6ZVtyRinYXN5qzLGdBMSA8PYjV31TdZSmM3f",
  "key19": "5ZZ6ERVRMPHakU8j7GkLpSUCzLJFjPLoSpZVmtYeBiDdb1M3xWkab2R6vdbZRywLtW51UWpr6shDLEGnn4rhRcK1",
  "key20": "5Yn773wQeDgc7GDhrv3zKp3EqGAtgDqb6XVH3EUiKAWTm1RaNA5PRhbDjdV2xMSAeqV8GCVuGxXWUQfwFueRTgam",
  "key21": "sv7Xm6PxP9gN3vQXxPYJu45dSPG8fDqxsyS6YkTe8SMhz4U6kbzveDE9wyrMn7L7j2vx6447ZPfxJxwadDSh1GE",
  "key22": "3iRSEe5o5RhXQB2YYGsQBP2b1VFCG5Zq1vcY5hYbDyJXUuEuGEtGHb58FRADPLJim2Sd3zcTYYrASne7hjziXp7A",
  "key23": "4wCXPr258CpzMrNygGVW5tVrPPDJak5ANHNvxAEKYouDNszUZTD4AoAm81TK6UYNVuHfB148qJaxbKsiov7FJVDV",
  "key24": "42JVErHhSJynbCiqPKRpQpanEF9m2cWPYjgHaircWpKySDDhupuYSZzSfHzTFVW3h3iHNSbB8ZinbzYBJijgcuNf",
  "key25": "xq5Dhgsna75KwYuAWW4bv4nsa3m8wW9ZzhGa68qVfufCnLSKqJPhPhRMmbzHqzKpZhFbbRrKmWiGZv4PUjbax7w",
  "key26": "38PzfjFmRqsZpCp1oaWUsdkCXBvH9ZmeoByUr2FrD444qjVQKRSUqJEqcdKrTo9hDWCXVDiNwKjg1dUG3WtherNw",
  "key27": "3Fvtfkv4TYHpsv6erGaiCgkmaQ2qBGkdezPpauADqM8HTg46YKFoTCd5gebevJBJxSp3jHh5Qj7bpV5n6AGK9VNz",
  "key28": "2XeJn9X3LSFsvCPGKNg3TqZNAfAv2NjknNtkoeZRRGpUjogAi1aJ9yjPWqEahQJJ24D3oVfSjtRaWxgR7EgrqFB9",
  "key29": "4ZhGKbwDy3dhi8VBPHCFqcxU5FVz7bcER2iTm3LeM7w3RH9DDFgDuDSTe8xGdBJD3RUSxbu4D4ezanp31wzouu1p",
  "key30": "3PabK9gdR9h15kSV3ooGmDeq9kDdNZhbEaSPHrUrgB4Qb4WUbN4XTamwNB3fjbvv9Fvr9EgxbJ5HwhH14kH6xuF8",
  "key31": "3WVGLncMAAbEXvpa9ZZv8ioRyAxQ7uxQJtG81xiH6b1A4qZaEt5WxDNMobogAhkRBamfATHSExofmGDpDzKk4qw",
  "key32": "4V4ERsNGQhhtSZbgZZvZFSRqqQEFq95561L55pgF482Jr8ZE29rNfqQyTFfyzofMx3WCFaYhJgix93kcRFtbxUYf",
  "key33": "5HffajkA9Yb7GDjG29Sug6DzMuwxKWnswkwMYDJmmfy9zKdj1cXKLLuquAD4fnRmJ4fX3junxCWxaXpwwdddYr4Y",
  "key34": "Fnt9Pb4vGDYxoCoiQ1WonvfMgLsBsPnHXRijTW3vS4vG9SZrorDqwy7No2dHsZVt2ektGNngMXoyHPYQ65C36Rg",
  "key35": "5BY3GTbyFThXV4KQESQzxDGA11PW3QVenej3Ja4Xy9Q9BWSs3iEX75SKxpdbSQcXYnJSEdDzVwNbP9wiaoS47dfu",
  "key36": "4Ru7yVj3LnHcWzi8parCuXjWXdco6dsq2qYHxW9UE4sGTnRYVabnDY91Rf9QjWh5eMJFtRPzroAUcLnfgHigaNQD",
  "key37": "35uPEkDbzKxf1mZ8JFB4NxdALkoBBqsX9xPsBHcccCXFEKkWbHHA48tEbEA2VtVfgzCVR7o6pyzsaUgVgzSH7Sza",
  "key38": "66eZLpUW87tFGCzZSaXWyCUW64ReyL3xuykvmWmpF4PXZs1sSA68XtprXviSCesu84iXHUKH5aDbKZ6gDtjugtuz",
  "key39": "5qMf1qER9Z113GprxFGMyzGwk81wDSgk3xSLeDFkJ7scNv7GqXCBgza8C2VkUzhqXRUkhiad6S8wFcDav48ah3Z9"
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
