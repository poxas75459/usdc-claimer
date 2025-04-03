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
    "45KBzQRoRw33b5dLFTYxevvaNEmacz4HzmaTzyBvL7shjPipUAQaeBEyN4SQb8ppKLKzPYasE8QjdHnUrnDE2yEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55E3FVQmZ4ezVidAVhQakGehVe7BqrjUQS3nxL7GjCVUmGidD19P6DmcwrB7N4SaZxETsQQGTJLB5WhhoaGXvkDi",
  "key1": "5Gs7T82gGwneBtoWKpxw6199ZKzmqYLmw54j9k82o1tfiezqM6RT8h2oXiWTg3jKk3jRsF5JjSSFNA2XGDrU7Deg",
  "key2": "HAT6ehERGZUNDYdvrUcXAjRbLMbAUAmjs5Fyy3ikyiRpWAqdBPjwxANCA9fB2U7y172zfGHaMHudFguhukB54EN",
  "key3": "2J5VqoRErmY6dUF5WiZCvX81869ZhWgktMZYozAdqiBEvakRo7E4Y6R43rBwvBGobMRbZNzfCxK9uQtKpCU9Aav2",
  "key4": "47zd1FYeAFkPb1GQi42Xk6ZrLam1T59xjw8uR8gbZknSKPRjnEJQhy2DAfVnHdQEMcrW2X1QJ5wsiCp12GdKxT7x",
  "key5": "2caq2pzXgH6xvhwcMvPvhFfsCjSoeVWhLw7g6FNXThaPGBvgQfpa36GYb4q7ST6kse3JVSbQrTWMdJtZ7oKgByYM",
  "key6": "594wF6MoPVevEAiNxRJFBu1PFvYjXgNzLaT5wU5mCYGAGW5dp6jfvwXgpr8nmkqgUDa5wr9uGuUAFdb4KGK8FZWP",
  "key7": "4e3GAwnCXoeZ5upTkWXxR2wPjMRpP3VaFJJUwKpgoJgngpHJpk3tJSRYcRXf9ELnuA2jLCpsiapEvFNNUS6awd1S",
  "key8": "2rK7XQa1G4Uq8RUZaTKbEtBDHSSLZSikEyWVoo6PngAiFsuTTrCCFNGDyFviCP5m7mAjXDHiJyAWQXJu2WaDQkf8",
  "key9": "5xweRhKJb1Cr5syh83xrYnAkWt9b1F2U7dvxiSEyDHXAXm8wonin3isQ8kdeJj1TjV1xZT3purqkNzPpEF9c73FT",
  "key10": "5GRmuK5tgxgDePERfAx6RrAgFKx8K9YwjzpC7cRBemdP2tCdrUd22REEWdRJ1DFn2FWhXrTBWEronvitT8YHjAiC",
  "key11": "2PaQA2aZjbM2GeUrpJ8mreF3tkJ5qMFYBX2Q5ctSnfJMxiz2DYDa7pmcUzK8XYb3Ne2x9PjPNSixXoYvME4tmJKC",
  "key12": "2zVK3TyYhcd5155fXtpnc8o6RaBF66saxVmvFek3bwzrL6WqWDfzz8QVYF96mvDDp5DcKQByQxkWXkeNULRmVMii",
  "key13": "2sXJoEJNUBJNywvsMdAhgcBQBvdgJAtpCf6ZzFxAGQeXaAASWw6Ch89MqQMY3y6amXn9UDNkgY8SJcnmxmnkf2HW",
  "key14": "22c7iaWqFKSyirgNuJbMzpPeA4vSsTwMUnPkJPAQncP5sQqjRmxcyPv9H1jp5gmVXCRN9xt1vgokvCDtJr35q5jh",
  "key15": "2dpYPMfHjnLxiFszR9xZAUcPUiZrWQMKnva8hbv56UPsu1cfGmaobTsGWFHzdkyUVtmsuxQZTzPRqGKQPmGL2o1g",
  "key16": "4ojR7PwdhfghkWv1g9WEhSBhQ4aEd1fwkCLgLDjSJADEFMrXgmKZY4JfSEZH8uZnmvZMpNNNqu6obeF9YYhPzNhJ",
  "key17": "2offXjJniRTvtLNwPstvaCCcx2PwKxWWFPSTJaCxRZhFD1GY9CUNxU6nk2sp1rfEGaJNZopsBfeRpUQZRRuQYm7L",
  "key18": "4nAfHvjYWmFEtueiPudXKPB8Q1kqxmSBU1yDqNWYgLdhZZd8TSpzmbhq7Cfnauu5xzhJAfahurUExt8hHvq6oMLt",
  "key19": "4BJUWcJbyyF8eDLZKNarNKXnEnuDzs62N9ZWxQXrhFfZkH6vhdgjFkmdTCXYrWKgVA995aZ7M9wwPw8s9tMRh8J1",
  "key20": "4vr9RZYsVtkaJGVoDwxq2aatoo4nb44u7jJHuRdPp7L5t5TEJQm7QapQGPwJXKinTr9aMtX5JMfqd7K4RGedttLZ",
  "key21": "41mEHDSxyrwgSkNsgQvMqcYiDj2oSrnXnLT62mQwjSWJM4DGVM16izNjyZi6gzvrr1CAhLVbDkxoGkbb8whSJYuk",
  "key22": "3crZLDjWor1CjbvkLnnGry27HAgNtKvchVGP3NkwNPaBduLdKoTDDWc622YvYMh6Sa134XpHvoHAiUQJfAehhpVv",
  "key23": "DqWLd1KLdshw8kPWZm1d1tJEdXXdXgU9z6CAoJzDncApfVMsC3MpgxGmySJFref6R8mhqvi4DoapUS7En6Mqj7a",
  "key24": "9BD8jCDVVvrnoAEdAXzDeRDxB7bffpLfLU2h9bMY4ZYobRPDBMrKA5kE1Cb99v3dVJWXphbZYhuMg8LUM7EWKWc",
  "key25": "2rqSMzFGwZXSFwufq9bEyTfat7u8M7BTfPxDoiaMnxRaWhSDQFAxU2f3TjNjWfXps6r7DBZSyWW6PgHTnPpyGNy3",
  "key26": "56Ef1HRkmMgxitMFYqmc8KyNqtxQXqh8Y6Lr2o1gJ8gqbjHMPXLo7w2RaFskXpot3PWCN1ZjnwPMgyFCH9DAJPf1",
  "key27": "5LUL5bYkggq6Pn5DKKkkMEVF7xWs2i8SrJYwPS999c7LVMrtRqPzxPNwE46CdPGQ1D65PLPt3pxqMYZrHQSTpzwb",
  "key28": "3LDVaH1jjEASrAr39rwsUvD8pwtxkuKnq979KiyCng4oyPgwM6PUPbdjyRj5WuzN15fKjmxV7u2dJT2tTQXivT3o",
  "key29": "5x9dsfPvRDcNdH6swCvWh4w6pD4vJbkHvejTpMLkXWEfGBzfNq17g5eNEE7Jr4xqZRn8ptT3DPqm3NasixTpvEAf",
  "key30": "5w1vb1pmfr7FYZBaF6Z5FJQsbNKuHzmv6VtPuPQTtJXHNunCBapD4bDMWEFRvHpWpkFmMBbu5wzCrDHJqD7XeTug",
  "key31": "UzAP7JMciT5YoQ7VreiC14Prf3QAWciTwfeoFQaH3sWCGfCZdR9FfisWsi5CDszw9HwV8PXwsmysKdWPuCnSirY",
  "key32": "32ynWitbZyqHv5ShVvU3KD2zoJx6cfKQAzmhdYPMYJo6bzvFUuYRxHbgtfP56GKTA8jwRCzDsZdXQ1iq86UQUyFa",
  "key33": "3YjwxaBBvNsCHDphnVEpdw6khL9Gbem4VL4jvB527CBbaiEaDBoxNwxeh6dWt9Q94GgkRs1whWePLAwBypQ9kroX"
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
