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
    "5QDbpkf8A8hWMKccBYo58JVpfYsofy1PM9MoVogWtgmD4AtRr3W5hKTyD2r4w2d8gKU8TcnwdoMhMjCLu8UySJeb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EvMw5ixt7L1fywDkTYcq8hULKD5MCcRA6k8pXavPmnq5RxDTH3x1Q5BukdDVRNM4oGKdQgh9Ut6ibUQmgvWYniH",
  "key1": "4s6HbaTBUMFhxLnRkGoxSJ7GFEYrpegBByeRosmacoBsKJvk8pcm7bzceMEePJwaexhPeJFAHtNiMJ8RuosjEizM",
  "key2": "4fXcNghAEUoa8qtDVGoBMV5fgz8GdV4uChoMErPaLQWsjeG495YJG5qktJaNsB7ixmeJg9Wd2bdfMmJ3kTNGTD4P",
  "key3": "4m468hHwjMVzHytiSG5JiTLrHFCrcMsyKqYzHXNhkvaSctd6jWws5GKmbCD6kWDYLjBVmDWGH9PhvyiZcE2N5Pxh",
  "key4": "4SFi7X5htLWe5fRcgXwygj3H2RhnZMM9XyS7JiTG1dEhaX5YnVtWPBAoSc5Uaa5DLNc2cW9AXFH1RzTXRCq7vVsH",
  "key5": "5vQPxKxbfuTqEu3u4jcwpGdcauxaKZTVhLYmnkdo8PnYkvDviytFWuindggfbEU22QRSZhPY3NeSxopydfvvyca6",
  "key6": "4ETAchXuV5MKQcacSWwaVvLxDkGChNuYVjMcaSJ6jDEFtesewtDxTx4EYyuGVdMQ42Gg2xNjGt1dobNikEWGd12g",
  "key7": "42KVw3cQmxrRSodSacyM756mUz7n8rYDeEpJpjQpk47ck3CFTRUewJDbk6wyravb1J7zoefsJpkMKQMFxLqdecAJ",
  "key8": "5YzdUrgakFcv2HKzZdkCvstywpknPnrLk5U7G42KhpbyhtqiJsCAMfyrhaeGr6mUhmFT4NMPpcF5STadnaK3TSCN",
  "key9": "3KMPsyigtjxz961LP7ieThMEpqvcG99HrDuoE3WfF4FLrPynJUX3qAWCcVuyssodKYYrWRsL5cAxiQ6itEhrqgvw",
  "key10": "4dvPb8exdkjpaA2p2VH49v84zDGgPRiBNptXruk1NJ8bLdzQVa7FxFGpfttSATKQG3LtLnTwcxJLMckRo6UwpD2f",
  "key11": "21EtcWuGPEBJBgVu4gcfaPEJwtZpcBX6KzyqbdqSwHwWTK8tqxgqdN3VFfJx4X8Uab48ppQTJTaJVe6UKpUAKWJe",
  "key12": "kY9yPhhQmw8oASmhBtokPhUYms283nBQEynVTwNZsuvT5BMLWG8Ct653ttH4fhm8hctSeUEbm6KnYSHHDwKTTYn",
  "key13": "4rbw5H26xXLDB1t9KTkdihHy3f4hw9rCj6BjsS6fmisQfrSy6rtJZsqiVePWEiMhqhWxKJW8MC9UZb7VcpDTdyqP",
  "key14": "3wLEbNoefCsx2ArHb3M579CefoHYByvsdKzmDLPNadbLTZjiT1oppZ4yjRMiHSXX9fwW9o7YdTwZiwVBU5yadPFK",
  "key15": "2HLeniHAFdHxSReMGJL3egVwsM2waumfyC8XrfRaXAshcYdkgvN4zFEghuDXsUhygcqNN4756pSuhYLZjdEm2sQy",
  "key16": "5V2MNQ6UGzzKLTXjUKdvixBFEqHf7aAUJS4G37ugvVirs7QXfoZaVyuzuSi9wJWfuMQhsFWWLDFoyfRifxzHKqMY",
  "key17": "urFypeyBrDopTz3v8qPXWnMTLubpEJ71HKJo4jZmiBbB99DjQkVqMQiNPNz1cFWeYuSHXfLVxF1vrgkuRQwSsne",
  "key18": "dbttizVB4SDEkUHcqFUjb1GKhHazYkCfA32j8PmDP9YeabtAe3VTypzCTdevEwpNgBqGFf4PwPWRJYxPrTdgxAv",
  "key19": "5GoyJg59hXZJd8s6PYaHqZj25gYXB4dzHjtCdAQfNJFkHd3Wey3vmTguT146AcHKcShL3dBp27evjf9ZUNMCShs2",
  "key20": "5WQCRg9TtYfeYw7zeXL2CDjVpBfUkip7WaFizG717LXmVhdiEPXm2XHTeqxAkQYCRGTuZwf5onacQsrxbsnk1fTe",
  "key21": "5aCWHod7HBfQQGrVA9bKk2phaath6Dr6a4o6YCY937ajWU6FDbgavApLATANs8octHVwU4EFfKTnBKMUC3AqY96r",
  "key22": "2jgDoH2qFKKWCQSuQd62tS6Kj9P7FTzeHkCqDHAXFr9ujQJZQh74Q2fRrr5iF9rMP7vjEmgwLN7N5u7HeLfeTYrn",
  "key23": "4PGuKcQXVDzLr2TmcW2ThP1JgGpjh1yG1BPyZwQqYCia58Nw1oX2uyMBrrn7bj43EKUPLspBGFX4t9Hg4F1oUmBD",
  "key24": "34CLGjTqMUJwxrh3TuoWZfM66dJsUeBSXRZi2g5AfrU3hoVDDcHqHGtXW2QYX8hMmdpYLVhPSMqRXLti2quQVdPe",
  "key25": "fK5GjS7UZxxrPvMAPnbq1wx3Ao9tD5pgsAq3UCR8sSSsLR8dkKEqppaVcBrxy6cNv7uDaGx8FS1UjEQwUXKaN7g",
  "key26": "QGqtVPfbZc35caUMN229vwbpKHE8GtHkoYR7vLadnrhwAHLpWgGqQwkQaVxmJDzhPKpNnPRLpeJ6zYwjfBrosh2",
  "key27": "4FC6kK6oCGZTnXtrwHGFH7Mb316EBexD24PR398graAfeijR51DQNWxUYWu4NUAT94D4WXjGYS7RCRcLjLakHybD",
  "key28": "5qnYsxrHeCF2Agap5sSL9awCJ7qZTNuP1Exh7QVdpVdLCY7o8hH52C5tsyHEF6v9KumgHiPKGnTyCa2KNVDMZZ8h",
  "key29": "QyPxXcHG2Z3s8dZDGaru2Z7nXxbodHSZDmsdM57F2x9Rro3DJTHcEwKJb7uBZezncbhzto4ca7TZhNdTVC6pYUV",
  "key30": "5e89pNd28fTb56WYgAhCHN1XXciLZFmQiCV3PgUNK7SDvbZVc2KGUXkMTBR74AUdd5fGBTgzTtDto6mwmvuCq7Z3",
  "key31": "31EWPz5v7AA7FhE4dPUYGXeWyydggMkVPbmxZsBq9W7LPov4fSh6U5a88EPh4mEFUhDVyw6VWcg6GJUfv3J9idFL",
  "key32": "4rAvcT7bNjfc34qfwbtTjyGVteJ53pFob3w9SdeEvNLsAsVuDp6JkTaRjYoeW2mki6K2bPBy94nshE7RrGuatarC",
  "key33": "3w5X3PtHBJVbDYWE376WibNa7GqX2ujsdeRRFDzPGv8wvw1rTto9xHiSjq1d4mYtU41HqhGfso2bKa5w7YYQPnSK",
  "key34": "4t6SHSWzy9a9hCEmWxmZ5WkwuX8BMxQVsgMWXqVCzAYTCcK1a6LhGUJ2ZGpbzgdQkmXjeMHbwsmTPRWLuGf3mRRz",
  "key35": "5XiY5XYizJ1gKKzyHpcLXeHFyPjimMeyiH7agm4zYQgFysrVRhPuSG5KFdF1C62kG9K1ywBT8QUhMkX5k9oTbUCm",
  "key36": "5o86xzH8P4N1Fn6CBYoKF1c2S8Tz3mEUQcJTGbcYWs2XoFpLFAN5DXfvYpdREzrYtUDXdGWBpmd9quxWSPNUyiAd",
  "key37": "4qvwi9gNvLNfkghuvh5umHBRPnerYBidAXuP7JgymS5hcCCDXCaJdAZH823w1tpCgzM8LiBTxiAdtLhJu9Yvfp1w",
  "key38": "4MXeyowPuJwjus5F3HWNvYxfPhWh8beEWuXeSognjr8QjvCBjA8vBARGh1CP9qPY34F4hgW1U6FVDCrco8Fqw146",
  "key39": "7ZYE5c6CasR2URigqy7g86TvmA2bNJuDFV3JAjrBRYAgSLpmvuDEuxMyE2DS6GqHT4SLQSs7dSih6UNGfurS9nX",
  "key40": "4TMMWE2VeCf5mU6WSWgijmquQAxPUEzHfij64Z1AQigLFq135eak1SqQYFUcdThsjySxAFScwbioj6LA65jFKppm",
  "key41": "51PiQZ2zZGiwYH6A9DJpv7kVr9rPgkcGs5MgWC6ybx2is6McuXjTHjXpcRSy55aEk7JemSMsqE9fgBe3rJ1Z1GRE"
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
