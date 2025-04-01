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
    "BQ1uoCHZgTWan7NWS4p15na5FjpiYn8G9utTVnuFqdPzc98KYAQnNTH8WRHk3rzg6wBo6FvXJjAJzcvb7vcjfEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PU39xoLNWBM8QosnrLs7RVX7aZxhLnUJbekaFE1ueimyedrJYnRhZmajx5Cw3LHBo64SW2uFGFSX5tsAKTETgm5",
  "key1": "253ygTcjFoQD7eHARHEYXZAH5Nw1mEFC5qitNycvDt92Rg5FW6Z6Eh3o6gYX74w6YPZkeQMTNVQsF4L8a7j4XjN7",
  "key2": "32L1o2dokJiSr3PRJouMaixYmrtNqtQ4JPfHMmqG5jJDVzGzmXDEPKAWtXmyRA4FgtpMKcRpUKpNcpBKhv1Q7X2F",
  "key3": "2a6rq91TyCZRQ9G24QgXqcTLeUxKDk5KPreoQttbBCXpuppVEZLGQJYZrqRTzyfozEpbUo4B2nE9YiRaFoR91RJC",
  "key4": "3wo83E67HBkbFs3SY8es1mpbyo8GqkSxSoA1Gtz1LYTzP1KDitDVhx7MZjMbvqEFhcQvitFRQpCZSvZBqTCmiHSY",
  "key5": "5Pc7H66dWV2CzJNk33wPG4hZsDHLHTqLM9btjNgnsFynbtyCMF7N3LZTtUe35WeNpSEy1KrUBW3hW9iaeVby1Mbm",
  "key6": "2sq6Xi3zGxR4WpBFdGh8UDQ86rm7xJaW2HpuJGRioaHoveNpGH8Ncfm7vqmJn2JKrPfijV8JYMbRAMKvroVMrboH",
  "key7": "3Tsfuc3w6QpHQq2y28WAhrUj73uUq5M1sJVUB8ZZucmtwU7qwak79Fmcnz43RQm78r8jedYwNHZfb9uhT8niQXEJ",
  "key8": "2XcNnxuSZAY4ULhJLp9HvkEYHzBnxPN3LubTVeHNKKwAEnK4ahGH5XrbsVUNPzmA4nVtLN8hMKxop5DU2E2q8Bno",
  "key9": "5DnptdVDqFdQT6wEzuuBiQDqY4mWmNoCQxkVcVv9DFxcsPJXiWf89A4ZwMBtYfhd3Meixpzwhn6A8kEBwU2jcYcu",
  "key10": "36iaXBGj9VjaHPJshkoexYJL7nck5efhPNCQHS5YWEH8S6AeUjMr7qR84yPWdcfQtjLz6Kk42zBqekuS2uPJJkcA",
  "key11": "3U6DB1uFdGeyhRvotacm7UScYN4wnQvcquHqfp74rEcSnrkJvut1DZ2yrvKYw5LxPDRJhmdSGdtdW6q3DTsFtgcK",
  "key12": "32kXR7mw73D7LpYE3MDP55sZQg7Vo3qy1uh8Me9jFDmJXYq3fpQ6wuqcWxsUPukqwdTjPmxFixkze799KCWE3Z7K",
  "key13": "2iopFjUa5QYFdNVHurMy4frNUJ5j6pVNRM3vZCJVZDt6XsyRsJT5Fehrx79kbCixmooEKfpXgxFQyxXp64dwLMJW",
  "key14": "5DHrwCVyRzWutNou5f7BqMhTjxvDH4tBYsVGpmZejK2LrKwXvqeXdCZM616Cyegadn8PZjhMUEbxWbGSTW8ZHfXF",
  "key15": "3j6TjUpF9tj6nd3cByWpDrB3ohEuDd7Ztj1gfoTmNvTXsQpHHinMX5QWTnaE2Y5bkpJKdPQPxUkLxppwS4jZxvaZ",
  "key16": "5hqnApHt7o1RnBp84C5iQzvb3DJVjV1xKtNorKfi9m3PUebDs6oVK7WCFDw9JQMrMpBB5J93JDcHRqHyBiLgDBTL",
  "key17": "H8jtqV3u68Vc6ufMGks5hZ2ravi5JEGYfhw8bCh37T9vJie7KNrA2v6idMS1f2z26JCMzRpxhPEMfiqJ6geBtJQ",
  "key18": "54ihjZmsRvSnNizzeGNbV7EgWwKhHNJy8iUNdGy98iSdfkNsKvp8xhEKgnjYrZ8RmFizVrpGS3KNDEk42DzQMGsC",
  "key19": "2Sd3zsX8EBn3YWVzVB4QsZq1YK88HXXzYy83NeDvpprHNHYpxMdNzqYc5zQz32RWPn387BxAAP5JKhJAr5fTm3bd",
  "key20": "wY1Tu3TERYiJs777XjxV2U4x1W87SmWMRVivyxigpF8HXy3QQQeXjm3izF4atxyRymigRcuBgnG16N6eSQaDAud",
  "key21": "5Zhf1SfTc7aGWz71qfdsJmJVsWTBRVhkVP3WKa4kHxg97hBHYZeUTWsXqoivcEr2eQHRmCaJKNjgSmriobhCHENH",
  "key22": "5fHt5L58ni29smKGLjL8AC3cG1zNv7EEpxqyKuya8c2pefjyYjcD4PwP1ZGa8KHAuCejATV39yRtGSEDfFZLkBkH",
  "key23": "65vzfc2bYpxS4PGQWXQgYzNYyjwq2tSqpvKNsLyGZiH9mW8M7AFAdxpu5daG988CdWwhWiKdHDu4rLcMruNWqfyF",
  "key24": "2iLjSAz9KqCVqWcjyXiNVVuRy7Tf4UhXyXxzWCbxEcsbGoHB5BohuLT3DB7F2kuJtpvhiPhcCmDHDVsUM3nnZDfx",
  "key25": "2kf4LRg1tofZ5XifGNwbnseHQuxWubgrACZsQ4KsCAQqbp911Xh9WB9aNVTo2iuuoEexf243Dmo6kwToxNaZTnAX",
  "key26": "5sc7zDUqfhQvtBkB4VwydEsKcfZ625LSoNq3UTm7vsV2mnNYrYgM4HRVcH6oqdmmyMQghqu2nzv18ZG1dj3Tm6sm",
  "key27": "VUwUY87tDpegbHvaiUP5Lfcp2dVanicPt2MnLLFwMrEKCwSb8R58o4XcCvba5sdBuzrMUigtJ2fZjWjkDXLxQGR",
  "key28": "35KWJjmpMvFfr1yUCZfhdd2t7wS4dmMYhg7LZt3X4haBY6zPkQTGZVqRiqMLKSuvGoHjyV5xepXYGY2BdAAB7Avq",
  "key29": "2VV8FH33Qxx5M4t44dF5EvHe3rjvHR9Dv4EGTYjmDE3HkPvanLEn8UuqEFDYqh9FLEsoMqbeG48ssVpxs2S71fD9",
  "key30": "5FTdEbwkgUbuQcdLXtjKuANNsEkyeP9ec6zKkdpd4FCRkXWhkNFu74ugi2fXEdGGpZPL2vUH3tgiuLiYHAza9FWi",
  "key31": "3cyQybcPFmpGbKC4fEnH5rtLyyHDuofaiyxJemuaLTwg3PMLJBL8jERrLoHrHPd9RTL1LKW7c5kbaVVjNwvWi7f2"
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
