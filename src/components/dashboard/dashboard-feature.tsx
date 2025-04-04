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
    "ed9SAh4Exu3MSmGfmaP3YsKi1Fk1PhFjBtr7ytXpVa4d4vCzzVcyc7CEr4XFUgHbmVswNw1meD1YUZQjGftqVEz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54h8EHWV94RKdcyvx9E7foVoPNhfnMBUTyKLfTiSuhnAoWcqZqnNVguagkkvsVdhpKL5PzbkUVBpg8s2dRmZDX9s",
  "key1": "3EL7iYUjukuJhKq5Gii1npsVCh9oNYzqvMvnPwgQnLmFAvF8FWaPPcvZ2vudheq3ZYqvF1xqbxkEoxWRVzuxYKiQ",
  "key2": "3NDxa2BgViExYUVzkNu3rng6yxFKxZqm8jvx9DLzF1E7SirPNHLUzp9dNpjUJsSXvwqY4wowVj2nyg2pBWiPbkDT",
  "key3": "4TaPjGwAVcSKgQP9x7HeTQyDqn4aXjTjWsLzCCE2NBXQAB651ecrVPiT5aYwB2yJcs3gtnE9NrsvsTSUCxGTKTDK",
  "key4": "5T7gjXweM4oQXVkHXGA1EsmwG7HQzvspdH6rJvXM1yn4P5tGZHinWZ3Q8p76NuTdRVqf6U4vqxPpNqJadZkYtGW9",
  "key5": "4wM3E44vY5qAxi8hVeomcecGciFsZCQtkHii7UDnirppQ2gbsyvMCEXRBdTdkH5ABKUvkoCSnvocj55ULzRGY4sL",
  "key6": "3J2UmRAU2S6vfXu8UJevP4SgNW2c7yQnBUDeFcXcDsmTHCtcVA2ZzbXfeAwVB46jkd2WbndQSkoJvQgoRZfACrp9",
  "key7": "2nEU4ZxFKGEvjDHxPw8RSHYXbASJrKE6xQvU8NMqbUWdDBYc7ubqSNjCcD1yMieDgBdLkvrpxD24uVThv2JJYdeq",
  "key8": "2bCCQGa1kEaLZkRPWKraR2Nos7Sfda3AnsVNFwy1jMM2yEadkPCbTsHXkh8PeJFj4jKfKF7Y6pHPpY66AmZNSdGx",
  "key9": "3TWG3FvMya4C9sFZS2AWXkKLUhk44yV8qKr9UdocCuC81XfQZDt7vCEL36y2hZ2rgKxkxpcL44DtNiqefiaVay8y",
  "key10": "626dJNsxWhweSVQhmDK9BwbNENhjzAXFAj4mPxB1jdbi8bdtUZRCM4JsWz21rLyDvkGbKxEzuJKNFz8d3hT4rQyZ",
  "key11": "5tHermqR8uAbijkukx1kVX8ndZpznPso5qisExaddEJuB61pfq11dPg3cyWCZrJSL9ZGrv8RSvC32NypmpFmbfJ9",
  "key12": "5SV9t4rU3SJkLAUCU9i3ZjR1pUgfQ6Hx45YExsWLeRZ3F7qcvPZU4rGG6KAgDMtaitdGEs3FCALNKhmuNCV3AJsQ",
  "key13": "3iwpNLvvbVfXX1yGNorQjoNLCiYU5tHyyxV5ntawLvHk8Htyu6bjBVnGP72FyK9YsP4gpGXPK94bMp2RTUtAja5c",
  "key14": "3dDVNc6joYXPksrRJtmi5dWbCooNEzLeB1Uw3zLX7xKNKtWKRVao2soy4c26AVBmkZBY7d5QiSJ1AXfhcGz98wKw",
  "key15": "4RYMq5EM2cXZENXieURRzU3yPbmaT8TpPcLMbKNnSQVqzRrMkUqXMA7xG2prYNuWLs3v9p8fb8oArbWg9DmB4fYr",
  "key16": "4mQ2vMUYsHrUBhFHFJZbiSm37DUq9K9vvu2n6PNZKw55pyBBPXCdC4Vza9Sf9mv4ZpKAGMxDUG3FAXZTraRA2jag",
  "key17": "3YHDWNhzt1ELMsNQfNVCRJoH4EV2ZcZPWeUEbRZ5QFG9tNqbAnvjEV9xAbMfTnaiGpW1V8b3qmNTsHzXJdPKgFMK",
  "key18": "AwFURdZyCQH6q8Hi3H7EcXfeKsiD7mA8nrHfGzggHy2nhnnZ3xwQAyEDv3dsVisP7GdkrV9jh2Xjd23T5TxA5V5",
  "key19": "3Gej8gw2s4X466i78TLAA7Gq16SAAFGicwHK3Sn9g8h3VwZSN1DnuDEcTdGfAxB2E5KCfkMaxDL4yJC5e9wcZMFf",
  "key20": "5NAeBxHEizj28yG9aPqdtJcMt6u5bkPU6Y7ALRnDEwebxJBVQYbvSMHC1eRs6cpFKkJ2t7ySG5kvFmPybpf3QoGd",
  "key21": "44YMQmoDf1qAq8AoGKNdxnHBKiWtYsWM91B3bCExXpVCGa4ErbiQyLKCuUzdtPn2C88RKLvRtiv2tswxVwP32izK",
  "key22": "4SYv5USYjf8EeD5KEBkGoWzE4Td5LVB7kArEfK7rHgSmqfpQwGf1poC135vsbkF1R4V1q69D37QQpGv4wDtumxDB",
  "key23": "4a4pr3pLdEBAcbpzTrLEcinJX1LBwmg8gXvuXZUPouC7xv75i2ZsWTJQXKx5VdZyw2hGaLLNjmPC8L6SBcghBTSp",
  "key24": "59g5MneLs9MXYuhLeaxcq5uHeYjv8zyg7ci2KrMdq956uhTrLcaBfBy3WHWP33vYcDQXhCNNz3rej76aKVZXuN9T",
  "key25": "4g3CpBwq7oYn7yAnXySwx3uB8PMLewGcQJaH4HGCD1a5LR3vnfk3x3r2w9MZZwSDqTxkD7jSLZAK2YRVp1khKHKq",
  "key26": "3vCs7bcqBMxLxYg83CHrBkgiFabZp5Yx5zVJ2iJet3zcLd2isGhvz1btbUGuB41u7HCrMM4xWYzkpgL2jh3XiaaD",
  "key27": "4YtofZkcoFgKqwUomFzZb5dAkf3JVYFSqFT9dXmCBb6xakdpU7fYvzj6FxdA8QvczvXCvcEf2wJgduckSR4NcWjR",
  "key28": "22eGaiVKnSZ31oAh7rpDB2uGm7Ar1xgszSfhExaXECG7J2MUX9qmxtP7RZZeLe7hYpAQy7wYh2iBwFf4HYJusuXT",
  "key29": "KHYtfdvoH5aQTnx4jraEVKZaxNyVisNoesGmXt7XdeCf1x2WU4z5MkBF2zr27F3zrh2TnkuGQRZL6SkfCfvnKA7",
  "key30": "54Fcci8rS2HqpbTWXL6qbrNPq1zw26xGCakyhYF38pJDMa3KBcwLEBaebMsstEmUPiC1LuMQeqq2EZx38UhTYbHd",
  "key31": "4MbV6bGZbvHt7vLuFG1ec7b8bkQ1sFW3Zd4z9cxmMCYwKXgRQXwVFX28Ro465UNwHH1euEwbTjRZnAobbprxQFTL",
  "key32": "F2rtJtuY9AtLo32SscVctANgApFeWdKCPLEjUJWaD3PQPWX2Z1vpYwpvRwK5yLtXGk9wSG1cs9qCxAbMaYR3Uof",
  "key33": "42CDuoPZDDCYZBoE1HqvPbLwdhdMDnFMbFfN3hsEZ5s3m2ExMsX5E51Y75tcQkW9QQgbedTygPCYVsUfme49omas",
  "key34": "5jb2iDf6ABW9PEcmeppkA4ZuopXxdqi8BeX9TRtiJnsiSbqH9fdMKdiWHfZFtNVQKHnEwDKu2fnrhficL5sS2ZHQ",
  "key35": "2e3sAGW59B4yFo1f4Men9ver9pbf6Nus8LCJheVeusLyrURXC4KkzG9CisTCxnyQBG1NVbYz5g4ud3KagFww9GGW",
  "key36": "3WPJf7ZbEDCWMj5jD9KgDADJ5P4B6Vqi17oDdDgthsbfstYCxtUVemCRy9oyXyDmMuRWF2kwsDYUNBfo1F4KRndZ",
  "key37": "4tEPHeptK2BgViwyshuk8ypRECA5wZZQZUqosxim7WsVEqcNQMWdHmNwEAA7r1u5atbAXAx1PbQAoiHeSb6Ur5zW"
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
