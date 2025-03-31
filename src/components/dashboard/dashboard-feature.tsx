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
    "5jpUPaN32YCb46MqmD35YFjToWDbw3asoaKYzj3tio4JoESHJi6Muwn4FU8EL2ct41AJXDvgK36Vu9Zo9N8QaeXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEtZbPTyvTjpWxv7awGz3hADysUMvpTdB4QR4oMTVXH4jU8hYjYjsQSPrRqySQG9sjU3ZnenXYAXy5KsEDobWXd",
  "key1": "3uKdMgbruPT643BsSXpwX3BhLpsXz6jMycPwZPSiPQ9zkeHbBuxJMA9xTBD4XxURmXXwKepJWfp8psqG7CCpiNoR",
  "key2": "5d3xaSqVyU626KxqybYcDd2jRCEkARTZg9n8QmmYV5zys7pAzB8AhCacpbz1CuYqrjYPUyhf3ETUhVQJkxs3Tx3q",
  "key3": "5LxrPC5UpR4xTvGtttwKYKJw2zcryN4vnUceBFm8aVfQ4xmJTJWcFomtjADMt5tTdPWXMQY25gD824RqZzo8Tuob",
  "key4": "v6wJQKWrfKaSVHekLjP9b38UmUMzJ4wEuHsuZ4WLfpdt6QKedUNfP8a69p2jotb4gawZWYRLmastucCPeKDbXWw",
  "key5": "4vKVRDBbr8778AykyV6AsnXXEi6PZRHWUtCzSeJSJ3rPZjazJbBmtLNSCh5RpUV15tajpQSV2a253nmzWYQ2wTtN",
  "key6": "2L6xL3Eh4iLm6Uy3prAZLViaRCSZkzT4xp75Ppzp4GWu4LfBKruPBs1NeafH8kXxcXDMHZRYnfWTkM2h57XHUjos",
  "key7": "BTePrC9HRtCMmZ22tJW9mKXWVL2u259HwdmfVQ1gSAiydsGU8WjUKHwPRWGqqVmFeadooa1TrVfdSUviu8Gu9gi",
  "key8": "5aD2kK7JW9ds1nyesAaqAKmET2rCrqhgzzyZMrmcrL7uLugmSUE9ZSogexyJyGnbPcCrvot1nweWZzbGVam7x1rK",
  "key9": "5wr5pX5PoeKej2qYcwJfxU9fVaiATsLhDDa8uHh2jrVAbkCRmiMLyXsULDpZBMJS5iGfrY8BExY5FHHQ52eusGJb",
  "key10": "3jGVVkUsQ3dKnceeQSEVTHH5gmDTp9AzgrwMzZacYDEc9BUvGSsWaq8vDhL2TGJzB5LaH67vPDnhmuR9pe4WUNQ2",
  "key11": "4QZ9YuQM8c8i3xE5unPXsW77yePjekxEYGCFr8162E4FcHi8tTUPYjYUBqqZqiaQPRDHVqCanQbDMcDsKw3XPMKP",
  "key12": "T2vy6jeoP4WEwXa4rjHvVAgNycSsZ7JNrEUn3Bqxt5GaFULQpT6nKQ3qDk4SZsKffKWzqdw1sGRoXJZ19PrEQ73",
  "key13": "5dBkE1ex9dsTfLB3NUmGTBjsQun6MdAEsiMW7mBSgxHtaUatUcUXyMRhZhUgkQGUTxJF18gTnaiAHSgpMmYfNpiq",
  "key14": "5gHfKUMyVvCazLH4xgieyhMUhtVHDnrGKKXfiAHYNWiX9vDBpD9nhKTRLfo9YrSj2zChzVRjV8yR1BhiaX5GEeEk",
  "key15": "2Decqy19AfGbYLaWDDNmupgrhrzfRtfpL6MYML4eGf5XMa67wDh3ecpWb1pKQggZTh4VZRHx8FY51oBZ9TocGoZK",
  "key16": "2PrbdZ12PJgGWobyQoy1hYLYUFxgtDhuFoxWwR1X6LGxT4fCt8G8bxSrNP56qijP9v84Azdhn6s9WYaeG5DN9Kxz",
  "key17": "4vtn5SjH9xr7tRHnVt2aLA7M3hFaFM2i2CDW7ggjAsrgYdMuB6F455DdxgHzFQXBjPVqdBVT9RcUxMDftKLmhxdo",
  "key18": "4oyW4kYCo3UxAJXGsUpvwN9qLbMysGQ5AEkjNPKNWjm8fu8zMcyARSuPTjNhHGq6FDrKPJuXATZAMFC99tktG2G5",
  "key19": "2pxW9BUjsp8z898LiXTuysFTXQbGBrg4t4TZfSKmGFgxZzGRbzRKL1BBSX9a8CgXyjTmAcQsSQQ3qZfeTW7jxHev",
  "key20": "2PRk9riN97JJNREyskumxhm2ayL6cumZAE7QDrjJg4cFYGr3odU58gb3JHvL67j9v8a8YACi8Y7BiKgbMmUfGnf8",
  "key21": "d36brxAWQoSEXzsb5Kib6b2Lb2fjP16t5d1eLSpKcnk7TYUGTLqXFj6sVHHk2UusUC5fLY2QgbgP8WmkepVhuxT",
  "key22": "wRHJRraNL2bDwExiXTFJfBFCNtZdCJpnkStenQqtAuUYpWy6kCZneu4cXPfdgJxfFiURAX9BpJHAPeBvACR8UwS",
  "key23": "39CeK5xJr3yzk2dY6U7jXEXJ51dxtJcM3fqPctgPTEm9Q96geCg4mLtPsYMDTwsaj9DjCqCjxZWqiT76Bf6V82fb",
  "key24": "HT7o3KENZ3Enz64DoFG292Mt4tGBbuDEDddYSQD6c7nXGYBMuBpsYx7wWCZZ8BhFZzVMdLakhcZmtHdcZweU6Wy",
  "key25": "3vcwJiARJQKZPRuxEw3N7bq5Y28DHV5SYmpFBkydVFT5s4PrJzz9DXWXy787GTV923yvjTQh93XYMTvQ2wk6W6fY",
  "key26": "4r6k2fduNVn8Pn9LqVpcTaSubL3RoispAtYuPWBMSspo9h9eD5Cz1i8N4gJNZVzRSs1t7gFjZBMaJKmgAAH8XZ8B",
  "key27": "43EST77gHWsJJfWUzqG6d6wmozx769MSoJgSpCy4zTRhmn6LzKub3H5jzw2aZp2Yz81UT3ZqcRHP4nD1S5mBwicz",
  "key28": "64YTqRTLheyzBtdre1NJsBpENwmk3pFfNNvGkZVZAmALtiLA5zotDMma1yPD3LxhtaFwmqoe9XXPuxzPTLACAV4U",
  "key29": "r62kR9Nybb7AcqFhmjRqYrj3eiy4EncyENxbYUTn5yG5oRPVTXfHQqdnMUWR5AmE23aDsAAgvvxG1sAznS8FhvR",
  "key30": "4nkAbPhUfnooAUnQQdHUWDpdFqfZHRusXef5Mg3YaMDxqyfHtTXXiL3J5uWbkEnVzcH6nzviFFcpYrQ4iLrbeCSQ",
  "key31": "5TyQXQK9dtQjMUFeEGcEvLAm133Cb4Bt7LdrYocL7qe9Rjd1gt3haKjjCnYwMA7sT5BJNKjJpMWuNG41ELppFjjp"
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
