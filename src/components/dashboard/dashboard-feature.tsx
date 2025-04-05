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
    "2kppJTtd247FhAPsejctGXXvLZPejsbbCEmZ4ZeSrjKXXy8Zc7s4ZHWCD5c8j8DMWrNPCCKXGDmqgRGL2yxV1yUy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NXwrkSBsvUcN89VXiFVXtx6BuMbsjT7bWEfqhEkGmc4wHBXHsYLpHkAJhTPxaiQJgwdz4JsHaLQKzs4hxn3fVgu",
  "key1": "2wWU3zsiND2xh2dbrnZkkDZahHwfhK4keNqgoUq9PEaY2AR7SCrC3tmDGWQ64W5LT3Wg65oPtMn9WagNDqxNynhS",
  "key2": "eUrFKWdWhhy9QJbnPJNJHdh1wezE87wZmFrLeviRpCUtGcXFi5ktY2ocZYJn6KJZmVv6ezBzGf8ATREPQmWWg6b",
  "key3": "3hT91GSLWKrAgJDwKEFiK6iatMjfuuP9xh61GwCSf6y6JboFui7FRQkSxcmLeZfkAUAdsmRxZXwzNQZScgYwfeit",
  "key4": "3cqQaQxaomc7NEr3L1xLL8N2jMAhBZqZJ5ocVo5zKeGkVicZLJk6cCcT6kgMRWLHok6vBgjUtq3TK4q9MxULoEUt",
  "key5": "4Bxu47bDxvcwqazhCBLtd5epqYNcLJEYcstsAi2mW3CzFLcTohdJyBtCnoYDz8GWZ8A35CH9WEBVHL1ANowRfbCn",
  "key6": "3Rr5JBNdSkEQMGdZT5fvJsNunDtwVVrGJQ2nACeFSWofMJH4JXQTDAJ5q47XzKYTCNzcY5zJvtYcx9mSqNRAzdEv",
  "key7": "27x9xRk9XDZWpjBjW7mjWHPNtsF5C9jzd65Q5u5NeUGtoBuLeYoo5cuKD2F65TkSL7RyUes5kSVnnpMYFojM2REG",
  "key8": "2T6qVuBQVudYxJ8t7fXXBh2WQb45y52hdcA7YXQedqfwextbdYzM43XwZZohWQCnXEUUVHTRv1aLMDgtCZQxipDw",
  "key9": "4VP6zTfEvVimELrQV7qJwCNrUghjKqWfPNX5TDke1aZoAmDPymZcWvf6jyT6brJzZMVx77KLaJgddPdaPigVbhx2",
  "key10": "4wUfnzeqGYzcSfyH5RU8hngA5N7qyGVHY88CU3a3fwqAszjpjfRK4Krr9nT2QEq547TArimnwybVZzpSvMDwdrg7",
  "key11": "5G6oCWdnxC2k4ZSxA9LKJuUyxBrkkrnho3L6qy646K5V1PqWo4dNuY3XSyQgRf3udN2n7gjrYw8MS7GMPKGm6YKo",
  "key12": "2G3XdULf6sNcRzP4fqwraw8N2RFi15MtxrdFfWdFRn9RUPWqsDCsDeY7UzuVmEd6MXLyXG9y9EzpVNBnUt98i744",
  "key13": "4XVvucQSauBgVRaAjUPY2GGqcnr4JrSiJSZudUvPWoe9nW9NN6RDy3rFGjVxRKwDGhwvRoVGZq3Gfu7VPfmahDvG",
  "key14": "2YYh9k6p94ZyRLXoQ5mA6Pu4Bc7ZVmvHMj59rty7jFFg4tNw9dXWYkqX26KmAaFusa6oy5vRfn6DSEcipCy1anm6",
  "key15": "UX9LoFpA1XykEiKziu1QA2frUkzXoL6nK3jqzoPMRhXEQn4APpvAUomPb8LRuymEDWNcQADi8XVnbxCWpd7soKm",
  "key16": "GcrWV4ijQAK1EpTZdo9T2Xdb4rp7DV21cTMF5fic2hnYkyxHtprau6YCRFq44DXg6yudxB9hebq6FVZ35cew3Xn",
  "key17": "F8RTX1GkpzUTT4bFWUdyxx7HHRivZ5o98kusstSQc5mhTF21KJpMhULNAYtnDCe9aBuFgb125dFUyApSej8E78V",
  "key18": "3SYbHUGA3hwHaXYR5QVLRHNqjEqPhB5maMqwhzzHmN3ZgjzGC2NnPhvJ4w9DErU89qAiLDAvUB1ZKDJAcAuS6qdP",
  "key19": "5opJTZyQxTx72W8ygtQqt9922D7rFsV1BeXuN7N9ZdavemRQD8GxYRUEFLjfkJzYqLYYQLh1FVCyeXW2ACzyo77E",
  "key20": "2NFxy9nGhQzeXjdtAMscZgMrwQCZoCdi7yZj5ZokFikmAyJ9Z8c5pfLVsgoRz3NKcuBcg7cXcUgfHhWu4CMF6vD6",
  "key21": "2mQysZ8BsrUbW8Bc2F7PYnZprj9NiSEd4Kq752yshWxvw94foSZvDBRtz2LGqco9B3osvXt7TUupuLzLaYrTJZ2Z",
  "key22": "44tLX2ZWuSQXRLgJSman6THWR3uAqVWzuYEdT5UPST3z1H2iHKRR4XfuozCNqptqcSRignxhVArZU1PjgJ6gUPMA",
  "key23": "SCTAfk4ayKsX4G8zG7BUG6BcJVpdJtkS2zn9bS8ynSgrAL5zeGUeiwqypGYcHuhNHxgqQZbZx9LNryzRgew1FpS",
  "key24": "8kTfnEVFbc7uJPZbJDjacoaF6viik2P61LkzaSM6Hq7M8SBmE1qVBYeRYJm2WQDVr3S44qUnG7T4exTWdNw4Yqa",
  "key25": "4nAd14HXP1wNn474aERXRWe1yKNyes93z7ZxKvetLZKY9ei8usNmEht2aVyDmnCdwp9DyVPnpqj6MnYE4QtAdCt6",
  "key26": "5vAVmUs3qM98rE6DgWbjUno6fRSjAiecV9AkFxfCLWwNLpJhV1LzMAfiBTXWRujr22WuoBWtgSTpidqHPHrRKdod",
  "key27": "3ywySAfavYFUiCFzW52RwJ2GibWCtSaNkKL6Xv5KohZByAH7EaTNUMZ1s3LhUbbDDUC54brr95ycfiHS4rQDXcSG",
  "key28": "3MvGHWa83mn6X6EWrRV8UQUSRKzvqrdJHUxHDA5DRNG6LuVWNjBXuKyhkWiznpdjjmgxyDdRj7SzbxuAsQoMt1pH",
  "key29": "5Lho2VrrLhLitBpBJ8J3KUpz6Re3wxLrbVgJKL1q6hVR4XKB4S4hpP9NAiJ7LfNy9Ppm3WEGygDzRzky3jFVLm7s",
  "key30": "yubEwszsw7TQFfc2SJexnNrjz4oZ6m7bbbFxho6CKjJBJwGv4krcKvyvA1CP8UrkHytyV4oMPYUQ65PQWSA2ss8",
  "key31": "3kMRVRN4an5VZfbnGEP46U5Enf8mhm3Yc9f8m6XyjaLeAGjhoFQkLxyjaC7sSM6k4prvMBaRkt5f7YmWvhgz4DmS",
  "key32": "5zY34YNSY1i6PeqRYvtZZWpGBPgY97x8icyiqK9gLH16Le3a4xTQ7G8bdxgcEHustJ4jQAEQ48DjWrRJ4MxDEDF",
  "key33": "3YAQyySeYQRzvZ1bdWKVRp4YLm2dvXPfidE74Zi3SRgTqGcQHNpukZNAuKMVX2YQ9XWifMRdPLhh36YBVaiz4uxr",
  "key34": "4miAjYpqrKRjG8gbiNNkbq45qxEBxBxi6Jnna1N55m9n7QqDDjzrL5P7B66d9Tk8H1ngNP3ZgCqRDARc47FdXTQL",
  "key35": "5wQjsijsq6omVct246rK9tnFuH5K45C8P67GfixDQys7183BK9x7Lb5fahC5a7dQz5PDj2UxVoX9YsVixyrujji9",
  "key36": "57FfxPpMwE1XP9MrtKc1Zp5hxMqhywXETHcYuzBgb1ZH1DZMN8SZKft3LSE168EkEq5EGdYVwqSxSPRpgD3BH7nq"
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
