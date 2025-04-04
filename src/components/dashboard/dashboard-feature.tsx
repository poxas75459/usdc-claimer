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
    "RV1345HJ7ao5DGRgxpr2wiVMwiWvr6cL8uZ6pd8aPse36w7Qa2vdnifNJH44AQLw8dX3hscGChHzbeGFMzyAnCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eJdaVv3BKYPqwGzbQfwhCBqLHojmPzKZ2wZU5vc9pqFuaSEuEAmPU1hiKynckYZuhZKPcgaJckLUTbSBJZMKgV2",
  "key1": "5coraN3EueiQ1vVduRePdU52R7M7N27siEjYzK9NWPp5sXiQDr6KHiCd2HKu2Fvf6qdk1ENGt91V8Mx5F4QY14XG",
  "key2": "5cX7nhz4NByHBLPq2JBDkkdo471pjeRvVMv9MDf7moVynPhxzAuDm2yEd4mAy9J9hzjVmU4DwRHrjcVbVTJXWQXk",
  "key3": "bZLZZSb513hycwKNExWBTBaLDEfDpEKQ5mv8fAQXVqTMHfiVPcZtHAhX5K5hN4Rj4Gw8gJCXRLNwTMGr8yuLWDR",
  "key4": "3p4kjAwiQWVhwKNjbwengw9Ab5ZKwGpvWfaPDUHUCVdDiVPf4TaqCZ7f7drvM3Nsa7d4WWgC1wEKjHxkkRtNXNLC",
  "key5": "2wezFbZxZz6gyCah29jLRXtvfPNcjyFPHndetNqjdq8otPr7jRMvVc15oHYvkFwz2UzjKNYBLp7k8keYiNs6aL21",
  "key6": "2MNqRZ9PsT291apRYzXp5cbhEPibQ1sQyzBXDcnWTqSyPz3hQU7j3wk47be9BParjd13roM98jeRrdwukyyAgVcP",
  "key7": "4f1BKUTxqUA2mvNAtmLvSnqvrUYLR65RE3CR5F5d8Rt4J8ZpEBkR3mQ1Go2CibPg9nXabpmc9T8NDKWzsTy8PSa4",
  "key8": "oLrHvoygDk2i9axRdqFVWXFxavXb4VByi5ia7YGWnLvVLkoEBoyB8RB9qGfMbaQG3pQU8PY2LUkAx9idRuCAdzk",
  "key9": "5rGd9MP6L7f6EWx66JCw9oye48hvxwSi8rLy1ocD8wdjtR3ybSwU6JWRaraRtNG71q6fP6MFmNh1NDGstWnovVaX",
  "key10": "2sDicCu12AkCz3ir4gsYVp4UPRPLX4bWXuyfbSv3XLCAAqDQQxULka8SdvoX9ZRTqBtBZzqH4Z2EEAymmwBRKfQM",
  "key11": "5yU21DS52zPqqTMmz8vdVVaLhChAmz4VQYLPGfXMZZFLiJrtN9MRmbXb9EZQm4o3htH9WQqqC2cGyEa11ADvGTK",
  "key12": "5zD6pDBRtZvQwHSTGQPhKdLKEw53RrLe6nbnwtrSprGk6z9Lo9qD5rwUEzCNYDyu8DKvrK3XzfcD1uPpRSvQawhj",
  "key13": "3t4CB9qYnmacRvJydqDbw53f726SBsfUMMLPrz77cKevMp5jfbhSbd8hFipStiCQe2z5Yuf68ZbNHGmkovZLu5ZV",
  "key14": "5fLrP2Cx96bkjatvV4A41tGCFX5zoe5v3c48aYroryw9eRqLBCoZaT8Wnbeupvt376gHxo9F55MjVnYofJZuTGi5",
  "key15": "41o5ZkRm2wLF25tdjwW658rjfVPBgaJyqmJU1UtjvuddQS2PpbtZuc3tJnLEjtuPjrS6WJLUUfS8mUU5ix37FcwK",
  "key16": "2pNehgctmcCenL2rib5cs3UGzdfDUVuFJwSRoE4Gd93ccy1VuD3RgKgX1rJmgXmrGMFy6QbGzKBjmPTP4PZm9LgN",
  "key17": "62V8RTy7ySBzj6DTxvQf3HyLRBJf9exCmH4BgyBmUhV7h5FKNM7WJ3EVSyiKSrgCQXMddRXu64tyCaDuD6ArWu5J",
  "key18": "29sBLscKXADTkrU2LWwuu9pHSWLoPMNY265s8Gxtda93Z5aD2yzs6B1pwe29NhHTzF87di8ZYMpmoPy6n7hyiE8u",
  "key19": "SX1YrfQkb6h4Fw2sTuqfqkT8uFqXVcXhEHDZqHR7jkF5WhLA8CMZRHTdMu38BckvtfPdPA5x7JpC9xUhrkbjBH9",
  "key20": "2CiaC9YdoXvXwqsBGNky1x4gSfupecKB5yyCpdaut6FcEB8ecyxg8RSxiW2V55pPinwKzv9FZvzVWpN3hXRm3zg5",
  "key21": "3YwcWjd74ttPjgsRDhJ83btvaK9vPyWJLmoE5jPyaZuzk7LRbzgK4kZjwLbhPWZ17AR27CAz9SZLMjQYkiTbx822",
  "key22": "38VdGzDzKFeYpt8jMwqSSueWfFPa3bYNkCNJnXT9SYRxDmBPcjdpwgXKkGDufdbi4vDD9kwxNih1PcYRywZuw1mo",
  "key23": "2e2Z7XrpMSgSiuvZDLc95CCGub5Fu9b1PSzRAe59AAuJZpXVoUk285rLErDfGoEi5UGvSNaW6Sxy57vBGDZT7qUs",
  "key24": "4TyABWyEhkJYXUkFaXAHuGWYxTnp9MxKUGegFZkmGqs8jJGqB98ZhaWzez2NJsUT6raNatkY8JGcQ7LhLuCSuzej",
  "key25": "4zvuWHVGRxG6gaUrRzCvGDyDnqcv4nZVzx79cB2v9kpLMAdRPWxKmhGWkZQWQGB94T7u882bTJHK4f1CLsCusnua"
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
