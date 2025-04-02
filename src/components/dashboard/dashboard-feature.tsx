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
    "4EUMLSqjayjpu8f4Uo8MmW7C37211mUU6uSdQun7fLmJCxmnshoDQbPLFFiCKStknk4kB25aZNvDAeiPk4cPb93G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdLvSoySTUba8Qjc5sXdeUufeCNY32LzjumAyYgKKnrdN5gTcBNL4jLj7NkpPwhyrK4Tj7UMoQkTWPWsgX99vkA",
  "key1": "32UDJDxbzHGQ1ZD6ED2KpcY71rpVabmbexuEvp39ymsrJvbPagJRnkkjqHjqqtsphEn3dttko5mLw7PJD6VUsvJF",
  "key2": "5SUiCXxYbEbszDG6R9F8F1gyq7iZJdZA3SZvxLDnG1dYFcYPpfS1KpozJnBgtLmpNfTCH4H4a4ppTbFkNHQrE8oX",
  "key3": "5DmoTYPgTNgLx1GwX2wt1XG9Vja25EQoHa2uDynX3tNjUQfYkn3cYKmrhkN355aHkjHmANhzhBbkHdB6kw5oM85c",
  "key4": "4b7FNgHVCc9GYPVdVoqWus6kAJ8wdhnybCj79RXjnQcpJWZdZMndsqQugczFFnkCUjfDYej4PGFGDckvyoSSZLoC",
  "key5": "5KukQX79ZukL5LvMYoaJ8P6rLqyfojMa5Mb6E4Bpn4HUKtRv4XTXQsWVVhTtgNgZfbJDgYq9y3AasJL9gEQGCYC7",
  "key6": "3cNqFYFgGfo9SEuBGhtjNgQnDCCuyEvmbNnkJoKgPbwbAXyJUuZPEpHaNBFgoGBTwJbRkbpbHfKDqLc2uGuzMAU1",
  "key7": "3fhzHbsx4oRR7tnjuJYxv325NoPjgMSJyrdHc1NDEdNp34wPhtcRNdSM52paPa1JBZAFm8LBLyPUdYKg2AYMBjdy",
  "key8": "4Ke5H94AKTQ9qrM6hb7Kvo2CawayR9mXvzgV58Fpw8bg8GS39ijPf8kUHQBnz59XSEJQwbpdgSNB4fmVy7TxyrfR",
  "key9": "41r9jsamwLQnK6sD1yaFwvBMMmgj5yYvnULmrdGthu7HyAjh5C9s7SHVJFoezp2rJxAjXMq8bT9dHXCwZtkKpRg8",
  "key10": "2x6X16zBm4wruhZexnZuWLDqoY1CUaw9dVcGRPF3U9c5RNjdvVZo2JhG3KZH7Jqz2pMLrJBTgdcHFQfcFJZK5nea",
  "key11": "2ZVkojWP6mB7ZUzXhaeomPzDMo4aciKAnzbYacKjyn66h7rcwHj1qUK7uzBET17hDgeyuXjMjKnuNWzNsFfroetR",
  "key12": "5ZX19Co4Bja8RDxesykchYF8M7EUMtKDWVBUcbNsUzmbLimNwPWf1ikEukyxdXKDEceQMHby5V2muWkCsMyjZMxU",
  "key13": "3WFHKyC1zDYSSzRaXB9N1V98Zi4ZYKtB6jRBj29XTiCLVLo5rtApTjxAXY9rx8amQKB1UGnArrKTeRS3CLBBFwhK",
  "key14": "5F8NM3cVLPzv6fbz6P82XocvSMHW6dtNA4cj9vUHd9QcqR7hCeKwo6rH7AFYJgZG69ecJZNMiNbp3F29dxsTqGGk",
  "key15": "4qZd4gUUubpSf5dJTbzJX999HmRMY8QxMwsxXPnqhdSGiwytDW5DZ9QUHy1bcqJ7oGLTtDjJ8MonPdRVrK3kcwBy",
  "key16": "5sixRg9gth6uWN6XEFVhLMDhJjYD8LjXTQB3dSJEcVa3YHkHZzcbAV8oYLWWo4GWeBQ691zgj1LcePx5j6UKsfPU",
  "key17": "4mkfxpkeiiLb54NBgr58oiHv8tKzQipLUMEafFpfVVK5tAuLUMb4frbm19NBJytHymnnLWZBqiAPS1x1KRLMDCzT",
  "key18": "41vMRMPppf3ot1skF6356vAnqmgq9TeWn8jgx7kYFBr7ShZMBN4CeWFsSHyWcS6PEF2aDUjMprA37ADVGK6hFkG",
  "key19": "3Yjd5fgXYD5Sw4u29ceXo6TXZZoFguCZQNYZ5KWfiJuFEyjDtDGfETPH9a2U1Z3CGPrLh51v2mZbCoJYToMPtVgj",
  "key20": "3ESG51mm6rJHT2WnRu2FxEDPSm9ER52Echbgbdoj2nWrXiyc8fuMSk4VtoKW7JyBknBeVNtimWZ5tnirZPXSTcqa",
  "key21": "UdKwim3hq3XiKRM84GABTwFZSHdd6QNkswfiSMwkZowkhXt42Lg175Q6RJFgNch6fSzrD7Zd2StnX66rqJBvDcH",
  "key22": "31aQXbRjhpmCkyJCsTaUk1wPotYha7SEmvDihdS18QYnFZcYRKUpoYH2XnFFTPHm46CCpbSaacdtyWbUwd3Grt8G",
  "key23": "2MtNahmdexo5QSkvHwQ1cdzzTBiyfAVY5AhRwdnCVvKNDsMGKjvkKZBGSzfNszB74tpigfh25cvFXQmMPxfaRnpg",
  "key24": "5DUYcrRbPZZyYXqs4Nt7dCuwU2DtLhU3cYk66bPdY7FUc9dxECCFfCKVYxjUrrfxwBjoAZd5PP6bHnmTABeNyCcH",
  "key25": "LB9xSFmx6UWDbyDiFXaUudFXbnsQgnTe4uk16M5BWX9Tn57FbtBWmKJKz5oj9E1UgsyU5nDbSEdTGtPGtw6RE3y",
  "key26": "2McsHt5Vz4GKjcPgcYbK6diuAwdLYV99GnGwf97GMtx4YLyzNNKEDLq2mz18zt4iP4KimmNAjLjhAbkspWxBwoVE",
  "key27": "PFn3eahvpyF6BPkpb7pK8GpiZMxAAr3ZgNvotVNBBDa89FzwdNd9tSBSPQUwUsFx2Fz1n2wN3F1MqWBU3SNjuZ8",
  "key28": "5fJzTMqAuwGGuhqJB2zEWbDpct3u1PRyma9wzeiL8VZCNZHKvk4ekYMYL7nmkYGUK2u9KDPCiY87j7Wrx5ESUBYU",
  "key29": "5az6Hpssi5QsHC8sHXrB4sHsFTDeB282iJ8PZS1jyqjtcugYfW8i7Qngg2PswDQ3oaHmdhvUNti3XB64rqhyswCv",
  "key30": "2M5VMVgamyDfudggjXpMXQWzqWfDNxh8YbUSdPHethzJgS7M43EC2H714uADEUgFEXjkH7dQzQzSoWDi1SFEBFCy",
  "key31": "22bWysbPkWVLscNjJuhC468Z2cRxEF142f4UYMrAh14wPjiqSAJjkjQzK3bUcXU2ry5eKxFh3SkGHKLZnHjSK52w"
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
