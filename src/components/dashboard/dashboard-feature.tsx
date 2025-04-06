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
    "4VPjM1mT2UueW4xtie68q2Qz1CtNnwGRi4GTKXK36BJtwjBjsykkxhh1ufGi6SXHRhVugFFuFyETgc1urXC5avaq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26BNzvqTP5hRdbDYgrDQDbjXnTbYN18A71m1JZngUma5QWCrUia2XW5F2A5fdbd4TYrLcaSRo22dBYDndaPBZm7b",
  "key1": "44mxz8aagaN4v9UsiDC1ZZx2wmrERKzVksa3kF1obj3bGaopuLTMRKZfu3Pibpuu1tjkQwLoyib7Yvkd5KCMZWTS",
  "key2": "oNXxX4zKsVVZ4MN6MYgzqnbg41bK7oVEMJmuv36mzqCoE6fC71JakXr1nBmfcwK6f8wSD64jcRVG1foPNLY4QiD",
  "key3": "4HnabqKw3GEJBXD27oAVEtWwtFmB6yb8YhhDarh55MZroWF8jTDsrnTZn5iFw6LhB2N2FXhnXedfqwmGXj9UeST3",
  "key4": "2xX4PkTAZYruq8vwBhDR3E8FPafc1hZNTh3fSMdDwZ3Xb1JJrgfnfdSASXCoN484CJyWkukPQwWDEhiAEUZ9Xekb",
  "key5": "3necxfxQ647XSQHVcFhJ5mpo3qTyqRrJBV2SueQJh5roWL5YioSduQssARnyRj5Y6wSvQnHKJHDAKsvTYYWxVPgj",
  "key6": "CAtTbDpF3n9UWSTXWkUcsV37zoWTqyGgBmhE3QGMPjUQGWEfeYbMyk3qADZzoiVfzxPr1ne2teguhLRxFib7X7C",
  "key7": "3Vntb1rwNyBh3epWin1ZNTbqPw9v834i7CBcGAzGssMC3CySaWgABuhB4Gm2UKuoexziE3RHQcGJTx1vuY4sDsic",
  "key8": "4wS44kcddgDrCAxtEUyLmvUqysCmHtmLFmXoYDMc3vgqDRZgXeYuD7pW9zqocYhoMXybreq3aFFJ1tZG9jD99aH",
  "key9": "qw6vppKusFP7VXKfL9uN6KDkeceaGHim4T9gswmcGs8bz1UGzRBjkL1vMuVzMSghEc61jQhrMwfpepmZxvepkuu",
  "key10": "CG23dpqqvX63SqW4JuMKFoA7ZvjWZdGRFGNCjiW8WZsVPmouvg1BFtWv9uHCJajh6nY2Ha34gEHqEpVyUGGRzF2",
  "key11": "4u6qDBV1edv35AGhEokiw4WdmfzW7T6FmpDxVt31efgXf5q9dDN2mi6hgDNdfsiMytFBfjGHCP82PBGymUWKfgeF",
  "key12": "2DmL6FgpvUeTu3kQdUNrHMqmHhzkJaVqSWk8BwMcvBjdyE5t9N8y8V1CZC2cy8ukdi4QT7qb63Z82U3jocHMj1fq",
  "key13": "74gUhJ9jZ1hSDjMeA3zWQAeLeJ3VdybFPNvw357eD1V52EAhbqCdHWueNHPftXPkbV3GG81B7jkBQLarGBF7s9B",
  "key14": "2tUuBfoAHvq3rUjRcporHCh885rTWMsPqiuHZDqn5Ff49a1zVxie27kWyiAWCHWTYDq2Kcg9uCMGtRdzVDa4xtkD",
  "key15": "5ttoEfuL7CNRSvScNyTiSHdbho6byrh2QoVoWMmuc1xFLBcqJag4n6T8iQKyZzPLHfiXL2yeoFiWBpe3pvrk5nRV",
  "key16": "5yrpRDQF5v81zYLpTw8uSJb5h2QPgWbDNW2MgievJoaRkLCT9J383mWE8RH1hzyejjzNN47uxAQWaVqotQXMvTEt",
  "key17": "4A2GtpTnq68mHwwuXBUEi44tw8zVSgw14rabRSP4f6a92LPDSHMy5Hb5xmVT9bxN2pYzEGsUq5RwJAPtP8XBrm3v",
  "key18": "5WBWaE4BAPUNBqdzjqciDhur7kqZGrHgXgrQ9xZAcpWCvtgoMH4obeWDSVngrTU2YdFByNjRZ1k34YoPLyUHyHSG",
  "key19": "4dXwCP7WVxS5zwvpRzDg8XUknfv4zHGaqVGTB9HVqLqRq3776kfrcb4uQUzDDzYtZa2HAbmB573bCMkLm7tKvwof",
  "key20": "3EZLkYNtL9NaapM6T1A9EuK8X9u1yUFfdHw1Rg1aSwYC1mcHCs8a7RcjYnYgJYnWSdTPiozhZvCe3nLsm95bzMxL",
  "key21": "5JJ7ucGPrbRNEpRUnAuS5KRKdhu3eyybL3Dccdm9ddgCkaq23fkvAATRXrnG4cHZ625zcCSRGLthVv1MwiXFGtbp",
  "key22": "2QJtKnZzQJxcBf38mL5K7AENFRzNKmqMFozrtpk2tgFuPnVak3SAQFYW52EHRbpGFooUnFNj8wf3F1r7LK4maMqk",
  "key23": "52GqiD6DLRSUx9eCE6AFRo5ESydjd3pYgUJgbrhW8CAQKRjsJJhcm7uro6UXYCUo6NvK23gf2FMJ1YVRPSzGGUQX",
  "key24": "47UdveSdHMfYkHrkYqexZu3Xt83YBhJ5zYRzPbskpGS6cHDSQwtooDpGMVeG1dwcu1qzGvDvVpzWmz2VRnDnxoVE",
  "key25": "2pPF4jZkMdJKnRra5EbKkLRGDaK95zLbrBdVfMgw8UT7wsbuR9NTbnPan3rrBdaMCXZaB1wJLERgrgjVwrnDa3iA",
  "key26": "4e8LZAJU5SEg9YoWg5GcT91xnKKZsParN8xieutvsGS163pC9or5vS5SYPGEbYfHB85Sh8ipLzXMzUD3ZekRR2Bt",
  "key27": "2nR954rGBa9DajSePfAJjr6FXJi9qidUgSxCVCpkTD3nCtZQ3j99wtuSqm1Z1pWU7HeTQH5P9HDUF6h8xLssUxbY",
  "key28": "58f3cxzL4RN3wtJd9b2RVS4vodHxyTo3NdYCAK1jMNiLvYEL2RZtydQfHPgRxKQ2UkzBCoCfTpbztuiFPrEbxbVr",
  "key29": "27LwbBtDEM9cbe1pi2ELvo5pM3GENTV8Y2TnoX1XJcfx4cCyDYRPmP2yx35sSoorTnXa2cHJ9oeh1GtfBmYuuwCZ",
  "key30": "3xhrraBetfsaG1YKquMZTna4LHixViePgCRU5CCz5fqF42qd9XD4hH9oYEWT7G81X9iEB5oifiueegzSjGgWZEHz",
  "key31": "2UZU5UQ3yeTnTvdirrJTXPqpCin9PZakSbCTzEv6b1HKAukcU8uBaSMUqoCviYeDCA1o3Un93FwxaN1mMNSdrKkL",
  "key32": "3JyiFhy9j3N3r2rzY1AqgtgM1eKDUiXaT9ABfKaATGVHThXMKDYJvh12MyVjJixLNanv9777pg2yJ7PnYEkuPh4c",
  "key33": "2iPSE3osriQVvhT49micDrgMuqiEUea9sPiUYs2xdDtKF9XeVLpntyU4jikJZ4xAPusZyLwXgyAhTfNkTjfZCVFJ",
  "key34": "3MrGPk8SGEnQH3fwu8tozY4dKKJqEMjZrChjCaUDayeyi3bSHWMaScggutBpVjcnCBEJGAmKynt9WayRUSKsPQhr",
  "key35": "jtD9s7c2fmDSnQnFb7NccdsNHL1PZpf1Jwjvcw1geGCD7RXxLJo8SeVLA2KXwTahv1DwHLxHtkkBikAxgQTsMnD"
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
