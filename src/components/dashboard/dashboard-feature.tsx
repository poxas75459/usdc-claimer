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
    "36LXGNy2VyzKa36bMKM52dpVC9iqmx9xiuJYtMLSRG2Hmn7F3W8NPwGH35DgXGRrPxEm1e5qBWw12ncW9LGd6Mvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nVYhoQEkJXY7nvCX96aCFChzuJxw58BLguW4PVrWTpMGxxJf7FbguZbq1UWKhHWiKbbKxy7TMKkmDpeFQn1N8Kn",
  "key1": "VhFwNtjQ3SkJXkiQTBLgHhehsgVuqeXSEGgrHCAQMbSyFb6dbVnTzNm1a43GK8tqfDD88murUTYasvKZFdZzhZY",
  "key2": "8JXCZy53hSCrVmQdRAgCHviqhQrt17aaTFjLnFLtcgmVPBdwvtR7299A3Rgcqc4zMnT7qy2VBxvS6wSkZebUBqa",
  "key3": "577urLZnpR59y6UbLJGEPVqFAKGi4YMrZC8vELa7J5yhfENF5dkY2KzRD84cuPc3cEjLRxXPAfnWb7BypMVfX7ak",
  "key4": "73rvWynWPifJLvyTbgHu5yG1bEigFX2yXiqCet8NaigSeBbGS57UCNDDEeAwBzkb2NAMc1d9e5utxy48vweGnxU",
  "key5": "fzeE2r2DZjP1GSNSKJUKLYo6H3dCwmGXi3Zyhr57EVqZ6Tx8h4KgqGCDAznseiBwHz75exuKcvwpVqCiaMdLonD",
  "key6": "4nW8aU2rkZqbi9fPo7dfm3VYquEb6Z8kSD7BunPyQDSs5X8cttQJBa1KE16ADjQHTr3uycoFUqQsUctwfn3zBbgU",
  "key7": "6q9ceNrnutxZVbHLZkXR8QNhCiG6rrHWU7ASbuSPx9fWmBPGgpjuAcR94kWPnc9PJFMnZ4FLC8rNFV2qH9N1r2h",
  "key8": "NGJw86zgBV4BbRcvporRb9VCJ1DW4D5v1qpWa2kR9sQpTYJNR1hVUX5G2eDe8br2hWoYzWX6RkGwq7pxW9FdwKR",
  "key9": "5XAKncjs1wXmBuCRTfDFe4J6jK69kF5ZGDL9ojExCwEEW7jCvv5fb78G5qpL8oUDCX8WBvLD4rxqTQW8SDgYAHsf",
  "key10": "2jE3SpeoJPwFmGmKKqKyASRL3xh23pYa9zN9SmaD47pVdEVkfiMJF8dAqmNZqi3B6oQBvGGjyiPLrTbJCoqZoW6p",
  "key11": "4f8bBX5Yq4q1wUnEkvmWzHHKF4uFQn5HKiEKYe4vYEe74rwmTQyprM2FnWEgLR7awFKuzdoBf3szhQgnPjeH4zV3",
  "key12": "27y6AoHofYshNSL6pqWZMRU1cq7sKLGm5NBcfGBsyW9VzGs6UCh6EMCCjemshTRJyCbz1pZ9YSc86nqNuJk3oUTD",
  "key13": "2dEearRCByfZ2W63wosXg6AFTU34vdR49DrG6UnLWzRRUJvREKPfJ7wTPm6Mz47qrcG4dM4z4MEQB732q95aw4MU",
  "key14": "4Wen3qo3GAx7EVL98zprDjxZWZFuAUeK5cMmpSB5kviqUBs9Au9unFoVpu34vCJNxk2FQPidAU5dNdQUkg92FksW",
  "key15": "g7jwiW1YJsbgucbZNr2JCtQ9TjJsqbP4h3thLJcbnnNPHH77MjMfo3wUDEQKzKiPVdsQJyPKkNH3B4rkcNPJoCm",
  "key16": "421GJr5Y3ZSUCjvUubBGELPLdwsvqSNo3wajix7brgQnauNa91EAQPpaNwjBRYAg5udp2asKQMEhRqF1Wo2BKa2c",
  "key17": "5Wf6He74kiD38VzwX4DTf5iuZijQDirNguw45wspBYHr3E8Xzmz8aTtFzjUF6p1Br28x2rk4aKBmg5A2b2JQizQC",
  "key18": "61ibAt32sth8sspPHa6zeiX6N7zk9JfJi2cdQvyNZ7dDgdaejs3fHfeYJAkbsp67EMZ3mtg2TkSf4UYXsEM3Quva",
  "key19": "bwsB5fiwS9eomuEFHQRcFXkFypF2sd9JBpjVh9cJHEzjbQgjna1J5fFdYUbMWiHFisZWNhDv9B2Zg8mvjfG7KAU",
  "key20": "vm8Rn5Es13YeMsyjwqurGU8dgv1hS2iQzJRJR8PynvfX11S9B2JNDiYs8yqaAvMQ2EY6paKVF5UarPHVYrkmp61",
  "key21": "4dfZDEj674qZ4VjfLuruSpoxcA7jZVUvUqDSXGrrJHdPKVwvK4Af94n5W8Qq3wvQUKRnjSFSgARqpGPrP7Ddj5Lo",
  "key22": "3LJCD1mWWzG1eafV2yc9EdQ2qzqnoA5yrTZZ8FGo6Ypqs8penFfsi124azSSrmBinBtBBY2bnj46o15eYdqPYAbg",
  "key23": "4tGZyQe3h2tD2suApd2xoQvw5WYyxWMsG7LisMoyisMohkBuunNxuRhNVwwzEF5fsLkt91rNmS9Ut6E4cgT8axvM",
  "key24": "nAZpu678LqYkUFgahqubyqCoULPvs4yEwehckhTvx1YXxywjaZtQyqGQcjDUEgCCWG2hWVAwAfEjZxGeULbfCYD",
  "key25": "5NVNsENWiiztiCoB2RkrZJWorByzmwqDvsA3aX7qxJdcGx9PiQbVkqw8kKKDWrzVHAZG1QwPdpr33pytzicis3B9",
  "key26": "3U3awuP1TWnLUfown5SX5MKK4ZFj5EymkXCtyXXmR98FZYsnsjRA3icTMpZdeUDR8dC9hBavurvdkHcpyykaH2os",
  "key27": "5khrdGDQ4aqAdkhCVDcH8KDYUj3R98h6B2otpXRGns2w58GxPYabzaJ4FsLuV3nRVfr9wP6PuFFmiGczAofc9wSQ",
  "key28": "ixGhGXWww5qjGgEV9xDMVzRmTUDdjpq9SkA3h8yMBb9jxQo9saAH4pSiXGN8fesJA52em2e22f3AgHCCArWvTKn",
  "key29": "b3tvAbKCYHiSLjauCS5G9qZiKPKsfXVjm2BGmvfeNcJ4EKadMmToXL6mDFQCRG4ZQsoVjtiN6fnhkni4KG996Cz",
  "key30": "3jDq5stsusadxorFAtXgLQQWq1pForoLsJnsRMUsPQnExDkXVDDNVvrWSoBRcwtaPGpqQbh4CRw9RE12VHRpssUH",
  "key31": "5DoPBV4JXdLCMybcxC5dFJLXNgz5ukdHNh9asM3K7XcmhKcaRhPKqFHFwoaiPdqqWQ2KRUUAvRTsyEuw51CWFbC5",
  "key32": "4Hz2nSxz5s39DgdZExPhih6kpHBJoMwfcz815TgMoFEdZXDhPULRsAa9MDoEzeuii1jbzpPqXoxncwRx3ncLUEC3",
  "key33": "2AMVhWMAa4NHWUx1fJvDZ5ZaqkrqLPYTfgFkJVJEa1DVgnJGZP3KEVfBkEYx8JXsqdtXfNBoD4JRrHDGEW2k4qLv",
  "key34": "5Mzua56nMgH5MSqsrKbYo9rgGG6w7VtnaT8yMwgER3eqzSrZS1rXLkvAEFWaGCFc2YF971Z18hw5QXt6HtTFSG7m",
  "key35": "5oWMXm2nM7GzB33BZPqf7343qakTfJBNfqYD2BYA5jpCAaEUfcRzgWnhFLp6TppouXYoJNhdJeoyT1umcPpvcA31",
  "key36": "3iLhkxEVfWYgtYsNV4bsL2ejmmLpzeNHZEc9i5yEprYDMP2Xqxto9PgB6xoh1uAXCizhzUDyHQjn8qmZvzF5cbx8",
  "key37": "3uDy5y6b8mnDAGjtPvBvNNkFx4Spw9xB1FuanbnHA5q3Q37VhP7GNmyDRtZwe2zaWcTvLAnrjh9VDPnLJpe9sXM5",
  "key38": "5aNqrBgsw3gzEx4zYBtvr1sPhm6Pj5fGgDxartiVXdCSTmGmtTF23z33NemTLLr1yocB478HxDX8CKb8pLU8BTL6",
  "key39": "3sbaNyMBFDo9BW9TUxMEwgizHzfSsX7MGRuorhr1bA9HrJ77tf4wY8e5XbHHanWEji5SMaHHrSUnHcYTMFjgx5wc",
  "key40": "4XTZtYe7hhSMB1cN3tsZ8tgBbq7dMsmLGdRz6HLMwEZ7Jc4KtmX1KSjnacf8henMC4zs15FtupHSi3BSNGxFb4ya"
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
