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
    "5V7RhC5jAZT81mFR1EiRHuZifVMTerhd7wCeuNDCsgxjPfKUGeJdT84iaRSB7TR369oSdWc53iRYPX49LdWjCVse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dLGtjaPHXhK9N66wDm8sDJQyiTFB7uQp4mnVEcFMqZFTFUBDE1CEgs7CCURjNXXMkjCGRTKfLGj2amevk2kfMMC",
  "key1": "yhFvtkkijBTBjzg4y5zTTjAB5kKTnifzYcwbdt9dLBRo3Bi2Af4AUC9xx8f8mxRT7jGZX87sACPZNsipgitdvjN",
  "key2": "EAnNqRzRJzo8QECQCjjiiQm6L5w6ooULzmVNaWFbS3Phn57dzn9Nz8oj29WHFqmU92p96RBSwBmtJ28iqH5iYMr",
  "key3": "4QDZu7A64y7fD89QxAoYiLjzS1YmrVY59ZSjDUCAFFqV771FY2pNsuEuouxA5GZZHuyEaHuJ4iKLJ8xFZJhe2AiN",
  "key4": "VwKr3U9cSwUiT5jDBcm5JM5gLgwtsuoWdxtnss8nVs3DhnhoMyERWbjscf5Uedi2aRSd4A7fQgcPKH5VNDqYkMQ",
  "key5": "3Ecjg2rt1qhdSKoAdLxuBDGKBUQRYoxP2UD46o9kfqnhdwXcFkHoshDU8JTGW4hxD4wcNu1W6HyVq6dyvnvFfHH4",
  "key6": "4ne5GZJDNvQYZYH3UFasa9GgnSgypDkpy5G9jE3Bf6GAU8QsTjZGtEGPZj3uPESXzYPcr2BVfTxsHwfX1GwymNBE",
  "key7": "4eBVpZsC38y4WY67EADf6G2pdLGuyYuhvKY5MPiLKkVTXNeSFUzEwpfZCqbtudQ7SEkc3MkKmL99cmgFS6wtSrDK",
  "key8": "4FW9JsESb8Xo9SDjRu3uAj1dUmZnmDerb4LB2ndvyg6Y9rtd2B5X3dLcnPiYR2kmfEwL2cg2KHE7mbP96ovcExSt",
  "key9": "4rv5F8zHrMuCsx6vdvE6tiVkSKKaoj1Lt5ZqXpWjAEQSK9A9oKyLbMrisYor7KLuigoCgkSFNtJ7tNzrv1yMepAr",
  "key10": "5j425BQK3w11n1juUJH6GC5dZzqex2Kz2AJhZfmjDM6DREVdaqPYSvPWgRKHPGBvHqy9dfmpZcmMeoog5QqMXnXb",
  "key11": "3wxRqXsZpYnikQyLsCtDzeMQUAMj243agekkqwcWt4E5n6TtwQ95pjx9SdU1Woo1MR9NGQtuTpDjHKb3FpFTGrwQ",
  "key12": "3PcWFEhtwWenWDq831wheWqgZfhbgmgtAHmQiazm22J96TwkKTUVm7rg23aXrM85MDrJtbUX6f4nP48y6bjL6rWZ",
  "key13": "4fjW5NCWfwf2j12nmf6nYwoHyiW7Q1GFEMtrgqScqym8gMroJvYopmmfDHLPoGbgv3vvJjRJGyzrH45SKuwcuYuz",
  "key14": "3kEnaLB9q1NmUHRCcpyeSHQCJMjb9ijUUgktrr7ASQAcXcLYv8ZSCsRehDj5rpbi3QapA1E61Ep5F6oeLQbvPzGp",
  "key15": "2opA7KQHTVWbbXFiAknjYz3U5AkG6mn75Undzm7DpNRC2wxwmfsqEGfwcK2fu4KuQhCCFAacqt6zFdLypRm4pvLS",
  "key16": "vj9hf32JhExLaJjpKXbCqYqVyEDJovTfEkaghEFAd7htNV5C59ZtdAsn484HrBgF92eyjGC2DLiRNcM3kp9tFok",
  "key17": "PtG1tkiuZN64Q9oRXeY3eHtjXomCxSNVFy5gfLy9BVUnCknQTnB8qTf5Rb9qC6yXvLyfCVe9rKBXayoojvEntRA",
  "key18": "2soviZoBZzLxxX3c6hTr1jgNSKrZma6mP8tbXGUJnMLpv7pHcUprHEoaBr4d3ddhQMnPR27UeRHrAuaCwcuFzUaT",
  "key19": "2NFaUmsfdbn9nZurxrdCo8y9pQazc9RbzrESR7ctm8G1TtUqGvcPqM2GAisJt3wTdfiaK4DV6N5yMjuSi5rossuz",
  "key20": "4bcEwAR5nqo6EtMw9QyJ4QQJHrUC95r6NE6hDqRkuwhnzAd8eHJsL2G7rEf49tUVVPpDgrAwPB6PjVrQk8fR261L",
  "key21": "5tRk3pq3bBGo1rC33jKTXGvmP9gRZdFWtm2YsDhiTjrcvmxpCAoGivUQBEZG9GstqPyJxcydBC7QvAjSwEKoujzk",
  "key22": "4CU216AGkZstBhnUFTMJPQbPpqSwSpxTT2bgzbx4j1cHU4sMDMM9iU3ymRHgQ76ZGVoEEicPQGJhmJh16RGjRjPj",
  "key23": "5KCtrmzAuYGqoXGTxBMQdAERY81tg6RfoVhNi1aZFqY28rbAtYDxbfPdcd7YgMDauhsZMXBM7YSVWu66WtTz5CUj",
  "key24": "2um3jDY9HnCZL7t6wDFkTadLz3vmGJdwpUdBgfqeGhtFEbXE29peXZ9rDZMNGUirG6yxUrdVkQjL5Xdsj1qTq2C3",
  "key25": "5h1fsjq4xdgusM7sNYditn68HtVWiok1512W23gx7eJ6kBN9kAY7KYEsAsqVKpNE4kJt7uDXCdC4CfsidpW74jpw",
  "key26": "3uiiFmi5bG1CnhfEwFkjteN7FMJFscfhX8rsg3sd8hzFRMVdA84GSEFgCC2Nj2N3FjMaYh5PcrsQhgVA5eXvQfSm",
  "key27": "67KFuTvfi45kX9UJvcnnQLGRW2NefKRZCjnUGfDE1YCgTuuMD21qZ6KuLiEcNpf3dgvm52KTgYzbqCaERA87x97v",
  "key28": "ze1afC82Vawm1JeRPQVuyWkQNyUzxEfk2Eoh13nZByeLKgAoUSaE8BMwbadpR9TkuLeKALjXUkXwdkGHzhNVFFb",
  "key29": "4zK1wAJVV4JqJcqJwUJicPYBmKnKj1j8mjXLLgF5cuG4fkRUTtCKunbUQqrCKvNpUPc9hhYv6Led7YxTspJMwq74",
  "key30": "3qkEU6WF7ZQrx1Gwm1idiBqJyxm5K86riokg9sXqEtpn3aarR1B3FKGbmM4Bckqfn39LvV86rp1fedk2JZa8jaRG",
  "key31": "WUoEEJi26qnLHMQPmbWN2aE8dJxJ5CmUUnm1WrBuBvHdKgvFDGFsmPHpi49upM3qeKgZhjiUyAtzMDqRzpfqrg9"
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
