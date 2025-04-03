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
    "2azvM4Rf3vqJbSu75o7HHXwGLKMdbkR1Y2kLadivFqXiYevm6V69cx2mgjDwFnyFHJim5NFmY12Zvg9Qen2KYC9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32XP5S9Z6JjGquUx8bmA6h1AJ36hj8VVFcoBHdcb39DSt221UtqpDJkaSGvNhrb3H5z5bkAZADv8ebeSy5fyK9QM",
  "key1": "3HjfdsKwCqATAo8WD3XnFBar11iiz6kpscwRU9Zj3qoF5cvyqK3p1WzczD55Ua2qES8BBsShHGgYJMWsgd7gRcmV",
  "key2": "5y9Ag6y4mNxKPBgsXUkXcwmu4vUvZ5G8nUN3YxeEi5agjFsUBf1G6qZmCLV9guCD58ZjXPum4wrssvKZE7FBTUCy",
  "key3": "62Bd24jpKt6mzfYqKDszDLjCHimUgF2NWkvpjRDVP4UnrpxXnEBUgeF1Wz79NRBgx1XtthiRkhXQzXnuadgkUswz",
  "key4": "4B1L5z7TW2xATd5DvTW3XXAPVY2BoF6oaa2ex5pE1QpvHUPuxoRt4wWyfgvFMNLHpqSiQwdHP9ngJiigPf9eSQzY",
  "key5": "ok2y1zLxnHV31X8H962dH3Se318GqgU9g5QGqLQQWM9A8P2TXFDcYHSndXFhKNoAyKqR65UWqXpN3KLP5MP6fVZ",
  "key6": "41npVvKbXkUP8QmpnzZJiZbdbKoXNjNizLzRYvDQ5XaQf4PnDJEq58RcW1NS8rYYZLKd9pE1EHi8JLwKRsuxhwvW",
  "key7": "CegwHoXjzJah5nxFmifR2cZRB1Vh5ahqWok3JJga8E2meZeJ672zMfoWJVphXNgtGHUD8p45XfpPPEUxJHtzrUu",
  "key8": "hq4kEqgXifEp3qRb4u6L6STWzorkQwsa5ESAFAbR3mWbwobjgEiD3UoPDNEVFgG5b9U3EKYp1kqSom8rHCdBbA5",
  "key9": "2YswTaCVKg1MzHA7nXo4HYpaozEqNf5bsRLaYJ4GPJXMjbMZ9ZnpLAjJeseMLdkna8btNqFyTJX3Dv17r8ycxytw",
  "key10": "4yQG5QkfAFJMGyMUJux5Hcc7dEN5Fzzqgu7jJgdQ2xZke185kPuTW3FogojSAKkDJ6U9fkT15NJg9LiQ5ATXWVaN",
  "key11": "3HHirdA8HNY79rWTaPLqgLp4LJzmCguFpMCthSG2FoWLih1biYznF3gVam2TWrdyCfAH4P2AN8dtuvhLfrn71PVg",
  "key12": "pJSEVZ5QrR75YWS7fnFmv47cXpXguGMCP2azZuFxKwBo1kFQLUnaZWwQrMyRLrVwjJvH6ryR3kdRtuChoyvomeG",
  "key13": "5Z9aYPRZUXbPmtof3xYXrCcWu2i3zBneMX9atrqMSk8YgHHoMTrQ8u2m2woQAghV4moka5Du6Vr6QNQ2vucqdQhg",
  "key14": "41kgZo8YWLN2XjMUoAvJCZtHhMnsnyD5aupxAsREt2pb8MyJZe3nfm23uUUMH1qK4jvxZb7cSCMw6BQCxyxqqSXm",
  "key15": "2wDobfoNtSX5FGShBJz7wk8hfgyuZDfknrxoisXEqVc4nHTiNZ2aXAZca9DQdXRLpUraDtgHWa5zCwU46sSnqgxp",
  "key16": "3xjQjv4Xg6yy44g7xnQerqaUGU98wVL7YhvqGEohx4SP6fiRcNp7RNjJJrDu72sfJKd9yi8awv8QpHNHVYHQcvAu",
  "key17": "5smUdPnUZSFe8SNssfszGrxyfoXBsTQbP6An3zU1S46TiKBicF6MPExCefFceUQsKt85MMB3DCUL8PRssK1PNTDN",
  "key18": "2QY82Cv8eNdi8gBDKWtCcCabr4R6ZvGKMhqVVkXB3LXHqKA2XRec6Ca9ideHsEsQjCwU1ruj25FXczY2wqZxo6zw",
  "key19": "2aeNb2eHT1ipjYR6EoQz7nrNjYbsvo87jUdHbCzfp1DKNKyqnQKqRa5EjjH5tF6p8d4QTYHjin8Z2vXoTLujpPwF",
  "key20": "i4DFYJqgaZPfxVLSXFh75XBSQmz4hr5o5pRbkTvjRvXYcNgpy6KTgPmAVVtKqpFxVq9Nx53HGUnrKzL7UwT6Nuu",
  "key21": "zXUdmKVfB4xQmte9BMcMSVUtjJoFPJkMiRyjP4V5WNzMmaaS71SbPwyinrWs2eGP3HrfoHKAq1PXTdM7j3YhfZ6",
  "key22": "hgNYvWf4JaAanD37WPNKEivnLAjn4BuViQqvQNs8AaJFjjUWazqsUeYcmicFVbiXxRXBnATueQ127zXZmEhC646",
  "key23": "4t7K9yEFUHgVPwC23GMcps5P4hzz4mqTiVyCodYYM7zXKk91ZCwMjWSfMZJ6bb7fh51djGPJB7nh3Ri71uJknQ2D",
  "key24": "2ejsoXQip35mZSE4wtCMSjpQ6nHuhJ2XC4DjQ87vtLebiFAr6HDvaZVQLHTQi3u64hkPaavCdr8vX92BhnmYegNf",
  "key25": "2jLDoknSn2FphLTL2R2sGTMnDo5P4BQQXYxuzLYBGuhhkuC8EhmHVEVctGKnSqe9dXReKbtnwtKqJeDDtawhdMQs",
  "key26": "3znQFpGHvsDNgroszdvUPeJQBAV2CTdE1UVgMjiQrEwAh2ahfQQwvEjpSCS4CGu1JfQrbGKfvjjJyCsss4rLwrWW",
  "key27": "4uULuUgSsjxgQxEED98q5mU1EbAFxVJtbPHEHQ3pNxvsnubopJUtYfYbxRwtfRMyXLvdqUVEARGeeS2Rr3uiXVCa",
  "key28": "5YESmEQgJznMCqZDd57v13Fcxm2KyYEjb3KoysRvh4PqVTsNF4iNZFpMnkHrWH7EA8hBKRWswX576vibJogYqqe4",
  "key29": "eCHaPkN1nJmVj4AXgfkXEGaEXME7Z3AnwSEg4KAW2rebmia815ggeL861Pj8LSQmEpivZNC4HJ4eAdhkrwT9doJ",
  "key30": "512g5vUtmJojJcCW3LN1oAc2MA6JFphy2vV2k7doJXBzRDVPLbkZLAxX1W7us7Uhfe7JerrptFr82dXJy3Kkku5f",
  "key31": "VZybRnj9dNzYGnH2Zeqyc662rEfsVuXgm4DdxhB12gj4AdTLwpoFE4A3MrHmcRAF6YJMZ7kCYsACvdChy8EHMXd",
  "key32": "4Xr8j9eRLgZ6zgg4hUHPhrNxwJc8xyxGRMfocdKUD7f7pVLBTd8kh45BNTY4fVg1Gwm5fNzN1ikSpez7Gy6tEBCG",
  "key33": "HnxXFLrKA3rnKjMAfp8Fngy5bYzFFiLk4sS7yYAzCSriKksSsohXc7ukib9YGCxx4q44vUfiWvZ1GZRu47fXMRZ",
  "key34": "3AtQHuAmBc1wgJtrPTifYHgD6Dp17kxD7nTJDMPkEYh6ne3TgM7mYDj1vN7X8ieBxY8h8Nze9GRhjL7xbiigNUrb",
  "key35": "4ciXUFhPfLMem8MdjyZzQSnK9TB9cXZtMdeSttxc2miLJ8DqnTVHqqM8W7SQsK1KGQadWtpYwjCSEHGTLFWHFnat",
  "key36": "36iVkhojxwBNnB1c8gaADUAPEFjJeLSke8ZTEdCQLM65cm9shyEYFemdXiCUHtHmjUzk3zu5BBdpgrUSUEoY14kQ",
  "key37": "42mVe4B3DgaLry6nbVs866RkCQwgUKBAPk2wnwTwtprwfCtjkZH8ZGscxSocQe7c3eLLdbMWAxCxpfiyYeCKuDnU",
  "key38": "5iZbzzN7nvxXZdLiW91BuudzT2QUtVViwxYBVdSGNtQmtbrgjECCzqEDCLTYNruk854gmEPBPuaonTikAd2Mvgtw",
  "key39": "219G7XRfeTZkRaFKNjp8GcBfLDCFn3NBox83WGEBPfBtRn4vH24jKoQeeXG26S4v6FxpUi9xe51fmYdGEdefJRin",
  "key40": "2M1MdRzz533tu3GCuHQTji6SXLkygLTmM5qruV8roPcpuEkFzpku3DU26bNyzeegxMk93zjRwcgo7uCDW13m2CLa",
  "key41": "345V7CbKoDsqKdTd8XqSYaqjq54AHEvQPh1Rqg1s4zaNP2y78iEn2qqjGA7CsfbveVgztctdKawM8SdBLag9kAeG",
  "key42": "4ymJAvYNBCy3zTELCRAYiqzGqySCM5JLQhtYaYFuExU986Y4njAdYCz5KheguuexW6quxTVYYKALqG2DQL82Es8D"
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
