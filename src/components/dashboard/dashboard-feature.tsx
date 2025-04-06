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
    "2WBuDmEWFzu2dwJbmRTC8kLwH4g1uW94FF16Pj4ibAv4jowj6CKUMQkXbrPbxkjDr6eTzH558jHGUeGHuWhVTvdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fgze4XYBwjymCLcHEta6CPyV9vVZDt3vPRUZbpHWUNw8BS8gPdHuWycVc3wpD4xaf5tzsC5Kupr26jBStG1GTgw",
  "key1": "HrgGGy9JNnbfQhs5v5f4useNPzCtCDdgXS6y5ExxiFxpWttNhW1M9Pk8wytEA4yuQSSAeuuX6ZEYExcjJmLSvQH",
  "key2": "62oSZEwgrwQBFA74xSuBWaY1SeG2LxzQCTH3y3AaZVRXZkWuMFoqWe2nFnqp7WZXVTEpF5mdQw9kBMQiy8pnmVXD",
  "key3": "3eb9Zw5pGy799jpwX3wWALW8pjveCFHfkDbcdncWgUk15XEetPR78QxMiKp23yHXVrJ3qTR1rfMoz9hEiSQPhVTm",
  "key4": "38L1CyXuodS1VqYqNH3Z4Hf3m5mDtiNDRqGvtCajbT3XcknjiQUf28wfED7EViDoNYXyb6denz2R3jvDrRFt9foZ",
  "key5": "EjZZo9z7qMXHWxmZTdCxhm2J9Wxjsw4skwYEDERgGcDpk6WjbKCEH6qi2oPpk67szPBVPRngHYwAufGSHwvkzFz",
  "key6": "46BDKHnQV1832G1BusVA3hS9ANhmN7WyP6TDsLxHvZv5943X5pyoF2jGT7ajrQBEbR5Wstws4P1dGpfwBG2mFgUL",
  "key7": "3UpiwnJf3gKZgNqJMM91JjYejA8rbb3tEhBCJmLZu1N5CC5vktG1eyb6y9JXBrETYDfvifnbmsUJg4BgZNhhhSSn",
  "key8": "5zJsoUs2zyiSDiE8ygVgb2KY32nf2jhHW48TnqtosKcXUeM2TMnYjKLwbWBjaAxhEfcWuogFgHFttvnmMbfp6aBA",
  "key9": "35tDNQMMWnVS8gKtdSyFLa7Jo9wGqBU19EHRfvWLeb2yMibtLcL9zEJPcjmbNmZhqxMxSz2kxRZRWgxJLbGu8vEf",
  "key10": "39bRHScZnpQC98yXVeqAwzfCRzke6M2aNCF7LWKN47ggQXsk6MSKjWFQND8R3EB7UmjUGN6HucRD1ELFSNfaKChL",
  "key11": "eNdeDeHLy9T16gicRts7PT2AYCVeBRj2LexT6hjQdJEEtr77zddkZJNW2Mb423KnobB8n2zt9qfPxRd7THXVVZA",
  "key12": "4FvMRQLz4qxYG1XzmTNfQ2cJ86rtcpDskJiyir1hJy61x99tXRpRTNQXH7cSTCMWkxrwMjbtkm9NLqj7JPKCgU76",
  "key13": "5Phjtos8Yd9GcXVqMeh4H2rwe5x57YJwYpfq5im6UuBNAF7RBGc8HCEzEJirBxETGU1MkvosHqR5zwQ2HzDZwV8p",
  "key14": "55nYfX48rS6R5AaCzSVCmgiojEwztXhALfWCQgJS4kdEUa6yjqbo6MeyJxuaWHt9TPQAZCPW8BPgTb7mAw2LkhrA",
  "key15": "3dUrcc6LSd4pjtgodNhxL2w7ikQk2knAaYekNGmJ7wLx93B1f8MWtp8MPt3ognas1Cow94fw1YgXd3my7Qk4LoRz",
  "key16": "2vimV6HHNd3jnFN1dsCXMbuBoiqcKoay14ZUHpT48oRygSMdtXix1tmMyJqr1AF8jbanMTBmnULA5s685Tbi2EE2",
  "key17": "3Y5GYpnNxbhiEaYaeLqbvBHPkBpH8JcoWwDvUZRUNXyw6RbtF1PsJubgPL8aUswcVHANUTyfgs1tegg9HMx3MszU",
  "key18": "8tR5gaJSh1UBMsSv1Sw5Z51qTv3uCs95kd1yuGCGiF2NCFN3k3NhTty2caZfZ4rLLUVjGTyuf1aanSv5vi2SX7j",
  "key19": "54uw4eW9fmAbnsuLrnmkisJ6Z8DymfvXsaXhaZ4WooMUSDLiWktuYJFpA61wcinCg5dDym29cCAJbdzKaSuV4GSf",
  "key20": "3MaBvSLbLu1Ago6umqTUsm6nzHbhd5kj38bHWdM2oLxFA3SXrGiC4TkUvj6cZtwSunXWo2J2DNMQ4R94ksyNREZG",
  "key21": "52qmF72oSyDFqdpGD8oMLYjpfrMgcQBpdQgHoWgqnKDoqab7AUHpgkh2CqQttohCzF5JKbqKZPAs7MboPrF884zM",
  "key22": "66bXQFsKXLWmvtTaXuKHxyYiiBbUmYFx9UHbwthes2zJKv9cYv9rqLk652LjG9qVk4P5SPHuY2zwwjRPNXB5z6cm",
  "key23": "4E23YPdT8aNPxD3qHeanPJ7gQPrp2LidnDnDsAT4aNmPVPeqvhr2Kt8U4Skf88xHYBmnSShg1HaJZhk5c7pNyZKs",
  "key24": "2RFhcw3WqVXhcg6fv2pwZxqtjdd49ZcXET8Uvwy8hvmPThaWmNBBd1Q6cK2o9eZZjDaUFrXCiBwq1XbEwA6jKpNy",
  "key25": "5WxtmziaC4H58wAMFMXzbbWRbehREbEfLUHCZRPFxSzo9pqjJFAjjhBU3UdUjxiGcHpFLnyj3412XvXKfXgU3Gsh",
  "key26": "2BbV7bYTiFCbQp51Tsa3jLphowSD25NUs6rZ9FJ6QtUobsAopcxes44moy1rUStS9NSaUsfyeAwn66h6ky7j9pnC",
  "key27": "2McNgx8YPpzQ5p9WJsEbRo4UXSM8V6MR8N5RhCHHsZFBgasGECg3dp77c3yfdWL5vqdrYsqvXeAuWEgKbuwXaesm",
  "key28": "4htiPSkv4EjpsQiHSa6XwhGMLJq2RgaZS2CXEmoxtV1PZ8ncVxwbVL4AYpfQNfxNWtBKXUx8VtpyWjPomGPfGzMP",
  "key29": "3Bso1ViFLXFBsY6iRgPFYKLFF1xDN5wfGMGkoFk8YBxktAVFPqZsN2xE7H2H4eJVxgEB8L5FuLJryMePkd9gnkWp",
  "key30": "5hMCtX9C38QgosxGPi6MsbmSYChHTkTU4wUKabjfFBrSihVFvNhQUYfPbi1oVJDCBva3aFW2RakG8UkkjZjHGvN",
  "key31": "4ApeHzAxcGTXfhgoLXNDDfQnGChL1xfSv8RdkjhMLs8ipcCHGAjbECmxCTj9NcFJ2tJmUvqfP9gwuFF3XYYo6RVb",
  "key32": "2CdmrYHnvcYmCqK8bC4TauYtJ7UVrfa5aXTxUAY82bPfCJsD4MBozdz7s6Hk4FWAj836QYG92vou82vnAJNRba7m",
  "key33": "oLyZ3mTzxAF33VeF5Q8jX1poiqeMC66rU9Gm7NMymRSopn5BoHvciMFgivU9V6s9b4aVKsxn8a8ogcKkwWUFCgv",
  "key34": "n1uiqJBnqApXmvab9HtgRrKeyQJ9MxZKFcy587eyNDhdmYfXLfX89NaZWHVd1WYikyoX3zVHwjhsREG7TRMEQt3",
  "key35": "2wxRVSpQuwakPvcvvyJdQysWiDgSZyYRj6t4rdSWoZsVdUfuBPxedzc7sMyoGx4FVfBmfzmAaTY45HwtJ895qi9K",
  "key36": "pptGEvBbZ4LZXa89WoWGMGqcxucCGzUHKkkNXXrtjwWvUV1d9Ujd3nfWoeRiJUsDkuKSxFVTBzAzPxgjnEap8y8",
  "key37": "Dd3q24b7BsedyWimPsfwUUyNWwfHbZxdWQ2k1yLgepGEKkdEa6VCJ1g9ZQZGZLa6xgXuW6ULtdJ3zRHUunLNdfU",
  "key38": "B6ubSRbYCmrKEznTU9K5t7jHW1r911yceQYqqYDbcUxLQumgemVeXgraP9gL4KvbMdKR1npGi9P58tmBFwV5JUj",
  "key39": "Fg7aUV68YWkmKK8FZFfjXnGQ5j6X7SoXokKXEDKTsn7G6zzm3mkbrFpgLtPBqLcRUzUvUTUtVvq1SSqxWaVSoeS",
  "key40": "26txh7hn4X6X6dwYSxxw8y9dsvNFaEpkhDZ8bZp8mR9AoXQGvpXMbMGz81aqPwEaSdXYgRzKdh9id2VvUDHFwQae",
  "key41": "4dEm3BJtqVfWAnhZmcVyKRd7BP2UHbonUDgxJC2HKxX9wxDtRQwaaKF1t7CFRUTXM9cKHdFzhV2GSUENMe8PMBWf"
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
