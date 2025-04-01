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
    "2FF8Wn7spipsTo9wsLoAx3mntYHBNSPiVaW11ht1ge2PHBmoSwYSnMR7xUqqBe15bkJhjmMkkE2rKd6JYSWZacXY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ExeNfnx7FUid1w9wx4ztt36Lmoj3TETVvQWtLNE78MReMAtqSNK6qo1CRD5DGXjyPTgunvQS1dNCr7bbG9LZDqN",
  "key1": "CxetF8CizRLrKF5xtzQxnvfy8Tr2FGbB26GQjwdqVjs9tUT57cUHVymTw5uQaBsTgvci5qzRkuK2Qs4xagVV8dL",
  "key2": "4gMPdinAQKWEzcXWLSHz7JBGHt8tKnmDsetb46xo8LnzCbmRW4vKH213zGcfn9nVWaCD3mSRqrX6XS4hBjsHKvc1",
  "key3": "bvevHQcgvEEoixzrNwsiHuBMnEFvEjUj8WsKPU9stRZq5u4KXJfYwx5JpwLVFhqjQaP7wFo9KZ82wFqWG2phzYY",
  "key4": "4t6Ckjvtkxh2YLfHCkPwzbo1cfHxqzGVdHFoejc5aob5zjRtYWLYRu91VysR3xR8GLQVaRHx9ZfvysrxSNdkydhN",
  "key5": "3GchnoMtk81dncmPzSPYvK7eLUFgqMSwVQ7xEJTfFJnpnL6hHkZH2WhdBsa7DeenJRAbnXuvKyLDXsawG7Kf4Xe",
  "key6": "2wL2FbMY3hDsgaWGu78GqTgBuZGdL2ZpCwczxGJ7rt4KtRVuSkC1pnjUwNezC6TTF8BJZ8BmzxVG2yKtXiKPrK7V",
  "key7": "4D7mSDCLnzcBK6PonpP9FtNQ8J4yNtDsdr1cfeTBMhQifUoFLuy1PS3yHN9SJujqUEekLsbcuf5gNuxf31zKpaqZ",
  "key8": "3e6QcPwLkbEcF1QKMCRF34jkr7S1AiNruBRDpCqwDVbEyuv9KmLWgBPKhYT8gdRdVsvfTM92BczWwGseLgFwhP8c",
  "key9": "4QmQvgW6ks8zk55ugXcZDLuMzSMVFFs74bfmtWNcKcAkWdtCYnjbXGuuNSvnY4bw9Qcj6cBxNpAu8o5iLSs4EkH2",
  "key10": "5oTzdv3xeGjXP2wgjS15UkBQfp232BiqxzY3Q6LkEGTK5YwyA571R4Eax4xrYnjEn2cyPTb48KsSXbjYjw7aNfL7",
  "key11": "5YEzoNjYbcWP3C8vyw3s8sRe9WGZjUfoJzE9v9wepXs1qacN3r8a8fimyREeyJZDsQYkZoDZCqcmmhEHCZUUPkYE",
  "key12": "2FsUSQVn11a4xnb1tAKDUhQPZqYxjJqhPd8NNhRrMa7oHir9mHjHP8QeCiNtav9RdaVGWHfPZQ7sioJjectncaug",
  "key13": "tfRp9d4ob9PvLJBnvLUeQD7uMdX5JtiWKMu8hYrPrZV7s3H65NFWnU3kjuQYwvrUxx1kxUAgbeKjEJZXMTANdz4",
  "key14": "5Zc5h6WyibksKPmBaxEwxkxPGynYdC2VVgzA3K46ECoxbEQnRYF2BdUe4aeGyvctAzVVZUwJpXV1GyXFXJagDT2S",
  "key15": "5B1tUMesR3d4CS69KzGg7p1Vu58EZ3jQHqi38u1s88gzoR8xXJLPUAjQjrmquKcYzZCtkLCiukWwCngqTJnSgkbj",
  "key16": "2JsC1aQFnvuMS7QC3XQe4xRT28BW93zMzQNEjCx2RfnQt8KxPp2tcLkwTdxZPhRfe4HKP9DZUvHe22crubpdjSiE",
  "key17": "59TbDrRvm2tbqYpre1TUbfMwjRuHdEhFL24Z8o9FEJJdGmNHfNbLa1taixuHyLb4zjhLhBo6efk1aUwwfTdzKhfd",
  "key18": "4qy17VA64Ubw7RuYizBoCZaLqdbkjGGHqd2yusqyBQQ6agnMRUVQHFvHMfmt2tyiRi48QBojAdFjuAjnbash5NfG",
  "key19": "Yyfe723cMkFv5fPmUCBePn97vsJXt7hnPYFGP8Y8R1mHy5UxErwbk4K9GXEJtHX6yS3T1QtF7qexGwNsR7zZLtt",
  "key20": "66Dg6h4uLT86QPcVVvCKbWR5SHv78tVZEGVA16iNGKAgFkwh2rXzuuWWppqtEiTn6Z6ZHyW4SVV1v1ueyEWW2WB4",
  "key21": "3TWuFUBPYgMgbVnzz23eUjhLYgQuLtj3jVSjjgDi1DLX9hJ6VC43KifwZkY1XdbHDRCDGxY4WiVhuHagX3GfPrhU",
  "key22": "2hveFM2ivaZmcZ9pr2XFax1ov3ajTKe78y9m4BQh4mvGjDhownhFNdziwuWQuZZzPMUU8mkzE9MyoMtMcoBA9Lfe",
  "key23": "3xTNc7cWarN4BEa4daXTp688W1LK2wyepY4kz4XLbcbmF5mDuEqPrAC3ExmxutmbNAbjqg7BW8f9uCRCEeKRjnur",
  "key24": "S8dKme1J1R7kmojNXEYvtDozU35Ph9iKKMpP9QSewAkzXWuG1fbpHWP3P9izuTsFMh2ReTPAdcWPSzrv2YTK2i6",
  "key25": "2dvpcyo7qHZVJBUYMzwjUPsC4MXsQ1VkiQyyVqAj6STWZV6GG7bRuEY7sYzroKzqsoGXaqgBCQQAk9239ga5LYfn",
  "key26": "3V9n2kcaLVaN5YSTNk8mYdwaJz3DeFLomujEdME12pZb2zEsSbPryrPKXbA5p4o8Hd1f9T69XggTbnKwFGM3Tpjc",
  "key27": "5cdm6EUj15HcozefSycoHwpPp3fcvJg3PRoK2xuBVxoryP5gMeTzASPGACgrgqCc9qM3eYyuk7tfesfnxK5big1w",
  "key28": "3rqNYqGZGbF8kcucAzN3QUr28K22odqvXUnGMrmSrLp494WEBwCzkcxV7FAjALP9UwM6ja8WRa3S32fTBrrN26sd"
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
