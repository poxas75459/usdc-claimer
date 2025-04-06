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
    "3EUcpbNBhM31HD1V8EKwGtsJsTffdXEDs3Z6TgZ6RoinctToPM2gnA7gHvwM77MV9pCQcTuUCbM2BcjSVy1NbB4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55xVKMVrERcKtHnQU6ndT9ZsdbAgyRZwnfGr7nxt1MzE6E7rQw4yzbuEx1wHvcU6XPEfNmKhZfVfP8rxWJAyCfyT",
  "key1": "5h5NHq6BGfMmgErqixnQVQhwkTFgWy8NKG6a9ppmcQyeigoxApNMXbr2HJVsX42SPZw1gVt34EwD1pz2Hehyv2BN",
  "key2": "4zRV652EPVCfBBv6iYnT5ZVGzpk8LwZq16opB2L5tEb1EypA8gpxWYXovj3rxfgQPEZoqb3UVrbFzpb6rbKzxpqX",
  "key3": "2GpPLk2iSSsL3oUBNNZZzchAUKKBoZxhxNCyjBx3TwVD88kGyXgZCtwutSbFMq5RkGbK2hTBtAQyGnG18zk3bJ24",
  "key4": "5V4rPKYG5owXtB5hwVbKgrxKHLeRA5vU3K6DVkUvce4szUtgUTreLPVZVuHBax1pLHdNinHeCXnRxQbHiBcZfa3U",
  "key5": "3n2nMdtYEjAnPgvKDAeLupNiboti4vL4yGREMU8AApCQWjfFftXKFUQJtnsNNGYd6KKnByxbV3yciY5U61JKJ8ou",
  "key6": "3wP83CZU1u94CHQr5QmnYdS6RmWPLib7aorkHAK9pYPvENWHQdxJUV7LFy3vi56urbkK1B1fG1Qk5w2ma2dmtaqW",
  "key7": "4qrEmCg8GCGPoZ6V5b14QxA85YBcRapPMPm9YzXHugY11hXUaFuZmL1AaTXVM96HzQ5YHHVdmaPUpEghSzXt5NT6",
  "key8": "4gY1iFv9QfsSjQDWQWbtUqnw67qKQdyuFMtvWhbs2YHaZm4rSZhswhADS4vRYq1qyWzUtNthADk7fDjmXAg5Jjka",
  "key9": "3YGRKbA3jXHaptaCZsC4bd2HD5bmYEHxE4QG1ugexZdmvuyaxpqxSoUmeN5aMNrCwVhRCqLWurrtsCniVXmMperJ",
  "key10": "4vGfM5VJ61JkYzyAT8NbZF3R3qU9LLjx6sxoxtgwxerHxTzK9JfqAscJ6LQUx3x7ZFZY6Cwkrfjwopw8j87m9vTq",
  "key11": "2otQFMphVT5UznVFx9kp1NQ8XniR7uqdBFoqViMtNyu2Pu1quufCPXDEmsVmBYyNhDWA4kCFGKoAw8AnDvA3T5L",
  "key12": "rWuTLqZZEFJkXcKkev7qd9tn1WsNUksom1eRVJSXz1AAaqzpmKkNwJhbG8KRNdJUc5qAR5u468KzhQHz6kh4UVe",
  "key13": "4XfY21pWezRVfNGN662GMiS5v6RcZFZiutv57boLhaqXVqDH8gsjJMtZtNKAVwXXvsvTVr8kwUKjkkETV3rt5ua",
  "key14": "23TafSeT4rnk56m2TV2waU71zNH3agykhaqfqVunhkk263eiGsFDKfG8rdAdwrzg8nNHFPaUnLGdnGf1bhpVYq3b",
  "key15": "5t1feeeKpVtkEBuJGFWLAkgH3zLCZzzMMQhw3z1A4FmzNsxzwN1qzpznGUEJjwpwrHuz9VjNUjuh1KeV8r5hHezS",
  "key16": "5cBxogJjuCiaJqHxKHtpdVY83XieJJwzTrUJaHqaAwd4LLEN8bzkTThDMULRmZkiaqhhDkybaTJ7GQEdf1uC8XLn",
  "key17": "3RD6GvoUGQeEawJdijnoHUbhB9nZ8fhKLehY4ZSWsBhWDzda83DRhRdvS1EBHDxvnLnS1jSXsQB7K4w5JvyAmn3D",
  "key18": "57zF6hfkezEG9GFn1NUD9BcrzCKXuCXWQGAUhjRCHExCUcpfEf616bxPd4AjnuRrX9mmb6Ky5DvU9D346tdfKqda",
  "key19": "5XW1PHYBkB3UfVLj1T3JUGqpSsGSbVWqSdja9st3ixZiZLukyCfmmWrYCwRAhT39uQmq3VegEoRMdKfU9PEwnvQH",
  "key20": "5PGCvgJ9byvB9sij5aU7CSYhG4ypc6nNf9A9qtZCsqEcVnMeoxzynxM8LxdY2HdRPBsF6WBHfUkwPvgPApkf4puM",
  "key21": "343dxXyKz4ZL7FSQKDyyLr9QkV9DZvYufGyDggAA3SsHrZw1rUJ3ovPxwq9oBz7L5pRvamBHPhHiEAKa9DSATDtt",
  "key22": "4Rfd4qB4FGEzH3nJMLkw8Z7DYSuDFkdmvEQr21tbfE5aoxZJ5GNDLR4AvaZWDRvFjq8dx7aVLoNnefmZRgPdvCQP",
  "key23": "iQY6JyjVCdnV5DAdS9wzBiquR6m8PX51nVayQxZcWGCsLokjyhMRP7qU2THdKgLd6nj6YrcPCFW12a5cUkLi23m",
  "key24": "4z2ksGY3JaLqZTPNg4v3DkNofiaAr8fsaPj12P1oevJyxAeM4vV5KJBHXTN2W3Gnvp5p9apXbUHo4WSW867x6FPv",
  "key25": "oFSX3aaxgRM6vjcjB11BpigVokHRUihTU2xZkTJpPhnaVzQNRJLg3WjJQwLKbXsRZXB1gq2RG9csDVX8eVa2LHn",
  "key26": "34bXsknxHofdj47HsP7DaHdwYGr2cY9wPhWKq5sghQs51uN7GxpW4xXGT6qmEH1Gmxh1sHfPQzkifqyq9iXAhqUc",
  "key27": "2XiwYCF7nMAecLbLtTv5U5meBUzqSPq9bfDCCviN6x1P3j9ap2msmwnxgz2Y2xmQfAhJc5vGijuch1Afw6fthydi",
  "key28": "taoFNn2eN2yK3XP3w8QWWxhVt9iyhsmxV3vat9wgeQqZwyzNFd5McUgF3LkKmzoA4Mgcix4u2wntXuARWzgY3Wi",
  "key29": "5W1RbjQVrVqRSVzhuwv7ab1GLCm6UYQJ17Teckb1kN7TjwbKJA9s41VZga4euzQkMcLLYcMQWfb6zhpXnKMmYSQT",
  "key30": "3QSLrmSr2Dse4p4WdCSQFzjrn4vWprbpUwVmDsALcqPZaMg167QPVVWMytFR8N9Y7D7Jf7bxqopvAoyzqVShVvYZ",
  "key31": "2c2VJXSoJheXJvxqWiFqtVMALNfMFYzjeaeEj423Rk2pMsygDMbccQv43fh28rcRvhLwFYTN3xLkm1QjyXn7Lx8b",
  "key32": "2Gb4piJFX1ofYTsHeEn1kzgGe8YrCQWopFt7ReDeuViXXA9nhGhQpDcXnQwikPb97PfqGKJFBv32goDsbFMJSTk5",
  "key33": "5ncDSjG9VRhetx1nk4FemjXqhem5qbNVqSJtqpFcG8WEjYUgLbqoPMTFJ9CE4cENB5pHUcWRuX4x45Uyjx897qJe",
  "key34": "SdxC7kJnbcQz5hhrNGY13Z8z45YBY5eqT34xBc8oRVyhKM8mADGy8y3AtNMHGAuQuoSujXvxDkuzJw36KsDkHMM",
  "key35": "sZaPWr38kJAsiGe7Y4bweDnMjk42cr5CpagqNnnqRsT9JgM2v5xPUknMpoRrUiyLa42fyhMx2wvuCYEG49s2zBE",
  "key36": "3YzpUN2D8CMxsqvP1nm3hz8p1AZkQypVbfdzTJ6EeKtjraWT51CModGZfNWdPCNmy1o7RmUpBSC2DsnbL6maW36e",
  "key37": "3U19dtw4uX8qUfVycvmv47s92RuSv4xq9hWMhuZbbyNPnKhJKj5ZTo8boYqEHFu6s9kG3X8iXbRaUVwoXuSMxQuY",
  "key38": "4aHGmauY9ds87xCFSoZiXEiGP1PwFaNsBd46HfVCCcFi2oFyMK4f1FvY7qV3nPv51c2u6V2jrpW6XhgGwcs9PdGt",
  "key39": "3v2GY51bdQDk6w8uMaVrnJhehev6gTLNHUHV2FK6ovy6cKggJKnSsE2CKCJ9rtjN7Z5hVEBNQaRmobVZWXguKFQJ",
  "key40": "Pov58htRPpisouinpUUujg7kR7VGtoijF9RCYybvRaVaPQJhFxLYXysgKChGsEKbJ13sM181gbHk8mdSSjpfYd5",
  "key41": "5KGKvKYEhDibgAe1wVy8c6sZhWzpdwReHnfoVUzHbF7ZPJRqe61Crf8Hox3PnngL9Tr8GehQf8aYfMEjx3WdKQsu",
  "key42": "3VAie2n9Ba6CZ2JpB2vznTTimWAURXHBULQUUbGBpuHJZj12FHWVZScJgkML7XsEHMGCcRra7Xm2HfS3WwqPbvLU",
  "key43": "2AYHhx5Dcrc8GtRftwDjoiAr7hsEQmf7W4Dt5jAcvbQaviVvHx1NxvMm1LqnkuDKgzBup1GbkYNGqhenoRoStVnQ",
  "key44": "dYX5PjrB59VtmUwjrsah6BtPXuxYfswZrDhH5PW2fHyNwEMZksVXxoyD1Gx8WBFjSxHTBs1f9DpDE93xmGoC3Zr",
  "key45": "4wXCJnUZGFoRW4sL1yqJuiUt4FNTjbnQut3KgCi8BBed7LCnHNdwTzJn4xtaRiaWmbrqxxApJ9wJ8QPgRxfqFwvD"
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
