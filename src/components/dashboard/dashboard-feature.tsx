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
    "2w1VPy6hKb1gW1NLvuHfQ3SQe5omggGkjrKuSEm1kwudbxwrT4oNfVf162uZwJKo8KtqbsyxgGywbtJEd3hATmp8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RdaJToFhTkLABQSWCwVTFayQPGpMvn4gtLkRRVr78SuZFKzb5BANSEnEuSbuRYF8kEtAhUeUu2NoKCLNUp4noC6",
  "key1": "5ARVCsp2E9kcnLFpQ8YGCGzNLgsztQLRp35bEVCTetShXNm99miuR8ER2tWQDoVHBEr8bdf4M3f6ZM1WFVGmPDHd",
  "key2": "4UfuVFgDC2ngjzH46PPCtq6FNHtyZggbNzXahy7r5FdGwQmMgUn4HeYNST263mciUErfyfC4J2681f26zS8VF8r5",
  "key3": "4MdnQkbq3YgkuH6r2ZAJDPuSSNv4Le7YaYtt8ojp6Zab29KMDwWLCYAd4jAhL7qfNjeFgfeSHNT85XK2VzQq6nTQ",
  "key4": "3Ra5a8tKMZdgxK6LxSi2o5a9wtxrUZWVKMh4jTtpJysHDSdFH6cRjYucqLzpLfSLfCVUtzwk8bX8HXoPH51GeDw5",
  "key5": "3s45qnwUXjFPJEtPjvzxsMPfUtHCqrt6Zq3Gjjo2RB8Deaxkt4ZRXTaXdZQSLV5DdVBYHMuG7Zt7yFAxZHsgmTUa",
  "key6": "3VrQQjMD4Gt5nv6MkknzhHU2igGBYK4XVQN2vGQEf6axGHb2upLPz3AGPXosFfm7AC73boSJuaXeiVbyioRWYTJM",
  "key7": "3CGTRPoqcsX5qAsezAokVDRzpk72H3ByGChWhrjk5P7Dx2NXwbJTyB2HvLq9PKskbg47xnP9YZJ5X6WKaKQjMhK9",
  "key8": "kJyQw3MQ3BYfDPewHpe5hmcLoWvPpHA3kz9Luehppm9nBW5bbUZ4FqjXbSvYfCmDN4M3KHpXB1qVTKr5toitngv",
  "key9": "26do5FZuMtfotZTudcJdy3mKSMSS2wqtbdpiU4h3wWb9NtuRP3FQXCz4T3u2sFic5ZFy1tDUjpubooNENHnPn3zt",
  "key10": "2PP8jQy8XQeg1RK81BGRSyFrcH5ozpbdSoz5zH29vvam9bk4PfSKPUf2eiGJYhcazeJc7EcnsLUDuWBW1dYD4a5U",
  "key11": "2tNG8efhBTEcW1n67Tn6b4GDUdQRm3cvgjeymtCPecQMs867v1cP9UAW92Y8Sft5BqtvGBBUbuojhXjYkbRxtmfx",
  "key12": "5hBFVJuGG8PsquiBC3rwF8x6ykaE5afpu78x7PesJWtyqXZQngTLAyxXp1SwRAWm9mLCBYxm4DAXmpANtVWLyuZm",
  "key13": "27jkHKKhhaKgm173LxqR8ykZVsZFeybs1Z6cyStmKkoapjWHLqHKZaDDsKwqL88BhUPoiX4E1c8EeXH2tt3ZrQWf",
  "key14": "4xrM3yrxLky2Hhbw7bHnR4qv4p1TGfLibQZG8nsXkXRURCwv7A4SDQXtNVf5BKrTAsWpeicv76BWrgtoGt6n6Eor",
  "key15": "z75d3W1pdzUdzusc6733LePnV7oZVXF3PuD739f219CWbiSPusQzNmHdgupZn6fjojRNiND4x9fJR673BhRxg7z",
  "key16": "5tps4AZNUkHU3UjNBze5jto7P8NXNyFs5u35uAisuAiQ4GgxrctXFjWLmBDy6eEdBPhWiaGiMrkZkKhoLYSimW8y",
  "key17": "4VFhjAF9sEni9vby27ZperMzqRRmduxF4ZprNcDNe6t3zvyxdqBGwYfWXYWJQge4ucWys42TGYFk3Rbtavg4qxVL",
  "key18": "pvP9xHfyHHBpP7sic9ZCTPjz2CBquQScL4Jf8GnT4RYFNAG1y72CzFSQ8gC1SvwfMHMPzFQ1ToSFChyFJxYbT1N",
  "key19": "3pb9r3f4AyGMWkd7fqfDZjgx5qUM4ge2cj4iqnosGRdhtnvgy7uqVWZE6fHGSa2kP7BxH2keoEpQVkUNjcnzKU6r",
  "key20": "5H8NDJZix4t17bmVF25BVinzfoiW6DGiSS6ZFVCmhDXhyk1gDmMAJvZyQpFRjDfsBKLoMFAMmVEwyRSpHngG8dzc",
  "key21": "4WWHCDT22bNopXHNUt963NNz9RqKf4CSJMBPsUHiKrPdR4LTqvCGj6bs7NDF4VDW4Rpp5pDd3BKDki6GerFcK3fs",
  "key22": "4yPNkpaEpcBTXBDQYZfoF9MX9SvmqVbggXN1ZhWh1rKPv4rbVtYdDA5GXafmb2xwBT7MPYNdpet29NnPt3Tnnzvi",
  "key23": "1YH4uj67xhayxeXcS3QSqxhQnmz5yWg6o64beLpyHGPrGbHYAcK6HE7ucZVnts9ekVWe2v521KFpharRVFhb7pe",
  "key24": "4YJPdw4k9o5z5JHAexitXtgovni68yq5GuAFoVzPhUzFxPUsBRbhXBPerCaTPJKnPGp2gujFkqsQCEbAz1FmnyCN",
  "key25": "57WppdzFoyYm7nzeAEZngEsVStz3nftPAE1AkbLLWR7ZTkZNP8L69HBaSKi6tbsdZ8wF6REsRaMCaxCuMvNUnB2r",
  "key26": "33pfhwXcQrHsSkuQ14UNUvdDZeJQkPxSgbf1cLHbr8L1fQDDf1qJc1eKEVG9BY9TJP9y54DL1T9KCRBCmPwWXiE9",
  "key27": "4dQU9JVa7f91xxrEq74Jn87F3VA7p3rpJdBFS3Nmed7oPYWUjir3pFFRVNXDaNLxebuHLZxYhd5as2RLWskGfRu5",
  "key28": "3ikhC75sPPJ7cJTVCggPqt1DnrWsXtWsstUq3R7smgc26KTMvhwH8AVfXCqxbPwTufDJ6EiTBbXCPoJ5yriyye2N",
  "key29": "3P38dvfnLVqk7qNeKfPCWLn66r6W8Pc41DMK8pjhK6zEA5SmiYsZAQREgrFZfKQ7sU3dTPuzWd1g6MhNbPiBopTg",
  "key30": "whb6PBSE978XZRT6kmoPDB3iv1bCRqzmSAnKA8uX6BHvAodacJBQQT1snUCZZSoVrviuw5mW3ykMNpKMeN6ZtzP",
  "key31": "41HbvvDEChftTA4xueUwP6bbXXVyB4KLwXC37PfPb2dF1Hr53T8XJxEdAyzP6NkSBD7T4KpKmX4uCbvjRL3bh2i8",
  "key32": "2JsLBinBKXsd3Z7P9Z9bKvLFMudiiGjGfXtttcZceLKgQMVvHjvZ6XyHJCm3gh6Z2rtMyNEnqcekWjxFok2f8f7P",
  "key33": "4u592zQa6VC4JTNjwBvYaomi8sNTgFgiAntejSdiHWfJGg2VnaQQEN3K9dCaXHfjnHFoGGtGzqSJuW6LaWRy6eej",
  "key34": "57qNQfnipLHzFCHZoPUbwnB3v54bQmYuGbxSA93qwcJ34qDcy718HuCyba8q9QWBYyD69tUsk6aiFoj9ND9PCxt5",
  "key35": "5h6MhqNq5vk1JDg4L9ETVnBjbiToDt8q4uWQXZShiYzSNqqSWTonK1od1TcQdgdRmMShxS9sAKUis2fzN7bnwARB",
  "key36": "tvaF9wBkrVoCF4v3LDkD4i9ARwozWC66wtKFBMrF41V5KmZRoPJ7N5y4KPjARbEYw4EktSFCHEEhXZ6Yk1H8UmB",
  "key37": "4odgyQSR9e9o8WF35TeyFdwuPti3HcjxdUG8JKqxv9Kyjo31eSN54Ek3gWnCE6WAjS5VLu5BvVmkHBXL5oyF9xQ",
  "key38": "2PTgFHmCRgL1VYaBpjAADTZDn8DzF2hH6APFa31wVjiXKF7Lh5ssiK75QH8CjVw665RxPa9Ym3W5tP1huxaBKYNy",
  "key39": "5vu7hRw77WraE6toQRF8Qy4bFv7iSyb493DEiu9HjbvCJiQEYJr6df4tAVXmKemiimioRsqp5sDM1dqvQ53sJMxX"
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
