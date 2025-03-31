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
    "5YAVqWmKofWeDC8ehD3QaD1kny5xyuurKXzNx4x2AhBb4V52bfjqCUxw4XLxrxDFoVMakJ3NFCf17rgoSSnqQKw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jBr226iKrXKTSpBhLze9g3gUqknhpZSB7K9aWqVxT7kvhg8FPYzd1mZxSXBMMaEcZYeF8ZU1rKFrk3DXeuH1eGN",
  "key1": "63Pjq1mUKoZqGDSLRRFNJvaqcGQnVtq58YWaCnqFrTNqpoL6JkzwSfMAcyWMFCvB1NZggZ2Xk26QZ8egpnFMMdSW",
  "key2": "65kZkfBMKjMEd4bGVbLJXeymzwX1GKw1NjWFXk3Yq2dZKv45TznoyJBDbBTQtGpyhzcBJRbCzNUj3sehNhzum9co",
  "key3": "4eiMVNY2fFcjsEUP3BRiuN711kBDp644ypkBiFconcGuM6iWV6asnKBWKvCswfkGQ25h8tP9wHeLsArbpop1Nyu",
  "key4": "5cj9yHtcFYQhZFzR5TD1bbAeAgKNhXDSM5usUBF6RYCvbB22J4QXk52gaoen996zropmBDF2ykA3Amw4de412TTu",
  "key5": "38X9rKtpBZzoTxB2PjFVPiXWNZ4Uzt7vzCYZTJz15iqsrSPSHVqd4QPnhZbWd7AMM5ufhEDFN88kJC8bzwyecfXY",
  "key6": "D4AmVhdSb4pQE7ybCoDEPZ3MJqBC8WckBywGCLaPzZ4tpsSU7GioTMRqiPp9Q7v24QknztaD5GFPcksTpF164FN",
  "key7": "35mwefiBqiyyVfvXqQgyphEYspvcEjG6FP6PNeLDHWEBzb3qnYig4QKNYmeL6aJ2jYNdFHHiMgaWoy2Xu8VSfZfQ",
  "key8": "B58HCTxFzKDYxHar6cZvgBcYabNPUFiP4jnWT9FgCNafLGTSBx6huPE5HY4VdSoZtjzauDeBWUxBHLtGxfkPDx1",
  "key9": "2zc34oSdzQZyqn9eWgczwacXDHC6udsdr5SoYDAgSm2pVkVejGjZNu2VeFt9PxYcLK7Lx88S8ZpwASnPmcSd3Fqw",
  "key10": "2TqAdgAvFAisKiuxkPzjRSDRze9LjvUCRk6qVBEwPSszwvwVxAYJrbNgH58Psi14K8qe6pj2LxLjaSgN3ruCoC5x",
  "key11": "57kc96fS8swJPPAPs1BzwhmaBc2RX7DJY6UccpSMLnGkCD8EuirzcRxq8VQnQkeyqLHJeaA6eBbnJBo8VVF3uAoB",
  "key12": "3TBL5tXfcsC6H9PD277B9PFKK4nduPFPiubX6yPvgEQm7q1PGfLRfUCj5ySAi4q1WjSDjEiML83vm8jixsZtpivg",
  "key13": "5QuL7iokmtRzvGLo8fkDHMxeNxmDPi1vLBTYTw8Jz6QNunL2P7Zx8w7rNH3qJyfEuuZ1EPGJGkDuybfgcGXDmghv",
  "key14": "4MNmcuV9wo1sD4S6hxy3to7AZxAoxEzcHvJhCHN7T2qkt2P8AqNPYZm2sa8EEVjuQxsTooX6HBSq4VkeDM1aXvKU",
  "key15": "4pRVPzGg4ZVvwehpaeXs2X3u22yH3spbakzezqhNpGpwGzVM1BrnorxHvGzGMDekMXJQMPK6TxctzLPUjdTpffiu",
  "key16": "5ZhpUESHC4AEBkrGxcnNHmeuX34P5VDJcQTaDeeHdy5TWhJepRuK9YmL2BXbGFt9pdx3wLJY7UWJE88RmrxFyoav",
  "key17": "54cDjYZCtF1arrkuXSRizJsE2YdYrKQ9fbkpFj9wF5rkGt7ShfmhSRGKZcT2VKYBVLtw3aXZhNZ4mw3NrLA1Y3UG",
  "key18": "2jYpLRAJi6peQHkbraWXh5uXUKoFzoBLYMYS3HUULkMy4CnwSL9S93RHs9jCXZhFKLbTMfphYeBnWJZDSG8VdEq2",
  "key19": "UsZE2vFnnG5C5dwWrAVeB53H7j7ZxgiqbR29rVPmtRFJ9M5WfPrD1XkVtuCVgqsrixbqBwN7cPHy25c8Jjhqvgz",
  "key20": "arNrbeidAQp5jv1iDtJ3FNQ5Byt1SMC8GdNLfMP1VW1gkA51pLDdX4Lx83Z7oyWsmWzXPCkVJ2CKMi1LcdyVVpf",
  "key21": "3yZzzn3fZ6jF8JPC7oByLzjobk1PApH2QvUY6ZYmwDht4tGvg9DmSQzLf2nsZJHHAdjwnwiCiRjzXdt1EJLfqcLw",
  "key22": "K31owME2rFS8X3NDUJWKirvVLESypjXgsvZwoZbsNJdNhognHptxWiiweLd53QudhhQjh9UgbtmzN9ZtZrkPwm2",
  "key23": "48zWh7V1yUwY7ZXpDc3xhodwF4Ba13FX5soRQs6brmRgdqrEBbxaa6KfqgJsNMZTPq2LBLQ17rQbgkpQm4aajjYQ",
  "key24": "5vTVaRf8uNYkHFQTTdfuSXfrvYDTiJqA2thMwk6F8oYKM2qw7t5uHFnydpMwkawUJin2h3fj4KYKxQJ5GNCJLX26",
  "key25": "4Uo8V1HpmbC5yV8skPiwAGQS9QguUYeVTs5KouwY3cZv39un7SZE31zumfcHCM5risG2LTRzsfV3e2nPg8NZpU1r",
  "key26": "6TPf9Hk7bvxr4uVkzBbPxG9fZEF9LZbd8zJao4EsWowXMQDNeyUVLvvfjfkNnC1WRo46uptPHQJNhz74egq6rpP",
  "key27": "phrC5SXMDUX8FoALxEgGqtVFdHsusSwZVep6W3fp6VM7Cz3EmQY8VvRC5vQNudEUafyDStFtMpx6aZxXfg5TkHN",
  "key28": "2sgrPJtp8MXeosBHNCfhv8cHhGtaNAPXC7uZMusEq1Us4YZirr5ZUSpewKQLRNYUtV7GAQVEU6DwaKJN9g7J7meZ",
  "key29": "4QXr1XLu2hQDZ8iLhtsdpFbsHHnd8fHki4bvYMqT5ZFQSBhsgg2YiYLztFnikuX6nDe9dBEmeu3UJeDv1ekU9GYd",
  "key30": "2DZQPSncU7vgoMinx3pxLKGfQizGEAysCyTtzwWTHdMymjeo9pVJ36AtWfxzeKUSVvgBL6ysxFUMm6VswbbZWFyX",
  "key31": "iLGAQgWY1FuCPxrSboU1TbiFitth9Ua4GGLXKJaXStb4eLZj9qnkcpReUb74viZDAexga5Ks1vtvPzYqjVr8dXB",
  "key32": "47KHwTBURYtJdvewrFyq7HFaRFxZffdpLBqjh4u5myu9yZfG7GFaXaEa4WkevDPpmhLJfGb8N5JDNWNGeq1xutmo",
  "key33": "3Rtan6BMiC61EU2UjZTSUAfLwP26b4A8ys8zt2dBuhTSJD5zxjyuzZJNiXtwDWiKwFB4XWMv5o1C26fMdzU58EDP",
  "key34": "oYf1ZPL5Bjkh8bpyYiLfogE5NesSjx6mGh7nZeDmgXnZJ6mtwRL4uQDkzrH8qjrna6nun16ocpcgGU46saLPQWQ",
  "key35": "5pd9gHubbYPp2GUauHN4XqqVzfFZMJ7oY4x2U7id4ys2SxKk2rFG3gZSp2mfQvdZEQPZcX8ymjuZRqSrnfbEQV2b",
  "key36": "5VaFZ3zpsbwrCbcoKwt8QeUrN68SHA5o9pVUtnkG9gsYfCDdysX6D4MmMnxjyyCVRNJUchptgdBmdPU4tAd7U9Mm",
  "key37": "hVYCVEaxh4gJ7zdLQFx4tZJo2ZoqbZSDE9GSmTLqD8QH6tyA8PtXbsvpDYm4dZuLXWbkoQZsmwHo93Xx5RpVtKQ",
  "key38": "48R2P9ey1vQpkVhJST6GQcWtA2pRj3Qv4FDpWvQnTokTLd1caArDh6jYS5wMoXB4F2whkQitUitjFGSJ2UhaZ8GM",
  "key39": "3QL4TTNABPhSfAhAeJ44gJH4pdR1xJBcJBbhzS25J23SZFphKina7u91vUanNcP4SCq9VrEyFUMk4Qi2PsggSe3i",
  "key40": "5cNxg8vMXsre4LyMpWXZ3MwJoy8R8WTzZJsqmmKJg1MULY9FemRefvY7rKnKKPXxVrAhLZskuTak3Azf95BubF3X"
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
