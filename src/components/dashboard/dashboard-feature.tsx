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
    "51YZjAJ6tKYJTdAygCBta283FVTj8vc5MPrjheBuKKrRTWPU6gGuHdRyRQZRWCds2r9RdRCiEaLpmHsGmV4v1pJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4b3Nry7aZd6XuZvYabB5yG2MAxa3xUNR1Gq8H2C8b9n8rj3Srck4qVFjwwezQmdNYJ7kzNrgJDhipZV3vduiaTS2",
  "key1": "qLBehSEDQjsL89gnd9i6htsNEVTAGY6ncEYxoH45PnPi5U5QpyjyCtxwXw5nXHSbn7btjT8yc1ZqCuqJfDYDXUz",
  "key2": "YxrQ1oKRBz1YGdApvYyMG9VntxPDn61C1mGU6qxtZCYktkRjiE8w4yzZd3WMLb7UHpyv4NEFnwdLy5UQcDe35q1",
  "key3": "4M4qe78HVCvGcRAAXDTpMfk7NdBWSkiYDyJ8HAWKGs1WDWW7LcFWXZe2PBJKJmp7wEPm2xu4c99uS9RCmx9wGUEy",
  "key4": "4kKqPbPPbKdCywVHDDSWbA2XMcriurRxhqYGYAbwQ3VJuKC9NR5rotYgXQai2tb9NBtRaDaFG2oQpxLRAX2kZWxH",
  "key5": "52L6mRFQX21XxGRvK4JaMR5drNLrhWePgLJjAPtXUxsXA42CMUP5Mbdp7BoPzgMQ28vofMNZpG5AFPyuyha6KzDL",
  "key6": "dw5wxrDYFui5mvdxLESNw6e5eL4rMQydMAVfnQcqFS37XwjdPddBAYvbWNrdoGHZnG8Hs876pB2TGvjVsHDY6tu",
  "key7": "4GHxu9Qq4PmCjcTR4eFwjgoP2HoU3SLDYDaJ3dqaX2ECqGU7sWYpjqqNmHLQTRDKCTRNCsEoQXXfnhM7kkuwzYeN",
  "key8": "971ZJhQLe2BxNzhv1tp3nUQrpA8fHfPsVXBoAQN29gC5T7hBzuTEBhnV9qyLHa8fx6eNVu8cT9URbYunqu6VsNf",
  "key9": "4AYgWuHwB6bWzLKjnxbAeTvK7HW2yW6XPKgKh8uh6miS1s1uNkKHjCqKJ94UhxvdHTpyqJUDPsvZcXenmEJRruZZ",
  "key10": "3nepCnwDvUdqetVEmtCRyebarv77htBN1PcJ6wM3jnddRJB7BvASKLkXhKDqLf6vZs8T528LLUpqNNDUq8Tg2azY",
  "key11": "2EoX6LPucboaRMxjnRLh4agACuEJDGTS3M5aZGdNiABRq6L2fhf3S5eJvBBB8vG9MSY5q35fY4KDLGfFp5RcCEff",
  "key12": "3DFK7PFkdLiFMB5YAwXZG3YaUJfTU4aZizs4Sw8ZWg3RkJ3LXDXreTpPB9Vpm7DFNapNffC8TkqwyGLeTe6Nun84",
  "key13": "4f4X6SqwkMLy777Sbgb6HLeEwotR7VzMpgStASWxiWxfwEZXHejtS1kRM262k2q5vVQQy5w4ojL2KQhd6x4UMMKk",
  "key14": "48e11x37MKbpP6WrdggFfvbqVdtkY8aNg8jiihXPqem3FE8tX5JGQKbGeY5HJ89WZpgFh5kSrBd1KwTRUS4zoX3r",
  "key15": "3eYAtTuUcRyVq4rmEJqpniVUsEuYudoQyiSNrd4c3Q1Y32SYSXnvArxUfMDdWQ4HDQdyg7bM9d8MfwH1igpdjuFv",
  "key16": "5rUtRWmZZfNr5CqeR72iydXyoLNvrRnkz6AXhiyNw5HLHF5BHB3eiGPuSiFz8ELaUXykevcEw6wHQDzKmRfLwqCh",
  "key17": "5vBckuPXP13auQT4tPtu5YhcM4hfGjHZ2yzEUu6WKZm8y8RMGxgcWAXSHcBJNtUonHmC7vAV1UdEMsjegzrhgshE",
  "key18": "124vYKN4rMS4BWZtVxA6FSDC1z5zPNUgcpEc45ULeZec6dsLuNoybcuoik58SXAdJgbSTrdBeUJo7roHRN9yPoTD",
  "key19": "ECFEziGxbhEp78znCq8KiYD576uxMGr1EKt1GUxxhbqaChzNGCSdmp42skZqSV7BtiG7sqSbBZo1h9ZzcAr6P6s",
  "key20": "wNggV9FAVUGuHKaEKRCKBuaoi326t8iUZ91cyxA716qqT8yLCB7wziSd6bcjxswJYDhTmXcUGDMCD3cJnQimQqX",
  "key21": "5JVqHa7NuVWuJFD241mKARNe8X5AYcjafKYRR4i5X4AnBYatXYw4TZahS1HvMtEwQRBGqNe4UytiHG3Xcve5pnCi",
  "key22": "39eb8YCueVeQ4ig7KbaZQ4wFmkZ3BCXq6Aoy9wMdPqirPkJKSvLputattoHGqsQWpoYDhxH3h6N7v3AdtxXb6nJj",
  "key23": "5qC3mNfqNNLUrdvVPtPcudgioxKcsNKncNbTBjZsRzZQTzGp4CYCCUDx713sKBUQyWMaEy4NGF1sUu4X5oZfZiWi",
  "key24": "XDaiAqqUCAMbXZm4ex6eP8pb9bYoGVDqn4EaaoJoiLd7PnmMJpxqyiYBBw6f6HaFMB8NsofVmwJsPXvsnqRLYa3",
  "key25": "3DkRQXva7xbpaaqogavhEeoCHYpvY1zP9K3Lzm9fYQRgRNVRaAq6RSKU8bTcLQosmeVgdZkPq1ko1jsi2jVo7J2Q",
  "key26": "4w5spiZBcmoCF42Rv9nJpMSnCj8AkwLhj93Vzgt1LFSJEAJBL7X4ntNyJvc21dwhyq9ygTwt1FmDj2kikxqE95nM",
  "key27": "2biR9kscGLSeD4vtRLLQyYYFLMavwSF8iqzPGZGGwQmA3UfjKPJTk56bBQxjWypm7MMoi9dmoeZHrSfUaXRN67cW",
  "key28": "4qow5Bz9sBEkRebdbkwQsZzPNyNzwP1grFxsqUh4fwEGAc8XKMj1zBmonCcY6rcVzJR7FgTJsDzoArWjGVyxKKJ5",
  "key29": "2F3aL1FE8Z1ADNMFV39qaQmsXg6aNSnCzED5i1kKqZ33tnaqb5PAW171paxTsed7ekki7CM2ZSLukCWTRZvWV16u",
  "key30": "z3RExr3tLdWFJYbnRfhqEvXTevuJJTpvYKqU7wEaGbo6yc5G2xCAZ6T8SmE6jn1JfmbNF9HguckqFTypjQS3Fhq",
  "key31": "5JDvjqb5NDqeihTBY2wQqxUY8hfaRBr4jhnjfa2gXLnHbiupfzzZam2LDyvjuDHxdzi6ZrXUhuUyi7J5ft8mtSXH",
  "key32": "35nGex3LFLXUL1ddM34M2inaq69hvAJUSrkbR4emnuG9ZmKB5mDDQx3DJ1rVSzeBg3vNE3pwnPUJUUGDpDv4gdAf",
  "key33": "3DrpQWhCYJ2g5uZTXJsAiAxsQiXTpULfEidLMsknFVPzrT7PGtXEuq1zXNZKwRAze4q9mNisbtFBiL5LYssPGcFB"
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
