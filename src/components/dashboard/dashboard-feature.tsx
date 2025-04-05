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
    "5cpVUCeUWApoxD2L43s4R8MtmMmytJD8bkXcAamPry4TzS5TzvBDwpyFqQnCuQM6U6jenfM2hWejuDkLcXhR1Cpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FFZPLjGKxrgY9dLyugKt8bz77W8usAw2VwNc88xbQ6SeKVucwiENXZquRWDT7trAmRFgKp7sZXQV7h4iADm98QP",
  "key1": "3cwjCBWHeikZJbwPBHYta7jEChEHtVYYfFQW4NtHKpVkM7cTK1dtD9Kas3yh22L5oGCHGaf91HbFWNLcrV9VBrAN",
  "key2": "4kmTMT8Zy9jeh6sFL8bay6x94MGyd8pYkQWRxSk19ZYN9V7T9P8fsdSVZTdaZseoGLPYRA3DvErLxoW1GGcnRu3",
  "key3": "5ugZGeDnZ9R3qqUjSZYXcoCuD7jHe3RZDXRyLVq5UjkSdj7qpWQoea12KZ3ZVpLVaoCr8DwECxbPjyJBKzXhEmtY",
  "key4": "4dvJJrL9WAi9rqYGA8AiLmGCxMhcFcfpGtQVi6yNn6dukkWjmqvv9VthU1WntcE6zgB7mxYY8b2YexB1KJvKjkgj",
  "key5": "32aPAr2mE5qnGhqNS53T8XXNzpdRt71B6CJmTT8uHjtXt8oM15vaB5db4spQ7T8WNQHtdqCbjisQkHrEGhHE5j23",
  "key6": "4eYzUKrhs2jdndiZiK1cKqAYxHr97WvN5dBrZTye4oS1BFsWXkTpTpuWMDCGZp44f1ovtKCr5jA8zSXPeGTyF2AQ",
  "key7": "2aW6uarsNAm8Pdx6tPbxmsst1BSiuPSkX6nsowaNktP79sEv3uzjbV9NvLB5G2Kvq4oZ73CBHJC5PA3pjUxumX6G",
  "key8": "2s3zxmmecRXycf13zj6aPfMb8jkRtkp3GKaaycPAXSJReEV2drj6F6b81Auu4kiV7eWmiDdpJdhjKVEaTgDSJLQQ",
  "key9": "4BiBHdokZ1MM9EF4uZkz3hVL7QSuRwfAbopCdauMsYikhbxNg8Kf8YsTYGnmYZqT8X9eH8594TmxEd2NKKbM842x",
  "key10": "3JK4zCRaFRTc7aueFhkKyjctLPskun9UYPce4W5K4AcKr4nXz4ggY7Lrx69StTYCmDGEV3RLDEZ5nMB7or7teAvx",
  "key11": "5qPffawAFSiSv4Gpamdk1v2dnDBvgEhCHfQ46cVLVJF1RPbkWB7iuXTpcK4KefRgp75C8PHYXXKzp4ih3QvYHsg8",
  "key12": "5z8Jw5hnxbmgn1bKQFt5SPFCkBrNHCA6d2m6cUYTEUKVZUiA3yi11XfhTVkkbbgP959ReZsq6EuLEsBtLx9zzFyF",
  "key13": "45CV7AZcTuTKQMGUPS44kiSMDxrutWfiPsvgzHKXxTZaXp5KzaJv8UZcQjJdWzBbDZ5YE3j9yy3QpBS6vinh5uF4",
  "key14": "4WN4pTWTxf2pyXi57nw2wpMNAgsxbvT9ckVp7311f194eWYyeSKmf5tD8ZUfphAEVwMHNje47THfDPHCw7ZMDXwD",
  "key15": "UNzgWR9wx1ZeZHJ6UA5NyHSXZ89poKzWueFqCDUWDYFtLDfpWFVC9t8DX6XtL9htjo8euTa8j4VYwXQYvb1MkD8",
  "key16": "5aJAN3cCamvPSJraVnkJTab8KNXV1m92j4WtKtM3GnyBv88RJZ9QYKtjuEge9Kfe1FEarPBmUbwcodCLictWkks4",
  "key17": "WLTuGNR1Z4aZgo9oFFWQvf16RH3RmEoyjMQd9us7mmNfsZygE26oz7WoVAufeML1YLu1kzcWkuvEiBRQZ8VBMu7",
  "key18": "8UPNmjumFPE9CVTE3yqrhnb7zVNQJWu82uMbFKd748NNN8VirAU4t51K3fRdCahRPKZhuEQEwkbWzwA7PCXZe6X",
  "key19": "4ZDxdvFvUJ3D9URpJQszEjWTc5qNJijfN355mXSnP31MAwz3Lf3CbkwN2RvdsUkPwm51Vfmo1161HxaiW75YTmnx",
  "key20": "2i2AxSV5Uqnjcdm53X373pLccw9QSBeQxnYEBYosFTHRkaDZsquQY8mRPNu4iUGRPFDCQgxUNQWpFsZ1XuySroLh",
  "key21": "5yKu63arwdsbhP5ccJSVN9pPgGneSaQHNaufD9iRwF6V7evCZWZvjbEDRxjcoXihw5wYH9FEX45qfpFeo6vF8YAz",
  "key22": "3VE12sQboRm24uFKkJuvtcAgih57B6sTu8CZxJdHZthe7GbNm9exeFjcctkwStfZX7uSuYJ7sf5xYHnJzyLw4WHk",
  "key23": "2Jdz89AFaCqzcKL512DzJJa7uRPKfmN9zhG6UDf7D8WSM8VDrdwaFmjMF2bqRqgrHmrUH56gACymFb6ivpdb96Un",
  "key24": "aTbtmi8nQ46nyDjToirNtNw9p4jSv5r5NeUzMRS3EWJtPmeUAzMgmu7PU22ve7XooDqutdqUTtMTnGS3ZvaMeXF",
  "key25": "zPoMkPDwCd97PnYSaAdj1hM31uUXDzHYokCVqi5y218QPxEv93NknAQW7YS58L6zjnjvLaD8NzHjPx6PJ9pv4vv",
  "key26": "gJoaSM6NDRPNZGNkQZdJPYrUzM7Pr66WXLTiC1CEZWsGDLxw2ihjHzgT5bDA7df4fHT3hvhoBrEMsePF2KHuBRm",
  "key27": "m2wYwqW58EvGLhJVbjrMK1dRKyxUFzY7HJx9JVYbPpPfTayrHmvqfGsDWufveyVUEPRydujdRWBotvexVyznu4z",
  "key28": "28ErLeAGfVcacZvss64JQfrJQAALJsXZBehU7mASKxuMtuzQ1cTMvbYsCewTMCvQ2EfgpCH4AoaUrHraZFosgmGi",
  "key29": "26z2EGG8wreszjpgVqZtigUvBcEStTJNYusXr84Gcm8MancCLprhSpcvpBXnQwJX5SsM9oJuQ9uVWcfLhEmcWF1d",
  "key30": "37Zu9VJTk7vPyEnZKXa9wMZgV8pUQSJZNhUaf23JMVpMgarMQkPNAPPtvnYxvqQN3pTvDWp31zvKWTNXMRbPQ4xa",
  "key31": "25f1gGYcpAU6yTHJE3fteVQxeZxkwMpVzA2kP72a1R9vHkTiRuxQyT8Aomd92DLdmcaci2bjnJ7S1xqEsuTAnEx6",
  "key32": "5a96e2SY7zrAWN36ufoP22g9LtkE4nx15TcaVb4yXsCt2LXrz6PdL2SiScFkVHB5rDiFNh5bepqtdSYqUCdFXuS3",
  "key33": "iUoZbe1fQpAgwRSdGu38AEe7qgAFSE3tPTeunGCzLYEXPQQXVUZU8bKQ24jM2A4QnK2o9vu5sJjXoAYukkynemN",
  "key34": "4v85k4LLWSZTBXA67TrFfqjnVkdcGRwLqBCRrRKdQwSMjnfMMJrqZb9PKdUg4sCyPWRNeG9Mtnmj5htMUwSqUrxe"
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
