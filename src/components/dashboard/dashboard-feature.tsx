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
    "3HtUmuBimCyYPhJnvK6vBbu2aFsG8AkPj99QqHn33gUKMUs2AAwEEDWVNjckcf1worYnehvRe6RkrFvfE374z4DT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3saSzzomjDtGFZP3VUmx7JChUCpEXRptCY6LcHpboEMswTe2WNRKcGqRKzdCL76w57sqU4zyGirvBMrZ9mzExR",
  "key1": "MLn5AXWfSsNuxh756aXAxdznFU7C6AUeKvLx3CDKP1uwCvBhMRNTteongTx6w5hyEVkbKo7djE5GQGnCdUNA5Zj",
  "key2": "AUqSSPDgrVeD8c7W5i65F1DBH7B1pKv7nwVoaveDmmwcivCzGJhEEj5GWZFkLGpuzXozvHDUyJNUKMYX1xPBMcK",
  "key3": "3QK9cPeSNYGzQKFcJTk74SoAyKTApVyD5Zkg9PKATbC7Y94k5VfKJeYL6EvJ9yBjJs9UMvQmyuDZbzJHJ3Ck4kXW",
  "key4": "4DQUqzTauC7TVsECEqVp1WNMjtsjg4WwgFQUeLGrGjHjGmXvrg7Lt7dhFNNfD1kP2KbYy16sz6CTpGtn9VSG9Kz7",
  "key5": "3NSLT4hFAbuN6nG6CALgzm8muU6fKFM9jHxLiq9sU3Rc5ftRSNZoxufhxgrwAGHZk88D7BP76vwQmvsMhTvrUdYG",
  "key6": "j6ryrjeA1b9T1tZaBUWwFubbAcRqUwLyCRb2sNFZN1RtJTSPjExZEMHwUpuDhH6tKZURZRCXy53MU1QrreBjdXY",
  "key7": "3gCQ1X3qVv3iqEaN1wSG9c5hupoeMgN3q8QPASAoKdS6sWyFZiDWcC87x7EixVQeiq42idCYjKHjucjhbXFZtkfk",
  "key8": "3N2Ab4KgpqAqp3WLGCQsp3Z2bV1wxFquf6irJSYbG2HBLm5hmx6q7eTwJCXTAeytzukxWYNkVdGQExUuUtetSAQp",
  "key9": "3JJ4HUvFc9upxmot4UHq6CpmpU2nX3Mar5EEg8YZV7XuLkML45tXrUMCiUYUnzCQX8ZHvqs4e1b5ocDEqZYaL1J9",
  "key10": "4eoibpR1jpPTthn71koVLHabVT92MuUJ4WzytDZ83PNBtyCdcZ7BGMxoDYtnmxRBWZHH9dPhNKB1kxL78DfcVH2",
  "key11": "rNoqSxegdxHTBo716An2P1gNoznYkhooT4Kd33TSVZf7mEVzeJrbxSLa45JvTGozo5udq4G5BYTMaTiSvmbUVhV",
  "key12": "2eMGLqLigTFU8VqAJRYL7eHf9q3SpjvEW1zD4yFi7vDfMBe2vHXFy3AeGxvuf8uaiYNbVVsQGuRxcGa9pBzrFora",
  "key13": "2NAHaeVYerWKHeZ6eP2HRHL2Q7DFhvkwmesEYzCjkn5yhaQS2TYpATZrngeZgcKiuAizvWkJuoJQGcrU7WNfVNJ5",
  "key14": "4a8vrqNWpUsR6TB6FnagKXHpQKzT1ZqKrvu8aUKnQFTnzJfSpGVMZ5Qyvpnio5FAWHzcofjLqiwUT7ncCmeheGRv",
  "key15": "47vUh3NL83nuiatjZtpBvpMYgXCxEfBKYDEM67qbXALRQz9nTCynv4GyhWoSNWzjsSbuDSceiGoeWjcjhjpu82SF",
  "key16": "4w7icxnvofybgVouMoQJ3gb3SJqoDF6sTRPxZfgCchUpWTbgfNuDxQbeSaxwtjTz1korfSWQbVkM1piTJ9iJKi8e",
  "key17": "3AQPBdQeGEs7wKwh6RZ9fR2LXUtM8JqEAXdfUWcVCWTC1DMrbAjDgUZaE6DzALvaY6eJgX8mthGWsX1HfHany5Q6",
  "key18": "GVNZD2VSwDFG47bNR4RyyPXA5nKvsAUnMqFGr7AGdzw1HbrMn9a83jGcmtzAMf9gUer2dqZbtAti9sSLUtxo3Sn",
  "key19": "5x89xgPuCJSdP1GakUx5JUEqCqPZqm36iq8wJBceWmiP7B4vR6HkqGCnYUeiWoQiChndgLqGHU4YR2fcvnXkAFcE",
  "key20": "3UPLLJZGFYRWhTjWGpSWmCfqkpEBMnz61Tb7RsqeRvTRwCQxXBMzymL89SfhTav6A4e1kSvtX4nDtaZc7HaiUrJ3",
  "key21": "WETTcw8g6sWNy7CjpUZrGFNM181nkbPHwruNRzvUrxrJUTLDDozYzNuHTdqXk4CRmb6ChhzvyUTUYKZdJAozkMR",
  "key22": "PAtscY2Ji9cMhrycx1qr8XQ8cDw85gM5KnsKupEUomyG3f1HQRQ1cZ8e8tiRSn1AiibpEKvuab18A6uKUTV1roh",
  "key23": "5XtKJUc9DV1QmaJxAhPDaK4zbwor1VyqQW3EakLsA3fHg92UKe7dZAhJz4CcuCkxuCFamfMkiqgaDAz9FDFibfTL",
  "key24": "5i3PiVN47DkbEqdD8kSd1SMP2Jk5iDcMmJkDxRNK2V8w9gecLyvU7j5g4RUJVDx5CbbjG81gawUt1GkPS4bPt9YZ",
  "key25": "4faPcYqW4h22gf1g1bdYdbXJg2AByvr6aqYK6F6DtX83CNhibpwfLETsC2eTiC1q2gzN1prT4tEZV1YCuvG4JTp4",
  "key26": "2UJ9ztikSaYkaY8hrjNjuEsAy1rnfLzmWQFT3Qu6Nxogc2SCMRMWN7rasJEPRFZViHju7W7V3CitDjv5jvTK8bhf",
  "key27": "3eykKg4cyTv5JmMfTuGNhJaTFwQw8S1HKjvLpEvVf9rSqLpdqUzkbsTxC172pDddK3N5tZofwYeEe2tdZJhBQGj",
  "key28": "BZ1mBc2tsHVdX2PocN5DsWjeWRnuvPdq7Jue3HGwVTsnmzjHgyx6sKeQWq3Svq33fcDHQaJAqanV6jyr6mW2Qpb",
  "key29": "5V5np8DM91zjprVfAwiTPwwiitaKi7iUtjRwqvr9JwNEFZpp2bG7cVMBhG4pC9nXxKAuzYnPGavHiWJuBHnRD5ZC",
  "key30": "WhYoT2XwLq5cBGxPsGG4ciFsU64h2jtHXCLTPmYAjnBZ1EFuLKVCKKdqcQLg2tygRBbGuVDrdKxkrmB7asmjPWx",
  "key31": "124WRG8C3PtKeac2Pp7rhEM37CDk3eXHd8bTHXTuaUbGqfAiSnC5vbZicCsPAwNTZnjbc9hUh2Z8AWnnVbcz9iYf",
  "key32": "4r9xpao9HTgGRyhAPjVeF1NJSmVFGmnSdUWtWJUb5Fu9oVhJcGoWLuZWUpCCbZ1hczLEhMqeYNKtc5adY2xTHhgb"
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
