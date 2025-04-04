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
    "2Uina3LdeU1Ut4T6gFcbzUYS1cerj3Y6EqwranCfDvrwx1T1Nq5XewryrCFzwFd2USUfrWCPzJ8zXpoJgR6BgJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2teDxDm3k1exXJXumyFrKVeDdAZLvMV22CLVxzxGP35otYoATPJrcLqAGvV91aHgr6bL5io1tieRtaadDvoHUjuD",
  "key1": "46yk3t6vFv1Gk9oYjQztVvp9KAbMiHjmbj2rYYR3zsa3kLh8kYk6xBVM73FynaxVtVKHgFgD8bw8LdLxmcwN4TT7",
  "key2": "3b6AaJkjbKY4zTNmTgQG3PUWpqerkNHymF6GnuiWxwefRvmUsoV2LQqzGah3SmaSAwnPQ2a7jDKNe91nSF1HAycV",
  "key3": "eViEsHk2mSRUC92CfRsWuXaFX4W9Wadhps7MZi4HyxunfW4H6a6QEZrhte7JPquZr3DuAmhGWx6ob4dCpBJaPGd",
  "key4": "eVjyBXB7AcgbrZNvaXWKjQGDcEmcMAYahf8Xn9AVa32vZVwzfpQ1a6jYgb21fwunPcW9Fq7eECh44X9V7ihY1vY",
  "key5": "3GsSYuC7NWhtmX2foSiHt9ZqSrvpEY6gduTQkAmDZUjkKdyncKBLJRiDN1LiywmtV2s5WBPJcwFAnbpjLDdftXrZ",
  "key6": "4z3KTskJBrSHcP8jKUjcXLQBUomkjjpsMgj7doBhQWuq6JEVMVfg8yjpVKR4qdgJeVAYvLMgSjYnEG4FpxcRmPaD",
  "key7": "56PB6Hy2oKkztfJifUEPTVjEuEsj9mYe5vUmBrUam61cKq9ygA3s8dqqo6AfhBuREQRDwqciUXvaUpVNwSAWYrJM",
  "key8": "51JEx45oktVpj3LvP5BDmRyz9F2HYdHGprnbTHq6K8AV44y4sNQqAVcchMtHH9Y3aty8DaWzF2gXUWLPxtkUKnbe",
  "key9": "mFccJLP5M1agdK8AnQ15Jv5bDyMA1NkrLsiwwWXfCtSCdGKjyTKcBDTjLo38kBXj4xB9ntwRhLRdGJPKsWxhZas",
  "key10": "TXsKDGfLnwmFv9dHsduYGRkVrSS8QA96oebqPmSXEJ6Trdfk9d9stkfPZLsEoQahM1HnVJ8L8Pqdi43SyYGCFA3",
  "key11": "2tGQqagSxXxc9hmui58rzHmAdbJ6yCgSrUxpsqsu9dwzpYVdgW62YnqhbZJr8vjzsgqpyeCoGyDUwLiEyN7Z6JNH",
  "key12": "463C3NyfqGXXf1k3kkNeyXtWuM1MmfSHFApbv2p4gRezJYCKombq35Gz4uCZLqvCrUX1K2XHX7LLvoafN66mJU7Q",
  "key13": "2q7Eu3X4cWf2ofrFKngSNY6AqRqKmh3FUuEGaiAaXUjiMEksZCwf4ES8wkk9Zjs4m4T6PWyRsp9axKRknVb48boD",
  "key14": "2cvsXkAHjyn6eqsbvo94za1CBEsidXZTpVdxGGTz28pFouprZUFgd9nD9WAJb2ALHZcEX5WnFB2dJo5Bka1rz3mX",
  "key15": "4t97KUmP4n2sBsvrbg82NrZyhG6F4bPNUoFS5EW9T4KYUnkKB8ttdot1ZSBnrMf6y2pnWDdWctE4VTCSHjam7f25",
  "key16": "3twhDCuHtxaa2tn2g58gntsGrq33xyb6eXiC85njsjq4aZfKdWEYUQn1yexbTEkke5c28M3rqkvnpmzAK2Jw4HAt",
  "key17": "avLoCGChBvn7iyC8xngSX3nM7GMBk8g2FbzRMo7TY2LBeM2c9a97xxZVPwtBK7jdPPDb3vvPjYkW5TvFv3bQtQs",
  "key18": "29VXRe29xTAoZ4BMRvihEQQgssxY7anQwwErqnrc6pBmvpsHk7VZ2d6nn3KUhsfe1k5kisZADZPKkfziSdgEYvs4",
  "key19": "5nKqUPE98Hb67PFMU9w7dHsvyL4vpecDreQRE6gVqd1g7RochbVRHTzJAEd5wUbVNQV49mNF6DiXZFmL1GiDjetq",
  "key20": "3HJfkpHZvJiZc1QQ7iXP5bkbdTbqjW9bK5cxxcQxathzMAnxiiG1dgoPDAiTZT63r1Ea8NVW6NSmjFT4MQcQM3E9",
  "key21": "jAi8ARP6rqCo1ptZXNmyoLhn7fmgm5CY1Y6D5XEkghnsSPgwKL1uXvWqDRnwk3wrehXEX1CQG7V6wQQi44sEWd1",
  "key22": "5dXG1NSxEJYLYB4j2W7hCqST8CBJqxesXxWFcrhYUEgyTqjYaqry9SzvRLGSP91LNUKCHS3VQKedXDCDbHZNa8bE",
  "key23": "3E6hYvf1yPrqyUxy94wZdk7fm1QuvjYMv7oLWEVBRueZAJh2yP977E3vx95m9zYmnC9fZb8gGH59uC92by19Dd8N",
  "key24": "9Q4CDyhmzhPprfZQRYL8M3wCg846Mgzr1QMjLgpgmyXDVkHWyoj62nfPfRbdHydmhBDU4A113mwWA7QHD8HzXJX",
  "key25": "3wZKJPvj4ridHUjCAX4ventmxQHgKCCSipD6na3fyVS8dYzV7qA9QYCk12J5QTB5j18C8XoUKYpuDWYb1c9DLiec",
  "key26": "78wEEwPtkDY91Adh2VKcyJCYquDq9pRFo4yjwEBwvTTVA7cbf5fmfZctdcYrJwWJLGiNSCXws2s92CgCqYhBesV",
  "key27": "2dRTs4Xk9pUftuKzpqYbhfofx6BHSdSnMo58Ap5cAP8HjdVKF95H4yu87YzFUBt3cCRTFFRpvuTJU6i9vWbXNV3P",
  "key28": "2nXz34cxGfHur3NZjMR3aHxnvDCMbYKqNzZ7W3aHG2gWBcs6j88WidZAxWt9uJjoPWaS6j2mc8eYXgSY4fLXZvNG",
  "key29": "3apj5xoU7PBfrwHExA9Y94VtpJHi4VYYDf6qZEsEZ9NhSRXDEpQdRWTEasBK2k1MUQptbdv9A2WdQ9AqkYjKtafT",
  "key30": "3V8RL66b7LcJc8uwDk3cHSyU4rz9rnVqmVFBBpKFwegyXXvqCjpojdSLMhEkx2UPS225v8FET8TjDfpGRBKH4GVF",
  "key31": "2V2GVFQJm54gshBrCJqDqCXpNti61FV6LuUny7gkgvJPV6r8WfEki3QT2doRniaZ3z6q5CchXELGz3KJeGs2kqYD",
  "key32": "npYBENb11YAuiGf718qD35aNiRNe1J1YjX4i8VVsg2o1fyHw1rAMDhbdVHBCxtNcqmYrjEKXLHu4kmQ4g7UfwA2",
  "key33": "rcmiY3cKr9qtgqFhTWjQTH7Q1hScjWAWTcPZBtwhdn2K92jLsjuWJ4gbhPrXQDiobYRPvCjTpHiWMuZRQLNuqvH",
  "key34": "363fnPpegrtcHF9bBm6Q86Bek4jZqBUKZkNYGPxqNzV6ULKgtrB2TSTCkPU5W5aHycnqB9kQCXapFLPno1xw7Ykw",
  "key35": "3Jm2ySrJobCMnzz2Bo83HtmZgiCrhYcTV7qiV1Fn8BiJkXHYk3nsPgAboHHVcEqNxfuT1MdSbsEm6u5ANvKCcNiE",
  "key36": "2UpNc2Ye7j4iAnjE7Muxrf12xRBmNLC3jxepxVCJvdFABuP8ScZG4zW3zqobbkCSCBnEkVCRK3NMWroSwhnenSd8",
  "key37": "bWja1ZMT3ZGhvMcRGxWo55hq9P2JpvZ32XDaspQ3Gf5nyFMYG8RiyG9qjpX8WjtpdGVfeNvHpdWC454wB2uuWe3"
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
