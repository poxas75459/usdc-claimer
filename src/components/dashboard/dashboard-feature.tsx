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
    "runDpRYtuZFerGkunsNay7wGPU47SMMD8m7ARostxt36So7X8mhuaWSDgxsQscdymnw8X54BLyfnzdxoCpKAWEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gQCybsRWmFPn7HX2Qo4A5tko4E4fQe9ZvnuNj1QyptwBnoy9DPAmkZyJWzJutaaNMdNqRnP5DExFaXZifKKJawS",
  "key1": "2NEsN5dHLsvePZBBNLjS31veNWtBkem6igkzRvqyBMq6eVCAxwE51bBSz6LZMJ1vjpp1crdSuLcKSsx8oimciATe",
  "key2": "5w96UG1qQjdWeESNx6Fx42j1TpM5cK6X9TTMgApN9Qtyon3D4mCzTfnJibXivYVkQbcJHZbSP1GHhwqPgWDnKpP7",
  "key3": "3UxDCNVqHX52gAfCRutbNND7ESNi72yyy8aNi2LPL64pAewKMJj57fHVD4z4mZvgynoFFvCCkyeBmCnaTRYfWAae",
  "key4": "3H6Wgh47ktLAgBnUsTQfWGZBwQvWf2x5LT8LSpxZpYTnxYRpC3ogwPKG2iGBw1VERJdbKf2KpBPaT2zA7a75Uon",
  "key5": "8fZBfceMmenh1nwZBhPKkPAzpPioWgVxBdhsz6r8ekPiSSceLmaow71WJUTDdAFe9mq3PjhpqBv2kCYucVr8AF2",
  "key6": "127kQPJ58oq7hWxVZGpE9WMGNQHu1CkaHXPRTMm68hvWumxPJ9TwEMcd1doXbNxdo5sgsTrsxP9Tr7QPx2MUz769",
  "key7": "jT1uEPZ9oWpH27LoaZU4GXXGNrULjiw61gvYV7aydfq5DoEByuDVBSpP133Si7xKWLBeWaY9BntvuPQoNF2PP1p",
  "key8": "W3jZrxapMQ3KmxAAFZHtnX1Ev2savDGqx75fwtn7tz6Dq3vUidUL1HqzSAh51xf4uUcpmo2Xcd1GQvjnBDZ3bUo",
  "key9": "4ohddtcF3iDUYpnYSzLjdx21ai7wr21ER8YeVTDRkBJX9KFxJYeuvv5ThT1qJhdvPdpkjcKZWLSuZWm9HXz7jEqk",
  "key10": "54WmvJimD4hGgxW6do3AFHcP28Ux57xAmJQewpdfp3VKyZ8FsYUGD55g8EmsC7EFJ4CFRvLqtJVcA5skNGpN2iNd",
  "key11": "53gXuYCMUCKwGccdQEz3nx9Vmw2z3b57uBfLU6gDRD6WzFLz6H7o9vEzUx9L2LdENsFkhF4QtLFjAR3qBbkJUBfB",
  "key12": "AtrSWRGB4xRbLz1A4Hv2x7uaL8ihoUSCfBdkXRXEyi9yLyk8Em3NHKQ9uyBujysf2HC3QfdygbMviY6Wq8mJWdU",
  "key13": "4L4JMGhExtB6jrpcpc64VK3f7sT5woymDRg6rizXZukCjKJi2S73GsCYKvnmEcuHRkUQxnrvkVv6Ufjw9VRJg69w",
  "key14": "4uxRNPvEhYQwQuf7DFBxjvLHScVFyAkHYVSqYujkjTAwoQL5hDEt1PK15W8SCj7iXTZdY6FR3tSPfiumrG49eKEy",
  "key15": "6o9YvSxYvxwJUA1UTQMVZ3AVxTLFi4XTvU8s5ywysfwAN1VA2AQPos3Vd1JSbpPgEjZPqmgfHN67q8PwLVhPFzR",
  "key16": "5LzbuCgf7yMzyYGd2FJQz16QPQ1MpeYdBdFn4F1YgcgVx3c16nYju39uM1UuEFyuHReGyvTxsZmwucXe6yuzakTP",
  "key17": "3gspW9YkF8j5FrjGX2w4J2UbC5kz9XAeTgxwoWXDymsnLCTNKTibCrbzV98MkhP2hK6zHfyUXZ4LJiwsBGN7B2sn",
  "key18": "62trLqijBaatJCphdXuBAK5NGPm6oxjjYSqQDbkDyjk7PeNKsbhUnnhA332mqqrfnJPvnyBzVTbJhsaUXr8jVnuE",
  "key19": "5rhJdAenaKd2tbUq1kA4bHSnN6s74hJQ51h9Vu3BzKGv3JvgzpwYAjaFTbgcRaHEfDkmX7HoWuz5FBbhPfUP4VnN",
  "key20": "57Hcc4RRWyWH5xfo167tDw2uzq5JFhfNjY48ZhnekVuoSEPrje5xcMcbywhmZs7Vih2vAfEV2XBaw7YsTuAJLYDY",
  "key21": "vNJSJ85ATVFSFD7XruvNiGz6iJ9o1qjJfCsprNTEujqPPHLuVyvVAvR8gF8sqcaShFThGhTe2FVbH3CWBLRs9P6",
  "key22": "5nqfs5oqRhmKtMn1YH1YvPw9LxsacoRVu74u3r2q2Bb5j46iVpxr4weEiVnhm1XGNbwjCuTP8P3ui8vVYJ42tjK2",
  "key23": "5YXuhwScmb6tLxqUnbG2DYXr8mb4uRYMRoGm3GgM2uJF8Az1YZ27TwV2DTDoHvdTbSjXsNkJX2md3QKSPSWuJXYh",
  "key24": "32iowYKCVwoZFjDeLLj7bfGGZ4k98wJnYXMWQbhZyEWDwaLpmx9X8kPRxaPhBZN98Viuf7YKE8G19gUeSQgAF34w",
  "key25": "2x8MjBN7VLrB1YJXGydyvjZimh1tQSovpqePgLDg4GypH38tQ6bwkCNhVVFs7FkMuLfnVigtLP2Su4xQD6WKEtj2",
  "key26": "3JBGiWS4hCrr1ZNA2WP2mkavFqsWJeNBgvvQGgTew1VXUvxkpJiYdTyae7tssncSarG1X3tMww3V8m8B2fYgS6qd",
  "key27": "tEDwKzNFxZLPu2ueLCStiFixJH7cHg8atZKisNS1wphvu3tLT2hMZS7MRSwQm8CzLRgBoVu6cJ3Zu4cjwGD1MGv",
  "key28": "2qkYUkCP3S7hYZrdQAdRQAYUUqCedSSCupvwPrxSDCGR6qEx3AeE3axnG76ZxuFrMkDyHZsd3kQfnK53rVWKLjaJ",
  "key29": "3rdMGxgSWFbmY8i4UQjnsacCQR5SNjmdsZtqmoEruGTQCQ2MtaRKdAj1EUo8aFzT51esxm73vr9Fzzc5DTo3myNf",
  "key30": "4oGyUSoaeYQmEX9wixCrgYUiknF1qUAWZaHhXBQnSNUKL6STXdpgo9jMXFKJzfY7L25RmMf5KwEzYHJTKvKef8S",
  "key31": "2VYd929BcrMQMihyQkfCeYBeiKFKk3SY5U8EqgPMrgyJjXevJC3WLHc9VSU5NsA3JquELPwtW5m2jqiNgt8tWT5s",
  "key32": "pXzJbTCj1dPnzauF3jRwW2bY5qzjW77D6SmpQMxKFVyoPv6TsQXYvNzGTkkhshXJuNTSpUjNoFwfdWs4KJRa8Wp",
  "key33": "4ngP4VQJGb6jwoGa6vEj3SDQ9XF2v4Bmyy9GbNjveTdA1U2U184wNJCixVFZhf3pZ6iQ2iGKGMdgpEThtaZfWj7i",
  "key34": "5pUgxbVXQUQarHu2nDohv7pA2sCoqpBbCX3DweUeoasprumdT7m73xd32pxWGF1Ye23GsoZxMkA6oCyRTHAh1KBw",
  "key35": "38fT5Zgxz4G9K3Pu74YMwp2TbYkQNZyrRsS2pzr1STXp2PrZcgVq3YKTjhM8YyJQ7XUva3i4ngPNARjUdBwZkw4R",
  "key36": "5FYezBiud1HaxLENo5ruxBv1aLAMhbJmtXgaF3WuEJ7iaihybiEWduQxUmf6gzkmFdfndiQwFtbjxVJNzUqcSDd5",
  "key37": "5zBmEJWXDxA2jHanTcxW92GP4GKVWZzzt6ggse4EdhGtEbJC2gdvQw6pQ5gRuLhdMc7oeCXEJ7QJYLKZrY2dDcRR",
  "key38": "5R5TQryDozvY9JTCtZUYqNw1MbpPMeBEfC8ac6j6tPWS6HCrERRxjzqRkujBHXoHqF8pAMCxfPDCSu5FpnWABFRK",
  "key39": "5Ber6wF9awo3GonghJY9WG2qP7Ni9JKFxiqfHap7o1r9dQnHa8LMTHbcffccVpAeiwtQYyWWvYgzcmHukBZKtN6v",
  "key40": "4dV96q19qkgABRZofg5W51wzCw34wfkw8bNBwMVZViJ7qW9ueHtkaim2KPLKTeMHdTZC3wZhFMNCNZ49iceDNEVd",
  "key41": "5b3kEMURygMhe1o7yyJhUzbVMdKifdbLJuLghFr2fxxVYtQvWwUpgwcirdc5Gc5JAuEZRRMjtc1PbNfTyvZV1ebF",
  "key42": "5W9RVHJVPVFL5s3CQzyztDytd5zoaE6zeQdAKvsGJ757CrgbLfjhrmY8rqjHe9g9URzdUx98aFtQDt5UVyj3N7Fk"
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
