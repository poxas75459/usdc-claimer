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
    "4Yo34RXRKM1iBCERbPYbcszGMRoWdvrsnG1t1GeR1aJ6fQWEiBrXdwWxionnaDpK5ZrN4VFAcC9h7kj5btiMrPeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZwTe6ZoZxRF5UvdC5XeHUtTJ319xGy947uX2RFwZ5Q7mpowuGGxmWBvN9EMqigrob7XYMFE4jjHQmpvbKoj1AkG",
  "key1": "5rpMSbA9CMucSrGrRJ629yv9LR51EEJAZrj6uVzhok2i44cDZjC1r2DPX5MqqQe3z7dwgPPmc28nfuv3zpdCVQNv",
  "key2": "3fXcDUw7cFNj9JZ6HYYwPmYgk9V8V2BwJ8ax88ZrnDPxxW4n5Q5hCQ6D788Ynxa1j6WYSdQZLdK6XAzfrwQqdfDc",
  "key3": "3ffBGMMvvwNb2vCXb7noQxVsezMivH3brSLUNVj4f2828Stnxy5iJvT8yugARYdsNS53DaWE9Gzgay6cL4xsJ5o7",
  "key4": "4HMP8mLAxnUTtDADu8LRdLhTW6Um6a94qNZYZDzsbsMMPLrpR9mBszrKZDaea7tkv8rafohpTPnmcDuBqgtTSbFR",
  "key5": "4tpjM7oKUqaBtRbSFYf3ddTnUxS2xq9RTChUz9rWfrP286KzPRgE3MrXLC4P2r3YJ11KscrpM9EK6CVjd7nN43kp",
  "key6": "2TsorW2gYPX1jZ2ZwHJwdji1t3oDTxSPovZNnQCa2D5AyV6c6PP174TQjSbNxCkM63YUCieLC97pXyLni2BpV6Zv",
  "key7": "3oHkYhPdakULp7e14tSkgUXw4Pg3YW4zZD8UKKUq8azmAoY1A47hf4J7FcimqgNjtR4GVKjkG4mzPoTP4SyFRsCq",
  "key8": "2YQ9DiqB81F1q5zMGpyXAgqGYcN8tMnsj8EdCd6h8krzNtVrPTV7UBhKUNi1pxvuX9kKGjq36JyFEZWCFqNKkyTZ",
  "key9": "4VKsA144ZbfLwkrji7b1bfXyGcy72qcZ5Rzz7doa9rF9wPu4rk9dExiZjbNUcCnYJsWUpHuN8Ty9c8JrKDsxxVxV",
  "key10": "216DEQ3UhtqdbYoPYKFiEr4KZy6T8Zj72LFF97UbdaAzn2o7WZbk9u1Ho5kvL16oXNmQ5sjMrVasR4ksTDUjjixR",
  "key11": "yqAouWUwnwFvZh9AUCxhUiWQFcB83aKWd8wwpe62raaBV9dmJ3kcT6MWDXC8eUgU72wgBWZmXT65mv7aZos91bu",
  "key12": "2XzbPgEafeuxKeCHdaejJbk8wN2A75x7w3YHgEuprs9mcRzDgmg3rjxkCfovWTX2Wa1svHB9JHCvzvkPb9qoBzDD",
  "key13": "3aNrpkArAa54rPEp6maas7a5C7h2JLjR7L6z36SF6sZoN5EZh8QMe8bS7Qq7HwqxFiBsu3mmyoX1Z6vTYPdkKr7W",
  "key14": "2kTyLYeCtrPrGUUFXtjRNpgG66TJESNkPZo91919ediGbPh47xAngq3tXVA8qtUY8y8SmfD64j4TwA9EadQaB4cv",
  "key15": "3W2d5HPprbtie6nAq6nSRyUT22vojMD5szV5o8GgAdHnMD1EtRtcu66HpjxQxRc2qwYpkPDzykvQZnFHHCf1FSBt",
  "key16": "3XLYyJ5PPxobUGWqHYSTpCYiMNnP7te5ExLYuqjmf5RQpPX48WPZGHGegYSJEUjp8DD5SNzt7yQGLZrvtLKgG55T",
  "key17": "4MqygdAXFrWFDBf9Y6eSqTqU8L5maVF6e3hxQn59cTdaHcHQrPDUp92JSW2Fm1AStgroyi5YZwM7DDNuK3oxkkk",
  "key18": "3ELKZG81s84hjyDhq5EjzjwxJQ6L6oWPNVPg7D19bYCQtjFfjRQd5uqvBW2FgoJAiWCoU2WqhwMjqAgRZVS3Uwgx",
  "key19": "5m8Nuc2hvdjm7HKuHsMDnGvGVA4yixBWqbzztH21ygScp1LbP8FtdHqG49xbi8ZcCYqUHr54XvXzQjdaUCq8c2Zn",
  "key20": "cbyu8tyv39ksmxWnhosi3GkRwRraHbZBoPp9MQfkMGM3m6TYPde6PWLBzvxZokMdx981hnbgBznQU9r14Uet6Rq",
  "key21": "5qzsJ8jxPekzdcNHVZ9mxr66inbHzhtazw5suFdaB5VvkckHzJnRQMcm2jkYunGm967MnZsNc8otxgZLy4Bn34UP",
  "key22": "3yQUa5Z2BRAANoWg1MiPafmFA91pNHUrwEMM22KfxK8qgscMcRGx62vRKyzzvN3sZ3iRFhxXR6Ans7ZfwzPqx2dJ",
  "key23": "apkPTMXugeyya318XSGB99jjfuJQRgJkNSGRy1DBKzbJXqmj7PEi8Pm1j6iHy2uZje814mNeBFsJo45vS9DaquW",
  "key24": "2WkukUzM14zBZFRCQReA51HMP6sa45mFyMJANXcbUu8AWed5b9qney4NVVqeGNiU2onP1F4U3AmCRbcMySEosZky",
  "key25": "2bLQppyF75efuHWhMJ35iWATsHkiJm3teU9AUiovpqqyYimDciPEianhx11tEpytmLNPZwUPB4x3Gf5C7VH6eTj3",
  "key26": "36UjQxvbeS59eK8z8VKSsnUGPRPNttigucbpUU7z8mt1HZ3xgYCAAmsjyxZQ4Nu8EVi2ikQSYSxrzM4HjJyAg8TB",
  "key27": "4rctqUqCeh4n9j1R8psuKEiRjZKtev7ERXgtL4t5QZSGX5GCPSqmYymvj1W8c8YYstgdQ84d5HxMSKc578zJX68Q",
  "key28": "4Ww5UyJwD2LueaaMhP1ZxbACR7Ub2QaggoUCc27pu85EWBPtvxpng5Ua3UAekW2F2Ua9YTW2fUU3yDVynrXKDiF3",
  "key29": "5ffBhmjTUYvA7cgDfofmCu7aj57EXSNRLETLya63W8kiU16EeiuD7yoVKXGXgvmeDKnhhf1g1jY2qUxiZ5svKcMR",
  "key30": "3E5MyXP4rtFvw41QL4DsPag7bYfSXcwrYuzp6QLsBwpgDZsyhrmsCqpKppQSqDqwQmv4tTEMhp7dkjCFD2gjs19n"
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
