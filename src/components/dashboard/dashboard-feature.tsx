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
    "5PcwDWnxnVKGZf8FCQ43QJVTcxj3NEAkZz5m2AmH6Uy1EtwUpSSVGgiwp9yUz7j1ix9EpvpRVcy72bBrb2DXEe38"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JKYjKVe93iSZKUkApRzWqDXMeHiUNEB4TUPphdC8AHba45kyP7RhHPNBBHj5hQTqxPH6LQj6PSRS3LBu5eAT37S",
  "key1": "4GaH8CHS9BCHtN4tT4eC9rafyxLBTuAhbFdGz9h1scV7BvTUYNPRZDhUec5BHJ4jB1Z797BBEiAkF7cTUJCdnpjx",
  "key2": "57LXKyGSD5s9h7HkozNNPxW8quE8WEKSoR6XkzgfJZ4cdrGDdfkqsWibUHgtrD24DRwd6iXjWvzqWWLnNKBQ4jwy",
  "key3": "4zkS6GSrisaALkYTNAkQqS4jzYBiR7M3EHkSduJDfT29kxMjnDV5myCX1mLWrfKc5WBVjecf6hCFgzjRDbmVWmdv",
  "key4": "rTMtPqS6sfzFFr8mjKejvi59FDZHbVfz7B5hpmXwcN9Df3b5B2S63PMzkWg9ZFe8m2uqiFuYt4tLL9jwSpysSwr",
  "key5": "3HTXVAeCjUAJaL13t7U5sK8RZWJkyWuKSthkQ2TuZ3dDAMuRCm8L1BRRYePr1p8JDaHx4cFLSnkMXAdAYqKYMm1i",
  "key6": "SK9K4jBDmJemJCJ22iMtU3qjAjB5sdUu2zMpjj3MX4HzHKDbC2Yxw9fkrQZ75u94y1wvPxCs9kH9vXR8L6iA5NM",
  "key7": "22CNbT3Cn1kvVydtY5f5ydq2JabYNqke9rhScUsctEuCTpZoRHX1bgE69gy2KFbPVBV1rAQqz5YsV2axYSCHcddp",
  "key8": "4mhhWxDQt6zDYVzP2Uc2kBdaefBqCZkeHdwG9FaZDd882Ymo8w8CFN8ibgmDk9RDh48mMJrQgadVnmRNL1hbnuPF",
  "key9": "4MZVjoKwCdpCNkLuFzRjZwEer9PkSjjczKJuL3ENA1hyXVmrDNx6PLAx46fxBEacLgj1G67BGecyHgAroCs8r1nh",
  "key10": "36W8ovmaR4i7EzJBx1dzM8QZdpHtFwHei67UiMrtSkpbk9qD7LoyhocfsnLb9vs79Z3KYdak86Ez1kkARnnVM8A7",
  "key11": "3wk4Uyy5r6DSpeLQMvnT9GHotpL3qdFj1LY61DkBUqWQY5BmotZUkS9gXTTTrb77VLcW6MctD377LRRu8cszRVkj",
  "key12": "4ZwtMLcGShJuZ8CcGWBCi5CEFYGcdyZ7bLm1ERpAJAoipFsbDVf1rnBXB1AUVbp3hn5wSnSqWbHVuSp7pW3gb8SC",
  "key13": "gkgRLZNrBbpRdhcAMefKYiQZzsXANnXFGpYhQAfn9ybqnn2YvV5Ec2xrN1nevx7n2vCDg4aXTTnNTjagFj8sRa9",
  "key14": "53X4ZbPYN6SQgB3RMJAkfMSYvsXLTtx8EfNYhgAqGeAgr4znq4WFkcQuDsp7CJYE9Tt2adXyy65NhpJ57r432pkt",
  "key15": "3eRM1RuftPyYohyCzLuryuDLoY3bqHPCFcg83DaEzyTCAxa6ADptmx15MAJrxD24zJRcAByrVzxfsV1jrVXZuU4J",
  "key16": "4HAskrkzzfh3GrkiNz75YnqYAwhYKqMvSrbp1WvDqpozpWquvpn843MrrqgssqAxjseg7LdrdviTK1Stc1M9UAik",
  "key17": "55d9sV6uMi4Bxos3kPAXnFVuTXSPvkqyen1xEGSLJiNXYm5fyaE7K4DvNzkj4NM6abFbrHSreJWNwKMufWEJqyUC",
  "key18": "djedrjQFYpRaNGx5vWnu71DDzMT8SEHtZQEvhjvhk7F8iML3TySVsec6xzJfeU9PknnobFUK8ovQeCVzxxsPWeo",
  "key19": "5yXNmoroEW7KPn5eZpdg4vW3aMEncUt42xp2hiAEfL4huM4MZQWKGLpSZGhh1JdmJTVAP9MFgJrV3jKL468msfG3",
  "key20": "5UjuwYWCr7vxVA3c4rvH2MJZQQMJGraHgvWF3xk2mtrZ2nsTW9PfsduSfiHBcEWppoHHp8EDjyM6N2RXpNVbS1kX",
  "key21": "5SY1yPgGDb3JEXSSPxQosckkZ6h521oHmTSakr9RPNb73NBdapPYqRxdR3ujs7rZqfQfHVn58GoH2pUvEaKYAd9M",
  "key22": "yMtbDC823BWDPvYns8qXm1NV4UBgGP86ycCDEkWMP9gkFwU9wofk65jWeiN9wpyS3BihxKgF5AQ8oC7KuemroNa",
  "key23": "RXS9KonUcsLmNBAf3ScfccVrzqXJ5YjDjAsMyjv6ygCmHvYDgr5pAk7bLUGbGDT2S1eHNscrekUj3xme4oS7Ede",
  "key24": "5uwbogQwKs4B486pNzcyQKPKeq5GJA6fXHKtJzKQjoMWFh7ygQ7AWdY5rTTFh4skekeArHeXn82x6FzFrkAGnrdz",
  "key25": "3zEqrSMNyGWu9rhxHkgqCKccc5fToWoe52PNkqPrnG3yB7YEB5KagaVL7RMYXUDiHrnKPB4H2sibCLGkbrhvXgJe",
  "key26": "3V2iV4GodWa6KjXCSpWCJsBSDyGEKtxvEEAy3NBXRR1qZ3HSLx6AWTtmJ7VVRWUJGqZSVxq6QB2Yee6VDTpvXK3A",
  "key27": "221JpLo6WPuNMXFPwX4PYgDtY1RX4umoVqK4dtW13CcMMjMcoFd5WGobCCU5uWiaqSQLEQMc7T9isEHNYP36tpJw",
  "key28": "5JZa6JWk3agGVUWDQN36kTWH1J1D362FrcYkgQqnCaBVkz4zZknKP7mXG44FkVrcgGafBkKkxbX1y7rjvsdE1RNR",
  "key29": "33n1ZQmoEFjYAykV2TXV38deV2J6nFAaxLehjVWz76hy9Lf2k9X4vFr4soJiZiWG3tqJPGW39uup6o5LLEgnC6CU",
  "key30": "YLwDNzHi4Z6tfpzJowjro8QTyksafLZnJYyic7VJGTtFDAgWqyYdeVyTSpp6WK8ZfHfZBKozkB6SL2UVyY18zF6",
  "key31": "x49coRvftkjWJTXdVi4uuLRxZDrZ75DqoXcvG3PSSk6eam5Jp9RbPxeXnjvkcb1vSyhDbCSTXHZFJ3EQQuNH7T1",
  "key32": "3tECgewNwSm7DpLHzAsX2qmHAkNCoehe4bAzFrjnqwTyuFCjNJRtWMVjAXAcRAXHNJCYdeo1fJa3tr9RD4M9ajL6",
  "key33": "4VSLPG3GyhVi44h8KTUEuE1eUeV4PTCb581hjecLeZMdFtkUzTLjaYKtihKdGHA9hWGNHwk2wBnsiwErKiFQcoPr",
  "key34": "1YDr5vLdnRR9BJCbJZZakuCNuNcwQvUntPPmvjy6xXeeCmHsEuPai7PFaxMhg7mrpqdR1jX6ChfT15K3PDa6kNz",
  "key35": "4bmG5vkNvMC1w6z3HbXgpFZsU837mCsCEWA8ZcCYreDA2Y9kuFVpaZJwNYaDDUTroFDLGfSGPeNfrGPw37q3PfS5",
  "key36": "2DXe6hKsDSkm6z1Wz2QvuouzHWG9ajB3QAnQbKPEPJQrkbuuTHDVPZLA8sm5uCMB3NgN8RVm3C26Mx2tW6oFsxZU",
  "key37": "GYxrP6uXxq99KZbLCaJbhzobL7YQ39QKP55ACDX6V6uSW6HJrKGL1ToZZZJhYCPuDZTRBzmE1WscW7bYyr1pZ5W",
  "key38": "4nQsUTinrD7XTHSWzaXBXF33sBZY9eSMaooXjSNGBqwsHdHRKerbJpK1m4xZm3N5Dz5BGe21hu8NL6AqJ2NSTFxu",
  "key39": "GKmVwH5T1xUNEwxoDBqBNbVJrBLFApB2zcHWsVzWapeVQJjWzSLtzJ63ar7PRuhfFL4YPRQLbrRfqcW4cP1ZEaz",
  "key40": "44WvdM791aqxPX6k5gSnTAEwTGUqcBqGMtezwXmAhqq9KaGtzyv368QBNxhHioXy6AT3BKi7yTRni73otxhjP2UY",
  "key41": "46jntKYZjv2LWt9knJX5nCyARbGX9iHanqAJTwGzpprsXWtK2T1XnkxbQXTKaxci3gQRTdVqK1NJK6zbRHQnTXC6",
  "key42": "5boDLz8a4xajmJSw9GQZNCvdRkDEsgiQdU1Xf1PrT9mEXEw9YkgsC3zobWvzDdU11LJqDUDKS7VcUuFQ6PiKEFBU",
  "key43": "5NkkLKf8kVRMbT2MDYiLVJYQ41vkfN1QjRwHRC5CUbnCLAgg2wvECtx2FcntxgCfCVcXNg1d3SkqsGQWG57xvbDR"
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
