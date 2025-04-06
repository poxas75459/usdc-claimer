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
    "55tkY9zvLNmLkzhGUPaZMnMXLttkC36dxXhAXj8yKDXw2idFsE6RwtocPJBbgBfrhHmUTJobqq4KK3Px8QmW1zHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vvBjAQS3Fy5h5qbNuR9i7EfCLEXnCyWpQpvCT6UpSgwq6sKhw6A77RmU3WUe9nvjSCWoxj9pwj4BPDmqTJ5ctJm",
  "key1": "4oV4oWTaaEKUWK83nBYkFMPcaJVLHZo76Pc12KSBsq8Ws4Q28ij9WATazfTdfLfHde1T8GAppjQEjp7GZmVR92RY",
  "key2": "4GzKqpW7Mq55jK28B2BN5kr2ifCBxn2ndDhGGNPwZC8c93a6doaPwS1iif2jX9XSioBrL8nMtyTk5JVXFEQPxpgz",
  "key3": "3ZrkU52EHP7FficJ9VD5L2niqgEh4feWHxYnMVH6Ru1HEFj6pRWXHpnjYD7bDVsegJ3ujwzAc9s6tmtCupqQKA64",
  "key4": "3CFdtk5MykS5A2EpiCAQaboKSXk5me8Tid8Bk8H8EUUv9vY1gqwMPC4F31UnxDQQNiZq1SE2zseCMp62mWzRX898",
  "key5": "3yWEX7gQXC4z7cjyubv5otcDRYnXBqQFVSyCgAnHxwNAQpNyLpExYbp9Vg8PS6qk9Rzy1HUNiKCTBPhxNZJpH8pk",
  "key6": "5Qxr1Msz3PNi94RrXX2MQTvaKc4MN1Ms2T3kudWpd7sTqsAhPYojpG8MhHAFWXB3nwNyrfxfiwcw3dG4mdUibmMS",
  "key7": "39nNK65izyGe3jgaR6kgf2CKTgzheTcwi7KNp6nZ6hhFVVLmRymwnjp2x9w9bmrVm8FdEWKPZAViRmqmSq4gVxwb",
  "key8": "3gqQuPXqLL2Wpu4wxugJL7wQosXS9nuZeA7GEQpRRqwHNme1u8LZJndNWjDegNCNZpTCwuKsYKiJQBFZ9xKGCUVF",
  "key9": "3MJwCK7jrZFnjmEteHqdxkRitunBJALyqjTdkfPWyH5zanojMQDwZZQHK7qsZT9MixFAgCBXvT1otdPQpPP4NSUE",
  "key10": "23HuTG4SncAcbwYyTPHWhHtrbizkHK7zP64EcUo6dU34KbUWuiEXUvRtUN4f3h1JpjgHprKLRhYm5LGaQSSr6dQB",
  "key11": "2N3NJAWULY6tCi6EZZ2vNJ62d2gqvEUmn3i8HXH9ch7VkKBLJFeJMUhHCfQo4sbcWCY9fWdMKd535ebC1XYM9g7C",
  "key12": "25EGxDL8456Q6aeJV7FszZ755syUjfyESce1PBZZemD2tszzjPb6kCKnCqGSNf4HY1m7biuaUSyXHmqAZhHp2Jps",
  "key13": "5NoiFhYECHu7sGi3azfZptjyC27PikkqoojuGjhgJX3tXmQHPqEXYVSAkvKfjcAMjS8KeD43BdsMSy7cqJftdyUu",
  "key14": "4aqC414jqawDgapbjMk6ZZKaYXc9XZT8Uu1RqbNyVnehEwpGamAZMPziyuYASke5cfejhf1K6YqdSGTTqkaqfZkJ",
  "key15": "d3jL4cuHaxXe9Yux9nSqTDNewBnTtVuD5MJjc3MHiXDYgugagFE6kYNMCCTPXgnro5sFLjdudoXtTTTsVViRFgf",
  "key16": "5w949jF5AV1Hvk19EgD8d5KSJVhUaCUTP4UJNabZ6QHGobfaXy8LHp1eZhh3Q5SHFMco34GQBosN8MbRfYng47Uh",
  "key17": "3y2UucMhDLgmNvE2KJegg9uU8gqkQogtigut8cy2SM5bAJ7FuEYRDXR29WSXQbnCdxR7DnjA2P47DBRMBmPiTGfQ",
  "key18": "5vgMMTGHxs4vNPGt1nVbniJUZ6jmQZ18YsmtxrzMkzazetzYUECGgCvL4YvMfqPmujwnQkdDGR28GzZpuzLyEbb1",
  "key19": "2nq1dCs4qvKJmXTVXVRqqCP35XFHTd57o5eeK81RN3rnX8ci3KV4b6oWNJwfaCgTV1YbADFydczEx1F5tDaJG6xD",
  "key20": "37z8UBTN2Dt5M6xoW3RY9gnrUN5W6fcU6VD5oyK7YbdjLPWqHCGBSFiCEnfc2w8vvFvEdJ7TaPUufwQEDxvicVxq",
  "key21": "4yZCfkFi32t73f31u5eYP8vExo8qVHnWZvPF7nxSkPfGLac2Auwv9tsM3fyR3PpF9S8SAdS4Pa9FVbvxsfTgfYUz",
  "key22": "2GBQVdJTUgNHmYuDosXhpBmjKyzxY4ZEc8qKS2BwxJ948r5djMxwm9ejh7UZuZ7E3NC8JG9U8GQSkE73aGPrAmVi",
  "key23": "5A7Cnzjge458wwhKaauRxA6WWH8qGQvk9FPXQC5soE6dEw6xkq8hpPJkGeCJezGTfwxYijJqx4pKiCbSyVjMjctq",
  "key24": "2nMJnqz42yKYN14UzFPCVDgrYkoCLJbEvcsb89QTnopHXPMsAwNK6S4Wci6NG4H8v6i7KubnVFMqifA1y8uWywRb"
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
