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
    "2PnpDHYBcu9nsHyECv8JX1snjZpALURj3tw3PAswVAPeVBALNnGYPf6LzVVGE5QJGysLZYbwFjR5qv9aXKTX9enD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "431afuoW2rjNf3fKFTfrRnDGQ9AjQs2VZP7owEB6VbAntFNQoTKkbYmtYPFzZB7WfXbFVNVbnq4DBxvj3Et7zuf5",
  "key1": "DYM9uruMA15gLnd34xhFiFQPNY4iVuq6yHWUB9hXqWjHh4AJfBpUumfThL2LVzXzLmbK8vxXKYMYBpC8qRyuQM1",
  "key2": "4eRJowJ2N73gsTDDyZGxucrNaMgyEmyMsPg39ZD1ULXmQUZZeCYL1jpSb5KcPY5oNgr1nyp9ZUJ19rHGHY77shgQ",
  "key3": "i4iu1Cik7HfDF6f3kwyEiqYpFYF76tD3yvRu6xykeGqZEK7Nqt88Rg9sT1LThMTZyqxa7ASFNxG1qn9YdmZf8Ei",
  "key4": "482wkL5LvB3L2SGbR8MoCnywMufUZk4SagZAMwQLWfvVFHnfvBd4FNnxim2VqyakcHDntbejd65npQ8P4SWuuaYM",
  "key5": "3JUYaKszJv9XbAKaLN2izeJHT3fHQ5DRmiV4yXnY8aQ1w6LPBLYukDNvFCHz5Yc7ZbUVsBkfrvu4mGCH4Z7iATKp",
  "key6": "4Ur569DGG3dRenGzbt9KoDkApLNLn5JPay37V89RvUYHFT3fMiHrbUTQNBej1g8pbjZoQtqnxaEDeAPhF5bCfmDA",
  "key7": "57a372U1PPzNoZk4rbxWoHGeGVBv2n8Y7A1JCjP235ao9p6H3epDqR5DtgrBXLuXUPnwCfcNjcrGwT4v5538KGBj",
  "key8": "5qoXQqwoS1ed9BrzQLbLjtuccdnrXGtDUAR3axKCPkTgiKTFtsue2pmi4eBpXsgkCXFfZ7j3jkud419Q8UNo573y",
  "key9": "PMyiFn2WzNVRwQ8cbYtHPC7u6jbM4xHzSS59GxYyUXRU9NbL1oKrLYRDjNrSRjjG6kmV8emL1ogLDxMP7dHKrLX",
  "key10": "4Q9uB4w7N3tiNtVoDUAMrKwjScZH1tpAt6HANGfVjv1peELmXcdGTtMbfSDa4W7pHBHwDwJaEPr3TWjrTTgSEefc",
  "key11": "4B7UtKT8PKeGYYqMoK94tQgxznyTiL958jFyyAQ4ugzA4JTXRhznUtQKy54LNvLVManffAPt7kKbXFMj6BYM1Ef7",
  "key12": "48DPAxyvHKWU13DLU2dfZkb4rwfTa6E3cxJirU1ZfZ7ZkMj7cSGSbkBRfeVBJ8xzEN8FWi47DsdZfZNAaJwD3BQA",
  "key13": "2RzSCKYhohNYMFHc9w4fAWJ4CUXnUjRN8DJ5sfSEU1Gr5yM1XVP2y3VBepUKtkmMNBJzteTJHF4vsfQMyBDohw33",
  "key14": "5G9noAkwz3Fxeu2UJYgnS66Mi2dMTS3wVYzjU3xfo32BRBkFxcBfY6pTurD14gms3VGb9VT15yX7HUahbd7a123k",
  "key15": "61s2wafJ45BLFhN6WeBgBxxPHiG4afWkwcdAh9Hf36FZbgM55KM7oUS5oFSssMUJVkk61CN11f8tt8v9NJzNzHSQ",
  "key16": "2QLryJ1B8SShLzve4kd5hHySicUsxkDMz8EiQpYN3ZC1EGgqZYcbvUrSBCkexPDk9uaMXnfbabYUUMEpdk2QmDfZ",
  "key17": "21hDbsTsEqFRhhWBwpVPEB8m1B1ajPArR1HJwemHehzNjiyTu5R9uDbkUr5mtXMy92bW6R4nmQZf61Joepqft43t",
  "key18": "3ZmkYs6eM3hiXYowGqpbPHdNTXn4eGX9gwfpCyjMkTS8WBk8SXTMW2SnL2t6Q8CR1Pi3EyMTdHP8ArhWgSvGcNpL",
  "key19": "5Wvv54JLJ2gr1k4BGWY2Pqr8p1ja2o8TgznCqYBzLDzk8GxeBmKmoqRATapSByndSB7hEuky5jUC4Fvffpkt21jD",
  "key20": "39eSxfeQ2PLHrjtos5jZPL49yt383prD25rB1XPo4BFJqTV9cofz7AztbeTwED7ppgHRYvjBMnEjM7rgTZQ8A7Y",
  "key21": "4VCrpvQB1qjMJXQU1tTLpujzGBLtne3CadkycQ86Fh4c9yMvcjsViGfDB98hAGrW1XGXEMmEHDpMa2ox484LJDMq",
  "key22": "1JngEWCUy4LxdUxA1ZoMhLAnXVNxaTTaMYyxBqU2o5aeWtRzEaKZBu3kAnvoZ3dCWjXnz1m5ZsexkYCGEeFXjKi",
  "key23": "3ttZhgnwKDLrhUNqQjeqNHzMU2La7HTuDxTHgLv4himnAVoG33ztwhtTjap4tbTjFhDcrkUTL9THGsDjq6tRk2zy",
  "key24": "5beJW4VsCDTQBPF36aXjhNNykZ5fp4cmNbAeDS78azM7Uhvqvr6VWVVwAGonbqc6kmfJ5HjpwiDgdVEr9yKxzRC9",
  "key25": "hDre2tRGRWQhaBdscjVRarps7PPtJyFGEdK6NVeECH7Lt8To8ESRN3DviAJtJkzZ8aLNSEhoUrc6VbYfLSKDaUD",
  "key26": "4TL53TiZtiWyd3fRDqCrXoHLLwQPvtWzNGsm962ae8DcjXcXsjKBheucohXSxS8hA6mp9W9DwSpV22fWKnsm66Bo",
  "key27": "3enfwsT3rDYqKNfZQyjJP5AwhTe52V2poYNKwn33g8LFrjYi1z4RPR4SSZWUWmY9qmy6ZDkpG1TkV8hCQL5V4SsZ",
  "key28": "2EkjuJqYfAg9x2VVGE7okipaMfaBmyjaJDJoJV3Vra4drqaSX5jKmD3bD2zuq4HBdzMR5D1dK8PGm8bkM5awCDRk",
  "key29": "442Gu7gRfis3gpWXPYVFDdL4EqYuDCu2vJUQZdZiic23g6cuycfgMVfC9z4uXpRbdNEFocqyg5qWyUmK8ChEESuz",
  "key30": "23nN8uyf4XcRvHV9DiW7tx2o5f1Q8zAQUy6EEmqHZ8t7P4DbwWmvAAFSQW5VrEuTjaD3HL8XuuHKD47HZF3vSLRp",
  "key31": "4mZbgQ3g4WamV2dgeWp6xzc92H2cCkiQXZe5sAaTnQmBtmoCz2Y8CDm9RLKxk4wtu8JKb9JTWdq4ypADTeGpYrh6",
  "key32": "4t8Ce826yCJLs1fEEP2Pf5r62uEN3do7Aa6xmhEBbp5bmYkuTvtieonh7hkK6t3ZnpSDTCcamRJjLxP3PPLwDMSQ",
  "key33": "2vGB7XEpFu4SatQ5w1VE5Z9eeUr7vg6h6uncuKNurQWJSCM1duuPYxwvC4ouY7RTiEjYnu1KTUWFPvErcLL3ZRBU",
  "key34": "3RGNhVxTGJPQJhvfrCpSprzygqNTrjyk7RtTyTRYz6rAgjvVgNBMDhAVYoT3Zo2Z5vfURsDDcBqr6QkfLX2yAcBs",
  "key35": "5F1wv5Eyb5tZK5AXzgxwbWkm9UbNMdJDmejAdwiVEbaQmefcw5fzANtckXF3xs4rueX5VfVv3eoh8YomyWhSAXBU",
  "key36": "yXc7mWmC7GkjdftFwd4ovpjbxtgYKZuC3XB4xjQNNWVdhUwYNjPCdH3MbpqjsK9v4iAmpHHGjwgWjWSv46AYS3e",
  "key37": "5YSt8PS7TDRKqVgA6eu4xT9KCH1zHS4A1oarfAawovfQWfh7uWqfQbTJ1fXF28Qb7imfmtku58T1PjwVHGFtUAGS"
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
