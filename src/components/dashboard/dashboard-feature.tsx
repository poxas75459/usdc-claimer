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
    "5hrtfBgY98NfNyG6QCVu3JvnDi1tQZtqkzY4YKWp8V3yEB4f9nWAbSTuGd4sNGXD2tsdiDbJeznEhRynXaP2RoNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CkHb9SmpRxDqdKafURF4LtZBBsN7dSWyrdrCP93c44iDwUZ1aKk1nNNCjKMCd1QcVVCMhRNnt5hq7Ly2yMuZxRj",
  "key1": "67Up8teRJqvjmkpN7zNPfuPzKRLNF2922Je4mvsfWApN4EnN4sPSKd9KpQMZfE1LvZq5AVk4yVztRmcCG2RqnQ7S",
  "key2": "85QAZbXNRhcCPJsx9n2eFCDHDcedUmnGs86XrANXWBzrqkzqiYASTUMv6iPXNyCm7Rv2nksQXurL6FAeqaaDznQ",
  "key3": "28Dbw8HrkXhfv2oThAaKiHKWVJkqr4X8rx3QrCsNLjuEs3uMM9pr939mn9UEfchijDAfGonm46huahD7vXiNgK7e",
  "key4": "3MXfYUDp1ZS6iwxceurTrHXfLcyJ8mQNxjz2vxuFwTYoBGVsrwXjk6dRHQnbMqsPFHQarzLrgwN3pmSkdZeUrsKj",
  "key5": "sVHzLScmrp1r6iHaQNjmLHWPv2Ad5MygoANF5mKeiQfYPvEeMmanu8Ra2iuVBTAC418V26jKqTdXV4KmwyUcSvz",
  "key6": "5w7aYXtsCsCLsu5CxZn8oZAgAmxQdxBrks6w67aPvP5kBvB7dPsqTHCRVDG91n6B3yCUV2B5mCEZ9kmZvKw8fvWP",
  "key7": "2kQ9voBrL5PvA7ZYcYBa4QxYrBgsPGCKQseau7NHDzPd7DzPnVUVL96tGmyF4CDa1FFf7BBUSCJU92o6jjZ4SzvL",
  "key8": "362P4YC68a4nSPqp93w5FR82PwtqbSD1Ch9JwZ7xGxMvyjFaiFRXWyfb6ZqqxDV9RWJR2d6Nuv6py7wEuRbxuuXK",
  "key9": "3UU5SN9ARuJj1JFYykMBRRkFyjnho1k5Mv7FCmG6g67w1c9rCbY3YM1aKoNpdEETcjo7YMBm1GDbAKWt3xGedvQi",
  "key10": "2vVnXe6hf8BN9dbM14d2zS7ppf28eQxEmeRFt3rmd5LtLAHSiVSrYnEAVrQtwpzJXNnQqxajZqNnHmSpBU21yAeR",
  "key11": "x4rvGZgUxmaTfxwNHrfgNFoyJArCxZrB57pSz5gzVDFjGNJJNq8PaqHQ3kEx3wxmgoDRBJ1yXCRAjz865UKBAaZ",
  "key12": "26bbGSiQ8BX5FrKHppMq6JffYDwHzxMnGnGFGpHCvSybZss6F9eerSXnFLsXjNyjBqcv7GAzMAcovZp1tJMZPHRF",
  "key13": "3VfVcPbG4eATrtxAoJxE25oQPf4KKP8aR3WwzbM2vTxtgCsp8jy7cDkz7ncc95eoeNUrLqxgJnw8P69k1TWXqSrr",
  "key14": "5z8LoGTJBCmFfzYvp2mBbGUGrLkL2U6ouienJddHktTnYjDKVQ6Jnufwaqzgm3xMzdzWwz5rN1S2RQVoxJSLLXz6",
  "key15": "4RFPVwtajxkrzqZgYNMcYbpKLpEF67tJZfJF8a6NmG6T86BQqAg7S2rP7dRszTUJcdttaCwNCrBK3i43iJ5yQ3n9",
  "key16": "PNdw4Uf2oqmiXMSLsY3uNoKtSevZUbnE24xuBtzwnxJ7yg6d8KzGCxc1reGfxr98ybQQAzKbQNXcE4zSS7GR88M",
  "key17": "5Gwk7wDnNFoK8A3HUFKLzHiocQ9UMzm1hPgu4uSwJgvZwWUxyWeCkv9QTksyahx3QsbrUurE9AR4Eo859Ab9bqDi",
  "key18": "4FHzhnJB1csFVj9o9xcDTPTptrwnKHmvN8SGPe9qVY15PQvZhGtSNuNioK937tRL7PZ28wFxaVxHQeybCKPcwra7",
  "key19": "5jJGSXFaUpurBRyk6JBGTYoVcagucXrwy6JU517211j85f64XHPg9buAHzLC9RotLBVPSP7asLco4AfAFkCTW2By",
  "key20": "5YXWbVgcqsWf1VhXzCBD2rUKdYtvTvHH2m1nckdcVErryLrBr1vrYNvq8c7mbiESWm8yDsEZnUHLeXBpRCSNvbe6",
  "key21": "3CLF8BB7rXL4WQSy3dynvmUKZkJnEjQHGZhiyrLm9YRNwPqomwJWgvT9soqL9vBmyny8dCytZumZMMJbMf9a228C",
  "key22": "e2rnB6baorNcJyXnfqLxShd35arHJSM2JUp9rNDsc3js9RWpVAf7edN5QWdJhsnmmY9yENUJEp2r2VEPwkCwCUt",
  "key23": "5YHEvLnbAa2BAXuHHyyZJuJbWD4EKzTnNdoceCNq4R4oHVBXcEU3pqtRGdSCvonWhJAX1UWbZPScyY5D2RHoRvj5",
  "key24": "2hCzHLM3hdD55fcQSTCcN2hsPdvV1foabFG8Ua3sc2TnTrqouW6hEDL251SVM37qQr4SvNQVhHyFKd5KmFCkzTff",
  "key25": "3BhzD4HQu43dVUt9wvTVp3F6sGhYgZeqTN6u32YPBud696HHU4Yn1nrERQomka6p1mB4sWPEhgHAZs4xzTtqjVC7",
  "key26": "2w5P29YHPNRoxhViuSmsjehKMjpJq1kfgaAbwZVrrwtggMpFfrNaTpKUeN6BCfBcsBsQsEXNvAejAwpmsb7knPNf",
  "key27": "qUHe9RuSoXLtVz4vsLtYGd5aBdm1apYU8BM1UrzkaLCxJuZVEh5ZcQAxucnp8VVFMwKgbUvZUeD1AizAhjPPUFs",
  "key28": "4Xse8io8ViV12wbfxBxpNdg2kzica2kBJVEXS1sCFQNaF3sPTUv2BrSYevfeVVxiWxpRosFxr6Qqbg57sZe9EvuM",
  "key29": "46Lwi4ar1iT6pfZZLRZKewmARwat1s5kqAA6RM2qT3ijobdE1Txy2FiWyxJvGoM1cpyEbnXfyd3vX625y45Gmgm",
  "key30": "UntWVSJib1g5MyKUTzjLkEL38hDGDW7sEAk8sVSJaVe1qoiSeCBYBfguZURwHi4TujULaFSF4hv3PCYePzTbWue",
  "key31": "36AHB2K4o5hhFVpsQjAX4ShkaAeSCV9XviKFoyCUcxcwusMvDXLqWD77s7cE2R3iz6agKXSfDGe1iTt7BftLd1Fo",
  "key32": "5BNfXZkghsyvvxDEHmjXVgMhNJ4BXbpX86ZitMwQdF5TfatQ9SpcjDgnp6m3wiUeAzY1qh6QAjdq7LZFMtcxGFCH",
  "key33": "4n8enUuUZ9RsSYuNGAtp2htCvwMX7oLfhtsQa3jesZJeb1rZ2s2rXXqkc5bq557hVYsMfrpnqUmZ7aQ8Duy9kYGM",
  "key34": "2QCiXCvLn3KNpgJnNv1Y39MxL3oW4gn23sRAU3H19U7Faj7P73NwQyRGjvjyW8t2DGwyGq32RZPwwLpKxmrQABrU",
  "key35": "3fpDFHG3aqA2CoyKLnfrorqtb2RRbpfNJYB9HzWvG9ndKCVKV8ihotzQ3Kq3GurDjorvLtjcVPZKMVu9fTkPRse2",
  "key36": "41XMid9Q1iS3hTV8u8TYR11y2vH4HDeALgrVZca4nKsod5Va61oo2fqN5422AwbMAnCFjPxADeY1zbwCFV3iowEL"
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
