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
    "2CWBDKhv1Trn88hSDuqsdDYzJAdCe3R85cmqyWGK2egUXUYMeFqUEbjDq1XmncU2rTtz1XbKFVLngW8hASnYd3Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36NWZY5LYaiKxnSprrTuDnFAFCUZ71RbuP2SPX9cDEPvfis2n6bkanyXy2rTDFZgzt1GGZ8TghHyq4uFyKZpQyAB",
  "key1": "5mkPujjhPYUdQFSjc9kmhWQjY5fwQ4fK4PRTLs99KivMFuVx6jktDYkAcA1sZHswyHVAEBk7uzxPiCUBre3QKqBY",
  "key2": "5Pq38C763FFZVMAKKWMgJu32W756yFyd3LK3QUi6SCiDR32ThpKyPRGAYRBnrmjVtypNeKSRE5KeENSGiHkrPxsD",
  "key3": "HMSJa5uiMB9imBzH6wGt9UCN5MPkAVUkQPDEr7BsdBpMJhFM6wAX4wzLgQ2JLTL4i13ayqVE6C8LHjpUFRN4pG9",
  "key4": "4AU4pLrtPsRFm8jbBtmHRhswBQ2uiyuCNFiApAd6zNvaLTNxgkmtxCcy5ndSyszHi3Sv4qQsJscnpR4TpyaGU7DK",
  "key5": "5BeKETmPXmoQsUmyBW16VY6c7Xpxxmd8U53grFb4Puoa2s4YDbLmUNCcdqj9Zx7yGpTrba9K7EUe642HNcJGgb4y",
  "key6": "3ziSK9HcuMjeB4cMy9qB4csQ6DPRWhko8b2TXYJK6WomFcJQNE8GZTBL4NfL79D85mewCGBBKisu1gR3Kd8jT9yT",
  "key7": "9143yGcK386Ncfju12Z3ZX3dtZzYkzTR9XnqEgsonBxWxR6gh2vieX84m8SL7PHi4qpoiQHknd8nAL2d8ssGvZ3",
  "key8": "3qg1CxNHmCzkjSzP5GJGrJKsxSzGnZN9C6BqsAjFA4P1byo62wi1tEVnKqynWQ5kxHgCi5XAStbk9WDNoFF1EkBb",
  "key9": "3BaVeLRwYE2T986ZXu8NtwBhEQTp4xLV2mBB4Z6cYiR4pQr6zXHv7u67iQTJb7hFf6mmP2AjHM6G1tyUMbUex1xb",
  "key10": "ktREQCcUDoK8KgLLY5e75NvkK8Qzc39CUkoDRtQvWMuKUJ1cT2JspqjYeVmB2vJsLwDPnWATxQzmXNHreWCyBFv",
  "key11": "K3CbsJRQsfkC5PM1PcQiJ1dyE3xVuja2J5gzC8PgCV721NKsSeReQqam4KAsuELtUD2cyH3hm2tmevvaHMoGy1M",
  "key12": "2DA5Gb25snBj3iWXXUzTTSLtYiBnfJdnHuL6t3AbFK12XybpwpY1RqiXBvMBk8FyR9HQd7ES9W2MEU6bCJv5VAyt",
  "key13": "3XW2ML4LEJEEuVnWLXFptXe4cGuHbZ9Df7EAjWydwaJf3psAmTg5f4XEkVksEAmtQTXSxbpD7UT51LQWmUU6FGqH",
  "key14": "36hiCv8L2GWLBA7tNKYopnXzZKS11up89rxJt6g5YDhcgH52cfFKumSiBbSP5gKRsyp5HHiJf76eSWU54N81fZcA",
  "key15": "4xKyEeiTsXibpBGNrdczyeaQmdCXVEeQ53dBHKGz7spGWS4YGGzuokfCHRJJtW4marpGEnRM7f1df8AwCMnWQtWe",
  "key16": "5Q7MnLCkj5bgDuYGXtvQGjSJV5oghGrW4xNu8Pe4Di1hs81KWkkQcHK9hwvDJJ5tTx8LTpr6aT3KAE8k788Cecjr",
  "key17": "2RfRBDaKoG4tVnNPriq5qdq5jgk1Z4DhgoGEWq8D2j6Fx2bEVGF76R5s1Th61jbd4y29byPtEjDRAj7BecR4VENk",
  "key18": "2Ko84LnhTX1UJd25uqeBmKLdNAYRyqDF6inknJBmzXXUnesf8ZNxm2DTxQHWfvcGyH7PdSKWxxnSGRjwSNWWjuGQ",
  "key19": "5Gy4KbV96hpy9P8D5LaUZBFkakotknntRENvfPNcJhtQTJBNvcJXjiJrxHJyfb2ztTitpp1iTUNUErvZzCFVNDix",
  "key20": "4kp93TiD5NVdxBjJN8safBJWf93kJvCKEXQXcJsa9wcvaJdHmmYh4j9G9D7dinBuH6RCWTCB2QbCFNkGvQMhAgYJ",
  "key21": "4LXZ3fpPAfppVzoq238F2fU5myh3CTwpmFJkb7LhCMPWdbwSG9E5m6q7BYv6YBAtzYzXmdS3qLc7pXwF84899mBD",
  "key22": "5hWx68bt1D8Rzy1zaPvZETx52WHtSrfkLDDQT3xtYmomfHhNFYe8F3uqo8pu9a9aFJHLRSCfi6y3QutnfsmVH6uq",
  "key23": "2EfBrYHQBxPDo7s6GUcVi2ZNDgarSvEqsxu33tjTyjKk7SMkZ7enirivAjXKK7BdQZ9CzvCNEnSh2ZPk4XxM94Do",
  "key24": "2VhT1G51v9H2mr23Ff8ZBKVPU83PEFTya9sy7J8P5HZxYpPyvXS8eTZG6TwFYEpv8f1u1YeLrVrKq3w9DAHkcNw2",
  "key25": "5rJBNkoaYD9sS3RhwbT2eeyj3xoWCTszeaRMyf9N1eVNmKr61eaEaKmVwKagd3TyJAT3VGi1q9CdYifrQ2E7kAG9",
  "key26": "3WDL9W9rXoWngM7uf2o5tZ8MALiHc5fejugs8wPdjDQBf13ig8o914z3Jxpf2ebnX6RhQzRABBYSmEJ9B7vqPkS1",
  "key27": "66cijpgdsmrzoSrTf8zYBQ2iV5MjTV3ZNtqAUMLmVzJoB67YnKRFVwhBQ4h6K6UTvActKqcys4ZfWYoz92khtctH",
  "key28": "3zYsQz84hc9xGxzvvBbsysDuDvMx3G5a8ddTmsXMjKWNSkXw5AXo868oSUBbEK8vU2k6Nn76CXSxEobujypqq4Le",
  "key29": "5eMJaV5cFYCxKxTvgoJYVZopvVBx43C4gRpjJfsGVZEzcj4fW3qcJTPsdkQ7cYo5HJAKPMJmCpcRWCHarAccwwmj",
  "key30": "55kCALKjWtTzk9jYUwA8TegnWoyGYT5xrtdEjqGRJMPRaZ3wU2hQGiMXnCei7G34TA3qNVH18XFo5tCwQ28xZzd9",
  "key31": "5sSKbRxmrF4bs6YZgUyMxtmtpcmguDotyJqspvR5GdVF3B2KSbsgEbTCaif3FgqqqKfmhru6o4BtS5JmZXy65wwZ",
  "key32": "3YzWN443objyUfu6AtLcauBmwNPM3V5i4wxct5fS1BYgE1UdrUP4oN9f3QcPQZ6myV99DEJAjBUBFGGb76BJT6Ye",
  "key33": "xNCjzbVzRAF5W4HZ1njU64pZSPstevepL5K1HZTJvk272FsFHjUHWwrYxsxiJDvV44uJFQocPgtza2YEJJss3Qa",
  "key34": "4vWJi8SAYDxetbPLDsrVUQHktTZrTEt8pEM6QTowP2wHA3Lg6Po7u1eRNYVHmimacbuxXVoSTL3MxXUQR6MDZrJt",
  "key35": "4BrWJQuKmatJBQ6Tt7NVSMirs3jhUjBwJk78wzBeKK6uE7kpiBU45BuprNL1nqXYkufLLmVGQnfm8PzbsgJVQuZ6",
  "key36": "2tEJM3S2R1UrpF818w7gJL9FsgLDgMcHui2m8EFy2pS65Pjr91BLjPtoU4zcWKMdT4QtDrgpGGTtZZYcbzT1GPMn",
  "key37": "3CacNo6ciR79WeMeqd67DC5FdCWr6tvBZJjRJF3pU85xvTSRVGY9YRuAQ7nCh5keMBLMMMN1bFDYRj7AhTtVsLs",
  "key38": "Cbr9dBERravdVbuuh3awQRfYJxzdkAbTBhWaJAVV7FBQHBV1qCRMV9ka3WXEV4MSVhun4FoVH1S2w3d7Q4hCWJU",
  "key39": "twKAMTme5J8Uunpuxg8HXAX2Wfz25Cwm1gLzZneoyYPHskaMnnh5nZ3KNQfGorn6fz9T5c5DtrMj2PQfnHn4mRW",
  "key40": "4NBTjZUaDdRycCXehfEWbFTsRzdXJKWk4KBqYwQAohtTqLEx35z7KUw8p5GroCwiMPmFhLQVFqBdPah3c1aKTPNv",
  "key41": "34XfFLEV7WqVqWUX7EcuzMFpTVj8RfXN7MfAkEf9tSe5ZuRnJFPfHq9anrrUb55q3NM4BBCJsdNF5HskjySByxeC",
  "key42": "W9ZnNTnRyqpUYSkgkyPh3qg5w5BAhvCk6kZSJzMxn6ya2b2iJSNhLCrXCP1YCtJruJQ7kccKtADTEpsAmtbdXJz",
  "key43": "4Cwr5mKZBJEUkRqpr6xh4NNfLf2VQDxAVDAsQtfkhP9zYUdtYYpHmMWRfSLZwmLSJytdsMGkF5ptth6GNeJA32sk",
  "key44": "2m6zCydodxWk8GEorgKmzeJyerX46MGYVyaLCfgnqkkTAogs4mHqdz75p3VnxtqrxZLjFKivhFAHH6g92mBVhiiL",
  "key45": "4VHupcwycEip4xZibui6F7vQ5dXG4esnVAkFhjF3YsoVWpUvtRF31inqaCULTjpQL2bsEF9VLp1AU7zDeZWrKVjK"
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
