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
    "3KQo78GhgnHTxJty5trh64p7B37rg3tM4qA49e9qtHmm5n1EMqnVcEwSXhfq7c9Zq8LDy6yZTn67nffECrP7UjwJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vK25nK7g1QtGVYDkndqHvzgzjU6JDtSpJSsZkaMnN6NkoFmq8HWrqGX6aw9bAuypdaCC2kesvSi3aShgHrtemQ9",
  "key1": "8Sd4m6jdqoVPPUZvK6MvTdbQNsE68RVdy9xmFyJks8pHFHfTx8Kk4RGvCu1aeydSqmrdv6jHDBVWY4PfTJifsNS",
  "key2": "5YWS5tWeK7B8ozLAJ4Ac6zjZD7qUPungkRe8FKS8p6TyXFBaXQruND7nT62dq4UFn5bFvmaoLEuPergNuMoJW736",
  "key3": "ejR4NWBJ9Zz7nNNHjur4ZUXmcyGF6WQMUg5K9TmsqhKf3C6FLPu6n8H7xRPeMWEXauxEX72uSqvDcVXRszBiqad",
  "key4": "3HxQTwG6jSTbZ8CxbtjivSJiSLohzBsqYQPDuP1iMRHXcASuuMQa3mCdjLBbZoi4UgXbSRrnWFamh9E6fhvc4TFT",
  "key5": "3bkELNeVZ5kTyUBLFohuDrya3bFPS6ma1ZsGzWxektkzVEkX6S8RW7H55nqxLPAFBt39RMbvTafFjToGKHNzT9AM",
  "key6": "3JeKsK3EvtzPPjv6haJuzj4s2WG1XS28x79aCxzUDNLyjS1oendHCfgCVmK2ZLzYfHyT2XguhdBVCnHkfkfJoFv2",
  "key7": "i9BE9kP2iyJp3oCBFRRasT375ATQ9Njatd4gWuDFjrTjPHZXUSyU6C5Zpm1Uq8Akt2epeHQSvYSbGrrP27TyWir",
  "key8": "2fU9CBhPtKMYVUGB2VLMXDqZcpu39mKkmmjo65Dvjmw8qpD6WtqTQzP9js2B6o39S7HuuQ8etRjpNHKfv1Ez319Q",
  "key9": "5mWVHJxCrJwqFpDvJonpvAn6xFDHA2Q5yGzSeAhEfSaZVmYX9MXrSgNkY3bivsvt1PAb9eUY6pTo9GZZXwhTEoNb",
  "key10": "Lt9hjfPzDuaexvxJ35XDBjuuNnxNRz4zdsBQrnDRzCmL7y39P7gb94EtwZiusjUjXEEoZNsvnP8EK9epJqxKRbP",
  "key11": "61mnXXZJKxjFvViWFZTJziQwaAcVf4P88PDhgBZhVTyo2ttdR3JSoTZcCZCgPMaChwV3idTcUJ5gikzaMRN6yJia",
  "key12": "4qRUhRHXwDCVmfpUfb8S6kb2CkSZtQRc4kUzMAetzKuX1kWB53vtJY7ZoVEhc6fH1cdnCzfKfNVf5PR6TWjZDdqV",
  "key13": "3wwCdbTdMoq8ar7HdYNZqSoCWUV26tz4cCfXkbbVcSoJoxcs8WerkU5yztQJceKcicytHiWVbJVYsB4T1BgExs9N",
  "key14": "4KBsyqNjgrUkF2BmfyEVMhxqg2aW5amV4GDsxfTRZqFAhfL5rALdKGyJ3PPnomxjRdXPbzk1i2Beoqi9eomBsHaH",
  "key15": "2asFUbMDYHBkntSqHpWLmYfHeJB8vfJcfXTypcnsU9exYjQFirEAXk8mKqi7n7qrYy2WhbC5zoLLy7xKupoaH6qL",
  "key16": "5WHbhMJYUSxqHa8644YohPB6XdNs2NmFMyVEjERP421qrXoBHFYvM8Msz85V931L4q49iznxE7Cjkgtvu8jhGw9B",
  "key17": "54j1CJar4XqUs3KBVZvTuYa7W8b22CoBPqbXzWBNUwL8PgE6WMJVe5PWomx4UnJaEReGHWA83YbSouU2S6QYYu45",
  "key18": "4aHGViAQwfDaFo3EkSYbALBTSKM279Hdrdz3iPLJgtg9SizP46Rjhwh51rYGyBoVWF7fAdB1qL9H1WhMdXawZP7W",
  "key19": "5je2VHzSvchavkNcQdBTEdxhVhvKJdcAQJ7rxhXFTyiW2WwGysJow4BMsVgvcnxqoZykqK9rZikNs26ATCaCkgP1",
  "key20": "3AYZtEe2GVJorCBQ9wo75TN1YssHE7pzHmWHduDpfHmXji1VnZuC91bLGUyQsm91PsgcAP4m3dsuBQVCr68MqJ3c",
  "key21": "3h386PCAfbS7NmJLBAjE39NyLymLYi8PCdm3epKJaVdtn4ANeLLdvEHxMfqx7NSYeAV9NAqftzvLYAwtQc9eqmk1",
  "key22": "4tGnud5KU9JJhi2Z2Rsd7MxMXnHdM7rezA6MvvQLgPBggNMiq47Mv9HDeaG44FSUNWftJ4jyYLX2bNa7pXEFtHzs",
  "key23": "3p1zGLuW8EpsnyNxwAtECaF266jFCMJDfU4h6hygtHo1sivpwYHDjCbZGZmpbzWxXLLZxiBDSyRXxofF434Rht4t",
  "key24": "331LXzS7vvDhtUazc75W8mszAxcYn9R7BpJoXzXppaPb8dTPyfNBiLgKZSXkK5kCGyqeJW5oZMoxaRbiKwUZufZL",
  "key25": "96UNoJZPMTLw639jnRq5D9QXfpvxpyxQDvAqKSNRv8oGtJNieQcyrfZxUxjDHiwJNVX14hBTj7eYXkFkiK7Nd2v",
  "key26": "4w3Wr8nBxUoVJZJkrajjxPJxKnGbT4uu5JUtz4xTvs5g11W7km4xKPQ9NByMUjnLKP97YRw5jCjgvakucmJCHi6m",
  "key27": "4y4z6fPvcUhA8VPkz3wwu2tRoYYDcY3d52qQX5Y1cFnHkZwLSEfPw33ote7AgzkGbN9RHM27wCbGh8CM8wifTs8",
  "key28": "GKWPtuMbPZpYBYeLsMEfH5CrChWJUXVgdoKfr2MhCVEjSdmNpby6zU1wMJokYxhGf1iqawg44ZmcUtwCMFtmAYC",
  "key29": "5BBrHKVKEHn2zQm9SP4V6oTqBvxQSEDb81UMtRvmHuJNu4PWukHcdxwoH6FaBmPHkK6ZufE6WmURY5KHXujTexTM",
  "key30": "4gp5oqhWchXpUggs9PGL4cX7oikKn8TnKsCDVXj5ZaJmXL3ndbEgvizWg6m8kuEJgTUX5FzCzxwas4iYYSuysX2W",
  "key31": "4WxbRVKjMSosr3856YN68cAzTne8vRodsSFmdK6LPc1HCQApSJ8WpHpB85yhQrBBkeiyZotrmiQArvSZ4GLR9mJY",
  "key32": "4tP1PohD76C25FCdZ8h2vkXq9stRxQedKDFBW4wGSwRALWZobPJPib8LLaeNgK2Mpg6pgsiqSo4Ff3DoxUnjaqvB",
  "key33": "5WvUWfwnctivcpNeYTsLCMMAuBtjajgdNScm4EmmtwYBJZrU2UroxCht4RjhRU7A15J5F4s1WyLQALtZjrra2LNz",
  "key34": "g214MKkzM1T6b5xcRqFvQ7hSvwnWNUmN9svn4sRukHj6EQ37MbVuhizqQfHZXT3dNBza2uZLvnbWR8nxbN2hrBR",
  "key35": "5hVYEFmaF6VRxmS4Fr8HBxtnJK3nhCjtoU6VS2xiGAzPBWN6BcpXJAQuV1rJU8vLo7N87Um7TeopTKNes5E5nYgK",
  "key36": "2xhY1ceEuKGrPTXUGX69wcTpqPwVkqWQdeFdakAsHm3Xg7gZWjrDyMVLaKzAacE9nbPt1Y9ce8hMsQP1bdvjxK1g",
  "key37": "344RwahrigxUrPdqxzro5d6s45VroFoMVf8wTkSWi1dThHxqMBNyQDqm6gf2zTWGoHoVucpNq27Pa2SqxdAFuykY",
  "key38": "u2F1F42HwgDwbcpx1gsjaRH48XubSGjiKNqGynLyL8tHpnVLpWRYNBQzmzxxQBowKdLDnUHTGPbeVgNju3DnnyP",
  "key39": "4D9tCHDYyA5hvBeGC3YH6JXQekbeCooGBCsgkWi5mkG2gQsQtcbFXrwkvUY5XLzMH4CAT4qQu1LcVs7FRJxDoiQm"
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
