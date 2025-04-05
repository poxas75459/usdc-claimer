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
    "5jWifz8fAfMXEfTtHZg4yySJTKmv2XL2tP58Db1Eg4D5bLGyUjskaNqLHT4eKmJSWR95a5uBXC9N5oczf4iL7yjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udYWsAqQcpAbB1MHxWtvpQHJ1fyQouVRAs4QGyma9h44pYzbXez5us2NL8JstRtc4i73AF2iVMxpJQg6cibe2Hb",
  "key1": "5X63itDHHuDCNAh1Qk1jUL5z8KDTkTsG3n6dUtcqx9SyAK37kEqobgtPpK3uq9Yf1T63ehK8fW34Fu8R5o5YRj6p",
  "key2": "3V2uRY96rTWzeis2iprSCGakD3MAwe6bpbit9AdKCQ36DiV93n1GuUFEZqHqfssEF9ANQon9hX2LXm8JDhxFsfbP",
  "key3": "3UFoMVRf1DDzWxwd2TWrXKdBBv7LFQmDk9z5vHELqXevYcWZZqFWYNyNxaFDu8Bj5rB3XCbnnCvVMpFTsz9YEFzP",
  "key4": "2MyZkSxLgXWvhiEgittTqc2xtwknkeBthadBD6T5xXy2P9XfzXtDGMU4TNB3Rkfgn3PQWdVSnt7pa7jhi7azX5ZD",
  "key5": "4Y46v8kmMVCjeWhKdzDfhTTW49cyrtXrn4XgxN5iB3n7eXBxscfSaHc91qRQSDpyVyjqhNgVXgpRdMVP3FsoeMbe",
  "key6": "3wZ21b9VVtMaDy71S7j1Hf82wYMqJnCo3FteZPmLJKGPxnvXbEjY6JUsiQBFCkWL687kNQYmBtwoJuNFm4HkL3dx",
  "key7": "2VkfrsSZnuWuMkn4tWKtfW4BrG1fASmSKajeynQmw9KRCbe59RjpPU1b92DgiCzVca9urznDRGswKu88Dwv63yhN",
  "key8": "25JvTUB5eQJFeeBvgThy8X6UiT1r9vLkGgQcdWesLCjiKKQnXob9KyVwyhw2cgb9mwhppiBHaVoD9Cn5QpRaVNmr",
  "key9": "5WuH6HdnTeCTR6xJ6yXi2QgfavLSYe4jED77WDTBB4QQrTJsfcLGiyocauSFo2mTjopbsBDYV6teJ98h9d2KTcML",
  "key10": "3yjegMvWgtjJj3pLVcunV2MatvC5mYf6Eh7RDHRRVyzqfZg6AXuvy94AmrheRagaN7444shWZBcfNK3Mn6t3EY2z",
  "key11": "3mQRXgkWDjEAe9mZvje6NgugyFv9y2a57neaMPNdiPwJ8K4re5oHGALtFQXQytcib22DutXRhjBWZpy4vnRWXnYC",
  "key12": "JbgnGWYYpYAbPmL7qokamC9x1Fuhq9jEK8p4gaTkD7D4WKg9XXRkrwtAgo4NJApUqHjy7zqHTZiwraiUv7vXAiB",
  "key13": "3y5TDJyRzTWzz4v5RhFLCYCtLPQas9FRLPe6X13Bq3EHci6dCF9WPA42dDK6XjnZS1JgppXoDZDzkbMX57oPi1Da",
  "key14": "hCrmnutoRLKVe8mt7JE1R28hi8j1MEijcYiSDDa3uyw2FqjP72DzmGYdqWmSEBi9UrUJW2R2SuZAuM3E3kaRW81",
  "key15": "2a2cDV71BNwhc4SsxxdMSwtGEgrBUeKnigJPwHjGb86W5J2uQGbNRg6bewbbqQis2JtzYCXH4vF3mjmT4T1vXtHD",
  "key16": "yXtXUYH81qGJsGRX3w4u38LdS8bm12fGBK93afAsJrFASd1zshiLMGQXUpnAPcwZxxEdwqX23NbdAusxeXbr2fM",
  "key17": "2aSybypYianbwu4GSz1yUYytLvgVAk8u9op5tSSUhMMXksnTgtFZKzVXn8TweFtrjNx8mwqKqSFMfsC33qRetA8L",
  "key18": "5kEDHasd7TpZDFQVuDyicp6y1AVghyLFDd6zXAvK67x9A23HPabcw9P5DKowPWYyKQVHu8QmrAXtrbTC5WkuArZ9",
  "key19": "4UpkXVJMddWb2RvssEoph3k8RkX4YVaNXZ6YiSXDaiEnAb65mpCLxF2FszMfJXjtFc7CEM396RN2Qoc5JofvgYo8",
  "key20": "3YjE2NoSi9N5aoaCwuAoxmQU3umezwXCmo8379SVs2hNgnbAmMPeFkxuEfJT54KjpzGq59Dz2fZb8UVNb9hZtaDL",
  "key21": "wPa5avABo3CqkWr2biyGdLv5FGZ35syjPh5AuWbVdYqjc56jhVpnBGUFqRbcrXYtq76AtvYpyGNgL9Ypk2WrVqD",
  "key22": "4cDAhsRhkbg3VcPLuxHiE1MgieXxvfWih6qzbS8FU85D3ZK3Ehuce5tk7X9VxGRMK1roxMjXWW339HZsQrQY3du2",
  "key23": "5UX2pYVsDVM5Aq33v8F67Aefht4v8kipjY7eSFHTMsGbg917M5tQmGKcxnSkeX7vQCyERM9uNp1wSWJk3ucePfWo",
  "key24": "64zVNTubxtVMbN6f4yL8PCSD3YhCfVdiMNtbrWfqfoqFdqq8cLcxynv3gcFojQLRcVyaFwqgxDzLxRNBdTF6VHhQ",
  "key25": "2DdLiC7vEXzmYQTNSRjBCWuEZjdZfZD3UZT2Z7bkDc9MBdRi1AW5GcE78fva4TrmW9umBcMxyZLJjTXiwwVesjMx",
  "key26": "4kazSTRaRPZADRhMevQtjE2XEZaFcYmKrrASu1k7zFKiPrAjUcAv7sZAHqViLQBJvAe4JQzxH3U6y5dGpZiAnQXw",
  "key27": "2r1guH46H5c6CzTf43yiyssMqPKuJPEC4dvcPp69vD5SL5sbQHxZCPufgJwh7ZQRgTeZf1QCZJmsAXmu8RowH7hu",
  "key28": "222qcwVfwbY3bXmJaWD6EiidFsy61GdF5SNSUjrTbZkNAMUg94HwgHP7gq7UKjMgVK6nVdq74xEs57EDuKLXRJhS",
  "key29": "631Qy8FwKMb6giq2N3LW12Cik6Gt1nHPKkvjRqDQMjXHgD5TLEF7FfYexMnK6gN7Eba8wdqimHKhdezzW6FpXXMX",
  "key30": "4c5tocMH6w9uXne6MArvDbMTnZNYGNwmx15QHEdgNcqeHEZpjjNZn74dG388KFTPhQzGdrHWMuH8F2miov3n6rLR",
  "key31": "2orwn8LiwyAgeTLsuoVNzX85gpupFT2pbGXZPfkER3W96ddVHSVhe2ocizqyvrmEJPKwan5HuPwvMoRURUDAbwcJ",
  "key32": "3eRvvM3DG3Wz3fRwc8nY4ng8KRLi5o7hdUKBMYa68AG27ZbAXVVjqrf5UCcJguMK4Q1kNp8YiKLCAiR522tMJNAq",
  "key33": "46Qjuey3mjj6yWwjQnoNz4MZCusFoyyYx7jmy9jjAE4zJKeL77T45ZKb5vcH41fqQ5TK4YczxfacaR7NraSeb1HQ",
  "key34": "3TeW6vnNUpULNGjyLQLcergzWoKwtcrHW1sbvpJYQeaa41Mu4ivQG95BMNdqKaUvHEgsJP95ZArDuAb9AbhLviRW"
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
