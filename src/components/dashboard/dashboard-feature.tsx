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
    "3kUuhypANLGst27xLGU4ZWjZxhcAEzZEisujfpW3qwWx1jzEvtgwNEhtS1Dif5qcNY2t9Sq1SsSKC96VUee7DJyR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YPrfAMSbyEtRdreFTxGSrB4jAfrimKUhjc6wzxev4rMrUPrp6c7vzrneextXza4kwT2LKBet5iDvn7hayPyUBdf",
  "key1": "JVVLtphgpz1eMJQTVREDaSZocMSL7uTz1HKSSRJMntjBsgGEa9nVxHqpmWWjcSsGQyY87XVBiZ7k5qCdcpsxyVL",
  "key2": "3WuouHSrx8meQBTJSrJqPsL4S9xVakHVLiu2PS3fiXmRcD8vP4pWYR6u22h646LfNNuF9vwdMfhCBCB4vwzPK8Gh",
  "key3": "4qRsJnnpMWnUuyRhMdTmcSwHpiYSuKWVV9RkMfiVsfrW2bnQSep3NLFNTw4miwi1xV2Gwf3QQwDpmJkyBf9xDWHb",
  "key4": "5HoYJbkq7kRJ1o2WbwMSyjC3SbfPr5QWSV8hqnSF5AooWaWLydMK1hbC1bCiJgJaLSFakqeZkbotpoGtHjgtEtKx",
  "key5": "3yBbCxNwMhHP3YTneNab8fpn6HSBxkCNx4uoGY9FdwcwwxEjY61UkacHdWb4jFYGQN6NmZphL3ax3AgBUp11uZ82",
  "key6": "249HwU7Lk4Shzv8RggmxhendXnCqiYCt3FXQJEfsDPG4TzrEGR4yWYXYnWpqiBfUKv398EkAd8ZgJAvEmCZT4nm2",
  "key7": "3vQse8LX2rGJ6xThXcm2WproCXZnMCifAwuUyN1LTgoebEfaWEvgKg9ZusJKdLABdqdLovQvdc3njVdHb92aJsBr",
  "key8": "3jdPpJE5FgMkpNqjQ6L9by5X2j4bViSP7Yn2cK2vKRwjqWTpRtgVYpBsbWAb7zwsvzyvUo4nD74uihVqV49gy5KW",
  "key9": "4zLKGxgTuC3Sd1iYDKWZPzuZyi7PcnAjmWLsQRYsjz6Eq6hVw4yeW6wYHAo7PP1fPwHMtUSyjprMFVDwoYMTieFe",
  "key10": "5roJiBn9wgaxVvWzr5ursonmmWfERztR5Hj44Ya6SHTJBqxz2qbyavJyjwWHuQe7wA6Wrk8RiD2E9kD1aRXfXRGj",
  "key11": "5NPZfAUqAehGQvUZ2vanRCsagaLaEiX9aKzSVUDjPk7QLYsH3wA9ZTPmRwoMFoGpqcMBPa5HfmcfUkSskXx9Ydqm",
  "key12": "66vWvv5nYbk38nKm6c85Mu4UTwUMd8pnqP9sHvTA8FC1jfCQz2RfjGMLbwzDKHCRU4svzuAXHVxTaTYaJV1bSsPS",
  "key13": "4nrGmydpvw2ic5KBHKRcrz5rz35kZJH82HDsGiJd7ApEzyoWWZPQjRtUL52iy27xUwmq8rdKvkeL2fNyxoN6qM1",
  "key14": "2aBxLRjcLPR737mwM6xshLVhJ8fsyUXPURXiBEbiEjuFX9v7d1L4gZb93YM1oQjAEebYZCHDhTJecVW8mfUGdMSf",
  "key15": "44hjrmsdcCrrdsJkXr9h1r9bqcwHtsJkD72PUJhGamnNJDJhZQqGK7NgyegeUPy5abdHam9daXYY959JFMxpunj5",
  "key16": "n4q6bahiNLBwnSq5HpdnWSwotQidStYrTtHBpQBpDxjhxrypj2p9rCQza8VpkbRSP2Y5jsh1FD3bBZbmUwsGK5p",
  "key17": "3ne6oUiBYSwfWCvx486aowqnR2dDXMziHAxzYXEGxkNLMUvUzo6nZQktuWvjYdDT1ZmEzS2naa5nkQZfh8nomNUA",
  "key18": "2kCejbqYDTNCpTgFbcvG5RHQ1n4yxDkwPDUiGrSE7nzTcPT7g7RoM2iYWP5ZwqWLpbVozNi4EcYgEGqHJZWHhvAX",
  "key19": "SiGZE4qS5CLKUNwA2u6T9YVXkyt4vW78btaUYn5aj1h52BV6GFKRwMbUf375L6LfTuuaXUaaUA4mSW5XrJaqgX8",
  "key20": "RJiy8mJ1KVEaH8h8z8TYePHnbAkx3sZLsBLX67CChoq81oUr8CJuYbtFDmsQhrdoMFUeb11po8hiut3yDsmBHob",
  "key21": "5StXcdAQGRTF9UVWVPVz9ReC9DdjNLuvHD8HdxGqFMonaeGve2xHbTA5kvMPSkeW45gYkqBnyAgRR9vnsdP6S5tN",
  "key22": "6N4nzs9vb74yvpLG9JHX76M8pS2DhJgDBAmvaVd5BTmx5EL8CtGKxRNRWtEmBD3PFC33M3K6dwTS4Qn4Ux47s1v",
  "key23": "47aY9ZJcUFGQ1qJnWZetgVrr9t8gs1PT9wbnGWc75sAVPTyjK1KanimzgC4hRG8ZwBtwHTAwhxXYV9Fsf3FhtTWv",
  "key24": "3MDC4KLXRx52G4kSgW54xVSRfYGgC4enS1ksLHPZDnYyLno7RYg9qqyFw7fmaeKjKMcrbS4JSUFLxrxiHB4WZhRP",
  "key25": "42vsoFMXukdrjZLmkiuV2vfwNwuHZFf3uqwAnh98QdwaHpUTFXX1s1dGxcMQBpL7yrcAtSWroN3RST8qxAaVozNK"
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
