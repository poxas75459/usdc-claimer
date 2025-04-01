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
    "59QGzoxVZci99krXApzFuVebAaWyPXg31tW4xNqvim8gSurq8HohgzDjxzWKwaKrPy5uVNpYfhPS8BXaNeq4RkTG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63uJkW8iFGRP8uodmYDxnnXpJs4Gz3B8yT1dT3JLkZjKLyYwukRUeP5NsrTJvAGYYgiHgunV1NvTk645hQ6RKgHu",
  "key1": "3SHdKrkC9kRuQSijFDoxcg4Zy1JcaSGXVBFaFJVfvq2G1ww4Fm8RAckQ1csUiwHvytfMxjWUiPrLtntKPyWpcEJi",
  "key2": "3zpAViJWoNVZfc9c3E6GrGFatpmo5AegjtASHowKmrRfqcgmqQqdQRzwHb7dSmZDFDetXrBgSp3ksKPd4xprNQUs",
  "key3": "37FpKRnnyE9rnqDtPNBpg5wbrtGsnorcRanqtA15pgDYMzNQEh3AaaJ6womdyGbQCNoh9kg8TyApVXg2Lx7YKPv2",
  "key4": "3y4poJKoyCckVWHQyrFrP6T9FvySofiSTMUJSbMRd6STL6LSLgqzbmtv8kd7zAbHrmE5YpLnym8QWmwSjFbbMkZ4",
  "key5": "5gXNjm5d5h7HLM9T3GVeeQd9X9NHYUzVLL2oD1fdUBVGy38eXDgCFuHXvkmjzEcCKbwT6xXQNQtBuf5b7tEAydnq",
  "key6": "3RY4Mr837WVRGSY5iikeYQZavstSqvHkbxcKTBHgTyyFqav9eijhSAxdsb53GutaYAYJAtrLb1Ebs1jEGRma13ct",
  "key7": "67gWvDBrPvs7USAX8cHzj8hq25H4eFQdGte4NTJoxh2ARjtWsVvQTv1dNjJRLq9bZWWAvzRBRWd9bEz8a2ZaxeaX",
  "key8": "5u5tuaS1t1XcfhWvZcJB5vyjm531Pvjjhnq1ZNmSWuosRcHAbehvPpH1XnBnZPa6S6769w6rTFGnoMyiCqD9ptES",
  "key9": "kHTVNRegD4N5V5vDj3Lm4Xi7AmGPgeNzuZAeQkh3GKi1e4Pemk6dQGK3MHcyhDeN56kX6T1fKobjXEJ5Q41q9ya",
  "key10": "2VHWskb2MzndWQRNz9rpEDnEQwnDkdXENtxw74dt96Z5skqj8EGQ8jfMHAHMJ8KJiDxH1ji22jgXjYSoCuZHuVmZ",
  "key11": "596XfzZ6inrQDqN7mnDLqCNZLhfZyEJkxUqSkubzBHQy2FvGGyM8H4gtCGYozwzaq54RRxSwnUaN3eYRTfsH2a8e",
  "key12": "YxKGRGH9xP4EevGmmzMxppnFsxUYPq2R2V3fLCmEUCEsnKZgD3DK3JsER6idF4cGyydxRNxNrww2ZUDbj4NNsS5",
  "key13": "3mkGB1zVQtuurun7RJExwiyaCL8Dg2MZ82gKaWhRVfabwxVK5t44MALFjMPv49TqqLEYi8J4cZ46s6xRviGuDWPj",
  "key14": "2fsd1HaGsK2bVrnKwzVCZnBo91eCoeNVrC6e5h5CHemzTLZVZ2DpRAf4TNfkaskUqBkKSWd2w1oCAE8pZHAGupfu",
  "key15": "dQUmT8YcNEg1CxHKS57uG2RGsuwJ9yHbT76288tx2vMZRXr8UK7hexVXeRWqY9uGzexCDh3G5xeFkqnJ2oBsa9F",
  "key16": "2Mc9dH2WRjdsnYP6aTX5KCiGBGdGDGzAcsoR3pQ5tJJYUzbHFnEWSR61WQxhVvXUeb9i2nP5VRCKR8DpUbavNhjR",
  "key17": "25x7ita3UBJcfsg6EL4JQm9b3z1xcywkUXLVogpXRr4MixTsGziUTKyRmGXmgw3BFYvPr3VzPzJPXaZd6WUyqic2",
  "key18": "4hZPKL3952H4hX2fh2ejYLi7cjk2nMCoNgGbxojnxozQE76EMU9p3sN1MAUYuxGXAiHrgWT1MDVQ7whLkHjDZAhh",
  "key19": "4XKf9RYqxByNpvpkD6fhXZQ2XHP76Y12VrWNaijDREYUt4gZtgnj2osuCqYkY6MHDRB7ksbHacRhgzPzcFuSFAfx",
  "key20": "2BKTLzHtqx56qktBniLdZavn9RwxtdTQyKwVgZHmmZQtYJX32uN6xQmJGhBj5HATKQccjTbbgAkGuPaLDmTCfoyU",
  "key21": "5dQiSymuypNHuZdLe3MPTjb82bMf3p2wKP4bMV86kSwhy7uSJGgQ2A5Y3qKz5hhnQDc5LaGcz9e5gERwNnzTEEpd",
  "key22": "23qYKgHFAx5BL98DT4PqQUFQPvvJjWhqBFdy3vwTmeAKUE6UcGCg8wESKLSMMMAqyrKzedRDhnaNdDtf232R5jk2",
  "key23": "ta9X6WmivjuhPcBZw9Ju3NYz5C5mUuaVwwXQrEJxQ4ZSQY22N4wdSFBPCiLxBzCKsFtJ3TDLN7CbUjdWiDm1HgP",
  "key24": "5NxcUiPH9rkkqe6hqVkGrJpSa3yWgN9dsQdc55HGxF4CP3Spa8s6bFop5NuR7jknp2bLLqRo4ukN8FzMcFAMW83T",
  "key25": "T1RSgifDfkb1fexBFekpbjkScvypjtbfbHq5BtaCQRQaSUYdcs3dcBXrTvsZxn8aquJKNk6BMbDLU37zh11se6R",
  "key26": "2a2DPFMwNAftaoHd5VpTPNntKfAUrWtBbMxdjPuzubxGwLp5cG3s6sZcN6sEg1mV8Eun1ZqzxmDseQaCyK6sRJPD",
  "key27": "4DrcRLNoEQ9WFgB2UnkANJwiNgQSfPU2xNNGjXYy8Ztkr7yN7ewJBCFNT12XZcYzeEsk3Rf7F3HTmWQwwT2VnGbb",
  "key28": "3HAuern5tBUReFTfkXNfNPYN3wCvrMTiZYRaB97HFm6oaRbgF1TYmLczJebQhtkLnMDFDrkDYbDpxp33xhFd2BxS",
  "key29": "5ZJ4k4S46fSFoeLgY23HPiEeacEkt42itzWXEvgPaie62Z2V9iU3duxctDmBjmHDvwMJ9Gy7zqigUweSRfnpztJq",
  "key30": "3dF3FFxNMfrx35TBZNsyZUhuzoFEU3LaEL7ixVpbJzqRjWttzn8icuQ1SN5zNgxwwdVJFxGuNJpGvbGGTBjPRh35",
  "key31": "42pPF6Nc5hZKw7FJBaCHMH7N2xs2SUV48D1bNowhhzZd5E4cc1UbNt6ZGYUW99wwFsRi4TG2frpt4URh8Vt494Vv"
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
