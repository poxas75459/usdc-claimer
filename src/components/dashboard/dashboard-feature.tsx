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
    "23HqUekBCLTSjuJcs4idbonP1Gs32X7CPhWinHvSqP9rxEMrBhEXhKYH73U13iM1FmCsVf9aqoSRHBWJ7YxvnEmK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fyNt2UxbrBfse5WN3Yy1ag4t3RmbaKAtR548tUkpy4tXUyQubtpkTbR2knQxQijpZjSYL8chXDgNSewUGsgt9Ba",
  "key1": "2buASocd3MTu8Pf3A7N5Qa1mcwxeMna18Sp9LiQ1Um4DDHmbnkvG6to4XnbGe8t5jAu5X5JZ3YJQVZNsQ3WB7eUD",
  "key2": "2phmGtC6gogv14PQhsTJnWQ9F5EMGnqbrGhYtsZXypZd6q3HLrKGLd19wS468ia75D5GbBNzckfpMCX8U4yR1y1K",
  "key3": "4U5Qn1bTWhbEAMf5wWYCDWLYRtbT6kjucnLETtH71C8g6emjFMfmRjhpnQdJRHz9dgVHata8ezWx5o2y1ibdUBKN",
  "key4": "2UVY6P2cTGkHE17i4xvbTLo71QHM1nJhnbBQoZfM6unxLyjUp24xuWz8VpL9pFXvgPHEdWWGxyRjMdZEfPhirStf",
  "key5": "3GWZxv2665yNqWE3hWYYkceX5wGQjHFFXs2bZrWpNVqN1u5m6UPFxGuL2jFBnhP9orhTwzpH5Y4hNoYWpMxCWRLX",
  "key6": "fnCnzrDUUTkLkL5Q2ZiQWLgT1C2SPp5rA627eS1ahUQ8Yvk4oFbg1E9R8kuwn4cYN4vNqHbvG35KAQgBxykL4ne",
  "key7": "3xGkZqs6Ca3RUtkdXTZ9Zsba9MnG5Ujn4j6NzLAkUYEWbkWQ4re2hPDMiQyGZa4pXCxzdqWnKPpstmvgaXHbbqdz",
  "key8": "2rJ2oqUU7KonwY6E6Cv4r1Xp9wQ68MYgyjxDwkqrzptLDuWj7YsiqRrpsaDhDkrB6aVgSWhfTacxwEHCavCuK5t2",
  "key9": "3AnuFiSEaywts1PmT8iBtxYH4fueGjnGXwgHQ1iEcUauwGX1uq9GR7bwuKemqn7n2B6181NSNds28FqZjTXNwH7J",
  "key10": "2swzUfVLuJd7K4p5rUd2eEGRJqfKLrW7CYHUT4i8AFEvAku3VL8a2GC3tDKmFbB5q3nxUky7GWUNdmCoNZbBmMf4",
  "key11": "DKsCd9x8D6spFxzNotXnPYpos2xDDHgnSsdvMthUCX2gTQwtKgTpjqWkEcshzwLTa2NTks55PFihg2eBRzZri73",
  "key12": "4gB34Ld7dG79qRdua24uap9mzVx36wGYzFCyN6UVz4dXJ7aXcqMubZyvctdK4EsU9hrZe7uBALBQE6noaNNTMcHy",
  "key13": "4kCcazxWc5Tb7E59g14dw57QdPUg2WV8PiVLaLUNQUatZ9Fno4Wrj6QsZJirG3EN6KtbpR4ZEZhFcwZdsynmYzx3",
  "key14": "3wZwSHRXxQgBKpp1bAm2RCTVBVzXY9H6MJ8VFEMs4W5AW8CzadM1t7Y9oquLXyxNziEGJdCQTeXNjWf2wTr55arW",
  "key15": "2V7o5vLqXUup2krexvQZPnjvm2BXy8cTQ79q1YsoGSaVTiPDnKp4tMSKAX8szJht8dKiAHUo8J5xpKKkX3HDwzGE",
  "key16": "27UgifTrwGjf26Vvyb2Pq7dSusHdQuAsfxaBY61YwDKCwr9xrpqFpXBTsAw3mL4EN7Ev3VrENxnnR8ULe4Q32YyS",
  "key17": "54KRGGLBV3wqKHVMhwdzW8HELQBMkyTNnWzXC9rqMj4fNHjAdCjA2uL32vUyfBUh6tH2toUqF7oLJQ46KwqNvmgs",
  "key18": "5f5cmBgSQmfcEA6Ftdv2TUjnXfeAJ9PMXBjLpLfkuwooZz2PLiwAk86ZRX1EVwEBUFXhuiRBkzeXML8JDxamGCsP",
  "key19": "2rFKryQdsE4yMMrSAgMVEd3eCjdyjNAdYYkv6qXEb6b3mBnQ4pqoka5RUKzWCiYd4WEWVMZZFLpnNtbfD5shXwWh",
  "key20": "frswpQWhQKXVvwWa39VuJPH1JkB2rvokFWo9v7wZCuH9SXo75A9ZPZ1qzFhEctmUu5XkC7VsfP1zWX8fm7mVL6y",
  "key21": "3mrTm9Xzvvca3ye74pjcgjW8oL6R6sRzTjZW1Y2Hrag7rC67xYob9TXtaKgCrxoms7zVTrY6FsRmehKtEvk8oeHx",
  "key22": "EcQCpKtMhRE7q1h8Uuqck9BKX5Md7JGk2WueUyUgZwbHXmxdwm7nJ9RzBq5rDY77mUs7WCzPueTjN1C1oZTQQGF",
  "key23": "4A8uNJZVNsd48NME2tabpsHepi9MtaKnNXKN24CRyrzWeRDUBJXJq46wdDNyE5shaadrhHiwTFrezuu6UMUQN7qA",
  "key24": "EDxqFAzfaAZu6g6HcRKYrbs67vV2Dg9EUHam7ybYbHK485xSFsuUSPfyHWjc7EV3yfBa25MK81WQ1KvMm8idPcs",
  "key25": "2g3DoLUbRKUHZ81DLQ4JZZxwageGvXMwwnYripPxv2f3C4dxuxem3mLJGx6bawugRBcx4H9kgNRVS9zsievNWFoA",
  "key26": "2QJ894eHyMwuSGzYVobn81oGsLCG7oWsrHjncuiLeLRjatEN88QPXV4euQaGm7xiFVRtogrRoBWLFqYoyCtchtWK",
  "key27": "3pywAQpXodEr7DgP7bcCbWund5Wj6hfu124cL44gJ4cPm7gDMBetSsDT7nEJtkBjK4wg8EkD4ZYXAftMNBCfqAjt",
  "key28": "2eXHHeaVhNFrsYHmkLWiB2rLHz8GVFL4Si4Fio4Qu76rxLbjcaGDEB64BmZ1XAGQtEGkp5CzQTmfduFn759XXW1k"
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
