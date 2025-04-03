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
    "642egc3BLdcLYq5tMJtnneNnrEAqb53ZxpQYfxjnpnfZ2rPxBA65cWgtbdEvbjQYZhMxbhuH45WZRdkWawPtaUBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C2GqUSuet7bpzikvgobtPT3Gf1fT4f6nQjnbcvJs4VqH5GD25kG6zRkGRfr5vWP62yjBiWJ1G8Dk8PXvDhkEQJD",
  "key1": "39VVGu1mCUUN2YyPkSFWHcLft94iLYvWBz8LUGtDRHNZ1vQkSrKiA9rfN7LxBQCHbKhsZNTxRPF19fj8iLjE94h7",
  "key2": "43yMuvWPKN19MQjYznEnJeJSAkG32XQk1rYU2mvo3LUWBfwiyQfRCfKd5xJhMca2WDfevwpYWpDaeJM9ofnUz3LU",
  "key3": "2ad3MdpJRmu241oWL9ihFKsq5rV7pWN9CThSVQbAkHoT8yL9L3Vc8MmSh4rLSzmPXXusq4nJXFfHcC5dCBvdSTG",
  "key4": "4abT9qVDARytuLtJbW9vSxNBp2kxwsfpnbLWYN8uGfZTWyHVQdWSSXZiP4SBsJPCQUg9XyPWwiRK3tRccScdHuyG",
  "key5": "2vHNZGR4eFGe5iXkrpFaLTdCDy336sgFw34xJZwoZtva4AA32ZoSozk7Ufjyrk9VC69qEa46Khc5FT5uKiqwT3mV",
  "key6": "2oWqoJcShn7CU1rZcYiZEFaHqbkzgjdszPbUdM9dEGGoo7L3kc3Nebkt6kPcoX9VH7ZnGhYkpcm14EsXk7xqHzoe",
  "key7": "4sk2HkE8ZSMxdV8MyfwAaPm9FZbjUAUkMqNFmeqc5srrEaETkYNLSsSFrWBJxzdppBFs1dgjyUd98YUjbj3scLrY",
  "key8": "3vX1L4Lyrvde5qWdDGLqXksrkfGpwMzr9tpkfei5qPx67xLEsGTsoCBNRogNvjMTKPTEd4Z48wkFfcDEBoLLxYuq",
  "key9": "4QALqu1mtpDerq3dHPQBXkKg9vLk7yyDr8m7iU2ZxbTXjRmf7qs3hQi9RqrJe28NUa7Hc5GHpR3gFPj8achgVVvK",
  "key10": "QFqWjRSefGRctuSRkMqE6HscVGba55CVaSNfKorKtQzKFK5pHdoR7zvUkAMe5YFzyuVnsP12nDp2b2J5eWJfw99",
  "key11": "5pszNmD7LmqJtWKf7UCdLgM5jMM6WjujW93wVzmAwjR5DvvEcg2tp51QixQYxAgaaWaF2MBsXFzUgmzekQvXujPs",
  "key12": "45tDbtacNrffxEekUcfN6aw73mVH9ZBxPr2MNP5dE4rtD6DFnsJCjyddDD3nfAgAEHzGwCDsSRHGk4XUsRwvdscK",
  "key13": "2DZxomDLS2jaP3b4BTxc6GLALHnmhXPn6Cv8P3GqCncZqtAC78czTPuFd9yFR5joCmMFEybH3JbfzeQp4eDDwsDA",
  "key14": "4MoRU9MSb2qezvKjrJoyPqLvyvy7LB5QchBqrypnDL4X9uXS1UnpBdqKJJtUWc456GKzgLc18Z8nB6cHgsfh7rAz",
  "key15": "27mojGNvFqVL5gR82R7Sxw2Mpakhn2KNo9wdAFQMvEaVt86a92eTGvTSNZ9jkGZLBpkXTGiQcT9jFekWNrC6mNiy",
  "key16": "5wxGpdpQRAEhXo1msC6U9g8CnoCBkzD79h4D8zSrNLsJ9Qk62zm9vtLAnABRVP4P4wbQz2UUdrYUfYzx6RsmMTcc",
  "key17": "a5To3DD8RRZPKwKWwmExYXgTK3iKjig4KsRSJg6KsDNnmLLWDvZcs6bSBv6oDsgKfUfi2ggDBPZKMaerwdpJHBA",
  "key18": "3SDM8BgBKukDjf5D9iMnNQgkLCvJAHYnTt7UwZQ7mfQ3t1noTsN5mrox14Xo7rwwMc5ZBdVp1hV6EHW71pWFv8nG",
  "key19": "4SkEdZ6vr2cGpYjDwtpkd5mLm63bVuzycfioA35bFLVrEYyyyE2XHYQ4KQds5mCgiV4HbkFficwBdGgCqox2LkZK",
  "key20": "5YKH61PJPvA2Tkv9qQCTzmSukPS61QvbJBqmmLwZFAbTVaZYGmHTC3mL7DbnTdGja5WiE7vniFpEv6AsMAmC7SeU",
  "key21": "5LKVoof6MwAi8motUDhkZ9NwrMpA4inrgYFvZ83gdyyFakKNnjBp4K7w6YhLUZHvmFhTY9kbzMpE3eiKMJGWXpEK",
  "key22": "5kcS8eEncEqjucML5eQgahYTJHcvMr4mQf8CgHs9Ayw5DcukL9qsBbi3oHsuczssFy9UUN3mBxkQiAyfckZjsUXu",
  "key23": "3JfCH3xDMKeKRmz3PYWnFYBqHuf6HCj5CBzUHp1gi9yAnGaEMsfwF7SrP5XKd9G9KnkHaZJjQGFHUnK6TqPuLniQ",
  "key24": "2F7YusxfXreBWsXaNSEAWkT8SRQpvXTB9G9F33URstcZnvkPuy7JaegbjbufQLNFboMTUYytpa2txFmXsWn8eTrH",
  "key25": "5CpGkYbtJXaDhMxzYaHFbDLY2w7grTLSxcRaYe7mEHkkieCLhjpzAjXyiaEUAEZ2tqd3NDHyixP7jcLv1JB2ACJN"
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
