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
    "3jY7XDLnjwSkesoNGHyDUv6cGabrLV6sHVfqtMxVa2muunLpLWxaArW1aK6phXSqAxLoDqre8U8nxpMBhrbNHgz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "94y35twC1eR46NPnXgiQwuEUL4igqRaNGeSweRm1y4cMcSkvfmuUVD8dZQbGWch61Tz9RBFuY2bRKUADEuSuHgE",
  "key1": "5sa4g79Eompv9jPoc3M6GobgcVzKA953ua4Sc1vdAR2N4GgMA94f6hFUHAuvGHMyu8SjYt1H8VD4CuQ8Ny1rtPzL",
  "key2": "3hXCn76S6uaN44KbJTNPoy2sKmRwbDV412mxuAS3a3UhrSjjGYLJZFS1pepeTED98jbgPnr3xRuVDJpoRzq6S98Y",
  "key3": "zcSgbToqqAQzGXNqTnL2kZsHN8ui3jZYo7XG1CY1KKWbsBzizQBCVePXUqnnuejiP3ME4PSPKTytziYZ9rVXEyn",
  "key4": "34vu1U9kFdYHcJLXaXs8Nkfjqegzsa2B6ExPr6G9fdavNCdcEP8aDmh6km9dhN9GTJWkfw2fyeG91p3gqLfTUiDN",
  "key5": "2oWcSMgoCJgeR3Mpe1kuwfys37dcTw1RVC5Z7heNUxPVsobef5kHV545ZaBLAXqt29H7KhZeb2ntmaRxiAmJU2tJ",
  "key6": "2Rszn5J1rqTGZk61gVQ3hcGVr3wz7uAewZx2aFuqeRedtUih5vzxhuFybRCLHSXtACYDXjxWkoQF2iQgC1FzKhpD",
  "key7": "5ASAvwpDHF8zgybypDctMkSfuKwcBZUCxgSQjn83eXqKfe8NWQAYa4ySgJo1LbVn75u9YEQzgn4gDhhCjZA3ZpC2",
  "key8": "51zzSkCPvGKByV1VR5LYrV81F8B27CWH7TMHFtvZLhwY7TwEAmuPmmPSofFBeq4YkWrqUnJWDrmyZ18BXm8jRYah",
  "key9": "5yK3LLGhb84gYSndVSHa3XTVmP19ZMLeaGgxymhU6RzJLj38JqcggV6yd8NhW2tHS3KLJ74v2UGMrUMwqV9M4hMf",
  "key10": "2WNi8FVLHvT5GGfptBCKTWRLafAwFzpUuQPNPtHqZqe59A9UPvq41TqmzT2ANJCVnRS2pTvn61NKn5sjfwk4tN9u",
  "key11": "YUpTiUJN3S1xJAUxt8X3pZMXShF8EY5D4s1DYnof24DXLQnwmtajn58Zmp4XZeQRNa1d497LZbR5oCWLwsh1JZP",
  "key12": "3MeBzpfkDSMXpwKTpkjmph81DHbzCfFqPT1CtprTHU2QMwKa4ES1SyghkuYwpb1cP9Dj9c6kK3479fzJJZLdwdS3",
  "key13": "AxrzfHHHC5NJQtuAR2zYMm8UbDZcKzkiXo4L5tHEdc2nngMCDUC1mdkLqvCmccoTwzB2tE7smU2kYLSzYFSCgfG",
  "key14": "5NNni8NbDo1QrND2ZTHrj3fw46VdnSGwDSRNJAgAoper1KgNY6k4Ja7TykZizKHBX1J4Eei5L8Qkb7xeLrSAcVMX",
  "key15": "2YEBYyauyM1HRD6ZmadH3QTTQtXEbFxxfYGFEpT61pqDVfLs7xspYvZGC7iC33R4cRk9LkE3NtNrX9X5VHbigvWM",
  "key16": "24JKYxSe9JWb1mUjfm5goGMWQSHKTY2NCHuoxdaquuv7dtVWviBBd5gBvYZRFcMxUeafGwbRAKHoS2E5V7AZZtsc",
  "key17": "672s3FzHqDHJBLwkn6h1VpdMzja66REcgGXpuc83nWnztvFcgDCtRgYN6csKjgwViZYr1PjfqsPW353tiw75vZmj",
  "key18": "2dDnhkLk9EZVkpazxqrLzS79Nj6zLqDkqeNHZbhuXApcVzQrbUCVe5Yv2WbN3GHTkCHg8BfH9B6Gky77X2eddhiL",
  "key19": "4z8rk1g1cbjoXDCwQ9r2hTGoQxBVpqEjCYMXyDxXnH2GwWZ2Mdgg6JWfYW7J3Jpp1tihqnGBhwjDBc6jNtMAT9Jy",
  "key20": "3P6JoKHpqVavSRy4PtemWHSGnKfPnP5CGiM1bqDvjFFL93PXguMzPpwXTV4nKf1Mu3L8VsjXnQnUtdTsYBKmi2Qe",
  "key21": "5f2AhDsBinFjPh4hoXKtGNaWmdDck6giYa1ERHec8tukYc5aiByroqKGXtEpWobNncet7Au1ZCn6Bp8X3i1FNtdS",
  "key22": "3C2No9fzKWm9RUKTE4jo5FFForEJxa22GLcAQM7WxRGavLuLb33rgs6mQtonbUF3zB5DNwLuAvWF7sUMp7kDgEmU",
  "key23": "5X4YyDUYkQzDNu9VBA9uRx1fK2n9GEPMPr5jU3NAgqkQCvUZmS2Cn4ipWrAgBMA76Q4msDLAMViGCxfDDkQC3Mdx",
  "key24": "3GkzvALsPrwCba26VH3L9B9vtPeD4pTdfbpbE3PZNyjWoexA7gX2XkpFh4RSD7A17hU6gy8E4o57Dcfst9ofGdcV",
  "key25": "5THqv7zsaaiq3o2PZDvHTME6kXeo3J75Wq7RQ8GnZ5fXEYhqeyiTudWpsPoimYvxPjQvky9XaHufhD48Zx2KuUY5",
  "key26": "QUq6fQ5KZQK3T3BhbnyJeYTGUU7AD9QCR4tS3LN5DdZ9CxGynK2RxTkfjzG1mrwEcxmCCCLn2ZSAvXaxvEwxHsp",
  "key27": "426erawGYeFJ8zfcwuNMyhwZB4eEWK1sJnBkdcmCLCeDP9J25Me2GQoLt2DyykbquBamqPPJH1s8k2qQM1nnnw4M",
  "key28": "3WHsWqkvN7gVriYG7UzsoAkwWU5crV5ZCMCfsrjthtnZXUTx6rNLVVVdSr4YUgJNzCwd9BgKKw58mfhrDKZbR8it",
  "key29": "2JpuHAfFmksZnnctgsygrEDy1jRybNGEHeKyyYa3bARauero7H8quesGoJA5wP6NB8Cu88qB6P7b7zScdtS4Py8F",
  "key30": "4oMiM3YsVKYCN1e9xLB587VupweYDygp7c45JH4Y1sq92ufzPj6KPNvZzoVUCgj9wdruVLM3aCkegbq33ecJPMPt",
  "key31": "2AD1eXrY2ApG7xKWeQN2EmfjVeUGvq3rvmcD86bq5N5vYMmK9j7sCbWVd634wsd3H1iack6bUB7qYoirUiHvEFrv"
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
