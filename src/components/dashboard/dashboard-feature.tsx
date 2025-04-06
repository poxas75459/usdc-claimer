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
    "5kGJQdH9Qf9RySJBCEsLPRRrEV3YfjwcANKXFJmhBcWZFMsjddp5jXnxHX3LiL5Zzf6mFGaeuL99BHTUnkiSidmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xzmRb4i1Tdn7h5idLoyX6x4DRqoBpDLP3x23DwqLND7qMHjwEf8VuXQoVTXnLVjaqMbqBpD322D9b2rfgRMYnQr",
  "key1": "3x4HbCqtpuDtC5gzFn8X9UNtpFsS3N7pAZms6FeFQzVQdYTCY2MpAdNuocCkQDGSk477fpePZuXBoRnnE6Y5RgDe",
  "key2": "4TxFLzYZxfXxN4rh2XgYK2aFgoevY6LeKQanmtt4RzF5FYPv8uRXKBFMhciXCq6xiawJk1qq4D25kDthjn367uc1",
  "key3": "5iwYEFffBCuh8B63shf7z9HS6X8CasZsSspp4U1Gm6vmvgHbhTDtm7s6CJ5tdPM6fbNwo2RuG1Am147zG6CpwbnF",
  "key4": "3ZqixwA9fzfZLp13437PjFk6ALTw3p2U1KTpHuDvKqFosX6jZqrJFKgmpdnfuni6fz8nTuqS1cQhbB2yCsf2EqmP",
  "key5": "UoUhmfCqhgUYRdWWrSqS4f5upaJKrNhdhS5i2BPzBgiwTwXC9fWzBoRCzegoeq8p6GevKto17c7C9fSugrN4Yr3",
  "key6": "3rV3dBdvFCuQcSJ2TFEVULomVsDG3gv4gGA3N9NGfhWjqNZW95vFRzgfn38DBMBDoSrU3YNuYzHxdgFA5t4wGzBj",
  "key7": "4P6mffbTJTfKqGAzAqTdoU3baKhpGQsiQ8RAGw7x8KSJMaooRSD88B8DJTCqtuNwWP6mCCs1soJJsKMvZgYvSVrZ",
  "key8": "4oPfBwqPKsTv2kig2SMfgiKcsdG7S6NeKanQxBS2h7B8Lk6PJU1TFDwetWzyCr1g5WNDmsNYfqXLPP3TpVFxDbtY",
  "key9": "3YHM2k2FfMaUn4BYVkytXm125Pod5RfbpWZPYVtsVv9gkm5e2G6xmm93PjS2hgwYqVhxUzH1L1TbgxQbydweH6ty",
  "key10": "5qoFWQpDoVgXbknRXruUKqkLuyQEzLQ1txDvuFgo2qevDFewbvUncSLDBXc7JqSjt18pSeKseSeFkLeBCkULEnLT",
  "key11": "2B3toSJ5savBrnCfXW5NG3YteJjNLYLSkSbc1np3v4VjWbXJUwvtfPo1xPpLeFGvs5U8nHSGWhhJQf5yawWzifbg",
  "key12": "3zbyweBDQU5jMCyvELn55GWGgZidR5RnmD5S1s818oZHjtFKBg4CpXEuN7rKRTQB8RbPiXMojy5KnqxCEVynsice",
  "key13": "31rDeJCsFkKbBJixDnVJd4shwh8rroekKhi1hrqUi8vsxXr46eZPnEw3GcXYGZFAg7xyDntGKtKuSnzS7HchaDFL",
  "key14": "62qprbD3qtEFyQmM9jBoiznP3j4uBGmkUDVjirXPZ2N2Z7GkWjGKf2oitAUh1M2VKvPnbLjvJwP5QrrY1VqutP4p",
  "key15": "4tpvZ8nfEQHrtJ75MLt5FjHqcwusAVBRt77C6Y1jJ4zxipVJDgbMPtr6mRJJZK9SMLLsinajjhfj8sJg3rfhUtpJ",
  "key16": "2KrHVXHPykLq2QTREgDsD2gAseNDMD3M41ctYs5pD4DSxLrNRzStnJrDnf1fBfrT2fZfPefwD9wWqQ2JmwuEa9hS",
  "key17": "5BWx2i72TJ6Sjq6nkftCpBp6uyd91N89MpEHxWPtfsiNHk4AWuqmYNXAMv8jUHaM2DZMhn5TiBbYiu2mjMBbHC5i",
  "key18": "4BLHGsDXbxEribNnZAvSP2w89YM2582gaKWvvtwT8TUTkqsDTNo5Ub2FhYjHkVEWJv9mqkBRqZhjjTMUxC7nhd2d",
  "key19": "3PZAsLnDWcrCCuhuYf1K2zE3aPrVmyAupSQLkPHPVs6DibPXHqQwJiPsPZxZvGg9SHpmNu5vYiK6TytxtgZTjoME",
  "key20": "2JgkZU3VHoXmJxpJWiXDnYuDZhj7Twj3mHkXybbXknSmVsKgXnPg8vvk3TRhu4dLfyVvmJN9UsAfwJJdq8x5z2eY",
  "key21": "23gPGDgZFJLdqqDtduUYH6Hxgrpr85PFw4ApMVFndaBCeSmXqtBkkh8yGx9fJkAeTHeZjCM6HriLLqHmy8kk86Kk",
  "key22": "3PNqSzjoLLLrh1tjMbV9LKTNncbJKQ7oYsN4qrM6NXiiR729uvSRT85DquJsKQYhNPGbVTyh8qnGSbVKHsvU5VCM",
  "key23": "jQLC6u18aY13UNTqsLEVxzD76aNaMrUA5DCyhX9ZY2yWEjb7S6WW8t7Bk8MYjHdHFna8iLR5T5TLkhiX7ut24VC",
  "key24": "4G71CG2FACoS1Hfqq3JmYK4Gfc2tvDQAHuUFEqVmmvEFTcBrAc2XCG4nGpMXmdwe8cSUrHNAMnxPdVXyGQHNYbeK",
  "key25": "4jnyApCT3ntBPgYfRHhnhhVztS16CnFV6uJZ6Pvpwdj8bNQFEyiyVY3SB1tsa21siadL97Z6ghHoiHdkVs2MS8ju"
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
