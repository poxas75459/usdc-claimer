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
    "294iSGn39EJB9cT4QbFkmR7SoFpqrhr7HAXZLouajdMem6b3epwMZyN13eZxabZQdeFFoMu7Let5zmUfYam5uHhB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YMioUgCCkRZnPKcxnQHUMMkamA3qsBosoayd9cU7UT1v5U1KXZdqFRUouQThkkxBx2fGZ1LFMkibkqiLmthcwN",
  "key1": "5QBaFExJtF3sURsYFk2WyeUpvSGiDbMQvfdNArbzooSvWSyDvL5hAegWu8RxWLFsgftagsvi8QHpRdULojMS9jSR",
  "key2": "5UvJeDyfuLUcWVGP9JysS1CTFxH1ubJ5aMpBxrFV7EXwnD1Vk97ipsmGvYEUrQo3khDu8Xh72y9ksd9zLMKtzP8X",
  "key3": "3kwor13u9ZefPD7LZkUUrgF9bMott19c41rjnwcJothxTnEmg4KKTWgmxED6nctNHiAwEadp3X5Vmm7M6oywXS84",
  "key4": "4fi54vg56eqsPxXQE4KLK1rQKLpSV6RMFWH4jXW1dUVP2uZfhNbmnfyZkmic5KRJ6BDgNj9BNpm82R8KHJWWkbdm",
  "key5": "56scJqBQ735N9N8ip9t6fL6BSQ99WKqx6uzcC6MBYjLhehHvsp5vNq2TfybRqjp87aPZLsDER2hEMY7d7UfeX2fX",
  "key6": "4y1j7KKCTVQyhXfJqCbWRKJPiRQxUJeyQmqAifbp7jBcLyETmGdGPinhYLrnNUfCeQ38wJgAPYxs6AUFX72DAk49",
  "key7": "4GkNjgr3WKFRPK6LUGLn1bCDyDpHkNh9EwjSY69UXiem4bqZGtt15MtcZsF3zjjeBtvJRaEvUPmxrESkxv1FNsW3",
  "key8": "2xypcj4BBsi9T9atQmjiwNagsWZnW5Wf7ZvG38ZnzrfvJfU1m8VPUQ5ovHbSUaNZ6AzhstHYVX6k5FEYEWktnwvR",
  "key9": "57Wzc3oAKuDr6NehMGPzRpqZhuMn8ciuyDWAFvnu7VQHZ33XkULZnARLavKqpX5JG3c1PY75LNfYYJwqZyWFcVz9",
  "key10": "2cjenyPKeJifrnmJVpAN2LZ3sA6MGxVPvRVMyBDmpy9t89kznTs4yJqKyYoTCnKffFZoZksMuKnAZBnMmFD7dAAG",
  "key11": "5ZE9jajxJxNqnadjkgs3HQTPm5iuYb7EJeqepyaMXAFDeY4iKUmGVuBS1yrTv6NEF8TPdPkPUhTetxPLJRkMCKQ3",
  "key12": "5zthVnHpfMcrcQFhLyjEEaJ6ht43zA1YpNzeqv2ibUbjrDqcv9GpAdx923mMubAzmu8yxovxJ9Pc32sHcDb9SkPT",
  "key13": "4JTrwrf4iHR57w51ASjfpRdnW8ep5dWBoecMuqxLRRqjgngd99ginNJbFjTrgk1UHLtghnmUmJEiKFYbTtdjR2m5",
  "key14": "3xCwpSnWE63ed1XtE8rRVWNHiCmpNeBVpkwJvy1H9YGGZYQBb95s5NsSgvS9si7bxidhZtWNAaC6MvAj8xM1nD2",
  "key15": "3JJcZ7c6pe8ziVNA2hUEEkeq8CqzRgtf1xRorTAc49gQyFe5n9vWcdZ5JbhCRxjbQAcUqss23KxF9K7dSBygeUnd",
  "key16": "2PKgUj2TKGT5fRNNhpqY4FdvnYNQimNWgJFXdUuXbWr6Eq66LGgNQ5XFsiBTENtpS4Fxw2gPPZ4B3rvT1VgUmZuG",
  "key17": "2SAoyKcNzsY2KvgpGP2EwKn6vVoVoWX46mSi2sygqMNqBmJ4sArECyB8fHPbfLYYP7cs71bYJ1BSWmNwtTKsSrgi",
  "key18": "41PatcPcGbb3P8crEXxqo5DM4ER6AcL8FqkPKrYM3erYTwpTdBP1JNnx2Eu5cNH6YFA9brQXW7uZRbnpHd8vnh3c",
  "key19": "56fNfbrLDsiUtRcGmqwdJKf1VmnfWSqMkHijneEXV2Y58hgyAMgYKggrtjz8iRPMjpPJHjyGLcfQCXxvYtXB3Shb",
  "key20": "wQazUwTR9JWKRmt4gFxFEusqaPFUMG8agNfLuQL9eu8NMTrpizQN9PELyWTFCgfaHUDu3on6TLBhbTQd7NDMsDK",
  "key21": "5pW52ZoNgyG8SwmmhYesEbgGZ2zTqkRaq9tTot8JcapfC2tGZ8G7g7UjkgRcgrB5L2mZNjbEvMpMi6he9Gfv7jLG",
  "key22": "3XfPgAVRKpj6NvqqVquBqkidYvjgNye6cj8W2Q2DzXtEbcZqD9BDJmWf6bCZsAate2wvsetZuvoyaGpDwCMMAfZd",
  "key23": "2pPHppAJ52s1irrVuurHJV8s3J6gVt2zTBXxiXNffENMdBHGS7NKqvrHSxmTmvzoeH9TMBxrybLZFYLC7ddofEXc",
  "key24": "64CKyaeZKdJE3FZdyeDCNZiZyYwyumjKxj6sANN4ZfiziSosZF8G1QEjtSEQodmCn7dmCQ8KKPBgRruMe89d5gWy",
  "key25": "5CeiQzj47NDKA7sfT7FnrxNdjLpCrGGzvaz11bu2drLvLdX1ATPnPUz6sjg1iaweKt6WfWKQJxetoWNYecmQV7Rk",
  "key26": "3kdDbk62LfpxajtCYgZx5n169VJ28XnD43gAc34xbuPK44HtYEtqvSuNARfkqc654L1QzEPA161Ned1howmshKZ9",
  "key27": "3kz3jMst2vdcaS1UU5bx1NuDBkbxaHsmCNyq3nua3tfq6SxvYtKy5X4Bz4ZztkippTXbV27kuYRQprLRNSPTuAhZ",
  "key28": "3iZm2nsdxAC5qkcVVAcnuYP98NiUgJkoDCF8HKKe995fqPgprjgL4A3JdEqGhb2ZHgjG4E9TF1FnPv1Uem3CtsYN",
  "key29": "31888etuNKUc5CTXtVEVtiPjrWhhNkivwKkVA7NjD19dQ7Y7huZVEzrefyGX3dXj9JV3kzUKKFvSRqUc3DQFvz9k",
  "key30": "3osFus1esJMMtuxRe8ya4mGP6z1fT6i8yKCJSDcGKMqVrFMVLCa77wbmb3RWPTqpu89mYBpF6oSWbkaGmnpd8cSM",
  "key31": "3TXbnm3xYnZnJqPpXnpVihn2DvjWc3F7yZShgWq8uNVFCXNWYEeETuPWfgXwggfAJuq7aDdu4va3LNaW8qPXvXMm",
  "key32": "4UnydZ9YeU9YHVeNtBymBSZYuNvWhrer3TWYbBssLgm6izS4MoxvdUCyBPkQsrXD64ecU1JQESsNhmS7kLCZVUcu",
  "key33": "fByrZ33TN2cGtQ8m7RPbxHW4hf335h23yjsH7rhw9PzV5uBTMENKTyshp9ND4Vzhpkin721UY5yNPLAHDsA6WUo",
  "key34": "2JDWRoNi7EHJxT6semKYUsjshKEpA9LiZr7uz286QEhKi8MEDd2sw8eh4zETwCmb4dmPJBicFANj6Gx4tERQTdbs",
  "key35": "5ht9UUiKdw6Uj4Pc3Xv4871tXFxZFTX9amnhxsEqTxQuwLxAZ2oHtE8zUP2SxAEfyFuYETYrkZFYvwprVe3GLUmp",
  "key36": "3KReJRLKNXvg2aU7r3iLht7fG9kWNvSgb4ghWy5t59fDsmNfPvPQcGrtT4qqT1vy4yqNLZyPXCgbCtBrbuY3Pe2R",
  "key37": "3rFD63iH2u9SPQLqKP2YcGSgcfavyHTNjbUqJdiorki9WiAe3CdrR2MUQHtLaX1ALHrxrpVpvcLQQa2k8QXCT9ae",
  "key38": "3yX95Y36Q2o1Tv3R33ccNuGvbxCrsEnK9tzHuocDCsKf4YEVJV4uoefqWHWRH87duYSwm97cM8K6jauw8juuXZvX",
  "key39": "5N2jj4DwgkeoAtcezzNi5F5BQMmwaeEzpRvJVDhUgkkTaMCQv83fFJQwikWkiGiwFCDdevnChHQpnvwcUG75C3eG",
  "key40": "UDg7gjaTkKHjUGvhy1Vb7Xeuhhp5b5sqtWfF5TibLUDNEaZVDftgumVep2TtWoFMWW6qu2DW3jfJRt9ZF1XQDZm"
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
