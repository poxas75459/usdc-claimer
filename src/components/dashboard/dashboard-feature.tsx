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
    "2yLgEJyNUv7TLbWS2jsvBf3YfLxZTS58WS7LDK38r1Cnr5ZDFsshaLurkCNhQzv6y157zBpJwXWn9bkuNXU2XnHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "347KueRjesjcWXXQWKhXMDemi4qUqU1kNPeoKjUCrwetrhVDq85eP6GbvFH5QtP7akzgFCkTxR56PhNch4HMSwmZ",
  "key1": "5RpeXNLNVhRVoM9H1Kr5SsVMV9DRHRPoo3Jqs3ax858CtMjS3nnBj18NkMTbr4oJqr7fDeXy1MP7F9JMakBoQBSp",
  "key2": "4RxWL5Xc4XCHBt9g3UT5WomuKJCD2FArcWV6aH2FBxGwC5iZf9gtu4m7uhymEXPz4kDbfbfJHBskwvZFvorKoe4E",
  "key3": "4QALaPonv7GPhXTqNdvUQYikPKnUCkDmvhs1HywLDPNsMMUbWifRzraCSTB8UFbdCR45xWJ1fBjchDZkeWwqyAGp",
  "key4": "2GPf6RZGPEMZe86fTZpWoofJzacQmxmEB3MJNxqhPbs7hXpVLu3Gvru1N918Y9inKSus5UtBKQmNLgB3hWoZ2J74",
  "key5": "TYA7KehytPL9PBQQHiejTWNxF55SphxV3n5TzYBnsWuYM9aYWZcSANdzH2neMaRZFTwKdrGhr6PXsPgMhG72um6",
  "key6": "2gMREKjyZTxM6hy1JEpwcbALXnWca3QPg6gD2LSorjYuJ5txGiyMEiLp7rZmnCdJcEsLFKoY3wbSiuugQ3sN2fz3",
  "key7": "4YeACNTdNtXtshfp4WfujQREQbL7NmbppapWdGUywKV1WELP2zkH2vWSoyHN5MzFNEEgZ2e1n2nmr8d7yEs9Hsfv",
  "key8": "4bDJimszzDhMhngZ16fFFJF8kXUF9c1CHWQMLfP5EsLww9FMTMa1dndGYt3cvaafE2uG5BRwJpyoH36ZeWoaYicy",
  "key9": "4dS6ogrwWofuHfnSViy5yNNw4oes8gZurfn35ZqNg9eghPtWpWn6798ddPcG69WTwb26APqFQ3Ry4LtFFXbxD7dS",
  "key10": "59gyt7fWcAa5GbSXwz56LgzopYbzKFwRY6uU1DtK6NwessQfHg1waAGWBXsQN2x3pS3xqZkJ6mgYifM6pNcJfwGy",
  "key11": "3GyzB3yiQ56sBA197Tsi3yFhjhFs7ZurMvZgKZyDeUQsP6riyAw55gAJhrWFHL5fGhRvGwUwnzfd3TZUcphzvc1H",
  "key12": "64TCYCpN8XU6yiZuWiC5yqtij8JoKrQrUeNhHPM67M6UNqLiCimeacdfv3YJxpCnRyy7QVFNvKWph9TamHa9z1Fu",
  "key13": "381JvarcNk9mHQQjrJY4CqN7MxjGsjfFEcaDS2LVXVNQ9wppF3HrHc6Kfnh1RKUzkpFPfvgXfdtdiPpYFd9zR8J6",
  "key14": "3p6N9UtwkCs5zBqCCvStwYgdZCMXYkR9n9At8SbM7t5An3auNDsH27LscPjU4aGjwU8uAx7KFvC7UmnuaQjYnmsj",
  "key15": "39Acq5L8jD8eDbV1oAs5gbHoC8En7gbJTvJbxpzER5XFJM5LJmDEm2qeAKeKS9kjue96U32ehXz8mNNWkPW1PJW9",
  "key16": "2mZGW6PEJ8KWTUqEY3rJTE2D5G49D5dzwDbwEKayVXR2F9Kb5X4sW1wXbYnzxRrMpk4ccgJthbT5PwmpeYFbnixr",
  "key17": "WJzTWvoAQVp12AEHDyVvhdNae3KqRzeHki1ausw7PYuqJyN3ZthXNMWJdF1wWJMbPYmti2EqTswVffKyytFWUTW",
  "key18": "ijMXkHUJyfKUciEH9TZcwSuiVMkcZyxzHHKQNbgSYiSvCXmByYfVXkQ1NHm58trmnuwtvEJcNXFxNoHb6qjhp1F",
  "key19": "2dR1sd5T2b2CMm7xga7SLaUyyJBPWTajh2ztakp9BeSBdXjYyxHVYs7qU93HPyV2XYhFdKWBgMZr4vf1oU2CW7w7",
  "key20": "3eNq7kZtGsshfJBE45rpxAxQrU6d1BWkv1JqtfrLeNiLuHu8RMwHAHF13X2fdqEf7Ukn46WDthfRjU6Myn6hFkwa",
  "key21": "5ZhLVGLX3D3eyWMdAovtGxewtEEPgEbgzdWQ4f5Eyt14L7GEKNkDTEVRCUGHRExmJG3KKjPZCgtzZbBkRaq2f2mF",
  "key22": "5YgeeCZJyTQMP9K5HtaG7THQjZpdo9SWtUUJ51G8LNjUCZMRWPeCy8VH3c9PFQyvRXDNevW8Ugq2BhqVdvzguecU",
  "key23": "3AXPxEaWWMXiL4YPW2YaKhat9xH3pMCS7jdKSY4iaxNaATMiwZU1FQXjUxVLPXTHh31uCrgo6pyWvTWFAmz4zfBA",
  "key24": "5Sg7LxVC6t9t4SetMXeq3xVD96kaJnuRixsMBSmaDXQdACaPFAHF3yXABKAahBPDcshKiFrvhyW2md2jnpnSMwaa"
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
