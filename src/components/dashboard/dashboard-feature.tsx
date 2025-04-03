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
    "5LbMB7ReCPHrAE1Lh5hsz3qdtz8oxtuBXU1Zw6JANT7popcLbPVBzLTMVCME13QzhUYFZVUBW2QFmbpgKHtZ4SGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zaKxfKWC1fuvS1hZYcVJusV8HdHxeFw6DHvB1trxdaVKdsLGsc8c955zzEkPZPa79WYvRjQFaKqZaX37mThb2CJ",
  "key1": "5eJcHVtMPkRtygTFEJigyXdgYzC8hHEn67NaP2a8op8DZFd6bXzHbENBeSoDFQumVKs12foXZDshaw5Lnh7pmNGE",
  "key2": "4KgsxjeNh1WWv9CN7eW7DMmCG6AT7d1Zf5F8Xotu7X89JVxppCjZBLU365sug2RqM1uf3puFtpYqQSWWGorUxL2e",
  "key3": "2PShEvM3HVcwnWyeYiJVEDFnhw8dzwgfn7Qnq2uMS8pvjzfdgJcrBh5gcV8zqKuhM7vxvTCwqEg1RGtr6h9tzZ79",
  "key4": "556fmZptympWTDZunToRakpCzfgAr6wsCsXdmKtJCUTLEZGSREWny4BZZuDfZWMNPbDWQJ3dgiWc8KtVE6hkjL3U",
  "key5": "4RQmWggbF3qpwWdRgzhh4RwPAF76mcV83NgihL7VMVHvmVPAj9DLGYctKAE9KztGzXaVj95T4H5puaQ6fpt4yoWn",
  "key6": "2tKBJZteXK8xwfM1akraQtvC2oJyYVHpnoTjLYff1ujAbsxVcAjLNYhtNj7bm6Dn5azHgg611jjQWUCbmzz9HJnG",
  "key7": "2A5Tb52o1f2a8N2ExPbDGbUBPvTcoJKVt6bDcwYr5DUAJYo1th2hZfUzGwjLTKtJfZsmG3DSaDAjH6Gr421MZSpx",
  "key8": "54LMJhn2rn3mZSbvuYcUidjJ5JSxt5nzETwnpayzx3L1qqrweoJcrwJJi1YUnaLCnS5ip5mGzznEr1TQzMXsfGkL",
  "key9": "3bhh86VkVdU1R53GRbx81DAcqpUSTwrPw63phjLoTCotKMR1Ge9xhiUgQcqzAgDCzUczv6W2fK7odkz5U8RrTioo",
  "key10": "yP25ZMmH4pZxz86Zg8gdiuyLtJesEHizxGcUeqgQZ6q62MvcA4MzsRPX7jQAEf2TWMvbATbRAr5rFgi5UtTNtxQ",
  "key11": "61WYtD2cHeuZUmr26a8jZyE28HE87quBFBMxcTV1ib3Q2qtB8V2x3GjQLR26cHMdjkUbXJt5nF8J72pv4kzYR4nE",
  "key12": "58Gc5fzhvu2ppm1f8PEAsUW8pDjA8y8DEXprhcxQAaRfbuTe98FADCiNQPNEQddRonc4o1k8Eq3VDcLPSwvD51BS",
  "key13": "5UeqHNQ9qLxTaR21w4UCmKRWf62kAmF1cKdxKq9vPyeptM4WUaH89wDJzRPr9iuSDuS7MbrMgK2KVMo88oBv51Y1",
  "key14": "8FuL15fHJ3G5BacDwByrd4d9XGq8yhzF8XLsCBBxH5PZPG4FiiX2Nrq76PuMehwYeXdyCeQhRUKW9vkSEenobDh",
  "key15": "dwZVkHdWvRU9o95uGbuiiP3k6R1yDatRfaLXCmitqbYvTDCdmgH5omnqtCn6tqaYoBPQDAYGeifnRx3dGiGf9SF",
  "key16": "1533bh8xDmi7zRa1DB5v729CD7wbCSdFu4RJzk6GGpYPyv7aDDYY2tHP4QHi77DYoZHidL1yEavEo4Umnes2TVj",
  "key17": "uFp87qTmfGTyhmaw5wJM89c51L1mWxhHMUBUB7FaYF384fXQdejUZMtXsHpugPFPPmAHaK1m69S51ar7xhmLv62",
  "key18": "2zhX6LCpXzKvZjbQFApUP6BdQFsmmRegYq4hqKntZ9bKv2t2cSS3N65VSF5M6t1E9gHvR1hHCAKA6qkBDJRV4vXw",
  "key19": "4D2GVa5LYNJTda8mKACD7NXnnUHLx9R8MpUwb6MPT79i8V7JNVtZzzvAoXLoX9sEAGvxnSCZQnRp1eC8VhxVPPaM",
  "key20": "Z2tiBGn9498sPGAyTU6XGMETZtTvMgaFKzpxz49UwMBqGXfgfHnb57P6YjKd6bDETJnxGwLjkGRz76poELV3vv3",
  "key21": "4LsM7W6UWQTeQ2mnK9LPstNDFtYTztjicEwTUNPJr8jds23Ni9FJPR9JuQDJ8P7K88v8Lg3kEKVYLqLPy83PZS8P",
  "key22": "qse3L9cyAuhta9phFHxQk6dvKXwd9B29289kGRW86p3mCYH5fxqRZXNioVPETHmaMM9L4sFbp5KGVq7hnbeYKA7",
  "key23": "4QbTbSf1d7MjW5BL29sWNXVCsf7ERt77b2CHPCQ4EvtpT3xiZJytdPtL7v9DHS24wMYqJcghXNh6GHKK1tMiEYGY",
  "key24": "4Xt1Gvp15FgYoGg9hvsxm6kTTQMjEdZpzYMUvcZvEoQ6PtE2juE7GXbVQ8sdPtWfwJJ3SxtX8GaBDshvKxUPvHKd",
  "key25": "5MN8tmHLfRfSJXdSQPU1KdMhXv8n5FzkmNkricU5NjQL1rSUGiikbAdHYjZ6zkBSsotnmCqYeTG52XeQYN1NhFni"
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
