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
    "3cKyt9uxSztvds9RJJ2PVikudpR9MuetAh8KcraKoCtbYyQ3bPRoJPYaYrgruYyGhvNaFrNzDw6XG4rfdAwJVBdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FeTf3yMENPjRDgi7Nga1z8MUmD5pGEB5N7SEuZxfvxxZf8SE6UcQcyofR1LSoUY4GaJRHtZVsRzTEGqf99WHJE7",
  "key1": "45nXPbho6cQHuWxwM6eY2RFoBbc47rfRd7SL68jYQ3R4HfWfVgsgU499ZPT9MoCrQEWCrp5EKYydPZ6jT2paKQSq",
  "key2": "3PXZo1g8SPhrPB6pVq293ygQuZkDMbPgBK6dTUz19SEXma61pfvTKJJTf2fnxAYYnqX6mYmrbXx38xvcNxMsfewc",
  "key3": "4ZQ9RFA485mu5UXkwXWBLSPYcP4D8g3kmpSLTh6UnM9vY8Gdvopt5BAVhNhqvatikMSb3eX5mKVkTXjjePfKrpgK",
  "key4": "3abMDmSgWmUmYKD2zBpWZCcadZiYtu4VyHxdmueB1nqY1qqXyqNnXwtWtu7qSL9KuxSqFW37FvkCRqEkjB67rzDL",
  "key5": "2bUb8kTCSGkZXyBqEtguavP3SytSjMBYZ5Hi3PDNAWWQTu6gWt3Lo5hmLYWNJdsk9MmKGw2U8qGjuKyfbhc3RodH",
  "key6": "sBxHu2PgBCc7Eb79bvFkkb44PEMgh2Ewoxi235XgHwmCpBdJ1XY8ZD7etgduWyG2KTbkgnEc7rKGt75YEMyPCCC",
  "key7": "39haHAkAT54adjoEGmP6t1M2BXs9ziytdHuGT4jVxbMTkBk77ADkLY6eBgLkxS6msCtwncssYhK1E5LMGX9fgJAv",
  "key8": "2s6kWjZY2Y5s5H11hAQqrw7hMZdt87uXMXNrNURGoJehcN7RFsQyci7ZVzMkz4n1a6JnmygjbNoeYBTSxQY5nTr7",
  "key9": "3yfx65WGn1pt6j7gHVZwRXJhtDH5cnz6Tb3AtC2R7ETmhreeSah148yfZ7Cdj4y5cp1cxw8HXh1RYYwTGzHNbqZa",
  "key10": "4HduTjRK1NqwhtMSPTLqJrfcKVLZZXHQejRkhJUH7AhPttn2cpGfFZD4uhjEQDB1xgUrc5M6FduV5VyGXjMkfBj7",
  "key11": "2XX3JhHM7VhHen9xaBjVhu37kKzXybtdudhMiT46v43E3s8HrK34ZQRiuSQGrkf6VekgFNmth7kYTAHDTA2MR2wH",
  "key12": "4A4CQf2Uc9AbrdJqZyvTdzTnLLssEY1G28pYK248VYnkNFnKZUNocywRBG6hrHhoieJBVVXVZgcjpG8tczjtqCte",
  "key13": "57eDT8MKoUpgrcyJW22cCbdj87NaBMhk5kws7AzBi2L3REwFDxz3G7G7RFFqCXHENrXTUCDa4xkTtejgf8RW3hkC",
  "key14": "Xvm4SH7znJbXHETGyHa2dCUG4shCuBuUsDFMsyEfsJyAVjnjQKD3B4M4DynYaHyxCziS7rMu8Fv4sd6CpH6Yb4E",
  "key15": "2B5FPvoxypoZr9s9iwEPVS3jCw6ndbMmDRSVFAes6EdJ7cEigBojmS7B55bsSF78bdZKnd54FCcMVD4VqfQzkz17",
  "key16": "3Z9n8b6Efa84ygu476WXcEzsndZWNn5z4fKBZC2kBKJaHDFTb6LcEV6sq8DPxagRfrCddop5Q68AibupWgWNfby7",
  "key17": "5iPLDdxs1b6j2Lsw9c6c29BVv6TPH8XywLSkon6uzTh38cJeHtCRgq4SJ9CPsJZjqeScL68dG1rRr3esivac16q7",
  "key18": "3vNkdLSVXmvAVBXzG65vQzBfX6z1p5GNdWe28tDRe2aCwbgcrQbQQEa2knciyK62DpSYMRfuCcNRVtiFFsUiovUi",
  "key19": "2fKeXzrx2gSV6upFYEQpU1oTjGptYgDvSjXnSN13w6FMKLgjCHmwvhkhr2N8PTaWDWmwpHzQfzT4tGT9ykUVp3qS",
  "key20": "43iaLmZjJ6uCJbSVdzvZpe2cqTasMYNyPPxSSX9CHYP5zyr5dUqv2NMnseUxK9yurJ5CGgEVER6duvh4A2JsawRY",
  "key21": "2QymqDnKQuL3JiQzqW7cd8STKL19HnZGzbfDwsPorVScbj81V8feuAMZLTCeFeyuZmhLgHRXavX4TUyBzZKVsBrY",
  "key22": "3juaNw2dsW7DJap7kDqhXzNAcUcrGs6Svt8iUiDFqyn4BVYyEZAaU7JQ7oejvijG9s3egUBx27yPZThMLMQx8UmJ",
  "key23": "5Kqp4cZYUFZnKCxMGMosA5TtdmRx9yqDbTR77gXGjYD6PPsY8NZqsB9EwNiC1gt7ByfdkujWvGNvoWrn97aYzixX",
  "key24": "2JPmGaaoZRU8sCpuCqCy3p7TZ5daM1xyovrktqxQz49mNY7h5m5uisxAMV3siNvgMempni9ecEixaLEnfVpG2Swe",
  "key25": "5SLxs8Z2ojWPffjUp4hZp18d7mPF9AAc65Ng96yDeCcmagCunfNxjV4DCSRZgw7BKZP2d5LRj66XL4UW5cqD8Bia",
  "key26": "3DPSLKU94Sx6bjC9FhH61huWzgbJNA5GZg9MovfSPJfrETPe4hqpWP4C7kZZtxu1sCyJfvyXPm2qufrb8jivhTYm",
  "key27": "5xUK99gzVsseAJLL9R8XR1bYA5Jp7q5Gzge8u8EknZMGAh7SNZhKM8hQ2bhif9geCNJ9GfEaEDfTFsyT7GUsjAKg",
  "key28": "2MATunhuHPs1CXdsjv1TXbfHRNc1762uiQCAQC8Gc647pZNreQCDF4LBBV1N8ARx9ziuzyrFQRKXDg24hpxnYPwk",
  "key29": "4madCdprUddgAmGSTzsogiupMsnznjo56tdYUtKKD89q5XnBKH25SGmdcK8NUa3Vza5mYojzhBtQPRPPq18jmzWy",
  "key30": "28qVnTStkBFqWcciUidXQWcMuPgeLLfzk9KbhBQWs9jR3x7xXpkvQoeRavthG8jVe7a72yUkAbgnxKmsC7VPnRJE",
  "key31": "5JKDuRtzihHLRsJChRscVU4ha5t9eFRJ5QdWzxJmMSKMzDqCKffERVGtnnD1bZWrHeLKk6cw5N4BnoeajDLRrPZg",
  "key32": "2QaSDftUeyXcRgYSB3wrUis9s9ymhSoyUY3NBYdCdhS7F4hakKgiHTrvDaHJdf6i91ADj8X1SUxCzJoA3iY658ae",
  "key33": "5VwemHRNYBkERtqTAz45wLADVA3JT1nTsTpB2gSatYCWQMexpTcu4SYYoFwRa51P5yeC4NChT4hSbaS3MJrLPcBq",
  "key34": "35c4r24YsAGZfPUycDB2nVo14KsCjTpNfcyGCr5utRiAdUXawX45J2kX7Wv4RvfXkUqFVNBarYVBizKsVsamscHh",
  "key35": "4MrwxQ7FyBo56UCUMx3meZGsYtyCPPnhjJtogmteBmmYbRauCc3sUTb8AyXTzeUwC1RPdyESA5qyYzEud9ARVF2s"
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
