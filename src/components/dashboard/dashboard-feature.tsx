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
    "RW4mi9NgVL3DrenDhXMe8Zn7enw7L4CQBFEjbuBxqN7XNLW7MSgeYtJnbpJdCDjDysNFsGGCx3xFsMDhHmULfwU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwYwcjpWL1xssPy7Qg3uv4KELqk5vWMgSbeh9NPmBTPddrpHXkbWDrJtRFzBPgEavGmSgUh3GR7AR3GUartAH8e",
  "key1": "2kZf8qBwJT9PKX4G48uNiQAD2N4UeU2D6cuQg9bX9pgx8ZMXQ6gPkP77YaWoMwAtaQRY21h3T7FK7vDwdGuGZdCK",
  "key2": "56FJzTpmYTNoHTC6SKuqVEtKqVKpR4s5u9oDY1DZtaQraUKHRt7tohbgiFD7K4APGQ8HySJMf8cEtaQHXWGRrJX",
  "key3": "27KMQDPiXyiQKuHpJ5CF7uZbcvmQDDSSfzURXpxjF3ZFo59uzQPrsnJzgyH1WJV5Wv7s9YFuhwehZyG2Uy6U4h1j",
  "key4": "2W7p9nmepoXZG9SAN3oKo9XokQgPnmveusB63LKaQEG8VRaQBPUwzk4LD9HPi1mvryuHtEqYYHKccajTxF27H9mF",
  "key5": "28t3XaxUk8y8SaSeNjU1z9iRgpGpTpNVyoTGYkKGjRdfcDmbZvz6L7Xv8ADFBgpDevX5VCX7NSrotpheeM6r33mF",
  "key6": "5KSseJeikzdxeZf832N4mQMEdk8KNkap7oDt8wtiddujmXGBSr7FXKsbXyPxjvfkMVYvp8vxpk5xNS7VZ6fCwCY1",
  "key7": "4YZAzv7VStAYwbFCP4DtXQSRwCjJFtYmHd46uzDGDGLLe1PqQK7wc7KAniWHX65LhPCgEeajRzxbyAp2VrPmGJEb",
  "key8": "4GtGUZ6MYawEagHJX1trVWSYdco1AjYTNYsF2C15gRTZURG8NUqjH3n4Dik1e1ZbE6AMRjcQdEhZ62CVZWRaA73H",
  "key9": "3336FpQ7FB9MZmtx85zqSr9ZgopN4HLntVv9zByE156ywtNojdjJmnZDfRVz1WCBm7ebf9ySnjyniV2EJPmfcS2a",
  "key10": "cAVamawjj6MVJaDnf8KKD68RC4ee9ZehkepjC5GgEcSzMgcN7AqKvpP86hYLtdQ9uZj2aGwFXU8YwMu6ZTHPH52",
  "key11": "aNyxqYiPM3qJ6jb7VyvKSYh6nsHudg5L8waCRcjNCBPhVt1zTy3SX8TAyYN2bx72tJ7xBtREz8AcxjggWzqa1NN",
  "key12": "2AeYGFYDvm3XG9cvyibdbx4FhNHQBfy43WCi8aLJbXRYDmmf7wLXVa8tLk5JvPQhLv1GtqPEwp1ScjXagNRCF96R",
  "key13": "4ojidtJSSZHCkujHW7dFLhhV2fuL69kVys6kKBDkB24RNzTzUDCNqKh2WgT4tAtagZifkGSr8WCXWezBe7ySa7cE",
  "key14": "3sAyUUzE5u2YDDHe9JoX95ozCuHWSKawSapxbejevHQBrQ1g7sDnKuk1CbPjFfXVp6m1x6nrRPpaAy357GdS2p5S",
  "key15": "3UurdTn9ZpGABcFRnBR9e32eDqizrEy5zhMBA46c4NLLWXZfaFq55oX1AqKDH8fh8JZgNPywRzS5mA9pYWAbcZ3",
  "key16": "2FrGLqL62uQ4T2DeANR8BEBCgVqxaFfwH6mfmr27Ar5smN41Y1n4QtSyKzGHuniQRnFde7nkLucni3R6csPxs5kU",
  "key17": "pYgMQWnFjfAMpp1gj4NowtJbfKW798ki48ZVUJzK7umSiEA4DDD1qsc1XocKzevS3xff4ntCegyvGkLYQotp1zN",
  "key18": "5pBEDZk2qiDEFirFDWpjogQUw5atPNSbwD6Ts3UtnyY4mJqRGphtQydU6Tau1ckAq9WgnNPSUB3oSdzv9vX96ZzZ",
  "key19": "BL2o516ThPSxLbVUUusDWErUCv4p59goK1NUxk58u3dTT8Reo2VEJWD3qJULARq7vkTwEusQicAQd7Fz9jAg6gr",
  "key20": "zeiwnjyFhdYJp9T2ck8Q4bcyfduAzNXHaeCvC9aQQq81DPMrKrBzs3UNbzWErDGGHjGudiPZLNTgvtNBHBQsZ46",
  "key21": "2vfeUtKchMVazw7aJqunRZywCDPGk7LyJahLfbkPLZQ5M72DpEE9Xs9GyDsArm8yULYEFYCoJnU5b7Tvy1g8Mhf8",
  "key22": "2H2cRJp4RayeNEoJsGWCqLgbzrK9MJPpebfAw2S4s3nNhnwmvstkHnmM2zXGX1GTPyFpczfdYnzFadajYnZ6EACR",
  "key23": "DFefFLGio5VjbFHzfJdwt9Jo47Au17HSFeNgYjTHZK1FJXSJfUmbYw7XTH5mAstJhBq9BgfHgUZ6chUdB99bEwF",
  "key24": "3AVPr15bA9ns9Nwmk2dCuaa3M6izeLY1AqGsv1gteY3TrumkzwxF85n8UjAcReDZCgsgxZN6p1hHqzX3gNq2VYbM",
  "key25": "AQPca71fqwCixiTkQ8LmRNvMNV7EdwrzZSHF6MNpthgA33rBvK7ezAkMUrDF9jB3bqbFDx7FQUwzPFdiiQQ9B5e",
  "key26": "5eXWnFzx7YdVhPrijiAASz481wh57ug2U1efJ4LPkCkF6N1UBxhgApnPU6EAHHZX3bL8J19GwsmrtbrgMAWhGD3D",
  "key27": "2FxNgPNGULoK1biv9c3PfBx8vyXPQCRghwfDkPUUAZKmB7YAKAkJTzCTzrJysEPEEqDF7ZmfyFkeG4TghFDTQ8u5",
  "key28": "4gBDBXmSjF57rsjDApj32t72XcN1NeR8wR6Gv6Du2kwXTaPocgGe7nPdxFCNU3mHT56JgWNXBR4rmsgXnXbbk2mw",
  "key29": "s9WMftRGYeb2UHTA9pdvttYj1GJiCbLJW2vTvYDzu6E36U3Gqhc4eG1H5fnYwAV5RVkM6HZJkLSMD5eXcjd446t",
  "key30": "4MMSNPevbc46Rdi65CLVHtTaKUXgRzRg6Uo2UiTAch17Ma2gySzDTeJjtni1A1fysxMwTqKn1DSBzoUEGEL88CFj",
  "key31": "5HdrNowoAo6uJEeU8kEHgBBQrmRZrxtFphesLHyyqY4aF6UUfPAK1BEFrmCfQqqLMSfv2KVAGwoXGUPjhyi88ppW",
  "key32": "2WNqr1jfbheo8bmQAgUBmdPsBnW8t6FjMMrey9d82H1uibCdQ9EHuoTnbBXnehxtsgsGsxd9oLZ2sqvkQDBKXzy3",
  "key33": "5ZTTNaVsbNqVM12ftsyhNRngcbpdfKPfBULPhZVEp62HoHHKqZYUa3eZw8hPU3gnfsUydmafSHmLCvcDfWcrapm4",
  "key34": "dtj1TKxrdyF9b1irDE2D36FqAexQK5Tx9mxDuB3Xmjc571M3MH4vD9ocawWxVgtGyEaqsGtD34QxjZw6nwweL4Q",
  "key35": "39u2jZHTcBoYmVhSzZ5wXj35LGBAVUHgrWuiSEk14HL2G2Y8iSbMp598UgrW62w93LLWttykmYp9nPthfX2jHfcs",
  "key36": "4XgawEWD7uub71qEYnxmovNtcR6QyBmFgsgk1tDqD6AZuhphqxsS3xzY4FpsAPYokDcZgdgj1FGUQP3TfuLS4Z79",
  "key37": "4WnVmi52k3ExC6KU8oDrQckzh7KqgJ6BddQYdvjGou4mKUcQa3MUTxPgYQaiGXarUv5cjCKRrrGMLZS7X8nAtvQC",
  "key38": "2cEqUeDUNitNdRQH8CiPghWZn4FuoZyetvDKTnPa1Ki8E8KB4YJGY7xPvSNgqKWkS9m3hheys5hy7ZDkxtpCCgcK",
  "key39": "57unfn2rqdtEzo1KGz5qXwzWZH7vmJ8cfVZngLbkphVjWoUXR3Z2JYLbxYwqnU4H6VgTtYnhZnmSFSRiy9rnqt4E",
  "key40": "3pm3Pj1wbFEjtfhZbGaxQiXMmphw6fYqdBKxUg6fCPP6f3PQbEzUT94p4JwkD8SYKBxtBG5uUdJbG3onKkzSDkt7",
  "key41": "2HQGDQDoZFasVDhRbPMwxREmzgaBGXGTefNhE9zLog1qXBCi4D6dTQ8BMJGJM8LUyq7jvoXpPpL6Agqm3xnZRxYA",
  "key42": "5AZUbpNb9A5jddP8oy7Q65NRfc5EHSYruPnkZauxzg91GGZpkEfMJkyTzFg8nYPKoTUznjr6D57tQrGA2RtfU7PQ",
  "key43": "3LTjLj4norkFVQZFFuDvYAXkk5FLF1d1wAJkgxnMch7Z3Fi9zXZ7LptzfxrMRonXcMaPMNF3VX3xhJXNsx4FRzTW",
  "key44": "3NHMjgnutVt5nWFHLSFXphamhPbrhHF8yFvNpmgjFG4QUPKGDjDtizCL4M9XgQo3NPbkGDBYNGhQFefLDncskG8o",
  "key45": "3NYq2wbomhLSmNDnbxR9TBviPA8HG8Bcfp7Bwo3UvSiiFUCR46b7oeApBmHsJCnqfNFmMtiHrJb1h1GiqtLEVSKW"
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
