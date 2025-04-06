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
    "3J7zhi2mMwSGtrhzVpH1QKmdFKuCjcYfksDPtKSdkb52U66CEGP6w7yqCSusswVrVbn7hntYcKktEsWXhAaC9SuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5reHjSZuNrvaBxtWQaKA6nMi9biFbZQkpeDyeEa9RLgo3t2d3zLx7edFTrdzihA1TfsYU8pPRseCrGeyKMHQ4cHX",
  "key1": "2EneoVuJhsfJfPLpEZsiswZJu6D8YXe1D8Au7WuxBSLBqcrajNSHsxKD5h4AbcTW8yHkkDmRvPgWht2nHArwtJ4g",
  "key2": "22zkJEtuuwfqbTLkbUCtiX9SpvCm8gYVxfd2KZL5jRGgSSaL2oZ3cPGdgzoo8WLe2r3LogzZ2V5xyFR85Xknk8MP",
  "key3": "63pscQMXQQo3nYqbJ3EWpBJJhti9DuVaxxYtARE6UyRjwHMki8GxtRjNQZe6CXf37dNiSbF8SeQz9tgS5JdtSHmy",
  "key4": "5Xwhfz7p1UvkYh4wWDcYK45wCD4eUsHYPSEZBTRNrLKXxBLBWBQLEhJYFN3vfH3Q6Kqo7v1p3Csw5RKkd9N8znDG",
  "key5": "3svfa4f6sDnYjwjG9gM9gJJT1MVpNX8sKsqnC12p7sFgoQt3Q8cw1CricvwcEigsUJE69qJXw92GdyLFeGhcdeZJ",
  "key6": "38F2GEJ3JjNJ1hhSwRSc2AAZJ8gH4PpmtgqfQM1iiaUgUXYeZBCT43sQohEnWoF9tfboruuAiPPAwG6nuVfVt45d",
  "key7": "2Amh3rPN7fYJrJ7gaVWtHec7P2bstjUMLWUfj5kmAwt4AuvzZYyoiiHPcbNGWucf475NYnQSYbcFTBDqxjmmkk63",
  "key8": "2gefACCkPyDfWPcy9EGeb4sFJ2mfzdfyJaTRitgcoBpNAJNWN4QFu3mqWsT7rcsUGk5g5XhTKb3J9iUwhoETDaqn",
  "key9": "2suJjRYXx6Ujq1YwHHdEprEEvccKubAuTY23NqrEhRBszcntqwtGg9c5AXXajngywkxia7ABfJGHKjTQafr8A25z",
  "key10": "2xkLAQnVau3qU5Fy8cMtHbettoqaRhTEtR3PZ6JqV58vzbTqMcw9vEWUPf3DyWUk4mRkuJDZiSjb1HZpUm8QjWRV",
  "key11": "3oRb84GHoFjESkfjLMFjLKXGUx5kTNRci17ut44eosMGdkJ93up7EPvmzEDrkSqubVP9SKGPi13e5a6M1T6ybUyz",
  "key12": "28epKi3SLa9645ETPKEq4vw7SXhxvBK5JfbDjfPJrkFTUZ9CXbDsvJVJh4CQVP1neRQA5C5PhciXEnenBa5GdHTB",
  "key13": "Dv1vCf4uhkFwbADRjpuTx2DYRPjW72zmbcGZvriZnAwvcojDVuC8R4YzUXPMiKVa1kB7dFcPrqUk2sx5YffQiUe",
  "key14": "5ZDoNWLx1B5LWHpWUHvCYnaBAvLShE5A27Vjurrs6nrsuPKrJ2o3FYZgaaQTFqyZ5SYTSyFkVeLoo3ULBaTUwSW8",
  "key15": "33kbyv3j1LdaTuKJfie9YZL7KG4aNFXH7A3kHRkfEhakwXLiLPem9uRCYT5EXo4qx4chRGzrkLocNLxwPQq5CjCD",
  "key16": "2g8hbo2wRTs9nan3oBdVtLbWdD5p9N9eDbnZD1SMU6y9eSK9sMTh7m8bUwmgZz6ksZspQb9uxRfQQAXwayPtA2Cp",
  "key17": "VgCstRXngJGcBRKsuYhBd6ZcUErRJmj22x1kCRkRSFp7MPkW7iBrGK9kzB6bJtAn6aS6Bsb7Py5UTT58CT9kLnj",
  "key18": "WzdVbKhC5DgPFyCUsjnhzjwcW9LKUxpncpTFwLxb9T7dxZKjYJqpBbwQfCuiCfwTvnUmcWCjb7zPnHrKR6ENKcW",
  "key19": "67FBBzKmmcsPDqUYJ2a5V8w93QPKjXT7CkmD8JtDmd6WqRYuiinBvQy578NKejLBzXotMnVyN2x3LmyxAK2RGvm4",
  "key20": "eE1KNiT4VZCkEork3ZmhNFAAuwa9pZZaGYDrNHhDdES2UffiouuN9UW6YfrFy98DqWwQ681zhP5XUdx98XT6Wps",
  "key21": "5ALgDuHmaJSaQ89dFx2rEKjk1k1k8wzzMeLM2JR2ok3CfDeUJ3WyhC7gFDxmAiHLAwKdFoG9R8vgmbUjyH1RxRrb",
  "key22": "4rSZBKhdDAvH5vyMiVMJowQgWoczLaGKNywZiejwbqodPyPp6xchCUhyC2QTP8muYQ1HD8enNfbKLv213SL4VzHf",
  "key23": "25HAHFch9g6zhWNXQBJg2FH7d2zPEDWfT1PrLgR3Kr9m7QEUPzogZvJNuSj6qv8PTaydnUFhW3is3jHYAX5p5FRt",
  "key24": "31TzJ9m9W91zxH29AmaKTiX1YwXb9S4fCKeZjiBykgjhSoFFiqiqCZS4StbBj5bCeaG7o2GSUx6piHX6yH9kGW85",
  "key25": "4esmV5RupL1rc6qYbecAaDjLbRbSrAj5QPYAXgQBNv2A19AKT6jYQqMBLEoNbh2EjnYPh3voqc2mBZTBJJ1N7Nwc"
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
