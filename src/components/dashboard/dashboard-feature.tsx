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
    "2KjZVqCKxFEuN1th1FCuz4RcujihBe3STWPwhhtnYp2hGfq8jS3pXmQzAjUcy7L555KXE9KkgEDE1FTWdoK6hQeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xndjeuwcrpcpph814HPaYw4uEcZi6fSP91cXLcAXibSFRoKbkJ5Z2LzrxJuUjyM1Q9cbWRgZSi2k7gFH5ZTGiq",
  "key1": "26CXHM5ekCAGExq8riu6KjYiudt3pxhiPGfrjA6PVsGkN14qTdgfyTTJ4YXWBJcyJFeauK2LYWVCwhNDcCcUYLvy",
  "key2": "5yW4Q4G87mbLkHDE3QN3ANT6PqMxLrGSc9hKAFX9x8UrEsqUR45a8Dhs7XMsws4c4TeV6vwtXpmQShC8827f2uwt",
  "key3": "63UzasbyKjYVpD851ECPkUQJ4u4z4oHuYVZCg9mCCKZqLZWnLNPjgJhUEsA7jqXzCHBzAkfJYQx7YBFoAtNuzy7s",
  "key4": "2UJd4v1A29PT3Yacfp15gwEEJ3fvnzeHJgoAcmyiSjMUk54YnGdd6f6jPVdShFTAnj5ugcqiRQkryZWBCDpFVXBP",
  "key5": "266RjNnwSmQjsfs4zJT514Sz8gH68BtNc9J8dKV3vUpUTPXtqdLA2Tam64D19HueTzbmwcy7n7hHABhXPP2VJYsv",
  "key6": "3ymgcGTcGRtGcTqyH6QKzBjuDMbEWev95kyDy1Y74h5BWne3sH48Yp8UgyzdBSUoD28QTSVHRXQuoG6Pm5yjWArC",
  "key7": "3gZCnyaJRBBHYqczuWPCVaVG1fhYU2cLQMQL3GYArZuHqhuKbbWmTf7BF9B9eJj2jTBuyuimE5cWUx98MtZHECu1",
  "key8": "bXQNV6wHy5o4LBYcJP6f1J46TKDev3Tm9b8cN8dY771uYPHkc25QWtoBUCCFbktXmJXRUVLV6nvGfhmvZiw3d9X",
  "key9": "36RUdmptLESeMTmegiepmFHTtpEBeXY4e2uBHaree3vHxfefeieHU13xLjcrdpAdrw7nzVQ2SMLx75gD69zoZY1e",
  "key10": "3mHnAmoGekFNnkvsZ4T97UfwjRyLm3djz2wDKhAn72LupGr3JrY4jX9C43ZpmfmCnF18F2VQgqm8j1kNfPZ5RMPM",
  "key11": "36Tdebk7nuiG7WkCmsMqDHsBrTyBVjkkZ8oHFRGN3QW7fRBB7WrkQdMXZPvxhxvt4RMihYzfa3qLri4oEMtuCyou",
  "key12": "4UJqCsHe5ANhgPZUW341iDWXxxnPdJaYQZQugjwoqaKoQydHK3TTFNTBvdbupUaC6Ph8Ej3xEDdcFEv93ZWKyv9d",
  "key13": "28Ys2AVtC5h3XpWd7eq9CjHNjZAYX1u6tdxa8puM3o9fKJoSsKKir8fv218A5QLqX9dBnQjxNoJoQhNtCgHP82SR",
  "key14": "3jhQQhABL5gcJct5mUHt8gN4NQvQVKDs1MiZtEDY2tiLxb9FE6rp2PbA5yTBM5mNcbgwPrWP6ZQdb6uM35pisRBF",
  "key15": "2k72nnkCjpzkUgEDstbu6FBEjX7NPghJ1tu6FMFGLirNrhV9tuhPzHjkPVsZrZiXjC56txFywuQveTSXLAxFh4RB",
  "key16": "42yzZgHLDztxWdk7VhwsJ3zrqYiCsmCVv3N6yHkF4Zx9ZsV9oagazS6qHRCqoiK3pmcjSaQKNKtvPUhYJJvgyS98",
  "key17": "NDmzXZ61dJiT6XGW3bR4BBNsTe6dT1nnSHz2tebVfV19dJmQ8HncDuMdSYuYitMPKo8GbTi4iU2xeLZwfpQ6SUq",
  "key18": "2cM5tk2MWvoYmVqQCsT3X5bpwCEimdtkupCMAaHkuG66wYXjHD8igKKnuLwQ8wcgUr7JQcxq1bDYfZBfWGqHQqFW",
  "key19": "5Pf3Jn6cxMywnSKKXcscEACMtBXqtEqFVucnG2QRehte1UeS5Bczsppyvkc5hyuJEEaAWPbhysKqHwcXo4vRTa4f",
  "key20": "2zXrKsYipc76mDT87TDoS1J6uVYR2qpuuW7kGu9HgrqZbMkmfADbQEZVZwLuvHHL8mtNgnY4Qt9tjCGVhqz2fYwQ",
  "key21": "5DVxeGV1XJcXjqMK9cTWYfy2H4bzWcGZs7aK2uFuSc3EL87c3jbaoGXuVQur43wtXgGhRggj8Lqo2g5JAZX8Wx8a",
  "key22": "5Lsv6ntZ7aTJqdFhHKaJPYMjBTaxwM5YFjNS1UuPFP64DJE1mZ6tPD4t5o3xqfBtqvcgbsPfVk3h8wXwd8YUV2Be",
  "key23": "4Z5r8jDnhaz5aTBRDm8DgKY2YLMaXwPmURYutPCEMy42YhvPe3npdGrFdfaxQSXjzH8sBnHKS8SLiBCkGDFSpgnB",
  "key24": "kn8SWxBP2b7Q7voTwrPtHW6ow5Mwr5A4sgYtgxU8aqCkEL7cSh3pPVD3dDG3Jb97XkoYB4xGfGGnyXQvFQrrrfT"
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
