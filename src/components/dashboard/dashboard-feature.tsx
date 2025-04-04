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
    "Hur5vPSGSw39WUsB3JfrYfWPnwt3hjwK62n74kCUBjPnERQtyd4K5mr3thm5rcE4CaznWfP1Mar6bP83h8AS8CZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEC2irzePBDm1vwwJMPFe2Q8qgdyteG4JKmM7ZKmFtR1bkBEvE2p21LqUdMfrf62WY88x8JixTLixwjX8hgPRNS",
  "key1": "4MYP6DsX2ukZiwJLKpCHiQXS8yHwwNF8gpcz5SbV5vHQBmPqZ9rRUzTwQBBCuM2b4eDAAK9WTLGF4Z2sPQXStqHD",
  "key2": "2uqmNB9SHtytusUhGwyDWasS8cPQMLidAFUsjKB4TCdBjsh7Ri5E3CXQto9yqiSijzyLePmLNLcUuWYnmmGCYDXm",
  "key3": "22vqPutQnJWz8sRejZM4DGfkrTX1uzA28poqjNxMRL4scHxMk8o7Wfzyms3zXLhiYRA7Tk3YCaTH492oLCbQbfwv",
  "key4": "McYuYAyJVWkJC4Xa8jYaHB9avVs8LyaYyCfxNrH4gvT1yKgRYTcxNXR5JneQRFmyo2HKWNpXgQsVuMDaf3Wzqq4",
  "key5": "9DLqv2kNuvzLpXpj4o8qor8gQHqg73cDkMPkQ4X8M5QTXNjSWpoyYEB3R7CzxWm9vBqwsmJLjMTZeraELEhQeYz",
  "key6": "EDGV2h8v6npUQpxh4h5Yt7hTXTQfEB1QfqDBkgbQ5c9ngbCiiZGcquhL9w1HLLoi22CRvC6RYYhgYggWtNaykrp",
  "key7": "5oUktoepsmiBDVa9WJhMY2K7Pt7Gu41x7TcqCPYyYbgSFjVYNNfgarhE9gk15ZXsdrpXCC793t857fuaKVsLXxCv",
  "key8": "jwTjUc8ZQ3cB2UwTJLa8jcXZkr2rrRHVmDgPFMRmHjrGJ2scHutg7r3Yen5pBmCxchmSryURHGoS23wqNjEXDqY",
  "key9": "hUAy7RLeanJ4PHAMni7iWcaVz5xX918jUGhpEWJ15vM5K89nSE3kQLBeVtNYBSNgrUY4F841jFZVF2bXkJvro75",
  "key10": "5RiBErcZai92APErcESbdJvETbcKyzAoTzQ2ZEzZh1mTy75juEPJzQoQjmSvswZArx9SCqkewuZoAXWisrZptJhH",
  "key11": "TCZxsG1ifiVzsKXwvo5kXqbbk4R7WvzmprjBEX63wM8VyyjPhUH3YmwU8UW3kCrtMha5h359fFDVfnkbm6s4uUc",
  "key12": "4LK1ivVxLeHh68uQnjghNyMKCjbfgwoRdPfyb8rjR3tdPNVwALUcb3MVuunRoDZ6CyXSgLY2YtowPBU3HroggVTY",
  "key13": "4zY7Sz9r3YnYzF6xaxEq6JC4MQLaJZF5V87cKnQyrTimWqQZbRPaZiEGEdJGrQpBLd4Zd4n63SDC9EcGLvSPV53o",
  "key14": "4BepaRxE9bLDeGhDg6fyXZCdFGf27zdBaoPTduFxj3hw6ikE4LTJUr459UfYGiqfTEByMwgwEky2ujYYKpAimK6g",
  "key15": "Qgs97Jn145gvqVfihvynsKaxgNywV7hypZWXeJmks8WEtx97CQA4W4R6RbrLAEEdZb5VuYa8hn3Sekry9gZGa1C",
  "key16": "2wzGB6VkvNTV3ugUxWZPrKURnM3pH8AqMQy3qQZzo8QH2FZjTZKnm2NgLXT3za3LRWN9iZNeshDp2b3HwgszM1cJ",
  "key17": "QmkBCe6ojWTp5gQjVqDmbB9ift5UiPLHD9z5xZssN5xAhrAD9BPKxh1EhofsaZj8XwZipx5mT65psnP48v5j3Lp",
  "key18": "5ug48seVh2njG1QdE5PcxUh96fStQ5pti2Wxo4nR3TAjhXBDLrevqG6i8MzG5qiQ6cMrduheA4ytSHndu1mVCf6U",
  "key19": "3nUfxXYDPRStHvDnh8NhS22KhGrVWva3xpaqnSZW7HMtBve5h657wnjiFx847BCgUFzoSsUqsy4qWp9GshdjqYxj",
  "key20": "5ytsj6ufeymb4m6qpRkNdLTSeuru9SYVyQP9E1u6nKXoHAQqxeSUxrattbP9mXzJkUaGXhpznRVbgLWqReXcAVJA",
  "key21": "623T5RdrBGR7n8DDry64NoZztgsmiinaeafhuWzjW9xCp9ZoPFDebFX2Y7zfCv9dXCeNALJA72f41TgmtUQ8RP5L",
  "key22": "37He7W68C3MroPzHH1gVqZseR5YjHfUR2VB31NFLEbpgfV8eVaGAzbFQFAZDKuBCPDdTyqxZ15jK4tuuEzWMYyP3",
  "key23": "2MbQXX2g3qhwUw5NcPKbYrsnM2UXaDZssGYvXhqjkxeLYnFP6Mkkz7psPUegDEMRxLzL9wLVLr2iWpxLzpkhgBGo",
  "key24": "5dStWP6BVNAQCsGGay4d59ptcg2cPgr9vHpMts8WCfZd5tywGYS5MErr68Mr4uPha1r3qjDfJe69z3H5fuhquPQM"
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
