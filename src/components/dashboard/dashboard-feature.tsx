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
    "2LwHcgsUnzzxpvZ5Latd7CY9ZsKkrM7VWtBneFbSsDrp25nDeigfaw1X2EFVhGg3p2Sts1c2PPA7JxbvsqNBW8Jx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cwXt2xjbufnT9N5PewfWCFWDKY96fssz1hKDZmv79yX8qy8knAMogoKyGfr5C7ZN74CAixrVcCfGvddSrgLtrLw",
  "key1": "3ozLUssvVJchohnA5wkvEd5s1ZvXjVbqs8cpBYiYu8i1q6vB78ZJWySDu4U6JToqftyESRzea4qCQFLgby7Mq4Yf",
  "key2": "25GxUgcZhyp4pmJsiyQH2v17dxXkzCNDkJn37kmvU3UApATmiH28MP1gKGuAJFkJ62TMUEwuz44Cfe2eHgpkBvBt",
  "key3": "Es1a9NF47v9SNwm1LvoESNKk1iAwjVj4H7FVp41v9L2madbH4BE3wJfEEWDFhB8KrRFHQCNMLVRnNqPXDxJpAWA",
  "key4": "47H1tYuy7rLzJdSnSHGKZ7ngXgTakC8zMLGwtwQ1DSUaqGbE8v6tsBpRz1sbPpucD8k4qyMcKTrKkeBsVPbTvnzt",
  "key5": "5CMK1ZGPGyiDmHMZxH6Wf6AnPS5AMtGmq7cGG8RC17x4BhJMSfpm7RZGB9Wi9Rn1pmP8PsXybbUX4X8xuXVvyzeX",
  "key6": "CQsvZwUzV3NiERiFVW2pEXDDWdA5Houaj5DNBpaFhAigdyzxKWSmvcPdB1MFfKdFZwJEmvP7U7e5q3z9NWwFBuL",
  "key7": "3W5u8rxdmP76gJixMpGScBtuAFqvDwQPKwPy6J444yE1SVd6HJTEQLf9KvHspsBQbak5sQMSF8Cutz1rmeJcMSx7",
  "key8": "3VxBEW939iyZrVZj5ndyQTYF2aZmWwdD4EQWwcBFZLeDk8BZ9njaDRXSPrhdDSroReKxv3221TriM7n7M3yMqrq4",
  "key9": "2RcUQnwTPY9mufqLRPWhxJoayXns3Dzf6A8XDHyPwpKyeFKcrZRqCHHkfB8VatvSTriVAGewDPyFxLWem1VywDvW",
  "key10": "4o1oTa43capnJv1xyPSnM8ptNELfcpWpNMXH351jNCybpVwuu3Ckrkry9hGJ1JonUMQhNbqaae6ybFboY5C1HV6L",
  "key11": "2aTgDo3zYkzFaCEip2r27FoWTDfqzPMKZ7pxDe1WP8DdD1rjcpkC4Kx1SXYjZZJJvbe3yZm32HEe1DojsgmAZbBh",
  "key12": "5gQMShmU1oaUKXMwEqybNeY6ZiZfRgJvyryycRLZwisAzBEqHRSCvArr15GUYAzGpUJf4E5p8mCCrLALhUCzRtXK",
  "key13": "4sjfRqw64kPKsJsz5sXwcNFtCYSQcGFJ3dnSLmwJ4aFSyTQgsLSjAbXEKx5tsdJ6RL55fcP48Vf1BqrLH81URY8m",
  "key14": "5qcyxaS7hopL1SSXHazfQu1W1mHEF8nZULgWDnZqCKZS7WrYJ2JmyptoNGbVbkxXb1N7F3pDQSMjn8oEV35xfoi6",
  "key15": "4Dcr127ZrrpFcH8UVcRJ2JQaPSoFfaQ36JX17uEWsr8z3rAnJTB7sLtWBLKEm4pSMRZdq2wDZVPp9dFgdiirofXT",
  "key16": "5APb2wJ4gR9HrGBv1W3feb6Gz9k4omWQXkioyWRN8Fv6EHLSdMTrwzeSpHm8hUDJYdx6ryv2soyn5TLGkvpZDwkE",
  "key17": "3aL4eCzzUVk8KKdtiS75DMbA7LjsoTAAQiDdRANUypvpsSx2Nqy4tnUKHYiLaa3ZgqmRiL6NUmHwCUmgsZDabuqN",
  "key18": "5WNgceacJckiJxGS42d3jU7PyrgeNmMB7xojkwsCc14VV3PkqRsyHWTk8vNohKFKy8eh6XGi2tiQcJ9xnCm9bvLr",
  "key19": "4pN9z8mbgPmyU4JBBJXGRUm4g6MHCAaGmcqyeze7AzyfZjoB2ZkAdYunwFV6Ps2ZNkjTkjCx1YDQxvDwiDrhnTqS",
  "key20": "21asQr4fQfBWFUwo81xispy4UNkFye3dBAeEBt9pJbqGJAw66UaJQAcWrh85vfmqE3LvqB1RKEnjq5tqPfube59e",
  "key21": "27wdawVVFznCnDNXnVndC62sx66nwRqhS3dUzgGQgJcqUJmpGeyMxnYpFSwr84sL5X76QqqnXcmdsH7avuZEKxAp",
  "key22": "sTjPREZdyERAMqK2dcAEbNnXNKTdofjc6XJA3WAW8o6BxYf5De2eeotwdkvqQkF32HMit2ajTxF8Qxj1rmRbH2u",
  "key23": "2nkDK8aciCQGmWuRnrZYtJo1hVnrfwTu9kqErgPvPeN9mYt4NpVShQodYAp1xPeAueX5j7HSZWhN9oocWtGrEKpY",
  "key24": "3d9viQTaABU5hao3LGJMuqyBtrouTik4aeHrmjhZ9LwNvSFPqoMbkiZsjT79ntGpvWUDBgP3crXGLNRvF5J8tjWV",
  "key25": "mwKv4S36cqzJiREgi9mwiDyFh2BA3sfGL1g9hfo3oxsQ1mUcYCA4oqBeEfhkmZMQat1xHQUSxGdhhiUnuYj4zh6",
  "key26": "1aqGZWfFjG4Dd75Nyp1tVUGMwWo7pNdSqNtQkR9fBacBpWrYLsNSYCRRpbcXxQv8x8J1h3a4NYZnWWwCu2Ag3X7",
  "key27": "37hVkjqqhfcuW9FQnUYWcUrXsJBvja9HShyiG9VpAHbNUhzjudNKLDkeF8ri7Ceu3VvAp9m9NKUrQ5PULvLr4WeY",
  "key28": "5vHBpzbbgEFZvU3D2vjp2UgBWJywj8XLtN9eZg5577GTBu88zkGx1S6oC53mYWcWLcWobrRBZMYArKJdoeRhTZ5t",
  "key29": "3Q5uYzGZ4Ti4VdWRYraJfdJvEqP8vvteUg9iM1uDSMnbfHrP6zjDkJVHTCA58i3uHLmneaHRZLmRR38mtRWuiSAf",
  "key30": "nR6UNhsPi2EvCBGNkonr2Yv2kuRXRz8oss9rJrcEJXSN3WU52ojVqfFs4A17M6wZoEuQKRoU3y6PqGBk84qKHuX",
  "key31": "FhjYmfeN1URsyG7xjASvehaMsUFYHZNx5vZvXd4ikNRnje8EekxjTBttvDG7A3tzudwGFyZnCZo7hUdkuUW9dWt",
  "key32": "LFFiXmYXvfcAKWGN8q9Nu7bvFyH58Faf2X8EzPzxY3DLHk7GVRW6FD3Bcw6N1sTQFsdJ8YH4CRSyTVGDbapmU1i",
  "key33": "5xBrMcm8qxrefZFrmQZDZc27LJYdNorpCSF9hEqJfEtnvWRhFHJxSrP2qtsvXGFBH96dcn9C8akSwRSwUcWF6Fpi",
  "key34": "3rBu69YY1czKRPDNZbpXpaEtoTbcuFhXLF7gN6ir4S4Y3EPwwfTFEP3398qbZPdczbGuW5rt1nFA3UDYLqrSmUoM",
  "key35": "4kBueU45azUPHnYsBUgR15c4BScnzz8fgPGjAC2fEBRZmKHowppsuiTUFuc3jENL3LBeUtvCFQx729TX4bMQUf9z",
  "key36": "2KWuwD4t7btZSswruyqpQYNyd43REXqSvXEMMfisvwvcpvqRAJZBsm3NayZFGd75mXn57T8uZhdz8f1jFDxYfyvr",
  "key37": "GHTiPCvoTiFyVJ2ZYcfofJckGAZ8La5ggGwqQr51Vytv1SeZbva6984vTMBXqV266LiMzvFLbubwmU5cgt9cCz2",
  "key38": "4wWnuz58a39VHLM5837SRuq8CiYtTcU4DGZvz8Ajp1Xx7CBSPzBdhn8axbUraFz5FALoNYGDp3W9f4Xy3ZKpdgGv"
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
