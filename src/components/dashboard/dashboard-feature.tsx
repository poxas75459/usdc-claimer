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
    "5ViaSMYG2Qemcm3ygDFzMWEbp3ZSm6HPBjS8EuPZb12xdYZ1DuKMceSVB5hJkYrUm2w3LaL73aehvKwkYpEovThb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4SwugVi3KW9yHwseMNLRFXR77ot78tX2fB4Ltb3bZH3k7QngFsERW8dXz1BinniR74fzgsW8DoHJJg3i4GwbQP",
  "key1": "3bA9cdz3RGikCBzzJK21UGHMjJQvHUiBBDootXRtJUy5g8D2VGyD9YXHCda8izsXHWKNiFuRokkZPXTjG1DYsp3g",
  "key2": "3zL7B4kMkdUajW99N5osiGRkVXJPcKtnnkZV71vm8Y83dP2djathN2Jc5AtjWxpjGAac2DxS7ZdgkdadZWB4pytF",
  "key3": "26Hb7NYrEvKnq5HR2iy5bftLdDS4SidVuvmfB5u9GoXZFFLAVZXNiUtjSVMDHExUmGe4uvSJK3efZNH7cfoGMs2c",
  "key4": "cQ5qatWZFzHHNe52YvBdYzc5ho6zN9EPqYz7iLyS4qmUHGcxSdeMed6YTtfjLiHikVUXqjWE6FMGFuRkwNv4fvo",
  "key5": "LnskWNffjG45yTS9X6UhWH84X5Q8xkmetQkSPoGoXgm3p2oLGrhoPSX6b3WN9ryC4Wd3M7FpeW8EiCMv6VubPRb",
  "key6": "JjBXFYfyckiC3btUnuGehJ3j4uKcW9ZStZo6AHYxGeUWVZTZUSHkK8itxo8Uwk8W1Z6qBbnDLy2Wk9WwsWesS9A",
  "key7": "63Ubegwe8Bi7xRpg11JxWBKdiTrM2735SMP4pFTU4zbuzvv9qmhaAwmL2BSpgbW576RXqe1qDZ6PWQ3qov5mWRry",
  "key8": "497ei596MzYe7KDVtdV4XyyYB5FFvDk3y3eT6k9pPB42NwBTfBymQb4NN1WMvSa7sd2h62WA8g6zwSGCaxyxhEiF",
  "key9": "4MrX8NgQYHQHt2eWV9RRYhm6JbAnTaLKhHQpAFaQAQgJZe6Zp5iDd3587ZZNHjooUbiaoZYphtxpsft13ykJ1rUC",
  "key10": "5moe1rJ1ccaKLxdZyRNPqSKnGsSotpBZwuTpvS58byK76rq9KtGt1Z6JaQFpQfynYF5K7WBZsMopn2K997B7dTRY",
  "key11": "YafS3dLJ1ibPFw5fr1jSGKmFfY5YZsFcF68JWYK6Gz926NyYJobZ8rpjAQ2mrCTnmDsxuWj3xJXmMkWzeWjnQBE",
  "key12": "2B2VGrdLmCDnLCbsS1287nG8EaJKyuL8yNJLphgQciAU4jHLFkHzjpLPVgFJqmkJuH9V6Zu4myu4dWoavse8UoaM",
  "key13": "s5qn5dygceJe3MmQMAY8J91Nujzqtbx6CG9prstJZsciBWpzrRuRpKUeRpppk8h7veR9SMnBHAZUeSdFPd1vwcW",
  "key14": "2v6m8ewVQHms5w5ARSQp7vPQEkTH3A6qZdpDVA7CCc7dWa4QGtybth8f1aeHQis8VXjr8Yxiaj6B6rWxF4whRZGt",
  "key15": "4ES3eGZyoE3eDBHATb2qpAuP1RBUZFe526rmh6qGj82w6bXppLm9qUcrVbfDqbaCnR8FHEHC7P6tLZKJ39PnR6iw",
  "key16": "3ahqXaFiRgCAz1vWKNUvxMkQqfttF3es7gBTtuSJHSGyHozM2Ng8fWuGBq2ZmhEbsg1Cv9QaPMsoBciity7fwmPL",
  "key17": "4mhaRQBQQ9r7S9CftGkdJhUwteLhfMa3vgE2fBPkG7NQEFxnVo9mAqQZMsS8B8EMEHuuuGiuYRMnhVzmMD1Ro2i8",
  "key18": "2qM27tV9AoG6evDyWXQdVJXuVQ7t7gaPAwpBsBBfmfobvZZRjBEus2qJQ4vXcLHSUNixkbPdVAK9QqxG5wJ15bNi",
  "key19": "2xStDu8zSoiueewV8tTkn1vMhMeGPNYvfCWak4jz59vboxwUTMdhEs1mkksf76QkVdDiJFQUh2zAtGdeA1tizJw4",
  "key20": "3U6Khoc9g9uYo3oqYZG412nEBPUE5bFBFPcHi5VkHS5gDM9QxnihUxvVTWCDh9QRVL8ueZwovA127kyXEU7NwEz2",
  "key21": "CYnSnFgEspwJAPt5KTY6ktoqny5g1xSbzwzuSFKJu4iXALwiqQUAK47MQE1oGJDv7BK1x9crR4ttHcuqPSJn3SB",
  "key22": "3zLovJgnKnbMUTtdXkhJtM1vNFj8rrhvZmkghtwEJoDmwYwdTzsAPGt1gaNAXQBWHjqEHfWVm8X7eC5NaZo3rAGr",
  "key23": "4vQBPQSxQjciTTwn4hGr15WGowHxN4MKWeRCHVUpuXfCS8aUnAc1hTgM8jx7hHmT9ctpM9Du6yyJGnc76eEEMvGA",
  "key24": "4T7B52zvDeTBjxQbqPYegMFP23YG1iysvBUYgPUHuw15oygpmK7hsq26HcCLtmXNhq3cqhkuL1bd7vPQWL7m7ezL",
  "key25": "K2aTjiJPdVkNDM47ZHeqphZq26BkKXUasz2McyuZJEQw4cwRyVD2ht8kWBvnmuPYANkNBmFwg3etHLfL66ih3vV",
  "key26": "3dYwGx3S9dbbQHqrQ9SNoTgTiMRFh92V7WGvkWgUePL5FkwGJQLn8cFgNwgwTJ4f11ESApdKNzzT6d4psGnAPEWS",
  "key27": "5K4hrdp4aSNARnXSsFrtECnyMBRRbuV6KGtYFkfmBetJcHspnTddzr154K3q6S7y1HUi1doGynZJSijN9r6vUTTg",
  "key28": "YyRQAmPFVBXL1QetaZDuwUZZVGMzZBNVwRYyMKdEq1uzdfsz4xyVxWcKxmFY3j59zqfq8S9etZggWVpe6dDbs58",
  "key29": "2u5CB6HNTfkyE5qJ1DgvkRAgzSPAWVXXSTn74rkfehBRq5krMP9b2QjiMsotP4ttbJMqpChhtco4UDoKPy6PruDy",
  "key30": "5FVhckzeXZkSBE24phuuhoziiWJR9b5ZPk3rEa44rWQaWUuC8z4MqFauoCYtk9NbBZ1aKVYMZXfbbyLMKawwfcdm"
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
