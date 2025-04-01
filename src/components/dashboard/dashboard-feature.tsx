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
    "2T2AWGeDsX3rS9RZkQbv9hXpWwbgY6sJUXJEVSt8asazpf6ywn7DUx279jdAXb3jYaaQwNEgJ9Dqcmxhd342gM3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "316fhkXYfaosKSLh6vg8PgLAXL5B6twv1Uh4tRc3Sao4XaegrmGpa6UwBox5nn2grQeCvtvWsbgDvhHZxvVbvwbj",
  "key1": "YvD8RtikRekiQKouBnco3LdYDAyAhqTkzpxmChc17uuNSbJ7qUR9NBBNWeeuTJsA7fK5xTf1uRc15Xz5nV7KtGx",
  "key2": "39qrZ58ro45Me9JCXsvKfSF5mh86CQ3uJKMi1NTPSrbyYSVAazgUaZGbDxZ95g7S9PSQWbubjEKjU5kyvbEnSGX7",
  "key3": "2DXBnoA7StyWjHd5YDLgdvQ8ZS6GobQajdp9sFm3iRKJmy23Bnh96hRTLQTydgtyFQmsd2mjAfvVTwbxty6TYzct",
  "key4": "2CT5R32xwwRRhQQt28PPsLMgMGRYcri5BXudCNwSvha1GZZ3qHjv7eiAjgZ1GpsYCTKT3zdCydsCZF4ojnemkseN",
  "key5": "57xvptXeP3QoErywpvgJtXnzUsAbM1ZGMqzmw9znPCDkfzhvnDv7Kxe8HSTPGzq9A7LVWWgyBHStCBYxTSrsxRD5",
  "key6": "2aTsfGW2oVZ64YS3JffizEHmYne17hj7CmvBSA863W8Us8Cize7p77PU1SFn9cfw3WKLYbEgPrcL8hMcY8jN3boU",
  "key7": "4dWWKKFuBLeDNSxP3kgC9tA94WuWehwXm8fBg5kqbX7FXS4VktVDjRQrPsW66vbX1ZJSfRVRkZgwV87h56K955Z7",
  "key8": "4FSYj8nQVdcc8QFWhGj468jgqNULoYUfVv8pgvMum6iUBks5dhVwTcyYEYzHUL23gUJL8Q65vGS2JpH2EHzbYbMz",
  "key9": "3qUwqoSSUULuVr9ptBKXNpAQ58SpHViv7BpmcmGjxKh8cWoWcYEtrqDDG4tXC56GgoCdkL8THzBAp5xAYbmRrZs3",
  "key10": "dbbMg7GEiev33DAeNRbYiBYsoYnksgpRR7Jt2GrQbGbsefYyr9dqSagjsJSHQA8DGX373DH5JunYMVafsU3q8mJ",
  "key11": "2xsQVW9JbJ5kgnd6m7nd3g1gYgo6VJ5f2pfpVjXbVCsv1JAk8MTVzxe7gqvR1QLwahYruDdTK9nS54xWfs7uR1YE",
  "key12": "42ujiyTzYX3Z5LsnZ8v6t5jwMxRPBjuE8eKjT37AGNVngBH5birCarvLcXxoZ29xf89yoKQWJzjwmZN9d3FaNjMw",
  "key13": "528sDXuC4sg3ihH1iPBAqi811x3fJ58Rv3carHKQRqg52w9Je8ZsfyUEsMUECz3cTe8SASECPesZaBDWRgQVyHRY",
  "key14": "4tmPuPpnn8w3qCzZMLptcLMCZ1c7BZxH9MNQsaHSyn7JAKAFGZnK6FrvQEpJkn4Zq7RMKeqeX5mJCegADcFUbL91",
  "key15": "pChJPhfQgUe2j7aY1Hq3Cy5eDU9T1DvRk17Uc7iXDRg6H1RupbXPsJ9pUJfHx2msV7pYGN4XUwARNGhheJFQvfi",
  "key16": "3Si7dRFdGqV9YcDy56w93x8tagiVQDkb3xMApTovy576UQW9KhWNRqVdWtE3ESvE3AZKfbEznTZ9Rwyj3oTAn6eu",
  "key17": "3r3TAK8Xzvm2qj8HbZRdFJJoDntkX25qGCfjM3ipoL8xNTkmKFKT2Q6DRjQcxRS6pUKw8EuhBMTd6MugeoAGsFeY",
  "key18": "34RH96mdFcaq1evKCpRgQsMg5tWhwD9yo61do1hr7yAUbNjXtgRnbyVk3Y6ns3PRMew2SyZg3ZzEAcUB8c7rNHc8",
  "key19": "4coNk52Va4t4TLbCPBiXBJownk7mv5K7axQeG8AyG9e1q164gnLNdVLpvoqPPaffw5RcK9EVUayGZJ1U3BqsJeCy",
  "key20": "55CmnpCd8tLTihHVdMYFZbs8Bf6SD44V27B5gGX6DDrh4hpmhv5GGeURZymaEHXxNuHHwDrdnVTYZh9H5fpam96G",
  "key21": "4pHCmrxPDnpZyBANB28MamhNNeE1fDKqv56bA8mmPf4Wr7xBJK6F7QuvTeDB9KNB6rfkwWRHhC1su2j8aLCyEYQX",
  "key22": "4U5E9gfHjJ5ZNz15XC3GrfDnGa6AKNGMZ4GeQHW1pQJdYhWFRruRf1wiDfh5H2PPAMhg2ejYSFxYQM1pRHRjf3sG",
  "key23": "2u5Ur7CXwFUwJ4oNmn4ynuk5K7jJYCTNhuTk7kEv89xAitQFPSeDNWyvNVqtrcxc3mvQeX8oY7cAcU1Gkwc5LKxb",
  "key24": "2mpgsYdXfEko2raRQ9tp6haZss2Xngchhvhjgz6eBvNBTTijFbmxRCK53EWZ6fbWysPZssGYgR9Yf7dBJf4wiwiz",
  "key25": "wpLWc7egLPdH5QEnAXcWtakMRq1uwHQupES9BUih4MbxjHAGDupsxN8rdEHCBEnM5ajz1htcwHTmgvGd7CWKJz2",
  "key26": "2fWMRU3mgRdYipRzxn6r3qShaYxMv8VWRmSucYbatHnXbpkwgY6eDPsP4y5tPFQLdkiLdMAYR8FjzHtZ3kkMC2RC",
  "key27": "4Enbsh4oJFuMzCpJtY5B29DTznzuGeysP1FNriL5w2XSC5ErBvCb6hHoWizEcASCRc7PrUXCATLxv7ZWaxFtFN8Y",
  "key28": "3TA8BYZvNYA7Pktoa5byuzRq6pXNJwqD2i39DdKovyx4mkVs24qzabzh2KWTvU8XpWa2A2hF7gZ2imrDEqYkn4ow",
  "key29": "5SKUzzntubtAJ9rELpv376gGkhKvUBAZUahGmgQXWJx4yr3sPKY3UkEhePgxpok1ynetvEaKwT8K9tXYtJfgaFhC",
  "key30": "3KuJyuPrjUgzQNYME2cKUskiisi4VXK66CqhjVGg3QKVTFeEBQNVAjNu2ky6zx81PpX2HsBxyvVGYR8yvvNqt8L8"
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
