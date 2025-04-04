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
    "4Zuw2zYTiyJYnJiZXigdsCFLKkUAmYhCWFTFwNyhfVZe8MDPeLgdGiEiGnZAGvhX8K3aPqqm32RpxeFaG5ty2WMT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DT6cjXx3wuATBtEfyAtZPbCx7m1E1nYBMyq54px9kXx7XbyM8keQJH8MQshxdWJKFEba4LTiQxT5BD7NQAfRtoX",
  "key1": "2UqwsCNMUykZEdbZSFskdajYvzUyhJWmzd5hwCminRkXAi9FTfhoru2xe59q81oJFksGbqPM3R2KxdX5wSj7eZJf",
  "key2": "35j33Ugu1VqNco65eMEy6hNpJHz3XU9LFjaLWFi9NVdCcSvnFXrarn8tCp9pdpLMTwcwcHVfpaqNyHyo3SVoqy7m",
  "key3": "WgDrTa1STdkwTQZYi5GYDDhSXZwBTxtKHTxB4f5VDm8uuSxctymC7HrxrxtsbngrP3poWdEsCk3gxLSTHhpE1fY",
  "key4": "5uehFRC5L71seSprrnMz3t2tCPaDh12yWc5XQ5JG2eDEwrteL1ZVuZjeKSXBXGfFgVWXXnzH8iyvLPLrZC7pEC3h",
  "key5": "3SXQxadxNkVaGdHXBoPatZxG3kkLqfx8nCL1n57Hf7XJdD3vmmicNoz9BJGmuffDa9z1oG1jY2pxMLDWPT7uuV5K",
  "key6": "GWpqdPbe3n85uqbao5XHAjXqnPY9dh1DCv3T7sXvnstysbUGqAeazLVn64WMyPuADGmmiGj5SJKqj5J5JNc48Er",
  "key7": "4A5PnKiJE6Q79GwfRha3WhNPDgBxDz6fWuv9SP8sp72pLGGC2hVGNUJ5J6HSXU8i5h4zSRsWvY3xYQ3YfCECq1oz",
  "key8": "4aXzVYMZ1WrmAYiw6HDwkv4zf5CYBPf21ZLoPC7reVvGUgDxK39XJeQWuwdpv2RzrK8qXqah3NPyFDYdUQbMQs23",
  "key9": "4svcDFfTE8M1XTE9dzED5vRcrgpwEPoj1fkT8h4PQqywTGkrbdctR5tEvPU4CWtYHHHLVUPT3EfjJd6vGTHXSKCv",
  "key10": "5f1HtMDg4MdaZkCm7mdqe6Lp9UxgMroYSdRns75MepnviVxKjVdxf2fEcyXZGBwf57edMtuPDikhPBpXQx7BV2HT",
  "key11": "66u3KuYzm8oiGk3iogZCbPH35jNF39DcGN6smxpephFan9pcpFRVau9K3iVnKvma2NnHc8VRetaQBwgqijLpAZ2h",
  "key12": "2o43d4PGHa3WB2DLUjnFbUsvYqXKfNpvTmGhDU2suENv5ws4M5BW9TrB9qjTQMeTU1X7G7T1QF783MAW7qvGksoZ",
  "key13": "2fj3L5Xp7WLsCoBZD4EMhSo4pnqSurcnsfaZCEfGhJ5xB6iKCpULtqRLBynvRceCB1Q9XS9US8Ci5HHAashAgmam",
  "key14": "sgwTGTPyKSZ9m9onvDfxzqF5z8Qr1FwUPZ4wxtv5Jfe7Kri6tDyVpnBSrKkFpzRqwXwAxxeAamcdWdhV4UsUjdb",
  "key15": "2BdHWd8rvtXRMSRceFyfeH4yrffPzTui2v33AEou5nDo323udtGLo7LKV2YfkNEVhcEhML3uAPM55aDu8c5NEcBA",
  "key16": "3YGr591Drp8cU45eCrz6ALBBKNLUNszQRBcWAsUVTPyqah5QkEFQuKAe8LT3J8YVQheUFW2LdagXAyPW9ZrRXWgj",
  "key17": "2i89eLiWKUiwg7kSe5ZSv38uB5SbmEQbF8TWe1gMBkCWzmmh9g6M9ff7geDaeGRDsbtHtKrjobnmhqmNeyvBQshm",
  "key18": "2mxvX2FnrF5mEcfsj7RYvwg48grp64qYj5rorpS3DXKZ8scEV7bVeGKLiMRKPiDq2VTVtWW6v3ue6V6MrGLLXJ1J",
  "key19": "2k9EPM7GtchQ741VrZU3Eq3vqpouZjymLfgvLe2iEQMbfzLzCQjZ1mr4gdZo2K3GX1Zz3zxHN7KwmQMHcHscpbRv",
  "key20": "xbRdFtrmyCT6TZXTsgT5iMCtcYGrKazqPCbb2bauMw5z4aKv9wCCuoDsACbkt9SrvKGRVJKEiWnGVZoJgJosMNX",
  "key21": "2ZgaJEqGouPPr5CrqMbMG52JJAcCtLpbNCE5LVSLRfbkwArHK4hd8rDZop5bbduSACAdKBA5aw5HH33V6p3Z2Zy9",
  "key22": "2PuE5CwEkCSJTNuM5SyB2hvRP42pK7dWm5GakMFW2y8TzzD6G46i5RwvY4verU1pFV4PeDjhJWiDh8kDHR5RMUDK",
  "key23": "DWUnHbKbCndEGngvVhUzqV4HkJK8egGdqMxhUtBvGwuZTZBkazG4jyWzHEXtsmZb1erXbGq7tKRhaXsf1PqPXzE",
  "key24": "4VGimRrrmBuFn8eKJ1kod1fizyomue3aAshYj8QDGQ4QZj7AfW2AeTCowcsHwa65dnuWT1bK3pWFpMnmTJEPKUY4",
  "key25": "29afF9JYE2QtJYRNBErCGiMrGm1uy1xQayn3wqs8WPUVZtKVewrpvd3bgYe8RbHAUdZsj5H1L5v24siPZeWLHxxF",
  "key26": "76jBbAGXndg97EvBtPJLN8nLdBDVULDG8FsdV8rCSijKVcAMyrihepmLh6J84GDHrVa4oJEKt3PApMBpHAd4Xur",
  "key27": "2RNbzCnzrMSks2EhyhDYoYGqbGJ2q2gQaKMS9Sj66f4bomjaDhi82yTTFKGAQyLdejKXN24dgjesdbz6KT9NUnoX",
  "key28": "2EwSKrLc6gUdNMuPFYJwvkZBY7QdeQe1WMZQwvoSVhcoM2aF43TfvZCsCDcvRCp8AYcgsu3VaBy2nL5xvfZXhG4w"
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
