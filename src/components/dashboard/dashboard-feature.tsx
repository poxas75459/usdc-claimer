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
    "124844fhse9zfB1LQV1ubZiL8Y8LHLW5SxT6dbMArWbvKtjaZkGoSrCpFTXRNCLT1yjxVWvd3wXM7kX49cVZJQGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55oAoNRzX2mHFVAHbbijEuAPgdYLH2L99mG9JetsrArtrxhcJpYMBtCXxxoSZ3J29rpmnRVNrsG3F2SwYFMjjHUn",
  "key1": "59JYDven6K6f8xuTK6AyeR2iYNyHDLYVct3KgpmfyquVz7gsKz55EkpZKEz78dAQ3asZRydXAEwtNMSKWnatMiwP",
  "key2": "8CpxVMKFK3FAkY8RZ5vUHk59MFwcVssjFJjKT7Kc2QrkS41ZtrQFXcF4jBBKHPER3fLVJ8pSVLhq3u93eNk2KzK",
  "key3": "3yMVBYGfAwoVrtbmpU1uTLUDLHyQgY8gWvpC4RjRwCPEeF1gPoAJZiYckRLX7WxewVBW9aPNNVjkTQmLJ5urKq6t",
  "key4": "4W1qCYaUpSnZptvWkXYNKewmcGWittdHsdK5zUFWYqjjJebyfHH9K4jGVoviZ5YrvP13asz6HbRmCby5cDcXjMyL",
  "key5": "5KqTz9fkJRX66Da7WwKWvCu297TTMR9g8YDbbyNGZT8N2nz1RjSzgdXETrzH7Jhbkvh2oLeadJvwnkLHaBdVEpxk",
  "key6": "mDYHLsWQSVfFxuf77ityF4tiuMUgkqaBBgXNj2uYjD748GHseGM2hhNP4rX3QyHofhrgGegEw7oRMXr4nDFY8ty",
  "key7": "3HuCdEDrciyxHpHZxarFc5YBzyeMv4KJNsM7u9wYTfrzKVzWi31qSPuXKNiCPuCFYrgSp5BjESKFaBsKNPMbzLEN",
  "key8": "3N3AEnWm7UvnEwMQ47DfeE4bjz9DZBCiEWnzcdHCuGN7wbCyf1988Hgk8DRTzmsDAGWmsMMLzFS92xVrW6fTbYWS",
  "key9": "4oUykSpXagazm9BRH2oTBF59oQnPExys2MecaQbJigxzrHLyvnYuWEP2v5nDk9YBr2cfh8TN3BXM72w3q6ekBG2X",
  "key10": "34TMWo9JgMG8fFA1Du7mB5nZQkWj8VRq41PiKyVaW7G71UFjXy6z1BTNR4BXY8bdPkKaFZofmZ9TpCD9pD5yFG9m",
  "key11": "pakruYxXFDxN5PSrzGxx3aA76eDqZRZrMH7C4MhiGMyA4boxp7YEkvjPv8RkEhuZ87yE7ixZ3vyjgjo6bnFHCNy",
  "key12": "5UZesgtFcDCpEaz4qWb2b4t9bLHYBxqRi5jCVw9YnV1aCH26By6CkDuuX1tN1bmAShxaxspumkQALXuF2ceU3EaQ",
  "key13": "3bwv35JSiQubb9fo8sgDMr8uYQ7daaDnvgWCxbBYHLhk7FwRTxEcQ7g45enUMXDXKnjREQvqmft7YHdXDWaqP44A",
  "key14": "QbbATSMbDfRVpanW1t7Qxj6mXV5fudr6HWhyyKg2Bqsj7hZqyqCHjoPb4S7hWNtgscmvAwwXurkH5auDzqgKPUp",
  "key15": "4MWF6xQFQdWSJ6UuPXTJCyvq77Gn1pMezWo4VzDPHY1bPxv6zvUbYBGh8LdHCy1tgXeppVmXRUE48QfAwSHrX6od",
  "key16": "3YqL8SziK1DSCwjJAR5rg54zAEFiS5NwGoH1dpPFRePpaSTGxFzK1GjXywsxaWDynQCZ4cusvuwfK5FzWxaMguZa",
  "key17": "5y3HAofrd7CnxTztKMMw5n1ctmvxFFjWm26bLdPdrNP9SXDf9DjptxUwuBTd6CmbKrNRmCnFsNCaiqXhLxjfhK6r",
  "key18": "4RCYcjx5KGSPdMrFdFg4AsNUVz6jPEkEitjzTDaRT6ToMTf2yDHcu9wG3hBEvN8oas9zYERRLpY1T5NNjuJubYc8",
  "key19": "TuXPfhrGp69N8K2Lszh8P86Fu2Zx6zify9RgKw9piAEgXFDVvv1emr3oGiZExrNsat4WsN6KznJQMQ1Af6TWYco",
  "key20": "2SKUaCAbfcA9qi4NPgw85G46gBmKX5V6g8MhZ7dUPwRfJM6QsdmT25LJnNhCN2fSoKLsGKv2gTvJAMKHHowywL5J",
  "key21": "3BgyZtGJgyH4A8AtBjwKFkrHFCBXwSL86QozXAjGVRP2tF2GbFYLYQt3UMajDcqaAg6eydYhzf64DDATjKYXPSb1",
  "key22": "2n14CMeBQWWnBuysvY9udQMnpoiFRwqLifePXNGN2QGt9NAnwgy8gxVuS35m3fNfomLtrLDYMKTLdevxdL9iRUaL",
  "key23": "UJKuxhAPrHZ2gzQQxtURTLLqCUCBoJCNTp75zNpZoBPHzi2dTUYi17yyuni1czSj7QJCA3Dq73tpZunJpn1uLFB",
  "key24": "4jTHWoLNrbigMai9vX263nLX5m28Nyz3fBBiv57WBtNxZe2ayJ9nrSC5Sx217PZZREt2SCTQ6GPxke9WAcaYfEBA",
  "key25": "QnUfaYCg6Yc8begyZDpY2BYMkBGNErGw7EwphUG9YCwV6f1Kd1NPduPr5uJRmWuHM9khFKU2Fi7JW9EKG3iCCwf",
  "key26": "4jtuekfo7kRo1RWLm3Xu7wKm5DKE5yHw9GPbQGxQViRHkYpsLKJshRCz9PukfVqQwYyFGrRfP6HrMD1tbS6QMygd",
  "key27": "3xnYc2sWB5U69eNYxFTFFqi5NJy3TTXgD17R9mfrSKzEq7nJTzPGzrFCnDRcUzc9AVk3HNjTXFhuqyPCxigwoDS1",
  "key28": "5iFz4jbqFyhssoGJViKTiVjokNxHRp3a3QooNBdCxB7cVdH9eo3N6pD9zSfDGQgFf799x4if9zujVoMiBgv84B3K",
  "key29": "2wgJg9RgF7zQ7zd5WenrxoEhTLAznB2TFHfg99mpvRocjyBxHn1GZHAPtTCMy3yxKs3X5cxeEP47eDduBuec2dGv",
  "key30": "2PPV5269bUqCi9F9LQMM4fp6LeisroCZBSu2WLsyUZZPYtzTvXxcozaLnSrvxr8rtD6Q21tEVTMdK4FjKMGd9axu",
  "key31": "2f4itFSKEpGxqcssr8p5bPurZK2d54B55Xb9v6sgWVtfVf4S6fasUQ2KmCtD9RAtkH5KxBdRJFrJ3XfNAzWK5CEH",
  "key32": "54niVx9XMqnRo5ApMW4rNEgmJgwgH4SVx4RQnCzeMZnbUx8XEdmLizeJF6cZHsFKoKXBiTXxHsX1iWmtVp8zKmfD",
  "key33": "5jBR53vE8bcmrV7wodLZnrpK8rhh3NeTLpMNyG9UMk7pzd23fBdgrMaK27UtWMv8KS5gd2gGagg9SJYDmRfi9Scn",
  "key34": "dvYVqth5ET52fp5boj9i232LTaTbPBxEuKQpFHUptCZV3aSkSr3PqsckryCzvByUX2WDCjiqRq5kyCcPQy5nFYD",
  "key35": "34pc8mzdEWxeWZ3bYBEFjgbtH1xMbPV6pyXgiUTtcCVvr1L6SFtEwmDZL1X1KKBKxXPXsDDrjjMJxUDiUNbSZtDe",
  "key36": "66StivjhyrpvcysGUL7jSCquzkpPwM37x6P8fPfzcMQmDR8wDXfbfVEVrhWrFk7p3thwVPqLDejeq2fdwSHv8szi",
  "key37": "62gsmZwWA2Dgn4p541UmYzgTJTdbfmuTc1D1z2WhJNYDpnP4sEgsuzkYCD1eojx5Aba1X6QTGaVitPJnVTz5y4Y3"
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
