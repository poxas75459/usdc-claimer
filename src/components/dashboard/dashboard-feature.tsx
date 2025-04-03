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
    "3uq54chh7SkpiVbdgs2a7dV6Pernn72HTgE7ai6UBvbf6poF2ZosvyqfvN9F62HfqEqezTFBjTiHGvn8J4KrUJ3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nrNKHvpfjy3HKEjAWtF4V3Ko5tntVxMDbTpmvxzBucmqB7ZZcEMccuJTSP8VUJmETkdn8rjy9EeuxXTWwZ3wwMp",
  "key1": "4Vm3bjSFT4DfmxaD3ZJHdLHg8YDJevo9GgEtad2Lr9cAEH4WDdmV6assVJrEvLfizBZXuEPLuAVDfRkdADBSAYCC",
  "key2": "3kpYQWPj6kuzU6nat3JZWPuBUSLUdqL5PB9ihc6Kj5sRmjYuZxZCKkyszZtHmWaTUZFDp9QiQEsV8uZbSKdSEvv4",
  "key3": "4iA36ConUm37H5uuKdiSQ6Pq8qjJ3pNZE3aQhKm7zgfeBH8ggUgiDfrN1ZncvMo5gfyXBBppRnGi3A7vTsQTB9bv",
  "key4": "5zVA5B2DpYuuq8vdDn8N3aVNJac3HPkj2Di9mqnw5K1V1sTofgWDhYAe3vgyapf5MNHB1eM5WS4rw7bEEwQzFFRG",
  "key5": "4gFCEFyZebyhdWBspxALiWiaYpXJg8vLHTbQdBr8FGTFJPS4za5eVXzDyJeQsGkuJJzr2WFD52BBSq2pwfDkzsNw",
  "key6": "22svVwT6LnQ7A2WanZ5pT9extxAcu4x32WR4ujKSNY264gzys2JtyZPQG9NveCLVgFBhQrbZqL3znxTfd6Ey2TY4",
  "key7": "dwp6TgxD6AFbqAptSyP1uDXKRPQSEe2RwCjZc4SKHfHDg3UyMuaJN1vE5rwFx9g1sSPdXgBz6SnmoJvpcmQQQDo",
  "key8": "iqP7pX2ATbCApnJhzVb51MVhH6ezK2cLNT4zgBVN3JcuY5hPU1anrhAUNdmTXACvrxAbj6qa2vij5MzhSbZTthY",
  "key9": "4RgL2kxDS3d4oQvNreC7BVqvRkwPoKvsiHDq5fZFUSfiHx99v8RPFnFed4CPyVx7LFr7ghCUpKaCC3B3kUYHC3gu",
  "key10": "A9m7n43ZCpkz7R7tKzMLW4jTgKej23MBFqAsUpEGUTHzBDE7tnZhhLzLsCCSjEUwSRLUpe5Jy7YsCQm1Q332bC6",
  "key11": "2jQc5WN2KHVbgNZm9qAQkVhJreiZK97jm2PjAnTCN8asiebU2abxA94yk2zRVosRhxGvJdFWVQrLZF8FNoqQkjFx",
  "key12": "4xZ1PTxnGrNsoJVYAcQfp46Lt3mxx3ZDCridb1G8UHwKNkbKijkgsTcqcq7Ud9tkq8WKQFFSVzt8aaDsCc8wngWP",
  "key13": "5oS1tqreQwtt1z8Zpr3aHW1sDUvckamCFqUW8sHZCsW4oqgjHVoCuwe1LPNv1ckwC2p7BAAqZi5wdB6AWrV4YSBb",
  "key14": "4DeXy6QVxqNciyHQXYL5A2RWnAH8nUaMSC4Wjc1bwmsLcmxTxHKF5ypdAz3UWTu2TzCLmaKJ96tBGGgYsqRXdtcg",
  "key15": "4qqKmVHTCeYYakcRtmxF2kSMmHyi9rz8w9ZKCkv8KGSkvfU8zBdK8D8GraLvKsNRWpYXbRMtYdvZbz3cK9M9tJDP",
  "key16": "3J1WcRUhmSh3vAVoYqQFSeVhRJ7GZxPNHVCwraTHDEzfp7codQ7DYmNUa6FBQuoRxxZdtcLj2NwzzreYbjoi6Tpv",
  "key17": "2nxHT8XRsrRfhCj483VqPtejhuKQ9Ni5BSoJjrdyjxe16ZZLxNA3hW1rp6Pcy3MQNsrkx324ChDZcwYX34iN7zMd",
  "key18": "5jBMdAdWANPC2NZfhtF4GZMtamYAjNxxmsJGdtSkTtxQRLWqoY11KAg8egcMfjezvpYXkKNXz3pxcn3X1uJXqJ7b",
  "key19": "dT3wNUwzQ9EGbPBU6mqdsUWRR6x6sXzDgK9KRzXPxE1C4wSSNS1SXqQXvFSGAdPZReoowAo1igaDf7v3ExdeXpz",
  "key20": "oKdrXZGBJdWd4d8Xkj28CPY8ZkRsc1NAeMmM5v91DQCQUP4hk1uan1F3qJM59txoBKfL7pCxqzR6suCiBed6TKN",
  "key21": "3AX5RTnvgbrmgS2YVUA23hUVz8Pu5J1RB3GpXufi4vWn9AdvH7qrQpA9n46sZe2rF6upYkJj8kwR5RLj9cQr53vU",
  "key22": "3SJ7gFC5jLwqgXWbva7R7px9VwyjtudfgkwfYeTHWQPiTG4s1pYuaPFuXRy5o3JYGsrrk2ZHRxnwQ9DLtskYVYjH",
  "key23": "4VjKosSjRz7SDt8TKkSVqBrnLEiNHPgyupzdRvwMKQEGEPhbHrYAaeaJ9j3SMiWa64gr29Uan7hBBifQGN56A7HL",
  "key24": "4WM7EZwEz9ktAikRBKJy7jpvmTGvU2LcAvxBP68ahS8UyirJRNG3m4ewdqWar2ShQtVvSnDYbEk1FCozCRh7E4Y1",
  "key25": "4N3htry7FxMBNytnDViJ3JW4Q3bS68vv47QEWUef5WsP8rsmnv3b9XA4xkK9F5ycc9PGS2EKq1HpYN6kgjBsZ2ND",
  "key26": "3zdNMAGyHTCjTdjqZHq2KBMqbf4WF23vLwdL9B2QQYveRkvqWsgRZ5ubqMNFLp6gLMAFC3oK3cjVoKBXLame7hGq",
  "key27": "dijrVmpZ2z13UQns3HqeaX6VQuVzihZjKUWhP2hNJBqum3uXx4jupQHzpmSPe3mCPKCL8siqkBPXV5gKisKkfaJ",
  "key28": "2gipwtX2ojGnJ1sc3tv8BQ8BBTCTDAfG2Cspe87VuQvzHhbdw4VLSqGto8nxTZyTryPyd8upZ7FAEuAnm9ee8mUu",
  "key29": "523HtLjdr1XnprFbZ1N1LJfqaVzCETvXhPriLY54GxjtHtioCWnGQPPBAthfdPYQSGXSLkdpnU9fJbvjKcm9mGaW",
  "key30": "3c7PVm8GkbHMyPhspkjKYN3W1LfiwiQNR43PzrUAyFgEH67LrfhUVAuBVMBLAkZJ8ABAZP4KWJX6gmGDjk67NoWq",
  "key31": "2vcUrgYHKZGwvht5BZw7A7NUJD2qtgXd3R5fG7WgArzcvNvquz9Z27ASHgXEQbiQUWY3cJ7NczSxd46GLmwEzRh6",
  "key32": "277hWAtvfgSKMnvLyrRSXuEQg5cZu2JBGmuaTkFRzBTNmBPdGfQMG2tzPkDLZpUKUchcg95QZY4xgnDmAYMC8yYg",
  "key33": "3QAPZMCB1mkugo2T7GHyCBzWR6ggHfACk4QpeJcmQjaMCZ2SM7t7FQsMnt4U4R1gGtq1UibYXG8QyKCs1kxn9PRj",
  "key34": "mJ87dUsPjbAdMTibirdRxzTsHC6i3iKae6oCDpoBx7YQZ4LpJoGWUrjndiMzFUFt4uKHzbHYNNBRZVLVz9RSTei",
  "key35": "sXfxj8cjQsNNeNFQH9k4zmE7xiKJvQnJptK9rRNDN11V2dWVQGy6MKhwSDVkoCVEHUCX91GxytNZ1ZYR2rTkrkr",
  "key36": "4wkho6D6VWd9MgxGTkknL9MSc1wShSJkksxW3gDuJWVd9YAzNyW3cBKk6hHmtx5XNHxFgqt96jfViLZuGXrnCLy5",
  "key37": "3Aev4dP3cdfC3V5ibStqB4aLm11bEKdzgv1hKaFLTpQH6nZ7j3aPc65eFp8kejzB3S26zqiMAmP9isn5NmmYDVKo",
  "key38": "56F1KHLiH676K2ocmyvLKcRupyZwq2aErdgN84Z3RqaSQVWPdocbKJS4CbAoXW1gqoaVbL2s3Pgcdnrb7hZ4oqC1",
  "key39": "3UdRjRURzVx5EPadkjgrPbPRVhJMyEuuJh9KmkZJQM89Bz3VAt8F3yBVNxYEpPxr8EcKf7D7fW8GuSrhF8bNxu9m",
  "key40": "5YLNTe1792q6CqaznpzsNP4RfD2aCCg5EH9GBu1TPuv5KhgogU2eC6vg1wWttRYHKNtiZLVUUNKQYuEqgftgBR7g",
  "key41": "3jYNYM7CZSRCABtjduXd2yMrGMkNqWRuyfxbbXr8mWHwvPDMDHFxrW9xtUVVYcFdkrEvxsxJHkMBro5yyFA6kGBt",
  "key42": "5uLBcZr2YGvYn8aFp36yyaNbJfykts8WqekahZJd2LrCsH7j9wzUEhR6cVFLqZKK5adR2pszDgz4z1rrKFtXSGsm",
  "key43": "66tNKNjeUb849dVAZhMkbRo3jMnupoxATsRizPW7wPjfpcLGXfovL2B15cH1fYY9uwPTVtUfU3p3aVMde7rjgBhn"
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
