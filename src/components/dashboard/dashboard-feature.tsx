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
    "WL69vP1S1qBGfdUjjZkbwQ1CkUd6mDamy3zr6immFSuxxyo39cdsgWJrC328XqEXTFEg2Et1tnQA826hfr1j6qJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FtzmF9E32moRo63xoTXCNuUPETXLChbzgb3T83Bd7B9h73GWDMV8CGpGkpn6tussHE3je6hJnC9bmPaPwKRcdCs",
  "key1": "5e3ATG1DsmHV6Zfz87u8AB9bYbnEuUBWYdEQnsnKLs7Uw7RpTfAMKboM8T9CjqTtnUdS5ceKZiMbdQmYSMZ4Em7k",
  "key2": "5J26FVWcEWSoRsLxQs3u9xGguqQKw3hd75Xjjz838uhMmn7Rd9J5TrSVh5YvokXYYjHpE8QQF5yLXb1SDGABVfa4",
  "key3": "3mDdwjPhwrQ2YMsTgkbZn71dGHhpACwneBUykEppKt4mRM9SqGFbSKVNS2S6GCLvGYpSEiJdK8pvvY5UM1ASjiHj",
  "key4": "5XALzmQgFjCDbuKUFfYRD72C1mnzyqBEry1HDdX9otUXRCMnStr7kCUZE5p3di16rfrUh21H4UyEdu7CxZy66BsB",
  "key5": "4YBKKQ7j4zmvcirFEciZGK5z8E8fr4Fmjuj8kDdszDMpgSvTs2N2kx3wsw4zS9Pzq5BcxiQcaTYfnznjW6Jwc6p9",
  "key6": "84yCtVV4rcThh9jLQYDQTkKYJ8vdtdE75w8YBqhG9uRaLnhNyt8VkaGdn5ZVNyXXJTkHKXsrJDdcMc6VVPivjq8",
  "key7": "4NHQneNB1DA4dz4iuuVBfJ5ZK67cKYefiGWe3ADQYZ9NvBawKK8J7AqARxekDdrspVr2E34jPQL7jvRw1TJsppoA",
  "key8": "3HrbrGbu1ywt6ECNN4XKnt9sD3ArmMwYHbXjJQ2dbRg7xHJrHmZVmwVwaLW69MNgFuxyEQNaHCYcwMpLqKKoD894",
  "key9": "214ZAM3aD8eC7jaBkf3bnzaBqK3f13fvbxZaJu8V3oHLfu78XwqRV8Jc88aXYCUbBzN9DY67VDR3T7P4GR3QX5Qt",
  "key10": "3hGXMbKvbE43y15p82QfuxwZggDjAcPriq1LrEwcYtJDYhCvGKopGvWGb9uCiLE7uuJxc5Nd957jvSFivsEeXJWR",
  "key11": "5c4T59TgGU1aFThWm4CtVrsrEWrVbvJpaWPrREVk5GCka26RseyL3f89nYJNqyaQNoCQQyQokgaN5ur82hZgFzTn",
  "key12": "3NRRfYbJg8pTeBgMrGMHhPXqdFUR6jBBEP8Sge7wJcX6TCpd1KJcciJpKS2pJj7P8nkiB33bVgEfLfiQW4MT2JaV",
  "key13": "2Ztgwt4SqS5fTv5XBa1bYus5MjW94NnyLhEtqQmDQFQ14VohYDgLXh7dAKKtpMtt9PBTx3naTcx1cuDb4PCF5GfX",
  "key14": "2uNvkfhjW8DdqwtsYnwQWaz3EykXxY2eYC5k37DwAUzbBNuHSUAHXH2QksGYCMNZvKeXwHo7FryiLG8aUpn12dGY",
  "key15": "3hbyuLmucWdwgRe4HpCDVw37UFAgYkWoere1CTbnJLJFpheyZTudANkKPyFGZCdMmNzzLfVad5oMWVE91PF5zFCS",
  "key16": "26z9FbW9AZFudqcozPE7kEAeDoDj2meLzxnLhkqj4FjEnEdV9oUmoxnR4w5SMaidiqoQi8kp8Wa4F2xDS4SBeSMo",
  "key17": "4YhK59A2CjcChbmbLw6negNavN4M7u1mVYng95gwkMsKddWBT2ZXyid84a12cW1S5fLyvrS2Tx26CkHvqaTRrnyy",
  "key18": "2hc6HFYSAmMy6qHsYy7vDpCCxGNCRQh5P5EPxxNCy8mxZ12GfdWadpVveuV9rMGTqTZnkHdHH4seqUqxN4CpdBp8",
  "key19": "5A9Rxz4TN8K3pF2jhV66FyySELcE8ujq1ACFHTAUDvTMSuxbLB3yLLZCXk5VMUYo97DzzRxgmQqn9rqQagnM4Lqh",
  "key20": "jXddkyrRPZZTKejzVJP4LE5CN3V8yv6akRsgb6Mjoi1XKiLxxyt6vR4VQ6paeSqUiEQdPaoyXAuVtdvn38KbeDK",
  "key21": "43rptibTbqrjLct1W8W8JjnHn9KHuW2BwDaqS24nhqp2NqsYaZbDLxh4m3u8TKwFvzyMX32rRiCKf4gwdgw8zBiH",
  "key22": "ussKTbuphVyYQnzMQhwmCbe1W4GiMGeQPXZv249hL2uua1bGtWpSttvzxd56Q5zsjmJThrRF6YuA3eRiBiRqbtF",
  "key23": "BQUkvyqUbMRMQDFhQ8ZvuV8w6H3oZeU54ysegc9ry75K8BVLVhYS8cujfSiFUPu7mYd7FYo4s15uQ5wvs86JaSx",
  "key24": "1PU67REydkuNL2a97WGsCAEnVcRiHgVMterWvv3vypfcktBif6JWom7S5D3tyj13dHzJyxSUyEFhYSwdANt75bE",
  "key25": "46zUsrk5mF8UihJTo67zDqtMWfB22xQzqLWHxjYYmdZ3qk84RaNfMQAYNXUqhWAYgZkTaxWjQHUDc4Mr2MHPtceD",
  "key26": "2zZpT8JRt3tk4AZ394zAhRFhob7CC2exL66KPgPQn8Pq75chB8dY21Ff5tvCsw1qTdCLz7e4KJSA3X1qjM3yqbyz",
  "key27": "2zEen9QQLrL7Wu7bqXKa2hWaXDFALNR6nhbFAxvFdBy3vmjwZNruNaCotDwXcJvWAu7nWJLwN3inaiSQJjoKC7GU",
  "key28": "3t529ZY8d5wMHyQt647PUwsptBZHSnPAu4vYAw8fKLxZDCDWHksjDKdcv9apWgDTeGCzepiGmT9TuQLguyBQYNku",
  "key29": "jrKxm8J779mnrFMds7N9ujJS8WAMQFtmfPQkSorQUJQLNcsaeuigdjCUWbQyvd573Ty9bwuGzyzCEtrmoMnBBuq",
  "key30": "5qfwDDShHhHtA1YSE4radTwh9fsaQbPCD5NNJ4z7wkFt4w6kyuQgXe21D7wXieMt1FmQ32H16SWTWfmD8G1C2ivV",
  "key31": "jjjyg8AzRQAM5LGVFXGduz163bovPs6xLkwVRWUybLKPwaDVGAemCv6TA74ftUxwSBnKWQwPR2cRsdGTz6gshZV",
  "key32": "qEuWUWNF8Cd12oQBHdVFoQoRMKg19LW6KtmAnmQkUywKc4GMFKu8DJMETDgoE7dffCrsHxsxqyGQqRogGysgzzL",
  "key33": "6CCbg7QaqsMrUN5XRX1ZpveaBM2267GqGdf92FMFoVbgxoqQqv7M639cqzYzdRULZMuZupcTDidjjApC6gSwvSn",
  "key34": "2aeHYCufoRYhpdeQkGBj2LvC6yESZ1Ng3C4GJuMFFXnS4rMTTYAnB28Utf6y6W1Ma9y5ErhhR3rJppePB4GQq24m"
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
