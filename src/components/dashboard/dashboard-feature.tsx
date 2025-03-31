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
    "2kMYpqzDrQ3wJRh8LkffoMxPkHpj777c6Zv4vMyuWEhdPKLiQ9oKgTL5SDkg91qdohwbGVYqPnB9dbaMX624MTCQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TMqs4Z7GaskZR4Qw24ognNk2YtVBDEpfXgB1S8DRFLVLzX8GfTBV2S43QZnQqQ2mareu6WUXKqgRVg3Unn4tCGD",
  "key1": "3TooyteFB3m5sKHTkMNh4Eti2ktfJaqaHmUzgg4TXkuBBW1dTJCqWJ7LqkWuZy8K92FG2r8qmVH1wQUnxkSYJsn4",
  "key2": "555zKtyqBCzCcHBdt8xRxhawBV2NDRTiGqYHuhbtZnY96qazE4yvffEpqdRA9Xmb6ngG2Ly49769jhYcH7nCBwju",
  "key3": "4qeo9FRnC3S16mA25EAk8uzJtJyKP7DPcLjiKrH3iTLB3cx27SgEogwzhdzQE9vAW7sV8VTKXaKe5YtmhpFGMrz",
  "key4": "5gLJEGw3nXX4BZ6dba3unU5UCRrjRW9YRhxFXqioqecKchbhc2BmfZzSc966Gm4dWz7BFgezzt5Kvb4AUWffaN6a",
  "key5": "4sfKNyHXMNZMxaaw4Bqd1CFwacK97vBJuuk2Hm1veSpjBbn5sg6fnC6HCqZ2Hjb34EcuET87iksQFHNDN3MqtSyy",
  "key6": "4Z2Q9MUntkic6rDp3i2TR7tq5RVjCNoR5mYZHioRoPn9pSixrjsUrVYXSW1yAExfmYy4tmfo3Lhvwh6ua3nZCbK3",
  "key7": "2KDKC7pfnHMKY6LYjHj34NfFqvK6sZCeNY7r23PHuEaFJxUvi9wyDso5B2XwCZov65zfSypXLdeUBiN7U3J5RmVf",
  "key8": "2T5i9HmLfQuWZqmEunEK2Q8xMdHMSUJmbCvuY7yXjvyRu1mW92jjtsQGTcfdK3dULcZWT3LVuUGyGWQrMKgPUc6o",
  "key9": "rsv94yNrvvv4g8eKGPPFf3e4giktgTLjwo5eiQPVAjTe42kTZLfrurmxbjwbg2TxfRsvJRSLju1j4m9nLMkvq3N",
  "key10": "5QdMQYGkogapRtP7ArbEsrsFWhgrDJGQv11XVQnsD63utWDCnPpQQfTPosYUQD1XKhjB7PYMpkuuBicT8Bc1m3yT",
  "key11": "EMh4B6s2BuMhKUhpmKpKeYMJXnXJb3AQoYjRJasQF8JJiEoThLZuiXKy1MFDksKzWS14KgFv1MsmN3LvhJoWAPr",
  "key12": "48UongoFW2mcAZ4YkfdrKXXEjAPPLEFFueyvRbsX4ZiaWuMxg3iZZ79xHPRY75MEnxMbi1SyLoKUXrYrGZF5HPEg",
  "key13": "RgNX2X1U8gJ7RiRAU11afi7CnfAR586ZJLAXK2yKRaMbESGNNE4HNU1kKVfmhV7CzvyjbAExsqggfEANDrHgJQb",
  "key14": "3YhFJGdsTiJEJHQiusPd5UstG6UsQrdMe1y3GRhmiAQTe2wPQKUXmsbiTpfiitAaUnGg8CxgdvDAVJRAtJXL9CFM",
  "key15": "5xNtYsuvkjiqpiD3KhZv5zhJsgK22MyMqUbvjcWz4gCAEESUFF6QXpysBPKT11g4oaW3RTie6Ax7GoMSstWR7nLC",
  "key16": "5h6PrrewjrhVNfwkMbSdVrWAA3obXrca8Z6ZvLPqKajWWMDERT3b4QynHmfQFVtEmgxmemwCY2BN8ezoG4Rh9t28",
  "key17": "5JoYxwVWcvtnugV2L6zGMNuhXx7oJ3soWzAJVVJwz7MPhUioshsox3U77Vd1s1DcsxYuQUXnesZnCiHkSGo49kw5",
  "key18": "2xnnoeaKffkfvvuLu9RjPTiZsLxPXLPJXSjXvS1gUQLSGip3KBbnDdxcEfZG3QJVrSSkw6Y7hSZDpsCGQSouXeNX",
  "key19": "53AkvA5rWAG9jEKeG2TKXTvVnsqiKNEPMxpC1yUXodBisAP6N9cv8u6Bt85vMz9EgwcjYUBWztyYfJMWHp8U4xZF",
  "key20": "5EgWnnHYeNxmrb7X8cc1msE17MizE6utnu24bVtsae38wdsaMV9eqPnhYRFNHjnbnXKU9Qu4VT8KdCVTEndQ1mB8",
  "key21": "2UFbjZY8nXZBYu1hk6u7Zu77CvVwdMaCk261h2SoLrsdRdKhZHJZ8dJMgJZAAudrNwKWXrNT8KV2QVMVS7zGy7qH",
  "key22": "26xUVp1C8w14Z18EQ7Etv95dR4t5GUhqBygMKBP67hdbZpykfnpuCUxTYzLGTH2wiqNiGqQxdedZykGEq6FT47SP",
  "key23": "4saPLZ6cVQZ94miHuWUJYDxUzusbe3LMwbw5EaKQ9UwQFQAoPBc9kPh8dtkJMGMEbHuhXyHGRKTsKjKybgFvAPSj",
  "key24": "3yFU6cQyrowJsSf2mMQyk1fAdQ8Gp2NDaaQhmMXaZxQHmaoQ9tw7SH4kdzWHRcaqESwAMwUrwdo4wemwAB3BDT54",
  "key25": "5adXEFSr8UcXvcRk2BcDXu2UPtdy6CBEJPxb6zAfY1W76BKzsLqgqrF1ZJFSyDpftip3eBqu5SQnbad7R13ZJC56",
  "key26": "2Z1wks18BuuvS8Zkg3d18wpzxFzUupheMsT1DLEFDVBAbW8WSXHC1ybw1DDe6oTufsnWkiqEWykzmSwko965UB8t",
  "key27": "5LFpQyh34W3vhs8oPBJEnUcQLNMYfC82eRdBEk92cBikG5JvAwTwhethHDgEvfyifTUXKF6PaKnrDUzyRSUBt1EM",
  "key28": "4QVBZL12S6NSt4a6Uv3pCMsKhKHz91crpkEfNrCp3u3PaTuBHrvDvqbzn9yNEGC4T6pHatSfbsQKPWCiqtoXEYVj",
  "key29": "7n7kkVNHxi658fEsHqLFRmH45rKtHG6PGiG63H3HPrQVox9DHEAepWNsQHi1LvQQZv2w9Tf7qrFPBjwYQxJhv5t",
  "key30": "4BhHx1mYnCkyUeMF9QENN2dd1qegmjM2DgJrney6WknTH7zHmfoSdcecwT3Scidf8Z23YKcGiPQ5MFkxqihJRBvn",
  "key31": "5HqeiU4hWMw8K8usoW2BwUWN4ZH5ctbbY2PC6k9myGrGgtqUKU77av9MgwmquebcNN3W1b3P5iJPFziWoPFWcZnC",
  "key32": "2WC3ioKhMqdYVagzfNzdaJDumX2gvxYHXzpQkfJyEM9TcMjuGwmF9fP9voeMj6dv8rw46mSjCKEJuPCkW2mo5sBD",
  "key33": "1eqKy828vJ2R7csXbdAFQBxMXvFQPF5BmQuhihNYj2SqjMVgiowJtdZVCQoKGnJ3vA8sD1Spo2bvMdFodCb8w7n",
  "key34": "BRM6h4mgCaZaAn8HkEeHBmruQQvAapnXf1BbyJq8MXpcsyPeVWS5MND5sAUPG1m9y7upPL2dfURVMgykmba6xRg",
  "key35": "2FqsV5NrPh9nzuumcB5SZr8p49fZcockNqwMo1ocid9crrjsYLfPsESW3FoBSYu1C21TPG3vaom1qvD8gXZH9z74",
  "key36": "2bvx6ET4WdsT21kphX95nVubm11tWgnWnXZrVtVPG3hcJgcDDm4FYmoQ9cumL9Zg5nNnDKBiGf3tfiM5fb5yWgKx",
  "key37": "444mu6UkaJmVimmm849PSnhVrjapWnWX7RuyNYHCK8pPFRPaFD4d9zokFoaMjF3qbAdcBa4R56HbxjU12Uff71Dj",
  "key38": "5FZHcpQjQfp2ocqKePRvJjCZa8KRgYvkbqE2TFduTYWTs3bZK1fw6WguCbHg3py9z7j9SAcf6vxVkKYnCsQFvQZx",
  "key39": "4kzne6PUxq531vAA2RFEZSTy6EP4m6uxQoN6KQFGndcyNJrXHnNHry7o4uG9w5ncHBUjXJYFieTRHZosMy4e5ebn",
  "key40": "bPFMW6gSpJBDxepugDdN1v4qK2fAxY5DbghKvgAdYsfx3ujFvVZVkdnA3yKgiTtaexf3S5siVZAFiMmZ4M2YmmT",
  "key41": "3Q14NHUb6U7cUYd81vgW9L8AZbK61pJWez62VLctENeRjUQqweMJEYsuRtJSMCd1rgpjXLdLk4JcLvYFaV6HchVN",
  "key42": "5xaKubaRDLgVPentTFbnxx1ifsvC4udxrZrUJg73SdokgVBkD5gtRjjcTRJqmgAEQgXGi4DL27HfZEgDkbdWUeoo",
  "key43": "2Qq1eDfBXS177CpbATsk5Nvd5bHU9QQXzjAnneYcG4mHcYtQyw79ywKsQcQhNXWegoVisLUtv5sZumvnK6kFJfqY",
  "key44": "zc2D1EuntHn5wgg9QyxZQ2QUtyeNPWvz362viemSQAZknnSAmcYTxCbM79QYYiqPvjLYpHn84SB8bPdms51Besz",
  "key45": "wn7WJpLGEgKuQ7bUBUendNnrinrbE9TUvSdiDHk8KSsXBX6rjSJPp1Cx76ty3A68RZrwyjkr5xz1AYPfMBV8rpD",
  "key46": "5e8h6b2u5TYzE3D7qcxneXgJfrss1dnmMcBPipB13mgEDU32H9uu5RZLjs8vxGL3w8mJz4YbVtuBeTRZwmxSM8wX"
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
