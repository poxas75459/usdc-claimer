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
    "3VYFfpqptFjRLkgqspEqpHsK2A3MhtkfKuh3GHnnmg9haLHzF1CLFSGFAfteDUU3XEnUZ57znzegB5qqWw7pP8S2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtjTBowxAdqHxV9pZdCT9NpjWxYLjAZsiTXwuyHJfTuqtvmaXTA4HSVkSXDZk8KHpbNDTEzSf3W1E72cBRMaZPh",
  "key1": "2axbWqdRGMMDFZW5MUo7mbM9dBX5oiQ5GHBifR8oRQ6pnD7ohLj4MKoruxfZyqQokZdKVW8rJBarntTkn5Yg7TQY",
  "key2": "4niVQvNZZ3ypMEsD4oPKYM9HZmXW2X5ijyhuEN6J77RJedUecAefuCZt19jHCj6Ch6zgTKbjG6Aem3RC36rtJuYK",
  "key3": "5h3yvqCd1wQsQUQFCoYA79FfziEGxXecDSuhQVwFjYzVREJnuwFjzG5zYia6rZUDGQpfpTgKeqdpXE8TBwp6rAjd",
  "key4": "5wofF2VYX66PBbKE1gYrUKj6EA8QyHhGcU4Y1rxsxebhcLWiSsPVLDC6DyKj2wWEdUkA9GtYQDXRvVStCYuwkYfo",
  "key5": "29WKcMgGnfZmx3PQttafAywPexrbGVFRkJ8Ch3xKRgkiX5G6Q5ipz5KUMUFub9fe5ckgbdKPA8JNqnGJ4DSfT6Tr",
  "key6": "5N4wwcYtoncfTghDxSU1wP6KHXr3vKEpuzkNJ4iAu6G5PdL3xahkBMn7pL8W6nvXokoteGPaVNtx5Z8LefMRWT66",
  "key7": "2hssNYC6G5tZnJxC8G1otKKvS2mr5FKMBUVUgzxS1c68hdfmhgRE9Vf9q9t9xJbcrh41J9aAsfRJAxAsjbxb1CCU",
  "key8": "5ayjfSp4kQBdZbrXWuuJQCAnAXuBNfGs33C9de9LsSQah25j3cSxmbHvf6RebwAy2G3yQBEokG8QA2ZbDnP3zdJT",
  "key9": "25vv35XNpLQY3T7rxFSA3YRTFZg9kmj92tRzWyp2n4Cz5USKdsr6RST4HPANcJ66htTvQVpSKR7KQYzUj5ZNhQFm",
  "key10": "66vAAUdv9czWHkJvRKx2ar57u6HrCTKc6dGHkL1itfF4XSwQmjq6cYLY7VzjfdYVToJEWYWnJV897J8htvetm6nM",
  "key11": "3CzzN37zqGTJ198LnsUWbyKLiVmQyMWhpoD26EL8pG2c7tHANJJ2eyg3EWPfCKjTmb538zbmdqVko7xR46CWbkhn",
  "key12": "ENC6SWgnK255F11ESmevMXketipEGYMPXUUNdQXobgiiS3RWhMsqg9GLLsX65fMSNzroTfg76QBZSZjjoQ11j6t",
  "key13": "3ftgUuBMmQWqVFfnvpizXhQRaHoxdAmfkyLY6xzio9icsui82AZLm2a72A1bx4jMpGnkXHuXG4maPcHFT9Hc1AjL",
  "key14": "34qHzXpyV1ZicNrkvWscT96wEurCU1eu1WMZWt4kkASk33oiFUc2oGhxTTUSPj7GoC6TiZc48wA5PrfS9gDxpNco",
  "key15": "2KQC9j7NkKwMhjsQPcKqbdmmpeZEkkbF3KdJKsqqeugSESPoh4tfQSJy5KgXMshjmmBvjWcY8KwtyDQV8u4CkMp5",
  "key16": "3C6J1rivj5LS3EWBMxz5CVQqL6BBqP2equZ4JeDjBSkXCwTm9Z9CrKWggoJLhd3yZbSUQHZsyeaBctq9g6cqARMe",
  "key17": "5UT5ZQmdyzPhyT6FtvLCAFNuNtr6XfTYTAL3Kvnqo5cadSscNL2NL8KeDdEfJVFb76DhHrhHRBhiYqHQcQV28x9j",
  "key18": "63oKnpetUFwtLzo5QwoRMHwNFZNzftR8T1Jwa8TMptAP1pnaqs2n5RLvZtCLmfJD7ZPXocZCtb17pYSSCiWzh7Vr",
  "key19": "4cWNxJYAr5nKsBj4mJVFZMXV8H2LbLGDQ8rNix37n9Nb9tj82gsZmgzKunCeC3mJbGJb2EfHTKBN1qWgujps7dEu",
  "key20": "WBbct3ufvh9sB7Xz2g5fL93gc8wpsF4FrwBh2JV4c2y2U9tNmjNJ2JWVce99Ra9HWZBom8ULdz1rJQ3fggpATTd",
  "key21": "3uyxMPfJCpShtP5fuJHbCHbBcFmjgwPTfCQhjmU9uyWkdX1GDMLmZdAAbBM9ZYFwQ47H2T5zw9LXAkaziJSN51Ea",
  "key22": "Sx8apnHQgirKjsyB6iXAP6QBeuu7mL5g8M7QWvcF8pFrEHbSqKtxAE9iP1er5NDMkbm1Hv5s4mFn4cMUWsAW4dw",
  "key23": "4qnpFNkow9dvW5AweXfb4ccnY56z4QcDfPFYv8Mx9EYYVydLUue4k7vjieSYvCvra7WwscH7CmSqxoqkRq3XQhce",
  "key24": "2SRCWkpD4NmYu2jN1t1nVJ8DranMZ1PBJ8rvBNDgUCsJ95JeJW7Pix7vvxAPCRu1ZGuhGAycGiEo74YjxaiqNaSY",
  "key25": "2DhmsvsJfTVmKTa5dB4R5NE3B95F9D2RGzUCBzWWLfcLLY9zebgYVokGDNWqemmit4RjkeNCvjqhnpVKw819VGYi",
  "key26": "2KVorreyoW7Ed8xmQZt2om2xXdTPUaD8xabaMgU5MCiPEueLQxM5pu7nXuCwEqk4qWK9wAJ494KfhgqehYiLSFaC",
  "key27": "4vZD5ZnKi2YAw1hSfN12fjmoSRb1TJCQ6pbCwC8N3LHiw6y9DB8zKN28ySd7VGTRvGeudzHrMiVitvvdfYzUpsBP",
  "key28": "5UKTgBTPyeg1f5DdKLGQp9C4qjx6SkuPMFiMvCLJfADpSJ9CAoKuzRJw4GjdbZt4oDjcvvsn1ZNayUBLDf1A9Db2",
  "key29": "5PVbsTdmTk18FiDUbnxUQPWY5srTjG6dwuPSCqxavTm9ayZbi3U1K4yEzXHriP7c8pMC4CvyfDkzLqj8Ycoj1wAP",
  "key30": "61EJ5E1oyZK4dVibSas1HF7bM8r88v2fnicdAsod7PLbAyf6hSfsXYx7met9bV64YdTyWbsyW2tpyEJ6NLRCPTaT",
  "key31": "MWaVieWM8pp2fqmF2cdu6Go1PPM4ER8Fis9H4bKN3ry4fXs5fGZvN1Sf7LHRiSXNujjzE44y7AhVkyByTZn2YRK",
  "key32": "2vUYZUpM1akc9kpQfXWMknUp5QKBMmm3PfRxxKWQvCKzzHbbapgAhsH5X4B1wnMqL2pzSGfGJi7eKVN48RKvyhe1",
  "key33": "4zk9AZ4y1CZr7W3QGNyMtm2yJTRE2ZP3sQojyJ1ZnXp2acZWfGULJoSqxpZBDxFHwgyqUWWo6UPcNbGYBrCsbJ4x",
  "key34": "5mZpxxyqZLkFtsfLB8kzPiSKzbZd5yDLNzRQUpTL1Ec1jq8Qyj1PYTFhFRkoFPnsCWuz2GFDSbAEasSQ1CyXtNyC",
  "key35": "3vo88ynH5xCt9aP7ScrGpEHJioMExfAGWWAoywXcz9A1SQy19B7bShZemy71AAkXkJ5ymBgQp36xMoAVktXJvNwL",
  "key36": "oDq4N1y8f3eQiXZEAP6GsqztGpuPLTpfnhnjpLgj5fDnBB9hhUap6JTJ67wHt2REDAbEBHorh85enqdXTACf6BN",
  "key37": "2QPFsGujmjZSMcozF7W1mxXvHPkc8jBaMFhgt8hhjCi49pd5inf4TbGh5NAD75yHUV1reNVNdhdxtPjFuE6wo9kM",
  "key38": "4FLQcyiVZ3u2XjfgSFcitBcypodabrFUYk6SHXtts7Au6SYyMHT81abxPANid7tfXuoUhho8fG6sgbgTdd8vseVe",
  "key39": "3xW2gr5Rmz5pMVn7xbA84KjAck3wHVwh2BuwFjNF2pvQ4GcE6Bujohvrj1AFLmSmw6BrRffbmSrRnACGfPnistBR",
  "key40": "4MSDGRwbScRG9tTYQGhw8jgFKN3Cji115RWjXgTRUdkMGVpqbTyrPb5r1xv1Z5SPSa9F3964PzjdUpoQN4x8EHfY"
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
