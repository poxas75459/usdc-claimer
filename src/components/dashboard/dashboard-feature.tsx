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
    "2fw49NMQnmua44jsWSsqjsFy4syWp3qq7yc5Av3k6ZSGyDPXCPrfJtXHnwUaQ1ERcAAhQt1yeW6u4VYvgv3UuCfD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GkEw3soeawbiMv6VAUTxSN61sd7eveqQJWUCeC9suHzURJHTKyFTuPEFW3c2GVE7TzvQ24a7tqiAhDaXqsCrQ8V",
  "key1": "YfFeB5MWLhC69dw3ogSB5sn7ULiDciy6XYTVywzhosQWw75KcBsEgimJkZPxXhFMTN3fsvr2uAVQzc68PdfT53R",
  "key2": "3XA1Awie1o18SxW3KyGXkfWHnvjv9Tt1zduKv1dmmZoG8jHVfz4SfyYRy38VCzfTiSLiXKgeYDs2jak3WjeDtR7M",
  "key3": "8hQka3C2a6hnWDHNfUCqXgQP5EakXampjkeDzcAWo66SqKpWiXj78Xksa1mp8Qz3RsRDz5gzVj2h3JWbNomatL2",
  "key4": "UqN8crVSeGDmAHjmCUnCwmedCxYz916iATCyKqsn2MDmVwD3JdzjsqiE3BUqMnQAww1NAAEFqAVkJyNpu4Ge25U",
  "key5": "5ayfMxLYNfNocvWzSRDrAyMwjvMVNChfHUZZ1krKaL8RnG1UGcjsYy3qKcG6HdviRtrGALvZWR6SVY9H3zPJ5y2e",
  "key6": "4U61j9kv6swCkEtY3cHhF92yJcqXR3uuAwrqWQa7dvaSM8iDE293nYNTyfiN7hu7t4WfgRXPzPpEBLv1ZyymxARX",
  "key7": "RW3KWwSX6KaXKxGTxDRY5PX4BCM3EBFcBZL7sG2uPvRiJZA5ExhBi2TMFAiZR7yGsoCskoLzn2wXXr1gqAgMCz3",
  "key8": "5V9DS8qbBhz7M5o5y9yJCpgfqPuV3HsiQDeeXw8hHWFSHRRqqA9VsbEuQMRTFpR1xnZrpcBLV2TiFFnNs2wMkCTw",
  "key9": "26v1Qq6uyuWXJPYDwbX7dQaopxTRK79NfBXtvqVcpyGKyy4z7ziscqi6PaB4Fmsd6dzQoCeFWz6m6w6dLhxzKxRF",
  "key10": "Sw9zxGuFHgi2xtm6q6YyhsQ16EiC9enArtGtSzMxUjojWubQGcMtnrXwQkGN7WqV48qF6C8a31xy1GEoGD32jBs",
  "key11": "4qk7HqT2FZFPKBweXjBeUKKV4RFvaiZ17h74uwZTNsm1eaukRkHyoYtkMHiLRxaQx6iBWBFpVEnYbzyRWC4gwL7W",
  "key12": "4pfBFdcxtfkmJJyQM1odabquwsa7MB6WmLo8mCMo4ZH8amHyUQFi5VUziMGnrpTkGqDw4wexU7wd9QtjZt5WTSsk",
  "key13": "2Xj2veWiAHBd2cN87fsSQjBZhGS53ceDoXE33Yp1Gts9i1kS3GTBXX14CQqqdhDfZbAMQgP77xsCQQn8TjByyrBN",
  "key14": "51jQRjtxtTpRS8SPaAT3W6jcYC7rCSFE8dVLfERduAfHQ7fDe1t3g38uwdqvKawe5hzcBVjnX4aNqNoBKHUQLukU",
  "key15": "2dfnVv9dx9bM9TwR2iQi5PZeawdiuz3Ci3yjMnvjtdYoo82Fmy4Z7vTkudYeDrEDZ85PefU6hDjxigr3vRgZFDcw",
  "key16": "4Smzeaa2MK8Z8WwH6zKr3PgYm6CEyuo99XLgBaCuyJdr8Z3UhV9oNbczsgcKxA9W8176Ad6JYdSdtQnfepv8WqQy",
  "key17": "5kyMyEHZJi8Qk984wHY5MncqmBNDzn6WpEncetf4HSTfHJvavgp2gsQp8EmEXi2F6W2LJ9EuG4H88L8XxYN9KZsT",
  "key18": "3eFvNA1HorGYKzKoh83LAoYvV8LNHLwbRT8hf5UsvjNdqCMyKppYZfZs5XLiEL3VAmhjbKHtAuRjnc3WCx3YTLyQ",
  "key19": "41mV3P5EsFBsGTZ7XGE2Uj7xrdrAACJ8A8mqk4fmjFMbnv48SWQyf58Bs7BGFJ3nLSF5sh9ys2GDDf2yLbKZo3V3",
  "key20": "MMKCEN32BwtrJUGBChXgnS3o5Z1JwjFKLCSoFRj3gfkoKGvoktRhMQVyNJFzJsyvE1cAioxdWakEfR5x4GVL7sF",
  "key21": "2bS9PGJZRU42hMXsPzRJwijpYUNqPDZi48WEYMD35b43ctoTcZTsL8N5cKmBJcpbQ8Bvdcjfofh9aay9oB5R1Rcq",
  "key22": "5aw8zCjFLJ33qMdLbixmfsV7344c785Ke1o96SCabYvPJDc6fq58FAwLEXNnmAMbw6JhzWo467sdXpxayqtNfw8w",
  "key23": "5jhGMgHfR5PUFViKMCN7xuLkGXJyfMvwsq7NNZrwMnUXQay9LEwhJfUbzHvmpmL3oUuZ62hNRGwGoR8P7XmeLzST",
  "key24": "4jL19NzjXscsoX72NMUDThHtECViR5QwpPzpEsy8e2dqhgdDREc2MSmiqJtSu9LwniDyWNWVum6dVozA59Q9Qp43",
  "key25": "56wiJ33WDEPF2HaeBK2ow3fxjLm99MfcYojJok7QnM9KoJtNXMpMNVrPN2TQBQr1sgf5DHXVzoxH26gvavZGE5M2",
  "key26": "2nx4Vft44fGJy1Uo9G1PaUP1X1ZpYhUtYeKWA9JzckB4oUV6xxKzwxvfByM8t9J8kd2acggMRogUy6WD9CVCsKsp",
  "key27": "4tMozCSq7YDSaagSPwXg6ERuNXC6MhuUjkVkJTj9URmfj4Q7fEDkpw5QsPYsGfSB5BcaYi6PweTaXX8KvRQuYEzt",
  "key28": "5H93uu7hiHvg8V6s2DydKgDrcuMHsrx4eqhRTsrY7XjNuXd7Y2r4ZHPwSsgaKLSgoD5H32v1cj7fNUxGBDrNDbaY",
  "key29": "3vWg7Yur21vDvwRi3ceQmumCEnNCx5AVagB3X8k6hrKf4tBLLSgyZ5xDvdixpPQWWcMyBef5PjsKHhrXxLfszoxP",
  "key30": "5TWnCWfSxb5G4uYQidd6DQ97tCj9Cm6PjZRajwoTNbBzzCr76cemBKXaxNqfArJhJg1RPEGaf3PGakgq9fTuCovX",
  "key31": "3yuoUSMmb5i2iJr1VA5ThzYircSUUEzWMFS5BBJ8yNaYgPw427V46JUFMQdc86cr5QfqRWER6behySGyRnLkptBL",
  "key32": "36ZAKdcCpoZ96Hmc9gLkjctM8USggP8FpFxFYh5SoZEKXtosvRC22ZrD5GrMZMRnbePbHkHxd7mGPUyB46feVXYf",
  "key33": "2Tt38ZRs7nm7QcYbYU6qptKYHYtRV1nxZzDy6fGbPmHwMyv67ya2pKjRUe9DwCgrhptxvRFm5XA3nj3yyJud7TUb",
  "key34": "3ELy2gu57WcirCpxskBeBdYRzGVsAZ1q1YpYu3bsoaZZFz5NidDXzFTd2qUsPaqEdqdJwFZNChQoeUwqSKadre2M",
  "key35": "4JC397VLUvRpiwqEhpX8ArDW5LMQaSDSX79vaqYrPhoDR771gaYrHg9HQbdciaSsSNv9EFbgMTTKXPSLGMW8v4rT",
  "key36": "CLpxWR6YDHanxMEgkV2CqopVoQwgRJp3uqnf6ADoGbXwij5ex6TVoBg4VAqrrQTBUCETK1JL8nZyd4kYN8NCSST",
  "key37": "3vEuBmQG7ihztaKkJogYHmCcn95hDinZMfRQUGh6r31w4CsjmeVAuZCsFeqJmo49fmjPBBFnUWE6PChgeiNFSgcm",
  "key38": "5CD2SJXB3mH2VkACJnQXyNtDrHx5wiW7B55sGLh8fEXZnZfmeDuzHVRpnqo96YtP6bQGs7hiRpoTThLGdp8RSA3R",
  "key39": "5AQmc6TP55VraMYRdRAehQfxzNzPbN5NK3JNDhxAFr4ufjPErKHVoG3gdi6UgUvrPQNEqcPhYKBunkf4VCH7xMr5",
  "key40": "3K949W2hxvXDEdXbAojgqf18otdudymNL4N2Tcvpfw4gbennkzJhCc9umLRXk6TvKBWrZ2dSiTwwRSLRWKK6BCdy"
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
