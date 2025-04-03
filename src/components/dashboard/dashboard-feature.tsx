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
    "foc8yEDJcfyQb6TjjaTeczqFWafH78biK8EmwiFGMnDCDvuA5HNxRJ8zgfDfjLW9wPGxCZfJTDK516miUg4En1v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62QsvKw5MhAr8WFtzN7avQNDwLEiSDFXr2NqeaxMRoTno3QNLVGy4p8G4SwG7kuhHZEQwaS6nBg3PZMz7piLDBTe",
  "key1": "33jRTKbnjuHkesUe4Yt5Wzc7abymYZ9qCuYF7EuDxUnYgk6WdGMazGngCy8Yb9GisGYDfDt4ttftHmnJAm3c5Bu8",
  "key2": "3pEKp6Qz3w5kx9df4vZHHxvPAF1J8458NaUxxxsUNyZrWxkvaFdcU4Uw9D1yj8HaESVHvHogWPLWTJEqZo5NVH1x",
  "key3": "2WnsapKK62kHHdSZscbr8cuivKUzq56aadHvczf3WGR9RgvFVAMDBABWSgL9PrD3bhp63gBVky9gdJzooPhYzNRW",
  "key4": "4jD1JT2coc5ceEzhUnvBHHmDZmifpy5Y6Xr5gkLTmtY2XBZLsvZVNagF5wQwbZqH3thbapRXFrksM6bZvdPUFEXR",
  "key5": "58C73Wh6cUz6stszKWhqQo3xA2y2T4zjP4fG8EfE5EArFpbXN7WTfBGZcDQinyKJx8Wx6fhYSj55CqGm9DL9W8vX",
  "key6": "3puiWKERRws5YtLAUHDb2tUyL7gNyXmDmuq6oRiLVLLeRhZYYo3Tzr9WYXSu9MGfwV1riA9m5iFBebKPwaFMFV7V",
  "key7": "4Wusx5GN3XvBh29sUUPDKHqhtM91BsAu1P1E9NLW6v9e2n6TYjDqPFWuYYJTaZtMZAffkHtyDbHDpCYraRJcmaak",
  "key8": "2oUSk14cFXMDjpcB41zEjrAi9Zf8mM7bCCvwryRFjMQPveCouNvL3hecHbeW7LAAvNTwqy3Br3uHGYzagqrxAQm7",
  "key9": "5xVn27QMSewgJVRjVZFoGFyB2XhnCuLkkVzvUhLW3msq5ADBxAxwNQMHgYELDX62dHiAzZfjLNmYSc7HCRD7VGru",
  "key10": "59WoAYipVXJkJ2zK4uxZghAkgNoFkewHSod7YWhHv4U2A7YenKh5dBfpS6PXJxSPDiyALbw15iSDZtUqqayd3uTv",
  "key11": "3wCeGbpSVKW5Rv2brC73QYTJsCWRGiSghiEsukXKNKuUS2cjZysqQFuBxKDGmhkfF5yLt89SGVXvExXen7xorxat",
  "key12": "4e36VZFnBrWppy7hr1dL1dp9oTAGR4eyEDS3mvQVB99TS23s8A3m2i4Yngy1MgC7jRyMDdaUNSm32U6UCW6XEC9U",
  "key13": "5xjZzsASJSHeEUvNhq3cDeE6JqZ5wDoc3j7RsWeqTqf3H82moXYb8wAvQpdzV8BrsWeND2zhwAKQfjVGgsJo95zL",
  "key14": "yy1CnajK76TD3iw1opo3pw68ZPxjERActP7FzPLRQYSfPjbMnEEhjRy7EQFywntcV7aAkRoDfi744PrLEapZoqs",
  "key15": "5y75Vs6YzQLMKAmmZ7uX7ytesF5erAGtoqKewmKhLS3ua8kPqfGCnsPAH8jSKeBVun9g9BNRmkXEKjj5myDYR9eB",
  "key16": "2ft1C7g6q8Kr8ifUVzEqYULXAZUsEmMP35fygZkwGqWEddWByxqcNffwth2TVja12KQbmkfXS5eLYyvtRQoiVNR1",
  "key17": "27yJaUKtwsdA8mTzAE3Pceb3FvzmLjtLk9bXHUVN9GgD3JuphQ7ctrgwzpmDReAnXHYoJ31NSqvyEnnZDykrwbb6",
  "key18": "3hS5f4xnizeZVuhppYUnMD2VyicemjRPoQHAaUttxmFjJJSdX1wBdM6yb4kTWxmjvmNyEGaDgBKHgzXKLvSDNCzd",
  "key19": "3thTi3EntJh1xE4b9s7BG7Tbk4rksTJXGRGSrjSQMFJrZhAf3V9GfWEny968nbG6YzMMiU8kt89i6abJ4ffnnjcV",
  "key20": "3qL3u85mhcupD2wYhSjCGnd7Cr1VMiiyArYLVaayF891C69T8xjeJTBteXpKNN1Qw26qKhfeg3h5CvXFrtcZW7W1",
  "key21": "4NBkTB5pgstH3x9q1xHAPdqbUncvPofGg4pBvKVdpo4jLbPSYT13K1qTdwnzKqU38qWb1UkcdYTazcD9CTPsC1kz",
  "key22": "3cQBwSDurkGZUJ41wE525qUqj8aZ9gWHiCcHL4BKU9QoAYMbLL57xNU3u3b3s4wEY1T4bLX2k1DGZVGGjhosFgrD",
  "key23": "3eCE6mzQAFt2QfJZrt9LgtMJmxqDB1BmvgGAUx8ZetsZcftmfzNFSkE36WTWWgi7NkmSxzi5BXw1rohuBjfzBLgw",
  "key24": "4ARnyBiBDNTzfmBq4WkMhsW2Z1UcSWhJB8pBBMbHV7pRiRqZnvC2kUzYNURsHoas4ErJDkimWXhWjtDaXeAa9Avq",
  "key25": "48sz7WEU1CAmZUuXTgBgCjWwHgMcnDYGmH9pM9FsVw8mhVDkRNsMDQhZw9VJyVANGNNixFq3A4bHq4cEnLa3fCPf",
  "key26": "gd4qjZhAf2Jk8NYTVDJA2uGBYz2wYv6mSSW3sxrYsb8yjyfmUbApouEg9G9Dub4bks3793iANBvJ1R9HKirXNh4",
  "key27": "2addTCeqyp5p8koDkjSg418Vgd3s78rgFSUppKbzQhp2d73YbsbXRthjuM536a9umJyxbXAdDqsMjekrNJiFi5jL",
  "key28": "4Bv4oBWqobdWaN1TiVFnBoFu9mVAaF5xxkgaYKZDgFoJ8m5ouZHvPaFHd8ANeAwDe3nKRyzqWiJYgsyNB4EER8Ya"
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
