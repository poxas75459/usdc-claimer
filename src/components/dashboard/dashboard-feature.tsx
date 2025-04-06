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
    "4HpFqezG4nyT25p4cdMjCaGErxgZoTCsywpVdgCnWgYXGcFWH8qnzM1f1RECYfKF9aQ45w2hgtpciDK9yPfrXzEf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43BtL4F7N6cZNj8BMieMZMrLTPM6STrJqmL7erggJhM6nQAX49CmDw7P3gZ2W7A3VXbx7sDFUspEHcYtuzN4jm7G",
  "key1": "3dkGSf4ej4Hpmh9Ga2h4s4YGfJAMdxWbqVq24Mxi9PzUkKK43X76rLZVuLa5W9QbSFPPLFd5aK1KgXjuskEB2C4U",
  "key2": "2S9Gk46CwZMsveQ3nEAnVjRexcEAZ38YjDAT7a6FRM2D4xKfjrwv8j7XrDXQqpYtJf1CAh15Qj7arpMx3CGMAyR3",
  "key3": "5Qeh79gvESUo7q1L3PyCna6kanx13hkH1CQmAzNJ7CBFTxSFMHZFjwqkmBcQFXpoy41KhA98NFKaB7beVPALvnnL",
  "key4": "64QpViR4iPC45sXFkvtCKTCswtYmPTo859d1QAKwNYU9MuBYZF5YgPpJG2mjprFTj4VogL6bYRB9xQnowkoAeY4a",
  "key5": "xkC63QQ93svYPt1UczbkBumBG6KpTSfJZyjbTWxqiohmMtRos9jrS7NmpygXZJY4duEtgkF5VeE6nddCd6yowPj",
  "key6": "62bTWPzWvuVTjow5L6dUGn1xWwP5tXFWmiTwtNtKYtJo94NKuqQmaBcuQfTb5LT4F5DQFtKmMhf2xHHKu32ybWDz",
  "key7": "2cHBj8onJK9zBKUiDDXV2TLxRRMMDBbQEYUz9ThmZ6i9FUpSJwc7ktEBZPK9XYUHmQBihxffrLD1ohDpkfvEMFwQ",
  "key8": "4nmt39i3Bm6eSGQZeCJ8SvQ5XmaEx1qgNBsZ76LDe8jVYqbN86wHvXRjiiDcsdZWi5YXS2gSkVFh576utmdnwGUQ",
  "key9": "2aofq8CbSKBjKKDzkeS1xLwVtWRQ9ajjidK1UbrZuNEQtrayy92yopHG3aJhVstwBLzA5JQ3FEGwpNrayMZ2vxdZ",
  "key10": "WcUT3pWPaa7BtSpFM1cLvTNtEqPy9VJ1J9oMgqvrvtuMDnyWyYnyBsE4EK6nhRQv9daBQ26R46tE4hRi7gHXQH9",
  "key11": "5FYA1y1DRSm7zwsGNWwq8mjv6xyzcUvHNbX6vRxtnECZw9LMmmu29QSXAPwfKvuxPJdqbUvn6rgrjzFbTQVB8fHs",
  "key12": "4uuwJqnfxjsYaEkRkDPNcwpnCnC44LHjVNgx3bdt99HLPMT9LwGMwRZWdgX2BEUXdKJ6mrQRrVqc4CQgCVdEgngz",
  "key13": "4KCTv1FBG59FEyjuy1in1xWTyzMTSVRUv6nzvG9e1Rd6DzR7EmPK3hyNLkiz1sJFCuZ5dzkneZq5S8ypXsoPeVso",
  "key14": "5U6RvEDePwihesxVs13K1fkPjFjpQFZNYf9YrR2iYqoomqwPC4Hu1M5tubCyL3t5eJxNxTxsLGJuUDqPck6VPrDn",
  "key15": "2L4fshTq5iJUZAQkqoyBpyi7hdMwzwLkeRYHr64U9qWhJ5CT1cRPCJT6w8ekLwkAgmr2pizhHNusECSCb4cfJrWp",
  "key16": "3mj9jzt4F42eyjUNazzdV6Ap1d19rgKczCDzL8XqMEGnKXoqp3DtdQiAYZnoFAnf4Avywhbv8bvncpeHn8YsXXRN",
  "key17": "5Ya3qveD1dbXFetmvpj7gtY64ytCr6JSamhE7RLez1kdfU5HpoXzSaYTGbB1W1kJnoFwRQE4LrUBjiUhM22SkxkU",
  "key18": "4jraxqegP7tW39X6xfgm9rK3qqUgTiaiN6CcFwcUmtWAqSQbJHGLDJ54snGmpAWNhL9fLECCRVmE4egvD6Jwu3Yd",
  "key19": "39vjH5Bq1SfoCTBNDr9q9mdC4jcgvx9CMm5wBVQVKucFnb3kxuV52yAtE1xGMK8Wt4etoSzcva1pzQvwKfCBXYvy",
  "key20": "4VgkEAjqiZi3M4kBrMVADV9FG3mN8mS2gDnJvZdLuepMwqTAUJmGfCaHv99Gbj8zi3BJ4J6tbqkBs2YJwtC1rnQV",
  "key21": "3ymM7bCGqUptZUUrbZozSk98dqbuNP94FM8c3FBhteLG9SibEexV1RrQp1PLRcopuAdoSW4kar7Ej3W2znFczGVy",
  "key22": "4gqcmzB4mHRsxqkSdBXeV65CRNPd2BA7kXhcedBpUh6txKRpz44m1wfVDs6sLz5poMnFvTP82tT7uBAUUmwEtqqk",
  "key23": "3AXD8TXg4tMA5KG1pkpugiRbtZWz2kWX7h4F2uC2KfRGwH7VgpYSBehULc6ZWY6YJxiVDEY3XDsBGaddj1myo83k",
  "key24": "33jJeAJvrzchSjoHpSM4KH9YMwdnb5jYUEMJTvpANHhTYmkJ36edj1H19b6Vbx7Qjjdr6pTeXXYKTBQszu3FE3kH",
  "key25": "5iEmroLT5pRQmLoapnAB8pBkzYGxmg84ScqjBcoaNzHSDeSXnJCYxsCMHGJ54EmLaoFnHiaE6oMXV9duAf67QwDk",
  "key26": "WAKTUbeAQWpsnprPEiU8HMDYGy2h5WYri9CzHeed9vxXWujKgXgGjJDRoTH2WpZsPQvgWZUwvqwN9CUhSjaZPj5",
  "key27": "2fZGZ7cu2xt8iatq9w98uPNcdBucd4iUcy1h3NNnP5hyUzpdD2NdkLn1cXvfvxSmp8KGTguwoZjjc8djMPJiTcbn",
  "key28": "3Nz881q4iMFDVAizmL2zQphLBqdYayuXD7QAkwa2EocJVhgd5iZS7xrvatxJd3jnh26zicD1B7YWNz6B726K9P7B",
  "key29": "26Y18cqzN94UWKybDV9HeDRgLY4R8r7rtaJH5qjyGteKrTxetczcZDTMhax1gL4ppQ5xJJCDvWt9LK1JSReMv4j2",
  "key30": "4zs4QA3fdPhRpA4R1CPL6pGRFhUzakMrCCRX1jUpXe2XCNd6ihbVgGHaHS96Y4mwQwYZTP2FTramqcdZFNxFfRWB",
  "key31": "58asSdB3EeyqvLzWbrGzWbyXdvx5quoGB1LTkRuL1qq7YdWDnAjfGLyRW7KXFALBWJajCtSdMe92WZFE6t3o1Tb3",
  "key32": "UpopnardaPkFE6fNm8ApSscLZxHV1vcLA6DHt5Z1JxJZbQWByMfoH7JRxRBv74SeHhw48YhQZzQALNgXtugpzLT",
  "key33": "H8jGQ1QoicqdUuj4tKqzdY7Ahyov4V3A4eqDkDQknXTXYdZbfRruRubNYPpvTVdRPVo7GzhVPkYRuioi7MqDXDx",
  "key34": "4CD3JJzTZEB6Tudsi71LcjeaVxcHbwioowmoPwKU4bMqKPCZR1PuTxLGGpmUbGzzTFJybu2cMeyAaHD6qTXw5GEb",
  "key35": "3Se8qcxmH4FJXDJabVmbvdtcGkZn6wE5gppuncWuE8K9FQHYd8z4te3y43qVikSvf462WhFvEpMBuQieejSzZPTP",
  "key36": "3QLSfQAKJq915BPehmPSbpPoRv7bCP5Dtst6pGNEwRwPDvGMqf7NFUr57ZeEHYfDeAQdEzvKMtyt9wmBwaZLPChY",
  "key37": "5aJ6HdsdPR9CkEh8jDEZqu7E5oMe8G7Yv8iPfYvAsfLf6xSTEGWrPfTuokowtMVtNmcVZNfwjRcoFjALBYXFY91G",
  "key38": "3cDD5Um1mnjRNUzn7kRMq5dkuXLYRVVLrWYDw7t3JWfcRLJEUkK5UFGuStyCoXh2xsAMxg1qi7ZNC9eELe1BELBD",
  "key39": "2bhe2pLHudYeweCMyTjM1P9CaDf5vSz63PkTr6SH8LfZfeexrg6oUi2czTHC5MCGkmvME565ZRt1iQ5oTJG46dzS",
  "key40": "3kRR8Hpas2FJ3ARhzM1X67xkgPyV9HRk7NSyz47NQDmkJwLKLfyWspVkWJYgoD2Zx9U1sX358tN75Dd1zph5LuxL",
  "key41": "64ScVTnkTgdvatGZWiNLAaZHbD2kiNEvqAZ8iDcDvX5wnckxx1ER7EQkBictwyRDuS74pbkTEF46ZnCPrzCWBkak",
  "key42": "5ccXVQAg8hCQReFq7zXsZvRF3wbLYBH1mKcEABfaTfyfSgaN8xYuDW1NrCWqmPV4Ev3Y7frMQgdvDWiARMz5ZGPN",
  "key43": "6Af64A8hCaXdoAFqBgdWDveZ6rvYCvVPRADrv5rVkGDX9h9iP2h5KxXQS2Z9VFwbK41gocM31NTzKdfRgBtHVAR",
  "key44": "JXwBdVo3CRxiCvzjmyBFnfG2maHeDSoQPPPA9KFaTG8TZShGjioWTaZg1gTwzX6AuAJ3Fosw6tj9epxE3mTx36d",
  "key45": "2aXa8TLx8Ae4u7dUPACmuxeDqXhT7X3sn9mJj1KXae2gSABNbJCwScWootGESD55cMScnG8ysKdkcEYaVx8VC82Z",
  "key46": "5bmtYfk74G5Apd985CW3axp8eT4y6vs4S8U9jqYnS1taWxJ87qfeWaKECXHcenYXjpervmLJYCs7qkVaZKwHn32U",
  "key47": "4SnoVnxJcLcgyRoKs5AT75TEZEfiuTsCfrme1hiSxTGijsDQFbn8bcbvpDpbW96rfPYWihCPfFTptqHqLC8KiJEs",
  "key48": "3oSW4u2tm2p5dL3uYFgVzEjYPnxudHCvSsfdw891NYySEEpbzBbmhkCF8qUjwnpFzMjx7s39YnxFFDew6P6crxbT"
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
