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
    "3mt6nrmnrxxnBZoK9ZdYDMa7ckifVPETv95Zbs1MY3v8u6BhBhC97LVHyJfYdqmZ99Vk7oWUY56g9isERheGx8TG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5362GFZ3BWkzk74TVgJThnRmz4JYDCCiTvDL9cxgspoNcQX7ixP68cmmbXJHd2J8i92BQozfH9UirNmVXD752rKv",
  "key1": "uchEzQbd92kM269SQAdrQCJQqGDwDkHAL1UVWZCZSbkLnEdsHHsPHBwq1TBUiB3BJK5phwQHxFixUfqdjTMZaKH",
  "key2": "5iAm3PaEkf6noWkjXuLpybFy1towoSJcMemJj7g3szrohZmdbpmVggxmns1bgu22PeyuUgBNfhZ6emx2XanroJzj",
  "key3": "5vxdtzrLeLkzRA251hD34C8QaqAs24fq3JYnZytCHcfyJ8sY8v6tcYB2LtYyG9q1xr5zNhivTDytoFSTT59djPFa",
  "key4": "5zMUQrVmqF9LdCFEoc9rUB3hW7ACv8nCZ6ppKonLimTgCkm7egnpTLSXW3WufTK39nDyh5qiGMSVvgRQL8Pu5f4W",
  "key5": "2mozQkwuHLASYGqCmVfX9RVCSCVyD3TzUTFSkSV3csYBwpVLvBo2VQ41JkaCdJhCf1pwhz4bvvMAniYWuX4JmdvV",
  "key6": "2yPsGn33L98NU5CU6XxYJKCE51ux8McW5EWtsZGeSP3EeGt7g4njZLHSv5PhAfW7pxhafLwGERNw4oCWYUvRpzKx",
  "key7": "45oNXNw8hs4tdye239FjotrSoYEADvKupcZ2GFpWJWQvTB5BCXxZKNvAC6zu3uNMYgf77kbaL1XW1D1Gz8PsaTLe",
  "key8": "5ZYn1shE8BLdBFYxvGZiFLmEByXJb2VnWEruTwSdFmPS7txwKU7Sw9GjbYkMQp4b7krgBZWJzZyKa9nkSrYeghvh",
  "key9": "8Mj2vDZenvVbDYm3vdygkQZMNF1gAiqGjifFT5ek14FQZJ37ok8fcXccAN1V5xkyDbZ8dFqULaJkuUDCxBDssJc",
  "key10": "2fvrmQqDHrTPbcPV1gr3gXDYMUbUQZhGXQUxa9NC3Mimvoep7dnV7cxRPHEvvSK7jLdsqUxvzHHXyYqExG9djfa8",
  "key11": "61ie1ZcPjv3y7W2ga9quEe2JoqBu9qLgoyiLucgs4qgQxWubFrV2Cs7agFULDNZih2V52D4jt34qPUAnrfb6wuMK",
  "key12": "PEYvPgcE5EeizpytNPWgyMjYwBRJmQyiqDsfX8D6yfBWeWpGYqAxuqaMYeGgu846BNKXdUVmhrt5PYtdRoXHwwL",
  "key13": "3Ed9g7marfTL9MmvnZYikV4WgFxs5ujEie5ph7WfQ3NuMcWYuZFVKpiwEHrHWCCE61bG1XjRdwQq4wG2VexqWavE",
  "key14": "2yot7kQHQ8YNuMUGZ1sD4xNP3YefRGwc4azjnZE7qbd5eCsbQHK5FBnTEyPNAWW8YvUEY4NrnSjSJi9Z6NnjxWip",
  "key15": "3NjCQG3NygKik2TWvbU62yN5ZgkY2ovqjqzCoWF46a9CM7ZGb2p5yHAHFG1fs3ysSqkAXcbv8QtmZRrDLkun1LLn",
  "key16": "2PBoLbh7y7X5ffnRUGCizo7M6RUayePp5PP9KB14io8wucKaoKKaMjXerBEfHoDgu8Dag4sGWuWPkDm3Vh5UJJxM",
  "key17": "2d3YgHxivvGJJKKHV4iXw2TP7TfJFXJhrG85TmLo21CvUW8YWs8gTnTjxhGGLsfJRmCTjYcaYpFWPrLcvxjrF6L2",
  "key18": "aXHYu5fzRY2J7iJhzUSp2LYs2gfMBzVHXkKTbWgA63E8ayKWcnRXAVvvg5TCDCyqm3GcdCXM22eTud7EV69C29E",
  "key19": "4Zeg87gHdjCpNtzewLnJri26ULsxGrwk4hGCC6vzy69PzKVncZGe7313UeFFo43j4zCuHeYYkwqJzvNWrgn2hs5K",
  "key20": "3eG8z384WH83Uvy1rSxdbmPa7FAYreWF6Ct2wpYfLperR2cATeYqtX8DQvXba2PTSJFWrZfu56CdHCo6iMXt7z1q",
  "key21": "3TW8PvNyD5rN7Bp1UXs78ySL84zFbyCt9xsdqvha39bE94qQifCc8NdpnC4dayker29gw7Y2qGmfwkUiUMSvUgXS",
  "key22": "23AEgABskYwzMcXqADAt1nukSc77uSY9Q8YXYQeMPojqdCiFdRRWkCq1WTHj6pUB84F194bsdw4F3nUyY6VdKFAy",
  "key23": "EnYLYrJWdAFEYjg7nQManVTEncb37eDKjbGVuDWAyXx45bQEzghfAm8QeAauum9zVET1z1enNaNA3aN2BPdHLwg",
  "key24": "52rMPqSBUVY8kgZdkvbyi7Gd2dyuTQLCbajFmfDpZvAaRXkUEB2kBE6FE1p93Tm81CALyP5VimKURSTvSCfe6FfS"
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
