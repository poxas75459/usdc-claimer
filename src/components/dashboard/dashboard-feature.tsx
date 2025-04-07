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
    "67Mo3pRAyCwTksN8dVJC4gJUD4aKc8Ya4VfbqXQeu6ordufq93WrMrMEBKznuSjtakNnGNwApAmKqewM12ibeyqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dbaqtj9kdwn1YQCHSrqQPjoHgCxQSAS1hQRRMq5kxUfDQJkjsM8Q6sRVwqXdg88b5HXtFXUr4MFj2NRaizsLhhE",
  "key1": "2Cx8BumvuywZiyXHnSE76R6cEvQUHu81ZG9Ch7absYAMLratmWvUibMbSF5KYCdVYTrCRbpXFwKaqSERrE1tfCQ5",
  "key2": "2KXxPXvckXw1Ehg2QKkcx8c7bW5ZB8PWv2KD85c52LEdoHb1SjKvQCyrQuftTozRwzEAxyfT5Mxw5Jvtg2V27QiY",
  "key3": "vspgemaGQniKFWiuZREGMTsqYmFFYXyCUC4C9oNY5ZKo9GpRr7v8p9Urr2ve31R2YWa3dDwci8tFE6eNF3J8PF7",
  "key4": "2cW9sEXxg2jJ3erGGpjuzKXGgJ1DtQ7znMVqatEZqxEja2Qk5h3et3JyuyfWrofdMNfNrwLdrKAkAXivG6tCv1vs",
  "key5": "61EeVu8ae6n2Rq81Kqq9d1CTDypneztERQXFwNm9X6Bi5RuHTrpyaHTZX6rnc8mSucER8xsxroTFrFkFwLs2sTbH",
  "key6": "2hKExm2aD94zxt4T2q8qGZoNyW4naMbSMg9SgzZXbRMrzUnf3pRVe7AhBStvSXxj9oB2LcXh2Js41Q3V5aMpkeBd",
  "key7": "2phZoWQGsTH767XU8L2LirVynVd8i3kmCu6yU4AyGdRffTz6i1hQFRBQTF2kFSkXBr3Xn49z31kGe6NaYqkZgq7D",
  "key8": "2bCKS21qxZfXaf9UU84no8scU3SoFWiCnfP6xPry2KeViTCf2aDqbYvx4BRacbne2jVj8JTWf9gmMYfEYkw6uQxn",
  "key9": "3PpnLgbAnVa1DibLajVEMWYF7WSNgHG6Qy4jUGvzwWmHJ98Aj2arGdKCrCzqaVFUEw5LFL7MiSp5GR2VSKFogW2T",
  "key10": "3or3rvnvQr93WHRFNHYHR69Rs3czwXW7ZNGQGJCoaem82yxzd86Ce2DLpfpZUChbAUM8TQRF2dq2BuvYPDySEPhx",
  "key11": "2MWV4oCaWrz3uisiHDDmuiCJLK8P1fVRg5oz8jts75DmN6jje878HANrkYKRPVGU9tmYPM7XcA1Wh44HUVG4CVFV",
  "key12": "5LsuS4ijFoR2E2hgJ9yHZgzFGzQutGg8aARtB8Ma2K28wNvoCUxT24jGzZRDATYcKj9vavJA4C48NBY4mKxRhEUd",
  "key13": "3m9XituYJX75wyzbY9ncMUpxpuh2o4AYmwuz3dpRyyMnCGTxfcuZSVsNsmjNTGKabR1K2Ggmn5X5SK14hCRAh7Ap",
  "key14": "4jCcD18cyhWb7opVwgNCeFsfjYW27kz2Po7YY1jvzvxmxciPkYzyX6CfmucwrZfPGuiVFMxtV12C2ay3iD6TW8SD",
  "key15": "5g3xvHYwbAgcuYcGNDJ89dAfvuUdGyaW87bFYnMoKgUgX8Whk8rtdQahFASwbr9ahbkRyUKnivjwPJCJQQVBdyFG",
  "key16": "5ATcDzPb41iLkNmC8BToKgRdikSqX4hj8biaHBs5xvye8hLCBnLB5utf5VopgLYY39qLgPFdRhwh9AqvtHMeCBDZ",
  "key17": "2B4GgMDvFYJDQFBvVRykoJ9pFsNF2ztSBHvrvN8aVkuts1CT1KaTnGhfjUptwJJjmUYPdzpShBWgEmirJTARGuks",
  "key18": "3MLuFhNSVyRtr234PapfzcFsEMERjczW1CGYknr9ZtevpqLYecK5y7comMu7aaBWMLXqQMW7DzY5g9BDjULebjs7",
  "key19": "2YRACkYpCdvhG1hQNReWToUbQ49ntCiC5T3pj9PM87Mw9LjGMch6axwH6YZzUgRJQW3sQZ8XpnJabtZNYFH2bPDh",
  "key20": "FDeeQT4DSX9A8Jf8QN4UNyt1VrLgbxf24b1e2Ecf5GGNPLyLt99U27vH8YBkv81hMN8Wy4G8ZwX2ibLtdCxq64P",
  "key21": "5Pypi9pqeQE7FzikAcNoDWS1j9phtMnkSDYdaGSM9vNecd6b4Eg5Ge2D1tDFwtTP2Eew8QkZBd7gTh3JqYQMRRh4",
  "key22": "3ZhDtvTPwZHhEJUas8soLNPkZtnBXTed2AsBHdXUMKcYa4YhG4k2mxMGWTZDRthP2fb7bhevZKgyCM1gMQY93qJK",
  "key23": "3kQ5MGPzhm982Pi1YYocm5xJvo7kJsaFFSQmWAeYWgb6e37dgYByUUULDhQ5UjHFJ1wWTXjdrw14sFT9pRAEGwF4",
  "key24": "3w3ykn6PLEABKxSn2godsUvivm8R7f7iabvVnXHqqEdNYZGEh37PZSWnEujKad5TyPNjbHAtQZsXYcfGiae3xaqJ"
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
