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
    "4DqR8qzSmje9SXt4HP6MmhqUtsUCgWFr4FJ9zZ8XXTt2xiS9bhp2FdamcmXfgUDmc1yhXGQow32zDWYeNhz9ZrCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z7cpvdqreTV6zTPPuJcJCHwfsUuRvBCrwypyw1YVd93iMhH1A9W3KHbUjL2YfXwtvAhBgdEMTUYrWAyPx34R23e",
  "key1": "2vp7AJkZc9UhQHLiMRTGqSK4ZLYaPHUwEDHNndh8cpGr5pV2S1Tk5QQNRshrmJ9vUAXuGkksFgmjPyiowPhtXQBp",
  "key2": "4giTB6LfTjHxLkLeTM2fveC8sTZivsGHF4n77c9wimKig9nuy3yWgrUe1bW8rwqchW78URbR4wBCUnYnHG2jGicr",
  "key3": "2ndwjCt3XN3mLiytZdPmWvL7qRG2wmV7ASZjTcs7jy3CeJUGPW5fLP2HWXfspKjfKSTb7tw2CATFpDE6ugR7asmR",
  "key4": "28VDcno6YpibLBNp9vqYui1LmrMuGLuH74JZeWcDs1dJMa1KzgVJWicj73CFCwgzx1PewnMmy9e4pdZKoKgBu1bB",
  "key5": "211dxk6sqoaYKesk1Rfiw1nNSMdhxzkYjDLdaKAs8T1rV89M4nafquffPYhcT2jwsHUxtyMpQpAdGRyaA5n5Ppsx",
  "key6": "22AB1NJVoT4FAJGy6XP8bdiByUmLXcxTrcocD9cKTyfSAYfgRSeP3baNSy3s2HUsmaVmyerrG8NmP4az5aoqzaub",
  "key7": "4Ybp5pEkbcGL1QjRNARnDDBTQPX8YNUq3Fway6b419QUwTsxHwpF8hKb5RAmBSVdjK9GWRPXfQvoUuizXw8t5nxA",
  "key8": "5qSnqqaYX2ucrcFyDv7et1jNUWfa7Cd1vLr82GHuGeBgXb9ZzTypnfUwANB8SSoXAG8cMbMVYckCq9Q7SHpwV7b3",
  "key9": "5ZVR8XLrMmD78VXF8WWJDtUb8srScrDu198zxpyj4pY68DUPs5ETfazeCHmDKmyndzfveLdkEmkT21yRL36pgh3u",
  "key10": "5E5TSKpzVuLviFhiEMyhEutRZ1ditiYRSDSCAn66rgGVHigmMPZxC621qTurptinMuimose7TGmioLjjam4FjAch",
  "key11": "4fiFmerSiD6Thyzkr7rD4d1TYUqb4hiygp4sax9ZBhi2U4s5VJ4pTFUvrY5ZHqfPJTn8M3KpFpBwV4mzNQTP18S5",
  "key12": "2ESAtVkksdJDdapAywQE6cNwtxaDxmU3gyVB5eeS8nNxJV4BE6ZUYQZG5SJw83DrWn5HEcfX58qsNvhtmsaSSshK",
  "key13": "3DxgnTpfUnZNdGdfaXKLxVbFtkR8Xxz7MZPMTnLjBSk8jtgLfXUgcDF5kMLg3B1JwKnBYbiuPYYQehraZc5LZxf",
  "key14": "3ZjUjoUVj2o6Ezit5wrubXhimrvt5DWKMfJ37JE9Fazt9KNc6BaFZ7S4Gao8bRWBzVjAiDr2fAiHCMhCeDR3kh7R",
  "key15": "4WDNpaYWde3Pq4KY2c4KHJ6krBkjNA4e8WJAGpswhGcBToshwMPVxkYmquBsLrVeHffgVkCB87WwSWC4cxyzjNBn",
  "key16": "5Uzp8VsUNFN4WGbkxqWro56RrHBdQmxd2UX7TbvXzz8DswzgMLb5DEGdjweGQ4FVgwfbU3RKZuhk7mtZTEfRe3M8",
  "key17": "2wGGX6RgR3eZa31DweKAQcLUeX3AcgFX9tmxY7AkunriykjjjkhPh55fZfAbX5ezw3PkTiTWdqGqNr2CsDtG6JGo",
  "key18": "3oK4rTMqPUgHRF8byF1ihsEvvvUVjCYapXZGXNmzLwyYseTawHun1K4bpK1KjPXsfHFuZPqDAZmJCkkMKu8UcKJv",
  "key19": "311aGFNdqv3QTAWbUdtamZ64thQioRcxdFjKxvkKN6xGyxuK1m6LkVs2jak3KormuA5PGo3ucT7VzHPou3537ccM",
  "key20": "63yMqD42ZURv4KiZm1HTy9cRoXzckbGDjdfpVJYeodtVgV3Q7xtTvXvw92Ug8h6ivbC9LKv5dATKstapQhuhd5LM",
  "key21": "61pQQeM1v5PnW69d262WmyE3PoS241KDtHqhgbjYr7rNiHqqYCSac6PrsgA9hDNHN3issovS8dm76SAmATcT7aKJ",
  "key22": "4D5CkQdYjDqwR5jKPuAQpW3un37eKePBKtxYTJ3x8XjPZTXz98SNN5qUcqmLraqRyoykR1BibenF7xpUkPFSyV2q",
  "key23": "YnkM17RmgULVH996AUn1LPjkAr7EDRZwKKRuNN2LFG3JWg4y1UgoFdsbwRCeUU497LzTxumpUX6UTCZUPxat13o",
  "key24": "3W9oiHD2KQJ1ZTr983LzNpEcbSvwst8NYjRVG92LGbXSxP81f13fjWvAJGfjQXucPLKFsZxq6SKzhCic47xsF6vX",
  "key25": "4K9fFE2Dk6C928QAtXzJf5SnY24e1YiqfW6rfEELYyfoXE4xxT2ai3j4TAeDQn1LeLFeSyERWPvEBcnDxSxMv3jv",
  "key26": "5Rtz6JFknGfS8y9GiRpByXKxwNCA827FDCeXTzr4vd17sec6fgvJZZdMN2pB72T5Ng8Uf5yqwcM4A46WyAb24fjj",
  "key27": "5DLGCCqvEdc3VvKBNKYxgnTX7ES9TB7SXbe3c9iryZqaZNYGvwzs3XTKvJGaEw4rQbgh7xs3HtxL1caSbD2DXdfa",
  "key28": "5BaeqCRHjSm98Z6B2yDzkjBBbAutyYGcnz8gLppY9UEmXLQopFbUvRoD7DQdmy4G6hmXpzbCHng7DCQhVtaQyFnd",
  "key29": "66e9Rp9zGpxASZ73Vcq1uNbyFQKpUtUHT9E2mzBbwbgriLd8WXCgXYoZFHWv86FNdPm7EeA8Ab7NMjSBxtb7xt5",
  "key30": "2ZXvsYzjso9VV88Ev2mhTg5nH9t9KQjpVXbWrpVeF7ZvvfXtR7yQE9QgNsz7oVkpWgzHWjsbqBnizxqVmJYxwneT",
  "key31": "2GmuTzxcoJEWGmKF1YjNNecjatyXwjP8ws6BCfVctJfd7DQQX7j6z5fFmQomNftYwEZDtSJi81CxgEzooHCHHStG"
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
