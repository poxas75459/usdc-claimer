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
    "55Wj2RrJMrxfatNBqEJhp5h5hucvzprr9cy7ixKS7jrjMkuWf2BJpVJm4bJBxyMy2DKBopPpvBf1vPJyA17NdQt6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286WQx4pCHmPydejKuVuDAtDnm9rRS4bJ7c2y6u6w527LM3qEpNJdqVAAbhNHb3TwvoTQz53d9anx6NuwpHtZiDq",
  "key1": "3PU1Zqxxc2MtM41eMGmLAAn3PDqFR6h3MPCzwYaJoMgfMPbx4d3d1kfKQBuya5BWKeo33HBE9GLzxhnTEVtRxzpb",
  "key2": "2wsDSSExSNEm8JeKKDZYv2oTA8gmqJT7PgP2GnQEoya82bvB1hZba9dSLEmmAzQ8mq6k5PtZNyWU1fB1cmuNCjVv",
  "key3": "3FenFQxJUPUkKyy31q4cTo7SpqDSJBQ8ns4byS6FtXsGYz6UhQhBdG7rnRPmQAtkbRq76oV7K4aahQ9KBUuULAPV",
  "key4": "zZZEE9jY7WnP6AzfYhk7tQp2aS2EQ8RbkRvKaP2h2ckr1FBRyfNKmw8DYvhZ2p7tZ8zN3z8prNkuPvjRQQEy4m2",
  "key5": "4tJAR8UwdW6mFzTUhoTTSGRuDGHm749hDU8JHWFBVkbGKtgFck5ipknCyvCxqyMvQYz4MBTuC6yGoUpqa3U1P3M6",
  "key6": "3tgrXmG2cEhDvaH8Q7bvQUK5NjD2CoQGe5Ky5ayEq4mkNH8BRkahrYEdMtducvFiLKebMBUcz5NVNtH7Z2tt8M29",
  "key7": "5CcZPYCDbzJfM6jYnadSGsQxUWnv2UvpPvVW5adj8XYyqzVgKLDYGp1kvrWGaC86eeRUmfcZz3BhuSaG3hHrP1B9",
  "key8": "2CSBhnXue7WPiWpyjtqvmuJzWHFhwGxcoHQWyLBp2K4vxyV5WKVJxtYKGhdViQyd6Dvb79nHMcR87ALqphB7XQPf",
  "key9": "5LrsRTybcsL3cBAygBwijjo3vuU8zJLqpSrjqTNhs52jSKpXhvSsams2SqjCQunnBJMwZruE2u22wgsV9JT2hqbf",
  "key10": "3msmU9SEqe945BmEHHLRXZhrjGnzvGuYDGGsw7BHWqUpXN3t1GkKvTHbQX5wwD7SiREzy4Ygprracmriqv8iMMUG",
  "key11": "4YYmG4uSFEKwUtAGKToJjvyD74Md4hG7FRgtWM1g6neT1XmbCtutTCjw81TqWDBv7weGkbfHwPWL7XYL4NVVNjzT",
  "key12": "35vyVWfhJJYFC7E8viAQS3VtXA1uaJqctQ8KRAowoG1tUie6q6eLQpAtpn3TSWrTwud14LPP2YxkGnJYF1rN5hjH",
  "key13": "3Zpzh7fbRLDHHFaaf8uMK6uaiTxpkRJqXXkf8EFC6NQoFV3thPdP1gfGYngJiHMj5dNAYgrztRbMoXe2LoDzqmTd",
  "key14": "LCF9bR4BE7vgNx2SgkEBRsxzeusrnsxV1eDvudFrB2f6GW9nAcGQN5gGJHCx2GtLftu1fRMY8yrtJnAtmgK14X6",
  "key15": "P5PFZqpeyQM9ao2DxyZMfft5dFsYbUttTMM7PrJGRKKXCBmsByJH4SZQRK3oqEinjXQwEP69q6RusunoShaHj2o",
  "key16": "3Hbut5nuVjAYNxJJh1YT9wQ5Sr1sMbFWkyzPFJdeFmAUkqQ13S5Fqyg4rGLfWUYvQQuf3zbGTQTuTYB9fRA3qi78",
  "key17": "2QTBSMC884Hr1xBW2dN1Y2EceMny85rR4C4jWufmKyrv1xUvQr6GkRQ1bGCkqXA7SM3F7CAwHPQStEAiXMKc8qQQ",
  "key18": "64h8wp6A5d5ntxq4YyX8WDgYyJ31VtLH314kJgqsfUsnRa2Q8UaiQyRVeRqFwzdBFANGXiQ5jxvbzcRpszo8aiFZ",
  "key19": "3xQg1CfGSQPUEJ1NJJRo5BksKa2WZcse6EKpaAvNwhC56hoRxkWtVNKEMpCAc2fsVUvx8cDRbW9eihJJHZjpmcwF",
  "key20": "24xogJww7jG52EHQA8Gui741eKpg2X4badyk3NUQNmhExpEXNit6NWT1aEZVJ1zCxXE6XVxYSSUaBUkotSrAL3LH",
  "key21": "4DLfCNtKVNpR1CcKAvPDQUVKz3tV965qxUBAmKSJDBA3qdJQibdZ2QfTo5ad4Hx2kvmDZG5tWsbUMGA2NUJntAQd",
  "key22": "24WsgPTjghStP5TnZrh71LSuecDbTc7SdZ31uUbwj2m61nq7Uf28tUF8cypEXUNGzJ6FcpuGXf7RwWxTthA1LNyp",
  "key23": "3Yif7ywrpv9K2Xjy9uPhSCDTdnmw7Epamrc96ghczBdSUGWmSbyLyKYDU8U8kJHy5wUL7mo74sH9SEmtnTD94aFZ",
  "key24": "4Bpcde5oX5KnwqeNXr88ogT4kJZhGa9ghqhiXmuA1uunfWRX1umKJD5UqEK79YyKHMnxr7ZwqbGPaFBoUa74V8AS",
  "key25": "63fy6wLxw4HwqBnaACpJ6Fi4xdcPJGQkJzMDEXfG3eqHc745oErgwhVHY3RffZXVu9Mc5CkEJkJvKBhEYaeijYfZ",
  "key26": "5DyptXimcY8k4Vjdp3Hko28U68fRcSmnhGMXMVFmyQEoqjt1jVS6x13cbo6kP5QYuv1rMB9XHVa13Mp6h7uESUHJ",
  "key27": "5bRuuE1BxnwQA7Ao5zdgkKLZawEX2VdPtkDvZHR1C2ksnS9LRgJwmfZphjkig31xJGgQDaK4CjvHg5TZVYaKVdF5",
  "key28": "3a47GLLjv57u5PJd9DvL9qvnzsFXids3L3BmJh5ofFLRsQ4Lu9MHp72ZnfQ61QxmeJpKFyqovkqGfZLSxodjBUvu"
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
