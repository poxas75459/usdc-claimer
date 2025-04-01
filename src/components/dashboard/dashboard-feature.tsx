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
    "2D2B9XXmHYEaaW2AcHeDUHCe7YA4CZucwoK7d8si3FsDExQfc7MW8T5CQu79Mc1JwgT5CzEbtHrDnS8aVVgmPty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yf5U9oT6sdEuJgK6tuNGv4K9GXBtZrATBoAi1BnVw87uA538yisGtANDZs1aL2viuJNrKfiXiHCMLnrYmix77iN",
  "key1": "5nkzGJMc8hrGQjwddnDscCn41S1NxDyoy213YTSjKw1G71d7mQCFC75sFrvjBa9qaaBbV8HUYmAjYUshCXdmcipT",
  "key2": "aDTDK37SW6uDG6GTbZipjP3uxNsdWQe8GBEE6gpWh9h4jVMA7ph6qFDwY6GzoYqCZ3n7SjK9pR9zfs7XMGT4AnM",
  "key3": "5xotNomLSUXZTWDZfCsk3ir6W64ntch8Q2erR6BBfifqM3njCPsm1iMbv2EhJja1TmC3xXYcExGesXH23YbJ1EMQ",
  "key4": "5JiAaCtUXZD2fXYRxQ5Hfm51gijxV2MwGQLx1NN2MgAEjCZvgUmQggraYLqh4ziyaPJFrtyh88ryAMwdLH5N8dB1",
  "key5": "6fwk1WVZz8xd9ZDzxveHomS38HQaLcyToTEx6SwSdhwKBZMDdusepypfkSD6RVSmtUYGYbdmVwPgNA9we6a8Bpi",
  "key6": "5NaTqHUzhmVCLd7XCtSHChiraj6WCytALaJR9gR9wRUdcMbsqgw5FqJvvjsKBraWDJMibrjwXZqK3oXhAVis7e2j",
  "key7": "2Se8AH2ZYDhRKHpfk1vCxL1VsarvpxkTDjVupBqKtomyLzN67RrDTv8XFcbaysQf4x17umDJyKJUgBUcLA93hYov",
  "key8": "22AyUb3c8Gwx49uZ4KN6BEvFJyqmZkbdCozaYf9knJybrUu2nkT5aw9vqcFQU52mxoyWxX4wyqgJ8JVREGoxprgR",
  "key9": "3ccJjKmni1Jhf8JV2BQmnFrY2Q2jDrVPD6U4eswhZ8swUmmCNZetXgW67XU9hJ1pF1sBEohfm5F3NftZtWugpjbC",
  "key10": "3zQwDnBGMLQeBbFdrT3MteSZoHVmCMrkqpyGcRYNtdHVZUBKrAGPwAQZdk3yw7CbyAFR2e19Ps1iSWBoi7Yj8xRb",
  "key11": "ubrE8tAkwBJGYNfeJ7EXmZd5cHVAqCqgJXU6Dk9EKFTwoaNBqat9VaVrBPXjvQUA8UWugKvtzqx2qPPhhzqi2Vs",
  "key12": "3ew2qMPEgDQYseF97FACW94p61fVixW4PrzNVrkK55ZEuYaNaN4BkdYw8YoQxUeNRfRAvN78A7Xc9DESMAePX32b",
  "key13": "4GEgiTDPjc7VdPaeLRTz48TzxhMC8cemwCBCMBsMHL4WmXYNNTA28kjzCzKKtGtTEZKetJZBxYzVAEHVirjktZk2",
  "key14": "3SGuJsMRA2UDujwzfkYvLRLppRLrZHqcF6RTeN2RMWYJJhGmL8cxoZ4XHG5eP3iDic3Tg35P4zxq6AYkK7uGtq5A",
  "key15": "4wveuGipfeCjibAzF6BPiK8DenK2KRPRaGhgoSN4uAVBTnKEj75VpgC995GF3KoyirJcqsR9NrakyJfVzmpnWJZN",
  "key16": "2g1Tjh5LEV2uNFJzjpQbvSfVNURPhnnMJa5e3nqYtac68wLk12Co9D2xKkwKy1CqLZnuW6mLcWE7ozDxb3aFmrQ1",
  "key17": "5EVqycw31GkmzQCaxxBdjSeVzhZARWM5uJzLRyQBsWNod6Fgm6KmcNrCLamxDj4SWvfQQWcCD6JvquqwLr4k2cr2",
  "key18": "4wvayXuQnXRvwSjk7h116iuVXWZDWhdiFwLu3hEihKqqk7723UEhiQXyKpLXnk1q8GPC68QkMVGu73AHpACBzV9k",
  "key19": "87Lb4yTwuxu3Y8pGP2PrkCZE5T1QeLV2peMPDYdDKt2pBagBndnsiykjyE1UaSW9SqLpruGHauxuEWeK6sywCGW",
  "key20": "2mYqSh8qkLzKA6TaqTgFDgpxkzi3fPQ58a3xfy3AyJ4HPy7MBiDVoqmJn8VR1PVPdtbss6YTUjUwu58PqKykPq3a",
  "key21": "2thS7DfZ29MygkH61tpts8MXSAtmuoxhoa6nay98FWQCuyLbFn8H84VKEuHqUvadiZdcUXghZfo5ZpTVn1h1Fib8",
  "key22": "5zofVoRtKD3B8t3uh498RDn7UGCRWrKEkhnm82t3RovA2k7st2np2s3DpXsHcBTWfqZhiawYM89vFiB2cmXHSZN6",
  "key23": "5ZpW3nCKMBvHcjdwB8otQzkPXHcmWsT3JgDGeWqeqfjtToY6U8aPv9QchHQMS2sCxNepMJgk6kbzpgPdU7MTjU3R",
  "key24": "3UBrG69cuZrYxgJwFSWbEXhyQrmdpCyYDGCVzGg2RuBvK1T2zut3ECMxmw4Sj2jDqTvRR6fpqoLWLdPSYRaSDqqH",
  "key25": "31irfaq8i3t1VCrDvwPFcg9fCp2b7Nz2GKsyQuFGrkskjQT6EseyBkyULkoZaFt4KZTpkRcDoQ4P1RjdDzRM2Zi3",
  "key26": "5m2EJPYELJ6uHf2zimCy851qaXFAxa2q4pQsJwZkZwLK2m2xNHMCnkG2AW7hqtcccWVmDrhNydwecKm3bUN2PfHm",
  "key27": "28oTJuPu5MJFxSktZAFBgE9us7chCjE3hzpzVdrzx3r4s3DY5yrthjcBeyRJry3pgZT7yYqCmmvcc4ChL2ktRPvw",
  "key28": "2w2o7Nwi9mkd8BMfCE4FDHm9c6g4RWV2fs2njZPWDWWNrKoSCZR8fgDDwRRkF1irwJQKBGXfYaSn7fv8312dqpQH",
  "key29": "q83BAzZk42yNTXRiZLSoeatN1bYwLV1MDHbwQ8VGaQV26zLzonABEKh5cp6e8ou6MU2Q1ca1krpfVnvs77fcGBi",
  "key30": "65TMLD8ZdnFT7B8h9h9XddcZxxwwaST3YndQmH1SHpirM4tRMoHvhRw4eb8bgvq3iQX5RycK1AgUUdZxCAkgbfGt",
  "key31": "3gT7LNPyA3PvWJxbDEUBy9zR4LJMQMdfQJ6LTATePnNNrTK1nh1DNPiHAWbQhnBPfTQ4fv3zHfqd1E8qysKh3KkD",
  "key32": "3CDjiYZaHZHAH6jXHiT2T4NixD6Q54K73UYtBJUHQ3euHvca37ftmqpmpFQ2yJCCTRpNyYubsJBob92JSGECXATM"
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
