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
    "5BjDirbTNtE4AJKnTamy8p1pWFXwYK7bwbACzSPFnxWTrpMExD3mayhz6qTssf89CEDNBgKj7eb4A6t1sAYfG2rD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uhp74qLd8161yTmcQf7xZnEuR7dseUHmqLX6D7PFfQp3cS65ZVPTwzccA4vLSs136RcTki3iS2aQQyBVZCaQE5x",
  "key1": "4PcmoG5w9sAij3JPDLVX8LdXkCNZUf1V5999GJxANLHSjXmfAZNQ3hRnykvCUKTqkLvesjf2z8fSJ5CxAtJj5uBe",
  "key2": "2tsyHov5TdDUKs3GWY7UZB3nxhKuB5sRmaMEZHqjJw3BFPY2HwS7agYuw5HGkYZX3tzG48hCRKeWruUteCZvxS8S",
  "key3": "2K64oZfMSjM27LmQrg1GQpgdXVRGgBPDQ8bdzZtC6WM2QRpaGKG4YMSahYDsWVVt1QqFBqDVNU6swygkkbTx6EWK",
  "key4": "Xsbb9wd2rd8eNy5M4joT2GnmQYDwN17PVXcGCU5ks2f2x3vRdfGwLoPCosiF3KPZS7PyS9SzqRh7bguueMY1VLK",
  "key5": "2K7W5bXVWmUQGp8uqH59LZ57Boi8UgN8W4pd5TrtHDfUYL4T66rFZqpyNGzZmVkCWn7b7aotYUv3nXhTrFEFamWN",
  "key6": "4ksouQGyNgRVVwHYXiPX6sqHCf8reriHhKgoGas3TtFY7zzkwJcfLEiCxpNSa8i5w6zLvumBLvCjnpWKkQm5UFxc",
  "key7": "4tp7q4oBUphVhjJBeZpLsXYmJjmhdBeGzeqnwZxHwzCMSW8xoAToHQ8AaGDXNWpD3xKxTbeg9a6HNeSdcaCGcuko",
  "key8": "1mqrdyaMC1uNsRCFazWv2nKkYGXJXNuQR92U9znv5KvzU6FYvp4cGFjcHAMrMRsH2GMiXqYqYqJeJoUNJU5yxSZ",
  "key9": "iKmBYTmMiRoUWx11zCTyccPLSAy6pn8t6t8xp8sDA7htJWGD6J3QY88TbHUA94m2gU4gMa6Ucq6VERNZ43iXcLc",
  "key10": "52ikBEg93xihiE84YtaCGirYGeqB3V67EiZqX3PRG1hbWnat6exqRsftsgcLtqAe1SoSRFnWxyoGMbBorjzzbiip",
  "key11": "3tPfuQC3FkvGCDKvfkegMEnNWzevNMoTyPYBWNtLmTU9cBGCP8qVrCfGkxzQHBxHVHBdVrU4jh8nv3X6y4EN2M59",
  "key12": "UTuRYjbDTBJoN69tohvicLBUPc5a6gDCAnqKqbDZBnKYzxKmrM5AUyq8umpQDSFnKcPxeTKhBcXXXh7kurTQ2o2",
  "key13": "2acz6HikyGCB9iUrrRDo4tdtLnbM7vkvUEZpKAQ91yMnPTBQK9DC7Htx8KRKAqC1FxkG8drueyU369WhfhLCRK4E",
  "key14": "2iBeY8cT2KEkT2Kt6X96hCPP63NcjwCBTU5WcJXXBqhkpzC7ih1XRXypDpQEeKTZgMpEj9uSeErFP4eH2c8VMemP",
  "key15": "2zNS14LWg9xFpGgD2t3xKdkwBraUgT3sGkvao1La5CjdttWWkRYNLz4BMvVQsvAyvh7nm2hCa6FVTrVSkWQX5cr",
  "key16": "4R217iDx35n4TjxgRCLMidLgHnwo26PYxCSKT3CwDXCdJw5nvPQyHbDJ3ykM1BXMYkeiq4AbbgQwGqvuZWstJd8Q",
  "key17": "jvP7gQqg8j3nHUy2vdSbgEsjwPVnKqM9KaaMDiBuR3BwXDXmZPPjLu1BR3Yffc5HMitcvW7ZUZYXnLFVsmuS2xR",
  "key18": "D8a4C6cVd21Teg6CybUscds2fywtmfdLz5nmGcvUG6XxBenBPHvKfJhDnwKsYdi1cQxQijeutwRzFbDS1JC4dsZ",
  "key19": "NwtBB8gWLFDuJ2S7zNY1jLCg35yYAV4jdexL4iCTrdz1ASdACLxedJJsA56xXo8NHU6R2XUbtcBNqetUGiS61uV",
  "key20": "85gqLTm8W6K7jJ6aJVqHm9fCAMRJYdpVhiTGnq4Wa7UMmpLvZXU7JLcD2bFwfgKTQ9uWZu9jv2h28cBdUwvAVzE",
  "key21": "61YMYgjzeUSfHxQsSG5DnpeBRVTiPLfSSuBC4TsDktEXRpwWUXSCwfKjRp2F5jtuMdk3TcqbhGE4PSVXCJ3et6Vd",
  "key22": "2gStcHnZaVgd5Kh1cCQzvu4TjfPXMijytEpF7TVQ9YUFgUFS6V9rCDwjCAUdS2JkvuTq7cjxq25ntD5nAzYGUVwK",
  "key23": "3wnErhHa1kNMCZ3amLf1SQR553VfxKr5m4iM2EAMnGYztNL8RscnC9eGN7HYgeFfTHLzFLz6xWUbJx5HpcfWwBrQ",
  "key24": "4ewMz7ACcDKESc394KBQ8G3hxF3tiewXBFtVkmjwDYZuyrWzSPp1pHKToxZrYL8B8azuzypHLBQkTetZ6Gm97FRJ",
  "key25": "2Mnt4RLrxE9LUQ61foVJAYWLUZ7QF9RaPVdPZ9mHuxtXBVGpF9tvaDtsuMEza46nYuc2Wxq7utvzfbGwsebf6xeU",
  "key26": "3t4QrYnZg4eR7cZTs2TuQdJEmfU4TXPzEL9Cgrjnhd47rCwqPjdhkyqXp9w5W7dJRFy6aw4NCcpxRhpJRHZDz6cg",
  "key27": "3hvK3CryryttBS9GgjU1Y8tGuZxcPkX6uwvmRBKdwSywhsrF9vdNfqvaBPLAYeE6TAbkmmZwUWRW55w8Jiua1z7y"
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
