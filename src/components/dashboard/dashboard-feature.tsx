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
    "2aaAUEdSYekvenHF9GjUtfhkEmcJx5YNUmvtqJbz9JfW6hreYDp8xTHUiGZjCaBzn19n4JDmahbYudgND2CJiBka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wPUdGa5P4Tk5ZkbiGNBLGzwKvSUYWJm8Qhk4Jn55KNSLoi2tJXAPjaHkyUVmnf6yPZseBDmVAtEwdNRTXnBEPwM",
  "key1": "3M8MSTKKzew61or6wCrRYG2AvKajXRfAsAAPFLfaXJiRr2w4v2A4saRYK4ucBeGX1wmtAoKYvPgp87XAtJ5bSh3s",
  "key2": "4JcWkdumJW6Keb5JZ85UpmzSGfcjA5VP9Ee4EaHZjtFwyEr5VZQjBTFtge42rbdqvMZ1aa8EvM7mAahapbrYxTnj",
  "key3": "gGB7eWE3LQ2LeP6Rdf7zjZiNcX72SGX72qigLZ6zSg7YNNdaid7X1GwkGTvPWnadBPLaBJaEt1JkcPg7SKAcpfe",
  "key4": "4LY7yp3EFoyfVTN1a4dvbqgibodqhPqVqh3dt6D7gfCcpiddLMCWHgaEapXeSGV6EFcTT6vQHC7BV5ZnXcgQBdhj",
  "key5": "3hqqcuEJ2xjsNFQn4BzV2aGMFx79xjALMpF9Mdmz6B7usRvg6UUvDWEjELGwFUPiYFzJHQDz9jG9mzb6JFkmmmYN",
  "key6": "3isj8M2udvkop24N2roDB8kZLrTDkHyRdP58kQDVoUTvPK5EE4VTGJ6Q5CyBLcJ2EDQd2PMbyMcWJiBYb7yEALT6",
  "key7": "32cUsysmCBSsKaKFtaEBt7RXxpHcqHJ6D9769tdSXVADJ6XsH7ZuoLjQBXcwdckM7SwVuacZupgYRs2oMTSCYU6C",
  "key8": "hkojxcFKTbZM44Mb9Y7sZVHrqe5HrGMubUXoB5hVTGqMhUKrBbYNfWKWJp4RVTMwJEdEGRAk4MWWGDnrP3yYaHf",
  "key9": "4XMsAtfzxZpxKMb2TrN8wbgirVt96LCvkDvg6F6pv63ZtJQyMQW7VxenoQ75fxwkhAgAVpBMpSA1cHmtRkV3Lep9",
  "key10": "v7E6uGc8pUJRxWFLb49n1d72nJ6nMnyXnTx9CAHYEoteLMU3ecDmRWfKcsAcdhxzhyNGTzYAoFEuiW62SCja4MA",
  "key11": "5Z1tw8LE6guqrVxzqST7eHNciwFxQmZsiQfojwBaChPHoTgkUMWoafKGbqVWrUfcL1s9qCtPSj1mr9bLgfWbUfFR",
  "key12": "5PFcE17sv2QU5Ge4UoXUQQxComr7XW8Qv53JcHpGkmhgbHFocvt6K9tne9qV2xLq2WZQgMSFpZvKHagrVnVSSTsA",
  "key13": "3kyZ2Te1D6p1SaZhT9U7e1CB7ZT7BdzZbvGz9v5wVMNEcehsPKpmm9hDGLBtLntWgcqzkHhMt9X9FN9mjP5xKAiZ",
  "key14": "W1NpZfdyJC6VRfi6gug4Bsokzr3miTszh1ZRRPvWFsjYhoUmnaYPKayHanMjnY7wtsLwrutTAh1VbrDKhq1QihS",
  "key15": "2AymCf3BNL7sRUgkTwyZ7ggCtxHKJA3Au53Cj6nnWmgUf6vr2mmF997brzKpyfndb97U61euxsnPcyhqP4UAXaqx",
  "key16": "32QqSgJLnmF2jXjWA94EFGioyH19EH3cSgKhjBAwPJBgq8ytNyYX9ZjjKobKG6q8T6M9uqJ92Cq5KHc53yz8aRvx",
  "key17": "5bvCXmjkNurShFqhy9WBVrzKxnfNejjhBMnnLUQZUWW7NLcSxaE5xvZfppRZHoi2QXAhexK6NwxsnSFf5Qkk58GR",
  "key18": "5cfKnq7k7ojapNPxSmbFTAyRfdbZHu5thAvL6FdNa5VtD3QTgEcd9iQ77EAoW4J7r5XYy5ZCezhLDdYWNZQWaTJg",
  "key19": "3W83uWDs2G6rRBf9RC84GrUf3m9CQWVL4seUaarPYA9Re6V4NvrR5eQwTS48VDzfLpgzVQMme868X3B1jHrRRADk",
  "key20": "36EGa5dJtAeYQipyka3fXv3YQdukNzvRnRZyxdvTXRQ3nqriZ97HQxitTJatnETGcnDeoxi7YQJcDJqBSgCV27MS",
  "key21": "5VPSm9z2gcQjKM8vBJV4FokvVc4ATSkwivXAfKKQ646roo26chLpZw38rfLxp8DVGDTPoKaG2VSvLxofuFRafocy",
  "key22": "2T6pAjNFw7ogyTbxxuL1VSxJvP4VCoCBky3FtSBb7qjgXpN6CFU92Cx43dPX9XBHq6YRVL8LbqpUpzBwDzBCsysm",
  "key23": "5doPkV6XzmBH6pbfwuNbs6qUaD7yLQc2tQbykFM1s8UCwiAKgEJCSFHwdpLemakJN8ttvo3W8Qn6nbNLchkpkvmm",
  "key24": "5JsDoYzpP848Q3ngX9VbKZQ7RvNRami5Dgm1FWgZ3KFUbH63eGAXHfSmUf3DKbcKkzxrLyJWgcrwyx6adCY3rmSt",
  "key25": "QWGsCno4ZcqAsye1fjBsWheT766tGNtoiVJCa5jFBwThx8juym8sYuroAsMjSdDsmQKwDUVMWLB6s23y2b9G2Dm",
  "key26": "2BbHPmLddjdkyyXRRa1YTBkWDAw1jxcLsmmVhFbfMTq9yBKgXj2TJNa8GcKw431aE8Z55Tb9pwJgFikSguSaDb6g",
  "key27": "4xCTnTYyWTKE4V1uoA6ZtWFsa77BZTT3s3kJJRVUku4c9N2Tp2y6J4sFa6fPRYeohEuTPQqF1wbdmDqttGcA3PL3",
  "key28": "3nynn5rUdid1HHDTUoBSEJRCijF6yerrQWGac7cUTQQRhCRptZzYNbbAE6WgLQyju1xn5BYF7gsc5SrbCUGAvBAE",
  "key29": "2fkypvo6FmhgSakjX3pCitctksU8ZBsjxHwoyXoV4C9xZJeaQ6XMUGSWqK7FvPELnubjAcJUXbwoCF1ahTsAA7tr",
  "key30": "3UnD7a9kd7PSSwwg5ADzqdMdKBxAYLUDDteFv5Cwe4xZU6zjCyPeBb4XkSoZC8eYDnu9TSnxcpqjTiQXUfu9LWvB",
  "key31": "4cawdVqkmboEDAvYFeQ14JHX5RyxirwhDxjtTrtkJum7pwRNnGr8EinJNcky6Pd2P3H9kLXSuGGNK8RU8dFAnhSQ",
  "key32": "243GMiMK1e2UqqAzCXvyZ6tu6tVtLQbBuuhnGx6CbcRDqCjSpvtUko14eQRVr1XxdqqahHwsvTRvY9yNEnsSheh2",
  "key33": "3puj1fEmTkzVFR49QUst12p9KSvHC4kaLBVPZGAQ2grQLshmei3A8F9dt9rZXjj7KpWte6e8fxwi6HaXEpR8DLXB",
  "key34": "3s2wS2rdUx4KYCV2GGnHc99doU4MK24jmcLeizt2zHGybxvPCscWmHMADWhyrHbsDaQrKqsAxUtqNWSRdQ2Y8t8t",
  "key35": "3fzusrDvoj8apooWoHhch2z3aBdyH7q6BeoWxcWjABQ3yrNwagA43gGshKMUhBwwPJUmY7weiMkpPY58e4FyswBy",
  "key36": "2jQjdkDPC7ArBa3uGKuL49gr6vreRdLBJm2R2iTtqAR3XKtmWUFvmH8o4jgd2zz7vFVXd15WHC5UUa5CxkAwZ34q",
  "key37": "5vxHahx8xJXMhJ1HH5geLW8sGEmgy8BLqSMqe2Ph8sXgF9Tbpkt5TzWSW8KvxX1oaSeqzihbxg5Xd49DKFYgVJ1U",
  "key38": "5qmsRowi59HWetKB1qp4E6nbapDyzHKc6U8Bxx169SL7c8gQ1jiGnWSuYHN1x46yBjFT1UhtaDGypHmPGptfdazQ",
  "key39": "2B1mEM5tvTYEFzUFvfyNv26fQRn76o1dtUJPAUvcGKedztXobNH3g49ZqLonhXGR8Pn49Z88gAg1x2gQAKvrSrJB",
  "key40": "3MfAEbeDqYykGvqtUjJ7vLSoBNHFmrk2U6UspxRUCoFdTGuTWjj4a64rs87t3Lyw6GmfeB4fAw9gsiacyntshXu3",
  "key41": "2YTDULuh4nu3PZeSicqLgCinUQcm6stUhBSH6wm39aKyZXFiEx4ZiUiczBt5bvZaMm2NC1CtQArxYcSn9eAcZH4L",
  "key42": "5EWgpBeDQeDzL5mpJB8qpLvRacLuonqCSJjkFY4SC3qhXF4Z4eZf38QwUMEHT15LEau6jCmPETpLKDTse2g1adFk",
  "key43": "8VF1o9xHXhfbBjsfTbSbFHMeXUeXoNrzq4LWuAk5ED7BLBXHPE4Bt7paN8yP8G9wX5nXbGjbXSxGy7eP4UcE9gC",
  "key44": "2fUMUUXhTXeMVtZHDoq3AzzeXQ17Lojkw8btAFihGDggkMbV8jThqdieUgnDtLznErhKDnz1wX7KTjbeoQT6dYhr",
  "key45": "w4PLH4hxp1uxPrr4xmy4gYUFGf3dmpvkQoDk36JqyiQa2vx7XF1t97fh6XVAMSJyLRusAF8B9M5rYYwpE9BY32e"
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
