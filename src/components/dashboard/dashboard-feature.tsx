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
    "5WzSVGb5gLXqrhZYASnfjZpnKDWAqJ8PNrZbUQJiqXiFThiip9rmg4v3PnPn8i47GjhaTEYFm3Vz7KASDREjkwXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aguNm8HUvQFZBARjBsJezJYkbG9vhaHt8jNwDWR8XdeXfwfmxZUUEKoppueW483nxAgL335GraBYfZd8aMmVgXT",
  "key1": "4FVvUFDdGxmhWMVHtQA5UdDf4816ayHtXTy1uYNvV95wFqEWHeZna17qx9ysQ7PrT9T5ABiKWTzHyThxZ27ZsbHD",
  "key2": "kapD6VLcLh6Q7Db4tZQeWPBsX4XpGzt2nMeviTitC1acD7xxLwTjEG9Ujgd9N9LnNJi3EnVvgAfpbJQWrh8hXWa",
  "key3": "486csAwt5sN8XnPfQrivwdhhzRNwJGvtpj6agmMhQEA5s5QzJawsBMhgfTQ665L1V2EHAe7dD4mGpKLsmpQfvaLG",
  "key4": "xz6bJ764K7DvK3rorMd2QNzroxehk1XnHeq46GnLMcbsJLBtzojA4MKx3XLq82vXDXntAaVk7xuE6KaEA5wp6f5",
  "key5": "zbZsjUXFyBrMDFigTa8XbfqbFoUPn4uNTTd9wVPZTqyEGZwDh94Fg6TF3m55icekwuRRKiXcDKBh5nWfHqkZSca",
  "key6": "64eqsbM9hhrWMGV6Q2z2zTAe5tAR8ethzMWoWHFbUQLwqE2qspVbn6qKD1XCxDuiAuN7uV1ngPjBEeUeCAXBdZzY",
  "key7": "21Cik14PbLkPQqjXd1Fhz1i5njZEDrGYgQvTCEUmQs3vnm6jbhf5TSVjQMG6GWcZGds2htuFhPdjQJN4FKPZMWb1",
  "key8": "4nejdon1tso49MfLzctPwMVLvkd5YGoR1NT6RTivMtL4sRAvrEZYPMYijQoow4b3Q6sh8rxRUgLoVR6AG11PLUk4",
  "key9": "4QxaogTPWseTbSq1w2XUizMordpoYFdwJHmzqLpRg1oBxhxxWarxUiGDALemDKcdAsq7ea5RA1psAJhvpYfFvDqZ",
  "key10": "5vBu7Mkb1w2K8gbVBgAvNCsbBpP7tw4sK3W9RDTrwnddbre8eDxozK8GbS3pDczdxA7XGTu1JXpD65KTWacj5Yef",
  "key11": "2bNe4h7ge4SwGwt6ib1uzvYrysamNK6EjJGKTZrB7mHTPw38dsQZDUptqwBpDGdmif9E2KQZ9s3voocabBX1VVD9",
  "key12": "5XPJVWLgenjdJFwRJ9J1dtRpvm2FvgPcwUbZzWwYbWBMpeBjDjTV44KuJdFYeHAuvhr3iGqZPcxRxxRYXu9HPmgQ",
  "key13": "4Sin9V4QZtzL9dVjo51mrJHrmt32ya8id3271amGnVvCDFFCcFsxa6s9EaEZn5qnXPy77C1Y7X9ZDQjiVBpc8DXn",
  "key14": "4u8eSJ9TygmWDbRyosyTyoeRmWnmNEfaTj879JnbBqkaDtCyouAEgrPVBHEL89wXiLNcyB1nrDSizTRhyv7N3n1v",
  "key15": "dp5k1aT74WJQSYud34CXcFbeET5Ck1k7ZZ9BKUFxpoZCijBgYq6uUgje21sW9dS8ZMN61CV2H8rs8AuXwyKM2eg",
  "key16": "4xLaP9y5xkcv3rznDGkFbyE4jC7ic8cCELmpyvoCm9vpbw5fKypHTknMbRCFagurvFXD7KLdfDQvBRvtoSZp3gih",
  "key17": "cCBeewHGQJRQYQd4J21oZw57Lf9yArLLSc9k5ATjcTW8t4gf81rA2JFMf7XYEWUW1UgCC6TRe7LBbGvZ3Nvv8zF",
  "key18": "585XyXyVacWimZYSt5GsdiTPUsstnY59SSTqf92GNEMeCFM1x6uXQrvXrqArPxHhc42M7g2cTP1u6qRSqpbSWPRf",
  "key19": "4jn25waB3z6SRRAanT9McXTZWd4tGPAVMABUCaghvosWfCytnnMeJDUG6vKVxYeFrpHuUVV97wGuj4g4eGU2eS9w",
  "key20": "31eHRAjzepk4bQeb65jLKKofhimfi2fAFLYiXBQA1znvk8px4qkta7wU3EctwU2MD9iiRAmJAAMC9JfATkruwy6q",
  "key21": "2PTXX9A42Vj4vt61r45Xfwwhj2zfrBLAxWd4tqCLv75isq52i2Zbk3sYNZ9MenTVwwCji2X49tPBFkyUeLTy6xe",
  "key22": "KuqdK8wMdue7PEfiA8svkoKduZE2eWzR8s132pZYeB2YTsQ8tSS6hgiWyGsdav6TedLkmWrtfkSuQjC3wBrRRF4",
  "key23": "YtBBHHxHrRFta2T63THJMQZeCqC5rLZi95ufpH129K1KgKySYKDhu7uwpG46E5a2hXTExft5UXem6jsFd4hsDXj",
  "key24": "2nRW8NZado4YuiyjUsQSpM5NxMBsvX4YpkiAvsSsUsCy17RJoYAQWVLAgxS7qUtkwH9H2e1DeaXNfjTiLU5dN1DS",
  "key25": "2nQPjRwxBxFVZnH3BeHHsKiRYBoabxKP7ce9szSnQ55DCMXBjjUoSCzc1B2nqzqTdatWzHz5G5tga5B7xu4hpqqZ",
  "key26": "3h73SacPZQXPQerrcBorrbSs8XK2EsGZaPpv9rjNfVUKpeBKktwf1e4a9CSX9HMaHRR3ZeK2mUXYRGTLxGRuEfgp",
  "key27": "3r9PAL8DvULnUvquirZ7Rh3Pb9Qx1jqzVeg5DNXiNaTHrhJ9iNbnV7PHUxbdQsRAdYcTsx1s4puCzQzxt1iEo9tT",
  "key28": "5Fgafm13fxBetxTrRPmwRSzf37UEnufg1cUU7r88o82hBgLH459cL3WvUesZ1waj9cEv9XaFopXNuoqgwNSrQoZX",
  "key29": "JkmLSwvWhn18gkFESFyF5zt76E6fGiaod9G9LYhAV2QY52gFuTAhEVXXa8Nuphqobb4dPGhHoMpc63y1gyPxSmP",
  "key30": "5X4wP2yQw7JBkZ86AtNKckLKSJVsck926TprFSDUcbpwVx2qrXhSHSzFGzA6SFGvQjbCP7kMzvgz9gPqHMvmMgDT",
  "key31": "3PMrFZbmEtaoFx57Mgz11CRgUJ1ctXi2g8gov6ZwaG7xHg5fTdAVhZsJWiqxw1dt6q7V1GPePa3bL8qzS2BW1tFD",
  "key32": "3wdew9Mt37WizBZbj7HYHsSVJeB8kfCnDNNJQhZ7Kdj2jf5gLL2PDVvssjuTfwaHV5ZmE7i6J8Gjw76AHTuP42v4",
  "key33": "4KNG9H352z4Y8dC5MaJdLy93xcgdcKjNkT2TVr6h6Ja6Yjx6uf1MRjxhqGXgfhbJR7ZAA26C4Gp7rho7jEBSxCEo",
  "key34": "4smYhMtve1iAAgvNoMdearfX1cZJ37eXmZtngVwTQcrZKc5HqK2yfYeU93bfQHt6bSCUsapQu5fLqiPutxdud5g8",
  "key35": "4dxYBV9r9KcmGqXi82fTz7PiqNB2aDJQ1bKX7UdhCo9keYYosxsUScG5EwxoLvFhumFy8NQVqsehbh33Pg85txbQ",
  "key36": "7GXceWGb9bfPgsmP6kKEQH71YU7jGSqaReKgNbwMJHqbrF5ezB26d1oNAo9a2JkfNzGUmwpRcUMBBdazcf4hDaN",
  "key37": "YtmCAiN3jHGovUzayPZu6hiov9qinYc6g5N2JDTmycHydkvVkHhC6avtD6x3EjjbCyreKKLZ5yZgvKPFXL9upFH",
  "key38": "2JFUsJvwxBHngNpZndKo45kAsaNLJoerAXar1A28KRSYWHrn4vN5rKKc4zKn74622iDEhsHabhNb1Cx9XVdKmhK5",
  "key39": "2QywJZvVwf8aGtfjBjWLSaJSonTo7imb56UyeoTD6fPwD7Nfd3x5DToNxuM2p4DQLDkG7b9CnHAHtPA8VRzpS8zf",
  "key40": "4zhQBMPMvRne1mm9LjPKZhsUWASM2LoMVWw4cKhZNDFe1xkprSKyHS8U7JPFAjy1xZ4egmQ6qcU99iv47HnZiXSg",
  "key41": "2j3UdWp4p6s5bsN9AZ5JmYPHpTmkUDe7nLZAnAJYUzZ1nu2omVdyAQPW6wYEaR1BezQuREfuGNFT1uLGhp9jyRxK",
  "key42": "2i7r13PVyM74i597STj9DYcYAG1dnP1GY4VNak65mJibNxSrhHRDBUjURugzDKNuWNfENjGPXfvqGeZUD1i24EAj",
  "key43": "4JuYfj3nFNbinhy4uyTWt5AN1rC7B5pLheDpR126hhw6SHSQ6G4L6FtSyfTf8thhmz6gEeb2JR8iuBJeqbHwCkru",
  "key44": "2gxDJhCNWGJAm1u25nzdFBtutNHC9su1Jq6WogKjcwvzSTw7mUgMduxc5pdV3E1gq4FowHNaCBwcGieM13iVGcEc",
  "key45": "2AyyJupqXbb3XTimfVqEnWkrMn6cRgfMeEbgzafeM2QZ2tg9bnHVjcrJRb2Yx5yXnCm7LhzmqcJga2CB8aKqKPXp",
  "key46": "3KjaV4vm99eBPgRSdw6JkbZAg3YjYLoezfzVbmee3C5BeRHaJjxdbpe2gd19WYB3j794ZUzqwLYCeDspShy4FeE5"
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
