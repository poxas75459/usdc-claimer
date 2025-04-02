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
    "5fRQBN2w2uzop7kduHc4Xa28NUrELFiH7j6wxrxS9hvQbnZZWXnwcHvXD6e5pgdG6cDy9dhcNnq9ptqAAHhkdnZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cWTr1LmgWx7vwyPWhbnE1kydUSKez6LnELbMWpPELRE9m8HEATD6XFA2Q4KmXTp59rAWJTw6KdJDyDEodjeDwBG",
  "key1": "26fn4tmn84eW1HBAinBk1KWhCB8vg1sHLpWAtxevG3Udv8Dx5HDnZQiAAXDAYyd2rqxSbSbL6KuPbxzpMqaopVbC",
  "key2": "228AB8MVTw6jQwhHTHf6DjnvLZgbeghbbRLqTBbkeZPFgAxZ98qxRiPDtqPKorYy39U5TpqikC9RYVLhMigVMy1c",
  "key3": "3muZ62S11B8tCE6SBMLNHJQyV6QbnngqpgxGFsDZm4ozdNkC21DikFq4FdsKN5pZmzJ2m6yLeyS3NPZbbLCnefA7",
  "key4": "2RZ6bZwN6ntQLhrdDfAttLmzm7q7hYNaPMZXzF24Uy2CVSQhSzz4NtV15NmUzfUmjuYmCXGpnHTKvYPHgmm4Qmeb",
  "key5": "5eoDWWUYt9SrGVgd6xKADcc6B4YxMTMNDMbFvwpgnd8m2NFhsfeihfeT9kXvxQRaKzg1S5DiwGTnJPJZtx7bhVCe",
  "key6": "5PYaWU7Lrggog8GPNbYTt2Fyr7sCT66BXyAx8PY4XeKAkgEy9G18JjPwFbMduCJrx2GU72gBH5Z5u8AxCb6shhcT",
  "key7": "3rJnGEr9fv9epMaFYQHsMi6xBqNkuwQxWzch3cHbFm9VKfDvTLGexMhcxRHRcLdqw3wnRqMuLQ8MUTZSABaVofA4",
  "key8": "wP4YA9YUy3avCq5Q9nFvgbSN1NtCKERox1KxPBdqHDogKFxdbqu6LvVaxfjbDUn6Sg3zzj2kwxBYmR5njkrDeDs",
  "key9": "3BnvD9WgtfAcfUoj8unzua5K28Hca61dTFW1rGMWZ3AfqLhC9x4Dh7sgUPvmPcwD6V5iM3yKfGL1RijYUXed7tnB",
  "key10": "2q5w3aWRgAxNCcmZcP7UhQACfDzMQ8fG8Znf9QPDVsRbFerTL3Raq2JqtrDkJ3ArbpWJfP7Arq4N8zSUZ9QHRVNh",
  "key11": "4KDWVk7MzfqcfRS1QJmL4sHc6Wzz8ikCeauiy4iiKwhDaLwkxC3Qkx6rXh2YK56NPbBjB31NggyQ6vJPyfupN1JN",
  "key12": "rLdMXzng9B6SV6vHkSePZSXMKbcDqgrhrhFCm8fkRJPXGEsnzpbBZwWMhtTftAV5V6ipCBPVtnbppzqziVkBnvr",
  "key13": "2RFZdqvXf8d4iAkEUH7CkAzfJpd4Bk5mtyAJMEe9mVkqrd7G9zvnfjwGvvTzDft6FJDXA7n44vw5ySrUvRcfxgf8",
  "key14": "5RJSFwrnHBCHGyNj4HFn6j52AHSvQw7paSRY4LtSvixTrR2dyXQ3dsueeADCdwsnuAZfQC8eGmpMhTB5EUoDFASQ",
  "key15": "2hFjF9tikUdfzbMovpSYtspXVjsKEfAuPiBjqXYfSNYhnXyCEK6PjYpDM435AmD1FgkaimpKEgESd9KgBCKjAqJo",
  "key16": "2qFnjfoLj1o8ttWviPjnoR1toGnyomugvVDj1FonnoKn37yWJ727C5RgckjqYyTAAnbEajsQ9YSqixjD9ZmzyFxC",
  "key17": "4h2ZaqoBSfCVMqkYReMgW47LMHLQiwNV5qYBang6nFvwkTtoCTizxALaoH5c9NzXigK9bYZg9r1muVLWHjrnwBXL",
  "key18": "4JrCqmSvPYo7gWQcYfL78N9viDhUtoMhmd1zGhn2DR59sMbVk6oCxSkWLYgt5dMkv42UUyn3V5iTuHy68QEf2rSj",
  "key19": "5P3mYRwdWnQ6waYvRZXUjVjbierFBuGtFz6JBGF1nwQLpLbqnxG413RQtS8B5Vx7wWVD9hDLg49tHAm5SNbv81qA",
  "key20": "5WTfVb3X3c6LWUUpqm1JRma2d2dgLzofXVcWRu8kEXzrz4Te1MHLGikhNYwEGCcSeHLt4Du6RD3xwwrj3BxhB8iV",
  "key21": "2gS5xtwsNPgRxAaDhrjQ8SKmjvDbeU8wQKvfoQQ5SUW91R2rKE89sxwXVYyqh3qeB9YhUTLGTxX6GmDJt4tvvfXL",
  "key22": "4cFKM48t6xU1z5WxY9XGRp6NzANDD4rZdczu7on6v9gpNk9hvcjmzu5CmkV8E2n6iPJnofw7fR9xhsZxKkTzfbK1",
  "key23": "29zaQVCrepwfgzmKGEUQU5yBV24Zm3aAsqwS2CP5DAX3MYAPTW1KZJZpFrRtpCEwANnreZhsghqKaRxSm16LwgJs",
  "key24": "2d3PhtxUjkkua7i5q73G3onfqZTqdC6qRA4Ne9zeiXaBEGp5AqFa69m9eTtAuP9Z8uDdwkNgt58bLBVnE6g8RMnQ",
  "key25": "3JcWUR87R5Q418KAzfy67gTAANPhKoztDP55pN1CawV4SerTzH3Q3s4qjzDaydx1u7WPo9KRNVVp94ishAJUBBMP",
  "key26": "57fsDnc7AFgcyMSkXMb4t9e6oV55mwGha7rJoTi2isL2VeAifr8133XgyLgE2KbfNFr2HMgmL2uNzY4hV9UjaXtV",
  "key27": "3zEEY8nmTzd9kYpUSvmxMRU6fXcSuFevBpCViNLQrD1jVGvuBY9mBTfNPV3zXRtbct8rxj4fepNEDSd3sg5hAkF6",
  "key28": "4EFyfLZuu8fTuwko15Tj8kxw3EbGUDjakwe7pqXN4hyjrJR7hax3TuyGZ4y3MFjLnR7K8YExB7tCMjJEZnuqgV7d",
  "key29": "2a77gbFVXZUqXXm1txa8Bu4aEXAS1562bxfsfPvX34kSMRv7DG7m4iXeMQ2Jw3kxCTYeFUJpoUpWNLfVh6FgcYgu",
  "key30": "24TqRdU1VEnh3ESuS3pHX3BCqoVSXSLcqcN49S4SNiiNeQ8khdCUvSsCC4XzWXo1b2gPPdfPMQjXafJefLSR2yxd",
  "key31": "vdnzqFLFHSre3WqVqLvSYyZLGUUWfaa5RV1vF7tsATCZ5TyeCwvuLU2Dgdig1SvsY147wjpdmNAebAGhJw1uDUa",
  "key32": "2y2U1aX4dZYN4SZ3ghuP9WPZadrq8ZR71qrYQDYgP7cPdkptuy1HFUzZr8Q6yV6aJZ1jCuSEwH5AveCXtSj4ZaYK",
  "key33": "5i2fStFKQe7ybToUPiLqZx6YKNv7z2NX5SK3JSy47kJavevVdaJP7HfyFhyy4WBtVMdLY2tuEyW5m7gsKBrh5bn3",
  "key34": "65gW4E2NeH59VTE3BQ2m9BBFjFCQFRV2AiTccHEvV3NVDTKfAvDjyuzeREKQiRww7WZq3VthyCQknmotNZLFs9SW",
  "key35": "3pLmSumgGQxgFiJAipLCWw4fmeD2vnRGTzqBuZTwNHNNs96s6U4SYoLnVYx8LqSBDYREPRTLvSfZqQusthg6WeLK",
  "key36": "4SbTSHaQuZsBD852Bg79MbU9P8nLt4d3viHPT2GABYAwb2UdLNaD1ddLjxwGv13LtRoug1QtBJZ1MBjpi5fjDeft"
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
