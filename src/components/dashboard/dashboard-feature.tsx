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
    "2CypHmYH2KTksq441o8XNZgHZgjki7tF9zwMz2BbdwwgwmsDt58G8EakrzPu9nRFSesBHugnFk54o7H3eJEv2Mxu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cp3usr9HY7d6DgzxbkWMEcL3q8tFgpXMZVfgSrWQzYJ1Me89357yf7YfQTiJgM5JeHmwddtcjJrcYxzAn1QB1Ms",
  "key1": "4Y1RUJhgmiBRmWwwAuif2NMFMHMLdrD7vmTH286Cg6DQa3jYvnrH6nK9huZsU7wxzcsqitNm7XUrwnhnMbTWhoEC",
  "key2": "4AByeF58fLsbMunqiKh5RvRYevmCcAgydLMPkmh2Vo6fdT4zJeg6zdz2j7vvnWTwZAKSqcM36cKP2oUya92dSAg7",
  "key3": "2XdpjtxXG7exFAkconzRLitDS1n3U1tqakLNf3dDZQMzYt7gmWQCzQ4AtZbyJcsWSQSbCdprgZyVRkuWwMAYZoTM",
  "key4": "3bf4Vds7q6ZWBy2rPJukhfi7vf9sTGi5Sk9f6rQ3TRvktWjwSkSqV1kixUUZH6C3P1o5ZubJyqhm5CaUZX5FtsJL",
  "key5": "2g4nVn2DHjM2YeskwVuimZXfd1HyYRF2m4vKfQJZzzSekF5SZZQFVJMFtt85aEvhZkJToRj6zAaPCxF9EmwAKjf1",
  "key6": "PsXHhhG9gzA66r7nzNUWyZ3vNTRb2H7zeyvCocfwmXxwZNpS4U1toAq4NnPjgHgqeEWEkoBWwE8qfvMnq6KEexy",
  "key7": "QjM2UJ6UpacDxEbzo6TNKweCreV7udkmbuHf5fY9MnMWGYq7VQM1KvAxZnK8cCEhKUJ7oxZrskiqpV3hBGQC9MT",
  "key8": "3b5BZw1dDAmPpnUjeufhAGK9K3sJoYXBtCFtJD6VbGKa9b2cEfme3E2iSyTPZ8BFbNENZFtpJwuVzw5iMCtDhKpy",
  "key9": "65WW9eaCSJ8HR5UXH9JZ2Edao8mHq5a36MVy1ddT4jgccNg3j9Pmy5jTrMmHUAmskoJysQmgSnbarh4TZhqviH9X",
  "key10": "4Rfns2TpRJdHHcEKs3BLkyWiYKnacrJfPXPcmdoZgEJ91JihLUKijLZpBECWSZHhwRwdnayetFJeutDZ1XtX3jpm",
  "key11": "465ru5j133bn4tcP626eXN4Gjbw8oP8AHZT7CEkX5TWcpiM75KFjAUSPghM6DAFB8RxxKp687rKBqLt6HwvrptLQ",
  "key12": "DUMTFy1Gni5XdsL1EdpPwZsAAW3N81w1LnejbT4EAnV687UQGLeHeveZJq8Us9SjHKNw2UqHX5sJZfxTx3otk1B",
  "key13": "3jN7qVonJ4VG6ZQ2ZsWqYc6qPiAwHDNDJDFRBH2rGhf9kMyhbdJAx8c86Rn1g1qSWrdk4L6RrkRhAAm3VmnGMVgC",
  "key14": "41doc96PoHkWeJPsSymRzmeBLEpWUbs9W2oruS3hNZumjSN5zjGF9aa48cGFHDQssvY3waQeGkYZyHNRMXAT6qs2",
  "key15": "3yxcp7yKCkMaMFi1UJ9yhPYHGgX3k6f2uBBkDBYaoGHu9bbZcKmCpjn1Y5zjVpVh8wBjBAJRcSm3voiAREd6hZpB",
  "key16": "2j3TuePh2JPgwDGcMUWxXxsi7yzmGiKdgh3NLh6SC5msLrUuaEBAS6LbAm92t84R6y6668mJVP2Ev7ZGPiAv66c7",
  "key17": "48fC6snptC7xXpK2TXHSEoS52CHbVyK9Dn5mA7E76Zxay9NMcnFQwYz1PZCUfJFzSnJHApbD9dBAZzBmBe9GmHDt",
  "key18": "U6DnYAX65ZUVvYBHG5w7qcDDRPjXmgZcnaQKnUXLc4rntSq31ai2yLuUKbHZhydcDTnQ4zabRrj6Ue1JSMCvNMx",
  "key19": "zeNXVNC94NrUskgMtfsFG4PmfoYcurzy77DYE6Ty78JJ1NfBNUGyTaWt5F7QRU7RQk4Y1QNbKrEMGh8ve8mApnu",
  "key20": "EAbxfGhRJWyK6W7zMiknmKNTDSUhAWgVnGR5X3CMDuaj6Y1JKNsJZM21ajPeP1uTpwH5jRLGhzpBHrzNxkCg2BF",
  "key21": "5eHZQFF4hoTTFJeZx3za8cqUKeDd5KCKXtCKvuk8iUoViaqu32Nqv7hgGjJgjabXWViNNnLxikdMb3gYfjpsf2Wo",
  "key22": "5FkR8kKMkeLTKZGeAepdTY1GCJ2ujC9a31KFEfc3HVyBBKBrboDLKyeKct5AUW3vrCcarGvUayyaYAnvUWtWU3JW",
  "key23": "2fVjgtRxmFhdr6RpTJua2gmRrdExANd2pzQN21vysXHZSFJ83EKPvEYYGZ5UeYYJs2NMf8PwGjTDVSb7gvwfcbek",
  "key24": "2JWyeyNuvZxH9xqWFftjTVkaJTu7x6ckvz6HZbgZx4AAxRjiy9X93ywEYQGkQYD9wAEnvKQi1oJrurMtwvWGep4F",
  "key25": "2nb65wm7aojAznA6vDz2AbDecwmzNv7f2WwasXLa7s8Bwsg4F5TmruW6kEUEYcudT1vjnsKiQNJMdrMHffi1wtKq"
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
