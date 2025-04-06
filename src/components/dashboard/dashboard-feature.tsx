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
    "5Y9QFH27pP3EQac7nNpe8SdeDE7tJGZ9LfMxdfHyFvAePXnL2umsL7jj1mxLrrz5bvDbyNwfYpKzoQ48tgTcJuqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bugzXckrjNBefGpefCNaWXX1J7oTwQr1oXqhYQcAP79JgLdaow5J1m52bayxjFXGaNXJAb6K2sXK6YxYuFE1MDb",
  "key1": "3VRGqsCzPXhjKLpNwMBGNjCB3kQFG9bz83ZULMCzjNycT7XzzYFsNPjSS4sbkZ9AKMzHf4uGef3dEcUM46x9YQqw",
  "key2": "5A8jCotkCSSRfKVotNxnmvofVGz9ZqZe4a4FVNuERTKRkhPYKzvUJ1FY8C9ehGRHUuqfYAGn2QnuQncmW87GnLbH",
  "key3": "4QJzBGUoJDUYcNMqM2C1R2xnhSELN6hm1fxbgVLznqQDGrjZwhTZztsQZqJjW6CY3iYRU5SCbqUMcpL17HWvAiXi",
  "key4": "5cBaKRtTzegt4vnqgQ7TeCjbE5ov6DeaKXimW9mAGxFhpGYbMAavtzziG3ZtvjkJMZNbkeu5Ak17a3GvUA878otB",
  "key5": "3ybaMnN6EbPbzURzQVhenYe2HRs4W4cjgA258NNV7fThsTo53kpPcX2CR6aHZbeN5uuZi4ZLHvhUTi5nxVWhuvs7",
  "key6": "RFsw2v6RwniSMQXoXqWyCGByhjL21X5hasPFTcgVMFPt9DE6F5c1Yq9WyTFy99bXwWKm14EZwLNd4W9yaCH4xxG",
  "key7": "wi1595FjADBK4EpHndkFYdgs5NizwYxHXWJEwpTzH86PkHJCPtQX7SEefusfitRqK6TRJYyLedZkZ7N8JD1VDzt",
  "key8": "2hU3bFLTtMVU6AtgDmNnfbBCPyNyLBuzapiXPjZkzr4Mv8THB33jEyKshjBpJstTUEPwsJ96ZcVfrHPVD2eYAzWR",
  "key9": "3nYcdRun31K2gRKbYsJfWs1QUjB9nEywpdFKajpyH43BdojSKETR8YSx24z5Qxv2xJCsucf4giCyDEjrFz8Yqd9z",
  "key10": "hqVao5JFBB31i7nAmPdCxm159Zyg2sFWw9NsxBCwZwCLZCYTcHnaK1u5rSeZYtu6yVh9o5LyGQSSo6ekGaPNVJW",
  "key11": "5EDDhDrMnprMdsVsHgad2nzcnVEgnDN4U4JhCpRsrcuoRicHpHvJmr7KLcL3ExjSDXkKoJo6pgDYpttoH22tmwnf",
  "key12": "4k9KDFuVxHxAch2Wu8ykocup4FKKki2BeEcV6gomRakCVR9qXJuuJgxhgpgFZtGiky5V4rRSAJMBsdgPZnSa6Nuj",
  "key13": "2mdg7EVhQFwvqw9zXc4pynX2n4QS9VCto8jRUt7RtHEsTc2aU1cHCwcGTJnayWo9LhHZi1S4bo3b7DhqQoyyyRBT",
  "key14": "3Es4U69jj7uoq4zgTvWfcxsVBYA1Za6ctjTipZqUh2xrYGut2B6eYvkoy3kZrs7U78Ci7SCkDzndXCTWV1Bo28Kc",
  "key15": "4N2ESf4kj6W741bLEHzZVKddFF2V9YV19sXHySy2gMB57dneuFk9Mx741zpNw27vjShfYkmpQykkRpjMHySDJR7N",
  "key16": "T5F3rGPah5p1uPxbUnZ5H8BMM4C4MX4VhnrVvqCgsixXV69HjrBRrepnxaqMmnaNiXgFjCqU1RwKcmXG3nQDGYA",
  "key17": "3y5T5i1V87Bn2AB6ZD8T4eZVW47bTQWFLGDVah1Qa4aqSKz9j2dzyqk5hiiDSzVEqtvUuHtTvCEc8kbjwYxK2ocf",
  "key18": "3Zs3GN7LgJ6n9m77wTDkSrPKkhom61d8GAUXdwBjFEGRV9UGC1sr14YjWS6LUeGo9i5inZMTcZdhEndt2tRpbA5x",
  "key19": "4j95SfGVxxRkcRtnyUDyQVM6pjN1FpZLzAzCfyMevVmtg5CeMYvtwmSK4dxvL8mBhcxxPc4YWa1LEzzLPTE8XmGo",
  "key20": "4PQs9UeD4JcjQFzhMn4rrubKpqWLRVxfTx2tgSHEi4geGZaETGDCEjEjV4ZUQCG9CMyeX56ZyV8AW5BRT14Yk32o",
  "key21": "gdg688HAWw7HU51tPBvytr4jwk5Qh3qApfSw4rPzhBeGHwp4kHKhWyePiveKpqPEfp8h3HMJHcayQT9iE1zThDB",
  "key22": "4ZeJrRjYJ5hMqchVnhVsPve8MFybPJG2DD4mvWTGM62knXh9nGAzRPqyMnjsV5CTQNpCiG7BW7ZutRPXs7oUHf5G",
  "key23": "2ctEX1sUHM8B9ykoPH4kTy5MtdaRC8teu9BauDgoeFyo9o16TtJUNJ512XB8yeXUXAEK3N3A15rcvhdJzRob2Xou",
  "key24": "34CKBdifbA9mKL8UXzWZriGPfy33HSnDmhBgiCZot4LHVqT4o5xVNgpeL2hi7XcTcR6NSe5AdcUn5aDW9PAFXRvF",
  "key25": "5XL9wRXAqefF5MtZxneVZJWJ28tvAUjm5SzB5yLyybbWfjoYy3BGkJZAC4veE93NZkPVUKvuRgsc9He9eEn1BdyD",
  "key26": "2EZB9ZndiJUuWYhaDWp1AJQLFEDQeFFhnxyfTSjkq68kUesN4KCu2dFrfvAeyALsseUW7Z6iqpDc3EZuR4j55SwZ",
  "key27": "fcwdCGXVmAFFt3634v2nQ5fhr93CwjAsb3AbLJQrqtX1ZL5sigb6fWpSGeCVPxQQdW9EAYzkvSvBPCMfHrk9bc6",
  "key28": "3JCC7saBjWa6VnzPhHtQ9JSEd7wp6dx83cbQeZus7Cn2poGGKuffybkPTv1SuBY8aRM7ttgSuVdc4hTteWGhTBrL",
  "key29": "4nJmQrv9CR9uCnCDbSgcAYKrFvhue4YVo9GBcYLK6YhS9ZS4UmKagCBEDyG3DvLyRwJLe1V6mwZ6jsTbo8DWF5P5",
  "key30": "MQQrkrznXqtpm1PYuZuGGKnmxCSfM3j1nVFMWZ22oSDgSWiy9ERKMy421D5vrXWERNQC8Enx51AJSb3ok8CsDzk"
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
