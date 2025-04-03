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
    "5x6TzWgpZff5TX2iqmGDsBEbDGkyZb6Q9iFJxtuUJPh37wGWpKg4y76D4nwGCppA7GSgbubukU5wnueA3H9BaQ3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tqx1BULrHYDmak6tfDRd4DhKmJYNZZcBsUEBHq1RaHqaVntArGZjSY1XXTtFLwZyP1P4wJwsu8SCncetMMZY327",
  "key1": "TBzCp2M39qNx1FARvfSDqiG92Ne2MePHm3tmnSCSLbpJKHdUiKFNQuXPVtRJxkh8g1wDrvmEWaUJsnF7V45womp",
  "key2": "4n7tmrwKuW4LcwF88Ywd4UMnwB3e2zmnTbW6cQGmmFtxMY1Fk2N6Hs4atWTKdv3Nup2jmJm83CQJfWXoiJbFCXNm",
  "key3": "2Dcp5FKRSFr7ZagURPwuvR1nSseozHSxazRNHNbWVmwtwn4Bq2RKkSYAuzZMNAXRciGVREvT59xsLsp4ja6aGhzp",
  "key4": "qFgx9oWP4p1Sr4hLevRnz2g6hkQqWjhCJcL9Bp1AtYTirnMBabcrPkUoFFiHU3G5enoHyQXmAwkU24k5JNh6soh",
  "key5": "5YMip19NXT4oUJJH3ztLdBQwPf8SWUCLXVQH9Wg9iLf2Ki3xFLz9s1rwCJjtHPa1VdHFWziwD117ZfiPsXEncdkq",
  "key6": "4MCStkVXFyJ2TWskszg4NCmQqtpQyPLEkXb35uAEWJNS7ypknvsTMTd5jeMJZVuLfTQYXYFkyMsbxyv2NKYuaBXY",
  "key7": "riVfKr6N2ot9ThaGKDaXfDpnJZy1gVbvov23Q57QCVchoCGwkE1EmVAqB4e94CrgDii5eFWFn1VE5iiV9i3KZ8H",
  "key8": "36jnwYiFBkWDFzujjWeBJnu6oVWSTACCVNofvJjnpj7yjUQQYfTH3Y3GthmYBe2Gdd45s99b3qXbKmf8vuXnmwZJ",
  "key9": "3r8zeUwRvdss32wFyF85kgNDcwBpn9DP5NtVxm4oUPGiWLuP4PZjewkBJJHSbyKHQwaYF9pDwCDFYpHLCsmXFuYh",
  "key10": "2oQURP4AWNxbn5UKV1TzQcPbRsHrkG75B79LQy7QxVz2VBXfGwzb8CZhfieoMjYSWxhs2vkfCMZgkV7VdWV7gLND",
  "key11": "28YQtUhCfvxJ16fwKZh51LjCRSHhz2oh1E5NZDBn6Sq9KZM4h66qihNjMtdMrL4QPb2udYQENyGxwN8dw89joQE5",
  "key12": "2UngR8G5A8yFXwvi2pL8SnNk3FqtVhdZY89GdtJ55hCbmuhRRMwfUs6GRn6cSUWgCffpkEQThc87EeTidp3oVeqS",
  "key13": "WRdyzYqQciZZgvSR9Tm19isKYgMcEZoNaLVoEbtgfhpWazByVyp8zC5EkURWD47ZCaEYnHpMQh6X1ZmJUxWrHkN",
  "key14": "4yxMtRDzemZFfFVHzSiQ9t37jiySR51KQeFWj5y8fZD7W28kKQMs2B6nNTXWufngTFbNHfEKttCSX4aC6n76qAQC",
  "key15": "3SZhaAtE14mwsMM5Ei1aGoPfmv8KHj57NNxPjoPHdWQ2AnQvkXoeVDKFuvqt5t8MZq2vm8fufW9W7cZqaXPLzFzN",
  "key16": "5SNef5BcAaP11u95QvbqZfAoNWYo6Z8qA7TE7m4YFgPBkjc9uXrNCeDuDP7JXJ8U3UELLHcr7ou4ntKy8PTjw8HA",
  "key17": "66UenfiYMMnVkh64zu2damB4xqwosHPKJt79euDjvETeCnf896K3Y27nCuPCVDstgF6Cse4M2nk2tuovodzDMWCw",
  "key18": "4C4zvif4ujCChnVbVLtnNSdFXDPvR7TwEqhGidXyVs9vmSyExwDaDN5iLET4LDRtdS5i3wHQSMWPUTRsYgSWFu5J",
  "key19": "c1d4gH6Uj6ziBiizh2PvNEANHKZDp1tyNaCcRzSdVqop7Qb6gQQngBjSSKdGW6NEDSP8FNqFHKKBhUXwqEQvhCc",
  "key20": "4udnPvTgcApDEc4hcE7DsZxiw4kBnZhqoB42eqrpjU97HdzHbcKnUm2xUL5ncHKu5WCDXEbecJZ7nyoMdiUdusm7",
  "key21": "5iaimvhEm6FkQZfiTuDQXKxF2AqSjTECGTLsXphFyFZj1NZrVcUr8zYDG1oFGXzoG73aprKp5VvKC5J3b8GUCtvq",
  "key22": "2iWn1biJpfUymebWfjbHhit6T4nDSxWe4B2rbCtPEuxPjwubDyJdLHDYMqYMa6R7kpSzoFXqihZe1qHSUxDoJszy",
  "key23": "2uuH9RuP7xdVruJLT1EpFMJQQjBRsxWmxjWS3iDkVQtg1yiMNrYkBd6tFvkiLxcoipg4KPsdd2ifA8zTzjjcdoti",
  "key24": "4GradVExME4V6y6Hb2VgGKqGaJAXii2CLnkvhTFsBgWjuuLpXiRjb3DRxkgqNrAJR3cKUy8CE6j8yPDPn1imH8km",
  "key25": "4ZnrtCXbwAYypLicBYdzjyLysnnxneUmA2cJfPyvodrdsyApZawHAD1nALs69wX3vEi2p5TjN3e7oHufHUaf6Lyd",
  "key26": "5mqVxV9yh1bxbGcUjcd4Bo6M86dVZ8hm9YPsydM5tb6qQQZs3mS9MsSNxTyJhpmZqP4eb1yUSA8YeJdszTmsSEUG",
  "key27": "5Ux6VJKys8YieJShwhet9DMUfq1e673ghca5X6F38etiVrtGqgufz9zNj2kvCWedMtkiYUKvD3fy1RxvyQdurM5b",
  "key28": "5TyZAVXUaf2ARNwvVCgyesvzkdYAe7E1GFyDrQGVa9tw1R4wR27WHibebJ7pMwdQkx9TVUjweSzeeaV4NbaV3Ys",
  "key29": "2nqYfoLziRrZR6cpqHE3S1JwNvgH753bwTffgvjhU8cSoNB6a1CW3WYM3MjCFjk6ReSu4dGduyebAivL65f83ufB",
  "key30": "34F76bHaP7eGmB81v1Rkxpm2EgLAhNxNSL7FfkyrckSfbPXFDyVAFrMUb2nbP26unUiZKcqGERd89wm3doRLV8rG",
  "key31": "54dpXYECmW1FR6L9Tff2a1GxmzwvYfqCQBjq4XVqLR7p37s3UajBwtq61GyRVYyTVgRitkTebKm5JV7PgdwyZAz5",
  "key32": "4h6DF12dFoJijhoTrz1eXW91PLZ9xoH8dt92QQ3959MjHj4B48oSAMEwUZh87YiCpn1GAzn4qpTdWZkYyk2rEuD4",
  "key33": "5Uj5MbkNC5BcyvJRhfZG8857UM42eZMvvtyapMBThi8Mh4qrgF6KPupuM7GwMn4fSEFTMZSaponw3GeYE6efCHGj",
  "key34": "3k6ycAbak7eE62QkhZTHXPQFMbtAyCVDyi7EptkWrzDx9Pdz8CgyhN1CBMWBFyCFer5NcekcYVkWwSew8fTsUGyq",
  "key35": "3Myg8XpVmAHpWxRWbgR7KtpXTyJ1pz1A9zD3hm5eAtPKicwZzdwbN35DjRY8L8C587pdC8mE3jhssZbGEMja99Un",
  "key36": "zaBqWAxv2sf4sjyRNjAg4v3uYZ8apydcxnkiCd3A1XC8qbiAGLrS7oci433PzYV3Amo7YfhNVvJBjBJPfN1Qxet",
  "key37": "2NqFwhYrYLJy6Sk9tbxdKMFJkdUMchC8o3hLLrNEvcgwkKesSe4jhuuXzWg9cW41bKgCUaTnxvKKcRsxyZZ9CiUe",
  "key38": "61yCV7mk9VeRudQy3TV9tjS9wsjH4peebd6Djf77HZwJ5cUGxMiH9tE5tkzj5qzbMabRP3Aac19cM7D96KyMibww",
  "key39": "5bFGQuR9LdQKmSAabJS7XB7EJabbkNa4suJVKgzjjtg68YNqNpzEC3wmpjJQneMWYrTjGACUudqAmqLn5gVD5MRH",
  "key40": "36MeqCkXR7Uvaw4ZNmyFWjy2DUK6b7tfyJ3Fhf5KQFzgEvaAhAWuuG9FRUuWuVEeJ2i72LFBg1yBHvETMdYjfb7J",
  "key41": "3weWe57r3ZR3UtqrGkjVn3nJFfHjTbFGHd9PUTNg864ExTpQ9hz51m8pocXJbenN9oS4uxuS3dSjKkU89UWLZN3z",
  "key42": "5W1WQJtryhtLoEcLu9eRfkmyMVet8mmFaFrqSBd2HfkdWBuSpMge1WS7WNvRd9Z5acpeCMfW4dNSTCJ8FuJjvNpf",
  "key43": "63nShAmkYJGPmoaUYXu51WxwvBBMPWjQ1m52irMdgtdCz1yZSPF2HAuX85CyHNDivqsdobJ7Ko6pUzYTAU5zt6MC"
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
