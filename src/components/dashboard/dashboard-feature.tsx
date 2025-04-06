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
    "2QKTAaqtpBvtoMrMFZG6y71M3RiwGL1Lsrp55edLmuANvZoqzc3BHj9wFjrphPMvJgCW24qHKtLGjFg7ZE2dggD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JmKfjBHzbnZ8paG7gSNeAaR4rSMjdmKFSwKnB2hri6Du8KKTEFaVkMrFJsjfmGHS2M4JMMbMQoUNthWxPCzppmX",
  "key1": "3vSV4MwSe7xdqkAxzuxMd5K1CeudCp1j1YV7mtFzwMQAahcyTHKQyuaUKcpitJHPrcDzxwkobDj7hWCfDoA5uGyW",
  "key2": "BLaPvZAnY8Zq1CqMNoTv11fnqPeQ4yoFnNhWKr46wv56vPc4RnjZwJxZVrpGHw5dfdkXqZ8owdpLyn6vFfz9Vqz",
  "key3": "2nsAHsjFGEK7WGhyniKUPG7672vTJC8FRtWZwpSkLDhwC5QADGRxfU2evbsU5do17hoHx441edRqF7WDghMwRNKX",
  "key4": "4frv3ED7hTECD3G53UzqvhXAs6jHfmKZKhPnPKNmJRMx4DDxnbvfMgsLPVUzLzsMoLTr6PVztW74DoydXReWrfgN",
  "key5": "3ppFk49ioNHjWJ2nRjRuYsUwQTHfuWrxiGcfr5iiAiPUk3FoLbDxDkQDQPQduRNPyAt9pwfG8cfG8U5Yu2EG72ep",
  "key6": "3DRSH4JF1htVauuMDqVK9kXfj5vbsKTEAtV4SeqSgfeVF3qgKu3XC1cAxijLXqGFQ9GgYkJQfAVLAYKXxs5SckuZ",
  "key7": "5FG63x5LVoym6xJCd4CHQAX9tfhFYwbv2Wf65UehzLLF8kEXXGqLpFgzNxBvKcEEtWbxftnwGyVwDYKngTj19Uyt",
  "key8": "3ykTu5getVMQiTUQNpQAr7XZfLZsWZZepYcPX8VckWrHe5epjygan7ncuxQo6iXs9TgP25hiPgJmVRwUGwHMS78A",
  "key9": "4cVpqSrBT2mt9cLxZVDv8fBwXDwdztjo8dx72KJrY7PEkFNsmCZ2J2mrV5zfm8M2hfiJpMMDJ7fN7FpGB7VVAVEL",
  "key10": "3X3FPei5bVvkDEc6fFDKHoKVWZz3kJgEvfxc9foca8Rbi13PwTQj2mtoXetFhRvSbEt3VrhLtQ5tNnSyjFQhTrt1",
  "key11": "4J4D3wNYVvt7DAZe2hg1mZ6dhYnt4ky6XxVPgwC33hQJwgtFJS2gyyGNwX4YY6ApHZH5UeUQkyaFp1whQVvgJeG5",
  "key12": "3xQepDeve6ySVyEk45juXLFhDg6eLndrodmkZS9SkJg2RdoeHB4zAhwSSAeA8S678dpErTqyir4SXM7LAoCi1Eqq",
  "key13": "JBMbaKfbbs7vjc4UUmePEhfg15ANK4WbPNZ2c7od8n5jhTLtRY5b5ojfrbywuuL1mHfrQxJ3tByM6VFQpNmjVzs",
  "key14": "4yujUdwpV3879GyqSULBjbyuD5e8bPovz48rdCH8Fa34BDPhXEwFz6WTajRA6AeagYnv2X4JvFs4irFtbPF6Jg7x",
  "key15": "3ZiTS9TaovDxoy2mnDYZVE7mi6jDVyRx1qFYGJF68xHK6BnvPxgfEqFi2hhDQBRkNzPDy6Zs1iJ2ZLQncazNJSTQ",
  "key16": "2gnLVpjX2YwytZH51JdsBEyvcV699yyQbiVo2DkEyGDX5gQsUkaDX7gsVnoSbvzKw38p7fDzuSdg4Zu6di7rMRys",
  "key17": "3qU7udwyxFou3hWk6R2cZVhs1Cz2hZCBcFZ1AfikJARfWbgG2nvbaWQNB2q6uZxSUzuUVz5aCTWpeXBh7ThBssoY",
  "key18": "mu5wTw5bm4rfZnZMvuMU8gFcu5ktzRVRvVK8CKUhDYfaDHwTwDoNtA6GQ6Zp8f56PfSKHccYT1CHe64Y5zn5Ynd",
  "key19": "3uXjF4atZK954fY3TMxMo1sZu3PrPRnUY26DWicoycHTTL4y6NKDZVwzhDgfjdHc9PWWFURpiwoYqavTZrmhMQmT",
  "key20": "AoKbSNBPReGJYzDXi1L1tWHEGcS3YsbQQYAXHfjYLyXYeqgRwScM7dCKmfboSdb3keai5QCEC4xMGokLM4N4YDp",
  "key21": "3zLAGBipAefsv9PzgkfNeJMYsawCQrV53ZutdJV1ECmQbjvgKA9CymTwxHa2Km4Hj7bh5HzG8Wk6WAVc2KiJFWAk",
  "key22": "5hs1RyJmT5kMLiVNWAdwCwoLSj8rU4ZXaKzh9QL18pR6YMvJvrVoQLAm89TXEBSsywpL9SUi4U8Bv48NQZHia9n3",
  "key23": "4VS2NCaLvKpM9Nta4JEd3ZbYZXiQaZqLDwEWEnsgUuixQn2nSYNs4uAyd6WxcsxX3AjjNHoDGF72LfX4gx3ZV1Cd",
  "key24": "2txksVXqj4iQWDEHEpSBssXjbd2HHxjAdYz7n8XQn7sVQD2axGgTczxYHreREVmJADJaawqJQr151tEZkxZpYdr4",
  "key25": "66U3zuA5djjGrBY83s6TK6cq1bD9ZgF8fceCfx74SzbxEbtYs1F12UEsayyJDxiVzwGUtjL6Za61oEgXypPmeXR3",
  "key26": "vEnLg3Vr2DAikhaBG246wNvcWReGq9Trfwe9mrWh4C9WRAfpop7c2XBcyheLwhJjvjzWYxWRw6tjLZbX6tFvLUK",
  "key27": "3EGXtAdj8HbViDNhvNoCM49MVyCg5zzBpX7gv27wsW8Nm1do73usuGyW7BsijqRksEdSktcQV7nUxzjxRKNQ2UPv",
  "key28": "3kW5dbBKaS82TNHTDy4ymaLcuRcXRcNaz5hAE5StRP2twBUVgBVjBiiFYShJ9S4aPZHJimEHQSyPo5VBmsWaepDN",
  "key29": "656Gr5iMJjocxpwDQ4PUcUdxkRC3DYJA2AR8r4vzRWswBJWidt22jTTFsFK9Hcabbzw1LYBTeZP7curDXrcCxtSy",
  "key30": "sm9DG8KoWuUYohmuv88dQZaSkPif3GpSNGgZEaduTqcvazwc8rPtMvAjG8mYrpmXonauBYPDaw4iEWHnRg3ozvL",
  "key31": "35uxPjpVXgK583Uo4M49baYQGA3hDuJUhGyYUc7EKWNFojzfDSu4cpN8U4A26HqFGAPu54cyMxajrp9bt75h47Ke",
  "key32": "2k5boKPScyvJCuyYPgJwW1p2VLFsfnuW1YMKEZn7Nm2YDT9y9PjGKij1fbrBMMrEnBKuwfcQCwRFZZkfu26HCd2A",
  "key33": "4qkUdU13c9JcGAdKhdR52w1ccLdH9PV9um8XUti4R8yE2aqeAQDHjyEX6di5BmVH2ECKeVcVe18kED1g97d437nh",
  "key34": "3SPJKNnfXRucDyfDgNhxE5Qy5opqfzjHiLDH262ZQxNMhBVhX61gE5HLRVYYW6vw8tm6X6AK26TDCTaXNuzYyecA",
  "key35": "2zB8p7S1kVzrrfq6Ua4UKRtGdtsYPVJxn3Gy48UPS6VgeRdQ9h5yr3WqBZE33j4Zonmk6nZtcwotaJC1tJtQppo",
  "key36": "5gr4tR4igb432xxoyfprwMU93jR8DN4JhqcGevYB6xBCJcUwReYY2uS5w9cmx2GAYkpwzABG7Qwp1wgcut2w8Kiv",
  "key37": "5HMxJmyqCKhBeRKTidUSxMpHFXkgoEjVVg7ra59aP1jXzdb3Mnh5VnSqWpzpbfGHVg4sTXCMGVFpCQQZZdXoTVUT",
  "key38": "4Kfr9TosELnhRBdukFRNvBmcTBfy55AUV5yQxGLXggZZwHRAdSUBVj1GdB6qrtCaBjckUu7oaNa621hyUrHdgwpz",
  "key39": "2iy7VeRTJwwLhGaJMEwf5FxGcSeGde4asN5UvdgpiyQuff478sJpkWwHUXvfV13hZgT2WNZYV3ZrXZKWJEQKam5y",
  "key40": "4tSJDoZt3rmnMqopfSVcEKrZ5xYiPtfmSHCkLt7JenxdFmHqoKaDd68JnHL7WUwPpu5P1fzT9zuKPPJH7rAD8yBt",
  "key41": "2EnkeTndeFTn6QTtzE3ycX7BCdjBNFeghky9XCSh4dwXA9R3CKLiA61URVgYneNQJqmbGrygosQJ8HYgLvZCYGLA",
  "key42": "32G2piThyaGfEHRzQ7YB9zbn537iesof3zJaKWeNNJCrn2JbBqxWBGBm7aji8v35vKxUN1ybjdvjm58mQAHui9Yv",
  "key43": "3utEYuA7jyPha4WG8knUUbUSCMk3ZGd1nxrQfguNT4X4wXYrYP5QpUuxcboxJZPKQSLKuMXNJvASy1EH19ZuJjUg",
  "key44": "52Z5LajrktCVhSqTTtEEtZ9JJ7wcpAK7PXBgfNdSfSZRbhTHWW8URHgpAksqNY6VQf73jYMfVuHwd78AjQmcrT9m",
  "key45": "5RWNqSUC92M7fWQfFSCGSe7oBWA165cALM1Uo8VpvqZK3NHjuyQdyjxBhFPTWoJK4dPMntNMXiE2APD4iovQGcjr",
  "key46": "5eW1ADuh7wfK31ENL7sPbUUMa1abt7Azh3rtbVyaJJHgmu1y1T3YCMxQxp5iHcA45Xwk8epwQnUopcrwwxAsUsg8",
  "key47": "5YKmY2m6q93Xeowpqpy1qMktwbbtMrEG2MERgnhZepo46P4w7umdYSuM7wMujFDRXNQQ9NxK8gXWKM4KjpGL8e3y",
  "key48": "Zc7GdTb9Ev2EWXbsn6JdWascjKvStvXJUZAbof96Tt9BFRibtb6z9sbXhEj6YBG94BuLFAL3dscFDGiCtEF7R11",
  "key49": "2r6J8u4sXLc9hkqSvzhMTMirnGPZHAuTvBWsfKh5otKKpNussUQk5PLkX2sxreVvtrjGzqCo3kV3iBrDt8QdAXZc"
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
