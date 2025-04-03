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
    "2cFtMH7VZN4f6vXbvexDp6UbE293CbNeqoMKGfsBQd6H4TMapLtaEvcKNbgbzgkfv2CtRvJpKXopfnGJxL163qcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6x16Nbc5zrJSW7s2FswQojt81vWHrYdGs12CiDTdDLXHcXL1Va9hjgwpoXc9pBTDArzJimp6ag2pAxLaW41AVK1",
  "key1": "2JsPeicr6oQBvKBXmeD8VyL4DsscnQ4TkgND1CVSDaSiVUkEFi3dPSFF1n7exdA9xMTegzXUSJZGJpCGvBDPsJ6n",
  "key2": "2Zbxn59o1WSaZLMMbHe4uAskJfcc3bGbfweXhg7ZrSfixHK2JycqJWsHq69fCWeAsd9XpDKu6cvDNtqmguMjM51r",
  "key3": "4Byh8hid5CPeBM8M6iD4YtRbVSQwf2KqtQpiBfjxYvCfJChpywa82yoT25BJGodF1Tb2C9m8v7JdMoaVafg79vsr",
  "key4": "5ocS9AU115rnbWUuQa3zzUgonXLMU1PQVoiSJVMbS47wetSaCaqzByC59ESkYiWPfc5bm7cxTxkfAdSayEPcYmtb",
  "key5": "4VaXLv6zhmnP5XxmzQ2qL7FHGB3CBNurFYizJJQxjNtM8EwyLj5jvBMPJLyr3rwsKurutak9FhbfVq5ikj7wLpCN",
  "key6": "4CaTpVR9zwpqbnR3TMdEXXbKSypBWCZKaFqVyT4yuAGgiuBMNbBgsrj7VUb9Yp3ee77J9Nb437U341uTR5gtaybj",
  "key7": "33Uk1ATHiHWGfPLTACmbHSH17XBxvw7f2ohpduDYtorP82vzkkHG7B6q7FfGxyQRtpxoD2hjY4qo1rY98DKVV3Bk",
  "key8": "3y5iiNqvFZirEwRReoExNWdaYxDUco1bKELV3CbxRe2nj4vHm5akqsEjr7hwZibFEWFZZeSeGSpjjEaxiwtZeG69",
  "key9": "4Xa2UKWAKUjcmjQnYHNHQKFDAdpt4GxXK6UBUyAhLoAHfvu34xocMEnyi5iZJsmLphz57nxjbDHLiz5yjcrugWpy",
  "key10": "3TnBhVKY3TKdVCcPpJEqJUnppAhXw56GwWPFD5VG7LJvqTPGCVLKNhYtGR9bcJ4ah9T52uHLTDbHAuJ8UfpkZhKm",
  "key11": "2qob18LWiG2vVAKAJyahLihQdaYGW3G8EUmc62KcGUdZHL7kiAX914PnSud3BLkz3oKF4sAQqoS1xJ7QxbAGwgJZ",
  "key12": "2bJhsc8dHxuX4DbM76bcvG1QFWfkquXk5YAZLhP3wHVnoTATpKduPWvbFmZTjirrDXhPMmVukgQzda8qiN1PEYUH",
  "key13": "2wfdrSHTgoDyC3bL5cPCfT4Wf6FiUW2UX8Dp57eHpS1XEc3etVh9oEzUUEAfnA7vdRYXU1fXJ2tzP5SdhFjHqUAX",
  "key14": "4C23JVQbpg8XTE6972gz9DYnL8opdWsjFq5brQuuDzXKqGPVBGjSi4o6bohkhURJACxxa2dsxEZf3haprnD4cAdC",
  "key15": "2RXRJviCGgbQPReKKkbn1NmcWR4H3sAKctMHo3LSSkDMPvKCUgmAkn3qjpE9412LnMANfQzEqZDW2jU8d9NiU9ry",
  "key16": "5oxYCYDH5yWcUZ4k2vsG8B3BXJGAMZJt4EKnmxM7oJEn7wqcTWyVy76KL8pnHMPFZvtN43oHA8oRJ1vtVsw9T9cB",
  "key17": "4SxjzreYfFJRipK2Cnydz5qrYxdn238TQeAV9nBSxXSXT9FkprHEG1b4vsLqgXkMYPXf4QydxBS4PvbkVcbZ8kJ3",
  "key18": "4uMctb3JTpcDK1qnoCvfdvhGHxwcADTQYygia7pAmTSWi6pQHXDdm7AtLSx1SYUSDksDoJec24R2jvhNzJaY6TmX",
  "key19": "SyaTK6R6m3tPxBj2ietfSaDTa65FtbngrgGLPnnMQS9gNTnvY7hYkUqxMwA2zMUe1zd9m9JanwJj2WpsiVMWHNy",
  "key20": "63FZZdT9hqX27EvGx7evomkWmXK7qcWLid7Vv6aVKvksvzTgt1PuTC1woek31ePujFw2DSPGEKvd5b5dX2LSksfX",
  "key21": "2HUASWcXoNz3ugRNhjggKgtT4wVjqcW58f6uG8S8ruzBSnaJRLdSLwu8Ssxia2S6R5dt665tERqeJ8YPQhNGjaV",
  "key22": "5kJUNVRNWe8GAzLmZTnnuntfy5kEBF79b9qFXLskGWYaQ6md55aTiA2tda44yPGNfyM3kkJUU5ASQwW2XUpadrkv",
  "key23": "5QqBuYZNR5w25wv3EaVPVUbnHk7aWJo7ARYFYvCyW6RkfPfW9CorRZTaS4imi9JnHNmx4fspWBjfNFBHHWCBe5Y5",
  "key24": "4b7U4PTPcWrxgQBe5Hvz28EZykUAnQYworYG8F4qgAgmnHdLzJQsivWEhJJKKTH7cin3WhFF6JCRnjXYGKcbU1Df",
  "key25": "5oPBwnmJNwB1CBjhj2MtgozyVeMkG1d38DViKV3Znf83mm9v21gTCEVQnTBkVRSi5SYQqNGsQK4hsJ9vAZT71m4Z"
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
