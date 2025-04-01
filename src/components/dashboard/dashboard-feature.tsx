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
    "2ZHGUh96rx7CbSDHNMUPWib2m1oQMNbpGeHpeHbAfRF5FNRSEhJJoFHtSgwQkQcdMCtPTGRtnbokDYTHFaSnv8pW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4amfJL9Ns3cJQ83FuT7dGJBTrc51Y8JMubuMRUFHqWs4U7zLddGikDQ3wJXugt2urusZpMWXZg1pJ8kQAyaAZShY",
  "key1": "QnWT4GjA2ESFbWDexYY8Pa6imBMfE4jsXHGzzJexr5FFX757QNhjmLF9o4YfXSLQWjLSEsw2YyYe4KeeZHnBBtL",
  "key2": "3m3Aexp8jqL3VuapBPXDLG4Qscum69duMxkaG7Tkdgsv5dTuxe7e26xMaUxqgeUejS7arawEqm8kKpHX6CTXZVRk",
  "key3": "xnzHTTft5n3mgZCNQv5UkJxVr9XMaoTvnwCmrwvWAGfyoRaGQErDPLVfWHhPamPoAeFQA3yQE6dWabtuYqJUvpq",
  "key4": "5aybTcPBMqnMZQmcTMVhDE4xKFqhxLDz7hbBrKVe2MdsfCmdg88KKshWDckMFqa5kNJxEkr7wfBHHcPNMXUv3CWd",
  "key5": "47dmxzyHi5PUx2966SGbJA5Rp9DTr9LxHG3akGSt1dYRx6qqgHzCJo7cZHr6VmBVGNC8WMtV8GeiXjLSW4M9quJR",
  "key6": "1QWqNqJwQBKDFDLXr4qNjP8DofRYSp8aLtUt8DFuHYiUGkxtEK5U2FbW4mpwZMDYusJTQ6pnYkRkvn6HXdZG56Y",
  "key7": "26CBsqUv4vWpHcwMyjVCxWZyGXhEuE15Um9mxNUdRmtbWjhLEjZSJQ89pDSE5vjEctkXG2RoiGFxh9hBeQxcmjk7",
  "key8": "516ZUHtXNVvtKACEDSoW5SQWsUJZ5EC47ezPv4c2aHuy1eUb3qQEztNJyZB6rT5sgiEysfPBCHVd7pUp9wVR1vqp",
  "key9": "5w25L5NxNsFphCMf14vmyu6Y7FjZez8RXcNDz7ybx8uQWeh5nxpgaCygx6QUJ1vghv5uYv2gWdaQH4DfydY6JiUT",
  "key10": "3cCNWAFzEpVffRqr4X1ZWrWaS5QDuiLgE5GoTJkJ8fK8nYYv5MguaYgRd8TUdF6CGz7oihvk1z4VMtiBFuWaVecv",
  "key11": "2f16Panu8PAy6VFJpDYg1RwbVyEjxdhRZnBRLu5rW82j5zTZeZgdKU7vVrBY2G2k9EqqoMS1VeqF33oWkCCb5qDH",
  "key12": "2qg99HpcAkS3BEDhh7uRCvukxyu438SyL9zHy95dTtUVXazvpQjkYKucwn57yRoBekHSR29dKqckMuGiiik6tv5B",
  "key13": "4WdxQWcZbHnsKHaWeiCeuehMhNwdq81uagMuiLRmx371uNDK8uj4pbvjUqqfFm9LMixxZKgPVDVQg8sAtWqVNX4b",
  "key14": "3dqD3Bgg2imYtc36UPu189iKfKniCSBW4a1w3dL2NzsS2jSzwgTF8fp8tvH1baz17nH83Pq6kfDSx3VKrv87a945",
  "key15": "3awaFnPDAjCNq9NuCrZADkFFHgpRUc4xbciVg2n6TEzGMjgAvUnuXuuEFQFcevUEV1xUEeXTXfnRz4YDtMUukwkc",
  "key16": "44Bz2BBU9MhiCLFvstCZLshPCLJHvQiBYt6aunMkMDpMfXPubb9irQZhSv9Jvcj5qPhTCF4nbtvxRGrPoA6MbEVT",
  "key17": "3urvdu28WNtC2Hf6E9Ts6yM72Es2Xjs4M5XEaaMqxXeHEknCaiSRbNpqdeLkgoMMCCDNmRPwG96Jjg7E8PZzNbsx",
  "key18": "4R68Eq4Rg6FPFckaReFVeEebCLc4Dc2sUffgJK2DCEd4fXK5XBP84MBFPwMyZYkrujdkXPJUBHKY4XYzmQzuGRNN",
  "key19": "4mm3syBfLHYJsLcoDez8Sr19ghMVxk7irK6hGrbAzGkyrNAz2PdAxuysE5uz2FWSDAfmeDyDGafgmPGqj29A15mp",
  "key20": "2aYYjRERdik6RdshP3R2J8qVgbDrs7ZBZrHcyRBuqJmUY3xjX1PZaCfuTj4XnuHuMdeGvfWuLEbfjjg9rduWhuYh",
  "key21": "x1gxiLydcbuD1b1GcdcgMYutChKTtSEVSKaSJpdBcCCx95wXbDLf9qRDuCMDs3hBttM6Wmj4TGwZg7NZGWYbEak",
  "key22": "5YWCvEXphSupFUmnwcyj7jXPCgSJTnm4C9Z36DnP8CPJALovr6u26d2fPUJq2qzpZCnBkX6fKbar2kuGRb8K4CH5",
  "key23": "3QyxYJm5NdzPCWu9xY3jr5LNC2Yq4gyeXjBZY9Ht9jmoBo1SEskBkBhA6ZRMSz1XPX59aMxnqyKmpXSihichNukw",
  "key24": "27fBoNcSsvqzFa5p11NSXV4xBnQrL8xaqMLF878GRTWiBf1x24YYtLkAQVP5WyvpsghgutKDcfERYvwQho2ZKgAF",
  "key25": "4mtNzFnxtDZndtQRN2bbJKcmyX31NA8jCmjrRqtJxmmhzTW7dWutoWZQqWag4D4jd77D1iActBZy865wsbsQZYqD",
  "key26": "47itckMy3rgBEXUofmGfQpTk8XVFuu4vfo5hDUfSwYCvgn1Q1hgDg8k44EykWwzgLj8rcBbmtjYtciMsgz2Cuug8",
  "key27": "4S9F4DWcBDBgi4xfazT7bMLnMJP9J2kMGBjcKRAXo9WPnP4y7TWp353ZgrLnbaD6ccYabeJ1TFYegwxemUeYy44v",
  "key28": "8s1v3GEZygaxPsCf5XZLqdnCNnfkve54i2VeHkYPMhNjjtmQC7dpbPhq561qXkZ88SjpkfTdoadGoW2dhbeceh8"
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
