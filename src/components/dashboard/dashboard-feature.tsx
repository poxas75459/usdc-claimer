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
    "3YZHzkXd67hZCMmVxmbe6JJ3XGvaTVbdAw5FMovsUwjqXjVraQRp4EYDQk9WRHYYSk6RG1Z1t5qhPgqfx3rSFLhk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63rNketx6ZGjAu6ygC2SY6k5NpF4fiBWbqtqchyJ33sUs4b8oqmpgidkiXigoAtTAjXHUc1tsBwFFBxCUsJwqw7f",
  "key1": "63yJKDzZV6QDc8DMCNoYiNuRd52LsuHMW5hGp15N9BKuvNr1mWmH9irVcX3Q9K5xuvPk8JXiJDsWsoxdgbZHbH2f",
  "key2": "4iKfHXHCYVSBDfFmNBXz3cv9QwxTds2dLkCvgUQfzjJRybv5RpoU9aqH4oXSXau3uAkE6AhStoVk7RVQTCbMXEG8",
  "key3": "5q7Pt39LFzKQnA5ubZjCTeGKVLikEwkHchKALBW1RUGXhn66vymGbCmmiiwr5rHM5iTvYK1GebRPCbzUxoLcTqHY",
  "key4": "48pohbSFnCcXcz5xEFMFF25M3PR81CdjmPbRZyrcnYCS2vKHTcVxveMXyXEg6BdrMAZXo7FeyyYxHawuegwus2f6",
  "key5": "5ccTusYnZmnpm21nyxCDjJGFZciM5aU8pioKNFi9DPXEmMnQBkbQrWibpa6d9tuE2Gk4PKeNfn1pqQNwrSr2su3u",
  "key6": "4DFPnHM4SDhMNY5Jfc7Z8ZZURW1SMYpZHy2ckSFkM9uadhgDA5C6VvbXyv31xuCnbUgs6TuJHML15Z7dD2FwBqP3",
  "key7": "56J3uxhEwbAHMYvu6RiWRBi7CREN7iym3PY1vXvQem9AwTzjzN3N5sBKVUziH5QHTyovrT6qARxV6oRMeqdABWKc",
  "key8": "57NYrABHQy5R68qJvW9RWr68iyHkK34hhPmXFUmVjrEAs8YiiW5ZLdtbXyJQRpM9Y1BnpFuc1QZPJsju83ftSuQa",
  "key9": "3uSw67fiakP44Ey5N5Mm2jhFMfiQQmpuE25bdFt7naFRuaxnfJkYW8bgZKUGPRJ76gUJAEkLJkwtVWg9NyWeFCUA",
  "key10": "2MUFUoLo4t9Kzc8E9wGjM3wyrteLxF9GrNGhmYkjA5D1tuxvkEg8xMiE6uUxTapFC6Hd9ZB4RFseBNWZVukxnHaQ",
  "key11": "64ZuJbBwupZ3SoMeobBUskyyXU2NBC2AS7krE47J8JbieYM9CxcmnRFGaWD5grEKkT92jh3yz56R7HkoEKnNHQoj",
  "key12": "zBjR2VUuaxbW3WNmkifEmBpJhevh2eq5F8FHJyobRoihidyd6r5u7tX3HjTNk1VD7d9UntsTfMDaYP1DyrySyfM",
  "key13": "DrJnmFgqnwSAnA7WxLj86cX7cs6ZDchV9KpGMKoYiVnyPVDGeGy6GQGEEWnqr4a3dajFF2FoQnfGiXvGEKBu6vR",
  "key14": "5AX6h7mGQ2AWPAPMvT8kusVQndreZbTV6SznqBdG6VAyTiybqHTuQjY55aeQexS1ocEm3aTVv7FzMeAzJFBy4Vk6",
  "key15": "5sTQLuE41KzivyEPxYauuwrzr1crpvZBG83AAAqS1TRPo5pg8yb4zgN7qzkJzdY2XxmwSRsxCYVnhvcWMgdwHj1b",
  "key16": "3LJfpJWNqd7SRvXK4jzhy4XSHY2j6ai1TTHN3mivMgPiLW9UVKvRtGmKdLj5uQw8Un4q4sx45U7M6bSD4C8BKNW4",
  "key17": "3HSJ4XgxWkPmDMQ5te45WCsALe58nkp4C4W9nzJzBrgXoKpnzKc7HoPcKxSTHLmTcEPBsV9C9XNcinXaAMTjk9J3",
  "key18": "4vFobMopqVhhrhCXN2Anyz4svcmh4ByGSasA5bSH24WX5GVNKCfQYqA5dbuymz3JKFwT2DuiF3G9LDa6qVvRDovy",
  "key19": "2QdLq1FQa2v4ZxxyUBGyHGR4Xw6i8v2PuVAqnguJYfe973nCPrjPvSkXxX35AHTMMxAMjBAYsP9XRR4UNFsYq3jS",
  "key20": "4pupVtNRF23S3eDy1HyuSm8uZAUkgwEn4Cu9Ad8oT2uCRS4zdNPYufAfufsaGVay2sZzek9BLeUBZ5kPt5D2vFzo",
  "key21": "61shpS2HVM3gt1abr5MuCy8kS51ctXCvAhTvMjzHsaubFph3RvRt1X6Uqa7vcLuYVDsfNkaqN7BiDnrLfTVqaR8k",
  "key22": "5U1wKVCf3LFU4Sb3VbUVWVHCGuJFakvRGqkRyfnYg4VHG8SBAcx4jX6hRLE3QdkZvPpYK5uDJNt42YuYLn2oeh5S",
  "key23": "41UknoCG8uZ174Ry4dBJ2JppDx2gaXp3YgeDCjU9EjnNaQ7FwdVk9tSnafhq7X2W6JA46aws5gtxTRF2cGLZ8rud",
  "key24": "5shyprPhrJsNDnQXoCU2m2ho9Q4tMyPw9WueaRsisxtjjsA3zuQdQbmNpvwCYddcKANywPi9vkFvzsuTy93ckquf",
  "key25": "un2uvmfpBwrwU83UPTTDwfwcYDAJtS8rpd6dwGr3hWq3noEJkWZcFEK4b7QdWMJG9THC7Yh4ZgyfqAYvLefwDgo",
  "key26": "E7VfAtMUouQ62rTdfoDKuz5EqidrjCS5kjGQsaXfUfAczocrNb6qFnH2mYbmf6Cdk1PxQt2zY3NAbY6GDZ7GH3J",
  "key27": "3FdQKtK9kDMfLUb2SDZoEwsYBPiB7ApXWbBQBNtkehDYdq6sjxextCXTUzxeFxaK63p5FEH6znT5t98u63FmbypV",
  "key28": "4aFy8GAMhNrHJN1ZTHVcH9jUFGUU9Lvj2GVQDaqDawGogurXFNEGurBQRtUtaojyvCrimnAy6CrN6Bc4Pq7K5bUf",
  "key29": "3S1QKD2fArPdVhYqRcoKSmdWKK1v1LyzggzbHkf1UYfFt5jPjQX3Wn8hWSPQ5ydYxtQNNp7YKEjTSBrYWuxw6Wxv",
  "key30": "Gfpnw1z9M6URUfvykjLQhmaFMjbN185AgGajW6y7crmdaC4mTSxHnTuFdSbcTk5Wt2dyRuxT4TR81JCRcuo1c7N",
  "key31": "2noaWpdLdrPKBofwStgCJVDii9zhBL5g6R7ZxPuy9eNh8sKq2NrBKfzsoPZXXqSwCMSfJ5KW2se7MWnj18Vs18E4",
  "key32": "24TXKRT6k5SMxuEaM6wuqfYBHAb6F2hzpe7LjwZkwcEsPfSeToSiGUyVFAaj3MScUsCMiWnx8qWvJGUtwWSWdmnz",
  "key33": "5xvkW1S8xj859LfuARhbvRrWjdKZJH9LtDJ9WQysdGCz4hw7jff5oQvRjeDvFU8RQz4ugeqrp3Y6TdZyRZiroYVQ",
  "key34": "2XtAMUWcDBtueebyeBsnHw249zS44NBvjvmtz34Qv8BqVFU7VRVW9FDv7dmKRAVryXK7Zj299CRtQw9p2tfSYrrz",
  "key35": "UDTTYS4BeJnAJWGdeGdp6wwuHEKbFQjFppQaMtbRTABJfWYQ2dtnYoGx4gemhvQQTDttVaFbSM98u7SS6CdowRF",
  "key36": "2eUDBYUpy85StiCCb6LZzDZdR5TVpx72JHgv5G4LxLyw7z8DyNEinEVtrqLREjWAKqthsTKPKfRr8VgAuhTzp9iT",
  "key37": "4oanxeCkFmXK6yDkoQXsSbz2wewhnsmWN169Y7C7YcMvh4jFhiBavc5YtLKiuAX94qYXYfvjNTo15bZRKvytRU5X",
  "key38": "2VZgoAUaKwoc3d3MnoV5sEogPzokTULz4QRnn62dCLUxJQ6hQLSPPsCrQeh6nF5pT87QAmciGrh3nUhN59JweKM1"
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
