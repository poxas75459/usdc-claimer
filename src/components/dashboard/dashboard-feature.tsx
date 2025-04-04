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
    "4sv1biUhJdWxfr6kMofsJ4UgDzPaGit451a4LLSTwairRt4udexdC11y8QNotzCtU5xbLRBEtD5gxbK2y2Db4HSJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bVB7kH13VdPbxhLBe6NHEV93h4zh3zdinW9X99rNXzQja5e3HfSuKvwNocgUPTwcuMLzbYEpxYt1TvjCcuqhTGm",
  "key1": "2EbZRx3n9DKfD2dB61eYe8haHueJwejneAotA56VM2FcMRyeQfSLpCtdxZHtJoa4xv8y1fAkNujoXS7EgYaSXm1m",
  "key2": "641UgtVjdscExCsT1EmWe6BacDHS1PWx17udxcZrWwaHnbDYaX6wvwD7qfJkR8kxFEBkY8RFoqaX9sYaHGJBbv6K",
  "key3": "4RuLyWbrhY6Wzxx7DzBAiaXK2doz7z7umrPe3E8hthWXV5usQboCyMeEs8niahGyCyKXF7ca2hp88VqtAX9pTBgT",
  "key4": "3UyxcaSY2uUqbvKojB28RhD1hMr1hyqWurAUc6KoUtstdEjG5cQDSLJj1VUTd2DvVk9AnU4CVCD3rKhcMxrxiZZJ",
  "key5": "4Lttt4E1c35ozgxg2MjFy9Pb8FSETnAcQV7oFvbXif96JCdy1DwwsY8ek5LJGcvdVhsvXmcT3QUS3xat7efHZMQR",
  "key6": "49Zu6RcNeVmyjz9brpwHXbvu7HRf75R5ScBDbwbYyLqR5rkUp2a6WZ6Zp9FJ6byVMmmngutDoHwCz5yn6deUnqni",
  "key7": "DYZSaGLnYKKLq7C8pp9NXNfpn5iNcKpE2J3SSadcSy5ygjAEFPcVsGfpzok4h9jJKxcgBw7NhE3gmYwAAEBg4z6",
  "key8": "cpv6MTb19oj7yeRZKHvfCNj5ou55P7J5RP3rgAy6dgB1U3igV1yYm8LyZnYgu9Cu8kBuXpxi2vjBpy2cVkuRrpg",
  "key9": "51U2GLRWZUAkHhcrsSUrguHo9V9NrcYAHhY5f29wzNSbHCxmWZAt15UboPCRTWKLmyHYq8o4tFqJdhe8mKk1iLEV",
  "key10": "2R8JG3erVQf7uHG3B4oKDiGoXVm5dKsrXsmUSEe6oZj2JzegLyWqyfNTmjM4WXsQeSWNDZRnuQ5tLofmHRNqHd3V",
  "key11": "4m3HFtGEyzF56SV8S3wVWMEYf2UqQoQHnjugGEuEcgJkCH8LVLZmPpUfwaarKDdnCSasQCnQZpsirkUnDqM8cYvs",
  "key12": "Ley4NrACv3TdFyjKBj3MKf3TVeAs1Grh4HQuTb4pYW984NSipFftGTUAP8fav2QEj8tAruwfmKfuYXP9wnTTQtC",
  "key13": "4zQ1i7k5Ja1HcRA7RaaBaHyvDqKfCQHRmyw3Y1YBQpYZaEpF3rzsBGZQvp5MQSsRqkUDMcx2A2yHjNgJaNy6JskV",
  "key14": "3cHfuTaCUBmwTfzXpnFQoGR6aoALvuuB8GEg288yDgSGkgVUKACvtdLdwv9vpu2iMRgktzvHsFXnsJnZnwg4VoBk",
  "key15": "4yo4d4yjKTUWqn2V3utbvsy35ZpYBFMAt8KMnvaVJ9AoVGdoyDc6aUdrKLcyQbRVHS3b5M4uxEopECvP9fCcwDQY",
  "key16": "2mkKJ4u7J8B63FE9wDHmZF7QEisNhyDGQuHJpNBN49GN6yB47LjxFvPgcGUUjpMuUuTS9tM43KSPhv5oGv8vsmK3",
  "key17": "3CZCXwmx9rDAQSoM3XKvU64mAwggSTm36dHNyreZwkifvMU4Zm9pjfyQVU1hUu9hnnuPDohHpKhvcgiH8AUG2RXQ",
  "key18": "3B545JMm7wSs4ZpRKBprUnvHRs4WTLjuB1pHeY6Uc6AyFGY6jbACva7WpHxPvgx5wNkzBf45nZ1J4KF5PHVYwHzd",
  "key19": "4Y97TCNCKHL8uhFvntwnFaLhb5mnSXQGaGgPKLRboa7KMW5fQpyDf34agVLvY2qe4u55sQQxHCWKiE15fwPgQEcJ",
  "key20": "4VcUgfH2Ujd4yUnth6a3aKbaWzz1aFAupuCCH3v72YzVGTztntEVdcs6aFRhCh3UkXVPe1GYkWKjbPEM8JMCqM7c",
  "key21": "39icUsk7EcRxvB4db8xmQCLi8z4kXNHdjP9QMxdFnBrZz1jtKqCWHesQZYCcqVXZbVnWyoB73WADJeAvUxgw1EqB",
  "key22": "23FodB1qwthA8zKfsoLFLtABSnf3vzka4Z5UvvZE7rKK31JDhVbjwshmumnTkTuLAmQB2UfgTTeZGRTP7bNfzfZ3",
  "key23": "2H7uSoeY62MNsykADsGZA1R3oJHqzPi6UPN81kLcXG4Wg6B5h1ytyf7E3zCLpWUa1KDuJ6hyGDXsk2RMhZP7XfCk",
  "key24": "C3YCX7SVnLWvWsvasJUkTbQ7SBeBJADhLpfJvz7UgrmYgvCQ7BZfqFSsBTqmLJxBkqLCZP4hk1BrBcKAg9EFsrN",
  "key25": "sPTEXg8Jn1kZbLBdDnMzpVpnChXAijSjcNa3LJb36wgfq3CBMvKnsPWzyBcnuAu6oX74wGsiArMRtnPXA5iJyZp",
  "key26": "4nxWHRtwYZxBKERsVHXTnsABgiqNx6583Q6iE6iVWSpXpfhU6qSbGcWcVNkN9PDC7w7WsXGYtrEomHHbAg58w2Mh",
  "key27": "4yKMyUedFRmo1CsmQH6GLH4BUPW7DLrRSwvFd8i41MZNpEqrnMU6UXnXUM9dBgkgk96HV8yaRSGug9vmwowNT6PH",
  "key28": "3h5mDpiubTpXyg5QdV41GMruCHtu95aBDh3MnNHbwwMWLbPcBKGwQUNQJGcKjmX6bgyvjS1P1uRpxWBoYZK1rS2G"
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
