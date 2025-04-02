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
    "28x7D4KzRzLsTg8f6ekCCXXL3bijsCp9G1eApx5yn7HuFPbTnQtTKRe9vrPmGhA2jcaPe4t7GjYTbAvSexLgS34D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iqryK71hS2CtupDnv4X36uvkPx2WGVXq35LLMeC4EsGn8NciFZs67z9GAYu9dRgMNxz76B8Tp9bG6s1QrRXEXRx",
  "key1": "2fnCE2yWPLP1dn7tMc3MkGUjssJyBRywsD1yjBdhLdrNxj49psbvkzSkpWiKXLHcEMB2JxPivFdEk6QHVPrupMxj",
  "key2": "2gwJLNXDVPkvfRmtfrsGEhB82cToyZcHxsziTu6YooJYTxpX4RoY9SNDo2pQ1e1C77N3ikh7Hrp7wNVAqfc9nyDi",
  "key3": "4zUTbNEZjmSWppCQJLSAhPuZ6nAJSoSgfsCcD2uhABuANmpKwHL8cXFd7qJgyFJ5Ud9RZp8DnDcW2CvErAetifCi",
  "key4": "4PQGSGkK74V56y92f5xwDh35H38BL1YWWUmeCj6JxHZ2CzjyuV21TBuvyMTvRQ34mBUgijaBNVJ9GfooCwThjPmp",
  "key5": "2DSxpDboBtvuQQGu5WaSKUHPpjaY1AqWT5w6sMb83rNKNt8Ndqn4BGqRBRvA6ooSriWDnt2SJdfqodzjfMyCbsNk",
  "key6": "1nuasAJzx4krZTGFkcxzYr3uVi324qmFK6sD2eR7EYMzVmWz8XuCcvvNKruG9WPajhuHN7qK5R5Ls21ZiNSbKys",
  "key7": "mfpwdJzbtkzm8BtWKwcfNKJkeDbXqmFn9zVVZYU34r9oRyV4xquSgyHH1WJ4Ph18i1rbvGxguJKmaJH7ACe26UZ",
  "key8": "31fMAMho6qq8ef5wXFM3xJg87aNeWC8U5siKHdVRmuiZwwVaJJnqrUnHaK4XjvpfZ8CKqbz4cW9g2z94L4ifb5qk",
  "key9": "5CY6b3h6rUaXStewDDWz9Aqcq7HNsWY5UjyWofAHQEPFrwWaemKp3XALsMDDM3ToET7gaJmnMsNYx4LQbyqT98N9",
  "key10": "25vSHFRBMWZy1BusDdU1TLXVvEeJJveaUDJPVPbWEHSeHCJzkwrXr9XW1G2Jv5nzqAcZNGMJncSkc81wKK7FEynP",
  "key11": "3n4AVEjmXSUiFdDsUWsvYRwMJSqiwhRRZkf9Nw9j7kHLERrMZDXX7pB3tRhd4JvNRziiy9ENCZyCDMUy3wQqo7Us",
  "key12": "54vJuBHa3jiGaeZUwvnAHA12wH29ncH1SyvHNG5E4TcRdjcuKaJftH21agwTE5sdqzhYH93EGL4UTjESUv2as4zN",
  "key13": "2NVVV3aMaaavK1X4W36ZDF4BxMyW1fkz4awb7jh8foAsDsKefJG3KiyAGgHuyhCDp1Mqa35u2yQBZGVv6JwUBTSc",
  "key14": "2dTSL1jMeLfUgz13rgAUyhsyrXdnYexp62Ps8UPLgsPpigm6LWumLH1V64kPmyw7LYKupn4t3mLzoVae5LWfaG8L",
  "key15": "3JPzUWPSz1tadxyHrUMUHAqp6fPyBv4u3hnht1wbnMTbiVVwncE1H4i3dFZinSKtrT6vroaUkoD1fuNJjtBRBWHM",
  "key16": "4yVT8soFL2kTHFYfGaRJixtjzJ5ydxy6MsEeEwVR92677kJtBjTBYEzS3bHwrLziG5Ct2PvN7SXMnmvGa9T95hxT",
  "key17": "M8q4XBbhYuHbTonQXk3aaQmY5SGGMdui4X7JwxbiU7RYooVzU8cngZ9d7HiHPSBgYxSgu3aqXkyxyYxzqRAEPoP",
  "key18": "4GpTrjsLwYAReZF7PV7xtwizkubcuWNavfCCzmgPGcZfQqEUCVGunx8Jy7t7LBbxos8wmaSpVvrHFfD2ESHH4rHE",
  "key19": "5VmARp56RXSf1ri9Po4oz4oMCfmYMvvMuWNbRoZxNhHQYVwtWSEv4snDySajTA1y4LgFStJzEUaMAtzazJfmLeC6",
  "key20": "EmK3XBVqXYv7MSakZYvaerz3WphUSnzfHHvRe7viEq48MWb3CcYgTU5ePRq88DRxtDRzz415hDiYY18imJakmm1",
  "key21": "2Ea68BgCZdX1UaoYYN4su7tNCn99uezSfgpaHqYPzvaowkLR58Zbm9SuGJUebxksv5VGkwGdEjjXPYi2eESBvnRp",
  "key22": "4V4Arh79HTS4GEGN2VyZ7nGuoG97FNHQohQZ42s7zubSYpsFtHUW3KmDKW1bY7wk2krF188oBcK61Q6VgS2Gt1b7",
  "key23": "HH3AcVyFodTioR958Hu3nrVhNcxuXpyE2FE4R8arvW2ZuGPy1k6maG27P3G88KMA72uvrN69aBSSqXZQpxew6Py",
  "key24": "JAroRu6xNnoz1E8cLtk1mmiAQWob4mGQnNvuMexmVnLZD8uZSkcvQyoGkBR6gXGBV2UKiyoFuAJ1ayLEaQdMcR8",
  "key25": "3oH6cUBiYBJ1bAA89KUMjApMQYsdTWdFCKztd9SBNZi23NFQ6YqjQYtyDqoETCbo3SzjG8knnoZTQ9ZQ21cpSgNm"
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
