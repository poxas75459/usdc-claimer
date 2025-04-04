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
    "31zhJppHEg38GyoDS8AeVRUkpCwtWvbLAK8KYSPmwkHvZP5GXPi5a8dNScfNDBvpaPCP9jas5iUKA85GnHdTHyqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVXLmpZNiuCFqhfqfUc6unrjRJyiPSahdnSLhTFdnxKMR8qeEPZ8D9wKRCadBwQaFuEQEyWCj2EaNPNigYUVE5f",
  "key1": "4bRTEujjdXmYHKpjhxJQNUa7sLfESJfYwwPJNtLdzyyg7b3dR5PkDmSc8gvffVG1Ek9qfkcb7N4UUT59yS5Jjy1T",
  "key2": "66vQbsHjfWDgfBfuVsCxZ22t86BW152zhAhgFhWJtqF7bLcSp6VjhKGE2kictXdsLvQxYbsS6WxDXfAQJkwXMZ36",
  "key3": "3HC78MrnGxgbJ4QYmrRPBnVnjii7K5X5G6t7AuzKWzb1D6BHshCgSZhLmQWKhYCKD7E9muivYcHGPfYtQbdNZzZM",
  "key4": "2w5EP3bPKZJ1ztyJytc1aWg2qhNyWH9sR6CB2H367kBzGwLPMq8C78odPo5zPpZ17sguCQNPHYF7CgGK6qbre13V",
  "key5": "22gDyZjFYgmeRXRPyoTSH8G68BGdt5jx98U7wroacfBSPAoFek6wguCt3UYZSxEemzbZruH3BEz3tGzxws5GiUdj",
  "key6": "3xEgRUDaXz6Hg5NrLL5Jh19BtEyKyv32Hdjw1HaNTSnLvba1dsuqFZX8eszsM37bCxbvpodVgFMghLHhKiNSyck3",
  "key7": "5Z3tUcDLDMtU4rgcUYzYR3NrgCaUB3MwoD9u6ohVWNUvcfRudX6phF7y8zPgHLbriCruWa4ycUqoDdxcDXEjhWYH",
  "key8": "3dbxDonwUKYXrgNiCjc8uEmNGFQUf1Z3cDqcZs7NRvgFaHUGjcNhKELcsnDLUCfSSYoTkV6TLmNhb82hbPV6nabJ",
  "key9": "35BEtwtqBQ5BpqeRsRh2wmAixUPDESSrZMToHgoryUjdHDsjJymm4EjzH2u2DU2hAjPiFDQA5qqowe9sEinzd6Sx",
  "key10": "4VaBoKe4r7bbzFswogDDzbGDoKT168iAtwaPsKcZj8m7LqGMPeBeFrZsGwmuxaV5jzL3xWQqQT8J4D5Syfhywgx3",
  "key11": "9U1Fc9zwTidnLYKRbESGRPcpTnC3ZfKqhi4vmSCp4F9AgNc3tBs5KhQGAaBS4nuR16VLrFQJMRvgaovzDvqzLti",
  "key12": "4uDFJUW15G4xwKViwZW9CNofr4ZhijgtntdXpsQSMvHJjcpt4B2WtZsQnmEKvGjtdiye328g4DqH9RFEW9Cx1vLW",
  "key13": "2CFYsWAg36Ef3KRdfmNAwfv2Sgr5NJSLj3fYQ8fm5wRTZMPuanWNYRyLJu4hGXTLFK5nvUn6LqerFWYiNcZKALw7",
  "key14": "sQKCaGmCkqok6racHVn6oKpmMDD8vNBkg2hFLDkhHemHd1XvGKWg3GRXtoLUpDVZiBCFemCsQYxe1xQuCBHowBE",
  "key15": "5KYzroE9Hh1dLX8WSb9PYRF2pzwoDFrmgKVKXseiy6UTvGum6gjDffqttDoe8okJxJJUcQfz5XCaujtCYCQWAu5r",
  "key16": "5HbvasGoLRktXGJxXDbbYnNmj4ChaSx3MbPgYcU3B4Turh96FzC6PZw6Xowv77n5DbE8RJgYBK3wNEntr59XzH2U",
  "key17": "64xXHseUfedPjqYg3tPW1PgZt1PrqCxi6FXWvUDx4WeAnWAdvqKrJxW3ibhsfJ7bSqT28r61xuHndstBC1Lo7xw6",
  "key18": "2NAhWGuSAreV4k6WnneiFCR7vie2gw2JQ76VKD2skTrdHvN2k7GcipSm6pr33mfT69G8cbRcr6XnPswy66HvnFng",
  "key19": "eR4A3c8hwE5Ukv3qrCbGDZEZTm65jX6vC15AZ6T28S1Wgx76wEUrPzhbZ8uHXnuUtXGgHb7FBE7X5KUKhqLJDeW",
  "key20": "5cu45JteT8Esbi4BSbrEjUXu9F4vDJsQMcZVnJoJnevVb9KeL4crWGmkcY4uG7vHxo9m4Z7NEjZEcx798mAZQZKY",
  "key21": "56zjMrR72qbcTzfPzDj77xBQS4gE2RgyQEBticFtKT8iAe6qqYjez8Dha3aQSE6rGHWwLcuxotxnGys1Txf4yAHo",
  "key22": "BD68J9odHm6jP4XxydnantxCNcLnrfDFKFSjw67UfCYW7bhadA3o7zHw8mMaMm6aEjnP8zMZTu8zLs9m5bRdb3R",
  "key23": "2UVH9KKXyMJ6GNBPyviWx831wrmGmytdcmejj9papt2LJXtudrtR6Thdohs6B8BmNz24pYtNaMmRXDyaKt8zZLEy",
  "key24": "6iHRPizo6R5Hmx8566NcVGLrxiv5DB7G5LzikUYycATZQHUpCEnaZ5tP9VLyu9cu6digxkNe97KBKjLhWSFaWZQ",
  "key25": "41pYf3Wei2UqnqDfDSEsheMinngKyM4DJb4njhXYNNNVQ7cHavmXgcuE5JhkoGsU2LBMDY4pRcdjba42FCsWhrFP",
  "key26": "2eMH6BsL2oH4c83FDuiD2u7ZEV3gpdGfgJgzAjPkjvxtKescTSFTTaHTPyn1wmhK5uFMnbN8A7c88grePuLBY8Tg",
  "key27": "d6vhLtUhHsCkFMxBD3rqEbTG8S5dKTxatZLJDqzU8MAiqNzS29SWaJLCGtTLs1x8EgCwcHJwtXiaXrj4urvqh2c",
  "key28": "524URzaZeekoEzMy6pyRgyabKiEwi3q4JqniJPEtvUd4MymUhkmRtWRF2S4GtEJbjUh9LyKpy9frmyvyMdhUR9QU",
  "key29": "3kjinjcp8ybmw6kRAjuAj4xR7CdbAokqjqd9nXAGohYYQJ1bA1ht4anViNBSxNNhWYt2vyaXrfrrjULfpL4FFcCj",
  "key30": "66FvSESPQ1yd438PxjVQhMn7qXTk9UY1d8H6qu9TKbzoPVCbybmjPgm1XD4uwiTsJ4st4khjeAXYGCtLcuKrqPVf",
  "key31": "5e3ZwvLSe76nqpHuA7TMV3qUK3a1CuDuPuQxHM9ssor4JoByoyptPLgfvogmSH2fgAUCcrNzgwp94ND77NrRBDfj",
  "key32": "5uMzEqJyJ8Ai6x6Qj54sy3CtnSimtJ87LpJGKLHc94FZMzFUB9MLTyRTrzPnaP1tTpw93YUWLPv7GPboHm5s4yaL",
  "key33": "2AAXzXbExuHwfRgDrPuN9aG95ceciiVSt5g4vCLcKLDW8PNANpR1LPo7RNpPKtRWc6QFdNJvPrM5rn2cLKW6VRUG",
  "key34": "5cboL1ZM4sDEvQbe1oeDgk3Q7QdgRVUiBJnjtHmVv8KpfeGgeQ5Ds3eX8YRGFSaMp19bNe2TcTAisAEFuWXtY17y",
  "key35": "5GcP11mpfzouBrbzh29p7dxZuaEtQRFnPBpCKQjMu8fjfyP2p7To4r5YyjjQxn2mpKeGQuve4Nrk7YgtfeyMzst6",
  "key36": "4gVLXVdotdb7GcrvEsRVcEpP86GDc9jVe5WTBsB9wmsoJWsG6QAHCs8U15SLbaRGFnjp7TtmTh8LeQDSbnE9qNQS",
  "key37": "FKGorQHx2KRHCoJcAcMKbNbfesa41v7B7sWuf5UJZxzSx4AUNtSTAuh5Mb6i7EwJjL47NU3JBAegoNgeHvgXxkA",
  "key38": "33QsZfX1aBkfEoHBVW5TE3AmbMeaai7Y4GRDWy3b2ojW2CRGD6xpYmRLPrBtgBPGrvJtUST7tfEQZUpFeTTNcUsM",
  "key39": "2KFt8B4BMe5WDpNKWZp94G39BQPgZboh3Dim8vUK7RVXMsBdsaTQeMht5eFGjQKP8zeVWtKfsk4pAGJDpYr3jRrB",
  "key40": "25NgXvLfcjVRDsi2XtkCfGP1PPsZ6C9w5D8cjpSZNbC4ZH3Ayo9drwsmZaYnKgJ9TQ23s4EHt3VAxLedmRTS4ZwU",
  "key41": "P5df4MWUxnZSM3L7Yd6YKYyVzyjbHZ3VExjM1KKGDKVZbb64jZnv17aCwHjeKym36GDiMwrLu6vj9gZncrfAMqA",
  "key42": "Ra1ZJhBdf4wmLDbyjVvUY6mjKng9VAjRnqZCfhLiivCwKiiitdi8FNFRzT7Y3YxC34poVXkcxb5Jz9iWF4uRu5H",
  "key43": "J94HGKfZcjFTk5URb6NzpRqVt51d3jR1UQ8GPY4TYGGQ5Um4RhWRNa1AGifDpZdgznrkk5oNjQcGuxxt6U3MKHs",
  "key44": "4hTfNzZJtvHfnBmQ2zTA9cQXuw2evoXUVVoLQ274TX5o4Cau19F6WFxkBDiPhKV45GwMNHjiWmuirgBqRrFpGqMU"
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
