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
    "5aJDWUYqHAfRtVU6PLVmkPDndxu2RxUykUf2JYskS3HFHGcCtH3oA1V3vjdbe3rFi87KNfdC27Bmwgo6G5riGVpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vcQrHitj6MgMmT56YVnqAkogwdCCgDv2Kw3Y9W5QCPzTFXegEgqYytJBTy4mHVHsN8kvRL1KCVDyNbQhigP25bA",
  "key1": "63pRgFJJLSZ1iYR3n2GH5ERVSTzfuDCa6XWQjHKomQqZ9nMkn5hWQYKZBMMmZgAdV5qhxsv1Fd3YcjzvrykUjvpf",
  "key2": "24hGh86MNaQJqY4dFNydVeUv9TnPDVX9UcE2H6yHGJayUiwWT8KUjnPKkagW1qhm8WyT3L3fHkfF5pka6v4WEjgT",
  "key3": "3eVHbGeuW2v9oAnM1amFHCZ7k27vYhRg67nWfp4QcQc8NV1R3bMV8uPVk2qAnKs8eyXG2QsB5hvvBdfmBo3eJkMy",
  "key4": "2BWB1yBprte7y1fpruN4Pxa4Saq43Y2BDxeFGCCAQjwuD9QxwhswPpLq27j4HYLNRUrBbez7W53ayKQa7JdXnm11",
  "key5": "41uS71vz9DBoj6bHEq7H44a2XDJDMeb41WLNBJ2kq9KJoBD1xU42kZyXcuS4fBfsfD8FDxkh7QfNmn7jq26jvWfg",
  "key6": "5sNDbn9F7GDyUAZtjR2gHnUTSvapDMANieANBBrbHRJXnjiCsfCAPbv63h6Nz8SoMZs1rNfNPPcuPrzAfUgfsz2o",
  "key7": "5Yix2HqY5x3Kuc8PXoPrbyNNrapBmixCQZmiSBiqcVHfXFhpy5Fj4gegQrtbJyYbtqUCJJrF7iGguwfNM45t3inp",
  "key8": "3o68kUHsntoGNdmnrZ3Q36pfc4iCYVKoA2494DzjWAXWDZvFR9h1VC58xKYohdNkipQ6Wk7C5yKRidRSuGmLuD73",
  "key9": "4eBdUehR5Y17wxa7L5EWarfVkpG3jUrgBwXVT9qQohmUk5345bn3vjMZKEk8VE4A8cw2Pc73VJprpSYewXMLFfmE",
  "key10": "22krSgQCg4yrYe9Fx8vv444XoHe3Za99GdViKRMQKxs76wAYCHhhPrUvSAHJB7jsApu6X8wMfdnhUenuyTkMFUYN",
  "key11": "2LUU1WSKoT6tVE3EGx4DuAM3Y85rvKMeNez9CqBxfs29y8XStW7DPoW195sr8JyXoFmq5SeRZwHJSUqj2ee8Z5c7",
  "key12": "MHJMAqSvgXAuVsHMaAdXAC7noqoug8qsQ8jXHbjtAPmHAYs3zKwNdZBaMnSaTLRG5iTMs8KqJ8qS6x2Ft3vYfuC",
  "key13": "ui4cmX9P18S85ts3dr9xm74Ami8fqW651xTkuupEEEzxJhoMesL7gBcdwouGnLkoTjYtnhr2uB3cLTGvtMs7ekm",
  "key14": "39bv3hthPLw2wadh8DA2GbFUVNa9hs2zeR5sTqx4g2eqaPEo7sWAaFcUgJEeVhZFJXxBL1yXGwwd98hMymvBKutn",
  "key15": "2YUK8aFni8bt1SnFkuTYQbXDCxsNtXS9BsRuNMEUaw2HQ8eb1gYAcgokqigtYzEisPuMrFJ4iRBLVq1H2hxSHW5G",
  "key16": "5qtK1864JxYSXtiKd6PKi75PHbLnC68yuYTwXWU6dHBEKFZQDSJ5d4RXt8gzNNrdLEm9fgkbij4hewesqsQK4P5v",
  "key17": "QsU8hxovCPv3BPPBeeop3CSubouFtECjWnYcZFN2sXBSryf3PfCKEL4VvBdUoyp23gockAwUpJXTeQVyCrNwspy",
  "key18": "Ah31P4VCSMrbCJ9u5cJe135EP9ukzXjtb9xDCvMQ1gnxgT7q37ooRWKmXfRKyMdXHWGyiZFvVkUfJ5hB59CSNj6",
  "key19": "aYuSQgD37zf7LZQ59pj7VDptg7n6msPF4KAFACkcTYNoaisvUDAaojYtSmJhpgZnxt9sNV1gVZdJhA9WzjJXhFB",
  "key20": "5GUfywStHdCmtkTNZ3qaQeEJHZGgzGAzFKm6kLNgD25fsSoUhFE6YikzLNiQBFtXVEZwVeSM53GYoDcELEPPLhvr",
  "key21": "5SF6uZF3TtyGnR3mkiV71Ye1KyauPaSF7xWpD7okFTiSeqsNdPxnyN8mhRv5cUbH3mvmnMw3tQPtAmYjL5wPGthZ",
  "key22": "5MwRMgpCVWJHj8JpuKuKwaoRAK9EHmeNgXVj7GCCittqhAvZ1zXSKtd5PMri9VDh2mSSXstnrvZofRLSxPvmeMVb",
  "key23": "3F7ofm4mrK3qciqAhLkh8fH56dZZo9GzZ5PpCUni9Cc8zXcZsMtgkUywtdpFDqQnjjhYwrPQJT74ZS9dUDGvXgBc",
  "key24": "126QL2jbb4vNggewUyqqZcHEpczRnytVp346StbQEiLGC3SPZ4T1iGtcexAT1fY4hSJWs6btb1zqPxdRyzGyUWxD",
  "key25": "36soUV7YDeJgrRfC3qgZmrAh98kWGEH9EeXr3LXRX4dh4Q2jmmy2m5t88itgezMAkrusDFoFn1HcrSYzJJ6zTW23",
  "key26": "4rGq874MepYedbyAweXsHcPm6ogKznXhejyS7aazde4tKUtt4q3M2n1MVWHA5KTKtToKxVkRmShbFt5VhzFXigUn",
  "key27": "5ipMTTLsncdRTiXk59zyiP8W9z1aRURewCydQryCyLae9SWVkeam4N7zoBznZZtkcpkvPp6H6G7pBn7Xb7EQ8aU",
  "key28": "4kiqtFGMTeFHRb7ce6oDT5H3QnS5tf9kTH7zXt3qDmq3JLxq3MrB2N1zvEjDuinVdukaEfc4JxB8TKyW4uGjNxSX",
  "key29": "4BhY8L4N54AftWJ9CbGTStSX2cbbfZXvxdsuthkztJujYVGb5SMLKK5Sfi4F8kibAhFXhEKib131SSaCrE8fCCev",
  "key30": "2EMVSWgzSE1DVS7BSygEWbGz6AhYhUf8D4sciSwnpVEwrLRXYT5LTuRtPYn5an6UtdBdBJTGAGLx9RtYC5JZEucw",
  "key31": "64XCVsnawjkf8hwjjTdHmwQtVQPs7Dt73MJjifF6Pwi3RZ1f7jn4JuES77sgLHKdMfBNyftnRcj3S5BZJQ5wLnJL",
  "key32": "5xo5QwKivtE8tot9ysbMm9LEvaXPNou5bCdWDMwEBGeN6dGt9jP7T4Sbef6SBdoYCeb7UEoywdVSVFKcEPMPGoMH",
  "key33": "3nAe5zwdGhaP2VKAjvn9WnoTNukx1CULH7xg9wRHBVQHzJvSXqkkVGJo4aU289SiZdVLFSQBWPcZWmcSzJC1E4Sy",
  "key34": "4chzaAjFop8DsSW4WwcxJrs3nRuoL5jJ6E5JmWZpaUt2Ub7STD1pxgTnZJ2GDejZQz8qhE7WTuMKXeDgQNhqRGCk"
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
