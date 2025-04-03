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
    "2VA1dwVAnSd6mZBgvYtBfeSLkx8BC5GNKNqKAijaVFcJyH4xQC5j6q6qSqEz5irTH3qrfwpESyQzubkTcNr3ES8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T9cKzC1K3SEcodYHsJA3Rvtrc4dYYGRW9Dj8t9FVD3oZaBkWyE7R39AffdVzVQVNBz1HckWKuXovwWCyz1oRmBC",
  "key1": "3XYbD76DX4BFbusjAJUQF9MaqoERGnu37kzCTuj8qzvqNc1rNNpu5UdRhUGJxByziXemxr8dSvrEdSmZp4bf75sn",
  "key2": "4tCQEZEYurVBx8m6ruhhYTutXDgvgtpc4Tyy1juVVeog3Y3xzbKQL2usxhZgYVbDQpWHVhkcebYFYbekbRoWpMLZ",
  "key3": "buzg85smMfE95SSpy2FxujmNv3JPyis1cAuGqyEzMyhy8YjHBAn5KvCkSbZkuqtefpehBQaKMSLVYVPUzHfwyDH",
  "key4": "4jdnVDyBjQ5fUgGwX9GGZVwizKufA19cF6bpiGHRnW2UAFdAe2Zr2kJL3m4RkSNcYM7DYeKnkTkoY8sGyuMswTZU",
  "key5": "3ygZB3iw75JTGm69Kjqbo8f4iNvLBGhiSwZsLhzCrztMm6md6Qe2ezX1vLm6y7aJW48eYnzt7e8NoSa967HfxVnP",
  "key6": "vUPR1cTUerKSxWK8S8uSK9dLYEaBsS8hb737MYG7s6PCPxG3f8b7TEqSDRJMr2Ma5Wosk7TMjK2U1ZcrmTNEugF",
  "key7": "3cmDFTuwfokdWVk8cAsjCNrfiCk1Q8Tz55ro1Ar8tM9WzBTJKs8ra4Mz1vFtHBBdBMRBg79abWhxVQyVr6e4JZmq",
  "key8": "5Kez8JAd3SLDdk7cjWW6H4KtdAyVfXqnpQFd4KzZooCpkhZ23Fcr2u3ZB2C1AbTb5ky6p5ZgK2n92jbtVoM2Uwjf",
  "key9": "2x8TCXHbVFQApFdVhuqay8DiPMhMqcS7PgRjMPB8EF2j6UtHb9jmm64GYAqE38rFposXJx9Sn5tbHkeA86VBt4GK",
  "key10": "5NUbburBKESGJ28mpfumdjejwajJbwPMZ8Fw6BD1UNntQ1uMfBb7bKjdaPM9LYhfimuezHunKxYzwtgfbw9ZWBjH",
  "key11": "2st5NbP5attcujDFXyB6nfujGFfbQ71eoSWTLCZK1htajyuNWkABo4WAkSUqqqfarK3uBX2Sg258MZvbLK78kLjM",
  "key12": "4ZpjKQeU6PUGpfxoyTq236WNSx3w1e9xNTg7Rzy2wtVb8F6g2GvCxePCEatbhkq2svZAT9yrELPVmQiV1oPFtJuv",
  "key13": "2NzHb6dcnPaFvj7E8MU5UgSwWxZVfLpyidjMeSg3oKVQH85Mmfe6zz3EBoLx8QJZepmVHi1zDEpCwxHM9KcYaYTX",
  "key14": "5gHvvbtBukJhAqgXvCMYK4tWYFXcuRQWiL4nx6xxQAL7ZcoUqyWYTeHZU37SdkcC15T5VggPXLJeLH12qmPmwoy1",
  "key15": "xJ8HFwNxVaJsmqjx6wFb3Jk6envE4LGM2heWNxtCABgy2D82whWRSwVfS3PpxGxxHCaMZCF2oK17nW2mLbirQcf",
  "key16": "52sETeGgiWZd6g4CdWSXZ8q9k3P252NLZ2nHzCok9dGPRy5r4TqJ3wg4SpnFqA81gMKG1tvxyoqrd47B3AgXqWZS",
  "key17": "5eUUam6cqE87M9PyDwhd2sFnvFg4hPR2hKQqxBpBQCMvb4D7hk4vkyZD9s8x69FcFEyjb92w5GPnh1gprqRpSTek",
  "key18": "7sLyMWG2dJ5YKmSioAWzwb4CgaHGQUgGXvCRSB6d23csukrWkdkPW4B1F8rrP7Y14rByjiC4yBLguvGwdsLMVvs",
  "key19": "2cCMKcfg5v6kzYHWhxkudFoGdy52j1xumS6rkRRxWr1Sz9SGRFCU4tWvXmhon7N7bNGhLDav55jhdr8a5fYGGxP6",
  "key20": "4uNMLZD614Kg4k4sLH1agaANWj7a58snKp6QM6TugoqfvbP3dwv1C2TwhV3atRX1hapccByomhopQZzPBQbfizB2",
  "key21": "64ikWDpsnCEYUS8e9TqYrarDZ8dCEq1FipdAKzEeFLvsSee9cGeRmpLXzPptQn7ugJqafS5SoezDphbdZuPbLKdo",
  "key22": "28rY5Q485UaomwxUZHev7wrr7eXuyQYhyvZpnKadvExUnMqB3mPySnMuCsZUaRVeZAnCQK2Evjwf9VPYi43Qs7oa",
  "key23": "2bVKenhdtdpM5QoXYi4WjkL2Dmv9cvbfEV5gxQY4DEUMG6PbrQLc5ujM4FV7NdapQxcko3XfDyFS2crt2b1L7VLF",
  "key24": "3JwKopjnHtH56zjgKgAcGf6U9r96bgxymms4AjgwWcw1jJEFviyUTtCAFtQgNZNeY6cQB2VCFDRB3nsMyQM9ZRTV",
  "key25": "32YYEB4Vzj3BTQAT4EWCA9cPqgd4vYsU9yyxJAZCVcu7ifUre6EzdKop7BQqL7MzrCoab4FgTCUbs1QMULHdVjKY",
  "key26": "4psQ75TcGmWcA6PXr9vVC9ee9RFJkkrYT7VksUWcV4bEKYqZJGSEHMNCenvuZZ3V9W4HAc3QkSzY1B1YtkzzSw66",
  "key27": "3fP2fWL4xm7QaTEYkPMHz4gF8NSPigyF5WP6gehe2nu7NmiK8tjQTjY4moZB1zLmEm2PQQrkY6FKkpFWhuYGS5F4",
  "key28": "kotBDGMLRBNADFkz43DReXF3TFZsXhFdbtAu5ocDf6xXXrrWB4uud9o3uk1dsxNFvXePSswL5WtVywJJ4VyqwdD"
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
