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
    "5a5rn8StUwyXdZu4ypM8dCwHs4jqHcZnSSUimpuLF9nYEfotE5efKGmvbm3suLZqFhoitWct1gZiZhyZp3v3NM94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YowAJuxoNgN698EPiWmn3ihsr2RN4fofHR5yQpqPiR15wq8VjDEhERBQyAUdD189dee8bct9bqxcMN2ewR9po3r",
  "key1": "37wSeYkgKv3x7ag8BU2JgokRLKVKABCtLSvvHryCQGWGK2vF13Hr6h5GHKYPmWYanFfFS5BvhmwyxqAL9WGrAPmU",
  "key2": "3ZWFjtSKccnBtBuTRJK3ihNod9ffsPkNXj2n5mpJtJMf18eQ9C8EcQb7SNcQY9BQVkbfvihfLzDpijVCYdyK6Pgf",
  "key3": "ArY6mN8qQ5hyjXWeiPahq2BVL12tsHxHYTGrgWppPuPWNq3n7pCZaxMLkHDrxAVrAyC3m4dZsSWj8uQMYDfG7rd",
  "key4": "48fe9JnkvgyLTbWA4757sjtW5T7tMiKKLvcoVxnzMdVZJsuyGZHFYm1kTrxupYjPicULQ9iR3aHDWFLnDWuWmBh7",
  "key5": "3KJy8JC4EgEUEHBsgUHKsfxZ5qj7ncLjqTXhKb2LMioSbawAxrWz7Cf5EE8vbRxL6w9vNHB7o4RUttFUYRsSZqgL",
  "key6": "2CskBKwNDHBvA4Q3t24PmGpRCZWBX6wudQ3Cdxc52TxaJgBdAG7x5QRySyi9gAMvF3DgrjNHeg7JbySbi3muFq97",
  "key7": "58L67TNWSRCcM2yAzThaQ4eNoPNVXyWditVY9cNdi6wh1wgCjFyTDCotbBgUTQynBTZjg5pXZ8iDvV2mNoMgajQ",
  "key8": "4PGfqhLtBNKMpGGwN25e3Zdxn4gV2ECWxzMwUrDQ17t85w9fHZTd6utMCeKVRAXBkdvK6kSextsfLfnMxX8p1H5T",
  "key9": "3P2Sw7bnHkJrsSVz7ABQbUQCcwz1htcvJBEYqdQjWWvRevK1RfQfke3c4KPJKkto8XXV5Ykc9hbtsuc9ErJrgLuR",
  "key10": "3yEVZKGVR47KszJBWagGcMZ1M3evhQqRaiCtuLSNtEu2n4Zc7ZRGiGDnMLXAN6ZQrjjzfDvqFCVBk2o3DaP5J5z1",
  "key11": "4qA443LjHjLBUXfbthP3SM83YtxKJ9ZaeosXuvK8EFU4E9BVEWxKzQkJWcUzpZfrMtEfAnUCoTA16D1BYh1Vg4cV",
  "key12": "253tSh3stGspWwDKgeb5zkmfzofNTJoKRe6YkWxnCFECS8eZQ8cKwuDha9X1jXcQoEGzLSAKjE5HrzFTxWrAAcTv",
  "key13": "2MSQ7yGZyi3Ej2AqL6nPgAutGSZcUfEhEta3wmD9ZdyLnRSMR735MmQL67sBDhJDCw1F7wK4h2Fj5gvAxJUBHPbq",
  "key14": "2GpPDacwK7qv7iHAMTkh3yKFhmrg79wSqpy5TKiVTnF15XHUUwoECcbUtpPh2YFsHrFs6Dxsavr9G7aLM4pLrV6e",
  "key15": "5zThnCg7UN8WGtqoVpA8wGXGiY9FyoPmYASmCn7r4YmrFJQz1Hvfyy8Ht87razPTZntPzMSKKycNitbxSM5fGSN1",
  "key16": "ZXJDAfMeivgPU3yq24A7aX821up5Gw716DjK9qwUUo4wXVzQACBVP5HJQZD4hySaqTgUv6sYUkRYFPV88iQEm3s",
  "key17": "2FTvMBmbx7qkvLgFpj7Yowig2ko1CBrUc6ec6ZetJR3KWM62KUdWHDCKknB2UpmgmhSvsvkgGZw68dBqqS5skQW",
  "key18": "2L2xtBEcFx8awjqvotjt41yHGJrdizEjE963x4GZpj7rqvkUvF5DoVSz8Wc962JcKo4MRLgXRQmPiSRDPoCZmDnB",
  "key19": "4r5o6a8J68gFmgJTM2DJYbxAuy6uuxHKKB6Z6UTNba5C4Sf5eYntKCniMjCuWHEH18hyj6PjUbbr4acjQNpFkREN",
  "key20": "2YnE5fgf6EokgJMFYaMmpJSMqKYMVGpqQLbQW4Q6yDFtDHAg2fz5e2m7M5TuXYSgnsHLBsSqtYztphAEBqyPwWsZ",
  "key21": "44XEPjPfJXKsCsj6P2Q1UzHsVbYuKugd9jfq5P6my7giLsr7qsbxCXFQY29UCpxfqJPkXRAYFznNXNyPxsfYZrnH",
  "key22": "5dCMjge1Tdyugf7HYFriGogpc4s3V56KGPiVG3TH3ELNuS5tpgKjDctipdsSCZc6khnfdAxgRq3Dt73LYuZTsSER",
  "key23": "ppHtERx6tNPpwYU1PnwENRDUoN3mNH5AJFuNrALpXoxrvJffH4HW3B8vFcYvekAey7oshR7ox85WvDag36SpjNz",
  "key24": "V3PfuwNqRGLmbYQUSVD3wLhpWqhWZCr8dH683CWy6cVAtNdQnnD7Pgr86vonDacVRiDxQmdABR6D83cvup2QYHy",
  "key25": "5vzVNTUWHHHYJ7HnLb2wU2qh8LVyjFpePydMCEufuuRd3sqX6p2ED8GP3adDa4UKUxHkSAkwFEadyYtkmbafXYCd",
  "key26": "bRi7NZuM2g3z1M3ffctMQXUJEECaqSaK9Y9GW7Ubc7gSscpcRUB6kczA1SFr12eMvPxk82cz7H6Nh2894oBsNyC",
  "key27": "4hmfcBB1NxRJ2eL8L7nvTot9z3YrpcD7BanPSfNffH9AaVmWzDG7v8pNrP2zWKYP8noQFNsJ7bsvbeVquRdtT8XJ",
  "key28": "4GweAq9rT2zY1obDR2eCWxWPn2efBphd9nPSixJEgfD8FmN9fUVXT9xLDcNChcYjbApoKw67fJH9iBFGywPYP78a",
  "key29": "4z9BwEPo6uFBdjX7sY1fM72MC2wPdRMBPvogTmDX2Vf3nmxhd96nnmskZQCf5RdohF5LguFXL5sHUHEh3vV1JJZ7",
  "key30": "BG8T933Fh8JeR1Ef6pLEoenKi3gNn12WTKv3dvi25eL5Jqed3dEHD4mYAiruCphxTNxgpCoiJkPLRAuL1FhUA8A",
  "key31": "3LyhVh6uumB8BG9bB9b1KGnRVxDMySSmJjkBSM9dBRSFsFkc4ayoq9vJyCEvVsiHsDiv3kJz3zjKBhvb72Q7too4",
  "key32": "5FkoUtNNQT8rByqaUgyMQ2G38fcrAv6wm7psUcXTKCtzWps1VD2d7HLxDPZRURLKynahRMAkPwejAu9yhYQMjASz"
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
