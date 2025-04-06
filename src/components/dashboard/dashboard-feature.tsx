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
    "5kgAa7mYKTmyJgU7DCmWs7s2ggFaKMRxcsKg3n5ntt4K7yzWc2dwk6ryq64qQxYu6KtRV9RHEtdCP1Z3p8HquHXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XvppLNEqnhPCHJdfNi92tozQQuxwNaVEaHA2aqgvWAm8VFM9wLT97F86ExQS39CD2sgKF8Z6YTV54RJwb6KwRtk",
  "key1": "3aHmP1bbzWHr79vNr8PQucEPSRbLDj6TrKTwXVYVbwQoQxo6Ljyu12TdD1Lsn4eA8ZEsc1pKH2JcV9UDGbetQkRo",
  "key2": "YwpBzvcAVZEuoct1qP8C1DEyJK5mPYnBSLMNsX5V2g6cb6rkMDhLmhTAN3RgpvZF7NYh6qRFzGW74zZp6MMAB56",
  "key3": "2GLVVB38wzSFJsS2NzoEuM8uh4B2rpyEmMfBsFUpqKdT916AGcmeom82JUcTVswvHuL9Fu5ZrXzvGSF94VDx5xpT",
  "key4": "5LhQ2JR2gftiBKhHrbzKLS464DWNSeLmuwyTn2MZU7rpor418GPoJut8Q4B6wmkW5gpsgT3WyKreWA17kgeqaCA3",
  "key5": "4S7ZWLxVYK4jGpE56aTJ1kwZYgEzHTXQFSZszW3ZagBoL2BUxxJN8NExPn6uQbWNiYv3JXJ1u52VQjoLY1zBq3UY",
  "key6": "2Zr9DbtQyrw89UBE34UmgRMVgTZ3SbpjZmsESyP13hyF6rvi4kjqNX9NidxcW1UMFsbVyyzjSfJ5wwyz3jxsSSXM",
  "key7": "56P4v43x4FsbKn6uBHZyM8kGZAMLewZGsNuVyspyeh2vhzEWqqbzvn9QXCqh3eYNrPDLLyTfpo8NhXKYa2P7XNyQ",
  "key8": "4tVf2mgtip6DaH17yWYMgAnn8WyDzoXtJuhjgvwHnNk84zeQCxAFmdFkKBRNQarpBZTonfGHC2K5KVpjhs9FDXVJ",
  "key9": "4HypLLADciweeofouS5rSm7S3hzHVnH2ztkkxN5qACtMsPimWsdCRhwCnu62kwiV7MP8sEJ9ZrHQjK4hHRrMU29m",
  "key10": "3kvcsJ2VuqLJB9pAXw6Q4i9BCxntX5EuztN4tk53JPMprPKdj1Y4DftUS9oJG6derJNjt5ZgdbKhcp5tUTJxDPwA",
  "key11": "5pMPU8tREFzV1UT9tRmUMECizNmyqFzf8kZfcDho3pguK9nYUbnS5YdaCVKie2oPubV9YLXGJYNBtfoVQb228SJ7",
  "key12": "3g5gSoWAiaUrYxb3WwrEypgpy99tX1kzy7CNpCYQfEZvRhm8rUmCj8qCQ1A3qYTr6E5b5Hhgr1mAudAzkB29QBua",
  "key13": "bTQLZH8VjaKM9bTCxG2SNiZyacoXvFNh9KSehVt7Msk6oF4UwjthFVVaGXybizqyzhjhPR7wWERMYQZqJRhmyby",
  "key14": "33L3cJTrQT3e9RESxzsfA7XcovFi8UZUwgEXXJpwUdrbUNFt4WN4ACjc17dESHQVZEHM4RUQu4PAwL8snn2eR6tn",
  "key15": "2S2RuhMCqAfNwnWEAQWiXb1JyN4Wn9Yw6ojxDvRBfh27ghxVgMkSkJn3LGeF8ysKMTz6mUqFVP41iTidNiKKwvCw",
  "key16": "HAAFfhmqi311rCAN6UPjYj7TNzBAKeVzp6pix4KBuv9x5ABEQUcGp4sGyBH3SuR1kSArMM79R1UsUS7FuJ4JVhW",
  "key17": "62pias2E8HzPmR8EV3SdFGZ8rA87zgoFbRT7Dx5f1eNuS2Zv1CzG3D3YwGkfEoZYodDYeuYqkETgkY5PE9KgypzS",
  "key18": "5ZaGqKJudRx6DbkyCc7rFwWpDmQeZbkH9raKH6K16M2HbTLWKAaJoFdYc7QXV8yTvb9knTsohUNo3aMy5wmEhNwp",
  "key19": "1n4osKu2WdJ7WmZvBFKU8mjVPToECRkckjbzzGqYm3MmhSA7afzjrmwCwTVVFWWZ6US2tiMCHM643CZ8ZtPBkLP",
  "key20": "5XtTnEovxG5TjmJhq2trVTPwdzagFdAZxvjUV8dA8G2ghMzaX8VTzivWB58T1B9Rx1EMsVZdiGHXoyJSXXK5rwjU",
  "key21": "5DXfWUHZiYQB6MGdCn72JWH9eYZp22AxvmSEyargt7qHBLWqqkVmpHH1SKhnGYz6WBsx75AHCMKkL9QR2smWj55F",
  "key22": "3jMj1r6qiuMWnQ9LEF3RJB5BivKPt86atdabXwehTSCuJR5qju5vfEfiejpFwzN7kjAczgRHrRPkjky2hWq9Sq28",
  "key23": "3sYwiZiidG7dtJHyDwfe6gTABevDAReDejuMXZgzqd4CkbQij7TeUXJYSbQCnJKVvZRiqxkcMoNyoSj6MZfAUf5z",
  "key24": "hsSiKUveVUH4Z4P3yBb5nEGr9jQKqeXrkHYxVR9gjs2WPecdS9nzGAMCRkVNtk2uDzXN6TCG8sEeNibZAe2EZGF",
  "key25": "4En4WryGwrpzxMkY1Ltaaf4airr6ZCQ8FbVvHAXg7ttYp9nvXxUTpcp5G9KfgcVuHAGDfMze8HbNgc8yqc2UvqFe",
  "key26": "4p6XWiWx36217gdfTiBnyxj55ZgYgTeae8GuKPuTD5sJMb4y4M1VGckdZcwj42c8ANuza6bhFvUFKy7vh2JhuT3J",
  "key27": "2dNUku4hKtyMiuDry3M7Qri9Syk5t9pu6UHAg3N4qDmy4PQCMYpmJN18MKCr4pcwuQmJCkhLjMUHFZUk5ChsxD6z",
  "key28": "2FUpu3mvK9iaAfF4t18Z5CkvCNFyFoQs6fo64GWT7xdSyjezDqjh3gshVuCPjEnWwgY3kUv9Lvnsst2fq3cQjhzz",
  "key29": "2g1ZQd2WpSfhBRh9GyUnDDKXMqMG8QF5W19cRtRvkVZE5Mp9w89U33eMejDzNFgPK8qiVX2vbTXcbx7dz9WHYhhP",
  "key30": "4MELFksTkoHAxGbQ8mH5eT2qSz3ZtbMcP781tndtuyiqsayV5Nvjs7DeizuBh9TxiL1cC9QCUJ3bz1hp7J7G53oR"
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
