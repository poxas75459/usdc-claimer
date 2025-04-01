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
    "2Lpj5h397xBvm1xUuv5ngyceL7GX4MbiUSMexy9WHRUPqhnbYetbwP8dCUGys8mFbjmiHr8NckKsfhaDrivauceT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9K3v6WWX8AneYWfk9EJ6xTNwfBFF64CNAZ8oiWNtyaLUSQxHAGiYPj2KkEioDzWgJHBd3WvCf7Ly97mwgWh7sa",
  "key1": "65H7uHVk6n761f8gvMjBaQYfcYs1UxVDx3b4J3ZKJYBD5ZnVbiZycyY6xEH5T6L9MgoQWrAXMHcraVhRQqpZnT9H",
  "key2": "3TSN9iRvdWA5ovtKxwNCMM8jVqpBi5ck72eizw33J4A1Xs3azPvaB7g14oSZ4c6U3EnLGTHnxmn8LMKZ8WLGCFs5",
  "key3": "3TEobTwTjNAkSE5YxoCzE2ge2kHraNmbEw7mjihoPH7SiEHe2BbePFBueHtwABM9XA1kPYfPqW9XEDVhHnUFdacZ",
  "key4": "53ZhWwLd26z6mfZJ22mULViNR7b9uB3qQYa58bWwfUWwrkwERpAYrAPYyabYbA3FPG373VPPUrX8w9fhGo7JkEwS",
  "key5": "3HB59PnZNp8BC4RQqSFotukamDEeynikH4EiCeHpRDLYt58jGkFbU92ac3s8oh1jpuAbk2NJiT25iNpVGUgVCnQC",
  "key6": "4iPkGv1aXWmN9vjyqRgSeQNLoUdndXHjPpjCvJag6o4pUDRExA669AgxMC233iumXy2MudtLDzFggJouW1NbDgvN",
  "key7": "3SWxKxQp4p5vUvLbTdzNbd1BW9vX1mE2DARn9TngLkT1DEZtsvnxrfMU8ctbbrVN9KWrzA1po8yzK9jfR6PBPTEC",
  "key8": "9edbBbrwfaEqj6AS8Zr4c3wYVNymgX7KmPunZJSjq6zEY1Eu5TZGx4rfd8vk59vpubUgx7akDHhnVsWJ1so9ALD",
  "key9": "YjhjFc5a3bNGcG22yk5xTrUULkVsApaXPqskR4ZNBHHSHeD8bWtMdJ9u2hG8yHRYSNJbmkXFKxoXecmqGJ8PU81",
  "key10": "31c9e6rC2xbpAhXXB87ri74WjwgJzyEizR8TdVjNruwVecMAQCUrEm68h6sBmLiRCb2YPQmy4qPLEP4JqgKafC3z",
  "key11": "2NGQbb4crtgZfkxi3sukznyoxnchJzLr7dUf91JKASPWsFQ1tvkKL9RsCpL3D77V31ZrRJxqMLFtbZENJn98Rpak",
  "key12": "2YN7DS2EfkD4yuMVM2mgAmxN9KhUb6mGtF9pVM9CJBaabsVqWrzT9TRNimLxdXwtK3rVpdLZVdXxzmurMkY546S",
  "key13": "YRyYXpMEJFLHZok8cXA4QGihYdhCjWHaahiP3JvD9h1k5skQ3VuS398E2E6q38f82rVTMQ8LoUXEH3LuzrUeH4h",
  "key14": "5ncidMGW6xY6MKVYr3FYRKtnDi3pkx7jQsbqETgf348ehxHodc6SonZRdJkQqhDq2GLfUDaNbeZkecryrXrNFCJM",
  "key15": "4nBAboVXAg2ncQxwyh7yfZTeBn6Tean83RQDRmG43cEdBCFqwo44JDeAGEbgMtbNmGwejfxoEmKKZtuYGphsC9m8",
  "key16": "DNkw7Ne8ci4kAX5QvRad6bDRfT9p3NCv7eFJZfNVPfxLBAAwnK8P7B3e5xhv8j88mUsyU7y4hP7vz6BAjWEDSsb",
  "key17": "3txD8sh4KZvzyzrGMF8532gaM3hqA9RZ24Xc9eXC3Wxf38ym9e37k73M384Ho4K7K57GpnWc9DpydjAUZEPJN5bk",
  "key18": "2YqmhToCGY1VKDwV8zsACvAcpix4d6TfkTJvHEjM6kLuMVDcFsdspmd6G6xEfXo1NqZ4r2wBw9Raq6j8GXYwi5Eh",
  "key19": "3G3db3bEHmFttSn6KNpManRf9uQbp8Yx6s1xBjdxGTxi3BsC4gpRZS9RiK1ggMDKVHXuUiMxurfMpqFrsTgXVVaD",
  "key20": "2AEYM3ZfJjqJp2B4vDzZKiMQiZ3aSYYzUKavDWnt8p7qGJcs4id7Z7nL4FA2DYyxFoepMLoXCS88JHZ9MSYfE2JW",
  "key21": "3dm6bDsmSuJASeHevwZHqXDtKQaQyp4L4SmUJQWpxvJet5tdkVYPz1fJ8W69mxri4EJ8gsZgYQz6RzsSkHhvBQx3",
  "key22": "55yVc37ehMg4D5U9WbFXmnA6t22gKLTKzwUyubTBgdER5WDiqpv8YzzLaKFdvGoq26YqJGshszQRU7FuZ2i439KP",
  "key23": "5QgRTZrG6NWqbGM2zyLL2uQSATd2nH76QusHEYcgf4CR53S6SwEd8qNtw4jYAjcm3qAH2DDaDz8BcEyURMFmqRE6",
  "key24": "4DZkuU2222mpV6Q8VK7xyGJ8sgG2WN8ZJ8RS1qK8rxiSxaWjBtmwRYniZKL5z2TQzsEYxsGjGAK6hvgAWsembFjN",
  "key25": "3zLHfP288RDMcdVMUWY4sdGLkhfoMWHD54x7ykoY7etoEsz12WvRKi6n1rg2pauZUdDxvCytDQss4KaBMYR5ejTK",
  "key26": "5AFPXS8v6jUGAXiwCFbLNjZ4YaGceDuDXw43ZCpdBUw1QvS7nW8P8eBDkD45iE3EtZk97uKqFqbtRcrZxMcByJkS",
  "key27": "5yBFPowd474aRkvNbcJG1aNPWvujtrEczUfky4HBdrQmYxmoa24E5kFMtgM46HTJpLvJ11PLCrWSnZy32Te5bGUq",
  "key28": "4j1gAd1YveaT5o7sUK1hjexNdb7SBAD5hYGA6FJqRjuLNyspoXvxXv8RUuDqxwF4Q61MCTgPS9aa6N48MPxkNgJ6",
  "key29": "2yiofwRVsF8r69soukMfHVbx9MN3eUM5PM18uVB3EZk7oLGhpJ3k86a3gov5bDKfniaXi7SwvXdVxe1J39ns5EUU",
  "key30": "X8scLNRRp19JkxWD2Rah8z7twvdeZu9kUww6LGBRc6niKmFw69pLMdYM7kZFFH7NkuGj3gvZt7NziQ6HEiCqh9P",
  "key31": "4PZ6GpRn5Vfhfq34frBsrFChtKf4NY1DMA19DMkQs6igBg3jMmM2N74C1FpZTqEyrEYtuFQnhmtf5LJQ1or9fbvW",
  "key32": "61XBB6T47tGyBNR4Z4xHq3o1dDsCS8MqmpNtEMrhYRSh1JRCt92YapMzLCeHx8NU1a6tnSoMTFfCvcv5bwztmAsP",
  "key33": "4XAYk9JJgMwN6aNKKeZ7LS9jXMAP3BFDD1FaCMRJ4EXkMxMsQ94XGvgy2y2n1o6mJM3nxL1UaPwVXi9GZT2SEVyZ",
  "key34": "3ctj45dg2GqDCsQa8BVMDvaYSP3TvhMu2mAAZLjRjCScZFMzz28AQDB28XKSoxNkYivJnAh2gTpyQraMkudqMAwc",
  "key35": "4RDjTyddzCba5nBErUygwMWNHq6BVYRAxH7xS7RNi837vMVS3X3KN555MYjsmsJS73d7tMnF2M2YKsD1AmKbTfNf",
  "key36": "3ghvqNdLEGMCBYySLy4fzRomQEwMWKxz2ErtXqNhWDqSo4aff7i1RH2HizhPDh5wUZsmuiTbGmrx4g6AopF1fpPm",
  "key37": "4yVo4SEz9w9mVrSesVUfTTVnfybhsYMgquB6tFcsgR6PTXQSVNwgqZaJbGbhZjjDHkJQ4GF6NTDRtekrJrrmWW4q",
  "key38": "2SUhA9734njhRTaWa73JXP2VTWsKgAZopy3t24pSB1Zxtpkm6Lvc5TbAa2xcaS7FJAu252xn1mxDJU767HRynGoT",
  "key39": "2rvoywDHdxKoy7pRkGQ5xXkFYzEyV3wwkMG4YfiPC95DApzUnBvGRvm5NyPRYFqPWdQH1G38Rew5Vhkx9vrmnamY",
  "key40": "4axxp151d3kpiCjvt4umQQut9mLNN5XKcfuG21ndGLztbKr3ciaReWDhnS37YpCPRxrCgbQuB8diMRWdeViaUSnZ",
  "key41": "bSREHvadc6NtrArJ65T4bVuA1Qztb7JXVeruDu3bj5owaAo67LxC6wCszmuyXn4QDsUwXXMBipNYNAePoz7ZJSx",
  "key42": "V35Kk6RGcZaUYsR3pJzAMRR3sHcDvMwSkzLJCmdQyKm36R9dxXDDEDszB2HhTo925zMFTjVzAPF3xZvn8KCPEkB",
  "key43": "4HC7K9rbXY5PFfTuQRhj3reayAgkijXsNxxgUwLayxAk4dettxu3MQN9Dwdy1wegh38kJWiyKo31QMtaxE5ShMPY",
  "key44": "3VtLvvrHnW6vq4DzQLqM28YGCW9rmQJoQ8XBVBH3JKPYqj9XsYkJie1JArzBFZnvPELPVwb5J9BgcfmjBs7FmBpF"
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
