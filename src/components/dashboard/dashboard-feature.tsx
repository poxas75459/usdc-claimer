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
    "53LZdYtsVH9cRwsVr1BpsXCfVxfYMafgyNq9oV7Z2PLhTrrggCRJCjYBBYhuPKvgWW6NoLYoQa7hHL6BnHrdkA1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "561zARSN2LMXFwaDzFpDBru4T2t2AEKttgqnMQAMKdMKLmM6pujyhZcuNNkiU7eKYUZTPxSxBwAUDtkSVaB8WNjk",
  "key1": "64xaxeotXBfGsFFD62Kx3ZSxHWCmJooqu446i2e8mPbnwoxiSFdqoi6565ycQLLJgSe3NH7x8ZqmbiKoFDeNMiAB",
  "key2": "44P6uMN2srdP7CfewHEqFvbEs2pePuXD212v7RPb1fkVpYKiK35QxMcbJAfvaM6kUSax5RnFHXesMDqMyUhZV3VH",
  "key3": "oaZ2srHwQ598su6kRUQJgAAa5WCzy5JuEjkYyN1PfGFxVd2vTpcXi1NUx6rJw9bTHxxEDH77FAfoqWBhPmhwAhE",
  "key4": "358noXgwzqLg1x1cBHbjjpxaW4ZTFy6ChqTnP3t6PkQewq3Vpi7EgQ8q6V5AuLdaV7And5fZgv18dKdqrbj7VcjM",
  "key5": "FfyoLakeEYwTb5bN4R6BKk2CXZcMLRVWYEfH49iy6aR5gTrniZPbbX1aFGGEiBrLv1mdYaUCvzS3h2N1frHXq3Y",
  "key6": "5DwMmodrUiNJjmFWud4WqcpvB4uiaW5s98usr773SnC6vYkpoVeZ9gutweXyLuVNJBtPtW71cLv1a8rYtDvbk6Ht",
  "key7": "3fcZXeY8MXi92DAK2iX9Nqze6YowJRuefJ2nDMZPX1mHB6KGFccuu5yniw7c9bUascMxUskKG27RjEuSM8KSpr4E",
  "key8": "kzD1XHSpSBcky4mC2CWAr6j87a3yYenMXwYQ65zZoM52GEbtf5UPCbX3QxeaXEffkRhHwLUmmmQTqgfu1jgpwKr",
  "key9": "9aK3GydW8tXxfbrG52NaiSaPZNTJvM49WXAy2L79DNHD9iE97Xc3DNzr7cPwzSVwvsvu3DBi3DCa9wmREGUc2yJ",
  "key10": "5DR4iYSx2g8xWGDL5BWYYj2PFabwp4vVJqATWGVheNwaitT8GU5rhjE9XSDXUGgTaP5AKZKd1SoZCwveKKQVbkV3",
  "key11": "29Ca1MmSyXx2oAMFUbbqF6L7agQRdgsjeQyvTNvcr8akK1WJaXWkhr5MzPxEdA4EHnNTdfgNAxwqGbxNurF8iybY",
  "key12": "33mTuPmr3v45qqu1QYZpZCv5LvdCS9WW2WggizUbDhv7exAzwgroivxZ74CxLQ1UgPTzFT449eXdt8AqHnTwhTX2",
  "key13": "5pWxo3RFNuTgLn7Jt5mJED4z8FPSxs1VRTswggReXrWK8zBiMHqz53wZbU9Jme4kExboGrSRg41pDzmUHKPBDvPj",
  "key14": "CKQNUAwYvbL2nB6LXHfzJqU5habUfYH1NxQT5yPD4ZnBwFhHbRpv6yEE9UyFHnYTdTS3gMMVBMJveMg37tEBgnA",
  "key15": "3VGVKvQNCMHix1cZ984rtcDnrzHp7odDpCuzp97CNAhQfxybbuu9aus5tDo93Lc4serx62bB7FExGL2TyubvsCmD",
  "key16": "53c4uXevCeghA3SHNN5JA8JtkiT12MFZpuyUyASjUdxEmgoM64puG8tJpXhMTzFoE63AYCN9uzLBvV8BnqqsjHqv",
  "key17": "5BZkJNNAXi8oaaQjMx2RcNmKPezSEDSpYFHX1RoUe6RUJJiw2eRdhjSAA6GJyBfxgVh9G7tEUmvUHr9XkzoN5TgF",
  "key18": "4TeExwyvFctVqA41cFMHc4NmPR7N9PavNLXBC5BPGZQTtET4uAj7WYAuSg2muL1BSqspf8KGpBrWe4fy76Ccwp6e",
  "key19": "5RUywTdNPq4g2AssbFk9ukN5jdypSJepm7ZNQhy6MtACSRJwtVjGHj23vQPjH3kFqdZcAvKiWXZpX2gSTrqyDs1v",
  "key20": "63TMAzKdpUvpa2d5hzGLM5dJbBt7cPCN8n4numynfeNjmpW9QhSxp9xjH4EpEPbd5macNgQCDiWZKXERo6dCvH8g",
  "key21": "4mNMFhDz5We4gj17Yco7fz2BqRnuJvFAv484adM94iXCh5ZpK6DhtvU3BgmqMj8RuuApXoFi3tZSQSbVZyCynive",
  "key22": "4P6ZKDKKfXoz1mWrPsKUucMjrRumFWGGaBMDd7X45kFU5DndLPrmJRPwhUwBYpTQyzM66S2pLf1hJQbrAfiRSarr",
  "key23": "2UUST2XocW36TgAiSLtv3Ga4Hsfw8mqwwVERm9AvXD6ykD7Xzb2tBqR7f57EzVaA3VSot4yhs3h5wGuAcRYtyCnM",
  "key24": "5iJmUHVjjh3GjXJD3wkgqQnfwvmhRBoY9v8FH8zXD18MTMs1A1ZY3eaLeeVv9Kfivmaz5wJXYo3zHu9AmmFzYenX"
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
