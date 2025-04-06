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
    "bFUcYdfPNEtjDrypss1Ksu9hbL1Wr1cRK9ZrfqbfyRrV9aeBRQ2HmUnEBW8rLVX82wK3Qkxdq6fcpkQYbwN6rGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTRNPwucxBPAhc1nQTPLa6rbKUPscB73rtdtYU8JKDx6KkyfZvxrcNc5S6KFLvs9RoeLQBukpwrGUyo1AatGxE2",
  "key1": "5Tfkmngh9YiroeJZPjHjGkwm8pu7tXMMTvcsSPYZQPu5rU2GcgndA3Z7Zi1pbcDJTztrZZSKc9SQEz6DhM35UvKQ",
  "key2": "5kRQ8ZjmqHVD9BzzjDR8G2dBFSxHkp6zRtpSvF3mfej48KYJW8QoQzcfJBzUj8qzif87PVaZHT14TtFuWHhHtVbA",
  "key3": "ooRyfvsmqKzCgZw6wKmEifoNefuub2xLnUTLBZcjA5Cs4p3EC9jk6uy9JggL1Qpx7uToJFopxBJK1yfocYGJVWK",
  "key4": "38AXnsUqGmMGtQTWFiPQcZ1UQmiky9V6wMAajoph4F7F26N7frFR5V8JW91oRWn8vtZkqDYyXo3jxrey9qSvYx1i",
  "key5": "4DxQvPEcX6zmJroVZocuTX9zmwPxgiKH4PmnKndeXwxjSr5nE6bsvKaodzzbiuy6wHDNKdTun26asJvR6fqzYTTi",
  "key6": "5A7S3DiiJGZai59AKVRhNWkGaB83uRdz6oVaiGMADrKDgqa5QbmiEqnXQKqJJxFc2dPyz71Yrv8mMj5hhwKTBvCM",
  "key7": "37qZLKufqp95Vr2AXV6TPZPkf9dkYzds5fHp6Ek4eoV6okVTKR6ZceCyU85HCPfPCtfSZQ2p9hdt5JJuw1zbhoZQ",
  "key8": "2xTCpVVgtT2MsT8GLuZK4gwhwevMm89q159omQ52dhVhpZzTVxVvtmVsewUprQrigG1bJ6uAuRekySnrGSXRcmGC",
  "key9": "2rc6LMrBdJnr5aNmdjMoT8gvRzvJWHAqAqcyKZJAfCBbiJmt2G6XQDAmECuUmYv7Nze5FcuAFjYq9x5VQrYLZFuD",
  "key10": "5GSPVtnLwFkDGhbwPr7rCjVfgzXm8AkeDZv4nBidmocBuxDt5JkJK7xi6W68p9crESe8ySXPM3Sx7CUu4qtJgMk2",
  "key11": "4Xu2V4679GVMos2aRKUPixw74uZtc3Ph71XbYZAXC4Cw73Wys1WkhhrtT7Vv3XCCGBb8GYrYSdYLm9U2QdowhDRb",
  "key12": "4HJuFkWqt7XdqzJEr4DDwHgnWsworS1TVFEaZExjRwXXh2jP6o7NWbEeXAfN7dNk2LBFdE7B4psZd9CfZtNBF8Ji",
  "key13": "2n5behAre2HpXZoPJFW8vP5u5EXeBKYRcdS58xyZ5yaZGb8TBcSN5aebBNQhZWns3MDYB5VXx34igttAZ3mwyrD7",
  "key14": "3Bn5gWaL3KCdd2v2dd31WLP8vqn93hawAnkLzNx5PTjKxcn6ZVSz5UhFgRCx9S3L1WbHvtWLXLTCNKevxMRUJhDu",
  "key15": "5bBwRPYBghFJX6yYPZGLqs6t2nvfkhkyv6WhrGNW3qQqw3u6bavTxxcxmNYvu6BksRLdRhwbJ7YokdPRPThy6A7B",
  "key16": "2KzTss7n3fgNK9KUie7yGckBPqjgFExZPvxVRUWwE9cexm2t52rQ1Ko5rdnfvEvouDFY2fgsKGWQz1uJ7FNiqz3J",
  "key17": "3h4sowDEnKQG72KTBVjTmxVX8QSiSk73QHisgRXvGNz1H7qMxxK28W6n2DwzP75HXv6JAyLHUDLmAfaV1JLV1wyG",
  "key18": "2w1cz54sTurHN9JBCwebrxiWazyhLrdk3LWCazcaDDmFf4pxfk5saTYh4vHJ4gfnfp4v1PDZYA8Sri1nH4WqkeG1",
  "key19": "5t9ZDUtEVNGttD63L8E8V6q11zTdviR8JPP9ugAkPvzUkrzkQVnputZamEZ7LDxBEaFvC4MUJzfZWAZXay4ibtjH",
  "key20": "4sTqi6CDLLnFkfXSMQXKppSa1yrbuzP16QVwisSeUoGWh82GDMnsxCn2DJ7RGYsuULkUrEJMck11jm4mxL4Mtj6x",
  "key21": "4FSZevHUbU9iHhxPXYE881KQGvt8CmsXrkovWdJmzXYyrZ53pgsmmgr2bQvbQhBTZUquP2bfA1MWER7h7agjXpuA",
  "key22": "4oYT4zhud5PcUJuB1o9odSddutDrhUzNU2iUBidCjpBiJ2JmtpMYvAvKWU7rSm8nFUScd27iyTodZ7Nqw4AvFRdF",
  "key23": "41F338hAEYXbTt683X8aXnzgzcEr8MYjNbAxYNGCY6Lkn7tzokRXJApjtFKBskxUFU1RoU7LgTcpNUqXxUAmJtpG",
  "key24": "4hAVfhnqjx7KR8nFp9MRruE8Sj7wTvkrJA3hVLq13iSKY549obwpzRcBZwCZrouUtyv81Z2ohGz9PTDtHhfMYXvA",
  "key25": "3vHxPMpbqHEukoRSPe8q7vqAkkNum5C7uGC31vKCcWDsKznEPDyCWY3ntEyEoT5UYCjQSJBNsrmAaCHNUTwqLaQU",
  "key26": "5VC8hMFq5LrfSKe7aqdZNy5zYAUnjk3wUshovRzN2EyANYRuQQBbdqzGjjChVTYCGw2PT3d73RzQCPgsybM1PGRC",
  "key27": "w2G6qdj3rz7eyxYHHVRDzso3nPt3AD56f6s4xFaaTVApJowgxcXmYHYRuJHkkQz1MPrF6stYVrC4xHETFCGpgtu",
  "key28": "3EgTCykGxCBadSoi1f3T3erwbWc3iXk1jnwaQ7WW782op6AXktKSYVYhRWVgSEWZ3ACEs26PjEt8CzUCKoqGyn4u",
  "key29": "jhh5JJ4fpF5rzXpANu2eBgFiQdPxvDBGqBuJS6yBW1kTAEHDc4jUXKesBh7139JniwmRctCPkupde15RKHhin1r",
  "key30": "2VHZgUixMKDJSzjUNU45QfctMpMpGKRuTA7qmdFYwvZtjn7J6cQqkP4CEiZDFHE9hTN1TEDNe4suH8SHSwvBwegA",
  "key31": "62mwrNcCQ1NpUnDfdVxmaXXrzCLqRZF8opy9d2VtNSDS4BA89xKc7Nn1bHwR9k2ugS2qo38qmTffu3Fv9JUSnmfZ",
  "key32": "dkN4cgpCM5PoHydypf9Qbz9B2G3bf3zP7DtwQV4Mrv8feVQUUM2BxT9WjebLQNjDsBCzbTuiS3yeqRw61Q9steQ",
  "key33": "2q6y41fmRBkUFQw3NSxqMnN21kRVdoXV2GY5KKmuGKJ8wJDFupU5Bjgs6R5P2QQAermEzJtinZT9kqeryxmXTJFx",
  "key34": "4VbKgYEXMDyvRsKy3JfX2ZiQAJLpcN1etfaEj3j8Ph7Xc72BXYYHpxozaPPwaXojXpbFYZ2L9f7bAXkdKiJpE2wv",
  "key35": "sRwaTcEpy8WwQVGkcjvwv6kftiQ4edaTFWaj7BSFctwmZpHhsvYEpFkLC34ZKmbKpx8PbP2msFqBXfmo9wv1edv",
  "key36": "2DTEUQAaSKeLuQBm9xWdzPAR8FjJvcmxtureQBVGHUtnXibDHyetTfmwvDPLWpMwjkRNe1EqCggu8jgAh9WeVWcv",
  "key37": "z5UsC7i9c7Jt3gFd5wkzbkpsyKkNwqScUu9LKw2Sv4EdvoGNWtGbsbadiVtEe5uJYJNT6d8emPXuYTuo2CiT9WU",
  "key38": "4kormPQR7gcDGwM7aY8M72QonZa5pauZSwiEj4mpDZpXnRr3okDaaxLayRXt2pZaKmsHQJxwsmVptuwUo37a2aAJ"
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
