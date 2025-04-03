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
    "4t4BBbVkiNUHM8TSLGXT1xYBC71FoM2iQJRhFxUjXbTaXZkz49pGKxzbrMYfHspXWVaLxnBBaSCJtZcDnvcPpRga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EhbHatkeUoLrKnPp7Vgg8bLxipKNtTxtbL8pF5SPeXHbczTabeAkJ3EwRSfginw7JTQ8UNERYabYtqCcMzuahKz",
  "key1": "65UazLUdfrGeZbuJcbXChGcWeByCKZFmGyyubQYukunSMGoUv18udepcDJtKAEGZUP5rDHUHxTooA2nUpwK1q4nM",
  "key2": "4xe4y5riG79YVtSA7V3pLjRoByCK273tY5epwZo337Bu8Tyhd5JCjGhrqob9KYayqRt6SWjvwpxZgy46WYKNGso",
  "key3": "3JyyNC9yQF8eKFXoZ2p74mrmdmYeVxRWWePra1s1vqCzBM1VEtNMKoZV4L54wRqurFohGjDFwnojf8wYVAhgN1AJ",
  "key4": "588zbt8Arqh8BFuqypXgwzuLtpAwWbJfA3uVqxeu7aeK8hveyM7fq3WGrV4XYgxJKLCpkefXiKE56DGE6KosZcrc",
  "key5": "57sxM5H4eb8ps37sVYfrHaDR7GosBz8DMfYJ23cUdqCfLGR1pQDKxJFw2w2qdH6CRDCKsFatHmRWwq74bzp8SHye",
  "key6": "3MXMMiFrotrowJrssr9DejvWrdHpvoE9ssNvA5XuWDowkEESHVYg7kEHCiGjowrK4HaQfYvmR2AKL4oP4Z1ba8ua",
  "key7": "5u4MveSRectD3CmzXm1gJwKkdPTvMA5514B2HZBNSdKNv7KzzGCDdyvfGJ2xwFYP8FfKFs9bMm4fyKRseaGSBxTq",
  "key8": "2xvi5GNsFTfdSTH3vfNfNeqZVY3488QmrR9f8DkRzsMW2qM5rCRZsh273DdWAoq4uZb32ZGCeWNWcu5aE1Pi5Sqj",
  "key9": "aWPfnHuneYdDLrk71h2u4bojdoJfGCV5jhCku5eaiSDminVSnUdeQ14pSAe4opdLjMdvKkbPxuNLZQjhEbbB1RH",
  "key10": "4hb36uZbQcwGVeW42y3e2RLwe5de4NqqhPQ2usAqtHdcPEGZQAqkAyXvyC5oTDenks1EPeurmvRpuwNwUiR4qs4M",
  "key11": "5xEY7BaCjHe6TGEa463wQEizKKp5MEoQGBeCXpYWCebw5aM2uxb1QfuHMM2WBoWhJMwKnxnqWe6axGAGKTk6XXZa",
  "key12": "2cALf3EWPVbWqhXCBh2b2K1Q5UBivcMnsmLQ21warALhVUBbN5eCC1nNjJpCz3NdLURz6grfD3j4knjWAqAdj5za",
  "key13": "5xCAKFcvEZq8L55Qxhy87MMB4T28q8zrxb6L3T2bJmpCwYru1sbQ3aLeMk4oG4AhKZQUKnKa7RHAcCzQqZMUgRr4",
  "key14": "4AW3TMVCj5d7XBDmvarKMkwJwjsTAwvnDs737sjyFBVJJPFTsXQnjSHKBVA8VkBpqZhfSmKQwmRRLVSgLTK6d9ff",
  "key15": "53d8Qb2PLkGXcosTmKhBq1VHF3G2QfvPNLR5NJJV48u9kC9hgt1om8SNpKHiqYfrdwNzLWCB5cLpLP5v45oa6cDm",
  "key16": "4wxCESUSFz8WhMhpVg3KiFwvoauG66fHa8D6Hgj9agznp6vhmwys51D9tCbGA1FgfpZzsbA8jwXDJ78XzXPCpC6a",
  "key17": "56H1tPigcHVWm41LYkr6fwfjkZVtwUaP3aw5cwySvQEQfHc9GqFzsyZ2dz4LaPRVNbbk185ry3MHsn14fkcvZtnN",
  "key18": "67jiRu1br6BtyboKs9hLAcepf3yCrViZyyFpMSamh1EVHavgooXy7Lh7KFsXMDCXtbywFdn6XzHnFoHCKMXXMEcJ",
  "key19": "517j4UfyfNB4SFHTJHDqAtdussTqdRt15rDzVkt4YagCwBbEHGBjV4qvpHwWxWnKyfSw82vYg8PAxaMzPBXoPWBL",
  "key20": "5dhzvgpxjbQ8Xsf8j7xGzuoLe7GCsPDeVrj3LuWL8jL7Zr8VPSPCtPubZ9TmzqxaasKhUpgJj6fbUYj3yTKXD8JC",
  "key21": "4TquXFtodmnW7eKSnjtdYWwyRzdCzBAkTcU99uw3Vq9VP1ufaRm8ATyPJj7pDmgvTWao6oA53GQhrVs7eebRsYSK",
  "key22": "5b66GuJTgD9ys6kViCuGvhdECxmq1kmAMAVnS5VgXdgCvmQNwUUUm4sya8kLCmScEuWi9Fscz8cTWYrXjeSrxRXX",
  "key23": "3iJYR6rDW4SuoJg5KV4CGpz27dP1895eYk74JavAwHfJwue6otoKRJ8WsrxzWCpEJiYgDMwjkrbcJ8SU8M9VTVFw",
  "key24": "hv4Y7dRhbw6wFHUZzSgHdjxZtLJDahUCC335Jqep76WLsJAWYpMX49nz7rFk7qC2nReokLGhqFkPr2USvD69R5s",
  "key25": "JzBd6T9pM19vaMsDs3wq62ttdkKwVgjU3Nevr3fN4nDpWMbiAGNe87kd2cyGrbAoPNgAbi8uQ5jUL9BvGiBCA2c",
  "key26": "5r1GnQ9fRe9aEsD2sczWzQTvBmsnJt7NxNbQJHNdJYkXfNCuWNRgpUxWnizifB8gUdDGkiwF8aMYwFQsoG636yN6",
  "key27": "5fJDap77nTFKwwLSpHnLA98zjbXKkseSzyceGfUhG2tzfF7FWcceCBpoiNzjVc1eaArv5qdpbEfN6yRtYY7sg3jb",
  "key28": "3fYy7DvHrz6brnNEmV7KF6UkDDkLbQTWozJmP5X2W6NPKNz8gUWnJSyw2gpNsP3RNL4Pyawxu2zEACU1jjEX6vMy",
  "key29": "3zcZ4nPyYrtAzpEvuu56XTbLUCcVEMKx31SaLhVTGBVbudJw18QEZ3j1u1DPn8NHKMzNx2xhumshbApwhs7j6Khe",
  "key30": "Y4nc2bxbNyztxBr6T4SLj13jbqFi6afTtKQQvCEv2j8eTEtt3gCaWMQNs8SrHS4fPaBFuah3Q8zLtc8M6ULECpQ",
  "key31": "4LRAr1kt7ZuhKDGVPMv4L9GqDzdrtZqkkzdHicQMabmpKqrYY9Am5bTg17nBS96qD4k36hyJaz9Q4k9TLfzYtaPC",
  "key32": "2AatFFtmWopFoVZkQdbKU6yVM4zjEEZWwvTUahmT6uj7vXGqwMGbVYxxMeK9TZ3yuzoRvpZvnQU2jUS5DHbZNyNw",
  "key33": "2ALsw1Y82AYCfWMpKEU7Rt8rwcwECvZ5hsWHHd6rpHemVDDeCveGn47UTqW6VgQKU29vM8BQwxehppuB7VvYG99c",
  "key34": "39bjWq3sk6BHzdRdfWKkL2rfWpSNkT5CsV9Lb5huPUF8QvMTi4arBuWfLgePj9AcfCWo565KST6oNjbE3Yv58fgi",
  "key35": "UnVMUG9vfBM5kCLJbsRNBPXtVD2ogS134mqXaury8FwLrWN5GpJR1eAfoYXV3fFh7catMWLQmDbsJMz3K7Qn8JA",
  "key36": "3owupGfMYfYukvruHNr8dFTDdQAXCoHkcg6cw9LEJ6Wy6wMbSgSfDkALR9o1btXV8PxPFvQb5RbYHubJhCmefwqP",
  "key37": "4hBiVoWGHXVvtQPv9G67TpWQBtDjh2aSUQv7ER6ftpFjJLXU2miNStWeyxpamJLfxbNdV993wdrjPJ1xHPSK3qrt",
  "key38": "5KE71cYXvDXWk8LscK6shYGqy9CzgeXo8DZpN6ZMzmpbkuiz3BdtBXPmmYrKHawquqacJEt4PKb6FWBrTuEoJYpF",
  "key39": "5PLsjB3gKEADCVV65fhFi9bakJUmnDbBE5a7g1L7bkKpfVu9JsRJJNoRKUrwzYojoJWvbiHLAiknSjX1HmvfWGy8",
  "key40": "5hG4e7uT9GP1EB2UtzRWQXiFVN7CcgkRT14TAXDF6mEjXqBRviHwmJkGqa41uLkLvHdtomqJ279tpLhKWkMDECvL",
  "key41": "3rJdALcgEQVphXqMXEV9ApjoJKuqFewqrddCAy81i5mggPiga8pZNcPJvfDw3wJhBk4JFHTLnUw9Kdeo1d5hFs9r",
  "key42": "2oi97xHFDMjFaRhRDyuvLa26tF3zh9oSpmr79c4npu37RFkJhVsuRPBhXVg6myVZyNC8WXW51NzX4kSJuzMkmRX5",
  "key43": "59NwRyQZ7EQ7Eh7m3tNWxi9g1eNjv8CFuyqUUAv1LcpmBFsfJ93c5qGBcPLsN8N21wABCipnpusyeneJ2HBsEAM1"
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
