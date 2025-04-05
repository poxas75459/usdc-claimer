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
    "57n41kdvyimXkhwPGWi679iYavd8MNUTbRiysjAKJN7F3xDDAq4umCwj6YjYqorDUhtsF5ZLibbWteaPupn5f4cC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuhSq9K82vVU2KAfeQGG3jQZzHWcFPkM8SYvoLNR3wrQ6wtzN4d5sDZ4YbGRVPqFrhqG7Gfs1zpBMqXURbeu1gy",
  "key1": "ZvsWve2WFmuvbjPLGeXbvN3nVqENi8iUM2jjBuoFgsLMKvcVWGWEgBqGyFfCVqhz5oiWQhode1uCQCdKKR1e2S1",
  "key2": "26mvyVwgJQPjNosW86wRT6D2Cy5zZyx2wpq9rYgmWnHkY7e5JNwyyqH68KxVo73hQJsbHvLPHbbqp561N37raq1U",
  "key3": "4G2ye9B9gBXT9nG9FrKUujhoTphyeXe16TUiNyHrPyuT634VHq3PqaUFnK9zJor4HqNHpYP7pzdyNmQDvHZcTrxD",
  "key4": "3eg5AUyao3JjyxqKJJ4Z4AScVsdWVQJyRJa76pdDL2TWS5dEZ8p4DjMg5pwhkRNCKYEusHsRM2fFLkRGZgES1hWi",
  "key5": "2cbkauovwTtfA9JjuqYpMHaWuBKobgBRWcZGZepRFpJpYgm8KTqwScETXHdEDn2Cs3tqeLT1nLEjvJmNgazh1N7x",
  "key6": "3JguMi82WsQ6X2njonn2m97eXJBr2UHbcQeoDFaBzWAvQMymdE21hv1DTwk1Er2XeCK2A9kP5orwjfdZGMc42qHk",
  "key7": "67QG8icVmaJ9b8V6P3xDffWyuMdFtrbynxA4i1mv59ZAhdhkaZ5Z5BMXXCpKWfZEK28eHUcwHdVFrDCXqmTtBGfE",
  "key8": "QxsDRuNdfN9tEuKbFEJ4tRu9N8QVzm3cyHD9B5PUDb3EzZaNJbUkHdqoYUTSxAynHkano8igavefWbpQPuFXqwW",
  "key9": "47rBRhCsVR1vGHZ8uhAGJWTBSFQPo6z8bZqu9f5NMf1AiH9dA9fpDxUYLHpRsVyd72skPGWyA9YJCjmZNhd84wbc",
  "key10": "541ibFk2PbN8AGyb6M6vzdqg7SCRaUBUoykUeTqnG3ttLSUfPeFQbBh7jXqN4HH3GLnqrQoH59wtt1qZPyanLyFy",
  "key11": "5aTYfUt7dJKb3RScLeLxmomzpaJhSWfaZvnBTUUuBGdG9BGCYAA8jh3qg7Xtbr4n19xS6vCSALYE7DmWgB8SbujR",
  "key12": "2DW8BUMFADmok2CE5oZFRxhFfU2jzFUuLmBSNB2i8uXeNeKwx7S9yfeLGTXzVwhsFBFRFszwdwGgjhibm4NsQQUN",
  "key13": "5FzRC9GWk2t6UU97zoAraQD36ZL1tmeaEuRMQxYiaNvjPdNgbrqrD4utSiodiSvGcKzxGRSqDk5sYQn8dgh6ZYgu",
  "key14": "29zfRJ5zdHgt7RNbohy2o2tHnAP4tkWZcXX7UyPVZViummtfG6G47wKDmjhRKp8LgtaQeo2uUA16N9QZEwDMquf9",
  "key15": "4vFPqYmE7kmMrg6NeGM9wR5qTvuCpZ1a9gNDtLitBFTAgTG5NB2WW873qXEg3tuWAtkdqsdSNryPJxHn2TMj4cEN",
  "key16": "24ZH6ZfEL9ehBEqHXjMpsLHJGhAZYTKzBRAcQ7m4QZwq8eurte4qLxAc3Y4xtt2JtuHyadPTr526G4E6N2pzt2RE",
  "key17": "68NXgx5RVqF9FydmD59LYkgfbfaZEgitx6X4nSRGKX3dMXkyW44u2HR8YXtFSiGzXow3bU9MsQ3h3HLuwc7RL9b",
  "key18": "4dpqbUwQUR5ok1NiVTf3QxrRggaq9wq4en9F4YpuxUF7rFRvJAD2HgHGjosUqDWx7Dgs1d1bVzhrE2dD1wZ7voK4",
  "key19": "PgEdAP2pYmfsVSiCpBew4hhAqxoMafN2sTuPWrXuE6W3CUG4AucFwRgWTwbNCBiki3TqHi8y2PHhSSBLaBLPuR5",
  "key20": "5KZCJMFZ4Qs1Rdz9McHpK1ubdZ8vHsBTyfc8Saui3zcmbJJm8ytDFiBmmqbnxaeeUr2kKyfE6PJtGNAfhnL88kbA",
  "key21": "2SXnvXg9h35vfRAZVfHmsvBPFGfn8KkX4wAUMrPW2aE4VwGEFwsZ5WKH9RxbQwPHEdvnTcwnjnWBaTfcP8Zb43SM",
  "key22": "3vs2L3eg45JoqDnyQGka7ViFGWqux8w62aZ5FZ7eKNUs42WugG7JvVazL13ocKj2TfwZSqUciMCGr9fA4XvH4eRH",
  "key23": "5AVapDuiM8U7bPb6yTuDEEVT5GG5m69nyrcWpE6w62PYxSAs1ygY78pst8dB356ddQgaqWx1987PYQkNYqfEazJd",
  "key24": "5r5k8wznyJV6ss81USztER9C2jkBRkc3KXcLtCqAkXMfXZamcDznc8im1RsMUsaBF2nTmfPgsJ2E1Kw56EWiF5R1",
  "key25": "2ZvfSiZJUXPMWu2YmXBS2mmoyDT7i5eHoC3hwyZoDcFo5gJQYrP3Qmfw2LttbQhEosrMvikiSgiX7M5pso5eTgSS",
  "key26": "4iKCd1f6MJLhv9JVn3ZWGZsUHWf79jWGMiGuoWrQRaHhm5awWMfmLzHPG2rJJVfuFE6bnwdmJKDGi3TMA1Q7pXiW",
  "key27": "4weLgEV1iULk5ZVYPncaMymTC6gECSwfTgWkZvwkN32WJQPCHZWmhqPoGTZGrgTzRXVSkjCpFmvTE4474XXmHEqk",
  "key28": "3aU9W2wUvzCEmEADEeR7kKD8JstDLhYn7zMHmLtBeckXNMzaD5wBSw2ntciUHEdtpEoKApmE8X615fJS9ABeYYzF",
  "key29": "yrvvSoRX35QUd5EwxU1zbkmaEJDfL3ctmouePZ1eVB5ghfcBvLPQxKXXzArZtubBFXGssJwcmUzVqnovDWsxcuU"
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
