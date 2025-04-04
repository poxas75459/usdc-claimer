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
    "58tb8nFExmdu9qUSSQ4vmTgdBEXY1S5aAJEeyXjKQQ4tTe6BXYegrspQRVvF7XwScBxK3NbhJj2DLZMMJz2HmbFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pFsfPNTuZYQaYfTA4sehL2rVfnZUMdd4uBcWtUB3p3NCFosqPbqjJtQpy2nE2jDVN2Bcn1RJTmwomRCo9Ef11jC",
  "key1": "4bwHiw1Bz3UX1JuQpCnabARs1Wd8PN7F4oDVXsqMKM5ywVZTJHcCMm2LuxHzY8t9TmaA8W2LKf34ZDqkX2XbHRkT",
  "key2": "4njs3WBAgMxTfcC7dRDcPy2Wd48412LgXQHzgwuiQcpRE9mAJZtrWyYuwnx8nUJkgisjBeXrZneRiQkSYqtYaiaX",
  "key3": "dz7VBDxwXM7D3Q8gfzwvumLegrwriQRKzbL76dcNxmz6BiXkFEcX1caigB8NBPYmuFuXVpWLKxqBumDfqHVFCKM",
  "key4": "2pENrk7b5G342QQ2Mo83oYyBRFEVtuXHRPQHbZ16UCJTdmeYcz2oSNuQUnY4Jo3TCNHYE2LW4hfcrkXmthhUoJUx",
  "key5": "5p89EhKzs1fiXBLMi7UZhz3vRDBvNUn3znaCcHrVR6Eje4GGWSqoDWmr8sj4gx9VZCJq9msKQ9WXGZc3396TPX8a",
  "key6": "4ZwWRZS2mh1fUo1gBVeLQGYZ63y1K8yRTHqohHjZq4L74vsUZ83VCTEm4rn9w67AHLauHrZEBVucjtYHY8mP5Vyu",
  "key7": "4L8Mk2aqGM1x4YEU8u514QCB8Jjz1ntoMfstxweP6w8fDjige18ozzacLQvHCPqVwN9Lgh13hYJpc6hUM6PiK5ir",
  "key8": "591obdLAKhseqCRuTF3a451AsuGbEQdmgB7hrWwPz7AEta7AEGSHXdrmbtVwB5LEsNPCLzzDNg79kUzizZk9srHj",
  "key9": "4R2iu1kXY7vAPMy4hj2CqLxqR1ERYrKkgiVp1sRWRjMgt6EsQYtecZ2NdDn622x61zwtAWh3pEpEDF1yU7brSWVD",
  "key10": "WDk1JmimmTu9vgnC6qunUyQ7Gg6kBgepX5KTYnkzUtbqXUSv9E8xhceP7kQuh7LHD3t7CXpzAP3ZhKxwf6thC3u",
  "key11": "49RMXNEV88QRAbr462tcHgYMLGW3SPrWMZaSxGAi9uMEUagdWSHr7QqAyLnDSw72wyxKM9Y9eoXa1KqvDhnAALY1",
  "key12": "4AzfhVEUYR3xAgJZ44Z27J26w8DTurbqApxxLzaeH4tfDNuPEHc3itvaNjSNjnEqf5Qnic7aocuEr69UJFoLbWp4",
  "key13": "5yFruMZEjU5GKANuNV76sds9hbpLQH4YV8pvLhP5dYq9whWk6DVTZ1ixQHDsfKo6WZPLMBhLEHgwu92ucJRkvYcs",
  "key14": "2H12ijW3bdfAN5C3EvkerEFSYkdMQf72QWT2QYjStvCCQ1spXDxF3aNJHigXqL7H34KppdQSoK5kdTPjHRRuxbCs",
  "key15": "2UtqqQEq3qoSLTHppeu42BHDGH1PKpbR3gpifp3MQeSfMdoH3ig6tSTfLP58cZEZeHgQKtRivQiBFzqFWEQdsU1Z",
  "key16": "31wLGgv1Yp6r8swkHfzYjoQgHkL1RVEAVrQ5QwNFgmSz7o8Zgmfc7oqdJv6wuCZT3HfG6z7UCocC8oGoDWab1g1V",
  "key17": "59fhjZGeGHsVi39NwnpPXTjzbTxudLY4NF8mhH3Pb6vsfdCRcLvU5XzEtGUhLBs9DwgareXUjijXJywbZXNnE6u3",
  "key18": "nRExia9CFmPcf6eQT7fxV7AWBAwqLR94xk3kTMFCSyme7Em6MnXwmaYW9V4CkcYT3SQq1eG3X9hWdHJtNpa47ky",
  "key19": "4bbt8qSJnnMJmYiPkSvi678fpGt4CuCuPPpDoPyVPuzBby6muYWGXQrPohQizo3qdGHC7NxCducX76cFAXUvt9JA",
  "key20": "ADhZXqxbU6Lg1PC5RfCycwvHJxEMzxXvGNryjZVWsJaLNMNLtFKUKTZE2KbJdJibigVSC6Hei8vmdwpJ3LojctK",
  "key21": "62uztsqnjLnERmZvajzCi7aoJr4UNyQFofPt5DKTiHtfuNokaHDQNC4EcV84fRPr6hnegbx3jb9nMDSYFhNsmqJD",
  "key22": "5RDsJy8CuXtDn3qGBBMQ373Pr58hDzVsikMwSzD6qRwvq6tcw3FoBeieHLaP9ZSk2R9cbv6rhBDprGtxMYsE8o6g",
  "key23": "3EAr1bV681aLdRoRXro84zu7fSuJQtLaQshQsdqJBLX7AYiJWdfHqq1oLv72CVMrSafh2Afr6mzLVXNcaRzcqV6b",
  "key24": "4uf846sWep2KFMWZvYKsn2qDXTrXhXKA2dGb5Sd9vx1ynKfuueonFx1KuoUXQcTnGYgn8vXAwqqA6kesEEyp4Ukt",
  "key25": "2ciQnNepufvpoNCrKLytwz2ADRNZekjxpPZfwgTytxKCxzpFEpbag4DGDRLr6d5bWTESZvy8o8BfE32EPQppfN4r",
  "key26": "2i6VC2ECtmbpgU26pNpN1hnNYnAuNMgcRsjdqWnni4Do4sse6L8Rvbhs3DEhMVukPm5u1Xc67NQqY3XSHzLPLEjS",
  "key27": "3gY6QUNWYxrTu7XzwDd72hemxuFyNrnAfrbuvqxqr6nNa9MNdDs3MFvA899b2aHvNyzULukiRSSP6iEExHFyh5XV",
  "key28": "5M8runQowokjQ5bUg9zVuotBoj4R1itybXQXP5tR2cPdnC5qgkaMzKRvYcYkwpcRY9VseAKcYAYMDYjba6NaN7uE",
  "key29": "4bhtBEXqiSZemG8DYFGvXM8gPBjRcHYzde9ViYjwpxTuKVg593uc257XQerTpfZCgyV8FcQFtbemUAac23QG9m7D",
  "key30": "kP8cdd4ugTQCauEQ6qZ1B33JNRPpp9P99zykq9pmv1tbB8ukVD5FWqJDpB38sJgHVr4bWouucVKwbwaJbv6MVkf",
  "key31": "66sdzH3SGCpTuGNptdipHJaw2feWDJdcpT8ykqKKvkwFzpyPvwgvski3jwTbqKLWeGg6uWUzY1Ef8ugP4wRNjYRs",
  "key32": "5QZ889xc3zeSYw9JQ2sF2MFuA8syJ8ycQn1VApitBvwSCwhK7sdygSWCRzD1A4W5nJSDH1To7d32gR8uQnRU8bww",
  "key33": "4HsxQN1sDgQJDDdRy43zsWQ9VRyeU4quwzBYiMB9jiCDzvdUmwXd7e3EAhrAqonWT8ho9T4W6puXCVB9CADtL4Gi",
  "key34": "hj5PU7FQqh6uer3L7dYSycdRtYvmmjH6f3U9R9WwgyLWRVzxmxQeHZcWZBMU8vCs73scWiLthKYmtbSzULwRHwc",
  "key35": "24piXmHqqYNpFatEj7w2zYsSM1MUYenBR2M31cS6YFJmsRXrmQ5L3JbP5VYv4NogqC7aGpaPtv7Z2zReq2U6pA3J",
  "key36": "3vMXvkhSStoT2q6cTS9B94AYKidALym8RWrqL5Uq71zZh8MmC9xwtThRfdwRZmTp3wCY8kineTtCVzLFjw8Bu86M",
  "key37": "2Wcjf3nRHHbNMwKobs9prugnbe9z5eRbsz5sKgksR4k9347wAQHQZ17aQ6f7DMuBC9jTDqW1228iRiEKHknxtvwe",
  "key38": "3BnVXcmaBYvgcU9imVTnkNc6ETC3U39BDUGvaumcE8W2DZSHmwyhJxtaPTaotcvxchyHXMRmEiEKXGeFse93pPrH",
  "key39": "5My1hS71tRnZoFuyP6HCNopm5gejAwqSpzCAjvJtwwgPgTtKAjXrGfV1Cs7LdZesbu6jqVrGMdHwrELayXcjgXWT",
  "key40": "65r5dE6Hq1Sa9ScHDb6NQWPMMWtqv3M2rZLRKxJCf5QGw5sAempZqYazF23go4iS9755o9rEML35YpQRZaYDA6A2",
  "key41": "5Nv3kTsSP2E7BJAufwM1ogjFADxhYsK4CVEKPypXKzypRKY7G9U2Tp7axoZEFyuo9Fj9YM3mtmqwNwZnT4jbjdmG",
  "key42": "41t5LZ8VNuHuiSGNy8gBSpE3ZBX5E9i7GxEqGGB52ZNafdzockWtV36jup7aQAB2Y5noWpj3uy2pYBrRurVCgn2H",
  "key43": "5FoQ4QDTvP5BuacGC5izSjuxzABYukCnb6z4zzyrZAvim6DVN9YmzxATxeq8eWgHGSnA2iisTWv8LwRkLnBqbYqW",
  "key44": "nbe484uQhy282FuVx1H3ev3Y4mgVH7LkoPtgYRxADjxemMuTFyMANifdNrWnooPbfC4m34fvVuoskF3wZL2hagH",
  "key45": "anEopWXxojRiEnrZqHi4qnJb27wxgrR5WXHVJVDSyYmUGEJsu7nz2PR7kqePqorEQKpYQAhgwSN3dJowFn7wQv7",
  "key46": "5EKiCSPGbzj1qUgxf6FY77v95ZZtvWWkC5XwHaGrugAcVjBB7McViPTk17yVyMEu7coK5SQZPZm7j5qZKcmv9wDt"
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
