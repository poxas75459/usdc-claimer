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
    "3m8RQjuXr7v1a51Fmr1vchqZWzz4A5QoYAfQYpNoiHq5TLmdCmqBfsY9tAwFLX6WAYhUi73uVciWLnMqhtowFVpD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wi3BkbBj5vmq5yDatKL8QPJX9anvRqtXf1L63NMi8KrEEtsUgbD8Be6EzMZVYQd9qEjJfX5bv2SHqeNNE5Q4ZA4",
  "key1": "5t9TAT1HP1Q8iL74qrTiUSkuVxX3GuYb7uYp3wa3q14MD5QPTra2bGGjo8ba9UhGz4EHGrbu5wPShwgtG7DQB3LV",
  "key2": "53gVKjomN7gdrbBAH737oD5vWJsdmKGsQ6sn25et6nSxBZi5Ng45TErYX5q2qaHvwBsyc19yvD4m6apJJMDEAzPR",
  "key3": "2BoejUDgCb1KFpETLHetiuNiYNuQo93x1WPeSLUqxf2PVs5GhKXAJK6c3XsPH4hxPq2TEXzuyfa3DWXhouitR2PS",
  "key4": "3z1JZW2mYcjToFVN1ZR1oKpVmMYDyLvUicN3ZNm3GB8swLUdqQq2fypfUdFczWosNV3VNRATEqxW8DeoM5HsgPsL",
  "key5": "hkregNaZQj4N5tGuAq372hnEdJGfMzR5nUd9172HwsGYibJyuz3nm7hw8CHFBMTkHQygWMs1xGwQuLMpkX888iE",
  "key6": "4VnW9rRbseBZc3Qs2YVUW1anBV6iP9kHfe3fyaxK8GQo4s1Xb6TafchGTgHSqLf1Tqr4ebGdDJMRNV6TNLGkNyGJ",
  "key7": "4pyDnb7sjafNNPGd9AMbMgcWfZHK7bvT4UisUJbZEs2pggqmoNV6o136mMsgzAAeZVokF89SuRWpfZwjGWTMvdKi",
  "key8": "4b1FDSF1uHB1A85XUheqhzL9ejXL9WE7SFHoMPNdcGSvRCDzTVhDHrPsoxyFduE4FJpPn1pix8FxmRYm7MqAxUKX",
  "key9": "3vKWVXfxEQvTmGBRRiA1dwLQPPgcEosK51FUBDTvLmNWNAwNvjLws29ErgPSNeAYZSbnXXk4SNj1N3L7baKNs7QD",
  "key10": "34fFHhWpoqjD3Jy3wcHThMygQd1akpwFUmBAwkVmAFC4qDq9zNt3fDTKtj51F4af4C3JJue1Vscb2FBcMBDMRyGY",
  "key11": "e5mcngQw9i5SCqYpH2qgoyeY11FLfF1WeowZgGE9icqYkwMUHSU9vtiu6KBtN2WrFyHQviWoVWrBUBK3jspdVML",
  "key12": "5yFGBw4sGC5XHSiMyuEBJhpvttbBbw3BDcTW6wah1aGffEv2aFcuxGpvS3QHYmN1RPH8F94TnZEz1Ae97inHWPa4",
  "key13": "2u7roeHoQbyGCmDokRMuxjKan3Z3ptdwj4HiokQPAcKX6cFTYXprLyzpXMCfoGqWUBVdN1EDBZtvyZjmSZVL4CWE",
  "key14": "35nZ8pG337RpjjEsvkUEYWw1SD69u5nJVTPMAWQe5u6c13Qrc9aiaTi4zTwn3c1Er9zWowY55X6K1WUBJBZT7ref",
  "key15": "3eebhLHwP2q2Sjoq8DN8tzLyqNBZbh3y7aMtd2M4c9EXvqUc2RYyvYtdnT99XwW1JQAy4Qbmukd9ZiFgGMkHZwF9",
  "key16": "CZ6xroM2LjW3pEKMEXLqck6VBAYR8FwJrCv7NttrRJRtXCxWst6gnSGkyuy9yAjB8npA4Z9pdu5DZ8qGYYYGcPc",
  "key17": "4dcvdg1oYxRbL3bj92xxmt5SMjbm9VToPnRNiWAr8Z3WM8GBUKK6V82Ngabez3aBhJ8TJxBShpfNXWecrwiviQpo",
  "key18": "4Wsm4GCoZZtaPMxU6Fcz9MR7UmDegtAux1BtLoeP1qwPDDTAvMs4Cd1G5qH48tcerCVYwBoDEevpwDrW1vEBU1ao",
  "key19": "56G4ycNgAfD61vHwWZ1WEqiRjfh46n4z451Mgyg2BhLUUVVpWr3VKxaDxWwYTuGKLGugssZk9Ew9dzxafBpTLch",
  "key20": "4N4BSxdSY2Wpa4V8XbwZ7W136GUppq8NwQivWQjzMCJWrEXtEzquguXK3DsDn8G6XCECUR9XVnHAYu7fGe5atAjf",
  "key21": "BF3e1r142xuQ6JTrVECgmYw7G6i5SDxsSH19AStQeLjoGZKbzadF65H3nChDTTxrNPnT29g1eipXm2phiBcxy2M",
  "key22": "j3LCCCQPbXrYkwUTALbVRj9zrdngXG9vjcroJRrKtNK8RLxdexLvCiL3mFtbraJqEasPUHMDijcKn6ejZtusX3B",
  "key23": "ARdAK6zLNd4bKXTNMJKK16Mt8QPMMBiRjfk437dfn6A3Ey49HiA4tu4zAWR8qFXKuRBAewGPvL3f3xcskBeK2gM",
  "key24": "kiLqfQv5PWofVWs63eoHmvf5GjApvjR8yNKuGHyqtQepZiN8Rcr2fDTBFznPdHfVEGtJct29sXZHXivxk2FcW51",
  "key25": "3AhW1kg65bWr5u4wNLqxm4BSQhXMJASVTqcL97Hf6JvtkXgXvHYZLP1FphZBWJryMntY1cC1ENyDv1o137R4Z1c3",
  "key26": "5fERQvY3DERnEzUghc1odwgnMB5o9T2uGtgbrhFsFY7etwAXyGCUxVyjHbx97RyBazYZTkNW1BkRjZ3rfSecMRuu",
  "key27": "j1ZMksiFLEgNDRB1RfFoUewkGLTEVR7rK7spcPXc9zY9ojQBZG49pMbqiWbejXqfNyumUbqqwwqJKtGMxndVHty",
  "key28": "4ZqJAryJFyKFMrntkbNydWX1m141PucVXT2f8XSf4gUbaaM5kJVxqRKwXZ9Eg1KFUNnpXt2qdC7Y73zQGdacoFGf",
  "key29": "tULeESLPE2urxddXj4Du1J5mcNiVmB6KBS65WssxFhu1MZ2buhHzUuTfT7ABdnxvs14NJQkuKPHQYfpH4LukwKB",
  "key30": "zpWtHyR1vJygZYefNP6JGYATQrL7kumrcSxdM62kvbuyhycZR8LPsCYoDDNBVCaCPpiV8mV2WwyosWYj8qyqfEa",
  "key31": "6DChUC8PZ9UFFszvUcAizctXpP5nwVjUNckbDeC1zLAgFtA37HQktq8N6hoEsuBsrt9kLaYNt22bEi3yEzzVT1f",
  "key32": "4U2gsmb4EicDhiWSyrQ2Vj6usJM4Pz1uwfXk5oyRWi1yejGzb1JNfZr8FN7JYxYbTpHrQbkGQkLEyg4tKdTtWPmZ",
  "key33": "4swKkZNEz7RmLrX9ixUsEYDqzCVh2oED4GzhKZQZnMZ211edFdUkS8Vr3b1RW5gP6dqhXUALUhMCQzsfxthbhJy9",
  "key34": "5xr2m8BeSmH4fMTUpTQDdwpd8xhquGJTqKVqD2cjVNmx1gh8Qe64tJ7CocE9dRaSWScsZ7QrGVP1THYWgdiXJuum"
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
