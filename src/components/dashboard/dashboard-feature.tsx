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
    "2qY4T72mHPUrMMF64zi6tSCDzpS8dA9LpnMJ8aP4DF8kLRC7QsnbbYg2JtnGDHXDTMqca4Sz4Dwm3iWxhu65yHbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ABmh6BMUDDhnRZPmg2Gbbws39f3BzWuGcdcaTjHeqimAw24XLHLJcHPgTwEvopDYsLiKx7WhZxbz6rrZXUGNmAZ",
  "key1": "4JjzczQy8XxYudRmpVgMUConz92sTtvT7LeVbBgzAGgBuYrpetphSBQR4gASwP1vUHCPXnw7xVkns9jbPHq1bgZa",
  "key2": "4E6zvwpw2vy2X6E6bbao4PGSdh6LyTfJaMCkevvQFXQZP3HPM3DYKa4waQ8rapkJxPjokCHxrMJafhDTpuVmgdzT",
  "key3": "38vyzXcaMQ1Bk6NsMxoejgwa6ceWCUCa25FkwXnMteuPtd3mGm2tMfQ4DWt8rYrR9CAnbMxc4cgMHLBQbjSETZer",
  "key4": "t1uJRC3wJZ6UFRcRX2G7V4HkHaSQWE9bRRu3pTJW4XPpCQNtGXcMqDxnQT6328te76jHErG2rJvkNhH4CvVEyz4",
  "key5": "34wjnhspWdv2PSC1rFmbwqV9mqStJCSV9d83RMV4fGjtHv6UZaxZBqQZVNzihmYrgDWwLmcerRE2Vpk2cwMakbcf",
  "key6": "j8hzsmRPqAavE4S54AKtWYTsnqhujhgSysVgBXAQrL5CCjQPkpR7Jk2cJFqJehmeEpG2TZs5W5GtwohFkBXSDSw",
  "key7": "4qBxCBHVcoBQ8HnPUKqqvWqm8vNpYztvqRWxuLN3NEnyYjh78KifdxA6Hz5GdPFht9bLBSvpm8fpFAW6G3zezukP",
  "key8": "2xHtCP4CZiCs611qpfvEVXTyDoZZ3pmbRLe9ysfBKUA3rbAGokvQTZdzT7yVhQnW7hiphYwSw2CaWFw1mkzTWDvW",
  "key9": "2y3kxkE8jiKXhDdR838bcVSZfoq5GmQ8ag1558bsazCypGKP5P2UK6DZg5Jqvi71ARHwLBKaCJ2afDvtgjQWQGQp",
  "key10": "4DC91zktynZQLWmVQqF5D9J8tpN67x6sDh1uctafNYa4qQZJaDoXNJS7aTCc7F9RSWonH14Ur8YK1D1cfxXoPFLt",
  "key11": "2WrE9czHqshRyVTRMAkqF7Aqvu8CSdyRVyqYWY5gSwbhfevW8eTgrKdb8gPnMGmNBzRxpRMsmBTu9pGG2mbXaQE8",
  "key12": "4CWJwGHbrx5cCCzcoZrjrBYmZSbVdB42k1VUsYNzUkDZnmg3jmLcR3HjsEsH7r8GqpTC6QTRNdAoREa84pd5SvMh",
  "key13": "3CXf7yzoR8vpLM47Y8gWGwtNTLvB3vtRevS5MZjYhcCQ7WR2PG3qPHLDFpmQ7w8LszAg49rBAiTCbyJUGdn8cMYU",
  "key14": "uLRMRo7sUQ5Txu9dLNMNztcYY8Ew6vPBTgVLDe9bBSiAwhSftb4anSSkkhrugC4qJebG2gdszCA4yHFVXkGyQSK",
  "key15": "Qt7K51JBZHdnoAdupnq14QgG3MfAksBKpUcVaBNe7GJKD3wLYPWXowGWbpbPxtXFjD2uraBd4LprEJBVXSt6seS",
  "key16": "2u8gRe8jRd4z3RP3mEbEQb7nFun8AxP66iGST2xqVydi2pTmBRF4UeR3qWBcHvpJJwM8ofun3daY57apYEuHndMf",
  "key17": "2o3WtgcH2Ciko2gQhfY2s9NUBfYm8Yq7d1Xn6yFgSzX96RcJwWKyUfti1SyEJvNUc26J1HunhXibhawMPU2K76io",
  "key18": "VxWcSE5KymUeuCTh8LYwypmHFow9TeNveozZqrast41yWZxBikJCEkxEKHGbVwGs9ozVCAEgfr7G2co1GJWUUS5",
  "key19": "3wPk9PdqiS7o6Kya4E4cpWWBLymBuCZRDzxjLvPPVXNfnd6jQAQebQ6zb5kcPPmNjYm32Wi9BktWvKrAv3yYrpPd",
  "key20": "2vVrmm3LMEWKTPjk4iSJ6Db1EegNutfL5jDnF2t7Capo9xzDTtW7kKPP4vSRKbLy3w5cCA43X2o2w11DgLvDuaKv",
  "key21": "5TLUhiuwvV3WaH6heoUvFvFSrxvRYu33JmG2GNRXfrE8EFVk81awNr2hDbQin5ApBG5h1BAwgWZVKPWHkFxzjJBj",
  "key22": "4uWHa3MDcYJNKuxcKxxfpw6S43aZ7ReJLJqBZNeiXGN58srQEyriadteoPJs8PvbCBbtNrrMVBJLEUNVZh74Vjfn",
  "key23": "64rXsTncypUWiZTuzvd9cdxRFjuTpQ2BTgSXHsjKt6RQSSwFubNCcxYUjhPWd94Ewt39SJuDunQignYUur1o5xCM",
  "key24": "3hz5xPveytZnsXv4d11fYr8NE3Uj8xrihDJdGaqRsuSdsrbKjqEHMQ2yfEVwLp2XkxQW9WHqybnNFCY6W3S4mBAM",
  "key25": "WrSQwWy8ARQepbEFjXZpRBTZqmJFkrrxhZZfLtWGec3cjYSW6yg6SWfKPz439wnYeejjqj9CiePDVxYrkRgKVsG",
  "key26": "3bSirPTuAStvuasP41JzQkxxz1KQZa2gihjGQzti5XX39Wt5hfByJRYiYFchoyZTciwS8G8Qaau6LiNnJE7ede2B",
  "key27": "4EFGtj4DpNWnejhVF3L241bS3Bd5Ur9JfQ7NeGg9myVZFF4QZrJNJPm54NeZnMUhtS6vRrdRwtqhCf4A4Zky3Nox",
  "key28": "2SkNhZ96iDMrLJLfTgsw1tbxa4JatbV7G8GtB96XoXoGwb9F6hyL415F5cS4VLwfD4Xwd94jRmM5vgM7EXJGQ4Vo",
  "key29": "sTpoTYCA4Zakd7yf8tAMjc4SqNk9VUJeLZYkk7VAkvxWJLnRdM8ExDq7QqKoLs3XmYeu8subQCPioNFUaQCNyQT",
  "key30": "4ayCCp8Mk1QezKJEPnZMgXbgbuhFP6tTMiNd8URAY7wmcYVb3wxkPmU2Egs1vMT9jc7tRHwY5WSXSE8chFbu4b2Y",
  "key31": "XirsHHVCkFxLXZKzAFLcGrVpY9RYH6zW4SqRjTecBosQtVwyr5iduobQQ9PDapmRznv1iBQroBGW1D2fEvnHhQk",
  "key32": "2HXP6XVgvHyRov84anVpJqAVLNCKwYCoLjU6fupGGK1cPtApWscnypzypdKm3e2BYCnVoXkRJSdHWw9AoE8ecQiW",
  "key33": "4HdjZ4TfnRuxiVs8QJ8tcLqvm4kAgi5fh2jnaY2sZg9cTp6exQrZ74CVQmn7rssQKDmmr53TNByhrqi81gZammso",
  "key34": "5ZQha7hGMjbQkB1FGxjtNZJN214eHdX8QUegvTxQhmEEHKyxgwJJqodDv5Gsb8GoFQz9DpixSbdAtrD3VdNVxP1A",
  "key35": "3tktHF4syFXEvuqAQqhAXWZkYuVbe6T61yNsi7hDoLoXupgXDnrLfG7NJpFnE1Dyk6PxWFNd3nPZwq1XSTpjebJx",
  "key36": "2hnXnegCYH88tCrpM4CDqdP8AcxuM4QqCJSEk6DvTfStvBCnArHRy82RwnbSr8aHkM6TYV6e7v21LdiMHYyF65JK",
  "key37": "4xHZiYb3otC9HotMHgsMepiWKa5Dv1HxXPwFCm6ajrvM52UDVbQF4udYfSA9BwjcT91siJDmbfiX5DLXnJe51ARy",
  "key38": "2H6iGQNi3ybUaM88g8nFd8bXtYqyxTTqKzKpqT3JzTJbMQFY1PgzcCwiEaUGo6RswgL1DHkkhmkQvbA9YyvbAfAn"
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
