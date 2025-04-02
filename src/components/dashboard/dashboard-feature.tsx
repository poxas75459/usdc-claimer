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
    "2jpJZzRs8XV8dcFZPBCiiL4kM5bkEnLoXnqgraTDkMc9dsDmVqpC4wuWQWXDhngck9XUpwWo1NakJe5nprC1tEhj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "598XRZJ7W12XJxngmLuaxvHVcVBqWcd9qrKvpeBiiUQmLWDfJAP53LgsfshvFNaLiKamqR7GUPebxBR4Ur9XWJDe",
  "key1": "3tU4f9Wjx69rU4yWrHRUk79FnZ3gAajzxygvpYR323SUWh7aFY834JrxCVzKv8mfEJdYMiqQU7toJnq3wC2G5c1Y",
  "key2": "R2xgAkPJprQRc44YREi52gyubiRvQbYLF12x64SkN1DFbiXoUd8YUusPeSBffawFMTh4xM549n7vihC1uG8WFBb",
  "key3": "2zASaUmcV5GS7bhoW5yL2kzqDPXQ48rZDtvPPZqDi368Uhzj2XzR6D7UB5BMNyyFyGuG8MKU8gf6AQA4vcJCfkkJ",
  "key4": "jLb5afuRENdvHvSDBQWQSQLP3Zr7vkyiDwA6RpG1MbpyzNPZ5Uy7g6gxvLKD8mcR7hoxiDeGSt7D33FeNrSccq8",
  "key5": "3uurkR5PZ2NNVAGDiitjGqt2VmcZQjjFEJpByKiKHXPKWk3TLCLTvdncPZTGWyqXx2uW9Vp7JRQ5hoc4iFkHfnff",
  "key6": "4aikRT4G8w2z1DDhoNxnnvuX3BNmkS68i8LtsEsfUDCbBhvy5c4cHr3XEgz8HTMde3jEZT9fee7QC9dZoTP9fbB2",
  "key7": "5t2HQ11GNKKvFNpwkyoZAmPAWuK1dTkaDh6TKA4JxGVKTuAjXQ4KGviNkLR2159KpcFVPSfmLN5bFttgoKTacKPE",
  "key8": "25bhFB9iQ9u9bWEfiZb27uA7b4W1euTRkfP9Qpj2J2XsNin3CH2E8McZpGmDWjm3APn5kczo8F5qP1J9ZumztX4e",
  "key9": "Lvg1FKSwEXNejcQWw3WqPfnY6Tkm2mdrkCCVn3e6M38CkkjKG7rS3e3mT4mfWn2R3o7Nx2Ldgn5BdHph6CkoUQj",
  "key10": "5zCsrmqgELHmGzJC1gMXH5Q6YMKXB1Hta2jgLhEneM1MsvJ6YYwdba397JYBHPgrE1TKzQx6vBhCaQr4EBrmma5f",
  "key11": "7H7YytCGbu8Zsuvh5NFiAGSP45XFhTUppu3uoedirVDQ6W5MoXmUSZqb8BCUSWmU3GTvvEwEbL7FFAxQ7vtsmnH",
  "key12": "3anCCA89hp3FU4D47dCWFJk194xpeupGTHzeasFPFtpp9FEB6GQvxxPPn5rABGo2sLUETE4GimNYvCYDF1kcBjVX",
  "key13": "5DTMYcJcMhPXnAeYZYpDJQTzE2HwzBcYkNyrYRwtzKhvNiR3ZSFEZu1SYw6ekgRboc8NmmkrmXEpE2oFCVysfNhc",
  "key14": "5yHdXPT9EDMt6TKpvbNVmYjSdQXL7tiwGR3RncQdavXn7YfR4pSzNMAa83X95Q6BdzHjjkL9fwTrZAXJyenaCVSh",
  "key15": "23vjtt94zqp5tCymsmDe2zpzHmEQ9eT6HyMMrc1CNbCqANVPZekPcBSRyzxt7jPRjZkvB9s68i1yPU2cYPSFi6QR",
  "key16": "4hna74CryAK6HKG7JfUoZrBm95PzssH3t2sFdgVbJJw9sJggfzQ2CG7wHim5PptEfoRwihj55iBrMhuRHT3nLSRN",
  "key17": "uoNS2UpfHUz1LKHbiyKuZuPziKLLxMFxnuTNmXuHhofKYXdm1PLjXcUB5URMQkbGaQiCXAXcCfoMDU8CeDrdXwU",
  "key18": "2CboxEdTnDgH6SoN8VpxH9DH4caWRouPeyhEyggiB6wYTGgHF2KASx4rZ2G7g2UYomEmpTYeQtcqdLMdJ7X1E556",
  "key19": "5649yHPYxiVbaZ369m9z3LqzrGuMTtrPcm3fZM5t3Dm51ZsfZWNbmmP4Em5s3LJQyb24iJYRkKq5yhUsQVHhMEJr",
  "key20": "4XtDPwSivCQQMATwQ85AmHwGYbfAgNFsQLheMWsFqq8s9qYn9i52JZ3JBoKq1Q8DGHpQvxgomWiLN1qRiraXwN4P",
  "key21": "4MeA7k6yJFhAKem95379Bamcp3ZxkbRQ75a7NDDwcUMK6Wh9NLzU4BUjPWx4LkMAPVbz3tWWEJdnzLsmChe1sr43",
  "key22": "2yc9ck4oktdi7oDkugGMrKqJqi5QFeoQSeN5Yd7D7vDxeeqw1iz48GLLNQMYKBkWrhPhvRPu9ieSmwBQg3xUkgiR",
  "key23": "2HUhg8KK2hDdEL1139WWRMh7YPaGNxj31dXnCiYJiXEKkXU28JqvGgQKbkZHwhaHSsZouoCgp8FtUKSGosWiaU1v",
  "key24": "367sZaPJGPFPkUCdFyoHduS7tAq9di3rG6agGc1vf9Zm8seS768j1nLPap53aLesKYite5EZT5NwMFKKWz36ANTd",
  "key25": "88QbQsyvshEMFspadfLBVxGNfXBADszYAtgcAvzN6NQLvwYsHf9ZGHh9Kc9FygK6QKQY8n1pZDY5GdPdTqaDEDD",
  "key26": "5UMudxbCHNi5Hjpu16KveEzQY7Ta9GKkinQmaJj55RdcHChpdEgmk6bnfw28n8zPoWDJPuUqgkAdG7nbo2SV3b47",
  "key27": "kV8pGoGHmzgMHLYhfSvbyykwp622d52a9N3AcBBvTDxUYQBZFCDWQSWDviCNac2TMpGdgsGBMUGKRWjZVFiuqAS",
  "key28": "UrpZpn5Dd5fB7mCLs3th7sK3FQJWWynFviDZma4MLh82r5sRpeKYDdafYSKujGKUd6rRFqMKFX1UECudDYyw19m",
  "key29": "3PgKmk3zcs7xcxAZVUsS3AD1gKeJWRJpzGLq8E3YJGTq7mHJKoWhnpTvdmL6BKtkaG5Q7qqRZw4mbvAfKQ3geiQu",
  "key30": "2pSmc9RN6BQxtvcSALtumaDTcR8TqDUXPCBwXAg8b9Dv19KcLzYnfhfBXjVt1k3E49qNWJktU9mCB6DTJGWqk7Lq",
  "key31": "5wCkfzKjro4ntjm85nXYc5tFDGpQtSQr2JW6jisKKyxG1hZtyxXKMxY1uLhYfHnQT3RDbhhAwmEhH5JP3rJLzUoL",
  "key32": "2gyjr1BqCrvQghJG4iEihvcnyvosGwEyv1MvGd5HPuiAPZ5yHwU4EZwxBQA6q71qrpZp3fpJ64AoEm9UjGknRxip",
  "key33": "5oruCDreRc6SeQiZkfLgbJ83sEqUydueEtaQ2mVGwW4dKh8TBtMWp9vpqymLe8vpwJp3vfghqCXVFRwv76iqbwhK",
  "key34": "AQs6rRrfE98baKLYXrYHc5Jrzf4c9indsf57DsYRTdxW2JCTDj2WPYJaYQ25repNcQCEvXC4oNQadUn7uXE8YsA",
  "key35": "4FZxv6XNrhccTfUkY4ganJsQWEdx3Nv2UUPDyFwenxAZge4zNdFdVqH5dZCVHhX3Lsdps9qDfAeFAk8E7eCPrsx9",
  "key36": "4ddoXofYSHMzXvMqDUYKF64c4RScy3mB7dLHRUzpTpCFsxKvoJK89aAATUMJximwieRXgqJ3WSTHf7aDoGcnb1aR"
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
