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
    "iTmGrwfrQNyaSynSPk1UPRX92ruCjABtwLMJmdkyobaxi3HxqheJHSQFeRpWX9z5G6fFSrAVXTdYzFQbKbZBZao"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R5C8Kr5gjQQxFwvG8cT3Pmae1WAz3KrkZvDrUHjUzuEiU9Nucwc8F3v2gZ2XbgaVSWRdmkspESLbU7M9ze77RGe",
  "key1": "3QczmBsDBu3j2xUSzrAcW3TQ7Yp12ZkbrYVZ1PcdCJisvRUrcn1UeWD3mBvL7bTzuV7k9C3cZ9TiXZTtSG9iFy1k",
  "key2": "39Xh6rSYFDWTXxKeuwRKL3je2HKuiLcJbhsv9qViS7xc6MgK2tKyvf6KcMxMc4tKCwvia53oun1UXCjgQrHRmgSz",
  "key3": "rTSCqyZz6ML4xyf2pXELLFC2gZ3CoT798PFQtKaECqcLN1qBkD7Fqq1f3ps1u8JySihpeMjop2AnU8qrmsbgXov",
  "key4": "2WzqxPxuZnNJfpBkpr727q6uDMyot9HHDGh677M7RPoCX2AnJdFJNwyAK5y7BxCgmC7RveNp9PBPJHmEnEQitCQN",
  "key5": "3hTXH4YCk6ta8ANWWksCf2z97j4uGf5g5shPR9CQ8EkFzo7edkDEQhfQXmPFGRMPLCfkGc5FoxMU2PnUdqkT5pbw",
  "key6": "5cK2rVexRXft6yMMwTW7U3H4DjxbWLYqpbuHzfSrCBQACx5DtCBnyZvUmfpMcYq76rBuaKAUZJeeKK51XG38yXnv",
  "key7": "32FLE67WvCgEBvpbeASe82MuVikTGVPd1SHzykSdHfxs98vRjvVp2MgHjLWPEVeXqESBQpEMpBKjBwVJBUqrBAFy",
  "key8": "gAqWLfAJzhgxzsLhze2BrojRtAFQ2uV3H66mFEXcdNjBUSZdr9AnpotpbjkgLLXnABgK4WPB9nJ5TUpwVdkTEU1",
  "key9": "4K7c3Ywg9wo6YpVp1hERGQjAkiyN8aGU1DoasTWtNFMtNKwySsechUDFKsK933keNDgAbVbAy3M4XNPQuZhZTWjW",
  "key10": "3NLdXgswBsxDAGSu34YXcaioqAzm4HLSjMaew6ubQ5zBm1tBQHDLpDcrk156HYriWkZdfSHW3KiYYMwddM5y1F9w",
  "key11": "2CR3pc9v6DS6CRUtPfMJsoLPmYCbd611sL6sEQxgYjiZAtwv2w3UpQ6TZwtX5sp93eBh5rEgQT6oiRo5k1zqxzqa",
  "key12": "5YKJfpAam3UvtxHHcRBoJ1BUzHXggR3dD91a3dzYb7m9bs1Awq427q8hPEUBMPqdmn4jhbNJMsFEzNZHCZgdh4VZ",
  "key13": "5dWjpyVpRydAYSShkLA6QMGeeN2hAoWhkxLNsoKSnwx2gnkaFKf5Tsij1roComvj9m5Bt2SAFqLceyqBppK5UdgL",
  "key14": "H3XqCDgwvChiZ37isNHBAKESG51veASG9WJHfjvARYc7dcNigGqAShb4tijpyMXt2QHWkjQBhV2eyvRiorrUBqL",
  "key15": "3QE3m9fAUvxrDY8GbnSDcpmdwmRsuxjjKYDWxomHBp547Zmzq7ooxJB3e1xwf8uq1HNhGqvNDJp5VsZH7VLsEaPK",
  "key16": "4TWgeDp1FHYZbgY87JcpoZzuAX2dh1zTc4w6CaRNeWAN34pAFqZfaztyEgjHY9Jhu3XNxzBrXiowdr834StjjNd8",
  "key17": "62c1AoUchtiUH5vRsKSmPH4wsaTMXy521tSLR8hj14dVTKYn4EXz3Xz2Gvqa3xpk5HAzum6CFpcbHrfha4WGawG7",
  "key18": "5FcagK8weAgNDECmSQzseXJzRcDYkZoenB3pZgKLJXze4CY2g4bZtAEDxKpf6ngwo3aKzQ1ctQTTGnX9tywTdqmm",
  "key19": "1GCuowEkeTcsCrSwEdCR49D8Ff7gk3vcMdpb14JkTXkJgrCEct2bog2mzChf5fp9CyxM1MH8d7hozQhGej2BQJh",
  "key20": "25WzgLRSegNbxvGW7NmgNFNqq9v2vXiH7fBzwkt4MNj21WDGEUACXjrC3uuMLBh3Gw5WwPhisB3DiNZC44nknFbw",
  "key21": "43pDrYZ31FawtrufsXFGu9F6qRDqK3TEsfRsHK9FmebSVg2fu3fHs6FQQu1jjhh6BTeu2n3vXKd9WenvJb8cx8XQ",
  "key22": "3kH3xJNf6u4ZhZ8GtaeL5aBVVnpk5ANrNQrrmw4jr3QUQpECCTuBFYKSPDsg7ShEaizzF1d9gctUc3m4tVkWJLEw",
  "key23": "5KvDHeEJwTfLsBB7NbXH8V4qSmvmnSAqpCxqe2F4DpxABCvzZ9y24m87A91JGjESLHL7E9qSXWEWG8XwpNpq4hJM",
  "key24": "2zAbUwCybu5taQmeEWiboPGLs4o9zoNKym99a7sX434n1RTZ8zPgdvSZbZjn9BmHY568BmFRXkxkXPj65esopf7A",
  "key25": "3pxjzrR6S1B6jYzbHKuZgyjeW2Wj4bbZbfYhPFw1j8uNrz2oea4a1kMUEXEJV5ZLPaDvyCRahS6QotR31rFVzSSb",
  "key26": "2PJWje3tXhSLtQWUcHdWDPchfxG9KTJ7n747jGxmLVV9g6jUKnkSEpi9DeThDtxQc6PKssd2Lq1ZyxrFCvXzp3Ah"
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
