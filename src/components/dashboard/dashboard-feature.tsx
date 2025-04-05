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
    "4XF3ZuYRbE7mXfh1sFVHX7moFkFxa6JCJJ93UWrT986mzS9jKFc1MbrPTkywiyKQu9LG6Cm23ntmmZ57GSVxmSVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43j4esaesBUEeUJ355AeHiVFacT3avcBGvYr96YTEAVM69YAqmaLEeLLqBn2BNBh9uTt6oqGAJhWDVovGLTzjSMR",
  "key1": "2LUyRLVZeB4fUP9K7dqT7LiwLn7wwiF8nPhZSjZ8xxkfHQ3JjZYPPVpzB7SkBt46gQ4ZMWpJTud4CVo1HAVkBcrQ",
  "key2": "5B9NfNkbzwKuhCN6oeHS43KKfn9tJmKquQTyLvsyQAVU9mXkB3DSCdRcZ4aVrUFEeRauYkriykz3yTuzkhhNkXtB",
  "key3": "4bGD7t3zvLntRxDe4KtqJtqXAYXHaidUG9nDeULgCGBGWQzrkrfvYmXbjQREenBbMmWG9R3WS8i73SnSvoHaJa6j",
  "key4": "mu4KRLvpsvrtjnFjpKyiDZFZNQWAqvpUbgrwRcgLeU7zWKCWu7CkMupnpvT6xjKJPFbUcNUrWEutjwiHMqhsMG7",
  "key5": "6xjdGLZT2B7rCxBHbo5op7Rij7a6gPpgvNTSoGn1SB5qxPpvrwfSvuACR8PTW9RwaghftohWShpPuPfhgAXw8mi",
  "key6": "33KA6PnPTLiVYfB2LiKyDnugCg12tuH6hxsFiNXJi56faiv8oaZomwdjmshAcv51tiVrF34HFVjWBBHrMtXnAWo",
  "key7": "V6zpC3qh9Jq8kZsuXc1qQ3hH5u7aWveQVKVPxu74DsYEMS8ABy6mRq7ufW2mDGCz6jht7AY99iTNsh4Rze9w11q",
  "key8": "4bkSrUunR5U7E2xP7HjTAHDb1WpBn6yMwQUEbnb21SVwrCijMDXTN2x35X1qDzYy1MzykMftqfNDqPiGBwQzw1N",
  "key9": "5vxENHiu5vt8NZowdRuGdib5DVdidPUG2dur9D27qfsQb5D1q5GyWdzj4ahamtNEQnCCDxFU5HjeetGxHmHQQPpt",
  "key10": "66QGEBFeqqVoTab66YnUKB5kaPaoLE1StwPBnsZfx1PBjYakoLJiDmM8dkCasPw8W2BARdvu87q4KKiGrX9p5qmd",
  "key11": "3k39qYb84tXR84d1VqKwJkSPSwaekCYPUTH8wz1AT84w3aQSFaNhV8aga8GEHvsBD6KtyBySyQJurewgLJRJU9Sr",
  "key12": "66XCiLLiaYxSMwoTeDxB63V69ucxvM927JTxXhZKkseLHEEJAoddpAZVqVW4Qm18r1W8cxQbb1xZKYLntQSqs2V8",
  "key13": "v4r9bPSVqn6d9bTmQ3yU4i5x1zvqLMtQc2o4tDmuA6aB8GGEGqhAJJA2WbDqL2CqLmdYn5MkRjeQrHa3TvC99CC",
  "key14": "2YqAq8AnFWKZwbbWLakRTkw2ciK64rU9Dq5ZQWzfAPHvWAv5c1xaGUHPbow34Yb1L3fdXzL6HVtM2pVaVwPoSsun",
  "key15": "5epnXoVqt8DCGB98JnAcQmQFfwqpyQDwNcsscjhe3W3eJy3VaWGHuL7GEn8VzKLnshq7WFWLoohAguDL3k8ecZ7a",
  "key16": "2vqPbYbGMzGWSenHNAToWJ1zBgFoabSscE5epekXkjq2WmgVexrU6nwtCedVsfsefUkukBKAiY5d9fA6BPAc98fp",
  "key17": "GZpqaPPtABdzGycE4BLReoo8tujiGQbp9feXTP3N5Ak4fo3oZoh26aTrzT1KD18mcSwixdUFPjXjkx2t4t335f7",
  "key18": "5ZsibWZjgN2mAyDdyvgDUF6YHCGqbCRjft6Z3y6Yu3drf1rx4Nj8PZhAgoKFb3vfuHWmcR9thA6Kdm2RmUpCRnUb",
  "key19": "3avR6DTscwjGTaM7Pnx9dKdPhcT7t2BUfymUz4WNxHiAzGd2dWDttW1kU5eVTw8zUePQznDYN5rv51CXdLUwNTWB",
  "key20": "3waDMaaNEYXLrjvwCrYubwYsqcHEeXhbBgVQs3zZvnMFT2CLRqZ45AHgW4qrPiEKWCcxmoeJtYAmpcuo841yQBPz",
  "key21": "8VwTPoBedLf5mq4iuYEUk9tMrDvgEZahGFxNruoUL6Dy1DGCCsruYwaQ6B3stubHFenmGicpB2FerHEZmJJ8CkP",
  "key22": "3WzBqTfjhv3XvXJocDUgv64mzbec1EshjKDJmMdKk6y1KiVtTwixaRbVee83rGdRjB2C7FJxijcAEX1Vewt1DU91",
  "key23": "3p272SBtTHhSkD1kr2ixhj55s3JoQiy4TNz6aHtZWJHzpigxfZsKcaKS7LjRQ4Xovaou345mYcThHEPCE7FvQeFu",
  "key24": "2dXc2siNQ72yq2w4PKCN2du3hCfx4mFo5jqjdVH4sXe9XyN9e2VSapCUQw5ZyiftCsk1KDwxesYoKCo3Z4UTZfrD",
  "key25": "49hVs8eyURNTNVcdHSa86F84zVCxGAav9DHvrbtC536MY9VpaR4rQZ7N3cKKpCbEVbyFLvqznKcfs6vmyFGuxnoH"
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
