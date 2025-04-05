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
    "3gqxcqqKCKJV9pTt2pTBvfukg661Js4kTa1zwFQKZZ7hLhPw5K34GjfkCAJyouyzAY9DyMhRB9GDNNsWczdbbuQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GrZEs41gzca8bLYwBGdw591ndU3RYMsLQHmjQQ53sAP6KnwFmtcVsjuLJwQXrqUkZm2azJAoZyvxKn2ET1gBrEy",
  "key1": "5523kg8b6HhVmiPiSApUqmzRsXyqpYDayckJ4dbY4vEvzreRThdQ85EZRn5QnWjgN6jdaNM5ZUMqn8yWQAvLnsCZ",
  "key2": "3bHdv7DFixaNt1mygaiRqRDM7dTQQjjiqCm3CE8YtCs4G1WWKiySTxQLD4jGS6Wsc5Ki2E5dT9oLtJrcVbxptfbL",
  "key3": "679myiAq7EA6nWY8fp7rruamX4zewjVZgBm5K87EpEM3uPoEQbohuApVKZqZg9v88RBKNe1XTTsbdUPvo84StL7B",
  "key4": "NiLVFfRT89YGuYk72mHjsZuwATbi8zZWo6gwzEapMR1UybD1EYp7dkCEn1jrg8phG3Pz1JKFFMfXJSCzVTThCqu",
  "key5": "5kdfQfe1qdbez4SJb8F2qvbkLVv8wJ81SL6gY1ny5cYSCTNpAVBQx6HFA6WSX5scDHuKd7NvANBxwVoGycubTvpA",
  "key6": "3WhTuY1LQsYmXxBzV4hCM9XCrdGoe3vj4scLDgdNaZTPqq6muDvc9QbNdmG6cYPDRR5g4SDN55QfYkmSF6AVCG9z",
  "key7": "5UQ3au7De7cdi1bb3Be3sq53YT18RDfpQsBtxkSDwuKPe9j5NjUx5VV9WUPPk1mQF4mHeZkxKT5pozAdjiaTukEH",
  "key8": "5Awy73bWwDe9VxWBex4iGqTmn4kZppKoygJ2nTSKyyfFawmatMC4QUpSLaDeQTi6dtLSqT4zF9Yqi4FJUPwqC3V5",
  "key9": "3dZvBdwVXQCabAixzmp1GT2E5z4fCZNZo1dRvSXcLFpvMrA1UcPU8SuNWXEP1NtoZc3QahDB28D1GLAwxtBpqukt",
  "key10": "3DeFfpQuXjYpoEZ2CfkLGsawKT1i8LKNQqyVu3HxYqLy6xSxUPksTqcvHTHHjnQnpu5ZmM8kX8JecWj4VCrbfLcf",
  "key11": "3rbLRnB7Dwxbsqzo8tGjJKAqdJqbD5FVU3oKTaRsbe8qZ4xnr3M1rEtCgu4XVVqEnutHaEYwkZqUGqzbmLkXJKEC",
  "key12": "2KBGRQZLuudwR6uSS8XRgFDMZrzK8HoQwxRDZykFiJJUgLcKTDaYbyoRQPUJf7RA3yP83o3RhQFyQBXrocMT93bk",
  "key13": "2ttmTap5P3dpkcct4Z3EZunHKKZcVxDB8j8526eRbpgEkHCxALBadvb2fB3tGc6PZKLwrXVNrNVQjj2eiY36HQKw",
  "key14": "zoY45EGztsxDcKm2emaThQ43mtspmQ5NBnHNoroFVYpnhktC9BGJgy6BNNF7n4mweogzcfN4RBdX76qPPhqCSV7",
  "key15": "5fmr9tnrhdmtZcYWy3A2pBT2abv5Y1vi4m6a4Adr6CPbNduP9wiD91PhYGfXDYXV1yFssE6rYe7N5EF4E4BM7m2W",
  "key16": "4otWGMvYENSycLeJ8Pa2GsQsXhzGT1mazQMtbN1mJaepRM7j4vmEdKwh3xT1zL2nchZGgaZQDsGaS2GWfCscyFV7",
  "key17": "4AXXdfsNCq2L6wggAkVVmioyC6dnerFJKfra69jWBPW6V66i6sEZdYRoHjMBiWovcnaJpFpTx3fX8fv4yAA2g1dH",
  "key18": "nzeA3X9LJnyqhqnyW138vWR4ULFpaonVn1WgeYNoJWAhPwkAmbgkH4uL3nfTk2L6td7n8NeMeggZubtRZUNrZLL",
  "key19": "4Y8Sof17dDZSxzMrGL4cZTS3U15mPXEMhBDyV9qLEh9fFY5Amq8APzaT9QnfLEgj6UCdCmaK6qC8VJbAuV5ivpYB",
  "key20": "5ijZwwDmjwxLRLw4VwreUkUVNGBhq1dFcPFiVwYkDmkuL6GsDckVGGAG9YiH8kvQ1onmWohS1iHb1FFHrVSpfCPH",
  "key21": "Nn8U1bAG6bCqEK5KQgLJLPRRKooHdmgiXJE4fKJnBTjobSnAUGrjrGLErJCLhqtttmefHEDF8L3KByptASfknNo",
  "key22": "wYcZuPHhJD5gnUZCmaDpTvEpFApRjyqs1pG4kjFdGFeHBh4Td7Sd4aWjewUVgDCSfi2KruCRzK5HhW41j6DnRdb",
  "key23": "kwPk9xWqNmmdoQf6yvFR7dfXSL9o2tAYAWy1nFn15z4AZkdhXyrp7trUdpe7S9ky1pqaRx631UD4A4joLqoBCuV",
  "key24": "2W9C6WgX3HckJjoXMcn9Ejg2sQGLYpD3ij7UPW1WcWF32YCZDZZ2CuHoK7bUAnCFQt5n8hK3a1axCv16mMdwD2y1",
  "key25": "67HabM5pRXw7naEe6fvem73AgGGfozWZEcZxpvpCbJyfNnoqAAe7AfkwQztfZayEaQiv71TvkEzHf1maVSdrYXHi",
  "key26": "4hUPJngiNsNEcAJySrsFPbkz9HwMcHGajyMUiXCCUk5feirYmSgXhfjBqkv5MLYAc6JrijMbqkuCrKJFN8VrBWfz",
  "key27": "22mtLCE4JsGmGDZ4Wdm21tvQH58BkbMvBCcv65fsn7A2d3U74XKXXz1bj4Q8bxSx8eszbcnMJKZspUDMbQCXLhnt",
  "key28": "4vxZPgiz8SjFiXP8UURmB3jSFmMYqPG8X3qVGg7xMKNBHNsPRrb9hWHh5coF6vNhp1gcQ1L1MF5ghY6vESnAwtHT",
  "key29": "HjzCogUQgVbHM9V3YD9T5Pp4AQTeFCf9zYPn1pifYeTrQqLwKaibMY1kNjv9jpVnJCMrXhyUAdDoih5xLF1EzSB",
  "key30": "UYyqRnii3Kh3TSzgz6QDEzqnJQ5ga5WLQcN653Csy6w7tXf5RUr7VuyfwKf6QJr7khGH8VVXRRVT9hSsHwmPTiP",
  "key31": "oj7LtXcSJeMQ8V8iqE5uRReC3ctHaTXbq6eEZm8shg8jDyC4MmWsnpo4fkzhmWNBAufUANpgxbpvXw2zJP3QNkL",
  "key32": "3f1rpmKYmxkTUbTVHa38khPPUYBdWSu6bKP3mwaJHKbA6zd2S6U9nYheRZmkPqagDhxyoCAEdrDd5Mj8tp7aVqnT",
  "key33": "5usprQX9hywaDG37jJwnsFgU8p3UPFfeHtzWpAa6o5EvoXdiy1yTHZREwS7cTJ6a2d6tvQyG45gTdpAxmJEjiQe8",
  "key34": "4AvJ9uxHxBYbbDqfEB7u51d8zpLsoG75Jmt9fwBs13LsSJPMMrmpdX8vgBkdoXRr972c2qbSbx1HBzWpdPx9ZbBq",
  "key35": "5S33mce5TR8wGPV4F7MxpDuk9rvZrAtGUSBVrXJy7rpnNRi1y33caz56fbFZizD46vQQADZEjG6fPZHyRushisAn",
  "key36": "5xhoSnaA5razUAxhm6F1pNm1oYrxeqHAhgNg7As6PSbyQz2oNNPwtV6Dfzqeymvpc68dbQQr3SYANF5AxYTL8tRw"
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
