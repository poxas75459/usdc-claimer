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
    "4jh1mazGK2PQ4VAxbsS4HjCg9D2p1kRcjaVADKki8Nu9wDNkbnAPh5yuCSmF99obACPRhTf9bTomVM6vLAezuAzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wP2hzqv5RHT93JWAKT1LoRL3XDRSAJpVo95LK5QvjAP1rPQtr8PmujEbyTWGuSMuhNGvnKUg4C1dCM2Ye3qhxrN",
  "key1": "2TsDqp4cWBQivGdnMqUkM4PVr3qxpHV5wAF9reHnqrNr9hgMVQ7KtdC7ttfwP2usXSUBdt4rfe93k4mWWiz7SucS",
  "key2": "4c5jNQgNzSZ9Q3GWY2spox8nwSk38BQRAwEuqQJhDFkjAqobMgnfp22ofYz9xB8r1rS9wcABnbNwYenkWWjafUKp",
  "key3": "3rRZJjahGQfqj3JLLE2sMpMFyFpHxk3bgKdW1JU3g4L1V3AhLZm5RAoT39XrHpY1tm7AnMXX5UxbWo3cBu9yYeS7",
  "key4": "4MjzA7RtgMauRkfP15DNRBGUGP8iq57GHqniGnpZ9KnL9Lu3Mgi2sZ9Aq3bYc3PMBnx37XhhP4zsLbqdMQLNaEeq",
  "key5": "4HqfVgioB865by7jfRj6a4FbkciqctPhcQSc61qeo93P5Mwk6s8vjPTXwf3nL7uS9nQR1PvsLocWNCzcewsAqsCq",
  "key6": "4aktJgzirVerUpgGAZW7xqCNhF6mSEbMfmrzCo3dyw2EN9C9KnkvzwCGTQW6yvVtLnZneSezae2zQmXBdDttN7rv",
  "key7": "45d83ZEb4AtHhKMbva4vCjktuguBsKQ2Rx8ZMsGufRSCTqGDxmGHmnKEzU8LUnWN2gaxsEiqi8ETPk4YdoDhAEs9",
  "key8": "2t6x65QGFQNYTTx6KyUvNBk5taGkE2sP2WZRvrNsFvSA21337x3en5x51cC5mvasNk3e6dL8eTFwKhqq7o7bFF4w",
  "key9": "54vnAjUc5JhhNTXE2kK9NiAAvKxjBVZYfzWWWgqSSXcff7KiEFNXPRT5BDCbrw6MrQVHn1dCMJeHNH5VocADDE1s",
  "key10": "p9vfxGs45MNZFXsMKQnEkTEqik8EEZ1AN8RVHBZD6XQaYm763tTUy5aUb1uuWEhftfMBiyKFLex25e1fPRnbH1D",
  "key11": "2Y26dkT6h11e58HhLkzmHs3FxCX4Gqu3QZWjcK8SAiPNJj4Fw2scN8vAdK3mmR6djjLdCyoaUpfApweHWFdtwnQx",
  "key12": "3TzgPKBRkoAhogkx1LB9nWPbRhyc3Sim6BmEGNo7ysA4Nii5CnoyoWwSnqBRKxpyLeEtrNs76rG6FwsdAAkGsiU4",
  "key13": "5SmPvn5N38G8rUxyeZoCAwHsQvzJQrJAHugfxLpLziH17wDobuuQRhncTR6b6qrLkwv6EA6ctc3sC6oR1cYesy31",
  "key14": "3z6WFbhBinEUykMax1LvEHW5h14rMWvA16g41GkTQ7N9mBAGsWkxesMVazR6oo4PDUkEfmvHrbqppC6h7e39aMTt",
  "key15": "5pH3D2C7scSwbvEuS1q4h66wXp1499Mf6wbeRauNKKRXDN8ajX3Sodg1ZbogBBFPbn9iGLrWqMG7A8eav9LdsZ4L",
  "key16": "2Z3cbvLRDtE9oBSLyKoiPiV8tU9yYKqGHREdPfGRm2sKGipURwuzWGjHLgDPDC8hMpBpyEbLXFdAnq4XfVfdEa7L",
  "key17": "3GoQtJXSLqKUNangpdtL9fR6qE8SqziKTAAQLbkpqogSDp1hZJQTWP6Waj1iebN5sKArMCgvYk6EfN8ShvLhHfK7",
  "key18": "2kcVcprTUB7iNJ1jm6k1vMeRWbvYMF4M5GVuxDi59hP6BYntXiyk2sgRMcJk1xqHmwWwnPCauRvi4vppqSQAXups",
  "key19": "2H7Q6DPXMnbkhY669KKm6F22NPFq9mLGfvksebDVqgHfPyqBVacmW7MVQ6gsa7Gb15BBPmxFfZYKqiVpsbVoG2NV",
  "key20": "2R1yeFyiLQ8tcqT4Pi1FMe4MAHaA99foKyueD2jqZmHGxCpwmX5m1imseFpPCnb1aek2R7ZhnUzbhzHBdPMNDcoU",
  "key21": "62geQKjMdHrar2TbRVDSexhCh7TpeANCeJ4iLz4MgY6yQ5krD5Y9HfD2HQ5j26U96DjZFiVwxqZZ5W8SqnmE9WVL",
  "key22": "19UWiCtqaqRXjf7bixJz6WuPuZv5V6ufGqWsHSasPDy9yBTHLnZaVt4crBUTiYNtcsMXfJHU5ScLKgWLEbJwcu9",
  "key23": "SxsirNesJtY16X6RdT962hAxuV6RiYKgWqKwYzLmYzZPAh2H2bTw1EnGCoNBeWhCUttg4MAbSTDLg3B6vftx2Wa",
  "key24": "4762AJCpHZMRQyXe4F7g2NnBBR7MKYEG7JaWS5SCfk1gCzhxoaomXZ1DsKPjVPQgsRZ3xxEJ4T2jJioNfapvqqKc",
  "key25": "NRmJVV4QH7uPG6KQGYm6MpvtUguGUHLsGJnCZvA6mrHw9eN5pToupTzU2Hth7Yw2Ec5gAvJ8nDn2grfEtoosKPs",
  "key26": "4h51CkHs7q2rvjsLM7iuY78Z2ifnmZzH8eiGX6Xr2MBSQUsoeoe3vdsyHhbSk6btVVYxDwEj5ztpuWVSbM3T5jB1",
  "key27": "3kE4y7euJ7jjcAckVXzCq2shN3bH6B4pkH18HZqNZ5xbtRhjL8Y4upjPYndGYNJnZpvg75xTjjCkRmn6Wgqa38mk",
  "key28": "46EuBnTi9AifJp9ZYwEoHM2TmdTWYqyMLzAx2N7QCS4s1N3vKRqGR8K1d6ezJbzpfKgJmJwUXUTG7K2fHHHJtJYN",
  "key29": "2Hps8ni7U6rTVysyecgGJdKdcdbB4SjAw8VXKDrJz2ThppD8AhkTS5jjukrq7P7SgUs7aG49q8EWeUKkiGBvUAW1",
  "key30": "5gu6zbf2fxNHGCwxauHaEX7zi21A7dnwaTr34yLtH2bLzags5PrBc5KyW5WirBLvttEFDLk5rTZx3esQA3Gq8xiW",
  "key31": "4TaKSkj5NGnb53MgWVgfRxpsUZxr99wSRhNcfsEjyibzd1ZdctQZfpVVrd4tAZJuCB13yGc2TJ414aQ7Lj6vX5T4",
  "key32": "2AWJGnk4GYefEUCKwvkVqU8gmCfFAPST8bVnvcbjZDJxvYLCf1X53JsYRSfQJQfkHczFvMhtUTrQxLx4mhp1ZnH9",
  "key33": "4fH1shRZXYSVKfs7YmswFfkbtNw3sfNtQE8qV5ZpppQAo6CGPdMpaJvdLWAB5niC8Gq73KKuMCmiXtL5o2bTYMHu",
  "key34": "2nBXF6CbMhYUCTxVB1gKXYZDMiyXLgSp37iiM26AK9aAgMvzc384kueo7UJUJyQ83SiVh6Y5V9fxBUi3Nxxari8f",
  "key35": "is32NyhaMsHoVwBsszuepgPLrTVNfMwuDsBzQk7p8A9s7sUJbdVd7tE8p3GskGH6khALsX3Ukrao6gTUwNGRtpC"
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
