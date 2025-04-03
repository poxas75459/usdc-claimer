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
    "5sbc1rHokNR3aG9koFwHHWmkAqwk3YiBvMUUQyX14vCMW7gnMCALupVwF6i3PCLECsth6Ja48pcZfJRjPTvD2Z6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4USL3QYgASZWoTstXmtgFU3sQzJ3iZEvRrKuXpctZBB9D4KuYFJNmARX6RVpzPDSwHvWpqwRt6P2H2uhtRiMYGCY",
  "key1": "2eCMSJy2ALVu1MrPWViRvdHq38o2EpgHpikHqs7xgVHGRvtmkuhHrEyAeC9gQN1wGpSopqpmLi8DewH9XR7xajnW",
  "key2": "4sthjaxVg54A6DRviCH3Li6NFtZYEmkqNjkPdnkMnQk2PxSZmSQN7XXB2cCFk6s5rUJLieqbJALcfB1FykDCqtAt",
  "key3": "5uLy9rQE71jqE96oaTtvjuVvK3inxLZKKzZ7GneVELdcdqmNfJdYCMLZYALZPrK8KnVy5wFrLmhUyWRQ4Mit5gfc",
  "key4": "wDxf5fkK8fcns1hCX3NmrN5B65hABZWUpBApfhXQ8Bss9dMaHSrNTMAszZmsdXnBh1nxQ3HDRcRpvKb7N7fL9yQ",
  "key5": "4NeTnkkPCUva2kvxu9X4dw4xWaZ9Mjhj9BP5egcCX7eLiqBVdr9UW5KKDfc4QqKwfZDz52KSYtAh45usDy3HaZEC",
  "key6": "2FNi71EcpQy1DuB9pLd1zU6k3eUxQw2AgMMRqssZxgQkQg2KJa5pZKtP5HaJRuzij5TdzReYhgJJANZyjNGSq9Jh",
  "key7": "t3sTNVcn2ZY43AEwnCPtS7Y7LE5FgXT2FYjzLyJ85TtdXPiRVJeRWe5indnvwKTz1eK5s29B8YdbipbZoM7JoMm",
  "key8": "5vxvUF7R1jGGiC62XVWKGaXffgEoZjzTQqrdX73Pza23EnmjgDq6rGXcAHeswGn8yBwtL5h1K56isGxLoy86tCC2",
  "key9": "hZuJn5if2D3ByEkWMNgiD6SjsmN2fYrxE5eMYx5hm2e5HYyUuwEGcafPWByLbLBfcVFRE315qyJCnB8A6Rrp6kE",
  "key10": "5Mwi5wjwP78uETPchrfP6P5ihtNLyESAtrnY9iZfsgkzomctTvJxif9P51jU5Jr4q9bJrkNn9NiXH9WATcHucn2",
  "key11": "2bcCcZmJN6ppnvE13hm27umpwucGCmicUAgD8B4NjJaETqqVCa1ypkDqzJSTMRxdkfS3pZycckWJv8wjMYHV9z97",
  "key12": "4ETxLpQZRPfKzZp28WzyGa3FkqKZn3SPwiBYoh7hrUM99VK5uPTSxBe1bJKSynxLyKrofqghRsvkZQziyXcgnbte",
  "key13": "4am6LiC1g6oCJnk1YXK6rATW23fY7eXsA4hePb6Xfj34btastDgu82fJtyus8Sjm7YUxq7paKZweUN4hgt7mumZr",
  "key14": "4ah32DtY8tPda3vm9zqeZhArRJFsjRQ2FRTztdWZ8gnbQPeaw4GMZZddiW2SQ2AhHcp2TJUwnrMHUDRGJVHUpgZk",
  "key15": "suXssvEZ8PRfQ8MHEtfv5X9Jp2GmAprBY2HhsFL6HaEAoSw48unJobPkpsVfAdAdM9XwCsqxXBfuw7rnr3vrKtY",
  "key16": "2wsA6WgC4UwTqwgCvh2fPiPpgPcvuEdpgMLEQwzjq6JHWccmr5z11VmvPwmZpng297YLQKHdY7FLCohB55GJQJFA",
  "key17": "2r9HNnHNtU6SpEogyxH1AdUiUnSACMuFJiaALLm1AjkBmExb2Z8LgnnXZZ939XLn8K4BPqarRG37FHNb4a8Lxqnm",
  "key18": "5sx9sN85KapvT7jYCaZ2vecTTnmpSXUF2FncCxchdnCgc9qBwGK5sTGmKXRnGqtpM9U2XKJtvjsnzvxPgTuNUu2u",
  "key19": "tYTp3xPZLPfw2mnzN68CSWaGgbFrYuK5vYq2825ahRHJQv85nQX5pXAR93TMRvWEcFrbqn3LyY4K1Mpx31QrJw6",
  "key20": "aAeQhpv5RbZSAJ1ZeUGDcwftyStreQP8c9J6RmiK9q8qSfPzCq8HAZr4SmKpLy7gfBbkwSRWFMiBQW1Mt7UsemZ",
  "key21": "4zQzANPqSNKEhy3k1Hgi76ZJzrF6ooVzaVSb9goih6vAFJULCJ5S346a1fxyczLC1yAA5LVZG3mJwDRmuzAwkkgF",
  "key22": "2M8dpAPffKwJfD6uVZgKFt94XPDTqoTqGDNJC8Akq4ieewxUmGcQAbAuwBZ3dZeZYbFuHQgf6fhtfe9BJdvNqCqG",
  "key23": "4epmePrG7C8TMS4KhupseKeMu75HXA39q6eMJKN9QjPk6yNHHr3R9v4bhhoAybiuRisfFaHKTkVHJTRhJtKXTU3X",
  "key24": "9s2KMpvatfoxYRuRh4MevC5m422Qe9QWU67LMGFzQTdyekwFG2GhW9D6myLhmTVDjPu8gHKEswXftchqAx3JgVY",
  "key25": "UXY8XEDSqUHmwd9hFRgLA6hwo4oDFCKRz6Vqcmd8bjRjQURm1yiuDTT8cQ4tsrn77gsKCZNQDo4W96iSVKzGx5h",
  "key26": "4x92Fe49ncunZ49KSahGd7rDMMvNbqYjUEZXqwLCb5TUznugmhddnbgskkBwSqm14pUrKFm7azUpWWyXS677C7yg",
  "key27": "2Y6xYEXid966kc1YcfNVpFaNCgKq4FdBSPUKMf49vV6qCmdui4xhQf5FGi3bu3sBXgyNG4Qyo52u6SxDkkLqJ56R",
  "key28": "3Z4SpfrJpHkDssk8aDKLj6h3i4jHTKZgpRB2ARLPKZXjPbL1GdcpfvXPHSVTE6TwJ3BWu9GPsWkTmRGJwnj2GeEF",
  "key29": "3FPC7gEXS2sZWpfuRB49DQwsdCDNi2dcBYq9wHdbVUMqVYnppNYCd47q6wFJU83wV5UsoAo1WLdABUCykdqjxTaE",
  "key30": "5NL8rz574Hama9Xxv2geNxNMtM7XwZHZxrfmGyoPdWCpRCkSSRA296YK7RL8cTm2TDr38WiRbcTKGtEvcUszFL1D",
  "key31": "2iqsnk1BgZvy9kds4TyUwGecpdw8xLQcFrtKCDrWYMzEsx11ejYdaVUapHkvksaNVgCde9jZ8TncVGdLTbFLNpG7",
  "key32": "3k5YHiipw2Uux7srr8Nkh8Ypo1o66cX2yqDSv1ZJuS7rWTAqyGUAV9R6TsseZVvCsvWiXk9DNBsNcZqVN7KCVeND",
  "key33": "9dpp7v2Nn9Y9h27qyyStVN9tiFEDciCPu55dNTq4CnjuEQTZZCi8XBGb9ffvzkeWWqkmYUB3i2Mq1PMjK8PZt6Y",
  "key34": "kJfC3QyD3souDhQUeCCKAAR93qPG8w1wnjYEXrUU6Twt89pYpekG6druHrEE9Nxa4iev4d1kzPXucrrpR42WNnc",
  "key35": "YzuA6qYR9JZMhGgCGM1qsGmKu4pXyrNzQJMGPRyY77nefoRdwp8JPeXBCKuZiA7SSDTptVCMCa1TPij2nbWTts4",
  "key36": "4ZmATbsY4mEVC6GcYNZWkE9bR5T6X1UXoxJ1TU6zUygUWcT7x4Jfzrox5qAL9KehnKQcYuaDpYgK3xxGm2Ggu9JG",
  "key37": "5Ksf4bgQ4cTzimgjhC1jiRuucReSzwJ6ytFfGDKeY14BxVfXMPdHLdczNJUhXUeiKwfeHjjhTBhRywXV4fXn4sJA",
  "key38": "HCCWmUEh4QfzHp74YGNHPWjpfCQc8LMdm2wCRqsqwuydRicaUEyajnmAMU9zmjYkfgVEKqu1LWJLrZig3H6C4fu"
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
