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
    "5oXp6t4xtB8T79KQWwGuhgXqPz3fZbVGFB85RUVvBXfGr5rpwRWEK6JEoPmZEtHcztxWw3Q8p7RCL6ejVVM35snt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Hs9dfc8LQN5Fp9nyASPnbemdK6BcnZux4amrvpsA7sXmSbjD9MtaAunyTL2d7zJ3K97uGTZG1twMVxf6ifjwZE",
  "key1": "uSNjTz5opKp5N47j4rianwERW4QbXVALTmDRP9FqatiNRje3kKGwwB3Lzn9YGdthDmj9XVmRHZmJA2UvjuRVjeF",
  "key2": "2yfeB5GzHP6Q4SSqECUUuiyK3UmNiHJLvLQzc6MFN4qssU22Z4ToGZjKqpHsAvvmcjYUjwN3cRwVbGsaQT7abBoR",
  "key3": "5uCetBY3PZNor8r7NQZ75LURpqQWTremycsJVFiLCsjDeAnUc3tH3XPKu9gkPHeKcGL1ABmc8GpWWdB6VbstjhZa",
  "key4": "3ofksV4e3zXEXXBdqDk8STWbsYhzUNJpXRqnP3VzKZupwZX7jnGn7Bh7aXtrt8iwj4s23MH4LqREhqk6Geh4afeH",
  "key5": "4rZDkNo8zaGRE6b1LXodAY1YCjRiXdfvovfKEBzgd6JeMrGkfPkZ1oky8keXPvsMQdsQuA5E7fQoaPArxN8H3Lp6",
  "key6": "2X5mWnhRKtAzRuepxd8U6srq6SAp2md1RcAiuKALyZpwzm95UzKebC6rjEq7T6FfTvXEkpbaLMty4CPBCmZKXwsY",
  "key7": "5TXteVUh5HN8Zx6f3m2uzTbyvAV1HR34j2D935qQMrsVqV6hMskwCPRPTJDaJTBGcfcyCEhgdym3U8QZ3L2HtELo",
  "key8": "2iMGKQwmbayg5m62LD7iQPWUgka11f8mCgNqtrhpFS6aeqouhxFWXtCZkra7NJxw5aj52Rq5kMfDrWrbppE2qJKT",
  "key9": "3GAbGwNegf2xwHUg5pkUTC9cJiVqogHriU24VHCdeRAuh1cmTj1vDaBmYqbAJPLTKv65oimpdSbPYJvchc2swhYe",
  "key10": "QJCgv9gFwqEQUSnY2civcEqxoUYH4xTK7BMBmAFKGE9EM8yXvutrRe3uWqGcW49rCdhe4QtkhfRGxYeSRKvgKWh",
  "key11": "b7LVd5ByiChok9E8b1JMd6C7xBvDGaBwA64gsFdoZ8MJa8uQDnRgoXGk3MLkQf9YSN2m5WCFjpM3MY73Wkm7Q2D",
  "key12": "4n6wg5r4h72W3XGT96aeW1WNjQLvWq2iturxY2T2wAT2ZkbZjhCnJYAVjFWxocEreCmHYnapSYzrtrbzEFCv2LUU",
  "key13": "3SazpviDgWor518wCfwZaZd2qucUCEchMzarDoaXxS497VyqNSWzFDHGYXhaxzTBam8f5LotX4PZ2wYz5MbZUtqF",
  "key14": "72tiXjXqTupCkm6fNdAK26sjXirdBERCTPAXSMaEKWp76LfcLBqeynjmipwXe16BnJ9WGo8YgHckqqcKT58woUe",
  "key15": "49uuJonvmDLz7eGiz62gVCkZ6xHhpLzjwD829yveMLf5jaBheVjZMHDQS6hyXEVCNebP3KgYBc2PD58m5DF5rN2f",
  "key16": "5KG9SKJC4BfY9meCKHiRear6H89HLXYseKT22em6jkpsbt9nhpxvrcMSff8YCheWnx2TZjNkHcQZXndXA3inHHQv",
  "key17": "4Vv7PtHgZzyVHkc7G5JEv4q2UJkBJdhqfRpqMFtnKnxnNhpugaVkPRMqxz8L96GsZgtcnnVAjguM1E63XEwQtn6z",
  "key18": "2ffHjnW2ivPMtziYbznz1H3sLxvFnDWmTFEFNvsPfQBAtk1dsrdo6gWVTPyb7B1GmpaGZNi6nLpzhyBrHgoLDKbw",
  "key19": "2fQejZdoN7HzVLYLHY3Jrzr9dtDVHLYmCuzdkrbxcgw2rYZ4KKydJkLh7REFREUimEcnQat3w4iGDVtUhN4UQuxB",
  "key20": "4xduoPQGLzf5ZPARhDNitQAUpVyMT4uCdi8ZncGzMoQukZuSkjhqjWphUZhAAn9vsC8KYkxxLSYUZvWMmr3csuG6",
  "key21": "3x5UKthQtNMuBXRbpxdSDofsbzuL3RuP6t13d7rQyLzCxgQXC7xo6YB9RYD6updsahGYccaCueuHPuPAc5gS5AUp",
  "key22": "21KbQBoCxkWPJWW7VRwBhyt8ZD9CjUgPKgepxW3VGZ5Rza4JUU38zhJtzpZ4wKS7Y2DWEVM4cqhCmzHyhRbyF7Bo",
  "key23": "3tn29b6AeWVXjSbk3ph5pdAR1YCom1QjeJh7XcAquBj9AN42LJVf6ZiAvP5htjSNbSaFLzm1eJd6cHEGB4h6HLys",
  "key24": "5re4Pn7SUv7jLB7Gj82jUTjSk4bK5MxUHmzzNhTJKtfQUWa7a9YWZqVspbQQFX1fLZvWYr6ZKPzuUDjnPq25NSUQ",
  "key25": "3j9DMCN4gQZWgtbYJP157PWWDE3mTWNiNd5PdGwSBEwdiNmCi9mVPFwAGp9khJQVSTpVf4RgAokXHJvZf6fUzwze",
  "key26": "4vSLvcbLvSh1HuuvZZ31ZLVcRRaM5dEEcc3LjLDUNbGPCQe6U1Av2YwSTc5drzzsuyVsXqaByW79wAK36MnvpM5y"
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
