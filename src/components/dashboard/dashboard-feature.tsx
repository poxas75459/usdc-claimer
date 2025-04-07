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
    "4wZHW79XPczXiN2y3k3tWYxZDmyTwtvgp8XXKyeBL1kRWL9p5vxzgLqG9Wi3JMrWGBFFhD9eLPB5vttxudVejN2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sspJGaXRem7HUVfUK7be6w6y6U9bKJDZv4i3uJu7Am6NUVYVQ4aZ7Gc5wTWWoV9swDuzmiQpZpzTw4oh1VzN1oA",
  "key1": "Qgxt269DGqMasraFZ8fNBQcp3ScZmvCfYNnfGLjHc9sfAbA2X7TtVtdQM8LqfpKo6Zp66BNXpiDZRhP9cv67Sp9",
  "key2": "2LwTeMCg1fQpBMebzwYvX6d6gNXMKzzyCqdmSSARAZw9r7UuZikYgwpu47vAHu4XKfdBUrLKUujZJrHW9Nbv8zd2",
  "key3": "3T8ec5937zwX7qX2jtYVyMRB7ufkRS2j4HZNNErpPR8eVsPHgcJXcxkmjf7P9cwqAopuZFpn1JqcsugWbsukic3a",
  "key4": "3hG9xAD5ci7Hsxgu8KPd7HtdkKfC67i98AfJTMCAPzyEx2JveKqRKLSMsZdY5J6GpkBaG7jDZJmmBgmGSKEaHg19",
  "key5": "HsCgmRwDEPfcqsJwEVq7mN2VeaSsKq7xXB39jsp7Az9oSvgM9bQYbMTvQvQXua4UAXum5F7VxCdRLBGRiqEDsjw",
  "key6": "V2TZGDrC87TwWQxqA2k5HjGSbPCixFWCwEcFgVeqTGMmhR3LznniR2b1BvAiugdkaBSEWLCEbKYauQeEA1jqTUv",
  "key7": "2xxaM9RMkobYdzyc86ArtLE2zXJa9yKX1xkW7RL8vRqzq9rmme8UV1fHe2ePsZ3R2YiWHSyyV74k1vGpgFxQkES2",
  "key8": "kL6Dduq1vkbUV3woxCH32HPJwFkaykFw6z8VQiLdBo2C1meutP2d8bCcgkrAuNspMCV9Tdk7q8YKUiKPku4jxqZ",
  "key9": "46YA7vN9D8BgNoGThL5yHjW3fGX6MawBMWX3ec7UAeeP34rCGteuQ8Ny9WXHyo8SDRfNXDhgPcc2bgmDxTo4cqZ6",
  "key10": "5pMdB7yQ5KHAZPGbogrJcQ6srS2c1W5rKHU4WhiHeiUReBKKt8Whi9kUvbt2j1PiY5teAD6M3eZ1Zt6LqqjmSMnQ",
  "key11": "3GncfB6GmV7Y21is5NZnZD8m5HQgW5JJxeGGSdL91vFFCvk25ZCTZT6HeKXjqxqUPKMwQL6RTprXRW4evJaukE43",
  "key12": "25gG9eVW5DrHDgm3jP3SZcVnTVHfBTT2e4t9uCovcSEZDtMGQwHkYCt52qbrjzjxfJBaSkKa9tQUdLg6sR3Pza6G",
  "key13": "D21cGPyMCp1szhXfcz4aoPGQwfXkBAHCAJE4zyLiAVMmXV2fQnscWX91z83nY1ovEM4pb5HAqGREp17d5bxpa8n",
  "key14": "SqJDTKuszM2xVKaLYV3vjmPEZ7ot3hKVgDB3hbKD5tihfjYM5TRbmHnyNs9AsH4iJtazvnLL5ZtAA9PPJ3xDHvV",
  "key15": "4cKKndjbVqNP2vnjnYCUooeT4nTPwUxesWuQzz6QasSrAXwXvHdy2ADYpnZ544K8huryTmZqv9HGtvgAUpmjA8ug",
  "key16": "2kZF75q9cPRcgRFcXqrNyKZgzfTQSCS3HWP6i3XqNQKY2THTJCtm3ksF82ioNsBYCATRFFQqBQ6gTCwtwEGotLrJ",
  "key17": "4BfBtSdTypeadQPQZWkYf9GXBiHqQ2sQ7EyZPpsCAncpbpmRnzQFLBehJgsDJjrVBZuZTCvZ1RmupQ3JX9E2Qbaw",
  "key18": "5sPSPjsgZVU2HxN96BTxF31fD4mberVXkpDfNr3cwbr9vYdXeK4XFYCjBvjvtAbN7TxX1UueFNDA9KPXod55LvZc",
  "key19": "Fq32u8tLs5rdAEcyy6C6ej5dSyzkL2qVfH8CqTBFzawpi23wNuHxdyPqj7WJKPL36uW4ggzuDhwsbgnejPkJcMs",
  "key20": "2sNv4dAYSHiKcA4iUMR2U9uZiZGJQ3UQd1EbrSgZHrnogtc8C9QsDP6YNvMcUoCf8v7fzzK15MXtLTKHr3xLgzBk",
  "key21": "zgr5HRkML25oW5XaYxngAtUKQhUhgyLmQNvRz5qxiC46zMj4pAQDFyKHA6bHEPuW722hK2VGi8R6ArrH6VrR4or",
  "key22": "2ccnVUQqzt2Ct9SBWxVd4XN6iJBjfuH8D4wfHHb3Wo1BrXYGSiNJFcuSKLKz6ZbyW4CDZUMqdVpt1fCTZ7nQTgYs",
  "key23": "3zJa6jgDhWfiF8BNBrZLozQ4jgeE12a3PAp4RDdareBftbHN6xJa2QtfqkrovC29KoRKPTfHbhhSyVK5UvcZsZEq",
  "key24": "4PhPf55Y16zQbSi4k7ouswFnsCJkER3XBR3qD787jqLys1WUeB2nBzfGyBpYscwLEPxmvmMkk8oCpGXhddVR2yfL",
  "key25": "3VuEuXnAG8q4grwmLsZ2dE3AvJcWZHie42vU3cBfwZhMayMKL8q3X2MMgegJ2FN9rLPf5h3dqzFjFDCER7Cu5cDp",
  "key26": "5kFQStpTRdzjCueCv75ARFeWjh1aZegzGa8i8FExXX2zGARkiXiC7yy54pU1bC49bbivFPdbe5AzZeqQpob6GfJy",
  "key27": "47AAn71mdgXt2S8ekACJyhDVfScw4VAEiV4wQaTeGvUVrxFpHVMGjKvqV3bmiKGcaido61U2dz8SBMd5SnJirAaa",
  "key28": "5k33Pz3Xq7NvFa3KGBHkNUTvAFKjUo9k1i4ajoTUGVznwSoyJHZnyokWd7hvU8fjZ6KVRjXVcF8ANHPG3z7XHgYA",
  "key29": "2nib6MfCWUCtpP9SErec6JLM7RdAUY2hqEsVi7u8JvF8yhX8RrNALqw91KqJe144gdHhxDkDR25Vbt3X6kmB8u1T",
  "key30": "2DPVpTGcTuLQ1sqgB3y5t5YACxSKot9BjvDymDpusaFYbQNaTbWAjQncvTK6dy6LtW5jodHzGFyYBtqWXuP3xWxU",
  "key31": "4AqpNJ6157P2nK96gKHEEByxaWxC4Q66hJmrxaEt76X2UctPq9m1xPZzwisfEoQtuEUT77vVQJTzupCAfgMAwMjf",
  "key32": "YRqy2uFPkzuAFZ7EAHqADT1o3bcGgQJ3cNfnmBSB9W1LqWhy6L1TnXv7i6KRmYcGYWZECwfDXH82ccuUkVdsDsX",
  "key33": "43nubJdvZM7kBQkW44U7bXjdVmmphgnSec5gj146qWUDLDmoqEFDQLc8gUEXCtSTW8so1H7Ef7UFaJFFq4jFdE9N",
  "key34": "3vhHZPdoYR6uM5esrxiZjLdMCpaq1zqQxD3jZi2355T2u3YnzFynKJs9UHoci7YbGU5vG6xah1TE5XzbbHEJkTNB",
  "key35": "4QLKwnnsTK7iMYVpjmod4TFuDqKYy5ZCr4ocJS7EVc1b9Rjgc3TA84MMFPAsTEKfJC5uwCinH8XXfraZbLhw89w7",
  "key36": "2apzMT5Xdh1r1LkEqpRXmQ1pQ7RpysTbRHNkiEhMSmqa6rJMizjZMeKs6LHpKyfa5VkuShKboz3uKyZr5U7oJVqS",
  "key37": "496fcCx4Ms8sNQNp5APoMbEQ9Cnh4XiAENEb3oRV7NiabodV2qXCjRPbkYqVSsEpQ5Qwcht1sbfhXdtCZqeWWcKm",
  "key38": "3crA87GPeHZCSvysApR9tDYW8P3y117BwJttf57vEPv3QxRutsyEUqyzei3dvjtw6AccLYL1Kg8YFRr4Pk2bCHQX"
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
