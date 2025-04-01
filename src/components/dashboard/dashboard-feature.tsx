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
    "2XaZY46P7cszgecqNcQBG4up3XCkTWVoKMuYDe6qWpdzaejbs6CqQJpaDMLxJmwY6D164mx8G6vt7R8MnJ33U8BQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XuJnpz1jcFTKUVquZ1CxuCN6MMnHpjCEqJuwNCwEPCYFqLYVMaJ5xRys5rcVVdGsNX6NwwJGuzgbLKgb1gVNAuM",
  "key1": "Nh2mfukrbbUQVRrhkGAdviMyUduqSFzEmoFydTEfK4WYEmHb8ciUAoQCArwnkf1Pvz5BoeMaX13q5UkyUoy5Yce",
  "key2": "3sWE1zbAvR14ejSiNejkVbXhGGg5PHhZn2BMmwm84b6ug3kZPzaC4Ccv96HM3iNq1XW3f7PbtXfBV2eL1E5UJYTz",
  "key3": "4Sp1xduuEuPvKN1zyQhjoQf6N1EAQWGF3yri8hAmqufavbcLN8w8EL5PBzDmwuJYhBPDy4BpUNQ4yhkA4TaQwZvK",
  "key4": "65EmDNCqQ5EYzmzc6JJ9P2BzADqVudSDmXZ7kFYZ8CEPcP7vFnsy4Q311h5xGFH951UYmocQSCG1DyULpyTVkcgs",
  "key5": "3u6NeBMYVxCYDHXyXwUABh5eDbCaTSpbtoRmUz82dViHECfFUoG9QnKcH8TJ854cDjATEVfGVtXvRKtWxz4rBY1t",
  "key6": "57qBKQJL8i4FiVQGLfNrA51dcZhRtDS8711L8snaZCX4gqHKHC6v9KiMNtFjnkuvKaYhoV2zgpFSAfJo55ibWNDf",
  "key7": "3YtQE1R96rY4kSfPwbMNUuuRr2ubPkFS7uj7u6i3RZLUXfSQzy5ekwanfAnL3nwH1xy8rFYF2zCozHyDchjJiySx",
  "key8": "2kaZvF9DoXsWbespb64DSR4mNsgGyqbZbikkoH2wErEGHCRd1wdZ4ofRdbpVqNzse9rhLEGA37EyapXjTAayPsFs",
  "key9": "y2ASgEZQR3ZmabNJFtoR6tHiJT781GpjHfkyXQxPrSTEsB5P4ksZdHdP2dH8c8u3PmnytGPgHjHt3oYYKTuf2yy",
  "key10": "4rqFWaeV3QfY2HkpG7fdXoChbjTUYDPwnSd9E6aKpWWSsAwHMhU9NDPfUm1K1BcdcNXpktrP2NVL59aAwLmtaCYv",
  "key11": "5WSLaR2LmJZ8pCQPzHxbdFwnRYQj4cTH4ZecpJJbaShdnAyUXGck4EHsjC6yZdhbHfjHE9dKBay81E1ojNaP3jBm",
  "key12": "3oYeUJqFHcqqCtCRTYyypk5t8aEsqfQsshBsSCqs3jLk7xmbBcNE9MMhwYyxLxj4jQ6yi2igCiVAbyQmHMSKmCsj",
  "key13": "3Q8p1D2UirdsM2yxPjTqCwk7gAwKYXpesTpMWgXFw57LwsgZHMBSJ9R2j9RRcXQnZ2moQytfhDqjXeRVQU1aVadY",
  "key14": "5R1eJixQrtWNCpK9RTq7343TxEeqQ72Fkz8EPqXK3wfGUwzatj2LUeimHQE9R2hxUHg84VHrkKrmjHBu9rh4hZPz",
  "key15": "5GciELqCspcEHL5d7ooq33v8yTYu4iFPieeWXnj5Qeo6g1YuYsJXCVB68wg2u8rEmfCjfLF5ft8HuxDKof8RHK24",
  "key16": "3HzT7YDK2fDn9tcju7bvTFQ4Mx3oEgX4bt2mJQMQi7ZgKHhrJMHVEzjn59LdHZX7P5odFGwjyxzrJLQUoCdnrWFq",
  "key17": "5x4PaTjvEYSNnZGfeLs1bvFeCu3KmVcgskKN5CcQZkQo64eWHtkgb2DqukXVW2NQeVE6hYN5Xcn11FGG8BDuoWix",
  "key18": "332JXK2HHa6ud3mCYhRWBQ6VooVEAUsf4WKUPzY9pQ8jMpAKZMQLX4VEFG2JDwVRUieYJfFmmZQpczx6CPZTeYdX",
  "key19": "2mz1caDjV8zcYLoeLfKWuzykngD3HsDg4KXWASCKkAmssQDszaxFk1qgWjmXLPLQrXo9FqqGdSNtJ7hUk3y7T158",
  "key20": "54AkiB1GyK8rtHwfYwHT1z5AVvBUdqQkp4iq8sxodhHu9ogL3Gxi26V7jnX2nFZp23XYNEV3cqPJYYJkCnQcxRpM",
  "key21": "WSdz6RR1fMeZdVUkNxuQUEaXiteAnuA9gR1ECDoKbFD2q7LEs4G9VuHZ7LjUGE3r11E8LBkdUr5rzW8DJ74fFvR",
  "key22": "46YdFjjzcvBXiMkspp59gs3FR5ZQPUZ2mhsADtRMsrUj5u8jhXj8JssHSGQMCV7uoJKtsQn6xCqJW4ne9GQN43Hh",
  "key23": "4X8Zu3vQGrfBfkUkYMmfNQ5EmSE3XeUv8DizKKjqUrnMDxVriDjY7M6SvPnZW17KAp3mHUbFXwFFC2EfE6JxEmW8",
  "key24": "59KTNaPoJPJ9FNCQWxckuGkPHhuFQgX3SV1QmVVHr6rFfGscY7pKHAq3XQo3B3QtEiwuoaHs7KChN8cnLJ9Wr4Rh",
  "key25": "31PGLb46bUJEzmQ3f7MHN7orScmerENQqGVFUAZFgXJwHWSCD1Yw7EGAVdkHUz7kbGaB2qC3upJQXKqKoK3B8zPd",
  "key26": "5krubVCUYdND1mxQYEV6Z5QVQto11y1WNKMeQr5FmasyVs9okzRTtMScK7KCRQ34s84wGvjMhyNWydMa3uZyESoq",
  "key27": "25YiMeZHX2kXw7xsnW3CP5LQr7Fi7HpTycUDbu2TFnDkks7r7wkaqoxGTgUzMg4h2X3DLoaU2AzXk4VXf5JBiPRc",
  "key28": "4ujfE7Vfk3f3UutASzmH3o7zGQ8Sssij7jJVSTJTbnXfGR8DZkvzQDxbd3xCDqGvwoA8p2mMt4HtFzrQrKnaoVkQ"
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
