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
    "3NvQfhHamUn8M512RSqWstfkkEddsQwb5tw3ACPUrZ44DAffDMLmDkQSHPAC7SzSWtrpNcXYTTWrcX3jXusPWyZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BkFiwJVa6WTCuz5GbN5MXh5NqVciNz5zBoyCujEMcPTf9oB8Vw5yUfjKB77vXfNoebnsJErejijwK73FYKbGpTA",
  "key1": "2R3rivPXeJgqGzzMxpNMVHRPTmcXrbNJfpUPwbPdwJvfUE6D8YNfif4gFv5zN6ShRR58v2MgKrXLnPm2MkhpD8pN",
  "key2": "3JR82TZL1EZsyAFJ3vfQc1nU2zrf52YSTHo5S85wvv6FF9R1gn4UpSSXtD8dDFrjY6WDur6GQc4PACVJ3thFM5Jw",
  "key3": "4ZrDQRTCpCdDUFpRkkuXCk7nvtthb92TsG2sE2dh891nJ7v93aFy2Tbpt5x8WQyizmxrHKwLnerbcu6BBsfLZC2C",
  "key4": "7kwVyaEqHB4sjtm1SR5YWqSHqzDa6pWnYr6QVv6M7Hv4Y77DGQDLkKWT5eqSTT3U1TRSs82PKsn76nu1dNnygPr",
  "key5": "2XhYzWiVUFx37vrTdycAm3q4fuKX3dawZyYxE8ZsRXbYRZtGgRLESkLHPnAukEtx7ESBqNRxXrMkLjcT9mE2c2ow",
  "key6": "2r8QLpi1MTvUojgHfLW2JUXEQdKXrm6QqVGfoW4bZTSKewfevhyUFVcZrpoumxbMDkNEdPeKGcvJFnWtcwUrJJW1",
  "key7": "RLQSnr44gqmZnhug3VDunWj6MQ6MyYjTrpti4f6ch6j2G8s1WLvztUuHx9jd28VW2gtXy9cR5gHcTRmL9Qidjzv",
  "key8": "4VXR2DH1StwPqWJ57YQTPNWxpSaaV7UZVbVqhKywSjhykV7WiRvwVHmqfWaVaE7yzF4AwesbJX8nvE7wJ2Aer2yM",
  "key9": "5S4FCk6A5ExfxXg3Ri3pCC5dZVR4FhxDLhQFubHYNJXUxqGXuzLw6uvS3933Q9N5jkTeEk33R22MDCHuijdnHrPA",
  "key10": "4GYk6mTEj3smAJkdmvp8Gqu6GJY15ZhocYtvVtibZkQza5LSCN6Mx9YbaEgzjKe532VYE7568RZdZwfi4x96Eb1m",
  "key11": "2LmMNG67wDheHDXnUU9EEXk8hwrsJ88Ky6NHawJE44p9z26awwQgSWMjhzecq7x4JRMXfgLBc7RBxTucEhMBj8Cz",
  "key12": "3WjMN4VPgfzf8WHpxgFe721EZ6Xzew5BrM2N1Rm9WoLa3UregzqRA2YZbkbwuwA9YYSDxcRmtUdYCF1csLRjdxBR",
  "key13": "ci7oJ81jXH3E74ArVxW6moQgN8igrnZhSKUJ5QsyHzoVmwXM2nsrEo2hjyypzpw2EzDRusR3uZ3raUUSydbVsFV",
  "key14": "3fYiiCj5GYK7oYXvaCMHrSpGsbLHEmJfaGh9CEG4rF6JgAPU9VWVSGNX8AcKwU9f7c5gsuCQftQxYFC4HhnbAwHQ",
  "key15": "mDBF956mVxaH4V4gGkgRTxLtqF2J2cvpRF1NDsi22EchJUf4rdM7MxdZZwvotp52U8sPWXZDGdnmFbkv15bUfWU",
  "key16": "phZyBDtbmq2XN27XnCtAp9P3o2PthYwqrpCwtuRknQuRYN4tiAWkeDnBoKjmZ9kU1YEau7SWi78ssnABgvwnc6c",
  "key17": "3Di3SVi2m18qfdmn4cWfyCGh2peprgskcmHTy9zFvZq9CyCvJd6XriF8tTueXDc3hL7oxcqy31iA56pr76yXtya9",
  "key18": "2JZEAZ9iQSJ9uaLdknfxPshjxry2QVaXy7mqzxPDp1B9kU3wCqwkrnn6U46e4EVQ15Gpg17CXhUTV9Jj2mwdWfNt",
  "key19": "wmLHvSDPmqQy5VaTf11KVM4V65jBfDS7s4UKfycHHoBhdHZ7WEvJ6MzKERMVmmwka6QhPwU2eVV8kkKiWJDNh8E",
  "key20": "2NCAzEUxg2vSZKMa1NgKQeS3joJw1KqPWW4ZSn1t5YmfE86sX16aZpFqF2uUFLiSmyKjxSwdaognep1RtM5KZeJD",
  "key21": "3EQrAKDK4mtNpQ7kfNYx7rxwJeLiGvpEpkuy1LWhvtrCuRUjTpAjSrs79BWKtHb1rkuGTh5RNK19zkrnfoH5yLWT",
  "key22": "31HV5xXXiykxCr4GruHrzYFZuo5o9hs8pLaMYusYAuGkawxdGPquoir1LZvopHyVncQBBGiBWSrPzf1K1optcMD5",
  "key23": "3iPGgkSkmkWx21F2W4e3raDeZQgaWy5i26RRckNqNFtNv9tCPQrcUanJJaTvqfQ1L5dFzALcxKRvHe4AungiLWyK",
  "key24": "5KaYP4KH9PpgiYLDiTN5E5gGcS8DMW2b5x8rRtAyJUa5xdgb14criQQZMPTQRJphnYYTfb8o1cnipsEPyrKJ9LEV",
  "key25": "mqyPtVc8hw93eWfbFN1NLR6LxGoY9YLV1cc21TmshvRAC5NpzgowAHyy13XeRNtsWiNGypnK5PyRwhburRzTAXr",
  "key26": "4U9DDZfEthtmzNRWdqstQN1WqR53pjF1jZNzc4NbdZcUDXaRkpJCpUJqrZZao3YTeHsXYwu1YjHgCnPNu9Kw1Y8s",
  "key27": "3ai5AGqCJttyRTvGggEbwbY4fnRkTby7AnUh4z7piCW2MHZxmS6UGRBnkseZ7XnoXA5nB8QPCzuGtbjo57AUXdGp",
  "key28": "3JnvpznFsCsFa7yrRyf4jBizYfAKCYTRC42QpS3WZcFwGFAgrNCGQp9wBY2jSrVMbzzPCovvj3TtWtKrccdRZ7HC",
  "key29": "3q8m6oqCzkPFkhTufFetnkJcJogu6XF24qbh55Aj7s5u7LuBWd6BA8A74RKpEPKCU5asevZYRgL2SUNtAitzQJY1",
  "key30": "4S53x9mZZB7fzSr3M1a8pdjKobxo9HS4tbEq4C9WjraqA9Bo2BsuFWxmYpCgWdraeU7hWoQ341ofh9ZDHxefNhGQ",
  "key31": "3FdvNjtmUebmGmNU7CbCvw1TNLfzS5renjhXwpdkMbbK3SdWypzP679oYbgku9jq4Nv5FqEsq9FLboPb7doTv7Pm",
  "key32": "39HGuYTWtiZ2y9NX6gp77LTkddJWign1vu3AAacUJAmG8UpWcSLCbetVtoNjC4mrYctvXmogXtBAXyMsU3eyCFpE",
  "key33": "3Q9i1nwrVGn3JipicxgBhKDyWeJREZezYZ2uGTvEqr1PQor859xsEeDY4Fi13swHPXpZzVc5QRZxjaBLpSUMuVFv",
  "key34": "xbmFoUfzwZH7ibygrXyxBpjbuYYYGohXhhkkBgHzwwxyLnH8RrgVikTZk3oBqgBbuytXC2vGXHtHzUqGfF2XwZU",
  "key35": "5Mqn7u8C2eJoEKsE3up1hp35cqKfSNUjRbxpVafFrXurB5GYiHVQCJCvm4Dio2UhZ35wF7y3XYpT4zk38ULWLBHk",
  "key36": "sT12DSg32KKCCFbq9ABNfXLPsYRMhELv6zpncGT3sjvCVrM2GZeKWKXBH4bXNiov3q9vMF2yUco253dYbBh3ukF",
  "key37": "2iL8qygEt8eQvyY2Z8zgxAP6cMm2qob22CpLv46QRVhEvtU7h7M5SDYt3hYkQuKxS2xGzL71Fnisy915de9XBG4V",
  "key38": "2LhJg99QXtzGqAQdYuT2MfqyPR1TPyaMhJu8J9AodLvsrGPkdMvRgT7zXun7ziuVawAuyrWgSyiZcyPTb41Q3Ca5",
  "key39": "4QthscACFuhNwAUqVuzPJttrakoamdkcMZwvCBGbjTYU1dP21HrtNvRWphyJjGZHiER7kaJZ9NgcvQBxVQ7uHmAQ",
  "key40": "3JANFvbMcTJfTeJB21GyuHY3NQ1eKntNgg5ZT951W4ZBP9e5VNYFKvdPfYKnKfARPxmxsmMkUKQmiyBB9jLGVEru",
  "key41": "4Re22uiX5dJ9nFdU1rHY1TxL9HPKFhShb8umbzzVcyKjFhti8EU3FCNWdL4ZfMePBPAYZE8hgFWphp6aNSf9jFjV",
  "key42": "Gqd5J97nTukgNBB98gUNpuWh79yyQTrMBLsZAGFBQzGYg1BvCzSBEpxUZcqr7PS3PEcSXUgCGUki8sAsPNzTgD6",
  "key43": "4ytHaBZ2cGdVmAMtWtDKVTCYo8NzZWjApYRMxraEQ1MV8jqEpPBvzXmEdpBFTRbWfa5m22tiuihpXx9cboSc83mG",
  "key44": "4frQMsphjGCrFH3re8vuf4cBs8vWWuXvBWFR98EeytqT5C58jgGj5Zy9uwA66y639qgywR6vm2gnV283sdQPTFJC",
  "key45": "38ChNnGs8bqXp4AGJtKuwctKHQHRGaKrKWRmivxoXuS3my1gBrBk7187ektMjfDnu5XS372e1Ffma3XaikkFXLkn",
  "key46": "243xxFFCoVTYRrGhzz5D6oYM1prQCbMcaquKsz6vi6AHWhxf6ew9H7kEhWPvsmoWjJz6RcbWnZ5cqutGQNfxTLaN",
  "key47": "2XCTBfCSpW58Zfna8Ya2bKqRFruCK9mi6vjPjiu9VaHz7EXhjPMN4r5SFjzhfVaLe88zcSsm7nhe87kzrA6bRYo2",
  "key48": "53kdMY3HHcUGW2Xb52GmUYWnsGN5NoKMCbrwNnWvngcpg52rz1hkU66VFb2w6anbQPaHFCsB3C2c2nyQBAfuJEgo"
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
