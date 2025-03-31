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
    "5ff1ZaodqSGCwQ6Xmr5GG6Pz9ARyCjJA74eoJCzDGsqvySsiYTJ8xWokwtfoNASgee3Y2xcCr9BRtP6ezbQPUp3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kLm6HYkfNE4GK7FQEChyot9yqDro9jFvVAFjxnkiQEPfLQanoXLGDNWNFmULYAQ3ATAtSTutH6mhMTYEBSAuLCF",
  "key1": "4NhP2g8DJXJp755H7ZFCBjLRbQPV9uWrchubZTTK4fJCb8TECzgeqhqgQtATxj3kMSw4cStvGata3dckGoNZuRpb",
  "key2": "2cdDfhP7vEXdmotZa9znHup18VZRx1hwFZs3ppqgapaszWXEEUtkRf5cPNyETcpCqd1BYG8KWsqJb24KJm1BtFDf",
  "key3": "SLbMtzsj8uM2iYg2HvL1AtgGPaYVXC7v1z7zN5aoRAiDrV2zxQ2RA3u9TWyqTdKU4J5xueKPMZhKiQhiwp9aNqR",
  "key4": "TDM8wua4ofekngHPdjGyMEyQwVhZh2zhJJtUND3NErbzpRas4CgdcyAJBC5taXfgLkHdewQHZe34QRtUDuJQn8z",
  "key5": "qcvJ9PNztvnepwCMNtCwQiPTEBsmPs49ktkX6DABkWzoCnDkXA6cc68tiDfPhiU1Yu9cV25Nz8mdHbBd8tjUhP1",
  "key6": "xffACH6E4kjkRxSusv2dTfBHXhWGuCZD2EVyASCKEqqk5ay14FH68yZqJFkuZ9mgRbVvgxxVsVhTKbXa9TXcsFa",
  "key7": "4kqigzqq6VoqgiRmWNWuYVEbuBtgUphvr3fWupbxfJYhejLsSwJcwGe1WuU5hVdv5zhUmKCM6cE3wFAn2UqsrRyR",
  "key8": "4iArovCSEbVC4dp9QZNdBTXzKkMvFv61tpB2arWPH8Pqrp76FsYgTZU167xBSWVQ3AVBrdmMderDdSb7ZxbiR93d",
  "key9": "61ow17bDMXvFAQhwLCmehaiCg6YoDDyZx1D9dsqkGybK4dKATPw13ATU1c8yLPi74za2o5JdBuq6Ua1g1os56wUx",
  "key10": "5rp7zbTB8qhAdfdG5J71tqUDsmxAuNm48gTfgSYM8nhLJnW815jmpFPzEuFCCtggQjRKGJYK48S4GVkZDExL9hCF",
  "key11": "2TiDwS6zpH5tYGJrBo8PSVeMtksbryZ1xD1PayZp2NMs1if13uUbfMY4WxZnNuDEAZp2GTThkK6wC28hYqjRm9P3",
  "key12": "3XLxPpTrCeyVtthWimCkQLFYLLPPReQrmh1Mqzss29hZNjisYq4MAfhbH2jPREB1ypLiFPFcv44tKuXxChJ4JWrF",
  "key13": "5pSEAQ7eAF1rEdwXtWyXubi3G7WNbt5SpwHtTRpQa7pn1Kdt6jCW5dEFaQ5Cr9jk7vKWK7Ek76LccF3mHYjYfREv",
  "key14": "598m5tqYr87xiwz8zjeekhiVfETizmxDrX8VCuffPKfmvgZioVBNDwd3xsuWrSVUq4gRVtUg6hv5EgqnZ8gxF42d",
  "key15": "3AytKNV91VHuqAncaJ1VP42LbEWw5STyfUw2dqi89o51YoATebWn3RTpNNmDrVRjs48m9z1K6JMVuPvzEXL7Dv22",
  "key16": "51giUvDmFcfW3qC1jokBVxs4F8oNT5vKYQp1x3HGsDM8sfZHzZpLh7Pgw8nLajdBLaihhGLTr6MXHNnWmqN3eLYR",
  "key17": "otyZEbJWuF24WViNRgvHxsEDvtwefk69D2bjnjDrShb9bWa5wXhmvzkwsQggRzT3pZpPQz92MEymZhHHFyZdQNy",
  "key18": "5jcXLHi4F2CLbw3GzYV8Yne5hEw8sJXCmawnsMgzc4SzTqKpdjFFgk2iTYE8iTVupUv7PM9cxttAfqKyRFcWBThn",
  "key19": "242djrCPjFCg78Yn5mixR5LzwHaPJXYxWSHNYkfwEHtLEhtbiyQtgAxtrm73BoF799kBqddj3Bmiu7gr7Kn1Tsd5",
  "key20": "4sGPSJ6VojquekgWMiatFFusjVsiAfdRnLEGeDbBa3kEiYpwhk7YG4c7iT3jvjqBkJaQkTtXFm2s4DHKXbJrqKmJ",
  "key21": "3Xqmca9WETU74zCXdT97sYuUmgveWhwnttxdEpbh8qPPu4fEM6iJuJ5H55TNed6zyyRGMm9cmbm8ngC37xYGSstE",
  "key22": "2fNgR8u4VRUKBBaaQQw7Zkrz1a6MyRmKdfTxMHV5SbfLhoK6xQMUXR65G4Zh3zCAjWpQca7PvHUYELyiCffznEgw",
  "key23": "qUBrZnk6rshfTDMTSFPEY9bYgBb9oD22h8aNxPG5ztaBgR3fQAyFULWxwQRfYFnhsVQ9szMN7EYHPFqDpNhjfhY",
  "key24": "5eCH99pJ1QSBDUy6LeQbETDFg1GpejA2BDCtL2me3Bzhrro4Lqqn4h9U8rP7aih1NM1F2D7MDGu2FPh1G2rwSawE",
  "key25": "4siUUhDW2YWqDGWiCPUKyRacXeX5G5mFvuKKBvFiV7BWUHWL8bhg7ybQ9Mbfq52ivyekpcEqLYcAes8bSyZ2G26C",
  "key26": "3kfQWNBnJXFv4byUnxEmW8VZFZdNekEgCi3a4hmuUifenPzopPVtqQNuKmVXiaNgZ4PEok565EP5nAFYn7jcfUfh",
  "key27": "6s5d4LZcq56h5oxNACBsRhzpknAdfWyrZAxrMFHwhFtrf45UrMwuMBoYcF5abkypvw8hHjX1NSgyoUCS4WfCHZV",
  "key28": "56tGapQFiR54zGXimqC4SiYTuXDqrumr65PjRJB9Gi2ahxjZQmMSq8YCHrntUd2G4R3Tyn4FoRsL4mSnqsNnn36d",
  "key29": "3NriMgqBf7PKyRnidnCBisatMb8T8LXRMvVPVD78f6BeHz2gMWtkqumqHivhcDK6nLinyyBMHAriNNN9hVzRDe8K",
  "key30": "2fd9qaKbfNainaDHi1zzLTuJpjAcYnhfQk1RKfMKV25EusfQvmWzixw66PUryVyENTp9ygpuQPfomZUZV8rVbt8C",
  "key31": "3DLiYzGAqrRtKHbwjjeuizAkrJrqWKw4EdrYo1VYuvRnTwJtTdLeXWTYeLhbvyEZeCrPEKD81GhTHT1KLhBvpcgT",
  "key32": "2CC23VYVGuLmKHc9Dr3bUsWv4bXucZQZ3hCzDAHQmK2o1E2vRGyFjrEhBJtcXErbMVB6ZyouybbUpFPnVcXz2M1A",
  "key33": "5MrEvhYikhgtzjcQNNHga6eByyE6aFzGjVbstdzzos1DwmFf6DhMxJHQWaPmoUonXe7u7Nh9SbA95U76cnueHEkc",
  "key34": "5xgTv3wX1V9KZWiQsx57b82ZvZD3kDbuRYh4Qe4d1rsXpDxMnMKi3Gv1yFvTc8yDWvMY1MmBeUYFvRzEKZN3k3dF",
  "key35": "3LmtNjRz9EsDbQX9L9rVgC2VfiLn9TLvxtBcvxHT8Sfwj8bcfLby8PA7AFfZpcmSBRtS1M8T426nV3V2otGJvR5p",
  "key36": "JhzoDbryycmCYHL3x5RBgVZquNLzH55saVQuayLiMCUwFU2phXXzk36rkGAYQKxYjduPXHNzdtMu5vdH2u5noRo",
  "key37": "DuS2Pp1y33zjK1SP36ASrDtzuoaoEBgP8ZvbXGiTy5FRTzcGkxfNHUqdKghAxSgHJn12dGAygHWeVAWC5uoi8bN",
  "key38": "21dBrYYUysTkP7DHuMxfbvc6mYNgt6h4MZS4v2ae6tgYQ5WnQYdGkZD2wMQ5mi27g63KZRpaMw6YEBnCy61DzrEg"
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
