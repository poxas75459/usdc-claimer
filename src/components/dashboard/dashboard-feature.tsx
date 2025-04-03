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
    "tdZ2BKqPV95Ckd2FDXgsbvQrQ4ECXfUrzpsBq2WdeGVU3w8TctMkw1DbSxHerLXGyiuszML1uwNNCkb1v5gStz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBHCSq7DN5mqxJHB7VoTQ6GrWd5c28wrGN7quQdNJxS8eZAJ3kssLk5qfuqBtqvUP27xa15rhkDjHN1NLikTJFE",
  "key1": "2rJYsn1cur8gMkSg8vEaQmi9XzV3kpAauFPXVhxHyRwKUwU2soE4RgTBWc2WMgqqxSwp84Bnjb1R5Kt8f2fj2WyC",
  "key2": "28ww85DSAx9SfwnqZaNqZADH7ByPaJeN7HV4MHzqJwck7jBdN5DByDcr1wtofviDbb7vh2o8VQvYJ3FX5q8HdcUf",
  "key3": "3JTSUaHqHovMsmdXk7p19PRjNiyBx7GwBbBg8AkpLzdAKWRYT4HHDLp9tec4eiEBDvhG7MW2gLRLw57dowkK3xSX",
  "key4": "4xoVUUvLjyrBJqGZgHKbTau6zmMfqTMnUZMWwtZ4GdunrQ62UxKb4GrkRMEtVv9Z5MM6BCjd5vtkUaz1fuWttmZ8",
  "key5": "5NYzTRrQFmKSeGzeG9gGRvd8tEpbjQsNqdjPjKSSzEHFSADf1B79MSruRTG1a1QRd1yooctX1ySvNV7hS9pgKhA7",
  "key6": "4Nog9yoifY4ootbqaMynWjzDPU6aBkk3dbfZE2YuiyZbJkkWNYiGDpQ4Lp9ccciDyXAdFxsHhNBF3XcnXvTqNwPd",
  "key7": "BesqiPAckKC3VJz74SQCB819VBmv5ZsyHq2MtGEs15HMUo88tigvBc8PWZqW2QNZFzpENAzHz1JbWo41vVKCwNL",
  "key8": "59tqgqFmhWHQGAGKLPnV6proXp9PSrR6WiXXsysbMckftWAHKJX6tADQ2WTrAdJ5wscyy6gmK7JfYbmkDpXE6Q1N",
  "key9": "37mGzawugMSjfwsUX1BSvDyiHpSZVWfFDgPkJrKMwuWaJMoepuLLmNfQFfTvTTERo3jzZs77KCSohtvL1kaVoG8E",
  "key10": "3iXUAs9DGSYgGxfzmZaD1tP5vFNMa9qCcoy8nqb24DtXA2uZCrKBd1H2fcHTs2NQsuF7xUpTwQXLAKj276YQRA5K",
  "key11": "4tdgKBkeqeTWU2FzgJGHRrW68eb3AovcntbZG5JhfpsXFWMFRNUUtxvcrfGaCm7QnRLfHLVJhn87sfJrtHxtb34c",
  "key12": "2jBxArBJpQHi6SaHjLtaNP1jw2GRRW15wmsbMFXYXAS8CWf3aaRTpXhZBp87TEjC75bRBocN2bX5RQFyYEQh5VeV",
  "key13": "4SAgkB9Wb2Q93A19nEKwqPHeK2WWkezsfPX4vLDmvQEpy5f9jRgY8dhU3K6J2cxyEeNwhaCgNUDPieeL2sPWNPdj",
  "key14": "4gj4Hp2YTat7bCxapFYKFc8FJYoWoag11j36fJpD2ojKyGSWoPKj35bBSecJKugrXM9Wj1aFtqWsHr7CHg9D7gJQ",
  "key15": "av5CXEGNYAhs7516nqxSZEc1STyE7TNBcgMFvGuPKDFXB1H4xehmDbA9WuYtdocX3TskapSLq2N7zCMhxT2wob1",
  "key16": "2fFx6iBd7HZWSfPgqyjyRGz7Hdkgx67Mgm3es9MtQb9gkb1JNdTMoHuqXP5bVZ72MHy9y1nAWPSJicfgGS9Lv41j",
  "key17": "euhfVuxqiys8sbKpRV5FBnUzbw29gzTQYELDw1tmEMsREJDca7RP4VUMz12s6kojF9vyFFTnUJoimSxcRUxnEoQ",
  "key18": "27yqHg2pZcGnkxhe92J3vusvoH9UNgiao5X9GD7ZzCcHYM6153sFKkABLmDXwdSutMUkZK5yKuktM3kZ6MX32t2f",
  "key19": "2sZJ7xWsnxq9uEcvm7kWbe9V4KXYQBE8XNCDiWK48kPRebnTNsAuRixn1wPR52ot96oHTkUmxmH2E4KWV1U7qtvm",
  "key20": "55CCPstMhr8VNiBTiPcErXy2LHQBy3rPnso1oRZia1qm83QURn5eJBSLQyhNqxNY2VdoB9hHNx462m41jKxwQuGo",
  "key21": "4dgGBfc3H3Y561ziVBa9KZD2A8HkmrZGgYGsR7rD2YgeJfdnGXJ4vaHpvj54dXyn2hND58F113kRLKvGf4mDEQTG",
  "key22": "2erd4ABmZrSRXU2sFDCQ7uUBihqvWRHLMjgCAL4bzQeX4aojmYMEBgUFpquuGCZdy9BU9C9xcKA5sC4bNUUPAggN",
  "key23": "46ub8pA48ixwDQFqMspqSM4zME8WQNFVU6332SjpQm7nCoNTHjsr19txfZcU4Fwjtrqw5xfgY6XfTUAyi4XNPoHu",
  "key24": "2RrzRGVA29JvDKhCs6E6wYu3o1JtfHEATyUpcjsTj1zhosLpbjn97S8z69y3qmDrM1Mwb2cYzciSEpKXQT6dWKQo",
  "key25": "58wyHHXaRMxQZpcp8zYBXJrvC9fFqHDoTjwoxvLBjYAui92DLsZKEPPQG7n88pH5LqPU9kwBRRfSc2vJMLkW7Eez",
  "key26": "4CagaXnkgF5Edm1gVJsZyZHm7WJ9sBNu8kytjhsaZJ256Q9YGgSxqyRZ6LifpjQsie1S9axP3dCV4gpoj2Qc2sqM",
  "key27": "3WuNimvHbCvg8E8hkE611XE9eBNUAuN35idXtc4J8Fm4mFZogTWJ2mMyBNBq67mED5FG6XNAeH8swP5QSjs6nJTs"
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
