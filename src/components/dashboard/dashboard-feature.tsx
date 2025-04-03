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
    "4M53mnVqGbhEKfYWFGMhxVvq5bjjqFTB2Hzj6j6bBxzd4j5a3jTtexe1nYXmNUVxuyHPZnT9B3YeG7QgGzhqNbLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63zJn9x576whtZB5DZRU9CRmG8QD76qM4FbhUL3GNBaUUeid6y3mKK4d7K9mS6Gys4yX8naPQa4zEBMkfDoGNCwc",
  "key1": "31uEqp1yRRjh4qSfABVxQuosKW34mfJ3rucGwvuxhT4D4CdpZ3qWFWWYbet3ehEcqS34CfhUyp7AEn8RXmSvFuZn",
  "key2": "2EcEdYTrUXDbERACbAEataC8fzxh9GMut1DPkzoYnicfM4Ze9Cd9rRXcVrFmH9PK47hwHfhqFqDDduXShhFtCBki",
  "key3": "eJSZZFHFUFsGfgdFLx2X4ntb8mNV1ZTZhKjXrixmdYaPX9CyjymNjqApCADTU5drNMAKto6ZJGu2h1amN7YbT12",
  "key4": "2B3LxhMPdnkJ2WUcbUrdvxQnhdMDLBuG5tRNmzoprc57tX45zWgW9jpMYBrrVLzL74DkczPbyPVyhsoUikVanpEV",
  "key5": "2rNtCQ7M7ZLDadSCHKk8sxcBeQtHj2CLBtzqHJPppEwejA3wZXz4Q3MFNkoAkzVyJ1bPSE7K9DBgTowonH4TEpVm",
  "key6": "3QMPY9SeYdJ4xSvEMyD9v7uYLCd8qeEFMfMdh6NK9594KTSRSBa7JSDRGRxPzheRQ5PCeZYsaRRRrCM44u4D6LYn",
  "key7": "3yDs7NtUmXc4DrtGoE6Uw5VPpH38TkhqNtanuiyqYiCzeqfpde9vmeSCxFSt7NnawmzxqM1pTzWXz3uqZ2JiScJL",
  "key8": "L5rcXx7xbZPrRjVzCc162GrT7gDuRMEXq6HBcq1he8Pg8oJw2vs1DF76LRkVuoeeFYSUEmyrpEQxtGPskFr2KTW",
  "key9": "33Q8ruUCW5ZsiWQ3w7XqPs7NVcYkeUTcx8dRWfz3TXWzfqHuLopUadXrioTnyj9cXYaqjkJ6DmiEUY5ECmGZWQG9",
  "key10": "4Mb76tnEQNWKLqP2zJREniXS36Nvr3N2XfvVDNiqBR7FQtvTLMGi8tM2RrFEVfvuu3Fmshn45WUeJZPVHvXCbyZV",
  "key11": "qTR6jgogfHbqdBUsvv6kyexMB9BGD7zYLa6NshDdoZDur72DQrZJFbZaT7S23vQKQiHWM1VcvquGp2o3dLRMyC7",
  "key12": "3W13tLvCkF8cBbziPE3om8a7c6CGPk2Gp5GBYkr2m9UuB1x227GprFVXbS3TwLZQu7vv4VYG6DMFsctbGuWFKiYG",
  "key13": "4p4VTVWaE3oDojMMTAa1TNLJ93fcBoHrHqhWsPusraxZST8MWXs9FgLy5vLZVB1SVcyWaTYjt4tsDP1ZX6KCcU4y",
  "key14": "5hBCKuNev2ESAXeMN3jhkGy4KsG22YTBU4MQ8CHYRTU7mN5Lq1Q2G2jQaAQSE8RnCWkPcUwGGyxf6fKubTsb3BJr",
  "key15": "3SsA5z1U3Ek4DtkurJ6fKBZVgVN4Ubngw9FzumC5T9qagr5paYpiH1vNcqVfZaPGBwnEUNHA8ndUJrqVUk7u8cJt",
  "key16": "4sZF7xC47D7LpPzCjmZzqvtaggHwMPCLzQ8fJxZwsUffeUpMdm6Kk5b1c4ipj6K3Nt6kPhXiwmQwavc2Wf2AzX2B",
  "key17": "5dKpQRAzWA7j5trRTMfTRdKffaFQ6MRV9P4rYVXufpqEsbK9yxJaA8ut4tAnAGSYxuY7BzZuSr1Fj7RgXDnAAMzB",
  "key18": "3WZ4iR3nyoPdwrfMkRdZNF2F6zupXWwkmNFkcq5cMPFa4UiqM7qE7ULZ6DN4kCiNGXdhvR2aDZgUGDsh9qTfQ9RF",
  "key19": "625k2qr96E3DYMwHKXh6gRiKo74n49uPP55DRTJdMf5qhuVjMdhU1ULaL5TvJJ55TBbMZJMJHf87rr8AjJnVdiwV",
  "key20": "5XVL3xJVV5djSh4FAXaPD6KcQqss5wStcPaQXCv2t9SirsybDRe5eYAgUekCNtVYo5zmnuiDzqYPEU8FfjXJyFJZ",
  "key21": "56TFvedqBLLq7QHEAFmz5tw2t92JqpyUVsJJYfXeAx4TmaL3qYaPV7QG8XYtnvMY6hg8DFkqu9A8c2KLaNaocyfq",
  "key22": "4KQ2UPSUNiBbqYxEz4m5DHVp5rC87gX9LHaNmgq65Q9B9P12sL6722hFSbG6KmriASK18mzkH1VHcXvitnJmY6wR",
  "key23": "bp4CdwGmcNH1kjEsCj3ZHQWJChkQSRUwSDwAocZHKhWdXjG1VuZv5noVew81CCqFEnqZcjPtC9q9TShdqFSzVBG",
  "key24": "3mHKkEbWTLvXaRam2rPcgZVuhBMhz8P9T6upHWcB1TY2sAymwunPb8vw9Y7Cz3W9qLJfuMxLeVmHy9AnDbufVH3W",
  "key25": "66aS6mxWPfhmQ4x9ATTCy6TtvKFA47Ci1XgW4ojUduxCtjdpFT1rznDXwpgoCLiwCKMXvQaqwwWyoNqobR3YyykM",
  "key26": "5b3PycFK45CByByp1ZvyWw64VbwRHJAGH7jmq5baK1YUuMcuu8WekYmwU6PpmRoNFAnf5rMpsujbrppg9rvpbzab",
  "key27": "U84NznwskRmVBTLSZ3vHrgmLcxeV3EnBoHggNYwz7VFvznnqQXM7SjNswXcp9B7oaz4zxK1Y9va38qhERmzNbGM",
  "key28": "rcztKPCzHLNdg1WgZHcYTHFWBChuai2PbkoGYTRo81uvwou9iwjDtu952YrXqR1jNzP4AYsPXG38mdVVusrrwLa",
  "key29": "51VzjHKcZgKwvsyyEgU1KoNLeiNXDsgVmPQvpbNcZFGcC8WCDF3jpV1qPjkvsBFECZhswcYT58SKiRqkFU7ZjeTg"
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
