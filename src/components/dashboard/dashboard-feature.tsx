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
    "3edfhMHjhriSRNUCPj5Yq3A7ZnqsA19zx49bzP9nAVFA4P8SnuwVgWhTM3j5hoyik2wfMxAmfAKQ71kWHBn4XUbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDBKV9Wrn1ntVVLxARcagdmAxmw5qJQjsLHnk3USQpM9ecULf3yVjK6Wvw92thAcHkK3TsnYkxPYNgEhQkZRCJ1",
  "key1": "32uDpwnP2xTFhgdC5EHfk8ZDWGY65fni1CjoGjbAcqEDuWVh2TeUMQFYUUGjEjDHFjE6w16iZZ7c5Pgb1mJrXS3T",
  "key2": "fYGwLRbXLZmBSVxQ8PoCEgDTUGZJe3hxXyc7dQqqpKEBiYqQoZd8J3oaW3yeTGs7xNZG9B5TH91uJWxNZgxTkJw",
  "key3": "3HmdwaDTzqnMQpj3t93DaFhu9oGPHJ8XcryzpxePrzTdP39BEY2GYa56KoCe2FqTbfstMnR3H99jxNuaj6SmxaQB",
  "key4": "53Q4hzjpPRxb3aWDv33PnryFpyrrhg16r3sUVnrqvxq64hy2ioYLoQ2Y7SX1hwhcq7jVrdfH29UbWoDyZ5Xm2z71",
  "key5": "4bsbwBr5128VayeBWVUbHscyVkSXqzfxkPKGNdwqQdFaJ49EcsTB5EVvwY4mfAT9HsDPPLj79NNPG7K8zvPauiMx",
  "key6": "3TrKxHEC6h4WTNBCNaMSacPX8bkUrwWx9ZHctrSiUJ5LJoGPXqAPvkFmTgGudq2tbd42WW7ER2i3H9Q3H2kEpiZj",
  "key7": "47w9kLbek1CiKzmunnyCR1wsWzdHLJBKTUFRkhBjBTPHMyX6TjtxtkFrg3VwiRCHKDLiYxUhmKCF27Zx1JRTLCF2",
  "key8": "5MurGrSY29Wdvu74HDGqoRKEjBu8bLUUkmP9JHEuQz4vSv8yUKuUCzNCoZtLEM6wEgPj4vEgV7rPKNLtk9W4wFU1",
  "key9": "3BEj67WQmBmSvnXGqFPbEtJCx35LRevc51S69xaBk4YRgWv532qZLuBvibcX7odxfFjHQm6nZyJGpV2QWJozUwZ8",
  "key10": "3Y993WZ9qHVnFCZXnvuH75QLWbFy5AhRZSne1VAh882dYsDXehWG1xjj8tZ1nk8XXq7bX1rrfvPNAUWyvcYAyVDQ",
  "key11": "s4NDqcwkBxswVQi8t1E1zE83P6C9dyU8TDBaFNhLhgyYTqtXRQ9chQ1BkeUcZGLNuizfqQRFh48ZnwZfWj9ckVS",
  "key12": "3ncp81BLrV1TN6pcxKCmM3yezNXBaN4yLN59PQF5z6r6Kp27CCrAnVYWNC2dE8DExM2UohnNEQU3BZfHR1PY9YYn",
  "key13": "5iSsm3BbNocrn9yZy89pzCWjMFJgAs7NB6tqKUAAyawk3tMt25oyuVHAF3Tmku7XJsWvTbkDP9rFoLmNTFhNTjxa",
  "key14": "38ny2E9DByhaUf6BAG9kHjs7kPcjGb5Yw3w7BJKB3b8aeG9PAuAD6mJMxc9WZV2zKBw7uxa6zad3oRbs6YqcVBqD",
  "key15": "A2KynDhrmrzTFSkKCtXMsDJGXxC7zncb2e5MhL3DoXNUMs1Z2DBvNajiWLwtTEJSDAbJ76wMyQcgm9YCz3SSs2u",
  "key16": "2P9mF1qGvXbowzua4gf8YVjxmoa4wn5KjJgVzRqgzhTQBzREZvb62keXGNaZQFjnerricwUT97o7QvM5o7ianGoJ",
  "key17": "2pqSMRVifAJFPQgi3EXbKG5sbyhAUmrZKv1aY5FifoqL1taKv9jKmwBVkRsiD58QgH3PvfG6CQgMQ1patYjHyz3p",
  "key18": "2NCdem6PFgA1pPgWUkrJ6bv4CVZRgKRhnoM1kisc2yvm5aBmT1ADoTDETMRyWeSsBoLXBUZ4icXNHv3RptAkWGc9",
  "key19": "4jES18ztceE6fy1FCgUXRZbqoCCfVv2hXDqs34PVbymrPCDJ8jrjXTzhQjJAUTjgp7qa8HD1jhSG73z2YqTD6VAV",
  "key20": "4YCeXNH4uMZK3sMPuqi9FgVxk1UtEM5btMWauTCJw9VefAvv3jsDuhwdvfasUFDuTedkmCNpFGf2jxCP3uqVoJop",
  "key21": "5pawnc3Kt6AeW2HQ1xPh62hpFGZYr2A3gBmW7wiuvpbMRsCfxVxmpHpdYbTkuCwqCkRRLWFG1B6UjW7V67A7jBUK",
  "key22": "39qSpXVfBRqztJ7htMyPrF9PKrbAkCxeQLHx45tJKSeYZnR53KK5zkuAdWRLfgDuNAdziWUvYQzGYhVE6v2NAWQ5",
  "key23": "2Lg3YxyzhZfKWXGPmbBEURviXVq57H72o2Ed84cjbBDU7q6ZF6sTwQWfd6nnDn5xgdqaFLFXC5VRpQExWPojrKat",
  "key24": "5idApsAj5LA1FFhW2Nzg7p17q51GxFwsYC55iQLtrAdonBJusLYCNeJKwdjjuiYd38E9zJ7NAWkQ2dZoGAhjeXmR",
  "key25": "36S12mcs5HYov5q2LWkCi7VZUCgpYNHeSAr1yDgpxp4QPxBYabACvHqCU9ToQgUy6EGLtw5D5WBBHEo9dMFezk89",
  "key26": "5xM6QFe4RtWsNryG5WFgzBKHWY3SjumvWGFi2bsL8D69HtXfgdNoMqQucEZU6m4L67uEcJr8EhJTuYc7HNYmN1hi",
  "key27": "2VMiTWkaGraohRGSZVABEJC4f9ahuaXcX3QzzJCxDRdC3eWAgdfFDUpJixEvdcTKuzme3y2JyvDvLBH8S4RnciXC",
  "key28": "44FgWXVmmqazDtduVNBVzDEFL72t6zrHv7sXF8waRWvGqMm2qePEZdqqKS52idk5AaSdzgJksBHVnEBNY5Gkvg3b",
  "key29": "5vw25tZP3Lpnk57UqGXCR1y1RF1RrAvW8ZYbkWGsW2ZmHxHxXMknfNs2hbfagKSw5RnK7PgoWxV46ZiRkpdbSUcm",
  "key30": "5VZCFDFspGi4DWUEE2M6gg2Y6Rgr2H41NNenTzkfRGYkTHKMQXfkzxcpjYX9PJWsAr6NKFGrKLnU68gErvRUJS8E",
  "key31": "2PR3L816HJZByHvgheKwzikzZzAqwUffD6h12Tubr5Aa62cNeeUysnALwJ9S9x1qKzBJQkJ6wcsryn3MHW45EeXW",
  "key32": "4ZAhwyxm1gkrqjuegoyGnpWfF6P7S9Uqfe8He23dUKbXXo8w33XM2XLtHqszPS311hAacWd41AoRupsbtDMuDgnV",
  "key33": "3VvqUs41wLJKJKRXTt73gFK2sEUEse74ucwMzUHuQaNS4oQsQbaktHcazwQaVwezTwZm1oYDaYS9ENigY2PcAd1f",
  "key34": "4BFwRRuTdr66iqSPUubmbAETmhKU4WQFDKkMydLcPSk5JyVKKW7TGew1odxWhoMpaiGJ5nLReXNJwHCmnEt5pQm4",
  "key35": "8HjAtmYphHPao23AqkuVgmNL6acpkWR6tEtaXG4Nmks2JUnuTFWGNezzdEGwmVphZt6c4iHWCVjoJJURBMeWgeN",
  "key36": "2x5suQC2TkLrPr3fcxx3k7GsvJmZCFs7FzGurSvb4u5aS2VXVxDBAFBhwoUpBHA7m2STkeo2kGs8LfE3SYTMQY2C",
  "key37": "2XinLSHPZmyp28nHBJvw32CW74fbxD3MqCW9B6jXmF29K2v4C4RL3EC1e1HWmguAEs4LLhWWMSa2whFfzJerjJ1S",
  "key38": "3kn1y7mbrDsnjkLT3eUaeQi9VxT7RCUGEfV9b9AbmT3gNjMVvCdhKszfRSc3YJKDyNGm32JGELMgLmUEWf8znEza",
  "key39": "3ZzB61FsW2PKVkvEX3EEewrmXibd9Paw28fUeedu8bhijrWHo24N9iwm1xETbMfZbqcEUGoHyjd1U6A1FQ2oK7co"
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
