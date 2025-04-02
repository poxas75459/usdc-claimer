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
    "4avXWmXVVkrp35t85GYNmW2EdS2yFUYB1dg7tGkKmAtWTrJkNXBJ4FBH3Tk4Lxqaws8eWv17vTmtjmbc16fUqrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LXtzYJZ1KVecpmRBQ3MegXzgw7iLcgZPQBTwYjaZWdypVFVv8vcYkGsHMwiF8ETWf83Ug4FxMXc4Q9uGxcnSRRb",
  "key1": "66jAKP1FrHoVtA862RZ1AeB5hhqiNqwsE3RZwWXkLAHHQG9nRp4C9skiyd8AD1LtWY9PaF6TETeYL6E4Heq72rq5",
  "key2": "5WZkDE2mjv7yuZcjNG3n8sMJ8NW2bCfnE2ufrykwXyBcvum3fRJts8uPou8uXvpernHpdZdeyryfgiTdXHYthXjU",
  "key3": "5kP6SwYWeDiVcDZc75EhVT8WoCWA2v4pdJwPMDrAu4WGzV6Q5MVj7nzSwpxRKpVogK4PzrnJPqKQ9sqENQbL4ora",
  "key4": "5oaUp8X2BEpHU5gVjJg5j8JGLYxYzan79o87pRad7AzLYuM2FR1BpSxG5HgVBybwUNqnFNMq6jXX94uc3rRyRDh",
  "key5": "2TWKnNLaVFFRkPasDyaLzZfxgG46Aw9y988ACgHAZ5ByhR5GRTHEvxiKc35aoubbTUCAZXS9vNA29m3fmf3pxJ3q",
  "key6": "5TDvfYvb76tqp2SyDzNyFkdAXxsKDBqmANX2T5wxni6jLYFJQZDJU3J26yKEsGqeoDYDZGNgr5eg6nxXJVtsjpEf",
  "key7": "vAMYKPEK7TSnLfQnunSSYS9Lqx8uGRhkNX7cUkoeLzF1CBGUBy19nojiX1oQrJdwi4VKo8WbxxZGxUrW9yaP7fm",
  "key8": "4KK82xG4AzsU3eGLyXh7GX8BTR1yPTKztF2FCmzmjwEeJCLoZ72741CEjyGt5vJwR1PtYSwTg8M9SYKfCapZC9v9",
  "key9": "555czhyaqgjRfxhWwvrhijKE6UHgRCYPVKVWrxPmhf3AXciMWTc8fWFEox84QtRHykaMNiqubVGRjurKFzeUHQZY",
  "key10": "66CHT18ZwCNRMUhNFsNHLxHyGaduVdcJ5ZnjqkitWrLn3FPETAjr2uJRQXC1AqR7pvKTJj1aSRsR7HiKyWM4fjVS",
  "key11": "5aaJZNxfFzdEEjpVsekPNXTYpL4xgfGGK4upyzEynf2QAQ4KP8brrc826wEACAPvmuBhTS4VGtKCHkgWFV8Do96P",
  "key12": "BpM1Ac2UHCWUmqpRqV2Mo2nfAvPyfh4c9PPazTWoYngXrvGJRKPfD5zLB2etX8P5ZKm5E66DQEVaTjb78s56vbT",
  "key13": "TKmjHKrzA7L9sBNnnzizFcgq7NZuANzYfKGbeRqpuuDvWteQb8rjg62HfRabEkDNAYcnKfScLZF4qzRWLZsDExG",
  "key14": "4BkBeaEZhhvxHEsUzyZrRtSZNnf3Fb4bSaZZovYPf4Jtujsf91nioGygE5t459x2c9kaa8FbGbN8TeECunqQrZUA",
  "key15": "53X6PCWCZT6VCYcRFPtbaBXGwSxfSihBNmNV6N6axRQMfsUKBqz6FJDbRzrjozRtfRrJ5sKpykSmgfX9zNLzBgFR",
  "key16": "3bEkfWXC24L3rwA5L2wxPfc8ePXaSERECPq9u13e95TpZR7fa9GZjLuaw1nbN6x7sQXXswCkhHZVCQHfggBv6P4G",
  "key17": "5j2YgoKnNJk6ao5DTLCW28mZ64A52WK79AjCSVa2NiqymDuqYWScNKFxk6jV9YjjzNmyuZKx5q4fcYXMf3KnEzDy",
  "key18": "JMcvKwjmoxQEo9NQ1ic7hDVMNCF7S4BYXwzb3wKA7qG3vosxFkUraoL8DeKoVRPkdQxkhu54FqtPpd4QaPjQiXA",
  "key19": "4sAQGiA9qaWeLBa1hZST3pS3jSzy4F5G9dwcyuQpsoucsFCi9Y5tE2nn1c9Y77r7ghgB2mU8x6gq6y3eL1UUdGjv",
  "key20": "63WUzrcDeuqeF78vYBHAzPNYUik9ik5Z8Xp8iRdWJ3QJj2ssTdzFngGBuHaHtn26VX2i6LxxwXoPCbobYzw5XKZH",
  "key21": "3FizF6BHqdKj2aTjQws7UN4bh6UTrqTMpwAJE3XSSBv7xArSrcUpT1rjKUU8qpa9ZALYDFRfG2VWLn8jwYTYefkP",
  "key22": "4fGWZVwnvwoQNxjyWdeMB3GhsjtQovHDR2dCd8WzDfq8PFp6pEEho7M6QnKGGzi71hYqk9Z7EDjCDhqBAg6gxEgb",
  "key23": "hdsL2rQLdv7EBzk5qTrZtAE9wwVDfB8UJ3XiA2dcB8nTzssPimu7VdZtVCM52AJkufehUiEEBsy2YPgGcEzHWpU",
  "key24": "3namFLhD8ULAWzYNaETJjNKqre8FK7RzXkt3my9yLUWhyXkgrAMBdhXAu6i9p7mCgySLVfqoaf8QL4xoukn4N7cZ",
  "key25": "5kSNkuPUKTDyewn5vWJXvxD9aik4bHzjbaAsJPay76SkLSKs8eV3UBgdaYWofzg5KFrc1BExXXHeLaPA7BkCWesP",
  "key26": "2esPYQ144LAYbBLtYHfVTHfCRhM2CFKdzA7ecyicnRtMXBPcbiWgeTFocCZjaCBWYP7oPJmpkCVsPL1tV5h1SJRN",
  "key27": "5ETA2xWnuKEtYfpoUVf9ctKQTvju8P4YV3CeCwCj3vrA72UJ6iKKuhSRauvDD8SgaWmSkHaanbnWJSPTW3cHyY24",
  "key28": "5Arn8quZ8mseVnhzfeK8W397Z2KUn6SEEbyYG5RzWuWJ4vdpvsWbLF59i1FQ1DDXDV32dSs5TzwuQpq5FKRX6MtM",
  "key29": "3RFHbGWZQ1dmSYoJSJj8D9CAah1A7CbffL9iWATcLSEBTs27pGs7ryPEWnzbyZyGoMomD7jhYZwX6nuZgWTLcsjp",
  "key30": "h3f29nmCy9btA5pzg4SEaZFM9vSjXAXX99CV96Y91nxKhhaDqBnTZBPvTrTuqMZoDkxVxU9CrZwfGERNQxENVC1",
  "key31": "22v93G5YgvY299Twjfnm7LeBohbvVJ6pdNrfCAz64ud6LTxpEFnuUZyizzpMDXKfR92nGqg2sqAdRentct6Lyjbw",
  "key32": "5jmbnoqRhagmwdJXim1FQGM8MJRSpFbzgnc92sy2SW38hBfept7QczLvpwsCfv4a3MmoJA47Lu9PhLWMFpqaCLoy",
  "key33": "4fPGzAzpLeQaLZaVZPS8SXWWP6o6hU1PTF65NxShMNLGXy97ARhCF8ARjzTmx3PqXEwjRzUx9F5ATeCp6nL56rmj",
  "key34": "2g5A3KTPgoK5tyTF2PvHcwc1JLeojSyW3UcU4XmcBKt9Ddu5NR9yfYBZWpXS79EJNAUaddawaS8FQqbzC4WaRkRm",
  "key35": "3gsN2Js8n1FDxGT2dcXQEzvqpgRiTP1s1u1NYGecmnpPfMLh31ycZYwWbVGh2B1pGrEQMccskay6MJxBntsyKaC3",
  "key36": "5inJgunAFWJoxwGndW27wZQ7NBTWgRrxSQH81fiPPR4ZTPCybhzBrdKpF1zso1951AFtrWpPJdcmfR6kjeqoMX8R",
  "key37": "24bc4gi1HCQxvz5k4ugja92FK9UpFifT6uSoKPxYnPNtA7UTD43Dq3WihHcD1fEwGHKijwra7n9b3WtrU7JxWy8r",
  "key38": "2YfvYboTtdRhYZnDkyvbmPpVmmkdMAMMsViLQdRvMX7hmZe6HLeaeA7LL5hbBs7x5RWJa77n9KgaX9KgyktcNeC",
  "key39": "2w9wSFKPy5gZmEMFqYYQzKrYASZmmCiimyFgDpuo9E5u31saYoWZSKYu5MKoRfRaof9CD39fuMX5vPygn5jo3pVo",
  "key40": "3Sga5Pz7JebUV7RHPCrGCioubwpXoFq824knabSfMcmBLfAf9Th4Lime7eYuskacmZsGU7Du6VR9J8nUXGP6SYF3",
  "key41": "52JsrDcE31iRKfs4KeKnL1ymoHjSDBxQ8JoqTyns8fFxdyLx4Sh6s8Tph7Tzs7FjFVLk7HjUnPEMpG6KY4bPvC1U",
  "key42": "66pZwFGA3jwy7G7ygYjEqAK9AJKrCsez6Vwshi9fytDcvhUQzQwSR3gjwk1pcuJHVbuxLHsrRbybekJGpCUVozzj",
  "key43": "42hy864SJvg13D4DGmC4DY15UiaYuFqbZTXFETg5u1opGwLGT8Eg11Zq5iUsCNZ6aheSYJzS58Nr4yTyVd3KHgsT",
  "key44": "56Dhqe3BaZK8mMypi5kje8gDivwvx4FF8qAPTVLNMtpV46nW3K9EaWqwWFxwjLj3EmCWyCWJjbjifUYbWKxfgyuM",
  "key45": "4Wn2VUGv7teYtVn8yC7ry2JKbZyuxuYjRqZVwd51ZR3hfYgDR55bJw6ZznDxTKCjaBBUmXhitEpp4q2SJD9et114",
  "key46": "4S5zGcQ5yyNwFG2e7yu74XbWprPfbyQCg9LEFfvGKLapoKJf91FqHdQ8cYNFJHHTJsZLj5WjTihysShCKN6Ks7Lu",
  "key47": "25X5NbeNwYPqaNSxERe18vfF1hfzgCkigZ5TGQAkrXin45fZCRnQst5EKrxq1QoQAe9ToKaqTnDnDHibpaVYTUYW"
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
