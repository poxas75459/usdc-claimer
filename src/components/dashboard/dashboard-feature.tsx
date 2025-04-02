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
    "5EATAXnpWBKDq4kNBHtU9ni8iet7NGNSTJq4TDfkmV5yUYJ8GBBzUE3pz8ok8qY1NGfCD62D2v6LwLdEwZ1bMMVj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZNqs5eSCXuDifCmp1rRAK6jTzaTCzWSFhtEFj1abbesQRWQoCADR7nc2u64Uu4MxH9SG4ioK1pfNGtLcSTtBJw2",
  "key1": "QkXPRzSizcCAhAXCsfFHRUeAYd61ZR7FXGfKVEDcWtBqxyWcTKSVzQL88cX586MEerCh5uNENpmaypHvnkHAvSD",
  "key2": "42eFBDYLRWXDQDXjgVChkMKCJUiwSBdhVogRN8GT18sqBL4w4hjT7YmbXpeq8ePnLB6n2NSvfM3fypSqVRpyvF7m",
  "key3": "EubTSptE4RUsGya7MuvBWiqqEZGTBwpWkPYaB63iNpomUp1GNoUpda8mJ9UW1GWeetof5XcLKhcmaived41BTUq",
  "key4": "5szKpE17p9P4wF1pstKFsnBmsFBwyohT6n9dxYVrs4JdmDKhdhazq7nGDdQVXAgj1gn6GpWV7E4FSAEe9mfCT9Sf",
  "key5": "x1jhy84F32Au49QByMb2rJTsvrdH7AuvZNNQEfZtRzeVpdcYSodna5d1E6xXnm97VcVC9k7iqvsGdmhoeNe9LHj",
  "key6": "NAyzUGJawuoDam1E9AGpXpypqpC9QP7w3SPoNBcefNkgMqz2WLvpwGQgPfVksR6PxkTUXhXppKguAJHTNkyCKr2",
  "key7": "5kpiUMgaYB3hQxjyPesiv8npSkp9NHKL6niDPp9ZKVVMcuzMuQu5PjqQszAQhjzpD15SFuHtd1iD3sW9XFJgwqdD",
  "key8": "3WroSyRpY59MJWruVpavDkS47xUR14hkb2NAqkWUt4BCvvSX4dXvyo69YCZmxTMbraMBoH1j446Jjw6LBkufkTWf",
  "key9": "3ViaD5GfVfQx2YPFm6Lp1NSbyuMzevtkdyEZ36iZKFkZfoUZYBqCkuaer8BrVza8ti1aStbDqUnwHvuPGAKAXwCT",
  "key10": "4zAqKfGFf3pVUkN4rG8FT6bzkCD43HDJ1FPXMxF4NE6BFtV6jNtFi3kNS7F1QtUJQMp5NGKwZDXLuvDB24YiwDYx",
  "key11": "4ZRux556zjFN2JHLdrQ84dEHZdmh7o38Rg2Dk5vZfX1dGkfTofAypbJhPzXB3iYGyqufEYLruLzLLgmTSRc3S5TP",
  "key12": "5TE1uUYQPByvKLXWKnx54Fbhyqp9LNdxnLrvHdsbm6APc6TWsy2YZrxxhud6remQXiD2nLySDewP4uk7bKZk7v14",
  "key13": "2eUWbZQQAkCk2jfsnE2v5RnYY3wv7tZoz9r26SVwhdKNaqcjDmkJLLCUXTyRU13Pu9GQXEaqJje4SfmzVhHkQo7h",
  "key14": "3NX1LtrANbSdh9BJ2YGk6g797KPYdrZqMmGbzuDTwUtzco5FFUc9nQyTrwAKMyawKyy13zWvqr2nCLi8xyRYFt1",
  "key15": "5LZQttYuxcnsCuzAGZnDTUMSqb2773dFJduU1ZC2SGbJWKormFJ6aejVEqB1N1q2eMT8AdzR9wZDgaarbbHtA6Ko",
  "key16": "2anuHjh1Xfeitqda7o4235FadokLGE8MpwYyNHUhEHQ2YPRVZvewoQWnpUg4Jdnd14y7sq4djSt5SKN8ZHKq4VRU",
  "key17": "2JTvfRMju4J46F7rQvVCubzXtMQgE8sAugbxDdkB35hMBUrw6DeyhgZCKW3xEe2L8vEpasbX9FFoiBMRVmyYQX66",
  "key18": "52XCvKFiYZ6wwywPhRFt6oFmZsbSGLi8qpKDRkTqBUYVSsT1q3A5Y3H8KNqRjQ3LP3SdHSegXaWH7MK3s1tNZgMk",
  "key19": "2JVpEDZdyS26cUcYwjgsdMYMcSRZq9WpC1Yqp949UWSiyhaGcVWGshk9GPj7AaGw8pMNW6Kf8RcXy4BNntbhrR3T",
  "key20": "4bYkJzeHGc9xb2iSF38Vv8AhQBNX8SREcUygtGaYchEXpDcoweU71jEhEjqjb1PbtYwWs8Wj9SV7KygMcePtmRf2",
  "key21": "5gqhGFw3PdKzCqxhn2qwfH6heCVsqfUULarDRaXcWYkVRcKJBrKM5pk4zbtHJpZp7epnXUV1r6ECdXQvnkej5UFi",
  "key22": "632pMbaDAmJri41uvJt7AxrZSJorxzyGKddvv9Z6kZ3aMTbE79SJ3DkijzQFjZAeAc5ucDkoxfWV7NHUpJysu4hT",
  "key23": "62sZBLvAypFrYRXFLYY3TGa6ossB2oYNQ1yN2uvsridKfedbtoZccoAzsWYnmyQZuAez63dYTWWDhVCtaPfsp63e",
  "key24": "2DWZLpUkKdCWUGAHJuP4Kv4bHDd4VjqDMDyL5Ma7i2QbBm3UZTUrhVN1kWsvZni6cf9UhmgmpKErU98KUbY6ZzKe",
  "key25": "5FKwf1aSopKjZxfTXBdUUxFvP3YMYdUdy2uvd2SZ74duqgR8S9rGRridubP4KGbVnqxxRYCQfjdmN9Q8brqsifzD",
  "key26": "2nmcYwNnYyGJeGeYciW8tYr5W3WKTLVFiNzcbhoS9h7nF1GfMbfURcbWTadJtHs3288LMG6cTvQBxHdm9JcLC2TC",
  "key27": "4dfLPKyoV62YZFw2D9stqKeKGXtrPnasGgAVKtKXM7WvLcxzjEe1o9itoawwxj4aDoepqH74Nanq3hGY2QWhvGQ9",
  "key28": "3NiCEAX4st15ckSdhzfqkcA6dd36W7XA2hR417Qddg226Ld3Mv9kuoXEKge3a8frWjpoh6ejN8bohUv3PPziJH99",
  "key29": "4jXt41Dz8mTvoKE3xHQAJumuSFLTxYrZMnf6y37e6ZSJuyfnJE7dEa835gac7mQgDGNFC663F6FQTdytJqbd3aX1",
  "key30": "4zBAAU38KvqCzo4AhG1eN5RrFHnPqLt2oS9HWQdCn538H2MQm4dCKmLDkgWjpA8Fi3QX9TiZvJrfx2L1fKRJ2NN7",
  "key31": "5AvUxNyyGMrLATF27zgTzFGKRWGDJcT9TgKF1JMWLgeCbaxWXowcj2GXhT7u2KcdGmjb5BkaAHXK7muVTbCzY3iC",
  "key32": "2pWpZwNjbvtP3nK5J1XuM8JE9yew2A5axKCnkjWNJWRwmXmRkvX5uYRjAtvqM8qHAMWA1nGjmMLoMxkAVc2Vp3iR",
  "key33": "rAWyPX7gNDAF8ozGwPuynXaqpjve4H52fGEGotocMieFscKqV2U9fqukFRBM5ueZnNJVgfUuNQi2YdHUBkdDsTX",
  "key34": "3atoFiwUHcXSxyUPCAyxPpU893smwNRFCWoaANMVT5GJtMW8UiPpNe1rCs8VHjSQF62ZY8KLaa5vsbAxwXedPFji",
  "key35": "c5DhjV6SukrZrqyFX7nwsVBFf15rgQs6PSXQbdCCYYkXN8vVbkCZCp1ZBaptxuqGt6NiHkvKMfnbakttjXydUkq",
  "key36": "4ZhRPJ8oXkm7TVnPTSPpRzT2apppmF2CWEf6WfknsQwoBFhLRg6eJbwYSTt58HzkDadHxFDr92euUaxW44FFq7Lz",
  "key37": "45CsNqU6JGPEZPjuXoyrMGyKAVZ6DZRUgeAz4eRfFhvjSyHv7TaRpoGFjxsUvpCkioXXFbSbxF5iW5Dp52WqNYiu",
  "key38": "5iBVRSgPoDFTDzh1K2xVfm4ujuFQq1CJfercneHWK1bJCLb5WhevtE71cpdc94VHgbydhVPB3Mobcs2hdhMpdMn7",
  "key39": "2Zq8NxTTXU1iKuE6AgtREH85YMsAcFxqXaJaN8HYWCi6veJ4B8aH6cfhyV4LtY4zx9sC6TSxipnayETXFkG6khcD"
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
