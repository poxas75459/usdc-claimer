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
    "4E7tY3iQ1Ce73kMWbPxqHZZaqRjMSaMsQ13DCCpp2Myc6xewiUcNsepAniot8ZT8qqtRKDFi2ofzcmeuPxSywrVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jg9EG9HNERvxgPqJcmn286uQNp3QkgNzSKGK6M1qaseWBgzRvPTXCoYhWZ4kVQun19jfvPhzhWiCKyL43EBQYg7",
  "key1": "4ULdmzyfhuV3Rr6txShva8NsTYTrfajJvxfAsNwQy5vAE9jR29QXKkwcT8UpAjLMrKhhitNCY1gKags7nwvy3n8i",
  "key2": "3cFdZ1ai2eT7e8txpM8SrnX524cyqxi4YrApreVL3uM5A4vkewKkrNW32eLkSSfJ4xyvLKtmAcjpmMwAFA32GERH",
  "key3": "66mFoR9Kn6JmQU9c3fLJVT921XVqTdcg3eJFtNtSJv9MMThiLX9emPgYJ1iujQrkvRNzkbkVSG2hM62LXjs1sTk9",
  "key4": "5FhEsx9mbxaTP13Lcv9cqnDuoE7FNzNJyTNs9UekSGWm4cFFmsPsnvsnYC78NrAuxVp1FWdjqEm85QDYZXcVj3AN",
  "key5": "27rMjz37LZZQeB1BFtdn3brv6PNECs3oRfjGEUvYrN2X1t5h6nxFMHbs1UqCXEeCpJZPBgu6oK2zFWDgGbMSA9Qd",
  "key6": "3NKa8HEypyXG5stiRLtcn4AwDFAaWMYYTq3E15csEHnUKVgtrXD5Jm8vSUQcbiWgyNcT7Nu68X197RFqfjcPXfpk",
  "key7": "2KE5Ps7yFn2FgPwXwLjHau1Xwo9qUpiJyEV6cu8i1q9H9q3WYxHF9WpkuybfgrUMA9uPd8yWjCv4Eodi7LX8Tbk1",
  "key8": "28YqTanxcGkwoLpkfCygANeC4TdtiRAt5U2HNehyQUgCRnuVZBaG2zkHnVyGoX7855uLDMLBNQ6ziek8HbTLFgya",
  "key9": "3pSnp6iwRbN3bGyWy2VoLw5EAXKzxRkwcTLnSVqHMFCbjzQPVuS3R2sswcAuHi2Z5jB45neh6fAzJDtbh8CL9pxX",
  "key10": "1JHoFkvBi6gH29eUjUCxEuQkW98CM6LPSNuWskQufbHJa3QMsqeweorRhMGVAS21jtve9V87Kx5Z8ZCYbyVzPWw",
  "key11": "3ooXpxzurpCXkvA4jkFYgmTrkJsEWw9TmYQxWViiMKqzYvBUxFfVXmWpKuBZnrzkhHmYvHjaKchkGbkGcecRv1k6",
  "key12": "29Ws8QM5j7Rz1kYG4fUDEaUbaLszeGCFLgtp15mcYLUWCWWSqWFimgvAuJ6z5P9vkhM3JKe9LaCab6U2AeBekMAb",
  "key13": "4TvXArEgW4qB1cGsRcaCz5rmNvQCGs549B5e1j19wfCeMdhyNifjh4y6tH7eeqkvFALH7PotiYFdNRd7KenMPXeC",
  "key14": "4HDPCYhGhmoqPjbcu3Bc5ZgSnFh3XGAxBNxzainiVgiKMek46otmzoEQnBu1QkjfXZ6UYindye7p6KNbSySjeicK",
  "key15": "3jxpJMaGubi6dybmVorGc1fCWgVo4qMx4xwPaF8WoNmAiV2kPzvCXWrgKwMDH6ddED2u43NxM5PnopVBfjqKbcmR",
  "key16": "4LmZYLyUYWT9dFeqfeDN7v74QbQ5CvuXCDZXRxWHSL1CYCBJ9UoeCAcgCE6HLb7LGBCw9kU8idDL5HexieXEEYwe",
  "key17": "3aPvx19TbTbn6JWBkbrmhZeUXuqxnKY8oKShqdJmKw263aEufVinKs1rsKdqc4SVeFAAmxaFdmveFwzX78h8iNf6",
  "key18": "4gbeHngLztm1fLCRz8UGjf8cHn7XJXScUZPuaSUALP3SGg4qmvyvLFZSFJpTyyf3QFKqL8RaH5ZqZwv75vRMMV1",
  "key19": "4T3DAY8Gi85pLNBkjiTZbeKpAyxz27dTj3Hgv4AaaUnJTUYpgiaJ32LZiybt2DMJiDSmuJ4Hyw6Wfx18nwtqGRJZ",
  "key20": "j8iEKnsMFa6MZtMTrMXYy8MVaLtzruMy3aTijhSc6K4Li51nQUPfnPy3KekHgRvB3AFdztu8VqHYbY4DLTSqK7E",
  "key21": "417JLvCr6yxqeAFdD2wBV64LKwRzM8V1tefyDz6X3ddQrCjdncTJPCjMrZ3xPwPUUzs57eprdgtTd8H8pKmpLw2T",
  "key22": "2SpkDdVfAF8tkH2224U5RhSu2sFKDHAHK7pyH1KzpfJHc9cQUquurfyt5Dj7KwMtqMKjk75LUC2XiDcuxA8e2fHQ",
  "key23": "5qxVJejZGeaXK8z9Giwq6gyjG4CxHPfEJ5Fmugo8SDULzh4ekAQJZjBGJzR7GL9FhurW7KbP2CrmQgoP9WPZRZ6U",
  "key24": "4RwfyhwrK3vc6rCJB2BTkCkkPZYAvRUfn7cF3VW4qpR39thq3hfMkZVsPGkrr4eZfD2dWofujdyj1ZqF4Tj4D1KZ",
  "key25": "5gbsymwwNgiRroV2TvvLEKMj1Tkem7AUqob6cSjkv6DQA129ihTBHnfxYKAL4fZRmGGbR9UL4QboSewDy3YxeeFW",
  "key26": "64b1KdmVK4jbRV62dP7EH7anSCNyJwmzrgNCdUdckMcjKrL9ko9Wz5LwqpuYaKmuDANjz1csPp1v9kLTH82JJFk9",
  "key27": "4EkVu7kwhzhwdZ8wBYCp9zXZL51R1TKwHtq2EVUVpUg2tsQmVCQEtHxPTWJzaD38bg8HAXqiyCcT5J6XxATey2wy",
  "key28": "3W59jTqmz6WNocj2p8bm3C7zX9ERgee27miqcycawTL8YCjDcjj8b11PxWrCJ2aeuT5Lr46WmV12cFFyGoMWnhN4",
  "key29": "2uDMbu5uAVdre7Gm18ubmQMDrKzSVqpzTgL2r1MdHkRkYx6ADNRJfbuh6QH12mXvdUUHYtfcmKNL6WyBN6FQEdW1",
  "key30": "48ca9ERwHSHg7UvRSZ7oBbSo4huo47i64EEb3k2cyAYafivURbBh3mWicUCm3vXL2CX5vfA7H3mSgXUanhsUyM3o",
  "key31": "5MEBFduipXyqkfqFYNXMa89SmrsHrnUU1yMJ5Fn6XMrac2J1pwAhozt2J9qwiCeqVpsWpJGHB1CW8rkYtT3E12fT",
  "key32": "3VPnpKimdNbjRpbGjHXCZKFFRPCVJcwBcBqT7ZDuzS3g7BhRWxb3m7LkhFZQxitSBzuS2QdKAtWFcdZJXWrQZNJv",
  "key33": "5WMSYbeH6EZ779NeBipef7qbSZR23kCzfhdze6hB1BWKJCGa4Qa91LCmMZCLbenAQbfszMPo1E5FgNz2EeASxpvR",
  "key34": "3ZuL2nYeJpNKNTwesrNLzHYQT7e4K6iZGmD3G6AB4YNrVenPuBitGjj2iFEPb97PFHkCQ3kZt6gjJmrgCTVCxGDH"
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
