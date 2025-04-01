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
    "34JUqd9do4tutgfSqggw39bEkRzNtNYRZdEH9eQKvfvw24XdJCaCAy9LgYSZ5G7q5AtMQ87Ak3As7iz2Z1P6Axim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZhhZKC1bJHZ5KNec8GwyorvXcK7ZCtXvQsGBjVdBT67RoyKxCdyn8GdYAtEW1k2zFd5W1QLzbc8Ftj14idUPPY",
  "key1": "LD3iGkt1mD1PGkcN7SreJAAsVNvXvtzDUfVKcCaLFDsZrhv6ArjqXGjeeQ7um4L5HAWa4sXUQP8jqVURM1pwSoR",
  "key2": "Q8krC4AM5oXoZFxiyWLarfynUtehL3Y4hrbKrB1UpFNfFkYrerxc83b8bR2J6mssLubLX1HT7TzEmtBUbD9b5gZ",
  "key3": "3wWmmNxwJC7wveihQtznzW1bsTUf74RncpjajS5xGgLtM7TaN6rY8wDjXTipH8ySFdyrSvunXXuJwiMGkJxdmUWP",
  "key4": "5URXXXYJxK2cpWF9MUNvCjTHteG3mwJyQ3vnnv75RR4tvNXi68h5UZFEuJUWpfzuFW6LYQkKTxJ8Uh8KYzo9Pcxk",
  "key5": "3KWpvgobKgfCrsHAFbEsEy26cgY2aJPnijNFJJGBT9EWBHsVkhYgZJsS7b2Vkr1W1uBcNBCf8KZNVSvJBFNc4ReS",
  "key6": "5FqQarWcahraWeC6HpmQWKgm9Vq3QostYsPRHFTCu8k9nZaos2SorjJvxQXL4iZXRrTWVibaZYc9rd2enUY4AQLJ",
  "key7": "3AFY9cqRLq9bv3np6GGWgfEprbdKYMWWkUicELi2iCrh2Ke5Wr9KDtpS3Hx561QJqECtDbmAKN3wjgTrGPrW4uhz",
  "key8": "57ePZSJAgcKLcXMzycq7fBvFHYwm2TmNRcWiDXnEFLbnSE5meKJnKZYd8mEQXFzVTYYLffPfgcvEfKAJhfQv4XSM",
  "key9": "5goGdxugxUCYmdkvcuS5GayanfztLjYx5o14bnqcFW5Pga5qJdS72TJkuPyCt5FEYYMjABNsa2WWC1x98MvC8B17",
  "key10": "63URS9pLWB7zaBxGuULqbyjNSc1XUVjEi4TnANWT5W5e1vdZxAhyYptNHTM3yABvDZmxvZyVGpi5a21uP4va6VjM",
  "key11": "2HF7JDHVyEs9WrE8ARUVMGEuwdbATxp9ftaP3Pe3TCaGsn3Mis1e2sjsjX1GomiFzv23AmJEqfzFiccRGF3oiPCV",
  "key12": "2kdnFYmQsrewQzJJ3ViZNNgyZW7VterB3k93rN9PTH3Qkah6PsApdtPbSnimVeLTJPaTCHoCv4RrbT9oFqbbRh1G",
  "key13": "8ddcJ86tV11vKVToCji8GVgn29rkFgDuiBaCnk4tDJbBenLWaK5hdP7bx5YwMpGYSHDPknV476AHVXefqXypfFV",
  "key14": "4HQiiKKmvbQJcuUV16KUNTN4Rqe1FqT316N4ngCU5VCwyyPrDgYy8UX7xTKPR5BFxPGDw1itqNUNNGp7Cr94Q5Dt",
  "key15": "2DPxSR6saDgyFmkTaTfV7zFTXkq9vno8FJw3UDmfHSpnXvmP41bLAQsk18ErHKCZJVMFPYpTH42w9y9QWRtgz5yU",
  "key16": "5VkYSd6S985y4kw1oRmbWiZWZHMefeEu8yMBfjgtx9jrY2STb8ub4noB6nfisSaTMK846XXVG9KDVanvbDxFXb5d",
  "key17": "8jkku7LKT53MKk4HmWDJn7DEkKgzsYjsatXGMX4jjxuDcRZY8oYiUwDjvo2rzAfkLzXbFM4knTDmosj6ahCqYqA",
  "key18": "2NUxt6Cy4ipNa8GMYv3rreLXEuV41ySo6TcjFrv6kAASrMeLZXGEXoWvQm32c6rxzT3krZehzXBveiyvuoMN4EuA",
  "key19": "4DXTZy652Q9Fjf5mfqEar3LVqvo4wsQxJhi747GQTG68yxBtzSX6a7a4kmbq646ht3vizw3UPB8FHpX6N8vnfRc4",
  "key20": "5YRMoGoBtaZqAvL1ZQ2EBkjAb1BhrdKQ6MyPgGmrNKGvKZGy3LMv4KESWXG6LAZKaL4NDPSW17BYswz5rFp7oXVv",
  "key21": "3iFZ4mAcPP67P3iQRGePuvAc6jcg4mQodqyRKpRFmUQJxgEeNipGXr6omSC7CP3rkR9E8nVefP5FCXzsBFZasnGT",
  "key22": "f2AuGbwzzNuoWmbmA9LBELZuTASYXz2ZDEmFwRm5KanW7ZAL2rgxgs9arQiBNWKB7Rpem1fHY4BMiwavJPwNgv1",
  "key23": "2yCnUt1BkYdW9UogQGpoLa2x2ujfqZ9p6Ww5kAXZdELVN8fuT41ECJhumQprEYviy3XwbDnBCLrmffaxEt2P2nCQ",
  "key24": "2viC9cNhWmXbrHGGpSyULu5kHxnQPJrU6BM3zD1ZQS6C32TM1VrYeSzC3k6Xqar8BcGF6pmzu1NiVxzcfe3g5QZJ",
  "key25": "4ZNftLbreuFeo4Ggp4Bzp9QGoNimn8deLM14hoaRf7cXRbQRKWDoEbvdpgBbz6WseWkqiBQkZNh7ioBjvc61y1G9",
  "key26": "2X4NUe56ueq1mDYkYutQ45xrWTRNFAmWv4tsbKM6uzhUxX3RrbNHM8uEgQqC2PpEGnfZ4jGQLsS5YLvqKxb3L7RZ",
  "key27": "57XNpywLvF6BJSRwtAuXD7jaZmwWNbArGr5c7zB1Dnyq8sXMztTposbgBDjTEaZyzUnYTG7sJFsXkSBqvfSwqQcS",
  "key28": "4Bmc6iTkL1MENLjQiBuhvKVz2VaduqVbhyk6jPkfSeUTgCHY1utdVv2TVwVQUqYzMHxiMvPZaBMizdFfARsq2PgP",
  "key29": "5kicnKGw2M263nWpeG13aWJ83w93wueuDLYzMbL6K8ETupTZFyCWYt8t1o9SKMbTe4uQ7mYaDRiGDWR2ZQQm2eLw",
  "key30": "LQpQyL7PKFD82ZXdTjf6V6ZbFgPYrZXynrxSwYZvmDPEcy5JynQXhN55cmdmqoDyNAnKN2peBsNrXYy3AXYBgbg",
  "key31": "3xwGbf4JiU6EheuaHuNNqpwkNY4UruJynYuG1uSwtQWCAXbLV87iX28ga2gNFzq1qrj2RKsePsRkBHRjEgW5SU7p",
  "key32": "3vTLrZdK6rqoouPtidU56x3cB7UkzWh3iTvRiqFr9Bu6MFr3oicHFUuQURDtDVDhDVYVjezyAAQUpqHNCxWYDNT6",
  "key33": "36vaU3vyYzZxJTfhXuEqb8XD4z7ZkrRU4SyFWAuqb9AwRDiysuoBML37Ddj7PtfT8e9cyLPk2cfgVLuDGbNr52cZ",
  "key34": "99DrA8LPVEN49wc887ns3tUp8kraegdqej1YEzPcD276rxiVMj8a57J6B6noe6KVarmMbhjLv51p6LWM8zeeSj6"
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
