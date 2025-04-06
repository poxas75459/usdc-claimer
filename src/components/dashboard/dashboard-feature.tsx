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
    "2sbci2MBfmD1NngcfJTYaCbwHtzyC4KoYw1fpCP2jqLgcdPYStwU1zTCSJ4vSbFQqB6Xo6scFbURA45hn9oHpwDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MRx3FUanLCwwjp7Q57p6YW3547vSiUVfW4NFNn2JUdqqkyP1BNVs6JVWkkQ4nzxDyGm4enYhLnY5TGQtBEQYGaf",
  "key1": "3Qd353kqRtTJKcoZA3CY72La9yVPGnbD7xe8rqJZ9LfCDAog49Ja8ReCzfWAPmYH31hyCbFjkuse27qV6VaoJTwi",
  "key2": "21QXq1eMFmwwbouiQUMdN5gdXTwWRTzT61cC6N9eeePQNXgu1aNa481CwBh9jTgeqrbrF46vwciHa7iUTFe3bmBT",
  "key3": "4ubHyMt5ALk92PU9oybTqRURkLPaZqFRmwdjYZkAjuVW5pDCiyyh5pLW5etGNsZWam4tKcR9w9VxUjN6axSHNs8H",
  "key4": "5VVCvTtAmHji3FjMZ4G1hQMuC6WPut6pgRt4juhZ2igyFj6DNHg3tmCHYEP56jyD92gckCp1i7JD9fVT2YHMTezN",
  "key5": "3agkx6DSo8iS7f17Uzv7hDHjEhzsxSXpr2DBjxYny4xdsKe8sGR8jmVAQwnT4fqGFKHVYxRGkajEjUFxX7uyWu15",
  "key6": "2EArMpLPiiJhY4XTwk4iLMoY7vhPMN3PGK7HpqicjsJvhM6vUiQTuk3XjaViSgYjVd72iD4KoEWS2AQPxGmjY5se",
  "key7": "HQ1zuToDprTkrhvp6NrMHra3AtE6uGev7hoRjk1Z4isXb3BHuFVhSf44V4Duqwddx5E9MQ3VjszJFRnwirywzhM",
  "key8": "4UC6cdv9xJiv8fkbKQDTiqeZ2Z3dcQ2Y4KLT9aKCP1YhyCtcRnZ1riFqNPsdD5js3z8YwEcprH4UgC12m3qv3jz3",
  "key9": "apRKg7ovWTrN4zQctm7sZw6tzoqqmiiK114vLY2A14zHi6QFTk25kTc8QNwWrhZghkhBkUpg8RZMox5pr94UVD1",
  "key10": "4sbypW2ZiRr4gAM4nDi76275u1mKzyrZQm2s1FK9iDMDKhmhfSkZ3N9T7yvgET6gkMkR2yG7DGV1VbMUhkqB8vGk",
  "key11": "65NxbDkTmxopPnx2kPPeW1wWrPvzaFXEmNm4EGLq2CFUbPMhtQrR7HrrXJn7jVZQVz1M8x6V5xbBvnPLcLVsourf",
  "key12": "3e9GokCBaTZGr2YAEJ169iayGfH2etjo61tcd4ud6soPxc49vJVcymA7DsfKE5bBvHrxTRT5enoxMCNPF6P3XKU8",
  "key13": "4YauNyQVbybwmoFWLRa8WsGvVNQ2CwYPv3YpwAKRcVbta1vAuhp5SfjgBnrfqqkwr76sNaL1cGL5ARezqGSjPyj9",
  "key14": "3srgzh3oRCPSxcPD7HxCG6vbNDPyNTUxasvoj2gRdVRQ8HGCB8gJ1Po9HZ3A7MsrpysGao2Fo71QAzCJCiGXTkAR",
  "key15": "pkAsU3zUMi7rqjypcRjzmtMYCK7qwqm5escU1hYC3PG6MgWJLcSy4pYx6CyyPpcQxFv3GoMLjtUUNTn7r81Syvi",
  "key16": "51t3K5addmLtMikkyQkHKMsLHdaG643UhELhWWw4z3GMPFzLNCUEbZAzsTknBNuyxXjYqF2g3fohmNbmNkEooBAR",
  "key17": "4YTe29T755auCFCXKVfGNxyqGHC4ev21ZnvWHfVKEKXATtGE7vVhS8Nug2zwBtuDaufUBEtiKrB7xzGS2Bozbnnt",
  "key18": "4oiEZa5EVuYMfofWrjFZ4U4FzcWfFqDNrdWYX9PFD9Z4m1MHouPiKLL385ctt9NXtUXn1WiK6HDvm18tiSx6xHUo",
  "key19": "4JyQ5cdeiVqyWDM8vVYd2tnZrciY4yzU7nvhSYbtbBFi5KnxoUNGdippD111kQgswhEbucPaziRFggKbJgNnR1az",
  "key20": "2kDtVEkrA9MzShx6gBPRU6JHZFCH9uX9fQ2eUpthVwjdufBS8r9oSwT2S35fFkpWV5i2RFja28bnHdH5VhipQECJ",
  "key21": "3KBR5N5anDs6NdH5y2jyQCtQ55CfvzoDPXcQi3e7sXcSCqNPRYe8hzUNnUJDafXaFmrALjZC4qPMcy6oPHmjXkjZ",
  "key22": "4xzNUYH2hctCuYhfFowexNB8prF7n74Frb9Xi1Vw4swpWiXfGAeFbDtp1kGGiuNotGsMPYxseGxGPXT9y54pY4CF",
  "key23": "wypWapuZWGDqmoRXQhm3zxxuGrVdUfxKaCFNFPn5pFKdpFPCe6eZaCGF9Nj81KhjA9F5T1o3nEEgxCjysMtu5AT",
  "key24": "z6k6YKyifjdB31QS5jTfehcRj4sMpdBUeiYCdyJZQFN7BMHBugGzWNN7kzmhjUviEVtSbHncu8udTMGK6qLuS5b",
  "key25": "5MyK4acvWjJL2WNRxcQ3ATv31Na1wdWU7Ur7NPuU5GQT2tbJPbxMaPY28dhEsX8QT38cEQBLtG2MPYYhZKuExCQd",
  "key26": "5FNTtS1SWnpKJ8Pucf1UAuA4Npo25PXiSVogx9wkmpweVS61xNezNpaDN9d8RBjjck79YKC6GkPEfMHuVVtFX65J",
  "key27": "5VFHEjbvPtrdEYPZWB97etzoLgLNCKxhLsNkbM3Pn3uimuAhMN3rfJSBEAGfbTTwVmwSUZNzoKmCHMK2WrVpH2qR",
  "key28": "4oecp4KuZk7wshese486eZm1JfqQ54FMQ6uvCZf1w3kqa32TgqNwDGepwHu9RZrYZzoeq4uBhxXxdns59HqFmvc9",
  "key29": "WczE5WNBQEQ3T7sodQtnFxVgk1n6SYUL4fDjs2qk1NAyxvMNdwK2jja4mH8B3QAmU4wdoqoq2nNofx27VCYfcuY",
  "key30": "3ZCJdnva29eGHFVGgMxXWFL38fZA5DGyuT9a3aFNy2jdHBKfJANDYjTgeuGeLKYaLfQVmGxgZGoMFpX31mgE5WEk",
  "key31": "3G1Caf8VZUkBRyfCqaETQogMnzLDVAk6dxb5pqZn4f3rXR3GgQZQRWH3HsPGmwgXDZUgtANKrTSCQRogs3UkFS1A",
  "key32": "2P1snNoXdR3L1JtqKP5Q2pZ8p7d9Jr1PDxLcYWTzCykmBtfv2jcrTyAr9UW2JVwHK1YVzgAJbxcqo2cySGeiJVhJ",
  "key33": "4Z1sRPwvj9eAFW4TEYWh5equz6GvsnTDUZk2i1oWWHLZo7XkjhMdxUe3D95coPW2DMJsvBA9gHqbVD5JDr93iBgL"
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
