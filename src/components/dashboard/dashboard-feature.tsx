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
    "sdnAonhoXbUiLJ8UUdNLa4cqW4n51dvf7xV7pgJ26AortDtEJ9G92i3HCFGGo7MGfA6fi47ySk9pt4ZqN1FFK27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tWQpLU8pPvUELEDaEgHDWw9h4XQSLj4RE31is7vYVPrH5oWS7V8n3GjZgoHbcps5Z1QyrPXuF3naePENQ3AeNCn",
  "key1": "2gpKbFq3jr5FUnJYwXg5Qsexuc3o4nH9zJta14J4Az1wvar5UJ5NzkVtbcMu3vM2g93uY21BZd8dfFQiTUTcqYLt",
  "key2": "3zKNQZ8sJAX3QNCpSmBSxVysEzMrNeEvR48L9BxVDZnv8GvnGSucWPt46eUjKZ88P6JqawFwMrgsPwjH3XFU4eeg",
  "key3": "w9RkQ6wCUNheBt1FxXXfDxWWyaLGQqvs9FDfQxKfoVZpgx8QkWqjbeZcCHToJpmKDD33Ay4b4M4vGDu4jmRbs6c",
  "key4": "5BVL5J5gPUo8xQETCTjdLMsaGERtByF8hTf6e3sWV6guX3EngdqQUDdabfBJFMamF8pJebVdASZjLLnHvAX1t1v3",
  "key5": "5ufLDkB42vxJ6VQA3gryjmuGtcMYTNoyjxwn3z3qZWHACVFoETrNTKkqLpAtkZcBNZKmXbys86SbWryHt8hEGAnx",
  "key6": "4QNhdrW82Z8c62Sd4oBtFzeo1RXL7trCiL4RvB6iACe7bPcijtSUgrtwA4rXJqorpuxVHa1UqFtaWVotKWCHBuGi",
  "key7": "59LTf1x1YiK5EayP5FbJnZmMoeSqWyGPyRbBY92MkLohzTdCdE9NADcoxNhSuqkNXn3oNwwosT3ydtYT9My13Eum",
  "key8": "4nSyWYCFW8t3FKvBhWZEuu3fzpUnqMs9VjMWpgBuwWMXvD349SUnmYMXthPU6t3Qmcrrn1G9P44kxLy6H2ivbGCr",
  "key9": "5zWqDskZ3g5t1NxcAimY1rUzGHd1pCGqoVQg26ShwCbVV12ERc2xBFKF3HB37RbP9w8JnN2Riquu5U5m2CRGDZJW",
  "key10": "73WH6yujmgN64Z5S38Bw6AjVNAoB9y9ntfcUeRez1MUiZioU8p5197qhHtZWdmqLdqYJKjQycziWZqpaihSz5HV",
  "key11": "VJYKp9MC6YxWw24imnUn4AM4cWFFxz5x7FDSCq5Tzu5qigizmPpzpYRmwfZFaPbDtL41LECsAaaPM6sv3NpK1Jq",
  "key12": "66fuXQHYfMxdPJS4wnwz5AfptTGBJG9D5f56bsuhaeDMVqYup9TQgWbszGMUzzMLB9K1t6DiDf3SU2LFABnfUmod",
  "key13": "56DQ6Uzd1TmDVriLNNGE6z6DpMtc729er6xr9jVGtCFskxdaX9D4ztP9VoveAQVBqJXZjdWt1YXztiS1qRveoi46",
  "key14": "2M9QsQ5C6mWzocQQ5zf46CTffWL15MSTjzyct3jSGyv7jYX4vwuYpspuxqPoDKbxskndPP58RDWsj3cYpGskMk4b",
  "key15": "4d9LTPi9hfmYL41BJyBdAy96L8t62o744cBEuqYW4EhbMEfGpg4GGcZK5UAqSLrE2mx7zHvEYsWosbSWhoTGaPZm",
  "key16": "4RUiRwPTDaVE6vHxWSXLFoBRV6xeQGWJs3HnQqM3WiSLMHZcRA9tuqupSHra8oo9oZRg5B5g9veuxdpaBJuX5afC",
  "key17": "3PrFujA2ZH2E49RwbZpikNyxxr2bBGmoxMhXf8QuJUFnRt1xgFNkVrgYs7hwtJBSWrVeWW1JhpuHoMYGiW9zaXkB",
  "key18": "5CsNiMxAnfWx8PqYpo1RZSnPe8ZA78giGDuNL6A6Ln8CdCoXG2TTXTY4xNq4BUWik1wuyqQetxCZbmVMyV1pHyYn",
  "key19": "3BgbYtWSYgdVpfNP2kD6TpQDLBvtXujmCPecz3rroM3w2zeoJ4hVyLJmL5GUZeQKXb2CsthHmUhckeDEeGLqXP4K",
  "key20": "2vkEjs5WB3yfWpD4xD8VSWdQ1d1a6GEGT3sh26rBhqRwipe8f71sxTTa2nKSHHuYt7padxXa9YLdcK326gnUKZkc",
  "key21": "3jDt9szqp3R8VRypqFpFDYHdpknbpeH67ngDmcYtXFizBHbG71by55QsiNHBe9yTiNdH5YNo4H3PeDc8fJwoXBCS",
  "key22": "3e8PRn6AC7a2A7kiKxNWFqBxaiBvWVfTQSuE3VnQJmY1SJb1kyHt7VHaXqPeVpkrSxhRU5VTQuQ242oVVQWtfh7s",
  "key23": "3RahPRfJKa9HVqLXXnGKsWHAxeV3MTveh2jMWzKKH87KSWUuSg6JehcZF5PBzmaUMtGpnsgC1eAZgNpsRTrkJqLF",
  "key24": "4QWYtqTZCH7X6AfeDrN9FoxRDAL7LDFiLPDT4JVH7EzEBCizYDAujhhqxEwBy3kXHGbaGVppFLSnqbnNrskyn7eH",
  "key25": "5jjderhawKXVWEg3ztFVoVUFqzYbMKQfKBDVqaJQC45kThuWysMvGp7EcZoiRL1xLAPHMLHXtJdRpKH4zgkPFaKx",
  "key26": "oTDEkwGoQxuiFi43vKpJPggEAbFXdky37GAJkMTREJchsnPLSq1VauHUHTL3Buiqij8ZS2TNUCrjTyVxNzbUEc3",
  "key27": "2ixuhPAZBxGivv6Lqs4izNQ2UaDXGVLTWNiAy8FdckKYABsgycYQ3YjfSb4K532gWGzQ3bcPosnWU47nrfEz5jwS",
  "key28": "2MtHc8VFshzADpimERN9DaWujCXngWSGq3VkwXeJSTQVYSq2745aDTrYWL8xGL2FkZUSCebs97jU8E2mkYu5nwKs",
  "key29": "DcTcjj9jt1GnhUYR3VfzmJqjiAWwHZLoXAcHtX3zZ2jqaCwv9KKoSaWou877QpmvXf7BpRRh6Ysz3YjDZTP8ZnD",
  "key30": "3RLvNiKMeJxUFQLPMAmx6Sdtbkcrip5JeJN4xRpzCNwnoY4QWRLeADz82jhk8k32osK2nXsmCPPnD8wSNuBqX9FD",
  "key31": "hJvCPeBuSUJrtEaNkMcHnxPhfskKhikRohztVUFKRu3mwaHPasHJ7uwHjJkqDAL71ujjyCrG6Jh4Z2Q994LVss8",
  "key32": "5fLqhAz9RuTt8z1XsMfHuoQ66VmhHBuQzso8ZWhoLzvgSsdK23QBa63jg36UX6V7yGNRKDg3S58yU9KRMg5Z3y6T",
  "key33": "2RynLEi7wsb96djKvP92NKtBCzWtt15JAufQVqHBjjZbV7ZoFYvuP9MXoheAeaddpgU9xV627Wfb7Pb22wMf5NrC",
  "key34": "5toJsPpBGtTAPXP16Whe3hNs4zjcTcpbvbS39AjLmJkiw5JfbzgznfXwxec2oZvbFvwGMLi9TAJnnq6LAHJ6yHoL",
  "key35": "2wTVx4LmbeEYsJNRmmkub7PSwyAeaVEEUcNR9fHDEtquLstsFaVdBKRWTq72o2fQLpQfzVZ8ZFt7cMoDkmRr3z8K",
  "key36": "5ouSpdnTV8FRW8FdoKbLreyBigFLZEtKHNCcSmGYjyQFPKRwFDSwFpbPpMKRdcrHhSRr8TMTAvHqmw5smSFTZf4c",
  "key37": "3m9NXNS3sZXAX3TSqaZP1qByM3S7YBpf11gc5V7BGvs8DABJqoZvoK23cTN4cEAoFv3iHRVaX3oVrpXy2XbW7EFe",
  "key38": "2PkTD3r1ruNWv5KZN2o3KXDsn9GdY3qY9NGihxNnpymvDKiN39TTSGSGjYdn25kXvUzSDqZ3y4BfoHYVUjYxeNH6",
  "key39": "3gLCfZTvL6qEYSgLQJ7WiNibZbaxaN6zfQdB77NDCFxN9eJQRdpcSzKnSnEc7FFqFoTApzJ3RnV8ysCPnr4P1ui5",
  "key40": "26wiUttGUZYG65QsSf1xBnpek1rGNXKwN3aMDTYNHkyzb1vYSXJgLRiaarhpQr2YYvQJFbNzPkTjVJP2Gxdiqsdf"
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
