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
    "3XMVkMKLbDvKZAM3qZnFWeZHMsUVWG6xne75UtKcFcZ4m52Sep6nFTrVjgYBUB3SpJSzypz4LGZ2SKeTYP2AtBLs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQ4pRG3VmrPVFB8P6kbhR6C1FkjwEiVkxmq4kQe23t5QtSSqcPpczGm22eeHQfZ8A1xZek9VwCLjBarqTTKCVux",
  "key1": "58Nyyw7Q1nY9oDtSj41YEDaEEp5PUgyCL7AvvUzRCQhg9zfJ3BPoJH4tcPSxdn86s9tWTV5vEfBZf8FuDcnFhMGJ",
  "key2": "b7VKUZW98XY1Zg9HBYV4youAxMAGAio7fcQ29GhdohWFRkLKvjf75zzrXR6Nu2ezr5zGgrGjS8uix5DwXaDjpjU",
  "key3": "4rcuSL98QbAGcAkkiXuK8iSZ7RAADjMKCACxWj4Ltqs6idNPgge5f9VqcZSSB8ZS93reD8pbyi3iW6AFcFntL42H",
  "key4": "5zNDcgX8fskqxph3HAAagwVRpC733feB43sH7g4UVzF7QLHJB18NQykKBH1vzhk6bbPM8DXfNj8JxsY4eeW9SGea",
  "key5": "21ghyQkAeUGH3h8gonuE8exMZaMw8ZEg86XBYCfA7VwQxkfZiCb4jVjWwBtMingwhhr8SAupBraCniT35AoV1xkz",
  "key6": "4LcukHVeckL5vqmwgHTyX1huTiP3nuQ24f7XjJVWjKN7koMQe8aV7BWVYfTt6qyzL9MhQcw5dbhF3EKUtYjVdc1v",
  "key7": "2CTW2JFdDe1Gfn5812r5oCHXqgVS3cntJVqErf9RjVnGD59z8a4duZVAXAJTzCR37x96yPtbwUTa5P8LWKMw9fx9",
  "key8": "3cgs5bsWx4QofUEUFxX42SJ7C8kWPUheeDFFztDk9zHMbkwRJeYb66LGHT2hC9idVKUAs1B2KZ7YqGAeQ4Ntd6TD",
  "key9": "2FBBVgxTPKzPJZdu4gYvKJgApT6PjAgBYNGJADCAmjHygD2fCChe3agFeG82U35VXEPNfqRmNZXggBnfiR4C4tym",
  "key10": "4n9EHwZ2vGPpG61iQsoUbHkEXYjtvgRgGfjc1s5Pzgkm55qmx3HavnRM57WSiQEd4XhGHtRjjKJdXR2WA7KYsrs9",
  "key11": "4cMmfeubmTJNDvKL1sffvyCyrH3cZ3BvY1F4KsegYf9svVWANCEetsEbpxPAEKFJJwmbtqiAbSCxhMKW1B6xzGQt",
  "key12": "4J5cZEsCyeKTFeHPGPyeavRD7zyxioT47VTwNzu5iUYNDUTugkyCPU5NmNhSsWXbVNKR47cZqtGz5o84M2CmZEx8",
  "key13": "4dChrvkWCXhwDE8twodWTTD4sEnVMVEATu5nNUrwYFWx4QxaHnvvfqpssDdDUX2oYa652mrEcMQpvUqnijYhqR2C",
  "key14": "WcoDtaG1hJ493VUYNazERSxn4D6UTWdWk2WwDwwz7TFkGhyaMfp8z9rdKWS4kvr4ihSDd6FQn8g7BqwLGwRCVQ8",
  "key15": "5urniN3S5CnsXK14t4xNjz7TGVK5qxsGew2RC4197bbHnJUeuQjMGVNNdRyNs8fRsFGYpkdtAzqNTUE9dVCDmw6b",
  "key16": "3JhGD5xHuQX641p7vYKpQTmaNonVNhsEs9HX81jkx95yZYvDEzks8tW8gwTkvAXsPG2a9NT5R5RSvcU3MEd4JQTJ",
  "key17": "5i3rveqecc3QrEhXRYV7wdxHaKR6m6cRSpD9hGysHgyy5Pq31yb8xEV5DVrUJYfG4BA69HwMu3bvgjrxbFXcJHP8",
  "key18": "2rWkKgDGoNKt9PzWz4MAWNnxofpvsdwerWB32isZRs5NJR1VDVu2NW67uTBJsXWDEgF8iK4mgNjiEomaThWKL5Yh",
  "key19": "4hydcRn49xmBtnntBdY7RVeGWHSxkqxLpCFw83qd4ff1bxHLFNZmkk266AMWEtfJXEZqgbph62Cjc2VWyP2YjQjG",
  "key20": "2ThThK2iwaDAQyDiWNMDhkvSzc6sZaktCSrZQsDthgHH1t5ZqFS3KFwHqNVczvGN6JM6R8Sv8F5nYADebYYkTD7H",
  "key21": "EyvyHfJJTTAadAeaUbPfiXH7goUMYKqC3HbuxHqHEDTNa15kWqCZEDif47Bg4KtgrRz4g6w9UUq4rjwjqZFrEzY",
  "key22": "5qq4xCdALMwGc5UGyWCh4WcMcAh1mjEt3RkMmYahFkadEtf6akjSd1XQPBfSqN4hso4a73cnp1M9gRa3juVDRhmn",
  "key23": "5DhvGsgqpP1Afhuh9TNpoxV1PyUDANJ16aCFqayu6jLJpgCF3XCgQ2Cvfs5a5QVK1WQLCzPwbAuJdxJ6R5i23y78",
  "key24": "2ZaUFoUPQGt9iu3FftsXVScg4NVRCCSXUgH7Jw1C3hmJiETqj4mfVxiFtCisDnF72AGPhq4ttSLmK6hxjFvJgRkr",
  "key25": "3TcyW7zGePEE61zyDQnhCi6vYshXkaMUFxerMmuFn7DqqzEF9oprhSMwTh5t2PPh19AQ6sd9gor27tqFp96yJN93",
  "key26": "54XV3En5X4tdBRgJUnQNoqE5TYhYnUVbmTH2r6uVE4pVRwKbSXZFk1dvPSHcMBVEnUniZ1tWWRXR3CoAXnaKUpjM",
  "key27": "3mpUEf6eviQv86r136cfNuMZD7aX5pYh3Da5bNdq2Rhe4koEygNc6nucs3w2D9eTy1uUfNXLhzsPskYyC3wggkr3",
  "key28": "33EdbWt8jWWr3rp3Q3qjoKGtNEwWBykSjYWPvWiz4SJz9abBJxijZqdJu8hJMeXSJJtGkEFTXAcdEq7iarmdZQrS",
  "key29": "RZboAM8VUZAeFsfMLV4Fprhph7BZNTkxoEqE3X5imEKm6FrAonGRBpWYnehXAHLfo3tNpbA8wHQ8tt4CoRxY1LX",
  "key30": "5D7w3vXbZCgv7FZuq26C5MHVspzuubUVjqfPq3MPUiGjAx54CtFz6Gh8DGFtGXNS2D9brp5PEbaWoXzi9kuAjhef",
  "key31": "5zz5bBLbamA4VMcXM7jJf1EVra621fBKV7sn2jqd297zR7jZVMPMhYjzusHDhGg82d1bs8UaSns3z3XSbA2Rnrgi",
  "key32": "4eQbkXdfmXT6ASuuSA8K2oXAYhCHRnetJqggsjEhfQaDVufKSmwofGHS2QKjn56sHainCUuuQBpoXCW2hmWYgJop",
  "key33": "5GtEqTYLtijbpsbz8tRcHMJMgpvJr9nG9gbuQrSC3s5kLchFJe6YQWn7zeNrLL1eYUCrHLtxuG8sHoZB53H4gaaj",
  "key34": "55jMevyYmXdjrz9HyiD2T6UF2mZ3JncKGJQkJQdcyLPEV5CYGGnwaLdp6nwMQCfhxK2birgjzUYC6qg3Ti6xTNhZ",
  "key35": "4zbrTTLew1fEAYmZBnA7R9w5kXve87D1R4UCNVC5Amwx3dSqX8TwUbAs9UaBRiJGnx6RCAGtWZxjLfRuag79h6nW",
  "key36": "42cNcZE4T3Ye1K8M9odQGGDPxVoLK2Jk24czUyy6h4rD4pvrFUoprM1UVVMZfXkDiFQTCBjfb6b2MbnK5XumszUy",
  "key37": "UXu7hmFkn9xgoe9VMqDCz4E1druEyeEGQuTHn24aZ93E2fDHAThP3tnWdJYrgxNXmcYrXvFCoEQTA7Q8LMy9fiZ",
  "key38": "5wiecQNbUmEqcXyMWGvmwcFQTTwvjH3XGGu5oxsEtzzFcwJbykWsQF9FsGFiQpPFiB4WbtrHdFsDkH8EQMd1KF1w",
  "key39": "4YPx7FNTyTfjmXBvbhweJKC7FFMiFAH3afGXZMtKQKyEpZ7o7CfWDGdgbW1ciCEyjq9U4SV9XnRndw6f2FANyYaV",
  "key40": "34ZcApvGnBYx8iAAAzve4KEsie5AGzzp3ag3YYRLuyoYdY1ykA93MCkPkK1x534ZBti9qfhiBbGS7JWLyDA51g26",
  "key41": "3AQsPYQmtVSRCuAaxgoeYqDLDSVC3XJ8bXuYM5hz7V6VN12CRX8C5dRXcKRyCu27zGw5iiex4m8eCBrFRxT6tx7",
  "key42": "zX87AP3DMdDTPRFhD3EjESVhuKYufSpGE9yWCky9CLZMxvRHkLhbdrpFyZThycC16s5EMxcvGjJYwuZP1Rh8Q2Y",
  "key43": "2ffhitr87AoMpyMZcvMfKJ6jbE161p9aAgPqNUCgdLgKXio7DxfvCZp7ukJKLgQqxwfNTuVKKEu6YPCW6KmXYRLG",
  "key44": "45w5394Bh3tfigTqqajtMxX3jWPGMkWkHkj8cjDkAwAdCekpk48x9Uvs3bggj6hXrQyNnD55qseB2nKhQFdwHb1s"
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
