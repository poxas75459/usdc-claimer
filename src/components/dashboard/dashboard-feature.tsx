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
    "5B1jqkY3CRRqEBNCwEmUdxZVfwqoQhMTXRxRmWrEHNWUPd9pJuvdevXZXpA2DW9HsLKFEkN9N9dkhCs1YjU9sUYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25tn17hm9zu6EgEoNqfmAD3bYuKzV4xjYYQezXS4Ju1PSNQ4j5QzMiKnNyvBXzgz5mhn6RbEcs8jupRyZvH23YCr",
  "key1": "aSQaX1VnTz5NpHWhwkA3RimWMwAmULMPPauLS4LrRANi7vB2bvcaxuwL9dKosPiwBPdZrSUuktDitQtrRKjMMRG",
  "key2": "2pgaYffq3gDF3CYJCR3Nv5t8sCnGhBnSyUSG4DMe3SJSb9FwixBFNXC4w5AFem4XafkNmAQBHxoRubogCgLbkM5o",
  "key3": "3DCU7bazS5RTCB8SqhV3eThHh2GvkV3kqG7gSaEWNugdvkEW8ucZCaFVbH7R2zPZrYMNTWdthNaHvuyL6S6JVDq9",
  "key4": "35By6JYGyBN8m7PW4CCUCqvovngbSuZGr3Y7qMkVUpmHGRtPqHU2b54i84TVStka7EJizfAoVe9VmShhu98Mv4V7",
  "key5": "2FUGqs4Rar5qeSWGjuA9caR5QD7NuDgoHT2K9ara1bxMnk1dmN4C7NALMWbEfCJeGDFzSewd3uCBZYKPZkXVp1Fh",
  "key6": "3iFg49cKaqQyMvBsgjvzNqufQgeX12dQ1NHbWfz2EmVahqwA8u4FsxfRqoSqcXa8YRwDxu7Tb2D1PjhBr44594sh",
  "key7": "5yvyAP9M7G4Pwti7iBcUFZXy3YZsS9pZsnbpJeuoeNtDAmgSQj936CmngCPAvUA5wm56UB9eaq5yhjHzqcwqJP6Q",
  "key8": "4fWeAHgN2Fq7CWyM331eEvCzssfev6DgnJ7LtZb97cbfpVvjSLm5wbTuKp3iMszvbWJitHJsBgMU4GyTkVCn4oCq",
  "key9": "3m5HaBT2PwZD8VSRuCma3W4hPcu6sY8xYRASxXfGukXof4JYcDddfQwNo1D3fxS2qX6s2GDUhVBZQLUoDVPqGZZw",
  "key10": "3FfuwhdoYqguYRiwT21iyR8GJxmX7uAFYyDztXqYZ9e5p3raoASCCauEKiqChzmcsYSXWcuLPUMmhd5fbysUPzui",
  "key11": "4tPGbVnbnU33SHERsNiYF8v5AMFBeVnLMYLRrHSGii71zHZ8LzgUH5FBUYbK5fFJAHCw96dVRUTmRed8U6z84TY9",
  "key12": "59Mf54JvfWQa2EuCxVFYH2hZuiUdozWJSsuWLAQFp6bttqC8rSVuWHpHUpTUH4gfF2cqNdwyWByoxM52W5P2TxzY",
  "key13": "4yGPv6qa5Dd7wVRi9VTVQn6GTvnFJA3p6bmS3ceHVp2CA8umRcryFg2Abq4E7nc5pezPHN2Je1sx5uJ2p8gKSXMY",
  "key14": "pE6rmL31vcraDbUXEbQ595os4ER2HAJjLF5MX6aQ9Fmzaozknjp6gsSnAezp8qBo5TzzU5Z3iWqx8cE4dUjn3yu",
  "key15": "549KWoLMGSk1ni4QeMqmtWM81aW1MKPP4BavhUkrJXFHRBwjtZ3y8X98WQnMY1NPem42UUV7frkTmancpRGmZ2yQ",
  "key16": "25v9YaeZDND9Ma1xVto6Jh2EA8w4SEw2aJseEpR1qFngLHnK1AR8pxZbcDoFA5HrFv3vuJEgUhEE8GGkJtDmVtsr",
  "key17": "faQCeLEuJ31V8e4h2u5JwCiebxzs6zGnkkqJvJ6pjjbhUc8GMpjcRia1bKeptUsJqvmzAhaww95fqibqkgmEs5M",
  "key18": "3LW9mV7R1DoS3j1AsiYyBwW25xK2jZWNhATSThKefv11ty997obHfYXtCoxGBrVD7sr4FXp6tC1TtqYP3EMuQKKk",
  "key19": "25bu3cDqXvVUuZipiecdwaNDUGeJGbF9seFDqXou2YyTZcVHwLHFp7a9yyt651DaJvYvBi5DVvQJSg6v6jc5aXYk",
  "key20": "46CR8eTruB1ktHvHWsR6Sn28LfqRwXDHhJtMguAFVjRvG5CYtZr9jC9cfYxRMkgHSnU3zBfpZ9mD59hNja7q523y",
  "key21": "2EGvxXpKcHCXqJFCKm7Txq1mKTStiXG8JMPn8pHD9KMyBVfapGNb64miRWaujbmauXyPPnrHCBB7WEB82sRxFmc6",
  "key22": "43VPk1GJyn5PxaLu3hbnmHJe6HZTEG9NfRrJHX46LQJqTJV6R1soKK7SH3zopBJptzW8ZqKwEqAuPuVknUp3qiu9",
  "key23": "3sqsXitGyWgfHnbrjzXc6KEwfUxQUnoAMDXhrPDzeLuKbHG5CWDXc1Twy6Gh6T3RkmK5JwvX5ZmPAdZyfq6r6dJ9",
  "key24": "5FZqzRcyfNMw16dJfuLxMkGAvZCnHNPwgMMZcvVDsU8gADdpcHgDZ24iV1tD6HXv6EEzysaHGThkSdS8WEATwEqp",
  "key25": "44d7yZUTHBP5VNkZFdg3sDKWS2ZdKu5tmhkdyE6xLkyXfhBmGAwADJqNe3LAzoEXYkof3B4XdSLWn9gipB1sLvdK",
  "key26": "2wAXGhKffZ2WDRw7sfkpQfqML1wq45KtWrfVbQnyW1KjCnNvAAbEHw47g84Fj8df5LQXWhyic9FXEstqHc45kHec"
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
