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
    "3muNJ529cRGFBRWQpBw9LAwkRmso8CjqB55Ti2HLv8XgHE99LeixNRmEnUvPCzR7jN7B9yqdiifZN12foQMV629m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EMkju8UtWvE5zMDPgT5eD9TUcUb27NcamSEgsuqoMhoqb1ZmHW4xc9DNxLqpQbPFe2x8Aupn2VKxj4sPuer5upD",
  "key1": "5LxSow3W98jejx4nCRghRCKKkuMMMipPgazM35givZHJhqJusuPBfEDUfjAU2zzrfamJvw48DRtaQG3W769bPohP",
  "key2": "LztCmvMDmPa8BXWN3uFY9Rktp9gztgwAmfN4quMLbRpWVLnuJGANyWqXU2EVfi7NiXmzsrXmWgNKKnMp3xLYred",
  "key3": "5xuZZUSCg4CWd5zy71oth3EpGSUFSNF385Dz71orEdkBLhCsLBn8L5NJebDSsJYFcgjAQw95nWxPXtiWRz1mbG2m",
  "key4": "3Aax8sNvvT3TSLaXyzna3yk5S8S9FAcTHvVt4waneQBCTeQ3CS7fow5b9vnVujFa6oy4fsGoqNtZdRGpXuHSKRY8",
  "key5": "mqFmSwNgoyNJX8bFwtBZXi8pRukzM1N5W7ihN1uoKEdQTHS1fUKSAizY5x6CgFDjAvMar5LjfFrsdi4BWsQE1ia",
  "key6": "3U4T79FMyF9bP9YJ11cYfeG8A8He2TcVxFZh1sLNkA9YERrkw4DStoybh9YXjZcYfByVRv6us31qxgchYrdVAXSk",
  "key7": "4WdkKYUjtj8rKUEMgZKbVGyciLNEJFXqkGJGooXT6dvAdxCxyJMGwTe3FXMnVqVVjMumsApHEUrXR3QsWQcRZLq7",
  "key8": "fqATpSvQHc2i6ep65sZZBpfib8YXPk8E71SPCN9EBWir8tFyz34vXkCaNGuq7GMeS9SLHRYyArbdQqiX85bgQEx",
  "key9": "aRDeuqi8qN6HTUqeRCFPhqTJShW8QwNbxGSNvCfuVjCtSnJGYQ6Bs8rj3K7iAPPD47GogY9zxkCHsb4yQoGnRQa",
  "key10": "rp6S9qgwGHbMNEaDyUK3cXKctjXPmHvnNYqpJkeJbWK595kBZpHxKNgq7NDU8BCQxoh817CeHKzLMgLybpSZ4eT",
  "key11": "31VRukEWroLXBumfyAjEgDujZynprRpVzbiEpK876gLzFHSEivSkBATNaiM5wHfhWdKtrUCj6pWpeX2PpXPaac9Q",
  "key12": "25sg4Lpp5qxarg5Gcevpcg71jMJ6rtLzG4FjiCVy6yfrBRwiBvCvdZeaCpb5BQpf7dXndCDNxFT7LFbHfW4MwMTE",
  "key13": "658YmmPe11CvuBkbzeDRtp25xwWk898SUNYTzSPYtxzqHLFmwCqujYVmGGrqQbWumZoW3UkNJtGqdtyDwsAekvEJ",
  "key14": "4Cs8B4hVVdV3xfvhJgbw1GB5ipfDgEu7qs4asZPAaUmTYQVmpmWLHBMDyXsQEkrUvFWztFgspgjgfivnqiFss4rV",
  "key15": "3toBQZCWX5L9sVEMLMz8D9G4i4yic2iiZ146QwkY1STVZiEQ6ANC9KXDA4nWKfEb3toUmwycwsVVGwuB6jGKzj5f",
  "key16": "47vLJTCiShrJ7ZZBUJWGinXNmTtjRJF6dEJco4ssbLtG7V7gJyEK2YQjkvfEbBygosuawhsU83dWReTkRkbyYsZL",
  "key17": "46xcM8uy4QQuKCs4K1vbLdSH7f1BgZmiHzxf6QnyP2TEo1H8mPbEk6JZKSBTPoNJ1nrURQN4Y8yeGGAFfhDmj23W",
  "key18": "2iM5hp5j4trJkBiWmy2jGJtaQbEEdLrv5iDR2BiE1aSkcbznXEUtoQgQzcHNMUKjdJY9i1qGK7uYXUeGrreHmYuB",
  "key19": "4294Puft7353WNZHcq3ZZNWy9pXYok7qGvCyAdf6rTaPjHffFRupRQh3HgoAmY7B8oEty19wz1PZDsou2mpTm2b5",
  "key20": "2bxFeL8vDr3UGRjHvD5p6DHKM988qsJyqJBz79124DoyJZyijAaXaep2i5oHbKRRym5WHCa2VxnagHtRzXrFfHVu",
  "key21": "3Rv3xSaYDf8iwM5RGbWXW8Wu9vCGez7MTKEm2xKmxm6Fbt6tDSTtgczQPN4zLMcUPjrYGkgFz1aaR8UdXkZE8mcW",
  "key22": "5s7d6uJ5shMBYKXx8uYRmKVZpFgGZquVcaDoHtC6innYXLqZJUW7WB9RrzoiAKKZJPhu5UmbNLMPWDyZSpP8entJ",
  "key23": "sVicMwrehQ5UWJ3SHxZvAAGQ64Vs254R6x6LvGuPArT5kCdu7AUfuk88hLfSLPykXYAjd4yUXvVvdzVLJKir5GS",
  "key24": "5zsKMr8RqDmxejZrkfcDR6brQTkfpX1sDVvk5NhLpszhL1KxXkcAgrUNHV54xsSTen3bST297YjLFvY5xg2ue7dp",
  "key25": "3qEVfTBTuBaaSWkeYLEkRViXwptvfAc1DTWmxe5CxCrS4nRY3SwvNZk4o2Gk5chVWxwegaFo4vA25ZjQwjqTDmQz",
  "key26": "5yxtiPnz9EjCxC7BBC1Mes9jPrSDGRmHr5ZSYKYZ5FMbauGFrYGnBwFUw8f6RYJL8wfZ5xokfzL2oE9avMMU1FpS",
  "key27": "3hiGR6BNLwNBbqGpWF7N9zJzMUc4aUbRhSJeUFbEaWMMUqcd6XcrwRyR3Z4zBSqVjv7km177BP1B4roxfUXDYqXT",
  "key28": "5ShhuzfXBKGrpSZY2j3mLNo7oP3BxoZ3uLUs1cxtfBC4qxjW3rvbtPMfV2QdfkLEbBxLS3bCPdB4R4mKfnTbwNcj",
  "key29": "3yQxhFSuJRr9YqdMV9pNRrN16nJFfni97KwBYcpGDdmUq4MiLom25U5MtPY4wKKfGGkUZsVzW466znqELnH9Qv3G",
  "key30": "ykWWZEWZ6varACgVYAqoqqeuV6wUqbkvUpUruPeXNVq2dKTjy6mZ1zByMuYXSSyawJ1uc1aSmze9FrbMGhvFJj2",
  "key31": "2LCE8m3V7Ux2XpFQeFudck3YHta8jQuGknsKF3mNC8TtmZbXabsMfvQwUSAtYr77VFg5CZN2CVAnhksZSxqmwrXc",
  "key32": "snSB86MjyAVgHdqbcNGQi5N9BVvuxFCYjtkvGWMy1Z8D7q79e2nvgSCD4HHRWFGfkA7ofgvRXZeU9VNudvCcgeL",
  "key33": "4vEY7QARd65ZHY7jvunB1HVG1gPS5FW1A7K8PxBrqe2pnfZHQkjScXUH2MXvy6rVLm5YqZ2XnSSRnXFoWmfdcCn1",
  "key34": "4ZZ4LA62EjpadB5LhABs1L2LPWqwqGZq765THazVgB3QZF6v4eYxvyy7zgYdQCQDxLcMA85w9RwceTqBv8NqkqrG",
  "key35": "29REMuofKSg7uuXrs7EvapNvq7hyWqYuYP7RBfEFS87ocr1w9KUb3B1FtW9PvCZQohho7yot4GJEyN1nUppW9yJD",
  "key36": "2GNaSUzA8SwmK1oqDckFEczWkuWJRnDhuJLTjWaSihaTGn2TfL5WXGENuseqLU8gNoZi5LcviH61HLxYNVFT1eya",
  "key37": "siBM5p2BsyHFrbwsC45KBNWVAuS7nRmtmDq91QLDU1DGRoftGWrY2b6xKUtjkqN8WN9ndRvhcrrNJsFTQia2atG",
  "key38": "3wu1ThCjbX5xTMDYm4xJJLc4t8jcNBcDETqZn5UiXeHc3aLc1iD756kw9xe58w1bdfi9yody37Rxqq1EgwBvmBdj",
  "key39": "5DHamkv5tPzP73GUTbAG2k2L4rJHk9Xfvr2LfNEWSJohEUU8kqKGXTA8rsgKiW68rrYEy7chw867CzvQuTFdbBAP",
  "key40": "3HH4hFNpgrMz45iJSdYAiKNFvdchXbH7j7Pd3vebhTeefhbLoaWfTph18ux3tHZ5U9F8gDVk57LTMREz66KQDSFF",
  "key41": "JCEe2nSRvDyRQqmjwCY3HDmdLh5cpWCgy3tknh5WsePnJ56Dn1WAsy5you2Xtt4vvPaudrHqnjM9DAV6vsiFUFe",
  "key42": "63vDYRiJJf3bG7PQahdZBGF2qJHS48TDVKPW7FEwffQ413yMENjCnSaMHLXSnQTk8yYSqe6EoLJX9rLqL3j9ueJD",
  "key43": "3cpnWLRuPrxVzumT7Nj2Vzj4sYDSHAehd5RtCAJxevfqaM95QWLr2pYDZeMBx4FakGQd8zmfFAXoXNmUhFfwUtLF",
  "key44": "3UXwmrHBmWg1qeBpQ4GhdjQbAh6uimravcYY54DNbZbyDL45xpaswc9qu511hmX7rSsFE6TMH2UQ1qNRZfTAGTG1",
  "key45": "3g3ZazppwwEukctD4L33wWKesvc5hwKfxUuggeEMZ89yoZQvisVqtEdY4kH7nSB9YwMBgL7wpCkZSxFUxTnSx1WY"
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
