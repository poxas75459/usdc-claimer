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
    "5frytC9ifmpVypxSa5kK3fpZUq8c4FCYRU4eWcy4XYJuVi5QFHTt8f5dkmdvoUxMtaYqJLTxMAy59mfHUaGy6jFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45ULGxRWt2YoWXwkP1zLhcjbWg5cGaNsKNQd9SWEQUVm2gQu7tAHWHugZXdZ5WNioirYoSL5jrW1xVmNkYzBJNc4",
  "key1": "CeUU5BwgqapijZqA4npohtLeUctch3SnJbWVxmgZgeMtyzh2AtnUZy9v2dWKa3rWDp65QwVKqyxJb4a5hGUMy4A",
  "key2": "ht2nryqazr3r1PMr2aE55Cbknver5T626xw1ftFaG1XhikrG629NbwifGkxUVFQN8gXovvbPhS9aEVvzEMcXgm7",
  "key3": "5Zg39VmdV1Y5RjHQjRE2zvkQYMqqZprRbzeRSPcVbfTbA6bEJHtqXe8Uqjh1pwybkWLunuwF9CfKLhyJDAiwmdvg",
  "key4": "yx9gX6k5owj6x3iDcYMKwEWPcGziLvb5BNAwyoa2rU5SmYKpRWjrqRooPvrYDfRGscHY3Ny8zr4CWPNo47a2N4z",
  "key5": "5XPpRA3Zu8QCjon99JL5KeFVRpHAtC2dDd7FEM5mruGsaYDCPAwk2NgRiCg3vnGTyncFk1PpbA1nL4tX3KBCtrCN",
  "key6": "4CTNng3LTnJAmb9zgAYAAHKdS5rv3rX9PrDesHY2w39aAHbMnNuVbLx14eACDj3t6VPr2QbGysZ2La4die9e3Qgr",
  "key7": "4gMSwLtDXiSZYdqzvQUH8kDHWfpVQVWJahiNngHhMswCgShiSZmj7RkPAx7BLtektgijGwG7LZPZHKEd5YNi5mYU",
  "key8": "U3aaeUWTuoEnbZsXzfmWYW5rRNQuMHF1S6fytohoAgYpSKfqatjRJa5HRWVyUaLnV3SEegiEt4wSgxvWF1WAqNQ",
  "key9": "5JsYTMr4pY1PyYccnUSxRkEP7Dcrh5GA8bX2gRehfGGr2iie7pZf4Huxw8BmjGUqUyuDkJBzncbrPskMTVqNkp9t",
  "key10": "5V29aGtnLyGCwF3Xcz6NPv2LrAtKe43DxnUABRifnHPWKjTpwknhmrvWfGuQZUYj7Av542Gvs6Xu4FLeagYsq3D1",
  "key11": "4htVKXCkUm8kpAxqqLdpvFbAfZ9usoABJgLMGQJdx4W1AKut5sU8FQZTpLjPb4uRjrgR8cW3PVT9hc5THV3dp4h5",
  "key12": "4mB8UeRRmpybddNsF2mvRBCtE5mRmL51Y4X1oWnydAy9LXbDGauwjefb28r1n9DNuovXc8GrTyeXmvKhV3fH8YQQ",
  "key13": "2y3Lzq5YiypzTYgftkX7JbbFFVqCq9k5pRaF9wgsYnR9esi91sH3U2ZQafxpvtmpgV9yKrQPGfwTRSQGdZSfHSZK",
  "key14": "3psauhPnnf1HVqxskfkwUwr7Fj2GYZQoKBW5JGE52AJgBz9iMteTU6seo7m2jBFqqjZXbBbXHshvNhSVhdvAi7Fq",
  "key15": "4Qx5ctAt18G8kcQZH96fHvvt6ufbFCnnviVmcx4m91NvBRueWmaXH54HCdCzkS8ZxzE1idffaJ7Ganc1s18qbTwA",
  "key16": "3ecQdisWPpdsoLJ1eJ9DUQT3PyKqAbyXfKoS7UVenzs65T1UeYw6JxMhVaCK7nhd19GQgMA8fy3RE1JEAppRvwMJ",
  "key17": "31E3HM1BVyAMPUMTUgeFNt4itMCiFmi9f8HkW3d1mpswv68Xxr5Ykcvqmuop5XcRcxfGtqi8qcebHuPUwuNGrynx",
  "key18": "31HrjrzYZWYAmwVcuBBn8FwvVPiKRmWVmLQi4dFVcAmqSBRZbU3jBFfLANWUf2UuzbQJoLpQQ5W3Jdkvwsi5GFBq",
  "key19": "4P9HyH2E6Ctfq76rur8ZncqMEBEkjUPWu8R6eenjFhvxj8vxhkg9A6EYcRRT8DMJAU4DsaBtVctG26NdT78uD2GC",
  "key20": "wRXJANxBqYs6wahCfVnW31m5MiCZ1TWbroDsWyjoXCP3okMXNWgWGMsAGUW4ZodKP2zGV62K1BF6uA7oVNdK5i9",
  "key21": "5F6GxMcxd3nUnouHXqKpEYkkCCejMCvj7q1mH29FJ4iXagPDPqGrj6FTKttZ2VHwX5na78nZaZTNE2ew9TKSjmKs",
  "key22": "2dN1RAqwEAnHFCF6hDm1sQyC4SBBv5Hk7Qv6qxrJq3iruW5BofvzB3CJkQZpvbdsAiLvkfKhvtoFHZCPDfsAse8c",
  "key23": "24k1DXJijzLJCgsYzaPURwSjmFYdi4BNtLyTb1x1vPWMidncyiX7xeKMDfqZ9nqp5c4pkgKQWXfprN3HihRspcbZ",
  "key24": "6zxrE5YsSGSfgNZhD5ewSqYae1qZ8puF1MMLHqTB9su83AvumLEjL6PSvKtSudU9tmz3wUJSqMA1NaRBwREHuas",
  "key25": "4oxhkYuTK8kdhaDoQuXNgY3Kd2wjXtSGNEU1GV3HRvqP4mW1DMzBCTqQ5U9UARqAEry3PZTUENB6nVpju9nX6Yq8",
  "key26": "3oa3a1bR1S29wzGbeFntBDajJUSgxMaz6kZmPq2Xn5xDHdDCC3QgFZFAooaVasFPda1FQexEaVkgwRv2vxbam5Jc",
  "key27": "5RTrU3qk4Zr5iz25Y5Y6waq2zhQZAtYG994nnhYcp8FkWUfBL5jPrMeQFF7csBHHEXkXbRRpDiUZZqxZoaUwvTNX",
  "key28": "3iTB1A2d5MQwZb8yuZmMfUtkNuXaAoXnLLYqUt9BVGTh8dmYwUJh3UQ9ZYbHYxiCbKzTuEQQM8fBeknEcHmgSgrC",
  "key29": "5Wo3fLW78ARiqgdAMYZCq9eQ7nRPfjozqTpWp8yXRnuwGuaFrtGJbG88chEK84iAS5oL9zfa79C1VcDSoR91TnXf",
  "key30": "35h1tV9CKXYVX6NfHC4aVcrXTLQVxxcfd8QAZhUyD3uujq8ub6KKsFYx8jyxkB4Lkzsw4fkqY5cZQvtToiwQk8RC",
  "key31": "3ZDZwAfWsQC2ExNpvsBfcVSdvzrKR8QryAi61FByTsmU3NAcoRFh4YNhjpU7Lajsj96cFqqgzFPR55aq6YiWGdKy",
  "key32": "5faVypfb2rgGEqW78Jv9dtBAKJQcuY5unMeRdYJ6grg71zZvbHXVDD2qdtR9hF6TNn81xueko65vc6YHy48JyV9J",
  "key33": "o5UkxG2n5BVAPf7gMfwYHpmEnwpubVaLmHgKn7uJwAfhW3iwWi2XjEDm2Vc2MKG5d9Pa9a5cWUgsgFTcRov6mLg",
  "key34": "R1GnDqJL1oZfUtVkbunY9qZKad29FjWVYc9nQgmwR6UaxHu6w8Pu4stgZ3ycd9A56xPsbFzgJ86dRjNCAP3pRAd",
  "key35": "3xHuVdsAksQiY8VFPmvW9axXjau3VyTHcj8ZSQYqtG7V6S1LSgb9z1mGcXVMFM2Hgk4x8dCKXin524biPscCwjmz"
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
