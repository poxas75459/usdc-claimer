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
    "biBgWVvE9Zg5kFD5tifQsVjGSqxJQki7PBpiDnY8urygbewFdGN1DAfAYVQhVD38NrCixX4GnrxgH9RiGy3DWCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46PEgmn7LeuU6iotFQCNna8SZgzAnZqLs5d5mKDVzz2r2YSpSU2Q9qjciiAjQrcuDWkD9p94GC7zzxNBeE2juGmL",
  "key1": "3qTB7eGoGMNdaQSNufhHvGGMeiPnzpisFBYBPtvtyKPQuEYasjzuj1NukFNtP7fUcynxxoUrXMQrFbrLtrz3LxVo",
  "key2": "2oMWt945pSwUbWWuZnxtRCoKLURvX1bTBpMbhwEHbNdrUDLCtWqvLci6SNhjjaswdS4dzYYVxMmSX8uoo1Sa4zHy",
  "key3": "376NB7vFyjGb2Pz3UrDfgfavpY3Zmx1hH28XZ7YGdpZhFt7DiqtxwVgdgq4nEsEtHd1uMh7tUdJzpvsTDqE1VCnY",
  "key4": "5XBANxwKtWRyqYy4R85edycpvu4gZGsiq1bsbERwFYGbeMqBsuVDPXqvTw4WwEUoJFNhntLZMf6xotobB3Zrrdo6",
  "key5": "54tGNDeLXrJbi6jGn7iETM4aEPN27zkrP8cN7dk8chvXFm8sUgfmuwSzAJLxqmYwSzParYsCwcxkvYPvSAijUmdc",
  "key6": "5PW3uDfXXQ6rg6uaG7j9JKjTPYi9BY3JSTxGqKUX2ymEUVNDk9sV1Cy4JSx7EPSYuvpnsgD4qKudKhEyqKqYJv4o",
  "key7": "4rx9y4Vymzs9gBK9dY9cWVYDyF9Y9fLgcv9WY4LwFFbKzp9CjXoEBXPrKgqmmcrx1FSKukGur1z9xST6norqQBfg",
  "key8": "5CtcMEyuSRYFrVtsr1wvbmSUmxmfrYM7GYa46oSWmgSuDasBQvaFD15zKHFLJoeB5ai2T4MKUK4mo7jt9akE6wfW",
  "key9": "KkbNtYun1rPepaJfA6jsGTVJgsDzvPEtE7onM6nQRE8UeaCx2GwsrmQrvExH8TjQKDKrsxYFpGGj9hicWH7PZHv",
  "key10": "3GRynA3CP9gzJH62LzhjZLvrXxLcGrYiPiy5abE8E2U6MDGiyHUVhhtMD222ENjSYMJyFqKUyjsaq9Stneu692NN",
  "key11": "2u6skyHaoZsMZVJ6NJtdwfvxv4sb8URnnubWKdCsdGVbfwN9qEQ8NL3M4JFsjUCNSJ1hryfZYfUSxWxfBcC7KZiJ",
  "key12": "5R5TT85kNTJjWoXcy8y5W9dcRnBxQwe9EzK6kRdepMZftFnZvuRSyEMKkt5QkaH3HcVADFRPA3aAAbQ7xrxPCGG8",
  "key13": "3eWeuWpM371td8JfPvNKZbwKVAX8qxWKpUFquVwbYKxzdrEDjvuYLctrKrpUjQeezyiLk5eSE6Zh6kcmd2jBphTA",
  "key14": "2WPZPqxP8DovoVcKhVQDfcvdLDbLr5Lst8JDWWYdefNnY33W2b17ShyDZgFBeFc2sZMJBYruoHV9RVKSpKn7xxif",
  "key15": "2QJqw41j1yBo4aocAeYRFDzYt4BV7jwbYKHqJ7YFZhXGrEPY1pNj1UB1jqBDXhdzcJo2PvQW9YfM5pQdXQysEpKB",
  "key16": "2ufEWSUno4yUXPzkToD2m716Qx1HKXtmTWj4RuR6h2JJQyk8mumykUUPBgY3XAbJuDSzAWRUFszP7ZJ4VYVjXa1b",
  "key17": "5D3EB9wkLZTrZ16gNf2qGXEnbeqbPcFd5qQBzMmqau5YiXCNa5HTYwexQU2KeA2HypqhuHZbvrbtUDRdz4nJHj29",
  "key18": "5kFGiPj45bworYgDUqtDq8V5piUtRHgp12ogrCrsGrX7zGgfU77XVhoUxsA6kv8bWY2PQTYxHZyrMVDx7ieUoYh5",
  "key19": "5nC2mkbpZ5XDjctTf2yipX44mhDqmDHD5yzx1FwKoD7KLv26Tb3S5VXtU6EANMBiAYq7TKqm4shwJ9zoBDuw2AbH",
  "key20": "5EykqfJe7NFh8Wy4xaiz2K6fx6G4Hih6emvYJ5FtHVtjrcJbwn1CkT1Jrt6YKsVqQVzhaxCnmnUnVSvXyTTbUx95",
  "key21": "zxEPEkbMB1w7xnWcGDXxXbai2ugXka159gUwnSwMFyhgFSHwkfMCutQLpxfRajgGN1DNe8uqYN6xU6vkaacBbF4",
  "key22": "3a61WGApB9EhzowTmdsTKiwR6Ui5P8Bzn4EFcmtRArRhGnmF3PHHk7aq1HSXx3WPfKmFjXRKLQmFvgmEsp7Hcca6",
  "key23": "5FhSyvRuxQDpoFyxgwvo8JAciqYqLrwAG5T4BKFfuAWfU916suS8vsVE5nXo5yUhZpbBE4Yg2DhEep9U7f3P6c1k",
  "key24": "43gNfSxgcTj5byVTBfzfcKmkeCS2CeHs4cho331G82GuXQD92P7hMUmeMXPzNwBuorE3SZu8sGBRFKckUdvuERcC",
  "key25": "4sqTNLtDvZHa3UWfzeiToERT3nX6TGgMzGrjeAonD9KMTCigcyXQ6J6p7hWNxfMMShdsU886dLwav8p71SRs8wdK",
  "key26": "2wMQHLGm4KUp5z7dozmsdqtUfnT5dK5z5Rh9yigydzxa7HLKwQWoRu22hz9jJTY2hfwMfLqd1J7GZUeiBTWJrA91",
  "key27": "2FFXUXD6oWnYnZnqsv1No8VkLdaFLvGnV2LjuoVRjNv8Tzr4fXJtpVxnqrCVasV3hvpcQ3HmpEM5CWz3vhF42G29",
  "key28": "4XPgBtauroLcQXmmdgMMULEVL9Wu2GaypWZ27PFiifZQevgZd6XGDZYdv3hpJftMZb7C6HPabwZKft7ybZ7h1H4Q",
  "key29": "4NfScWrte2txmTAuLF1pk2pN43bGkKmrbqXtWV7xykXquGdiJDyWoy3Uw6E7TUXTqLcK2gE4fmnuuzbRmm8e3X3o",
  "key30": "5YmcPzvT8pjucFRFn6bykhbstoUpefLk4vkN98248kHb7tQ61RmrAk8NEVCThMh5As3MSorGVgWan1FfVLtiMaf2",
  "key31": "2MyQHMnUhhfVdrzbGY2vfRiBCvUZHyFfQJGqcQcWDSb6RTZSHgf55bKEiVVU3XjbrC8pJ7JppCdbXKHqEojWBJYd",
  "key32": "49UsYH93esq5tAZttJamHoeJFHCGugcZXCg24TGCEm9TYAZwjRPUMYKjmxr1bfaKKafVBTMvyBP4ocuvfgJoMPcg",
  "key33": "5u9TsZC5dstwoHfHuGd9GFSAiiKLGdovnWWFSg2CM3gZ3KfwSaGy5crdgVE2VuvUwHyvHS93g5teR4dDvK63bH4Q",
  "key34": "5Hi6S6Jhrc7XgCnGdvgSggH3AFa7GnckzCdn4mbXprLx9pccG4VKaeq6HtYEg6LAKFYDmUPS3ZGTAJpLauGJo4KG",
  "key35": "4MdiQ3FRBNFLUCmExmE2nSMvmjn2R3XMz5NgUjN6ip9UUCKCoxHkVvP53gRr2Y4N7yf9HjLvzbktG398Jhg1eyFD",
  "key36": "27PG7EXijy8vqRsxF1qUfjEQYUesXm57sMKHJTQXiKCZY5Kyeh2JXWDZpSAJcgQugeq1bfYtNfg9QZxuUPpCMKZR",
  "key37": "5FbnEesMnceSASS28Rs2RWuG4cvsX3uKUTsJNZaarztCn2ZyxAcBfz9M4d5yZEXM4k3wBaTE1q9rBoBd4Z79HRcx",
  "key38": "4MFSU7sYtro64gbZuDt5Vj9a34gb54ge2QueiLFY6KxQktk7iTJMCq1zBFLbukhtubeQX8CgtnZX5vMCDJsq4Jja",
  "key39": "5BMa6ERZ54Y2gDBRDhgERbSVzXxsrNLwqPv6BR3jBVu717bzD49762m7ZH9kdvjHxtEbrd158WThwNb6xYacGjdc",
  "key40": "4umzHvKLvR7NBF7QpFbi1mUKaqE4stVPjwzauqiUyEciZaR1R962MnwuyXVdE6iaEbL8XyEcRe9QAG1mY5ET9XJQ",
  "key41": "4oxiehbL8MM1dkoSdVTDTozhZAwBkkfPPLZtEcVhPFHdtmA8hcnRHkUMGJzrTAqbpEUXGgqMfUYryTXfrpQpSvGe",
  "key42": "5f553fswRjYMSaXVDga3RzemFXhR2gpdkqKKafzN2iDiSt6y8akVpNzt5kuTxz1p3NXoEWrbwzmhL2zYfDjyM1pG",
  "key43": "5aoULeppVbKJttzC2FrAPUoWJsRSD1theW5T9mSVw6VfYTYXk6n3uYoq3YXv89zUWw7RiysrD4K8c2HJDxU12pbV",
  "key44": "4gwFukQRQSyWagJ9Z7EWJLRnBW7cSx1QptjMLGXyrwTBmr7kpJiUDSXmEQ2QetJvaHW23WcWoA5a8cB1mXt3wqXm",
  "key45": "2eVh56iUhquWs6UsaJ5Uwp9b9862zaCpHyRX6N8JQJa1P9ASHZGA2ft6UF8jmuQ17KS3Ki5mbSYJKTZVnqKCLJAK",
  "key46": "2qGwzfc8g2gZbXdt8ngVNWnnYn1euKfjMycYuteHGMakNtuWjD7eHvQRpaN53Z6JLddoVjWUjL15wUZaTipHCgP8",
  "key47": "2jguzFC2xa25p6tGFtR6fUNuneN13F27o5eEdCePBtoN8rZ9rak9YMkiAR1M95qJh4faPoux17KRXLByhrQqmx8Z",
  "key48": "4tyHmcq6phxsEsmtsfiaY9JTu71cNNZuLMGjRDbfavjuABDTUEepUbkMMn6JbB4mhpLGbNPcEoSbaDgC3L4Dw7h3",
  "key49": "3tvU4sNdXuWLG6TDWkH8HfKmNjBCw5wyed7J9dweDzwcrc7YkkEzXr6xeKiPYz6qdqMHbQq6USMCwCa6EjropgSZ"
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
