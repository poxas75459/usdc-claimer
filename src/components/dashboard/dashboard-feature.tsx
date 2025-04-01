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
    "5qUn86kdBmndwwmo6Mh2BYKxoyojA5UHHf1XwmapEnYPmSVfLQKn9iQvfxs9jquF7VP3TSEhEYFnHzJFy6TfEWZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z5Ve7ogWodW1iNo4zBvDLM6LyAmyKLoSBys9t9FqvtuaHuECF3NHh5yzS4eRmZAzFPnid3VZErqyn4eWYCqKZdy",
  "key1": "22TtttpPxa1KDSCmMrmjDPdmSc5w6RMUrNBobZUQ3VJ4f9xSt7KS1egjGJttBF6i3m51VoyxS9nbBNJdiNgL85CP",
  "key2": "5z6Ah9GbAvUo6UKxEUY167tkbfKEyPVinGhvFRmr6gQwycbE1ymjiMFpNHQYiiAJET7oTm4ozG3EeYV9xVafriY8",
  "key3": "3uTUGHkmwXDTUsnUpcmPNe6gfAXLbZLnDcBsWYSz647HgFGKGGwrmHhcjqCxFK7RbyCCmBKWHtf5o8YCLZjCCUa8",
  "key4": "22FnGxprraPnnvN5miEpYapcboN18c5m7n8KkQH4bdA5UUq12dC2UDytX2myfxSxowpkp1Cqp7puE8rDNwpJgNoV",
  "key5": "23FySWqSDfUhJPjUvdkMyx9ZyofQRJZfLXdW8RBJ2gjJsDvizHZp7GtHzh9P7fV1fTNUDZi2BRjw1kJhGtDeJ4Xj",
  "key6": "33jzgKPqkVGEd597Ay3inaw1ezWD3txV43AqSt3FHHbfMtrMsTMGHhQMAbpeK4AFoj3CAdoZjfVa4CBFBSi8acAN",
  "key7": "595vYwDLnYp8JuUPSvoN6AEiJx6WLZgo854YTMZaDbB75BfFpCqgRvSrcNQxNmQBAm7Uawq6GZSpWrfC4cUTubzT",
  "key8": "43XbU3Po2T5dQ3KLTofRFegQBngVpWZjrLQZQygJPrsgyUgX7p5xo8EXoACwg7B1v2mtbhhDYxNjVdCgdGqwqKhW",
  "key9": "3AvPBdn7zyhGw6yDEFVw344Cbdbc9YyfXbHSw3zXEKg2pMDf4Wt56ASStk1JNo83dcxJyZQdfkyhqKe9aLfvaTZY",
  "key10": "5YQ21MK2u2tBAXQo8mLSwmy57A28REubPow7irEDmSbD7nfC25zBMcEJ3k7bqFJWKSNoexuNACzsQhpRiLRpaDDw",
  "key11": "48SFf2vCc8BVDdnSPFNanxtwo6VBrSNwTpANFcGZnKqH1jBkUwjAtxj9p1grMAft53XpUxzzgk1Te31L6cMqyP24",
  "key12": "664zSRRgM3Tt5BDHZiLkjn59LqHqY3iwhMqEbntiGz5ncUKbtZbUshpiY8gAtrQLrxMWyJNYDRX5cGziSXAY445s",
  "key13": "5uPz6AzeUXGtFPSmgqu1fprsPiXhdvsbcLzdpbF4mLHwu6fbnkRFpw6Y3KQX1kjT7BFm3iDKyPwMmj4s44efdbBu",
  "key14": "4PxQqHpjQ32wxr2y2zou7HgtZAyvC8mJDiJxx1whdo6KdwFsTj4YQfcJEyZNdFLNAaDoovVRbBq8CfmU8MW6BnQS",
  "key15": "4vXymMJZ8fpnCQz3ZWfAVAjDt94eVt9su8geaLu72akYjnEADHQEtdgrTTCRuXAV5iFBmxEX5y1MVhTcEWK4a7PV",
  "key16": "3iSszgojgsSwJWCkrmz1bFEFphunyFqLvDxbSFcq1woVPHuKyrsPARMUXjzcYGQfTWHZCV7P8rershw491jZsnuq",
  "key17": "4TCLPmkVwP9gnUTYfiVRWn2uGK28wYaV8tyW9KAjxcrRy1qDNwznYB4myn8s6vMuWTZy9SGhik83Dq7zg8HSMEdP",
  "key18": "2K2eNWY8j21EbkRaW5mqmRz5skQat3qdWsX4CaBvRn1Ap1PPPSGX9gzScp3pHyib79miF3LKVe7BzM83CrFG1gwT",
  "key19": "dkWaJ2wj1Fs8yvCnGX9KxMkn2VLBpnPRD6xUHYQ9k6nmKKuYetA4VJJs6nds8F43nd4bJfnSWqfQtDyJ134frEC",
  "key20": "L5ag6nyKNwvMzkV9UZWQ3zEK5xtDxZypzWRpvd7wHHKJvXKYAd5Uv1AvGvEbMXfJHziCcLfeV4j54sQBXkio42U",
  "key21": "3JFJhccYkRTdZRKDNq3n1Ug3JWsHFnBCZd29tUREwNs65fJ3xkYJzbWRcC4hGcfh9TPFvijoyqMSKYP9HYDgFEdw",
  "key22": "5asThd9fynKmU3Z4uMzq3zeVoAqLPToz4jzefjuBWR1JbjNskJ1Lrk1ZQTMdnDbexZg2vEXNUVBpDTz5yqg7MidC",
  "key23": "45tZZ5nxx1ZWXrmhCNRLnYy1uQP92bVWgMs5r12vSK55TLKn9NYYMztqqV22XHseAjNNsFvQih2QLCGdZoRdCsTq",
  "key24": "4RCRYdZNnorhG1wrtiW8ehmVF5Nc57AMKCZ68rMPPY5xqPVbxCDnSuWXJTdxkn1NWHiCvZQnWhjVHXszC6yW7tAU",
  "key25": "U1DLRTKT7NSCtkUPskznKntMT91zi3eP9FJ3ufA9weDPDEnWDMuirUfn8G46dR3R96VsBXGD7JPUHA3QfAu98yR",
  "key26": "67pRkwfJdPtMe8WVWNm7eSoP3ZNR9iZk1MkgdsuKXS2ktgbTBpa3xhzaNi5DKicbdgksQMJ8tY3hsuFRyGMY8Fh7",
  "key27": "2hZqVPctuwCPcfF2TSYCJQZub26ybXvQWFsZrcrWCv4TKbGgV2yLDYzi2iavfbbeAUgNQC8PYEoV6QS1t6WZotUx",
  "key28": "X7x5MYhrNmsGQXvT3HZ5DzVNgURGkhX8jhiaiBvwMARFy4TTD27tVqjWRQgB3gTfbqFYTfoZyeeHbnNjW29DLde",
  "key29": "5ddHoy685XYEGzYYYxK9n2eJzpztizipKk7TPa2ZQ4scy8VDc3sZNiTquowqPqW7E5YYTAQRi7pDnuJMjwp9a23m",
  "key30": "aqPE4j5hZsx75kArmhjWDy8q4mbXUbyBE5tqrkb5fWyVQaUtp8BefwNmr4Bs8XFmtYJNTk23yZ21NDobkq3Tmq2",
  "key31": "2S7jTFFRMtteGjBh85knSC1UnE684yxc9SJGoaiaT26sppV3E5RevuBck14hkxrHH4xv1fNpSPXqiStMnwm4NfLp",
  "key32": "2GQkGBHjGyU2qnK2jeg2BNVbtyMZ6KAPtMZkiFkqo4PFbB4ogtkBLjXZ4vyrEH9cwUNd8bgmaHikjFaSs1f1nQFg",
  "key33": "3F3ZCpdC7SoCQZMhhEWLv2CJBAThm6cwEAerzPdH9mnosAQAbpLas7oGRJquaVxAxGDQhvKRpSN89fbHA5aZUL6",
  "key34": "7b8CKK8qVJ4HsTmVN6KrhdNQbjxeJzAG7EbvNcrvRsajXTbzyUZ9H8n4hzNzhsQQ6U5wxsSK7ynSYfLRKN36bhP",
  "key35": "w1GVwyKXG2uy4o7duCN1fcMD7oSQxd9EEU4B2p8Bp8gW2en9WbKCPXWQnai2BdVaD5KPSq6xfQaz6BH67jn9vP6",
  "key36": "5L3XhXmtHs7meLWvW5SfSDmRVypLR8obGZL43kWEhRpkPi1nwc6j1E86ehqUMG7pdWJ1hQuoF8BM9Et9F3hhD423",
  "key37": "2EUthKVUn9YpGLmjh3bvgPNRhtLpgaXGCtQR5V2Y5hwYY8NrjURKoGVeq1au6WgEsgWBAh53up1FBgmiRv6Crz5W",
  "key38": "hz4rzonG3fNt5Vx2jVHLBy3eNDQxSo95huXBz7L8FcWEiaGNvXGGjekn6KweL1hVxyfunM52yQQ8MVuQFoaMzNT",
  "key39": "nUMJ3E76u667wQjCDeqrFcvMo1ocYZBjL67c78XQDU4gFiSpu6BGYQgXaecDa4nBaG2Dnh7rEQLa3WXXV2Enzze",
  "key40": "2Ak8pXC13NmKeWjRNW5usu1e22oTs9jsAgReeeEp6JST6YE2HHjpjzAEzpWTLezsMV3bptZ923qB7MMMj8qhi6co",
  "key41": "nUKheH1eE76aMQg83mRUo594UDBHZab4iwzUWcBhqoBC481m3hQYszGhapbNPiYKuEhYCsFYJQ8M4VYQXAXJ6BZ",
  "key42": "3nvwgQps8J6gpeGrFrjo57Hrt7xo5eK8jbukBJYdQA3oLPbYU4RWZf87rTzJ6pRhmSuoDEmcPbN7u1MXYSSqpg3e",
  "key43": "2aPEryYkrvmonkMzmwirpbNSj1fYX4MCxqko6eGsv4zrqzePr5TjBLcpCrgk3E6cKBhvtzn9XjyBrjQbGMZ3ocQG",
  "key44": "4NmwTZJK8PBwpvxUAz8V8DZv3pRqw9bZzRr8fLUNcH2kGqPwri9vxmkQjNvkMzi8cdD7xhqBSaACb739Q7C2HTjM",
  "key45": "5RFT1uBGxkpwCwbDa73Jm2MUN314wZiQ5RgyuQGYHCnQk2rQ1GZfwVpCTGfA8U9W7r8djrHRc4oGs8E5oq7A3q7h",
  "key46": "3V8sdXmoLy4pase9n8bbfZKARSv7mxkxrJUr3LgTRVJPmfjFQspV3hPQ3RAL7mQSBCqEwmBCyeDJu4g4YSp3ReHb",
  "key47": "2GXGnaV8vSmKugD7YN3jWYJ1X2Wp37xCCuzUhyP73MhNNC28hRh5C93NstsCTefDyKZruebaERVU5J2dYTbQBQTU",
  "key48": "4j2qPNG5ZWXkrEuvspohjJGnKoFFU635TiRuM1ngFNm4mGpUdquqLhY2KrM8buDWRTCEdT4mCHMwZd1LNaA21NhL"
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
