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
    "2bLWoGjp75E4vZfWBzjwwWfsHRy1WGorxoGcUHvHvBBH5d94qxyMJKW4VkPbJWGaRVvFKg6BYaUKA3vJnAULkZ2Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nhdtBzjFKcUia9y2FVWpjK4ZSiiUcZKRUWPsQdhYXhDe1wgvLPvBnREwRrvRtyp67p5MUEYfAbvYU2AR3YYHNuf",
  "key1": "4fJm5ofyJWBeQ7gXQVENTA4q6mQuHyaWcvLVr1x56TKSKLBUD43MHYAp1w51Vytpw4DtdXFFLFCagGELeEBSS4Je",
  "key2": "53M3QHNofDcsszbzd1VwMykmi4vp2gkn8G1Bfi8P1MfHRWfpqvPcZbnYDeW8AeCpMHtxJEGS1DzJyQc7mtavpD1b",
  "key3": "61P9242tCht1djfKbYsBhnr4Khx8sHt3ihJCRjnebX4g6asRq9JbLoVPf3GxUwsKXwoTTJRFnETYFtxAdpc6ybNq",
  "key4": "2Qn7n1miN1sgJ92ibd2bFzu2PWrNgXkXSTsjQckMR6Lsbqra7gD8YNy8d3u7WWPKfgQieJDQWCC3ciuRaetPuWEZ",
  "key5": "5CuceXwx7smpMSooaNEZbpKCcN8KooLXspW19ssj4dbiBYtyUmxXcBj2mr8AYJthYe3x543bSwhJc8ns1S6poch3",
  "key6": "2eyhJEeWQ8ntpQLk3GpVBLoSus9RP7n1AKhJDknmJty3FsYvdqxmaXauaht9k4tLdMcBD79xjXiqkaMBbB7rCi6z",
  "key7": "5tz3QBdjR6UqvQjrZZGieGKHZg5huba4i3UzhAGFv5ZSNLpjA5zEQASbcJFajidYcmMXeEMEhum3xphGRfj297Hu",
  "key8": "mTMJHk28qJFaAfNNcYoNdybMokj7Nz5BxY31BcVkQo4UA6nycuv3R3mHPQLjU6C4md6YLPHJjXjqhXaaJ6XZTnU",
  "key9": "2GojvbyY7iW6n2387BaPFWwtviqsRuNJGMDiPU4FZE11h96gG6kqsbYYayhZbZPnQmVp5vjt7nv5ivkafqUd6BQs",
  "key10": "3pYWTzV7TqKuNqCrFjQMKXiSiNj8TnduuJsobdctQgRb2E8YcdvtWD9sKf1Y3S8hjjLErPz1Te7KpEfNTTWJ6sgW",
  "key11": "4kE4cTqAdrF3WeA7EDuAFygSFGuneppwdKFvkvMxuCmD22XAgiFXhzSEf1Rnun7KWcSG6V3stTiU5jpCWmoYUANp",
  "key12": "43KU2NSrxDt9PnAWsjDg2jNsFG4LAEsJkoWL8b9LrqpxEjhcgZyUsWUMTRh7rGNxTFs7b5sdnnnmQyc9gC1s7hUX",
  "key13": "51q1A1kkdpdaf1GVaS6DJjV2bwiEYe3WqY3C3yZZZ7RBTdN6hGdrVTUV355Bb6TxKiu71uM4xtUZM6ReusPe3ERW",
  "key14": "2ZKuLwVZhRaVe412VtJ6TTDNSUEV4e7KVGRRQDc2nZAxfMhpDBctENz4ZFgh62aiDD5znXaXGJVMbRSvxaPu5KxC",
  "key15": "4HrRMXcWF6hEW56u2gsmiP3s3BCxCbAdfZ4jTQkV7mMoVikZGhLAr2RuUkcpwUREskQJ7BD4PKmfDjtasUHe5RvL",
  "key16": "5PUaC5PhurgLSqwUYEwgrCtQhGpBUd1PVfMu3AzzRgaPy2QCj9kCpwdWNYujLZ6mp63eWKfkUcMeSn6zL8ZL2rKW",
  "key17": "ttk7nzNpBtBEMqaoSqXTgisxwe8F1U5bk8xb2NR7bgH7DFrWYTpDJD25E4MtXVmWugiGhreVmEE2isHTbiJ1WXX",
  "key18": "5UzV2f7Gg8HXchhN7JdKXRJ33DdP2SPVn4LtEBgVi2bBtCsKiEVXbQkfEri56wEAFF7HZxHJ8yUF6xWAWP3aL7E6",
  "key19": "62aD7U4S2RM3WSeicAbeSgCpK4eWp4BLgMN3EA656Ae1PPBVNr8MS5BRiSUMGPQVV6gxM41mrJxmyTyLEgExLuR2",
  "key20": "4SAbbSShx9S9jJaYuBinKTDTv76ji8avPatgKQBENwFXS5tZZLqyGfhc7QxYQJrWkbwiYsciPpbNivgY6HJLyaDX",
  "key21": "4jm5xdru7KdS9ja3DTXhTvUbGRAq332RLbTn3suVztYfHJTBUQ7qRqQGZ4hemcPm1pFRgkx5nEkDRVn4SLtmGQva",
  "key22": "2wDsDnaFnjp9CwdRZ7LaCgQXDTnDVE64vXBKdcmiEsymyHyysnY8MfGBEt9u9CnMRvtmGyYEdyY1MUHpcBYXaprF",
  "key23": "734uRdzsqjnrRvyQKjpq2p2XGmFXWZWcUvqFeXYEdeKuuEinyz8YVjATEDs5JBDLo9c2NhfQ4TYXk2hWgvvBx7M",
  "key24": "encB77nESGqRtNgg5M4fAwiTqtqMtVPL5qKy9QGzf6FKWEvTfsDjTP7tdY5kmicsJymhR1WDtJXcEbjHtReQmzh",
  "key25": "2WeaAQAGDjuTJkB2oTE5cGj4Xqaxx3Pqj8LUWD89gqCQFzyCBor9pihQE1UTXcHe5dZStYSruoQ9339m3irWZCuV",
  "key26": "63ck5MQU2nzUyV7rQvmWYKyLgqdT6GwVcxsyJx36GSFYmREgFUDS6F9ceZDhLiX98S8Rq88GgfWpLTJFJFJwJwi5",
  "key27": "3JHqCzBHSFxZpLBrnxQVQFAVxQAED51om3oMSucHfEYuVzGsm1GJzQfvZMM8PZuP2egFPm8YbMWjQd1eYCM3cExh",
  "key28": "3wfsDyHDepsAcGGxEfr5sdCJiqaFzqx1aka4xs5RSh8rgo6sGZXDpy9UYxHzviKKvCLGtBpByq66NdDz6JZqL5wE"
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
