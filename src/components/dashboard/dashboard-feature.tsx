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
    "LkbuWw7e5KpBZkLEamVEK2SmRSJvU8DBXKrUZSoRCprdATZthnXiZsWAMcBrpeYUASQr6PvUzBZ37rsgen3wfgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "343e9Mts5RjZQg8nHiLumAxPzUYLLH7dNfhbV7VdXGwFcdHhvhwYvpbGai4rNQj6uL5HEdGo5fosRMsKWPwJBTDk",
  "key1": "2ruxEK2E55pNz2bNqnzqRwYj9VcWocEe9GteUwoEAynFuXNfVifzxTsaJnjsFNbmCRkdNvJpgmLTkcwzMAThmkcj",
  "key2": "5v8TjqLPBan7xrPWy97Sxj3uHcrKHaa9kbBLTYbkKhDJHHfTKzNv2XuH1rGCdy9KvEUzNBPaNmUiJM3s3qwZ3wRH",
  "key3": "2TrZawSwnvqu9MfRXdYGbZffayomcV3E1GGFNzxo6VWzFwd4Yy42Uu9K2r7jau8jXH2Tqp5PybN2eQvgg3p1KfH6",
  "key4": "FFKCFUD71jNbvTMihXX6qErvgZaVw6Fzm8HztJzXEpXqHk1CTGKxZ3Mqp9ubUvV8hCQf1cNvug5ML9wNdM2a98s",
  "key5": "3MFseadR5rHTUpUwYks8i675vUM2reSJrcjtHdW1saqLQT4juN8zYtp6RZ83dVfb25kXEs6cFkGDm9apXePZMk8n",
  "key6": "5PXPMPVMK2iKF9Nx8wDHu4opNWSCTHN9iCuzB4RjGKMPYNWSesyJ1gJJtfUB4MJVB5XBstwLn4mShxe7Z8L9LTLa",
  "key7": "2NfhWXzKm8TnfSxnrWPeirt4XKdQZvobeKsEiNai2FvfAvYnmEJfmfzUWd76M178MLpwtK8fRfpUskb9Szb1yEze",
  "key8": "35FTxfQ9zxSs1UmTHx9cmWPTTM6rk6zoEFdX9ppr1qmMy2ZBzKK1SEk9KQtSyV9YCvHgwQwCbrjsVa69679hi7yi",
  "key9": "5BHVb3FBif4oqTiFPn9x3fc9cLS8GVBrZFjEBMtJj1AKjEahG89nyFpmzs5tBPKtLEHKucFfnTAwo2VvQzo12sd3",
  "key10": "4KqBLCaQVSzx2Zfu4TYRQLTEEMdwPV1PGdT3FYnQBiTrkFChQgsSEjUjazmnNYXRWD1NCGEvEez9phAwdic1pJGG",
  "key11": "4q8Coy77rsVS5EWateHQeNJQ4H4arqz9JssWt44TW8N1EgTWbrNsa6qFGHobNfChnHcy3HHLhzjWKoWZoi65kAXK",
  "key12": "2STNhgyBVb3mXWxfn1w1yGcZ19xAYTRTpAhTVjojp2hSWWTvcZHqUHS6BB3NaNwPwvmASh4LmBu7xxbXoDKksXss",
  "key13": "3H8QAzVzPyovVTdoPDZLHBNbcUW7ihv7W9AXSdAPebEptRHXnyxVRpEhAYPc3RdL83h6YqDmfEum47hVzX91vff3",
  "key14": "315BiiuQ39zVpxxcPf3u5uYM9hSPR3jQWdXUDrcfNp72CxWg1EmHXyC2bQUBNYPhnSm3gEMKv13BjXqu43mqmgxx",
  "key15": "5CC5N7YJjsCj7DiC1f9yDrJixXLqkqeQvZUnE8wQ85seYXNnAsxwdf7eNFPNU1H2uWCgh8VewvEU4KasZumi1PUy",
  "key16": "3CtQrNj4iaRS74tykTagxScmvWRsKkufxmmNdgtGuSWa2HfstJBRjxykiU5Fe582mGAnFxZZwb2azB3XKyEfz4jG",
  "key17": "4dVZsLVCG7JCYWkmqJPLw2ESLT27r8rKxBSVLaU8AizFznKB71Qx78ZTLyahfD3nHqSqsYXvVvKFCPC8trpyVeMU",
  "key18": "4TaDQRUzyFgMrJRt5FdNQvtuSswZt9TPUZD25uYL1esyjGReoCgXb1F8qSCuTWnHzHZDhZ1FG2SKCN2MUsRgu7zY",
  "key19": "u24qcf8bk6ro4kTmWoacD5PXyCDtD23Xv9er5Kwp1ZwpShtu1aKYUG2kPSYdMnfGcQ9wmxTDReXVNjJMVo5psw1",
  "key20": "9RBwzhN4UG8ccFdU9zA86rZY5L9fT9mbwxucKJ2AUjAS9YoYJ15jM92n4ZJFkuRtFzJWdzSoQSHmDMtTmxLzGWN",
  "key21": "3UzNERgsvd7Qpw7CAjKGSA4jAsA14aF4EwDbEVLc21WxvRbFa8u9jfkYJbGdXdazPJSFAKXeB1vxHihNp2tdknTC",
  "key22": "2zMMM1Db8LZUvfkGrqVagMzQFdpDmDzFESfDVRZVgZGHvpQARdmNLJWbUrmehuFPh5HkrMxMzKfB6RUhKqruoyhW",
  "key23": "3aqEknoqHzXmDmuGkgHPYSaUGNvLtNq8B5AtYejudRqJjtwvacFqdisideND2pWgVA3UZ7j6LfH5ujpxrsgZ3LjV",
  "key24": "2Tu9GqfCiMBYBpsE5zGD8bS4yTrYPc6zFsqpd334Xjws8Duo6FqHP2x2poE2hC8TXmdNCngkMPUTsLoRjLB11uvG",
  "key25": "2niEE23RkBdAYWqsXKzJvXzG8V6U429NeE2Me5JkgdYZG7rc3xTvbdoQneBCgtb4RJ2LkvFW8LBoWNerHybcT8fS",
  "key26": "Tpeayf7xSMQvhDzSRsJvHjNuL92W2x4sWg3jz4JUwfzB7yYCSdVdgnviMotX3C98PbLTv5S9vqXjH7GzTZAyLKx",
  "key27": "pNRffyychJinZDgHDQPKxUHsrMt7U8geDYMoZ8AJYAgLmg4Z5grtpsVtteoH2uMLdNKuuBVZbJD6VWseDoB7X68",
  "key28": "2fR5NPn9AZ9c5gAQsn6JKGiN7M9sx5DB9XGUwJUVzhCtPa7Ehepucxpb4raPBtr8XcmMQb6EkM8X2ZWAz86QNsu1",
  "key29": "4C6ZNsLg5BGjhQS2ZdsznkBey2Ef5JGHdavAHJkhcS5GmeUQBajdFhAbdodfTwC8cytcSr4V7pnLm7FQsTHEeaL3",
  "key30": "bciKw14KvFWsce6zQ6kvuokNzPDgbCEU8Jf81dwBArkLWZM7GWudpqoUwoAoi2bunwnewsaG6GkgYZ5A6pcsjpy",
  "key31": "4PUmdCkqGc6jDvjkjEZEwceZDHcXXdQ1dap9UiV1vD3vRM4EyyJxtG12ACAqP6FdSghUjXzDUQec4NTZQK6jL28",
  "key32": "2Qpr5q5ogiWfJSGeoft6fMSAojug6EPifZ61RnRWCARMjqRwfz5xxsH1Supu6fsFP6kfhey58UDgMGiqsLVAgzrG",
  "key33": "yy5voDbc3sSWAyFWbU1zqUUQgPCVZQ3ann7zbfBtp4aXcEXt162qieayCktwB5gWsosxKZoZfwwynV8jCmHGnZi",
  "key34": "3jpyju2RJGwxPujJnc3ngtXocRV5sRhGA3qFdm2BgbxaSzmTnpDyD22aYMYdpLMAc2J2d9tHX7upRfCBxcuCC4rf",
  "key35": "5KkpqYXGV7bDc58BqfvKvZQ5EFjasaH1LCGawxFngmm3acwGpZhyA2znGLJ7TYUa5JpvB9yCUxzKzyn3oapZBP4q",
  "key36": "stUU1Puy6RvDUpGs4zmGM7PwxjK2rC2yrLYuRkTxV9tFCJTREXZ4XU3F1jJUYS3dxQVR2ZTqQF2dW9jJ3dX8Hmx",
  "key37": "TTz7XNin79t6EZEbc7vVvrL2HmWhVn8tUtoDJaGqqsa341n5EtkTaoEFQaHsAB4vVNyPmpZPtXCqPCCm2CF1wp4",
  "key38": "5ZLsAiNnP8gHzJEeHpjnYsFoTYgrEk5ypE7JbZNQpQpy4gG8h5RJKcXKVdMpoF3989325wjZcA3nZHPi6RcRt8wP",
  "key39": "44ivtpFnsxDTyUmZqQkJDuo9GcGV2viVtEChMn6CAPv7RM8AHgbhbufSdAcR2u8uLZ3uMYupBHjxFek6RQqMqr9r",
  "key40": "3KRViFmiX8MnMDymZLTidjUm5jfkoJhf3GDL9pJFgzM7VpQ5nbfFPjLv6vM8tSc4gWTurrqhv8N7LZjxK8gwFCf5",
  "key41": "5VpFcMKUkdr1uxRV1ShJ8HdUUtc8hKR1DhHLYMHqwTzLUkDVEbsKDzJuk9cTNYsMNqHrqFghnGof1TK65vZBFyBM"
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
