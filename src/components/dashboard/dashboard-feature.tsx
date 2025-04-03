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
    "2dwPbesrTYnYCw83tC9gHqk928s15rfu4nCvSD9SCaLH21t9z66RHAwJN7ohKVYS2SxBMHxHAaChbWsu9cRvtr18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E7Sbm8XSVYSXYerGK4tUwZnPZUzGmM6si44E35Nbjx3jHoqfBQCbQWEdjXMcsmRDpFqFSvZ3gb7AB8KPJwBBPiN",
  "key1": "2qVkkfLwAdaLk5gGv5X1zqkfUsRGmLHuEFGxko5srKTtqxRCHFb4gtK3cz7b253to7D5F1R496Jit2H8ReMYuRN6",
  "key2": "4nCmRKpbW8dVdf6BZ5utunKm2dGmeVnXzfsbY6n749nUtZ4nMstJgwV7xuQvNRQzhdVgn1mZPpMRBLUPMPGLPKdA",
  "key3": "2umquF68eYPzQczcVEMjf97cUvnwTBuujKo4j5dg8CBHWSPEaPhGV1XNfXwuA6CZeRJzXqPss3s8fqFSLQxjcN4e",
  "key4": "3Ujr7XfPxTgpdL3EfkgHJN23963sDQWsWVqQiqDuDbiZx9ftobpm41JdQTRzfSCVzZZH3yNbt9UT12197Gw1gfUL",
  "key5": "4ZaVgfBDzUr1acwfndwEUQQkqEKkPEbhhEgGQUB43HrYv58mQo7pNuvoXCFcK8mQpbv4HVVGMv8iQjnU6TvgxvKR",
  "key6": "yzUKh6WSfopEnKpVBxkGyqwVRviPQjTzfuA4ZrSZnV2hfuWxVaAXdg4YrLk2vhYFs9x1jfNkpJvovnza9U1WJ5o",
  "key7": "5aF1x1eDMoyxnW4zDMxZci41BKa7W78FLtnDGGgH4RoBRLHmwqPrjGedH8CF7z5EfS89ZhPyeHj7iZ8zLyUYYwgw",
  "key8": "4SowruEkhqPA4NxRZZdnTGEMxhqDsAU9SCNUgt857g9vw7DzXqXra81pGnxPiUwhH474kFrCTi13tjwbtpiGiPGh",
  "key9": "2E7mzgpxKbh8MSt2EGJUPjoRvyhUUD6y3cUsNHoNVAu7K1r9r5L4UerR9emp9tBdcRSozhYW6ud5kfqFxMWowxMC",
  "key10": "4FmGVZrQk1HVr5zZU5yR99SwcWtCNAE3UeYcedySKH4Dh7tSwN86E94LZGqbtwbiokRer8LkRv6QtWWtkMG8zHjG",
  "key11": "kiRQAe3SZDdiSXrFKxQoJWAJy2ZZrTjeQ4Zt2KsBzGLLQRWE3fZ6i1yNjDfcs1hfbD8tidy8uczSxXjQXvcSmyP",
  "key12": "5vv2Fw9yTQC6heGWuvQQccVVZVHvXfWtmm5NHY1MeYXw8gftXY5dPsZRZZ4r85fMSVm4oRVy6TWLARbNd6NUQoap",
  "key13": "42hqji7NYyXJafJVWofiM8UD27juKvr4WkbvV2twoXAsHjADwqgEVBuzm88howzSdKeeq6sgMHyBJcndM9YmHLrW",
  "key14": "51K4o3xBKWioNTgp7fUD95fRYTuGo6hqHaE7qSqp7yZnjVdHwXJecyCtnJJHJwH9EugTQgEdFgFpNk839FKuQGVm",
  "key15": "5jDupmAVsJG5XDuU2aadz8uMg82J43yDymNRXZndGG46N9PVzMLYpbWqcoSpcbRTVXDQFSoBMDij7F9eE95XoQGs",
  "key16": "2jBCcHTdgicT6Hf8sRtAs8567ztdQujQqr7YA5vLuK9EFb8Hvpuq9mSmVZpMC379v5YR5riXxEiMEDxEGQ3iFXrP",
  "key17": "4kG4Esarj7kwBdXbNebioJNCxi1h3XCYmpjxKZAWfstqdkg9iW9WLeqxXdGdF7DhVfMxDqc8jqG6aP9FHTUv8io7",
  "key18": "3XwxBtibjomrL2udkjSMbRMn7qsPA6HNnMyXTcH4YrRTiHg1QaZEG3oghbBYsnv7Kfa3oH9o45YRmgiX57HBNEfe",
  "key19": "5CELpmcoRjxrCivmbwaMnKCrEPui4uLBEQjQoL5wVGZ6HM4vdrJLo3NvxJRfEwQ47mLQLFCg9jM2iSmEgf4Gv4cC",
  "key20": "3NHWVtuLSjzadaazbaeH6n1qqnuD9aX82hhQHfyzqvf5Vbi6VrTXZW66yPyMQUzvG9m2Yx2YQRcANSEK3dZNhV2W",
  "key21": "5UkerCXrYMLjMQHQvRFuVbZV6sXMvG63MXmGTzfZhGgbzeFE5rpLc5hYYdaQma68W8FtcT622JaBeHRC7EvtMZqd",
  "key22": "rC6dSS1K1jThFGTAjChniXCFsMX1dJPMzen5LpSPuYez9yBVwfLWVRUQR2uRKaNT3z1peuQASputDGEF6u2hp1R",
  "key23": "43a3k9aB5L6KSrqJXwosaUSu6ZGk9uFeFjfapviEH1f2RuoDdu2JriPT4HnXqYpfK9JvKqkks5bsXfC1bEvWtemM",
  "key24": "5AemGyAZzSSdzEDHV5PSppsq9f7FCQgNodN75ykM3R4C557gshdQySPxRYiRDTTxWLGnZuG9socXJsJgmcg9jQxa",
  "key25": "4cw9w6v5uzUvF4Uzth7KHKkYDwdqFhe88koYA6FC4STUbFXHaJcHE5TBjf7DVFhSxcvNJtKyDpevh969YXe7Hgcc",
  "key26": "2YrWs4SsparYxoD4fUA8gvjqVewsZjHCmgJWqwfs9tWptK2Hva5ewj5F4r7G7729utuiwvjANNCaU7okyenrUyvs"
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
