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
    "3EPtQ76rKPTuHbWg94XscAQWPHJ4xRQddyUamKckCH45wVCvwZSYFJWYCStaNtCJJQbAY4EfnMry1TmBCX6zPMWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wsRpj6WRkrnT2qh9oJ8C3bEMGQfzqEBbV68wVaYeSyDJUyfDzS9ukmG1ywog2HCqtwbyDWvxEnMV19jxebVbR1b",
  "key1": "WfVtkeWVNiGuTs754xJX74Yq9GbqNZ1TQkdSeQ2aBH37jWWs3skAqgX7eVbokdy6zHKZ7LfB6H6UJHjE9tiU8wB",
  "key2": "3uJDZXe9ep3h2K4veJo6v39mMMoigzPoMpFofAXJVhkMgunrqvKkcv1TpmmXsZoiGW785GijwUkxfjqy51qBZR4v",
  "key3": "5vByK7yRPwoCXGsRULhTjt7y55cXjKFwFzmDytoeg3HutmGPH7v2uHqmrFLjrcQUgsvsuJVkfwmdssufWGFQEREX",
  "key4": "3LntXQVx6rUeWdC5o7V1foQBA7G1JyiYjh3V9Ev4SvF9FqLm1R5xaagDBayCDKRV5Y7eMRU4tBCiimjWr1VRnnfT",
  "key5": "2HNeJ6ZagWWSVw3QUqmiHSDKPutj6MgqXEziWKDjd1mDdj2hNgns67E1yXf8X7HbLtA1zEt6ZByqq4qdGZZV8BQ8",
  "key6": "5ozBN76geq3oedYhMGuXfg7WUyD5X75ZdUcGdsbxJkENTrRVVC28zPyafNiuvpqxaFc9phFeLBy1JxUM9f7h42wq",
  "key7": "54aPMBEyw1ddC9hU3wz9FxV3w6vP812NtoQsRXdxvXqHTN7y2m8t3RqoxBvT1P9c4GZAP7UT7YGG8sab7C42HPXZ",
  "key8": "2pUw3RKPG44pYYYkF812iTi74G2wEpJgGCaZfStZSDxfcPcSxW8KPLoZoszwaQJvBMMxeuy85ZNb829MAAjXVSEK",
  "key9": "28cR5NUuQ59ML9gNQbWJz69Y7J5ku2uh365vKZ4Ah6pyqCVXHiKK5ivh2D5vjuG3Dz9AbvEqEfLWJhNqdtPdDZfA",
  "key10": "4voJ6KVNqBd76Spv5bxJrRHD6nzBmpToCxUKhkZaF9G7Qbx2JosueXune8X2pg6ZdnZxXrGXEecZUB11vvbn5U5R",
  "key11": "5DMoCJ88jNcHCVAQE59K1zfSzvzP18hkLVof27kowWozJYn6tuJNGzkZQxVk13rqvrUvEGvqyjGyyDMWsB4pDwaQ",
  "key12": "3HDa18pRzQbYdgTCYEfP4pwHHcZeNfUuknUTgXgvScivNBuAz7mgGWTc3WPvx1X7TjyyczUbCLzjdg8sKP5N9bC3",
  "key13": "3SkTyNpJDpWwZhczHSFkh2fraU6AgaJ3MAgHgGhimyWLH7ywxiKQvq4TSMUGLDAWFGhdyMDk3ifGpADU83HZBjr4",
  "key14": "2K8Q6cB4ovMWTCTzjm4QALrSGmBc4mb72DZDmPQUpVExBjkHD8g1NEUTktj29AuRBRU9FCXDrNM4JrUrc3DsAV9J",
  "key15": "4Rfc7keutdLPNKHfBuBZ1P9ELqYc1q7SQgXB7BVPNKTVT1cVFQz4U5Pd4sbMVa17xcLfeqSEVBwEmkcBqzZMX5Be",
  "key16": "3yXtCFZDgUH9N6SYcUWU5eWwh5vF49AoWzrPg6jPcAQWngrHFx6pAVU3F4cXs2wqbjw69y1bR1ntyVvcUizbb18S",
  "key17": "2Liz2NEuiAzDJNCEtdiSp7Z6AXtjry5VSzvXxqYPsixSWFU6D6DW3onYrF3GpSGJSKKGbYEcEjWDE4A2eguEdJbu",
  "key18": "3usG9ZnqKWp3quQcksyh3E5RF4KkZqq7WMVFUDNLcrW8TMbfh5SkzXfDveTpcJb726r2acMpDYFkqhGujEVvJq7k",
  "key19": "uzg2nenBRxC2bAA6mbhciePLXQqwLJgwpVbzeER6y7DR1zeYWiNuE12uTXqB5An77ym3JCsL9ktq8oECCkpRfTY",
  "key20": "5BbVnQoz72cMnWLHcvizEvsJ5rndcvTVN8pt8oyyPN1r5B6UM3Dv82N9i3ouKCN85A5sdLTTaCBs6NPWPyEgsu7u",
  "key21": "2AsJFzAHxW4ogfprf66ycZMQkEowXsXJjDs5BtRe25GZxDqdLM8vr9QaEFAXCtMURXPY2rAdzkXhRTGKy2gpywFJ",
  "key22": "3Ldi3jRsQ36wvQztV4YujQ8PdWvmjwgDpbYhsNYo8kxrm69Xa81qLanesA4ohTXWupyzsm9fAGqR6RS2kaXoy4A2",
  "key23": "3QqcAQeC5Z6QUHrtuycyVofJLX9bFKahvSM4YAw6HYs9hpN26jsboFw9659PQ9uSq9eCAU8GZWr4Xdp7bZEMmkFB",
  "key24": "5GH3eAufDyvdiaRuR3vvmSrhoBJxdPuEhMGpB9rcxc9T9nUUqNmUNj8UUt35FNfsRadZA9BQXAUrnMeKfSNSkvRy",
  "key25": "261vZ2y18bgUwcJFRRRSnmaAZkFTiQ5bkQDCLCGNrdwfgNQW6ePRLGYQRVxmNct8fdb4k8dUUG6tHk6RJahnoVSm",
  "key26": "oAohE9RJVGzRJwQKJ2QJdLmdwNQmXLiUzLj8mV4q1YfkPj6SkmB6k3TRg87bvFMJvQNNjadTzbzKZT2gvQmDf7T",
  "key27": "4tkDQiyQHSCjcRibc2YccQvJ7XP1BZXzMWurCqgZwpphGWTyqbrWT6EahGvGyN59VDn1AJv9XyhpjXuqkSJiab3g",
  "key28": "2SRpe2TAWxkaNRVLitoxXBpLuYTCMw7Fg4BNC9us9ZbisTs2anabzVJBkNg9fvmuTwfUgm4hRA9f4tpPMLjbNNW7",
  "key29": "6kz2ehJkkeCTPtLeXFMCDdN4cN2ppUKC2KTTHi8C4zNFitS7zG2kFUV7GtDCbuZTV73snJ5xfWcqmAWsmJzLiKt"
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
