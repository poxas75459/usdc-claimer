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
    "ZZZfuGCF1bLXWaC3tE263wYTAHtk5Yt9Sq2LYUjUdviEfyz3eenAAzjD88gHzzKYD3q9vqUFmFkNGfD1JgiezxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PkabFC1TayQ7n2GS7SKLASD6n8oDURabq6qwDEhmj6B3xtuS4r9zKq6y4rapvVx9cBDtmV8bvFTzpFcdyJin4YU",
  "key1": "2d8C1xPcV7qXQ1YEDKrQdkXuGh5zDidDxzQTFy6tX5doETa59K84cxWy3L1wTAJj2qUpgnkwtAfDqvAD8WwharNN",
  "key2": "4ehbLGgAoZxpcTHfi4xx1QQ5FicYBN1HcYgxjVQhce9zEqKLAYLyEJvo6DRHAfWzhDXifDPBxHsgUDHm8undJDab",
  "key3": "3Yg2XjfXXNYYobRzbf1ERWNZXCAMYrSVDZkn3wCFN4kDxhHwBs5Mo7NnEQu3VoB8HSLuvLtfaXgQ5TaovPtCgj1B",
  "key4": "4Rx8j1QkhzS5sbGA46eEvGG23xMh3TZ65PHf7DNg5pxjP6e4B8YK8aM2pJfKZ89kfrDs9UirYBtiQDzN4BXcqxmJ",
  "key5": "652PCg1apyQaXGpSUj4WFrXukehUkKa29TxAxT1YanrDYn9Eud9NiAM85BYYLUUNt6Ud7Vn6eoRPcgU4WRYGYrqy",
  "key6": "5PRWSzjQRGrJSyABqUSQDo8BBkFVDDdbesAnYs1w3TDxjiTU2s7WVGgreMCVktBgfaoVoAeRUfSxSyd37RdT7xmo",
  "key7": "5FNpBy5HHXNYsn19hvG5PqAsewS1DrNjLMykVK9PPUZkRqefB9btxonuTHZteiGhrHs94bwsL74eSvJA8gHZPxnR",
  "key8": "4MyQjosRErAxWQ1fnJQz69TdXE4F8vQHvmgv58Rp3ZWSwLq5qT2v5Pwd7EQbrCTqJDPQsuniYEfqda6YVvBMjxPs",
  "key9": "4e2vLHBanka23JfW7RrsAw4P8iZ9pJpRu6MGdppbALQoNSPJiFazS32JjBvUw35kaNcmmkcUmgTKT2fqHye1eudA",
  "key10": "63doS8SbZCECs7mycdN6XJXh6RUaYaGehdsRTU6GzfMF4sJFQzaWZpzLPzVeMFtEJn6zzysGRt2co1c8QPZbSrnB",
  "key11": "5F6ftuzMSaDtpPBPxeSQg45jrb1SPBDMhcqHbmTYKnjeh66Ca5F36rcMCrrwmirE4BxWi9xXdg2yqzpvgbF4mt2Y",
  "key12": "4BrYmAnkjqPSAv8xswASF7RboMgJWYD6q57T1zQLLU1WoAbNj84rWWeudoBevXXUccVL4RhP2VPNFro4wTyaC7n6",
  "key13": "4h5LFnH1i5aa6BLKNtxsTGWQMikaSizhsVHkSpMYf8HqNst3wkwebsXq7U8gbQ7d7ua3ARHxy68whcGb4VTC6WN3",
  "key14": "4b1E9TF3qFx92nayKHsbEdX924ncZg6G8oJU86MCWLmdh53azD5WpekqiVkASAmQtqhDFZk493uQpEsQTMHj8atd",
  "key15": "5DiQJ7FKYdQYQQCjUMqW5C6Y96nFm4P4nrvndQYcHuCXCaynJuyAALvw4aP69dzhezT3hrF71QVeGk1td6iUCQ6h",
  "key16": "5kR6opL3d9Zi6SAXtHixyrj26DhktjxLXorKjq3oZxJmKRLnP6bHp5YSsuwqQ4EfZoNpTzmZuboSxQc3quwbdU7Q",
  "key17": "5JB1bfQfJG4HSTitdbAGMYGmEJwwVKwijq6H4UV2VyLF5TrGjaLY47p9gTRzUpxkEcdw7pHtCGiCS33SYRk8Xr2X",
  "key18": "5RYuYqRen2LXr7J3Q8CigjhNWLgMyGMXjVZKS3YFUShWrhMNTqUGDgzngx6okry14Z67opw4NMhY2TvQwG5seK8X",
  "key19": "Hnc422W3vMsyYxcGp6eDJqivo5J5fXaTvcKSZWvcFr5JxJRYAUorwzLuic7Sed1jUTTacrmfNnMSCfbhHaw4ZyR",
  "key20": "54TF4n5iBWR8enYk4BY6euCwTbKHG3WHMQwU69Yh56h46X31k5xUfAQbvpqVmrg3PY6cjvz7U2ryy1YjSg9FxJF4",
  "key21": "5PjWYaQYTJfLNAPFZMiW2DkEaUSMZH4JBgh2f77gpm8QwdJhf847o3VTVpDPqYCRgKGVJhztM57GudxizjZEeKRk",
  "key22": "4c7r5uZWexb73RRWzTT9TvNZqUYAEdbNZYWV6o2SDbMkFNGz5jBWH9PzktLBJXP7g5b1uLnEhd6SfJHPouApFnLN",
  "key23": "Sqfob2mTKnCqMoovxM8DamYMz8gpbzUt1cEtEeuAhKLkNk2tpCAfk4ZEQN6S2e9bpFMFtUcgVf8t2xKzH8wwHBk",
  "key24": "3dnprJKPYoia4a8Fjkmn3YKSCb4pPZvuQawSSZjH1W81cKaMzJKXo8CPRe1FCP8zCKGFWJkwD5o9ua2FDz9G84CX",
  "key25": "4UfQYDJpBwhonCSW7PfSfrSvFJW3rQXUK2adgVPSuqNnAT2SSV8avt4o5dMee6yiwEaGDQVPk5fGxABVT8ejka7o",
  "key26": "3TRNkPTe65rK2QsWEm8TP9wwqSXaj4mqd24rUSBahUtCnKieYaJD2mBvhk5XddZahKVLe1DF1n4mzPUF4THrw4e3",
  "key27": "3Yk7cAYnedfwFhs8gAKWHuB9Fc7QspF8R6QMzHcsiXm9gRZZkE21hdDoxo7WFq78MgJZygckndwMYjiPKsWYB8rA",
  "key28": "w419Wyv9NKBwfXaTXDvaN5Wj4mbASJGkMycNx6CsiP89ZEDHtY1pk5XXmrD2Yr8cENm7yHkwKBwBzyrHb2ZRCch",
  "key29": "2JJnWtx5zgBasimLggxC1x6W2ggC87iTbqccpxFJ3f4y4CmfnjGv4aL6QBh1pGiBHJhHPjTYfFjLoxoDvyXJq8Bp",
  "key30": "2aCHHMy54wnXd2e1GTsZwd6xHvwkpBKNUtESRdgyTkTBiuvJespbVgUGHyzFvdcYaQgDmSHmstws8D22WrFq2Qod",
  "key31": "5HW3PhGPMUogJcJWE39YrivBhw7d88w9Zwa38xZr1QLQMQS6tNb86VvBtT128yxcGwX8oXz6TsJegQt2oMMPoiXF",
  "key32": "PHXQeHa5Y5Qo24XWJVyE32jZAYTx5Ai2qZtCrP58a63q38KfUnk9yeYSbiRiT9WkPfaj98dW9CoGd2eVYaZ9mAc",
  "key33": "4smDc4YieAvBk1ohgwwVDUfXgtkTT7UADF91pPBR3GtSed7vpGZT7XYrMGmqNxxHK97j7RjpgVYrL9jgYGXDNDka",
  "key34": "2W5fA43DhFV2WYg8ZqeY7xXh4HJPBBKHwiYZcTs9rvQq8jgaUaMMv12K87MpB3N2gVMJSxS6LySGSTXVCqrKNDRn",
  "key35": "3XJ37g5cKroPnSeDXPAQ64ZmQzT3xozYUsGcMmXQEgepQnHWqEE2auAQhcweqqjkGxf2wrx7uW527DkzAkJc5Lbn",
  "key36": "2kiqSrzuBJTSmz235ToBpM1S1zkZmgLGrnbzSQB6pStfdawjkfddE1J3dTbPRPZbNuo2pfkZuksh7MqyKZPhBkfw"
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
