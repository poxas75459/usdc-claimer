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
    "2Z8QKTaU9LzGw7xN8UC6wMqvq47B2q5TviMUPQum2YrJMkfWmFTENXUW71ydn7yBQy9qBDBpFJ5AmPLPxknncLcS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eXF2Gwj4kZ4qFXjC1ou4srAsKWQNhwhm7qD2tsPxBUcWfefBsTyS57MWVDAYiLcom3iLUMjV38kW92FGnXjYeDe",
  "key1": "5ReFcyQCio1rcoPBXUbqsWTjsaQjncgXbLk7rRQGfhX8PSrTJB1fLQweVQ6R8rf3HoZ4qHPozGs8rBxokURkKozQ",
  "key2": "4mRxi3Yqq4nrDCyrJxZBZQSifqgLkYvaP1gUQqwptDMtrAmMnfdWqDtyDTq6z889uCygrSYCawZBLA4ZaAp29vzX",
  "key3": "4czvwF4QKyNjeYhBmgLqMXeSFgXfrd9osVRLBA8qoVxHtP39h78asMHJAxVQUMgLUHvpCmENYCZokk8wZxUZ2dPg",
  "key4": "3YLPswAGNXznAmvHKgTm34gbM4dhC7V9UcMqTGg5UMutzt7H9wHJtcs9e8i6TgfmkbAUagxo3hKXhPw9AgT5yaH7",
  "key5": "4KmULYhnE6QoZAVN4BJoG8MqzF2KxvfQ4Y7X5nAg2JwY81KxUkNU39YV6tWKuBw3Dz99fb3iXW3E95F9DBFwR9a2",
  "key6": "2fLgq7XA29NikC13mr8nBuz1JZ5KcHgrZuM4dt8QuohMTqibUDVF9PWh4tHuc5uBs6JMSYGYAjHZqAdYseq9GjMF",
  "key7": "2ad7YGCot1tkEcrtcoGyyDoyky3iZRceZMhFadSKDt4uf4Ac4UgtsoSrgtffVKY81iR8Ho9wvFupwTrnS57q6DhS",
  "key8": "33PVdnBM9qVvXanFzRPk1wsTQJCr2fUGA6GfDshQcJghxwqacsnQRN7ShwxbVJ4bERDZ1PQmKqj2upqkfPWoh51o",
  "key9": "4SfXBiCVMNoHRy44vqjKBqkLKkYbc9UCrJqG7Ar5yoSkyKHUougjvUzKbDhLLdTSerRr3JQZCYPGVdsRbuPwisxc",
  "key10": "4A4voTu7MqubwYnbJ5h5k5fJHaxhrkKVmTaBQdMiRYQiZ4S8F1QgDuqB15JiExdLgTn3T9mCrchPdBmuP9Y4LJw8",
  "key11": "2VhbF4c9AFjTUsGusv5ZWL8SyLjuTUvFcYJnDQad7nGiVv1AceVqSPhUi7QfHg5qbAZwq3Rxy3Z8yK9piPDc8k5o",
  "key12": "4HgPnjmxgWa4fB4NkBdt4QQAoDoBnZhhbQqNXPti8Kv5kdzJzXUpqafrmtN7HNFdCRXPqNkbzH7frGRtoJxfr87q",
  "key13": "3EU55t15j5u2Xbs5wnH7gMvx1gZMCKLrqYYCjXuBxZ6KZz8F1Z6ik8kERFTiTJcFjoaHa9h4UmdGFPHEUDLNV7eG",
  "key14": "2VGi3awxMbsHrMPPXZ14AZqFWKWhfSi1unPVUZEBtTiYTnxvVPecmK4UWYrh1iGjCwUN3poRjkFzXqT1rCcTAD27",
  "key15": "61mz9pU79ordamtX3DMZRhJtwLRBntH824dC9HQLshJo1rDawVDD58nGRqDpdUYF9vp7FxP2SuajJbu51S9VU8fL",
  "key16": "acWjN8RHra827YccE8q5ApjDmRSfNC1Ww687DarqnsDR9NXsP3Ut3WWypj6M4HmoxDnKPfKYGqKnyYRWCsdmY1Q",
  "key17": "66vSwoz1jFRT5Wf5sGtQJrWn9j8sxH2g6kbuDxRATDuAYGBm3mzkTrbraavh16PQ7bCyQZYanUkMC2DMk1u2E5Zq",
  "key18": "4sEQT7sGviTGFzkE2RHjgTXLSWmrXu5RAm7G592saboUPzXzWfPT4da79DicAWfjw774za34zCSXsaViet4T3LSF",
  "key19": "4jrtZ8ZWWTZCv5zandA5B7iNmBKVfc8n3vA3w2WGn7nXkZQVJPe9cfcG1feXTa3YXJfvJUbrbDkHqokGW2QZX3Ue",
  "key20": "66wuAScL4d2XqFfJe2TF8TettVV5Wmxsqn2rYuejTxovPSWqUdL6S4LPm4BuAwZDHR6328wqqK7xcZXsFJHiYeJQ",
  "key21": "2rGYaiSAruqpHbnxh3YYMuddfijvatxY41fFJVzQAfLg7fRg2A6iAZ4e54GY7sX2xw4L55RfUihYnkutPim3BogT",
  "key22": "4Uxnbz9Jhb1xojvpUAo1jZW9QHrDcUkvwEz5Vrw9Sqgk6wNLTdjjXaNy1ruRqAM5AFWzzGaQZt61J63365jiJaHs",
  "key23": "4YEuAESbDJenxYVq5WnqiX3cWWNBmD1NFLKyyusJzPzjXh4cqTAGLWEo4aZSghEoCaYxCUrNqmtvH7wDEY4Zjjxt",
  "key24": "3k8cWb3DPtemti3fA5cyHCRjgk2rLzZX7qNrTa69m1xrvvZNWWvLmCF5EuUW6QrTnrzKusB7eLoyyRUGQS3jEHJ3",
  "key25": "5igB4D7yTg95kcT5E5G393HUmMihCZmboapgXmw4cHYfm3Ma2aJLkLc6wNLNFfRjazcA85jDh7zsEc66oSA7UYVT",
  "key26": "5mhN9yB4wxVLe2hCZA51YTRBiK84RhJeE22LTKY8QXKMiLL7VEdd25MsRtPsKmQi2q4DCH6SU3xm4Smc6FJJSFAi",
  "key27": "27i6eTYygtUus1CT2BaMNR3HtkcVvUzeQT6PtKBucc2ttFF7hcisx9x2mre9WwPr6TbfFDZfKZ7eiBcENayfQ1vR",
  "key28": "65ix3KPq9Qhx6ih5D9VdzzR3WuznAFgfe1YnwiA452ArYXmUb1SMJpzcf9S17jSzPuktgkiiVLfqZzeSisxHNv5U",
  "key29": "4tjWPKgmdRXyUJJA5VF4U6FGTzhTZGW8AyXf4H8cDxNR4NjYadJxcNizBJVMia3Lp4JJjGSFMhpvuM7XSARsV77z",
  "key30": "4kDnMdEQPxwPtg4YyptGDhiaga5dnBEP9sj8cMc2sefPNGHYNZjEgxezvbHY3y4hu2Ru6HVbj9bJ68inKdowjGKn",
  "key31": "4ziMP5eJuuyuFRbWkcoTQEKZx3Tv1aZqjrHPEFbnUXKgysazn5PriJzwnxGFoFFkM58xsvhwydZrTRpozoGDCCcz",
  "key32": "47KUvBbs9bGX9NAVse8Cer6VQZ1UNJ8ebu4EHN7FF6UioqaAH26KihNuzoCnxNrTVj1eTup4ss5DHgEYRyvETE8h",
  "key33": "4CGTf7sbC3GzsZYnrC1HiYSg8gTqwdHtGmdWVaJ7L2Zyb85Nzdcr5ueptvXT3qQjHcP1CswKVjBz1Q5zeRFUccvV",
  "key34": "3NYusAV9yeqY27b4MhXZx1V81MsrfdAXXgKWRjzRUMQLbky9oQbmoK2d7fUhLGBJXCXgsUWWYXDxkhjRPNFvk8hc",
  "key35": "WNxfPpQs8utjc9ffRaTEbytSRLj8aJqBPCQe6drmMPaKzGxGXbXERpzZb53qhZMaMUzvLae81A6DKc89spN8Wjd",
  "key36": "5Ni9GXTQcHdGK8X6ftHGxXnLj95AV1NVtK8gFAjkvU6AmZLmHv5F1QpWyh2ywvPb8Ho98Rn4JYXzDSNgnV2dAJfo",
  "key37": "euknjwiazeMbWfqukGs6mMUM4CYPqCYA9BuALXavH4ypZG8RnHWxMxiEebHi1U2qrUjU3tSD2Zo7NHmirxMho68",
  "key38": "5ugfrR1UAiEKXPqdPFHpuxghkE2H6p2aqpYkhSDEo3enSzNeKcFXrdbuRAotBGfv3aXwto2q1GbvB2sHDMmZzeXB"
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
