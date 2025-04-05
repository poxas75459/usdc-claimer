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
    "3rhaQWxtgkfgGwfWQ2x79tzjwbBPuN4dgcWqEDp6DjsthkFfqVHeawCDVYL9vGBuV6xE2SzgtPFP3PFcGo2ZtuDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xHKcGFgFShN4iD3XNLUj9vtfAP7HWdfhWxP1AugBp9U2Ks2qw7QchM15Jafuhf7LeVeXGoUy3Zbmm6kLE9ZZUxL",
  "key1": "4A3TLEC3P2ggDg6ojSAfYUe97Cv6F42f7cUheLfZz4qMpC2jjHfT1hvrRAi8SXzmnX1CfsNyzKoeT4ejgkHVnHua",
  "key2": "3zauBgCxzLQfrAfG75mRCCfw1K8FTPHyu4kecohkXmSRiZKmTFNTiSBxHbR9ge4oCN8fjwxjYBe8kujtQEh2C2s4",
  "key3": "4Es6UwfE2nKpgqYdVEFD5bwbYQadPWsDaTLfMnXSrDp3YGMggFN6tx3ZFWUViYMCjTnqFuBNktdofsPoC5UpGZDB",
  "key4": "5B8Qr4YqiCsAfrotXZ1efEBYiAKnPm3AB2Ee7YWN7jDqseAkxsRS4vtaJ9tyWwtykmxGog9ks7sbmTKTKrBUrVP7",
  "key5": "5UoUuDBTP2zDffbYFgeuXgcbdkSU1avzEgBkYXzdf3SGieunBauNGUCDzQCiLA9p5JR1czQ1NcDSwbMYWVGETym6",
  "key6": "3kokR4ARsSsCuigN22kCgqab2zuyA7qtWnQJK1E9z1phVioxW5dmpnFjhbjt37dgLQWvCK6JkSaZFuJBomw1bFtu",
  "key7": "2w5N5ZXKuLpuQfFzuQSRQpq8mWcTWf8XZ4wkjsfnPVNcqi1eLHMcq6GLEUVq7nH6uYMaGG7wv64vNFFfiXU8cTBZ",
  "key8": "3uYFie9wcS8YQBeDVqUiACDD1p9hhbd1W12BZCjfGuDwaWE75VrbaXW85tCSaF3nrGvNmzRQPFUjYKJyBVsktG2F",
  "key9": "4Xd8MhsRpFSZQRLDHXgXCV82BkJ9GJKH7mYQULV8QfFaxdMkiAdbQCpQvaNJYh13Cr24TPzgti3RsspAXqgEwAtT",
  "key10": "5baFH96ZAg3dCz2Hy7RMR6sA2UgQ1n6isqo6HnYrbuUCBffoioftmpdUY2SYReQKhdNRiu1guudsNp63o1mHxLqo",
  "key11": "5MQ439qxq8Loz4DSvkBLVZosqkjb9BWXuY5UhaUAZP6c5rphw9GSdbNHKKgjECA93eURF1qmySvpyqRSH8a9rng8",
  "key12": "2uyWC6boZnKKRZN4ovKESrM2rcfxT9ZH96YzyP2o3Xqydm42AeW1vSchc9uRiVGy9ibq88asAUc4hvdUvAPr5X5K",
  "key13": "3kDiinR9u4V5vsHMxKyLPJDGvVMrXnCUporJDswBE61RqFd5vqkx4wYoVPZamBhdukgrLLWQC5jpVXBADEubAKis",
  "key14": "44kGh7o3M7UvWJsr1b2GA9F6EVRMKtUd2AMAacn1a98TnL1fcQCuXr5hiJVrBb1qUcZmP9AGkBRGPrxohFi79JRa",
  "key15": "3Xi1LyQ4bCcwa1xJSURszZ7sWF3SuuHiXA6Q8rqDteXLZXCaBrs7bpodznyvSfLZEUakiaNUiQcSCDeeDdb4Uo3F",
  "key16": "2LyiktMhKCKF3SAtGj7W2W49QDii9aA2cyJGrvBGxLZNku2NeYtr3FxLrwZP4M3fEdQXTHwFd2Bs2zjWmRwakC5e",
  "key17": "wCgKfkfWYRHd4d1nwgtWYUZUAQDXDwdRJvVDuiKWQyugaBei1UtRc1r8btr9LcqheViRRLNo3BcmmRCAMLfhb9h",
  "key18": "xYGGpc38rHreXiqkzM9SonFZUvj5M5MZYP2Ney5H1icxib8okPPhWMi3QMp91rCud6D7sUSUJm5pLpyiwDEwSrB",
  "key19": "2SGQerpCEZry42WU5V3ny9qLekEb91zKm7krJoWeQXwAMVWpXKRpbBh9k87y5n5D4gXCJmwrswYnqmWAJGjp2hsX",
  "key20": "2aAsFXnDt3ZoFTMxAAf2aZYESqy8226DKBqq5CY79jj7cmGmczXe2J1b3xdVjeznjMARctci2jxoTqDdrMJKSZ3b",
  "key21": "2Vpj3A5AyJqPqoNVXZ6F5DvFA6vhJ9A9dxvoE3BMNgqX9vyCkvvbc1BqzK63BpqmzMidcvwjMLNZ1XekCcXpg6iZ",
  "key22": "2A8Cyrgrb6uzez2fu2Wicu89pMhNPT2PrSRPTv7zRVnM1P3HQCpJa6ogJoubxvrCLWzSr6diXaBH34Qo1ErFkKxq",
  "key23": "5oASgCMwDjYcaeUFvfQpA78pragaZPiSVuno4G6hLFQUQb9baAmxZd2rbDtZE5wZgPy1Zz4mKB31n8Gav1qi7E5f",
  "key24": "5twheUK5dM9bs7b95cyaA13e3vK8GkDccPUEc5TLfXhsx5vLXg1hWr69AsArn6YCJ2j1eA5tJAc7ZcyAHNRKGqNg",
  "key25": "2ddVqSF4AVx37qG6z2mUPBM6mTvLkRtsnQ4UtBdU7rnPTLdCVnjGaJGUWwE2KUDRStHRkaqDiawjvgpMif8QQWm4",
  "key26": "5JqyDtxZtBWR3WiRG1JeyD64SSKqWJeGqVU5AWQUExiw1ZhqvqMZRx86XLQPVoFD4HxGsV2Qt8jhFuEfTFd6YH4c",
  "key27": "5765iZHb7EQm9tnkGdBd45Aef3vVjzhBg1uWbeWCXA26YNuC5s7UCtYqVs9J1mcBynwmJy6umGjBewrxGxjPwEFv",
  "key28": "3oy4k6gMjC7bAGjFqanZvKBzEqPSYkNKtah3r6kizeCafdSbXQDeWUUgUgJRDZquoYGgBLNBRDPyAFcmHUvbbf2a",
  "key29": "2bTS2wERf9YDm2TzwWAMimbyuVCF1F1mUhEM9Yp5UjMLRHE2rCze39Xh98Wi5FqMpz3cG4ki4UX6p3GbBmpUJYMk",
  "key30": "3usV7yqn5oo3JKcipzcxtghjAWELwjkpdn4LR4AJNKuNZ88dwDb8VSE72VyDda35Zh14QsRSFshM83X31NRGfZhj",
  "key31": "3GiZMu6x9jUhU8FycRw1Je9GN2HDcEkWbmZQDR8sc14mR19u4Numcn9PXBAYBmpYfMK9nxp83JQ1cGtU7mmGZRHF",
  "key32": "31so47yxeZ8zbC6KvQvR7TeCmXHTQirP52gf8Q5bUqyX7SuUnrNZWuteQryd4y1MLiv4TMzR4HepfjUjE54NjhRe",
  "key33": "4GujJJwxNw4XNxUWduLSQogPnmfiJBxuQ6JC17CqovdUSZEfbW75nnvk6Rq4PSfrTUZkrKZxVKhgW9kihD4uqDcj",
  "key34": "LNdRr6EwyzyDbnbXxXWGeWaHrRvnELQh74DemUzA4cKth83AxCq4pdrDh6Nb3XeKS1wFKcqusvsTm5mso8sdiBY",
  "key35": "eVtPJDS28rpoMMoniueybrrKeGBUVLcSYdZrUTKHCSo9Txok8P4fravLZ7o3cM29qYnbownJzcJfin2q2yydumG",
  "key36": "39ffo5sVAV9LmoHcuXsxET8xWxn1fybgdXs3wrA6FtpwCZvJLV6zcekNFkoULFu5bseVfVDpDQ62PnRiKaiHwNu2",
  "key37": "5tZDKzifYnoXotSTFqjyVzezC3Cdr6UsiQ2S1S5kmxdhsDS1TLLzCkgWFMEpHPtv3ifLg21c76wDvfEorZJGXtD1",
  "key38": "5B9mwbZenLTX9KAmn8tRv7EGrxNwVK2ZD4phinukswt19SC1Un6XTrjBeKngvtpWmhBBWMcvoyKJ94gRNT656ngM",
  "key39": "3qEzg9mF3Uh4sE1R8GvxMZgZq1mbHt1FFzVzD1ddobhumyAzLhTbi8PxJxN6RQVsKK5ZjK3mJW9hzqhTvfGMoDhU",
  "key40": "eNC3rjbKARw8VBvEyFa6HtJyKnYVPoZHVeFeKirsNVZaAqoniGxZqNNsmwX6sV2NtbRfs5L6MvwJCGeMk2ZZa4B",
  "key41": "2x9d5Vkf1yzgLWYRL81QpjXr4vmyWrHK832CcmGjPU7up5tJeUHQchZcusDGvjsY9fhjb4CQhicpcSBCn6H6U5cc"
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
