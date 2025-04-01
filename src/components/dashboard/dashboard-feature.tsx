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
    "5m7rQNvtREELtUynL23fBdJnFDDiwMnMUAy4G7a33hLtwiPNR85hLR6rBn3163e9TFETauTZfM5y4YE2nEJAM1gB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tvBiSyLJ71MQDYsFkPEvW9ix9Vd91XTBrsc4yqnk9sAfWyou3qJemips7kCi3LuVv96ZBWo3Zar76V8vi7iYbhv",
  "key1": "fY7vH7upphx1MWaYgVkThYW28D5fJe3sunzCjJcTutLgdEYMvNqQFC7P4EAKKt4CY78zmuPqjTd3qiim4Msneqf",
  "key2": "4KXU2VUkjwb5zx7egveoB1vWzEoeZYjVB5qYP3fNdkoJpHA6VWmV7cZNGSwRRFG4i57zDKMjKbp9fkKEbV7DJTdy",
  "key3": "5TLd5kxhEMiS9g66H2QkRizZPe84GH8r3bRkuogtr8mN5xKYE7aho4tHZtqHjXjgQ88i2mz5RyqnZ7386tNsfkvC",
  "key4": "5VaSvNAt5Tbw12CheAcSfT2RJRrnkMgGb9b2sZmHNmLaC9EVNTEWZei2tWtfXYEJYAghPQmiquu1dfeGZx6hLeL1",
  "key5": "2UAz36rcWk4vvAibUuCeGWPC1KEAxvLk55yCt7b2JuSb44FeLdvHhjoEntUe6NNZFz33XXW95zTGBoi2hvU2HB98",
  "key6": "5RLqitGgma2ZnYGxCujCVyWX4krw4xmLef5nXUJk8ECari788zq5KvozzpJwqeUkyd44vstLp1RofT6EyifF4UWX",
  "key7": "44ogiQ6CWjfvCjXECowCRTPLZX5Mg3x2fU1ExGEd5X9qBjTWqnTc7sStBzHdELnk4TrGKnFfR4ofNRhfPhFQjdvT",
  "key8": "FDWEFfvxhd9Q7aytDUE9LYK2Ve6LP5vtiy9GXwbsKh4RyH1FoZ66WQrBjT34a2L4sHDSC6kdMxwcqzmWveQ5pGs",
  "key9": "2TzVy52Ya1DpxCQeZj8Afsfpsk7UJihyuWjdLUmFVpQ9r3wNauztzQxKUVwZrDC5RrJDxe5P7QtpMQW3Q1ecrzVu",
  "key10": "3RowsZWVDkcBwj9grdkiNjvCtymWV1oFEh9Tqw5hMpcnYG42K9rM3XjauCqLavRGK8AZDBW4SbTWeYaVu4GsG6to",
  "key11": "3GtDE8RGom5rw9kPQYAUozGAySHqx9N8ofNwNXscxBxy1AodNGtxKsKEMur33rEngxBPShcBYSbX5zmdn1hxs2yo",
  "key12": "4d7JndbH6Svuqwc2X7NXMtknBfmWnA7yfXkoD8nVGsQb2sRSDHx5Zp4sTvkn8nsqSSbvVinCGyMR6xzXbtRKdD15",
  "key13": "jYTbx6ikyML6NDYqNek4itxviCksRpfRJJdpXAXMV5A4WNAYFZM2qaBS2Vdb2c1ZwJLwb1AqxJkgdWDGor2wAcr",
  "key14": "4r7zhHEtVV9ste2UWicCbv3EAZ9gE7v6PxTuimbD55Qmmp7H19MVGz5A6MtfvLpEVVGocVNBpCuz5Up947ZsTLCn",
  "key15": "2i7pUHpYbQCY7ywcTLMNRzmXrWWFzoQsqHUeiG35pzuBK6wQc6wSAdPKypqwZb1HDJw4eTeVbfsG3WYnqoK2qULi",
  "key16": "FX6wbMi43ALJ8XFsjw5ynEoUqWRcb8GAf7mRyr9vxR9TE2DYbQYkwxtnjXsZpF5bj1WByrcBeML6xhAdCBaaqv4",
  "key17": "43fh9PComiwTLazpdgzi5VbpEwupV3qUrr6BCbi7Wz6yJpBJGUNXjDDQWUbZpkParrfUe6C76A893qhgk7hmn1TU",
  "key18": "5eqR5sWetSeQ5jttnYzLN5r2TTQ67Z5M9TVLx5BTq6DY3me7yoe3NK32xsnY1rX3aVzRKMfHTj1cCiKXvjVbZsJa",
  "key19": "4sqzeZ43wBAWyrYshL4LyM95NebtsSeeT84epJqb1YwJ8R9qJanPxVy2KWZeQ1DVhLvEGot1pRvN9oTPJivp31hZ",
  "key20": "44fdd3FP2fXoL9jJuHpKbcwJP1HShXDQzV5wtyukr7GUfQk7o2xdZVUMjGk9gRtp7KrY7sXZtvkqWY7Uan8HDfEV",
  "key21": "4F2xdwr55uGYTuuvEvJhoi8kHg6AEjDQsrzAY3SSJcJksJLu6P8pBrqMXWgwrA2WV3am7eKLJdLLT9ehFnCs7Jyo",
  "key22": "7yTp1jr9PBjTUMV8jSCjPjtr4yvd9oDGjXeU8B6UrMSt6Lz6QH8XAaCx2pjNd1r676spf6rLDV19G2sQXBGEenh",
  "key23": "3GWQWGjufbatPi9stoRfeVZC9tyozyVDvwXSJ9yZgsQSg3mrHeo47sjkWnTG11yBymekhifZY3ViWbAEXdnAGNAo",
  "key24": "eyY2i2MWdAgp2yiKy6LBv8cGZSbLzoY6BVGbBWJqQe7xa1RryESwJ51Qh7f23usShVHpR77ECXMLfSHVjA8XCkr"
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
