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
    "26fcxCyBLrzHfjubLhtx3mPugaofUXpZJnBPgXtjw23nKucnkm3rEt68rZmyqXbiiB8bPvoD8ivCfjrdUfrgkMSm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adFxsYvcVeam7Nc86GHudmFigwCQseD6GL6QZFUH1rH55brqp9otw9Ny8sK8cW6vmPV2FeLGkVsPTKAmFP2nvUc",
  "key1": "2Ehbj81FiDm68yteYMdhbfwcyDo2JZoKYS8Pom4kQByetzu5iQrFSWBn7LxT5mRPv12SPBBjTA5YxhauCVmbZYP3",
  "key2": "2qciZQR3ZG6iuC86LM6JUmzSpfoMkMuiSvCATLrh9jUpjF7ETSkWDevLFBJzGcmCeB5VS73JNqFBfod4wnF1q4uF",
  "key3": "JAN5Qvv8pPtMediCxsBFjmzt1jyUUczTCtEpNR8Wtwim5qNiZBYKVcFQQ5sMTpgSgdHtjorVyw4k9C5snZTKHiN",
  "key4": "5R2h3zgUh9feHeoCYcG3fxtp1JUhc2e9XxKmnxmuFzgvG6tegtwSz7iyDn2NAVSk6PCSqz8gtsmQDeiFw7gTbS24",
  "key5": "2vxmCYhVedSiXnZ9rWSatmtACmMmdWLXBh69vA6iYiqqduQ7EPsc5nM5SjoMEz3gnqyjNqStQpHydKFcTu4x2boJ",
  "key6": "3WVWokbDhcVQoHh662scVrPz9gpXg4Nb6ti72ff5qR47zTxRp9s8Jpy2ua2Rwm8A7wRTTtcjM4br8P8MUw4TtC8X",
  "key7": "3CANWWsSsPaGH2Dn2GbKUMWYMyLn3E9LwjWYqCXddQHqdXrDnSRKfLtxC6zsJ3tnk87imyQFB7C5UqDqCyWRBgCD",
  "key8": "2LJR3EcJugGmWiiGBfnVP8nLtd5yxXnCFy2NNuBFjFiekJTdHuRXkJfxZwMi4PX4habK4L4mfRhM7ShVh4yPYnpq",
  "key9": "4S193uc3k7vN2xSHDy6LntYUgdPfbE1G9KnzQh767juWndLUeFeGrqpxafw6DgbuL86UAiiFyqiyaAVMA5eHdixU",
  "key10": "4LXYeAXApQc2QJ5SqVZu5Xg8J5VezC12w5HdTCpTZfP1EU2yDoHUJ7sY6UKVEATSqNADvTFqEgRvhurPxceh7wVZ",
  "key11": "5qWfxZgnELnBZ9WsjocgyhZsQXEUpFuU7RRUkWZtZXWoUZrX2eVQaxkhdtWUE3kF5vVohxurjELMdFzZASgWscQZ",
  "key12": "3neexx2uqqeyrThMX9PSKBwzKhNnRy9nyeuGrb6kVMdf61go11id9bwFmAafHyRz3Hy8fN8rbyZYiXtJcJ4Zy1JX",
  "key13": "4cLPZ9dBouvgnyX84AZqbxLVUQiyFzs5choKSoupQvpDWX27QuvMeLg1Q8vKvpUU5K5cF4qwrxV3j8QS6nmyY1nw",
  "key14": "5S32cdpS8DamCkknE7JBJR13K1RamJevt7etz1ZmYjufT1SJFtkxp6CkQR4RWv8GkCa3uNBxQgVBFPekZyv2vMcK",
  "key15": "2giJ1ThdyBDWVE7gP59Y2QPK1mZCkLqPWAsB4zu6nzHs4oGijueAAWXjJ9PnAEaaihMnQTrQ5Dhk1YHGygeu8Kdg",
  "key16": "4ZiiXUbyhdUFNLFb1GDzBJb4jhz3veQpYwVMpHY4GE4jFXD2zciSL4vwXix8poDPFu2Dei5JEWhXroXXnZH36uAL",
  "key17": "64QRFGBdfGnKvXG13yo9LtQ2E5WhqK5ubm3QWF6ARXcAXkvov7iTEwbMBKZfP3hZ81VC9DGT6QKBLswxDrRB2mQA",
  "key18": "3KMbfKTDVwagovuETQHZ2jfdDcds5fs393LfoN4Np296vxYp7f5qfVPYowcsG9HoFb1bCQCzv3qM4e3iJgR7N8Qj",
  "key19": "VVbjheSmXXkSNnfxRZFqtLWZ49wEU7YzVL7KiFUro7P1NUrr7baTu4mEK8f2KeiCVKXjrKTfsN1KbdGuAi3nXzh",
  "key20": "4XMk9jhb4Wv8yHVKS3SE97tDJpYuiDVzUy8GrP6Cntmtp2MdeJPLA8QyxYahQynVbDFb3DF9Gzq3dVJkf3uA8bVS",
  "key21": "5XHudNKLin9p4d1V5osbDeuqC2FFWLjVYzjcSKR1S3U1yDA13YsgF4bJ6xSp3LqqsSLcY6q8P7b51GXymvGYAvVp",
  "key22": "4TfojwemLdhy7PMLRH1MhTrKfXMEZCYXJ9tqhiiDwHdsu96H1fP1vjsdTN1XHbFyVWMQ6HhE55itXRwoycwJpEzH",
  "key23": "5m3pd32dHLFEHeWV6MmXK1zZPfCzczr6vu2dYmcbkSvmt2mhs57q3uPSDjSPCj72Vwa7GVhJZbBT5dTwYpaC5nog",
  "key24": "4rrcpDP6GEa6AeAXrL5LdQ2UiNAxp6ME8nuKCJ4VGGBBgck3NaiMceNVRjRgp8FB9DgsJ5EEikVZSqcmGxEYCw43",
  "key25": "7oozxJ5wvm9FRVEEEjWFBYJDSnEX1JqXYTkcF3QwQLaSuu5oqqoDviESvYdfYe2sca6FgbZYB9QFUii3GYkLf41",
  "key26": "2nhmN32L8cdXqJQaLSDNaEq7FLbXNzYA9Gni8Urd3M5Ps8RyE8RTQhRvJBou3py6u2U7iMiCu86njQtTLV1qQx9v",
  "key27": "THTutasp5ukZ7TQHjuqwMoQsqpg3nxaQGd1DwTBPtM7NNsAQZsyDScfWTe2aK7PMBhcR3L9ubGD2kqXbqyXyAia",
  "key28": "4AGtBnjrPMwxinGY3t7AWZLPbckKH1EVbncakaEMvZfbgSxFEMfaS8BRc9L1cJ6cJ9nTMZDAx29rbTHjz1B9izBE",
  "key29": "2Z8ju5PoD6SWqvFPtsfdpTtS5brjwZF6vhigN3ktWH9soRWHLxCaanUWKPqkrQaajM8mT1qBMC45LJ85jZJEttYb",
  "key30": "rgu7FtaAAaxhKufmGp24sMqk9dSLZHMvKtbRpRwBWtB5k7GTkEr3xXZfjThYbxxY4K5KNKpgyCumetF4z4LCbTM",
  "key31": "3gRjw2EZWcw9jpEpcGE7dtqseL7DA6gaVCUaYBjkzH9C2zq1NTosPaRvt5ZYMNkPG9GW75Zro7UQfgqrtrncY7Wg",
  "key32": "5tdysKV8bdB1ZwyXuJBoiY7jhoaBE2rT11oMLq45VE9H1njddfskNafYgoat4PzZzaoGigAo1SgnUbAV66U7JSBa",
  "key33": "5KYxuiEAbKTt9bSqnwJbcbPd7Zy4EanpFYogH1WnLLWtmQkoTC8nxYyoFDQs8RbRyov2qizpzejor3kvpJEpgx5",
  "key34": "3ZwDHz4Aihoxcf8N2U8anJ8p4aXxBLpbu6EwK9RKcUbhEB5VL88jrGawj6KugbiDHXxpQj8QVndExUwDYcbcbadv",
  "key35": "26TEoqxromRz1rzuPenzW3d2iR63VuVGYa2x38nhrd9xtxv66CeZXEj4qkdaWMdrK7yhFdjR7ntejswe5VvTHt9M"
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
