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
    "5FUc9AVd5kVdKkDmGUosnc1rAScezri1vYxaNdUgZuFfM5zcanqb18Y5UiWVt2QHGYY41nkWMtFkd6jrF1cLDWXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oQKAj75n8cekpsg96GsRCQTgxKBxrwatfFHR67yMRv7we9Tg3K6KgngEg5r96Y7hTZH2qvN7WEhCg3y51m671zT",
  "key1": "4DhHDAhYXNeAEaYuChLqutm8kXBuHPs3Cgjw61CJ9YucCGRXCaSH1YoEkZ7vkmrMkdsUx7KtVMYBj1AoYXrUrUSs",
  "key2": "LPpTxc2WsrRrxHMSHLQyU9GA692miW6kGYThjeusii6FSB3Hk6yoDHgL4uWXXzfHHc3MUX7MBMrknSwHsy1JM8D",
  "key3": "2oZBvyFYurQ775FfKfVKn8jHYJjrFttTJUYZcJhn11x9eVByovKy6GqYnjGvv17eDreEAU74zKmDHBd3oso7jEzt",
  "key4": "3UHKbaACuGyVqoTWJu98HVrGjR1xWuFcSPmZRVWywwTHLf8g3H3PHBK9vWTEviNi6NqucXk6WC6TWWgtv7EQA4tt",
  "key5": "3ptLPPQnzrCeZ4vPEUQuLsa7Wh3dmTWQMSV7oqyEVGN6zZ27tSkQCgFyCwyZNcqwjzgeWrGLocExkwmP1EJjr8Pu",
  "key6": "4wRuH1nVNqMZDU7ZBFfKkqecSAjfRm8HL5tBhe3eDJdad57cS29mX4xqz2TCSqyqUvkRWK5MX4xK3JVPjanSbQoY",
  "key7": "45R7pNnhKMJtp7ECni6s5zDNw9JLP7oTf2eqtyrkeHw8MewJt1ZJ7tip2aLZXvEAsKurRcdJDNZWMkeW3SFCXuHK",
  "key8": "z6BcWveSzGkM3DarromWhckXUgNh2fCX9SSyLvF69NPQECwb5JqdafVcsdekPRpNWHUWLUSji5soMMaubDmyv9p",
  "key9": "545LTVNLox16vem1m9p5oTW5hn5L84A9MXm5Ar5YrfC9o53GxWm2mD1FkxAzRM2geLL3xrmC5S9gKYNE8Dfp9SrZ",
  "key10": "2bvPsJAPwy9rd1jEx6FHKRKustwRYs5H5Pt8Bu1wD6jR3Eo9Ro96tjNDSDt1Dyqp9FdBakwLkn7a6wWEeF32mv6E",
  "key11": "rHXstC52pJFpzv6kEG3RUoZmWeQTDj5oTydmeBNwSz3eygFcVqKM4yksRmrHHsCRQDxrif2nFRLSDBdjQwv8MAo",
  "key12": "2wtfj8XvLp7FYq7FzJqyMHkeCEQKxTJ8Lb8Y5Z9Sz52mxELghE3xbFEsvNd2TFiHBaQJUSPeizDTVwSa978otjMo",
  "key13": "2gjT5CF8KbX74Dv2QYx8v66fA1uUhDhjRJ7ZK6A5SkaccupdKzXkHwhL8WjinGz8FobRxkVFBhatKKo9bBmHr2vR",
  "key14": "4ycutvSiA1wNFMhmJdxYiNAGB4JAJcvJjTSsrPg6ySFo7sxzj39ZDwUeQUJKWpYQQMGqB4dBXJaFX7JoWFbCTFwt",
  "key15": "5xWnErK3TyfnmZ6a3MMnAhsrYUEGtbYjZWv3LWCNMkV5F9A6kfi5jpTXnmxFiWKY4GZ5sWxctRRaKcNDYrDe8eVE",
  "key16": "4v8xf3x7VbXgoiVyefC4fX3aXSZ4x6EptWS4oTVwHQjRiutt7Hb5GJ2uUrghTqzSZvYmfFtfqP4NyxjUS9YLyzuH",
  "key17": "5dsMRGX8eb5VGcNTbLx6AZMzD76pPhzg4a7dfX4Mwo7Tn8HdB2RxG18SRJXA4uowGigFrFqtHoGE4yK3tEdzfnCE",
  "key18": "2WMJYJBjHNoJbPTv8CCipfVDEFp2nj631jygLMfNqyCiHR5rNbEQv4ApQtBa2c4ysnSDbsLaW6o2AYZgWdRjPsGY",
  "key19": "5GooaL5WibTiQkceSKajYUFX4tCbSxiEsPsDqYfjMhtWsi3kpnsMdSQgYkgpd89PYHYb7AptvDMXEm9VjrL8A1ub",
  "key20": "33VnwdpCC6EpufJxG7FCcdnYhVbuVyciBSqxLatc8F4sgEmmE4dHA7XLYMGqrbyPFisMweY7oa4rvWVAEY9W1moK",
  "key21": "2J9G2cTnarZe4Nckdr4WmSG51TSbmpsLFAa3oKJnxbxdmeKkdvKeih8CUtZEcrirt8PXu6HM25ts6TWbttXrsw4i",
  "key22": "27pjEanudangFpmQ2isYNJ9aB1wyfzwgsjv3WBMmzVrDbATUxiYTjyzdHTU1Z1WJR2YaHVBBtyrVsN7dvb7LmVni",
  "key23": "3ggkUP2zcmymUitPZ6a5yg5Gy2ivtxqf2BNBRDnZJJKbsxqKr8JdK2Ed8QZu7tqhAt2jtwRRJ1BpmXnNQRbWT9ij",
  "key24": "3PU8rKcMhoGjRdgRpPwjxh4iNT4PQLPZ6vxXNKdQR34W5E4XMLu334mobXiYUSLqe17Uv5HCm1CpFheSb1Zv6SfN",
  "key25": "38DhDvx1QTuhUtgSA9ev4YgBqmmibBuxT7hNJzSPt18uD6871hyyAkR1T2XWM6TcDedwawkYo4v1nwtBHcsK5rKp",
  "key26": "2T2VdkATEpfM9bpbECGd38vPAcmezU8EZDfZ4c8eUWdzYsDZjvtvjb3CdbRUTorusqww3uNqBk7MinxtYPEuwaoU",
  "key27": "3Rqx9jpMyx9PNXqbadcP3bDPkqrVwAQrGYUUdaJy34qkyVghBJQjPZ4mPLXezeU7S8UXr43Y2R2bWX4Wqna8hrDM",
  "key28": "3Ecak6umWggfJdHiwMTFKAwbykUHK4KRR24LextadEwB5SJWfpQjEgFAbvY1kXXPGzYe7wTAaDHmFvrry8GttJkz",
  "key29": "uex1BrxA8U5GuBgxtpxN8MMFcvxw728KLYrQhofRubuFh6Wz5uS4mWk1RsSMkwZtvJKZxhLGADyTsMcfAfSCjoD",
  "key30": "MFc6oDVL137afNQFoSHqdR72JezwrND33tvhpW53fuAdtQ8Yn8wf2kGsGsPLbaCZE5bY3PgCnBFr3VxvdwWPKr8",
  "key31": "uRiSfwAJPhx4LehAZ73jTFpZgHHnK8J4YRgkbSEFREK15NXiu9wRwyfUuZniVDb2jeKmDT1QCAkb6HTx62ZN7TY",
  "key32": "5si53JxXu2tyHCU2Q3dV1PNDxn8kSN7xLTn1WncxRFaoiWiEiE4EhbvnjMTM5o4HYm2uxkuS4W3ksQUT1N9CfgMK",
  "key33": "E7wuGqgVTAo7j3x2iWYF4C1hHU6aADuPz8gQz8AhkfE3nUEMk2JWma7fsqBPYMvtdEpB54WeUKT3dpTY6osFhXK",
  "key34": "5CG9maCPmq2vcESUWtDUBmCUm7qXojMM2Y1V8hg2Umpex93DjJrwUxygdp7jA8APyYFPpTwxxYUPCEbNeuVZN6xW",
  "key35": "N6RsypLc62dVcRuDv2joWsmvw87StjUKEtfEgKcdreJX3KpkBnumCU1KZk1L2XcP8TUgRMM73Z4UqDUzbqbzvaq",
  "key36": "wUNvqQsvdSgHZniBLw3QqeSsSmXkir6dPHy1ZgbyXa3cCZX5VvY79z1yQGbHidePqvcc9aZzubyKbSNQmg3BiRf",
  "key37": "vr9NVAjiT22W1RLkXhSeptgKcEW833jE5F4pPZfWoYvzE9ytb88RmRkeGVv8CMkqc63oJ13Qoo3G38pvDjkHhFj",
  "key38": "2ne3cEzmCCfsD2SfpeKqSbZanRqRike2UffskpuYGCQZNzvdUscK4UwtnjrVK4ZoriMTYn27APGG7bnsNiKXutQ",
  "key39": "yDYg6xWiFnsKzqGgnxyWMeXG5DEPyPGZsnwaNRvhCG6UU8nqfowpepmzSoNad8Tu7Mx5cC1mfWHSn8n7PebkxU1",
  "key40": "5TF1Z13sPkAmcgJrjNiZGGpk22bQPka8QzWWaU9d4C4jK5zYvPudQvLbwsQuoRLEdAvjYZjFwJKCg9BuSMrToT6y"
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
