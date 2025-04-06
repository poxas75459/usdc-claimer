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
    "2zid5azJoJFD8CahSEXi2BEvRdPuhAdVK4nFewTH2xsT1Ew6k63h2vKUJV9FwyNy5EbXAZrP27DQfQtYY6hqFnjm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fD8Y3UeBXYwDF3tygCcEedxpPRXp4s3ydyyDgpjrRjEw8vAyL5QMRddgGQzULFaxxvXGyLMG2N4DeAadLsaV2rR",
  "key1": "2LTwQ91g21skVLS55jeQMPg4YotpaEnLXRSQRoM8wgigryVePza7NRtsYRMqF7ZxAnkBVNNcEoBvUUVX3nQyACvV",
  "key2": "2L5irceYnGXF2KJxMFFo1qg4qZEVYFALkhpndJhL9QXre6eXFTvBktGXyNrWFEugDFYbL3FUjXUGcTv1CFCZ6tD8",
  "key3": "3PRGqzrzyjL9QhY6HaFBzhAPtFasqUuFPf8nqgXjqWQry4aFHoeAt1NMry2uBULmUEFp9od8JWm5y2JSwbn6GHU7",
  "key4": "56a1N8dHdNqpssp3rM6kPpTC9WjfmvCGbqMvqRToakBnr9h3iPgtaoYiCSHVTpAw68gxpDXEGLVm42dNzinN8XdC",
  "key5": "2qxp2Lw3QHf5hrPcNqQzcwW9Q3BzbvhJZ1GNAD2tTumzxFVFiXKKwQcb2VakGiyZB93kpJPxgKPhfTyR5RP7Et4G",
  "key6": "3sp3gSHFqV2TjT4PrtuEmZFcLtLsjCmaP3jdJfz2jCb8fSQwFfmCSVy4ezFUDVKuK6yaAxKgFagiTaw5QCo1imid",
  "key7": "2N4p7JxGVmcrqV2QdQVRusrwSSwbpnSHZQwjFah4sWt8Ku1iC8dSjm1sT6YPMKkbYCQ9SSiS9vtsbmuFzQJPqNfh",
  "key8": "3AFUUC1SALcDc3HE5rNS4oVELhUJLgyJhEXhUNp3oiPvRMnpfCbDYi1CuJ6VaZCBVPvJXzbvW8dT6QBm2ee5oeMD",
  "key9": "5Q3kTBJHjDakKrH2MhjoBi5vWPoHCQFbMDo46zY66PFrTJBgvRL9chhWdXMfwDK6iQTejzRv8mfYG3MEPaHoXGpu",
  "key10": "3hrsN85zbBHHybgQnpHVLwJuxvdjkNtoUB5cgAETZhxMK8N2WymW1Rxc8kPv886Zhtpmg77HGozcnshEkbEjx5i9",
  "key11": "3TBiDKxZnjGtYSrHzt5wE4d2CCsmZqH6ywdxvATRue88iiaXrbtD2SiNivsmTYtgS3TS7woQkkyZQYrGUPus7cRV",
  "key12": "4jxpibBa2N2DFPLc7L9xAf4H6nego7191EzRajV2R6chbb4AtrvYq6rAkCqGz8gUbswM91i3ShJybRU9MqmU2y45",
  "key13": "3vcmxgfwGgt1H9n9GCoQPMD5HP7ezn7AxD4oNqehHEhVCs4K6gPxmay2MtoBSHgeayz5fbzxQm2hMDXVx2U6REAo",
  "key14": "64PaqnE9J2twUzG48JiWJsU4ikf5jMmBH46zCA9tsvZ2Kwi93MBdKYWLkn2V6LKCD3Xg7LUJyNDZjMHUgjCu4t9z",
  "key15": "3bgNo2pyfbmaMbu9ZPsa8iMFdxsuAq8dgL3YFCFmSHkLdsTGhvfzkXCy65f7K1Fu6fjTnsrvwFpaq8aQX5osqXrn",
  "key16": "4SBLEFbPUybKkqbz5Zb93gLBVoojiz8ACv42oX71jwAMxYv4jf2EQLhvFKnH8Fg1SQYvfubYjxSVPzd5M9LwnJp6",
  "key17": "3Z2fmrT99TCwx97mRprFDiQb6UskeQ6kf5NFVfDxTuLEAz4EcX7asRJ4GwRzUnVfBMYFL1qAWYQ1yP4WffW3Fqsk",
  "key18": "G8UL4LHboWvcLCt9W1yJ9BrxHErrfXC9HGFpiVE154bDG8AjCyCX9GinBNAowNhv3tDzJjqu1eepRNUkYFp9VMn",
  "key19": "2L7ouyiXaStkhZa6Cfez7bNPo6BW5shj3X6YzVb9CNjzYEUoB2LnmpnT3oHrinY9FQoVXnJBxb56otYRabho5YZK",
  "key20": "3zft87NZ9RxsDDbnykXS6Vxem4574N7vbpWWN4tEZkn4DqVhUkHm3XwdTw88QXMMqPVh8jEAd2cDPRnVXKTPGmRZ",
  "key21": "3JJWDLN6MDnMkJbv1mdQCvU8g2syJCnxaeUHp6YtC4r7MyoiPLcGrzR98WV6LAdy9LzcYDC1997ogL1zoc3C4TGp",
  "key22": "5SzETg34vFMKB2w8D4nKJcAAoHgQzF2PQGmFt6TAX4YkfXNSUPZLs94aGeW2J2dSRyzexKuvMy9yq7aF1EZJJEZa",
  "key23": "2oEXYgkFqxN2m5Nf49e8rGKWhUiL8nKEhKWcZofgLXUrKv5TQMee5XqopFhnLVYdQRM5Haoig4qpMDnJRrT1u1pq",
  "key24": "2t1qsWtvFbS6ZLEPkcapSoJqjUcMJEsfpnsFbUK8RvXaPTe3bNBJXzCCZxjUwUgzTPHXWvxVuwPKL2DYgA6C25HE",
  "key25": "29RissUQERPRC1uVBUyLvmFqzH4YCj4YLgBtLBzdWQ3tRzVAPV1u5hWgHmX9qBnmp4bxLUVcusXz5N59a5T5pPKh",
  "key26": "3azqnZei6tz2e6VeNgBrGTtZEe7YJnoD8Mo2j1Y9yHcRCXzYiQwkxA2fkTSZqac3LF4srzGJ6ew3WQeg8iHQaNoU",
  "key27": "3rUZDbagAyWiJyzChmCezx3Pvp1TxpC1882EiraCi8fXBGLFstV97AnoALDrQYXE3FyAgqquZPPLN366GnTaEkCt",
  "key28": "7uHqLaaS3zTuEt57EJSqfYNZaFCSbbEwcKUvWX4mvw5z5NaoyUh5cHuXSaaaT31TQYzg2SDv9sk9Z9MAiSSBSKM",
  "key29": "vrbgVN5TgUZRjbN6hVcBn4g7e9S8fkaHswqFxnpLctEAE6ahNhjVWSnkGUE8FGrCvWzFRiUK1qbPxVapx5ssFuh",
  "key30": "4tDZc7FDzKNk3msLpC8CT6bDw72QdUHKV8RqSZeFkoafWMhpiddYEVjTQreVgoPtVLqLVpYTi9J7Vy3ozAzSK8yJ",
  "key31": "3gjQyEqcSzqk9VgJVf44qJ1VKtqtnWo6jeQf2ABqoVQtmGAweizKQJuwN2GZWsRAE28TxpUfHEfX7FiZZjNU1VWQ",
  "key32": "3N7dwvDZT49AvsP9W4yvDtUcyP145z6kkncp9Yd8ZMNh5zjdFJvDftGbZYUHwJgtXojvAkPVcPtG7kswLjQkATNR",
  "key33": "4ibhH2zRgXQUa1RsJQsWNjXRSSgEyCQ6weXFrc9sRxC7KaAjaG9WX7ZHf96Lxm9oCrVNaVTo8ZvUp5wxRygnfbeL",
  "key34": "2mmA21HqdinFKcHeuBt1qiD8wD9hTLMW81ufXcFiiSYLohoNLgkGdK9wz5GEyvT4qegYPqGQdBH4yTjgzA2KMxk6",
  "key35": "7F3gtS7bYB7Dwvim2WaYEuesJMuTy6JeZG8uDBkNgENav8n2zEEThrJvMhPnYdbPGwT8ZDpbdg5QC3FjTtbmcey",
  "key36": "2rvm2TpbHozppnLRfUPSxhFemKymmGpGTSeq6HxMv26YKH9QRtethDFooStGhUEyXGhrPuChWdXRMwoQaExf2whA",
  "key37": "mN1ZohEvQX6vJ9TpBVgjNLbZzv78ph2F59jTFEcbkPYgiahByEHxvi5jV4F3s5WNNMdux38ETxCUSyuW4mSdVhs",
  "key38": "66gnwHchrrJzmBmcvYUjkwnnLXxUMWDLsBzteV8wABVcaz4LWx4b8umxLQkZiXsJmbwoTTTfz3Gq7ELVmfKpxUjs",
  "key39": "33f9DYkNqJVkRCzRTbFbadpPYtohdJbFNLREffAbYLVJsUtaY33gXc68XPr9c3mA9czx5kn4ARWXovgj5yhbdqGM",
  "key40": "HBx3GvrRTpVqV2dh3AeU1ueiSnTmuhps2t4agsjBtqpceds2xtUS3K72BNfhoJeaWtFn56hmSSRLq2A3CP5iV4v",
  "key41": "64RU7vrPfERQqiaAJkwiE7qoEmN6WdpUjKi5EAJvmQfNSjktaGAGQf1w7RyoKaHomqmCHZBqH3wc9WWVGtaE3mFH",
  "key42": "5JyQZsRCTi2ifYW4kPYWn2Y637CP8t1BeqbMn5UQDvvyVwsSPXDcZunNLPHCUCQAnmaVdoaHYJEb8bTcnZu2BXy2",
  "key43": "4SPt1XrwiwmEsRQScidgneYU73NdMoGpuK5CwXh8sxwbbfut1rNwg3yiep2kpS2rHJN52qpTB2irmisUTooevcoF",
  "key44": "orZYAaxKUXuy9NtLmHxCiVMJCSfKtojoPg5YwZGBitSyZXKEsQbLtMkcUGzvZ3ScX9GSnsed1RQRFtW491Y9on1",
  "key45": "5RoimD9hxcHLFGeZbCdd312njVNwfMYmJQDFcenKVg4VaC6uCALA8tWagnmq4nR6JUtJMWTVeTzTa8UuyFVoc6rU",
  "key46": "5tpBLzqKTr9HxaH4oQgrgAUZA2Mcg4sasfMU7KZWxDVcTLgEH1hMXmPZ3FSmjR3XjHts3N47edSYqguAfCH8ZAz9",
  "key47": "5kbcUP9n23WqbJ4LjAaKRRZwqv8wxPKKkYs8NwBmvyLia4mbGxfLQS838TvE9vka7ugoemEewkEgDoWtVytQJNxD",
  "key48": "gc3Py2jAcouh3xbZgAtMJiqDmJ3xUZNRYvXKGUpvqyrbgt1maoYZHv249G1pXmAYr8BHdgkfokcZxN3mBqV5jiK"
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
