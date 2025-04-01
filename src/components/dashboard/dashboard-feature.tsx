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
    "2wyYAhSTEQvdgYatLkZ1kSvsKEqac7YRLyuctqt3KYcBW6cQNuMM5C24LbzrEMF8CHCE7NhBN5vQR3N8Bmg19odH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JssT7Dqzzchs8cGfYpJ9sh4VX9opRmWgRBSGMi6Fx59yM5zV6z9YkRZGWWT8vTnWF7u5kBw41WeX2UL4XMaK9m9",
  "key1": "4hiHJ6QnAuVS1aNdLzqpEqtMQMtRJt8X232D5xGMwPDyLicMYara36ssum6huFFdoSbL9SJGR9LYJ2osGTsmpdKv",
  "key2": "5ih56FYA15oJZUwkLYK6JXXA29oJ34RSmu6gjw9MAC17VA4jXRTDpAUMq44zERGXGmZmXx9C4AAREVKYsXFX8YN1",
  "key3": "3yX9BgjpmnbEfAp1zEjzxQfzeXbqY6Di63sqncPi756Kvsumx1jxmDjpU9bchPAtMpk6guVoKr9a9uqbXhZnHiqk",
  "key4": "4FtVBMRPx7Mpnh41cNk7rdv6stVoPm28DLvBup2WR5jfkFmTQCvBNwjK32eR8cbegskMhSzLqs9KtGhdHrjfEXzk",
  "key5": "3Grk8tR8E3tGhH87QonaGyKVfMMmiK9EWqzDrDtgszuUoPetaSdouSwzwVfGJyatWFatwDyP2wifJcJWxQaUkq45",
  "key6": "VHh99dFjgWtry7MA1S93KJ8et75ihFBysBpFhA9zcYY8gPX2oxy1YQR5QwuPDYAb85iGwY1pmgvSiW7DLQk1SaJ",
  "key7": "2XwdcD6fZ7WxcjmtjNKHFdA6P6m1f2YMkuUd1Tk9FNPTTiGHkWqDMjLXN9ch4B8bnpPnX2QtbCjAVLWwhu6SW76C",
  "key8": "45j4VreoER5rWyuQBnMc7cFsk9EJamQzgn1HDrThUkaUQJkTothQx7EDHjD4LgdHgaDWxLZc9kCWn8sbHcKwun3i",
  "key9": "3th8A83yASPig79saxYufK34qywH3PG9a2pheswKVehUeK8xpxMcxyZBkaEYGpGZ1VyLSFTnhzBMzzWjM1muiros",
  "key10": "55nRSiK3AJpCjfWjV6F2oj3686hckwjEyiUfeWiPZYZWKcWsbcV1JYwHtyrBx4fMfL3omzTdnBQzMnoPm2wqqrFw",
  "key11": "3kJi9DiJAiANDti5pjZKSCmCsWAQVK29R4HmPooabAicogu3vg6qmDuAR9XgNuaFRzpyeTEgDcrbPqcU12pxD34b",
  "key12": "WXksfx1cJogFGHM6Mqr2XQXjX6F7jjnvYGercPNC2Tj6U5Wj37phh3Kf1MjiCPVJnBnJcxPWzZBMGL3jAb3Cftm",
  "key13": "5dTmNjioRuxzrLuai7Cp3FWP88X4BZTXAY9vCYqBe6bBw2mwTNm5fDAhDcaZW4MJT7bt1VBzn16mLEAinnNTqQsr",
  "key14": "KF4aTq1NnKus5R1xRyGQAAUkSYM5sVEaQTpsmS2ndf2c8HkxkDqMTjKcTTbmTNYfZSZffLkzroTEymv799gi2pY",
  "key15": "3Kbni7emLZ5Qk9ZyhAo1dkgEGbXCNAQd57BDdzQdiCPj2hbbJDp5ShdytcvrFUaZNSVxGePhGb6J3za87V7dMn5P",
  "key16": "33Kyg7SdEeoZSNkY2dzx7x85pb94SJQmMThciC4ibRtr63nqHt4eu3K8UHMbvasecaGmbYQWJhJLsbj6VRLqazrx",
  "key17": "29bpCTVLUfTaosbxC8ZE7BzozpqzWpks44ATcegP8N7SAaNkxrPdUvQ8wEVRiUpJNzyEWQhpniCf9ZBRErThM52C",
  "key18": "9VWXRdYAw799UdqKaxPPKd6zxqrcwfbTATgBbJ7G2LhBK69C4tQufFCKgiXco7CS78fgpQk4twrwWnfSCyCyKeF",
  "key19": "3J4siHz3BLVZZ7TGA4Lj74uzokkadkYujm2UGDg7ytai77xtdWdVpf8UuFNmQuVhRfwz1SB8mpNWPeHBfvCqtMCq",
  "key20": "3WKCJieD28MVh3XtSXujDckq6kktBDLZ4YvZbB818MHi4Bq3UR9AujTKpUHszRDHHbNXic6ZFKQF8MCni4NUsC3V",
  "key21": "5uf2BSQx8DGEai7f5HrLaneXwkPJ2qgkUoJfvQ8JwSXjyPe2zSBsJFbBKXwPYcoKkk3wa8wjxrr1saumxirNGPPs",
  "key22": "qhUAPmRmyBuwJnPwQBMNtVUUFxtsD7LPphfaAxAbgVzC8cy8uThrhChAhenjk6f1kkdp1aLLBZMmrcDq8RkCbWF",
  "key23": "67hz9UTFBgViZyowFSWqmtJrxLCKKdrq4t4Pb41oGW48H7jEvY2MdgYEyRwUGozWK1JodDToqThnkxCkwsQtaLjU",
  "key24": "5PAvH8XPmczpYwyeQWGYyzB4AqDyswkg5JBMj1X2FqG5oGNWUVm4pazzQqsVFDSYqLxvNBHjKJtXwnPanzoL64ir",
  "key25": "5UkD7zptwGikT4FJMzmRfzdgYjPE8FF9qwKcQowS2X2fm7M6X4kerrXTSPnxo3zAfkBoEGyn9UGm1kDVEE52H4R8",
  "key26": "2ZBhv2TbbuW7YsneVFFcrtdRFw6SNStysh4LUX5NQvMw5oh3nMRRrGJ5BTF1vqQJCxVHmrbtHgE9FJZYXrYUYRqy"
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
