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
    "3k8AuHMJEqJLYL55YBeas5JRt6dNCrftLtxQWsPj1CVGJaHczFr3yqtyScnmE91R3ptLSUXj5DpMWsRMLPkTyFmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DGPk9gL9d1ptqjBkz15jivi9pkH4bAEgmUB7EQYSJ8Vjsem6K5iNHj5W4st7TVhUSApFLAfAryRBEzL7nCPv3sQ",
  "key1": "w4NpMjcTTakU21Zepwqcf6miihKbL1TEumoUDvhBNnzfRi7B5qALfoKZPjmyFBeAWwDTMtWtpZjhF5yPBjt9Tkc",
  "key2": "wudN6rk6S3RxAaYnjTBF2CmZH4xGA1aQJwYh8nS4N8hcykfHMqqAvX8VNzfZtHbBQNgCPDrd3WKBSj6EoGV4bSh",
  "key3": "3EUkeUzbBCKabX3puYSEZgz25N5Pca42eqH1GhBkw7NJBR7EwRdXZ18A5igWuQQVN2vYNpm2BcfrF4B9zHqyc5kK",
  "key4": "3Uc9fbiVjVmZMfgdm38vBrdRLFSjdqmoEQsqPfyePYsR9P39WozmNECBVbtESMqPXkX3mjmBzHbLWD35dAcTKsMs",
  "key5": "3jvE7AFU8qYkZTfTewjNDofztDsiZP4k86LCGMdw4znQijW9o3M8U63ENYYo7ghPeDNdMYhS65f5cTpnf1Fe565S",
  "key6": "674saDDDXHcSEEETWCBVjeWsnRuafAT6XgUzJ14rfFiNzLy81gxSnctjrKnrvzkLhfwtZ15WvAFxVe6a5j5tRNGx",
  "key7": "4NPGxPZaK2Z9ZoQcUwTcoKEJKUBQkwNXcPhAm8UZzeT9fmQp8L7Xvmk8ziGTg7cfJ2mK8UeWdCN6LX7uvfTgAHGn",
  "key8": "4BbQ2vLYQesEya8WmhWPocGTvbGLQP5J2bJ9j3qkExxianY5R1ChFhmKNJcSXGg1zMQXAdvfiiyFoNYcfxK3Bd44",
  "key9": "5kxJpmwggkW3DJNz6qj66zP6FhPJjT2Z1m7Em3xFoqGxduKPk3DqFA54wob3Lcq7Kd3Bxadyqu2ZCgpWKJ8zy75c",
  "key10": "4gQd4ecdSXyvFVPAyj3QDuZ8svN6etKvo5WSfTyZZszYmyQWh3aGDgdgGGuUDjWGf8AXVujQpuyzXzULo6fqCFF2",
  "key11": "DynTxWLKnamC1mgp3fY9A7x5GLuExcZWVddRZ97DH5EWMQFxhoeQSbRkJMHX77jDQRDh7tSZSpVrz8b8RqXtyc9",
  "key12": "3w7bE6nfdHnkRHZ1SMBSRMzWRPYs89te51JJxJezwXEtCQ5qrSaXpRQDbQfXb1a9CRq7KyhLUu8xJzWt3gsBbJUm",
  "key13": "2iEWjtgTi6xtzxjK6ZWx5pBGMNpNWdd8K4aBiqheD8Kv9PQQtyLNJwXrjqiRdRDYCw5qowRhh86eYSiLozkg8p3y",
  "key14": "3x8yG2yRn81aorGm8aFcrHAJtNoASdkD9TLtJTcwqqqsrfht6ahNZzRav5cJNXdaT9Mt5EnxM7m7njcSufe1ntiv",
  "key15": "9Um4Aw698PY8SL3RdJonaPVFFECDsvTj9HQ6T3LLwR27dZTPzQ52Fd8q3fH2qXyujVvgpLLuNnon1u4MwCqvH9C",
  "key16": "3TjMeeKo6bjqr3XGm2G5wAVkToUKE42bL8vp7hNaHrY2VCJUxRzukTtRwA9uMp8rxnNn6d5UepYkxZWpW6vasQfr",
  "key17": "4HRVat6JAjLX8vzKitjMW9qfGFjXKsdhx9sq9Ng1f2Qnj52n7zuMWhR5GcpK84oUzi3KiYZtLCwDeBviVSu6guxq",
  "key18": "2LaE2sad8Hao7PMGeqXZRptJ7rLfk19tHVGQSdtULcDv7R2jGT5KHs5gHjdPjwWUoqAamrH5U734JCDZbxuRQg48",
  "key19": "5PgBcBiVdDUJTb5k7kVLPsynC1nTS5KhPuvz5eofivgr7BwMzbmmbBVy9S5hUr6m1a75VB9KU7tcLVXm2pLwn3Ws",
  "key20": "5qRayRLzRfPmPJwjvziw9YNAcQ1LNr85fb4cs5m8tYaGeNC9uU2H3ALAUfXn1EVocFJ7ompRT5X9FZoBBZXSbnoe",
  "key21": "2ot5Lkq4vNXMsp3ayMHm62rPCeDNgB82H6QFKy3SPGDVx5NPwhiKQGBpvfbzMmV4veMUQJxBwgGYaXLSbFwjbZgW",
  "key22": "4mMKhQpg1ppQfmmZUVGZokS3gpudUdoMVy5QVdQ2Vhfg9bLywahm8sFzzopSJZLTdkHzhmpHzHTwqPYdwUacbTuv",
  "key23": "5tdEntF6LXPFcrbeKn9LrTdDaBvY83Br21RzwwKnhmfjTMj1AuGNcQAezRtgMYxgrGq36oGnCQ1vj1ivoXEJ7jag",
  "key24": "9GD2uQBVCw1MhFqqisuh9EmfATQN4NhZagkhkmgGKABn7ESBX1MBZ9XuRJVMosQwA97GojXc4WcTVEaPvmey3oS",
  "key25": "4EbtK2pmKeFFN4wKfQrBfMYFdEos9Etuu5vn7BpRor1ZhT6kRvH4WHT3Gv3jgRZmVT9mMZVzxZX7BpH3nkRTVi2h",
  "key26": "4q8CoqU18K6afveEk4BY9hKskDGf4oY3r67J9eqWGCxh8EP67kQYuzN6HbohY6S1YeNHv4wj7KcMY4JDYtadXj5D",
  "key27": "iCMUAAusuYuZvAZTLZMSxZjW2qGKTRxbkqLEFeVVbR4NVz3PjhK5KgLJDVsjGq9fVeUe9M3t6SBVV8htFBREVqg",
  "key28": "4v7LnKfCCEEfCyFCYjkGdZsdc3MFFhPtjWim2QjbzKWygDnf7ujVdHZ1FaeQo2drSTKS69tUVXhkit9SgcRq8eKp",
  "key29": "42WAasty62xfQrP6beEqHs82JXRi2qnmyvzAUUDBY5ZBJ2GNeMimZiqBWyuhjWYQqMz3ztrMDmjJG4kMhMgSfH3q",
  "key30": "65WhxjXXZpEDB1qeAhVysiafT1ssa6siYuK7oG4UgNRvrLWg9ok5iosoP7B7JvxkbyUAf96VtshiPMc7USezCBFa",
  "key31": "rk5o4pD6oyhGvauqvb1sGPFACCGRYH52MAiK51GYUH48xPXPTEVu8rejtTPNX48JZXCMYwYVhwDJK1t7yajfyFU",
  "key32": "27Qo1t7QyLXH3q3yQ9RSh2srKswarQaMiv2vzTPJ9w7uW41BE2RGmLNjT2DS2zKDm5mi4ooRtCvpXe6xMBD5FQ5L",
  "key33": "4jXjFmeoyQRAYDJR39LbQb8zkWNLT1RhqnEmrwaTnFMK6RCqmJeREgYFjjZQu623rXnHzWEmJ8S7DDguQ9LaxjV6",
  "key34": "52tnvS2Szs1VTivwfz6zhdfXVLEBuwrFXUx336Fu7iA4oe8GtgPKz1pxkNQW22R9yCbJE16b7BH8qtEoqE1v2gZh",
  "key35": "4iA7rnQSoz6csxNgs5hct55RBJXWQjwpWVHNbnbmu5Cmu34UiFguCSBaTUrU1byFu9zqApPXAmuXq6jkQVtAe9j2",
  "key36": "4PwsaznG1PmyQTf7FzXb19us5yemN6eoVAdqsjkLvgxkFfExhMYD33uXj5bHPCcacZ9Qs58nZXqMigbLDqh98j3B",
  "key37": "5D8zTkVHQXXoRXeEPJGcKPTFgPt4xYZbVqsf8NytxGvMfgpoy4eYFCXMyZeHLXFEkGYth3bHNFtC8ti1edE6rUtL",
  "key38": "4fQSsbn8HrnQBctwoZEKuHvySHDSs4ghB3waFn5YWoM3rLcrYppiJ89VeUrTrKXu3ouut6JLAmcvKTXii7Wg826y",
  "key39": "5tmUz1V28uXFLotWjqEkj3GrpgqX1Mun9yWawN4GdjG4PD3vbafFUdFJt5Wj5EJt4RiKXBqqiS2H2nj1FS2EsRzk",
  "key40": "4WQvbpJzhUPBvkt8PAasHAPyRfJQ6JjdjhGmVrJmojGwVV6H3naJZLBGJWwik4Avkd4ZibffXRzXPth6rjLDwxV6"
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
