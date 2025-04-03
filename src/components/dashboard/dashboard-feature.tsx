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
    "cfbyNvtqYupwk2LKGFjzryQLk4nMnwrScMnJeRHBHSY7zqwakbHra1qhCG83ujQGWDdkJs46VzbRgo8m7HncfJD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "345Q8RnaFNgp6icWvXZt7vN8hq5BxJukHKzdqeFw8bML1yuLVCojx4YfKaZ7BrUMNPQ3qQDSEixUT6LxpAj3mShU",
  "key1": "56TezjHyM2PztEzihyTvChS65dEz6ceAcBQkxNafpBPUFes1H2DpWFnKkFkJbwJPmVoDR7UAyvdiNZbugMLLcYaX",
  "key2": "4oiJ47agtgk6HMqCyetfgshoEbcGopoqhzSATGLdkSZvQoFt7TRNddygqmDgcLKscR47KfHvxryNDf1d3EyqrH6K",
  "key3": "Mm3NRaA6cMH1V4CComiJ468PQTwpUpXiTeRmzY8kbeFthVzc3qJ7NtbigbDgFe6c3zCgpjnHHP7KZbXxNvFRT58",
  "key4": "26bbnovzXQSwYJex6AwnFYJBHWuPL3UXPGK84AUK1yFh9bfAoGEveWpGkXe6E7vSKgrXDbTeSq6NZsLk6h1ZiSfu",
  "key5": "vBAYV4REeBjChPyCK3h9U85e9MzUrgSUSAnJ66eCjZzKeChsFXtTCyKRcRDytDAnyjwhWXv9FwzdkvCYSwY7duE",
  "key6": "5DCexrwEiXgJPKEuNj1dzXsDYGnouvQri9XdCheosgpp2xK9JFCXeFguyaqjiKsjy9AYWPBqHtSRvHKouydWpxsn",
  "key7": "2afahbdY8ReErCoXwckMFZSDBsGWPUjyqbRbP3bnU4fFH5GVMQJGU6PZURcR9Qzu6qfHNpZRytUMws9bEqjXsdNk",
  "key8": "5xr5pgLGzChEUcUXM8XBtLgQnqjk6RXWQW6r5tnkeUiqtTvBPyTzPUHmqEBhGRruZmQ9vLbBtwSvfw86fBZeTYyv",
  "key9": "3MkVDWcEp1rGMMHGqYHrAJqPPDqTSfZRykyQndecArgF4oqFRDo7DBYs9QzJjhJVmKzbAvaeLDWXhipq3AoM1b7S",
  "key10": "5fV1B8dcRmLV7WZQ5nbBuh8xojG1trsU7RMebEkCAit88tBg2uv4yzToNGQzwjgnzHWLjHaQzmqiLRtcGEfmxzda",
  "key11": "3CjoFN9mLsL7YVLcBGhQYTQ9jJQQvPp9MnnFGBCFkMmxmZQb4bSH9grDFmpVcJ4cyEgUpGsiaaTGkzvvoTXuftiK",
  "key12": "5JkSUdUnmwFHzLDppguxDDUtfQMph1j9CZDtwUgxCM6UjDY2NyT45ktX52yu452YGy6dnkYq9RpVr8CWbjDxLuQy",
  "key13": "4hdkGKqDhK4kon26ehUWPG2ha24ZrYirEgxZHWvttfX9NVsikTPAtVobBitKcTAUnRQhPvkb71JyPqgvdEHDv7ft",
  "key14": "2vhXAzsjaVajkb3n3SU9gmrwLjo6Ea61idREwJRvKkQrdD9Vobxt2SWSmDDJ3fD6gimQaZGhd5UDGmV3MGU4CwZM",
  "key15": "2K87DgQopMdY46oFA4TDzKrnA1Mm8DX8Ct2NiyGvpGLTdv57dS79zMren7bCJWdekCvCrMoErZePwH25morR7L8c",
  "key16": "4XHNk4ZpDt7RP3AfqDwG1g2fXTqityT8KXFknpzadVJXDeLUM1oZ5wXZKHoH4WSpjY7QxroogmF64C8HcBHNDg6J",
  "key17": "3dpsvef8okrCbETF48sFFsBwKU1rb6Tts7YhiWqc5UJ9RbR4xxF4BUQMF4Lzv2CEisxRPFdg9K6Jw3seuoAhasAF",
  "key18": "4dEe5tuh1FUibqwPCpLWgcTLaY5TeSfJLqnLdTGd72Mfzh9jhWX8JknxVE7hqWQcFH3PgMDmjwDHroGUM87FH1c",
  "key19": "ibhgPYyPfdwGaM8MZkpuL2yTKCC9vZ3PUvQrWtECvRtNXLwxoJ714CPCP4SMmnv9FJDHSuW1tk4kHApvLXdkSYu",
  "key20": "5DzxmHJyQ3D9BwKTxkKHz962N5j1G2Yc3oNMfeNJ17tG3Gay6uLL3wHgL8aFK2mLnr5ZBebP7oL4nefrwsnQynLM",
  "key21": "3oaW8kbaxi5WuHN393Wj9Uc4LEWnT9TALbLeY8rUTA2Cy1PiFee1pXwPTy8SRMfN3pGt2DyAS1P76vf3NczACWZC",
  "key22": "5AzqZtTBULKXjP8Dab1ADdZW6oBKmmBz7mV6DkGzk8PsEFYKBV6qYcD95SDgv3ZkVmKst1rAbT17tcQLmTepNVQK",
  "key23": "54xDHxGdVeu1p3frPC9DQDJSCpDmsJ9xSPSw72Tf1oebbxs3Huz5WQ4yC9g5iB1GzgqpjZDdCi1C1FkqgDb4GcTc",
  "key24": "3WQLh9P8g9Px32Zde9pt5S6vGEGEfxoSPnAKppeRcyqvQ5XKivUFdDL7n2eAW7fi52h1PEBEozHRZPD2WSt5QAGj",
  "key25": "5n8AKrF8KDufTFhJZf2KB5LjZkqQNQ1tH8jPY1Fv55CgXSnaWCro368KkY6qwLGa2CKKoVbf3NtDCE8XQgZqRMHj"
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
