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
    "2X7k9KmvzUdpnWBLitbkWaewM5VCabzunAR2btguqmNs1x8BQUy3ZMb2MCeQ5oYHzyv5LvMNUgRQYfs1Vo2PfGfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XAh5v1Nz91AUCktNdnhuPxXHnpMvDZLNpSVbNXBXF5Rs35PUx29f1eUBP94RoAXbErFL7D7t7h3tsq3ejbNFJ8",
  "key1": "2VVBHziGfD5AGvFdTng4Nwr8R81Gu2JkXZvh8RHsrKcreuA4zHq88AGgmjb136E4t4ynzzwH1M5JdwEE6LxCq4VV",
  "key2": "3HKNLRUaVpF3fW56cpeSKpDibk1dsJ7xsRRBxi5i3vV3ccwaaFjhR1NbjB89GFGxeRDmxUe8hYtJMZSX7eafT18t",
  "key3": "wdnL8RJrXbFojuyqfpjbt2K9L4HBns8KyrQkViR93zQXjByohgYnrKvfBubWdL85NqnCaU6UEDAu2nNj4jDiaFi",
  "key4": "5rQoAmpX9MtGYknccKyPjAbXyKnHN5u6NYhR5q9meQiF4bZLTxgRnRg28qPze4inX4i8p8Yw4M8RtaUYQQuLjJRc",
  "key5": "3WWiyPQpWww2Rh3jjFdYKRYti7S7iLncBMB4AYhEn3Di1k4mMDhqzdXmjq4ch2MsDngX7bF6KsPKKbEWhjFykf2m",
  "key6": "FmjvCsBPFpTYTywthbbNEHsGWj5dhaCbqTWTRsgdBmsLZHveDU2DKEjHKsGqwhMym8ohtRbSYjVawHcEJiPgZG2",
  "key7": "2xALNvAqg7JAJDiZ4thhpSApmqiN1rhj2ab89ee92hMyJNsFcdF4SddV2Z2GW6atcVS1pAxrWmAF9E5Uwm2e5uas",
  "key8": "57gC68sDYanaVXzjx1r7upfaCJ5bJc6MzxtyyQ78EMARbyi9u7eK2uz8jbeGX3z7XMfi5vkfQydkj3wZef7KYEx7",
  "key9": "46Ni5bX8pBFzNiNsrwNKyanmGzv9XLKH5d9nn1xFQ1ghPySS8wv2GSJU6LkvUTH1sHJAQ2hGdBKMNuFU8aJ5m6Ks",
  "key10": "5iQtrmBWmdDPVDFDeqqCBfke9K5TbNKDDnxA38aD2AAcHoNnTbeaar7Hxf48W4eXBXhwEdPD5Be1TjGMfeLeYViq",
  "key11": "5SW5s5n8pqvFVHYYcomv27LeXzdvV31iSjitiymz9y87QVgGtKCXunP2K6zPjb3SJe14WvAHEdT6cZfeaC3ALCd",
  "key12": "3gztizztporhhjwa2o4LRTdSeHQEta93fLsL7MbgZndfwoptyEg3vGVHxaD5p3kCUgyuv7LGHxrCJiv6ZXH6YegQ",
  "key13": "5jLw9PBsachQqUu3e453YBvBjWSc3qT1YhEgVDootyxSTWoctua3U4D6c3yqty2gtyrzvnwtAYQCcr4smDbrBrwp",
  "key14": "2UPNZyCkckaTgMvPjn2bTKJuv5t2AaHgXiu3cGbRwy3uAyUPnm92dGPCxDXb4jhrbjPkqTDWjYKZqJNr54xgDipC",
  "key15": "2AmAPMZqX1dMJqhk42uRX35Zd8zbfpSsyBJ5KVe4ntgM9y4Jx3jGcHPAoRY9BrSsFmUE8uvM6a1w3YBxPHjhgLfj",
  "key16": "3Mhz5dgfWjLQ37DmDYZT2gdtkpLtXyEJV91vJ3SNZjbSN7jmyhNbWHtYo4BavqeBJ2vhMzqiVpZv9sezsUPKQjEa",
  "key17": "2s9pQ26qtzZQjdDVyGXx5PswBnVjZ6NRrUKEdLzs4C4dFx1z89MT9rJa8P9BzVqrA315niTTrXnsW91pnSeRqhRr",
  "key18": "4G7dHgJjxPWrjzbve7NrDidoYdFBLJqiZ9ph76X2QFgi6mneG8ayq1b3HCNnM2QXSJ69Fg1DJ4MmUancNXaHSXZC",
  "key19": "3exKsFzG7oy1BKHsi6Sn9wEU2AbSo2ZLHLA6bppNmabzjcLqDJrKsRzofpSMpSNWov4wp8XX3gvRjCcqaF9cWNYK",
  "key20": "hBtEGdHXzeaHDZSFCvvGP4tkCFQqWSBxY6H7hXD9zDK1HdjcJx3xeDTqUvCk4CHJKaXGCwWz1mQb9fh8tYRetVY",
  "key21": "5q6HN5KXFECpF7YNy4pXMznqBdeoQE33vymmtfuf65tQHuhyP2BTkgjjt9PKroch1sRD8fPCNm14ULj7cHoqurVy",
  "key22": "3WhskA7dHX4AeDZNdCCMrCXNcaJwYeLLhhx9acKdVoh162YMw5dYBQ9Qsjj6hbvT6e8ynWPUN9A9Hmv9gvN5w33e",
  "key23": "4wbYvQDHXMjTpKccdaacnSMn9BvBa944SeniYp54joKsnbfJnUu4ZyGMyyjxjNh5mwQ4Hoqqgamt6CEGJz7ctMeM",
  "key24": "2SgdjiU2y2h3D5PrJBiXJjp319fbXw89cxy5rSAxnX1UL2tidKVU7Aqv5E6tuhaP4xeo8FKmP4LH4USDnJW56RsY",
  "key25": "3cWtraUMJda51FdwwgyXLBKNnTVUVjc999vjoku5Q31zU5NNkCJsQhKYG4v63WRfkmPqR1RAqPYR2Vm2wWJVMvg2",
  "key26": "ZZP1Xj5hyem5J7B3e44LYWu3omuADXTiUzjZ93uKFUkxpuiBFbSrd3T8isPLaMjy5Ye58vcKQ22ENYSeV18EjbX",
  "key27": "3PUZ1jN3oUzB67rJDW5gp3KEMa8GJBE4KtP4WJefaiD5DDPb7XMagR9zyxLyvyym5AX8vxJkQJmaoVPhtAAyA8H",
  "key28": "5dMee3LLUtdo77pA9q8VVAEMu5BXdwT8pdjFyBb19jS8TCC9S9fErAY4E2kZi9ro9vqr87L2dK5SdkJzYK9gC12g",
  "key29": "41YbQ53J5P63xD6GaG3TcNPMQFSey3xbUfZ25youbFYAkCmtFG1r9feSEmj935g9qdSnDjnMVYSwm5s32GE5QmvL",
  "key30": "5UjCaRa1ZekRnKKRovEAoTJBvMk9CEVgPG6rbb9s41oxQ76angakDTgzWenRJP6FgQyYdn6YARB25Qfx9KFTBaoh",
  "key31": "3rGMGyqKtbPcLHWikQxYKxY9nEBrofqszeC1QHnERjBaxn1T8rwzgWquwV7VEQB4XiHhVSsCC5hUdP2vvnnhMXY7"
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
