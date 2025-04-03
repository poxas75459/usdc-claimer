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
    "5nEmdoY8kZsjyEYisiSvWZVbwjaUChS8kveczh78droSWiY4ZvNgKthbeQzqSK54MwR7XyrTV1N8wAiQX77uHtLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WgVFibdeVazird6fUYVAPZuCbJhKr7hTJAkFLbw2PQvHWNzejRCMkbpigLtf79mHbM1wrbAhfRL9JQsmPjv92jx",
  "key1": "2t8v5VpAKehR4dHy7J18efFRbFDK8xSLD4RWG85PBNyNe6kvXYNopUzJ29T5fToZBpiWrJJuiojTZcZUoxXTwsek",
  "key2": "Qx5Rmfje1deQ4y3DwiqpYdVaa93gH6ES4JA7edgbbjxt48UKQyCgiaRQg1hKJrHSpqLnNmARTxfdSUdZReNyGen",
  "key3": "2sVVxuSr8MDJ4fnWxSstUSjAjaQiL3xa21w5rN36QWjisViW5XEneNTqF6pukx6RdyQNoqh7QDF2BSVJu2dHchSB",
  "key4": "35QGS3w2gMV4wECGgY9orbV6aDWjuR55kaV3EYAK32wFn4bzpUboZY8v6SGjny9pPsihSqdKStAVwJ7hL3cwufdr",
  "key5": "224Gzsa4arXL24gXMeUWg5pVK8qz5iUsLptS4reFJtBtTr82sc7ZAo7qNcb1wABp1F8n6Jv2dvVVprK1PsZLDP5z",
  "key6": "GxA9gF2Ls6dcqEge5rPawqmgJ3wMkTxWpZKZiFVmRM1RyiazEc2S6rY8Q3hDTLBMx15GBN4GqCLQNJoBT6Np7ZV",
  "key7": "49Z76BHLtLNJd9HZ18ZP4TB377JLcTm8WBPM3HiDBXeJ2CCEbwh4QiMRwfusgfUjebWL7RUvostJ7eqSxQWezonp",
  "key8": "5NZD1JrVaCrN46NLoDZ3QEoVDJQFBJitZ3gFcHPieauZoQvLXTpRt3MUD1tatAvuhRmFFzxBp6ALwiVJ56mLuqKc",
  "key9": "ojFybkrnF85m7GC9hSk5Dz7wdk6xdPWiZvpt1pY5W9EXTDGF4qsv4gk7ZHKqTJJ7JxycMdzjJ6v71aH1tRJG2mZ",
  "key10": "37z8CM93PEmY5sPLEYwq9P15Loug2pMfPBd7rfmwxyxhvaqAtF8GBwbZ4W1Zdr9oXmvj8fvLQHaUpxo8EfpBpUfv",
  "key11": "2k96iSD8BB7LnKsHNT6oWFyC2iQsEzy54h2LFvoGm2LVLbD6hKzehTmcuRbj4gpGV2j8BA8pghL7iydCA26QyZ5X",
  "key12": "3PZx5rVLsvjweAyogJvKcWwfUeuDk8E8fwXdoXHCPc9eq3ZmsvnBNsLJhCXwb2Jc1CA6ppmKNdvAacqtWg8urxy",
  "key13": "2p72H8K2t7wHWH49xtS1VbnSx513QT8jvzEcoCjY62xzSoZerFwJByfbBAtEDg9735RsEQs4RWy736gAphJkzC64",
  "key14": "2VKiMt8kgZ2d4fDN5bMmeMTSVECpik6GgeLidpAmqAjDVR5NmhgBZVKFZo9AKHbEtUuJySAUYL7JMyHnMD965Z5h",
  "key15": "2SG9UJxdA2RPgYasaLQ76HW32GuBsMmDE2gzbVrfDsvQJubzBTNMn1WQGytcw4YXqCgn1T271nkMo95zDaprju22",
  "key16": "wusmgTnAX8VsL3SKVK4qedx7EnEr4mvmeD6pKA84c3o8NjbBzj1y3tNnvzTZQfLd2q8ouJ8aXZE3owyrQWWGipR",
  "key17": "5CCKHFHabux7p3Z6wJPpcaxjrBSvCQ9pbR46LJAMKSz18mGHWuWKbMULf3UDXVfoFJao4iPTvibrSHo32pgXtZg8",
  "key18": "3PYQ8vkXT2TM4qHVvG5LXKvbtSRSKmKizioV52mu6rsXyWyFMfqagSbHWuFCeCoGuLr93dkD6ubvrC5LDhah8436",
  "key19": "9HZMcc1ups4drs7QMEZWP8MFNMRU2BGzn85zrH1aqpVySfB8icHRqsWuuMPCkfT3qSpstG9MkcRgwVVYx84uJ9H",
  "key20": "25s3CFBQGfge1knGBnPUwx8gRnqHi1J3nqj7kscK6SYRSWEMNPyL5EuHFHV1FpJjM4MJD33VgTYh7z1FjhC2WUWH",
  "key21": "22HAX5qEWShrP2u7ctZbrMDKhuSEqyqYGTGwXaqua9AhFSvFtDHLQEKRmK3iaL2ZYfuwDnc3Moe23CVqiLb27wND",
  "key22": "5LLTyuSAd81g3k34mAWe8iR3Ef5xprFfYXvdjPxFt1V4YecqHiGg3eCF8Ht37b5SZASnGbcgnV96jsDmu2FJKJcN",
  "key23": "5vqsZPiB3uTBqDbnjTMfDRaaNygwE3kAoSqBnpdtUKGDPj4CXKhrSEX3wzCp8MeD9kDaMrYqunTi9payYYmtCCTL",
  "key24": "3pjckwFHUMAEze4Hfd9tRSrf2N8uuCAKcMHKBeq5qfXkzoFJ6ChZDWpM11JPiKh5azTns1nvdEznnHyGGFF9LMR7",
  "key25": "5CepeqFnrPtFY7Ns4ZzePqDadYGf1jMKdqeMdKCprFMGZjKmwHJWaEAKGZq7oRP1QrjhbRubVcXBNz1WUiAswbZF",
  "key26": "Cz1bfaopP6JkbN7KxNQL1sgxRF3PnJb8c7MTqT9SSZANQLtneYBUsTwDcobbx4J2SekQXFYRgyje7VvMMeedvrQ",
  "key27": "3vbuVQg75LunFCLZ6YYJyidNai459KKsJmdXyyehd9MCpGQoS8pFooxjsAq8Hq4vg9doBfNoCrLqQTJ4booKtnBb",
  "key28": "32AXd7yTzCxrxVBGG3cacJkovM1g6GshUAKFabc58h1HrshrC1tCo7EiVc2WjUbZ9jD8ccjnMHkd386MhAzNAwNz",
  "key29": "4VeRQst2NGo7vGKGRMEMcrJENwDAr3j69wjzR91CMEWi9stZxjszcTT2DVRaN3vxLLRP2bn5kmw3hPzRN2p8gdYZ",
  "key30": "SH8bXeh9dEtjddBD4Kh77YTrixxUePHTvgcuSLYtyLK3DQvB9w8B6NDb1GThNcRzXGK9zn7gJ3vHDGpdAgvdzFQ",
  "key31": "5Dbi1fAHSzjoiZfweLvfWrVvRJMUGQFrm3dEWeZVufzEAWippzimLfwJG2bKudiRaa6Ycjy2CpeKWVtD4rBFQTrZ",
  "key32": "47VV7uR9bM2dUMPvVTBLDrFTigTE4jv745Z9HFcfkUBAExL28WvB83XSjYLDNwyXH8mnCAexmeYnCoqeVFJqn92H",
  "key33": "5JC4tF7g6x6ot7c7Uoaex2gDgejRLB5aAaoc2aQ8VBc2XbeMfUQAeZrhy9zXPPi2DLq9t6Qtrq5UwPcSaBVyP346",
  "key34": "nRUYZTg328h1cyVHtQDpxvUisiu327RzvHXTBugCrGpYoLNEU1gt82LEJ48UvXshdWrbXru3GyAmaqw7xY6uJo8",
  "key35": "4B53QzzzP5wkQFDAHKYRQfnpY1UNpwzHu33CjEyVJN3fEAzWN7B5SzRtJUTUqrSRd3e5fyFtxC4v4sdaCiz1RDTM",
  "key36": "2WU1sAB8QAQikQd69i7Ccrun9NY7TN659SoFQHHk6YdpqhAEAzJ1N3y2MY1w5e2nA58e3pe5hi2FDAw68o63Cjg2",
  "key37": "4GHbXd8TTPTPuCFXrf8JL8ay3VgYL7XrNWD3pASfWzCoGQUvzF1G4hCNipfseKfg1CuVpSt4nXRVZRsC3TPu3Xap",
  "key38": "5kbmSDVp5vwgt1iB3yakfv5GdpnSRdJ1bcJf34nMukY1tQ76FborAXzCXR2KyxvYavubQVEQE4mxqghs1APBCaaz",
  "key39": "aB1JM9vgMXyi1gr63pr2PWfQ6UqSuDUBvxdA8LJc8cgTMuDog2M3dXomhD4YhwETZjR7NUP8UK4d1NZEHYfkxRM",
  "key40": "3cE6pTEtFMQ3a91thiNAgbdUYgf2RzsSbLFvWCNWEBJiBpT5t7PBUw1GUvtcEGbQSKm8xeZV6jGZD2xvpCyrQEW5",
  "key41": "3dANnKVjURF4PiHr9cmydHMPAfLVJvtULiWVjkyWj9QzdMcnzmS4urETa3Sk3uNzEwHJg7E7p2wo8gD9s1TQVPAA",
  "key42": "5Ggtp2dkyGWmwAQugvXeHMN5eiF3AUxVENJ1KGsNzpLDjyxHyjUYnrcbHCrMfyJn5A8QEEkvuzPQRJdbprZNr82W",
  "key43": "4qgs1CjrsMF2fx5Pdj3KrBkFHSmwgLhmUFpzk6XE9jNwye99cC1AN2pvdZsUHQTf1p7xceNpPr3nQvvq9aDYNdsu",
  "key44": "4h7Q6zDMUmEsQnwzPsdyucWPgZ6yC3F3Ne8T4LaMVenRAs5LoY8KPRgVGe2MZU8aPGbze2AHUmWgugQCY3s3nnFn",
  "key45": "CPQidzRTMZ1UWqvT3SCc5pox625b7juug4wgHGk9oAKv7VVjTSXCdn8jT64paFggS86619VdTiVxWZEXdEfynKK"
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
