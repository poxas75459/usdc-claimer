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
    "5SArPYu5bU85pfvAv14wk3ywmWaAR7hqwpdtpfSnTdC5qTc94Z6FEDkemjcg1NvM2aEtFRnGrPQuH9LD3nZsDbxo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HtWFU5VZnH9Uhe4oX4rGYrQRSZqzh4tnvQhm5ugc4B3TMmQJUMjQtp8tF6uyZMcA6qHjoBjuDdjEGf4ZtHZt48",
  "key1": "3m43Ak1Vrz6ymucUDNfu7X6CrR4UfCBR2KA1WgawrTgVSWEHYUhPA65gNEteiG72pdiBrKMe74teT1Gh2KnFpsHc",
  "key2": "3QKBbX7zDN9z5WLUNTYFjYkPyrfjDtnnZQEBXxQF14hwtZXT4ogDQzF1JEaBmepVJnwTAsQ2ffVeSSLL1zzb5SZ9",
  "key3": "4PRbtp1JTNZztew8BHP8ro2AYEiMQJktb47ceyeU9KeKVhcpiZxcpkv2KEBWhc1GBcWvvXsqz9hSLSmhXywgiyHU",
  "key4": "63jV1UKBeChYSppFWjCuPe8asAWSRGs1Resp7nEWH8mp5TCHxe1zTSa3eWDaNjn6EvKoBuwh9rA8woHpjhspQ361",
  "key5": "3rFgNxjYWsEqNV7VsHnk19zEZQzyZBQA2GxVdr2mZpjfjUwSaYUq8PnrwDV2oNuTqUHbYP9zVmEd6RNo5pehLfsC",
  "key6": "2bicBPjRLPLr5GDpNoJtf8TaN4VPL9vQp7NajpoYtqpmWgHSban2E5nxTZdoXWGobrUugNg2qeBkEzPsZnhpa1Tr",
  "key7": "49WYHzB1Ke53w5roAwQq3kbfwy63rJkJbTcAMnyyx6gwG3TFi1HMG75rL6Ft7WJGWbqYvPWpygD58KusDwEGhWgH",
  "key8": "4hHSzEDnJgFQDEdcbLPmZPm9aG65PcrRfFv85VQmSfA7763NSWbw6juY5ekCVUrwvTcqwehqbSs3xAkcAxQBod3q",
  "key9": "3nNGcBc1KsUK7mkVGF8hih4qoUZyybVgBkPxznkpkkFNfJqR4V6MUcvuC8ybEGAr8pgr5k8AMiSAEvY6i74KSBGe",
  "key10": "433akZW2WLtGGZRBjp7t7Dw8F6kxgMkQAbRHkS5bTiKtPTeYnmZ7kTCU5SfnaXznxMtz91QYnwFqmMnrvpufhxUT",
  "key11": "4BPvvC4xANQbMcLobWs8hLMFViKYtEiEt1e9L1PuJHkVeYLndKckfKfpJ3KR2cbNo8x1Tz86WD3aFwVBPQD5kMDB",
  "key12": "4XjJbqhjHBKMxJq7gKg4BusQdaBGEfm2cU7GQ9nPBBRFdpzKkHGVKsy1sU7U1YX4qZCFKPUMXhnGrTcvQrAxec5j",
  "key13": "uBgnPZkbVsaMtX7ysCwFuY4DFDjF1VbfoAPkxRDkg6AY5mSukXqpQCArJ5J2K7gAJM276D4xaNEkvFtsyEcw2Y7",
  "key14": "a47ezKz8x6abCYvTwn6dLtAU56FY6yJNvV89GhJo6dPZgimdTAHifBdW4iwBikZiSuRKzjZ9FqTaY4wfbZu8KHB",
  "key15": "4a32i8BiPCnTXeNwuap5pwmd26xhZMeLcjkUMJ7Xz82F6KJ8bRtcYd6Wa6UoNoTjKkRCG4KvCsJS5dvayjqKqSF3",
  "key16": "3BWwUTesyWgAdtHg9fwu6UrjjdJ5b5QYopSoueXgHfAgUpENjrz3fkcgRYrQXrddmCwiLg2MyScGjJpXh4ZCDbR9",
  "key17": "493zgaSPWcUZG4nRYfL5jnYyVt1FzW4iD4haN69jL2NRJeVCysPXeVNTw3QFUhNFwh1684NrhFktVhFtBseuQ1RP",
  "key18": "3NQk891wciS9i8jL8VFe9vNqkgguphBEfSZHhRfENZeMcYzvXfVwajspVVYxcaF8UNtaDGfiyrsPXLtp9W2jqHC8",
  "key19": "3xbJ6ZWzwWDHuh1TkHj5GsvZpYqmbVZRLUr82JWb4HZ94zQdkRLcZfU6SG1AaZ79yfD9adweTyDXjw2bykEyBXc7",
  "key20": "49QCKcQ8NX1mXyFQxL7uNnWxwyZnb2vaAHjCigsTWqWvpzwuDqcyTjB1PT9eUmbZqzT838EHcVfx9JoYbHAUEzNG",
  "key21": "2GpaRhjeACPt3bWYypGGLzX68Wiefj3H4uZUUgfz6Psbkmtv8bYEBo4gPhFVJDChdjdeMXV7fTfi5LsX5iGVJSTg",
  "key22": "29gykMffnJTbSSJyi9KDRDbFewg9WAr3DYzUUXBXFrS53wH6GrGSFGx18r8Wojr2q3T9aiFJzYcTRis4abvkMVW3",
  "key23": "2JjzHhRSbeQsLBnYocryuZwxneMWm4voCmGtihmy5sxXD8vVxFA8LVpb4FERUbbSFfLmDsHBVwHPT1mmNp3S9GES",
  "key24": "5895o9TSqWMPPtsfx1oaFopsn7nXefCYitk5fz86y2RyuJ5hQ3GWQZrR2EZTpYmuyok8jDjKukqC1x69e6w82Xmk",
  "key25": "3EeiX1GUXsD6S48HLS7dPkPmYC6FX7euYRWtrsTJSmijnNpvmoyj3JDdnsTSzVheNvJa9hpE6cY4CPSqVA6D5skP",
  "key26": "Nmf9vD2axmUDHEZqQarepoopUuSU42JEfRQwBWDjMq7D4KeBuTd2nG54zoyBc9ejaEdakuyAjn1CF2thqTAuuVA",
  "key27": "3jkXCCuLD2y7GQ4P8sbiG9JgyoRxyRUPdrWLfdLJBbPV6oaHTonG7ambnTnq6ZUCbo7C3L4Fq7ujxqTE9rDtsfaK",
  "key28": "4KQsUUdkGAZqcSNrVfaLdwCeFhNuMehwZ5ZBjyqS8d51dKgtBdn1x43jiKhG1cD7fwsXA3a6XYuxQegnNV7VK51s",
  "key29": "2cMVF2odGjgofJWkN929tuuRXb2JZYdNDbdFc8RU5ceSqDzBHQkhYZ8QSDZffpQTuxU4QDWAe6S2eBQ7tjvWUqup",
  "key30": "29N6AGfghbXovX5HFaAdiGTuBscujA3gLLqvUqhwcc2ZsDJXhpzYzVUJAVYKSGCYXNF1Y8TyRN2NmGMeSzmtNYRt",
  "key31": "3CM4ihidobjsJJPqHaeVo9vPLS5iP8m1MFSTaq4BZh33Sqa7qD7ahD9JvZgTVtd8MxiHhiWpkeRVPihetksaQGu2",
  "key32": "239cnrRb1wDBCqZCpTCKwFMMWDaWZ2LzmBrWvm2HQqfmvNWbDy6h1cArNnSeDgAHy2V1cA5LrUiET9YTADEzgEgf",
  "key33": "i2CiPtCNvt5HT7Vc3gSFVLZm6jJeW99cDmGQWS44p9GBwo2wm2od7zHFPZdc63mSYyKum7yp2MyzkcGac2caZJA",
  "key34": "3FsgsNAh8rrH2Hyy3DpMaPzTvErV4mpScWd3toskA9byvBEXf6rLBQDHjBGnTQgPZSdkPQzp7Ufskh5Gvjz9T7iF",
  "key35": "42HW58WEugNFNykgJN1RK3rB445QjAXqU1nT74WGo5CBiVZUZSj3etwf5avnohtMfiwfKfToh7BqhSswTVRW8AxJ",
  "key36": "4GZbonREsEwuxQz4SCcpGrL4AqM95CXeZL6cAQK1Q1h5A33jAwTcG8SrBZfwRNaUwYr6WgemHdcYt4xDuCtA18Jm",
  "key37": "5PLKgTPszfshs5VxHL8ZzzQhZhDJiQvGPwjcLyd8vGvCqZRi3GBGEbj2GgoqWyPxKNcWbKd7stToRdrMosFxLBiR",
  "key38": "2WzovUAx9CZT6Au26H3cskVicedoiecN29Cr7YA4i7AHAPk9GbM8T28HCsLAj6G3RoZGgaXsMnpx9JqirwHo7xH9",
  "key39": "qzt1i18qyHtU1YoEa5dE23z3SQ7NbgMiWhFWMYfmYWjhVQPXz53CwtLKei3ZKWowVCW4dptdpAfFRxyBhhuaDL2"
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
