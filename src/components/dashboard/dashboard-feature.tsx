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
    "62njY5CbDh6PsX2Hxn9wNA5VH4gHb85KktC1uiMP2rikmXdZ24mZVtquKLZhyMRhPUKDCUerjutM9zcS2F549FQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24xxBxPZHKKzpNP9WNrgek2WiN5AoxkUeAc2LaJJSNXDzWtnh5x5NVc16JeD88RX1AgE3E8kHwc2tUGcgd7QigLt",
  "key1": "64uJFk2PpjrS1aiUJZUpw3cTPbKoD3j8a2f8RNcr76chYsozFmkbmryfMhPpuiuy6E5kS2qTb6oh8vpFZKYFmMRs",
  "key2": "L4Xz6hU8eG6S23ATfpG2LCSFrobqZVokACp1VPP4LCm7jBTi4cVWAwRXAdbADuRgRtVitA9baCPwtGGxgEH4ZfF",
  "key3": "44vJVWTy5dRSqSiPzGKZpjEFEF7N5dDE6LAa4qobzVtNxhJNXji4cWycRGoQrHUqsd4LcknPxrjYyeJc4Fxrcaku",
  "key4": "4T91yNga3hXvM5hpYTQ8jMn9DHkfYyD9DXxnRwY77vGcSpK8SBy1QtwCTKBbgR4KAc6bh31HumYq2GVho1BXMqq9",
  "key5": "D4FhpTU6cKPWTEpwCa3qL9a6QzfLyw3MDGzAb4xJs3Vr3KpHwhfdRYDpEaxJ5adUVPLTEfn6hZSuWfeZv8CeHjo",
  "key6": "2DhwdsaVfThmQZ4vcnochkFdK4rr5CFtRtRiXvwUxBSkCt43A1TVbsSNiqnGb8oy6gwZYD2YFhAPgekYdcGDPhp6",
  "key7": "5gngp9T7aJZc4dWqSQmRk1rfM5V7sExGHVAFk2anrqiaiQxeFWAkxqHWNRwka6GqixknUXBysKdsEbnrPQKDhWN4",
  "key8": "Qo4Y1Cgr4V5jGGwvja5DbFjr5TKqm6JcatPsxHrfjzzhVVJeJoNPFsjew4mtheMjKQJPHe6zc6Vbx4Lc7Lk5Vac",
  "key9": "59p2nFqwNV95BeUohVWdaAB51WoGWnBYFgM5i5if7FTBGMpMGdGfKLeTaM9Jdfk9Asje7De1yW4zrRRHsiZgqxJ2",
  "key10": "3NA6ytPMzA1xMBLLW9b614UNmjM9ruvNrxER8J8F7AFCp3fmzim9wbJ5k5hbww8ZpqV33oAupqf42b9NCUyRNZ7y",
  "key11": "4wTx3xiV3HcdVn9Ut6dvt8LjqfNtctjimys1cBtTkCRLtgVmWw7ASKCoTcdrFCLDYWar6N9wbkGV3rh4ZXmGDRWr",
  "key12": "5gi6c4P5iCiCgRUMFfe6Fv84i4g1ovw5CoMm5BQyqjx6ZXAQuxq7u9nJFMnmr6mfveGvuWPNT9JaSgBSRwZqDw52",
  "key13": "3Js4mKsu2t3jZ8zYhaUCz8Nxrp74Pcrn8AGintkMxJbMpUoP2UvjKBvLj3qKoZtyoAu7T3MJMkVQG4JksA5EeQE6",
  "key14": "4BLgBBqurrtwLWMUZpARGSjwXKRA67DDy51wsJZvssiNUHNY1FyUnSyoKV1JhkNLKrcGb2Tysdv5SeKvgptx5A3A",
  "key15": "2mdFkD6xYYLvUjSRPPi8EdgQ4UDk5NHHGzBQCNopuPczca4igdRMDtu7A2YqJhvnMZBMNuEHgvCZC4prJvmzptDv",
  "key16": "84GVTJAjet39qArA8XfQe2nto68QNAjxoEPMm31tdCg5uNsJs2Xyiqj8Lr2CdY2nen4dEDf5YxnCdQjFxyPvCqs",
  "key17": "3GcVHkB1dZ78RKffVqpyFqHYM49UTH9feYjwrRYa8p984e892ADw88kqdfij94JiERMsHXtFasquKWUsUiKyUErD",
  "key18": "38Z1PsDRSdvK4AMM8KrPSZgNzgHmdTYG7eKJ3eLq9vSzxeyuz2Dzs2XNW767XpYzjFodrcQgr7oBKnUyM11Rs8K",
  "key19": "2xrzbAz2pt6F31fWQbZ2zvGzdd4hJVVZECkoSk7SBWSSX6f69FZcjeyhRfqbca4WaymHvYMxZ2oJ9oEHXRE7rEcT",
  "key20": "nrhhw1Qgf7xbejVFdKe5uLoCGPeusZecQKkmh2TSDfdkMhKHaUPY6LSoLZQHkHcjG58EuZSFB4V6943R8Aqj4dN",
  "key21": "62cCtbXMTqnGKMDrE3VHQnfyNtbTJYkTJ86k86QB1LkJ5y3szBRmqFPf1tit2JjfcQjC9ySuYQLMkKhbYzMrjmVK",
  "key22": "4M3DUXgAHWHMQ5S3NNeKZfQXMzAnutsXhDppcTh4T7VepZj9cePiRykUpUB71QUxXNJtL4ook4RLMGpLfd1JGhZC",
  "key23": "2ipGZdYYGZFfgmnPibAwQkB4Yfw9GjJHQMqGPP3ZAi41afwoRe63aLTrva6UmdrQ3MemEa9BjgvqYG9sDvMagEAV",
  "key24": "62RzEHHZKYP9YkZRCFwQveubJyyTTZ9ymsHJPFjimUiMMJnPrHAW8wCQNLgdXdY8uY8XnjJYmN9Lk9VKMexQ1gX7",
  "key25": "61gygkxpPmXn2rWeGKQY45Zr1G4A4aTJmMx9L8sZNx5cd6kynvLRYH9Wuby6SnxjUZEgLAWuyjdfHRcTj5nwAYKj",
  "key26": "5YzwokF27cYjTYkD3EbCgSa5y9ow2ULbaE9FYae55yQS4EfRL32iPTZyN6rAaY4AVU2cWbSv6LuUsZZffQr1nPUE",
  "key27": "3uxJRbbH8rG2bKauy9XJnFFfr5YPx9vhpuL3gJnZmiLzhirc9V27kPceKqnxFafjTCTdmM74BA5QLLRPAhWyUd2m",
  "key28": "3vQJkphoHS7LuaT1Sf2S6reCUHnPa5YtVgCJPmZXcWJHbM59u53faEo2A2fnNyeyneg7P21fwj53m4pkdyuXnsFV",
  "key29": "2XXg6az1FjGavxxSr5KikTsiHN7QsMKAMur2W3HrpByW3qby11CytzfPsgUcTufrNpyx5LPBKGLMr5tP1ExakpVx",
  "key30": "653FcLsgzkJc7msR81weKMTYWg7PSsMNyBVg2Lze1wxGtz5prnqwcd3wdcP5gAhCQ48bAt1QeJpmk3CBoBZrWfCe",
  "key31": "3RVc9JZM3ewpWtETGYp2vEP6iNP216z8VsxGBBxtYZbJqBTUSTbmoAjAaupi1f8ocYrg3HLhWpevp1Zir25S3ro7",
  "key32": "3Tz8LvMxLMbDiLm5TRqVSJRbPZVx5gD53faPAJk53nF1G2VjE1LGBVDfLFRqmxi9H164LKwNeFxkPpXAvafkf2ev"
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
