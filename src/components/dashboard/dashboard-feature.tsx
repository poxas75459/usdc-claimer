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
    "4KBirytJvf6CMr9i2uWiA8Gpa4nBdg66SaG2SZurX9kG6RUELGHDqJBTQKAFi9q3HfwQtC5qLdVcUYAa8EKQxdKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24arteTqQ95rVCjP5N3A2qT1oQrTp1fQFFGbANw9nwZZ9FBdj4X825zQ5tm6cGpPC5a3L4i9dC7yp2covdGksgrt",
  "key1": "4cr4sB5npGGJndT8Gxc51syXR2Vy4tqT7uVt9JU9FyZC19ghacCACxjzc1S2KP5eM5fJXpNd5A2tRcNMQhsH6mdz",
  "key2": "5HMGMBhharduN9L4iBqKvwyDaLbEgNJxvD9qaJeMtShaz7DXJggXLmWhrYqqhaHzy5eUYn179Sp4nt9Gr7d9TiUc",
  "key3": "3PBgutxNeX8HFTMQ9eFXKtz8HEGAt96LreMb9uPKiyJrRnaCUrLRaDkr7s3RPPX9K234zfEn7VTyReko2sXA8Mvf",
  "key4": "2oCTTAVjyxjBhur2m22sKv1phuxrutVo7Jcq9zUTZ4Zh2y3HV9Zkz82hFYyL787N98ELDCPiADj7ptBVRRjTs9g1",
  "key5": "39NBHyfHy2t83KaPUD1EP3PKda4EnmKmcrtdyia77KQwwFeW8sEXRpVGtocPNP4SdedB9VHyDY6p29pf9mEtTvJ5",
  "key6": "5YEASTTcPexNBHyEnMEX4Ssns9jNg2yLbgCoTy8vW6BXQCMuFSbVkNJwBrESR1L9Xj61AhDsXUD4fmLsWVugHsuX",
  "key7": "XJeieQgXT6cuA8vmCAe3vV1k3Eez54nwGu9QjJvMFVPJGWrV3uHwMeJvp9EB1zMR6SSTaq7F7KGU8fnkkPoReKa",
  "key8": "3XgEnwFr9SzfKderHCis1VHnpYspYWgNh6c4W1Js88u4Db6TvD4D6gjHCcuS6sdqN6pqDk6WXeXpJewe1pELwiik",
  "key9": "3XM2EKjofxonPZhRmv6PZWtQbThzy39nDnjftWMyT9Zpb38qbhf6GgGZfuuk9Q3Vf2HGCahMTWeG9rimxZ16VmY4",
  "key10": "33fCan3CjQHHfvv5qQZJ8JtZerKCa5stBYat5jm4f3orRheNmkayrLBhj496Te4S99U3m7tS4u1bV9H9BqtHfPfp",
  "key11": "647ffyUoqGt9b3XnZmmNhkC5Dgdg9LNfPyuSZiPSXW2CsAKvXagxa7kh92wTzsQumL1zLNk56iMaMZQPhrENRNRp",
  "key12": "3fgoqLBo3z51pzLHi8oBFLTzV5NEKQs6guRmKjtb8LUw2CWvVFtJqwufxcYewoDDUbzrjEKj9SDR4HG7v3mPMWZg",
  "key13": "2C5MPZL3qaXaeEJbcQm8qpakam5EsCna8S5duLmihwxF4simVEJoT6gTABXvGNDmYfL7gK8WA6hSwRX73c6hEsDm",
  "key14": "3bMLkpZ5dVWujWsqoT79ohhWUSCRZyoSfv3F9eJ4wHzHoiFzbbc9zH9wDbK3o1cgyxBdSgPawaKD2LR4j9YaM1KE",
  "key15": "3P3rcV4EVpCuseiVzsB2UELTBYgmsYNndyX7E4wdYqBGEf6hpao2xhHzudc7jXc4XcqyWSvC5U6Xfh67s6V6GrPs",
  "key16": "3mZ6MpjPdZCBiSNDpzSsczGkd2WZecTCjYJ4Hwv2ZmsHUDWpLT94Gfm3gM1Mh1wUMXwVTS4W4y2FYidPrd8jQWvK",
  "key17": "XB2qmNwB5HCuJxXCpLuE5nvyyyCgxsZJLFELvkdvgP1EU4x9oMgF7dD1H3fa1iuGuPXXjok8m6Jd9Lkicf2PqEk",
  "key18": "3hhH3PDrx8oWKMkJ7BZieMRAPjZYJ69MzMtiGeYQPyyVdrQ1qaQvZgkKVyDY8ac8ryU9EViuS4ja4DsbFyK6BwaF",
  "key19": "5xpoxZXsmP7itV8pvEAkeY2zWXBQLftmwJfHiBRLWrzTKWQVUmUHZeVUECxrjjmXbmUstUTk6UwkJKSvY67KC5JY",
  "key20": "Rk9YxB2WQwamWHBVve82UQnMXWnynkmNQ2ZnHgoNKsLSsPLfVwc2BRztMS9Bsp2Q1tgHh7rSyw6ntUeuz3ZdPq6",
  "key21": "67RNutp4ptkyxFtbdcuRHhrUXnA18pMHiguxeJxEZRZA8tRHo6mWTH7NazjwkZJqrByZk7aQXBzVYqguN2wGY7Se",
  "key22": "qQifKGMytcEEcpqvWbPdY8ghRphvSt57zmRemGw8KpxSAixmCC5qmthWcCLcWoRsbkeuhFKNHNrKzVxAtkV6n3n",
  "key23": "dqp5AonFAGC8QHjXs6UiHsrMSBfcF5E5UAfrpce2mK79dx9hpcP5idk55EVXUqDM4V27u7wxPLGApEbYnUougLP",
  "key24": "3FozJ2H5ZMMdS3N4WRWZJZqvPjAb4NkVKVcpGLo6wVzwhRjZp4iW81QAt2eVVFR5VvFuLJZznstVTnpSojKikgWM"
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
