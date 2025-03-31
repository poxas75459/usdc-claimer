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
    "2S8tHR2GYfvsjMdWnT8kQzYGDR9RJSwTpCH5f1z8SxhZM2w22kDFobzj1fiCeZADe7Zg3oPUz7Ksju5Wcmuq86Pv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGzKhts2RLNDK6xcQoEGMzfX3K153ufF89PJEYwbpNwXgjJ8vrG1FxZcghFRX4JmwmmYY5N9Gt1e66QKAtPE2q5",
  "key1": "5uapdWfoGaBhPX7ri7saWXoupK1phDXh6sZEXyS5jYSoqjcHgQwhRVVhS4zoaEU2t5Q4kAeMP5CaPenjCF2rxsu3",
  "key2": "2AtMC7LyGrxKkKBXBg1zY8xUt1jsjPpoMmu5Ytf2vXwv19GveLhvKXFmUNJSX4v7JFPzNyb1dRZmbJDPxC6mB99T",
  "key3": "63etwPSbBrQoZpWbiwWW61JtAYYQ9MxkvBLD2AtEZ4RbqDcxL5vchDrokVD8C4RGfCeRqozK4cWTQAgkjtHz6Qf5",
  "key4": "VCJe2NLj1awa8Bc4zZH7y48V6XFL7gKWbfs2xVVTipSmoF5CAWmR25EzLTsyw2sg8EYeADPoGnZEe6baQ7bs5sf",
  "key5": "4sC6wxgU3Tr2HdVVh9rmiCNXn6TGVN1ZXZK2K5kPx2eL4YZvCxgw3n3PSFHer9tXUxJPGfKHDDe5uQPHUmGaBUqN",
  "key6": "pV4A3GpxFiNr5wd9frCauMRBvt4Zh48z8LfNksko3DruuxoYBs8knfmns7W3RmtEDmbh5azjL5KQeGeBH2f671J",
  "key7": "ud3Cpn2pZSoyvBVXmCN6tRKKBUTF3XE2a85RHgSjCZt5bvSU39GT2tBHaCKSGVnx7RmtuZhDAPjeCyXLkSTZK3p",
  "key8": "413cSxZ33AvXPkWraeRxa1uYPhDURuTmFVbkpGyWsbnStTSuhMesCGyiyFbzq11ziCewqAtvVmJhMjr133bXb5AJ",
  "key9": "4M6NHpi7oKU72LQNTDoRozJMMGYKoCddMgzDdKnHrmHzbSevtHj1iTPJ5qsDrTnZ9kp9Scx5gQs8mGLAfGVfRyvN",
  "key10": "8JTyqhHd997mabgRocJqNyv3bXL5W5gaGF4Be4LMGNkCFAAhMD4DNJ7BYqzPFwsybUjoj5v3FJLmQFSzGVNJszg",
  "key11": "27z7QmGZPFW7TRv9hyu7EpavWRWZU3osBCpoM5he8LqsUYqzuYQmPQWtZjHhNEHx2fhWYz9cVfwMiuK6KciNmLSw",
  "key12": "2RqRbP4ZLnsBXEJjSJtt2HVykUZ9Rwnp4Do42YQAeEVz3wB56xg4PuQRiJpyUtULKJPHQrFEViHo2Kr1sgLRymS8",
  "key13": "4S4EJW8SkJ4t2qtuwrjKL4SzcKkRfDcD5PWKLSbpBQN1ad2b8P7Xjm9UB84urryJ4HNWkCUGc6VFixrhpMBHqifY",
  "key14": "BUZgaSJ3CT5BCqMz75QE6EjVAtHJpWpr2EgJDVmBEbE9i2rgdRW2XunUujDEvDZVWUYi7qJQyYXkWMn9w992kWe",
  "key15": "31yxqmx6bc9YkB7rbY7v6TWLsVCSkmz7mRwHfDhNa9ATjRgZPGX8VRW9EnrXJns6Jt9T7nQpo9U2TiihBrDzRx7L",
  "key16": "4Boi2U8tGYWxdrkiMbdhjaKTgHG5ef1bTBBDHEttBwvQKXKnVWqVdnDs7PfVpasVxMgqesk2xcWio4qFBZN8ZWnm",
  "key17": "2vqptrLbAorwpum6z2vt9VpAaWpcpSohHBznPPqtyH2X7pSJ59dbFfan4itM4T4kmsNq56gXDBhESbgQrdCQfd4G",
  "key18": "5s8MTUnuJ1bsQzBrx7P6wuXFx6r76QMBFaftXfhLGWif7EvmhUEMnUoCc61MbRpXmcZh4hF1C8s9iLhsrFba8GDU",
  "key19": "21DZVqfAvbp1qNhod5VeMF6knFiEgXvkDRwd1ttqiRQq3ceZE5KRuSawj19QPcdygYoR99eSDJtmeeo6H4os13n6",
  "key20": "5Hhfz1bPnzh2DDkxiSXnRepX9j8QACidZUi9sKAGj1bZKjQPfaZKCkgiaGRUF9KbQDJ43uGHTsg2kieTGh98py6Z",
  "key21": "3J41futmWD4ub1C8szQPGPgtxw8cNwbMAoNMYdLHAShPeA7JqsgzM4UNFN1mfL2AvYjDgHjLdCrQZL9HxtPQ5cCH",
  "key22": "3Dypm9mCmXPYYQhErpyjGxL9A5s2NSzAsK5vu7MgS6pnnURQv8Cd5NDYwWert7gddanAPHBHVyrnnLaerVZt3uGt",
  "key23": "3TktUmiFPeAx682e9BtXEGunNSzkpq9K2vkKuLNPg8E9komEFKUpTf5up11v9LGUBTYmJeChnhnjbnRuoSyPrQka",
  "key24": "2WiqiaaXdMASXpBj667czgkUHXnExpF9Lkc4WauVSeE81MtW9Ye8tDCMSagexfW5mXfwaKrJzTe7RwGfWnaR2Lmu",
  "key25": "4CiCR9Y7rYXK1tVvMGdD7WK7SGfyUSk2KK8kcv9daPg93mjxszS6XSMEbJ5BmnbEfLpTqnYEem91xegMw8NFyCSF",
  "key26": "2h21RsbtkQnUZwzogQu8mrBpFu8jCotMzr5RVQiTFZ91hiHKTk3Zv8tB6LqUJ22WeUoFbQjctm3ZXx8DGmsxVHWK",
  "key27": "3sy5BF4sjHDHdkvnehYvbegxhfshNwbnVMkBAQrGbrhVDwG3u9gKdBkqFs2fLxk4zzoNV67mPTKrySTwB7nwNMQA",
  "key28": "5D6GkmAGJhSiS1s2cCk2U4rNnFukH7GJ4qyJrPASMKyYdRAE45TBdJLaB5oDKFd1kZEhsEohYpq1BwEbSFfeTduD"
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
