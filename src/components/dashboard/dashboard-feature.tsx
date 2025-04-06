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
    "3ut9iRpxzPrhXU4sRRMPaeShbPESBsHXzBEyybLFnyducoXnPex1NJCCXEwn7FHG28DGDudwDRUjXGMPymBkHaTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NtNJFhQ8ZTr85EiisS3xRjkrJzXxDUrzUXdU3rm5tVcNvd3x1DZDXa1yVmb9SBceMZJPYrZuVxAJgskTkpKn5SJ",
  "key1": "h2CkgxeSnK6DvxUZh439nBB1nPpLcjieae5bMQBPH6hjkg41XYnFxX3z8w5xYAmKkXsW2mLen2evtcCTc8X1LJT",
  "key2": "4AdodcnkuUKackekehc2oWZk7iHgTZW8yrsR1f28FGZwMKPwJPy3qnJ7jM5JLuqWCHFdCjjzxvDR3etGa5H9dzQG",
  "key3": "2bB75NPLnqepxCduLvepdX8Nc79kvQDn5zCXHsdCh8Mcm89d1qGPjNSAbUSMaqZwDDo2FbPMnzQjUnmgUCvwYvZv",
  "key4": "4kXpvbXrDtH1AzhzePhh9wwNbDS33ASTDioDHAWXxNLF3sLnkxodyC4ifaQG6nAT9Gf4zQ3LCTPgHWJuDdnnbbXy",
  "key5": "2XyTi75yGHnvjWy4CNus2fKviwn4aN9Zamz2bVZer75vNMR8oRAPq7CMeajqw4aCntK7kuReTEonS856VFZwKAgu",
  "key6": "65N52uFYcJSGfhc2ETyzT4SPsTW4n84hBRakCFZhodyfEoqf4Ub6CQyTxZQQ7k4NQ6qsMmZz49B9ui6UQeaQspSV",
  "key7": "67XSArjBXakQ1WnqBnzExmfaKqSmY6jzQAmjE6EGt2UQbYnUSDkeKBmdeQsH8hqrW2iF3YYCEwMNXGTXfDQjLy2R",
  "key8": "4MwR8ttdndcgJotpYPg9o1m98KtNJAiGBU1QFB24w8AgavH3niacixC5WvRpJjmCz3F2UD93PKrCi8EkzfdbiTiB",
  "key9": "3Ptsc3hMjiZoexmpf8G5bZrRfTwD7kcuenqFLQdzHeAs1Ve1DT8tdGskxJQ3HK65v7UbHzNCRHcgbQELbhJBnNre",
  "key10": "2P3x9dEfVe4XPJmWT32j8KXPpBuBXn5AhcnecAwqVPvUCcbKee7M7BYo9skdVVrwqFefQ75uZf1N4R6KCLoNKSNR",
  "key11": "4tf8g6KkYJmqJBLDKfUGHZqDmtsH4AHN6WnZq3hN67TbvhFuGXZrDJoHuasdNaiPJTgX3BpUCNXu6ff5a7tFonbH",
  "key12": "4rND439rk8vkt8wQFoC8gC6CwNoXTWLBQv7SxUB47RPTzs9i63qNWEkBGCfUyGjEnHyXb5JGpqcLRjcwHP1jroe2",
  "key13": "3eeWn1hUT1oFw7NQgVfgLMCe7zCUKEEFQ863QnpKWQPYvmspgszudBP2FCJvA2q9EfzchzDP6CeQqckpvSMYhqpk",
  "key14": "27L55JqyHyEn9jt3KP1Tr6vH6ybUAym4ves8UnfzXFxateZYTsmVFgJMFUre7iVaEVsQKnQeuqGAaX17EiRwALYR",
  "key15": "4Z6znFCtyEkoHFtgCxEzmpLtUBEZYoFV1vqao75GeiUZnXXtv8PgXicWQ8fa55ERZGwG2G9tCAiYSoeGkBdxojRE",
  "key16": "5KwPqeKknuvwVGYuFQkPKDfV9rMv86cpQx9qtux2ZtG7xWtTBEXWzzk74qomYzH688Y3ArhK2ajCYHwyymZgdQsj",
  "key17": "2CJrtcJSgvKvq9fSDe4Sajpx9S2zGVEcs3xrZ3hYVyAtKBYVrvVcxFnJ81mFbyQZFRMCb5zx6RDBdmNJqzR9W5uM",
  "key18": "2mG9dezuj8m46TZZ6pH5pE1tkb3s1fX5ED87Ghd4XCUnzWYUdSQFjVA39n1ZVLNEGXbbG1vrdfDcQDTWNXcw64zo",
  "key19": "3dHu43V4d4waczhffHMVXtNpanHth7Nm4pFKJAX8Qg2mtFb4UdsmFB6euevfhfr1VkcbyrUEkhJAxwVCLUyjLJ43",
  "key20": "67ZAbH6dTm67ouFoMbrd15mskfGYfSbTpdHafzhNgS6NUkC2arL6WQ11cfNJ7sXJUJdkXXVq8z2WZeRVbkuGp2CN",
  "key21": "4GYfSkE9MLJPRSrnwSb2rpzDsAscGosRcAmznZfgqENpzE3uBLit6nwx7qszWox6a2q9sRWiBbvAh5etKCALWCjv",
  "key22": "4jS9RzWWh1gDrT8BUfBZ3BLURKv82ZmWRo2kSdSAGodHxzMopVriK3pHyGJsDMFE7XHHKF7DrJKzXFNZmJEm9mva",
  "key23": "5wPZk2ckyHeha8M9CxZkpWQDPqnaE9WxJtWiMwbdwKLdABDius46gUHmDpXDFFNMAv2NpyEyh3d9xKXXchZxcxx9",
  "key24": "3vZeeZjq5dHFKEg9ogRH3QWwHrSH2jveRZ5sKVq5bVFt9icNgb5ZdqZ3Pcar7BHk5eLGURdUCinV782KRNdh5qLk",
  "key25": "4bVLRWsTDhaEVx8Ng3Frp7gpNwNaF7Psj62JQYevmcSQpwKKaEtbq1vPXuqphWisVnozp7syDMfEmCi7Bk9tzhF2",
  "key26": "3JZPcn9tKnNToDXzw71qsHtXd6EVZqrmKUu9RhQCnqotzg8uWpQRN2XwFXBkUbtbDiFQDpmH5Dkwtp3kgisKjZFd",
  "key27": "2QSHgxsx3GvGVqxsbitWpnRMrFQQ37VHipAXJA5hXdYHAVR4A1aA9hogu4HRm6JnE7gBd4Yqe6djX9PnUqXhwPCt",
  "key28": "5iHtcDNRRwqrEJs6tuNDoGYXzhytqFXHz8umaoaF9mARxMX4wxRKei5WRNe32XHTTepQpb33BxuJsMASBPftDxaj",
  "key29": "4a4nDx9KqmttYzSAnWgxC2iwCGux4sZ1TvNAzupP41q8RNcqMcvssmBq4weHFzUczz7i2fgomvX6QXSBpUPwhMJ9"
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
