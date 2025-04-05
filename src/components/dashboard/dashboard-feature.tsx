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
    "4EDgyAMJGBcko5mk9izb9d1tNLk6v7FgrdEmewoGjWCsJD3hv4RWUCZzGt7eY2jZ6KQ5QVutYjCmoUqXcCKLLJof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jZeg4gD1oVc5LKjDar68uoKrqQbxAJdjWo1AebPSihD4aL7sNDviSYEaMC2WzRSBJc2h2onADfNSdMzDb33f7AB",
  "key1": "37WDf3X9p7B7BGJ1pF4tqnjUWRSQbj15WSujvXYE3F7v1XW2YKvsAsPNnUuZMqCk7LotJxqXMT3qJMCmurHAgG1x",
  "key2": "4DCwqdvZ1DcRVAqfcQcZPsH41YE1TnX1hjFrbRJazHXCw3sKMtyPRYTEjbUrVDXoA356ySReybw79azHGNaUfgmc",
  "key3": "4Cgty8AJhuWqf7GvnYCxjJ8tk7HMBpio6YT1iL6kGMZHtTXxGEjTRq4X3ew9aCo24NUBj8iFt5S5dnjmovLB1aXB",
  "key4": "2mxLN7HCCKqdud89cChXP1yDiLg79zGZnVrapAHZA62D6cUNW7DkaumXZp1G9oZsLFf3yixwfRxNgiaL9uA5fqg8",
  "key5": "2zdiXht4hsHhFRGncJrVYJRvG2p6rSBcrcejMArgx1LE7wKQDLdiBttk5wAkQbpwUNkWCuD1s3z4aoKCRy7WgunB",
  "key6": "2veAfnrJrbEx4bxkj8jhyz9BSaHDydMyNzaajtoMgkvFYf7BXpiW13ftmyRwoC4R2E7tWoqhdG1bgPCWr4YUTkMm",
  "key7": "2iB3ZcGjsnGP5P5iqHi99wWFMcjmuCuFCAeQmY3tyskscDNsp6xpAQqfXEeVRFeacGGWgJVdA2SKagtxBaNsK6sE",
  "key8": "5r8biPezMwRfpHu3k38789rBwgPdPiCfk7h7xxzRBFDnXqBBxgecHU5cgUAB9e1aQprrMjHsuXf94nzxvUFZk9em",
  "key9": "5z3SBdsgEQoFk9kFL2FTvJZX57LBGRi4DLfZdLisjX47n6FUPbB5z13cWTFBYwUqcKN2KP3PYyEhSiNthda35vPk",
  "key10": "orbrZaCigeUUZeVWeTVVF7Yd2CZpT4Qe9Le6R7CN9vSKnUPCch9KjWmeUQ7PgTNn9S4sSSNpJuR2iJAGBAmpBvf",
  "key11": "23TTifMAjBhoVu5v4GwZMoGhAdqfJTySs3JScfZdB9wWDozTVgoujGS83cdc8Aeej9tKKRoPyqLYaFLGtuxYtPrV",
  "key12": "63cF3bdsNon7pB3ZbVqGnK7EoFwcSwF49EDYGCHgfmtoiabijfuJKDFoWqW2RWtTKepTh3n2n7cKerPFviTugrV4",
  "key13": "2mYk7Q3vBjqVzE7twgRZpWGmtEJDH3d6rBNtGu1wBAVUXbsaoHSJrgYqAye5V9fJ2sAX5DECpXpKgTeUkQKui8EG",
  "key14": "rcSPa9syFrkQiwCPwEJaQ5KP3XAFrc2Paic1FTDsvALTDrU6Nr13uuLswmJ9Z9VuKGdLDF7nxpxw8xKWJQLKZhK",
  "key15": "3vS4jQEhtz8ZMU59dN45aDMZzExGB3h9yM88HZgDCLvfrg81bv7PugJdnH1uuaUXaUeQBbUPbGeEnR35oVnqvgS8",
  "key16": "49cWiTiB2YB7UXxAPYDTZaVYFqNoynwxeNFUkN9hqxGeMPyGm3gp4jR4NwQWqBhoMJUtc62J6dsit4Vr7AvvM81j",
  "key17": "3q5ZHhA7Roxq4oyK9Wcrmkn5tMRY42p7MSfwGM619QUNRRdyUuksWsV6E7zNH81DsLLHywk6MTGLHMMXfPxK1TVn",
  "key18": "215fFzcP3C3YUu6mQKmD2sQLPUsJHqS1t9XTqnZgHjmFDKyJX363RuaUMDB5uk6YZw2CYh3fjPsDJvVWcvaBXkZj",
  "key19": "2Qw7C223zJBQFZgBc5un5x6c8dwiAMLdL165XwgQW8eooaDLJXWadyYP7bctQWWWmB8mKoqUGf9PrwqiNRTp99HD",
  "key20": "32oors1hoFCMumyMsNqofHyqy31sPGmdZd5Dqt4RbAJfbuDrNZmz1EvvJEe6ito2GciXs5Gt7KKyeK2qWWgjXcxG",
  "key21": "wknRyq6RxssuJrq8mDqieGyh7SHXgWxaRNb1mmemUqFS5FByPVvc1ZGAYF7VLBy136vw7cBrQud7xwHN2MP9yTC",
  "key22": "5yHDk8w2T6T6hTm9yrunUp9KGAV95PeWRJXsQikzxVnYDmuo7aPkAG9kN9efZQxhGGZydFdiHTusZtGdTu4kJ11s",
  "key23": "64Kh3vK3foJN2HesgE8KQgPrrDeKgz4XtcB5EdcZA73ZFb4LutGJsu4D2fuMws2Viyi6eKzFNMocfQ1mHbigY8DV",
  "key24": "5TZxW69B8SuuMfbmXuBMS5p5hpV2jixh5c1PTFMSDWjfTkQTrneGGuv3RzKPfYMpqLF1A8wLaCgBdP1i2bkhFMCq",
  "key25": "eRJVLNhv4eGHie8x8niVmL8nvuZq3WqutHPDaJ58TrTKFFv2c23qHidrnxdAGTFt5CJxeK9UAhXDbEj7sxAmDkB",
  "key26": "hTD7cToEVEVKvruqR1tCiwT1rmX4Tt5UhUDHAPBnWPDzxVPNu45ExkKEQ3JMFQbJr2TQ876J6WTbVy5PMjaFH4v",
  "key27": "1jzuZjnVCFwp5gRdQtCmKvXKGWmfjTgo2d9fNoaWDiFK2yhYw5sphSsw1FnbotsSuxTMT61YhUNgBDKX62UaXqb",
  "key28": "58szStpC2RA7wBhcdAyfnkH76MRumezc3FJDpbyy2L64zqXYzaf1drkMQ8gpgqCdEriurM1AdoYmLoi2Wkm6xQhU"
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
