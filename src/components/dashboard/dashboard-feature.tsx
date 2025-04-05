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
    "512aKaXKeJay2zyLmnWZ1g9HjEcZWgBhar1tuMgJesudHzzbxFVCt67rJ5ttA4HXsb1Q73r7DjUnUy3Vzb3b139F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cub367yvur6za5HYdnnh8asaoFpbNZqJbFCcUQ6WgnSjUSzi1tWMfpRbXvM7VLbS9T7ZZp59tLCvEDpAd9fhjCd",
  "key1": "xY5SGRjxdMpNrEcx6t7EGipPWVUp3RH7Ua6o5Kgq66E18rj1LzGciA1zZfnMyksbGDW91YBE9rjeb7RaJnp8ztR",
  "key2": "oExShoLT5S6mFvt4Qdnc5Dxtf5r2LKF6ebfVWc6XUAgoXHNbiDTsz2zRCsg6L2Rio3gXrQwohreLnZNgRFf7P7v",
  "key3": "4JkAXrJcWTnWyFBJYRDPc5q7J2BcdkCtVmSgfpPJKHRibLvaqaeWtD7QgWNTkWMANxXCpT3T5aBhntmbJebGm3P",
  "key4": "4u3RXdyeCMwN4UJMUEmSQh7hWnmdXRxqKyENJn2y3zgK98huz5DyEawdTgsb6TWYEh6eZtfHgRndNNRTZH27BiWZ",
  "key5": "3pkLEW6AKnptDRqKfLPooatUMwmcaQWgPxZNwknikUrgYVGbAXrtsofx2Z6hVXoqiGfeJdGQPDTAvLDRLdx5tYB9",
  "key6": "JEPnnYCTpsZ92mUqWNHhQZFxy5L2Zwgd1V2wxFft9uexk8JkryCkoW18wSSVBqvWvpwFXnqHKrRpTz25GP8wv9R",
  "key7": "564waYUqnfGveDGK1xeYcHoNDKnT34GFgJujMp7WQNxVoCUkYtyi39MfrZTbLhHb4TihHHqx7A6DVe8s8g3uYHwG",
  "key8": "4SeAMG8yASKL7SbzsgEEChwxipCGwqJsUyvprNuFNN1GmVwxZ5GBkE1X6ZNkrd8Myc6iB7sVav4FRXJqbGPHzLPt",
  "key9": "36wRDbdCC6exN7wzh4hUCQD8gz8EoSbvCsDt4CCXpt2DgVAkm3y6FoP7hvRguwNHuYdmFcCYT4ebfgGPjV2bjqSi",
  "key10": "rbpJiuQyesMmAJDJkmm7PCweFVJt3zwt3kAMwRqMFeZxXWE6y9R94QZWEUuvcKszPjn3qV8r3CimFgV7D9YJeR7",
  "key11": "48ecBZsjpEgQUMzj99QqQ6FbKoMuuBcj5FxGS2LMJTdSpbWg44SvAtXrp7S81JYX1hQXTPQ5EmJG9QW9eK8ToifQ",
  "key12": "2Q84sqSxSZmJCyKBbqXwKFueMzxDkrRHHypazFAxKDEZUnb8CjzgPb1tW94YXVt8e251kfK8Q7zYGtp3xrTBLGDb",
  "key13": "Vr4RBbrY8uhRbjRwTvajCSjDJxWPbJk6nxjJ3bocBwyfKKNJJ4jZCNrzLwypBjB6G72EuJXnvXhYpiCCRyJbh31",
  "key14": "5T8njw4i3sfUJJYhbejBchrS4BU8ffkrKzPn3Q6PbmrwHQxYxNFiuVDgtmVUVH6XcKdeGCdCQwHA8HeQUXzQ6Cq2",
  "key15": "x7dg2GzRCYYLCQmdmLTZMaHUk4ccyHQ6dpF5qgjsUzRtH3PCsjFZthduNvHs3MRsYG9z7gwZPguyjHaRj3deMfV",
  "key16": "4KniS3R7524bJa3f65sXJTpPfKGAozL152BA7h3YdPNRXLc6UzBFc5aeTbHgzH8C1K6auEYSv3mCBzADtUHaBF2G",
  "key17": "3d7SrcKoDExKm14vjaUL9W73Ew5T7sQWENr1tLE9BcJH2hBzyyRNrTzsLQ3ZTnwmmqyk5GStYZdfMi4icrkpZxWV",
  "key18": "kcQBb52MSyugzseaCZvaZAzwtMTSKNbc7TW2uwkmJanRKL9TQYbk8ixzG6CAHuVQYCZNyfEpYS9iwbFNQdrJsth",
  "key19": "37dWEvKdGweJ952cdCD4yEPBmCNdTyLf1zxTZJKer9GNrBykenHJm3i42LmvfvGPjKJTt5L6Q1ocXBWTmm7notwd",
  "key20": "2A4fX9AfMjrskX9JcA9jH2mkgs9db7jZrkdTnGcAedG8tXs597KiJew3eQs7rvh7bEQBgUWu3hyNNxfE2cepfafu",
  "key21": "GjTVZdjmrvN16hsmSavjCmZJm9FbWowUY6HUC7NEc8DPTDYYk28sr2nyDYceYTquvfZBbFePD9YZVNK58jUHesd",
  "key22": "2bKsTDNiXXQzFQcpuqM8dk2nsSGHKGJoeT3rbGeaWA3USzcoNfZ2vQejzNPUnhUEENXadzmuqmhorNcDuAdidLms",
  "key23": "22i4GzidNsyGEcKXPj5dDgn5iwYpAMntujzFb7HhsTgEStxxSBPyxBHN5bV2WxPRdaZeBCZuywbbKqxGTBffGhgJ",
  "key24": "2fecMZEjQDZPyh4Jnj9WShHEDqd59pCprABEF7jZo1fsBBPCWbKVE59aCocX5VVgwmnjK88SXE6iggEw4UBJeBtF",
  "key25": "2smzFa1jWJ9BczW9DsX55T1MTjDAjamu1BiTBDaPyFdEYkohnZNiyLpBo91UUSFfjXpSAtHHQV98yK9yKHxzs7fB",
  "key26": "vSz77Y5yGQpxcphaydvLvCU7ic7dWaLshoiegEZh7WT7x9bJ9ecCvkFAQcErRo3kD5oRg3U64HrgjUnQvkMDPsq",
  "key27": "5GiHE5Rbe1EdCTE9oav5qbqqFjrfHbJMswCGNHmA3NLW9KFoccqir28nFjngKpkf7wn6RNL2MJ8YbEa9yX5KfKYY",
  "key28": "5guRQxBsJTvScjcvQ7LtLpMsjHoL8Y8MGSTPhai5tV6KPPZgqM23LkMwNT8pgoNVHYNArwnYoaAD5Lcadphsv2s3",
  "key29": "4w6dD1fkN9Z55BsB16HWJqMuayR8fDT3kZHbuMpzbjDmsdMVvyphKbn181Ni2uUmP5ZLg3peeMUM4WktC3e7ER7R",
  "key30": "2pDRNgzZCtRq9iWFKgwoNq7XKFbN3Aezgi3fupNhXHHGecGQAgNvUhh8jjtbrGJbC1mBxRY5NiEQgr7xXGnEJUcQ",
  "key31": "4ofN8Ko1V3cjVmYdcHgPnk24AmuhDHWpmatGT5rRzEaMgnYtdLCULCvL9qjBVPkcLe7HCh5NQrtjmKhez4z81PXC",
  "key32": "3ARZRHMJMaSzho8MqpEsnKAdYA2QQNQZat3ytyH5gLwYqBjFzzbENAnQBUUUg5sekk54LkaYGsXfpGnoKmvFmB5c",
  "key33": "5kJTkJAZi8YETXfgXXbuWh9hw3zde9oFCQthCnxc8XPy1vYcyLCgiQxswzBFNSvmxmXF4MZj3UYDKwHNUH3ES4aY",
  "key34": "3QAkYoqzrPQqnB6EzKzomy4EMKK8pittyUu2hWuhKdiBci4robfaDyCZUBB9rGfYDVsjw1KYD2rbf6vPEJCsj9Rk",
  "key35": "5KHXdkka8S92hq5KH5zn7ShJEaCASD4DZc2ixMqaDmNJ142pWUuSUS55Xrt9DrQSVuuSERmE1Ue5sJQKRpVuz7bB",
  "key36": "NaoBHP2xpV8yacSYGBgRB7rRwLPVi9SMjEERKmt72nFkfKo8WLp4UdQBpUHfkGf2HXMRSy9mjCPJfh8Gyqh2McV",
  "key37": "3Am73Mefx2orkdRxgory5q1HV9xo6Z16BbSydg6suXdzQWC4NZNXS713NZvY9xoguGATNbyPnitW7jM5TqVBBCtD",
  "key38": "5eBRjGZeBdTwKwcgHBFKynP89oVqDdu7Feajk6skDAgwZAjiVpw3R1t4uLGP4MsW5r1YhjF5uKZxGK1BDrsJ4UK8",
  "key39": "37yrbs3G3DuUfsUScD6ddXsFDHM3aaWZ3moEepxqparEotMvkadkkhW3d1PViMtyeNeoYQLLiCj2tJizwjywLd5n",
  "key40": "3LEWm5UsVDtKP2D1X9oadJHT9vbqhTFTE7gpzJhN6jqBJP87pg91Zi3p3HAGac2BNs2iRJahGk1Hfj7Jev5sPVtt",
  "key41": "2BwFgM2HWiwziazXJfrRgrR1suTxCjkJ2phtYAJopxiLBCLjtaCLdA8kBSvyXJrXGj2dy7MDLHQzabMKC8HHh4Hf",
  "key42": "63qAv8kUjkbCn2msNH7NR4xJ4cHEKWzSzea8zA7XtpLMHTndmnwwp3x5nzezuveNvcUK4QiMwf9w8QYvkHoErZsA",
  "key43": "mVkWnDYuwodP5aERCNWdbHRmYszuh5mHHxqdbsEuidtVyT7fFUQNQwi2sJD7LexrNgErPGRv8HyfaSZuSb1XujP",
  "key44": "3NvdapuJNrqcoxPzoRxmnGBkTqPjnkdP11B1TsZYQcj5q188NQem8ANV1RzqBcbGCt19xrMTqhye1GoreNfgF4b5"
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
