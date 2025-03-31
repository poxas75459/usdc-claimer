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
    "Wj2YFYeozwXbczRdKNwgeRTCd6b8LNsjqFmh1F2SUc4dw5AQktHYkdJyC2fQQqcdqWpQHgnbBDTpq6otym2DwPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ory8un6tcJa7X3fYCyMMSpkRu5tv7Wz58S4QUxPpmd4jRRwKxN2bbQ5cphFxtLvoPYZigQ8hB1kYjjaE4C4q7G",
  "key1": "1xf8RnDrHstzkJZHTuoizfyGj1u1zUXYSuQqeKTbkvUgiF2KWxtFyEkFwsgPtSMvRgnfnxwFFdDJAedQy2CpWcj",
  "key2": "3s8eT4qPqmNeUzUpWRNSjpTQwFfHCtF33Sa48LtbL9FnMaBxjqdtPMX9sRbcT37mNSNZCW3ouwRTAkeYj3ZhNr1H",
  "key3": "4Dn1E6yDhuiuGjD29UpfWQCESvTicXvEf7L28xVPzJyMwscWseCxjfRQFdVp3GyaMwBwAqAK96S4xQzu3vEQBfxX",
  "key4": "25EnESmfuAYg5mJxLQsfzd1Rwjmz1s9tWQqcHNREMi3rrqLdQwTfyfkSepJ1PhqxreQQ7nTCFxvAMCm7Do7NSixu",
  "key5": "4Rw8V2B44ZkeTe4sFDAQPLTgAEgHapXb6ew4jYa9THeji1ahpoFX9Y4C1GxXgb2HV6F595cak9QTxQUDEviaxFBj",
  "key6": "8XaTY8uVTCDMDWAh5u2KzFnxi8u6YfYgXhYPgcmMnS7axCq8FyMYQDVLDGFD5B1WxUbqUSGHhUwbyndqg8kuBk5",
  "key7": "3iDHmPrRYUdrxX4jN3MZfsVnjfvQrEhSyR6iiGgB6v7d8FUHfKBZ4dmJ7Wqg2n4GPMgZpsTqzkNGzg6cTYHuFmfP",
  "key8": "2yYK6n1ergTMWYE587v8HftF2cQL6KH1ZiSpSoZjW2UDYnEqKvcC432gzTwcmm1W7GXjXaoSwKEfzfieBR8yfytY",
  "key9": "3q8WDnLRdo2pLNfx9ywAJGLc2d41YXq9UA2RTRDzJJyzmHA5sRtgqiyjMDhVmdQUpzBg25EQyMVMuq8KqhDEkj3A",
  "key10": "4cFbMTuc8jD5hVhuAogk1dDmhKQHzdBBQJNfkB5dw66fKf3opVSzegbJSCD1WRne9bmz4FTLaBDAcnqPyTXKmxCC",
  "key11": "3HxLtv2buQzvk5wZDCUXa5sfaskRYZPHw4LkfwaMr6RFQBQtD4MK89WVjoyiSUmwvs53iLaSBqYWkwzoTTjPjrjL",
  "key12": "2yubqC93SaqadkvcgpFdWxZqmvSQfKm6VvDuLm57LY7n3sC6awNH5wjFosZeY8CvUUfCUtHssKWnnJ6V62eUmW91",
  "key13": "4SPEceihWAAPsBQianWyUE8eKDqNCEsPvEpr2yaK2kRvHeBVVpZGiWpDRZ6f6H1tKDSUubAejAWH21YG1sKCeaVP",
  "key14": "3bu3jxuXEiTFvEHBozNZwxzw2jESFWyUpCH99hx1jMJfPQQQMjCBVWsdL9VzKa8KJ7AP2qPosPDqcW3oySd66GM9",
  "key15": "37FcaQ9ZNeseJM9mh6Ysv77httTdQuGbrsSTrfX9sExYpAbBFSfBdwXy7HGACH2VKQ9GNjMd8RjTgPxhpU6PHdEY",
  "key16": "3DUf4SRBi4fiiZUomUnmzvyZVTtvAvQoZB3z66nPWoojhr7cckzmVhBHhjMqsQfzmfvfjsTW8EcnSaTdrcPH8ZsS",
  "key17": "2mbHZrVuhLVhxu5TEWjvhjp8VHreYac93hc4n4SGSJKyoj5ARG7YwfjLYB13bApWm53J5DnSiLrjpwXxMEF2qh9W",
  "key18": "5Y6LkH2aiQegafiVVrdvS9B9mmNhLqoByYZTh5fz6DRG5XUCNqUrEmWLyUf4q1P1eaRJB3vvZNi8svr9QLW6KK35",
  "key19": "2FrK9cjiYpFcqsYUzBDTB7UE81cttyLULTd9QCFBZax6PtoEeD5vN5XU4xcD7cLAhFRydi71sUs8S84EeuYrCk1e",
  "key20": "5hx6WBQarXYvHzKTxLMrAd3Uuwk59LE49cRigjxbmaShTusGg2GYRGwn4eV8MRy6qhvNTcBvJWF4Foi9n1LfSCKt",
  "key21": "3kSSam6p6tBdPzfqDV3rwe5rowSmBzk2qReHPhP5sS11HYkdF6woJQ1p7oqtNFboCmb4EtUrLKeCpEUifiojitmt",
  "key22": "2UWs4Z5q1AASfXkN2EiKyiMoojqrFS96XkzaYpUa3R4YcnNnYuwmeiG3vdjSZwf3MwkKko8Y7HWu3cbLXH4bgv8C",
  "key23": "3mBLxQ6hbYddRYojyEEeHAxvNazK3SKkwAUDZcCcEzvuPu7dc7LumZ29YCRwFVavXpMaiu1zhF161Pu56Z93fww",
  "key24": "25zy4AhDLqumwsgcckFNRS8EJWrtaSS2piw2S419aNBXpKBFcvMgX3rc9EZY9yyhPJJPNaLNbeDdRwLav1weeXAG",
  "key25": "51aC3WqmBs9xDRCjDk8LRciA9mgp1734A7RK4Hy8o8LmsEh2BMEpD25YpXbne2RvQhBunzfxAMjFnA2Zr8gVJuen",
  "key26": "3VRKwr5Tn6dJTjb3xjvEvc2XuW1pFQ7SLx6W2Ao2bnSXoyXCsEUwijo1Ra67PSuJar6Jnw1N2VansaWDu72WifXW",
  "key27": "67DMZoPhsPde1BZc1bY4z9mKwzQcjT44tgnSfLVhAuNwqtXZGozNTymSfTL3AtD2MxXuQ998gYh9PSTNCmCFp7Ms",
  "key28": "3iijdQcMs9ZtxPhRHwUWcUWgnUwVRXq3cYmBNarVF1ACX19Jwv5D8q64XhFY61vBZrh3jBfeiY8t9Z35dPiuRyLQ"
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
