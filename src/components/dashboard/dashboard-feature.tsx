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
    "3uLmH7gNDmy1qrtcZCTBXVhu6hVzQwa5j8sZLBrxKYBUPvv8w9Qu7i9UAnX9vxHoZBKYpy6zEyE3iyZTTpb3qnUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gAW88tD6s9A6NAjBNhFjNi7nd3Xjgfx3zBgGf2czCXJzEm7JZX2b2kXZPnnFpySHve6QQUaiW7FDrJNTJ3LZgex",
  "key1": "3B84oU7E68i545GRdhLWaGBcw7Qwg8L2ys4q6JJYmSJ2uJ1JV57rVowCgeS2QeJSyB5VqBHUhhWFaywmCf29xHsS",
  "key2": "2AeyiNQ1pHj51se4hBKoDT3d4SbbhXGafYoj8gZhuVFWzUUxmX2iPRK3xDsy13eKYaqhoyFEEvGLG8eN4YzAcSER",
  "key3": "5uKGqF2fHnJFZA9WCxj5H9d8zu2hPp8Z9PimJhxXjfgPyPyq4dKVMxmb3XpYk2rupCkKsKPih3bD1R3epYDinjUV",
  "key4": "3WUUSeJf9rnHq7kW3MYpvitmjEEmSQcGdT23t7KrXHb3JhgHWsrMsCEUzkXggEwHN8au1upJcD5V1xMcP9BewyKC",
  "key5": "4AaZpFNBGCnd86mWJNVa2sPha56gdurUqPn7xKsy8H1KG2ofbdUvZSVD5DFTEm2vTDuSfiPqEx71QkDwFPhPUxZV",
  "key6": "5qmXp6ZVahmsvKHrSexVm36CN2se17bDqN6Nzih82KqH8Bx1hCJLYkRteUqoyNigJesq8qoZsRUYPQK9Bn9ZavCc",
  "key7": "5s59Mz7KhhRDdNNpDdFCWcUCPcFpgS8iRNq4doj323Cb9doh4Xet5181NZLQTEuvdue4pfpng7tUMXazm8RhHvzc",
  "key8": "5f2S3ZmXA459DMc3fgjPfoSSmtVmkPFDYwax2aQ5XfbUqdeEJ3PJ76Unp2ZaK4iE4quCarxJCBPcqSqaZSHNaUEd",
  "key9": "4R8Aoq2rzbzxFGHPTBLDzFP3DY7vxxC5RgjhZWc7MAWfcjhors2znhTVakWFAKhEGoAjpHhngXSNpmdhyXRxPn9m",
  "key10": "4xbqRL3HPWHLnG4cvKoAg6C1unUev8ad2Je2NFc1a3r3cHak4KjvGhXDvKuyc7zzcUak5FYXUHweG6nVYtoz3i99",
  "key11": "27HNuPT6BgzQSJdE8r2z4j4SJPso4mNYBQPoS386jhGhqSECAbcwsrGNAvw5SntMUVj6WjwX5cMY9cVhNbZMtjTN",
  "key12": "N9ZBT8FbH7Xp61vtY3pTkWjSTY7PusmdSkjZbk7d5ahDK6eGaLjWeUNe9XW9hwvgBT2p6ngZku3UixynfE4ZbSb",
  "key13": "4VnfsSnsZnM8VA2zknVqhgzPB4Zksmwm9py9Ez5hq11s8hXQAByErA3MmMctgkn5ByrSvxwuod8FnGwXvi6pYLYZ",
  "key14": "4w4XmuajGDGYicFu5FcYqeeLgX8DiQskuhHH5BUFrrLU7j6MaqJWg9Z6ofQ5EyXtihNMFfKeKVL9Ef4GoxgJXQPF",
  "key15": "4GkDqPovZSTuHhCDuJc1UPyUiKjo9urEuKLf5ciLgNwbfKjjdzMRuth98EbVGhHYxVeUbdhrPR7wNedLotExiUkx",
  "key16": "5DHPLwAQuAxw8Hd9yaE5KRav9YkZwoMFPZwo7nQPuDj4wBs1hNshL1yCeDgHUNEjeDKWS1Sp39hLafRBeZuvGiKq",
  "key17": "61F25ReXwb7LZuhLUVUEVRAWotkUNjT2cW4gn1sSNorCWXXk9TxMpHP9YdtBp2LseiSDFh1ptBLxbBrUXBEnNikm",
  "key18": "5X6VF8KaMdgAGTnixi5i5FnMfYbnCYXvDpwrZRzxPXRsg7heKt5PwBLa3uSvYBUCJkUqsXyjDJ2hrdjo8XQVV8Zh",
  "key19": "4tWdoskrmJZXrnNhSXS8SbFTPGk3wAocTH3VgktXiEkdmBLwyNyiBhfgejmxxVQSRQDkAz6xd6A6tjSLuzAL8LnM",
  "key20": "4wVH9b3aqNmH4sVC5TTv8sbJA89itNs5bP7KaTCvj2rFdP4nArP97sqwVqpN9ABn2EhefpofpHGJ89vxkHZe3Tjt",
  "key21": "3j2pK9V4d6L5z9KAEieUYGSNmYqVaAV7otTTj65EfxVBu9RzEcVa6DaMTrgxGsK7jpPq7sFnq1HBaFH7aD9NCS54",
  "key22": "mEGncUQY5KhyE1paWKTwFM8taX9LSRM9a8uPgpkcTKhGSEYLYC4tomK4NBUjvaKfpHA1jQbUj23zBhZUhN9wuFN",
  "key23": "rtQD62X3gRSvyGd2pVUhZuRpKcuTLaL29a7Jgighr61CGB4X3ZmFusvTARRmXmDiEd43HQyfxrrTf8GXgDjWUdF",
  "key24": "2rtc1eFwamxqRPFNpzgCsR3cfxjXzRms4rXB4usn7Toq1cy6RoPpaYsn97s2i1fnSkT1MWkMYfPnes2sK133UNqj",
  "key25": "qijxMoXq3woT6CZiHfg7VhpuX6Nmex1tkoDadWfKvL6xtTkLR6ruYfdZ3x8G2vT5m9UGPBW2Tjnn9Nm8btgLCDw",
  "key26": "2FuoqeQuYkoCiBxv8CehwY22hvVBVEvkFHxdaxAGSJNzc5zYaPJDGKV2yyvdm1CgEtC6K7KiRMvcnn8moPxub8e9",
  "key27": "5ktK8Fe5H6pDfc7kDEaPbrun56BNxcdJGCxiTMWGGyvGGacxyS2hfymdnCufKoWAZLcjZDEXFDFLH3azXvPZjYuP",
  "key28": "2smzdErYQm2UUc84qafkFsgS6dMYz5CLa4TDXwdBde8c97byPz4cyiuMfyhiVBhonwuBwRz6SRNg8ok77vgCxYr1",
  "key29": "64bhJWHsN7BXe6vR8jSVAsfKvAYEDn28VD6wwiWxwf45pj4JcR1zRXySN83GCt66SmoiJBkCJLqxhDzh8TwvX9bD",
  "key30": "N2boJ3cRXwofN7aPfrMYvqTRxvqBeBpvJ2T4cvfPhLT76b5a3DyqDUADbfYyuUeygmmCL2W2od8G42qW1QJEny3",
  "key31": "kjv3nXKB1Pezo9FzHsSTw2XkLeByobtecCjczrxZzfRZ2XKnkQTKECeKNbSKiK6FDUENeAqRGW6WfbPci4EPsof",
  "key32": "4A6YKncqzpVK8MMbPsDESobrsXn4Qb9Mx3Z3RRRircZW3vEw4doWmb6CSKY4j93ybSPxJEXQ7xtmAegZPnUizHpe",
  "key33": "5t8QSUrrE3w5nyZGXtU8XcJqPjQ3ynxRLD6WgWoHJhXwEstuwiFm3gBFfv5a91JqxL4ZFu5ks436SjdZgabzbMoN",
  "key34": "5H6sHeahgzUf5bwDrHho3yfEawgUAJBQ4VXTCQ9rrPTWyYzoHeH1L84kCbQYDc1GkWMfiopRL22GY44ioaBTbWUK",
  "key35": "5ScpmsdzUCfgnwC4LaWsQ3WUuEju3qtTMJMv3c8hNA7ViA9zP2BtXdUNRBavL5a62P2GD8UyUH5kL67vRrwNuFrL",
  "key36": "51Vxd4tgjkCUdgegdKcwzKHgbAtTNWAVaGEHbPFjapB6fvfZpX17vroRiEsDb8EoQr34AFgMnCDW3jjpBWVHUR8b",
  "key37": "5gTjhefBVz1so2mQGN9GBWtrwrqcpbVyALx4Nqj877PremAZ923Xt9m6kyspumF6DppDC3VUuy9FNtmBYaptMjnr",
  "key38": "5cKXdZQDzjVUApR5XSRWQUNaGSc47GUtnkLh6QXo4AsaeXG26gQdv7LWGFxNh9N9ZG6PhBv9kwjsnZbn6XQr7jdK",
  "key39": "3jJUfw6VxVTn2j8b1TzMgJv7mfYU4V4pKmaebT1haFtgtzyKp8PJ4hUHAeuSJf7SFZ3JJ7ivvjZqbrbFh1rshss8"
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
