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
    "1SdWQPVbZ8be8bqhSSo7F77B1Atu4HXCBhc8j4Fxa8TeSBsv8upmq17BApQH6KyeFehGf2kzvMh5M4rSMAoPcMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kU1VTRxa4xA8hKE31HSQLyHHUXmjwJdUYhWAcNFbZwnMFQfCVoFt78sxTT4zcXTbR93gDnpB1QfKexG1cR9yY1e",
  "key1": "2JDqsK95FfKypbRHt6bujadRKVt1PpFEdmAvpMxcTqRmb7k3xTj87gHF8wjPY8wUaj2WkRCN5iYLncsorUxxMk9q",
  "key2": "dPQwkHt3aNyeB6JJqfcoXF5fus4CFpncwiYkh2nWW9DXQhQwLD5DByUz5H9a1dzfwwF1a2G9QxbyH11sTtCWHzx",
  "key3": "v6pSr1Uo4mKnzhE6FYHewkrZ8PHUaDaHY3zDnZu4voQsBFUn6v4EMJMEWx4UY9Bqvz3cErsuTS1EWRXwxuZA3v9",
  "key4": "QjBMxvpwBUWcrVYp2S9PCAwRWWn311bNnTKG2nikarhJFUTTDdq4F9pTdD86NGFnX5TTJqgoTBd9LD2saVBZfwr",
  "key5": "AQjLuSSaWhHPvVXQd3wLdCHhnykEYioPomQycsJ3EPmMddTKDzpNLbSvKdfQPfRwqyTnqJjCQhpWmUBdAX6wJ4K",
  "key6": "2Xniv4gZrqMUHuNxXYBbwodZLhW3GWbzZdtiqQbaBCXE7dzB6TTVVb3QZfM11DY1Q2qup6eJagqWzKZf7NUbosFX",
  "key7": "4rX4L5s3uNY9qP1YJMUJpZPX8S2dc8FpYHQvCBjNfFGiRCMpi5wAPkKj8XrpfbJcwCYgt1JafF4GP2oWvuhkLDKT",
  "key8": "2LdqMABSSuEdRMqVd7DEeaifCwXLn73LzMbKTxutNZPuXQEFSgbvsr7YxnHgQ48YcvkW6CkdBkGDN2aTNaybuJNp",
  "key9": "44nThAPPyDmPLLRaqnyTSny3zke4Au4LDSCPbu9pNPQ3hERAdoUvBQhYTkYAqY7a29ny3zerGcCaBMntLjxmh8ZG",
  "key10": "3BkRLqqppvrkccbRBbuCkgmu4T4Ks7MazL2S3bheztbgWBRX8Sxw5SaSgqg9BakYCpiEFfGwWKxoqFpXXcnnbV3W",
  "key11": "5uBL8Do5qDmCs7iByt8VLmzf8nLPJn9xd8wjGR7sz5bi2dNvHYBR5R4EQgUpdpRcMVaYWo6p6N5eftbDZLb7gwXK",
  "key12": "5RRZHgN1qPoZdFG2NPhoFKEQ34p51eHGtkZF2NaGA3DqN7bViSLKqanNTdBwsH768keVYmr8bzrFcT5SqEf5M7bw",
  "key13": "5aiKqereR2BA92VzQeb3ygWVpBaodWugr73HMZRs5AisyM1yedpH3oyQBxtnXaKS6WD6ME75Xwr8udE546KnZzxv",
  "key14": "2TTzNgWZ5r56LnydzKSayQkdEEVAk8QB1Td2HLvCbyFvYrK3cDxmZ52ZsMb23Dsywd9tuukfQxtGz1QQU7SJDB7Y",
  "key15": "47m63XvgrAasAq92kEdFgieE3vhkqkuFY3nXVTiZoVRti3Qyo3WVky1v13QtGZE7iuBDk6z5c3VrPwRJEzrh6hq8",
  "key16": "35K6yRVYMJNEkTBoue1aYF2ms4iCaJDu7gbCHB3ebDTEiN6DfAei9XeGHAduazvJPNnpjWZ7icbVLTqyTKUXQK5K",
  "key17": "4EBjkq2o4iQaeYHUDjSfbT8kvZ3bVZVPVgLZ858AgXdZ1vGHsB4Z6KNWfqtDmCUNmRwjMNt2UjwpUEnsdt3Eogrv",
  "key18": "2a6QcfDWi6Vy1b6qbPNjnuZyNifn4BhPBvwMQ1WB2K4pQF3Hjj9dSyXEQ5pVqUnogrA33ookrTfQCAAzAsNmwGo6",
  "key19": "2tNy3jbznDAmwT52b74fDJfkJRFiZwoeiWKMxUP7MqVqMY1RymyebahL5o7U1MHSxu58mxTeuGbGpgbAV7nFLKpw",
  "key20": "2c6mc3tzE49MbN87pHudTKJqniepeDrd8ZAJa1nN12Vjx4WMojjkZ2RPCp7mHvrV1266gu3HMd8shqcMPB7qu8ta",
  "key21": "3pUmHTkKCZ8pzZH8D9robnbvvBD3Zc9K511eYi3zong34tjPdpa9Zp6av79JFbbkMdy11rNvz1t28LWCy9kNFm1P",
  "key22": "h83QLiKrFCDVot4NTqgAa8AgKN9s8zyXZ8v2izdpg5ingYN3jkLYDrgbfFtiB3r4tMJnKrZtuhBtPSz74xj6VMB",
  "key23": "2YcQTwFBYzioBx5ojhXH3u8aGjzEeUZdEru3kbEVtetqgL7j6qSuJGjbVqC4p8ireq4kJgfi6AULcT65fsRvk7BB",
  "key24": "412EjHCzcqjkgPrRMH67sReF9Gp6CFBoM3hVo3DbJGY2gicvWUNkeQLZhG9ch1Nmn47N35SCt6XLtLPUW9P1hYv4",
  "key25": "5sDyBmrVhDMa4BkBsGjEh9k88CxfSNNcddQuTE2VXhGgrcnZ7RjeYHZ6PL3dnP1zh1aVvKfB6ab3hGqRB8K8ALVv",
  "key26": "1ESEUbsjWoZxoCtfZC9rn1zcv1tkavB6NYV5gRuswDDruBxED6G7WcgFwjt9DbP1Luh9dt2VBmcr1Bh6G86otfB",
  "key27": "217bocooJFTUeoJUejLj1gQJ3snYs9JyP8YiNoHcnPQBEuu3oht3oBq4ms9MTBhwX5nZsfks7e9Y3iVSbazzsTZo",
  "key28": "28eMNGLstWdwferdA1rQZ3acd887q2wHeV3sfJJeauVPp4R3QS8o39AkVmDYHcgyUw73hJrjLQ4RKWTyTE2h15oz"
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
