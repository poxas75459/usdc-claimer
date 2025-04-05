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
    "2okzanCipYSb4W11i7oJaLhT5nA8Q5F9nHN9CTcs2cR9qTUexADkfPFbGQ9X5D6XkrBKNQiCbrPqCoEqocW1bMkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TW7Xk8kyQh6GuBr5vN1KXq4EQ1grBSeexCrEXSjpAHLnYEqouF36hf4NUsbLqoob6oTb4djbmghMKQT8cRESikj",
  "key1": "48bFxjG7bVTPRkhbtdMsTgk2JEvUZ4DGMUi2bmgeKWUkaTVjNo1q7CfBEMyEY8nHcfGWeEu5TUFbF9YKdt8wieqc",
  "key2": "52LCviJ4ErDaE1jQVb7oAYVUs7ptg5qd6XtuQWZG1Z2R7pvyT62ATurVqoQYB7ZqgwRmsUbVYsJm9KduMqhJZRB",
  "key3": "4KCSmsqpuhwhjgKuYDwauV4q4Xn4HvwEPYbjgjp7e64E8XpmNbzi8Kv51bJGbKgDk1qVQd1X3w2h89ZNq4aXkZzf",
  "key4": "3HVXpypxotd7QN4N32kz4vFNdVbjJyyxc491jJArER6tzgpnG489jVT19ELUfWB4cuPsyDnyLbDHDEgGEpgq6vJy",
  "key5": "2zEWhXdxcoBW38k2AgsjDcXiLEQ9cRW8Wc2HgsgUN5HviBHWyoVKCioo13snSoUEam1LdiJR6a2cDeBve6juMik6",
  "key6": "3E5u1vMBoVoWUDshTcgdChKCXQMLewZ7UBPp4CPWHCUwMMPd2JDNrM7xh2sjJAHBAMUGx1BT8CuZB7ipv4WeLVNC",
  "key7": "3YbiYJuoM5o2Agb79vUmzT4YuiHUhyaQQVny9pWS7PFeKGda2mTrsaZNff6wYkTkTaQcVmRyPWEht1dnVQVvZVz9",
  "key8": "5rZYvsTTMSWLxS8kahhxASywxENCvLkqaaxNddnY1BhqANhxUxBp8iM1p6cCWam4WKJ7NVZhpT2Yo3ttQ2QB18x",
  "key9": "AVf3aj1rdp68HEo2VKzNxfYvLuRyDKquK6r1w6f21ebXcDnd76kwno6x22eDRnRCfpphGwMdNEwPP5bhSrwQKUF",
  "key10": "3vZrxMrfJi2j1zap25mrvmtbRrThfvz4db1LQX38NPyoU1zdfmQy5wLNfgvNfdbdqvASZr37vRcf3e2ERc3SWr3F",
  "key11": "hWAURBzH92CnipxToMRsahVg3CoNqrGUVjbqs5DAZk1jhzqcABBzQoJL8q9qgEy6g2gZZm3BgFWJQmy3RHnqECG",
  "key12": "22Y34KcWqsES8PsqtsFWYYEmf63AttaEKn2FFEFQXc8uinwQY8QpC3z7B9eLVSWjDcQnZaoo22YPDuJg165J3PTG",
  "key13": "N3vKHkSGb7pYcTkrE62eEYUpx84S9SxsaP9hwXeyUpgCb3JAUVKshRiNVYwdL8Son4Bygtj6hvJJ2vnyTeBvuH9",
  "key14": "52L49pyS4FLYwABeTCxW6MM1n99u5du7a3s3zTfN3PNzwChRyWZsVSrBNQPC6J3TisezSLLX23iLqjxFrzp95i6D",
  "key15": "4QsMbJCAZAAGCkQh11gMPHjHqES8xnijrv9XbaYtekBGLL5xyJseQf2Usjv3UJkPNZoU6CDwda1PbWQRZfRMuphn",
  "key16": "bpHyosXRdyjeD5nUEdp6xHEmS6JXcGzMR1rvR69caYRXBUQ37krFztdfpSQdb2LJ289ryM3JwPYhbAwKQRragoY",
  "key17": "5iPisb2DLkMk9JditoQEf5oVLtJ34ojp5ofF5XpqVbHeCz65JJpfynggLuGAUUmym1PULowVibckas6FVWjNLjUw",
  "key18": "5zmTZmnccLiFcTnd5r2as9WeFGVdJrLPzDcJ8E16qJDN1ApMhN6ch72KFPUHsh1K6mrGMJhW25FRPmAAv1VY2fd6",
  "key19": "2h7Rd1hGdYnRc1Y4HTcGNt4iASwryectzytzgD7hnQHBR6HMCgm38rqty2Sb54LB1h9hJ1QNGNEjyLU3DuJVqdTw",
  "key20": "4GEoi87cfmUvd1UdgUXmMKuVe4hobt58akoCBZp9igtMAXomt7yteJxkjpeDr2By6n16gCXL77zwFnXNz5riVTgq",
  "key21": "3p2zWHZ628jvRMDaEPB1Ao8XBB3RuxuWX1L5oCMKb5ut3mcoK9WKV6uPJVNeGpb7X3Dbo6qEUYucWuPdBeV5hR98",
  "key22": "5dsyv5UsDNWmnVvYdEwhr8VbvSUTgvBYc5qKvD1JGkxs34iNskEHexc5tEsb6KtVpkLmmjQiijPdzHRa1XX4z6fC",
  "key23": "23vidq1AzKLuUaYYASGH5sv4qKM5GLnnKNQHxRXjXccvPJnSTbW4suvtcU5de9PX73CTP2sVq7Mxc821Q8dsTyGk",
  "key24": "2vLWAd5Ppr5BcvyD99nVDE7HT43eyZTALQJCY6Z9rDLd45hoQVG5pBtinyjXwWgoLomXMr7bihJzGEEoTNvvRAp1",
  "key25": "4GEAst3wg5Mh7aDEbBTcvs8xYqsqovxjkXkE9nFfJeLWV81D798HdMfK4ir75pXKBiz5kPZ9Z1UEQw4a2ukeDhz8",
  "key26": "3ZhNQqGPtAMCaXtHGAVSxs5Nwi7AXd4jRHKcNVKnf4PJ5Bs7gt8veiDCpd6YgWv9EBGVRZhXLc5nLgVNr9hFoaX4",
  "key27": "23sHyDMMmfDevdpVyq6smF2RWXM8ehURf3ePvDPRkGpJmSt4DSNwxqSxDR2bNd8AtfBn7SdRhdJdewLLm6eLctiT",
  "key28": "37F8bhGY3i5NDLU27yA81Wmti7BTkvRgdgf1VU9inaC7FnHbaEmLDUgvYLYRmzvoTmD1C8VaXD4xcheNzekMDeBL",
  "key29": "3n5wyQP4qumTUXRA8gzTQe4dSY7U3qZZD6fwNpJSjzP3wnAFY5JsY4NJ5t8BALyv2rSV97jbmssZwBao27rWKGNt",
  "key30": "4H2Vae7rZyADyqFa8paHF4vpg8KzztPUFux7Ppp2EQNWvbqFCm9bGwtc6jarA8C5MZ11FFVXTBs31MY3fFeniHwN",
  "key31": "4ja4WyWu2PbzQBrcmzP9tJQGSuwGBc1c82W2zx67PZGHYnYeHsMbyW7ff3kmRJkogaKx4untpMMWsj8gpiwLVHtp",
  "key32": "3VgvHc572ERMeLtqvYNgjgMnqes5vsJgf2pkE283mHy6qyWHpYoURNufgivnR8AJe2e4uEHZS3qc4MaBf2UvqVhD",
  "key33": "EKecaULAeJACpj4FTvNRvuD3JjKn7RCKQTFAKSQfvveepBJAKSqQ2DYRbpcTDcqm6J9Cvb2iUbkakzqMZRmQQk2",
  "key34": "CcbUTmQCj1bYsPKPXFdeYKmirWJvVcp8EraTvJxjeQfniGpSttcvZvrjrhnuBQxEzdgaCybzDaoLTVpNPdBgaq2",
  "key35": "29bTKD73pEThhbSssjFwgMymgh8bPRqKQfA9oJrNNskeKUNeA1meMoTfGFcyRpB7kmT2NNvcfRF37VvDVprZcx17",
  "key36": "3BvC5m4mkdZoCGzHbdd2Gf66TPsYDWihpcTAxpkgLER3jSa6U5vCkrZ39PSdmzrbAoC3W6V7GipG5v7VdkH1tXfC",
  "key37": "5roko8gifNemWL8PYiahf3mzQwVT27CFtXDJuiLzoTfFkkBrSHjsaRMp6TbvoTsEU45HN2fFrvbUwzLyjoUH29NT",
  "key38": "3vysaJvHUmFzCeMt7hYxA8mESVvZjKTTDJr9NmiL684SjwX6GxW9w1Qu7QZxWJU3hcHVzqdndfxh7M2YbgtJjJ2B",
  "key39": "4Ks5FZZh8NHk8RzndjA9akxeiNQXNHmZ2K192ba6XLAdP8eGMvtipRCSA1RFMGcwXo3qManqcHLQh1xigvACkzir"
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
