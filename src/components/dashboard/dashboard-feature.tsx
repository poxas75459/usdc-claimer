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
    "5WJN6bxBiCJXaoYeTNnndULFMVHcnT9iTTrnwzyMSGY6rcMRLjucZP8JRB8tZsjN8u13jvWLRQvZfegGJPG3GXUM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jFAxmQQvd2Cxd7TdHZ8ikvD3Krn3Ce9i9oWbFWEVGqsFVw8WuNhfKyXe5hDMvExeZmrzjjmn9QizsLAaXYaGhKa",
  "key1": "t4yZaxXCVMpohxR6rUHySKA3FVoYeQFXhLoAhCm2Upu5EBytGZU2rRwt87ezw9g5QLyxyEg12QEEekLdcmvTdJw",
  "key2": "4B7H4Fd4V5EECLYcdoi4mLjtqaSqPMEmfCC67YaDK15PNf22cmaqGqeZ2CJ3mqwS5qBv4NbWvksgWLVYNAWHN7mC",
  "key3": "4DiTa9bjGJ3PnmUYLv2yzgEjYqbrAPjeMKcb6jLUqbiVtN8LFPJs8g6p1RP4QpfbkE8iN2FPjf91UXrn3GJFdVbQ",
  "key4": "3p2w9YG25nW6EMctCv3bE3LHLP31dFh4XKsSZRJFwhtySUQLSiEcoa55ecEEVdYwt5VFoJdDAWbZjjcYFr1W7LEA",
  "key5": "3zViviYBurMPvYz4AMxbtXv8D12Y9joUFwbnV8QV9zbbahvaTLVKsdZ62BvMcrLqtnSBnAa36UWN9mPkqR9SkLZE",
  "key6": "4axaJN7UHcwYbweo7LX375bTNyBK9LkruZbY5Xa7c25nnd881xMLpgeet5PdKaonPfTNaTWND4TDRMwQRismDea6",
  "key7": "mCabyRPkcLhvs7xdsqNVFdkwPJshL4Vzh81mcVCoQ6Ym2wqc8uzBxVYB4JJWHW4EifZNa7znSEDEF171p35cUT9",
  "key8": "5Xv1HLcn9cjij387tyfTVmFTiCaHQXJtARPCzfvarFEMLKCCAyg93sv5YtFYzTqVnVB1bAEXAPpRBjBWvYXmRpjF",
  "key9": "hdewh6uZQwaUB4RvfVZMMxpFxijPV8wpssyS4wSrP932rW5YvbFP9Ptew6QkqYPryGmPvZSdXTxFGhrBaSFLHiu",
  "key10": "5fC3WZBqKdqCTN9UqM2ouZS76PNUffZ8ZY8kBCMYkzBx11goVmYbBBs6ozAXz9jFCCEfu6Qbr6U6Avg8dTfRdHju",
  "key11": "5YmstW8kh9yeCpeJyiztdpKEBVrqzwDDuPyRBETxF2n2f7hDApxEjWjEnVq82fos3DrNEn8wRf6vhpyjZbmhSAu5",
  "key12": "3N2fRhzMJ9qnwYvfUjQz9mWkZreVvvr2X37bFx1yQ5wUmFP1n14i52KmAy8UG1UEQVUU1f87GYCMpxLNkqJVFCoe",
  "key13": "4NxhNimSAd8N1JYm8DJ3iruXaoFX4CD6zUm29CHZuHnRuXrE65QzmLU8GffnfTUZyooPyxA7MQkSUGsS3kefCwEU",
  "key14": "24gsGsw4fhwk8UysE7zhbWU1BUi7pC8KPC3nmYK2EYW5cJtzrWT2HR9TApLjgvmrQ1xeosQ5yedgLNZQyKk9ej4w",
  "key15": "5GUfbQu7nEKMqYeBZTNnVZZWjUMPvuKzVpvcZVhHmFtCpw8TPs5HzqrpU7v8c1GK4KcdwH79A7JjGQ3WP9jJVBgr",
  "key16": "5BjzMYjYmVFuV7H7PSrQnLxXSXSZ8KQW633HY6h4rX3MRkzCK1Hn35b3oXBwomGkoUunmeEGihARgFRjjH2G9NxX",
  "key17": "3wf1DZcTF6cBFMtknDnHNL7RhMHW3wMdG9tUvspfmdEdMZsyeFnfAhaCJgJ3jmfyuGAeJnmGxaephhakXoadgKwv",
  "key18": "eeUDm94zFB6zpcX2ptaZtu5md6V6E8zRqAQy5fewqkEvpaVeXrmEK1sSxxBi4eojpNUeQJGitfy6msW5CNf4G1L",
  "key19": "2QxcqkUSz5WiLWB8RNd1z1ehhyeDbaNw5tspCnZKTBPbT8s3yHia1Kx7YRgfw4WJKgQzFLj6tEooF3HzPPLu2oRg",
  "key20": "2ZEBFzkWSfxpBLd1Znk1TQSMwqnBMwWUhmzPrZz4R3N8Da9RzV94P6V3yDVXemsx1LwStnGrFqSyPDEsK2tiLBNF",
  "key21": "4xLbLkbwRDbZDTrguhK1dksoDvG52xU5k4BH7pBgqJ274o2DnhX6T33KR7uSZM3g9oYBrevVtRCR8pxMPK6F2JEG",
  "key22": "2mxN2e76j2ogcjg3TbHmi75Fsg6kYEzJ42xkGS5SVqNq9LazSk2TSBt3XaVitxVA1gNjJMjL962KBcX8RBRKQ4ha",
  "key23": "SVXpp8t3b2PmgsWPz6ivyJpZnYF9kr7bKpPe84oFrThTCRkf2DtCLEjyvCqwyfcudYyHX2JxRXXNUnPbTNRhkSD",
  "key24": "5icXhBcC5asEuT41ELvw75xM6EwogHpip6UbyUWJh6teaZM5h9XhnwnKQuyqkFPqCk2BG35ozQknoW3KY2ujkx7d",
  "key25": "4Un2Dutf9zb4XWcAsVFLTZ2sJ3wHkjCpT2ixEGyDe7pAi8qgz47ephBFcdaJ4nQFrob4mg6FRCWttHwoDRauzK9F",
  "key26": "2GtE2SQnWDfU5po2gVxo6HQtXBC38ySDs71LEmusxBKPpYwwaqBCQc5av2DVWE6QBPZL5HfV6JnBvDsnCUuqrCBQ",
  "key27": "4AkhqbUkDT47xZEMfz6sBvPQRiCf2ega4KjuehZFnbCTQTBw1RVAJLhZEAzYAGMrox7ov7SNZTn5HDY8PthxjLLJ",
  "key28": "3GduqpiJycqXGFAhB1DeArwJLdvGDuKi7Fywp33NMLrAeKDKEUWNEBZUUgoQENKzpzRaZNGBh6xWxPKLAwsuV4Nh",
  "key29": "5jvYkjvnSpPfyxmctK88NhV8Wy1go4cErXT1cog1nMG6C8YaeevQUxRKcmSKBfsG6werpYrW4UoxRF4o1K5PrxPY",
  "key30": "2BxFTQe7cZT9ojv4aVX2VgzaKZWgFPNHtK5SAyQR1T4eRB8BQwmM27AzYgzx6G3Q3cwmAD7mE3c2SP8GRymRFCpr",
  "key31": "2b4ZaHYBLq3epgcXQXXxpphrrcFbXCof8RaD5Zwe82kgmP3omnsazHPuVXCpNhzY4G3yEPY8TN1wuXydtE34kBiz",
  "key32": "5h6u2s1nbce8HEd9NvpexsW74V5GTTHYTk1ozAAzBzpsRsBsBtogweUqkANrSUPFboHxY3XxR15nHvU1hjXE2cf9",
  "key33": "34ReJSkQ8ufpjWHHgnrRBvoFJmqL1MifSoiwDrHDj5mBZAfDjtzRV9zEZYsm5T5BAsZEuU1xC2ywMHLoJjgNrf5",
  "key34": "56HsYqyRY1JbbUXxziBcgX4fpAug5ZXHuMmro33KCJVUsg9f1HNBgF58QrgtXxnnE6U5QAd1geEXUYvkmVUjTUMv",
  "key35": "4JH9yszjBdM9zmx73YkLAYDSBtc8P7jRTHWBnSxpoVwEGPja8Riyeu4sUqEGpVE7cP4r3b2MifpJbRTozzzqy8Ko",
  "key36": "5d1AizBZUBXeddRWAsYRQi891AaJNrZr9ktw7frYo1ztnxLMxGetdbwVhw9cDwBq6rbTD5hMhorH1nY72SMAN89L",
  "key37": "5AQFRzsxxGDqDikSWntZGF1H1x5vXuMxEqcrbznRDh4kMZyzaVohqAtH75foDmvarRXNrwNWYJR3Nwrr9yioPsPp"
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
