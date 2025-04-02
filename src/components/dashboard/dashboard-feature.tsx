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
    "5hT4f3mU3uxhzvKYCVq9sxxhuRjLqSJMRXeQszx8YaXKBr2NpWPKWrkb9eRTK4nysa3by4UqtRehoga6wK4pXEiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H2wRWy8n5Yh3nvhzaWkd9XWvFbdtyuaC6s6JvpV1Wr3mLSk953KV6qwFeBrotLRgvkXXxstpgsJDFBsJrvr6o7Q",
  "key1": "3PYAi5TCpvpzEcvvSyp7NzD2ceE55RdrwbNtJ7qP6V4owi4riTtJCwBvrNNd8j4PGn7oohqZQTLukfZUkHgvx7aa",
  "key2": "3ZZcgpiaF6cn4dSUbHgfBtaxaDVoNqqKKeBHs3Jkgp88Be3q1yxLr4PhN42ADkQU8nN84XqHax76zEoPCecMBH4u",
  "key3": "2PUQ1iJHvHk2u5gamgQ5F5cQPWkFXVSdSsu7gqJNRa2ECXKQ4ByEWdDp8wa8zPCB8kLTkTsgFBxsKb54DxkayUrn",
  "key4": "5Cd2Xwyp3xunTz8xVpQpQLm6WtccRw9DWNLvHZp8VZ8zAcTFA7LbnNJYNwtRiuQw4TWRid9Y2X2RiRRKUcfZ7GHD",
  "key5": "4GwZMRwNE9mKZdN9nNVoGxoS2VrzCZjvPFdQumvAiFdMLuS1B2npr7abRdiKGYzQg8LR5ds4xpQLFavbnH8yocAP",
  "key6": "3bizFt96j8uxA8F7X2fyer5wrrjSkkKXRKBgDdVQn4NxjipBEjWDopbVg8yMUcnFHbhPGZMwZxMD1fXyaeUPf3qL",
  "key7": "3uCPyDjMGgw9wL6kwxaLkbUXvjhC1D8zpzzwxLJ15A3997jmio8MBKourxv6bNsd2wiSiU8XR2P2s2AWZQK4P5mt",
  "key8": "2AdqPEXSu9JM7BfFFQGZrRohsYNATufxW7nmfmFv3bYkNyFyEEhjmazgxfUdC1s9DaZmzPVbGoP6UD6ydCg1MpT1",
  "key9": "4CucnKek7YcxaS4f57XgaK7XeCZMSkJ8Wowx6chm28Y3zLhWa4SV2Hdbj4U89kxA4rGvtBQRddN4zwfhvrV2x1Y6",
  "key10": "5bUsYHNqowPyM7SmrXsVZGU8yTaAQUR9dpfbaGVBwFyVtTyd4Nz5YqYE664bCfwaCzbp3RAKTECoE66TGCqoJoqi",
  "key11": "5kxTLL2oFYNPySh2N89APVupYZtwbmyKxhMnEVXQgKQ1Ruxx2oKgbFhCsgvbKabaj8PEFTshdpFVczQQ993vn6Ex",
  "key12": "2561UgLudTzcsarncN191FtnWeKcgmNDXCe7FpX67k2ow9mivsQXoQzVVgktDoKSiykU8r6Q4JnKKNJdqmAoFmuD",
  "key13": "5S3pj4EyeALci5iUv6pwEAyap41eb9YLYYfHzzUcqzdM4t7tGUUEVqjjDVHQA8PbPTNtqk95VoDBBQD6bLbVzYRJ",
  "key14": "xj12FWq12YcULTgW8pjtSXWrwUwe4txWXLu6bLaceMw3WVUNCDCTYNYeoAWXvD4WQ3iZTbzG74RUQuHSH9EJPEg",
  "key15": "2xbzPUEmEL7e8gijj5aqu2wJrdXXWZ1HcDK5HaxWncrkuQwVjotoi4hStoyCc5rg3EvDUtneTZKiFFcSqcEkT6Ea",
  "key16": "4kXvWiMFZi2ZLTdgCfBQYp1jgMqHNeUrq2BuMVQYtNMZjh21twJLbzkftoX1Hqys8fny7eeoyYxcTrUMbZbtbkSc",
  "key17": "2Me2JycWadUEBCtUDz98pnCDdLP7z1oeftVSLdQcmYi8iGtLtSqrL9YxKA5UgkzPmui6nR1hPUopWFQQbp3pWtJM",
  "key18": "2LLPRUXpxpafaDFpb3eceZnUesWh2t9kSLDtu1ovsWqRxvTdcqzr764NzvQHm7VU47JxPQ6mDSJJHLtFc4C14oUs",
  "key19": "2WHXXD8q3YJ1zM8N7y3zCq4ZdESu43TjgyyrejFe1UtXUHT6SpCvddKLVUuEDWHjJxZ7gKGegBwQRcKnJaznZPx",
  "key20": "4XN783m9Qxf5j6QaqekWJE3rV7b8JjSYHGuoKRVPEdXEVWaBWTv9DPwDfZZb5skCjDxHidkwUWRpgCxA6zCLMnCv",
  "key21": "RXsyXzgoghCisyLZcRwjXVwuTZD7cCEt6FhHuZD7nbrGUd6Ayjbn4nPHerxDx2jKXZQD3v8L4bCvaaJJydXutJZ",
  "key22": "RHZyMKipBGXwWfhZUn9uugGPyuJGtDAur8cNM4jFd9MNyEc5FtxaEFmWHZ25BSkobgupqGC3MFwATmXrqx8xtyk",
  "key23": "HRvfu3jxB9ZNeXRpaDAhyWHZakx543LPtSTJqSbz7YLyqAbGU4zp6L4Mhtkg7WXmpT5c6eDgAnhU3xAMtnF6vJw",
  "key24": "2sBQ7F73yF6tyYsBY2CfyeKpzccejBaeY8LKGDR4qBCAePdzRrvyJvN6BeMyNwjfYoaBdq7ACUbSJziJtaMfDg9B",
  "key25": "ycSuwZXQTJcL1jj31RcYb8ybtQ9KJV5Xoki7REBDiXQ3QEWLx1n3twGBDqm9vERrAKY9UmbaVu1UkYPLMXFyxar",
  "key26": "2Pu1XWeQMyF9GKtAbRtnuvrq9xreE3dPhEGL9Xc1qZXo2mHoTnZzFXBbykCQrK3V659TwmjETuGWafcB9dZiFmqz",
  "key27": "4e5TdSKPfz8ywcfrMz1NgRsBAeUxskpD6Bqs1LgAaP3bjfaetrpTijYDx7CEyEcfs4TioxSZDmQqni64eALM2M2x",
  "key28": "vvndgBvFqfxiAxL99KEyP1oJG2hw3b7J27hGa6U2fQpm68Gu32PiGomNsizmV6zj1QkxygbbKfqjtxqR7KvAQyM",
  "key29": "2ZoR6K63M6krRVyApHKLBKw4hcya5mpHU9cUp4xgA61X7nYrHwCa3FMyP5Tmk4ZzgE4Fzru9Us7Pziu4X2xrRwNT",
  "key30": "4esiqzB1JVYYnFApcLLXYWMQcXVkh4fjd9DKe6yG6kxvW5YaLiHij4yDfQPpsteRbYw6MnAyvwFAo2P3FjMCde96"
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
