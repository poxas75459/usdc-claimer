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
    "4bEbXa4bKZcVs4MCsnB3njtqH4v8NBfCkFDoDPCfc4wb9L2cD5RaF6qZfAXenRn4JD1xZ1PBQXmCxUyDMgrGttbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vnW4ZF2MLTnCGFQsuvPRkB6qmCKAqVNYbKqV1Q9ux2jBquMxbUJGUSF1qWCzm3pUtbKMbVRc35shQs9hDCjScCU",
  "key1": "2qfwhmuuvYHxu3AjZKp8cAa8cRBhyF35TybkhkJoJpCUph9vDAvP3K69pgqKJDGw9EKPyuWAx5ow2tYCDTZBLJEU",
  "key2": "ijC9JmxzJMYoRqhALRH7hgg5CojY8cBTsZhDw1B1tpCzBmunjgCbHxvd6iZqcof4iwrj3vi56eJgsqUCB1PbfQZ",
  "key3": "42CwkKP4RppQCFQvWbpizEJXRb8rHU2PFdQtJWpEt9q8WZTvZFqH1NsQaieMpBp5gJ133xqanuE79Bi7Em43zoT5",
  "key4": "4PnKjzi4xNDu5P4VneFUS1vFNsAfao7m9UiuTSRdPyxp9PJ8UWqrR6ijFnKFQcdtTELTZLKJRfkgDmPkgdaoX78p",
  "key5": "3YzF5jqWoQJAacEgvM7S2iU1nDoCuGWF8nvUx16qUbNFtmv2c3ytsAkmNwGBLXE5eZqnVaMbQRdELdxfcFWVtrzA",
  "key6": "3yuGnLQBFz3JNzz86ubKk7xZ6kwPBuuzDKxjEr5YT4QGD8mmQ7qMSzYVRVnWEk9XdbNE5PCBus1RukMh3pvb8xrW",
  "key7": "4ZK1MRD4nb9sYJYC3eLE5oxz8C4wZPDrjXhbfX6Lfg1ofAGwxtz35r25hJ6DF5NJFVWkEQKeBVjM6buN1npg6TwK",
  "key8": "4EwNT78XkNyNZEbGwGHQ7GgqLHqyjAwsFAPfypo3e2Z7FHmRM6VhPaevngigTWiD5tjbnSg7eiFo3FPQhJ2ehNy6",
  "key9": "5u61zN2eU2eXwiZq2MdUcSFq9WwjkNzmjaTKF5CfGhUuFujiZV2eMEcaDimi4tZ6va5cfWjTkPh4t2osJ1UvrRpC",
  "key10": "5kjyGmoyiAic1QXKLMKNJAp15Bs4G535CPN8jcdkgVMPveKRNN9zVH6SMRHx3QwByn6fsHeVh1eYpLAHqnjKHbVT",
  "key11": "4dUBLzpqSq7PeHruJu9dfrrmponYiWTNiK4nBvH9txVUETjsthyzLDY8ko27Kh4jWaQd77SwFktqVoJLFtLU2XTT",
  "key12": "5kA6E6dqjFpdvD6K4s49yHae5u3eWGpGYayJvj1XYFpxTkZGJSpEMn5yGiH7UqtWaJuWcPhd1yrW3idzzSP5LZwk",
  "key13": "3DhbBZ8prVoK1NJrzRdfpNQJ62awPxmSANL5dJgGwBdj5aeXJwdB8CrN5xHxPCVExxThPn1mHbG8CnSF14fNPWFu",
  "key14": "3JV9Hj9bybHKx85NEUJgLQ8oHfqmt84Chz2PHLCev4NRgp88xT5g2yBrwCDVAhzR92A379ATtstZ3miKw64CwyA9",
  "key15": "P3BuQTuY9SRrkNepDYq1k1qjtWXjobzx4CSkqPgB3LTpDbjDxQvGEgkDHKW175pfgD1tkco5njGHwzckWx5jQ7p",
  "key16": "5A7gWM1vyg59zNvdKGRdj2PtJb2UfyffVhfg8YHpw5KZsyWCnhmWqt9nYT8JUjfDSRgFxG7fnbuqMc8RFCaPtvrh",
  "key17": "4MW6uWJ11FmrpDPKFMK2HuNCGHYkeVa9CpUNw1KkV5D2ChxFmb42ps2sqz5hmsmALPRNjrCKxS2gWdLftZkvDGJm",
  "key18": "5nRJ4zrMzzPM71f1KrVcJFu3kVftmx18HFMwQHuNnLvi4cuaLuDxzofB2CyNHnyUDT9db3psHq3QJRe2j2eKL3Va",
  "key19": "4dcrW4axkuCRUeBM1MEGv73jGMHiaQX7VACQ9Sfoe5eizTJg8zEEAe5Y8Uo25ueGNMnzbeVaqUGLwwMCkwLyZfwf",
  "key20": "3vaSkwPBVumuCigE2PsysvN8fHtXhTW7J9NvbDECiX3TMeFxA6ciZUfC2byjxa9xc8fidJhFtbhG3DBwsMY2izKv",
  "key21": "4ejwQFcKm4fhpqWqtpgedQ3cPD63xjZG7i69ZzjAc1X7PAS2z34bfgSZwSodU8zdFQTaYobNksDJd5Eu2Hwm5A7Q",
  "key22": "GDWe1TotSVpW9MPYHuLMGWduKFi5MMzZ8P9ydscLtoyjFanSpsuErntPn6r65y1Z6iPyFM9MWUWPRVR9iTNvaws",
  "key23": "ZwtUaCwxk8CkwLo2W2MqvirJgqYzutUxBWpaJZXvuJHkq1Ydb4eice1EEZVHo96KpfC5zGQe938WQwB4DxQ85wA",
  "key24": "48w6nyA8vPi6CykHQUHAsNFPPU935uFoSonaRiiRFC2y72YmTMa4p9xtvxivbV3r6ostV54nPYncigdS66FYBofU",
  "key25": "4Nr6a7FwpRxWTVNtzUkPDXFaVMD62Z2ywM3XeXNySQaF9KDqpA4f9TFmFifZvYLsvfSgizf4pnCWKz4h5eKJ5U3T",
  "key26": "phHVdFK4STE99r3f4qxYmEzj4ePXwY6FkNQGgDYS22BPZ26b3zr3EEnUqummyearg8F4fzFFCwR9Ei3Ru46vA8A",
  "key27": "4jsHjY9VrxLW5mdgCu8mm9gjyeQoDVdGeXnDhHnxzu82kHGZg9ASw78ZqTwUmC5cR671qufGihvDcGmEWjmq5QxS",
  "key28": "2hPmKkoB6iRKJv2auJesD5dvQJTqDdFQrFoX2tDit5gB1t5LMb8igsbs16RMh9y1rNC4MigthT6q9iddxUghLFHE",
  "key29": "4vpMwiSvYMLqDpnCd8gXvSqPc56VDnsjsfpDVnswVBdgPQiWUhYZKqvQdKfe9BvAUiySfiSeGbCcJbPNeFFVKq5P",
  "key30": "3T7RuzvRjDwpYSk4542AsyxMMqzCXWWZWQQsviu4Fv2zNwHHU6Jc8NAX2HyDamkp5owbuXp3yto7Nck8dec1os1X",
  "key31": "5CRFZ7pBLRoj3FKDPJR9c6NKLFC3ZXBXMU2mdHXUuRbvrS2wHj2m9ipZD1PQfWX9h3gUcgauo5HLnmPhme1dHzMo",
  "key32": "5TxRwDfjUqT5RZ5TedN8t6dyW4GHvhGUgtHVmwYrLrNF9tiW1Bi7e2k7XyD2mcF1irAjedyARWKpSr2BKNehUyp2",
  "key33": "2gwzcamC6kZbvATxmbz8JxyATGqPr7qjg4iNHCsmWSeXzJgSTTo1PpgMc5Ti3DuNVomH8wSfsSYUsDZ9VrHpJJ5M",
  "key34": "4VatqECgATL18cruifSZrV8aof5REJR9VUPHD8osHwwdWsumtdz85ppKkbWsi3EZ6pkhFTu5ikAASPfqM9Fe6roD",
  "key35": "3MjMxUowC4iEugvsUH3PbicYS36Hggk9cDXmQ82Xm3zbZdJEePv1v18NDjGkcqKWngWvmBSQ1P26zue34LT7ETvv"
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
