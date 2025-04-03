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
    "5mxY3N8V5V6o4m5dEfnehKkCJbTigWWNnzqqBoDyx5Z9dxEiPfE3vgHaeUj7isU2Xjf5kj8R2prbibYp9TDAs5SV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oDvzhhGsLoCNRYr2pCLFXTPpoqRM8KxZHy6MaPne9UcKznRmeoNP5nEMvbToPJRi9tnv9rDcTRyd6Pu82JmuaoS",
  "key1": "28YdJHq4ymCdYPSqwFjkVqJ3vAMAoTSeTWNfp5Cs1FDQ71Wioc8eVYveyBTDNyxCgUhCzWj3M9mTDMCTtvHiCg2e",
  "key2": "25rKdFmLDESo7eNC1kzb2LmPXHa8pBVjrJRC5Ah5aHyn48y98fqr9JZ8b6tXTYbQ8VLsGKhRe6zkmA7sNmxt2czS",
  "key3": "461cQqStgXpxEQR7dGdHciqfk5tNZYF8y6LLmnVW3x9qkcQ1UiEMZpUGYFLQDMTSKX7NXcmxWwfydbVHmNfxJyYE",
  "key4": "4rn77B7rTmFY9vmbFyo3Shij4MXbNFzH5YEVQzntJM73JftTmyEJSWRzGDW2TW3wdvbd4xE12mE6Zkpc1nKAkA71",
  "key5": "k4XvugXZTaE3x1icPXK3h6UppKV2TNX4ZidKD1aznQNH2m5M2Q6x9CcRYqBkeaGeZJFHtXNd7qJzLXBTDK7j2Jw",
  "key6": "2qEebRJu9Lit2ZZZhpbSmNYmxpVq7Dck6eoAr9ZgbfcBycQinSoPJCFcXKP4j3DoaN2DF75qK61Jw9siL1WSQSZH",
  "key7": "3z95SWMV5WeVeEv24jnQjbEqy6Agu7pVAmbPx55zHjiibj6etDxDg5Hu8gXh1ZjJ9zph2j27Pis2ThBv7evxnHEu",
  "key8": "5uHvdgi3pcrQXbsUxRSkhnF9Q4mxnAcnLMy26uCxPCQbAa8xnkdoSherbTvw2wYs83nxntbewa3baUbATyRBp1tz",
  "key9": "3aPUKxJp5HLJJi7kUQkZv6xwvpHRZnGBEPmPvN7JUixk2dE3zXG8CNQucuUDeXymhVjrd7sKX9KpADNz9CTgba6L",
  "key10": "2wxdSTprSzrG1hMoFcz1HS6PHb98iLRZeuPwS7pEfbsnFGMjnP7LGDSqGrDQrnPFhpi6h4m4M8U7WmTPLpzjLTGx",
  "key11": "4sTb7fdfu5DmPXn4ZKsqnTuWE9AThZeYe9kpKShjD77QFmwCfkvrEH4fCAYRfK1GWSLAN3JS1gcKEAfsT4UzLfr5",
  "key12": "5b5AWvBxJWiJug2PNLJmwqCwphce5ggLTsRactQPaPBWpCLR2kRiCHY14qhyNuEKNsuAwSRxAvbGNM7fq6tSJ5zc",
  "key13": "2XDwpJY4aWEifvXPhQotgdQytKyaRwdMQgpUWp7vTxj2CNU9uAfNs6Hp99qmDd8ug23vnCa8nyLXPCHWULHgP6c",
  "key14": "5d5nW1S1ogistCkJrN9PSjoraCB14eGHFcA77u6PD7Nt9fZP7jyMrMPnrAruDMznY6ya4v5mPJJUzg8HEBsLRcbL",
  "key15": "Epf3nkqDNqrdSL6He3KQvmtbSx2mCtvrSmMgv4NqKJtkA26Sx2q8VqZuQasUnGZKEqo8gwdVCRa3Y3D1UzuuD2j",
  "key16": "49Mpg9fQpL5qNDWCtiBoyb9jZUeB9H4oSbpxmfTdqSpdXWxbXwHRHWQ4bdovm8QT7FM5iK5AZ5Zijs9CKS1evj3",
  "key17": "3bV1TuxjABXCcd9wmLdrnfpnz7fTky5veaNGdG1sVZn1UfcM84Ctaq3tpZoMqJzDfMJAaE4bxg7nwgYiTysaECFD",
  "key18": "5nM8ad3cBghC7fMexm69x8SdcGKwwe6Wq1XNi9Z58coq1QFvnnF61dsTQHd94q1bQbdLmtrRHh3dDEr1xJ5ri4aa",
  "key19": "2Hx33cePiWpwbFcZpJnvVpx6UwTYGr6EsDQhDuGvQsDqFCubskS75nHRufSCCKWZNVhqdWLm3YVutfpNMLCA5hR9",
  "key20": "49g59qcRT3PFFCLYfmw5JBmeUahdGbMe6CEeV9nn78kN6NJAF6CAZijfd9GgZjEUCiF2Ynv4cSr8eDngFhTZFHNN",
  "key21": "45QJrJvR9CtQRFYRp3FrUMyT88Aia7m8d1CYSMtopDnCXLdgzL2PS11X3vEkbA3Af4tyQyK2bDsGxGbrpuB3vDY7",
  "key22": "4xq69mJVxysD7Rcvz6sgz6ktkTntLydkya9PTg4mb6vbLaqRRtzsSS4MkeK5aBsBMmRFLaZkQ4ioeZyGhEVtYaPY",
  "key23": "3Nxf4eGwbPEt5pFQPepXjBAacTWBK1D1LmUhn9tNdJvWmqokfzWobG7pxqx9NSoQP3vamVp6FqvSuQHtKG1KFNPZ",
  "key24": "2mpZF1FdJFfHvJgmjDRkW9c35U5fXB7hJoYKYV7QPs8PVziKoA9jf4MQMHhC2t8wzAHU1FV1h61XmCZhG4djY6gb",
  "key25": "T6xWiikEkfj7Li9XJ9YpxiaADDQzrhT76Y4yZpUqugygMvJBD1PnV1xWFcntGvuvttPx3YomY6ZBHyScHg1gaGy",
  "key26": "5PNYPBjKmrbwVnSFGNggZj42cuPkVC8J96J7Uzo3cAHCrvxU746zAe6aJp8svBeyJSf12wVEPTvnV3b3q82Ps9Tt",
  "key27": "47cbJGN2vqFpYCKRinfKRH8SPSxU3RoWxxNsUp3qT9ZFQwchk2j6TkE2z9m6t9c1VejviFA98e8X78ecTrxkhoao",
  "key28": "tGUCEkCWFLgcja9yBMTX7Wd5tHXcuTRcNpRAmJTsudYfehKoNRuyKBA2XcvjoiDuZjrcKKJcPLFQRtBqiiSexJM",
  "key29": "2t16VWDoLVUQ3vd9hirzj4a1Dg3SRYyEiWDSWiJttcsyvnaY1w337diyMCneYuXXgdHvzui9WbzcZ6GoiGXn3NNs",
  "key30": "5ThJR8tSCpW4r36kTDJ26Z3vhBfMZ8rVHdiwSi1npRRgHYjmi4x5Wc1eN35DENjVCVNe1Y4jgk5fftT9hSRtUCuP",
  "key31": "4LAWPB5e9v1v6ZFoq2oSVzV2Fw2yyH2sYX2cDZebn9YPudoENJ3KufCJEsxqZEVq4aZV4d7G7euMfb4JJBL4XBaD",
  "key32": "3zww6wZfgYxTDPHvrbVM3GjWCLu4egv42gfkHTY2VyzvrRQ5QDAhigMTYqQViYq6HKptrPphNWNHcuBWgictYxtP",
  "key33": "2whrf1J1KKTuDzvREDupV6AdMemGeshz7S5TjBcprBCthSHAiuqDvb9zEuJoBnAwZiAf7ZVK1wVQX95zmK2kkkLy"
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
