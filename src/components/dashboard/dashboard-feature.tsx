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
    "3iqMk6c4G9dSkToaScsELtVqnoQw8RkLxw73NwdQq4WAZc3HNpYDaVYK5ktbKh5ogxEKgSzbVWFtBBXcguKPyVxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3exVTgKoZGtmtAKahXLxrFsxVJVCuMRdDABU3NMZNYdAJHj9MpDpAbycTLJrM7sksRFE3wpLqVhGdTC7DnB2NZto",
  "key1": "sJj9Fn2TddC48LvFzaCru18nFq7ArCGTNqUHydgx7963aU1WfV7KU77wvgzbGMcujvon2zzYDgMVsTz6Zg94q9r",
  "key2": "4UvYwXgpTaZWyy8hDQFUwFKJTMA4t1GN5KVxZgPPwLWh6p1X58kTgYzxSQQCW3ZQF3t9xokBjKBiVVCmsQGdTA5u",
  "key3": "4gRhvj5r5nNuPE9aiQwJqPM3jjTkqDJW1zQA2fjUCRBRkEcVrVrLZGQC14VNNeZQkMis3JvN14a4HbRMQXxVetRw",
  "key4": "4mwVvEYY6xkq6To1pEcniU2RxttAuwjfk8imzbNwfe99jDGpdQcF3nZtbbYNjSFqYPCrQbk44uT4PLwP4rXAXQiM",
  "key5": "3fDZ4TjvaA2Yo33NVHU2sxFDTzZxfzRdFzJwPYP97pCf7YwZKkbRv1QjGWUNRAr7R5i2MUNZHQreAAsycqLCXTtZ",
  "key6": "5woZ8GttJzEjFEpP45b6MLmo7UvtLxQLKnzuK4qt8tJD38oCtr2X4ZRDpMBfqf7nKFEddm1sn95xBU199pQBEQk6",
  "key7": "5zinps1z3GHp4CCK4xzEWoeBTEDeu4GAVGwokinhT4nSSoc7GhRLtChH6FPEcLxvbT1nZfEw4NnQwwM9JEXjZNQT",
  "key8": "2m3gsmrLnbSHBae2SgR4egb6fE4vede2kMkmxdyJKvYzAD5ivEytcV2ZbVW4ttk2X2zCLgyqGoLMnXN7aq7v4C16",
  "key9": "4W8pzu2vpXF13mBMhNxsBpTKNLzkvoSKVj8Pq4kqunjxyMmzccHwf6Cq7Sb5LHD9f2qaiYfGbra2vtzrthVrtnBa",
  "key10": "QiHpqP7ZXUdPzASqWPdaEWXPYxSUDZt8JNvqEj1dMAar78HKZ6MHwpZpNugK2GU2E3YbW1i4DVyX8GouW5Zs8Qh",
  "key11": "4LKpdeF3S1dXDn5FxEnBgGEojBgb9XB77MrgX84buzZ7ZpdDq7ZdpFxVGTGb7gvsXXmbnbXoVLigb9DrLbD32DgF",
  "key12": "3vjuN5nJk9vK6CeifBDxk8o5Rd8fge3CEa3tXZkzpWX8jx3zzJYDEr7CV79wJvpF5NSHaBrp86W92gLipjUp4YtK",
  "key13": "63foExgNLxZpRn9sFX9VWTTRUh43oKVrEFJWSt6YZk9TzkDJx2pjwiCeZkkPiwcyRAAk8zPG7pnwkXxhRpiT7hLy",
  "key14": "3LSVMoahJeyoXo62VNfenivBsLaZjfbcDWKGbCTWN3JFRUtbrMZmx6KszGykGEq8geuiqsU6vgBMB754nKtRReek",
  "key15": "4pPjWoLNBx8dUL8S5Eqn8TSucrTRGREU3JBJD2qJVhotrgJeFjgriLqJwnRGT1uT6Vjty9GUbNm6sYYgP2148UFv",
  "key16": "2XvYYu2DsfXfQHbZtvtQTDfvEmVwztfoDgq5GD4b5cjgPSifvD6UJWmiNyuEg3cAZDqAhFUSvh8BypNe5F388mvL",
  "key17": "3qt5z7GC3ezRhGh3sVWJtwVwL5onkbvnh6Ptv6Jc7i8yyVdccNYCkrwqheRm2PaqVkrDzpZamWwXDybU6qjiXp9f",
  "key18": "3Q4dyFj4H221NPRjnkSTexJ3Wa5dG4pzhNF3oP8FfB6TCHm1hodLU1xJmuFSFQgGFcUTgqTFLU9UyqWv8QoU3QSK",
  "key19": "4mR9ecwV5TLnvoocB664EdH2oKJ7hoMf1TULUCaCbRxVPGkFcAXgMu1xSB4NvRADF9Z126YY5BPvqzJ3cC455ANZ",
  "key20": "3ddA4NwSz6W17bQJnnj1H6kk4DZ16FGEvFDAoPJNLFucub5kUSJddUxHFfhA21ajuHQWNcnbkT4pbGnCvEnanqzr",
  "key21": "5RuixxY1sVdZqWp2yZvxZjdJTJMuz953S1vfvYVemdsqzx8V5uaYibSGSNpTLjTBcMYdGGoDpwZBv3RHDuaG1VTW",
  "key22": "4nxAQGJ8rcA5LVF9h2XtDfPLqsg6D2vCuFDsqoFWHiian55moxcMsoTXWEWvRA71NF2ZWJhz3J84hJJ6dJ19h91m",
  "key23": "4P6u24kVUGdiocHPtWYaoPEsBLiuospKvxUk5TsGKvxFkvqv4Eogm1yPxxxwT4jBZkf6tmrgjrBHHD8kkyhDZucQ",
  "key24": "3LRWFd1LRMKeku8NqmFFfkqTMid4Bu13MWgiaZVmVHAFfxDuacDybVQByQE5EgcAbvQWLfVZPcN4bFEz58kVuYuH",
  "key25": "5QHekqaTJFSb6VXSbwZiB4FKs7LoC51asEPy1E21Nc3QPxUEs6ZCEiHVdUDaottkPYLaxziaquHmVvkfnskHCouP",
  "key26": "Fn53WVxJS5NPaoG7N4Y5n1iNgSjTsKkNovhFwCPcraBXoizvqmLBH4XxVLeGnTKnGwWHXvfWCsptNCVuYj8P6yV",
  "key27": "2mwZxJrisdLR151z9kirfv2KrF2cAMLenNWx5omoXEchUQPuVUbVmiCEKFd5YjLfGuW9Pji5npjuVDGmuUTWRx5k",
  "key28": "3ZYUsyDZTXR2tznqVJWQhA2e2Sq5Jhjn7Hunuarqzau5jCevP5G8raefHUkZ7sdDdPwrwm1fyrxmXfcHgRtJQD4D",
  "key29": "62gUkJ5VC5siahu2cuna77DtvfscGirmTBg3dBYKkzBjqVXYNGp6LBiqrn9N8FfcxGZMpo39pZfrCUUKYPGUmkzM"
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
