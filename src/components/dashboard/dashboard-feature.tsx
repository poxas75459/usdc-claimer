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
    "prVRDsru1k9Zmtqa22vxRAhMeP7kZnTg9wx1Rpx4yaZxw8MvwsXTgCdhArXFZJD2PEpNBogAGYV8Qhx3wpsNoz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g6d91XMHKHtWuRgsbmPUvkuKChp3DvqDvS87bg2GKMh9VXLmgAMuEuuXSt9hGBaTJRmSAcHw8fE1wRph2G8U8Xb",
  "key1": "4GXg4dA8pbyMKCFyKMbcN4bCh7Jbd8eMk1xSknZyzv4ZQQpGgoM4RtJujFNS1B3u27uK6m4YnxTGdo8ZiDfTRR7k",
  "key2": "3PiRBxEPPe8tUEaanjHo6tK22mhk433nyokYYncwhdP29CiNnUc4EgaayqdtnPfAvP8tmLFshCDj8Z8XEb3i1u28",
  "key3": "4hEL9aqqrmdYYcEuvzeBi6Fed7tbhFcKwvtnRpSQVvmxu3o2Kkp5uwKxu2TTrXKwWBbPp3R7ak62nUMm8wsgi8BZ",
  "key4": "4FHZMJ1M8Twzo64RCAwEQzMEBLD4eNGm9NkVRbtL6PYwQPU6a9yEF2BCxC3saHGZbgz6zgZfuP8zGEFipryKuccU",
  "key5": "5BTiEpMMDDMTLkdFuwArmyySMN3Prw6Ko3E6cm6fiTncmUTCTpTbZSUauhijdmrYmsRwv9PDVMEzvu19eMtwFLgj",
  "key6": "jeXSCnwk8YiVEEHUjUtyJ4iL3Dwh37CWTeQLZpNTPZhDVTsCgbVro8TW3gJzZWXfnfqDYStc1nRcW4NhbG2cFWT",
  "key7": "38v6gF2hpkc7jKrxfEB5dhh7m2LaYRF6e6qtagEt9XBRj6MYyr4ErhSBP81NJYrZ9Td2GoQoWPLbUE1ndidxwj7v",
  "key8": "5RYC3y7QQh1Qh1j7HJhuZ4AaFYB1b9ci824kP2LrHawjjaX5tRRVa3ccm1QquZVvaPXH9yzfHzk1tHbyvbjv6Zce",
  "key9": "PU4mxA3PrgQ5g4iWC8AGq2879VrhqNFJvHMSpg67qMgLVLGeN6v7dW1TQqQMfiLHiGkXHama9mDzeJrdqGdtVJX",
  "key10": "b7Q21nMCUTxpVRPEUteAmmLe7PfHswa1mp43UuKxVmB2pTPyKnhZgjU9hhDkQqF4184pw1JfjaSPboE5yQxPdDE",
  "key11": "57nS54agwvBMtftTs61mN4fg6mu7ETEDwCpfNLwqaDzSKoHwJTFDrwhLg77Jr1a3TdfzBuiWV2rzdbDzE3Xd4g4b",
  "key12": "36NDQFn18ovA4r5eJnurVCDTXq3VviSQxWyUo7TyRuZp8r2dNBzptwRA7q2gAPEmqgTRcERkhAXLgrNXrP641RES",
  "key13": "64q8k5BJmgWLgtNi9caM2djjUTtBCv5W95ob1sZVebPA5s9EfqTEy4bbpzZUJZdfHsTBPFD5KnYhgorhRv8fe2xh",
  "key14": "3vh3fuWxNiNuo3WskzEVJiVVrsSqnLGn8s4d4psZbTZzD2xsem1AZzBhq5iXqcxymrSdYaiHSswVUg6e3wqEg4sD",
  "key15": "5QmeNkhw3KQ67jcNN2z2S6UXdBrYRA42aQXsqmfJ1X1mr2xL4n64TyqZwY6yHW7S9QhNSX32a6rUSg6evzcuKnFt",
  "key16": "3nB2zmrycWJtMdS8PhbBCDxGfHYs8Kgz62Fs5QRty2Yt8ULgaWayFjdUF31XQv5srNCSxw7kqo6Hk5rQJp7pctqg",
  "key17": "2CVFBLbXjS1KZNRhKHpL2b4d1AzvW4rXEaWa2LWf633WHKkYCrpxeQEWiN93pKpSd8RHJNsGBau4Pn5rd3t6VHLc",
  "key18": "2x7HLEvb5zvTG1ZHomWhN2JDQRWjnrB5XT4RieifUWLR4ke5cXCxdH7yRmZayLWNKdGHVUk7Qcq7zKcNo9G43qYf",
  "key19": "2Fhtq74TXGggu73mV1f8AJHhpcgiZc5FdiKcUmodepqDbFxaAEY3RJvt3vmSRmBrUNC8nRYiyfGMRk86T7LirLod",
  "key20": "aZS3Hb9pwGiMS5TE276CNN5y7qYzUP9W5ymRBnrzwLsRF9cNdCxs24iTLwD4KGJPGJ7Vb9ABJQfHtJPjrDeawgp",
  "key21": "4CsZh3oPyK3gZzDmDecpsqXz8wu2WGkjRcTv928TSCqg3FqZ577ev5NEBjfWpja238sxf3PyTHuiDXJark96VBUG",
  "key22": "5LMyJpdwcWe9ermxuw5N1ovjHAhSHEV2dvKXG5BtYDGELUGu9jsijJhGmAV46DeMoo8g6EJLB9cGAscgnWor5gvj",
  "key23": "P67GaJ8FhN9dfwYj7XD5MZqy5kegzgxrQ8ZpUYWtCUSjViMbCUTJVrwikG52FEwhD7bHdYceNXTyKtiFoNoyiJB",
  "key24": "3MZsFEEsBMt38Sr6sjPK3P6ButFWjRm3MAiNFhkp3k762856hmh6NkXmT9DR2LqJEBMQTZJ544LZbjCm8mELEfMc",
  "key25": "3D7BFWiBufgLiEJZ497Z6xDF9Aqb6iMjBnc8WNcFgxctx5WaFN8YyGeJNA3y1f1Pf97KGapEBn3o74M6V3oBiGUZ",
  "key26": "4qyamFHnCFFmBysbHvP3NCpCBJVjnTTshVh8bvPzv6NrWrDD2enCPZW4jj9RH5ekZQgLKSWMJbzy3JQgb618Kr8h",
  "key27": "38TcS6y77x6NSA152i4BJSr3naHGLbxvHJoX1HUyEaimKCQ4Qj4kJSZ8xe3AFDXAuPBBqLygUa378S5wJZ5BY5Jq",
  "key28": "3aPFNsEwKtkvNgF6SGdZUR1oaHa4byM4obiAY1XXyPjQtXngmjHpWmPE217hra2PLxbUVNGfwJ8ahwRZ7nZbDGxZ",
  "key29": "DutWqLjYBAGiCNmHmzxuNMQHp8A7H1geVt54UdERcJ1jAgY6zLZLiLKt6cpHyPKcUJP14dkBFdYW3uSnyUFxoMC",
  "key30": "MdSYccw9LmNQwtNz8ZqmtoqNkhd4vPXc2S7aSpzDm3dxy9R4CQ2CD2bbtX1JwCPN4mGVS6BrEom6r4thQtrxbUh",
  "key31": "7LFmW42GMZhze8dg91tDj2Mya1WqnBQAycJ892nifsf3aRvkZ8BzniRLAXbw9BUnirSGvK19bC3pEJiMYW5gJjv",
  "key32": "43uybAw33HZeyBQ3ANpzHU68sW1xhPBbrnbengdK7YsjZVtcCqXoFGbkhTau4feCHXRMBDmdV2rgWFEWmUQLoZZ2",
  "key33": "2ihh4scbPeArg1VrJQwdsXPcVpdZamW1gEftXZkbeRYiF4VuqWUTKuHDEzKH7qDuoCKomhLz3o7ji1mN4tjQhYy6",
  "key34": "2EiDHEXPLzWSUP5WWdqxAvmxQVbxATwPowjgZKBZz4nPYMcviBwjf4eo5NRVcqPQJjSxfmTLwMrwpKMGnKha4Wf6",
  "key35": "3QPzNfCz5TM9LYTaK2Veg6KG35P62zkhAzq45CjQzzwMTzoo2zzAxWBBoBtLhCPexgSVJe9fFPrSCVv8Pyy91McN",
  "key36": "Jg1U2j6G3HtBf5ZWK5HXuTXtnpqRo4zyad4o6b7Ecd3t9tdgVwbEowbugfDDXhgkgQQDFGmrotM5rcbkexpjffK",
  "key37": "4NCMg2Gp33wuZyJcRn4jqNZnFNFisrjpomeAb31q2N2j5aJK9gymRLtgg25EWk9E6mqexzBk5QNGLoVfjNHhAMiB",
  "key38": "5k41fogrR1L3GkYw68JCpQQUJaaEYV9pJBsq1DffzFt7vkJQe13soN3NTovDyETrSYwyuq836E4oVeJmE7e9YaKD",
  "key39": "5APHmqLUvM334QVaFgXuxHLb6umB4y9JrfM3vwPpqSfhdGgCWFbqDXENvWfoA5JevkVSh7SQmRqpKTRSvfSDzKt4",
  "key40": "2RD7zotEo24dJx713qYxS94JGz2oMoQTvEHZ8xySAyQo2uGtBmkoXxaiLtSJs9aieWqswfsY8tXoktyeqSToDzLW"
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
