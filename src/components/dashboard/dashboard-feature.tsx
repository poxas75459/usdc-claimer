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
    "5vy488qX2Ljna8L3iNucrMGUzZ8DLecWH9TNgJv2f2uHMXrdkYqGumtv87JpzLm793KyB3AGTwPWGBZP9dV7qSiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wqc4dSJWSbi3VfjrsThgoBzrp8M6yYfr9R3ZcpBB3hTDwdm9nDCypnFgNo6aqFjJ6kCmoHcC8Gk73QvupbA7r39",
  "key1": "FN1qJTApB7TKQmiToyJjuPaFcHx8Nh3nypmwpu8KjK6mxhJcgjiyYUL4Bhf4p7wyEDr5eZtEp4SWo8AkYAmC134",
  "key2": "3ETUPs5nrqWVtfoz4Jg2K4V6ysvx2hMXTCw1oWvqVEhrC6osPQL3JcZyvmTZXHwccJCemE7JZzw5BG1HxA1uxzWn",
  "key3": "tTgEQmRRQF8QBuTzZSe9cYeuEzHAHGgoqe37MZiQLKbcgSKEd41ymhX2k5VSqGedXRx8jGC8JB7QsL6MriYUfHK",
  "key4": "4xU7MGM8nq1Vw8EGJxoXnfdUq8MYDrMy1eRXNrySZagBSswVDctKKPwZQQeHoviuXD8WVkWsxCtRn46o4bLN7jy5",
  "key5": "3WmeuRKz45yWRVCbZ4rqX7TE5DUdSRuz45TdpCrfKvRqMvZwVsz2TDF4na2bammXbdmvcYwCKPGzZyEXB2fttWNo",
  "key6": "5jwF8R9ggACS4vzTzKMc7im4UoNiwt8yisgDBjvMfZgmEkVzrqtp2EMiQYBACn2ipxfPeavdwPanP1gH7pHqV6mL",
  "key7": "5YKLvsKpNkfz2m2JvzyToHqiX71mgwieatbKaczCYjPtJr5yyHdn183vB6xLTyc6wMu91GDDH2g7XsuQ27e1S6mZ",
  "key8": "4qAV1jVtqAwFpT9UDjD3yPykDiEjz9kGHto4boiEduS53pq3TMn8WYSjaimZxvoDAb7tvdUC2kKmSrz235Qg4cPP",
  "key9": "5NA6Uu7e282btik14vrh9o8H6i5Ejwhzz6KuY2xhycEN6rpBtmcmUWrWwmPLxR7235dLkhYJthtEMx4M6BkZy9Uc",
  "key10": "5xK8QXqeqL1734qKB25uiKTu7seQS9rYarshFUFZKP76Ycumcnbth2w2c3pttFxF4JEHRTXi98oAxEsUXULhceei",
  "key11": "4bWcCxkBPoMzkJDvvuKxujKsD9QmhhfMd4yrCCzEi2r9isbccLsdeAESS2VHcG9a7LpEPGpgKYD1MBLQZQx6qwhT",
  "key12": "kPnaGWmocwZzeegrZdxTdUusZK5msifW7Yyb7DqrhMYJMfYApyT6CfyBEGPsieNA2BxPntKh9CmXYeVN85hhUe4",
  "key13": "64K18EizBVwoEds6p9CmDea8qhSqL8573Gv31KjyzjPBuYaH2tpkyYwi8vyjiJwmfSCrpPMEuysCfZYbw836WJPV",
  "key14": "5KryHGMZvfCpxhFpbnLpdSjHJhTdB5jRVdDXD3QfLAKwAxu4tJSiDGE3SHqQi4gdfKrtur7jzZ1WkcipEzVZGRKB",
  "key15": "558H6YLoZCoYeMwjckk1pujifZhS9VVi3BxSkNXsVTWH5qqza25EarnqWZXidE8VLAdwQeynCDfrBrE5vyYhqnnz",
  "key16": "4JMUBPmvugtAVNS6YxzEFMYmLajN8eoXf4ETZsLmj8hvCeRndiWjyfN1USVA5hf97Hr89BnmzbeNK5HyfM2KPJuJ",
  "key17": "4oRFkZdBYxvi5gw2xqWYm7dsqLMftcK2gNLr5FA2cKJf9djVjArDj8FWMtDJTm4TYW3ecdztCEPTfJeuYrgDfmUi",
  "key18": "4LCpNSQYXhUxLHMWPucqzTeZUnSphK3jS1hGfQLt7ZDPVeHd8xf6J9cb7r5on45AyJED6vEFoiBVCNuqqFcKHqTY",
  "key19": "avv6hyNuM3Q2G8zSS53uk9FwPagQwoP5zUPhWEcGrGyoZkVSY1rNqmNxh2X7sTAbF7WuuFPD7rCduiQtB5UTEvk",
  "key20": "46MXqQ33pSoYy1znmm5W2Ao6JjdYSr7qSP3SUmTNhDgbR5ouvRSirNrBzCDQFPUUXfZzxUwTs2gxYkTnc5JHH8mm",
  "key21": "2EoUcKMN46pE93Koz3EyScicPdKfZrwKMt8Z3ejf1uCPRZqEMrVTzoXyDAfEG6y7A1rPAUAAmoHAvNQJVf8c2bwa",
  "key22": "4ytfRPD8pM7Y5AzxvY2bECzSXsWyDEr1G9sBZ9q8b2pR68iykrvvZt2ixjodHoLuAyKBfa4BcB1eguwgXFqpGxTC",
  "key23": "4ZTEcFwqdhvipXgDfJXH2SRxqcwYwK8ZxuvNqquoMXUS2AjXWhXzGBcJhsaM1THjmZcJKzNAMEyzH6vkAUs9Kfw6",
  "key24": "61M7R2b1uwPFWV1vLykPTacj7uJhiQbp8CNtUPfpwtEbqh7Fxaba5eL1itMnWaP899dSYeqYG7PJE3hnYMbtv783",
  "key25": "5pHjqLNzY4RKHNDCxaMC8d2X9GWPFKoYdTAKTr113wZnTJEMN9yTSHQHLBXDKq77JCfi4W8FkXEtDu9WgTKAjcG2",
  "key26": "278WsfCypEuSpxt18hy1JThqVNyk1Vdzwx4cn6dPKNnyj3m89mn8qnb6mrJaATtNwTuJ8efFPYHsHevAKJLdrDGq",
  "key27": "XvmXgCx7hbQ5ST56y3iBU7B5i9ud3KUHFEZtCoQvX1X8fcvMf49byUa16khhtNvLSSR9ReoCQvq5VmQgR6t1EwX",
  "key28": "4iERpv7EZRjrKBSNWLBAGZRNfqgsXrHZ5sJ1dJEzRZ1WbsmZTVXuFa8ZXtMsNP6AqStXmTSSoBDxzMCmYtxChtVv"
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
