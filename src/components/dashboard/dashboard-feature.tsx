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
    "NBrZXP86FSrAjN1kFpnmCnBvu7cYiDKuGhXcEqsEAwgTtQVKPqmZQHB6eZLsrYEwCraAA44PTZsbfvz7gKfFJY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44TnwbomWzvKj6rzLuqAnKgmegSX49q2R9n3xCg6a3UbYZNZ3xHr83eMtfY2xCvdeGU8Lwcc88fcAbpAN24G8zTv",
  "key1": "3Wod6sojQ7cXPEHZ2TKMy7r4qKsDg4BoAr7zACSRHtQodT96thQzA1siyqrP8DUxkM6R3jwE1JstUVDRBUFjzbRq",
  "key2": "273A74cLV7VSqbfECGGXJ6iVk1eP8yQrRbccnZnDgRmLgBmdXrH5kisVv7f5ovz6N6FZvd8RUjKuZWFqrEA5o4Ho",
  "key3": "Q7gZTPjoRLJt9xdCUVPC1aBTqLPzCRFZNytLdCAqyNyQd8jz4V36iEd1p66UpaVSQpDHTgjUoPpkXFEwVzcGYDo",
  "key4": "3o8t99sZeKcj6Qk1A1aP87hh3L9fuLgWezts4KMeyWo84Ku4v7q6WkZZdHed4SESbbpcvUAqmjMA2V23SDFq7Pu9",
  "key5": "XEQDpw25DdREze2n1YGJjgrhb7jgXrL6r857g119n39aiyZUUhiCuDLhoBeuUJHiSFcr5zTBjx4SVzGqJJHUNnV",
  "key6": "4So3VQDnMoGsCUibT7VZkB5qMrurfw643afkacafmsZ94x28LMq7nJGihbsWLEsif5JdVRtEBTmxvGHxgcYABfwJ",
  "key7": "23jEPPYod6QQ9EmHChy5MTC4PhxFKDz3raDMht5PiE3Pzr65b2ZABugRoJK9iCH489PaX9NfVhKsodWo5TksPYAT",
  "key8": "2cSdoHM2SNBUf4QYA7imqmhfx73ZMrCDxstwAq379eSCoB3bYjzqk1cU3zU8MXHUy7whi1HFY1C6pCdf1VANEBBB",
  "key9": "zJ1hD9W86GMj7PgVznJ6KwSgJQ4d5PAn2cAy7RvL3TLXiLVYPDErKiNV4dCRbKDYV6K3Ucsy8pxfa9P83HKwYF9",
  "key10": "37C5vKkESSH1FHCKymDW2UgjooZXcJhp2Rc56ALjJeaAueCLf27afeZqqkSqJEwztAEtF8yrRcKf6sgHTjwUbCsf",
  "key11": "4wXhRqacAwus7o969ZUjytGoXzC5wWT6ZMMKV8rVrXuviy7bokr9jRFtX9o8MYYvpmyxWu3TXMrTSs1AThMwYWkF",
  "key12": "5b3RQ2rNeWEMASr3Cvo9MpVEtbpa8nCZPLKAQn6dUVy53yd3RyBcQdMHz6F6bBJkUCxhTkovTCdvqZWi9ovWqiFp",
  "key13": "5Fxzat58PrSG6b74J2KHYnCqtyZRdNh2qbZeqSchua7VtyKNBgzh4MdggmNTCRJhSqupGw5UYCAr5GdDzJvjZ3Uu",
  "key14": "W1Snw7JwQbmSeZ9bHjS2SYm2muhdjFiELUTdJPoECyWwB8Kch8bP3mWkFufGtArRd3CHzLCQVku7RTVUg3ZXiiK",
  "key15": "4s9k74u6fivBp1yRMUEBqHwKrU8oQfk7GwqVLuiVRKqdqiLi5RahXCgMQotY6xqMCuc9DHrY58WaxgapeHHE6JKn",
  "key16": "22LcMiddXDzgP9oaVRgRvnUU6WoDDhzEYaobYJzJ6fwVfbEazFzNJmnNgGv5HFKSsW7dPbHMPfvfZBFdJToPbmzr",
  "key17": "5VCawTiYMAvFuMESrxpuJdjXNFR8MmQtf31w15cQQnme2iq8n8gGdWQ2ySpkkEhHczidh9w8Yxk2dYqSpmJ1Trhv",
  "key18": "45VQfzCbD3KjcvjuejZq6ahCwbN4BfJo2QaPCLMc6YC3Foi8G9KX2cf4tqadFXNPGmz1khZGtfvwxHHnS9WLH2UK",
  "key19": "3SSKj8it2E2Q8mwK4X1xJSGrhUzDhodU7LcQGEDyKpTkafiXULuDSVuGxE4q7gZdZbZg4v2wRFJ3VZQDxSvfoN5b",
  "key20": "3TQRezqHyBGu6QNK2h9C9Tt7xVJvQDTVVSXawzdVXLdi9JefWxJe1xUJhQv2hJcCUpvdrWrC4CCEpPwNEuge6vV4",
  "key21": "2ZVcntYoo69pFWWzg63WRjCZcWA7qrW9g8jC242ZW3n1w3X7exSE2VvGVR8p4fok7cwPgccNjPWBQaiQ7yvQGjZN",
  "key22": "5tzZCMDmsNwFyd5MhSc93REhsZCon6ikN8dZRVFxs1MLwz7GAfNgVoKynXuy28BLhRme6donTbCrJRNrn67TGRnU",
  "key23": "3YKZZy4SYsJqLjBzDLMFT5tdPsJsVY3FuP7At44De72bxTLK3ka1JyGQZcfPkNdsDfE2Yht9VzYWnkSRueFJA5QW",
  "key24": "2bSW6i66jwKRRaZ8JCDVMLVdHQusuGQdh3zpkmx24orYyViC4Pvrk7Rj7PmXVw1PBfHjBRr2CxVSpvaVG1ZqcQze",
  "key25": "2ZRebThD6v4dhFPVR5Rs4Wrrd5j8AyEzbncMv2GRDypsxH2ZtFqc59KKuGGGGBbZhLbkyK5fWX4D6YQGZH1GH2nv",
  "key26": "372s9NAir152BKXsx1ACTEPcAgRkGZdTVGUZRV19EqboCy89EUknKnAFC5Kw5TxAKv2ZRfnz2WN2MXvdhAfbvUiu",
  "key27": "54BDq2q3q7PaLfnP5mJCnTB1Hpdtpj4rpUWPTFSwqT5q5GRR7qkHKaXu5VwZsktH1wef2Wccgu6HoSM8sncprxcD",
  "key28": "4BiAHmcoqfj8yZpn7Bxt6itGxv5XoUi7nW6rNrpoKPqBKdK5WeuFbwJCskZ3VAHdBPEophoNqJ22UnG5Pa12bdQq",
  "key29": "2d4CdcUr85L59EdEt6UcWZzEK3DJdvwnuZyu2Mp6q9HqCi9RgKFRyTftPhrD8AQ9nm9W3HuLqwPRoV9xM1qVgnjR",
  "key30": "4ANbdC3FdGaMUVWtxmdpJvQUNiCzVBYWXKd4AAxAw4myS3Mz4mGUwyWEkVUxqZaxDqQhS3B7uPcQGEFuPpGDycTt",
  "key31": "SXELnDKgSrKRKep5oPF8BaCyJxxUQB1cNKAxLyfjz8TvcQc2phkqgy6hxYNNoUwiw96zQN8AztFJoJ9tHQLjABV",
  "key32": "2G84hJwD7jXFuZ8GVvJ9QPjTsk79RBsU9E7tqZg8yKY7RpPyauVZgS54nD3vgnXEeeYkZn9kVF2RD9ajSSope4n7",
  "key33": "4c152NxQ6pV1iTnD3WoNB7Gvs4Arr5hhf16YcwJx2v647rmFvfzpB5bKYFe39X7rwQMyg5RcUAkQ1dK9pCqcqTQ7",
  "key34": "3GSbzS91vARASddPGbg2kq2F5gpSPoqAAmGjP3jyDb1ojzkS5nexU4VTDPPfNmUTaoK6yuckMAAfZ2G5mMjXawuB",
  "key35": "4Lvyfw9LBGqr2cYzgw3zqz2WZQm4E73LYyNzuPR9RqdGaNFSk6gPpEc1EdX1r8FCJtKyzUh6wyqA3Cp9ygFTX6Rk",
  "key36": "4C9NVydZ8LSV6tWHWzCj6gkUV6BS6zEQG6S1TYaGep8meMTAATPbu8uMKGicYFfdg54MCne9EmSyyPy6vM4cgKjb",
  "key37": "3UZH1yoMJxC4h5D9pHZq7pw4pUNx2tLhKy97kvb2MpJqAgd3sFpM1hG9ckeNE73ZofrTCopTwKb6sWYd7XFGiX5s"
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
