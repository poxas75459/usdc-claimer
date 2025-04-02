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
    "2s2W4fCydTrmQjC2kjtG4Q3DiMCoZMnCk8HCkpTWwdz2V1VKardHMGFoUDDWG9RTiZwmT8Wf49FmevFdDCHZ5stS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zVunGwb9zYMXLyg6EXYU3GNk7zq9ZuD6LJY6kta8y4f4w34ESXFaGTtwNNbg4VGuEGtK6mbfzh4Saic16yFPUpd",
  "key1": "4nmJuPebUeid2ig1GgCUkuSRFhyTSMFStLyj91x8fG8cxxTFh1bY7sf4X2hHKAqScbPwTCSEfgNtp4xpQnajxRvK",
  "key2": "5cK9gKHt1gn147bGzwwWGtJeRTjCygmZDpYnbBiWyzfKP7759EmLD6Sh6G9FhSv2WTgPQKBKhWr3fwdgZu4sBnZ5",
  "key3": "3Rjufkg1QXzbFXv4XxYPf3rVng74pnwqs8h4Ko813N27xaH3KGQbVV5RP3gBssFvLzyJTAkPJmZFStCZj55Ucuf5",
  "key4": "EiEBbrRcdchnCZD4DsEjbPWgcR3B61cpzWpxnbAH7xk8W7Cb7XvArCYVTJb7pyBEAJ8TehhyhduV445bvNTW37Z",
  "key5": "5KLcUp7xFe5r3TuWC5UJQrAB4XtyLCPyQTQQokj5URNDAhYWPBVwgq9uuwg1VxnuUTtHuCAKf8g7QeDiBkFVzRtQ",
  "key6": "3QHWg33fDjUrsMjL52ifcseQ7iJhDDSAJCCNjphvfAytMooS4USD3jndUPLQSqoFccTL2QK3W1XDqF4ahs3dSyZg",
  "key7": "4CwGG4h6T6vPZht8RwBTPMDNuSaUKEwpyKdxwE78P8bLpDzhRG7UcTUGSr1thqDRHsJVAPFkXSSeFgffkqxryW4X",
  "key8": "b1WKS1KBiyGNhhu94g8u5XACnpJ4pkNSGZQ9MJ7ntowAWbgqPDKyFRpe6tJVq5DbazVK8Ysqfu6iDY51AQiJc6L",
  "key9": "y16sJPoVgR9DZGiqe6t3gTijTDycp193cfzyrrg3KSAK8ndo4U4hdPkMgmssvKUUpwr2HQb3ZVCKBrG7RmrxFjB",
  "key10": "37cZ4FfS7L4hD9kZyKZ6MH47wfPyV48HJ4raceURu9FMfQWHxxMndhaDnrrfQ4KKzqsY35d3d5zbLRooQ4EvM9Wj",
  "key11": "5bSvKRXct9PtH4UhWrgV7AiaCD37hnQDQxS77WE1gGoZBGi9KePvh5AKrZwDc5R6q4qAu8RPjKTPDvYVosiNxygw",
  "key12": "4XdBApcGRRwpokjfetZcefooZPsZNMhKNTMo56dA8GKzMiKh5eJZ1ZZxxJYWYrvDt3zEzdtHNTZQjMSmgzTvdrTZ",
  "key13": "5tangmNWpDjsxug971Niifw9S2C8ERWxTdJXgYCHFGFMMienMQiAU1wDbo3STNLEAquAocpyGMwGcTJWZ2UWb1Qw",
  "key14": "4v2nbXeX74smsvd8fp22oe9vkQq2RQ2eWibjLdbzb6mkoi3xjC9yQ2mpKtWQhRsxiqbj55nAHKMYkTZV1UL1FV3R",
  "key15": "5TpCxWymRNw4d6SdYVGXtMSArxuNLc7uPWMwzKbTEboYJwYuiHcUcur6bpNDqRBgzqYbvwuAuqyBH3cGbjirhjZM",
  "key16": "1F9kCEYUTAfJAa5wz8k1VJzR9yec4w8nNCoAgfeWqbLFyqEuZXcJYdFJHaDgvQWSPc8VXx34Th9wz81QkHuxhgM",
  "key17": "5AqwdLJkafT77Qrhpzp5rh2DW9wbih68UgsC8aXtSYsVb3SahH3tBYNpXDoJqrkZgBAdbiXvotHnDFg5qmSq29fL",
  "key18": "qnByY2ikQT3io1BMZyQRAqTw1uaaXqwo7DYQ4GK5sbyHRG65FW3qPL7DBjBsXDtu9SXMU3X3sdRAxG3UES3j3TR",
  "key19": "4C3Ybj5nEhEpEuric8c8nuSRiBYzdZuA2hPhnaSA5nKvLrfUz8YzuLJVQUwmzHj1WHrGV4pSKN7KV7xK7zyCZNvt",
  "key20": "jHkagsYLHb7ZhHRukERXZ27ZJnqdTwjSMAijQfN7yLKBLP3PUNcKZtQSS2QcPPJ6hYbws4Fd1mkRryBwrPPkuYd",
  "key21": "3ardDsvU7BWx1bFgoKNNh2iAUPYMq8RdyoRVuAAer4vAUfEtWHE7PnE1CHqFK6i5YHcj54Q8DzE6WrxYAFDKBcGT",
  "key22": "5pRkJsygQX89Tr7fDYznTnRYLomZFSMfkUpyDfKYNsnK1qsv67sedu7ZL4civHm665zbM6KRSWYhsNoMhHc33ahv",
  "key23": "CNypJmVZoXAJcno4mYFwq2ASwKEztg6j9Grd3txyP2ikmfZtL6d6FoW2aGijzior5PW59bdUenYH48UFyNC3qKm",
  "key24": "4UNPy49WpRnTcjTH7DMS1LVgWhdKY5dYcuLZSqcAJaDQUE9otCJd8EJjWoJpMcG7fBQefZDP8aAam6mrUZZUrA6N",
  "key25": "24bgty1GoLhoM1VDV3aryKHzqxah27ipTTyRXGhhYRiB4KLTSqiiUYWzRyCuURWLphyjZUYDX4CPGvgCaVZs2Xdw",
  "key26": "3TZvjngboRzYP2XtkUXXm4nkUNurJcFB4xjjv8ThbMeN6cqG9urY1vzxsv2SX2XN9wogfem9Pf6ZzQAb6htKBSnB",
  "key27": "5QavMwiaZrZJdoxgtDDNSzwyKLv5QHL9PYxW5YXqtA7QptSBQcypga2ZUuGi1VEgbbmaGCXGetmVQBXcbD1rXStE",
  "key28": "bax7xcJi2nCNhwaoWLwyWXQp14TRShv86gEebRqSQHD8VPVsySLSAuf8itTgooRJYMT4miCwLELbF6sQmcajFCx",
  "key29": "2NPA89tsf7dbTDD6rPpriLbiVGxo4spfQTBhmxWdUgZB1gWRLkUvWwXV6RmjjVWgToRbdCoBb7A5QnjUh328sCCY",
  "key30": "3GyKvZLjUUSpdvg2ANMVVGahuSWY4qY1mDtMrcBmCbczkSog7bYPJ6nzwPkwk76u3syrvyYdih8gLWdG86Bjr7Ve",
  "key31": "3uqhB44M4hX71ntusBHXvwqBQhS1Q7hgxmMpcqGcKFvo47NHcsMVhjKttU2RpVw3vLtxHYCsQUuyvVvV58hXQoaV",
  "key32": "5McXkSH2W5gyHs5ew4GXu1uCvi3LZY7DyZtX57LSPugv2iHewP8bFAK78mWdCw7jWejaHrJVPddvo9Jc49iczhYR",
  "key33": "5hvrKfusk1WEW4BryrQaJyDoCALayCya9YY43ZJ8JuW1BJ4zL1yvUzGqXDBLoUMqZHPdaXvhSpVeh6HwxUWbRGFP",
  "key34": "5arLuT42vBDroAfV8NafaLDqbccKYmLrPMr2XxDyhsbWcKZKChKJbhVyctCNjkvPCd8o2Cit37NrVUAAceSv2pZp",
  "key35": "4FaaXdemadyZQY1b9X8thmkJpjypGqgHj8w2VH8P1vPmSkdSbybgUieCEzKm9GtPg6j87Qm3khnYvm31qHNpi6Hv",
  "key36": "4ahfEhDi95NS2ZMuwSoENiksYNUciKrvuZeZkCRb8RP85z4ejvvrKxuDMmMSaf4uG1yD7xcuUJoBRsYxNUBa8iVH",
  "key37": "5NtBXtC9z7VWG5zDxQf79kFiMHBk1ShdjgF9yiabyoG3y98VPDPUEL4M52Mm3FS9DmaQur4iRjNxFxQkoK1mao8z",
  "key38": "kVthimAGXKLBJC9bYvB1Z9TdyGEqauQ3hYoCPodDcEVmAuDVJCZGQpfgHLn65566g9Pjo3ffmsnNgvNifmvhndG",
  "key39": "4WcjfbghJaUyrsnkfo1EVS9H6PJ7vezmLZELhxaAh9dTEPQW8hWhCnbkGe18paHyGQS4oFB6bMtrvtfgxbV384PE",
  "key40": "3BuCTELNQmrm5tgVQhrWqfLhxqs6bF9SJmiKRY9FaRMdfFLpPQdhFZKjZkozAQMXUjNTDg31r9KYTLGLJLSyUXS1",
  "key41": "4VA4SZd5qEfqVLPwe9Zxz2B8191hjgdNmdAsbpv9tGbfwZDiiCJKcgxV53irmT5ZiSRq1QcAfL1Y2BYN78jePMCp",
  "key42": "4feSjAAXx37Ekjr7hmXuW5eE2dL8WMcA1hW2BWyijjKnF194vnnmDAgNxQw87Eg3yjGcVjEzShRxdiEFULTSrfcW"
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
