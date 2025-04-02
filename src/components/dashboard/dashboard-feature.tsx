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
    "2wjp3Qu29wMLmheXKBEqRGnX2Pxq3SHx4zd7DU5XHuEd19bUYnwfim5oJK6KfqPjofGiXwvnJZ1FTFamDfFDBEDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DV2JT54EY67puR1t7ULxYWiMNQSDg83wsAS5JnBTBrPj8VjbdeiRNQeYCzmr8svLcjB2jQ9FVmZGP8n5GKjpjns",
  "key1": "62r5gsuxdHLuGbJHpeWgemgb6BonDbMxXkGe11kW98aJTqUvXUWW3iQv7QuQihDNnta4XENpeu96GM37K2wiqDCA",
  "key2": "528sVkUnCeh9QsjSsrxpSwtUktjvEEFyayRQ1DdXJRnP8ZyKHUqiXZfLVk2MtUCLFSkGVTWdUwhayej7iwtQfWYg",
  "key3": "38n4Zx7ezSkMrtinBaaP67gnTLPByh5nXYamL9BHdUyNyipTUjJufybzNGz3CSKvsKkwTw9uzZpAX8AarRbBeRjb",
  "key4": "2FPHG1kWsjpHcESGi5cijbC7dDycKtYbpSfsDN337qi7bum6U2pHcd1Kf9ebQSKrVJWq6Kn6DDWtLq3ydsv5NN51",
  "key5": "2rTSCYTvbBqDvejFZ6WWufdwCX9FamDRAQYJDkcFAQHoiLQcDhJnynXpCAEbmu1iQ1c7ausTZ2Ho7DwQW39Eu1Eo",
  "key6": "3QKaRp1QSwMNxnQYsVWGvFSwR3ZaPJCPpSorGHAQLB7EeryvomGNa8Nc98RJD9xb5uPQd17HJjyNX1PVUiHLDMQi",
  "key7": "5U4RDaZsJBwqDypazhb5HNcVkaaBDbChTtCLk9jJPzW1jSrioBFM2Vcrhj9yXxA2bw1dwcsK5WNKQGkzQL5E29dP",
  "key8": "2VN6QEJd5Gi4L8MbYF3bfUjq9Nvxoru41RaZNHtkc47YRuYYw5YeVcDYdopLtHP6SG8Uwr461Xq7GhNeQx1vjP79",
  "key9": "4froFqN5JzPtiqkrLUXhPTWc3AHfwzv6M4sHFRzuF6t8ff2pidLQd5HL7rsSQi6zQj7ZUZNmockQQiPuUpYuhwyb",
  "key10": "61EfUNWqkYn1gFB9hxaDF2fuD8vmAAJNxeCc3iwd9xCg5xV35h6bSukAiLmxhzMh8yutNya2zxzxgaHG8NMMCVeM",
  "key11": "5PKBa3MSbcWBvTmKFDz7mMKTDFqRw6S1hVe3XrYN2H8RDLqAz2bFBYpogV9QcCVkdBHyArXFy2bCf5ybs5NXsmFk",
  "key12": "5cuRdKCp9fADyPmT25cZnGj3EtvvjLKW2zaSYEfjZEXQYVnMHdvwqcHnpA6i89pXKJk3bt6foZJsBksi2MTuifSj",
  "key13": "3wAvPkzUHuEU9gUtG9oFmpHLTLnx9UNPXrz8BGrc2bmi4M4G8QQFCb7XNt3XL7fzWmgfZPy9gNb9n8Kh3zJi5J2G",
  "key14": "Hhwut9fdiVkxNGENg4F8fg1WhBNbVAKe4g7KfNouNNftE5y6nisBJBLeNprjQEVAx1XkVvPyhZxNWk6FVAuu6u9",
  "key15": "26jSxrd6RNfF2r97ZbUmf52qV4bGy2eemAx6QcvZDheHYWMuT736mer6asTH4CkwyRpMiXsDuLp3fYJC4XSNLufr",
  "key16": "EXd4ETGrCyfwCwt2g7pqoRFTiYBoPsEmvZrZTsDirfmRD3GmVmLgQ98568MhZYgJQozX9jNDkhKUxHRvE5KueG8",
  "key17": "4JbUeNTaXisHh7jXRdKvUxj86swUpAjmR2vNT8dMeo3gq42NFX6g6dn79f3JVG6i1eTEiNhMKiEkjX5G9uQYTo6j",
  "key18": "5AfMapBpd35sRYyzpdt2fmHFuExMsab2mNMFvLqV7AX8vBWSiavuWSXMHEJKvqzkZ4DB4LubZJr6FZSgGcwt6LDw",
  "key19": "DxCVGc7w8q8qQmfYNsei2dNWmVXqmNhru8WkMc7MYQ2DxXWe4rQveiWBLnU5Vs71ERW6dc8R7A626Qf98jzbnHc",
  "key20": "4RV6DCQ7aaGoaMvnF4WHgBeuEYxzNwtbToTYvDYmDwZBpUiRzPuwrtWcUsfK41RESLDgW8MVeH295mvrsgfYkpCA",
  "key21": "5VRF7k5cqgDnURGkV28LEf4a8PDJvYvXWiFobe9SPX5D7KqHd1gWNbJfuLtx7dN17NaGUiG9du49adNXWCL9NBuP",
  "key22": "5z3RCzt1eLSyHpNzJPyDX9s6q2gdSoWtPKGVqLGSDuoVXELU8eWQcZbunNxrGQNPWFn9jNseDARE2JTBuiEYSZKN",
  "key23": "2pxek2WCgUHfHykPZrp54m67QceMP5TPgB7qXyAMyugL8KwaedzM4koK2D8ugPJVmkt9pMSMVChhGksq2Np3Rs3A",
  "key24": "4f3Q8WLsZDhqQgoRzmNtPy6NDyQQQTKDLsgkyYZ8uJzQPFHPj59sx3sdMquMS4uDbaxigSRaTTJoFuxyHPX5bqUn",
  "key25": "5fwMDgkysPXa5aFytD2bPowBxcpKpbxWg6jpHGC6emY6NX2gDtggFpcAUWmq48hCw69wTS3ndC4E8nAPmGmEtwoH",
  "key26": "3p6PSy8Zt85uM6Ask7V5QvdairAQQm2ygV6BVdW9TX34W2kTF2aEWDy77bc1H8yqSfYJb3ZZw7AmHkTHkTrfpcFH",
  "key27": "2uboWL7ttbbgaqZTByWwhGfqqHw9eAxZ15GeSkf2seEqYB4yjyP8izgnyUC3xqfbtr2dquCdhZvUVz4YMaHghHQv",
  "key28": "BGocxFEjJEHUdJwQQ9xnZnTW3i4XCcM4Dk51AX3CJTu4iimcqbq95aRWu1pVC5aC8vuFMVUh1LNfD5oNopu8dGC",
  "key29": "z8rFwodnDZVtPMxsAGJ7F1N4ti86Zkr5FmXa6Lm5vd94XEz9na8dYxjnpjrUvBsxfpZjK2MfXsktcWVP87xVVXp",
  "key30": "2X4sZutpnWdW9Fx51HFBR7cHjQMAQbYt4TUyxE16Pxuu6DvwiNUNBf5t1hpNhJjrTrHR5jUcEzoUwLeS9ybkFX9S",
  "key31": "3UoB1KtiEGdW5jp49fdmmaLSQsiq72no9SHcUAVYTCrDNkKV9twiaME9RgzyM8Le4swJNEUS5av4nFCA15Bdy8uW",
  "key32": "56CinyYqK6ZBkFdLdtRG7Mt9eoeujPrSm8rGRkm7EvWj9X5ZH42hKZXWW49AyV96RZvbpBkaWMZpiQAhyKGsaJNP",
  "key33": "5Pr6JFbUD8C7c2xpxMuttcddJYB9BJs9NG1pDgaV2VtgWDGxNFe39GiVwrEEUWiwGboRj6cTyy8PSYhx2NodYyg3",
  "key34": "5CVj2FPfreKbuoayNULi4tXvi7q4xJL2MUH3yVwNjJNvwf8qzrNot9DMTACsBf7CvdAKj33KQj6oiqaBuqqiCGyX",
  "key35": "xmwwq7xXN6d9Q394GvUsExZmVzCtyAi3vALV6YE6f5ENMVHZCBbQhPy5jTT7QYVoHjsZ3NMkaww1jbLdBqM448F",
  "key36": "qgvfiS2GLozuqrPK3XFnBkNyj6R4mNpuSiQHeQpPc8MKhLk7Me5FwJEwQ9zhLoUAtzbgWUQWsocGxJ576zwyqpb",
  "key37": "5zZhVD1E1nv9T7hgnxAjxFXxV3rCHDe6zjCF5fUQErF69qvcBpnH2JXkyBq4mgMyB8UeL5eJyMrHUoFypLVf42BT",
  "key38": "34dFXwn1FnuHdrnFtaVgKDJZ5dfkcziJ7tv74x82R7osBtDhELF6JfuZYqYrSugtug5xWkQvAWBTMDTWjCMJihj1",
  "key39": "3ifCRrwvtUQJecDE6Xg78wHFd59LBGTfAQeUHGJwsNujFGkCR7SpvZ5ErYsEWMJ9gPSppvtHMtUbis3hnY89xwNX",
  "key40": "4DnNDZbLfkuXsKfh7pjEhzoAynJHtFWzGf5Br1Zke6r6UEVjLuesdG3grCc4fLeGxbucYFSgPUzg72CuSZAFo9H6",
  "key41": "4BYM1h2atf3tQ2qZY8ko2uHdmgxwWv6sQioFLJabCiAai2VjiMwaaiPH3ctALZ62risDqA5HJZYmy7ihE1msycET",
  "key42": "SMmEhVpZxfXGGJiji2kyQ4WhcLpVAZLqtzYyXgb7HgnDExHbxtKi3chaouLBa4nGBGCXtCDyDEPBGZqJPPpbdEU",
  "key43": "55Y2ev8Bbvm5FFRbhFFKMnpYAP354e3TZwHp96sWNW9Vj7BWiv2qw7tpTPLTr5sYMEap9TnTWHBcEnuhCXf176Ef",
  "key44": "4QjggQ9nD81ypwhQUZSPvFpwwNbuobg1tWbiRRpPo2aQ4Tej3woEigXyXxg8ouna1Aq4Ea86J53oVQBQxq4AjBSN",
  "key45": "5DuCdYDT4u4H5w481TMqwUw4xRs5V5urXnDf5aaKkDBypSn1cDbd8TVYJAsv1UhyoTdk85eiyM7QvJJyREZgAYXY"
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
