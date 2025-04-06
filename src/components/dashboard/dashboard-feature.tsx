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
    "d1gxgxFTFsnhadr974MPcaPPstbfmyWtwDS4e4ARJ4YJf6jk2QwmELnCprjHeUFwsUt9giCsL5D4zEB3MW4cESp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AMr48jLjYrk12MA8hnktyXTjcqPj2fWJdJaw4mtUQ22U6P8NqxyjNv9LNNrDJi9kfCwmnMs8JA8iPcGvsmyGWdE",
  "key1": "DGAgZVRp1kbkpw1Jyw7zfpRQLTMWQ9k2LzobnEhUi2KCYHXfpsjKxiKvZgoB2y444v2KTNxpQupxv8kWRew2g6x",
  "key2": "3rMdRVpBBBLYY5nTF63Zt6DwvFJBYnxdtes515e1tbSbDnWJV4Sn2BjRuwZB6mo6QWPWrtxYhQre5byMqv912nfQ",
  "key3": "5myNaHb8ip7B5UWzxt9WVjt1MtPJy1s5D252QpGsmeEZoVp8277zwbAdT1RDaXouEdPYz78JJqC2DwSwM6kPqZjq",
  "key4": "4wSLw3w87wuBooQfRNfWFas1fowtkZDZEBqpET5qRrcvjhkz8HE6FddDjzKx9JgKVgwAA5fbpmGLYVbJ1p2jLCuT",
  "key5": "56pUPt4w2hL2idCuwAJgfcX66vJdjMkqk64XGJbWk1YNTS2LHnksHsJGnRZmhfoRv5mDiSPRHWtbjWXJwsBCGP8s",
  "key6": "4CnxkbUVvM1hLWynbWW7KCskn5Pdd3oecLdYB9dFgaBbQxUzdZNNfHd3rsNnX2e2KJhNdavdCq9Z99zvj1fyiXsM",
  "key7": "5H2C5waW84EpGcFZBFaRbp4ERFzNnJpDoCW41JJbPvMJ1sBEp5sEgvqdfcysA3R4Bs76vkZBBrnhAvtM8yAwdmEf",
  "key8": "26c8vf3F7SnvW1QzeA9C5CwUvhVAXuDHi5WM8mXKzCke4kHvZoeCYUWNaE7h7sZAizUNZiCnATsbLBJimjtGW3zH",
  "key9": "4BJbtCmhq8fCzWtceBszRpTQh9F3fLZBVySR6wKwxcGJPXvyLcaqPkubZGUEeFcvccQcynauYSZJipfVRvYgiYg6",
  "key10": "2KrvygSyn7eS69oBUttiFSQ7rRvd8GkesfSrdHfreHbBaXN3KBcmadkUXkxvxAyvm3GiqTyHA65fQ9AsEvecj7q2",
  "key11": "3QYR3ZQFzKHCoD4u7EfBG31pwoV114fSX8u2JJaNYhzNyiEUGdfZKkR9Kfgi1PmQXU4xrFv1a6YDZhovyp2u36W4",
  "key12": "3qzgqsgmiQX7tRjn7Vfc2RMTS2fhHqPm2nCwZzRBU5hef4gxWANvjndXoRQpTT8d93CFq7EBS1czwPcCo9jN39ir",
  "key13": "2suN1gTQ6wQY6dbQEK8WH6zJpBdQKsdRSJwz4yoFPHtSrJ1bNvqFRdrapAX92mBcZgmLprQgkS4zkpxFy5xv7N7x",
  "key14": "2wBFpRtQxEH29jsjcy75hbiXY1mmaUcq6CC9FHLe4GgeCZVLR3xtgovjzqiXYzANH7X2BrHnoHoQLxR2BKJ2wbNZ",
  "key15": "3kMdoTqcWNgPFoS4eGKVp2FGQUzzAJHy55jxTtNZU28aShL3rCojcuh7uxHGmgNzSh38EnVojjSGEhKqE295usgM",
  "key16": "4DuMq2J47DFnwbKU3HmDZRXA6AexeWWdZbG3rdTogsGGrzWghkiCLM9xuZffy2qSgqu8R9FB38THv2xTy6jykvuc",
  "key17": "58mRcWDkNLj4JdMUsm9oCpcdAQ6iCBqTnYSh6KFzVhGPfJ53TUTorraCR5x1ZyR5HtgmLCb4n9cdYdCaoUqGuc2H",
  "key18": "oXTzscvDgV2E1nNBzFswJiMMeYyRqTN9fe9rNDEzhXXeZY6892Xn4GeozHqFaMsVhz7weQM1tYw23xY9JV9JgMz",
  "key19": "4Kwrpio46151j6CWnfvRydTHq7uUgB2fahkHjXmFd2amn38K26txxNCAnKh5Tc9T9cmABsfRknAAWRZenQBszXSA",
  "key20": "5Rq94ig6Q6igkVTJKBYTccgkZPCRBFNwssm3FMmiHm6pUFAiHbCtCkrKWwVvV1fVt3hzQ3LDE8HJLoSwHxsnhr7N",
  "key21": "2HKSXaHSw8AXKNzXbuQwDezuWdnaVev5xX2EGQFygh2dLb6VE2wHJ1HtUrgvsqJaTy5eF5c7dEPAeatxdr7m6J9S",
  "key22": "4E2uMqCa9TnXHoT7arJ8GXALYyFAh2spAkqZMRjx6xU8DbcHK7jRSj8MfHfMXB4eqDLvjo12extmxX8ctsAAAN42",
  "key23": "j5dT6kuEznr5pJt4CT7xU92m2MpkbbFWAL7911UbKjsLkuwZZv5PXtv7Hvj5bxsxfjtqFpuRTsfHzdKXC4Gft4E",
  "key24": "4RFkyz5u2SmwxQbRbYFQedFNJvfJJNV9uN6j1ckV5vRXebw3WuHLBDCJXmiTGyBzvz4znKMQZ1bUwhoNAPha4Hqm",
  "key25": "4Er6GDEeYPegmAPrU4KQnaTYTj38GDBv9omAvfE6kvDzh8obaDERRo8nK7aNAj1dUktBgZjUk5p9KkxTVRJHrXzg",
  "key26": "4TAGeBKHkeWZNxXaaeB3PSWj7Fiy7vZnwstURLUAyEz7C4FpJx1MRFb1mS24eCJUNS4d5gUCrydY7rFzYJC798LJ",
  "key27": "3fSLmjdL7aaMNbYNDVKSxD6aK5WNxMhUJK8RT1mZKZ1naJeGkg4njEU8YREV4fVbenE9tfc2KxuUWq2wgb3kUjbp",
  "key28": "5Zi88QvAnP3h1DAxkQN3mgE65AKd4MkgA4FVi1cqRwadMbQuH4aasezBz54LWpGNdVWDfSaHayUb4uatcuUzHB5p",
  "key29": "gsjcucJc1X3ssGHcnTGvbzoyvUtuQ26JWMqJBDJVdzxA1GLhf9royYvgxp4fRracVfuHiTAUMm43EkTh85WnjbJ",
  "key30": "3wpWz9NC46pbdD6ivLnq84dJpDTGZDqPpi7vFiuupvUFrft1nF3A1BvwxK8HfrUpzAj2kECyHBKUtWmAdkijG4Nm",
  "key31": "3LuMT5XmT93hWKALBo9bG5yVaHqMHFyHqz4dx8QpQpuUa3zhi121p6ty58oH4nTEXhusgwnbEwF6vSayJLpnJeHe",
  "key32": "3TA8uXu98swsmVBPR5uXE9DFiHdciy4QU3upki68nRxeeHfnZJKoKPYAabN6caZw4994wDwPnLXjRVfu9djcxyg1",
  "key33": "7q6w3XaU95yByKzzLD29b666BuhcVoFxnc2d4eYZuvmdagafqsrMUEbkhe4L7nyXMkHN2ZJwyyZyrKjJskzdnbo",
  "key34": "c1zgtY6J1k3UqiWNJ8yG6W5xYnJue1Qz2mPVxzTz43LG1cqGX2BK7iRoqenJMQrdBDxavnWQBKCxz69amT2z7y6",
  "key35": "4KD5neBmh1r2orinXaYSVTLSs2dzTYnt2ZE4cK4FMfh8QNVPhZa9AWDuDTUYEBKZJRtdz4W7P9iVCeT4KQXKzo9b",
  "key36": "22aqYWZYGuUXUVWLHA7X6zcLfTNKMLTTg3K5byfBeAU4xL4DG4bQPCAoeZN3wi1cEAUHjnDuUMcwka8cZ28YfnhP",
  "key37": "5tiMKKC46nJfGVk2TRfx2r8993jjvNj2a8Xtp2VMMCEzKY1bRcus3N2B6AnsVza4QQiUXK32He6Zvj9w9DGcAF5q",
  "key38": "fqRxA1B25CdFjVwRiqdbyB2AVZnTTL5qpYHZcYNskGVeAFzKEKM9ds6Qjspo5mjHPskvNZBXs1Uhv52nTSMxAFZ",
  "key39": "5AHs1vJWiuhyt9HU9FwZJUEwDNduhP2fVmUzPFD45SCE2cj8C9qWAymLdxfnduMHHeJX5mJVDXydsJwAXNK8Cs1M",
  "key40": "5BEjNbdFKFsn9ra3a3h9AWU4HcbKS5P2VyBuRrmrdCmMzinDBeb3EMDjH6RpbPLAHVAd4xfnP9zpp9X9YNuipWRF"
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
