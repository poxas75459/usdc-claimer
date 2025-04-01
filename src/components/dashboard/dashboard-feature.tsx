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
    "5wtSDJBBcHHjtpExXHTUJfN4xZMi1Y4GEtyxfPADR6DL2ngVHbaQnVNjzD7mNu7YPwmRh9wAzNU5DjrFYJkTmx2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iHSQf9BQfcS77Zi4TRFZH9SMGvp7ZEJYxnKAgxxMMP617T5Byv57CnPq83rXYrAhUiz9bAHdnwqMJefBbbZmZ55",
  "key1": "61qP943x7cck7DY4DQPvRD9ZBPVsWx6RHyuA2wMDd9j58vo6Rs6AgNTxTCHVMwyETd9zZ7U9Qb9z6dm4LnmsPkwU",
  "key2": "29t92zt9GdxyE2RtawHVQJLkHCf8uSxSzTECnEHwkeTyxS8fDtizb12a4JDXyfhkAuvPXkDwCpVw5UMwR5XfMTKx",
  "key3": "2TmzJxZLtpkJwryJ9EjpxqQB4hub45YYP9ZRv5YPmsGaTx3xtLW1v5WTLnQQ2faDJB5p52288ZbmJS8VMsFHeMFV",
  "key4": "33b2GmcBLYPzeu37Zth4SQWoAYjcMjhbGUQMAXnm4kpUwnidCfohkuemu17rmRMfk56KTNghX6G1UgqnDCVSpxAu",
  "key5": "2cagDBWMk4pGHEGEn2Z5kqZNrUf12Xob8b2XnA1XtmBJL5n5Jkvvet6tgQvWBmwcYq44fcL7C473VuPp4W9fFJzt",
  "key6": "5ZqaMDbDb7qJi2mmm4bgr73dUQDDGpCGHbddo67FmFkzBcFazaAVNwBW8zn8vLWbkqSX8zc3b4SMX4w626DS637Z",
  "key7": "2hngMGxhh5XPv7zv9qwEnycx8RkMj7sMtjqmLDBTCdaJUCnvu6tkozmUj8HAv7uXDFUEWzMmCcK52U2WsLp5PggK",
  "key8": "5EvHJZzzApHfic84bQJTVPWf7ENn2vbDWGc8zFBe2NgroYqvS8J5VksqmrxpjqfkkCmxMwELqsVczToB51LH2d8y",
  "key9": "56iSARyBdtkFXXrZbyRB1dV3uqLx3XBDPwGuFmEdmfy1m7TWAEvm3c2pB13t8Wjs7Stc7wDA1EsorcFt2rE8K9NY",
  "key10": "5wwMAHGN4PzKEymsAPL5td2h7qT1xJiwiM2auzJQES86F4iS1TCoACjU5VZ83p6qggxnk9n8FB5YwJexcK7BKS5b",
  "key11": "36TKyEV7vkA2KweTJnV2goQcf3bf7prRpGZmyvnjxiiTrRoW2MLWF2oTPErQYY31qeeB1anBZqBek2aepa9yiwgw",
  "key12": "5JJgZ1pDQ6HSNGzsY9NA7RZ16bC3CrsePgWLuAhaXeN5yMSYBXpQP6ZFi6jRxYCLtcjU6oRzneSvb9RGdJeGo7Ag",
  "key13": "dt2hYSneMZUsRxvBsY6YsBR2rSAMHmE65pvcnKUS1LkesspPHkbM2wv4VcgzY1KjZfHjRWBikA72C2HjwHWDvqu",
  "key14": "24xczjbW1ETbntV4J5mYdh3NNtjYTBTxaNmLezWpDFchZYn2BHDv4rMCbEoXLjHoQxXGjkb7GecaKYnnhRRP3YS6",
  "key15": "2fxSc58iHSPSSvoxZZ9Fpda2GueQ5eWUVCjAb5kLnmb6qSsYcx9ErUXHEXEzYsXkkXE7LTfkaMdE9eLGixBtUQR8",
  "key16": "61nKUrGebLPMp3dqowEKSkmz2ee7aX3SZEr5Ejnew8BMG4Rzo84aGvYX26zGxHTAmvzbscXKLtT525XWaKhr1YCn",
  "key17": "5DJZjeE2EVU8AnMLXVwUfpKqviXxj4LqM2LPK54binxCPPJzP1npTCuCcMsoeN9GX6U1Di5ez9U3vcAk4MTMBYzj",
  "key18": "3oVXcJxywLAk4S6FiPAayDgY8tq2x4DDsGix8kup9si6119fHhmXqAa2JNZKqfFqVpQ5842CsNWiuVLA6rZicoq5",
  "key19": "9XBAPkDC9Z7xfjEdSpuxVyJNUar3VzAV1vkhdu4Vhte36MXMczYqzdorjnyLGimtT1rhpVakTb9FF7F2BRE7Bez",
  "key20": "2sRyodE8aD8bAvFBGjX5AMedJ8swo4zCk7XtPZJQPRwjdsshj5EL6FEpNz6baEjyEdDpYPn7YTR5tRteqaWbGYJj",
  "key21": "KJ5FERUPj3ouUCjN3mMfXQgu6SyoEdiQ8pcxNkRYGdjuUVryjLkazPvcnpokoLx4uYzVdcXJkT7NVoET4FrhsJR",
  "key22": "25c8x75dQ4RTNsAa6urf1cen3gQ92Kk8ygihmZ8mBqMNdwEKvgQMVSzq5auv1reT9cPiVDWfmgBEULpygzTKJBgu",
  "key23": "DPkhaTzXvLKo1ebav5oRwifVGVp6E7wxBeuptPUAN5aKK6Nhu1ootJxeceDBKmjV2xRJjjo9FKd6C4RBmRWKnto",
  "key24": "65qBie41C4es3s7TZEjgX4dXm1TzAnYLH7Tfqynz6SSCTexToK3bi1CmmK9nHBL5BstSfYmsnrkgMGnjEXqmSXnX",
  "key25": "2wvu4xFau224cWBAn6DZrgjKLyJonhSKzDuvD27o2Yy9ops6X1NkgMmXvtSykLm8C4bM7vV27e7qUW2wvsYDo3wj",
  "key26": "2XJu3v95UE3mSH6u41yMH33LcnWkzwvRjRbKJpKzXHc7SyTgwKaiDJU6X6tmd6q2cT5c3iZxQmrniUgc5XShZx78",
  "key27": "AEDnkHLTAGzV4w16CYT7XLyP32oga6HDrSE45bSGPnwpudGh9ZnViE8pYjiCJDdse2oUzK1avEqhdhx6NDEUQne",
  "key28": "2Lqh4mgsGNVejYhLi2f2149qeYhWMYJFcNVfnriN9D2fBDSuCnyBgbwVYLTZR2yT5tfyZ7BMGpE7YHAoxf3ekAV1",
  "key29": "29NsBEoLSyQiDdJVMZN424UFWBFpPQydQJRbhfkGFeuK66AtWVuKmNpe8SZoykMEVRrx3vpUZUA5XWXUTTFD1apq"
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
