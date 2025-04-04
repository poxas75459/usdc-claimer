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
    "5ffZVhfSvAiZ83Sxt6gZVkgwG95TSvE2bMy56CnY3tE2AnJh7br1Zoy6Kkj9UuFzeXCZkwj79pc7ECg8bkhsZgn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CTtAYRCQM4sBajaMmSvMH5J4MasEhovfUSDYHNftV11vvHVYQTTdSkCLMrf9CXuQzneyf28ULPN93t9NdCeWt2r",
  "key1": "2dEpGCSiqx4vhn3FS5Uoo5Y6UtrEHb4XoGaZ478p8ev6FiLuzGGbHNsCRxKfD5VtECH4DLADqcwGbRFooDgZi69F",
  "key2": "QnWQqv6dVmnzxG9hoLfdzAB9BYy4RYmM2S4T6A2RkdS3oJq81TT9Ht5TRW1zsyvdJpGaJxqsTefWjKNiyJki9va",
  "key3": "2JEQSbBEiY3x5BV4Ugt2t6fDGZrG9a86e3ELenGtavFJZtWAMyhNePgA5Xb4JpzvuYnRVX77hqzsDy86czRhMBU",
  "key4": "5hxzfb4AW1uUCn5iLZzQ1LxibJNH8npy5wkTGUvdh3jifE2TNbTuiR4kyWwVb6BeHjNjUtCBENawBGMiFx5P2B99",
  "key5": "54EMz6y6utu7K6wS8HHQZvEiLAdruL9nAzo2nGzxHYV5SMyns5sCAr7SEp8ogBdW6WuYVa8R13FufPZ92vb6thgZ",
  "key6": "3ywLZsTfEuNeVqDdVAtriubr4it5vHTEyPnz488bDe9P68tHEHb8VhVTBJhBKYAhrCpo5uktSMjynUP8k7oKcBw",
  "key7": "4AY9vzKnxACoESMTgJyoFnwef58P88umkyC84ytCWqquR1yhq71uqf2oaKu5J9U4Vx4yVWRSPwaqWKBkTwutVf6h",
  "key8": "42uJMDoHxzuMXf4rMwNs1VA9pBYouAMM4ctrjZX2nRTzsMJg7pUSdrSP43zQVwAwgFXzCCx2aAAQbx5apVczxTiC",
  "key9": "4byM9gSUgT1a8iSq5gsVJWVCVKafNcVZhfusQiPjvUf6fXdbphqmfnwcyqbrHjYGfv8QzX5AnpGpukazQfsxfh5y",
  "key10": "61sEZQvcqRkKyhXgNUZT6TC97ZBm6vkfZGpu7jzYnwxTB9nmCTxo8BZPzNvvZ9P9zQo2VvvXxr9zCJGqBD43PXEw",
  "key11": "4ZnBxEBhGg2sdwVrvg8F8CNe3VgW1jRwzqdykyjYScE1b7NzNso85wYrjDDg4zqqE5EMkPv9qngfeeLqTrby5Lun",
  "key12": "7YiHpaxLZ1RbeSKCzZN3eQy94Eq6XSakn6t9kWxVc2wVLomp6eWLXHEdKWDJkcozUwciTLhn9EwPbHGRZMEf6Fo",
  "key13": "3o1BqB4bLWeq5qLHTnAb81t5HD6Rrpayxar1WS4h3MRMG3y8N3JrSzr3MJPh8mtcFFj6ESystmm6BMCFg2cQLNCc",
  "key14": "5kHpL5xbCq24mffcrMHqbuc4cJRwzgjrJciRXDRAEu9XC3YMnHVDbgfE1HzecYQUqfNFQ3VNzdq9NYqrfqvRyscx",
  "key15": "23t5emAuXxHN5CweMv3Dae9jgvLi2jjxhiJzuH6A2VxXrEsxRNo1DqF3yivPtJMbN9yRHnhxBoS2CqDfLT3U9ped",
  "key16": "599mHV98gHnGchsPxtcA5NswD2zYVZmh8nfYTxjV6GxZjgk5RicJWYGPHFuQw1k3SxASrCS12ymHT6reXM49dgVW",
  "key17": "3jVMPZXqewxg5K437UesEUYZot9Prbcvsmh3PoGFnmGXRaFhnKjwiKi5GRrQuYJcPavTtVown1eYUGBogVSD3qpi",
  "key18": "4hhUgbQc6oJ26TeXogsV1kbQ9FyLzaYfP2mYtJMkZxQXYNGdmDCwDEceVMyNvvariKpyzJg8zFQaTHQMs1mgttnv",
  "key19": "5jpdYkZmjxkXtPshEA7HnHHJCqLihVYGosJBuvzvzyL8j2VwgqpFGrsF9S2YhLJsx3aoPW8iPkMz7CkEr4Kk7is4",
  "key20": "2LKuijAQUiQh6D133Pg21WLRrSDi1NYku3kZ6PGT7E4U4tWqYat6xPHAWc6YoMB9Kzy9PHyPiV66znM3rBe6uH9c",
  "key21": "63U2NqkYJ5bhwVEGPaktNP3NmusPWss6VuXE65LDwbn9Kr9n3zfEyRy65D3CxciDr395qWW4fvo8toxtoFEScAhd",
  "key22": "3XgYEpiGL1984HEuai76ceic9HdN2cVzgifuFTTtkpoX6wWNZCi751REkhfUjSxivRt5ecvRcFHvWxirGjEbPgSk",
  "key23": "2Swxz6p5TWWRJrg6NHVo8EoWMrQDLBoWRLEUbeqEzW6hEkbAuC9FxhnV5GwoNcEU94wdFkJVLxbdjC7sWoVG5o5G",
  "key24": "4cVsEVezCsXx8NhmhZR5adyx1c4FsM7fiVbk3P5HVwsreJt9gk4PwD5FawA9x5kr52davKvgdz5YBCHkVKX6Q2WY",
  "key25": "2GtrM624DoA2eyT9CuTQcWLLhjsRPt2fLTZSpigPfcCtjQgN7EnzfNfGkffaJqSNyFhntGvpsur1oE4pvziT34vY",
  "key26": "3YF6QYphC67yt3xGD9DqnGGNETgvATSJXCEaKDPNDWFgV7D8EoCqFxQERo6ma9L6ZApevm8NTAe82uVJ7gY9He3v",
  "key27": "4V9MjvkV9BzsQewND1cKobqeRFmtBky6EvQdKXJ89d2GVXPscKvAEgfygBoEVmuLSXV3TMRHbMhrp3Gfcg3m6XcB",
  "key28": "2dMbS39fTXayGz51kWjLLU15WL7c7NQyuzEmBJYCAKBW2cYXPnz5pjxFYK48T5E9ce8EQD2VfbDaFj9AzH4pQDHY"
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
