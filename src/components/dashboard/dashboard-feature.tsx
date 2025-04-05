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
    "3tMFnTuzh9udbCHyGW8WpMVEcqDDehzWxVcCL41WuFVFEhuJqZ4EtEWxaz9j98xNTwS9YvnfUTcaVQc5JkQbdiaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C5SCTACo2npuyfTwNtMxwTgkwwBdhJHwuMAP9J3n6Ei5WCZkUMtP6bUnRMjHnZv6DEXbSaRftLRAEhzf4sAk9iR",
  "key1": "5kgNek8yMPKVtU1e9t1G7idcuxQfAJrBX75UJsb7L5YtQiHTJ3xLC9Q3kxnNsj6hq26t5nW9L39Pg2LttoSdCb6z",
  "key2": "4cHgMw9dprBRxAzBtStiXEZ8jfTe4EXKPf1bnMb9eDameMppZm1XpSAuhvyUVZeR4KFGeCroGG8uujzMEKEXNM6H",
  "key3": "4qiFC5QE1nu8nFNN2qpfwquSRYtZpCzUXGXFNyaXjRzEw7EF8rs4nkS9TVKWZabJrmSkqeZEVURx4hj4JJWQEzVp",
  "key4": "3ujHFhyBFH3XbquiSY4HxW2BoEoHmz2gUqku12HqvkqUkttYbnKRxxqTGU6auSvr24PBRsSCDMcjC73DLtBFVoBZ",
  "key5": "33Amr9DC3U7uuRzJPxXZTT5aoPCi36dooHepX8yLgRNeC3s5D5k5fmxXut6ghB6AcS8RfxMpfWbqsc6J6DdNjyJK",
  "key6": "5kgKzTm6eUohSPEURVib6Q5bS3fQrqe1FZoSeLr8X7uCi862mgXD9nMjseqxPGqbVwG3hSdV6WPjKjphQWNQMF3E",
  "key7": "3zVCG3arkuVUxwcvyCR1EiFnjWz981dGuuff3NHRxYwX15VXbMWVjgVpt2Sq38oLQoRtvHvU4hqP4ak7t7aUkDc4",
  "key8": "3XjzHW8XVDLYJ2n646a4Pfmbttf6LNqWWcLkqKxKLSmuS7k1UPZQgPjkscQGR28byZZf3GmmNSBY6AtGiZiuUCqz",
  "key9": "4rhg4B5tyAQKiRbykYH44AGnRfDhawYoFQvBvAqoF1xxE2UiafUpxFJbAJKbmY6kDjU5rd9reBp9fP6yG9SL4Gf6",
  "key10": "66w9Nr6sLHRL2WGbj3TSKqWr6HB6B1YPxYWmyQyA4pfJLvunBYoDvmSaZwxHPuv2WWFQruzehQhr6zSHD5JeioCX",
  "key11": "53LUbiGwm1JUnUjSMHvMN4vqZspjXK3jeNUMxRGeP8E5emmucKHHSD8edd3GJ4LGGbzKPR4KowLSc69YZrsd8ybM",
  "key12": "2EarW8BkYV8aZ1C54vGibKXXVvdb9ToX9LR8uoXLxMpQbrtsZ5dZ5ydutYxkxuC8sTC1UePc9ruG9iBaJmYCc6UF",
  "key13": "66wy7vUGJURoSnYJPQEcXNFeSM1hxCw1d3aQxdXdDdUvrfYJmF6BAPDCxx1K6baReukGGXpLnRj2JumKaxdPuyRx",
  "key14": "tMgchS5qQ7EehmC15x592GjhAre1BabkrJvuj5Sb16qqcjeLRajQnGYsj4vcDRUux8EQqeD7BBTBCRG18QEU77V",
  "key15": "4QLsefKhSS3G7swcS5wDrQ7CrCouVCzF2HuDXEE3N63hB4KcLxPqR2js1VRDF813HTdZc9A9TUajv6DRFz5kcKzi",
  "key16": "4hHmyLNu9gJpy3mUNNGFiufbWVc38eCpyHZjtWgXDXYVgJhA6ZQvc2ygqqYoSZn5mp1V8QwMsqJXwhfwmcW9o2Fd",
  "key17": "4VvF8beMPXT1csVgcjy35Amwh5U7KUq2uEEWEddSQZSqmyba85fTaUZvWTvC1K9gA4zt76fSLyA7KgZrd9vYE8XN",
  "key18": "4uQLWtd3hSse97FThe24kyxk8tL1YRUCS4nmimdhqJrVAsy6665PQQG8kEhuUu5fAySzHHXtSHaVVrpEQL8zjZMX",
  "key19": "59WpEoGwLi3DEweREvLqiNxp8yRV74U6AHzMX7wQSoELRfs8L8Y33LYwH6FK3mpi2PBiTts26Ci3v5nQC9tddYD9",
  "key20": "3CrtWSrzCjGy8fWwtroRdrSb3KwSSRN8Dy2VAUvRESxJySL1isgcHYhbBvQ1imeGFCwZAL5b37swidND2ytNSdxk",
  "key21": "4y798C4pBvpGUVdnsGQkmaUizTziPPPzdTcMFVRjHCeio8T1Lc7Y3gC6FhQfTCFgjPhHUXrFoV6FspX4nCE8mcn9",
  "key22": "3Zeke5unp4Ka9VrBb75Ag6cvTZNW899WW5DpSuZFWDDCoQMUSKon73bS2HmCyt1NCvwGESPnuSkPjNSLbZ77J49P",
  "key23": "5myJThFns63x79T2ue7m5XhN6FK9cBvUGFTTm3Chqi5Kc1425XBVobKCeBLvXYA2KAKCoPQ844xJ181cUuMfXmUo",
  "key24": "5QfBoZyanPT27P5v3h3SvqsWAUNtqS3KgmZccKrN6JWtqaH38XpKeuc8yUBq5JEtS3Lm9aB6u34xrygACabrnkqq",
  "key25": "yXk94YQ9DXmNWndzESYzoknuogLBjxzygwM8ujvVZsCV8rXoJfaTCivdSJ3bMf2yzkQzoSwqPgG8JKTz6YepgqD",
  "key26": "2mGKorghu5Hz4V3DRNJUhcNxmfkjR9hPUaGSmtLg5TkrrpdTQAEZdWvLXdpAXHrQ1nuJiTTEeejbW2nWc5WE6PdW",
  "key27": "2dBYjaxddgVinVRdehHc7mmkdw96tR2Uy9VGUaTwPmxAMEfR5x8Nyc8erLZR4t2Gwhik23D5Fi4Fbuyr5FAtt7NV",
  "key28": "KxYGRLwfwrEq8fkiaVSADJmB3AyRNy9EWGnNYPw1xjC44JwfmzzcKg21YTPByBRX5aUCEAUPwzFd3XiKCJVjbUM",
  "key29": "5DvdoitN9qzqsVUQHZaE31gjy9jUUBstmvgQ8YC6b9D9eMMS2BQkTMPoNKPxQgLfERMaTtamGpJRi4ZkTk5yd42B",
  "key30": "nouDbSER7pf2gFDeH94iQG2EK9Dc6dibTBEV59iaH184eVMWwumoPE6KDFbm2zM3P9DPnAN4wp5rKDdZLTWUgvs",
  "key31": "5bz122U52FsVMFPVL3Wk3FvuVf9vzD9cZbFgSMG6TFChRX8i8tnptJYkbzcP46Zc3nG5nFqu7dyG2rkxKxoLZxS1",
  "key32": "3sdhGXHypxstuhaaBmEPu82Hd4GcnZitQR4qUZfkQLSACeFdgfyiXyCE7pkSMryKPCWgCJgSDJfhN3YSCmKSVWeV",
  "key33": "4M6pP1zduFo3nCwmDkQTD5YKwXCSqDKJFqvArbx4VvoSKAv3zauCk67sBUe31kzx5G5PnH2MTi9VYWfE3ZPeLAHn",
  "key34": "3URtiP7N7zYUmzeF2EnUvufQv1gYifyX7id3vCEsxXezuP5owv2b4uF9dJfbegkAfbDwt8QddGYdNgLbSczVeibE"
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
