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
    "4QrY19Xt8kqb6cnxBvb7xhLsnxLSAdF3GvSmvByYKrx3s6NEdFFck1M6BSRx6p23tD9XdNs6t6DY8iyp3jFTNopF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DXUVjEdhA1c6q9cogVMWiqFsu97psVEUXMj5t7AQePWaK1odSG5WLhSLpMRDX2WAh7p7EbqL5qk4E44iFWGLo5T",
  "key1": "tefhgwquLu1qJN2VdTpZxFCSsHudRsnTZfBkXYwfdr2Ecxhn7hSNmDWg6dHfuCJaqGKinCFB6zXZjPcrEuoZv19",
  "key2": "Fopa5j36PGn5cjDiyhWEZo4eV5WecVim35WGNBUcUy7kLjdUMsPVvCLtKww4C4ZqJk3RWT9tzgsgBH9GiC7TkQs",
  "key3": "3i6oYZaRTZL2SYELgfGFVY5KCkZ4rGaduE7SwK1qfSUF1oZDP5rdnhMrdTs1h8vruNL3nJ5GYqpCCxcBuFcSWzB7",
  "key4": "2WsSGGixpgVuyeHeeVHWgBwFkCr1z3tmZY9WTUaX6FuqwV4TGn6KY3DgBGR39qsorfiaeYxE8zqzkdSscQvJMvTj",
  "key5": "okPMRjhNLXBVGPtkEEMusF8cLN9XcRB59prjpAgZnJUnEDteaEvMNUtW6BVLkdhLnXskHHNqYE3TKGFBfPpC1SR",
  "key6": "4hcw1XQr5nhP5jyE9uVTTL13iThWJLzXRD8APGuYP5Dcp71LTT8wFzcZJLAjiH96EhnrJs9o9CqCTEvFnCEB5AeW",
  "key7": "4y5DEvnCPGC3ikFuXCruEaj7PyDZReDB7CB9cwFUY2jW9ntwoUB7mvNZT7PKcxxJTMqzuwiLwrFj5Ga2V4Gk6Jkd",
  "key8": "sPyHCFuo1WLrCjNEGcV6ygVdRaMucndswUoR5RJvaByexmrAGRfuwdcQkQ2hkRDGgD9fthXsWQ8X6mUuvN5QtqK",
  "key9": "5sPJ4sSTmFkUbPqXRqcm9AjXsx9mRnGsuAfyTv3F1rZhsEkukh6YqWVAYFW2PEvREk6DtyiSJSmGioXGL65bU6Cp",
  "key10": "47z4RB2wwcK2raiY6en9Us4aNyGguZ3iSd5doxgnHw5xVDz7iBQJpSVg59ro3N2QS6uvf4zB1n3f3Q2D3gZdL9nZ",
  "key11": "Knon1TZE18zbNRwRHUcMvTw7Fbmj7qL7WmTuYf2sQ6zoMYWDvzU8RYMvXcnzryD82J1fGt8HeEKYwpHamCBMpuX",
  "key12": "4YCqRRc7Gy6uxCS91383kMschJviWd3DDAR9m1LyF6QhFo1kRk8weRvo19PxNzdxaGox4of5KDbWM5TmpP5N655X",
  "key13": "3vThcSLpsYqpLj52Y4Uaadu37jZJcEWAHHeboyiWwFH5rR6cHoBvXyjgJR8TNWT5deTY1zB9LAkrbkje6XsukZzz",
  "key14": "kLvDVnfargoFoMirhyWFVwxNnZy2dzvsdumviZWaX369ZX76gh6TVW4DJBUVHqUigQEA3bxveY3MBrovoijwRv8",
  "key15": "3Y6kJvPQ6ntQUrqHjUAWWqGuSRqMHeKNUhiFhvsRqV5synzR5wLN3WSmJdBwe8UrceGLc44hki26oqDQ3DTyKEfp",
  "key16": "Wc7jdFU7G88xGFQiXxP9XH35otPw1VW6CmPicbkHwhtkyj23deeCtWKh3s6b5ZpyfXLfyQcw7pJEufMQnxEbVHE",
  "key17": "uLisPJq4Kih1ZVm7dRz2oZJiYfBxGz9o2U1ejs8aTS3kUoFmUsKsjvQEgxLMzHj6JFZo9qbhrKJTLaMD6AwF44R",
  "key18": "2i2ATxhBhE5WqCi3zWGJEFBsWPzU7xRj3xfVhjKgWT6ZYbAGi3Y6eThSSyGBn1FBgggASHo47gqZDoF64aszy541",
  "key19": "61o9Rvik5YbyWf5Ea6BDQpjB3G2cmbAGV57JNm5su8frgxH9bnAwx1Haiz7bCXtJCR1iHhVr7LYna6m9Y9DmNJyB",
  "key20": "4wxq6sasji2sLXYmBgD13ZFzM5euuJ8fyGbqXhNyCaHfEXvkuqRmowQRAMYEcmyZgpc7mMbDxjXL3PZAkxr9vHbd",
  "key21": "55AkxQAdbEd6ATKrAqAo4Z7Jsteis11qMQXrCjWKtZ56W2R8FCu224tgHSkzG1LAdJrzMqH4dqLkf3gZv8nAtXqa",
  "key22": "2xRMiD5qk3KvVeacFxDp4gRp1uS7CEx6DPzBf1GZN7BKpiXqoGfoacf6gBTcDhSj4Sp2hNXdJtsKZGH33GwcxxpD",
  "key23": "4HXWSUNTphes2o6ZWtgFfkKWMrs2hUTV2Xe6PJVEeWAspJShbKEynBvDTZtwmoP5p6P726cKdsX7JgmRLtEvVNYK",
  "key24": "3XidGFvQXMzJJmFp4qdzJjv1H7HD8J17iwDfyRZMdrtXKgsws8EghGjnrVSJCYgKrhp2d57uGGXkULeTmDZev8pm",
  "key25": "35QdNYR41jNZFm2CzKwQBqb7Q4aELzKQS77RGxFfj4pKjrD7TmzuSymBR56ocf8z4xG27wNn8ZWNnidYyitypEoF",
  "key26": "iQHpZ3DikakD6u5XQfWt1JC4eGGP4YosPxjFatELwotnA2DLKcHqbEmPCgnm9tUm6drKPQFe8QGK3uoHwKyrzKn",
  "key27": "633gQZUN7feVHxEcfVLvth3mFAi5So4ZB77Pxjy5s6QU1QCE6QbwfePh8kqf1dZVpu4iQkFknaTpM7PAvV5ZTJxE",
  "key28": "h72FbWQo27dgVL82DAAHkq3xEmodn9G8QJKogzqtG3J2DPynFChME8BYxw81mRAxXAy4aKvCFzR7Hi4ip2RhEnX",
  "key29": "2WPoi83xQwCnaKB3Aja7UZfCsUxrmTPTXYooEFE12R6XUnrY2oPRxXCiZwamNG3rkP9xSwasAxjkRqYHpws6xVN9",
  "key30": "4xNrXPFSZT3PwACqY24zrrqPnG5hc5tDNRvE2zBdoW34JDTXiXz2BGP1AYRcWjLWDp6E3fMmiCdwoTy52uTJchuS",
  "key31": "25o6ZnBtqdotih6PmyW2nd6YNvLxY7LY5c9x1Mx9o4EDR3o1bkXZHLuMjMLoJ47HEGfax44ErbLyv6AS2x4G5zUC",
  "key32": "hquGtZk9KvBH3Gkv44jLpoEttb9JXqP55BYgFrj2UAb4M7zn31W1Rquds9qNQXP46TdMkvJKEsWm83kXVwWKdVz",
  "key33": "e3eyVa2PZf7y3TiiR58i3k4VEtFdzwnMsPHRB3fh1wWNp9PhBQJbEqdeHEPAr3KewwqYVfPNmsV7g7gL6kMJNQE"
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
