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
    "3DfanhdSaMtAUMU2VkTBm5jfVfEpjAE1LZtsa66LAs6fiRDY2LraorYwfUR6j1SC8Z3o7jxApfxcR41u8XgWEiWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B7R3LU7uT8aHwAbCH5zJ5mB8g7GGmuyA2rrZMM2EPjV6AojZ8qGfPc22eKM2HgTP3WGxAZpm3kjdcfYMnjvLDc8",
  "key1": "6jD4KVs14ocRKW27sJ7zJLrRpWSVcwfDGbRTAcCu5DtwXvRkcJ6RZR3MkBCFQi6yQBgXRrYUPnCVNugcxsbmWt8",
  "key2": "61LT9wtSCaB8Kd8DkouhcGEdG8JJ29J4fj5zRCJ8bHa4wHcXkAyhjKiopeFLwbKiYN4ACngM6GxocDFPAmdwvLw9",
  "key3": "PLzrQyJPEFrQ8pVzLu8rHmgRDJqBMWzH2M4RQsz5e6fW2vLzULCNx6AACzyHTWa1iXWUbKkcVyQiDK1ArPR5vn8",
  "key4": "UV2MTaXXjAVYjAETsMsnDWiLyWzv79xyUR4aVwPGFacvBZ417xnbbe9h8iDYckKohLkJBvbE2iE1MEusjvHk3Ab",
  "key5": "674gfLqVProE19ATzzXuAgfy3AvLsfnHS6t8GyRqsUxxpKUk5juBQuES7AecChYep97ZTSShSHLZyrhTkJozBb3y",
  "key6": "3TmE5EerYE9tonmLJGtqJAYP2XoQRND3EM6D7CRvkNAzW7TwocZcRG9TDoin66fhKRkq2PmMMqUiHSVXgrSmFZ2F",
  "key7": "5Yq9Gzw72vHP3KJf7ZhQwnCgUtXVjLxzo3y8HBRsUsvUz8D43K7Hd1gH5iWa63yi9srLVFpQiwcoQtNhA5FkBkYE",
  "key8": "8x27nx8RRCuyMBr6bCZ9ZBV1vqXxjyecUmi1UmCmuzMrDbdvpYQP5ivGp9hQZLu8ZXWxcAPeaPksFJPZY2Ae2aM",
  "key9": "5YR2nRMzofgk4HJrywWHaAw58bc8tsnsuXUdViabUvhySeQFEKtcantgLCED5APTRfcxkXGsbVd5yy8VCMkccUMj",
  "key10": "2vTegd3ZFdAwt2MD3bQUmeZvqis5d9kjPVETQ2n2wJZM1wnikbcetwK5GAE8jzE7J5pyo7sBoojM36vRYC4sswc8",
  "key11": "4YJcvYDu4ScS2qsCBwau1VAqjN1aQM9vwCLWoK3LNRMmfupicWzaVwpA9mAiMvzYoucRnuxZrE4MH5kZrYYgue2q",
  "key12": "2mQ69PQh3jKP48sV8fCTVrbU2bHs9Wzogq9S6NtcX6wbWn8XxC3qNbcQU8DLZXuUGNoCVCPgZWsTHT2UyGmLHRFq",
  "key13": "54jgWwKz97KTu2QS1A3TEv3aPFVPSDCsnzuXYdX2L7YdDicHWt5FZJ9nMqB5aajGXPpmkdjBgZFH6Zc9UMeQRpBg",
  "key14": "oRbfCqbPc2UZ9jzfJRY3xBQxz8qwH8Zr4t5WtCSpwmF8wz9fPi7r3SMKosmu6X2eePwNgve5jcEDHFj5TuyzrEJ",
  "key15": "59YoihCrZG9JZSvvqzzymB5NBxkBBXoMZEuF5vyUNxrgL4whmNG6mYQ92TJtiLZYsx2uu6GoFci7Z74VBfPrr5PZ",
  "key16": "5wGxyo4AieituZdxtDALmuESfiuLovuvtMnRbV9aungMsWPpmtjBauqVSJ54YmYjAvkMX3hkxEFnoSpF7kw52rgr",
  "key17": "4NRK6hDEAFdoHZptVWoMLMm8NNjrVJpuUn8bgkjxKaF2ASjVajbeJvvKMoeBW4Sj85bAUs3qrmp74g7gFneUdff2",
  "key18": "5xm5aEhNNLQ5N7JByVVnLRdzHX94beHakHemeHsX7zLJZCR58KEdarq6X4Mx8UrYn7STSb4a4BMZABQU4KsYcwK",
  "key19": "67q2SheKezRxcmQUBFnETWurbPo1N5nP8USbaJy2g3UwvVKcgzTg1EkNuUYZ8BfC33X5reJC8X3ADsTfcQgsNbqn",
  "key20": "5yGDd23tdg1u5J6zCv2dVnFut1C9U3RGCnMw6mrcEskuUcBdJ5W8vm8gJpB6sm2A7ZjM6uhaaqbuC64NkQ6eYVp8",
  "key21": "e9USEHGPBz69EcQiUqt3NJGN6ED1etjqmpQ4xs8XdFNfkti7brg83JCj6vxcB5mCnHQTp1qodSB1ufrGk5rNUYw",
  "key22": "31s7EV46XRknruyxDqPaGBdNuPap91Vn5UuR7swALfA26xz5CMNrgt2EnFCGqkv2ho1LAK9ACMLtY7rmd515cksL",
  "key23": "57mZwTFnzrFTNnzbwqsTyyP4sq7qxseZ3Fxu43w4JefKXpihVVNZZv2TakARhzRmB9WePTe1x5fpttKR38Vs5RuW",
  "key24": "4LVrbQVLSxcPen7xBWTETtZ3dRfZDmGq22rFipbStwDygL6mR5jjwhcbC3q6QYteZeasK6y3fJm9QdtRKavnKaLk",
  "key25": "3bq9PnQNRoZmfXVfdBNZ8x8XkKfmqRFL7AdGMCV1ZgdguEtgdMXyUkGbobkZjYHZPKFCwnFQqTiQsuiSqmfc9fiD",
  "key26": "a3TwXdcJZ9vAw9DsT1hZTRUzVnxpfaqd3bLLU5WLoeS9YUAqt7cccyE76vjzw484upQKH7yD3omuEQuA1gnzaoj",
  "key27": "644183pzQHZVc9593fvc3RSde7hPRM6yaPNWupnTF54BNtxkQVqk12LKZKKbRgmm1vnxZrrN4i4ogyJqMVmw7B1b",
  "key28": "eaYeiakLwrH5Vri233pri2DJRMfGXTdBju6MZDrawihcJoMWXMytgmjRMGXdQZUXGc33aR8axgr4hh6T8YcUAd9",
  "key29": "58bpmQTEDKCtDCT41FXybhhvC3TrksYiHFqtbVonB3hSXXDhaTHUuqoPYbYmQtprZfyVmwfJeBHTz5dQgpgpU6i6"
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
