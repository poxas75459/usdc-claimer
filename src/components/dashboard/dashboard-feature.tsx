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
    "s7CfP7x56811Vru7Y8LdkCXzRvnsvUiXVWjx6SHM9Uht3NiG5CfDaEVAVhTSgF9FDxKm2jTLinwC1nX6WUuqVyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66azZ4bCgKA9WVwfVsUtyfe18Ye3yncPNR8wDE5LPfRMKbWuAnijq1hFBvWzF2BLoKmBRgTyxYzfidiZYGugmsmW",
  "key1": "3VQkTmV5JVes9NTcASwCzVAcrYJ8GNCdgYFJsN8FVYr54PvEPFeKVq3v8WLMcZu3MuscJbuY61ZByiyQLQ49b5zV",
  "key2": "2Ni4ivdSKCYSQNofKL2T4rETx3QwxcyzNUDkTfKQuEVbLVQ9EMvijSUSqjDa3cD7MsiDnobHme5mK6uhwZjrnZLE",
  "key3": "5Xd9EBHJj2DDpnJHATwoUn39oHFgBUCPR3Y1CBUzDGB7qNC98CcYuzZuFsy5iW1KS4TjaPfKNduytbKbQs9Z6ALT",
  "key4": "2eny5ZLpYPDY77EB3KqurXhcwXo6WeaVnyKTTqN53YDYTM1MSXyfjgFgv39oXZU3fe93mz7dmCYqNjJmS5h3uGNa",
  "key5": "3m8eQYSmsr3BZUCvdHALfgDQaPVHMFrTm2Kp1cRrCRB4eb1BVNrcQ1juhGAgEJyKkhWagHQQ38aVBQ5wzDAMSqyY",
  "key6": "2k5zgwnohhkV33wHXPceMkQ7ov5xCE9kysudvjqa37ksYf5d83kC9ZTHLEDQN2qA8BqdKwdFVVj4CsShfvL4CGbZ",
  "key7": "5saXsLeruoWmfGLV8B2oUdb8b1hXe9PK2sQCQ5b7ckwx6z4X5QwoAHzWqCgrb9m7xjb4HfvkwQ9aABHY13sf5ek",
  "key8": "31AfF7nJVXHbzhUVeNpbHkH8U7e7XMXWaiPCNh4t4JVfbGzkeomU5w24cDbKcCKPkRiMwCxnQUA5sGTo2c7swx1q",
  "key9": "d2gbPEeu6ug4wmDeVcH4nsWJip77ZxorTsiLp1CcomjUH9JB7ChqHLtM76g3NLzxoFFuh6sLL1QS4U25RzsnCrm",
  "key10": "61ZaEXxmevhjb9rD8hdxjFoj8JMxtmivGNb8huCRvCXLstmv2vuqPpBc6FY7iyj4CjnmJzp6MzK79tuyXD1LFUoB",
  "key11": "2iJdqrCHEg9xV2ZDQcevjf95iXvWdeYjVmYu6okxLZ3MizxJVcnpQv5HMRcX1Z9Bd2QzqUsTjkKoezgrZfktL4NZ",
  "key12": "38n9vWKPLGxRfXSKXhRgyfMocpVyHtkoHJdLqk45yKxxQNtPcCGkwdykiAmPR4xAqPn6SdfBdufv6WDf4yQpWWRb",
  "key13": "5ckJ5hfNoDLd6QggTPM5vFtM4ZsAR7NBAe7z6fXftac1cbxWQPpvx3LQjntJw3vJeoAjymwax1auQMHPVjKqr6Y8",
  "key14": "43urvdiXUhVBLtaEHLPNqqjrteHXaUasd2JvmmSkVqVXXBL4cMZyj6unJYq8qGFKyjtKWn9ptTjtJvSt2CgWRqJx",
  "key15": "39RWhirjcn24RZCCibUk5HPNeTMUdy3WGFgNdddTsTdweAwSDjp9ZYFvUz1GgbL2tVW27dUvV5RF1DH6qhFZAE66",
  "key16": "4t15C7owpzrzwMqxNEsUHwtJM5NZo7Se5EsJeUaiahHMDVGQwWYaWSqa7w1jjoULiTtujnWoXtNb72dGwLwJuXLw",
  "key17": "36f7CxmiDjc8RfozwjoAck5E6dFKEfjFMPDX99mvqxKrNGGMbJWyXNixSULD26Pd932TsE7Fj1uGoqbGZEvoYqjN",
  "key18": "3KxWkebtyLLAjY9fczLW9xrQt32rSr4zjmFzPSLtaphHffrEJYwXtCcgeNKkXq4dgubn91XsnLmehxqyM1AWhLx1",
  "key19": "r6RVdK91DeNsBY9aDWfHQmAN4TaHLQd9bMkSHbJxjvowSP8eqS5ZhgEFhxnr7AMkeM3iTVhVKjLfid6Wt5vHG7j",
  "key20": "55RkTKqHYAyyGTvxueuVXzamgPNDijUL4BkXLBkgjmR6xe7kBtBMh2yT7HCZN36wdUxYATA53J7Qq1PHJqX2LnEC",
  "key21": "37PNojsGT1dLqYDPv6PmFGMs7PVcND7ZV6FLUqq89nbkKUTNNn6YmsbudDCFcMZAkXTMrRd6QKCe1RxetzH9J9xs",
  "key22": "2UPQ6mEcDY6yajsGzjaPbztbAczSFD5fAfkFXpVK8Y13hMA4sDzcDveG2D2G6wx6GAAZarLScqQ1MRFmJdK6SWzg",
  "key23": "4eGqJUk1jXh7wjdpdGhwwUtPxrieqaBdh62DXnH3ExTgeLxy8MAWQaLSgyHRKXbadaqZnEyUS4BfqnUBCHxMYnQo",
  "key24": "YTXkk8rM5xtMQxJALxSPg73KPe8PToMYg9sK8YkT3QVZBVvVid2sxc6Hdrdph6cK5aHVCzstwNGmY9kr3kGMyNF",
  "key25": "eD35qNvjqYpHhbPimgTrFkon7hsprpsmy7pDnTgfNc2xXKwBFuQ7N7NXU9YMpEikresN8Qo28Gzp6xy7adeEXaN",
  "key26": "3MpGRQWWMdESbhy8LQYkRDsBcG74CFXCMagQ8XNqe8eS9cccuQvxYj5FqbsvVWj836sSrn2bntoKHq884x5McYdi"
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
