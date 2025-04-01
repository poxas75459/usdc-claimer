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
    "34fTYFG5hegSbUjT5gPPeJpNNDhhTe8M1JgWUckWthqC4QVeLPC8f7XPrHxSn7dcE5jg1q2anYmb4Qq5fKdoi9jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NaYFFM8FwtEMEYbPd888TXoKUoLnRkyo6CePyS8G2Kdj6A3pzsNKv5oTpWPUy9Vopwd4iS2MewC9PYT6NU6xgLg",
  "key1": "5W2Bva2g8t5RTbtWsb1Kofnoa5oEWVnjKboF1bQNJ2KKWr8TpRcSPiRUYw8uuypNn2Xjqk7ajTSLUqChaffEz697",
  "key2": "27Ldq8g3TEs5X3DKfusRTu7rgR4nkVR8gGkXWG2XEEXSGqvo2TzunMzexToWKqg3EahDgGH4674yRLfUgoRrSvgR",
  "key3": "5xTAaqqYpBfmNSvmUb7jqxKE6ADo9g5wW6bBgivPMiG1cDkCnL5K8RFmov1BbdVxu3VCgocUFGVKH8MrqZHhwHxm",
  "key4": "5mryNvKzZEWjZtDeHYsTFoAFwBGZs7y4FHxoq33zkPzRuqZSr8pNyLJPxK1YdxWHSC1nimWtiH3QAuj8xqB2tCAJ",
  "key5": "5acRdoYH5cygkowoDBPr9E9pzSevjPxS8cePuNfDauo3MQp56gtjjvJVPnvkVXP7b3gdMP2CkxDDb6HHtCeMSKeE",
  "key6": "AznVvNEreet2142n91T8SoKB6jBw67W7CUwJwDnPv2EdbcNzh18hWvyqhx19gRgMB1pQc835fhi5k7uMY4x6d7u",
  "key7": "5WbPDiMw3sAJi92XUmqguTLUnZyPddoJHT4jzDphWN3sK38i9MUeyk6iWZnLciweicfcvM4SnMM9kcHTkRL4esbv",
  "key8": "zfxStzFT2AM5k3VpwBsJFGDySURS64n9C8sykNXUSYwhXTu7RDt69agYVVpYXZFruP1Z89Up8ZRLCpyyDK43ap9",
  "key9": "5z98wtQDcjK1mKWCvyq9DnVQXe6ZRgMrWMxc6D84W3hD7tXxtEzV1siYiTwqu2S31e84qD5ZnSHjoSgMFNoWfs8u",
  "key10": "3X25pXfzmvgZQstAZ3iMiUT9fnSyc4iBg3ukTtSttqrWDULGEG3f6XyDpCJ7atGwEXkZ1UcFR4o3h2mf5JxgzDVE",
  "key11": "53UeFuH6bBx1D96Z2PW6Xa5w6a9Xzs7wQcqUZcBjiGvo62GCC16dcyqUvPTfH3xUx4xT9379UuaapSqHiiYUDHRN",
  "key12": "dG84wToMQimBwXnRRrVWJJ6eCd1X1UitSFKLDRbU4VVsTn5x3rcR4K616CH4QhweYsqRxFsDc79PH5qKLnxpLjK",
  "key13": "ZahysLm9AMhHfMVjJ5CPDDSx9M4oWhhrJNTo2EXEumKpUWCKCTspcJF6DDA5Xd2PeK7NToVxoBmefK4Dr8knKA1",
  "key14": "5dUmeUu1TrqjfgKc5RWzdzMDwJGeMREQV98LW74PBmWw6rhharktLtQvveKK5oU9UbTs57Yj92PtAhLrpVJ4xrV6",
  "key15": "2hvWYHnCaiTQ1Xwixo5tygMivTiwr5B1737K41G7W1TMmH7mDWfb7m7nnTrz5JLYNqcnUgKrp8EwMRWwTLJMfgju",
  "key16": "5rvtHXRQfhdYo7SNTuknMLqbiXFMBvagLrQM9RdFhUmVUXwZLhNdmv3zPAUoNq3jJ1M3R44czxiSR466QGMiQUVN",
  "key17": "33QkRkEiZcBiaMs48mH1A4aVUc1AH2H144X5x5ZNcCWzq44qUjGUqDJgsw7jgZQTzWUty1TyradSUKVWXcaSexhd",
  "key18": "3Pkt2MkTTiem7hyd4Rywvh3YHHfjhQBeBuTcmh5dnX6KV4z7qdENd5UevvirSW53inzQcff6BFdVK5CS2JBkLqMD",
  "key19": "2s9AzfLwC7p8QczV5Bgd8ucsM65Z1CZL7LNZGCuXp7q5gGXUgwy5biXjeJwX3WNe9eH7rqSLykmrx82tx8MUvEov",
  "key20": "gbQX3JCjF7Ugnj585kG2BtH6Bka7jDu7K9TLYD2xwe3Gq4RdadKSTtKsN2fMrAfyJ9iKEbv7A6ZesjAuChP7fbo",
  "key21": "3D1cYmHoSCMRv6oMNWviXF35sQEDmTRjh4LqfdHGVhpLbCTAitvTWEBE3N9gzkHN6qh2NiV6gG8KY7wykXvFbonV",
  "key22": "2NsJ9kEFqjhdefZt6vpxuE1j4zZtomYSao5Bks85yXnM2F1tZGsuL4RQFZv7R6viEhtNEbS6Q8HRJwvh9RNY6hnw",
  "key23": "5oPz6g32t4cgap72WBPkZwRa1gDsAu58CVQvDcEd7Kbz76EMuoUeaXHp6siG6t4SAmtUbJuu2g7zFm8xx3cFbJnp",
  "key24": "3C7MsHvxi3cW3wyz6PBqFdS3XYKEga1W7HgjEEnVid2V8APGA9ZdAJAw2o42q5Gwmbmpkim6zG8Xtth8cQP1GvSC",
  "key25": "32jQiPM3m6Q8tCCWq2kCkt1AivWXNMvGHeUcaGJyZHevExhFamkkzKqypZca6Uv9qLe9uinhUPm1aTAcgdoV1Njm",
  "key26": "2dQ36hzFoe2ExhcBNiRD8xsFcGVLSbUz1b6FXPMqw1EwHFA7uYVfke4kMANzPh8M9GaFcCmzvWHYJUXQR5nRidxK",
  "key27": "nEb4g6F5kA4QJj771KGBNhXnTR1EdqKAeAPEYRdkad1nVigrEWHnMUA1poFRzZaUQpvKrGSaiLVdRtvNPZbGosP",
  "key28": "3CBWG86wzb1b8Xxv43FELMoRT8DGkzoXosMxEaFSZGD1pAGucTja5ktZvUEXLp2o5NBZx6NgNKaXBZMqLaXcre6w",
  "key29": "487aBDHnNXyAb6eXqRZzbTaFecfarcxwtvELyj6MLwfwBWPME9QjJkCuFeuUBivfDsGtcuZnR3HMHyD81KE5BY9i",
  "key30": "d6wGLjPMiTwd3LaKhGRfYid1PdgjPuV1tWAoW8Mb5q2TCE1v4e9iB7uqComHZ5H7bQ8zvAZciMpVk7e7Ts4wFwg",
  "key31": "3nZb3X6qeZ3nTbWoJG64C912NsqxGjgtxczHxCksaUTAngjPxvrmuD5CPQ6F5KKoJpHWMWH5QR9n3SgomK6VLVGJ",
  "key32": "MZBZ1LsYjJ7i9eC9RUXycuJXZTuzC3oWzV828jNzrBHDiyUABwqwPzdzBtwmTZfMdZjA82Cvw329esN728AWU61",
  "key33": "2xNw7atrqZfAk5Y4NhQzXmb6H9gtMXnYV3sC5e9na87VWjSrDZ56Rf2U9JSQqZat4EtoJ5Ls2gg6dnGgWV6281d8",
  "key34": "5XTeTz9gNMUcT86sUwhVTP5mmKLSSpHwBLXvgpGb2F5KEsN5y9k2wWuMuhKENernarEqYgBo5WaeDsyTERmUSZms",
  "key35": "2f7wug3j6KATbC2ajs8vs8mB8z3czgPgJ89R1cryVSmwTh58XV5m7VuB66d1MSyCqibCcaV6UdHegJMZNkDmSK6U",
  "key36": "5wGAKsFDi6MdnfifoB1qaVdvZhCeeyvWirSUzJF6Tr3z3jjzsLdkKG7p9F4fzMNe4C4kruSxMvRTCqdojJ8XYthS",
  "key37": "4FmAbGqFcfp4PLMFZpSE8a4RHCQv97vA3aBckDvz6dvyKLEERcAVRx7mRMvqDfxLGi3CqMVeEKBFWMPAq2mgT7jG",
  "key38": "e484o4JGG9fNFis99saAqRyBELAGxY2J8sF3qCjJSqHMc1YRNEPeRASJGDRLcWeLcnLJuQo7cSMTncLZ29rHHYa",
  "key39": "5jntjpEiEn7ZnkcUDE7YMGEoWEeGuUy3DRXtmAy9ZYVNbZ2dPiV5Rh8m3fgCJxpgWk9U6canW5ZcLZUjfAt1kxri"
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
