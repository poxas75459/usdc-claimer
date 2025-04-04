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
    "48wstfyx8hJCJn6eftxMXXrt9bE54iGB27jYoTmkikJeTzRY5hemdPgrAqMa4eUaEpypFcTjAZegri5SGKD1cF9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63pMPNrgMz3H87VVGrCkK9f9RyJeKXtV6jkprX5dGYD97P9KRHvEAALnaZqCMqVZ8Pta7fRCZPye2UH8BSjDjyMQ",
  "key1": "2noMd9nMy4UYJt1yDn2sxBAx5X4V3ppXX6e3u37Te8uRqL2BW3UrBKkX1mTakrQxefb2tbTiDJrwE1HT3MApaigK",
  "key2": "3vosN6cAjqPxhYGdWtYxZu6g63U8DCR5ryEV8jkkSKyHmjDdXKfPee3rjCKgwRnUuGrc6YKfoRDyHhWbXb39WcGQ",
  "key3": "4m3Tk3mULeg5dNB4oNzVSBLbNndjNyQLhJuzrTLkzwgtR6LJCvkzjHuqd8Jk5gFk4NFrStZ5jCsfyfuppPoy57N5",
  "key4": "5GeuPb58jiCkJCNcErXNWKuZnFfZXdBRBTJEMfbb54qFzWybkHkV7AQtxsa5vhb7vfbjhHRhnTYXRV6f2hKZXSx8",
  "key5": "21GgzCz187nVNoZ9xmn8363ZDjiewXmVF1EXNpD5BFqssFGzN2nfdm74NW8rgARkFg6ADQZHd1hUd2yBwFbtaBg2",
  "key6": "rKuBDScvbeCKT7nyWsU8VV2UW3XJLsKHRopBKKHjZYf1BSLVHBuURZxfdtpVcYz1EKM4GxBbccxncUtyuB1DMgo",
  "key7": "4Tvb5suHRqvbMjtVtjHKvhig7LXi3e2wWWskffEiJWGVTz6p91sGH9kQMycYLrBZwqahRk7GD66sJLTCwhSKpqJf",
  "key8": "2CWNrC6LMPXTcwhSANESmFpApaSxhBDbEMcZf2hXT5Z8VxE3WLSNhdY3n7rofYbsxpwpw5PYUUWuqbtcbGiMkL1A",
  "key9": "2jb1LyFyuYL431faNWLU8ENf4gz8HVQaJMnSh7xTxRwQUunXDS8tgw1rMGuViiiFHLQZytmTrkQ6oCiShp8EYmJB",
  "key10": "3creYgjTYUTYB6xM3uREs7s3eoY1jMu6bXaitfXUzF5GC2zBnPAguD5bS3e64Z4B1SRv2B3xJErx4Ei5cyJX3dMx",
  "key11": "2ZNuV5C1CRSfx24YJyPTF8rn3MLY3jCu7UAbokVFdmbreMWULvw3gy51tnQair9auc2nDZaMRv4ner5dMeqsW4B9",
  "key12": "3ZL8WkXqymWYRmWK7S5aU51EU3a1468pf2hSn6U1k8KJPgZUR3nZbBbwcSKUDGzL3WaVPVtbEZ7ayQQLhpvtNv59",
  "key13": "5Zt5wRWVJ2AHvFD21hgpiZdQ6xUbYcQ97JATa8sqa61C22mTTS5oEBSkzQWwrhCs2HWTERbXMfQDztYsd5HQNuVX",
  "key14": "3B778cVVkwF32jYjqoun85w3HwM7qdRKSSL8AutNG8FCkz8FaQM3QnZXjWQn53TzC5V5cqAyhPM2jvTMfagkJ51i",
  "key15": "3rRMRNR9DXjSkZMzVbnMVhUj2ud43njJmf6dXJsoAd2eY8LiDQv4C8fWrpHM2ZeJFJMYZqicHTPJeV2TqAQ3GnDW",
  "key16": "5eJgmNmybgrpzAHdCtCHysrKaDxR5BbswcPnETL8kHGCQoMuGcFKyQ6b7Tk3syoDdxGd7jHGENWHcExfqTCnEhbs",
  "key17": "3FwZuifR76K2hX8zSvbdgKV6sLjdXXm5VxkCePdtEKS1uS2BYQJxxYaLMBVHX32diyqWDEbeqTkoubgSDJgtkDzx",
  "key18": "5fLwCPsvEFnh3r6hvGbhPoaKSvvSmz9NZUw5URbYkUzaNS1bi7KakKJtZjXDJhZCfyFzrf4McGjvZKaJxtqBiLNg",
  "key19": "2A44GEAjF3Myo6mH5ohaFiod1sBgZKnNw9MZjFtwzAxZAUTPkt4i1YyUM4BNGZCc2PuixHG62JumVNRpCHfV7v7Z",
  "key20": "5gxE3oVgvhrQA1tmwFSDwjPsBiFqPqGoQv5u9qBxp5iQy5qgM5wfRAH6qoHA2uw4fywE8CG3wGV5btdVQaSjg1v9",
  "key21": "2EgtrZoMhz9wqV6F33pCAsLVzXqGt4JCnbg9iugACLDHQeEjZXFM769ZKvnqwtmJPNASbhND5MythnYjun7UCFCv",
  "key22": "4QJ5ZRA3YLbbJj2x4anLbiCx66S3ddvAfLUqLh1p6FuoBDofScQSzkr1FmqgMHBTAvDMrW9TYPPPyVzzrEomtX3x",
  "key23": "XpLiEEF15NWdb9WFUfd8VYJA2eTgJQkaALjKv2w9a1qLJivNVHNCc8AfmcnQ4DMo8w74hAimgzockBed8YSZ1mF",
  "key24": "2sg3FmHm3BDfkwnGSYuqoUknBewFNsSgNJKK5GiE6JBSj8Sd4srkbK42CtvLkVrWDhwe9TKXsrn35D5MizRKka7H",
  "key25": "3XcyTVF3mnxavNQgJ3GfkerTHaFKtm1fqrFVo5HZUcc2Ss64MoEH9Cwaj4A24HPJDYwNwVWNiaykxJdMoptTDmJd",
  "key26": "21qsu2z2VH49kZUma1Fr6FsnveJ7cGDr5Se5WjkcTDHDzK5rRHRSo1SM24zwKbJd4q7KSRz3Yyw5YFEYjR7BjGM3",
  "key27": "3jfhHVCCE6zGvXCg9xWzqoctrr9FHqW92Yopdt9NkjeJF5jdCiorstqkiKpVGtCHSWkspd53kFWbXNp7ZeZCcxw1",
  "key28": "2g8nMohjEKPgBFu6DaRPGNujxXg6CCZ2Q5Janw1qa5yyNQQGXjqsowBHzgXM6Hnsfk3av6xpuWAgkvBVo1auTG8q",
  "key29": "2TTRQ7MJEufx65C69VW2rfsUsujYvrgR684ZKpbpZXMTdJXxj1jyKKik4duudR6sxpFibcZY6EsehjsEAjvFbTvg",
  "key30": "3yhnrgjC76ass3xur431YBa4LP79u2wa7sotYVbH9ymDvMKn7sZacThb9pa3YmBTMJENKkWKFbpnVqpUXwXQLoXc",
  "key31": "29oJde3GBoenYPRgvPVuJkyQyQVQ2t7n7QT7Ka5b7mVpuMAghpZ4TqKYhuMz8Rq2x6aECDCZoJY4rzRuBcAvnHoB",
  "key32": "5NzqQGzoJMGxCPMXpab39rK5pEBDMErydG2RYcv39o487x2rofXezhiFczKKjN8j87qMkNqG8o9oEY6pbpMemrNK",
  "key33": "49KpPfH8d2mBqKeRnMospFCX3HpyhhVSxNXeQT2vcfcqocxN55A3SXWFtw7g8pp9Mgb5AwEHokfJ3ffAeHWCXvLK",
  "key34": "2PgPzwN5bRWy5KmAJee7AnG4Dt8h62SH2hEwdwahygZ1hCFPc15U4qbyti1BXuUJdhiXyKPqtBKAeCMWqmZVKeqT",
  "key35": "4ie5ZYQgNtExvxG28sewAgTJjkK42GrpBbhNBmH2YzdcFcGVXeVWRxBE6gmwR65SJiqW24dK8NBE8b9DGktoEy8d",
  "key36": "SCyLGPQUNbUJTKCBdDr3q4YjWULC3eNJ4RP34UaV8Cxu1sy2dihMs6diuPNaNGoCBag94spSLj3RLMXmkXSU9cG",
  "key37": "6pm7rkym8ABw7zqRR1hLY6QoAu38GJHmN3XaiSBaS48mpR52jVTZ8wJBpfTCZrRdk97SA3uUx7YQz5YEGpo6oj8",
  "key38": "3hSHeeFrbmmvygc2oyVEPSnc35Lhg8XeeGCEwB1euP3NMWW2r5yxWTb7zjbmpbkG9VSjGZAG9d9dL6mrRPczaSZu",
  "key39": "3nbCG4Zi1hycvB4VZUa1WbD9S37E1hbHrG7vX75ySJGuVHY85pUcmcUX3qUjtWWaRNeo62yZChZD42hLgAddc3Vd",
  "key40": "4yVHGakdqx2BkUjApJ6xAQ4PGqpXWvKFrwFDjoD9sM2Q9DU1VUyRomUGC2EpVaWgbbbEytKpWnGWwm3YXtNP82c2",
  "key41": "3DLiYcpX2GGz96yYsRFERDmdU7TuEQwYJBLcoYcsfyEPmzSbFUs9WLAxuED2M6P5xmrjLteU5P9WmeF8SoVXMhWu",
  "key42": "2VR9PwaQNdmjruzDL4VxvoAFhFgpDCQ19RKWv1As7FU4RfBjCNuhqSYH6NRkUwtAg5XPW73P5FyrSH67XGiQk8JZ",
  "key43": "5LgLxUw7Ywb7i72zLGKBowbwzWXi2ac2oxiX3SHVbzj4VxcSJdZMbjNgUTUrDB7pQ2mSRBQiCiKgQvmo3ouaDdW5",
  "key44": "22en43Va54CYsX3q4jx9VsXw5AAs9MrphdrJTEdtFSqTbYHHXc8HrQFWGXqPP6cRDczT1NvvmxEwQTrBBGxWbnd7",
  "key45": "2HNsrwKgw8nkAiGdm5yohZxnczcwkjiMjfc7H9vJQuYe2zoca7kwS2TipuCe7C3q7uRgER9pLJGDNPBgiduMn4js",
  "key46": "3MjR83AEstVr2eWEHjBmus1X81Bpy4qPjeoRnp1bweYaRFZmJySaU5amvdvjVbsX94YhmsYUsqkPV7PUgwdoDjrA"
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
