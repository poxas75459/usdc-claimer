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
    "5UMM5RaCwVauNom92rdj4b4t71VkQrHJ3feQQ5Py89HiXhswmaYzC4WL8hk2B6NhTBwAj3k2L1kctEfXpPoVUdQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iS7R4bMbJ8YwcBPoSC39tJ25GZEFLafboLX6fTKXkFqQinRYcrBY4cmS8B4QmE4KX7g1myPYHLz3UZSFDrMSXdQ",
  "key1": "5Wq3qdSD1VG6PXAGfHhqP94UnR1tU8HRo6BXfBHp6cW2mjYY97HxowKM5pDsFy25fgYJThGEKCkT1LxwACeZhsQf",
  "key2": "dQFgfyiHKKt997KJKrfoMkSV1U567L8rfPVbwiWK4RD5EhHqiVHpmNwgDsiaT15msv5sEsBr6qFNmAjorXUvUCm",
  "key3": "3w2Htyuc97nPU2m2mb7UAFnphQ8xy8QgZ4bR2UvxghTpXZqisrJn7S4B15vfHSPxxS6kdjvHFCMZ761qDDopci5V",
  "key4": "6CTVVxqoHkbJkcNTb6yp5Mnr3Sqyq8rNDRWGVGZauRQe8q9BJPUXWp5oEpWg5RpXiW3JPggGf5NSEDq26FNFN1r",
  "key5": "3gvFMjCLi1P4rWzcXTKMWans3Qth5MFiQRskGzqFqjHxMAyLPfLDQEu56J1Z6wmRCDNACLhVR5rSj3Ne6ssQYrVA",
  "key6": "ezwwjZCVLSaUromRaXbhWKP4EZVPuz3zTTHiKeb2pyyPaLNcjM7n1fLLL62H5WMqKpitoj8XhEodBvuGWZ8a7VX",
  "key7": "2DdYdhPgCgVk3qSKiCMCaY3Wa9d13esXLEh7gDnA155H3PLMfbJFaSa11sjVFamuekMfy42Fozi6hqk3cf9ZKu1r",
  "key8": "59K323QAqwiEZALexQ3rcWJ69QWxymuwTdSWe7TjhD7YGRoiMCZHJZoXWJ41nTwBHQdjhbUyxaRaw7n35iYAujrw",
  "key9": "5TXfFzxW5P5sagpjeiZSeUoYDhfaLgTX5bXpxE5aPFEAFFEfyNN4nwuSUfyHvjcGymkCpscD4vBNemKTxG4snwNp",
  "key10": "4fuqvL4EgrxKY9AWi9E9p2SkkYgdm1QvtKkgohChsPMZJuwi51pCRPr85GbT5WBLFk1HvhP9BEqwMBGnNABfqT1C",
  "key11": "4JtvWTWqdPDGQZUvZhdWyXxhufh5AsGByhJZLPvKQfqxRPWVXkBRjywkDgnS6Qm8xitYhnGNPdmASRx5RaAYBAPp",
  "key12": "2ZvZ6Ryy34EFPyWWYefnAobfieAXME5yBHfnKNKJT7qK976NqUfF2kjXWnUWWp3xCbcXFziCmWK1QZamTvC31DHM",
  "key13": "2r9sntikv654hexewjRkX5KXozj72NZ3gnJRHHS3Yt7NAtSWvnbTWA7BX8kzK77T7YdjsBHuzM2JSXMVJ8cSDTJj",
  "key14": "4FnJ6wVQ6fjWhrbmPLcnoPwMazuVuow3j5CidPxx8CfwAHUaKduaDw4eDpFCwxRfsxPGcXwJWYGTnRZu4z9og5FY",
  "key15": "5FeMrwySrh524SgfeNxoBtJePbyBbQBiSL12APFTrmVAuT6VnqVLQzfi1a56s7KZNfupkxj3dw36JPSGPEp2bdwG",
  "key16": "4fKkPqwnM67vQYvif69f1uqXaSrU7WKqtgAWPFDABX7VHgy9J7bifxzNsGjgBUPdVmX44GQRTd8fLMfuEHfTAxAW",
  "key17": "4iRbrgUk8v3eAUcy4qzNJCsxnE1vNHWaWmmdHezhVAkKctCpGP7mTPYiowCgnmuxksM5yaDtSBG8ggLNFdBvXrEh",
  "key18": "3Dy8PioZa63sXX5TrhDTP45fURoCVVTu6CTFhWV5M1jMJoDiF2seqRorcNekJkZiM7wvRu9gCheU1xUG2YUmUt63",
  "key19": "3qFvSEQj5tyWTCx8bA9Qm1XEdeoQDDzSLeKPdkPJjcZG86uUxJDDrnDMJyCzitSAegyxkiK7kRY6Hw9SFq6WBRQg",
  "key20": "48P2mK9KwwGayYEf32pyCDCcz6eKXkTzMxM9XXGpy1UcuDMuTVckTU25medYd1eMqFqFGJu3cVT3GEhsj3sSWaPD",
  "key21": "2A76rxbXXhNcismnGYFCLN63LRGibAzLQo5zR2AGxCtzxRKKtkF7BuTX4n5uDmUqYMrXWuCm4jE9L6FNfgaqANBe",
  "key22": "5hcLqCTeaQwxqW1CQZZV2bbaekpDXzWZdnyTFnM2yxFzYMRso5NUWaPaTnjGkzknqqtbvHHYC1LeCmvXqLWSs2Uf",
  "key23": "3kLVWDbJgUZuisYWh4xypb7Bdww2x1fo1rDmw3KpM1Xhhjj8inW4RJweKeRFrSrmhwWhXQDoabgbExv3ESoFZ9o2",
  "key24": "5Gmi2C9NNcaDFa8i44rFYL53hYAnM3txnAqsA23Z8cBVetNY9234kvCtyMSYEzsFd9onHCPJ2NXxMY8AR6MXj6wZ",
  "key25": "4F2PHd8hhHcHwV4H5ktUkYgHu2H3hA5mMgrjSNcCXHaAc8Zf4RLDF1XUTNpNoGoyeDGw7koTuJRij64BJK9mEDak",
  "key26": "4bCLY6i84rm7Ezmc1tSFmJhAe4y1uHsr8PZovH7m2x9HoDA6XuVa4rQ1okM2gGN99oq9VU3CafaydkS6o3VnwFJs",
  "key27": "3Nm5n29azxMxnXv9KQk7h1x7heEmhs8wSPSQCBqooMuTjN9Hr6Zg2JswkK6zwkChfQGS4d1psFDzh9GUoUuzr1yr",
  "key28": "MhTqnuaULSqnPVrJYQwofjYXb4LK3MYGBM8wME9UYCsRkydqj52xpEXFr9JdLBHRgLJ86cTkiZnBUGibxS3bPnk",
  "key29": "5pHKYwANeVv4wRPguMqkhAtfJESEFEk6CcfgE8FgnRjxQ1jWwZ3P7GvjJG1Zx8WbEDWV9ZfcsP4FeXdeBDUu6tg3",
  "key30": "234XbtdYyweZ6bhZdzrNzM7iWmyk6DZkZzBZ6V9gVzRnRULtzRnRALQhFRigbUdC1RgwEDmVfSxF5JfzL7P8LHM2",
  "key31": "3uCxo1w9unEvHFLQn7PEzqyr3fyR4hs34jASTKZhVFWGcKvyMnzMEH4Sqzn8SmdWEyXBjsa3EhiZ76SYtZ5fumE6",
  "key32": "3KiCQazN69fe1RxkXeNYcoWAXAumWV2A4Edp7Xe2JarUgf4Dpjh3N9ZBM62HipXRZKFQKwejeTBC696v8cZcUTgb",
  "key33": "2xaHjaSNMWNTZhVHL4u79boWaSZU5xPcEgoq46cQYaMohkDBEqHf6rAGnUsk62g93xDN588qnn49oma4WmnMaDsx",
  "key34": "3U8JAG4pV3MuWnUxTV8jYbj5VGYJbroxRxttTsJeve6nA76LvWwBELYZVUTC3rHHn1S8kDGmESqq6M4CSA36icv4",
  "key35": "2uUKSEjDcQqUqMu8UwkGzVZwiYPKo1ULLfdiba4jkobmJghqTHMshz5RiEvSbvr2rq6x5ZPCRM4cucCjjUx4djmT",
  "key36": "2Csq5C6b41qso8WL9M4y8mkQxwqKvrUQPfvVkKVzYdEXWi7iSjhGEBdoBSHFzqrkwZpiksHVEUPu1eLAK49mhFPY",
  "key37": "5CLcu3jhswZ5nb4cSNqUokBYjvUw8VRuo17fkVp7yTtSu1GhKChFBXcfFGNyTs38vimnpPLVAwnv6tvJ1iZ7EeWu",
  "key38": "5q5T4UDzHeh23fypsRrAoE1tuUr1rGoqptkN8Hpx81sCVQg2xkZYpGtgqXWi4q9eGEGri7VU983unfEa9rT7xpFN"
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
