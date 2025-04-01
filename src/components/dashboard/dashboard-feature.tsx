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
    "2PCevRDA23NJzi4VHAn9KqNDbQzSTeoh49CtLzptJ1g32xrJunwvnzmGNifXQ6EKJaoy26hkUHcazdznRKXGs9WC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36u7apRqoc1c1CDisb4QtQCNfcqpi1xgm8GfEjV6UtEzqyCfBBKwHfSVmbUmJa3pAXcSesFfEGKZWPXxXkNV8TDb",
  "key1": "5wMGNkjRDUVGMcvR5GdoNHerkGcqRVbWaBYB8YwCbHsApsNW84MEFqb8KgCdKiGdvgE9bHJECRLTvuF8wEU6Gmnh",
  "key2": "5F23hcsFAgf6R3LymkMQoWdKSRNKnwZ9cBiAX9M3xav6RDT6upnffMPzysCzHhe7FkTx1wHWG7WV6c6JA6QJBmzM",
  "key3": "32TC2npHAGQNZHCWbBRPKx8QpGSW3tYnpX5j9ZhMTziMH8JDreBXNT8KHY9XWdkixoV68vVvQ1j4mTf8MnLa4Hhz",
  "key4": "4ggX7GWrw3XzhTrx5mzsMS3qLGRyqpLPtNHHHW9A2Q1oc6Meq4QFAcUDBGAGjS6RfC8ZKKdrNGv1voMmEb7Kz6WQ",
  "key5": "2FR4UDpDEsuBt8WMtUqhG1PwT9oM3e5KQ8K6UrvrvSfN3mhMWdnYq36ZknHWAGzpfz84regpzDNERnbnXfUrKxbW",
  "key6": "5b7cu6xu8c1Vt7T9mp9FoobBTUYnZ4zJzZ7qthz3CnCvQeuV1dJf5KqafLpVBjfQJDcwaZkQC6f45KMMRU3eCEti",
  "key7": "36vLgSSbHcbwiCS2CYSYaVA71Z7khyRWjBReLvekTrQCYktuBYjpDNuGsQ6vuePrq1gRrHgvuyXNJSTyF9RSwruD",
  "key8": "g4dN53FQduufdL2YbXkUt9gLucWtiSDuM32mZdVBLYGda24sFRbp2evY6XQtiPj2ujULnRtkH9sVWCk3kDbD9zK",
  "key9": "RsbJAmd2YoVEJMNi8UDAjKYs6HwmEWWfFNj59zkb7PKNkDV82V3Xf9pFTghqz8TVQUkfdhqKsGGbyFTP8ptXJ9L",
  "key10": "3mdJPSc89kYri2RKPv8Zxv6krcKNgdjJcZCW5D54QphbCaHq6oUut35pgnNM7T3eEkqh2F1FPXVqdySZ171HmExG",
  "key11": "5BCScuBuCyeDKcKE9wpiJNuAzBrfWfRgzswFovBxmGVcYua3mxQB1xsrcACrUza1rSyTcyC11NkqivHyZqKxbNHq",
  "key12": "2yKj8ZVezY6gYxu9wbSvQpzwjFULfxXjkzNbiQWwoxQbZEGrLFQdLKYNkwcLgCrURLkpf1NLvRbCLf8CFoe67vUw",
  "key13": "4ey6syHr1jjAHD3rtgcpwfjc9fV52t3JEvKSCgms97KNeXQFji23kz4yBve4T4cwjWHsyCJn9biDmXkRUhUFa1WU",
  "key14": "4NgNA2o5H8XmWuNR9GMBLVETgrgsW3NbTGC84y21us7ZqSPNKjzFcdsrzDLvCZjmhVmSzcVjFjW91bKBujZoLgwA",
  "key15": "2GK3B8ggdq94QgguZzv6MbhBGa3mX8mT7QmQpFJLJVPH2Lj45G652b3Tvz1TLRDtADhJfv3vHyVeF5YbRfrbFzE5",
  "key16": "ehtHKEXAf5Vbs1fUTJrjvbgUQt8Usk42NqUrygszZgbq74w41x37fGnFgj44VboEVvXYafpjZmhxmJUsF5vBxUN",
  "key17": "2LZ1kGLANGTKWxsJ3xr1JnwbXUEUCwgTEy5VtA6P4wz6GfsQbzpQCQZaYKJL6mRPgv8Jy135LX5DSAyrVqixJU49",
  "key18": "5pbKjAMkNbWBoiEd6f8MWPA9jBjXspeb2oswGN6eVvMAN9XGhj5gJzDYo5ejAR3dHY66MdoLZ9ouuui7j2ZziD6w",
  "key19": "4eRyqs4URPjFuKTzidXKYtY3NtswGLKEuuKQB2JpEL4qmvnsidPhJBL6U16yhFs8eKg5af5iJZC3hzPxJkxen2De",
  "key20": "2HobjF1mXcJiAT7MnTyYcs8wtd3mtf3yUKYmin9oVpXHx8xGNC9qSYijx1FiBDt73yDMLGAyNUVZS1mt7SRwWEb5",
  "key21": "4vz6qAcbeF9L65U9ZYdJZwwsKLzmJUfstzjYuDwic9DmUzvLrBMDGaLPCtnjSdvPTZSPHTPGgqRPZLKi7YTHJDa5",
  "key22": "JFkzXYyWmbVYRh37PxiK3oq7SSrLJSYTUVWLvs6CAfGxtSFeFFZTkqvT1npLtZuqwWXkshBVQyazV5U3hUgHdoN",
  "key23": "5MdF284Qo65dRnnnMhBcgs7aBRNsiEwgqgmUfDF8TDgdYBiRewGNiLjJ6dCWHLEGC6uodpkwNF5zj4JbnGzDuC2K",
  "key24": "5SXq66gtaAHP6L4FT1cgXRbixUuFj6WKQ5WHnu847Zfnt69oqtxfULbumzasuLUAQbP1Rxco3wAzrAjcxZ54Lo9V",
  "key25": "2DKwZir8eWZkfSvYpjr5BJzgnBjM4iQ82TFfr5tqyqrJNRWTwEWGCdeWwggcYqJ8xExEKVDakfLymbwd7rufKsmL",
  "key26": "Dr7ZGUDz5Hnj9CLTEc3e2rRsRsQrSR2S8GEpDZZotcqgePm3nSVewNhTSAPDHvCUrgseFvyPqzkcnfu3d2WHto8",
  "key27": "2KLx7tgzwzVcxe3vUBJRrpT72dpwZ5vL6SyjjT9BURFJxafN6V7iNPKZJ9DV5LN8uYttyBFmD7korhQVyBXNVRwf",
  "key28": "2Fm1bppnXiJiTVkuss8RznVZRVrAXD1ovp42Zc4wPMRkkQTKzBB1f8fGrTxdbtJei5JrMveEzFAo6WcCDvFqxpnK",
  "key29": "4cjurMhibtSAas2xofp29YKTexp5ijJuus7w5QBwmAgUBxxAMfuKBBcz71VFQnmwxdxT3H3zKaQuV9EqziHnKeeb",
  "key30": "3tGThHRNSX75x2XxFCayZJYyx6KZ89m7yeqz8abURzTM9f2KLPFv2agMDuiN1Sx8TQwLn2S7RqgXsMRh3bmt6wek",
  "key31": "SoN69YYh6k8qyysRdZugoan5oS9cc2ni2mvVVCczUqVM2s1KNXdLR4ukTweSeAkXjF1uPg9do5ownBzWkDRtYzF",
  "key32": "w1H7D8jFZkTgVHi3SWJ82XURQxSySUVqvEZbe3raUBejgZvdbGin64CyuMRFwBxnV1LykLsG2f1q4fcdvB3oL1E",
  "key33": "Cm82sZ5SGiaRd56xaDNpiMZUzUAKTbeRbyVeyTHphFBfN3SaQFJNu8ibT6StC7sao7JcfD5euw14gVMMfHdEkX8",
  "key34": "2AckmxHUj9RiqpC1jWjbR7SQL2EkajJTbZXgqHq3cVEtvnNPAMpdgYhtYVb3d1FhLTwRKG1wsA5ygeSP7AM6BXXJ",
  "key35": "5s3RYhDGbUF3e54KFUZH73Pmm9Y2gQt94K1pf5adeRHpbx3VyHSNu11iDSADRGqAf9abSZm5eJiyffD3RqXd2TLX",
  "key36": "2FU74FvFvcRhWzKda7JdHm6ifeMs23SRrZLGAipsaGQrgvQNqBjLBdMJHbsMZS8x1Z5UsF9RPiFY3PPCqrZ1Bbem",
  "key37": "5Gf8A3zcjrsq1S2UjCXcb7WY6Vux8CnNwnXb9qsFp4DmH3yDGrfxJkGo7TE53qD6XhxWGHuX4m5w6qbgPb6uv6u6",
  "key38": "maoidVBxDH2xJomKdFwTKA6Fb2rpJbZpKqjXCwqUrD82VoF9akJbyTAEvevi6mCiVWY9ZiTzjFMLtAhNV7dtwGH",
  "key39": "3JrAZ4VGjzG8wRkRJKJ1idqniA6mnizcsVULQfLSkw1spMRRzDrj6xk5pSjsrzZ5gLwR3DvcYVqMF3ujpGzJ9rmk",
  "key40": "FuLvXyLEAffm8PEL1yRuMdMr1AmUoDSTALxpEPJ6QppXru9jHdmKJgfek5A2K7vaLJF6haVhrjsoodDc3xvXvpJ",
  "key41": "5qKFDuqy2ch6kGyQEbD28UBYQDxmuPe1kv6yCHk66aNmsQ3agCMqrG9hmZ9kPVQTvdCEQkzDWXZ3ZMRMwR2HfU3G",
  "key42": "3QxiFj36Peu2GcSnBCMbyVi4aDD7iJxpBzRJP2bKPVvPTPeiH46MDG7tThgUqStdQdmg6h1XiwhrPrq2WYzbdUMi"
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
