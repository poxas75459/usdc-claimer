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
    "4Wyh13ZUwK8bVQP2ACxfvvFHz6qGdyUNfZJPmsb7utUXbBPUAn2YoR3g561n2uzUtkq7PD3mQ1uWAz3SbkehT6QT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L4er4NB9Z3hWFgMhBBZqkfQqW1xmHQALhHafDG86J52sXVCoU56sKa3aDXoqYskgpzb9Wx3oin9nyi5Dkt99b3i",
  "key1": "5vHLjQTSDKLmkBjQrqnSwTZ9pi3qx1pPc5MC97UTzykQ9Ea1D8MwAPUXn8YJh1AAg5WF4LCtt642pkMVj839eNLx",
  "key2": "4iDD5QDDy4433QdPiBxagxHPDobshhcUhUQDQu6aQgPjvqMggkDohcRC5LQL3xse2NM9a47ytedDPpPR8rVDNWYm",
  "key3": "5bF68CsUczG1VveejWu4xQLaGQurZXQmydoFJRexhaeuA1aFMxi87Jk5gQWpKKmXwm4MrE4eDC86D8VaAqCA3UdV",
  "key4": "63Y4J9EjF9doorqWFhwnu35g1yg59X9HAmrB2HJN2Qwrq2s5GVkJYVgoQgaEqCeeBDfgrzHarz6sUE8GVQwP55uG",
  "key5": "5nrzEyY5aqM1dnVGHPhbhdJHUnQGsW675zWLv6WsPjuQBJ5VKmYGNrZ81tX42SKzgBigBhPCEmMn6nwfnwozxWGN",
  "key6": "2MUaVJsEU9YnAYaRtyYkMgJc2ZVitk9z2HQsA2Xey8J2mWityyUPrKnkRxBUmXDQFrr5rFiNhj4fGK1cnWn6BW25",
  "key7": "5Sc6FEfxdEZa82vzjJ6Mrf6XVZZeNS8HJ8J2w4Ezmw3K2zvgJokJHeRJVk39kANb7QTAjTxwqMmi3ZnZdK9sDcNQ",
  "key8": "2Korvern1chA2ypLSUN42MBKGDNpKdbSkh7wPQXcsgzDbFnMfBu2Nndw2h8NJmrgwTK8i8asgMVbFzNj6kejsKkW",
  "key9": "2CdsAifULYwtUexgAYdUdAjuXSBevqT2citerR9oFnPckrEQD1SME19d6aQaXyJ2GY3Y3aomt7kFj9qbFbkpVY2u",
  "key10": "62GaqG7y5JW7m8YjSLmus9BvfvJ1pnWN9wCZqBJJHFSVvoCdXXTqR392YFn5jMudWWspq4H3HvjERHWciXx5ybqq",
  "key11": "UeULcUrGPWuuto59gh9H6GShFh23UmFwcRdqKZTpjejY5U73ahn5vSVSwK1NUjMh2pQtzVhuyncp4ykLtr85H3h",
  "key12": "2zA4jReAGqqTgQhmJvFEoziS4QrMi3SDmvz5xp1SZfyDTDNXjYxZE352gtYvwCgEyvcqGCkjCGe4RM1H4NQA863b",
  "key13": "Q9bMjHcUgs5Jz84c5XMJadUmi2shhjLGC1vyngs7hQBFQJL9mFuQpUNrXWdCve285ud1XoRqyCvznDETGTW9TzR",
  "key14": "2ywoai5ya1qUZgoWXsqJYznNWFNrJJVAUamZB6faVDC93piVq48EK7ZpMUywbkty7KcWmrtTE9cUWatpuWRiWFtp",
  "key15": "QMLCy2UoyctFPh13D6UQPx5cMmuL9XXjetHEsxJY1zow5BL28TJrz8wfV8YoS7RKPNEPKgW5QSh2kJPukrS4jyd",
  "key16": "3goJM3EnxTs86Bot3Xt8HSRVSb8FLzTAya8zrjoE8BitzKEpu4i3RWkgcYzEDhwSrn3q2bL1zRYQKaHHvnoxRYVL",
  "key17": "G45qtU4UUrFudkqHawVYyooEANqYhYfjBV4qr5S4zMssgDDhK1ya4twX8CsadFjyFe5kAfyNyiuf8EjkdEzfMJK",
  "key18": "3JcrcPAUDy5coHKpqN6pcrTzMkKbBeAAbnVNBEMX2kFtVgeg63L7zqbgW7HC9bj7X3CqNv4q98EpPTKZA8YCp3Lv",
  "key19": "2wEfpWi66wuStchfMXfCPw7HyEJbbCCFRYu58ScjmGSsrqG761YUP4qMYGpUn7UxxZG3nY5FR1QuBr3Kk41xdeCK",
  "key20": "66hmH9DePzpg7piW6UR4a3KsLNgdNxicctLjCsJ9QNRmA9C1mVJrMJLWgQzzQKs3JUw3HGxgr7KyFRfktRqrLdqL",
  "key21": "Fk3yvNASAp1iKaET3wCy97sryhciMsNNd4JFsjwuJwBRt2Qxd38bWMitYuDvUSU6ofLPs44DSJV2mfHZLV4uhhU",
  "key22": "3cGXTjbfgEmtSwBAyJ6cmykauA2p6xxv6CrZw3iAHYwMfycoNgQQLE3UhjTpwp2bdnN4au8UQvkCYsYcBgzCCbnb",
  "key23": "iXqmmfqPswr7gf7CTrYuPF7YTTgLdcWqHx9b99nkcDfMK869MxPoeypkp3x2rEGRrdzoj8Rim8j8kn97Y27KuPn",
  "key24": "5RK7zLoCs48GSScEKMfzuUWXC7yhUG1nuoUQHei7y83hxPreR2xkBL4Ffaj9FHefCFecDnGG8LE9UKXwP92eWg4j",
  "key25": "21GdJY7CgC9N7mx8GPctDb9yTDPrjTuy1YrpGnUCRKwLVLE3nQEp48D8HDyXef63BWTfPZjt4CiNbao29X2DvQey",
  "key26": "5hLLVNHSEsq9BU6UbwBkc6y1CjkYJNpHW18R8gdWwsuUQyCrX5qaW4tWQZGaM1ePoJocftMBXekKqNpEK7rDpjKj",
  "key27": "CAmXWNgjnZT6owkGDHJaZh5FdjhmNf8SqfjzqToZxz3zDTz9ghJAA1JbKGzojqTjVsqWT4jvmgbFPNUrHJwrSSv",
  "key28": "65GbZgNrXmY9MoTAwY941Ugmc9fpweTH5LxyX9p2UamPAkzKUUyeooTj4yzKFa1PKp7njYGauSYXtENsUFkFzR28",
  "key29": "2mC2z3Gjdj5NZgfwGWvZzz7iyheXnxzuzod7Dx55BHo1dnZwWfsY7bacF1igsnrSZciRLHairDyKZuFSzrm9ThEC",
  "key30": "3pCRU5BmA4ZQpFCJEenneZiSnKvXcDMQFVBLpP5mkDDETPJkfJWSFXYBgC6PXKx4nxM34Mm41hGpFYtP1hTajBBc",
  "key31": "YRnWBnj2vzmFtMFtakhNQeuoSoidgMeHxujEW9NRqVXwSU73mLn6V9ZWKVseNUBcHutWUjtsoushWjpBXmXTDoZ",
  "key32": "2qBdVARZaqCyeQiKE4XgnVystXTcgrAY3Nd8YVVuzV4qnGABcbzA8hsc34ZGwMDbrMut1qhp36KYwMAvc57DBmtS",
  "key33": "G5FkXHvYjgdqXyG2jpxxJHjqv28djTeKgY8h8txgvredpMEBKSLKfphAsCFXAESk42EwAq6dDUUpeg1HhPzdJrx"
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
