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
    "FNkPDBdSAUtBasG3692pmRW9BWyqVBFshH5qM8LTLeCEZAvgYaW21685zBp5TindUorvjY1Zp1PEFDx5SCC15B1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R39Ba2vna2eunEc1FJYRzHEvpAB8qCX4cB1ZQSEPhkwTFdNAT8obF5fxf5SyUa386fwqXwSxjLVJ4mcH4TVmyHp",
  "key1": "3CFXighJgFerKdjbz4rTivvcZuqS8weT535WnMRAJBBfbjyRAtvF2uvLStyqyRWQkGzzZFixMavXdhQPuNTJzzqW",
  "key2": "44TCpEpPU8bMSNTDXT5sZM44dB4UtGbdJktjjchooaG2MUgovzctxucb9Aaxfw7xjbvWkVwFUjJxwvJFdvTEYJyS",
  "key3": "iNXwfGEeebzBU5DY6rQBQk5nM6KziecqPsf4vJ2UCKPHRr6HQjzuDhzCHJ74Qe9GXaDi51kNZrRUrECygBSZ5hG",
  "key4": "4QMqoBpJvJA1MptX2wi43UdeL8TQ6wRTw1rwgoKdkGPBMtfxYW22tEmokBZaNenw7DcmZ58mjrLcWz66W8kLswEH",
  "key5": "4L4mFRYR3phoFTHeeLPpH5Cxxw6gX4j952ijgGQG81NWRgXdHsE9LSF5BW74zibCMjbEUShrojTbFHMzGqgQhdSa",
  "key6": "4cV9zVMWKBpFfkFLp2GuA6cmHGVBFyXdsTNgR5EYrHSwwHiQ95kHijQSFE3xNfPRKVFivHF8axAbLRp6KbPesjmQ",
  "key7": "3RWKV76r6nSRmks5bdXJvW6KQMmzaDZNbq9G4UZwQJghGRqRGQk231o2yb9X6HhfxgXENofJyztXc9yrpHPBpWr7",
  "key8": "2VZxe4SnK9C4uyuo7DphuZm3NH2UjWCBLHL84F5maiLuP8Ng2k4s4dsgCFSBguDbTidHrwwQCk8sbTkuuBxs2mS9",
  "key9": "EFNqQKsievYYd9igBzZYXJh1VaVvoG93418QVYWRp58j2gJDRFHjMaQpyJbJhTZRoDqzdu9JoBrnFFYw5xgzfFr",
  "key10": "3sTfwLRmpZJiv7Q3ztozWi21fzpdMqQC8F729nJep7vtqBJ5kXsoNTo9ffEXDnrsnf9Qur75sCMMfD4J5hajUY7W",
  "key11": "4CDaBAyjxBTXW2TvDftZKq9QC4f8TkLuvRxLeQdFeieAfRP6FhWbpxBNTdDSciJRLR7v2XFWFtwtTeiPSvYvXKmz",
  "key12": "4v4124rFsK3udqTqC9i1VYFhnEP5VE5sXhBZztCcasC9u4U3qKJh8w6CJkqGnfwgVY4xoLq5sb6qyKU9uen6agNV",
  "key13": "3UGPMuZwHExzX7v3moJPrGbqq4QWC4HsqqwycpC2kXTshGeZH23XHsPDu7HyuEGzk8bTiYkm2FMWnkLAPiKSYn73",
  "key14": "4vFDi3NLAMAu3jSuP389mbVi6oypr3Me6WtrDYxT7DUud6Ji9PXhjwp2kEqwSfi27aVjXXB9xHg1FujwVxJN2zpt",
  "key15": "5fnU5p3TBZd5r5aAstPBXSEpibyTEvoawogsmC7YoK9oTHHZUPBhLQ9RP9jgJBYAAgCBLWSk9TisWkWL2ofQXqGi",
  "key16": "51S7FT6nZ3VhPj8PYF7VDZpDmyArVrb3WgZmE5aZu2ds98ErjxFNskcupbbxnFzmvc4Ltc5xJGJ1CdmciiQTbYet",
  "key17": "5aarYyJrqbH5L3JP5TwN5N1fLmQQzj9Btfk6HBFCpamT9Wbd4YRKHSSWmNWyaxqeTGSQziqoGDmUvQ7XAg7Bnioy",
  "key18": "E8fsVmtrKZ7AAcXcjrobd9nzuzBLynqUuFmT1Bd7p7hsXMbwELwG2cV6kageF3E8q4gruqGj4QyACRTh69oAEfH",
  "key19": "2s7V8kS3ZAkizD6Zk9nKihVfqKDsGuP3XLAPz3te37ebTUtfyQE6gcin6XXBnq2dzabQoX95voByydfYdWKvRAut",
  "key20": "5Pc5u8ML9SfWc7LKNBR5cUNafzdh1CWsE395gCUc1Kc3T4HpFCfzzaHiE6kz6neSg4nppN3oDqoX8tRGmmWqAYNh",
  "key21": "7DwsgphSjis4ucZG6jjNgr6ddGPjX1AbFWaCqsn58LeamrXyk1syhc9CHFas3Q4HPAzcKiqaDsghv22ur3Qgh2S",
  "key22": "bZ3Tz1fuG2GLWEk3TosG7FgK2S3rroRYU1DSCt7zutK9jvjin6kiJUus5MCLs4zW2HBk4mwSc4uFxvHMp92dpEn",
  "key23": "4hmAZeYEwk3tN6tbNQc7jkHyHeCjSRMY5WBUtzF2jjPGSqvCd4jJU9vMXoG85gVXsv81kCJgv4EVV4LNSBhRXSmo",
  "key24": "5MfdA7uQPyGGJHvWR9pXoptahsCmiHDjpnLvFyarDgvFpXsU7WTEK2EXn9RdKn5uvZ6pEWSeRhDQr8G4erid6jcc",
  "key25": "5u4rkRcCDEkzNz8pfaFUAqU4PTsUYJ6D5S6S7yiVJUmnkYn2HZmAZQDYXs5BFbvkZWwra74QCV2WYtiAHd2Febp2",
  "key26": "3x7doXdU4W172JTsPtW7EDTV1pNj42v7qDadE1WgJuDRroEoYGLmqsgAmGLBELbQZdyxH7eAYWT6UYW5jB9tyM9h",
  "key27": "5mZyrEUKzCbTkDXdroHJSmKT39pfcWPPbvAZY6TiXKQtSNEmSPbdSbV8YqrigU6qri3qFbQvUk17V9KNi72knoJC",
  "key28": "3MHT6iy7kS6Y5jJUv1vX1GcPoiT28isHV55QEYVtJ9wFHwUg9jWRGLadwBZyJSGATtaUFCXaXcoRqEM83B9YWVtq",
  "key29": "4zCYtTJjSdPKVyvWsSeec53WPUSpbKv7FXz9eEngQWTr3cj821cfPQF2ehusbQPjEtLRNgsyx2358S5vNRUNLdcE",
  "key30": "zoX14W7HjB1Dsr7L5qEhEhBsUZPycKqNY5mQs6pLeffwERJ5iZrnDTTr83MEMhHNZ8nN1cgEfNsTCtzb65rprjn",
  "key31": "24dtLbV5WTVLFF3f5TsYYwhA2tbVT61jNdesZX17dm8yLcKWK1HUxDcDTrsHKcHZ2HYVS7Bu2Ry43gSaX283rWiq",
  "key32": "46KgxZZ7gExAbrQ1QBxCC7Nj4SEyf1gC67yNsi9wKLEivxuhQXBj5kZEfYYyFAsaAjudQr6nSDoM12oNnsUV1TSW",
  "key33": "JMH3cHrBksdTmZhrXS7YuLWyvhd18jzbz8bcSp61hhRWwnsNtwf2pWDHwX1QMggMeVX36qs5yRUUBYTokEVrhSx",
  "key34": "4gpXBQsMkBT6u838SzCtpvbZ9tRD587TFH3SYQ5LrBHjetDmRuTobSbGifh4RYdM2ceRYyi7GxC1Pv28PnAZZPXK",
  "key35": "F9gTiCUZsyEjDRq8G699vBqG1RRmPtukVEhSpP2Fjzas4pSD9qDQKrEWDdCBB63qsDW5hqu7fs513y4J3gcWVrc",
  "key36": "hj41kVGxWpRDTWG9bCkWvYhEe5sXENmdm3U8QVABaUUxW3iTPUJuV7FPN18JwmL4UNGdepZuLp7JoLLM2Bmh9Ji",
  "key37": "64RHRUcgQnNm5yYqMgjZGzoocb1kcfc7ZzxtUPcC5huumrvjaHjGBp6d57DxvyAaKxBeGWjabBBaEaugsZJEq6WJ",
  "key38": "34tYPnChSxcHjabQZzbxZJnyc1j5Savmp9mEbCFCVuJedsRANeXDEMsx5bZVrJtJLvowepcmTNpwJQ75NxHkEpZV",
  "key39": "NTv8R341P3GanBm1wVseZJdPCG15Gv54KXi958UDCYivSAYUoEsrMjGk7iwPsJuBx9o9HgLH8hDwUzhoiBKqVhv",
  "key40": "3HMAfGYe57jUbCBWwAjQvaGkAU6FjQnYys64is4hos44Ltb41SUFHgqvqKT8NQn8pTqr3vJP6sQkUGKNwY5dgDkB",
  "key41": "2J5Hq8vHx71G3AH3ki5kJ91mcPnBT2sZqQUJ8bXcGBbSPERoyXuWyoSmRZf75YSfahMT8ZvymNH25PaCVhGtx41M",
  "key42": "5dAEGbK5PXJvJ4bWWGuB79NW3jvw28zEbTJvYXPfNjxRqyqjY4aQfePPnacNxY2y3tdtJZiacTWhz7Ci9WabL2Sg",
  "key43": "2eQ7Qmz7GDuovFTxGTNbL1AMFVZDF3htj8z5urP5mzB6yz6cmYDGt6k8xSqKVDE3A2iSuvdimfffKm5am41Tk27b",
  "key44": "5TWEUqYo9HKGdBf4JaGcMcZpwrRVZsUMcgiR5wHUkixtZEWN7VSmZTj5DdaPMTPiNR3MJ6KdjQozenCRbYhQrDtH",
  "key45": "vNcGaGz7qpmYR86EZXbUZPxCjsJZ3JDPwxTUTDkxbMgbbF5R9LZSLPdC4mEi6d9xsDdWAWUdvuqc6PA3S2HPBQe",
  "key46": "2mzM9z4DWWUxck5HfDjDYLeZhpXKYitNTfbA4Z7q1QczqsMErSeZFe3vV7JELtCs5VAJteMPd9itMqiqsYua7aGs",
  "key47": "2Q59VKPz4kz38bQ7wwNGa1NEpKHMcqtcHAii4eEfTJ5UvxExeQWyqzxJPoWiSmvY9HmXkMNjxxxH2FwrUCbS1DuM",
  "key48": "cnUgkryAASbwKYufkxAGAbxTzmSvyZMaJGLf22K1s9bUkLLYkf7t1x38Wngw7yHE68AzkN49GhiQSb3nnWJZaXs",
  "key49": "h82zYqCvJacs5QSEPsu5m9X5x1GnsVUZoNT3kvoFatjQ7vRdTdHvsjGkCccdNQKwpFvJ1LitVMJGtgceUix8Eyu"
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
