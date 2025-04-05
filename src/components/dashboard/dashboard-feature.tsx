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
    "2mDtfNNsFH7248kYGa4MESzTzx2Qe1XedegjdM4oFMdrGBvLVGw2heMCHt6YQ1Gq861FkE81YKzK6MTREKnqvLzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ArHH7AQxY4frK9GS4Rm7zDWacvnUmEpTGSLMH8dP7r1e9mjBGgoBGVmaY7zoPFjWqqaNAvZ3Fu2CmF8uR4D6gFw",
  "key1": "64pbJgUaSuwddt6krYektUos3iKpb46VHd8WGmZ7ejgZKzSKreBvzUtwT5FaccRbc9skfT7RV51PdcSLMSjgVfn9",
  "key2": "4MMQU9DfAx9V6JDT5JZ7PL5uo8VdXoZ49p1qHE8WgwjvERi7uXqmaQhyDYLGVBVpxoFBb4HXgwfAqSrnkxNX8LUE",
  "key3": "exHybAgs7vc8PxRpDFAMz9FWTDLERe934JMkMhgMQHDvpphHfAudFxJXt3U9dqY8xqmmLKHBv1QHUDkPD5om6Di",
  "key4": "3RdhRWJMmK9odWgE8MQkfPJ92Ec51S2NJPrUvX2eCVgVNR5sveiPspaV1b6parCR8PGtPtCueWoDVtXcDS6vrM8Y",
  "key5": "3oQe9xDpVBtRo9iszLq9eXYpHSzwdtxNF4gC5PevMvMVEqhcqbyfnbgLDoqkouxZyUewC9Z1QG9Az9TDXeTTo1Zp",
  "key6": "Wwv8CwCMQH8EdKJ4R4rCXgap5SbfPed1hye39xZcuorandt4Xq7Pq2Ktr3Y9feWmVPqxoCA2HCYE7SoQhEJRNc1",
  "key7": "2fpABf8ZmYo4uJjLK3L9ZNXdzck4hLvRdLybc2tzs1qwDspcmAenGSkYRP4hECDedZbjx8fwUHp3inndcpT1Ma4b",
  "key8": "4jCm2zJz9LfjsJ3ZWHxQggLHAZTW2T3jaepknFgKnsNFdvE6tJDw1mL2r6Drpb8g58FNjjkb4tkBRuWngmSwM1PN",
  "key9": "2p8SKVFynJTSjiRivgxLb29B7pyvncViXKwjpe2uegostUhVHHFreDhaKD6Ly3MvRLUbkf2CtKSbetWaN7pUVdW6",
  "key10": "2yDG1JCDwbgLaZ5EGXXxcmbTRhkfTJLqtvPMyKb5cLcvxUa5dxaZeecQXH9weWpVquvYX6c6LhzAZ4hmXzbVG5tW",
  "key11": "2djAC6vxv9gC1GB7HUgvtCCcqxb6F7GQXJbpgYS6xhR7ea52ZP3uNzTGaQ3S8Wm1U2Rvs6hwVunMFjbRx8nDf9Jv",
  "key12": "ZS3rrMv5tSvpAFJnRxCMkJcWVuTQ9skgZtdqbs1zZq7J9vuPnCrXWFETbMjqFAvwXfk7tS9ftndUf9PgbWuvaTf",
  "key13": "2kMfd5LijaoM3EWNXaKg8ScsnQFPL4uXszVUW1MTyCBBEZVA8byizYDHm5yj16kscS957AfgnvGUJjrsyD4zgXWb",
  "key14": "3fA9hD3eT2Fgf2aSbWNYqpGeEjKkEGoXAz1Au5okQvAnrxLsdsawP198SX2ctQZEXECytJ5QBE68vNtRdh8XaWhr",
  "key15": "66zD4mqsDRGSW3Lyu29ytcfNNi3pjSoy8tWeX7un1BqgZBBTaMoyW18aHPtutz28Xju5Q5oFxgiUmcNZ4183hEaC",
  "key16": "2G4CwhWSULwZrwyeS6XThLLXJJjHpSMLSFmsERxmJV9Y6DXrYSk1uww9JHvRQpKd8iqvDVXqtf9h4uaEUpRcwww4",
  "key17": "2ZiUjHUFsSbs2ShovYUjJkUDsyXKJAHDnckUe9hdHKxu8zafE3LjqJJDmVeXV9CPw65DDYQcyaFRoy1Whteuq1yt",
  "key18": "2EeZzARxzE4mR6E7vThAguPoY8WaBdBV986jNzs3NHbvv9Q6mT2eVeGE9UZWMg59oN9GV62N7vyg5FsdmWNgUvhL",
  "key19": "3acjqm7pxssmCY1dNsXUafxNk4dYL8cUZjDD7iSJfncnnK8a7is56naBVmYLnHVSJXwuLGKkrbAEnvWnXQuQwvUf",
  "key20": "5JEPJphD2RDtNhtyoASizykhqTeUQdDvqQBALDo3FVQzomm9i3S78WUwQXvMCH8E72eyRTrL44mSoMCi9i4cZrtE",
  "key21": "4f9dUYPfW2FuKH6kzz2ZECfatU7UHS4trftJvXJQB2zoHNddickXpfuzPur47aob71G6sgjTkqkYpQFqTHmFZoao",
  "key22": "QUjRkWGVak9k4bCKPTixaZ1rkWWFmDrEHc1Ptm7ixv27YusxVKdpkHURnvRcbTMzigXm6394EpiJmc5WLQ8ke7H",
  "key23": "1c1GCFUuv1g4To1gbpqeeZmkgerZmHC7FYgh1gfc3tuFHFqRrFKFJDHfsds3de71vf8dRvBxKeQ982hzbPquZcs",
  "key24": "3DWXZmwY33x5PdUWTrG53dy4qS7jFHmk58VrX7SXBsq8SZhZv6BetwWYCcmh4ZvmLefHmQef2oMSJn47vi6GR2DQ",
  "key25": "4QM6xtnwDAgBseZLojbTiT9xB6xRSKEvooychmZ2XL2KrXR8mj3xL5ToQ4BjcWxzjjmGSsgAQajP6daCogDVaEYR",
  "key26": "1RbepGvpFZL5FAZRFozHXzWpM5AZXSihXuLmkSobTFbFSz2SUDzH86Hmg8Hm4arS6g8LJJCXzKWjBFYSSUUg5xH",
  "key27": "2CDNi2RoNaTHxGf2mYYhLmzpLnUFAAytY1zLQsD4tQBiUXTNPoj8gfpiQozejNds7r6ZWr7MGx2F9Q1ueGrjiJCg",
  "key28": "5yMxNWvRY8A4ZtvVMhDTMM9VQPoBszg1sdQ5wKQppFk2hUZU7a66V1TTUeweZgLtbPJWpfbW4UnmDUYMvcDTbKfb",
  "key29": "4aUA1zh9mKx5f43zC4NcGFk29fdbf5x9Ya6XcjP6zVBwGtegSbD8EqakstQhrVJaWDtLt4JY9kBU1JEuokHndLfK",
  "key30": "5jiDvcSCPB9mm9QzibSi7mE9aQKNCzJ6BBDuRant5oCAfC1Kiyvd3kv5FkhES7aiMBkQeQUVcwxHGTbXcb1gNUiv",
  "key31": "4stvy87QRmm3wTYNap7WdhyAyhK23LJoRNjvDF7Bqf5zuwPNpvNEGxK7KQNWBwrd9rsR1Cg4Sgnps9AEyL5ji9XF",
  "key32": "5VexCYYdJJKETuTfJ7cTYe4T9RCfAX8jnQkZ6L6tEZRggKNXnBPkmM7WF7YEvx3k3uRCjcSZxLmvb4FePhB41pKE",
  "key33": "4NJWzWsejZdWxZXTiPrhHZNjFDQsc5hHVxB3zzmDTMNB7f9YMAGMgVsezzGnTUmQ13bd4dh91rZdY1qQid1JCrdo",
  "key34": "4UU4tJjHw1beJ5iUJPkn1FefT71Fx3nX4Fh2U28jv64ueb7gMJ2cqvzQiMiN51ZpFpVz5zrrbZGg9DvfGohBUiDZ",
  "key35": "64iGYp8RG9uHX1KK8SJeLTXnvCw5cwv5yhKp9uC991GzZ6PBnkFSySfxtbLCoWVPJMPzvGVwt4t9HomzWbEWL2q2",
  "key36": "2hbRLgfH9W7WTGUZZV4NAveLmePbV3HLZ9PxXaTjrMeuqseqjxkWtiUyPtg6d2YBdLiSP9tKpbwDiqEBb7U74vRa",
  "key37": "4tnmHXsfbmR3QmgQayBQMPFXyFSWa1omu4efynRkL1CecA684EuxA7Fo7VEGJYE4Cv2S9TUr8WuiPmhE6BAE91oW",
  "key38": "2rFfva1yenidfn2yHn2vV3rMr4rB2VWGDZZTsL7eTcSpTThHKopbwN3LrjVEtmSVCFVpX1eGrUiVajEUW1GBzrvj",
  "key39": "5JWkGexxpDsMG7tyHEyZVvNe6sXKvbe6jvpCyZiRgPsuEDGEBwmAmdwLzHpe77X1roRurt8uVZaBiWCR96GbUjH8",
  "key40": "2jsW7cEeeQ96KEWtwWDxmkwKYzaTmXBLwFXiE9zYkjxYJinxvwgFLpLK7uvsJJwuFcHPBbTXiTQ4b56M4eK8ig9E",
  "key41": "vJPWpMBKd3Z72jzKp3x5oW3x1VkMvpFfnmTvtZt87ktBwQ8c3NV7DDuEw1vYmz3RtVWA4oM1LStwUdxDstqa5qn",
  "key42": "2NBYaJRZvqCMUnuVwHv8UHiBEzwfjun1TMPSey9BzR1eyJMyPeLkeZu1APMMf8EwPEEZ52ds4rzzmUJy6daeVvp6",
  "key43": "5LxuRnG8nF5djBmqTgAN2y4bhaqUnXbddAge1yMpkC31d8A6XxDvKH9tbjBrg3ovhMuc3rLCSVGhVPanKtaBJsDK"
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
