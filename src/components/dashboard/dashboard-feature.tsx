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
    "CSwFf8LVq7tXU5GYvRpW4qzhLEaDPakvthCP2BiY2pnaRWPhfNXCGHoeUG96VZveR9vrzXBqLqxuaF6tuePpapw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "arcxibyyx4uQCo3PtNwnowd2nwtJPTTzE7sPFMrnM6ERN112Fxp3vgJLZ2pG8tHxLEA492dC7z6vhs1MzdDtZUu",
  "key1": "4tUK4xKcEqoFwqiCfpJZ38hmiS1LNKy8TZ332nF8S7xZENYLqx4qJbmDpVGKP6t1tmui5CpEv9xHTdLTWKYFuBh8",
  "key2": "5gADQVmRF5mncS41krwej4XhjSVGybGMGKD8G7bVGBuEpvkC83b7jq5ddAZFq9fmSSv4SX8kmtYoRHAztC1HzgT1",
  "key3": "3XFujsrMKF8tdBiy3ABCtUSkGpmwsyNDS5NseE2koVaEvSuKcPDWNdy6St67gJzFRStyRnXP7wcsrrExYSiSZq4A",
  "key4": "5nNFZ6jBV5NfhAiztf9bVxhbq93ZAmHcnK6eURc2BPjkXCRDLpUYHwVsFCQnavGMGCLHPZWuBYjWi6ucYV54hHsa",
  "key5": "4RxYmXiRhx43VscxXGiJ4MmkHuk2u2WzN189Y3Xc4tUdueTraoYcf4ZE3JGFc8ZsjCnxF2e4mvyNMoQucrXRzb3o",
  "key6": "2m77LeggjPLk89JSR2viQvJoZrJcKmh64syEHhNG1WYsLsBDWy3Ve86XhAL26vDV6a5MiWUXM4XR6FLrPB7gE9f2",
  "key7": "4gPs8Y268KBr1iMK9rq4mL6t6T5a34cwekT4piqEtZNZpmVHk44TcFiDbZQjRHeSfSoaK3wbCMBM7yUkJ7jd61GC",
  "key8": "35hsVdjDhi5oT3ougFrQ7RzFYXUmh7z3L1cEgs1u81EHr3fpfWAwTvtMPUp5dUYomg2xkZuAEkGa72PtkwCx8rtC",
  "key9": "2kvVbkG9EcaArpytwiW3t22R4aUZUJdGecvjTbSpycFefHYPpQ3c44dQH4Un7vGBFEnBXXmvAa2o4ziqZtaBoQPa",
  "key10": "gvS4GTAsmKzfekLztvSWRUDGaVex9uQHwduwJkXuuybNSrmUJQTizmdP32sTAqjGtMJs83syrpHtwxGMg1Jzs7X",
  "key11": "36yuAQcptrYJYFCAjYTQ9b1J1ehXdvVpUXENSb16YVSkxCqZStPHBun73PfbwQvpVTYfsc6xHgo6zCZxY2JVKYyc",
  "key12": "4aY1pq37jvMCRRxiGaagaYWn7J4pgGVTfKXjWVgZ3MBw4ir268Vc3aiUtYQDJ4b7PS5r8fe4rFZH7iZBuAFwJYbL",
  "key13": "652Y9gUSsFeqz5HqXze2CCr95S9RcpW8LKoMY5q1qy5FK3NKqy1qJU6ubsfkwiVRyMm1Aj8WkKckWckMd8aoBajX",
  "key14": "2oA2P9sLLwvpWdTGk86VWHF7iUe1k2CcYH2NFd87Y7nzyZ61yA7cPthyvyKwSZAHr4jFrvoWjreRpm7LyPH1AHYa",
  "key15": "2wJxL79Qc2VbqZzjFfyRstQJqViQu2SM2BQZ1afXopRgQ2zkNeZVLpi55BaDi6QtfXWbSVuTvPdv1nLXERbmqu2Z",
  "key16": "5em4YBZ6X1zBV4muGG4qfpxJVWDDwbQm4FnfBo1fbT1dEJ6dt8ueZsue9UawKoAm6J7uZmt1xBCw28q2GeAXb4NM",
  "key17": "3ND1YUWwM8EpDiRWFMYQFEW6rTeuHDPWuWf2gCbdUYyXq57w7eysE7kEvJ3tLyfZ1BqAVfALi3hVKmsxqu5vMFgk",
  "key18": "3ZjARa3G2tEJDeWhVJtMHHvJREfVuMZp7oj3Nu6KM765fYGCDbT7da7KaDhhLxU6wLsjzA9zeXVfeaF7hJ11aGUT",
  "key19": "2wJa8STkqorCK5ZioSszGAnn9JDqnYCPA1ura23Um7TtboJQcF5gU1aPnogkAh8S5sfkkWAUxFAPPWsY6dhXVGA1",
  "key20": "3aD66PUbWArWtYXBANutnc1QzqpFcLhoASapck5D8yBi1ekpF2Xg4Lw3po8mM3ymFpH1LehsCtUpzSN6KBD66jd4",
  "key21": "4hQwrFawhWH5UacQXMrdh6Ef6kuHFKXNovm5a1jkGjBeMwm3mJMT353TPEF9aSp995EkoCSyW9ykSGJmf9q2hkxh",
  "key22": "5TXSuLJNcE4FP34bgmtbkRBgaXQWWux8coDfBD2jhmC77kGQSVRrRFuqSveGvySjhbdV16QUF5N879uQ7ijmHMNi",
  "key23": "xhijihWHRfTpbspTHSJj2x6PGFaMNwFYsZ57otsUuZ86NYE7h2B9spM158QEevf6p8Xasddib8tTpjwQFo7tz8L",
  "key24": "2fTmktoS6eV3fnb6sK6LuL2bYzPcnd4KXfo12TXrzFnkRdt7aoxXGQBQoVFe5vmcygcimxQokKfWe55xoxiBFDYk",
  "key25": "5z6myaDPeTCuUPrkuC96hZCR7h1rs1rcCEHYkQMiw9bb429yZFVXvfikwyaYNDMmgtyqJKPbAdBPTpkBNny5i8Rh",
  "key26": "3H18uXpy9YRtWWygRVGbmDCWuz1N84yn7HRsd9kPE4Dm5rXvWCH4ZScwZEAgE8LmXw79jnH8MhpbvFF9npYQBCPk",
  "key27": "5fs6eTKSpE8SnUfzDfk5S7QsPT2Z7mrBwFYKSSzxLHZ7xNm7kwo4xQHTYPpuFh5m2ChkqeCyyW4xrwjK85nHw5Pe",
  "key28": "5MRuZ4HPsK2VS5jnutbSUi9YZqAJdPP4YhLQZWPsMrg2qcnH3s9yKjUDmxiDz5cEpqcrBsDm8d7P8aCv3Vg4d4Dh",
  "key29": "2vTCtQ4ss1ZwrJJYUwzaDFAALq1nje161FnH97P4fDq3RDfGty14PaB5tpEwmkRvhMj8vAg5uFy82BDMKcfV55WZ",
  "key30": "5edXnjFvR5q7GUQp8gERHtQk8gEfAVeQaUPUR2RNbvPfDFeUFcHT7Zz8EzqSQSW5m7EnxvC4q8XLh8KoR4iS5A8S",
  "key31": "2nanyZscmcu6k7hyUKrx5nvHBvYZsK7WVLMR74cfCdFGbxsWMwzSYqv1F5sUnwcUb9XXG3V8b1e8zu8yfx5h9pUj",
  "key32": "3Xz6Dd2oNG2YsWbaCfa956PgUY9j3xEx9G3Dsv7zCdt1TicQivd4UqYTpTLDtUbF5tZYoJxzcz7qRrk9xraCJmnT",
  "key33": "24peXxz4LimRm5b7fqvYeDw4QW8dm9SV4QVHhc2kLvFMZMFePNFPUNLfYmptWfFX3w4XkQiTZRvU1Gtk9eSBqxe4",
  "key34": "T35Tm5dpLbSKmht5EXD7t4QhDMzFSeqHxdTcPpRN8iwqPhF3ttmCF15dXBiWwrHntGPw6R3FqYUA4q2u6avLny7",
  "key35": "5LTrHCDyNU6Cw5wnQo5GxzQzJgV3kupBPV2dhUrVz4urvNKUNbbJnPHPPVP8SRjeompkvyKzVW3YCjPSzYLerjQk",
  "key36": "54SpxBiRminEBYNXGnJ2v3Cxej1injHzD5gxGL6XofNAhjRB5MSWEPHWYo4Ly1B6fWqELvBcmoy2wJow29jQXLw3",
  "key37": "4FeKaS4WVvqqjPVsUmRvCK47xv5qqg1zCi1nLKUg7xQS3ybzhnTPqDgCMFydQr1qBpKAMQfK74QCGc5b7iCmziTb",
  "key38": "3hV2pnPZHzr2fEmtZZspvH9ZNWNUdVFS8TZ2aJhEAkhWA47wxxY33LdUKBPZsmqYiNvMqTwTs5k1U4Boj57LbxNS",
  "key39": "5wTxXJHrJihJoYY1kdWfLgfbUT11jJJ3QoDDzcuA3pNS1oiLEeXsxe2oshpvBsWMLZ2Y66mHCLpmv7Qyqu39LdWT",
  "key40": "4yFf5H4sz5Bef4CimW6bnYv7YBzociDR3qdmwRPNUJr2XSpvJ3PSoNrgMgocwTRhpsXvwgiH7h5BEqm6adR9nEm5"
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
