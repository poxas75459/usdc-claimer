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
    "41dVjuJ1vpsg8UHpu2YhA6U8js3r1ZrgStwXdcxEp4X5gW2dMCQCp5Y7gseSHU6MukbtxRfU8xnJ9Z5ZWfGCp6PV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gf39YsN3DSskZMxzRTaKs9c9uMTpb7BLE52W9KD4b2tzkq7E7Tp56Ly1wMjebeNrfDkLXWRFAZpUcPXUUfQ8SYN",
  "key1": "4MQ1WsfWvT8HjmkZ56jpSKJmECz6R9PYGdaEU9n6Vo4DYuzWLnyVZK8yMu27SErUaDGZQtbNETnjnjT8EzGz44Hy",
  "key2": "5HW3BMMd7VSwt1gRYXB65kTPsvnWVGMds1GCr4R1zYDrDnCkemNv9mxnmGPUxpMbKYNjMdf1H4hWhDUNAZdzGkp1",
  "key3": "2tw8RXJG8J26Dv8ZkthBCe74gYNVDpceNoGmw6CJCqP4mdTrcW9Ub3vN4zxo83xnHMNXzoF8caiVAQSBEpqmP9xg",
  "key4": "2w2aqoKw4J7fxDGkek3Jakj1n9kJBWaB59xDpQwncPSfJtLhqY16krYFB37KvKL2EKYvyuPThNoC619jgn7nFAiq",
  "key5": "xKYucsQnrnkC4p3rCTXgG8UDXUkTs8DwCsyxWcVDgF5mbGw62L4rHkR4ivi6BHLeyCA5UmBx97bFp7EtLxc4j4r",
  "key6": "8TSrizkwp2Vy7oF8X4WA8dLgS8mvBYm93DchoSW9zqrVRCsynaySLvsg3JCAEsJPx6XvdCzP2mGLagNJ5Tozfux",
  "key7": "2Z1ukUWHZRBNjFUMYfZaix42n29vVrqkxsZe2TrhQaA12EVxLbFo7KdgsUjY7a1jGYsrUMusfNiubwrkY9YBvgSE",
  "key8": "3y6ACkEaxKPfsgL2K1cEPE41UomCohaXdp7RPFtxTWjJU3YfjXY1eDNwXAHdgMeFUh8hNppguDgzuSmtTsSL71Z2",
  "key9": "4Efe7MhRKNZtMHAK7H8aavwXK3bQgvxS4K8oShutmjMy4FJFbcBADi6ZN9LPctzcyEbE5A9ZZG6V1rotzaqRz7AF",
  "key10": "3G1rKW2EKgTFyXPT2XfsDtuGaMp7kiBeGhhPxKReFzUZomND5nyg71sLcjyCSdt5iXKbyCkgtgWoARy6m84QKKRM",
  "key11": "xMnkd2Uu8PsKps4GTEeHyeXxJSGdqid9H4jF7yZq4WJXFjypRdd4WJep6GSmEyXiQf9KwrUW119Suh3vetGXVZ3",
  "key12": "ZhSHBnpRvoS3kzcCmeXG9qHp1R7qGSZT6HrgLmSAAx3SX95LvYXJmnxKnEnX6JWPLKVj18MU9N5iRgs5HFvvH3W",
  "key13": "41f7Y3ht2Tw4GbLk7D27c7wizcLARJkgp98sFBJPjmG4cN8vQtqLRAN97TvQupauSGZ3VwSjHY8wt9y5vysZJ8rD",
  "key14": "3NbyuC5AA12MCXjKuKxbcmkp2BeeYqXzVAddf754YqPeHwh631cQgKKipahcX5aDiegFc9sTB8oX1Kp3eXqKqo17",
  "key15": "2pP3aGVU9W6r4qZKy1sx3yWerMzjrH2aeRaQx6icuaH57nsNRzyGqMT9AEH9PSyYATe9pMKiLz4dCsnJz5p8azRA",
  "key16": "21TEXPYHTXuGTCuReDZ6yxmiTTbidsERNyCD6Neq5wVHrvS3NRePCez8KBUqHMXpERr1bZ7Yzf8EtJ1wEf6YK1Us",
  "key17": "5LjuJfhxixrzNGFsL7WQLzBM7hoUpNfoZ1jaw4DwdaRY1XufAhC3QWbPaoZSh7Vgm7edCYeSvqKoDAKsz8ATrB4f",
  "key18": "3iKNBghfUjV8ZUnD2QdjkojWZzaCvZyZTDv62RKuFwiLjfPHZX3Ddu4xHwUDsHQP3Uhnn2FWZ1a6e3NacYPhtxWw",
  "key19": "3oAUpzSFPqxbrhZ7TG2jg8d1EQoBBdJRiqJ8JznDQ7GDvRVkeABUNNiaAQU3UnG3Kpy6uuUPhDiwFd7yZrqYpWkw",
  "key20": "4d9Eqm1hav8TcT8MwJMxcsKgwjwcfxcrHenpckKwag21UftN3G4xqLy44UJgiahBQEeUPTJjD32Fr4ysYEXgGr7t",
  "key21": "38yNr2gNp2FDRFT9VCiVUvrgPvgw56Z5bQeJrCRC4PrWk1bgQajXWWMdfCpuqJP1eQa9TpxjwRPhppPkDHYAhD2Q",
  "key22": "4svV8R9CHoJunE8kkcmBtDGDxyC7b2eGebQADTPVti2bsfJqoY356DvfeCLtTfsfPiS3ee6iNYHs1BFWFsEQp4ss",
  "key23": "5hjEgBZP8ZrkKdbRHmafddwYMW6et7VWdxus8eNMNFZ4Xgx92BKpe5vCnMo8MCGamLRdeyG5mWAewBapDwV7VUDn",
  "key24": "4nyLFRwaaJNkfhJaGDsamYPVjUV2AED2KRhfcPt6QMYxnEP4fcnEgQCPHofL7LZV7nBn3Ek15kpCwRQHU2XT1aeY"
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
