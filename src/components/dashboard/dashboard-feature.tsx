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
    "3kxQHskahxz5pNdRoKJrfE4iQRKVW78DGYLWJfGNcTeV1awPPARooMaeiZfdEuafVWfsoacRHHpVW8fF1vZoXGfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R8M4KDFGURpiH9XgEqReUFguYQV6XZkYoqpsa8uZMFpcCeBTmG878hnRRc7ahjBJkfq8g6HFLHQ8CUWgBbBfsQS",
  "key1": "633p9wqb9RJXcDv52aHDf3FJcFjV6s4tzEJXWEmNFJ3yCcfECakttGg84z6zcPQGcbwxCZkUDFqzWxi6ETVpjhQD",
  "key2": "44rK5pQ2ho4kXs7kZf9wBmy6dApopY4tTnyuqEYKbVbFbQVC5EvKujJk281KZvJYfZi8fjBCfHEiaMPiwPyvwacm",
  "key3": "49Q42p2tbL7CnrWBbK2SAjDiCeQ1CJUaH6tMmBmBcipVPqTgkuWKbyfV3tYXhtWkeBqTKccK1fNwoBypuMxAbXcR",
  "key4": "LdBB4EN2EJKK2JEtATEiXs8ibHPAskKbzRrnFbcScgbFmLck14S8QMHSYyJ1eAVVPrUvJQTS4nGEGE8kPW9jEJU",
  "key5": "5jZ6xbpzm1vpD3PgmDxxSv9Tr919mTGbKuCeMvctyUErCRqYmuHBoKUmhrqtBvURnoWFKe94NEqJphBffPRhnrXG",
  "key6": "4fCyPXFQErwJrHHW6cb9sHafwe5VFH2CPMHbkwRN5W2QvLoF7VaDufe8eacoZHQjYMW9irSBwf2fM9ZvLYNLCXiW",
  "key7": "3eYK598jwqqiY6peMuqrhMBGedrsjPDCHR6Q2y6FhuGwgk4aMshdbQV2E8neoDtuWALNnJvHLY3GkcrhKCToDu43",
  "key8": "3eqwhakWHWW9RVynzuzSXcebN6FsNt62bb3igqjJHo4ANnjAmpLVKn9SeBm6TCxkBaZfmvjZxnQE5CXhroJPfbXx",
  "key9": "2dksphq3ui4tMnxaQQzYivRTupXQGPdBRBvfUfDpQbpwCR8eN7dmMEjCLTkW2iyrHweknsZQuY3nezkcJPpz9KGL",
  "key10": "4bJLjDcUGqFDeY8uEBWnisvh1rFD3CrbBeJ257mWGFh7MW5oTeeFwvU2A6LqxBVZ7UJQwUaPzgfe5NqmYNd6WDRS",
  "key11": "51w1j8oY7riLKcEh13TEaLU7ZkfoWunruB8bwFfwQRvA6x25x5VM5QJwToxXCja1k53E6DWcGsWmTZkiT99fysmT",
  "key12": "3gMBTfjA8BYx82PhRKMPjF75rvbC1RfNqZ5DJ7sS9WXfswRixCLSWKPtSDkKmPyka2kQymUuhc8HgXC7SgaaCcp6",
  "key13": "3mS4Wmz1fWJ8MhycPLnsAKdgJNkZkSJeogCrC3CfQoVHWTJDcGcJFkLQziGkfXMkAi6AdcfuvdSzApGw8g1RyZyz",
  "key14": "4jDhnhFZdaLmeZmRuVefGxQhDtJjDT32r26Kv3wnDHFjVU7YYUHVzmgeg1xL7fzw8ZQcZ6u6CFL5qZW7eKT13VLb",
  "key15": "5J1b78Jrvu5wWLG8ATFMhCfxKgDD3wkn8t7UBeemsnRPR6c7bQadrTVcNQNRx5a6KTiFX8F7BcFcdEniwHHSAxi6",
  "key16": "dd51kDeRyuxe1E8Lu2D3GnGELtGsuQFsz3yxePjKR7bkQtoF9FF5Q1T7dzbMuUFKugTJiLnFL3UTYcdLNJmz4c6",
  "key17": "24dKkdMi9Tjr4CqPDa4JwugVBZhdDawWCF1jN88wveWQPUFyokNbDveTwhEu7kZomjAkV3UoDZeKrPUeJLvtvPSe",
  "key18": "5NP11DUmhmPJCiT27snfWd8HRkGQtPALYpkY3Sd3Rb7uYVSTTf7RT8KToPs9w1Hyu6aS2SrBXv4o1jn6uYKmzhk9",
  "key19": "4wKRrDdcy3D5bYfnRFRC5L7oLa6x99zEL1WJH5QH7qxTpKZyC2v4hYLrwmb7nUKHuauwMda8EaLRJwEEbPWWjKht",
  "key20": "2vMTRSkeZbcTYq2DGzQQsozXJfU2b2S52cbRMdyQiTCyTaG9fVcH1uXSJXiEgqMTa6wZyPC26Ev7GWiBUJgTC6uN",
  "key21": "5H3cNrZ6DQ92TEe8QAWrMDk5PTbRQG7JLAdnbUGbvdijXnHC9ebiGSjnpzTPDgTJPVDBP9tE1eCwyLvGsogSYETZ",
  "key22": "2idD9yrKp7S5fg92iuZA4QKqT5cavbPcTM2CvFubSxY7Ruv825vosJyGnYcPerF9WFS5ErkRhPp7ynvvsUkx8kiT",
  "key23": "5Ao9nu4nfUiGui66ExpyvcNHGCdpcfDATrVEgxCQzxFTzSb9aSFnhdxBA7yVocYywwL7rqLoFYMPE6pii19t8TMG",
  "key24": "2ML9MnLN5igApMej888qtovypAr48dnDaaBhd5RbPxZgPbobNsJiN7ifUS4FVLy2iE9hjhHZ7jPyFWDe2sW89VkG",
  "key25": "a9EGwzCg3uwHVu3EmGGD1gtL1ZwX5XWDfcjxpwf5wr2yBWDGj57ebi9gsCMt47PqZwrLzPP8j8XBDku2P55Hstu",
  "key26": "2FX9pvQLW8pgSvbLL1Npunh7SzyDwpAgqpZpkxXjZUbREBoxbebniVzZWxPEtmqymFMDHw9BcSrAdMNj9JhdsLLM",
  "key27": "3mVSoHxzKy3Dmo7RT9kzLuopUErMx9RcWwNbmVycPL4KwcLtd1KJhneHgzD5ZpymLjAtf86K5xsitpHo9mPuoAxx",
  "key28": "4ELte2S5o6Xys4wuPjtHJQsjJr4ieNbdsMKE23Qqj7VB8VE2v5CAVfQUKe1TWdRoY8nZJdoRNyjBE8jUHeYQ7MUe",
  "key29": "4CZehdw2EiMHnSbhvjjqzrEz2ic6WcfzCFxXQDQLnU4Je2VTQMeYcJVYM93quYNWKMubxMzaiyJaws3ugEad4sRu",
  "key30": "5d4bj8kBoXdxMmckiHiqJrdpjevwKQjiYTvUDH3qUx2SMXnQ982Wpj2MRUWZRW9qBDLXSRU2wkD6VDNgjUk1C3rb",
  "key31": "4t4sCZ39U4igvwfcT7ot8fRQMftxCaxaAXZjKEEn9P4e93pnW2Tdj9fNEkSXBX2bBFWUBD4K2wVCUwNR7kDh7dGf",
  "key32": "3LEkAC6RUmiry8zKLk1rvTiZ1RrYZuPynNeUGSn4V8dRhcmuBGX2K7VV17SwAHshqGRxF2HvbP5penB2snbfTS8R",
  "key33": "3LRkwmkWqaQ4DRPj2Lhy95MrxNa1gtKmTcy6qoX9SLVjRZfdQnHhVXNZDSfSQn18s2vnWd4Ku8iedEsW1ZtTURJ4",
  "key34": "F4asxYFGfk8HodXsgbnkvJkn7cWFYra1UCsiUGSdA64XAk8AH8ESWpsJjpomPF7hzYvi4ggVqk7sjxoWoCLmgUb",
  "key35": "5zyJmZaQ2aUYd6A44wwGn2EwRXrTxen1Je495A7EokdbhkU49U4dPgdXwzzw3Rm2ZJvQvtrmniq9NmBH35GmQbu4",
  "key36": "u96jb8WftSTfptXgiUuhKB5cddJnGujTw6fHxnfUeg9v37nJcjjbzb2xiYuL95px1G5wBgz4jMUW3qEhKW2X9uK",
  "key37": "3tgj3e92ojTatH119eDn3pobS47QFe19jbhF1PbU2yecB7CTYx3Y2D3GTzpAsjrxXPPnGqBK1R5HuX8EyL36CaUq",
  "key38": "3EDn3jd8YtW3p1igwuDPmJNQ14ivZk53RtAZGgDWbiWy9hW7iX4Mw4e9bxrqL9aGrjXugTkSj8rq1n9gnZZjNPEo",
  "key39": "4RM3bGDwzFp6x84gFm8uSRcxYpLMJi92T4FrnNoTvtLgV98XZZzSorQWvDFAbyApkXiFizM9WGAof2FNrzuAaTw1",
  "key40": "3mJc2oJnuPDzBjbL5H1ioK1JAHAT87oCrHos1Tt1gdMTNHYZPP4xFkXUNALcCepsdCcd9985gfBphjWDZy1DqUXK",
  "key41": "5r5FuyRS5KRmBtdhZiCtja2BWjSJcyi9vSCEFBL6FHXE2857SAEBPBEFmeCbKHwMpjsChqq5xzs44q66mtwBctWc",
  "key42": "2cMwKd9Vp7LmPpPvxj2xzvaVR6Xri4vyZG79FTeUty3BeQ2FD65q1AuKinpemD9W4d9VxGzSKCHJjiERH7npKik2"
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
