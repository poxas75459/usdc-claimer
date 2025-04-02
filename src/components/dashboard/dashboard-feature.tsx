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
    "2hpDCjuwr7uEpJdqrKinrivcNGDseqx55vcnVmAJbigNqUdXhWVktJ2xGfbSwRh7FWjK11ZrazVGwr8ohREBwSBs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eLMLz8XLuQ3WNPvRkNmHZRj3cLKEWRbQwMWVYFxknoJ5PqFbdhTtMn9xjfJgm1y3S7TZEVh5eYbPdzgREwzFMtw",
  "key1": "4V5kmg5LK5e7HZQQ4C9KT8bDZMxvqgK5JBSe8WECYx2F8oFymcNJceHgJAdzMuzzvFmiPpqCJa46MdvfQZ8Grjwt",
  "key2": "2vA2K3TxrEXL6UN1c135riDW1fjTxLLpDkKerAvy597MMAnnvEXdzBx61UAn5GhrXK4dWMwWByx5w3owahyDVsMm",
  "key3": "tB8ExpAWJFRZfiPTb1b1KAmgLxWpw6TZvgDFiv6ZgDMJX2BMCrtTwznhycV5d4mYyv9FJTM6K9fMM2Tcbq69e7h",
  "key4": "4isa29KZYHjpZyJ7FTSs3PCEFcgPWbFMFRhCjPur7Lxq2kwbqCJvXkmmwHu3kkKaveAdVYnWkvewDfzvrCuQML74",
  "key5": "5QchdgQgEsgu3yqP9kUz3z8DFFSMxvpM5cHioQbRTGQ7e7ynSCc2evjDfzpfhw5iiSGHTuHRugtFLVnbsvoRv5Qw",
  "key6": "JQc5T8vcQQkJ2e29KXPg912KivpPLW3QSMFFZheMqV6dvwNWNPbiXLVwAmBFhWy5bxTmnb66jB5YApuvLhdN3wp",
  "key7": "3Uka2zrng3AFN7857srbNc5TyQ31YkR4jwB3HuyMjwYN9h6xRJAVn5TtBE93gr55GhpPTWtxLpVfEdngP6RtZosX",
  "key8": "5argvpiZHAwnTP93kequ9K7pkFW4amLQngLmTmvS6TRAbeWnZUdp3PC2XQgwbvuD5BoRYCMVHzyPwRNHBNaAe2Wd",
  "key9": "2Gt6hctqiBazqvfqz9oJdW4t8LmcfVkS239W2SzeRDEEnMnGw2cLfmWP52GhnED7cDdmdmj1kgsiznSKi6UmsG7h",
  "key10": "4t5BXa7ZKoX7DENS1oMFwdgUUFqjXaPSgXCLboDDuneBgMxowrRReEtGs8qFZHYVEAN62pSZw3z1KDmRv7BRjvJ6",
  "key11": "3m6GtXABAqMTbrJFFbQAyXMi3pVJ7Le3mdSrcFEyykTAPfuLnxGcKSzd4oCDrdPU4gLkm5EQBLbDxtioY33dAmvX",
  "key12": "5ZevwJ1mbGgphRYmtB2C9wpLNbgCrnv1xK1v6ft76x4A1odETrrh8VfNT1kbZWHkFduzN1yaPqYRWFWzvcCsxZBy",
  "key13": "4i9XUrjVnsC6CRhUvnEWz71UEFv6LywKezuwUso749Rd67vzgCh6yH2g8yBB6ksPC8JSWL8WaisDYyzwsERgWmbg",
  "key14": "2pZkCpSd3hBwHw1DkC5j56NWnQW8DzzC9dqRBggQ1KqTn7WCdVCJNGwJZLQoFUj5kc1PBiRx6mFeK7YW4gMDjgvZ",
  "key15": "4pSEuEeuZNoWe5Bf2FbKZ2TAEDh8TsFioSfdMNTTa4HQYGNHxhNVpP3vNtvmzSMhLyGzxUeRPyE1gzdV5WnuAE5z",
  "key16": "ZRNugFK1AM5zHoWpdZzKN7Kfgn4fT9LffjqdFJK4HWaPXcaFTe9pTFpiuqtAQCFnLaGT5vVtNHW1SnuznhDc8Rb",
  "key17": "5sgVeyYEr657WqSZvVxRhk6vx3361ujevBEc8iZ91QixYySvSNjns1hLU4C9qMW5H7G1NqMuu2NytcfrmsW4HdL",
  "key18": "B2tB5yoBotAXZukQ51kGkHKTrEnEw7iGaZ5cnP4DEQFbhFhkU9hbMaK9JwxPGWDEcUs7CqqWRQXL3TAhfYVXfdz",
  "key19": "3pNdMSD3R7LHEraPRDVdNgGNJHLjKGhBSpDPSNH6vZrRSNWk9sKaYeuuYCwZypz861S1PH7pq8Hy9zveZJ19rUAJ",
  "key20": "5YB2cmWHRSCPw84sFuga9CNb5B4JUUBtQx8LiDEX1zswx7NsrVWVhjWbaaSpewCsbKMT6hb8X5gA2MCtDT8PuzTs",
  "key21": "4JohMvQKTi1yZFezhb3gHdYimR7YMPsx9meSxJP4D8DktSkbLMejNBcWJpY4JsXLK9sPT8ywXRkYXMPgrm6SsCEg",
  "key22": "3R5Lp3Gng6BCaFfsgtz12MF3skV3AxTWPYGo2htNmLisUiioaR9p5VdCcm4odi9iDb5LKmgrW8basmM1wdB1akmE",
  "key23": "72uRsBA3WpQD5vjSHiuzcpWe9qerTy8Ek3pLdaqSti3CPtBWAJsunig9oQGd2n3VaALxsmWwE7sXLanhyAttigL",
  "key24": "615qhB3duxhby6LZaaE8fr8CNSGdgPjMrspaMXtFDeKvGTvEDeavTia1yGXnnFbBFZ6bZQJLYhJroSJNua85uNep",
  "key25": "42z4zXSKsPrZSkgT4jgH5xBPJVB9TDhqaYwHrm1jXiwXzvh34XWVDmxZYnYs9URKR9CJ1w8jGqk4uZUcSvkVoTfK",
  "key26": "5Dy3kZyk8AZj9w1yqdr5UgkJJgGxfMF6oF9diCGBWYFcEsomJpBM4VR6ofEAY4TuhQ42944q1ZJB2xRcGLwzq3zt",
  "key27": "2RFQ5B4EXZj8NBnTDdi598Dkf4KnJiQsBmogUk8xyQ7GnvBcyHs3Fhvz9nXtPvkTPNyuSox4xiCWR8PX4879tSDF",
  "key28": "2LdzTH6btggaFrVrkXqu7q1VYVAVGygffC2UqU5WUHYzGow7HbmfJSA3XkHjMMHXaDt1cyNrym2FUTgUGHmGAbye",
  "key29": "4SDPraCNBQgr6GZe2sepf4EMT5DKCYAwKdHFKZqPsdEb1d3JYvc7bQSbu6kCRWemNqeTmgWZAztjCCyM8FrKhXdf",
  "key30": "911CuzXeSidUrDoXKevH68VhCCzo5izBoeYQTLXe3q6L54SbYACtX9TXdzQ2XGC7mY8nqt8spA7gAC5fZJTg5yf",
  "key31": "1TscNVhNg4YyaoeVY1CJgoYuAAwZ6UdEkVZ9je5fv8VH4FoQ9rmi7KsuKVf749cvoJAv2doJFfZ3dyFr13aKq9S",
  "key32": "4LrXDehdEsU1maxtWFLERZNVntvLYVoAgmCQriBhQULNpn7NnAKr91FK1QQrvrjXKb2DvAQ7D7CFMUEvUZGcfZF1"
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
