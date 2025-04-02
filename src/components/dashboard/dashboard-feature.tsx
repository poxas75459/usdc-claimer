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
    "3Lc1moGzWLRZTEj8nZfAojVWMNaVGfxbHRPYeMPPheCRprwSaHG7uGmbLphevPq5Ckhc5GSxazTjy3S8TMM3hAGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P862aPkwXbTogjSWDPCEdZLrQwawwtPCvpHmX2ai97aXQZyGyfDCnaHWJw4k6ub9jAqywXpeg5D3iW248irxwpx",
  "key1": "233UcZ55jt3vwCv7WyjASoKi629amBguZhNnMcmy5sJbA1N57N9ZKSJmXpLScWG9WKNZyFtP5bQyj5UNLSa7qBHW",
  "key2": "nPe8U5XTTy5w41K5VUG8W61npXwbsT9k6VdkprFmuw3VhZxf4xQ6uHdhz8DTXFtRQS7vk49izNwhim5UKqQKzWQ",
  "key3": "58iGhX3wmn9S43XDcj9AgEqmDBm14vQ8ESQY7BtJCCbjqU7qExKcfcycoRxrKhBz46gTsjWdwXPk6f8uGyir5sW8",
  "key4": "5g4X2ANNCiuziR4MnXi8PjwZjxaKLEwLeH3bMHPhHDz9fgC7CCYJfUgJprVVDjStQgYQrVGtc1DshwwnTk9g5kVp",
  "key5": "21cDoRoQXQ3MoPpT7ebHGqrExhSg4L5r7M8c1DYWsC7BaFEf5foCy6Q4sMC71Yphe14AErKdKQzN7421VPdcxLdR",
  "key6": "CsLaH8bUKL9yqg2uYyniWYiLY5Hreoqf5k8KsLSGFwnXrF2ZRfQ4RxJ8RX39SBTeEq8pkaBJ7FeyLVW8Vv1NGex",
  "key7": "4tVvBYjW9PNqZRbmAtdd7onEkpNrvaj4hNw2xewdGQaugUejT4axJqGxhj4HDVBnMSZ8q9MQQKSsiP3DbJyZ1mm9",
  "key8": "S8ppB1QKukvbCYY7HZQF91eg5oLgmWM1vTPU9pYbLrLPyH7mL3rgjHCYtUSH3wGzkQqAynaWGPGVcME8a91GmVb",
  "key9": "278LNes76ajKcuPBJKJzt456XVoHV1HJRkn4TriMVsrrHAuJETEHUP7qL8Ni4yU224UixMCf5iLXjV7ek6kY37bs",
  "key10": "41ZPxDx1B5D121sknyu1eYtdkasWg3KMU7zJRpqrXbn4NTTqG25bNNzcE9mJLBULooMHg5659yotE6hASRNo1cwN",
  "key11": "4bHXDX4XpYH8c1ZkcHrbUdys52QexCYSQDcz7CBXd2iFwQ3fGo5zK9CWLfQhrxUFK1LDjcDWXFzfaLkbappnTAFh",
  "key12": "LTCBf6GvCxZbnyLyUCVYgoH2mitfvUS7JJXnQbNSvnKrcFvG533nPqLkPBTr9YafUyi15su3fxjHzCNcB595j24",
  "key13": "6338UuQS24qB9Gtkb7oGVgs4kh6gm6DdHf5ifaWdscFonvkszDe97ZbUMgEa4f7KjtchSXEvXsEDG6wsVdSrU6hf",
  "key14": "a3pDK9cAB7AGxWxXbA6umHV1fetp42ucgA9bGRDJcpUFrkm1w6L2ec6BFVbpQaHQK2vnCd6BZpz84NdB6hxAdRF",
  "key15": "2USEEkCkTTd4T1s4H8AoFuG7D6w5hkVpotmvBuz5VeomdhZCKAjjXyQijyRyDukLn4R2pw5dp3s1KaGZXjU2cGac",
  "key16": "2rtq3tCCCA2nSBnyV2tM6xJ1rAoeaeqsfuDbjhakKihxajpBxcgoFzWG2426j1vEteAVF56tyS5FJEkF42jp6ijj",
  "key17": "4eKfjay8fYDZLffjhfRmXmPchC8121tpjNZeEkbRG2XkX2rqt5S6xAAf2KpYtdfaMZNCyHwZ6wu5J2kNtnQJSVgC",
  "key18": "2n7uwp2wb9GcNasPwTZHWK4Q6eNSWkXoGusJD9q2bB1e16UHQnu9kDVwhy3bmKqCfMuT26vHG52dYB5pEPdH1uBh",
  "key19": "57dMEwBJnAACWr16cCxwZJ1pAF2RGSnApk2PpuRbLSXAEt5hWvbEGg83xYGoXnuC4VNoqF9rYxtD9NUo15dCXu81",
  "key20": "3ZKMCxuxYWTgndJg9LnkFs4n4fhbcfWphHR7BB7kxNQdD7c61usavoyo4eBomLooNb2hYm7UtsMUzPLfQLfSJbmK",
  "key21": "5Z6uUy3qSv3vAfD2Xqk76mEFdGXjuFQM7V4Gk9nAkAdJwfcZ3wfTcS2B5NHHRMDQNdp79jJNWyAWotbQdPV43GCL",
  "key22": "45FhZYNpJXmdmYdzHCoecr1fGvkWwTuPTQMspyKUCXrNVjWajsGxkJGoDyNkAiCuSd7jbrjpKLcQ2Ar3hdUN4UYZ",
  "key23": "5gxpFNEXjtEZAfbJGDXUSHmvRf25dF5AhkLCTviUJmGgJd5QCBjteH4xKrTNM8Gbggju3ZuuUbiZo3XTLS6oi8d6",
  "key24": "5L6JZGWFHSND8hNWqKqZKqx98ZiwuGHzo6hwmoSCC3DsV8G8uE5jbTdzvD2PGeJa86U51EX2qpXmmMHoF33s1Amr",
  "key25": "5urxSCoM7nDp8SRptAzdBcxds2yHx6eJBPRDRmcArFkSH3NpCBWAcX8GTGdgDhEzniwy85qB4iwAYVHSqUt9xJC7",
  "key26": "3KSZ5ofFDB2UZoeBFFmedbMyHgWcYicQYaSLvnfQ323RnvkAZd1oE2UwqzCS5fAN5VYnuYivF8jR191npVeopqrA",
  "key27": "KDifLAg4kzPkVn6q3xi4CwHTxy16SX2JuJdbtR8DWJPqVukzU8VyNVobL464JWpxb2doYqGGiS9ABEezj4tecFu",
  "key28": "49a6NfUXTmxFHw16uvB5umWkT9qG85bTuiNcwLDgduTDoohKNigGQWderHkcimEXPYn6UjdqFAWY3tspDxBJHn3W",
  "key29": "2CNAN7G5k2heDNhNFDSCW8YcQ2v4EBcRvZrPWp8TkrpNmFND9yRAWSg98jxDUWg1qA6g5cvt15zVsTUecRoxBLWa",
  "key30": "4WB3uEgxyMw85HWYP8k5vEx8wxsbXyQKmSGuSvq3qRuS84nDxwgXv9nvjZ912LijGoSJy9tMV9VKrQhLkfdQKBB4",
  "key31": "5MCYm7zZ5dYrv2PM7dybhLHvHBNjY9ZmJ5ZA8iCv1JwfspKdnGUrfbStap7w1Z52d5doJZHJnvJq2BcB24qhzRw7",
  "key32": "3EMh1Hxud3mbj9Mu8AAc6uvXPYbnBfTzZzMPeKxUzoWeRok9U8dFc8CygyBURMcBWgYwn5igFojYTP5KgPTL2R84",
  "key33": "ZHRGZqcdaWzem5cSwYoUbbr41QGjkzPMN6jRD2zLqLhqKUcwvk5SV8Gm1ESpWrC4oRb2QPYHwnQFMVPVnmEDoXZ",
  "key34": "63inC2fButgwkhzd37h1zxxUDJsUGmz4R8zsRdPy2uV31HSjxPGadfC2RJdWVqfVW8VJJ3Bi9gPo5AwBSh1ZkTPD",
  "key35": "48os5i5mDqkAv5YPhEDNZjQtLgMbzZFegK53qmAvdznLWrWV6FtvqNz25TAx46j5wgnZaTjJVPTTaDgwvpvnQJA",
  "key36": "CDAZYTKECKdJtoFtHJsXfSKxXGhG4PDNsCf5rMrFsSSwNirTSiXDQLy4JZiPPt7Zn2KJSU1ne8hfZuuyazpq72p",
  "key37": "3A8MeegzJTWwgv6VNDu7RGEZDKFU2LZwR8pKN67ijMwDz1oHyRVQoWZeWFSn3KTjqX94hmHqSo5tYtaT7B6PRh5z",
  "key38": "468FcpNJMez6J3ZZqFqA1VUBFCGWPPFJTVKnWdC1Q8KLoPB4sywZdNit7TCNgod5WMBdEdxpk8WzbBH6K4xvM8ci",
  "key39": "24jekV6WYjYRS5pPbFD9ywPY7gvGVAMxdrLXpoLCiZtrnCsXR5RHVDabxCKbvLJMjpsm3yyfkxJJT3EaG4n1vhmW"
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
