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
    "z8LaekesfdXANG6c8nm4cgzVrkxX6EXbbLQ5UKnXZAZkhtgwJaH8f5TFbNzDV3aj72nSZJ5MupXRxr4re6CHuxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EmfUKnodKpqXJPjL5nEGF8LvjiWJMemuc5jXzWFwaBx2EZ1moWjrEMzTr78NWTrJJuRs2icC5rVsZ7PK5XhXKko",
  "key1": "3jYy8YxeabXcW9boaqHLaLBqYDJEmAU5ky353HWEkMFm6Y2PgGR1pKUiyuts5dpAoNPkEtvcZBKjttHuMcheUAHE",
  "key2": "ymhFHLuxU8z1NbdAq1jzvv3TqauXUC21k7JqT4c2fGN59yJBbhXMDdf83WGpA6KPCUYYdjUoMmFNeRCFqv4P6Xt",
  "key3": "5vNf94fbS7UW2JgzUE95uE5Py4k5c9Styfd3kUijLp8U69EN9gNWG9QBzapZGCo3CJGnPBr6micJeBQEJmarNyjE",
  "key4": "Dng1AAT2ADbpMT2jQVtiUnJQghwzQ3NUAg3MeAPzBHjtXd8k7phvc7Si7XgiZgKgGyW4xJqDjWdNM9BJHp558fb",
  "key5": "2mxrdr4WNHzdyf492Pv1BuQV3jD2HyRxzAZoKYWZttQ7BbWqYRbXt3ztM1kZABj4Hb54EfvLKZGYCgDLYHu66Wtw",
  "key6": "5vpo4WrGei1kxLSYiz8wKYWa6PapLJ1XPyo3aXCd4khyobfgZjD7PmYQaQjMH7h9iWd4T58j2dZY9gTuagjMkyJa",
  "key7": "efZFRcK47D6WAt6JM51NaPewAcv5GTicjnKZUP4gBdbLwpkqoeECPkTD2i9FG6pcUhFMbu9HigsVdaNr9pW1Dzd",
  "key8": "3f5fftS8dgBNrhYnFpk7ZxZX4j2L978aQffk3cz7PbEZW4CH43Fqw5rG3nHLavgTrdypnV9MSAfcEmHHEQDxatqv",
  "key9": "GX8ohdJhRNdSeewZXQUgcYDXn6CN8PrCSAt4BZxWUXN6scU872MadaNQYryvyAsRGZongR35N8BoB7FaBXuh2SX",
  "key10": "2R3w91hDkfqcKB2oCNYxZjf8XiF18WGEJvE4WbCm9ByncHEzErNxZmJQwyRgc8UWW4bVq1qPkYAFsx2LQYswqNX3",
  "key11": "2N3mofPKdiYfLuuPAqWNYifhx5Jv9GZNL27MhaKqZxvBZ5jpTeEXXYYqWFN5gV8VHqdpmDpQoMVwuNsSxeYuBtGc",
  "key12": "3rWFaP1EEUhmkMVjFmoFG8CMTSTyHccrXvcxJPRiXMPftCt5UVTzLGMtogiuRpA7efDhwNeJKDsviZTF3oB9nqsW",
  "key13": "CRoV7uTQ91TDpJaueHmfBVSDriraqkKaemsqyvUBS9q5rT1AHqi9vxVLE9nfhzyuQxzZWth1eQ3JFpuyQ25vKFH",
  "key14": "3rTqhvLKtfj5LD5qdByvxB7zKZvyLCnrQ3xbQAFxLGyVMvJevXDfKohKLxWQQyHpeHkpgTxSh4vkZ5pc5y7UyBWk",
  "key15": "2BWdd7HLqVSX8my4bKi2yCLFyxCWn558GgaLVqHssnXH3WEZMJeqWdYAmbHULLWjTTjK1mzECesLCRSg6APnGx1s",
  "key16": "3FL7csXrNX5439vZ73rGsH6HwDCqDEF4kXGJCZBSc6Scj5czrTiASrAgbNXFdYAyQaHPsjoLaCzn3yAnMVU9zbHK",
  "key17": "2NQWTpX6f8mZr8VjKaEhux4bJimZZx8L1GHRRkuCxACmTNyuPvwjML9o4N7xKuipUCAtp9ZTdeqwaG1tqHEetBCi",
  "key18": "4ZJYnkmX3NMHWg8ZvaKp2UkTs3riphujcD2xj1rFH9BuYbw4qSpMFS9NVcTrZxZPnd4DSKU3weHBgYnHKou5xBzc",
  "key19": "5e6kJx6wVXFbeneu7pnkUWCP7Z5Bc7oXe44z9KnmiXPqpnf1v3V56mFQ43yjxUxmqpnGEQMUoKjKZs2nTDmn79Eh",
  "key20": "3NG96SYRUcsjSfR6PbNU9V2DJebodVDRekN5BZvj5Gf8Wbvyi4a3RPwQaBWwR3GMbWrpj7rCRRKGZFt349tqjCHz",
  "key21": "3uUoLkPfVtjC9yk6y9jfCpRY3ihLzaxRvfsGMqWvicMMWefFzKr12CBB5qW6C3nrzkAibgwT7sdxrVqgNMEx9PaD",
  "key22": "4PtiiJR7zekiPAXdHLerKrVT3Z8Mpt262Ejm7j8MmPz3YbSZM8CkxZRqft3DbLDVS2Tm7ZHjbkFGWscMAXkDXbQ8",
  "key23": "3gn1uqo5FcQ9tzetQ1botYVvPtwBrmSggLY7ARFDnDiiq8EtwoNL7aPsNc1eHUp8hXVGBtvRQGYfjQfeukoehGxj",
  "key24": "KGUm3VTsTF9hM6sJLYHvwSyCJh84Cmxhjjmx9AcfE3F3HYrKR1Niyd9bpg3nVgg3amjpQPzXmtnGaanG7SCfDVd",
  "key25": "4b4rhQVej9EoEtPKkTSvJjmxfUhztUCzYQXDMrKFBmzBbWpXuZZP9sgMUDkYiRoJGPRyPouav5CdpaRZxP3wWk89",
  "key26": "2d6Rjk8QE73AA21Esx9jJ1zM54MzapdFkhDRktHP1CCUS7PB6YikGTFjzvc7kvjRm1eWNDpHhTdPGEnH6q7nu1iV",
  "key27": "58GR5SnNt5FxHhQS47N2waaBXp7JqWRLnaFQVwU5s8b4mWJWd8yyvMhDPVw6Mb3EUNz2Mta2A69PAxqGCwjFhWZG",
  "key28": "3pQXj2mQfYrd63ei7w85fPBzVJgFLZvTYuwMdByM8C27GJVWhjcTjkbf9vdxdchXdvwY2FXGbT6fjZ5SaTfhAtw3",
  "key29": "Dq7etuTK5EuD8pJV4LiXNxC3XfPUwLbUt57hw6Lvmy739skzyfjtA2Fr4pf8RXNZmMmRDZJL1zP9nmR8yGxKdbF",
  "key30": "22dc6AB24aWrvrfhdqykaRmKHTRj6Ww1FVw4WkJ2jJYx9VKoYBSe7TmvxGRWfBHNfbGTZ5suhdDQf4iX42bHr9SC",
  "key31": "3NUTi7ysjaxwcdJduEgeLSTmavvoK4MvPLzcxjfQ2BDA7tYYxMBgWYGUU9Y9ajhT7XPu12ku1f7ZCn9wxZhKZTmX",
  "key32": "5JfonZmP1Ln4G9MDKUqjLxM8S7vJaF53eKcdK6KWwMed4brXgLYjkRSgjWuxR5MZM8SkiBLLhcPHEVnav9DxryKr",
  "key33": "4WvjXSDhZV11cYdLVjEoHZXzDi7BZcujhqo1ket69e2EGhP78fe5orqvCHGo2ui6HuSPUdWRW89fGRCrbrAkA7bF",
  "key34": "23SaRd2CPe2khM3hMj3BgQXNECK4VqoZNFcoTj7UVJUrgyxTtRh2hmxMBxDN5QtoWkh9skY2dX4ZXqvPiFuQjoZe",
  "key35": "5G6ZRQfduES1kDabQzFqRmfERXBr7PFJ5wWSusW8g3oBnsp4N5kvMZLtgFAjGEqr1vygS7ZRpdShU2yJ6xbyNjtK",
  "key36": "2KxuVJ4yUe4VXEgKV4mnz3h1xyuFYxi9aTFEr1MDQqvAw29xbVk4TBdxwLpqcszQkhcvSgsJijhqSQxt4jHAeWVD",
  "key37": "3tNmP6oqzxMArcWttMkfKbS879xP83MUFh7TGWKheAyN8hYMetvuMiGN5Dsw8zQTzM4fNMZT8tJXsa2LhjXz1RJf",
  "key38": "5fAHNxUXN2RFF4xBujb8k894BN5gVwC4ax8vy9K3neQAU2VmuugJXwTLCeZYADrArYxuHN6rCzMPT6ZqwXxZybPb",
  "key39": "3H1hdGUjVyxeH4zy99Bay4NDYGMF99YHjrSRbQsKGkgRYLUEjukPmNTfPtcFRXoVKe1DM9CmsDKZbdaCmo5zfVrB"
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
