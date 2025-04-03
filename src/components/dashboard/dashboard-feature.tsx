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
    "2kWznSfNuz7LLuMa9uGkPyNVkJ2VZzyn5o6qKPyyMNuxps3p6Jz5JzraeiANfQZ5XveuzDK1e7xdgR21xVPvji2E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mP9mufMf1enV57CpLj1kWYETcxVx6Gb3mEes3GHWEyCxaFV1JRymHttCJnL1o7C9ymiXPuJQzGkpbfKWD2Y1bsA",
  "key1": "ubar7ig6tu23WYKvY37aSkvJP64NYDNZHsCGsEFSsYBun8SxzYzTfVVp2Z3pF7C3enkc7f8Jfg6XTweyDXX9uoy",
  "key2": "5QcWPAiycdMUsR7b9QZaYwrCaFNLyXnzJ2ZMjD5CzT7NPBLSQ4DtfTJZ9ovJkTRRi61SovJh1CmKWu9yPFhMxBS6",
  "key3": "RVXCmcjT3WVFj1Qdz5mmnGt1KtYR4WpcJqMTx8ZbUEoP9jEvr3hiivetpg8SUN6YN2WDWCCSjn5iCCkkUHT4EeS",
  "key4": "2BuHY1xBTDkC9fsBMky3RNiPbMetiBG26EYWcYhAtJwNfsukj9wZj92cmSMMFQZ11kj6zZXtDQQsVQM5uHKoXJA5",
  "key5": "2CSrP9oNvs4Kq7XF3UfXNPM5AoyUTZZMaiwFqHUnbtm8AViZRRMJiCk2VAi3X4BbfgaaQ5sFsMQRrueh9D8YEM21",
  "key6": "288YjQLEMQAmRC5FcpDfJpCuGCFoufG4jXtUTDVUaivEaStjhRhoNe3Bpdmdr4R8NX7gYAAJUpJk8zaYwMjsKgct",
  "key7": "61MDTMwy97VR1XYBp7abnBKc1esisRnwMhrTYGizmY7nQPm2F181YxnMHiUvgTrwWrcoErimzF8aCSwNWJ6SHmcm",
  "key8": "5k4wmfAsVbymPcmtpsU73sS62xdkZaKcjzsP5ubuxMY2RwYwnX969Tpi3owL1MdkUHcueS36R6DsnbrT1bVcijsp",
  "key9": "yk5q71r6BtWiiR4AbWdQ9fqdm2nfcfDeruBWyjLKwvxQpUaAPufFZDsS8rW9ZyghEkdSmQMBUhxqLCGb1Nx4w46",
  "key10": "boFkbqm87JNGmRFqpHQSBTqQvGwntRKMRdq4ntqyzp4u3yF3MCEFK5dfPKpBc8Pe1XZSiNb4Qtog1RUBbmRpUF4",
  "key11": "2ESaH6qKsU4fjPwGjnemDcjT3qWZSKMpYG6vAr68nNf7CP7wW2u9tahSX1gMGfv58Fxf49QFvx2q16RViz3N77jc",
  "key12": "nieUZJuPSmwgovNM1RnQ7sU3nP9fJrVq9wWTS8m8z9xUi5PVN8NQPVBXXu7fnmttgc8ubty36y1TSbJPNgtuWNs",
  "key13": "aHTkh8p7BieVtnMoELwMYCDJZEm1E4WpA6PUY7SLw3vJoFqEnJ69Xd9m6dWRQwxmL9LRxbEqAz3ougSpZS5FmpF",
  "key14": "5YYYaQdxHzuoDLrXsUhGQkAfxFxqbpqF77FSSJRKRkHAdM8YrYCEAspeLreUTgaa47KhpLkw5cyY6sTdnh4n2q4G",
  "key15": "26UxEmU2bKoJgPtSKLq62k5ZAxqVUjHEDfqZ1Moehe2C8roxEYRCF96w4i9a8ZtJRdLQz2rCPGsHTk5HsY2jvYUg",
  "key16": "3x2DNAR8cmV6b72NQ2nbVvd3pXAaRv3TawNvSLqnUfTKPjfXuYWqkZnsMqeahVUq8xDHuQU3ri85brUnMikYRsw4",
  "key17": "5kLSKDfKgRacitTYBmFF1fyLpjNoebxojD61EgGrKENTNx71KqvFB7fsoAhaHXKxca6ZyhKK3ytHPw4cWv2gBHXX",
  "key18": "62KmCQhwWhVYyzny8kRLtrkJ4ZheGwX4Gxpsgbxm2TPX79pmc176PL7RS9VKdYV8icV2ZM94fAeXxLtq2jBrSauL",
  "key19": "5z9bXnBNKZQtr594omFbWW3rdHLZwyDgGrA7jFprbmBE3a3kkKDgYiQfk6y62KWkpL4YCsMg8oprobBLFLbUPuuq",
  "key20": "5MG343LLAnhf7HofbnNMya41FAyYkEepQDiap7Wc1eaBaxyWr7vFupx9g6JMxM4XFY38wCAsLpUGjgLrm34agWUg",
  "key21": "4FnS1Pcc9AHioGmJPU2woY1euxn8purc1t6LT9pP3EsUNAhVok5zriUznz2rQGuBnx9ECHLaoxPY5TAuy9CaEPCV",
  "key22": "QhemaD7kZ1tBBzpkWZtv255mmxLeWGgkMYBxHjaXUU7aC9yvGFyF8oVdMh39CoZUmeCk8LFwhAkeTqF5wmARsXb",
  "key23": "4Tx7n7gHwjQAszfUyuwjz4bey37CTsXtnPqS7iZh16qsoD2VKMiD7Z53XiKh8BHCNNGbDs25XCrQguT1jCNLYwnj",
  "key24": "4u3svUC1Z21w4G4AyJmRt5brdpVQAMW3pJN4DJpr6hsujCvrH8wnKZYkEJRbHyAHNy6DtNtfjBVsNtZoqqm4yY6i",
  "key25": "5gPtZyzAjSBgThLUUGR8uGzA9vuuQQrXmDcDu2UpHoE9rGbLTtiNu5A79Em8mhQiTYYYghh47UvMJcdW2764hhFk",
  "key26": "qqNQzrZVYqp945Ygzxdaf25VtP1xhhBFe8trxLsy19ZspBMQzVG6MtVd6dyQfYoUbLDfbR5FMF432fZpmCHPFyR",
  "key27": "2ihMNEqJtWymVMQhr4g38TXBwDNXU3BMg5sAfKpkpFbx77QZ3R1vcsU7qKvBMTKMeqNdchaZGX2HKLCJawdsJYrM",
  "key28": "4qDFmttFdifd6qSzN4zNwL3XjnAgxEshqQ263PG7jdAJbBPRE1ivTZ2mCiYre6G6SjEtiKq7KsFEGh5rZ3NsEMB6",
  "key29": "5NNv3jR6FZsJXADqowwF21tNorpkLELjD3bUMLejQwWynL6CARkMg7qh1c57SxMPgzrmbuZ6BJhEDnLhVBoTkBJq",
  "key30": "5vfHdKkSDvuCUQqvwqJjpRQDZ1NUCSPXRVQEfGeVWLs7gbzD5HgWnVviNCBgpE1FEHo3PT2GeWDAMk4Pm22Hum85",
  "key31": "PmfvNhZ9jxGLEohXRBzkWUpxxv3CHNPgvUPx7edN6dPqxxay6uc9MrNYauymCp87tTcX7t9iViaaXJq9AFgtsEr",
  "key32": "4TMg3XY3ETGCdhotapZrJpR4whZwsni6SBrpzU9P89nAx35CfHMJ4VHCDWCVPbEFMngjBXjWs6hBWxnbUuKPp6Pc",
  "key33": "3iicxnCQ2gZMECYgruEyPqqhbqV22TD71YbiiARphcRNPdUJQYTJ3YH9SgFHKDheG8nowV76fcXcRw5UxgjDTMhM"
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
