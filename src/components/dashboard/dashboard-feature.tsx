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
    "41yiLPJyL9b95ZbKy8QpyUQFRCkyWJW1fqaaA9dHCwJ7nCbog6yU38AhoDk8bV5j2ZdbLnaFfMb1K28WBd3QA46x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9TkDwERUNDnKgisKw6ZiWPgSjpHsdtKYWcH5btDFz4kiW8AJfbxMwFkAYCxRTXbgEYwFnVVjMneaTAPW2eHYX1",
  "key1": "218eVGgyK3R6WL54quU2gjaZHHFtrjtW4vxohsXbCGLUSvgSkyQYwPiYQ45MhBWzxWSkHXT6XhefuqQgwDLh3W1R",
  "key2": "4RaCmFRtHY4AVabF2nQ4gKUQWbUuan5qFkzp5YnKn6VQ5DjV56mfTQcPuXErJLsdUNmwosks9rovQHuKFwVwfWAk",
  "key3": "2RgebTL7s8qzoFNcfgH8zeb9RYngzV5QkjaHBFe1sx3QMzpExrRFP4LmiMzuRwwmuQgDaEZYBLUcrvUehfnJrK1w",
  "key4": "5rP7kgeUSe26MbQNtJpwZUPi4xe1baVRCL3y6xjZCEQzwtRKepPkzedFMHc4UyVyhNRR2bunVkygk2z2nRNGRzp2",
  "key5": "4DbUVdqvdzD7YzKJV7ut3d6jFxmjRh8RDBw7gVr2Tp4hEoy6pxi6QqkXXK1qbMgf8VvcxQUQPKZb2YnvPT9JWU1o",
  "key6": "2GEqtR3iPrAPqKMXXXs5yjFwWb2FpNwRfK5EXvdHGjWKXXX49qzut8tMZEHBbcfWqaiVNUWau5DkpiiLnqZFDyoc",
  "key7": "25GeNDEoTPniR2hYAoyaTavpBtjy2y5gQDZjbp6jLRx1Tmwb828CJ16XLvfJB8oZe3CbqdEFkcNgDiyxVGw8Qr2w",
  "key8": "2d3JnHmxNhQJAcJJzYtjbtyRN8fhtSyJp64rPE7HMnv8puvKTM8UEBJdt76kkT6fQWJwt9ngG1yEXXzXPVPMvj1R",
  "key9": "3szEMvXwx7YQ9E5owFXkJaPECzZtsmzhiSv4zEULGL9PJT6NAvRYbdmYMDkykTh1ayPis5capHJiaMmHXCsDqzE9",
  "key10": "5ufofh8a23NrNxMM7kF5tn5dtfhrdGRQBpuZkv5V4PtEN8XNddPSZ4UyFqiWtHvXugadohNKb33aFYMRctUa56rM",
  "key11": "5x1YJGQ8bjiJU2VzYQymCU1hFVYEXXiXqvbiJnsrzEw8LEdPH48wBeSgvuHVknEpQ4JgfXYnKvbgzoi1kDyfRRvP",
  "key12": "5JkdTBi3cf7u9soaNnCXqrEXJW4g3jwMPs9t4Bbn4djVjD3BGBLSnY7UFYChmBohwSfSvQNtdrDV177bxNLp5f2r",
  "key13": "nSoH5VHWMLghpY4vVM8mK18yFQMPJhK4ArNDJatTW45TRD2dZrtHompsemWZfXPmUth3M4o8T9X8rDSaP992FJv",
  "key14": "3UL3BdvNHLgwWUQzowKgCYN8R3gd48KjLXPRCAfj4Jtz1JarFs3MueAJUVmch7FDNoCe1Z5jNLq4S7wTz87MX5Y3",
  "key15": "3FQtEECmm9eyfqCGxwt5UzQDyho7A3CAYrTDy4BzGRPnoRCAD1kpneXCDB9TwK9zy3v8rBFECW5YzeUthDZmqYYq",
  "key16": "2udSogjeMgLSSvG8osreMX2kxNek8zYwuyHFC2LwmyuneFtFvscR4u2Q7y5Xny5JaapnKQh1mhBcXc8sYnAvPjjG",
  "key17": "2b7SGREdEA2jeQao6PXFXYiXN41D2h92fTDsNq78yyvJdFSQ46YcEJ99cV9Xk7ri46LVRGrB9MUZvo84Qod66Hw9",
  "key18": "3mbjw2dPqi7sJ4ZzzXRH6kaZGALaacWRKP1THJ5KAmMCUvp3HiQRP4CfNgbkJ6Kdcg8P314sQ919ExiHXmqnqTnd",
  "key19": "5P6wLbHkkCrHBzQ3org6xzghnPBu6U92rFBTczEiChWBFDi4ZcG95xeHs7hpRH97LdA7aME4dqq52fcwTS3FVQ4n",
  "key20": "3t7D3BBNT9fNQX2S7Hh8JwLcXmXkKP7rYWBa7Hp76WNC8fAQ14U8TC1Yo6Tswsuun3n3y81p5fZGHg4DknGFDr7P",
  "key21": "oaW7MQ9JGj4wsZa9kZofSfmgXXfEKfEZXWza3qS6pJs7HNRFXvb961wfvZtZahnggU6y3w1zMsXxrK2abjxrtZs",
  "key22": "5ACY2XYmc4M93ibznWZt2jkNAuoRX1UtSyCHbtWVvhyQox3U7qDHd3PQRiT6aTN12ndPJSRRo8vRsyZw8o1jioLE",
  "key23": "3PRhAqqDMi3ka6iaDivLVGz8FFs5ouTUdrGh1Rp2rws2V78z1qFZZ7RmfnPQmUir5NezAevejqYsMD1rVR16nFFG",
  "key24": "2uZC8ZfaNsL6TvFA9hNKaJKr7KFc1D9YRmqeeJ6GHtir9uAujTSCcGZduznpzz4EZ3nm1wa7exkytTG6T1gTeBmZ",
  "key25": "5R7UheweJwHj5cRAgFUwFMfpZfraaKedhWgSmawz1yBr1MfJhD4WzzTvcufybBUSTBWRWhaRZGauKjUvHtoDNRKu",
  "key26": "4hXgBuMx21wibu1guvhKK6vSYnm4bhTrMB879TPNrX76cJEMQNtjkJzzPH3K7K8AApEvrQ9uXnrxMCwYfvvFsixP",
  "key27": "4wvrdVXY6ymsBX1i2vAMuy8BqQwyVev8KjyaysDh469Ed1UUgSKicxDjz4pwZd2FKcUJ7GMnJ6YCxyu9Focqrq3C",
  "key28": "Ee2VpXk6PAjYXyBFAMCgJ1TVzeETFzauFfNaN3u2KW7rVU32sLoZfWe1wYTkxR8cRZsJNWd4kmMWCkeXEkp5RKz",
  "key29": "3jFmjPGKLT37B1HtZwaDxkdHy63Dm43buNudHUFmZ9psYJQNtGdyZWsRUxmxMdY4nARkUQxwbge58PHBeMgHgd7t",
  "key30": "34VtaGmbuQ9HHtiev2dfQuBHw2rGsGbKZch6MKrvQ3RhgeYQDCXS2oQa7FKPvdtDBoaFh7Pqn7jpZzXaS9kszPHx",
  "key31": "ScfSFap9vX9PdiFuZbie2DfmccaBCrBJ1YBiWwkPm9GUvxCwctXrMVtH9U2vAVJYRADkMoWHdnjcwjiJRb3RNaJ",
  "key32": "KKFu2vgz83AVSrkV5GH1tfkKDQhwZYx2W4R9nZMrGfiLC8amBApk79GBCSj4f1Y1ZDEi5kZoPxCgA2s9rzVDatB",
  "key33": "37ksMpWaFHASNn8AMrzWwRYcximMnu9Grxvc6hK6Gt6MQExhpzEW5EUnGpSvpjfm1ftXEcQ8uT7o9g1SC7agTSKd",
  "key34": "3J3Xt3XVDnEBRcZ1fY4nJvhpEwdMEgD7mzg5Y7AfUdDMAmKZMc5hEEPNXQjhAMRDACsjpfpcYwM5kVE9GE9rqhzM",
  "key35": "5jeumDzqaQ5ZvSZUURNYG9KxzzkNMsRGckkJWvnNbcY2iwnwFUPMVMYNSA7DUcoj6wRxSgLkYFN4DdJWDBcZYxGT",
  "key36": "j3Vq3AQzpdhEYzQEqydJHKwTyQPT7R8iWoYqLW3YZDYNmRXfFfL4T7NjB69F6Fz9wwvDaC9kfPDjsGqC257igws",
  "key37": "nhcXdFAcpwKLDTwNbuMoSuzBLsQ9pEhpGeBsvB7sHiXc7vDVf3MMhdsPPiwdiNKZ3CcJtLXNp2mxargQbfJiuAw",
  "key38": "5LwvoQUJpCKFAu2sn4urkAzxmJeqRg38GzrW4zA9WMuEvBZWkkoR1MpwnhCzA3P3JVuAGeWbXHbiXmtz2i8qcggf",
  "key39": "3FSkJGKETSeq98aCU5GhuFRxHNwsJgqHxeAcbgPhP1b2Wsz4DvUcmL3aJyEcH96SKLTf96pvUDmt5GNTWHDzQtfH",
  "key40": "5MfR1mbEacVSVT3taAbXd5w6AuTGadgrrydkuj9yULQX47GXSTHm28GERAEe5JzfygATEEbXMfThMunCmyqpZ6Rd",
  "key41": "3vJ81YnRyCowQKGG6f2c72DzHvWxGikGzFsgp4dTPQM3oiBdgx6Hpp52DzxHJqJQ4q6oSyYAAohkpaJVaZ1amkwx",
  "key42": "JkHQRiEFqd4sACUTHhZHNqybqrKXrbUuoufe9oMkJSsTQcmCSwYdcUGyx8EjQpGbPycp6RAKpuUrGMAQRrQguGT",
  "key43": "4y2THH7LmskpBuP51ZLQGAh5BDnjKFZ5NUQddiFSvGQkwdzNjCHM13242Yr49aYB7qo7qeK9yCQT2vPy6M9zHgXp",
  "key44": "5VeJqrbMCBDxu2WKngf7yZaic7LoR3xN14PnoRDd4tF7goq8ofvnYMfPxwpaK9yo1WAftvTHWaxHbdtwJ4235DuE",
  "key45": "2RNKu2nSf7pJouYjmzmZFS9XudPYirF5etkt1NmsNGc3rudarfEGWTtugnP4PES7J2kmuuB1GUcE2MNjkGqi3njJ",
  "key46": "2hBzkF4NsSvgFX7eRwR3pZ4WSX6sf25sPZ8zbzayi94VBixjzExy7t35ThQwZfbv3LeHMkkwrL7exfLvFjqgbhD3",
  "key47": "56acaKuyumE5t8BPEz8FDXUCCuqioaWrSujfT69KQyekGhLugHgTj1sRsywURrZC2dHdrVLdcRg5ckgJMopf7ZV2",
  "key48": "3dr9mG1bYFK7bQyNic8fHcDoKUMjEKetzU6geSucGwJpbzuidMTFmHiRkxJHo1JH7yhGtVopJUD2hYK3v81XsbDg",
  "key49": "3jg1BBmungr95mRktfiKURVtjtggxDKDZL5fkXibrYhcdG1ZgJabusnMvPktRm1JhnLQJVqPzAsB9bUw4obxvxpT"
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
