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
    "4qoXqnFf7FdRMqfpNX6Dwcxz5cSJEG6f4xgBucu87Z2jGKX9H3EGJS1NEEugb1qtW31f3vJu6UyfkW1EPX61JJfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dhvroVow5Xut7dbpzyiVFg15WZntrbjMzzbbWzxi49gVrVUXcQeZkksQx5JAU5sngN55XQdqqMtcaV88RHpT45E",
  "key1": "4V64MgpdGfVpbWVh62HFhFX4xnsJVFEzuWTDnKVAwCWLdP3TNJirWCT7PSFSQmn37iCw5vxqEA2wscYFGDdC3YQX",
  "key2": "5JYYDcmpwQbmkT5Dyi8z2NwNL1HLwoJEZa4FtQu9ebHp7iDMeok8sz1S2UpVnwRMQGWsaSE8keBqta18RwV81yuS",
  "key3": "qbpjFH4ivomKvMHFdPmKb9wdCUf495DQPnQ5fFRNhKEvQNAJC4PuwSiDRsncqtW6RjdtpdZANCk8xtN4tdEfKJy",
  "key4": "5WrvtBUZUbmmyJYvLyTWNB2Crmhje2VQWP5jwQBeoZYvLzp4peTcEFXuQbY9tdNSUAqypLiti4SxhZzLJPoH95rU",
  "key5": "2bN6n7vQdGf7nkZYrsSYX7XvLh4BwUNTNcgGSxyEXekZbKJjRCTrDdj9Jq5TxB7VDbKog6TfVufchvT741Cgs1zZ",
  "key6": "4kVgS2vpAo1WWwMaQ6TrEyWSkivWViVYSWCDgqjVknoYLZ4QVodNWTm9y2WXpW4hhTf4JbGXxo77z12QH7wxvVpQ",
  "key7": "5j9ksE6Vsm1JjVcEjvrpkZUpEsgMiLnfCqQZwqd8yJjxEVYcGJThca98MHQHg43wUDrqVBcqn6vWY2S7uAPaek1",
  "key8": "43Fmm1ZLAiqRNsu1WxHjd5g9zFCYRSK68TARz3t4kzspV9tp5hqHD2pknbNxVq1vxa38TvXivEfzUu9rB49byRzs",
  "key9": "2JuhSrL6LnRXcphvEDNTe2qHgJmdiZpC5BnEczA4928ZZ1RWwcWgvdC2DQYs8og4iAtuUaZdT7agpEBruV9o7xAq",
  "key10": "5fzDkM9m5y6TtGPiJZ4cCGzw8p8bSAXM29DFQQCgMdWvS4wwXiaHwnUYMasC2hvi7BAsDFf4T36cCJvSjRS8ss6M",
  "key11": "2ZcqhTWBNpnJkdz71CLXTwbfQ2xpUigebcrQTe6xGibKwhos4oFyxK8jUrnoXpBhUWvmyhbmgRTK7fHJzobtdZmK",
  "key12": "3TJiK8f8eNke1JBe7j1QgMS3REw2KnotaHzbsUnZiaSUfHh7fcb56UyTJ92txznrrr8gMD8EV9huuHxVsf178fAX",
  "key13": "3supH4JKDDELgM6sgWxqqdEoQAcqWmsk4vuGho7H6rrk2j9RGXHC2iyv8nPKiZcGCVJJ1dh5WWzYt3UqZHWRVUpy",
  "key14": "3C9x7yTDKBF6MC4mfkrogiibnQSzZdUipvrzogtB1zSFZwFzkoyNdhmBSMq13dfPFcA5woXW5xVXrugf22t8GVVR",
  "key15": "4gcqyDB6W5GmHWV4xTsppwtUkhK7otvSK6Rx83rUaS72uSBdLLwqJ9KoGYLfqp6LgFoi5ExGce3EzKNzs4hvoTEW",
  "key16": "Bo2QnHFS3vEpAzKueCeY1oB19euSFBvK62wvyWGP2bnfsxXwykbqPvwwdkKMJfpMBYWBKmxyC3tUyNQpgiXY9aV",
  "key17": "3Dpsq7fUvm2uzMadRhAWENNEQWbEQG99Wkhu1nACscq5CeSpRZJT7NHUmmS2b8eW5QvkP6amLNKBCnrU4ykkUP3B",
  "key18": "26f8aTMyECmnM4PFAABfdTCwmRriLTUyHtkL52SnRgN2haseeNzDwWutMVs6bqeaP5GT6C5ZmSUPHWBfzrnxGnEA",
  "key19": "61TCEJ2iScwf2f1Ls3S9UpoqUFcr1HuAryNSn38byHHrzYPrXg1EcSn2RkXBxxos8hkiFfsujPDCyAubMQmNsE1y",
  "key20": "2YKNG28BgagEz5gR6A9rQ3gFEj7GdccrWpWn7phS5SicDBHZgPZuauwzpL8kB4ZT4arBQBwAn6gCyBZBFNUtPqa7",
  "key21": "cra3s3ViChTfsZPPnKpjETSmg1VfVUizRt6KpmoCuJM75G5rWckRCZ92MWVwRESn7gttxMHhFdBgJ6PrtpP2XSy",
  "key22": "58KJfALSuUeKMNdCTaJh4ejuZA3fpSG9tzt9TQk27SpCnsLDhg1XwJ37PXhgCDLnBNFMJz6xW71EZNuPTVsf7JWk",
  "key23": "2UuHGPyhpL3ksfb6kNNWScWnUG38gRJtzVMeVPCLLnaSjDGFD2w9DiuJJbb9bq94Tqb4jF1mnm8d2prpumDo3Ct6",
  "key24": "61v2ZcbU7ZGkZXHwHowFDThC6sSvdHQwGd1RqHNZHbk9h75ekrwP22SL1yMxCo3nQ5QyBPVBuD6W5BpBSJWL8vgN",
  "key25": "7NqWu183uqkw9qg7B9QW8RcmoinduQPSbp87ZYqQYPt883sKqVimw4ywQweXSaxXhELJ3PxLeDn4ixiq7DLPWDK",
  "key26": "Cg4dGQoXoWmdZ9b6A6SpCBVG3Qbv6pqR1UDLAXA4xp39BCRaSwf4DetErJyWhMgf9CPpyZxh4GKzuPp4xyopPiY",
  "key27": "SkvrSwgrY1EcRCnfz8Z9YPxvYLpRyCUrh6JxLYYAcy8ZtViPKbWqdCpS9nLfXgicv9YGAXbPA1sPsLnzbR5UH9h"
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
