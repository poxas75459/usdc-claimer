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
    "2aSQ4J4LqEZsgHo9aJXyByz1koP7fnqXWUtuSZtZPVJyQio9pWi1yNAnhhh9TneVNWSitfkxiHXfe1vWUgr7LZHe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3D729vXBnhH5FeHnrSsvU5mx79t3ggsM5kUXwEmtkJr7douQFTNGP7DAKN3f9qnxEy1Fwo7XzYBLZPNTBbcsHqdm",
  "key1": "2sSrZViHgSEyJSd7KpQ6HfB53Zwk9a2kHEmpP56PN5nQ2aBm35FzFVE9L3gjeCbpoL61K5UVcoy9t16ndYvvWbZX",
  "key2": "65JcHe8DpC6XV22fweeURJv63NhyVajeiv1FFg6KDWcvvVDgy473aDjaRHnET91udbfE2c8Yocs3rxAjqzv5TCh9",
  "key3": "43xqiSMqq6mxPMEErALecdTZEX2TwvcsXp6tDjnPZMfwNvU6xAJBhkek3u6yugqhHFFssW8jgW9LStVynq5ZHm68",
  "key4": "34PLzzreE9eKbihBiXdnSSTeAYXQte4oLAucowVQHxW4ENSwFcj5np6i5Z7RD9193eBWe7dMpMMuJ3rrj3bqMS2G",
  "key5": "2z331E25JTmPGqPj8eJb5WtQQ5dXhKmqLoRiwjXRCLkdHwfPTPGwXUWdVUN8ay2em8G8ViJg2wVKxLLG4R2F11Wj",
  "key6": "4JjmKWHHXwwi67toPMDCG3CWYaPnVFMBm99K5bD9SVZAxzJLtjCYS2qbdnbpjuV6xxW3WgzfKN3EjuDFxZFdR2yb",
  "key7": "4nHtDw5xrwNS9t46kNfhepc1wk2opGxU7oWj3H3HPyPypTKWtXbnhgYDanECJEWzrSJk9Sx74jsxgA9e9MbHmYpR",
  "key8": "4ee28WHBF93nkFZKqNhR454xGPWzuqH4cX2Ufpbji5xhVSvHmLZhGHswi6ZwdDEMutq7U67pWVwQnhqg9KYUHwpH",
  "key9": "5uBUEhvnUWKmuAdYef8D7TfDvJNxpaFknboPbjPmis3AbreXK4YcwutqDjz7BgfSnRvvajT55uW3e69AJBs9hPeq",
  "key10": "3FkcZFcC2CFm4HgG7zcRhRHe2iwBNo3bTz4jjRi1Pmiwr3svtzwsHFaCr65gBcAax9D5y8AGqfPzPbjjf4unsYXd",
  "key11": "2FSEGBJEkFx5fW9eVioBd5Rb1gcEzWai5cEVfMKc4v3FuPx9vcKi4xUeSiYftmMmB5paJbnTCmfxzbZE5VY5KoHz",
  "key12": "dQSuUFS7abJ3svM5EqTNqKgHWBJu3jVNj41wWVac19onELGwZkQ3jzUQ7uTNpbUt5tTMdd4marTEmYvN6hzsD2g",
  "key13": "3YoW31myj3LdkqX1w6px8k8QgQuLk8uCjGenRJApaFkvuozwixmsJ5sJ2ZB2Diuf1JQEMkqdid4fQgc5atRb3A4r",
  "key14": "4yQJrL5eUWGSMFH46y4JktT6HNdtVNbXE36C2nicsLoiaWQv3LidADX8NzNgtkqcLVhRzgUzqYk5RD8KnqjKdRsA",
  "key15": "3sctdWNvXPmXefjaUNmRn667HbMVPtDCsr8vyLL6nL3GnVSRKuq4YGpUkn2YodMaowqbTiqX1JML4xVQTv1AsvFp",
  "key16": "4ot4WNrdW7MXHLgECDaxiSawNCY6knXXhWV6jhzDF5NUEFQiqRUa6TK7jXdceuSyE5oaqWvEdpo4C6WrFi5sseCu",
  "key17": "2MgoBxp1izUYNfBPD1n45QSXgsqza1V5zK3TuCsRDKy3uGQQQEmLH1FdFgJQ8Ne4Mr5tj2myaFeZwKTTSjAEzkZX",
  "key18": "3NZj9RWn8Lnko1g7D3JJ3VdRT4mC84ZpTUuyv7HnyRaEYgnRzGmWvLSoUa9SGGBYnDJyeL9Ar6k8kaefZXTC2xF9",
  "key19": "jGVAi4SrYEKvK9uZC97MFYUqnmFxn2nC5AiUC2cZvmt5qZtcHPHXF8B8r4T9u6jCJvGGs4arvrAHJjYEbqXEvn2",
  "key20": "2dY3jK9JAxQhuBX66W1Sy5BV7gKX9U6faa9VGLUpLGDDaa7NjzgF6egb6ZcE8CHUCdr16TgFhgn3GLokJcBuK1fd",
  "key21": "3XH911CcTSJPqKnd75pJy3wWVMwy3KKtzBwzctdH5a4ms4isv5QddtaN5iwSP99R6t8HBpywfVr5Gns3zaTow8ho",
  "key22": "5iJV99HKJbdT7eWdrfz3gzLWG5BeEg1CqLdJ9UBww83cVpJHq6AWdr3xBmqtFbCEs9rFTmYZpHh5s2okUMHufFdg",
  "key23": "2uZhwbCNcYAqchMoV1gqhMUgEf1Tqi8AJjGDYnbjxPNi6iFPcFarTMeHn87yVtwsZAeybFkgc7FFknNaAsNoaikc",
  "key24": "58mFTJPS8t2ePFW6yubyLWWZxxeEMKWQyeVPzzEARbbborEzw93NSSWabGaMYm9bbzx9WKPRUi2dQpKXd3kjhut7",
  "key25": "6PNmmd1UoHNfbtffNu8wf3UgjfLVh4XJ3Zn5pPVmUxxbg6y4QvBafzRDeEjALfUExy1QaDMCd2e4A918fFLMSz5",
  "key26": "53P4hEd5pdqbS2MbxWEGENJoeZtdDrgzuC3J4V6FRCRZiWa3gXh5FNMjcTD3RbQ5YECWnKM536ZCe2s3ujN9yewV",
  "key27": "2KzJPSyeLRNN46Q1runVMu6mWv5apQBhGmZsUyM8jJ6pfSFLaxEEDGywmiT6QFzN2PSg9yrWykhGMt4g3ErcYLYk",
  "key28": "2Z3pczsaHXw3MtWv4kANJ7i4vtnimtjdbSDoDWr3QwWNXtG49jTEFrdM4fegtnR84Nk9ovQdssehRaqnHmqyxPMc"
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
