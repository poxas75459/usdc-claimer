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
    "4yesBwMDXAoqpbrvTPevCEN3hbm1zNLigoyZJJb2Nc55zLjcBNwzURo1AgZt6pn9FbbUhw9nEw7SHkJDQpXhntRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G8vcW7BHyJP7fjAfNvMwogZ3HnRZdo8TCtjxR228DdWCwNZczxLNV7Xb9zmhUPYK5cHg6oiK2q9MSqz9SfS5jJ",
  "key1": "42HMbLwYqLrrsqrgmZuw9a6KbbHEsy7gNea5kTupJv5fcc71Y9MWzAKzWNUQZuAWiJGDzgZQ2xqcu3GdEDYLmPbM",
  "key2": "2PSLjZPJuRLsdxS2NHFbGEiR6VaGmhSXXSrZ4v8yFhedUDmGLEBWmWKjK3Ty6uRWKModYMbJTWBQuXWrYHw4e8xY",
  "key3": "2XAjsQfrQVekEUzYT3KfqgGw4WY4dBo2wK96mxoQ1zPXtfRvvyfG2kjys9nnLNmWMt9h2h8kEPq2LrmYphGoYjsB",
  "key4": "2xqokbaZ7hw5US1YxexW7uXSQTmfXAcjuGKadAkkB3C6wiFsN8hgi671wLit8WCL2dvDxyz9LpygzempRFLGGfCh",
  "key5": "2ueZgjy7Ws8qq8KZn4spHrhL4iFNoMNMDCG52RQT75Mde2v3NnYHfp8ZkeSV4hN1SV157SnAY5YKxoZ7HgLEJqYR",
  "key6": "3pziVwy157KQUSgSFwanWRW9S5i88f5DQourd8d7yoh7rgbQ8MDwEF5L4qgpstBD3hWhMMPEFNx7dgp1V42zJMQJ",
  "key7": "3kA7uNp9PmWKvtCLVXSkBSqJLjG4vT8HZQYYVcfAJnrPkMWVL9kiXjUR8AJFyZdpsqJpkCB6q13UVUpDEDA19L4K",
  "key8": "1pRuMxzWmC8EwJbUXxj9UZ7nJ2QY7eZpzympxGACpP6t1EPnNCwPgUJrWWMuh627mXd1X1jegBuFCKz64QMSSwY",
  "key9": "NhuJbUycG3dmNiz6YLhrkhSYhW6X2e5YgkUahNuUHyW3afzeo8C4tWJPa1FxU74BXfoxDdLPKeCLRKk5CviRqvz",
  "key10": "4a2xTRU4h5gU4gs8ApH6uZVBNiRVQPGuH6yMTb9kf4esgJ8J8TMgsqmx3xRZE24y9y64X43Rn1ReKXa4SR2Q8cXr",
  "key11": "4vduj2KZVqgEcR5NVo6iwdXxxrwXTHTpySfygscuKZkySkCW8VnDJ1nAP1wkP2636fzQdotqw1FUp9aPH9xLs5pb",
  "key12": "4K6HKs92wtBQqoUcFfyhdRJYuvr23hfH2KafUyr2VZFDniis2gMhzVGfK8D4Cpn7tiNwW4ZN4XsJM5J6Htg88nY9",
  "key13": "FSbdEQ2FqVFk9SPsPJsnuQSDgLCneD7sga5J4TTUT9EfDNFrENTLrvBJF83cxg6N9XN6QLW5rVUiaK5iPb2b2gv",
  "key14": "5g6GuekVfgzT89mi6EEDcfBGjhLwT9vqnnHx4H9DGSzunJGJXUdzYqVA1bgSPiAbYrovmxf44QXwEPzE6YxBtiQY",
  "key15": "45pn7ANzGtcv7YK4zwZawq4XTwqGSGYWvPcbR7ec1Md1XeWBCJhPWFF8nhK7rfyCXdrZb7LPgyFM5pdvHAAmhSuW",
  "key16": "BHxk6oEia8DQqFKKCXRkAc5JuesxLscFeRHyK3qezPUKfm6yXQPkUH9a78rkJ39742KyWsJ4Y5nUf4zPsTYrdXn",
  "key17": "2pEKKdAVLRTJXR3rxZ7tfVB6TrFjf35CgkqbGpYy9GEwSfVocMv8ohmDkTpdjrHPKAB16BR52f98SuxbKWnmCE2A",
  "key18": "3DCVk9hBs53UWGZH3GZUfVWoswjbPrWrXcZmpa1Hu2v8P8PXPTsHPB63zYReM7zbjNSbWjifVPbHjgd6aJi6KHMN",
  "key19": "3Wy5Hyn9MASj1EsYiuGD7a4vD8jacMbaxE3Q4cxAzjrpCM9fT83AovNokpZYXDitWUPuxeU2VWRzKJXAHAtMe12e",
  "key20": "5FtE63gc2Hxi1CqoXD1dcPKkoFoMKQyPanznP8LpB7X39TGTrPNeqX3mAgoTJ9QxAxEXNhYizqAEnu6dVqhi9DNZ",
  "key21": "H175SuV8AfYDrTfh7dLdUxzMNp86GYtsPmKeKKBGw1psuPqMNs5kuB8J3bonQzXncouVHgGkdSnhbyAFUk3AsA7",
  "key22": "3w3QcEzaXx6EkT3HWaoBPmmbvd8XLV8rPkHsn4fnnRpKkBMQmkXYqavu9RX8hM6PXnNddMP6GeixiZen1CraQpSK",
  "key23": "3aHiMnUgcdyzcCyhbWJ2LGtkQ7yUFagDj393bRtkET9YBgSiWXjn1NbZMs55A55HkW4tDoh9t5Yvnh28q78fx8po",
  "key24": "UvhBN8SpCfUvE73FoGCH76tKWxemxio67qkJ2U9K6mwAZBWy81PDp6GzBe53KYNm9i5Ey5ckXn84XLYiNhka2Vx",
  "key25": "3VdgZHGQBLNjXN1mCvP2CdSaaq7HTQMHy5a2vEWAEx21VxNHVfeKme3KDjh4CSxLgL5Px4xoHQwwta958SL7MyfT",
  "key26": "2fmkVo8CwRX3q2ZUqC8qtkKLi5bPCuyFPKdNTVuoRYCpnva9fmoShFn1TaZ5rWzHPww4dYpzjt2a7htsXEtpZNrh",
  "key27": "4VmQrMnof2K8oNUA1VXYNnpsHsvpQh5nU1a7nRL3g3Ro5ojTFJX4yBvWThR4Jyt6P7wzrUk97W37iLrpgGqPdhz5",
  "key28": "3G9QLL8SpptKeQdh5uh4WkTAvPm9VHvCwPu4dXG5b3j4o6nec8gfMPsCZcNWtiw5VKoEwAZgBfaU7cB8J89HNra",
  "key29": "65ywyWECTvxiTkJ28MQRFPW9YoirZM79g5jxANFUsfP8QiDzSzrcBFvaxQHqLfQhxPNX1dtywJghEuQadKDBbxjo",
  "key30": "5cJfCEgoQ4MJta1vLHzJa6YEi6RXgap9JYKmYjGmDJU8EDo6nBNPRswPw5nD67CLi7fdtURsrShXh5MCYA12CmrJ",
  "key31": "4xcapfQXfn5USZcyfCWbxfmqdoTtn9Stk4FmvzZfPznttBazSCJep2n2eCxgtYALBnZdTXVkTtYwT6dxo8oTvYFp",
  "key32": "5fKeaeKUUD9Prvrh3K8LmdeHGseAMDK8uuDBi4ndejSyvYDayt7DdG6fXYHfv2AFtQXMhExjYe9KXYyTs3V9QFkr",
  "key33": "5SJfJSUUJuPe7oarKeuxmAGSD34mJKqBh6DrVYcEtjz9r1FphMbNFXxksUot7G8DneE2fq7oQ6zSePY7YgFPaeKR",
  "key34": "5a5VfdovgTQiD3GzTi9nQTSjZXSo4WymKgnkKVYQEJ4osDmjzYtdtxqeVBHca1DVrEnSfbEnMGqjxPh2S5oa9Rzf",
  "key35": "5vWktTHjqPU9hi25WtMawvypyBj7gWL4uVkk2HQ3JE52nGwUWjo5sNMrU6hjNTpMLoYBBnppk1pvTzWEuBxMHYDJ",
  "key36": "P9igSA6cRvTF6HoPowkxW2YSH9Doa9m3gJb6WYewD3NP1bYL4k8etqbrmfMQxvmCqYYJKpP17zSbdyymvvAf4A4",
  "key37": "4RCXQdGFmLNHx12PHeeTuYwvSsdygDr2sifDFtVD8Fww9bucgvcvDPXMBeYQdgUN2dTsxWAbTvVbWWNLV6rrFRG",
  "key38": "2Q5wsmGttGfbZyeJqmwKGN9G2GB7e2JcVi5hvkTGqGNeYjRTF8ZyU7h4YyKhPFjtKvbq2AFWzqe8keqcgK84JBnc",
  "key39": "3DC8DMcMe6stoAt6EidaHNtPfvwd86HWbsLEJa41F5vdM1QGuERXSfJHgBiDBDHDvwifCvEoCE6k3F85xbAqWVqP",
  "key40": "kBpFqSgKMp4xVztk2AArZphipQCztqcVMaFPsbGZAnW7QyHBRpMxNvoz79JBzjspBQY7F9S5KJsZ51YLzzYCTTh",
  "key41": "N1diY5zNAtP2uykpyTFfJebeUWnjRxRDLcdz93vRPrMADK2BzU4R8bcZxmBY2UU2t3bHGCUJ4EXnC4a9EQznQgH",
  "key42": "59vZzEUCWvat8Cx1H9W4TVRadWwigDtrsNmrd23fZQ3rsbUWSGY73mXc7MEtBqBahozdZJc71X42YjmFvAapDMYb",
  "key43": "5doWQmxWXoUbGdiyTxdiTcZg1iUdzWfe9KBG7RDej9SAtcEP432tspTz2szhP8yhV4ZwEkkS5CrNpCZ8HNSbFpLC",
  "key44": "3NibF4sKemTKUTG3ncrvVDvEL6xiXQpi1ekDUtQU6PQ2FaPGh8arEgWjXdv4yu4iwrDGShK67yz1RBPiqC8ZjM4Y",
  "key45": "5yBuVwNq4Sao74W1A8UqJdqHzYjkrpJJB1YBdQssM7faeg5Njrt8FSpGMRHbMjEjRNUfw9obgSsSFwNfLc6BRCpD",
  "key46": "5ZHKMWe78x6mvBqC8hBR6gwd1SGkMKxGinbjjjn15i82y95z5Uka51RrJfisWSH5QAjmhSLaK9KnkMLAgNPk1vLo",
  "key47": "qXSc3iqNdp9YyTXyPbHwGE9VFKrkQQy9MT7ijGz8TeWSjTywo52YxZouXxX1atuUQkxsdXsvSGncrhEcZcoUzuq",
  "key48": "5gB822UZFmk9J5HL9vzy4nHu1w6Uf1t4fi8cUTwfsyvhocD5S9kDax3Vsym2ZWvkZmErVUgMfm6eDXwJfFEpnaBi"
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
