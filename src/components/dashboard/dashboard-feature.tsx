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
    "7ECHumnUHFzffp1j8QJZveSrpSPViKCmq1tG2TzGQmAeogChwJvkT6fNsaCyWosN7XmP3tdX45cGDaXn2VhgBCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kNrEwSEizdHWq3XUsaiLWU72EHZAAbT9YhJjbY81sepNyjCApfLs1HEyWqTSKwnpL2UYnyRUVJtcAaNey6pDuu",
  "key1": "H7RW8FKUKhPFfUz8Yt5CaE11NihANvXi6MTfC79aKNFdmHDyELBp2ty6o4uJDyiAvnyLE7cnkB7HQmQEJjzZPQR",
  "key2": "4RBnZfdyWbcSHS97k5wCfsnLYHsACfPCGZjjAjcfaNqk64b1ENpjwRcEimUvGLLYR3JdwERJbHBW3zPgvS586kaZ",
  "key3": "4CosEWAGxuEirGoRHNdZ6pUeAVfsxBgV47AqK2UnnBEB5AeJRsCwixDuVXqAhvTnssswrfPAHoQyWM8z9nTTEhE8",
  "key4": "53p559qZbBP6dZZGFzoaqLxWzQiD1vxPt5cVViZCU6wEiqdDdumKL6dUQjvKAwP5t1A78JTGP5egsLEkZ6zpfF5j",
  "key5": "4Y7N2wrjya2xvFNkhKJYEeEMUD1frKevAuDh45PKA6iCCSZzZWrgCTrmF2G6h4H43xB6YX22fom5LannsBCgMm4v",
  "key6": "4AhPFjiCcduHiVAF7rMwDm2fvHi5dwARvCV6MQjRt1fdXQzV1BmSEQRQvQ6MU1SqSkpq5fNHE9sM7djnBcMNX1xJ",
  "key7": "4QWuShr9rG88TLKX1vcLYq2VNC9FvBZzoFeigXBtHjN7S9nxLxY5qv2XM1v6azVGfd2fDHN5mqSPP8VPiNc9hh7J",
  "key8": "4PgPNfWAqSHTTw2Szq9UUuHFcqnVwJKqWk44yFk62qdvwrbQD7Es2RiLW6vJ1D8qitsfhxj4s9mguUYgd7EEmm38",
  "key9": "3Xx5Q5QE7GemwjoiSXEpzEcHvj2Fp5Ke4vRVnjZf8bGSCkxHY4eW937LPsygdcbCEUFuz9VS9299dHTCk3aBQaZF",
  "key10": "H6DNibR7LPxtdKZsVyRvG7u8q6xAuijnBFqny33VgqpYoUZWqW4AuCSQWoyRsDoLMcF1d9sZVh2wsKjVmAZE3NR",
  "key11": "5ez65y7GR6wVBrTYspaKPviXdRMFDhoYCjSDp9VGPKS3MAwbZGY5ECmSEKPPdeQaXsp6K56SSLPZrfMhL4RTR9t7",
  "key12": "3ZV9vZD3M5AsEqfQeTky51EWX9eKdRRrNJ8FU1VMB6AYThwwaMsqe6HH8JxPKD5un6fAgeXHdG9JEGaH2uxyypDm",
  "key13": "4tm5aqK5nvS8pvFcQ7VE3xvfzhRLVsvYV5yB9H4C28KoMF7oGjit28DMHU4DmhuHx8DVzozoPhzZyu2LBJjfVvMt",
  "key14": "673qeuJCFZio52oCs1kqRHoYKxGh2u6xRbi5SrnhavKHxE7LahdpGb89VasjgDbSBFQEFRYpWzMQyhNnEX2KA7A9",
  "key15": "2hp7j4xQ3iMq8pmSWHqAcUDw5h3eUgpiFS6UQnoedSxB17HLfUnUCA9nfyEr3Fzb4fpCTovQKbbaqxSmcDSeUdDf",
  "key16": "4QcoGm2v8jaHB1VJme71N5PQZRtxJA8pTD9s3BpqPDVwgpxqrroD2SZWs85hwLLiQbiY5XsaegvxENk95n13MXf5",
  "key17": "4qhGB7hfVgiSxPWddesrZkd1Ruvbiq3GqdBJTc7QkpGLXigAuYZabs2ZwrA92mfLyXfjNJ8KM3mkMzXocJYDwPZc",
  "key18": "4Hafqx9ZFLQ12hJiJDoHSP6qPmz3nvy4BeL8NbjizEcsdwFyL5B4i7ShXp7rv4mjkKPE9m6cuKrxJQdevr54Gjcq",
  "key19": "66pJbxumnTthjFG4GTCJdV32xHXvhNtTr5XaTvJBTKQegNwSbj5uhKhGJqGcejdkwMwywMsUg3zUL6ct2gjYHrgE",
  "key20": "4y1afzS7Qi3BVhgAKrscUyYcyzf21wDqH852k9M2sp8esLMy5TxPRmaT5dANmTKvd7tRbUEF1ngA9gcF7Es8aWus",
  "key21": "4vHFcRNyz8UWtppVyeRzn9bkfZ2DEPXs63xXFXApMsMd5X3VBhMWmabDPr5TDinQyAqpxcgVbn6aZiqUoLoUWt9k",
  "key22": "5thyQxFVgEpCqa5TX7peVRrJoytmiybSq64Q7DxPKu4ZRnQnmchW5p5yahCwrbvt5nCjKXZQMFMFeemVDe4tBgGr",
  "key23": "c9teFfmZhLSTwZkqsM3Jc51JBQ97RLhr9byDeSKyDJ3xZQb921vGvhjNNMg1H4ZGfgkEfGNauTJPJ6t9P6mvcpQ",
  "key24": "58BsFnScpL4YfpTGojjDKZh9Re8nceYDwCoMCxJVQyRf5KQae4ynCEB8b4R5bcY478Wp29uSPnqZhZSQb3Wnomeg",
  "key25": "2yN7F4atwhQULTe7Eepqq7vRxKnUXAJqzTSwhnyysa8nHk5rThTV2eQk7sH1uSm4WEc7KivNdWmXa4avAokoCaSc",
  "key26": "2GkgiT68eeavAq6kd6dLhJhaTLSiDvuR2GcPCep763kbFMSByK5vyZgs8RM8s7AiWDXuormHuNwghts2H6bX4Vv",
  "key27": "2Yiv6iLHGdrarCTKMiKbvVLvtcNxf1pEwAVeUXmEatsdkw6XtNQnaEjgb9c3i8tBW5bac78emmGBU4bQFx3WVFXZ",
  "key28": "2hZgu3niuiP5W1apDQMD2g16HGifQCp8Lbik2pDvFV4xu16nwJazHZpgS6PpG7ZmUupYEVYXH9XGWrGkLh2PqvF",
  "key29": "4GLLPFaRAhwBmA5NaPtTvgiq3Q9b8ZfrRSR6YaEU7P32SStJSqL3GsjgUkE2J1pAmiRnRYeguv5iBpPPpvq1G14Y",
  "key30": "4sAkjGUBdrujj7HEgLdZx8DMsmspjHxfCLMmM7dWYbrUS1oHfozfjEMEFHfVcqJp5biiBiVBciAJY7Yd7pCsw5Vu",
  "key31": "4HSrCPBTpuEAydz2xb6WWTEzwFHq1hEHGMms1eyACWP9LjQBpmabEFidGq6roEMD7PWofE4Z6X3hV9zabQBtQgYB",
  "key32": "5uyFNbJZvqX38sar16hsrLvHcMcHrUarQrHcZoN4qzcHiTfoMyf5oiqna6TWN6WZoCz5at3SGMK9BZWj243CfyJT",
  "key33": "21GeLUiKduuaEmYmqM9zCa26mpBc212KE8mSjB2DPGnTKAApyPAzy2Un9kfhbgFW3m3ZZ3X75tk81V6hygXuMmux",
  "key34": "3v5yAKrAed7bUVe6B42EMCifVHkDpugo5YiUsYLTyaiFby9NeSAMz6QfhPw5f5xoDuy2vK2RJQKrsu587jU92rZZ",
  "key35": "3G9xYAuU1EWveWYdgzCD2n6GpYeXL6TYqg2i74KprNygewwaPeKfHSt8Z5rR1QQvxajzXRcWxZia9uL11NZ2YJWH"
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
