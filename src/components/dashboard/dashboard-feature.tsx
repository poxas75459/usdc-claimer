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
    "4p6FwtkE4TcMHdstig4V9kj3vZSmHYFatVgtoF93JXA8q4t64TVrCkKKjTekamk9kkBtKFDrr86AYy9cHhucch5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2TRhDheB3vxorjdyw8ej5mpWeVAsTvrGfnfjjjaKoRoBQCS8z8exeN4U6BLfyQ63LK82XcnRqzud8QQAou6tzm",
  "key1": "LeoMfKgnZZ2n6Jrc2iV3Kwr7rYT8p9TyucSsqMnHy2U8Y9zs5kxxMF5veGjeBgvyuTsjGJYReHGT5J2vYuDgbqy",
  "key2": "wq94JyVzJVbPebaG5r1JuNErTbREBptwZ133nLMAnqLimSBnENX2ZDjUyPSxA1rSdT68MX53wM4zwSdsmZrXpXu",
  "key3": "2hvox93WQzv38PCkH4pzQRQQLEEBiZzAEKMYNoE2gusLGAQGDbHcCbam8rKAmntNCxuEm6cdRMAoLHuDAyncppQP",
  "key4": "5784xxDa6fJiAniWBmNqbrVwq1aXXTvxkkdEpGcMRWk31yeDDTsqV3Wjo3fZzGMiqPPuBncU8cASFiVgi1wZi5kj",
  "key5": "4awz58MWaisGcvP6DSfmtEkheWchtbHfaRZsjm4g6tS54sw56HaTZUzC5Z5UgwYVoVygekGUeAtLzC8qhFbPoqEd",
  "key6": "5DBWNcFWcA41ENJ6PFAaLcpT8hhuDQH7i67eykKozsMDMLj1pkqyAcmm96HmnhrLqiKRHP2EjhirrR7y7mZMyoKj",
  "key7": "Motry3T3JVuob6w2VqpfgfiEharJdEnb1djdjxyFizULgtpGuJ6s85jPnrZiFW7UkgphXxmswrJmrDfWoospTGB",
  "key8": "WsMSpKVPs9ub2vT3KUMaqQxWPsoNgjdaRDjVYLiE9BzwXtiEh1Km53yaWKtuvdw3a5R3wG2LZkgkkaRFPAiJT7m",
  "key9": "5NkKGkbM32QM7gMB4REReGMqwh8rNZ2gLEpQ67qqj7ZQpWWPM95QATP7ouVbwpNEq7oqWdCzEzBjdFBzx69v4eGX",
  "key10": "5B1gWfPKMM9o24aRibsCgjcy3yCGD5T4b6KdiLrkJ1UbrFAAu1xLGhqc98VEu8vnUon4CBZ2Gt7oEkta3TsYGpLA",
  "key11": "2ceX5gmsiprEoAYd5JJsLABZThwCFnJBnTauNRNHh4o6L1awJw2j6EWoTsdRi4ki5yMAxfqvCftRSQhyc23XSuF2",
  "key12": "3xgRZnXnmLXGxdzVjj8WAAjWDChyKCnoXi1x4dTJidWr1xyJdcCVxeNmL9WTK4byXWtTTBXAqWLQvxcaF8Fyfpc6",
  "key13": "5WF8VzfQR44DAqiWqSfAJvVWtQaPV2NyA3AFamgWeopTpHz4XsvRsUmi9U1ibyR3iqbHriSVxQdH1AqPLVU1Robz",
  "key14": "BCawFqRhEM8RH5ofWRcjmKv65C1QmvhiH6uM9g5XD1cQmqyy8QG1KQe3ebd8tdvTjuNPWDqQaZpdKGgBdHDtQif",
  "key15": "4dBPMCLEZL5nmYuvUhTJdDnka83omFdKQZR76xLEAL1NH1hruTwv4Vikfm7YskQo1NLXeJ1wzsGiDPAH4dcVcbmg",
  "key16": "yHGZA1ajQFjoUoLa5rgijkiSx6fxkM51vtx3njwEgfo7kmF1UH4Bw8ps4pWbU8fzLQqbCqNFidH2wpH9Wt7VWCV",
  "key17": "34SbQzFBH71iJThPtPe1eU1gA3nmTdpgH8aHduQtfzXPtn5wkm5Fo2uqvdPf66bmaswNdUTgESgQWshU2m6mkcmF",
  "key18": "5qtpzE5uhhq4a65159xpMCDF84mbuXJdoo7p1CAqF3t5VCy2kWwKz5byNB4uLnX7n9kePjprU8fEhbYVpLfVBNUi",
  "key19": "3Lw3g2aNVma4G3NCHJBMCzrREPQ9wxS1f6vJbGyAeHg3KefSHC6SSapNpRF441EyQ1kS44UiyfYktgYbSkbdW3Ac",
  "key20": "3GXqsUDFfAaX6h5YkWxUCVkciaC19GpfFwxNqjXQsmP7QRdjUVaP6s4BJccDog6u3k8PQLjV7fA9FzK75sm28KZ7",
  "key21": "4gZL14CAw6dnqEBVN22VgvTexGUz88S5Q3UeXXDjTWQwKo6n4dVQ4YpTxQ3U7QGaSsLAMG9HjZeVSywbdHAD34Rh",
  "key22": "FKTpknyUVtNprX3yL2iCcyMXoCRyRM4whHPvtF89dXtFBeE9cHSK4L3e9JHJ8e4CFbSGgCRnytvZwuHyYUopaEB",
  "key23": "27eqKdZRcfjkV8SqkVMaWxWTC4DWhHiapUXk1vQHxLvmuoA5oCNKwzpR3vL6FDaWFQFUivVPeJrxQ9BJMxnQWoHa",
  "key24": "2hVWrrLYqggSe1kEGnNwL7BQyW6z9esAHWeguzYhmyvR9FEWpgML2hbaNEGMXRrLkVQFTKqDXCTLvpiVQNoGEUSZ",
  "key25": "xhCqsbnxipB3eRjD6G1hKQePmkuQpZjuu5jLBzS28Yag3zGrLmqwufBEy59XjDLhYRYv4c5tp7nrBAA9DxrTb2i",
  "key26": "3qKHqxPMy99x2TTUTwAMUz9EqyVmwHK8q9AigY1X696fvwakhEEH46YJUD79daGTYEM73BCB3meeQXZB2TmpgUTA",
  "key27": "5UpDKBJUQFqnRR8PGcjsBdQXEnqmXJ8r1KQQ6wPyyeHiHDqCcR5LA6DDEWTD5YWMMJZUepveeg8ruFabnCeooP8w",
  "key28": "Qmvw5qRPKkLSaX6AaPfu1JZXyDMyPWsEfTwEoVeLFhcCcEpy8cSwn44fgRbS8iHudZzCxAKuBTHzfjbHTmKuKRY",
  "key29": "4EJNAVqRrGADB495JNQArPo3mDTaeSL4JHB7EtDuKiopMLLti9ezNddHJWj1AUgUxn2nyUysT5vmW6kxDpmAMkWj",
  "key30": "6DSQ8QSqprUTMzZsd5PteouyFuw113pFA2NLCVzBmYWGn3vU7KBW2uTMCGhq6nEqwbvgUMyJxdJUBaWMjMiwvcX",
  "key31": "3xJjEsZBBJCLM3N2AXUoVZwqj3Fw5qf19849fFRLtvUcLKRoDF9c1AdSPchWcqV6gqXoxLMETxuEQSCpFfjUSxhJ",
  "key32": "5yiXXRdcPtKJYbbJhGzGtSxFrtoYB3xPEmBnLKB8t1em8JKrXes8q8CjhVdLTuvEMsGL5M6CR8eV4fiR5ofY2aTi",
  "key33": "2q4DJ5zvKghUMWjrtA1Dzt4zK8rGuTZf1oZYX8uXM6z41tCi2Ny634H2k6MZBxjo76J9SdHtreLawgiLWoecCvrd",
  "key34": "5LPd8ovBHMrSGK4gM7jko2p1TcF2mgbQR4PUbDGjJQjvuDiZEn5U3NGKu1K88BTNdS8mPU3HyFwpYgZ4Ya8p4voG",
  "key35": "2N4pXXmNard75KPip7Zm1V8axAs8642Zp8nEhZBe5wWachkqQGosPwvYkpgTfvUMrm2qfTzjambajXwtZif5ZaPQ",
  "key36": "3qRfK3ZxfwVHvDaHBHvjrLAkjpW1hMsy6toEjewhHZ8MoaSNKqNHVdntzd1UPXa8McJkAGm18vKQxRaJfvGQizxK",
  "key37": "2h5Km6e4nJh27UXDfWhDzUUmqq8dzFKJzYtHJJLCBEuDdJvC56Cd7rUMp3ndr8aYt7HJURkvPN2nkaw61WVjJLLj",
  "key38": "45eQmCDe8egR1dKp9Mw6HKYY2XYsFCWRHRo6vNZZu762poFm7fqMEYfyDXMZoHEJZgiKsvEXHfh9hVQsjXb9NZVE",
  "key39": "4RQGeAXe7QXxY4viUziw4Jvxt7xzGGn5twCseuTAkPcFjpHh4Ku6RoBMXFPcWNxtPskdzeYqtdNbM3a4LnhYnUMJ",
  "key40": "5ZtZjfwVsVUQdN5Tti8D64otmnAXU72FvZwBq9RsyYYitDBuNeTdbhXVTBZHviyAnX4bccpcendgbUXg3JySvwcf",
  "key41": "2qczV5LLUW8E8ESA6iYgLPhWipnhFvbbMki2Lcucdj7mtGChoZXUTGQtDuUp7LiFywRy3Ac5yUfz8QTtv25RR5cc"
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
