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
    "48ujXFuVErcUtF8BCA3JYiFx33Um99gQ3iYDTYr6MPagfPuZBiMzcUiyNXsXf2G1sWzkaqqpPZJdazaQSiYgp6xq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21maRuwaVtaJi5143nW3sR5bqPbP3h59UxP78aCvUYjo6NmkKrWJZLfKjDFekMrAeTj5tKQxKF2pBFqQMhJxQVza",
  "key1": "5c3oBG5an7X6PeqvCcTHThj8ujD95yo11MueahjGoknXzgVDL2RwUNjyYTgy9nw4Ye6Yrm1Ja43pbmTE2FeqweVr",
  "key2": "5eABvaDZJ31fpYMW3pxv4HNpuJnbQRt6KJ3vV5UJwHmBjLi9K4JxWk8m5BVz1XEiFqe5PnUsnezWuivxaK4pe9W9",
  "key3": "4DUsfxWA8xdvFokh7yZjahrnuVqHhxAFzgqTaNtVeQk9QddPrJ8n8X826J1z4DBtmLoMU2pUd67Gkewy2jtNfKyB",
  "key4": "3cQEdKrVW29kNRkzueDsyqPCPJcirhL7VA7jAq2ifegwrnLnLPshi4RZvsQ3ZNcuKYAwFBrXDy56SLSJeANMHwG4",
  "key5": "3uYZNnTC7xSjZkVu59zcT8F8E89yMNGsRaYFJ1GXUbCc3QFNDk4RAq19d8oHBU3wLK8uUw5HFQATFusDFKUSWCeG",
  "key6": "4jZLzUCovwKvepnQaQrxDwHXT2wjBjcxerMqqJPk2S2NN5m9NzKyQw1KdB7XPufg4jY7NVuSUPGSRUMVwCktoZPn",
  "key7": "4wzyuBYRALkJckbjuhDEJRkJjVN18HLKqPzcjkPnNdxCEcdiuVkLB7ktg8S5caBsEaEixRN3taZbZXw2fgeSVtPX",
  "key8": "3jUK8DkP2NUE9vaZ9uXYxjgwcj3AvgDmBYkuXCzntP3GR1KYP6T7rSNsAZ3i9giVyPfEb7dSU3Vk82LQG6wfCgSV",
  "key9": "2Yjp9E5M6LuL2pb843bmdYUC5PYpBnVhm32urmCSzir873XgpCZPnFRGUcpU2HMbBTVieZ9ZVeu7jwtpHngZrdyr",
  "key10": "dRRhEi92P12ydJAf4o4FH3khW8Tb82YF976TcshxSaXaCVNTRmc7penrEfmvXsTrbxGiahgyebmzPVC8V1vcP6o",
  "key11": "KiwMDkxhEbrRQV5vq58vjYTLuqz9SgqbivCmSTGZCLp6rsdBeu57YyntmL96GiRJ2dXVJ9icGzh9d1X3pkzHPbP",
  "key12": "3SgZZzePcytVAxACvUn4ghP7Gs26psXYM4U7JY4UaeWnBn5dFbx272de2aobwiV4NEnEwzUb9aQk3HvETdCUiAsu",
  "key13": "28tjzADVdhc57NVh2pCz5wjUuXJYgegHnCVNFq6jp1LmNtdwzV5H1CwhvXRKFmPd9TwNevsqZJhFsSuHWnPiSqLu",
  "key14": "3CWYFjhP8FUS64E8P6LBWruJeWU5HLCb7EiLfvG5BeDEjZSNzpt9zU1KqbLWE5sUvCHa4jSx3RxNy3tqjoQyVZj5",
  "key15": "5AFTPuPSMor8As9X97BNXEtC9tuMrCiNU576oypUGSVWer3AnXkhJcmp5ANpU2WFeikThEMY6XKeJ8x5CpnFiJ4H",
  "key16": "tGZJjwvmdFaizWjFesfCAVEUiAVBnhcmrsCi3PoDbgiS1YdMt7qgfaqP5oozhXQadS41W3wzguU58DQveC7LRA4",
  "key17": "5M39z1tzs37aetr4K6SQ9k7ktFPXUr556HDUrmuZjTUahFJGiowG6nJEh26tWH7iYVLuchbMnV59QyyMVm8E2ABY",
  "key18": "5fi9HNTRJ7xW9H2mf7MBSoXeqf9DqpfBD29n5bo4eGSjHnjQvnmwFXjDByyAyTowZhHdZVYN5S244jWDpt3NLUtq",
  "key19": "5TeZUE32XuUK8uFxYfen6dQDD18gQZ3grCLWPzvzDrkTxfDy61NtdcKcmgyMzDWwQZfvtCvPn4KGo9vc2TuFojiZ",
  "key20": "jQVUunsrae66twrue9AezsNbK1WkzQqRY2eqzvboUjeUn8LTCRNbLtj6RhHcaduep6FwhCadsonmC4eYRpQywTQ",
  "key21": "3osiBAV1rUGkLpguSVwMPjmJmE51b6EdoDcNvYzL798cX4Mwbi7rH8fCpoCaYibrH1NS3wt7wEVMAZ8ZQEsDX9UB",
  "key22": "4AqC64W6Xb1UQv8NZv9fNHh19bfDTDFvMEQ7vqndTBR1rrTUF1pDWLuJMXsiSqELuRrCRVF5GJFQ1xF2Dn4Un41z",
  "key23": "5N3ZQFksezr3GoViCzugvSWigYsULXfkgzgySNKqdXireP8663XVTtpToyMvds6JiYZxkP36xepGHicTZC18NC8P",
  "key24": "39qm7MTU2MzCxZm9rt62viEiukfDkogUNWDpM2JmxCruNQDG5bJSkMumK8uEkQjJMe3JcYWZgPb1LBqmH5PahF3U",
  "key25": "5k4JxopbZeHrGenWkuzYoteW5x3wm1617shEVmxezfsHb6ScMUACrDARrshaZ7tXZtyk8qvAg55vcqLGAv4i7ZZi",
  "key26": "4Nij1PQADHjk3itugguTnsiauPErWgXnMiHZZXRAjZnqFBFT2m8AF5okKr7sv2oX5YG84RV3jACRYUDPDdngXSbp",
  "key27": "2FZWdCFZQp8bCKe796jyz91CDzoV6HgyTsprh8XHmwsyqBDBJ8hcNdfvYCyUYgUQRUq35d4iDUFCKdDUbTZxLiow",
  "key28": "2TDKp5YBBaFvsK5GV5bfpbYfvAzfdGY6jviWnU49fzmtWzK2gtcfXN4axjfPFsqsXRUvBdX7utEouTWYuEFGCwPR",
  "key29": "2PptnR1rrxbVzYBj8ZZWxoXUZQ1DQv5tZLtKjVpPsDRqJD1Jsbbby6c8zY8DBLFDaKEiea4wYWxeGDX7tE43WYQb",
  "key30": "z8C5JjeG9dQzzET1fB31qNVpwdoDGbDf5a5oVWgf38rgQ7f7TPYRoLNQSGfzADpXL1cmt2GW7gDjLbFErduVUKu",
  "key31": "5XkK9HGdQUD7fzpa7Wcdd3o7i8kBS3umPNtPfNuir1SrMHo28RKLdPbD3wbz9omRnXzgG99mrGFB2J2Pt8i97o2i",
  "key32": "3dpLT6vPSpB5JVPwFDs1j3zJSqek2gYJpePLra7TrdfYaY9J35mUjY3QGjhZCswmXkz6ypepvyek73aFYHBXxgwn",
  "key33": "5FV7u6fV8MGsLonZir16PmXzkPSxwkFCwBBDADAZfsZidxD1kc8Pw8Z9QR3TB8Wpvt4xKs1a2cwcQ2w19teNLpXf",
  "key34": "2qmjTDW9JL8Zm3SSRZSkdDzoieDt9oHKb1KKZPRPitgNu5eK9XVMs89a4VofWND6g9Akm4W6szYbLV6f3XFCT1iD",
  "key35": "3zyoHjaM1H57RQvipTeVzXBPjjygEqhoMfVpF1o5Gpy9sudLxjmLHwGGcRGei2CYBEs4Dn9QX6KfwTtBSpMze7C7",
  "key36": "yxJHEVHo4aimU1QVDWsriJNydpBmpQR6n9pXG944Sg7HVU1JHFcQCPhmDjJjm9woh9ma9x3MTp4RANbDYcummEe",
  "key37": "4iLnriKUeDJrSNPeKRYTj5UiMQsaX8zmVxotiJpqEak9AGcyfkZK6aRu29magYoVrxNMzFeD4Pw2LHRu1WUYWM4R",
  "key38": "23UzWyAWqz4mgsryQiQUE74KRPbSzTYqbeaudBVBwxCYVAf2W7Y2DpKSdE1EcZjqQpXrBExerq6XxG75f9WAEYLq",
  "key39": "2AcJfinWnYLgPYjzrDdEdKbfpGWRkewehKRHaPESiKtVprZhjcJifsV8FzM9vRF3W2CwU358jYGym62d4xR4P3U8",
  "key40": "5rqtAnLyVLmDuyxizSvvr2Z6rtVFEbczA4kfLiUa78fjXYuc1XmBab5zCKhbVZtnJzaSiuruH9FeWB162YsL79Y4",
  "key41": "3DmBWzyK4KcBDM6Uqef1NkC6x7bMBMhVfd88UbSv24BSKnJ3tciCrATMSMseKSjoREUUbc6kXbzykzXMFSogKhtf",
  "key42": "61WbNvTSsXsGuGZdt5WMyR8WJBUbvKueVUxaQCT8Ehw8umpTwpYNQ2uh6CGRb6nqqyZfHBcyybmiVtY91McSW3fW",
  "key43": "4A8qcCXcWBEWFDRzCYofDvJ33Y11RRfFU4KBqyWXAu7Q14dXqQNvJi5Dw8AxSdg3DDxAzt7ckP9t9Eo1UAW7iUuq",
  "key44": "5bCkserC9gyHTJzgpEvN1kdvqGyPyWVryB2gW4DUUNrfNxnkqKAcxpxxRnv8m4yizP71TBGifyjz22sdj86eu1Qo",
  "key45": "3ukbRwDLSGQbyvhsuHYs1X1nQTso49gb3ZQVVCARXP8v33xCmAsHH8ZehENXfAhgqJtS2MU1CnmifUXUA6p33kd6",
  "key46": "45AUUWrycv1ZYp25UKTgqJP1CDvQMhuX9KrN9H3WLCpCD9T4YkLXjAZGtb2kMtaQj3SEspn82DLT1p3hrRq5w1A5",
  "key47": "4j8F9fzLMn7Q75MeWA2vWJp1qXmQAZXGVAGtLvsLEwPKydKCLaWy65yMJkDtXYmJiHTWJ2XNgvxRMcdcyojVXecP",
  "key48": "2vExrB8wxwtVAZFrTRnp2kn6U8SoXBFBKHpb9edrqE9Ngkze4whQE5oJvVYDnp4MwjCtGdf4Szzd5pVqJHiuXF5y"
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
