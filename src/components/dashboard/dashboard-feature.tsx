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
    "25r14ujrM9rEgPZXeUvJvefi38R9ouqp8jBofnVPUmLAyws9kGZkBxaFMPSXzuASspy8Qc9eKpkPsLQpGzumrwwW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "498pocpvW2zFkyDprzUCdxoW8kRztrWfXz7JA9MeHXTsFWYwRJtBTkYyAyvTahjhv1jTaidgbKsT8TMGR8RraMTY",
  "key1": "3kJeng8Gg9qyjPXeiWCaiC5u4q9uLDkXaiTnkMJLjUghrWca4Anstd41fh1teVKY2D3Qu1ya8thivB4AjoWMvLQu",
  "key2": "X7KtCePbwFuuyoxrzZNtFb4u6PY8ECwPxJYXcMJewTK9JPkYKtNxCua5Vp45TTujut2nLSxQu67imPZa7fNtGSF",
  "key3": "NJhFVLSJ4ZAd14vN8ZdrHY9kgWcekEyPb6qUghA4e51Kaf3wcSYn4cRoQDpJrMxkDYKZSNDHY4JHewoXg9hkyLj",
  "key4": "2gNcem3QPe6KUcxQFA9RNzPemsSFz4TEeL6CkwXSZwXUpjw4DhtHrEiZoKrdqdMke2cFhHTrQfBHCHSfpjHRi1vd",
  "key5": "5pSH3Cj5JTSTj8AsfQ8oDq1nEoKEV3dCXF4HnWJboUGEuSx6qmkkP7tirvJ5F1NJ4vJ9exiWs2rX5PuijXscD8gU",
  "key6": "56T6h6EkQpQHaapBz5TeKDzLpHibpVvfTiWDRD9vWzJQ9ScdFYKeQYWgspEDNTEwTZhSvgvguKzghKp1995MCiMZ",
  "key7": "3o3XAMKWtFtV9kKAnkwd5GL8tk5UKTgAY8pBcRwDWDkVckz3nr13RSnRsuHcqS2d7XTDVuu7m9JLVK7S61EWkPB",
  "key8": "3cZ4AJMFVDp6QwwZYR6j2vLDvghAmYczpHdnhzhL21HonbG8WRTWB5nKsf1qg8YuFs2iNxMLQKyn2kmdr5ticzqf",
  "key9": "2QNaTHrQrs2d9jEyQGHQnDNZWFWyjYqhyURSA9ZouboBmXFzbjbJ5jn8MDJQj1v2QU4dexdGCx3dxMVgcfm65Mjw",
  "key10": "2a1HHaaeS6qN3zLQe95XLK65z3S2298GLeoyArP2xXjzU5h3moKqb1Get4qapGczrLabVUU7cPrzpePQpzEhHqM7",
  "key11": "2Z3tUdG2noK63iRyN9kZ5RCzN8Ufq98GYzctoQYNtVMuL57gm2zQFvFkERWN9ryThJwwG4LeXtuxGo5wmKL3ajQc",
  "key12": "Lhfvg68X2vCipP9WpSCu2Qk4AtuJWH2EtC4sCmJtDjsHjafxB1ZiNESK9d63PxS9eGS57pavgKBs8mKBXPJP41N",
  "key13": "H2r5E1baCs4hKbeD34evHuuwbBJxgrr1P19J5FDVXr4kxLsBdM236xFz2wxrrVv5takceG9UE7ToWtnC9zQYHUq",
  "key14": "2ZY41pqMMo5wFK4SxUN23Fk2xqQJLybAxLvjVAT7X37vHp7xfyRG8UY3f6tmNMNHZv1cHTNp2Zu3j3BHoSA5WmKh",
  "key15": "5Dkj3rvjuWA5SZUbzQRwUVrnv82EbxRmLov93d1hbCpRRkHsnPfysL392X1sCD3n66KYA7D4AY2L8tsAFzBWqvXs",
  "key16": "JFtNrrL21QjRH3SNfh9v9GSAntmfUbWkFM6Ev4NNyVAFxYeAp556XswCForpfC7WxP4YhCHRQwKdJQVDiDQuKNJ",
  "key17": "5H6zeeh3nXmSNDEsyEk5ZGL1drodXF2exNJfhKCUC8N2hDDvXQBV68sqbTR3PsWrEMtk9SQGBTMtn3eVxBbGcrYb",
  "key18": "2mooRLFE9R6hDkQLHBsNdmd8p3FR3aNUEJLVgcEzaNEwR2aHXPvCVQ9fy2nX1zdQip2UqHdobLNTnL4eiQbJWoAQ",
  "key19": "2egZyN7yjdYt8g8qD1q2pJsH6gQX17bBnCcXgAn5XqbnnYyXAhzszxp6JuNQdVeLhHDW78akuUcSxNHfzzHHXoGB",
  "key20": "3YczN2JaqxL8EMHeeFUkUGFNPZFeLnCqJk1KXpHK2RWS5qRWUNXuCwQuZUhd32RfnTgGQg3X9gP8rn4KMQNuPcmh",
  "key21": "KWTpRWLpeAzZBmUGsVZhTiGQZS9YPCDafSsQJLYDsy8PqYTzLvdaxEXP1ybxiYa46z3BXbCe4cENDWC4An7MjA7",
  "key22": "52MUFjoej6Lhcj1fTCEDNXUXjM89nk4dJKVuTKNXsFYhWSBz66LtfP3DvRLkmn8i4ZL1MN4t1GyT8MfqyL2mC9zh",
  "key23": "kuCcKDEvEkwaDRvxMi27FmHA5dnze7u1E1h1kkoZrsaie4qT13CiG4PoMXdDbqmbgCxoEL6NyGiiP2hJvmn7128",
  "key24": "4GN1dKwMt2G6oTcP6rh3XvfpaG4cawJr9pmzyzWmD54HRHEinuJ43P5e7SKD9mqw21Ykmw8R5ofic6KkGwc7KCuw",
  "key25": "V5M9T9gtwye5YS7ZNGQPSBkPmsP8pSyX9hRMNVzCzqqpwMkshQeihiEebezWKH6k9RCp2rAD97jEbhxZYrJ2g9i",
  "key26": "43ud2aTQ5kj4T1yKmU1bQEaYuDVqgsYLx8rYZtb2uwE6KgRyret52FSgaPzPGkzG5BGYesRFzW5vXWduixWnkVMv",
  "key27": "5WFazg2tzCRza1LMB5vea8hYKEuUsM2HVhhrv6Mo8zohPHktar2syMsSh37QMKpR4H6Bmi1a4y8cMizW7xVqb2s4",
  "key28": "51xVg4zzUhqkuQj6YopLunvPtWXJhqNUviHysg2Nk4sxNiuWCCndg4bBh2EazG2zXSKzyujHqoeBuQ6d6kAALFzh",
  "key29": "4g1juModnt62qbbrqdRRhzPDnEDPESyGMG5XinPBJxwbtCbA4EfH6LRkuFYvBXgE5kcud7UASJe7XL6D4ysRCHRG",
  "key30": "475LFKFi5YtYSD1VbKPAcvJvbqmeDmdqretZ3AkJfEFuMx8G7h2QDSSRfT92vqRBXUsGdm1vC7sdbCtrV3VSAUPw",
  "key31": "TMqfcWmuumxNLGYxjCdnoVgiF3xNx7ZB5uLTGpnhtDpbqxG3PeVvhrGAMsVPBShq6Kfw9nLXZU3RVEcKcaXpi7t",
  "key32": "2B2Rx3dLBKy62Lz63NQzUbSKCbeX8amgS8mbLqaqmkDQXU2hGCYaR5qC6E58grmYxoGU1GX9WpRFRRoXWbMQQ7fN",
  "key33": "5qPpRuwRijU2w2chUtpCzwLh5qoWZXrurgGNGvgnq4u7fmqNNme3t4RrCQAgtY4H4f1zczmLar38BpsFJRxqijEk",
  "key34": "58Sq5XmquRE3jeB5aFwFovu3SadjTXmtccaeiycjxx33ch5m4cE892xFdDnJGofoLCdWbT67LrS2nnQDVisXu563",
  "key35": "2DLRJj6A2gSqpy5se3XL8LBrr5a6tLrZ7MgBG8cd1AQaM4qbZoRdjDkFvQYDLBw5LxCd9A5v8kEJNg8wgBkxLDVr",
  "key36": "3NMd2iXXL4oWdHzXyAuXWmYooX39YDrn5FBjy5oEwxby8H5h3FrQ9YUwt8qWuXeyhYCsA1cZonU5jkea5k1C4c91",
  "key37": "5EX5vXGJSZ3vwFjwcTdEoxjATskEqu8axpVwW6QufPq23NdHrQocKXTwCy7n5X7nDAEfKoPiZY2yjsEW7MP7Lfp6",
  "key38": "4mEkU9W8F6nKmfa4ossddAZXbm8VJ5EdKVZCWMr7oxCeRkpLXjafdXH1HWSPtBzkJd2trNSA9yG1CsUFEh8fFbDS",
  "key39": "44G4pxRFwzP1TqFHshZ9UNAcdQFUCH7gVtQB1mwGrCPKaZMpWrGBjd5FivZwGKoYBmzuHpDywacdpt93z6qQwNWg",
  "key40": "3r1fjg36KdE9wFqWHh6qLh7zekeT75UPfUHiuEFBcLQdn9TFiGk1a9LFUZusFr7kD3M2p9cqTEUAvQ5VJvjTmd5v",
  "key41": "4BEJnrPbHo7iECXTk5QmBFofXSxmDQoLWay7sCihyTUmhWaTso97fhwQgh2UCTuJUxsoSG3jnVEyGCtkzQwSDhNA",
  "key42": "vjJ7pLKACVTcjrfjTDmiL376NHASduT4pn8PDEhbP5J5iFBXSZa2NpEPZDt3oczAnRUKLJW3PsYJfiGT57avsHc",
  "key43": "664KpN3UCZBsVhhJD1yD3YUkorXiTM99Aum6dAdexGCXfx72Q4ANrv8Q7WaquwqPqLvT9nADc3bPAPRrrMtGADez",
  "key44": "62UScpN1y5Ze8y6gWuEAnMJT6PixQWTtbGGSQynsX3XLiUY3HireMe8ErSKfYm2WptuHZLF1JzLdGLQ3cRA7ic1L",
  "key45": "4CmE9kURen1PJMhRgzvuPaNZ6PeQGDez5XqFBVY56cMYcEeGmfbc2eXWREKayHb37FukabC6qqCfUHJoA8mgaDij",
  "key46": "dikaziQ1qCmHx22p5gSDaSxjQaAnWmfU7yN94sV3metMyqJPDzWedwcqDhppPCpGebV3fx9BfGVRkMpVmuJhAzv",
  "key47": "3BfrA8Gw9sNzQJeXykSAFVwQbURULkySxq67CS4Y5zwRjFH87gB3cBZdRqL8yJBcTMdcvkNDLZSVzhffbCgPLRQR"
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
