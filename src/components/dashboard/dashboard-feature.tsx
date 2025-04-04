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
    "3wycHXGY3eE5kLWZRUVfEqbqMziY1q4Hf9JCqPDWqRMu189sQDotYZF4NkDKWGjRi9n23GqU2qPjCjimKMEMsJ8N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dCBzjqR1twFncYKuY1N6SRmnCZ5YLpyvz9RoLXkhEzfzD36BXA7pJNzHy9cRBhzR6uTAoEQJ1x7P9RnGbXhxcdg",
  "key1": "rUPrNTfwW9ExkPEY5i4pkKEazibx7gtUw59UCFSygUeUmA2YUvongJzXsjqFeqnYoz97Gn66ecvymWifqWyDaiF",
  "key2": "4fTu3WarKiG8FSNxM2R9tj3bQHUCeRWPPQf5XGeRxdZyw3BDx5AYtYHQ2MovaKSYwTQvxENXCxyoUXwBRH9Fb8b3",
  "key3": "4Cw1khZh5wqDQsrPNy54kMQniD2KArvpgFQiGHW4jhJd4ayjFmGk8ye3C5F9EHSqBrXiQB3NA1yKuco61pU5Ys2r",
  "key4": "5FgD6YJABzNQPqxago3hUmLPW8oZmjESRHw7hEPEgiWXJszdtDrzFyFRYioU7Er8xw2pRiKJu62uq2HRMZdGiFPk",
  "key5": "2nQJpShQVjjL7QHsY4MJz25MLTR2Geu41ksTEHHRHda9ru7FnEgXy857mTyy5C2SsGcRn1yfs7XK6Y2wLKm1YNzo",
  "key6": "2stBJXLtgVaJCnRDH2623ZHZ7FzTSq7peQiVxFN59ZabGyoxU48Dnr2iJ1Mx4iHZPvLfrhpR67EKv6cXAPHSis3E",
  "key7": "5SGtBZwRuU7SMpcfHQ7ZZcuUVEj6nG2djmh291gXtggN14pPq5sFQiPrLWdfSmyaWKNJ9eM53pwSAmAJMTicLDoa",
  "key8": "Adh2SQxCAmBpy1FgbKYY5pgAdc7TDY8Zbd41JgoqHaVokxzsP1Y3c8wWvgUnPkdcbXtGNNyU83XEBJa986hguUW",
  "key9": "5dpFmsyHcwhCmT6nR8P7LcBzVGnbeRchzeJVbGToyfZsDcdE7x4aaFbqfBk26aFMAf5NgaQnC684uQ2KRRXdH2k5",
  "key10": "3goM3oiRcg6SqKEgw14ZoVkisCop71pfi1VBhqqMt5U8nXVyTjDCDRkCgW6QL7YCMFkGMM6MN7Y2ASokxDrFVTKm",
  "key11": "4sHeDMCfg8X9Kv3KB4BDNZUtSwB1DtLW5dNbdhtNwj9FZknKsoV5KNQ3FsXEdQ3HrVTvzh9t6iz17wMTfxSYw8Vf",
  "key12": "5ssPKz7fYo7xqdPiBBCinLj1ZHdBhgp2f2XApTBaF6p9a4UiQu2wJPiGK25sVJrZuJ3NayvSrk53gwbT71MyAswW",
  "key13": "2SnJ9fHrpSQ7zhHDSPXNPjV7715fCeUqMFCBXPXQnnyzdULkjzvWQ2raahvLWCDS4HwcEU6XkxX5zmu6CowfqrTe",
  "key14": "24QERBTdmXidrdfKapRdhsn3kY469uRVQjmRGoGFZKpF5FRigkSvPXpivk4tpePUosKmRHVPhyE7hid6ep2Zm7nn",
  "key15": "3LGD7AqcE1S1baYsXyEE2NTsPCuiHUyY1Abim7zbjv56oQEYtCyG7JqViehwQ37JQR7RWVKpQWYnNHuQvRbvPftv",
  "key16": "29jiAXyZoPaSFGuiSkGv4W9DMFfQB3vz3LkbQukY4D5HJBAE2Gf244tgDt6s3mCCf1sNYezG9kU8RZxTtJaZM7NJ",
  "key17": "oJSqGaLUPFKBo1hffL6YjpG2kXJ3WCVSkrc8E66c7CKfHAxJUNFFix3XG3SBdrq32ZEdKCiHfx8kjicWAXyirmF",
  "key18": "5kbBX94BQGgun8bLHwZ9upQ49kSH8hbcyRozqB5atuhvGM9AmUVbfLGp94DQhgEVQrstLvWQmxe9nTPUGJmaGYiD",
  "key19": "3jvqk98gaGiEVHwiDKhFLnVZS2q19Hg2epoFbkbRVnAGS1xv7byseEXXstYAX4iRGNPdXCGfcqcCX6DX775XRoee",
  "key20": "5Yxi6vgbNwiuq9VJzqi9HMpoaHSAwkUjnBE3BFhkWJW6wrpayJxm2fRLP883JTqQWPZnpD2mqjVDC3kzRUDadzhG",
  "key21": "5Gys8ka6zts3Zf6jGPRVwVzoY7mE7ahZCf2qTGUbQDJx2BVVCGCUpFan9xnZjMTjirwQRgNz6gCDdyu2rQf58AEp",
  "key22": "66ZSEx8rxPEhAhvfvF9rkDfcxueU6uih1nuBamqSHtqMQyiEUMuDqj6fNMDW5ej2Zv6KBbbLdjTJw1dP7GqfAEHN",
  "key23": "pwQs1xR2YnugXycG2HEMYPmCTugSUzAQig8SJccnzcP3jqbANS56hd1VtgaiuHmWFGexgD7aMQSP6Ggx5BjUMnA",
  "key24": "5AJJRChsSUfdMK8cNqD3388FkCPgLbrSEGsQ9E58u12fdXT96fqzEbFisdFaywJ29bTodQ2os3VsUwt8d9z7hJ9r",
  "key25": "4dC7q7jUJTeSwxYitkawuuivU32XrphkLX5ZrrqiBCfvDBPFodGk1VJ131XbUgQpcwjHbphmrLegdiKfmjZkNLZn",
  "key26": "56bhKtux26yJykWQTJtMncTK7CSExmPKyudsJxUFQ5EXk1e37jLATo2vQagYGxguZuzevhGqQVMTjRvvtAjZ5ZFo",
  "key27": "2YjDK5NbogQD6FTDjvGaip18tib64UssQGsxrL4s3CcrMCXzENv1XtihVHEzFD7BrHxdbdyVAnPe5C2mUVaoUaKi",
  "key28": "3Cbb3emch5X54m2zKmu3QHaRqnt7qrGBTX1FG5Hys4M9dRCXQdTErEyqwN1b3KtaN3m6JNQYSuPLhymJjnSwGAyg",
  "key29": "2vU51QAEKFq1ZU5fUwdCMoAKWsUUdHRULz1uWCt5zvzsf9RVmzgdCLfUvwipdmkV42iJXc2ncF2yMWzYJNKCWD62",
  "key30": "4kUoo4qwSnHcTCnFkq8r5kY3Cvh6j8wwmH8SQQJr1xXH2gNuiEhuvvkwJyXYkVCRNubrMBF3cmfioC4rDU5aiCRy",
  "key31": "7RoN4tSS12nWuJdwjWdRDH7rrcVuorsiF3zUqwaYjieahsQ64SFwNg2Bh7sefqg9DTPkbmfsbgaSyNRfLh9xjTN",
  "key32": "5ngqfcHoYhZ9ePRxR3R9BMSuDk7B9Zeoh3h5sN1bRA39h9Pe3TUmCYCP61RyCPs4Hz9UwjjpvrZVoLvbSbxdCcmb",
  "key33": "2HdK2YbxQD9R4HsJvs5UVjH9xLTCCQEXLQkowPmoJjTp6jWJo5ZudFHLdevorRUz7fUZpdoFbEEb2TJqK6HH7eNN",
  "key34": "21JKKkZmHeiJBKTAqJLPKyhiq5ESxS5xscDnEpiQGbFJyhTt3YC2xehRRMnxXU1PBqPAGDNcYibtPTVNdhvU2DWZ",
  "key35": "5ESfBRbrRjg7zMA2E6HeNTREHo3z4wsJ2ykofg7TWfKxQ5qepqy7Rnz2GdGZvAuLSXfoRu7uecjrP4GwA4zKFUAf",
  "key36": "66iGwcx9mYK5eDxRPXdccaZBHCt9F6XXBDqoUrtJzMhdGKZ2iVoJ33swNVxyBPDDUdPRtJseXQaUnFUDbxVznADb",
  "key37": "3xhz8tEwuTQ1AXu8SwCxJALnaLrJANjetsBBuFt4hPw6durBcrktjvF19tybcetsK3YVN9PBB9NnMkqpaajR1kve",
  "key38": "XVmxamRjvBLDdkhramcQAhAw9DawSKbNAzfRTd4cX7bTa69o8c8LLEqJsfiyuLQqqmgTE8QoBQDGWpd5KrMJW5d",
  "key39": "4RRPf8PEebjQSYFWof68DyaFdwfF26f5NvcNN9w9YenSjBh5YtU19Qu36VoAnNPwByvzoThk1L1EwWgqoBhVPVyt",
  "key40": "2GnRjCQfWvm89fVEQeGJK3QyU3CQBWGGtFwjT7W6aTyDXYR1hQG8g27epny4AFyATnJx5m6dCvyKkuF4SjVo3H49",
  "key41": "5zXskvoCWB61bcGWKSUJWGMCWP1a9XmottGtkax2RBwhs6p3qMqPJJTQwZ1jTQeaLQKAaFfK8cukmA6ZbJ1qHEg1",
  "key42": "3MUs8QzbTnjiYd9bMfWNADpnSiQyRgy3UAuDobpWNKGGCN5jK6dCfsJJjiCkTuwfAr9jmYDi1gkxoMyHMNf4v1QL",
  "key43": "2JPw6BBVFrraNUBis2MXCz66G66w2P1VswpLQnk4zvRA7R67g1iJtpn9ZzyYwuQxoKPgqaqoFDxyYt2uVjCXUqFv"
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
