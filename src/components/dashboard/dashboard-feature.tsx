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
    "5yDtwwTHeXpeGzTdQsbVQ38Pa7hkUkegWK5PYZcq9aH75PEy1myP6szLb1jcnJnU13rEkdRs62dQeVqnU3jEqXT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KpuusU4sMY4zxmYPmSQfLrFB1ezgSDNhFTUXzvXRXGVTGqzLtVZBBbGRytoFYPiU5de2W5dqKT6CKm6t1HEYa4b",
  "key1": "5XBxUyctpdDCRNo6LYy3EHtzMF4FELrzk7yqnZJBuG7CnJz6SBGcrzYvN2bheoee25oWA1ef1v4ufHCZ9u5H9Lnz",
  "key2": "4DLqoQ9TnKeZy9bQ6NX4ymYHwpCbH2aueuhJ3JAAhoawZmxnb4pWGtdq7Ew8gHVVo6bhGqEpy9SmQhvKw9GbPGz2",
  "key3": "3BaQjPHmfR9xTVryoKXYHqpCh9o8sthNCgWxJerPv96uBAuJw46Cb8Lp99RNa9y1FtmiwwMGgEV4PAxWQZAUtyYE",
  "key4": "4GJuoXULRYaqpX7d6i2s7eLVg8uzstiHcJADibK9br8vbTCBAgrNG7XR2cT6rhW4q39nuZKJrP7LngT8PR7v3QSp",
  "key5": "4KGJqaERT5ZVfrKMbsrh9eDhkiaYJVpaR9yJN7TEqUu1FeEfsBTEoGQ7MTH4qX7p6ZND7J1azUKRPwK9sFs27Mm3",
  "key6": "5bKZ2pGrHzY9n98JA4MDKYuGDCU3UC2L3cZRedUFFq9M2K5ix8QqCrkHpqHnfd8E3nhaeyNqDkD8xCamHCKkmqmS",
  "key7": "215axbWbENAes2JvsMWZ2Ezh1urZLsXXc1RXJjmGaeDGCKSDRKrhyWxFB3uVzEEketgRMS2rj6P5SUAbYsdSS77w",
  "key8": "39EeG7ivLo39u8CpfYf1eaRbie8zEotxeEVsYpCAagf7BrJ3h5CBEcRc9mTvRBxsPzKFgf51LGpGU3ZdSYrTYycT",
  "key9": "oiUHJqxjMBhsPQpJzVax24pjtgDyUSh1RmUo58KsV3PfZq6VAuexeFE7zk4XeSgSjGym1qAN8GXMpUXmTXJy1yG",
  "key10": "MDZNov1X1ke4ocXa1iwxZ4YxCbDDMqdmk1Lz4fDZF1RXGDFqDvPRR4Nus9DvnZn6fQKDEuep2YtuQFiQHqBrW2K",
  "key11": "4ynRu8b5XDvCEaqu8ueq7U5PZadoPNXThMNCm6N5GFVp5jbuiTHewkV4ewQ8swG7rbMBuisrgy2idFCxYz8g9DJV",
  "key12": "3J1kX7gtsAgormoTtSFwZDaRbHFbw9c6HfGkutiqTUPXkGk8PyjcFCEzbVRJFuK31qqQxBGncH9vQzwoRmw4nBba",
  "key13": "544KwUAUCFhBssvvrrjUMAnyfJ4aoQCRFp2ukR5amvdpn32sJ5RkvuhbsXEWtDHTvKmmbLjAihJDoCTkCZtWkBn5",
  "key14": "VJXfvA1gHHYLnhaMZQWFWZQhFKB8nR2VUF75rzp3SBwHjxDkCPwZE8Q7CbPoGQDJLPYZeTxBR6aa9M5cUrfieeA",
  "key15": "33yjyncAjURKqLHPkUjRwLD2LyN4frfqVWaBiKnGXSSfMXYsxUNP2Vwb4h2iQhJ9Qvy9cdb5bcj7rzZnVi73guZh",
  "key16": "zQvSMhPXAnQpyCK45YD4sZtdRonD9Wvd9GQp9L3d9f1RDWir7NRx7RzMsM5tm9sWZd1uSEZJ2TnpY6x6SqTfT6e",
  "key17": "4rpXuu1G51wFgtvVaNA434QV1idNYsCiRuZF9vaUHryaVP5Hy4S8T429XQVwx1c9iGFhUjY55wnvGYhK7JwtQVXs",
  "key18": "3D2cCEMxXTsbCtSscuAbsCREikFpUV9uy7M9Jt751ufvTsYDffJ8ucsLcQLYDh95ZdjT9MtGdGCM1pJ6fVuvxR2g",
  "key19": "5m2TcDyu3gFqt82pqwdyZBoTDSvNPSi3pU9x2fmPiWotNW4Wgwi21rR5fB8bg25UxCjYuC5kcW8htq1QtkvxYYad",
  "key20": "3QS2rrvBMCCfHVHrcpT3rFHgzzcdLGMnL4sV8KkdXXphkurkD22YymULvcbbqpuE35MgyJq6QWR8aBrEUhxw9k7F",
  "key21": "4srkzrGnrNJpj2yyGUGD12CSVRjkvFtMH5qa85xaGZAMsdYxLyjMAAnu3vsmrieS4tUS1afND9QTCU555wWudMdm",
  "key22": "5wpMHv8K8N9nMLKAKdjd8d27SMXPnbcezrZTDCrFYdj748hLiy3CE2p3Jci4Y2BeKa7vUSW8THXUkQThC2HLtujM",
  "key23": "3NfXK3jytXd9LLxawa7ZpLsm9h4D5acdDDJWCx5L2EmC1qpomETbxNumcPtBrkYBfG8YhmvmRKnyZsWeVUqwotpw",
  "key24": "4qqojiGWuCHCEqEHEaLaQouUtQHpaaJVNWrQhSiV2NGAKqMJwgCU18q7mFdy2TLrKL8Ptk29p3ZE6yVFVDbncuv6",
  "key25": "4Bw5sEBNrG78wRsrosaPkTSRAq9ZTDqZ36b8EnnVaVLou47h3CjHkhGiccnQNvPABuPshe12e1WsvWqmp22ipxxw",
  "key26": "3bWsq4jdrAzyMKAn24BURDAwpzcsLggjVFnPe75TxADLKPsLnuQxHX6oT5qr64MCi2U389haiLpwzdqnryWFmGuu",
  "key27": "3U5hK5rGohKu82c1dp76yZ76nWRTkEgTDnLgUQKKLYdF9TK9fp6rxUxm6P3deUhbAMG2sMaAHoJz3Wgh21aaidug",
  "key28": "3nTskgnuYm4MndR9RvXfXobtfvTuzcNtHfJrdJ2RryCpmLM71JaQKAeveAP9PUQyXYe73cdBJDZqSKN1kyeLqv2D",
  "key29": "QEKw68266G9BSzLjB4HRTmTR5KMRtF1jopNWhMpQ151Z31SXbsJHL3CAuVys3zBYAXujtCkvyXEtT2beSQhxVFL",
  "key30": "4K5FZXVjAAX6TqWnocwckC4KmgTyE6DNm1Uu3RgXHyx8ZPcvshE9FRpJw2S62ZutwGjq7iJ1F2DM2EMPu6zynaMM",
  "key31": "4QyZKUC2sM47CKYDR4zguX6xFi1r4ZsKF5uhETBvDSCuwAkXjWjEFqaTnqr9TKboeWqDrwXrKDGwKdtopyySwafv",
  "key32": "4eYhBBdvihqqcDQheYq8D8FKqQ7y1NjnsiNT14Uinka83axggJz1CziN3ih58VkggkJhgRXQPCvwbggjzoPw6gGk",
  "key33": "3DMMSYKowV7AttkPYaMVmdpuzswLLbGWzDDpZDQnK4UZKcXbe3EgvExN3YgzKMNyoUnyn8oeNAVAygJKPDyhXnPu",
  "key34": "tEjejoW7opjtx9eL2RoDJicH9XNhJzMc3ChwuD4xrB8wCQiyQfkTnxnsyX7HyXmPH579pP4d1q8Fb6ywwgVNCGx",
  "key35": "5YRqhGvTMFEigxeMJod4bmcJnhhbPdn59raTRaMq1YPJzKv8rMeQUpJZYZQvKipZak5DTDtmxdEWUYv1ygvVYoXF",
  "key36": "21b8kncbJRCvKJRZyYR6UAFd3zUMz23Rqwisd1apbtAr5gDgB8iCaMFdMisAhdxpYLHWfWjPuG3nFzBqeLGMMqGv",
  "key37": "GBkZqfvTaXfdZCbNNSSv5xkGop8YBdotLS3SCBFyg1CrsGMDe5Hij5vgdnRwCugLbPrp1niTe7Wnm56XihhnzuB",
  "key38": "5bmNkBYbWCdqNnnGcm9mjXRAPrYHiiRNvfW3CCh9FkPcrhWW6Hp7a8hEhGxNUZPTofpXCnUK6p3iLQ9rsN2o2ZQB",
  "key39": "vmAbyD2UfCXwGtkFZHdHQ7U8Nb2UWvd6WgtT68JqBQws2A4fYmwcVXXPwuPv6snNdh4fZxrNhBu6KrFTDe9UDAR",
  "key40": "3s2uDsFBwpW5q5e8jB4yMECN67RRmbLx8ThuW1AaqHLoLMdkdAht9nswKAkFP9WA8KXMF3Dht1dMwfa2r7cpgzAA",
  "key41": "5gYYGQgevKPkudRzNFF9DAXbAMqhHwJDmrSMhKbTif2PoXe5i8RyLxXhpRmg9H7Xe76Nb47bwTwfBU4Qn7vdre8U",
  "key42": "qJHbLM99GjqRU49ufY7STJxUEbPb2gJZ5N65mT8SzBuPK1nyJndUuJMtgSRTjG9RJJn5ya6TuvNHqJdXiz9eMH1"
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
