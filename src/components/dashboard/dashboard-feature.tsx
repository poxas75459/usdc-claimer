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
    "3LtH5GQLy2x4mpXr2VQezjcoFEjv5eYF3DTiJke9rxfHeYukF4746S9w3yCLDvjGL55d56Bu2eobxbFpXERK3Vcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ts8L8njPxPy66zAy2szKUsuoqKNSNZPJgVAPcUtKMYDMrS2SVbkWvV7Fnq1SiZiU2FKqUtvDjgzbyfvLviFM1tS",
  "key1": "3K6boCfADB9iFmg7mLWsvbELvrNRgFHRySwXc25f5QCfdrycKurTd9wcraQ5QTvFjE5CWTdGRzkVgM2Kk7UYm2oj",
  "key2": "4XoJyFvV8LvSAsKPJxFC7XuxfGbiASP6SCgXzLcZovgXgyfbDDEM4k7mQFk3v6EPWGkPdK55aZ8ArnUgWhP6ghSz",
  "key3": "3HhVcGFBZp6mnASJ7gCyB8ppXvP2M99nJfNWadXcgNawuPGMPAA3MGjAbaHfNktNK9yPYEYNMS1829ZmK4sPe8oc",
  "key4": "2AfPmkPi8BggFF4u9rNHBMAKGUqfQaT1nyKiyZTGZ6bKT2DzpkumTKbws7gYwNeSsoJUEhY3mybML3GCrnFnc6vJ",
  "key5": "536R3mVMEzJBzg81j5TzA3kPzqahskmJ2m3M3Lb51Bp5owq8wYCaFzzbsaTSX17HyhBX7zVRAyStDiMkMS4yPZS1",
  "key6": "4p1zS7E1vRFNSHEEw13bMnNrLo8AowNVjeRb9YpBZwZSekY3bsKEYhYYsU1jBxkqUxVD8RsQX6JeXpADZXxZghn9",
  "key7": "5fvKkALvxgF8XhtBUYU4esagh8GYKWyMnVxuQkrL9phmGq8DrncegNvz8GM4RYKZi8ApHv1m2g6ZyGT3kzBknrcf",
  "key8": "2sqyqJvSLumYXcyKVNgi3ttz4fk485op1SL5dU8zQbaceHy6XRopfvbUMbLbQUbVXeDrZ8DmAVTqZipRMECX2GGy",
  "key9": "4x3u51xFuc2nnbR4UjtcQyjinz5ocU2TFWVqYU6hrhSpV7MxwSjj4USLyRdJnqXQBtbroEKx968HmTneuZ5be3wx",
  "key10": "4BYCSYoTQpBJH1aZZgXreUmYhTibkJgTcUKHt7x1iWLsAWu4SAW7E9v1CHmsf3GYthELbwpxJo8vqBYfDZkQ4Vy8",
  "key11": "3PpG4mgwwAAD8UEQ7aV2k4T39zfNjJSQZw4eL6bqjqhvavUcMEZMSnBsmJjNB4Ni1yZBAUHV49ciRiZGnyTJ96Vx",
  "key12": "5sVcmN78ih1pXjXdRofuXCawV3M9pScjyfvjtczcUsKe4KNe9qS39jXMuTAmJ4wHoRVF8Ffhc89eBVpreX7gVj94",
  "key13": "5VmVB9rtFr2DHw47EUPTTuDtHUuQtneeexNsCwViCwPyTYQyZYVGw4QfDpLYgWRHg7KoUce9THrXCtmcQDcKToUf",
  "key14": "2Qjjq8ac2BM5Fcf2nmmkpCy8KNLqGqh8VLSKSj4MhQHKihcqL8kA87zM33w73vbLVC94UtML9ryaWzVmoMMFQWt4",
  "key15": "3gsN9bEJin4LMbmUX6wJw88z9bA89uQjKvu5VfFJdavY82XuvdDEAcKCPPo1UCHuFWGGrPHn9FGrPUNztksyestQ",
  "key16": "3QPhzjy2xvnbhVbLBEZEGKUxFJvz67eL4wv91eZsBQz7Z5q8jY6zELSbad4UrJB5W6RRwoqtAcwEun7nB1vqPJQZ",
  "key17": "3nWrKBx2UuKiw1yy5pookqYtcQmXVt8FGYjFGGwLVJRHi8emp6t97UBhR1LFRqTwspLdmDUHL6rDmhBMXzSeepRG",
  "key18": "5PSSgFgGV2LS7BdAvpYPfM9kGBK8qLpWCed7SVTDw9rH8d3D8fxUHLxYx5tkcZwubALpQaytTa3K3oMNBBgv2Jn9",
  "key19": "5K1uTiFaNRJqdkEwesaCHBNoQN3CgJ57n2YA567dSXJozfqFCYAtBbkekmdU9bz2ncXFUZwzcuKTtHFzJRZRiHdb",
  "key20": "XURK9BK4JqSpD67bN1rNBvqDKxXJBPQseDWht5gMJxZoo5eTgLxfyd3SCHjPeN1VQz8y9dkCXpzU5Hvru1W4kHF",
  "key21": "4p7Y3Fc6GU1qP1LnNi2vAJTyXFvx3y1Xhm6xkgtJ29QsvyuykG5m12nCQUWovNZyHTFyRBQzWPTwneZZkWs9R9zC",
  "key22": "57xREvoWv1PPyks3fjJEjXEfyBkeS6A8izqUXtLfpyoRYqGw3YK5dsDkATAS1askgKVtEjbRZe99iMFkzirzVt16",
  "key23": "46e2mT1oA9iKQ8gxQjPFeeVKLjDAsNordg5i39AxzC5yKUiRE9L73aT7C1RA6etWg1ATnhvxJspiKfmUPoACgp2j",
  "key24": "5SvcM4gGXEE7dgpV7SbcNZyTfHi6NRwpp5dGzhNH5nkf5s9AVndk38eDdwc55a35mGMkEhUpLdaBnE3Zixh6MMoj",
  "key25": "5d9w39WG78yo9571NVdSwLgaBwffpWZxwoP3X7E2ziv5WPVjXpdNAnVmxLXo5KnThLjEJQwnEjT3Ay975Q2mXtk1",
  "key26": "3PsHdc6X2EBavWcfYa42j8vnm9oWtokhvmEzUZKCU7Qdie3d367aepKdhpazKcus2EmDCwLJJ8q17FsygeTJLwM9",
  "key27": "4f7mbVe9t8FoyvTFUTBBh1b2HPRhsKnqsVAhjFF7XGgv5rwBWtt5MqhFkBCpxG2djeGeZV9iGgb16k1FQgGC9nH6",
  "key28": "592ayBgqYJX7vtBnSgm8JWPodnGNqgyhym3fyrSzYXLNyygc9Ydst194HJvMk7nYuUeGdENGY8uWD28pN4b53B11",
  "key29": "3y2dTmmic6xieyDagL8F6aEpjFjPnGt39dP431f85N2t8ezT3MBKLKxpQAcSLBmh4sbrm8jJpummemEnmbP2HUww",
  "key30": "cGhj2WdUov9Dir7xLswkEoz4dK44cUAUyovbdW9fgzQWXePUh3eGKWHMvmnszzctHi6nLBp6PGi7hixt673m4ZM"
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
