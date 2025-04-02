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
    "4bfM7hbY9D4ysqeEKyUkK6CDdUxEqqFssv3LhFWYaAJ329qVVrW8HdaRvMUMo5xmEjjXMfny1duQMH6ZjVMDBxFF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w2ntBPjXqswJE1hiHnvAehHUkpqMhj88EAVtCTHHQNmaPMDuTmkirBbyagHZHyH9bS6qRfRcYatfgcjhhnFuuiY",
  "key1": "3hE1V89fNTZ9e5343d1AWk8re8THBij6BxL2AqM5bghUtUNp7gNVf5jo7W4Ed45gtVG4BuniBRseRJ4pDVec6nqu",
  "key2": "4qghTNPQ8ENr3z4xUU1FehdYThPg1Yjqw4s1E3r7Ht9qyCZWfPwJCR1sagHSUo3kAeoAKqnTaRLNsyBaRhi6dEYB",
  "key3": "4dHRngW8Ak4NczeJKdUA29jPUBLA4VeMKz3tzMAVgrGCQxipAt2i2QAoJK97oKEo3GzR3ue6fJSGsiR9sZJZ6zDc",
  "key4": "3mzeHkAEyVvCQR7xArDEbWyB5K6UyprtrAuy7f6hi4thBM21Mc3xVNrxriUPrmhc2ASb6PwJmeigqj8mGRafeqgw",
  "key5": "66yh4u6TkMtsArRiTd9aq3nA2A3eTAh9JF1td68rEPzg2jzbUMxXdRpAz869tfce5k1wPHbZHQzmESmZKbi9ewZW",
  "key6": "5pJB23pWUc44x4ZAa9fA9zKTmKzw1LxzyoWck9fwkEpqAauBen2JjenfQSTFYSmMBPJHMAAyWcaniPY6iEWpC6Jy",
  "key7": "2AbNkss4mqMXruWHrgZR1833v2BKtZvwQUDQShX1Ugp1HiFfMpZX8D8P9Vhp6nqxDkNRA58pa6GSzuSpMMpuFL4h",
  "key8": "4yScqYJ55JGLJcDEVfrs9xZndcKUxMkiv8QdVJ9U8Biz9173pAPBC1qgd9fgJFVfKvjp2tXfKcgay2U4PVJEdaR6",
  "key9": "3t1qgXGiURMsKLdhXN4N92Xi9xQvRBy2isUT2ckgkGxDwq5mtCbW2Van62R78AmSG5WUi9MaAg17z9Swe3CHCEbN",
  "key10": "2hvhSeXz4iADisBGjqeyQvDBwBP8tdymJGo6WcpjF8E1SGGiBqurMr41bhUQqZuJnFB18343gh6whqq3AuUiCEeo",
  "key11": "31scyS6b6xbL1GpmyuyrRSQFNmkbnYXEFGaeEkVKYdkDM3R6zUkR7TwgSsAxh3GZwF1jsM3tpWrNk2qxHkUVPeHH",
  "key12": "4Srda13C92iXbdivcRxVmsC1yNNjFijoCndUrKEVVCwoyqMa6BfZHWpBwde2Dsry8Vu5zoSbDtHJjzs8wBtGsoP5",
  "key13": "4KSJ98HXNU1tM89Ju7psFmETou5JUD8WNKTFe9AKR9xc7ByeuQMWVfDfj6yLBkrzmFQJJaAq6uBvyDj7pKj1duau",
  "key14": "2KWgfH7sMYNqPAHprwJQPRYp46jfYvM7Vt9VMgjkxRjCSwtUyYQfMAJqRHvy2XJ2Tm9U3FxzjoDw2C4qwpn3ixzF",
  "key15": "5iVP2mDBzs2uXW3xcWBC1L61VBKkdAr63CrrotfMxsTsVkVEQsrbmsuS1ta6WCk1L48ahk7w5babEh7DFWgyZZ35",
  "key16": "4ZAFF2W41NTi5u2RrUk1M3zozJKQvSR2joHoqfq1NkT7wns4iqit5turjmUavgCD3UkwUmWN2MqLpXoHGBY4BfQ8",
  "key17": "66KaMH9mNS4WsX8iAuAxtPiQNLU7ij2wmj4hCcQQpgYNq35EPuKNzhLPu2ak3Ro3AGqECSpaFLCgDynYmjkWVRuu",
  "key18": "3tvHaKd83MnxbBS5RmnrxAfT6uyffVum4GDE5Jw6rKTpZaf4HT3NN9ErLSCNcg4E4iZaWRTfCP9ZWditNHGPDjx6",
  "key19": "5ZoM1GWTeT9qFzm7iVki2kJCjwidutcsrgs92CRyghzicayGot7EaBdWBNMmHWo17ACQg5xAzoHpWVrS4bhu8GEP",
  "key20": "36hVV1UMT2ZTVLamacH5pF9rpQwhLHdYiRPazQ8FybwUzUhMqveo9ZqyLnUR8Rb2kxH5Pp9ywHrCZuuGKqWk4tGD",
  "key21": "2ABo7w4zkdKEg5WMwnPnPQCenqFDtWk1ug6K4E35xVd9ADws37o5MPtnMP4dngDbLXStikDF6oGf3wQXMGcnCKvr",
  "key22": "2pMdd1B8kKnrtYdzh1vzL4A8rGXwJWeZtFjYb1mQGXMBevqoJ3UN8zCabiUMJKi6kCFFvbRpZ7UaqeLhpAvuMZJe",
  "key23": "2rTNrzhuD4JohCMeNWKpqmXAhqxjDNhZfGRA79HBvPkG3cCR37UUi2eYFDaeXgiq3kviGEzzQexeMLMGXtEsnrfg",
  "key24": "3wycs1RsRz3gnbXg3Pt4hfPuG54FZutkGdvzoUcxZXpE7cJFENMQ1bcRcnnkFszC4Zc12ZitPSTLVV1EoBgoxXum",
  "key25": "4Z9Y7yJx73krso9NbpfJsNGgJLdrM3TBAutjxUtzf8xwMrJBusSoQzagQfZTRo6Jx6dBVQkzuk5XYo4DFw1LevXN",
  "key26": "3m7EhBecTfQ9F17ZjPWp2enTF5ucKPLC5gm7fJqLr2T7agwDuucpNNAqrjBesXH36PJPfpbCSCgAbFTLz5F3gG8r",
  "key27": "5pg2WbnL62rj3eRzS8mfXkYv8UdVNcerNPuviMiE8VdU77ur7Be3ahXThYoTaAW9CMxd925BGomfSMLt1wgiW4wZ",
  "key28": "4nWqgMKrdU3BDbBuX6F4GomqkRfF4aiQaRjkijAW5Hyo6TbUm1LEj56dRL1EGjtkWNQh6BxBNzFHnf88adDYzcX9",
  "key29": "2YkVNG2RKEB8Ry3XsXu92mXaHi1vMCPtBTAa7GiUaBiwEVhUojsRN45qUNxRuE32RCpvHpcR4AG22nrVtV4edspw",
  "key30": "3h8ykP38Vvo9LocrTd9QzKsRDgnd3cvW14Jg8Suxi3zxL6mCa6pRKHG69tBgLefTKG419bPx9nHxYHa2BPNEz8bH",
  "key31": "jVQvTwuqPsC9Zvc7urDUrJBZNmmoCfjW7vNsdWAvqkuiph4SW2XJuh223jTEn4do3vkS22fora5u77x6EhmRFVF",
  "key32": "5WP7TCivGRatVwcgsfHRiVkoFMzWwefEwXBhL6wTacBiuPkWD2HLxMia71WEYBLxfh3Lw5gDMEwnBeTTQCB3KqUJ",
  "key33": "4iQVcFD4cNBR1cW7bZTNjtW5rx7aspuMH5r4rBom3UWBngAzgVRh1tewm7iQN9mC2CKWV8ENwAeuPXcZ4MBSLnzS",
  "key34": "4xKo2WnrdhHCV9uD8Au9wTz7wb1fJPGUm5KAL36CghBHn6uw1ikVESAaCFoAaGDGr6w31AHCuoEeC4eBPdYsjLPG",
  "key35": "3pk2i4p8vdTpQD9CGWiNxuL5cqr3GxFdSjz4wB61wcj89tamxqUJxN6MAeYkaoKU7jF72G6anQ5eM95QYok7FPZi",
  "key36": "2Hw4oAraVvFLSY26uPz67bdcvv6VSMbWn8FDmiQ9TjMomwx3ooyRJ5nRFksVqEQdGFThnXdVeAokBqUpkx8TWUDW",
  "key37": "2NCYFjhJcNcXDatmjiBiNQ9EH7PqFVSJWW1QbMScJPZSNanwaCSKD5MYhupuwvyW2V1rcybwEevLExCSBywgFkkD",
  "key38": "2WNDbbZXj2DxGrwLEo9VGEy5QnhcGuqUAeXPZ6biHKxpWrpn9N9ZLmSQd8PG3pFp1CBX4KaomY3xmDXD2GeoGb8L",
  "key39": "4bYsZLUFtnQMzWWnqEkZZ5vuNmzEuGaoE3zZYi2HwRj1Cpxr5QYhDCmivR1H4MuWHFfUByNS36JfP4ZWkrsDXTTY",
  "key40": "tGUFNM4Z25ZxhRbw3mtzbNu1FeANWKL2d4W1GyFrkqJstkDrAQvaQ9X2zbdDBmGHara2HFiMUh1cqLZUFQMXhRR",
  "key41": "5Hcxw2LF6TrZHjzYFFGGyFik2c5kBFSYFUWwjwnvVF1KKG8W8v7QxgZJ2Fx4kMrVZSVs9mV5HLG3U4LbaRvfRUwe",
  "key42": "2yHYxfLMxDBb7csr12Lxs4DP47VaP3HW8agTkoR9L4ywQopBypUB7TDr1WeMz9PZTmacaxYHdyiJgvcf2Fm8Dkox",
  "key43": "645jv76hBR9zzMLV3pJHTRxezc3Uga2KN6SDJJCePnGePoUiYozEA6ntMQYahew6DNWTnsNd5wmvgiu8CTCWYBX3",
  "key44": "5BbSSB5YSwBGt6SHfKPWE7N8fqQnXqqzmMCooisYGBoauVVoGsAnZdMstnvBJXY2E5fZMm6q5eVAF8BYJxBcWB7E"
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
