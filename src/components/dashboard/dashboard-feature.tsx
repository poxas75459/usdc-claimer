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
    "2isyghwqwcrqRmrFof42DmzHMtZ8hG5qhFujgKrt8sqcYZGz4kn5gdCayHz16tYPQczvrEzQhAKs1rJbEnfs2rTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oqXDLSmJC4i1ZR5wjmQu4cpxhXWN9ncv8K9BZyXjpu5XhUcnXwuNE6ies4PpiNcT3GNvhi4KUFDoWV6WnvvTSFT",
  "key1": "41X5zmCT6ZhWPVhZEypKNYhwVqkFfFcxw5jjZ7JcjUMBE5AmwpEZ8vPtRyFkfSCVx96GCC5wayhFesYsdy1m8Z3K",
  "key2": "2P8wWTxqo4nfGfsVs85WUnBHW4obRWUyFC4p5tVrs1iHufFpmQcNdUZwmQ826yBpe8oNFn5nyWcZnLAa6TTDSHKU",
  "key3": "6443SZcqKUJn8nF4MyfGi6Ybgvx2NuijNjxDhho6UnRH8mwxZpKT9oSWcfoeLXgrMqi9h1xQXcccnmWk3Uf4qAPw",
  "key4": "5uhDVphaEnyXSU2suqzMB8kPin48Wbjmjj2WjirRbudsn3T7QM2gcvkRDwbW72z97eETL7xuo5fUMUZKt9zNUS5s",
  "key5": "2BWj4k2SDGeD6YcuZ69DxVtzJWee6xifCLo9eibbL3dpw76fephu3MUiiFfYWE9qxjLPzBaVYoZ3u37ZpTWohBQb",
  "key6": "2KSgdBJxrgbnAr6WvtvksaENQJ7zWErV8V2jXRSVdzrYDy1KKggz4dMXyTFSkKseav3NQuydDts3bDJBwSeE1Zor",
  "key7": "3YWJ3LfsaJEjMsxoGhvCSatnYdUvMwfY1X1kWJrMVrxEx2x18gXnuyrYq1Nv6Nz7CynTeyNw7f7iqvBpuN9mMjvs",
  "key8": "LjgiBk23VyAVLY1rNoLjVq6dJPBG8cRdQQ4JAXoripid5px3J9fp1eFjDFwBYAphK8KnV9iqektGQoWa5ptT2Jy",
  "key9": "5fB4YT63bpbyvM3c18nh6Pbnbdo226BL59G2f1vZu6dYdMee3ubU6wD9nnHN4NbXz2pUHJ8VupXbEHKyzy52WZjp",
  "key10": "4y6PZUzURzhWbesNX9SjhWsxTdwokE4dokMM49ScgytwSY6nK8BcbPZfHsaqo3AoFbkQUB1wHjyXuGTDrW9yuhWs",
  "key11": "2wtqt5XRkQXYnEyBwgvGtmLiuBCVWu7CL65Wv5hDxEQrQn5QVWUt2eNPsVhxLQbvZjvetxawQGGYPXKGbF5btM3K",
  "key12": "PXrXavSWiC6bnpr5Wr6TGSrQUELTS19s7ispYh3TsQLjCBLfbfziL9Snm3yproM9Q5ipQeuaJ6PEqXXufFU8cQR",
  "key13": "2i6BBV8bRRdgD2bNwkzFHssLFMrLnyxW3wjGoYvh6nQFadQHvTwrYi5VWstWd3xbaDNJUe4N3ro3XWvHr4i1SSya",
  "key14": "4nrPnU58hnaehsh62Uiuek4g2xD7fZ1RNKDg43ycDzqNjuJhz5AL6c8eTp6QyRbJwWdt3dq8LwzyNB86tHappJyV",
  "key15": "42i44iPZLJYoYXiPweuG2qFbCu2sFfBhCRvbi32sApGRmjWG2aoBYuDU4jGyF3f67VuGnWMziTgrnwqPuom3FvQJ",
  "key16": "oLyambibVre9niXtT4UzznLYggqw9dySxn3foGrBPGiGozVaHq5BZcLS93x11BoQkexqVQJrDajM1VfwTHADU8n",
  "key17": "2LP7ACjTR9VroFCHQPyibdiuWZ9iygyKXe7hGo87kLVyMGqq9KEiaer4npQbgUsSBYRuD7B3hs4svbf4HhYfZ7u6",
  "key18": "4u8iv9kkWg69de2ZBg2N33o3Np1toKJuMWNCMpu2zDnFTmvFecUvbR3ARbXYvC5BXbUsX3v34UvvPr3UEQZqe4Wo",
  "key19": "2Uc1kfsfPfxjE8dFDov4gdtkb6c6P8wxSq2LG7SyJ6HoDApnFFD69F85tsyGmyrzgGNdptgLWszZyyMKf5YBT4mt",
  "key20": "5vyA8eMk6evNrThNjqyBvUS5xhYDXjks5b65ZjiuJGcXi2ZJEwmNY7wfyR97KKF5kiTNw6rWmmbW94M4D7j1DfH4",
  "key21": "3Zh3ozyU2yBYmQxvvjh9UJm4ZyJ3R2iXnQbgLrhQr2dDhmfqQw2KK3L4qHav7QKAq63ypDpr3BXYY5gNyTmHydM8",
  "key22": "4r6Bj2xyNy4JJCGd2d3sbL6u7g1cSD4qfUwEgfDypdsbuTjTbZgZBPkUR82D3QjawHif9KBJNeGSUdfMLbiq2Azj",
  "key23": "3LjFc8a7xVPmousj28pVgbQrakDEbWVFsQmyk64EuZm55UfNxgBx7MsDeJKkg6xz3rAeiU6oXWPL2XnEm7svrLkB",
  "key24": "4wK58vLRfpjGN6kDTwFwMEEAm9hszz665ac21PoXCXwN1dYMFwGpgmaaWR6rHWKr3RVsobw3bcaQtcdH7qmWPszt",
  "key25": "BRWGCciTk1KPt9ajgVJnyMw6jcqRCKAmhz5ifc88vPcpsELZycyCCoSwf6TbwC1eFTZDQTb9jK6KAB9wik5K2UN",
  "key26": "2yAhV5tzezRoYYesnt6K3X9P9zfZVJZPHD6XWMr7wJxZPtmePrzysCdHjoyKWvaYwdQLbu1thYjZSifzFZWbXYVg",
  "key27": "51d1C92N1d4iWYhqB2UVofVwCer2afReAFHfVFwcp3fi9ebHpETVn8jsEGEKSCPcMFfzRdKNe2V8qNVtWkYXc4aQ",
  "key28": "4q39B5yjPkSkMGkB7iFuxGGocfi9Nks4T6GeEtbHLdVCBdALBmTtDoZWPHMMWD87HLHgxBMZYXHndWF7wGFoA1EW"
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
