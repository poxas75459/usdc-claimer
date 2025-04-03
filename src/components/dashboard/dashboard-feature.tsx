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
    "2NNhbAp8GFejiCZ2w217grMc6mjMzhoiCu6HZDDozKjqFy1dNcqk5T4GGmeL73kGJr3LuD8r6ZEkF9hwmB87D4kx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KyduKx66rfvAbDugh8Dxn1JrFJXAtuT5t47tUdaRT9FHM9aHYmaXizPgnMoS25qrBe52syC3QmyoJuiK5hj239A",
  "key1": "3bqs983rxjYyzuS5iPrVkZpCtTCYmAgQZoGC6PHa6QJvWnP1bdt17S6bPaBcd8ovwaszb91NMvxvdDK1pp6FLRNQ",
  "key2": "27Eti96C97VCNwzk3A8g9mu4hMPPDeKBUKNJdcvywuirUyUsyAuvfM5QQtgSTwHrbyTgCU3CwcEYBTCcZzs1PsVe",
  "key3": "3bZ6obiFEsnG9cjJD3xhQBZv1eaE9z5uQEM4aeEGUYE4Q9r4d2KawFrV7gtYLHp4RY67dxRHQfhKw5MXTv7h11j",
  "key4": "GvDCaYgqNXfJwDM2fVQkZxjzCicE3QmztbMarYJj5QA4WYV9TH4xWNPvyFJ4e1w5DV3VdY4b7j6uDTjNtcdcj7m",
  "key5": "4y6D3j61VmaUjsZwCchvJHcqB4X5nTXGc8AAQDpBfuz6FrBaFk38X72PybEZJFQJPn7ZJZRLjaV6SCBKz5F9s9GU",
  "key6": "51Ny4w76bDmQuBNZsBh9vuhqWSbrkYiHgMahNSBw4vVLLb6QBmwtGbgvHZHEpfJdSiDVYHYS7WhNqBTCSxQvSEWN",
  "key7": "3bkAYcsVMNjzy68okCm8athdRUhLL4zH9nQBs4m5gAWyoyCr1fysqy4y35eZoGUCfag9m869S8DN8akJHhxritG5",
  "key8": "CZ5uBuf8tLXgCXXwxTGuRFkcZfPmegBgXJadwxe7XZpvXTd2Awvd628cem3SKfLFHRv5RvvckqfMRv76qZc9x3v",
  "key9": "RWJQQD8F9ix6SKhUZpDJk1KkMooUd7BbGZMvRaDA3yZBadeLPkgqWnca1kCxcN79b28wcTE5fJhCNVfhFdBn8Tp",
  "key10": "2cDD5GBJ7S72JkHj1754K3EwHYA2NYuDzZUcVWgEdG5TqG9ZZqvtyVoQq49orGTdU3NFsHZ52yoB4zW8ZPB2QGKc",
  "key11": "5KcJJ3DjyoscydUAdbnPPDw6GpFX1Fue2pJ8sNg4TZVRpiSrWrW1Q3RXPfrCmDVYkaDwSPmWEWTRRSzwDDxBq8L4",
  "key12": "2jsRLfZyTSaJGyCYF3Q9PvyzRd5XWKyBiEje2shirNizX3qfvgPrs5EQDiy6xvyPT9aTbsW4s4FH6N1mtigUThGM",
  "key13": "49CEzLBN4ckCaJhd1YbPJsUbKzJhNB4heaEu514yiizGgVkuwvmmUbVhZ6gizX6neh7vAcF8abMdUbq9i9t1ejVW",
  "key14": "r1UT9cNJKJjnZ5ZpHvck79RhAKmB4btTabze6rShk1XGaHtJNdVuaC8GsC1tcvyQNBnCvV8K9cBgnGVLTL1q7XT",
  "key15": "5EFnm8zFA7bNBwSxMbQTtKi5kFeyYRfn8haZPVH8WiXQseGc5eNRGuZBE3YNmg9PvmMbUA6cR2qb1rL6jaM6pmKH",
  "key16": "5H5kfJfCRzYGHYespSLP5QfxS6GD8uvR2WveLKESYrxjHWtcxHX7QG7oudsc3Jnq5tZmDSDpFGPb8SVi5CzL1i4U",
  "key17": "2Z1DA3XsQrubwoftuuj6iiK3T6EWNBtZ3trapiSdjHucYvDX5sS4h3ZjxpD7S7UX6xM9UhpqpdTzNEyCvYiZgaCa",
  "key18": "61rAqnAdJDq1K7EBmihtav9Cjf57iThvhqFJ3wTstkaTL1U1S2Z9Urzu2jxLe2doYFYaWB6uMaH9iS9NHCgGdFte",
  "key19": "FqvRCAWZuVVa13e8khyE8Ve7RmdwYMdmqN9vBBZebSTKTbHXK62iveZeyjcaVQUvrkDKi78iY7PegkSjUer38fn",
  "key20": "4TCiMsZHy9d8LybzArbbxivwkKfps8znnddbQywJVDsbvCTixPfjUnr9VzFhZwgjgFjuMtbRx5HF95iXeqgPooGH",
  "key21": "3sMkCSsTu8wi18BsWfCFp31nZs3Gemf8uhGfYrmBnw4fjRmL18124oK21UwSK3HBm3K6SgKui858zRvLRRSx9S53",
  "key22": "4wVu4MjaY6aGTAemiBB5mPfVqfp3D57mbY78fp5L92ZbbbAmmqvENjLsaoryzHmScT2sa482ejAMMCP4jLJzDz8b",
  "key23": "4Ee9FxmLGvYX4fuvcP6eZR1KoDGauxiRgMEbrhTsNmDgQXL98iF8sLJJeSP7JrsqrMT6iv3JcXCSzUrCKhdY7phy",
  "key24": "2ogYhPBVMg9oZAgtpR3ksgNBZMz4X8NEa9YCdD2YV8XMJpPtE8hJnSXnyrZQwcEZUZo4wXQQgfmdZKFDWgzy8Z4g",
  "key25": "5ne1m5MbG2utWU4pmT4imREwo5SLk86mo8NUxZqtaCuLzDz181wRWL4jW8eTobAZHTeMXrt5Ycp3qrTXxrZ9jMoF",
  "key26": "2vak1H9mC1uRXnMSVSyaRxKbkBj7cS7yckEm8tt6nkAuRg8FbA83aqJg2ACnxbqPz7QaJWuqiyoRzf2npQ7KSyJV",
  "key27": "2dUk5UVzPTVE4u7aKf2MoWE3nWy3jnbXiQVqL561UXNnSKquq2nty2QDrNcP1zsEnotxUonC6NQ56X8kozq1GMHE",
  "key28": "557W5ZgyFJT1osN2CKnJwM6xoKzjBv68xc2M97SN1W9uui9NPRgGgsup2KMy9JqvJpyf8jFQ3QK1JqvWhFXywuJd",
  "key29": "3yTasS8fVi4abQv8YVyyyLK4QvhJsmEDzogPiaDdn7JY14LLSh2a33Y8U3U5FmCtnqJofP5sKdDCqMzPzApkhZy5",
  "key30": "J6pzM8kyQLu48aZtmVhbDJfUvhLp21oYEzvs26V5YjrXZFzkc1fivGDeuPFYmfs9V1VkWoixGpE4KH3y9kUh2JY",
  "key31": "5Sbwqw3xmLj9CpdAqE8E4h6JsQqJYki9m2XuiUqRyG1y3syjbBjbYikcutm1K2UkWqr5Hn3Cb1rRqdm24NfwyFQw",
  "key32": "2Go5SuzGiBhdjs3iuGYL2cE2oH6x2ACNejxnpXrdMy4aQuL8BKrDgQ1C82KWAnMmv46rwLwBGTSYWRtQcVmxn9rc",
  "key33": "5r8DULEpw2sUpiQLE2J918YkFVHgPF3gnbZoEr6Py3eZedf1sTVrbMWgZTnALpnKyRTmsKjkenHRCr17oDw5sXea"
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
