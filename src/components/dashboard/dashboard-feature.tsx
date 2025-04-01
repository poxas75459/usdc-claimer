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
    "5s56aZaushE6DyQMDMvYC8eCE9TxXAbNSRL4D3WWWVokC5F3JTwx4zhb5JFmvNHoggTmtEVpbm434zuqDWBCDyrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pCj3ScqC2uVW9DcUL7UatcaUPJCKsmJkZkKUR6pphJ5Ej4CEBAKMxnCQ6733z9LTvzjB2Qiej3pgLJwnCUkA6ew",
  "key1": "3szU5trQk2a1SJMDshzwmzBdCaMw7nwC9gPJ2voWdvmxcf8hS3hxAjUw8Rp4PTSjPwUtGdDKyCfapBmp5MQWFG4Z",
  "key2": "4Ak2UMPqxb4qB2gdcJ2aNxFSB92G4yXdMBoYngiZGZTcDEqUJpXuh9KsqLiroonHhrHKRg4wQRQ75gT1Xc6f5vXJ",
  "key3": "275cXcwvArAXN99CXAja9mgaCGpruHh71aPVw9sUXPjFtssPMdwqXftCZBNS2P9k76RgUJZFTzYMh5K3UUcf5Ubk",
  "key4": "3kkAf618nQqKvYLPhc6W4P4TfMgJicQtC77TefmyN8azuJ8mxfijNZMU5JZCZ16m5q4YAULS3Z2wgWPBAQn9N4Np",
  "key5": "28WMdUMBqCc8aSmhxxZde273hezetyHnvv9vTkZxMcNuBJjphXh13oVjoY87HLarDc7gQrgQZoq6MhphvEbu4X2G",
  "key6": "3pA2cck8XjcbqfosNTagzKboV8RuC3W1yudCcG67sAcYHxgxL8cn1PEA7mfyE1Xg4neUtEe7zPcFXNLUQoKJHe3K",
  "key7": "3MWPMQo8i6wf52k3SRZGsLJkbnZFA9SkmZp8AmV9EVcufVCbFbD9hUJeJVo6sy8sT3B319z5hLGz1WzxHoXJNwmy",
  "key8": "3ZekUXNeHG9f8xHkFVgAnHSRKE94Phy47Ypaw1mYVtoKnGAB6wTHyFgV5dZ55BoaQXW4dGQv9jTZRsrE7ECqLryu",
  "key9": "2Yet4CFSByjsZuBJ8pisM6Jr5rrF7s2KAMv5P39pnTRkVwaYUqEdVX8PWBptKnQiuKwwJ8ZFBpATQpyLVPQZHxti",
  "key10": "2QZwLgX5YhjW6rmiH1cBR9j78aPA2koEyyxhB6DPvAdxPq4NZo5ZS6ZHyaAurYEUTS51oB6RdQWErBSXmXmTNhub",
  "key11": "5XqAa4wR9nap5Eenr3gzp1ZX4cxcs8crGMUBE5Mw3A6curfYgXDtVmBGHQUQUHMjA8exofhVs7DeHrNuswqyvwjC",
  "key12": "2rnL4apVpBFjwb5qGrXDCEa8aY51surQDTZ1Ho1asmy6F2LZRspTGnNmkR371mXWkHQp7QpoCmDnNgPAvfE1QMaN",
  "key13": "4FfuofR5YCsognos9cK5s2KRYfsYpARQHk4oGjg3Zm3h1tZYqNR8FEaAaJFY58XA7mo3hhziUMTj1qjyJnrWXmZQ",
  "key14": "5CZCkDkhggrbt6cYR3Yv9o6KPZPxRGgY3v8hwbULcDoh6uxTgGZYDUQKVkxpJP8tNtwqAc38Tok1yw8ANRrKNUjo",
  "key15": "2ZyUDCaUuADtZqrt5R3dCfZcRUhU7wzdrjHG6dEvciEzxpSVXFtNxq1u9h6mXTn18YfZjEM89KZ1aEBxcAj6mygD",
  "key16": "XH6aGvFrUxoKvfW556w9H3rxC7Rqbia1o6KDusHr4WC31N4ieM25Nq4PR6Xgv5venHGDmiVPffNanyB7eLJEgpm",
  "key17": "4zYiv66ArEBxuAotHxZyGTpsdXxY7jdHLYy6a1cXXmmxGWBQWLqcCHVBN9Kgn2fxhRsrcC8fUEpjwNZcbEczxZZh",
  "key18": "5sZChCLhLRPBdNtN2M5B9aysr5wkGD4Fobq7DbgYRhg1HjmDTP9sA3secBNrjLBBuMeXUwfAxPqEzyAi5hLH8JtX",
  "key19": "6nbYX41PvnEyEZSLMwW1tgc6cKRPRFAvxMkwwB1KT33pCUz2mtzSQQwvTR8P3x4KoP8GMFzLY3sjvWzc88KUSJo",
  "key20": "37AFZDriQkDAZ9j1s75scEL9sL32rBMJvP7vfvRjP4KC3KrCaG5ZyExHWDYUZRPpjntqK1mg4WFP4EURJcTrDnqg",
  "key21": "5rDdy7xsaKoP6EMTZm9szAeVmvmcspsMmV1EQi9wbbr5pC1EHjzPXDfd9nwvEbJtCFS5THRvVwehpU9tKKBNUCzZ",
  "key22": "3zNFnt3rfFqzBqMkZuSF7NYXttRXFjLkhYT8rTAqADBFA7TMFPwTRX1esgAjh5SLLGG4NLgavqvJnoHGLrPrbcH4",
  "key23": "3HrBczgFrrbQYRMSp8UUj9vCKjEw4ao3Qp329kXSYmmsrqa7SFC8a1wx1ivysHZmEhLVnhcM1bhvCbqX6u7Zi9a5",
  "key24": "2cKh8EH5BxyqZT8r576he1zvbaCZhPXpg3HZau4eyq36jHUbACXWXUq5wNhoBwruqNNgDq2M8LXgA8wUVrBVAjom",
  "key25": "4yVtDnKbn5e2u2afVTdiELw269iEsePxdjor8a8SAkqJge4B3yNG766WjBpibwFVTKmHHA3t2is9QHH4BPA7sBHr",
  "key26": "2kU9wGMEjCzsgkFNqJGZreXGnTuXqGGRJYAKMa2ov8QHBb1qBmr4nVroYundVziYYp4iXpaJWTwkk65Vng6fEUAD",
  "key27": "4XDA2x6jNsKwAoJHfy4xdAGPFkJTuya9P7P9bdviFfHR9FEau6urSqEEzyCnpF2tKCbBWmj1WSouLMKet3DU4ib3",
  "key28": "2EKyofs5SyDJHw74Kzn9TXNip4EdzRpSP1xmCfqb6vzVopiyQxy7wEVf9ZUukCyg9cDFjzrzn8X57DGRfnfcyhJZ",
  "key29": "2Ltz8d3h6UGRMFSPK9f3Wv6N91vMgVNooMhUtS9j4e8Gk9A58aDw8aa6JM5M85JtEDBjA3JW6BeSDSWBi7FCk17x",
  "key30": "XMpbLZS6ZqkoKbXHnsRLYgyeC9qXaPgdwrUJK8znRqAmdiUDWtW5TD8b3Bu8GF3KimUUBTm7AZeXbwKtX9yLSz3",
  "key31": "5cSb8VtEcmS8SnivbXYmovqEuXKMfc5A2i2t1Svq35MijKAwD7aYo8YqAiBMx3PD43hzT7oTLqGrrj9RmaUc3mz9",
  "key32": "4NajJAknSk66v9QLhYgZMbQcR6JLw2sEPmRVvUfPqNnZ9zRqw9NiDCagbhb5CChAPWfek7LcvckCKojcPqz1BPKF",
  "key33": "3GZVTjUcRc5VA1bgRCwiFkFanZqxuVM4GqX8d65Y2si4jDja9cECm2AUjEGqrzZwWXfvLoDsnW4MQkgw4RD7FxQZ",
  "key34": "5TPPxTbwiqo2JaUakbohVr7v2Gwb97cWv8MwS4v7h8TM3UU9GwjRVPovjvkykZu1kPfrB3wBPn96YbTZAVevj1pH",
  "key35": "2v6KMBkRZMJhAKvG7oMz5Mc8RwWGFi2b6WRxc2xD5M5uZCZvvicuuVHc6DbMSaD7biGtPnLL2H8CnavqoBNf4bkT",
  "key36": "6KTEXKzgmsfQmCeJm1QJbCBVUGDfE7FR8M9y2pGomJgp1jGREyjTTkyrSiBbm3gRY2r8Q9U7seDAQxPPWhJcy82",
  "key37": "4ekSyKZCqkr2XLxuKZeZnd41GKoUro39qXfPXHdiJ6oSkzRXEBFym2hSVCcSkvsmgjEt1ReM4aMidgDTvxS5ksoW",
  "key38": "4BTQXZ36sdzm2GMyztCKueWaGZ8tWHQokMPqKjCLwbWzLDNUqSv24DztUR3F35z533nBddisThZgkNG7yvHamhHe",
  "key39": "5cRxLWXqJt78ahKVtFRrCsTna7MpS2pysrBywA2zYaQSewoNqwfadeuig6i3gHv2iHC8LM2DY3JdgEAMqZsZfFpz",
  "key40": "5Ew39pPaqnDXgPoYvwUNGeFCfm3Qi5NQekuLrVFXhszT8gXQeUBCJv5mQ8URLoEMacEmTqmxQzhcvsQqoJQDEMEH",
  "key41": "2koHFr8wZJ9hoECyQ9ZqRcUNsPH4GKtb2ir2ZchziiLb5ZJuX5G4mLRkkt3TuD9YDq5LK8qQR3Cwkou1rrbqEQqf",
  "key42": "4rWMbwr3J2xL1Db1uaso2wuQpZUW6KEm9B3Ac8Y9BKtzdXwUW1TR3We1znbp7bnevY9cp1rYAFKbeoRfDSsxmwTt",
  "key43": "4ywoVSfYiQBr1RdUbiNDptULjuXpP7fY3aMumjMSpBFTCeb6VwSnqAVgARH9oMoPyHyy24WVwzT9DUFGuQNqCuB1",
  "key44": "56wkELn1TBTDfFcrXKgjnZJSXrcBjAxbB8Cj2H1fPATbkZAC4Ak6YoPKNS73JpPyTy1CiGhg93Tno8JcYwxdqnUh",
  "key45": "2YWFwi9SttJGokKyfLt4KzuXcBTTjoRf8pMyi9vpiWfvBFeYH6VYbDxdK32bA7XKGthyWAMSLtVvh3eMcYcZuacU",
  "key46": "5SJFJHzYFLq2yNDmDbmzPjnrmvB2ZA2nQHMGNzhyfFVnoT9U4Mgu1FnLvd9kJJrJXwVYWAXKP7gD8xT18xzt6M9A"
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
