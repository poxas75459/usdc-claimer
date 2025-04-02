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
    "27jN434bkQLD2twS4Ah4XsCvVf5Ez6KMtk5tzjax4dzu1w3i9Mb3zjRWMRRzk7nqi57L1AcK5rtEerCxMmU4pVFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sfzb5BJrPpbkE3qjgqbKBfNXhrNC9ZqCYuoNrLGLYcoVmZiy45iLaZqx6CugjHRv8ayV8QXZ1BjZ5tEmoeh2CE5",
  "key1": "4nPDcKyYCEi5RDcYhc8Wiu4RKvnJQPmE5pAAgMg5v2T8xjhGostguvgxXrNeHvTv7YSfViVXiTLfcUUm1J7mpD7Z",
  "key2": "3P7RzE6jokBLdLMb5BnxBnJJkMP1Q5P4ynQfjetYfSg5hEhy9GnMf7eZLn7JWCXxNeDHuTpe6DhuqDETeY4GFcwy",
  "key3": "2QbC4Atzvh3pcFwMjSf5mN9Cn6DuRUk2JLu2kCzF649z5K1mYTcMdJByQQyCC4fiUM6sRcSHXaYVyekT945WxoV2",
  "key4": "4gS9XZMM561Xr5qLy2ctXqZAdzTv5cV2QWwq7DmWaCzub7CmRHkv6BqcqDtaRUxk7KWJJzKVraje3inkFEhWFKBn",
  "key5": "kr2SZisknK6swEmtoPXSpPFGhpsTNFayHqjWVZTMaK4i356MSx8iskJGuXUqigcMqYT4sWyD8pZACUohtZiTjd6",
  "key6": "4CkGzSx7o6dUB2hgmQSMFbnS7rk1EirRwM8m27GRAuaWeLyeGDwN4brxz1Uo6356A4bcWJtPFGNvb1CyyqarNnpo",
  "key7": "3CojXoQ6dDmktj3kyjPaw5mTaKHheVyLnuDfY31fiXdkcuCGN62YjwY9BqE5dCYZimfzu6MxnGzSkgt1ikzRbwXJ",
  "key8": "5Y5187xfjypRzE9gqQNs1uwvJDwAncmyqzyGMpTG16QhfqWCwHSUaUbGpTjCDQjhEZHrHaQqPop8nVCUiLTHfhLh",
  "key9": "28qXSXnzjR5AukhBs1YvKsp2rTncJpWrFK5dpw4amoNZRHGJby2sY3kXeiqCiQqMKhZdEFBTxjgxjDH3cccgqzmE",
  "key10": "2fei8NSeApHTSrqboHDnjgDaAaE1c1gLruxG1MN4Kjfymy4yM1QotNx9fqeUELyK8TpSfmLxwFNbdejhswnmZefQ",
  "key11": "LrF8KMXAiXbDpWPD48ZX6NgYD7aXpjSfZ9v6wqG4GZsMkS9t8Uag7vKdNJsM5h8dEUvhs7JYvDrNFrmKAcWq4Xo",
  "key12": "3RiPJn5ouhQk5AweVy4DviXSaZSYDx7mjoA2zy1MHJoUhnajpUrFUhxjXz3kTBpT5nFWKSJe3xR2u5SDYr7bvZcr",
  "key13": "2xUk9Gwy3ixTHx93EuxYW7ufvUG64tbXp5348dtP4Q1NQtjggcspATmk5Vy16nFH4bbyyAmW7to6op67eDXbdGgf",
  "key14": "3vQ3ri4XGdqnzvUoHHF95DyaESjVzE5khqRwPiqKhHiBTSRSEXUkJmUgqy8jc3RJS6kHbX2veUsnSwZLcnsxKJj5",
  "key15": "4TjX4QFrsxnpZXVUTqdpzSXtbuepkWDUq97DjbKiT4od7Kxd8J87dCvoAtSFru2dKL8kh4NocveEk4Ebs59hEmUt",
  "key16": "3rGgJs1cp7pS8HrJ1rzjr1ycniTmRRziQzsBfx8hhUf23qwoNhGhiyGquf27TCMZFeRycN3rz1jEGgApf4Q9aWXD",
  "key17": "21EfkMmi6rmw2X64v4TwWzX7Bu6wmLW6d9RprY9ZAQtWUHj6n6WMSYeC31kAHPpLhoMLvdBTEf3QLjsDj9fKfquX",
  "key18": "2ocr15s3fWSMMvvZou1eBQYh3dtzTHhc3SxhiZLerqnn5hnDZ3YDjxUFYtDRFJYuGJ9x2P5RHqnwVVgXVdL5XMcy",
  "key19": "3z5LbZmAfuK1ajZxtL86NNgW8TNuD4RLid2sSpiFguYM1QNjKjE9swSDdpsyUfVejf78488C2Q4tdXSBKvaA95Xj",
  "key20": "3FabvFwwKoYBLE1HGrpsEeMyA2LJW7NUACQvhZ2Bbwgs3GMat8TkmVQ6fu38oQQKt2xvz5ph2HRNJMCP3LjwwVDw",
  "key21": "4pdF8rhuBRWRAEsYiGtQbaeZn2sTRvgP5dKF71xTV4qFnfAagjyBVWHdqeMT687NQ1hZhUU98THRocW84UCqjeJz",
  "key22": "52V2Vf4kDnwsK7p43BRqHMotYwY97AmGbf7UiQxYPaKTo5RudoiZbgriiakgUnAvRZzPJJECvWsNz1YAybEtiWHQ",
  "key23": "5JzY7DyddRGxRHWJ7D9cXqfzdKejMqABToNQr5HRerxWJLwcJHVyHChvWGUo38fNnEF61kDxTKhEry7gVbrtUWY3",
  "key24": "3V7oygrib5NQuohQJijw1MT5eathuKmCX9w5QKUutJ3EaBHRvwuGKqGe4CfSAqg4zauxmrjELBJbF2m5dLdjZ25h",
  "key25": "4qSjqV9WsA4WeNEiDV8iAAh284dhYLCbkXXzV2EtYUpJeJW4dFaUK2sgx4vY8PZKfu5RfAUFMSW6vGK5CD8MTt8J",
  "key26": "2ndjHsMC6w4h9L9M9XUvmwxCAX3mH6SaqovW459SEvzudMAe85S2jzY79RxLGNpaMJ3cNdA5bGQAScafpfZALZm8",
  "key27": "2crpFrPyPi1BjZPELHKcUrvKS1oH4qznEgLUaRG2kns7irMNY72qPm2oMsHoEyEMCJkcLuJeFF3gJazrRpuKawPB",
  "key28": "5KF4eTaYPnhzgstFwDomLhVFPTJrZcsxiaePtZfty4CmmxeWHSQWWdyTWS6MEemsuutbHRUWUm4BFQySUv7ThBe6",
  "key29": "mQTPhsquK5SnAvSfTm86m9iC2CWk6iWLY5PwcHh6DsFYYoJqxDdciwBhqFfCEGWZffE4vHRUmEpa5jiWpfVUhuJ",
  "key30": "4ruiCXmFuUsTXHsSWDm6XkfmUGGHgTPUTsRYDNSLYCjb31mDNaXA7JEswRPXG3b2oGTAHL6ity93z5qgYvvt6Cze",
  "key31": "5AGYhKxGetnjhr4vS5i4q261VT9stYGwgLxAXPhnncZ5svw4T6JnoJTPxJCHphsNywmjqXGYkaEeCrReqkt2XSeY",
  "key32": "2VcjAHDq88tyFnpsHzuszSw6EeDwxagiaX18ibJPmntuRvX8oefQeHx5mHkK97FgeNHwjjRJTmZw8uDVrz7AeZfC",
  "key33": "4FxJW1GrNmoMZbEsC8enauXoAs5NTandA3NtRN5iKTHYpSN6oK2QoLoUYi2w2DyAGinw3fC2G85aQAeF2vhaW82h",
  "key34": "3pJvbmrkJ8YN75HHwQKUEXe7X1rjxdAX7iYJc2qbeLPC8dzrtrs3xSrpV8pxGjvmn9rzoUVM8PqR6azPGyT3Ftnn",
  "key35": "5uZzVzBwD6Tdk1MCbrFsSGvhPtgS7wtSJ4f2TCnf9LpMs82rfc3mBcMikMcz1ikL2nKgNFvDAL3Ym2sm7MpCVrrT",
  "key36": "3v7zLDkR1No2thYBaDeqkuCqeZqCv9XRDs11mCnmtdET5ABZq1n97SPfqJWC3zwh6ZwEHBeeGC1goYmXYxShSvsX",
  "key37": "4rPc8z1ukqeoUx5rWZQxRXFcpgpd9jgaSXdJzYsaRBUmh9XemXUuK7dZgw1DgArvCfAkkr5MZt1rKb8T7QKEeWju",
  "key38": "3qHWJtWQzzH1SamYoGYXQYqqFQqQSJmCfaKqzuHUU7tpSkB5ZSKHdVti5Td28hnz9tXVmqfnFMf6k1aKymhfNYWY",
  "key39": "6VQY6EwwToDXfDN1jtRiNtEvWckqwiwfFGLyTMhs8tMQUdkVyj5t6KD6EyDD2SUamNrBak5CxMrHmSTJa1VNKi1",
  "key40": "47Esvpwyt95giPfLgzHTxfLDmovmknPSV33gcAP9rBXVDKwCfnAYrUKGfRAv4Yw2YP8aqgNsAS86h2BPWS4jhFob",
  "key41": "2QekuN1ca4pjwX7xajzmL3usJETsEN66tf2BdsRxzkKDWQXVNLV7JTmt22jnWo7G9mpHDzTzzGV1XrP41cLStJ31",
  "key42": "5HWkWqmjSRFKVFStaNkWCZxhU12nr5tRCoCvgHRgNbtJVPCsP6e89EyGSXJ8Cm7ygcn7VJdVHhDpc3xwXi8H6395",
  "key43": "64ajZkrm3KQjLg6nBV2khXj3NkAEf8BPvwEwWtwJaPTkVmaD6UoEABDJtkYE1fVYs5NpU3gEhzGChbd3Fz9XxSU4",
  "key44": "46zsvJJ9dptCvJ614D3HE2DNx2vjxN75WK3VMT3AsmENXJeimjvxHSxNzfXgJMRYnzAn1rfA9XPqebmEH9Nc3rDX",
  "key45": "2TbnW4AnSCSKDw1ADdphP6tenexQVEpv2PG9HM4cMEKqRNchuwogpprYFxfHsKQk6j8iLFUbJFXATb1AAPfDN7CJ",
  "key46": "4Hc8yFUnD2eRPD1MytEc2LnPTu74DQ1bNTjG82h7Jt52dswypwbmaRaWq4ZfXGm2sCMT5zvDdfWVM4pjLqirVHK9",
  "key47": "2rNGLeEGCWwPyPydSwKFnnwpZwNaCfJ2pz8sqGAo6SMjLknseCJ8QLcsvDAWJqAAX4eMASpCteqsZ2AwT52Kty7J",
  "key48": "4sheramZ9nRjo3q9r7Qj7RVsFcHFP2iEWTdT1sh7vWwpYNxWptcCX78htmb8A3MAMycLTRhXi5LNRKkJdcGmwx6w",
  "key49": "2ezgM9GDfF8PZDBuLjGjAfWBLvUXSjgoUbwfY5f17DdZVXtHjrCpMkzGk6dCMSKfthvsnB5V8RPhoGvyg6DNvWBf"
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
