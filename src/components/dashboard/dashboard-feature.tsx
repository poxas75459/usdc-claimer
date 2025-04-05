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
    "4vL755Li7sk9rpFRMMuo6iWc1n2Cx471qDXFWy1XuWzEncw716qbz5nocpf2nxXSVtBxbsTVCPXTET9auEs8aQKG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WxwYAcf3Gq9Ef5marj9eHGrs6FSNKbbVeWkaeSWTtKhJkHHa7FTWLZCGWxXFGDL2HRy4LyGCxqTWMzHJwTpZQGp",
  "key1": "28RENj1Up1yVY3fLGoien7jLrgtTZ7vU2idH5DiK4MMahhJYg3qBEK1akraQPtZwNNvQVKb3PDnYX8YDiiYy7kvr",
  "key2": "3wcQoYqo8GFxsPchYmpAnPTqFY3p7eB8tezd9qsfoCxXpbM6ngJebNQ2R2YzWaYjGBH2fsjbu32ufkH3KPs84b4Y",
  "key3": "KS9vrSLRYc2nDfve2WsgHWGPc7gXGa1ibXLetm4k3FJiACowkVhA38ioRU3Y1pWjReTZTK53CompFp7eDdo8NCe",
  "key4": "JzKZVKvKJkhJN7y6yq8jFL1KxLGAJu2MDoNMCQDvFLiUiDppwzhHy9pjoRTJpzR3TXjd2qqs4u27jgTVL7RgwKK",
  "key5": "2zccKxaFHAAPBH3ydHGBnEE6TDHjMLnpdTKN4mTit8tZeUniVm9GPgTRKAEoCPG9DhiGJ5iQ79jAVfgujkijy1CH",
  "key6": "52ub67sqFJvFtGLHjMTRuk6pTRV87PGEgBwHi9512mgeWCrc4xKTV51q9GyjvPwvJugfCk6skDqEQ6e5PbrHFyHA",
  "key7": "2GJQdPY5aYcU7yuinbq2ADYHvWAhfmhTJ65Gtt2b2LXyZJcW3Xh3TWCMqtPeSBrVwGbvqAAek1nW9hoyxP9kPeyo",
  "key8": "a4goxKCTkkkDM2JoRAHKjvcW5Peu6sXXupqWQZwNR5iS3mzGp6b9rCdRqHUG27sPgSm5PydCo8jUSSvuBWCZsLe",
  "key9": "336pUZiWaJ7Fhm3C47qEmTWVwjKBj99GSwe47336brgva14EUGJmF6Wt78tCyneqPT1DEC1W6WJJD4DW5WoEffKk",
  "key10": "4zny6To2vsQf5M1j4PJG55eWUXi17CEh2gNNhRgJUNTtsrKf1g8eoXPhP4Kr6zZv26Nx3H11FzBNf1ArgTpik9NM",
  "key11": "34FFkhLwMYw9tuoCkKKwzbM3SCvzJnDrymFwSvbr4k8FXhDoo2iDiV5TCUBixQWeUzS1u6v4owFvaKLSBixcAUQZ",
  "key12": "34qhBK6buXQEnvq7dh8WAY7my7wtzuKPrxQLF4aEHyA6XYYvKLqwKPo1k6XBKsuTmDXMpQx4tNPuxQjZZ8LmMXFa",
  "key13": "3hdqvgQaSApkZMEiZtBQi95Za6cdyMyxZLT1JGPqpBur6oDRnRK3dpPHrBgNWncjL2wNzbCqLwWsv8Bgz5bcCooi",
  "key14": "2NFWKuoxB3kTZfHfAAPw6BM8ThzCzKRvdSMqiHmmo85xqmeKuoEDNtR4tLVrX71us7J4jTU8mnkUz2PvZJdSDope",
  "key15": "UhkKkMhvXKfTtrivsee78XEPFZdyGh6wUgesFaebpUL8XBjv2vKUcJHZ9HeRaEDZXnwN9TSbt6jDBQZjzj7ibT4",
  "key16": "4braByFG8d5BgifqaneD1d6Gi83BJUTn7qk1SRkKojwnysqC5StmFNTge4xJvmgAMo2JvK9LjsmYmqo8KCnToD58",
  "key17": "5xyUYDoaWUqcA3Eg5t32WwCdGw6hM94HQ7C3mjGZKYFBGLtkhx4qeqPRrNfGn4HKnsQ8qYQ5siq67uW8VHtCXtkM",
  "key18": "3dTjoYjViM4DSv8AUgdaPKZtD6o57ASdvy5rdb26ZU4sr68nijmP9pmVWPhyiZaLowh5GCd2TSj8rATmwUCrxRpz",
  "key19": "3YQdUb9BfGqCm43qfiWXNDyNnLaa4vYtscqKGjoe5UtpaH6yD2SKpvsQkzYCgwE4mc4LjwGtQrf2peG9ib2gAFCt",
  "key20": "3HokSHKk4RAJw49TRgXmWY9n8sJ8V6zrSUHCVqyJss4pzGA5r8MThGtKMZX5ornt47eumC7JigdV7NurPs81UkS8",
  "key21": "3vi7BQbZhiaiFZDk16hsbnnCpDx5W8aGos33NUZEFyvdWuGiAtA8RUGv8X9JEyN8hsTV16JBHi1YtHLGc2iGvmjE",
  "key22": "2skvSr2LvmJMimrnasdaMoYK15WxUvtgRhA4EZXae44SDRntQfMtJPthmHEPc1Q25VRvqX2ERZUSuAyowsebBTYx",
  "key23": "5QAsaC1uGxaTdVdzGMA3dxgRcmJtXjVAvaDdGiXMqKFvmQpa36Pn74m2GA7ay9cFrk6xmch4cdR4qpimzVKoYedK",
  "key24": "4cYrzu61wsg6nv3ijtsAtHYUWVoiykLEZ7cRGoBENYyRPPpvxyHe2PKs4NcEFUp6x2vDviyJwZ9qK1rZvzTDjT7y",
  "key25": "4aCvXThJMGdJGDyYH2pYotUXJ2mqaqKXfLF4imz6SJDYgJJxT5XU6dmybDp8K9qJnouTzq6RR4iF4ZyvUcNZdC4E",
  "key26": "37vukuLuXgDuE1D2iH7JTVUnH7fxVa3xoUDdCj7vWW9aoyPbZC3uRWnLwjmrUhPQZGcSPbJo6FQS8EBSuNZcmxiF",
  "key27": "2qD7TSjYFNTvVpFgX1Hje3PBREKu6C2gb51P3CxSvCS3EixunJfpPrK3AMELMjWT6gW8C74z5qNnFy3XVAdhciHv"
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
