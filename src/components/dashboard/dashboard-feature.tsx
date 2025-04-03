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
    "51ThYGgKTnFSkhwNegYbTfmaa3thyNZ6DgixhE3Vp3UTUPa6CyahEbnkqqh1qn8vCtyyXZ4JECXVQ3JWPaJsXvGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cCzgYAFmHj27NQW2FSzKE1asbtT7KonJoNBBgd2AhvgFq3JXNiubSGpttpLf4yXrt68fdcZRnJ82mMNkMzVikos",
  "key1": "4rJgCRtXf51hvxCDgJNqozYLfFkLYiwNFk1giBf7cZiGbz6BYg5tARhrnNZZrL9BuXBfAe2vMrd5QvAM9Q9JBeVd",
  "key2": "o57ujsRD9Jnssnztnr7UriXSUawrfwGWkudLx9fYpiWXtRbjzfkJ8cgPjgBwJwbSmHPpxMmNEJx7xuq4gx1LP1K",
  "key3": "5AdSSvMgfP1EkqnSdvhzeSdpfBSNKtgJQppbbHa6UkNuVwGKNnFxQwnswEHFngEDHpv5tVqQFYz3yUhCHzUCYtnt",
  "key4": "3vZceYr3HUdK6pKVEttETHTYsWorzk7wGsKjKxdZMukJw6H1MzNneCykPQoUrGJpEnXQ1dvaYBhGkhjKgKehig3R",
  "key5": "3jK7nPgp7VvSaS97gvPECZkKKoZJsTJswfz9MVrmA4YYugEcwFAVRabJSLCF4scz4cWnmmpfQyJ6GWX3KvGvShDP",
  "key6": "4D7bNpsq4E4sA87YywmG1oEjhtXepBhEBZKHzHY86xxPm99qFgv3hBPubYoRQBcTSd9txcQKFJxaT9PSFyVhRmxG",
  "key7": "5EhPHJH6C3tisuhVxoqseYufE8iJLkLrYqu6opvp5iNbcqeFrbbQtJRtXD6CQ2qgqwKHFMVynXgTntfMbDitNEZL",
  "key8": "4WMdsz4GmAvmQSQBMvKpiaWe8SuWUmpGfU2oR1ydpkNqHatCzCuyKeGn1wKWt8fN7y2Nbiq5MyMqtuCVycJs6qYS",
  "key9": "WoQtLrf9ThP6yerjVtgyC4MNNFsu2D9FemnQdTnpoLLrqA8V8HUNsx63xLJjKChpqhHpjDZNZLdf3ZZ3bsb5g1i",
  "key10": "2fH8zCF3V5RUvrTMNY8cM8BhpPwkWcdTXbV1WxtR7CRuYD8JJ5sFScq1TCkT839vttSKQWeUVgnL7JUDXvs1JEZs",
  "key11": "NpUi8PKKFkCwAiVp1rnjaVyqSTmqdpU7VzkyhFEAwBdQbpExxKD3asBXqaswCuT6iJqQARsbGJ8bmn1Ct69NdKe",
  "key12": "4dqpFk8LUtkfiqpZsJCY9Fs9d5TVZhybb5bdHjRjPL7JVLToX45i6aRAGDPn3erGT186JucsyUQ5kWe1WHbaqnZ2",
  "key13": "5WA3KKKnJ7kgKhmQ4rqs37k6i13Pr5K23kuVG3aCXdpiwUoe1Z4CggCjuH39urQbPryxCfjXBga75fQ34zjAWhjG",
  "key14": "5uevKJPPehbrV5QvJ2pqPXtymJCC1EdjdZQSxV6HaXPmgaWdgyheCsxadiZAj8CUWShffex5SZyf6q5NGkaZtPbh",
  "key15": "424dkCzJuRrjt5QMxVBTHHDWo1FpU1Z1KXmMNXt8p1Asocrm3JTgy1ry1L6L417uSqTwqxU6qepPMzg1CKqtSdDy",
  "key16": "5XRxtL9zuZpdtkjW5Hfcxk9DQdw79WxcRT1LGqfxCE7t7eeifoP2gr2uhFJw6hXWQH71TMkiHutGNHQDqEkLeRpM",
  "key17": "56PLDQZBfnxEWvDLHsWDxeqz3Y3FBZuZwsDX72JtYW32QtpgA7gXkfqwEk5iLqgvjDqfbhHkEr5Mn2jX1qopLpmK",
  "key18": "5uhCAirw8z5V4KTkJnRzZfLKgNtJLBKaj1FaoetVHL6qWgDByp5b1TDh5NcmYBBoyjxPTz7yjN31SD8FRnxnQn2L",
  "key19": "4tRngMhE5RrXtGAprJMHTyWuWbrhu3Ym6TRHni14SkaDkDBv6etyGScyNA6iNG8cqY64W123zfGq2ccgmdPTEiLq",
  "key20": "5F8awFXZnCTXQd6Dk6316uRTH9pojMtAmEpS2WcMCyS7jissanAo3a49ynXCDGGMU9jc4aDSKVkCXMfZVLGTrzCF",
  "key21": "4hsAaPNFveCoTYAZr5yW3La1aEusANgxPpPUdgLEckZrUYmFjxrAFwFaPaVwhJsE9o7eVHm7RMkhWcvP7LvNTn4U",
  "key22": "3ZHCW6G8Arjm2ce1wTLgSpGmRRtF2NSqumYEDFh9E5KjtcG7DqEU7dQ3FRDSCGfXT3kQDTrD2aFvL48sC5hv4rEm",
  "key23": "5jsucmafAEizdEqySznYSzyzrwuC1stDiJ1ZkfhbSKD53TbhHwPbBMkC4zVbBzPoNnQoNAEZjmGfPbio57FZRS8Z",
  "key24": "3uJb7i3itkx9UtCFvfKJNaKbykPoTNBEFGgp52QhzpZEfxniNNt6VxETfFNJgiPfTJ2evi7mx6R6fqK2x3ehJ5dZ",
  "key25": "2Tn9DsERZ7AofBjGzX9sYZqhKjQ6xogmHd538muP3aPCb8WGTNBpXUVU469PYc6DG6Uug9z3vPn5kU63bEatq5U7",
  "key26": "2UWH9nuRNrpasiPa1KFWoV4SyNdNsvf9Y4makQdsQc2WgVyFsHfdh6J1WjouS4NZqM8rhAiwUccEh5UioSdnqT7d",
  "key27": "3DouBMLMPSJMmejzvpD2L1WVTY7xBKJ8GPTZusGJq3EaHQYuYA6btv3tPaSGGAYvSfYuu7eqYHyQDXFWLHDPhs14"
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
