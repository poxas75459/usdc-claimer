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
    "5vs4XydDAETJ87mn5Cewi2Ge3pkq8A9R6JZwBVWqo4XDMVDpK75bFW4wZhqgAGvyL7ycXNsRA2DuRAnhmSh8o3dL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HdgdbwyC2xdPz8ikJLWSur96mtJJJtNAbwY83wSSvF6nNci8hTowWKewEYJctyrU5uhvXbAAjbgXYGHgwN6B2uZ",
  "key1": "YBv56VmVKYhJeMeWHcu2MrJT4woyGAMQbGNBGDQfsVzKoCzA5PFXjuSadBKLAKbQszfS6tsCEGbKGNexP3Zxnj2",
  "key2": "2FpsXS5wwgqK8Up8orYDerCLr88fdVgLgcJQmqmwnjsVBGabsdKtThxevb3kDSZomJKqYt8rjJf5ZttheUgeas6b",
  "key3": "5PYDL4Tu6LtxEwqBvGmeLtsRhVTEd1TkvNCiiSHex7AVpcxTakxiwBg8xqaxKdiFrMUZV5mi8T4Qgps9fFjrm7eA",
  "key4": "2yYuDXi2tQir1Qr7gZ2pHuSJdw9FxL9Jt3Qowy7nmBDH1E1xu3uE5kRPEdpEnnfUgQHc1RoKL5gtjYgfEbvoLEai",
  "key5": "3hcdM892763UrcxwDNezrDnexWYBeoRL9eAYfRorBgJRQ8TGTLwBFmbqCA3gngzf7V1hLFAe6x8PkKnq5tMFoPwC",
  "key6": "EStqESBARgATkY21iDsbUw2QkR6vWnipavULbcxPuPbD8JAD7Bd9VkShUwCiUW3Cg2ZiJSdJbDwr1Heg4BYHbna",
  "key7": "3X7XSGm56JTMmmVB8bUaicqJwLQLCYyJpHfW2Y6URYTTuRGZ2HHu4sUp3GcrjBw6UMYQ12SdyesKJF7kz6wFSPLh",
  "key8": "35sZ1BTqZGf2D4k4tjoE8KAWRFyWRhodJ78SucV8HGV7XtheWxGbtWRU4P9nDeYUfmZVzGXVcxnqRvRiFKXqFJzL",
  "key9": "66JK6AbbkfnhLUFrwjLoWkafkpt1m69iS2THKynTwrt6raHbchJyUKxcBeeFe2g7tE8UoMZ3eQTTX2PpV6aaRGsJ",
  "key10": "4ojchKAv6EUuMT1V6cckkEfuyABxvEgurcZNwxRrKmsp66CoWPMyVZynWHSYgYFnfuoa3h9zzENE5qA1HjHt9Dhk",
  "key11": "5qrosTugVB74tA7jus3EcjL3S1U6cAjyD6xNT4jDcNRHESkdxkyvrh7BacE9JWwvFvAVKx26gAYdpi8Kvr7yhwv8",
  "key12": "2Q7eTmSoUbU6dGk6jwcsifL2qKrjPBWny2X9pdC3NAWYDWj9wzAzK8zfxm56SFi2CmTYjscCZJjKyGcuonFQjVeg",
  "key13": "5HmqGEMajubzqcNpdMnBfvt7pct5vKt4poB49ELHyvP6DTFrmJLK8tZj8Hfd5ved5bPfckbaPjscNBpMHxz4MBT7",
  "key14": "63izk9EvfhkCFDo72tFSZfiVGHC3eznV8WFQ3GNDW1sZiMXpHBTwEoTgpQXetu9Q8VdqPkPMdfM59uHu6986ywtW",
  "key15": "2ZesHEkzvP7KciHW5i5AfPfhSXtG773ddhYyUiayjQS4mytDwp11f7eLJatHw6sTSB8H3yagVkCXTsBfRsNQ5Ev9",
  "key16": "55cS9nCwPRNEW4kwRi4W6Ci5jMA1SMij7q8xCq1bfkdyXXsiLABmLLWeFGnuvB8jA9Z9hBnLerBGzrQ1WBCdtBuK",
  "key17": "3kLWbfYri1RRx6HCkJXTfpSqbgkGQGmBiy3Lm1zubh1EYWNxahPNYhBj9uX7SydPXi7qeZGV1Zp35SoNMspdGRHt",
  "key18": "4hpYbQ6CCoE8V4PAYLwDrTby7rQzgmaAQgQMpo86yS74gDLwP4TF5MTmbfPgE4Lgg7441V9wdtX5snJktG75s4LE",
  "key19": "43mymVbETRFVcZrDtBoLmNfeZ4Mq3q4w6iDWZbTx8kK1kjQzDrCVjw4cUAUdyAhJpXe6x6HgTFWMnEeSPPoW1XiU",
  "key20": "HHBV12MU8HcbrWHXf5fdKbukh1bqCA6Q1HcGS2V8cgcrsetQ6HRguVQrvcjdrKXwEw6yoTaKpFgttGSpUEaGhuw",
  "key21": "3ntyhwdWFG1sUZo56BxeJLpfthCN8ykHKvtEnhAgpfNABs154ZTWjEWzFWLySEgqGWWVutY77e2Kc5GNdqns1QyM",
  "key22": "4z5YV5oVME3h1BXcr7AH5Qx4J6srSomy7TkNqGPvx34aZfkcFMh3kvtfr8xhXAUmjbbhh5KMfXz4hWdyL4N6Fi49",
  "key23": "3eNttEqdkEGCJNrhTkWj5Hkc9bEgtzWg3W9Rf45e84TFtxHs3WvrjKGFVBmtuFR3xNXyZj9L7NProbEXfjqVBT5E",
  "key24": "3qKLPH3U7E2GYkWpfQNbP7iHyWai9gsDVB45SaXzADLq8ZVEU5g8SRsqoHuQWLUJUCeyrjqksiirJoQREGsf5Y9d",
  "key25": "5zgyTmusMyEWpgRpZHUNCGjj5JGJRJZq9MjvstQUvSRTBqkAmsGoXSfJVCb42h6Swd9WKRjnoePePoRtrJYcYD12",
  "key26": "4FtSEjegB7bZp2HA1ERdyyhnjK9ApEezEdXiBsZ1PnUdjgHmhRYcCVVr6oiXrbhgaWuMncaez1kBa6Q1vwCQK7Zp",
  "key27": "5zNRfM2vvUC1ci8kCnvAnJZNGg84ifaDbKQes792DK4mq6piLw5GX5vN7U7VBZ7D9T77vi1TxRbZZ5kBBjeu9es8",
  "key28": "5DTEp6B3x23WN9rdfgYjG4MVD47PSfQQMHTrCAZUips1gC4oFd3fG5mBXZcCiFSUVYUNdS8Ka246WwHH933pATNy"
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
