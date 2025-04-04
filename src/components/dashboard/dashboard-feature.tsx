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
    "2T5vCr7XAfHWQziCMJ8HSdSxLDkTEuSgq9iS7wbe39aYJMHotkHKYU7KLSq1jJufxR89BSCGEoDXB1Q1QVpUSeV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UqkMCnNonG6EASLLWw8Ld7ZqP3ZyLgVq9X67NNW99LLLZVBFiwTT8GvmsFwz8s7g7QqXV2AmucHHKuzrmdqXZwr",
  "key1": "2tAFv2YkrzwEVMa4R6o58wtDsGGNBKBnapoP8ZvAUSXqcJjZnGUp3Cd2sJ78BMpgRtz55h4rXTHi6fE4QCWoPxby",
  "key2": "5kJ7wU8ymAuzvuje6Epe6N4vRcaGerQ2v6qbMe2EwNvoyr5TCVGpB1qCPEXytyE6AokRtjEjNYvfPbTzg4z56yVJ",
  "key3": "eRuuFqWMRPe2kcFWporcXTofhj4VN6bS3nStFVQdgH9p4sTTGPwazAW5F9jEBjVNNZXDhknVJ5DauQ6J8jRv9Ku",
  "key4": "33UEt9dX3ReqqrkBnX3rQmMCQrFZmEULRBHfGSEEtFgs4RgbogiM85wTj2qJscgAmTBhsmWxW861oAnhZmV2XSyy",
  "key5": "3e2vdsh2dkqFs1ygHB4JX8Ju6enSngsF8Kg9VHHQisvt19gpoC7MVLrQ8uRLs8wLa6P9WzTAaPxcU9LbGzKdPUrB",
  "key6": "2zG789kJ6LBsNoMMCX4GYgsZjBreFYa46gqzbQhNmamVyCvELPMsTbscMhMZVFysqrWSRho7YdUVYEPXnHFo1Hp",
  "key7": "yjdSHUJRWQTkBZPfqNL933s5LEao6PJQZGykXoVe3YdKbdxHDNuNuLyJET4WU7mwvecxHKGhKQcfo2CQXwP6Ypi",
  "key8": "JQfPVdBtjfQ1GqUHfkcnA2CfqW1g8M8aLEQDfH8k6TUDBqPm2H4s78gbn6v8s3FVZ6NAxSX7dAC3dw27xYi7Ax1",
  "key9": "5qsXJ18MmHK4WvdjT9SzwWv4VZY17tnBRkkMGBdung44uUXLv7AmECCKg5McVTC9gUaxxQwavtko2uzB2gKarPt3",
  "key10": "2RNG9sWuwZdvTc46rk1ugFiV8wzEGdHGfdjiQRTMDc1VnjHB7tm7yBrcpNDX8P81ScypjmZtcNo29qTnADWsXWCo",
  "key11": "3opxHd9fBE1jP5zJe6LEnHvMKLsBuHEVw8vWTRg5nKo7QN2fgVXjmYovT2k5yKboQdh5eSjYmt8YX5ATwqLecnJy",
  "key12": "4RZ1sQStFN34EFXhrHJ6prfSoHiKSQdGgqwjoRZtmeaMijm9qpMHUBiXW2tromT9ojSXCC5kM6Fb4k6j2uM3YJNs",
  "key13": "2v5NiWjKC78PqickF6bMXaa22LJsNkfDG512SmP61VsRGvGSwfsyfhxZN8MQ3wPSt2hf9W82M44MkUYwYedT9NFb",
  "key14": "NKA2kELBpTEcLtMGLiQ1WhHFco9YkwPXuL3tWrBEW2ikiEno1dGQhaSqsy6RHroEwarvMgzbDeqkntYsR94MMZk",
  "key15": "2zpiUrJDHNgxgeAgHG3bVTwZqCkxger2gjsw9fJWYXqYhc9aZXhUYRQpVwHedTtEgjx7sg992oRZpdNvGgGbvQ7v",
  "key16": "5ivvbMqZyhpbQM7WbcuGQnxPaCbMKdaaaB7Ptm2AB2H8KotWxQVpJhtU32gBqpe9GS15qTESFepLYhNRaVt7E8j5",
  "key17": "4AjbX7Ja7WFWVf1yxCRN2r2T9Am5Qq62bRUjJwto8ag7bVWV5boNJAbasZ4fKFRiepsE7PBc2XjkPXmGYkqdAigF",
  "key18": "5hA5grTWtDnRpGLPxv98B4nmjEF5MwaHgxgNq8H9MWWHJBRQCKmZ5YmSfCzffugmm5cX3TPzNjg3XhhPRUCJajzT",
  "key19": "58Mb1Q43NAXDUSQsJJA2FJJd5Nzb1yugRSfQsWzVbpxEHy4hcHvQxZta9RfFGi69JpGVPHijivBUWkymEvNsiF97",
  "key20": "4zYQZthvQQyvS2QNYwHiDgH7ZdVnFPF9iuDYZGxZNdgqScVCdYGY815QcLw79wEcAzioW5o3Rk6QzpGec4L2E7vM",
  "key21": "62PrrkUcWKXJY89HVH7HidWbaLD7U53zEEjRJ69E6qMvZxHiJJ6qoqf6BETLMSmfB4ZdcS1mXSYgEWFy1UfXuW7x",
  "key22": "262WEwdA6AtUv7F36HYxcUXHmhZVMb1QdpH6iq6BTYzJjWCkRtgWhuXq2QuKByNQFgeRoktQ1umFctQ1QxuJkzxA",
  "key23": "2iPqDL7uWpy86h2HvY54uMj9JZASnWo6gsq1nperrDbtFm92ThPr6ppJh9kJMbbdH8ipghAk8fKxU29z2XPSRqC6",
  "key24": "HBYPe581q2hwmLX9Yw9ZcFMtmMuj266Y2RttCZbnV2NnonwfWNAJeyPFLqeh1J5Z6yJVU7iZRUBRBUiFSEngw5A",
  "key25": "5KxyiaHDnJHvwDZy5J5iD1o4Nm3ytFQPFRuMQj26DG2yZjgbouA1KgmM9EBWuaUQpJUPo5mRJXLyhHxg6mmxaoQ",
  "key26": "2sTcndgECnQp6C1GiJ1mq8nVRCYYipj4ZMtM4jMaghL1cihvCxdmvSYE7ic8o5m4dP6L1MdphTz9WHu3ok2zsMfL",
  "key27": "4B6jAkosGz2rzGBNhtCtSWBhnX421jRA7UEfjXQ7PR5eoJ2oW2s8qca6jJSVdKDYvbXGbsVQQmYB95CeRWurKwAy",
  "key28": "5QtCMZRmvDW6DPbZmkugg8M6XfF2dYug87fdMLGyfexaSxd4SFhqui7Kfa7ZmyRSV6xzvu8mjyupd7qkVUjhadaF",
  "key29": "42rDhQNijuEjgsey9XDsrht9T8goMVqyefzVAx5aiEpGWhbYy26KpV8anLF4cVhJcPgYhEusChJamL92Zw1mnXG7",
  "key30": "5WWjXwMTuk1CcgqN4wYJ6LMo68hPLXng9mzZZMFwdgG5DKtxCC2pWRoRBrBFzjFNREeaPXi6PTngJWwTUfHR6z2j",
  "key31": "62Mmxukry1HC7EKcTMb1mRApdob83n5fz4KQHFpn4aem3aYTRezV8NJrWEdAGM8R5MuUob5oPtmmREcfLSEiyRtP",
  "key32": "4W1AYQa6FZUimnxbZo93y9eJHZCyNF5Pumk1VF7b4i575cs2zcneXufdDZThqMg76zzoGWDbp6XA5VAPLi5tfWnX",
  "key33": "SrBcynop87CXjaSCyh6HQNdhid8V9zb4G1kdbpf2kjopPwdJgvmE8BQM11P15eF9DpUdukWuWgHvRKX2cGZo8GL",
  "key34": "29mxm2YT2uAS723MfhibqTVmHybvJV9HWcagmqQcRt3ZZNbumaeLZFGp2bPu1xc8pJmZhXE5TQW5Ux7YNR2sTJzQ",
  "key35": "4KtU1bCqyg1RYYW7mGSv6a39trGhXa2ojgynw9MgcLku9BrpJ5EQ2oUNQNrM2HWxNqBvkTertCFfZmQPENRY3q1g",
  "key36": "5KZp8zQNsNvpuiWaTXiRmCibvADkqGsswXuDazR8wqZqkKdJyT91Ua8VkbeG7CzrdU5wZQcQMU747xt2sEtsYkhq",
  "key37": "4PVKTM7CJaAPrQMePbp6WvCKiLdFGeY5TwPew6SWvwTqGZsZixgagNDrrXSs7Hz6KKxLZrk2oQ12C8VqFBkW9vDR",
  "key38": "3MAe51rVE2mqjs1uDwTaBkn5vtCfY4EAsxaJSvhycPEZvMjJ5xeHxYDkCrhdhahzAA9TcbXvpAXT9reWVfwZo4Cy",
  "key39": "4wUTGA7pCgfZyG7m2BKQZ1SKem6DJQFFZYfR2rv9nNHTV87LWiyQeFeXLFYy2WqfYzvssgWtbSXu7e8rwTfhQ6MA"
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
