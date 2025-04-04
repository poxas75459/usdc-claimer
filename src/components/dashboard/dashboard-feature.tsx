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
    "2ywa2knpAdRHkvJkQVDw3zj5KGh5m9v7f2EiiT1TwWSkNX2KKy7N1663pcAwxmLX4G5Ue4haWHx2i8rk7tRjZzEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24DMXrH1pagzdFrWxsnhMfy6RX2WioZrNuUj7gW1hL6WqyKWA4rCrqzbiRQMDFvSfiBZ7ahd5kNhDDXJ5fSdPAoV",
  "key1": "3Zf3M18XgfVjTwxUWRHnggjg2XVsrqNg5x5apBQrnbAxKRLf4dRWhkFyuF12gjA9hJAhuwWhjHwYztAP1pi24bER",
  "key2": "624fadR8dsEv2VqawYLneVzsNirEsRojZA4Gbdm3eh54HtCKrS7h7kgQwiVp3jtLAGHSNRLCgfPYoGXh4tJ1zJjk",
  "key3": "23DGLss1v6HVt39Hx4skh2xWXc4gBjuThAzdZms2qD7LdLQ5bnTmgnTaxQwpvQ1paWvLERgWNCanUb52wvUCt4aZ",
  "key4": "3AMJ5q2zm5BXeZ2h4yffmz7vCxvgFxzt5X9z2b5VDTgAdhJfJkeUGJk8URf34gjdym4RDMV1Zc3jjAYhJPE13xLu",
  "key5": "628hRPuif8dS5nX2784pYcXTCy2gz5kE9o3hYACgPuuxjR66mRdaFRHi5sUY3DS9y6HvLovnAgnz1FT3iiFR6Kvk",
  "key6": "5DJCWNmrzn3qARoLUzBPEX5qW9WMbUbXJmZGnWtXKg8yD4t5vuPhBzMyrkW75p3ceXs2LbUoN9BvWho7KriSevcm",
  "key7": "2npZTw724rz9J5VAKN1RmLdkKNtSbxxhbeVmfPcHB6WUqodfrgCP2A7etBNLbVDWNQBKeHaakx8AVVuGu6qMGXQw",
  "key8": "4u12sDqLQk5T3SyRtFNsU7G8k3A6FamPdvHDx532XwWkSf2DXamH1YNEpuYFvN7fK5cX4mADcDsFF4SsfbiMKips",
  "key9": "xTsTdyu7tkHknxgJTcrEsz4tzn9HuEpCfDpGGARhLSwBL7em2aAcUyKvQDUG3wdCmj7YDcjqCjxysgbYCYDJJDf",
  "key10": "2dChpb7y8cUZGacUBqMwyq9V3DWujRe45CU3ZSjomZ6XUWQHbksiRpGe9QkovyGrwT3bq78fVGZ38K9rDAW8gUu6",
  "key11": "25UXKdkdPipAjkSekfwPm7ADVDfPeGrCMfBnACBv58DeCx1PbHVFq9JbiaGz7Xi3rdQ3TU7cuztfxfT4tV7siicY",
  "key12": "5CB4yqikRNYnie1iMk2SWSuhLTcpmrHHqLAi1pszUEZZzTv25tNr8zhHukuYA9FuZFd4HzkdJnamYkc3roiFctZ",
  "key13": "5yDVqFutGCJ1PU5fXxpiBadQRzgku7HuY88o8dbkxzb4d42Ft7LFNP6CzpNx8kEM28ZYUbSUM5HbfHw2gGwoQqtN",
  "key14": "3b4HAsh6YzCTfhSTTAr91A3d4vATXXftPJckEvLNV8SSLMMV48MZ8XZgTZpuVZtHFkarr2ASBBrvQ5KCnPQGVvVL",
  "key15": "4U5JmBfcsgQpcCyscF5p7oxnhRfQXjBt58NvDbMzWrFv9q57KuZnDScMNJgHmQmfg6Ayzf98VLyrLyWmrcDTfWEf",
  "key16": "4pb3e1EAg4hnRxHk6x4rNNitdvVsWqJ4Z4jirCTUvbn5kJMYii1Xt6PqpaG7wghHVcg1rpgFBQ9tE3DXy5DVTCUJ",
  "key17": "2r7ZTzddgug5V3cWL8vjbwuw6tjNXyGG5i6nWH23CVCjHJ5vXcMgR3WFK613RS4eSGPyXTt2ksjynaPRd56DdgyR",
  "key18": "3c4KfDjRHZLqjS1k4nKwbjry6NEjSvqbr9xEK1gHRAV4VatuLSC16jJcb6KQtjpi3HKSYVqHvgixabQxkCgeg4Ca",
  "key19": "122cVLqMPHLeGTq2EiTujcHzGNFzqTBQGeTEobupXgm6d7tULfUwQxGDzAzWvyvAU1hGvoZM4hd1NPu5kRJf9GCi",
  "key20": "3HKJ1kTGzvdykfFLRjfx53h3nFVZkjSJ5W3mb5AK66GyUGD9wkFdqZrtUstmaDtH6TBnJz7q18nJYiNdmQFmL4f2",
  "key21": "38bTthDtU22QFHpCRUfqn3piG9CYYX83pp96yE9ADgzdH8m8Aucbfj7hX1Prmg3U4hKFW9kgaTttrGamK2FvADjw",
  "key22": "bDD9mDAi7gvqmWPYzPLLaYqtFWnX82dUMomC5QcdyGxjg592QbFJwRJRs3RJvNj9hpv22QBoMesSoXGhEqbTcLJ",
  "key23": "4wyLcinuFnq3b7T4QUrbbPqXNYKqyeRUQbr7KNp9Mx3Q8U3cYBxkySYv2gn6uhdGzeiA8TTTP11TRbLRXXpboZUu",
  "key24": "5Ko6qfixs8PjFNcPQj463p222FxrAakEjJYBhVyUnD7Bv2oNwJY5X9YeRLqTcJ9xwVkRS4xEEE5EhjAzcsdNFVkv"
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
