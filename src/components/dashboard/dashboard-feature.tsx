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
    "5KhpLR6ibaQBPb9nxyN9PDUFrS6CL6434tJrHUk2JT5q6crfdfH8C6dpMrq34Xrxfe35ifySn55Ypf2rQ6p4sEUo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qn9ndHyFazs6dsAaUtPgor9Zkdia38Ub3tGw6tEBfG1rYQfERACpQ91EXYsEK5ncPVArUwU7JzQLzXBBDmLkx77",
  "key1": "64pLqzCt8ps7Lp12t7uraWyXwj6Li2asPSWVraHFnr7XUU9UpxxFLFaZ4yQyZnqhikJdLHDrd8RcAejd4nxyPmQQ",
  "key2": "5qrZyzjhvWsf1zJMdafpMwpG8Aw1kjQkndrdHJfras4RkHQPM3FDgucCRQqWWvVANr7mGzZ5wiDKsq48o7j7U2zJ",
  "key3": "2dqhhNM6crFXWtWVAfE1pcWyGvYJsq29W2pMmHcknUm9abTRDwvmjAz7CmH1PifZNimMFuDAH5CtzV8jeqxTdsvx",
  "key4": "3T64tSg6FNAtHPtbPitPFGuExv6nygZTJ9gmbWB4Lm88DypkuLsEZEgdyUAwJfPfs8NrrNSYcCoVRNd5mmP965D",
  "key5": "5r9j5LAyMkW7dk5YuZdTp6aWzyCLFWN2v9qzb2g4EYdqX949sbNKGmaskmECD46spXg13GXPkHVcCk9NoQ5c9ZYN",
  "key6": "3WUuoK4BkzmvV3ce9hH7X4NsqQzRrXdyYMVN5qH3ox4hRD7QJT7kByopfzPxyrgAr4un9KXQdKsQphohL6XbbYY4",
  "key7": "5JfiJT4C4fMdnjdNZq6RvCrAXC6viPKYL3M1G4yCH4CiuV5jWzL4oMpdYoYYp5di4bHtLuuNRsWewqVKdudFC8Ji",
  "key8": "2xEdrJ43UNcAUfjJ3TFK8cbhr9rp9YGtBQ2FZ6Zvg9d1H5GSPvYqpuVq3pWvmxJmJoviWWD73Pd33Prdceun6s3k",
  "key9": "CwsX6WTXhzcb395EcNhCi56LsFJP6j5q6zLzgfqJdnmy47d7sGaXZAVLYXY68FEyGCttpKxzLeTv8xEbSKYAEdV",
  "key10": "49cEFWsHbyBcYzRFED9KceM1sWDc95d7mGHnWhHXaBiaQXtzZLZjjWXBbTvryjmuUPk5m22iKJWbcjqbUwnCix3V",
  "key11": "55xzFWE9NJtEFfZeTwUy7nbZaeVS5BCd6RY9W6jeywDuUQPbEjpHJoXEka5yaj2zHGth8Z6mJRysrDBLDZkUu4Hi",
  "key12": "4dLUKnBvRkpkmV92MEXiqXMarZusGjkYc6cLNYeKGob8o8uMDiXyt8fsSkbujZY639KECWqRpn4ZKCu5i7nR4nXE",
  "key13": "2XwW7KdgL9JPEXW9SWJ3Pxe9wsf3CarzMbwSBKMHbdtDGySok5PKZQMKHSjXto4wvRSSLZ2KetCZroxzqcuFRuEF",
  "key14": "eaHcSzZHCs9ubJ3g6M6mjAkybZ4rc9eo1JdCR4j2eYMMae8iHujbZmLibrRCRHNwnQCdb1VW5Hehmaq6ffdatUa",
  "key15": "XGnKDbHEw4tKriq1WZqr8TtT7bX2D1rhJweywLFfP2nAJoPh2eCG5zpsKHEuWvWVnS3fzQ4u4d4XHcLZDVq1ag4",
  "key16": "2zbCRYr5xa6v4LQbL6LKkUpDCXQJxqXtwMZ67S27CMU5utG5XGRpnB11Q5LF6ewenz3o5S6gzAKxyB6zNUszYEUC",
  "key17": "3Hx59UygCBYieJgdGxLXWLcXuk1X5NSEVqBnwf4r3f7emPsPoam6vorkKwugfBepKTWKPueGAHrUEpGT2d4Si5jE",
  "key18": "6F8rKSyNWkzoABCw3R9cJBx3tZmKVK1BkDoBF74iNgd6EjLRGp4gGwLYynoan1Uf1Qi7Yp68J6phyFin71fc9MN",
  "key19": "32Y6jGakGqpf9DTx1s4vLoSXaonxCyAbXAoUCsR8VFms97peWktEgzKZDswi1SDbvao4T71F78xrvwhs7URtpU7N",
  "key20": "36SMTeiC5hug9joAw48ictiMAXQWB6ik5hWgwVs5Fy3Lp5hWNGVSbyZsugPi9aj3Txwp4WQaHFBbJPyGjEViW5K1",
  "key21": "2WfkXAdBgV3dL4nr32RFbT6oEmHhb2p2evLyMxxKAiNeG54FsC5avpXzBGFaTQYmTuj1kbY1eF8yNE2JvJUFdVb7",
  "key22": "46pyYNwJbLCvC2uDVepxAToqDH3kW2afrnXsqrMGtYnwZhAh4djraqTGd7KgKzc1TrNkJzki5NbzSfAeZrnS4akt",
  "key23": "3gCxPCG5Gr7Hc6PogtASQqXtpWX47sJTvukaHXYVULxQx3TuQnapcCEbvQFTrkEUXLJvr4WyuDcpf5bQz1wDSiDP",
  "key24": "4cSkX8HF2xQeWhe4KkHXd5m1wqEcBs5bbRNBHd51S7gxFBAmzoERudoxAiSzmuMwYm3aBCUGTXmALAALxize4juH",
  "key25": "2RpMZZW13VnqsbgxBFtQEDaP9d7BANMqGGL5Wh3rUEqJUEEHDgPuobaQYYFmHxMyHVfZ4Afm86Hawoe5PGVxwZLu",
  "key26": "5NiekZB7eVyr2aLHz8aYWFCN8UfEPnYLRzuAt3c8Z15iZ7wneamLjSTqRVi89D7CJWoryTwgTw1eKkYjH7iBrh74",
  "key27": "374DDsjTzJRZkhAFRf38pRTmurAtrDtN2hXogNfGw6CQFuH65QresMm71xUEpJsuYh46zEAkFaLgfrmWdfgNqVg3",
  "key28": "5kkBYamy9skvRGV9R2tFekG2rzgejevpswcPML4D8onP9AK9Toxb9YwuoeCqRT1r1Wmqm3hyAKs2eaWe2eg4o5mo",
  "key29": "4uyaxChy1YBpoK2u51vP5jn3Dw3f3Am6hBzCEHo7aVuR2A9VLGvwAGV2ZjykYPpBVvqbzu4TDnwdsQiG7q5F7N93",
  "key30": "L2DrNF3CPnittK4i269RPRxZY9USYdxgp6ht3X5veht2Lai8FgyyRLX4gGvfc5UFN1gLx4767JbhQQSsvwfXwiT"
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
