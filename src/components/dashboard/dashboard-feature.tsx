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
    "5hnhf3Nz5XW18XsrNQ8TaEWKDSRTEfZZeM4vkaHbhhxvnQsrzHFoH8FZeXSikNPEhkGQhsrQ9gjt3TkWYaC3i8dR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mBBVxqwa2MaT3vg3ucK163fdTxcRvEXXZk7KufujsyXs2RmNhpw6c6xccovT6uxpvZTRieqAkWgcFohopShPpWu",
  "key1": "5rzAULRQuwUwkDLoUz6XNpaWMnAsbVwGDsNvaAKZGgxDsYuRavcbwJaMEi2a9UjJWEhBJLPYwVz8uFq3fNx1H4zz",
  "key2": "4s72TM71nAbVRF7sGUygdEgYmVKjoxo8yEcvdJ8XWJiBid4S9NtoK5aDPaWYfbu8csKvbA8gS3gVQ62CZMUQD8gw",
  "key3": "2YEaU1XC7r2jYnqXNM1YhRnD4hujsWCZ3P1YPfHA8A62KPMjP8U3yzXxearDzhS1SByfeEcqcKQNmdVh89rP7cNi",
  "key4": "RuLaFHrHhXKGY4TPZPF6irtvPDZ1E2U4RbrFEFAuv3SBZvWH7JANz5bidoNfBzNSGatjugYjjhhgEBZfNKuGXxA",
  "key5": "21Rm9B4qqYHE2RmAksdwJYu42rqDci6SvPAZqv41fgqeNDVnZJkmzT61Fg3BXFudxpunj71ycUPvesgPhFqn7Uti",
  "key6": "CAfncfS3gBYu13oQQ3qHq7HmfWdFTCVBf3Mn48ZBrBwetFsLuywohBUNn83GmKMaVQ1gAVuqKo6HWafGWd6oS6N",
  "key7": "pcRhu6bk8CPtYCM5WJcZ5Gw1tU2nNnAqtJUQQ7eDLrwLoe6xBqrP2YucYqZv4kqf7D4noAumGud56GfLX545TWX",
  "key8": "WuKwKBLkuQNCnP8wxF4yJpgrKjZwwGAwFfzkKcoentnXUv3QzexjuBGcwyL5RYCVq2m9kNoS5hyXKn7rrsdiaE4",
  "key9": "PRuX6eMJtVRsgpXQwufYTXbjm3tRtuBd3rRB7yNrJRaABfgo7e9qAZfJCfqFH2Ns3797k1UT6efNVJStrhvPu69",
  "key10": "3dGLZPd69mJKB57hJPTZvzQGgKejwVzMgD3sz4NjH4H7MgwXshJaZ8WEGvXJwwQXfCdURfWrVuDg9eZVSp4KYmnX",
  "key11": "4LgTPX66CNFLwf8s7SvXhjAsEzWvB2aJ6GZWwGx6pR33j5hoPtjR6VqHGSbifAMbzA2apumyJsFk8VQr8tYgADYW",
  "key12": "7a7TUcmyvFDxnTCrPVsSiVgGAnx45bARHN5GdwaJjxAnwDYVxE7cwkS4B7cvNRNaizVh3RqDnpdCJ5QREnoQVXi",
  "key13": "a4PXvX8zodzRHjKhr9unFE4bdS518c5U4A9fA6LpdGUv6jSoqaL7XPr6dnZeNvssxUuEoWqNQESXvTL7bA7NB86",
  "key14": "y4P5iBJajHkiHmNXGVqCKzddV8VV869WCCk3eCpNJvnNtpmf3FqnSyYUvBNEHJtfqB46EdHdQum8QfhgdxejcMH",
  "key15": "3S26DXsrPRMu9EEf3PFf4UfkwXTFmVrwqKzXbKrNWWu9m44BvGGfTguJnVF5uD88NjGCy8SJCAeHoD8QkTSpMf4T",
  "key16": "2k2QXipnZQinxM11LaJUxvKPAkie6vs86cpsaDT2fD3SvrEorZa4MQ7viXzfXZkKWttsR2eirM8TPnyf4u4sKx5A",
  "key17": "2YwEZiDKth4JtCnmSyrZ1HS1yVSmMk4JEEKqAfZdNPd62nzB7qWbVUFV9GP3oLw3vysfGi5H4tAR8KcBQNnvdTLP",
  "key18": "4Hz3WTpcf8comk9adXKbgwqMe57Q5bVZZwBUn8XkHbHBX4kzQKrR7zME56hvujjaS2nJFz7Q8N14F2M6in3tSSpo",
  "key19": "3G5qZfPcnG73ResC9fRSwy7GDv7EGtKLMKzmXFuHTMwFmHtnCJFgbVcRsMhFH7PrzeqYyCEhyHvxp6rsmwHMuMJH",
  "key20": "4cB84cJaNXrkN1XCNysPt1cumis9xZWgqV8gjG55dhV3nrw4hPGzcc2FBVKccgeqWxjC9MjGmNztYH1TCY3YW26a",
  "key21": "3Wd7JkwJa1BWYevLsJPTRfdTCJU15SA1WKuQbMC4KavkgXhVgEfzpV5FwVTXYgxZoc7QHhM34mxWu8iadVbB8rjr",
  "key22": "27wBL4nkitHYojT6efXzgiC84MhrcSKFVm66AvraodEeDywUStUkExHkeqr8RNP9twXnqrc82QDGZPocCbUo6YMj",
  "key23": "5Yt23VAcdBSjqhegrt9m9rSzc2CQE2PcgzZRHbatC65C1kkxJ5jby468jj7No9ypqhfaGbm3yBF7KwU28QagwAmn",
  "key24": "4CT2cfZ75dKynbzo7TpAVzpjx1CDuaPRTBmcwngq65M25MV4JUdMCi8umCLzQp5Xxarw7F54fuZaRr1hBDMcMWZm",
  "key25": "4QttApfn1RrDj4H3waSebJoNM13gBfy7jGRhsBCNQiuQuVgb5UMkSoAq2AcaTzYMR31n8j96xPUnjvafkx5jQWZb",
  "key26": "4UeKAG8fxJ5HE9RfnvLtJjnPpUv6yw1yHXAd3HozomyKNrBP9TCLpVzbgcWyeTmKvVzEc3biukVKFhJkX7mzLBUj",
  "key27": "3QYhn76G6N3qgZX1iSmvcezwAZSEPXCaxTnhQe33o4GYhxfTdxcVJwC5MvuxjtSzBxxGTFD92RW94NVEQm6WKpkJ",
  "key28": "5GYoQ9AHLD7xfvW4esG3YE19QpVKoYWRqnEduT1yvRadPy1Cd4HRxE8tsRGBNAz2jC3CoKPYpK2GKZAcNUjBaYbG",
  "key29": "e1szeKrzMXuc41sZPmfBMnoGm3Rc2RUogo78zUMfpfG6ymx1tAHVf84Fae6r6kX4V95EygQToitRuH4QGYH2QM2",
  "key30": "4uxnvFstdicL8W9KwKtcJtEWfPYP1Vs2bSfedngsgdQ7dy88rdwysdkrBv5rr7nEy9AEL15RHgfnZSc73zDAGCdF",
  "key31": "QqZkqRgLUryvnpywhGSvhULPK8TMYgbhXC9EAySbDqPZrjHnss4kjKbHFYaob6Dd1EjZk88gboiqjQuNHzA6xna",
  "key32": "3h5adHViUNuvDbgV5sykYtCJpQ4wmtQsGampfxwwjUynsq6uKjij5R35gbwSFdhVyML5chK7uZserKS4ocvaJsek",
  "key33": "3uJnAZ2PU4oE99bmbiVkEGJikrBR7MkL79xU2PvFM321c44vU3YFszs2xA8yZmV7cfqxPBMHSPHUkoBTYPypdMPr",
  "key34": "4jgHvritZFTVYBv7iFHGaGvSgZhTMmZjdsrLVnrrSxxCCXGEM1FGDFDaXqZcHRWGkgvKNhoPC4ZWsC4RmqHSRsBZ",
  "key35": "24pHHfEbeKSsyshdA4cRTZCvQeNvhNyLrfwzKZBe7hesGCPB8rN2eue5xYrWG7A3s459SUua1BWNsnnDKskjhXyF"
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
