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
    "5Swow9Layad18CwnErGQfeJcgEdfV4mS1kAYNui1AMznCA72dBk33Cp9MfdthbyXeBTNNYG9ovc1wrfeip15mnt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nZhMuqd5sWPKNsgDaX8wJECzRLbA6D2jNi1nCTA2rLTyhtCKekYBKyAADa5wU3viKZy5S4zrRLP94htY4RcdUAr",
  "key1": "3a9MrNKQbCfnZV9WFnvo9vWQ55qu5mWaUniPE3cXdbgkywWBMKo3QKsYL5cvkJC2MtHMQnZeGNTyu7rfyowfgWM4",
  "key2": "3DnWXYGTQDqMxYbh1459ZNyY5yujncSUiw7WupWZxgZCxPAXDtJ8UFRE2F5152s97sesMCtytMidkmaKwfLtrPHQ",
  "key3": "4k4RLQ9DUd1ZB7ZTB9o6UUEaHArscfrWvNWULit6F3Vk8nd1pSvueheyn6B4NcTkFxwAJTn3yzYCCp7acUXKQ9jX",
  "key4": "5gvf87RZDn54quBWaQWCWqDXbjKLRE5QH6DvLPypaUTLDxDpZu9fUD9T7V2aWAT6vXoU2vutMXnh5Ae4oyNuZ3nP",
  "key5": "UKV6W7ckPgVDMMDxFYNExa4yhJ8zJNvE447CmZAgPAA8BSfQbTyHpTw8dim1jp3kWBYxS6WLuRW8jigQGzhKNxW",
  "key6": "3e1xQjVfQofLcyGyHTpn4KK3NTLFGLgwqqKXCDznrJgVE4Fzd3UTRey3BG3rUSDJbkuRHt3jWATUGkoyf36Czps3",
  "key7": "2eXAjB28TKu3prXAQysD9f2jwpY7S1o9Skct5KJXqD7AaH6QiaG7nmp5d2mcn8XuQ6jV9YY3pucVASNNZEfMyPUq",
  "key8": "5a7pASh71nHDp2MqUWeLwetC2g5zmtca9oUaZur6kVngU9vcfcXcUzcMEfoT2hmjTCr46c7U48GrYqj59JFJLDd",
  "key9": "3dJLEGYejwYSdCn9nzx5wVU9kMDBy7XnYZJtq1Wvn8Q73ou7iwZ3VojiZdLqApmZ9uVxum9h9J7eDpNfX4tgXv7r",
  "key10": "52xWnJhNtEFvSD9EMz2T1hgEXbAkJUwNz4hJyiPT7EjxFJca4HTNpPdtYufxC9mCAzKmfXVuSzh5mYYWfAyY25JV",
  "key11": "PUcsboQfycUTaxHyHhH9GMqH3gWNrEMMZaNjGtoWzJRszkiLHvkUTwCyCW5zXcJ8ZgZA9vUNcLkZM3M8XNDXAUN",
  "key12": "3SNBtVHV8CEjNfrzaZXzQwx2aUhRWFDejAgBCy3Jp1qoxnTo2MY8mooJT4vB9vmik15L3QW5YShrgkXgKiYsTnFe",
  "key13": "3JfJ5Z4P7zJ6ohvGVyBEjso4xAp265nWKry4AwMSR4X1oDWb63jukdvT6vAH4HW7P4n7skBdM1SUFZNrETauDYM7",
  "key14": "o6vSaxfEeTEhS6HjvZcy6A8z4gxumGpm948VcGvUaMxv61Lt1K95H96PUQMyconKfyidSjLRWusEtFesuWQ3ZRC",
  "key15": "TVMhK6Lf7mRpcZ4v5DYUMbyepwbi7qhjVdVR2WmrrAPthc6qT5EFHoA3sGQ4UbhJLmvW2dNqqiqUzMwp6Ri4aMG",
  "key16": "3gMLLkjDyM96nc4ndAGmzLQ6fY4fnZCkf9Tz92FyqMxtadvDcQjQ69u9D6oWmk1Z4a6Q7Y47SJJ84C8VD55bruyh",
  "key17": "2JHVLVApbuLGcDgAjWUQEVA46SfnuxGRYtx2dcUiyrxmsNxyxWtUnLm5sUcrKKMyt7vx1p8ifm4aUxmYAkdmfD4Y",
  "key18": "2Gzk2WZHqggS21hbE4NdENggeqX9WMcHEqeh6QQDJWo4y9vsndGZ5gBXxNcK3x1QHtWhcieLi1AXwY81UtXyMmiP",
  "key19": "39DDwmSMyjHRDYRnsd1EXZZSbrkZGhgnFWmitvcQfgk2btP2aemPLFejPRqh68Y5y7RnxungNY6MkSK4t8ckhQY1",
  "key20": "4RqM73azf2tnfD4YYoYTVAo8BMs442KiQu78aafrbj25XwFYgVdaEDdtA3JtoFdpuUzbCzkWy1U6n66K6HBi8Fgh",
  "key21": "3sqkvJiSygNdWjjMqFNt5FQqg5rDH4u6nBo55PRH3eSePvt8b2eNFCRtn5Exq7o8DhyWWvfL6UXExjqxrkAohnYj",
  "key22": "3y4qLi9Xqiy75WmjS1tgVTRsK2Jnsmu2QwPoT4XgENj3hxfEJivGRdUuJHfNawDCwUTDAa6WVNJdJxMRL3gNeRA9",
  "key23": "B39zp2rKtQJBC7HvAVm7Jqw5LeKKbHqjfgAZDe2JRgJechL5WxfuPC8n33gmDAUtW3tQ8wRVqBYRAeBUTBVzxRJ",
  "key24": "4jbsPu9YDsixwCSbW7xrgzgwYr44QYbc37xY6AfVQjrks4S3n4DWtRYqZpyCZ6Ricy3tHzCprbtz1Rf6vZXpzjq7",
  "key25": "2HexJeMoQiNB4RJfS5TSPY7dWS86iqfncJRCTV51Wo5zFE4WAdkkDSjrQfHQUApoqqZDJtoxLwVNhbVJy9XAnMV3",
  "key26": "5XRQAa7D394h9zb14wKo1YhCozdrXJ3pwKgYuKGtYMXC86rmyaHwCmRLABKsB227FFMXFWf4RPaYGtGBA3G6u8mG",
  "key27": "h1fvUiaX7GVtuT2CeQQzSFospSQy1tya2CnZUTgWaDXrnPpHGHvRP3eSZhV5sRMNeo1k96yCCLLyMUfYzKLut2w",
  "key28": "35cjTeXNNi1D6TDNLR27APWiYhMx9QzHUKaHFyC187t1bqVnELDuqiwYaquEc6GfseEUhtBPkiDAdNmzJqpwAyC3",
  "key29": "4Z6QNrHeDxTfw5ZbKd8mCnkZdYfAmWf82uDFUZSWmYbj17c9L1uhiLFfQHStGY7GZGNKGYFDiTTFep8HzQNJ6Zg8",
  "key30": "37vy655zLo7TS4oGg3mvj69E2BQURQs3ne43XDoezEp1VFBfoEhRxHjbmPxV6QJFQ6sRCfs3nkBgX9DPwkFtChJG",
  "key31": "4hyjZ5fMCAiuYbaCyx8ty3Nhvxv74KcHvv9Fj9CoKAcya82eLA72MAZWh9pujPgn7obGd17yBXF5NsXwCgb21WCp",
  "key32": "2o24jzCsdTyBygiUvatRTyy3vTJXbpvN2NMbELY812YrRxd4odonBWhJJX8rUvmTzQyJXx2Ae41KwRy1Ya9WbHfg",
  "key33": "2AkyXePXU8FBK9ZV2B5Le5i6sh3AHurCwdiiqoVrs4nTBsg7Tew2jk8LRqCBNtDkSGstrGua1qnLsgv5CCmGDTih",
  "key34": "TMmwdwXDajLJybZtpstWD6u2uB319sHhhkMnK3XgayYaqGeTFZvct1ARgHWc5rp4UAqdAMoRn1XC93SK6KQJXi7",
  "key35": "MD49UGdVTSZyFNePWhZLV7cWLK5py6FmHr9po31d6qb5T7JHnYY7czpKv6wiZPySpfZNW5FMdUoxrwwsYvXXMQv",
  "key36": "4ATprecLx7EUWVJ8s7tiMGkEBZaSLzswPToHaMfARAwQrsoWuzbKqcV1YTXHjcBeEnHhiMEC6GuBuho2nnweQQZA",
  "key37": "27FiEQyggM92yGfngBZxWmxkeNn3Ycbtr5Y7oVWPdSvYbBG5yN28d7bCNo6vQDV6isS7JHBU7uW2gN84MFTCEvnt",
  "key38": "3mCAdAVbHmU4ojSRJKvqYvJPb6U7jAH82ufsPWsGiTqfTzwazDXwWYEwx1Y3YNFgUg9zmjyAXLNUKgWvvdtgyJmZ",
  "key39": "35o4BMKc2JoHEcANHZn5VvQDeazfudjR9g4QehLHRfM9AbcYknhac9XvWEDxXVa5gK5sFM98TZ61UPiBeyVgDHAo",
  "key40": "5S5yLhvqyfxXyz7szqmXMQU8WXaRf3tMvFxPm6NTYEPGXysGygrivNnHsoQi6rb2J9Y4kWcQ9vwPvyaoYMWJuTDN",
  "key41": "2P39UUXtwQjcHeSZDe3f88HnPqJvpCNzHAJ2fzuAFArXNDFGUgAHgM6EuXxceZJYvHMAyvrPP6PzS2yD2SzJC7DW",
  "key42": "3NbmenmbyfW9HLvNFxbSYGJftovgr49tk8yZLLJvmpwMptGVo7EjTyW9UYkshBMHY6PNCEA7pv68yYdC3viEvdkw"
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
