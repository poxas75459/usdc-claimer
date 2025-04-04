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
    "5CNNNQP9rEyZDPZqguM4mNbP7BHqPgvevmTmkcVFS8AGs5xkJo9tGYLZWzszUyskw8fTgt6fkQHHdq8Bq94RT2yD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W92Zbcy6H1gZ2qaToKdUVcyWZAmm89ibZz46jLmaqAABsFdJketTMgXAKtVg6CskqAE5sVrQ7T4BrcGsNs1EtTb",
  "key1": "4LyPMJCKEDmYRNKggNQfg7QLY9Qv7Fr3HQaDw5JJj9TsN9Uz17xKoGKYYLWBXusZN8o6AxdDQgWYygpDNQBcfBtz",
  "key2": "4WjJxydJfuWhmj9GLrzRN274GodpRms7sHFsAb1EETL5dUfhrk3zR2Y7iZFDNiARKA2LuqZJszJotekq5jyzpHxi",
  "key3": "3QB5FGpqGKHGZG3e69gFBV21D79qFfUgNG8n5BTr3eTon4vQVQ91ivzAX5gVHux2BnYqc6HRVfY448oDNVfqpqfQ",
  "key4": "5hzZuLnfs3EqRgFCNdofuciWvMBgxAe4ggtn5GAAtK1oZDRQn8PpyVL9WPFVcfQ6RCGjDssjkWDepRfkLkXtDVDV",
  "key5": "2YTA3ueHKBtejtTJ3DewR4PP16rCP5DNk1fesFmW27sxi4ZMoxy1KjNvYPEBHtKZdT3DqcCPnZmWg1qDgFCvBNR7",
  "key6": "4Mb9fv3TfdbrXSMdMmjqtRVhpHxoa9bsJemtCYLQKMbrcSmqS4FM5r3FiWJ73mGjMKnthrumga4mA71EPzsefDzs",
  "key7": "3EZms16JhKm6oAnYS7j6DPwex5c4xTPioBRLAQYVAJGbXMWDRjfiBCGF5qcuLqf2REghZFpHqqzcKdQtvmLmschJ",
  "key8": "4jg4DbXWy82LHRZHqQvinrYCT7AQihehoF2WV23x5oBj4PTUeZtTVvTaNncfxtJgh7smkT3hhxHqPmyLd8kSZ5rc",
  "key9": "2YTDdWUKQd2huXdJEiesJXYKPEYdRrMY7rTQgbC5SqBjADMk9sVgfFhDCcAvYXgy6y9xngHPxi6jY28d3JMm7UFa",
  "key10": "466H7msqYuKJEEarcrwkisFiu7bNc3N5PT8FrFsPkvaDQm9D2DnXqNja7QnUGacYrVg3yykphvxaWnXHtARkxJ7f",
  "key11": "4mQQS91heW3EN8WwP2ppTMKzkuBZxNytkkHCoF3Y6KrBEgc7FSUqAWV8usMHGZkFK1uJhZURKckGjm4Haju7iVws",
  "key12": "2MXV3mDviW11TYxuPY6ZY2wuDM5s5GYzCRfeRkpacQ17w5NdLkAMg3Z3aNC9JexHoY3LwVdYcKzE7eABgf2D4xgj",
  "key13": "2uuwqKvqokspy5fUScNP3DuKjcMPCJKnTCu7gQwMzciS1bdzNx8SaQYVzRkseZm42bEk4Mh6a952BvVBmfPipUmU",
  "key14": "4mk2ybSADaCY2JoyMg9dUVequ9Nm159s7HQJwkTmkvCFbUxUva9hUQ1vee6Q6DTKHs4u6XtwJaf6uQBh7zErCBtB",
  "key15": "5Jh8ZuGFBr5uZBKDsS89wF1eaEmFqNnMHfQKrx3pNKeE57Qfq62qbqNgdSG3QCrc45hSAdpHRYL2bUaWGpFmfsve",
  "key16": "vU4gDJB5Z3NGjZH39SK2rGVrt8G11mQ7NBuvf4dtHZoa4fR5sLMbAov4nQxXsPtHNdEhA1Bkws3exeqEM9viLo7",
  "key17": "2kVYSBoDGY9f5rKf821j9Kpz68VvbU8Ka9XQLKG64oStVSekTRhSpynmFpM2qqARxsMeqiPpx1unAsDkpjFoaa9j",
  "key18": "2utqBm5YSMJjD3R77NcyoBdKiiiptH1kF28WqEtVUzgAXYVrFcJm9rdEFn2ef1wgSP3MH36N7kS8BzfSXUFdhrUo",
  "key19": "4abpAoPCP6fkrg6Fh9KEiBCejZZdeGAdB9XCNet1TSxRe3vfmjErtxwA8fwhRjaJnMouHRfvRn8K1YudDoJxN2gK",
  "key20": "qrauPz11EwjeYFDxPGwxenaiMHkfa4wHx1vARauv6enxZrzs1mC5cr6QoFiYrs22cqa31dZJzJxRaDuLVao29ks",
  "key21": "4mT1CLD7AfZ9FYk6MUXkyBJ1MwAEBLRUgRZBXNscDjAk1vHZ6L7suDm1gjGPRXTVkUq3y9UrFRxWTqLFaprbQ2mX",
  "key22": "D3JnWZV1g14XKbaS27fhcuHahtuJmMfk6hPTToFjBd4EVFfEQwHwWnVvSUoTFrmErtuwVr48WVr6MH1GxpAexEi",
  "key23": "3eZDEWxsb7nzcDtYEsqEjPoogSr4GtMA7XToygdiMPTFkPgsGDeGxa7QfXt4BHoZ9C6aLvmpA6AVtVtfUYDPbkBy",
  "key24": "xHT3q3eUvAk2FqfnQBesAbENnNFP4fcYdq8JUnRxWi3uUEt29Jo3usEJ284irjzk2QicVGAQb5L1Qe9vxsxtLZ8",
  "key25": "2YSmXhUjh7AcckZtVaZRpDQezJe4kZkbqCyKPXP1yhxHdw5zJn55AxdZ3teqdMxQGJMarPkETRvWfjMgQb4eK5PX",
  "key26": "uTQ3QPkBgCztH9nwGhWvaCmyJzQuQ8DNReFMu19SQJMS75Tcr7iKSFmpBb5pqy8boGrXMKrbcKBHKcbJBFPa6Zo",
  "key27": "4AEMVPhekdVPH7yNd72RdZF6Bbc4f4CPguFppgCWukbHsTWBz7FgubuJFUa66xExhqKrmKp5DQBfxicwPsdaCyyD",
  "key28": "4K2hNryXM6Q8udDoEjJgqLonKAwXa8aPqNGR6CnmnW7auMAsG2QyRvdbZhotSg967vn8Vj9pqo7PKh4DEPw3egGJ",
  "key29": "2DQKbKD59xjQyJ8g4to59znEUxVCHNbW6RkPr5aPMQmKRVWhVPvPqNTZWxnZN32v7wHXscxd1iWE3jiv8H5VCEVE",
  "key30": "4C9gtouko3hj8zhDBxaweP2wCUXXwCWd6oet5PMJNdkPpHFk7G963XQd8mnKqA38JWLrtrTYfUd6SVLFEu1UipKM",
  "key31": "5mk4kdjnoiH4ikQ8KaKJ79ngvirUAqPpfPAyCcoiwVdXnd31Nu7WYDvBtqjYZMHwnWVXreEFXrChideRsxN8XVMa",
  "key32": "5xMrD4hWbbZuETUjtWrS1uJ99J8USx6oybkztwMmtCtdnLcTjtx9UeL6pr1r2qxfM1QBj7RDAXenNyo22PamH5oW",
  "key33": "21ebhGDCaYadfngo3K4eg7GmT2Ne2rTo3EA7r6BYREQiQfxAeKdgShshZ5rnjjsr7RFFVBmUyPFVxc6p4K3wGkGo",
  "key34": "2UB8XJkSpG2Q51NWPNyW15G8fPdr8dJGV26w74JPfzjmpqZkLs9b5XqnoL8AjhxXybueDxRNFuWt2pXVXEUKA3t6",
  "key35": "kYwLxiv1WTV4KrwEVDApZonS8bMMMBTdjcWTsHQFaZQwodyqBtRmx1y98nKCKnggcKNPBxMutLzMzieCFAUMmH6",
  "key36": "5LfBrGVFpmvX99F6fpu5QJUTCou7RaHdzvAT7gAd4jLS3n8vJSzS5aua2aQEfqLM2My3io8NwJjC1WtW2ogLVNXZ",
  "key37": "49u1MdNBWdw1jintvQ2vMZvpqnWqdhBdjpGKERAAJPB13mQautCibSAfH7aXeGJML8Lekj6W75WXBbcmJT231RtN",
  "key38": "3tBfxNthEfXnHTjBZsPJpfGF5PHUb9FzEFkSE2DAxUQocLdaCMwBxpqCb4EFZSMKNBRijYa3m2LGjxNPfphEog1b",
  "key39": "5N5vyvFD9sGr5NQxWLwB8YqKpcbgSAhqBz1LHnVaiLM6EfAi7stSzAJ9FzGQaTbYLFbqQoZbv2znebkfPFLLdJsj",
  "key40": "5kaGdDp8ruLLaJCbsaNREvHd2zRo59u2mxm3MjKEprnrfVZmmgCxMix5Qrd5ziErmbbsyYu5sodoXgytyfs6YooP",
  "key41": "2fP7HrDZiVkN4VLD2TFTt5U2z3ut53K39Sut6Lpmk7gK3yT4Pnpp4ksbtpjf4fQ5mJdKX4t9gQUq8V1yraZqQbN6"
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
