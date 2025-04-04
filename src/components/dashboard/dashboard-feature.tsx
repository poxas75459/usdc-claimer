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
    "3ujbgfToXmdiEfeW5D7AsZvBEmZoen7dTWMrvMjF4pvZa13XGxCjD2Wr39XaBbta9KG6dM2nVci5p9hvGoNu9jGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VB5RAsdNTiLUxwhzHnxfG7fWwefhzDcbGTLd6VjHaURxmBTR1i3zG5Kr1yYWoWXRN2a4PqyayjH8b41etyXEAiG",
  "key1": "se6zqVB5T7yD23ZLsKzzixsGYAB8xCsmB7jJjESwGMkZCJQgNPcMfhTkKjiaJhgLYe6wuaYKJt138ZeuJmPczwf",
  "key2": "5LMQFj45hwXAYxNiotddJuw1KmrL3P2EhmpxFtMpE78YUZb2s91hZ8BYGaYo5hDVMn8hqDX6w8gZpBcV86b1RWtx",
  "key3": "2eSUj9JCMRmFtKjZtehjbS66MbKXuAzPzZgHHHMwN55Fs9KNSCap7UwdZ1RW6t5qTZXJErEfuZsUyLjr6bZ7377a",
  "key4": "4GetPCnXDCfLeYerv1k44jWgshGQTxSTcQf3SmomwK93NZSe3TJKNpyw4kD1dUJzg8hzLXDX9QD4iMTsQuMYZcGW",
  "key5": "5i2jhTYfgwhnbThMCrU2NvJavNi4CpauqfQVjtsKF3VmreYZ2hhnuHapyLhcBP1wZoiufrsuWZSVifq1V8Vob2vC",
  "key6": "4WVMrKeq1hzmYW32HeUnXbc4h8kwBpKgnheDTJ7NsYwnMcrrZFeK1VNuBJUsGjtweRABrejjdeB4QTzfF93FZZQr",
  "key7": "3SFXbFriKAs1qM2M9kmFGQ1QpK4pxvrtRFLssAcivzhjfD4kT68zgkcF1ZLZpRA3kn92GbeeNJgqapZJv5CLYVFE",
  "key8": "5r1Qmxm4wXWxNsF6HjhhdAXnmxAJ678kX8UBFUbYQQhnrZqo5Cfujt7HmSA7rnm6umn5qVzHYSx9oKgLRhtobp8V",
  "key9": "24WRW6S8JwPtE7CsuuWYkBGNxPQVCetnPZ6jAbEKgPjaYtQiYjUbHNRCiX44D9Z59C4QztdxHKT5CpYtCS4q9uJv",
  "key10": "57SoquiAS25wJDFcp5caVz2nDBEtv6Bb57gGDSA3GtSXKoKLsemmVPX5mF6e2k3yw4DYe1CbAnTHA9ZWUVCKZjtC",
  "key11": "3UyGoU559Qdzn8aBsuFN2hHimresY3ERo66exxro8kHbGAMGfWM836o594bcTo8f89DAYquFq7bdnGcWxumMpNNA",
  "key12": "2sJKkEE7RccSbJZSD2xajqzcEPGNvmCnQ7j9N76556vRrTbb34mMMgMh9EWBVAHyFitTZaJefAfXvKZip4yXWRHL",
  "key13": "5HbkyV9YRQn3dF3gKRSUm2pWg1WbVzcemk7xaWuxDj91cFj8tyzZ4E2CtjVJa5Datv9ZL45nWZsyq4HK6zFwJZWY",
  "key14": "4byWM1CoRQohwK4wAEvnGFMXHw7PXqCvEHoTHdo2htL26Fhg2eYzhZPMAJcUzEEtz8pTXtLuGDrackA5KVZ7yQQQ",
  "key15": "4JfPXxPMH9AKV9YaWyh5ofxKJyC6HihEtELMufLsH4FbdMmiubzbpgL7CEpY48Dr2fwuu1ztCrDdHgFZGHzuN6mn",
  "key16": "5ANdsaGp1nsRP3hcqEQYLQ8tyC2T6EfkafDhpoVZsHLECEDyChSaeXkZ5rAacUiGdRA1Y6WFAVuBw9yohqKfsGtZ",
  "key17": "2fSSYLtqSWryG3oRYpeKpDdXzHC67Ct3u1wj7aK8WJb6QUVteUqcZSe87qXeBgrQHZejNvAQARtPQfWQ8osqdBbP",
  "key18": "LeHKpSEbgag8HUnAtR8MtdVkNMJumYWMsz8VNAu5CQWtqzzcLUjqcaiz34cY1F7P9nkc3q6M3FM4fHSF3sSKxZJ",
  "key19": "3MiG8tSbN4cXhHXgsvDQtTGieRK2Qzg5pbNmRdUuj8BFewck8XCmdfk6ReSWpyvPfFHmEaMcrY9qGTgWo3csuqrW",
  "key20": "6x4iF9Q99yrXyCPdmCzfLc2ShbbWu35rwdnFo4b2tpudsjVvaGZRzAq7xCjQU1mxMCyP8Dywzb3deYBvhw1syTf",
  "key21": "3eiV3R91inE71SBnyrvNEzNs5o9sFBEhW3F7iHJ52zRPX39VQ89UpT5vEXdpRfXxL7a9u9YzVHnUV2QYhzkWbM6m",
  "key22": "44s4y2w6vJPjv9M3FToJxF232S6dkeVBSd8fT4ENGrkNRDhwTa7akb1VjbS5EZvUQoV5FeQwJqhTf1jvrKYZ2U6X",
  "key23": "2zFHWcX8nkPUtzgFhECEaFapLu8hjksF2sh8Ft5Hu3ttFdifzXmWn3ZaNa1CwTjgoUT3V471g97wwYCrJhBBTrSX",
  "key24": "4FL4vkar1dyy2QVUubEpVV86GCJfAiBRoNAczF4h93VL4U1nHkiRAwdvmw4CWkKD4nwLJsqfHiscQTzEJ9hyAiBx",
  "key25": "62NHFLrK3watePQYaa3bM7GWGCBAxVjhkfgeJXr3fVgFNkPLsRPmERHXXAJDim7SAn5a7YWk1WWxNESyg1n6sAw4",
  "key26": "8t2imx9aXTja1ztD22EruDsPyHhoTZD2tfrRsMk7fj8V4dN36SpPqDHMFidHAjSiKSH7SESAwLyYQHU6NATbdWH",
  "key27": "2tcCwxBekNKr7wjbspPHQbuUGKA68HWvfTYPQWQQqB9pYsxdACLtnLqDmsx6zVc2uxZqRaoHRdZiQgfjc1JGXMXf",
  "key28": "xYpj324svwADSJa9ePQGN8aykXSeKYt6ndwT6WaNpRd2wYCBGa6sfKcRjdS1sZZHt8on4Wv4G3Uqpn7q96Ygr6d",
  "key29": "5vUnyJHKpRxXigXwCFgiBNGbUR5Xj53vgxv9zSdR4BEit6FuUPKHhSxA3ENhfF8CGzGBxWpHUHiMcSYaGSWWzrmz"
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
