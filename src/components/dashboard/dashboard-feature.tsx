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
    "zpmZPsFKmbFyvmuvTakf1X5s41THMvE5YsUwaaz53rVCGyFmqzNeLSVvF6mkeyX92waGf9hmQaqJjvHubuEHnMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qzmzer7gYkCxrCUKh9gEWcegmTTBYzQ7eqcn5bFFUK2w6XWd75JMoTZ57QhG8zNbg4HqMHWqzheQBFHRgtQk4BK",
  "key1": "42ApD7tg4qDrHaFUvQh6ChYYfBbogseLSkJ5fMbKrv1QWFcyXHE4NtVM64xUQivtCyRdtC4262x6ZCfcCpjU91Qj",
  "key2": "28Qi1waRrXmtWHSpp3D4VmpTvewCyD8GnfjRLoCsSkLYaJTehH3PsXXeax2fefHB9omSnB6MY9Z1ZJhgdYZeU8wt",
  "key3": "2CAb9LDZivPYwzZoAHS6URqCXzZLPpDdU3X1ysoAeXXLwTA5pUKHbRjvNShXCsEytT6bkviFiYvuPUn33pobfxWr",
  "key4": "4JNVU7F1fnph9BpQUbdns9Z8AvsX15RfEnqNTN598QjWXPWfFicVjsUuLMz59kz2BNadu2NtBnvcqJVoRMD1inaN",
  "key5": "5aru42XYjxnL4Vkk8t1Y4scAZuhkysGcmEmojWUGugRicaeNUKUa7av74SFFHGbU9Hg9Bs2ZHH7bkGoQvnLPbZS",
  "key6": "3VoAboFXUVTC4y7mtX8YtbNUayYYX7JBHjCYTVXdoCAiisdQCVuoVVCZ7LDTv4JxJwz8HU9hA59v4cffUwFweJ9m",
  "key7": "5rt7kj8RzeFpVZRv1VcRXhs5C4TQ1VBNBgMzHzcyHKwbocy31tX4Q1NXk6ySr7hpN5fzaMQey7VAa5EfCHwUMpzZ",
  "key8": "4j2zyBWDfj2DWJg6u1CfoB3Lj3uxQpFdFhBKrpzmHSWW2xL3aidJER8osnEjb7JHRTNAH3dQU6ZuhUJApACQRAfR",
  "key9": "2jviaEjJcXUgzoQUjWt9nRo1yoFKdYxN3TtoCdgR1nz1zcqHZUKXQZcwBNtzdxhQa3unjw9XhALtTLu21cDGo1jv",
  "key10": "cCBFob8eroCRaMS2sd5v2Zda45KJSFt8gSsEbPUV2VkyPadoojHUP5zWMmUie6QRafyknt8nzBmEdbw5wfGLkfD",
  "key11": "4Jye9xPn3dXCsYPVQcFRmHuWwsZd3Rbia87bMxEPBKUK6NujHYTPsF8GNoFBsMabXbfd5iErbSPicXCTwDacSZZg",
  "key12": "4jFs4ptLVNWgs7YRtmaonLpsx1XYmS9SvyfEhYughpoQ4tn7pWzBBuqRKCy4P1nxcPPVbFTgkrKSaDGsDfNkM2WG",
  "key13": "4NhCiYvftXZkZEA9aZrtmMno7DX7jBHhdPyPpM51JGWDq792YhKH99eF1r5jLrE99X9mZ4TH8kGAB8Ums4NxjoYX",
  "key14": "62aPrfsgAUkQZxNx2NTDL4gVr9oRvCVxfw8isTj6xJ4uhars8APq4HXxFU2VfHLoihtCx6BWFzhiMx1F9JKWSMtT",
  "key15": "3yPopgCf3A84jjqKzpV9JwHP26Nhb6J6VZT3DMDXmY6JRF8Zxj3zbu9RtuM9h4W8XwcaUvmrVhg6vSyAoU9L2mqM",
  "key16": "2T3jJr6DCtGuTqjpiymnSUQvQxMVpzLu4c2LMbmRRWEpYf13ReEiWD4jptPnYw2jSWXSRxtMsavCdNd6BbWvj3tT",
  "key17": "4Qp6Xzout1eRhcvVU8cJQScT8YxRxLjDKcBG2okhGnCqp99NAz9eoTmQmY8TM8x79csfEBsDndXRMCLeysc3MbHS",
  "key18": "7vbdtCH4s28FJuGpx5Y5f6jE3KBAZNrqJbwFTap2oX5U5e9a8rChjwK8KyzD6JPf1WS443xFuq1FrvHBZKnfFUp",
  "key19": "dHoRExkeaXTmRueTQVFjwvKa8oDFyQjtYAmr5SaprB4tmYsaFRhJv4wCtGV8jht3L5Bg7EFwrftChU53Rdqxj9v",
  "key20": "naxU38qH6FiXtEg1ogDs2hHswVchG1QmrYFqvS8dB1qpZy7e3BAjYk7p1NkdRbbEaSCRJLL3Lot6ReqGYa1YerC",
  "key21": "5w6i8stdkpfuqdZteTtzfcW8CbJRXJuLPKnTJus566WUCiagZy4B4fXqSMo7zYuJHXowwVyKQ38UqeTCJcnffXvs",
  "key22": "4J3PSC5sgwnU3iGtW5SiXyHg7XkR4o9et1RQpu59yaQnmNwZ4it1BrE6vzpcP8FAgjQ6XN99JWkCyYQmtXKPQqFc",
  "key23": "2ZdaUWcd1CNkSVdagerrD4G8VW9r2e5hK3eDn2dXoE6FbLgBjDijf9gkauXFiG14Eym51oxQffrmQM3QudSH5ifp",
  "key24": "4k2KnFAyB9nG5Z768mrLXoaFCyvoNoBdRRv7XzsRohQoLEbkHWeTcpYbkZDkSZmJNER4uC9YtDRXVMLX5mzJtuAk",
  "key25": "2AresYf2KFrVCeuCuY2drTko1y1XT6KkhVSDsWJnu3j5Y3KRaKaec22EB4UxvASaEeqrFZDYaxNi2CKbsUrT28ag",
  "key26": "5QNB9WgWyvbSE9oXfMeDRPwz9JzxvicLYXXazbpGsjMwsbhhSUxV8tGCk7VxEUQF96iTnTz9Kn5xRtkmW2pgbXKQ",
  "key27": "5tFRunTNTsWiZoezYRXAW2imbSa8MPxYVZhGt2QPRNc1ctAqNmyMPhfVsQhhCEVW1Qfzcp5wnofMb3hvtQYJQ9f1",
  "key28": "2mdGZAM5B47cC26N18aacTdku38yAatxSeqN7rPePMF9iVrR24ECT4akuEP5jpauf8qPZBizMYaE9jbHQcPqQeQu",
  "key29": "dAsQb5M3rtviipNpjypSnaBfpov7dVv7A9PQuA2uy2GDoaaj7S9DYAKXHpgNQJf2JEATafvaeZbYVxKg5btALZ4",
  "key30": "3xxpY75Y3RKFL7yMxt3qEVDRQDv7PVFELtH2pvpnBAZHogR13f6sbzFQYvLHcthsh1BH18WEBjcMZ8XuHcKvC4MJ",
  "key31": "4RfHQcs5EsbjyRgYKeaeLarD9y1dKkktsVGdyWqoaxdod7koqKDUAn9mfhAPfV5TFGCXWmNVeKzBc2AsxQYniqEP",
  "key32": "2oNgw6oDc1DP3eDgHD2cBsmN61gMfpXtcbSkrSYFozLFiVvkWgEFVf2zr1ER8vGSpkCTNVkrSCJ8p4cNe5xf4bqW",
  "key33": "56rajdXjQNiVh3z1pxfEeUaySqP7N737YmQ59nYfs6AwPdRiX7j5zNUreaigzKwsKqaWsSrghi5zUhKqzTG3sGb5",
  "key34": "2oToo4Rj1dwbE47D7uxh3ST5a9EDCen6fRiyLSqskLTb6FBpFPbArNLSbPBkcfsLmAwag1cwGaCojPeXRogKcDzQ",
  "key35": "LMQJZreqUtFhT9vnLGHUGfqVhEsds7NCsKgATZM6SrKDKFNuwmxddpocjUNp7NFfDJcCCF7FVK85D1AVmCgy8vf",
  "key36": "3TYx8RgYAsgmWTCh9G9VsrwCbvxn9KZapZ1mPyxxUjqAyScp2YK4N4eURzCwj3iaeGhCi182dizrjr52Y1vduX1J"
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
