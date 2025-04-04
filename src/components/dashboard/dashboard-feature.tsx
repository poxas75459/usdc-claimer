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
    "4g9HhapiCzZX84dJ44CJF12rYWBD9HKCruGsfqHqWg7Wqau3F81uXo47eSZw5RjiGLkrmPcVy4321eWYzZ5F8SXB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wJULGY6hAWdrhJ33MmrXj9DsZDZR6txD7Ru22JhcNT6PzyZrJxa7XFBnd3p4YC9FwgZkbtifHyCwLW4Dsos2PM2",
  "key1": "5HFysvSbjR3QxxXPdeyVJiyFTC6P4e6WYZH2fxoixGbbapHTp5k5Pgw3MmypsnLZyeHnwj3evypzC24oTtFv3BMc",
  "key2": "5fQLSTYkKnJAvXxXFUAf1jHUBGAp55BVw4zL6iJvJi6X5JvTNYiHVapgucEtTAfNFUhtAcQhmZLXV9kZnr5UsHLL",
  "key3": "3CBzR2SNcppCmBKbTKQzPsNjP923VNmZBLnTJujAuhj69Jt5JnPt4LhCwEKfYxYBiZDThfYHZ6gA5F9C5cHWxsAB",
  "key4": "65YRqnXgzRkS2GV1P2WytfBktDyqQDaLYDLa8Cp3oiFju88WQA6h7wfA61K5ekkfR4bR3K1pQYkPFyHSRcstcmXF",
  "key5": "UZTC9unhw9t8wdgCGUffyrg9sJWUqoPhepgJBRyVq4HbJwjTmM9gxh5wheF47Wqk8QrVTKKy2hAuNvxg4VRJHvt",
  "key6": "GNKihPeZnFxyoyAEGkfPCjkxsZ1N75BkXfcy57KK8B9HFUxDHnyrfWS5yToaCqTkgm2V4Mqm6BRpFQZqGMWQyXM",
  "key7": "3fTCWdBQZ756d1Mk6a2arGAjjJuY14WCpcSY5MeouAUZyVMdatTSMLMYxaYgMftfrgpDMKnXbjUWpmneGZbQ2mgu",
  "key8": "64YNiW63MiLkX19HYMb4xkkZGDexyqvKsM4YzQHpZgQC5jcns6K7xGDZti54vdco7awL6VVor4YU8nS3pZWVWJ1Q",
  "key9": "Y5gwFy3FdnebpgvKgBx31JPhX6FHnLwgbB4qpQTDtEFHzPqszntgDyTJDd3pVt77RWSzKkBEN3SSWhDd5JAkSLf",
  "key10": "3iwUwKkUwh2yJFiB1eQmEFFX7rhkcNzujQCurdR3tiBGBUnyWYHTEq9tNvXTrnWBuWh4ZkmqToBRPGq1iPzDMTmE",
  "key11": "5RMJ9DM4P6b1BJUCXaxX2xWjY9zEoknUhbAUKQJUW6YgxNJxY1SffttfEb9jCFaGzWWX1e8RoMJ7yE6XHdu4bKup",
  "key12": "3XP68dcJ8Q4QkJLKPMZdXNCa9c7bwW2tCHVGYfB5X1a445H4t4xRKkw1RTuVzenSWup7Hdft4KFu8XVoSxnAzNps",
  "key13": "2fAya527g9hDGkvtEtyC9tPpJBQHC6ZbkjUzqafA5nrzy2Wa8WHW69kspzgaVQVxZxku82CukfMLF3mikxx55KtM",
  "key14": "2rM2S6yZUZJqrWWCTWx5hrX6inf4Th6ZVKY84CmJPVjpLmwgarM7cqDjnicfK2SmPAq8fDKB1NuSuye937W1dmCY",
  "key15": "4nQwaEZRT7hYQC4ZXwFKGp33jQHq5B7crsYDPniCHhS4rU6suUvhoDXJ84E8NNdf1coGY1wAduzzDBHSrosWEZhy",
  "key16": "3BQDGGeR9WGcjMhTpGzGNQpHwC9MJcFWF8ZeTT1pnGFDjVQSdsEiBG5bHgtLsPMJF6vHu3SpA4dX8tPSGCoCX3xz",
  "key17": "62vY4qpEtqpBSfLVyFbVjQCuU72jAsDxKvXAKV6jsr37itZDev3xNA1LQNaHMYM3YsvSqpMASN8Nn57uh39JFsv2",
  "key18": "5Uyxq2YVJS2cg3r63Ngme5zxm7xcpb1DUqSPfeBGz5L46tP7gcvFEhFwRBHsAno1R4zwUnWdTRX9xiF8KdUaALXY",
  "key19": "5tVYedfNQBwqFp4QAWumqRfpJ4ciaCGjDEMgLRBuD7KnFGtLjJF84sB1ttGQAQnfFWxDoExNX5SEU9SxrBr6RpwZ",
  "key20": "27VQWoWov8BaAMqQwxDTp93iiYAjYEF8T4aXDUMotR3pHDXdh3XqLsYSdoVmVATHi5UEdCQxRzuxuzmzfuBWNdmR",
  "key21": "22LyJBPDhjrKbwP63PSnSZmYj2WDzFKMraozCaqkGtJ7k9Et3GUMLmQjsKe64XSnW9E2QrvDGcqXv2WRE63zByyL",
  "key22": "2GTFr89sWt8Jbp6aTigYDHQskvrT2o6PNzwKAetyp8dBW8mcFa3GPq5tQjK3245DCAi5UmsFRwZfde4oZ3oVCr9b",
  "key23": "MWHMiNP3KfyeGYrqCSzyYqnbaGZiP9psiTJSGd4HEKey2QdGkyP59RuEdQzXeJmtPaWw3gkxoacbFtKzwNL3poV",
  "key24": "66jXHs9VSzPkemoQQFGYa2wcGap4ArjfY1Nxbb4ZKN9uigZ9j6arEQAK3PePdef6aDDGRZRcBNQyp6mBVjWDi3tH",
  "key25": "4HtpFVQ2qdiWurxUfAZCG9vCiZjLdTsneogDYvGPiywfJTNxMDCShHY9vMxf8nCvsqp969wGxmzRND4xpijr8YtW",
  "key26": "3kEVNtBpoFRBNhoasTJdJk8r8hz2QL2yiZwUCx8GV5xAq3zYDPkihVdVsGKyybNoXons68iHpkTjL4TSqg3KFN7X",
  "key27": "2aBJBPvnnwjspRtDgTonNwKKcgQUSbert5UBei6zdvEBBLEWqbfbKDpZP496pY7kZk2fZ1xxRvXTxRNnyVG2cTje",
  "key28": "41jSncJgR4NnhntydnaPVEuD8bLdmMS5Kph7f2Zsic3EAJD32QsVhxaaUxkL2VTnhKtMkqxXpCzfzuA3fQ9KC1Ry",
  "key29": "3HoW3FMJf2MkThauYi8casyhLQcpLLmhhK353uvkhnco1eZD2wkqRz9UfXZ96Ean1o4PPsjXFpkxKWQUTpxae1kz",
  "key30": "4VWHQjwYi2ENoYJkW9hgTPXybLCYPEYRNqfSyKa5qQzs5UAtmScPMcUzDznuRciLyZZmHUj6X2mHB6r4ugJNScDs"
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
