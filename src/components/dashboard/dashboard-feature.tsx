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
    "3XQaord4EeTc5EZt5wRzfroxy2QRMJfBrZDUq3FqufYD9Txd4aDsn2piKdF5vDqPt7ax6AQDLVFJgsRUpN7MZJGG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m7cGE1DaPQcbfHTCGunL6EDbAuVb7tDZmiFg7SVMDwRExQxnHj7E3zYdTmEpBUHjWLre8XTzyP4JiQ5u6PJLMdx",
  "key1": "5trw8DaT6Q9i8LBs26g9XLz1G2rwoziBv6LopMNfhXKThWpUrPqiVVrddput1QfYUxQFA2335dSM7Dk167Sp1wvd",
  "key2": "4UsaadhQTrDhEs5t1ikjKK55RxvLafABV8DFBwfvUPNEUWwXp8YBuUoWizzuCJf71uJP8RLEz8k8mWWGSW7yJP18",
  "key3": "5xEg3mMZZ5YSt3ABNbmLa3u4n68RaTXx7zVscBHrDGfiVzv8Z7Vp4Dunbpqgejmfj2tevZzmw5p3jqidZtsbqbgb",
  "key4": "2ToerD2TT4Maq6u35yareSjTXRm7uqZMFLYMYT8YuwzxEfS3iXWoxorU1XeNw1ekohY43Bvfo8aeydyP94hRzhSB",
  "key5": "29p3RKHiaALpS7q38X25ZvcSGHntCPM8Coa6rpjjKNqA9ZBdmDb2riNdnxZo7uPmTuis53feX8vEmBaqi3Ld4c5N",
  "key6": "3CthwbSneg4mbch2cNwPbcuNhChTu1t16SzSKAPJtPpxsXPbUmMEHYYaBLRsA5oFX9aT2zEmzVCnxD2fMHBu3Eip",
  "key7": "5v1r1sWeJNWYxyWVoYmd97MUhw8kRth51XUanr9r5NXGcEGTY6AgoAWjS4cqrBqnPJUB37toXDhhh84VYPZgjTpB",
  "key8": "fB7aFUqnoiwAC6MgDDv4cXew8NiBnDeEsLcMr9neyosCn7rStdgx1N7PAMaComnuuTMAkpwg88GQNbFeJqk2sdE",
  "key9": "5BtkVJD4XZrsAKwtvZbtSkDpKnmoGrqErVZaegCxbcWFXBop7AQWCsguNLrQQwgfd2TSzPMQDgBWbyQXUgzhhPNf",
  "key10": "4Tk5SZuohEEgpY9e4yyJ4zuz4y2YsdC5wrSVDU3WkpfPneDvu3ck2KkA1qH14hKWiL7n7AG7Zpxp9pwBL56uQrT",
  "key11": "5nDzzM6EhsnAdcGgo3NBY4rayBKoGLzLwnBxkHX4cPbpcH5m7mVmwdnyyXPBYWi5DZpJnCfNg9WkQzcGX1RVuVSP",
  "key12": "3MGXMhT592u9ahRDseSV2XwSBznwLqozPb64QGjEdnMk73JRw1iFicmFkjZa2ZrNZ8cD6h2iEFFMD1PPDbjzfudZ",
  "key13": "2G1cYrkTt5tbMFLzHg3TwDbWr2Q2Bvb38prvV2N35BRKwN7LZb9zCMbPwRbp7ED9hMSBqpoKPvKo6t7Ppq4YQypq",
  "key14": "3mNreA7J1YFcqMbLT4FtzoDvEEuMKdD1tQ3DNgQ5QcNio12rkLkGRntgJzMeH53znHgoAKMHuUUu7LvPnGhRUvdj",
  "key15": "67j5F5bDLgZ9SafKeoN3YAiwwf8LxgeJYaZRsGZ64vnxHEAVFupWbQA91zoLFiVdPrRkLnbB1eBLzqmG1hrFsq4M",
  "key16": "4QaMspin7eqFEbjyqJT3dmtFWC7MAZBVF1bA9sZ9XVvMjetykaN7TjQRTHBcY1NjVeZ13wEdCkzFEyDWPosupR3v",
  "key17": "4rGevVnB1ag4GRMRy2AzhTffWCFhEm8JzgZgs5T5KkWFDUz2JXZoC159H5AzcU2Un8cx2nkfUVBc58YNjYFtgHbr",
  "key18": "5AUvweZ4EtDFWA4fo6ULrFKo4FY6F5pAMm4Dm3kc1ZammzrhXfrV78fpNWq3se8ZDynCgkjH74p3XdipTsLyXzcr",
  "key19": "4tYkDavKHguvba8DXZsvM3MXSKDraAmRGjgwHhbvbCN9TXQSRmwpkCHjJJWgGpFqTHtQMJcwcNxy7tBJ8M8gw2R8",
  "key20": "3jX3FV5ixZ8DfDZhNiFqrQs9bqoUH6WPCfUe1hcLGwypd3saaSeVkJrbRLDiREdsREqU47WfrtVBCsvTidFuqdJv",
  "key21": "npzUbY88EenmvPuD86Uuo66hf92WQKHrywyeTDC4phLWoJtRS5esJBkVLoY9kQrQ5chqSEWokENDXWkz46jxzJv",
  "key22": "4yoVaF94WRq9HFba2UDNwmf6qCuyVkM1musDZZBKEnxvBBHY4NFJaKYCEuAQsRoBGKGfHcd5fGuoBdxfwLw1Brq4",
  "key23": "fdUygjZ66RRq8MCttD6fb2G5KB4qXstj75XPH9ub7qepj77C491pZKTsCh53yMw7tD6TXzM8tF5MJEMX3PhAcPB",
  "key24": "TY7w4zG4jPNwcvzCgGhPP22VdcKKR3rsQK97Ro4zXG92hwgTgBud8K7qY4EEDQpWuR4dfT5tXGD7GCPZmwPGmYD",
  "key25": "5oojkgVKUBip5FnniJgELgwoyu2xuMANpqgjpwBKjPjisM3gfMeuSte9pHH5xeN8MiyhhDggbkoiyPrSoSfZX71h",
  "key26": "gxvUdContg9UiAM5gi6SUxJDRntZbxFnzG1K3UqKkXD8TKqNyRkrWGc3Nsmnrs7d2nXqLamBN5vpnn72PR5yDQY",
  "key27": "HnTWamdQfTnibPdSyi8mTARXhvuAdRmuexrXSYLxCiCKFGsArLpTxat1xhmKEPAT1nm9s5WQuZMDbqP81qMRUwJ",
  "key28": "5iSxGbvaF98TKZTrfg3XTSUmnLFz7tXWgSBiM38rh9dPwdFCb3mWGsDweN3YfzNZvKhrcAtvUZtVfy8uSjhwBCZo",
  "key29": "3yXD3Zv4yy58G6wNgrKar5J9wjZryqPGjNj2wUU8wWfhD3Lp8CCJe4cUMMzcEke5qiWWgMdThAUWafYnexuwfiaN",
  "key30": "3oSdBbuRsTmS7D1YVaPV49Jk6FChtP5qFtqQSaF4rRDQvhZT5djo295qpq3e2TVeTqsZJ23awbtu6PsxXWHW9uta",
  "key31": "2cXAVx2pynqda6dL5gkjoxfJhegNQDLCLWpzvBcAtKpAai3sdVmGuaXiPrmnpUnS27fNQFrEL8vDcM7g7Dy9ZxgG",
  "key32": "5Cyt4MMtJsuyZVq3zC3fK91C2nUvgSusqihKBHAWU9yifKnpKbUyD6cT2uqSE6zdB5NLwBZ2MasBUAya9xM4zCTd",
  "key33": "7ynU7nb9d1Az9WRXjJ6rvhbcJQS9Z1DcQSwcXEELWAuTTheUDpDrD83r4MFoUkXAZY7kUDzzhtgyWz5w1S8Mzji",
  "key34": "42S9vsRchpX4qWfmHxSsGnqkBJ2SGhZzMNWwh2RfWqtowwCoSNfSyQRUJJqZmRS33JAe7PYxRa3JyXCAXLzUsowA"
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
