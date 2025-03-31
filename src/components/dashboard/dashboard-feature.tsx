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
    "4VLReY1Zf1fDnGJ8pc1g3F9VfLopWaDC3SRVbyDYkBnU7C4fVu22bxFgcRkKtAsRG2ALYknZnErHpnnXhs72Vhea"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EY6ES3WDPSpmLCPvSJBXv7EDZTSaBCCC6izF1iKhk65XrpCRHfCxBzhdpYYA8E8RdxzwnQ2QLj36nrmvUwnHxGU",
  "key1": "aw2dks6qXSBgxKQ8L1NTnjJR53WKCPz1qZe4JUeQLthtaZmkCKsWn3n9kvvxER2zbaCXutJRY5sWjDcbgcLCPpB",
  "key2": "2KujgpSpgG4cSymZTpK8APvkb6xBsB8wwWTcw2uk28MCWwbUgFppaLQJ5Y52yT1ad3LMdvsCsTF81ucSM7uPrX1y",
  "key3": "4GUCixWYWXdJFAZsake2xrv9TNM1yBtc4R4DiTn2y9evvKTrnoQ8ay1pssDY1yRzn69bKuogzRuY1JHdz9MrekBn",
  "key4": "52F27dZPPgHHaBYQunP2cX1KmvJ1Q8UvzB8AC2AocRKJ7RFwKfQAqJfr1odWnzQNgvEBtPEa8zui3KzQgNS8GM7e",
  "key5": "2eV8m5xRjxrS9Lw12F2L46JTUzAzDc8V2vC3ptKcz9k8XpXSknpb6LApuEVEUaYCZFbfzJ4KRRgkRovJSsFnWMzz",
  "key6": "5pbZ6BSvdzutC8s9bTTghMqYvfHajTZhK5HynY1mRAjH6yUV4gBNLoqLcfvEijugRmvNbL1hNXWkggqpDzMzyPfN",
  "key7": "3j7V9G6xrstbZLpzeM15s9K7HFAdemyAAUi3M4tuNogtjop8UrWBfThcMUm7tTNLwtzAZnTEFrRVQo7TMuy51FtP",
  "key8": "5Seooo83ukjgzfBJaSzkTjAs7CX7j8h6d82Hstr47ATc8R2hnf4DLBBreYVjGu49cb51vC3sqY3sLkHvAGyxZM8T",
  "key9": "3dLAa7UuXki2tFYdWoiooWqY4VjHHCJQia95Evha9dzBhqAoPYQQfBEc4aTCiR8Swd1A9aTUbSAV9os3vrM4Q5Td",
  "key10": "5QkCzAi5rPsmU2n79peCgUWGL4z5j4tUm18YmpA8N2WjNvXSgaroBA8Y784CmQfFsp2MNdQ9rQeXHoLXg7kGYswP",
  "key11": "A8YSpwQaoDDYbL5CgnrZ7LbosW7t3hzzaNRAbk3JZ9y1A4giAArRveiRxaqAsByLc1dBJCmRqonHj6pbvBwzeN2",
  "key12": "4SKYNPsqaAUokiZyByz2B94aSNMJREg23ou9Eh7W36fEDoFavfJLKYgHBY7ZnRmWSjYGA2LTF5FahjZME5kX2jcY",
  "key13": "pc96vTKqMK9qMrWbNuRyDJ2GWgjotky5K1JYSdDebEbNGixtAQXU42bjpymoD2RutSroLzuikgeXxJfbcUuAiM9",
  "key14": "2H21qfy49SEE7ZNTYAcuL2PtqbeBtH1C8ArEypUSEaDsd58p3fx76dia3UurtzDLsr6wndfc6bzp3P76yLuPP4LK",
  "key15": "4ZuYscwue8pSr8ZbWtV9Zd1Xn91WajJbUxU2K1MCHp4Cpczhfb7oBtMYKkF7etWCTswgmqWaaygV6AZ9eWHRMcG",
  "key16": "RBE9aAakPcZ1UqcUCdXzmpvTgSnzMWt3CTNVhUDsaaGnMjbq9YxYm38c2Wsfm1eivMEGBNa8QLaaspbvuoHjNmM",
  "key17": "63eLbbrgKWi9tkhR7Vja4JrwryErc7GqnSbMX5dFxnHzzSHanfnKMj6nJdf7gFrZPMF3SviPpM1yoBx4NuULibZG",
  "key18": "3Rtrd2taGAjgY6gRqpRdsNDXyTWpr37MwAxasrWFMzmaBkyiScWjrgPirdL8gFycBWmAi9vSUY1auwTTUENNHCw1",
  "key19": "4WpieNTfwiD59DJSMw73P2ktS1KG4Z1YtzLhsTxq6qSa2Cdf5xP37ebF4B3RMYERepXEmspaSDaXrnvWH44zJ8EJ",
  "key20": "3gckcKCXx32eEy71AiPHt7uNXwsqWm1SsYcsQaM7CF3AgwqG6XkUh9xgV8Uk8Ff913ueHGyVeuwrhi2NJBQz7W3G",
  "key21": "3FzCaCkYLggeBjoUt6g4NyQ5oKwqiZr5w34FfNd67gptLdHcpQnRMYXD9s8aVXj7XKBU5aRUsNGiojhKQufBk8Aw",
  "key22": "JYWcxsfrq1YCAhzqWFR8yTxBWE3ygejWBRswyWFriCbVaTp2h1tVoHmmcDT4UGJRkrK6eGgx3THmNPk4kzAiZ56",
  "key23": "35ShprNcCQGfkW6zfzGU2BaVvhNyZ3eZ6m6mq9NALCgVf796MRGwXECpzFDqDTmSPSnh4dxtczhJxQ3RTWTynsvH",
  "key24": "4zPASYTrY1D3Fr2FEpq2d9QzBDXkDptCMyYituPXWhqbhRe2p2dZvsM4yK2hLcat1vxJSxgXB48vYuEkhXxDRCXZ",
  "key25": "5mDhtpHXpLZ2FRzmdLJNtinaxJPLS8U5LekprGmrkyT7PaUvFzvh5hHNExxxzSeqfPbmFdFNzN6jBZkuFRLPGXHK",
  "key26": "2wEdM2RvNwA8bn87fzu7e83FqQTBAkL27wpQ5ippoZpbspmWxHk7DuWUwC4AdsFHKNC8ag21eQmsgMHDFr55XUug",
  "key27": "5DY3B5T58jDjn9n54SBU581agkKeYAkgggp8VSApDGN9Rz18158nHZoQiDsTbt9xhDcSVmRtm3F5bCuyixYJp7Y7",
  "key28": "3Pe9t6pFyZvzq1iwJTeqBaUMcnYu6LNovSsJCKmZXj3pfAq4VopnbKPnhMTj2qpdqUgb1BvsvNwzTc6ULViQ5hYi",
  "key29": "33s9TVoqtMZruB89mqzp4McDL2v5QahUhHxiAPYHjZZoKbP8JUGWPkzHZVQ3k84ndYjkkJBW2gCV6JsMQktZwgVF",
  "key30": "3rufGogJsE7zAKXGhp9qnWi5P72tRFKfKTp5W8maduswqKns5he7jXz8Kf26iZDF4oxYQoAofvgqhZT6neez2d6L",
  "key31": "FNVxvfb6hNUvEdE27R62Rz8hArtKyvqQq54ygSo5kWpd24CPsx8XGZ9z2xSoEhEFMUF8cG2cQNmjCXpd3aTC8eY",
  "key32": "JLYXhfbkW8JsMhEAGZQ3VL7Tnn2WkMnHG4AdKHRtEzVbyExA1Sv2LVsSN6t1mGsp3PXiCaRwxSrAd2nucfASmR1",
  "key33": "4CM2W3Gs1VwLFqaTTMgGv5wCDrdppFe8iwQkkmfiY6wGM8Kip73ZHxtoKX1Z5dFdvrVkTcg3W3ARETEDVGjJX8c7",
  "key34": "5XT479jA2sZC3H25bFMkqcdnwBdZbuxwRuCTf42uyrXVGUDk8rkviftM2KGHdc69apPFdgr5Uh8eZeabnLAqi2gH"
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
