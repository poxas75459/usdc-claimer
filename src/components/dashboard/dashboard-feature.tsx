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
    "4zSqDEgy9R3xgsyBhkUq1HMp6dsSzcStTDtneeob6NnVBCFjc8mB8MuCHE9YRRqMEjryTWEKWNSu8ozieqWNhG2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bFcmZ9gFEY2GgsFGccmcs4GGmfvSJXvmPtM1wyKQjfdHa1kUENne9b4pteiHCDY5Wt13kYX5SdS6RbW2vTn45Jy",
  "key1": "2b2wT5tnffG5iShUm2nQfxNJxBNRPMkBCmpzyrgGi5KyN1tbRnzKcJ4RWxjFK8PBPiG9y2h8VoZY1xSaNW541aSb",
  "key2": "5Gd2Vc5kBq5bajf3jqDTUF8y4CY9xVecLMRvctHf7ndyfpspcvb3orFDAV4AHtzjuzFDX3kbkaRveh3adGTgvZ1P",
  "key3": "2Vrc1NgZHyeaXFKVnG19sURYmXYjtzjThBF1SChuQnk2meF8muZz1wjhZtsQP2pZtV4Xq5WZwY8k5w3GaSg3bErv",
  "key4": "514rYMYMQ9yAJMdQUAbEDtwSRvtpd3rQLiD8mVx1KJMkjKxfjtADsRsXc2xeJLCNwKe4yyJ9RUYdLyH8EDFxknSE",
  "key5": "2n6DSBNvV5tpsMAu61T6azQ4wn6VD3ZBpM95RuE7jabguHURfboir1JMsEmAdwnCD8xkoTPjGWwe8p691feVT6Ec",
  "key6": "2yoaLUFNYeb7TKbnGwzMYDPYM29pU4d1uhJoX2ukkh1qQYAhUrQF565NGHvke8ce7bsctcM8qhPw2MauX95cEcPe",
  "key7": "3hjrSMyqjd2ShC2mXfGXupwcYhrACt78tq4v2q4QvsE5JjyjLTWN5kFDQ83hc1nTL4cre4mEauRyesDq8mjkQfjF",
  "key8": "3dqHn6wCcTups8MgtSxZT5f5yu5LzLubFdCzz6oLQAhkW1tf3nipSzuSdxQPPX4UkT8JU6z3qg5mHrfoVxBPkLDP",
  "key9": "5Ucshmi6htuSM8qeTBsiRFqGN9gjVTNb2ToB9RHrAhmd68z5nGuUppcnT3DgRwARic4wq6P9zPYNTaaBCWBsABrV",
  "key10": "HQiDdq2LfDoXhfow6q1WJ2oZnyUmjdGgArLd1tXw3VNoJCodtfYVfsCr2oiAZB3rp21D1LJBpe7S2sM2uiosaqw",
  "key11": "2zziYtgKs6yFpWAoY8McEKHmp4oTf8sT2jq8VL3XHVy8Z6SeSo514vErHpGgXHogZus1TsFitsjveMAPTinKTMF6",
  "key12": "47Np87Qhb8gBvhWkSMvf9JNpipoemVTf44Htecc7jgi1pFEKd4f8At24EHBk1d2QnVo2oM1PY27BWhLCUzeoEjVj",
  "key13": "37Dw7o5fDkM8Mn5ZpLEirojrKQ2A3RkEWEA4pz2U2zMEX4rmYDuidcQyRkFU6P4H25VkrdHuGtPDUDm8uHHgpntt",
  "key14": "3BovqDYskFRTrZQJnYCVRJgkLqCq1PoaJefhto5VRx1qvz9g9JzW3PbSKgZTUJsnt74G8EkSGSixgZfHs5nWu44i",
  "key15": "3mtJcRzHSMGnd4PR3X8JhP3cdtwiU62NcB9Sm78F6y24d26kGf2BHBwopYSyHQuLpXbhfbBEsbysqYRncFmy2Kdq",
  "key16": "36jqLdiuRY4XoCqDprytrHfrppV8QSuzyDEEi1G1MPFv344MQq4Nz7csHK2iaNLaGUq4AZP7hpUxCLgHBtgcK7VA",
  "key17": "32kSqggsph6kQmSh7NbsscE44dGRkEmMbLWto84URL5NY93ZT8jvTTdxbkfY9WqoKzo6mSc1NzBvXLyQBLrjdcsn",
  "key18": "5M1YubHCJRXtTm1xjNjMkU7iFXaGzEeUG2BcePHxLkL9i5bQ51avgg9CRHhQzno3VdWV1NYoAJZDejS6RSzkiTCv",
  "key19": "3bxiiEm7nMAbNcCwcJbLVXfALvn4S2AsHgVVDWnyA2uUnpHhx8N5LnbMZW2eVbQ1zuoUGVZpnonmHnTznGW855p",
  "key20": "27jgBRwFuBUsN9yiQahGEvV3nFW72osLaF4tYVHcykvE54vz6GJifeFgwo5Zb4HYkNYqkTHKzbeMe2A7hZfZUVve",
  "key21": "5EGkuiozxrgwHjuP3v4dtTPeUcnAoH7Xtuo1PmWepm7roRfgY6KpqHvaFvbz14czJBR7d5nHmih4VCmoTRECbyjj",
  "key22": "3t76vYFDgL7m9hJPp1njHNoDCXruv6VNZi27hnvYCyxMNMjpAKy6CcgLqhwT6nR2kz4RnMhN8jVxupFgEDifU2Jb",
  "key23": "3RVhETuyf2srWZiCf19VLfv9fUburkuuvDWZCPjB1AABjwzK4HXdJgjbC93XkWEbf2Us1j66ekVDAy3bCmn3Cgx5",
  "key24": "5D5WzYxxGhPhLbCyZVFdExGnVoHwX43khCBpLzTiLipmT9grNspeHMQZoVPahkLiRf4vC3ZRXhdq69uunvBAJ4gF",
  "key25": "4puxrtnuqi3JS4KCRHdBd64FReGi5DmXqkoHijA9yaZvq5DYNtUrRmDJ97QvRzvhBAabf5GCcTdvvCkkJ6GduPeM",
  "key26": "3ipeQ9VtZrir4rxkWJUcsdit86NWCyZ8szF4AVBM2CXyV4rEsUtiXgfcVqgUAxW6HbuRHM5i2PbWekT4LLnSyHJT",
  "key27": "4qz3FkMtnSQ58pgvZ1RDgFXtyPSkJrEmxDJ2B9R2jyc3ow3buEGx9SNRdzco7Bue4R5fC7QK7FN5r6j6RPjbmg5N",
  "key28": "56fYthemkrpoJeKTvxN6c9eZSMj19BJgCaPEcdpr5PnPoeyZoRZK45LhQ6ZWA1v1CmwsuDW2fNxA1TmfkPEwa4mp",
  "key29": "5tH119cZ7DaWoXY7XAeNfwmCsn6JbTUaGCPZrCqatz7TucMZ2aPiNsSAxUhtc8EuZ5c4sAsoYGAy3wN5aBbUpCK6",
  "key30": "2YWFYqBVaV1aTGFQnorKzn9JrEC1gamrMawe3sbN7qHS5viPsVmG88UJ3QtZg96W5CFsEDCKV7iwc16Kjp7Bv8oY",
  "key31": "5wwtB6KDC4vS5bvUFPmu9py1BVf1b6cntZZ6XRTC6w2eBHR4cVMCbnYATgps7mnZiofHvdTgSsTZsaZixbJSb1Yo",
  "key32": "2EfY8MtdEfmnKRWdPBnHG3TQsPNt1PB6UFEzCiojjMEbViTs98CoRUJwMsh3wiGpSaHpea5Ae6fEmGLy1kiqC6J",
  "key33": "3XZPqpRh8CEn3qrPp41pw9qhik2DpJmmbd4hvLgEvwUbveXEbT8ZnRsQqvU4kDgz6PGq6hzCUBqafUYu6LEKgQJw",
  "key34": "43PT774CGDmN6uqbenxR1G9yjYFLjWjipi2vuzjWQteSep5jSaPqBbGaH2HuxiK48bs5LPg8sdwLYd4oKbR3so9X",
  "key35": "LrGsunAmdYjBsJjxtcYMv4PrTeNSKVxnNETJwcRSqLP7wYq8a9FnGNktgskjiVxo41f67GDBkwjLPL6fWJL2AeV",
  "key36": "5PvssnvaWHxrq5RDrZZPU9N6B5mmb2a9oG43H7RxvnNj36F5PagmdvK5ZQWhLrnkak4HonaVtu8R3Wv3XDQ3Z5R7",
  "key37": "5Vx59si5qxKSXAdyvxQCaDTvFgqAgE6k5KVCfeDQizf8FaE3vDmyA7BihUhgRyBK6DhfrJJjkpTprrBRRFVqG9S7",
  "key38": "rNH6E8eD8aQp12dhYxLyJMhofKfMwsFm2SeEUkYrG7h7UicNxAouoaYnqtefRiMpaS9ME1CswtS8wFVW88WkXyf"
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
