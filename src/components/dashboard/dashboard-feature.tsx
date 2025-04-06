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
    "5Hsiqk7rJNmiEnAfoyJGCHXXXmqCZipKdS9cZSG1bzt1hhg8jEZge3GrFAXs48Vc2FeNdcXgSHfqVnPRudEAd3U9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kbQCT6T4XSaoYXfG63CaCXzwyS7p29r3c59UrDCMrGYgSYDkmi14JQUHaMSdbGKpiNJojk21smJLWuTt5NaU9eL",
  "key1": "4zkWkN9Vo8pjzYJxnMZ6nfxQvZZEY1JbBckA3z2QSfBFkpxmNzMdvJ6tRDaM6HWLgpSPvYgXtqhkXenJPmEoE2hW",
  "key2": "3gfd4DiTyagqBocgM8cfvo6MkBLrgSnVzXi9iuLf7kPwBtDJLLbeWGYuBh1TMEnGGRdbSpKPRzo5pTWWfRo4woeE",
  "key3": "4bHYBrowYfmbG6mqE85xo24UC3FQP7RtizJ6TeSwSteF2jDkUsjZeUR3KcsBYaipixAuyApQkSezegMX2dzQQDDT",
  "key4": "5TZHv6QEz274Vk1LXTVrA4NM4YFG6xcYeZkFaxvU7ShoBaRa8VMWWgsKnqp7Cf1WncwcBoZzEPPUpnNJ9xKqdt73",
  "key5": "63vHZZngX1RugdRzP3HxAYD2pHPJo9tqUbaMdYT3Twza4FWxP2mxP5Du6yvovbGWBZLRBCcaVhymuh2dQCqZgabT",
  "key6": "4szgzpJECR5YdVXc8EKC1zsoNRbyfPZRtbasBFTeZEEonVQfEN2WfCtETVzknGPrXdsPSzHmCGn7on8xfVErRveT",
  "key7": "J98dGYYESNo589YctcuDs39G47mq5VBg75CFTBTSS1XAMuKMUu57YS6Kes2PbbZ2qBP2sBVxC53hamx1i8MqXSq",
  "key8": "vZuknNA1wTPK5PcYVxQYPEbXA4Lne1ayn9t8FhH19pNZYxjasNE2PrLPJDfyWn245mEB3kkGThMcvjwQbDiKEkU",
  "key9": "3Mtb2BH5iN6V8pYPcsVn2wDP9rivgt4Cxk3owA6oTL14KtPzHJKhB1Xs8GViALffCLUkeMGcnoM5diVv9B9b3i2G",
  "key10": "271KeBK8rwRA7zS3GQAvwnf3So5C6h68UBvAsvqKbJ9EJ9HYpMFV4Urvk8M16di49AMKapyCFVEaweLNWpxYr71f",
  "key11": "y5ocVDwaBr6uRQndqxTxzKbAP3YeNjg7qLm7gkKEriKStMzje5ign7XLEJZj2MEH4Ba3ZR7Dcz4fkKRKzZSbJS8",
  "key12": "4oAx5f1LGELQkKQrs2EEWPySd6H2rS2tSToqNHBhz153RrCZZmQ3EiJgBJQsL6ghsyJX1v8WaHSQvfwvPKXgTv6",
  "key13": "9aGFZBqCNAXB4upvAazrBJMaKNvwSHLkajbdDjVHwdBFGrvjJbo1BEmFagsRwq7KZYYZtPKAmGoth3MCiEyh2KM",
  "key14": "37ErrcJATU2tkfHoouDvKeeLYTyr84JQG3ZCtT2Sm6nE9TTBbUgWz82mg1Rw1hYabd3nqnwShcDxZaHVqQjRHAKa",
  "key15": "D2tb9M2V8zcifwkuvE882Wz6UHjyjRhkt99miZo8qn5vewV42W8cc6d3keQp3KwU4H1NiUGUMAcjCpB9dKHBSae",
  "key16": "5CeU4b7v2SquafsSp5ScQMz5HoHt8ct7ZdYftpcbk5VSUnneAxYPtbPVk2g5LkMhUP4fvve4smPgUo2eBop87Zqy",
  "key17": "5s1uFhyTLx68F53NVsbib2xNcLYgSkKY3dKKG6s2ES5tUovjQEJWUz2AKwZnRakPVSmacZagyQ7xFnLxnnutQKxA",
  "key18": "1EJVtv6YzXW5drRq9QZBp44bvYd89oAfsepp7E94Bp3hyj2SizkYwGg67Q3vsNFsi5kbVf161mreuGb119Ah3p8",
  "key19": "5ArvpfAGeNZu8GHuwAAMn3JQLYvCTEvd3Fc9S7DZTU9H1qwz7dp52oiFSz2RRwvNvGF1s7EUKbLENzki4zuy4fSf",
  "key20": "3fyVa5C91eVgFxRnyRS3LBbeY4igGUEEkqXiju3bx5x9KhXhw5XPb4phNqKRLiXg6JBjmg34qRF7vJWu6ocU2yp2",
  "key21": "gFGuh4o5HazAweG8WJJh6pBBt6EJsGpsX55JCQFSLFVsV4ULC7YmukE57TRMpx7DQbz4cXvoUUmZCESj5U8FQDB",
  "key22": "53o7q9UMy2YFtiWuq9ZauERt1qLeFDCgYqPnxeMPrM7snVFoVYRFz3GqcPHqaqbUsgiQYdiWDuHYaxUR5k5GWSKJ",
  "key23": "5i2ZNCNNSocbtqHxRdmiPuhxrr4cWm4Y6bhVvNWCmX1rePVhQ1PLALhpxcGBL6kKUnNLaRNpQ4rYGPykvvqr4bVv",
  "key24": "5nZm2WVXgDKsTSpqE3R6dAkwLZDkCWbCkzucxgZQmP6cbry1X8PjQAW4WrCkNhDo77fkJUhoEpk1gVELhvEU4iB2",
  "key25": "5tj56RYAELTHFjc99FMjqqHzWK6vCT9zfDZ5hkQ9PDNfg4BeuzVbXa1LrBhjtqGQxq1iw6KFpFCXM8ScC9teT8U1",
  "key26": "66TbcFYbBCTMkErHM9uErvDmCDtmyKwyuZXkATjBmCVDzBFJC9ayJCfQz7anFS1Zua135yWTGs2ofbYGzpFyo9Bb",
  "key27": "3zfqYPucmwSENXXHv5E8LM7W4wrZDSw6WbysNwY6GXA3Vak5aPPH5JTX23NUbLQDHbeS2JejQB4dJYpSUGtYaE2x",
  "key28": "2nh7Wxx9HmviBNfzzdmhnjR5iEPeouJbazUtERo2Ujryzmn7YR5JQZitjoRz2497cfv5E5LvVVc2vvZBbrxiLiGE",
  "key29": "onV4DFzu49XUrc9qzwvmiZjZKRwmCPKkrNKZ1s79knEp2u62ChtUuHknaAkaM74si5zBc478QeBtBpDS2hdvreP",
  "key30": "2y83PLifSDMiPmcrnXFApvqeSPSYBQKpQbtySMoi7Zv9CryPYvB26vuUe2gb9ypnDwaeJ2tQcFfVtwpTwxh5TsGK",
  "key31": "5WqoJQtDwr6WFA37M2sADCDQ6g7wanyMzZ6GiJt2gNF7PWkh35e4GuCeyawutHNjnyUZQh97ahJ23GKcEWA7rEKK",
  "key32": "2zGZASWeHqBDrf9rwsLJ9ZBjErAMXnm1XRFSH8hqMYQcR4FYqAv1qDHxgCJwRcNbmm7gm5zXN1KRCTbyhhttppT6",
  "key33": "3tn5TV88m2VTwcsiDdjAb9nRe7XAX2GoubntwDwGX943cbvGzPy2XRVP6PbCykbvEp9nPu2Jod2hFBkeBqbiWhrP",
  "key34": "2suZnZ9SrJEaFhFuMXHARBTCjAJaQMCDdCzCeAqSGB6FNthVbUnE8fuqNHSG5bYaQrR18vqJYrgdooN7WVpq7oK2",
  "key35": "4A7jmdya4sE1tfgVFR8SEzJwpKeeGJ7Tpo4WnQqK5JxaicSpxj7jLYJvdQekd6e4TZcCxRtwbYa6hqg3apaRWXMo",
  "key36": "2f4HFgYNnwo2Y5hLRQqMSu8budf5Dd2oq1WmVGpwaMiJ8476AdCz6xPM5AvjCqSeCAs51thpkte536USruxQefCa",
  "key37": "2d8EF8CCPfMvNn6pQwCpTv6ncqr2HiwHjQr67FLTapegMcLi7T4FdnLsciNH8pidNBSRb2N2Yft3AxC63k9oavnR",
  "key38": "4KSp4vWSFn1fRdjsZ36ufUx889M1ApGxUzV9Q3u2Mf6PKTcf9E17fVskzAdEH9zGPfiTwyDUdAxed37MmSJix52Y",
  "key39": "4sfZS8HC3EfhekhFp9uLfNXEjXCU6U1RDzerEHd23FrFBTxW4aEsGaYD2fAzBcUVPBoA46xcSfsUC3G1d3BmwDWH",
  "key40": "46tvttLGYc48Uw1BKe21SW1SC2vBj64NrH1i1Eiocxg7XK3aZSLTh7iyJeaicdwmYjfpZ4SuGiSVyqBi9Kx22K3",
  "key41": "5Y5pTjSUNuPcoopMQTkxpCqeqNxAUrRD1zB4DUfHq16ojzeufzHACi3AXdYxxrgbEsKbjcMQuvFQ4FBCsTngBbJ3",
  "key42": "23wKCXyTaWHiupT7S3UvG4hdph8fAzNbkwuPWvL4C2X9DBZiJQuWS9uKNTtBQM28UyWXbs1WH6gpiotLrkVLfdLn",
  "key43": "4PQe943KW3UV8YuFbXjn3DDFDcdy8qKW8QMpbVW1mbYacmfeUoHmn1bTeGAPVrYosSzzfESx2Pu8ttHZmCgjkjex",
  "key44": "5776RKeDni7nQ3W2vCoR6fxXVnkYdAxCdi58eJ68pUwPSU72RNBD7LxhdwLQquEzVvwhC3DK7q676tHH5C7mBe5e",
  "key45": "WzmiZYJKjAGBnLto2ymmmmWEj33983QuTucA1h4VXxk7PvpUeUZPXN52mtyZZyxeZzVmoCS1tdcibzZi3tdZGXw",
  "key46": "rERjeGXJuYHU1mAsXsvbaxfbpEaeNDzxNWR7nP8ucYnuxBroyUxKkykD3K5ncGGmiD1yjn6ZGRoVDdxCeGLt3dm",
  "key47": "5XbD7Qw4zUTPofrDYm9VfABZ5SV7QfgZbWJcEWJhPJyGcABS9UXZ8n1691JosbXc7MwYG9ozZZbpMkYyn9KWwvZU"
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
