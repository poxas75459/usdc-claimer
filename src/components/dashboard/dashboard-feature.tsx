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
    "AVvKdvUM7Mf6gJeKPyBahA2daL1gt2Jz31NsYXv4JrbdBtrXq6x3ZGTQriEo98yKujAmkk37ocWzLz9hsL4VLfs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KUnhhFHp8X1LMBKsovpJn2Tn5D1bfpgXnKQohuTzZdz2gTaYQPskjtJuaUdEhvou3tsqrQwSAe4KZtSGZMZq5z3",
  "key1": "XcKPSWWgmuqUDbENeM7v6w48mqyVcFVeP7XUNsKsRa5GM3eDMzRg4PAMo3LSj9vMwkSgNFH4pwadxAZPS1YWR36",
  "key2": "3qoaVcTCX4noS3VDdgxaEnsuaCbB4Rt8WWtnEwgGn3okUCqfyNyxuy386G9nTkmy8xTFG7CuweGCNstq3orgoqtP",
  "key3": "5fVVG1pDrtb1rzbVpqmwLEao7HUTbuXVbCwmEz2HM2RBTSzvxNhVPyARdUQ43CjtjKBz5XeQxV8mVmeBVTsvkqBk",
  "key4": "4MgiEnJ81Z3Gk216JbJhsCAXgtXW167reTEoKDALp71zC8vPat1FaSmxRHqJxajEifSFAL3Kmi6gbGfXRomGAMiW",
  "key5": "guqLicEQL1j4GC45v6gAKFviqjDyKBHY5T52Xhi6Jkesisxekqk7BZazxmXEvysrL5zL8Vg4vofJrKZ57s7sTex",
  "key6": "5xvGqiydvdFwJpCXcdbzn76PYK5TvxdwwC6J6WwkwnwPSX7R3SCoLkGjiZEweUQFrMrf5L5416NqJWbBFRMVECWM",
  "key7": "4TZ9Y267BpWeZJaaCmGQrRA8s1yj9hEuKN3osdxWVSWJXGofUEbhVdXrzBTMYd4u1bWhAoX4E4vWPQSoK7JBXsiu",
  "key8": "2n7kGF5TpWnvXViLT5Xj4YqHC8YGGy5MXMV2D7L1151GiBFbTtEvw4iyEyUMFnUz8x94JwKFHjm1GABDveHDNcd6",
  "key9": "ZN3sUAiqJ1sVRuLkdyoxxGWhyP2Pb1JBo5K7BxEHzegnxnJTHKeBPmFatrMXzfjBrUFYwKvbw4XXhvGZaLi8H7v",
  "key10": "57Px7c8sccmkieAmwAnbu9ogwzuVy92MwwEymAQoWPhJSpyurqaVKZbeCV1v7UjLDgjk7VJnYqg3G4su3BWdCXjM",
  "key11": "4DEMyUeq1siPvdCbhn321AraZVvD9QWwBQ8Fbwici159cCQpXgsLPzFpmTwf5FxCJePY82PfHtwNDGUyxkomj3Uw",
  "key12": "4rJ8h7TzKQnLyNRwc2oiKeubPSoW177jribC4JNuoAauGMBeZbD9Q7XqKzrxzuYzCfxJuKjf4hA2cVf6g1AxdqN",
  "key13": "2EkwBYUUL5pHkjfirTVosjMvwcpJosEzoNzwo3npQvKCEv7cZFP5RrhPiRmaSzfkzZDzW4BB7HpJETk5oXksXgQg",
  "key14": "3eKA2qoWe4iCafYQgLRH1ZWfPhuyf8nUaCUegyAYUS9AAau4a2cuEkFWQYt6rx1mxsrtth5vnMCbE9uXN5SgWzum",
  "key15": "62AKisx45c5yc9AS4VANeuTamScY8FJN1jPpKEr461xbRLwBhTuDQmzxWEVq1JRxRd37ZESz81z1UbLuLuQjcfkz",
  "key16": "3vLG5wXLT5kpisrhBbmXuQjQmnKnMtyf5tkJbXJ9ckwzYd4RzTsjq8cxkCGYZjSWqXxuNZsS2rtwneFyQGpaN9Zb",
  "key17": "5njApNfdwVyf5ipzvtYnMcuBmGKakw7bzCCUdEBsWn1pfZSiqK5GhAF8AmkHjZS235oRSnKxsxwubxJ3GiHqRfkU",
  "key18": "3Ggb5BUYQBcRYfXma9Zu8xWPgeD8qtnBSESrURX7bDhBkcj46JLMg86gba8A3AwSHcZM2qUos8LYQsP2x6EbWm1m",
  "key19": "2zHjypE55RJeM5F9ync4mFMTjCk5D7vrwKpfXSD6E4dPERw7vdwYPo8FSVzFwzEiNszNg3bPBuk32SvsMD1AD6dG",
  "key20": "5VN8ozjBgHEoy6bLgn4ftzJu1nTmwyD6FVZUdqdXYET7RxVECPgPqdzzTevs8fpebTuA2Ppc4sYdtUtmToy3x8r6",
  "key21": "mzVM36acpxGCmYg1tuEi2rV31xDc2V7pbCZWBQXJwvXCVL38gGLJ7vjoMYJQNV2SBmvZ4B3yunUohFaDQrEkghC",
  "key22": "tqmYj7m2bvQM2CprwSaDk9hGVFK6UdX7TGj7LuxYhdqrbjQdyynvBsNsboNFMpVWttr3Cz8qUbRCabS7cP1EmRB",
  "key23": "YQGxEAdmLWt4Cdaq1f3dKpjybW8KU1pr3ofAerNFoFV25TRtZuJssz6JSf9CuZzG1bCJrWiBX68qZFPcNBFRs5G",
  "key24": "3uJ15gZfAYg7KJUJRuNnM7iHr2DjEDBHUNTqRYpJNKzLFM5yvVDSPHLaouSKcop6dZjWg1GcWQjyHFJiPm6PGBJs",
  "key25": "4eEu3rURCMJzbAZvRvA7VAWzG3TRj3hnRPjDj46Xe9YwH5x8YyJek3gGakPci6DbPLXCmhsyv5nSGa6BexBGytf8",
  "key26": "2ggr4KQ9kk3tc6iQ2kM2RWiYfVeXxTsfnSkmC1WGU5W9PDMoptHU7ZFYcKRRdQc2vvWeTRo4hjzDLHiZgobExTnR",
  "key27": "5hAvMDKzprmVcAHZYUc33MH9UjF566Yd17DRAxNgLmL558pLXrssj4aCtAQwZDFUn5mGTq7T4Zkiq8imjeaTE97r",
  "key28": "5YPzDWdmg3P8GFCdvZywCXs7ejXhMzvMLLRZ7rQChrhweChMGp9umcPqwpbV2S1K8qrg9rbJL4qpJRGdWm1VwSyR",
  "key29": "5o9ZVdn2djXvfT992WJWMjcX5QTUKRJ1AjxrYvLMyUjQ6BMDXh2CEPkVWcbqKujWnTMEsCVJharg1kBSeSVFighD",
  "key30": "5uVXsTMm5g6CktMBeDfReeQjLox991YSLRoLz2BRwL5q5iHneSv37Af1wkZ6qe9oikNsiYFwHMSQdVvpvRVYa7jB",
  "key31": "2cjTAZ4JiYH4UuqCrVbzTf5224CtDvFo1gaXScp7RNeFyg5KgtP97Ce2xbyGfK9RsTQREt8wS8Rhq6vN3E9EKaXt",
  "key32": "3ikaMyPKHtCsJ4bckZtei2ibsyr5XcpmarneF5AUiH6gUpb92KanTgd7yNzFtSFyPRYnc7GWMct1WWo5S6rPjvgq",
  "key33": "3L9KFJRa7GQrodewyR7244A9bNaAsbiQeZNLNwgTiG7SRWq955bvYwU4JKEEKhwuSxK3D7nNJm4t2Yx2E1S8tLo7",
  "key34": "3t6Ja3hBVq34naDk4zCRpz3Kks82dXGBtJGH1WAXdeSJXS26ta7SWE1SmCJxboGnFxaqZk2iDBY3f6mtBrwSpGGv",
  "key35": "5MCy1ycKFAv4iHzVUk2wsSmifkt53dDTUrGh3W1vyVDLNkfKfhrHazGJEcGmPedmEPpSAhHdM1MN7gpV98eunFBp",
  "key36": "2kPPkYMUa1GWGbvtuZabBFcQmn1x3rYt9BjQjy7VL9N3m8PUzGSqJ9gacXvfMEK5NyhLn6vSqQx4nSyEiiJpY4im",
  "key37": "4ho1XzLzNCcj9XQfkKQSkwAxjkjyha6nNGJ7rjDU47KFWMqpHGtCukvE1fg9wSTfbh2BSw1xhbhYAtECeAeKzeUQ",
  "key38": "1aE1w1FHPUzMycGtn9TuycvrffZswmYE7JE6HFiNYLLb4s9CHhAD64orZpYEtuaiiP4a9Q3hSp5xZ7RafU9yXCw",
  "key39": "5uNPjhC86jPUmrdC6YBaJC8ehmkSBcfTZLMP8LHMkXtJFpTRTTEwVZCkS38XCbLddTJbKhVYMDXSZ6YNEdxHo9vG",
  "key40": "wdiqrBnFTnZ51fLYkH5QZgNMbNjQW7Ls93w1sXnV1AMMZSqmN9hq6Fd2diMJe9LzVYqyazpDSETs9RxpSn2gy9X",
  "key41": "KarnTvFQztRpctEHPDF66wKmH1qFGmiHKrntrHW2yFuS9uBtLLQTiFQdaKwutvsC4xCLTvH5nEj5fDp3ZA4c3gN",
  "key42": "648arpwYGMMiZGt3t4AZ711k3eHUvmGF8E7k9fd2NFK8zhbS4em2jUd8zQbydrW4327udmUvJuwVJoE7pAVus5vh",
  "key43": "5uUFhU38GU4uUJrDVWiW7VAtPpSbjrVLQFw68mYg2sJSKzUoz9boy5MfL7SWyHYNs95ZduAtrQg6XrQMqkvfsA1Y",
  "key44": "5AtshQ7y2n7SXjueSvbS8Cz6jvuc11r4B5LemxeUbBM1kSbXYcCX8WrcW55wFMsegEk2RTfQxhtRyVWGUkXgWV5D",
  "key45": "5MthQ87Q9eKCddnEabNptbf4PRS2nvyGuXtFNhZ9XXSh9DaKAbekSbikgBJG9SUkNbU6khUPHQDkqG8ZeHQYGoKf",
  "key46": "8hahXbRE2DJnVF8BXWEVpUe2hjZ5LN3jDFFcQVXNdc71bMYpHxWHYjbsmtVtuxWJgTyptAU4BxnpmJf4D4mbpkL",
  "key47": "2xPBydbmuKqh75Kf7Hwi48vg7Yuvshprs76dLYtS7UJ7mC51u2HSU8aJj6zyzhqSXywjSo7MkxZG63VDowqYAnqQ"
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
