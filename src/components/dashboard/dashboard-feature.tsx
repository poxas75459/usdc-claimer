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
    "4CptJGKUwKKoUdSsDsdcSTGCnu8SfimuRjdygDGRntsgCpy6cbmRxsjHwQJiWvCSa5xgBK82vMrWwD8X1aAfSRei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KYTh9pL1ZqazZGdB8AvE6JGBqXZra6qf9H1brhnfQVVStbLmpc7A6T6krfWCLzQ1bhvcHgT5vpbgLzRVGiQeJUK",
  "key1": "5kMx3uYRqA75iFTjMEwwWfPoBNHgi6wnWSxSk5XkutuygajWUfMa5JKs6L9ztNxAJQXDaXhChigtL9ay16wcTePZ",
  "key2": "27RwGzsCmqjThshZQnbZmeh8HbSQLoyRuQ8pQ6nDt5sVoXQiCzZ2ms7mHetFfEHrqtNxa6m4EVnyz7wsSvqfrHMT",
  "key3": "4iZ8s4p65s13tqMcQCRZz5exATwqKsjADRWSN4fh3DJENLXkgpBqjVQBvB1ffcx9FpWfCU1n92cFD3DdZLJANZyn",
  "key4": "39muSTKdPwr7X8xcETtk2qFmXFTgGE7thCyG74BaeuuNphwtXQecU5ajSrUbcciPmLuBWQsjYd6cfy9fTnq9N2SN",
  "key5": "4wJ8FUAihCNuyTVEGbpAf3HGeKVHRnqAqhqcd2E4G8YiSP41hbXnrnMcQFCogEZ4H7H4HGfQNWw7yjoFzoLREL1Z",
  "key6": "4WjAHr5wTxFvM3zbU1wq9sHwo4jH8RFjg9Pp1binoLeHJbaAeJn1nm1fZjMGi8ZzKEmdzyv5gYvbtqRypATph7h2",
  "key7": "3c7A4MeXQyf5YvZFABeadCwuACTT3pBkWvmrQqneQodQNcWf7YiV5X4UnqUA7rU99cbjRp2BJUnLErZDwXoiF2do",
  "key8": "34zS72mVT6fzcirvmsDUMyib73p627XfUUz27VfnviVY1TgNrqFyfnr2u9yjnmzHtKo8QgtfwxNR7TamiW5iF8wv",
  "key9": "4UUieEGcX7Xyg1mg51pkwWSe7hSCJhVdQ8bcRZ8hGwPMjxiphVzYnDx2iPTNVns2M4ZxZUKsPiCsK1w3w7vWuPjF",
  "key10": "3jkotHBistb7oKHF7fT61vkC9mXK16GN2hGvEytCXVdqZ7Z3yM3byEvDh9pZ4khBntF1Nf64bEuLfBL6QxmaxqSo",
  "key11": "5wN825BH5SYbpfvDqNc33s1952FMWZUoR7usSaDXoqvqhFKCRBRpVk5dDwg4s2g8JY5KTK4rFW67nZcxYSzn7ycv",
  "key12": "4JmWSHSWY2DP9GCZgufgvkH58aKnbLUG4fuxLfoY6XFWEgQKeNcu2sZVFgQnRxjsnZximRreQDYCM9EwN9WkFL7g",
  "key13": "3bswarLMmf2gBNA3yj5XwdYUQELNG1cT3X6cJNH8QxVGLB6u5EcHTGrQ26vmRhCcwBF9vEq1h891odU3GJ2RUs5k",
  "key14": "2xWg5FrQ6eGNRR2hSM1nC2fYo13rH8wayaKUjd4tjeNPb2bXnZh1nEVLEmNywHq5sdj24mM6D3VyAnZQVhnoygMd",
  "key15": "4sDEnSd1VPxcDDAkXp1XAUk6uNLmrpJDTb6TBfdTQKTdwukHupgAywVW4Wgr3vZRchHYGEfwEfKvEJkurG1ZzAYU",
  "key16": "2sDkYxCtqBf6D7kLTqXc2D3KF1cX9ekekgmtCKMSmzi31iEYdiv2fXMhy7qhD4L1Kjr7UrmfRUfxv6JCtkecXZhB",
  "key17": "2XwG6Xymyz95taMUjE8uo6EmmyJ3eyG4TWCVAG3FanyhYz94zhRG56ac2ofieevHxdBogTzjZquStSWkwv6oJQJY",
  "key18": "2UWyiPViTJHHJjYDj2kTzN8vs2AcwEgnE7XacLywrhCM2dN3P2uXJgpfETixWL8Z7JVB4GgLY2aLScCYwumoQwtM",
  "key19": "YYSoJTHyntYg4CdWXmSzmLsxfWSPEC3qz3jAXA6xxvkiVgGvrb4kmjttwB9CvSdjLAthxzvenuAMpwQEbgj7zn6",
  "key20": "3gcxAjUhR2VLgzdwDx4sEgYgUof9URxxDg6AQAmE83bEHK2FPd8dPS33g69FQFdXacia1ktgFEVfC5D9MYAWVhNe",
  "key21": "4DmxxW7Legs2UELPS6zfvEcJXoe67aj9xTu85t39STuQcqzt2sU6xnmWe9wRrT6Vs1nfMQE7yRmSkY9CjTCAaaoA",
  "key22": "2146M5pX8dHzA3Zk6jE9rMBq4KnNcZUBis1iz1RMdrGBG4WNkMVYkpUfEUjJN6cJ89tNc4z23KYNuabHAQ1j7MQb",
  "key23": "4Af8qYCkG2QdWn9AL8D7EjxNZpUsJGQ8uJkJV1Gdrf5xK5rRVka69aBw93aLrwGL6nCaSLcCax2SaBL9uShGqzKU",
  "key24": "64NQBd1hYRrLuYA53WWsoSpM978WUpCzZsZZmw6eCQxV7t3YBG8cYDKQbkZU3q5dCguvccMvXwMuSTXwYXf8Yczr",
  "key25": "FSS2L3gY9zpsHGHVDHzdDqVZUFZ855mhpHEGiWLQyNTNJGBiNTveucEvwwb6Rc3z5gYkaUHuk7irzkbNySwt54P",
  "key26": "31ojVaNwfq6rv1mrZgDjuTB3o6WjSqFVa3TmMbGK1tdYym2oT2Mvry54ZMcX56v7SLK8o6JFevdkCj4Fbos3VyWT"
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
