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
    "3pKpW9RBqpCrLmNXHcZ8Y89M8fSXq7D7BDGDom4FxXexQq4i3KNgxvTQjfsZZRwmbuLo28DtgWbRJWsPs6a6oi1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ge8XecMskSV8Dti3EniUwJXkbXPz56jUJvZgTExSoyJbrRrputsQnJNz8v2TRRJMNvWJMUXE9XmCJcq3n18u1S",
  "key1": "3BBRqLuTYpjwkqHmKgZ6SMD6aYCwnBcWkLkRz7pCqkkewhSwcSE7SVd7rPuDGeAs61rmD3v2weHtpfLm32RGeSqB",
  "key2": "5UX37LoMELzjgxbq3GNKFYWSjiNDv3kWFnqQrQyixcHjYecojtWMmtG5UUGPRDssVbi8tMGdcj3iwEAiL74BNh1c",
  "key3": "3xZfRgiwTmimAdzGPLnG79fgE5apyYr7zvcDAsm97Tp3aqPps4QdLif1gEgP5NmMkRq4E1dqiahuMnFQNE1YPzic",
  "key4": "2322HNwqRPK6DwurUc8KpPiRy7QVcTzrJYS2rTbuz4qrMtGrH3S7Q6jgn5m3StgwceiduarpYB23q29AZ48fUKGW",
  "key5": "4hVVGoo55DE5eUGPmUQca41Wv3gJk5e4wxC6yxvVp4sVjgiZMkPVyRjFaHNczZobMUEAEuzjxgX52QZCbHBzw4sf",
  "key6": "41hXxTmdghLVVWNZRXnC4F7qqu3gm7u4uizJr9So7Euyxokrk4kTg1pLcvcB6vBY7hbC1rJLt36HjuJNCZoMNQDp",
  "key7": "2ztwtzCLU4jdhsReQ9LPRsQh3TDTxLmMGFA4xWtqcyHFmTVsoJ9Aqvpv2eZS3LPoZbVhdu4szR11Y7vcSYeSEKUi",
  "key8": "5FCwHvZAkJdAk53AXKteKMSJ6V4RZbWPBWdenTEqcHxh4TqNYg6fPeBzpbC6Lg3WQvF3BfnicskhMGJtW3aatUSR",
  "key9": "5Gmrz6sQowjqt7RNtUFMF9uGF1tKj8Fwuj4aGpXu76oqr9rkbKY37m47pR5b8x7BRZrJZtrg83aG6o24WSqPj2Cz",
  "key10": "2ucR2NXZRKVefmMBKDqk4fN7Lg328kTF8v4jFKRcx3CbaNbUhxhKGTj3cZb8cM962tKWMeP7gkfhNvfoB2fK51Ma",
  "key11": "5SZXUszdmYnByHfW3G77AsvmnQrqeZVqjpvD41gZZeTttrzaDT3NAJBbRttAd9P96siXTjWFspWXjoGmjicEdJpL",
  "key12": "2rXkzNAdFk6Eh3H9yGzYngw1ryvLKeYeQ778H8q4NorsvRiaPtFEtBveN6okr8H81n4DuwYp3ks1WGVRvcJeKHXE",
  "key13": "3QXXH2UAxd3WriVwoEk4Vd5AtMqGjKoG32h6rBAx4PZ1GqmE3fDEkrJ5YStsaza5n9o639uf9uL62grQiAeKQpB7",
  "key14": "3ea1822tJYUybD1acyuf58gdUBRnuVwMq7ZuoVCq2knxsbWCrEykd8j4EVx3vCs1ZghiCWmVjEEWKrLoAonYAPDu",
  "key15": "389chZnTb9AkQed4ngiVfxFm11dX9dFKhkj1JmKXdNkQok1CUR3vPeyzG7Ps65RykuxNwbH8M4UYnvntqP9DhGSG",
  "key16": "5KbnL1iCtMHNBZ8Fqk73PPU157HSoAJbtzVNqBCWCPF4XNY1wyCAkhX54qSqfkAj3X4FKCQVwyMvkmYDfHWLyEm9",
  "key17": "67ncpA4rQowA7NUoiitD7hEtwKMVG3mhBH94UTaFboxT25A4cHHZK43gYq2qm1fNT3cUEfAJJoWFnk5w7Xr574TG",
  "key18": "2MvNG4QgvjPhAoTJCuJNupNRHY95BvjBtPyR95DcoDG5bVAKpMXxHZhRw25nV8pS3F5aZPaYPYY97W29LBm9L9h5",
  "key19": "32W37kiUXCJD2hBuaNfYMokfDraTh5oeAGCD17H5HpfeuLjR8YkSfKRKz69kKqxhkRMt5qK6yMdHQV6Spo9cSogJ",
  "key20": "2DjYWDTbYUnVtT3cFqnafSd56aJFg6RCBJUDREpxVtwm6T1scHj4cyNM4K2MWjXctNDAZRgMHeVMDsx3b8vxmrD4",
  "key21": "MTv7VhqUcm6cBGcZrD8D9QMUNy6bZ9TuFkRq8PuDVpts3iEGChL2BSvJKvScjgP3sT7pATnGDC3mXsa6ojBU9wz",
  "key22": "3XAmPVFMQTap9mLU3ckQfDbfDYM2aaAuGf7TT4JRuwwpyCur77qGbLa3qbBaZW2DiVt7FmTNa2nNaPtva2GjNoJ8",
  "key23": "5xYaKGptyiAnLGoB4ySqvaDb8KRawhfPDw3ir9bTyYGx83opw1Y5UmERToTyEGViTzudK7ctWNkwneMWHc86sBcg",
  "key24": "3FNiNgvyr9nQm2wWDE2FR8QAJE2Et2SjEgcTYCiaA8DMyYMMP7JLLFkeB41DkQf9ivFt4ZCcDjWbceFhC8rQ6fm9"
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
