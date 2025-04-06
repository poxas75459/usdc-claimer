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
    "5HoMmaoBGZQndNPV1L72Kp44LsnRXuCJ2JvqdEvw3KcS6rNa9GiTu9UE7iytRSJN24JR4kYKGmTXVCPcXhheg2ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TzYKbB1Rx5pZoVrKnC6gekchEunNkmXK6oSkbzph9pjsyYGju6A93d3s2ycdGEtHj8FLcVKty5e1Yt61Y2szrnW",
  "key1": "4CLA8St6fhkrv2eFJm3kt7nqzS6YqS1oc3KYhH9Z3YxfptF9yE5FpnM6hoTKE6AVVwAN6bHy7xvn9VSjYYd3F3fS",
  "key2": "5f6hmyg6L3BMRYpuP3tCWjZtDdzFQMfKqyX95fQUMfoMJeSKR5sRmNjK2AP7gJpiyCZVMJkRY5XfpWJ8ugffeyf9",
  "key3": "3sGGpfBNaFcmgrAN8aUtQVMbTya3MMW1kpj3a4WeWvpBcFR9hRhDpZCQTfbkTbpaj51nsi8fJXfVQhcw3WrD9amB",
  "key4": "2UV6iW1SX9z4b1hBtdoXYLkKTucdPDVVjMu38ydSrcjtDdAT1kkuUyyKnTRfUndjsBNg5hxGu13PGC7Dg6oMA2vo",
  "key5": "238RmC1FNUQ5gs83UqpsuMDzrZjBQtxsSyXouGpFrBV4Ueuvi14i2GvCQkSho9HxtALxyaMWPs6Z8jjgF2hs9MfD",
  "key6": "HZu4JfZtKjn5D57rnH9VPZ9oSs5qLm8oE5SXkMEAcghBFtotaUyJzvFXyXJaRoFqBVJUVcFV6ZuYzu6VCZNTLfr",
  "key7": "4ArjsBDbeAKZKkjF2g6HVd6fUbL5uZJW3nHU5WvqTQ3ZLi82Q8jCc99JDNEjbPkqKMM7xxoLMvivFEsnwd8ZXG93",
  "key8": "5PPRFuR2r4YYpY6ctG2Zt4Vi6LzPYgeRoAk8sApd6n9BD7jVUsxzco2aSNaXsrGrRDtqLQVTezZUob3rywvr14Na",
  "key9": "5KhoNyYit7xYWAqsdc5JaE8XRfauLgr4n9zj1mAnCHEvaQcyTnbCqaoop3hkaHNK13jQeUDYA9g8M6k6jja38WgD",
  "key10": "4T3NdEdyZHRKzg4TusZ1AAQ4dD4otu1gpebfgeH9nje2voauVk7kQWBCUzTKLpqNdxCf9BdoonqherFfCjRZeQXD",
  "key11": "54JfQyhncoha3s4Yeuztsgg3u5pWAHtL9AkDqyrrPfAFae6xRbyMJm2yR6TdE2SdEjZe7GWP4pBfFUvfHsaWFotW",
  "key12": "3KpLgE4dxLcWqDRta5f2kBo3yEQr5dsQ2bT8iHJEaERDCCnGqFrhd9ND9XgxkGWz9tT7rcQ8BTjk2Lv3xa816i26",
  "key13": "2dcisibp13bbW8fSgryGFxfERzULKDgaYHmSc6843FhjqaAJAHTiFxanZiKhuPiAPaD1JdpsjteL9DH3hAfQM9Gd",
  "key14": "2veREvaQFRgsxkpPZB5UXMn4vq5TpoJKTQhsj5FpVsyWrkLWbkcP4rU3KEtoNPid16Q7NoaphEQy984aGkGUzwZJ",
  "key15": "3sRV1HJbvdAddrqGFYUmLwX5QyMbVy4DqVnQgcQXtHHNzH6bHoP81jhG5MePKTuPnAfE2PonygxGRQA9MkkPE3xK",
  "key16": "5ZfCVXvnKaGmW9ePfsYcvfUURaXpYVyaRQNAatcnHi2n2sSDFxcqfLCpWYfgsZ6hapV4iUpVV7hNcJDSD2Gw9h5x",
  "key17": "4qJZnVC576F7Whni2jekQbLvcv3DcAtf9wtRqJKHbJ7biEwn9NyzeE3yzoNZbwyg8kbm9rc3D9zoPGLPPLAcaGTo",
  "key18": "3amPytx4BF3EnF4oMcjnYe1b4tbaHKJeqxcbmV1nfcUFVkFrRPgdHLduDyhLE6kmVzQ5SpmGccBsj3LanhJ8fMBM",
  "key19": "QpZgcLKp9nXqSC36Cs3rczV6npZSJJSTDAQBJHGbkA36g4puGKuFu4jmfGKDs18utVjpS3uemicgXMNcZZLv6Ea",
  "key20": "5Tg9fn7EyumbFx9oajqacZrCWGY9BLHKk2fx1nzXFqgnz6Jvswdv6Yng7gjmvdj7fcNbSkzaPsqcp4zDFQsmAvuD",
  "key21": "3Smo6fnxrZh9CeewYoJzdJcR9fwn9evCrDTnPvHoFZincMgYFbRj43HXgxKkBfUedbbR2yC9RZm2sa8GHnbUwJ71",
  "key22": "Aw6N47nJvDxxuhM5a6MGKSxTRKp3Eqyz5saip72C1vLmNoMzd7naPzww8XEKqFicJXKpfSNRbnyFvMdGEFVfkrP",
  "key23": "26JwCZk59MwwbrjiwZGCdhPNX7J635WKX72y3Ed4Q3rvxfutaCQ8m8QPfh8H9AJn8QNtq9GnwFNYb4casDJAd3B1",
  "key24": "bAD9UqTryEWgKhhtzVswGnAQkzVTqzhrD8QoevbiY7koem42Ssy6QFGAPMNzfSz4kf4naJHpzgJvSViNnBVabTf",
  "key25": "3NMjnLo7raLo8Ra2mLmxkspHNw6t4x9vwDbv57Lngd54Wa1DgRY59JLFFnNH7v1GZCbn1bm3VoCxdzT5KZN23WZQ",
  "key26": "4SRyUqzUr2wYY4dnSwHSB4GjDHL3ju5x7P5KmQexmfNY6eePuSdNi2H1gNbUZgwrLTWgNxesV7gqLJyK1mFHKBgi",
  "key27": "2taUuNb4ctajnxNMLMs9zbM4zA256nhQV5tb5noPnhw8G7y6Ti26k7LALJ524s3LKCRQzSr5NwwB4h5e524u5p8D",
  "key28": "2LW6uovJoXQUXbKVdaMiKztbn9fieTA3fFwUhuHPL7tRqFKPET9yfyyHG4qC8TkH4bZp9USrknctufLE2wTYpQoQ",
  "key29": "2nDPMsCWFVxdHbjiebDqABmrTL612TDvnYWpqtvkaGAGqpbVo1YgY8HMj631RVHZidUfeUQqA81MTvgQtg3tF6bd",
  "key30": "52u6gyDPi1VrKrtDEcSHAvLSmMtYL5GWLvpgCadu6aEw7MU1NPL7sE1cEyKoAC8geDvyhQDMH4L6jvLNevW4o3Rn",
  "key31": "2De9gFvzKLd9Fn9jbko9wjKxrxuRU9qFdsoaQxSksRCoonXFvWnkbmypZVvNDssP9zTm3i73kocEBwZSxj1J81QM",
  "key32": "314rRXJC9B4ZzoN7WC6y7oSBuzvS9GZh3q6htLB9QQd8mEf9aVpf9fhrMbfRXHC39mB9CMkezjQdnLTQ4fPaUXTR",
  "key33": "X1VLZfxEUvW4CBBAVMRBsZvBe2NJzqrte15gtNRsUjnHoupKMKNiSdTWYankyrRFatEJ8PAqeP4HcX3BhPBxKAs",
  "key34": "3EJvZnY6cZBup6XzEhhmKDoo1k2NreSAaij7ZXccb5pHpDtHVuCF2Sb1A7gKdj8YDPJGM1sUUwfjDeVBxomNbHfq",
  "key35": "2zuwEz2epSnBZ4svwVcaoxbpT6Tjzigi29J6qkqCdD44UuWCv6G8QUMiP3JaoMNMXjR9RUuy6xopR3TrmmhXu8Wo",
  "key36": "4mn5MU5tGNN4ghgUDqsYrbnT2zLQrhAFx3t18Nnwk2EBLuE513mNiNd3WKxEXTBwGU1hfBBLfQvobfR78AttGHum"
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
