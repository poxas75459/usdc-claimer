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
    "5PfKQSam8gEWTVMPHsha6rg4DWM6Fn6w1wwbvaPSe9eVr8WkMdpTis8r7GxqdHdoPgy3PY6pzH1gnYrn4CqMwLBf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xdtbnwFmeAXRwXFH83VwmBXatj5vWiCJ3qjprhEitrqSHpgg6r9Mwr4rAogUg4vQ9MkrRfVXG7nBnVyf2MEbnpm",
  "key1": "3qfEWcWMbDY4Vvqc9LdYW6AmtQRUbxRhtcdryxXAdXqaWTatufNmc8Nb8UNw8JjYrhaDD4gQnfxqYaqGtvdtUfcb",
  "key2": "3i8r4rs5VkNn4HhLKPdd4LfRHXJ6DtdyYJHdRTw4Cz7cfYQRJ3oc4DGPqWYpsjpqZuELV4dG2kVwMAGCuyEuBaHH",
  "key3": "59VxuKyUmU9iG6tFq7iafEi1AKZCgULaaCbKfKQwaJ49VjhRvfC63xodkdqkQHFMsGazpSKfyRrrV4gmLn6iy6qE",
  "key4": "49sH6o3KEJBtDj1mX6uHR8XSpAuvZCrKtAfmy4PyvuVQuaAvN7sFNVyTWViGkC9qDgJEjP7CSsD2FK1Heq1Qqq9K",
  "key5": "3QB1E6X7HigiBXVVckaSBSe4rBq2vyy2KZRVW4d2TddCgLARVWfvvyj8BbF9o6Rsp7N24T5hRpLgKq9vS8EbPCfJ",
  "key6": "LkD8GpcrFwY2BN8W2p2qxBDtMDdEZiA1zyM8EcCwfPfbfLeRyKUYftQnhzz9Z97LAi2zNdbAKaFQvMa8EekdNP8",
  "key7": "3C9WUCyNHSb53Wj5Y5mSepyBFkofbAVGGvwZ8SKuCtbWoB8rFqyaSky3HayQSnZmRfNPLx7QDn3zpqs1rr19A3td",
  "key8": "39z4EvqjS5Xosc7x8EHMZqbPTGMWjr9jmXMFTVLewLsKhBVEd4hhm659hKTKmBB8nsHJHaGNrtVy28H5v2X7Aiew",
  "key9": "GS6Ftg68MtpAmbzh5TppqdN95xbczxw1jVRS1uR8PzjCZsBmCkKVzvPdmwM745ebi2CgPZJfwEvRW4ZZM5rM7m3",
  "key10": "4iwK4hGwRNES9Z5a3o6KyTpsEEpgB19scaDLiCsWFy3fMYmZ9NJjAFgqvrXb6qSqJxpR5cMzMZB54CpjQJz9GT4W",
  "key11": "S63dSkMd1wLUy6kHwxg2wH8ToinQXMeE72HtAiHwSyKwaaSUsNupPtx2GvmkHLT8KZYRwqKDGVP8q4C44kCZacC",
  "key12": "4wXEH3RErkd6HsE7eGCRrq2eDg1EuJPvexXhFPSt6pzNFFWAYajGqdjHs4kar747mwNbVU3AQUMQzpNbuukVb1dC",
  "key13": "HU8SG89aNJYMHcXTW5tvcthFmHoMbg7sLrVdGkFJdUhkmr1QkSVVZtBMVs7DQLpAVGVkZc2S4J3ZvoqtATo4HFB",
  "key14": "4Y1E5PujX9ei73MihRqFN99fEDSzomBY7kaje1tsL7u1po3zKtcj858xDJKNsXxWtHheBPRYNyZTMBv974G2M6Dq",
  "key15": "2rSUEygYo7khfKf3bwzYyb8rcbbT3re76vgfu25YJmgSCLoVoVQoWH8QMx8W6JA9vFhwPs5vtEwGcKELFuVaGafp",
  "key16": "61WtEqvjPNgQzhgUj4UDyWkvPZNSuTqYX2QyRb8BdtRmNVT4a4p8r85wQun8xQANS3mmu1ipUcw737FpGmPcoVKE",
  "key17": "2HgaEPiwS8NwemEJJaviEeJhYyjxNYW9XAWvgpin9F6UYLTDmkmXoo6NmNRJHWjkMpXS3e2QhfhUk3jxgfy4ZE8Z",
  "key18": "2h47eQ7EZP6PXunwJvVMfQCHs8FuW3reeGNjeUbSXN9VGv7EvgcwKauazvbZR9ujp2PYXvpCjSWBtEcfrBwHU1VX",
  "key19": "5GwHct2LsbE7iLazHhZEpUJp3HBAhhJEj1S9D8qPfHWwvdUkZQWk8QqJVbkC4E37MDgTb6ZTBDoBZddYm9waReep",
  "key20": "4SuuwW9Ra8vSg5wJBjosqkhn5S8Defsr7UaixqEnAGDQSX1SoWXfxD6Ge3YsDvoNzr5K849PZ6qajGfQ7rV2E85Y",
  "key21": "A6RQhcXaYJysxCXyBj26yMR3dhjCoHg7Em6V1mViqYWoMbkVL1msnFF2huMSSHGWt4asDjteW7zkwCoWeXZLhpN",
  "key22": "4mcKn27Aj2G9zKuW5SNzwLaiyndjoHK6sxAhGwN3bfsjhosAKUx93rhAX9cJJoyV9HPn1saHybGCbMxAgEC9Ryjs",
  "key23": "2PHA35josvFG21d2Q9YqquEkUCfwP6BqJma8wXW7Pk5mFbJQtyUijcixb1nRaSanXX5DcfY3ytT4UnMND8gbFtJF",
  "key24": "6XY4Fh35ukqzu8EmyHzJ9obbkk3NzPwwewdeCR7kjoRd3pxDDe1x4Ly7b8KcHiCVXVAeWeonWDtJ4jnB3Pp9Xs4",
  "key25": "5469uEM8Q5HzFUHJPYja5qK1XPyZwSXFMNGPmChp64YUHeDRDH4aVyk833vpVRGpPcn1EH6QvBXEPCwchoB2BsGk",
  "key26": "2Px4eNoHZL5KqJ9BNjkHLYUdKWnNXuq4sLxZyFP9aHekXdbJYfabCiqh4prhBtKKCKANetEUPFPNamxiEsAxyngz",
  "key27": "2M4E2WRvT8Nm5BPER7Pgc9hmGRUgNCtScbZUgb55PwriDkMQyQdNYfJV96kap45JQEpvcSdAcsShxdwRp74wLQw2",
  "key28": "5joJ2XPwYo5K9FJDoJyiN8dfrPb7aKTyvQ2MMYPtFEQuqkXkfhyvH4WxHTo4sRsD9AbMFLgcuFzNEFJTfvCPaxyq",
  "key29": "4kNZwRvFkXVMyRdjL3EZkurcbGxuYpNtUe5KkxS4PZ1bL32YCG5JCP7MA2tgqs5uRfrYzmqmQiTsGHjDPKcLbphg",
  "key30": "2cVe81SJB4USx9S765W3npHoKRk16A8aJbGHYPiTQgLgsvWwXThiED4VdzEBWBeLVwKCker7AJC47azPWnvUHkgV",
  "key31": "5UqkFvVSP6QBT5i2fbtDqZCNz9DRBuEyjGdFSS9fS691zB1tYZgkM69pW3hJ9PoPjYz5pdqpm1LrfLE2ZFaDzxRJ",
  "key32": "464YyLEseapdCYvDFEWWsNMGZAkNwLQ1PZ5kwZNv21pZkHsHrrVSZzPuqTQ8X6uPQZL6cRVBsZeeLN5cgutiPKmh",
  "key33": "3psK4j85h5CbchYNxC5gf4u1zDKUMth2QxV5yeHwVXZPZS3DTDnYXLyNYVTUyd2yGGidit1uD3Taw7HvBRvDzeje",
  "key34": "48P49F6732AXfs4DNLGghtSDPGdThGTfLpKqLRcaWPDGpokWr2xx3JjRQM6kLSZ9i5AQpTNU4Bn4dJd11p74NT8R",
  "key35": "3CSvxJAShbsozXy8J1AcQQQ2Reu2fMvmY3a3HRQXVzULpbSNwKeAEfanrvoDYi697EbXLRju1SrfCVNu77J33m6A",
  "key36": "W7JgC2D9GtapGFsXZs423dWKeuAqZyEnAdq19d44PRxfc2Kmrnef6yEJK1BDcB8frvTqGAFnmMNeFazjuVzrcvH",
  "key37": "4DLHuByM8NUMCrLGE8sHX471w9ttue4HT8b3zhmXBwWcHnhhmSGJsrp88B5KjfUFqHJ42mhhTdz4VzrELrourkMX",
  "key38": "32wQGQGdTSby8fByTHGtykaJhqz7a3vhNw5cmE7iYpj7RGsDpzTLeTJCdqyAH4b75RMqByXnyDWmHAGYmuuAJ27n",
  "key39": "2yT8bJMNUygfak6TrYfDcaH6WyFKoSRici4jgDJtpCkC4QdhUyuVbN2BKrotYFiy1xxCXdMxj9ZEg9wDxAL8ZfQ5"
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
